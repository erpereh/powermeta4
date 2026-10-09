import type { QuinquenalRow, QuinquenalUnit } from "@/types/quinquenal";

import { QUINQUENAL_YEARS } from "./calc";

/** Valor de una celda del Excel quinquenal; las fechas van como `Date` (UTC). */
export type QuinquenalCell = string | number | Date | null;

/** Cabeceras fijas (columnas B a AL) del Excel que genera PeopleNet. */
export const QUINQUENAL_FIXED_HEADERS = [
  "EMPRESA",
  "MATRICULA",
  "NOMBRE",
  "PRIMER APELLIDO",
  "SEGUNDO APELLIDO",
  "FECHA NACIMIENTO",
  "ANTIGUEDAD",
  "ID FUSION",
  "ID ESTRUCTURA",
  "DESCRIPCION",
  "ID CEO",
  "NM CEO",
  "ID MB",
  "NM MB",
  "ID ALT",
  "NM ALT",
  "DIRECCION",
  "NOMBRE DIRECCION",
  "AREA",
  "NOMBRE AREA",
  "UNIDAD",
  "NOMBRE UNIDAD",
  "SERVICIO",
  "NOMBRE SERVICIO",
  "PUESTO",
  "NOMBRE PUESTO",
  "CATEGORIA",
  "NOMBRE CATEGORIA",
  "GRUPO PUESTO",
  "NIVEL DE PUESTO",
  "CENTRO DE COSTE",
  "ATRADIUS JOB CODE",
  "TIPO MODALIDAD VARIABLE",
  "CATEGORIA ATRADIUS",
  "GLOBAL GRADE",
  "ID FAMILIA PUESTO",
  "FAMILIA PUESTO",
] as const;

/** Los cuatro valores de cada año, en el orden del Excel. */
export const QUINQUENAL_YEAR_HEADERS = [
  "COEFICIENTE JORNADA",
  "RETRIBUCIÓN",
  "RETRIBUCIÓN CON REDUCCIÓN",
  "VARIABLE",
] as const;

/** Años de la consulta, del actual al más antiguo. */
export const quinquenalYears = (currentYear: number): number[] =>
  Array.from({ length: QUINQUENAL_YEARS }, (_, index) => currentYear - index);

export const quinquenalHeaders = (currentYear: number): string[] => [
  ...QUINQUENAL_FIXED_HEADERS,
  ...quinquenalYears(currentYear).flatMap((year) =>
    QUINQUENAL_YEAR_HEADERS.map((header) => `${header} AÑO ${year}`),
  ),
];

const isoToDate = (iso: string | null): Date | null =>
  iso ? new Date(`${iso}T00:00:00.000Z`) : null;

const unitCells = (unit: QuinquenalUnit): QuinquenalCell[] => [unit.id, unit.name];

/** Celdas de una fila en el orden de `quinquenalHeaders`. */
export const quinquenalCells = (row: QuinquenalRow, currentYear: number): QuinquenalCell[] => [
  row.legalEntity,
  row.employeeId,
  row.firstName,
  row.lastName1,
  row.lastName2,
  isoToDate(row.birthDate),
  isoToDate(row.seniorityDate),
  row.fusionId,
  row.structureId,
  row.structureName,
  ...unitCells(row.ceo),
  ...unitCells(row.mb),
  ...unitCells(row.alt),
  ...unitCells(row.direction),
  ...unitCells(row.area),
  ...unitCells(row.unit),
  ...unitCells(row.service),
  row.jobId,
  row.jobName,
  row.categoryId,
  row.categoryName,
  row.jobGroup,
  row.jobLevel,
  row.costCenter,
  row.atradiusJob,
  row.variableModel,
  row.atradiusCategory,
  row.globalGrade,
  row.jobFamilyId,
  row.jobFamilyName,
  ...quinquenalYears(currentYear).flatMap((year) => {
    const values = row.years.find((entry) => entry.year === year);
    return values
      ? [values.coefficient, values.salary, values.reducedSalary, values.variable]
      : [null, null, null, null];
  }),
];

export const quinquenalFileName = (generatedOn: string, employeeId?: string): string =>
  employeeId
    ? `CONSULTA_QUINQUENAL_${employeeId}_${generatedOn}.xlsx`
    : `CONSULTA_QUINQUENAL_${generatedOn}.xlsx`;
