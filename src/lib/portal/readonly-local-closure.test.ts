import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  safeMetadataText,
  sanitizeMetadataRows,
  assertSafeMetadataEntry,
  isSafeMetadataRow,
} from "../../../scripts/portal/readonly-audit-safety";
import {
  AuditMethodScope,
  auditMethodReferences,
} from "../../../scripts/portal/readonly-audit-methods";
import {
  auditJsonChunks,
  publishAuditDocuments,
  AUDIT_DISK_RESERVE,
  type AuditDocuments,
} from "../../../scripts/portal/readonly-audit-publication";
import {
  AUDIT_FILES,
  digest,
  emptyAuditState,
  stripOuterOrderBy,
  type AuditTask,
} from "../../../scripts/portal/readonly-audit-model";
import {
  AuditStore,
  auditArtifacts,
  type AuditPublication,
} from "../../../scripts/portal/readonly-audit-store";
import {
  historicalProbeRun,
  vmEvidenceLabel,
  loadReadonlyVmEvidence,
} from "../../../scripts/portal/readonly-vm-evidence";
import { reviewSqlContract } from "../../../scripts/portal/readonly-sql-review";
import { PORTAL_FEATURES } from "./registry";

const roots: string[] = [];
const directory = () => {
  const root = mkdtempSync(path.join(tmpdir(), "powermeta-local-closure-"));
  roots.push(root);
  return root;
};
afterEach(() => {
  for (const root of roots.splice(0)) {
    if (
      path.dirname(path.resolve(root)) !== path.resolve(tmpdir()) ||
      !path.basename(root).startsWith("powermeta-local-closure-")
    )
      throw new Error("Unsafe fixture path");
    rmSync(root, { recursive: true, force: true });
  }
});
const publication = (runId = randomUUID()): AuditPublication => ({
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
const documents = (dictionary: unknown = {}): AuditDocuments => {
  const values = {
    "dictionary.json": dictionary,
    "contracts.json": {},
    "probes.json": {},
    "errors.json": {},
    "resumen.md": "safe summary",
    "manifest.json": { files: {} as Record<string, string> },
  };
  return {
    generationId: randomUUID(),
    values,
    setHashes: (hashes) => {
      values["manifest.json"].files = { ...hashes };
    },
  };
};

describe("saneamiento léxico autocontenido", () => {
  it("reutiliza la comprobación de código inmutable sin aceptar símbolos retirados ni campos modificados", () => {
    const row: Record<string, unknown> = { ID_TI: "TI_A", SOURCE_CODE: 'LOAD("OBJECT_A")' };
    expect(isSafeMetadataRow(row, new Set(["OBJECT_A"]))).toBe(true);
    expect(isSafeMetadataRow(row, new Set())).toBe(false);
    row.SOURCE_CODE = 'LOAD("PRIVATE_PERSON")';
    expect(isSafeMetadataRow(row, new Set(["OBJECT_A"]))).toBe(false);
    row.SOURCE_CODE = 'LOAD("OBJECT_A")';
    row.PASSWORD = "PRIVATE";
    expect(isSafeMetadataRow(row, new Set(["OBJECT_A"]))).toBe(false);
  });
  it.each(["sql", "ln4"] as const)(
    "es idempotente para comillas, escapes, comentarios y fragmentos incompletos (%s)",
    (dialect) => {
      let seed = 173;
      const tokens = [
        "9",
        '"',
        "'",
        " --",
        "/*",
        "*/",
        "https://x.invalid",
        "user@example.invalid",
        "\\",
        "\n",
        "12345",
        "LOAD",
        "(",
        ")",
        " ",
        ";",
      ];
      for (let i = 0; i < 5000; i++) {
        let value = "";
        for (let j = 0; j < 8; j++) {
          seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
          value += tokens[seed % tokens.length];
        }
        const safe = safeMetadataText(value, new Set(), undefined, dialect);
        expect(safeMetadataText(safe, new Set(), undefined, dialect)).toBe(safe);
        expect(safe).not.toMatch(/user@example\.invalid|https:\/\/x\.invalid|12345/);
      }
    },
  );
  it("omite comentarios y literales privados sin recuperar el final malformado", () => {
    const used = new Set<string>();
    const rows = sanitizeMetadataRows(
      [
        {
          ID_TI: "TI_A",
          SOURCE_CODE:
            'LOAD("OBJECT_A", "PRIVATE_PERSON") // PRIVATE_COMMENT\nLOAD("UNCLOSED_PRIVATE',
          APISQL: String.raw`SELECT 'C:\PRIVATE\', 'PRIVATE_PERSON', 'SECRET''ESCAPED' /* PRIVATE_COMMENT */`,
        },
      ],
      new Set(["OBJECT_A", "UNUSED"]),
      used,
    );
    expect(JSON.stringify(rows)).not.toMatch(/PRIVATE|SECRET/);
    expect([...used]).toEqual(["OBJECT_A"]);
    expect(() =>
      assertSafeMetadataEntry({
        key: digest("batch"),
        rows,
        symbols: [...used],
        references: [],
        physical: [],
        ruleReferences: [],
      }),
    ).not.toThrow();
  });
});

describe("publicación por fragmentos y espacio", () => {
  it("conserva Unicode, huecos y escapes sin materializar el documento completo", () => {
    const sparse: unknown[] = [];
    sparse.length = 3;
    sparse[0] = undefined;
    sparse[2] = 2;
    const value = { text: "a".repeat(16383) + '😀\n"\\'.repeat(10000), array: sparse };
    expect(JSON.parse([...auditJsonChunks(value)].join(""))).toEqual(
      JSON.parse(JSON.stringify(value)),
    );
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    expect(() => [...auditJsonChunks(cyclic)]).toThrow("OUTPUT_SERIALIZATION_FAILED");
  });
  it("rechaza falta de espacio antes de tocar la generación válida", async () => {
    const root = directory(),
      output = path.join(root, "output");
    mkdirSync(output);
    writeFileSync(path.join(output, "dictionary.json"), "previous");
    await expect(
      publishAuditDocuments(root, output, documents(), async () => AUDIT_DISK_RESERVE),
    ).rejects.toThrow("DISK_SPACE_LOW");
    expect(readFileSync(path.join(output, "dictionary.json"), "utf8")).toBe("previous");
    expect(readdirSync(root)).toEqual(["output"]);
  });
  it("elimina solo su generación incompleta y mantiene la publicada si cae el espacio", async () => {
    const root = directory(),
      output = path.join(root, "output");
    mkdirSync(output);
    await publishAuditDocuments(root, output, documents());
    const previous = readFileSync(path.join(output, "manifest.json"), "utf8");
    let checks = 0;
    await expect(
      publishAuditDocuments(
        root,
        output,
        documents({ text: "A".repeat(9 * 1024 * 1024) }),
        async () => (++checks === 1 ? 1024 ** 3 : 0),
      ),
    ).rejects.toThrow("DISK_SPACE_LOW");
    expect(readFileSync(path.join(output, "manifest.json"), "utf8")).toBe(previous);
    expect(readdirSync(path.join(root, "generations"))).toHaveLength(1);
  });
  it("agrupa solicitudes simultáneas y publica instantáneas inmutables con hashes", async () => {
    const root = directory(),
      output = path.join(root, "output");
    const store = new AuditStore(path.join(root, "cache"), output, () => {});
    try {
      const state = emptyAuditState();
      state.dictionary.before = [{ ID_T3: "BEFORE" }];
      const first = store.publish(state, publication(store.runId));
      state.dictionary.after = [{ ID_T3: "AFTER" }];
      const second = store.publish(state, publication(store.runId));
      state.dictionary.later = [{ ID_T3: "LATER" }];
      await Promise.all([first, second]);
      const checked = loadReadonlyVmEvidence(output)!;
      expect(Object.keys(checked.dictionary.tables)).toEqual(["before", "after"]);
      expect(readdirSync(path.join(root, "cache/generations"))).toHaveLength(2);
    } finally {
      store.close();
    }
  });
  it("limpia un temporal propio interrumpido y conserva directorios ajenos o generaciones con manifiesto", async () => {
    const root = directory(),
      output = path.join(root, "output");
    mkdirSync(output);
    const id = randomUUID(),
      interrupted = path.join(root, "generations", id);
    mkdirSync(interrupted, { recursive: true });
    writeFileSync(path.join(interrupted, ".publishing"), id);
    writeFileSync(path.join(interrupted, "dictionary.json"), "incomplete");
    const foreign = path.join(root, "generations", randomUUID());
    mkdirSync(foreign);
    writeFileSync(path.join(foreign, "keep.txt"), "keep");
    const notices: string[] = [];
    await publishAuditDocuments(root, output, documents(), undefined, (code) => notices.push(code));
    expect(notices).toContain("INCOMPLETE_GENERATION_REMOVED");
    expect(readdirSync(path.join(root, "generations"))).not.toContain(id);
    expect(readFileSync(path.join(foreign, "keep.txt"), "utf8")).toBe("keep");
  });
});

describe("alcance de métodos compartidos", () => {
  it("inventaría métodos ajenos, expande los propios y declara los despachadores ambiguos", () => {
    const tasks: AuditTask[] = [];
    const scope = new AuditMethodScope(auditMethodReferences("OBJECT_A!NODE_A.CARGA"), tasks);
    scope.observe([
      { ID_T3: "OBJECT_A", ID_NODE: "NODE_A", ID_TI: "SSM_PRINCIPAL" },
      { ID_T3: "OBJECT_B", ID_NODE: "NODE_B", ID_TI: "SSM_PRINCIPAL" },
    ]);
    const rows = scope.select(
      ["CARGA", "UNRELATED_METHOD", "OBJECT_A_LOAD"].map((ID_ITEM) => ({
        ID_TI: "SSM_PRINCIPAL",
        ID_ITEM,
        SOURCE_CODE: 'LOAD("OBJECT_C")',
      })),
    );
    expect(rows.map((row) => row.SOURCE_CODE)).toEqual([null, null, 'LOAD("OBJECT_C")']);
    expect(tasks).toContainEqual({
      id: "method-scope/SSM_PRINCIPAL/CARGA",
      status: "incomplete",
      code: "AMBIGUOUS_SHARED_METHOD",
    });
    expect(tasks).toContainEqual({
      id: "method-scope/SSM_PRINCIPAL/UNRELATED_METHOD",
      status: "ok",
      code: "SHARED_METHOD_INVENTORY_ONLY",
    });
  });
});

describe("contraste físico y procedencia histórica", () => {
  it("no clasifica un alias de presentación como columna física sin calificar", () => {
    expect(
      reviewSqlContract(
        { scope: "own", tables: ["TABLE_A"], statement: "SELECT A.COL_A AS COL_A FROM TABLE_A A" },
        { TABLE_A: [{ column: "COL_A" }] },
      ),
    ).toEqual({ tables: ["TABLE_A"], checkedColumns: 1, missing: [], unresolved: [] });
  });
  it("no confunde alias ambiguos o columnas sin calificar con compatibilidad SQL", () => {
    const result = reviewSqlContract(
      {
        scope: "own",
        tables: ["TABLE_A", "TABLE_B"],
        statement:
          "SELECT X.COL_A, COL_A FROM TABLE_A X JOIN TABLE_B Y ON Y.MISSING = X.COL_A WHERE EXISTS (SELECT 1 FROM TABLE_B X WHERE X.COL_B = @employeeId)",
      },
      { TABLE_A: [{ column: "COL_A" }], TABLE_B: [{ column: "COL_B" }] },
    );
    expect(result.missing).toEqual(["COLUMN:TABLE_B.MISSING"]);
    expect(result.unresolved).toContain("AMBIGUOUS:X.COL_A");
    expect(result.unresolved).toContain("UNQUALIFIED:COL_A");
  });
  it("verifica hash y generación de un sondeo histórico y nunca lo convierte en actual", () => {
    const feature = PORTAL_FEATURES.find((entry) =>
      entry.sections?.some((item) => item.kind === "consult" && item.consult.query),
    )!;
    const section = feature.sections?.find((item) => item.kind === "consult" && item.consult.query);
    if (section?.kind !== "consult" || !section.consult.query) throw new Error("Missing fixture");
    const state = emptyAuditState();
    state.probes = [
      {
        feature: feature.id,
        consult: section.consult.id,
        organization: "CYC",
        queryHash: digest(
          section.consult.query.scope + stripOuterOrderBy(section.consult.query.statement),
        ),
        records: 0,
        status: "ok",
      },
    ];
    const files = auditArtifacts(state, publication());
    const run = historicalProbeRun("a".repeat(40), files["manifest.json"], files["probes.json"]);
    const root = directory();
    // Build a coherent current generation independently of the historical fixture.
    const current = auditArtifacts(emptyAuditState(), publication());
    for (const file of AUDIT_FILES) writeFileSync(path.join(root, file), current[file]);
    const evidence = loadReadonlyVmEvidence(root)!;
    evidence.history = [run];
    expect(vmEvidenceLabel(evidence, feature, section.consult)).toContain("sondeo histórico");
    expect(evidence.probes).toEqual([]);
    expect(
      vmEvidenceLabel(evidence, feature, {
        ...section.consult,
        query: {
          ...section.consult.query,
          statement: section.consult.query.statement.replace("SELECT", "SELECT TOP (2)"),
        },
      }),
    ).not.toContain("sondeo histórico");
    expect(() =>
      historicalProbeRun("a".repeat(40), files["manifest.json"], files["probes.json"] + " "),
    ).toThrow("HISTORY_HASH_INVALID");
  });
});
