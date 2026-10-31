import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Phone, Clock, Plus } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/utils";
import { NASSAU_COUNTY_FAQS } from "@/lib/nassau-county";
import { COPY, PAGE_URL, VARIANT, VARIANTS } from "@/lib/best-vein-doctor-nassau";

// HUS-1366 DRAFT PREVIEW (not Legal-cleared). Not in sitemap.xml / llms.txt, not linked from the nav; noindex until Stephen's go.
const variant = VARIANTS[VARIANT];
const manhasset = LOCATIONS.find((l) => l.id === "manhasset")!;
const DAYS: [keyof typeof manhasset.hours, string][] = [["mon", "Mon"], ["tue", "Tue"], ["wed", "Wed"], ["thu", "Thu"], ["fri", "Fri"], ["sat", "Sat"], ["sun", "Sun"]];

export const metadata: Metadata = {
  title: { absolute: variant.title },
  description: COPY.description,
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
  openGraph: { title: variant.title, description: COPY.description, url: PAGE_URL, type: "website", siteName: "", images: [] },
  twitter: { card: "summary", title: variant.title, description: COPY.description, images: [] },
};

const textLink = "font-semibold text-[var(--sv-navy)] underline decoration-[var(--sv-teal)] underline-offset-4 hover:text-[var(--sv-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-teal)]";
const listClass = "list-disc space-y-3 pl-6 marker:text-[var(--sv-teal)]";
const card = "rounded-2xl border border-gray-100 bg-white p-6 shadow-card md:p-8";

export default function BestVeinDoctorNassauCountyPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: variant.h1,
        description: COPY.description,
        isPartOf: { "@id": `${BUSINESS.siteUrl}/#organization` },
        about: { "@id": `${PAGE_URL}#clinic` },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${PAGE_URL}#clinic`,
        name: `${BUSINESS.name} - ${manhasset.shortName}`,
        url: `${BUSINESS.siteUrl}/locations/${manhasset.id}`,
        telephone: manhasset.phoneTel,
        image: "https://www.schulmanveincenter.com/images/hero-bg.png",
        medicalSpecialty: BUSINESS.specialty,
        address: { "@type": "PostalAddress", streetAddress: manhasset.address, addressLocality: manhasset.city, addressRegion: manhasset.state, postalCode: manhasset.zip, addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: manhasset.coordinates.latitude, longitude: manhasset.coordinates.longitude },
        parentOrganization: { "@id": `${BUSINESS.siteUrl}/#organization` },
        areaServed: manhasset.communitiesServed,
        hasMap: manhasset.mapUrl,
        physician: [
          { "@id": `${BUSINESS.siteUrl}/about#martin-schulman` },
          { "@id": `${BUSINESS.siteUrl}/about#lee-schulman` },
        ],
      },
      // Physician nodes reuse the /about @ids; names match the visible "M.D., Physician" lines. No credentials, awards or education (unverified).
      { "@type": "Physician", "@id": `${BUSINESS.siteUrl}/about#martin-schulman`, name: "Dr. Martin L. Schulman, M.D.", jobTitle: "Physician", worksFor: { "@id": `${BUSINESS.siteUrl}/#organization` } },
      { "@type": "Physician", "@id": `${BUSINESS.siteUrl}/about#lee-schulman`, name: "Dr. Lee G. Schulman, M.D.", jobTitle: "Physician", worksFor: { "@id": `${BUSINESS.siteUrl}/#organization` } },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NASSAU_COUNTY_FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumb = createBreadcrumbSchema([{ name: "Home", url: `${BUSINESS.siteUrl}/` }, { name: variant.h1, url: PAGE_URL }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-[var(--sv-navy)] py-12 md:py-16">
        <div className="container-sv grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                <li><Link href="/" className="inline-flex items-center hover:text-cyan-200">Home</Link></li>
                <li className="inline-flex items-center gap-2"><ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" /><span>{variant.h1}</span></li>
              </ol>
            </nav>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-200">{COPY.kicker}</p>
            <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">{variant.h1}</h1>
            <div className="mb-6 space-y-1 text-base leading-relaxed text-white/85 md:text-lg">
              {variant.guide.map((line, i) => (<p key={line} className={i === 0 ? "font-semibold" : undefined}>{line}</p>))}
            </div>
            <div className="gold-line mb-6" />
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{COPY.intro}</p>
          </div>
          <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/20 bg-white p-3 shadow-xl sm:p-5">
            <Image src="/images/team.jpg" alt="Portraits of the two Schulman vein doctors" width={520} height={240} priority sizes="(max-width: 520px) 90vw, 480px" className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-sv grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>If you are looking for a vein doctor in Nassau County, our <Link href="/locations/manhasset" className={textLink}>Manhasset office</Link> at 800 Community Drive, Suite 211 is where we see our Nassau County patients.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/free-vein-screening" className="btn-primary justify-center text-base">{COPY.screeningButton}</Link>
              <a href="tel:+15164824477" className="btn-outline-navy justify-center text-base"><Phone className="h-5 w-5" aria-hidden="true" />Call 516.482.4477</a>
            </div>
          </div>
          <aside aria-labelledby="office-summary" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card">
            <h2 id="office-summary" className="mb-5 font-heading text-2xl font-bold text-[var(--sv-navy)]">At a Glance</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--sv-teal)]" aria-hidden="true" /><span><strong className="block text-[var(--sv-navy)]">{BUSINESS.name}</strong>Manhasset office<br />{manhasset.address}<br />{manhasset.city}, {manhasset.state} {manhasset.zip}</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-[var(--sv-teal)]" aria-hidden="true" /><a className={textLink} href="tel:+15164824477">{manhasset.phone}</a></li>
              <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--sv-teal)]" aria-hidden="true" /><span><strong className="block text-[var(--sv-navy)]">Hours</strong>{DAYS.map(([k, label]) => (<span key={k} className="block">{label}: {manhasset.hours[k]}</span>))}</span></li>
            </ul>
            <p className="mt-5"><Link href="/locations/manhasset" className={textLink}>Manhasset location page</Link></p>
          </aside>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-sv space-y-8">
          <article className={card}>
            <h2 className="mb-4">What to Look For in a Vein Doctor or Vein Center in Nassau County</h2>
            <p className="mb-4">{COPY.lookForIntro}</p>
            <ul className={listClass}>
              {COPY.lookFor.map(([q, a]) => (<li key={q}><strong>{q}</strong> {a}</li>))}
            </ul>
            <p className="mt-4">{COPY.lookForClosing}</p>
          </article>

          <article className={card}>
            <h2 className="mb-4">Our Doctors at the Manhasset Office</h2>
            <ul className="mb-4 space-y-1 font-heading text-xl font-semibold text-[var(--sv-navy)]">
              {COPY.doctors.map((d) => (<li key={d}>{d}</li>))}
            </ul>
            <p className="mb-3">{COPY.doctorsAvailability}</p>
            <p className="mb-3">{COPY.doctorsPersonal}</p>
            <p className="mb-3">{COPY.doctorsFocus}</p>
            <p><Link href="/about" className={textLink}>Learn more about our doctors</Link></p>
          </article>

          <article className={card}>
            <h2 className="mb-4">What Happens at a Vein Screening</h2>
            <p className="mb-3">{COPY.screeningIntro}</p>
            <ul className={`${listClass} mb-5`}>
              {COPY.screeningSteps.map((s) => (<li key={s}>{s}</li>))}
            </ul>
            <p className="mb-3">{COPY.screeningPrep}</p>
            <p className="mb-3">{COPY.screeningLength}</p>
            <p>Read more about the <Link href="/services/free-vein-screening" className={textLink}>vein screening</Link>.</p>
          </article>

          <article className={card}>
            <h2 className="mb-4">Vein Conditions We Evaluate in Nassau County</h2>
            <Image src="/images/blog/spider-veins-vs-varicose-veins-differences.svg" alt="Illustrated comparison of spider veins and varicose veins" width={1200} height={675} sizes="(max-width: 1024px) 90vw, 560px" className="mb-5 h-auto w-full max-w-xl rounded-xl" />
            <p className="mb-4">{COPY.conditionsIntro}</p>
            <ul className={`${listClass} mb-5`}>
              {COPY.conditions.map(([label, href, text]) => (<li key={href}><Link href={href} className={textLink}>{label}</Link>{text ? <> {text}</> : null}</li>))}
            </ul>
            <p className="mb-4">{COPY.signs}</p>
            <p className="rounded-xl bg-[var(--sv-cream,#faf7f0)] p-4 text-base text-gray-700">{COPY.suitability}</p>
          </article>

          <article className={card}>
            <h2 className="mb-4">Our Manhasset Office</h2>
            <p className="mb-5">{COPY.officeIntro}</p>
            <h3 className="mb-2 font-heading text-xl font-semibold text-[var(--sv-navy)]">Getting there</h3>
            <p className="mb-5">{COPY.gettingThere}</p>
            <h3 className="mb-2 font-heading text-xl font-semibold text-[var(--sv-navy)]">Communities served</h3>
            <ul className={`${listClass} mb-5`}>
              {COPY.communities.map((c) => (<li key={c}>{c}</li>))}
            </ul>
            <p>For a map and directions, see our <Link href="/locations/manhasset" className={textLink}>Manhasset location page</Link>.</p>
          </article>

          <article className={card}>
            <h2 className="mb-4">Insurance and Cost</h2>
            <p className="mb-3">{COPY.insurance1}</p>
            <p>{COPY.insurance2}</p>
          </article>
        </div>
      </section>

      <section className="section-cream" aria-labelledby="best-faq-heading">
        <div className="container-narrow">
          <h2 id="best-faq-heading" className="section-title mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {NASSAU_COUNTY_FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:border-[var(--sv-teal)]/40 sm:p-6">
                <summary className="flex list-none cursor-pointer items-start justify-between gap-4 font-semibold leading-relaxed text-[var(--sv-navy)] [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-teal)]"><span>{q}</span><Plus className="mt-1 h-5 w-5 shrink-0 text-[var(--sv-teal)] transition-transform group-open:rotate-45" aria-hidden="true" /></summary>
                <p className="mt-4 leading-relaxed text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="container-narrow text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">{COPY.ctaHeading}</h2>
          <p className="mb-6 text-lg text-white/90">{COPY.ctaLine}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+15164824477" className="btn-secondary justify-center"><Phone className="h-5 w-5" aria-hidden="true" />Call 516.482.4477</a>
            <Link href="/services/free-vein-screening" className="btn-primary justify-center">{COPY.screeningButton}</Link>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/80">{COPY.suitability}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80">{COPY.disclaimer}</p>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/80"><Link href="/vein-doctor-nassau-county" className="underline underline-offset-4 hover:text-cyan-200">Read our guide to choosing a doctor and planning your Manhasset visit</Link></p>
        </div>
      </section>
    </>
  );
}
