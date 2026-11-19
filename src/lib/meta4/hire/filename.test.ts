import { describe, expect, it } from "vitest";

import { buildHireFileName, buildHireFilePath, formatHireTimestamp } from "./filename";

/** M4RJS_SCHED_TASKS.SCHED_TASK_NAME keeps 50 characters of the file name. */
const SCHED_TASK_NAME_LENGTH = 50;

describe("hire filenames", () => {
  it("formats a Windows-safe timestamp without the username", () => {
    const when = new Date(2026, 8, 22, 11, 12, 34);
    expect(formatHireTimestamp(when)).toBe("2026-09-22_11-12-34");
    expect(buildHireFileName(when)).toBe("AltaPersonas_2026-09-22_11-12-34.xls");
  });

  it("fits the scheduled task name so Meta4 keeps the .xls extension", () => {
    const name = buildHireFileName(new Date(2026, 11, 31, 23, 59, 59));
    expect(name.length).toBeLessThanOrEqual(SCHED_TASK_NAME_LENGTH);
    expect(name.slice(0, SCHED_TASK_NAME_LENGTH).endsWith(".xls")).toBe(true);
  });

  it("joins the import directory and does not treat the directory as the file", () => {
    const directory = String.raw`\\WMETA4PRE2\powermeta4\import_users_excel`;
    const fileName = "AltaPersonas_2026-09-22_11-12-34.xls";
    const filePath = buildHireFilePath(directory, fileName);
    expect(filePath).toBe(`${directory}\\${fileName}`);
    expect(filePath).not.toBe(directory);
    expect(filePath.endsWith("\\Hire.xls")).toBe(false);
  });
});
