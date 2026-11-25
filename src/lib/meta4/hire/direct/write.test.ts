import { beforeEach, describe, expect, it, vi } from "vitest";

import type { HireModel } from "./model-types";
import type { HirePlan } from "./plan";

const state = vi.hoisted(() => ({
  queries: [] as { text: string; inputs: Record<string, unknown> }[],
  taken: 0,
  failOn: "" as string,
  committed: 0,
  rolledBack: 0,
}));

vi.mock("mssql", () => {
  class Transaction {
    async begin() {}
    async commit() {
      state.committed += 1;
    }
    async rollback() {
      state.rolledBack += 1;
    }
  }
  class Request {
    private inputs: Record<string, unknown> = {};
    input(name: string, _type: unknown, value: unknown) {
      this.inputs[name] = value;
      return this;
    }
    async query(text: string) {
      state.queries.push({ text, inputs: this.inputs });
      if (state.failOn && text.includes(state.failOn)) throw new Error("insert failed");
      if (text.startsWith("SELECT COUNT(*)")) return { recordset: [{ total: state.taken }] };
      if (text.includes("NEXT VALUE FOR")) return { recordset: [{ id: 1000283331 }] };
      return { recordset: [] };
    }
  }
  const type = () => ({});
  const mssql = {
    Transaction,
    Request,
    ISOLATION_LEVEL: { SERIALIZABLE: 4 },
    MAX: -1,
    VarChar: type,
    NVarChar: type,
    Char: type,
    NChar: type,
    Numeric: type,
    Int: {},
    BigInt: {},
    SmallInt: {},
    TinyInt: {},
    Float: {},
    Real: {},
    Bit: {},
    Date: {},
    SmallDateTime: {},
    DateTime2: {},
    DateTime: {},
    Text: {},
    NText: {},
  };
  return { default: mssql, ...mssql };
});

vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetWritePool: async () => ({}) }));

const { writeDirectHire } = await import("./write");

const model: HireModel = {
  generatedFrom: { category: "SAVE_HIRE", t3: [], template: "" },
  template: { headers: {}, defaults: {} },
  groups: [],
  tables: {
    STD_HR_PERIOD: {
      object: "STD_HR_PERIOD",
      audit: "AUC_STD_HR_PERIOD",
      columns: [
        { name: "STD_ID_HR", sqlType: "varchar", length: 9 },
        { name: "STD_DT_START", sqlType: "datetime" },
      ],
    },
    AUC_STD_HR_PERIOD: {
      object: "AUC_STD_HR_PERIOD",
      columns: [
        { name: "ID_EXECUTION", sqlType: "numeric", precision: 10, scale: 0 },
        { name: "STD_ID_HR", sqlType: "varchar", length: 9 },
      ],
    },
  },
};

const plan: HirePlan = {
  rows: [{ table: "STD_HR_PERIOD", values: { STD_ID_HR: "1830", STD_DT_START: new Date(0) } }],
  skipped: [],
  audit: [{ table: "AUC_STD_HR_PERIOD", values: { STD_ID_HR: "1830" } }],
};

const target = {
  personId: "1830",
  document: "00000001R",
  counter: { society: "CYC", process: "STD_PERSON", sequence: 1830 },
};

beforeEach(() => {
  state.queries = [];
  state.taken = 0;
  state.failOn = "";
  state.committed = 0;
  state.rolledBack = 0;
});

describe("writeDirectHire", () => {
  it("inserts the plan, numbers the audit and raises the counter in one transaction", async () => {
    await writeDirectHire(model, plan, target);
    const texts = state.queries.map((q) => q.text);
    expect(texts[0]).toContain("WITH (UPDLOCK, HOLDLOCK)");
    expect(texts[1]).toBe(
      "INSERT INTO [STD_HR_PERIOD] ([STD_ID_HR], [STD_DT_START]) VALUES (@p0, @p1)",
    );
    expect(texts[2]).toContain("NEXT VALUE FOR [M4RDC_SEQUENCE]");
    expect(texts[3]).toBe(
      "INSERT INTO [AUC_STD_HR_PERIOD] ([ID_EXECUTION], [STD_ID_HR]) VALUES (@p0, @p1)",
    );
    expect(state.queries[3]?.inputs.p0).toBe(1000283331);
    expect(texts[4]).toContain("UPDATE [M4CSP_BLOCK_SEQ] SET SCO_SEQUENCE = @sequence");
    expect(texts[4]).toContain("SCO_SEQUENCE < @sequence");
    expect(texts.every((t) => !/DELETE/i.test(t))).toBe(true);
    expect(state.committed).toBe(1);
    expect(state.rolledBack).toBe(0);
  });

  it("writes nothing when the ID or document was taken meanwhile", async () => {
    state.taken = 1;
    await expect(writeDirectHire(model, plan, target)).rejects.toThrow(/ya existen en PeopleNet/);
    expect(state.queries.filter((q) => q.text.startsWith("INSERT"))).toHaveLength(0);
    expect(state.rolledBack).toBe(1);
    expect(state.committed).toBe(0);
  });

  it("rolls everything back when an insert fails", async () => {
    state.failOn = "AUC_STD_HR_PERIOD";
    await expect(writeDirectHire(model, plan, target)).rejects.toThrow("insert failed");
    expect(state.rolledBack).toBe(1);
    expect(state.committed).toBe(0);
  });

  it("refuses tables and columns outside the model", async () => {
    await expect(
      writeDirectHire(
        model,
        { ...plan, rows: [{ table: "STD_PERSON", values: {} }], audit: [] },
        target,
      ),
    ).rejects.toThrow(/no puede escribir en STD_PERSON/);
    await expect(
      writeDirectHire(
        model,
        { ...plan, rows: [{ table: "STD_HR_PERIOD", values: { OTHER: "x" } }], audit: [] },
        target,
      ),
    ).rejects.toThrow(/columnas que STD_HR_PERIOD no tiene/);
  });
});
