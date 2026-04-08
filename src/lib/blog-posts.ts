export const BLOG_CATEGORIES = ["Vein Health", "Treatments", "Patient Guide", "Insurance"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
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
      "EVLT vs. sclerotherapy - which vein treatment is right for you? Schulman Vein and Laser Center in New York explains. Book a free vein screening today.",
    ogDescription:
      "EVLT vs. sclerotherapy - which vein treatment is right for you? Schulman Vein and Laser Center in New York explains. Book a free vein screening today.",
    featuredImage: "/images/blog/evlt-vs-sclerotherapy-new-york.svg",
    featuredImageAlt:
      "EVLT vs sclerotherapy vein treatment comparison - Schulman Vein and Laser Center New York",
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
          "EVLT is typically used for larger varicose veins and underlying venous insufficiency - the circulatory problem that causes varicose veins to form. Because it addresses a medical condition, it is often covered by insurance.",
          "Sclerotherapy is typically used for spider veins and smaller surface vessels. It is a quicker procedure, but because it is generally considered cosmetic, it is usually self-pay.",
          "If you are dealing with bulging, ropy veins with pain, swelling, or heaviness, EVLT may be the right path. If your concern is fine red or purple web-like veins near the skin surface, sclerotherapy is often the better fit.",
        ],
      },
      {
        heading: "What Is EVLT?",
        paragraphs: [
          "EVLT stands for Endovenous Laser Treatment. It treats venous insufficiency, where faulty vein valves allow blood to pool and flow backward instead of returning efficiently to the heart.",
          "During treatment, a thin laser fiber is inserted into the affected vein through a small puncture. Under ultrasound guidance, heat energy closes the vein from the inside. Blood naturally reroutes through healthier veins as the treated vein is reabsorbed.",
          "The procedure usually takes 45 to 60 minutes in-office under local anesthesia. Most patients return to normal activity quickly after treatment.",
        ],
      },
      {
        heading: "What Is Sclerotherapy?",
        paragraphs: [
          "Sclerotherapy treats spider veins and smaller superficial vessels by injecting a medical solution directly into the vein. The vein wall collapses and gradually fades as the body clears it.",
          "Most sessions take 15 to 30 minutes with little to no downtime, and patients usually return to normal daily activities right away.",
          "Schulman Vein and Laser Center uses traditional and foam techniques based on vein size and treatment goals.",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        paragraphs: [
          "EVLT is typically best for larger refluxing varicose veins and symptomatic venous insufficiency, while sclerotherapy is best for spider veins and smaller surface vessels.",
          "EVLT generally involves local anesthesia and a slightly longer recovery window, while sclerotherapy is faster and often same-day return to routine.",
          "Both are minimally invasive, in-office treatments and can be combined in a staged plan when clinically appropriate.",
        ],
      },
      {
        heading: "Varicose Veins vs Spider Veins",
        imageSrc: "/images/gallery/spider-veins-9.png",
        imageAlt: "Varicose veins vs spider veins diagram - vein treatment New York",
        paragraphs: [
          "Varicose veins are usually larger, raised, and associated with venous reflux symptoms. Spider veins are smaller surface vessels and are more commonly cosmetic.",
        ],
      },
      {
        heading: "Insurance Differences",
        paragraphs: [
          "EVLT is frequently covered by insurance when medical necessity is documented through symptoms and ultrasound-confirmed venous insufficiency.",
          "Sclerotherapy is usually considered cosmetic and is typically self-pay unless unusual medical criteria are met.",
          "Schulman Vein and Laser Center helps patients understand insurance requirements and documentation before treatment.",
        ],
      },
      {
        heading: "Which Is Right for You?",
        paragraphs: [
          "The right treatment depends on your vein anatomy, symptoms, and ultrasound findings. Many patients benefit from EVLT first to address underlying reflux and then sclerotherapy for residual surface veins.",
          "Choosing treatment before a proper evaluation can lead to recurrence or incomplete results. A physician-led vein exam is the best first step.",
        ],
      },
      {
        heading: "See a Specialist at Schulman Vein and Laser Center",
        paragraphs: [
          "Patients across Manhattan, the Upper East Side, and Long Island rely on Schulman Vein and Laser Center for physician-led vein diagnosis and treatment planning.",
          "If you are unsure where to start, schedule an evaluation to confirm whether EVLT, sclerotherapy, or a staged combination is the best fit for your condition.",
        ],
      },
    ],
  },
  {
    slug: "understanding-varicose-veins-symptoms-when-to-seek-treatment",
    title: "Understanding Varicose Veins: Symptoms and When to Seek Treatment",
    excerpt:
      "Learn what varicose veins are, which symptoms suggest underlying venous disease, and when an evaluation is worth scheduling.",
    category: "Vein Health",
    publishedAt: "2026-04-07",
    readTimeMinutes: 8,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Recognize varicose vein warning signs and understand when to seek expert vein treatment in New York.",
    featuredImage: "/images/blog/varicose-veins-symptoms-when-to-seek-treatment.svg",
    featuredImageAlt: "Varicose vein symptom checklist with leg illustration - when to seek treatment in New York",
    body: [
      {
        heading: "What varicose veins actually are",
        paragraphs: [
          "Varicose veins develop when vein valves in the legs weaken and allow blood to pool instead of returning efficiently to the heart. The pressure stretches the vein wall over time, making veins look twisted, enlarged, or rope-like.",
          "Many people think varicose veins are only cosmetic, but visible veins can be one sign of chronic venous insufficiency. The underlying circulation issue may be present even when discomfort seems mild.",
        ],
      },
      {
        heading: "Symptoms patients should not ignore",
        paragraphs: [
          "Common symptoms include leg heaviness, aching after standing, swelling near the ankles, nighttime cramping, and itching around visible veins. Some patients also report restlessness or fatigue in the legs at the end of the day.",
          "If symptoms worsen despite leg elevation, compression, or routine activity changes, a diagnostic ultrasound can clarify whether reflux is present and whether treatment may help.",
        ],
      },
      {
        heading: "When to schedule an evaluation",
        paragraphs: [
          "An evaluation is appropriate when symptoms interfere with daily life, visible veins are progressing, or skin changes are appearing around the lower leg. Early treatment can help limit progression and reduce long-term complications.",
          "At Schulman Vein and Laser Center, physician-led ultrasound mapping helps identify whether symptoms are caused by superficial cosmetic veins, deeper refluxing veins, or both.",
        ],
      },
      {
        heading: "How treatment planning usually works",
        paragraphs: [
          "Treatment is selected based on ultrasound findings and symptom profile, not just appearance. Depending on anatomy, options may include endovenous laser therapy, sclerotherapy, microphlebectomy, or staged combination care.",
          "Most modern procedures are minimally invasive and performed in-office. Patients can usually walk immediately afterward and return to normal activity quickly with specific aftercare instructions.",
        ],
      },
    ],
  },
  {
    slug: "evlt-vs-sclerotherapy-which-treatment-is-right",
    title: "EVLT vs Sclerotherapy: Which Vein Treatment Is Right for You?",
    excerpt:
      "EVLT and sclerotherapy treat different vein patterns. This guide explains where each works best and how doctors choose between them.",
    category: "Treatments",
    publishedAt: "2026-04-06",
    readTimeMinutes: 9,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Compare EVLT and sclerotherapy based on vein size, symptoms, recovery time, and clinical goals.",
    featuredImage: "/images/blog/evlt-sclerotherapy-vein-treatment-comparison.svg",
    featuredImageAlt: "EVLT vs sclerotherapy decision flowchart - choosing the right vein treatment",
    body: [
      {
        heading: "How EVLT works",
        paragraphs: [
          "Endovenous laser treatment (EVLT) uses a thin laser fiber inserted into a refluxing vein under ultrasound guidance. Laser energy heats the vein wall, closing the diseased vein so blood reroutes through healthier pathways.",
          "EVLT is commonly used for larger incompetent veins such as the great saphenous vein, especially when symptoms include heaviness, swelling, and persistent aching.",
        ],
      },
      {
        heading: "How sclerotherapy works",
        paragraphs: [
          "Sclerotherapy uses a medication injected directly into a target vein, causing irritation of the lining and eventual closure. The treated vein is gradually reabsorbed by the body.",
          "It is often used for spider veins, reticular veins, and selected smaller varicose veins. It can also complement EVLT as part of a staged treatment plan.",
        ],
      },
      {
        heading: "Choosing the right option",
        paragraphs: [
          "The best treatment depends on ultrasound findings, not preference alone. Larger refluxing trunks often require EVLT first, while visible surface veins may be treated with sclerotherapy after deeper flow is corrected.",
          "In many patients, both treatments are used strategically: EVLT for the source vein and sclerotherapy for residual cosmetic or branch veins.",
        ],
      },
      {
        heading: "Recovery and practical expectations",
        paragraphs: [
          "Both procedures are minimally invasive and typically completed in-office. Walking is encouraged after treatment, and most patients return to daily routines quickly with compression guidance.",
          "Your physician will review activity restrictions, symptom expectations, and follow-up ultrasound timing so results and safety can be monitored.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-after-minimally-invasive-vein-treatment",
    title: "What to Expect After Minimally Invasive Vein Treatment",
    excerpt:
      "Understand post-procedure timelines, normal short-term symptoms, and practical recovery steps after modern vein treatment.",
    category: "Patient Guide",
    publishedAt: "2026-04-05",
    readTimeMinutes: 7,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Post-treatment recovery guide for EVLT and sclerotherapy, including walking, compression, and follow-up milestones.",
    featuredImage: "/images/blog/minimally-invasive-vein-treatment-recovery.svg",
    featuredImageAlt: "Vein treatment recovery timeline with four milestones from procedure day to full results",
    body: [
      {
        heading: "Immediately after your procedure",
        paragraphs: [
          "Most patients walk out of the office on the same day. Mild tightness, bruising, or tenderness along the treated vein is common and usually improves over days to weeks.",
          "Your care team will provide clear written instructions about compression stockings, walking goals, hydration, and any short-term activity modifications.",
        ],
      },
      {
        heading: "What symptoms are normal during recovery",
        paragraphs: [
          "Temporary pulling sensations, firmness along treated veins, or mild discoloration can occur during the healing process. These are generally expected and monitored during follow-up visits.",
          "Severe pain, sudden swelling, or new shortness of breath are not expected and should be reported immediately so your team can evaluate promptly.",
        ],
      },
      {
        heading: "How to support better outcomes",
        paragraphs: [
          "Walking daily helps circulation and can reduce discomfort. Many patients are advised to avoid prolonged immobility in the first days after treatment.",
          "Wearing compression as directed, attending scheduled ultrasound checks, and following personalized aftercare instructions all improve consistency of results.",
        ],
      },
      {
        heading: "Timeline for visible improvement",
        paragraphs: [
          "Symptom relief often begins within days to weeks, while cosmetic improvement may continue over several months as treated veins are reabsorbed.",
          "If additional branch veins remain, your physician may recommend staged treatment for a more complete result.",
        ],
      },
    ],
  },
  {
    slug: "does-insurance-cover-vein-treatment-new-york",
    title: "Does Insurance Cover Vein Treatment in New York?",
    excerpt:
      "Does insurance cover vein treatment in New York? Learn when varicose vein procedures are medically necessary and how to verify coverage.",
    category: "Insurance",
    publishedAt: "2026-04-08",
    readTimeMinutes: 10,
    author: "Dr. Lee G. Schulman",
    metaTitle: "Does Insurance Cover Vein Treatment in New York? | Schulman Vein",
    metaDescription:
      "Does insurance cover vein treatment in New York? Learn when varicose vein procedures are medically necessary - and how to find out if you're covered.",
    ogDescription:
      "Plain-language guide to insurance coverage for vein procedures at Schulman Vein and Laser Center. Learn when treatment qualifies as medically necessary.",
    featuredImage: "/images/blog/insurance-coverage-new-york.svg",
    featuredImageAlt:
      "Insurance paperwork at a vein clinic in New York - Schulman Vein and Laser Center",
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
          "Vein treatment may be covered when it is medically necessary. Procedures that treat symptomatic venous disease, such as painful or swollen varicose veins, are frequently eligible under many commercial plans and Medicare in New York.",
          "Cosmetic treatment for spider veins without medical symptoms is usually not covered. The core insurance question is whether treatment addresses a documented medical condition or appearance alone.",
        ],
      },
      {
        heading: "When Vein Treatment Is Medically Necessary",
        paragraphs: [
          "Most insurers look for documented symptoms, including aching, heaviness, swelling, skin changes, or ulcer risk, along with ultrasound evidence of venous reflux.",
          "Carriers also commonly require a trial of conservative care, such as compression stockings, before approving procedures like EVLT or ablation.",
          "If symptoms persist after conservative therapy, physician documentation and duplex ultrasound findings typically form the basis of a medical necessity claim.",
        ],
      },
      {
        heading: "What Insurance Commonly Covers",
        paragraphs: [
          "When criteria are met, plans often cover diagnostic venous ultrasound and medically necessary procedures such as EVLT or radiofrequency ablation for refluxing veins.",
          "In selected cases, follow-up treatment for residual medically significant varicose veins can also be covered when clearly documented.",
          "Coverage details vary by policy and carrier, so benefits must be verified case-by-case before treatment is scheduled.",
        ],
      },
      {
        heading: "What Is Usually Not Covered",
        paragraphs: [
          "Cosmetic spider vein sclerotherapy is usually self-pay when no qualifying symptoms or venous disease are documented.",
          "Treatment may also be denied when required conservative therapy has not been completed or when medical necessity records are incomplete.",
          "Retreatment in the same area generally requires fresh clinical evidence showing persistent or recurrent disease.",
        ],
      },
      {
        heading: "How to Verify Your Coverage",
        paragraphs: [
          "Start with a physician evaluation instead of calling your insurer first. A diagnosis and procedure code are needed for meaningful benefit verification.",
          "At Schulman Vein and Laser Center, a free screening helps determine whether your condition is cosmetic or medically significant before decisions are made.",
          "Our team then verifies your deductible, coinsurance, prior authorization needs, and expected out-of-pocket cost before scheduling treatment.",
        ],
      },
      {
        heading: "How Schulman Vein and Laser Center Helps",
        paragraphs: [
          "Our office works with major New York carriers and handles prior authorization submissions with physician-led documentation and ultrasound findings.",
          "If a denial occurs, we assist with appeal steps using the clinical record required by your plan.",
          "If treatment is cosmetic, we provide transparent self-pay options so you can choose a plan that fits your goals and budget.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [
          "Does Medicare cover vein treatment? Medicare often covers medically necessary varicose vein treatment with documented symptoms and reflux, but not cosmetic procedures.",
          "How long does authorization take? Many plans respond within five to ten business days, though timing varies by carrier.",
          "Do I need a referral? A referral is not required for an initial consultation at Schulman Vein and Laser Center.",
        ],
      },
      {
        heading: "Take the First Step",
        paragraphs: [
          "A physician-led free vein screening is the fastest way to understand whether your condition may qualify for insurance coverage in New York.",
          "If you are ready to get clarity, schedule a screening and discuss your treatment and coverage options with our team.",
        ],
      },
    ],
  },
  {
    slug: "spider-veins-vs-varicose-veins-key-differences",
    title: "Spider Veins vs Varicose Veins: Key Differences",
    excerpt:
      "Spider veins and varicose veins can look similar at first glance, but their causes, symptoms, and treatment strategies are often different.",
    category: "Vein Health",
    publishedAt: "2026-04-03",
    readTimeMinutes: 6,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Learn the difference between spider veins and varicose veins and when each may require medical evaluation.",
    featuredImage: "/images/blog/spider-veins-vs-varicose-veins-differences.svg",
    featuredImageAlt: "Spider veins vs varicose veins side-by-side comparison of size depth and treatment options",
    body: [
      {
        heading: "Appearance and depth",
        paragraphs: [
          "Spider veins are usually small, superficial vessels that appear red, blue, or purple in web-like patterns near the skin surface.",
          "Varicose veins are typically larger, bulging, and raised. They reflect deeper valve dysfunction and are more likely to cause physical symptoms.",
        ],
      },
      {
        heading: "Symptoms and clinical significance",
        paragraphs: [
          "Spider veins are often cosmetic but can occasionally cause mild burning or aching. Varicose veins more commonly cause heaviness, throbbing, swelling, and fatigue.",
          "Because varicose veins may signal chronic venous insufficiency, ultrasound evaluation is often recommended when symptoms are persistent.",
        ],
      },
      {
        heading: "Treatment differences",
        paragraphs: [
          "Spider veins are frequently treated with sclerotherapy or surface laser approaches, depending on pattern and vessel size.",
          "Varicose veins often require a deeper strategy such as EVLT, closure procedures, or combination therapy to address reflux first and visible branches second.",
        ],
      },
      {
        heading: "When to seek a specialist",
        paragraphs: [
          "If you have pain, swelling, skin changes, or veins that keep worsening, specialist evaluation is appropriate even if cosmetic concerns brought you in first.",
          "A physician-led vein exam helps separate cosmetic-only issues from medically significant disease and guides an effective, staged plan.",
        ],
      },
    ],
  },
  {
    slug: "hand-vein-treatment-options-what-patients-should-know",
    title: "Hand Vein Treatment Options: What Patients Should Know",
    excerpt:
      "Prominent hand veins can be safely treated in selected patients. Learn candidacy basics, procedure options, and recovery expectations.",
    category: "Treatments",
    publishedAt: "2026-04-02",
    readTimeMinutes: 7,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Review hand vein treatment options, patient selection, and recovery guidance from a vein-focused physician team.",
    featuredImage: "/images/blog/hand-vein-treatment-options-new-york.svg",
    featuredImageAlt: "Hand vein treatment process from consultation to recovery at Schulman Vein Center New York",
    body: [
      {
        heading: "Why hand veins become prominent",
        paragraphs: [
          "Visible hand veins often become more noticeable with age, lower subcutaneous fat, genetics, exercise, and natural skin thinning. In many cases this is a cosmetic concern rather than a sign of dangerous disease.",
          "A focused consultation helps determine whether treatment goals are aesthetic, functional, or both.",
        ],
      },
      {
        heading: "How candidacy is evaluated",
        paragraphs: [
          "Not every visible hand vein should be treated. Physicians assess circulation patterns, dominant veins needed for normal drainage, skin quality, and medical history before recommending any procedure.",
          "The goal is improvement without compromising healthy blood flow or hand function.",
        ],
      },
      {
        heading: "Common treatment approaches",
        paragraphs: [
          "Depending on anatomy, options may include targeted sclerotherapy or microphlebectomy-style techniques for selected superficial veins. Treatment strategy is individualized to preserve function and optimize appearance.",
          "A conservative, staged approach is often preferred for safety and more predictable cosmetic outcomes.",
        ],
      },
      {
        heading: "Recovery and follow-up",
        paragraphs: [
          "Most patients resume routine hand use quickly, with temporary bruising or tenderness expected for a short period. Aftercare instructions may include activity guidance and follow-up visits.",
          "Your physician will review expected progression so you know what is normal and when to check in if healing differs from plan.",
        ],
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
