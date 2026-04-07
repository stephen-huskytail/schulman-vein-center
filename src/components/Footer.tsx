import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--sv-navy)] text-white">
      {/* ── CTA Band ── */}
      <div className="bg-[var(--sv-teal)] py-8 md:py-10">
        <div className="container-sv flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-heading font-bold text-white">
              Ready to Get Rid of Unwanted Veins?
            </p>
            <p className="text-white/80 mt-1 text-sm">
              Free vein screening · 55+ years experience · Drive home the same day
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a href={BUSINESS.phoneHref} className="btn-secondary text-sm">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link href="/contact" className="btn-gold text-sm">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="py-12 md:py-16 border-b border-white/10">
        <div className="container-sv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-heading font-bold text-white text-xl leading-tight">Schulman Vein</p>
              <p className="font-heading text-[#C8973A] text-sm font-medium">and Laser Center</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Manhattan and Long Island's vein specialists. Exclusively dedicated to the diagnosis and treatment of vein disease for over 55 years.
            </p>
            <p className="mt-4 text-[var(--sv-gold)] font-semibold font-heading text-lg italic">
              "All We Do Is Veins™"
            </p>
            <a
              href={BUSINESS.emailHref}
              className="mt-4 flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              {BUSINESS.email}
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Varicose Vein Treatment", href: "/services/varicose-vein-treatment" },
                { label: "Spider Vein Treatment", href: "/services/spider-vein-treatment" },
                { label: "Laser Vein Therapy (EVLT)", href: "/services/laser-vein-therapy" },
                { label: "Hand & Body Vein Treatment", href: "/services/body-vein-treatment" },
                { label: "Phlebitis Treatment", href: "/services/vein-disorders" },
                { label: "Venous Leg Ulcers", href: "/services/vein-disorders" },
                { label: "Free Vein Screening", href: "/services/free-vein-screening" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sv-teal)] group-hover:bg-[var(--sv-gold)] transition-colors shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Our Doctors", href: "/about#doctors" },
                { label: "Why Choose Us", href: "/about#why-us" },
                { label: "Before & After Gallery", href: "/results" },
                { label: "Patient Reviews", href: "/reviews" },
                { label: "FAQ – About Veins", href: "/faq" },
                { label: "Insurance Coverage", href: "/" },
                { label: "Contact & Locations", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sv-teal)] group-hover:bg-[var(--sv-gold)] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Our Locations</h3>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <p className="text-xs font-bold text-[var(--sv-gold)] uppercase tracking-wider mb-1.5">
                    {loc.shortName}
                  </p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors group mb-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--sv-teal)]" />
                    <span>{loc.fullAddress}</span>
                  </a>
                  <a
                    href={loc.phoneHref}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0 text-[var(--sv-teal)]" />
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="py-5">
        <div className="container-sv flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {year} Schulman Vein and Laser Center. All rights reserved. · SEO by{" "}
            <a
              href="https://www.huskytaildigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              HuskyTail Digital Marketing
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/sitemap-page" className="hover:text-white/80 transition-colors">Sitemap</Link>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-white/80 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
