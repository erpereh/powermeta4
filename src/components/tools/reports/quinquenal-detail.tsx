import { PropertyList, Section } from "@/components/system";
import type { QuinquenalRow } from "@/types/quinquenal";

import {
  formatCoefficient,
  formatIsoDate,
  formatMoney,
  fullName,
  unitLabel,
} from "./quinquenal-format";

const text = (value: string | number | null): string =>
  value === null || value === "" ? "—" : String(value);

/** Ficha completa de un empleado: datos, organización, puesto y sus cinco años. */
export function QuinquenalDetail({ row }: { row: QuinquenalRow }) {
  return (
    <div className="space-y-6">
      <Section title="Retribución de los últimos cinco años">
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[34rem] text-sm">
            <caption className="sr-only">
              Coeficiente de jornada, retribución y variable por año de {fullName(row)}
            </caption>
            <thead className="bg-muted/40 text-left text-xs text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-2.5 font-medium">
                  Año
                </th>
                <th scope="col" className="px-4 py-2.5 text-right font-medium">
                  Coef. jornada
                </th>
                <th scope="col" className="px-4 py-2.5 text-right font-medium">
                  Retribución
                </th>
                <th scope="col" className="px-4 py-2.5 text-right font-medium">
                  Con reducción
                </th>
                <th scope="col" className="px-4 py-2.5 text-right font-medium">
                  Variable
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {row.years.map((year) => (
                <tr key={year.year}>
                  <th scope="row" className="px-4 py-2.5 text-left font-medium text-foreground">
                    {year.year}
                  </th>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatCoefficient(year.coefficient)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatMoney(year.salary)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatMoney(year.reducedSalary)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatMoney(year.variable)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Datos del empleado">
        <PropertyList
          aria-label="Datos del empleado"
          items={[
            { id: "id", label: "Matrícula", value: row.employeeId },
            { id: "name", label: "Nombre", value: text(fullName(row)) },
            { id: "entity", label: "Empresa", value: text(row.legalEntity) },
            { id: "birth", label: "Fecha de nacimiento", value: formatIsoDate(row.birthDate) },
            { id: "seniority", label: "Antigüedad", value: formatIsoDate(row.seniorityDate) },
            { id: "fusion", label: "ID fusión", value: text(row.fusionId) },
          ]}
        />
      </Section>

      <Section title="Organización">
        <PropertyList
          aria-label="Organización"
          items={[
            {
              id: "structure",
              label: "Estructura",
              value: row.structureId
                ? `${text(row.structureName)} (${row.structureId})`
                : text(row.structureName),
            },
            { id: "ceo", label: "CEO", value: unitLabel(row.ceo) },
            { id: "mb", label: "MB", value: unitLabel(row.mb) },
            { id: "alt", label: "ALT", value: unitLabel(row.alt) },
            { id: "direction", label: "Dirección", value: unitLabel(row.direction) },
            { id: "area", label: "Área", value: unitLabel(row.area) },
            { id: "unit", label: "Unidad", value: unitLabel(row.unit) },
            { id: "service", label: "Servicio", value: unitLabel(row.service) },
            { id: "cost-center", label: "Centro de coste", value: text(row.costCenter) },
          ]}
        />
      </Section>

      <Section title="Puesto">
        <PropertyList
          aria-label="Puesto"
          items={[
            {
              id: "job",
              label: "Puesto",
              value: row.jobId ? `${text(row.jobName)} (${row.jobId})` : text(row.jobName),
            },
            {
              id: "category",
              label: "Categoría",
              value: row.categoryId
                ? `${text(row.categoryName)} (${row.categoryId})`
                : text(row.categoryName),
            },
            { id: "group", label: "Grupo de puesto", value: text(row.jobGroup) },
            { id: "level", label: "Nivel de puesto", value: text(row.jobLevel) },
            {
              id: "family",
              label: "Familia de puesto",
              value: row.jobFamilyId
                ? `${text(row.jobFamilyName)} (${row.jobFamilyId})`
                : text(row.jobFamilyName),
            },
            { id: "variable-model", label: "Modalidad variable", value: text(row.variableModel) },
            { id: "atradius-job", label: "Atradius job code", value: text(row.atradiusJob) },
            {
              id: "atradius-category",
              label: "Categoría Atradius",
              value: text(row.atradiusCategory),
            },
            { id: "global-grade", label: "Global grade", value: text(row.globalGrade) },
          ]}
        />
      </Section>
    </div>
  );
}
