import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, SERVICES } from "@/lib/constants";
import CallNowButton from "@/components/CallNowButton";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.name} in Manhattan & Long Island`;
  const description = service.shortDesc;
  const canonical = `${BUSINESS.siteUrl}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS.name,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={service.name}
        description={service.description}
      />

      <section className="section-light">
        <div className="container-narrow">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[var(--sv-teal)] font-semibold">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to All Services
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
            <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-3">
              What This Treatment Includes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

            <h3 className="font-heading font-bold text-xl text-[var(--sv-navy)] mb-4">
              Common Approaches
            </h3>
            <ul className="space-y-3 mb-8">
              {service.treatments.map((treatment) => (
                <li key={treatment} className="flex gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <CallNowButton variant="primary" />
              <Link href="/contact" className="btn-outline-navy">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
