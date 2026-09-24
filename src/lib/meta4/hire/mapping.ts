/**
 * Mapping from Hire_1_PERSONA.xls AltaNueva headers and duplicate
 * display / real_* / STD_EMAIL_ATRADIUS columns.
 * Overlay only these cells; leave the rest of the filled template intact.
 */

export const HIRE_DATA_SHEET = "AltaNueva";
export const HIRE_PERSON_SHEET = "AltaPersona";
export const FIRST_PERSON_ROW = 6;
export const MAX_PERSON_COUNT = 300;

export const HIRE_TEMPLATE_SHEET_NAMES = [
  "AltaNueva",
  "AltaPersona",
  "ExternoAltaNueva",
  "ExternoAltaPersona",
  "JubiladoAltaNueva",
  "JubiladoAltaPersona",
  "ProfesionalAltaNueva",
  "ProfesionalAltaPersona",
  "DatosPersona",
  "DatosEmpleado",
  "DataTemplate",
  "BaseTemplate",
  "SRCO_VALIDATION",
  "SRSP_VALIDATION",
  "SRCO_PARAM_EXCEL",
] as const;

/** Display + mapped real_* / duplicate columns written from UI input. */
export const MANUAL_COLUMNS = {
  firstName: ["R"],
  lastName1: ["O", "P"],
  lastName2: ["Q"],
  documentType: ["V", "W"],
  // SRCO_PA_HIRE_WIZ_PERS_DATA display + real_* columns. Geographic values go
  // as their last path segment. Atradius job code and category only have the
  // bound real_* cell (AM and T; their row-4 captions describe other fields).
  issuingCountry: ["AA", "AB"],
  nationality: ["AE", "AF"],
  birthProvince: ["AG", "AH"],
  birthCountry: ["AO", "AP"],
  gender: ["AQ", "AR"],
  maritalStatus: ["AS", "AT"],
  atradiusJobCode: ["AM"],
  atradiusCategory: ["T"],
  locationType: ["BB", "BC"],
  roadType: ["BD", "BE"],
  city: ["BQ", "BR"],
  province: ["BW", "BX"],
  community: ["CB", "CC"],
  country: ["CE", "CF"],
  // SRCO_PA_HIRE_WIZ_ORG. The template's legal entity (ACYC_ES) only exists in
  // CYC, so the chosen one replaces it. Estructura and centro funcional have a
  // single bound cell.
  legalEntity: ["CH", "CI"],
  job: ["CK", "CL"],
  position: ["CM", "CN"],
  workUnit: ["CS", "CT"],
  workLocation: ["CU", "CV"],
  category: ["CW", "CX"],
  startReason: ["DB", "DC"],
  structure: ["AZ"],
  functionalWorkCenter: ["BA"],
  documentNumber: ["X", "Y"],
  email: ["AY", "IQ"],
  hireDate: ["D", "E"],
  // SRSP_PA_HIRE_WIZ_SS display + real_* columns; the real_* cells of the
  // optional catalogs are VLOOKUPs over an empty validation sheet, so both
  // cells receive the ID.
  tc1Header: ["DZ", "EA"],
  tariffGroup: ["EB", "EC"],
  ssOccupation: ["ED", "EE"],
  ssAgreement: ["EF", "EG"],
  legalContract: ["EI", "EJ"],
  internalContract: ["EK", "EL"],
  laborRelation: ["EO", "EP"],
  reductionReason: ["EZ", "FA"],
  substitutionCause: ["FD", "FE"],
  unemploymentCondition: ["FI", "FJ"],
  specialLaborRelation: ["FK", "FL"],
  socialExclusion: ["FM", "FN"],
  // SRCO_PA_HIRE_WIZ_PAYROLL display + real_* columns. Some real_* cells are
  // formulas over the display cell (GG = GF+0, GS = VLOOKUP on an empty
  // validation sheet), so both cells receive the ID.
  adjustmentType: ["GF", "GG"],
  payrollAgreement: ["GH", "GI"],
  salaryType: ["GL", "GM"],
  union: ["GR", "GS"],
  payrollCurrency: ["GV", "GW"],
  irpfType: ["HB", "HC"],
  perceptionKey: ["HD", "HE"],
  // PAYROLL.CSP_TP_MOD_VAR; IT ("MONEDA") is not its display cell.
  variableCompensationMode: ["IU"],
  // SRSP_PA_HIRE_WIZ_DATOS_PAGO display + real_* columns. The PAYROLL copies
  // (GX–HA, "TIPO PAGO_", "BANCO EMPRESA_") stay as in the template.
  paymentCurrency: ["HT", "HU"],
  paymentType: ["HV", "HW"],
  companyBank: ["HX", "HY"],
  accountCurrency: ["IJ", "IK"],
} as const;

export const WRITTEN_COLUMNS: readonly string[] = Object.values(MANUAL_COLUMNS).flat();

export const toExcelSerialDate = (isoDate: string): number => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) {
    throw new Error("Fecha de alta no válida.");
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utc = Date.UTC(year, month - 1, day);
  const epoch = Date.UTC(1899, 11, 30);
  return Math.round((utc - epoch) / 86_400_000);
};

export const personRowIndex = (personOffset: number): number => FIRST_PERSON_ROW + personOffset;
