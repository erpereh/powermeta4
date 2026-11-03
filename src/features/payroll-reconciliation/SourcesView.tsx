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
import type { Category, Dossier, SourceImportResult } from "@/lib/payroll-reconciliation/types";
import { Panel } from "./forms";
import { ReconciliationRequestError } from "./request-error";

type QueueItem = FileUploadItem & { category?: Category; message?: string };
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
  const [removeId, setRemoveId] = useState<string | null>(null);
  const mounted = useRef(true),
    running = useRef(false);
  const processed = items.filter((item) => item.status === "success").length;
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
  const check = (onlyId?: string) => {
    if (busy || running.current || blocked) return;
    const pending = items.filter(
      (item) => item.file && item.status !== "success" && (!onlyId || item.id === onlyId),
    );
    if (!pending.length) return;
    running.current = true;
    void onBatch(async (accept) => {
      let current = dossier;
      for (const item of pending) {
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
          JSON.stringify({ id: current.id, revision: current.revision, auto: true }),
        );
        try {
          const result = await api<SourceImportResult>("/analyze", { method: "POST", body });
          if (!mounted.current) break;
          current = result.dossier;
          accept(current);
          if (result.status === "sustituido") {
            setItems((previous) =>
              previous.map((previousItem) =>
                previousItem.id !== item.id &&
                previousItem.category === result.category &&
                previousItem.status === "success"
                  ? { ...previousItem, message: `Sustituido por ${result.filename}` }
                  : previousItem,
              ),
            );
          }
          update(item.id, {
            status: "success",
            progress: 100,
            category: result.category,
            message: `${result.status === "ya_incorporado" ? "Ya incorporado" : result.status === "sustituido" ? "Sustituido" : "Incorporado"} · ${result.records} ${result.records === 1 ? "registro" : "registros"}${result.replacedFiles.length ? ` · Reemplaza: ${result.replacedFiles.join(", ")}` : ""}`,
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
          });
          if (
            !(error instanceof ReconciliationRequestError) ||
            [401, 403, 409].includes(error.status) ||
            error.status >= 500
          ) {
            setBlocked(
              "La carga se ha detenido. Los archivos incorporados están guardados; vuelve a cargar el expediente para continuar.",
            );
            break;
          }
        }
      }
    }).finally(() => {
      running.current = false;
    });
  };
  return (
    <div className="space-y-5 pt-4">
      <Panel title="Añadir archivos">
        <FileUpload
          value={items}
          onValueChange={(next) =>
            setItems((previous) =>
              next.map((item) => ({ ...previous.find((known) => known.id === item.id), ...item })),
            )
          }
          accept=".xls,.xlsx,.csv"
          multiple
          maxVisibleItems={0}
          disabled={busy}
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
                      row.status === "error" ? "text-destructive" : "text-muted-foreground"
                    }
                  >
                    {row.message ?? "Pendiente de comprobar"}
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
                          disabled={busy || Boolean(blocked)}
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
                        disabled={busy}
                        aria-label={`Quitar de la lista ${row.name}`}
                        onClick={() =>
                          setItems((previous) => previous.filter((item) => item.id !== row.id))
                        }
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
              disabled={busy}
              onClick={() =>
                void onBatch(async (accept) => {
                  const saved = await api<Dossier>(`?id=${encodeURIComponent(dossier.id)}`);
                  if (mounted.current) {
                    accept(saved);
                    setBlocked("");
                  }
                })
              }
            >
              Volver a cargar expediente
            </Button>
          </div>
        )}
        <Button
          disabled={busy || Boolean(blocked) || !items.some((item) => item.status !== "success")}
          onClick={() => check()}
        >
          {busy ? "Comprobando…" : "Comprobar"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
          {processed > 0 &&
            `${processed} ${processed === 1 ? "archivo procesado" : "archivos procesados"}.`}
          {items.some((item) => item.status === "error") && " Revisa los archivos con error."}
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
                    disabled={busy}
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
            disabled={busy}
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
