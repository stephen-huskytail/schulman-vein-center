import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";
import CallNowButton from "@/components/CallNowButton";

const slug = "vein-treatment-upper-east-side-manhattan";
const canonicalUrl = `${BUSINESS.siteUrl}/blog/${slug}`;
const title = "Vein Treatment on the Upper East Side — What Manhattan Patients Should Know";
const description =
  "Expert vein treatment on the Upper East Side. Schulman Vein and Laser Center — free screening, no referral needed, same-day recovery. Book your consultation.";
const ogDescription =
  "Expert vein care at 1165 Park Avenue, Carnegie Hill. Free screening, no referral. Both physicians personally treat every patient.";
const featuredImage = `${BUSINESS.siteUrl}/images/gallery/varicose-large.png`;

export const metadata: Metadata = {
  title: "Vein Treatment Upper East Side | Schulman Vein and Laser Center",
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description: ogDescription,
    url: canonicalUrl,
    siteName: BUSINESS.name,
    type: "article",
    images: [
      {
        url: featuredImage,
        width: 1200,
        height: 675,
        alt: "Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
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
    "@id": canonicalUrl,
  },
  image: featuredImage,
};

export default function UpperEastSideVeinTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        eyebrow="Upper East Side Vein Guide"
        title={title}
        description="A local guide for Manhattan patients who want physician-led treatment with same-day recovery and convenient scheduling."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Blog", url: `${BUSINESS.siteUrl}/blog` },
          { name: "Vein Treatment on the Upper East Side", url: canonicalUrl },
        ]}
      />

      <section className="section-light">
        <div className="container-narrow">
          <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
            <Image
              src="/images/gallery/varicose-large.png"
              alt="Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl mb-8"
              priority
            />

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                If you live or work in Manhattan and have been putting off care, you are not
                alone. Between demanding schedules, long commutes, and the pace of city life, many
                patients assume treatment will require taking a full day off. At Schulman Vein and
                Laser Center, treatment plans are designed around real New York routines.
              </p>
              <p>
                Located at 1165 Park Avenue in Carnegie Hill, our Upper East Side office serves
                patients from Yorkville, Midtown East, East Harlem, and the Upper West Side. We
                provide minimally invasive vein treatment with same-day recovery for most
                procedures.
              </p>
            </div>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                A Practice Built for New Yorkers
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Manhattan patients often spend hours standing on subway platforms, commuting, or
                  sitting at desks for long stretches. These patterns can worsen venous
                  insufficiency and accelerate symptoms like leg heaviness, swelling, and visible
                  varicose veins.
                </p>
                <p>
                  Our model is physician-led from start to finish. Every patient is evaluated and
                  treated by a doctor. No referral is required, and first-time patients can begin
                  with a{" "}
                  <Link
                    href="/services/free-vein-screening"
                    className="font-semibold text-[var(--sv-teal)] hover:underline"
                  >
                    free vein screening
                  </Link>{" "}
                  to determine whether their concerns are cosmetic, medical, or both.
                </p>
                <blockquote className="border-l-4 border-[var(--sv-teal)] bg-[var(--sv-cream)] px-4 py-3 italic text-[var(--sv-navy)]">
                  Many Manhattan patients delay treatment because they assume vein care will
                  disrupt work. Most in-office options are designed to fit real city schedules.
                </blockquote>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                Common Vein Concerns Manhattan Patients Bring
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some patients arrive with visible bulging veins, while others are dealing with
                fatigue, restless legs, or ankle swelling without obvious surface veins. Both
                patterns can indicate treatable venous disease.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>Long periods of standing during shifts or transit</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>Extended seated time during workdays and commutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>Family history of varicose veins or venous reflux</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>Pregnancy-related changes in circulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>Cosmetic concerns that may overlap with medical symptoms</span>
                </li>
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                Our Upper East Side Office
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The office is centrally located near major transit options. The 4/5/6 and Q
                  trains at 96th Street make access straightforward for patients throughout
                  Manhattan.
                </p>
                <p>
                  We routinely see patients from Carnegie Hill, Yorkville, Midtown East, and nearby
                  neighborhoods who want high-level specialty care without leaving the city.
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                What to Expect at Your First Visit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Your first appointment includes symptom review, physician exam, and ultrasound
                  mapping when needed. This helps identify underlying reflux and ensures treatment
                  targets the cause rather than only the visible veins.
                </p>
                <p>
                  You will receive a clear explanation of options, timing, and likely recovery
                  expectations before deciding on next steps.
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                Treatments Available
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Endovenous Laser Treatment (EVLT):</strong> closes refluxing veins with
                  targeted laser energy.
                </p>
                <p>
                  <strong>Sclerotherapy:</strong> injection treatment for spider veins and smaller
                  varicose veins.
                </p>
                <p>
                  <strong>VenaSeal:</strong> medical adhesive closure for selected diseased veins.
                </p>
                <p>
                  <strong>Varithena:</strong> microfoam treatment useful for complex vein anatomy.
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                Insurance and Coverage
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Coverage depends on diagnosis and documentation. Treatments addressing pain,
                  swelling, skin change, or confirmed venous insufficiency are often eligible under
                  major plans. Cosmetic-only treatment usually is not.
                </p>
                <p>
                  If you are unsure where your symptoms fit, start with a free vein screening and
                  physician review.
                </p>
              </div>
            </section>

            <section className="mt-10 bg-[var(--sv-cream)] border border-gray-200 rounded-xl p-6 md:p-7">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-3">
                Ready to Schedule
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are currently accepting new patients at our{" "}
                <Link href="/locations/manhattan" className="font-semibold text-[var(--sv-teal)] hover:underline">
                  Manhattan location
                </Link>
                . You can also explore{" "}
                <Link
                  href="/services/varicose-vein-treatment"
                  className="font-semibold text-[var(--sv-teal)] hover:underline"
                >
                  varicose vein treatment options
                </Link>{" "}
                before your visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary justify-center">
                  Contact Our Office
                </Link>
                <CallNowButton variant="outline" />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <article>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-2">
                    Do I need a referral to schedule an appointment?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No referral is required for your first appointment or free screening.
                  </p>
                </article>
                <article>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-2">
                    How long do treatments usually take?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most in-office procedures are completed in under an hour, and many patients
                    return to normal routines the same day.
                  </p>
                </article>
                <article>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-2">
                    Are varicose and spider veins treated the same way?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Not always. Treatment depends on ultrasound findings, symptom profile, and your
                    goals. Your physician recommends the most effective option for your specific
                    vein pattern.
                  </p>
                </article>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
