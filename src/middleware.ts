import { NextResponse, type NextRequest } from "next/server";

// HUS-1370: old links can carry lead-form fields in the query string (from the former native GET
// fallback). Strip them with a redirect BEFORE any page HTML (and therefore any tag) loads.
// `location` is kept: it is the site's own office selector (?location=manhasset), not form content.
// This only runs when one of these keys is present (see `config.matcher`); it never logs the URL.
const SENSITIVE_QUERY_KEYS = ["name", "phone", "email", "message", "service", "website", "formStartedAt"];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let changed = false;

  for (const key of [...url.searchParams.keys()]) {
    if (SENSITIVE_QUERY_KEYS.some((sensitive) => sensitive.toLowerCase() === key.toLowerCase())) {
      url.searchParams.delete(key);
      changed = true;
    }
  }

  if (!changed) {
    return NextResponse.next();
  }

  const response = NextResponse.redirect(url, 303);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Referrer-Policy", "no-referrer");
  return response;
}

export const config = {
  matcher: [
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "name" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "phone" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "email" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "message" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "service" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "website" }] },
    { source: "/((?!_next/static|_next/image|favicon.ico).*)", has: [{ type: "query", key: "formStartedAt" }] },
  ],
};
