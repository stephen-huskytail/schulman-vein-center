"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The county page must not inherit unconfirmed offers, ratings or outcome claims.
  if (pathname === "/vein-doctor-nassau-county" || pathname === "/vein-doctor-nassau-county/") {
    return (
      <>
        <a href="#county-content" className="sr-only focus:not-sr-only focus:block focus:p-4">
          Skip to content
        </a>
        <header className="border-b border-gray-200 bg-white">
          <nav aria-label="Main navigation" className="container-sv flex flex-wrap items-center justify-between gap-4 py-5">
            <Link href="/" className="font-semibold text-[var(--sv-navy)] underline underline-offset-4">Home</Link>
            <a href="tel:5164824477" className="btn-primary text-sm">Call 516.482.4477</a>
          </nav>
        </header>
        <main id="county-content">{children}</main>
        <footer className="bg-[var(--sv-navy)] py-8 text-white">
          <nav aria-label="Footer navigation" className="container-sv flex flex-wrap gap-x-6 gap-y-4 text-sm">
            <Link href="/locations/manhasset" className="underline underline-offset-4">Manhasset office</Link>
            <Link href="/privacy" className="underline underline-offset-4">Privacy policy</Link>
            <Link href="/terms" className="underline underline-offset-4">Terms</Link>
          </nav>
        </footer>
      </>
    );
  }

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
