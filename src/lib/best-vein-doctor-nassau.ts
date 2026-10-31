// HUS-1366: copy for /best-vein-doctor-nassau-county, verbatim from COPY.md v3 (DRAFT, not Legal-cleared; see LEGAL-RULING.md).
// ONE-LINE SWITCH: change VARIANT below. A = Stephen's exact title/H1 + Legal's adjacent guide line; B = Legal's factual alternative.
export const VARIANT: "A" | "B" = "A";

export const SLUG = "best-vein-doctor-nassau-county";
export const PAGE_URL = `https://www.schulmanveincenter.com/${SLUG}`;

export const VARIANTS = {
  A: {
    title: "Best Vein Doctor Or Vein Center In Nassau County",
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

export const COPY = {
  description:
    "Compare vein care options in Nassau County. Meet the Schulman doctors, learn about screening and find the Manhasset office.",
  kicker: "Nassau County · Manhasset",
  intro: "Choosing a vein doctor or vein center in Nassau County comes down to a few questions you can check for yourself. This page lists them, shows what we publish about our office, and explains how to arrange a visit.",
  officeLine: "If you are looking for a vein doctor in Nassau County, our Manhasset office at 800 Community Drive, Suite 211 is where we see our Nassau County patients.",
  lookForIntro: "Searching for a vein specialist in Nassau County brings up many kinds of clinics. These questions make them easier to compare:",
  lookFor: [
    ["Is the practice focused on veins?", "Vein care is all we do."],
    ["Who evaluates and treats you?", "Find out who will personally evaluate and treat you."],
    ["Is imaging used when it is appropriate?", "Ask the doctor whether imaging is appropriate for your evaluation."],
    ["Will you know the cost and coverage before you decide?", "Ask how coverage and costs are handled before you commit."],
  ] as const,
  lookForClosing: "Ask these questions of every practice you are considering, including ours.",
  doctors: ["Dr. Martin L. Schulman, M.D., Physician", "Dr. Lee G. Schulman, M.D., Physician"],
  doctorsAvailability: "Both Dr. Martin L. Schulman and Dr. Lee G. Schulman see patients at the Manhasset office. Please call ahead to confirm scheduling for your preferred doctor.",
  doctorsPersonal: "Every patient is evaluated and treated personally by Dr. Martin L. Schulman or Dr. Lee G. Schulman.",
  doctorsFocus: "Our practice is focused entirely on vein care.",
  screeningIntro: "During your visit:",
  screeningSteps: [
    "We review your medical history.",
    "The doctor examines your veins while you stand.",
    "You receive a preliminary physician assessment.",
    "We talk through treatment options and insurance considerations.",
  ],
  screeningPrep: "Wear loose clothing that allows access above the knee, and skip lotion on your legs that day. There is no special preparation: eat and drink normally and arrive a few minutes early.",
  screeningLength: "Most screenings take 15 to 20 minutes, and up to 30 minutes for more complex cases.",
  conditionsIntro: "Vein problems range from small surface veins to symptoms that change how your legs feel day to day. Learn more about:",
  conditions: [
    ["Varicose veins", "/services/varicose-vein-treatment", "Varicose veins are abnormally enlarged, protruding surface veins seen in the legs."],
    ["Spider veins", "/services/spider-vein-treatment", "Spider veins (telangiectasias) are small dilated vessels near the skin surface, usually red, blue, or purple. They commonly appear on legs, thighs, ankles, and face."],
    ["Laser vein therapy (EVLT)", "/services/laser-vein-therapy", "Endovenous Laser Treatment (EVLT) is a minimally invasive in-office procedure for varicose veins and venous insufficiency."],
    ["Other vein disorders and conditions", "/services/vein-disorders", ""],
  ] as const,
  signs: "Signs worth having checked include aching, heaviness, swelling or cramping in the legs, and visible veins on the legs, ankles or feet. Symptoms like these can have different causes, and only an exam can tell you which applies to you. Any recommendation depends on that evaluation.",
  suitability: "This page provides general information, not a diagnosis or a treatment recommendation. A physician must evaluate your condition and discuss suitable options, benefits and risks. Results and recovery vary; no outcome is guaranteed.",
  officeIntro: "Conveniently located at 800 Community Drive in Manhasset, our Nassau County office serves patients across the North Shore of Long Island and nearby communities. Positioned near the Lake Success border and just off the Northern State Parkway, this office is easily accessible from throughout Nassau County and eastern Queens.",
  gettingThere: "The Manhasset office is located off the Northern State Parkway and is easy to reach by car from the LIE (I-495), Northern State, and Cross Island Parkway. The building offers ample free parking. The Manhasset LIRR station (Port Washington Branch) is about one mile away for train commuters.",
  communities: [
    "Manhasset, Great Neck, and Manhasset Hills",
    "Port Washington and Roslyn",
    "Lake Success and New Hyde Park",
    "Mineola, Garden City, and Floral Park",
    "Bayside and Fresh Meadows (Queens)",
    "Williston Park, Herricks, and Albertson",
  ],
  insurance1: "Whether a treatment is considered medically necessary depends on your symptoms and your plan. If you plan to submit an insurance claim, check whether your plan requires a referral from your primary care physician.",
  insurance2: "Insurance coverage depends on your plan and medical circumstances; coverage and payment are not guaranteed.",
  ctaHeading: "Ready to Have Your Veins Checked?",
  ctaLine: "Call our Manhasset office.",
  disclaimer: "This page is general information, not medical advice. Evaluations and recommendations depend on your individual condition.",
  screeningButton: "Ask About Vein Screening",
};
