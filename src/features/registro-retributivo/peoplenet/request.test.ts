import { describe, expect, it } from "vitest";

import {
  defaultPeopleNetPeriod,
  lastDayOfMonth,
  parseEmployeeIdsInput,
  parsePeopleNetAnalyzeRequest,
  periodDays,
} from "@/features/registro-retributivo/peoplenet/request";

const valid = { from: "2025-01-01", to: "2025-12-31", tolerance: 1 };

describe("parsePeopleNetAnalyzeRequest", () => {
  it("acepta un año natural y toda la sociedad", () => {
    const parsed = parsePeopleNetAnalyzeRequest(valid);
    expect(parsed).toMatchObject({
      ok: true,
      value: { from: "2025-01-01", to: "2025-12-31", employeeIds: [] },
    });
  });

  it.each([
    [{ ...valid, from: "2025-02-31" }, "Las fechas no son válidas."],
    [
      { ...valid, from: "2025-12-31", to: "2025-01-01" },
      "La fecha hasta debe ser posterior a la fecha desde.",
    ],
    [{ ...valid, from: "2024-01-01", to: "2025-12-31" }, "El periodo no puede superar 366 días."],
    [{ ...valid, from: "2025-01-15" }, /del día 1 de un mes al último día/],
    [{ ...valid, to: "2025-12-30" }, /del día 1 de un mes al último día/],
    [{ ...valid, employeeIds: ["1023'; DROP"] }, "La matrícula «1023'; DROP» no es válida."],
    [
      { ...valid, employeeIds: Array.from({ length: 201 }, (_, index) => `E${index}`) },
      /como máximo 200/,
    ],
    [{ ...valid, tolerance: -1 }, "La tolerancia debe ser un número mayor o igual que 0."],
    [{ to: "2025-12-31", tolerance: 1 }, "Indica las fechas desde y hasta."],
  ])("rechaza %j", (body, message) => {
    const parsed = parsePeopleNetAnalyzeRequest(body);
    expect(parsed.ok).toBe(false);
    if (!parsed.ok) expect(parsed.message).toMatch(message);
  });

  it("no acepta la sociedad desde el navegador y limpia el mapa y las exclusiones", () => {
    const parsed = parsePeopleNetAnalyzeRequest({
      ...valid,
      organization: "OTRA",
      employeeIds: [" 1023 ", "1023", "1045"],
      conceptMap: [{ pdfConcept: "Salario Base" }, null],
      excludedEmployeeIds: ["0099", "0099"],
    });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value).not.toHaveProperty("organization");
    expect(parsed.value.employeeIds).toEqual(["1023", "1045"]);
    expect(parsed.value.conceptMap).toEqual([]);
    expect(parsed.value.excludedEmployeeIds).toHaveLength(1);
  });
});

describe("utilidades del periodo", () => {
  it("cuenta los días con los bisiestos", () => {
    expect(periodDays("2024-01-01", "2024-12-31")).toBe(366);
    expect(periodDays("2025-03-01", "2025-03-01")).toBe(1);
  });

  it("calcula el último día de cada mes", () => {
    expect(lastDayOfMonth("2024-02")).toBe("2024-02-29");
    expect(lastDayOfMonth("2025-12-01")).toBe("2025-12-31");
  });

  it("propone el último año cerrado y separa matrículas", () => {
    expect(defaultPeopleNetPeriod(new Date(2026, 9, 22))).toEqual({
      from: "2025-01-01",
      to: "2025-12-31",
    });
    expect(parseEmployeeIdsInput("1023, 1045\n1023;2000  ")).toEqual(["1023", "1045", "2000"]);
  });
});
