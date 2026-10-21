/** Fechas civiles: no se interpretan en la zona horaria del navegador. */
export type Holiday = {
  readonly date: string;
  readonly description: string | null;
};

export type HolidayCalendar = {
  readonly year: number;
  readonly holidays: readonly Holiday[];
};

export type CalendarDay = {
  readonly date: string;
  readonly day: number;
  readonly label: string;
  readonly weekend: boolean;
};

export const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

export const WEEK_DAYS = [
  ["D", "Domingo"],
  ["L", "Lunes"],
  ["M", "Martes"],
  ["X", "Miércoles"],
  ["J", "Jueves"],
  ["V", "Viernes"],
  ["S", "Sábado"],
] as const;

const madridYear = new Intl.DateTimeFormat("en", { timeZone: "Europe/Madrid", year: "numeric" });
const dateLabel = new Intl.DateTimeFormat("es-ES", {
  timeZone: "UTC",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const currentHolidayYear = (now = new Date()): number => Number(madridYear.format(now));

/** Doce meses, domingo primero y seis semanas por mes, como el JSP original. */
export function holidayMonths(year: number) {
  if (!Number.isInteger(year) || year < 100 || year > 9999) throw new RangeError("Año no válido.");
  return MONTH_NAMES.map((name, month) => {
    const firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay();
    const days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const weeks = Array.from({ length: 6 }, (_, week) =>
      Array.from({ length: 7 }, (_, weekday): CalendarDay | null => {
        const day = week * 7 + weekday - firstDay + 1;
        if (day < 1 || day > days) return null;
        const date = new Date(Date.UTC(year, month, day));
        return {
          date: date.toISOString().slice(0, 10),
          day,
          label: dateLabel.format(date),
          weekend: weekday === 0 || weekday === 6,
        };
      }),
    );
    return { name, weeks };
  });
}
