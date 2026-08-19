import "server-only";

import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { isMeta4Society, type Meta4Society } from "@/lib/meta4/societies";
import type { Company, CompanyColorName, CompanyIconName } from "@/types/workspace";

import { getDatabase } from "../client";
import { runIdempotent } from "../idempotency";
import { withTransaction } from "../transaction";

type CompanyRow = {
  id: unknown;
  name: unknown;
  short_name: unknown;
  icon: unknown;
  color: unknown;
  society_code?: unknown;
};

const mapCompany = (row: CompanyRow): Company => ({
  id: String(row.id),
  name: String(row.name),
  shortName: String(row.short_name),
  icon: row.icon === "briefcase" || row.icon === "layers" ? row.icon : "building",
  color: row.color === "purple" || row.color === "green" ? row.color : "blue",
});

const now = () => new Date().toISOString();

export type CompanyRepository = ReturnType<typeof createCompanyRepository>;

export const createCompanyRepository = (database: DatabaseSync = getDatabase()) => {
  const list = (): Company[] =>
    (
      database
        .prepare(
          "SELECT id, name, short_name, icon, color, society_code FROM companies ORDER BY created_at ASC, id ASC",
        )
        .all() as CompanyRow[]
    ).map(mapCompany);

  const getById = (companyId: string): Company => {
    const row = database
      .prepare("SELECT id, name, short_name, icon, color, society_code FROM companies WHERE id = ?")
      .get(companyId) as CompanyRow | undefined;
    if (!row) throw new Error("La empresa no existe.");
    return mapCompany(row);
  };

  const getBySocietyCode = (society: Meta4Society): Company | null => {
    const row = database
      .prepare(
        "SELECT id, name, short_name, icon, color, society_code FROM companies WHERE society_code = ?",
      )
      .get(society) as CompanyRow | undefined;
    return row ? mapCompany(row) : null;
  };

  const getSocietyCode = (companyId: string): Meta4Society | null => {
    const row = database
      .prepare("SELECT society_code FROM companies WHERE id = ?")
      .get(companyId) as { society_code?: unknown } | undefined;
    return isMeta4Society(row?.society_code) ? row.society_code : null;
  };

  const createCompany = async (input: {
    id: string;
    name: string;
    shortName: string;
    icon: CompanyIconName;
    color: CompanyColorName;
    societyCode?: Meta4Society | null;
    clientMutationId?: string;
  }): Promise<Company> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO companies (id, name, short_name, icon, color, society_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            input.id,
            input.name.trim(),
            input.shortName.trim(),
            input.icon,
            input.color,
            input.societyCode ?? null,
            timestamp,
            timestamp,
          );
        return getById(input.id);
      };
      return input.clientMutationId
        ? runIdempotent(database, {
            clientMutationId: input.clientMutationId,
            operation: "company.create",
            resourceType: "company",
            resourceId: input.id,
            execute: operation,
          })
        : withTransaction(database, operation);
    });

  const ensureSocietyCompanySync = (society: Meta4Society): Company => {
    const existing = getBySocietyCode(society);
    if (existing) return existing;
    const timestamp = now();
    const id = randomUUID();
    database
      .prepare(
        "INSERT INTO companies (id, name, short_name, icon, color, society_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      )
      .run(id, society, society, "building", "blue", society, timestamp, timestamp);
    return getById(id);
  };

  return {
    count: (): number => list().length,
    list,
    getFirst: (): Company | null => list()[0] ?? null,
    getById,
    getBySocietyCode,
    getSocietyCode,
    createCompany,
    ensureSocietyCompanySync,
    ensureSocietyCompany: async (society: Meta4Society): Promise<Company> =>
      withRepositoryWrite(async () =>
        withTransaction(database, () => ensureSocietyCompanySync(society)),
      ),
    createLocalCompany: () =>
      createCompany({
        id: randomUUID(),
        name: "Empresa local",
        shortName: "Local",
        icon: "building",
        color: "blue",
        societyCode: null,
      }),
  };
};

/** Synchronous helper for use inside an open SQLite transaction. */
export const ensureSocietyCompanyInTransaction = (
  database: DatabaseSync,
  society: Meta4Society,
): Company => createCompanyRepository(database).ensureSocietyCompanySync(society);
