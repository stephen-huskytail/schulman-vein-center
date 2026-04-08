import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import FirstVisitSection from "@/components/FirstVisitSection";
import PageHero from "@/components/PageHero";
import WhyUsSection from "@/components/WhyUsSection";
import { BUSINESS, DOCTORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Vein Specialists in Manhattan & Long Island",
  description:
    "Learn why Schulman Vein and Laser Center is trusted across Manhattan and Long Island for non-surgical vein treatment.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const physicianSchema = DOCTORS.map((doctor) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BUSINESS.siteUrl}/about#${doctor.id}`,
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    award: doctor.award,
    alumniOf: "New York Medical College",
    worksFor: {
      "@id": `${BUSINESS.siteUrl}/#organization`,
    },
    url: `${BUSINESS.siteUrl}/about`,
    description: doctor.bio,
    knowsAbout: doctor.specialty,
  }));

  return (
    <>
      {physicianSchema.map((schema, index) => (
        <script
          key={DOCTORS[index].id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        eyebrow="About"
        title="Meet the Vein Specialists Behind Schulman Vein"
        description="Our practice is focused entirely on vein care. Every patient is evaluated and treated personally by Dr. Martin L. Schulman or Dr. Lee G. Schulman."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "About", url: `${BUSINESS.siteUrl}/about` },
        ]}
      />
      <AboutSection />
      <WhyUsSection />
      <DoctorsSection />
      <FirstVisitSection />
    </>
  );
}
