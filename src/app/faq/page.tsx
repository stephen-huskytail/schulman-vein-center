import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import PageHero from "@/components/PageHero";
import { BUSINESS, FAQ_SCHEMA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Vein Questions | Manhattan & Long Island",
  description:
    "Find answers about varicose veins, spider veins, insurance, treatment timelines, and what to expect at Schulman Vein.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions About Vein Care"
        description="Get clear answers about symptoms, treatment options, insurance, recovery, and your first appointment."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "FAQ", url: `${BUSINESS.siteUrl}/faq` },
        ]}
      />
      <FAQSection />
    </>
  );
}
