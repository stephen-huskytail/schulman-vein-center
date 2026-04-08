import { NextResponse } from "next/server";
import { z } from "zod";
import { LOCATIONS } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  location: z.string().min(1),
  service: z.string().optional(),
  message: z.string().min(5),
});

const TO_EMAILS = ["veinsonline@icloud.com", "info@schulmanveincenter.com"];
const CC_EMAILS = ["veinsonline1@yahoo.com"];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  const apiKey = process.env.SCHULMAN_RESEND;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please complete all required fields correctly." }, { status: 400 });
  }

  const data = parsed.data;
  const selectedLocation = LOCATIONS.find((loc) => loc.id === data.location);
  const preferredLocation = selectedLocation?.shortName ?? data.location;
  const subject = `New Consultation Request - ${data.name}`;

  const text = [
    "New consultation request submitted from schulmanveincenter.com",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Preferred Location: ${preferredLocation}`,
    `Area of Concern: ${data.service || "Not specified"}`,
    "",
    "Patient Notes:",
    data.message,
  ].join("\n");

  const html = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Preferred Location:</strong> ${escapeHtml(preferredLocation)}</p>
    <p><strong>Area of Concern:</strong> ${escapeHtml(data.service || "Not specified")}</p>
    <p><strong>Patient Notes:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
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
    return NextResponse.json({ error: "Unable to send your request right now. Please call us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
