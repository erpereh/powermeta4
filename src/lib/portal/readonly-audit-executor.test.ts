import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  createAuditExecutor,
  closeAuditWithin,
} from "../../../scripts/portal/readonly-audit-executor";
import {
  AuditFailure,
  type AuditReadOptions,
  type AuditRow,
} from "../../../scripts/portal/readonly-audit-model";
const meta: AuditReadOptions = { id: "technical-task", family: "metadata/table", kind: "metadata" };
beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());
function controlledRequest() {
  let resolve: (rows: AuditRow[]) => void = () => {};
  let reject: (error: Error) => void = () => {};
  const result = new Promise<AuditRow[]>((ok, fail) => {
    resolve = ok;
    reject = fail;
  });
  return { query: vi.fn(() => result), cancel: vi.fn(), resolve, reject };
}
describe("ejecutor SQL de solo lectura", () => {
  it("un fallo de conexión cancela las activas y no inicia las que esperan", async () => {
    const requests: ReturnType<typeof controlledRequest>[] = [];
    const executor = createAuditExecutor(() => {
      const request = controlledRequest();
      request.cancel.mockImplementation(() => request.reject(new Error("PRIVATE_CANCEL")));
      requests.push(request);
      return request;
    });
    const work = [1, 2, 3].map((value) =>
      executor.read(`SELECT ${value}`, {}, meta).catch((error: unknown) => error),
    );
    await vi.advanceTimersByTimeAsync(0);
    requests[0].reject(Object.assign(new Error("PRIVATE_CONNECTION"), { code: "ESOCKET" }));
    await vi.advanceTimersByTimeAsync(0);
    expect((await Promise.all(work)).every((error) => error instanceof AuditFailure)).toBe(true);
    expect(requests).toHaveLength(2);
    expect(requests[1].cancel).toHaveBeenCalledOnce();
    expect(executor.isStopped).toBe(true);
    expect(executor.activeCount).toBe(0);
    expect(JSON.stringify(executor.metrics)).not.toMatch(/PRIVATE_CONNECTION|PRIVATE_CANCEL/);
    const broken = createAuditExecutor(() => {
      throw Object.assign(new Error("PRIVATE_FACTORY"), { code: "ESOCKET" });
    });
    await expect(broken.read("SELECT 1", {}, meta)).rejects.toMatchObject({ code: "ESOCKET" });
    expect(broken.isStopped).toBe(true);
  });
  it("rechaza SELECT INTO antes de crear una petición SQL", async () => {
    const factory = vi.fn(controlledRequest);
    const executor = createAuditExecutor(factory);
    await expect(executor.read("SELECT 1 INTO forbidden", {}, meta)).rejects.toMatchObject({
      name: "PortalSqlGuardError",
    });
    expect(factory).not.toHaveBeenCalled();
  });
  it("limita a dos peticiones reales y conserva en cola las demás", async () => {
    const requests: ReturnType<typeof controlledRequest>[] = [];
    const executor = createAuditExecutor(() => {
      const request = controlledRequest();
      requests.push(request);
      return request;
    });
    const first = executor.read("SELECT 1", {}, meta);
    const second = executor.read("SELECT 2", {}, meta);
    const third = executor.read("SELECT 3", {}, meta);
    await vi.advanceTimersByTimeAsync(0);
    expect(requests).toHaveLength(2);
    expect(executor.progress().queued).toBe(1);
    requests[0].resolve([]);
    await first;
    await vi.advanceTimersByTimeAsync(0);
    expect(requests).toHaveLength(3);
    requests[1].resolve([]);
    requests[2].resolve([]);
    await Promise.all([second, third]);
    expect(executor.activeCount).toBe(0);
  });
  it("señala lentitud sin registrar parámetros y cancela al vencer el plazo", async () => {
    const request = controlledRequest();
    const slow = vi.fn();
    request.cancel.mockImplementation(() => request.reject(new Error("PRIVATE_SERVER_MESSAGE")));
    const executor = createAuditExecutor(() => request, {
      metadataMs: 50,
      slowMs: 10,
      onSlow: slow,
    });
    const value = executor
      .read("SELECT @employeeId AS VALUE", { employeeId: "PRIVATE_EMPLOYEE_ID" }, meta)
      .catch((error: unknown) => error);
    await vi.advanceTimersByTimeAsync(10);
    expect(slow).toHaveBeenCalledOnce();
    await vi.advanceTimersByTimeAsync(40);
    expect(await value).toMatchObject({ code: "QUERY_TIMEOUT" });
    expect(request.cancel).toHaveBeenCalledOnce();
    expect(executor.activeCount).toBe(0);
    expect(JSON.stringify([executor.metrics, slow.mock.calls])).not.toMatch(
      /PRIVATE_EMPLOYEE_ID|PRIVATE_SERVER_MESSAGE/,
    );
  });
  it("una cancelación no confirmada detiene SQL sin liberar huecos ficticios", async () => {
    const requests: ReturnType<typeof controlledRequest>[] = [];
    const executor = createAuditExecutor(
      () => {
        const request = controlledRequest();
        requests.push(request);
        return request;
      },
      { metadataMs: 20, cancelMs: 5 },
    );
    const promises = [1, 2, 3].map((number) =>
      executor.read(`SELECT ${number}`, {}, meta).catch((error: unknown) => error),
    );
    await vi.advanceTimersByTimeAsync(30);
    expect((await Promise.all(promises)).every((error) => error instanceof AuditFailure)).toBe(
      true,
    );
    expect(requests).toHaveLength(2);
    expect(executor.activeCount).toBe(2);
    expect(executor.isStopped).toBe(true);
    for (const request of requests) request.resolve([]);
    await vi.advanceTimersByTimeAsync(0);
    expect(executor.activeCount).toBe(0);
  });
  it("usa distintos timeouts nativos y responde a una interrupción", async () => {
    const control = new AbortController();
    const requests: ReturnType<typeof controlledRequest>[] = [];
    const factory = vi.fn(() => {
      const request = controlledRequest();
      request.cancel.mockImplementation(() => request.reject(new Error("secret")));
      requests.push(request);
      return request;
    });
    const executor = createAuditExecutor(factory, {
      metadataMs: 20,
      probeMs: 50,
      signal: control.signal,
    });
    const promises = [
      executor.read("SELECT 1", {}, meta),
      executor.read("SELECT 2", {}, { ...meta, kind: "probe" }),
    ].map((promise) => promise.catch((error: unknown) => error));
    await vi.advanceTimersByTimeAsync(0);
    expect(factory.mock.calls).toEqual([[20], [50]]);
    control.abort();
    await vi.advanceTimersByTimeAsync(0);
    expect(
      (await Promise.all(promises)).every(
        (value) => value instanceof AuditFailure && value.code === "INTERRUPTED",
      ),
    ).toBe(true);
  });
  it("acota también un cierre que no termina", async () => {
    const value = closeAuditWithin(() => new Promise(() => {}), 10);
    await vi.advanceTimersByTimeAsync(10);
    expect(await value).toBe(false);
    expect(await closeAuditWithin(async () => {})).toBe(true);
  });
});
