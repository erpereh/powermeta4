import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { CompanyId, ToolVisit } from "@/types/workspace";

import { getDatabase } from "../client";
import { runIdempotent } from "../idempotency";
import { withTransaction } from "../transaction";

export const createActivityRepository = (database: DatabaseSync = getDatabase()) => ({
  listRecent: (companyId: CompanyId, limit = 8): ToolVisit[] =>
    (
      database
        .prepare(
          "SELECT tool_id, created_at FROM tool_activity WHERE company_id = ? ORDER BY created_at DESC LIMIT ?",
        )
        .all(companyId, Math.max(1, Math.min(limit, 100))) as Array<{
        tool_id: unknown;
        created_at: unknown;
      }>
    ).map((row) => ({ toolId: String(row.tool_id), visitedAt: String(row.created_at) })),
  recordVisit: async (input: {
    companyId: CompanyId;
    toolId: string;
    clientMutationId?: string;
  }): Promise<void> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        if (!database.prepare("SELECT 1 FROM companies WHERE id = ?").get(input.companyId)) {
          throw new Error("La empresa no existe.");
        }
        database
          .prepare(
            "INSERT INTO tool_activity (id, company_id, tool_id, action_id, metadata_json, created_at) VALUES (?, ?, ?, 'visit', '{}', ?)",
          )
          .run(crypto.randomUUID(), input.companyId, input.toolId, new Date().toISOString());
      };
      if (input.clientMutationId) {
        runIdempotent(database, {
          clientMutationId: input.clientMutationId,
          operation: "tool.activity",
          resourceType: "tool_activity",
          resourceId: input.toolId,
          execute: operation,
        });
      } else {
        withTransaction(database, operation);
      }
    }),
});
