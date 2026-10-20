'use strict';
const STUDY_MODULE_LABELS={Thera:['Prescribing foundations','HEENT I','HEENT II','Dermatology I','Dermatology II'],AHAD:['Foundations','HEENT','Dermatology I','Dermatology II','Cardiology I']};
function studyModuleNumbers(q,course){
 if(Array.isArray(q.studyModules))return q.studyModules.filter(n=>Number.isInteger(n)&&n>=1&&n<=5);
 if(q.sourceOrigin==='classmate'){
  if(String(q.originalDeck||'').includes('Module 1'))return [1];
  if(String(q.originalDeck||'').includes('Module 2/3'))return [2,3];
  if(String(q.originalDeck||'').includes('Module 4/5'))return [4,5];
 }
 const raw=String(q.module||'');
 if(course==='AHAD'){
  if(raw.startsWith('ahad-final-'))return [];
  if(q.caseId){const c=AHAD_SUPPLIED_CASES.find(c=>c.id===q.caseId);if(c)return [c.module];}
  if(String(q.condition).startsWith('case-')){const c=AHAD_SUPPLIED_CASES.find(c=>q.condition==='case-'+c.id);if(c)return [c.module];}
  if(q.drillGroup==='ahadLesions'&&Number.isInteger(q.module))return [q.module];
  if(q.system==='foundations')return [1];if(q.system==='cardio')return [5];if(q.system==='heent')return [2];
  if(q.system==='skin')return [3,4];
 }else{
  if(/^thera-\d+$/.test(raw)&&Number(raw.split('-')[1])>5)return [];
  const exact=raw.match(/^thera-([1-5])$/);if(exact)return [Number(exact[1])];
  if(q.system==='foundations')return [1];
  const phases=[...new Set(THERA_CASE_REVIEW.filter(c=>c.condition===q.condition).map(c=>({'HEENT I':2,'HEENT II':3,'Dermatology I':4,'Dermatology II':5})[c.phase]).filter(Boolean))].sort();
  if(phases.length)return phases;
  if(q.system==='heent'||q.system==='resp')return [2,3];
  if(q.system==='skin')return [4,5];
 }
 return [];
}
function builderPool(course,format){
 const items=format==='mcq'?bank(course==='Thera'?'thera':'ahad'):bank('short').filter(q=>q.course==='Both'||q.course.includes(course));
 return [...new Map(items.filter(q=>format!=='prescription'||['calculation','prescription'].includes(q.type)||/write.{0,35}prescription|prescription.{0,35}write/i.test(q.prompt)).map(q=>[q.id,q])).values()];
}
function builderStyle(q){return q.type||q.examSkill||'mcq';}
function appendPracticeBuilder(course){
 const host=$('#hub-content'),card=document.createElement('section');card.className='card practice-builder';card.id='practice-builder';
 const storageKey='practice-builder-'+course.toLowerCase()+'-v1';
 let saved={};try{saved=JSON.parse(state.notes[storageKey]||'{}');}catch(e){}
 const allowedFormats=course==='AHAD'?['mcq']:['mcq','short','prescription'];
 const config={format:allowedFormats.includes(saved.format)?saved.format:'mcq',modules:Array.isArray(saved.modules)?saved.modules.filter(n=>Number.isInteger(n)&&n>=1&&n<=5):[1,2,3,4,5],combined:saved.combined!==false,source:(course==='Thera'?['all','curated','classmate']:['all','curated']).includes(saved.source)?saved.source:'all',style:saved.style||'all',topic:saved.topic||'all',selection:['all','new','missed','hard','bookmarked','due'].includes(saved.selection)?saved.selection:'all',quantity:['10','20','40','50','all'].includes(saved.quantity)?saved.quantity:'20'};
 const styleLabels={...RECALL_TYPES,mcq:'General MCQ',case_reasoning:'Case-study reasoning',wound_management:'Wound management',recognition:'Findings & lesion recognition',investigation:'Investigations',cardio:'Cardiology',allergy:'Allergy decisions',dose:'Doses',duration:'Duration',prescription:'Prescription writing',lactation:'Lactation'};
 card.innerHTML=`<h2>Build your practice set</h2><p>Choose a question format, one module or a mix, and the kind of question you want. The midterm group selects <strong>all Modules 1–5</strong>.</p><div class="actions"><button id="builder-midterm" class="primary">Midterm · Modules 1–5</button><button id="builder-all-modules">Select all modules</button><button id="builder-clear-modules">Clear modules</button></div><fieldset class="builder-modules"><legend>Modules to include</legend>${STUDY_MODULE_LABELS[course].map((name,i)=>`<label><input type="checkbox" data-builder-module="${i+1}" ${config.modules.includes(i+1)?'checked':''}><span><strong>Module ${i+1}</strong><br>${name}</span></label>`).join('')}</fieldset><label class="inline-check"><input type="checkbox" id="builder-combined" ${config.combined?'checked':''}> Include combined source groups that overlap selected modules</label><p class="tiny">Some sources group ${course==='Thera'?'HEENT as 2–3 or dermatology as 4–5':'dermatology as 3–4'}. Those questions count once and are labelled as combined; clear the option for individually assigned questions only.</p><div class="filters"><label>Question format<select id="builder-format"><option value="mcq">Multiple choice</option>${course==='Thera'?'<option value="short">Short answer / recall</option><option value="prescription">Prescription / calculation</option>':''}</select></label><label>Question style<select id="builder-style"></select></label><label>Topic<select id="builder-topic"></select></label><label>Source<select id="builder-source"><option value="all">All sources</option><option value="curated">Study Grove / course questions</option>${course==='Thera'?'<option value="classmate">Classmate Anki cards</option>':''}</select></label><label>Selection<select id="builder-selection"><option value="all">All questions</option><option value="new">Not attempted</option><option value="missed">Last attempt incorrect</option><option value="hard">Again / hard</option><option value="bookmarked">Bookmarked</option><option value="due">Due for review</option></select></label><label>Session size<select id="builder-quantity"><option value="10">Up to 10</option><option value="20">Up to 20</option><option value="40">Up to 40</option><option value="50">Up to 50</option><option value="all">All matching questions</option></select></label></div><p id="builder-count" aria-live="polite"></p><p class="tiny" id="builder-empty" aria-live="polite"></p><div class="actions"><button class="primary" id="builder-start">Start mixed practice</button><a class="button" href="#${course==='Thera'?'thera':'ahad'}-study/questions">Browse recall questions</a></div><p class="tiny">Selected questions are shuffled without repeats. This is a study group, not a timed exam or a guarantee of school topic weighting.${course==='Thera'?' Recall and prescription answers are self-marked; the MCQ option does not simulate the written portion of THERA.':' AHAD exam practice stays entirely multiple choice.'}</p><details><summary>Questions available by module</summary><div id="builder-breakdown"></div></details>`;
 host.prepend(card);
 for(const key of ['format','source','selection','quantity'])$('#builder-'+key).value=config[key];
 const sourceMatch=q=>config.source==='all'||(config.source==='classmate'?q.sourceOrigin==='classmate':q.sourceOrigin!=='classmate');
 const lastAttempts=()=>{const map=new Map();for(const a of state.attempts)map.set(a.id,a);return map;};
 function selected(){const last=lastAttempts();return builderPool(course,config.format).filter(q=>{
  const mods=studyModuleNumbers(q,course),review=state.reviews[q.id];
  return mods.some(n=>config.modules.includes(n))&&(config.combined||mods.length===1)&&sourceMatch(q)&&(config.style==='all'||builderStyle(q)===config.style)&&(config.topic==='all'||(q.condition||q.topic)===config.topic)&&({all:true,new:!last.has(q.id),missed:last.get(q.id)?.correct===false,hard:['again','hard'].includes(review?.rating),bookmarked:state.bookmarks.includes(q.id),due:!!review&&review.due<=Date.now()})[config.selection];
 });}
 function updateOptions(){
  const pool=builderPool(course,config.format),styles=[...new Set(pool.map(builderStyle))].sort(),topics=[...new Map(pool.map(q=>[q.condition||q.topic,{id:q.condition||q.topic,label:q.topic}])).values()].sort((a,b)=>a.label.localeCompare(b.label));
  if(!styles.includes(config.style))config.style='all';if(!topics.some(t=>t.id===config.topic))config.topic='all';
  $('#builder-style').innerHTML='<option value="all">All question styles</option>'+styles.map(k=>`<option value="${esc(k)}">${esc(styleLabels[k]||k.replaceAll('_',' '))}</option>`).join('');$('#builder-style').value=config.style;
  $('#builder-topic').innerHTML='<option value="all">All topics</option>'+topics.map(t=>`<option value="${esc(t.id)}">${esc(t.label)}</option>`).join('');$('#builder-topic').value=config.topic;
 }
 function draw(){
  const qs=selected(),combined=qs.filter(q=>studyModuleNumbers(q,course).length>1).length,size=config.quantity==='all'?qs.length:Math.min(qs.length,Number(config.quantity));
  $('#builder-count').textContent=qs.length+' matching questions · '+size+' in this session · '+combined+' from combined module groups';$('#builder-empty').textContent=course==='Thera'&&!qs.length&&config.source==='classmate'&&config.format==='mcq'?'Classmate Anki cards use short-answer/recall format. Select that format, or choose All sources for MCQs.':'';$('#builder-start').disabled=!qs.length;$('#builder-start').textContent='Start '+size+' '+(config.format==='mcq'?'MCQs':config.format==='prescription'?'prescription/calculation questions':'recall questions');
  $('#builder-breakdown').innerHTML='<ul>'+STUDY_MODULE_LABELS[course].map((name,i)=>'<li>Module '+(i+1)+' · '+esc(name)+': '+qs.filter(q=>studyModuleNumbers(q,course).includes(i+1)).length+'</li>').join('')+'</ul><p class="tiny">Combined-source cards may appear in two module counts but occur once in a mixed session. Items without a Modules 1–5 assignment remain in the original banks.</p>';
  state.notes[storageKey]=JSON.stringify(config);persist();
 }
 $$('[data-builder-module]').forEach(el=>el.onchange=()=>{config.modules=$$('[data-builder-module]:checked').map(el=>Number(el.dataset.builderModule));draw();});
 $('#builder-combined').onchange=e=>{config.combined=e.target.checked;draw();};
 for(const key of ['format','source','selection','quantity','style','topic'])$('#builder-'+key).onchange=e=>{config[key]=e.target.value;if(key==='format')updateOptions();draw();};
 function setModules(modules){config.modules=modules;$$('[data-builder-module]').forEach(el=>el.checked=modules.includes(Number(el.dataset.builderModule)));draw();}
 $('#builder-all-modules').onclick=()=>setModules([1,2,3,4,5]);$('#builder-clear-modules').onclick=()=>setModules([]);
 $('#builder-midterm').onclick=()=>{Object.assign(config,{modules:[1,2,3,4,5],combined:true,source:'all',style:'all',topic:'all',selection:'all'});$('#builder-combined').checked=true;$('#builder-source').value='all';$('#builder-selection').value='all';updateOptions();setModules(config.modules);};
 $('#builder-start').onclick=()=>{const qs=shuffle(selected()),items=config.quantity==='all'?qs:qs.slice(0,Number(config.quantity));if(!items.length)return;startSession(config.format==='mcq'?(course==='Thera'?'thera':'ahad'):'short',items,{builderCourse:course});};
 updateOptions();draw();
}
