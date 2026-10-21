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
        return values[0] === node.object
          ? [{ ID_T3: node.object, ID_NODE: node.node, ID_TI: node.ti }]
          : [];
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
    expect(result.warnings.some((warning) => warning.includes("Faltan nodos"))).toBe(true);
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

  it("recorre nodos hermanos de APPLYTABLE, herencia y objetos externos con ciclos", async () => {
    const auxiliary = "SCO_APPLYVAL_CALEN";
    const names = [
      "SCO_INTERMEDIATE_NODE_CALENDAR",
      "SCO_V_ROLE",
      "SCO_WC_VALUES",
      "SCO_V_COUNTRY",
      "SCO_H_WCENTER",
      "SSP_WC_DIRECCION",
    ];
    const definitions: Record<string, Row[]> = {
      M4RCH_NODES: [
        { ID_T3: node.object, ID_NODE: node.node, ID_TI: node.ti },
        ...names.map((name) => ({ ID_T3: auxiliary, ID_NODE: name, ID_TI: name })),
        { ID_T3: "HELPER", ID_NODE: "MORE", ID_TI: "HELPER_TI" },
        { ID_T3: "OTHER_CONSUMER", ID_NODE: "UNRELATED", ID_TI: "SCO_V_ROLE" },
      ],
      M4RCH_TIS: [
        { ID_TI: "SCO_V_ROLE", ID_TI_BASE: "ROLE_BASE", ID_READ_OBJECT: "ROLE_VALUES" },
        { ID_TI: "ROLE_BASE", ID_TI_BASE: "SCO_V_ROLE" },
      ],
      M4RCH_RULES3: [
        {
          ID_TI: node.ti,
          ID_ITEM: "CARGA",
          SOURCE_CODE: `${auxiliary}!SCO_INTERMEDIATE_NODE_CALENDAR.APPLY()`,
        },
        { ID_TI: node.ti, ID_ITEM: "GENERADIAS", SOURCE_CODE: "LOAD_BLK()" },
        { ID_TI: "SSE_BUSCA_CALENDARIO", ID_ITEM: "BUSQUEDA", SOURCE_CODE: "CALENDAR()" },
        { ID_TI: "SCO_INTERMEDIATE_NODE_CALENDAR", ID_ITEM: "APPLY", SOURCE_CODE: "APPLYTABLE()" },
        { ID_TI: "ROLE_BASE", ID_ITEM: "LOOKUP", SOURCE_CODE: "HELPER!MORE.READ()" },
        { ID_TI: "HELPER_TI", ID_ITEM: "BACK", SOURCE_CODE: `${node.object}!SSE_FESTIVOS.CARGA()` },
      ],
      M4RCH_RULES: [
        {
          ID_TI: "SCO_INTERMEDIATE_NODE_CALENDAR",
          ID_ITEM: "APPLYTABLE",
          IS_METARULE: 1,
          ID_METHOD: "APPLYTABLE",
        },
      ],
      M4RCH_ITEMS: [{ ID_TI: node.ti, ID_TI_USED: "SSE_BUSCA_CALENDARIO" }],
      M4RDC_LOGIC_OBJECT: [
        { ID_OBJECT: "SCO_CALENDAR_REP", REAL_NAME: "M4SCO_CALENDAR_REP" },
        { ID_OBJECT: "ROLE_VALUES", REAL_NAME: "M4ROLE_VALUES" },
      ],
      M4RDC_FIELDS: [
        { ID_OBJECT: "SCO_CALENDAR_REP", ID_FIELD: "SCO_DT_DAY", REAL_NAME: "SCO_DT_DAY" },
        { ID_OBJECT: "ROLE_VALUES", ID_FIELD: "SCO_VALUE", REAL_NAME: "SCO_VALUE" },
      ],
      M4RDC_DIMENSIONS: [{ ID_DMD: "DMD_TA", ID_GROUP: "DMD_GROUP_TA" }],
      M4RDC_GROUP_SETTINGS: [{ ID_GROUP: 123 }],
    };
    const schema = Object.entries(definitions).flatMap(([TABLE_NAME, rows]) =>
      [...new Set(rows.flatMap((row) => Object.keys(row)))].map((COLUMN_NAME) => ({
        TABLE_NAME,
        COLUMN_NAME,
        DATA_TYPE: TABLE_NAME === "M4RDC_GROUP_SETTINGS" ? "int" : "varchar",
      })),
    );
    const calls: { statement: string; values: readonly string[] }[] = [];
    const result = await discoverHolidayMetadata(
      async (statement, values = []) => {
        assertReadOnlySql(statement);
        calls.push({ statement, values });
        if (statement.includes("TABLE_NAME LIKE")) return schema;
        if (statement.includes("INFORMATION_SCHEMA.COLUMNS"))
          return [{ TABLE_NAME: values[0], COLUMN_NAME: "ID_ORGANIZATION", DATA_TYPE: "varchar" }];
        const [, table, key] =
          /FROM \[([A-Z_0-9]+)\] WHERE \[([A-Z_0-9]+)\] = @v0/.exec(statement) ?? [];
        return (definitions[table] ?? []).filter((row) => row[key] === values[0]);
      },
      async (object, name) => ({
        ...node,
        object,
        node: name,
        ti: object === node.object ? node.ti : name === "MORE" ? "HELPER_TI" : name,
        readObject:
          object === node.object ? node.readObject : name === "SCO_V_ROLE" ? "ROLE_VALUES" : null,
        table: object === node.object ? node.table : name === "SCO_V_ROLE" ? "M4ROLE_VALUES" : null,
        sentence: object === node.object ? node.sentence : null,
      }),
    );
    expect(result.formatVersion).toBe(2);
    expect(result.objects).toEqual([node.object, auxiliary, "HELPER"]);
    expect(result.counts).toMatchObject({ nodes: 8, objects: 3, tis: 10 });
    expect(result.assignment.missingNodes).toEqual([]);
    expect(result.assignment.dimensionKeys).toContain("M4RDC_DIMENSIONS/ID_DMD/DMD_TA");
    expect(result.physicalColumns.M4ROLE_VALUES).toHaveLength(1);
    expect(result.nativeMethods).toEqual([
      { ti: "SCO_INTERMEDIATE_NODE_CALENDAR", item: "APPLYTABLE", method: "APPLYTABLE" },
    ]);
    expect(result.warnings).toEqual([]);
    expect(new Set(calls.map((call) => JSON.stringify(call))).size).toBe(calls.length);
    for (const { statement } of calls)
      expect(statement).toMatch(/\bFROM\s+(?:\[M4R(?:CH|DC)_|INFORMATION_SCHEMA\.COLUMNS)/i);
    expect(calls.some(({ statement }) => statement.includes("FROM [M4RDC_GROUP_SETTINGS]"))).toBe(
      false,
    );
  });

  it("advierte dependencias externas que exceden el límite sin consultar datos de producto", async () => {
    const result = await discoverHolidayMetadata(
      async (statement, values = []) => {
        if (statement.includes("TABLE_NAME LIKE")) return inventory;
        if (statement.includes("FROM [M4RCH_NODES]") && values[0] === node.object)
          return [{ ID_NODE: node.node, ID_TI: node.ti }];
        if (statement.includes("FROM [M4RCH_RULES3]"))
          return [
            {
              ID_ITEM: "CARGA",
              SOURCE_CODE: Array.from({ length: 25 }, (_, i) => `HELPER_${i}!NODE.RUN()`).join(
                "\n",
              ),
            },
          ];
        return [];
      },
      async () => node,
    );
    expect(result.counts.objects).toBe(20);
    expect(result.warnings.some((warning) => warning.includes("objetos sin extraer"))).toBe(true);
  });
});
