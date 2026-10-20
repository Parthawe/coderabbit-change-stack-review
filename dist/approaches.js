'use strict';
const concepts=JSON.parse(document.querySelector('#walkthrough-data').textContent);
const $=selector=>document.querySelector(selector);
const labels=['Start','Inspect','Decide'];
let filter='all',stage=0,viewerKey=null,focusBack=null;
const cards=new Map();
function imagePath(key,index){return 'approach-assets/'+key.toLowerCase()+(index+1)+'.png?v=final-m-20261020'}
function bindImage(img,loading,error,button){
 const loaded=()=>{loading.hidden=true;error.hidden=true;if(button)button.disabled=false};
 const failed=()=>{loading.hidden=true;error.hidden=false;if(button)button.disabled=true};
 img.addEventListener('load',loaded);img.addEventListener('error',failed);
 return {set(src,alt){loading.hidden=false;error.hidden=true;if(button)button.disabled=true;img.alt=alt;img.src=src;if(img.complete&&img.naturalWidth)loaded()},retry(){loading.hidden=false;error.hidden=true;img.src=img.getAttribute('src')}};
}
for(const c of concepts){
 const article=document.createElement('article');article.className='concept';article.dataset.key=c.key;
 article.innerHTML=`<div class="concept-heading"><h2>${c.key} · ${c.name}</h2><button class="journey-button">Follow this approach</button></div><p class="unit">Review unit: ${c.unit.toLowerCase()}</p><p class="description">${c.description}</p><div class="step-name"><h3></h3><span></span></div><div class="preview"><button class="screen"><img src="${imagePath(c.key,0)}" width="1160" height="1000" alt="${c.name} walkthrough"></button><div class="image-loading" aria-hidden="true">Loading screen…</div><div class="image-error" hidden><p>This screen could not load.</p><button>Retry screen</button></div></div><p class="caption"></p><p class="outcome">Result: ${c.result}</p><details class="design-rationale"><summary>Design rationale · four judging criteria</summary>${c.rationaleHtml}</details><div class="screen-footer"><span>Paper walkthrough · illustrative screen</span><button class="enlarge">Enlarge screen</button></div>`;
 const img=article.querySelector('img'),imageButton=article.querySelector('.screen');
 const binding=bindImage(img,article.querySelector('.image-loading'),article.querySelector('.image-error'),imageButton);
 article.querySelector('.image-error button').addEventListener('click',()=>binding.retry());
 article.querySelector('.journey-button').addEventListener('click',()=>navigate(c.key,0));
 imageButton.addEventListener('click',()=>openViewer(c.key,imageButton));
 article.querySelector('.enlarge').addEventListener('click',e=>openViewer(c.key,e.currentTarget));
 $('#gallery').append(article);cards.set(c.key,{article,binding});
}
function navigate(nextFilter,nextStage,write=true){
 filter=nextFilter;stage=Math.max(0,Math.min(2,nextStage));
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
 document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.stage)===stage)));
 $('#gallery').classList.toggle('single',filter!=='all');
 for(const c of concepts){const {article,binding}=cards.get(c.key);article.hidden=filter!=='all'&&filter!==c.key;const s=c.screens[stage];article.querySelector('h3').textContent=`${stage+1}. ${s.steps[stage]}`;article.querySelector('.step-name span').textContent=`${s.key} · ${stage+1} of 3`;article.querySelector('.caption').textContent=s.caption;article.querySelector('.screen').setAttribute('aria-label',`Enlarge ${c.name}, ${s.steps[stage]}`);article.querySelector('.enlarge').setAttribute('aria-label',`Enlarge ${c.name}, ${s.steps[stage]}`);article.querySelector('.journey-button').hidden=filter!=='all';if(!article.hidden)binding.set(imagePath(c.key,stage),`${c.name}: ${s.steps[stage]}. ${s.caption}`)}
 $('#previous').disabled=stage===0;$('#next').disabled=stage===2;$('#stage-count').textContent=`${stage+1} / 3`;
 $('#mode-note').textContent=filter==='all'?'Compare the same stage across all four approaches. Select a screen to inspect it.':`Following ${concepts.find(c=>c.key===filter).name}. Use the stage buttons or Next and Previous to move through the journey.`;
 $('#announcement').textContent=`${labels[stage]}, step ${stage+1} of 3. ${filter==='all'?'Showing all four approaches.':'Showing '+concepts.find(c=>c.key===filter).name+'.'}`;
 if(write)history.replaceState(null,'',`#${filter}-${stage+1}`);
 if($('#viewer').open)renderViewer();
}
function readHash(){const match=location.hash.match(/^#(all|[A-D])-([123])$/);navigate(match?match[1]:'all',match?Number(match[2])-1:0,false)}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.filter,stage)));
document.querySelectorAll('[data-stage]').forEach(b=>{b.addEventListener('click',()=>navigate(filter,Number(b.dataset.stage)));b.addEventListener('keydown',e=>{const current=Number(b.dataset.stage);let next;if(e.key==='ArrowRight')next=(current+1)%3;else if(e.key==='ArrowLeft')next=(current+2)%3;else if(e.key==='Home')next=0;else if(e.key==='End')next=2;else return;e.preventDefault();navigate(filter,next);$(`[data-stage="${next}"]`).focus()})});
$('#previous').addEventListener('click',()=>navigate(filter,stage-1));$('#next').addEventListener('click',()=>navigate(filter,stage+1));
function renderViewer(){const c=concepts.find(c=>c.key===viewerKey),s=c.screens[stage];$('#viewer-title').textContent=`${c.key} · ${c.name}`;$('#viewer-position').textContent=`${stage+1} / 3 · ${s.steps[stage]}`;$('#viewer-caption').textContent=s.caption;$('#viewer-previous').disabled=stage===0;$('#viewer-next').disabled=stage===2;$('#viewer-image').hidden=false;$('.viewer-error').hidden=true;$('#viewer-image').alt=`${c.name}, ${s.steps[stage]}. ${s.caption}`;$('#viewer-image').src=imagePath(c.key,stage)}
function openViewer(key,trigger){viewerKey=key;focusBack=trigger;renderViewer();$('#viewer').showModal()}
$('#viewer-previous').addEventListener('click',()=>navigate(filter,stage-1));$('#viewer-next').addEventListener('click',()=>navigate(filter,stage+1));
$('#actual-size').addEventListener('click',e=>{const actual=$('.viewer-canvas').classList.toggle('actual');e.currentTarget.setAttribute('aria-pressed',String(actual));e.currentTarget.textContent=actual?'Fit width':'Actual size'});
$('#viewer').addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&stage<2){e.preventDefault();navigate(filter,stage+1)}else if(e.key==='ArrowLeft'&&stage>0){e.preventDefault();navigate(filter,stage-1)}});
$('#viewer').addEventListener('close',()=>{focusBack?.focus();viewerKey=null});
$('#viewer-image').addEventListener('error',()=>{$('#viewer-image').hidden=true;$('.viewer-error').hidden=false});
$('#viewer-retry').addEventListener('click',()=>renderViewer());
window.addEventListener('hashchange',()=>{if(location.hash!=='#gallery')readHash()});readHash();
