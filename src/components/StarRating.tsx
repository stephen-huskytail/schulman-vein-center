import { Star } from "lucide-react";

// HUS-1369: ONE fractional five-star row, shared by the Nassau hero badge, the header, the homepage and the testimonials rating box.
// A 4.9 rating renders four full stars and a fifth star filled to the true fraction (never five full stars).
// The lucide Star glyph only spans x 2..22 of its 24-unit viewBox, so the clip is (2 + 20 * fraction) / 24 of the box (4.9 -> 83.3%).
interface StarRatingProps {
  rating: number;
  /** Tailwind size classes for one star, e.g. "h-[22px] w-[22px]". */
  sizeClass: string;
  /** Tailwind classes for a filled star. */
  fullClass?: string;
  /** Tailwind classes for the unfilled part. */
  emptyClass?: string;
  className?: string;
}

export default function StarRating({
  rating,
  sizeClass,
  fullClass = "fill-[var(--sv-gold)] text-[var(--sv-gold)]",
  emptyClass = "fill-white/35 text-white/35",
  className = "flex items-center gap-0.5",
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const partial = Math.round(((2 + 20 * fraction) / 24) * 1000) / 10;
  return (
    <span aria-hidden="true" className={className}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < fullStars) return <Star key={i} className={`${sizeClass} ${fullClass}`} />;
        if (i === fullStars && fraction > 0) {
          return (
            <span key={i} className={`relative inline-block ${sizeClass}`}>
              <Star className={`absolute inset-0 ${sizeClass} ${emptyClass}`} />
              <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${partial}%` }}>
                <Star className={`${sizeClass} max-w-none ${fullClass}`} />
              </span>
            </span>
          );
        }
        return <Star key={i} className={`${sizeClass} ${emptyClass}`} />;
      })}
    </span>
  );
}
