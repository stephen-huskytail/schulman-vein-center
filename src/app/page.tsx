import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import DoctorsSection from "@/components/DoctorsSection";
import FirstVisitSection from "@/components/FirstVisitSection";
import CTABannerSection from "@/components/CTABannerSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import InsuranceSection from "@/components/InsuranceSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import { SCHEMA } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />

      <CTABannerSection
        title="Book Your Free Vein Screening Today"
        subtitle="55+ years experience · Every patient treated by a board-certified doctor · Drive home the same day"
      />

      <DoctorsSection />
      <FirstVisitSection />
      <GallerySection />

      <CTABannerSection
        title="See What's Possible for Your Veins"
        subtitle="Free initial consultation · Non-surgical treatments only · All 3 NY locations"
      />

      <TestimonialsSection />
      <FAQSection />
      <InsuranceSection />
      <LocationsSection />
      <ContactSection />
    </>
  );
}
