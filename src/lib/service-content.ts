export type ServiceContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type ServiceExpandedContent = {
  sections: ServiceContentSection[];
  faqs: ServiceFaq[];
  localFaqHeading: string;
  localFaqs: ServiceFaq[];
  relatedLinks: ServiceRelatedLink[];
};

export const SERVICE_EXPANDED_CONTENT: Record<string, ServiceExpandedContent> = {
  "varicose-vein-treatment": {
    sections: [
      {
        heading: "What Are Varicose Veins?",
        paragraphs: [
          "Varicose veins are enlarged, twisted veins that appear most often on the legs and feet. They develop when the one-way valves inside your veins weaken or fail, allowing blood to pool rather than flow efficiently back toward the heart.",
          "The result is bulging, rope-like veins visible beneath the skin, often accompanied by aching, heaviness, swelling, and cramping, especially after long periods of standing or sitting.",
        ],
      },
      {
        heading: "Who Gets Varicose Veins?",
        paragraphs: [
          "Varicose veins affect an estimated 23% of American adults. In New York City and Long Island, where many residents spend hours commuting, standing at work, or sitting at a desk, prevalence is particularly high.",
          "Risk factors include:",
        ],
        bullets: [
          "Genetics: A family history of varicose veins is the strongest predictor",
          "Prolonged standing or sitting: Common among nurses, teachers, retail workers, and office professionals",
          "Pregnancy: Increased blood volume and hormonal changes place added pressure on leg veins",
          "Age: Vein valves naturally weaken over time",
          "Obesity: Excess weight increases pressure in leg veins",
          "Female sex: Women are more likely to develop varicose veins, though men are certainly not immune",
        ],
      },
      {
        heading: "How Schulman Treats Varicose Veins",
        paragraphs: [
          "At Schulman Vein and Laser Center, varicose vein treatment is not one-size-fits-all. Dr. Martin L. Schulman and Dr. Lee G. Schulman personally evaluate every patient and recommend the most appropriate minimally invasive approach for your specific veins and symptoms.",
          "Our treatment process:",
        ],
        steps: [
          "Complimentary vein screening at any of our three offices (Manhattan, Manhasset, or Commack)",
          "Ultrasound mapping to identify incompetent valves and guide treatment decisions",
          "Personalized treatment recommendation, most often EVLT, sclerotherapy, or a combination",
          "In-office procedure with local anesthesia and physician-led care",
          "Walk-out, same-day recovery with light activity typically resumed immediately",
        ],
      },
      {
        heading: "What to Expect at Your Appointment",
        paragraphs: [
          "Your appointment begins with a conversation about symptoms, lifestyle, and treatment goals before any procedure is recommended.",
          "If treatment is recommended, our team confirms insurance, coordinates scheduling at your preferred location, provides clear pre/post instructions, and follows up on recovery.",
          "Most patients report mild pressure or warmth during EVLT rather than significant pain. Post-procedure bruising and soreness are common and usually resolve in one to two weeks.",
        ],
      },
      {
        heading: "Insurance & Coverage",
        paragraphs: [
          "Many varicose vein treatments, especially EVLT, are covered when medically necessary. Insurers typically require documented symptoms and a conservative trial such as compression stockings.",
          "Cosmetic-only treatment is generally self-pay. Our team verifies benefits before your visit and helps you understand coverage clearly.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my varicose veins need to be treated?",
        a: "Varicose veins that cause aching, swelling, heaviness, skin discoloration, or sores should be evaluated by a physician. Even asymptomatic veins can worsen over time, so a screening is the best first step.",
      },
      {
        q: "Is varicose vein treatment permanent?",
        a: "EVLT and sclerotherapy permanently close treated veins. Those specific veins do not return, but new varicose veins can develop in other areas over time.",
      },
      {
        q: "Can I go back to work the same day?",
        a: "Most patients return to light office work and daily activities the same day. Jobs requiring prolonged standing may need short-term activity modification.",
      },
      {
        q: "Is EVLT better than surgery?",
        a: "For most patients, yes. EVLT has largely replaced vein stripping because it is minimally invasive, avoids general anesthesia, and has faster recovery with excellent outcomes.",
      },
    ],
    localFaqHeading: "Location-Specific: Patients from Manhattan Ask",
    localFaqs: [
      {
        q: "Is it easy to get to your Upper East Side office after a varicose vein procedure?",
        a: "Yes. The 4/5/6 and Q trains are a short walk from our Park Avenue office. Many patients are comfortable using transit home, though a cab or rideshare can be ideal the first day.",
      },
      {
        q: "Can I schedule treatment and return to my Midtown office the same afternoon?",
        a: "Many Manhattan patients do. Most visits are under 90 minutes from check-in to discharge.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/spider-vein-treatment",
        label: "Spider Vein Treatment",
        description: "For smaller cosmetic or symptomatic veins.",
      },
      {
        href: "/services/laser-vein-therapy",
        label: "Laser Vein Therapy (EVLT)",
        description: "Learn more about the procedure in detail.",
      },
      {
        href: "/services/free-vein-screening",
        label: "Free Vein Screening",
        description: "Your no-cost first step.",
      },
    ],
  },
  "spider-vein-treatment": {
    sections: [
      {
        heading: "What Are Spider Veins?",
        paragraphs: [
          "Spider veins (telangiectasias) are small dilated vessels near the skin surface, usually red, blue, or purple. They commonly appear on legs, thighs, ankles, and face.",
          "Unlike varicose veins, they usually do not bulge, but can still cause burning, itching, or mild discomfort in some patients.",
        ],
      },
      {
        heading: "Who Gets Spider Veins?",
        paragraphs: [
          "Spider veins are extremely common and are frequently requested for treatment in Manhattan and Long Island. Common causes include:",
        ],
        bullets: [
          "Genetics and family history",
          "Hormonal changes from pregnancy, birth control, and menopause",
          "Sun exposure, especially for facial spider veins",
          "Prolonged standing at work",
          "Age-related skin and vein changes",
          "Prior leg injury or surgery",
        ],
      },
      {
        heading: "How Schulman Treats Spider Veins",
        paragraphs: [
          "Sclerotherapy is the gold standard and the treatment of choice at Schulman Vein and Laser Center. Dr. Martin L. Schulman and Dr. Lee G. Schulman personally perform treatment.",
        ],
        steps: [
          "Free screening and treatment planning",
          "In-office preparation with no anesthesia required",
          "Targeted injections with fine needles",
          "Post-treatment compression",
          "Immediate return to normal routine with minor short-term activity limits",
        ],
      },
      {
        heading: "What to Expect at Your Appointment",
        paragraphs: [
          "Most sessions take 15 to 45 minutes. Patients usually describe treatment as mild pinpricks, not significant pain.",
          "After treatment, avoid direct sun on treated areas, wear compression as advised, and avoid hot baths/saunas for 48 hours.",
          "Treated veins may look darker before fading. Final results often appear within three to six weeks.",
        ],
      },
      {
        heading: "Insurance & Coverage",
        paragraphs: [
          "Spider vein treatment is usually cosmetic and self-pay. If symptoms suggest underlying venous insufficiency, portions of care may be medically covered.",
          "We provide clear pricing before treatment begins.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many sclerotherapy sessions will I need?",
        a: "Some patients need one to two sessions, while extensive cases may need three or four sessions over time.",
      },
      {
        q: "Will spider veins come back after sclerotherapy?",
        a: "Treated veins are permanently closed. New veins can still develop later, so maintenance sessions may be needed.",
      },
      {
        q: "Is sclerotherapy safe for facial spider veins?",
        a: "Facial veins may be treated with laser or sclerotherapy depending on size and location. We determine this at consultation.",
      },
      {
        q: "Can I get sclerotherapy while pregnant or breastfeeding?",
        a: "No. Treatment is usually deferred until after pregnancy and breastfeeding.",
      },
    ],
    localFaqHeading: "Location-Specific: Patients from Long Island Ask",
    localFaqs: [
      {
        q: "Is sclerotherapy available at both your Manhasset and Commack offices?",
        a: "Yes. Sclerotherapy is available at all three locations, including Manhasset and Commack.",
      },
      {
        q: "How soon before summer should I schedule treatment?",
        a: "Eight to twelve weeks before key events is ideal if appearance timing matters, though treatment is available year-round.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/varicose-vein-treatment",
        label: "Varicose Vein Treatment",
        description: "For larger, symptomatic veins.",
      },
      {
        href: "/services/free-vein-screening",
        label: "Free Vein Screening",
        description: "Start with a no-cost evaluation.",
      },
      {
        href: "/services/body-vein-treatment",
        label: "Hand, Face & Body Veins",
        description: "Spider vein treatment beyond the legs.",
      },
    ],
  },
  "laser-vein-therapy": {
    sections: [
      {
        heading: "What Is EVLT?",
        paragraphs: [
          "Endovenous Laser Treatment (EVLT) is a minimally invasive in-office procedure for varicose veins and venous insufficiency. It has replaced traditional vein stripping for most patients.",
          "Targeted laser energy closes the affected vein without surgical incisions, helping relieve symptoms and prevent progression.",
        ],
      },
      {
        heading: "Who Is EVLT Right For?",
        paragraphs: [
          "EVLT is typically recommended for patients with symptomatic varicose veins and ultrasound-confirmed reflux.",
        ],
        bullets: [
          "Aching, swelling, heaviness, or cramping",
          "Great or small saphenous vein reflux",
          "Failure of conservative therapy like compression",
          "Need for durable treatment without open surgery",
        ],
      },
      {
        heading: "How EVLT Works at Schulman",
        steps: [
          "Duplex ultrasound mapping and guidance",
          "Local tumescent anesthesia for comfort",
          "Laser fiber placement through a tiny puncture",
          "Controlled laser pullback to close the vein",
          "Compression and same-day walk-out recovery",
        ],
        paragraphs: [
          "Every EVLT procedure is physician-performed by Dr. Martin L. Schulman or Dr. Lee G. Schulman.",
        ],
      },
      {
        heading: "What to Expect at Your EVLT Appointment",
        paragraphs: [
          "Patients are usually surprised by how straightforward EVLT is. Most are in and out in about 60 to 90 minutes.",
          "Mild soreness, bruising, or tightness can occur for one to two weeks. Daily walking is encouraged while strenuous activity is temporarily limited.",
        ],
      },
      {
        heading: "Insurance & Coverage",
        paragraphs: [
          "EVLT is often covered when medically necessary, with criteria such as documented symptoms, conservative treatment trial, and duplex ultrasound evidence of reflux.",
          "Our team handles pre-authorization and verifies your plan before scheduling.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to see results after EVLT?",
        a: "Symptoms often improve within one to two weeks, while visual improvement typically continues over two to three months.",
      },
      {
        q: "Is EVLT permanent?",
        a: "Yes, treated veins are permanently closed. New veins can still appear in other areas over time.",
      },
      {
        q: "How is EVLT different from vein stripping?",
        a: "EVLT is office-based under local anesthesia with much faster recovery and less discomfort than traditional surgery.",
      },
      {
        q: "Can both legs be treated in one visit?",
        a: "Usually one leg is treated per session, with timing for the second leg based on your clinical plan.",
      },
    ],
    localFaqHeading: "Location-Specific: Long Island Patients Ask",
    localFaqs: [
      {
        q: "Is EVLT available at your Commack and Manhasset offices?",
        a: "Yes. EVLT is available at all three locations, including Commack and Manhasset.",
      },
      {
        q: "Can I drive myself home after EVLT?",
        a: "Most patients can drive themselves because EVLT uses local anesthesia, but arranging a ride is still recommended when possible.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/varicose-vein-treatment",
        label: "Varicose Vein Treatment",
        description: "Condition overview and treatment options.",
      },
      {
        href: "/services/free-vein-screening",
        label: "Free Vein Screening",
        description: "Start with a no-cost evaluation.",
      },
      {
        href: "/services/vein-disorders",
        label: "Vein Disorders & Conditions",
        description: "Understand venous insufficiency and reflux.",
      },
    ],
  },
  "free-vein-screening": {
    sections: [
      {
        heading: "What Is a Free Vein Screening?",
        paragraphs: [
          "A free vein screening at Schulman Vein and Laser Center is a no-cost, no-obligation physician evaluation. It is performed by a board-certified doctor, not a sales team.",
          "In roughly 15 to 20 minutes, we assess whether you may have varicose veins, spider veins, venous insufficiency, or another condition that should be treated.",
        ],
      },
      {
        heading: "Who Should Get a Screening?",
        bullets: [
          "Visible veins on legs, ankles, or feet",
          "Leg aching, heaviness, swelling, or cramping",
          "Family history of vein disease",
          "Pregnancy or postpartum vein concerns",
          "Jobs requiring prolonged standing or sitting",
          "Prior recommendation for venous evaluation",
        ],
        paragraphs: [
          "Many patients live with symptoms for years without realizing minimally invasive treatment is available.",
        ],
      },
      {
        heading: "What Happens During a Screening?",
        steps: [
          "Medical history review",
          "Visual standing exam of veins",
          "Preliminary physician assessment",
          "Discussion of treatment options and insurance considerations",
          "Optional scheduling of ultrasound and follow-up",
        ],
        paragraphs: [
          "There is no obligation to proceed with treatment.",
        ],
      },
      {
        heading: "What to Expect After Your Screening",
        bullets: [
          "No treatment needed and prevention guidance",
          "Ultrasound recommendation for suspected reflux",
          "Direct treatment planning for appropriate cases",
        ],
      },
      {
        heading: "Insurance & Costs",
        paragraphs: [
          "The screening itself is free. If treatment is recommended, our team verifies coverage and explains expected costs before you decide.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a referral from my primary care doctor?",
        a: "No referral is required to schedule a free screening.",
      },
      {
        q: "What should I wear to my screening?",
        a: "Wear loose clothing that allows access above the knee and avoid lotion on treatment areas that day.",
      },
      {
        q: "Is the screening really free?",
        a: "Yes. The screening is free with no obligation.",
      },
      {
        q: "How long will the screening take?",
        a: "Most screenings take 15 to 20 minutes, and up to 30 minutes for more complex cases.",
      },
    ],
    localFaqHeading: "Location-Specific: Patients from Manhattan & Long Island Ask",
    localFaqs: [
      {
        q: "Can I schedule a screening at any location?",
        a: "Yes. Free screenings are available in Manhattan, Manhasset, and Commack.",
      },
      {
        q: "Do I need to fast or prepare before screening?",
        a: "No special prep is required. Eat and drink normally and arrive a few minutes early.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/varicose-vein-treatment",
        label: "Varicose Vein Treatment",
        description: "Review treatment options.",
      },
      {
        href: "/services/spider-vein-treatment",
        label: "Spider Vein Treatment",
        description: "Cosmetic and symptomatic options.",
      },
      {
        href: "/services/laser-vein-therapy",
        label: "Laser Vein Therapy (EVLT)",
        description: "Commonly covered when medically necessary.",
      },
    ],
  },
  "body-vein-treatment": {
    sections: [
      {
        heading: "Veins Beyond the Legs",
        paragraphs: [
          "Many patients associate vein treatment only with legs, but visible and bothersome veins can appear on the face, hands, chest, and other body areas.",
          "At Schulman Vein and Laser Center, we treat these areas with the same precision and individualized care used for leg veins.",
        ],
      },
      {
        heading: "Facial Veins",
        paragraphs: [
          "Facial spider veins and broken capillaries are common on the nose, cheeks, and chin. Sun exposure, rosacea, and aging are frequent contributors.",
          "Depending on vein size and location, treatment may use laser therapy or sclerotherapy, often in one to three sessions.",
        ],
      },
      {
        heading: "Hand Veins",
        paragraphs: [
          "Prominent hand veins are often age-related and aesthetic rather than medical. For selected patients, sclerotherapy can reduce visible prominence.",
        ],
      },
      {
        heading: "Chest and Body Veins",
        paragraphs: [
          "Reticular and spider veins on thighs, behind knees, chest, and other regions are evaluated and treated with sclerotherapy and/or laser based on vessel characteristics.",
        ],
      },
      {
        heading: "How We Evaluate and Treat Body Veins",
        steps: [
          "Consultation and exam",
          "Procedure selection tailored by vein type and location",
          "Brief in-office treatment sessions",
          "Minimal recovery with same-day return to normal activity",
        ],
      },
      {
        heading: "Insurance & Costs",
        paragraphs: [
          "Most hand, face, and body vein treatments are cosmetic and self-pay. Pricing is reviewed before treatment begins.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you treat veins on my face and legs in the same appointment?",
        a: "Often yes, depending on treatment plan and time needed.",
      },
      {
        q: "Are laser treatments safe for all skin tones?",
        a: "Laser settings are tailored by skin tone, vessel depth, and color. We choose the safest effective approach at consultation.",
      },
      {
        q: "How many sessions are typical for facial veins?",
        a: "Many patients improve in one to three sessions, with final outcomes developing over several weeks.",
      },
      {
        q: "Will treated hand veins come back?",
        a: "Treated veins do not return, though additional veins may become visible over time due to ongoing aging.",
      },
    ],
    localFaqHeading: "Location-Specific: Manhattan Patients Ask",
    localFaqs: [
      {
        q: "Is facial vein treatment discreet enough for a lunch break?",
        a: "Yes. Many facial vein sessions are 20 to 30 minutes and patients return to normal routines the same day.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/spider-vein-treatment",
        label: "Spider Vein Treatment",
        description: "Leg spider veins and sclerotherapy.",
      },
      {
        href: "/services/free-vein-screening",
        label: "Free Vein Screening",
        description: "Start with a no-obligation consultation.",
      },
      {
        href: "/services/vein-disorders",
        label: "Vein Disorders & Conditions",
        description: "Learn about the full spectrum of vein disease.",
      },
    ],
  },
  "vein-disorders": {
    sections: [
      {
        heading: "Understanding Vein Disease",
        paragraphs: [
          "Vein disease is common and includes cosmetic and medical conditions. Schulman Vein and Laser Center treats the full range from spider veins to advanced venous insufficiency.",
          "Accurate diagnosis is the first step toward durable treatment outcomes.",
        ],
      },
      {
        heading: "Common Vein Conditions We Treat",
        bullets: [
          "Varicose veins",
          "Spider veins (telangiectasias)",
          "Chronic venous insufficiency (CVI)",
          "Venous reflux",
          "Reticular veins",
          "Deep vein thrombosis (urgent referral when suspected)",
        ],
      },
      {
        heading: "How We Diagnose Vein Conditions",
        steps: [
          "Clinical history and visual exam while standing",
          "Duplex ultrasound for reflux and mapping",
          "Personalized treatment planning including EVLT, sclerotherapy, compression, or combination care",
        ],
      },
      {
        heading: "When to See a Vein Specialist",
        bullets: [
          "Visible varicose or spider veins",
          "Leg aching, heaviness, swelling, or fatigue",
          "Restless legs and venous symptoms",
          "Skin discoloration or thickening near ankles",
          "Slow-healing ankle sores",
          "Sudden swelling, pain, or warmth (seek urgent care)",
        ],
      },
    ],
    faqs: [
      {
        q: "Can vein disease become dangerous if left untreated?",
        a: "Yes. Mild spider veins are often cosmetic, but untreated varicose veins and CVI can progress and cause complications.",
      },
      {
        q: "Is vein disease cosmetic or medical?",
        a: "It can be both. Spider veins are often cosmetic, while varicose veins and venous insufficiency are medical conditions.",
      },
      {
        q: "Can I prevent vein disease?",
        a: "Lifestyle helps, but genetics are a major factor. Exercise, weight management, elevation, and compression can reduce progression risk.",
      },
      {
        q: "What is the difference between a vein center and a general vascular surgeon?",
        a: "A specialized vein center focuses exclusively on venous disease and minimally invasive treatment pathways.",
      },
    ],
    localFaqHeading: "Location-Specific: New York Patients Ask",
    localFaqs: [
      {
        q: "Do I need a specialist or can my primary care doctor treat varicose veins?",
        a: "Primary care can evaluate and refer, but treatment is best managed by a vein specialist with phlebology or vascular training.",
      },
      {
        q: "Are vein problems more common with New York lifestyle patterns?",
        a: "Long commutes, extended standing, and prolonged desk time can increase venous stress and worsen symptoms over time.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/varicose-vein-treatment",
        label: "Varicose Vein Treatment",
        description: "Treatment options for symptomatic veins.",
      },
      {
        href: "/services/spider-vein-treatment",
        label: "Spider Vein Treatment",
        description: "Care for cosmetic and symptomatic spider veins.",
      },
      {
        href: "/services/laser-vein-therapy",
        label: "Laser Vein Therapy (EVLT)",
        description: "Address venous reflux with minimally invasive treatment.",
      },
      {
        href: "/services/free-vein-screening",
        label: "Free Vein Screening",
        description: "Get a physician-led starting point.",
      },
    ],
  },
};
