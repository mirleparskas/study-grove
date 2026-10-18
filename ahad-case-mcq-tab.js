'use strict';
function ahadCaseMCQTab(params){
 const root=$('#hub-content');
 root.innerHTML=`<section class="card"><h2>Learn the AHAD case studies through MCQs</h2><p><strong>15 named cases · 90 MCQs · 6 questions per case.</strong> Modules 1–5 include Foundations, HEENT, Dermatology I/II and Cardiology I.</p><p>The original case is visible with each question. Choose the best answer, then compare the reasons for all four options. Added findings are labelled as variations. These are original study questions, not an instructor answer key.</p><div class="filters"><label>Module<select id="case-mcq-module"><option value="all">All modules</option>${[1,2,3,4,5].map(n=>`<option value="${n}">Module ${n}</option>`).join('')}</select></label><label>Case<select id="case-mcq-patient"></select></label></div><p id="case-mcq-count" class="count" aria-live="polite"></p><div class="actions"><button class="primary" id="case-mcq-start"></button><button id="case-mcq-mixed">50-question mixed case practice</button><a class="button" href="#ahad-study/cases">Read case reviews</a></div><p class="tiny">Mixed practice is untimed and draws 50 distinct questions from these case studies. It does not guarantee the school’s module weighting.</p></section><div id="case-mcq-catalog"></div>`;
 const module=params.get('module');if(['1','2','3','4','5'].includes(module))$('#case-mcq-module').value=module;
 const fill=()=>{
  const module=$('#case-mcq-module').value,cs=AHAD_SUPPLIED_CASES.filter(c=>module==='all'||String(c.module)===module);
  $('#case-mcq-patient').innerHTML='<option value="all">All selected cases</option>'+cs.map(c=>`<option value="${c.id}">${esc(c.name)} · Module ${c.module}</option>`).join('');
 };
 const selected=()=>AHAD_SUPPLIED_MCQ.filter(q=>{
  const c=AHAD_SUPPLIED_CASES.find(c=>c.id===q.caseId);
  return ($('#case-mcq-module').value==='all'||String(c.module)===$('#case-mcq-module').value)&&($('#case-mcq-patient').value==='all'||c.id===$('#case-mcq-patient').value);
 });
 const draw=()=>{
  const qs=selected(),ids=new Set(qs.map(q=>q.caseId)),cs=AHAD_SUPPLIED_CASES.filter(c=>ids.has(c.id));
  $('#case-mcq-count').textContent=cs.length+' cases · '+qs.length+' questions';$('#case-mcq-start').textContent='Start these '+qs.length+' MCQs';
  $('#case-mcq-catalog').innerHTML='<div class="grid">'+cs.map(c=>`<section class="card"><span class="tag neutral">Module ${c.module}</span><h3>${esc(c.name)}</h3><p>${esc(c.summary)}</p><div class="actions"><button data-case-mcq="${c.id}">Study this case · 6 MCQs</button><a class="tiny" href="#ahad-study/cases?case=${c.id}">Read case &amp; model answers</a></div></section>`).join('')+'</div>';
  $$('[data-case-mcq]').forEach(b=>b.onclick=()=>startSession('ahad',AHAD_SUPPLIED_MCQ.filter(q=>q.caseId===b.dataset.caseMcq)));
 };
 fill();if(AHAD_SUPPLIED_CASES.some(c=>c.id===params.get('case')))$('#case-mcq-patient').value=params.get('case');draw();
 $('#case-mcq-module').onchange=()=>{fill();draw();};$('#case-mcq-patient').onchange=draw;
 $('#case-mcq-start').onclick=()=>startSession('ahad',selected());
 $('#case-mcq-mixed').onclick=()=>startSession('ahad',shuffle(AHAD_SUPPLIED_MCQ).slice(0,50));
}
