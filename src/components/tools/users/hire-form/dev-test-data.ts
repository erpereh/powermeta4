import {
  assertHireCatalogSelections,
  geoAncestor,
  HIRE_CATALOG_FIELD_IDS,
  HIRE_CATALOG_FIELDS,
  lastGeoSegment,
  parseContractOptionId,
  type HireCatalogOption,
  type HireCatalogs,
  type HireCatalogState,
} from "@/lib/meta4/hire/catalogs";
import { parseHirePerson } from "@/lib/meta4/hire/validate";

import { createHirePersonDraft, toHirePersonInput, type HirePersonDraft } from "./draft";

const hasProvinceAncestors = (catalogs: HireCatalogs, provinceId: string): boolean =>
  catalogs.country.some((option) => option.id === geoAncestor(provinceId, 1)) &&
  catalogs.community.some((option) => option.id === geoAncestor(provinceId, 2));

export const findDevTestPlace = (
  catalogs: HireCatalogs,
  places: readonly HireCatalogOption[],
): HireCatalogOption | undefined =>
  places.find(
    (place) =>
      place.id.split("/").length === 4 &&
      catalogs.province.some((option) => option.id === geoAncestor(place.id, 3)) &&
      hasProvinceAncestors(catalogs, place.id),
  );

const DEV_TEST_PLACE_ERROR =
  "No se ha encontrado una población compatible para los datos de prueba.";

const isCatalogOption = (value: unknown): value is HireCatalogOption =>
  typeof value === "object" &&
  value !== null &&
  "id" in value &&
  typeof value.id === "string" &&
  "name" in value &&
  typeof value.name === "string" &&
  (!("detail" in value) || value.detail === undefined || typeof value.detail === "string");

const readPlaces = (body: unknown): HireCatalogOption[] => {
  if (
    typeof body === "object" &&
    body !== null &&
    "ok" in body &&
    body.ok === true &&
    "data" in body &&
    Array.isArray(body.data) &&
    body.data.every(isCatalogOption)
  ) {
    return body.data;
  }
  throw new Error(DEV_TEST_PLACE_ERROR);
};

const searchDevTestPlace = async (
  catalogs: HireCatalogs,
  signal: AbortSignal,
): Promise<HireCatalogOption> => {
  try {
    signal.throwIfAborted();
    const response = await fetch("/api/hire/places?q=Madrid", { signal });
    if (!response.ok) throw new Error(DEV_TEST_PLACE_ERROR);
    const body: unknown = await response.json();
    const place = findDevTestPlace(catalogs, readPlaces(body));
    if (!place) throw new Error(DEV_TEST_PLACE_ERROR);
    return place;
  } catch (caught) {
    if (signal.aborted) throw caught;
    throw new Error(DEV_TEST_PLACE_ERROR);
  }
};

/**
 * Different on every fill: Meta4 finds the person by document, so reusing
 * 90000001 after a reload modified the same PRE person on every test hire.
 */
export const testDocument = (id: number, now: Date): string => {
  const number = 90_000_000 + ((Math.floor(now.getTime() / 1000) * 10 + id) % 9_000_000);
  return `${number}${"TRWAGMYFPDXBNJZSQVHLCKE"[number % 23]}`;
};

/** Temporary development data; no action, persistence or network calls. */
export const createDevHirePersonDraft = (
  id: number,
  state: Extract<HireCatalogState, { status: "ready" }>,
  place: HireCatalogOption,
  now: Date,
): HirePersonDraft => {
  const { catalogs, society } = state;
  const draft = createHirePersonDraft(id);

  for (const field of HIRE_CATALOG_FIELD_IDS) {
    const { source, label, required, geo } = HIRE_CATALOG_FIELDS[field];
    if (!required || geo) continue;
    const option = catalogs[source][0];
    if (!option) throw new Error(`No hay opciones disponibles para ${label}.`);
    draft.current[field] = option.id;
  }

  const contract = catalogs.contract[0];
  if (!contract) throw new Error("No hay contratos disponibles para los datos de prueba.");
  Object.assign(draft.current, parseContractOptionId(contract.id));

  const job = catalogs.job[0];
  const position = catalogs.position[0];
  if (job) {
    draft.current.job = job.id;
    draft.branches.positionChoice = "job";
  } else if (position) {
    draft.current.position = position.id;
    draft.branches.positionChoice = "position";
    draft.branches.occupationType = "hours";
    draft.pendingValues.occupationHours = "40";
  } else {
    throw new Error("No hay puestos ni posiciones disponibles para los datos de prueba.");
  }

  draft.current.firstName = "Prueba";
  draft.current.lastName1 = "Automática";
  draft.current.lastName2 = `Persona ${id}`;
  draft.current.documentNumber = testDocument(id, now);
  draft.current.email = `persona-${id}@example.test`;
  draft.current.hireDate = [
    String(now.getFullYear()),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  draft.current.city = place.id;
  draft.current.province = geoAncestor(place.id, 3);
  draft.current.community = geoAncestor(place.id, 2);
  draft.current.country = geoAncestor(place.id, 1);
  draft.pendingValues.cityName = place.name;
  draft.pendingValues.atradiusId = "A000044";
  // Fusion ID is typed by hand (RRHH); the rest of the PeopleNet-required data is filled.
  draft.pendingValues.fusionId = "";
  draft.pendingValues.phonePrefix = "+34";
  draft.pendingValues.phoneNumber = "912345678";
  draft.pendingValues.mobilePrefix = "+34";
  draft.pendingValues.mobileNumber = "612345678";
  draft.pendingValues.addressLine1 = "Calle de Prueba";
  draft.pendingValues.streetNumber = "1";
  // Spanish postal codes start with the province code.
  draft.pendingValues.postalCode = `${lastGeoSegment(draft.current.province).padStart(2, "0")}001`;
  draft.pendingValues.iban = "ES5200491500061234567890";
  draft.branches.ssNumberChoice = "unassigned";
  draft.branches.scheduleChoice = "full";
  draft.branches.disabilityChoice = "without";
  draft.branches.bankFormatChoice = "iban";

  // Validate as if Fusion ID were typed: it is the only field left to the user.
  const person = parseHirePerson({ ...toHirePersonInput(draft), fusionId: "9998" });
  assertHireCatalogSelections(
    [person],
    { ...catalogs, place: [...catalogs.place, place] },
    society,
  );
  return draft;
};

/** Resolve a real PeopleNet place before building the complete development draft. */
export const loadDevHirePersonDraft = async (
  id: number,
  state: Extract<HireCatalogState, { status: "ready" }>,
  now: Date,
  signal: AbortSignal,
): Promise<HirePersonDraft> => {
  const place = await searchDevTestPlace(state.catalogs, signal);
  signal.throwIfAborted();
  return createDevHirePersonDraft(id, state, place, now);
};
