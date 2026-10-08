'use strict';
// Responses paraphrase the supplied OSCE reference. Added questions with no
// source response explicitly return "not provided" instead of inventing a finding.
window.INTERVIEW_CASES=[
 {id:'ear-caregiver-v1',title:'Child with ear discomfort',minutes:15,
 brief:'A caregiver brings a child with ear tugging and a difficult night. Take a focused history, request relevant examination findings, and explain your differential. The source station allows 15 minutes before feedback.',
 opening:'“My child has been pulling at her right ear and crying all night. She felt warm and barely slept.”',
 sourceSection:'OSCE Station 1 Pediatric Acute Otitis Media',
 questions:[
 ['Opening and consent','“Hello, I’m … Could you confirm your name, your child’s name and your relationship? Is it okay if I ask some questions and examine her?”','The source identifies a caregiver accompanying a 2-year-old girl. Names, relationship and consent response are not provided.','Establish identity, caregiver role and permission.'],
 ['Age','“How old is she?”','She is 2 years old.','Age is part of pediatric reasoning.'],
 ['Onset and course','“When did this start, and how has it changed since then?”','About 36 hours ago. It became worse overnight.','Clarify acute onset and trajectory.'],
 ['Location','“Is it the right ear, the left, or both?”','Only the right ear.','Establish laterality.'],
 ['Fever','“Have you measured her temperature? How high, when, and how did you measure it?”','The caregiver says she felt warm; no home measurement is supplied. The station’s measured temperature is available with vital signs.','Do not substitute an examination value for a reported home reading.'],
 ['Pain and daily function','“How uncomfortable is she? Is she sleeping, eating and behaving normally?”','She is irritable, eating less and sleeping poorly. The source does not give a pain score.','Explore impact and severity without inventing a score.'],
 ['Ear discharge','“Has any fluid, pus or blood come out of the ear?”','No ear discharge.','Ask explicitly about drainage.'],
 ['Preceding illness','“Has she had a runny nose, cough or cold recently?”','Runny nose and a mild cough began around five days ago.','Place the ear symptoms in context.'],
 ['Hydration','“What is she drinking? How many wet diapers or trips to the toilet has she had?”','Fluid intake and urine output are not provided. Appetite is reduced.','Added practice question: hydration remains an information gap.'],
 ['Alertness and neck symptoms','“Is she unusually sleepy or hard to wake? Has she had a stiff neck?”','No lethargy, difficulty waking or neck stiffness is reported.','Ask these safety questions directly.'],
 ['Vomiting and rash','“Has she been vomiting repeatedly, or developed a rash?”','No vomiting or rash.','Complete the associated-symptom screen.'],
 ['Behind-ear changes and facial movement','“Have you noticed redness or swelling behind the ear, pain there, or weakness on one side of her face?”','No mastoid swelling, redness or tenderness and no facial droop are reported.','Screen for the complications named in the source.'],
 ['Past and birth history','“Has this happened before? Any medical conditions or problems around birth?”','Born full term; no chronic conditions or previous ear infections.','Establish relevant background.'],
 ['Medication and response','“What have you given her? How much, which strength, and when? Did it help?”','Weight-based acetaminophen last night helped somewhat. Product strength, exact dose and time are not supplied.','Recognize the missing details before discussing another dose.'],
 ['Allergies','“Any medication allergies? What happened when she took it?”','No known drug allergies are reported.','Clarify reactions when an allergy is reported.'],
 ['Immunizations','“Are her vaccinations up to date, including pneumococcal vaccination?”','Yes, including PCV.','Use the source’s immunization history.'],
 ['Daycare and contacts','“Does she attend daycare? Has anyone around her been ill?”','Daycare three days per week; other children recently had colds.','Explore exposure history.'],
 ['Smoke and feeding','“Is she exposed to smoke? Does she feed lying flat, or with a propped bottle?”','No smoke exposure, bottle-propping or supine feeding is reported.','Cover the risk factors listed in the case.'],
 ['Hearing and ear exposure','“Any hearing change, swimming, objects in the ear, ear cleaning or injury?”','These answers are not provided in the source.','Added differential-focused questions; do not assume negative answers.'],
 ['Caregiver priorities','“What worries you most? What were you hoping we could do today?”','The caregiver’s specific concerns and expectations are not provided.','Invite the caregiver’s perspective rather than supplying it yourself.']
 ],
 exams:[
 ['Vital signs and weight','Temperature 38.9 °C tympanic; heart rate 118/min; respiratory rate 26/min; weight 13 kg.'],
 ['General appearance and hydration','Fussy but consolable and interactive when distracted. Hydration examination findings are not provided.'],
 ['Both ears and pneumatic otoscopy','Right tympanic membrane: bulging, erythematous, opaque, with lost landmarks and reduced mobility. Left: normal, pearly grey, visible landmarks and intact light reflex. External canals normal bilaterally; no perforation or discharge.'],
 ['Mastoid and facial examination','The case states no mastoid swelling, redness or tenderness and no facial droop. Tragal tenderness is not specified.']
 ],
 diagnosis:'Right acute otitis media',
 reasoning:'The source combines acute symptoms with a bulging, poorly mobile tympanic membrane and inflammatory findings. Ear tugging alone would not establish the diagnosis.',
 differentials:[
 ['Otitis media with effusion','Fluid without acute inflammatory illness is the source’s comparison. Acute symptoms and the bulging, inflamed membrane favour AOM in this case.'],
 ['Otitis externa','Consider external canal symptoms and findings. Normal canals and middle-ear findings favour AOM here; tragal tenderness has not been supplied.'],
 ['Mastoiditis or another complication','The source highlights swelling, redness and tenderness behind the ear and a protruding auricle as an emergency variant. Those findings are not present in this case.']
 ],
 debrief:['Summarize onset, laterality, fever, functional impact and examination findings.','Explain why your leading diagnosis fits and what would support each alternative.','State the safety questions you asked and any information still missing.','Explain the next steps and follow-up in caregiver-friendly language; invite concerns and check understanding.'],
 limitation:'The source labels severity “moderate to severe” but records 38.9 °C and does not quantify pain severity. Do not silently change this to ≥39 °C or treat the label as sufficient to choose antibiotics. This drill does not score treatment or dosing.',
 references:[['Canadian Paediatric Society: acute otitis media','https://cps.ca/en/documents/position/acute-otitis-media']]
 },
 {id:'facial-redness-v1',title:'Adult with recurrent facial redness',minutes:15,
 brief:'A 34-year-old woman attends with her mother because of recurrent facial redness. Take a focused history, request relevant findings, and explain a ranked differential. Fifteen minutes is a practice setting; this source does not specify a station duration.',
 opening:'“I have red patches on my face that come and go. They have bothered me for about six months and get worse with stress or alcohol.”',
 sourceSection:'OSCE Station 2 Adult Rosacea',
 questions:[
 ['Opening, consent and privacy','“Hello, I’m … Could you confirm your name and age? Are you comfortable with your mother staying, or would you prefer some time alone?”','Shaminder is 34 and attends with her mother. Her preference about her mother staying is not supplied.','Ask the adult patient about privacy and consent.'],
 ['Onset','“When did this first begin? What did you notice at the start?”','About six months ago, initially occasional flushing.','Establish onset and evolution.'],
 ['Triggers and relief','“What brings it on or makes it worse? What helps?”','Stress, hot drinks and alcohol worsen it. A gentle moisturizer helps a little.','Explore provoking and relieving factors.'],
 ['Quality','“How does it feel: itchy, painful, burning or something else?”','Mainly burning rather than pain, with occasional itching.','Use the patient’s description.'],
 ['Distribution','“Where does it occur? Does it spread anywhere else?”','Only on the face; no spread elsewhere.','Define distribution.'],
 ['Severity','“How bad is it during a flare, from zero to ten?”','About 5 out of 10.','Record subjective severity.'],
 ['Timing','“How often does it happen? How long does each episode last?”','Intermittently, worse during the day with triggers, lasting hours.','Characterize the pattern.'],
 ['Previous episodes','“Have you had anything similar before?”','Mild flushing before, less severe and resolving on its own.','Compare this episode with previous symptoms.'],
 ['Ideas and concerns','“What do you think might be causing it? What concerns you most?”','She wonders about her skin type or something she eats or drinks. The appearance affects her confidence.','Elicit understanding and concerns.'],
 ['Impact and expectations','“How is it affecting your life? What would you like help with today?”','She feels anxious in social settings because of the appearance. A specific treatment expectation is not supplied.','Explore impact and goals.'],
 ['Products and exposures','“What skin products do you use? Any new products or increased sensitivity?”','Increased product sensitivity; she uses a gentle moisturizer and occasional OTC hydrocortisone. Exact products and when they were started are not supplied.','Explore possible exposure-related alternatives.'],
 ['Medication use','“Any prescriptions, creams, supplements or over-the-counter medicines? How often do you use them?”','No prescribed medications; occasional OTC hydrocortisone and a daily multivitamin. Strength, duration and frequency of hydrocortisone use are not specified.','Ask specifically about topical products.'],
 ['Eye symptoms','“Any eye redness, dryness, pain, gritty feeling, light sensitivity or change in vision?”','No eye redness, pain or vision changes are reported. Dryness, grittiness and light sensitivity are not specifically answered in the history.','Added expanded eye screen; unknown answers remain unknown.'],
 ['Systemic symptoms','“Any fever, fatigue, weight change or joint pain?”','No fever, fatigue, weight loss or joint pain; no weight changes in the review of systems.','Explore features relevant to systemic alternatives.'],
 ['Lesion details','“Do you notice spots, blackheads, whiteheads, blisters or flaky or greasy skin?”','The history does not provide these details. Request the skin examination.','Added morphology questions; examination findings are revealed separately.'],
 ['Past and surgical history','“Any medical problems, earlier skin conditions or operations?”','No chronic illnesses, significant childhood skin disorders or surgery.','Review relevant background.'],
 ['Family history','“Does anyone in your family have skin conditions, lupus or similar facial redness?”','Her mother has eczema; no family history of lupus or rosacea is reported.','Explore family history.'],
 ['Allergies','“Any allergies to medicines, foods or other substances? What happens?”','No drug or food allergies; seasonal pollen allergy. Reaction details are not supplied.','Clarify allergy type and reaction.'],
 ['Alcohol, smoking and stress','“Do you smoke or drink alcohol? What is your stress and sleep like?”','Does not smoke; one to two glasses of wine weekly, a trigger. Moderate work-related stress; seven to eight hours of generally good sleep.','Explore the stated triggers and context.'],
 ['Supports and daily activities','“Who supports you? Is this affecting your work or everyday activities?”','Close to her mother and friends; works in marketing; independent in daily activities. Cosmetic impact affects social confidence.','Understand support and function.'],
 ['Sun and other rash features','“Does sunlight affect the rash? Any mouth sores or rash elsewhere?”','These answers are not provided beyond the rash being limited to the face.','Added questions for diagnostic uncertainty; absence of systemic symptoms alone does not exclude lupus.']
 ],
 exams:[
 ['General appearance and vital signs','Healthy appearing, no systemic illness signs. Vital signs are described as normal, without numeric values.'],
 ['Skin examination','Erythema on cheeks and nose, with telangiectasia. No pustules, papules or comedones. Greasy scale is not explicitly documented.'],
 ['Eye examination','No conjunctival injection or dryness. Other eye examination findings are not supplied.'],
 ['Other examination','Systemic examination is described as normal; individual examination findings are not supplied.']
 ],
 diagnosis:'Rosacea is the source’s leading diagnosis',
 reasoning:'Recurrent central facial flushing and burning, telangiectasia, and the reported triggers support the source’s leading diagnosis. The supplied examination has no papules, pustules or comedones.',
 differentials:[
 ['Seborrheic dermatitis','The source contrasts T-zone redness with greasy scaling. Scale has not been explicitly documented here; ask and examine rather than assume it is absent.'],
 ['Irritant or allergic contact dermatitis','Product sensitivity makes exposure history relevant. The source considers the flushing pattern and triggers less consistent with this alternative.'],
 ['Lupus erythematosus','The source lists malar rash as a mimic. No fatigue or joint pain is reported, but that alone does not rule lupus out; explain remaining uncertainty.'],
 ['Acne vulgaris','The absence of comedones and pustules on the supplied examination makes this less likely in the source comparison.']
 ],
 debrief:['Use OPQRSTU plus previous episodes and the patient’s explanation of the problem.','Include topical products, eye symptoms, systemic symptoms and social impact.','Rank alternatives and state evidence for and against each without turning unknown answers into negatives.','Summarize and check that you understood the patient’s concerns.'],
 limitation:'This source ends with a differential list and provides no complete treatment plan. Treatment and prescribing are not scored in this questioning drill.',
 references:[['American Academy of Dermatology: rosacea and eye symptoms','https://www.aad.org/public/diseases/rosacea/what-is/red-face']]
 }
];
