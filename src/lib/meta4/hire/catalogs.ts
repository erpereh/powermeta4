import type { Meta4Society } from "@/lib/meta4/societies";

import { Meta4HireError } from "./errors";

/** One PeopleNet catalog row: `id` identifies it, `name` is what the combobox shows. */
export type HireCatalogOption = {
  id: string;
  name: string;
  detail?: string;
};

/** PeopleNet catalogs loaded for the hire form. */
export const HIRE_CATALOG_SOURCES = [
  "documentType",
  "country",
  "nationality",
  "community",
  "province",
  "place",
  "gender",
  "maritalStatus",
  "atradiusJob",
  "atradiusCategory",
  "department",
  "locationType",
  "roadType",
  "legalEntity",
  "job",
  "position",
  "workUnit",
  "workLocation",
  "category",
  "costCenter",
  "startReason",
  "structure",
  "functionalWorkCenter",
  "currency",
  "paymentType",
  "companyBank",
  "agreement",
  "adjustmentType",
  "salaryType",
  "union",
  "irpfType",
  "perceptionKey",
  "referenceModelWeek",
  "variableCompensationMode",
  "tc1Header",
  "tariffGroup",
  "ssOccupation",
  "ssAgreement",
  "contract",
  "laborRelation",
  "reductionReason",
  "substitutionCause",
  "unemploymentCondition",
  "specialLaborRelation",
  "socialExclusion",
] as const;

export type HireCatalogSource = (typeof HIRE_CATALOG_SOURCES)[number];

export type HireCatalogs = Record<HireCatalogSource, readonly HireCatalogOption[]>;

export type HireCatalogState =
  | { status: "ready"; society: Meta4Society; catalogs: HireCatalogs }
  | { status: "unavailable"; message: string };

/**
 * Geographic rows repeat their IDs across countries, so their option ID is the
 * whole path: country, "country/geoDiv", "country/geoDiv/subGeoDiv" and
 * "country/geoDiv/subGeoDiv/place". Excel only receives the last segment.
 */
export const GEO_SEPARATOR = "/";

export const geoPath = (...segments: string[]): string => segments.join(GEO_SEPARATOR);

export const lastGeoSegment = (value: string): string => value.split(GEO_SEPARATOR).at(-1) ?? "";

/** Ancestor path of a geographic ID with `depth` segments ("724/28/28", 1 → "724"). */
export const geoAncestor = (value: string, depth: number): string =>
  value.split(GEO_SEPARATOR).slice(0, depth).join(GEO_SEPARATOR);

/** Hire fields sent to Excel whose value is the ID of a PeopleNet catalog row. */
export const HIRE_CATALOG_FIELD_IDS = [
  "documentType",
  "issuingCountry",
  "nationality",
  "birthProvince",
  "birthCountry",
  "gender",
  "maritalStatus",
  "atradiusJobCode",
  "atradiusCategory",
  "locationType",
  "roadType",
  "city",
  "province",
  "community",
  "country",
  "legalEntity",
  "job",
  "position",
  "workUnit",
  "workLocation",
  "category",
  "startReason",
  "structure",
  "functionalWorkCenter",
  "tc1Header",
  "tariffGroup",
  "ssOccupation",
  "ssAgreement",
  "laborRelation",
  "reductionReason",
  "substitutionCause",
  "unemploymentCondition",
  "specialLaborRelation",
  "socialExclusion",
  "payrollAgreement",
  "adjustmentType",
  "salaryType",
  "payrollCurrency",
  "union",
  "irpfType",
  "perceptionKey",
  "variableCompensationMode",
  "paymentCurrency",
  "paymentType",
  "companyBank",
  "accountCurrency",
] as const;

export type HireCatalogFieldId = (typeof HIRE_CATALOG_FIELD_IDS)[number];

export type HireCatalogFieldSpec = {
  source: HireCatalogSource;
  label: string;
  required: boolean;
  /** The value is a geographic path; Excel receives its last segment. */
  geo?: true;
};

export const HIRE_CATALOG_FIELDS: Record<HireCatalogFieldId, HireCatalogFieldSpec> = {
  documentType: { source: "documentType", label: "ID Tipo documento", required: true },
  issuingCountry: { source: "country", label: "ID País emisor documento", required: false },
  nationality: { source: "nationality", label: "ID Nacionalidad", required: false },
  birthProvince: {
    source: "province",
    label: "ID Provincia nacimiento",
    required: false,
    geo: true,
  },
  birthCountry: { source: "country", label: "ID País nacimiento", required: false, geo: true },
  gender: { source: "gender", label: "ID Sexo", required: false },
  maritalStatus: { source: "maritalStatus", label: "ID Estado civil", required: true },
  atradiusJobCode: { source: "atradiusJob", label: "ID Atradius Job Code", required: true },
  atradiusCategory: {
    source: "atradiusCategory",
    label: "ID Categoría Atradius",
    required: true,
  },
  locationType: { source: "locationType", label: "ID Tipo localización", required: true },
  roadType: { source: "roadType", label: "ID Tipo de vía", required: true },
  city: { source: "place", label: "ID Población", required: true, geo: true },
  province: { source: "province", label: "ID Provincia", required: true, geo: true },
  community: { source: "community", label: "ID Comunidad", required: true, geo: true },
  country: { source: "country", label: "ID País", required: true, geo: true },
  legalEntity: { source: "legalEntity", label: "ID Empresa", required: true },
  // Required only in the Puesto branch; the form sends it only there.
  job: { source: "job", label: "ID Puesto", required: false },
  // Required only in the Posición branch; the form sends it only there.
  position: { source: "position", label: "ID Posición", required: false },
  workUnit: { source: "workUnit", label: "ID Unidad organizativa", required: true },
  workLocation: { source: "workLocation", label: "ID Lugar trabajo", required: true },
  category: { source: "category", label: "Categoría", required: true },
  startReason: { source: "startReason", label: "ID Motivo inicio", required: true },
  structure: { source: "structure", label: "Id Estructura", required: true },
  functionalWorkCenter: {
    source: "functionalWorkCenter",
    label: "Centro de Trabajo Funcional",
    required: true,
  },
  tc1Header: { source: "tc1Header", label: "ID Cabecera TC1", required: true },
  tariffGroup: { source: "tariffGroup", label: "ID Grupo de tarifa", required: true },
  ssOccupation: { source: "ssOccupation", label: "ID Ocupación", required: false },
  ssAgreement: { source: "ssAgreement", label: "ID Convenio S.S.", required: false },
  laborRelation: { source: "laborRelation", label: "ID Relación laboral", required: false },
  reductionReason: {
    source: "reductionReason",
    label: "ID Motivo de reducción",
    required: false,
  },
  substitutionCause: {
    source: "substitutionCause",
    label: "ID Causa sustitución",
    required: false,
  },
  unemploymentCondition: {
    source: "unemploymentCondition",
    label: "ID Condición desempleado",
    required: false,
  },
  specialLaborRelation: {
    source: "specialLaborRelation",
    label: "ID Relación laboral especial",
    required: false,
  },
  socialExclusion: { source: "socialExclusion", label: "Exclusión social", required: false },
  payrollAgreement: { source: "agreement", label: "ID Convenio", required: true },
  adjustmentType: { source: "adjustmentType", label: "ID Tipo de ajuste", required: true },
  salaryType: { source: "salaryType", label: "ID Tipo salario", required: true },
  payrollCurrency: { source: "currency", label: "ID Moneda de nómina", required: false },
  union: { source: "union", label: "ID Sindicato", required: false },
  irpfType: { source: "irpfType", label: "ID Tipo del IRPF", required: true },
  perceptionKey: { source: "perceptionKey", label: "ID Clave percepción", required: true },
  variableCompensationMode: {
    source: "variableCompensationMode",
    label: "Tipo modalidad Variable",
    required: true,
  },
  paymentCurrency: { source: "currency", label: "ID Moneda", required: true },
  paymentType: { source: "paymentType", label: "ID Tipo pago", required: true },
  companyBank: { source: "companyBank", label: "ID Banco empresa", required: true },
  accountCurrency: { source: "currency", label: "ID Moneda de la cuenta", required: false },
};

/** A geographic field and the ancestor it must belong to, with the ancestor's depth. */
export const HIRE_GEO_CHAINS: ReadonlyArray<{
  child: HireCatalogFieldId;
  parent: HireCatalogFieldId;
  depth: number;
}> = [
  { child: "city", parent: "province", depth: 3 },
  { child: "province", parent: "community", depth: 2 },
  { child: "community", parent: "country", depth: 1 },
  { child: "birthProvince", parent: "birthCountry", depth: 1 },
];

/**
 * Legal and internal contract are one PeopleNet row: the catalog lists valid
 * pairs and each ID goes to its own Excel column.
 */
export type HireContractSelection = { legalContract: string; internalContract: string };

export const HIRE_CONTRACT_FIELDS = ["legalContract", "internalContract"] as const;

export const contractOptionId = ({ legalContract, internalContract }: HireContractSelection) =>
  legalContract && internalContract ? `${legalContract}/${internalContract}` : "";

export const parseContractOptionId = (optionId: string): HireContractSelection => {
  const [legalContract = "", internalContract = ""] = optionId.split("/");
  return { legalContract, internalContract };
};

export type HireCatalogSelections = Record<HireCatalogFieldId, string> & HireContractSelection;

const reject = (message: string): never => {
  throw new Meta4HireError("META4_HIRE_VALIDATION", message);
};

/** Rejects IDs that are not in the PeopleNet catalogs of the operation's society. */
export const assertHireCatalogSelections = (
  people: readonly HireCatalogSelections[],
  catalogs: HireCatalogs,
  society: Meta4Society,
): void => {
  people.forEach((person, index) => {
    const who = `Persona ${index + 1}`;
    for (const field of HIRE_CATALOG_FIELD_IDS) {
      const { source, label, required } = HIRE_CATALOG_FIELDS[field];
      const value = person[field];
      if (value === "" && !required) continue;
      if (catalogs[source].some((option) => option.id === value)) continue;
      reject(`${who}: «${value}» no es un ${label} válido en PeopleNet para ${society}.`);
    }
    for (const { child, parent, depth } of HIRE_GEO_CHAINS) {
      if (person[child] === "" || person[parent] === "") continue;
      if (geoAncestor(person[child], depth) === person[parent]) continue;
      reject(
        `${who}: ${HIRE_CATALOG_FIELDS[child].label} no pertenece a ${HIRE_CATALOG_FIELDS[parent].label}.`,
      );
    }
    const contract = contractOptionId(person);
    if (!catalogs.contract.some((option) => option.id === contract)) {
      reject(
        `${who}: el contrato «${person.legalContract} / ${person.internalContract}» no existe en PeopleNet.`,
      );
    }
  });
};
