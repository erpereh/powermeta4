import type { TableProps } from "@/components/system";
import { quinquenalYears } from "@/lib/quinquenal/sheet";
import type { QuinquenalRow, QuinquenalUnit, QuinquenalYear } from "@/types/quinquenal";

import {
  formatCoefficient,
  formatIsoDate,
  formatMoney,
  fullName,
  legalEntityLabel,
} from "./quinquenal-format";

export type QuinquenalColumns = TableProps<QuinquenalRow>["columns"];

const plain = (value: string | number | null): string =>
  value === null || value === "" ? "—" : String(value);

const textColumn = (
  key: string,
  header: string,
  width: string,
  read: (row: QuinquenalRow) => string | number | null,
  mono = false,
): QuinquenalColumns[number] => ({
  key,
  header,
  width,
  sortable: true,
  sortValue: (row) => read(row) ?? "",
  cell: (row) => (
    <span className={mono ? "font-mono text-sm tabular-nums" : "text-sm"}>{plain(read(row))}</span>
  ),
});

const dateColumn = (
  key: string,
  header: string,
  read: (row: QuinquenalRow) => string | null,
): QuinquenalColumns[number] => ({
  key,
  header,
  width: "120px",
  sortable: true,
  sortValue: (row) => read(row) ?? "",
  cell: (row) => <span className="text-sm tabular-nums">{formatIsoDate(read(row))}</span>,
});

const unitColumns = (
  key: string,
  label: string,
  read: (row: QuinquenalRow) => QuinquenalUnit,
): QuinquenalColumns => [
  textColumn(`${key}Id`, `ID ${label}`, "130px", (row) => read(row).id, true),
  textColumn(`${key}Name`, label, "240px", (row) => read(row).name),
];

const yearOf = (row: QuinquenalRow, year: number): QuinquenalYear | undefined =>
  row.years.find((entry) => entry.year === year);

const amountColumn = (
  year: number,
  key: "salary" | "reducedSalary" | "variable",
  header: string,
): QuinquenalColumns[number] => ({
  key: `${key}${year}`,
  header: `${header} ${year}`,
  width: "150px",
  align: "right",
  sortable: true,
  sortValue: (row) => yearOf(row, year)?.[key] ?? -1,
  cell: (row) => (
    <span className="text-sm tabular-nums">{formatMoney(yearOf(row, year)?.[key] ?? null)}</span>
  ),
});

const yearColumns = (year: number): QuinquenalColumns => [
  {
    key: `coefficient${year}`,
    header: `Coef. jornada ${year}`,
    width: "130px",
    align: "right",
    sortable: true,
    sortValue: (row) => yearOf(row, year)?.coefficient ?? -1,
    cell: (row) => (
      <span className="text-sm tabular-nums">
        {formatCoefficient(yearOf(row, year)?.coefficient ?? null)}
      </span>
    ),
  },
  amountColumn(year, "salary", "Retribución"),
  amountColumn(year, "reducedSalary", "Con reducción"),
  amountColumn(year, "variable", "Variable"),
];

/** Todos los campos del Excel de PeopleNet, con la matrícula y el nombre primero. */
export const fullQuinquenalColumns = (currentYear: number): QuinquenalColumns => [
  textColumn("employeeId", "Matrícula", "110px", (row) => row.employeeId, true),
  textColumn("firstName", "Nombre", "170px", (row) => row.firstName),
  textColumn("lastName1", "Primer apellido", "170px", (row) => row.lastName1),
  textColumn("lastName2", "Segundo apellido", "170px", (row) => row.lastName2),
  textColumn("legalEntity", "Empresa", "110px", (row) => row.legalEntity),
  dateColumn("birthDate", "Nacimiento", (row) => row.birthDate),
  dateColumn("seniorityDate", "Antigüedad", (row) => row.seniorityDate),
  textColumn("fusionId", "ID fusión", "110px", (row) => row.fusionId, true),
  textColumn("structureId", "ID estructura", "120px", (row) => row.structureId, true),
  textColumn("structureName", "Estructura", "180px", (row) => row.structureName),
  ...unitColumns("ceo", "CEO", (row) => row.ceo),
  ...unitColumns("mb", "MB", (row) => row.mb),
  ...unitColumns("alt", "ALT", (row) => row.alt),
  ...unitColumns("direction", "Dirección", (row) => row.direction),
  ...unitColumns("area", "Área", (row) => row.area),
  ...unitColumns("unit", "Unidad", (row) => row.unit),
  ...unitColumns("service", "Servicio", (row) => row.service),
  textColumn("jobId", "ID puesto", "110px", (row) => row.jobId, true),
  textColumn("jobName", "Puesto", "240px", (row) => row.jobName),
  textColumn("categoryId", "ID categoría", "120px", (row) => row.categoryId, true),
  textColumn("categoryName", "Categoría", "200px", (row) => row.categoryName),
  textColumn("jobGroup", "Grupo puesto", "120px", (row) => row.jobGroup),
  textColumn("jobLevel", "Nivel puesto", "120px", (row) => row.jobLevel),
  textColumn("costCenter", "Centro de coste", "140px", (row) => row.costCenter, true),
  textColumn("atradiusJob", "Atradius job code", "150px", (row) => row.atradiusJob, true),
  textColumn("variableModel", "Modalidad variable", "220px", (row) => row.variableModel),
  textColumn("atradiusCategory", "Categoría Atradius", "160px", (row) => row.atradiusCategory),
  textColumn("globalGrade", "Global grade", "120px", (row) => row.globalGrade),
  textColumn("jobFamilyId", "ID familia puesto", "150px", (row) => row.jobFamilyId, true),
  textColumn("jobFamilyName", "Familia puesto", "200px", (row) => row.jobFamilyName),
  ...quinquenalYears(currentYear).flatMap(yearColumns),
];

/** Vista resumida: identificación, puesto y retribución y variable de los cinco años. */
export const summaryQuinquenalColumns = (currentYear: number): QuinquenalColumns => [
  textColumn("employeeId", "Matrícula", "110px", (row) => row.employeeId, true),
  {
    key: "name",
    header: "Nombre",
    width: "260px",
    sortable: true,
    sortValue: (row) => fullName(row),
    cell: (row) => <span className="text-sm">{plain(fullName(row))}</span>,
  },
  {
    key: "legalEntity",
    header: "Empresa",
    width: "96px",
    sortable: true,
    sortValue: (row) => row.legalEntity ?? "",
    cell: (row) => <span className="text-sm">{legalEntityLabel(row.legalEntity)}</span>,
  },
  textColumn("jobName", "Puesto", "260px", (row) => row.jobName),
  ...quinquenalYears(currentYear).flatMap((year) => [
    amountColumn(year, "salary", "Retribución"),
    amountColumn(year, "variable", "Variable"),
  ]),
];
