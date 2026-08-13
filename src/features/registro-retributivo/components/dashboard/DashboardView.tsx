"use client";

import { Clock3 } from "lucide-react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { ChartsPanel } from "@/features/registro-retributivo/components/dashboard/ChartsPanel";
import { SummaryCards } from "@/features/registro-retributivo/components/dashboard/SummaryCards";
import { UploadPanel } from "@/features/registro-retributivo/components/upload/UploadPanel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function formatDate(value?: string): string {
  if (!value) return "Sin análisis activo";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function DashboardView() {
  const { activeAnalysis, result, aiStatus } = useAppState();
  const aiBadge = aiStatus?.configured && aiStatus.enabled ? "IA disponible" : "IA no configurada";
  const excludedCount = result?.excludedEmployeeIdsApplied?.length ?? 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-tight">Comparativa Recibos vs Registro Retributivo</h2>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            Resumen del análisis retributivo: diferencias matched, conceptos pendientes, Recibo sin Reg. Retrib. y estado general del cuadre.
          </p>
        </div>
        {activeAnalysis ? (
          <Card className="w-full shrink-0 lg:w-auto">
            <CardContent className="flex items-center gap-3 pt-6">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock3 aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Análisis activo</p>
                <p className="text-sm font-semibold">{formatDate(activeAnalysis.createdAt)}</p>
              </div>
              <Badge variant={aiStatus?.configured && aiStatus.enabled ? "default" : "secondary"}>{aiBadge}</Badge>
            </CardContent>
          </Card>
        ) : null}
      </div>
      <UploadPanel />
      {excludedCount ? (
        <Badge variant="outline" className="self-start">
          Exclusiones aplicadas: {excludedCount} matrículas
        </Badge>
      ) : null}
      <SummaryCards summary={result?.summary} internalExcelChecks={result?.internalExcelChecks} />
      <ChartsPanel result={result} />
    </div>
  );
}
