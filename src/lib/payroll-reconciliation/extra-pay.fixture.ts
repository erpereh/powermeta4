import { demoReport } from "./demo";
import { snapshot } from "./snapshot";
import { HISTORICAL_EXTRA_RULE, VERIFIED_EXTRA_RULE } from "./extra-pay-rule";
import { extraMonth, type ExtraPayData } from "./extra-pay-resolution";
import { DEFAULT_PARAMETERS } from "./types";

/** Invented employees/configuration, never evidence of a real PeopleNet population. */
export function automaticExtraFixture(
  period = "2026-10",
  mode: "R1" | "definition" | "historical" = "R1",
) {
  const usesIndicators = mode !== "definition";
  const detail = demoReport(period);
  detail.rows = [detail.rows[0]];
  detail.headers.push("Periodo");
  detail.rows[0].push("1");
  const current = snapshot(detail, true, "CYC");
  const range = { DATE_FROM: `${period.slice(0, 4)}-01-01`, DATE_TO: "4000-01-01" };
  const month = extraMonth(period);
  const data: ExtraPayData = {
    payroll: [
      {
        EMPLOYEE: "009001",
        HR_PERIOD: "1",
        ENTITY: "DEMO",
        CURRENCY: "EUR",
        DATE_FROM: month.first,
        DATE_TO: month.last,
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
      PAY_MONTH: order === 3 ? period.slice(5, 7) : order === 1 ? "6" : "12",
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
        RULE_ID: usesIndicators ? "R1" : "CSP_PRORRATEADA_REV",
        RULE_TI: "CSP_HRPERIOD_CALC",
        DATE_FROM: mode === "R1" ? "2026-08-01" : "1800-01-01",
        DATE_TO: mode === "R1" ? "2026-10-31" : mode === "historical" ? "2026-07-31" : "4000-01-01",
        PRIORITY: mode === "historical" ? "2" : "3",
        RULE_ORDER: usesIndicators ? "100" : null,
        CONDITION: "0",
        SOURCE:
          mode === "R1"
            ? VERIFIED_EXTRA_RULE
            : mode === "historical"
              ? HISTORICAL_EXTRA_RULE
              : "Return(CSP_HRPERIOD_CALC.CSP_PRORRATEADA)",
      },
    ],
    values: [],
    unsupported: [],
    applied: [],
  };
  return {
    current,
    data,
    period,
    parameters: { ...DEFAULT_PARAMETERS },
    previous: null,
    sources: [],
  };
}
