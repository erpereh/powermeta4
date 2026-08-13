import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { StoredAnalysis } from "@/features/registro-retributivo/types";
import {
  DEFAULT_SETTINGS,
  STORAGE_SCHEMA_VERSION,
  type AppSettings,
} from "@/features/registro-retributivo/settings/defaults";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

type Row = Record<string, unknown>;

export type RetributivoStatePatch = {
  readonly settings?: AppSettings;
  readonly analysis?: StoredAnalysis;
  readonly activeAnalysisId?: string | null;
  readonly deleteAnalysisId?: string;
  readonly deleteAnalysisIds?: readonly string[];
};

export type RetributivoStateSnapshot = {
  readonly settings: AppSettings;
  readonly analyses: StoredAnalysis[];
  readonly activeAnalysisId: string | null;
};

const now = () => new Date().toISOString();

const ensureCompany = (database: DatabaseSync, companyId: CompanyId): void => {
  if (!database.prepare("SELECT 1 FROM companies WHERE id = ?").get(companyId)) {
    throw new Error("La empresa no existe.");
  }
};

const parseJson = <T>(value: unknown, fallback: T): T => {
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

const mapAnalysis = (row: Row): StoredAnalysis => {
  const result = parseJson<StoredAnalysis["result"] | undefined>(row.result_json, undefined);
  const config = parseJson<StoredAnalysis["config"] | undefined>(row.config_json, undefined);
  if (!result || !config) {
    throw new Error("El análisis guardado no es válido.");
  }
  return {
    id: String(row.id),
    schemaVersion:
      typeof row.schema_version === "number" ? row.schema_version : STORAGE_SCHEMA_VERSION,
    createdAt: String(row.created_at),
    registroFileName: String(row.registro_file_name),
    pdfCount: Number(row.pdf_count),
    result,
    config,
  };
};

export const createRetributivoAnalysisRepository = (database: DatabaseSync = getDatabase()) => {
  const listAnalyses = (companyId: CompanyId): StoredAnalysis[] => {
    ensureCompany(database, companyId);
    return (
      database
        .prepare(
          "SELECT id, company_id, registro_file_name, pdf_count, schema_version, result_json, config_json, created_at FROM retributivo_analyses WHERE company_id = ? ORDER BY created_at DESC, id DESC",
        )
        .all(companyId) as Row[]
    ).map(mapAnalysis);
  };

  const getAnalysis = (companyId: CompanyId, id: string): StoredAnalysis | undefined => {
    ensureCompany(database, companyId);
    const row = database
      .prepare(
        "SELECT id, company_id, registro_file_name, pdf_count, schema_version, result_json, config_json, created_at FROM retributivo_analyses WHERE id = ? AND company_id = ?",
      )
      .get(id, companyId) as Row | undefined;
    return row ? mapAnalysis(row) : undefined;
  };

  const loadSettings = (companyId: CompanyId): AppSettings => {
    ensureCompany(database, companyId);
    const row = database
      .prepare("SELECT settings_json FROM retributivo_settings WHERE company_id = ?")
      .get(companyId) as Row | undefined;
    return row ? parseJson(row.settings_json, DEFAULT_SETTINGS) : DEFAULT_SETTINGS;
  };

  const loadActiveAnalysisId = (companyId: CompanyId): string | null => {
    ensureCompany(database, companyId);
    const row = database
      .prepare("SELECT active_analysis_id FROM retributivo_state WHERE company_id = ?")
      .get(companyId) as Row | undefined;
    return typeof row?.active_analysis_id === "string" ? row.active_analysis_id : null;
  };

  const snapshot = (companyId: CompanyId): RetributivoStateSnapshot => {
    const analyses = listAnalyses(companyId);
    const activeAnalysisId = loadActiveAnalysisId(companyId);
    return {
      settings: loadSettings(companyId),
      analyses,
      activeAnalysisId:
        activeAnalysisId && analyses.some((item) => item.id === activeAnalysisId)
          ? activeAnalysisId
          : null,
    };
  };

  const writeSettings = (companyId: CompanyId, settings: AppSettings): void => {
    const timestamp = now();
    database
      .prepare(
        "INSERT INTO retributivo_settings (company_id, settings_json, created_at, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(company_id) DO UPDATE SET settings_json = excluded.settings_json, updated_at = excluded.updated_at",
      )
      .run(companyId, JSON.stringify(settings), timestamp, timestamp);
  };

  const writeAnalysis = (companyId: CompanyId, record: StoredAnalysis): void => {
    const timestamp = now();
    database
      .prepare(
        "INSERT INTO retributivo_analyses (id, company_id, registro_file_name, pdf_count, schema_version, result_json, config_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET registro_file_name = excluded.registro_file_name, pdf_count = excluded.pdf_count, schema_version = excluded.schema_version, result_json = excluded.result_json, config_json = excluded.config_json, updated_at = excluded.updated_at WHERE company_id = excluded.company_id",
      )
      .run(
        record.id,
        companyId,
        record.registroFileName,
        record.pdfCount,
        record.schemaVersion ?? STORAGE_SCHEMA_VERSION,
        JSON.stringify(record.result),
        JSON.stringify(record.config),
        record.createdAt || timestamp,
        timestamp,
      );
    if (!getAnalysis(companyId, record.id)) {
      throw new Error("No se pudo guardar el análisis.");
    }
  };

  const writeActiveAnalysisId = (companyId: CompanyId, id: string | null): void => {
    if (id && !getAnalysis(companyId, id)) {
      throw new Error("El análisis no pertenece a la empresa activa.");
    }
    database
      .prepare(
        "INSERT INTO retributivo_state (company_id, active_analysis_id, updated_at) VALUES (?, ?, ?) ON CONFLICT(company_id) DO UPDATE SET active_analysis_id = excluded.active_analysis_id, updated_at = excluded.updated_at",
      )
      .run(companyId, id, now());
  };

  const writeDeleteAnalysis = (companyId: CompanyId, id: string): void => {
    database
      .prepare("DELETE FROM retributivo_analyses WHERE id = ? AND company_id = ?")
      .run(id, companyId);
  };

  const applyPatchSync = (companyId: CompanyId, patch: RetributivoStatePatch): RetributivoStateSnapshot => {
    ensureCompany(database, companyId);
    if (patch.settings) writeSettings(companyId, patch.settings);
    if (patch.analysis) writeAnalysis(companyId, patch.analysis);
    if (patch.deleteAnalysisId) writeDeleteAnalysis(companyId, patch.deleteAnalysisId);
    for (const id of patch.deleteAnalysisIds ?? []) writeDeleteAnalysis(companyId, id);
    if ("activeAnalysisId" in patch) writeActiveAnalysisId(companyId, patch.activeAnalysisId ?? null);
    return snapshot(companyId);
  };

  const applyPatch = async (
    companyId: CompanyId,
    patch: RetributivoStatePatch,
  ): Promise<RetributivoStateSnapshot> =>
    withRepositoryWrite(async () => withTransaction(database, () => applyPatchSync(companyId, patch)));

  return {
    listAnalyses,
    getAnalysis,
    loadSettings,
    loadActiveAnalysisId,
    snapshot,
    applyPatch,
    saveSettings: (companyId: CompanyId, settings: AppSettings) =>
      applyPatch(companyId, { settings }).then((data) => data.settings),
    saveAnalysis: (companyId: CompanyId, record: StoredAnalysis) =>
      applyPatch(companyId, { analysis: record }).then((data) => {
        const saved = data.analyses.find((item) => item.id === record.id);
        if (!saved) throw new Error("No se pudo guardar el análisis.");
        return saved;
      }),
    saveActiveAnalysisId: (companyId: CompanyId, id: string | null) =>
      applyPatch(companyId, { activeAnalysisId: id }).then((data) => data.activeAnalysisId),
    deleteAnalysis: (companyId: CompanyId, id: string) =>
      applyPatch(companyId, { deleteAnalysisId: id }).then(() => undefined),
  };
};
