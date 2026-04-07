import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Schulman Vein and Laser Center",
  description:
    "Complete sitemap for Schulman Vein and Laser Center — navigate all sections, services, doctor profiles, locations, and legal pages.",
};

const sections = [
  {
    title: "Core Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Results", href: "/results" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Locations", href: "/locations" },
    ],
  },
  {
    title: "Service Pages",
    links: [
      { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
      { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
      { label: "Laser Vein Therapy (EVLT)", href: "/services/laser-vein-therapy" },
      { label: "Hand, Face & Body Veins", href: "/services/body-vein-treatment" },
      { label: "Vein Disorders & Conditions", href: "/services/vein-disorders" },
      { label: "Free Vein Screening", href: "/services/free-vein-screening" },
    ],
  },
  {
    title: "Location Pages",
    links: [
      { label: "Manhattan", href: "/locations/manhattan" },
      { label: "Manhasset", href: "/locations/manhasset" },
      { label: "Commack", href: "/locations/commack" },
    ],
  },
  {
    title: "Legal & Info",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "HTML Sitemap", href: "/sitemap-page" },
      { label: "XML Sitemap (for search engines)", href: "/sitemap.xml", external: true },
      { label: "LLMs.txt (for AI crawlers)", href: "/llms.txt", external: true },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[var(--sv-navy)] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2 text-[var(--sv-teal)]">
            Navigation
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
            Sitemap
          </h1>
          <p className="text-white/60 text-sm">
            A complete overview of all pages and sections on this site.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b text-[var(--sv-navy)] border-[var(--sv-gold)]"
              >
                {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[var(--sv-teal)]" />
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline transition-colors text-[var(--sv-teal)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-[var(--sv-teal)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-5 py-2.5 text-white transition-colors bg-[var(--sv-navy)] hover:bg-[var(--sv-teal)]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
