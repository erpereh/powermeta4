import { Callout } from "@/components/system/callout";
import { requireAuthContext } from "@/lib/auth/session";
import type { PortalContext } from "@/lib/portal/context";
import { HOLIDAY_READ_CONTRACT } from "@/lib/portal/holidays/contract";
import { loadHolidayPage, type HolidayLoad } from "@/lib/portal/holidays/load";
import { DependencyState, PortalError } from "../portal-states";
import { HolidayCalendarView } from "./holidays/calendar-view";

export function HolidayResult({ result }: { result: HolidayLoad }) {
  if (result.status === "unavailable") {
    const identity = result.pending.includes("P03");
    return (
      <div className="space-y-3">
        <Callout
          title={
            identity ? "No se ha podido identificar tu calendario" : "Calendario no disponible"
          }
        >
          {identity
            ? result.message
            : "Todavía no se puede consultar tu calendario de festivos. Esto no significa que no tengas festivos asignados."}
        </Callout>
        <DependencyState
          message={result.message}
          pending={result.pending}
          meta4={HOLIDAY_READ_CONTRACT.meta4}
        />
      </div>
    );
  }
  if (result.status === "error") return <PortalError message={result.message} />;
  if (result.status === "unassigned")
    return (
      <Callout title="Sin calendario asignado">
        No tienes un calendario laboral asignado para {result.year}.
      </Callout>
    );
  return <HolidayCalendarView data={result.data} debug={result.debug} />;
}

export async function HolidaysView({ context }: { context: PortalContext }) {
  const auth = await requireAuthContext();
  return <HolidayResult result={await loadHolidayPage(auth, context)} />;
}
