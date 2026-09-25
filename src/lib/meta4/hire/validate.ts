import { HIRE_CATALOG_FIELDS, type HireCatalogFieldId } from "./catalogs";
import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import type { HireExtraFields, HirePerson, HirePersonInput } from "./types";

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

const parseDate = (value: unknown, label: string, required = false): string => {
  const trimmed = required ? requiredText(value, label) : optionalText(value);
  if (!trimmed) return "";
  const match = ISO_DATE_PATTERN.exec(trimmed);
  if (!match) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      `La ${label} debe usar el formato AAAA-MM-DD.`,
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
    throw new Meta4HireError("META4_HIRE_VALIDATION", `La ${label} no es una fecha válida.`);
  }
  return trimmed;
};

const parseDateTime = (value: unknown, label: string): string => {
  const trimmed = optionalText(value);
  if (!trimmed) return "";
  const match = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})$/.exec(trimmed);
  if (!match) throw new Meta4HireError("META4_HIRE_VALIDATION", `${label}: fecha y hora no válidas.`);
  parseDate(match[1], label, true);
  if (Number(match[2]) > 23 || Number(match[3]) > 59)
    throw new Meta4HireError("META4_HIRE_VALIDATION", `${label}: hora no válida.`);
  return trimmed;
};

const parseNumber = (value: unknown, label: string, max?: number, required = false): string => {
  const trimmed = required ? requiredText(value, label) : optionalText(value);
  if (!trimmed) return "";
  const number = Number(trimmed);
  if (!Number.isFinite(number) || number < 0 || (max !== undefined && number > max))
    throw new Meta4HireError("META4_HIRE_VALIDATION", `${label}: número no válido.`);
  return trimmed;
};

const parseCheck = (value: unknown, label: string): boolean => {
  if (value === undefined) return false;
  if (typeof value !== "boolean")
    throw new Meta4HireError("META4_HIRE_VALIDATION", `${label}: valor no válido.`);
  return value;
};

const parseIban = (value: unknown): string => {
  const iban = requiredText(value, "IBAN").replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(iban))
    throw new Meta4HireError("META4_HIRE_VALIDATION", "El IBAN no tiene un formato válido.");
  let remainder = 0;
  for (const character of `${iban.slice(4)}${iban.slice(0, 4)}`) {
    const digits = /[A-Z]/.test(character) ? String(character.charCodeAt(0) - 55) : character;
    for (const digit of digits) remainder = (remainder * 10 + Number(digit)) % 97;
  }
  if (remainder !== 1)
    throw new Meta4HireError("META4_HIRE_VALIDATION", "El IBAN no supera la comprobación de control.");
  return iban;
};

const parseChoice = <T extends string>(
  value: unknown,
  label: string,
  choices: readonly T[],
  required = false,
): T | "" => {
  if (value === "" || value === undefined) {
    if (!required) return "";
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} es obligatorio.`);
  }
  if (typeof value === "string" && choices.some((choice) => choice === value)) return value as T;
  throw new Meta4HireError("META4_HIRE_VALIDATION", `${label}: selección no válida.`);
};

const parseExtraFields = (record: HirePersonInput): HireExtraFields => {
  const positionChoice = parseChoice(record.positionChoice, "Puesto / Posición", ["job", "position"], true);
  const occupationType = positionChoice === "position"
    ? parseChoice(record.occupationType, "Tipo de ocupación", ["hours", "ejc", "headcount"])
    : "";
  const ssNumberChoice = parseChoice(record.ssNumberChoice, "Núm. S.S.", ["assigned", "unassigned"]);
  const scheduleChoice = parseChoice(record.scheduleChoice, "Jornada", ["full", "partial"]);
  const disabilityChoice = parseChoice(record.disabilityChoice, "Minusvalía", ["without", "with"]);
  const bankFormatChoice = parseChoice(record.bankFormatChoice, "Formato bancario", ["iban", "other"], true);
  const assigned = ssNumberChoice === "assigned";
  const partial = scheduleChoice === "partial";
  const other = bankFormatChoice === "other";
  return {
    positionChoice,
    occupationType,
    legalRepresentativeNif: optionalText(record.legalRepresentativeNif),
    birthDate: parseDate(record.birthDate, "fecha de nacimiento"),
    atradiusId: optionalText(record.atradiusId),
    phonePrefix: optionalText(record.phonePrefix),
    phoneNumber: optionalText(record.phoneNumber),
    mobilePrefix: optionalText(record.mobilePrefix),
    mobileNumber: optionalText(record.mobileNumber),
    addressLine1: requiredText(record.addressLine1, "dirección línea 1"),
    addressLine2: optionalText(record.addressLine2),
    streetNumber: requiredText(record.streetNumber, "número de vía"),
    buildingBlock: optionalText(record.buildingBlock),
    staircase: optionalText(record.staircase),
    floor: optionalText(record.floor),
    door: optionalText(record.door),
    postalCode: requiredText(record.postalCode, "código postal"),
    occupationHours: occupationType === "hours" ? parseNumber(record.occupationHours, "Núm. Horas", undefined, true) : "",
    occupationEjc: occupationType === "ejc" ? parseNumber(record.occupationEjc, "Núm. EJC", undefined, true) : "",
    occupationHeadcount: occupationType === "headcount" ? parseNumber(record.occupationHeadcount, "Núm. Efectivos", undefined, true) : "",
    keyEmployee: parseCheck(record.keyEmployee, "Empleado clave"),
    strategicEmployee: parseCheck(record.strategicEmployee, "Empleado estratégico"),
    ssNumberChoice,
    ssNumberPrefix: assigned ? requiredText(record.ssNumberPrefix, "provincia del Núm. S.S.") : "",
    ssNumberBody: assigned ? requiredText(record.ssNumberBody, "número de S.S.") : "",
    ssNumberSuffix: assigned ? requiredText(record.ssNumberSuffix, "dígito del Núm. S.S.") : "",
    contractEnd: parseDateTime(record.contractEnd, "Fin de contrato"),
    scheduleChoice,
    partialSchedulePercent: partial ? parseNumber(record.partialSchedulePercent, "% Jornada parcial", 100, true) : "",
    hourType: partial ? parseChoice(record.hourType, "Tipo de horas", ["1", "2", "3"], true) : "",
    numberOfHours: partial ? parseNumber(record.numberOfHours, "Número de horas", undefined, true) : "",
    partialScheduleType: partial ? parseChoice(record.partialScheduleType, "Tipo de jornada parcial", ["R", "I"], true) : "",
    weeklyWorkDays: partial ? parseNumber(record.weeklyWorkDays, "Días de trabajo semanales", 7, true) : "",
    legalReductionPercent: parseNumber(record.legalReductionPercent, "% Reducción", 100),
    replacedSsPrefix: optionalText(record.replacedSsPrefix),
    replacedSsBody: optionalText(record.replacedSsBody),
    replacedSsSuffix: optionalText(record.replacedSsSuffix),
    disabilityChoice,
    disabilityPercent: disabilityChoice === "with" ? parseNumber(record.disabilityPercent, "% minusvalía", 100, true) : "",
    contractSeniorityStart: parseDate(record.contractSeniorityStart, "fecha de inicio antigüedad contrato"),
    womanMaternity24: parseCheck(record.womanMaternity24, "Mujer mater. 24 meses"),
    underrepresentedWoman: parseCheck(record.underrepresentedWoman, "Mujer subrepresentada"),
    activeInsertionIncome: parseCheck(record.activeInsertionIncome, "Renta activa de inserción"),
    reliefContract: parseCheck(record.reliefContract, "Contrato relevo"),
    readmittedDisabled: parseCheck(record.readmittedDisabled, "Incapacitado readmitido"),
    firstSelfEmployedWorker: parseCheck(record.firstSelfEmployedWorker, "Primer trabajador autónomo"),
    probationDays: parseNumber(record.probationDays, "Días de prueba"),
    probationEnd: parseDate(record.probationEnd, "fecha fin periodo prueba"),
    additionalClause: optionalText(record.additionalClause),
    annualGross: parseNumber(record.annualGross, "Bruto anual"),
    seniorityDate: parseDate(record.seniorityDate, "fecha de antigüedad"),
    timeManagementPay: parseCheck(record.timeManagementPay, "Pago con gestión del tiempo"),
    bankFormatChoice,
    iban: bankFormatChoice === "iban" ? parseIban(record.iban) : "",
    bankBranch: other ? requiredText(record.bankBranch, "sucursal bancaria") : "",
    accountNumber: other ? requiredText(record.accountNumber, "número de cuenta") : "",
  };
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
  const extra = parseExtraFields(record);
  const job = extra.positionChoice === "job" ? parseCatalogId(record.job, "ID Puesto") : "";
  const position = extra.positionChoice === "position" ? parseCatalogId(record.position, "ID Posición") : "";
  return {
    firstName: requiredText(record.firstName, "nombre"),
    lastName1: requiredText(record.lastName1, "primer apellido"),
    lastName2: optionalText(record.lastName2),
    documentNumber: requiredText(record.documentNumber, "número de documento"),
    email: parseEmail(record.email),
    hireDate: parseDate(record.hireDate, "fecha de alta", true),
    ...extra,
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
    job,
    position,
    workUnit: parseCatalogField(record.workUnit, "workUnit"),
    workLocation: parseCatalogField(record.workLocation, "workLocation"),
    category: parseCatalogField(record.category, "category"),
    project: parseCatalogField(record.project, "project"),
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
