"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EmptyState, Surface, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/system";
import type { AnalysisResult } from "@/features/registro-retributivo/types";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

const STATUS_COLORS: Record<string, string> = {
  OK: "var(--chart-1)",
  Diferencia: "var(--destructive)",
  Revisar: "var(--chart-4)",
  "Sin Registro": "var(--chart-3)",
  "Sin PDF": "var(--muted-foreground)",
  "Sin mapear": "var(--chart-5)",
};

const STATUS_LABELS: Record<string, string> = {
  "Sin Registro": "Recibo sin Reg. Retrib.",
  "Sin PDF": "Reg. Retrib. sin Recibo",
};

function EmptyChart() {
  return (
    <EmptyState
      icon={<BarChart3 />}
      title="Sin datos para graficar"
      description="Sube recibos y el Excel Reg. Retrib. para ver diferencias retributivas."
    />
  );
}

function countByStatus(result: AnalysisResult): Array<{ name: string; value: number; color: string }> {
  const counts = new Map<string, number>();
  (result.people ?? []).forEach((item) => {
    const status = item.status;
    counts.set(status, (counts.get(status) ?? 0) + 1);
  });
  return [...counts.entries()].map(([status, value]) => ({
    name: STATUS_LABELS[status] ?? status,
    value,
    color: STATUS_COLORS[status] ?? "var(--primary)",
  }));
}

function EuroTooltip({ active, payload, label }: Readonly<{ active?: boolean; payload?: readonly { value?: number; name?: string }[]; label?: string }>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-4 py-3 text-sm shadow-md">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="mt-1 text-muted-foreground">
          {entry.name}:{" "}
          <span className="font-semibold tabular-nums text-foreground">
            {typeof entry.value === "number" ? formatEuro(entry.value) : entry.value}
          </span>
        </p>
      ))}
    </div>
  );
}

function StatusStackedBar({ rows }: Readonly<{ rows: Array<{ name: string; value: number; color: string }> }>) {
  const total = rows.reduce((sum, row) => sum + row.value, 0);

  return (
    <div className="flex flex-col gap-3">
      <div
        role="img"
        aria-label={`Distribución de estados: ${total} personas analizadas. ${rows.map((row) => `${row.name}: ${row.value}`).join(". ")}`}
        className="flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full"
      >
        {rows.map((row) => {
          const percentage = total ? (row.value / total) * 100 : 0;
          return (
            <div
              key={row.name}
              title={`${row.name}: ${row.value} (${percentage.toFixed(1)}%)`}
              className="h-full min-w-1 first:rounded-l-full last:rounded-r-full"
              style={{ width: `${percentage}%`, backgroundColor: row.color }}
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
        {rows.map((row) => (
          <li key={row.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full" style={{ backgroundColor: row.color }} />
            {row.name}
            <span className="font-semibold text-foreground tabular-nums">{row.value}</span>
            <span className="tabular-nums">· {total ? Math.round((row.value / total) * 100) : 0}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeparatedAmounts({ rows }: Readonly<{ rows: Array<{ name: string; value: number; tone: string }> }>) {
  const max = Math.max(...rows.map((row) => Math.abs(row.value)), 1);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-muted-foreground">
        No se suman: cada importe representa un ámbito diferente de revisión.
      </p>
      {rows.map((row) => (
        <div key={row.name}>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-foreground">{row.name}</span>
            <span className="font-mono text-sm font-semibold tabular-nums text-foreground">{formatEuro(row.value)}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: Math.max(Math.abs(row.value) / max, 0.03) }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={cn("h-full origin-left rounded-full", row.tone)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChartsPanel({ result }: Readonly<{ result?: AnalysisResult }>) {
  const reduceMotion = useReducedMotion();
  if (!result) return <EmptyChart />;

  const animate = !reduceMotion;
  const statusRows = countByStatus(result);
  const byBlock = [
    { name: "Salario", value: result.summary.matchedSalaryDifference ?? result.summary.totalSalaryDifference },
    { name: "C. Salarial", value: result.summary.matchedSalaryComplementDifference ?? result.summary.totalSalaryComplementDifference },
    { name: "Extrasalarial", value: result.summary.matchedExtraSalaryDifference ?? result.summary.totalExtraSalaryDifference },
  ];
  const separatedAmounts = [
    { name: "Diferencia total matched", value: result.summary.matchedTotalDifference ?? result.summary.totalGlobalDifference, tone: "bg-primary" },
    { name: "Pendiente decisión", value: result.summary.pendingDecisionPdfTotal ?? result.summary.pendingReviewAmount ?? 0, tone: "bg-[var(--chart-4)]" },
    { name: "Recibo sin Reg. Retrib.", value: result.summary.totalPdfWithoutRegistro ?? 0, tone: "bg-[var(--chart-3)]" },
  ];
  const topPeople = [...(result.people ?? [])]
    .sort((a, b) => Math.abs(b.totalDifference) - Math.abs(a.totalDifference))
    .slice(0, 10)
    .map((item) => ({
      name: `${item.employeeNumber}${item.person ? ` · ${item.person}` : ""}`,
      value: Math.abs(item.totalDifference),
    }));

  return (
    <Surface
      data-testid="charts-panel"
      title="Estado y diferencias"
      description={`${statusRows.reduce((sum, row) => sum + row.value, 0)} personas analizadas`}
      className="rounded-2xl"
    >
      {statusRows.length ? <StatusStackedBar rows={statusRows} /> : null}
      <Tabs variant="segment" defaultValue="blocks" className="mt-5">
        <TabsList aria-label="Gráficas del análisis" className="bg-muted">
          <TabsTrigger value="blocks">Por bloque</TabsTrigger>
          <TabsTrigger value="top">Top 10</TabsTrigger>
          <TabsTrigger value="amounts">Importes separados</TabsTrigger>
        </TabsList>
        <TabsContent value="blocks">
          <p className="text-xs text-muted-foreground">
            Solo personas encontradas en Reg. Retrib. y Recibo; positivos y negativos se mantienen visibles.
          </p>
          <div className="mt-3 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byBlock} margin={{ top: 10, right: 10, bottom: 4, left: -4 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                <YAxis width={64} tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
                <Tooltip content={<EuroTooltip />} cursor={{ fill: "color-mix(in oklch, var(--primary) 6%, transparent)" }} />
                <Bar dataKey="value" name="Diferencia" radius={[8, 8, 8, 8]} maxBarSize={72} isAnimationActive={animate} animationDuration={650}>
                  {byBlock.map((row) => (
                    <Cell key={row.name} fill={row.value < 0 ? "var(--destructive)" : "var(--primary)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        <TabsContent value="top">
          {topPeople.length ? (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPeople} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 8 }} barCategoryGap="18%">
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" horizontal={false} />
                  <XAxis type="number" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={168}
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                    tickFormatter={(value: string) => (value.length > 28 ? `${value.slice(0, 27)}…` : value)}
                  />
                  <Tooltip content={<EuroTooltip />} cursor={{ fill: "color-mix(in oklch, var(--primary) 6%, transparent)" }} />
                  <Bar dataKey="value" name="Diferencia absoluta" fill="var(--chart-2)" radius={[0, 8, 8, 0]} isAnimationActive={animate} animationDuration={650} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <EmptyState
              icon={<BarChart3 />}
              title="Sin diferencias"
              description="No hay diferencias para ordenar con el análisis activo."
            />
          )}
        </TabsContent>
        <TabsContent value="amounts">
          <SeparatedAmounts rows={separatedAmounts} />
        </TabsContent>
      </Tabs>
    </Surface>
  );
}
