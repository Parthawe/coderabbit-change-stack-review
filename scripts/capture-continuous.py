import json,urllib.request,concurrent.futures,hashlib,difflib
from pathlib import Path
R=Path(__file__).resolve().parent.parent
comparison=json.loads((R/'design/evidence/pinned-comparison-full.json').read_text())
old=json.loads((R/'dist/review-data.json').read_text())
target='23cdac2d791cf1a0f25d80d82bc02a1f3922793c'
base=comparison['merge_base_commit']['sha']
existing={f['path']:f for f in old['files']}
verified={p for p,f in existing.items() if f.get('layerVerified',str(f['id']).isdigit() and int(f['id'])<9)}
def read(sha,path):
    u='https://raw.githubusercontent.com/formbricks/formbricks/'+sha+'/'+urllib.parse.quote(path)
    with urllib.request.urlopen(u,timeout=60) as r: return r.read().decode('utf-8')
def capture(pair):
    i,f=pair; path=f['filename']; before='' if f['status']=='added' else read(base,f.get('previous_filename',path));after='' if f['status']=='removed' else read(target,path)
    seed=existing.get(path,{});a=before.splitlines();b=after.splitlines()
    # Preserve GitHub's own patch, including its exact hunk boundaries.
    patch=f.get('patch'); assert patch is not None,path
    import re
    oldn=newn=0;hunks=[]
    for line in patch.splitlines():
        if line.startswith('@@'):
            match=re.match(r'@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@',line);assert match,line
            oldn,newn=int(match[1]),int(match[3]);hunks.append({'header':line,'rows':[]});continue
        if line.startswith('\\'):continue
        kind=line[:1]; text=line[1:]; assert kind in (' ','+','-'),line
        row={'kind':kind,'text':text,'before':oldn if kind!='+' else None,'after':newn if kind!='-' else None}
        if kind!='+':assert a[oldn-1]==text,(path,oldn);oldn+=1
        if kind!='-':assert b[newn-1]==text,(path,newn);newn+=1
        hunks[-1]['rows'].append(row)
    assert sum(r['kind']=='+' for h in hunks for r in h['rows'])==f['additions'],path
    assert sum(r['kind']=='-' for h in hunks for r in h['rows'])==f['deletions'],path
    return {**seed,'id':seed.get('id','file-'+hashlib.sha256(path.encode()).hexdigest()[:12]),'path':path,'name':seed.get('name',path.split('/')[-1]),'status':f['status'],'added':f['additions'],'deleted':f['deletions'],'before':a,'after':b,'lines':b,'hunks':hunks,'layerId':seed.get('layerId') if path in verified else None,'layerVerified':path in verified,'summaries':seed.get('summaries',[]),'summaryCount':seed.get('summaryCount'),'comments':seed.get('comments'),'provenance':{'base':base,'target':target,'beforeSha256':hashlib.sha256(before.encode()).hexdigest(),'afterSha256':hashlib.sha256(after.encode()).hexdigest()}}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:files=list(pool.map(capture,enumerate(comparison['files'])))
files.sort(key=lambda f:(f.get('layerId') if f.get('layerId') is not None else 99, f.get('sourceOrder',999),f['path']))
old.update({'files':files,'schemaVersion':2,'comparison':{'base':base,'target':target,'origin':old.get('comparison',{}).get('origin','GitHub compare; source verification required')},'releaseGate':old.get('releaseGate',{'layerAssignments':False,'sourceSplitBehavior':False,'comparisonBase':False}),'draftPaper':old.get('draftPaper')})
(R/'dist/review-data.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n')
# Re-run reconcile-live-source.py after capture to revalidate browser evidence.

print('Captured and verified',len(files),'patches; assigned',sum(f['layerVerified'] for f in files),'source-verified layer memberships.')
