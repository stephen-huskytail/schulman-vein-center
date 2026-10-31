// HUS-1366: pages that show a NEUTRAL shared chrome (Legal's page-specific treatment: no stars / "5-Star Rated", no "Free Screening", no
// "55+ years" / "Drive home the same day" band, no review-promotion links). Only the listed paths change; all other pages render exactly as before.
export const NEUTRAL_CHROME_PATHS = ["/vein-doctor-nassau-county"];
export const isNeutralChromePath = (pathname: string | null) => !!pathname && NEUTRAL_CHROME_PATHS.includes(pathname.replace(/\/+$/, "") || "/");
