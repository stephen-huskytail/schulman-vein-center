"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";
import { usePathname } from "next/navigation";
import { isNeutralChromePath } from "@/lib/page-chrome";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  // HUS-1366: pages listed in lib/page-chrome.ts get a neutral header/sticky bar/top bar/footer (no stars, "Free" or years claims). Every other page is unchanged.
  const neutral = isNeutralChromePath(usePathname());
  return (
    <>
      <TrustBar neutral={neutral} />
      <Header neutral={neutral} />
      <main className="pt-[124px] lg:pt-[132px] pb-[64px] xl:pb-0 overflow-x-clip">{children}</main>
      <Footer neutral={neutral} />
      <StickyMobileCTA neutral={neutral} />
    </>
  );
}
