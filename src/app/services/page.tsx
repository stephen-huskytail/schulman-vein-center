import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Crosshair,
  Hand,
  HeartPulse,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Sparkles,
  Crosshair,
  Hand,
  HeartPulse,
  Search,
};

export const metadata: Metadata = {
  title: "Vein Treatments",
  description:
    "Explore varicose vein, spider vein, laser, and body vein treatments offered by Schulman Vein and Laser Center.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Non-Surgical Vein Treatments"
        description="Each treatment plan is personalized by a Schulman doctor and performed in-office with minimally invasive, FDA-approved techniques."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Services", url: `${BUSINESS.siteUrl}/services` },
        ]}
      />

      <section className="section-light">
        <div className="container-sv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Zap;
            return (
              <article key={service.id} className="card-service p-6 md:p-7">
                <div className="icon-circle mb-4">
                  <Icon className="w-5 h-5 text-[var(--sv-teal)]" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[var(--sv-navy)] mb-2">
                  {service.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{service.shortDesc}</p>

                <ul className="space-y-2 mb-6">
                  {service.treatments.slice(0, 3).map((treatment) => (
                    <li key={treatment} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--sv-teal)] shrink-0" />
                      {treatment}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sv-teal)] hover:gap-2.5 transition-all"
                >
                  View Treatment Details <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
