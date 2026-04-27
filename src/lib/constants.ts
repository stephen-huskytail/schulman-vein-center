// ============================================================
// SCHULMAN VEIN AND LASER CENTER — SINGLE SOURCE OF TRUTH
// ============================================================

export const BUSINESS = {
  name: "Schulman Vein and Laser Center",
  shortName: "Schulman Vein",
  tagline: "All We Do Is Veins™",
  tagline2: "Simple, Safe, and Effective Vein Therapy",
  experience: "55+ Years of Vein-Only Experience",
  siteUrl: "https://www.schulmanveincenter.com",

  // Primary phone (Manhattan — used as the main CTA number)
  phone: "212.987.0500",
  phoneTel: "+12129870500",
  phoneHref: "tel:2129870500",

  email: "info@schulmanveinandlasercenter.com",
  emailHref: "mailto:info@schulmanveinandlasercenter.com",

  // SEO / schema
  schemaType: "MedicalOrganization",
  specialty: "Phlebology",
  priceRange: "$$",
};

export const LOCATIONS = [
  {
    id: "manhattan",
    name: "Manhattan / New York City",
    shortName: "Manhattan",
    address: "1165 Park Ave",
    city: "New York",
    state: "NY",
    zip: "10128",
    fullAddress: "1165 Park Ave, New York, NY 10128",
    phone: "212.987.0500",
    phoneTel: "+12129870500",
    phoneHref: "tel:2129870500",
    hours: {
      mon: "9:00am – 7:00pm",
      tue: "9:00am – 7:00pm",
      wed: "9:00am – 4:00pm",
      thu: "9:00am – 7:00pm",
      fri: "9:00am – 4:00pm",
      sat: "Closed",
      sun: "Closed",
    },
    hoursDisplay: "Mon, Tue, Thu: 9am–7pm · Wed, Fri: 9am–4pm",
    mapUrl: "https://maps.google.com/?q=1165+Park+Ave+New+York+NY+10128",
    coordinates: {
      latitude: 40.7836,
      longitude: -73.9567,
    },
    neighborhoodContext:
      "Nestled in Carnegie Hill at 1165 Park Avenue, Schulman Vein and Laser Center has served Manhattan patients for decades. Our Upper East Side office is steps from the Museum Mile and surrounded by some of New York City's most established residential neighborhoods, making expert vein care accessible without venturing far from home. Whether you're coming from Yorkville, Midtown East, the Upper West Side, or East Harlem, our Park Avenue location is ideally situated for busy New Yorkers who want world-class vein treatment without disrupting their day.",
    communitiesServed: [
      "Carnegie Hill, Yorkville, and the Upper East Side",
      "Midtown East and Lenox Hill",
      "Upper West Side and Morningside Heights",
      "East Harlem and East River communities",
      "Astoria, Long Island City, and Flushing (Queens)",
      "Bronx and southern Westchester County",
    ],
    transportationNote:
      "Our Manhattan office is easily accessible by public transit. Take the 4, 5, or 6 subway trains to 96th Street, or the Q train to 96th Street and Lexington Avenue, just a short walk to Park Avenue. Street parking is available in the neighborhood, and several nearby garages offer daytime rates. We recommend allowing extra time if you are driving.",
    doctorAvailability:
      "Dr. Martin L. Schulman and Dr. Lee G. Schulman see patients at the Manhattan office on a rotating schedule. Both physicians personally evaluate and treat every patient, so you will always see a board-certified doctor, never a technician or PA. Please call to confirm your preferred doctor's availability when scheduling.",
    locationFaqs: [
      {
        q: "Can I come in for a free vein screening at the Manhattan location?",
        a: "Yes. We offer complimentary vein screenings at all three of our locations, including the Upper East Side office. No referral is required. Call us or use our online form to schedule a convenient time.",
      },
      {
        q: "How long does a typical appointment take at your Park Avenue office?",
        a: "Most consultations and treatment appointments at our Manhattan location are completed in under an hour. Many patients return to work the same day because our approach is minimally invasive and non-surgical.",
      },
      {
        q: "Do you accept insurance at the Manhattan office?",
        a: "Yes. We accept most major insurance plans. Coverage for treatments like EVLT varies by plan. Medically necessary care is often covered, while cosmetic treatment is generally self-pay. Our team verifies your benefits before your visit.",
      },
    ],
  },
  {
    id: "manhasset",
    name: "Long Island – Manhasset (Nassau County)",
    shortName: "Manhasset",
    address: "800 Community Dr #211",
    city: "Manhasset",
    state: "NY",
    zip: "11030",
    fullAddress: "800 Community Dr #211, Manhasset, NY 11030",
    phone: "516.482.4477",
    phoneTel: "+15164824477",
    phoneHref: "tel:5164824477",
    hours: {
      mon: "9:00am – 7:00pm",
      tue: "9:00am – 7:00pm",
      wed: "9:00am – 4:00pm",
      thu: "9:00am – 7:00pm",
      fri: "9:00am – 4:00pm",
      sat: "Closed",
      sun: "Closed",
    },
    hoursDisplay: "Mon, Tue, Thu: 9am–7pm · Wed, Fri: 9am–4pm",
    mapUrl: "https://maps.google.com/?q=800+Community+Dr+211+Manhasset+NY+11030",
    coordinates: {
      latitude: 40.706,
      longitude: -73.7008,
    },
    neighborhoodContext:
      "Conveniently located at 800 Community Drive in Manhasset, our Nassau County office serves patients across the North Shore of Long Island and nearby communities. Positioned near the Lake Success border and just off the Northern State Parkway, this office is easily accessible from throughout Nassau County and eastern Queens. If you have been looking for a Long Island vein specialist without long medical-center wait times, our Manhasset practice offers the same expert and personalized care as our Manhattan location, closer to home.",
    communitiesServed: [
      "Manhasset, Great Neck, and Manhasset Hills",
      "Port Washington and Roslyn",
      "Lake Success and New Hyde Park",
      "Mineola, Garden City, and Floral Park",
      "Bayside and Fresh Meadows (Queens)",
      "Williston Park, Herricks, and Albertson",
    ],
    transportationNote:
      "The Manhasset office is located off the Northern State Parkway and is easy to reach by car from the LIE (I-495), Northern State, and Cross Island Parkway. The building offers ample free parking. The Manhasset LIRR station (Port Washington Branch) is about one mile away for train commuters.",
    doctorAvailability:
      "Both Dr. Martin L. Schulman and Dr. Lee G. Schulman see patients at the Manhasset office. Every patient is evaluated and treated personally by a physician, board-certified in vascular surgery and phlebology respectively. Please call ahead to confirm scheduling for your preferred doctor.",
    locationFaqs: [
      {
        q: "Do I need a referral to see a vein specialist at your Manhasset office?",
        a: "No referral is needed to schedule a complimentary free vein screening. If you plan to submit an insurance claim for medically necessary treatment, check whether your specific plan requires a referral from your primary care physician.",
      },
      {
        q: "Is your Long Island office different from the Manhattan location in any way?",
        a: "The same doctors, same treatments, and same personalized care are available at both locations. We offer the full treatment range in Manhasset, including varicose vein treatment, sclerotherapy, EVLT, and free vein screenings.",
      },
      {
        q: "How do I know if my varicose veins require medical treatment versus cosmetic treatment?",
        a: "Veins causing symptoms such as aching, swelling, heaviness, or cramping are generally medically necessary and often insurance-covered. Purely cosmetic concerns are typically self-pay. A free screening helps determine which applies to you.",
      },
    ],
  },
  {
    id: "commack",
    name: "Long Island – Commack (Suffolk County)",
    shortName: "Commack",
    address: "353 Veterans Memorial Hwy #206",
    city: "Commack",
    state: "NY",
    zip: "11725",
    fullAddress: "353 Veterans Memorial Hwy #206, Commack, NY 11725",
    phone: "631.543.4599",
    phoneTel: "+16315434599",
    phoneHref: "tel:6315434599",
    hours: {
      mon: "9:00am – 7:00pm",
      tue: "9:00am – 7:00pm",
      wed: "9:00am – 4:00pm",
      thu: "9:00am – 7:00pm",
      fri: "9:00am – 4:00pm",
      sat: "Closed",
      sun: "Closed",
    },
    hoursDisplay: "Mon, Tue, Thu: 9am–7pm · Wed, Fri: 9am–4pm",
    mapUrl: "https://maps.google.com/?q=353+Veterans+Memorial+Hwy+Commack+NY+11725",
    coordinates: {
      latitude: 40.8426,
      longitude: -73.2888,
    },
    neighborhoodContext:
      "Our Commack location at 353 Veterans Memorial Highway brings Schulman Vein and Laser Center's board-certified expertise to the heart of Suffolk County. Positioned along one of Long Island's most traveled corridors, the office is a natural hub for patients across the mid-Island region who want proven non-surgical vein treatment without traveling to the city. From Huntington to Smithtown, Kings Park to Hauppauge, Suffolk County patients can access the same All We Do Is Veins expertise trusted by Manhattan patients for years.",
    communitiesServed: [
      "Commack, Kings Park, and Smithtown",
      "Huntington, Cold Spring Harbor, and Lloyd Neck",
      "Hauppauge, Nesconset, and Islandia",
      "Dix Hills, Melville, and Deer Park",
      "Brentwood and Central Islip",
      "East Northport and Elwood",
    ],
    transportationNote:
      "The Commack office is located on Veterans Memorial Highway (Route 454), with easy access from Long Island Expressway Exit 52, Northern State Parkway, and Sunken Meadow Parkway. The building offers ample on-site parking. For LIRR riders, Kings Park station (Port Jefferson Branch) is the closest stop, about three miles away.",
    doctorAvailability:
      "Dr. Martin L. Schulman and Dr. Lee G. Schulman rotate across all three locations, including Commack. Every patient is seen by a board-certified doctor at every visit. Call to confirm which physician is scheduled on your preferred date.",
    locationFaqs: [
      {
        q: "What vein treatments are available at the Commack office?",
        a: "All treatments offered at our Manhattan and Manhasset offices are available in Commack, including varicose vein treatment, spider vein sclerotherapy, EVLT, and complimentary free vein screenings. Same-day recovery is standard for all procedures.",
      },
      {
        q: "Are there other vein centers on Long Island, and why choose Schulman?",
        a: "Schulman Vein and Laser Center is a specialty-only practice. Veins are all we treat, and both physicians have focused exclusively on vein conditions for over 55 combined years. That level of dedicated experience is uncommon in general vascular or dermatology offices.",
      },
      {
        q: "Do you offer evening or Saturday appointments at Commack?",
        a: "Appointment availability varies. Call the Commack office or use our online scheduling tool for current openings. We do our best to accommodate working patients with flexible scheduling.",
      },
    ],
  },
];

export const DOCTORS = [
  {
    id: "martin-schulman",
    name: "Dr. Martin L. Schulman, M.D.",
    shortName: "Dr. Martin Schulman",
    title: "Pioneer in Vein Care",
    credentials: "M.D., Board-Certified Vascular Surgeon",
    bio: "Dr. Martin L. Schulman is one of the first certified vascular surgeons in the United States, having focused exclusively on vein treatments for decades. He has lectured more than 79 times at international medical conferences and pioneered innovative vein treatment techniques now used worldwide.",
    memberships: [
      "American Board of Surgery",
      "Deep Vein Foundation (Executive Director)",
      "International Society for Cardiovascular Surgery",
      "Michael E. DeBakey International Cardiovascular Society",
      "Denton A. Cooley Cardiovascular Surgical Society",
      "Society for Clinical Vascular Surgery",
      "Phlebology Society of America",
      "European Society for Cardiovascular Surgery",
      "International Union of Angiology",
      "Eastern Vascular Society",
      "American College of Angiology",
      "American Medical Association",
      "New York Medical Society",
    ],
    highlights: [
      "Lectured at 79+ international medical conferences",
      "Pioneered vein techniques now used worldwide",
      "Among America's first certified vascular surgeons",
    ],
    award: [
      "Lectured at 79+ international medical conferences",
      "Pioneered vein techniques now used worldwide",
      "Among America's first certified vascular surgeons",
    ],
    specialty: [
      "Varicose vein treatment",
      "Spider vein treatment",
      "Endovenous laser therapy (EVLT)",
      "Vascular surgery",
    ],
  },
  {
    id: "lee-schulman",
    name: "Dr. Lee G. Schulman, M.D.",
    shortName: "Dr. Lee Schulman",
    title: "Board-Certified Vein Specialist",
    credentials: "M.D., Diplomate in Phlebology #00045",
    bio: "Dr. Lee G. Schulman was among the first physicians to earn Diplomate certification in Phlebology, holding certificate number #00045. His career has been 100% devoted to vein care. He was the first physician to lecture on cosmetic treatment of hand veins and the first to present on treating vein patients taking blood thinner Coumadin.",
    memberships: [
      "American College of Phlebology",
      "North American Society of Phlebology",
      "American Registry for Diagnostic Medical Sonography",
      "Society of Diagnostic Medical Sonography",
      "American College of Angiology",
      "American Medical Association",
      "New York State Medical Society",
    ],
    highlights: [
      "Diplomate in Phlebology Certificate #00045 (among the first)",
      "First to lecture on cosmetic hand vein treatment",
      "Volunteer care with Hackett Hemwall Foundation in Mexico",
    ],
    award: [
      "Diplomate in Phlebology Certificate #00045",
      "First to lecture on cosmetic hand vein treatment",
      "Volunteer care with Hackett Hemwall Foundation in Mexico",
    ],
    specialty: [
      "Phlebology",
      "Hand vein treatment",
      "Cosmetic vein treatment",
      "Sclerotherapy",
    ],
  },
];

export const SERVICES = [
  {
    id: "varicose-veins",
    name: "Varicose Vein Treatment",
    slug: "varicose-vein-treatment",
    icon: "Zap",
    heroImage: "/images/services/varicose-vein-treatment.svg",
    heroImageAlt: "AI-generated visual showing targeted varicose vein treatment flow",
    metaDescription:
      "Expert varicose vein treatment in Manhattan and Long Island. Board-certified vein doctors, non-surgical EVLT and sclerotherapy. Drive home the same day.",
    shortDesc: "Advanced laser ablation (EVLT), micro-surgery, and sclerotherapy to eliminate bulging varicose veins — no hospital stay required.",
    description: "Our board-certified specialists use endovenous laser therapy (EVLT), micro ambulatory phlebectomy, sclerotherapy, and foam sclerotherapy to treat varicose veins. All procedures are minimally invasive, performed in-office under local anesthesia. Patients walk and drive home the same day.",
    bodySite: ["Leg veins"],
    treatments: [
      "Endovenous Laser Therapy (EVLT / Laser Ablation)",
      "Micro Ambulatory Phlebectomy",
      "Injection Sclerotherapy",
      "Foam Sclerotherapy",
      "Ultrasound-Assisted Therapy",
    ],
  },
  {
    id: "spider-veins",
    name: "Spider Vein Treatment",
    slug: "spider-vein-treatment",
    icon: "Sparkles",
    heroImage: "/images/services/spider-vein-treatment.svg",
    heroImageAlt: "AI-generated visual of spider vein network and precision treatment",
    metaDescription:
      "Spider vein removal in Manhattan, Nassau & Suffolk County. Sclerotherapy from vein-only specialists. 55+ years experience. Free screening available.",
    shortDesc: "The gold standard in sclerotherapy and laser treatments for spider veins and broken blood vessels on legs, face, and body.",
    description: "Spider vein injection therapy (sclerotherapy) is the globally recognized gold standard for treating spider veins. Our doctors use FDA-approved solutions injected with the smallest needles available — virtually painless, no anesthesia required. Each treatment is fully customized based on vein size, location, and skin tone.",
    bodySite: ["Legs", "Face", "Body"],
    treatments: [
      "Injection Compression Sclerotherapy (Gold Standard)",
      "Foam Sclerotherapy",
      "Laser Vein Removal",
      "Doppler Ultrasound Diagnosis",
    ],
  },
  {
    id: "laser-treatment",
    name: "Laser Vein Therapy (EVLT)",
    slug: "laser-vein-therapy",
    icon: "Crosshair",
    heroImage: "/images/services/laser-vein-therapy.svg",
    heroImageAlt: "AI-generated visual of EVLT laser targeting an affected vein",
    metaDescription:
      "Endovenous Laser Treatment (EVLT) for varicose veins in Manhattan and Long Island. Often covered by insurance. Non-surgical, walk-in walk-out recovery.",
    shortDesc: "Modern endovenous laser treatment replaces vein stripping surgery — in-office, ~30 minutes, drive home the same day.",
    description: "EVLT (Endovenous Laser Therapy) is a modern replacement for outdated vein-stripping surgery. Performed in-office under local anesthesia, a thin laser fiber is guided by ultrasound to close faulty veins. The procedure takes about 30 minutes and patients can walk and drive home immediately afterward.",
    bodySite: ["Leg veins"],
    treatments: [
      "In-Office Under Local Anesthesia",
      "Guided by Doppler Ultrasound",
      "~30 Minute Procedure",
      "Walk & Drive Home Same Day",
    ],
  },
  {
    id: "other-body-veins",
    name: "Hand, Face & Body Veins",
    slug: "body-vein-treatment",
    icon: "Hand",
    heroImage: "/images/services/body-vein-treatment.svg",
    heroImageAlt: "AI-generated visual of face, hand, and body vein treatment zones",
    metaDescription:
      "Treatment for hand, facial, and body veins at Schulman Vein Center — Manhattan, Manhasset & Commack. Expert cosmetic vein removal, personalized care.",
    shortDesc: "World-renowned for pioneering hand vein treatment — also treating face, temples, chest, breast, arms, and more.",
    description: "While most of our work involves leg veins, Schulman Vein and Laser Center is internationally recognized for pioneering hand vein removal. We also treat veins on the face, temples, chest, breast, arms, feet, and abdomen using injection therapy and minimally invasive techniques.",
    bodySite: ["Hands", "Face", "Temples", "Chest", "Breast", "Arms", "Feet", "Abdomen"],
    treatments: [
      "Hand Vein Removal (Pioneered by Dr. Schulman)",
      "Temple & Facial Vein Therapy",
      "Breast & Chest Vein Therapy",
      "Vaginal Varicosity Treatment",
      "Arm & Foot Vein Treatment",
    ],
  },
  {
    id: "vein-disorders",
    name: "Vein Disorders & Conditions",
    slug: "vein-disorders",
    icon: "HeartPulse",
    heroImage: "/images/services/vein-disorders.svg",
    heroImageAlt: "AI-generated diagnostic map of common vein disorders and treatment flow",
    metaDescription:
      "Learn about varicose veins, spider veins, venous insufficiency and more. Schulman Vein Center treats all vein conditions in Manhattan and Long Island.",
    shortDesc: "Diagnosis and treatment of phlebitis, venous leg ulcers, pregnancy-related varicose veins, and venous insufficiency.",
    description: "We diagnose and treat the full spectrum of venous disorders including phlebitis (blood clots), venous leg ulcers, pregnancy-related varicose veins, and chronic venous insufficiency. All diagnoses include a non-invasive Doppler ultrasound when indicated.",
    bodySite: ["Leg veins", "Deep veins", "Venous system"],
    treatments: [
      "Phlebitis / DVT Management",
      "Venous Leg Ulcer Treatment",
      "Pregnancy-Related Vein Treatment",
      "Venous Insufficiency Diagnosis",
      "Doppler Ultrasound Evaluation",
    ],
  },
  {
    id: "free-screening",
    name: "Free Vein Screening",
    slug: "free-vein-screening",
    icon: "Search",
    heroImage: "/images/services/free-vein-screening.svg",
    heroImageAlt: "AI-generated visual of physician-led free vein screening and assessment",
    metaDescription:
      "Get a complimentary vein screening at our Manhattan or Long Island offices. Board-certified vein doctors. No referral needed. Same-day appointments available.",
    shortDesc: "Schedule a no-cost, no-obligation consultation with a Schulman doctor — not a nurse or assistant — personally.",
    description: "All new patients receive a comprehensive evaluation including a detailed medical history, physical examination of the veins, and Doppler ultrasound when indicated. The consultation is done personally by one of the Dr. Schulmans — never by a student, intern, nurse, or assistant.",
    bodySite: ["Leg veins", "Hands", "Face", "Body veins"],
    treatments: [
      "Personal Consultation by Dr. Schulman",
      "Full Medical History Review",
      "Physical Vein Examination",
      "Doppler Ultrasound (when indicated)",
      "No-Cost, No-Obligation",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "All We Do Is Veins™",
    desc: "100% of our medical practice is dedicated exclusively to vein therapy — no distractions, no divided attention. Just world-class vein care.",
  },
  {
    icon: "UserCheck",
    title: "Doctors Treat Every Patient",
    desc: "Unlike clinics where students or nurses perform treatments, every single patient at Schulman Vein is treated personally by one of the two Dr. Schulmans. No exceptions.",
  },
  {
    icon: "Clock",
    title: "55+ Years of Combined Experience",
    desc: "Drs. Martin and Lee Schulman bring over 55 years of combined vein-only experience. They were among the first board-certified vascular surgeons in the United States.",
  },
  {
    icon: "ShieldCheck",
    title: "FDA-Approved, Non-Surgical Only",
    desc: "All treatments use only FDA-approved medications and single-use equipment. Zero surgical procedures — every treatment is minimally invasive and safe.",
  },
  {
    icon: "Car",
    title: "Drive Home the Same Day",
    desc: "Our treatments are so gentle and minimally invasive that patients drive themselves home and resume full activity immediately — no recovery time needed.",
  },
  {
    icon: "Globe",
    title: "Techniques Used Worldwide",
    desc: "The advanced treatment methods developed by the Schulman doctors are now taught and used by vein specialists around the world. You're treated by the innovators.",
  },
];

export const FAQS = [
  {
    q: "What are varicose veins?",
    a: "Varicose veins are abnormally enlarged, protruding surface veins seen in the legs. The one-directional valves inside them stop working properly, allowing gravity to force blood to accumulate. They can cause pain, swelling, and medical complications including blood clots if left untreated.",
  },
  {
    q: "Will I be seen personally by one of the Schulman doctors?",
    a: "Absolutely. At Schulman Vein and Laser Center, every patient — new or returning — is seen and treated personally by either Dr. Martin L. Schulman or Dr. Lee G. Schulman. We will never allow students, interns, residents, or nurses to treat our patients.",
  },
  {
    q: "Does insurance cover vein treatment?",
    a: "Insurance coverage varies based on your plan and the nature of your veins. We actively work with your insurance — submitting letters, photos, and Doppler ultrasound results on your behalf. EVLT for varicose veins is often covered. Cosmetic treatments and hand/face/temple vein treatments typically are not. For patients without coverage, we offer fee reductions and payment plans.",
  },
  {
    q: "Am I awake during vein treatments?",
    a: "Yes. All treatments are performed under local anesthesia only. You are fully awake, comfortable, and able to walk and drive home immediately after every procedure. No general anesthesia, no hospital stay.",
  },
  {
    q: "How many treatments will I need?",
    a: "Many patients see excellent results in just one or two visits. The exact number depends on the severity and extent of your vein disease. Your Schulman doctor will give you a detailed, honest treatment plan at your first visit.",
  },
  {
    q: "Is vein stripping surgery still done?",
    a: "Modern vein treatments — particularly EVLT (endovenous laser therapy) — have completely replaced painful vein-stripping surgery. EVLT is minimally invasive, performed in the office, and allows immediate recovery.",
  },
  {
    q: "Can varicose veins come back after treatment?",
    a: "Treated veins are permanently closed. However, vein disease is often genetic, and new veins can develop over time. Regular follow-up visits help monitor and address any new changes early.",
  },
  {
    q: "Do you treat veins on parts of the body other than legs?",
    a: "Yes. While most of our patients seek treatment for leg veins, we treat veins virtually anywhere on the body — hands, arms, face, temples, chest, breast, and more. Dr. Lee Schulman was the first physician in the world to lecture on cosmetic hand vein treatment.",
  },
  {
    q: "What is the difference between spider veins and varicose veins?",
    a: "Varicose veins are enlarged, bulging veins visible beneath the skin, often causing pain and medical issues. Spider veins (telangiectasias) are smaller, web-like vessels visible on the skin surface. Both are treatable with our non-surgical methods.",
  },
  {
    q: "What can I expect on my first visit?",
    a: "Your first visit is relaxed and thorough. A Dr. Schulman will take your complete medical history, examine your legs (or other treatment area), and perform a non-invasive Doppler ultrasound if needed. You'll receive a clear explanation of all treatment options and have every question answered before anything begins.",
  },
];

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const TESTIMONIALS = [
  {
    name: "Patricia M.",
    location: "Manhattan, NY",
    text: "I was surprised and amazed at how easy the varicose vein treatments were. I am very, very happy with the results. Dr. Schulman made the entire process comfortable and painless.",
    stars: 5,
  },
  {
    name: "Linda K.",
    location: "Long Island, NY",
    text: "I had been self-conscious about my spider veins for years. After just two visits I can finally wear shorts again! The staff was incredibly kind and Dr. Schulman took time to explain everything.",
    stars: 5,
  },
  {
    name: "Robert A.",
    location: "Manhasset, NY",
    text: "I'd tried other clinics where a nurse did the treatment. At Schulman, the doctor himself treated me every time. The difference in quality and care was immediately apparent.",
    stars: 5,
  },
  {
    name: "Susan D.",
    location: "Commack, NY",
    text: "Decades of varicose veins, finally gone. I drove myself home after every appointment and was back to normal activity the same day. I only wish I had come sooner.",
    stars: 5,
  },
  {
    name: "Maria T.",
    location: "New York, NY",
    text: "The free consultation was a great experience. No pressure, just honest advice from an expert doctor. I ended up having treatment and the results are remarkable.",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Manhattan, NY",
    text: "My leg pain and swelling were affecting my daily life for years. Dr. Schulman identified the problem immediately and within a few sessions I felt like a completely different person. Absolutely life-changing.",
    stars: 5,
  },
];

export const TRUST_STATS = [
  { value: "55+", label: "Years Combined Experience" },
  { value: "3", label: "Convenient Locations" },
  { value: "100%", label: "Vein-Only Practice" },
  { value: "FREE", label: "Initial Consultation" },
];

export const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://www.schulmanveincenter.com/#organization",
  "name": "Schulman Vein and Laser Center",
  "url": "https://www.schulmanveincenter.com",
  "logo": "https://www.schulmanveincenter.com/images/logo.png",
  "image": "https://www.schulmanveincenter.com/images/hero-bg.png",
  "description": "Manhattan and Long Island vein specialists with 55+ years of combined experience. All We Do Is Veins™. Non-surgical varicose vein and spider vein treatment.",
  "medicalSpecialty": "Phlebology",
  "telephone": "+12129870500",
  "email": "info@schulmanveinandlasercenter.com",
  "areaServed": [
    "Manhattan, NY",
    "Nassau County, NY",
    "Suffolk County, NY",
    "Upper East Side, Manhattan, NY",
    "Carnegie Hill, Manhattan, NY",
    "Yorkville, Manhattan, NY",
    "Midtown, Manhattan, NY",
    "Great Neck, NY",
    "Port Washington, NY",
    "Huntington, NY",
    "Smithtown, NY",
    "Commack, NY",
  ],
  "sameAs": [],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
      "opens": "09:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Friday"],
      "opens": "09:00",
      "closes": "16:00",
    },
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "1165 Park Ave",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10128",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "800 Community Dr #211",
      "addressLocality": "Manhasset",
      "addressRegion": "NY",
      "postalCode": "11030",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "353 Veterans Memorial Hwy #206",
      "addressLocality": "Commack",
      "addressRegion": "NY",
      "postalCode": "11725",
      "addressCountry": "US",
    },
  ],
};
