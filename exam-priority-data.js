'use strict';
Object.assign(PRACTICE_SOURCES,{
 "drugActionSlides": {
  "title": "Your Drug Action and Pharmacokinetics lecture, slide 44",
  "url": "sources/Drug_Action_Pharmacokinetics.pptx"
 },
 "pastStudentOct18": {
  "title": "Past-student topic notes supplied October 18; historical recollection",
  "url": "sources/Past_student_priorities_Oct18.md"
 },
 "clavulin2026": {
  "title": "GSK Canada: Clavulin product monograph, April 2026",
  "url": "https://ca.gsk.com/media/m2chdv5s/clavulin.pdf"
 },
 "avamysCanada": {
  "title": "GSK Canada: Avamys monograph",
  "url": "https://ca.gsk.com/media/2vzdaopr/avamys.pdf"
 },
 "nasonexCanada": {
  "title": "Organon Canada: Nasonex monograph",
  "url": "https://www.organon.com/canada-en/wp-content/uploads/sites/5/2021/05/NASONEX-PM_E.pdf"
 },
 "omnarisCanada": {
  "title": "Health Canada: Omnaris monograph, February 2021",
  "url": "https://pdf.hres.ca/dpd_pm/00059998.PDF"
 },
 "rhinocortCanada": {
  "title": "Health Canada: Rhinocort Aqua monograph, August 2019 comparison",
  "url": "https://pdf.hres.ca/dpd_pm/00052642.PDF"
 },
 "covidOntario": {
  "title": "Ontario Health: adult COVID drug therapy and risk factors",
  "url": "https://santeontario.ca/content/dam/ontariohealth/documents/summary-of-recommendations-for-drug-therapy-for-adults-with-covid-19.pdf"
 },
 "cnoDelegation": {
  "title": "CNO: Scope of Practice, delegation requirements and restrictions",
  "url": "https://www.cno.org/standards-learning/ask-practice/delegation"
 },
 "probioticsCPS": {
  "title": "CPS: probiotics, antibiotic-associated diarrhea and susceptible hosts",
  "url": "https://cps.ca/en/documents/position/probiotics-in-paediatric-populations"
 },
 "nfIDSA": {
  "title": "IDSA: necrotizing soft-tissue infection recommendations",
  "url": "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/"
 },
 "nfCDC": {
  "title": "CDC: type II necrotizing fasciitis",
  "url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/necrotizing-fasciitis.html"
 },
 "psoriasisPregAAD": {
  "title": "AAD: psoriasis treatment during pregnancy",
  "url": "https://www.aad.org/public/diseases/psoriasis/treatment/stage/pregnant"
 },
 "asaSOGC": {
  "title": "SOGC: hypertensive disorders of pregnancy and preeclampsia risk assessment",
  "url": "https://sogc.org/common/Uploaded%20files/ACSC/ACSC2024/gui426CPG2205E.pdf"
 },
 "venousSlides": {
  "title": "Your venous-ulcer treatment slides, slide 8: selected four-layer system",
  "url": "sources/Treatment Venous Ulcer .pptx"
 },
 "theraCoreNotes": {
  "title": "Your THERA 1 course notes; imported source with known conflicts",
  "url": "sources/THERA 1.docx"
 },
 "anaphylaxisPHAC": {
  "title": "PHAC: anaphylaxis treatment and IM epinephrine",
  "url": "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-2-vaccine-safety/page-4-early-vaccine-reactions-including-anaphylaxis.html"
 }
});
const EXAM_PRIORITY_MCQS=[
 {
  "id": "priority-20261018-incs-age2",
  "course": "Thera",
  "condition": "nasal-steroid-selection",
  "system": "heent",
  "module": 2,
  "topic": "Nasal steroid selection",
  "prompt": "A two-year-old with allergic rhinitis needs an INCS. Using the linked CANADIAN monographs, which product has an indication covering this age?",
  "options": [
   "Avamys (fluticasone furoate)",
   "Nasonex (mometasone furoate)",
   "Rhinocort Aqua (budesonide)",
   "Omnaris (ciclesonide)"
  ],
  "answer": 0,
  "explanation": "Avamys includes allergic rhinitis from age 2.",
  "optionRationales": [
   "Avamys includes allergic rhinitis from age 2.",
   "The linked Nasonex pediatric allergic-rhinitis indication begins at age 3.",
   "The linked Rhinocort Aqua pediatric indication begins at age 6.",
   "The linked Canadian Omnaris indication begins at age 12."
  ],
  "sources": [
   "avamysCanada",
   "nasonexCanada",
   "rhinocortCanada",
   "omnarisCanada"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-incs-order",
  "course": "Thera",
  "condition": "nasal-steroid-selection",
  "system": "heent",
  "module": 2,
  "topic": "Nasal steroid selection",
  "prompt": "For a two-year-old, Avamys 27.5 mcg/spray is selected. Which starting directions match its Canadian monograph?",
  "options": [
   "1 spray in each nostril once daily; total 55 mcg/day",
   "1 spray in each nostril twice daily; total 110 mcg/day",
   "2 sprays in each nostril once daily; total 110 mcg/day",
   "2 sprays in each nostril twice daily; total 220 mcg/day"
  ],
  "answer": 0,
  "explanation": "The pediatric starting dose is one spray per nostril once daily.",
  "optionRationales": [
   "The pediatric starting dose is one spray per nostril once daily.",
   "This doubles the starting daily exposure.",
   "This is the usual adult/adolescent dose rather than the pediatric starting dose.",
   "This quadruples the pediatric starting exposure."
  ],
  "sources": [
   "avamysCanada"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-nasonex-age",
  "course": "Thera",
  "condition": "nasal-steroid-selection",
  "system": "heent",
  "module": 2,
  "topic": "Nasal steroid selection",
  "prompt": "A four-year-old has allergic rhinitis. Which Nasonex order matches the linked Canadian pediatric monograph?",
  "options": [
   "50 mcg/spray: 1 spray in each nostril once daily",
   "50 mcg/spray: 2 sprays in each nostril twice daily",
   "50 mcg/spray: 1 spray in each nostril four times daily",
   "50 mcg/spray: 2 sprays in one nostril twice daily"
  ],
  "answer": 0,
  "explanation": "The age 3-11 rhinitis schedule totals 100 mcg/day.",
  "optionRationales": [
   "The age 3-11 rhinitis schedule totals 100 mcg/day.",
   "This resembles a higher rhinosinusitis schedule for older patients.",
   "This gives 400 mcg/day rather than the pediatric rhinitis dose.",
   "This changes both distribution and daily exposure without justification."
  ],
  "sources": [
   "nasonexCanada"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-aom-recent",
  "course": "Thera",
  "condition": "aom-selection",
  "system": "heent",
  "module": 2,
  "topic": "AOM selection",
  "prompt": "A child has AOM requiring antibiotics, normal renal function and no penicillin allergy. Amoxicillin was used 14 days ago. Which CPS-based choice best accounts for that detail?",
  "options": [
   "Amoxicillin-clavulanate",
   "Amoxicillin at the same previous regimen",
   "Azithromycin because recent exposure establishes beta-lactam allergy",
   "Ciprofloxacin ear drops as sole treatment with an intact TM"
  ],
  "answer": 0,
  "explanation": "Recent amoxicillin within 30 days favours amoxicillin-clavulanate in the CPS guidance.",
  "optionRationales": [
   "Recent amoxicillin within 30 days favours amoxicillin-clavulanate in the CPS guidance.",
   "This does not address the recent-exposure selection factor.",
   "Exposure is not an allergy and does not establish macrolide susceptibility.",
   "With an intact TM, canal drops do not replace indicated middle-ear treatment."
  ],
  "sources": [
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-gas-daycare",
  "course": "Thera",
  "condition": "pharyngitis-selection",
  "system": "heent",
  "module": 2,
  "topic": "Pharyngitis selection",
  "prompt": "An otherwise well school-aged child has confirmed GAS pharyngitis, no allergy and attended daycare previously. Which interpretation of the past-student notes is best?",
  "options": [
   "Daycare and a remote antibiotic course do not by themselves replace a GAS first-line beta-lactam",
   "Daycare makes amoxicillin-clavulanate first line for every confirmed GAS infection",
   "Antibiotics within three months establish a penicillin-resistant GAS infection",
   "Daycare means an AOM duration should replace the GAS duration"
  ],
  "answer": 0,
  "explanation": "Use the confirmed indication and its guideline; do not transplant AOM risk rules to GAS.",
  "optionRationales": [
   "Use the confirmed indication and its guideline; do not transplant AOM risk rules to GAS.",
   "The exposure detail alone does not justify broader GAS therapy.",
   "CDC reports no clinical GAS isolate resistant to penicillin; history is not a susceptibility result.",
   "Durations must remain specific to the indication."
  ],
  "sources": [
   "gasAgeCDC",
   "mums2024"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-oe-tm",
  "course": "Thera",
  "condition": "otitis-externa",
  "system": "heent",
  "module": 2,
  "topic": "Otitis externa",
  "prompt": "Acute bacterial otitis externa is diagnosed, but TM integrity is uncertain. Which regimen matches the already verified MUMS OE table?",
  "options": [
   "Ciprodex 4 drops in the affected ear BID for 7 days",
   "Sofracort 2-3 drops TID or QID pending visualization of the TM",
   "Polysporin drops QID pending visualization of the TM",
   "Acetic acid/alcohol drops until TM status can be confirmed"
  ],
  "answer": 0,
  "explanation": "Use the suitable non-ototoxic option when a defect cannot be excluded.",
  "optionRationales": [
   "Use the suitable non-ototoxic option when a defect cannot be excluded.",
   "Framycetin-containing drops require an intact TM; uncertainty is not reassurance.",
   "The source limits this potentially ototoxic option to intact-TM use.",
   "Acid/alcohol preparations are unsuitable when a perforation is possible."
  ],
  "sources": [
   "mums2024",
   "theraCoreNotes"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-oe-dermatitis",
  "course": "Thera",
  "condition": "otitis-externa",
  "system": "heent",
  "module": 2,
  "topic": "Otitis externa",
  "prompt": "A patient has bacterial OE and eczematous canal inflammation; the TM is intact. Why might an appropriate antibiotic/steroid otic product be selected?",
  "options": [
   "It addresses canal infection and associated inflammation",
   "It treats middle-ear organisms more effectively through the intact TM",
   "It eliminates the need to assess contact allergy to ear preparations",
   "It establishes that oral amoxicillin-clavulanate is required"
  ],
  "answer": 0,
  "explanation": "This is a canal-treatment decision; check the exact product and contraindications.",
  "optionRationales": [
   "This is a canal-treatment decision; check the exact product and contraindications.",
   "An intact TM separates canal treatment from middle-ear infection.",
   "Contact sensitivity remains relevant, especially in dermatitis.",
   "Canal dermatitis alone does not establish an oral-antibiotic indication."
  ],
  "sources": [
   "theraCoreNotes",
   "mums2024"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-ear-teaching",
  "course": "Thera",
  "condition": "ear-specific-teaching",
  "system": "heent",
  "module": 2,
  "topic": "Ear-specific teaching",
  "prompt": "Which teaching statement correctly separates uncomplicated AOM with an intact TM from OE or a perforated/draining ear?",
  "options": [
   "Avoid canal trauma in either; dry-ear precautions are particularly relevant to OE or a nonintact/draining ear",
   "Dry-ear precautions mean routine steroid ear drops are required for intact-TM AOM",
   "Any middle-ear effusion after AOM requires antibiotics until otoscopy normalizes",
   "Cotton swabs should clear the canal before each dose in OE"
  ],
  "answer": 0,
  "explanation": "Match teaching to the site and TM status; review pain control, follow-up and smoke exposure as appropriate.",
  "optionRationales": [
   "Match teaching to the site and TM status; review pain control, follow-up and smoke exposure as appropriate.",
   "Precautions do not create an indication for canal drops.",
   "Residual effusion without acute symptoms is not treatment failure by itself.",
   "Swabs may traumatize the canal or push debris inward."
  ],
  "sources": [
   "theraCoreNotes",
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-clav-ratio",
  "course": "Thera",
  "condition": "amoxicillin-clavulanate",
  "system": "heent",
  "module": 2,
  "topic": "Amoxicillin-clavulanate",
  "prompt": "Both suspensions provide 400 mg of amoxicillin per dose. How much clavulanate accompanies that dose in 400/57 mg per 5 mL versus 250/62.5 mg per 5 mL?",
  "options": [
   "57 mg versus 100 mg",
   "57 mg versus 62.5 mg",
   "114 mg versus 100 mg",
   "100 mg versus 57 mg"
  ],
  "answer": 0,
  "explanation": "The first needs 5 mL; the second needs 8 mL, containing 100 mg clavulanate.",
  "optionRationales": [
   "The first needs 5 mL; the second needs 8 mL, containing 100 mg clavulanate.",
   "62.5 mg is per 5 mL, but 8 mL is needed for 400 mg amoxicillin.",
   "114 mg would require 10 mL of the first suspension.",
   "This reverses the formulations."
  ],
  "sources": [
   "clavulin2026"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-clav-frequency",
  "course": "Thera",
  "condition": "amoxicillin-clavulanate",
  "system": "heent",
  "module": 2,
  "topic": "Amoxicillin-clavulanate",
  "prompt": "A note says to reduce diarrhea by giving smaller doses more often. What does the 2026 Clavulin monograph actually support when comparing its labelled pediatric schedules?",
  "options": [
   "The 200/400 mg BID formulations had less diarrhea than the labelled 125F/250F TID schedules",
   "Every formulation has less diarrhea if divided QID",
   "Changing any 7:1 formulation to TID necessarily lowers diarrhea risk",
   "The formulation ratio has no role if the total amoxicillin dose is unchanged"
  ],
  "answer": 0,
  "explanation": "The label favours its BID 200/400 schedules; a separate guideline may specify another dose/frequency for another purpose.",
  "optionRationales": [
   "The label favours its BID 200/400 schedules; a separate guideline may specify another dose/frequency for another purpose.",
   "QID is not supported as a universal remedy by this comparison.",
   "Do not detach frequency from formulation and indication.",
   "Clavulanate exposure also changes with formulation."
  ],
  "sources": [
   "clavulin2026",
   "theraSeminar"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-clav-timing",
  "course": "Thera",
  "condition": "amoxicillin-clavulanate",
  "system": "heent",
  "module": 2,
  "topic": "Amoxicillin-clavulanate",
  "prompt": "Which administration instruction is supported by the Canadian Clavulin monograph to reduce GI intolerance?",
  "options": [
   "Give at the start of a meal",
   "Give two hours before meals",
   "Give only at bedtime on an empty stomach",
   "Combine the daily amount into one dose with dinner"
  ],
  "answer": 0,
  "explanation": "Starting with a meal can improve GI tolerability.",
  "optionRationales": [
   "Starting with a meal can improve GI tolerability.",
   "Fasting is not the recommended GI-tolerance strategy.",
   "An empty-stomach bedtime rule is unsupported.",
   "Meal timing does not justify changing the prescribed interval."
  ],
  "sources": [
   "clavulin2026"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-probiotic-host",
  "course": "Thera",
  "condition": "antibiotic-associated-diarrhea",
  "system": "heent",
  "module": 2,
  "topic": "Antibiotic-associated diarrhea",
  "prompt": "A child receiving chemotherapy has a central venous catheter. The family asks about Saccharomyces boulardii to prevent antibiotic-associated diarrhea. Which assessment best fits CPS guidance?",
  "options": [
   "Assess the risk of invasive probiotic infection before recommending it",
   "Treat all probiotic products as equivalent to food with no host-specific risk",
   "Recommend it automatically because every yeast is unaffected by antibiotics",
   "Use it to replace the indicated antibacterial course"
  ],
  "answer": 0,
  "explanation": "Susceptible and immunocompromised children need particular risk assessment.",
  "optionRationales": [
   "Susceptible and immunocompromised children need particular risk assessment.",
   "Product, strain and host factors matter.",
   "Antibiotic survival does not establish clinical safety.",
   "A probiotic is not a substitute for indicated infection treatment."
  ],
  "sources": [
   "probioticsCPS"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-nf-types",
  "course": "Thera",
  "condition": "necrotizing-infection",
  "system": "skin",
  "module": 5,
  "topic": "Necrotizing infection",
  "prompt": "Which pairing best describes the commonly taught type I and type II necrotizing fasciitis classification?",
  "options": [
   "I: mixed aerobic/anaerobic infection; II: classically GAS, sometimes with S. aureus",
   "I: GAS alone; II: dermatophytes with anaerobes",
   "I: S. aureus alone; II: Candida alone",
   "I: viral reactivation; II: mixed aerobic/anaerobic infection"
  ],
  "answer": 0,
  "explanation": "This is the usual teaching distinction, not an exhaustive classification of every necrotizing infection.",
  "optionRationales": [
   "This is the usual teaching distinction, not an exhaustive classification of every necrotizing infection.",
   "This reverses the first category and adds an inappropriate fungal pairing.",
   "These do not represent the standard I/II distinction.",
   "Necrotizing fasciitis is not classified as viral reactivation here."
  ],
  "sources": [
   "nfCDC",
   "nfIDSA"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-nf-first",
  "course": "Thera",
  "condition": "necrotizing-infection",
  "system": "skin",
  "module": 5,
  "topic": "Necrotizing infection",
  "prompt": "Rapidly progressive leg pain, toxicity and hypotension suggest necrotizing fasciitis. What must be arranged first at an outpatient visit?",
  "options": [
   "Emergency transfer and immediate surgical assessment while resuscitation and IV antibiotics are arranged",
   "Outpatient CT before deciding whether to contact a surgeon",
   "A trial of high-dose oral cephalexin with next-day review",
   "A wound culture result before selecting any antibiotic"
  ],
  "answer": 0,
  "explanation": "This is a surgical emergency; coordinated care must not wait for outpatient testing.",
  "optionRationales": [
   "This is a surgical emergency; coordinated care must not wait for outpatient testing.",
   "Imaging must not delay surgical evaluation in a strongly suspicious presentation.",
   "Oral outpatient treatment is inadequate for this emergency.",
   "Microbiology guides later tailoring, not permission to begin urgent care."
  ],
  "sources": [
   "nfIDSA",
   "nfCDC"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-covid-window",
  "course": "Thera",
  "condition": "covid-treatment",
  "system": "resp",
  "module": 2,
  "topic": "COVID treatment",
  "prompt": "An adult is eligible for early outpatient COVID treatment. Which initiation windows match Ontario Health guidance, measured from symptom onset?",
  "options": [
   "Nirmatrelvir/ritonavir: within 5 days; remdesivir: within 7 days",
   "Nirmatrelvir/ritonavir: within 7 days; remdesivir: within 5 days",
   "Both: within 5 days of the positive test regardless of symptom onset",
   "Both: within 10 days of the last exposure"
  ],
  "answer": 0,
  "explanation": "Count from symptom onset and still review eligibility, interactions and organ function.",
  "optionRationales": [
   "Count from symptom onset and still review eligibility, interactions and organ function.",
   "This reverses the windows.",
   "A test date does not reset the symptom-onset clock.",
   "Exposure timing does not define these treatment windows."
  ],
  "sources": [
   "covidOntario"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-covid-risk",
  "course": "Thera",
  "condition": "covid-treatment",
  "system": "resp",
  "module": 2,
  "topic": "COVID treatment",
  "prompt": "A vaccinated 45-year-old with type 2 diabetes develops COVID symptoms. Which use of the diabetes detail is most accurate?",
  "options": [
   "It contributes to severe-outcome risk assessment, without automatically establishing immunocompromised status or eligibility",
   "It establishes immunocompromised status and makes interaction review unnecessary",
   "It excludes antiviral treatment because the patient is under 65",
   "It establishes that dexamethasone is preferred for mild disease without oxygen need"
  ],
  "answer": 0,
  "explanation": "Assess the whole risk profile and the applicable treatment criteria promptly.",
  "optionRationales": [
   "Assess the whole risk profile and the applicable treatment criteria promptly.",
   "Diabetes is a risk factor, not a waiver of prescribing checks.",
   "Younger adults can still warrant assessment based on their risk profile.",
   "The outpatient antiviral pathway is distinct from oxygen-requiring disease management."
  ],
  "sources": [
   "covidOntario"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-delegation-prescribe",
  "course": "Thera",
  "condition": "delegation",
  "system": "foundations",
  "module": 1,
  "topic": "Delegation",
  "prompt": "An NP proposes to delegate the controlled act of prescribing an antibiotic to an RN who lacks independent prescribing authority. Which CNO answer is correct?",
  "options": [
   "NP prescribing authority cannot be delegated in this way",
   "It can be delegated if the patient has previously used the drug",
   "It can be delegated if the RN has five years of experience",
   "It can be delegated if the NP signs a broad annual directive"
  ],
  "answer": 0,
  "explanation": "CNO lists prescribing among NP controlled acts that cannot be delegated.",
  "optionRationales": [
   "CNO lists prescribing among NP controlled acts that cannot be delegated.",
   "Prior treatment does not remove the statutory restriction.",
   "Experience does not confer this delegated authority.",
   "A directive cannot bypass a delegation restriction."
  ],
  "sources": [
   "cnoDelegation"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-delegation-responsibility",
  "course": "Thera",
  "condition": "delegation",
  "system": "foundations",
  "module": 1,
  "topic": "Delegation",
  "prompt": "For a controlled act that can lawfully be delegated, which accountability pairing is correct?",
  "options": [
   "Delegator: appropriate delegation and delegatee competence; delegatee: acceptance and performance",
   "Delegator: all future performance; delegatee: documentation only",
   "Delegator: employer approval only; delegatee: no further assessment",
   "Delegator: documentation only; delegatee: authority to subdelegate"
  ],
  "answer": 0,
  "explanation": "The decision to delegate and the decision/performance by the recipient have distinct accountabilities.",
  "optionRationales": [
   "The decision to delegate and the decision/performance by the recipient have distinct accountabilities.",
   "Delegation does not remove the recipient's accountability.",
   "Employer approval does not replace legal authority or clinical judgement.",
   "A delegated act cannot simply be subdelegated."
  ],
  "sources": [
   "cnoDelegation"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-compression-level",
  "course": "Thera",
  "condition": "compression",
  "system": "skin",
  "module": 5,
  "topic": "Compression",
  "prompt": "Your venous-ulcer slide 8 describes a selected four-layer high-compression wrap. Which pressure range does it specify?",
  "options": [
   "30-40 mmHg",
   "10-15 mmHg",
   "15-20 mmHg",
   "50-60 mmHg"
  ],
  "answer": 0,
  "explanation": "This is the stated range for that system; assess perfusion and suitability first.",
  "optionRationales": [
   "This is the stated range for that system; assess perfusion and suitability first.",
   "This is substantially lower than the slide's specified high-compression range.",
   "This is below the range for the selected system.",
   "This exceeds the range stated for that system."
  ],
  "sources": [
   "venousSlides"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-compression-perfusion",
  "course": "Thera",
  "condition": "compression",
  "system": "skin",
  "module": 5,
  "topic": "Compression",
  "prompt": "A leg-ulcer patient has rest pain, a cool foot and weak pulses. Which action should precede prescribing strong compression?",
  "options": [
   "Urgent arterial/perfusion assessment and referral as indicated",
   "Choose the four-layer range solely from the presence of ankle edema",
   "Apply high compression and use pain response as the perfusion test",
   "Treat a positive surface swab before assessing circulation"
  ],
  "answer": 0,
  "explanation": "Possible ischemia changes urgency and compression safety.",
  "optionRationales": [
   "Possible ischemia changes urgency and compression safety.",
   "Edema does not establish adequate arterial supply.",
   "A painful compression trial is not a safe perfusion assessment.",
   "Colonization does not resolve the vascular concern."
  ],
  "sources": [
   "mums2024",
   "venousSlides"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-pressure-stage",
  "course": "Thera",
  "condition": "pressure-injury",
  "system": "skin",
  "module": 5,
  "topic": "Pressure injury",
  "prompt": "A pressure wound has visible subcutaneous adipose but no exposed fascia, muscle, tendon, cartilage or bone. No tissue obscures its depth. Which stage best fits?",
  "options": [
   "Stage 3",
   "Stage 2",
   "Stage 4",
   "Unstageable"
  ],
  "answer": 0,
  "explanation": "Visible adipose with full-thickness skin loss, without deeper exposed structures, fits Stage 3.",
  "optionRationales": [
   "Visible adipose with full-thickness skin loss, without deeper exposed structures, fits Stage 3.",
   "Stage 2 does not expose adipose.",
   "Stage 4 involves exposed or directly palpable deeper structures.",
   "The depth is visible rather than obscured."
  ],
  "sources": [
   "lesionPressure"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-pd-synergy",
  "course": "Thera",
  "condition": "drug-actions",
  "system": "foundations",
  "module": 1,
  "topic": "Drug actions",
  "prompt": "In an illustrative experiment, drug A produces 1 unit of effect and B produces 1 unit. The combination produces 3 units. Which term describes the interaction?",
  "options": [
   "Synergistic",
   "Additive",
   "Antagonistic",
   "Pharmacokinetic clearance"
  ],
  "answer": 0,
  "explanation": "The combined effect exceeds the sum of the individual effects.",
  "optionRationales": [
   "The combined effect exceeds the sum of the individual effects.",
   "An additive response would be 2 units in this example.",
   "Antagonism would reduce the response.",
   "Clearance describes drug handling, not this measured interaction pattern."
  ],
  "sources": [
   "drugActionSlides"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-pertussis-regimen",
  "course": "Thera",
  "condition": "pertussis",
  "system": "resp",
  "module": 2,
  "topic": "Pertussis",
  "prompt": "For an adult whose selected pertussis treatment is azithromycin, which MUMS course and 250-mg tablet count match?",
  "options": [
   "500 mg day 1, then 250 mg daily days 2-5; 6 tablets",
   "500 mg daily for 5 days; 5 tablets",
   "250 mg twice daily for 10 days; 20 tablets",
   "500 mg day 1, then 250 mg daily days 2-7; 8 tablets"
  ],
  "answer": 0,
  "explanation": "Two tablets initially and four later tablets give six for the five-day course.",
  "optionRationales": [
   "Two tablets initially and four later tablets give six for the five-day course.",
   "This changes the course and the tablet count is also incorrect for 500-mg doses.",
   "This is not the stated MUMS azithromycin pertussis schedule.",
   "This extends the prescribed five-day course."
  ],
  "sources": [
   "mums2024"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-preg-psoriasis",
  "course": "Thera",
  "condition": "pregnancy-and-psoriasis",
  "system": "skin",
  "module": 5,
  "topic": "Pregnancy and psoriasis",
  "prompt": "A pregnant patient needs treatment for limited plaque psoriasis. Which medication plan and interpretation of recalled low-dose ASA are best?",
  "options": [
   "Consider an appropriate low/mid-potency topical corticosteroid; assess any ASA indication separately",
   "Use methotrexate; ASA prevents its fetal adverse effects",
   "Use tazarotene; topical administration removes pregnancy concerns",
   "Use low-dose ASA as the primary drug to clear the plaques"
  ],
  "answer": 0,
  "explanation": "AAD supports selected topical corticosteroids; aspirin prophylaxis requires a separate obstetric risk indication.",
  "optionRationales": [
   "AAD supports selected topical corticosteroids; aspirin prophylaxis requires a separate obstetric risk indication.",
   "Methotrexate is unsuitable in pregnancy; aspirin does not make it safe.",
   "Topical tazarotene is avoided in pregnancy.",
   "ASA for obstetric prevention is not primary psoriasis treatment."
  ],
  "sources": [
   "psoriasisPregAAD",
   "asaSOGC"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-anaphylaxis-first",
  "course": "Thera",
  "condition": "emergency-priorities",
  "system": "foundations",
  "module": 1,
  "topic": "Emergency priorities",
  "prompt": "Immediately after medication administration, an adult develops wheeze, hypotension and generalized urticaria. What action should occur while emergency help is activated?",
  "options": [
   "Prompt IM epinephrine in the anterolateral thigh, with resuscitation and reassessment",
   "Oral antihistamine followed by referral if wheeze persists",
   "IV corticosteroid before deciding whether epinephrine is indicated",
   "Arrange transport and withhold treatment until arrival at hospital"
  ],
  "answer": 0,
  "explanation": "Treat suspected anaphylaxis immediately; transfer and acute treatment occur together.",
  "optionRationales": [
   "Treat suspected anaphylaxis immediately; transfer and acute treatment occur together.",
   "Antihistamines do not replace epinephrine for airway/circulatory compromise.",
   "Corticosteroids do not replace first-line epinephrine.",
   "Referral must not delay immediately indicated emergency treatment."
  ],
  "sources": [
   "anaphylaxisPHAC"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-htn-exam",
  "course": "AHAD",
  "condition": "hypertension-examination",
  "system": "cardio",
  "module": 5,
  "topic": "Hypertension examination",
  "prompt": "Which assessment set best evaluates possible target-organ effects and secondary clues in a patient with persistently high BP?",
  "options": [
   "Heart/rhythm, pulses, bruits where indicated, edema/HF findings, fundoscopy and focused neurologic examination",
   "Heart sounds, tonsil size, tympanometry and isolated visual acuity",
   "Carotid auscultation alone, repeated after exercise",
   "A single seated BP and ankle circumference without pulse assessment"
  ],
  "answer": 0,
  "explanation": "Name the actual components and select findings based on history and context.",
  "optionRationales": [
   "Name the actual components and select findings based on history and context.",
   "Most of this set does not target the hypertension assessment.",
   "A bruit assessment alone is incomplete and exercise does not standardize resting BP.",
   "One reading and a circumference do not establish the needed assessment."
  ],
  "sources": [
   "htn2025",
   "ahadSeminar"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-htn-technique",
  "course": "AHAD",
  "condition": "hypertension-examination",
  "system": "cardio",
  "module": 5,
  "topic": "Hypertension examination",
  "prompt": "A patient arrives after smoking and brisk walking. The initial cuff is visibly too small. Which next measurement plan is best?",
  "options": [
   "Rest, use an appropriate cuff with supported arm/back/feet, and obtain repeated standardized readings",
   "Repeat immediately with the same cuff to average away the error",
   "Switch to the forearm and interpret with the same upper-arm threshold without validation",
   "Diagnose from the first value if both arms feel equally warm"
  ],
  "answer": 0,
  "explanation": "Standardize technique before interpreting repeated BP; use out-of-office confirmation when appropriate.",
  "optionRationales": [
   "Standardize technique before interpreting repeated BP; use out-of-office confirmation when appropriate.",
   "Repeated systematic error does not become accurate by averaging.",
   "Site and device validation matter.",
   "Skin warmth cannot validate BP technique or confirm hypertension."
  ],
  "sources": [
   "htn2025"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-cobblestone",
  "course": "AHAD",
  "condition": "upper-airway-findings",
  "system": "heent",
  "module": 2,
  "topic": "Upper-airway findings",
  "prompt": "Itchy eyes, sneezing, pale swollen turbinates and posterior pharyngeal cobblestoning occur together. Which interpretation is strongest?",
  "options": [
   "Allergic rhinitis with chronic postnasal irritation",
   "Confirmed GAS requiring no testing because cobblestoning is specific",
   "Bacterial sinusitis established by pale turbinates",
   "Epiglottitis established by the posterior pharyngeal pattern"
  ],
  "answer": 0,
  "explanation": "The combined allergic symptom pattern is more persuasive than any single sign.",
  "optionRationales": [
   "The combined allergic symptom pattern is more persuasive than any single sign.",
   "Cobblestoning does not confirm GAS.",
   "Pale turbinates favour allergy; sinusitis requires its own clinical pattern.",
   "Epiglottitis has urgent features such as airway symptoms, not this typical allergic cluster."
  ],
  "sources": [
   "theraSeminar",
   "ahadSeminar"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-periorbital-redflag",
  "course": "AHAD",
  "condition": "sinus-and-orbital-findings",
  "system": "heent",
  "module": 2,
  "topic": "Sinus and orbital findings",
  "prompt": "A patient with sinus symptoms has eyelid edema, pain with eye movement, diplopia and reduced vision. What is the best next step?",
  "options": [
   "Urgent emergency assessment for orbital involvement",
   "Treat as uncomplicated allergic rhinitis and review in one week",
   "Use routine oral sinusitis treatment and reassess after the complete course",
   "Treat conjunctivitis topically and wait for the eyelid edema to settle"
  ],
  "answer": 0,
  "explanation": "Painful eye movements and visual dysfunction raise concern for an orbital complication.",
  "optionRationales": [
   "Painful eye movements and visual dysfunction raise concern for an orbital complication.",
   "These visual and motility findings are not explained by routine allergy.",
   "Possible orbital disease should not wait for completion of routine outpatient therapy.",
   "Surface treatment does not address a possible orbital emergency."
  ],
  "sources": [
   "orbitalAAO"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-aom-organisms",
  "course": "AHAD",
  "condition": "middle-ear-microbiology",
  "system": "heent",
  "module": 2,
  "topic": "Middle-ear microbiology",
  "prompt": "Which list contains the usual three major bacterial AOM organisms, with the Haemophilus subtype correctly specified?",
  "options": [
   "S. pneumoniae; nontypeable H. influenzae; M. catarrhalis",
   "S. pneumoniae; H. influenzae type b; S. aureus",
   "S. pyogenes; P. aeruginosa; M. catarrhalis",
   "S. aureus; nontypeable H. influenzae; P. aeruginosa"
  ],
  "answer": 0,
  "explanation": "These are the three high-yield organisms; age and exposure do not identify a species in one patient.",
  "optionRationales": [
   "These are the three high-yield organisms; age and exposure do not identify a species in one patient.",
   "Type b is not a substitute for nontypeable strains in the usual set.",
   "This mixes GAS/external-canal organisms into the usual leading set.",
   "Pseudomonas and S. aureus are prominent in OE rather than this three-organism AOM list."
  ],
  "sources": [
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 },
 {
  "id": "priority-20261018-aom-vs-oe",
  "course": "AHAD",
  "condition": "ear-localization",
  "system": "heent",
  "module": 2,
  "topic": "Ear localization",
  "prompt": "Ear pain worsens with tragal pressure. The canal is edematous with debris; the visible TM is intact without bulging. Which diagnosis and organism pair best fit?",
  "options": [
   "Otitis externa; P. aeruginosa and S. aureus",
   "AOM; S. pneumoniae and nontypeable H. influenzae",
   "AOM; P. aeruginosa and S. aureus",
   "Otitis externa; S. pneumoniae and M. catarrhalis"
  ],
  "answer": 0,
  "explanation": "Canal findings and tragal tenderness support OE with its usual bacterial pair.",
  "optionRationales": [
   "Canal findings and tragal tenderness support OE with its usual bacterial pair.",
   "The stated findings localize to the canal, not an inflamed bulging middle ear.",
   "This pairs the wrong diagnosis with external-canal organisms.",
   "The diagnosis fits, but the organism pair better matches AOM."
  ],
  "sources": [
   "aomOrganismsCPS",
   "mums2024"
  ],
  "sourceNote": "Original practice prompted by historical student notes. Clinical answer follows the explicitly named reference, not the recollection. Supplied-regimen exercises test calculation rather than a universal treatment recommendation.",
  "practiceLabel": "Targeted exam-priority practice",
  "drillGroup": "pastStudentPriorities",
  "examSkill": "reasoning"
 }
];
const EXAM_PRIORITY_WRITTEN=[
 {
  "id": "priority-written-20261018-gas",
  "course": "Thera",
  "condition": "priority-gas",
  "system": "heent",
  "module": 2,
  "topic": "Pediatric GAS prescription",
  "type": "calculation",
  "prompt": "REGIMEN RECALL: Confirmed GAS, age 6, weight 18 kg, normal renal function, no allergy. Use the MUMS 2024 first-line pediatric amoxicillin regimen. Supplied suspension: 250 mg/5 mL. Recall the daily dose, frequency and duration, then write a complete prescription and three teaching points.",
  "rubric": [
   "720 mg/day; 360 mg/dose; concentration 50 mg/mL.",
   "Amoxicillin 250 mg/5 mL: give 7.2 mL PO twice daily for 10 days; course volume 144 mL; repeats 0.",
   "Add the required patient/date/prescriber details and authentication; actual dispensed volume may reflect available bottle sizes.",
   "Use an oral syringe, follow storage/shaking instructions, and explain allergy/clinical worsening precautions.",
   "Review infection-control and school/daycare return guidance from the applicable course/public-health reference."
  ],
  "explanation": "The indication and reference determine the regimen; daycare does not automatically turn GAS therapy into an AOM second-line plan.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "mums2024",
   "gasAgeCDC",
   "theraSeminar"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 },
 {
  "id": "priority-written-20261018-aom",
  "course": "Thera",
  "condition": "priority-aom",
  "system": "heent",
  "module": 2,
  "topic": "Pediatric AOM prescription",
  "type": "calculation",
  "prompt": "REGIMEN RECALL: Age 14 months, weight 12 kg, confirmed AOM requiring treatment, normal renal function, no allergy or recent amoxicillin. Use the upper end of the MUMS high-dose amoxicillin range. Supplied suspension: 400 mg/5 mL. Recall the daily dose and age-appropriate duration, then write a complete prescription and caregiver teaching.",
  "rubric": [
   "1080 mg/day; 540 mg per dose; concentration 80 mg/mL.",
   "Amoxicillin 400 mg/5 mL: 6.75 mL PO twice daily for 10 days; exact course volume 135 mL; repeats 0.",
   "Use a measurable volume according to the supplied syringe and local rounding instructions; do not silently change the daily dose.",
   "Discuss pain relief, clinical review if not improving or if worsening, smoke avoidance and oral-syringe use.",
   "Dry-ear instructions depend on canal disease or TM defect/drainage; do not add routine antibiotic ear drops for intact-TM AOM."
  ],
  "explanation": "MUMS uses a 10-day course for this age. The maximum and all patient-specific checks still apply.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "mums2024",
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 },
 {
  "id": "priority-written-20261018-clav",
  "course": "Thera",
  "condition": "priority-clav",
  "system": "heent",
  "module": 2,
  "topic": "Amoxicillin-clavulanate prescription",
  "type": "calculation",
  "prompt": "SUPPLIED-REGIMEN CALCULATION: An 18-kg child is selected for amoxicillin-clavulanate for AOM. The exercise supplies the CPS schedule of 60 mg/kg/DAY of AMOXICILLIN divided TID for 10 days, using 400/57 mg per 5 mL. Calculate both component exposures and write the prescription.",
  "rubric": [
   "1080 mg/day amoxicillin; 360 mg per dose.",
   "400/57 mg per 5 mL: 4.5 mL PO three times daily for 10 days; 135 mL for the course; repeats 0.",
   "Clavulanate: 51.3 mg per dose, 153.9 mg/day, or 8.55 mg/kg/day.",
   "Name both strengths and the supplied CPS frequency. Do not substitute the 250/62.5 formulation mL-for-mL.",
   "This CPS course is not the same as the product-monograph BID schedule comparison or every MUMS regimen."
  ],
  "explanation": "The supplied schedule tests formulation-aware calculation. Source-specific guidance can differ; keep dose, ratio and frequency together.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "aomOrganismsCPS",
   "clavulin2026"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 },
 {
  "id": "priority-written-20261018-pneumonia-adult",
  "course": "Thera",
  "condition": "priority-pneumonia-adult",
  "system": "resp",
  "module": 2,
  "topic": "Adult pneumonia prescription",
  "type": "calculation",
  "prompt": "SUPPLIED-REGIMEN CALCULATION: An adult outpatient with diagnosed pneumonia is clinically suitable for the selected plan. The case provides amoxicillin 1 g PO TID for 5 days, using 500-mg capsules. Write complete directions and quantity, and name checks needed before signing.",
  "rubric": [
   "Amoxicillin 500-mg capsules: take TWO capsules (1 g) PO three times daily for 5 days.",
   "Dispense 30 capsules; repeats 0; add patient/date/prescriber identifiers and authentication.",
   "Verify the case-specific guideline, severity/site of care, allergy, pregnancy when relevant, renal function and recent antibiotic use.",
   "Give follow-up and urgent worsening instructions; duration should be reviewed against the actual clinical course/reference."
  ],
  "explanation": "This is an explicitly supplied five-day course for calculation, not a new claim about the unverified original pneumonia case or all current pneumonia durations.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "theraSeminar"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 },
 {
  "id": "priority-written-20261018-pneumonia-child",
  "course": "Thera",
  "condition": "priority-pneumonia-child",
  "system": "resp",
  "module": 2,
  "topic": "Pediatric pneumonia prescription",
  "type": "calculation",
  "prompt": "SUPPLIED-REGIMEN CALCULATION: A case selects oral amoxicillin 90 mg/kg/DAY divided BID for 5 days for a clinically stable 20-kg child with pneumonia. The reference maximum is not exceeded. Supplied concentration: 400 mg/5 mL. Write the prescription and quantity.",
  "rubric": [
   "1800 mg/day; 900 mg per dose; 80 mg/mL.",
   "Amoxicillin 400 mg/5 mL: give 11.25 mL PO twice daily for 5 days.",
   "Exact course volume 112.5 mL; repeats 0; dispense an adequate practical supply and specify rounding only if required.",
   "Complete prescription identifiers and verify the reference, allergy, organ function, caregiver administration and follow-up."
  ],
  "explanation": "The supplied dose and duration are exercise inputs. They do not reproduce an original pneumonia case that has not been located.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "theraSeminar"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 },
 {
  "id": "priority-written-20261018-diarrhea",
  "course": "Thera",
  "condition": "priority-diarrhea",
  "system": "heent",
  "module": 2,
  "topic": "Three diarrhea-reduction strategies",
  "type": "education",
  "prompt": "Name THREE defensible strategies to reduce amoxicillin-clavulanate GI intolerance/antibiotic-associated diarrhea. Distinguish prevention from treatment of severe diarrhea.",
  "rubric": [
   "Select an appropriate formulation/regimen that limits unnecessary clavulanate exposure while providing the indicated amoxicillin dose; verify the product and reference.",
   "Administer at the start of a meal to improve GI tolerability.",
   "Consider an evidence-supported probiotic strain in an appropriate host after risk assessment; CPS discusses L. rhamnosus GG and S. boulardii for prevention.",
   "Do not teach more-frequent dosing as a universal rule: the Clavulin label reports less diarrhea with its BID 200/400 schedules than its TID 125F/250F schedules.",
   "Severe/persistent or bloody diarrhea, fever, significant abdominal pain or dehydration needs assessment; do not simply mask it with an antidiarrheal."
  ],
  "explanation": "These strategies are conditional, with separate reference support. Probiotics are not automatically suitable for an immunocompromised patient.",
  "pitfall": "Include patient/date/prescriber identifiers, drug and strength, route, dose, frequency, duration, quantity, repeats and required authentication. Supplied regimens are calculation exercises, not an assertion that every patient with this diagnosis receives that regimen.",
  "sources": [
   "clavulin2026",
   "aomOrganismsCPS",
   "probioticsCPS"
  ],
  "sourceNote": "Original case-style prescription drill. The stem explicitly identifies regimen recall versus supplied-regimen calculation.",
  "practiceLabel": "THERA case-style writing practice",
  "drillGroup": "pastStudentPriorities"
 }
];
PRACTICE.push(...EXAM_PRIORITY_MCQS);
MIDTERM_RECALL.push(...EXAM_PRIORITY_WRITTEN);
SHORT_ANSWERS.push(...EXAM_PRIORITY_WRITTEN);
