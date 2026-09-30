import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import * as XLSX from "xlsx";

import { FIRST_PERSON_ROW, HIRE_DATA_SHEET, MAX_PERSON_COUNT } from "./mapping";

/**
 * One AltaNueva row of the log PeopleNet writes after SRTC_LAUNCH_IMPORT:
 * column A is 1 for a rejected person and 0 for an imported one, column B
 * carries PeopleNet's message.
 */
export type HireImportLogRow = { person: number; failed: boolean; message: string };

/** "AltaPersonas_X_2026-09-30_15-34-42.xls" → "AltaPersonas_X_2026-09-30_15-34-42_log_". */
export const hireImportLogPrefix = (fileName: string): string =>
  `${fileName.replace(/\.xls$/i, "")}_log_`;

const cellText = (sheet: XLSX.WorkSheet, address: string): string => {
  const cell = sheet[address];
  if (!cell || cell.v === undefined || cell.v === null) return "";
  return String(cell.v).trim();
};

/** Reads the status and message of every person row; formulas and styles are skipped. */
export const parseHireImportLog = (bytes: Buffer): HireImportLogRow[] => {
  const workbook = XLSX.read(bytes, {
    type: "buffer",
    sheets: HIRE_DATA_SHEET,
    cellFormula: false,
    cellHTML: false,
    cellStyles: false,
    cellText: false,
    cellDates: false,
  });
  const sheet = workbook.Sheets[HIRE_DATA_SHEET];
  if (!sheet) return [];
  const rows: HireImportLogRow[] = [];
  for (let offset = 0; offset < MAX_PERSON_COUNT; offset += 1) {
    const row = FIRST_PERSON_ROW + offset;
    const status = cellText(sheet, `A${row}`);
    if (status === "") break;
    rows.push({
      person: offset + 1,
      failed: status !== "0",
      message: cellText(sheet, `B${row}`),
    });
  }
  return rows;
};

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export type ReadHireImportLogOptions = { attempts?: number; delayMs?: number };

/**
 * Looks for the log next to the hire file, as PeopleNet names it, for a few
 * seconds. Returns null when it does not appear or cannot be read: the
 * outcome then stays the one SRTC_LAUNCH_IMPORT reported.
 */
export const readHireImportLog = async (
  filePath: string,
  { attempts = 6, delayMs = 500 }: ReadHireImportLogOptions = {},
): Promise<HireImportLogRow[] | null> => {
  const directory = path.win32.dirname(filePath);
  const prefix = hireImportLogPrefix(path.win32.basename(filePath)).toLowerCase();
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    if (attempt > 0) await wait(delayMs);
    try {
      const logName = (await readdir(directory))
        .filter((name) => {
          const lower = name.toLowerCase();
          return lower.startsWith(prefix) && lower.endsWith(".xls");
        })
        .sort()
        .at(-1);
      if (!logName) continue;
      return parseHireImportLog(await readFile(path.win32.join(directory, logName)));
    } catch {
      // The share may be momentarily unavailable or the log still being written.
    }
  }
  return null;
};
