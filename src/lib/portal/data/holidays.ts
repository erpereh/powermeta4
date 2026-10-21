import "server-only";

import type { PortalContext } from "../context";
import type { HolidayCalendar } from "../holidays/calendar";
import { readHolidayCalendar } from "../holidays/reader";
import { HolidayAssignmentError, HolidayReadContractError } from "../holidays/real-calendar";
import { readPortal } from "../server";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "../result";

/** Sociedad y matrícula propias exclusivamente del contexto autenticado. */
export async function getHolidayCalendar(
  context: PortalContext,
  now = new Date(),
): Promise<PortalResult<HolidayCalendar | null>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  const employeeId = context.identity.person.employeeId;
  const result = await readPortal(
    context,
    async () => {
      try {
        return {
          calendar: await readHolidayCalendar(context.society, employeeId, now),
          error: null,
        };
      } catch (error) {
        if (error instanceof HolidayAssignmentError || error instanceof HolidayReadContractError)
          return { calendar: null, error };
        throw error;
      }
    },
    "tu calendario de festivos",
  );
  if (result.status !== "ok") return result;
  const { calendar, error } = result.data;
  if (error)
    return portalError(
      error.message,
      error instanceof HolidayAssignmentError ? "AMBIGUOUS" : "CONTRACT_INCOMPATIBLE",
    );
  return portalOk(context.society, calendar);
}
