import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import FirstVisitSection from "@/components/FirstVisitSection";
import PageHero from "@/components/PageHero";
import WhyUsSection from "@/components/WhyUsSection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Vein Specialists",
  description:
    "Learn why Schulman Vein and Laser Center is trusted across Manhattan and Long Island for non-surgical vein treatment.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet the Vein Specialists Behind Schulman Vein"
        description="Our practice is focused entirely on vein care. Every patient is evaluated and treated personally by Dr. Martin L. Schulman or Dr. Lee G. Schulman."
      />
      <AboutSection />
      <WhyUsSection />
      <DoctorsSection />
      <FirstVisitSection />
    </>
  );
}
