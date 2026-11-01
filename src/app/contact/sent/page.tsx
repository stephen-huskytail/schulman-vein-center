import type { Metadata } from "next";

// HUS-1370: static result page for a native (no-JavaScript) form post. The URL never carries form data.
// Text reuses the lead form's existing success message.
export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function ContactSentPage() {
  return (
    <section className="section-gray">
      <div className="container-sv max-w-2xl py-16 text-center">
        <h1 className="mb-4 font-heading text-3xl font-bold text-[var(--sv-navy)]">Request Received!</h1>
        <p className="text-gray-700">
          Thank you for reaching out to Schulman Vein and Laser Center. We&apos;ll contact you within 1 business day to confirm your appointment.
        </p>
      </div>
    </section>
  );
}
