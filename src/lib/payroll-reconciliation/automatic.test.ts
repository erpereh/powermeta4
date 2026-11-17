import { describe, expect, it } from "vitest";
import {
  excessRulesFingerprint,
  previousPayment,
  resolveAutomaticExcess,
  resolveAutomaticTelework,
  type AutomaticRow,
  type ExcessData,
  type TeleworkData,
} from "./automatic";
import { demoReport } from "./demo";
import { reconcile } from "./engine";
import { hash } from "./hash";
import { snapshot } from "./snapshot";
import { TELEWORK_RULE_2022, TELEWORK_RULE_2026, teleworkVariant } from "./telework-rule";
import { DEFAULT_PARAMETERS, type Dossier, type Snapshot, type Source } from "./types";

/** Invented people/amounts; row shapes reproduce M4PRENOMINA (2026-11-17). */
const CALCULATED = "2026-10-20 10:00:00";
const ids = ["009001", "009002", "009003"];

function report(values: Record<string, Record<string, string>> = {}): Snapshot {
  const detail = demoReport("2026-10");
  for (const [header, byId] of Object.entries(values)) {
    const column = detail.headers.indexOf(header);
    detail.rows = detail.rows.map((row) =>
      row.map((cell, index) =>
        index === column && byId[row[0]] !== undefined ? byId[row[0]] : cell,
      ),
    );
  }
  return snapshot(detail, true, "CYC");
}
const slice = (employee: string, extra: Record<string, string> = {}): AutomaticRow => ({
  EMPLOYEE: employee,
  HR_PERIOD: "1",
  ENTITY: "DEMO",
  DATE_FROM: "2026-10-01",
  DATE_TO: "2026-10-31",
  NEW_HIRE: "0",
  PAID: "0",
  CALCULATED,
  ...extra,
});
function telework(overrides: Partial<TeleworkData> = {}): TeleworkData {
  return {
    rules: [
      {
        RULE_ID: "_RULE_U_P",
        DATE_FROM: "2026-09-01",
        DATE_TO: "4000-01-01",
        PRIORITY: "3",
        CONDITION: "0",
        SOURCE: TELEWORK_RULE_2026,
      },
    ],
    payroll: [
      slice("009001", { PAID: "22.400000" }),
      slice("009002", { PAID: "44.800000" }),
      slice("009003"),
    ],
    previous: [],
    defaults: ["CSP_IND_ABONO_TELETRABAJO", "CSP_P_ABONO_TELETRABAJO"].map((COMPONENT) => ({
      COMPONENT,
      VALUE: "0",
      UPDATED: "2022-02-10 15:30:12",
    })),
    values: [
      {
        LEVEL: "entity",
        KEY1: "DEMO",
        KEY2: null,
        COMPONENT: "CSP_P_ABONO_TELETRABAJO",
        VALUE: "22.40000000",
        PRIORITY: "2",
        DATE_FROM: "2026-10-01",
        DATE_TO: "2026-10-31",
        UPDATED: "2026-10-01 00:00:00",
      },
      ...[
        ["009002", "2"],
        ["009003", "1.00000000"],
      ].map(([KEY1, VALUE]) => ({
        LEVEL: "individual",
        KEY1,
        KEY2: "1",
        COMPONENT: "CSP_IND_ABONO_TELETRABAJO",
        VALUE,
        PRIORITY: "1",
        DATE_FROM: "2026-09-01",
        DATE_TO: "4000-01-01",
        UPDATED: "2026-09-16 12:28:33",
      })),
    ],
    unsupported: [],
    ...overrides,
  };
}
const paidReport = () =>
  report({
    "importe abono teletrabajo": {
      "009001": "22.4",
      "009002": "44.8",
      "009003": "0",
    },
  });
function findings(current: Snapshot, sources: Source[] = [], control = "C05") {
  const input: Pick<Dossier, "period" | "current" | "previous" | "sources" | "parameters"> = {
    period: "2026-10",
    current,
    previous: null,
    sources,
    parameters: DEFAULT_PARAMETERS,
  };
  return reconcile(input).findings.filter((finding) => finding.control === control);
}
const byId = (rows: ReturnType<typeof findings>, id: string) =>
  rows.find((finding) => finding.employeeId === id)!;

describe("C05 telework from the Meta4 rule and PeopleNet configuration", () => {
  it("recognises both verified LN4 versions and rejects any other code", () => {
    expect(teleworkVariant(TELEWORK_RULE_2026)).toBe("telework-2026-09");
    expect(teleworkVariant(`' comentario\n${TELEWORK_RULE_2022}`)).toBe("telework-2022-06");
    expect(teleworkVariant(TELEWORK_RULE_2026.replace("*2", "*3"))).toBeNull();
    expect(previousPayment("2026-10-25")).toBe("2026-09-25");
    expect(previousPayment("2026-01-25")).toBe("2025-12-25");
  });

  it("pays the entity price, twice for the 80/20 indicator and nothing for indicator 1", () => {
    const current = paidReport();
    current.teleworkAutomatic = resolveAutomaticTelework(current, telework());
    const rows = findings(current);
    expect(rows.map((row) => [row.employeeId, row.status, row.expected])).toEqual([
      ["009001", "Coincide", "22.4"],
      ["009002", "Coincide", "44.8"],
      ["009003", "Coincide", "0"],
    ]);
    expect(byId(rows, "009002").reason).toContain("80/20");
    expect(byId(rows, "009003").reason).toContain("excluido");
    // Same finding id as the source-based engine, so earlier reviews stay attached.
    expect(byId(rows, "009001").id).toBe(hash(["telework", "009001"]).slice(0, 24));
  });

  it("flags a payment that differs from the configured amount", () => {
    const current = report({
      "importe abono teletrabajo": { "009001": "40.32", "009002": "44.8" },
    });
    current.teleworkAutomatic = resolveAutomaticTelework(
      current,
      telework({
        payroll: [
          slice("009001", { PAID: "40.32" }),
          slice("009002", { PAID: "44.8" }),
          slice("009003"),
        ],
      }),
    );
    expect(byId(findings(current), "009001")).toMatchObject({
      status: "Con diferencia",
      expected: "22.4",
      delta: "17.92",
    });
  });

  it("applies the new-hire and whole previous-month leave exclusions", () => {
    const current = report({
      "importe abono teletrabajo": { "009001": "0", "009002": "0" },
    });
    current.teleworkAutomatic = resolveAutomaticTelework(
      current,
      telework({
        payroll: [slice("009001", { NEW_HIRE: "1" }), slice("009002"), slice("009003")],
        // September has 30 days; every record of the previous allocation must agree.
        previous: [
          { EMPLOYEE: "009002", LEAVE_DAYS: "30.000000" },
          { EMPLOYEE: "009002", LEAVE_DAYS: "30" },
        ],
      }),
    );
    const rows = findings(current);
    expect(byId(rows, "009001")).toMatchObject({
      status: "Coincide",
      expected: "0",
    });
    expect(byId(rows, "009001").reason).toContain("Alta en el mes");
    expect(byId(rows, "009002")).toMatchObject({
      status: "Coincide",
      expected: "0",
    });
    expect(byId(rows, "009002").reason).toContain("Baja todo el mes anterior");
  });

  it("keeps pending a configuration rewritten after the calculation or the run", () => {
    const current = paidReport();
    const data = telework();
    data.values = data.values.map((row) =>
      row.KEY1 === "009002" ? { ...row, UPDATED: "2026-10-30 09:00:00" } : row,
    );
    current.teleworkAutomatic = resolveAutomaticTelework(current, data);
    const pending = byId(findings(current), "009002");
    expect(pending).toMatchObject({ status: "No comparable", expected: null });
    expect(pending.reason).toContain("después del cálculo o de la ejecución");
    // A row starting the day after the month still proves the history was touched.
    const next = telework();
    next.values.push({
      ...next.values[1],
      KEY1: "009001",
      DATE_FROM: "2026-11-01",
      UPDATED: "2026-11-12 12:44:27",
    });
    current.teleworkAutomatic = resolveAutomaticTelework(current, next);
    expect(byId(findings(current), "009001").status).toBe("No comparable");
    // Next month's entity price is a new monthly row, not a rewrite.
    const price = telework();
    price.values.push({
      ...price.values[0],
      DATE_FROM: "2026-11-01",
      DATE_TO: "2026-11-30",
      UPDATED: "2026-11-12 10:00:00",
    });
    current.teleworkAutomatic = resolveAutomaticTelework(current, price);
    expect(byId(findings(current), "009001").status).toBe("Coincide");
  });

  it("never computes with an unverified rule, inheritance or the 80/20 before 09/2026", () => {
    const current = paidReport();
    current.teleworkAutomatic = resolveAutomaticTelework(
      current,
      telework({ rules: [{ ...telework().rules[0], SOURCE: "Return(0)" }] }),
    );
    expect(findings(current).every((row) => row.status === "No comparable")).toBe(true);
    current.teleworkAutomatic = resolveAutomaticTelework(
      current,
      telework({
        unsupported: [{ LEVEL: "M4SCO_WC_VALUES", COMPONENT: "CSP_P_ABONO_TELETRABAJO" }],
      }),
    );
    expect(findings(current)[0].reason).toContain("Herencia");
    current.teleworkAutomatic = resolveAutomaticTelework(
      current,
      telework({
        rules: [
          {
            ...telework().rules[0],
            SOURCE: TELEWORK_RULE_2022,
            DATE_FROM: "2022-06-01",
          },
        ],
      }),
    );
    const rows = findings(current);
    expect(byId(rows, "009001").status).toBe("Coincide");
    expect(byId(rows, "009002")).toMatchObject({
      status: "No comparable",
      expected: null,
    });
  });

  it("requires the report and the accumulator read to hold the same amount", () => {
    const current = report({
      "importe abono teletrabajo": { "009001": "17.92" },
    });
    current.teleworkAutomatic = resolveAutomaticTelework(current, telework());
    const row = byId(findings(current), "009001");
    expect(row.status).toBe("No comparable");
    expect(row.reason).toContain("no tienen el mismo importe");
  });

  it("cross-checks RRHH's 80/20 list with indicator 2 and keeps any disagreement pending", () => {
    const current = paidReport();
    current.teleworkAutomatic = resolveAutomaticTelework(current, telework());
    const list = (members: string[]): Source => ({
      id: "s1",
      hash: "h1",
      category: "teletrabajo",
      period: "2026-10",
      complete: false,
      profile: "colectivo",
      facts: members.map((employeeId, index) => ({
        employeeId,
        values: { member: "1" },
        reference: `fila ${index + 2}`,
      })),
      diagnostics: [],
      cellCount: 1,
    });
    let rows = findings(current, [list(["9002"])]);
    expect(byId(rows, "009002").status).toBe("Coincide");
    expect(byId(rows, "009002").reason).toContain("Coincide con el colectivo");
    rows = findings(current, [list(["009001"])]);
    expect(byId(rows, "009001").status).toBe("No comparable");
    expect(byId(rows, "009001").reason).toContain("Figura en el colectivo");
    expect(byId(rows, "009002").reason).toContain("no figura en el colectivo");
  });

  it("ignores a capture made for another run", () => {
    const current = paidReport();
    current.teleworkAutomatic = {
      ...resolveAutomaticTelework(current, telework()),
      runHash: "otra",
    };
    expect(findings(current).every((row) => row.status === "No comparable")).toBe(true);
  });
});

function excess(overrides: Partial<ExcessData> = {}): ExcessData {
  return {
    rules: [
      {
        RULE_ID: "SCO_EXC_PREV_PAYMENT",
        DATE_FROM: "1994-01-01",
        DATE_TO: "4000-01-01",
        SOURCE: "Return(0)",
      },
    ],
    payroll: ids.map((EMPLOYEE) => ({
      EMPLOYEE,
      HR_PERIOD: "1",
      ENTITY: "DEMO",
      PAID: EMPLOYEE === "009001" ? "157.08" : EMPLOYEE === "009002" ? "10" : "0",
      CALCULATED,
    })),
    net: [
      { EMPLOYEE: "009001", HR_PERIOD: "1", NET: "-157.080000" },
      { EMPLOYEE: "009002", HR_PERIOD: "1", NET: "2400.00" },
    ],
    movements: [
      {
        KIND: "payment",
        EMPLOYEE: "009002",
        HR_PERIOD: "1",
        PAY_DATE: "2026-09-25",
        AMOUNT: "1000",
        UPDATED: "2026-09-21 13:51:04",
      },
      {
        KIND: "order",
        EMPLOYEE: "009002",
        HR_PERIOD: "1",
        PAY_DATE: "2026-09-25",
        AMOUNT: "990",
        UPDATED: "2026-10-02 07:55:31",
      },
    ],
    adjustments: [],
    ...overrides,
  };
}
const verified = (data: ExcessData) => excessRulesFingerprint(data.rules);
const excessReport = () =>
  report({
    "Exceso líquido paga anterior": {
      "009001": "157.08",
      "009002": "10",
      "009003": "0",
    },
  });

describe("C11 previous excess from net and payments/orders", () => {
  it("reproduces SCO_EXC_PREV_PAYMENT: negative previous net plus payments minus orders", () => {
    const current = excessReport();
    const data = excess();
    current.excessAutomatic = resolveAutomaticExcess(current, data, verified(data));
    const rows = findings(current, [], "C11");
    expect(rows.map((row) => [row.employeeId, row.status, row.expected])).toEqual([
      ["009001", "Coincide", "157.08"],
      ["009002", "Coincide", "10"],
      ["009003", "Coincide", "0"],
    ]);
    expect(byId(rows, "009001").reason).toContain("líquido negativo anterior");
    expect(byId(rows, "009002").reason).toContain("se recalculó después de pagarse");
  });

  it("keeps pending what the rule does not explain", () => {
    const current = excessReport();
    const data = excess({
      movements: [
        ...excess().movements,
        {
          KIND: "order",
          EMPLOYEE: "009003",
          HR_PERIOD: "1",
          PAY_DATE: "2026-09-25",
          AMOUNT: "1500",
          UPDATED: "2026-09-20 10:00:00",
        },
      ],
      adjustments: [{ EMPLOYEE: "009001" }],
    });
    current.excessAutomatic = resolveAutomaticExcess(current, data, verified(data));
    const rows = findings(current, [], "C11");
    expect(byId(rows, "009001").reason).toContain("Paga de ajustes");
    expect(byId(rows, "009003").reason).toContain("sin ningún pago registrado");
    expect(rows.filter((row) => row.status === "No comparable").length).toBe(2);
    const late = excess();
    late.movements[1] = {
      ...late.movements[1],
      UPDATED: "2026-10-30 10:00:00",
    };
    current.excessAutomatic = resolveAutomaticExcess(current, late, verified(late));
    expect(byId(findings(current, [], "C11"), "009002").status).toBe("No comparable");
  });

  it("requires the verified LN4 rules", () => {
    const current = excessReport();
    current.excessAutomatic = resolveAutomaticExcess(current, excess());
    const rows = findings(current, [], "C11");
    expect(rows.every((row) => row.status === "No comparable")).toBe(true);
    expect(rows[0].reason).toContain("SCO_EXC_PREV_PAYMENT");
  });
});
