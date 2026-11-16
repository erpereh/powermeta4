import { describe, expect, it, vi } from "vitest";
import { collectReadonlyAudit, type AuditRead } from "../../../scripts/portal/readonly-audit-core";
import {
  stripOuterOrderBy,
  type AuditCacheEntry,
} from "../../../scripts/portal/readonly-audit-model";
import { PORTAL_FEATURES } from "./registry";

function metadataFixture() {
  const names = [
    "M4RCH_NODES",
    "M4RCH_TIS",
    "M4RCH_RULES3",
    ...Array.from({ length: 37 }, (_, i) => `M4RCH_TEST_${i}`),
  ];
  const schema = names.flatMap((name) =>
    ["ID_T3", "ID_TI", "ID_TI_BASE", "ID_NODE", "ID_ITEM"].map((column) => ({
      TABLE_NAME: name,
      COLUMN_NAME: column,
      DATA_TYPE: "varchar",
      CHARACTER_MAXIMUM_LENGTH: 64,
    })),
  );
  let queries = 0;
  let total = 0;
  let inverse = 0;
  const read: AuditRead = async (statement, params = {}) => {
    total++;
    if (statement.includes("INFORMATION_SCHEMA")) return schema;
    queries++;
    if (statement.includes("[M4RCH_NODES]") && statement.includes("WHERE [ID_TI]")) inverse++;
    const values = Object.values(params);
    if (statement.includes("[M4RCH_NODES]") && values.includes("SSE_BFT_EE_BNFT_ELEC"))
      return Array.from({ length: 50 }, (_, i) => ({
        ID_T3: "SSE_BFT_EE_BNFT_ELEC",
        ID_TI: `TI_TEST_${i}`,
        ID_NODE: `NODE_TEST_${i}`,
      }));
    if (statement.includes("[M4RCH_TIS]"))
      return values
        .filter(
          (value): value is string => typeof value === "string" && value.startsWith("TI_TEST_"),
        )
        .map((value) => ({ ID_TI: value, ID_TI_BASE: "TI_BASE_SHARED" }));
    return [];
  };
  return { read, queries: () => queries, total: () => total, inverse: () => inverse };
}

describe("planificación eficiente de metadatos", () => {
  it("resuelve los contratos explícitos de direcciones antes de confirmar candidatos heurísticos", async () => {
    const order: string[] = [];
    const adapter: AuditRead = async (statement, _params, meta) => {
      if (statement.includes("TABLE_CONSTRAINTS")) return [];
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          { TABLE_NAME: "M4RDC_LOGIC_OBJECT", COLUMN_NAME: "ID_OBJECT", DATA_TYPE: "varchar" },
          { TABLE_NAME: "M4RCH_T3S", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" },
        ];
      order.push(meta?.id ?? "unknown");
      return [];
    };
    const feature = {
      ...PORTAL_FEATURES[0],
      id: "empleado.retribucion.certificados",
      sections: [],
    };
    const result = await collectReadonlyAudit([feature], adapter, ["HEURISTIC_OBJECT"]);
    const contract = order.findIndex((id) => id.includes("M4RDC_LOGIC_OBJECT/ID_OBJECT"));
    const heuristic = order.findIndex((id) => id.startsWith("confirm/"));
    expect(contract).toBeGreaterThanOrEqual(0);
    expect(heuristic).toBeGreaterThan(contract);
    expect(result.coverage.visited).toContain("ID_OBJECT/SSP_LG_ENT_ADDRESS");
    expect(result.tasks).toContainEqual({
      id: "ID_OBJECT/SSP_LG_ENT_ADDRESS",
      status: "incomplete",
      code: "DEFINITION_NOT_FOUND",
    });
  });
  it("consolida más de 5000 referencias y recupera la frontera tras una interrupción", async () => {
    const controller = new AbortController();
    const entries = new Map<string, AuditCacheEntry>();
    const adapter: AuditRead = async (statement, params = {}) => {
      if (statement.includes("TABLE_CONSTRAINTS"))
        return [{ TABLE_NAME: "M4RCH_NODES", CONSTRAINT_NAME: "PK_NODES", COLUMN_NAME: "ID_NODE" }];
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          ...["ID_T3", "ID_TI", "ID_NODE"].map((COLUMN_NAME) => ({
            TABLE_NAME: "M4RCH_NODES",
            COLUMN_NAME,
            DATA_TYPE: "varchar",
          })),
          { TABLE_NAME: "M4RCH_TIS", COLUMN_NAME: "ID_TI", DATA_TYPE: "varchar" },
        ];
      if (
        statement.includes("[M4RCH_NODES]") &&
        Object.values(params).includes("SSE_BFT_EE_BNFT_ELEC")
      ) {
        const offset = typeof params.offset === "number" ? params.offset : 0;
        return Array.from({ length: Math.min(2000, Math.max(0, 5005 - offset)) }, (_, index) => ({
          ID_T3: "SSE_BFT_EE_BNFT_ELEC",
          ID_NODE: `NODE_${offset + index}`,
          ID_TI: `TI_${offset + index}`,
        }));
      }
      if (statement.includes("[M4RCH_TIS]"))
        return Object.values(params).flatMap((value) =>
          typeof value === "string" && value.startsWith("TI_") ? [{ ID_TI: value }] : [],
        );
      return [];
    };
    const partial = await collectReadonlyAudit([], adapter, [], {
      signal: controller.signal,
      onBatch: (entry) => {
        entries.set(entry.key, entry);
        if (entry.references.length > 5000) controller.abort();
      },
    });
    expect(partial.coverage.unvisited.length).toBeGreaterThan(5000);
    expect(partial.coverage.unvisited).toContainEqual({ key: "ID_TI", value: "TI_5004" });
    const resumed = await collectReadonlyAudit([], adapter, [], { onSchema: async () => entries });
    expect(resumed.coverage.visited.length).toBeGreaterThan(5000);
    expect(resumed.coverage.visited).toContain("ID_TI/TI_5004");
    expect(resumed.coverage.unvisited).toEqual([]);
    expect(resumed.tasks.some((task) => task.code === "REFERENCE_LIMIT")).toBe(false);
  });
  it("un timeout al confirmar T3 no se convierte en una ausencia cacheada", async () => {
    let confirmations = 0;
    const read: AuditRead = async (statement) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return ["ID_T3", "SOURCE_CODE"].map((column) => ({
          TABLE_NAME: "M4RCH_RULES3",
          COLUMN_NAME: column,
          DATA_TYPE: "varchar",
        }));
      if (statement.startsWith("SELECT ID_T3")) {
        if (++confirmations === 1) throw Object.assign(new Error("private"), { code: "ETIMEOUT" });
        return [{ ID_T3: "RECOVERED_OBJECT" }];
      }
      return [{ ID_T3: "SSE_BFT_EE_BNFT_ELEC", SOURCE_CODE: "RECOVERED_OBJECT!NODE_A()" }];
    };
    const result = await collectReadonlyAudit([], read, ["RECOVERED_OBJECT"]);
    expect(confirmations).toBe(2);
    expect(result.coverage.visited).toContain("ID_T3/RECOVERED_OBJECT");
    expect(result.referencesInRules).toContain("RECOVERED_OBJECT");
  });
  it("deduplica ciclos y referencias compartidas y vincula claves con el esquema", async () => {
    const batches: string[][] = [];
    const read: AuditRead = async (statement, params = {}, meta) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return ["ID_T3", "ID_TI", "ID_TI_BASE"].map((column) => ({
          TABLE_NAME: "M4RCH_TIS",
          COLUMN_NAME: column,
          DATA_TYPE: "varchar",
          CHARACTER_MAXIMUM_LENGTH: 64,
        }));
      if (!statement.includes("[M4RCH_TIS]")) return [];
      expect(meta?.bindings?.v0).toEqual({ type: "varchar", length: 64 });
      const values = Object.values(params).filter(
        (value): value is string => typeof value === "string",
      );
      expect(values.length).toBeLessThanOrEqual(150);
      batches.push(values);
      if (values.includes("SSE_BFT_EE_BNFT_ELEC"))
        return [{ ID_T3: "SSE_BFT_EE_BNFT_ELEC", ID_TI: "CYCLE_A" }];
      if (values.includes("CYCLE_A")) return [{ ID_TI: "CYCLE_A", ID_TI_BASE: "CYCLE_B" }];
      if (values.includes("CYCLE_B")) return [{ ID_TI: "CYCLE_B", ID_TI_BASE: "CYCLE_A" }];
      return [];
    };
    const result = await collectReadonlyAudit([], read);
    expect(batches.filter((batch) => batch.includes("CYCLE_A"))).toHaveLength(1);
    expect(result.coverage.visited.filter((ref) => ref === "ID_TI/CYCLE_A")).toHaveLength(1);
    expect(result.coverage.visited).toContain("ID_TI/CYCLE_B");
  });
  it("conserva 71 referencias con <=150 consultas frente a las 2840 anteriores y sin índice inverso", async () => {
    const fixture = metadataFixture();
    const result = await collectReadonlyAudit([], fixture.read);
    expect(fixture.total()).toBeLessThanOrEqual(150);
    expect(fixture.total()).toBe(120);
    expect(fixture.queries()).toBe(118);
    expect(fixture.inverse()).toBe(0);
    expect(result.coverage.visited).toHaveLength(71);
    expect(result.coverage.visited).toContain("ID_TI/TI_BASE_SHARED");
  });
  it("reproduce la cobertura desde lotes seguros sin volver a consultar sus filas", async () => {
    const entries = new Map<string, AuditCacheEntry>();
    const first = metadataFixture();
    const original = await collectReadonlyAudit([], first.read, [], {
      onSchema: async () => entries,
      onBatch: (entry) => entries.set(entry.key, entry),
    });
    const second = metadataFixture();
    const progress = vi.fn();
    const resumed = await collectReadonlyAudit([], second.read, [], {
      onSchema: async () => entries,
      onProgress: progress,
    });
    expect(second.queries()).toBe(0);
    expect(second.total()).toBe(2);
    expect(resumed.dictionary).toEqual(original.dictionary);
    expect(resumed.coverage).toEqual(original.coverage);
    expect(progress.mock.lastCall?.[0].reused).toBeGreaterThan(0);
  });
  it("pagina sin perder la última clave y enlaza todos los nodos del lote", async () => {
    const read: AuditRead = async (statement, params = {}) => {
      if (statement.includes("TABLE_CONSTRAINTS"))
        return [{ TABLE_NAME: "M4RCH_NODES", CONSTRAINT_NAME: "PK_NODES", COLUMN_NAME: "ID_NODE" }];
      if (statement.includes("INFORMATION_SCHEMA"))
        return ["ID_T3", "ID_NODE", "ID_TI"].map((column) => ({
          TABLE_NAME: "M4RCH_NODES",
          COLUMN_NAME: column,
          DATA_TYPE: "varchar",
        }));
      if (Object.values(params).includes("SSE_BFT_EE_BNFT_ELEC")) {
        const offset = typeof params.offset === "number" ? params.offset : 0;
        return Array.from(
          { length: offset === 0 ? 2000 : offset === 2000 ? 1 : 0 },
          (_, index) => ({
            ID_T3: "SSE_BFT_EE_BNFT_ELEC",
            ID_NODE: `NODE_${offset + index}`,
            ID_TI: `TI_${offset + index}`,
          }),
        );
      }
      return [];
    };
    const result = await collectReadonlyAudit([], read);
    expect(result.dictionary["M4RCH_NODES/ID_T3/SSE_BFT_EE_BNFT_ELEC"]).toHaveLength(2001);
    expect(result.coverage.visited).toContain("ID_TI/TI_2000");
    expect(result.tasks.some((task) => task.code === "NO_STABLE_PAGINATION_KEY")).toBe(false);
  });
  it("difiere una familia después de dos timeouts y no guarda sus fallos como vacíos", async () => {
    const entries: AuditCacheEntry[] = [];
    let failedQueries = 0;
    const candidates = Array.from({ length: 340 }, (_, index) => `OBJECT_${index}`);
    const read: AuditRead = async (statement, params = {}) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return [{ TABLE_NAME: "M4RCH_T3S", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" }];
      if (statement.startsWith("SELECT ID_T3"))
        return Object.values(params).map((id) => ({ ID_T3: id }));
      failedQueries++;
      throw Object.assign(new Error("PRIVATE_SECRET"), { code: "ETIMEOUT" });
    };
    const result = await collectReadonlyAudit([], read, candidates, {
      onBatch: (entry) => {
        entries.push(entry);
      },
    });
    // Un timeout del contrato prioritario y dos lotes ya activos en la oleada
    // siguiente. La familia se difiere antes de iniciar el tercer lote.
    expect(failedQueries).toBe(3);
    expect(result.tasks.some((task) => task.code === "FAMILY_DEFERRED")).toBe(true);
    expect(entries.every((entry) => entry.rows.length > 0)).toBe(true);
    expect(JSON.stringify(result)).not.toContain("PRIVATE_SECRET");
  });
  it("no abandona las referencias de un lote detenido por el presupuesto", async () => {
    const control = new AbortController();
    const read: AuditRead = async (statement) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return [{ TABLE_NAME: "M4RCH_NODES", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" }];
      control.abort();
      return [];
    };
    const result = await collectReadonlyAudit([], read, [], { signal: control.signal });
    expect(result.coverage.unvisited.length).toBeGreaterThan(0);
    expect(result.tasks.some((task) => task.code === "INTERRUPTED")).toBe(true);
  });
});

describe("sondeos compartidos y normalización SQL", () => {
  it("solo atribuye error a consultas ejecutadas y conserva el motivo de las diferidas", async () => {
    let executions = 0;
    const adapter: AuditRead = async (statement, _params, meta) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          { TABLE_NAME: "M4ORO_EMPLEADOS", COLUMN_NAME: "ID_EMPLEADO", DATA_TYPE: "varchar" },
        ];
      if (meta?.kind === "private") return [{ ID_EMPLEADO: "PRIVATE_MEMORY_ONLY" }];
      if (meta?.kind === "probe") {
        executions++;
        throw Object.assign(new Error("PRIVATE_SERVER_MESSAGE"), { number: 207 });
      }
      return [];
    };
    const original = PORTAL_FEATURES.find(
      (feature) => feature.id === "empleado.talento.formacion-realizada",
    );
    if (!original) throw new Error("Missing query fixture");
    const result = await collectReadonlyAudit([original], adapter);
    expect(executions).toBe(1);
    expect(result.probes.find((probe) => probe.organization === "CYC")).toMatchObject({
      status: "error",
      code: "SQL_207",
    });
    for (const organization of ["IBER", "COLL"])
      expect(result.probes.find((probe) => probe.organization === organization)).toMatchObject({
        status: "incomplete",
        code: "FAMILY_DEFERRED",
        records: null,
      });
    expect(JSON.stringify(result)).not.toMatch(/PRIVATE_MEMORY_ONLY|PRIVATE_SERVER_MESSAGE/);
  });
  it("ejecuta cada sentencia una vez por sociedad y conserva todas sus pantallas", async () => {
    const counts: string[] = [];
    const cache: AuditCacheEntry[] = [];
    const read: AuditRead = async (statement, _params, meta) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          { TABLE_NAME: "M4ORO_EMPLEADOS", COLUMN_NAME: "ID_EMPLEADO", DATA_TYPE: "varchar" },
        ];
      if (meta?.kind === "private") return [{ ID_EMPLEADO: "PRIVATE_EMPLOYEE_ID" }];
      if (statement.includes("COUNT_BIG")) {
        counts.push(meta?.id ?? "");
        return [{ TOTAL: "12" }];
      }
      return [];
    };
    const result = await collectReadonlyAudit(PORTAL_FEATURES, read, [], {
      onBatch: (entry) => {
        cache.push(entry);
      },
    });
    const uses = PORTAL_FEATURES.flatMap((feature) =>
      (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult" && section.consult.query ? [section.consult.query] : [],
      ),
    );
    const unique = new Set(uses.map((query) => query.scope + stripOuterOrderBy(query.statement)))
      .size;
    expect(counts).toHaveLength(unique * 3);
    expect(result.probes).toHaveLength(uses.length * 3);
    expect(result.probes.every((probe) => probe.records === 12)).toBe(true);
    expect(JSON.stringify([result, cache])).not.toContain("PRIVATE_EMPLOYEE_ID");
  });
  it.each([
    [
      "SELECT ROW_NUMBER() OVER (ORDER BY X) AS N FROM T ORDER BY N",
      "SELECT ROW_NUMBER() OVER (ORDER BY X) AS N FROM T",
    ],
    [
      "SELECT * FROM (SELECT TOP 1 X FROM T ORDER BY X) R ORDER BY X",
      "SELECT * FROM (SELECT TOP 1 X FROM T ORDER BY X) R",
    ],
    ["SELECT 'ORDER BY private' AS X FROM T", "SELECT 'ORDER BY private' AS X FROM T"],
  ])("retira solo la cláusula exterior de %s", (input, expected) =>
    expect(stripOuterOrderBy(input)).toBe(expected),
  );
});
