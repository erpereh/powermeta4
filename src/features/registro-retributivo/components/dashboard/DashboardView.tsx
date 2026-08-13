"use client";

import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { ChartsPanel } from "@/features/registro-retributivo/components/dashboard/ChartsPanel";
import { SummaryCards } from "@/features/registro-retributivo/components/dashboard/SummaryCards";
import { UploadPanel } from "@/features/registro-retributivo/components/upload/UploadPanel";
import { Badge } from "@/components/ui/badge";

export function DashboardView() {
  const { result } = useAppState();
  const excludedCount = result?.excludedEmployeeIdsApplied?.length ?? 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="min-w-0">
        <h2 className="text-2xl font-semibold tracking-tight">Comparativa Recibos vs Registro Retributivo</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Resumen del análisis retributivo: diferencias matched, conceptos pendientes, Recibo sin Reg. Retrib. y estado general del cuadre.
        </p>
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
