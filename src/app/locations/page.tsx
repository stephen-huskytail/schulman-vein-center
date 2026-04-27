import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vein Treatment Locations in New York",
  description:
    "Find Schulman Vein Center in Manhattan, Manhasset (Nassau County), and Commack (Suffolk County). Three convenient New York locations.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/locations`,
  },
  openGraph: {
    title: "Vein Treatment Locations in New York | Schulman Vein Center",
    description:
      "Visit Schulman Vein Center in Manhattan, Manhasset, or Commack for expert vein treatment across the New York metro area.",
    url: `${BUSINESS.siteUrl}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Our New York Locations"
        description="Visit our Manhattan, Manhasset, or Commack offices for expert vein care across the New York metro area."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Locations", url: `${BUSINESS.siteUrl}/locations` },
        ]}
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
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-[var(--sv-teal)]" />
                      <span>{location.hoursDisplay.split(" · ")[0]}<span className="block">{location.hoursDisplay.split(" · ")[1]}</span></span>
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
        <div className="container-narrow text-center">
          <h2 className="section-title mb-3">Schedule at Any Location</h2>
          <p className="section-subtitle mt-0 mb-6">
            Call your preferred office directly or request a consultation online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
