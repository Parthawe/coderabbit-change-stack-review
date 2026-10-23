/* Independent design prototype. Fixture reads only; review state stays in this tab. */
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let data,restoreFocus,toastTimer,arrivalFrame,arrivalVersion=0,focusOrigin,loadingPromise,loadState='idle',undoEpoch=0;
const linkIcon='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 10 4-4M5.5 6.5l-1 1a2.8 2.8 0 0 0 4 4l1-1M6.5 5.5l1-1a2.8 2.8 0 0 1 4 4l-1 1"/></svg>';
const checkIcon='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8 3 3 6-6"/></svg>';
const reducedMotion=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
const state={layer:0,file:'0',lastFile:'0',expanded:true,viewed:new Set(),seen:new Set(),summary:'0-49',complexity:'All',focus:false,mode:'unified',tab:'summaries',showResolved:false,thread:false,commentLine:null,codeRange:null,notes:new Map(),emptyDemo:false,fullFile:true,collapsed:false,fileViews:new Map(),openDetails:new Set(),wrap:true,activeLine:75,pendingUndo:null,anchorSelections:new Map(),splitEqual:false,splitWrap:true,scope:"file",returnTrail:[],fileNote:false,reviewDecision:"comment"};
const currentFile=()=>state.layer===0?data.files.find(f=>f.id===state.file):null;
const currentSummary=()=>currentFile()?.summaries.find(s=>s.id===state.summary);
const evidenceAnchors={
 '0-49':[
  {key:'access',label:'Require workspace access',start:57,end:65},
  {key:'directories',label:'Load feedback directories',start:70,end:70},
  {key:'normalize',label:'Normalize tenant IDs',start:75,end:75},
  {key:'dataset',label:'Check dataset membership',start:77,end:97},
  {key:'configuration',label:'Reject missing or ambiguous datasets',start:99,end:120},
  {key:'context',label:'Return tenant context',start:122,end:129}],
 '0-156':[
  {key:'hub',label:'Handle Hub failures',start:164,end:175},
  {key:'ownership',label:'Check permitted tenant',start:179,end:183},
  {key:'result',label:'Return the permitted record',start:185,end:185}]
};
const lineLabel=a=>a.start===a.end?`L${a.start}`:`L${a.start}–${a.end}`;
const anchorsFor=s=>evidenceAnchors[s?.id]||[];
function anchorFor(s=currentSummary()){
 if(!s)return null;const saved=state.anchorSelections.get(s.id);
 if(saved==='whole')return {key:'whole',label:'Whole function',start:s.start,end:s.end};
 if(saved==='start')return {key:'start',label:'Summary start',start:s.start,end:s.start};
 return anchorsFor(s).find(a=>a.key===saved)||anchorsFor(s).find(a=>a.key===(s.id==='0-49'?'normalize':'ownership'))||anchorsFor(s)[0]||{key:'start',label:'Summary start',start:s.start,end:s.start}
}
const wrapsCode=()=>state.mode==='split'?state.splitWrap:state.wrap;
function scrollToEvidence(smooth=false,emphasize=false){const a=anchorFor();if(a)scrollToLine(a.start,smooth,emphasize,a.key==='start'?0:7)}
const noteKey=()=>currentFile()?(state.fileNote?`${state.file}:file`:state.commentLine?`${state.file}:${state.commentLine}`:null):null;
const currentNote=()=>state.notes.get(noteKey())||{draft:'',saved:''};
function dismissToast(){state.pendingUndo=null;clearTimeout(toastTimer);$('#toast').hidden=true}
function scheduleToast(){clearTimeout(toastTimer);if($('#toast').contains(document.activeElement)||$('#toast').matches(':hover'))return;toastTimer=setTimeout(dismissToast,8000)}
function toast(t,undo){
 if(!undo&&state.pendingUndo){$('#interaction-status').textContent=t;return}
 const el=$('#toast'),epoch=undoEpoch;clearTimeout(toastTimer);state.pendingUndo=undo||null;
 el.innerHTML=`<span>${esc(t)}</span>${undo?'<button type="button">Undo</button>':''}`;el.hidden=false;
 if(undo)el.querySelector('button').onclick=()=>{if(epoch!==undoEpoch)return;undo();dismissToast();currentFile()?.lines?$('#viewed').focus():$('.layer.selected')?.focus()};scheduleToast()
}
$('#toast').addEventListener('focusin',()=>clearTimeout(toastTimer));
$('#toast').addEventListener('mouseenter',()=>clearTimeout(toastTimer));
$('#toast').addEventListener('focusout',scheduleToast);
$('#toast').addEventListener('mouseleave',scheduleToast);
function updateViewedButton(){const f=currentFile(),viewed=!!f&&state.viewed.has(f.id);$('#viewed').innerHTML=viewed?checkIcon+'<span>Viewed</span>':'Mark viewed';$('#viewed').setAttribute('aria-pressed',String(viewed))}
function openDialog(title,html){restoreFocus=document.activeElement;$('#dialog-title').textContent=title;$('#dialog-content').innerHTML=html;$('#dialog').classList.remove('is-confirmed');$('#dialog').showModal()}
$('#dialog').addEventListener('close',()=>{if(restoreFocus?.isConnected&&!restoreFocus.disabled)restoreFocus.focus();else $('#notes').focus()});
$('#dialog').addEventListener('click',e=>{if(e.target===$('#dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
function renderNav(){
 const fileScroll=$('#layer-list .layer-files')?.scrollTop||0;
 $('#layer-jump').innerHTML=data.layers.map((l,i)=>`<button data-jump-layer="${i}" aria-label="Layer ${i+1}: ${esc(l.name)}" title="${esc(l.name)}" aria-current="${i===state.layer?'true':'false'}">${i+1}</button>`).join('');
 const active=document.activeElement,navActive=$('#layer-list').contains(active),key=navActive?['layer','file','viewFile'].find(k=>active.dataset[k]!==undefined):null,value=key&&active.dataset[key];
 $('#layer-list').innerHTML=data.layers.map((l,i)=>`<div class="layer-group"><button class="layer ${i===state.layer?'selected':''}" data-layer="${i}" ${l.severityNote?`title="${esc(l.severityNote)}"`:""} aria-expanded="${i===state.layer&&state.expanded}" ${i===state.layer?'aria-current="true"':''}><span class="layer-number">${i+1}</span><span class="layer-copy"><strong>${esc(l.name)}</strong><small>${l.files} files${i===0?` · ${state.viewed.size} / 9 viewed`:''}${l.findings?' · '+l.findings+' finding'+(l.findings===1?'':'s'):''}${l.severity?' · '+esc(l.severity):''}</small></span><svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m6 4 4 4-4 4"/></svg></button>${i===state.layer&&state.expanded?`<div class="layer-files">${i===0?data.files.map(f=>`<div class="file-nav-row"><label class="file-viewed-target"><input class="file-viewed" type="checkbox" data-view-file="${f.id}" aria-label="Mark ${esc(f.name)} viewed" ${state.viewed.has(f.id)?'checked':''} ${f.lines?'':'disabled title="Patch not captured"'}></label><button class="file-nav" data-file="${f.id}" ${f.id===state.file?'aria-current="true"':''} title="${esc(f.path)}${f.lines?'':' · Patch not captured'}">${esc(f.name)}</button></div>`).join(''):'<p class="source-gap">File inventory is outside this focused prototype.</p>'}</div>`:''}</div>`).join('');
 if($('#layer-list .layer-files'))$('#layer-list .layer-files').scrollTop=fileScroll;
 if(key){const attr=key==='viewFile'?'view-file':key;$(`#layer-list [data-${attr}="${value}"]`)?.focus({preventScroll:true})}
 const selected=$('#layer-list .file-nav[aria-current="true"]');if(selected){const nav=selected.closest('.layer-files'),r=selected.getBoundingClientRect(),bounds=nav.getBoundingClientRect();if(r.bottom>bounds.bottom)nav.scrollTop+=r.bottom-bounds.bottom;else if(r.top<bounds.top)nav.scrollTop+=r.top-bounds.top}updateProgress()
}
function updateProgress(){
 const count=data.files.filter(f=>f.lines&&state.viewed.has(f.id)).length;
 $('#progress').textContent=`Sample · ${count} / 7 viewed`;$('#remaining').textContent=`${7-count} left`;$('#file-progress').value=count;$('#file-progress').textContent=`${count} of 7`;
 if(state.layer===0)$('#summary-progress').textContent=`${state.seen.size} / 37 layer summaries seen`
}
function codeScroller(){return $('#split-after')||$('#diff')}
function readingPosition(){
 const el=codeScroller(),bounds=el.getBoundingClientRect(),row=$$('.code-row[data-line]').find(r=>r.getBoundingClientRect().bottom>bounds.top+2);
 return {top:el.scrollTop,left:el.scrollLeft,line:row?.dataset.line,offset:row?row.getBoundingClientRect().top-bounds.top:0}
}
function restoreReadingPosition(position){
 const el=codeScroller(),row=position.line&&$(`#diff [data-line="${position.line}"]`);
 const offset=row?Math.max(position.offset,-Math.max(0,row.getBoundingClientRect().height-4)):0;
 const top=row?row.getBoundingClientRect().top-el.getBoundingClientRect().top+el.scrollTop-offset:position.top;
 el.scrollTo({top,left:position.left,behavior:'instant'})
}
function activeRange(){
 if(state.codeRange)return state.codeRange;
 if(state.tab==='comments')return state.commentLine?[state.commentLine,state.commentLine]:state.thread&&state.showResolved&&currentFile()?.id==='0'?[75,90]:null;
 const a=anchorFor();return a?[a.start,a.end]:null
}
function rememberFile(){
 const f=currentFile(),scroller=codeScroller();if(!f)return;
 state.fileViews.set(f.id,{top:scroller.scrollTop,left:scroller.scrollLeft,summary:state.summary,tab:state.tab,fileNote:state.fileNote,commentLine:state.commentLine,thread:state.thread,complexity:state.complexity,contextTop:$('#context-scroll').scrollTop,activeLine:state.activeLine})
}
function configureFile(f){
 const saved=state.fileViews.get(f.id);state.summary=saved?.summary??f.summaries[0]?.id??null;state.tab=saved?.tab||'summaries';state.complexity=saved?.complexity||'All';
 state.fileNote=!!saved?.fileNote;state.commentLine=saved?.commentLine||null;state.thread=!!saved?.thread;state.activeLine=saved?.activeLine||activeRange()?.[0]||1;state.codeRange=null;state.collapsed=false;state.emptyDemo=false
}
function restoreFilePosition(){
 const f=currentFile(),saved=f&&state.fileViews.get(f.id),scroller=codeScroller();
 if(saved){scroller.scrollTo({top:saved.top,left:saved.left,behavior:'instant'});$('#context-scroll').scrollTop=saved.contextTop||0}
 else{const range=activeRange();if(range){if(state.tab==='summaries')scrollToEvidence();else scrollToLine(range[0],false)}else scroller.scrollTo({top:0,left:0,behavior:'instant'});$('#context-scroll').scrollTop=0}
}
function setLayer(n){
 n=Math.max(0,Math.min(data.layers.length-1,n));if(n===state.layer)return;rememberFile();state.layer=n;state.expanded=true;
 if(n===0){state.file=state.lastFile;configureFile(currentFile())}else{state.fileNote=false;state.commentLine=null;state.thread=false;state.summary=null;state.codeRange=null;state.tab='summaries'}
 renderScreen();restoreFilePosition();$(`#layer-list [data-layer="${n}"]`)?.focus();$('#interaction-status').textContent=`Layer ${n+1} of ${data.layers.length}. ${data.layers[n].name}.`
}
function selectFile(id){
 const f=data.files.find(x=>x.id===id);if(!f)return;rememberFile();state.layer=0;state.file=id;state.lastFile=id;state.expanded=true;configureFile(f);renderScreen();restoreFilePosition();
 const rail=$('#layer-list'),heading=$('.layer.selected'),railTop=rail.getBoundingClientRect().top,headingTop=heading?.getBoundingClientRect().top;if(headingTop<railTop)rail.scrollTop+=headingTop-railTop;
 $('#interaction-status').textContent=`${f.name}. File ${data.files.indexOf(f)+1} of ${data.files.length}. ${state.viewed.has(id)?'Viewed':'Not viewed'}.`
}
function stepFile(direction){const i=data.files.findIndex(f=>f.id===state.file),next=data.files[i+direction];if(!currentFile()||!next)return;selectFile(next.id);const trigger=$('#'+(direction<0?'previous-file':'next-file'));if(trigger.disabled)$('#file-position').focus();else trigger.focus()}
function syncTabs(){for(const n of ['summaries','comments']){const yes=n===state.tab;$(`#${n}-tab`).setAttribute('aria-selected',String(yes));$(`#${n}-tab`).tabIndex=yes?0:-1;$(`#${n}-panel`).hidden=!yes}}
function renderScreen(){
 closeOutline();
 const l=data.layers[state.layer],f=currentFile();renderNav();$('#layer-title').textContent=l.name;$('#layer-position').textContent=`Layer ${state.layer+1} of 7`;
 $('#layer-description>p').textContent=l.description;
 $('.file-toolbar').hidden=!f;$('#diff-status').hidden=!f;$('#diff').hidden=!f;$('#unavailable').hidden=!!f;
 if(f){$('.file-path').textContent=f.path.split('/').slice(0,-1).join(' / ');$('.file-path').title=f.path;$('.filename strong').textContent=f.name;$('.add-count').textContent='+'+f.added;$('.del-count').textContent='−'+f.deleted;const position=data.files.indexOf(f)+1;$('#file-position').innerHTML=`${position} / ${data.files.length} <span aria-hidden="true">▾</span>`;$('#file-position').setAttribute('aria-label',`File ${position} of ${data.files.length}. Open file list`);$('#previous-file').disabled=position===1;$('#next-file').disabled=position===data.files.length;$('#viewed').disabled=!f.lines;updateViewedButton();renderDiff()}
 $('#summaries-tab span').textContent=f?f.summaryCount:'—';$('#comments-tab span').textContent=f?f.comments:(l.comments??'—');
 $('#summary-progress').textContent=state.layer===0?`${state.seen.size} / 37 layer summaries seen`:'No summary fixture for this layer';
 $('.context-hint').textContent=f?`${f.summaries.length} of ${f.summaryCount} summaries included`:'Layer metadata captured; detailed content is outside this prototype.';
 $('#complexity-controls').hidden=!f;renderSummaries();renderComments();syncTabs();$('#return-file').textContent=`Return to ${data.files.find(x=>x.id===state.lastFile)?.name||'access.ts'}`;
}
function syncScope(){
 const f=currentFile(),layer=state.scope==='layer',available=state.layer===0;$('.scope-switch').hidden=!available;
 $$('.scope-switch button').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.scope===state.scope));b.disabled=!available});
 $('#scope-description').textContent=!available?'Layer context; detailed content not captured':layer?'Context for the entire layer':`Context for ${f.name}`;
 $('#summaries-tab span').textContent=available?(layer?37:f.summaryCount):'—';$('#comments-tab span').textContent=available?(layer?data.files.reduce((n,x)=>n+x.comments,0):f.comments):(data.layers[state.layer].comments??'—');
 $('.context-hint').textContent=!available?'Entire layer · detailed context not captured.':layer?'14 of 37 summaries captured across 9 files':`${f.summaries.length} of ${f.summaryCount} summaries included`;
 $('#complexity-controls').hidden=!available;
}
function summaryCard(s,f){
 const selected=state.summary===s.id&&state.file===f.id,compact=state.scope==='layer',full=selected&&!compact&&s.sourceDetails;
 return `<div class="summary-card ${compact?'compact-summary':''}"><button class="summary-item" data-summary="${s.id}" aria-pressed="${selected}"><span class="range">Lines ${s.range} · ${s.complexity}</span><strong>${esc(s.title)}</strong>${full||compact?'':`<span class="summary-body">${esc(s.body)}</span>`}</button>${full?`<div class="statement-list"><p>Check a statement against code.</p>${anchorsFor(s).map((a,i)=>`<div class="source-statement ${anchorFor(s)?.key===a.key?'is-active':''}"><span>${esc(a.label)}</span><button class="text-link source-anchor" data-evidence-summary="${s.id}" data-evidence-key="${a.key}" aria-label="${esc(a.label)}, ${lineLabel(a)}">${lineLabel(a)}</button>${i===0?'<button class="text-link guard-link" data-action="inspect-guard">Inspect guard in feedback-access.ts</button>':''}</div>`).join('')}</div><details class="source-summary" data-detail-summary="${s.id}" ${state.openDetails.has(s.id)?'open':''}><summary>Read full source summary</summary><p>${esc(s.sourceDetails.intro)}</p><ul>${s.sourceDetails.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></details>`:''}${selected&&!compact?anchorControls(s):''}${compact?'':`<button class="summary-seen text-link" data-seen="${s.id}" aria-pressed="${state.seen.has(s.id)}">${state.seen.has(s.id)?'Seen · undo':'Mark seen'}</button>`}</div>`
}
function renderSummaries(){
 syncScope();const f=currentFile(),list=$('#summary-list'),files=state.layer===0?(state.scope==='layer'?data.files:[f]):[],active=document.activeElement?.dataset,restore=active?.summary||active?.seen;
 list.innerHTML=files.map(file=>{const items=file.summaries.filter(s=>state.complexity==='All'||s.complexity===state.complexity);return `${state.scope==='layer'?`<h3 class="summary-file-heading"><button class="text-link" data-file="${file.id}">${esc(file.name)}</button><span>${file.summaries.length} / ${file.summaryCount} captured</span></h3>`:''}${items.length?items.map(s=>summaryCard(s,file)).join(''):`<p class="context-footnote">${file.summaries.length?'No captured summaries match this filter.':'Summary details and modified-file patch not captured.'}</p>`}`}).join('')||'<div class="empty-state"><h3>No summary fixture</h3><p>This layer’s detailed context was not captured.</p></div>';
 if(restore)$(`#summary-list [data-${active?.seen?'seen':'summary'}="${restore}"]`)?.focus({preventScroll:true});
 $$('#complexity-controls button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.complexity===state.complexity)))
}
function anchorControls(summary){
 const anchors=anchorsFor(summary);
 return `<div class="summary-anchors">${!summary.sourceDetails?anchors.map(a=>`<button class="text-link source-anchor" data-evidence-summary="${summary.id}" data-evidence-key="${a.key}">${esc(a.label)} · ${lineLabel(a)}</button>`).join(''):''}<button class="text-link" data-evidence-summary="${summary.id}" data-evidence-key="whole">Whole ${summary.id.startsWith('0-')?'function':'summary range'} · L${summary.range}</button><button class="text-link" data-evidence-summary="${summary.id}" data-evidence-key="start">Go to start · L${summary.start}</button></div>`
}
function highlightCode(text){
 const tokens=/(\/\/.*$|^\s*\*.*$|\/\*.*$)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|\b(import|from|export|type|const|let|async|await|function|return|if|else|throw|new|true|false|null|undefined|interface|describe|it|expect)\b/g;
 let out='',last=0;for(const m of text.matchAll(tokens)){out+=esc(text.slice(last,m.index));out+=`<span class="syntax-${m[1]?'comment':m[2]?'string':'keyword'}">${esc(m[0])}</span>`;last=m.index+m[0].length}return out+esc(text.slice(last));
}
function codeLine(text,n){
 const range=activeRange(),selected=range&&n>=range[0]&&n<=range[1],note=state.notes.get(`${state.file}:${n}`),hasNote=!!(note?.draft||note?.saved);
 return `<div class="code-row add ${selected?'selected-code':''}" data-line="${n}"><span class="line-num" aria-label="Old line none"></span><span class="line-num" aria-label="New line ${n}">${n}</span><span class="diff-sign" aria-hidden="true">+</span><code>${highlightCode(text)}</code><button class="comment-entry ${hasNote?'has-note':''}" data-comment-line="${n}" tabindex="${n===state.activeLine?0:-1}" aria-label="${hasNote?'Open local note':'Add local comment'} at line ${n}" title="${hasNote?'Open local note':'Add local comment'}">${hasNote?'●':'+'}</button></div>`
}
function renderDiff(){
 cancelAnimationFrame(arrivalFrame);arrivalVersion++;const f=currentFile(),el=$('#diff'),old=codeScroller(),top=old.scrollTop,left=old.scrollLeft;if(!f)return;
 const range=activeRange();el.classList.toggle('has-split',state.mode==='split'&&!!f.lines&&!state.collapsed);el.classList.toggle('wrap-code',wrapsCode());el.classList.toggle('compact-before',!state.splitEqual);el.tabIndex=state.mode==='split'&&f.lines&&!state.collapsed?-1:0;
 $('#diff-status').hidden=false;$('#diff-status').innerHTML=`<span class="diff-reading-controls"><span>${f.lines?(state.fullFile?'Full added file':'Captured ranges'):'Modified file'}</span><button type="button" id="wrap-code" data-action="wrap-code" aria-pressed="${wrapsCode()}" aria-label="Wrap long lines" ${!f.lines?'disabled':''}>Wrap ${wrapsCode()?'on':'off'}</button></span>${state.returnTrail.length?'<button class="text-link" data-action="return-context">Return to access.ts</button>':''}${range?`<span class="linked-range">${linkIcon}${state.tab==='summaries'?(anchorFor()?.key==='start'?'Summary start':'Evidence'):'Linked'} · ${lineLabel({start:range[0],end:range[1]})}</span>`:''}`;
 $('#unified').setAttribute('aria-pressed',String(state.mode==='unified'));$('#split').setAttribute('aria-pressed',String(state.mode==='split'));
 if(!f.lines){el.innerHTML='<div class="unavailable"><h3>This modified-file diff is outside the fixture</h3><p>Its path and change counts were verified. A patch is not reconstructed from the full file.</p><button class="primary" data-file="0">Return to access.ts</button></div>';return}
 if(state.collapsed){el.innerHTML='<div class="code-note">File diff collapsed. <button class="text-link" data-action="expand-file">Show diff</button></div>';return}
 let rows=[],gapStart=null;for(let i=0;i<f.lines.length;i++){const n=i+1,show=state.fullFile||f.summaries.some(s=>n>=s.start&&n<=s.end)||(range&&n>=range[0]&&n<=range[1]);if(!show){gapStart??=n;continue}if(gapStart!==null){rows.push({gap:`${gapStart}–${n-1} outside captured summary ranges`});gapStart=null}rows.push({n,text:f.lines[i]})}if(gapStart!==null)rows.push({gap:`${gapStart}–${f.lines.length} outside captured summary ranges`});
 if(!rows.some(r=>r.n===state.activeLine))state.activeLine=rows.find(r=>r.n)?.n||1;
 const content=rows.map(r=>r.gap?`<div class="hunk">${r.gap}</div>`:codeLine(r.text,r.n)).join('');
 if(state.mode==='split'){
  el.innerHTML=`<div class="split-label"><span>Before</span><span>After · added file</span></div><div class="split-view"><div class="split-pane before-pane" id="split-before" aria-label="Before · added file has no previous version"><div class="before-controls"><strong>File added</strong><p>No previous version</p><button type="button" id="before-size" data-action="split-before" aria-pressed="${state.splitEqual}">${state.splitEqual?'Compact before':'Equal panes'}</button></div></div><div class="split-pane" id="split-after" tabindex="0" role="region" aria-label="After code" aria-describedby="code-instructions"><div class="diff-content">${content}</div></div></div>`;
 }else el.innerHTML=`<div class="diff-content">${content}</div>`;
 const scroller=codeScroller();scroller.scrollTop=top;scroller.scrollLeft=left;
}
function scrollToLine(n,smooth=true,emphasize=false,contextLines=0){
 cancelAnimationFrame(arrivalFrame);const version=++arrivalVersion,el=codeScroller(),target=$(`#diff [data-line="${n}"]`);if(!target)return;
 const lead=$(`#diff [data-line="${Math.max(1,n-contextLines)}"]`)||target,bounds=el.getBoundingClientRect(),targetBounds=target.getBoundingClientRect();
 const contextTop=lead.getBoundingClientRect().top-bounds.top+el.scrollTop-8;
 // Wrapped context may be taller than the viewport. Keep the destination line visible first.
 const visibleTargetTop=targetBounds.bottom-bounds.top+el.scrollTop-el.clientHeight+24;
 const targetTop=targetBounds.top-bounds.top+el.scrollTop-8;
 const top=Math.max(0,Math.min(Math.max(contextTop,Math.min(visibleTargetTop,targetTop)),el.scrollHeight-el.clientHeight)),animate=smooth&&!reducedMotion();
 el.scrollTo({top,left:0,behavior:animate?'smooth':'instant'});
 if(!emphasize||reducedMotion())return;
 const started=performance.now();let stable=0,last=el.scrollTop;
 function arrive(){if(version!==arrivalVersion||!target.isConnected)return;const now=el.scrollTop;stable=Math.abs(now-last)<.5?stable+1:0;last=now;if(Math.abs(now-top)<1&&stable>1){target.classList.add('range-arrival');target.addEventListener('animationend',()=>target.classList.remove('range-arrival'),{once:true});return}if(performance.now()-started<1800)arrivalFrame=requestAnimationFrame(arrive)}
 arrivalFrame=requestAnimationFrame(arrive);
}
function selectSummary(id,anchorKey){
 state.scope='file';
 const owner=data.files.find(f=>f.summaries.some(s=>s.id===id));if(!owner)return;if(owner.id!==state.file||state.layer!==0)selectFile(owner.id);const summary=owner.summaries.find(x=>x.id===id);
 if(anchorKey&&[...anchorsFor(summary).map(a=>a.key),'start','whole'].includes(anchorKey))state.anchorSelections.set(id,anchorKey);state.fileNote=false;state.summary=id;state.activeLine=anchorFor(summary).start;state.commentLine=null;state.thread=false;state.codeRange=null;state.collapsed=false;state.tab='summaries';
 syncTabs();renderSummaries();renderComments();renderDiff();scrollToEvidence(true,true);$(`#summary-list [data-summary="${id}"]`)?.scrollIntoView({block:'nearest'});
 if(matchMedia('(max-width:1279px)').matches)openContext(false);
 const destination=anchorKey?$(`#summary-list [data-evidence-summary="${id}"][data-evidence-key="${anchorKey}"]`):$(`#summary-list [data-summary="${id}"]`);destination?.focus({preventScroll:true});$('#interaction-status').textContent=`${summary.title}. ${anchorFor(summary).label}, ${lineLabel(anchorFor(summary))}. Summary scope ${summary.range}.`
}
function toggleFocus(){
 const position=readingPosition(),active=document.activeElement,entering=!state.focus;
 if(entering)focusOrigin=active;cancelAnimationFrame(arrivalFrame);arrivalVersion++;state.focus=entering;document.body.classList.toggle('focus-mode',state.focus);
 $('#focus').setAttribute('aria-pressed',String(state.focus));$('#focus').innerHTML=`${state.focus?'Exit focus':'Focus'} <kbd>Z</kbd>`;
 if(entering&&active.closest('.navigation,.context-panel'))$('#focus').focus();
 if(!entering&&focusOrigin?.isConnected&&focusOrigin.offsetParent!==null)focusOrigin.focus({preventScroll:true});
 requestAnimationFrame(()=>restoreReadingPosition(position))
}
function toggleViewed(id=currentFile()?.id){
 const f=data.files.find(x=>x.id===id);if(!f?.lines)return;const wasViewed=state.viewed.has(f.id);wasViewed?state.viewed.delete(f.id):state.viewed.add(f.id);renderNav();updateViewedButton();
 toast(`${f.name} ${wasViewed?'marked unviewed':'marked viewed'}`,()=>{wasViewed?state.viewed.add(f.id):state.viewed.delete(f.id);renderNav();updateViewedButton();$('#interaction-status').textContent=`Undone. ${f.name} ${wasViewed?'viewed':'unviewed'}.`})
}
function setTab(name){
 const previous=activeRange()?.join('-');if(name==='comments')state.codeRange=null;state.tab=name;syncTabs();const next=activeRange();
 if(previous!==next?.join('-')){renderDiff();if(next){if(name==='summaries')scrollToEvidence();else scrollToLine(next[0],false)}}
 if(name==='comments')renderComments()
}
function openContext(moveFocus=true){
 if(state.focus)toggleFocus();$('#context').classList.add('is-open');$('#context-toggle').setAttribute('aria-expanded','true');
 if(moveFocus)$(`#${state.tab}-tab`).focus()
}
function closeContext(){ $('#context').classList.remove('is-open');$('#context-toggle').setAttribute('aria-expanded','false');if($('#context-toggle').offsetParent!==null)$('#context-toggle').focus();else codeScroller().focus() }
function fileNotes(){return [...state.notes.entries()].filter(([key,n])=>key.startsWith(state.file+':')&&(n.draft||n.saved)).map(([key,n])=>({line:key.endsWith(':file')?'file':Number(key.split(':')[1]),...n})).sort((a,b)=>a.line-b.line)}
function notesIndex(){const notes=fileNotes();return `<div id="local-notes-index">${notes.length?`<section class="local-notes"><h3>Local notes in this file · ${notes.length}</h3><p class="small">Private to this tab; separate from source comments.</p>${notes.map(n=>`<button class="local-note-link" data-note-line="${n.line}">${n.line==='file'?'File note':'Line '+n.line} · ${n.draft!==n.saved?'Unsaved changes':'Saved locally'}</button>`).join('')}</section>`:''}</div>`}
function updateNoteMarkers(){
 const index=$('#local-notes-index');if(index)index.outerHTML=notesIndex();const line=state.commentLine,note=state.notes.get(`${state.file}:${line}`),button=$(`[data-comment-line="${line}"]`),has=!!(note?.draft||note?.saved);
 if(button){button.classList.toggle('has-note',has);button.textContent=has?'●':'+';button.setAttribute('aria-label',`${has?'Open local note':'Add local comment'} at line ${line}`)}
}
function openNote(n){
 const f=currentFile();if(!f?.lines||n<1||n>f.lines.length)return;
 state.codeRange=null;state.fileNote=false;state.commentLine=n;state.activeLine=n;state.thread=false;state.emptyDemo=false;state.collapsed=false;state.tab='comments';syncTabs();renderDiff();scrollToLine(n,false);renderComments();openContext(false);$('#comment-draft').focus()
}
function renderComments(){
 const f=currentFile(),el=$('#comments-panel');const prefix=f?`<button class="text-link add-file-note" data-action="file-note">Add file note</button>`+notesIndex():'';
 if(state.commentLine||state.fileNote){const note=currentNote();el.innerHTML=prefix+`<div class="comment-thread"><button class="text-link" data-action="source-comments">Back to source comments</button><h3>Local note · ${esc(f.name)} · ${state.fileNote?'file note':'line '+state.commentLine}</h3><p>This draft belongs to the prototype and is never sent.</p><p id="saved-note" ${note.saved?'':'hidden'}><strong>Saved in this tab</strong><br><span id="saved-note-text">${esc(note.saved)}</span></p><label for="comment-draft">Local draft</label><textarea id="comment-draft">${esc(note.draft)}</textarea><button class="primary" data-action="save-draft">Save local draft</button></div>`;return}
 if(state.scope==='layer'&&state.layer===0){const count=data.files.reduce((n,x)=>n+x.comments,0);el.innerHTML=prefix+`<div class="source-filter"><span>${count} source messages across this layer</span></div><p class="small">One resolved thread is captured in access.ts; two reply bodies and the other files’ thread bodies are not reproduced.</p><button class="thread-summary" data-action="layer-thread"><strong>${esc(data.thread.title)}</strong><small>access.ts · Resolved · L${data.thread.start}–${data.thread.end}</small><span class="text-link">Open captured thread in this file</span></button>`;return}
 if(state.emptyDemo||f?.comments===0){el.innerHTML=prefix+`<div class="empty-state"><h3>No source comments to show</h3><p>${state.emptyDemo?'Labeled no-comments demonstration.':'No comment messages were shown for this file in the captured inventory.'}</p>${state.emptyDemo?'<button class="text-link" data-action="reset-empty">Return to source comments</button>':''}</div>`;return}
 if(!f){el.innerHTML='<div class="empty-state"><h3>Comments outside fixture</h3><p>The layer count may be captured, but no thread content is reproduced here.</p></div>';return}
 if(!state.showResolved){el.innerHTML=prefix+`<div class="empty-state"><h3>All ${f.comments} comments are resolved</h3><p>Resolved messages are hidden. Show them to inspect the captured history.</p><button data-action="show-resolved">Show resolved comments</button></div>`;return}
 if(f.id!=='0'){el.innerHTML=prefix+`<div class="empty-state"><h3>${f.comments} resolved messages in the source</h3><p>The count is verified; thread bodies for this file are outside the focused fixture.</p><button class="text-link" data-action="hide-resolved">Hide resolved comments</button></div>`;return}
 const t=data.thread;el.innerHTML=prefix+`<div class="source-filter"><span>Resolved messages shown</span><button class="text-link" data-action="hide-resolved">Hide</button></div><button class="thread-summary" data-action="open-thread"><strong>${esc(t.title)}</strong><small>${t.author} · ${t.severity} · Resolved · R${t.start}–${t.end}</small><span class="text-link">${state.thread?'Thread open':'Open historical thread'}</span></button>${state.thread?`<div class="comment-thread"><h3>Resolved source finding</h3><p>${esc(t.body)}</p><p class="small">Two reply bodies are not reproduced. Source resolution can be newer than the pinned code.</p><button class="text-link" data-comment-line="75">Add a local review note</button></div>`:''}`;
}
function showFiles(){if($('#dialog').open)$('#dialog').close();openDialog('Search layer 1 files',`<p>Nine verified file paths. Seven added-file diffs are included; two modified-file patches remain outside the fixture.</p><label for="file-search">Filter this layer’s files</label><input id="file-search" type="search" placeholder="Search nine verified paths"><p id="file-empty" class="small" hidden>No captured paths match. Clear the search to see all nine paths; other layers are outside this search.</p><div id="file-picker">${data.files.map(f=>`<button class="file-choice" data-file="${f.id}" data-path="${esc(f.path.toLowerCase())}"><span>${esc(f.path)}</span><small>${f.lines?'Added · +'+f.added:'Modified · patch not captured'}${state.viewed.has(f.id)?' · Viewed':''}</small></button>`).join('')}</div><div class="dialog-actions"><button value="cancel">Close</button></div>`)}
function showReview(){openDialog('Open-PR review demo',`<p>This demonstrates review decisions for an open pull request. Formbricks #8650 is merged. This is a simulation; nothing is sent to GitHub or CodeRabbit.</p><p class="small">Sample: ${data.files.filter(f=>f.lines&&state.viewed.has(f.id)).length} of 7 included diffs viewed. PR coverage: 7 of 52 diffs included. The other 45 diffs are outside this demo. Summary seen is separate.</p><fieldset><legend>Review decision</legend>${[['comment','Comment','Share feedback without a decision.'],['approve','Approve','Approve the pull request.'],['changes','Request changes','Ask for changes before merging.']].map(([v,t,d],i)=>`<label class="decision"><input type="radio" name="decision" value="${v}" ${state.reviewDecision===v?'checked':''}><span><strong>${t}</strong><small>${d}</small></span></label>`).join('')}</fieldset><div class="dialog-actions"><button value="cancel">Cancel</button><button class="primary" id="simulate-submit" type="button">Simulate submission</button></div>`)}
function confirmReview(){const value=$('input[name=decision]:checked').value;state.reviewDecision=value;const label=value==='approve'?'Approval':value==='changes'?'Request for changes':'Comment review';$('#dialog').classList.add('is-confirmed');$('#dialog-title').innerHTML=`<span class="confirmation-check">${checkIcon}</span>Review simulated`;$('#dialog-content').innerHTML=`<div class="confirmation-body"><p>${label} simulated.</p><p>Nothing was sent to GitHub or CodeRabbit.</p></div><div class="dialog-actions"><button value="return" id="return-review">Return to review</button></div>`;$('#return-review').focus()}
function showNotes(){openDialog('Source & prototype limits',`<p>Formbricks #8650 at the <a href="${esc(data.source.url)}" target="_blank" rel="noopener">assigned review run</a>, commit 23cdac2. This PR is merged, and the snapshot is out of date.</p><p>Seven of 52 file diffs are included. All seven layer names/counts and nine layer-1 paths were captured. Fourteen summaries have short descriptions; the six workspace-tenant checks have short labels and the original wording remains in Read full source summary. The two access.ts summaries have manually mapped code anchors; other summaries provide their captured start and range. Other low-complexity summary ranges remain previews. One resolved thread is paraphrased. Other content is labeled as preview.</p><details class="supporting-material"><summary>Optional supporting material</summary><p><a href="next.html">Next tests and sketches</a> · <a href="https://app.paper.design/file/01M5AQACJZP42ZGTRX7GF9ERE7/p-5-0" target="_blank" rel="noopener">Paper interaction states and review record</a></p><p class="small">The presentation follows the diagnosis and matched comparison with one review path: follow the access check into its guard, return to the caller, switch context scope, then mark viewed and Undo. J/K and Z are preserved source shortcuts.</p></details><div class="state-buttons"><button type="button" data-action="review-demo">Open-PR review demo</button><button type="button" data-demo="loading">Loading state</button><button type="button" data-demo="unavailable">Source rate-limit state</button><button type="button" data-demo="empty">No-comments state</button><button type="button" data-demo="reset">Reset demo</button></div><p class="small">Review decisions and drafts stay in this tab; reload resets them. Nothing is sent. <a href="FORMBRICKS-LICENSE.txt" target="_blank" rel="noopener">Formbricks source license</a></p><div class="dialog-actions"><button value="cancel">Close</button></div>`)}
function preview(name){if($('#dialog').open)$('#dialog').close();const descriptions={Overview:'Feedback records MCP integration · 52 files, seven layers. The selected review snapshot is out of date at 23cdac2. No live mergeability status is inferred.','Architecture impact':'The source exposes Security architecture impact. Its analysis was not captured; this is a placement preview.','Review history':'The captured source labels this review snapshot Stale / Out of date at commit 23cdac2. No other review history entries are fabricated.',Settings:'Unified/Split, Wrap, Full file and Captured ranges are demonstrated. Other display settings remain previews.', 'Continue':'Continue appears in the source context panel and on summaries. Its downstream workflow was not captured. This is a placement preview; it does not launch an agent or modify the PR.', 'Follow review':'The source exposes Follow review through Slack. Subscription and notification behavior are outside this prototype. Nothing is connected or sent.', 'Global Files mode':'The source offers a Files rail across the PR. This prototype keeps layer navigation and searches nine verified layer-1 paths; the full 52-file rail is outside scope.', 'Diagrams':'Diagrams is disabled in the captured source review. No diagram content was captured. This preview preserves its destination without inventing a diagram.','Low complexity':'Low-complexity summaries exist in the source, but their complete ranges were not captured. They are not counted as absent. Automatic follow-code and uncaptured summary controls remain placement previews.'};if(name==='Search pull request'){openDialog('PR search · preview',`<p>The original searches the pull request. This demo searches only nine verified layer-1 paths.</p><button type="button" data-action="files">Search layer 1 files</button><div class="dialog-actions"><button value="cancel">Return to review</button></div>`);return}if(!descriptions[name]){showNotes();return}openDialog(name,`<p>${descriptions[name]}</p><p class="small">Captured source or clearly labeled supporting preview. No external action.</p><div class="dialog-actions"><button value="cancel">Return to review</button></div>`)}
const semanticOutline=[['TResolveParams',23,30],['TResolvedFeedbackTenant',32,39],['resolveWorkspaceFeedbackTenant',49,130],['TRequireOwnedRecordParams',132,140],['requireOwnedFeedbackRecord',156,186],['forbidFeedbackRecord',193,194]];
function showTools(){openDialog('File tools',`<p>Full file displays all captured added-file lines. Captured ranges displays only included summary ranges. Neither reproduces layer-specific semantic diffs.</p><div class="state-buttons"><button type="button" data-action="full-file">${state.fullFile?'Show captured ranges only':'Show full added file'}</button><button type="button" data-action="copy-path">Copy file path</button><button type="button" data-action="wrap-code" aria-pressed="${wrapsCode()}">${wrapsCode()?'Unwrap':'Wrap'} long lines</button><button type="button" data-action="collapse-file">Collapse current diff</button></div><div class="dialog-actions"><button value="cancel">Return to review</button></div>`)}
function showOutline(){
 const panel=$('#outline-panel'),trigger=$('#file-outline'),r=trigger.getBoundingClientRect();
 panel.innerHTML=`<div class="outline-heading"><strong>Semantic outline</strong><button type="button" data-action="close-outline" aria-label="Close outline">Close</button></div>${currentFile()?.id==='0'?`<p>Six entities manually mapped to access.ts.</p>${semanticOutline.map(([name,start,end])=>`<button class="outline-choice" data-outline="${start}" data-outline-end="${end}"><span>${name}</span><small>L${start}–${end}</small></button>`).join('')}`:'<p>Entities for this file have not been mapped. The full file remains available.</p>'}`;
 panel.style.left=Math.max(12,Math.min(r.right-360,innerWidth-372))+'px';panel.style.top=(r.bottom+8)+'px';panel.showPopover();trigger.setAttribute('aria-expanded','true');panel.querySelector('button').focus();
}
function closeOutline(){const panel=$('#outline-panel');if(panel.matches(':popover-open'))panel.hidePopover();$('#file-outline').setAttribute('aria-expanded','false')}
$('#outline-panel').addEventListener('toggle',e=>{if(e.newState==='closed')$('#file-outline').setAttribute('aria-expanded','false')});
function showReviewProgress(){openDialog('Sample review progress',`<p>${state.viewed.size} of 7 included diffs viewed. Two layer files have no captured patch, and the other layers are outside this sample.</p><button type="button" data-action="bulk-viewed">Mark 7 included files viewed</button><p class="small">This changes only the local sample. Undo restores the previous state. It does not submit a review.</p><div class="dialog-actions"><button value="cancel">Cancel</button></div>`)}
function openFileNote(){state.codeRange=null;state.fileNote=true;state.commentLine=null;state.thread=false;state.tab='comments';syncTabs();renderDiff();renderComments();openContext(false);$('#comment-draft').focus()}
function inspectGuard(){state.returnTrail.push({file:state.file,position:readingPosition(),view:{mode:state.mode,fullFile:state.fullFile,collapsed:state.collapsed,codeRange:state.codeRange,wrap:state.wrap,splitWrap:state.splitWrap,summary:state.summary,tab:state.tab,scope:state.scope,complexity:state.complexity,commentLine:state.commentLine,fileNote:state.fileNote,thread:state.thread,contextTop:$('#context-scroll').scrollTop}});selectFile('6');selectSummary('6-20','whole')}
function returnContext(){const trail=state.returnTrail.pop();if(!trail)return;selectFile(trail.file);Object.assign(state,trail.view);renderScreen();restoreReadingPosition(trail.position);$('#context-scroll').scrollTop=trail.view.contextTop;$('[data-action="inspect-guard"]')?.focus({preventScroll:true});$('#interaction-status').textContent='Returned to access.ts. Previous selection and reading position restored.'}
async function copyPath(){try{await navigator.clipboard.writeText(currentFile().path);toast('File path copied.')}catch{toast('Clipboard unavailable. Select and copy the path below.');$('#dialog-content').insertAdjacentHTML('afterbegin',`<p class="copy-path-fallback">${esc(currentFile().path)}</p>`)}}
function loadingDemo(){selectFile('0');$('#diff-status').hidden=true;$('#diff').innerHTML='<div class="skeleton" aria-busy="true" aria-label="Loading file"><span></span><span></span><span></span><span></span></div><div class="code-note">Loading-state preview. Normal navigation has no artificial delay.<br><button class="text-link" id="restore-excerpt">Load pinned source</button></div>'}
function unavailableDemo(){openDialog('Observed source error',`<p>The live review initially loaded, but layer 2 later reported “Layer diff did not load.” Public repository checks were temporarily rate limited.</p><p>This is distinct from files intentionally outside the prototype fixture.</p><div class="dialog-actions"><button value="cancel">Return to pinned fixture</button><button type="button" id="retry-source">Retry source preview</button></div><p id="retry-result" role="status"></p>`)}
document.addEventListener('click',e=>{
 const b=e.target.closest('button,a');if(!b)return;if(b.id==='retry-data'){loadData();return}if(!data)return;
 if(b.dataset.scope){state.scope=b.dataset.scope;renderSummaries();renderComments();$('#context-scroll').scrollTop=0;return}
 if(b.dataset.outline){const start=Number(b.dataset.outline),end=Number(b.dataset.outlineEnd);closeOutline();$('#file-outline').focus();state.summary=null;state.tab='summaries';state.codeRange=[start,end];state.fullFile=true;state.collapsed=false;renderSummaries();syncTabs();renderDiff();scrollToLine(start,false);return}
 if(b.dataset.jumpLayer!==undefined){const n=Number(b.dataset.jumpLayer);if(n!==state.layer)setLayer(n);else{state.expanded=true;renderNav()}$(`[data-jump-layer="${n}"]`).focus();return}
 if(b.dataset.layer!==undefined){const n=Number(b.dataset.layer);if(n===state.layer){state.expanded=!state.expanded;renderNav()}else setLayer(n);return}
 if(b.dataset.file!==undefined){if($('#dialog').open)$('#dialog').close();selectFile(b.dataset.file);return}
 if(b.dataset.evidenceSummary){selectSummary(b.dataset.evidenceSummary,b.dataset.evidenceKey);return}
 if(b.dataset.summary){if($('#dialog').open)$('#dialog').close();selectSummary(b.dataset.summary);return}
 if(b.dataset.seen){state.seen.has(b.dataset.seen)?state.seen.delete(b.dataset.seen):state.seen.add(b.dataset.seen);b.setAttribute('aria-pressed',String(state.seen.has(b.dataset.seen)));b.textContent=state.seen.has(b.dataset.seen)?'Seen · undo':'Mark seen';$('#summary-progress').textContent=`${state.seen.size} / 37 layer summaries seen`;toast('Summary progress updated. File viewed and review decision are unchanged.');return}
 if(b.dataset.complexity){state.complexity=b.dataset.complexity;if(state.scope==='layer'){renderSummaries();const count=$$('#summary-list [data-summary]').length;$('#interaction-status').textContent=`${state.complexity} complexity. ${count} captured summaries in this layer. Current file unchanged.`;return}const first=currentFile()?.summaries.find(s=>state.complexity==='All'||s.complexity===state.complexity);if(first)selectSummary(first.id);else{state.summary=null;state.commentLine=null;state.thread=false;state.tab='summaries';syncTabs();renderSummaries();renderComments();renderDiff()}return}
 if(b.dataset.preview){preview(b.dataset.preview);return}
 if(b.dataset.noteLine){b.dataset.noteLine==='file'?openFileNote():openNote(Number(b.dataset.noteLine));return}
 if(b.dataset.commentLine){openNote(Number(b.dataset.commentLine));return}
 if(b.dataset.demo){$('#dialog').close();const a=b.dataset.demo;if(a==='loading')loadingDemo();if(a==='unavailable')unavailableDemo();if(a==='empty'){selectFile('0');state.emptyDemo=true;state.commentLine=null;setTab('comments');openContext()}if(a==='reset')resetDemo();return}
 switch(b.dataset.action){case 'close-outline':closeOutline();$('#file-outline').focus();return;case 'review-progress':showReviewProgress();return;case 'file-note':openFileNote();return;case 'copy-path':copyPath();return;case 'review-demo':$('#dialog').close();showReview();return;case 'inspect-guard':inspectGuard();return;case 'return-context':returnContext();return;case 'layer-thread':selectFile('0');state.scope='file';state.showResolved=true;state.commentLine=null;state.fileNote=false;state.thread=true;setTab('comments');renderSummaries();renderComments();renderDiff();scrollToLine(75,false);return;case 'skip-context':e.preventDefault();openContext();return;case 'overview':e.preventDefault();preview('Overview');return;case 'files':showFiles();return;case 'show-resolved':state.showResolved=true;renderComments();return;case 'hide-resolved':state.showResolved=false;state.thread=false;setTab('comments');renderDiff();return;case 'open-thread':state.thread=true;state.codeRange=[75,90];renderDiff();scrollToLine(75);renderComments();return;case 'source-comments':state.fileNote=false;state.commentLine=null;state.thread=false;renderComments();renderDiff();break;case 'save-draft':{const key=noteKey();if(!key||state.tab!=='comments'){toast('Choose a file or line before saving.');return}const note=currentNote();state.notes.set(key,{...note,saved:note.draft});$('#saved-note-text').textContent=note.draft;$('#saved-note').hidden=!note.draft;updateNoteMarkers();toast('Draft saved in this tab. Nothing was sent.');return;}case 'reset-empty':state.emptyDemo=false;renderComments();return;case 'full-file':state.fullFile=!state.fullFile;$('#dialog').close();renderDiff();if(activeRange()){if(state.tab==='summaries')scrollToEvidence();else scrollToLine(activeRange()[0],false)}return;case 'wrap-code':{const position=readingPosition(),fromDialog=$('#dialog').open;if(state.mode==='split')state.splitWrap=!state.splitWrap;else state.wrap=!state.wrap;if(fromDialog)$('#dialog').close();renderDiff();restoreReadingPosition(position);if(!fromDialog)$('#wrap-code').focus({preventScroll:true});$('#interaction-status').textContent=`Line wrapping ${wrapsCode()?'on':'off'}. Reading position preserved.`;return;}case 'split-before':{const position=readingPosition();state.splitEqual=!state.splitEqual;renderDiff();restoreReadingPosition(position);$('#before-size').focus({preventScroll:true});return;}case 'collapse-file':state.collapsed=true;$('#dialog').close();renderDiff();return;case 'expand-file':state.collapsed=false;renderDiff();return;case 'bulk-viewed':{const before=new Set(state.viewed);data.files.filter(f=>f.lines).forEach(f=>state.viewed.add(f.id));$('#dialog').close();renderNav();updateViewedButton();toast('All seven included files viewed; 45 other PR diffs are outside this demo.',()=>{state.viewed.clear();before.forEach(id=>state.viewed.add(id));renderNav();updateViewedButton()});return;}}
 switch(b.id){case 'previous-file':stepFile(-1);break;case 'next-file':stepFile(1);break;case 'submit-review':break;case 'simulate-submit':confirmReview();break;case 'notes':showNotes();break;case 'return-file':selectFile(state.lastFile||'0');break;case 'viewed':toggleViewed();break;case 'focus':toggleFocus();break;case 'unified':case 'split':{const position=readingPosition();state.mode=b.id;renderDiff();restoreReadingPosition(position);break;}case 'summaries-tab':setTab('summaries');break;case 'comments-tab':setTab('comments');break;case 'context-toggle':openContext();break;case 'close-context':closeContext();break;case 'summary-toggle':{const show=b.getAttribute('aria-expanded')==='false';b.setAttribute('aria-expanded',String(show));$('#layer-description').hidden=!show;$('.layer-heading').classList.toggle('is-collapsed',!show);b.firstChild.textContent=show?'Hide layer details ':'About layer ';break}case 'file-tools':showTools();break;case 'file-outline':showOutline();break;case 'retry-source':$('#retry-result').textContent='Retry demonstration: live availability can vary. The pinned fixture remains available locally; no review was sent.';break;case 'restore-excerpt':renderDiff();break;}
});

document.addEventListener('change',e=>{if(e.target.dataset.anchorSummary){selectSummary(e.target.dataset.anchorSummary,e.target.value);$(`#anchor-${state.summary}`).focus({preventScroll:true});return}if(e.target.dataset.viewFile!==undefined)toggleViewed(e.target.dataset.viewFile)});
document.addEventListener('toggle',e=>{const el=e.target;if(!el.matches?.('.source-summary')||!el.isConnected)return;el.open?state.openDetails.add(el.dataset.detailSummary):state.openDetails.delete(el.dataset.detailSummary)},true);
document.addEventListener('input',e=>{
 if(e.target.id==='comment-draft'&&noteKey()){state.notes.set(noteKey(),{...currentNote(),draft:e.target.value});updateNoteMarkers()}
 if(e.target.id==='file-search'){let count=0;$$('.file-choice[data-path]').forEach(b=>{b.hidden=!b.dataset.path.includes(e.target.value.toLowerCase());if(!b.hidden)count++});$('#file-empty').hidden=!!count}
});
document.addEventListener('focusin',e=>{const n=Number(e.target.dataset?.commentLine);if(!n)return;state.activeLine=n;$$('.comment-entry').forEach(b=>b.tabIndex=Number(b.dataset.commentLine)===n?0:-1)});
function moveLineComment(direction){
 const rows=$$('.code-row[data-line]'),i=rows.findIndex(r=>Number(r.dataset.line)===state.activeLine),row=rows[Math.max(0,Math.min(rows.length-1,i+direction))];if(!row)return;
 row.querySelector('.comment-entry').focus({preventScroll:true});const scroller=codeScroller(),r=row.getBoundingClientRect(),bounds=scroller.getBoundingClientRect();
 if(r.top<bounds.top)scroller.scrollBy({top:r.top-bounds.top,behavior:'instant'});else if(r.bottom>bounds.bottom)scroller.scrollBy({top:r.bottom-bounds.bottom,behavior:'instant'})
}
document.addEventListener('keydown',e=>{
 if(!data)return;
 if($('#outline-panel').matches(':popover-open')){if(e.key==='Escape'){e.preventDefault();closeOutline();$('#file-outline').focus()}return}
 if(e.key==='Escape'&&!$('#dialog').open&&$('#context').classList.contains('is-open')){e.preventDefault();closeContext();return}
 if(e.key==='F6'&&!$('#dialog').open){e.preventDefault();if($('#context').contains(e.target))codeScroller().focus();else openContext();return}
 const typing=e.target.closest('input,textarea,select,[contenteditable=true]');
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!typing&&!$('#dialog').open){e.preventDefault();showFiles();return}
 if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||typing||$('#dialog').open)return;
 if(e.target.matches('.comment-entry')&&['ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();moveLineComment(e.key==='ArrowUp'?-1:1);return}
 if(e.target.matches('#diff,#split-after')&&e.key==='Enter'){e.preventDefault();const bounds=codeScroller().getBoundingClientRect(),row=$$('.code-row[data-line]').find(r=>r.getBoundingClientRect().bottom>bounds.top+2);if(row)openNote(Number(row.dataset.line));return}
 if(e.target.getAttribute('role')==='tab'&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setTab(e.key==='Home'?'summaries':e.key==='End'?'comments':state.tab==='summaries'?'comments':'summaries');$(`#${state.tab}-tab`).focus();return}
 if(e.key.toLowerCase()==='j'){e.preventDefault();setLayer(state.layer+1)}if(e.key.toLowerCase()==='k'){e.preventDefault();setLayer(state.layer-1)}if(e.key.toLowerCase()==='z'&&(currentFile()||state.focus)){e.preventDefault();toggleFocus()}
});
function resetDemo(){
 undoEpoch++;dismissToast();state.viewed.clear();state.seen.clear();state.fileViews.clear();state.notes.clear();state.openDetails.clear();state.anchorSelections.clear();
 if(state.focus)toggleFocus();Object.assign(state,{layer:0,file:'0',lastFile:'0',expanded:true,showResolved:false,thread:false,commentLine:null,codeRange:null,emptyDemo:false,mode:'unified',fullFile:true,collapsed:false,summary:'0-49',complexity:'All',tab:'summaries',activeLine:75,wrap:true,splitEqual:false,splitWrap:true,scope:'file',returnTrail:[],fileNote:false,reviewDecision:'comment'});
 $('.layer-activity').open=false;$('#context').classList.remove('is-open');$('#context-toggle').setAttribute('aria-expanded','false');$('#summary-toggle').setAttribute('aria-expanded','false');$('#summary-toggle').firstChild.textContent='About layer ';$('#layer-description').hidden=true;$('.layer-heading').classList.add('is-collapsed');
 renderScreen();scrollToEvidence();$('#context-scroll').scrollTop=0
}
const initialControlState=new Map();
function setLoadState(status){
 loadState=status;const ready=status==='ready';$('#diff').setAttribute('aria-busy',String(status==='loading'));
 if(!ready){$$('.workspace button,.workspace input,#submit-review,#notes').forEach(b=>{if(!initialControlState.has(b))initialControlState.set(b,b.disabled);b.disabled=true});$('#progress').textContent='PR progress unavailable';$('#remaining').textContent='—';$('#file-progress').removeAttribute('value')}
 else{for(const [b,disabled] of initialControlState)if(b.isConnected)b.disabled=disabled;initialControlState.clear()}
}
async function loadData(){
 if(loadState==='loading'&&loadingPromise)return loadingPromise;
 setLoadState('loading');$('#diff').innerHTML='<div class="loading" role="status">Loading pinned review fixture…</div>';
 loadingPromise=(async()=>{try{const r=await fetch('review-data.json?v=refinement-20261023');if(!r.ok)throw Error('Unavailable');data=await r.json();setLoadState('ready');renderScreen();scrollToEvidence();const demo=new URLSearchParams(location.search).get('state');if(demo==='loading')loadingDemo();if(demo==='unavailable')unavailableDemo();if(demo==='empty'){state.emptyDemo=true;setTab('comments')}}catch{setLoadState('failed');$('#diff').innerHTML='<div class="unavailable"><h3>The pinned fixture could not load</h3><p>Check the connection and retry. No review state was sent.</p><button class="primary" id="retry-data">Retry</button></div>'}finally{loadingPromise=null}})();return loadingPromise
}
loadData();
