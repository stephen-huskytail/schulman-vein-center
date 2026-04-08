import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Page Not Found",
  description: `The page you're looking for doesn't exist. Visit ${BUSINESS.shortName} to learn about our vein treatment services.`,
};

export default function NotFound() {
  return (
    <section className="bg-[var(--sv-navy)] py-20 md:py-28 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-2 text-[var(--sv-teal)]">
          Page Not Found
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
          404
        </h1>
        <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
          no longer exists. Let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[var(--sv-teal)] text-white font-semibold hover:bg-[var(--sv-teal-dark)] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-10 text-white/50 text-sm">
          Or call us at{" "}
          <a href={BUSINESS.phoneHref} className="text-[var(--sv-teal)] hover:underline">
            {BUSINESS.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
