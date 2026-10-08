'use strict';
const textbookLoads={};
function loadTextbook(id){
 if(window.TEXTBOOK_PAGES?.[id])return Promise.resolve(TEXTBOOK_PAGES[id]);
 if(!textbookLoads[id])textbookLoads[id]=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='textbook-index/'+id+'.js';script.onload=()=>resolve(TEXTBOOK_PAGES[id]);script.onerror=()=>{delete textbookLoads[id];reject(Error('The local search index could not load. Open the original PDF instead.'));};document.head.append(script);});
 return textbookLoads[id];
}
function textbookLibrary(){
 const link=(b,page=1)=>encodeURI(b.source)+'#page='+page;
 $('#main').innerHTML=header('Your textbook references','Find source pages for AHAD, Thera and OSCE practice. These books support your course materials; they do not define exam coverage.','REFERENCE LIBRARY')+
 `<p class="notice">Editions range from 2011 to 2020. Medication choices, doses, durations and special-population recommendations need current Canadian and course-source checks before becoming answer keys. Page links use PDF page numbers, which can differ from printed page numbers.</p>
 <div class="list">${TEXTBOOKS.map(b=>`<article class="card"><h2>${esc(b.title)}</h2><p><strong>${esc(b.edition)}</strong> · ${b.pages} PDF pages</p><p>${esc(b.purpose)}</p><p class="tiny">${b.pagesWithText} pages contain substantial extracted text. ${b.pagesWithText<b.pages*.5?'This file is mainly scanned; search chapter headings or read the PDF. OCR has not been performed.':'Text extraction may miss image labels or alter table reading order; verify the original page.'}${b.failedPages.length?' '+b.failedPages.length+' pages could not be extracted.':''}</p><div class="actions"><a class="button" href="${link(b)}" target="_blank" rel="noopener">Open textbook PDF</a><a class="button" href="${link(b,b.editionEvidencePage)}" target="_blank" rel="noopener">Edition / copyright page</a></div><details style="margin-top:15px"><summary>Chapter shortcuts for history, HEENT, skin and clinical skills</summary><ul>${b.toc.filter(t=>/heent|head and neck|ear|nose|throat|dermat|skin|interview|history taking|medical hx|communication|physical examination/i.test(t.title)).slice(0,35).map(t=>`<li><a href="${link(b,t.page)}" target="_blank" rel="noopener">${esc(t.title)}</a> · PDF p. ${t.page}</li>`).join('')||'<li>Use the PDF contents or search below.</li>'}</ul></details></article>`).join('')}</div>
 <section class="card" style="margin-top:22px"><h2>Search textbook pages and chapter headings</h2><form id="textbook-search"><div class="filters"><label>Textbook<select id="textbook-choice">${TEXTBOOKS.map(b=>`<option value="${b.id}">${esc(b.title)}</option>`).join('')}</select></label><label>Word or phrase<input id="textbook-query" type="search" minlength="2" maxlength="120" required placeholder="Try otitis, skin, or interviewing"></label></div><button class="primary" type="submit">Search this textbook</button></form><p class="tiny">Exact phrase search, ignoring capitalization. Search indexes load only when needed. Scanned pages may not match even when they contain the topic.</p><p id="textbook-status" role="status"></p><div id="textbook-results" class="list"></div></section>`;
 let request=0;
 $('#textbook-search').onsubmit=async e=>{
  e.preventDefault();const ticket=++request,b=TEXTBOOKS.find(b=>b.id===$('#textbook-choice').value),query=$('#textbook-query').value.trim().toLowerCase();
  if(query.length<2)return;
  const status=$('#textbook-status'),results=$('#textbook-results');status.textContent='Loading and searching local index…';results.innerHTML='';
  try{
   const pages=await loadTextbook(b.id);if(ticket!==request||!status.isConnected)return;
   const headings=b.toc.filter(t=>t.title.toLowerCase().includes(query));
   const matches=pages.filter(p=>p.text.toLowerCase().includes(query));
   status.textContent=headings.length+' matching chapter headings and '+matches.length+' matching PDF pages. Showing up to 50 of each.';
   results.innerHTML=headings.slice(0,50).map(t=>`<article class="card"><span class="tag">Chapter heading</span><h3><a href="${link(b,t.page)}" target="_blank" rel="noopener">${esc(t.title)} · PDF p. ${t.page}</a></h3></article>`).join('')+matches.slice(0,50).map(p=>{const pos=p.text.toLowerCase().indexOf(query),start=Math.max(0,pos-65);return `<article class="card"><h3><a href="${link(b,p.page)}" target="_blank" rel="noopener">${esc(b.title)} · PDF p. ${p.page}</a></h3><p>${start?'…':''}${esc(p.text.slice(start,start+280))}…</p></article>`;}).join('');
   if(!headings.length&&!matches.length)results.innerHTML='<p>No text matches. Try a shorter phrase or open the PDF and inspect its contents; this does not prove the topic is absent.</p>';
  }catch(err){if(ticket===request&&status.isConnected)status.textContent=err.message;}
 };
}
