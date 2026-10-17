'use strict';
// Original exam-format questions aligned to instructor guidance supplied October 17, 2026.
Object.assign(PRACTICE_SOURCES,{
 theraFoundations:{title:'Your THERA 1 notes: I Can PresCribE A Drug, blocks 353–368',url:'sources/THERA 1.docx'},
 cnoNPOct2026:{title:'CNO Nurse Practitioner standard: therapeutic management p. 5; checked October 17, 2026',url:'https://cno.org/Assets/CNO/Documents/Standard-and-Learning/Practice-Standards/41038_strdrnec.pdf'},
 cnoNPFAQ:{title:'CNO NP practice FAQs: consultation and competence',url:'https://www.cno.org/standards-learning/nurse-practitioners/np-practice-faqs'}
});
const THERA_EXAM_ROWS=[
 {
  "id": "indication",
  "parent": "framework",
  "skill": "framework",
  "prompt": "An adult is diagnosed with a self-limited viral URI and requests an antibiotic before travel. Which ICANPRESCRIBE question comes first?",
  "options": [
   "Is medication indicated for this diagnosis and patient?",
   "Which antibiotic costs least?",
   "Which antibiotic has the shortest course?",
   "Which antibiotic is taken once daily?"
  ],
  "why": "Indication precedes selecting an antibiotic. Cost and convenience matter after establishing a reason to use medication; a viral diagnosis alone does not create an antibiotic indication."
 },
 {
  "id": "contraindication",
  "parent": "framework",
  "skill": "framework",
  "prompt": "A pregnant patient with diagnosed acne asks to restart oral isotretinoin. Which framework component most directly prevents this prescription?",
  "options": [
   "Contraindications",
   "Cost and adherence",
   "Dosage convenience",
   "Comparative efficacy alone"
  ],
  "why": "A contraindication can exclude a drug despite efficacy or convenience. Changing the dose does not remove this pregnancy risk."
 },
 {
  "id": "affordability",
  "parent": "framework",
  "skill": "framework",
  "prompt": "Two treatments are suitable for a supplied diagnosis. The patient cannot afford one and struggles with four daily doses. What should guide the shared choice?",
  "options": [
   "Discuss coverage, cost and feasible dosing while preserving efficacy and safety",
   "Choose the expensive option because price proves efficacy",
   "Prescribe half an effective dose to reduce cost",
   "Label the patient nonadherent before exploring barriers"
  ],
  "why": "Cost/adherence is a framework component. Address actual barriers with the patient; price and an ineffective dose cannot substitute for a suitable regimen."
 },
 {
  "id": "directions",
  "parent": "framework",
  "skill": "framework",
  "prompt": "A selected antibiotic is suitable, but the draft says only “take as directed.” Which framework component remains incomplete?",
  "options": [
   "Dosage, duration and directions",
   "Indication alone",
   "Comparative efficacy alone",
   "Cost alone"
  ],
  "why": "A suitable drug still needs executable directions. Resolve strength, dose, route, frequency, definite duration and matching quantity before signing."
 },
 {
  "id": "consult",
  "parent": "cno",
  "skill": "professional",
  "prompt": "An NP has legal authority to manage a supplied diagnosis but lacks competence in this patient’s complex treatment. What is best?",
  "options": [
   "Consult appropriately and clarify responsibility for the plan",
   "Prescribe independently because authority establishes competence",
   "Transfer accountability to the dispensing pharmacist",
   "Wait for routine follow-up before communicating"
  ],
  "why": "Individual competence can require consultation within legal scope. Clarify follow-up responsibilities; consultation does not erase the NP’s accountability."
 },
 {
  "id": "shared-plan",
  "parent": "cno",
  "skill": "professional",
  "prompt": "A patient with a diagnosed condition declines the proposed drug because of cost and previous adverse effects. What is best?",
  "options": [
   "Discuss suitable options and agree on a feasible plan",
   "Repeat the order without discussing concerns",
   "Discharge the patient immediately for declining",
   "Choose solely by lowest purchase price"
  ],
  "why": "Treatment planning includes patient preferences and circumstances. Discuss suitable options and barriers rather than imposing an unworkable order."
 },
 {
  "id": "monitor",
  "parent": "cno",
  "skill": "professional",
  "prompt": "A new medication is selected for a diagnosed condition. Which plan best completes therapeutic management?",
  "options": [
   "Define response/safety measures, review timing and who acts on results",
   "Order baseline tests without arranging result review",
   "Review only if the patient elects to stop",
   "Continue indefinitely if no complaint is volunteered"
  ],
  "why": "Monitoring needs review and action. Specify timing and responsibilities, then change treatment according to response; testing alone leaves the loop incomplete."
 },
 {
  "id": "reconcile",
  "parent": "cno",
  "skill": "professional",
  "prompt": "Before prescribing for a supplied diagnosis, the NP learns the patient takes OTC medicines and herbal supplements. What is best?",
  "options": [
   "Include prescribed, OTC and complementary products in the medication review",
   "Review prescription drugs only",
   "Recommend every natural product as a safer option",
   "Stop all existing drugs without reviewing indications"
  ],
  "why": "Medication review needs the full picture. Investigate actual use and relevant risks rather than assuming supplements are harmless or stopping everything indiscriminately."
 },
 {
  "id": "aom-dose",
  "parent": "aom-first",
  "skill": "dose",
  "prompt": "A 15-month-old has diagnosed AOM and is selected for amoxicillin. No allergy or renal impairment. Which MUMS regimen fits?",
  "options": [
   "80–90 mg/kg/DAY divided BID or TID for 10 days; maximum 4 g/day",
   "80–90 mg/kg/DOSE BID for 10 days",
   "40 mg/kg/DAY for 3 days",
   "80–90 mg/kg/DAY for 5 days because all uncomplicated AOM uses 5 days"
  ],
  "why": "MUMS gives a DAILY total, not a per-dose amount. Age under 2 supports 10 days; do not transfer the older-child course to this toddler."
 },
 {
  "id": "aom-rash",
  "parent": "aom-allergy",
  "skill": "allergy",
  "prompt": "A 16-month-old with diagnosed AOM had a benign delayed amoxicillin rash, without immediate urticaria, anaphylaxis or a severe delayed reaction. Which MUMS alternative fits?",
  "options": [
   "Cefprozil 30 mg/kg/DAY divided BID, maximum 1 g/day, for 10 days",
   "Cefprozil 30 mg/kg/DOSE BID for 10 days",
   "Apply the same cephalosporin plan to anaphylaxis without review",
   "Cefprozil for 3 days regardless of age"
  ],
  "why": "For this specified benign rash, MUMS lists cefprozil at a daily total divided BID. Immediate/severe reactions require separate assessment; age still affects duration."
 },
 {
  "id": "aom-calc",
  "parent": "aom-stella",
  "skill": "calculation",
  "prompt": "A 10-kg toddler with diagnosed AOM is prescribed amoxicillin 90 mg/kg/DAY divided BID for 10 days. Suspension is 400 mg/5 mL. Which unrounded dose and quantity are correct?",
  "options": [
   "5.625 mL/dose; 112.5 mL total",
   "11.25 mL/dose; 225 mL total",
   "5.625 mL/dose; 56.25 mL total",
   "2.8125 mL/dose; 56.25 mL total"
  ],
  "why": "900 mg/day ÷ 2 = 450 mg/dose. At 80 mg/mL this is 5.625 mL; 20 doses need 112.5 mL before measurable-dose rounding/package allowance. Recalculate quantity if the prescribed volume is rounded."
 },
 {
  "id": "aom-review",
  "parent": "aom-ome",
  "skill": "followup",
  "prompt": "A child’s diagnosed AOM has resolved clinically but asymptomatic effusion remains. The caregiver requests more antibiotics. Which plan is best?",
  "options": [
   "Explain residual fluid and monitor hearing, with assessment for persistent concerns",
   "Repeat antibiotics until all fluid disappears",
   "Switch antibiotics because fluid alone establishes resistance",
   "Use an antihistamine solely to eradicate the effusion"
  ],
  "why": "Residual fluid alone does not establish persistent infection. Avoid unnecessary antibiotics while keeping a hearing/speech follow-up plan."
 },
 {
  "id": "oe-tm",
  "parent": "oe-first",
  "skill": "safety",
  "prompt": "Otitis externa is diagnosed, but an intact TM cannot be verified. Which selected MUMS treatment fits this uncertainty?",
  "options": [
   "Ciprodex 4 drops in the affected ear BID for 7 days",
   "Vinegar/alcohol drops despite uncertain TM integrity",
   "An aminoglycoside-containing drop without checking TM safety",
   "Oral amoxicillin alone for canal-limited disease"
  ],
  "why": "The linked OE regimen uses a suitable non-ototoxic option when a defect is possible. Potentially ototoxic or irritating products should not be chosen on an unverified assumption; canal-limited disease usually needs local delivery."
 },
 {
  "id": "oe-instructions",
  "parent": "oe-nonpharm",
  "skill": "education",
  "prompt": "A patient with diagnosed otitis externa asks how to support prescribed drops. Which advice is best?",
  "options": [
   "Keep the canal dry, avoid swabs and review obstructed drop delivery",
   "Clean deeply with swabs before every dose",
   "Continue swimming if pain temporarily improves",
   "Stop drops after the first helpful dose"
  ],
  "why": "Correct delivery and avoiding water/trauma support local treatment. If swelling prevents delivery, arrange review; initial improvement does not replace the prescribed course."
 },
 {
  "id": "oe-escalation",
  "parent": "oe-redflags",
  "skill": "referral",
  "prompt": "An older adult with diabetes has diagnosed otitis externa and severe persistent deep pain despite treatment. What is best?",
  "options": [
   "Urgent reassessment for invasive disease and specialist/emergency care as indicated",
   "Repeat drops without examining the ear",
   "Add a sedating antihistamine and wait two weeks",
   "Stop assessment because the diagnosis was supplied"
  ],
  "why": "Diabetes and severe persistent/deep pain warrant urgent review for invasive disease. Assess spread, systemic illness and cranial nerve findings instead of treating the original label as permanently sufficient."
 },
 {
  "id": "eye-review",
  "parent": "conjunctivitis-failure",
  "skill": "followup",
  "prompt": "Diagnosed conjunctivitis is not improving with initial treatment. What is best before simply changing antibiotics?",
  "options": [
   "Review acuity, pain/photophobia, cornea, contact lenses, technique and alternative causes",
   "Broaden antibiotics without assessing vision",
   "Add ocular steroid independently",
   "Continue unchanged for weeks"
  ],
  "why": "Failure may reflect incorrect delivery, an alternative cause or corneal disease. Reassess before broadening treatment or suppressing inflammation."
 },
 {
  "id": "eye-contact",
  "parent": "conjunctivitis-contact",
  "skill": "referral",
  "prompt": "A contact-lens wearer previously labelled as conjunctivitis develops pain, photophobia and reduced vision. What is best?",
  "options": [
   "Urgent eye-capable assessment for possible corneal infection and treatment",
   "Routine refill with review in a month",
   "Unsupervised ocular steroid drops",
   "Resume lenses when discharge decreases"
  ],
  "why": "Pain, photophobia and visual change alter urgency. Consider keratitis/corneal disease; routine refills and ocular steroids without appropriate examination do not address this risk."
 },
 {
  "id": "aom-prevention",
  "parent": "aom-nonpharm",
  "skill": "nonpharm",
  "prompt": "After a toddler’s AOM diagnosis, which non-drug advice set fits the supplied teaching?",
  "options": [
   "Avoid smoke exposure, avoid supine bottle feeding and review prolonged pacifier use",
   "Continuous antibiotics and bottles in bed",
   "Deep canal cleaning and restricting fluids",
   "Long-term topical nasal decongestants"
  ],
  "why": "These supported measures address modifiable exposures and feeding practices without guaranteeing prevention. Chronic medication or instrumentation is not a substitute."
 },
 {
  "id": "gas-penv",
  "parent": "gas-first",
  "skill": "regimen",
  "prompt": "An adult has diagnosed GAS, no penicillin allergy and normal renal function. Which penicillin V regimen matches MUMS?",
  "options": [
   "600 mg PO BID for 10 days",
   "600 mg once daily for 3 days",
   "300 mg BID for 5 days",
   "600 mg TID for 3 days"
  ],
  "why": "MUMS lists penicillin V 600 mg BID or 300 mg TID for 10 days. The other schedules do not match this indication."
 },
 {
  "id": "gas-child-volume",
  "parent": "gas-child",
  "skill": "calculation",
  "prompt": "A 25-kg child has diagnosed GAS. Selected MUMS amoxicillin is 40 mg/kg/DAY divided BID for 10 days, maximum 1 g/day. Suspension is 250 mg/5 mL. Which is correct?",
  "options": [
   "10 mL BID; 200 mL total",
   "20 mL BID; 400 mL total",
   "10 mL once daily; 100 mL total",
   "5 mL BID; 100 mL total"
  ],
  "why": "40 × 25 = 1000 mg/day, at the stated maximum. Divide into 500 mg doses; 50 mg/mL gives 10 mL. Twenty doses require 200 mL. Do not interpret the daily total as a per-dose amount."
 },
 {
  "id": "gas-allergy",
  "parent": "gas-anaphylaxis",
  "skill": "allergy",
  "prompt": "An adult with diagnosed GAS reports immediate urticaria and respiratory compromise after penicillin. A macrolide is considered. What is essential?",
  "options": [
   "Review interactions, QT risk and local susceptibility before selecting the alternative",
   "Treat this as a benign delayed rash and use penicillin",
   "Assume all macrolides have the same dose and duration",
   "Select cephalexin automatically without allergy review"
  ],
  "why": "The immediate severe reaction changes selection. A macrolide still needs resistance/safety review and its own exact regimen; benign-rash logic does not apply."
 },
 {
  "id": "gas-azithro",
  "parent": "gas-azithro",
  "skill": "regimen",
  "prompt": "Azithromycin is selected after allergy, interaction and resistance review for adult diagnosed GAS. Which MUMS regimen fits?",
  "options": [
   "500 mg day 1, then 250 mg daily on days 2–5",
   "250 mg BID for 10 days",
   "500 mg daily for 10 days",
   "250 mg once on day 1 only"
  ],
  "why": "This azithromycin course uses a loading dose and four lower doses. Clarithromycin is 250 mg BID for 10 days here; schedules cannot be interchanged."
 },
 {
  "id": "gas-lactation",
  "parent": "gas-preg",
  "skill": "lactation",
  "prompt": "A breastfeeding adult with diagnosed GAS has no penicillin allergy or renal impairment. Amoxicillin is selected. Which plan fits?",
  "options": [
   "500 mg PO BID for 10 days; observe the infant for diarrhea, rash or thrush",
   "Use the child’s suspension volume as the maternal dose",
   "Stop breastfeeding automatically throughout treatment",
   "Choose doxycycline solely because of breastfeeding"
  ],
  "why": "The parent card links MUMS adult dosing and separate lactation guidance. Breastfeeding does not automatically require interruption; review infant effects and avoid borrowing pediatric mL instructions."
 },
 {
  "id": "sinus-adult",
  "parent": "sinusitis-first",
  "skill": "regimen",
  "prompt": "An adult has diagnosed bacterial sinusitis requiring antibiotics, without allergy or renal impairment. Which MUMS prescription plan is complete?",
  "options": [
   "Amoxicillin 500 mg TID with a definite course selected within 5–10 days",
   "Amoxicillin 500 mg TID with no duration",
   "Amoxicillin 500 mg once as the entire course",
   "Write 5–10 days and let the patient choose the duration without a plan"
  ],
  "why": "Select a definite course within the source range. The range itself does not instruct the patient how long to take treatment; dose and frequency do not resolve omitted duration."
 },
 {
  "id": "sinus-child",
  "parent": "sinusitis-child",
  "skill": "regimen",
  "prompt": "A child with diagnosed bacterial sinusitis is selected for MUMS amoxicillin. Which statement fits?",
  "options": [
   "80 mg/kg/DAY divided BID or TID, maximum 4 g/day; usual duration 10–14 days",
   "80 mg/kg/DOSE TID for 5 days",
   "Use 5 days for all children because AOM may use 5 days",
   "Use half the adult tablet dose without weight calculation"
  ],
  "why": "The sinusitis course differs from uncomplicated older-child AOM. Use the daily total and indication-specific duration; do not guess a fraction of an adult dose."
 },
 {
  "id": "sinus-day3",
  "parent": "sinusitis-reassess",
  "skill": "followup",
  "prompt": "An adult with diagnosed bacterial sinusitis has no improvement around treatment day 3. What is best?",
  "options": [
   "Reassess adherence, diagnosis, complications and treatment selection",
   "Double the antibiotic dose without assessment",
   "Continue indefinitely without a review date",
   "Start ocular steroid for facial pressure"
  ],
  "why": "Nonresponse prompts review rather than automatic dose escalation. Orbital swelling/visual change, severe headache, toxicity or altered mental state requires urgent escalation."
 },
 {
  "id": "rhinitis-technique",
  "parent": "rhinitis-technique",
  "skill": "education",
  "prompt": "A patient with diagnosed allergic rhinitis inconsistently uses an intranasal corticosteroid, points at the septum and reports minor bleeding. What is best?",
  "options": [
   "Review regular use and technique, aim away from the septum and reassess irritation",
   "Increase dose without technique review",
   "Use daily topical decongestant indefinitely",
   "Sniff forcefully toward the septum"
  ],
  "why": "Correct technique and consistent use before assuming treatment failure. Address irritation; topical decongestant overuse can cause rebound symptoms."
 },
 {
  "id": "rhinitis-older",
  "parent": "rhinitis-aaron",
  "skill": "older-adult",
  "prompt": "An older adult with diagnosed allergic rhinitis has congestion and daytime drowsiness on a first-generation antihistamine. What fits the seminar plan?",
  "options": [
   "Review the sedating drug and use appropriate intranasal anti-inflammatory treatment with teaching",
   "Add another sedating antihistamine",
   "Escalate the first-generation drug solely for congestion",
   "Use continuous topical decongestant as maintenance"
  ],
  "why": "Match therapy to symptoms while limiting sedation and harm. The seminar uses an intranasal anti-inflammatory-containing option; stacking sedating drugs and decongestant overuse do not solve the problem."
 },
 {
  "id": "impetigo-local",
  "parent": "impetigo-topical",
  "skill": "regimen",
  "prompt": "A well child has diagnosed localized nonbullous impetigo without cellulitis or an outbreak. Which MUMS treatment fits?",
  "options": [
   "Mupirocin 2% thin application TID for 5–7 days",
   "Mupirocin 2% once weekly for 4 weeks",
   "Oral plus topical antibiotics for every small lesion",
   "Valacyclovir 1 g TID for 7 days"
  ],
  "why": "Limited disease can use this topical regimen. Extensive/systemic/outbreak disease changes selection; an antiviral regimen does not fit the supplied diagnosis."
 },
 {
  "id": "impetigo-volume",
  "parent": "impetigo-childcalc",
  "skill": "calculation",
  "prompt": "A 24-kg child with diagnosed widespread impetigo is prescribed cephalexin 50 mg/kg/DAY divided QID for 7 days. Supplied suspension is 250 mg/5 mL. Which is correct?",
  "options": [
   "6 mL QID; 168 mL total",
   "24 mL QID; 672 mL total",
   "6 mL BID; 84 mL total",
   "3 mL QID; 84 mL total"
  ],
  "why": "1200 mg/day ÷ 4 = 300 mg/dose. At 50 mg/mL this is 6 mL; 6 × 4 × 7 = 168 mL. Use the supplied regimen; do not infer an unstated maximum."
 },
 {
  "id": "cellulitis-course",
  "parent": "cellulitis-first",
  "skill": "regimen",
  "prompt": "An adult has diagnosed mild uncomplicated nonpurulent cellulitis, no abscess, no allergy and normal renal function. Which MUMS initial plan fits?",
  "options": [
   "Cephalexin 500 mg QID for 5 days, with response-based reassessment",
   "Cephalexin 500 mg once daily for one day",
   "Valacyclovir 1 g TID for 7 days",
   "Cephalexin indefinitely until all discoloration vanishes"
  ],
  "why": "MUMS supports this initial course for a responding uncomplicated case. Poor response or complexity needs reassessment; residual discoloration does not require indefinite antibiotics."
 },
 {
  "id": "abscess",
  "parent": "cellulitis-abscess",
  "skill": "treatment-selection",
  "prompt": "A diagnosed drainable skin abscess has surrounding inflammation. What is the most important management principle?",
  "options": [
   "Assess drainage/source control and the need for adjunctive antibiotics",
   "Repeated antibiotic changes without assessing the collection",
   "Topical steroid alone for the swelling",
   "A prolonged antibiotic course while deferring source control"
  ],
  "why": "Source control may be needed. Site, systemic illness, severity and host risk guide adjunctive antibiotics; drug changes alone may leave the collection untreated."
 },
 {
  "id": "mrsa",
  "parent": "cellulitis-mrsa",
  "skill": "treatment-selection",
  "prompt": "A diagnosed skin infection is confirmed to involve MRSA and antibiotics are indicated. Which statement best guides selection?",
  "options": [
   "Use a susceptible MRSA-active option; assess drainage and any needed streptococcal coverage",
   "Assume cephalexin reliably covers MRSA",
   "Assume amoxicillin reliably covers MRSA",
   "Use doxycycline in every patient without pregnancy or susceptibility review"
  ],
  "why": "Cephalexin/amoxicillin are not dependable MRSA therapy. Susceptibility, patient factors and source control matter; no one alternative is universally suitable."
 },
 {
  "id": "cellulitis-support",
  "parent": "cellulitis-nonpharm",
  "skill": "nonpharm",
  "prompt": "A patient with diagnosed uncomplicated lower-limb cellulitis and adequate perfusion starts antibiotics. Which accompanying plan is best?",
  "options": [
   "Elevate as suitable, protect the skin break and document spread/systemic symptoms",
   "Use antibiotics alone and ignore the portal of entry",
   "Apply tight occlusion regardless of circulation",
   "Vigorously massage inflamed tissue"
  ],
  "why": "Supportive care addresses swelling, skin integrity and monitoring. Treat the portal of entry and recognize progression; care must fit perfusion and the actual wound."
 },
 {
  "id": "bite-duration",
  "parent": "bite-first",
  "skill": "duration",
  "prompt": "One adult has a high-risk uninfected dog bite selected for prophylaxis; another has an established bite infection. Which MUMS distinction fits?",
  "options": [
   "Usually 3–5 days prophylaxis versus 7–14 days infection treatment",
   "Usually 7–14 days prophylaxis versus 1 day infection treatment",
   "The same single dose regardless of findings",
   "Antibiotics cannot be used for an infected bite"
  ],
  "why": "Prophylaxis and treatment are separate indications with different usual durations. Depth/response/risk affect the plan; wound and immunization assessment remain necessary."
 },
 {
  "id": "bite-quantity",
  "parent": "bite-quantity",
  "skill": "prescription",
  "prompt": "For a diagnosed infected bite, amoxicillin/clavulanate 500/125 mg TID for 7 days is selected. Which quantity/formulation statement is correct?",
  "options": [
   "21 tablets, specifying both components",
   "14 tablets because every course is BID",
   "21 tablets labelled only amoxicillin 500 mg",
   "Use 875/125 with unchanged TID instructions without regimen review"
  ],
  "why": "Three daily doses for seven days needs 21 tablets. State both component strengths; changing formulation or frequency requires review rather than a silent substitution."
 },
 {
  "id": "bite-rabies",
  "parent": "bite-rabies",
  "skill": "referral",
  "prompt": "A bite is being treated. The patient says animal vaccination means no rabies assessment is needed. What is best?",
  "options": [
   "Use local public-health exposure assessment rather than vaccination history alone",
   "Accept vaccination history as complete exclusion",
   "Explain that the bite antibiotic prevents rabies",
   "Wait for symptoms before assessing prophylaxis"
  ],
  "why": "Bite antibiotics do not prevent rabies. Public-health assessment uses species, exposure, animal availability and local epidemiology; vaccination history alone is insufficient."
 },
 {
  "id": "zoster-order",
  "parent": "zoster-first",
  "skill": "regimen",
  "prompt": "An adult with diagnosed shingles and normal renal function is selected for MUMS valacyclovir. Which prescription fits?",
  "options": [
   "1 g PO TID for 7 days; 21 one-gram tablets",
   "2 g PO BID for one day; 4 one-gram tablets",
   "1 g PO once daily for 7 days; 7 tablets",
   "1 g PO TID for 7 days; 7 tablets"
  ],
  "why": "Shingles uses 1 g TID for 7 days here. The high-dose one-day option is a recurrent herpes-labialis regimen, not shingles; quantity must match directions."
 },
 {
  "id": "zoster-renal",
  "parent": "zoster-renal",
  "skill": "older-adult",
  "prompt": "An older adult with diagnosed shingles has reduced renal function and potentially nephrotoxic medicines. A copied valacyclovir order assumes normal renal function. What is best?",
  "options": [
   "Apply the verified product-specific renal regimen and review hydration/concomitant risks",
   "Double the dose solely because of age",
   "Keep it because treatment lasts only seven days",
   "Change duration without checking the renal schedule"
  ],
  "why": "Reduced clearance affects safety during short courses too. Check the actual adjustment and renal/neurotoxicity risks; age alone neither supplies a dose nor makes the copied order appropriate."
 },
 {
  "id": "zoster-eye",
  "parent": "zoster-ocular",
  "skill": "referral",
  "prompt": "Diagnosed shingles affects the ophthalmic distribution with eye pain. What is best?",
  "options": [
   "Urgent eye-capable assessment alongside indicated systemic antiviral management",
   "Refer only after finishing oral treatment",
   "Use ocular steroids independently and defer referral",
   "Treat with skin cream alone"
  ],
  "why": "Ocular involvement changes urgency. Arrange examination while treating systemically as indicated; referral delay and unsupervised ocular steroids are not appropriate substitutes."
 },
 {
  "id": "varicella-child",
  "parent": "varicella-child",
  "skill": "treatment-selection",
  "prompt": "A healthy young child has diagnosed uncomplicated chickenpox and drinks well. Which MUMS principle is correct?",
  "options": [
   "No routine antiviral; provide symptom care and a return plan",
   "Every child needs the adult shingles regimen",
   "Antibiotics are needed for every lesion",
   "Use immune globulin as routine treatment of established chickenpox"
  ],
  "why": "Routine antiviral treatment is not recommended for uncomplicated disease in otherwise healthy children. High-risk hosts/complications change assessment; prevention and treatment are distinct."
 },
 {
  "id": "varicella-preg",
  "parent": "varicella-preg",
  "skill": "pregnancy",
  "prompt": "A susceptible pregnant adult has significant varicella exposure but no rash. Which action fits the reference?",
  "options": [
   "Promptly assess VariZIG eligibility, as soon as possible and within 10 days; avoid live vaccine in pregnancy",
   "Give live vaccine because exposure cancels its contraindication",
   "Wait for rash before considering prophylaxis",
   "Use a healthy child’s symptom-care plan as maternal prophylaxis"
  ],
  "why": "This is a time-sensitive prevention assessment in a high-risk susceptible person. MUMS identifies immune-globulin assessment; live vaccine is contraindicated and waiting may miss prophylaxis."
 },
 {
  "id": "lice-repeat",
  "parent": "lice-permethrin",
  "skill": "education",
  "prompt": "Head lice are diagnosed and permethrin 1% selected for an eligible child. Which teaching fits the seminar/CPS-linked plan?",
  "options": [
   "Follow product directions and repeat in 7–10 days; the seminar uses day 9",
   "Leave the product on for a week",
   "Repeat daily until all nits disappear",
   "Use permethrin 5% with identical hair instructions"
  ],
  "why": "Use the head-lice formulation and its application directions. The referenced repeat window is 7–10 days; daily retreatment or borrowing scabies instructions can cause misuse."
 },
 {
  "id": "lice-failure",
  "parent": "lice-failure",
  "skill": "followup",
  "prompt": "Following head-lice treatment, a child still itches and has nits but no live lice are found. What precedes declaring resistance?",
  "options": [
   "Recheck for live lice and review application/repeat timing",
   "Escalate because any nit proves resistance",
   "Apply treatment daily for two weeks",
   "Treat everyone automatically without assessment"
  ],
  "why": "Itch/nits alone do not establish active treatment failure. Confirm live infestation and correct treatment use before changing products or treating contacts unnecessarily."
 },
 {
  "id": "scabies",
  "parent": "lice-scabies",
  "skill": "regimen",
  "prompt": "An adult has diagnosed scabies. Which permethrin regimen distinguishes it from head-lice treatment?",
  "options": [
   "5% cream to appropriate whole-body sites, generally neck down, left 8–14 hours; repeat about a week later when indicated",
   "1% hair rinse for 10 minutes as the sole whole-body treatment",
   "5% cream on visible spots only for 5 minutes",
   "1% rinse daily indefinitely"
  ],
  "why": "Scabies needs the correct whole-body product/time, not head-lice or spot-treatment instructions. Age/head/face directions and coordinated contact management need separate attention."
 },
 {
  "id": "acne-preg",
  "parent": "acne-preg",
  "skill": "pregnancy",
  "prompt": "A pregnant adult has diagnosed acne. Which option is the most appropriate direction?",
  "options": [
   "Discuss pregnancy-compatible options such as azelaic acid after product/patient review",
   "Restart adapalene because every topical drug is risk-free",
   "Use oral isotretinoin at a lower dose",
   "Choose routine doxycycline as preferred pregnancy therapy"
  ],
  "why": "Linked pregnancy guidance distinguishes suitable options from retinoids and routine doxycycline. Formulation and individual risk still need review; lowering a retinoid dose does not eliminate this concern."
 },
 {
  "id": "acne-doxy",
  "parent": "acne-doxy",
  "skill": "education",
  "prompt": "Doxycycline is selected for a nonpregnant adult with diagnosed inflammatory acne. Which teaching best reduces avoidable harms?",
  "options": [
   "Adequate water, remain upright, sun protection and review iron/antacid interactions",
   "Take immediately before lying down without water",
   "Take simultaneously with iron to improve absorption",
   "Ignore pregnancy plans because the indication is acne"
  ],
  "why": "Water/upright administration addresses esophageal injury; sun protection addresses photosensitivity, and mineral interactions need review. Patient factors remain relevant for acne therapy."
 },
 {
  "id": "eczema-site",
  "parent": "eczema-potency",
  "skill": "safety",
  "prompt": "An infant has diagnosed facial eczema. Which topical-steroid principle is best?",
  "options": [
   "Age/site-appropriate potency, amount and short duration with emollient care",
   "Largest percentage always means strongest product",
   "Copy adult high-potency treatment under occlusion",
   "Continue any topical steroid indefinitely"
  ],
  "why": "Young age, thin skin and occlusion affect absorption/harm. Percentages cannot compare potency across molecules; specify product, site, amount, frequency and duration instead of copying an adult plan."
 }
];
const THERA_EXAM_CHALLENGES=THERA_EXAM_ROWS.map(row=>{
 const foundation=['framework','cno'].includes(row.parent);
 const ref=foundation?null:MIDTERM_RECALL.find(q=>q.id==='recall-20261016-'+row.parent);
 if(!foundation&&!ref)throw Error('Missing THERA source parent '+row.parent);
 return {id:'thera-exam-20261017-'+row.id,course:'Thera',condition:ref?.condition||'prescribing',system:ref?.system||'foundations',module:ref?.module||'thera-1',topic:ref?.topic||'Safe prescribing',prompt:row.prompt,options:row.options,answer:0,explanation:row.why,sources:ref?[...ref.sources]:row.parent==='framework'?['theraFoundations']:row.id==='consult'?['cnoNPFAQ']:['cnoNPOct2026'],sourceNote:(ref?.sourceNote||(row.parent==='framework'?'THERA 1.docx, blocks 353–368.':'Linked CNO standard/FAQ, checked October 17, 2026.'))+' Original study question, not an instructor item or marking key. Diagnosis supplied; no organism recall required.',practiceLabel:'THERA exam-style MCQ · October 17, 2026',drillGroup:'theraExamChallenge',examSkill:row.skill};
});
PRACTICE.push(...THERA_EXAM_CHALLENGES);
