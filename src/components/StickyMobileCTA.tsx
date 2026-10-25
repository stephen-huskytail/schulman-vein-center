"use client";

import { Calendar, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { LOCATIONS } from "@/lib/constants";
import CallNowButton from "@/components/CallNowButton";

export default function StickyMobileCTA() {
  const isManhasset = usePathname() === "/locations/manhasset";
  const manhasset = LOCATIONS.find((location) => location.id === "manhasset")!;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden bg-white border-t border-gray-200 shadow-xl">
      <div className="grid grid-cols-2">
        {isManhasset ? (
          <a href={manhasset.phoneHref} className="flex min-h-14 flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-navy)] text-white text-xs font-bold tracking-wide">
            <Phone className="w-5 h-5" />
            Call Manhasset
          </a>
        ) : <CallNowButton
          variant="custom"
          className="flex h-full w-full flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-navy)] text-white text-xs font-bold tracking-wide active:bg-[var(--sv-navy-light)] transition-colors"
          wrapperClassName="block"
          menuClassName="top-auto bottom-full mb-2 mt-0 left-2 right-auto"
          iconSize="w-5 h-5"
        />}
        <a
          href={isManhasset ? "/contact?location=manhasset#contact" : "/contact"}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[var(--sv-teal)] text-white active:bg-[var(--sv-teal-light)] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">{isManhasset ? "Manhasset Screening" : "Free Screening"}</span>
        </a>
      </div>
    </div>
  );
}
