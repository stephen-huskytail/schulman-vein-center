import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Schulman Vein and Laser Center",
  description:
    "Complete sitemap for Schulman Vein and Laser Center — navigate all sections, services, doctor profiles, locations, and legal pages.",
};

const sections = [
  {
    title: "Main Page Sections",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Our Services", href: "/#services" },
      { label: "Why Choose Us", href: "/#why-us" },
      { label: "Meet the Doctors", href: "/#doctors" },
      { label: "Your First Visit", href: "/#first-visit" },
      { label: "Before & After Gallery", href: "/#gallery" },
      { label: "Patient Testimonials", href: "/#testimonials" },
      { label: "FAQ – About Veins", href: "/#faq" },
      { label: "Insurance Coverage", href: "/#insurance" },
      { label: "Contact & Locations", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Varicose Vein Treatment", href: "/#services" },
      { label: "Spider Vein Treatment (Sclerotherapy)", href: "/#services" },
      { label: "Endovenous Laser Therapy (EVLT)", href: "/#services" },
      { label: "Hand & Body Vein Treatment", href: "/#services" },
      { label: "Phlebitis Treatment", href: "/#services" },
      { label: "Venous Leg Ulcer Treatment", href: "/#services" },
    ],
  },
  {
    title: "Our Doctors",
    links: [
      { label: "Dr. Martin L. Schulman, M.D.", href: "/#doctors" },
      { label: "Dr. Lee G. Schulman, M.D.", href: "/#doctors" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Manhattan — 1165 Park Ave, New York, NY 10128", href: "/#contact" },
      { label: "Manhasset — 800 Community Dr #211, Manhasset, NY 11030", href: "/#contact" },
      { label: "Commack — 353 Veterans Memorial Hwy #206, Commack, NY 11725", href: "/#contact" },
    ],
  },
  {
    title: "Legal & Info",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "XML Sitemap (for search engines)", href: "/sitemap.xml", external: true },
      { label: "LLMs.txt (for AI crawlers)", href: "/llms.txt", external: true },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: "#0B2545" }} className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#0D7F9B" }}>
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
                className="text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b"
                style={{ color: "#0B2545", borderColor: "#C8973A" }}
              >
                {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-start gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: "#0D7F9B" }}
                    />
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline transition-colors"
                        style={{ color: "#0D7F9B" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-[#0D7F9B] transition-colors"
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
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-5 py-2.5 text-white transition-colors"
            style={{ backgroundColor: "#0B2545" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
