"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FileSpreadsheet, Plus, Download, RefreshCw } from "lucide-react";
import {
  Button,
  Checkbox,
  FileUpload,
  Input,
  Modal,
  PageHeader,
  Table,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type FileUploadItem,
} from "@/components/system";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import { CATEGORIES, METRICS } from "@/lib/payroll-reconciliation/catalogue";
import type {
  Annotation,
  Category,
  Dossier,
  DossierSummary,
  Finding,
  Parameters,
} from "@/lib/payroll-reconciliation/types";
import type { PayrollReportRun } from "@/types/payroll-report";
import { Choice, Panel, ParametersForm, SelectionForm } from "./forms";

const ROOT = "/api/payroll/reconciliation";
function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob),
    anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}
const templates: Partial<Record<Category, string>> = {
  excesos:
    "registro_id;matricula;periodo_origen;periodo_compensacion;importe_firmado;moneda;motivo;referencia_documental",
  anticipos:
    "solicitud_id;cuota_id;matricula;tipo;periodo_cuota;importe_nomina_firmado;moneda;estado;referencia_documental",
  excepciones:
    "registro_id;control;metrica;matricula;periodo_devengo;vigencia_desde;vigencia_hasta;importe_esperado_firmado;motivo;referencia_documental;confirmada",
};

export function ReconciliationApp({ demo }: { demo: boolean }) {
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const sessionKey = useWorkspaceStore(
    (state) =>
      `${state.auth?.mode ?? "none"}:${state.auth?.username ?? ""}:${state.auth?.societyCode ?? ""}`,
  );
  return (
    <ReconciliationFrame
      key={`${companyId ?? "none"}:${sessionKey}`}
      companyId={companyId}
      demo={demo}
    />
  );
}
function ReconciliationFrame({ companyId, demo }: { companyId: string | null; demo: boolean }) {
  const [list, setList] = useState<DossierSummary[]>([]),
    [runs, setRuns] = useState<PayrollReportRun[]>([]);
  const [dossier, setDossier] = useState<Dossier | null>(null),
    [view, setView] = useState("resumen");
  const [error, setError] = useState(""),
    [catalogError, setCatalogError] = useState("");
  const [catalogLoading, setCatalogLoading] = useState(true);
  const catalogRequest = useRef(0);
  const [busy, setBusy] = useState(false),
    [newOpen, setNewOpen] = useState(false),
    [refreshOpen, setRefreshOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<DossierSummary | null>(null);
  const [selected, setSelected] = useState<Finding | null>(null),
    [reviewState, setReviewState] = useState<Annotation["state"]>("Pendiente"),
    [comment, setComment] = useState("");
  const [search, setSearch] = useState(""),
    [status, setStatus] = useState("all"),
    [control, setControl] = useState("all");
  const [dataMode, setDataMode] = useState("actual");
  const mounted = useRef(true);
  const api = useCallback(
    async <T,>(path = "", init?: RequestInit): Promise<T> => {
      const headers = new Headers(init?.headers);
      if (companyId) headers.set("x-powermeta4-company", companyId);
      if (typeof init?.body === "string") headers.set("content-type", "application/json");
      const response = await fetch(`${ROOT}${path}`, { ...init, headers, cache: "no-store" });
      const body = (await response.json()) as { ok?: boolean; message?: string; data: T };
      if (!response.ok || !body.ok)
        throw new Error(body.message ?? "No se ha podido completar la operación.");
      return body.data;
    },
    [companyId],
  );
  const loadList = useCallback(async () => {
    const rows = await api<DossierSummary[]>();
    if (mounted.current) setList(rows);
  }, [api]);
  const loadCatalog = useCallback(async () => {
    const requestId = ++catalogRequest.current;
    setCatalogLoading(true);
    setCatalogError("");
    try {
      const rows = await api<PayrollReportRun[]>("?catalog=1");
      if (mounted.current && requestId === catalogRequest.current) setRuns(rows);
    } catch {
      if (mounted.current && requestId === catalogRequest.current)
        setCatalogError(
          "No se ha podido leer el catálogo de PeopleNet. Reintenta la conexión para crear o actualizar las nóminas; los expedientes guardados se conservan.",
        );
    } finally {
      if (mounted.current && requestId === catalogRequest.current) setCatalogLoading(false);
    }
  }, [api]);
  useEffect(() => {
    mounted.current = true;
    void loadList().catch((reason: unknown) => {
      if (mounted.current)
        setError(reason instanceof Error ? reason.message : "No se pudo cargar el historial.");
    });
    void loadCatalog();
    return () => {
      mounted.current = false;
    };
  }, [loadCatalog, loadList]);
  const perform = async (operation: () => Promise<void>) => {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await operation();
    } catch (reason) {
      if (mounted.current)
        setError(reason instanceof Error ? reason.message : "No se pudo completar la operación.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  };
  const accept = async (saved: Dossier) => {
    if (!mounted.current) return;
    setDossier(saved);
    await loadList();
  };
  const mutate = (patch: Record<string, unknown>) => {
    if (!dossier) return Promise.resolve();
    return perform(async () => {
      await accept(
        await api<Dossier>("", {
          method: "PATCH",
          body: JSON.stringify({ id: dossier.id, revision: dossier.revision, ...patch }),
        }),
      );
    });
  };
  const open = (id: string) =>
    void perform(async () => {
      const record = await api<Dossier>(`?id=${encodeURIComponent(id)}`);
      if (mounted.current) {
        setDossier(record);
        setView("resumen");
        setSearch("");
        setStatus("all");
        setControl("all");
      }
    });
  const findings = useMemo(
    () =>
      dossier?.result.findings.filter(
        (finding) =>
          (control === "all" || finding.control === control) &&
          (status === "all" || finding.status === status) &&
          `${finding.employeeId} ${finding.name} ${finding.reason}`
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
      ) ?? [],
    [dossier, search, status, control],
  );
  const showFinding = (finding: Finding) => {
    const annotation = dossier?.annotations.find(
      (item) => item.findingId === finding.id && !item.invalidated,
    );
    setSelected(finding);
    setReviewState(annotation?.state ?? "Pendiente");
    setComment(annotation?.comment ?? "");
  };
  const exportCurrent = () =>
    void perform(async () => {
      if (!dossier) return;
      const response = await fetch(`${ROOT}/export`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(companyId ? { "x-powermeta4-company": companyId } : {}),
        },
        body: JSON.stringify({ id: dossier.id, revision: dossier.revision }),
      });
      if (!response.ok) {
        const body = (await response.json()) as { message?: string };
        throw new Error(body.message ?? "No se pudo exportar.");
      }
      const blob = await response.blob();
      if (mounted.current)
        download(blob, `Cuadre_nomina_${dossier.period}_r${dossier.revision}.xlsx`);
    });
  return (
    <main className="flex min-h-svh min-w-0 flex-col">
      <PageHeader
        title="Cuadre de nómina"
        icon={FileSpreadsheet}
        tone="green"
        description="Contrasta nóminas y fuentes externas. Guarda el avance y complétalo cuando lleguen nuevos archivos."
        actions={
          <>
            <Button size="sm" variant="outline" onClick={() => setNewOpen(true)} disabled={busy}>
              <Plus className="size-4" />
              <span className="hidden sm:inline">Nuevo</span>
              <span className="sr-only sm:hidden">Nuevo expediente</span>
            </Button>
            {dossier && (
              <Button
                size="sm"
                variant="outline"
                onClick={exportCurrent}
                disabled={busy}
                aria-label="Exportar libro de cuadres"
              >
                <Download className="size-4" />
                <span className="hidden sm:inline">Excel</span>
              </Button>
            )}
          </>
        }
      />
      <div className="mx-auto w-full min-w-0 max-w-7xl space-y-5 p-4 sm:p-6" aria-busy={busy}>
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-destructive p-3 text-sm text-destructive"
          >
            {error}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (dossier) open(dossier.id);
                else void perform(loadList);
              }}
            >
              Volver a cargar
            </Button>
          </div>
        )}
        {catalogError && (
          <p role="status" className="rounded-lg bg-muted p-3 text-sm">
            {catalogError}
            <Button
              variant="ghost"
              size="sm"
              disabled={busy || catalogLoading}
              onClick={() => void loadCatalog()}
            >
              Reintentar catálogo
            </Button>
          </p>
        )}
        {demo && (
          <p className="rounded-lg bg-muted p-3 text-sm">
            Modo de desarrollo: las ejecuciones de muestra son ficticias. No hay conexión con
            PeopleNet.
          </p>
        )}
        {!dossier ? (
          <Panel title="Expedientes guardados">
            <p className="text-sm text-muted-foreground">
              Empieza con la nómina disponible y añade los archivos de contraste después. El avance
              se guarda en esta instalación.
            </p>
            {!list.length && (
              <Button onClick={() => setNewOpen(true)} disabled={busy}>
                Crear primer expediente
              </Button>
            )}
            <Table
              data={list}
              getRowId={(row) => row.id}
              columns={[
                { key: "title", header: "Expediente" },
                { key: "period", header: "Mes" },
                {
                  key: "updatedAt",
                  header: "Actualizado",
                  cell: (row) => new Date(row.updatedAt).toLocaleString("es-ES"),
                },
                {
                  key: "actions",
                  header: "Acciones",
                  cell: (row) => (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => open(row.id)}
                        disabled={busy}
                      >
                        Abrir
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setDeleteTarget(row)}
                        disabled={busy}
                      >
                        Eliminar
                      </Button>
                    </div>
                  ),
                },
              ]}
              emptyState="Sin expedientes guardados"
              scrollAreaLabel="Expedientes de cuadre"
            />
          </Panel>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-xl font-semibold">{dossier.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {dossier.period} · revisión {dossier.revision} ·{" "}
                  {dossier.demo ? "Muestra ficticia" : "Guardado local"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" onClick={() => setDossier(null)}>
                  Expedientes
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={busy}
                  onClick={() => setRefreshOpen(true)}
                >
                  <RefreshCw className="size-4" />
                  Actualizar desde PeopleNet
                </Button>
              </div>
            </div>
            <Tabs value={view} onValueChange={setView} variant="underline">
              <TabsList>
                {[
                  ["resumen", "Resumen"],
                  ["fuentes", "Fuentes"],
                  ["controles", "Controles"],
                  ["datos", "Datos"],
                  ["revision", "Revisión"],
                ].map(([id, name]) => (
                  <TabsTrigger value={id} key={id}>
                    {name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="resumen">
                <div className="space-y-5 pt-4">
                  <Panel title="Estado del cuadre">
                    <p className="text-sm">
                      {
                        dossier.result.findings.filter(
                          (finding) => finding.status === "Con diferencia",
                        ).length
                      }{" "}
                      diferencias y{" "}
                      {
                        dossier.result.findings.filter((finding) =>
                          ["Falta fuente", "No comparable"].includes(finding.status),
                        ).length
                      }{" "}
                      filas pendientes. Una coincidencia numérica no acredita el cierre de nómina.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {dossier.result.controls.map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          className="rounded-lg border bg-background p-3 text-left focus-visible:outline-2 focus-visible:outline-ring"
                          onClick={() => {
                            setControl(item.id);
                            setView("controles");
                          }}
                        >
                          <span className="block text-sm font-medium">
                            {item.id} · {item.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.matches} coinciden · {item.differences} diferencias ·{" "}
                            {item.pending} pendientes
                            {!item.total ? " · sin identidad utilizable" : ""}
                          </span>
                        </button>
                      ))}
                    </div>
                    {dossier.result.diagnostics.length > 0 && (
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {dossier.result.diagnostics.map((message, index) => (
                          <li key={index}>{message}</li>
                        ))}
                      </ul>
                    )}
                  </Panel>
                  <Panel title="Parámetros y reglas del periodo">
                    <ParametersForm
                      key={`${dossier.id}:${dossier.revision}`}
                      parameters={dossier.parameters}
                      busy={busy}
                      onSave={(parameters: Parameters) =>
                        void mutate({ action: "parameters", parameters })
                      }
                    />
                  </Panel>
                </div>
              </TabsContent>
              <TabsContent value="fuentes">
                <SourcesView
                  key={dossier.id}
                  dossier={dossier}
                  busy={busy}
                  api={api}
                  onSave={async (operation) => perform(async () => accept(await operation()))}
                  onRemove={(sourceId) => void mutate({ action: "removeSource", sourceId })}
                />
              </TabsContent>
              <TabsContent value="controles">
                <div className="space-y-4 pt-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <Input label="Buscar persona o motivo" value={search} onChange={setSearch} />
                    <Choice
                      label="Control"
                      value={control}
                      onChange={setControl}
                      items={[
                        { id: "all", name: "Todos" },
                        ...dossier.result.controls.map((item) => ({
                          id: item.id,
                          name: `${item.id} ${item.name}`,
                        })),
                      ]}
                    />
                    <Choice
                      label="Estado calculado"
                      value={status}
                      onChange={setStatus}
                      items={[
                        { id: "all", name: "Todos" },
                        ...["Coincide", "Con diferencia", "Falta fuente", "No comparable"].map(
                          (name) => ({ id: name, name }),
                        ),
                      ]}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {findings.length} filas. Abre una fila para ver operandos, evidencias y
                    registrar la revisión.
                  </p>
                  <Table
                    data={findings}
                    getRowId={(row) => row.id}
                    height={520}
                    scrollAreaLabel="Resultados del cuadre"
                    onRowActivate={showFinding}
                    getRowAriaLabel={(row) =>
                      `Revisar ${row.employeeId}, ${row.metric}: ${row.status}`
                    }
                    columns={[
                      { key: "employeeId", header: "Matrícula", width: "120px" },
                      { key: "name", header: "Persona", width: "200px" },
                      { key: "control", header: "Control", width: "90px" },
                      {
                        key: "metric",
                        header: "Concepto",
                        width: "230px",
                        cell: (row) =>
                          METRICS.find((metric) => metric.id === row.metric)?.header ?? row.metric,
                      },
                      {
                        key: "actual",
                        header: "Actual",
                        width: "130px",
                        cell: (row) => row.actual ?? "Pendiente",
                      },
                      {
                        key: "expected",
                        header: "Anterior / esperado",
                        width: "150px",
                        cell: (row) => row.expected ?? "Pendiente",
                      },
                      {
                        key: "delta",
                        header: "Diferencia",
                        width: "130px",
                        cell: (row) => row.delta ?? "—",
                      },
                      { key: "status", header: "Resultado", width: "160px" },
                    ]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="datos">
                <div className="space-y-4 pt-4">
                  <Choice
                    label="Instantánea"
                    value={dataMode}
                    onChange={setDataMode}
                    items={[
                      { id: "actual", name: "Actual" },
                      { id: "anterior", name: "Anterior" },
                    ]}
                  />
                  <SnapshotTable dossier={dossier} previous={dataMode === "anterior"} />
                </div>
              </TabsContent>
              <TabsContent value="revision">
                <div className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Las decisiones conservan el resultado calculado. Una evidencia modificada
                    invalida su revisión.
                  </p>
                  <Table
                    data={dossier.annotations}
                    getRowId={(row) => row.findingId}
                    scrollAreaLabel="Revisiones guardadas"
                    columns={[
                      {
                        key: "findingId",
                        header: "Hallazgo",
                        cell: (row) =>
                          dossier.result.findings.find((finding) => finding.id === row.findingId)
                            ?.employeeId ?? "Hallazgo anterior",
                      },
                      { key: "state", header: "Decisión" },
                      { key: "comment", header: "Comentario" },
                      { key: "at", header: "Fecha" },
                      {
                        key: "invalidated",
                        header: "Vigencia",
                        cell: (row) =>
                          row.invalidated ? "Invalidada: revisar de nuevo" : "Vigente",
                      },
                    ]}
                    emptyState="Sin revisiones guardadas. Abre un resultado desde Controles."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
      <Modal open={newOpen} onOpenChange={setNewOpen} title="Nuevo expediente" size="lg">
        {error && (
          <p role="alert" className="mb-3 text-sm text-destructive">
            {error}
          </p>
        )}
        <SelectionForm
          runs={runs}
          demo={demo}
          busy={busy}
          catalogLoading={catalogLoading}
          catalogError={catalogError}
          onRetryCatalog={() => void loadCatalog()}
          onSubmit={(input) =>
            void perform(async () => {
              await accept(await api<Dossier>("", { method: "POST", body: JSON.stringify(input) }));
              if (mounted.current) {
                setNewOpen(false);
                setView("resumen");
              }
            })
          }
        />
      </Modal>
      <Modal
        open={refreshOpen}
        onOpenChange={setRefreshOpen}
        title="Actualizar desde PeopleNet"
        description="Las nuevas instantáneas sustituirán a las guardadas. Se recalcularán los controles y las revisiones afectadas quedarán invalidadas."
        size="lg"
      >
        {error && (
          <p role="alert" className="mb-3 text-sm text-destructive">
            {error}
          </p>
        )}
        {dossier && (
          <SelectionForm
            key={dossier.revision}
            runs={runs}
            demo={demo}
            busy={busy}
            catalogLoading={catalogLoading}
            catalogError={catalogError}
            onRetryCatalog={() => void loadCatalog()}
            initial={{
              title: dossier.title,
              period: dossier.period,
              current: dossier.current.run,
              previous: dossier.previous?.run,
            }}
            onSubmit={(input) =>
              void perform(async () => {
                await accept(
                  await api<Dossier>("", {
                    method: "PATCH",
                    body: JSON.stringify({
                      id: dossier.id,
                      revision: dossier.revision,
                      action: "refresh",
                      currentKey: input.currentKey,
                      previousKey: input.previousKey,
                      populationConfirmed: true,
                    }),
                  }),
                );
                if (mounted.current) setRefreshOpen(false);
              })
            }
          />
        )}
      </Modal>
      <Modal
        open={Boolean(deleteTarget)}
        onOpenChange={(value) => {
          if (!value) setDeleteTarget(null);
        }}
        title="Eliminar expediente"
        description="Se borrará el expediente de esta instalación. Las copias de seguridad anteriores conservarán sus datos."
        footer={
          <Button
            disabled={busy}
            onClick={() =>
              void perform(async () => {
                if (!deleteTarget) return;
                await api("", {
                  method: "DELETE",
                  body: JSON.stringify({ id: deleteTarget.id, revision: deleteTarget.revision }),
                });
                if (mounted.current) setDeleteTarget(null);
                await loadList();
              })
            }
          >
            Eliminar expediente
          </Button>
        }
      >
        <p>{deleteTarget?.title}</p>
      </Modal>
      <Modal
        open={Boolean(selected)}
        onOpenChange={(value) => {
          if (!value) setSelected(null);
        }}
        title="Revisar resultado"
        size="lg"
      >
        {error && (
          <p role="alert" className="mb-3 text-sm text-destructive">
            {error}
          </p>
        )}
        {selected && (
          <div className="space-y-4">
            <p className="font-medium">
              {selected.employeeId} · {selected.name} ·{" "}
              {METRICS.find((metric) => metric.id === selected.metric)?.header}
            </p>
            <p>
              {selected.status} · actual {selected.actual ?? "pendiente"} · esperado{" "}
              {selected.expected ?? "pendiente"} · diferencia {selected.delta ?? "pendiente"}{" "}
              {selected.unit}
            </p>
            <p className="text-sm">
              {selected.reason || "Motivo desconocido — pendiente de revisión."}
            </p>
            <ul className="max-h-40 list-disc overflow-auto break-all pl-5 text-xs text-muted-foreground">
              {selected.evidence.map((evidence, index) => (
                <li key={index}>{evidence}</li>
              ))}
            </ul>
            <Choice
              label="Decisión de revisión"
              value={reviewState}
              onChange={(value) => setReviewState(value as Annotation["state"])}
              items={["Pendiente", "Diferencia justificada", "Requiere corrección manual"].map(
                (name) => ({ id: name, name }),
              )}
            />
            <Input label="Comentario" value={comment} onChange={setComment} maxLength={2000} />
            <Button
              disabled={busy || (reviewState !== "Pendiente" && !comment.trim())}
              onClick={() =>
                void perform(async () => {
                  if (!dossier) return;
                  await accept(
                    await api<Dossier>("", {
                      method: "PATCH",
                      body: JSON.stringify({
                        id: dossier.id,
                        revision: dossier.revision,
                        action: "review",
                        findingId: selected.id,
                        fingerprint: selected.fingerprint,
                        state: reviewState,
                        comment,
                      }),
                    }),
                  );
                  if (mounted.current) setSelected(null);
                })
              }
            >
              Guardar revisión
            </Button>
          </div>
        )}
      </Modal>
    </main>
  );
}

function SnapshotTable({ dossier, previous }: { dossier: Dossier; previous: boolean }) {
  const [search, setSearch] = useState("");
  const data = previous ? dossier.previous : dossier.current;
  if (!data)
    return <p>Sin ejecución anterior. Puedes elegirla desde Actualizar desde PeopleNet.</p>;
  const rows = data.rows
    .map((cells, index) => ({ id: String(index), cells }))
    .filter((row) =>
      row.cells.some((cell) => cell.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
    );
  return (
    <div className="min-w-0 space-y-3">
      <p className="text-sm text-muted-foreground">
        Informe {data.run.reportId} · paga {data.run.accruedOn} · capturado{" "}
        {new Date(data.capturedAt).toLocaleString("es-ES")} · {data.rows.length} filas. Se conservan
        las columnas necesarias para el cuadre; NIF y cuentas bancarias se excluyen.
      </p>
      <Input label="Buscar en los datos" value={search} onChange={setSearch} />
      <Table
        data={rows}
        getRowId={(row) => row.id}
        height={520}
        scrollAreaLabel="Datos de la instantánea de nómina"
        columns={data.headers.map((header, index) => ({
          key: String(index),
          header,
          width: "180px",
          cell: (row: { cells: string[] }) => row.cells[index],
        }))}
      />
    </div>
  );
}

function SourcesView({
  dossier,
  busy,
  api,
  onSave,
  onRemove,
}: {
  dossier: Dossier;
  busy: boolean;
  api: <T>(path?: string, init?: RequestInit) => Promise<T>;
  onSave: (operation: () => Promise<Dossier>) => Promise<void>;
  onRemove: (sourceId: string) => void;
}) {
  const [category, setCategory] = useState<Category>("mercer"),
    [items, setItems] = useState<FileUploadItem[]>([]);
  const [complete, setComplete] = useState(false),
    [confirmed, setConfirmed] = useState(false),
    [replaceId, setReplaceId] = useState("none");
  const [accrualPeriod, setAccrualPeriod] = useState(dossier.period);
  const [windowStart, setWindowStart] = useState("");
  const [windowEnd, setWindowEnd] = useState("");
  const [preview, setPreview] = useState<{
      hash: string;
      profile: string;
      count: number;
      diagnostics: string[];
      references: string[];
    } | null>(null),
    [error, setError] = useState(""),
    [checking, setChecking] = useState(false),
    [removeId, setRemoveId] = useState<string | null>(null);
  const form = (metadata: unknown) => {
    const body = new FormData();
    const file = items[0]?.file;
    if (!file) throw new Error("Selecciona un archivo.");
    body.append("file", file);
    body.append("metadata", JSON.stringify(metadata));
    return body;
  };
  const clear = () => {
    setPreview(null);
    setConfirmed(false);
    setError("");
  };
  return (
    <div className="space-y-5 pt-4">
      <Panel title="Añadir o sustituir una fuente">
        <div className="grid gap-4 sm:grid-cols-2">
          <Choice
            label="Categoría"
            value={category}
            onChange={(value) => {
              setCategory(value as Category);
              setReplaceId("none");
              clear();
            }}
            items={CATEGORIES}
          />
          <Choice
            label="Sustitución"
            value={replaceId}
            onChange={(value) => {
              setReplaceId(value);
              setConfirmed(false);
            }}
            items={[
              { id: "none", name: "Añadir documento nuevo" },
              ...dossier.sources
                .filter((source) => source.category === category)
                .map((source) => ({
                  id: source.id,
                  name: `Sustituir ${source.profile} · ${source.hash.slice(0, 10)}`,
                })),
            ]}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            label="Mes de devengo de la fuente"
            type="month"
            value={accrualPeriod}
            onChange={(value) => {
              setAccrualPeriod(value);
              clear();
            }}
          />
          {category === "comisiones" && (
            <>
              <Input
                label="Ventana de comisiones: desde"
                type="date"
                value={windowStart}
                onChange={(value) => {
                  setWindowStart(value);
                  clear();
                }}
              />
              <Input
                label="Ventana de comisiones: hasta"
                type="date"
                value={windowEnd}
                onChange={(value) => {
                  setWindowEnd(value);
                  clear();
                }}
              />
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Periodo de nómina: {dossier.period}. Confirma que el devengo del archivo corresponde a
          este pago, aunque sea del mes anterior. Máximo 16 MiB por archivo; veinte fuentes por
          expediente.
        </p>
        <FileUpload
          value={items}
          onValueChange={(value) => {
            setItems(value.map((item) => ({ ...item, status: "queued", progress: 0 })));
            clear();
          }}
          accept=".xls,.xlsx,.csv"
          multiple={false}
          maxFiles={1}
          disabled={busy || checking}
          title="Selecciona el archivo de contraste"
          browseLabel="Seleccionar archivo"
          description="El original no se conserva; se guardarán los datos necesarios para el cuadre."
        />
        <Checkbox
          checked={complete}
          onCheckedChange={(value) => {
            setComplete(value);
            clear();
          }}
          label="Confirmo cobertura completa para esta categoría y periodo (si no, se tratará como parcial)"
        />
        {templates[category] && (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                download(
                  new Blob(["\uFEFF", templates[category]!, "\r\n"], {
                    type: "text/csv;charset=utf-8",
                  }),
                  `${category}_plantilla.csv`,
                )
              }
            >
              Descargar plantilla CSV
            </Button>
            {category === "excepciones" && (
              <p className="text-xs text-muted-foreground">
                Métricas admitidas:{" "}
                {METRICS.filter((metric) => !metric.monthly)
                  .map((metric) => metric.id)
                  .join(", ")}
                . confirmada debe ser SI. Las excepciones no se sustituyen mediante comentarios de
                revisión.
              </p>
            )}
          </div>
        )}
        <Button
          variant="outline"
          disabled={busy || checking || !items[0]?.file}
          onClick={() => {
            setChecking(true);
            setError("");
            setItems((current) =>
              current.map((item) => ({ ...item, status: "uploading", progress: 0 })),
            );
            void api<typeof preview>("/preview", {
              method: "POST",
              body: form({
                category,
                period: dossier.period,
                accrualPeriod,
                ...(category === "comisiones" && windowStart && windowEnd
                  ? { windowStart, windowEnd }
                  : {}),
                complete,
              }),
            })
              .then((value) => {
                setPreview(value);
                setItems((current) =>
                  current.map((item) => ({ ...item, status: "success", progress: 100 })),
                );
              })
              .catch((reason: unknown) => {
                const message =
                  reason instanceof Error ? reason.message : "No se pudo previsualizar.";
                setError(message);
                setItems((current) =>
                  current.map((item) => ({ ...item, status: "error", error: message })),
                );
              })
              .finally(() => setChecking(false));
          }}
        >
          Comprobar archivo
        </Button>
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        {preview && (
          <div className="space-y-3 rounded-lg bg-muted p-3 text-sm">
            <p>
              {preview.profile} · {preview.count} registros · huella {preview.hash.slice(0, 12)}
            </p>
            {preview.diagnostics.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
            <p className="text-xs">Referencias: {preview.references.join(" · ")}</p>
            <Checkbox
              checked={confirmed}
              onCheckedChange={setConfirmed}
              label={
                replaceId === "none"
                  ? "Confirmo categoría, periodo y cobertura; incorporar esta fuente"
                  : "Confirmo sustituir la fuente seleccionada y recalcular"
              }
            />
            <Button
              disabled={busy || !confirmed}
              onClick={() =>
                void onSave(async () => {
                  const saved = await api<Dossier>("/analyze", {
                    method: "POST",
                    body: form({
                      id: dossier.id,
                      revision: dossier.revision,
                      category,
                      period: dossier.period,
                      accrualPeriod,
                      ...(category === "comisiones" && windowStart && windowEnd
                        ? { windowStart, windowEnd }
                        : {}),
                      complete,
                      confirmed: true,
                      ...(replaceId !== "none" ? { replaceId } : {}),
                    }),
                  });
                  setItems([]);
                  clear();
                  setReplaceId("none");
                  return saved;
                })
              }
            >
              Guardar fuente y recalcular
            </Button>
          </div>
        )}
      </Panel>
      <Panel title="Fuentes incorporadas">
        <Table
          data={dossier.sources}
          getRowId={(row) => row.id}
          scrollAreaLabel="Fuentes del expediente"
          columns={[
            {
              key: "category",
              header: "Categoría",
              cell: (row) => CATEGORIES.find((item) => item.id === row.category)?.name,
            },
            { key: "period", header: "Mes de nómina" },
            { key: "accrualPeriod", header: "Devengo declarado" },
            { key: "profile", header: "Perfil" },
            { key: "facts", header: "Registros", cell: (row) => row.facts.length },
            {
              key: "complete",
              header: "Cobertura",
              cell: (row) => (row.complete ? "Completa declarada" : "Parcial"),
            },
            { key: "hash", header: "Huella", cell: (row) => row.hash.slice(0, 12) },
            {
              key: "actions",
              header: "Acciones",
              cell: (row) => (
                <Button
                  size="sm"
                  variant="ghost"
                  disabled={busy}
                  onClick={() => setRemoveId(row.id)}
                >
                  Retirar
                </Button>
              ),
            },
          ]}
          emptyState="Sin archivos externos. Los controles mensuales pueden calcularse con las ejecuciones elegidas."
        />
      </Panel>
      <Modal
        open={Boolean(removeId)}
        onOpenChange={(open) => {
          if (!open) setRemoveId(null);
        }}
        title="Retirar fuente"
        description="Se recalcularán los controles y se invalidarán las revisiones cuya evidencia cambie."
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
