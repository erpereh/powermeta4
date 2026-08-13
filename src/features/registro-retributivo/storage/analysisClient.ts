import type { StoredAnalysis } from "@/features/registro-retributivo/types";
import {
  DEFAULT_SETTINGS,
  STORAGE_SCHEMA_VERSION,
  configFromSettings,
  type AppSettings,
} from "@/features/registro-retributivo/settings/defaults";

export {
  DEFAULT_SETTINGS,
  STORAGE_SCHEMA_VERSION,
  configFromSettings,
  type AppSettings,
};

export type RetributivoClientSnapshot = {
  readonly settings: AppSettings;
  readonly analyses: readonly StoredAnalysis[];
  readonly activeAnalysisId: string | null;
};

type StatePatch = {
  readonly settings?: AppSettings;
  readonly analysis?: StoredAnalysis;
  readonly activeAnalysisId?: string | null;
  readonly deleteAnalysisId?: string;
  readonly deleteAnalysisIds?: readonly string[];
};

const STATE_URL = "/api/registro-retributivo/state";

async function requestSnapshot(patch?: StatePatch): Promise<RetributivoClientSnapshot> {
  const response = await fetch(STATE_URL, {
    method: patch ? "PATCH" : "GET",
    headers: patch ? { "content-type": "application/json" } : undefined,
    body: patch ? JSON.stringify(patch) : undefined,
    cache: "no-store",
  });
  const payload = (await response.json()) as {
    ok?: boolean;
    data?: RetributivoClientSnapshot;
    errorCode?: string;
  };
  if (!response.ok || !payload.ok || !payload.data) {
    throw new Error("No se pudo sincronizar el estado del registro retributivo.");
  }
  return payload.data;
}

export async function loadSnapshot(): Promise<RetributivoClientSnapshot> {
  return requestSnapshot();
}

export async function listAnalyses(): Promise<readonly StoredAnalysis[]> {
  return (await requestSnapshot()).analyses;
}

export async function getAnalysis(id: string): Promise<StoredAnalysis | undefined> {
  return (await requestSnapshot()).analyses.find((item) => item.id === id);
}

export async function saveSettings(settings: AppSettings): Promise<AppSettings> {
  return (await requestSnapshot({ settings })).settings;
}

export async function saveAnalysis(record: StoredAnalysis): Promise<StoredAnalysis> {
  const snapshot = await requestSnapshot({ analysis: record, activeAnalysisId: record.id });
  const saved = snapshot.analyses.find((item) => item.id === record.id);
  if (!saved) throw new Error("No se pudo guardar el análisis.");
  return saved;
}

export async function saveActiveAnalysisId(id: string | null | undefined): Promise<string | null> {
  return (await requestSnapshot({ activeAnalysisId: id ?? null })).activeAnalysisId;
}

export async function deleteAnalysis(id: string): Promise<void> {
  await requestSnapshot({ deleteAnalysisId: id });
}

export async function deleteAnalyses(ids: readonly string[]): Promise<void> {
  if (!ids.length) return;
  await requestSnapshot({ deleteAnalysisIds: ids });
}
