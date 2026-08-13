"use client";

import { type ReactNode, useState } from "react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectView = (nextView: AppView) => {
    onSelectView(nextView);
    setMobileNavOpen(false);
  };

  return (
    <div
      data-registro-retributivo-root
      className="flex h-svh min-h-0 min-w-0 flex-col overflow-hidden bg-background"
    >
      <ToolsPageHeader title="Registro Retributivo" />
      <RetributivoInnerHeader
        view={view}
        canExport={canExport}
        exporting={exporting}
        onExport={onExport}
        onNewAnalysis={onNewAnalysis}
        onOpenMobileNav={() => setMobileNavOpen(true)}
      />
      <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
        <aside className="hidden min-h-0 w-52 shrink-0 overflow-y-auto border-r p-2 md:flex md:flex-col">
          <RetributivoInnerNav className="flex-1" view={view} onSelectView={selectView} />
          <ActiveAnalysisCard />
        </aside>
        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-4 md:p-6">
          {children}
        </main>
      </div>
      {mobileNavOpen ? (
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader>
              <SheetTitle>Registro Retributivo</SheetTitle>
            </SheetHeader>
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pb-4">
              <RetributivoInnerNav className="flex-1" view={view} onSelectView={selectView} />
              <ActiveAnalysisCard />
            </div>
          </SheetContent>
        </Sheet>
      ) : null}
    </div>
  );
}
