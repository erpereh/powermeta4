"use client";

import { useEffect, useRef } from "react";
import { AppStateProvider, useAppState } from "@/features/registro-retributivo/state/AppState";
import { CuadreExcelView } from "@/features/registro-retributivo/components/cuadre-excel/CuadreExcelView";
import { DashboardView } from "@/features/registro-retributivo/components/dashboard/DashboardView";
import { HistoryView } from "@/features/registro-retributivo/components/history/HistoryView";
import { SettingsView } from "@/features/registro-retributivo/components/settings/SettingsView";
import { TablesView } from "@/features/registro-retributivo/components/tables/TablesView";
import { RetributivoShell } from "@/features/registro-retributivo/components/shell/RetributivoShell";
import { Skeleton, useToast } from "@/components/system";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { ToastKind } from "@/features/registro-retributivo/components/common/toast-types";

function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-5" aria-busy="true" aria-label="Cargando análisis">
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-40 rounded-xl lg:col-span-2" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36 rounded-xl" />
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Skeleton className="h-80 rounded-xl" />
        <Skeleton className="h-80 rounded-xl" />
      </div>
    </div>
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
    case "ajustes":
      return <SettingsView />;
    case "dashboard":
    default:
      return <DashboardView />;
  }
}

function mapToastStatus(kind: ToastKind) {
  return kind;
}

/** Reenvía toasts del dominio AppState al ToastProvider de producto. */
function AppToastBridge() {
  const { toasts, dismissToast } = useAppState();
  const { toast } = useToast();
  const seenRef = useRef(new Set<string>());

  useEffect(() => {
    for (const item of toasts) {
      if (seenRef.current.has(item.id)) continue;
      seenRef.current.add(item.id);
      toast({
        title: item.title,
        description: item.message,
        status: mapToastStatus(item.kind),
      });
      dismissToast(item.id);
    }
  }, [dismissToast, toast, toasts]);

  return null;
}

function RetributivoAppFrame() {
  const {
    view,
    setView,
    hydrating,
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
      <AppToastBridge />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-auto">
        {hydrating ? <DashboardSkeleton /> : <ActiveView />}
      </div>
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
