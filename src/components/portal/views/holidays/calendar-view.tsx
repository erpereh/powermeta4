import { Callout } from "@/components/system/callout";
import { holidayMonths, WEEK_DAYS, type HolidayCalendar } from "@/lib/portal/holidays/calendar";
import { cn } from "@/lib/utils";

/** Calendario de consulta: tablas nativas, sin botones ni selección de fechas. */
export function HolidayCalendarView({
  data,
  debug = false,
}: {
  data: HolidayCalendar;
  debug?: boolean;
}) {
  const holidays = new Map(data.holidays.map((holiday) => [holiday.date, holiday]));
  return (
    <div className="flex min-w-0 flex-col gap-5">
      {debug ? (
        <Callout title="Muestra ficticia · modo desarrollo">
          Estos días son ejemplos para revisar el calendario. No corresponden a tu centro de
          trabajo.
        </Callout>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold tabular-nums">Año {data.year}</h2>
        <ul
          aria-label="Leyenda del calendario"
          className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          <li className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex size-5 items-center justify-center rounded-md bg-selected font-bold text-selected-foreground ring-1 ring-primary/40"
            >
              •
            </span>
            Festivo
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="size-5 rounded-md border border-border bg-muted" />
            Fin de semana
          </li>
        </ul>
      </div>
      {data.holidays.length === 0 ? (
        <p role="status" className="text-sm text-muted-foreground">
          No hay festivos registrados para este año en tu calendario.
        </p>
      ) : null}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {holidayMonths(data.year).map((month) => (
          <div
            key={month.name}
            className="min-w-0 rounded-xl border border-border/70 bg-card p-3 text-card-foreground"
          >
            <table className="w-full table-fixed border-separate border-spacing-1 text-center text-sm tabular-nums">
              <caption className="pb-3 text-left font-semibold text-foreground">
                {month.name} <span className="sr-only">de {data.year}</span>
              </caption>
              <thead>
                <tr>
                  {WEEK_DAYS.map(([short, name]) => (
                    <th
                      key={name}
                      scope="col"
                      className="h-6 text-xs font-normal text-muted-foreground"
                    >
                      <abbr title={name} className="no-underline">
                        {short}
                      </abbr>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {month.weeks.map((week, index) => (
                  <tr key={index}>
                    {week.map((day, weekday) => {
                      if (!day) return <td key={weekday} className="h-8" />;
                      const holiday = holidays.get(day.date);
                      const label = `${day.label}${day.weekend ? ", fin de semana" : ""}${holiday ? `, festivo${holiday.description ? `: ${holiday.description}` : ""}` : ""}`;
                      return (
                        <td key={weekday} aria-label={label} title={label} className="h-8 p-0">
                          <span
                            className={cn(
                              "relative flex h-8 w-full items-center justify-center rounded-md",
                              day.weekend && "bg-muted text-muted-foreground",
                              holiday &&
                                "bg-selected font-semibold text-selected-foreground ring-1 ring-inset ring-primary/40",
                            )}
                          >
                            <time dateTime={day.date}>{day.day}</time>
                            {holiday ? (
                              <span
                                aria-hidden
                                className="absolute right-0 bottom-0.5 left-0 text-[10px] leading-none"
                              >
                                •
                              </span>
                            ) : null}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
