import { describe, expect, it } from "vitest";
import { discoverHolidayMetadata } from "../../../../scripts/portal/holidays-discovery";
import type { ResolvedNode, Row } from "../../../../scripts/portal/meta4-dictionary";
import { assertReadOnlySql } from "../peoplenet/query";

const node: ResolvedNode = {
  object: "SSE_CARGA_FESTIVOS",
  node: "SSE_FESTIVOS",
  ti: "SSE_FESTIVOS",
  isRoot: true,
  readObject: "SCO_CALENDAR_REP",
  table: "M4SCO_CALENDAR_REP",
  sentence: "SELECT A.SCO_DT_DAY FROM &SCO_CALENDAR_REP A",
  connectors: [],
  sentenceParams: [],
};
const inventory = [
  ["M4RCH_NODES", "ID_T3"],
  ["M4RCH_NODES", "ID_NODE"],
  ["M4RCH_NODES", "ID_TI"],
  ["M4RCH_TIS", "ID_TI"],
  ["M4RCH_TIS", "ID_TI_BASE"],
  ["M4RCH_RULES3", "ID_TI"],
  ["M4RCH_RULES3", "ID_ITEM"],
  ["M4RCH_RULES3", "SOURCE_CODE"],
  ["M4RDC_LOGIC_OBJECT", "ID_OBJECT"],
  ["M4RDC_LOGIC_OBJECT", "REAL_NAME"],
  ["M4RDC_FIELDS", "ID_OBJECT"],
  ["M4RDC_FIELDS", "ID_FIELD"],
  ["M4RDC_FIELDS", "REAL_NAME"],
].map(([TABLE_NAME, COLUMN_NAME]) => ({ TABLE_NAME, COLUMN_NAME, DATA_TYPE: "varchar" }));

describe("extracción de festivos solo del diccionario", () => {
  it("conserva CARGA y reglas heredadas sin ejecutar LN4 ni leer tablas de producto", async () => {
    const calls: string[] = [];
    const read = async (statement: string, values: readonly string[] = []): Promise<Row[]> => {
      assertReadOnlySql(statement);
      calls.push(statement);
      if (statement.includes("TABLE_NAME LIKE")) return inventory;
      if (statement.includes("FROM [M4RCH_NODES]"))
        return [{ ID_T3: node.object, ID_NODE: node.node, ID_TI: node.ti }];
      if (statement.includes("FROM [M4RCH_TIS]"))
        return [
          { ID_TI: values[0], ID_TI_BASE: values[0] === "SSE_FESTIVOS" ? "BASE_FESTIVOS" : null },
        ];
      if (statement.includes("FROM [M4RCH_RULES3]"))
        return [
          {
            ID_TI: values[0],
            ID_ITEM: "CARGA",
            SOURCE_CODE: "DESTROYBLOCK()\nSSE_BUSCA_CALENDARIO.CARGA()\nFILTRO = 'festivos'",
          },
        ];
      if (statement.includes("FROM [M4RDC_LOGIC_OBJECT]"))
        return [{ ID_OBJECT: values[0], REAL_NAME: "M4SCO_CALENDAR_REP" }];
      return [];
    };
    const result = await discoverHolidayMetadata(read, async () => node);
    expect(result.counts).toMatchObject({ nodes: 1, tis: 2 });
    expect(result.metadata["M4RCH_RULES3/ID_TI/BASE_FESTIVOS"][0].SOURCE_CODE).toContain(
      "DESTROYBLOCK()",
    );
    expect(result.warnings).toEqual([]);
    for (const statement of calls) {
      expect(statement).not.toMatch(/\bFROM\s+\[?M4SCO_/i);
      expect(statement).toMatch(/\bFROM\s+(?:\[?M4R(?:CH|DC)_|INFORMATION_SCHEMA\.COLUMNS)/i);
      expect(statement).not.toMatch(/\b(?:INSERT|UPDATE|DELETE|EXEC|CREATE|ALTER|DROP)\b/i);
    }
    expect(calls.some((statement) => statement.includes("= @v0"))).toBe(true);
  });
  it("una extracción sin nodos queda advertida, no equivale a no tener festivos", async () => {
    const result = await discoverHolidayMetadata(
      async () => [],
      async () => node,
    );
    expect(result.warnings).toContain("No se encontraron nodos de SSE_CARGA_FESTIVOS.");
  });
  it("rechaza nombres ajenos al diccionario e identificadores inyectados", async () => {
    await expect(
      discoverHolidayMetadata(
        async () => [
          { TABLE_NAME: "M4SCO_CALENDAR_REP", COLUMN_NAME: "ID_TI", DATA_TYPE: "varchar" },
        ],
        async () => node,
      ),
    ).rejects.toThrow("Tabla ajena");
    await expect(
      discoverHolidayMetadata(
        async () => [
          { TABLE_NAME: "M4RCH_BAD]; DROP TABLE X", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" },
        ],
        async () => node,
      ),
    ).rejects.toThrow("Identificador");
  });
  it("señala truncamientos sin ocultarlos como extracción completa", async () => {
    const result = await discoverHolidayMetadata(
      async (statement) => {
        if (statement.includes("TABLE_NAME LIKE")) return inventory;
        if (statement.includes("FROM [M4RCH_RULES3]"))
          return Array.from({ length: 1001 }, () => ({ ID_ITEM: "CARGA" }));
        if (statement.includes("FROM [M4RCH_NODES]")) return [{ ID_NODE: "SSE_FESTIVOS" }];
        return [];
      },
      async () => node,
    );
    expect(result.warnings.some((warning) => warning.includes("truncada a 1000"))).toBe(true);
    expect(result.metadata["M4RCH_RULES3/ID_TI/SSE_FESTIVOS"]).toHaveLength(1000);
  });
});
