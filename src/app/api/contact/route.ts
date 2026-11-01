import { NextResponse } from "next/server";
import { z } from "zod";
import { LOCATIONS } from "@/lib/constants";
import {
  MAX_FORM_COMPLETION_MS,
  MIN_FORM_COMPLETION_MS,
  SERVICES_LIST,
} from "@/lib/lead-form";

const locationIds = new Set(LOCATIONS.map((loc) => loc.id));
const allowedServices = new Set<string>(SERVICES_LIST);

const optionalTrimmedString = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z.string().max(max).optional().or(z.literal("")),
  );

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(25)
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15 && !/^(\d)\1+$/.test(digits);
    }),
  email: z.string().trim().email().max(254).transform((email) => email.toLowerCase()),
  location: z.string().trim().refine((value) => locationIds.has(value)),
  service: optionalTrimmedString(80).refine((value) => !value || allowedServices.has(value)),
  message: optionalTrimmedString(2000),
  website: optionalTrimmedString(200),
  formStartedAt: z.preprocess(
    (value) => (typeof value === "number" ? value.toString() : value),
    z.string().trim().max(30).optional().or(z.literal("")),
  ),
});

const TO_EMAILS = ["info@schulmanveincenter.com", "info@schulmanveinandlasercenter.com"];
const CC_EMAILS = ["veinsonline@icloud.com", "veinsonline1@yahoo.com"];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPhoneForEmail(value: string) {
  const raw = value.trim();
  const digits = raw.replace(/\D/g, "");
  const nationalDigits = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (nationalDigits.length === 10) {
    return {
      display: `${nationalDigits.slice(0, 3)}.${nationalDigits.slice(3, 6)}.${nationalDigits.slice(6)}`,
      tel: nationalDigits,
    };
  }

  return {
    display: raw,
    tel: digits.length >= 10 ? digits : "",
  };
}

function containsUrlOrMarkup(value: string) {
  return /(https?:\/\/|www\.|<[^>]+>|\[[^\]]*url=)/i.test(value);
}

function looksLikeRandomToken(value: string) {
  const trimmed = value.trim();

  if (!trimmed || /\s/.test(trimmed)) {
    return false;
  }

  const letters = trimmed.replace(/[^a-z]/gi, "");
  const compact = trimmed.replace(/[^a-z0-9]/gi, "");

  if (letters.length < 14 || compact.length < 14) {
    return false;
  }

  const vowels = (letters.match(/[aeiouy]/gi) ?? []).length;
  const consonants = (letters.match(/[bcdfghjklmnpqrstvwxz]/gi) ?? []).length;
  const upper = (letters.match(/[A-Z]/g) ?? []).length;
  const lower = (letters.match(/[a-z]/g) ?? []).length;
  const caseTransitions = (letters.match(/[a-z][A-Z]|[A-Z][a-z]/g) ?? []).length;

  return (
    upper >= 3 &&
    lower >= 3 &&
    caseTransitions >= 4 &&
    consonants / Math.max(vowels, 1) >= 2.4
  );
}

function hasSuspiciousEmailLocalPart(email: string) {
  const [localPart] = email.split("@");
  const dotCount = (localPart.match(/\./g) ?? []).length;
  const digitCount = (localPart.match(/\d/g) ?? []).length;

  return localPart.length >= 14 && dotCount >= 4 && digitCount >= 2;
}

function getSpamReason(data: z.infer<typeof contactSchema>): "honeypot" | "timing" | "content-pattern" | null {
  if (data.website) {
    return "honeypot";
  }

  const startedAt = Number(data.formStartedAt);
  const elapsedMs = Date.now() - startedAt;

  if (
    !Number.isFinite(startedAt) ||
    elapsedMs < MIN_FORM_COMPLETION_MS ||
    elapsedMs > MAX_FORM_COMPLETION_MS
  ) {
    return "timing";
  }

  const content = [data.name, data.phone, data.email, data.service, data.message]
    .filter(Boolean)
    .join(" ");
  let score = 0;

  if (containsUrlOrMarkup(content)) score += 2;
  if (looksLikeRandomToken(data.name)) score += 2;
  if (looksLikeRandomToken(data.message || "")) score += 2;
  if (hasSuspiciousEmailLocalPart(data.email)) score += 1;

  return score >= 3 ? "content-pattern" : null;
}

type SubmissionOutcome =
  | { kind: "not-configured" }
  | { kind: "invalid" }
  | { kind: "suppressed"; reason: "honeypot" | "timing" | "content-pattern" }
  | { kind: "send-failed" }
  | { kind: "sent" };

// Shared by the JSON (hydrated) path and the native form-post path: the same validation, spam
// checks, recipients and sender for both.
async function processSubmission(input: unknown): Promise<SubmissionOutcome> {
  const apiKey = process.env.SCHULMAN_RESEND;

  if (!apiKey) {
    return { kind: "not-configured" };
  }

  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return { kind: "invalid" };
  }

  const data = parsed.data;
  const spamReason = getSpamReason(data);

  if (spamReason) {
    console.warn("Suppressed likely automated consultation request", { reason: spamReason });
    return { kind: "suppressed", reason: spamReason };
  }

  const selectedLocation = LOCATIONS.find((loc) => loc.id === data.location);
  const preferredLocation = selectedLocation?.shortName ?? data.location;
  const subject = `New Consultation Request - ${data.name}`;

  const messageText = data.message || "Not specified";
  const formattedPhone = formatPhoneForEmail(data.phone);
  const phoneText = formattedPhone.tel
    ? `${formattedPhone.display} (tel:${formattedPhone.tel})`
    : formattedPhone.display;

  const text = [
    "New consultation request submitted from schulmanveincenter.com",
    "",
    `Name: ${data.name}`,
    `Phone: ${phoneText}`,
    `Email: ${data.email}`,
    `Preferred Location: ${preferredLocation}`,
    `Area of Concern: ${data.service || "Not specified"}`,
    "",
    "Patient Notes:",
    messageText,
  ].join("\n");

  const phoneHtml = formattedPhone.tel
    ? `<a href="tel:${formattedPhone.tel}">${escapeHtml(formattedPhone.display)}</a>`
    : escapeHtml(formattedPhone.display);

  const html = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${phoneHtml}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Preferred Location:</strong> ${escapeHtml(preferredLocation)}</p>
    <p><strong>Area of Concern:</strong> ${escapeHtml(data.service || "Not specified")}</p>
    <p><strong>Patient Notes:</strong></p>
    <p>${escapeHtml(messageText).replaceAll("\n", "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Schulman Vein Center <onboarding@resend.dev>",
      to: TO_EMAILS,
      cc: CC_EMAILS,
      reply_to: data.email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend API error:", errorBody);
    return { kind: "send-failed" };
  }

  return { kind: "sent" };
}

// HUS-1370: native (no-JavaScript or pre-hydration) form posts. Same rules as the JSON path; the
// answer is a 303 to a static page whose URL never contains form data. Submitted values are never
// echoed, logged or put in a URL.
const NATIVE_MAX_BODY_BYTES = 16 * 1024;

function nativeRedirect(path: "/contact/sent" | "/contact/not-sent") {
  // Relative, fixed same-origin Location: never built from request input.
  return new Response(null, { status: 303, headers: { Location: path, "Cache-Control": "no-store" } });
}

function isSameOriginPost(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true; // some browsers omit Origin on same-origin form posts
  try {
    return new URL(origin).host === new URL(req.url).host;
  } catch {
    return false;
  }
}

async function handleNativeFormPost(req: Request) {
  const declaredLength = Number(req.headers.get("content-length") || "0");

  if (!isSameOriginPost(req) || declaredLength > NATIVE_MAX_BODY_BYTES) {
    return nativeRedirect("/contact/not-sent");
  }

  const form = await req.formData().catch(() => null);

  if (!form) {
    return nativeRedirect("/contact/not-sent");
  }

  const input: Record<string, string> = {};
  for (const key of ["name", "phone", "email", "location", "service", "message", "website", "formStartedAt"]) {
    const value = form.get(key);
    if (typeof value === "string") input[key] = value;
  }

  const outcome = await processSubmission(input);

  switch (outcome.kind) {
    case "sent":
      return nativeRedirect("/contact/sent");
    case "suppressed":
      // Honeypot and content-pattern keep the existing "apparent success" behaviour. A native post
      // cannot carry the hydration-time timestamp, so a timing failure is NOT shown as success:
      // the visitor is sent to the not-sent page with the phone numbers instead of a silent drop.
      return nativeRedirect(outcome.reason === "timing" ? "/contact/not-sent" : "/contact/sent");
    default:
      return nativeRedirect("/contact/not-sent");
  }
}

export async function POST(req: Request) {
  const contentType = (req.headers.get("content-type") || "").toLowerCase();

  if (contentType.startsWith("application/x-www-form-urlencoded") || contentType.startsWith("multipart/form-data")) {
    return handleNativeFormPost(req);
  }

  const json = await req.json().catch(() => null);
  const outcome = await processSubmission(json);

  switch (outcome.kind) {
    case "not-configured":
      return NextResponse.json(
        { error: "Email service is not configured yet. Please try again later." },
        { status: 500 },
      );
    case "invalid":
      return NextResponse.json({ error: "Please complete all required fields correctly." }, { status: 400 });
    case "suppressed":
      return NextResponse.json({ ok: true });
    case "send-failed":
      return NextResponse.json({ error: "Unable to send your request right now. Please call us directly." }, { status: 502 });
    case "sent":
      return NextResponse.json({ ok: true });
  }
}
