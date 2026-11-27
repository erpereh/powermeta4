import { describe, expect, it } from "vitest";

import { assertReadOnlySql } from "@/lib/portal/peoplenet/query";

import modelJson from "../hire/direct/model.generated.json";
import type { HireModel } from "../hire/direct/model-types";
import { NEXT_ROLE_SQL, ROLE_SQL, sliceSql } from "./current";
import { JOB_CHANGE_HISTORY_SPECS } from "./fields";
import { JOB_CHANGE_TABLES, missingJobChangeTables } from "./model";
import { parseJobChangeRequest } from "./request";

const model = modelJson as HireModel;

describe("lecturas del cambio de puesto", () => {
  it("solo consulta: todas las sentencias pasan el guardián de solo lectura", () => {
    for (const statement of [ROLE_SQL, NEXT_ROLE_SQL, ...JOB_CHANGE_HISTORY_SPECS.map(sliceSql)]) {
      expect(() => assertReadOnlySql(statement)).not.toThrow();
    }
  });

  it("filtra siempre por la sociedad y la matrícula del servidor", () => {
    for (const statement of [ROLE_SQL, NEXT_ROLE_SQL, ...JOB_CHANGE_HISTORY_SPECS.map(sliceSql)]) {
      expect(statement).toContain("@organization");
      expect(statement).toContain("@employeeId");
    }
    for (const spec of JOB_CHANGE_HISTORY_SPECS) {
      expect(sliceSql(spec)).toContain("SCO_OR_HR_ROLE = @role");
    }
  });

  it("usa las columnas que el modelo del alta define para cada tabla", () => {
    for (const spec of JOB_CHANGE_HISTORY_SPECS) {
      const table = model.tables[spec.table];
      expect(table, `${spec.table} no está en el modelo del alta`).toBeDefined();
      const names = (table?.columns ?? []).map((column) => column.name);
      for (const column of [
        spec.hrColumn,
        spec.startColumn,
        spec.endColumn,
        spec.valueColumn,
        ...(spec.reasonColumn ? [spec.reasonColumn] : []),
        ...(spec.keyColumns ?? []),
        ...(spec.extraColumns ?? []),
      ]) {
        expect(names, `${spec.table}.${column}`).toContain(column);
      }
      expect(names).toContain("SCO_OR_HR_ROLE");
    }
  });

  it("el modelo del alta cubre todas las tablas del cambio", () => {
    expect(missingJobChangeTables()).toEqual([]);
    expect(JOB_CHANGE_TABLES).toContain("M4SCO_HR_ROLE");
  });
});

describe("parseJobChangeRequest", () => {
  const valid = {
    employeeId: "1023",
    cutDate: "2026-12-01",
    reason: "001",
    positionChoice: "job",
    occupationType: "hours",
    occupationHours: "",
    occupationEjc: "",
    occupationHeadcount: "",
    values: { job: "RDCS", category: "I3" },
  };

  it("acepta una petición válida y recorta los valores", () => {
    const parsed = parseJobChangeRequest({ ...valid, employeeId: " 1023 " });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value.employeeId).toBe("1023");
    expect(parsed.value.values).toEqual({ job: "RDCS", category: "I3" });
  });

  it("rechaza matrículas y fechas que no lo son", () => {
    expect(parseJobChangeRequest({ ...valid, employeeId: "' OR 1=1" }).ok).toBe(false);
    expect(parseJobChangeRequest({ ...valid, cutDate: "2026-13-99x" }).ok).toBe(false);
    expect(parseJobChangeRequest("texto").ok).toBe(false);
  });

  it("descarta los campos que no son editables y los valores vacíos", () => {
    const parsed = parseJobChangeRequest({
      ...valid,
      values: { job: "RDCS", categoryGroup: "99", costCenter: "123456", category: "" },
    });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value.values).toEqual({ job: "RDCS" });
  });

  it("no acepta valores con caracteres de inyección", () => {
    expect(parseJobChangeRequest({ ...valid, values: { job: "RDCS'; DROP" } }).ok).toBe(false);
  });
});
