'use strict';
// Revised October 17: closely matched distractors and explicit option-by-option feedback.
Object.assign(PRACTICE_SOURCES,{
 theraFoundations:{title:'Your THERA 1 notes: I Can PresCribE A Drug, blocks 353–368',url:'sources/THERA 1.docx'},
 cnoNPOct2026:{title:'CNO Nurse Practitioner standard',url:'https://cno.org/Assets/CNO/Documents/Standard-and-Learning/Practice-Standards/41038_strdrnec.pdf'},
 cnoNPFAQ:{title:'CNO NP practice FAQs',url:'https://www.cno.org/standards-learning/nurse-practitioners/np-practice-faqs'}
});
const THERA_EXAM_ROWS=[
 {
  "id": "gas-amox-exact",
  "parent": "gas-first",
  "skill": "regimen",
  "prompt": "An adult with confirmed GAS pharyngitis has no allergy or renal impairment. Which amoxicillin order matches MUMS 2024?",
  "options": [
   "500 mg PO BID × 10 days",
   "500 mg PO TID × 5 days",
   "500 mg PO BID × 7 days",
   "250 mg PO TID × 10 days"
  ],
  "why": "500 mg twice daily for 10 days matches this adult GAS regimen.",
  "optionRationales": [
   "500 mg twice daily for 10 days matches this adult GAS regimen.",
   "This changes both frequency and duration; the sinusitis schedule is not the GAS schedule.",
   "The dose/frequency fit, but the 7-day duration does not match this GAS regimen.",
   "This dose/frequency does not match the referenced adult amoxicillin regimen."
  ],
  "priorId": "thera-exam-20261017-gas-penv"
 },
 {
  "id": "gas-penv-exact",
  "parent": "gas-first",
  "skill": "regimen",
  "prompt": "For an adult with confirmed GAS, which penicillin V order matches one MUMS regimen?",
  "options": [
   "300 mg PO TID × 10 days",
   "300 mg PO BID × 10 days",
   "600 mg PO BID × 5 days",
   "600 mg PO once daily × 10 days"
  ],
  "why": "MUMS lists 300 mg TID or 600 mg BID, each for 10 days.",
  "optionRationales": [
   "MUMS lists 300 mg TID or 600 mg BID, each for 10 days.",
   "The 300-mg option requires TID, not BID.",
   "600 mg BID is listed, but not this 5-day course.",
   "The 600-mg option requires BID, not once daily."
  ],
  "priorId": "thera-exam-20261017-indication"
 },
 {
  "id": "gas-macrolide-exact",
  "parent": "gas-anaphylaxis",
  "skill": "allergy",
  "prompt": "An adult with GAS had immediate penicillin anaphylaxis. Interaction, QT and resistance review supports clarithromycin. Which order matches MUMS?",
  "options": [
   "Clarithromycin 250 mg PO BID × 10 days",
   "Clarithromycin 250 mg PO once daily × 10 days",
   "Clarithromycin 500 mg PO daily × 3 days",
   "Clarithromycin 500 mg day 1, then 250 mg daily days 2–5"
  ],
  "why": "Clarithromycin is 250 mg BID for 10 days in this source.",
  "optionRationales": [
   "Clarithromycin is 250 mg BID for 10 days in this source.",
   "The frequency is too low for the referenced regimen.",
   "This dose/duration is not the listed clarithromycin GAS course.",
   "This borrows the azithromycin step-down pattern rather than the clarithromycin regimen."
  ],
  "priorId": "thera-exam-20261017-gas-allergy"
 },
 {
  "id": "gas-azithro-exact",
  "parent": "gas-azithro",
  "skill": "regimen",
  "prompt": "Azithromycin is selected for adult GAS after the relevant safety/resistance review. Which complete order matches MUMS?",
  "options": [
   "500 mg PO day 1, then 250 mg daily days 2–5",
   "500 mg PO day 1, then 250 mg daily days 2–10",
   "250 mg PO BID × 10 days",
   "250 mg PO daily × 5 days"
  ],
  "why": "A 500-mg first dose plus four 250-mg doses completes the 5-day regimen.",
  "optionRationales": [
   "A 500-mg first dose plus four 250-mg doses completes the 5-day regimen.",
   "The step-down dose is continued too long for this referenced course.",
   "This is the clarithromycin schedule, not the azithromycin schedule.",
   "This omits the 500-mg day-1 dose."
  ],
  "priorId": "thera-exam-20261017-gas-azithro"
 },
 {
  "id": "gas-child-calc",
  "parent": "gas-child",
  "skill": "calculation",
  "prompt": "A 25-kg child with GAS is prescribed amoxicillin 40 mg/kg/DAY divided BID × 10 days, maximum 1 g/day. Suspension: 250 mg/5 mL. Which dose and quantity are correct?",
  "options": [
   "10 mL PO BID; 200 mL",
   "20 mL PO BID; 400 mL",
   "10 mL PO once daily; 100 mL",
   "5 mL PO BID; 100 mL"
  ],
  "why": "1000 mg/day ÷ 2 = 500 mg/dose; 50 mg/mL gives 10 mL, and 20 doses need 200 mL.",
  "optionRationales": [
   "1000 mg/day ÷ 2 = 500 mg/dose; 50 mg/mL gives 10 mL, and 20 doses need 200 mL.",
   "This treats the daily total as each BID dose and doubles the prescribed daily amount.",
   "This supplies only half the prescribed daily amount.",
   "This also supplies half the prescribed daily amount, through halving each BID dose."
  ],
  "priorId": "thera-exam-20261017-gas-child-volume"
 },
 {
  "id": "gas-child-max",
  "parent": "gas-child",
  "skill": "calculation",
  "prompt": "A 40-kg child with GAS is assigned amoxicillin 40 mg/kg/DAY divided BID, maximum 1 g/day, × 10 days. Suspension: 400 mg/5 mL. Which unrounded order applies the maximum?",
  "options": [
   "6.25 mL PO BID; 125 mL",
   "10 mL PO BID; 200 mL",
   "12.5 mL PO BID; 250 mL",
   "6.25 mL PO TID; 187.5 mL"
  ],
  "why": "The calculated 1600 mg/day is capped at 1000; 500 mg/dose ÷ 80 mg/mL = 6.25 mL BID.",
  "optionRationales": [
   "The calculated 1600 mg/day is capped at 1000; 500 mg/dose ÷ 80 mg/mL = 6.25 mL BID.",
   "This uses the uncapped 1600-mg daily amount.",
   "This gives 2000 mg/day, exceeding the specified maximum.",
   "The per-dose volume fits BID, but TID gives 1500 mg/day."
  ],
  "priorId": "thera-exam-20261017-contraindication"
 },
 {
  "id": "aom-dose-exact",
  "parent": "aom-first",
  "skill": "dose",
  "prompt": "A 15-month-old with AOM is selected for MUMS amoxicillin, with normal renal function. Which order matches its high-dose daily range and age-specific duration?",
  "options": [
   "80–90 mg/kg/DAY PO divided BID or TID × 10 days",
   "80–90 mg/kg/DOSE PO BID × 10 days",
   "80–90 mg/kg/DAY PO divided BID × 5 days",
   "40 mg/kg/DAY PO divided BID × 10 days"
  ],
  "why": "Use the 80–90 mg/kg daily total, divided into doses; age under 2 requires 10 days here.",
  "optionRationales": [
   "Use the 80–90 mg/kg daily total, divided into doses; age under 2 requires 10 days here.",
   "This turns the daily range into each dose, greatly increasing daily exposure.",
   "The high-dose range fits, but the 5-day course does not fit this age.",
   "This borrows the MUMS GAS daily amount rather than the cited high-dose AOM range."
  ],
  "priorId": "thera-exam-20261017-aom-dose"
 },
 {
  "id": "aom-age-three",
  "parent": "aom-duration",
  "skill": "duration",
  "prompt": "Using MUMS, match AOM durations for: a 13-month-old; a 5-year-old with uncomplicated disease; a 5-year-old with recurrent disease.",
  "options": [
   "10 days; 5 days; 10 days",
   "10 days; 5 days; 5 days",
   "5 days; 5 days; 10 days",
   "10 days; 10 days; 5 days"
  ],
  "why": "Young age and recurrent/complicated disease need 10 days; uncomplicated disease over age 2 uses 5 days.",
  "optionRationales": [
   "Young age and recurrent/complicated disease need 10 days; uncomplicated disease over age 2 uses 5 days.",
   "This incorrectly gives recurrent disease the short course.",
   "This incorrectly gives the under-2 child the short course.",
   "This reverses the uncomplicated/recurrent distinction in the older children."
  ],
  "priorId": "thera-exam-20261017-affordability"
 },
 {
  "id": "aom-benign-rash",
  "parent": "aom-allergy",
  "skill": "allergy",
  "prompt": "A 16-month-old with AOM had a benign delayed amoxicillin rash, not immediate or severe delayed allergy. Which cefprozil order matches MUMS?",
  "options": [
   "30 mg/kg/DAY PO divided BID × 10 days; max 1 g/day",
   "30 mg/kg/DOSE PO BID × 10 days; max 1 g/dose",
   "30 mg/kg/DAY PO divided BID × 5 days; max 1 g/day",
   "15 mg/kg/DAY PO divided BID × 10 days; max 1 g/day"
  ],
  "why": "The listed total is 30 mg/kg/day in two doses, maximum 1 g/day; this age uses 10 days.",
  "optionRationales": [
   "The listed total is 30 mg/kg/day in two doses, maximum 1 g/day; this age uses 10 days.",
   "This doubles the daily amount and misstates the maximum as per dose.",
   "The dose is right, but the age-specific duration is too short.",
   "This halves the referenced total daily amount."
  ],
  "priorId": "thera-exam-20261017-aom-rash"
 },
 {
  "id": "aom-calc-exact",
  "parent": "aom-stella",
  "skill": "calculation",
  "prompt": "A 10-kg toddler with AOM is prescribed amoxicillin 90 mg/kg/DAY divided BID × 10 days. Suspension: 400 mg/5 mL. Which unrounded dose/course volume is correct?",
  "options": [
   "5.625 mL BID; 112.5 mL",
   "11.25 mL BID; 225 mL",
   "5.625 mL BID; 56.25 mL",
   "2.8125 mL BID; 56.25 mL"
  ],
  "why": "900 mg/day ÷ 2 = 450 mg/dose; at 80 mg/mL this is 5.625 mL. Twenty doses need 112.5 mL before measurable rounding/package allowance.",
  "optionRationales": [
   "900 mg/day ÷ 2 = 450 mg/dose; at 80 mg/mL this is 5.625 mL. Twenty doses need 112.5 mL before measurable rounding/package allowance.",
   "This gives the entire daily amount at each BID dose.",
   "The dose is right but the supply covers only 5 days.",
   "This halves the dose and provides only half the required daily amount."
  ],
  "priorId": "thera-exam-20261017-aom-calc"
 },
 {
  "id": "aom-cefprozil-calc",
  "parent": "aom-allergy",
  "skill": "calculation",
  "prompt": "For a 20-kg child with AOM, cefprozil 30 mg/kg/DAY divided BID × 5 days is selected after benign-rash review. Suspension: 250 mg/5 mL. Which order is correct?",
  "options": [
   "6 mL PO BID; 60 mL",
   "12 mL PO BID; 120 mL",
   "3 mL PO BID; 30 mL",
   "6 mL PO TID; 90 mL"
  ],
  "why": "600 mg/day ÷ 2 = 300 mg/dose; at 50 mg/mL this is 6 mL. Ten doses need 60 mL.",
  "optionRationales": [
   "600 mg/day ÷ 2 = 300 mg/dose; at 50 mg/mL this is 6 mL. Ten doses need 60 mL.",
   "This doubles the prescribed daily amount.",
   "This halves the prescribed daily amount.",
   "This changes the supplied BID regimen to TID, increasing daily exposure."
  ],
  "priorId": "thera-exam-20261017-directions"
 },
 {
  "id": "oe-exact",
  "parent": "oe-first",
  "skill": "regimen",
  "prompt": "Otitis externa is diagnosed with uncertain TM integrity. Ciprofloxacin 0.3%/dexamethasone 0.1% otic suspension is selected. Which MUMS OE order is correct?",
  "options": [
   "4 drops in the affected ear BID × 7 days",
   "2 drops in the affected ear BID × 7 days",
   "4 drops in the affected ear once daily × 7 days",
   "4 drops in the affected ear BID × 5 days"
  ],
  "why": "The referenced OE regimen is 4 drops BID for 7 days; this is not a tube-otorrhea duration item.",
  "optionRationales": [
   "The referenced OE regimen is 4 drops BID for 7 days; this is not a tube-otorrhea duration item.",
   "This halves the specified number of drops.",
   "This halves the specified administration frequency.",
   "This shortens the specified OE course."
  ],
  "priorId": "thera-exam-20261017-oe-tm"
 },
 {
  "id": "eye-fusidic-exact",
  "parent": "conjunctivitis-first",
  "skill": "regimen",
  "prompt": "Fusidic acid 1% ophthalmic drops are selected for uncomplicated bacterial conjunctivitis. Which MUMS-listed schedule fits? This is one option, not a universal first line.",
  "options": [
   "1 drop in affected eye(s) BID × 5–7 days",
   "1 drop in affected eye(s) once daily × 5–7 days",
   "2 drops in affected eye(s) QID × 5–7 days",
   "1 drop in affected eye(s) BID × 10–14 days"
  ],
  "why": "The cited option is one drop twice daily for 5–7 days; write a definite duration when prescribing.",
  "optionRationales": [
   "The cited option is one drop twice daily for 5–7 days; write a definite duration when prescribing.",
   "Once daily does not match this referenced schedule.",
   "This increases both drops and frequency beyond this schedule.",
   "This duration does not match this listed uncomplicated conjunctivitis regimen."
  ],
  "priorId": "thera-exam-20261017-consult"
 },
 {
  "id": "sinus-adult-exact",
  "parent": "sinusitis-first",
  "skill": "regimen",
  "prompt": "An adult with bacterial sinusitis needs antibiotics, has no allergy and normal renal function. A 7-day course is chosen. Which MUMS amoxicillin order fits?",
  "options": [
   "500 mg PO TID × 7 days",
   "500 mg PO BID × 7 days",
   "500 mg PO once daily × 7 days",
   "250 mg PO TID × 7 days"
  ],
  "why": "MUMS lists adult sinusitis amoxicillin 500 mg TID, with 7 days within its general 5–10-day range.",
  "optionRationales": [
   "MUMS lists adult sinusitis amoxicillin 500 mg TID, with 7 days within its general 5–10-day range.",
   "This borrows the adult GAS frequency instead of the referenced sinusitis frequency.",
   "This reduces the frequency to once daily.",
   "This halves each dose from the referenced adult sinusitis regimen."
  ],
  "priorId": "thera-exam-20261017-sinus-adult"
 },
 {
  "id": "sinus-preg-exact",
  "parent": "sinusitis-preg",
  "skill": "pregnancy",
  "prompt": "A pregnant adult with bacterial sinusitis needs antibiotics, has no penicillin allergy and normal renal function. A 7-day course is selected. Which option matches the MUMS regimen and linked pregnancy guidance?",
  "options": [
   "Amoxicillin 500 mg PO TID × 7 days",
   "Amoxicillin 500 mg PO BID × 7 days",
   "Doxycycline 100 mg PO BID day 1, then daily days 2–7",
   "Amoxicillin 250 mg PO TID × 7 days"
  ],
  "why": "Amoxicillin is supported in pregnancy; the listed adult sinusitis regimen is 500 mg TID.",
  "optionRationales": [
   "Amoxicillin is supported in pregnancy; the listed adult sinusitis regimen is 500 mg TID.",
   "The drug is appropriate but BID does not match this MUMS sinusitis schedule.",
   "The schedule is a listed nonpregnancy alternative, but doxycycline is not the routine pregnancy choice here.",
   "This uses half the listed adult dose."
  ],
  "priorId": "thera-exam-20261017-shared-plan"
 },
 {
  "id": "sinus-doxy-exact",
  "parent": "sinusitis-doxy",
  "skill": "regimen",
  "prompt": "For a nonpregnant adult with bacterial sinusitis, a MUMS doxycycline course lasting SEVEN total days is selected. Which order and 100-mg-tablet quantity match?",
  "options": [
   "100 mg BID day 1, then daily days 2–7; 8 tablets",
   "100 mg BID day 1, then daily days 2–7; 7 tablets",
   "100 mg BID days 1–7; 14 tablets",
   "100 mg daily days 1–7; 7 tablets"
  ],
  "why": "Two tablets on day 1 plus six on days 2–7 equals 8.",
  "optionRationales": [
   "Two tablets on day 1 plus six on days 2–7 equals 8.",
   "The directions need 8 tablets, not 7.",
   "This continues the loading-day frequency through the full course.",
   "This omits the second day-1 dose."
  ],
  "priorId": "thera-exam-20261017-monitor"
 },
 {
  "id": "sinus-child-exact",
  "parent": "sinusitis-child",
  "skill": "dose",
  "prompt": "A child with bacterial sinusitis is selected for MUMS amoxicillin. Which daily dose and usual duration fit?",
  "options": [
   "80 mg/kg/DAY divided BID or TID × 10–14 days; max 4 g/day",
   "80 mg/kg/DOSE BID × 10–14 days; max 4 g/day",
   "80 mg/kg/DAY divided BID × 5 days; max 4 g/day",
   "40 mg/kg/DAY divided BID × 10 days; max 1 g/day"
  ],
  "why": "The source gives 80 mg/kg/day divided into doses, usual 10–14 days, maximum 4 g/day.",
  "optionRationales": [
   "The source gives 80 mg/kg/day divided into doses, usual 10–14 days, maximum 4 g/day.",
   "This makes 80 mg/kg the per-dose amount rather than daily amount.",
   "This imports the short older-child AOM course.",
   "This borrows the MUMS pediatric GAS regimen rather than sinusitis."
  ],
  "priorId": "thera-exam-20261017-sinus-child"
 },
 {
  "id": "rhinitis-spray-exact",
  "parent": "rhinitis-aaron",
  "skill": "regimen",
  "prompt": "An eligible adult with allergic rhinitis is selected for the seminar’s azelastine/fluticasone combination nasal product at its labelled strength. Which directions match the seminar?",
  "options": [
   "1 spray in each nostril BID",
   "1 spray in each nostril once daily",
   "2 sprays in each nostril once weekly",
   "2 sprays in one nostril BID, alternating nostrils daily"
  ],
  "why": "The seminar regimen is one spray in each nostril twice daily; confirm product/age eligibility.",
  "optionRationales": [
   "The seminar regimen is one spray in each nostril twice daily; confirm product/age eligibility.",
   "This halves the daily frequency.",
   "Weekly administration does not match the prescribed daily regimen.",
   "Each administration should treat both nostrils as prescribed, not alternate sides by day."
  ],
  "priorId": "thera-exam-20261017-rhinitis-older"
 },
 {
  "id": "croup-dex-exact",
  "parent": "croup-dex",
  "skill": "regimen",
  "prompt": "A child has diagnosed croup. Which dexamethasone schedule matches the referenced regimen, before applying the locally specified maximum?",
  "options": [
   "0.6 mg/kg PO once",
   "0.6 mg/kg PO daily × 5 days",
   "0.06 mg/kg PO once",
   "0.6 mg/kg/DAY PO divided BID × 3 days"
  ],
  "why": "This regimen is a single oral 0.6-mg/kg dose; verify the local maximum and preparation.",
  "optionRationales": [
   "This regimen is a single oral 0.6-mg/kg dose; verify the local maximum and preparation.",
   "This turns one-dose treatment into five doses.",
   "This is a tenfold lower dose.",
   "This changes the supplied one-dose regimen into a repeated divided course."
  ],
  "priorId": "thera-exam-20261017-reconcile"
 },
 {
  "id": "croup-calc-exact",
  "parent": "croup-dex",
  "skill": "calculation",
  "prompt": "A 14-kg child with croup is assigned dexamethasone 0.6 mg/kg PO once. The local maximum is 10 mg; liquid is 2 mg/mL. Which dose and volume are correct?",
  "options": [
   "8.4 mg; 4.2 mL once",
   "8.4 mg; 8.4 mL once",
   "10 mg; 5 mL once",
   "0.84 mg; 0.42 mL once"
  ],
  "why": "14 × 0.6 = 8.4 mg, below the supplied maximum; divide by 2 mg/mL for 4.2 mL.",
  "optionRationales": [
   "14 × 0.6 = 8.4 mg, below the supplied maximum; divide by 2 mg/mL for 4.2 mL.",
   "This treats the liquid as 1 mg/mL.",
   "A maximum is a ceiling, not a dose to give every child.",
   "This introduces a tenfold calculation error."
  ],
  "priorId": "thera-exam-20261017-aom-review"
 },
 {
  "id": "pertussis-exact",
  "parent": "pertussis-azithro",
  "skill": "regimen",
  "prompt": "Azithromycin is selected for an adult with pertussis. Which MUMS order and number of 250-mg tablets fit?",
  "options": [
   "500 mg day 1, then 250 mg daily days 2–5; 6 tablets",
   "500 mg day 1, then 250 mg daily days 2–5; 5 tablets",
   "250 mg BID × 10 days; 20 tablets",
   "500 mg daily × 5 days; 10 tablets"
  ],
  "why": "Two tablets day 1 plus four later tablets gives six; public-health/contact assessment also matters.",
  "optionRationales": [
   "Two tablets day 1 plus four later tablets gives six; public-health/contact assessment also matters.",
   "The loading dose needs two tablets, so five is insufficient.",
   "This substitutes the clarithromycin-style schedule rather than this azithromycin order.",
   "This retains the loading dose for every day rather than stepping down."
  ],
  "priorId": "thera-exam-20261017-oe-instructions"
 },
 {
  "id": "impetigo-topical-exact",
  "parent": "impetigo-topical",
  "skill": "regimen",
  "prompt": "A well child has localized nonbullous impetigo without cellulitis or an outbreak. Mupirocin is selected. Which MUMS order fits?",
  "options": [
   "Mupirocin 2% thin application TID × 5–7 days",
   "Mupirocin 2% thin application BID × 10–14 days",
   "Mupirocin 1% thin application TID × 5–7 days",
   "Mupirocin 2% thin application once daily × 5–7 days"
  ],
  "why": "The cited regimen is 2% applied three times daily for 5–7 days.",
  "optionRationales": [
   "The cited regimen is 2% applied three times daily for 5–7 days.",
   "This changes both the referenced frequency and duration.",
   "The referenced preparation is 2%, not 1%.",
   "This reduces the referenced application frequency."
  ],
  "priorId": "thera-exam-20261017-impetigo-local"
 },
 {
  "id": "impetigo-oral-exact",
  "parent": "impetigo-oral",
  "skill": "regimen",
  "prompt": "An adult with extensive impetigo in an outbreak is selected for cephalexin 500 mg per dose and a 7-day course under MUMS. Which complete order fits?",
  "options": [
   "500 mg PO QID × 7 days; 28 capsules",
   "500 mg PO TID × 7 days; 21 capsules",
   "500 mg PO BID × 7 days; 14 capsules",
   "500 mg PO QID × 7 days; 21 capsules"
  ],
  "why": "QID is the listed frequency; four daily doses for seven days needs 28 capsules.",
  "optionRationales": [
   "QID is the listed frequency; four daily doses for seven days needs 28 capsules.",
   "The quantity matches TID, but the frequency does not match this referenced regimen.",
   "The quantity matches BID, but the frequency does not match this referenced regimen.",
   "The directions fit, but the quantity is seven doses short."
  ],
  "priorId": "thera-exam-20261017-oe-escalation"
 },
 {
  "id": "impetigo-calc-exact",
  "parent": "impetigo-childcalc",
  "skill": "calculation",
  "prompt": "A 24-kg child with impetigo is assigned cephalexin 50 mg/kg/DAY divided QID × 7 days. Suspension: 250 mg/5 mL. Which is correct?",
  "options": [
   "6 mL PO QID; 168 mL",
   "24 mL PO QID; 672 mL",
   "6 mL PO BID; 84 mL",
   "3 mL PO QID; 84 mL"
  ],
  "why": "1200 mg/day ÷ 4 = 300 mg/dose; at 50 mg/mL this is 6 mL, 168 mL over 7 days.",
  "optionRationales": [
   "1200 mg/day ÷ 4 = 300 mg/dose; at 50 mg/mL this is 6 mL, 168 mL over 7 days.",
   "This gives the daily amount at each dose.",
   "This changes QID to BID and halves daily exposure.",
   "This halves each prescribed dose."
  ],
  "priorId": "thera-exam-20261017-impetigo-volume"
 },
 {
  "id": "cellulitis-cephalexin-exact",
  "parent": "cellulitis-first",
  "skill": "regimen",
  "prompt": "An adult has mild uncomplicated nonpurulent cellulitis, no abscess/allergy and normal renal function. Which initial MUMS cephalexin order fits a responding case?",
  "options": [
   "500 mg PO QID × 5 days",
   "500 mg PO BID × 5 days",
   "250 mg PO TID × 5 days",
   "500 mg PO QID × 3 days"
  ],
  "why": "The referenced initial regimen is 500 mg QID for 5 days, reassessing/extending if clinically needed.",
  "optionRationales": [
   "The referenced initial regimen is 500 mg QID for 5 days, reassessing/extending if clinically needed.",
   "This halves the listed daily amount by changing frequency.",
   "Neither dose nor frequency matches this listed adult cellulitis order.",
   "This shortens the cited initial course."
  ],
  "priorId": "thera-exam-20261017-cellulitis-course"
 },
 {
  "id": "cellulitis-quantity-exact",
  "parent": "cellulitis-first",
  "skill": "prescription",
  "prompt": "Cephalexin 500 mg PO QID × 5 days is selected for adult uncomplicated cellulitis. The pharmacy will dispense 250-mg capsules. Which directions and quantity deliver the order?",
  "options": [
   "2 capsules QID; 40 capsules",
   "1 capsule QID; 20 capsules",
   "2 capsules BID; 20 capsules",
   "2 capsules QID; 20 capsules"
  ],
  "why": "Each 500-mg dose needs two 250-mg capsules; 2 × 4 × 5 = 40.",
  "optionRationales": [
   "Each 500-mg dose needs two 250-mg capsules; 2 × 4 × 5 = 40.",
   "One capsule supplies only 250 mg per dose.",
   "This halves the administration frequency.",
   "The directions fit but the quantity supplies only half the course."
  ],
  "priorId": "thera-exam-20261017-eye-review"
 },
 {
  "id": "bite-amoxclav-exact",
  "parent": "bite-first",
  "skill": "regimen",
  "prompt": "An adult with an infected dog bite has no allergy and normal renal function. A 7-day course using amoxicillin/clavulanate 875/125-mg tablets is chosen. Which MUMS order fits?",
  "options": [
   "875/125 mg PO BID × 7 days",
   "875/125 mg PO once daily × 7 days",
   "500/125 mg PO BID × 7 days",
   "875/125 mg PO BID × 3 days"
  ],
  "why": "875/125 mg BID is one referenced bite regimen; 7 days is within its infection-treatment range.",
  "optionRationales": [
   "875/125 mg BID is one referenced bite regimen; 7 days is within its infection-treatment range.",
   "Once daily does not match the listed regimen.",
   "The listed 500/125-mg alternative is TID, not BID.",
   "This borrows a prophylaxis-length course for established infection."
  ],
  "priorId": "thera-exam-20261017-bite-duration"
 },
 {
  "id": "bite-formulation-exact",
  "parent": "bite-first",
  "skill": "regimen",
  "prompt": "A 7-day course of amoxicillin/clavulanate 500/125 mg is selected for an adult infected bite. Which schedule and quantity match MUMS?",
  "options": [
   "1 tablet PO TID; 21 tablets",
   "1 tablet PO BID; 14 tablets",
   "1 tablet PO QID; 28 tablets",
   "1 tablet PO TID; 14 tablets"
  ],
  "why": "The listed 500/125-mg schedule is TID; 3 × 7 = 21 tablets.",
  "optionRationales": [
   "The listed 500/125-mg schedule is TID; 3 × 7 = 21 tablets.",
   "This borrows the frequency of the different 875/125-mg regimen.",
   "This increases frequency beyond the listed 500/125-mg regimen.",
   "The frequency fits but the supply is short."
  ],
  "priorId": "thera-exam-20261017-eye-contact"
 },
 {
  "id": "bite-duration-exact",
  "parent": "bite-first",
  "skill": "duration",
  "prompt": "Using MUMS usual durations, which pair correctly matches high-risk UNINFECTED bite prophylaxis versus established bite-infection treatment?",
  "options": [
   "3–5 days; 7–14 days",
   "7–14 days; 3–5 days",
   "3–5 days; 3–5 days",
   "7–14 days; 7–14 days"
  ],
  "why": "MUMS separates short prophylaxis from longer treatment; wound depth and response still affect the plan.",
  "optionRationales": [
   "MUMS separates short prophylaxis from longer treatment; wound depth and response still affect the plan.",
   "This reverses prophylaxis and treatment.",
   "This assigns the prophylaxis duration to established infection.",
   "This assigns the treatment duration to prophylaxis."
  ],
  "priorId": "thera-exam-20261017-aom-prevention"
 },
 {
  "id": "foot-dual-exact",
  "parent": "foot-first",
  "skill": "regimen",
  "prompt": "A mild, non-limb-threatening diabetic-foot soft-tissue infection is selected for MUMS cephalexin PLUS metronidazole because anaerobic coverage is indicated. A 7-day course is chosen. Which pair fits?",
  "options": [
   "Cephalexin 500 mg QID + metronidazole 500 mg BID × 7 days",
   "Cephalexin 500 mg BID + metronidazole 500 mg BID × 7 days",
   "Cephalexin 500 mg QID + metronidazole 500 mg once daily × 7 days",
   "Cephalexin 250 mg QID + metronidazole 250 mg BID × 7 days"
  ],
  "why": "The cited conditional combination uses cephalexin 500 mg QID and metronidazole 500 mg BID; 7 days is within 1–2 weeks. This is not a universal plan for every foot infection.",
  "optionRationales": [
   "The cited conditional combination uses cephalexin 500 mg QID and metronidazole 500 mg BID; 7 days is within 1–2 weeks. This is not a universal plan for every foot infection.",
   "The cephalexin frequency is halved.",
   "The metronidazole frequency is halved.",
   "Both drug doses are halved from this cited combination."
  ],
  "priorId": "thera-exam-20261017-sinus-day3"
 },
 {
  "id": "foot-quantities-exact",
  "parent": "foot-first",
  "skill": "calculation",
  "prompt": "The selected foot-infection order is cephalexin 500 mg QID plus metronidazole 500 mg BID, both for 10 days. Using 500-mg units, which quantities match?",
  "options": [
   "40 cephalexin capsules + 20 metronidazole tablets",
   "20 cephalexin capsules + 40 metronidazole tablets",
   "40 cephalexin capsules + 40 metronidazole tablets",
   "20 cephalexin capsules + 20 metronidazole tablets"
  ],
  "why": "QID × 10 gives 40 cephalexin doses; BID × 10 gives 20 metronidazole doses.",
  "optionRationales": [
   "QID × 10 gives 40 cephalexin doses; BID × 10 gives 20 metronidazole doses.",
   "This reverses the two frequencies.",
   "This incorrectly applies QID to both drugs.",
   "This incorrectly applies BID to both drugs."
  ],
  "priorId": "thera-exam-20261017-rhinitis-technique"
 },
 {
  "id": "zoster-valacyclovir-exact",
  "parent": "zoster-first",
  "skill": "regimen",
  "prompt": "An adult has shingles with normal renal function and is selected for valacyclovir. Which MUMS order fits?",
  "options": [
   "1 g PO TID × 7 days",
   "1 g PO BID × 7 days",
   "2 g PO BID × 1 day",
   "500 mg PO TID × 7 days"
  ],
  "why": "Shingles uses 1 g TID for 7 days in the referenced normal-renal-function regimen.",
  "optionRationales": [
   "Shingles uses 1 g TID for 7 days in the referenced normal-renal-function regimen.",
   "This is not the referenced normal-renal-function shingles frequency.",
   "This is the recurrent herpes-labialis regimen, not shingles.",
   "This halves the listed shingles dose."
  ],
  "priorId": "thera-exam-20261017-zoster-order"
 },
 {
  "id": "zoster-500mg-exact",
  "parent": "zoster-first",
  "skill": "calculation",
  "prompt": "An adult’s shingles order is valacyclovir 1 g TID × 7 days. Only 500-mg tablets will be dispensed. Which directions/quantity match?",
  "options": [
   "2 tablets TID; 42 tablets",
   "1 tablet TID; 21 tablets",
   "2 tablets BID; 28 tablets",
   "2 tablets TID; 21 tablets"
  ],
  "why": "Each 1-g dose requires two tablets; 2 × 3 × 7 = 42.",
  "optionRationales": [
   "Each 1-g dose requires two tablets; 2 × 3 × 7 = 42.",
   "One tablet is only half the ordered dose.",
   "This reduces the ordered frequency.",
   "The directions fit but the quantity covers half the course."
  ],
  "priorId": "thera-exam-20261017-abscess"
 },
 {
  "id": "coldsores-valacyclovir-exact",
  "parent": "zoster-coldsores",
  "skill": "regimen",
  "prompt": "An adult with recurrent herpes labialis and normal renal function starts treatment at prodrome. Which MUMS valacyclovir schedule and 500-mg-tablet quantity fit?",
  "options": [
   "2 g PO BID for 1 day; 8 tablets",
   "1 g PO TID for 7 days; 42 tablets",
   "2 g PO once for 1 day; 4 tablets",
   "1 g PO BID for 1 day; 4 tablets"
  ],
  "why": "Each 2-g dose is four 500-mg tablets; two doses in one day need eight.",
  "optionRationales": [
   "Each 2-g dose is four 500-mg tablets; two doses in one day need eight.",
   "This substitutes the shingles regimen.",
   "This omits the second 2-g dose.",
   "This halves each dose."
  ],
  "priorId": "thera-exam-20261017-mrsa"
 },
 {
  "id": "lyme-treatment-exact",
  "parent": "lyme-treat",
  "skill": "regimen",
  "prompt": "A nonpregnant adult has erythema migrans diagnosed as early Lyme disease. Doxycycline is selected. Which MUMS treatment order fits?",
  "options": [
   "100 mg PO BID × 10 days",
   "200 mg PO once within 72 hours of tick removal",
   "100 mg PO once daily × 10 days",
   "100 mg PO BID × 3 days"
  ],
  "why": "The cited early-Lyme treatment is doxycycline 100 mg BID for 10 days.",
  "optionRationales": [
   "The cited early-Lyme treatment is doxycycline 100 mg BID for 10 days.",
   "This is selected-exposure prophylaxis, not treatment of established erythema migrans.",
   "This halves the referenced treatment frequency.",
   "This shortens the referenced treatment course."
  ],
  "priorId": "thera-exam-20261017-cellulitis-support"
 },
 {
  "id": "lyme-amoxicillin-exact",
  "parent": "lyme-treat",
  "skill": "regimen",
  "prompt": "Amoxicillin is selected for an adult with diagnosed early Lyme disease and no allergy or renal impairment. Which MUMS order fits?",
  "options": [
   "500 mg PO TID × 14 days",
   "500 mg PO BID × 10 days",
   "500 mg PO TID × 7 days",
   "250 mg PO TID × 14 days"
  ],
  "why": "The cited alternative is amoxicillin 500 mg TID for 14 days.",
  "optionRationales": [
   "The cited alternative is amoxicillin 500 mg TID for 14 days.",
   "This borrows the adult GAS schedule.",
   "The frequency/dose fit but the duration is halved.",
   "This halves the referenced adult dose."
  ],
  "priorId": "thera-exam-20261017-bite-quantity"
 },
 {
  "id": "lyme-prophylaxis-exact",
  "parent": "lyme-prophylaxis",
  "skill": "regimen",
  "prompt": "A nonpregnant adult meets all local/MUMS criteria for tick-bite prophylaxis, including vector/endemic exposure, attachment ≥36 hours and timing ≤72 hours after removal. Which regimen matches?",
  "options": [
   "Doxycycline 200 mg PO once",
   "Doxycycline 100 mg PO once",
   "Doxycycline 100 mg PO BID × 10 days",
   "Amoxicillin 500 mg PO TID × 14 days"
  ],
  "why": "For an eligible exposure, the cited prophylaxis is a single 200-mg dose; current local criteria must be met.",
  "optionRationales": [
   "For an eligible exposure, the cited prophylaxis is a single 200-mg dose; current local criteria must be met.",
   "This halves the specified one-time dose.",
   "This is an established early-Lyme treatment course, not this prophylaxis schedule.",
   "This is an established early-Lyme treatment alternative, not the cited prophylaxis regimen."
  ],
  "priorId": "thera-exam-20261017-bite-rabies"
 },
 {
  "id": "lice-permethrin-exact",
  "parent": "lice-permethrin",
  "skill": "regimen",
  "prompt": "For an eligible child with live head lice, which permethrin formulation/contact-time/repeat plan matches the supplied seminar and CPS-linked guidance?",
  "options": [
   "1% rinse, 10 minutes, repeat day 9",
   "5% cream, 10 minutes, repeat day 9",
   "1% rinse, 8–14 hours, repeat day 9",
   "1% rinse, 10 minutes, repeat the next day"
  ],
  "why": "The seminar uses 1% rinse for 10 minutes, repeated day 9 within the cited 7–10-day window; follow the exact product label.",
  "optionRationales": [
   "The seminar uses 1% rinse for 10 minutes, repeated day 9 within the cited 7–10-day window; follow the exact product label.",
   "5% cream is the scabies preparation, not this head-lice rinse.",
   "This borrows the scabies contact-time range.",
   "The next day does not match the referenced repeat interval."
  ],
  "priorId": "thera-exam-20261017-lice-repeat"
 },
 {
  "id": "scabies-permethrin-exact",
  "parent": "lice-scabies",
  "skill": "regimen",
  "prompt": "For an eligible adult with scabies, which permethrin plan matches the linked reference?",
  "options": [
   "5% cream to appropriate whole-body sites, 8–14 hours, repeat about 1 week later if indicated",
   "1% rinse to appropriate whole-body sites, 8–14 hours, repeat about 1 week later",
   "5% cream on visible lesions only, 8–14 hours, repeat about 1 week later",
   "5% cream to appropriate whole-body sites, 10 minutes, repeat about 1 week later"
  ],
  "why": "Use 5% cream on the indicated whole-body sites, generally neck down in adults, for 8–14 hours; coordinate contact treatment.",
  "optionRationales": [
   "Use 5% cream on the indicated whole-body sites, generally neck down in adults, for 8–14 hours; coordinate contact treatment.",
   "This substitutes the lice concentration/formulation.",
   "Spot treatment misses the required application distribution.",
   "This borrows the lice rinse contact time."
  ],
  "priorId": "thera-exam-20261017-scabies"
 },
 {
  "id": "acne-adapalene-exact",
  "parent": "acne-judith",
  "skill": "regimen",
  "prompt": "Adapalene 0.1% is selected for a nonpregnant patient’s acne. Which application schedule and initial review interval fit the seminar?",
  "options": [
   "Thin film to acne-prone affected areas nightly; review about 4–8 weeks",
   "Thin film to individual visible lesions nightly; review about 4–8 weeks",
   "Thin film to acne-prone areas TID; review about 4–8 weeks",
   "Thin film to acne-prone areas nightly; stop after a fixed 5-day course"
  ],
  "why": "The seminar uses nightly application to the affected acne-prone area, not only spot treatment; assess tolerability/response around 4–8 weeks.",
  "optionRationales": [
   "The seminar uses nightly application to the affected acne-prone area, not only spot treatment; assess tolerability/response around 4–8 weeks.",
   "Spot-only application does not match the field-treatment directions.",
   "TID does not match the referenced application frequency and can worsen irritation.",
   "Acne therapy/maintenance is not an acute 5-day antibiotic-style course."
  ],
  "priorId": "thera-exam-20261017-zoster-renal"
 },
 {
  "id": "acne-doxy-duration",
  "parent": "acne-gerry",
  "skill": "duration",
  "prompt": "Doxycycline 100 mg PO daily is selected for inflammatory acne with a suitable topical plan. Which duration strategy matches the linked study guidance?",
  "options": [
   "Review response and tolerability; limit systemic therapy, commonly about 3–4 months",
   "Use exactly 5 days, matching uncomplicated cellulitis",
   "Use exactly 10 days, matching GAS",
   "Maintain the antibiotic as the sole treatment for 12 months before review"
  ],
  "why": "Acne systemic antibiotic therapy is reviewed and limited, commonly about 3–4 months, with appropriate topical treatment; not every patient needs the same fixed duration.",
  "optionRationales": [
   "Acne systemic antibiotic therapy is reviewed and limited, commonly about 3–4 months, with appropriate topical treatment; not every patient needs the same fixed duration.",
   "This imports an acute skin-infection course into acne management.",
   "This imports a throat-infection course into acne management.",
   "This omits timely review and suitable concurrent/maintenance topical therapy."
  ],
  "priorId": "thera-exam-20261017-zoster-eye"
 },
 {
  "id": "acne-pregnancy-set",
  "parent": "acne-preg",
  "skill": "pregnancy",
  "prompt": "Which acne plan best fits a pregnant patient after formulation and individual-risk review?",
  "options": [
   "Consider azelaic acid; avoid adapalene, oral isotretinoin and routine doxycycline",
   "Consider adapalene; avoid azelaic acid, oral isotretinoin and routine doxycycline",
   "Consider doxycycline; avoid azelaic acid, adapalene and oral isotretinoin",
   "Consider oral isotretinoin; avoid azelaic acid, adapalene and doxycycline"
  ],
  "why": "The linked pregnancy guidance supports discussion of azelaic acid; the named retinoids and routine doxycycline should be avoided here.",
  "optionRationales": [
   "The linked pregnancy guidance supports discussion of azelaic acid; the named retinoids and routine doxycycline should be avoided here.",
   "This reverses the azelaic-acid/retinoid distinction.",
   "This selects routine doxycycline for pregnancy acne.",
   "This selects a contraindicated systemic retinoid."
  ],
  "priorId": "thera-exam-20261017-acne-preg"
 },
 {
  "id": "eczema-ftu-calc",
  "parent": "eczema-ftu",
  "skill": "calculation",
  "prompt": "A supplied ADULT eczema plan specifies 2 fingertip units per application, 0.5 g/FTU, BID × 7 days. Excluding package allowance, what quantity is needed?",
  "options": [
   "14 g",
   "7 g",
   "28 g",
   "3.5 g"
  ],
  "why": "2 × 0.5 = 1 g/application; 1 × 2 × 7 = 14 g. These supplied adult FTU assumptions must not be transferred to an infant.",
  "optionRationales": [
   "2 × 0.5 = 1 g/application; 1 × 2 × 7 = 14 g. These supplied adult FTU assumptions must not be transferred to an infant.",
   "This counts only one daily application.",
   "This treats each FTU as 1 g rather than the supplied 0.5 g.",
   "This halves the amount/application and omits the second daily application."
  ],
  "priorId": "thera-exam-20261017-varicella-child"
 },
 {
  "id": "fever-concentration-calc",
  "parent": "fever-concentration",
  "skill": "calculation",
  "prompt": "A child’s selected acetaminophen dose is 160 mg. The new bottle is 160 mg/5 mL; the previous bottle was 80 mg/mL. Which new volume delivers the selected dose?",
  "options": [
   "5 mL",
   "2 mL",
   "1 mL",
   "10 mL"
  ],
  "why": "160 mg ÷ 32 mg/mL = 5 mL. The selected mg dose is supplied; this does not establish its suitability for an unspecified child.",
  "optionRationales": [
   "160 mg ÷ 32 mg/mL = 5 mL. The selected mg dose is supplied; this does not establish its suitability for an unspecified child.",
   "2 mL was correct for the old 80-mg/mL bottle, not the new bottle.",
   "1 mL of the new product supplies only 32 mg.",
   "10 mL supplies 320 mg, twice the selected dose."
  ],
  "priorId": "thera-exam-20261017-varicella-preg"
 },
 {
  "id": "sinus-child-calc",
  "parent": "sinusitis-child",
  "skill": "calculation",
  "prompt": "A 15-kg child with bacterial sinusitis is prescribed amoxicillin 80 mg/kg/DAY divided BID × 10 days. Suspension: 400 mg/5 mL. Which dose and quantity match?",
  "options": [
   "7.5 mL BID; 150 mL",
   "15 mL BID; 300 mL",
   "7.5 mL TID; 225 mL",
   "3.75 mL BID; 75 mL"
  ],
  "why": "1200 mg/day ÷ 2 = 600 mg/dose; divide by 80 mg/mL for 7.5 mL. Twenty doses need 150 mL.",
  "optionRationales": [
   "1200 mg/day ÷ 2 = 600 mg/dose; divide by 80 mg/mL for 7.5 mL. Twenty doses need 150 mL.",
   "This gives the daily amount at each dose.",
   "This increases the prescribed frequency to TID without reducing the dose.",
   "This halves the prescribed dose."
  ],
  "priorId": "thera-exam-20261017-lice-failure"
 },
 {
  "id": "gas-lactation-exact",
  "parent": "gas-preg",
  "skill": "lactation",
  "prompt": "Amoxicillin is selected for GAS in a breastfeeding adult, with no allergy or renal impairment. Which order AND infant-monitoring set match the linked sources?",
  "options": [
   "500 mg PO BID × 10 days; monitor infant diarrhea, rash or thrush",
   "500 mg PO TID × 5 days; monitor infant diarrhea, rash or thrush",
   "500 mg PO BID × 10 days; interrupt all breastfeeding throughout therapy",
   "250 mg PO BID × 10 days; monitor infant diarrhea, rash or thrush"
  ],
  "why": "This matches the adult GAS course and linked lactation monitoring; routine breastfeeding interruption is not required.",
  "optionRationales": [
   "This matches the adult GAS course and linked lactation monitoring; routine breastfeeding interruption is not required.",
   "The monitoring fits but the adult GAS regimen does not.",
   "The course fits but automatic interruption is not the linked routine advice.",
   "This halves the referenced adult dose."
  ],
  "priorId": "thera-exam-20261017-gas-lactation"
 },
 {
  "id": "zoster-coldsores-pair",
  "parent": "zoster-coldsores",
  "skill": "regimen",
  "prompt": "Match normal-renal-function valacyclovir regimens for SHINGLES versus recurrent HERPES LABIALIS started at prodrome.",
  "options": [
   "1 g TID × 7 days; 2 g BID × 1 day",
   "2 g BID × 1 day; 1 g TID × 7 days",
   "1 g BID × 7 days; 2 g once × 1 day",
   "500 mg TID × 7 days; 1 g BID × 1 day"
  ],
  "why": "The indication changes both dose and duration: shingles 1 g TID for 7 days; recurrent cold sores 2 g BID for one day.",
  "optionRationales": [
   "The indication changes both dose and duration: shingles 1 g TID for 7 days; recurrent cold sores 2 g BID for one day.",
   "This reverses the indication-specific regimens.",
   "Both schedules understate one aspect of the referenced regimen.",
   "This halves both referenced per-dose amounts."
  ],
  "priorId": "thera-exam-20261017-acne-doxy"
 },
 {
  "id": "impetigo-varicella-exact",
  "parent": "varicella-secondary",
  "skill": "regimen",
  "prompt": "A child with chickenpox develops two localized impetigo lesions, without cellulitis/systemic illness. Mupirocin is selected for the SECONDARY bacterial infection. Which regimen fits MUMS?",
  "options": [
   "2% topical thin application TID × 5–7 days",
   "2% topical thin application once daily × 5–7 days",
   "1% topical thin application TID × 5–7 days",
   "2% topical thin application TID × 14 days"
  ],
  "why": "Treat the separate localized impetigo indication with the cited 2% TID 5–7-day regimen, not the underlying virus.",
  "optionRationales": [
   "Treat the separate localized impetigo indication with the cited 2% TID 5–7-day regimen, not the underlying virus.",
   "This reduces the referenced frequency.",
   "This substitutes an incorrect concentration for the referenced preparation.",
   "This prolongs the referenced uncomplicated localized course."
  ],
  "priorId": "thera-exam-20261017-eczema-site"
 },
 {
  "id": "org-aom",
  "parent": "aom-three",
  "skill": "organism",
  "prompt": "Which set contains the THREE usual major bacterial causes of pediatric AOM?",
  "options": [
   "Streptococcus pneumoniae; nontypeable Haemophilus influenzae; Moraxella catarrhalis",
   "Streptococcus pneumoniae; Staphylococcus aureus; Moraxella catarrhalis",
   "Pseudomonas aeruginosa; nontypeable Haemophilus influenzae; Staphylococcus aureus",
   "Streptococcus pyogenes; Haemophilus influenzae type b; Moraxella catarrhalis"
  ],
  "why": "The usual major trio is pneumococcus, nontypeable Haemophilus influenzae and Moraxella catarrhalis; this is not a claim that other causes never occur.",
  "optionRationales": [
   "The usual major trio is pneumococcus, nontypeable Haemophilus influenzae and Moraxella catarrhalis; this is not a claim that other causes never occur.",
   "Staphylococcus aureus replaces nontypeable Haemophilus influenzae in this distractor.",
   "Pseudomonas/Staphylococcus aureus suggest external-canal organisms rather than the usual AOM trio.",
   "This swaps pneumococcus for GAS and nontypeable Haemophilus influenzae for type b."
  ],
  "organismParent": true
 },
 {
  "id": "org-oe",
  "parent": "external-middle",
  "skill": "organism",
  "prompt": "Which pair best matches common bacterial causes of acute otitis externa?",
  "options": [
   "Pseudomonas aeruginosa + Staphylococcus aureus",
   "Streptococcus pneumoniae + Moraxella catarrhalis",
   "Nontypeable Haemophilus influenzae + Streptococcus pneumoniae",
   "Streptococcus pyogenes + Pasteurella multocida"
  ],
  "why": "Pseudomonas and Staphylococcus aureus are the important usual external-canal pair.",
  "optionRationales": [
   "Pseudomonas and Staphylococcus aureus are the important usual external-canal pair.",
   "This pair belongs to the common middle-ear/respiratory pathogen group.",
   "This pair also fits middle-ear pathogens better than the usual OE pair.",
   "GAS/Pasteurella is not the usual external-canal pair; Pasteurella is an exposure clue for animal bites."
  ],
  "organismParent": true
 },
 {
  "id": "org-eye-child",
  "parent": "eye-age",
  "skill": "organism",
  "prompt": "For ordinary pediatric BACTERIAL conjunctivitis, which set contains the three key respiratory-associated causes in the linked study reference?",
  "options": [
   "Haemophilus influenzae; Streptococcus pneumoniae; Moraxella catarrhalis",
   "Haemophilus influenzae; Streptococcus pyogenes; Pseudomonas aeruginosa",
   "Staphylococcus aureus; Pasteurella multocida; Moraxella catarrhalis",
   "Streptococcus agalactiae; Streptococcus pneumoniae; Bordetella pertussis"
  ],
  "why": "The linked pediatric list includes Haemophilus influenzae, pneumococcus and Moraxella catarrhalis; age does not identify a patient’s organism with certainty.",
  "optionRationales": [
   "The linked pediatric list includes Haemophilus influenzae, pneumococcus and Moraxella catarrhalis; age does not identify a patient’s organism with certainty.",
   "This swaps in GAS and Pseudomonas instead of the named pediatric trio.",
   "Pasteurella is an animal-bite clue, not part of this usual pediatric set.",
   "GBS and pertussis are not the usual pediatric conjunctivitis set."
  ],
  "organismParent": true
 },
 {
  "id": "org-eye-adult",
  "parent": "eye-age",
  "skill": "organism",
  "prompt": "Which adult-versus-child bacterial conjunctivitis pairing best matches the linked reference?",
  "options": [
   "Adults: staphylococci prominent; children: Haemophilus influenzae, Streptococcus pneumoniae, Moraxella catarrhalis important",
   "Adults: Haemophilus influenzae prominent; children: Pasteurella multocida, Streptococcus agalactiae, Bordetella pertussis important",
   "Adults: Pseudomonas aeruginosa prominent in all cases; children: staphylococci only",
   "Adults: Streptococcus pyogenes prominent; children: Haemophilus influenzae type b only"
  ],
  "why": "Staphylococci are prominent in adult bacterial disease; the respiratory-associated organisms are important in children. These are probabilities, not exclusive age rules.",
  "optionRationales": [
   "Staphylococci are prominent in adult bacterial disease; the respiratory-associated organisms are important in children. These are probabilities, not exclusive age rules.",
   "This replaces the pediatric list with organisms not representing that usual pattern.",
   "This overgeneralizes Pseudomonas and makes the pediatric causes artificially exclusive.",
   "This overstates GAS in adults and confuses nontypeable Haemophilus influenzae with type b."
  ],
  "organismParent": true
 },
 {
  "id": "org-sinus",
  "parent": "sinus-bacteria",
  "skill": "organism",
  "prompt": "Which set best matches the usual bacterial targets in uncomplicated acute bacterial sinusitis?",
  "options": [
   "Streptococcus pneumoniae; Haemophilus influenzae; Moraxella catarrhalis",
   "Streptococcus pneumoniae; Pseudomonas aeruginosa; Staphylococcus aureus",
   "Streptococcus pyogenes; Bordetella pertussis; Haemophilus influenzae",
   "Pasteurella multocida; Staphylococcus aureus; Moraxella catarrhalis"
  ],
  "why": "The usual empirical targets are pneumococcus, Haemophilus influenzae and Moraxella catarrhalis; this is not an exhaustive list for every special host/exposure.",
  "optionRationales": [
   "The usual empirical targets are pneumococcus, Haemophilus influenzae and Moraxella catarrhalis; this is not an exhaustive list for every special host/exposure.",
   "Pseudomonas/Staphylococcus aureus do not replace the usual uncomplicated trio.",
   "GAS/pertussis do not form the standard uncomplicated sinusitis trio.",
   "Pasteurella points toward animal-bite exposure rather than ordinary sinusitis."
  ],
  "organismParent": true
 },
 {
  "id": "org-impetigo",
  "parent": "impetigo-forms",
  "skill": "organism",
  "prompt": "Which pairing correctly identifies NONBULLOUS impetigo causes versus the toxin-producing cause of BULLOUS impetigo?",
  "options": [
   "Nonbullous: Staphylococcus aureus and/or Streptococcus pyogenes; bullous: Staphylococcus aureus",
   "Nonbullous: Staphylococcus aureus and/or Streptococcus pyogenes; bullous: Streptococcus pyogenes",
   "Nonbullous: Streptococcus pneumoniae and/or Streptococcus pyogenes; bullous: Staphylococcus aureus",
   "Nonbullous: Staphylococcus aureus and/or Streptococcus agalactiae; bullous: Streptococcus agalactiae"
  ],
  "why": "Nonbullous disease can involve Staphylococcus aureus, GAS or both; bullous disease is linked to toxin-producing Staphylococcus aureus.",
  "optionRationales": [
   "Nonbullous disease can involve Staphylococcus aureus, GAS or both; bullous disease is linked to toxin-producing Staphylococcus aureus.",
   "The nonbullous pair fits but the bullous organism is wrong.",
   "This swaps in pneumococcus for Staphylococcus aureus in the nonbullous set.",
   "This substitutes GBS for GAS and incorrectly assigns it to bullous disease."
  ],
  "organismParent": true
 },
 {
  "id": "org-purulence",
  "parent": "purulent",
  "skill": "organism",
  "prompt": "Which organism emphasis best distinguishes typical NONPURULENT cellulitis from a PURULENT skin abscess?",
  "options": [
   "Nonpurulent: beta-hemolytic streptococci; abscess: Staphylococcus aureus, including MRSA when relevant",
   "Nonpurulent: Staphylococcus aureus only; abscess: beta-hemolytic streptococci only",
   "Nonpurulent: Pseudomonas aeruginosa; abscess: Streptococcus pneumoniae",
   "Nonpurulent: Pasteurella multocida; abscess: Moraxella catarrhalis"
  ],
  "why": "The syndrome shifts probability toward streptococci in ordinary nonpurulent disease and Staphylococcus aureus in abscesses; assess source control and local MRSA context.",
  "optionRationales": [
   "The syndrome shifts probability toward streptococci in ordinary nonpurulent disease and Staphylococcus aureus in abscesses; assess source control and local MRSA context.",
   "This reverses the useful syndrome emphasis and makes it exclusive.",
   "This pair does not match the usual uncomplicated skin-syndrome distinction.",
   "This assigns bite/respiratory organisms to the usual skin-syndrome pair."
  ],
  "organismParent": true
 },
 {
  "id": "org-bite",
  "parent": "bite-pasteurella",
  "skill": "organism",
  "prompt": "Which organism most directly explains why an infected cat/dog bite cannot simply inherit a cephalexin-only routine cellulitis plan?",
  "options": [
   "Pasteurella multocida",
   "Streptococcus pyogenes",
   "Staphylococcus aureus",
   "Streptococcus pneumoniae"
  ],
  "why": "Pasteurella is an important bite-associated gap; bites can also require other aerobic/anaerobic coverage, so this is not a claim of monomicrobial infection.",
  "optionRationales": [
   "Pasteurella is an important bite-associated gap; bites can also require other aerobic/anaerobic coverage, so this is not a claim of monomicrobial infection.",
   "GAS can be relevant to skin infection but does not explain the key bite-associated coverage gap asked here.",
   "Staphylococcus aureus can occur in wounds but is not the distinctive bite-associated answer in this question.",
   "Pneumococcus is not the key animal-bite organism in this distinction."
  ],
  "organismParent": true
 },
 {
  "id": "org-gas-gbs",
  "parent": "gas-name",
  "skill": "organism",
  "prompt": "Which GAS-pharyngitis versus pregnancy-screening GBS organism pair is correct?",
  "options": [
   "GAS: Streptococcus pyogenes; GBS: Streptococcus agalactiae",
   "GAS: Streptococcus agalactiae; GBS: Streptococcus pyogenes",
   "GAS: Streptococcus pneumoniae; GBS: Streptococcus agalactiae",
   "GAS: Staphylococcus aureus; GBS: Streptococcus pyogenes"
  ],
  "why": "GAS corresponds to Streptococcus pyogenes; GBS commonly corresponds to Streptococcus agalactiae.",
  "optionRationales": [
   "GAS corresponds to Streptococcus pyogenes; GBS commonly corresponds to Streptococcus agalactiae.",
   "This reverses the two organisms.",
   "Pneumococcus is not group A streptococcus.",
   "Staphylococcus aureus is a staphylococcus; Streptococcus pyogenes is GAS, not GBS."
  ],
  "organismParent": true
 },
 {
  "id": "org-pertussis",
  "parent": "pertussis-name",
  "skill": "organism",
  "prompt": "Which organism causes pertussis?",
  "options": [
   "Bordetella pertussis",
   "Haemophilus influenzae",
   "Moraxella catarrhalis",
   "Streptococcus pneumoniae"
  ],
  "why": "Bordetella pertussis causes pertussis; integrate age, severity and public-health/contact management.",
  "optionRationales": [
   "Bordetella pertussis causes pertussis; integrate age, severity and public-health/contact management.",
   "Haemophilus influenzae belongs to other respiratory/middle-ear pathogen lists, not the pertussis cause.",
   "Moraxella catarrhalis is not the pertussis organism.",
   "Pneumococcus is not the pertussis organism."
  ],
  "organismParent": true
 },
 {
  "id": "org-skin-viruses",
  "parent": "viral-skin",
  "skill": "organism",
  "prompt": "Which CHICKENPOX / SHINGLES / usual COLD-SORE organism sequence is correct?",
  "options": [
   "Varicella-zoster virus / varicella-zoster virus / herpes simplex virus",
   "Herpes simplex virus / varicella-zoster virus / varicella-zoster virus",
   "Varicella-zoster virus / herpes simplex virus / herpes simplex virus",
   "Herpes simplex virus / herpes simplex virus / varicella-zoster virus"
  ],
  "why": "Chickenpox and shingles are both VZV; cold sores are usually HSV. Antibacterials need a separate bacterial indication.",
  "optionRationales": [
   "Chickenpox and shingles are both VZV; cold sores are usually HSV. Antibacterials need a separate bacterial indication.",
   "This misassigns chickenpox and usual cold sores.",
   "This misassigns shingles to HSV.",
   "This misassigns all three conditions."
  ],
  "organismParent": true
 },
 {
  "id": "org-scabies",
  "parent": "parasites",
  "skill": "organism",
  "prompt": "Which causal-class pairing correctly distinguishes HEAD LICE from SCABIES?",
  "options": [
   "Head lice: insects; scabies: Sarcoptes scabiei mites",
   "Head lice: Sarcoptes scabiei mites; scabies: insects",
   "Head lice: insects; scabies: dermatophyte fungi",
   "Head lice: dermatophyte fungi; scabies: Sarcoptes scabiei mites"
  ],
  "why": "Lice are insects; scabies is caused by the mite S. scabiei. The difference also matters for product concentration and application.",
  "optionRationales": [
   "Lice are insects; scabies is caused by the mite S. scabiei. The difference also matters for product concentration and application.",
   "This reverses lice and mite infestations.",
   "Scabies is a mite infestation, not a dermatophyte infection.",
   "Head lice are insects, not fungi."
  ],
  "organismParent": true
 }
];
const THERA_EXAM_CHALLENGES=THERA_EXAM_ROWS.map(row=>{
 const id=(row.organismParent?'organism-age-20261016-':'recall-20261016-')+row.parent;
 const ref=MIDTERM_RECALL.find(q=>q.id===id);
 if(!ref)throw Error('Missing source parent '+id);
 return {id:row.priorId||'thera-hard-20261017-'+row.id,course:'Thera',condition:ref.condition,system:ref.system,module:ref.module,topic:ref.topic,prompt:row.prompt,options:row.options,answer:0,explanation:row.why,optionRationales:row.optionRationales,sources:[...ref.sources],sourceNote:ref.sourceNote+' Original difficult practice item; answer tied to the named source. Distractors are intentionally incorrect in the stated scenario, not alternative instructions to follow.',practiceLabel:row.organismParent?'Organism-set MCQ · extra integrated recall; not a new THERA exam requirement':'Exact-regimen MCQ · diagnosis supplied',drillGroup:'theraExamChallenge',examSkill:row.skill};
});
PRACTICE.push(...THERA_EXAM_CHALLENGES);
