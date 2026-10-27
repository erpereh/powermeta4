import { DatabaseSync, backup } from "node:sqlite";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { runMigrations } from "../migrations";
import { bootstrapDatabase } from "../bootstrap";
import { reconciliationRepository } from "./payroll-reconciliation-repository";
import { demoReport } from "@/lib/payroll-reconciliation/demo";
import { snapshot } from "@/lib/payroll-reconciliation/snapshot";
import { DEFAULT_PARAMETERS, type Dossier } from "@/lib/payroll-reconciliation/types";
import { reconcile } from "@/lib/payroll-reconciliation/engine";

describe("reconciliation persistence", () => {
  it("resumes snapshots, isolates scope, rejects lost updates, survives backup, and deletes", async () => {
    const db = new DatabaseSync(":memory:");
    db.exec("PRAGMA foreign_keys=ON");
    runMigrations(db);
    const { company } = bootstrapDatabase(db),
      scope = { companyId: company.id, society: "DEBUG" },
      repo = reconciliationRepository(db);
    const base = {
      period: "2026-10",
      current: snapshot(demoReport("2026-10"), true),
      previous: null,
      sources: [],
      parameters: DEFAULT_PARAMETERS,
    };
    const dossier: Dossier = {
      ...base,
      id: "dossier-test",
      title: "Prueba",
      demo: true,
      revision: 1,
      createdAt: "2026-10-01",
      updatedAt: "2026-10-01",
      annotations: [],
      result: reconcile(base),
    };
    const directory = await mkdtemp(path.join(os.tmpdir(), "cuadre-backup-"));
    try {
      const saved = await repo.save(scope, dossier, null);
      expect(repo.get(scope, saved.id).current.hash).toBe(saved.current.hash);
      expect(repo.list(scope)).toHaveLength(1);
      expect(repo.list({ ...scope, society: "CYC" })).toEqual([]);
      expect(() => repo.get({ ...scope, society: "CYC" }, saved.id)).toThrow();
      const next = await repo.save(scope, { ...saved, title: "Actualizado" }, 1);
      await expect(repo.save(scope, saved, 1)).rejects.toMatchObject({ status: 409 });
      const file = path.join(directory, "snapshot.db");
      await backup(db, file);
      const restored = new DatabaseSync(file);
      try {
        expect(reconciliationRepository(restored).get(scope, saved.id).title).toBe("Actualizado");
        expect(restored.prepare("PRAGMA integrity_check").get()?.integrity_check).toBe("ok");
      } finally {
        restored.close();
      }
      await expect(repo.remove(scope, saved.id, 1)).rejects.toMatchObject({ status: 409 });
      await repo.remove(scope, saved.id, next.revision);
      expect(repo.list(scope)).toEqual([]);
    } finally {
      db.close();
      await rm(directory, { recursive: true, force: true });
    }
  });
});
