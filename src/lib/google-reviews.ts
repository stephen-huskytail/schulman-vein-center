// HUS-1368: the ONE place for the Google review numbers shown in the hero. Source: Maps & GBP REVIEW-FACTS.md (read 2026-11-01, Dr. Lee G. Schulman, Manhasset Google profile).
// Do NOT combine with Dr. Martin L. Schulman's separate listing, Healthgrades, Zocdoc or any other platform. No Review/AggregateRating schema is emitted from these numbers.
// Maps & GBP re-reads these monthly: update rating, count and checked here only.
export const GOOGLE_REVIEWS = {
  rating: 4.9,
  count: 107,
  label: "Dr. Lee G. Schulman, Manhasset",
  checked: "2026-11-01",
  url: "https://www.google.com/maps/place/Schulman+Vein+and+Laser+Center,+Dr.+Lee+G.+Schulman+M.D./data=!4m8!3m7!1s0x89c289cb0d85890d:0x18011bb38afede39!8m2!3d40.7707208!4d-73.7028779!9m1!1b1",
} as const;
