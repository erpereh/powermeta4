import { describe, expect, test } from "vitest";

import { parsePayrollPeriod, sortPeriodLabels } from "@/features/registro-retributivo/utils/spanishDates";

describe("sortPeriodLabels", () => {
  test("orders Spanish payroll periods by year then January to December", () => {
    const ordered = sortPeriodLabels([
      "Del 1 al 30 Abril 2025",
      "Del 1 al 31 Diciembre 2025",
      "Del 1 al 31 Enero 2025",
      "Del 1 al 31 Diciembre 2024",
      "Febrero 2025",
      "Del 1 al 30 Septiembre 2025",
    ]);

    expect(ordered).toEqual([
      "Del 1 al 31 Diciembre 2024",
      "Del 1 al 31 Enero 2025",
      "Febrero 2025",
      "Del 1 al 30 Abril 2025",
      "Del 1 al 30 Septiembre 2025",
      "Del 1 al 31 Diciembre 2025",
    ]);
  });

  test("parses month-year labels without a Del-al range", () => {
    expect(parsePayrollPeriod("Enero 2025").start).toBe("2025-01-01");
    expect(parsePayrollPeriod("Del 1 al 28 Febrero 2025").start).toBe("2025-02-01");
  });
});
