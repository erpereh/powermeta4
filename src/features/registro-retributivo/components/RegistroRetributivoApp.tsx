"use client";

import { AppStateProvider, useAppState } from "@/features/registro-retributivo/state/AppState";
import { CuadreExcelView } from "@/features/registro-retributivo/components/cuadre-excel/CuadreExcelView";
import { DashboardSkeleton } from "@/features/registro-retributivo/components/common/Skeleton";
import { ToastViewport } from "@/features/registro-retributivo/components/common/ToastViewport";
import { DashboardView } from "@/features/registro-retributivo/components/dashboard/DashboardView";
import { HistoryView } from "@/features/registro-retributivo/components/history/HistoryView";
import { SettingsView } from "@/features/registro-retributivo/components/settings/SettingsView";
import { TablesView } from "@/features/registro-retributivo/components/tables/TablesView";
import { RetributivoShell } from "@/features/registro-retributivo/components/shell/RetributivoShell";

function AssistantPendingView() {
  return (
    <section className="flex min-h-0 flex-1 flex-col gap-2">
      <h2 className="text-2xl font-semibold tracking-tight">Asistente</h2>
      <p className="max-w-2xl text-sm text-muted-foreground">
        El asistente retributivo se conectará cuando su almacenamiento SQLite y el protocolo de
        comandos estén listos. El resto de vistas ya usan el análisis activo de esta empresa.
      </p>
    </section>
  );
}

function ActiveView() {
  const { view } = useAppState();

  switch (view) {
    case "personas":
    case "agrupaciones":
      return <TablesView mode={view} />;
    case "cuadre-excel":
      return <CuadreExcelView />;
    case "historial":
      return <HistoryView />;
    case "asistente":
      return <AssistantPendingView />;
    case "ajustes":
      return <SettingsView />;
    case "dashboard":
    default:
      return <DashboardView />;
  }
}

function RetributivoAppFrame() {
  const {
    view,
    setView,
    hydrating,
    toasts,
    dismissToast,
    activeAnalysis,
    exportActiveAnalysis,
    exporting,
    resetForNewAnalysis,
  } = useAppState();

  return (
    <RetributivoShell
      view={view}
      onSelectView={setView}
      canExport={Boolean(activeAnalysis)}
      exporting={exporting}
      onExport={() => void exportActiveAnalysis()}
      onNewAnalysis={resetForNewAnalysis}
    >
      {hydrating ? <DashboardSkeleton /> : <ActiveView />}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </RetributivoShell>
  );
}

export function RegistroRetributivoApp() {
  return (
    <AppStateProvider>
      <RetributivoAppFrame />
    </AppStateProvider>
  );
}
