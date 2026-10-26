const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const d=JSON.parse(fs.readFileSync('dist/review-data.json','utf8'));
assert.equal(d.source.commit,'23cdac2d791cf1a0f25d80d82bc02a1f3922793c');
assert.deepEqual(d.reviewSignals.severityCounts,{Major:2,Minor:2,Trivial:3});
assert.equal(d.layers.filter(l=>l.reviewSignals.total>0).length,4);
assert.equal(d.layers.reduce((n,l)=>n+l.reviewSignals.total,0),7);
assert.equal(d.layers[0].reviewSignals.severityCounts.Nitpick,1);
assert.equal(d.layers[0].reviewSignals.severityCounts.Trivial,undefined);
for(const f of d.files) {assert.ok(f.reviewSignals); if(f.comments===null) assert.notEqual(f.reviewSignals.total,0);}
for(const link of d.permissionPath){const f=d.files.find(f=>f.id===link.file);assert.ok(f&&link.start>0&&link.end<=f.after.length);}
const app=fs.readFileSync('dist/app.js','utf8');
const themeCode=app.slice(app.indexOf('const themeQuery'));
for(const saved of [null,'light','dark','system','invalid']) {
 let change,os; const doc={documentElement:{dataset:{},style:{}},addEventListener:(event,fn)=>change=fn};
 const media={matches:true,addEventListener:(event,fn)=>os=fn};
 const ctx={document:doc,window:{matchMedia:()=>media},localStorage:{getItem:()=>saved,setItem:()=>{}},announce:()=>{}};
 vm.runInNewContext(themeCode,ctx);
 assert.equal(doc.documentElement.dataset.theme,['dark','system'].includes(saved)?'dark':'light');
 change({target:{name:'theme',value:'dark'}});media.matches=false;os();assert.equal(doc.documentElement.dataset.theme,'dark');
 change({target:{name:'theme',value:'system'}});assert.equal(doc.documentElement.dataset.theme,'light');media.matches=true;os();assert.equal(doc.documentElement.dataset.theme,'dark');
 change({target:{name:'theme',value:'light'}});os();assert.equal(doc.documentElement.dataset.theme,'light');
}
const css=fs.readFileSync('dist/signals-theme.css','utf8');
const luminance=h=>{let a=h.replace('#','');if(a.length===3)a=a.split('').map(c=>c+c).join('');let v=[0,2,4].map(i=>parseInt(a.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722};
for(const selector of [':root {',':root[data-theme="dark"] {']) {
 const block=css.slice(css.indexOf(selector)).split('}')[0];let tokens={};for(const m of block.matchAll(/--([\w-]+):\s*(#[0-9a-f]+)/g)) tokens[m[1]]=m[2];
 for(const [fg,bg] of [['text','canvas'],['text','surface'],['muted','canvas'],['muted','diff-add'],['muted','diff-del'],['danger','canvas'],['success','canvas'],['minor','canvas'],['accent','statement-bg'],['text','range-bg'],['syntax-key','diff-add'],['syntax-string','diff-add']]) {
 const a=luminance(tokens[fg]),b=luminance(tokens[bg]),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert.ok(ratio>=4.5,`${selector} ${fg}/${bg}: ${ratio}`);
 }
}
console.log('PASS: source signal totals, unknown coverage, distinct labels, permission ranges, theme persistence/OS policy and text contrast in both themes.');
