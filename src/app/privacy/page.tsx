import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Schulman Vein and Laser Center",
  description:
    "Privacy Policy for Schulman Vein and Laser Center. Learn how we collect, use, and protect your personal and health information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const updated = "April 1, 2025";

  return (
    <div className="bg-white min-h-screen">
      {/* Header bar */}
      <div className="bg-[var(--sv-navy)] py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2 text-[var(--sv-teal)]">
            Legal
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-gray max-w-none prose-headings:font-heading prose-headings:text-[var(--sv-navy)] prose-a:text-[var(--sv-teal)]">

          <p>
            Schulman Vein and Laser Center ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard information you provide when you visit our website{" "}
            <strong>schulmanveincenter.com</strong> or contact our offices.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, phone number, email address, and mailing address when you submit an inquiry or appointment request form.
            </li>
            <li>
              <strong>Health information</strong> — symptoms, treatment areas, or medical questions you voluntarily share in form submissions or calls. This information is treated as Protected Health Information (PHI) under HIPAA.
            </li>
            <li>
              <strong>Usage data</strong> — when you choose to enable analytics, Google Analytics and Google Ads may collect information about pages visited, time on site, browser type, IP address, referring URL, and website conversion interactions.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to appointment requests and inquiries</li>
            <li>Schedule consultations and follow up on treatment inquiries</li>
            <li>Send appointment reminders and health-related communications (with your consent)</li>
            <li>Improve our website and marketing communications</li>
            <li>Comply with legal obligations including HIPAA</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h2>3. HIPAA Notice</h2>
          <p>
            As a medical practice, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). Any health-related information you share with us is treated as PHI and is handled in accordance with our HIPAA Notice of Privacy Practices, available upon request at any of our offices. We use HIPAA-compliant systems to transmit and store health information.
          </p>

          <h2>4. Cookies &amp; Analytics</h2>
          <p>
            Google Analytics and Google Ads measurement load only after you select “Accept analytics” in the analytics preference prompt. If you select “Decline,” neither Google tag loads. With consent, Google Ads may measure successful appointment-request submissions and calls initiated from website phone links; form details, health information, and phone numbers are not sent as conversion-event data.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>We may share limited information with trusted service providers who assist us in operating our website and running our practice, including:</p>
          <ul>
            <li>Email and appointment scheduling platforms</li>
            <li>Google Analytics and Google Ads (website analytics and conversion measurement)</li>
            <li>Vercel (website hosting)</li>
          </ul>
          <p>These providers are contractually obligated to protect your data and may not use it for their own purposes.</p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to or copies of your personal data we hold</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data, subject to legal retention requirements</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@SchulmanVeinAndLaserCenter.com">
              info@SchulmanVeinAndLaserCenter.com
            </a>.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The most current version will always be posted on this page with the "Last updated" date above. Continued use of our website after changes constitutes acceptance of the revised policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@SchulmanVeinAndLaserCenter.com">info@SchulmanVeinAndLaserCenter.com</a></li>
            <li><strong>Manhattan:</strong> 1165 Park Avenue, New York, NY 10128 · <a href="tel:2129870500">212.987.0500</a></li>
            <li><strong>Manhasset:</strong> 800 Community Drive, Suite 211, Manhasset, NY 11030 · <a href="tel:5164824477">516.482.4477</a></li>
            <li><strong>Commack:</strong> 353 Veterans Memorial Highway, Suite 206, Commack, NY 11725 · <a href="tel:6315434599">631.543.4599</a></li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-5 py-2.5 text-white transition-colors bg-[var(--sv-navy)] hover:bg-[var(--sv-teal)]"
          >
            ← Back to Home
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg border-2 border-[var(--sv-navy)] px-5 py-2.5 transition-colors text-[var(--sv-navy)] hover:border-[var(--sv-teal)] hover:text-[var(--sv-teal)]"
          >
            Terms of Use →
          </Link>
        </div>
      </div>
    </div>
  );
}
