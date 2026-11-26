import "server-only";

import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import {
  type BreakdownHistory,
  type BreakdownHistoryEntry,
  type BreakdownPreview,
  GROUPINGS,
  type GroupingId,
  type SavedBreakdown,
} from "@/features/retributive-breakdown/contract";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

type Books = ReadonlyMap<GroupingId, Uint8Array<ArrayBuffer>>;
type Row = Record<string, unknown>;
const listColumns = "id, created_at, period_from, period_to, employee_rows, group_count, active";

function entryFromRow(row: Row): BreakdownHistoryEntry {
  return {
    id: String(row.id),
    createdAt: String(row.created_at),
    period: { from: String(row.period_from), to: String(row.period_to) },
    employeeRows: Number(row.employee_rows),
    groupCount: Number(row.group_count),
  };
}

export function createBreakdownRepository(database: DatabaseSync = getDatabase()) {
  const write = <T>(operation: () => T) =>
    withRepositoryWrite(async () => withTransaction(database, operation));

  function clearActive(companyId: CompanyId) {
    database
      .prepare(
        "UPDATE retributive_breakdown_analyses SET active = 0 WHERE company_id = ? AND active = 1",
      )
      .run(companyId);
  }

  function list(companyId: CompanyId): BreakdownHistory {
    const rows = database
      .prepare(
        `SELECT ${listColumns} FROM retributive_breakdown_analyses
         WHERE company_id = ? ORDER BY created_at DESC, id DESC`,
      )
      .all(companyId);
    const active = rows.find((row) => row.active === 1);
    return { entries: rows.map(entryFromRow), activeAnalysisId: active ? String(active.id) : null };
  }

  function get(companyId: CompanyId, id: string): SavedBreakdown | undefined {
    const row = database
      .prepare(
        `SELECT ${listColumns}, result_json FROM retributive_breakdown_analyses
         WHERE company_id = ? AND id = ?`,
      )
      .get(companyId, id);
    if (typeof row?.result_json !== "string") return undefined;
    const result: BreakdownPreview = JSON.parse(row.result_json);
    return { entry: entryFromRow(row), result };
  }

  function save(companyId: CompanyId, result: BreakdownPreview, books: Books) {
    const entry: BreakdownHistoryEntry = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      period: result.period,
      employeeRows: result.employeeRows,
      groupCount: result.groupings.reduce((count, grouping) => count + grouping.groups.length, 0),
    };
    return write(() => {
      clearActive(companyId);
      database
        .prepare(
          `INSERT INTO retributive_breakdown_analyses
           (id, company_id, created_at, period_from, period_to, employee_rows, group_count, result_json, active)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`,
        )
        .run(
          entry.id,
          companyId,
          entry.createdAt,
          entry.period.from,
          entry.period.to,
          entry.employeeRows,
          entry.groupCount,
          JSON.stringify(result),
        );
      const insert = database.prepare(
        "INSERT INTO retributive_breakdown_books (analysis_id, grouping_id, bytes) VALUES (?, ?, ?)",
      );
      for (const { file } of GROUPINGS) {
        const bytes = books.get(file);
        if (!bytes?.length) throw new Error("Falta un Excel generado del análisis.");
        insert.run(entry.id, file, bytes);
      }
      return { entry, result };
    });
  }

  function activate(companyId: CompanyId, id: string | null) {
    return write(() => {
      const analysis = id === null ? null : get(companyId, id);
      if (analysis === undefined) return undefined;
      clearActive(companyId);
      if (id !== null) {
        database
          .prepare(
            "UPDATE retributive_breakdown_analyses SET active = 1 WHERE company_id = ? AND id = ?",
          )
          .run(companyId, id);
      }
      return analysis;
    });
  }

  function readBooks(companyId: CompanyId, id: string, grouping?: GroupingId) {
    const rows = database
      .prepare(
        `SELECT books.grouping_id, books.bytes
         FROM retributive_breakdown_books AS books
         JOIN retributive_breakdown_analyses AS analyses ON analyses.id = books.analysis_id
         WHERE analyses.company_id = ? AND analyses.id = ?
         AND (? IS NULL OR books.grouping_id = ?)`,
      )
      .all(companyId, id, grouping ?? null, grouping ?? null);
    const books = new Map<GroupingId, Uint8Array<ArrayBuffer>>();
    for (const { file } of GROUPINGS) {
      const row = rows.find((row) => row.grouping_id === file);
      if (row?.bytes instanceof Uint8Array) books.set(file, new Uint8Array(row.bytes));
    }
    return books;
  }

  function remove(companyId: CompanyId, id?: string) {
    if (id !== undefined) {
      return write(
        () =>
          database
            .prepare("DELETE FROM retributive_breakdown_analyses WHERE company_id = ? AND id = ?")
            .run(companyId, id).changes > 0,
      );
    }
    return write(
      () =>
        database
          .prepare("DELETE FROM retributive_breakdown_analyses WHERE company_id = ?")
          .run(companyId).changes > 0,
    );
  }

  return { list, get, save, activate, readBooks, remove };
}
