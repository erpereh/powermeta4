import { describe, expect, it } from "vitest";
import { currentHolidayYear, holidayMonths } from "./calendar";

describe("calendario civil del portal", () => {
  it("usa el año de Madrid en el cambio de ejercicio, sin depender del host", () => {
    expect(currentHolidayYear(new Date("2026-12-31T22:59:59Z"))).toBe(2026);
    expect(currentHolidayYear(new Date("2026-12-31T23:00:00Z"))).toBe(2027);
    expect(currentHolidayYear(new Date("2026-01-01T00:00:00+09:00"))).toBe(2025);
  });
  it.each([
    [2026, 365],
    [2024, 366],
    [2100, 365],
    [2000, 366],
  ])("%i contiene %i fechas únicas y doce meses de seis semanas", (year, total) => {
    const months = holidayMonths(year);
    expect(months).toHaveLength(12);
    for (const month of months) {
      expect(month.weeks).toHaveLength(6);
      for (const week of month.weeks) expect(week).toHaveLength(7);
    }
    const days = months.flatMap((month) => month.weeks.flat().filter((day) => day !== null));
    expect(days).toHaveLength(total);
    expect(new Set(days.map((day) => day.date)).size).toBe(total);
    expect(days[0]?.date).toBe(`${year}-01-01`);
    expect(days.at(-1)?.date).toBe(`${year}-12-31`);
  });
  it("coloca enero de 2026 de domingo a sábado y conserva fines de semana", () => {
    const january = holidayMonths(2026)[0];
    expect(january.weeks[0].map((day) => day?.day ?? null)).toEqual([
      null,
      null,
      null,
      null,
      1,
      2,
      3,
    ]);
    expect(january.weeks[0][6]).toMatchObject({ date: "2026-01-03", weekend: true });
    expect(january.weeks[1][0]).toMatchObject({ date: "2026-01-04", weekend: true });
    expect(january.weeks[1][1]).toMatchObject({ date: "2026-01-05", weekend: false });
  });
  it("agosto de 2026 requiere la sexta semana y no pierde el día 31", () => {
    expect(holidayMonths(2026)[7].weeks[5].map((day) => day?.day ?? null)).toEqual([
      30,
      31,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
  it("29 de febrero solo existe en años bisiestos", () => {
    expect(
      holidayMonths(2024)[1]
        .weeks.flat()
        .some((day) => day?.date === "2024-02-29"),
    ).toBe(true);
    expect(holidayMonths(2026)[1].weeks.flat().filter(Boolean)).toHaveLength(28);
  });
});
