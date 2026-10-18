'use strict';
Object.assign(PRACTICE_SOURCES,{
 suppliedAHADCases:{title:'Modules 1-5 case studies: seminar notes and October 18 supplements',url:'sources/AHAD_Cases_Modules_1_5_Oct18.md'},
 contactAAD:{title:'AAD: contact dermatitis symptoms',url:'https://www.aad.org/public/diseases/eczema/types/contact-dermatitis/symptoms'},
 cellulitisCDC:{title:'CDC: cellulitis',url:'https://www.cdc.gov/group-a-strep/about/cellulitis.html'},
 pfbBAD:{title:'British Association of Dermatologists: pseudofolliculitis',url:'https://cdn.bad.org.uk/uploads/2021/12/16125523/Pseudofolliculitis-PIL-Dec-2021.pdf'},
 folliculitisAAD:{title:'AAD: folliculitis and razor bumps',url:'https://www.aad.org/public/diseases/a-z/folliculitis/'},
 dfi2023:{title:'IWGDF/IDSA 2023: diabetes-related foot infection diagnosis',url:'https://www.idsociety.org/practice-guideline/diabetic-foot-infections/'},
 screenUSPSTF:{title:'USPSTF 2023: skin cancer screening, accuracy and population limits',url:'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/skin-cancer-screening'},
 melanomaBiopsyNCI:{title:'NCI: melanoma diagnostic biopsy',url:'https://www.cancer.gov/types/skin/hp/melanoma-treatment-pdq'},
 pressureAHRQ:{title:'AHRQ: pressure risk assessment and prevention',url:'https://www.ahrq.gov/patient-safety/settings/hospital/resource/pressureulcer/tool/pu3.html'},
 pressureNICE:{title:'NICE CG179: skin assessment including darker skin',url:'https://www.nice.org.uk/guidance/cg179/chapter/Recommendations'},
 pressureNPIAP:{title:'NPIAP: pressure injury stage definitions',url:'https://cdn.ymaws.com/npiap.com/resource/resmgr/NPIAP-Staging-Poster.pdf'},
 bradenStudy:{title:'Primary study: Braden risk bands (10–12 high risk)',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC7883615/'},
 htnAssessment:{title:'Hypertension Canada: baseline investigations (2020–22 detailed assessment reference)',url:'https://guidelines.hypertension.ca/wp-content/uploads/2022/09/2020-22-HT-Guidelines-E-WEB_v3b.pdf'},
 ccsLipids:{title:'CCS 2021 lipids: non-HDL-C/ApoB with elevated triglycerides',url:'https://ccs.ca/guideline/2021-lipids/chapter-5-pico-questions-evidence-review-and-new-recommendations/'}
});
const AHAD_SUPPLIED_CASES=[
 {
  "id": "tom",
  "module": 1,
  "name": "Tom",
  "stem": "Tom (he/him), a 34-year-old man, presents to the clinic after a two-year absence for a reported rash. The visit is scheduled for fifteen minutes; however, Tom arrives with a list of additional concerns he would like to discuss.",
  "questions": [
   "How would you balance attending to Tom’s concerns with the clinic’s scheduling constraints?",
   "Discuss the benefits of identifying the type of health assessment most appropriate to the purpose of the encounter. What type of assessment is appropriate for Tom at this visit?"
  ],
  "answers": [
   [
    "Elicit the full agenda early, screen for urgent issues, agree on priorities and explain the available time.",
    "Address the highest-priority concern safely and arrange explicit follow-up for deferred issues; neither automatic dismissal nor an unplanned full review fits every situation."
   ],
   [
    "A focused/episodic assessment fits a time-limited specific rash presentation after triage; broaden if history or examination warrants it.",
    "Match the scope to the purpose and risk, with a planned comprehensive assessment when indicated. A two-year absence alone does not require completing every preventive issue in this visit."
   ]
  ],
  "sources": [
   "ahadSeminar"
  ],
  "note": "",
  "existingInNotes": true,
  "summary": "34, rash visit after two years away; a 15-minute appointment and several additional concerns."
 },
 {
  "id": "nellie",
  "module": 1,
  "name": "Nellie",
  "stem": "Nellie (she/her), a 74-year-old Indigenous woman, presents to your clinic with her daughter. Nellie lives in a remote Indigenous community and is in the city visiting her daughter. In her home community, she normally receives sporadic, episodic care from an outpost nurse. Her daughter is requesting that Nellie be screened for cancer and diabetes. Nellie speaks very little English and tends to avoid eye contact when questioned.",
  "questions": [
   "Discuss the process of adding Nellie as a new patient to your clinic.",
   "How can the NP provide culturally safe, sensitive care to Nellie and her daughter?",
   "How would you address the daughter’s concerns about cancer and diabetes?"
  ],
  "answers": [
   [
    "Clarify Nellie’s goals, immediate needs, consent/preferences and communication requirements; obtain prior records with appropriate permission.",
    "Plan a comprehensive assessment, medication/relevant screening review and continuity with her home services; avoid duplicating unknown prior tests reflexively."
   ],
   [
    "Arrange appropriate language support, address Nellie directly and ask how she wants her daughter involved.",
    "Ask about her individual preferences, priorities and experiences; reflect on bias. Limited English or eye contact does not establish incapacity or a specific cultural meaning."
   ],
   [
    "Explore the specific concerns and distinguish symptoms needing diagnostic assessment from preventive screening requests.",
    "Review Nellie’s wishes, prior screening, health status and applicable screening guidance; do not order every test solely on the daughter’s request."
   ]
  ],
  "sources": [
   "ahadSeminar"
  ],
  "note": "",
  "existingInNotes": true,
  "summary": "74, visiting from a remote community; limited English, daughter requests cancer/diabetes screening, prior records incomplete."
 },
 {
  "id": "karen",
  "module": 1,
  "name": "Karen",
  "stem": "Karen (she/her), a 78-year-old widow, lives alone in a small, remote Indigenous community. She has had poorly controlled type 2 diabetes for fifteen years. Her two adult children have relocated to an urban area for better employment opportunities. A small, ulcerated area has been present on her right great toe for the past two months, which she has been treating herself. She can reach the nearby town for groceries, supplies, and clinic visits only when a friend can give her a ride. At her last clinic visit six months ago, the new NP suggested that Karen may need to begin insulin therapy to improve her blood glucose control. Karen is reluctant to do so because of the cost of the necessary supplies and a fear of self-injection. She reports that her monthly pension barely covers her groceries and utilities.",
  "questions": [
   "Based on the case presentation, discuss the social determinants of health that are affecting Karen’s current health status."
  ],
  "answers": [
   [
    "Limited income/supply affordability, transport and geographic access, reduced nearby support and discontinuous access to care are concrete barriers.",
    "Explore injection fear, understanding, goals and patient-identified experiences rather than labelling nonadherence. The persistent toe ulcer also needs timely clinical assessment and a feasible coordinated follow-up plan."
   ]
  ],
  "sources": [
   "ahadSeminar",
   "dfi2023"
  ],
  "note": "",
  "existingInNotes": true,
  "summary": "78, longstanding poorly controlled diabetes and a two-month great-toe ulcer; transport, supply costs and injection fear affect care."
 },
 {
  "id": "terry",
  "module": 2,
  "name": "Terry",
  "stem": "Terry (he/him), a 44-year-old construction worker, presents to your clinic reporting a red, itchy right eye for the past two days. He states that his right eyelid sticks together on waking and that he must wash the eye before he can open it. His left eye is bothering him as well now. He reports no change in vision, apart from increased sensitivity to bright light, and notes nasal congestion over the past five days.",
  "questions": [
   "What additional key health history questions should the NP ask Terry?",
   "What eye examination techniques will you include in your assessment?",
   "Consider how your physical examination would differ if he had reported eye pain and a sensation of something in his eye.",
   "If the NP discovered a steel filing at the 3 o’clock position at the periphery of the iris, what would be the most appropriate next action?"
  ],
  "answers": [
   [
    "Ask about visual acuity change, true photophobia/pain, contact lenses, trauma/high-velocity metal, discharge, exposures and prior eye disease.",
    "His reported light sensitivity requires clarification and examination; do not assume routine conjunctivitis from crusting alone."
   ],
   [
    "Assess visual acuity in each eye, pupils, external/lid and conjunctival findings, corneal clarity and eye movements; use fluorescein/slit-lamp assessment when indicated and within competence.",
    "Look for corneal or intraocular warning signs rather than treating all red eyes as the same condition."
   ],
   [
    "Prioritize trauma/mechanism, corneal/foreign-body assessment and visual acuity; consider lid eversion/fluorescein when appropriate.",
    "If penetration is suspected, protect the eye, avoid pressure/manipulation and arrange urgent specialist/emergency assessment."
   ],
   [
    "Clarify whether the metal is superficial corneal material or possible penetrating/intraocular injury; iris-level wording does not establish depth.",
    "Removal or referral depends on depth, visual findings, rust ring, mechanism, equipment and competence. Suspected penetration or difficult/embedded material warrants urgent appropriate referral, not blind removal."
   ]
  ],
  "sources": [
   "ahadSeminar",
   "eyeFB",
   "keratitisAAO"
  ],
  "note": "",
  "existingInNotes": true,
  "summary": "44, itchy red eyes with morning lid adhesion, URI symptoms and light sensitivity; construction work raises exposure questions."
 },
 {
  "id": "beth",
  "module": 2,
  "name": "Beth",
  "stem": "Beth (she/her), a 33-year-old early childhood educator, reports \"excruciating pain in the left ear for the past 24 hours.\" She has no history of ear problems. The history reveals that she teaches swimming part-time for a competitive swim team at the local YMCA. She presents today because the pain is worsening, and she noticed white-to-yellowish drainage from her ear on her pillow this morning. She has no fever.",
  "questions": [
   "At this stage, list the differential diagnoses the NP should consider based on Beth’s presenting symptoms.",
   "What physical findings would the NP expect to observe during the examination?",
   "What is the most likely causative microorganism?",
   "If the tympanic membrane could not be visualized, how should the NP rule out a middle ear infection?"
  ],
  "answers": [
   [
    "Otitis externa is a leading possibility with swimming and otorrhea, but AOM with perforation and other ear/skin causes remain alternatives until examination.",
    "Consider invasive OE when host factors, severe persistent deep pain or neurologic findings suggest it."
   ],
   [
    "OE often has canal edema/erythema/debris and pain with tragal or pinna movement; assess the TM and surrounding structures where possible.",
    "AOM needs supportive middle-ear findings; document mastoid, neurologic or spreading findings when indicated."
   ],
   [
    "Pseudomonas aeruginosa is a leading usual bacterial cause of OE; Staphylococcus aureus is also important.",
    "The history alone does not culture-confirm one organism or exclude middle-ear disease."
   ],
   [
    "You cannot reliably exclude AOM from a nonvisualized TM. Arrange safe canal assessment/clearing by a suitably equipped clinician and reassess or refer as needed.",
    "Do not infer an intact TM or normal middle ear from the inability to see it, and avoid potentially unsafe blind instrumentation/irrigation when TM status is uncertain."
   ]
  ],
  "sources": [
   "ahadSeminar",
   "mums2024"
  ],
  "note": "",
  "existingInNotes": true,
  "summary": "33, swim instructor with severe acute otalgia and yellow-white otorrhea, no fever; TM status initially unknown."
 },
 {
  "id": "eric",
  "module": 2,
  "name": "Eric",
  "stem": "Eric (he/they), an 18-year-old college student, presents to the walk-in clinic with a fever, headache, and sore throat for the past three days. He informs the NP that he has difficulty swallowing, feels fatigued, and has developed a dry cough. He maintains his fluid intake but eats only soup due to difficulty swallowing. He denies any nausea, vomiting, or diarrhea. He presents today because he feels worse than he would with a simple cold.\n\nExamination: \n•    Temperature: 38.2 °C (tympanic).\n•    Lymphatic system: bilateral anterior cervical and submental lymphadenopathy, soft, mobile, and tender.\n•    HEENT:\n•    Nose: erythematous nasal turbinate, no discharge.\n•    Throat: inflamed pharynx.\n•    Tonsils: greyish-white exudate.\n•    The remainder of the examination is unremarkable.",
  "questions": [
   "At this stage, list the differential diagnoses the NP should consider based on Eric’s presenting symptoms. Provide your rationale.",
   "What is the total score using the Sore Throat Score?",
   "How predictive of a GAS infection are this client’s signs and symptoms?",
   "What complications are you concerned about, and what is the risk of these if treatment is delayed?",
   "Based on the clinical findings, what diagnostic investigations, if any, should the NP order? Provide your rationale.",
   "If the NP had noted splenomegaly during the physical examination, would this have changed the diagnostic reasoning?"
  ],
  "answers": [
   [
    "Compare GAS pharyngitis, other viral pharyngitis and EBV mononucleosis; evaluate focal/airway complications if new warning signs appear.",
    "Fever/exudate/tender anterior nodes support GAS probability, while cough and overlap prevent a definitive clinical diagnosis."
   ],
   [
    "If using modified Centor/McIsaac: fever >38°C +1, tonsillar exudate +1, tender anterior cervical nodes +1, absence of cough +0 because cough is present; age 18 adds 0. Total = 3.",
    "Verify the actual scoring tool used in class rather than mixing different score definitions."
   ],
   [
    "These findings raise probability but do not prove GAS. Clinical scoring supports a testing decision, not organism confirmation.",
    "Cough provides competing viral context; neither exudate nor score alone gives certainty."
   ],
   [
    "Assess suppurative complications such as peritonsillar/deep-neck infection and nonsuppurative complications including acute rheumatic fever.",
    "In a stable patient, appropriate testing need not be bypassed: CPS notes treatment within 9 days of symptom onset can prevent ARF. Airway/systemic warning signs require immediate reassessment."
   ],
   [
    "Use appropriate GAS microbiological testing when indicated by the clinical/local pathway; consider EBV testing if the evolving pattern supports it.",
    "Choose follow-up for the actual test type and risk context; do not transfer a pediatric backup-culture rule automatically to every adult molecular/antigen pathway."
   ],
   [
    "Yes. Splenomegaly plus fatigue/exudative pharyngitis raises EBV mononucleosis in the ranking.",
    "It does not alone confirm EBV; reassess systemic findings, appropriate tests and activity/complication advice."
   ]
  ],
  "sources": [
   "ahadSeminar",
   "gasCPSAHAD",
   "ebvCDC"
  ],
  "note": "The original prompt does not name a scoring-tool version. The numerical MCQs explicitly use modified Centor/McIsaac; verify the version used by your instructor.",
  "existingInNotes": true,
  "summary": "18, fever 38.2°C, sore throat, fatigue, dry cough, tonsillar exudate and tender anterior cervical/submental nodes."
 },
 {
  "id": "martha",
  "module": 3,
  "name": "Martha",
  "stem": "Martha (she/her), 59 years old, presents with an itchy rash on her hands and arms that developed two days ago. She reports that the rash is also present on the front of her legs, with small blisters on both legs and hands. She has no allergies, no chronic conditions, and takes no medication.\n\nThe health history reveals: Martha spent the past week clearing brush at a friend's summer cottage. After noticing the rash, she washed herself and her clothes with soap and water. She observes that the rash appears only in exposed areas.",
  "questions": [
   "What other key health history questions should the NP ask Martha during the history?",
   "Which part of the history is most likely to guide you to the diagnosis?",
   "What is the most likely diagnosis? Identify the key features that informed your decision, and compare them with the findings you might expect for other potential differential diagnoses."
  ],
  "answers": [
   [
    "Ask about plant/outdoor, chemical, glove and skin-product exposures; onset relative to each exposure and distribution under clothing.",
    "Ask about itch versus pain, prior episodes, contacts with itch, new drugs, fever, mucosal/eye involvement and rapid spread."
   ],
   [
    "Brush clearing followed by an itchy vesicular eruption confined to exposed skin is the key exposure–distribution link.",
    "Washing after the eruption began does not negate an earlier exposure or an established delayed reaction."
   ],
   [
    "Allergic contact dermatitis from plant exposure is most likely; the exact plant is not proven by the vignette.",
    "Irritant dermatitis is often related to direct irritants/burning; scabies favors contact clustering/burrows/typical sites; an infection needs supporting warmth, pain, purulence or systemic findings."
   ]
  ],
  "sources": [
   "contactAAD"
  ],
  "note": "",
  "summary": "59, itchy exposed-site vesicles after clearing brush; no chronic disease or medicines."
 },
 {
  "id": "paul",
  "module": 3,
  "name": "Paul",
  "stem": "Paul (he/him), a 62-year-old farmer, presents with ankle pain and redness. He reports having slightly cut his ankle on his tractor two days ago, and the pain and redness have progressed over the past day.",
  "questions": [
   "What are your differential diagnoses at this point?",
   "What red-flag questions should you be asking?",
   "In the personal history, what additional information would be pertinent to collect?"
  ],
  "answers": [
   [
    "Cellulitis is plausible after a skin break; assess for a localized abscess or retained foreign material.",
    "Consider septic arthritis if pain is joint-centered with restricted motion, DVT when the swelling/risk pattern fits, and necrotizing infection when pain/progression/systemic features are disproportionate."
   ],
   [
    "Ask about fever/rigors, rapid spread, severe or disproportionate pain, bullae, numbness, weakness, confusion or faintness.",
    "Ask about ability to bear weight, marked pain with ankle motion, deep puncture/foreign material and ischemic symptoms; escalate concerning findings urgently."
   ],
   [
    "Clarify injury depth/contamination, cleaning, tetanus history, exposures and prior similar infections.",
    "Ask about diabetes, vascular disease, neuropathy, immune suppression, medicines/allergies, smoking and relevant thrombosis risks."
   ]
  ],
  "sources": [
   "cellulitisCDC",
   "necrotizingCDC"
  ],
  "note": "",
  "summary": "62, progressive ankle pain/redness after a tractor cut two days earlier; depth and systemic findings not yet supplied."
 },
 {
  "id": "reid",
  "module": 3,
  "name": "Reid",
  "stem": "Reid (he/him), a healthy 26-year-old Black man, presents with a \"rash\" on his neck that he noticed yesterday. He initially thought it was razor burn, which he had experienced before, but he came in today because his razor burn had never been \"crusty\" before. After looking up his symptoms online, he became worried that he might have something more serious.\n\nAfter a more thorough assessment, the NP learns that Reid's symptoms began yesterday after shaving and that they have occurred in the past, always triggered by shaving. He is self-conscious about the scarring developing on his neck. He feels this episode is different, however, because of marked redness and crusting around some of the lesions on his left lower neck.\n\nReid takes no medications. He tries to minimize shaving when his razor burn is particularly bothersome and has previously used benzoyl peroxide without relief. He has no allergies.\n\nA focused examination of Reid's neck reveals scarring within the beard area. There are numerous papules and pustules at various stages of healing. On the left lower neck, there is mild redness with numerous red, inflamed papules and open pustules accompanied by obvious yellow crusting.",
  "questions": [
   "What are some initial differential diagnoses?",
   "What are the key health history questions to help rule these initial differentials in or out?",
   "What is the most likely diagnosis, and why?"
  ],
  "answers": [
   [
    "Consider pseudofolliculitis barbae, infectious folliculitis barbae and impetiginization; contact/irritant dermatitis is another contextual alternative.",
    "Tinea barbae becomes more relevant with animal exposure, scale, broken hairs or deeper inflammatory lesions."
   ],
   [
    "Ask about shaving timing/technique, recurrent ingrown hairs, products/razor hygiene, picking and prior scars or treatments.",
    "Clarify itch/pain, spreading warmth/erythema, discharge, fever, animal/contact exposure and immune/metabolic risk."
   ],
   [
    "Recurrent shaving-triggered follicular papules with scarring favor pseudofolliculitis barbae.",
    "The new focal inflammation, open pustules and yellow crusting warrant assessment for superimposed bacterial folliculitis/impetiginization; they do not identify an organism or prove that every lesion is infected."
   ]
  ],
  "sources": [
   "pfbBAD",
   "folliculitisAAD",
   "mums2024"
  ],
  "note": "",
  "summary": "26, recurrent shaving-triggered beard/neck papules and scarring; this episode has focal inflamed pustules with yellow crusting."
 },
 {
  "id": "ted",
  "module": 4,
  "name": "Ted",
  "stem": "Ted (he/him), a 58-year-old truck driver, presents with complaints that his legs \"feel heavy and ache.\" He also has pain in his right foot that makes walking difficult, and a small ulcer on the sole of that foot. Ted is single and a known type 2 diabetic, with an HbA1c of 0.081 (8.1%, indicating poor control), a BMI of 35, and a 25-year history of smoking one pack of cigarettes per day.",
  "questions": [
   "What key health history questions should the NP ask Ted during the history?",
   "What differential diagnoses can you make based on Ted’s symptoms? What are the key elements (history and physical examination) that distinguish each?",
   "If Ted reports increased pain at night and calf cramping while walking, what would your differential diagnosis be?",
   "What criteria would indicate that his wound is infected?"
  ],
  "answers": [
   [
    "Characterize exertional distance, rest/night pain, relief with rest/elevation/dependency, onset, swelling and any sudden deterioration.",
    "Ask about ulcer duration/depth, trauma/footwear/offloading, sensory loss, drainage/odor, fever, prior ulcers/amputations, vascular history, smoking and diabetes care."
   ],
   [
    "PAD: exertional calf symptoms, cool skin/weak pulses and distal ischemic changes. Venous disease: dependent heaviness/edema, varicosities and gaiter pigmentation.",
    "Neuropathic pressure ulcer: plantar pressure site/callus and impaired protective sensation; infection may coexist. Consider DVT with an acute asymmetric swelling/risk pattern. Examine pulses/perfusion, sensation and the wound rather than inferring one cause from the job title."
   ],
   [
    "PAD with claudication is a leading concern; nocturnal/rest foot pain and tissue loss raise concern for more severe ischemia needing prompt vascular evaluation.",
    "Mixed neuropathic and arterial disease can coexist. Diabetes can make ABI noncompressible, so toe-pressure/TBI assessment may be needed."
   ],
   [
    "Use clinical inflammation: at least two compatible local findings such as swelling/induration, erythema, tenderness/pain, warmth or purulent discharge, after excluding other inflammatory causes.",
    "A positive culture or odor alone does not establish infection; neuropathy/ischemia can mute findings. Assess depth, systemic illness and perfusion to determine urgency."
   ]
  ],
  "sources": [
   "pad2024",
   "dfi2023"
  ],
  "note": "",
  "summary": "58, diabetes (HbA1c 8.1%), BMI 35, smoking history, heavy aching legs, painful walking and a plantar ulcer."
 },
 {
  "id": "tremblay",
  "module": 4,
  "name": "Mrs. Tremblay",
  "stem": "Mrs. Tremblay (she/her), 42 years old, has a pale complexion and spends much of her annual vacation in the sun. She consults the NP because she has noticed growth and a change in colour of a mole on her leg. The NP removes the adhesive bandage covering the lesion on her lower leg. The examination reveals an 8 mm, dark-pink lesion with central erosion; the borders are raised and irregular.",
  "questions": [
   "As the NP examines the lesion, how would they explain to Mrs. Tremblay the changes that may indicate a malignant melanoma?",
   "What evidence exists regarding the accuracy of skin examination in screening for melanoma?",
   "Differentiate among the types of pathological conditions the lesion may represent.",
   "If a pathological condition is present, what diagnostic investigations would be required?"
  ],
  "answers": [
   [
    "Explain asymmetry, irregular borders, varied color, diameter and especially evolution/change or an “ugly duckling” lesion. Melanoma can be pink and can be smaller than 6 mm.",
    "Her reported growth/color change and irregular eroded lesion need diagnostic assessment; appearance alone does not establish melanoma."
   ],
   [
    "USPSTF 2023 cites foundational clinician visual-examination sensitivity around 40–70% and specificity 86–98%; these are not universal accuracy values for every examiner or setting.",
    "Evidence is insufficient to determine the benefit/harm balance of routine screening in asymptomatic people. A changing suspicious lesion is a diagnostic problem and is outside that screening recommendation."
   ],
   [
    "Include melanoma (including less-pigmented forms), basal cell carcinoma and squamous cell carcinoma; benign mimics include irritated nevi or seborrheic keratosis.",
    "Raised/rolled edges with erosion may suggest BCC; keratinizing/indurated lesions may suggest SCC; evolution/asymmetry/color variation raise melanoma concern. Clinical overlap requires tissue diagnosis."
   ],
   [
    "Arrange timely lesion-directed assessment and an appropriate biopsy for histopathology, preferably a complete/narrow excisional sample of adequate depth when melanoma is suspected and feasible, or suitable specialist referral.",
    "Dermoscopy can assist assessment; destructive treatment or routine imaging is not a substitute for diagnosis. Further staging tests depend on the confirmed pathology and risk."
   ]
  ],
  "sources": [
   "melanomaAAD",
   "screenUSPSTF",
   "melanomaBiopsyNCI"
  ],
  "note": "",
  "summary": "42, substantial sun exposure and a changing 8-mm dark-pink leg lesion with raised irregular borders and central erosion."
 },
 {
  "id": "iris",
  "module": 4,
  "name": "Iris",
  "stem": "Iris (she/her), 68 years old, was admitted to the family medicine unit approximately 12 hours ago with pyelonephritis. During rounds, Iris's primary RPN informs you that her Braden Risk Assessment score was 12 (Sensory Perception 3, Moisture 2, Activity 1, Mobility 2, Nutrition 3, Friction and Shear 1). Her skin is quite moist owing to intermittent fevers. Iris reports pain at her coccyx and is having difficulty repositioning because of weakness.\n\nIris is of Indo-Caribbean origin and has a darker skin tone, which can make erythema assessment more challenging, as darker pigmentation may mask redness.\n\nDespite a diligent prevention strategy, Iris's nurse calls you to assess her coccyx. Over the bony prominence of the sacrum, you observe a shallow, open ulcer with a reddish-pink wound bed, with no slough or bruising present.",
  "questions": [
   "What is the significance of Iris’s Braden Risk Assessment score?",
   "What are some key risk factors for the development of pressure injuries?",
   "What assessments could the NP perform that might indicate a pressure-related injury when erythema is harder to see in darker skin?",
   "What is the most likely diagnosis for the shallow sacral ulcer described?"
  ],
  "answers": [
   [
    "The six supplied scores sum to 12, commonly a high-risk band (10–12); lower totals indicate greater risk. Use the institution’s scale/protocol and clinical assessment.",
    "This is a risk score, not an injury stage. Low activity/mobility and friction/shear scores identify specific prevention needs."
   ],
   [
    "Limited movement/prolonged pressure, shear/friction, moisture and reduced sensation/perfusion increase risk; nutritional and illness-related factors also matter.",
    "For Iris, weakness/bed confinement, moist skin, pain over a bony prominence and difficulty repositioning are concrete concerns."
   ],
   [
    "Ask about localized pain and compare skin with adjacent/contralateral areas for persistent color change, warmth/coolness, firmness/bogginess, moisture and integrity.",
    "Use inspection plus palpation; lack of obvious redness does not establish normal tissue. Act on concerning findings and reassess."
   ],
   [
    "Most consistent with a Stage 2 pressure injury: shallow partial-thickness loss over a pressure site with a viable pink/red bed, without slough or deeper exposed tissue.",
    "Distinguish pressure/shear injury from moisture-associated dermatitis or a skin tear. Purple/maroon tissue or a blood-filled blister would raise a different deep-tissue concern."
   ]
  ],
  "sources": [
   "pressureAHRQ",
   "pressureNICE",
   "pressureNPIAP",
   "bradenStudy"
  ],
  "note": "",
  "summary": "68, hospitalized/weak with moist skin and coccygeal pain; Braden 12. The later sacral ulcer is shallow, pink-red, without slough or bruising."
 },
 {
  "id": "betty",
  "module": 5,
  "name": "Betty",
  "stem": "Betty (she/her), a 75-year-old woman, has been in good health. Over the past few weeks, however, she has noticed that she cannot walk more than one block without experiencing some shortness of breath. She also reports that her shoes have felt somewhat tight by the afternoon.",
  "questions": [
   "At this stage, what differential diagnoses can you make based on Betty’s symptoms? Provide your rationale.",
   "Based on your list of differential diagnoses, what questions should the NP ask Betty during the history to rule each diagnosis in or out?",
   "Identify the essential components of the physical examination. Provide your rationale.",
   "What diagnostic test is considered the “gold standard” for assessing cardiac function?"
  ],
  "answers": [
   [
    "HF is important with exertional dyspnea and possible dependent edema, but the initial vignette does not confirm it.",
    "Compare ischemia/valvular disease, pulmonary disease, anemia and renal/venous causes of edema; consider PE urgently when the acute course/risk features fit."
   ],
   [
    "Ask about onset/progression, orthopnea/PND, weight change, edema, chest/jaw discomfort, palpitations and syncope.",
    "Ask about cough/wheeze/fever, smoking, bleeding/anemia symptoms, renal/thyroid history, medicines and thromboembolic risks; establish current distress or hypoxia."
   ],
   [
    "Assess vital signs, oxygenation and work of breathing; examine JVP, heart rate/rhythm/murmurs, lungs and peripheral edema/perfusion.",
    "Look for pallor and volume/venous findings; choose additional examination based on history and competing diagnoses."
   ],
   [
    "Likely intended answer: transthoracic echocardiography (including Doppler) to assess cardiac structure and systolic/diastolic/valvular function.",
    "In practice it is the initial imaging modality of choice for suspected HF; ECG, natriuretic peptides and other tests contribute. “Gold standard for all cardiac function” is broader than this case supports."
   ]
  ],
  "sources": [
   "hfDiagnosis"
  ],
  "note": "",
  "summary": "75, weeks of dyspnea after one block and shoes tight by afternoon; no confirmatory examination/testing is supplied."
 },
 {
  "id": "robert",
  "module": 5,
  "name": "Robert",
  "stem": "Robert (he/him), a 66-year-old man, presents to the NP for his periodic health examination. The history reveals that he has smoked 10 cigarettes per day for the past 32 years, eats fast food two to three times per week, drinks eight beers every Friday evening, and does not exercise regularly. His family history is positive for coronary heart disease in his father (at age 48) and his mother (at age 66). His blood pressure is 150/100 bilaterally, confirmed on a repeat measurement. The remainder of the examination is unremarkable, including the cardiovascular and fundoscopic examinations.",
  "questions": [
   "According to the Canadian hypertension guidelines, what criteria support a diagnosis of hypertension in Robert’s case?",
   "What are the key components the NP should examine?",
   "What preliminary investigations are recommended for a person newly diagnosed with hypertension?"
  ],
  "answers": [
   [
    "Repeated 150/100 exceeds the 2025 Hypertension Canada standardized threshold of ≥130/80 and older commonly taught clinic thresholds. Confirm technique and arrange out-of-office assessment when appropriate to establish sustained versus white-coat elevation.",
    "One repeated visit does not supply a complete confirmation history. Normal fundoscopy does not exclude hypertension; no acute target-organ injury is described."
   ],
   [
    "Recheck BP appropriately, assess pulses/vascular findings, heart/lungs, edema and relevant neurologic/fundoscopic features; consider abdominal/renal vascular clues when indicated.",
    "Assess adiposity, secondary-cause clues, medications/substances, sleep apnea symptoms and global CV risk. His father’s CHD at 48 is premature family history."
   ],
   [
    "Core baseline assessment: urinalysis; sodium/potassium and creatinine/eGFR; glucose or HbA1c; lipid profile; standard 12-lead ECG.",
    "Add ACR or other investigations according to diabetes/CKD suspicion and the clinical context; routine broad secondary-cause imaging is not the initial test set for everyone."
   ]
  ],
  "sources": [
   "htn2025",
   "htnAssessment"
  ],
  "note": "",
  "summary": "66, repeat BP 150/100 bilaterally, smoking/alcohol/diet risks and paternal CHD at 48; no acute injury findings supplied."
 },
 {
  "id": "lipids",
  "module": 5,
  "name": "45-year-old lipid-profile case",
  "stem": "A healthy 45-year-old man has an elevated total cholesterol of 6.1 mmol/L. He is a non-smoker. His medical history is unremarkable, with a blood pressure of 135/86. He reports that members of his family live into their nineties, and he denies following any particular diet or exercise program. His fasting lipid profile reveals total cholesterol 6.1 mmol/L; triglycerides 3.7 mmol/L; HDL 0.6 mmol/L; LDL 4.65 mmol/L; and a TC/HDL ratio of 10.1.",
  "questions": [
   "How should the NP interpret the HDL, LDL-C, triglyceride, and TC/HDL results?",
   "What is the clinical significance of these results?",
   "What questions should the NP ask this client about his food choices to better understand his triglyceride and LDL levels?"
  ],
  "answers": [
   [
    "HDL-C is low; reported LDL-C and triglycerides are elevated, with an unfavorable TC/HDL ratio. Non-HDL-C = 6.1 − 0.6 = 5.5 mmol/L.",
    "With TG >1.5 mmol/L, CCS favors non-HDL-C or ApoB over LDL-C for screening assessment; confirm the laboratory method and reported values."
   ],
   [
    "This is an atherogenic risk pattern requiring global CV-risk/secondary-cause assessment; being a nonsmoker and family longevity do not cancel it.",
    "Review diabetes, thyroid/renal/liver disease, medicines, alcohol and other risk factors. Do not infer a statin decision or familial diagnosis from total cholesterol alone."
   ],
   [
    "Ask about saturated/trans fat sources, processed meats/full-fat dairy, cooking fats, portions and fiber/whole-food intake.",
    "Ask about alcohol quantity/binge pattern, sugar-sweetened drinks, refined carbohydrates and excess calories; also assess activity and weight changes."
   ]
  ],
  "sources": [
   "ccsLipids"
  ],
  "note": "All supplied values are preserved. If LDL was Friedewald-calculated, these values would imply approximately 3.82 mmol/L, not 4.65; a directly measured LDL may differ. Confirm the report/method rather than silently correcting it. The reported TC/HDL ratio is approximately 10.2 from the displayed rounded inputs.",
  "summary": "45, nonsmoker; BP 135/86; TC 6.1, TG 3.7, HDL 0.6, reported LDL 4.65 mmol/L; reported TC/HDL 10.1."
 }
];
const AHAD_SUPPLIED_ROWS=[
 {
  "caseId": "martha",
  "id": "exposure",
  "prompt": "Martha’s pruritic vesicles appeared on exposed hands/arms and anterior legs after clearing brush. Which history–diagnosis link is strongest?",
  "options": [
   "Brush clearing with plant-associated allergic contact dermatitis",
   "Post-onset soap washing with primary irritant dermatitis",
   "Outdoor activity with scabies as the leading diagnosis",
   "Sun exposure with drug-related phototoxicity"
  ],
  "reasons": [
   "The exposure/timing and exposed-site itchy vesicles favor plant contact allergy.",
   "Washing occurred after onset and does not explain the initial eruption.",
   "The supplied pattern lacks burrows or contact clustering.",
   "No relevant medication exposure is supplied."
  ]
 },
 {
  "caseId": "martha",
  "id": "differentials",
  "prompt": "Which ranked differential set best fits Martha after the brush-clearing history?",
  "options": [
   "Allergic contact dermatitis; irritant contact dermatitis; arthropod-related eruption",
   "Scabies; allergic contact dermatitis; irritant dermatitis",
   "Bacterial cellulitis; scabies; allergic contact dermatitis",
   "Herpes zoster; cellulitis; arthropod-related eruption"
  ],
  "reasons": [
   "Exposure-linked itch/vesicles favor contact allergy; irritant and bite-related eruptions remain contextual alternatives.",
   "Scabies is less supported without contacts, burrows or typical distribution.",
   "Diffuse exposed-site itchy vesicles are less typical of a focal painful cellulitis process.",
   "Zoster would be more plausible with a unilateral dermatomal painful pattern."
  ]
 },
 {
  "caseId": "martha",
  "id": "history",
  "prompt": "Before knowing Martha’s outdoor history, which question set best separates likely causes of her acute vesicular rash?",
  "options": [
   "Exposure timing/distribution, itch versus pain, contacts and systemic/mucosal symptoms",
   "Vesicle size, skin dryness and a history of seasonal sneezing",
   "Prior eczema, usual moisturizer and childhood asthma history",
   "Diet changes, exercise routine and family psoriasis history"
  ],
  "reasons": [
   "This set best tests acute mechanisms and important warning signs.",
   "Relevant details, but this set misses the key acute exposure/timing and severity screen.",
   "Atopic history can inform the differential but is not a complete acute-rash history.",
   "These may inform context but less directly address this acute presentation."
  ]
 },
 {
  "caseId": "martha",
  "id": "washing",
  "prompt": "Martha washed her skin/clothes after noticing the rash. How should that affect reasoning?",
  "options": [
   "It does not exclude a delayed reaction to prior plant exposure",
   "It rules out allergic contact dermatitis if vesicles persist",
   "It confirms a bacterial cause if soap did not stop the eruption",
   "It establishes the exact plant species responsible"
  ],
  "reasons": [
   "Removing an exposure does not instantly reverse an established inflammatory response.",
   "Persistence does not exclude the proposed delayed reaction.",
   "Response to washing does not identify bacteria.",
   "History alone here does not identify the exact plant."
  ]
 },
 {
  "caseId": "paul",
  "id": "differential",
  "prompt": "Paul has progressive ankle pain/redness after a tractor cut. Which initial interpretation best fits the information actually supplied?",
  "options": [
   "Cellulitis, with assessment for abscess/retained material or deeper involvement",
   "Gout as the leading diagnosis based on the word ankle, with cellulitis secondary",
   "DVT as the leading diagnosis based on redness alone",
   "Allergic contact dermatitis as the leading diagnosis based on the cut alone"
  ],
  "reasons": [
   "The skin breach followed by progressive inflammation makes infection a leading concern while depth remains uncertain.",
   "A joint-focused examination/history would be needed to elevate gout above this wound-related pattern.",
   "Redness alone is not sufficient to rank DVT first.",
   "Exposure-linked itch/eczema rather than the supplied injury/pain course would support contact dermatitis more."
  ]
 },
 {
  "caseId": "paul",
  "id": "danger",
  "prompt": "Added variation: Paul develops rapidly escalating pain out of proportion, new bullae and confusion. What is the best next step?",
  "options": [
   "Emergency assessment for possible necrotizing/deep infection",
   "Outpatient swab first, with disposition after culture results",
   "An oral antibiotic trial with routine next-week follow-up",
   "Routine tetanus review as the only immediate action"
  ],
  "reasons": [
   "The new severity pattern requires immediate escalation, not a delayed trial.",
   "A swab must not delay emergency evaluation.",
   "This delays assessment of a potentially life-threatening infection.",
   "Tetanus review matters but does not address the present emergency."
  ]
 },
 {
  "caseId": "paul",
  "id": "joint",
  "prompt": "Added variation: Paul cannot bear weight, and both active and passive ankle movement produce marked joint-centered pain. Which concern most changes assessment?",
  "options": [
   "Septic arthritis/deep joint process",
   "Uncomplicated superficial cellulitis",
   "Chronic venous dermatitis",
   "Referred pain from stable osteoarthritis"
  ],
  "reasons": [
   "Inability to bear weight and marked passive-motion pain require urgent joint/deep-process assessment.",
   "Superficial inflammation alone does not adequately explain the added joint-centered pattern.",
   "The acute injury/joint pain pattern is less consistent with chronic venous dermatitis.",
   "A stable degenerative condition does not adequately account for these new severe inflammatory features."
  ]
 },
 {
  "caseId": "paul",
  "id": "personal",
  "prompt": "Which missing history is most relevant to Paul’s injury-related infection assessment?",
  "options": [
   "Wound depth/contamination, tetanus history, diabetes/perfusion risks and immune suppression",
   "Previous ankle sprains, usual footwear and sports participation",
   "Family arthritis history, lifetime calcium intake and sleep position",
   "Pain score, dominant foot and preferred analgesic formulation"
  ],
  "reasons": [
   "This set most directly addresses injury/host factors that alter wound assessment.",
   "Useful context but incomplete for infection susceptibility and prevention.",
   "This does not adequately address the current wound/host risks.",
   "Symptom management information does not replace the injury and host-risk history."
  ]
 },
 {
  "caseId": "reid",
  "id": "mechanism",
  "prompt": "Reid’s recurrent shaving-triggered follicular papules and neck scarring most strongly support which underlying mechanism?",
  "options": [
   "Pseudofolliculitis barbae from hair re-entry",
   "Primary staphylococcal folliculitis",
   "Irritant/contact dermatitis from a shaving product",
   "Tinea barbae with follicular involvement"
  ],
  "reasons": [
   "Repeated shaving-linked follicular lesions and scars favor PFB as the baseline mechanism.",
   "A secondary infection may coexist but does not best explain the whole recurring mechanism.",
   "Exposure dermatitis is relevant, but follicular papules/scarring and repeated shave linkage favor PFB.",
   "Scale, broken hairs, animal exposure or deeper inflammatory features would add support for tinea."
  ]
 },
 {
  "caseId": "reid",
  "id": "secondary",
  "prompt": "Which interpretation best combines Reid’s recurrent pattern with the new yellow-crusted open pustules?",
  "options": [
   "PFB with possible superimposed bacterial folliculitis/impetiginization",
   "Primary bacterial folliculitis accounting for the baseline and new components",
   "PFB with a newly established allergic product reaction",
   "Tinea barbae accounting for the recurrent shaving-related and new crusted lesions"
  ],
  "reasons": [
   "This integrates the baseline mechanism with the newly changed focal findings, without claiming a cultured organism.",
   "Bacterial infection is possible, but the longstanding recurrent shave/scar pattern still supports PFB.",
   "No new product/exposure history is supplied to establish allergy.",
   "The supplied history/exam does not specifically support the fungal features needed to rank tinea first."
  ]
 },
 {
  "caseId": "reid",
  "id": "questions",
  "prompt": "Which history/examination set most directly separates PFB, infectious folliculitis and tinea barbae in Reid?",
  "options": [
   "PFB: shaving/ingrown hairs; bacterial: purulence/spread; tinea: animal exposure, scale/broken hairs",
   "PFB: animal exposure/broken hairs; bacterial: itch after new lotion; tinea: recurrent hair re-entry",
   "PFB: diffuse wheals; bacterial: dermatomal pain; tinea: comedones",
   "PFB: culture result; bacterial: annular central clearing; tinea: shave-triggered scars"
  ],
  "reasons": [
   "Each clue cluster is matched to the mechanism it most directly supports.",
   "This misassigns the fungal and hair-re-entry clues and overweights allergy for bacterial infection.",
   "These clusters fit other processes rather than the named three-way differential.",
   "The clues are again mapped to the wrong primary mechanisms."
  ]
 },
 {
  "caseId": "reid",
  "id": "benzoyl",
  "prompt": "Reid reports no benefit from benzoyl peroxide. Which conclusion is best supported?",
  "options": [
   "Insufficient evidence to separate PFB from an added folliculitis component on treatment response alone",
   "Bacterial folliculitis becomes established because benzoyl peroxide did not help",
   "Tinea barbae becomes established because an antibacterial product failed",
   "PFB becomes excluded because inflammatory papules persisted"
  ],
  "reasons": [
   "Review mechanism, use and the changed findings; one response does not establish the diagnosis.",
   "Treatment response alone does not establish bacterial infection.",
   "The fungal diagnosis needs its own supporting findings/testing.",
   "Persistence does not negate the recurrent shaving mechanism."
  ]
 },
 {
  "caseId": "ted",
  "id": "mixed",
  "prompt": "Ted has a plantar ulcer, diabetes, smoking history, leg heaviness and foot pain. Which initial approach best fits?",
  "options": [
   "Possible mixed neuropathic pressure injury and arterial/venous disease, with infection assessed separately",
   "Venous ulceration as the leading explanation based on the plantar pressure site",
   "An infected ulcer as the leading conclusion based on HbA1c and diabetes alone",
   "An arterial ulcer as a complete explanation based on smoking history alone"
  ],
  "reasons": [
   "Location, sensation, perfusion and inflammatory findings need integration; mixed mechanisms are common.",
   "A plantar pressure site more directly raises neuropathic considerations than a typical gaiter venous ulcer.",
   "Risk context does not establish clinical infection.",
   "Smoking is a risk factor, not a complete mechanism assessment."
  ]
 },
 {
  "caseId": "ted",
  "id": "night",
  "prompt": "Ted adds night/rest foot pain and calf cramping with walking. Which interpretation is most important?",
  "options": [
   "Peripheral arterial disease with claudication and concern for rest ischemia",
   "Chronic venous insufficiency with dependent aching",
   "Lumbar stenosis with neurogenic claudication",
   "Diabetic sensory neuropathy without an arterial contribution"
  ],
  "reasons": [
   "Exertional calf cramping plus night/rest foot pain and tissue loss prioritize perfusion assessment.",
   "Heaviness may be venous, but the added ischemic-pattern symptoms require arterial evaluation.",
   "Posture/flexion-related symptoms would add support for neurogenic claudication.",
   "Neuropathy can coexist but does not adequately explain away the arterial warning pattern."
  ]
 },
 {
  "caseId": "ted",
  "id": "infection",
  "prompt": "Which finding set best supports a clinically infected ulcer in Ted, after excluding other causes of inflammation?",
  "options": [
   "New local warmth, swelling and purulent discharge",
   "A positive superficial swab with no inflammatory findings",
   "Chronic stable callus and sensory loss alone",
   "An elevated HbA1c and ulcer location alone"
  ],
  "reasons": [
   "Multiple local inflammatory findings/purulence support infection; grade severity and assess perfusion.",
   "Colonization is common; culture alone does not define infection.",
   "These support a neuropathic mechanism but not infection by themselves.",
   "These are context/risk, not clinical infection criteria."
  ]
 },
 {
  "caseId": "ted",
  "id": "abi",
  "prompt": "Added variation: Ted has weak pulses and ABI 1.50. Which next interpretation fits?",
  "options": [
   "The ABI may be noncompressible; obtain toe-pressure/TBI or appropriate vascular assessment",
   "The ABI excludes PAD because it exceeds 1.0",
   "The ABI proves venous insufficiency",
   "The ABI directly stages his ulcer infection"
  ],
  "reasons": [
   "Diabetes-associated noncompressibility can make a high ABI misleading.",
   "A value above about 1.4 does not establish normal perfusion.",
   "ABI is not a venous diagnostic measure.",
   "ABI assesses arterial physiology, not infection stage."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "differentials",
  "prompt": "Mrs. Tremblay’s changing 8-mm pink eroded lesion has raised irregular borders. Which group should remain in the pathological differential?",
  "options": [
   "Melanoma, BCC and SCC remain relevant; morphology and evolution inform but do not establish histology",
   "BCC is most plausible and melanoma can be removed from the differential because the lesion is pink",
   "Melanoma is most plausible and BCC can be removed because the border is raised",
   "An irritated nevus is most plausible and malignancy can be removed because diameter is under 1 cm"
  ],
  "reasons": [
   "The mixed features require a pathological differential and tissue diagnosis.",
   "Less-pigmented melanomas exist.",
   "Raised/rolled edges can occur in BCC; this feature does not exclude it.",
   "A small evolving lesion can still be malignant."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "screen",
  "prompt": "How should the USPSTF insufficient-evidence statement about routine skin-cancer screening affect this case?",
  "options": [
   "It does not justify deferring diagnostic evaluation of her changing suspicious lesion",
   "It establishes that a changing lesion should not be examined",
   "It proves visual examination is useless for every diagnostic purpose",
   "It confirms a benign diagnosis without biopsy"
  ],
  "reasons": [
   "Asymptomatic population screening and lesion-directed diagnosis are different questions.",
   "The recommendation is not advice to ignore symptoms or suspicious lesions.",
   "Insufficient screening-outcome evidence does not make all lesion assessment useless.",
   "The statement does not establish the diagnosis of this lesion."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "accuracy",
  "prompt": "Which visual-examination accuracy range is reported as foundational evidence in USPSTF 2023, rather than a universal value for every clinician?",
  "options": [
   "Sensitivity 40–70%; specificity 86–98%",
   "Sensitivity 86–98%; specificity 40–70%",
   "Sensitivity 95–100%; specificity 95–100%",
   "Sensitivity 10–20%; specificity 40–50%"
  ],
  "reasons": [
   "These are the cited foundational ranges, with important setting/examiner limitations.",
   "This reverses the cited ranges.",
   "This overstates the evidence as near-perfect accuracy.",
   "These are not the reported ranges."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "biopsy",
  "prompt": "Which investigation most directly establishes the diagnosis of Mrs. Tremblay’s suspicious lesion?",
  "options": [
   "Appropriate biopsy with histopathology, with technique/depth suited to suspected melanoma",
   "A routine serum lipid panel",
   "Destructive cryotherapy followed by observation without tissue",
   "A normal visual examination of other skin as definitive exclusion"
  ],
  "reasons": [
   "Tissue diagnosis guides further management; arrange appropriate biopsy/referral.",
   "This does not diagnose the lesion.",
   "Destruction can remove diagnostic tissue without establishing pathology.",
   "Other normal skin does not determine the diagnosis of this evolving lesion."
  ]
 },
 {
  "caseId": "iris",
  "id": "braden",
  "prompt": "Iris’s Braden components are 3, 2, 1, 2, 3 and 1. Which interpretation fits?",
  "options": [
   "Total 12: commonly high risk; the score does not stage an injury",
   "Total 12: moderate risk; equivalent to Stage 2",
   "Total 13: commonly low risk; no prevention needed",
   "Total 10: establishes a deep tissue pressure injury"
  ],
  "reasons": [
   "The sum is 12, commonly high risk; use clinical judgement and local protocol.",
   "This mislabels the common band and confuses risk with stage.",
   "The sum is incorrect and the clinical risk factors still matter.",
   "The sum is incorrect and no risk score establishes an injury stage."
  ]
 },
 {
  "caseId": "iris",
  "id": "darker-skin",
  "prompt": "Which assessment best addresses a pressure injury that may be less visibly red in Iris’s darker skin?",
  "options": [
   "Pain, temperature and tissue-consistency comparison plus color/integrity assessment",
   "Standardized photography and visible redness without tissue palpation",
   "Moisture scoring and the Braden total without a focused site examination",
   "Blanching assessment of visibly red areas without comparing temperature or symptoms"
  ],
  "reasons": [
   "Symptoms plus inspection and palpation help identify changes less visible in darker skin.",
   "Photographs/redness alone can miss tissue changes.",
   "Risk scoring is not a substitute for examining the painful site.",
   "A red-area-only approach misses the broader assessment needed in darker skin."
  ]
 },
 {
  "caseId": "iris",
  "id": "stage",
  "prompt": "Iris develops a shallow sacral ulcer with a viable pink-red bed, no slough, no bruising and no exposed deeper tissue. Most likely stage?",
  "options": [
   "Stage 2 pressure injury",
   "Stage 1 pressure injury",
   "Stage 3 pressure injury",
   "Unstageable pressure injury"
  ],
  "reasons": [
   "This is the supplied partial-thickness/open-dermis pattern at a pressure site.",
   "Stage 1 has intact skin, not an open ulcer.",
   "Stage 3 involves full-thickness loss, often visible adipose/granulation rather than this description.",
   "Unstageable loss is obscured by slough/eschar, which are absent."
  ]
 },
 {
  "caseId": "iris",
  "id": "priorities",
  "prompt": "Which Braden subscale pair contains Iris’s LOWEST scores and points directly to prevention needs?",
  "options": [
   "Activity and friction/shear",
   "Nutrition and sensory perception",
   "Moisture and nutrition",
   "Mobility and sensory perception"
  ],
  "reasons": [
   "Both are scored 1; address pressure exposure/movement and shear while also managing other risks.",
   "Both are scored 3, not the lowest.",
   "Moisture is 2 and nutrition 3.",
   "Mobility is 2 and sensory perception 3."
  ]
 },
 {
  "caseId": "betty",
  "id": "differentials",
  "prompt": "Betty has weeks of exertional dyspnea and possible ankle edema. Which initial differential set is most defensible?",
  "options": [
   "HF/valvular or ischemic disease, pulmonary disease and anemia/renal causes",
   "Venous insufficiency, lymphedema and localized ankle arthritis as a complete explanation",
   "Allergic rhinitis, uncomplicated pharyngitis and contact dermatitis as the leading set",
   "Isolated venous edema with unrelated breathlessness assumed to be deconditioning"
  ],
  "reasons": [
   "This set addresses both exertional dyspnea and possible edema without prematurely settling the cause.",
   "This set explains swelling better than the dyspnea and misses major systemic alternatives.",
   "This set does not adequately address the main symptom pair.",
   "Assuming deconditioning without evaluating systemic causes is premature."
  ]
 },
 {
  "caseId": "betty",
  "id": "history",
  "prompt": "Which added history most directly strengthens a congestive HF hypothesis for Betty?",
  "options": [
   "Orthopnea, waking breathless at night and recent weight gain",
   "Exertional wheeze with long-standing obstructive lung disease alone",
   "Black stools with fatigue and pallor",
   "Sudden pleuritic pain after immobilization"
  ],
  "reasons": [
   "This cluster supports congestion/HF in context.",
   "This pushes an obstructive pulmonary alternative higher.",
   "This raises anemia/bleeding as an alternative contributor.",
   "This raises concern for thromboembolism rather than specifically supporting chronic congestion."
  ]
 },
 {
  "caseId": "betty",
  "id": "exam",
  "prompt": "Added examination patterns: which would most directly strengthen congestive HF as the explanation for Betty’s dyspnea and tight shoes?",
  "options": [
   "Raised JVP, bilateral basal crackles and dependent edema",
   "Pallor with a normal JVP and no crackles",
   "Unilateral calf swelling with pleuritic symptoms",
   "Hyperinflation, prolonged expiration and wheeze without JVP elevation"
  ],
  "reasons": [
   "The pulmonary/systemic congestion cluster most directly supports HF in context.",
   "This instead raises anemia as a contributor.",
   "This raises a thromboembolic differential.",
   "This more strongly supports obstructive pulmonary disease."
  ]
 },
 {
  "caseId": "betty",
  "id": "echo",
  "prompt": "For Betty’s case question about assessing cardiac function, which test is the expected first-line structural/function imaging answer?",
  "options": [
   "Transthoracic echocardiography with Doppler",
   "Resting ECG alone",
   "Chest radiograph alone",
   "BNP or NT-proBNP alone"
  ],
  "reasons": [
   "Echo evaluates ventricular/valvular structure and function; other tests contribute but are not substitutes for that imaging task.",
   "ECG evaluates electrical findings, not complete cardiac structure/function.",
   "Radiography assesses congestion/other thoracic features, not the same functional detail.",
   "Natriuretic peptides support diagnosis but do not image structural/valvular function."
  ]
 },
 {
  "caseId": "robert",
  "id": "threshold",
  "prompt": "Robert has repeat clinic BP 150/100 in both arms, with no acute organ-injury findings. Which statement fits the named 2025 Canadian guidance?",
  "options": [
   "Above the ≥130/80 standardized threshold; confirm technique and sustained elevation with appropriate follow-up/out-of-office assessment",
   "Below the diagnostic threshold because hypertension requires symptoms",
   "Hypertensive emergency established by this number alone",
   "Normal fundoscopy rules out hypertension"
  ],
  "reasons": [
   "The values are elevated; confirmation and risk/organ assessment remain necessary.",
   "Hypertension can be asymptomatic.",
   "An emergency requires suspected acute target-organ injury, not the number alone.",
   "A normal fundoscopic examination does not exclude hypertension."
  ]
 },
 {
  "caseId": "robert",
  "id": "investigations",
  "prompt": "Which set best matches core preliminary investigations for Robert’s hypertension assessment?",
  "options": [
   "Urinalysis; electrolytes/creatinine-eGFR; glucose or HbA1c; lipids; 12-lead ECG",
   "Routine coronary angiography, CT brain and renal angiography for every new case",
   "Troponin alone, with no renal/metabolic assessment",
   "Echocardiography alone, with no laboratory tests"
  ],
  "reasons": [
   "These core tests assess renal/metabolic risk and cardiac baseline; add context-specific tests when indicated.",
   "Advanced tests depend on clinical indications, not the BP label alone.",
   "A single acute-injury marker is not the routine baseline set.",
   "Echo may be indicated in selected patients but does not replace the core assessment."
  ]
 },
 {
  "caseId": "robert",
  "id": "family",
  "prompt": "Which supplied family-history detail is most clearly a premature coronary-risk signal?",
  "options": [
   "Paternal CHD at 48 is the clearest premature family-history signal",
   "Maternal CHD at 66 is earlier relative to the usual female premature-CHD cutoff than paternal CHD at 48 is for men",
   "Both parental ages carry the same premature-history classification under usual sex-specific definitions",
   "Premature family history is interpreted only if a murmur is present"
  ],
  "reasons": [
   "The father’s early event is a clear risk signal.",
   "The paternal age is the clearer premature signal; usual male/female age cutoffs differ.",
   "The two ages do not have the same premature-history classification.",
   "Family history does not depend on a current murmur."
  ]
 },
 {
  "caseId": "robert",
  "id": "smoking",
  "prompt": "Robert smokes 10 cigarettes/day for 32 years. Using 20 cigarettes per pack, what cumulative exposure is this?",
  "options": [
   "16 pack-years",
   "32 pack-years",
   "10 pack-years",
   "64 pack-years"
  ],
  "reasons": [
   "0.5 pack/day × 32 years = 16 pack-years.",
   "This treats half a pack as one pack.",
   "This uses cigarettes/day without the exposure duration.",
   "This doubles rather than halves the 32-year duration."
  ]
 },
 {
  "caseId": "lipids",
  "id": "nonhdl",
  "prompt": "For the 45-year-old’s supplied profile, TC is 6.1 and HDL-C 0.6 mmol/L. What is non-HDL-C?",
  "options": [
   "5.5 mmol/L",
   "4.65 mmol/L",
   "6.1 mmol/L",
   "Approximately 3.82 mmol/L"
  ],
  "reasons": [
   "Non-HDL-C = 6.1 − 0.6 = 5.5 mmol/L.",
   "This is the supplied LDL-C, not non-HDL-C.",
   "This is total cholesterol before subtracting HDL.",
   "This is the value from the stated Friedewald LDL calculation, not non-HDL-C."
  ]
 },
 {
  "caseId": "lipids",
  "id": "pattern",
  "prompt": "Which overall interpretation best fits the supplied HDL 0.6, LDL 4.65 and TG 3.7 mmol/L?",
  "options": [
   "Low HDL with elevated reported LDL and TG; evaluate global risk and secondary causes",
   "Predominantly isolated high HDL with a favorable atherogenic pattern",
   "An isolated TG elevation with normal LDL/HDL requiring no broader risk interpretation",
   "Familial hypercholesterolemia established solely from this one supplied LDL value"
  ],
  "reasons": [
   "The combined pattern needs contextual assessment and laboratory verification.",
   "HDL is low, not high.",
   "Both the reported LDL and HDL are also unfavorable.",
   "The supplied panel alone does not establish the specific cause/genetic diagnosis."
  ]
 },
 {
  "caseId": "lipids",
  "id": "marker",
  "prompt": "With TG 3.7 mmol/L, which CCS 2021 screening-parameter preference is most relevant?",
  "options": [
   "Non-HDL-C or ApoB, because TG exceeds 1.5 mmol/L",
   "LDL-C as the preferred screening parameter whenever TG is below 4.5 mmol/L",
   "HDL-C as the preferred measure of atherogenic particle burden",
   "The TC/HDL ratio as a substitute for all other risk assessment"
  ],
  "reasons": [
   "This is the specified CCS 2021 preference.",
   "This confuses a calculation-related TG threshold with the stated screening-parameter preference.",
   "HDL does not quantify the total atherogenic burden asked about.",
   "The ratio does not replace comprehensive risk assessment."
  ]
 },
 {
  "caseId": "lipids",
  "id": "diet",
  "prompt": "Which food-history pairing most directly addresses both LDL and TG contributors in this case?",
  "options": [
   "Ask about saturated/trans-fat sources and fiber for LDL; alcohol/refined carbohydrate/calorie intake for TG",
   "Ask about alcohol/refined carbohydrate intake for LDL; focus on saturated fat alone for TG",
   "Ask only about dietary cholesterol and omit alcohol/refined carbohydrates",
   "Ask about meal timing and skip composition/portion questions"
  ],
  "reasons": [
   "These are relevant emphasis areas, while metabolic/secondary factors must also be considered.",
   "This reverses the principal emphasis and narrows the TG inquiry too much.",
   "This omits major relevant contributors to the supplied mixed pattern.",
   "Timing alone does not adequately characterize the relevant dietary exposure."
  ]
 },
 {
  "caseId": "tom",
  "id": "agenda",
  "prompt": "Tom has a rash and a list of other concerns in a 15-minute visit. What is the best initial sequence?",
  "options": [
   "Elicit the agenda, screen urgency, negotiate priorities and plan follow-up",
   "Finish the rash assessment before asking what else is on the list",
   "Start a comprehensive prevention review because he has been absent two years",
   "Ask him to select one concern before any triage of the remaining items"
  ],
  "reasons": [
   "An early full agenda and urgency screen support safe shared prioritization.",
   "An unseen concern could be more urgent; elicit the agenda early.",
   "Time since the last visit informs planning but does not establish the purpose/priority of this encounter.",
   "Patient choice matters, but urgent issues still need a brief screen."
  ]
 },
 {
  "caseId": "tom",
  "id": "assessment",
  "prompt": "After triage, Tom’s rash is the agreed focus and no urgent competing problem is found. Which assessment scope fits best?",
  "options": [
   "Focused episodic assessment, expanded according to relevant findings",
   "Complete head-to-toe preventive examination regardless of the visit goal",
   "Medication review alone because the complaint is skin-related",
   "Emergency assessment because multiple concerns were listed"
  ],
  "reasons": [
   "Scope follows purpose and risk; focused does not mean ignoring relevant systemic context.",
   "A comprehensive visit may be planned but is not automatically the best scope now.",
   "Medication review is one part, not the whole rash assessment.",
   "Multiple concerns alone do not establish an emergency."
  ]
 },
 {
  "caseId": "tom",
  "id": "followup",
  "prompt": "Tom’s nonurgent additional concerns cannot all be addressed today. Which plan best demonstrates continuity?",
  "options": [
   "Document agreed deferred concerns, arrange follow-up and give clear instructions for new urgent symptoms",
   "Document the rash and invite him to mention other concerns whenever he next attends",
   "Complete each concern rapidly without an agreed priority or review plan",
   "Transfer every additional concern to another service without clarifying ownership"
  ],
  "reasons": [
   "A specific plan maintains accountability for what was deferred.",
   "This leaves the deferred agenda and timing uncertain.",
   "Rushed breadth can displace an adequate agreed assessment.",
   "Referral alone does not establish responsibility or continuity."
  ]
 },
 {
  "caseId": "tom",
  "id": "urgent-variation",
  "prompt": "Added variation: one item on Tom’s list is current chest pressure with diaphoresis. What changes?",
  "options": [
   "Reprioritize for urgent assessment of that symptom before the planned rash visit",
   "Keep the rash first because that was the booked complaint",
   "Address the list in written order to preserve fairness",
   "Book a comprehensive review before examining the chest complaint"
  ],
  "reasons": [
   "Urgency can override the initial scheduling/visit plan.",
   "The booked complaint does not determine clinical urgency.",
   "Written order does not rank risk.",
   "A future appointment is not an adequate response to a potentially time-sensitive current symptom."
  ]
 },
 {
  "caseId": "tom",
  "id": "focused-content",
  "prompt": "Which set is most appropriate within a focused rash history for Tom?",
  "options": [
   "Onset/distribution, symptoms/exposures, medicines and relevant systemic warning signs",
   "Distribution alone, followed immediately by a treatment order",
   "Every preventive screening question before the rash history",
   "Prior clinic attendance alone to determine diagnosis"
  ],
  "reasons": [
   "A focused assessment still needs enough context to test relevant causes and severity.",
   "Distribution alone omits exposure, symptom and safety information.",
   "Prevention can be planned without displacing the agreed problem assessment.",
   "Attendance history does not diagnose a rash."
  ]
 },
 {
  "caseId": "tom",
  "id": "shared-priority",
  "prompt": "Tom’s preferred priority differs from the NP’s first impression, with no immediate danger identified. What best fits shared planning?",
  "options": [
   "Clarify his reasons, explain clinical concerns and negotiate a feasible priority",
   "Use the NP’s first impression as the final agenda without further discussion",
   "Let the longest-standing concern determine priority automatically",
   "Allocate equal minutes to every concern without assessing complexity"
  ],
  "reasons": [
   "Both patient priorities and clinical reasoning inform a workable plan.",
   "This omits the patient’s perspective.",
   "Duration alone does not rank all clinical or personal priorities.",
   "Equal time does not necessarily provide adequate care for each issue."
  ]
 },
 {
  "caseId": "nellie",
  "id": "interpreter",
  "prompt": "Nellie speaks little English and her daughter requests screening. Which approach best supports an accurate assessment and Nellie’s participation?",
  "options": [
   "Arrange appropriate trained language support and ask Nellie how she wants her daughter involved",
   "Use the daughter’s interpretation as the default without asking Nellie",
   "Base all decisions on written English questions to avoid interpreter influence",
   "Treat limited English as evidence that substitute decision-making is required"
  ],
  "reasons": [
   "Support communication and clarify the patient’s preferences/consent.",
   "Family involvement may be welcome, but should not automatically replace accurate language support and consent.",
   "Written English does not resolve the identified language barrier.",
   "Language proficiency is not decision-making capacity."
  ]
 },
 {
  "caseId": "nellie",
  "id": "eye-contact",
  "prompt": "Nellie avoids eye contact. What is the most defensible interpretation?",
  "options": [
   "Its meaning is uncertain; ask respectfully and consider communication/context without stereotyping",
   "It establishes cognitive impairment until a screening score is obtained",
   "It confirms one specific cultural belief relevant to treatment",
   "It shows that the daughter should answer all questions"
  ],
  "reasons": [
   "Do not assign a universal cultural or cognitive meaning to one behavior.",
   "Eye contact alone cannot establish cognitive impairment.",
   "Individual preferences and beliefs must be elicited.",
   "The observation does not establish incapacity or transfer the patient role."
  ]
 },
 {
  "caseId": "nellie",
  "id": "intake",
  "prompt": "Which sequence best fits Nellie’s new-patient assessment?",
  "options": [
   "Clarify goals/urgent needs and consent, obtain relevant records, then plan comprehensive assessment and indicated screening",
   "Repeat all common screening tests before obtaining any history of prior results",
   "Defer all assessment until every record has arrived",
   "Accept the daughter’s test list as the complete assessment plan"
  ],
  "reasons": [
   "This balances current needs, continuity and avoiding unnecessary duplication.",
   "Prior tests and goals affect whether repeated screening is useful.",
   "Records matter but should not postpone assessment of current needs.",
   "Family concerns inform, but do not replace, the patient-centered assessment."
  ]
 },
 {
  "caseId": "nellie",
  "id": "screening-vs-diagnosis",
  "prompt": "Added variation: the daughter’s “screening” request is prompted by Nellie finding a new breast lump. How does the task change?",
  "options": [
   "Evaluate a symptomatic finding through an appropriate diagnostic pathway",
   "Apply an asymptomatic screening interval as the only next step",
   "Wait for the next population screening invitation before examining it",
   "Exclude malignancy if Nellie has no pain"
  ],
  "reasons": [
   "A symptom/lesion changes the task from routine population screening to diagnosis.",
   "A screening schedule does not resolve a current symptomatic finding.",
   "An invitation date should not delay indicated diagnostic assessment.",
   "Painless lesions can still require investigation."
  ]
 },
 {
  "caseId": "nellie",
  "id": "preferences",
  "prompt": "Which question best elicits culturally safe individualized care?",
  "options": [
   "“What matters most to you, and are there care or communication preferences you want us to understand?”",
   "“Which traditional practices should I assume you follow?”",
   "“Would you prefer that I ask your daughter rather than you about your goals?” as a default without first addressing Nellie",
   "“Can we skip discussing preferences because all patients need the same tests?”"
  ],
  "reasons": [
   "Ask the individual rather than inferring beliefs from identity.",
   "This assumes rather than elicits her practices.",
   "Ask Nellie about desired family involvement without defaulting away from her voice.",
   "Appropriate testing and communication depend on context and informed preferences."
  ]
 },
 {
  "caseId": "nellie",
  "id": "records",
  "prompt": "Why obtain Nellie’s outpost records before finalizing nonurgent preventive testing?",
  "options": [
   "To establish prior screening/results, treatment and continuity alongside her current goals",
   "To let old records replace her current history",
   "To determine capacity from the frequency of past visits",
   "To eliminate the need for any current examination"
  ],
  "reasons": [
   "Records help avoid gaps/duplication, but are integrated with current assessment.",
   "Her present account and goals remain essential.",
   "Visit frequency does not establish capacity.",
   "Records do not replace an indicated current examination."
  ]
 },
 {
  "caseId": "karen",
  "id": "barriers",
  "prompt": "Which set is most directly supported as barriers in Karen’s case?",
  "options": [
   "Supply costs, transport/geographic access, limited nearby support and injection concerns",
   "Cognitive impairment, substance use and deliberate refusal established by the story",
   "Adequate transport and unrestricted finances with a knowledge deficit alone",
   "A lack of interest in health inferred from the toe ulcer"
  ],
  "reasons": [
   "These barriers are actually described; explore their effects rather than assigning blame.",
   "These claims are not established by the case.",
   "This contradicts the explicit access/financial constraints.",
   "A persistent wound does not establish motivation or indifference."
  ]
 },
 {
  "caseId": "karen",
  "id": "insulin",
  "prompt": "Karen fears injections and cannot afford supplies. Which next conversation best supports a feasible diabetes plan?",
  "options": [
   "Explore fear and costs, clarify options and supports, and agree on an affordable workable plan",
   "Repeat the previous recommendation without asking what prevented uptake",
   "Treat the delay as proof she cannot participate in decisions",
   "Address injection technique but not the cost of supplies"
  ],
  "reasons": [
   "Practical and personal barriers need a shared response.",
   "Repeating advice alone may leave the same obstacles intact.",
   "Reluctance is not incapacity.",
   "Technique alone does not resolve affordability."
  ]
 },
 {
  "caseId": "karen",
  "id": "ulcer",
  "prompt": "Karen’s great-toe ulcer has persisted two months. Which assessment must accompany the social-needs discussion?",
  "options": [
   "Perfusion, protective sensation, wound depth and infection/ischemic warning signs",
   "Only the ulcer’s surface diameter",
   "Only an HbA1c, with wound assessment after access barriers are resolved",
   "Only a superficial swab to decide whether any clinical assessment is needed"
  ],
  "reasons": [
   "A persistent diabetic-foot wound needs timely clinical assessment while barriers are addressed.",
   "Size alone does not establish depth, perfusion or infection.",
   "Access work should not postpone evaluation of an existing wound.",
   "Clinical assessment cannot be replaced by colonization results."
  ]
 },
 {
  "caseId": "karen",
  "id": "transport",
  "prompt": "Which follow-up arrangement best addresses Karen’s described transport limitation?",
  "options": [
   "Coordinate an achievable review/support plan with her and local services, including a route for urgent changes",
   "Set a distant appointment and leave transport arrangements unexplored",
   "Use written education as a complete substitute for wound follow-up",
   "Assume her adult children can provide regular rides without asking"
  ],
  "reasons": [
   "Plan around actual access and clarify escalation.",
   "An appointment that cannot be reached may not provide continuity.",
   "Education supports but does not replace indicated assessment.",
   "The case explicitly describes distant children; ask rather than assume available support."
  ]
 },
 {
  "caseId": "karen",
  "id": "culture",
  "prompt": "Which approach best avoids stereotyping Karen’s Indigenous identity?",
  "options": [
   "Ask about her experiences, preferences and barriers while recognizing the concrete income/geography constraints",
   "Attribute her reluctance to a cultural preference without asking",
   "Assume traditional treatments explain the toe ulcer",
   "Exclude racism or previous care experiences from discussion because they are never relevant"
  ],
  "reasons": [
   "Individual experience and structural context should be elicited, not presumed.",
   "The stated cost/fear barriers cannot be replaced with an assumed belief.",
   "No such treatment history is supplied.",
   "Patient-identified experiences can be relevant to access and trust."
  ]
 },
 {
  "caseId": "karen",
  "id": "escalation",
  "prompt": "Added variation: Karen’s foot becomes cold and pale with new sensory loss. What is the appropriate change in disposition?",
  "options": [
   "Emergency assessment for acute limb ischemia",
   "Routine community support referral as the only immediate action",
   "Wait for the next HbA1c result to determine urgency",
   "Manage as a painless neuropathic ulcer without vascular assessment"
  ],
  "reasons": [
   "New ischemic features require urgent emergency evaluation.",
   "Support services matter, but cannot replace immediate vascular assessment.",
   "A glycemic marker does not determine this acute limb urgency.",
   "Neuropathy can coexist and must not obscure acute ischemic signs."
  ]
 },
 {
  "caseId": "terry",
  "id": "red-eye-ranking",
  "prompt": "Terry has itching, lid adhesion, spread to the other eye and nasal congestion. Which conclusion best fits?",
  "options": [
   "Viral, bacterial and allergic conjunctivitis remain plausible; light sensitivity needs specific assessment",
   "Bacterial conjunctivitis is culture-confirmed by morning crusting",
   "Allergic conjunctivitis is confirmed because he reports itch",
   "Viral conjunctivitis excludes all corneal causes despite photophobia"
  ],
  "reasons": [
   "The overlapping surface pattern does not remove the need to assess photophobia.",
   "Crusting is suggestive but not organism confirmation.",
   "Itch changes probability but is not a definitive standalone test.",
   "The history does not safely exclude corneal disease."
  ]
 },
 {
  "caseId": "terry",
  "id": "key-history",
  "prompt": "Which question set most changes the urgency of Terry’s red-eye assessment?",
  "options": [
   "Pain/true photophobia, visual change, contact lenses and high-velocity trauma",
   "Favorite eye-drop brand and usual work hours",
   "Whether his family prefers tablets to drops",
   "How many days he usually waits before booking an appointment"
  ],
  "reasons": [
   "These identify corneal/intraocular and penetrating-injury risks.",
   "These may inform context but are not the key warning-sign set.",
   "Formulation preference follows assessment of the actual problem.",
   "Attendance habits do not establish current ocular safety."
  ]
 },
 {
  "caseId": "terry",
  "id": "exam",
  "prompt": "Which focused examination best addresses Terry’s presentation?",
  "options": [
   "Visual acuity each eye, pupils, corneal/lid/conjunctival assessment and relevant fluorescein/slit-lamp examination",
   "Inspection of discharge alone",
   "Lid color alone followed by a treatment trial",
   "Checking whether symptoms improve after wiping, as the sole diagnostic test"
  ],
  "reasons": [
   "Vision/corneal and other findings distinguish important competing causes.",
   "Discharge alone does not assess vision-threatening alternatives.",
   "Lid appearance alone misses the relevant structures.",
   "Transient comfort after wiping does not establish a diagnosis."
  ]
 },
 {
  "caseId": "terry",
  "id": "metal-depth",
  "prompt": "A metal fragment appears over the peripheral iris region. What must be clarified before choosing simple removal?",
  "options": [
   "Mechanism and whether the fragment is superficial corneal versus penetrating/intraocular",
   "Whether the fragment looks shiny enough to be steel",
   "Whether both eyes were itchy earlier",
   "Whether nasal congestion started before the eye symptoms"
  ],
  "reasons": [
   "An apparent location over the iris does not establish depth; mechanism and ocular findings guide safe action.",
   "Appearance does not determine penetration or removal safety.",
   "Earlier bilateral symptoms do not resolve a possible injury.",
   "URI timing does not determine foreign-body depth."
  ]
 },
 {
  "caseId": "terry",
  "id": "highvelocity",
  "prompt": "Added variation: Terry reports a high-velocity metal-on-metal injury and now has reduced vision. Best next action?",
  "options": [
   "Protect from pressure/manipulation and arrange urgent assessment for possible penetrating injury",
   "Attempt blind cotton-swab removal before assessing depth",
   "Irrigate forcefully until the fragment disappears",
   "Start routine conjunctivitis treatment and review after the course"
  ],
  "reasons": [
   "High-velocity trauma plus visual change requires urgent appropriate eye evaluation.",
   "Manipulation can worsen a possible penetrating injury.",
   "Forceful irrigation is not a safe substitute for assessing penetration.",
   "The added history changes the problem beyond routine conjunctivitis."
  ]
 },
 {
  "caseId": "terry",
  "id": "differential-triad",
  "prompt": "Added variation: Terry has a painful photophobic red eye with reduced vision. Which set contains three important urgent differentials?",
  "options": [
   "Keratitis, anterior uveitis, acute angle closure",
   "Allergic conjunctivitis, dry eye, uncomplicated blepharitis",
   "Subconjunctival hemorrhage, allergic conjunctivitis, dry eye",
   "Viral conjunctivitis, uncomplicated blepharitis, allergic conjunctivitis"
  ],
  "reasons": [
   "These corneal/intraocular conditions fit the warning-sign category and require appropriate examination.",
   "These usually surface-oriented diagnoses do not adequately address this severity cluster.",
   "This set omits the main urgent corneal/intraocular alternatives.",
   "A routine conjunctivitis-oriented set is insufficient for the added warning signs."
  ]
 },
 {
  "caseId": "beth",
  "id": "differentials",
  "prompt": "Which initial differential set best fits Beth’s severe ear pain after swimming with otorrhea?",
  "options": [
   "Otitis externa; AOM with perforation; other canal/skin disease",
   "Otitis media with effusion only; TMJ pain; presbycusis",
   "Presbycusis; otosclerosis; isolated tinnitus",
   "Allergic rhinitis; cataract; sensorineural hearing loss"
  ],
  "reasons": [
   "OE leads, but examination is needed to distinguish middle-ear perforation and other local causes.",
   "Effusion/referred pain alone less well explain severe canal symptoms and drainage.",
   "These do not best explain the acute painful draining-ear syndrome.",
   "This list is poorly aligned with the presenting syndrome."
  ]
 },
 {
  "caseId": "beth",
  "id": "localization",
  "prompt": "Which added finding most favors OE over uncomplicated AOM in Beth?",
  "options": [
   "Marked tragal/pinna tenderness with edematous debris-filled canal",
   "Bulging TM with middle-ear effusion",
   "Amber fluid behind a nonbulging TM without acute canal findings",
   "Normal canal with pain reproducible at the TMJ"
  ],
  "reasons": [
   "This localizes inflammation to the external canal.",
   "This favors AOM.",
   "This supports OME more than acute OE.",
   "This suggests a referred TMJ source."
  ]
 },
 {
  "caseId": "beth",
  "id": "organism",
  "prompt": "Which pair contains important usual bacterial causes of Beth’s leading OE diagnosis?",
  "options": [
   "Pseudomonas aeruginosa; Staphylococcus aureus",
   "Pseudomonas aeruginosa; Haemophilus influenzae",
   "Staphylococcus aureus; Moraxella catarrhalis",
   "Streptococcus pneumoniae; nontypeable Haemophilus influenzae"
  ],
  "reasons": [
   "This is the usual important external-canal pair.",
   "H. influenzae is substituted for the usual staphylococcal partner.",
   "Moraxella is substituted for Pseudomonas.",
   "This pair favors a middle-ear/respiratory pattern."
  ]
 },
 {
  "caseId": "beth",
  "id": "unseen-tm",
  "prompt": "Beth’s canal swelling prevents TM visualization. Which conclusion is justified?",
  "options": [
   "TM integrity and the middle ear remain incompletely assessed; arrange safe further evaluation",
   "Middle-ear infection is excluded by otorrhea",
   "An intact TM is established because she has no fever",
   "AOM is confirmed by failure to see the TM"
  ],
  "reasons": [
   "Document the limitation and obtain an appropriate view/review rather than inferring normal or infected middle ear.",
   "Otorrhea can arise from canal disease or middle-ear perforation.",
   "Afebrile status does not establish TM integrity.",
   "Nonvisualization is not a diagnostic middle-ear finding."
  ]
 },
 {
  "caseId": "beth",
  "id": "technique",
  "prompt": "For adult Beth, which ordinary pinna maneuver helps straighten the canal for otoscopy?",
  "options": [
   "Gently pull the pinna up and back",
   "Gently pull the pinna down and back as the adult default",
   "Push the tragus firmly into the canal",
   "Advance the speculum through pain to compensate for swelling"
  ],
  "reasons": [
   "The usual adult maneuver is up/back, used gently and with appropriate equipment.",
   "Down/back is generally associated with young-child technique, not the adult default.",
   "This does not straighten the adult canal and can worsen tenderness.",
   "Pain/swelling requires care, not forceful advancement."
  ]
 },
 {
  "caseId": "beth",
  "id": "host-variation",
  "prompt": "Added variation: Beth is immunocompromised and has persistent deep pain with new facial weakness. Which concern rises most urgently?",
  "options": [
   "Invasive/necrotizing otitis externa",
   "Uncomplicated residual middle-ear effusion",
   "Routine transient swimmer’s-ear irritation without complications",
   "Isolated seasonal allergic rhinitis"
  ],
  "reasons": [
   "Host risk, deep pain and cranial nerve findings require urgent specialist/emergency assessment.",
   "Effusion does not explain this invasive/neurologic pattern.",
   "The added findings exceed uncomplicated local irritation.",
   "Allergy does not account for the ear/nerve presentation."
  ]
 },
 {
  "caseId": "eric",
  "id": "score",
  "prompt": "Using modified Centor/McIsaac, Eric is 18 with fever 38.2°C, tonsillar exudate, tender anterior cervical nodes and a PRESENT cough. Total?",
  "options": [
   "3",
   "4",
   "2",
   "5"
  ],
  "reasons": [
   "Fever +1, exudate +1, anterior nodes +1, absence-of-cough +0, age 15–44 +0. Total 3.",
   "This wrongly awards absence-of-cough despite a cough being present.",
   "This omits one of the three positive criteria.",
   "This incorrectly adds cough/age points."
  ]
 },
 {
  "caseId": "eric",
  "id": "cough",
  "prompt": "Which feature in Eric’s actual case prevents awarding the “absence of cough” point?",
  "options": [
   "He reports a dry cough",
   "He has tonsillar exudate",
   "He has anterior cervical nodes",
   "He is 18 years old"
  ],
  "reasons": [
   "A dry cough is still a cough; the criterion is absence, not sputum production.",
   "Exudate is a separate criterion.",
   "Nodes are a separate criterion.",
   "Age affects the age modifier, not the cough criterion."
  ]
 },
 {
  "caseId": "eric",
  "id": "prediction",
  "prompt": "What does Eric’s score of 3 establish under this explicitly named clinical rule?",
  "options": [
   "A higher-probability pattern informing testing, not laboratory-confirmed GAS",
   "Confirmed GAS requiring no further diagnostic reasoning",
   "An organism-specific culture result",
   "EBV excluded because anterior nodes are present"
  ],
  "reasons": [
   "Clinical rules guide probability and testing decisions; follow the appropriate adult/local pathway.",
   "The score is not microbiological confirmation.",
   "No culture has been supplied.",
   "Overlapping signs do not exclude EBV."
  ]
 },
 {
  "caseId": "eric",
  "id": "spleen",
  "prompt": "Added variation: Eric has splenomegaly and marked fatigue. Which ranked differential now fits best?",
  "options": [
   "EBV mononucleosis; GAS pharyngitis; other viral pharyngitis",
   "GAS pharyngitis; isolated allergic rhinitis; EBV excluded",
   "Peritonsillar abscess; allergic rhinitis; otitis externa",
   "Isolated bacterial sinusitis; allergic rhinitis; contact dermatitis"
  ],
  "reasons": [
   "The systemic/splenic pattern raises EBV while retaining relevant alternatives.",
   "Splenic findings do not exclude EBV; they support considering it.",
   "Focal abscess/other-site explanations do not best unify the supplied pattern.",
   "This set does not address the principal pharyngitis/systemic differential."
  ]
 },
 {
  "caseId": "eric",
  "id": "testing",
  "prompt": "Which plan best fits stable Eric without airway or systemic emergency findings?",
  "options": [
   "Use the clinical/local testing pathway for GAS and consider EBV testing if supported by evolving findings",
   "Treat the score as a positive throat culture",
   "Use ASO titer as the routine acute GAS diagnostic test",
   "Use a negative pediatric-test rule as an automatic universal adult rule"
  ],
  "reasons": [
   "The test choice and follow-up depend on the actual clinical setting, test and differential.",
   "A score does not equal microbiological evidence.",
   "ASO does not serve as the routine acute pharyngitis diagnostic test.",
   "Age, test type and local pathway matter."
  ]
 },
 {
  "caseId": "eric",
  "id": "complications",
  "prompt": "Which complication-prevention statement best matches the cited GAS guidance?",
  "options": [
   "Appropriate treatment can prevent ARF; stable patients can undergo indicated testing, while airway warning signs change urgency",
   "Any delay beyond 24 hours guarantees ARF",
   "Antibiotics prevent every case of post-streptococcal glomerulonephritis",
   "A reassuring score removes the need to assess new drooling or stridor"
  ],
  "reasons": [
   "CPS describes treatment within 9 days of onset for ARF prevention; clinical emergencies still require immediate action.",
   "This overstates the risk and does not match the cited timing.",
   "GAS antibiotic treatment has not been shown to prevent PSGN.",
   "New airway signs require assessment regardless of earlier scoring."
  ]
 },
 {
  "caseId": "martha",
  "id": "pattern",
  "prompt": "Added examination: Martha’s vesicles are in linear streaks on exposed forearms. Which pattern is most consistent?",
  "options": [
   "Plant-associated allergic contact dermatitis",
   "Tinea corporis with an advancing annular scaly edge",
   "Herpes zoster in one unilateral dermatome",
   "Scabies with finger-web burrows and affected contacts"
  ],
  "reasons": [
   "The exposure-linked linear vesicular pattern fits contact allergy.",
   "The morphology described is not the typical annular fungal border.",
   "The distribution is not the unilateral dermatomal pattern.",
   "Those contact/burrow features are not supplied."
  ]
 },
 {
  "caseId": "martha",
  "id": "new-infection",
  "prompt": "Added variation: one area becomes increasingly warm, tender and rapidly spreading, with fever. What should change?",
  "options": [
   "Reassess for a superimposed infection/complication rather than attributing every change to dermatitis",
   "Continue reasoning from itch alone and omit the new fever",
   "Use the original lack of chronic disease to exclude infection",
   "Assume the new findings establish the plant species"
  ],
  "reasons": [
   "New pain/warmth/spread and systemic symptoms change the differential and urgency.",
   "New findings must be integrated.",
   "A healthy person can still develop infection.",
   "These findings do not identify a plant."
  ]
 },
 {
  "caseId": "paul",
  "id": "abscess",
  "prompt": "Added examination: Paul has a focal fluctuant collection at the injury site. Which management-relevant diagnosis becomes especially important?",
  "options": [
   "A drainable abscess/source-control problem",
   "Uncomplicated diffuse cellulitis without a collection",
   "Isolated chronic venous edema",
   "Neuropathic loss of sensation alone"
  ],
  "reasons": [
   "A focal collection requires source-control assessment, not just a surface label.",
   "The added collection changes that assumption.",
   "Chronic edema does not best explain fluctuance at an acute injury.",
   "Sensory loss alone does not explain the collection."
  ]
 },
 {
  "caseId": "paul",
  "id": "foreign-body",
  "prompt": "Which injury detail most directly raises concern for retained foreign material/deeper inoculation in Paul?",
  "options": [
   "A puncture with embedded debris and uncertain depth",
   "A fully healed remote abrasion at another site",
   "A family history of high cholesterol",
   "A childhood sprain without current symptoms"
  ],
  "reasons": [
   "Mechanism, depth and contamination affect exploration/imaging/referral decisions.",
   "This does not describe the active wound mechanism.",
   "This does not answer the wound-depth question.",
   "This is less directly relevant to retained material in the present injury."
  ]
 },
 {
  "caseId": "reid",
  "id": "hair",
  "prompt": "Which examination observation most directly supports Reid’s underlying PFB mechanism?",
  "options": [
   "A curved hair shaft re-entering adjacent skin at a follicular papule",
   "A unilateral dermatomal vesicular band",
   "An annular advancing scaly plaque with central clearing",
   "Diffuse nonfollicular wheals that resolve within hours"
  ],
  "reasons": [
   "An ingrown/re-entering hair links the lesion to the PFB mechanism.",
   "This favors a herpetic/dermatomal process instead.",
   "This favors a fungal-pattern differential.",
   "This favors urticaria rather than the persistent follicular/scarring process."
  ]
 },
 {
  "caseId": "reid",
  "id": "infection-organism",
  "prompt": "If Reid’s new component is assessed as bacterial folliculitis, which organism is a usual important consideration?",
  "options": [
   "Staphylococcus aureus",
   "Pseudomonas aeruginosa",
   "Streptococcus pyogenes",
   "Cutibacterium acnes"
  ],
  "reasons": [
   "S. aureus is a usual important bacterial folliculitis cause; this remains a conditional organism question, not a culture result.",
   "Pseudomonas can cause exposure-associated folliculitis, but that history is not supplied.",
   "GAS is important in other skin syndromes but is not the usual leading folliculitis answer here.",
   "C. acnes is associated with acne; the conditional question asks about bacterial folliculitis."
  ]
 },
 {
  "caseId": "ted",
  "id": "venous-features",
  "prompt": "Which added finding cluster would most support a VENOUS contribution to Ted’s leg symptoms?",
  "options": [
   "Dependent edema, varicosities and gaiter pigmentation",
   "Cold foot, weak pulses and distal rest pain",
   "Plantar callus with impaired monofilament sensation",
   "Sudden pallor, pulselessness and new weakness"
  ],
  "reasons": [
   "This is the typical venous-pattern cluster; mixed disease remains possible.",
   "This supports an arterial ischemic contribution.",
   "This supports neuropathic pressure injury.",
   "This is an acute ischemic emergency pattern."
  ]
 },
 {
  "caseId": "ted",
  "id": "neuropathic-features",
  "prompt": "Which added cluster most supports a NEUROPATHIC pressure mechanism for Ted’s plantar ulcer?",
  "options": [
   "Callus at a pressure point with impaired protective sensation",
   "Medial gaiter ulceration with hemosiderin and edema",
   "Punched-out distal ulcer with cold skin and rest pain",
   "Acute asymmetric calf swelling after immobilization"
  ],
  "reasons": [
   "The pressure-site/callus/sensory cluster supports neuropathy; assess perfusion too.",
   "This supports a venous pattern.",
   "This supports ischemia.",
   "This raises a thrombotic differential rather than explaining a neuropathic plantar mechanism."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "morphology",
  "prompt": "Which morphology–differential pairing is most accurate for Mrs. Tremblay’s lesion assessment?",
  "options": [
   "Rolled/raised eroded border can suggest BCC, while evolution/irregularity still requires melanoma consideration",
   "Pink color makes melanoma impossible and establishes BCC",
   "An 8-mm diameter establishes SCC without histology",
   "A central erosion establishes a benign traumatized nevus"
  ],
  "reasons": [
   "Patterns guide a differential but overlap requires tissue diagnosis.",
   "Less-pigmented melanomas exist.",
   "Diameter alone does not establish histology.",
   "Erosion is not specific enough to prove a benign cause."
  ]
 },
 {
  "caseId": "tremblay",
  "id": "tissue",
  "prompt": "Why choose an adequate-depth diagnostic biopsy when melanoma is a concern?",
  "options": [
   "Histopathology and thickness information can influence diagnosis and subsequent staging/management",
   "A superficial color swab provides equivalent tumor-depth information",
   "Destroying the lesion first improves the later diagnostic sample",
   "A normal blood count establishes the same tissue diagnosis"
  ],
  "reasons": [
   "An appropriate sample supports diagnosis and meaningful pathology assessment.",
   "A surface swab does not supply tumor histology/thickness.",
   "Destruction can compromise diagnostic information.",
   "CBC does not establish this lesion’s histologic diagnosis."
  ]
 },
 {
  "caseId": "iris",
  "id": "deep-tissue",
  "prompt": "Added alternative finding: Iris instead has persistent maroon/purple tissue and a blood-filled blister over the sacrum. Which category needs consideration?",
  "options": [
   "Deep tissue pressure injury",
   "Stage 2 based solely on the presence of any blister",
   "Stage 1 because the area may still be partly intact",
   "Unstageable solely because the skin is darker"
  ],
  "reasons": [
   "This color/blood-blister pattern raises deep tissue injury, not routine Stage 2.",
   "Stage 2 should not be assigned to every blister regardless of tissue features.",
   "Purple/maroon deep-tissue features are not the ordinary Stage 1 description.",
   "Skin tone alone does not make a wound unstageable."
  ]
 },
 {
  "caseId": "iris",
  "id": "moisture",
  "prompt": "Which alternative would require distinguishing moisture-associated damage rather than automatically staging it as a pressure injury?",
  "options": [
   "Diffuse superficial perineal irritation linked to prolonged incontinence, away from a focal pressure pattern",
   "A focal sacral partial-thickness ulcer after prolonged pressure",
   "A focal heel lesion associated with pressure and tissue change",
   "A device-shaped injury at a sustained pressure contact site"
  ],
  "reasons": [
   "The distribution/mechanism may favor MASD; moisture and pressure problems can coexist.",
   "This fits a pressure-site mechanism more strongly.",
   "Heel location/mechanism supports pressure assessment.",
   "Device pressure can cause a pressure injury."
  ]
 },
 {
  "caseId": "betty",
  "id": "anemia",
  "prompt": "Which added history would raise ANEMIA/bleeding as a significant alternative contributor to Betty’s exertional symptoms?",
  "options": [
   "Melena with fatigue and pallor",
   "Orthopnea with rapid fluid-related weight gain",
   "Unilateral swollen calf after recent immobilization",
   "New loud murmur with exertional syncope"
  ],
  "reasons": [
   "This cluster prioritizes bleeding/anemia assessment.",
   "This more strongly supports congestion/HF.",
   "This raises thromboembolic concern.",
   "This raises a structural cardiac/valvular concern."
  ]
 },
 {
  "caseId": "betty",
  "id": "acute",
  "prompt": "Added variation: Betty is now breathless at rest with SpO2 86% and chest pressure. Best disposition?",
  "options": [
   "Emergency assessment of acute cardiopulmonary deterioration",
   "Routine echo referral with no acute reassessment",
   "Routine venous-insufficiency follow-up",
   "Diet review as the first and only action"
  ],
  "reasons": [
   "The new instability changes urgency beyond routine outpatient investigation.",
   "An outpatient imaging appointment must not delay acute care.",
   "Venous disease alone does not explain this instability.",
   "Risk-factor work does not address immediate hypoxia/chest symptoms."
  ]
 },
 {
  "caseId": "robert",
  "id": "measurement",
  "prompt": "Which change most improves interpretation if Robert’s initial cuff was too small and he was talking?",
  "options": [
   "Repeat standardized measurement with a validated device, suitable cuff and supported resting position",
   "Average more readings with the same unsuitable cuff while talking",
   "Use normal fundoscopy to cancel the elevated readings",
   "Classify white-coat hypertension from this encounter alone"
  ],
  "reasons": [
   "Technique needs correction before relying on the repeated values.",
   "Repeating the same bias does not correct it.",
   "Normal fundoscopy does not establish normal BP.",
   "The clinic/out-of-office pattern is not yet established."
  ]
 },
 {
  "caseId": "robert",
  "id": "modifiable",
  "prompt": "Which set contains Robert’s directly described MODIFIABLE CV-risk targets?",
  "options": [
   "Smoking, diet pattern, binge-pattern alcohol use and inactivity",
   "Age, paternal CHD age and maternal CHD age",
   "Family longevity and sex alone",
   "Normal fundoscopy and normal auscultation"
  ],
  "reasons": [
   "These are described behaviors that can be explored collaboratively.",
   "These historical/demographic factors are not modifiable behaviors.",
   "These do not identify the actual behavioral targets.",
   "Normal examination findings are not the risk behaviors asked about."
  ]
 },
 {
  "caseId": "lipids",
  "id": "ldl-method",
  "prompt": "If the laboratory had used LDL-C = TC − HDL-C − TG/2.2, what LDL-C would the displayed values imply?",
  "options": [
   "Approximately 3.82 mmol/L",
   "4.65 mmol/L",
   "5.50 mmol/L",
   "Approximately 10.17 mmol/L"
  ],
  "reasons": [
   "6.1 − 0.6 − 3.7/2.2 ≈ 3.82; verify direct versus calculated method rather than silently changing the report.",
   "This is the supplied LDL, not the value from the explicitly stated equation.",
   "This is non-HDL-C before subtracting TG/2.2.",
   "This is approximately the TC/HDL ratio, not LDL-C."
  ]
 },
 {
  "caseId": "lipids",
  "id": "secondary",
  "prompt": "Which history/investigation direction best addresses potentially reversible contributors to this lipid pattern?",
  "options": [
   "Alcohol/diet, diabetes, thyroid/renal/liver disease and relevant medicines",
   "Family longevity alone before any metabolic review",
   "Smoking status alone because he is a nonsmoker",
   "The TC/HDL ratio alone without any secondary-cause assessment"
  ],
  "reasons": [
   "Assess both dietary/metabolic and medication contributors before attributing a fixed cause.",
   "Longevity does not exclude secondary causes or risk.",
   "Nonsmoking leaves many other contributors to assess.",
   "One calculated ratio does not identify the cause."
  ]
 }
];
function suppliedCaseSection(c){return c.module>=3?'Module '+c.module+'.6':'Module '+c.module+' seminar';}
const AHAD_SUPPLIED_RECALL=AHAD_SUPPLIED_CASES.flatMap(c=>c.questions.map((question,i)=>({
 id:'ahad-supplied-20261018-'+c.id+'-q'+(i+1),course:'AHAD',condition:'case-'+c.id,system:c.module===1?'foundations':c.module===2?'heent':c.module===5?'cardio':'skin',module:'ahad-seminar-20261016-'+c.module,topic:c.name+' · Module '+c.module,type:/differential/i.test(question)?'differentials':/red.flag/i.test(question)?'redflags':'reasoning',prompt:c.name+' ('+c.summary+') '+question,rubric:c.answers[i],explanation:'Model study response to the supplied case, not an instructor marking key. '+(c.note||'Additional history/examination may change the leading diagnosis or urgency.'),pitfall:c.id==='iris'?'Braden risk is not pressure-injury stage.':c.id==='tremblay'?'Asymptomatic screening evidence does not justify ignoring a suspicious lesion.':c.id==='reid'?'Do not equate all shaving-related pustules with a proven bacterial infection.':'Distinguish supplied facts from added findings or assumptions.',sources:['suppliedAHADCases',...c.sources],sourceNote:suppliedCaseSection(c)+' case '+c.name+', supplied October 18, 2026; original model response with named primary-source comparisons.',practiceLabel:'Original supplied AHAD case · study answer, not official key'
})));
MIDTERM_RECALL.push(...AHAD_SUPPLIED_RECALL);SHORT_ANSWERS.push(...AHAD_SUPPLIED_RECALL);
const AHAD_SUPPLIED_MCQ=AHAD_SUPPLIED_ROWS.map(row=>{
 const c=AHAD_SUPPLIED_CASES.find(c=>c.id===row.caseId);
 return {id:'ahad-supplied-mcq-20261018-'+row.caseId+'-'+row.id,caseId:c.id,course:'AHAD',condition:'case-'+c.id,system:c.module===1?'foundations':c.module===2?'heent':c.module===5?'cardio':'skin',module:'ahad-seminar-20261016-'+c.module,topic:c.name+' · Module '+c.module,prompt:row.prompt,options:row.options,answer:0,explanation:row.reasons[0],optionRationales:row.reasons,sources:['suppliedAHADCases',...c.sources],sourceNote:'Original MCQ based on '+suppliedCaseSection(c)+', '+c.name+'. Added variations are labelled in the stem; not an instructor item or key.',practiceLabel:'AHAD supplied-case MCQ · October 18, 2026',drillGroup:'ahadSuppliedCases',examSkill:'case_reasoning',caseName:c.name,caseContext:c.stem,caseSummary:c.name+' - '+c.summary};
});PRACTICE.push(...AHAD_SUPPLIED_MCQ);
function suppliedCaseEsc(t){return String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
// Add the supplied text to the existing Module 3–5 reading sections; the original DOCX files stay intact.
for(const c of AHAD_SUPPLIED_CASES){
 const m=STUDY_CONTENT.modules.find(m=>m.id==='ahad-seminar-20261016-'+c.module);if(!m||c.existingInNotes)continue;
 const marker='Supplied October 18 · '+c.name;if(m.sections.some(s=>s.title===marker))continue;
 m.sections.push({block:20000+AHAD_SUPPLIED_CASES.indexOf(c),title:marker,text:c.stem+' '+c.questions.join(' '),html:'<h3>'+suppliedCaseEsc(marker)+'</h3><p>Module '+c.module+'.6 case supplement · <a href="sources/AHAD_Cases_Modules_1_5_Oct18.md">Supplied case text</a></p>'+c.stem.split('\n\n').map(p=>'<p>'+suppliedCaseEsc(p)+'</p>').join('')+'<ol>'+c.questions.map(q=>'<li>'+suppliedCaseEsc(q)+'</li>').join('')+'</ol>'});
}
function ahadCaseReview(params){
 const id=params.get('case'),c=AHAD_SUPPLIED_CASES.find(c=>c.id===id),root=$('#hub-content');
 if(!c){
  root.innerHTML='<p>15 named cases across Modules 1-5: foundation/HEENT cases from your seminar notes plus the supplied Dermatology I/II and Cardiology I cases. Other examples remain in the Library. Answers are study responses, not official keys.</p><div class="actions"><a class="button" href="#resources">All seminar notes</a><button class="primary" id="all-supplied-mcq">Start 90 case MCQs</button></div>'+[1,2,3,4,5].map(module=>'<h2>Module '+module+(module===1?' - Foundations':module===2?' - HEENT':module===3?' - Dermatology I':module===4?' - Dermatology II':' - Cardiology I')+'</h2><div class="grid">'+AHAD_SUPPLIED_CASES.filter(c=>c.module===module).map(c=>'<a class="card" href="#ahad-study/cases?case='+c.id+'"><h3>'+esc(c.name)+'</h3><p>'+esc(c.summary)+'</p><span class="tiny">'+c.questions.length+' case questions · 6 MCQs</span></a>').join('')+'</div>').join('');
  $('#all-supplied-mcq').onclick=()=>startSession('ahad',AHAD_SUPPLIED_MCQ);return;
 }
 const qs=AHAD_SUPPLIED_RECALL.filter(q=>q.condition==='case-'+c.id);
 root.innerHTML='<div class="actions"><a class="button" href="#ahad-study/cases">All supplied cases</a><button class="primary" id="case-mcq">Practise '+esc(c.name)+' · 6 MCQs</button><a class="button" href="#ahad-study/questions?topic=case-'+c.id+'">Write answers from memory</a></div><section class="card supplied-case-stem"><h2>'+esc(c.name)+' - '+suppliedCaseSection(c)+'</h2>'+c.stem.split('\n\n').map(p=>'<p>'+esc(p)+'</p>').join('')+(c.note?'<p class="notice">Source-data check: '+esc(c.note)+'</p>':'')+'<p class="tiny">Case compiled from your seminar notes or October 18 messages. Answers below are original study responses with references, not an official marking key.</p></section>'+qs.map((q,i)=>'<section class="card supplied-case-answer"><h3>'+(i+1)+'. '+esc(c.questions[i])+'</h3><details><summary>Show model answer and reasoning</summary><ul>'+q.rubric.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul>'+sourceRefs(q)+'</details></section>').join('');
 $('#case-mcq').onclick=()=>startSession('ahad',AHAD_SUPPLIED_MCQ.filter(q=>q.caseId===c.id));
}
