import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact and Locations",
  description:
    "Schedule your free consultation and find complete contact details for our Manhattan, Manhasset, and Commack locations.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a Free Vein Consultation"
        description="Choose the location most convenient for you, call directly, or send a consultation request to our care team."
      />
      <ContactSection />
    </>
  );
}
