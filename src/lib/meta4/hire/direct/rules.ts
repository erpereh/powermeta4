/**
 * Values Meta4 calculates while saving a hire, translated from its LN4 rules
 * (see docs/alta-modelo-peoplenet.md, «Lógica que hay que programar»). Each
 * formula was checked against the 2026 CYC hires with aggregate counts.
 */

/** `STD_N_FAM_NAME_1`: first + second surname (69/69). */
export const familyName = (lastName1: string, lastName2: string): string =>
  [lastName1.trim(), lastName2.trim()].filter(Boolean).join(" ");

/** `SCO_INSERT_GB_NAME..ES_FR_CO`: «surnames, first name» (69/69). */
export const globalName = (familyName1: string, firstName: string): string => {
  const surnames = familyName1.trim();
  const first = firstName.trim();
  if (!surnames) return first;
  return first ? `${surnames}, ${first}` : surnames;
};

export type GlobalAddressParts = {
  roadType: string;
  line1: string;
  streetNumber: string;
  block: string;
  staircase: string;
  floor: string;
  door: string;
  /** `SSP_DISTRIT_POSTAL`, or the ZIP code when empty. */
  postalCode: string;
  placeName: string | null;
  provinceName: string | null;
  countryName: string | null;
};

/**
 * `SCO_GENERATE_GB_ADDRESS` (Spanish variant): every present part with a space
 * in front, so the result starts with a space (78/78 exact).
 */
export const globalAddress = (parts: GlobalAddressParts): string =>
  [
    parts.roadType,
    parts.line1,
    parts.streetNumber,
    parts.block,
    parts.staircase,
    parts.floor,
    parts.door,
    parts.postalCode,
  ]
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => ` ${part}`)
    .join("") +
  [parts.placeName, parts.provinceName, parts.countryName]
    .filter((name): name is string => name !== null)
    .map((name) => ` ${name}`)
    .join("");

/** `SRSP_FORMATO_IBAN`: upper case, no spaces, then groups of four (65/65). */
export const formatIban = (iban: string): string =>
  iban
    .replace(/\s+/g, "")
    .toUpperCase()
    .replace(/(.{4})(?=.)/g, "$1 ");

/** `SHCO_SET_ROLE_NAME`: «J-» + job name, or «P-» + position name. */
export const roleName = (kind: "job" | "position", name: string): string =>
  `${kind === "job" ? "J-" : "P-"}${name}`;

/** `CSP_PLAZA_GARJE_NEW`: structures 1 and 2 have a parking space. */
export const parkingSpace = (structure: string): "S" | "N" =>
  structure === "1" || structure === "2" ? "S" : "N";

/** `SRCO_SAVE_HIRE` (SRSP): employees (type 01) that are not interns get a retirement row. */
export const needsRetirementRow = (hrType: string, personId: string): boolean =>
  hrType === "01" && !personId.startsWith("BC");

/** `CSP_ACT_CV`: comment of the internal experience rebuilt from the job history. */
export const INTERNAL_EXPERIENCE_COMMENT =
  "INSERTADO AUTOMÁTICAMENTE DESDE HISTORICO DE PUESTO/ROL";
