import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, LOCATIONS, SERVICES } from "@/lib/constants";

type LocationPageProps = {
  params: Promise<{ id: string }>;
};

const dayMap = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
} as const;

function getLocation(id: string) {
  return LOCATIONS.find((location) => location.id === id);
}

function to24HourTime(value: string) {
  const match = value.match(/^(\d{1,2}):(\d{2})(am|pm)$/i);
  if (!match) {
    return value;
  }

  const [, hourRaw, minute, periodRaw] = match;
  const period = periodRaw.toLowerCase();
  let hour = Number(hourRaw);

  if (period === "pm" && hour !== 12) {
    hour += 12;
  } else if (period === "am" && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ id: location.id }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { id } = await params;
  const location = getLocation(id);

  if (!location) {
    return {};
  }

  return {
    title: `Vein Treatment in ${location.shortName}, NY | Schulman Vein Center`,
    description: `Visit our ${location.shortName} location at ${location.fullAddress} for varicose vein and spider vein treatment by board-certified specialists.`,
    alternates: {
      canonical: `${BUSINESS.siteUrl}/locations/${location.id}`,
    },
    openGraph: {
      title: `Vein Treatment in ${location.shortName}, NY | Schulman Vein Center`,
      description: `Schulman Vein Center in ${location.shortName}: ${location.fullAddress}. Call ${location.phone} for appointments.`,
      url: `${BUSINESS.siteUrl}/locations/${location.id}`,
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { id } = await params;
  const location = getLocation(id);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${BUSINESS.name} - ${location.shortName}`,
    url: `${BUSINESS.siteUrl}/locations/${location.id}`,
    telephone: location.phoneTel,
    image: "https://www.schulmanveincenter.com/images/hero-bg.png",
    medicalSpecialty: BUSINESS.specialty,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    priceRange: BUSINESS.priceRange,
    parentOrganization: {
      "@id": `${BUSINESS.siteUrl}/#organization`,
    },
    openingHoursSpecification: Object.entries(location.hours)
      .filter(([, hours]) => hours !== "Closed")
      .map(([day, hours]) => {
        const [open, close] = hours.split(" – ");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${dayMap[day as keyof typeof dayMap]}`,
          opens: to24HourTime(open),
          closes: to24HourTime(close),
        };
      }),
    areaServed: location.communitiesServed,
    hasMap: location.mapUrl,
  };

  const faqSchema = location.locationFaqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: location.locationFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHero
        eyebrow={`Location: ${location.shortName}`}
        title={`Vein Treatment in ${location.shortName}, NY`}
        description={`Visit Schulman Vein Center at ${location.fullAddress}. Call ${location.phone} to schedule your consultation.`}
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Locations", url: `${BUSINESS.siteUrl}/locations` },
          { name: location.shortName, url: `${BUSINESS.siteUrl}/locations/${location.id}` },
        ]}
      />

      <section className="section-light">
        <div className="container-sv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
              <h2 className="section-title text-2xl mb-5">Office Information</h2>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-[var(--sv-teal)]" />
                  <span>{location.fullAddress}</span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--sv-teal)]" />
                  <a href={location.phoneHref} className="font-semibold text-[var(--sv-navy)] hover:text-[var(--sv-teal)]">
                    {location.phone}
                  </a>
                </p>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-[var(--sv-teal)]" />
                  <ul className="space-y-1 text-sm">
                    <li>Mon: {location.hours.mon}</li>
                    <li>Tue: {location.hours.tue}</li>
                    <li>Wed: {location.hours.wed}</li>
                    <li>Thu: {location.hours.thu}</li>
                    <li>Fri: {location.hours.fri}</li>
                    <li>Sat: {location.hours.sat}</li>
                    <li>Sun: {location.hours.sun}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={location.phoneHref} className="btn-primary justify-center">
                  Call {location.shortName}
                </a>
                <Link href="/contact" className="btn-outline-navy justify-center">
                  Book Online
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-600">
                Parking and directions: located at {location.fullAddress}. For fastest arrival, use the map link below.
              </p>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--sv-teal)] font-semibold hover:underline"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.fullAddress)}&output=embed`}
                className="w-full h-[460px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.shortName} office map`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-sv">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8 mb-8">
            <h2 className="section-title text-2xl mb-4">Neighborhood Context</h2>
            <p className="text-gray-700 leading-relaxed">{location.neighborhoodContext}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
              <h2 className="section-title text-2xl mb-4">Communities Served</h2>
              <ul className="space-y-2">
                {location.communitiesServed.map((community) => (
                  <li key={community} className="flex gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                    <span>{community}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
              <h2 className="section-title text-2xl mb-4">Visit Planning</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-1">Transportation & Parking</h3>
                  <p>{location.transportationNote}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-1">Doctor Availability</h3>
                  <p>{location.doctorAvailability}</p>
                </div>
              </div>
            </article>
          </div>

          <div className="max-w-3xl">
            <p className="section-eyebrow">Services Available</p>
            <h2 className="section-title mb-4">Treatments Offered at This Location</h2>
            <p className="section-subtitle mt-0 mb-6">
              All Schulman Vein Center locations offer the full range of vein treatments.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((service) => (
              <li
                key={service.id}
                className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-sm font-medium text-[var(--sv-navy)]"
              >
                {service.name}
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8 mt-8">
            <h2 className="section-title text-2xl mb-4">Location-Specific FAQs</h2>
            <div className="space-y-5">
              {location.locationFaqs.map((faq) => (
                <article key={faq.q}>
                  <h3 className="font-semibold text-[var(--sv-navy)] mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
