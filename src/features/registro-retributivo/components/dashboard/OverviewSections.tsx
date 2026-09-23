"use client";

import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, FileWarning, ListChecks, Scale } from "lucide-react";
import type { ReactNode } from "react";
import { Button, Surface } from "@/components/system";
import type { AnalysisResult } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { cn } from "@/lib/utils";

import type { PersonStatusCount } from "@/features/registro-retributivo/components/common/personStatus";

type GoToPeople = (status: string) => void;

function percent(value: number, total: number): number {
  return total ? Math.round((value / total) * 100) : 0;
}

/** Frase principal: qué ha salido del análisis, en lenguaje llano. */
export function AnalysisVerdict({
  total,
  statuses,
  onGoToPeople,
}: Readonly<{ total: number; statuses: readonly PersonStatusCount[]; onGoToPeople: GoToPeople }>) {
  const countOf = (status: string) => statuses.find((item) => item.status === status)?.count ?? 0;
  const withDifference = countOf("Diferencia");
  const ok = countOf("OK");
  const allOk = total > 0 && ok === total;

  return (
    <section
      aria-labelledby="verdict-title"
      data-testid="analysis-verdict"
      className={cn(
        "flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between",
        allOk ? "border-emerald-500/30 bg-emerald-500/5" : withDifference ? "border-destructive/25 bg-destructive/5" : "border-border bg-card",
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        {allOk ? (
          <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-500" aria-hidden="true" />
        ) : (
          <AlertTriangle className={cn("mt-0.5 size-6 shrink-0", withDifference ? "text-destructive" : "text-muted-foreground")} aria-hidden="true" />
        )}
        <div className="min-w-0">
          <h2 id="verdict-title" className="text-lg font-semibold tracking-tight text-foreground text-balance">
            {allOk
              ? `Las ${total} personas cuadran`
              : withDifference
                ? `${withDifference} de ${total} personas tienen diferencias`
                : `Ninguna persona tiene diferencias claras`}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">
            {allOk
              ? "Los importes de los recibos coinciden con el Registro Retributivo dentro de la tolerancia."
              : `${ok} ${ok === 1 ? "cuadra" : "cuadran"} dentro de la tolerancia. El resto necesita revisión: empieza por las personas con diferencia.`}
          </p>
        </div>
      </div>
      {withDifference ? (
        <Button type="button" variant="primary" size="sm" className="shrink-0 self-start sm:self-center" onClick={() => onGoToPeople("Diferencia")}>
          Ver personas con diferencia
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Button>
      ) : null}
    </section>
  );
}

/** Reparto de personas por estado; cada fila abre Personas ya filtrado. */
export function StatusBreakdown({
  total,
  statuses,
  onGoToPeople,
}: Readonly<{ total: number; statuses: readonly PersonStatusCount[]; onGoToPeople: GoToPeople }>) {
  return (
    <Surface title="Estado de las personas" description={`${total} personas analizadas. Pulsa una fila para ver el listado.`} flush className="rounded-2xl">
      <div className="px-4 pb-2 sm:px-5">
        <div
          role="img"
          aria-label={`Reparto: ${statuses.map((item) => `${item.label} ${item.count}`).join(", ")}`}
          className="flex h-2 w-full gap-0.5 overflow-hidden rounded-full"
        >
          {statuses.map((item) => (
            <div key={item.status} className={cn("h-full min-w-1", item.dotClass)} style={{ width: `${percent(item.count, total)}%` }} />
          ))}
        </div>
      </div>
      <ul className="px-2 pb-2">
        {statuses.map((item) => (
          <li key={item.status}>
            <button
              type="button"
              onClick={() => onGoToPeople(item.status)}
              aria-label={`${item.label}: ${item.count} personas. Ver listado`}
              className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left outline-none transition-colors hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span aria-hidden="true" className={cn("size-2.5 shrink-0 rounded-full", item.dotClass)} />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{item.label}</span>
                {item.explanation ? <span className="block text-xs text-muted-foreground">{item.explanation}</span> : null}
              </span>
              <span className="shrink-0 text-right">
                <span className="block text-sm font-semibold tabular-nums text-foreground">{item.count}</span>
                <span className="block text-xs tabular-nums text-muted-foreground">{percent(item.count, total)}%</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </Surface>
  );
}

function AmountRow({ label, value, explanation, tone }: Readonly<{ label: string; value: number; explanation: string; tone?: "danger" | "muted" }>) {
  return (
    <div className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={cn("font-mono text-xl font-semibold tabular-nums", tone === "danger" && value !== 0 ? "text-destructive" : "text-foreground")}>
        {formatEuro(value)}
      </dd>
      <dd className="text-xs text-muted-foreground text-pretty">{explanation}</dd>
    </div>
  );
}

/** Importes clave. No se suman entre sí: cada uno mide una cosa distinta. */
export function AmountsPanel({ result }: Readonly<{ result: AnalysisResult }>) {
  const summary = result.summary;
  const matchedPeople = summary.matchedPeople ?? 0;
  const withoutRegistro = summary.peopleInPdfWithoutRegistro ?? 0;

  return (
    <Surface title="Importes" description="Cada importe mide algo distinto; no se suman." className="rounded-2xl">
      <dl className="divide-y divide-border">
        <AmountRow
          label="Diferencia neta (recibo − registro)"
          value={summary.matchedTotalDifference ?? summary.totalGlobalDifference}
          explanation={`Suma de las ${matchedPeople} personas que aparecen en los dos ficheros. Las diferencias positivas y negativas se compensan.`}
          tone="danger"
        />
        <AmountRow
          label="En recibos sin persona en el Registro"
          value={summary.totalPdfWithoutRegistro ?? 0}
          explanation={`${withoutRegistro} ${withoutRegistro === 1 ? "persona tiene" : "personas tienen"} recibo pero no figuran en el Excel.`}
        />
        <AmountRow
          label="Pendiente de decidir"
          value={summary.pendingDecisionPdfTotal ?? summary.pendingReviewAmount ?? 0}
          explanation="Conceptos de recibo que todavía no cuentan en la comparación."
        />
      </dl>
    </Surface>
  );
}

type PendingItem = {
  readonly id: string;
  readonly icon: ReactNode;
  readonly text: string;
  readonly action?: { readonly label: string; readonly onClick: () => void };
};

/** Tareas concretas que quedan por hacer, con acceso directo a cada pestaña. */
export function PendingReview({
  result,
  onGoToSettings,
  onGoToCuadre,
}: Readonly<{ result: AnalysisResult; onGoToSettings: () => void; onGoToCuadre: () => void }>) {
  const summary = result.summary;
  const cuadreIssues = result.internalExcelChecks.filter((row) => row.status !== "OK").length;
  const items: PendingItem[] = [];

  if (summary.conceptsPendingReview) {
    items.push({
      id: "pending",
      icon: <ListChecks className="size-4" aria-hidden="true" />,
      text: `${summary.conceptsPendingReview} ${summary.conceptsPendingReview === 1 ? "concepto espera" : "conceptos esperan"} tu decisión para entrar en el cálculo.`,
      action: { label: "Revisar conceptos", onClick: onGoToSettings },
    });
  }
  if (summary.conceptsRealUnmapped) {
    items.push({
      id: "unmapped",
      icon: <ListChecks className="size-4" aria-hidden="true" />,
      text: `${summary.conceptsRealUnmapped} ${summary.conceptsRealUnmapped === 1 ? "concepto no tiene" : "conceptos no tienen"} código del Registro asignado.`,
      action: { label: "Asignar códigos", onClick: onGoToSettings },
    });
  }
  if (cuadreIssues) {
    items.push({
      id: "cuadre",
      icon: <Scale className="size-4" aria-hidden="true" />,
      text: `${cuadreIssues} ${cuadreIssues === 1 ? "persona no cuadra" : "personas no cuadran"} dentro del propio Excel (periodo completo frente a desglose).`,
      action: { label: "Ver Cuadre Reg.", onClick: onGoToCuadre },
    });
  }
  if (summary.pdfsFailed) {
    items.push({
      id: "failed",
      icon: <FileWarning className="size-4" aria-hidden="true" />,
      text: `${summary.pdfsFailed} ${summary.pdfsFailed === 1 ? "recibo no se pudo leer" : "recibos no se pudieron leer"}. Revisa que sean PDF de nómina.`,
    });
  }

  return (
    <Surface title="Pendiente de revisar" className="rounded-2xl">
      {items.length ? (
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="flex min-w-0 items-start gap-2.5 text-sm text-foreground">
                <span className="mt-0.5 shrink-0 text-muted-foreground">{item.icon}</span>
                {item.text}
              </p>
              {item.action ? (
                <Button type="button" variant="outline" size="sm" className="shrink-0 self-start sm:self-center" onClick={item.action.onClick}>
                  {item.action.label}
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-emerald-500" aria-hidden="true" />
          No queda nada pendiente de decidir.
        </p>
      )}
    </Surface>
  );
}
