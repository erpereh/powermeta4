import { describe, expect, it } from "vitest";

import { parseHireImportTrace, waitForHireImport } from "./import-status";

describe("hire import status", () => {
  it("reads the reasons from the import trace", () => {
    const trace = Buffer.from(
      [
        "~BLOBD\0\0txtREADING EXCEL: ~ldb1.xls",
        "\t\tERROR LINES",
        "\t\t\tEXCEL_ROW\tID_GROUP\tID_ERROR\tTEXT",
        '\t\t\t6\t1\t2,116,126;\tEl campo "Fusion ID" está vacío.   No se puede seguir.',
        '\t\tSummary "AltaNueva": Rows with error: 1, Rows processed: 1',
      ].join("\r\n"),
      "latin1",
    );
    expect(parseHireImportTrace(trace)).toEqual([
      'El campo "Fusion ID" está vacío. No se puede seguir.',
    ]);
    expect(parseHireImportTrace(null)).toEqual([]);
  });

  it("polls until the scheduler finishes and gives up at the deadline", async () => {
    let clock = 0;
    const answers = [
      null,
      null,
      { state: "done" as const, taskId: "7", total: 1, errors: 0, messages: [] },
    ];
    const done = await waitForHireImport("AltaPersonas.xls", {
      read: async () => answers.shift() ?? null,
      sleep: async (ms) => {
        clock += ms;
      },
      now: () => clock,
      intervalMs: 1000,
      timeoutMs: 10_000,
    });
    expect(done).toEqual({ state: "done", taskId: "7", total: 1, errors: 0, messages: [] });

    clock = 0;
    const late = await waitForHireImport("AltaPersonas.xls", {
      read: async () => null,
      sleep: async (ms) => {
        clock += ms;
      },
      now: () => clock,
      intervalMs: 1000,
      timeoutMs: 3000,
    });
    expect(late).toEqual({ state: "timeout" });
  });
});
