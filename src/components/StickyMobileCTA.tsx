"use client";

import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden bg-white border-t border-gray-200 shadow-xl">
      <div className="grid grid-cols-2">
        <a
          href={BUSINESS.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-navy)] text-white active:bg-[var(--sv-navy-light)] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">Call Now</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-teal)] text-white active:bg-[var(--sv-teal-light)] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">Free Screening</span>
        </a>
      </div>
    </div>
  );
}
