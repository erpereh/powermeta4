"use client";

import { AlertCircle, BadgeEuro, FileCheck2, FileText, Sigma, Users, UserX, type LucideIcon } from "lucide-react";
import { AnimatedNumber, Badge } from "@/components/system";
import type { AnalysisSummary, InternalExcelCheckRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

interface SummaryCardsProps {
  readonly summary?: AnalysisSummary;
  readonly internalExcelChecks?: readonly InternalExcelCheckRow[];
}

function internalStatus(rows: readonly InternalExcelCheckRow[]): "success" | "warning" | "danger" {
  if (rows.some((row) => row.status === "Diferencia")) return "danger";
  if (rows.some((row) => row.status === "Revisar")) return "warning";
  return "success";
}

function PrimaryKpi({
  label,
  value,
  detail,
  icon: Icon,
  numeric,
}: Readonly<{
  label: string;
  value: string | number;
  detail: string;
  icon: LucideIcon;
  numeric?: number;
}>) {
  return (
    <div className="@container/card rounded-xl border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground @[250px]/card:text-3xl">
        {numeric !== undefined ? (
          <AnimatedNumber value={numeric} startOnView duration={0.9} />
        ) : (
          value
        )}
      </p>
      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        {detail}
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  detail,
  icon: Icon,
  badgeStatus = "neutral",
}: Readonly<{
  label: string;
  value: string | number;
  detail: string;
  icon: LucideIcon;
  badgeStatus?: "neutral" | "info" | "success" | "warning" | "danger";
}>) {
  return (
    <div data-variant="row" className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
      </div>
      <Badge status={badgeStatus} size="sm" className="shrink-0 tabular-nums">
        {value}
      </Badge>
    </div>
  );
}

export function SummaryCards({ summary, internalExcelChecks = [] }: SummaryCardsProps) {
  const internalOk = internalExcelChecks.filter((row) => row.status === "OK").length;
  const badgeStatus = internalStatus(internalExcelChecks);

  return (
    <div className="flex flex-col gap-4">
      <section
        data-testid="primary-kpis"
        aria-label="Indicadores principales"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <div data-testid="primary-kpi">
          <PrimaryKpi
            label="Personas analizadas"
            value={summary?.uniquePeople ?? 0}
            numeric={summary?.uniquePeople ?? 0}
            detail={`${summary?.matchedPeople ?? 0} con Reg. Retrib. y Recibo`}
            icon={Users}
          />
        </div>
        <div data-testid="primary-kpi">
          <PrimaryKpi
            label="Personas con diferencia"
            value={summary?.peopleWithDifferences ?? 0}
            numeric={summary?.peopleWithDifferences ?? 0}
            detail="Matched fuera de tolerancia"
            icon={Users}
          />
        </div>
        <div data-testid="primary-kpi">
          <PrimaryKpi
            label="Diferencia total matched"
            value={formatEuro(summary?.matchedTotalDifference ?? summary?.totalGlobalDifference ?? 0)}
            detail="Solo personas con Reg. Retrib. y Recibo"
            icon={BadgeEuro}
          />
        </div>
        <div data-testid="primary-kpi">
          <PrimaryKpi
            label="Recibo sin Reg. Retrib."
            value={summary?.peopleInPdfWithoutRegistro ?? 0}
            numeric={summary?.peopleInPdfWithoutRegistro ?? 0}
            detail={formatEuro(summary?.totalPdfWithoutRegistro ?? 0)}
            icon={Sigma}
          />
        </div>
      </section>

      <section className="grid items-start gap-4 xl:grid-cols-2">
        <section role="region" aria-label="Estado del análisis" className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground">Estado del análisis</h3>
          <p className="mt-1 text-sm text-muted-foreground">Cobertura y consistencia de los datos procesados.</p>
          <div className="mt-2">
            <DetailRow
              label="Cuadre Reg."
              value={`${internalOk} / ${internalExcelChecks.length} OK`}
              detail="Periodo completo vs desglose. No compara contra recibos."
              icon={FileCheck2}
              badgeStatus={badgeStatus}
            />
            <DetailRow
              label="Recibos procesados"
              value={summary?.pdfsAnalyzed ?? 0}
              detail={summary?.pdfsFailed ? `${summary.pdfsFailed} con error` : "Páginas de recibos procesadas"}
              icon={FileText}
            />
            <DetailRow
              label="Reg. Retrib. sin Recibo"
              value={summary?.peopleInRegistroWithoutPdf ?? 0}
              detail="Personas del Excel sin recibo asociado"
              icon={UserX}
            />
          </div>
        </section>

        <section role="region" aria-label="Revisión pendiente" className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground">Revisión pendiente</h3>
          <p className="mt-1 text-sm text-muted-foreground">Decisiones y configuración que requieren atención.</p>
          <div className="mt-2">
            <DetailRow
              label="Conceptos pendientes de revisión"
              value={summary?.conceptsPendingReview ?? 0}
              detail="Requieren decisión; no se incluyen en el cálculo principal."
              icon={AlertCircle}
              badgeStatus="warning"
            />
            <DetailRow
              label="Importe pendiente de decisión"
              value={formatEuro(summary?.pendingDecisionPdfTotal ?? 0)}
              detail="Importe Recibo pendiente de decisión, no incluido en el cálculo principal"
              icon={BadgeEuro}
              badgeStatus="warning"
            />
            <DetailRow
              label="Conceptos desactivados"
              value={summary?.conceptsIgnored ?? 0}
              detail="Reglas configuradas fuera del análisis"
              icon={UserX}
            />
            <DetailRow
              label="Conceptos sin mapear reales"
              value={summary?.conceptsRealUnmapped ?? 0}
              detail="Problema real de mapeo: sin código Reg. Retrib. claro"
              icon={AlertCircle}
              badgeStatus="danger"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
