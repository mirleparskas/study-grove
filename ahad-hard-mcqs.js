'use strict';
// Original AHAD Modules 1–5 retrieval/decision questions; all multiple choice.
Object.assign(PRACTICE_SOURCES,{
 ebvCDC:{title:'CDC: EBV and infectious mononucleosis',url:'https://www.cdc.gov/epstein-barr/about/'},
 suddenHearingNIDCD:{title:'NIH NIDCD: sudden sensorineural hearing loss',url:'https://www.nidcd.nih.gov/health/sudden-deafness'},
 sinusNICE:{title:'NICE NG79: symptoms and signs of acute sinusitis',url:'https://www.nice.org.uk/guidance/ng79/chapter/symptoms-and-signs'},
 gasCPSAHAD:{title:'CPS: GAS pharyngitis diagnosis and testing',url:'https://cps.ca/en/documents/position/group-a-streptococcal'},
 orbitalAAO:{title:'AAO EyeWiki: orbital cellulitis',url:'https://eyewiki.aao.org/Orbital_Cellulitis'},
 angleClosureAAO:{title:'AAO: acute angle-closure symptoms',url:'https://www.aao.org/eye-health/diseases/what-is-glaucoma'},
 keratitisAAO:{title:'AAO EyeWiki: bacterial keratitis',url:'https://eyewiki.aao.org/Bacterial_Keratitis'},
 psoriasisAAD:{title:'AAD: psoriasis signs and symptoms',url:'https://www.aad.org/public/diseases/psoriasis/what/symptoms'},
 melanomaAAD:{title:'AAD: ABCDEs of melanoma',url:'https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma'}
});
const AHAD_HARD_ROWS=[
 {
  "id": "sensitivity",
  "parent": "foundations-sensitivity",
  "system": "foundations",
  "topic": "Test interpretation",
  "skill": "reasoning",
  "prompt": "A test is positive in 72 of 80 patients who truly have disease, and negative in 108 of 120 without disease. What are its sensitivity and specificity?",
  "options": [
   "90%; 90%",
   "90%; 60%",
   "60%; 90%",
   "40%; 10%"
  ],
  "reasons": [
   "Sensitivity = 72/80; specificity = 108/120. Both are 90%.",
   "60% is the proportion without disease in the whole sample, not specificity.",
   "72/120 uses the wrong denominator for sensitivity.",
   "Neither percentage uses the correct disease-status denominators."
  ],
  "extra": []
 },
 {
  "id": "false-negative",
  "parent": "foundations-sensitivity",
  "system": "foundations",
  "topic": "Test interpretation",
  "skill": "reasoning",
  "prompt": "Among 100 patients with disease, a test is positive in 85. Among 300 without disease, it is positive in 30. Which false-negative and false-positive rates are correct?",
  "options": [
   "15%; 10%",
   "10%; 15%",
   "85%; 90%",
   "15%; 90%"
  ],
  "reasons": [
   "15/100 diseased patients test negative; 30/300 nondiseased patients test positive.",
   "This reverses the two rates.",
   "These are sensitivity and specificity, not their error rates.",
   "15% is the false-negative rate, but 90% is specificity rather than the false-positive rate."
  ],
  "extra": []
 },
 {
  "id": "ppv",
  "parent": "foundations-specificity",
  "system": "foundations",
  "topic": "Test interpretation",
  "skill": "reasoning",
  "prompt": "A sample contains 40 true positives, 10 false positives, 20 false negatives and 130 true negatives. Of those with a POSITIVE test, what proportion truly has disease?",
  "options": [
   "80%",
   "66.7%",
   "92.9%",
   "86.7%"
  ],
  "reasons": [
   "Positive predictive value = 40/(40+10) = 80%; the stem asks about positive tests.",
   "40/(40+20) is sensitivity, not the proportion of positives that are true positives.",
   "130/(130+10) is specificity.",
   "130/(130+20) is negative predictive value."
  ],
  "extra": []
 },
 {
  "id": "npv",
  "parent": "foundations-specificity",
  "system": "foundations",
  "topic": "Test interpretation",
  "skill": "reasoning",
  "prompt": "A sample contains 40 true positives, 10 false positives, 20 false negatives and 130 true negatives. Of those with a NEGATIVE test, what proportion truly lacks disease?",
  "options": [
   "86.7%",
   "80%",
   "66.7%",
   "92.9%"
  ],
  "reasons": [
   "Negative predictive value = 130/(130+20) = 86.7%.",
   "40/(40+10) is positive predictive value.",
   "40/(40+20) is sensitivity.",
   "130/(130+10) is specificity."
  ],
  "extra": []
 },
 {
  "id": "prevalence",
  "parent": "foundations-specificity",
  "system": "foundations",
  "topic": "Screening result",
  "skill": "reasoning",
  "prompt": "The same test has unchanged sensitivity/specificity in two populations, but disease prevalence is much lower in population B. Which change is generally expected in B?",
  "options": [
   "Lower positive predictive value; higher negative predictive value",
   "Higher positive predictive value; lower negative predictive value",
   "Lower sensitivity; unchanged predictive values",
   "Higher specificity; unchanged predictive values"
  ],
  "reasons": [
   "With performance fixed, fewer positive results are true positives at lower prevalence; negatives become more reassuring.",
   "This gives the usual direction for increasing, not decreasing, prevalence.",
   "The stem explicitly holds sensitivity fixed.",
   "The stem explicitly holds specificity fixed."
  ],
  "extra": []
 },
 {
  "id": "negative-risk",
  "parent": "foundations-sensitivity",
  "system": "foundations",
  "topic": "Discordant test",
  "skill": "reasoning",
  "prompt": "In a 1000-person diagnostic exercise, 600 truly have disease. Test sensitivity is 80% and specificity is 90%. After a NEGATIVE result, what proportion of negative-test patients still has disease?",
  "options": [
   "25%",
   "20%",
   "10%",
   "40%"
  ],
  "reasons": [
   "There are 120 false negatives and 360 true negatives; 120/(120+360) = 25%. A negative result leaves meaningful disease probability in this high-prevalence exercise.",
   "20% is the false-negative rate among diseased patients, not the disease proportion among negative tests.",
   "10% is the false-positive rate among nondiseased patients; it is not the requested post-negative proportion.",
   "40% is the proportion of the whole cohort without disease before testing."
  ],
  "extra": []
 },
 {
  "id": "specificity-definition",
  "parent": "foundations-specificity",
  "system": "foundations",
  "topic": "Test properties",
  "skill": "reasoning",
  "prompt": "A study reports specificity of 95%. Which interpretation uses the correct denominator?",
  "options": [
   "95% of patients without the disease have a negative result",
   "95% of positive results come from patients with disease",
   "95% of patients with disease have a positive result",
   "95% of negative results come from patients without disease"
  ],
  "reasons": [
   "Specificity is the proportion of nondiseased patients who test negative.",
   "This describes positive predictive value.",
   "This describes sensitivity.",
   "This describes negative predictive value."
  ],
  "extra": []
 },
 {
  "id": "three-differentials",
  "parent": "heent-recognition-gas",
  "system": "foundations",
  "topic": "Diagnostic ranking",
  "skill": "differentials",
  "prompt": "A patient has exudative pharyngitis, marked fatigue, posterior cervical nodes and splenic enlargement. Which ranked set best fits, with the most likely diagnosis first?",
  "options": [
   "EBV infectious mononucleosis; GAS pharyngitis; another viral pharyngitis",
   "GAS pharyngitis; EBV infectious mononucleosis; another viral pharyngitis",
   "Peritonsillar abscess; GAS pharyngitis; allergic rhinitis",
   "Allergic rhinitis; EBV infectious mononucleosis; peritonsillar abscess"
  ],
  "reasons": [
   "Fatigue, posterior nodes and splenic enlargement favor EBV over otherwise overlapping GAS/viral pharyngitis.",
   "GAS can cause exudate but less well explains the combined posterior-node/splenic pattern.",
   "Focal trismus, unilateral swelling and uvular deviation would favor an abscess; they are not supplied.",
   "The systemic/exudative pattern is poorly explained by allergic rhinitis."
  ],
  "extra": [
   "ebvCDC"
  ]
 },
 {
  "id": "aom-vs-ome",
  "parent": "heent-recognition-aom",
  "system": "heent",
  "topic": "Ear findings",
  "skill": "diagnosis",
  "prompt": "A 3-year-old is comfortable and afebrile three weeks after a treated ear infection. Otoscopy shows an amber air-fluid level and reduced mobility, without TM bulging or new otalgia. Most likely?",
  "options": [
   "Otitis media with effusion",
   "Recurrent acute otitis media",
   "Acute otitis externa",
   "Acute mastoiditis"
  ],
  "reasons": [
   "Residual fluid without a new acute inflammatory syndrome favors OME.",
   "Recurrent AOM needs new acute findings, not fluid alone.",
   "OE centers on an inflamed/tender external canal.",
   "Postauricular inflammation, protrusion or systemic findings would raise mastoiditis concern."
  ],
  "extra": []
 },
 {
  "id": "aom-keyfinding",
  "parent": "heent-recognition-aom",
  "system": "heent",
  "topic": "Ear examination",
  "skill": "diagnosis",
  "prompt": "A toddler has a URI, irritability and ear pulling. Which additional finding most strongly supports AOM over isolated OME or nonspecific TM erythema?",
  "options": [
   "Bulging TM with middle-ear effusion and acute symptoms",
   "Red TM after crying with normal mobility",
   "Retracted TM with fluid but no new acute symptoms",
   "Tender tragus with an edematous external canal"
  ],
  "reasons": [
   "Bulging with effusion in an acute symptomatic illness supports AOM.",
   "Redness alone, especially after crying, is insufficient.",
   "This pattern fits OME/eustachian-tube dysfunction better.",
   "This localizes the main process to the external canal."
  ],
  "extra": []
 },
 {
  "id": "oe-localize",
  "parent": "heent-recognition-oe",
  "system": "heent",
  "topic": "Otalgia",
  "skill": "diagnosis",
  "prompt": "A swimmer has otalgia, canal edema/debris and marked tragal tenderness. The visible TM is not bulging. Which ranked diagnosis/differential set fits best?",
  "options": [
   "Otitis externa; AOM; referred TMJ pain",
   "AOM; otitis externa; referred TMJ pain",
   "Otitis media with effusion; AOM; otitis externa",
   "Referred TMJ pain; otitis externa; AOM"
  ],
  "reasons": [
   "The canal findings and tragal tenderness favor OE; middle-ear and referred causes are competing alternatives.",
   "AOM would need supporting middle-ear inflammatory findings.",
   "Effusion does not account well for the tender inflamed canal.",
   "TMJ pain does not explain the observed canal edema/debris."
  ],
  "extra": []
 },
 {
  "id": "sudden-hearing",
  "parent": "heent-recognition-oe",
  "system": "heent",
  "topic": "Hearing loss",
  "skill": "redflags",
  "prompt": "An adult notices marked unilateral hearing loss on waking, with new tinnitus. Otoscopy shows a clear canal and no obvious effusion; there is no otalgia. Best next step?",
  "options": [
   "Urgent assessment for sudden sensorineural hearing loss with prompt hearing/ENT evaluation",
   "Routine review after several weeks for presumed post-URI effusion",
   "Trial ear irrigation followed by review if hearing remains reduced",
   "Treat as uncomplicated otitis externa before testing hearing"
  ],
  "reasons": [
   "Sudden unexplained hearing loss is time-sensitive; a normal-looking canal/TM does not exclude sensorineural loss.",
   "No effusion is demonstrated, and waiting can delay time-sensitive evaluation.",
   "No obstructing wax is described, so irrigation does not address the suspected mechanism.",
   "OE usually has canal inflammation/pain, which is absent."
  ],
  "extra": [
   "suddenHearingNIDCD"
  ]
 },
 {
  "id": "rhinitis-compare",
  "parent": "heent-recognition-rhinitis",
  "system": "heent",
  "topic": "Nasal symptoms",
  "skill": "diagnosis",
  "prompt": "Bilateral clear rhinorrhea, repetitive sneezing, nasal/ocular itch and pale boggy turbinates recur during pollen season. No fever or unilateral pain. Most likely?",
  "options": [
   "Allergic rhinitis",
   "Acute viral rhinitis",
   "Nonallergic irritant rhinitis",
   "Acute bacterial sinusitis"
  ],
  "reasons": [
   "The itch, ocular symptoms and seasonal pattern favor allergy.",
   "Viral rhinitis can cause discharge but the recurrent itchy seasonal pattern favors allergy.",
   "Irritant rhinitis is exposure-related but prominent allergic itch/seasonality favors the first option.",
   "The pattern lacks the persistent/severe/double-worsening illness expected to support bacterial sinusitis."
  ],
  "extra": []
 },
 {
  "id": "sinus-course",
  "parent": "heent-recognition-rhinitis",
  "system": "heent",
  "topic": "Nasal symptoms",
  "skill": "diagnosis",
  "prompt": "An adult’s URI improves by day 5, then day 8 brings new fever, increased facial pain and worsening nasal discharge. Which course feature most supports bacterial sinusitis over an uncomplicated viral URI?",
  "options": [
   "Deterioration after initial improvement",
   "Yellow discharge during the first two days",
   "Congestion with sneezing on the first day",
   "Facial pressure that improves steadily with the URI"
  ],
  "reasons": [
   "Double worsening increases suspicion for a bacterial complication; assess the whole presentation.",
   "Discharge color early in illness does not by itself distinguish bacterial disease.",
   "Early congestion/sneezing is compatible with a viral URI or allergy.",
   "Steady improvement is less supportive of a new bacterial complication."
  ],
  "extra": [
   "sinusNICE"
  ]
 },
 {
  "id": "gas-testing",
  "parent": "heent-recognition-gas",
  "system": "heent",
  "topic": "Sore throat",
  "skill": "investigation",
  "prompt": "A school-aged child has fever, exudative tonsils, tender anterior cervical nodes and no cough. They are stable and have no airway warning signs. Which interpretation is best?",
  "options": [
   "GAS is plausible; use appropriate microbiological testing because features overlap",
   "The findings confirm GAS without microbiological evidence",
   "The findings favor EBV because anterior nodes are more specific for EBV",
   "Absence of cough excludes all viral causes"
  ],
  "reasons": [
   "This pattern raises probability but does not uniquely establish GAS; testing context matters.",
   "A clinical pattern alone does not prove the organism.",
   "Posterior nodes, marked fatigue and splenic findings would be more suggestive of EBV.",
   "Some viral pharyngitis occurs without cough."
  ],
  "extra": [
   "gasCPSAHAD"
  ]
 },
 {
  "id": "abscess-vs-gas",
  "parent": "heent-recognition-gas",
  "system": "heent",
  "topic": "Sore throat",
  "skill": "redflags",
  "prompt": "Severe unilateral throat pain is accompanied by trismus, muffled voice and uvular deviation. Which diagnosis/action pair fits best?",
  "options": [
   "Peritonsillar abscess; urgent assessment including airway evaluation",
   "Uncomplicated GAS pharyngitis; outpatient testing only",
   "EBV mononucleosis; routine review after several days",
   "Viral laryngitis; voice rest with delayed reassessment"
  ],
  "reasons": [
   "Focal asymmetry plus trismus/muffled voice suggests an abscess requiring urgent assessment.",
   "Uncomplicated GAS does not adequately explain the focal abscess signs.",
   "EBV can cause exudate/adenopathy but is not the best explanation for this focal pattern.",
   "Viral laryngitis does not explain uvular deviation and trismus."
  ],
  "extra": []
 },
 {
  "id": "orbital-vs-preseptal",
  "parent": "heent-recognition-eye",
  "system": "heent",
  "topic": "Swollen eyelid",
  "skill": "redflags",
  "prompt": "A febrile child has unilateral eyelid swelling plus pain on eye movement, restricted extraocular movement and reduced vision. Best interpretation?",
  "options": [
   "Orbital cellulitis; emergency hospital assessment",
   "Preseptal cellulitis; routine oral treatment with delayed review",
   "Allergic eyelid edema; outpatient trigger avoidance",
   "Uncomplicated conjunctivitis; topical therapy alone"
  ],
  "reasons": [
   "Painful restricted movement and visual change imply orbital involvement and emergency urgency.",
   "Preseptal disease should not cause this orbital/visual pattern.",
   "Allergy does not explain the febrile painful ophthalmoplegia pattern.",
   "Conjunctivitis alone does not explain these orbital warning signs."
  ],
  "extra": [
   "orbitalAAO"
  ]
 },
 {
  "id": "glaucoma-pattern",
  "parent": "heent-recognition-eye",
  "system": "heent",
  "topic": "Painful red eye",
  "skill": "diagnosis",
  "prompt": "An older adult has abrupt severe unilateral eye pain, blurred vision/halos, nausea, corneal haze and a mid-dilated poorly reactive pupil. Which diagnosis is most likely?",
  "options": [
   "Acute angle-closure crisis",
   "Acute anterior uveitis",
   "Bacterial conjunctivitis",
   "Subconjunctival hemorrhage"
  ],
  "reasons": [
   "The pupil/corneal/systemic pattern is characteristic of acute angle closure; emergency eye assessment is required.",
   "Uveitis can cause pain/photophobia but is less consistent with this full pattern.",
   "Conjunctivitis does not account for the severe pain, pupil change and visual loss.",
   "A surface hemorrhage does not explain corneal haze, nausea or visual loss."
  ],
  "extra": [
   "angleClosureAAO"
  ]
 },
 {
  "id": "keratitis-contact",
  "parent": "heent-recognition-eye",
  "system": "heent",
  "topic": "Painful red eye",
  "skill": "investigation",
  "prompt": "A contact-lens wearer has a red painful photophobic eye with reduced vision and a focal corneal opacity. Which assessment priority best fits?",
  "options": [
   "Urgent corneal/eye-capable assessment for microbial keratitis",
   "Routine allergy review followed by antihistamine drops",
   "Routine conjunctivitis management without assessing the cornea",
   "Nonurgent evaluation for isolated subconjunctival hemorrhage"
  ],
  "reasons": [
   "The lens history, corneal lesion and visual symptoms prioritize keratitis evaluation.",
   "Itch/watery symptoms with normal vision would support allergy more.",
   "The corneal/visual warning signs exceed ordinary conjunctivitis.",
   "A hemorrhage does not explain a focal corneal opacity and photophobia."
  ],
  "extra": [
   "keratitisAAO"
  ]
 },
 {
  "id": "eye-three",
  "parent": "heent-recognition-eye",
  "system": "heent",
  "topic": "Red-eye differentials",
  "skill": "differentials",
  "prompt": "A red eye has substantial pain, photophobia and impaired vision but little discharge. Which set contains THREE important urgent alternatives to routine conjunctivitis?",
  "options": [
   "Keratitis; anterior uveitis; acute angle closure",
   "Allergic conjunctivitis; dry eye; uncomplicated blepharitis",
   "Subconjunctival hemorrhage; allergic conjunctivitis; dry eye",
   "Uncomplicated bacterial conjunctivitis; blepharitis; allergic conjunctivitis"
  ],
  "reasons": [
   "These corneal/intraocular disorders can threaten vision and fit the warning-sign category. The stem does not distinguish a single one without further examination.",
   "These usually superficial causes do not adequately account for this warning-sign combination.",
   "This benign surface-oriented set misses the principal urgent alternatives.",
   "This also omits the corneal/intraocular causes that the warning signs require considering."
  ],
  "extra": []
 },
 {
  "id": "impetigo-compare",
  "parent": "skin-recognition-impetigo",
  "system": "skin",
  "topic": "Crusted facial lesions",
  "skill": "diagnosis",
  "prompt": "A well child develops superficial erosions with adherent honey-colored crust around the nares. No preceding dermatomal pain or grouped painful vesicles. Which diagnosis best fits?",
  "options": [
   "Nonbullous impetigo",
   "Herpes simplex infection",
   "Tinea faciei",
   "Allergic contact dermatitis"
  ],
  "reasons": [
   "The superficial honey-crusted perinasal pattern favors impetigo.",
   "HSV more often has grouped painful vesicles/erosions; it remains a contextual alternative.",
   "Tinea more often has an active scaly advancing border.",
   "A contact/exposure distribution and eczematous reaction would support contact dermatitis more."
  ],
  "extra": []
 },
 {
  "id": "eczema-infant",
  "parent": "skin-recognition-impetigo",
  "system": "skin",
  "topic": "Infant rash",
  "skill": "diagnosis",
  "prompt": "An infant has chronic relapsing intensely itchy dry erythematous cheek/extensor patches and generalized xerosis. No household itch, burrows or discrete exposure border. Most likely?",
  "options": [
   "Atopic dermatitis",
   "Scabies",
   "Allergic contact dermatitis",
   "Nonbullous impetigo"
  ],
  "reasons": [
   "The age-related relapsing itchy eczema/xerosis pattern favors atopic dermatitis.",
   "Infant scabies can differ from adults, but contacts/burrows and a compatible distribution would add support.",
   "A reproducible exposure-linked distribution would favor contact dermatitis.",
   "Impetigo is a superficial infection pattern; generalized xerosis and relapsing eczema are not explained by it alone."
  ],
  "extra": []
 },
 {
  "id": "tinea-vs-nummular",
  "parent": "skin-recognition-impetigo",
  "system": "skin",
  "topic": "Annular plaque",
  "skill": "diagnosis",
  "prompt": "An enlarging itchy annular plaque has a raised scaly advancing edge and relative central clearing. Which ranked set fits best?",
  "options": [
   "Tinea corporis; nummular eczema; granuloma annulare",
   "Nummular eczema; tinea corporis; granuloma annulare",
   "Granuloma annulare; tinea corporis; nummular eczema",
   "Plaque psoriasis; granuloma annulare; tinea corporis"
  ],
  "reasons": [
   "An advancing scaly border favors tinea; examine/test when uncertainty remains.",
   "Nummular eczema can be coin-shaped but usually has eczema across the lesion rather than a characteristic advancing border.",
   "Granuloma annulare is generally not surface-scaly.",
   "Psoriasis more often has thicker plaques and other supportive sites/nail findings."
  ],
  "extra": [
   "tineaCDC"
  ]
 },
 {
  "id": "psoriasis-pattern",
  "parent": "skin-recognition-impetigo",
  "system": "skin",
  "topic": "Scaly plaques",
  "skill": "diagnosis",
  "prompt": "An adult has symmetric sharply demarcated thick plaques with silvery scale over elbows/knees and nail pitting. Which is most likely?",
  "options": [
   "Plaque psoriasis",
   "Atopic dermatitis",
   "Tinea corporis",
   "Seborrheic dermatitis"
  ],
  "reasons": [
   "Extensor plaques and nail pitting favor psoriasis.",
   "Atopic dermatitis more often has an age-related eczematous/flexural pattern and xerosis.",
   "Tinea more often has an annular advancing border/central clearing rather than this symmetric plaque/nail pattern.",
   "Seborrheic dermatitis favors sebaceous sites with different scale/distribution."
  ],
  "extra": [
   "psoriasisAAD"
  ]
 },
 {
  "id": "scabies-vs-eczema",
  "parent": "skin-recognition-scabies",
  "system": "skin",
  "topic": "Nocturnal itch",
  "skill": "diagnosis",
  "prompt": "An adult and two close contacts develop intense nocturnal itch. Papules and fine burrows are present at finger webs, wrists and beltline. Which is most likely?",
  "options": [
   "Scabies",
   "Atopic dermatitis",
   "Allergic contact dermatitis",
   "Tinea corporis"
  ],
  "reasons": [
   "Contact clustering, nocturnal itch and burrows at typical sites support scabies.",
   "Eczema can itch severely but does not account as well for contagious clustering and burrows.",
   "Shared exposure can cause contact dermatitis, but burrows/typical sites favor infestation.",
   "Annular scaly plaques would support tinea rather than this distribution."
  ],
  "extra": [
   "scabiesSymptomsCDC"
  ]
 },
 {
  "id": "zoster-vs-hsv",
  "parent": "skin-recognition-zoster",
  "system": "skin",
  "topic": "Painful vesicles",
  "skill": "diagnosis",
  "prompt": "Burning pain precedes grouped vesicles in a unilateral thoracic band that respects the midline. Which is most likely?",
  "options": [
   "Herpes zoster",
   "Recurrent localized herpes simplex",
   "Varicella",
   "Allergic contact dermatitis"
  ],
  "reasons": [
   "Prodromal neuropathic pain and a unilateral dermatomal pattern favor zoster.",
   "HSV can cause grouped vesicles but is less consistent with a new broad thoracic dermatome.",
   "Primary varicella is generally diffuse with crops at different stages.",
   "Contact dermatitis follows exposure and is more often itch-dominant than neuropathic/dermatomal."
  ],
  "extra": []
 },
 {
  "id": "varicella-vs-zoster",
  "parent": "skin-recognition-varicella",
  "system": "skin",
  "topic": "Vesicular eruption",
  "skill": "diagnosis",
  "prompt": "An unvaccinated child has itchy trunk-predominant crops of lesions with macules, vesicles and crusts visible simultaneously. Which is most likely?",
  "options": [
   "Varicella",
   "Localized herpes zoster",
   "Nonbullous impetigo",
   "Allergic contact dermatitis"
  ],
  "reasons": [
   "Successive crops at different stages and the diffuse distribution favor varicella.",
   "Localized zoster usually follows a unilateral dermatome.",
   "Honey-crusted superficial erosions would support impetigo; it does not best explain the crops of vesicles at mixed stages.",
   "Exposure distribution and eczematous changes would support contact dermatitis instead."
  ],
  "extra": []
 },
 {
  "id": "ulcer-venous",
  "parent": "skin-recognition-ulcers",
  "system": "skin",
  "topic": "Leg ulcer",
  "skill": "diagnosis",
  "prompt": "A shallow irregular draining ulcer lies near the medial malleolus with edema, varicosities and brown gaiter-area pigmentation. Which type is most likely?",
  "options": [
   "Venous ulcer",
   "Arterial ischemic ulcer",
   "Neuropathic pressure ulcer",
   "Primary malignant ulcer"
  ],
  "reasons": [
   "Location, edema and venous skin changes favor a venous ulcer; assess arterial supply before compression.",
   "Arterial ulcers more often involve distal pressure points with ischemic signs.",
   "Neuropathic ulcers often occur at plantar pressure sites with sensory loss/callus.",
   "Atypical/nonhealing lesions can require malignancy evaluation, but the supplied cluster most strongly favors venous disease."
  ],
  "extra": []
 },
 {
  "id": "ulcer-arterial",
  "parent": "skin-recognition-ulcers",
  "system": "skin",
  "topic": "Painful foot ulcer",
  "skill": "diagnosis",
  "prompt": "A painful punched-out toe ulcer occurs with a cool foot, weak pulses and pain at rest. Which type is most likely?",
  "options": [
   "Arterial ischemic ulcer",
   "Venous ulcer",
   "Uncomplicated neuropathic ulcer",
   "Impetigo"
  ],
  "reasons": [
   "Distal tissue loss with ischemic findings/rest pain suggests significant arterial disease and needs urgent vascular assessment.",
   "Venous disease more often has gaiter edema, drainage and pigmentation.",
   "Neuropathy may coexist, but the ischemic findings cannot be dismissed as sensory disease.",
   "Superficial impetigo does not explain poor perfusion/rest pain."
  ],
  "extra": []
 },
 {
  "id": "ulcer-neuropathic",
  "parent": "skin-recognition-ulcers",
  "system": "skin",
  "topic": "Plantar ulcer",
  "skill": "diagnosis",
  "prompt": "A patient with diabetes has a plantar metatarsal-head ulcer surrounded by callus, little pain and reduced protective sensation. Which mechanism is most directly supported?",
  "options": [
   "Neuropathic pressure injury",
   "Venous hypertension alone",
   "An isolated acute arterial embolus",
   "A primary superficial bacterial infection alone"
  ],
  "reasons": [
   "Pressure-site callus and sensory loss favor a neuropathic mechanism. Assess perfusion/infection too; little pain does not prove safety.",
   "Venous ulcers usually have a different distribution and venous changes.",
   "Acute embolism more often produces abrupt ischemic findings.",
   "Infection can complicate the wound but does not explain the underlying pressure/sensory pattern alone."
  ],
  "extra": []
 },
 {
  "id": "necrotizing-priority",
  "parent": "skin-recognition-nec",
  "system": "skin",
  "topic": "Rapidly painful skin change",
  "skill": "redflags",
  "prompt": "A diabetic adult has rapidly progressive limb pain far greater than the visible erythema, systemic illness and new bullae. Which disposition is best?",
  "options": [
   "Emergency transfer for suspected necrotizing infection and urgent surgical assessment",
   "Same-day outpatient ultrasound before deciding on transfer",
   "An oral antibiotic trial with next-day review",
   "Routine wound clinic referral while awaiting a superficial swab"
  ],
  "reasons": [
   "Disproportionate pain, progression and toxicity require emergency evaluation/source-control assessment.",
   "Outpatient imaging should not delay transfer when this dangerous pattern is suspected.",
   "A trial period risks delaying necessary emergency treatment.",
   "A superficial swab/routine referral does not address the immediate deep-infection risk."
  ],
  "extra": [
   "necrotizingCDC"
  ]
 },
 {
  "id": "melanoma-small",
  "parent": "skin-recognition-melanoma",
  "system": "skin",
  "topic": "Changing pigmented lesion",
  "skill": "redflags",
  "prompt": "A 4-mm pigmented lesion has become asymmetric, developed several colors and differs from the patient’s other nevi. Which interpretation is best?",
  "options": [
   "Evolution and atypical features warrant prompt assessment despite size below 6 mm",
   "Diameter below 6 mm makes melanoma sufficiently unlikely to dismiss",
   "Color variation matters only if the lesion is painful",
   "Serial photographs alone establish the histologic diagnosis"
  ],
  "reasons": [
   "Evolution/atypia matter even in a small lesion; appropriate assessment and biopsy planning establish diagnosis.",
   "The diameter criterion is not a rule excluding smaller melanomas.",
   "Melanoma can be painless; pain is not required for concern.",
   "Images support monitoring but do not replace histopathologic diagnosis when indicated."
  ],
  "extra": [
   "melanomaAAD"
  ]
 },
 {
  "id": "htn-threshold",
  "parent": "cardio1-htn",
  "system": "cardio",
  "topic": "Blood pressure",
  "skill": "cardio",
  "prompt": "Repeated STANDARDIZED clinic BP averages 136/84. Under the 2025 Hypertension Canada primary-care guideline used in the linked notes, which interpretation fits?",
  "options": [
   "It exceeds the ≥130/80 diagnostic threshold; confirm/evaluate with appropriate out-of-office data",
   "It is normal because diagnosis requires ≥140/90 under this guideline",
   "It establishes hypertensive emergency regardless of symptoms",
   "It proves white-coat hypertension without home/ambulatory readings"
  ],
  "reasons": [
   "The specified 2025 threshold is ≥130/80; diagnosis confirmation and treatment decisions need their own assessment.",
   "This imports a different/older threshold into the named guideline.",
   "An emergency depends on acute organ injury, not this mild elevation alone.",
   "White-coat status requires the clinic/out-of-office pattern."
  ],
  "extra": []
 },
 {
  "id": "whitecoat",
  "parent": "cardio1-htn",
  "system": "cardio",
  "topic": "BP patterns",
  "skill": "cardio",
  "prompt": "Repeated standardized clinic readings are 148/88, while a validated home series averages 118/72. Which pattern is most consistent, pending appropriate confirmation?",
  "options": [
   "White-coat hypertension",
   "Masked hypertension",
   "Sustained hypertension",
   "Isolated masked nocturnal hypertension"
  ],
  "reasons": [
   "Clinic elevation with normal out-of-office values is the white-coat pattern.",
   "Masked hypertension is the opposite clinic/home pattern.",
   "Sustained hypertension would also have elevated out-of-office values.",
   "A home series alone does not identify a specifically nocturnal pattern."
  ],
  "extra": []
 },
 {
  "id": "masked",
  "parent": "cardio1-htn",
  "system": "cardio",
  "topic": "BP patterns",
  "skill": "cardio",
  "prompt": "Clinic BP is repeatedly 118/72, but properly obtained validated home readings average 142/86. Which pattern fits?",
  "options": [
   "Masked hypertension",
   "White-coat hypertension",
   "Normotension in both settings",
   "An established hypertensive emergency"
  ],
  "reasons": [
   "Normal clinic and elevated out-of-office BP is a masked pattern; confirm and assess the patient.",
   "White-coat hypertension has elevated clinic and normal out-of-office BP.",
   "The home series is not normal.",
   "This pattern alone does not establish acute organ injury/emergency."
  ],
  "extra": []
 },
 {
  "id": "crisis-compare",
  "parent": "cardio1-crisis",
  "system": "cardio",
  "topic": "Marked BP elevation",
  "skill": "redflags",
  "prompt": "Which presentation most strongly supports hypertensive EMERGENCY rather than severe BP elevation without demonstrated acute organ injury?",
  "options": [
   "BP 202/120 with acute pulmonary edema and new confusion",
   "BP 202/120 after missed medication, normal neurologic exam and no acute injury found",
   "BP 190/112 with chronic unchanged mild headache and no acute injury found",
   "BP 188/110 after caffeine, improving with rest and no acute injury found"
  ],
  "reasons": [
   "Acute pulmonary edema and neurologic change indicate suspected acute target-organ injury.",
   "This still needs appropriate assessment but lacks the supplied acute-injury findings defining emergency.",
   "A high number/chronic headache alone does not establish emergency.",
   "The reading warrants assessment but the stem does not demonstrate acute organ injury."
  ],
  "extra": []
 },
 {
  "id": "hf-differential",
  "parent": "cardio1-hf",
  "system": "cardio",
  "topic": "Dyspnea",
  "skill": "diagnosis",
  "prompt": "Progressive exertional dyspnea and orthopnea occur with raised JVP, bilateral basal crackles and peripheral edema. No focal fever syndrome. Which working diagnosis best unifies these findings?",
  "options": [
   "Heart failure with congestion",
   "COPD exacerbation without cardiac involvement",
   "Focal bacterial pneumonia",
   "Isolated dependent venous edema"
  ],
  "reasons": [
   "Pulmonary plus systemic congestion supports HF; confirmation/subtype assessment is still required.",
   "COPD may coexist but alone less well explains this combined congestion cluster.",
   "A focal infection is less supported by the supplied diffuse congestion findings.",
   "Dependent edema alone does not explain orthopnea, JVP elevation and crackles."
  ],
  "extra": []
 },
 {
  "id": "hf-echo",
  "parent": "cardio1-hf",
  "system": "cardio",
  "topic": "Cardiac investigation",
  "skill": "investigation",
  "prompt": "HF is suspected clinically. Which investigation most directly evaluates ventricular systolic function, cardiac structure and valvular disease?",
  "options": [
   "Echocardiography",
   "A resting ECG alone",
   "A chest radiograph alone",
   "A natriuretic peptide alone"
  ],
  "reasons": [
   "Echo directly assesses cardiac structure/function; other tests contribute different information.",
   "ECG assesses electrical findings but does not replace structural/function imaging.",
   "Radiography can show congestion/other lung findings but does not directly quantify ventricular function.",
   "Natriuretic peptides support assessment but do not define structural/valvular anatomy."
  ],
  "extra": []
 },
 {
  "id": "jvp-unseen",
  "parent": "cardio1-jvp",
  "system": "cardio",
  "topic": "JVP examination",
  "skill": "cardio",
  "prompt": "After optimizing lighting and positioning, you still cannot identify the jugular venous waveform. Which documentation is most defensible?",
  "options": [
   "JVP not visualized/assessable with this examination",
   "JVP normal because no waveform was seen",
   "JVP elevated because visualization was difficult",
   "JVP measured from the palpable carotid pulsation"
  ],
  "reasons": [
   "Document the examination limit rather than inventing a normal or elevated value.",
   "Not visualizing is not equivalent to a reliably normal measurement.",
   "Difficulty seeing the waveform does not establish elevation.",
   "Carotid arterial pulsation is not a substitute for JVP."
  ],
  "extra": []
 },
 {
  "id": "murmur-timing",
  "parent": "cardio1-murmur",
  "system": "cardio",
  "topic": "Heart sounds",
  "skill": "cardio",
  "prompt": "A murmur begins just after S1 and ends before S2. Which timing/valve statement is correct?",
  "options": [
   "It is systolic; mitral/tricuspid valves are generally closed during ventricular systole",
   "It is diastolic; mitral/tricuspid opening produces S1",
   "It is systolic; mitral/tricuspid valves remain open throughout ventricular systole",
   "It is diastolic; aortic/pulmonic closure produces S1"
  ],
  "reasons": [
   "Systole is between S1 and S2; AV-valve closure contributes to S1.",
   "The timing is systolic and S1 is not AV-valve opening.",
   "The timing fits but AV valves are generally closed during ventricular systole.",
   "Both the timing and attribution of S1 are incorrect."
  ],
  "extra": []
 },
 {
  "id": "pad-vs-spine",
  "parent": "cardio1-pad",
  "system": "cardio",
  "topic": "Exertional leg symptoms",
  "skill": "diagnosis",
  "prompt": "Calf discomfort begins reproducibly after walking a similar distance, resolves with rest, and accompanies reduced pedal pulses and ABI 0.78. Most likely?",
  "options": [
   "Peripheral arterial disease with claudication",
   "Lumbar stenosis causing neurogenic claudication",
   "Chronic venous insufficiency as the sole cause",
   "Acute DVT as the sole cause"
  ],
  "reasons": [
   "The exertional pattern plus low ABI/reduced pulses supports PAD.",
   "Posture/flexion-related features favor neurogenic claudication; they do not explain the low ABI.",
   "Venous disease more often has dependent edema/skin changes and does not explain this arterial result.",
   "DVT does not best explain the reproducible distance/rest pattern and low ABI."
  ],
  "extra": []
 },
 {
  "id": "abi-noncompressible",
  "parent": "cardio1-pad",
  "system": "cardio",
  "topic": "Vascular investigation",
  "skill": "investigation",
  "prompt": "A patient with diabetes has a foot ulcer and suspected PAD, but resting ABI is 1.52. Which interpretation/next test fits the linked vascular guideline?",
  "options": [
   "Possible noncompressible arteries; assess toe pressure/TBI with appropriate vascular testing",
   "PAD excluded; the high ABI proves normal perfusion",
   "Severe PAD quantified directly by the high ABI; no additional perfusion testing needed",
   "Venous insufficiency confirmed; use ABI as a venous pressure measurement"
  ],
  "reasons": [
   "ABI >1.40 can reflect noncompressibility; toe testing helps evaluate perfusion when ABI is unreliable.",
   "A high noncompressible ABI does not establish normal perfusion.",
   "It signals measurement limitation, not a direct severity grade from that number alone.",
   "ABI is not a venous pressure measurement."
  ],
  "extra": []
 },
 {
  "id": "abi-calc",
  "parent": "cardio1-pad",
  "system": "cardio",
  "topic": "ABI calculation",
  "skill": "reasoning",
  "prompt": "For a specified leg, the HIGHER ankle systolic pressure is 96 mmHg. The arm pressures are 128 and 120 mmHg. Using the higher arm pressure, what is this leg’s ABI?",
  "options": [
   "0.75",
   "0.80",
   "1.25",
   "1.33"
  ],
  "reasons": [
   "96/128 = 0.75, in the abnormal ≤0.90 range in the cited guideline.",
   "96/120 uses the lower arm pressure rather than the specified higher value.",
   "120/96 both inverts the ratio and uses the lower arm pressure.",
   "128/96 inverts the correct ankle-to-arm ratio."
  ],
  "extra": []
 },
 {
  "id": "jaw-triage",
  "parent": "cardio1-jaw",
  "system": "cardio",
  "topic": "Exertional jaw symptoms",
  "skill": "redflags",
  "prompt": "A patient’s prior exertional jaw discomfort now occurs at rest with diaphoresis and dyspnea and lasts 25 minutes. Best disposition?",
  "options": [
   "Emergency ACS assessment rather than routine outpatient testing",
   "Routine stress-test referral before considering acute evaluation",
   "Reflux-directed treatment followed by review in one week",
   "Dental assessment first because the discomfort is in the jaw"
  ],
  "reasons": [
   "Rest/prolonged symptoms and associated autonomic/respiratory features raise acute ischemic concern.",
   "Outpatient testing must not delay assessment of a possible acute coronary syndrome.",
   "A reflux trial does not address the time-sensitive cardiac pattern.",
   "Jaw location does not exclude cardiac ischemia."
  ],
  "extra": []
 },
 {
  "id": "organism-ear",
  "parent": "heent-recognition-aom",
  "system": "heent",
  "topic": "Middle-ear pathogens",
  "skill": "organism",
  "prompt": "A child has acute otalgia, middle-ear effusion and a bulging TM. Which list contains the THREE usual major bacterial causes of this syndrome?",
  "options": [
   "Streptococcus pneumoniae; nontypeable Haemophilus influenzae; Moraxella catarrhalis",
   "Streptococcus pneumoniae; Staphylococcus aureus; Moraxella catarrhalis",
   "Pseudomonas aeruginosa; Staphylococcus aureus; Haemophilus influenzae",
   "Streptococcus pyogenes; Haemophilus influenzae type b; Moraxella catarrhalis"
  ],
  "reasons": [
   "This is the usual major pediatric AOM trio, not an exhaustive list of every possible cause.",
   "This substitutes Staphylococcus aureus for nontypeable Haemophilus influenzae.",
   "The external-canal pair is substituted for the usual AOM set.",
   "This substitutes GAS for pneumococcus and type b for nontypeable Haemophilus influenzae."
  ],
  "extra": [
   "aomOrganismsCPS"
  ]
 },
 {
  "id": "organism-canal",
  "parent": "heent-recognition-oe",
  "system": "heent",
  "topic": "Canal pathogens",
  "skill": "organism",
  "prompt": "A swimmer has an inflamed external canal with marked tragal tenderness. Which bacterial pair most strongly belongs to this syndrome?",
  "options": [
   "Pseudomonas aeruginosa; Staphylococcus aureus",
   "Streptococcus pneumoniae; Moraxella catarrhalis",
   "Nontypeable Haemophilus influenzae; Streptococcus pneumoniae",
   "Pasteurella multocida; Streptococcus pyogenes"
  ],
  "reasons": [
   "Pseudomonas/Staphylococcus aureus are the usual important OE pair.",
   "These are middle-ear/respiratory-associated organisms rather than the usual OE pair.",
   "This also favors the middle-ear pathogen set.",
   "Pasteurella is an animal-bite clue, not the usual external-canal pair."
  ],
  "extra": [
   "mums2024"
  ]
 },
 {
  "id": "organism-crust",
  "parent": "skin-recognition-impetigo",
  "system": "skin",
  "topic": "Skin pathogens",
  "skill": "organism",
  "prompt": "A child has superficial honey-crusted nonbullous lesions. Which set matches the usual causes, and the organism linked to the bullous form?",
  "options": [
   "Nonbullous: Staphylococcus aureus and/or Streptococcus pyogenes; bullous: toxin-producing Staphylococcus aureus",
   "Nonbullous: Staphylococcus aureus and/or Streptococcus pyogenes; bullous: toxin-producing Streptococcus pyogenes",
   "Nonbullous: Streptococcus pneumoniae and/or Streptococcus pyogenes; bullous: toxin-producing Staphylococcus aureus",
   "Nonbullous: Staphylococcus aureus and/or Streptococcus agalactiae; bullous: toxin-producing Streptococcus agalactiae"
  ],
  "reasons": [
   "Nonbullous impetigo can involve Staphylococcus aureus/GAS; bullous disease is associated with toxin-producing Staphylococcus aureus.",
   "The nonbullous pair fits but the bullous organism is incorrect.",
   "Pneumococcus incorrectly replaces Staphylococcus aureus in the usual nonbullous set.",
   "GBS is substituted for GAS, and the bullous assignment is wrong."
  ],
  "extra": [
   "mums2024"
  ]
 },
 {
  "id": "organism-sinus",
  "parent": "heent-recognition-rhinitis",
  "system": "heent",
  "topic": "Sinus pathogens",
  "skill": "organism",
  "prompt": "A patient’s persistent/double-worsening illness is assessed as uncomplicated acute bacterial sinusitis. Which usual bacterial set best fits?",
  "options": [
   "Streptococcus pneumoniae; Haemophilus influenzae; Moraxella catarrhalis",
   "Streptococcus pneumoniae; Pseudomonas aeruginosa; Staphylococcus aureus",
   "Streptococcus pyogenes; Bordetella pertussis; Haemophilus influenzae",
   "Pasteurella multocida; Staphylococcus aureus; Moraxella catarrhalis"
  ],
  "reasons": [
   "Pneumococcus, Haemophilus influenzae and M. catarrhalis are the usual targets in this uncomplicated syndrome.",
   "This substitutes organisms that do not represent the usual uncomplicated trio.",
   "GAS/pertussis do not form the usual uncomplicated sinusitis set.",
   "Pasteurella is a bite-exposure clue, not part of the usual uncomplicated sinusitis trio."
  ],
  "extra": [
   "mums2024"
  ]
 }
];
const AHAD_HARD_CHALLENGES=AHAD_HARD_ROWS.map(row=>{
 const ref=MIDTERM_RECALL.find(q=>q.id==='recall-20261016-'+row.parent);
 if(!ref)throw Error('Missing AHAD source parent '+row.parent);
 return {id:'ahad-hard-20261017-'+row.id,course:'AHAD',condition:ref.condition,system:row.system,module:ref.module,topic:row.topic,prompt:row.prompt,options:row.options,answer:0,explanation:row.reasons[0],optionRationales:row.reasons,sources:[...new Set([...ref.sources,...row.extra])],sourceNote:ref.sourceNote+' Original AHAD study vignette, not an instructor exam item or key. Numerical test cohorts are invented calculation exercises; not published test-performance estimates.',practiceLabel:'Difficult AHAD MCQ · Modules 1–5 including Cardiology I',drillGroup:'ahadHardChallenge',examSkill:row.skill};
});
PRACTICE.push(...AHAD_HARD_CHALLENGES);
