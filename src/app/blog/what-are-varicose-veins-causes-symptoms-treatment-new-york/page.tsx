import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const slug = "what-are-varicose-veins-causes-symptoms-treatment-new-york";
const pageUrl = `${BUSINESS.siteUrl}/blog/${slug}`;
const featuredImage = `${BUSINESS.siteUrl}/images/blog/varicose-veins-new-york.jpg`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "What Are Varicose Veins? Causes, Symptoms & Treatment in New York",
  description:
    "Learn what causes varicose veins, the warning signs, and your treatment options in New York from the specialists at Schulman Vein and Laser Center.",
  about: {
    "@type": "MedicalCondition",
    name: "Varicose Veins",
  },
  author: {
    "@type": "Organization",
    name: "Schulman Vein and Laser Center",
  },
  datePublished: "2026-04-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  image: featuredImage,
};

export const metadata: Metadata = {
  title: "Varicose Veins in New York: Causes, Symptoms & Treatment",
  description:
    "Learn what causes varicose veins, the warning signs, and your treatment options in New York from the specialists at Schulman Vein and Laser Center.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "What Are Varicose Veins? Causes, Symptoms & Treatment in New York",
    description:
      "Learn what causes varicose veins, the warning signs, and your treatment options in New York from the specialists at Schulman Vein and Laser Center.",
    url: pageUrl,
    images: [
      {
        url: featuredImage,
        width: 1200,
        height: 630,
        alt: "Diagram showing varicose vein formation and valve failure in New York vein treatment context",
      },
    ],
    type: "article",
    siteName: BUSINESS.name,
  },
};

const summaryBox = {
  title: "Varicose Veins in New York: Quick Summary",
  bullets: [
    "Varicose veins are caused by valve failure and blood pooling in leg veins.",
    "Symptoms often include heaviness, swelling, aching, and visible bulging veins.",
    "Most treatments are minimally invasive and completed in-office.",
    "Schulman Vein and Laser Center offers free vein screenings in Manhattan, Manhasset, and Commack.",
  ],
};

const statBlock = {
  label: "Adults affected in the U.S.",
  value: "~23%",
  note: "Varicose veins are common and often worsen without specialist evaluation.",
};

const everestTake =
  "Varicose veins are progressive, not just cosmetic. Earlier evaluation can mean simpler treatment and faster symptom relief.";

const promoCard = {
  title: "Start With a Free Vein Screening",
  body: "Meet directly with a Schulman physician for a vein exam and personalized treatment guidance.",
  cta: {
    href: "/services/free-vein-screening",
    label: "Book Your Free Vein Screening",
  },
};

const faqItems = [
  {
    question: "Are varicose veins dangerous?",
    answer:
      "Most are not immediately dangerous, but they can signal underlying venous insufficiency. Untreated cases may progress to skin changes, ulcers, or clot-related complications.",
  },
  {
    question: "Can varicose veins go away without treatment?",
    answer:
      "No. Compression, movement, and leg elevation can help symptoms, but they do not repair damaged valves. Treatment is needed to close or remove diseased veins.",
  },
  {
    question: "Is treatment painful?",
    answer:
      "Modern vein procedures are typically done with local anesthesia and are usually well tolerated, with many patients returning to normal activity within one to two days.",
  },
  {
    question: "Does insurance cover varicose vein treatment in New York?",
    answer:
      "Coverage depends on your plan and medical necessity. EVLT and other medically indicated procedures are often covered after conservative treatment requirements are met.",
  },
];

export default function VaricoseVeinsNewYorkArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="section-light">
        <div className="container-narrow">
          <header className="mb-8 md:mb-10">
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-[var(--sv-teal)] mb-3">
              Patient Education
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--sv-navy)] leading-tight mb-4">
              What Are Varicose Veins? Causes, Symptoms &amp; Treatment in New York
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A practical guide for Manhattan and Long Island patients on causes, warning signs, and modern
              treatment options.
            </p>
            <div className="text-sm text-gray-500">Published April 8, 2026</div>
          </header>

          <figure className="mb-8">
            <Image
              src="/images/blog/varicose-veins-new-york.jpg"
              alt="Diagram showing varicose vein formation and valve failure in New York vein treatment context"
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl border border-gray-200"
              priority
            />
          </figure>

          <section className="bg-[var(--sv-cream)] rounded-2xl p-6 mb-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">{summaryBox.title}</h2>
            <ul className="space-y-2 text-gray-700">
              {summaryBox.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--sv-teal)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-card">
            <p className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-2">{statBlock.label}</p>
            <p className="font-heading text-3xl font-bold text-[var(--sv-navy)] mb-2">{statBlock.value}</p>
            <p className="text-gray-600">{statBlock.note}</p>
          </section>

          <section className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-[var(--sv-navy)] prose-a:text-[var(--sv-teal)] prose-a:no-underline hover:prose-a:underline prose-p:text-gray-700 prose-li:text-gray-700">
            <p>
              If you&apos;ve noticed twisted, bulging veins along your legs, you are not alone. Varicose
              veins affect millions of Americans. For New Yorkers balancing long standing hours, commuting,
              and demanding schedules, risk can be higher than average.
            </p>
            <p>
              This guide explains what varicose veins are, what causes them, who is most at risk, and what
              treatment options are available at Schulman Vein and Laser Center in Manhattan and Long
              Island.
            </p>

            <h2>What Are Varicose Veins?</h2>
            <p>
              Varicose veins are enlarged, twisted veins visible beneath the skin, usually on the legs and
              feet. They develop when one-way <strong>vein valves</strong> weaken and allow blood to flow
              backward and pool. That pressure stretches the vein wall and causes bulging, rope-like veins.
            </p>
            <p>
              Varicose veins are different from <Link href="/services/spider-vein-treatment">spider veins</Link>.
              Spider veins are smaller and more superficial. Varicose veins are usually associated with greater
              symptom burden and a higher risk of progression due to underlying{" "}
              <strong>venous insufficiency</strong>.
            </p>

            <figure className="my-8">
              <Image
                src="/images/gallery/varicose-large.png"
                alt="Saphenous vein anatomy relevant to varicose vein treatment Manhattan"
                width={1200}
                height={630}
                className="w-full h-auto rounded-2xl border border-gray-200"
              />
            </figure>

            <h2>What Causes Varicose Veins?</h2>
            <p>
              The main cause is <strong>venous insufficiency</strong>. When vein valves leak, blood refluxes
              and accumulates in the lower legs, stretching vein walls over time. Common risk factors include:
            </p>
            <ul>
              <li>Family history of varicose veins or venous disease</li>
              <li>Advancing age — valve function naturally weakens over time</li>
              <li>Pregnancy — increased blood volume and hormonal changes</li>
              <li>Prolonged standing or sitting — common in many New York professions</li>
              <li>Excess body weight — adds pressure to the venous system</li>
              <li>Prior leg injury or blood clot history</li>
            </ul>

            <h2>Who Gets Varicose Veins? A New York Perspective</h2>
            <p>
              Around 23% of U.S. adults experience varicose veins. In New York, long transit commutes,
              standing-heavy professions, and sedentary desk stretches can all increase venous stress.
              Patients visit Schulman Vein and Laser Center from Manhattan, Manhasset, Commack, and nearby
              communities across Nassau and Suffolk counties.
            </p>

            <blockquote className="border-l-4 border-[var(--sv-teal)] pl-4 italic text-[var(--sv-navy)]">
              {everestTake}
            </blockquote>

            <h2>Symptoms of Varicose Veins</h2>
            <ul>
              <li>Aching, heaviness, or fatigue in the legs</li>
              <li>Swelling in the ankles or lower legs</li>
              <li>Burning or throbbing near visible veins</li>
              <li>Itching around affected veins</li>
              <li>Restless legs, especially at night</li>
              <li>Skin discoloration or dryness near the ankles</li>
            </ul>
            <p>
              Symptoms often worsen by the end of the day and improve with leg elevation. In advanced cases,
              untreated vein disease can lead to skin ulcers, bleeding, or superficial thrombophlebitis.
            </p>

            <figure className="my-8">
              <Image
                src="/images/gallery/spider-veins-7.png"
                alt="Comparison of varicose veins and spider veins for New York patients"
                width={1200}
                height={630}
                className="w-full h-auto rounded-2xl border border-gray-200"
              />
            </figure>

            <h2>Treatment Options at Schulman Vein and Laser Center</h2>
            <p>
              Most varicose veins can be treated with <strong>minimally invasive in-office procedures</strong>.
              Patients are evaluated and treated personally by Dr. Martin L. Schulman (board-certified vascular
              surgeon) or Dr. Lee G. Schulman (Diplomate in Phlebology).
            </p>
            <ul>
              <li>
                <strong><Link href="/services/laser-vein-therapy">EVLT (Endovenous Laser Therapy)</Link>:</strong>{" "}
                closes refluxing veins from the inside using laser energy under ultrasound guidance.
              </li>
              <li>
                <strong>Sclerotherapy:</strong> injection treatment for smaller varicosities and{" "}
                <Link href="/services/spider-vein-treatment">spider veins</Link>.
              </li>
              <li>
                <strong>Ambulatory Phlebectomy:</strong> micro-procedure to remove larger surface varicose
                veins through tiny skin punctures.
              </li>
            </ul>
            <p>
              Treatment is based on <strong>duplex ultrasound findings</strong> and your symptoms. For details,
              see our <Link href="/services/varicose-vein-treatment">varicose vein treatment page</Link>.
            </p>

            <h2>When to See a Doctor</h2>
            <p>Schedule an evaluation if you have visible veins, persistent leg discomfort, or worsening symptoms.</p>
            <ul>
              <li>Visible varicose veins, even without pain</li>
              <li>Leg swelling, heaviness, or aching that impacts daily activity</li>
              <li>Family history of vein disease or <strong>DVT</strong></li>
              <li>Skin changes, discoloration, or ankle ulcers</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
              <p className="font-semibold text-amber-900 mb-1">When to seek urgent care</p>
              <p className="text-amber-800 text-sm">
                Sudden leg pain, warmth, redness along a vein, or one-sided leg swelling may indicate a{" "}
                <strong>blood clot</strong>. Do not wait — seek same-day medical evaluation.
              </p>
            </div>
            <p>
              You can start by reviewing our <Link href="/locations">location pages</Link> or booking a{" "}
              <Link href="/services/free-vein-screening">free vein screening</Link>.
            </p>
          </section>

          <section className="bg-[var(--sv-cream)] border border-[var(--sv-sand)] rounded-2xl p-6 md:p-8 my-10">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">{promoCard.title}</h2>
            <p className="text-gray-700 mb-5">{promoCard.body}</p>
            <Link href={promoCard.cta.href} className="btn-primary inline-flex">
              {promoCard.cta.label}
            </Link>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-card mb-4">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
