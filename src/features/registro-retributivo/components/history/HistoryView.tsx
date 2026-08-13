"use client";

import { CalendarDays, Download, FileText, History, RotateCcw, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { StatusBadge } from "@/features/registro-retributivo/components/common/StatusBadge";
import { ModalShell } from "@/features/registro-retributivo/components/common/ModalShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import type { StoredAnalysis } from "@/features/registro-retributivo/types";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function HistoryCard({
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

  return (
    <Card
      data-surface="history-row"
      className={cn("cursor-pointer transition-colors hover:bg-muted/30", active && "border-primary/40 bg-primary/5 ring-1 ring-primary/20")}
      onClick={onOpen}
    >
      <CardContent className="pt-6">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CalendarDays className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{formatDate(analysis.createdAt)}</p>
                <p className="max-w-[420px] truncate text-sm text-muted-foreground">{displayText(analysis.registroFileName)}</p>
              </div>
              {active ? <StatusBadge value="Análisis activo" tone="success" /> : null}
              <StatusBadge value="IA bajo demanda" tone="info" />
            </div>

            <dl
              data-surface="history-metrics"
              className="mt-4 grid overflow-hidden rounded-2xl border border-border bg-muted/50 xl:grid-cols-6 xl:divide-x xl:divide-y-0 xl:divide-border/80"
            >
              {[
                ["Recibos", analysis.pdfCount],
                ["Personas", summary?.uniquePeople ?? 0],
                ["Con diferencias", summary?.peopleWithDifferences ?? 0],
                ["Pendientes", summary?.conceptsPendingReview ?? 0],
                ["Ignorados", summary?.conceptsIgnored ?? 0],
                ["Diferencia", formatEuro(summary?.matchedTotalDifference ?? summary?.totalGlobalDifference ?? 0)],
              ].map(([label, value]) => (
                <div key={label as string} data-variant="row" className="border-t border-border/70 px-3 py-3 first:border-t-0 xl:border-t-0">
                  <dt className="text-[11px] font-semibold uppercase text-muted-foreground">{label as string}</dt>
                  <dd className="mt-1 truncate text-sm font-semibold text-foreground tabular-nums">{String(value)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-wrap gap-2 xl:justify-end" onClick={(event) => event.stopPropagation()}>
            <Button type="button" onClick={onOpen}>
              <RotateCcw data-icon="inline-start" />
              Abrir análisis
            </Button>
            <Button type="button" variant="outline" onClick={onExport} disabled={exporting}>
              <Download data-icon="inline-start" />
              Exportar Excel
            </Button>
            <Button type="button" variant="destructive" onClick={onDelete}>
              <Trash2 data-icon="inline-start" />
              Eliminar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function HistoryView() {
  const { history, activeAnalysis, exporting, openStoredAnalysis, removeStoredAnalysis, clearStoredHistory, exportStoredAnalysis } = useAppState();
  const [deleteTarget, setDeleteTarget] = useState<string | "all">();
  const [deleting, setDeleting] = useState(false);
  const [deletionError, setDeletionError] = useState<string>();
  const rootRef = useRef<HTMLDivElement>(null);

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
    } finally { setDeleting(false); }
  }

  return (
    <div ref={rootRef} tabIndex={-1} aria-label="Historial de análisis" className="flex flex-col gap-6 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {history.length ? (
        <div className="flex justify-end">
          <Button type="button" variant="destructive" onClick={() => { setDeletionError(undefined); setDeleteTarget("all"); }}>
            <Trash2 data-icon="inline-start" />
            Limpiar historial
          </Button>
        </div>
      ) : null}

      {!history.length ? (
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon"><History /></EmptyMedia>
            <EmptyTitle>No hay análisis guardados todavía</EmptyTitle>
            <EmptyDescription>Los análisis completados aparecerán aquí para abrirlos, exportarlos o eliminarlos sin conservar recibos ni archivos originales.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Badge variant="secondary">
              <FileText data-icon="inline-start" />
              Analiza recibos para crear el primer análisis
            </Badge>
          </EmptyContent>
        </Empty>
      ) : (
        <section className="flex flex-col gap-4">
          {history.map((analysis) => (
            <HistoryCard
              key={analysis.id}
              analysis={analysis}
              active={activeAnalysis?.id === analysis.id}
              exporting={exporting}
              onOpen={() => void openStoredAnalysis(analysis.id)}
              onExport={() => void exportStoredAnalysis(analysis)}
              onDelete={() => { setDeletionError(undefined); setDeleteTarget(analysis.id); }}
            />
          ))}
        </section>
      )}
      {deleteTarget ? (
        <ModalShell title={deleteTarget === "all" ? "Eliminar historial" : "Eliminar análisis"} eyebrow="Eliminación local" maxWidth="2xl" onClose={() => { if (!deleting) setDeleteTarget(undefined); }} footer={
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" disabled={deleting} onClick={() => setDeleteTarget(undefined)}>Cancelar</Button>
            <Button type="button" variant="destructive" disabled={deleting} onClick={() => void confirmDeletion()}>Eliminar</Button>
          </div>
        }>
          <p className="text-sm leading-6 text-muted-foreground">Esta acción elimina el análisis guardado de la base SQLite local. No se pueden recuperar los resultados una vez borrados.</p>
          {deletionError ? <p role="alert" className="mt-3 text-sm font-semibold text-destructive">{deletionError}</p> : null}
          {deleting ? <p role="status" className="mt-3 text-sm font-semibold text-foreground">Eliminando contenido local…</p> : null}
        </ModalShell>
      ) : null}
    </div>
  );
}
