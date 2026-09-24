import { HIRE_CATALOG_FIELDS, type HireCatalogFieldId } from "./catalogs";
import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import type { HirePerson, HirePersonInput } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
// PeopleNet IDs may contain spaces or apostrophes ("Sin asignar", "0028 BC",
// "L'V"); the server checks every ID against its catalog, so only control
// characters and oversized values are rejected here.
const CATALOG_ID_PATTERN = /^[^\p{Cc}]{1,120}$/u;

const requiredText = (value: unknown, label: string): string => {
  if (typeof value !== "string") {
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} es obligatorio.`);
  }
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} es obligatorio.`);
  }
  return trimmed;
};

const optionalText = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

const parseHireDate = (value: unknown): string => {
  const trimmed = requiredText(value, "fecha de alta");
  const match = ISO_DATE_PATTERN.exec(trimmed);
  if (!match) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      "La fecha de alta debe usar el formato AAAA-MM-DD.",
    );
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utc = Date.UTC(year, month - 1, day);
  const parsed = new Date(utc);
  if (
    Number.isNaN(utc) ||
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "La fecha de alta no es una fecha válida.");
  }
  return trimmed;
};

const parseEmail = (value: unknown): string => {
  const trimmed = requiredText(value, "correo");
  if (!EMAIL_PATTERN.test(trimmed)) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "El correo no tiene un formato válido.");
  }
  return trimmed;
};

const parseCatalogId = (value: unknown, label: string): string => {
  const trimmed = requiredText(value, label);
  if (!CATALOG_ID_PATTERN.test(trimmed)) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} no es un ID válido.`);
  }
  return trimmed;
};

/** Required and optional rules come from the single catalog field registry. */
const parseCatalogField = (value: unknown, field: HireCatalogFieldId): string => {
  const { label, required } = HIRE_CATALOG_FIELDS[field];
  if (!required && optionalText(value) === "") return "";
  return parseCatalogId(value, label);
};

export const parseHirePerson = (value: unknown): HirePerson => {
  if (typeof value !== "object" || value === null) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Cada persona debe ser un objeto.");
  }
  const record = value as HirePersonInput;
  return {
    firstName: requiredText(record.firstName, "nombre"),
    lastName1: requiredText(record.lastName1, "primer apellido"),
    lastName2: optionalText(record.lastName2),
    documentNumber: requiredText(record.documentNumber, "número de documento"),
    email: parseEmail(record.email),
    hireDate: parseHireDate(record.hireDate),
    documentType: parseCatalogField(record.documentType, "documentType"),
    issuingCountry: parseCatalogField(record.issuingCountry, "issuingCountry"),
    nationality: parseCatalogField(record.nationality, "nationality"),
    birthProvince: parseCatalogField(record.birthProvince, "birthProvince"),
    birthCountry: parseCatalogField(record.birthCountry, "birthCountry"),
    gender: parseCatalogField(record.gender, "gender"),
    maritalStatus: parseCatalogField(record.maritalStatus, "maritalStatus"),
    atradiusJobCode: parseCatalogField(record.atradiusJobCode, "atradiusJobCode"),
    atradiusCategory: parseCatalogField(record.atradiusCategory, "atradiusCategory"),
    locationType: parseCatalogField(record.locationType, "locationType"),
    roadType: parseCatalogField(record.roadType, "roadType"),
    city: parseCatalogField(record.city, "city"),
    province: parseCatalogField(record.province, "province"),
    community: parseCatalogField(record.community, "community"),
    country: parseCatalogField(record.country, "country"),
    legalEntity: parseCatalogField(record.legalEntity, "legalEntity"),
    job: parseCatalogField(record.job, "job"),
    position: parseCatalogField(record.position, "position"),
    workUnit: parseCatalogField(record.workUnit, "workUnit"),
    workLocation: parseCatalogField(record.workLocation, "workLocation"),
    category: parseCatalogField(record.category, "category"),
    startReason: parseCatalogField(record.startReason, "startReason"),
    structure: parseCatalogField(record.structure, "structure"),
    functionalWorkCenter: parseCatalogField(record.functionalWorkCenter, "functionalWorkCenter"),
    tc1Header: parseCatalogField(record.tc1Header, "tc1Header"),
    tariffGroup: parseCatalogField(record.tariffGroup, "tariffGroup"),
    ssOccupation: parseCatalogField(record.ssOccupation, "ssOccupation"),
    ssAgreement: parseCatalogField(record.ssAgreement, "ssAgreement"),
    legalContract: parseCatalogId(record.legalContract, "ID Contrato legal"),
    internalContract: parseCatalogId(record.internalContract, "ID Contrato interno"),
    laborRelation: parseCatalogField(record.laborRelation, "laborRelation"),
    reductionReason: parseCatalogField(record.reductionReason, "reductionReason"),
    substitutionCause: parseCatalogField(record.substitutionCause, "substitutionCause"),
    unemploymentCondition: parseCatalogField(record.unemploymentCondition, "unemploymentCondition"),
    specialLaborRelation: parseCatalogField(record.specialLaborRelation, "specialLaborRelation"),
    socialExclusion: parseCatalogField(record.socialExclusion, "socialExclusion"),
    payrollAgreement: parseCatalogField(record.payrollAgreement, "payrollAgreement"),
    adjustmentType: parseCatalogField(record.adjustmentType, "adjustmentType"),
    salaryType: parseCatalogField(record.salaryType, "salaryType"),
    payrollCurrency: parseCatalogField(record.payrollCurrency, "payrollCurrency"),
    union: parseCatalogField(record.union, "union"),
    irpfType: parseCatalogField(record.irpfType, "irpfType"),
    perceptionKey: parseCatalogField(record.perceptionKey, "perceptionKey"),
    variableCompensationMode: parseCatalogField(
      record.variableCompensationMode,
      "variableCompensationMode",
    ),
    paymentCurrency: parseCatalogField(record.paymentCurrency, "paymentCurrency"),
    paymentType: parseCatalogField(record.paymentType, "paymentType"),
    companyBank: parseCatalogField(record.companyBank, "companyBank"),
    accountCurrency: parseCatalogField(record.accountCurrency, "accountCurrency"),
  };
};

export const parseHirePeople = (value: unknown): HirePerson[] => {
  if (!Array.isArray(value)) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Debes indicar al menos una persona.");
  }
  if (value.length === 0) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Debes indicar al menos una persona.");
  }
  if (value.length > MAX_PERSON_COUNT) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      `No se pueden dar de alta más de ${MAX_PERSON_COUNT} personas a la vez.`,
    );
  }
  return value.map((person) => parseHirePerson(person));
};
