import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS, SERVICES } from "@/lib/constants";
import CallNowButton from "@/components/CallNowButton";
import { SERVICE_EXPANDED_CONTENT } from "@/lib/service-content";

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
  const description = service.metaDescription ?? service.shortDesc;
  const canonical = `${BUSINESS.siteUrl}/services/${service.slug}`;
  const ogImage = `${BUSINESS.siteUrl}${service.heroImage}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS.name,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }
  const expandedContent = SERVICE_EXPANDED_CONTENT[service.slug];

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${BUSINESS.siteUrl}/services/${service.slug}#medical-procedure`,
    name: service.name,
    url: `${BUSINESS.siteUrl}/services/${service.slug}`,
    description: service.description,
    bodyLocation: service.bodySite,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: {
      "@id": `${BUSINESS.siteUrl}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <PageHero
        eyebrow="Service Detail"
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Services", url: `${BUSINESS.siteUrl}/services` },
          { name: service.name, url: `${BUSINESS.siteUrl}/services/${service.slug}` },
        ]}
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
            <div className="relative w-full aspect-[1200/630] rounded-xl overflow-hidden border border-gray-100 mb-6">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
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

      {expandedContent ? (
        <>
          <section className="section-cream">
            <div className="container-narrow">
              <div className="space-y-10">
                {expandedContent.sections.map((section) => (
                  <article key={section.heading} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
                    <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">{section.heading}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-2 mb-4">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-[var(--sv-teal)] mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.steps ? (
                      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        {section.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-light">
            <div className="container-narrow">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                  FAQs: {service.name}
                </h2>
                <div className="space-y-5">
                  {expandedContent.faqs.map((faq) => (
                    <article key={faq.q}>
                      <h3 className="font-semibold text-[var(--sv-navy)] mb-2">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-cream">
            <div className="container-narrow">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">
                  {expandedContent.localFaqHeading}
                </h2>
                <div className="space-y-5">
                  {expandedContent.localFaqs.map((faq) => (
                    <article key={faq.q}>
                      <h3 className="font-semibold text-[var(--sv-navy)] mb-2">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-light">
            <div className="container-narrow">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="font-heading font-bold text-2xl text-[var(--sv-navy)] mb-4">Related Services</h2>
                <ul className="space-y-3">
                  {expandedContent.relatedLinks.map((related) => (
                    <li key={related.href} className="text-gray-700">
                      <Link href={related.href} className="font-semibold text-[var(--sv-teal)] hover:underline">
                        {related.label}
                      </Link>{" "}
                      <span>{related.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
