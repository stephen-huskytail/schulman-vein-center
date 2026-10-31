import { TESTIMONIALS } from "@/lib/constants";
import { PATIENT_VIDEOS } from "@/lib/patient-videos";
import PatientVideoReviews from "@/components/PatientVideoReviews";
import { EXPERIENCES_LINE } from "@/lib/nassau-county-page";

// HUS-1366 Route A: the six published testimonials (verbatim, name and town as published) and the four patient video reviews, kept as ONE separable block
// at Stephen's direction (COPY-A.md A50-A62). No stars, no rating line, no schema. NY Education Law §6530(27)(a)(iii) advisory: remove by deleting
// <PatientReviewsBlock /> from the page (one commit); nothing else on the page depends on it.
export default function PatientReviewsBlock() {
  return (
  <section id="patient-reviews" data-block="patient-reviews" className="bg-white py-12 md:py-16" aria-labelledby="patients-say-heading">
    <div className="container-sv">
      <h2 id="patients-say-heading" className="section-title mb-4 text-center">What Our Patients Say</h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-700">{EXPERIENCES_LINE}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card md:p-8">
            <blockquote className="text-lg leading-relaxed text-gray-700">“{t.text}”</blockquote>
            <figcaption className="mt-4 font-semibold text-[var(--sv-navy)]">— {t.name}, {t.location}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-14">
        <PatientVideoReviews videos={PATIENT_VIDEOS} variant="light" captionsOn />
      </div>
    </div>
  </section>
  );
}
