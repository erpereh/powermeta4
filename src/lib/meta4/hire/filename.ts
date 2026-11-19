import path from "node:path";

const pad = (value: number): string => String(value).padStart(2, "0");

export const formatHireTimestamp = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(date.getMinutes())}-${pad(date.getSeconds())}`;

/**
 * Without the username: Meta4 uses the file name as the scheduled task name
 * (M4RJS_SCHED_TASKS.SCHED_TASK_NAME, 50 characters) and cut ".xls" to ".xl".
 * Launches are serialized, so the timestamp keeps names unique.
 */
export const buildHireFileName = (date: Date): string =>
  `AltaPersonas_${formatHireTimestamp(date)}.xls`;

export const buildHireFilePath = (directory: string, fileName: string): string =>
  path.win32.join(directory.replace(/[\\/]+$/, ""), fileName);
