/**
 * Mapping deduced from Hire_VACIO / Hire_1_PERSONA / Hire_3_PERSONAS.
 * Do not copy personal or test values from the filled examples as defaults.
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

/** Display + mapped real_* columns written from UI input. */
export const MANUAL_COLUMNS = {
  firstName: ["R"],
  lastName1: ["O", "P"],
  lastName2: ["Q"],
  documentType: ["V", "W"],
  documentNumber: ["X", "Y"],
  email: ["AY"],
  hireDate: ["D", "E"],
} as const;

/** Legal entity from server operational context + env, never from example ACYC_ES. */
export const SERVER_COLUMNS = {
  legalEntity: ["CH", "CI"],
} as const;

/** Value-only occupants of an empty VACIO data row — leave them, do not copy from P1/P3. */
export const TEMPLATE_VALUE_DEFAULT_COLUMNS = ["DT", "GK", "HF", "HG", "IF", "IG"] as const;

/**
 * Personal / contractual / payroll columns filled in the examples.
 * V1 leaves them empty; tests assert the generator does not write them.
 */
export const UNKNOWN_DO_NOT_WRITE_COLUMNS = [
  "AC",
  "AD",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AV",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BH",
  "BL",
  "BQ",
  "CG",
  "CK",
  "CS",
  "CU",
  "CW",
  "CY",
  "DB",
  "DU",
  "GJ",
  "GL",
  "HB",
  "HD",
  "ID",
  "IM",
  "IQ",
  "IS",
] as const;

/** AltaPersona row 6 example cells that P1 clears vs VACIO. Blank them; never copy values. */
export const ALTA_PERSONA_EXAMPLE_COLUMNS = [
  "G",
  "I",
  "O",
  "P",
  "Q",
  "R",
  "V",
  "W",
  "X",
  "Y",
  "AA",
  "AB",
  "AC",
  "AD",
  "AE",
  "AF",
  "AQ",
  "AR",
] as const;

export const WRITTEN_COLUMNS: readonly string[] = [
  ...MANUAL_COLUMNS.firstName,
  ...MANUAL_COLUMNS.lastName1,
  ...MANUAL_COLUMNS.lastName2,
  ...MANUAL_COLUMNS.documentType,
  ...MANUAL_COLUMNS.documentNumber,
  ...MANUAL_COLUMNS.email,
  ...MANUAL_COLUMNS.hireDate,
  ...SERVER_COLUMNS.legalEntity,
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
