"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MEASUREMENT_ID = "G-YPPT8SEMG5";
const CONSENT_STORAGE_KEY = "schulman-analytics-consent";
const GOOGLE_ANALYTICS_SCRIPT_SELECTOR = "script[data-schulman-google-analytics]";

type AnalyticsConsent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// The home page contains the consultation-request form, so it is protected too.
function isProtectedRoute(pathname: string) {
  return pathname === "/" || pathname === "/contact" || pathname.startsWith("/contact/");
}

function removeGoogleAnalytics() {
  document.querySelector(GOOGLE_ANALYTICS_SCRIPT_SELECTOR)?.remove();
  delete window.gtag;
  delete window.dataLayer;
}

function loadGoogleAnalytics(onReady: () => void) {
  const existingScript = document.querySelector<HTMLScriptElement>(
    GOOGLE_ANALYTICS_SCRIPT_SELECTOR,
  );

  if (existingScript?.dataset.loaded === "true") {
    onReady();
    return;
  }

  if (existingScript) {
    existingScript.addEventListener("load", onReady, { once: true });
    return;
  }

  window.dataLayer = [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.async = true;
  script.dataset.schulmanGoogleAnalytics = "true";
  script.addEventListener(
    "load",
    () => {
      script.dataset.loaded = "true";
      onReady();
    },
    { once: true },
  );
  document.head.appendChild(script);
}

export default function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent>(null);
  const routeRef = useRef({ pathname });

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      setConsent(storedConsent === "accepted" || storedConsent === "declined" ? storedConsent : null);
    } catch {
      setConsent(null);
    }
  }, []);

  useEffect(() => {
    routeRef.current = { pathname };

    if (isProtectedRoute(pathname)) {
      removeGoogleAnalytics();
      return;
    }

    if (consent !== "accepted") {
      return;
    }

    const sendPageView = () => {
      const currentRoute = routeRef.current;
      if (isProtectedRoute(currentRoute.pathname) || consent !== "accepted") {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
      window.gtag("js", new Date());
      window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: `${currentRoute.pathname}${window.location.search}`,
      });
    };

    loadGoogleAnalytics(sendPageView);
  }, [consent, pathname]);

  const chooseConsent = (choice: Exclude<AnalyticsConsent, null>) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Keep the visitor's choice for this page session if storage is unavailable.
    }
    setConsent(choice);
  };

  if (isProtectedRoute(pathname) || consent !== null) {
    return null;
  }

  return (
    <section
      aria-label="Analytics preference"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:p-5"
    >
      <p className="text-sm font-semibold text-[var(--sv-navy)]">Analytics preference</p>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        With your permission, we use Google Analytics to understand how eligible public pages are used.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => chooseConsent("accepted")} className="btn-primary text-sm">
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("declined")}
          className="rounded-lg border-2 border-[var(--sv-navy)] px-4 py-2 text-sm font-semibold text-[var(--sv-navy)] transition-colors hover:border-[var(--sv-teal)] hover:text-[var(--sv-teal)]"
        >
          Decline
        </button>
      </div>
    </section>
  );
}
