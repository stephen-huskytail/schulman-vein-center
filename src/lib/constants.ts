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
  phone: "(212) 987-0500",
  phoneTel: "+12129870500",
  phoneHref: "tel:+12129870500",

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
    phone: "(212) 987-0500",
    phoneTel: "+12129870500",
    phoneHref: "tel:+12129870500",
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
    phone: "(516) 482-4477",
    phoneTel: "+15164824477",
    phoneHref: "tel:+15164824477",
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
    phone: "(631) 543-4599",
    phoneTel: "+16315434599",
    phoneHref: "tel:+16315434599",
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
  },
];

export const SERVICES = [
  {
    id: "varicose-veins",
    name: "Varicose Vein Treatment",
    slug: "varicose-vein-treatment",
    icon: "Zap",
    shortDesc: "Advanced laser ablation (EVLT), micro-surgery, and sclerotherapy to eliminate bulging varicose veins — no hospital stay required.",
    description: "Our board-certified specialists use endovenous laser therapy (EVLT), micro ambulatory phlebectomy, sclerotherapy, and foam sclerotherapy to treat varicose veins. All procedures are minimally invasive, performed in-office under local anesthesia. Patients walk and drive home the same day.",
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
    shortDesc: "The gold standard in sclerotherapy and laser treatments for spider veins and broken blood vessels on legs, face, and body.",
    description: "Spider vein injection therapy (sclerotherapy) is the globally recognized gold standard for treating spider veins. Our doctors use FDA-approved solutions injected with the smallest needles available — virtually painless, no anesthesia required. Each treatment is fully customized based on vein size, location, and skin tone.",
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
    shortDesc: "Modern endovenous laser treatment replaces vein stripping surgery — in-office, ~30 minutes, drive home the same day.",
    description: "EVLT (Endovenous Laser Therapy) is a modern replacement for outdated vein-stripping surgery. Performed in-office under local anesthesia, a thin laser fiber is guided by ultrasound to close faulty veins. The procedure takes about 30 minutes and patients can walk and drive home immediately afterward.",
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
    shortDesc: "World-renowned for pioneering hand vein treatment — also treating face, temples, chest, breast, arms, and more.",
    description: "While most of our work involves leg veins, Schulman Vein and Laser Center is internationally recognized for pioneering hand vein removal. We also treat veins on the face, temples, chest, breast, arms, feet, and abdomen using injection therapy and minimally invasive techniques.",
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
    shortDesc: "Diagnosis and treatment of phlebitis, venous leg ulcers, pregnancy-related varicose veins, and venous insufficiency.",
    description: "We diagnose and treat the full spectrum of venous disorders including phlebitis (blood clots), venous leg ulcers, pregnancy-related varicose veins, and chronic venous insufficiency. All diagnoses include a non-invasive Doppler ultrasound when indicated.",
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
    shortDesc: "Schedule a no-cost, no-obligation consultation with a Schulman doctor — not a nurse or assistant — personally.",
    description: "All new patients receive a comprehensive evaluation including a detailed medical history, physical examination of the veins, and Doppler ultrasound when indicated. The consultation is done personally by one of the Dr. Schulmans — never by a student, intern, nurse, or assistant.",
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

export const LAS_VEGAS_AREAS = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "Paradise",
  "Spring Valley",
  "North Las Vegas",
];

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
  "areaServed": ["Manhattan, NY", "Nassau County, NY", "Suffolk County, NY"],
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
