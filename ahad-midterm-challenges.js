"use strict";
// Original AHAD study vignettes; MCQ exam practice plus retrieval prompts.
Object.assign(PRACTICE_SOURCES,{
 scabiesSymptomsCDC:{title:'CDC: scabies symptoms and burrows',url:'https://www.cdc.gov/scabies/signs-symptoms/'},
 necrotizingCDC:{title:'CDC: clinical guidance for necrotizing fasciitis',url:'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/necrotizing-fasciitis.html'},
 tineaCDC:{title:'CDC: ringworm signs and symptoms',url:'https://www.cdc.gov/ringworm/signs-symptoms/'}
});
const AHAD_MIDTERM_ROWS=[
 [
  "ear-child",
  "Ear pain",
  "A 2-year-old has acute ear pain and fever after a URI. Otoscopy shows a bulging tympanic membrane and middle-ear effusion. Which diagnosis best fits?",
  [
   "Acute otitis media",
   "Otitis media with effusion alone",
   "Otitis externa",
   "Referred dental pain"
  ],
  "Bulging TM with acute inflammatory symptoms supports AOM. Effusion alone lacks acute inflammation; OE centers on the canal/tragal tenderness; referred dental pain does not explain the bulging TM.",
  [
   "Otitis media with effusion: fluid without acute inflammatory illness.",
   "Otitis externa: canal inflammation and pain with tragal/pinna movement.",
   "Referred dental pain: dental findings with an otherwise normal ear examination."
  ],
  [
   "Postauricular swelling/tenderness or a protruding pinna requires urgent assessment for mastoid complications.",
   "Toxic appearance, neurologic changes or dehydration require prompt escalation."
  ]
 ],
 [
  "ear-swimmer",
  "Ear pain",
  "After swimming, an adult has canal swelling/discharge and marked pain when the tragus is pressed. The visible TM is not bulging. Which diagnosis is most likely?",
  [
   "Acute otitis externa",
   "Acute otitis media",
   "Otitis media with effusion",
   "Temporomandibular disorder"
  ],
  "Canal inflammation and tragal tenderness support OE. AOM requires middle-ear findings; OME is fluid without acute canal inflammation; TMJ pain is linked to jaw movement and does not cause this canal discharge.",
  [
   "Acute otitis media: bulging TM and middle-ear inflammation.",
   "Otitis media with effusion: fluid with fewer acute inflammatory findings.",
   "TMJ disorder: jaw-linked pain without an inflamed/discharging canal."
  ],
  [
   "Severe persistent/deep pain in diabetes or immunocompromise needs urgent assessment for invasive disease.",
   "Spreading cellulitis, cranial nerve findings or systemic illness warrants escalation."
  ]
 ],
 [
  "eye-allergy",
  "Red eye",
  "A patient has bilateral intensely itchy watery eyes, sneezing and seasonal recurrence. Vision is normal and there is no pain or photophobia. Which diagnosis best fits?",
  [
   "Allergic conjunctivitis",
   "Bacterial conjunctivitis",
   "Viral conjunctivitis",
   "Keratitis"
  ],
  "Itch, bilateral watery symptoms and seasonal nasal allergy favor allergy. Bacterial disease more often has purulent discharge; viral disease often accompanies infectious exposure/URI; keratitis raises concern for pain, photophobia and corneal/visual findings.",
  [
   "Bacterial conjunctivitis: purulent discharge is more suggestive.",
   "Viral conjunctivitis: watery discharge with infectious exposure/URI.",
   "Keratitis: corneal findings, pain, photophobia or visual impairment."
  ],
  [
   "Pain, photophobia or reduced vision requires urgent ocular assessment.",
   "Contact-lens wear with a painful red eye increases concern for corneal infection."
  ]
 ],
 [
  "throat-abscess",
  "Sore throat",
  "A patient has severe unilateral throat pain, trismus, a muffled voice and uvular deviation. Which is the best answer?",
  [
   "Possible peritonsillar abscess: urgent assessment",
   "Uncomplicated viral pharyngitis: routine home care only",
   "Allergic rhinitis: start an antihistamine",
   "Uncomplicated GAS: prescribe without assessing the airway"
  ],
  "The asymmetric findings, trismus and muffled voice suggest a deep focal complication rather than uncomplicated pharyngitis. Assess airway and urgency first; a routine GAS prescription alone is insufficient.",
  [
   "Uncomplicated GAS pharyngitis: sore throat/fever without focal abscess features; testing context matters.",
   "Viral pharyngitis: often cough/coryza and lacks focal trismus/uvular deviation.",
   "Epiglottic/deep-neck infection: consider with drooling, stridor, neck swelling or airway symptoms."
  ],
  [
   "Drooling, stridor, breathing difficulty or inability to handle secretions is an emergency.",
   "Trismus, muffled voice, focal swelling or toxic appearance warrants urgent assessment."
  ]
 ],
 [
  "skin-tinea",
  "Scaly rash",
  "An otherwise well adult has a slowly enlarging annular scaly plaque with a raised active border and relative central clearing. Which is most likely?",
  [
   "Tinea corporis",
   "Nummular eczema",
   "Plaque psoriasis",
   "Granuloma annulare"
  ],
  "An active scaly advancing border favors tinea. Nummular eczema is eczematous throughout; psoriasis often has thicker well-demarcated scale and typical sites; granuloma annulare usually lacks surface scale. Confirm when uncertain or when treatment response is atypical.",
  [
   "Nummular eczema: coin-shaped eczematous plaques without a typical advancing fungal border.",
   "Plaque psoriasis: thicker plaques/scale, often extensor sites or nail changes.",
   "Granuloma annulare: annular papules usually without scale."
  ],
  [
   "Rapid painful spread, fever or toxicity suggests a different/additional process requiring urgent assessment.",
   "Extensive disease or immunocompromise changes assessment and treatment needs."
  ]
 ],
 [
  "skin-scabies",
  "Itchy rash",
  "Several household members develop intense nocturnal itch. One has papules/burrows at finger webs and wrists. Which diagnosis best fits?",
  [
   "Scabies",
   "Atopic dermatitis",
   "Allergic contact dermatitis",
   "Pediculosis capitis"
  ],
  "Household spread, nocturnal itch and characteristic burrows/sites favor scabies. Eczema is not contagious; contact dermatitis follows exposure distribution; head lice center on scalp/hair.",
  [
   "Atopic dermatitis: chronic relapsing eczema with an age-related distribution.",
   "Allergic contact dermatitis: exposure-linked distribution and timing.",
   "Head lice: live lice on scalp/hair rather than typical wrist/web-space burrows."
  ],
  [
   "Crusted/extensive disease in an immunocompromised person needs prompt assessment and coordinated control.",
   "Painful spreading erythema, fever or purulence suggests secondary infection."
  ]
 ],
 [
  "skin-danger",
  "Painful skin lesion",
  "A patient has rapidly progressive limb erythema, severe pain out of proportion to visible findings and systemic illness. What is the best interpretation?",
  [
   "Possible necrotizing soft-tissue infection: emergency assessment",
   "Simple dermatitis: observe for a week",
   "Mild localized impetigo: topical treatment only",
   "Stable venous eczema: routine emollient care"
  ],
  "Disproportionate pain, rapid progression and toxicity demand emergency evaluation. Early skin findings can underestimate deep disease; a benign surface appearance does not make observation safe.",
  [
   "Uncomplicated cellulitis: inflammation without the same degree of disproportionate pain/toxicity.",
   "Abscess: focal purulent collection; evaluate for source control.",
   "DVT: unilateral swelling/pain with thrombotic risk, rather than assuming every red limb is infection."
  ],
  [
   "Disproportionate pain, rapid progression, bullae, anesthesia or systemic toxicity are emergency warning signs.",
   "Hemodynamic instability or altered mental status requires immediate escalation."
  ]
 ],
 [
  "chest",
  "Chest discomfort",
  "A 62-year-old develops pressure in the chest and jaw while walking uphill that resolves with rest. Which explanation is most concerning and most consistent with this pattern?",
  [
   "Myocardial ischemia",
   "Gastroesophageal reflux",
   "Costochondritis",
   "Panic disorder"
  ],
  "Exertional pressure with jaw radiation and relief with rest raises ischemic concern. Reflux is often meal/position related; costochondritis is often reproducible; panic requires its own supportive pattern. None is excluded solely by a brief stem. New or changing symptoms need timely assessment.",
  [
   "Gastroesophageal reflux: burning/meal or positional association may help.",
   "Musculoskeletal chest pain: movement/palpation reproducibility may support it.",
   "Panic-related symptoms: fear/autonomic context may support it only after serious causes are considered."
  ],
  [
   "Current/prolonged or worsening rest pain, diaphoresis, syncope, dyspnea or instability requires emergency assessment.",
   "Abrupt severe tearing pain or pleuritic pain with hypoxia raises other life-threatening causes."
  ]
 ],
 [
  "dyspnea",
  "Dyspnea",
  "A patient has progressive exertional dyspnea, orthopnea, raised JVP, bilateral crackles and ankle edema. Which working diagnosis best unifies the findings?",
  [
   "Heart failure with congestion",
   "COPD exacerbation",
   "Pneumonia",
   "Pulmonary embolism"
  ],
  "The combined pulmonary and systemic congestion pattern supports HF; confirm with appropriate investigations, including cardiac assessment/echo, rather than declaring the subtype from symptoms alone.",
  [
   "COPD exacerbation: obstructive history/wheeze may predominate, although overlap can occur.",
   "Pneumonia: focal findings, infectious symptoms and imaging may support it.",
   "Pulmonary embolism: acute dyspnea, pleuritic pain and thrombotic risk require consideration."
  ],
  [
   "Acute severe breathlessness, hypoxia, chest pain, syncope or hypotension requires emergency assessment.",
   "Rapidly worsening symptoms or pulmonary edema needs urgent escalation."
  ]
 ],
 [
  "leg",
  "Exertional leg pain",
  "A smoker has reproducible calf pain after walking a set distance, relieved by rest, reduced pedal pulses and ABI 0.78. Which diagnosis is most likely?",
  [
   "Peripheral arterial disease",
   "Lumbar spinal stenosis as the only explanation",
   "DVT as the only explanation",
   "Chronic venous insufficiency as the only explanation"
  ],
  "Exertional claudication, reduced pulses and ABI below 0.90 support PAD. Neurogenic symptoms vary with posture; DVT more often causes acute unilateral swelling; venous disease often causes dependent edema/skin changes.",
  [
   "Neurogenic claudication: posture/flexion-related relief and spinal symptoms.",
   "DVT: acute unilateral swelling/pain and thrombotic risk.",
   "Venous insufficiency: dependent edema, varicosities and venous skin changes."
  ],
  [
   "Sudden pain with pallor, pulselessness, coldness, sensory loss or weakness suggests acute limb ischemia: emergency.",
   "Rest pain, nonhealing ulcers or gangrene warrants urgent vascular assessment."
  ]
 ],
 [
  "bp",
  "Markedly elevated BP",
  "A patient has BP 210/125 with new confusion, severe dyspnea and evidence of acute organ injury. Which is the best classification/action?",
  [
   "Hypertensive emergency: immediate hospital assessment",
   "Routine follow-up solely because hypertension is usually asymptomatic",
   "White-coat hypertension established from this reading",
   "No concern unless the systolic BP reaches 250"
  ],
  "Severely elevated BP with acute target-organ injury is an emergency. The organ injury and clinical context determine urgency; a number alone does not establish every hypertensive emergency.",
  [
   "Severe BP elevation without acute organ injury: different urgency/management after proper assessment.",
   "White-coat effect: requires an appropriate repeated/out-of-office pattern, not assumption.",
   "Secondary hypertension: consider causes during evaluation; it does not remove the acute emergency."
  ],
  [
   "New neurologic deficits/confusion, chest pain, severe dyspnea or acute visual symptoms with high BP require emergency evaluation.",
   "Do not delay escalation to complete routine outpatient confirmation when acute organ injury is suspected."
  ]
 ],
 [
  "test",
  "Diagnostic reasoning",
  "A patient has a high pretest probability of disease, but an initial test with limited sensitivity is negative. Which statement is best?",
  [
   "Reconcile the result with test performance, timing and clinical risk; further evaluation may be needed",
   "The negative test always excludes disease",
   "Pretest probability becomes irrelevant once any test is ordered",
   "A second unrelated normal result guarantees exclusion"
  ],
  "A negative result changes probability according to test performance; it does not automatically reduce a high-risk presentation to zero. Consider timing, specimen quality, alternative testing and the consequence of missing disease.",
  [
   "The leading diagnosis: reassess whether the negative test could be false negative.",
   "A close clinical mimic: look for discriminating history/exam findings.",
   "A dangerous alternative: consider the consequence and urgency even if it is less likely."
  ],
  [
   "Instability or a time-sensitive presentation requires action despite an initially reassuring test.",
   "A discordant result in a high-risk patient needs clinical reconciliation and a clear follow-up plan."
  ]
 ]
];
const AHAD_MIDTERM_CHALLENGES=AHAD_MIDTERM_ROWS.map(([id,topic,prompt,options,why,differentials,redflags])=>({id:'ahad-challenge-20261016-'+id,condition:'ahad-'+id,course:'AHAD',system:['chest','dyspnea','leg','bp'].includes(id)?'cardio':id==='test'?'foundations':id.startsWith('skin-')?'skin':'heent',module:['chest','dyspnea','leg','bp'].includes(id)?'Module 5 · Cardiology I':'Modules 1–4 · foundations, HEENT and skin',topic,prompt,options,answer:0,explanation:why+' Red flags: '+redflags.join(' '),sources:['ahadSeminar',...({ 'skin-scabies':['scabiesSymptomsCDC'],'skin-tinea':['tineaCDC'],'skin-danger':['necrotizingCDC'],dyspnea:['hfDiagnosis'],leg:['pad2024'],bp:['htn2025']}[id]||[])],sourceNote:'Your AHAD Term 1 seminar notes; original synthesized study vignette, not an instructor exam question or marking key.',practiceLabel:'AHAD midterm · multiple choice',drillGroup:'ahadMidtermChallenge',differentials,redflags}));
PRACTICE.push(...AHAD_MIDTERM_CHALLENGES);
const AHAD_REASONING_DRILLS=AHAD_MIDTERM_CHALLENGES.flatMap(q=>['differentials','redflags'].map(type=>({...q,id:q.id+'-'+type,type,prompt:q.prompt+' '+(type==='differentials'?'State the most likely diagnosis/interpretation and WHY, then give THREE differentials with distinguishing clues.':'Name TWO red flags and explain the urgency/action if present.'),rubric:type==='differentials'?[q.options[q.answer]+': '+q.explanation.split(' Red flags: ')[0],...q.differentials]:q.redflags,explanation:type==='differentials'?'Use the supplied pattern to rank possibilities. A differential list needs a discriminating clue, not three unranked labels.':'Connect each warning sign to an action. These are open-recall study cards; the AHAD midterm itself is entirely multiple choice.',pitfall:'These model responses do not replace a full history, examination and appropriate confirmatory testing.'})));
MIDTERM_RECALL.push(...AHAD_REASONING_DRILLS);
SHORT_ANSWERS.push(...AHAD_REASONING_DRILLS);
