// HUS-1368: ONE data file for the "Nassau County Communities We Serve" card.
// SOURCE: SEO 1's final working table (site-fixes/HUS-1368-schulman-reviews-service-area/SERVICE-AREA.md, Nov 1 2026): U.S. Census Bureau 2020 ZCTA files + Nassau County municipalities list.
// `verified` = the ZIP was checked on USPS Cities by ZIP on 2026-11-01. The card renders ONLY rows with verified === true, so unverified rows never ship.
// To release more rows after SEO 1's retry, flip `verified` to true for the rows PM - Stephen clears (no other code change).
// 11001 Floral Park is OUT (PM - Stephen, Nov 1: ships only if USPS lists Floral Park as an accepted postal community for 11001; SEO 1's file excludes it, so SEO 1's status governs). Shipped now: the 7 other USPS-verified rows.
export type ServiceAreaGroup = "North Shore" | "Central Nassau" | "South Shore";
export interface ServiceAreaRow { group: ServiceAreaGroup; name: string; zip: string; verified: boolean }

export const SERVICE_AREA_ROWS: ServiceAreaRow[] = [
  { group: "North Shore", name: "Albertson", zip: "11507", verified: false },
  { group: "North Shore", name: "Bayville", zip: "11709", verified: false },
  { group: "North Shore", name: "East Norwich", zip: "11732", verified: false },
  { group: "North Shore", name: "Glen Cove", zip: "11542", verified: false },
  { group: "North Shore", name: "Glen Head", zip: "11545", verified: false },
  { group: "North Shore", name: "Glenwood Landing", zip: "11547", verified: false },
  { group: "North Shore", name: "Great Neck", zip: "11021", verified: true },
  { group: "North Shore", name: "Great Neck", zip: "11023", verified: true },
  { group: "North Shore", name: "Greenvale", zip: "11548", verified: false },
  { group: "North Shore", name: "Jericho", zip: "11753", verified: false },
  { group: "North Shore", name: "Kings Point", zip: "11024", verified: true },
  { group: "North Shore", name: "Lake Success", zip: "11020", verified: true },
  { group: "North Shore", name: "Lake Success", zip: "11042", verified: false },
  { group: "North Shore", name: "Locust Valley", zip: "11560", verified: false },
  { group: "North Shore", name: "Manhasset", zip: "11030", verified: true },
  { group: "North Shore", name: "Mill Neck", zip: "11765", verified: false },
  { group: "North Shore", name: "Old Westbury", zip: "11568", verified: false },
  { group: "North Shore", name: "Oyster Bay", zip: "11771", verified: false },
  { group: "North Shore", name: "Port Washington", zip: "11050", verified: false },
  { group: "North Shore", name: "Roslyn", zip: "11576", verified: false },
  { group: "North Shore", name: "Roslyn Heights", zip: "11577", verified: false },
  { group: "North Shore", name: "Sea Cliff", zip: "11579", verified: false },
  { group: "North Shore", name: "Syosset", zip: "11791", verified: false },
  { group: "North Shore", name: "Woodbury", zip: "11797", verified: false },
  { group: "Central Nassau", name: "Bethpage", zip: "11714", verified: false },
  { group: "Central Nassau", name: "Carle Place", zip: "11514", verified: false },
  { group: "Central Nassau", name: "East Meadow", zip: "11554", verified: false },
  { group: "Central Nassau", name: "Elmont", zip: "11003", verified: true },
  { group: "Central Nassau", name: "Floral Park", zip: "11001", verified: false },
  { group: "Central Nassau", name: "Franklin Square", zip: "11010", verified: true },
  { group: "Central Nassau", name: "Garden City", zip: "11530", verified: false },
  { group: "Central Nassau", name: "Hempstead", zip: "11550", verified: false },
  { group: "Central Nassau", name: "Hicksville", zip: "11801", verified: false },
  { group: "Central Nassau", name: "Levittown", zip: "11756", verified: false },
  { group: "Central Nassau", name: "Mineola", zip: "11501", verified: false },
  { group: "Central Nassau", name: "New Hyde Park", zip: "11040", verified: false },
  { group: "Central Nassau", name: "Old Bethpage", zip: "11804", verified: false },
  { group: "Central Nassau", name: "Plainview", zip: "11803", verified: false },
  { group: "Central Nassau", name: "Uniondale", zip: "11549", verified: false },
  { group: "Central Nassau", name: "Uniondale", zip: "11553", verified: false },
  { group: "Central Nassau", name: "Uniondale", zip: "11556", verified: false },
  { group: "Central Nassau", name: "Westbury", zip: "11590", verified: false },
  { group: "Central Nassau", name: "Williston Park", zip: "11596", verified: false },
  { group: "South Shore", name: "Island Park", zip: "11558", verified: false },
  { group: "South Shore", name: "Long Beach", zip: "11561", verified: false },
];

export const SERVICE_AREA_GROUPS: ServiceAreaGroup[] = ["North Shore", "Central Nassau", "South Shore"];

export interface ServiceAreaItem { name: string; zips: string[] }

/** Verified rows only, alphabetical by community, places with several ZIPs merged into one row ("Great Neck 11021 · 11023"). */
export function serviceAreaByGroup(): { group: ServiceAreaGroup; items: ServiceAreaItem[] }[] {
  return SERVICE_AREA_GROUPS.map((group) => {
    const map = new Map<string, string[]>();
    for (const r of SERVICE_AREA_ROWS) {
      if (r.group !== group || !r.verified) continue;
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
