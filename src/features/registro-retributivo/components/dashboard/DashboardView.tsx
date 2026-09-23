"use client";

import { FileSpreadsheet, FileText, RefreshCcw, Scale } from "lucide-react";
import { useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { ChartsPanel } from "@/features/registro-retributivo/components/dashboard/ChartsPanel";
import { SummaryCards } from "@/features/registro-retributivo/components/dashboard/SummaryCards";
import { UploadPanel } from "@/features/registro-retributivo/components/upload/UploadPanel";
import { Button, Callout, Drawer } from "@/components/system";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

function SourcesStrip({ onChange }: Readonly<{ onChange: () => void }>) {
  const { activeAnalysis, result } = useAppState();
  const pdfCount = activeAnalysis?.pdfCount ?? result?.summary.pdfsAnalyzed ?? 0;
  const items = [
    { icon: FileText, label: `${pdfCount} ${pdfCount === 1 ? "recibo" : "recibos"}` },
    { icon: FileSpreadsheet, label: displayText(activeAnalysis?.registroFileName) || "Excel Reg. Retrib." },
    { icon: Scale, label: `Tolerancia ${formatEuro(result?.summary.tolerance ?? 0)}` },
  ];

  return (
    <section
      aria-label="Fuentes del análisis"
      className="flex min-w-0 flex-wrap items-center justify-between gap-x-6 gap-y-2"
    >
      <ul className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex min-w-0 items-center gap-1.5">
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <span className="max-w-[18rem] truncate">{label}</span>
          </li>
        ))}
      </ul>
      <Button type="button" variant="ghost" size="sm" onClick={onChange}>
        <RefreshCcw className="size-3.5" aria-hidden="true" />
        Cambiar archivos
      </Button>
    </section>
  );
}

export function DashboardView() {
  const { result, activeAnalysis } = useAppState();
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const analysisId = activeAnalysis?.id;
  const [openedFor, setOpenedFor] = useState(analysisId);
  // Un análisis nuevo cierra el panel de fuentes (ajuste de estado en render).
  if (openedFor !== analysisId) {
    setOpenedFor(analysisId);
    if (sourcesOpen) setSourcesOpen(false);
  }
  const excludedCount = result?.excludedEmployeeIdsApplied?.length ?? 0;

  if (!result) {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 pb-6">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Comparativa Recibos vs Registro Retributivo</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Sube los recibos y el Excel, ajusta la tolerancia y lanza el análisis. Los resultados aparecerán aquí.
          </p>
        </div>
        <UploadPanel />
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-5 pb-6">
      <SourcesStrip onChange={() => setSourcesOpen(true)} />
      {excludedCount ? (
        <Callout status="info" title={`Exclusiones aplicadas: ${excludedCount} matrículas`}>
          No se tienen en cuenta en ninguna comparativa ni exportación.
        </Callout>
      ) : null}
      <SummaryCards summary={result.summary} internalExcelChecks={result.internalExcelChecks} />
      <ChartsPanel result={result} />

      <Drawer
        open={sourcesOpen}
        onOpenChange={setSourcesOpen}
        title="Nuevo análisis con otros archivos"
        description="El análisis actual se mantiene hasta que lances uno nuevo."
        size="lg"
      >
        <UploadPanel layout="stacked" />
      </Drawer>
    </div>
  );
}
