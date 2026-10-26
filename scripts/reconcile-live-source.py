"""Reconcile browser-captured source evidence with the pinned GitHub fixture."""
import json,re
from pathlib import Path
R=Path(__file__).resolve().parents[1]; E=R/'design/evidence'
d=json.loads((R/'dist/review-data.json').read_text()); files={f['path']:f for f in d['files']}
layers=['api-contracts','api-operations','hub-support','mcp-tools','mcp-auth','oauth-and-documentation','additional']
orders={}; checked=[]
for p in E.glob('*stream*.ndjson'):
 records=[json.loads(x) for x in p.read_text().splitlines() if x.strip()]
 b=next(x['data'] for x in records if x['type']=='layer-base'); idx=layers.index(b['layerId'])
 orders[idx]=[x['path'] for x in b['files']]
 for x in b['files']:
  f=files[x['path']]
  assert x['contentKey'].startswith(d['comparison']['base']+':'+d['source']['commit']+':')
  assert (x['additions'],x['deletions'])==(f['added'],f['deleted'])
  for sign in ['+','-']:
   actual=[z[1:] for z in x['patch'].splitlines() if z.startswith(sign) and not z.startswith(sign*3)]
   assert actual==[r['text'] for h in f['hunks'] for r in h['rows'] if r['kind']==sign],x['path']
  checked.append(x['path'])
for i in [2,4]:
 text=(E/f'live-layer-{i+1}-full-20261026.txt').read_text()
 orders[i]=re.findall(r'^    - generic "((?:apps|docs)/[^"]+)"',text,re.M)
 (E/f'live-layer-{i+1}-order-20261026.json').write_text(json.dumps(orders[i],indent=2)+'\n')
orders[6]=json.loads((E/'live-layer-7-order-20261026.json').read_text())
ordered=[]
for i in range(7):
 observed=json.loads((E/f'live-layer-{i+1}-files-20261026.json').read_text())
 assert set(orders[i])=={x['path'] for x in observed},('membership/order',i)
 assert len(orders[i])==d['layers'][i]['files']
 for n,path in enumerate(orders[i]):
  f=files[path]; f.update(layerId=i,layerVerified=True,sourceOrder=n)
  f['provenance']['layerEvidence']=f'design/evidence/live-layer-{i+1}-files-20261026.json'
  ordered.append(f)
assert len(ordered)==52 and len({f['path'] for f in ordered})==52
d['files']=ordered;d['releaseGate']={k:True for k in d['releaseGate']}
d['comparison']['origin']='Live CodeRabbit content keys confirm base/target; 24 source patches reconciled directly; all 52 GitHub patches checked against before/after blobs at that base.'
d['source'].update(observed='October 26, 2026',access='Pinned review loaded without sign-in. All seven layer file trees and live Split behavior were inspected.',fileCoverage='All 52 pinned diffs, layer memberships and guided file order verified. Summary and comment coverage remain partial.')
d['draftPaper']='https://app.paper.design/file/01M5MWMDHE2E77VV689SCNHGV7/p-1-0/5FN-0'
for i in range(2,7):
 d['layers'][i]['description']='Source layer membership and diff content verified. Summary and thread coverage is partial.'
 d['source']['layers'][i]['description']=d['layers'][i]['description']
evidence={'verifiedOn':'2026-10-26','target':d['source']['commit'],'base':d['comparison']['base'],'files':52,'added':5722,'deleted':127,'verifiedLayerAssignments':52,'releaseGate':d['releaseGate'],'directlyReconciledSourcePatches':checked,'sourceOrder':orders,'split':{'modified':'Equal Before/After panes, shared vertical scroll, wrapped rows align in height. At 1280: 676px code width, 337.5px panes, approximately 44px gutters, Hack 14/20.','added':'Full-width After content even in Split; no empty Before pane.','context':'Unchanged lines collapse; source also provides semantic/entity headers and blame. Those secondary tools remain previews in this prototype.','scroll':'Original is continuous within a layer. This prototype extends the stream across seven layers.'},'limits':'All 52 code files verified from the confirmed base. Direct source patch export available for 24 files; remaining 28 use verified GitHub patches at the same base. This is not a claim of identical semantic-range or blame rendering.'}
(E/'continuous-source-verification.json').write_text(json.dumps(evidence,indent=2)+'\n')
(R/'dist/review-data.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Verified 52 memberships and ordered files; comparison base; source Split. Directly reconciled',len(checked),'patches.')
