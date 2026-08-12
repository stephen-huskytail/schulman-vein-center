export const ANALYTICS_CONSENT_STORAGE_KEY = "schulman-analytics-consent";
export const LEAD_FORM_SUCCESS_EVENT = "schulman:lead-form-success";

/**
 * Analytics are opt-in and restricted to public informational content. New
 * routes are excluded by default until they have been reviewed for forms and
 * other sensitive health/contact data.
 */
const SAFE_INFORMATIONAL_ROUTES = new Set([
  "/about",
  "/blog",
  "/faq",
  "/locations",
  "/results",
  "/reviews",
  "/services",
  "/sitemap-page",
]);

export function isAnalyticsAllowedRoute(pathname: string): boolean {
  if (SAFE_INFORMATIONAL_ROUTES.has(pathname)) return true;

  return (
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/locations/") ||
    pathname.startsWith("/services/")
  );
}
