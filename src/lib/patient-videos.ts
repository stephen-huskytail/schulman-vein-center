// Patient video reviews (Designer spec 2026-10-08). Videos, captions and posters live in the
// project's Vercel Blob store; posters are optimised through next/image.
const BLOB_BASE = "https://r4whkef2tt5x9iis.public.blob.vercel-storage.com/testimonials";

export interface PatientVideo {
  id: string;
  src: string;
  poster: string;
  captions: string;
  name: string;
  meta: string;
  durationSeconds: number;
  ariaLabel: string;
}

export const PATIENT_VIDEOS: PatientVideo[] = [
  {
    id: "rn",
    src: `${BLOB_BASE}/testimonial-01-rn.mp4`,
    poster: `${BLOB_BASE}/testimonial-01-rn-poster.webp`,
    captions: `${BLOB_BASE}/testimonial-01-rn.en.vtt`,
    name: "Registered nurse",
    meta: "Varicose vein treatment",
    durationSeconds: 18,
    ariaLabel: "Play video review: registered nurse, 18 seconds",
  },
  {
    id: "cathy",
    src: `${BLOB_BASE}/testimonial-02-cathy-commack.mp4`,
    poster: `${BLOB_BASE}/testimonial-02-cathy-commack-poster.webp`,
    captions: `${BLOB_BASE}/testimonial-02-cathy-commack.en.vtt?v=2`,
    name: "Cathy",
    meta: "Patient, Commack office",
    durationSeconds: 17,
    ariaLabel: "Play video review: Cathy, patient at the Commack office, 17 seconds",
  },
  {
    id: "varicose",
    src: `${BLOB_BASE}/testimonial-03-varicose.mp4`,
    poster: `${BLOB_BASE}/testimonial-03-varicose-poster.webp`,
    captions: `${BLOB_BASE}/testimonial-03-varicose.en.vtt`,
    name: "Varicose vein patient",
    meta: "Treated by Dr. Schulman",
    durationSeconds: 23,
    ariaLabel: "Play video review: varicose vein patient, 23 seconds",
  },
  {
    id: "retired-teacher",
    src: `${BLOB_BASE}/testimonial-04-retired-teacher.mp4`,
    poster: `${BLOB_BASE}/testimonial-04-retired-teacher-poster.webp`,
    captions: `${BLOB_BASE}/testimonial-04-retired-teacher.en.vtt`,
    name: "Retired teacher",
    meta: "Varicose vein treatment",
    durationSeconds: 31,
    ariaLabel: "Play video review: retired teacher, 31 seconds",
  },
];
