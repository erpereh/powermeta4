import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  runReadonlyAudit,
  type AuditConnection,
  type AuditRunnerDeps,
} from "../../../scripts/portal/readonly-audit";
import { digest, type AuditRow } from "../../../scripts/portal/readonly-audit-model";
const roots: string[] = [];
afterEach(() => {
  vi.useRealTimers();
  for (const root of roots.splice(0)) {
    if (
      !path.resolve(root).startsWith(`${path.resolve(tmpdir())}${path.sep}`) ||
      !path.basename(root).startsWith("powermeta-runner-")
    )
      throw new Error("Unsafe test path");
    rmSync(root, { recursive: true, force: true });
  }
});
function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "powermeta-runner-"));
  roots.push(root);
  const logs: string[] = [];
  const requests: string[] = [];
  const connection: AuditConnection = {
    context: ["PRIVATE_HOST", "PRIVATE_USER"],
    close: vi.fn(async () => {}),
    request: () => ({
      cancel: vi.fn(),
      query: async (statement) => {
        requests.push(statement);
        if (statement.includes("SUSER_SID")) return [{ PRINCIPAL_SCOPE: "PRIVATE_PRINCIPAL" }];
        if (statement.includes("INFORMATION_SCHEMA"))
          return [{ TABLE_NAME: "M4RCH_NODES", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" }];
        if (statement.includes("TOP 1")) return [{ ID_EMPLEADO: "PRIVATE_EMPLOYEE" }];
        if (statement.includes("COUNT_BIG")) return [{ TOTAL: 3 }];
        return [];
      },
    }),
  };
  const deps: AuditRunnerDeps = {
    root,
    log: (line) => logs.push(line),
    revision: () => "test-revision",
    sources: async () => ({ sources: [], candidates: [], code: digest("code") }),
    connect: vi.fn(async () => connection),
    wsdl: vi.fn(async () => ({ status: 503, body: "PRIVATE_WSDL_BODY" })),
  };
  const manifest = () =>
    JSON.parse(
      readFileSync(
        path.join(root, "docs/portal/implementacion/evidencias-vm/manifest.json"),
        "utf8",
      ),
    );
  return { root, deps, connection, logs, requests, manifest };
}
describe("ejecución completa observable y recuperable", () => {
  it.each(["dictionary", "probes"] as const)(
    "respeta el presupuesto de %s y guarda pendientes",
    async (phase) => {
      vi.useFakeTimers();
      const f = fixture();
      const original = f.connection.request;
      const cancel = vi.fn();
      f.connection.request = (timeout) => {
        const request = original(timeout);
        let reject: (error: Error) => void = () => {};
        return {
          cancel: () => {
            cancel();
            reject(new Error("PRIVATE_CANCEL"));
          },
          query: (statement, params, meta) => {
            if (
              statement.includes(
                phase === "dictionary" ? "INFORMATION_SCHEMA.COLUMNS" : "COUNT_BIG",
              )
            )
              return new Promise<AuditRow[]>((_, fail) => {
                reject = fail;
              });
            return request.query(statement, params, meta);
          },
        };
      };
      const work = runReadonlyAudit(
        f.deps,
        phase === "dictionary" ? { dictionaryMs: 50 } : { probesMs: 50 },
      );
      await vi.advanceTimersByTimeAsync(1000);
      const result = await work;
      expect(result.forceExit).toBe(false);
      expect(cancel).toHaveBeenCalled();
      expect(
        f
          .manifest()
          .tasks.some(
            (task: { code: string }) =>
              task.code === (phase === "dictionary" ? "DICTIONARY_BUDGET" : "PROBE_BUDGET"),
          ),
      ).toBe(true);
    },
  );
  it("publica desde el inicio, resume el tiempo/consultas y nunca muestra información privada", async () => {
    const f = fixture();
    const result = await runReadonlyAudit(f.deps, { heartbeatMs: 10 });
    expect(result.exitCode).toBe(1);
    expect(result.forceExit).toBe(false);
    expect(f.logs[0]).toContain("Inicio");
    expect(f.logs.some((line) => line.includes("Conexión SQL establecida"))).toBe(true);
    expect(f.logs.some((line) => line.includes("WSDL:"))).toBe(true);
    expect(f.logs.at(-2)).toContain("consultas=");
    expect(f.logs.at(-1)).toContain("Archivos:");
    expect(f.manifest()).toMatchObject({
      formatVersion: 2,
      status: "partial",
      execution: { active: 0 },
    });
    const bodies = [
      "manifest.json",
      "dictionary.json",
      "contracts.json",
      "probes.json",
      "errors.json",
      "resumen.md",
    ].map((file) =>
      readFileSync(path.join(f.root, "docs/portal/implementacion/evidencias-vm", file), "utf8"),
    );
    expect(JSON.stringify([f.logs, bodies])).not.toMatch(
      /PRIVATE_HOST|PRIVATE_USER|PRIVATE_PRINCIPAL|PRIVATE_EMPLOYEE|PRIVATE_WSDL_BODY/,
    );
    expect(f.connection.close).toHaveBeenCalledOnce();
  });
  it("emite progreso durante una lectura y publica parciales antes de terminar", async () => {
    const f = fixture();
    let observedPartial = false;
    const original = f.connection.request;
    f.connection.request = (timeout) => {
      const request = original(timeout);
      return {
        ...request,
        query: async (statement, params, meta) => {
          if (statement.includes("INFORMATION_SCHEMA.COLUMNS")) {
            observedPartial = f.manifest().status === "running";
            await new Promise((resolve) => setTimeout(resolve, 30));
          }
          return request.query(statement, params, meta);
        },
      };
    };
    await runReadonlyAudit(f.deps, { heartbeatMs: 5, publishMs: 10 });
    expect(observedPartial).toBe(true);
    expect(f.logs.some((line) => line.includes("referencias=") && line.includes("activas="))).toBe(
      true,
    );
    expect(f.logs.some((line) => line.includes("Resultados parciales guardados"))).toBe(true);
  });
  it("la misma ejecución reutiliza metadatos pero repite sondeos, contexto y WSDL", async () => {
    const f = fixture();
    await runReadonlyAudit(f.deps);
    const first = [...f.requests];
    f.requests.length = 0;
    await runReadonlyAudit(f.deps);
    expect(f.logs.some((line) => line.includes("CHECKPOINT_REUSED"))).toBe(true);
    expect(f.manifest().execution.reusedMetadataBatches).toBeGreaterThan(0);
    expect(f.requests.filter((statement) => statement.includes("COUNT_BIG"))).toHaveLength(
      first.filter((statement) => statement.includes("COUNT_BIG")).length,
    );
    expect(f.requests.some((statement) => statement.includes("SUSER_SID"))).toBe(true);
    expect(f.deps.wsdl).toHaveBeenCalledTimes(18);
  });
  it("un fallo de conexión conserva los seis resultados y los WSDL", async () => {
    const f = fixture();
    f.deps.connect = async () => {
      throw Object.assign(new Error("PRIVATE_CONNECTION"), { code: "ELOGIN" });
    };
    const result = await runReadonlyAudit(f.deps);
    expect(result.forceExit).toBe(false);
    expect(f.requests).toHaveLength(0);
    expect(f.manifest().tasks).toContainEqual({
      id: "connection",
      status: "error",
      code: "ELOGIN",
    });
    expect(f.manifest().coverage.unvisited.length).toBeGreaterThan(0);
    expect(
      f.manifest().tasks.filter((task: { id: string }) => task.id.startsWith("wsdl/")),
    ).toHaveLength(9);
    expect(JSON.stringify(f.logs)).not.toContain("PRIVATE_CONNECTION");
  });
  it("una interrupción cancela la petición real, guarda y cierra", async () => {
    const f = fixture();
    const control = new AbortController();
    const cancel = vi.fn();
    const original = f.connection.request;
    f.connection.request = (timeout) => {
      const request = original(timeout);
      let reject: (error: Error) => void = () => {};
      return {
        cancel: () => {
          cancel();
          reject(new Error("PRIVATE_CANCEL"));
        },
        query: (statement, params, meta) => {
          if (!statement.includes("INFORMATION_SCHEMA.COLUMNS"))
            return request.query(statement, params, meta);
          return new Promise<AuditRow[]>((_, fail) => {
            reject = fail;
            control.abort();
          });
        },
      };
    };
    const result = await runReadonlyAudit(f.deps, { signal: control.signal });
    expect(cancel).toHaveBeenCalled();
    expect(result.exitCode).toBe(1);
    expect(f.manifest()).toMatchObject({ status: "interrupted", reason: "INTERRUPTED" });
    expect(JSON.stringify(f.logs)).not.toContain("PRIVATE_CANCEL");
  });
  it("no espera indefinidamente cuando consulta, cancelación y cierre se atascan", async () => {
    vi.useFakeTimers();
    const f = fixture();
    const original = f.connection.request;
    f.connection.request = (timeout) => {
      const request = original(timeout);
      return {
        cancel: vi.fn(),
        query: (statement, params, meta) =>
          statement.includes("INFORMATION_SCHEMA.COLUMNS")
            ? new Promise(() => {})
            : request.query(statement, params, meta),
      };
    };
    f.connection.close = () => new Promise(() => {});
    const work = runReadonlyAudit(f.deps, { totalMs: 100 });
    await vi.advanceTimersByTimeAsync(10_000);
    const result = await work;
    expect(result).toMatchObject({ exitCode: 1, forceExit: true });
    expect(f.manifest().status).toBe("partial");
    expect(f.manifest().execution.active).toBe(1);
    expect(f.manifest().execution.queriesCompleted).toBe(f.manifest().execution.queriesStarted - 1);
  });
  it("acota GET que no atienden la cancelación y no inicia otros servicios", async () => {
    vi.useFakeTimers();
    const f = fixture();
    f.deps.wsdl = vi.fn(() => new Promise<never>(() => {}));
    const work = runReadonlyAudit(f.deps, { wsdlMs: 10 });
    await vi.advanceTimersByTimeAsync(5000);
    const result = await work;
    expect(result.forceExit).toBe(true);
    expect(f.deps.wsdl).toHaveBeenCalledTimes(2);
    expect(
      f.manifest().tasks.filter((task: { code: string }) => task.code === "WSDL_DEFERRED"),
    ).toHaveLength(7);
    expect(
      f.manifest().tasks.some((task: { code: string }) => task.code === "CANCEL_UNCONFIRMED"),
    ).toBe(true);
  });
  it("acota una conexión que no responde sin iniciar consultas", async () => {
    vi.useFakeTimers();
    const f = fixture();
    f.deps.connect = () => new Promise(() => {});
    const work = runReadonlyAudit(f.deps, { connectionMs: 10 });
    await vi.advanceTimersByTimeAsync(100);
    const result = await work;
    expect(result.forceExit).toBe(true);
    expect(f.requests).toHaveLength(0);
    expect(f.manifest().tasks).toContainEqual({
      id: "connection",
      status: "error",
      code: "CONNECTION_TIMEOUT",
    });
  });
  it.each([true, false])(
    "observa esperas propias sin afirmar bloqueo por lentitud; permiso=%s",
    async (allowed) => {
      vi.useFakeTimers();
      const f = fixture();
      const original = f.connection.request;
      f.connection.monitor = vi.fn(async () => {
        if (!allowed) throw Object.assign(new Error("PRIVATE_DENIED"), { number: 300 });
        return { categories: ["io"], blocked: false };
      });
      f.connection.request = (timeout) => {
        const request = original(timeout);
        return {
          ...request,
          query: async (statement, params, meta) => {
            if (statement.includes("INFORMATION_SCHEMA.COLUMNS"))
              await new Promise((resolve) => setTimeout(resolve, 5100));
            return request.query(statement, params, meta);
          },
        };
      };
      const work = runReadonlyAudit(f.deps);
      await vi.advanceTimersByTimeAsync(6000);
      await work;
      expect(f.connection.monitor).toHaveBeenCalledOnce();
      expect(f.logs.some((line) => line.includes("Consulta lenta"))).toBe(true);
      expect(JSON.stringify(f.logs)).not.toContain("PRIVATE_DENIED");
      expect(
        f
          .manifest()
          .tasks.some(
            (task: { code: string }) =>
              task.code === (allowed ? "NO_BLOCKING_OBSERVED" : "WAIT_DIAGNOSTIC_UNAVAILABLE"),
          ),
      ).toBe(true);
      expect(
        f.manifest().tasks.some((task: { code: string }) => task.code === "BLOCKING_OBSERVED"),
      ).toBe(false);
    },
  );
});
