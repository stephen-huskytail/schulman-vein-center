"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TrustBar />
      <Header />
      <main className="pt-[124px] lg:pt-[132px] pb-[64px] xl:pb-0 overflow-x-clip">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
