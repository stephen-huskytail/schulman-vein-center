import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about varicose veins, spider veins, insurance, treatment timelines, and what to expect at Schulman Vein.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions About Vein Care"
        description="Get clear answers about symptoms, treatment options, insurance, recovery, and your first appointment."
      />
      <FAQSection />
    </>
  );
}
