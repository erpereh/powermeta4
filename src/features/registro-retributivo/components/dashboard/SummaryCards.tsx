"use client";

import { AlertCircle, BadgeEuro, FileCheck2, FileText, Sigma, Users, UserX, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AnalysisSummary, InternalExcelCheckRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

interface SummaryCardsProps {
  readonly summary?: AnalysisSummary;
  readonly internalExcelChecks?: readonly InternalExcelCheckRow[];
}

function internalTone(rows: readonly InternalExcelCheckRow[]): "default" | "secondary" | "destructive" {
  if (rows.some((row) => row.status === "Diferencia")) return "destructive";
  if (rows.some((row) => row.status === "Revisar")) return "secondary";
  return "default";
}

function PrimaryKpi({
  label,
  value,
  detail,
  icon: Icon,
}: Readonly<{ label: string; value: string | number; detail: string; icon: LucideIcon }>) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="flex gap-2 font-medium">
          <Icon />
          {detail}
        </div>
      </CardFooter>
    </Card>
  );
}

function DetailRow({
  label,
  value,
  detail,
  icon: Icon,
  badgeVariant = "outline",
}: Readonly<{
  label: string;
  value: string | number;
  detail: string;
  icon: LucideIcon;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}>) {
  return (
    <div data-variant="row" className="flex items-start justify-between gap-4 border-b py-3 last:border-b-0">
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Icon />
        </span>
        <div className="min-w-0">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
      </div>
      <Badge variant={badgeVariant} className="shrink-0 tabular-nums">
        {value}
      </Badge>
    </div>
  );
}

export function SummaryCards({ summary, internalExcelChecks = [] }: SummaryCardsProps) {
  const internalOk = internalExcelChecks.filter((row) => row.status === "OK").length;
  const internalBadgeVariant = internalTone(internalExcelChecks);

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
            detail={`${summary?.matchedPeople ?? 0} con Reg. Retrib. y Recibo`}
            icon={Users}
          />
        </div>
        <div data-testid="primary-kpi">
          <PrimaryKpi
            label="Personas con diferencia"
            value={summary?.peopleWithDifferences ?? 0}
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
            detail={formatEuro(summary?.totalPdfWithoutRegistro ?? 0)}
            icon={Sigma}
          />
        </div>
      </section>

      <section className="grid items-start gap-4 xl:grid-cols-2">
        <Card role="region" aria-label="Estado del análisis">
          <CardHeader>
            <CardTitle>Estado del análisis</CardTitle>
            <CardDescription>Cobertura y consistencia de los datos procesados.</CardDescription>
          </CardHeader>
          <CardContent>
            <DetailRow
              label="Cuadre Reg."
              value={`${internalOk} / ${internalExcelChecks.length} OK`}
              detail="Periodo completo vs desglose. No compara contra recibos."
              icon={FileCheck2}
              badgeVariant={internalBadgeVariant}
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
          </CardContent>
        </Card>

        <Card role="region" aria-label="Revisión pendiente">
          <CardHeader>
            <CardTitle>Revisión pendiente</CardTitle>
            <CardDescription>Decisiones y configuración que requieren atención.</CardDescription>
          </CardHeader>
          <CardContent>
            <DetailRow
              label="Conceptos pendientes de revisión"
              value={summary?.conceptsPendingReview ?? 0}
              detail="Requieren decisión; no se incluyen en el cálculo principal."
              icon={AlertCircle}
              badgeVariant="secondary"
            />
            <DetailRow
              label="Importe pendiente de decisión"
              value={formatEuro(summary?.pendingDecisionPdfTotal ?? 0)}
              detail="Importe Recibo pendiente de decisión, no incluido en el cálculo principal"
              icon={BadgeEuro}
              badgeVariant="secondary"
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
              badgeVariant="destructive"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
