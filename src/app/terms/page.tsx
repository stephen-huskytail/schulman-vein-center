import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Schulman Vein and Laser Center",
  description:
    "Terms of Use for the Schulman Vein and Laser Center website. Please read these terms carefully before using our site.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-gray max-w-none prose-headings:font-heading prose-headings:text-[var(--sv-navy)] prose-a:text-[var(--sv-teal)]">

          <p>
            Welcome to the website of Schulman Vein and Laser Center ("we," "us," or "our"). By accessing or using{" "}
            <strong>schulmanveincenter.com</strong> (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use this Site.
          </p>

          <h2>1. Use of Site</h2>
          <p>
            This Site is provided for general informational purposes about our medical practice, services, and locations. You may use the Site for lawful, personal, non-commercial purposes only. You agree not to:
          </p>
          <ul>
            <li>Reproduce, distribute, or modify any content without our written consent</li>
            <li>Use automated tools to scrape, crawl, or harvest data from the Site</li>
            <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
            <li>Use the Site in any way that could damage, disable, or impair its operation</li>
          </ul>

          <h2>2. Medical Disclaimer</h2>
          <p>
            <strong>
              The content on this Site is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
            </strong>{" "}
            Always seek the advice of a qualified healthcare provider regarding any medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this Site.
          </p>
          <p>
            Submitting a contact or appointment request form does not create a doctor-patient relationship. A doctor-patient relationship is only established upon an in-person consultation and agreement between you and the treating physician.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, images, and software — is the property of Schulman Vein and Laser Center or its licensors and is protected by applicable intellectual property laws. The trademark "All We Do Is Veins™" is the exclusive property of Schulman Vein and Laser Center.
          </p>
          <p>
            You may not use, copy, reproduce, or distribute any content from this Site without our prior written permission.
          </p>

          <h2>4. Third-Party Links</h2>
          <p>
            This Site may contain links to third-party websites for your convenience. We do not control those sites and are not responsible for their content, privacy practices, or accuracy. Inclusion of a link does not imply endorsement.
          </p>

          <h2>5. Before &amp; After Photos</h2>
          <p>
            Before and after photographs displayed on this Site represent individual patient results. Results may vary. These images are provided for illustrative purposes only and are not a guarantee of the same outcome for any other patient.
          </p>

          <h2>6. Testimonials</h2>
          <p>
            Patient testimonials reflect the individual experiences of those patients. Individual results may vary and are not guaranteed. Testimonials are not intended to represent or guarantee that all patients will achieve the same or similar results.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Schulman Vein and Laser Center shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this Site or its content, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            The Site is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of this Site is also governed by our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the State of New York, without regard to its conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in New York County, New York.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page with an updated "Last updated" date. Your continued use of the Site after any modifications constitutes your acceptance of the new Terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>Questions about these Terms? Please contact us:</p>
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
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg border-2 border-[var(--sv-navy)] px-5 py-2.5 transition-colors text-[var(--sv-navy)] hover:border-[var(--sv-teal)] hover:text-[var(--sv-teal)]"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
