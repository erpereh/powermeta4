import { describe, expect, it } from "vitest";
import {
  resolveHolidayCalendar,
  HolidayAssignmentError,
  HolidayReadContractError,
  type HolidayReadRow,
} from "./real-calendar";

const row = (
  kind: HolidayReadRow["kind"],
  values: Partial<HolidayReadRow> = {},
): HolidayReadRow => ({
  kind,
  locationKey: null,
  reference: null,
  source: null,
  calendar: null,
  from: "2026-01-01",
  to: "2026-12-31",
  date: null,
  description: null,
  ...values,
});
const assignment = (calendar: string | null, values: Partial<HolidayReadRow> = {}) =>
  row("assignment", { calendar, source: "center", ...values });
const holiday = (date: string, description: string | null = null, calendar = "C1") =>
  row("holiday", { calendar, date, description, from: null, to: null });

describe("calendario de asignaciones acreditadas", () => {
  it("distingue falta de asignación y calendario sin festivos", () => {
    expect(resolveHolidayCalendar(2026, [])).toBeNull();
    expect(resolveHolidayCalendar(2026, [assignment(null)])).toBeNull();
    expect(resolveHolidayCalendar(2026, [assignment("C1")])).toEqual({ year: 2026, holidays: [] });
  });
  it("deduplica asignaciones compatibles, fechas y descripciones sin perder fines de semana", () => {
    expect(
      resolveHolidayCalendar(2026, [
        assignment("C1"),
        assignment("C1", { source: "role" }),
        holiday("2026-08-15", "Fiesta"),
        holiday("2026-08-15", "Fiesta"),
        holiday("2026-08-15", "Local"),
        holiday("2026-01-01"),
      ]),
    ).toEqual({
      year: 2026,
      holidays: [
        { date: "2026-01-01", description: null },
        { date: "2026-08-15", description: "Fiesta · Local" },
      ],
    });
  });
  it("conserva cambios de calendario sin solape y sus extremos inclusivos", () => {
    expect(
      resolveHolidayCalendar(2026, [
        assignment("C1", { to: "2026-06-30" }),
        assignment("C2", { from: "2026-07-01", source: "country" }),
        holiday("2026-06-30"),
        holiday("2026-07-01", null, "C2"),
      ])?.holidays,
    ).toHaveLength(2);
  });
  it.each(["C2", null])(
    "bloquea solapes incompatibles (%s), sin deducir prioridades",
    (calendar) => {
      expect(() =>
        resolveHolidayCalendar(2026, [
          assignment("C1"),
          assignment(calendar, { source: "role", from: "2026-06-01", to: "2026-06-01" }),
        ]),
      ).toThrow(HolidayAssignmentError);
    },
  );
  it("exige un centro resuelto durante cada día de la ubicación", () => {
    const location = row("location", { locationKey: "1", reference: "L1" });
    const center = row("center", { locationKey: "1", reference: "WC1" });
    expect(resolveHolidayCalendar(2026, [location, center, assignment("C1")])?.year).toBe(2026);
    expect(() => resolveHolidayCalendar(2026, [location, assignment("C1")])).toThrow(
      HolidayAssignmentError,
    );
    expect(() =>
      resolveHolidayCalendar(2026, [location, { ...center, to: "2026-12-30" }, assignment("C1")]),
    ).toThrow(HolidayAssignmentError);
    expect(() =>
      resolveHolidayCalendar(2026, [
        location,
        center,
        { ...center, reference: "WC2" },
        assignment("C1"),
      ]),
    ).toThrow(HolidayAssignmentError);
  });
  it.each([
    [assignment("C1", { from: "2026-02-30" })],
    [assignment("C1", { from: "2025-12-31" })],
    [assignment("C1", { from: "2026-12-31", to: "2026-01-01" })],
    [assignment("C1"), holiday("2027-01-01")],
    [assignment("C1"), holiday("2026-01-01", null, "OTHER")],
    [holiday("2026-01-01")],
    [assignment("C1", { source: "unknown" })],
  ])("rechaza lecturas incoherentes sin convertirlas en un vacío (%#)", (...rows) => {
    expect(() => resolveHolidayCalendar(2026, rows)).toThrow(HolidayReadContractError);
  });
  it("acepta el día bisiesto y calcula solo el año indicado", () => {
    expect(
      resolveHolidayCalendar(2028, [
        assignment("C1", { from: "2028-01-01", to: "2028-12-31" }),
        holiday("2028-02-29"),
      ])?.holidays,
    ).toEqual([{ date: "2028-02-29", description: null }]);
  });
});
