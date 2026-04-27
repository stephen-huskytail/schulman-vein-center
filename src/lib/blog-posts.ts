export const BLOG_CATEGORIES = ["Vein Health", "Treatments", "Patient Guide", "Insurance"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: {
    text: string;
    type: "tip" | "warning" | "info";
  };
  keyTakeaway?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type BlogPostLink = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  readTimeMinutes: number;
  author: string;
  body: BlogPostSection[];
  ogDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  relatedLinks?: BlogPostLink[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "evlt-vs-sclerotherapy-vein-treatment-new-york",
    title: "EVLT vs. Sclerotherapy — Which Vein Treatment Is Right for You?",
    excerpt:
      "Compare EVLT and sclerotherapy for varicose and spider veins in New York, including coverage, recovery, and when each treatment is recommended.",
    category: "Treatments",
    publishedAt: "2026-04-08",
    readTimeMinutes: 9,
    author: "Dr. Lee G. Schulman",
    metaTitle: "EVLT vs. Sclerotherapy: Best Vein Treatment New York | Schulman",
    metaDescription:
      "EVLT vs. sclerotherapy — which vein treatment is right for you? Schulman Vein and Laser Center in New York explains. Book a free vein screening today.",
    ogDescription:
      "EVLT vs. sclerotherapy — which vein treatment is right for you? Schulman Vein and Laser Center in New York explains. Book a free vein screening today.",
    featuredImage: "/images/blog/evlt-vs-sclerotherapy-new-york.jpg",
    featuredImageAlt:
      "EVLT vs sclerotherapy vein treatment comparison — Schulman Vein and Laser Center New York",
    relatedLinks: [
      { label: "Laser Vein Therapy (EVLT)", href: "/services/laser-vein-therapy" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
    ],
    body: [
      {
        heading: "The Short Answer",
        paragraphs: [
          "<strong>EVLT (Endovenous Laser Treatment)</strong> is typically used for larger varicose veins and underlying <strong>venous insufficiency</strong> — the circulatory problem that causes varicose veins to form. Because it addresses a medical condition, it is often covered by insurance.",
          "<strong>Sclerotherapy</strong> is typically used for <strong>spider veins</strong> and smaller surface vessels. It is a quicker procedure, but because it is generally considered cosmetic, it is usually self-pay.",
          "If you are dealing with bulging, ropy veins with pain, swelling, or heaviness, EVLT may be the right path. If your concern is fine red or purple web-like veins near the skin surface, sclerotherapy is often the better fit. Patients across Manhattan, the Upper East Side, and Long Island regularly ask our team this exact question — and the answer always starts with a proper ultrasound evaluation.",
        ],
        keyTakeaway:
          "The right treatment depends on vein anatomy, not appearance alone. A physician-led evaluation at Schulman Vein and Laser Center is the best starting point.",
      },
      {
        heading: "What Is EVLT?",
        paragraphs: [
          "<strong>EVLT</strong> stands for Endovenous Laser Treatment. It targets <strong>venous insufficiency</strong>, where faulty vein valves allow blood to pool and flow backward instead of returning efficiently to the heart.",
          "During the procedure, a thin <strong>laser fiber</strong> is inserted into the affected vein through a small puncture. Under ultrasound guidance, heat energy closes the vein from the inside. Blood naturally reroutes through healthier veins as the treated vein is reabsorbed.",
          "The procedure typically takes 45 to 60 minutes in-office under <strong>local anesthesia</strong>. Most patients in our Manhattan and Midtown locations return to normal activity the same day or the day after treatment.",
        ],
        bullets: [
          "Treats the root cause of varicose veins — venous reflux",
          "Performed under ultrasound guidance for precision",
          "In-office procedure, typically 45–60 minutes",
          "Often covered by insurance when medically necessary",
          "Patients walk out the same day",
        ],
      },
      {
        heading: "What Is Sclerotherapy?",
        paragraphs: [
          "<strong>Sclerotherapy</strong> treats spider veins and smaller superficial vessels by injecting a <strong>medical sclerosing solution</strong> directly into the vein. The vein wall collapses and gradually fades as the body clears it.",
          "Most sessions take 15 to 30 minutes with little to no downtime. Patients at our <a href=\"/services/spider-vein-treatment\">spider vein treatment</a> clinic usually return to normal daily activities right away.",
          "Schulman Vein and Laser Center uses both traditional and foam sclerotherapy techniques based on vein size and treatment goals.",
        ],
        bullets: [
          "Best for spider veins and smaller surface vessels",
          "No anesthesia required — minimal discomfort",
          "15–30 minute in-office session",
          "Results develop gradually over weeks to months",
          "Usually self-pay; generally considered cosmetic",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        paragraphs: [
          "<strong>EVLT</strong> is typically best for larger refluxing varicose veins and symptomatic venous insufficiency. <strong>Sclerotherapy</strong> is best for spider veins and smaller surface vessels.",
          "Both are minimally invasive, in-office treatments and can be combined in a staged plan when clinically appropriate — which is common for New York patients managing both symptomatic varicose veins and cosmetic spider veins.",
        ],
        bullets: [
          "EVLT: treats venous reflux, often insurance-covered",
          "Sclerotherapy: treats surface vessels, usually self-pay",
          "EVLT requires local anesthesia; sclerotherapy does not",
          "Both allow same-day return to routine activity",
          "Staged combination treatment is often the most complete approach",
        ],
        keyTakeaway:
          "Many patients benefit from EVLT first to address underlying reflux, followed by sclerotherapy to treat residual surface veins.",
      },
      {
        heading: "Varicose Veins vs. Spider Veins",
        imageSrc: "/images/gallery/spider-veins-9.png",
        imageAlt: "Varicose veins vs spider veins diagram — vein treatment New York",
        paragraphs: [
          "<strong>Varicose veins</strong> are usually larger, raised, and associated with venous reflux symptoms such as heaviness, aching, and swelling. They signal a deeper circulation problem. Learn more on our <a href=\"/services/varicose-vein-treatment\">varicose vein treatment page</a>.",
          "<strong>Spider veins</strong> are smaller surface vessels and are more commonly cosmetic, though they can occasionally cause mild burning or aching.",
        ],
      },
      {
        heading: "Insurance Differences",
        paragraphs: [
          "<strong>EVLT</strong> is frequently covered by insurance when medical necessity is documented through symptoms and ultrasound-confirmed venous insufficiency. Most New York carriers and Medicare require a trial of <strong>compression therapy</strong> before approving procedures.",
          "Sclerotherapy is usually considered cosmetic and is typically self-pay unless unusual medical criteria are met.",
          "Schulman Vein and Laser Center helps patients understand insurance requirements and handles prior authorization documentation before treatment is scheduled.",
        ],
        callout: {
          type: "info",
          text: "Before your first appointment, you do not need to call your insurer. Bring your insurance card to your free vein screening and our team will verify your benefits and estimated out-of-pocket cost.",
        },
      },
      {
        heading: "Which Is Right for You?",
        paragraphs: [
          "The right treatment depends on your <strong>vein anatomy, symptoms, and ultrasound findings</strong>. Choosing treatment before a proper evaluation can lead to recurrence or incomplete results.",
          "A physician-led vein exam is the best first step. Schedule a <a href=\"/services/free-vein-screening\">free vein screening</a> at Schulman Vein and Laser Center to get a personalized recommendation.",
        ],
        keyTakeaway:
          "Do not choose a treatment before you have an ultrasound evaluation. Anatomy drives the decision — not preference or appearance alone.",
      },
      {
        heading: "See a Specialist at Schulman Vein and Laser Center",
        paragraphs: [
          "Patients across <strong>Manhattan, the Upper East Side, Midtown, and Long Island</strong> rely on Schulman Vein and Laser Center for physician-led vein diagnosis and individualized treatment planning.",
          "If you are unsure where to start, book a <a href=\"/services/free-vein-screening\">free vein screening</a> to confirm whether EVLT, sclerotherapy, or a staged combination is the best fit for your condition.",
        ],
      },
    ],
  },
  {
    slug: "understanding-varicose-veins-symptoms-when-to-seek-treatment",
    title: "Understanding Varicose Veins: Symptoms and When to Seek Treatment",
    excerpt:
      "Learn what varicose veins are, which symptoms suggest underlying venous disease, and when an evaluation at a New York vein center is worth scheduling.",
    category: "Vein Health",
    publishedAt: "2026-04-07",
    readTimeMinutes: 8,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Varicose Vein Symptoms: When to Seek Treatment | Schulman",
    metaDescription:
      "Know which varicose vein symptoms signal underlying venous disease. Schulman Vein Center serves Manhattan and Long Island. Book a free screening today.",
    ogDescription:
      "Recognize varicose vein warning signs and understand when to seek expert vein treatment in New York.",
    featuredImage: "/images/blog/varicose-veins-symptoms-when-to-seek-treatment.jpg",
    featuredImageAlt:
      "Varicose vein symptom checklist with leg illustration — when to seek treatment in New York",
    relatedLinks: [
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
      { label: "Laser Vein Therapy", href: "/services/laser-vein-therapy" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
    ],
    body: [
      {
        heading: "What varicose veins actually are",
        paragraphs: [
          "<strong>Varicose veins</strong> develop when vein valves in the legs weaken and allow blood to pool instead of returning efficiently to the heart. The pressure stretches the vein wall over time, making veins look twisted, enlarged, or rope-like.",
          "Many people assume varicose veins are only cosmetic — but visible veins can be one sign of <strong>chronic venous insufficiency</strong>. The underlying circulation problem may be present even when discomfort seems mild or manageable.",
        ],
        keyTakeaway:
          "Varicose veins are often a visible symptom of a deeper circulation problem — venous insufficiency — not just a cosmetic concern.",
      },
      {
        heading: "Symptoms patients should not ignore",
        paragraphs: [
          "Common symptoms include <strong>leg heaviness, aching after prolonged standing, ankle swelling, nighttime cramping, and itching</strong> around visible veins. Some patients also report restlessness or fatigue in the legs at the end of a long New York workday.",
          "If symptoms worsen despite leg elevation, compression, or routine activity changes, a <strong>diagnostic duplex ultrasound</strong> can clarify whether venous reflux is present and whether treatment may help.",
        ],
        bullets: [
          "Heaviness or aching in legs, especially after standing",
          "Ankle or lower-leg swelling that worsens throughout the day",
          "Nighttime cramping or restless legs",
          "Itching, burning, or throbbing near visible veins",
          "Skin discoloration or dryness near the ankles",
          "Visible bulging veins that are worsening over time",
        ],
        callout: {
          type: "warning",
          text: "If you notice sudden leg pain, warmth, or redness along a vein, seek prompt medical evaluation. These symptoms can occasionally signal a blood clot and should not be managed with watchful waiting.",
        },
      },
      {
        heading: "When to schedule an evaluation",
        paragraphs: [
          "An evaluation is appropriate when symptoms <strong>interfere with daily life</strong>, visible veins are progressing, or skin changes are appearing around the lower leg.",
          "Early treatment can help limit progression and reduce long-term complications. Patients throughout <strong>Manhattan, the Upper East Side, and Long Island</strong> often delay evaluation until symptoms become severe — but intervening earlier typically means simpler treatment and faster recovery.",
          "At Schulman Vein and Laser Center, a <a href=\"/services/free-vein-screening\">free vein screening</a> is the fastest way to understand whether an evaluation is the right next step.",
        ],
        bullets: [
          "Symptoms are affecting your daily activity or sleep",
          "Visible veins have increased in size or number over months",
          "Skin near the ankle is darkening, hardening, or developing sores",
          "You have a family history of vein disease",
          "Previous treatment did not fully resolve symptoms",
        ],
        keyTakeaway:
          "You do not have to wait until symptoms are severe. Scheduling a vein screening early is low-risk and often reduces the complexity of eventual treatment.",
      },
      {
        heading: "How treatment planning usually works",
        paragraphs: [
          "Treatment is selected based on <strong>ultrasound findings and symptom profile</strong>, not just appearance. Depending on anatomy, options may include <a href=\"/services/laser-vein-therapy\">endovenous laser therapy</a>, sclerotherapy, microphlebectomy, or staged combination care. Visit our <a href=\"/services/varicose-vein-treatment\">varicose vein treatment page</a> for a full overview of available approaches.",
          "Most modern procedures are <strong>minimally invasive and performed in-office</strong>. Patients can usually walk immediately afterward and return to normal activity quickly with specific aftercare instructions.",
          "At Schulman Vein and Laser Center, every treatment plan is developed personally by a physician — never a technician or nurse-only team.",
        ],
        bullets: [
          "Duplex ultrasound maps vein anatomy before any treatment decision",
          "In-office procedures — no hospital stay required",
          "Walking encouraged immediately after most procedures",
          "Follow-up ultrasound confirms closure and monitors results",
          "Staged plans address both deeper reflux and surface cosmetic veins",
        ],
      },
      {
        heading: "What to expect at a Schulman vein screening",
        paragraphs: [
          "A <a href=\"/services/free-vein-screening\">free vein screening</a> at Schulman Vein and Laser Center includes a physician consultation, review of your symptoms, and an initial assessment of your vein condition.",
          "If ultrasound mapping is recommended, the team will schedule a diagnostic study and walk you through insurance verification before any procedure is planned.",
          "We serve patients from <strong>Manhattan, Midtown, the Upper East Side, Manhasset, Commack</strong>, and surrounding communities across Nassau and Suffolk counties.",
        ],
        callout: {
          type: "tip",
          text: "Bring a list of any medications, compression garments you currently use, and your insurance card to your screening appointment. This helps the physician give you the most complete guidance on your first visit.",
        },
      },
    ],
  },
  {
    slug: "evlt-vs-sclerotherapy-which-treatment-is-right",
    title: "EVLT vs Sclerotherapy: Which Vein Treatment Is Right for You?",
    excerpt:
      "EVLT and sclerotherapy treat different vein patterns. This clinical guide explains the anatomy, ultrasound findings, and practical factors that drive the treatment decision.",
    category: "Treatments",
    publishedAt: "2026-04-06",
    readTimeMinutes: 9,
    author: "Dr. Lee G. Schulman",
    metaTitle: "EVLT vs Sclerotherapy: Clinical Vein Guide | Schulman NY",
    metaDescription:
      "Compare EVLT and sclerotherapy based on vein anatomy and ultrasound findings. Schulman Vein New York explains. Book a free vein screening today.",
    ogDescription:
      "Compare EVLT and sclerotherapy based on vein size, symptoms, recovery time, and clinical goals.",
    featuredImage: "/images/blog/evlt-sclerotherapy-vein-treatment-comparison.jpg",
    featuredImageAlt: "EVLT vs sclerotherapy decision flowchart — choosing the right vein treatment",
    relatedLinks: [
      { label: "Laser Vein Therapy", href: "/services/laser-vein-therapy" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Vein Disorders Overview", href: "/services/vein-disorders" },
    ],
    body: [
      {
        heading: "How EVLT works",
        paragraphs: [
          "<strong>Endovenous Laser Treatment (EVLT)</strong> uses a thin laser fiber inserted into a refluxing vein under <strong>duplex ultrasound guidance</strong>. Laser energy heats the vein wall, closing the diseased vein so blood reroutes through healthier pathways.",
          "EVLT is commonly used for larger incompetent veins — especially the <strong>great saphenous vein</strong> — when symptoms include heaviness, swelling, and persistent aching. For New York patients with physically demanding schedules or long commutes, treating the source vein first is often the most efficient path to lasting relief.",
        ],
        bullets: [
          "Targets the source vein driving reflux",
          "Performed under ultrasound guidance with local anesthesia",
          "45–60 minutes in-office — no hospital stay",
          "Often covered by insurance when medically necessary",
          "Immediate walking encouraged after the procedure",
        ],
        keyTakeaway:
          "EVLT addresses the root cause of varicose veins — the incompetent trunk vein — not just the surface appearance.",
      },
      {
        heading: "How sclerotherapy works",
        paragraphs: [
          "<strong>Sclerotherapy</strong> uses a <strong>sclerosing agent</strong> injected directly into a target vein, causing irritation of the lining and gradual closure. The treated vein is reabsorbed by the body over weeks to months.",
          "It is most effective for <a href=\"/services/spider-vein-treatment\">spider veins</a>, reticular veins, and selected smaller varicose veins. It can also complement EVLT as part of a staged treatment plan once deeper reflux has been corrected.",
        ],
        bullets: [
          "No anesthesia required — fine needle injection",
          "15–30 minutes per session with no downtime",
          "Best for spider veins and smaller surface vessels",
          "Results appear gradually over several weeks",
          "Often combined with EVLT in a staged plan",
        ],
      },
      {
        heading: "What ultrasound findings reveal",
        paragraphs: [
          "The single most important factor in choosing between EVLT and sclerotherapy is what <strong>duplex ultrasound</strong> shows. If the great saphenous vein or small saphenous vein is refluxing, that source must typically be addressed with EVLT before surface veins are treated — otherwise cosmetic results may be short-lived.",
          "When ultrasound shows no significant reflux and the concern is purely surface vessels, sclerotherapy is often the appropriate first-line treatment.",
          "Patients at our <a href=\"/services/vein-disorders\">vein disorders</a> clinic who skip ultrasound evaluation frequently end up needing retreatment within one to two years.",
        ],
        callout: {
          type: "warning",
          text: "Treating surface veins with sclerotherapy before correcting underlying reflux is a common reason for early recurrence. Ultrasound evaluation should come first — every time.",
        },
        keyTakeaway:
          "Duplex ultrasound drives the treatment decision. The anatomy shown on ultrasound — not the visible vein — determines whether EVLT, sclerotherapy, or a staged combination is appropriate.",
      },
      {
        heading: "Choosing the right option",
        paragraphs: [
          "The best treatment depends on <strong>ultrasound findings, symptom burden, and vein anatomy</strong> — not personal preference alone. Larger refluxing trunks often require EVLT first, while visible surface veins may be treated with sclerotherapy after deeper flow is corrected.",
          "In many patients, both treatments are used strategically: <a href=\"/services/laser-vein-therapy\">EVLT</a> for the source vein and sclerotherapy for residual cosmetic or branch veins. This staged approach is especially common for patients presenting with both symptomatic varicose veins and cosmetic spider veins.",
        ],
        bullets: [
          "Significant reflux present → EVLT first, then reassess",
          "Surface-only veins, no reflux → sclerotherapy may be first-line",
          "Mixed presentation → staged plan with EVLT followed by sclerotherapy",
          "Repeat symptoms after previous treatment → new ultrasound to reassess anatomy",
        ],
      },
      {
        heading: "Recovery and practical expectations",
        paragraphs: [
          "Both procedures are <strong>minimally invasive and typically completed in-office</strong> in Manhattan or at our Long Island locations. Walking is encouraged after treatment, and most patients return to daily routines quickly with compression guidance.",
          "Your physician will review <strong>activity restrictions, symptom expectations, and follow-up ultrasound timing</strong> so results and safety can be monitored.",
        ],
        callout: {
          type: "tip",
          text: "Plan to wear compression stockings for one to two weeks following EVLT or sclerotherapy. Bring a comfortable pair of walking shoes to your appointment — you will walk out of the office.",
        },
      },
    ],
  },
  {
    slug: "what-to-expect-after-minimally-invasive-vein-treatment",
    title: "What to Expect After Minimally Invasive Vein Treatment",
    excerpt:
      "Understand post-procedure timelines, normal short-term symptoms, and practical recovery steps after modern vein treatment in New York.",
    category: "Patient Guide",
    publishedAt: "2026-04-05",
    readTimeMinutes: 7,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Vein Treatment Recovery: What to Expect | Schulman NY",
    metaDescription:
      "Post-treatment recovery guide for EVLT and vein procedures at Schulman Vein and Laser Center in New York. Learn what's normal and when to call your doctor.",
    ogDescription:
      "Post-treatment recovery guide for EVLT and sclerotherapy, including walking, compression, and follow-up milestones.",
    featuredImage: "/images/blog/minimally-invasive-vein-treatment-recovery.jpg",
    featuredImageAlt:
      "Vein treatment recovery timeline with four milestones from procedure day to full results",
    relatedLinks: [
      { label: "Laser Vein Therapy (EVLT)", href: "/services/laser-vein-therapy" },
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Contact Our Office", href: "/contact" },
    ],
    body: [
      {
        heading: "Immediately after your procedure",
        paragraphs: [
          "Most patients walk out of the office the <strong>same day</strong>. Mild tightness, bruising, or tenderness along the treated vein is common and usually improves over days to weeks.",
          "Your care team will provide clear written instructions about <strong>compression stockings, walking goals, hydration</strong>, and any short-term activity modifications before you leave.",
          "If you are returning to a demanding schedule — which is common for our Manhattan and Midtown patients — your physician will give you specific guidance tailored to your routine.",
        ],
        bullets: [
          "Walk out the same day — no bed rest required",
          "Wear compression stockings as directed (typically 1–2 weeks)",
          "Stay hydrated and walk regularly to support circulation",
          "Avoid prolonged sitting or standing in the first 48 hours",
          "Mild bruising, firmness, or pulling sensations are expected",
        ],
        keyTakeaway:
          "Walking is your most important recovery activity. Movement encourages circulation and reduces the risk of post-procedure discomfort.",
      },
      {
        heading: "What symptoms are normal during recovery",
        paragraphs: [
          "Temporary <strong>pulling sensations, firmness along treated veins</strong>, or mild skin discoloration can occur during the healing process. These are generally expected findings and are monitored during follow-up visits.",
          "Your physician will describe what normal healing looks and feels like so you can distinguish expected recovery from anything that warrants a call to the office.",
        ],
        bullets: [
          "Mild bruising or discoloration along the treated vein path",
          "Cord-like firmness under the skin (the treated vein closing off)",
          "Occasional aching or tightness in the first week",
          "Temporary skin darkening near treated spider veins",
          "Minor swelling in the treated leg, especially by end of day",
        ],
        callout: {
          type: "warning",
          text: "Severe or worsening pain, sudden leg swelling, chest pain, or shortness of breath are not expected. Contact your physician's office immediately if you experience any of these symptoms.",
        },
      },
      {
        heading: "How to support better outcomes",
        paragraphs: [
          "Walking daily is the single most helpful thing you can do. Many patients are advised to aim for <strong>30 minutes of walking</strong> per day in the week following treatment — a target that fits naturally into a New York commute.",
          "Wearing <strong>compression stockings as directed</strong>, attending scheduled follow-up ultrasound checks, and avoiding high-impact activity in the early recovery period all improve consistency of results. See our <a href=\"/services/varicose-vein-treatment\">varicose vein treatment page</a> for details on what your specific procedure recovery may involve.",
        ],
        bullets: [
          "Walk 20–30 minutes daily starting day one",
          "Wear compression stockings for the full prescribed period",
          "Attend your follow-up ultrasound appointment",
          "Avoid high-impact exercise, hot baths, and saunas for 1–2 weeks",
          "Report any unexpected symptoms promptly — do not wait for your follow-up",
        ],
        keyTakeaway:
          "Compression and daily walking are the two most impactful recovery tools. Skipping either significantly increases the chance of suboptimal results.",
      },
      {
        heading: "Timeline for visible improvement",
        paragraphs: [
          "<strong>Symptom relief</strong> — including reduced heaviness, aching, and swelling — often begins within <strong>days to weeks</strong> after <a href=\"/services/laser-vein-therapy\">EVLT or laser vein therapy</a>. Cosmetic improvement may continue over several months as treated veins are gradually reabsorbed by the body.",
          "If additional branch veins remain visible after your primary treatment, your physician may recommend <a href=\"/services/spider-vein-treatment\">staged spider vein treatment</a> for a more complete result.",
          "Most patients at Schulman Vein and Laser Center — across our Manhattan, Upper East Side, Manhasset, and Commack locations — see meaningful cosmetic improvement within six to twelve weeks.",
        ],
        callout: {
          type: "info",
          text: "Results from sclerotherapy for spider veins typically take longer to appear than EVLT results. Full cosmetic clearance after sclerotherapy can take 3–6 months, and some patients benefit from a second session.",
        },
      },
      {
        heading: "When to call your doctor",
        paragraphs: [
          "Most patients complete recovery without complications, but it is important to know when to reach out. Do not wait until your next scheduled appointment if you notice unexpected symptoms.",
          "Your Schulman care team is reachable by phone if you have questions after your procedure — do not hesitate to <a href=\"/contact\">contact the office</a> with any concerns.",
        ],
        bullets: [
          "Severe or rapidly worsening leg pain",
          "Sudden new swelling, redness, or warmth in the treated leg",
          "Fever above 101°F",
          "Chest tightness, shortness of breath, or rapid heartbeat",
          "Wound site concerns such as unusual discharge or bleeding",
        ],
      },
    ],
  },
  {
    slug: "does-insurance-cover-vein-treatment-new-york",
    title: "Does Insurance Cover Vein Treatment in New York?",
    excerpt:
      "Does insurance cover vein treatment in New York? Learn when varicose vein procedures are medically necessary and how to verify coverage before your appointment.",
    category: "Insurance",
    publishedAt: "2026-04-08",
    readTimeMinutes: 10,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Does Insurance Cover Vein Treatment? | Schulman NY",
    metaDescription:
      "Does insurance cover vein treatment in New York? Learn when varicose vein procedures are medically necessary — and how to find out if you're covered.",
    ogDescription:
      "Plain-language guide to insurance coverage for vein procedures at Schulman Vein and Laser Center. Learn when treatment qualifies as medically necessary.",
    featuredImage: "/images/blog/insurance-coverage-new-york.jpg",
    featuredImageAlt:
      "Insurance paperwork at a vein clinic in New York — Schulman Vein and Laser Center",
    relatedLinks: [
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Laser Vein Therapy", href: "/services/laser-vein-therapy" },
      { label: "Contact Our Office", href: "/contact" },
    ],
    body: [
      {
        heading: "The Short Answer",
        paragraphs: [
          "Vein treatment <strong>may be covered</strong> when it is medically necessary. Procedures that treat symptomatic venous disease — such as painful or swollen <a href=\"/services/varicose-vein-treatment\">varicose veins</a> — are frequently eligible under many commercial plans and <strong>Medicare</strong> in New York.",
          "Cosmetic treatment for spider veins without qualifying medical symptoms is usually <strong>not covered</strong>. The core insurance question is whether treatment addresses a documented medical condition or appearance alone.",
        ],
        keyTakeaway:
          "Medical necessity — not procedure type — is what drives insurance coverage for vein treatment. Documented symptoms and ultrasound findings are the deciding factors.",
      },
      {
        heading: "When Vein Treatment Is Medically Necessary",
        paragraphs: [
          "Most New York insurers and Medicare look for documented symptoms alongside <strong>ultrasound evidence of venous reflux</strong>. Symptoms that typically qualify include aching, heaviness, ankle swelling, skin changes, or ulcer risk.",
          "Carriers also commonly require a trial of <strong>conservative care</strong> — such as compression stockings worn for 6–12 weeks — before approving procedures like <a href=\"/services/laser-vein-therapy\">EVLT or laser ablation</a>.",
          "If symptoms persist after conservative therapy, physician documentation and duplex ultrasound findings typically form the basis of a medical necessity claim.",
        ],
        bullets: [
          "Documented leg heaviness, aching, or swelling",
          "Duplex ultrasound showing venous reflux",
          "Completion of required conservative care (compression stockings)",
          "Skin changes such as hyperpigmentation, lipodermatosclerosis, or ulcers",
          "Physician notes linking symptoms to confirmed venous insufficiency",
        ],
        callout: {
          type: "info",
          text: "If you already wear compression stockings for another condition or have been prescribed them previously, document this with your physician before starting the insurance process. Prior compression use may satisfy the conservative care requirement.",
        },
      },
      {
        heading: "What Insurance Commonly Covers",
        paragraphs: [
          "When criteria are met, plans often cover <strong>diagnostic venous duplex ultrasound</strong> and medically necessary procedures such as EVLT or radiofrequency ablation for refluxing veins.",
          "In selected cases, follow-up treatment for residual medically significant varicose veins can also be covered when clearly documented by your physician.",
          "Coverage details vary by policy and carrier, so benefits must be verified case-by-case before treatment is scheduled.",
        ],
        bullets: [
          "Diagnostic venous duplex ultrasound",
          "EVLT or radiofrequency ablation for refluxing saphenous veins",
          "Selected adjunct procedures with documented medical necessity",
          "Some office visit and consultation costs",
        ],
      },
      {
        heading: "What Is Usually Not Covered",
        paragraphs: [
          "Cosmetic spider vein sclerotherapy is usually <strong>self-pay</strong> when no qualifying symptoms or venous disease are documented.",
          "Treatment may also be denied when required conservative therapy has not been completed or when medical necessity records are incomplete.",
        ],
        bullets: [
          "Cosmetic spider vein treatment without qualifying symptoms",
          "Procedures performed before required conservative care is documented",
          "Retreatment without fresh clinical evidence of persistent or recurrent disease",
          "Treatment at out-of-network providers when in-network options are available",
        ],
        keyTakeaway:
          "Documentation is everything. Even when treatment is medically appropriate, insufficient physician notes or skipped prior authorization steps can result in a denial.",
      },
      {
        heading: "How to Verify Your Coverage",
        paragraphs: [
          "Start with a physician evaluation rather than calling your insurer first. A <strong>diagnosis and procedure code</strong> are needed before your plan can give you meaningful benefit information.",
          "At Schulman Vein and Laser Center, a <a href=\"/services/free-vein-screening\">free vein screening</a> helps determine whether your condition is cosmetic or medically significant before any decisions are made.",
          "Our team then verifies your deductible, coinsurance, prior authorization requirements, and estimated out-of-pocket cost before scheduling treatment.",
        ],
        callout: {
          type: "tip",
          text: "Bring your insurance card and a list of current medications to your free vein screening. Our team handles prior authorization from that first appointment — you will not need to navigate the insurance process alone.",
        },
      },
      {
        heading: "How Schulman Vein and Laser Center Helps",
        paragraphs: [
          "Our office works with major New York carriers and handles <strong>prior authorization submissions</strong> with physician-led documentation and ultrasound findings.",
          "If a denial occurs, we assist with appeal steps using the clinical record required by your plan. Patients across Manhattan, the Upper East Side, Manhasset, and Commack have successfully appealed denials with our support.",
          "If treatment is cosmetic, we provide transparent <strong>self-pay options</strong> so you can choose a plan that fits your goals and budget.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [
          "<strong>Does Medicare cover vein treatment?</strong> Medicare often covers medically necessary varicose vein treatment with documented symptoms and reflux — but not cosmetic procedures. Part B typically covers the procedure when criteria are met.",
          "<strong>How long does authorization take?</strong> Many New York plans respond within 5–10 business days, though timing varies. Our team follows up on your behalf and alerts you as soon as a decision is received.",
          "<strong>Do I need a referral?</strong> A referral is not required for an initial consultation at Schulman Vein and Laser Center. We accept self-referred patients.",
          "<strong>What if my claim is denied?</strong> A denial is not necessarily final. Our team helps you understand whether an appeal is appropriate based on your documentation and clinical record.",
        ],
      },
      {
        heading: "Take the First Step",
        paragraphs: [
          "A physician-led <a href=\"/services/free-vein-screening\">free vein screening</a> is the fastest way to understand whether your condition may qualify for <strong>insurance coverage</strong> in New York.",
          "If you are ready to get clarity on your treatment options and coverage, schedule a screening and discuss your options with our team.",
        ],
        keyTakeaway:
          "Start with the free vein screening — not a call to your insurer. Our team will verify your coverage and guide you through every step, from diagnosis to authorization to treatment.",
      },
    ],
  },
  {
    slug: "spider-veins-vs-varicose-veins-key-differences",
    title: "Spider Veins vs Varicose Veins: Key Differences",
    excerpt:
      "Spider veins and varicose veins can look similar at first glance, but their causes, symptoms, and treatment strategies are often different. Here is how to tell them apart.",
    category: "Vein Health",
    publishedAt: "2026-04-03",
    readTimeMinutes: 6,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Spider vs Varicose Veins: Key Differences | Schulman NY",
    metaDescription:
      "Learn the differences between spider veins and varicose veins — causes, symptoms, and treatment. Book a free vein screening in New York today.",
    ogDescription:
      "Learn the difference between spider veins and varicose veins and when each may require medical evaluation.",
    featuredImage: "/images/blog/spider-veins-vs-varicose-veins-differences.jpg",
    featuredImageAlt:
      "Spider veins vs varicose veins side-by-side comparison of size depth and treatment options",
    relatedLinks: [
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
      { label: "Vein Disorders Overview", href: "/services/vein-disorders" },
    ],
    body: [
      {
        heading: "Appearance and depth",
        paragraphs: [
          "<strong>Spider veins</strong> are small, superficial vessels that appear red, blue, or purple in web-like or branching patterns near the skin surface. They lie close to the skin and are visible without any raised texture.",
          "<strong>Varicose veins</strong> are typically larger, bulging, and raised above the skin. They reflect deeper <strong>valve dysfunction</strong> within the venous system and are more likely to cause physical symptoms beyond appearance.",
        ],
        bullets: [
          "Spider veins: flat, small, web-like, red or purple",
          "Varicose veins: raised, bulging, blue or green, rope-like",
          "Spider veins are superficial; varicose veins involve deeper vessel walls",
          "Varicose veins are associated with underlying venous reflux",
        ],
        keyTakeaway:
          "The key distinction is depth and valve function. Spider veins are superficial. Varicose veins often signal a deeper circulation problem that deserves clinical evaluation.",
      },
      {
        heading: "Symptoms and clinical significance",
        paragraphs: [
          "<strong>Spider veins</strong> are often cosmetic but can occasionally cause mild burning or aching, particularly after long periods of standing — common in New York's demanding professional environments.",
          "<strong>Varicose veins</strong> more commonly cause heaviness, throbbing, swelling, and fatigue in the legs. Because they may signal <strong>chronic venous insufficiency</strong>, a duplex ultrasound evaluation is often recommended when symptoms are persistent.",
          "Learn more about <a href=\"/services/varicose-vein-treatment\">varicose vein treatment options</a> at Schulman Vein and Laser Center.",
        ],
        bullets: [
          "Spider vein symptoms: mild burning, aching, or cosmetic concern only",
          "Varicose vein symptoms: leg heaviness, swelling, throbbing, fatigue",
          "Varicose veins may signal chronic venous insufficiency",
          "Either type can worsen over time without evaluation and treatment",
        ],
        callout: {
          type: "info",
          text: "Patients often come in for cosmetic spider veins and discover underlying varicose vein disease on ultrasound. A free vein screening at Schulman Vein and Laser Center catches this pattern early — before symptoms become severe.",
        },
      },
      {
        heading: "Treatment differences",
        paragraphs: [
          "<a href=\"/services/spider-vein-treatment\">Spider veins</a> are frequently treated with <strong>sclerotherapy</strong> or surface laser approaches, depending on pattern and vessel size. Sessions are quick, typically 15–30 minutes, and patients return to their routines the same day.",
          "Varicose veins often require a deeper strategy — such as <a href=\"/services/laser-vein-therapy\">endovenous laser therapy (EVLT)</a> or closure procedures — to address reflux first. Surface branch veins are then treated in a staged plan.",
          "Treating surface veins before correcting underlying reflux is one of the most common reasons for recurrence after spider vein treatment.",
        ],
        bullets: [
          "Spider veins → sclerotherapy or surface laser",
          "Varicose veins → EVLT or ablation to correct reflux first",
          "Mixed presentation → staged plan: deeper veins first, then surface",
          "Ultrasound mapping guides every treatment decision",
        ],
        keyTakeaway:
          "Never treat the surface before ruling out deeper reflux. Ultrasound evaluation should precede any vein treatment to ensure results last.",
      },
      {
        heading: "When to seek a specialist",
        paragraphs: [
          "If you have <strong>pain, swelling, skin changes, or veins that are worsening</strong>, specialist evaluation is appropriate even if cosmetic concerns brought you in first. Many patients across Manhattan, the Upper East Side, and Long Island discover medically significant disease during what they assumed was a cosmetic consult.",
          "A physician-led vein exam at Schulman Vein and Laser Center separates cosmetic-only issues from medically significant disease and guides an effective, staged plan.",
          "Book a <a href=\"/services/free-vein-screening\">free vein screening</a> to start with a no-pressure evaluation and understand exactly what you are dealing with.",
        ],
        callout: {
          type: "tip",
          text: "If your varicose or spider veins are getting worse over time, that is reason enough to schedule an evaluation — even if symptoms feel manageable. Vein disease is progressive; earlier intervention typically means simpler treatment.",
        },
      },
    ],
  },
  {
    slug: "hand-vein-treatment-options-what-patients-should-know",
    title: "Hand Vein Treatment Options: What Patients Should Know",
    excerpt:
      "Prominent hand veins can be safely treated in selected patients. Learn candidacy basics, procedure options, and recovery expectations from a vein-focused New York physician team.",
    category: "Treatments",
    publishedAt: "2026-04-02",
    readTimeMinutes: 7,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Hand Vein Treatment Options New York | Schulman",
    metaDescription:
      "Learn about hand vein treatment options, candidacy, and recovery at Schulman Vein and Laser Center New York. Book a free consultation today.",
    ogDescription:
      "Review hand vein treatment options, patient selection, and recovery guidance from a vein-focused physician team.",
    featuredImage: "/images/blog/hand-vein-treatment-options-new-york.jpg",
    featuredImageAlt:
      "Hand vein treatment process from consultation to recovery at Schulman Vein Center New York",
    relatedLinks: [
      { label: "Body Vein Treatment", href: "/services/body-vein-treatment" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
      { label: "Contact Our Office", href: "/contact" },
    ],
    body: [
      {
        heading: "Why hand veins become prominent",
        paragraphs: [
          "Visible hand veins often become more noticeable with <strong>age, reduced subcutaneous fat, genetics, exercise, and natural skin thinning</strong>. In many cases this is a cosmetic concern rather than a sign of dangerous disease.",
          "For many New York patients — particularly those in professional or public-facing roles in Manhattan or Midtown — prominent hand veins are a source of self-consciousness. A focused consultation helps determine whether treatment goals are aesthetic, functional, or both.",
        ],
        keyTakeaway:
          "Prominent hand veins are usually benign and cosmetic. The goal of treatment is appearance improvement while preserving healthy blood flow and hand function.",
      },
      {
        heading: "How candidacy is evaluated",
        paragraphs: [
          "Not every visible hand vein should be treated. Physicians at Schulman Vein and Laser Center assess <strong>circulation patterns, dominant veins needed for normal drainage, skin quality, and medical history</strong> before recommending any procedure.",
          "Patients with a history of peripheral vascular disease, prior surgery to hand veins, or planned IV access needs require more careful evaluation before treatment proceeds.",
          "The goal is meaningful improvement without compromising healthy blood flow or hand function — this requires an experienced physician, not an aesthetic-only provider. Book a <a href=\"/services/free-vein-screening\">free vein screening</a> to discuss your candidacy with our team.",
        ],
        bullets: [
          "Full circulation assessment before any procedure",
          "Review of prior surgeries, medications, and vascular history",
          "Evaluation of skin quality and healing capacity",
          "Identification of dominant veins essential for drainage",
          "Discussion of realistic aesthetic goals and limitations",
        ],
        callout: {
          type: "warning",
          text: "Hand vein treatment requires careful patient selection. Not all prominent veins are safe to treat. Only a physician with vascular training can properly assess whether your anatomy is appropriate for treatment.",
        },
      },
      {
        heading: "Common treatment approaches",
        paragraphs: [
          "Depending on anatomy, options may include <strong>targeted sclerotherapy</strong> for smaller superficial hand veins or <strong>microphlebectomy-style techniques</strong> for selected larger surface vessels. Treatment strategy is individualized to preserve function and optimize appearance.",
          "<a href=\"/services/spider-vein-treatment\">Sclerotherapy</a> for hand veins uses very fine needles and careful injection technique. Multiple sessions may be needed for full results, and treated veins fade gradually over several weeks.",
          "Learn more about <a href=\"/services/body-vein-treatment\">body vein treatment options</a> available at Schulman Vein and Laser Center.",
        ],
        bullets: [
          "Sclerotherapy: fine needle injection to close target veins",
          "Microphlebectomy-style approach for selected larger surface vessels",
          "Conservative staging preferred for safety and cosmetic predictability",
          "Multiple sessions may be needed for comprehensive results",
          "All procedures performed in-office in Manhattan or Long Island",
        ],
      },
      {
        heading: "Recovery and follow-up",
        paragraphs: [
          "Most patients resume <strong>routine hand use quickly</strong>, with temporary bruising or tenderness expected for a short period. Aftercare instructions may include activity guidance, compression, and follow-up visits to monitor healing.",
          "Your physician will review expected progression so you know what is normal and when to check in if healing differs from plan.",
          "For questions about recovery or next steps, <a href=\"/contact\">contact our office</a> directly — our team is available to guide you through the post-treatment period.",
        ],
        bullets: [
          "Temporary bruising or tenderness for 1–2 weeks",
          "Avoid heavy lifting and grip-intensive activity briefly after treatment",
          "Treated veins fade gradually over weeks to months",
          "Follow-up visit confirms healing and assesses whether a second session is needed",
        ],
        callout: {
          type: "tip",
          text: "Results from hand vein sclerotherapy take time to develop. Do not judge your outcome at two weeks — full fading of treated vessels typically occurs over 6–12 weeks.",
        },
        keyTakeaway:
          "Hand vein treatment is well tolerated and recovery is quick for most patients, but realistic expectations and physician-led follow-up are essential for the best outcome.",
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...BLOG_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
