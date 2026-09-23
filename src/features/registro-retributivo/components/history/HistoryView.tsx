"use client";

import { Download, FileSpreadsheet, History, MoreHorizontal, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import {
  Badge,
  Button,
  EmptyState,
  HoverList,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Modal,
  StatefulButton,
} from "@/components/system";
import type { StoredAnalysis } from "@/features/registro-retributivo/types";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { historySummary } from "@/features/registro-retributivo/components/common/analysisLabels";

const DAY_FORMAT = new Intl.DateTimeFormat("es-ES", { day: "2-digit" });
const MONTH_FORMAT = new Intl.DateTimeFormat("es-ES", { month: "short" });
const FULL_FORMAT = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium", timeStyle: "short" });

function HistoryRow({
  analysis,
  active,
  exporting,
  onOpen,
  onDelete,
  onExport,
}: Readonly<{
  analysis: StoredAnalysis;
  active: boolean;
  exporting: boolean;
  onOpen: () => void;
  onDelete: () => void;
  onExport: () => void;
}>) {
  const summary = analysis.result?.summary;
  const date = new Date(analysis.createdAt);
  const difference = summary?.matchedTotalDifference ?? summary?.totalGlobalDifference ?? 0;
  const fileName = displayText(analysis.registroFileName) || "Excel Reg. Retrib.";

  return (
    <li data-surface="history-row" className="group/history flex min-w-0 items-center gap-1 rounded-lg">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Abrir análisis del ${FULL_FORMAT.format(date)}`}
        aria-current={active ? "true" : undefined}
        className="relative z-10 flex min-w-0 flex-1 items-center gap-4 rounded-lg px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span
          aria-hidden="true"
          className={cn(
            "flex size-11 shrink-0 flex-col items-center justify-center rounded-lg border leading-none",
            active ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-background text-foreground",
          )}
        >
          <span className="text-base font-semibold tabular-nums">{DAY_FORMAT.format(date)}</span>
          <span className="mt-0.5 text-[10px] uppercase text-muted-foreground">{MONTH_FORMAT.format(date)}</span>
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="flex min-w-0 items-center gap-2">
            <FileSpreadsheet className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="truncate text-sm font-medium text-foreground">{fileName}</span>
            {active ? (
              <Badge status="success" size="sm" className="shrink-0">
                Activo
              </Badge>
            ) : null}
          </span>
          <span className="truncate text-xs text-muted-foreground tabular-nums">
            {historySummary(analysis)}
          </span>
        </span>
        <span className="hidden shrink-0 text-right sm:block">
          <span className="block text-[11px] text-muted-foreground">Diferencia</span>
          <span className="block font-mono text-sm font-semibold tabular-nums text-foreground">{formatEuro(difference)}</span>
        </span>
      </button>
      <Menu>
        <MenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Acciones del análisis del ${FULL_FORMAT.format(date)}`}
            className="relative z-10 shrink-0 text-muted-foreground"
          >
            <MoreHorizontal className="size-4" aria-hidden="true" />
          </Button>
        </MenuTrigger>
        <MenuContent align="end" className="w-48">
          <MenuItem disabled={exporting} onSelect={onExport}>
            <Download />
            <span>Exportar Excel</span>
          </MenuItem>
          <MenuSeparator />
          <MenuItem className="text-destructive focus:text-destructive" onSelect={onDelete}>
            <Trash2 />
            <span>Eliminar</span>
          </MenuItem>
        </MenuContent>
      </Menu>
    </li>
  );
}

export function HistoryView() {
  const { history, activeAnalysis, exporting, openStoredAnalysis, removeStoredAnalysis, clearStoredHistory, exportStoredAnalysis } = useAppState();
  const [deleteTarget, setDeleteTarget] = useState<string | "all">();
  const [deleting, setDeleting] = useState(false);
  const [deletionError, setDeletionError] = useState<string>();
  const rootRef = useRef<HTMLDivElement>(null);

  function requestDeletion(target: string | "all") {
    setDeletionError(undefined);
    setDeleteTarget(target);
  }

  async function confirmDeletion() {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    setDeletionError(undefined);
    try {
      if (deleteTarget === "all") await clearStoredHistory();
      else await removeStoredAnalysis(deleteTarget);
      setDeleteTarget(undefined);
      window.setTimeout(() => rootRef.current?.focus(), 0);
    } catch {
      setDeletionError("No se pudo completar la eliminación. Puedes volver a intentarlo.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div
      ref={rootRef}
      tabIndex={-1}
      aria-label="Historial de análisis"
      className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {!history.length ? (
        <EmptyState
          icon={<History />}
          title="No hay análisis guardados todavía"
          description="Los análisis completados aparecerán aquí para abrirlos, exportarlos o eliminarlos. No se conservan recibos ni archivos originales."
        />
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground tabular-nums">{history.length}</span>{" "}
              {history.length === 1 ? "análisis guardado" : "análisis guardados"} en la base local
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive"
              onClick={() => requestDeletion("all")}
            >
              <Trash2 className="size-3.5" aria-hidden="true" />
              Limpiar historial
            </Button>
          </div>
          <HoverList aria-label="Análisis guardados" className="flex flex-col rounded-2xl border border-border bg-card p-1.5">
            {history.map((analysis) => (
              <HistoryRow
                key={analysis.id}
                analysis={analysis}
                active={activeAnalysis?.id === analysis.id}
                exporting={exporting}
                onOpen={() => void openStoredAnalysis(analysis.id)}
                onExport={() => void exportStoredAnalysis(analysis)}
                onDelete={() => requestDeletion(analysis.id)}
              />
            ))}
          </HoverList>
        </>
      )}

      <Modal
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => {
          if (!open && !deleting) setDeleteTarget(undefined);
        }}
        title={deleteTarget === "all" ? "Eliminar historial" : "Eliminar análisis"}
        description="Eliminación local"
        size="sm"
        footer={
          <>
            <Button type="button" variant="outline" size="sm" disabled={deleting} onClick={() => setDeleteTarget(undefined)}>
              Cancelar
            </Button>
            <StatefulButton
              type="button"
              variant="outline"
              size="sm"
              state={deleting ? "loading" : deletionError ? "error" : "idle"}
              loadingText="Eliminando…"
              errorText="Reintentar"
              className="text-destructive hover:text-destructive"
              onClick={() => void confirmDeletion()}
            >
              Eliminar
            </StatefulButton>
          </>
        }
      >
        <p className="text-sm leading-6 text-muted-foreground">
          Esta acción elimina el análisis guardado de la base SQLite local. No se pueden recuperar los resultados una vez borrados.
        </p>
        {deletionError ? <p role="alert" className="mt-3 text-sm font-semibold text-destructive">{deletionError}</p> : null}
      </Modal>
    </div>
  );
}
