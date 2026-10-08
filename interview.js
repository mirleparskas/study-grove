'use strict';
function interviewStudio(){
 let active=INTERVIEW_CASES[0], mode='guided', current, remaining=900, end=null;
 const key=()=> 'interview-session-'+active.id;
 const fresh=()=>({asked:[],exams:[],log:[],differential:'',summary:'',finished:false});
 function loadSession(){
  current=fresh();
  try{const saved=JSON.parse(state.notes[key()]||'null');if(saved&&Array.isArray(saved.asked)&&Array.isArray(saved.exams)&&Array.isArray(saved.log))current={...current,...saved};}catch(e){}
  current.asked=current.asked.filter(n=>Number.isInteger(n)&&n>=0&&n<active.questions.length);
  current.exams=current.exams.filter(n=>Number.isInteger(n)&&n>=0&&n<active.exams.length);
  remaining=active.minutes*60;end=null;clearInterval(timerInterval);
 }
 function save(){state.notes[key()]=JSON.stringify(current);persist();}
 function timerText(){const el=$('#interview-clock');if(el)el.textContent=Math.floor(remaining/60).toString().padStart(2,'0')+':'+(remaining%60).toString().padStart(2,'0');}
 function stopTimer(){if(end)remaining=Math.max(0,Math.ceil((end-Date.now())/1000));end=null;clearInterval(timerInterval);}
 function draw(){
  $('#main').innerHTML=header('Practise your patient interview','Ask, listen, request findings, then explain your differential. Patient responses come from your supplied OSCE cases.','AHAD QUESTIONING & CLINICAL REASONING')+
  `<div class="actions"><a class="button" href="#osce">OSCE studio</a><a class="button" href="#midterm-ahad">AHAD plan</a></div>
  <div class="filters"><label>Presenting complaint<select id="interview-case">${INTERVIEW_CASES.map(c=>`<option value="${c.id}" ${c.id===active.id?'selected':''}>${esc(c.title)}</option>`).join('')}</select></label><label>Mode<select id="interview-mode"><option value="guided" ${mode==='guided'?'selected':''}>Guided · exact question examples</option><option value="simulation" ${mode==='simulation'?'selected':''}>Simulation · phrase your own questions</option></select></label></div>
  <section class="card"><h2>${esc(active.title)}</h2><p>${esc(active.brief)}</p><p><strong>Opening statement:</strong> ${esc(active.opening)}</p><div class="actions"><span id="interview-clock" class="tag" role="timer"></span><button id="interview-timer">${end?'Pause timer':'Start / resume timer'}</button><button id="interview-new">Archive & start new attempt</button></div><p class="tiny">Timer resets on case change or navigation. Interview notes and revealed topics remain saved in this browser and in progress backups.</p></section>
  <div class="split" style="margin-top:20px"><section class="card"><h2>Your questions</h2><p>${mode==='guided'?'Choose a topic to see a sample question. Say it aloud, then reveal the response.':'Type or say your question, then select its topic to reveal the corresponding source response. Exact example questions stay hidden until the debrief.'}</p><label>Question topic<select id="interview-topic">${active.questions.map((q,i)=>`<option value="${i}">${esc(q[0])}${current.asked.includes(i)?' · reviewed':''}</option>`).join('')}</select></label><p id="interview-example" style="margin-top:15px"></p><label>Your question (optional when practising aloud)<textarea id="interview-question" maxlength="500" placeholder="How would you ask the patient or caregiver?"></textarea></label><button id="interview-ask" class="primary" style="margin-top:12px">Reveal this topic’s response</button><p class="tiny">The selected topic controls the reply. This is a source-scripted drill; it does not interpret or grade your wording.</p><div id="interview-response" aria-live="polite"></div></section>
  <section class="card"><h2>Request examination findings</h2><p>Say what you would examine and why, then request the findings.</p><div class="list">${active.exams.map((e,i)=>`<button data-exam="${i}">${esc(e[0])}${current.exams.includes(i)?' · requested':''}</button>`).join('')}</div><div id="interview-exam-response" aria-live="polite"></div><p class="tiny" id="interview-progress"></p></section></div>
  <section class="card" style="margin-top:20px"><h2>Explain your reasoning before the debrief</h2><label>Your summary to the patient<textarea id="interview-summary" maxlength="10000" placeholder="Summarize the story, check that you understood, and invite corrections.">${esc(current.summary)}</textarea></label><label style="margin-top:16px">Your ranked differential<textarea id="interview-differential" maxlength="10000" placeholder="Leading diagnosis; alternatives; supporting and opposing findings; unanswered questions; important safety concerns.">${esc(current.differential)}</textarea></label><button id="interview-finish" class="primary" style="margin-top:12px">Finish & reveal questions and differential</button></section>
  <section class="card" style="margin-top:20px"><h2>Your encounter log</h2><div id="interview-log"></div></section><div id="interview-debrief"></div>`;
  $('#interview-case').onchange=e=>{stopTimer();active=INTERVIEW_CASES.find(c=>c.id===e.target.value);loadSession();draw();};
  $('#interview-mode').onchange=e=>{mode=e.target.value;draw();};
  $('#interview-topic').onchange=example;
  $('#interview-ask').onclick=()=>{
   const i=Number($('#interview-topic').value),q=active.questions[i],typed=$('#interview-question').value.trim();
   if(!current.asked.includes(i))current.asked.push(i);
   current.log.push({topic:q[0],question:typed||(mode==='guided'?q[1]:'Spoken question · wording not recorded'),answer:q[2]});
   current.log=current.log.slice(-100);save();
   $('#interview-response').innerHTML=`<div class="feedback"><h3>Source response</h3><p>${esc(q[2])}</p>${mode==='guided'?`<p class="tiny">${esc(q[3])}</p>`:''}</div>`;
   $('#interview-question').value='';$('#interview-topic').selectedOptions[0].textContent=q[0]+' · reviewed';progress();log();if(current.finished)debrief();
  };
  $$('[data-exam]').forEach(el=>el.onclick=()=>{const i=Number(el.dataset.exam);if(!current.exams.includes(i))current.exams.push(i);save();$('#interview-exam-response').innerHTML=`<div class="feedback"><h3>${esc(active.exams[i][0])}</h3><p>${esc(active.exams[i][1])}</p></div>`;el.textContent=active.exams[i][0]+' · requested';progress();});
  ['summary','differential'].forEach(name=>$('#interview-'+name).oninput=e=>{current[name]=e.target.value;save();});
  $('#interview-finish').onclick=()=>{stopTimer();current.finished=true;save();debrief();$('#interview-timer').textContent='Start / resume timer';$('#interview-debrief').scrollIntoView({behavior:'smooth'});};
  $('#interview-new').onclick=()=>{stopTimer();state.notes['interview-archive-'+active.id+'-'+Date.now()]=JSON.stringify(current);current=fresh();remaining=active.minutes*60;save();draw();};
  $('#interview-timer').onclick=()=>{if(end){stopTimer();$('#interview-timer').textContent='Start / resume timer';}else{if(remaining<=0)remaining=active.minutes*60;end=Date.now()+remaining*1000;$('#interview-timer').textContent='Pause timer';timerInterval=setInterval(()=>{remaining=Math.max(0,Math.ceil((end-Date.now())/1000));timerText();if(!remaining){stopTimer();$('#interview-timer').textContent='Restart timer';toast('Practice time is up. Finish your summary and reveal the debrief when ready.');}},250);}};
  timerText();example();progress();log();debrief();
 }
 function example(){const q=active.questions[Number($('#interview-topic').value)];$('#interview-example').textContent=mode==='guided'?q[1]:'';$('#interview-response').innerHTML='';}
 function progress(){$('#interview-progress').textContent=current.asked.length+' / '+active.questions.length+' history topics revealed; '+current.exams.length+' / '+active.exams.length+' examination groups requested. This measures topic coverage, not interview quality.';}
 function log(){$('#interview-log').innerHTML=current.log.length?current.log.map(l=>`<details><summary>${esc(l.topic)}</summary><p><strong>Your question:</strong> ${esc(l.question)}</p><p><strong>Source response:</strong> ${esc(l.answer)}</p></details>`).join(''):'<p>No responses revealed yet.</p>';}
 function debrief(){
  if(!current.finished){$('#interview-debrief').innerHTML='';return;}
  const missed=active.questions.map((q,i)=>({q,i})).filter(x=>!current.asked.includes(x.i));
  $('#interview-debrief').innerHTML=`<section class="card" style="margin-top:20px"><h2>Debrief</h2><h3>${esc(active.diagnosis)}</h3><p>${esc(active.reasoning)}</p><div class="table-scroll"><table><thead><tr><th>Alternative</th><th>Compare with this case</th></tr></thead><tbody>${active.differentials.map(d=>`<tr><td>${esc(d[0])}</td><td>${esc(d[1])}</td></tr>`).join('')}</tbody></table></div><h3 style="margin-top:20px">Topics not yet revealed</h3><p>${missed.length?esc(missed.map(x=>x.q[0]).join('; ')):'All listed topics were revealed. Review your wording, listening and sequence separately.'}</p><h3>Full question guide</h3><p class="tiny">Case-specific rehearsal prompts, not an exhaustive history or an official school rubric. Added questions are identified in their notes.</p>${active.questions.map((q,i)=>`<details><summary>${current.asked.includes(i)?'Reviewed':'Revisit'}: ${esc(q[0])}</summary><p><strong>${esc(q[1])}</strong></p><p>${esc(q[2])}</p><p class="tiny">${esc(q[3])}</p></details>`).join('')}<h3 style="margin-top:20px">Reflect on your reasoning</h3><ul>${active.debrief.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><p class="notice">${esc(active.limitation)}</p><p>Case source: <a href="sources/OSCE_Practice_Case_Source_Material.docx" download>OSCE Practice Case Source Material</a>, ${esc(active.sourceSection)}. Questions are adapted for rehearsal; patient answers preserve the supplied facts and gaps.</p><p>Supporting reference checked September 27, 2026: ${active.references.map(r=>`<a href="${esc(r[1])}" target="_blank" rel="noopener">${esc(r[0])}</a>`).join(', ')}.</p></section>`;
 }
 loadSession();draw();
}
