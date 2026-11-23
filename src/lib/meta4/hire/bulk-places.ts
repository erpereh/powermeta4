import "server-only";

import { geoAncestor, type HireCatalogOption } from "./catalogs";
import type { HireBulkPerson } from "./bulk-import";
import { searchHirePlaces } from "./catalog-queries";

const fold = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const text = (value: unknown): string => (typeof value === "string" ? value : "");

/** The place named in the row, preferring the row's province when several share the name. */
export const pickHirePlace = (
  places: readonly HireCatalogOption[],
  query: string,
  province: string,
): HireCatalogOption | undefined => {
  const named = places.filter((place) => fold(place.name) === fold(query));
  const candidates = named.length > 0 ? named : places;
  if (province) {
    const inProvince = candidates.filter((place) => geoAncestor(place.id, 3) === province);
    if (inProvince.length > 0) return inProvince[0];
    return undefined;
  }
  return named.length === 1 ? named[0] : undefined;
};

export type HireBulkResolvedPerson = HireBulkPerson & { cityName: string };

/**
 * Looks up each Población typed by name in PeopleNet (read-only) and fills the
 * province, community and country it belongs to when the row left them empty.
 */
export const resolveHireBulkPlaces = async (
  people: readonly HireBulkPerson[],
  search: (query: string) => Promise<HireCatalogOption[]> = searchHirePlaces,
): Promise<{ people: HireBulkResolvedPerson[]; problems: string[] }> => {
  const cache = new Map<string, Promise<HireCatalogOption[]>>();
  const problems: string[] = [];
  const resolved: HireBulkResolvedPerson[] = [];
  for (const person of people) {
    const values = { ...person.values };
    let cityName = "";
    if (person.cityQuery) {
      const key = fold(person.cityQuery);
      const places = cache.get(key) ?? search(person.cityQuery);
      cache.set(key, places);
      const place = pickHirePlace(await places, person.cityQuery, text(values.province));
      if (place) {
        values.city = place.id;
        cityName = place.name;
        if (!text(values.province)) values.province = geoAncestor(place.id, 3);
        if (!text(values.community)) values.community = geoAncestor(place.id, 2);
        if (!text(values.country)) values.country = geoAncestor(place.id, 1);
      } else {
        problems.push(
          `Fila ${person.row}: no se ha encontrado una única población «${person.cityQuery}»${
            text(values.province) ? " en esa provincia" : ""
          }; elígela en el formulario.`,
        );
      }
    }
    resolved.push({ ...person, values, cityName });
  }
  return { people: resolved, problems };
};
