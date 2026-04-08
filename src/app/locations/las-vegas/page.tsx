import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Stethoscope, ShieldCheck, Clock3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, LAS_VEGAS_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Las Vegas Vein Center",
  description:
    "Professional vein treatment in Las Vegas, Henderson, Summerlin, Paradise, Spring Valley, and North Las Vegas. Free screening available.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/locations/las-vegas`,
  },
  openGraph: {
    title: "Las Vegas Vein Center | Schulman Vein Center",
    description:
      "Vein-only specialists with 55+ years of combined experience serving patients across the Las Vegas Valley.",
    url: `${BUSINESS.siteUrl}/locations/las-vegas`,
  },
};

const lasVegasSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.siteUrl}/locations/las-vegas#localbusiness`,
    name: `${BUSINESS.name} - Las Vegas`,
    url: `${BUSINESS.siteUrl}/locations/las-vegas`,
    image: `${BUSINESS.siteUrl}/images/hero-bg.png`,
    telephone: BUSINESS.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: LAS_VEGAS_AREAS.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${BUSINESS.siteUrl}/locations/las-vegas#medicalorganization`,
    name: `${BUSINESS.name} - Las Vegas`,
    url: `${BUSINESS.siteUrl}/locations/las-vegas`,
    medicalSpecialty: BUSINESS.specialty,
    telephone: BUSINESS.phoneTel,
    areaServed: LAS_VEGAS_AREAS,
  },
];

const localFaqs = [
  {
    q: "Do you treat both varicose veins and spider veins in Las Vegas?",
    a: "Yes. We evaluate and treat both varicose veins and spider veins using minimally invasive, in-office procedures based on your diagnosis and goals.",
  },
  {
    q: "Which Las Vegas areas do you serve?",
    a: "We serve patients across the Las Vegas Valley, including Henderson, Summerlin, Paradise, Spring Valley, and North Las Vegas.",
  },
  {
    q: "Are consultations available before treatment?",
    a: "Yes. New patients can request a free screening so a doctor can review symptoms, discuss options, and outline next steps.",
  },
  {
    q: "Is vein treatment covered by insurance?",
    a: "Coverage varies by plan and diagnosis. Medical vein treatments are commonly covered when medically necessary; cosmetic treatments are typically not.",
  },
];

export default function LasVegasLocationPage() {
  return (
    <>
      {lasVegasSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHero
        eyebrow="Las Vegas Location"
        title="Las Vegas Vein Center Care Backed by 55+ Years of Experience"
        description="Schulman Vein Center provides vein-only treatment for patients across the Las Vegas Valley with personalized care and minimally invasive procedures."
      />

      <section className="section-light">
        <div className="container-sv grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">
              Serving Las Vegas Valley
            </h2>
            <p className="text-gray-600 mb-4">
              We are actively building out our Las Vegas presence to support patients searching for
              experienced, vein-only specialists.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-700 mb-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
              <span>Las Vegas, NV and nearby communities</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
              <a href={BUSINESS.phoneHref} className="font-semibold text-[var(--sv-navy)] hover:text-[var(--sv-teal)]">
                {BUSINESS.phone}
              </a>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">Services</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Stethoscope className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Varicose vein diagnosis and treatment
              </li>
              <li className="flex items-start gap-2">
                <Stethoscope className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Spider vein removal
              </li>
              <li className="flex items-start gap-2">
                <Stethoscope className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Laser vein therapy (EVLT)
              </li>
              <li className="flex items-start gap-2">
                <Stethoscope className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Free screening and treatment planning
              </li>
            </ul>
          </article>

          <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">
              Why Schulman Vein
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                All We Do Is Veins
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                55+ years of combined specialist experience
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Minimally invasive, office-based procedures
              </li>
              <li className="flex items-start gap-2">
                <Clock3 className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                Same-day return to normal activity for many patients
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-sv">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Local Coverage</p>
            <h2 className="section-title mb-4">Areas We Serve Around Las Vegas</h2>
            <p className="section-subtitle mt-0 mb-6">
              We support patients throughout the valley, with treatment planning focused on your
              symptoms, goals, and schedule.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LAS_VEGAS_AREAS.map((area) => (
              <li
                key={area}
                className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-sm font-medium text-[var(--sv-navy)]"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-light">
        <div className="container-sv">
          <div className="max-w-4xl">
            <p className="section-eyebrow">Las Vegas FAQ</p>
            <h2 className="section-title mb-6">Common Questions About Vein Treatment in Las Vegas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localFaqs.map((item) => (
              <article
                key={item.q}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-card"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--sv-navy)] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream py-12 md:py-16">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-3">Request Your Free Vein Screening</h2>
          <p className="section-subtitle mt-0 mb-6">
            Speak with our team to discuss symptoms and the best next step for personalized vein
            care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              Call for Las Vegas Scheduling
            </a>
            <Link href="/contact" className="btn-outline-navy">
              Request a Consultation
            </Link>
            <Link href="/services" className="btn-outline-navy">
              Explore Treatment Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
