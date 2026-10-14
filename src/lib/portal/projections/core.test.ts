import { describe, expect, it } from "vitest";
import {
  buildProjectionReport,
  projectionGraphTotal,
  projectionHeaderYear,
  projectionNumber,
} from "./core";
import { projectionYearSelection } from "./types";
import { projectionDebugData } from "./debug.fixture";
import type { PortalPerson } from "../identity-core";

const person: PortalPerson = {
  employeeId: "0007",
  fullName: "Persona de prueba",
  job: null,
  unit: null,
  workCenter: null,
  hireDate: null,
  managerId: null,
};

describe("informe de proyecciones", () => {
  it("valida el ejercicio sin aceptar parámetros duplicados ni expresiones", () => {
    expect(projectionYearSelection(undefined)).toEqual({ status: "latest" });
    expect(projectionYearSelection("2026")).toEqual({ status: "selected", year: 2026 });
    for (const value of ["2026; DROP", "2026.0", "", "2100", ["2025", "2026"]])
      expect(projectionYearSelection(value)).toEqual({ status: "invalid" });
  });
  it("no convierte valores desconocidos en ceros ni interpreta PAGA_TOT como dinero", () => {
    for (const value of [null, undefined, "", "  ", true, "No informado", Infinity])
      expect(projectionNumber(value)).toBeNull();
    expect(projectionNumber("0")).toBe(0);
    expect(
      projectionHeaderYear({ PAGA01: "Enero 2026", PAGA02: "Revisión 2025", PAGA_TOT: "Total" }),
    ).toBe(2026);
    expect(projectionHeaderYear({ PAGA_TOT: "2026" })).toBeNull();
  });
  it("conserva el orden, conceptos desconocidos, signos, revisiones y ausencias", () => {
    const report = buildProjectionReport({
      person,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA02: "Revisión", CSP_REAL: 1, PAGA_TOT: 999999 },
      concepts: [
        { CSP_ORDEN: 2, ID_ITEM: "Concepto nuevo", CSP_ID_GRUPO: "OTRO", PAGA01: -5, TOTAL: -5 },
        { CSP_ORDEN: 1, ID_ITEM: "Salario Base", PAGA01: 250, PAGA02: null, TOTAL: 250 },
      ],
    });
    expect(report?.pays.map((pay) => [pay.label, pay.kind])).toEqual([
      ["Enero", "actual"],
      ["Revisión", "projected"],
    ]);
    expect(report?.sections.flatMap((section) => section.rows.map((row) => row.label))).toEqual([
      "Salario Base",
      "Concepto nuevo",
    ]);
    expect(report?.sections[1].rows[0]).toMatchObject({ amounts: [-5, null], total: -5 });
    expect(report?.direct[0].value).toBeNull();
  });
  it("mantiene separadas las cifras de haberes, objetivos y compensación, sin los 100 euros fijos", () => {
    const report = projectionDebugData({ status: "latest" }, "full").report;
    expect(report?.direct[0].value).toBe(53730);
    expect(report?.direct[1].value).toBe(9200);
    expect(report?.compensation.find((segment) => segment.id === "fixed")?.value).toBe(51900);
    expect(report?.compensation.find((segment) => segment.id === "variable")?.value).toBe(8500);
    expect(report?.compensation.some((segment) => segment.id === "consumption")).toBe(false);
    expect(report?.notices.some((notice) => notice.includes("Ayuda de consumo"))).toBe(true);
    expect(report?.history).toHaveLength(5);
  });
  it("aplica el límite del PPSE sin inventar aportaciones faltantes", () => {
    const report = buildProjectionReport({
      person,
      header: { ANIO: 2026 },
      concepts: [
        { ID_ITEM: "Aportación Ordinaria PPSE", TOTAL: 100 },
        { ID_ITEM: "Aportación Extraordinaria PPSE", TOTAL: 200 },
        { ID_ITEM: "Aportación PPSE Ordinaria Acumulada", TOTAL: 500 },
      ],
    });
    const rows = report?.sections.find((section) => section.id === "ppse")?.rows;
    expect(rows?.[0]).toMatchObject({ amounts: [100, 100], total: 200 });
    expect(rows?.[1]).toMatchObject({ amounts: [500, null], total: null });
    expect(rows?.[2].total).toBeNull();
  });
  it("conserva una paga sin etiqueta y rechaza un contador real inválido", () => {
    const report = buildProjectionReport({
      person,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA03: "Marzo", CSP_REAL: 99 },
      concepts: [{ ID_ITEM: "Salario Base", PAGA01: 100, PAGA02: 200, PAGA03: 300, TOTAL: 600 }],
    });
    expect(report?.pays.map((pay) => pay.id)).toEqual(["PAGA01", "PAGA02", "PAGA03"]);
    expect(report?.pays[1].label).toContain("Nombre no informado");
    expect(report?.sections[0].rows[0].amounts).toEqual([100, 200, 300]);
    expect(report?.pays.every((pay) => pay.kind === "unknown")).toBe(true);
  });
  it("conserva el total de la tabla de aportación definida separado de su valoración gráfica", () => {
    const report = buildProjectionReport({
      person,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA02: "Febrero", CSP_REAL: 2 },
      concepts: [{ ID_ITEM: "Aportación definida", PAGA01: 90, PAGA02: 120, TOTAL: 210 }],
    });
    expect(report?.sections.find((section) => section.id === "defined")?.rows[0].total).toBe(210);
    expect(report?.compensation.find((segment) => segment.id === "defined")?.value).toBe(120);
  });
  it("marca la muestra parcial y los totales incompletos y permite una muestra vacía", () => {
    const partial = projectionDebugData({ status: "latest" }, "partial").report;
    expect(partial?.direct[2].value).toBeNull();
    expect(partial?.pays.every((pay) => pay.kind === "unknown")).toBe(true);
    expect(projectionGraphTotal(partial?.compensation ?? [])).toBeNull();
    expect(projectionDebugData({ status: "latest" }, "empty").report).toBeNull();
    expect(projectionDebugData({ status: "selected", year: 2025 }, "full").report?.year).toBe(2025);
  });
});
