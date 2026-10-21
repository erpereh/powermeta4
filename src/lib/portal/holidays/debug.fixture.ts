import "server-only";

import type { HolidayCalendar } from "./calendar";

/** Muestra sintética de presentación; no es un calendario laboral oficial. */
export function holidayDebugData(year: number): HolidayCalendar {
  return {
    year,
    holidays: [
      "01-01",
      "01-06",
      "04-02",
      "04-03",
      "05-01",
      "05-02",
      "05-15",
      "08-15",
      "10-12",
      "11-02",
      "11-09",
      "12-07",
      "12-08",
      "12-25",
    ].map((day) => ({
      date: `${year}-${day}`,
      description: "Festivo de ejemplo",
    })),
  };
}
