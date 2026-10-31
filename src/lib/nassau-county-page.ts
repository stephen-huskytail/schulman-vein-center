// HUS-1366 Route A: the existing /vein-doctor-nassau-county page expanded into "Best Vein Doctor Or Vein Center In Nassau County" (COPY-A.md, DRAFT, not Legal-cleared).
// ONE-LINE SWITCH: change VARIANT. A = Stephen's exact title/H1 + Legal's two guide lines; B = Legal's factual alternative.
export const VARIANT: "A" | "B" = "A";

export const VARIANTS = {
  A: {
    // Title tag per Stephen (via Everest) and SEO 1's confirmed text; the H1 stays Stephen's exact phrase.
    title: "Best Vein Doctor in Nassau County | Schulman Vein",
    h1: "Best Vein Doctor Or Vein Center In Nassau County",
    guide: [
      "Patient guide to choosing vein care",
      "“Best” depends on your medical needs. This page does not claim an independent ranking or guarantee results.",
    ],
  },
  B: {
    title: "Choosing a Vein Doctor or Vein Center in Nassau County",
    h1: "Choosing a Vein Doctor or Vein Center in Nassau County",
    guide: ["Patient guide to choosing vein care"],
  },
} as const;

// SEO 1's meta description (122 characters) for both variants; the live one was "Looking for a vein doctor in Nassau County? Learn what to ask and find our Manhasset office at 800 Community Drive. Call 516.482.4477."
export const DESCRIPTION = "Compare vein care options in Nassau County. Meet the Schulman doctors, learn about screening and find the Manhasset office.";

export const SUITABILITY = "This page provides general information, not a diagnosis or a treatment recommendation. A physician must evaluate your condition and discuss suitable options, benefits and risks. Results and recovery vary; no outcome is guaranteed.";
export const COVERAGE = "Insurance coverage depends on your plan and medical circumstances; coverage and payment are not guaranteed.";
export const LEAD_QUESTIONS_CLOSING = "Ask these questions of every practice you are considering, including ours.";
export const DEFINITIONS = [
  "Varicose veins are abnormally enlarged, protruding surface veins seen in the legs.",
  "Spider veins (telangiectasias) are small dilated vessels near the skin surface, usually red, blue, or purple. They commonly appear on legs, thighs, ankles, and face.",
  "Endovenous Laser Treatment (EVLT) is a minimally invasive in-office procedure for varicose veins and venous insufficiency.",
];
export const OFFICE_INTRO = "Conveniently located at 800 Community Drive in Manhasset, our Nassau County office serves patients across the North Shore of Long Island and nearby communities. Positioned near the Lake Success border and just off the Northern State Parkway, this office is easily accessible from throughout Nassau County and eastern Queens.";
export const COMMUNITIES = [
  "Manhasset, Great Neck, and Manhasset Hills",
  "Port Washington and Roslyn",
  "Lake Success and New Hyde Park",
  "Mineola, Garden City, and Floral Park",
  "Bayside and Fresh Meadows (Queens)",
  "Williston Park, Herricks, and Albertson",
];
export const DOCTORS: [string, string][] = [["martin-schulman", "Dr. Martin L. Schulman, M.D., Physician"], ["lee-schulman", "Dr. Lee G. Schulman, M.D., Physician"]];
export const DOCTORS_AVAILABILITY = "Both Dr. Martin L. Schulman and Dr. Lee G. Schulman see patients at the Manhasset office.";

// Stephen's line (via PM - Stephen f45b249f), directly under the testimonials heading.
export const EXPERIENCES_LINE = "Individual experiences vary. Treatment suitability, recovery and outcomes depend on the patient; no result is guaranteed.";

// [NEW] blocks Stephen included "as written" for client review (COPY-A.md v3: A63-A67); Legal marks them CHANGE for public release, listed in QUESTIONS-FOR-STEPHEN.md / CLIENT-CONFIRM-LIST.md.
export const SCREENING_LENGTH = "Most screenings take 15 to 20 minutes, and up to 30 minutes for more complex cases.";
export const GETTING_THERE = "The Manhasset office is located off the Northern State Parkway and is easy to reach by car from the LIE (I-495), Northern State, and Cross Island Parkway. The building offers ample free parking. The Manhasset LIRR station (Port Washington Branch) is about one mile away for train commuters.";
export const DOCTORS_PERSONAL = "Every patient is evaluated and treated personally by Dr. Martin L. Schulman or Dr. Lee G. Schulman.";
export const PRACTICE_FOCUS = "Our practice is focused entirely on vein care.";
