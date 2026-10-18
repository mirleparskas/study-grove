'use strict';
Object.assign(PRACTICE_SOURCES,{
 "lesionTermsMSD": {
  "title": "MSD Manual: lesion morphology",
  "url": "https://www.msdmanuals.com/professional/dermatologic-disorders/approach-to-the-dermatologic-patient/description-of-skin-lesions"
 },
 "lesionTerms": {
  "title": "DermNet: describing skin lesions",
  "url": "https://dermnetnz.org/topics/terminology"
 },
 "lesionContact": {
  "title": "AAD: contact dermatitis signs and symptoms",
  "url": "https://www.aad.org/public/diseases/eczema/types/contact-dermatitis/symptoms"
 },
 "lesionTinea": {
  "title": "DermNet: tinea corporis",
  "url": "https://dermnetnz.org/topics/tinea-corporis"
 },
 "lesionMolluscum": {
  "title": "DermNet: molluscum contagiosum",
  "url": "https://dermnetnz.org/topics/molluscum-contagiosum"
 },
 "lesionWart": {
  "title": "DermNet: viral warts",
  "url": "https://dermnetnz.org/topics/viral-wart"
 },
 "lesionZoster": {
  "title": "DermNet: herpes zoster",
  "url": "https://dermnetnz.org/topics/herpes-zoster"
 },
 "lesionScabies": {
  "title": "CDC: scabies symptoms and age-related distribution",
  "url": "https://www.cdc.gov/scabies/signs-symptoms/"
 },
 "lesionPfb": {
  "title": "DermNet: pseudofolliculitis barbae",
  "url": "https://dermnetnz.org/topics/pseudofolliculitis-barbae"
 },
 "lesionFolliculitis": {
  "title": "DermNet: bacterial folliculitis",
  "url": "https://dermnetnz.org/topics/bacterial-folliculitis"
 },
 "lesionNecrotizing": {
  "title": "CDC: necrotizing fasciitis",
  "url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/necrotizing-fasciitis.html"
 },
 "lesionPressure": {
  "title": "NPIAP: pressure injury staging",
  "url": "https://cdn.ymaws.com/npiap.com/resource/resmgr/NPIAP-Staging-Poster.pdf"
 },
 "lesionImpetigoCDC": {
  "title": "CDC: impetigo organisms and findings",
  "url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/impetigo.html"
 },
 "lesionCellulitis": {
  "title": "DermNet: cellulitis",
  "url": "https://dermnetnz.org/topics/cellulitis"
 },
 "lesionRingwormCDC": {
  "title": "CDC: ringworm organisms",
  "url": "https://www.cdc.gov/ringworm/about/"
 },
 "lesionSeborrhoeic": {
  "title": "DermNet: seborrhoeic dermatitis",
  "url": "https://dermnetnz.org/topics/seborrhoeic-dermatitis"
 }
});
const AHAD_LESION_MCQ=[
 {
  "id": "ahad-lesions-20261018-flat",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "lesion-description",
  "topic": "Lesion description",
  "prompt": "Using a 1-cm size boundary, which pair correctly describes a flat 4-mm brown lesion and a flat 3-cm area of pigment change?",
  "options": [
   "Macule; patch",
   "Papule; plaque",
   "Macule; plaque",
   "Papule; patch"
  ],
  "answer": 0,
  "optionRationales": [
   "Both are flat; size distinguishes the terms.",
   "Both terms imply elevation.",
   "The larger area is flat, so plaque is inappropriate.",
   "The first lesion is not palpable or raised."
  ],
  "explanation": "Both are flat; size distinguishes the terms.",
  "sources": [
   "lesionTermsMSD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-raised",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "lesion-description",
  "topic": "Lesion description",
  "prompt": "A solid, superficial 6-mm elevation merges with similar lesions into a broad, raised, flat-topped area 3 cm across. Which terms fit?",
  "options": [
   "Papules forming a plaque",
   "Vesicles forming a bulla",
   "Macules forming a patch",
   "Nodules forming a cyst"
  ],
  "answer": 0,
  "optionRationales": [
   "These are solid superficial elevations that coalesce.",
   "These terms describe fluid-filled lesions.",
   "These terms describe flat colour changes.",
   "Deep involvement or a cavity has not been described."
  ],
  "explanation": "These are solid superficial elevations that coalesce.",
  "sources": [
   "lesionTermsMSD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-blisters",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "lesion-description",
  "topic": "Lesion description",
  "prompt": "Using a 1-cm size boundary, two intact clear-fluid blisters measure 3 mm and 18 mm. What is the best description?",
  "options": [
   "Vesicle; bulla",
   "Pustule; bulla",
   "Papule; nodule",
   "Vesicle; plaque"
  ],
  "answer": 0,
  "optionRationales": [
   "Both contain clear fluid, with the larger blister termed a bulla.",
   "Pus has not been described.",
   "These are fluid-filled rather than solid.",
   "A plaque is solid rather than a fluid-filled cavity."
  ],
  "explanation": "Both contain clear fluid, with the larger blister termed a bulla.",
  "sources": [
   "lesionTermsMSD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-crust",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "surface-changes",
  "topic": "Surface changes",
  "prompt": "An excoriated lesion has adherent dried serum. A second lesion sheds thin flakes of keratin. Which description fits the findings in order?",
  "options": [
   "Crust; scale",
   "Scale; crust",
   "Eschar; scale",
   "Crust; lichenification"
  ],
  "answer": 0,
  "optionRationales": [
   "Dried exudate forms crust; shed surface keratin forms scale.",
   "This reverses the surface changes.",
   "Eschar refers to devitalized tissue, not dried serum.",
   "Lichenification describes thickened skin with accentuated markings."
  ],
  "explanation": "Dried exudate forms crust; shed surface keratin forms scale.",
  "sources": [
   "lesionTerms"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-erosion",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "skin-loss",
  "topic": "Skin loss",
  "prompt": "A ruptured blister leaves moist superficial epidermal loss. An adjacent wound extends into the dermis. Which terms fit, respectively?",
  "options": [
   "Erosion; ulcer",
   "Ulcer; erosion",
   "Fissure; excoriation",
   "Atrophy; fissure"
  ],
  "answer": 0,
  "optionRationales": [
   "Depth distinguishes superficial erosion from ulceration.",
   "This reverses the depth relationship.",
   "A fissure is a linear crack; an excoriation usually follows scratching.",
   "Neither thinning nor a linear crack describes these wounds."
  ],
  "explanation": "Depth distinguishes superficial erosion from ulceration.",
  "sources": [
   "lesionTerms"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-wheal",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "transient-lesions",
  "topic": "Transient lesions",
  "prompt": "Raised, itchy, edematous lesions change shape and disappear from each site within hours, leaving normal skin. Which morphology best fits?",
  "options": [
   "Wheals",
   "Papules",
   "Vesicles",
   "Nodules"
  ],
  "answer": 0,
  "optionRationales": [
   "Transient superficial swelling is characteristic of wheals.",
   "Solid papules do not usually vanish within hours.",
   "No clear-fluid cavity is described.",
   "Deep solid nodules persist rather than migrate rapidly."
  ],
  "explanation": "Transient superficial swelling is characteristic of wheals.",
  "sources": [
   "lesionTermsMSD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-purpura",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "colour-change",
  "topic": "Colour change",
  "prompt": "Small purple-brown spots remain visible when pressed with a transparent glass. Which finding best explains this observation?",
  "options": [
   "Blood extravasated into skin",
   "Increased superficial blood flow",
   "Loss of epidermal pigment",
   "A fluid-filled epidermal cavity"
  ],
  "answer": 0,
  "optionRationales": [
   "Blood outside vessels does not blanch with pressure.",
   "Vascular erythema generally blanches.",
   "Pigment loss would not explain purple-brown hemorrhagic spots.",
   "A cavity would produce a blister rather than nonblanching flat spots."
  ],
  "explanation": "Blood outside vessels does not blanch with pressure.",
  "sources": [
   "lesionTerms"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-annular",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "configuration",
  "topic": "Configuration",
  "prompt": "A lesion has an expanding circular outline with a relatively clear centre. Which term describes its configuration rather than its cause?",
  "options": [
   "Annular",
   "Dermatomal",
   "Follicular",
   "Flexural"
  ],
  "answer": 0,
  "optionRationales": [
   "Annular describes a ring; it does not by itself diagnose a fungus.",
   "Dermatomal describes a nerve-root distribution.",
   "Follicular means centred on hair follicles.",
   "Flexural identifies involvement of body folds."
  ],
  "explanation": "Annular describes a ring; it does not by itself diagnose a fungus.",
  "sources": [
   "lesionTerms"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "morphology",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-martha",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "exposure-pattern-reasoning",
  "topic": "Exposure-pattern reasoning",
  "prompt": "Martha develops itchy linear vesicles on exposed hands and legs after clearing brush. Which diagnosis and mechanism fit best?",
  "options": [
   "Allergic contact dermatitis; delayed hypersensitivity to a plant exposure",
   "Irritant contact dermatitis; bacterial invasion through microabrasions",
   "Herpes zoster; reactivation in several exposed dermatomes",
   "Tinea corporis; dermatophyte invasion producing acute linear vesicles"
  ],
  "answer": 0,
  "optionRationales": [
   "The delayed, itchy, exposure-linked streaks support plant allergic contact dermatitis.",
   "Irritant dermatitis is direct injury, not bacterial invasion.",
   "The exposure pattern is more persuasive than a nerve distribution here.",
   "An advancing scaly border would be more typical of tinea."
  ],
  "explanation": "The delayed, itchy, exposure-linked streaks support plant allergic contact dermatitis.",
  "sources": [
   "lesionContact"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-psoriasis",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "scaly-plaques",
  "topic": "Scaly plaques",
  "prompt": "Symmetric sharply outlined thick plaques on elbows and knees accompany scalp scale and nail pitting. Which diagnosis best fits?",
  "options": [
   "Plaque psoriasis",
   "Atopic dermatitis",
   "Tinea corporis",
   "Seborrhoeic dermatitis"
  ],
  "answer": 0,
  "optionRationales": [
   "The extensor plaques and nail changes support psoriasis.",
   "Flexural eczema and an atopic history would fit better.",
   "An advancing annular edge is more typical than symmetric extensor plaques.",
   "Greasy scale in seborrhoeic areas fits better than these thick plaques."
  ],
  "explanation": "The extensor plaques and nail changes support psoriasis.",
  "sources": [
   "psoriasisAAD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-tinea",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "annular-lesions",
  "topic": "Annular lesions",
  "prompt": "An itchy asymmetric ring expands over two weeks. The outer edge is raised and scaly, with relative central clearing. Which diagnosis and sampling site fit best?",
  "options": [
   "Tinea corporis; scrape the active scaly border",
   "Nummular eczema; scrape the clear centre for hyphae",
   "Granuloma annulare; swab the border for bacteria",
   "Plaque psoriasis; culture fluid beneath the scale"
  ],
  "answer": 0,
  "optionRationales": [
   "The advancing border supports tinea; edge scrapings are useful for microscopy.",
   "Nummular eczema is often uniformly inflamed rather than centrally clearing.",
   "Granuloma annulare is usually smooth, without this scale.",
   "Psoriasis is not diagnosed by culturing fluid under scale."
  ],
  "explanation": "The advancing border supports tinea; edge scrapings are useful for microscopy.",
  "sources": [
   "lesionTinea"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-molluscum",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "umbilicated-lesions",
  "topic": "Umbilicated lesions",
  "prompt": "A child has multiple smooth, pearly dome-shaped papules with a central indentation. Which diagnosis is most likely?",
  "options": [
   "Molluscum contagiosum",
   "Verruca vulgaris",
   "Bacterial folliculitis",
   "Closed comedonal acne"
  ],
  "answer": 0,
  "optionRationales": [
   "Central umbilication strongly supports molluscum.",
   "Common warts usually have a rough keratotic surface.",
   "Folliculitis is hair-centred and often pustular.",
   "Comedones are follicular plugs, not typically pearly umbilicated papules."
  ],
  "explanation": "Central umbilication strongly supports molluscum.",
  "sources": [
   "lesionMolluscum"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-wart",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "plantar-lesions",
  "topic": "Plantar lesions",
  "prompt": "A plantar lesion interrupts skin lines and has punctate dark dots after careful paring. Which diagnosis and cause fit best?",
  "options": [
   "Plantar wart; human papillomavirus",
   "Callus; human papillomavirus",
   "Plantar wart; molluscum contagiosum virus",
   "Corn; dermatophyte infection"
  ],
  "answer": 0,
  "optionRationales": [
   "Interrupted skin markings and thrombosed capillary dots support an HPV wart.",
   "Calluses are pressure-related and tend to preserve skin lines.",
   "Molluscum virus causes a different papular eruption.",
   "Corns are pressure lesions, not fungal infections."
  ],
  "explanation": "Interrupted skin markings and thrombosed capillary dots support an HPV wart.",
  "sources": [
   "lesionWart"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-zoster",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "grouped-vesicles",
  "topic": "Grouped vesicles",
  "prompt": "Burning pain precedes grouped vesicles in a unilateral thoracic band, largely respecting the midline. Which diagnosis and organism fit?",
  "options": [
   "Herpes zoster; varicella-zoster virus",
   "Herpes simplex; varicella-zoster virus",
   "Allergic contact dermatitis; herpes simplex virus",
   "Bullous impetigo; Streptococcus pyogenes"
  ],
  "answer": 0,
  "optionRationales": [
   "Pain followed by dermatomal vesicles supports VZV reactivation.",
   "Herpes simplex is caused by HSV, with a different usual recurrence pattern.",
   "Contact dermatitis is not caused by HSV.",
   "Bullous impetigo is linked to toxin-producing S. aureus, not this nerve pattern."
  ],
  "explanation": "Pain followed by dermatomal vesicles supports VZV reactivation.",
  "sources": [
   "lesionZoster"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-scabies",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "pruritic-lesions",
  "topic": "Pruritic lesions",
  "prompt": "An adult has marked nocturnal itch, finger-web and wrist papules with short burrows, and an itchy partner. What is the most likely cause?",
  "options": [
   "Sarcoptes scabiei var. hominis",
   "Pediculus humanus capitis",
   "Trichophyton rubrum",
   "Staphylococcus aureus"
  ],
  "answer": 0,
  "optionRationales": [
   "Burrows, distribution and household itch support scabies mites.",
   "Head lice favour scalp hair, with attached nits.",
   "Tinea more often produces a scaly margin rather than burrows.",
   "Bacteria may secondarily infect scratching but do not cause scabies."
  ],
  "explanation": "Burrows, distribution and household itch support scabies mites.",
  "sources": [
   "lesionScabies"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-reid",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "shaving-associated-lesions",
  "topic": "Shaving-associated lesions",
  "prompt": "Reid has recurrent beard papules after close shaving and visible curved hairs re-entering the skin. Some lesions now have yellow crust. Which interpretation is best?",
  "options": [
   "Pseudofolliculitis with possible secondary bacterial infection",
   "Primary bacterial folliculitis explaining every prior shaving eruption",
   "Tinea barbae established by the presence of pustules",
   "Acne vulgaris established by the presence of scarring"
  ],
  "answer": 0,
  "optionRationales": [
   "Hair re-entry explains the baseline eruption; new crust raises a separate infection question.",
   "The hair-reentry mechanism should not be replaced by an assumed bacterial cause.",
   "Pustules alone do not demonstrate dermatophytes.",
   "Scarring is nonspecific; comedones would better support acne."
  ],
  "explanation": "Hair re-entry explains the baseline eruption; new crust raises a separate infection question.",
  "sources": [
   "lesionPfb",
   "lesionFolliculitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-follicle",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "follicular-lesions",
  "topic": "Follicular lesions",
  "prompt": "Several small pustules each have a hair emerging from their centre. There are no comedones or burrows. Which diagnosis is most likely?",
  "options": [
   "Folliculitis",
   "Molluscum contagiosum",
   "Comedonal acne",
   "Scabies"
  ],
  "answer": 0,
  "optionRationales": [
   "Hair-centred pustules support follicular inflammation, often infectious.",
   "Molluscum produces umbilicated papules rather than hair-centred pustules.",
   "The defining comedones are absent.",
   "Burrows and characteristic itch/distribution would favour scabies."
  ],
  "explanation": "Hair-centred pustules support follicular inflammation, often infectious.",
  "sources": [
   "lesionFolliculitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-paul",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "progressive-painful-skin-lesion",
  "topic": "Progressive painful skin lesion",
  "prompt": "After a minor ankle cut, Paul develops rapidly worsening pain extending beyond visible redness, fever and systemic illness. What is the priority?",
  "options": [
   "Emergency assessment for necrotizing soft-tissue infection",
   "Routine reassessment after a trial of topical antibiotic",
   "Outpatient fungal scraping before referral",
   "Compression treatment for presumed venous dermatitis"
  ],
  "answer": 0,
  "optionRationales": [
   "Disproportionate pain and toxicity require urgent escalation.",
   "This progression is too severe for a topical trial and delayed review.",
   "The tempo and systemic illness are not typical of superficial tinea.",
   "An acute toxic presentation after injury is not explained by chronic venous dermatitis."
  ],
  "explanation": "Disproportionate pain and toxicity require urgent escalation.",
  "sources": [
   "lesionNecrotizing"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-melanoma",
  "course": "AHAD",
  "module": 4,
  "system": "skin",
  "condition": "changing-lesion",
  "topic": "Changing lesion",
  "prompt": "Mrs. Tremblay has an enlarging irregular 8-mm pink lesion with erosion. Which reasoning best supports further assessment?",
  "options": [
   "Evolution and irregularity warrant assessment even without dark pigmentation",
   "A pink lesion favours a benign diagnosis sufficiently to observe without assessment",
   "A diameter under 10 mm favours a benign diagnosis sufficiently to defer biopsy assessment",
   "Erosion identifies basal cell carcinoma sufficiently to exclude melanoma"
  ],
  "answer": 0,
  "optionRationales": [
   "Melanoma may be amelanotic; a changing suspicious lesion needs diagnostic evaluation.",
   "Colour alone cannot safely classify the lesion.",
   "A size threshold cannot exclude malignancy.",
   "Erosion is not specific enough to establish one cancer type."
  ],
  "explanation": "Melanoma may be amelanotic; a changing suspicious lesion needs diagnostic evaluation.",
  "sources": [
   "melanomaAAD"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-iris",
  "course": "AHAD",
  "module": 4,
  "system": "skin",
  "condition": "pressure-related-skin-injury",
  "topic": "Pressure-related skin injury",
  "prompt": "Iris has a shallow sacral wound with exposed moist pink dermis, without slough, adipose or purple discoloration. Which classification fits best?",
  "options": [
   "Stage 2 pressure injury",
   "Stage 3 pressure injury",
   "Deep tissue pressure injury",
   "Unstageable pressure injury"
  ],
  "answer": 0,
  "optionRationales": [
   "Partial-thickness skin loss with exposed dermis fits Stage 2.",
   "Stage 3 involves full-thickness skin loss.",
   "Persistent deep red/maroon/purple change or blood-filled blister would support deep tissue injury.",
   "Obscuring slough or eschar prevents depth assessment in an unstageable wound."
  ],
  "explanation": "Partial-thickness skin loss with exposed dermis fits Stage 2.",
  "sources": [
   "lesionPressure"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-impetigo-set",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "nonbullous-impetigo",
  "topic": "Nonbullous impetigo",
  "prompt": "Which organism set best represents the usual bacterial causes of nonbullous impetigo?",
  "options": [
   "Staphylococcus aureus; Streptococcus pyogenes",
   "Staphylococcus aureus; Streptococcus agalactiae",
   "Streptococcus pneumoniae; Haemophilus influenzae",
   "Pseudomonas aeruginosa; Moraxella catarrhalis"
  ],
  "answer": 0,
  "optionRationales": [
   "Either S. aureus or group A streptococci, or both, may be involved.",
   "Group B streptococcus is not the usual partner in this syndrome.",
   "These are more characteristic respiratory pathogens.",
   "This combination is not the usual impetigo pathogen set."
  ],
  "explanation": "Either S. aureus or group A streptococci, or both, may be involved.",
  "sources": [
   "lesionImpetigoCDC"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-bullous-agent",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "bullous-impetigo",
  "topic": "Bullous impetigo",
  "prompt": "A young child develops superficial flaccid bullae that rupture with a collarette. Which organism-mechanism pairing best fits bullous impetigo?",
  "options": [
   "Staphylococcus aureus; exfoliative toxin",
   "Streptococcus pyogenes; exfoliative toxin",
   "Staphylococcus aureus; dermatophyte keratin invasion",
   "Pseudomonas aeruginosa; varicella reactivation"
  ],
  "answer": 0,
  "optionRationales": [
   "Toxin-producing S. aureus causes bullous impetigo.",
   "GAS can cause nonbullous impetigo, but this toxin pairing is incorrect.",
   "Dermatophyte invasion is fungal, not the mechanism here.",
   "Varicella reactivation is caused by VZV, not Pseudomonas."
  ],
  "explanation": "Toxin-producing S. aureus causes bullous impetigo.",
  "sources": [
   "lesionImpetigoCDC"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-cellulitis-agent",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "nonpurulent-cellulitis",
  "topic": "Nonpurulent cellulitis",
  "prompt": "Typical nonpurulent cellulitis follows a skin break. There is no abscess, drainage, bite or water exposure. Which organism group deserves particular empirical consideration?",
  "options": [
   "Beta-hemolytic streptococci",
   "Dermatophytes",
   "Nontuberculous mycobacteria",
   "Anaerobic oral flora"
  ],
  "answer": 0,
  "optionRationales": [
   "Streptococci are important in ordinary nonpurulent cellulitis; S. aureus can also contribute.",
   "Dermatophytes can create a portal of entry but are not the usual cellulitis pathogen.",
   "Specific exposures and a different course would increase this concern.",
   "A bite or oral contamination would change this probability."
  ],
  "explanation": "Streptococci are important in ordinary nonpurulent cellulitis; S. aureus can also contribute.",
  "sources": [
   "lesionCellulitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-abscess-agent",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "purulent-lesion",
  "topic": "Purulent lesion",
  "prompt": "A fluctuant purulent abscess replaces a previously nonpurulent presentation. Which organism emphasis is most appropriate?",
  "options": [
   "Staphylococcus aureus, including MRSA when epidemiologically relevant",
   "Streptococcus pneumoniae, including penicillin-resistant strains",
   "Haemophilus influenzae, including beta-lactamase producers",
   "Moraxella catarrhalis, including beta-lactamase producers"
  ],
  "answer": 0,
  "optionRationales": [
   "Purulence raises the relevance of S. aureus; drainage and culture decisions also matter.",
   "A respiratory resistance pattern does not make this the usual abscess pathogen.",
   "This is a respiratory pathogen rather than the usual cutaneous abscess organism.",
   "This is not the usual organism emphasis for a skin abscess."
  ],
  "explanation": "Purulence raises the relevance of S. aureus; drainage and culture decisions also matter.",
  "sources": [
   "mums2024",
   "lesionCellulitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-hot-tub",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "exposure-related-folliculitis",
  "topic": "Exposure-related folliculitis",
  "prompt": "Follicular papules and pustules appear after an inadequately maintained hot tub, prominent under swimwear. Which organism is the classic association?",
  "options": [
   "Pseudomonas aeruginosa",
   "Staphylococcus aureus",
   "Streptococcus pyogenes",
   "Candida albicans"
  ],
  "answer": 0,
  "optionRationales": [
   "The hot-tub exposure shifts the classic association to Pseudomonas.",
   "S. aureus is common in ordinary bacterial folliculitis, but the exposure matters.",
   "GAS is not the classic hot-tub folliculitis cause.",
   "Candida is not the classic organism in this exposure pattern."
  ],
  "explanation": "The hot-tub exposure shifts the classic association to Pseudomonas.",
  "sources": [
   "lesionFolliculitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-ordinary-folliculitis",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "bacterial-folliculitis",
  "topic": "Bacterial folliculitis",
  "prompt": "Without hot-tub exposure, which bacterium most commonly causes ordinary superficial bacterial folliculitis?",
  "options": [
   "Staphylococcus aureus",
   "Pseudomonas aeruginosa",
   "Streptococcus pneumoniae",
   "Pasteurella multocida"
  ],
  "answer": 0,
  "optionRationales": [
   "S. aureus is the leading usual bacterial cause.",
   "This becomes particularly relevant with hot-tub exposure.",
   "A respiratory organism is not the usual folliculitis cause.",
   "Pasteurella is more associated with animal bites."
  ],
  "explanation": "S. aureus is the leading usual bacterial cause.",
  "sources": [
   "lesionFolliculitis"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-dermatophyte-set",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "dermatophytes",
  "topic": "Dermatophytes",
  "prompt": "Which set contains the three classic dermatophyte genera associated with ringworm?",
  "options": [
   "Trichophyton; Microsporum; Epidermophyton",
   "Trichophyton; Candida; Malassezia",
   "Microsporum; Aspergillus; Candida",
   "Epidermophyton; Cryptococcus; Malassezia"
  ],
  "answer": 0,
  "optionRationales": [
   "These are the classic dermatophyte genera.",
   "Candida and Malassezia are yeasts rather than dermatophyte genera.",
   "Aspergillus and Candida do not complete the dermatophyte set.",
   "Cryptococcus and Malassezia are not dermatophyte genera."
  ],
  "explanation": "These are the classic dermatophyte genera.",
  "sources": [
   "lesionRingwormCDC"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-molluscum-virus",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "viral-papules",
  "topic": "Viral papules",
  "prompt": "Which virus causes molluscum contagiosum?",
  "options": [
   "Molluscum contagiosum virus, a poxvirus",
   "Human papillomavirus, a papillomavirus",
   "Varicella-zoster virus, a herpesvirus",
   "Herpes simplex virus, a herpesvirus"
  ],
  "answer": 0,
  "optionRationales": [
   "Molluscum is caused by its named poxvirus.",
   "HPV causes warts.",
   "VZV causes varicella and zoster.",
   "HSV produces a different, often grouped vesicular eruption."
  ],
  "explanation": "Molluscum is caused by its named poxvirus.",
  "sources": [
   "lesionMolluscum"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-wart-virus",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "viral-keratotic-lesions",
  "topic": "Viral keratotic lesions",
  "prompt": "Which virus family-agent pairing best fits common cutaneous warts?",
  "options": [
   "Papillomaviridae; human papillomavirus",
   "Poxviridae; molluscum contagiosum virus",
   "Herpesviridae; herpes simplex virus",
   "Herpesviridae; varicella-zoster virus"
  ],
  "answer": 0,
  "optionRationales": [
   "HPV causes common warts.",
   "Molluscum typically produces smooth umbilicated papules.",
   "HSV is associated with vesicles rather than ordinary warts.",
   "VZV causes chickenpox and shingles."
  ],
  "explanation": "HPV causes common warts.",
  "sources": [
   "lesionWart"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-contact-cause",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "noninfectious-eruption",
  "topic": "Noninfectious eruption",
  "prompt": "Which cause best explains an itchy vesicular eruption after poison ivy exposure?",
  "options": [
   "Delayed immune reaction to urushiol",
   "Dermatophyte invasion of exposed skin",
   "Exfoliative toxin from Staphylococcus aureus",
   "Reactivation of varicella-zoster virus"
  ],
  "answer": 0,
  "optionRationales": [
   "Plant allergic contact dermatitis is an immune response, not a pathogen-driven rash.",
   "A fungal advancing scaly edge would fit better.",
   "That mechanism causes bullous impetigo.",
   "A painful dermatomal distribution would fit better."
  ],
  "explanation": "Plant allergic contact dermatitis is an immune response, not a pathogen-driven rash.",
  "sources": [
   "lesionContact"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-pfb-cause",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "noninfectious-follicular-inflammation",
  "topic": "Noninfectious follicular inflammation",
  "prompt": "Which mechanism best explains pseudofolliculitis barbae before secondary infection occurs?",
  "options": [
   "Curved shaved hairs re-enter skin and trigger inflammation",
   "Staphylococcus aureus invades every affected follicle",
   "Trichophyton species invade every affected hair shaft",
   "Sarcoptes mites burrow along the beard margin"
  ],
  "answer": 0,
  "optionRationales": [
   "Hair re-entry triggers a foreign-body inflammatory response.",
   "Bacterial superinfection can occur but is not the defining mechanism.",
   "Tinea barbae is a separate diagnostic possibility.",
   "Scabies does not explain the close-shaving hair-reentry pattern."
  ],
  "explanation": "Hair re-entry triggers a foreign-body inflammatory response.",
  "sources": [
   "lesionPfb"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-seborrhoeic",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "scalp-and-facial-scale",
  "topic": "Scalp and facial scale",
  "prompt": "Greasy scale involves the scalp, eyebrows and nasolabial folds. Which organism association best fits seborrhoeic dermatitis?",
  "options": [
   "Malassezia species",
   "Microsporum species",
   "Streptococcus pyogenes",
   "Sarcoptes scabiei"
  ],
  "answer": 0,
  "optionRationales": [
   "Malassezia yeast is associated with this inflammatory condition; it is not a simple contagious infection.",
   "Microsporum is a dermatophyte associated with tinea.",
   "GAS does not explain this typical distribution and greasy scale.",
   "Scabies has a different itch and distribution pattern."
  ],
  "explanation": "Malassezia yeast is associated with this inflammatory condition; it is not a simple contagious infection.",
  "sources": [
   "lesionSeborrhoeic"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "organisms",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-aom-set",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "middle-ear-pathogens",
  "topic": "Middle-ear pathogens",
  "prompt": "Which complete set best represents the usual major bacterial pathogens in pediatric acute otitis media?",
  "options": [
   "Streptococcus pneumoniae; nontypeable Haemophilus influenzae; Moraxella catarrhalis",
   "Streptococcus pneumoniae; Haemophilus influenzae type b; Pseudomonas aeruginosa",
   "Staphylococcus aureus; Pseudomonas aeruginosa; Moraxella catarrhalis",
   "Streptococcus pyogenes; Staphylococcus aureus; Haemophilus influenzae type b"
  ],
  "answer": 0,
  "optionRationales": [
   "These are the major usual bacterial AOM organisms.",
   "Nontypeable H. influenzae and M. catarrhalis better complete the set.",
   "S. aureus and Pseudomonas fit external-ear infection better.",
   "This is not the usual leading AOM set."
  ],
  "explanation": "These are the major usual bacterial AOM organisms.",
  "sources": [
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-oe-set",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "external-ear-pathogens",
  "topic": "External-ear pathogens",
  "prompt": "Which bacterial pair is most characteristic of uncomplicated acute otitis externa?",
  "options": [
   "Pseudomonas aeruginosa; Staphylococcus aureus",
   "Streptococcus pneumoniae; Moraxella catarrhalis",
   "Nontypeable Haemophilus influenzae; Streptococcus pneumoniae",
   "Streptococcus pyogenes; Streptococcus agalactiae"
  ],
  "answer": 0,
  "optionRationales": [
   "Pseudomonas and S. aureus are key external-canal bacteria.",
   "This pair fits middle-ear infection better.",
   "These are important AOM organisms, not the leading external-canal pair.",
   "GAS and GBS do not form the characteristic otitis externa pair."
  ],
  "explanation": "Pseudomonas and S. aureus are key external-canal bacteria.",
  "sources": [
   "mums2024"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-ear-eye",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "otitis-conjunctivitis-association",
  "topic": "Otitis-conjunctivitis association",
  "prompt": "A child has AOM together with purulent conjunctivitis. Which organism becomes especially important?",
  "options": [
   "Nontypeable Haemophilus influenzae",
   "Haemophilus influenzae type b",
   "Streptococcus agalactiae",
   "Pseudomonas aeruginosa"
  ],
  "answer": 0,
  "optionRationales": [
   "This syndrome has an important association with nontypeable H. influenzae.",
   "Do not substitute type b for nontypeable strains.",
   "GBS is not the classic cause of this syndrome.",
   "Pseudomonas is more characteristic of external-canal infection."
  ],
  "explanation": "This syndrome has an important association with nontypeable H. influenzae.",
  "sources": [
   "aomOrganismsCPS"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-gas",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "pharyngitis-organism",
  "topic": "Pharyngitis organism",
  "prompt": "Which species is meant by group A streptococcal pharyngitis?",
  "options": [
   "Streptococcus pyogenes",
   "Streptococcus agalactiae",
   "Streptococcus pneumoniae",
   "Staphylococcus aureus"
  ],
  "answer": 0,
  "optionRationales": [
   "S. pyogenes is the group A streptococcus.",
   "S. agalactiae is group B streptococcus.",
   "Pneumococcus is a different organism.",
   "S. aureus is a staphylococcus, not GAS."
  ],
  "explanation": "S. pyogenes is the group A streptococcus.",
  "sources": [
   "gasAgeCDC"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-child-eye",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "pediatric-bacterial-conjunctivitis",
  "topic": "Pediatric bacterial conjunctivitis",
  "prompt": "For routine bacterial conjunctivitis in a child, which organism set best fits the usual age-related pattern?",
  "options": [
   "Haemophilus influenzae; Streptococcus pneumoniae; Moraxella catarrhalis",
   "Neisseria gonorrhoeae; Chlamydia trachomatis; Pseudomonas aeruginosa",
   "Streptococcus agalactiae; Pasteurella multocida; Bordetella pertussis",
   "Candida albicans; Trichophyton rubrum; Malassezia species"
  ],
  "answer": 0,
  "optionRationales": [
   "These are important routine pediatric bacterial causes.",
   "These agents need specific clinical contexts rather than defining the usual routine set.",
   "This is not a usual bacterial conjunctivitis set.",
   "This fungal set does not represent ordinary pediatric bacterial conjunctivitis."
  ],
  "explanation": "These are important routine pediatric bacterial causes.",
  "sources": [
   "eyeOrganismsAAO"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-adult-eye",
  "course": "AHAD",
  "module": 2,
  "system": "heent",
  "condition": "adult-bacterial-conjunctivitis",
  "topic": "Adult bacterial conjunctivitis",
  "prompt": "Compared with ordinary pediatric bacterial conjunctivitis, which organisms are particularly prominent in adults?",
  "options": [
   "Staphylococcal species",
   "Dermatophyte species",
   "Bordetella species",
   "Pasteurella species"
  ],
  "answer": 0,
  "optionRationales": [
   "Staphylococci are prominent adult bacterial causes; this does not imply all red eyes are bacterial.",
   "Dermatophytes are skin/hair/nail fungi, not the routine adult bacterial cause.",
   "Bordetella is associated with pertussis rather than this syndrome.",
   "Animal exposure would need specific consideration for Pasteurella."
  ],
  "explanation": "Staphylococci are prominent adult bacterial causes; this does not imply all red eyes are bacterial.",
  "sources": [
   "eyeOrganismsAAO"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "heent",
  "examSkill": "organism"
 },
 {
  "id": "ahad-lesions-20261018-infant-scabies",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "age-related-distribution",
  "topic": "Age-related distribution",
  "prompt": "Which distribution remains compatible with scabies in an infant, even though it is less typical in an otherwise healthy adult?",
  "options": [
   "Scalp, face, palms and soles",
   "Only a unilateral thoracic dermatome",
   "Only sharply bordered extensor plaques",
   "Only annular plaques with advancing scale"
  ],
  "answer": 0,
  "optionRationales": [
   "Infants can have head, neck, palm and sole involvement.",
   "This describes a zoster-like distribution.",
   "This favours psoriasis.",
   "This favours dermatophyte infection."
  ],
  "explanation": "Infants can have head, neck, palm and sole involvement.",
  "sources": [
   "lesionScabies"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 },
 {
  "id": "ahad-lesions-20261018-bacterial-proof",
  "course": "AHAD",
  "module": 3,
  "system": "skin",
  "condition": "crusted-lesions-and-uncertainty",
  "topic": "Crusted lesions and uncertainty",
  "prompt": "A honey-crusted erosion is clinically compatible with impetigo. Which conclusion is best supported by the appearance?",
  "options": [
   "Impetigo is plausible, but appearance cannot identify the bacterial species",
   "Staphylococcus aureus is confirmed and streptococci are excluded",
   "Streptococcus pyogenes is confirmed and staphylococci are excluded",
   "Methicillin resistance is established by yellow rather than brown crust"
  ],
  "answer": 0,
  "optionRationales": [
   "Morphology supports a syndrome, not species identification or susceptibility.",
   "Nonbullous impetigo may involve either organism or both.",
   "Crust colour cannot establish GAS and exclude S. aureus.",
   "Resistance requires appropriate microbiologic or epidemiologic evidence."
  ],
  "explanation": "Morphology supports a syndrome, not species identification or susceptibility.",
  "sources": [
   "lesionImpetigoCDC"
  ],
  "sourceNote": "Original AHAD study question; linked references support the clinical findings and organism associations. Appearance suggests a diagnosis but does not establish a species or susceptibility.",
  "practiceLabel": "Lesions & organisms",
  "drillGroup": "ahadLesions",
  "lesionGroup": "lesions",
  "examSkill": "recognition"
 }
];
PRACTICE.push(...AHAD_LESION_MCQ);
