"use client";

import { DownloadIcon, MenuIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RETRIBUTIVO_VIEW_LABELS, type AppView } from "@/features/registro-retributivo/types/views";

type RetributivoInnerHeaderProps = {
  readonly view: AppView;
  readonly canExport: boolean;
  readonly exporting?: boolean;
  readonly onExport: () => void;
  readonly onNewAnalysis: () => void;
  readonly onOpenMobileNav?: () => void;
};

export function RetributivoInnerHeader({
  view,
  canExport,
  exporting = false,
  onExport,
  onNewAnalysis,
  onOpenMobileNav,
}: RetributivoInnerHeaderProps) {
  return (
    <header className="flex h-12 min-w-0 shrink-0 items-center gap-2 overflow-x-hidden border-b px-3 sm:px-4">
      {onOpenMobileNav ? (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          aria-label="Abrir navegación de Registro Retributivo"
          onClick={onOpenMobileNav}
        >
          <MenuIcon />
        </Button>
      ) : null}
      <h1 className="min-w-0 flex-1 truncate text-base font-medium">{RETRIBUTIVO_VIEW_LABELS[view]}</h1>
      <div className="flex shrink-0 items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!canExport || exporting}
          onClick={onExport}
        >
          <DownloadIcon data-icon="inline-start" />
          Exportar Excel
        </Button>
        <Button type="button" variant="default" size="sm" onClick={onNewAnalysis}>
          <RotateCcwIcon data-icon="inline-start" />
          Nuevo análisis
        </Button>
      </div>
    </header>
  );
}
