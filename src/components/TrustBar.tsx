"use client";

import { Phone, Star } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";

export default function TrustBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-[var(--sv-navy)] text-white text-sm"
      style={{ height: "52px" }}
    >
      <div className="container-sv h-full flex items-center justify-between gap-4">
        {/* Left: tagline */}
        <span className="hidden md:flex items-center gap-2 font-medium tracking-wide">
          <span className="text-[var(--sv-gold)] font-black tracking-[0.18em] uppercase text-base">
            All We Do Is Veins™
          </span>
          <span className="text-white/30 hidden md:inline lg:hidden xl:inline">·</span>
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener"
            aria-label={`${GOOGLE_REVIEWS.label}: ${GOOGLE_REVIEWS.rating} out of 5 from ${GOOGLE_REVIEWS.count} Google reviews. Opens Google reviews in a new tab.`}
            className="hidden items-center gap-1.5 whitespace-nowrap text-xs hover:text-white md:inline-flex lg:hidden xl:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sv-gold-light)]"
          >
            <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" aria-hidden="true" />
            <span className="text-white/80">{GOOGLE_REVIEWS.shortLabel}<span aria-hidden="true"> · </span>{GOOGLE_REVIEWS.rating.toFixed(1)} on Google</span>
          </a>
        </span>

        {/* Center on mobile, right on desktop */}
        <div className="flex items-center gap-4 ml-auto">
          {LOCATIONS.map((loc, i) => (
            <a
              key={loc.id}
              href={loc.phoneHref}
              className="hidden lg:flex items-center gap-1.5 hover:text-[var(--sv-gold)] transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span className="text-white/70 mr-0.5">{loc.shortName}:</span>
              {loc.phone}
            </a>
          ))}
          {/* Mobile: generic call prompt */}
          <a
            href="/locations"
            className="flex lg:hidden h-full items-center gap-1.5 px-2 font-semibold hover:text-[var(--sv-gold)] transition-colors"
          >
            <Phone className="w-3 h-3" />
            Call Now
          </a>

        </div>
      </div>
    </div>
  );
}
