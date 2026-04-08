export const BLOG_CATEGORIES = ["Vein Health", "Treatments", "Patient Guide", "Insurance"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
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
  featuredImage?: string;
  featuredImageAlt?: string;
};

export const BLOG_POSTS: BlogPost[] = [
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
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Physician reviewing varicose vein symptoms with a patient in a modern exam room",
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
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Clinical comparison discussion of EVLT and sclerotherapy treatment plans",
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
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Patient walking comfortably after minimally invasive vein treatment",
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
    slug: "insurance-and-payment-planning-for-vein-care",
    title: "Insurance and Payment Planning for Vein Care",
    excerpt:
      "Coverage for vein treatment depends on medical necessity. Learn what insurers often require and how to plan your next steps.",
    category: "Insurance",
    publishedAt: "2026-04-04",
    readTimeMinutes: 8,
    author: "Dr. Lee G. Schulman",
    ogDescription:
      "Insurance planning guide for vein care, including medical necessity, documentation, and out-of-pocket expectations.",
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Insurance and billing paperwork prepared for a vein treatment consultation",
    body: [
      {
        heading: "When insurance may cover treatment",
        paragraphs: [
          "Many plans consider treatment when symptoms and diagnostic findings support medical necessity. Typical criteria include pain, swelling, skin changes, or documented venous reflux on ultrasound.",
          "Cosmetic concerns alone are usually not covered, even when veins are visible. Coverage decisions vary by insurer and plan rules.",
        ],
      },
      {
        heading: "Documentation insurers often request",
        paragraphs: [
          "Insurers may require conservative management documentation, such as a trial of compression stockings, along with physician notes describing persistent symptoms.",
          "Ultrasound findings and treatment rationale are commonly reviewed before authorizations are approved.",
        ],
      },
      {
        heading: "Planning for costs and timing",
        paragraphs: [
          "Before treatment, ask for a benefits review that outlines expected coverage, deductibles, copays, and any out-of-pocket responsibility. Clear estimates reduce surprises.",
          "If staged care is recommended, request a timeline so authorizations and appointments can be aligned with your work and family schedule.",
        ],
      },
      {
        heading: "How your clinic team can help",
        paragraphs: [
          "Experienced vein teams can coordinate with your insurer, submit necessary records, and explain each step in plain language before treatment dates are finalized.",
          "If coverage is denied, your physician may discuss next options, including appeal pathways or alternative treatment sequencing.",
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
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Visual comparison of spider veins and varicose veins on lower legs",
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
    featuredImage: "/images/gallery/varicose-large.png",
    featuredImageAlt: "Specialist consultation about cosmetic hand vein treatment options",
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
