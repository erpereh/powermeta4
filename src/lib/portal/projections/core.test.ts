import { describe, expect, it } from "vitest";
import {
  buildProjectionReport,
  projectionGraphTotal,
  projectionHeaderYear,
  projectionNumber,
  projectionQuinquennial,
} from "./core";
import { projectionEmployeeSelection, projectionYearSelection } from "./types";
import { projectionDebugData } from "./debug.fixture";
import type { PortalPerson } from "../identity-core";
import type { PortalSqlRow } from "../peoplenet/query";

const person: PortalPerson = {
  employeeId: "0007",
  fullName: "Persona de prueba",
  job: null,
  unit: null,
  workCenter: null,
  hireDate: null,
  managerId: null,
};

const at = (group: string, subgroup: string, rows: PortalSqlRow[]): PortalSqlRow[] =>
  rows.map((row) => ({ CSP_ID_GRUPO: group, CSP_ID_SUBGR: subgroup, ...row }));

const today = new Date("2026-10-19");

describe("informe de proyecciones", () => {
  it("valida el ejercicio y la matrícula sin aceptar parámetros duplicados ni expresiones", () => {
    expect(projectionYearSelection(undefined)).toEqual({ status: "latest" });
    expect(projectionYearSelection("2026")).toEqual({ status: "selected", year: 2026 });
    for (const value of ["2026; DROP", "2026.0", "", "2100", ["2025", "2026"]])
      expect(projectionYearSelection(value)).toEqual({ status: "invalid" });
    expect(projectionEmployeeSelection(undefined)).toEqual({ status: "own" });
    expect(projectionEmployeeSelection(" 0042 ")).toEqual({ status: "team", employeeId: "0042" });
    for (const value of ["", "00 42", "0042'--", "x".repeat(21), ["1", "2"]])
      expect(projectionEmployeeSelection(value)).toEqual({ status: "invalid" });
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
  it("agrupa los conceptos de cada persona por grupo y subgrupo, sin una plantilla de etiquetas", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA02: "Revisión", CSP_REAL: 1, PAGA_TOT: 999999 },
      concepts: [
        ...at("RD", "SC", [
          { CSP_ORDEN: 2, ID_ITEM: "Concepto nuevo", PAGA01: -5, TOTAL: -5 },
          { CSP_ORDEN: 1, ID_ITEM: "Salario Base", PAGA01: 250, PAGA02: null, TOTAL: 250 },
        ]),
        ...at("RD", "CC", [{ CSP_ORDEN: 3, ID_ITEM: "Plus propio", PAGA01: 10, TOTAL: 10 }]),
        ...at("RI", "RFX", [{ CSP_ORDEN: 4, ID_ITEM: "Guardería", PAGA01: 30, TOTAL: 30 }]),
        ...at("RET", "RET", [{ CSP_ORDEN: 5, ID_ITEM: "Técnico", PAGA01: 1, TOTAL: 1 }]),
      ],
    });
    expect(report?.pays.map((pay) => [pay.label, pay.kind])).toEqual([
      ["Enero", "actual"],
      ["Revisión", "projected"],
    ]);
    expect(report?.sections.map((section) => section.id)).toEqual(["fixed", "flexible"]);
    expect(report?.sections[0].rows.map((row) => row.label)).toEqual([
      "Salario Base",
      "Concepto nuevo",
      "Complementos compañía",
      "Plus propio",
      "Total Retribución fija",
    ]);
    // Como getRows/getTable: pagas vacías a 0 y conceptos en valor absoluto.
    expect(report?.sections[0].rows[1]).toMatchObject({ amounts: [5, 0], total: 5 });
    expect(report?.sections[0].rows.at(-1)).toMatchObject({ amounts: [255, 0], total: 255 });
    expect(report?.sections[1].rows.map((row) => row.label)).toEqual(["Guardería"]);
    expect(report?.direct).toEqual([{ id: "fixed", label: "RBFA", value: 255 }]);
  });
  it("compone las gráficas como printGrafDoughnut, con datos de la persona", () => {
    const report = projectionDebugData({ status: "latest" }, "full").report;
    expect(report?.direct.map((segment) => segment.id)).toEqual(["fixed", "variable", "social"]);
    expect(report?.direct[0].value).toBe(53730);
    expect(report?.direct[1].value).toBe(9200);
    expect(report?.direct[2].value).toBeCloseTo(16110.6, 2);
    expect(report?.compensation.map((segment) => segment.id)).toEqual([
      "fixed",
      "variable",
      "meals",
      "life",
      "accidents",
      "health",
      "ppse",
      "defined",
      "christmas",
      "children",
      "consumption",
      "training",
    ]);
    const value = (id: string) => report?.compensation.find((segment) => segment.id === id)?.value;
    expect(value("fixed")).toBe(51900);
    expect(value("variable")).toBe(8500);
    expect(value("meals")).toBe(180);
    expect(value("health")).toBe(810);
    expect(value("ppse")).toBe(3650);
    expect(value("defined")).toBe(1125);
    expect(report?.flexible).toEqual([{ id: "flexible:0", label: "Seguro Médico", value: 74.28 }]);
    expect(value("consumption")).toBe(100);
    expect(report?.direct.map((segment) => segment.label)).toEqual([
      "RBFA",
      "R. Variable",
      "Coste Empresa SS",
    ]);
    expect(report?.history).toHaveLength(5);
  });
  it("un ejercicio cerrado usa los totales anuales y la manutención de comidas", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2025, PAGA01: "Enero", PAGA02: "Febrero", CSP_REAL: 1 },
      concepts: [
        ...at("RQ", "RA", [
          { ID_ITEM: "Retrib anual año actual", PAGA01: 4000, TOTAL: 48000 },
          { ID_ITEM: "Retrib variable año actual", PAGA01: 0, TOTAL: 6000 },
        ]),
        ...at("RI", "CO", [{ ID_ITEM: "Compensacion Comida", PAGA01: 90, TOTAL: 1080 }]),
        ...at("RI", "RFX", [{ ID_ITEM: "Manutención", PAGA01: 90, PAGA02: 95, TOTAL: 185 }]),
      ],
    });
    expect(report?.compensation).toEqual([
      { id: "fixed", label: "RBFA", value: 48000 },
      { id: "variable", label: "Target R. Variable", value: 6000 },
      { id: "meals", label: "Manutención por J.P.", value: 1080 },
    ]);
  });
  it("sin bloque RQ/RA no inventa la retribución anual, y la barra de ese año vale 0", () => {
    const header = { ANIO: 2026, PAGA01: "Enero", CSP_REAL: 1 };
    const report = buildProjectionReport({ person, today, header, concepts: [] });
    expect(report?.compensation).toEqual([]);
    expect(projectionQuinquennial(header, [], today)).toEqual({ fixed: 0, variable: 0 });
  });
  it("toma el nombre de la cabecera de la proyección como el original", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2026, STD_N_FIRST_NAME: "Ana", STD_N_FAMILY_NAME_1: "Pérez" },
      concepts: [],
    });
    expect(report?.employee.name).toBe("Ana Pérez");
  });
  it("el PPSE y la aportación definida reproducen el JSON de CARGA", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA02: "Febrero", CSP_REAL: 2 },
      concepts: [
        ...at("PPSE", "PPSE", [
          { ID_ITEM: "Aportación Ordinaria PPSE", TOTAL: 100 },
          { ID_ITEM: "Aportación Extraordinaria PPSE", TOTAL: 200 },
          { ID_ITEM: "Aportación PPSE Ordinaria Acumulada", TOTAL: 500 },
        ]),
        ...at("PPSE", "APOR", [
          { ID_ITEM: "Aportación definida", PAGA01: 90, PAGA02: 120, TOTAL: 210 },
          { ID_ITEM: "aportacion total", PAGA01: 900, PAGA02: 1020, TOTAL: 1920 },
        ]),
      ],
    });
    const ppse = report?.sections.find((section) => section.id === "ppse")?.rows;
    expect(ppse?.map((row) => [row.amounts, row.total])).toEqual([
      [[100, 200], 300],
      [[500, 0], 500],
      [[600, 200], 800],
    ]);
    const defined = report?.sections.find((section) => section.id === "defined")?.rows;
    expect(defined?.map((row) => row.total)).toEqual([120, 1020, 1140]);
    expect(report?.compensation.find((segment) => segment.id === "ppse")?.value).toBe(300);
    expect(report?.compensation.find((segment) => segment.id === "defined")?.value).toBe(120);
  });
  it("conserva una paga sin etiqueta y rechaza un contador real inválido", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2026, PAGA01: "Enero", PAGA03: "Marzo", CSP_REAL: 99 },
      concepts: at("RD", "SC", [
        { ID_ITEM: "Salario Base", PAGA01: 100, PAGA02: 200, PAGA03: 300, TOTAL: 600 },
      ]),
    });
    expect(report?.pays.map((pay) => pay.id)).toEqual(["PAGA01", "PAGA02", "PAGA03"]);
    expect(report?.pays[1].label).toContain("Nombre no informado");
    expect(report?.sections[0].rows[0].amounts).toEqual([100, 200, 300]);
    expect(report?.pays.every((pay) => pay.kind === "unknown")).toBe(true);
  });
  it("marca la muestra parcial y los totales incompletos y permite una muestra vacía", () => {
    const partial = projectionDebugData({ status: "latest" }, "partial").report;
    expect(partial?.direct.find((segment) => segment.id === "social")?.value).toBeNull();
    expect(partial?.pays.every((pay) => pay.kind === "unknown")).toBe(true);
    expect(projectionGraphTotal(partial?.compensation ?? [])).toBeNull();
    expect(projectionDebugData({ status: "latest" }, "empty").report).toBeNull();
    expect(projectionDebugData({ status: "selected", year: 2025 }, "full").report?.year).toBe(2025);
    expect(projectionDebugData({ status: "latest" }, "full", "0042")).toMatchObject({
      member: { id: "0042" },
      report: { employee: { id: "0042" } },
    });
  });

  it("reproduce el orden de processTable, sin grupos técnicos ni conceptos exclusivos del gráfico", () => {
    const report = projectionDebugData({ status: "latest" }, "full").report;
    expect(report?.sections.map((section) => section.id)).toEqual([
      "fixed",
      "variable",
      "target",
      "social",
      "meals",
      "capital",
      "premiums",
      "aid",
      "ppse",
      "defined",
      "flexible",
      "christmas",
      "training",
    ]);
    const fixed = report?.sections[0];
    expect(fixed?.rows.filter((row) => row.kind === "section").map((row) => row.label)).toEqual([
      "Complementos compañía",
      "Complemento funcional",
    ]);
    expect(fixed?.rows.at(-1)?.total).toBe(53730);
    expect(
      report?.sections
        .filter((section) => section.placement === "benefits")
        .map((section) => section.id),
    ).toEqual(["capital", "premiums", "aid"]);
    const concepts = report?.sections.flatMap((section) => section.rows.map((row) => row.label));
    expect(concepts).not.toContain("Seguro Salud Empresa");
    expect(concepts).not.toContain("Manutención");
    expect(concepts).not.toContain("Cotización del empleado de demostración");
    expect(concepts).not.toContain("Revisión de convenio de demostración");
    expect(report?.sections.find((section) => section.id === "capital")?.rows.at(-1)?.total).toBe(
      188000,
    );
    // val_especie se pinta en orden inverso y su total suma los importes anuales.
    expect(
      report?.sections.find((section) => section.id === "premiums")?.rows.map((row) => row.label),
    ).toEqual(["Prima Anual Seg. Vida", "Prima Anual Seg. Accidente", "Total"]);
    expect(report?.sections.find((section) => section.id === "premiums")?.rows.at(-1)?.total).toBe(
      888,
    );
    expect(report?.sections.find((section) => section.id === "defined")?.rows.at(-1)?.total).toBe(
      8725,
    );
  });

  it("separa Navidad y vehículo de las primas y la muestra de 20 pagas conserva sus valores", () => {
    const report = buildProjectionReport({
      person,
      today,
      header: { ANIO: 2026 },
      concepts: at("RI", "VE", [
        { CSP_ORDEN: 1, ID_ITEM: "Prima Anual Seg. Vida", TOTAL: 100 },
        { CSP_ORDEN: 2, ID_ITEM: "Prima de demostración adicional", TOTAL: 50 },
        { CSP_ORDEN: 3, ID_ITEM: "Seguro Salud Empresa", TOTAL: 120 },
        { CSP_ORDEN: 4, ID_ITEM: "Lote Navidad", TOTAL: 30 },
        { CSP_ORDEN: 5, ID_ITEM: "Vehículo compañía", TOTAL: 90 },
      ]),
    });
    expect(report?.sections.map((section) => section.id)).toEqual([
      "premiums",
      "christmas",
      "vehicle",
    ]);
    expect(report?.sections[0].rows.map((row) => row.label)).toEqual([
      "Prima de demostración adicional",
      "Prima Anual Seg. Vida",
      "Total",
    ]);
    expect(report?.sections[0].rows.at(-1)?.total).toBe(150);
    const many = projectionDebugData({ status: "latest" }, "many-pays").report;
    expect(many?.pays).toHaveLength(20);
    expect(many?.sections[0].rows.some((row) => row.label.includes("disponibilidad"))).toBe(true);
    expect(many?.direct[0].value).toBe(53730);
  });
});
