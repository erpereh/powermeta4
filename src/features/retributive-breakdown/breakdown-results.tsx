"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  StatTile,
} from "@/components/system";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

import { type BreakdownPreview, GROUPINGS, type GroupingId } from "./contract";

const integer = new Intl.NumberFormat("es-ES");
const money = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
const percent = new Intl.NumberFormat("es-ES", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const measures = ["Mujeres", "Hombres", "Diferencia"];

export function BreakdownSummary({
  result,
  onGrouping,
}: {
  result: BreakdownPreview;
  onGrouping: (id: GroupingId) => void;
}) {
  const totalGroups = result.groupings.reduce((sum, item) => sum + item.groups.length, 0);
  const figures = [
    ["Registros de Empleados", result.employeeRows],
    ["Conceptos salariales", result.concepts.length],
    ["Grupos de análisis", totalGroups],
  ] as const;
  return (
    <section className="space-y-5" aria-labelledby="breakdown-summary">
      <header>
        <h2 id="breakdown-summary" className="text-xl font-semibold tracking-tight">
          Resumen del análisis
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Periodo del {result.period.from} al {result.period.to}
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-3">
        {figures.map(([name, value]) => (
          <StatTile key={name} label={name} value={integer.format(value)} />
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <h3 className="border-b border-border px-4 py-3 text-sm font-semibold">Agrupaciones</h3>
        <ul className="divide-y divide-border">
          {result.groupings.map(({ id, groups }) => {
            const name = GROUPINGS.find(({ file }) => file === id)?.sheet;
            return (
              <li key={id} className="px-2 sm:px-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="my-1 h-auto min-h-10 w-full justify-between gap-3 rounded-md px-2 py-2 text-left"
                  onClick={() => onGrouping(id)}
                >
                  <span className="min-w-0 wrap-anywhere">{name}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                    {integer.format(groups.length)} grupos{" "}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function BreakdownGroups({
  result,
  grouping,
  onGrouping,
}: {
  result: BreakdownPreview;
  grouping: GroupingId;
  onGrouping: (id: GroupingId) => void;
}) {
  const [query, setQuery] = useState("");
  const [concept, setConcept] = useState(result.concepts[0]?.code ?? "");
  const conceptIndex = result.concepts.findIndex(({ code }) => code === concept);
  const groups = result.groupings.find(({ id }) => id === grouping)?.groups ?? [];
  const search = normalizeComparableText(query);
  const rows = groups.filter(({ identifier, label }) =>
    [identifier, label].some((value) =>
      normalizeComparableText(String(value ?? "")).includes(search),
    ),
  );
  return (
    <section className="space-y-4" aria-labelledby="breakdown-group-results">
      <h2 id="breakdown-group-results" className="text-xl font-semibold tracking-tight">
        Resultados por agrupación
      </h2>
      <DataTableShell
        toolbar={
          <div className="grid min-w-0 gap-3 md:grid-cols-3">
            <div className="min-w-0 space-y-1.5">
              <span id="breakdown-grouping" className="block text-sm font-medium">
                Agrupación
              </span>
              <Select
                value={grouping}
                onValueChange={(value) => {
                  const id = GROUPINGS.find(({ file }) => file === value)?.file;
                  if (id) onGrouping(id);
                }}
              >
                <SelectTrigger aria-labelledby="breakdown-grouping" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GROUPINGS.map(({ file, sheet }) => (
                    <SelectItem key={file} value={file}>
                      {sheet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-0 space-y-1.5">
              <span id="breakdown-concept" className="block text-sm font-medium">
                Concepto salarial
              </span>
              <Select value={concept} onValueChange={setConcept}>
                <SelectTrigger aria-labelledby="breakdown-concept" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {result.concepts.map(({ code, section }) => (
                    <SelectItem key={code} value={code}>
                      {code} · {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-0 space-y-1.5">
              <label htmlFor="breakdown-group-search" className="block text-sm font-medium">
                Buscar grupo
              </label>
              <Input
                id="breakdown-group-search"
                value={query}
                placeholder="Código o nombre"
                onChange={setQuery}
              />
            </div>
          </div>
        }
        summary={
          <p role="status" className="text-sm text-muted-foreground">
            {integer.format(rows.length)} de {integer.format(groups.length)} grupos
          </p>
        }
        empty={
          rows.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No hay grupos que coincidan.</p>
          ) : undefined
        }
      >
        {rows.length > 0 && (
          <div
            className="overflow-x-auto"
            tabIndex={0}
            role="region"
            aria-label="Tabla de medias y medianas"
          >
            <table className="w-full min-w-[48rem] border-collapse text-sm">
              <caption className="sr-only">Resultados de {concept}</caption>
              <thead className="bg-muted/60">
                <tr className="border-b border-border">
                  <th rowSpan={2} scope="col" className="px-4 py-2.5 text-left">
                    Código
                  </th>
                  <th rowSpan={2} scope="col" className="px-4 py-2.5 text-left">
                    Grupo
                  </th>
                  <th
                    colSpan={3}
                    scope="colgroup"
                    className="border-l border-border px-4 py-2.5 text-center"
                  >
                    Media
                  </th>
                  <th
                    colSpan={3}
                    scope="colgroup"
                    className="border-l border-border px-4 py-2.5 text-center"
                  >
                    Mediana
                  </th>
                </tr>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  {["media", "mediana"].flatMap((stat) =>
                    measures.map((name) => (
                      <th key={stat + name} scope="col" className="px-4 py-2 text-right">
                        {name}
                      </th>
                    )),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map(({ identifier, label, metrics }) => (
                  <tr key={typeof identifier + String(identifier)} className="even:bg-muted/25">
                    <td className="px-4 py-2.5 tabular-nums text-muted-foreground">
                      {identifier ?? "—"}
                    </td>
                    <th scope="row" className="min-w-36 px-4 py-2.5 text-left font-medium">
                      {label ?? "—"}
                    </th>
                    {metrics[conceptIndex]?.map((value, index) => (
                      <td
                        key={index}
                        className="whitespace-nowrap px-4 py-2.5 text-right tabular-nums"
                      >
                        {index % 3 === 2 ? percent.format(value) : money.format(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DataTableShell>
    </section>
  );
}
