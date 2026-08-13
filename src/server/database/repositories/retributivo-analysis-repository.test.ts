import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { DEFAULT_SETTINGS, STORAGE_SCHEMA_VERSION } from "@/features/registro-retributivo/settings/defaults";
import type { AnalysisResult, StoredAnalysis } from "@/features/registro-retributivo/types";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import {
  createRetributivoAnalysisRepository,
  createRetributivoSettingsRepository,
  createRetributivoStateRepository,
} from "@/server/database/repositories/retributivo-analysis-repository";
import type { CompanyId } from "@/types/workspace";

const databases: DatabaseSync[] = [];

const emptyResult: AnalysisResult = {
  summary: {
    generatedAt: "2026-08-13T00:00:00.000Z",
    pdfsAnalyzed: 1,
    pdfsFailed: 0,
    uniquePeople: 0,
    peopleWithDifferences: 0,
    totalSalaryDifference: 0,
    totalSalaryComplementDifference: 0,
    totalExtraSalaryDifference: 0,
    totalGlobalDifference: 0,
    conceptsUnmapped: 0,
    internalExcelDifferences: 0,
    groupingDifferences: 0,
    tolerance: 1,
  },
  payrollRecords: [],
  registroEmployees: [],
  people: [],
  normalizedVsReal: [],
  concepts: [],
  unmappedConcepts: [],
  ignoredConcepts: [],
  groupings: [],
  internalExcelChecks: [],
  conceptMap: [],
  excludedEmployeeIdsApplied: [],
  errors: [],
  criteria: [],
};

const sampleAnalysis = (id: string): StoredAnalysis => ({
  id,
  schemaVersion: STORAGE_SCHEMA_VERSION,
  createdAt: "2026-08-13T10:00:00.000Z",
  registroFileName: "registro.xlsx",
  pdfCount: 2,
  result: emptyResult,
  config: {
    tolerance: 1,
    enableAI: false,
    aiModel: DEFAULT_SETTINGS.aiModel,
    thresholds: {
      reviewThreshold: DEFAULT_SETTINGS.reviewThreshold,
      incidentThreshold: DEFAULT_SETTINGS.incidentThreshold,
    },
  },
});

const createRepository = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  const { company } = bootstrapDatabase(database);
  databases.push(database);
  return {
    database,
    companyId: company.id as CompanyId,
    analyses: createRetributivoAnalysisRepository(database),
    settings: createRetributivoSettingsRepository(database),
    state: createRetributivoStateRepository(database),
  };
};

const insertCompany = (database: DatabaseSync, id: string, name: string): CompanyId => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO companies (id, name, short_name, icon, color, society_code, created_at, updated_at) VALUES (?, ?, ?, 'building', 'blue', NULL, ?, ?)",
    )
    .run(id, name, name, timestamp, timestamp);
  return id;
};

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

describe("retributivo repositories", () => {
  it("isolates analyses and settings by company", async () => {
    const { database, companyId, analyses, settings, state } = createRepository();
    const otherCompanyId = insertCompany(database, "company-other", "Otra empresa");

    await state.applyPatch(companyId, {
      settings: { ...DEFAULT_SETTINGS, defaultTolerance: 7 },
      analysis: sampleAnalysis("analysis-a"),
      activeAnalysisId: "analysis-a",
    });

    const first = state.snapshot(companyId);
    const second = state.snapshot(otherCompanyId);

    expect(first.settings.defaultTolerance).toBe(7);
    expect(first.analyses).toHaveLength(1);
    expect(first.activeAnalysisId).toBe("analysis-a");
    expect(second.settings).toEqual(DEFAULT_SETTINGS);
    expect(second.analyses).toHaveLength(0);
    expect(second.activeAnalysisId).toBeNull();
    expect(analyses.getAnalysis(otherCompanyId, "analysis-a")).toBeUndefined();
    expect(settings.loadSettings(otherCompanyId)).toEqual(DEFAULT_SETTINGS);
  });

  it("applies a composite patch in one write and refuses cross-company active ids", async () => {
    const { database, companyId, state } = createRepository();
    const otherCompanyId = insertCompany(database, "company-other", "Otra empresa");
    await state.saveAnalysis(otherCompanyId, sampleAnalysis("analysis-b"));

    await expect(
      state.saveActiveAnalysisId(companyId, "analysis-b"),
    ).rejects.toThrow(/no pertenece/);

    await state.applyPatch(companyId, {
      analysis: sampleAnalysis("analysis-a"),
      activeAnalysisId: "analysis-a",
    });
    await state.deleteAnalysis(companyId, "analysis-a");

    const snapshot = state.snapshot(companyId);
    expect(snapshot.analyses).toHaveLength(0);
    expect(snapshot.activeAnalysisId).toBeNull();
    expect(state.snapshot(otherCompanyId).analyses).toHaveLength(1);
  });
});
