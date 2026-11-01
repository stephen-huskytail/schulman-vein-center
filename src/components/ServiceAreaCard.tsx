"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { serviceAreaByGroup, SERVICE_AREA_CLOSING, SERVICE_AREA_HEADING, SERVICE_AREA_INTRO_BEFORE_PHONE } from "@/lib/service-area";

// HUS-1368: full-width "Nassau County Communities We Serve" card. Rows come from src/lib/service-area.ts (verified rows only; no schema).
// Desktop (lg+): all groups open and not collapsible. Tablet/phone: each group is a disclosure, the first (North Shore) open. No-JS / SSR: everything open.
const textLink = "font-semibold text-[var(--sv-navy)] underline decoration-[var(--sv-teal)] underline-offset-4 hover:text-[var(--sv-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sv-teal)]";

export default function ServiceAreaCard() {
  const groups = serviceAreaByGroup();
  const [open, setOpen] = useState<Record<string, boolean>>(() => Object.fromEntries(groups.map((g) => [g.group, true])));
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      setDesktop(mq.matches);
      setOpen(Object.fromEntries(groups.map((g, i) => [g.group, mq.matches || i === 0])));
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="service-area-heading" data-block="service-area" className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-card md:p-8">
      <h2 id="service-area-heading">{SERVICE_AREA_HEADING}</h2>
      <p className="mb-6 max-w-3xl">
        {SERVICE_AREA_INTRO_BEFORE_PHONE}<a href="tel:5164824477" className={textLink}>516.482.4477</a> to ask about a visit.
      </p>
      <div className="space-y-4">
        {groups.map(({ group, items }) => {
          const isOpen = desktop || open[group];
          return (
            <details
              key={group}
              open={isOpen}
              className="group rounded-xl border border-gray-200"
            >
              <summary
                tabIndex={desktop ? -1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  if (!desktop) setOpen((o) => ({ ...o, [group]: !o[group] }));
                }}
                className="flex list-none cursor-pointer items-center justify-between gap-4 px-5 py-4 font-heading text-xl font-semibold text-[var(--sv-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sv-teal)] lg:cursor-default [&::-webkit-details-marker]:hidden"
              >
                <span>{group} <span className="ml-1 inline-block whitespace-nowrap font-body text-sm font-semibold uppercase tracking-wide text-[var(--sv-teal)]">{items.length} {items.length === 1 ? "community" : "communities"}</span></span>
                <span className="lg:hidden" aria-hidden="true">{isOpen ? <Minus className="h-5 w-5 text-[var(--sv-teal)]" /> : <Plus className="h-5 w-5 text-[var(--sv-teal)]" />}</span>
              </summary>
              <ul className="grid grid-cols-2 gap-x-6 px-5 pb-5 sm:grid-cols-3 lg:grid-cols-5">
                {items.map(({ name, zips }) => (
                  <li key={name} className="flex flex-col border-b border-gray-100 py-2 text-base leading-snug text-gray-700 lg:flex-row lg:items-baseline lg:justify-between lg:gap-3">
                    <span>{name}</span>
                    <span className="text-[13px] tabular-nums text-gray-500 lg:text-right lg:text-sm">{zips.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
      <p className="mt-6 text-base">{SERVICE_AREA_CLOSING}</p>
      <p className="mt-3 text-base">
        <Link href="/locations/manhasset" className={textLink}>Manhasset location</Link> · <Link href="/locations" className={textLink}>All locations</Link> · <Link href="/services/free-vein-screening" className={textLink}>Vein screening</Link>
      </p>
    </section>
  );
}
