"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CallNowButtonProps = {
  className?: string;
  variant?: "primary" | "outline" | "compact" | "secondary" | "custom";
  label?: string;
  iconSize?: string;
};

export default function CallNowButton({
  className,
  variant = "primary",
  label = "Call Now",
  iconSize,
}: CallNowButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open]);

  const baseStyles = {
    primary: "btn-primary",
    outline: "btn-outline-navy",
    secondary: "btn-secondary text-sm",
    compact:
      "flex items-center gap-1.5 text-sm font-semibold text-[var(--sv-navy)] hover:text-[var(--sv-teal)] transition-colors",
    custom: "",
  };

  const iconClass = iconSize || "w-4 h-4";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(baseStyles[variant], className)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Phone className={iconClass} />
        {label}
      </button>

      {open && (
        <div
          className="absolute top-full mt-2 right-0 z-[70] w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
          role="dialog"
          aria-label="Choose a location to call"
        >
          <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-100">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Choose Location
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>
          <div className="py-1">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={loc.phoneHref}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--sv-teal)]/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                <div className="icon-circle w-9 h-9 shrink-0">
                  <Phone className="w-4 h-4 text-[var(--sv-teal)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--sv-navy)]">
                    {loc.shortName}
                  </p>
                  <p className="text-sm text-gray-600">{loc.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
