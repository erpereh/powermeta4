"use client";

import type { ReactNode } from "react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { RETRIBUTIVO_VIEW_LABELS, type AppView } from "@/features/registro-retributivo/types/views";

import { ActiveAnalysisCard } from "./ActiveAnalysisCard";
import { RetributivoInnerHeader } from "./RetributivoInnerHeader";
import { RetributivoInnerNav } from "./RetributivoInnerNav";

type RetributivoShellProps = {
  readonly view: AppView;
  readonly onSelectView: (view: AppView) => void;
  readonly canExport: boolean;
  readonly exporting?: boolean;
  readonly onExport: () => void;
  readonly onNewAnalysis: () => void;
  readonly children: ReactNode;
};

export function RetributivoShell({
  view,
  onSelectView,
  canExport,
  exporting,
  onExport,
  onNewAnalysis,
  children,
}: RetributivoShellProps) {
  return (
    <div
      data-registro-retributivo-root
      className="flex h-svh min-h-0 min-w-0 flex-col overflow-hidden bg-background"
    >
      <ToolsPageHeader
        title="Registro Retributivo"
        actions={
          <RetributivoInnerHeader
            canExport={canExport}
            exporting={exporting}
            onExport={onExport}
            onNewAnalysis={onNewAnalysis}
          />
        }
      />
      <div className="flex min-w-0 shrink-0 items-end gap-3 border-b border-border px-3 sm:px-4">
        <RetributivoInnerNav className="-mb-px min-w-0 flex-1" view={view} onSelectView={onSelectView} />
        <ActiveAnalysisCard className="hidden pb-2.5 md:flex" />
      </div>
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-4 py-5 md:px-6">
        <h1 className="sr-only">{RETRIBUTIVO_VIEW_LABELS[view]}</h1>
        {children}
      </main>
    </div>
  );
}
