"use client";

import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Surface } from "@/components/system";
import type { AnalysisResult } from "@/features/registro-retributivo/types";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

const COMPACT_EURO = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  notation: "compact",
  maximumFractionDigits: 1,
});

const AXIS_TICK = { fill: "var(--muted-foreground)", fontSize: 11 };
const CURSOR = { fill: "color-mix(in oklch, var(--foreground) 5%, transparent)" };

function EuroTooltip({ active, payload, label }: Readonly<{ active?: boolean; payload?: readonly { value?: number; payload?: { full?: string } }[]; label?: string }>) {
  const entry = payload?.[0];
  if (!active || !entry) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-sm shadow-md">
      <p className="font-medium text-foreground">{entry.payload?.full ?? label}</p>
      <p className="mt-0.5 font-mono tabular-nums text-muted-foreground">
        {typeof entry.value === "number" ? formatEuro(entry.value) : entry.value}
      </p>
    </div>
  );
}

/** Etiqueta del eje Y en una sola línea (Recharts parte por palabras). */
function SingleLineTick({ x, y, payload }: Readonly<{ x?: number | string; y?: number | string; payload?: { value?: string } }>) {
  return (
    <text x={x} y={y} dy={4} textAnchor="end" fill="var(--muted-foreground)" fontSize={12}>
      {payload?.value}
    </text>
  );
}

function barFill(value: number): string {
  return value < 0 ? "var(--destructive)" : "var(--primary)";
}

export function ChartsPanel({ result }: Readonly<{ result: AnalysisResult }>) {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  const summary = result.summary;
  const byBlock = [
    { name: "Salario", value: summary.matchedSalaryDifference ?? summary.totalSalaryDifference },
    { name: "Complemento salarial", value: summary.matchedSalaryComplementDifference ?? summary.totalSalaryComplementDifference },
    { name: "Extrasalarial", value: summary.matchedExtraSalaryDifference ?? summary.totalExtraSalaryDifference },
  ];
  const topPeople = [...(result.people ?? [])]
    .filter((item) => item.status === "Diferencia" || item.status === "Revisar")
    .sort((a, b) => Math.abs(b.totalDifference) - Math.abs(a.totalDifference))
    .slice(0, 8)
    .map((item) => {
      const person = displayText(item.person);
      return {
        name: person ? (person.length > 20 ? `${person.slice(0, 19)}…` : person) : item.employeeNumber,
        full: `${item.employeeNumber}${person ? ` · ${person}` : ""}`,
        value: item.totalDifference,
      };
    });

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Surface
        data-testid="chart-by-block"
        title="¿En qué parte del salario están las diferencias?"
        description="Diferencia neta (recibo − registro) por bloque. En rojo, cuando el recibo paga menos que el registro."
        className="rounded-2xl"
      >
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byBlock} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 8 }} barCategoryGap="28%">
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" horizontal={false} />
              <XAxis type="number" tickLine={false} axisLine={false} tick={AXIS_TICK} tickFormatter={(value: number) => COMPACT_EURO.format(value)} />
              <YAxis dataKey="name" type="category" width={140} tickLine={false} axisLine={false} tick={<SingleLineTick />} />
              <ReferenceLine x={0} stroke="var(--border)" />
              <Tooltip content={<EuroTooltip />} cursor={CURSOR} />
              <Bar dataKey="value" name="Diferencia" radius={6} maxBarSize={36} isAnimationActive={animate} animationDuration={600}>
                {byBlock.map((row) => (
                  <Cell key={row.name} fill={barFill(row.value)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Surface>

      <Surface
        data-testid="chart-top-people"
        title="Personas con mayor diferencia"
        description="Las 8 diferencias más grandes, por importe. Empieza la revisión por aquí."
        className="rounded-2xl"
      >
        {topPeople.length ? (
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPeople} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 8 }} barCategoryGap="22%">
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" horizontal={false} />
                <XAxis type="number" tickLine={false} axisLine={false} tick={AXIS_TICK} tickFormatter={(value: number) => COMPACT_EURO.format(value)} />
                <YAxis dataKey="name" type="category" width={175} tickLine={false} axisLine={false} interval={0} tick={<SingleLineTick />} />
                <ReferenceLine x={0} stroke="var(--border)" />
                <Tooltip content={<EuroTooltip />} cursor={CURSOR} />
                <Bar dataKey="value" name="Diferencia" radius={6} maxBarSize={22} isAnimationActive={animate} animationDuration={600}>
                  {topPeople.map((row) => (
                    <Cell key={row.full} fill={barFill(row.value)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-muted-foreground">No hay personas con diferencia.</p>
        )}
      </Surface>
    </div>
  );
}
