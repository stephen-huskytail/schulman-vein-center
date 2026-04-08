import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vein Health Blog",
  description:
    "Read upcoming educational articles from Schulman Vein Center on vein symptoms, treatment options, recovery, and prevention.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/blog`,
  },
  openGraph: {
    title: "Vein Health Blog | Schulman Vein Center",
    description:
      "Educational articles on varicose veins, spider veins, laser treatment, insurance, and recovery.",
    url: `${BUSINESS.siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Vein Health Resources from Our Specialists"
        description="Our educational library is launching soon. In the meantime, explore our treatment pages and FAQs for medically reviewed guidance."
      />

      <section className="section-light">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
            <h2 className="section-title text-2xl mb-3">Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are preparing expert articles focused on vein symptoms, treatment options, and
              long-term vein health for patients in New York and Las Vegas.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <li className="bg-[var(--sv-cream)] rounded-lg px-4 py-3 text-sm text-[var(--sv-navy)]">
                Understanding the early signs of venous insufficiency
              </li>
              <li className="bg-[var(--sv-cream)] rounded-lg px-4 py-3 text-sm text-[var(--sv-navy)]">
                EVLT vs. sclerotherapy: which treatment is right for you?
              </li>
              <li className="bg-[var(--sv-cream)] rounded-lg px-4 py-3 text-sm text-[var(--sv-navy)]">
                What to expect after minimally invasive vein treatment
              </li>
              <li className="bg-[var(--sv-cream)] rounded-lg px-4 py-3 text-sm text-[var(--sv-navy)]">
                Insurance and payment planning for vein care
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="btn-primary justify-center">
                Explore Vein Treatments
              </Link>
              <Link href="/faq" className="btn-outline-navy justify-center">
                Read Patient FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
