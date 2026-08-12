"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  isAnalyticsAllowedRoute,
} from "@/lib/analytics-policy";

const MEASUREMENT_ID = "G-YPPT8SEMG5";
const GOOGLE_ADS_ID = "AW-1070427255";
const CALL_FORWARDING_CONVERSION_ID = "AW-1070427255/-PziCNnZ2uAcEPfYtf4D";
const CLICK_TO_CALL_CONVERSION_ID = "AW-1070427255/pDThCNzZ2uAcEPfYtf4D";
const CALL_FORWARDING_NUMBER = "(516) 482-4477";
const GOOGLE_TAG_SCRIPT_SELECTOR = "script[data-schulman-google-tag]";
const ORIGINAL_PHONE_HREF_ATTRIBUTE = "data-schulman-original-phone-href";
const ORIGINAL_PHONE_TEXT_ATTRIBUTE = "data-schulman-original-phone-text";
const PHONE_NAVIGATION_TIMEOUT_MS = 1000;

type AnalyticsConsent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function preservePhoneLink(link: HTMLAnchorElement) {
  if (!link.hasAttribute(ORIGINAL_PHONE_HREF_ATTRIBUTE)) {
    link.setAttribute(ORIGINAL_PHONE_HREF_ATTRIBUTE, link.getAttribute("href") ?? "");
  }
  if (!link.hasAttribute(ORIGINAL_PHONE_TEXT_ATTRIBUTE)) {
    link.setAttribute(ORIGINAL_PHONE_TEXT_ATTRIBUTE, link.textContent ?? "");
  }
}

function preserveOriginalPhoneLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach(preservePhoneLink);
}

function observeOriginalPhoneLinks() {
  preserveOriginalPhoneLinks();
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        if (node.matches('a[href^="tel:"]')) preservePhoneLink(node as HTMLAnchorElement);
        preserveOriginalPhoneLinks(node);
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  return observer;
}

function sendGoogleAdsConversion(sendTo: string, callback?: () => void) {
  window.gtag?.("event", "conversion", {
    send_to: sendTo,
    value: 1,
    currency: "USD",
    ...(callback ? { event_callback: callback } : {}),
  });
}

function configureGoogleTags() {
  window.gtag?.("config", MEASUREMENT_ID, { send_page_view: false });
  window.gtag?.("config", GOOGLE_ADS_ID);
  window.gtag?.("config", CALL_FORWARDING_CONVERSION_ID, {
    phone_conversion_number: CALL_FORWARDING_NUMBER,
  });
}

function loadGoogleTags(onReady: () => void) {
  const existingScript = document.querySelector<HTMLScriptElement>(GOOGLE_TAG_SCRIPT_SELECTOR);
  if (existingScript?.dataset.loaded === "true") return onReady();
  if (existingScript) {
    existingScript.addEventListener("load", onReady, { once: true });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  const script = document.createElement("script");
  // This is the sole Google tag loader; GTM is intentionally not used.
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.async = true;
  script.dataset.schulmanGoogleTag = "true";
  script.addEventListener("load", () => {
    script.dataset.loaded = "true";
    onReady();
  }, { once: true });
  document.head.appendChild(script);
}

function removeGoogleTrackingArtifacts(): boolean {
  const scripts = Array.from(document.querySelectorAll<HTMLScriptElement>(GOOGLE_TAG_SCRIPT_SELECTOR));
  if (scripts.length === 0) return false;

  scripts.forEach((script) => script.remove());
  delete window.gtag;
  delete window.dataLayer;
  return true;
}

export default function AnalyticsBoundary() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent>(null);
  const allowed = isAnalyticsAllowedRoute(pathname);
  const configuredRef = useRef(false);
  const excludedRouteReloadRef = useRef(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
      setConsent(stored === "accepted" || stored === "declined" ? stored : null);
    } catch {
      setConsent(null);
    }
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || allowed || excludedRouteReloadRef.current) return;

    // The root layout survives App Router and history navigation. If this
    // document previously loaded our tag, remove its page artifacts before
    // replacing it so excluded routes start without this boundary or tag.
    if (!removeGoogleTrackingArtifacts()) return;
    excludedRouteReloadRef.current = true;
    window.location.replace(window.location.href);
  }, [allowed, consent, pathname]);

  useEffect(() => {
    if (consent !== "accepted" || !allowed) return;
    // Preserve current and future original phone values before Ads configuration.
    const observer = observeOriginalPhoneLinks();
    if (!configuredRef.current) {
      configureGoogleTags();
      configuredRef.current = true;
    }
    loadGoogleTags(() => {
      if (isAnalyticsAllowedRoute(window.location.pathname)) {
        window.gtag?.("event", "page_view", { page_path: window.location.pathname });
      }
    });
    return () => observer.disconnect();
  }, [allowed, consent, pathname]);

  useEffect(() => {
    if (consent !== "accepted" || !allowed) return;
    const onPhoneClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="tel:"]') : null;
      if (!target?.href) return;
      const destination = target.href;
      event.preventDefault();
      let navigated = false;
      const navigate = () => {
        if (navigated) return;
        navigated = true;
        window.clearTimeout(fallbackTimer);
        window.location.assign(destination);
      };
      const fallbackTimer = window.setTimeout(navigate, PHONE_NAVIGATION_TIMEOUT_MS);
      sendGoogleAdsConversion(CLICK_TO_CALL_CONVERSION_ID, navigate);
    };
    document.addEventListener("click", onPhoneClick, true);
    return () => {
      document.removeEventListener("click", onPhoneClick, true);
    };
  }, [allowed, consent]);

  const chooseConsent = (choice: Exclude<AnalyticsConsent, null>) => {
    try { window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice); } catch { /* session-only choice */ }
    setConsent(choice);
  };

  if (!allowed) return null;
  return <>
    {consent === null && <section aria-label="Analytics preference" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:p-5">
      <p className="text-sm font-semibold text-[var(--sv-navy)]">Analytics preference</p>
      <p className="mt-1 text-sm leading-6 text-gray-600">With your permission, we use Google Analytics and Google Ads on selected informational pages. We do not send form details to analytics providers.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => chooseConsent("accepted")} className="btn-primary text-sm">Accept analytics</button>
        <button type="button" onClick={() => chooseConsent("declined")} className="rounded-lg border-2 border-[var(--sv-navy)] px-4 py-2 text-sm font-semibold text-[var(--sv-navy)] transition-colors hover:border-[var(--sv-teal)] hover:text-[var(--sv-teal)]">Decline</button>
      </div>
    </section>}
  </>;
}
