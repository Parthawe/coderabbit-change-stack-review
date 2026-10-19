/* Independent design prototype. All state is local to this page. */
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const summaries=[
 {id:'imports',range:'49–53',start:49,end:53,title:'Import the selection helper',body:'Adds syncSelectedUsersAcrossPages to the existing utils imports.'},
 {id:'cache',range:'720–724',start:720,end:724,title:'Keep selection across pages',body:'Adds selectedUsersCacheRef to retain full user records across server-side pagination.'},
 {id:'reset',range:'747–769',start:747,end:769,title:'Reset when scope changes',body:'Clears the cache on reset and when the member scope changes.'},
 {id:'resolve',range:'939–945',start:939,end:945,title:'Resolve the selected users',body:'Uses the cache, row selection, and the current page to derive selected users.'}
];
const state={layer:1,viewed:false,focus:false,focusPosition:null,summary:'cache',mode:'unified',rows:[],tab:'summaries',thread:false,commentLine:null,draft:'',localComment:'',emptyDemo:false};
let toastTimer,restoreFocus;
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,5000)}
function openDialog(title,html){restoreFocus=document.activeElement;$('#dialog-title').textContent=title;$('#dialog-content').innerHTML=html;$('#dialog').showModal()}
$('#dialog').addEventListener('close',()=>{if(restoreFocus?.isConnected)restoreFocus.focus()});
$('#dialog').addEventListener('click',e=>{if(e.target===$('#dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
function renderSummaries(){
 if($('#summary-list').children.length===summaries.length){$$('#summary-list [data-summary]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.summary===state.summary)));return}
 $('#summary-list').innerHTML=summaries.map(s=>`<button class="summary-item" data-summary="${s.id}" aria-pressed="${state.summary===s.id}"><span class="range">Lines ${s.range}</span><strong>${s.title}</strong><span class="summary-body">${s.body}</span></button>`).join('');
}
function line(row,side){
 const selected=state.summary&&summaries.find(s=>s.id===state.summary)&&row.new>=summaries.find(s=>s.id===state.summary).start&&row.new<=summaries.find(s=>s.id===state.summary).end;
 const old=side==='new'?'':row.old||'',next=side==='old'?'':row.new||'';
 return `<div class="code-row ${row.kind==='context'?'':row.kind} ${selected?'selected-code':''}" data-line="${row.new||row.old}"><span class="line-num" aria-label="Old line ${old||'none'}">${old}</span><span class="line-num" aria-label="New line ${next||'none'}">${next}</span><span class="diff-sign" aria-hidden="true">${row.kind==='add'?'+':row.kind==='del'?'−':''}</span><code>${escapeHtml(row.text)}</code>${side==='old'?'':`<button class="comment-entry" data-comment-line="${row.new||row.old}" aria-label="Add local comment at line ${row.new||row.old}" title="Add local comment">+</button>`}</div>`;
}
function renderDiff(){
 const scroll=$('#diff'),prevTop=scroll.scrollTop,prevLeft=scroll.scrollLeft;
 const chunks=[];let group=[];
 const flush=()=>{if(!group.length)return;if(state.mode==='unified')chunks.push(group.map(r=>line(r)).join(''));else{
  const before=[],after=[];let removed=[],added=[];
  const blank='<div class="code-row empty-row" aria-hidden="true"></div>';
  const changes=()=>{for(let i=0;i<Math.max(removed.length,added.length);i++){before.push(removed[i]?line(removed[i],'old'):blank);after.push(added[i]?line(added[i],'new'):blank)}removed=[];added=[]};
  for(const row of group){if(row.kind==='context'){changes();before.push(line(row,'old'));after.push(line(row,'new'))}else if(row.kind==='del')removed.push(row);else added.push(row)}changes();
  chunks.push(`<div class="split-pair"><div class="split-cell">${before.join('')}</div><div class="split-cell">${after.join('')}</div></div>`)
 }group=[]};
 for(const row of state.rows){if(row.fold){flush();chunks.push(`<div class="hunk" id="hunk-${row.id}"><button data-fold="${row.id}" aria-expanded="false"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>${escapeHtml(row.fold)}</button></div><div id="fold-${row.id}" class="line-gap" hidden>The screenshot collapses these unchanged lines. Their contents are not reproduced in this excerpt.</div>`)}else group.push(row)}flush();
 chunks.push('<div class="hunk" id="hunk-resolve">Lines 939–945 · referenced in the source summary</div><div class="code-note">The supplied summary describes this range, but its code is below the screenshot. This prototype does not reconstruct the missing lines.</div>');
 scroll.innerHTML=`<div class="diff-content${state.mode==='split'?' is-split':''}">${state.mode==='split'?'<div class="split-label"><span>Before</span><span>After</span></div>':''}${chunks.join('')}</div>`;
 scroll.scrollTop=prevTop;scroll.scrollLeft=prevLeft;
 $('#unified').setAttribute('aria-pressed',String(state.mode==='unified'));$('#split').setAttribute('aria-pressed',String(state.mode==='split'));
}
function selectSummary(id){
 state.summary=id;renderSummaries();renderDiff();
 const summary=summaries.find(s=>s.id===id);
 const target=$(`#diff [data-line="${summary.start}"]`)||$(`#hunk-${id}`);
 if(target){const parent=$('#diff');parent.scrollTo({top:target.offsetTop-34,left:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
 if(id==='resolve')toast('The summary is available; code for lines 939–945 is outside the supplied screenshot.');
}
function setLayer(n){
 const previous=state.layer;state.layer=n;
 $$('.layer').forEach((b,i)=>{b.classList.toggle('selected',i===n);b.setAttribute('aria-expanded',String(i===n));if(i===n)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');$(`#layer-${i}-files`).hidden=i!==n});
 $('#layer-title').textContent=n?'Paginated list integration':'Selection cache utility';$('#layer-position').textContent=`Layer ${n+1} of 2`;
 $('.file-toolbar').hidden=!n;$('#diff').hidden=!n;$('#unavailable').hidden=!!n;$('#layer-description').hidden=!n||$('#summary-toggle').getAttribute('aria-expanded')==='false';$('#summary-toggle').hidden=!n;
 $('#summaries-tab span').textContent=n?'4':'0';$('#comments-tab span').textContent=n?'1':'0';
 if(n){$('#summaries-panel .context-hint').textContent='Select a summary to reveal its code.';$('#summary-list').hidden=false;$('.context-footnote').hidden=false;renderSummaries()}else{$('#summaries-panel .context-hint').textContent='No summaries are available for this layer’s files in the supplied excerpt.';$('#summary-list').hidden=true;$('.context-footnote').hidden=true}
 renderComments();if(previous!==n)$('#retry-result').textContent='';
}
function toggleFocus(){
 const current={top:$('#diff').scrollTop,left:$('#diff').scrollLeft};
 $('#diff').scrollTo({top:current.top,left:current.left,behavior:'instant'});
 if(!state.focus)state.focusPosition=current;
 state.focus=!state.focus;const position=state.focus?current:(state.focusPosition||current);
 document.body.classList.toggle('focus-mode',state.focus);$('#focus').setAttribute('aria-pressed',String(state.focus));$('#focus').innerHTML=`${state.focus?'Exit focus':'Focus'} <kbd>Z</kbd>`;
 requestAnimationFrame(()=>$('#diff').scrollTo({top:position.top,left:position.left,behavior:'instant'}));
}
function toggleViewed(){state.viewed=!state.viewed;$('#viewed').textContent=state.viewed?'Viewed':'Mark viewed';$('#viewed').setAttribute('aria-pressed',String(state.viewed));$('.viewed-box').classList.toggle('is-viewed',state.viewed);$('#progress').textContent=`${state.viewed?1:0} / 1 excerpt files viewed`;toast(state.viewed?'File marked viewed. Other source files remain outside this excerpt.':'File marked as not viewed.')}
function setTab(name){state.tab=name;const summary=name==='summaries';$('#summaries-tab').setAttribute('aria-selected',String(summary));$('#summaries-tab').tabIndex=summary?0:-1;$('#comments-tab').setAttribute('aria-selected',String(!summary));$('#comments-tab').tabIndex=summary?-1:0;$('#summaries-panel').hidden=!summary;$('#comments-panel').hidden=summary;if(!summary)renderComments()}
function openContext(){if(state.focus)toggleFocus();$('#context').classList.add('is-open');$('#context-toggle').setAttribute('aria-expanded','true')}
function renderComments(){
 const panel=$('#comments-panel');
 if(state.layer===0||state.emptyDemo){panel.innerHTML=`<div class="empty-state"><h3>No comments to show</h3><p>${state.emptyDemo?'Demonstration of a file with no comments.':'No comment content is included for this layer in the source screenshot.'}</p>${state.emptyDemo?'<button class="text-link" data-action="reset-empty">Return to source thread</button>':''}</div>`;return}
 if(!state.thread){panel.innerHTML='<button class="thread-summary" data-action="open-thread"><strong>Comment on R747–749</strong><small>Thread marker visible in the supplied screenshot.</small><span class="text-link">Open thread</span></button>';return}
 panel.innerHTML=`<div class="comment-thread"><h3>${state.commentLine?'Local note on line '+state.commentLine:'Comment on R747–749'}</h3><p>${state.commentLine?'New draft for this prototype.':'The original comment text and author are not included in the screenshot.'}</p>${state.localComment?`<p><strong>Your local draft</strong><br>${escapeHtml(state.localComment)}</p>`:''}<label for="comment-draft">Local draft · never sent</label><textarea id="comment-draft" placeholder="Write a local review note…">${escapeHtml(state.draft)}</textarea><button class="primary" data-action="save-draft">Save local draft</button></div>`;
}
function showReview(){
 openDialog('Submit review',`<p>Choose a review decision. This prototype simulates submission and does not send anything to CodeRabbit or GitHub.</p><p class="small">${state.viewed?1:0} of 1 reproduced files viewed. The other two source files are outside this excerpt.</p><fieldset><legend>Review decision</legend>${[['comment','Comment','Share feedback without a decision.'],['approve','Approve','Approve the pull request.'],['changes','Request changes','Ask for changes before merging.']].map(([v,t,s],i)=>`<label class="decision"><input type="radio" name="decision" value="${v}" ${i===0?'checked':''}><span><strong>${t}</strong><small>${s}</small></span></label>`).join('')}</fieldset><div class="dialog-actions"><button value="cancel">Cancel</button><button class="primary" id="simulate-submit" type="button">Simulate submission</button></div>`);
}
const previews={
 'Overview':['Review overview','The source screenshot shows this PR as open, with three files across two layers. Its mergeability and blocker status are historical and are not recomputed here.'],
 'Blast radius':['Blast radius','This entry remains reachable from review navigation. The source screenshot does not show its analysis, so this prototype does not invent affected services or risk findings.'],
 'Architecture impact':['Architecture impact','The original architecture view remains a separate destination. No architecture graph or dependency analysis was provided for this excerpt.'],
 'Review history':['Review history','The source interface exposes review history. The screenshot does not include its entries; this prototype does not fabricate past reviews.'],
 'Follow review':['Follow review','The original interface offers Slack follow-up. This preview explains that destination; it does not connect Slack or subscribe anyone.'],
 'Agent':['Agent','The original context panel includes an Agent tab. Its workspace remains available here as a preview; this prototype has no agent backend.'],
 'Diagrams':['Diagrams','The original Files / Diagrams switch moves between code and diagrams. Diagram content is not supplied for this excerpt.'],
 'Search & filter':['Search & filter','Search and diff filters remain available through file tools. The prototype is limited to one reproduced file, so cross-file results are not simulated.'],
 'Settings':['Settings','Review preferences remain available through file tools. This prototype fixes the chosen light theme and provides working Unified / Split and Focus controls.'],
 'Full pull request':['Full pull request','The original screenshot includes a full-PR action. The shown coderabbitai/mono PR is different from the public Formbricks session linked in the assignment; the prototype keeps the two sources separate.']
};
function showNotes(){openDialog('Source & prototype notes',`<p>An independent design exercise by Parth Pawar. This is a read-only prototype, with all review state held in this browser tab.</p><div class="capability-note"><h3>One consistent reference</h3><p>The supplied screenshots show coderabbitai/mono #22041, “keep seat selection cumulative across pages,” with two layers and three files. This demo reproduces the visible UserListPaginated.tsx excerpt.</p></div><div class="capability-note"><h3>Different live example</h3><p>The assignment’s <a href="https://app.coderabbit.ai/change-stack/formbricks/formbricks/pull/8650" target="_blank" rel="noopener">Formbricks review session</a> has 52 files. Its public review checks were rate limited during inspection. Its code is not mixed into this screenshot example.</p></div><div class="capability-note"><h3>Coverage and fidelity</h3><p>Layer names and code are transcribed from the screenshot. Summary wording is condensed. Line wrapping is normalized. Hidden code, original comment text, other files, and backend tools are not reconstructed.</p></div><div class="state-buttons"><button type="button" data-demo="loading">Loading state</button><button type="button" data-demo="unavailable">Unavailable state</button><button type="button" data-demo="empty">No-comments state</button><button type="button" data-demo="reset">Reset demo</button></div><p class="small">No accounts, analytics, or remote review writes. The prototype does not store drafts across reloads. <a href="rationale.html" target="_blank">Read the design rationale</a></p><div class="dialog-actions"><button value="cancel">Close notes</button></div>`)}
function showPreview(name){const p=previews[name];if(!p){showNotes();return}openDialog(p[0],`<p>${p[1]}</p><p class="small">Supporting capability preview · no external action is performed.</p><div class="dialog-actions"><button value="cancel">Return to review</button></div>`)}
function showTools(){openDialog('File tools',`<p>Secondary tools stay reachable while the reviewing screen prioritizes code.</p>${['Diagrams','Search & filter','Settings','Full pull request'].map(t=>`<div class="capability-note"><h3>${t}</h3><p>${previews[t][1]}</p></div>`).join('')}<div class="dialog-actions"><button value="cancel">Return to review</button></div>`)}
async function loadExcerpt(){
 $('#diff').innerHTML='<div class="loading" role="status">Loading screenshot excerpt…</div>';
 try{const r=await fetch('excerpt.json');if(!r.ok)throw Error('unavailable');state.rows=await r.json();renderDiff();return true}catch{$('#diff').innerHTML='<div class="unavailable"><h3>The excerpt could not load</h3><p>Check your connection and try again.</p><button id="retry-excerpt" class="primary">Retry excerpt</button></div>';return false}
}
function loadingDemo(){setLayer(1);$('#diff').innerHTML='<div class="skeleton" aria-busy="true" aria-label="Loading file"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="code-note">Loading-state preview. No artificial delay is added to normal navigation.<br><button class="text-link" id="restore-excerpt">Load available excerpt</button></div>'}
document.addEventListener('click',async e=>{
 const b=e.target.closest('button,a');if(!b)return;
 if(b.dataset.layer!==undefined){const n=Number(b.dataset.layer);if(n===state.layer){const expanded=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!expanded));$(`#layer-${n}-files`).hidden=expanded}else setLayer(n);return}
 if(b.dataset.summary){selectSummary(b.dataset.summary);return}
 if(b.dataset.preview){showPreview(b.dataset.preview);return}
 if(b.dataset.commentLine){state.thread=true;state.commentLine=Number(b.dataset.commentLine);state.emptyDemo=false;openContext();setTab('comments');$('#comment-draft').focus();return}
 if(b.dataset.fold){const el=$(`#fold-${b.dataset.fold}`);el.hidden=!el.hidden;b.setAttribute('aria-expanded',String(!el.hidden));return}
 if(b.dataset.demo){$('#dialog').close();const action=b.dataset.demo;if(action==='loading')loadingDemo();if(action==='unavailable')setLayer(0);if(action==='empty'){setLayer(1);state.emptyDemo=true;setTab('comments');openContext()}if(action==='reset'){state.emptyDemo=false;state.thread=false;state.draft='';state.localComment='';if(state.viewed)toggleViewed();if(state.focus)toggleFocus();state.mode='unified';state.summary='cache';setLayer(1);setTab('summaries');renderDiff();renderSummaries();$('#diff').scrollTop=0}return}
 if(b.dataset.action==='open-thread'){state.thread=true;state.commentLine=null;selectSummary('reset');renderComments();return}
 if(b.dataset.action==='save-draft'){state.localComment=state.draft;toast('Draft saved in this tab. Nothing was sent.');return}
 if(b.dataset.action==='reset-empty'){state.emptyDemo=false;renderComments();return}
 if(b.dataset.action==='overview'){e.preventDefault();showPreview('Overview');return}
 switch(b.id){
 case 'submit-review':showReview();break;
 case 'simulate-submit':{const value=$('input[name=decision]:checked').value;$('#dialog').close();toast(`Simulated ${value==='approve'?'approval':value==='changes'?'request for changes':'comment review'} complete. Nothing was sent.`);break}
 case 'notes':showNotes();break;
 case 'file-nav':case 'return-file':setLayer(1);break;
 case 'dependency':setLayer(0);break;
 case 'viewed':toggleViewed();break;
 case 'focus':toggleFocus();break;
 case 'unified':case 'split':state.mode=b.id;renderDiff();break;
 case 'summaries-tab':setTab('summaries');break;
 case 'comments-tab':setTab('comments');break;
 case 'context-toggle':openContext();break;
 case 'close-context':$('#context').classList.remove('is-open');$('#context-toggle').setAttribute('aria-expanded','false');$('#context-toggle').focus();break;
 case 'summary-toggle':{const show=b.getAttribute('aria-expanded')==='false';b.setAttribute('aria-expanded',String(show));$('#layer-description').hidden=!show;$('.layer-heading').classList.toggle('is-collapsed',!show);b.firstChild.textContent=show?'Hide summary ':'Show summary ';break}
 case 'retry-source':b.disabled=true;$('#retry-result').textContent='Checking the supplied excerpt…';await loadExcerpt();b.disabled=false;$('#retry-result').textContent='The excerpt still contains no source for this layer. Return to the available file.';break;
 case 'retry-excerpt':case 'restore-excerpt':loadExcerpt();break;
 case 'file-tools':showTools();break;
 }
});
document.addEventListener('input',e=>{if(e.target.id==='comment-draft')state.draft=e.target.value});
document.addEventListener('keydown',e=>{
 if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||e.target.closest('input,textarea,select,[contenteditable=true]')||$('#dialog').open)return;
 if(e.key==='Escape'&&$('#context').classList.contains('is-open')){$('#close-context').click();return}
 if(e.target.getAttribute('role')==='tab'&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setTab(e.key==='Home'?'summaries':e.key==='End'?'comments':state.tab==='summaries'?'comments':'summaries');$(`#${state.tab}-tab`).focus();return}
 if(e.key.toLowerCase()==='j'){e.preventDefault();setLayer(Math.min(1,state.layer+1))}
 if(e.key.toLowerCase()==='k'){e.preventDefault();setLayer(Math.max(0,state.layer-1))}
 if(e.key.toLowerCase()==='z'){e.preventDefault();toggleFocus()}
});
const toolsButton=document.createElement('button');toolsButton.id='file-tools';toolsButton.title='Diagrams, search, settings, and full PR';toolsButton.textContent='Tools';$('.file-actions').append(toolsButton);
renderSummaries();renderComments();
loadExcerpt().then(()=>{const demo=new URLSearchParams(location.search).get('state');if(demo==='loading')loadingDemo();if(demo==='unavailable')setLayer(0);if(demo==='empty'){state.emptyDemo=true;setTab('comments')}});
