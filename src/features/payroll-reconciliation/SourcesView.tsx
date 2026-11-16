"use client";
import { useEffect, useRef, useState } from "react";
import { Download, RotateCcw, Trash2, X } from "lucide-react";
import {
  Button,
  FileUpload,
  Modal,
  Table,
  Tooltip,
  type FileUploadItem,
} from "@/components/system";
import { categoryLabel } from "@/lib/payroll-reconciliation/presentation";
import type {
  Category,
  Dossier,
  SourceCheckResult,
  SourceImportResult,
} from "@/lib/payroll-reconciliation/types";
import { sourceLimitError } from "@/lib/payroll-reconciliation/source-plan";
import { Panel } from "./forms";
import { ReconciliationRequestError } from "./request-error";

type QueueItem = FileUploadItem & {
  category?: Category;
  message?: string;
  check?: SourceCheckResult;
  applied?: boolean;
};
type Props = {
  dossier: Dossier;
  busy: boolean;
  api: <T>(path?: string, init?: RequestInit) => Promise<T>;
  onBatch: (operation: (accept: (saved: Dossier) => void) => Promise<void>) => Promise<void>;
  onRemove: (id: string) => void;
};
const templates = [
  {
    name: "Excesos",
    file: "excesos",
    header:
      "registro_id;matricula;periodo_origen;periodo_compensacion;importe_firmado;moneda;motivo;referencia_documental",
  },
  {
    name: "Anticipos",
    file: "anticipos",
    header:
      "solicitud_id;cuota_id;matricula;tipo;periodo_cuota;importe_nomina_firmado;moneda;estado;referencia_documental",
  },
  {
    name: "Excepciones",
    file: "excepciones",
    header:
      "registro_id;control;metrica;matricula;periodo_devengo;vigencia_desde;vigencia_hasta;importe_esperado_firmado;motivo;referencia_documental;confirmada",
  },
];

export function SourcesView({ dossier, busy, api, onBatch, onRemove }: Props) {
  const [items, setItems] = useState<QueueItem[]>([]);
  const [blocked, setBlocked] = useState("");
  const [operation, setOperation] = useState<"check" | "apply" | null>(null);
  const [checkedAgainst, setCheckedAgainst] = useState<string | null>(null);
  const [removeId, setRemoveId] = useState<string | null>(null);
  const mounted = useRef(true),
    running = useRef(false);
  const identity = `${dossier.id}:${dossier.revision}`;
  const fresh = checkedAgainst === identity;
  const locked = busy || operation !== null;
  const conflicts = new Map<Category, string[]>();
  for (const item of items) {
    if (!item.applied && item.check) {
      const names = conflicts.get(item.check.category) ?? [];
      conflicts.set(item.check.category, [...names, item.name]);
    }
  }
  const isConflict = (item: QueueItem) =>
    Boolean(item.check && (conflicts.get(item.check.category)?.length ?? 0) > 1);
  const candidates = items.filter(
    (item) => !item.applied && item.check && item.check.operation !== "skip" && !isConflict(item),
  );
  const categories = new Set(candidates.map((item) => item.category));
  const limitError = fresh
    ? sourceLimitError([
        ...dossier.sources.filter((source) => !categories.has(source.category)),
        ...candidates.flatMap((item) => (item.check ? [item.check] : [])),
      ])
    : "";
  const applied = items.filter((item) => item.applied).length;
  const pending = items.filter((item) => !item.applied && (!item.check || isConflict(item))).length;
  const readyCount = limitError ? 0 : candidates.length;
  const unchanged = items.filter(
    (item) => !item.applied && item.check?.operation === "skip" && !isConflict(item),
  ).length;
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const update = (id: string, patch: Partial<QueueItem>) => {
    if (mounted.current)
      setItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };
  const reset = (item: QueueItem): QueueItem =>
    item.applied
      ? item
      : {
          ...item,
          status: "queued",
          progress: 0,
          error: undefined,
          message: undefined,
          category: undefined,
          check: undefined,
        };
  const changeItems = (next: QueueItem[]) => {
    if (busy || running.current) return;
    setCheckedAgainst(null);
    setItems(next.map(reset));
  };
  const stop = (error: unknown) => {
    if (
      !(error instanceof ReconciliationRequestError) ||
      [401, 403, 409].includes(error.status) ||
      error.status >= 500
    ) {
      setCheckedAgainst(null);
      setBlocked(
        "La operación se ha detenido. Los archivos ya aplicados están guardados; vuelve a cargar el expediente y comprueba los pendientes antes de aplicar.",
      );
      return true;
    }
    return false;
  };
  const check = (onlyId?: string) => {
    if (busy || running.current || blocked) return;
    const working = fresh && onlyId ? items : items.map(reset);
    const toCheck = working.filter(
      (item) => item.file && !item.applied && (!(fresh && onlyId) || item.id === onlyId),
    );
    if (!toCheck.length) return;
    running.current = true;
    setOperation("check");
    setCheckedAgainst(null);
    setItems(working);
    void onBatch(async () => {
      let stopped = false;
      for (const item of toCheck) {
        if (!mounted.current) break;
        if (!item.file) continue;
        update(item.id, {
          status: "uploading",
          progress: 0,
          error: undefined,
          message: "Comprobando…",
        });
        const body = new FormData();
        body.append("file", item.file);
        body.append(
          "metadata",
          JSON.stringify({ id: dossier.id, revision: dossier.revision, auto: true }),
        );
        try {
          const result = await api<SourceCheckResult>("/preview", { method: "POST", body });
          if (!mounted.current) break;
          update(item.id, {
            status: "success",
            progress: 100,
            category: result.category,
            check: result,
            message: `${result.operation === "skip" ? "Ya incorporado · no se harán cambios" : result.operation === "replace" ? `Sustitución · sustituirá: ${result.replacedFiles.join(", ")}` : "Nuevo · se añadirá"} · ${result.records} ${result.records === 1 ? "registro" : "registros"}`,
          });
        } catch (error) {
          if (!mounted.current) break;
          const message =
            error instanceof Error ? error.message : "No se pudo comprobar el archivo.";
          update(item.id, {
            status: "error",
            error: message,
            message,
            category: error instanceof ReconciliationRequestError ? error.category : undefined,
            check: undefined,
          });
          if (stop(error)) {
            stopped = true;
            break;
          }
        }
      }
      if (mounted.current && !stopped) setCheckedAgainst(identity);
    }).finally(() => {
      running.current = false;
      if (mounted.current) setOperation(null);
    });
  };
  const apply = () => {
    if (busy || running.current || blocked || !fresh || limitError || !candidates.length) return;
    running.current = true;
    setOperation("apply");
    // Replacements free file slots before additions. Within replacements, shrinking
    // cell counts go first so every intermediate write also respects both limits.
    const cellDelta = (item: QueueItem) =>
      (item.check?.cellCount ?? 0) -
      dossier.sources
        .filter((source) => source.category === item.category)
        .reduce((sum, source) => sum + source.cellCount, 0);
    const toApply = [...candidates].sort(
      (a, b) =>
        Number(b.check?.operation === "replace") - Number(a.check?.operation === "replace") ||
        cellDelta(a) - cellDelta(b),
    );
    void onBatch(async (accept) => {
      let current = dossier;
      let stopped = false;
      for (const item of toApply) {
        if (!mounted.current) break;
        if (!item.file) continue;
        update(item.id, { status: "uploading", message: "Aplicando…" });
        const body = new FormData();
        body.append("file", item.file);
        body.append(
          "metadata",
          JSON.stringify({ id: current.id, revision: current.revision, auto: true }),
        );
        try {
          const result = await api<SourceImportResult>("/analyze", { method: "POST", body });
          if (!mounted.current) break;
          current = result.dossier;
          accept(current);
          if (result.status === "sustituido") {
            setItems((previous) =>
              previous.map((known) =>
                known.applied && known.category === result.category
                  ? { ...known, message: `Sustituido por ${result.filename}` }
                  : known,
              ),
            );
          }
          update(item.id, {
            status: "success",
            applied: true,
            check: undefined,
            message: `${result.status === "sustituido" ? `Sustituido · reemplaza: ${result.replacedFiles.join(", ")}` : result.status === "ya_incorporado" ? "Ya incorporado" : "Incorporado"} · ${result.records} ${result.records === 1 ? "registro" : "registros"}`,
          });
        } catch (error) {
          if (!mounted.current) break;
          const message = error instanceof Error ? error.message : "No se pudo aplicar el archivo.";
          update(item.id, { status: "error", check: undefined, error: message, message });
          if (stop(error)) {
            stopped = true;
            break;
          }
        }
      }
      if (mounted.current && !stopped) setCheckedAgainst(`${current.id}:${current.revision}`);
    }).finally(() => {
      running.current = false;
      if (mounted.current) setOperation(null);
    });
  };
  return (
    <div className="space-y-5 pt-4">
      <Panel title="Añadir archivos">
        <FileUpload
          value={items}
          onValueChange={(next) =>
            changeItems(
              next.map((item) => ({ ...items.find((known) => known.id === item.id), ...item })),
            )
          }
          accept=".xls,.xlsx,.csv"
          multiple
          maxVisibleItems={0}
          disabled={locked}
          title="Arrastra tus archivos o selecciónalos"
          browseLabel="Seleccionar archivos"
          description="Excel o CSV · Hasta 16 MiB por archivo"
          classNames={{
            queue: "hidden",
            dropzone: "flex-col text-center sm:flex-row sm:text-left",
          }}
        />
        {items.length > 0 && (
          <Table
            data={items}
            getRowId={(row) => row.id}
            autoHeight={items.length <= 7}
            variableRowHeight
            height={400}
            scrollAreaLabel="Archivos para comprobar"
            columns={[
              { key: "name", header: "Archivo", width: "320px" },
              {
                key: "category",
                header: "Categoría",
                width: "200px",
                cell: (row) => (row.category ? categoryLabel(row.category) : "—"),
              },
              {
                key: "status",
                header: "Resultado",
                width: "400px",
                cell: (row) => (
                  <span
                    className={
                      row.status === "error" || (fresh && isConflict(row))
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }
                  >
                    {row.applied || row.status === "error" || operation
                      ? (row.message ?? "Pendiente de comprobar")
                      : !fresh
                        ? "Pendiente de comprobar"
                        : isConflict(row)
                          ? `Conflicto de categoría · ${row.category ? conflicts.get(row.category)?.join(", ") : ""}. Quita los sobrantes y vuelve a comprobar.`
                          : (row.message ?? "Pendiente de comprobar")}
                    {fresh && row.check && !isConflict(row) && row.check.diagnostics.length > 0 && (
                      <span className="block">{row.check.diagnostics.join(" · ")}</span>
                    )}
                  </span>
                ),
              },
              {
                key: "actions",
                header: "Acciones",
                width: "110px",
                cell: (row) => (
                  <div className="flex gap-1">
                    {row.status === "error" && (
                      <Tooltip content="Reintentar">
                        <Button
                          size="icon"
                          variant="ghost"
                          disabled={locked || Boolean(blocked)}
                          aria-label={`Reintentar ${row.name}`}
                          onClick={() => check(row.id)}
                        >
                          <RotateCcw className="size-4" />
                        </Button>
                      </Tooltip>
                    )}
                    <Tooltip content="Quitar de la lista">
                      <Button
                        size="icon"
                        variant="ghost"
                        disabled={locked}
                        aria-label={`Quitar de la lista ${row.name}`}
                        onClick={() => changeItems(items.filter((item) => item.id !== row.id))}
                      >
                        <X className="size-4" />
                      </Button>
                    </Tooltip>
                  </div>
                ),
              },
            ]}
          />
        )}
        {blocked && (
          <div role="alert" className="space-y-2 text-sm text-destructive">
            <p>{blocked}</p>
            <Button
              variant="outline"
              disabled={locked}
              onClick={() =>
                void onBatch(async (accept) => {
                  const saved = await api<Dossier>(`?id=${encodeURIComponent(dossier.id)}`);
                  if (mounted.current) {
                    accept(saved);
                    setBlocked("");
                    setCheckedAgainst(null);
                    setItems((previous) => previous.map(reset));
                  }
                })
              }
            >
              Volver a cargar expediente
            </Button>
          </div>
        )}
        {limitError && (
          <p role="alert" className="text-sm text-destructive">
            {limitError}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            disabled={
              locked || Boolean(blocked) || !items.some((item) => item.file && !item.applied)
            }
            onClick={() => check()}
          >
            {operation === "check" ? "Comprobando…" : "Comprobar"}
          </Button>
          <Button
            disabled={
              locked || Boolean(blocked) || !fresh || Boolean(limitError) || !candidates.length
            }
            onClick={apply}
          >
            {operation === "apply" ? "Aplicando…" : "Aplicar"}
          </Button>
        </div>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
          {applied > 0 &&
            `${applied} ${applied === 1 ? "archivo aplicado" : "archivos aplicados"}. `}
          {fresh
            ? `${readyCount} ${readyCount === 1 ? "archivo" : "archivos"} para aplicar · ${pending} ${pending === 1 ? "pendiente" : "pendientes"} por errores o conflictos. ${unchanged} ya ${unchanged === 1 ? "incorporado" : "incorporados"} sin cambios.`
            : items.some((item) => !item.applied) &&
              "Comprueba los archivos antes de aplicar. Si cambias la selección o el expediente, debes comprobar de nuevo."}
        </p>
      </Panel>
      <Panel title="Fuentes incorporadas">
        <Table
          data={dossier.sources}
          getRowId={(row) => row.id}
          autoHeight={dossier.sources.length <= 7}
          variableRowHeight
          scrollAreaLabel="Fuentes del expediente"
          columns={[
            {
              key: "filename",
              header: "Archivo",
              width: "320px",
              cell: (row) => row.filename ?? categoryLabel(row.category),
            },
            {
              key: "category",
              header: "Categoría",
              width: "200px",
              cell: (row) => categoryLabel(row.category),
            },
            { key: "period", header: "Mes de nómina", width: "150px" },
            {
              key: "accrualPeriod",
              header: "Devengo",
              width: "150px",
              cell: (row) => row.accrualPeriod ?? "—",
            },
            { key: "facts", header: "Registros", width: "110px", cell: (row) => row.facts.length },
            {
              key: "actions",
              header: "Acciones",
              width: "80px",
              cell: (row) => (
                <Tooltip content="Retirar fuente">
                  <Button
                    size="icon"
                    variant="ghost"
                    disabled={locked}
                    aria-label={`Retirar fuente ${row.filename ?? categoryLabel(row.category)}`}
                    onClick={() => setRemoveId(row.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </Tooltip>
              ),
            },
          ]}
          emptyState="Sin archivos incorporados"
        />
      </Panel>
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>Plantillas:</span>
        {templates.map((template) => (
          <Button
            key={template.file}
            size="sm"
            variant="ghost"
            onClick={() => {
              const url = URL.createObjectURL(
                new Blob(["\uFEFF", template.header, "\r\n"], { type: "text/csv;charset=utf-8" }),
              );
              const anchor = document.createElement("a");
              anchor.href = url;
              anchor.download = `${template.file}_plantilla.csv`;
              anchor.click();
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="size-3" />
            {template.name}
          </Button>
        ))}
      </div>
      <Modal
        open={Boolean(removeId)}
        onOpenChange={(open) => {
          if (!open) setRemoveId(null);
        }}
        title="Retirar fuente"
        description="Se recalcularán los controles y las revisiones afectadas quedarán pendientes."
        footer={
          <Button
            disabled={locked}
            onClick={() => {
              if (removeId) onRemove(removeId);
              setRemoveId(null);
            }}
          >
            Retirar fuente
          </Button>
        }
      />
    </div>
  );
}
