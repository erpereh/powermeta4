/** Unidad organizativa de un nivel de la jerarquía (CEO, MB, ALT…). */
export type QuinquenalUnit = {
  id: string | null;
  name: string | null;
};

/** Valores económicos de un año de la consulta quinquenal. */
export type QuinquenalYear = {
  year: number;
  /** Coeficiente de jornada (`SSP_COEF_JORNADA`). */
  coefficient: number | null;
  /** Retribución anual a jornada completa. */
  salary: number | null;
  /** Retribución anual con la reducción de jornada aplicada. */
  reducedSalary: number | null;
  variable: number | null;
};

/** Una fila de `CYC_CONSULTA_QUINQUENAL`: empleado computable con sus 5 años. */
export type QuinquenalRow = {
  employeeId: string;
  legalEntity: string | null;
  firstName: string | null;
  lastName1: string | null;
  lastName2: string | null;
  /** Fechas ISO `YYYY-MM-DD`. */
  birthDate: string | null;
  seniorityDate: string | null;
  fusionId: string | null;
  structureId: string | null;
  structureName: string | null;
  ceo: QuinquenalUnit;
  mb: QuinquenalUnit;
  alt: QuinquenalUnit;
  direction: QuinquenalUnit;
  area: QuinquenalUnit;
  unit: QuinquenalUnit;
  service: QuinquenalUnit;
  jobId: string | null;
  jobName: string | null;
  categoryId: string | null;
  categoryName: string | null;
  jobGroup: string | null;
  jobLevel: string | null;
  costCenter: string | null;
  atradiusJob: string | null;
  variableModel: string | null;
  atradiusCategory: string | null;
  globalGrade: number | null;
  jobFamilyId: string | null;
  jobFamilyName: string | null;
  /** Del año actual al más antiguo. */
  years: QuinquenalYear[];
};

export type QuinquenalReport = {
  /** Fecha ISO de la consulta. */
  generatedOn: string;
  currentYear: number;
  rows: QuinquenalRow[];
};

export type QuinquenalResult =
  | { ok: true; report: QuinquenalReport }
  | { ok: false; message: string };
