"use client";

import { Calendar } from "lucide-react";
import CallNowButton from "@/components/CallNowButton";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden bg-white border-t border-gray-200 shadow-xl">
      <div className="grid grid-cols-2">
        <CallNowButton
          variant="custom"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-navy)] text-white active:bg-[var(--sv-navy-light)] transition-colors"
          iconSize="w-5 h-5"
        />
        <a
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-teal)] text-white active:bg-[var(--sv-teal-light)] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">Free Screening</span>
        </a>
      </div>
    </div>
  );
}
