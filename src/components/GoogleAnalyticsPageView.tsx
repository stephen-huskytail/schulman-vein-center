"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MEASUREMENT_ID = "G-YPPT8SEMG5";
const GOOGLE_ADS_ID = "AW-1070427255";
const LEAD_FORM_CONVERSION_ID = "AW-1070427255/ENYNCOHM2uAcEPfYtf4D";
const CALL_FORWARDING_CONVERSION_ID = "AW-1070427255/-PziCNnZ2uAcEPfYtf4D";
const CLICK_TO_CALL_CONVERSION_ID = "AW-1070427255/pDThCNzZ2uAcEPfYtf4D";
const CALL_FORWARDING_NUMBER = "(516) 482-4477";
const CONSENT_STORAGE_KEY = "schulman-analytics-consent";
const GOOGLE_TAG_SCRIPT_SELECTOR = "script[data-schulman-google-tag]";
const ORIGINAL_PHONE_HREF_ATTRIBUTE = "data-schulman-original-phone-href";
const ORIGINAL_PHONE_TEXT_ATTRIBUTE = "data-schulman-original-phone-text";
const PHONE_NAVIGATION_TIMEOUT_MS = 1000;

export const LEAD_FORM_SUCCESS_EVENT = "schulman:lead-form-success";

type AnalyticsConsent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function preserveOriginalPhoneLinks() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link) => {
    if (!link.hasAttribute(ORIGINAL_PHONE_HREF_ATTRIBUTE)) {
      link.setAttribute(ORIGINAL_PHONE_HREF_ATTRIBUTE, link.getAttribute("href") ?? "");
    }
    if (!link.hasAttribute(ORIGINAL_PHONE_TEXT_ATTRIBUTE)) {
      link.setAttribute(ORIGINAL_PHONE_TEXT_ATTRIBUTE, link.textContent ?? "");
    }
  });
}

function sendGoogleAdsConversion(sendTo: string) {
  window.gtag?.("event", "conversion", {
    send_to: sendTo,
    value: 1,
    currency: "USD",
  });
}

function configureGoogleTags() {
  preserveOriginalPhoneLinks();
  window.gtag?.("config", MEASUREMENT_ID, { send_page_view: false });
  window.gtag?.("config", GOOGLE_ADS_ID);
  window.gtag?.("config", CALL_FORWARDING_CONVERSION_ID, {
    phone_conversion_number: CALL_FORWARDING_NUMBER,
  });
}

function loadGoogleTags(onReady: () => void) {
  const existingScript = document.querySelector<HTMLScriptElement>(GOOGLE_TAG_SCRIPT_SELECTOR);

  if (existingScript?.dataset.loaded === "true") {
    onReady();
    return;
  }

  if (existingScript) {
    existingScript.addEventListener("load", onReady, { once: true });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());

  const script = document.createElement("script");
  // One Google tag loader serves both GA4 and Google Ads.
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.async = true;
  script.dataset.schulmanGoogleTag = "true";
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
  const tagsConfiguredRef = useRef(false);

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

    if (consent !== "accepted") {
      return;
    }

    if (!tagsConfiguredRef.current) {
      configureGoogleTags();
      tagsConfiguredRef.current = true;
    }

    const sendPageView = () => {
      const currentRoute = routeRef.current;
      window.gtag?.("event", "page_view", {
        page_location: window.location.href,
        page_path: `${currentRoute.pathname}${window.location.search}`,
      });
    };

    loadGoogleTags(sendPageView);
  }, [consent, pathname]);

  useEffect(() => {
    if (consent !== "accepted") {
      return;
    }

    const onLeadFormSuccess = () => sendGoogleAdsConversion(LEAD_FORM_CONVERSION_ID);
    const onPhoneClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="tel:"]') : null;
      if (!target) {
        return;
      }

      const destination = target.href;
      if (!destination) {
        return;
      }

      event.preventDefault();
      let navigated = false;
      const navigate = () => {
        if (navigated) {
          return;
        }
        navigated = true;
        window.clearTimeout(fallbackTimer);
        window.location.assign(destination);
      };
      const fallbackTimer = window.setTimeout(navigate, PHONE_NAVIGATION_TIMEOUT_MS);

      window.gtag?.("event", "conversion", {
        send_to: CLICK_TO_CALL_CONVERSION_ID,
        value: 1,
        currency: "USD",
        event_callback: navigate,
      });
    };

    document.addEventListener(LEAD_FORM_SUCCESS_EVENT, onLeadFormSuccess);
    document.addEventListener("click", onPhoneClick, true);
    return () => {
      document.removeEventListener(LEAD_FORM_SUCCESS_EVENT, onLeadFormSuccess);
      document.removeEventListener("click", onPhoneClick, true);
    };
  }, [consent]);

  const chooseConsent = (choice: Exclude<AnalyticsConsent, null>) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Keep the visitor's choice for this page session if storage is unavailable.
    }
    setConsent(choice);
  };

  if (consent !== null) {
    return null;
  }

  return (
    <section
      aria-label="Analytics preference"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:p-5"
    >
      <p className="text-sm font-semibold text-[var(--sv-navy)]">Analytics preference</p>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        With your permission, we use Google Analytics and Google Ads measurement to understand website use and measure form and phone conversions. We do not send form details to Google.
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
