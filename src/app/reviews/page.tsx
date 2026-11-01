import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Reviews | Manhattan & Long Island",
  description:
    "Read real patient testimonials for Schulman Vein and Laser Center from Manhattan, Manhasset, and Commack.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/reviews`,
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Patients Say About Their Vein Treatment"
        description="Read what patients say about their experience at Schulman Vein and Laser Center."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Reviews", url: `${BUSINESS.siteUrl}/reviews` },
        ]}
      />
      <TestimonialsSection variant="light" />
      <CTABannerSection />
    </>
  );
}
