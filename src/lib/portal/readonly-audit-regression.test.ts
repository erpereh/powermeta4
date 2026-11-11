import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { collectReadonlyAudit } from "../../../scripts/portal/readonly-audit-engine";
import { auditBindingIssue } from "../../../scripts/portal/readonly-audit-bindings";
import { createAuditExecutor } from "../../../scripts/portal/readonly-audit-executor";
import {
  AuditFailure,
  digest,
  emptyAuditState,
  stripOuterOrderBy,
  type AuditCacheEntry,
  type AuditRead,
  type AuditState,
} from "../../../scripts/portal/readonly-audit-model";
import {
  assertSafeMetadataEntry,
  safeMetadataText,
  sanitizeMetadataRows,
} from "../../../scripts/portal/readonly-audit-safety";
import {
  AUDIT_FILES,
  AuditStore,
  auditArtifacts,
  verifyAuditArtifacts,
  type AuditPublication,
} from "../../../scripts/portal/readonly-audit-store";
import { runReadonlyAudit, type AuditRunnerDeps } from "../../../scripts/portal/readonly-audit";
import { PORTAL_FEATURES } from "./registry";
import { SOAP_CATALOG } from "./soap/catalog.generated";
import {
  loadReadonlyVmEvidence,
  readonlyEvidenceReview,
  vmEvidenceLabel,
} from "../../../scripts/portal/readonly-vm-evidence";
import { readonlyMatrix } from "../../../scripts/portal/readonly-matrix";

const roots: string[] = [];
const temp = () => {
  const root = mkdtempSync(path.join(tmpdir(), "powermeta-audit-regression-"));
  roots.push(root);
  return root;
};
afterEach(() => {
  vi.restoreAllMocks();
  for (const root of roots.splice(0)) {
    if (
      !path.resolve(root).startsWith(`${path.resolve(tmpdir())}${path.sep}`) ||
      !path.basename(root).startsWith("powermeta-audit-regression-")
    )
      throw new Error("Unsafe test path");
    rmSync(root, { recursive: true, force: true });
  }
});
const code = "LOAD('SSE_BFT_EE_BNFT_ELEC', 'PRIVATE_PERSON', 987654321)";
const schema = [
  ["M4RCH_NODES", "ID_T3"],
  ["M4RCH_NODES", "ID_NODE"],
  ["M4RCH_NODES", "ID_TI"],
  ["M4RCH_RULES3", "ID_TI"],
  ["M4RCH_RULES3", "ID_ITEM"],
  ["M4RCH_RULES3", "SOURCE_CODE"],
].map(([TABLE_NAME, COLUMN_NAME]) => ({
  TABLE_SCHEMA: "dbo",
  TABLE_NAME,
  COLUMN_NAME,
  DATA_TYPE: "varchar",
  CHARACTER_MAXIMUM_LENGTH: 64,
}));
const read: AuditRead = async (statement, params = {}) => {
  if (statement.includes("TABLE_CONSTRAINTS")) return [];
  if (statement.includes("INFORMATION_SCHEMA.COLUMNS")) return schema;
  if (statement.startsWith("SELECT ID_T3")) return [{ ID_T3: "SSE_BFT_EE_BNFT_ELEC" }];
  if (statement.includes("[M4RCH_NODES]") && Object.values(params).includes("SSE_BFT_EE_BNFT_ELEC"))
    return [
      { ID_T3: "SSE_BFT_EE_BNFT_ELEC", ID_NODE: "NODE_A", ID_TI: "TI_A" },
      { ID_T3: "SSE_H_HR_KNC_LVL", ID_NODE: "SSE_H_HR_KNC_EXP", ID_TI: "SSE_H_HR_KNC_EXP" },
    ];
  if (statement.includes("[M4RCH_RULES3]") && Object.values(params).includes("TI_A"))
    return [{ ID_TI: "TI_A", ID_ITEM: "RULE_A", SOURCE_CODE: code }];
  if (statement.includes("TOP 1")) return [{ ID_EMPLEADO: "PRIVATE_EMPLOYEE" }];
  if (statement.includes("COUNT_BIG")) return [{ TOTAL: 2 }];
  return [];
};
const info = (runId = "00000000-0000-4000-8000-000000000000"): AuditPublication => ({
  runId,
  startedAt: Date.now(),
  status: "partial",
  revision: null,
  sources: [],
  registry: [],
  metrics: [],
  queriesStarted: 0,
  active: 0,
  reused: 0,
  tasks: [],
  soap: [],
});

describe("regresiones de la ejecución VM de 2026-11-11", () => {
  it("conserva solo símbolos aprobados usados y los recupera sin el contexto global", () => {
    const used = new Set<string>();
    const rows = sanitizeMetadataRows(
      [{ ID_TI: "TI_A", SOURCE_CODE: code, PASSWORD: "PRIVATE_PASSWORD" }],
      new Set(["SSE_BFT_EE_BNFT_ELEC", "UNUSED_SYMBOL"]),
      used,
    );
    expect([...used]).toEqual(["SSE_BFT_EE_BNFT_ELEC"]);
    const entry: AuditCacheEntry = {
      key: digest("batch"),
      rows,
      symbols: [...used],
      references: [],
      physical: [],
      ruleReferences: [],
    };
    expect(() => assertSafeMetadataEntry(entry)).not.toThrow();
    expect(safeMetadataText(String(rows[0].SOURCE_CODE), new Set(entry.symbols))).toBe(
      rows[0].SOURCE_CODE,
    );
    const independent = emptyAuditState();
    independent.dictionary.batch = rows;
    independent.metadataSymbols = [...used];
    expect(() =>
      verifyAuditArtifacts(new Map(Object.entries(auditArtifacts(independent, info())))),
    ).not.toThrow();
    const root = temp();
    const first = new AuditStore(path.join(root, "cache"), path.join(root, "output"), () => {});
    const fingerprints = [digest("code"), digest("schema"), digest("context")] as const;
    first.resume(...fingerprints);
    first.append(entry);
    first.close();
    const second = new AuditStore(path.join(root, "cache"), path.join(root, "output"), () => {});
    expect(second.resume(...fingerprints).get(entry.key)?.rows).toEqual(rows);
    second.close();
    expect(JSON.stringify(rows)).not.toMatch(/PRIVATE_PERSON|PRIVATE_PASSWORD|987654321/);
  });
  it("reproduce el lote real entre oleadas y lo publica/reutiliza con su contexto mínimo", async () => {
    const entries = new Map<string, AuditCacheEntry>();
    const original = await collectReadonlyAudit([], read, [], {
      onBatch: (entry) => {
        assertSafeMetadataEntry(entry);
        entries.set(entry.key, entry);
      },
    });
    const rule = [...entries.values()].find((entry) =>
      entry.rows.some((row) => row.ID_ITEM === "RULE_A"),
    );
    expect(rule?.symbols).toContain("SSE_BFT_EE_BNFT_ELEC");
    expect(original.tasks.some((task) => task.code === "UNSAFE_CHECKPOINT")).toBe(false);
    expect(original.coverage.seedObjects).not.toContain("SSE_H_HR_KNC_EXP");
    expect(original.coverage.visited).toContain("ID_TI/SSE_H_HR_KNC_EXP");
    const replay = await collectReadonlyAudit([], read, [], { onSchema: async () => entries });
    expect(replay.dictionary).toEqual(original.dictionary);
    expect(() =>
      verifyAuditArtifacts(new Map(Object.entries(auditArtifacts(replay, info())))),
    ).not.toThrow();
    expect(JSON.stringify(replay)).not.toMatch(/PRIVATE_PERSON|PRIVATE_EMPLOYEE|987654321/);
  });
  it("excluye un lote rechazado, conserva sus referencias pendientes y continúa sondeos", async () => {
    const feature = PORTAL_FEATURES.find(
      (entry) => entry.id === "empleado.talento.formacion-realizada",
    )!;
    const result = await collectReadonlyAudit([feature], read, [], {
      onBatch: (entry) => {
        if (entry.rows.some((row) => row.ID_ITEM === "RULE_A"))
          throw new AuditFailure("UNSAFE_CHECKPOINT");
      },
    });
    expect(result.dictionary["M4RCH_RULES3/ID_TI/TI_A"]).toBeUndefined();
    expect(result.coverage.unvisited).toContainEqual({ key: "ID_TI", value: "TI_A" });
    expect(
      result.tasks.some(
        (task) => task.code === "UNSAFE_CHECKPOINT" && task.id.includes("M4RCH_RULES3"),
      ),
    ).toBe(true);
    expect(result.probes.some((probe) => probe.status === "ok" && probe.records === 2)).toBe(true);
    expect(JSON.stringify(result)).not.toMatch(/PRIVATE_PERSON|PRIVATE_EMPLOYEE/);
  });
  it("un fallo de almacenamiento conserva el esquema ya publicado y no se oculta como rechazo de lote", async () => {
    let partial: AuditState = emptyAuditState();
    await expect(
      collectReadonlyAudit([], read, [], {
        onState: (state) => {
          partial = state;
        },
        onSchema: async () => {
          throw new AuditFailure("DISK_FAILURE");
        },
      }),
    ).rejects.toThrow("DISK_FAILURE");
    expect(partial.contracts.M4RCH_NODES).toContainEqual({
      table: "M4RCH_NODES",
      schema: "dbo",
      column: "ID_T3",
      type: "varchar",
      length: 64,
    });
    expect(partial.coverage.unvisited.length).toBeGreaterThan(0);
  });
  it("rechaza una publicación insegura antes de sustituir una generación válida", () => {
    const root = temp();
    const store = new AuditStore(path.join(root, "cache"), path.join(root, "output"), () => {});
    store.publish(emptyAuditState(), info(store.runId));
    const previous = readFileSync(path.join(root, "output/manifest.json"), "utf8");
    const state = emptyAuditState();
    state.dictionary.invalid = [{ PASSWORD: "PRIVATE_PASSWORD" }];
    expect(() => store.publish(state, info(store.runId))).toThrow("UNSAFE_PUBLICATION");
    expect(readFileSync(path.join(root, "output/manifest.json"), "utf8")).toBe(previous);
    store.close();
  });
  it("valida CRLF y la evidencia real sin recalcular hashes ni aceptar cambios de contenido", () => {
    const files = auditArtifacts(emptyAuditState(), info());
    const converted = new Map(
      Object.entries(files).map(([file, body]) => [file, body.replace(/\n/g, "\r\n")]),
    );
    expect(verifyAuditArtifacts(converted).normalizedLineEndings).toBe(true);
    converted.set("probes.json", converted.get("probes.json") + " ");
    expect(() => verifyAuditArtifacts(converted)).toThrow("GENERATION_INVALID");
    const real = new Map(
      AUDIT_FILES.map((file) => [
        file,
        readFileSync(path.resolve("docs/portal/implementacion/evidencias-vm", file), "utf8"),
      ]),
    );
    expect(verifyAuditArtifacts(real).generationId).toBe(
      JSON.parse(real.get("manifest.json") ?? "null").generationId,
    );
  });
  it("el cierre fatal deja todos los servicios WSDL con resultado o motivo", async () => {
    const root = temp();
    let wsdlCalls = 0;
    vi.spyOn(AuditStore.prototype, "append").mockImplementation(() => {
      throw new AuditFailure("DISK_FAILURE");
    });
    const deps: AuditRunnerDeps = {
      root,
      log: () => {},
      revision: () => null,
      sources: async () => ({ sources: [], candidates: [], code: digest("code") }),
      connect: async () => ({
        context: [],
        close: async () => {},
        request: () => ({
          cancel: () => {},
          query: async (statement, params, meta) =>
            statement.includes("SUSER_SID")
              ? [{ PRINCIPAL_SCOPE: "PRIVATE_PRINCIPAL" }]
              : read(statement, params, meta),
        }),
      }),
      wsdl: async (_service, signal) => {
        if (++wsdlCalls <= 6) return { status: 503, body: "PRIVATE_BODY" };
        return new Promise((_, reject) => {
          if (signal.aborted) reject(new Error("aborted"));
          else signal.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
        });
      },
    };
    await runReadonlyAudit(deps);
    const contracts = JSON.parse(
      readFileSync(
        path.join(root, "docs/portal/implementacion/evidencias-vm/contracts.json"),
        "utf8",
      ),
    );
    const manifest = JSON.parse(
      readFileSync(
        path.join(root, "docs/portal/implementacion/evidencias-vm/manifest.json"),
        "utf8",
      ),
    );
    expect(contracts.soap.map((row: { service: string }) => row.service).sort()).toEqual(
      Object.keys(SOAP_CATALOG).sort(),
    );
    expect(contracts.soap.filter((row: { status: number }) => row.status === 503)).toHaveLength(6);
    expect(manifest.reason).toBe("DISK_FAILURE");
    expect(Object.keys(contracts.columns)).toContain("M4RCH_NODES");
    expect(JSON.stringify([contracts, manifest])).not.toMatch(/PRIVATE_BODY|PRIVATE_PRINCIPAL/);
  });
});

describe("parámetros representables en el esquema", () => {
  it.each([
    ["ABCD", "char", 4, null],
    ["ABCDE", "char", 4, "PARAMETER_VALUE_TOO_LONG"],
    ["ABCDE", "nchar", 4, "PARAMETER_VALUE_TOO_LONG"],
    ["LONG_VALUE", "varchar", -1, null],
    ["LONG_VALUE", "nvarchar", -1, null],
    ["A", "char", -1, "PARAMETER_INVALID_LENGTH"],
    ["A", "nchar", 4001, "PARAMETER_INVALID_LENGTH"],
    ["A", "varchar", 8001, "PARAMETER_INVALID_LENGTH"],
    ["not-an-integer", "int", undefined, "PARAMETER_INVALID_VALUE"],
    ["9223372036854775807", "bigint", undefined, null],
    ["9223372036854775808", "bigint", undefined, "PARAMETER_INVALID_VALUE"],
    ["A", "money", undefined, "PARAMETER_UNSUPPORTED_TYPE"],
  ])("valida %s como %s(%s)", (value, type, length, expected) =>
    expect(auditBindingIssue(value, { type, length })).toBe(expected),
  );
  it("no crea peticiones SQL para parámetros inválidos", async () => {
    const factory = vi.fn();
    const executor = createAuditExecutor(factory);
    await expect(
      executor.read(
        "SELECT @value",
        { value: "TOO_LONG" },
        {
          id: "safe-id",
          family: "safe-family",
          kind: "metadata",
          bindings: { value: { type: "char", length: 3 } },
        },
      ),
    ).rejects.toThrow("PARAMETER_VALUE_TOO_LONG");
    expect(factory).not.toHaveBeenCalled();
  });
  it("filtra candidatos heurísticos incompatibles sin truncarlos y conserva los contractuales pendientes", async () => {
    const seen: string[] = [];
    const candidate = "CANDIDATE_" + "L".repeat(40);
    const adapter: AuditRead = async (statement, params = {}, meta) => {
      if (statement.includes("TABLE_CONSTRAINTS")) return [];
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          {
            TABLE_NAME: "M4RCH_T3S",
            COLUMN_NAME: "ID_T3",
            DATA_TYPE: "char",
            CHARACTER_MAXIMUM_LENGTH: 20,
          },
        ];
      for (const [key, value] of Object.entries(params))
        if (typeof value === "string") {
          expect(value.length).toBeLessThanOrEqual(meta?.bindings?.[key]?.length ?? 128);
          seen.push(value);
        }
      return [];
    };
    const result = await collectReadonlyAudit([], adapter, [candidate]);
    expect(seen).not.toContain(candidate);
    expect(
      result.tasks.some((task) => task.code === "CANDIDATES_EXCLUDED_BY_SCHEMA" && task.rows === 1),
    ).toBe(true);
    expect(result.coverage.unvisited).toContainEqual({
      key: "ID_T3",
      value: "SCO_GTA_EMPLOYEE_PRESENCE_REPR",
    });
  });
});

describe("estados de evidencia y fuentes originales", () => {
  it("rechaza conjuntos incompletos y permite generar documentación antes de la primera VM", () => {
    const root = temp();
    expect(loadReadonlyVmEvidence(root)).toBeNull();
    writeFileSync(path.join(root, "manifest.json"), "{}");
    expect(() => loadReadonlyVmEvidence(root)).toThrow("EVIDENCE_INCOMPLETE");
  });
  it("la matriz distingue metadatos de sondeos y conserva la verificación anterior", () => {
    const loaded = loadReadonlyVmEvidence(path.resolve("docs/portal/implementacion/evidencias-vm"));
    expect(loaded).not.toBeNull();
    if (!loaded) throw new Error("Missing fixture");
    const evidence = { ...loaded, probes: [] };
    const knowledge = PORTAL_FEATURES.find(
      (feature) => feature.route === "/portal/empleado/talento/conocimientos",
    )!;
    expect(vmEvidenceLabel(evidence, knowledge)).toContain("diccionario parcial");
    expect(vmEvidenceLabel(evidence, knowledge)).toContain("sondeos de esta función no realizados");
    const section = knowledge.sections?.find(
      (item) => item.kind === "consult" && item.consult.query,
    );
    if (section?.kind !== "consult" || !section.consult.query)
      throw new Error("Missing SQL fixture");
    const probe = {
      feature: knowledge.id,
      consult: section.consult.id,
      organization: "CYC",
      status: "ok",
      records: 0,
      queryHash: digest(
        section.consult.query.scope + stripOuterOrderBy(section.consult.query.statement),
      ),
    } as const;
    expect(vmEvidenceLabel({ ...evidence, probes: [probe] }, knowledge, section.consult)).toContain(
      "1/3 sondeos SQL correctos",
    );
    expect(
      vmEvidenceLabel(
        { ...evidence, probes: [{ ...probe, queryHash: digest("old-statement") }] },
        knowledge,
        section.consult,
      ),
    ).toContain("sondeos de esta función no realizados");
    const verified = PORTAL_FEATURES.find(
      (feature) => feature.read.kind === "sql" && feature.read.verified,
    )!;
    expect(vmEvidenceLabel(evidence, verified)).toContain("Verificación anterior conservada");
    expect(readonlyMatrix(evidence)).toContain("DEBUG:");
  });
  it("incluye los fragmentos originales documentados sin cambiar sus destinos de menú", () => {
    const knowledge = PORTAL_FEATURES.find(
      (feature) => feature.route === "/portal/empleado/talento/conocimientos",
    )!;
    const criteria = PORTAL_FEATURES.find(
      (feature) => feature.route === "/portal/responsable/talento/criterios",
    )!;
    expect(knowledge.sources).toContain("sse_g3/sse_g3_p22_body.jsp");
    expect(knowledge.sources).toContain("sse_g3/sse_g3_p22.jsp");
    expect(criteria.sources).toContain("mss_g3/mss_g3_p16_obj.jsp");
    expect(criteria.sources).toContain("mss_g3/mss_g3_p16.jsp");
  });
  it("contrasta los originales locales sin atribuirles una huella VM que no tienen", () => {
    const evidence = loadReadonlyVmEvidence(
      path.resolve("docs/portal/implementacion/evidencias-vm"),
    );
    const report = readonlyEvidenceReview(evidence, PORTAL_FEATURES, process.cwd());
    expect(report).toContain("sse_g3_p22_body.jsp");
    expect(report).toContain("mss_g3_p16_obj.jsp");
    expect(report).toContain("original local; no incluido en la huella VM anterior");
    expect(report).toContain("ninguna operación SOAP ejecutada");
    if (!evidence) throw new Error("Missing evidence fixture");
    expect(
      readonlyEvidenceReview(
        { ...evidence, dictionary: { tables: {} } },
        PORTAL_FEATURES,
        process.cwd(),
      ),
    ).toContain("Esta generación no recupera el nodo de experiencia");
  });
});
