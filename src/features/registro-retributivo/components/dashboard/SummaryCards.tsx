"use client";

import { ClipboardCheck, ScanSearch } from "lucide-react";
import { Accordion, AnimatedNumber, Badge, NumberTicker, type AnimatedBadgeStatus } from "@/components/system";
import type { AnalysisSummary, InternalExcelCheckRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

interface SummaryCardsProps {
  readonly summary?: AnalysisSummary;
  readonly internalExcelChecks?: readonly InternalExcelCheckRow[];
}

type DetailItem = {
  readonly label: string;
  readonly detail: string;
  readonly value: string | number;
  readonly status?: AnimatedBadgeStatus;
};

function internalStatus(rows: readonly InternalExcelCheckRow[]): AnimatedBadgeStatus {
  if (rows.some((row) => row.status === "Diferencia")) return "danger";
  if (rows.some((row) => row.status === "Revisar")) return "warning";
  return "success";
}

function Kpi({
  label,
  detail,
  children,
}: Readonly<{ label: string; detail: string; children: React.ReactNode }>) {
  return (
    <div data-testid="primary-kpi" className="min-w-0 px-4 py-4 sm:px-5">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">{children}</p>
      <p className="mt-1 truncate text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}

function DetailList({ items }: Readonly<{ items: readonly DetailItem[] }>) {
  return (
    <dl className="divide-y divide-border">
      {items.map((item) => (
        <div key={item.label} data-variant="row" className="flex items-start justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
          <div className="min-w-0">
            <dt className="text-sm font-medium text-foreground">{item.label}</dt>
            <dd className="text-xs text-muted-foreground">{item.detail}</dd>
          </div>
          <dd className="shrink-0">
            <Badge status={item.status ?? "neutral"} size="sm" className="tabular-nums">
              {item.value}
            </Badge>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Banda única de KPIs + acordeón de cobertura y revisión pendiente. */
export function SummaryCards({ summary, internalExcelChecks = [] }: SummaryCardsProps) {
  const internalOk = internalExcelChecks.filter((row) => row.status === "OK").length;
  const pendingCount = (summary?.conceptsPendingReview ?? 0) + (summary?.conceptsRealUnmapped ?? 0);

  const coverage: DetailItem[] = [
    {
      label: "Cuadre Reg.",
      detail: "Periodo completo vs desglose. No compara contra recibos.",
      value: `${internalOk} / ${internalExcelChecks.length} OK`,
      status: internalStatus(internalExcelChecks),
    },
    {
      label: "Recibos procesados",
      detail: summary?.pdfsFailed ? `${summary.pdfsFailed} con error` : "Páginas de recibos procesadas",
      value: summary?.pdfsAnalyzed ?? 0,
    },
    {
      label: "Reg. Retrib. sin Recibo",
      detail: "Personas del Excel sin recibo asociado",
      value: summary?.peopleInRegistroWithoutPdf ?? 0,
    },
  ];

  const pending: DetailItem[] = [
    {
      label: "Conceptos pendientes de revisión",
      detail: "Requieren decisión; no se incluyen en el cálculo principal.",
      value: summary?.conceptsPendingReview ?? 0,
      status: summary?.conceptsPendingReview ? "warning" : "neutral",
    },
    {
      label: "Importe pendiente de decisión",
      detail: "Importe Recibo no incluido en el cálculo principal.",
      value: formatEuro(summary?.pendingDecisionPdfTotal ?? 0),
      status: summary?.pendingDecisionPdfTotal ? "warning" : "neutral",
    },
    {
      label: "Conceptos sin mapear reales",
      detail: "Sin código Reg. Retrib. claro.",
      value: summary?.conceptsRealUnmapped ?? 0,
      status: summary?.conceptsRealUnmapped ? "danger" : "neutral",
    },
    {
      label: "Conceptos desactivados",
      detail: "Reglas configuradas fuera del análisis.",
      value: summary?.conceptsIgnored ?? 0,
    },
  ];

  return (
    <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
      <section
        data-testid="primary-kpis"
        aria-label="Indicadores principales"
        className="grid grid-cols-2 divide-border overflow-hidden rounded-2xl border border-border bg-card max-sm:[&>*:nth-child(-n+2)]:border-b sm:divide-x xl:grid-cols-4"
      >
        <Kpi label="Personas analizadas" detail={`${summary?.matchedPeople ?? 0} con Reg. Retrib. y Recibo`}>
          <NumberTicker value={summary?.uniquePeople ?? 0} locale />
        </Kpi>
        <Kpi label="Con diferencia" detail="Matched fuera de tolerancia">
          <NumberTicker value={summary?.peopleWithDifferences ?? 0} locale />
        </Kpi>
        <Kpi label="Diferencia matched" detail="Personas con Reg. Retrib. y Recibo">
          <AnimatedNumber
            value={summary?.matchedTotalDifference ?? summary?.totalGlobalDifference ?? 0}
            format={formatEuro}
            startOnView
            duration={0.9}
          />
        </Kpi>
        <Kpi label="Recibo sin Reg. Retrib." detail={formatEuro(summary?.totalPdfWithoutRegistro ?? 0)}>
          <NumberTicker value={summary?.peopleInPdfWithoutRegistro ?? 0} locale />
        </Kpi>
      </section>

      <Accordion
        defaultValue={pendingCount ? "pending" : null}
        className="overflow-hidden rounded-2xl border border-border"
        classNames={{ trigger: "min-h-12 px-4", title: "text-sm", description: "text-sm", content: "[&>div]:px-4 [&>div]:pb-4" }}
        items={[
          {
            id: "coverage",
            icon: <ScanSearch className="size-4" aria-hidden="true" />,
            title: "Cobertura del análisis",
            description: <DetailList items={coverage} />,
          },
          {
            id: "pending",
            icon: <ClipboardCheck className="size-4" aria-hidden="true" />,
            title: (
              <span className="flex items-center gap-2">
                Revisión pendiente
                {pendingCount ? (
                  <Badge status="warning" size="sm" className="tabular-nums">
                    {pendingCount}
                  </Badge>
                ) : null}
              </span>
            ),
            description: <DetailList items={pending} />,
          },
        ]}
      />
    </div>
  );
}
