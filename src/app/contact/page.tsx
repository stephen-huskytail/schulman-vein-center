import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Manhattan, Manhasset & Commack",
  description:
    "Schedule your free consultation and find complete contact details for our Manhattan, Manhasset, and Commack locations.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/contact`,
  },
};

export default async function ContactPage({ searchParams }: {
  searchParams: Promise<{ location?: string | string[] }>;
}) {
  const query = await searchParams;
  const initialLocation = LOCATIONS.find((location) => location.id === query.location);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={initialLocation ? "Request a Vein Screening" : "Schedule a Free Vein Consultation"}
        description={initialLocation ? "Choose your preferred office below before sending your screening request." : "Choose the location most convenient for you, call directly, or send a consultation request to our care team."}
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Contact", url: `${BUSINESS.siteUrl}/contact` },
        ]}
      />
      <ContactSection key={initialLocation?.id ?? "general"} initialLocation={initialLocation?.id} />
    </>
  );
}
