import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { z } from "zod";
import { HOLIDAY_COLUMNS, HOLIDAY_SQL } from "../registry/sql/holidays";
import { assertReadOnlySql } from "../peoplenet/query";

describe("contrato físico de festivos", () => {
  it("cada columna usada está acreditada por el descubrimiento de la VM", () => {
    const raw: unknown = JSON.parse(
      readFileSync(
        path.resolve(
          __dirname,
          "../../../../docs/portal/implementacion/festivos-descubrimiento.json",
        ),
        "utf8",
      ),
    );
    const dump = z
      .object({
        formatVersion: z.literal(2),
        physicalColumns: z.record(z.array(z.object({ COLUMN_NAME: z.string() }))),
      })
      .parse(raw);
    for (const [table, columns] of Object.entries(HOLIDAY_COLUMNS)) {
      const present = new Set(dump.physicalColumns[table]?.map((column) => column.COLUMN_NAME));
      for (const column of columns) expect(present.has(column), `${table}.${column}`).toBe(true);
    }
  });
  it("solo SELECT parametrizadas y todos los accesos a datos aislados por sociedad", () => {
    for (const statement of Object.values(HOLIDAY_SQL)) {
      assertReadOnlySql(statement);
      const dataAliases = [
        ...statement.matchAll(
          /(?:FROM|JOIN) (M4SCO_\w+|STD_WORK_LOCATION|STD_REL_WORK_LOC|M4SSP_WORKLOC_ADDR)\s+([A-Z])\b/g,
        ),
      ];
      for (const [, , alias] of dataAliases)
        expect(statement).toContain(`${alias}.ID_ORGANIZATION = @organization`);
      expect(statement).toContain("@employeeId");
    }
    expect(HOLIDAY_SQL.calendar).toContain("@roleId");
    expect(HOLIDAY_SQL.calendar).toContain("@correctionDate");
    expect(HOLIDAY_SQL.calendar).not.toMatch(/TOP\s+1\b|ORDER BY .*ID_PRIORITY|SCO_ID_DAYCALEN_TY/);
  });
});
