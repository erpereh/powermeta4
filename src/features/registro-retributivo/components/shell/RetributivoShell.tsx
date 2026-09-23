"use client";

import type { ReactNode } from "react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import type { AppView } from "@/features/registro-retributivo/types/views";

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
      <ToolsPageHeader title="Registro Retributivo" />
      <div className="flex h-12 min-w-0 shrink-0 items-center overflow-x-hidden border-b border-border px-3 sm:px-4">
        <RetributivoInnerHeader
          view={view}
          canExport={canExport}
          exporting={exporting}
          onExport={onExport}
          onNewAnalysis={onNewAnalysis}
        />
      </div>
      <div className="border-b border-border px-3 py-2 sm:px-4 md:hidden">
        <RetributivoInnerNav
          view={view}
          onSelectView={onSelectView}
          orientation="horizontal"
        />
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
        <aside className="hidden min-h-0 w-52 shrink-0 flex-col overflow-y-auto border-r border-border p-2 md:flex">
          <RetributivoInnerNav className="flex-1" view={view} onSelectView={onSelectView} />
          <ActiveAnalysisCard />
        </aside>
        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
