"""Verify pinned fixture content; --release additionally enforces the source gate."""
import json, re, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
d=json.loads((root/'dist/review-data.json').read_text())
assert d['source']['commit']=='23cdac2d791cf1a0f25d80d82bc02a1f3922793c'
assert len(d['files'])==52 and len({f['path'] for f in d['files']})==52
assert sum(f['added'] for f in d['files'])==5722
assert sum(f['deleted'] for f in d['files'])==127
for f in d['files']:
 before=[];after=[];bi=ai=0;adds=dels=0
 for h in f['hunks']:
  m=re.match(r'@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@',h['header']);bs,bc,as_,ac=map(int,[m[1],m[2] or 1,m[3],m[4] or 1])
  bstart=bs-1 if bc else bs;astart=as_-1 if ac else as_
  assert f['before'][bi:bstart]==f['after'][ai:astart],('gap mismatch',f['path'])
  before+=f['before'][bi:bstart];after+=f['after'][ai:astart]
  for r in h['rows']:
   if r['before'] is not None:assert f['before'][r['before']-1]==r['text'];before.append(r['text'])
   if r['after'] is not None:assert f['after'][r['after']-1]==r['text'];after.append(r['text'])
   adds+=r['kind']=='+';dels+=r['kind']=='-'
  bi=bstart+bc;ai=astart+ac
 assert f['before'][bi:]==f['after'][ai:],('tail mismatch',f['path'])
 before+=f['before'][bi:];after+=f['after'][ai:]
 assert before==f['before'] and after==f['after'],f['path']
 assert (adds,dels)==(f['added'],f['deleted']),f['path']
assert d['thread']['status']=='Resolved' and d['thread']['severity']=='Major' and d['thread']['replies']==2
assert all(f['layerId'] is None for f in d['files'] if not f['layerVerified'])
print('PASS: 52 complete before/after reconstructions; every hunk line; +5722/-127; resolved finding metadata.')
if '--release' in sys.argv:
 missing=[k for k,v in d['releaseGate'].items() if not v]
 if missing or any(not f['layerVerified'] for f in d['files']):
  print('RELEASE BLOCKED:',', '.join(missing),'| 43 assignments pending');sys.exit(2)
 for i,layer in enumerate(d['layers']):
  members=[f for f in d['files'] if f['layerId']==i]
  assert len(members)==layer['files'],('layer file count',i)
  assert sum(f['added'] for f in members)==layer['added'],('layer additions',i)
  assert sum(f['deleted'] for f in members)==layer['deleted'],('layer deletions',i)
 print('PASS: source release gate')
