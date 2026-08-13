"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BarChart3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
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

function ProfessionalChartCard({
  title,
  subtitle,
  badge,
  children,
  className,
}: Readonly<{ title: string; subtitle: string; badge: string; children: React.ReactNode; className?: string }>) {
  return (
    <Card data-testid="professional-chart-card" className={cn("overflow-hidden p-0", className)}>
      <CardHeader className="border-b">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="max-w-xl">{subtitle}</CardDescription>
          </div>
          <Badge variant="outline" className="shrink-0">{badge}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );
}

function EmptyChart() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BarChart3 />
        </EmptyMedia>
        <EmptyTitle>Sin datos para graficar</EmptyTitle>
        <EmptyDescription>Sube recibos y el Excel Reg. Retrib. para ver diferencias retributivas.</EmptyDescription>
      </EmptyHeader>
    </Empty>
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
    <div className="rounded-lg border bg-popover px-4 py-3 text-sm shadow-md">
      <p className="font-semibold">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="mt-1 text-muted-foreground">
          {entry.name}: <span className="font-semibold tabular-nums">{typeof entry.value === "number" ? formatEuro(entry.value) : entry.value}</span>
        </p>
      ))}
    </div>
  );
}

function StatusStackedBar({ rows }: Readonly<{ rows: Array<{ name: string; value: number; color: string }> }>) {
  const total = rows.reduce((sum, row) => sum + row.value, 0);

  return (
    <div className="flex min-h-56 flex-col justify-center gap-5">
      <div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold tabular-nums">{total}</p>
            <p className="mt-1 text-sm text-muted-foreground">{total} personas analizadas</p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Distribución</span>
        </div>
        <div
          role="img"
          aria-label={`Distribución de estados: ${total} personas analizadas. ${rows.map((row) => `${row.name}: ${row.value}`).join(". ")}`}
          className="mt-4 flex h-12 w-full overflow-hidden rounded-xl bg-muted"
        >
          {rows.map((row) => {
            const percentage = total ? (row.value / total) * 100 : 0;
            return (
              <div
                key={row.name}
                title={`${row.name}: ${row.value} (${percentage.toFixed(1)}%)`}
                className="flex min-w-0 items-center justify-center border-r border-background/80 text-xs font-semibold text-primary-foreground last:border-r-0"
                style={{ width: `${percentage}%`, backgroundColor: row.color }}
              >
                {percentage >= 15 ? `${Math.round(percentage)}%` : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between gap-4 rounded-lg border bg-muted/40 px-3 py-2">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="size-2.5 rounded-full" style={{ backgroundColor: row.color }} />
              {row.name}
            </span>
            <span className="text-sm font-semibold tabular-nums">
              {row.value} <span className="text-xs font-medium text-muted-foreground">· {total ? Math.round((row.value / total) * 100) : 0}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SeparatedAmounts({ rows }: Readonly<{ rows: Array<{ name: string; value: number; tone: string }> }>) {
  const max = Math.max(...rows.map((row) => Math.abs(row.value)), 1);

  return (
    <div className="flex flex-col gap-4">
      <p className="rounded-lg bg-muted/50 px-4 py-3 text-sm font-medium leading-6 text-muted-foreground">
        No se suman: cada importe representa un ámbito diferente de revisión.
      </p>
      {rows.map((row) => (
        <div key={row.name} className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold">{row.name}</span>
            <span className="font-mono text-sm font-semibold tabular-nums">{formatEuro(row.value)}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
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
    { name: "Pendiente decisión", value: result.summary.pendingDecisionPdfTotal ?? result.summary.pendingReviewAmount ?? 0, tone: "bg-orange-500" },
    { name: "Recibo sin Reg. Retrib.", value: result.summary.totalPdfWithoutRegistro ?? 0, tone: "bg-violet-600" },
  ];
  const topPeople = [...(result.people ?? [])]
    .sort((a, b) => Math.abs(b.totalDifference) - Math.abs(a.totalDifference))
    .slice(0, 10)
    .map((item) => ({
      name: `${item.employeeNumber}${item.person ? ` · ${item.person}` : ""}`,
      value: Math.abs(item.totalDifference),
    }));

  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ProfessionalChartCard title="Estado de personas" subtitle="Vista compacta del estado operativo de las filas de personas." badge="Estado">
        {statusRows.length ? <StatusStackedBar rows={statusRows} /> : <EmptyChart />}
      </ProfessionalChartCard>

      <ProfessionalChartCard title="Diferencias matched por bloque" subtitle="Solo personas encontradas en Reg. Retrib. y Recibo; positivos y negativos se mantienen visibles." badge="EUR">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byBlock} margin={{ top: 10, right: 10, bottom: 4, left: -4 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis width={64} tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
              <Tooltip content={<EuroTooltip />} cursor={{ fill: "color-mix(in oklch, var(--primary) 6%, transparent)" }} />
              <Bar dataKey="value" name="Diferencia" radius={[8, 8, 8, 8]} isAnimationActive={animate} animationDuration={650}>
                {byBlock.map((row) => (
                  <Cell key={row.name} fill={row.value < 0 ? "var(--destructive)" : "var(--primary)"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ProfessionalChartCard>

      <ProfessionalChartCard title="Top diferencias" subtitle="Ranking de diferencias absolutas para priorizar revisión manual." badge="Top 10">
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
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon"><BarChart3 /></EmptyMedia>
              <EmptyTitle>Sin diferencias</EmptyTitle>
              <EmptyDescription>No hay diferencias para ordenar con el análisis activo.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </ProfessionalChartCard>

      <ProfessionalChartCard title="Importes separados" subtitle="Comparación visual entre matched, pendiente y Recibo sin Reg. Retrib. sin mezclar ámbitos." badge="No se suman">
        <SeparatedAmounts rows={separatedAmounts} />
      </ProfessionalChartCard>
    </section>
  );
}
