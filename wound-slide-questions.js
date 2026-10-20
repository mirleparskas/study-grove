'use strict';
Object.assign(PRACTICE_SOURCES,{
 "dfuSlidesOct20": {
  "title": "Treatment Diabetic Foot Ulcer: your 10-slide course presentation",
  "url": "sources/Treatment Diabetic Foot Ulcer.pptx"
 },
 "arterialSlidesOct20": {
  "title": "Treatment Arterial Disease: your 11-slide course presentation",
  "url": "sources/Treatment Arterial Disease.pptx"
 },
 "venousSlidesOct20": {
  "title": "Treatment Venous Ulcer: your 16-slide course presentation",
  "url": "sources/Treatment Venous Ulcer .pptx"
 },
 "dfuClinicalOct20": {
  "title": "IWGDF/IDSA: diabetic foot infection, clinical diagnosis and cultures",
  "url": "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/"
 },
 "padClinicalOct20": {
  "title": "2024 multisociety PAD guideline: ACC summary",
  "url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/09/15/00/2024-guideline-for-lower-extremity-pad"
 },
 "footCareOct20": {
  "title": "Diabetes Canada: foot-care guideline",
  "url": "https://guidelines.diabetes.ca/GuideLines/media/Docs/cpg/Ch32-Foot-Care.pdf"
 }
});
const WOUND_SLIDE_MCQ=[
 {
  "id": "thera-wound-slides-20261020-offload",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A neuropathic plantar ulcer persists despite an appropriate dressing. The patient walks on it all day and has not been assessed for offloading. Which addition most directly addresses the continuing mechanical problem?",
  "options": [
   "Assess and implement appropriate pressure offloading",
   "Switch to a more absorbent dressing without changing loading",
   "Start an antibiotic despite no clinical infection",
   "Increase cleansing frequency while retaining the same footwear"
  ],
  "answer": 0,
  "explanation": "Pressure relief addresses repetitive plantar loading; also assess perfusion and infection.",
  "optionRationales": [
   "Pressure relief addresses repetitive plantar loading; also assess perfusion and infection.",
   "Absorbency alone does not remove the mechanical cause.",
   "Antibiotics do not treat pressure in an uninfected wound.",
   "Cleansing does not substitute for offloading."
  ],
  "sources": [
   "dfuSlidesOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2-3. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-uninfected",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A diabetic plantar ulcer has no spreading erythema, warmth, purulence or systemic illness. A surface swab grows bacteria. Which decision is best?",
  "options": [
   "Assess the wound clinically and address pressure/perfusion; do not treat colonization alone",
   "Select an oral antibiotic solely from the positive swab",
   "Use a broader antibiotic because diabetes establishes clinical infection",
   "Treat until repeat surface cultures become negative"
  ],
  "answer": 0,
  "explanation": "A positive surface culture does not establish infection; clinical assessment guides treatment.",
  "optionRationales": [
   "A positive surface culture does not establish infection; clinical assessment guides treatment.",
   "Colonization is common and is not an antibiotic indication by itself.",
   "Diabetes raises risk but does not make every ulcer infected.",
   "Culture eradication is not the goal for a clinically uninfected ulcer."
  ],
  "sources": [
   "dfuSlidesOct20",
   "dfuClinicalOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-sample",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A diabetic foot wound is clinically infected, and a culture is indicated. Which sampling approach is preferred over a routine superficial swab?",
  "options": [
   "Aseptically obtained tissue after appropriate cleansing/debridement",
   "Swabbing pooled drainage before cleaning",
   "Swabbing the surrounding intact skin",
   "Using a sample from the patient's shoe insole"
  ],
  "answer": 0,
  "explanation": "Tissue sampling better represents the infected wound; choose a safe method for the clinical setting.",
  "optionRationales": [
   "Tissue sampling better represents the infected wound; choose a safe method for the clinical setting.",
   "Surface drainage can include colonizers.",
   "Intact surrounding skin does not sample the infected tissue.",
   "Shoe flora do not establish the wound pathogen."
  ],
  "sources": [
   "dfuSlidesOct20",
   "dfuClinicalOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-ischemia-debride",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A diabetic toe has dry necrotic tissue and marked ischemic findings. There is no spreading infection or systemic toxicity. Which priority best matches the slide's debridement distinction?",
  "options": [
   "Assess perfusion and obtain vascular/wound advice before routine debridement",
   "Sharply remove all dry eschar before considering perfusion",
   "Use aggressive home callus paring to stimulate bleeding",
   "Start high compression before reassessing the toe"
  ],
  "answer": 0,
  "explanation": "Critical ischemia changes tissue-management safety; the slide separates it from routine neuropathic-wound debridement.",
  "optionRationales": [
   "Critical ischemia changes tissue-management safety; the slide separates it from routine neuropathic-wound debridement.",
   "Debridement without assessing ischemia can create a nonhealing wound.",
   "Home paring risks injury and is not qualified wound care.",
   "High compression is not appropriate for unassessed severe ischemia."
  ],
  "sources": [
   "dfuSlidesOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-probe-bone",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A deep diabetic ulcer has a tract through which a trained clinician can palpate hard tissue consistent with bone. Which interpretation is strongest?",
  "options": [
   "Possible osteomyelitis requiring an appropriate diagnostic work-up",
   "Colonization established without need for deeper assessment",
   "A finding that reliably excludes bone infection if pain is absent",
   "A reason to diagnose venous ulceration from the tract alone"
  ],
  "answer": 0,
  "explanation": "A positive probe-to-bone finding raises concern; interpret it with the examination, imaging and laboratory findings.",
  "optionRationales": [
   "A positive probe-to-bone finding raises concern; interpret it with the examination, imaging and laboratory findings.",
   "A deep tract with possible bone involvement requires more than colonization assessment.",
   "Neuropathy may reduce pain; absence of pain is not reassuring.",
   "The tract does not establish venous etiology."
  ],
  "sources": [
   "dfuSlidesOct20",
   "dfuClinicalOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-renal-monitor",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "The slide recommends monitoring renal end-organ effects in diabetes. Which pair assesses albumin loss and filtration rather than glucose control alone?",
  "options": [
   "Urine albumin-creatinine ratio and serum-creatinine-based eGFR",
   "HbA1c and fasting glucose",
   "LDL-C and triglycerides",
   "ECG and ankle circumference"
  ],
  "answer": 0,
  "explanation": "ACR and eGFR assess complementary aspects of kidney disease.",
  "optionRationales": [
   "ACR and eGFR assess complementary aspects of kidney disease.",
   "These measure glycemia rather than both albumin loss and filtration.",
   "These assess lipids rather than kidney function.",
   "Neither substitutes for the specified renal measures."
  ],
  "sources": [
   "dfuSlidesOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 6. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-team",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "A patient needs help with recurrent plantar pressure, foot care and nutrition. Which team plan best matches the deck?",
  "options": [
   "Orthotics/offloading assessment, qualified foot care and dietitian/diabetes support",
   "Routine dressing changes alone with footwear review deferred until healing",
   "Antibiotic review alone with callus removal by the patient",
   "Vascular imaging alone with no assessment of loading or self-care"
  ],
  "answer": 0,
  "explanation": "The deck combines pressure management, foot care and metabolic/nutrition support.",
  "optionRationales": [
   "The deck combines pressure management, foot care and metabolic/nutrition support.",
   "Repeated loading and self-care needs remain unaddressed.",
   "Antibiotic review does not replace pressure or qualified callus care.",
   "Perfusion matters, but the plan also needs mechanical and self-care assessment."
  ],
  "sources": [
   "dfuSlidesOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 3,9. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-prevention",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "prompt": "Which set matches the four prevention categories in the slide diagram?",
  "options": [
   "Patient education; foot skin/toenail care; protective footwear; selected protective surgery",
   "Patient education; prophylactic antibiotics; protective footwear; routine strong compression",
   "Foot skin/toenail care; bed rest; topical antiseptic; routine protective surgery for everyone",
   "Daily antibiotics; nail removal; compression; avoidance of all exercise"
  ],
  "answer": 0,
  "explanation": "These are the diagram's categories; surgery is selected for an appropriate indication.",
  "optionRationales": [
   "These are the diagram's categories; surgery is selected for an appropriate indication.",
   "Antibiotics and routine strong compression are not the diagram's four essentials.",
   "Bed rest and antiseptic use do not complete that set; surgery is not universal.",
   "This replaces preventive foot care with inappropriate blanket measures."
  ],
  "sources": [
   "dfuSlidesOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 5. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-acute-ischemia",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "Sudden severe leg pain, pallor, pulselessness and new paresthesia develop over two hours. Which action takes priority?",
  "options": [
   "Emergency transfer for acute limb-ischemia assessment and urgent revascularization planning",
   "Outpatient CTA next week before deciding whether to refer",
   "Start a walking program and reassess claudication in one month",
   "Apply a low-compression wrap and review pain the next day"
  ],
  "answer": 0,
  "explanation": "An acutely threatened limb requires urgent specialist/emergency care; analgesia and anticoagulation are arranged by the treating team as indicated.",
  "optionRationales": [
   "An acutely threatened limb requires urgent specialist/emergency care; analgesia and anticoagulation are arranged by the treating team as indicated.",
   "Delayed outpatient imaging can delay limb-saving treatment.",
   "Structured exercise is for an appropriate stable presentation, not acute ischemia.",
   "Compression is not an acute-ischemia treatment."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 6,9. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-clti",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "A patient has ischemic rest pain and a nonhealing distal ulcer. Which intervention best addresses inadequate blood flow when feasible?",
  "options": [
   "Vascular assessment for revascularization",
   "Changing dressing brands while deferring vascular assessment",
   "Compression chosen from edema severity alone",
   "Antibiotics until the ulcer closes despite no infection"
  ],
  "answer": 0,
  "explanation": "The deck identifies revascularization as central to limb-threatening ischemia management.",
  "optionRationales": [
   "The deck identifies revascularization as central to limb-threatening ischemia management.",
   "Dressings do not restore arterial inflow.",
   "Edema does not establish compression safety.",
   "Antibiotics do not restore blood flow or treat an uninfected ischemic wound."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 5. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-abpi-low",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "An ulcer patient has ABPI 0.46. Which compression decision follows the supplied arterial slide?",
  "options": [
   "Avoid compression and obtain vascular assessment",
   "Apply standard 35-40 mmHg compression",
   "Apply 30-40 mmHg because the ankle is swollen",
   "Use the same compression as an ABPI of 0.9"
  ],
  "answer": 0,
  "explanation": "The slide advises avoiding compression below 0.50; interpret symptoms and perfusion urgently as appropriate.",
  "optionRationales": [
   "The slide advises avoiding compression below 0.50; interpret symptoms and perfusion urgently as appropriate.",
   "The index is below the slide's safety boundary.",
   "Swelling does not cancel significant arterial impairment.",
   "These perfusion states should not receive an identical automatic plan."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 10. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-abpi-mixed",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "A venous-appearing ulcer has ABPI 0.65. Which approach best follows the arterial slide's mixed-disease guidance?",
  "options": [
   "Vascular/wound consultation and individualized consideration of lower compression",
   "Routine full compression because ABPI exceeds 0.50",
   "Classify perfusion as normal and defer arterial assessment",
   "Reject all future compression even after successful revascularization"
  ],
  "answer": 0,
  "explanation": "The 0.50-0.80 range requires careful assessment; the slide discusses lower compression with consultation.",
  "optionRationales": [
   "The 0.50-0.80 range requires careful assessment; the slide discusses lower compression with consultation.",
   "A threshold alone does not authorize routine full compression.",
   "0.65 is not a normal perfusion result.",
   "Successful revascularization can change suitability."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 10. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-postbypass",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "After lower-extremity bypass, adequate blood flow is confirmed and the vascular team selects compression for edema. Which range is described in the supplied arterial slide?",
  "options": [
   "18-30 mmHg",
   "5-10 mmHg",
   "35-50 mmHg",
   "50-60 mmHg"
  ],
  "answer": 0,
  "explanation": "The slide specifies lower compression of 18-30 mmHg after bypass, with adequate flow and an individualized plan.",
  "optionRationales": [
   "The slide specifies lower compression of 18-30 mmHg after bypass, with adequate flow and an individualized plan.",
   "This is below the stated range.",
   "This exceeds the specified lower range.",
   "This is well above the stated range."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 10. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-antiplatelet",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "According to the supplied arterial slide, which drug-dose pair is listed for clopidogrel?",
  "options": [
   "75 mg PO daily",
   "75 mg PO twice daily",
   "325 mg PO daily",
   "400 mg PO three times daily"
  ],
  "answer": 0,
  "explanation": "The slide lists clopidogrel 75 mg daily; indication and bleeding-risk review still matter.",
  "optionRationales": [
   "The slide lists clopidogrel 75 mg daily; indication and bleeding-risk review still matter.",
   "This doubles the listed daily schedule.",
   "325 mg belongs to the slide's aspirin range rather than its clopidogrel entry.",
   "400 mg TID is the slide's pentoxifylline entry, not clopidogrel."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 4. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-pentox-conflict",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "The older course slide lists pentoxifylline 400 mg TID for claudication. What does the named 2024 multisociety PAD guideline comparison say?",
  "options": [
   "Pentoxifylline is not recommended for claudication because benefit has not been established",
   "Pentoxifylline is preferred over structured exercise for every patient",
   "Pentoxifylline restores an acutely occluded artery and replaces urgent referral",
   "Pentoxifylline is an antiplatelet substitute at 75 mg daily"
  ],
  "answer": 0,
  "explanation": "Keep the historical slide statement separate from this current-guideline comparison.",
  "optionRationales": [
   "Keep the historical slide statement separate from this current-guideline comparison.",
   "The guideline does not make that recommendation.",
   "Acute limb ischemia requires urgent assessment and cannot be treated this way.",
   "The class and dose have been confused with clopidogrel."
  ],
  "sources": [
   "arterialSlidesOct20",
   "padClinicalOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 4. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-arterial-teach",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "prompt": "Which education plan best matches stable arterial disease while also preparing the patient to identify an emergency?",
  "options": [
   "Smoking cessation, risk-factor control, foot checks and appropriate exercise; urgent help for sudden pain/coldness/sensory or motor change",
   "Leg elevation above the heart for all ischemic rest pain and immediate strong compression",
   "Stop walking permanently and rely on dressings to improve arterial inflow",
   "Use heating pads on numb feet and wait for all six ischemic signs before seeking help"
  ],
  "answer": 0,
  "explanation": "The slide combines cardiovascular-risk measures and foot care with recognition of acute ischemia.",
  "optionRationales": [
   "The slide combines cardiovascular-risk measures and foot care with recognition of acute ischemia.",
   "These blanket venous-style measures can be inappropriate in ischemia.",
   "Stable PAD management can include structured exercise; dressings do not improve inflow.",
   "Heating numb feet can injure them, and emergencies need not show every sign."
  ],
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 8-9. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-coban-pressure",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "Which product-pressure-ABPI pairing reproduces the supplied venous slide, assuming clinical suitability has been established?",
  "options": [
   "Coban 2 Lite: 25-30 mmHg, ABPI at least 0.5; Coban 2: 35-40 mmHg, ABPI at least 0.8",
   "Coban 2 Lite: 35-40 mmHg, ABPI at least 0.5; Coban 2: 25-30 mmHg, ABPI at least 0.8",
   "Coban 2 Lite: 25-30 mmHg, ABPI below 0.5; Coban 2: 35-40 mmHg, ABPI below 0.8",
   "Both products: 35-40 mmHg, regardless of ABPI"
  ],
  "answer": 0,
  "explanation": "These are slide-specific product entries, not permission to skip a vascular assessment.",
  "optionRationales": [
   "These are slide-specific product entries, not permission to skip a vascular assessment.",
   "The product pressure ranges are reversed.",
   "The threshold directions are reversed.",
   "The slide distinguishes products and perfusion thresholds."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 7. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-profore",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "Which range and wear interval does the slide assign to the Profore four-layer system?",
  "options": [
   "30-40 mmHg for up to 7 days",
   "18-30 mmHg for up to 7 days",
   "25-30 mmHg for up to 14 days",
   "35-50 mmHg for up to 14 days"
  ],
  "answer": 0,
  "explanation": "This is the selected system's slide description, with monitoring and patient-specific suitability still required.",
  "optionRationales": [
   "This is the selected system's slide description, with monitoring and patient-specific suitability still required.",
   "This range appears in the arterial post-bypass context, not this entry.",
   "Both the range and interval differ from the Profore entry.",
   "Both the range and interval exceed the specified entry."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 8. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-compression-mechanism",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "What is the principal purpose of compression in appropriate venous disease?",
  "options": [
   "Reduce ambulatory venous pressure and support calf-pump function",
   "Increase arterial occlusion to divert blood toward the wound",
   "Eradicate wound organisms without other infection assessment",
   "Replace all calf-muscle movement with permanent immobility"
  ],
  "answer": 0,
  "explanation": "The slide links compression with improved venous hemodynamics.",
  "optionRationales": [
   "The slide links compression with improved venous hemodynamics.",
   "Compression is not intended to obstruct arterial inflow.",
   "Compression is not an antimicrobial treatment.",
   "Movement and calf-pump function remain important."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 4. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-active-to-maintenance",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "Edema and an active venous ulcer improve with appropriate bandaging. Once the ulcer heals, what plan best fits the deck?",
  "options": [
   "Transition to suitable maintenance garments and ongoing recurrence prevention",
   "Stop all compression because epithelialization corrects venous insufficiency",
   "Continue the identical active-ulcer wrap indefinitely without fit reassessment",
   "Restart compression only if an ulcer becomes clinically infected"
  ],
  "answer": 0,
  "explanation": "The slides distinguish active treatment from long-term edema/recurrence management.",
  "optionRationales": [
   "The slides distinguish active treatment from long-term edema/recurrence management.",
   "Healing does not remove the underlying venous problem.",
   "Fit, edema and the maintenance plan should be reassessed.",
   "Recurrence prevention should not wait for infection."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 5,15. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-healing-trajectory",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "A venous ulcer decreases from 10 cm\u00b2 to 8 cm\u00b2 over two weeks. How does that compare with the slide's nonhealing predictor?",
  "options": [
   "20% reduction; below the 25% two-week threshold, prompting reassessment",
   "25% reduction; exactly at the threshold",
   "80% reduction; well above the threshold",
   "2% reduction; area changes are divided by the follow-up area"
  ],
  "answer": 0,
  "explanation": "(10-8)/10 \u00d7 100 = 20%; reassess the whole plan rather than declaring inevitable failure.",
  "optionRationales": [
   "(10-8)/10 \u00d7 100 = 20%; reassess the whole plan rather than declaring inevitable failure.",
   "The numerator is 2 and the baseline is 10, giving 20%, not 25%.",
   "80% is the remaining area, not the reduction.",
   "Use change divided by baseline area, not an incorrect percent or denominator."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 2. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-short-stretch",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "How does the short-stretch bandage mechanism described in the slide relate to walking?",
  "options": [
   "Muscle movement acts against a relatively rigid system and generates working pressure",
   "Walking inactivates the system by eliminating calf-pump pressure",
   "The bandage requires complete bed rest to generate its intended working pressure",
   "Its principal action is to increase arterial spasm during movement"
  ],
  "answer": 0,
  "explanation": "The slide describes a movement-related pressure/massage effect.",
  "optionRationales": [
   "The slide describes a movement-related pressure/massage effect.",
   "The mechanism is not switched off by calf-muscle movement.",
   "The stated working-pressure mechanism depends on movement.",
   "Arterial spasm is not the intended action."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 6. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-venous-teach",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "Which plan best targets venous pressure in a patient with adequate arterial perfusion?",
  "options": [
   "Break up sitting/standing, walk daily, exercise calves, use prescribed compression and elevate legs as advised",
   "Avoid calf activity, stand still more often and use compression only for pain",
   "Replace walking with continuous dependent sitting and remove compression permanently",
   "Use a heating pad and avoid all ankle movement until edema resolves"
  ],
  "answer": 0,
  "explanation": "This follows the slide's pressure-reduction and calf-pump teaching.",
  "optionRationales": [
   "This follows the slide's pressure-reduction and calf-pump teaching.",
   "Immobility and prolonged static posture work against the goals.",
   "Dependent immobility does not replace the recommended plan.",
   "Heat and immobilization are not the slide's core recommendations."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 12. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 },
 {
  "id": "thera-wound-slides-20261020-compression-adherence",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "prompt": "A patient removes prescribed maintenance stockings because they hurt, cannot be donned independently and do not fit in shoes. Which response best addresses the slide's recurrence-prevention principles?",
  "options": [
   "Reassess perfusion/fit, comfort, application aids or support, affordability and suitable alternatives",
   "Document nonadherence and keep the same unassessed product",
   "Increase pressure immediately to compensate for missed wear",
   "Stop recurrence prevention because difficulty applying stockings means none can help"
  ],
  "answer": 0,
  "explanation": "The slide emphasizes comfort, affordability, ease of application, allergy and shoe fit; pain also needs assessment.",
  "optionRationales": [
   "The slide emphasizes comfort, affordability, ease of application, allergy and shoe fit; pain also needs assessment.",
   "The barriers and possible safety issue need an active response.",
   "Higher pressure is not a substitute for assessing pain and fit.",
   "Individualized support or another suitable system may help."
  ],
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 15. Original practice vignette; added patient details are exercise inputs. Any current-guideline comparison is explicitly labelled.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20",
  "examSkill": "wound_management"
 }
];
const WOUND_SLIDE_WRITTEN=[
 {
  "id": "thera-wound-written-20261020-dfu-plan",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "type": "reasoning",
  "prompt": "A patient has a neuropathic plantar ulcer without clinical infection. Name THREE treatment priorities and the team members you would involve.",
  "rubric": [
   "Assess the cause and perfusion, and inspect for infection or deeper involvement.",
   "Arrange appropriate pressure offloading/orthotics and qualified foot/callus care.",
   "Use suitable wound care and address glycemia/nutrition; involve wound/foot-care services, diabetes support and a dietitian as indicated.",
   "A positive surface culture without clinical infection does not by itself justify antibiotics."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "dfuSlidesOct20",
   "dfuClinicalOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 2-3,9. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 },
 {
  "id": "thera-wound-written-20261020-dfu-teach",
  "course": "Thera",
  "condition": "foot",
  "topic": "Diabetic foot infection",
  "system": "skin",
  "module": "derm-diabetic-ulcer-deck",
  "type": "education",
  "prompt": "Name the FOUR diabetic-foot-ulcer prevention categories in the slide diagram and give TWO practical patient teaching points.",
  "rubric": [
   "Patient education; foot skin/toenail care; protective footwear; selected protective surgery when indicated.",
   "Inspect feet regularly, including soles, and report a new wound or inflammatory change promptly even when it is painless.",
   "Use well-fitting protective footwear and obtain qualified advice for callus or nail problems rather than injuring insensate skin."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "dfuSlidesOct20",
   "footCareOct20"
  ],
  "sourceNote": "Your Diabetic foot infection presentation, slide(s) 5. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 },
 {
  "id": "thera-wound-written-20261020-arterial-priority",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "type": "reasoning",
  "prompt": "A patient develops sudden foot pain, pallor and new numbness. State the immediate disposition and list THREE additional ischemic findings you would seek without delaying care.",
  "rubric": [
   "Arrange emergency assessment/transfer for possible acute limb ischemia and urgent vascular treatment.",
   "Assess pulses, motor weakness/paralysis and temperature/poikilothermia; compare limbs and document the findings.",
   "Do not wait for every one of the six Ps before escalating; analgesia, anticoagulation and revascularization are coordinated by the treating emergency/vascular team."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 5-6,9. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 },
 {
  "id": "thera-wound-written-20261020-arterial-teach",
  "course": "Thera",
  "condition": "arterial",
  "topic": "Arterial disease and ischemic ulcers",
  "system": "skin",
  "module": "derm-arterial-deck",
  "type": "education",
  "prompt": "Name THREE therapeutic goals or education priorities for stable arterial disease. Explain what must happen before compression is prescribed for a mixed arterial/venous ulcer.",
  "rubric": [
   "Reduce cardiovascular risk with smoking cessation and individualized lipid/BP/glucose management.",
   "Improve appropriate walking function and protect the feet with regular assessment and suitable footwear.",
   "Teach recognition of sudden pain, coldness, pulse change, numbness or weakness requiring urgent help.",
   "Assess arterial flow and obtain vascular/wound advice. The slide avoids compression below ABPI 0.50 and discusses individualized lower compression in the 0.50-0.80 range."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "arterialSlidesOct20"
  ],
  "sourceNote": "Your Arterial disease and ischemic ulcers presentation, slide(s) 8-10. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 },
 {
  "id": "thera-wound-written-20261020-venous-plan",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "type": "reasoning",
  "prompt": "Name THREE therapeutic goals for venous-ulcer care and explain how compression changes from an active ulcer to a healed ulcer.",
  "rubric": [
   "Reduce venous hypertension/edema, promote wound closure and prevent recurrence.",
   "When suitable, bandaging or a selected system manages the active ulcer and edema; confirm arterial suitability first.",
   "After edema control/healing, use appropriate maintenance garments or a workable ongoing system, reassessing fit and adherence rather than automatically stopping prevention."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 4-8,15. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 },
 {
  "id": "thera-wound-written-20261020-venous-teach",
  "course": "Thera",
  "condition": "venous",
  "topic": "Venous ulcers and compression",
  "system": "skin",
  "module": "derm-venous-deck",
  "type": "education",
  "prompt": "List THREE venous-disease teaching points and TWO practical compression barriers you would assess.",
  "rubric": [
   "Break up prolonged sitting/standing and walk or perform calf/ankle exercises as appropriate.",
   "Use prescribed compression and elevate the legs as advised when perfusion and the clinical plan permit.",
   "Continue long-term recurrence prevention after healing and seek review for new pain, skin injury or difficulty tolerating the system.",
   "Assess affordability, application ability/support, comfort, allergy and shoe fit; name at least two."
  ],
  "explanation": "Connect the treatment to the wound cause, perfusion, patient goals and follow-up. The cited slide is the course source; named guideline comparisons remain distinct.",
  "pitfall": "Do not copy one ulcer's compression, debridement or antibiotic plan to a different etiology without assessing suitability.",
  "sources": [
   "venousSlidesOct20"
  ],
  "sourceNote": "Your Venous ulcers and compression presentation, slide(s) 12,15. Original short-answer exercise.",
  "practiceLabel": "Course wound-treatment slides",
  "drillGroup": "woundSlidesOct20"
 }
];
PRACTICE.push(...WOUND_SLIDE_MCQ);
MIDTERM_RECALL.push(...WOUND_SLIDE_WRITTEN);
SHORT_ANSWERS.push(...WOUND_SLIDE_WRITTEN);
