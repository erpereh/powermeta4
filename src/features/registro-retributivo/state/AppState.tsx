"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ExportWorkbookMetadata } from "@/features/registro-retributivo/export/exportExcel";
import {
  defaultPeopleNetPeriod,
  parseEmployeeIdsInput,
} from "@/features/registro-retributivo/peoplenet/request";
import type {
  AnalysisConfig,
  AnalysisPeriod,
  AnalysisResult,
  AnalysisSource,
  AppView,
  ConceptMappingRule,
  StoredAnalysis,
} from "@/features/registro-retributivo/types";
import type { ToastItem, ToastKind } from "@/features/registro-retributivo/components/common/toast-types";
import {
  configFromSettings,
  deleteAnalysis,
  deleteAnalyses,
  DEFAULT_SETTINGS,
  getAnalysis,
  listAnalyses,
  loadSnapshot,
  saveActiveAnalysisId,
  saveAnalysis,
  saveSettings,
  STORAGE_SCHEMA_VERSION,
  type AppSettings,
} from "@/features/registro-retributivo/storage/analysisClient";
import { normalizeComparableText, normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

export interface DashboardFilters {
  readonly query: string;
  readonly center: string;
  readonly group: string;
  readonly status: string;
}

export const EMPTY_FILTERS: DashboardFilters = {
  query: "",
  center: "",
  group: "",
  status: "",
};

/** Qué se analiza: ficheros subidos o lectura de PeopleNet de un periodo. */
type AnalysisRequest =
  | { readonly kind: "files"; readonly registroFile: File; readonly pdfFiles: readonly File[] }
  | {
      readonly kind: "peoplenet";
      readonly period: AnalysisPeriod;
      readonly employeeIds: readonly string[];
    };

interface AppStateValue {
  readonly view: AppView;
  readonly sourceMode: AnalysisSource;
  readonly peopleNetPeriod: AnalysisPeriod;
  readonly peopleNetEmployeeIds: string;
  readonly pdfFiles: readonly File[];
  readonly registroFile?: File;
  readonly activeAnalysis?: StoredAnalysis;
  readonly result?: AnalysisResult;
  readonly history: readonly StoredAnalysis[];
  readonly settings: AppSettings;
  readonly filters: DashboardFilters;
  readonly status: string;
  readonly error?: string;
  readonly success?: string;
  readonly toasts: readonly ToastItem[];
  readonly analyzing: boolean;
  readonly exporting: boolean;
  readonly hydrating: boolean;
  readonly setView: (view: AppView) => void;
  readonly setSourceMode: (mode: AnalysisSource) => void;
  readonly setPeopleNetPeriod: (period: AnalysisPeriod) => void;
  readonly setPeopleNetEmployeeIds: (value: string) => void;
  readonly setPdfFiles: (files: readonly File[]) => void;
  readonly setRegistroFile: (file?: File) => void;
  readonly updateSettings: (settings: Partial<AppSettings>) => void;
  readonly setFilters: (filters: DashboardFilters) => void;
  readonly pushToast: (toast: Omit<ToastItem, "id">) => void;
  readonly dismissToast: (id: string) => void;
  readonly analyze: () => Promise<void>;
  readonly saveConceptMapAndRefresh: (conceptMap: readonly ConceptMappingRule[]) => Promise<void>;
  readonly saveExclusionsAndRefresh: (excludedEmployeeIds: readonly string[]) => Promise<void>;
  readonly exportActiveAnalysis: () => Promise<void>;
  readonly exportStoredAnalysis: (analysis: StoredAnalysis) => Promise<void>;
  readonly resetForNewAnalysis: () => void;
  readonly openStoredAnalysis: (id: string) => Promise<void>;
  readonly removeStoredAnalysis: (id: string) => Promise<void>;
  readonly clearStoredHistory: () => Promise<void>;
}

const AppStateContext = createContext<AppStateValue | undefined>(undefined);

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function normalizeSettingsPatch(current: AppSettings, patch: Partial<AppSettings>): AppSettings {
  const next = { ...current, ...patch };
  const defaultTolerance = Number.isFinite(Number(next.defaultTolerance)) ? Number(next.defaultTolerance) : DEFAULT_SETTINGS.defaultTolerance;
  const reviewThreshold = Number.isFinite(Number(next.reviewThreshold)) ? Number(next.reviewThreshold) : DEFAULT_SETTINGS.reviewThreshold;
  const incidentThreshold = Number.isFinite(Number(next.incidentThreshold)) ? Number(next.incidentThreshold) : DEFAULT_SETTINGS.incidentThreshold;

  return {
    defaultTolerance: Math.max(0, defaultTolerance),
    reviewThreshold: Math.max(0, reviewThreshold),
    incidentThreshold: Math.max(Math.max(0, reviewThreshold), incidentThreshold),
    excludedEmployeeIds: Array.isArray(next.excludedEmployeeIds)
      ? [...new Set(next.excludedEmployeeIds.map(normalizeEmployeeId).filter(Boolean))]
      : DEFAULT_SETTINGS.excludedEmployeeIds,
    conceptMap: Array.isArray(next.conceptMap) ? next.conceptMap : DEFAULT_SETTINGS.conceptMap,
    normalizedConcepts: Array.isArray(next.normalizedConcepts) ? next.normalizedConcepts : DEFAULT_SETTINGS.normalizedConcepts,
  };
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function buildConfig(settings: AppSettings): AnalysisConfig {
  return configFromSettings(settings);
}

/** Análisis sin ficheros: solo viajan el periodo, las matrículas y los ajustes. */
function postPeopleNetAnalysis(
  period: AnalysisPeriod,
  employeeIds: readonly string[],
  config: AnalysisConfig,
): Promise<Response> {
  return fetch("/api/registro-retributivo/analyze-peoplenet", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      from: period.from,
      to: period.to,
      employeeIds,
      tolerance: config.tolerance,
      reviewThreshold: config.thresholds.reviewThreshold,
      incidentThreshold: config.thresholds.incidentThreshold,
      conceptMap: config.conceptMap ?? [],
      excludedEmployeeIds: config.excludedEmployeeIds ?? [],
    }),
  });
}

function peopleNetLabel(period: AnalysisPeriod): string {
  const format = (iso: string) => iso.split("-").reverse().join("/");
  return `PeopleNet ${format(period.from)}–${format(period.to)}`;
}

/** Repetir el análisis activo con su mismo origen, sin pedir ficheros de nuevo. */
function refreshRequestFor(
  activeAnalysis: StoredAnalysis | undefined,
  registroFile: File | undefined,
  pdfFiles: readonly File[],
): AnalysisRequest | undefined {
  const result = activeAnalysis?.result;
  if (result?.source === "peoplenet" && result.period) {
    return { kind: "peoplenet", period: result.period, employeeIds: result.employeeIdsFilter ?? [] };
  }
  if (registroFile && pdfFiles.length) {
    return { kind: "files", registroFile, pdfFiles };
  }
  return undefined;
}

function buildExportMetadata(analysis: StoredAnalysis, settings: AppSettings, exportOrigin: "active" | "history"): ExportWorkbookMetadata {
  return {
    registroFileName: analysis.registroFileName,
    pdfFileCount: analysis.pdfCount,
    exportedAt: new Date().toISOString(),
    schemaVersion: analysis.schemaVersion,
    normalizedConcepts: settings.normalizedConcepts,
    exportOrigin,
  };
}

export function AppStateProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [view, setView] = useState<AppView>("dashboard");
  const [sourceMode, setSourceMode] = useState<AnalysisSource>("files");
  const [peopleNetPeriod, setPeopleNetPeriod] = useState<AnalysisPeriod>(() => defaultPeopleNetPeriod());
  const [peopleNetEmployeeIds, setPeopleNetEmployeeIds] = useState("");
  const [pdfFiles, setPdfFiles] = useState<readonly File[]>([]);
  const [registroFile, setRegistroFile] = useState<File | undefined>();
  const [activeAnalysis, setActiveAnalysis] = useState<StoredAnalysis | undefined>();
  const [history, setHistory] = useState<readonly StoredAnalysis[]>([]);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [filters, setFilters] = useState<DashboardFilters>(EMPTY_FILTERS);
  const [status, setStatus] = useState("Pendiente de archivos");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [toasts, setToasts] = useState<readonly ToastItem[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [hydrating, setHydrating] = useState(true);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback((toast: Omit<ToastItem, "id">) => {
    setToasts((current) => [...current, { ...toast, id: createId() }].slice(-5));
  }, []);

  const pushMessageToast = useCallback(
    (kind: ToastKind, title: string, message?: string) => {
      pushToast({ kind, title, message });
    },
    [pushToast],
  );

  const persistError = useCallback(
    (caught: unknown) => {
      const message = caught instanceof Error ? caught.message : "No se pudo guardar el estado del registro retributivo.";
      setError(message);
      pushMessageToast("error", "No se pudo guardar", message);
    },
    [pushMessageToast],
  );

  const refreshHistory = useCallback(async () => {
    setHistory(await listAnalyses());
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      try {
        const snapshot = await loadSnapshot();
        const active =
          snapshot.activeAnalysisId
            ? snapshot.analyses.find((item) => item.id === snapshot.activeAnalysisId) ?? snapshot.analyses[0]
            : snapshot.analyses[0];

        if (cancelled) return;
        setSettings(snapshot.settings);
        setHistory(snapshot.analyses);
        setActiveAnalysis(active);
        setStatus(active ? "Análisis activo cargado desde el historial" : "Pendiente de archivos");
        setSuccess(undefined);
      } catch {
        if (!cancelled) setError("No se pudo recuperar el contenido local. Puedes volver a intentarlo.");
      } finally {
        if (!cancelled) setHydrating(false);
      }
    }

    void hydrate();

    return () => {
      cancelled = true;
    };
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setSettings((current) => {
      const next = normalizeSettingsPatch(current, patch);
      void saveSettings(next).catch(persistError);
      return next;
    });
  }, [persistError]);

  const runAnalysis = useCallback(async (
    request: AnalysisRequest,
    settingsForAnalysis: AppSettings,
    options?: { readonly keepView?: boolean; readonly refreshedMap?: boolean; readonly replaceActive?: boolean },
  ) => {
    const currentView = view;
    const config = buildConfig(settingsForAnalysis);

    setAnalyzing(true);
    setError(undefined);
    setSuccess(undefined);
    setStatus(request.kind === "peoplenet" ? "Leyendo nóminas y registro de PeopleNet..." : "Analizando nóminas...");

    try {
      let response: Response;
      if (request.kind === "files") {
        const formData = new FormData();
        formData.append("registro", request.registroFile);
        formData.append("tolerance", String(config.tolerance));
        formData.append("reviewThreshold", String(config.thresholds.reviewThreshold));
        formData.append("incidentThreshold", String(config.thresholds.incidentThreshold));
        formData.append("conceptMap", JSON.stringify(config.conceptMap ?? []));
        formData.append("excludedEmployeeIds", JSON.stringify(config.excludedEmployeeIds ?? []));
        request.pdfFiles.forEach((file) => formData.append("pdfs", file));
        response = await fetch("/api/registro-retributivo/analyze", { method: "POST", body: formData });
      } else {
        response = await postPeopleNetAnalysis(request.period, request.employeeIds, config);
      }
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string; hint?: string };
        throw new Error(
          payload.error && !/Failed to parse body as FormData/i.test(payload.error)
            ? payload.error
            : "No se ha podido analizar la documentación.",
        );
      }

      const result = (await response.json()) as AnalysisResult;
      const replaceActive = Boolean(options?.replaceActive && activeAnalysis);
      const record: StoredAnalysis = {
        id: replaceActive ? activeAnalysis!.id : createId(),
        schemaVersion: STORAGE_SCHEMA_VERSION,
        createdAt: replaceActive ? activeAnalysis!.createdAt : new Date().toISOString(),
        registroFileName: request.kind === "files" ? request.registroFile.name : peopleNetLabel(request.period),
        pdfCount: request.kind === "files" ? request.pdfFiles.length : result.summary.pdfsAnalyzed,
        result,
        config,
      };

      await saveAnalysis(record);
      setActiveAnalysis(record);
      await refreshHistory();
      setFilters(EMPTY_FILTERS);
      setStatus(`Análisis generado: ${result.summary.uniquePeople} personas`);
      setSuccess(replaceActive ? "Análisis actualizado." : options?.refreshedMap ? "Mapa guardado y análisis actualizado." : "Análisis completado y guardado en el historial.");
      if (replaceActive) {
        pushMessageToast("success", "Análisis actualizado.");
      } else {
        pushMessageToast(
          "success",
          options?.refreshedMap ? "Mapa actualizado" : "Análisis completado",
          options?.refreshedMap ? "Mapa guardado y análisis actualizado." : `${result.summary.uniquePeople} personas generadas y guardadas en historial.`,
        );
      }
      setView(options?.keepView ? currentView : "dashboard");
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Error inesperado.";
      setError(message);
      pushMessageToast("error", "Error de análisis", message);
      setStatus("Análisis detenido");
    } finally {
      setAnalyzing(false);
    }
  }, [activeAnalysis, pushMessageToast, refreshHistory, view]);

  const analyze = useCallback(async () => {
    if (sourceMode === "peoplenet") {
      await runAnalysis(
        { kind: "peoplenet", period: peopleNetPeriod, employeeIds: parseEmployeeIdsInput(peopleNetEmployeeIds) },
        settings,
      );
      return;
    }
    if (!registroFile || !pdfFiles.length) {
      const message = "Selecciona recibos y Excel Reg. Retrib. antes de analizar.";
      setError(message);
      pushMessageToast("warning", "Faltan archivos", message);
      return;
    }
    await runAnalysis({ kind: "files", registroFile, pdfFiles }, settings);
  }, [pdfFiles, peopleNetEmployeeIds, peopleNetPeriod, pushMessageToast, registroFile, runAnalysis, settings, sourceMode]);

  const saveConceptMapAndRefresh = useCallback(
    async (conceptMap: readonly ConceptMappingRule[]) => {
      const nextSettings = normalizeSettingsPatch(settings, { conceptMap });
      setSettings(nextSettings);
      await saveSettings(nextSettings);

      const request = refreshRequestFor(activeAnalysis, registroFile, pdfFiles);
      if (!request) {
        const message = "Mapa guardado. Vuelve a seleccionar archivos para reanalizar.";
        setSuccess(message);
        pushMessageToast("info", "Mapa guardado", message);
        return;
      }

      await runAnalysis(request, nextSettings, { keepView: true, refreshedMap: true, replaceActive: true });
    },
    [activeAnalysis, pdfFiles, pushMessageToast, registroFile, runAnalysis, settings],
  );

  const saveExclusionsAndRefresh = useCallback(
    async (excludedEmployeeIds: readonly string[]) => {
      const nextSettings = normalizeSettingsPatch(settings, { excludedEmployeeIds });
      setSettings(nextSettings);
      await saveSettings(nextSettings);

      const request = refreshRequestFor(activeAnalysis, registroFile, pdfFiles);
      if (!request) {
        const message = "Exclusiones guardadas. Vuelve a seleccionar archivos para reanalizar.";
        setSuccess(message);
        pushMessageToast("info", "Exclusiones guardadas", message);
        return;
      }

      await runAnalysis(request, nextSettings, { keepView: true, replaceActive: true });
    },
    [activeAnalysis, pdfFiles, pushMessageToast, registroFile, runAnalysis, settings],
  );

  const exportAnalysis = useCallback(async (analysis: StoredAnalysis, exportOrigin: "active" | "history") => {
    setExporting(true);
    setError(undefined);
    setSuccess(undefined);

    try {
      const response = await fetch("/api/registro-retributivo/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ analysis: analysis.result, metadata: buildExportMetadata(analysis, settings, exportOrigin) }),
      });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "No se pudo exportar.");
      }
      const blob = await response.blob();
      const date = analysis.createdAt.slice(0, 10);
      downloadBlob(blob, `comparativa_reg_retributivo_${date}.xlsx`);
      setSuccess("Excel exportado correctamente.");
      pushMessageToast("success", "Excel exportado", "Excel exportado correctamente.");
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Error inesperado.";
      setError(message);
      pushMessageToast("error", "Error al exportar", message);
    } finally {
      setExporting(false);
    }
  }, [pushMessageToast, settings]);

  const exportActiveAnalysis = useCallback(async () => {
    if (activeAnalysis) {
      await exportAnalysis(activeAnalysis, "active");
    }
  }, [activeAnalysis, exportAnalysis]);

  const exportStoredAnalysis = useCallback(async (analysis: StoredAnalysis) => {
    await exportAnalysis(analysis, "history");
  }, [exportAnalysis]);

  const resetForNewAnalysis = useCallback(() => {
    setPdfFiles([]);
    setRegistroFile(undefined);
    setActiveAnalysis(undefined);
    void saveActiveAnalysisId(null).catch(persistError);
    setFilters(EMPTY_FILTERS);
    setError(undefined);
    setSuccess(undefined);
    setStatus("Pendiente de archivos");
    setView("dashboard");
  }, [persistError]);

  const openStoredAnalysis = useCallback(async (id: string) => {
    const analysis = await getAnalysis(id);
    if (!analysis) {
      const message = "No se pudo abrir el análisis guardado.";
      setError(message);
      pushMessageToast("error", "Historial no disponible", message);
      return;
    }

    setActiveAnalysis(analysis);
    void saveActiveAnalysisId(id).catch(persistError);
    setFilters(EMPTY_FILTERS);
    setStatus("Análisis activo actualizado desde el historial");
    setSuccess("Análisis activo actualizado.");
    pushMessageToast("info", "Historial cargado", "Análisis activo actualizado.");
    setView("dashboard");
  }, [persistError, pushMessageToast]);

  const removeStoredAnalysis = useCallback(
    async (id: string) => {
      await deleteAnalysis(id);
      if (activeAnalysis?.id === id) {
        setActiveAnalysis(undefined);
        await saveActiveAnalysisId(null);
      }
      await refreshHistory();
      setSuccess("Análisis eliminado del historial.");
      pushMessageToast("info", "Historial actualizado", "Análisis eliminado del historial.");
    },
    [activeAnalysis?.id, pushMessageToast, refreshHistory],
  );

  const clearStoredHistory = useCallback(async () => {
    await deleteAnalyses(history.map((analysis) => analysis.id));
    const remaining = await listAnalyses();
    setHistory(remaining);
    if (activeAnalysis && !remaining.some((analysis) => analysis.id === activeAnalysis.id)) {
      setActiveAnalysis(undefined);
      await saveActiveAnalysisId(null);
    }
    setSuccess("Historial eliminado.");
    pushMessageToast("info", "Historial eliminado", "Se eliminaron los análisis guardados.");
  }, [activeAnalysis, history, pushMessageToast]);

  const value = useMemo<AppStateValue>(
    () => ({
      view,
      sourceMode,
      peopleNetPeriod,
      peopleNetEmployeeIds,
      pdfFiles,
      registroFile,
      activeAnalysis,
      result: activeAnalysis?.result,
      history,
      settings,
      filters,
      status,
      error,
      success,
      toasts,
      analyzing,
      exporting,
      hydrating,
      setView,
      setSourceMode,
      setPeopleNetPeriod,
      setPeopleNetEmployeeIds,
      setPdfFiles,
      setRegistroFile,
      updateSettings,
      setFilters,
      pushToast,
      dismissToast,
      analyze,
      saveConceptMapAndRefresh,
      saveExclusionsAndRefresh,
      exportActiveAnalysis,
      exportStoredAnalysis,
      resetForNewAnalysis,
      openStoredAnalysis,
      removeStoredAnalysis,
      clearStoredHistory,
    }),
    [
      activeAnalysis,
      analyze,
      saveConceptMapAndRefresh,
      saveExclusionsAndRefresh,
      clearStoredHistory,
      dismissToast,
      error,
      exportActiveAnalysis,
      exportAnalysis,
      exportStoredAnalysis,
      exporting,
      filters,
      history,
      hydrating,
      openStoredAnalysis,
      pdfFiles,
      peopleNetEmployeeIds,
      peopleNetPeriod,
      pushToast,
      registroFile,
      removeStoredAnalysis,
      resetForNewAnalysis,
      settings,
      sourceMode,
      status,
      success,
      toasts,
      updateSettings,
      view,
      analyzing,
    ],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState debe usarse dentro de AppStateProvider.");
  }

  return context;
}

export function matchesQuery(values: readonly (string | undefined)[], query: string): boolean {
  if (!query) {
    return true;
  }

  const normalized = normalizeComparableText(query);
  return values.some((value) => normalizeComparableText(value).includes(normalized));
}
