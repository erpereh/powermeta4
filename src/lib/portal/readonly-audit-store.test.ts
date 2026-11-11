import {
  appendFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  AUDIT_FILES,
  AuditStore,
  type AuditPublication,
} from "../../../scripts/portal/readonly-audit-store";
import {
  digest,
  emptyAuditState,
  type AuditCacheEntry,
} from "../../../scripts/portal/readonly-audit-model";
const directories: string[] = [];
const directory = () => {
  const root = mkdtempSync(path.join(tmpdir(), "powermeta-audit-"));
  directories.push(root);
  return root;
};
afterEach(() => {
  for (const root of directories.splice(0)) {
    if (
      !path.resolve(root).startsWith(`${path.resolve(tmpdir())}${path.sep}`) ||
      !path.basename(root).startsWith("powermeta-audit-")
    )
      throw new Error("Unsafe test path");
    rmSync(root, { recursive: true, force: true });
  }
});
const entry: AuditCacheEntry = {
  key: digest("query"),
  rows: [{ ID_T3: "OBJECT_A", SOURCE_CODE: "METHOD('0')" }],
  references: [{ key: "ID_T3", value: "OBJECT_A" }],
  symbols: ["OBJECT_A"],
  physical: [],
  ruleReferences: [],
};
const fingerprints = [digest("code"), digest("schema"), digest("context")] as const;
const publication = (store: AuditStore): AuditPublication => ({
  runId: store.runId,
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
const open = (root: string, notices: string[] = [], now?: () => number) =>
  new AuditStore(
    path.join(root, "cache"),
    path.join(root, "output"),
    (code) => notices.push(code),
    now,
  );

describe("diario saneado y reanudación", () => {
  it("recupera lotes completos y una cola truncada no elimina el trabajo válido", () => {
    const root = directory();
    const first = open(root);
    first.resume(...fingerprints);
    first.append(entry);
    first.checkpoint("interrupted");
    first.close();
    appendFileSync(path.join(root, "cache/batches.ndjson"), '{"payload":"PRIVATE_TRUNCATED');
    const notices: string[] = [];
    const second = open(root, notices);
    expect(second.resume(...fingerprints).get(entry.key)).toEqual(entry);
    expect(notices).toContain("JOURNAL_TAIL_IGNORED");
    expect(second.reuseInfo).toBeDefined();
    expect(second.reuseInfo).toMatchObject({
      originRunId: first.runId,
      codeHash: fingerprints[0],
      schemaHash: fingerprints[1],
    });
    second.close();
    expect(readFileSync(path.join(root, "cache/batches.ndjson"), "utf8")).not.toContain(
      "PRIVATE_TRUNCATED",
    );
  });
  it.each([0, 1, 2])("rechaza un cambio de huella %s", (index) => {
    const root = directory();
    const first = open(root);
    first.resume(...fingerprints);
    first.append(entry);
    first.checkpoint("partial");
    first.close();
    const changed = fingerprints.map((value, current) =>
      current === index ? digest("different") : value,
    );
    const notices: string[] = [];
    const second = open(root, notices);
    expect(second.resume(changed[0], changed[1], changed[2]).size).toBe(0);
    expect(notices).toContain("CHECKPOINT_INCOMPATIBLE");
    second.close();
  });
  it("la edad se mide desde el origen y no se renueva indefinidamente al reanudar", () => {
    let now = 100;
    const root = directory();
    const first = open(root, [], () => now);
    first.resume(...fingerprints);
    first.append(entry);
    first.close();
    now += 23 * 60 * 60_000;
    const second = open(root, [], () => now);
    expect(second.resume(...fingerprints).size).toBe(1);
    second.close();
    now += 2 * 60 * 60_000;
    const third = open(root, [], () => now);
    expect(third.resume(...fingerprints).size).toBe(0);
    third.close();
  });
  it("rechaza corrupción y campos privados antes de escribir", () => {
    const root = directory();
    const store = open(root);
    store.resume(...fingerprints);
    expect(() => store.append({ ...entry, rows: [{ PASSWORD: "PRIVATE_PASSWORD" }] })).toThrow();
    expect(readFileSync(path.join(root, "cache/batches.ndjson"), "utf8")).not.toContain(
      "PRIVATE_PASSWORD",
    );
    store.append(entry);
    store.close();
    appendFileSync(path.join(root, "cache/batches.ndjson"), '{"corrupt":true}\n');
    const notices: string[] = [];
    const second = open(root, notices);
    expect(second.resume(...fingerprints).size).toBe(0);
    expect(notices).toContain("CHECKPOINT_INVALID");
    second.close();
  });
  it("protege una ejecución activa y no persiste el contexto de conexión", () => {
    const root = directory();
    const store = open(root);
    expect(() => open(root)).toThrow("AUDIT_ALREADY_RUNNING");
    expect(store.contextFingerprint(["PRIVATE_HOST", "PRIVATE_USER"])).toMatch(/^[a-f0-9]{64}$/);
    for (const file of readdirSync(path.join(root, "cache")))
      expect(readFileSync(path.join(root, "cache", file)).toString("utf8")).not.toMatch(
        /PRIVATE_HOST|PRIVATE_USER/,
      );
    store.close();
  });
});

describe("generaciones coherentes", () => {
  it("conserva las dos generaciones recientes y no elimina directorios ajenos", () => {
    const root = directory();
    const store = open(root);
    mkdirSync(path.join(root, "cache/generations/ajeno"), { recursive: true });
    writeFileSync(path.join(root, "cache/generations/ajeno/conservar.txt"), "test");
    for (let index = 0; index < 4; index++) store.publish(emptyAuditState(), publication(store));
    expect(readdirSync(path.join(root, "cache/generations"))).toHaveLength(3);
    expect(readFileSync(path.join(root, "cache/generations/ajeno/conservar.txt"), "utf8")).toBe(
      "test",
    );
    store.close();
  });
  it("publica seis archivos con hashes y restaura un archivo canónico dañado", () => {
    const root = directory();
    const store = open(root);
    store.publish(emptyAuditState(), publication(store));
    const manifest = JSON.parse(readFileSync(path.join(root, "output/manifest.json"), "utf8"));
    for (const file of AUDIT_FILES.filter((file) => file !== "manifest.json"))
      expect(digest(readFileSync(path.join(root, "output", file), "utf8"))).toBe(
        manifest.files[file],
      );
    writeFileSync(path.join(root, "output/probes.json"), "broken");
    expect(store.restorePublished()).toBe(true);
    expect(
      JSON.parse(readFileSync(path.join(root, "output/probes.json"), "utf8")).generationId,
    ).toBe(manifest.generationId);
    store.close();
  });
  it("un fallo entre archivos conserva una generación completa recuperable", () => {
    const root = directory();
    const store = open(root);
    store.publish(emptyAuditState(), publication(store));
    renameSync(
      path.join(root, "output/contracts.json"),
      path.join(root, "output/contracts.backup"),
    );
    mkdirSync(path.join(root, "output/contracts.json"));
    expect(() => store.publish(emptyAuditState(), publication(store))).toThrow();
    rmdirSync(path.join(root, "output/contracts.json"));
    expect(store.restorePublished()).toBe(true);
    const manifest = JSON.parse(readFileSync(path.join(root, "output/manifest.json"), "utf8"));
    for (const file of AUDIT_FILES.filter((file) => file !== "manifest.json"))
      expect(digest(readFileSync(path.join(root, "output", file), "utf8"))).toBe(
        manifest.files[file],
      );
    store.close();
  });
});
