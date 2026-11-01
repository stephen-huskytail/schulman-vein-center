import StarRating from "@/components/StarRating";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";

// HUS-1368: hero review block. Numbers come from ONE constant (src/lib/google-reviews.ts). The fifth star is filled to the true fraction (shared StarRating), never a full star.
// No Review / AggregateRating schema. The whole block is one link to the real Google Reviews tab.
export default function GoogleReviewBadge() {
  const { rating, count, label, url } = GOOGLE_REVIEWS;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={`Rated ${rating} out of 5 from ${count} Google reviews for ${label}. Opens Google reviews in a new tab.`}
      className="mt-7 inline-grid max-w-full grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 rounded-[14px] border border-white/20 bg-white/10 px-5 py-3.5 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-gold-light)]"
    >
      <span aria-hidden="true" className="font-heading text-[40px] font-bold leading-none text-[var(--sv-gold)] sm:row-span-2">{rating.toFixed(1)}</span>
      <StarRating rating={rating} sizeClass="h-[22px] w-[22px]" />
      <span aria-hidden="true" className="col-span-2 text-[15px] font-semibold leading-snug sm:col-span-1">
        <span className="underline underline-offset-4">{count} Google reviews</span> · {label}
      </span>
    </a>
  );
}
