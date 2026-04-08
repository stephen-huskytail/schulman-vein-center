import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read real patient testimonials for Schulman Vein and Laser Center from Manhattan, Manhasset, and Commack.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/reviews`,
  },
};

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: BUSINESS.name,
    url: `${BUSINESS.siteUrl}/reviews`,
    review: TESTIMONIALS.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.stars,
        bestRating: 5,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: TESTIMONIALS.length,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <PageHero
        eyebrow="Reviews"
        title="What Patients Say About Their Vein Treatment"
        description="Our patients consistently share five-star feedback about clinical outcomes, personal attention, and same-day recovery."
      />
      <TestimonialsSection variant="light" />
      <CTABannerSection />
    </>
  );
}
