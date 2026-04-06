"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "About",
    anchor: "#about",
    children: [
      { label: "Why Choose Us", anchor: "#why-us" },
      { label: "Our Doctors", anchor: "#doctors" },
      { label: "Your First Visit", anchor: "#first-visit" },
    ],
  },
  {
    label: "Services",
    anchor: "#services",
    children: [
      { label: "Varicose Vein Treatment", anchor: "#services" },
      { label: "Spider Vein Treatment", anchor: "#services" },
      { label: "Laser Vein Therapy (EVLT)", anchor: "#services" },
      { label: "Hand, Face & Body Veins", anchor: "#services" },
      { label: "Vein Disorders", anchor: "#services" },
    ],
  },
  { label: "Results", anchor: "#gallery" },
  { label: "Reviews", anchor: "#testimonials" },
  { label: "FAQ", anchor: "#faq" },
  { label: "Locations", anchor: "#locations" },
  { label: "Contact", anchor: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        "top-[40px]",
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="container-sv">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={handleNavClick}>
            <Image
              src="https://www.schulmanveincenter.com/wp-content/uploads/2017/01/header-logo-new.png"
              alt="Schulman Vein and Laser Center"
              width={110}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.anchor}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                    "text-[var(--sv-navy)] hover:text-[var(--sv-teal)] hover:bg-[var(--sv-teal)]/5"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </a>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 w-56">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.anchor}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--sv-teal)]/5 hover:text-[var(--sv-teal)] transition-colors"
                          onClick={handleNavClick}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--sv-navy)] hover:text-[var(--sv-teal)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Free Screening
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1.5 text-sm font-bold text-[var(--sv-teal)]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:block">{BUSINESS.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[var(--sv-navy)] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[112px] z-50 xl:hidden bg-white overflow-y-auto">
          <div className="container-sv py-6">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.anchor}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[var(--sv-navy)] hover:bg-[var(--sv-teal)]/5 hover:text-[var(--sv-teal)] transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 mt-0.5 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.anchor}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[var(--sv-teal)] transition-colors rounded-lg hover:bg-[var(--sv-teal)]/5"
                          onClick={handleNavClick}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile locations */}
            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 gap-3">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.phoneHref}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--sv-cream)] hover:bg-[var(--sv-teal)]/5 transition-colors"
                >
                  <div className="icon-circle">
                    <Phone className="w-5 h-5 text-[var(--sv-teal)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--sv-navy)]">{loc.shortName}</p>
                    <p className="text-base font-bold text-[var(--sv-teal)]">{loc.phone}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-4">
              <a href="#contact" className="btn-primary w-full justify-center text-center" onClick={handleNavClick}>
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
