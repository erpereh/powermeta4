import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import { describe, expect, test } from "vitest";

import { DEFAULT_SETTINGS, STORAGE_SCHEMA_VERSION } from "@/features/registro-retributivo/settings/defaults";
import { runRetributivoAnalyze } from "@/features/registro-retributivo/server/run-analyze";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createRetributivoStateRepository } from "@/server/database/repositories/retributivo-analysis-repository";

const fuentesDir = path.join(process.cwd(), "fuentes");
const excelPath = path.join(fuentesDir, "IBER_Registro_Retributivo_(heredado)_20260630100936.xlsx");
const pdfDir = path.join(fuentesDir, "RECIBOS_IBER_2025");
const hasLocalFuentes = existsSync(excelPath) && existsSync(pdfDir);

describe.skipIf(!hasLocalFuentes)("local fuentes analyze", () => {
  test(
    "analyzes the local IBER receipts and registro without PII assertions",
    async () => {
      const pdfPaths = readdirSync(pdfDir)
        .filter((name) => name.toLowerCase().endsWith(".pdf"))
        .sort()
        .map((name) => path.join(pdfDir, name));
      expect(pdfPaths.length).toBe(21);

      const formData = new FormData();
      formData.append(
        "registro",
        new File([readFileSync(excelPath)], path.basename(excelPath), {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }),
      );
      formData.append("tolerance", "1");
      formData.append("reviewThreshold", "1");
      formData.append("incidentThreshold", "50");
      formData.append("conceptMap", "[]");
      formData.append("excludedEmployeeIds", "[]");
      for (const pdfPath of pdfPaths) {
        formData.append(
          "pdfs",
          new File([readFileSync(pdfPath)], path.basename(pdfPath), { type: "application/pdf" }),
        );
      }

      const result = await runRetributivoAnalyze(formData);
      expect(result.people.length).toBeGreaterThan(0);
      expect(result.summary.uniquePeople).toBeGreaterThan(0);
      expect(result.summary.pdfsAnalyzed).toBeGreaterThan(0);
      expect(result.internalExcelChecks.length).toBeGreaterThan(0);
      expect((result.groupedExcelSheets ?? []).length).toBeGreaterThan(0);

      const database = new DatabaseSync(":memory:");
      database.exec("PRAGMA foreign_keys = ON");
      runMigrations(database);
      const { company } = bootstrapDatabase(database);
      try {
        const state = createRetributivoStateRepository(database);
        await state.applyPatch(company.id, {
          analysis: {
            id: "fuentes-local",
            schemaVersion: STORAGE_SCHEMA_VERSION,
            createdAt: result.summary.generatedAt,
            registroFileName: path.basename(excelPath),
            pdfCount: pdfPaths.length,
            result,
            config: {
              tolerance: 1,
              enableAI: false,
              aiModel: DEFAULT_SETTINGS.aiModel,
              thresholds: { reviewThreshold: 1, incidentThreshold: 50 },
            },
          },
          activeAnalysisId: "fuentes-local",
        });
        const snapshot = state.snapshot(company.id);
        expect(snapshot.analyses).toHaveLength(1);
        expect(snapshot.activeAnalysisId).toBe("fuentes-local");
        expect(snapshot.analyses[0]?.result.people.length).toBe(result.people.length);
        expect(snapshot.analyses[0]?.result.summary.pdfsAnalyzed).toBe(result.summary.pdfsAnalyzed);
      } finally {
        database.close();
      }
    },
    120_000,
  );
});
