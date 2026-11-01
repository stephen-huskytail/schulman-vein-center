// HUS-1368: ONE data file for the "Nassau County Communities We Serve" card. Source of the rows: Content 3's SERVICE-AREA-DATA.json (site-fixes/HUS-1368-schulman-reviews-service-area/),
// built from SEO 1's SERVICE-AREA.md + SERVICE-AREA-VERIFIED-WORKING.csv under PM - Stephen's ship rule: a row ships ONLY if it is USPS-verified (ZIP Code Lookup, checked 2026-11-01)
// or the exact ZIP + postal community name appears on an official Nassau County page (one URL per row). Unverified rows are NOT in this file, so they cannot render.
// 11001 Floral Park is IN (PM - Stephen's ruling Nov 1: USPS shows "Floral Park recommended" for 11001). Farmingdale 11735 and the South Shore replacements are out.
// To grow the list later: add rows with their source (small data-only delta).
export type ServiceAreaGroup = "North Shore" | "Central Nassau";
export interface ServiceAreaRow { group: ServiceAreaGroup; name: string; zip: string; source: string }

export const SERVICE_AREA_ROWS: ServiceAreaRow[] = [
  { group: "North Shore", name: "Glen Cove", zip: "11542", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
  { group: "North Shore", name: "Great Neck", zip: "11021", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "North Shore", name: "Great Neck", zip: "11023", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "North Shore", name: "Kings Point", zip: "11024", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "North Shore", name: "Lake Success", zip: "11020", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "North Shore", name: "Locust Valley", zip: "11560", source: "https://www.nassaucountyny.gov/461/Designated-Newspapers" },
  { group: "North Shore", name: "Manhasset", zip: "11030", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "North Shore", name: "Old Westbury", zip: "11568", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
  { group: "North Shore", name: "Oyster Bay", zip: "11771", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
  { group: "North Shore", name: "Port Washington", zip: "11050", source: "https://www.nassaucountyny.gov/3271/Port-Washington" },
  { group: "North Shore", name: "Roslyn", zip: "11576", source: "https://lrv.nassaucountyny.gov/info/070220107030/" },
  { group: "Central Nassau", name: "Bethpage", zip: "11714", source: "https://www.nassaucountyny.gov/3259/Bethpage" },
  { group: "Central Nassau", name: "East Meadow", zip: "11554", source: "https://www.nassaucountyny.gov/3276/East-Meadow" },
  { group: "Central Nassau", name: "Elmont", zip: "11003", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "Central Nassau", name: "Floral Park", zip: "11001", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "Central Nassau", name: "Franklin Square", zip: "11010", source: "USPS ZIP Code Lookup, checked 2026-11-01" },
  { group: "Central Nassau", name: "Garden City", zip: "11530", source: "https://www.nassaucountyny.gov/3279/Garden-City" },
  { group: "Central Nassau", name: "Hempstead", zip: "11550", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
  { group: "Central Nassau", name: "Mineola", zip: "11501", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
  { group: "Central Nassau", name: "Williston Park", zip: "11596", source: "https://www.nassaucountyny.gov/479/Vital-Records" },
];

export const SERVICE_AREA_GROUPS: ServiceAreaGroup[] = ["North Shore", "Central Nassau"];

export interface ServiceAreaItem { name: string; zips: string[] }

/** Rows in this file are all verified; alphabetical by community, places with several ZIPs merged into one row ("Great Neck 11021 · 11023"). */
export function serviceAreaByGroup(): { group: ServiceAreaGroup; items: ServiceAreaItem[] }[] {
  return SERVICE_AREA_GROUPS.map((group) => {
    const map = new Map<string, string[]>();
    for (const r of SERVICE_AREA_ROWS) {
      if (r.group !== group) continue;
      map.set(r.name, [...(map.get(r.name) ?? []), r.zip].sort());
    }
    const items = [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, zips]) => ({ name, zips }));
    return { group, items };
  }).filter((g) => g.items.length > 0);
}

// Copy: Content 3 (SERVICE-AREA-CONTENT3.md / FINAL-CARD-COPY.md); intro = the site's published phrasing plus "in Nassau County" per PM - Stephen's ruling.
export const SERVICE_AREA_HEADING = "Nassau County Communities We Serve";
export const SERVICE_AREA_INTRO_BEFORE_PHONE = "Our Manhasset office serves patients across the North Shore of Long Island and nearby communities in Nassau County. Find your community and ZIP code below, or call ";
export const SERVICE_AREA_CLOSING = "Communities and ZIP codes are listed to help you find us; they are not a limit on who we can see.";
