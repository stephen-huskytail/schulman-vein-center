import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vein Treatment Locations in New York & Las Vegas",
  description:
    "Find Schulman Vein Center in Manhattan, Manhasset, and Commack, plus our Las Vegas service area page.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/locations`,
  },
  openGraph: {
    title: "Vein Treatment Locations in New York & Las Vegas | Schulman Vein Center",
    description:
      "Visit our New York offices and explore our Las Vegas service area page for localized vein treatment coverage.",
    url: `${BUSINESS.siteUrl}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Our New York Locations + Las Vegas Service Area"
        description="Visit our Manhattan, Manhasset, or Commack offices, or explore our Las Vegas page for local treatment coverage."
      />

      <section className="section-light">
        <div className="container-sv">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {LOCATIONS.map((location) => (
              <article
                key={location.id}
                className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"
              >
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.fullAddress)}&output=embed`}
                  className="w-full h-48 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.shortName} location map`}
                />
                <div className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-4">
                    {location.shortName}
                  </h2>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                      <span>{location.fullAddress}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[var(--sv-teal)]" />
                      <a
                        href={location.phoneHref}
                        className="font-semibold text-[var(--sv-navy)] hover:text-[var(--sv-teal)]"
                      >
                        {location.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--sv-teal)]" />
                      <span>{location.hoursDisplay}</span>
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link href={`/locations/${location.id}`} className="btn-primary justify-center">
                      View {location.shortName}
                    </Link>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-navy justify-center"
                    >
                      Directions
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream py-12 md:py-16">
        <div className="container-sv">
          <article className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8">
            <p className="section-eyebrow">Las Vegas</p>
            <h2 className="section-title text-2xl mb-3">Now Serving the Las Vegas Valley</h2>
            <p className="text-gray-600 mb-5 max-w-3xl">
              Looking for vein treatment in Las Vegas, Henderson, Summerlin, Paradise, Spring
              Valley, or North Las Vegas? Visit our Las Vegas location page for local service-area
              details and scheduling options.
            </p>
            <Link href="/locations/las-vegas" className="btn-primary w-fit">
              View Las Vegas Location Page
            </Link>
          </article>
        </div>
      </section>

      <section className="section-cream py-12 md:py-16">
        <div className="container-narrow text-center">
          <h2 className="section-title mb-3">Schedule at Any Location</h2>
          <p className="section-subtitle mt-0 mb-6">
            Call your preferred office directly or request a consultation online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-outline-navy">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
