import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const slug = "vein-treatment-upper-east-side-manhattan";
const pageUrl = `${BUSINESS.siteUrl}/blog/${slug}`;
const featuredImage = `${BUSINESS.siteUrl}/images/gallery/varicose-veins.png`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vein Treatment on the Upper East Side - What Manhattan Patients Should Know",
  description:
    "Expert vein treatment options for Manhattan patients at Schulman Vein and Laser Center, located at 1165 Park Avenue on the Upper East Side.",
  author: {
    "@type": "Organization",
    name: "Schulman Vein and Laser Center",
  },
  publisher: {
    "@type": "Organization",
    name: "Schulman Vein and Laser Center",
  },
  datePublished: "2026-04-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  image: featuredImage,
};

export const metadata: Metadata = {
  title: "Vein Treatment Upper East Side | Schulman Vein and Laser Center",
  description:
    "Expert vein treatment on the Upper East Side. Schulman Vein and Laser Center - free screening, no referral needed, same-day recovery. Book your consultation.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Vein Treatment on the Upper East Side - What Manhattan Patients Should Know",
    description:
      "Expert vein care at 1165 Park Avenue, Carnegie Hill. Free screening, no referral. Both physicians personally treat every patient.",
    url: pageUrl,
    images: [
      {
        url: featuredImage,
        width: 1200,
        height: 630,
        alt: "Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan",
      },
    ],
    type: "article",
    siteName: BUSINESS.name,
  },
};

const summaryBox = {
  title: "Upper East Side Vein Care at a Glance",
  bullets: [
    "Office location: 1165 Park Avenue, Carnegie Hill.",
    "No referral required for new patients.",
    "Free vein screening available.",
    "Most minimally invasive treatments allow same-day recovery.",
  ],
};

const statBlock = {
  label: "Combined experience",
  value: "55+ years",
  note: "Vein-focused physician care in Manhattan and Long Island.",
};

const everestTake =
  "Many Manhattan patients delay treatment because they assume vein care will disrupt work. Most in-office options are designed to fit real city schedules.";

const promoCard = {
  title: "Schedule a Free Screening",
  body: "Meet directly with a physician, complete a vein evaluation, and leave with a clear treatment plan.",
  cta: {
    href: "/contact",
    label: "Contact Our Office",
  },
};

const faqItems = [
  {
    question: "Do I need a referral to be seen at Schulman Vein and Laser Center?",
    answer:
      "No. You can schedule directly, and your first visit includes a complimentary vein screening.",
  },
  {
    question: "How long does a vein treatment procedure usually take?",
    answer:
      "Most in-office procedures such as EVLT and sclerotherapy take less than one hour. Many patients return to normal activity the same day.",
  },
  {
    question: "Will insurance cover my treatment?",
    answer:
      "Coverage depends on diagnosis and plan. Medically necessary treatment for symptomatic venous disease is often covered; purely cosmetic treatment generally is not.",
  },
  {
    question: "Can treatment help with aching, heaviness, and swelling?",
    answer:
      "Yes. These are common symptoms of venous disease, and addressing the underlying vein dysfunction often improves them significantly.",
  },
];

export default function UpperEastSideVeinTreatmentArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="section-light">
        <div className="container-narrow">
          <header className="mb-8 md:mb-10">
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-[var(--sv-teal)] mb-3">
              Manhattan Vein Health
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--sv-navy)] leading-tight mb-4">
              Vein Treatment on the Upper East Side - What Manhattan Patients Should Know
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Expert vein treatment for patients across Carnegie Hill, Yorkville, Midtown East, and the
              surrounding Manhattan neighborhoods.
            </p>
            <div className="text-sm text-gray-500">Published April 7, 2026</div>
          </header>

          <figure className="mb-8">
            <Image
              src="/images/gallery/varicose-veins.png"
              alt="Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan"
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
              If you live or work in Manhattan and have been putting off vein treatment, you are not
              alone. Between demanding schedules, long commutes, and the pace of city life, many patients
              assume care will require taking a full day off. At Schulman Vein and Laser Center, treatment
              plans are designed around real New York routines.
            </p>

            <p>
              Located at 1165 Park Avenue in Carnegie Hill, our Upper East Side office serves patients from
              Yorkville, Midtown East, East Harlem, and the Upper West Side. We provide minimally invasive{" "}
              <Link href="/services/varicose-vein-treatment">vein treatment</Link> with same-day recovery for
              most procedures.
            </p>

            <h2>A Practice Built for New Yorkers</h2>
            <p>
              Manhattan patients often spend hours standing on subway platforms, commuting, or sitting at
              desks for long stretches. These patterns can worsen venous insufficiency and accelerate
              symptoms like leg heaviness, swelling, and visible varicose veins.
            </p>
            <p>
              Our model is physician-led from start to finish. Every patient is evaluated and treated by a
              doctor. No referral is required, and first-time patients can begin with a{" "}
              <Link href="/services/free-vein-screening">free vein screening</Link> to determine whether their
              concerns are cosmetic, medical, or both.
            </p>

            <blockquote className="border-l-4 border-[var(--sv-teal)] pl-4 italic text-[var(--sv-navy)]">
              {everestTake}
            </blockquote>

            <h2>Common Vein Concerns Manhattan Patients Bring</h2>
            <p>
              Some patients arrive with visible bulging veins, while others are dealing with fatigue,
              restless legs, or ankle swelling without obvious surface veins. Both patterns can indicate
              treatable venous disease.
            </p>
            <ul>
              <li>Long periods of standing during shifts or transit</li>
              <li>Extended seated time during workdays and commutes</li>
              <li>Family history of varicose veins or venous reflux</li>
              <li>Pregnancy-related changes in circulation</li>
              <li>Cosmetic concerns that may overlap with medical symptoms</li>
            </ul>

            <h2>Our Upper East Side Office</h2>
            <p>
              The office is centrally located near major transit options. The 4/5/6 and Q trains at 96th
              Street make access straightforward for patients throughout Manhattan.
            </p>
            <p>
              We routinely see patients from Carnegie Hill, Yorkville, Midtown East, and nearby
              neighborhoods who want high-level specialty care without leaving the city.
            </p>

            <h2>What to Expect at Your First Visit</h2>
            <p>
              Your first appointment includes symptom review, physician exam, and ultrasound mapping when
              needed. This helps identify underlying reflux and ensures treatment targets the cause rather
              than only the visible veins.
            </p>
            <p>
              You will receive a clear explanation of options, timing, and likely recovery expectations
              before deciding on next steps.
            </p>

            <h2>Treatments Available</h2>
            <ul>
              <li>
                <strong>Endovenous Laser Treatment (EVLT):</strong> closes refluxing veins with targeted
                laser energy.
              </li>
              <li>
                <strong>Sclerotherapy:</strong> injection treatment for spider veins and smaller varicose
                veins.
              </li>
              <li>
                <strong>VenaSeal:</strong> medical adhesive closure for select diseased veins.
              </li>
              <li>
                <strong>Varithena:</strong> microfoam treatment useful for complex vein anatomy.
              </li>
            </ul>

            <h2>Insurance and Coverage</h2>
            <p>
              Coverage depends on diagnosis and documentation. Treatments addressing pain, swelling, skin
              change, or confirmed venous insufficiency are often eligible under major plans. Cosmetic-only
              treatment usually is not.
            </p>
            <p>
              If you are unsure where your symptoms fit, start with a{" "}
              <Link href="/services/free-vein-screening">free vein screening</Link> and physician review.
            </p>

            <h2>Ready to Schedule</h2>
            <p>
              Patients can book directly with no referral required. Visit our{" "}
              <Link href="/locations/manhattan">Manhattan location page</Link> for office details, or{" "}
              <Link href="/contact">contact our office</Link> to request an appointment.
            </p>
          </section>

          <section className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">{promoCard.title}</h2>
            <p className="text-gray-700 mb-5">{promoCard.body}</p>
            <Link href={promoCard.cta.href} className="btn-primary inline-flex">
              {promoCard.cta.label}
            </Link>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-3xl font-bold text-[var(--sv-navy)] mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-white rounded-xl border border-gray-200 p-5 shadow-card">
                  <h3 className="font-heading text-xl font-semibold text-[var(--sv-navy)] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
