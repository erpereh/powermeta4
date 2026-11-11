import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import {
  AUDIT_LIMITS,
  AuditFailure,
  auditErrorCode,
  digest,
  type AuditMetric,
  type AuditParams,
  type AuditRead,
  type AuditReadOptions,
  type AuditRow,
} from "./readonly-audit-model";

export type CancellableAuditRequest = {
  query: (statement: string, params: AuditParams, options: AuditReadOptions) => Promise<AuditRow[]>;
  cancel: () => void;
};
type Waiter = {
  resolve: () => void;
  reject: (error: AuditFailure) => void;
  signal: AbortSignal;
  abort: () => void;
};
const connectionFailures = new Set([
  "ELOGIN",
  "ESOCKET",
  "EINSTLOOKUP",
  "ECONNREFUSED",
  "ENOTFOUND",
  "ECONNCLOSED",
  "ENOCONN",
]);
export type AuditExecutorOptions = {
  signal?: AbortSignal;
  metadataMs?: number;
  probeMs?: number;
  cancelMs?: number;
  slowMs?: number;
  onSlow?: (query: Pick<AuditMetric, "id" | "family" | "queryHash">) => void;
};

/** El permiso SQL se conserva hasta que la petición nativa realmente termine. */
export function createAuditExecutor(
  factory: (timeoutMs: number) => CancellableAuditRequest,
  options: AuditExecutorOptions = {},
) {
  const stopped = new AbortController();
  const waiters: Waiter[] = [];
  const active = new Map<string, { started: number; request: CancellableAuditRequest }>();
  const metrics: AuditMetric[] = [];
  let slots = 0;
  let sequence = 0;
  const signal = options.signal
    ? AbortSignal.any([stopped.signal, options.signal])
    : stopped.signal;
  const acquire = (requestSignal: AbortSignal): Promise<void> =>
    new Promise((resolve, reject) => {
      if (requestSignal.aborted) {
        reject(new AuditFailure("INTERRUPTED"));
        return;
      }
      if (slots < 2) {
        slots++;
        resolve();
        return;
      }
      const waiter: Waiter = {
        resolve,
        reject,
        signal: requestSignal,
        abort: () => {
          const index = waiters.indexOf(waiter);
          if (index >= 0) waiters.splice(index, 1);
          reject(new AuditFailure("INTERRUPTED"));
        },
      };
      waiters.push(waiter);
      requestSignal.addEventListener("abort", waiter.abort, { once: true });
    });
  const release = () => {
    slots--;
    while (slots < 2 && waiters.length) {
      const waiter = waiters.shift();
      if (!waiter) break;
      waiter.signal.removeEventListener("abort", waiter.abort);
      if (waiter.signal.aborted) {
        waiter.reject(new AuditFailure("INTERRUPTED"));
        continue;
      }
      slots++;
      waiter.resolve();
    }
  };
  const read: AuditRead = async (
    statement,
    params = {},
    meta = { id: `query/${digest(statement).slice(0, 12)}`, family: "query", kind: "metadata" },
  ) => {
    assertReadOnlySql(statement);
    const combined = meta.signal ? AbortSignal.any([signal, meta.signal]) : signal;
    await acquire(combined);
    if (combined.aborted) {
      release();
      throw new AuditFailure("INTERRUPTED");
    }
    const timeoutMs =
      meta.kind === "probe"
        ? (options.probeMs ?? AUDIT_LIMITS.probeMs)
        : (options.metadataMs ?? AUDIT_LIMITS.metadataMs);
    let request: CancellableAuditRequest;
    try {
      request = factory(timeoutMs);
    } catch (error) {
      if (connectionFailures.has(auditErrorCode(error))) stopped.abort();
      release();
      throw error;
    }
    const activeId = `${++sequence}:${meta.id}`;
    const started = Date.now();
    active.set(activeId, { started, request });
    const metric: AuditMetric = {
      id: meta.id,
      family: meta.family,
      kind: meta.kind,
      queryHash: digest(statement),
      durationMs: 0,
      rows: 0,
      status: "error",
    };
    const queryInfo = { id: metric.id, family: metric.family, queryHash: metric.queryHash };
    let nativeSettled = false;
    let finished = false;
    let cancelCode: string | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let grace: ReturnType<typeof setTimeout> | undefined;
    const slow = setTimeout(
      () => options.onSlow?.(queryInfo),
      options.slowMs ?? AUDIT_LIMITS.slowMs,
    );
    slow.unref();
    const finish = (code?: string, rows?: AuditRow[]) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      clearTimeout(grace);
      clearTimeout(slow);
      metric.durationMs = Math.max(0, Date.now() - started);
      metric.rows = rows?.length ?? 0;
      metric.status = code ? "error" : "ok";
      if (code) metric.code = code;
      metrics.push(metric);
    };
    return new Promise<AuditRow[]>((resolve, reject) => {
      const cancel = (code: string) => {
        if (nativeSettled || cancelCode) return;
        cancelCode = code;
        try {
          request.cancel();
        } catch {
          /* Se comprueba el asentamiento, no se confía en cancel(). */
        }
        grace = setTimeout(() => {
          if (nativeSettled) return;
          finish("CANCEL_UNCONFIRMED");
          stopped.abort();
          reject(new AuditFailure("CANCEL_UNCONFIRMED"));
        }, options.cancelMs ?? AUDIT_LIMITS.cancelMs);
      };
      const abort = () => cancel("INTERRUPTED");
      combined.addEventListener("abort", abort, { once: true });
      timeout = setTimeout(() => cancel("QUERY_TIMEOUT"), timeoutMs);
      timeout.unref();
      const settle = () => {
        nativeSettled = true;
        combined.removeEventListener("abort", abort);
        active.delete(activeId);
        release();
      };
      if (combined.aborted) abort();
      Promise.resolve()
        .then(() => {
          if (combined.aborted) throw new AuditFailure("INTERRUPTED");
          return request.query(statement, params, meta);
        })
        .then(
          (rows) => {
            settle();
            finish(cancelCode, cancelCode ? undefined : rows);
            if (cancelCode) reject(new AuditFailure(cancelCode));
            else resolve(rows);
          },
          (error: unknown) => {
            settle();
            const code = cancelCode ?? auditErrorCode(error);
            finish(code);
            if (connectionFailures.has(code)) stopped.abort();
            reject(new AuditFailure(code));
          },
        );
    });
  };
  return {
    read,
    metrics,
    stop: () => stopped.abort(),
    get activeCount() {
      return active.size;
    },
    get isStopped() {
      return signal.aborted;
    },
    progress: () => ({
      started: sequence,
      completed: sequence - active.size,
      active: active.size,
      queued: waiters.length,
      current: [...active].map(([id, value]) => ({
        id: id.slice(id.indexOf(":") + 1),
        elapsedMs: Math.max(0, Date.now() - value.started),
      })),
    }),
  };
}

export async function closeAuditWithin(
  close: () => Promise<unknown>,
  ms: number = AUDIT_LIMITS.closeMs,
): Promise<boolean> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      Promise.resolve()
        .then(close)
        .then(
          () => true,
          () => false,
        ),
      new Promise<false>((resolve) => {
        timer = setTimeout(() => resolve(false), ms);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}
