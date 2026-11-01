import type { Metadata } from "next";
import { LOCATIONS } from "@/lib/constants";

// HUS-1370: static result page when a native (no-JavaScript) form post could not be sent.
// The URL never carries form data. Text reuses the lead form's existing error message and office phones.
export const metadata: Metadata = {
  title: "Unable to Send Your Request",
  robots: { index: false, follow: false },
};

export default function ContactNotSentPage() {
  return (
    <section className="section-gray">
      <div className="container-sv max-w-2xl py-16 text-center">
        <h1 className="mb-4 font-heading text-3xl font-bold text-[var(--sv-navy)]">Unable to send your request.</h1>
        <p className="mb-6 text-gray-700">Please call us directly.</p>
        <ul className="space-y-2 text-lg">
          {LOCATIONS.map((loc) => (
            <li key={loc.id}>
              {loc.shortName}:{" "}
              <a href={loc.phoneHref} className="font-semibold text-[var(--sv-teal)] underline-offset-4 hover:underline">
                {loc.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
