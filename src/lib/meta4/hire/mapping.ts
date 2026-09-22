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
  documentNumber: ["X", "Y"],
  email: ["AY", "IQ"],
  hireDate: ["D", "E"],
} as const;

/** Present in the filled template; V1 does not overwrite them. */
export const TEMPLATE_LEGAL_ENTITY_COLUMNS = ["CH", "CI"] as const;

export const WRITTEN_COLUMNS: readonly string[] = [
  ...MANUAL_COLUMNS.firstName,
  ...MANUAL_COLUMNS.lastName1,
  ...MANUAL_COLUMNS.lastName2,
  ...MANUAL_COLUMNS.documentType,
  ...MANUAL_COLUMNS.documentNumber,
  ...MANUAL_COLUMNS.email,
  ...MANUAL_COLUMNS.hireDate,
];

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
