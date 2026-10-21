import { holidayMonths, type HolidayCalendar } from "./calendar";

export type HolidayReadRow = {
  readonly kind: "location" | "center" | "assignment" | "holiday";
  readonly locationKey: string | null;
  readonly reference: string | null;
  readonly source: string | null;
  readonly calendar: string | null;
  readonly from: string | null;
  readonly to: string | null;
  readonly date: string | null;
  readonly description: string | null;
};

export class HolidayAssignmentError extends Error {
  constructor(
    message = "Hay asignaciones de calendario incompatibles o un centro sin resolver. No se puede determinar tu calendario con seguridad.",
  ) {
    super(message);
    this.name = "HolidayAssignmentError";
  }
}

export class HolidayReadContractError extends Error {
  constructor() {
    super("La lectura del calendario contiene fechas o registros no válidos.");
    this.name = "HolidayReadContractError";
  }
}

const civilDate = (value: string | null): string => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new HolidayReadContractError();
  const date = new Date(`${value}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value)
    throw new HolidayReadContractError();
  return value;
};

/**
 * No infiere la prioridad de APPLYTABLE. Solo acepta un único calendario por
 * fecha; coincidencias idénticas se deduplican y cambios sin solape se conservan.
 */
export function resolveHolidayCalendar(
  year: number,
  rows: readonly HolidayReadRow[],
): HolidayCalendar | null {
  const days = holidayMonths(year).flatMap((month) =>
    month.weeks.flatMap((week) => week.flatMap((day) => (day ? [day.date] : []))),
  );
  const intervals = rows
    .filter((row) => row.kind !== "holiday")
    .map((row) => {
      const from = civilDate(row.from);
      const to = civilDate(row.to);
      if (from > to || from < days[0] || to > days[days.length - 1])
        throw new HolidayReadContractError();
      if (
        (row.kind === "location" || row.kind === "center") &&
        (!row.locationKey || !row.reference)
      )
        throw new HolidayReadContractError();
      if (row.kind === "assignment" && !["role", "center", "country"].includes(row.source ?? ""))
        throw new HolidayReadContractError();
      return { ...row, from, to };
    });
  const active = new Map<string, string>();
  for (const date of days) {
    const current = intervals.filter((row) => row.from <= date && row.to >= date);
    for (const location of current.filter((row) => row.kind === "location")) {
      const centers = new Set(
        current
          .filter((row) => row.kind === "center" && row.locationKey === location.locationKey)
          .map((row) => row.reference),
      );
      if (centers.size !== 1) throw new HolidayAssignmentError();
    }
    const calendars = new Set(
      current.filter((row) => row.kind === "assignment").map((row) => row.calendar),
    );
    if (calendars.size > 1) throw new HolidayAssignmentError();
    const calendar = calendars.values().next().value;
    if (calendar) active.set(date, calendar);
  }
  const holidays = new Map<string, Set<string>>();
  for (const row of rows.filter((row) => row.kind === "holiday")) {
    const date = civilDate(row.date);
    if (!row.calendar || active.get(date) !== row.calendar) throw new HolidayReadContractError();
    const descriptions = holidays.get(date) ?? new Set<string>();
    if (row.description?.trim()) descriptions.add(row.description.trim());
    holidays.set(date, descriptions);
  }
  if (active.size === 0) return null;
  return {
    year,
    holidays: [...holidays]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, descriptions]) => ({
        date,
        description: [...descriptions].sort().join(" · ") || null,
      })),
  };
}
