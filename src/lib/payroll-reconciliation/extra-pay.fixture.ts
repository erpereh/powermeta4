import { demoReport } from "./demo";
import { snapshot } from "./snapshot";
import { VERIFIED_EXTRA_RULE } from "./extra-pay-rule";
import type { ExtraPayData } from "./extra-pay-resolution";
import { DEFAULT_PARAMETERS } from "./types";

/** Invented employees/configuration, never evidence of a real PeopleNet population. */
export function automaticExtraFixture() {
  const detail = demoReport("2026-10");
  detail.rows = [detail.rows[0]];
  detail.headers.push("Periodo");
  detail.rows[0].push("1");
  const current = snapshot(detail, true, "CYC");
  const range = { DATE_FROM: "2026-01-01", DATE_TO: "4000-01-01" };
  const data: ExtraPayData = {
    payroll: [
      {
        EMPLOYEE: "009001",
        HR_PERIOD: "1",
        ENTITY: "DEMO",
        CURRENCY: "EUR",
        DATE_FROM: "2026-10-01",
        DATE_TO: "2026-10-31",
        FIXED_UNITS: "1",
        ABSENCE_DAYS: "0",
        STRIKE_DAYS: "0",
        SICK_DAYS: "0",
        ABSENCE_HOURS: "0",
        UNITS1: "0",
        UNITS2: "0",
        UNITS3: "1",
        UNITS4: "0",
        UNITS5: "0",
        PAID1: "0",
        PAID2: "0",
        PAID3: "0",
        PAID4: "0",
        PRORATED: "0",
      },
    ],
    histories: ["agreement", "salary", "entity"].map((kind) => ({
      KIND: kind,
      EMPLOYEE: "009001",
      HR_PERIOD: "1",
      VALUE: kind === "agreement" ? "A1" : kind === "salary" ? "1" : "DEMO",
      ...range,
    })),
    definitions: [1, 2, 3].map((order) => ({
      AGREEMENT: "A1",
      ORDINAL: String(order),
      EXTRA_ID: `E${order}`,
      PAY_MONTH: order === 3 ? "10" : order === 1 ? "6" : "12",
      PAY_DAY: "25",
      ...range,
      DEFINITION_FROM: range.DATE_FROM,
      DEFINITION_TO: range.DATE_TO,
      ORIGINAL: "N",
      PERCENTAGE: "100",
    })),
    defaults: [1, 2, 3, 4, 5].map((order) => ({
      COMPONENT: `CSP_PRORRATEADA_PE${order}`,
      VALUE: order === 5 ? null : "0",
    })),
    rules: [
      {
        RULE_ID: "R1",
        RULE_TI: "CSP_HRPERIOD_CALC",
        DATE_FROM: "2026-08-01",
        DATE_TO: "2026-10-31",
        PRIORITY: "3",
        CONDITION: "0",
        SOURCE: VERIFIED_EXTRA_RULE,
      },
    ],
    values: [],
    unsupported: [],
    applied: [],
  };
  return {
    current,
    data,
    period: "2026-10",
    parameters: { ...DEFAULT_PARAMETERS },
    previous: null,
    sources: [],
  };
}
