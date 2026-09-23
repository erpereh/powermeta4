"use client";

import { DownloadIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/system";
import { RETRIBUTIVO_VIEW_LABELS, type AppView } from "@/features/registro-retributivo/types/views";

type RetributivoInnerHeaderProps = {
  readonly view: AppView;
  readonly canExport: boolean;
  readonly exporting?: boolean;
  readonly onExport: () => void;
  readonly onNewAnalysis: () => void;
};

export function RetributivoInnerHeader({
  view,
  canExport,
  exporting = false,
  onExport,
  onNewAnalysis,
}: RetributivoInnerHeaderProps) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <h1 className="min-w-0 flex-1 truncate text-base font-medium text-foreground">
        {RETRIBUTIVO_VIEW_LABELS[view]}
      </h1>
      <div className="flex shrink-0 items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!canExport || exporting}
          onClick={onExport}
        >
          <DownloadIcon className="size-3.5" aria-hidden="true" />
          Exportar Excel
        </Button>
        <Button type="button" variant="primary" size="sm" onClick={onNewAnalysis}>
          <RotateCcwIcon className="size-3.5" aria-hidden="true" />
          Nuevo análisis
        </Button>
      </div>
    </div>
  );
}
