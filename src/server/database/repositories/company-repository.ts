import "server-only";

import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
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
          "SELECT id, name, short_name, icon, color FROM companies ORDER BY created_at ASC, id ASC",
        )
        .all() as CompanyRow[]
    ).map(mapCompany);

  const getById = (companyId: string): Company => {
    const row = database
      .prepare("SELECT id, name, short_name, icon, color FROM companies WHERE id = ?")
      .get(companyId) as CompanyRow | undefined;
    if (!row) throw new Error("La empresa no existe.");
    return mapCompany(row);
  };

  const createCompany = async (input: {
    id: string;
    name: string;
    shortName: string;
    icon: CompanyIconName;
    color: CompanyColorName;
    clientMutationId?: string;
  }): Promise<Company> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            input.id,
            input.name.trim(),
            input.shortName.trim(),
            input.icon,
            input.color,
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

  return {
    count: (): number => list().length,
    list,
    getFirst: (): Company | null => list()[0] ?? null,
    getById,
    createCompany,
    createLocalCompany: () =>
      createCompany({
        id: randomUUID(),
        name: "Empresa local",
        shortName: "Local",
        icon: "building",
        color: "blue",
      }),
  };
};
