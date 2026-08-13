"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ExportWorkbookMetadata } from "@/features/registro-retributivo/export/exportExcel";
import type { AnalysisConfig, AnalysisResult, AppView, ConceptMappingRule, StoredAnalysis } from "@/features/registro-retributivo/types";
import type { ToastItem, ToastKind } from "@/features/registro-retributivo/components/common/ToastViewport";
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
import type { CleanupPolicy } from "@/features/registro-retributivo/assistant/storage/repositories";
import type { AppNavigationIntent } from "@/features/registro-retributivo/assistant/integrations/actions";

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

export interface AiStatus {
  readonly configured: boolean;
  readonly enabled: boolean;
  readonly model: string;
}

interface AppStateValue {
  readonly view: AppView;
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
  readonly aiStatus?: AiStatus;
  readonly aiTesting: boolean;
  readonly aiTestMessage?: string;
  readonly assistantNavigationIntent?: AppNavigationIntent;
  readonly setView: (view: AppView) => void;
  readonly navigateAssistantIntent: (intent: AppNavigationIntent) => void;
  readonly consumeAssistantNavigationIntent: () => void;
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
  readonly removeStoredAnalysis: (id: string, policy: CleanupPolicy) => Promise<void>;
  readonly clearStoredHistory: (policy: CleanupPolicy) => Promise<void>;
  readonly refreshAiStatus: () => Promise<void>;
  readonly testAiConnection: () => Promise<void>;
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
    enableAIByDefault: next.enableAIByDefault,
    autoExplainOnOpen: next.autoExplainOnOpen,
    reviewThreshold: Math.max(0, reviewThreshold),
    incidentThreshold: Math.max(Math.max(0, reviewThreshold), incidentThreshold),
    aiModel: next.aiModel || DEFAULT_SETTINGS.aiModel,
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

function buildExportMetadata(analysis: StoredAnalysis, settings: AppSettings, exportOrigin: "active" | "history"): ExportWorkbookMetadata {
  return {
    registroFileName: analysis.registroFileName,
    pdfFileCount: analysis.pdfCount,
    exportedAt: new Date().toISOString(),
    aiEnabled: analysis.config.enableAI,
    aiModel: analysis.config.aiModel,
    schemaVersion: analysis.schemaVersion,
    normalizedConcepts: settings.normalizedConcepts,
    exportOrigin,
  };
}

export function AppStateProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [view, setView] = useState<AppView>("dashboard");
  const [assistantNavigationIntent, setAssistantNavigationIntent] = useState<AppNavigationIntent>();
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
  const [aiStatus, setAiStatus] = useState<AiStatus | undefined>();
  const [aiTesting, setAiTesting] = useState(false);
  const [aiTestMessage, setAiTestMessage] = useState<string | undefined>();

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

  const refreshAiStatus = useCallback(async () => {
    try {
      const response = await fetch("/api/registro-retributivo/ai/status");
      if (response.ok) {
        const payload = (await response.json()) as AiStatus;
        setAiStatus(payload);
        setSettings((current) => normalizeSettingsPatch(current, { aiModel: payload.model }));
      }
    } catch {
      setAiStatus(undefined);
    }
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
        void refreshAiStatus();
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
  }, [refreshAiStatus]);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setSettings((current) => {
      const next = normalizeSettingsPatch(current, patch);
      void saveSettings(next).catch(persistError);
      return next;
    });
  }, [persistError]);

  const runAnalysis = useCallback(async (settingsForAnalysis: AppSettings, options?: { readonly keepView?: boolean; readonly refreshedMap?: boolean; readonly replaceActive?: boolean }) => {
    if (!registroFile || !pdfFiles.length) {
      const message = "Selecciona recibos y Excel Reg. Retrib. antes de analizar.";
      setError(message);
      pushMessageToast("warning", "Faltan archivos", message);
      return;
    }

    const currentView = view;
    const config = buildConfig(settingsForAnalysis);
    const formData = new FormData();
    formData.append("registro", registroFile);
    formData.append("tolerance", String(config.tolerance));
    formData.append("enableAI", String(config.enableAI));
    formData.append("reviewThreshold", String(config.thresholds.reviewThreshold));
    formData.append("incidentThreshold", String(config.thresholds.incidentThreshold));
    formData.append("conceptMap", JSON.stringify(config.conceptMap ?? []));
    formData.append("excludedEmployeeIds", JSON.stringify(config.excludedEmployeeIds ?? []));
    pdfFiles.forEach((file) => formData.append("pdfs", file));

    setAnalyzing(true);
    setError(undefined);
    setSuccess(undefined);
    setStatus("Analizando nóminas...");

    try {
      const response = await fetch("/api/registro-retributivo/analyze", { method: "POST", body: formData });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "No se pudo analizar.");
      }

      const result = (await response.json()) as AnalysisResult;
      const replaceActive = Boolean(options?.replaceActive && activeAnalysis);
      const record: StoredAnalysis = {
        id: replaceActive ? activeAnalysis!.id : createId(),
        schemaVersion: STORAGE_SCHEMA_VERSION,
        createdAt: replaceActive ? activeAnalysis!.createdAt : new Date().toISOString(),
        registroFileName: registroFile.name,
        pdfCount: pdfFiles.length,
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
  }, [activeAnalysis, pdfFiles, pushMessageToast, refreshHistory, registroFile, view]);

  const analyze = useCallback(async () => {
    await runAnalysis(settings);
  }, [runAnalysis, settings]);

  const saveConceptMapAndRefresh = useCallback(
    async (conceptMap: readonly ConceptMappingRule[]) => {
      const nextSettings = normalizeSettingsPatch(settings, { conceptMap });
      setSettings(nextSettings);
      await saveSettings(nextSettings);

      if (!registroFile || !pdfFiles.length) {
        const message = "Mapa guardado. Vuelve a seleccionar archivos para reanalizar.";
        setSuccess(message);
        pushMessageToast("info", "Mapa guardado", message);
        return;
      }

      await runAnalysis(nextSettings, { keepView: true, refreshedMap: true, replaceActive: true });
    },
    [pdfFiles.length, pushMessageToast, registroFile, runAnalysis, settings],
  );

  const saveExclusionsAndRefresh = useCallback(
    async (excludedEmployeeIds: readonly string[]) => {
      const nextSettings = normalizeSettingsPatch(settings, { excludedEmployeeIds });
      setSettings(nextSettings);
      await saveSettings(nextSettings);

      if (!registroFile || !pdfFiles.length) {
        const message = "Exclusiones guardadas. Vuelve a seleccionar archivos para reanalizar.";
        setSuccess(message);
        pushMessageToast("info", "Exclusiones guardadas", message);
        return;
      }

      await runAnalysis(nextSettings, { keepView: true, replaceActive: true });
    },
    [pdfFiles.length, pushMessageToast, registroFile, runAnalysis, settings],
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
    async (id: string, _policy: CleanupPolicy) => {
      void _policy;
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

  const clearStoredHistory = useCallback(async (_policy: CleanupPolicy) => {
    void _policy;
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

  const navigateAssistantIntent = useCallback((intent: AppNavigationIntent) => {
    if ("analysisId" in intent && activeAnalysis?.id !== intent.analysisId) return;
    setAssistantNavigationIntent(intent);
    if (intent.type === "settings_ai") {
      setView("ajustes");
    } else if (intent.type === "open_person") {
      setFilters((current) => ({ ...current, query: intent.personId }));
      setView("personas");
    } else if (intent.type === "open_cuadre") {
      if (intent.personId) setFilters((current) => ({ ...current, query: intent.personId ?? "" }));
      setView("cuadre-excel");
    } else if (intent.type === "open_grouping") {
      setFilters((current) => ({ ...current, query: intent.groupingId }));
      setView("agrupaciones");
    } else {
      setView("asistente");
    }
  }, [activeAnalysis?.id]);
  const consumeAssistantNavigationIntent = useCallback(() => setAssistantNavigationIntent(undefined), []);

  const testAiConnection = useCallback(async () => {
    setAiTesting(true);
    setAiTestMessage(undefined);

    try {
      const response = await fetch("/api/registro-retributivo/ai/test", { method: "POST" });
      const payload = (await response.json()) as { ok?: boolean; error?: string; model?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? "No se pudo probar la conexión IA.");
      }

      setAiTestMessage(`Conexión IA correcta con ${payload.model ?? settings.aiModel}.`);
      pushMessageToast("success", "IA configurada", `Conexion IA correcta con ${payload.model ?? settings.aiModel}.`);
      await refreshAiStatus();
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "No se pudo probar la conexión IA.";
      setAiTestMessage(message);
      pushMessageToast("error", "IA no disponible", message);
    } finally {
      setAiTesting(false);
    }
  }, [pushMessageToast, refreshAiStatus, settings.aiModel]);

  const value = useMemo<AppStateValue>(
    () => ({
      view,
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
      aiStatus,
      aiTesting,
      aiTestMessage,
      assistantNavigationIntent,
      setView,
      navigateAssistantIntent,
      consumeAssistantNavigationIntent,
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
      refreshAiStatus,
      testAiConnection,
    }),
    [
      activeAnalysis,
      assistantNavigationIntent,
      aiStatus,
      aiTestMessage,
      aiTesting,
      analyze,
      saveConceptMapAndRefresh,
      saveExclusionsAndRefresh,
      clearStoredHistory,
      consumeAssistantNavigationIntent,
      dismissToast,
      error,
      exportActiveAnalysis,
      exportAnalysis,
      exportStoredAnalysis,
      exporting,
      filters,
      history,
      navigateAssistantIntent,
      hydrating,
      openStoredAnalysis,
      pdfFiles,
      pushToast,
      refreshAiStatus,
      registroFile,
      removeStoredAnalysis,
      resetForNewAnalysis,
      settings,
      status,
      success,
      testAiConnection,
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
