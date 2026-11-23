import "server-only";

import sql from "mssql";

import { getPeopleNetPool } from "@/lib/peoplenet/client";

/** Scheduled task created by SRTC_LAUNCH_IMPORT.IMPORT_SCHEDULE for each hire file. */
const IMPORT_TASK = "BP_LAUNCH_IMPORT_ASAP_JS";

/** M4RJS_EXEC_STATUS: 0 ejecutado; 4, 5, 6, 7, 11 expirado, cancelado, interrumpido, abortado. */
const DONE_STATUS = 0;
const FINISHED_WITHOUT_RUNNING = new Set([4, 5, 6, 7, 11]);

export type HireImportOutcome =
  | { state: "done"; taskId: string; total: number; errors: number; messages: string[] }
  | { state: "not-run"; taskId: string; status: number }
  | { state: "timeout" };

type ImportRow = {
  taskId: string | number;
  // M4RJS_TASK_EXE.STATUS is a varchar ("0", "1"…).
  status: string | number | null;
  total: number | null;
  errors: number | null;
  trace: Buffer | null;
};

/** Reasons in the import trace: lines «EXCEL_ROW\tID_GROUP\tID_ERROR\tTEXT» under ERROR LINES. */
export const parseHireImportTrace = (trace: Buffer | null): string[] => {
  if (!trace) return [];
  const text = trace.toString("latin1").replace(/\0/g, "");
  const messages: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const match = /^\s*\d+\t\d+\t[^\t]*\t(.+)$/.exec(line);
    const message = match?.[1]?.replace(/\s+/g, " ").trim();
    if (message) messages.push(message);
  }
  return messages;
};

/** Latest scheduled import for this hire file (read-only). */
export const readHireImportOutcome = async (
  fileName: string,
): Promise<Exclude<HireImportOutcome, { state: "timeout" }> | null> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("task", sql.VarChar(64), IMPORT_TASK)
    // SCHED_TASK_NAME keeps 50 characters of the file name.
    .input("name", sql.VarChar(50), fileName.slice(0, 50))
    .query<ImportRow>(
      `SELECT TOP 1 s.ID_SCHED_TASK AS taskId, e.STATUS AS status,
       h.TOTAL_REG AS total, h.NUM_ERROR_REG AS errors, h.TRACE_FILE AS trace
FROM M4RJS_SCHED_TASKS s
LEFT JOIN M4RJS_TASK_EXE e ON e.ID_SCHED_TASK = s.ID_SCHED_TASK
LEFT JOIN M4RCH_HIST_IMP_EXP h ON h.ID_SCHED_TASK = s.ID_SCHED_TASK
WHERE s.ID_TASK = @task AND s.SCHED_TASK_NAME = @name
ORDER BY s.ID_SCHED_TASK DESC`,
    );
  const row = result.recordset[0];
  if (!row || row.status === null || String(row.status).trim() === "") return null;
  const status = Number(row.status);
  const taskId = String(row.taskId);
  if (FINISHED_WITHOUT_RUNNING.has(status)) {
    return { state: "not-run", taskId, status };
  }
  if (status !== DONE_STATUS || row.total === null) return null;
  return {
    state: "done",
    taskId,
    total: Number(row.total),
    errors: Number(row.errors ?? 0),
    messages: parseHireImportTrace(row.trace),
  };
};

type PendingRow = { taskId: string | number; name: string | null };

/**
 * Hire imports of the society still waiting or running in the Job Scheduler.
 * Their people are not in STD_PERSON yet, so launching them again would hire
 * them twice (read-only).
 */
export const findPendingHireImports = async (
  society: string,
): Promise<{ taskId: string; fileName: string }[]> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("task", sql.VarChar(64), IMPORT_TASK)
    .input("organization", sql.VarChar(4), society)
    .query<PendingRow>(
      `SELECT s.ID_SCHED_TASK AS taskId, s.SCHED_TASK_NAME AS name
FROM M4RJS_SCHED_TASKS s
JOIN M4RJS_TASK_EXE e ON e.ID_SCHED_TASK = s.ID_SCHED_TASK
WHERE s.ID_TASK = @task AND s.ID_ORGANIZATION = @organization AND e.STATUS IN (1, 2)
ORDER BY s.ID_SCHED_TASK`,
    );
  return result.recordset.map((row) => ({
    taskId: String(row.taskId),
    fileName: (row.name ?? "").trim(),
  }));
};

export type WaitForHireImportOptions = {
  timeoutMs?: number;
  intervalMs?: number;
  read?: typeof readHireImportOutcome;
  sleep?: (ms: number) => Promise<void>;
  now?: () => number;
};

const sleepFor = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

/**
 * Waits for the Job Scheduler to run the import of one hire file. Meta4 gives
 * the person ID inside that run, so the next person must not start before it.
 */
export const waitForHireImport = async (
  fileName: string,
  {
    timeoutMs = 4 * 60_000,
    intervalMs = 3_000,
    read = readHireImportOutcome,
    sleep = sleepFor,
    now = Date.now,
  }: WaitForHireImportOptions = {},
): Promise<HireImportOutcome> => {
  const deadline = now() + timeoutMs;
  for (;;) {
    const outcome = await read(fileName).catch(() => null);
    if (outcome) return outcome;
    if (now() >= deadline) return { state: "timeout" };
    await sleep(intervalMs);
  }
};
