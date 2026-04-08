import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Before and After Results",
  description:
    "View before and after vein treatment results from actual Schulman Vein and Laser Center patients.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/results`,
  },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Before and After Vein Treatment Results"
        description="Explore real patient outcomes from varicose, spider, hand, facial, and body vein treatments performed at our Manhattan and Long Island offices."
      />
      <GallerySection />
    </>
  );
}
