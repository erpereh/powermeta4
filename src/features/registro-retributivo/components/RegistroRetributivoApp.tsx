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
import { useWorkspaceStore } from "@/stores/use-workspace-store";

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
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-auto">
        {hydrating ? <DashboardSkeleton /> : <ActiveView />}
      </div>
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </RetributivoShell>
  );
}

export function RegistroRetributivoApp() {
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  return (
    <AppStateProvider key={companyId ?? "local"}>
      <RetributivoAppFrame />
    </AppStateProvider>
  );
}
