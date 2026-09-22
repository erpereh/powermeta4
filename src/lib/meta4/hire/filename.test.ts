import { describe, expect, it } from "vitest";

import {
  buildHireFileName,
  buildHireFilePath,
  formatHireTimestamp,
  sanitizeHireUsername,
} from "./filename";

describe("hire filenames", () => {
  it("keeps a Meta4 username and formats a Windows-safe timestamp", () => {
    const when = new Date(2026, 8, 22, 11, 12, 34);
    expect(sanitizeHireUsername("JORGE.SALVADOR")).toBe("JORGE.SALVADOR");
    expect(formatHireTimestamp(when)).toBe("2026-09-22_11-12-34");
    expect(buildHireFileName("JORGE.SALVADOR", when)).toBe(
      "Hire_JORGE.SALVADOR_2026-09-22_11-12-34.xls",
    );
  });

  it("replaces characters that are illegal in a Windows filename", () => {
    expect(sanitizeHireUsername(' a<b>c:d"e/f\\g|h?i*j ')).toBe("a_b_c_d_e_f_g_h_i_j");
    expect(sanitizeHireUsername("   ")).toBe("usuario");
    expect(sanitizeHireUsername("")).toBe("usuario");
  });

  it("joins the import directory and does not treat the directory as the file", () => {
    const directory = String.raw`\\WMETA4PRE2\powermeta4\import_users_excel`;
    const fileName = "Hire_JORGE.SALVADOR_2026-09-22_11-12-34.xls";
    const filePath = buildHireFilePath(directory, fileName);
    expect(filePath).toBe(`${directory}\\${fileName}`);
    expect(filePath).not.toBe(directory);
    expect(filePath.endsWith("\\Hire.xls")).toBe(false);
  });
});
