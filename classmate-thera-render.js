'use strict';
function classmateRecord(q){return typeof CLASSMATE_THERA_RECALL!=='undefined'?CLASSMATE_THERA_RECALL.find(x=>x.id===q.id):null;}
function studyPromptHTML(q){const peer=classmateRecord(q);return peer?peer.promptHtml:esc(q.prompt);}
function classmateStudyAnswer(q){
 const peer=classmateRecord(q);if(!peer)return '';
 const original=`<div class="classmate-answer">${peer.answerHtml}</div>`;
 return `<div class="classmate-source"><p class="tiny"><strong>Classmate Anki answer.</strong> Imported wording and images; remaining clinical details have not been independently verified.</p>${peer.clinicalCorrection?`<div class="notice"><strong>Reference correction / important distinction</strong><p>${esc(peer.clinicalCorrection)}</p></div><details><summary>Preserved original answer (conflict flagged)</summary>${original}</details>`:original}</div>`;
}
