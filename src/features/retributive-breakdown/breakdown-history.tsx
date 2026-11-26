"use client";

import { FileSpreadsheet, History, MoreHorizontal, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

import {
  Badge,
  Button,
  EmptyState,
  HoverList,
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  Modal,
  StatefulButton,
} from "@/components/system";
import { cn } from "@/lib/utils";

import { type BreakdownHistoryEntry, type BreakdownOutput, GROUPINGS } from "./contract";

const day = new Intl.DateTimeFormat("es-ES", { day: "2-digit" });
const month = new Intl.DateTimeFormat("es-ES", { month: "short" });
const timestamp = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium", timeStyle: "short" });
const count = new Intl.NumberFormat("es-ES");

export function BreakdownExportItems({
  onExport,
}: {
  onExport: (output: BreakdownOutput) => void;
}) {
  return (
    <>
      <MenuItem onSelect={() => onExport("complete")}>Excel completo</MenuItem>
      <MenuSeparator />
      <MenuLabel>Excel individuales</MenuLabel>
      {GROUPINGS.map(({ file, sheet }) => (
        <MenuItem key={file} onSelect={() => onExport(file)}>
          {sheet}
        </MenuItem>
      ))}
      <MenuSeparator />
      <MenuItem onSelect={() => onExport("zip")}>ZIP con los cinco Excel</MenuItem>
    </>
  );
}

type DeleteTarget = { id: string; label: string } | "all";

export function BreakdownHistoryView({
  entries,
  activeId,
  busy,
  deleting,
  deleteError,
  onOpen,
  onExport,
  onDelete,
  onDismissError,
}: {
  entries: readonly BreakdownHistoryEntry[];
  activeId?: string;
  busy: boolean;
  deleting: boolean;
  deleteError?: string;
  onOpen: (id: string) => void;
  onExport: (id: string, output: BreakdownOutput) => void;
  onDelete: (id?: string) => Promise<boolean>;
  onDismissError: () => void;
}) {
  const [target, setTarget] = useState<DeleteTarget>();
  const heading = useRef<HTMLHeadingElement>(null);

  function confirmDeletion() {
    if (!target || busy) return;
    void onDelete(target === "all" ? undefined : target.id).then((deleted) => {
      if (!deleted) return;
      setTarget(undefined);
      requestAnimationFrame(() => heading.current?.focus());
    });
  }

  function requestDeletion(next?: DeleteTarget) {
    onDismissError();
    setTarget(next);
  }

  return (
    <section aria-labelledby="breakdown-history" className="mx-auto w-full max-w-4xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2
          id="breakdown-history"
          ref={heading}
          tabIndex={-1}
          className="rounded-sm text-xl font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-ring"
        >
          Historial de análisis
        </h2>
        {entries.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={busy}
            className="text-destructive hover:text-destructive"
            onClick={() => requestDeletion("all")}
          >
            <Trash2 className="size-3.5" aria-hidden="true" />
            Limpiar historial
          </Button>
        )}
      </div>
      {entries.length === 0 ? (
        <EmptyState
          icon={<History />}
          title="No hay análisis guardados todavía"
          description="Los análisis completados aparecerán aquí para abrirlos o descargarlos."
        />
      ) : (
        <HoverList
          aria-label="Análisis guardados"
          className="flex flex-col rounded-xl border border-border bg-card p-1.5"
        >
          {entries.map((entry) => {
            const date = new Date(entry.createdAt);
            const period = `${entry.period.from} al ${entry.period.to}`;
            const label = `del ${timestamp.format(date)}, periodo del ${period}`;
            const active = entry.id === activeId;
            return (
              <li key={entry.id} className="min-w-0 rounded-lg">
                <div className="flex min-w-0 items-center gap-1 pr-2">
                  <button
                    type="button"
                    aria-label={`Abrir análisis ${label}`}
                    aria-current={active ? "true" : undefined}
                    disabled={busy}
                    onClick={() => onOpen(entry.id)}
                    className="relative z-10 flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex size-11 shrink-0 flex-col items-center justify-center rounded-lg border leading-none",
                        active
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-background",
                      )}
                    >
                      <span className="text-base font-semibold tabular-nums">
                        {day.format(date)}
                      </span>
                      <span className="mt-0.5 text-[10px] uppercase text-muted-foreground">
                        {month.format(date)}
                      </span>
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium">
                        <FileSpreadsheet
                          className="size-3.5 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <span>Periodo del {period}</span>
                        {active && (
                          <Badge status="success" size="sm">
                            Activo
                          </Badge>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {count.format(entry.employeeRows)} registros de Empleados ·{" "}
                        {count.format(entry.groupCount)} grupos
                      </span>
                    </span>
                  </button>
                  <Menu>
                    <MenuTrigger asChild>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        disabled={busy}
                        aria-label={`Acciones del análisis ${label}`}
                        className="relative z-10 shrink-0"
                      >
                        <MoreHorizontal className="size-4" aria-hidden="true" />
                      </Button>
                    </MenuTrigger>
                    <MenuContent align="end">
                      <MenuSub>
                        <MenuSubTrigger>Exportar Excel</MenuSubTrigger>
                        <MenuSubContent className="max-w-[calc(100vw-1rem)]">
                          <BreakdownExportItems onExport={(output) => onExport(entry.id, output)} />
                        </MenuSubContent>
                      </MenuSub>
                      <MenuSeparator />
                      <MenuItem
                        className="text-destructive focus:text-destructive"
                        onSelect={() => requestDeletion({ id: entry.id, label })}
                      >
                        <Trash2 aria-hidden="true" />
                        Eliminar
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </div>
              </li>
            );
          })}
        </HoverList>
      )}
      <Modal
        open={Boolean(target)}
        onOpenChange={(open) => {
          if (!open && !deleting) requestDeletion();
        }}
        title={target === "all" ? "Eliminar historial" : "Eliminar análisis"}
        description={
          target === "all"
            ? "Se eliminarán todos los análisis y descargas guardados en este espacio."
            : `Se eliminarán el análisis ${target?.label ?? ""} y sus descargas guardadas.`
        }
        size="sm"
        footer={
          <>
            <Button
              type="button"
              variant="outline"
              disabled={deleting}
              onClick={() => requestDeletion()}
            >
              Cancelar
            </Button>
            <StatefulButton
              type="button"
              variant="outline"
              state={deleting ? "loading" : deleteError ? "error" : "idle"}
              loadingText="Eliminando…"
              errorText="Reintentar"
              className="text-destructive"
              onClick={confirmDeletion}
            >
              Eliminar
            </StatefulButton>
          </>
        }
      >
        {deleteError && (
          <p role="alert" className="text-sm text-destructive">
            {deleteError}
          </p>
        )}
      </Modal>
    </section>
  );
}
