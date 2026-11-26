"use client";

import { Download, History, LayoutList, Play, Plus, Table2 } from "lucide-react";
import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";

import {
  Button,
  FileUpload,
  type FileUploadItem,
  Menu,
  MenuContent,
  MenuTrigger,
  Skeleton,
  StatefulButton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/system";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getStandaloneToolTone } from "@/lib/theme/icon-tones";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

import { BreakdownExportItems, BreakdownHistoryView } from "./breakdown-history";
import { BreakdownGroups, BreakdownSummary } from "./breakdown-results";
import {
  breakdownFilename,
  type BreakdownHistory,
  type BreakdownOutput,
  GROUPINGS,
  type GroupingId,
  MAX_UPLOAD_BYTES,
  type SavedBreakdown,
  XLSX_CONTENT_TYPE,
} from "./contract";

const historyPath = "/api/desglose-retributivo/history";
const emptyHistory: BreakdownHistory = { entries: [], activeAnalysisId: null };
const views = [
  { id: "summary", label: "Resumen", icon: LayoutList },
  { id: "groups", label: "Agrupaciones", icon: Table2 },
  { id: "history", label: "Historial", icon: History },
] as const;
const dateFormat = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium", timeStyle: "short" });

type Action = "load" | "analyze" | "open" | "reset" | "export" | "delete";
type Failure = { action: Exclude<Action, "load">; message: string };

class BreakdownRequestError extends Error {}

function selectionError(items: readonly FileUploadItem[]): string | null {
  if (items.length > GROUPINGS.length) return "Selecciona solo cinco archivos Excel.";
  if (items.some(({ name, size }) => !/\.xlsx$/i.test(name) || size === 0)) {
    return "Selecciona archivos .xlsx con contenido.";
  }
  if (items.reduce((size, item) => size + item.size, 0) > MAX_UPLOAD_BYTES) {
    return "Los cinco archivos deben sumar como máximo 9 MiB.";
  }
  return null;
}

async function checkResponse(response: Response, type: string, fallback: string) {
  if (response.redirected || response.status === 401) {
    throw new BreakdownRequestError("Tu sesión ha caducado. Vuelve a iniciar sesión.");
  }
  const contentType = response.headers.get("content-type");
  if (response.ok && contentType?.includes(type)) return;
  if (contentType?.includes("application/json")) {
    const payload: unknown = await response.json().catch(() => null);
    if (
      payload &&
      typeof payload === "object" &&
      "error" in payload &&
      typeof payload.error === "string"
    ) {
      throw new BreakdownRequestError(payload.error);
    }
  }
  throw new BreakdownRequestError(fallback);
}

async function historyRequest<T>(url: string, init: RequestInit, fallback: string): Promise<T> {
  const response = await fetch(url, init);
  await checkResponse(response, "application/json", fallback);
  const data: T = await response.json();
  init.signal?.throwIfAborted();
  return data;
}

function analysisPath(id: string) {
  return historyPath + "/" + encodeURIComponent(id);
}

function setActive(id: string | null, signal: AbortSignal) {
  return historyRequest<SavedBreakdown | null>(
    historyPath,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ activeAnalysisId: id }),
      signal,
    },
    "No se ha podido cambiar el análisis activo.",
  );
}

function saveDownload(blob: Blob, output: BreakdownOutput): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = breakdownFilename(output);
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function BreakdownSession() {
  const [items, setItems] = useState<FileUploadItem[]>([]);
  const [pending, setPending] = useState<Action | null>("load");
  const [failure, setFailure] = useState<Failure>();
  const [historyError, setHistoryError] = useState<string>();
  const [downloaded, setDownloaded] = useState(false);
  const [history, setHistory] = useState<BreakdownHistory>(emptyHistory);
  const [active, setActiveAnalysis] = useState<SavedBreakdown | null>(null);
  const [view, setView] = useState("summary");
  const [grouping, setGrouping] = useState<GroupingId>(GROUPINGS[0].file);
  const currentRequest = useRef<AbortController | null>(null);
  const inputError = selectionError(items);
  const ready = items.length === GROUPINGS.length && !inputError;
  const busy = pending !== null;

  const run = useCallback(async (action: Action, work: (signal: AbortSignal) => Promise<void>) => {
    if (currentRequest.current) return false;
    const controller = new AbortController();
    currentRequest.current = controller;
    setPending(action);
    setFailure(undefined);
    if (action === "load") setHistoryError(undefined);
    setDownloaded(false);
    try {
      await work(controller.signal);
      return !controller.signal.aborted;
    } catch (error) {
      if (!controller.signal.aborted) {
        const message =
          error instanceof BreakdownRequestError
            ? error.message
            : "Se ha interrumpido la conexión. Vuelve a intentarlo.";
        if (action === "load") setHistoryError(message);
        else setFailure({ action, message });
      }
      return false;
    } finally {
      if (currentRequest.current === controller) {
        currentRequest.current = null;
        setPending(null);
      }
    }
  }, []);

  const loadHistory = useCallback(
    () =>
      run("load", async (signal) => {
        const snapshot = await historyRequest<BreakdownHistory>(
          historyPath,
          { signal },
          "No se ha podido cargar el historial.",
        );
        setHistory(snapshot);
        const saved = snapshot.activeAnalysisId
          ? await historyRequest<SavedBreakdown>(
              analysisPath(snapshot.activeAnalysisId),
              { signal },
              "No se ha podido abrir el análisis.",
            )
          : null;
        setActiveAnalysis(saved);
      }),
    [run],
  );

  useEffect(() => {
    void loadHistory();
    return () => {
      currentRequest.current?.abort();
      currentRequest.current = null;
    };
  }, [loadHistory]);

  function showAnalysis(analysis: SavedBreakdown | null) {
    setActiveAnalysis(analysis);
    setGrouping(GROUPINGS[0].file);
    setView("summary");
  }

  function analyze(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready) return;
    void run("analyze", async (signal) => {
      const body = new FormData();
      for (const { file } of items) {
        if (file) body.append("files", file);
      }
      const saved = await historyRequest<SavedBreakdown>(
        historyPath,
        { method: "POST", body, signal },
        "No se ha podido guardar el análisis.",
      );
      setHistory(({ entries }) => ({
        entries: [saved.entry, ...entries],
        activeAnalysisId: saved.entry.id,
      }));
      setItems([]);
      showAnalysis(saved);
    });
  }

  function openHistory(id: string) {
    void run("open", async (signal) => {
      showAnalysis(await setActive(id, signal));
    });
  }

  function newAnalysis() {
    if (!active) {
      setView("summary");
      return;
    }
    void run("reset", async (signal) => {
      await setActive(null, signal);
      setItems([]);
      showAnalysis(null);
    });
  }

  function exportAnalysis(id: string, output: BreakdownOutput) {
    void run("export", async (signal) => {
      const response = await fetch(
        analysisPath(id) + "/export?" + new URLSearchParams({ output }),
        { signal },
      );
      await checkResponse(
        response,
        output === "zip" ? "application/zip" : XLSX_CONTENT_TYPE,
        "No se ha podido exportar el desglose.",
      );
      const blob = await response.blob();
      signal.throwIfAborted();
      saveDownload(blob, output);
      setDownloaded(true);
    });
  }

  function removeAnalysis(id?: string) {
    return run("delete", async (signal) => {
      const snapshot = await historyRequest<BreakdownHistory>(
        id ? analysisPath(id) : historyPath,
        { method: "DELETE", signal },
        "No se ha podido eliminar el análisis.",
      );
      setHistory(snapshot);
      setActiveAnalysis((previous) =>
        previous && snapshot.entries.some(({ id }) => id === previous.entry.id) ? previous : null,
      );
    });
  }

  const status =
    pending === "analyze" ? "Analizando los Excel…" : `${items.length} de 5 archivos seleccionados`;
  const error = inputError ?? (failure?.action === "analyze" ? failure.message : null);

  return (
    <Tabs
      value={view}
      onValueChange={setView}
      variant="underline"
      className="flex min-h-svh min-w-0 flex-col"
    >
      <ToolsPageHeader
        title="Desglose Retributivo"
        icon="desglose-retributivo"
        tone={getStandaloneToolTone("desglose-retributivo")}
        contentClassName="mx-auto w-full max-w-7xl"
        actions={
          (active || view !== "summary") && (
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              {active && (
                <Menu>
                  <MenuTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Exportar Excel"
                      disabled={busy}
                    >
                      <Download className="size-4" aria-hidden="true" />
                    </Button>
                  </MenuTrigger>
                  <MenuContent align="end" className="max-w-[calc(100vw-1rem)]">
                    <BreakdownExportItems
                      onExport={(output) => exportAnalysis(active.entry.id, output)}
                    />
                  </MenuContent>
                </Menu>
              )}
              <Button
                type="button"
                size="sm"
                disabled={busy}
                onClick={newAnalysis}
                aria-label="Nuevo análisis"
              >
                <Plus className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Nuevo análisis</span>
              </Button>
            </div>
          )
        }
        toolbar={
          <div className="flex min-w-0 items-end justify-between gap-3 border-b border-border">
            <TabsList aria-label="Vistas del desglose" className="border-b-0">
              {views
                .filter(({ id }) => id !== "groups" || active)
                .map(({ id, label, icon: Icon }) => (
                  <TabsTrigger key={id} value={id} className="gap-2">
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <span className={cn(id !== view && "sr-only md:not-sr-only")}>{label}</span>
                  </TabsTrigger>
                ))}
            </TabsList>
            {active && (
              <time
                dateTime={active.entry.createdAt}
                className="hidden shrink-0 pb-2.5 text-xs whitespace-nowrap text-muted-foreground md:block"
              >
                {dateFormat.format(new Date(active.entry.createdAt))}
              </time>
            )}
          </div>
        }
      />
      <main className="mx-auto w-full min-w-0 max-w-7xl space-y-4 px-4 py-5 md:px-6">
        {(pending === "export" || downloaded) && (
          <p role="status" className="text-sm text-muted-foreground">
            {pending === "export" ? "Preparando descarga…" : "Descarga iniciada."}
          </p>
        )}
        {failure && failure.action !== "analyze" && failure.action !== "delete" && (
          <Alert variant="destructive">
            <AlertDescription>{failure.message}</AlertDescription>
          </Alert>
        )}
        {pending === "load" ? (
          <Skeleton className="h-44 w-full" aria-label="Cargando historial de análisis" />
        ) : (
          <>
            <TabsContent value="summary" className="min-w-0">
              {active ? (
                <BreakdownSummary
                  result={active.result}
                  onGrouping={(id) => {
                    setGrouping(id);
                    setView("groups");
                  }}
                />
              ) : (
                <section className="space-y-4" aria-labelledby="breakdown-new">
                  <h2 id="breakdown-new" className="text-xl font-semibold tracking-tight">
                    Nuevo análisis
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Consulta medias, medianas y diferencias por concepto en los Excel de PeopleNet.
                  </p>
                  <form
                    onSubmit={analyze}
                    className="grid min-w-0 gap-6 rounded-xl border border-border bg-card p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_16rem]"
                  >
                    <FileUpload
                      value={items}
                      onValueChange={(next) => {
                        setItems(next.map((item) => ({ ...item, status: "queued" })));
                        setFailure(undefined);
                      }}
                      accept=".xlsx"
                      variant="centered"
                      title="Arrastra los cinco Excel de PeopleNet"
                      description="Selecciona un Excel por agrupación, todos del mismo periodo."
                      browseLabel="Seleccionar Excel"
                      inputLabel="Excel de PeopleNet"
                      removeLabel={(item) => "Quitar " + item.name}
                      disabled={busy}
                      classNames={{ name: "whitespace-normal wrap-anywhere" }}
                    />
                    <div className="space-y-3 border-t border-border pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                      <StatefulButton
                        type="submit"
                        variant="primary"
                        state={
                          pending === "analyze"
                            ? "loading"
                            : failure?.action === "analyze"
                              ? "error"
                              : "idle"
                        }
                        loadingText="Analizando…"
                        errorText="Reintentar"
                        icon={<Play className="size-4" aria-hidden="true" />}
                        disabled={!ready || busy}
                        className="w-full"
                      >
                        Analizar
                      </StatefulButton>
                      <p role="status" className="text-sm text-muted-foreground">
                        {status}
                      </p>
                      {error && (
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </form>
                </section>
              )}
            </TabsContent>
            {active && (
              <TabsContent value="groups" className="min-w-0">
                <BreakdownGroups
                  key={active.entry.id}
                  result={active.result}
                  grouping={grouping}
                  onGrouping={setGrouping}
                />
              </TabsContent>
            )}
            <TabsContent value="history" className="min-w-0">
              {historyError ? (
                <Alert variant="destructive">
                  <AlertDescription>
                    {historyError}
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      disabled={busy}
                      onClick={() => void loadHistory()}
                    >
                      Reintentar
                    </Button>
                  </AlertDescription>
                </Alert>
              ) : (
                <BreakdownHistoryView
                  entries={history.entries}
                  activeId={active?.entry.id}
                  busy={busy}
                  deleting={pending === "delete"}
                  deleteError={failure?.action === "delete" ? failure.message : undefined}
                  onOpen={openHistory}
                  onExport={exportAnalysis}
                  onDelete={removeAnalysis}
                  onDismissError={() => setFailure(undefined)}
                />
              )}
            </TabsContent>
          </>
        )}
      </main>
    </Tabs>
  );
}

export function BreakdownForm() {
  const companyId = useWorkspaceStore((store) => store.activeCompanyId);
  return <BreakdownSession key={companyId ?? "local"} />;
}
