import "server-only";
import type { DatabaseSync } from "node:sqlite";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { ReconciliationError } from "@/lib/payroll-reconciliation/import";
import type { Dossier, DossierSummary } from "@/lib/payroll-reconciliation/types";
import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

export type ReconciliationScope = { companyId: string; society: string };
export function reconciliationRepository(database: DatabaseSync = getDatabase()) {
  const get = (scope: ReconciliationScope, id: string): Dossier => {
    const row = database
      .prepare(
        "SELECT payload_json FROM payroll_reconciliation_dossiers WHERE id = ? AND company_id = ? AND society_code = ?",
      )
      .get(id, scope.companyId, scope.society);
    if (!row || typeof row.payload_json !== "string")
      throw new ReconciliationError("No se encuentra el expediente en la sociedad activa.", 404);
    return JSON.parse(row.payload_json) as Dossier;
  };
  const list = (scope: ReconciliationScope): DossierSummary[] =>
    database
      .prepare(
        "SELECT id, title, period, revision, updated_at, payload_json ->> '$.demo' AS demo FROM payroll_reconciliation_dossiers WHERE company_id = ? AND society_code = ? ORDER BY updated_at DESC",
      )
      .all(scope.companyId, scope.society)
      .map((row) => ({
        id: String(row.id),
        title: String(row.title),
        period: String(row.period),
        revision: Number(row.revision),
        updatedAt: String(row.updated_at),
        demo: Boolean(row.demo),
      }));
  const save = async (
    scope: ReconciliationScope,
    dossier: Dossier,
    expectedRevision: number | null,
  ): Promise<Dossier> =>
    withRepositoryWrite(() =>
      withTransaction(database, () => {
        const timestamp = new Date().toISOString();
        const saved = {
          ...dossier,
          revision: expectedRevision === null ? 1 : expectedRevision + 1,
          updatedAt: timestamp,
        };
        if (expectedRevision === null) {
          database
            .prepare(
              "INSERT INTO payroll_reconciliation_dossiers (id, company_id, society_code, period, title, revision, payload_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            )
            .run(
              saved.id,
              scope.companyId,
              scope.society,
              saved.period,
              saved.title,
              saved.revision,
              JSON.stringify(saved),
              saved.createdAt,
              timestamp,
            );
        } else {
          const result = database
            .prepare(
              "UPDATE payroll_reconciliation_dossiers SET title = ?, revision = ?, payload_json = ?, updated_at = ? WHERE id = ? AND company_id = ? AND society_code = ? AND revision = ?",
            )
            .run(
              saved.title,
              saved.revision,
              JSON.stringify(saved),
              timestamp,
              saved.id,
              scope.companyId,
              scope.society,
              expectedRevision,
            );
          if (!result.changes)
            throw new ReconciliationError(
              "El expediente ha cambiado. Vuelve a abrirlo antes de guardar.",
              409,
            );
        }
        return saved;
      }),
    );
  const remove = async (scope: ReconciliationScope, id: string, revision: number): Promise<void> =>
    withRepositoryWrite(() => {
      const result = database
        .prepare(
          "DELETE FROM payroll_reconciliation_dossiers WHERE id = ? AND company_id = ? AND society_code = ? AND revision = ?",
        )
        .run(id, scope.companyId, scope.society, revision);
      if (!result.changes)
        throw new ReconciliationError(
          "El expediente no existe o ha cambiado. Actualiza la lista.",
          409,
        );
    });
  return { get, list, save, remove };
}
