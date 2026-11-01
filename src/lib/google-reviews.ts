// HUS-1368: the ONE place for the Google review numbers shown in the hero. Source: Maps & GBP REVIEW-FACTS.md (read 2026-11-01, Dr. Lee G. Schulman, Manhasset Google profile).
// Do NOT combine with Dr. Martin L. Schulman's separate listing, Healthgrades, Zocdoc or any other platform. No Review/AggregateRating schema is emitted from these numbers.
// Link = Dr. Lee's Google Maps listing (cid), the only verified link (PM - Stephen, Nov 1 2026); no "write a review" link, its URL is unverified. Maps & GBP re-reads these monthly: update rating, count and checked here only.
export const GOOGLE_REVIEWS = {
  rating: 4.9,
  count: 107,
  label: "Dr. Lee G. Schulman, Manhasset",
  checked: "2026-11-01",
  url: "https://www.google.com/maps?cid=1729694189832035897",
} as const;
