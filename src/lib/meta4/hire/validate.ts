import { normalizeIban, ibanChecksumIsValid, spanishControlDigits, splitSpanishIban } from "./bank";
import {
  HIRE_CATALOG_FIELDS,
  lastGeoSegment,
  parseReferenceModelOptionId,
  type HireCatalogFieldId,
  type HireCatalogOption,
} from "./catalogs";
import { Meta4HireError, type Meta4HireIssue } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import type { HireExtraFields, HirePerson, HirePersonInput } from "./types";

/** A HirePerson key the form can point at. */
export type HireIssueField = keyof HirePerson;

export type HireFieldIssue = { field: HireIssueField; message: string };

/** Catalog rows some rules need; without them those rules are skipped. */
export type HireValidationContext = {
  documentTypes?: readonly HireCatalogOption[];
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
// PeopleNet IDs may contain spaces or apostrophes ("Sin asignar", "0028 BC",
// "L'V"); the server checks every ID against its catalog, so only control
// characters and oversized values are rejected here.
const CATALOG_ID_PATTERN = /^[^\p{Cc}]{1,120}$/u;
const CONTROL_CHARACTERS = /\p{Cc}/u;
const CONTROL_CHARACTERS_EXCEPT_LINES = /[^\P{Cc}\n\r\t]/u;
const NIF_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
const SPAIN = "724";
const MIN_HIRE_AGE = 16;
const ADULT_AGE = 18;

/** Collects at most one problem per field, in the order the rules run. */
class IssueCollector {
  readonly issues: HireFieldIssue[] = [];

  add(field: HireIssueField, message: string): void {
    if (this.issues.some((issue) => issue.field === field)) return;
    this.issues.push({ field, message });
  }

  has(field: HireIssueField): boolean {
    return this.issues.some((issue) => issue.field === field);
  }
}

const optionalText = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

const requiredMessage = (label: string): string => `El campo ${label} es obligatorio.`;

type TextRule = { required?: boolean; max?: number; multiline?: boolean };

const readText = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
  { required = false, max, multiline = false }: TextRule = {},
): string => {
  const trimmed = optionalText(value);
  if (!trimmed) {
    if (required) issues.add(field, requiredMessage(label));
    return "";
  }
  if ((multiline ? CONTROL_CHARACTERS_EXCEPT_LINES : CONTROL_CHARACTERS).test(trimmed)) {
    issues.add(field, `El campo ${label} contiene caracteres no válidos.`);
    return "";
  }
  if (max !== undefined && trimmed.length > max) {
    issues.add(field, `El campo ${label} admite como máximo ${max} caracteres.`);
    return "";
  }
  return trimmed;
};

const isRealDate = (year: number, month: number, day: number): boolean => {
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
};

const readDate = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
  required = false,
): string => {
  const trimmed = optionalText(value);
  if (!trimmed) {
    if (required) issues.add(field, requiredMessage(label));
    return "";
  }
  const match = ISO_DATE_PATTERN.exec(trimmed);
  if (!match) {
    issues.add(field, `La ${label} debe usar el formato AAAA-MM-DD.`);
    return "";
  }
  const year = Number(match[1]);
  if (!isRealDate(year, Number(match[2]), Number(match[3]))) {
    issues.add(field, `La ${label} no es una fecha válida.`);
    return "";
  }
  if (year < 1900 || year > 2100) {
    issues.add(field, `La ${label} debe estar entre 1900 y 2100.`);
    return "";
  }
  return trimmed;
};

const readDateTime = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
): string => {
  const trimmed = optionalText(value);
  if (!trimmed) return "";
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(trimmed);
  if (!match || !isRealDate(Number(match[1]), Number(match[2]), Number(match[3]))) {
    issues.add(field, `${label}: fecha y hora no válidas.`);
    return "";
  }
  if (Number(match[4]) > 23 || Number(match[5]) > 59) {
    issues.add(field, `${label}: hora no válida.`);
    return "";
  }
  return trimmed;
};

type NumberRule = {
  required?: boolean;
  /** Smallest allowed value; `aboveMin` excludes it. */
  min?: number;
  aboveMin?: boolean;
  /** Largest allowed value; `belowMax` excludes it. */
  max?: number;
  belowMax?: boolean;
  decimals?: number;
};

const describeRange = ({ min, aboveMin, max, belowMax, decimals }: NumberRule): string => {
  const parts: string[] = [];
  if (min !== undefined) parts.push(aboveMin ? `mayor que ${min}` : `desde ${min}`);
  if (max !== undefined) parts.push(belowMax ? `menor que ${max}` : `hasta ${max}`);
  const range = parts.length > 0 ? `debe ser ${parts.join(" y ")}` : "";
  const precision =
    decimals === 0
      ? "sin decimales"
      : decimals !== undefined
        ? `con ${decimals} decimales como máximo`
        : "";
  return [range, precision].filter(Boolean).join(", ");
};

/** Non-negative decimal written as number to Excel; a decimal comma becomes a point. */
const readNumber = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
  rule: NumberRule = {},
): string => {
  const trimmed = optionalText(value).replace(",", ".");
  if (!trimmed) {
    if (rule.required) issues.add(field, requiredMessage(label));
    return "";
  }
  const match = /^\d+(?:\.(\d+))?$/.exec(trimmed);
  const number = Number(trimmed);
  const invalid = `${label}: número no válido; ${describeRange(rule) || "debe ser un número positivo"}.`;
  if (!match || !Number.isFinite(number)) {
    issues.add(field, invalid);
    return "";
  }
  const decimals = match[1]?.length ?? 0;
  if (
    (rule.decimals !== undefined && decimals > rule.decimals) ||
    (rule.min !== undefined && (rule.aboveMin ? number <= rule.min : number < rule.min)) ||
    (rule.max !== undefined && (rule.belowMax ? number >= rule.max : number > rule.max))
  ) {
    issues.add(field, invalid);
    return "";
  }
  return trimmed;
};

const readCheck = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
): boolean => {
  if (value === undefined) return false;
  if (typeof value !== "boolean") {
    issues.add(field, `${label}: valor no válido.`);
    return false;
  }
  return value;
};

const readChoice = <T extends string>(
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
  choices: readonly T[],
  required = false,
): T | "" => {
  if (value === "" || value === undefined) {
    if (required) issues.add(field, requiredMessage(label));
    return "";
  }
  const choice = choices.find((candidate) => candidate === value);
  if (choice !== undefined) return choice;
  issues.add(field, `${label}: selección no válida.`);
  return "";
};

const readCatalogId = (
  issues: IssueCollector,
  field: HireIssueField,
  value: unknown,
  label: string,
  required: boolean,
): string => {
  const trimmed = optionalText(value);
  if (!trimmed) {
    if (required) issues.add(field, requiredMessage(label));
    return "";
  }
  if (!CATALOG_ID_PATTERN.test(trimmed)) {
    issues.add(field, `El campo ${label} no es un ID válido.`);
    return "";
  }
  return trimmed;
};

/** Required and optional rules come from the single catalog field registry. */
const readCatalogField = (
  issues: IssueCollector,
  record: HirePersonInput,
  field: HireCatalogFieldId,
): string => {
  const { label, required } = HIRE_CATALOG_FIELDS[field];
  const id = readCatalogId(issues, field, record[field], label, required);
  if (id && field === "referenceModelWeek") {
    try {
      parseReferenceModelOptionId(id);
    } catch (error) {
      issues.add(field, error instanceof Error ? error.message : `${label}: par no válido.`);
      return "";
    }
  }
  return id;
};

// --- Identity documents -----------------------------------------------------

type DocumentKind = "nif" | "nie" | "other";

const fold = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\./g, "")
    .toLowerCase();

/** Classifies a document type by its PeopleNet name (NIF/DNI, NIE or anything else). */
export const hireDocumentKind = (
  documentType: string,
  documentTypes: readonly HireCatalogOption[],
): DocumentKind => {
  const name = fold(documentTypes.find((option) => option.id === documentType)?.name ?? "");
  if (/\bnie\b/.test(name)) return "nie";
  if (/\b(nif|dni)\b/.test(name)) return "nif";
  return "other";
};

const normalizeDocument = (value: string): string => value.replace(/[\s-]/g, "").toUpperCase();

const nifLetterMatches = (digits: string, letter: string): boolean =>
  NIF_LETTERS[Number(digits) % 23] === letter;

export const isValidNif = (value: string): boolean => {
  const match = /^(\d{8})([A-Z])$/.exec(value);
  return match !== null && nifLetterMatches(match[1], match[2]);
};

export const isValidNie = (value: string): boolean => {
  const match = /^([XYZ])(\d{7})([A-Z])$/.exec(value);
  return match !== null && nifLetterMatches(`${"XYZ".indexOf(match[1])}${match[2]}`, match[3]);
};

const readDocumentNumber = (
  issues: IssueCollector,
  value: unknown,
  kind: DocumentKind | null,
): string => {
  const text = readText(issues, "documentNumber", value, "número de documento", {
    required: true,
    max: 20,
  });
  if (!text) return "";
  if (kind === "nif" || kind === "nie") {
    const normalized = normalizeDocument(text);
    const valid = kind === "nif" ? isValidNif(normalized) : isValidNie(normalized);
    if (!valid) {
      issues.add(
        "documentNumber",
        kind === "nif"
          ? "Núm. de documento: el NIF debe tener 8 dígitos y una letra de control correcta."
          : "Núm. de documento: el NIE debe empezar por X, Y o Z, con 7 dígitos y una letra de control correcta.",
      );
      return "";
    }
    return normalized;
  }
  if (!/^[\p{L}\p{N}./-]+$/u.test(text)) {
    issues.add("documentNumber", "Núm. de documento: solo admite letras, números, «.», «-» y «/».");
    return "";
  }
  return text;
};

// --- Contact and address ----------------------------------------------------

/** "34", "0034" and "+34" all mean the Spanish prefix. */
const normalizePrefix = (value: string): string =>
  value.startsWith("00") ? `+${value.slice(2)}` : /^\d/.test(value) ? `+${value}` : value;

const readPhone = (
  issues: IssueCollector,
  record: HirePersonInput,
  prefixField: "phonePrefix" | "mobilePrefix",
  numberField: "phoneNumber" | "mobileNumber",
  label: string,
): readonly [string, string] => {
  const prefix = normalizePrefix(optionalText(record[prefixField]).replace(/\s+/g, ""));
  const number = optionalText(record[numberField]).replace(/[\s.-]/g, "");
  if (!prefix && !number) return ["", ""];
  if (!number) issues.add(numberField, `${label}: indica el número o quita el prefijo.`);
  if (!prefix) issues.add(prefixField, `${label}: indica el prefijo (por ejemplo, +34).`);
  if (prefix && !/^\+\d{1,4}$/.test(prefix)) {
    issues.add(prefixField, `${label}: el prefijo debe tener el formato +34.`);
  }
  if (number && !/^\d{6,15}$/.test(number)) {
    issues.add(numberField, `${label}: el número solo admite entre 6 y 15 dígitos.`);
  } else if (prefix === "+34" && !/^\d{9}$/.test(number)) {
    issues.add(numberField, `${label}: un número español tiene 9 dígitos.`);
  } else if (prefix === "+34" && numberField === "mobileNumber" && !/^[67]/.test(number)) {
    issues.add(numberField, `${label}: un móvil español empieza por 6 o 7.`);
  } else if (prefix === "+34" && numberField === "phoneNumber" && !/^[6-9]/.test(number)) {
    issues.add(numberField, `${label}: un teléfono español empieza por 6, 7, 8 o 9.`);
  }
  if (issues.has(prefixField) || issues.has(numberField)) return ["", ""];
  return [prefix, number];
};

const readPostalCode = (issues: IssueCollector, record: HirePersonInput): string => {
  const postalCode = readText(issues, "postalCode", record.postalCode, "código postal", {
    required: true,
    max: 10,
  });
  if (!postalCode) return "";
  const country = optionalText(record.country);
  if (country === SPAIN) {
    if (!/^\d{5}$/.test(postalCode)) {
      issues.add("postalCode", "Código postal: en España tiene 5 dígitos.");
      return "";
    }
    const province = lastGeoSegment(optionalText(record.province));
    if (/^\d{1,2}$/.test(province) && postalCode.slice(0, 2) !== province.padStart(2, "0")) {
      issues.add(
        "postalCode",
        `Código postal: no corresponde a la provincia elegida (debe empezar por ${province.padStart(2, "0")}).`,
      );
      return "";
    }
    return postalCode;
  }
  if (!/^[\p{L}\p{N} -]{2,10}$/u.test(postalCode)) {
    issues.add("postalCode", "Código postal: solo admite letras, números, espacios y guiones.");
    return "";
  }
  return postalCode;
};

// --- Social Security ----------------------------------------------------------

type SsFields = readonly [HireIssueField, HireIssueField, HireIssueField];

/** Province (01–53) + 7/8-digit number + 2 control digits = (province·10⁷ + number) mod 97. */
export const isValidSsNumber = (prefix: string, body: string, suffix: string): boolean => {
  if (!/^\d{2}$/.test(prefix) || !/^\d{7,8}$/.test(body) || !/^\d{2}$/.test(suffix)) return false;
  const province = Number(prefix);
  if (province < 1 || province > 53) return false;
  const number = Number(body);
  const base = number < 10_000_000 ? province * 10_000_000 + number : Number(`${prefix}${body}`);
  return base % 97 === Number(suffix);
};

const readSsNumber = (
  issues: IssueCollector,
  values: readonly [unknown, unknown, unknown],
  fields: SsFields,
  labels: readonly [string, string, string],
  groupLabel: string,
  required: boolean,
): readonly [string, string, string] => {
  const digits = (value: unknown): string => optionalText(value).replace(/\s+/g, "");
  const prefix = digits(values[0]);
  const body = digits(values[1]);
  const suffix = digits(values[2]);
  const parts = [prefix, body, suffix] as const;
  if (!prefix && !body && !suffix && !required) return ["", "", ""];
  parts.forEach((part, index) => {
    if (!part) issues.add(fields[index], requiredMessage(labels[index]));
  });
  if (prefix && (!/^\d{2}$/.test(prefix) || Number(prefix) < 1 || Number(prefix) > 53)) {
    issues.add(fields[0], `${groupLabel}: la provincia son 2 dígitos entre 01 y 53.`);
  }
  if (body && !/^\d{7,8}$/.test(body)) {
    issues.add(fields[1], `${groupLabel}: el número tiene 7 u 8 dígitos.`);
  }
  if (suffix && !/^\d{2}$/.test(suffix)) {
    issues.add(fields[2], `${groupLabel}: los dígitos de control son 2 números.`);
  }
  if (fields.some((field) => issues.has(field))) return ["", "", ""];
  if (!isValidSsNumber(prefix, body, suffix)) {
    issues.add(fields[2], `${groupLabel}: los dígitos de control no corresponden al número.`);
    return ["", "", ""];
  }
  return [prefix, body, suffix];
};

// --- Bank -------------------------------------------------------------------

const readIban = (issues: IssueCollector, value: unknown): string => {
  const text = optionalText(value);
  if (!text) {
    issues.add("iban", requiredMessage("IBAN"));
    return "";
  }
  const iban = normalizeIban(text);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(iban)) {
    issues.add("iban", "El IBAN no tiene un formato válido.");
    return "";
  }
  if (iban.startsWith("ES") && iban.length !== 24) {
    issues.add("iban", "El IBAN español tiene 24 caracteres.");
    return "";
  }
  if (!ibanChecksumIsValid(iban)) {
    issues.add("iban", "El IBAN no supera la comprobación de control.");
    return "";
  }
  const spanish = splitSpanishIban(iban);
  if (
    spanish &&
    spanishControlDigits(spanish.bank, spanish.branch, spanish.account) !== spanish.controlDigits
  ) {
    issues.add("iban", "IBAN: los dígitos de control de la cuenta no son válidos.");
    return "";
  }
  return iban;
};

// --- Dates relative to the hire date ----------------------------------------

const ageOn = (birthDate: string, date: string): number => {
  const [birthYear, birthMonth, birthDay] = birthDate.split("-").map(Number);
  const [year, month, day] = date.split("-").map(Number);
  const hadBirthday = month > birthMonth || (month === birthMonth && day >= birthDay);
  return year - birthYear - (hadBirthday ? 0 : 1);
};

const checkDateOrder = (issues: IssueCollector, extra: HireExtraFields, hireDate: string): void => {
  if (!hireDate) return;
  if (extra.birthDate) {
    if (extra.birthDate >= hireDate) {
      issues.add("birthDate", "La fecha de nacimiento debe ser anterior a la fecha de alta.");
    } else if (ageOn(extra.birthDate, hireDate) < MIN_HIRE_AGE) {
      issues.add(
        "birthDate",
        `La persona debe tener al menos ${MIN_HIRE_AGE} años en la fecha de alta.`,
      );
    } else if (ageOn(extra.birthDate, hireDate) < ADULT_AGE && !extra.legalRepresentativeNif) {
      issues.add(
        "legalRepresentativeNif",
        "NIF Representante legal: obligatorio para menores de 18 años.",
      );
    }
  }
  if (extra.contractEnd && extra.contractEnd.slice(0, 10) < hireDate) {
    issues.add("contractEnd", "Fin de contrato: no puede ser anterior a la fecha de alta.");
  }
  if (extra.probationEnd && extra.probationEnd < hireDate) {
    issues.add(
      "probationEnd",
      "La fecha fin periodo prueba no puede ser anterior a la fecha de alta.",
    );
  }
  if (extra.seniorityDate && extra.seniorityDate > hireDate) {
    issues.add(
      "seniorityDate",
      "La fecha de antigüedad no puede ser posterior a la fecha de alta.",
    );
  }
  if (extra.contractSeniorityStart && extra.contractSeniorityStart > hireDate) {
    issues.add(
      "contractSeniorityStart",
      "La fecha de inicio antigüedad contrato no puede ser posterior a la fecha de alta.",
    );
  }
};

// --- Person -----------------------------------------------------------------

const HOUR_LIMITS: Record<string, number> = { "1": 168, "2": 744, "3": 8784 };

const readExtraFields = (issues: IssueCollector, record: HirePersonInput): HireExtraFields => {
  const positionChoice = readChoice(
    issues,
    "positionChoice",
    record.positionChoice,
    "Puesto / Posición",
    ["job", "position"],
    true,
  );
  const occupationType =
    positionChoice === "position"
      ? readChoice(issues, "occupationType", record.occupationType, "Tipo de ocupación", [
          "hours",
          "ejc",
          "headcount",
        ])
      : "";
  const ssNumberChoice = readChoice(issues, "ssNumberChoice", record.ssNumberChoice, "Núm. S.S.", [
    "assigned",
    "unassigned",
  ]);
  const scheduleChoice = readChoice(issues, "scheduleChoice", record.scheduleChoice, "Jornada", [
    "full",
    "partial",
  ]);
  const disabilityChoice = readChoice(
    issues,
    "disabilityChoice",
    record.disabilityChoice,
    "Minusvalía",
    ["without", "with"],
  );
  const bankFormatChoice = readChoice(
    issues,
    "bankFormatChoice",
    record.bankFormatChoice,
    "Formato bancario",
    ["iban", "other"],
    true,
  );
  const assigned = ssNumberChoice === "assigned";
  const partial = scheduleChoice === "partial";
  const other = bankFormatChoice === "other";
  const [phonePrefix, phoneNumber] = readPhone(
    issues,
    record,
    "phonePrefix",
    "phoneNumber",
    "Teléfono",
  );
  const [mobilePrefix, mobileNumber] = readPhone(
    issues,
    record,
    "mobilePrefix",
    "mobileNumber",
    "Móvil",
  );
  const [ssNumberPrefix, ssNumberBody, ssNumberSuffix] = assigned
    ? readSsNumber(
        issues,
        [record.ssNumberPrefix, record.ssNumberBody, record.ssNumberSuffix],
        ["ssNumberPrefix", "ssNumberBody", "ssNumberSuffix"],
        ["provincia del Núm. S.S.", "número de S.S.", "dígito del Núm. S.S."],
        "Núm. S.S.",
        true,
      )
    : ["", "", ""];
  const [replacedSsPrefix, replacedSsBody, replacedSsSuffix] = readSsNumber(
    issues,
    [record.replacedSsPrefix, record.replacedSsBody, record.replacedSsSuffix],
    ["replacedSsPrefix", "replacedSsBody", "replacedSsSuffix"],
    [
      "provincia del Nº S.S. del sustituido",
      "número de S.S. del sustituido",
      "dígito del Nº S.S. del sustituido",
    ],
    "Nº S.S. del sustituido",
    false,
  );
  const hourType = partial
    ? readChoice(issues, "hourType", record.hourType, "Tipo de horas", ["1", "2", "3"], true)
    : "";
  const legalRepresentativeText = readText(
    issues,
    "legalRepresentativeNif",
    record.legalRepresentativeNif,
    "NIF Representante legal",
    { max: 20 },
  );
  const legalRepresentativeNif = normalizeDocument(legalRepresentativeText);
  if (
    legalRepresentativeNif &&
    !isValidNif(legalRepresentativeNif) &&
    !isValidNie(legalRepresentativeNif)
  ) {
    issues.add(
      "legalRepresentativeNif",
      "NIF Representante legal: debe ser un NIF o NIE con su letra de control correcta.",
    );
  }
  const atradiusId = readText(issues, "atradiusId", record.atradiusId, "ID Atradius", { max: 20 });
  if (atradiusId && !/^\d+$/.test(atradiusId)) {
    issues.add("atradiusId", "ID Atradius: solo admite números.");
  }
  return {
    positionChoice,
    occupationType,
    legalRepresentativeNif: issues.has("legalRepresentativeNif") ? "" : legalRepresentativeNif,
    birthDate: readDate(issues, "birthDate", record.birthDate, "fecha de nacimiento"),
    atradiusId: issues.has("atradiusId") ? "" : atradiusId,
    phonePrefix,
    phoneNumber,
    mobilePrefix,
    mobileNumber,
    addressLine1: readText(issues, "addressLine1", record.addressLine1, "dirección línea 1", {
      required: true,
      max: 100,
    }),
    addressLine2: readText(issues, "addressLine2", record.addressLine2, "dirección línea 2", {
      max: 100,
    }),
    streetNumber: readText(issues, "streetNumber", record.streetNumber, "número de vía", {
      required: true,
      max: 10,
    }),
    buildingBlock: readText(issues, "buildingBlock", record.buildingBlock, "bloque", { max: 10 }),
    staircase: readText(issues, "staircase", record.staircase, "escalera", { max: 10 }),
    floor: readText(issues, "floor", record.floor, "piso", { max: 10 }),
    door: readText(issues, "door", record.door, "puerta", { max: 10 }),
    postalCode: readPostalCode(issues, record),
    occupationHours:
      occupationType === "hours"
        ? readNumber(issues, "occupationHours", record.occupationHours, "Núm. Horas", {
            required: true,
            min: 0,
            aboveMin: true,
            decimals: 2,
          })
        : "",
    occupationEjc:
      occupationType === "ejc"
        ? readNumber(issues, "occupationEjc", record.occupationEjc, "Núm. EJC", {
            required: true,
            min: 0,
            aboveMin: true,
            decimals: 4,
          })
        : "",
    occupationHeadcount:
      occupationType === "headcount"
        ? readNumber(issues, "occupationHeadcount", record.occupationHeadcount, "Núm. Efectivos", {
            required: true,
            min: 1,
            decimals: 0,
          })
        : "",
    keyEmployee: readCheck(issues, "keyEmployee", record.keyEmployee, "Empleado clave"),
    strategicEmployee: readCheck(
      issues,
      "strategicEmployee",
      record.strategicEmployee,
      "Empleado estratégico",
    ),
    ssNumberChoice,
    ssNumberPrefix,
    ssNumberBody,
    ssNumberSuffix,
    contractEnd: readDateTime(issues, "contractEnd", record.contractEnd, "Fin de contrato"),
    scheduleChoice,
    partialSchedulePercent: partial
      ? readNumber(
          issues,
          "partialSchedulePercent",
          record.partialSchedulePercent,
          "% Jornada parcial",
          { required: true, min: 0, aboveMin: true, max: 100, belowMax: true, decimals: 2 },
        )
      : "",
    hourType,
    numberOfHours: partial
      ? readNumber(issues, "numberOfHours", record.numberOfHours, "Número de horas", {
          required: true,
          min: 0,
          aboveMin: true,
          max: HOUR_LIMITS[hourType],
          decimals: 2,
        })
      : "",
    partialScheduleType: partial
      ? readChoice(
          issues,
          "partialScheduleType",
          record.partialScheduleType,
          "Tipo de jornada parcial",
          ["R", "I"],
          true,
        )
      : "",
    weeklyWorkDays: partial
      ? readNumber(issues, "weeklyWorkDays", record.weeklyWorkDays, "Días de trabajo semanales", {
          required: true,
          min: 1,
          max: 7,
          decimals: 0,
        })
      : "",
    legalReductionPercent: readNumber(
      issues,
      "legalReductionPercent",
      record.legalReductionPercent,
      "% Reducción",
      { min: 0, aboveMin: true, max: 100, decimals: 2 },
    ),
    replacedSsPrefix,
    replacedSsBody,
    replacedSsSuffix,
    disabilityChoice,
    disabilityPercent:
      disabilityChoice === "with"
        ? readNumber(issues, "disabilityPercent", record.disabilityPercent, "% minusvalía", {
            required: true,
            min: 0,
            aboveMin: true,
            max: 100,
            decimals: 2,
          })
        : "",
    contractSeniorityStart: readDate(
      issues,
      "contractSeniorityStart",
      record.contractSeniorityStart,
      "fecha de inicio antigüedad contrato",
    ),
    womanMaternity24: readCheck(
      issues,
      "womanMaternity24",
      record.womanMaternity24,
      "Mujer mater. 24 meses",
    ),
    underrepresentedWoman: readCheck(
      issues,
      "underrepresentedWoman",
      record.underrepresentedWoman,
      "Mujer subrepresentada",
    ),
    activeInsertionIncome: readCheck(
      issues,
      "activeInsertionIncome",
      record.activeInsertionIncome,
      "Renta activa de inserción",
    ),
    reliefContract: readCheck(issues, "reliefContract", record.reliefContract, "Contrato relevo"),
    readmittedDisabled: readCheck(
      issues,
      "readmittedDisabled",
      record.readmittedDisabled,
      "Incapacitado readmitido",
    ),
    firstSelfEmployedWorker: readCheck(
      issues,
      "firstSelfEmployedWorker",
      record.firstSelfEmployedWorker,
      "Primer trabajador autónomo",
    ),
    probationDays: readNumber(issues, "probationDays", record.probationDays, "Días de prueba", {
      min: 0,
      max: 365,
      decimals: 0,
    }),
    probationEnd: readDate(issues, "probationEnd", record.probationEnd, "fecha fin periodo prueba"),
    additionalClause: readText(
      issues,
      "additionalClause",
      record.additionalClause,
      "cláusula adicional",
      { max: 250, multiline: true },
    ),
    annualGross: readNumber(issues, "annualGross", record.annualGross, "Bruto anual", {
      min: 0,
      aboveMin: true,
      max: 99_999_999.99,
      decimals: 2,
    }),
    seniorityDate: readDate(issues, "seniorityDate", record.seniorityDate, "fecha de antigüedad"),
    extrasDate: readDate(issues, "extrasDate", record.extrasDate, "fecha de extras"),
    timeManagementPay: readCheck(
      issues,
      "timeManagementPay",
      record.timeManagementPay,
      "Pago con gestión del tiempo",
    ),
    bankFormatChoice,
    iban: bankFormatChoice === "iban" ? readIban(issues, record.iban) : "",
    bankBranch: other
      ? readBankDigits(issues, "bankBranch", record.bankBranch, "sucursal bancaria", 8)
      : "",
    accountNumber: other
      ? readBankDigits(issues, "accountNumber", record.accountNumber, "número de cuenta", 10)
      : "",
  };
};

/** Spanish CCC parts: branch = bank (4) + office (4); account = 10 digits. */
const readBankDigits = (
  issues: IssueCollector,
  field: "bankBranch" | "accountNumber",
  value: unknown,
  label: string,
  length: number,
): string => {
  const digits = optionalText(value).replace(/[\s-]/g, "");
  if (!digits) {
    issues.add(field, requiredMessage(label));
    return "";
  }
  if (!new RegExp(`^\\d{${length}}$`).test(digits)) {
    issues.add(field, `El campo ${label} tiene ${length} dígitos.`);
    return "";
  }
  return digits;
};

const readEmail = (issues: IssueCollector, value: unknown): string => {
  const email = readText(issues, "email", value, "correo", { required: true, max: 100 });
  if (email && !EMAIL_PATTERN.test(email)) {
    issues.add("email", "El correo no tiene un formato válido.");
    return "";
  }
  return email;
};

/** Rules that tie several fields together once each one is valid on its own. */
const checkCrossFieldRules = (issues: IssueCollector, person: HirePerson): void => {
  checkDateOrder(issues, person, person.hireDate);
  if (person.legalReductionPercent && !person.reductionReason) {
    issues.add(
      "reductionReason",
      "ID Motivo de reducción: obligatorio si indicas un % de reducción.",
    );
  }
  if (
    person.reductionReason &&
    !person.legalReductionPercent &&
    !issues.has("legalReductionPercent")
  ) {
    issues.add(
      "legalReductionPercent",
      "% Reducción: obligatorio si indicas un motivo de reducción.",
    );
  }
  const replacedSs = person.replacedSsPrefix || person.replacedSsBody;
  if (replacedSs && !person.substitutionCause) {
    issues.add(
      "substitutionCause",
      "ID Causa sustitución: obligatoria si indicas el Nº S.S. del sustituido.",
    );
  }
  if (
    person.substitutionCause &&
    !replacedSs &&
    !issues.has("replacedSsPrefix") &&
    !issues.has("replacedSsBody") &&
    !issues.has("replacedSsSuffix")
  ) {
    issues.add(
      "replacedSsBody",
      "Nº S.S. del sustituido: obligatorio si indicas una causa de sustitución.",
    );
  }
  if (
    !person.referenceModelWeek &&
    !issues.has("referenceModelWeek") &&
    (person.timeManagementPay || person.partialScheduleType === "I")
  ) {
    issues.add(
      "referenceModelWeek",
      "ID Modelo/Semana de referencia: obligatorio con pago con gestión del tiempo o jornada parcial irregular.",
    );
  }
};

/**
 * Validates every field and returns the normalized person plus all problems
 * found, at most one per field. Values with a problem are returned empty.
 */
export const collectHirePersonIssues = (
  value: unknown,
  context: HireValidationContext = {},
): { person: HirePerson; issues: readonly HireFieldIssue[] } => {
  const issues = new IssueCollector();
  // Every key is read as unknown and checked below, as the Server Action receives it.
  const record = (typeof value === "object" && value !== null ? value : {}) as HirePersonInput;
  const extra = readExtraFields(issues, record);
  const catalog = (field: HireCatalogFieldId): string => readCatalogField(issues, record, field);
  const documentType = catalog("documentType");
  const documentKind =
    documentType && context.documentTypes
      ? hireDocumentKind(documentType, context.documentTypes)
      : null;
  const person: HirePerson = {
    firstName: readText(issues, "firstName", record.firstName, "nombre", {
      required: true,
      max: 50,
    }),
    lastName1: readText(issues, "lastName1", record.lastName1, "primer apellido", {
      required: true,
      max: 50,
    }),
    lastName2: readText(issues, "lastName2", record.lastName2, "segundo apellido", { max: 50 }),
    documentNumber: readDocumentNumber(issues, record.documentNumber, documentKind),
    email: readEmail(issues, record.email),
    hireDate: readDate(issues, "hireDate", record.hireDate, "fecha de alta", true),
    ...extra,
    documentType,
    issuingCountry: catalog("issuingCountry"),
    nationality: catalog("nationality"),
    birthProvince: catalog("birthProvince"),
    birthCommunity: catalog("birthCommunity"),
    birthCountry: catalog("birthCountry"),
    gender: catalog("gender"),
    maritalStatus: catalog("maritalStatus"),
    atradiusJobCode: catalog("atradiusJobCode"),
    atradiusCategory: catalog("atradiusCategory"),
    department: catalog("department"),
    locationType: catalog("locationType"),
    roadType: catalog("roadType"),
    city: catalog("city"),
    province: catalog("province"),
    community: catalog("community"),
    country: catalog("country"),
    legalEntity: catalog("legalEntity"),
    job:
      extra.positionChoice === "job"
        ? readCatalogId(issues, "job", record.job, "ID Puesto", true)
        : "",
    position:
      extra.positionChoice === "position"
        ? readCatalogId(issues, "position", record.position, "ID Posición", true)
        : "",
    workUnit: catalog("workUnit"),
    workLocation: catalog("workLocation"),
    category: catalog("category"),
    startReason: catalog("startReason"),
    structure: catalog("structure"),
    functionalWorkCenter: catalog("functionalWorkCenter"),
    tc1Header: catalog("tc1Header"),
    tariffGroup: catalog("tariffGroup"),
    ssOccupation: catalog("ssOccupation"),
    ssAgreement: catalog("ssAgreement"),
    legalContract: readCatalogId(
      issues,
      "legalContract",
      record.legalContract,
      "ID Contrato legal",
      true,
    ),
    internalContract: readCatalogId(
      issues,
      "internalContract",
      record.internalContract,
      "ID Contrato interno",
      true,
    ),
    laborRelation: catalog("laborRelation"),
    reductionReason: catalog("reductionReason"),
    substitutionCause: catalog("substitutionCause"),
    unemploymentCondition: catalog("unemploymentCondition"),
    specialLaborRelation: catalog("specialLaborRelation"),
    socialExclusion: catalog("socialExclusion"),
    payrollAgreement: catalog("payrollAgreement"),
    adjustmentType: catalog("adjustmentType"),
    salaryType: catalog("salaryType"),
    payrollCurrency: catalog("payrollCurrency"),
    union: catalog("union"),
    irpfType: catalog("irpfType"),
    perceptionKey: catalog("perceptionKey"),
    variableCompensationMode: catalog("variableCompensationMode"),
    referenceModelWeek: catalog("referenceModelWeek"),
    paymentCurrency: catalog("paymentCurrency"),
    paymentType: catalog("paymentType"),
    companyBank: catalog("companyBank"),
    accountCurrency: catalog("accountCurrency"),
  };
  checkCrossFieldRules(issues, person);
  return { person, issues: issues.issues };
};

const summarize = (issues: readonly Meta4HireIssue[]): string => {
  const described = issues.map((issue) =>
    issue.person === undefined ? issue.message : `Persona ${issue.person}: ${issue.message}`,
  );
  if (described.length === 1) return described[0] ?? "Revisa los datos indicados.";
  return `Hay ${described.length} datos que revisar. ${described.join(" ")}`;
};

const invalid = (issues: readonly Meta4HireIssue[]): Meta4HireError =>
  new Meta4HireError("META4_HIRE_VALIDATION", summarize(issues), issues);

export const parseHirePerson = (value: unknown, context?: HireValidationContext): HirePerson => {
  if (typeof value !== "object" || value === null) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Cada persona debe ser un objeto.");
  }
  const { person, issues } = collectHirePersonIssues(value, context);
  if (issues.length > 0) throw invalid(issues);
  return person;
};

export const parseHirePeople = (value: unknown, context?: HireValidationContext): HirePerson[] => {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Debes indicar al menos una persona.");
  }
  if (value.length > MAX_PERSON_COUNT) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      `No se pueden dar de alta más de ${MAX_PERSON_COUNT} personas a la vez.`,
    );
  }
  const people: HirePerson[] = [];
  const issues: Meta4HireIssue[] = [];
  value.forEach((entry: unknown, index) => {
    if (typeof entry !== "object" || entry === null) {
      issues.push({ person: index + 1, message: "Cada persona debe ser un objeto." });
      return;
    }
    const result = collectHirePersonIssues(entry, context);
    people.push(result.person);
    issues.push(...result.issues.map((issue) => ({ ...issue, person: index + 1 })));
  });
  if (issues.length > 0) throw invalid(issues);
  return people;
};
