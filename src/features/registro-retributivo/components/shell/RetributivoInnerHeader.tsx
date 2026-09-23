"use client";

import { DownloadIcon, PlusIcon } from "lucide-react";

import { Button, Loader, Tooltip } from "@/components/system";

type RetributivoInnerHeaderProps = {
  readonly canExport: boolean;
  readonly exporting?: boolean;
  readonly onExport: () => void;
  readonly onNewAnalysis: () => void;
};

/** Acciones globales de la herramienta, integradas en la cabecera única. */
export function RetributivoInnerHeader({
  canExport,
  exporting = false,
  onExport,
  onNewAnalysis,
}: RetributivoInnerHeaderProps) {
  return (
    <>
      <Tooltip content={canExport ? "Exportar Excel" : "Sin análisis para exportar"} side="bottom">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Exportar Excel"
          disabled={!canExport || exporting}
          onClick={onExport}
        >
          {exporting ? (
            <Loader variant="spinner" size={14} label="Exportando" />
          ) : (
            <DownloadIcon className="size-4" aria-hidden="true" />
          )}
        </Button>
      </Tooltip>
      <Button type="button" variant="primary" size="sm" onClick={onNewAnalysis}>
        <PlusIcon className="size-3.5" aria-hidden="true" />
        Nuevo análisis
      </Button>
    </>
  );
}
