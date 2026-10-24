import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NASSAU_COUNTY_FAQS } from "@/lib/nassau-county";

const canonical = "https://www.schulmanveincenter.com/vein-doctor-nassau-county";
const title = "Vein Doctor in Nassau County, NY";
const description = "Looking for a vein doctor in Nassau County? Learn what to ask and find our Manhasset office at 800 Community Drive. Call 516.482.4477.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["vein doctor Nassau County", "vein specialist Nassau County", "vein clinic Nassau County"],
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website", siteName: "", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

const textLink = "font-semibold text-[var(--sv-navy)] underline decoration-[var(--sv-teal)] underline-offset-4 hover:text-[var(--sv-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-teal)]";
const listClass = "list-disc space-y-3 pl-6 marker:text-[var(--sv-teal)]";

export default function NassauCountyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NASSAU_COUNTY_FAQS.map(({ q, a }) => ({
      "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Nassau County · Manhasset"
        eyebrowClassName="text-cyan-200"
        title="Vein Doctor Serving Nassau County from Manhasset"
        description="What to ask when choosing a vein doctor, what a screening includes, and where to find our Manhasset office."
        breadcrumbs={[
          { name: "Home", url: "https://www.schulmanveincenter.com/" },
          { name: "Vein Doctor in Nassau County", url: canonical },
        ]}
      />

      <section className="section-cream">
        <div className="container-sv grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>If you are looking for a vein doctor in Nassau County, our <Link href="/locations/manhasset" className={textLink}>Manhasset office</Link> at 800 Community Drive, Suite 211 is where we see our Nassau County patients.</p>
            <p>A <Link href="/services/free-vein-screening" className={textLink}>vein screening</Link> with one of our doctors helps you learn what is going on with your veins before you decide on anything.</p>
            <a href="tel:5164824477" className="btn-primary justify-center text-base"><Phone className="h-5 w-5" aria-hidden="true" />Call 516.482.4477</a>
          </div>
          <aside aria-labelledby="office-summary" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card">
            <h2 id="office-summary" className="mb-5 font-heading text-2xl font-bold text-[var(--sv-navy)]">At a Glance</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--sv-teal)]" aria-hidden="true" /><span><strong className="block text-[var(--sv-navy)]">Manhasset office</strong>800 Community Dr #211<br />Manhasset, NY 11030</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-[var(--sv-teal)]" aria-hidden="true" /><a className={textLink} href="tel:5164824477">516.482.4477</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-light">
        <div className="container-narrow space-y-12 text-gray-700 [&_h2]:mb-5 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--sv-navy)] md:[&_h2]:text-3xl [&_p]:leading-relaxed">
          <article>
            <h2>What to Look For in a Vein Doctor in Nassau County</h2>
            <p className="mb-5">Searching for a vein specialist in Nassau County brings up many kinds of clinics. These questions make them easier to compare:</p>
            <ul className={listClass}>
              <li><strong>Is the practice focused on veins?</strong> Vein care is all we do.</li>
              <li><strong>Who evaluates and treats you?</strong> Find out who will personally evaluate and treat you.</li>
              <li><strong>Is imaging used when it is appropriate?</strong> Ask the doctor whether imaging is appropriate for your evaluation.</li>
              <li><strong>Will you know the cost and coverage before you decide?</strong> Ask how coverage and costs are handled before you commit.</li>
            </ul>
          </article>
          <article>
            <h2>Vein Conditions We Evaluate in Nassau County</h2>
            <p className="mb-5">Vein problems range from small surface veins to symptoms that change how your legs feel day to day. Learn more about:</p>
            <ul className={`${listClass} mb-5`}>
              <li><Link href="/services/varicose-vein-treatment" className={textLink}>Varicose veins</Link></li>
              <li><Link href="/services/spider-vein-treatment" className={textLink}>Spider veins</Link></li>
              <li><Link href="/services/laser-vein-therapy" className={textLink}>Laser vein therapy (EVLT)</Link></li>
              <li><Link href="/services/vein-disorders" className={textLink}>Other vein disorders and conditions</Link></li>
            </ul>
            <p>Signs worth having checked include aching, heaviness, swelling or cramping in the legs, and visible veins on the legs, ankles or feet. Symptoms like these can have different causes, and only an exam can tell you which applies to you. Any recommendation depends on that evaluation.</p>
          </article>
          <article>
            <h2>What Happens at a Vein Screening</h2>
            <p className="mb-5">During your visit:</p>
            <ul className={`${listClass} mb-5`}>
              <li>We review your medical history.</li>
              <li>The doctor examines your veins while you stand.</li>
              <li>You receive a preliminary physician assessment.</li>
              <li>We talk through treatment options and insurance considerations.</li>
            </ul>
            <p>Wear loose clothing that allows access above the knee, and skip lotion on your legs that day. There is no special preparation: eat and drink normally and arrive a few minutes early. Read more about the <Link href="/services/free-vein-screening" className={textLink}>vein screening</Link>.</p>
          </article>
          <article>
            <h2>Getting to Our Nassau County Vein Office</h2>
            <p>Our office is at 800 Community Drive, Suite 211, in Manhasset. For a map and directions, see our <Link href="/locations/manhasset" className={textLink}>Manhasset location page</Link>.</p>
          </article>
          <article>
            <h2>Insurance and Cost</h2>
            <p>Whether a treatment is considered medically necessary depends on your symptoms and your plan. If you plan to submit an insurance claim, check whether your plan requires a referral from your primary care physician.</p>
          </article>
          <article>
            <h2>Meet the Doctors</h2>
            <p>Please call ahead if you would like to schedule with your preferred doctor. Learn more <Link href="/about#doctors" className={textLink}>about our doctors</Link>.</p>
          </article>
        </div>
      </section>

      <section className="section-cream" aria-labelledby="county-faq-heading">
        <div className="container-narrow">
          <h2 id="county-faq-heading" className="section-title mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {NASSAU_COUNTY_FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                <summary className="cursor-pointer font-semibold leading-relaxed text-[var(--sv-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-teal)]">{q}</summary>
                <p className="mt-4 leading-relaxed text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="container-narrow text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">Ready to Have Your Veins Checked?</h2>
          <p className="mb-6 text-lg text-white/90">Call our Manhasset office.</p>
          <a href="tel:5164824477" className="btn-secondary justify-center"><Phone className="h-5 w-5" aria-hidden="true" />Call 516.482.4477</a>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/80">This page is general information, not medical advice. Evaluations and recommendations depend on your individual condition.</p>
        </div>
      </section>
    </>
  );
}
