"use client";

import { FileSpreadsheet, FileText, RefreshCcw, Scale } from "lucide-react";
import { useMemo, useState } from "react";
import { EMPTY_FILTERS, useAppState } from "@/features/registro-retributivo/state/AppState";
import { ChartsPanel } from "@/features/registro-retributivo/components/dashboard/ChartsPanel";
import {
  AmountsPanel,
  AnalysisVerdict,
  PendingReview,
  StatusBreakdown,
} from "@/features/registro-retributivo/components/dashboard/OverviewSections";
import { countPeopleByStatus } from "@/features/registro-retributivo/components/common/personStatus";
import { UploadPanel } from "@/features/registro-retributivo/components/upload/UploadPanel";
import { Button, Callout, Drawer } from "@/components/system";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

const DATE_FORMAT = new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeStyle: "short" });

function SourcesLine() {
  const { activeAnalysis, result } = useAppState();
  const pdfCount = activeAnalysis?.pdfCount ?? result?.summary.pdfsAnalyzed ?? 0;
  const items = [
    { icon: FileText, label: `${pdfCount} ${pdfCount === 1 ? "recibo" : "recibos"} PDF`, title: undefined },
    {
      icon: FileSpreadsheet,
      label: displayText(activeAnalysis?.registroFileName) || "Excel Reg. Retrib.",
      title: displayText(activeAnalysis?.registroFileName) || undefined,
    },
    { icon: Scale, label: `Tolerancia ${formatEuro(result?.summary.tolerance ?? 0)}`, title: undefined },
  ];

  return (
    <ul aria-label="Fuentes del análisis" className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
      {items.map(({ icon: Icon, label, title }) => (
        <li key={label} className="flex min-w-0 items-center gap-1.5" title={title}>
          <Icon className="size-4 shrink-0" aria-hidden="true" />
          <span className="block max-w-[22rem] truncate">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function EmptyDashboard() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 pb-6">
      <header className="min-w-0">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Nuevo análisis</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground text-pretty">
          Compara, persona a persona, lo que pagan los recibos de nómina con lo que dice el Registro Retributivo. Sube los dos
          ficheros y pulsa Analizar.
        </p>
      </header>
      <UploadPanel />
    </div>
  );
}

export function DashboardView() {
  const { result, activeAnalysis, setFilters, setView } = useAppState();
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const analysisId = activeAnalysis?.id;
  const [openedFor, setOpenedFor] = useState(analysisId);
  // Un análisis nuevo cierra el panel de fuentes (ajuste de estado en render).
  if (openedFor !== analysisId) {
    setOpenedFor(analysisId);
    if (sourcesOpen) setSourcesOpen(false);
  }
  const statuses = useMemo(() => countPeopleByStatus(result?.people ?? []), [result?.people]);

  if (!result) return <EmptyDashboard />;

  const total = result.people.length;
  const excludedCount = result.excludedEmployeeIdsApplied?.length ?? 0;
  const goToPeople = (status: string) => {
    setFilters({ ...EMPTY_FILTERS, status });
    setView("personas");
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-5 pb-6">
      <header className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-col gap-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Resumen del análisis</h2>
            {activeAnalysis?.createdAt ? (
              <p className="text-sm text-muted-foreground">Analizado el {DATE_FORMAT.format(new Date(activeAnalysis.createdAt))}</p>
            ) : null}
          </div>
          <SourcesLine />
        </div>
        <Button type="button" variant="outline" size="sm" className="shrink-0 self-start" onClick={() => setSourcesOpen(true)}>
          <RefreshCcw className="size-3.5" aria-hidden="true" />
          Analizar otros archivos
        </Button>
      </header>

      <AnalysisVerdict total={total} statuses={statuses} onGoToPeople={goToPeople} />

      {excludedCount ? (
        <Callout status="info" title={`${excludedCount} ${excludedCount === 1 ? "matrícula excluida" : "matrículas excluidas"} del análisis`}>
          Se configuran en Ajustes → Exclusiones y no cuentan en ninguna cifra.
        </Callout>
      ) : null}

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="flex min-w-0 flex-col gap-4">
          <StatusBreakdown total={total} statuses={statuses} onGoToPeople={goToPeople} />
          <PendingReview result={result} onGoToSettings={() => setView("ajustes")} onGoToCuadre={() => setView("cuadre-excel")} />
        </div>
        <AmountsPanel result={result} />
      </div>

      <ChartsPanel result={result} />

      <Drawer
        open={sourcesOpen}
        onOpenChange={setSourcesOpen}
        title="Analizar otros archivos"
        description="El resumen actual se mantiene hasta que lances el nuevo análisis."
        size="lg"
      >
        <UploadPanel layout="stacked" />
      </Drawer>
    </div>
  );
}
