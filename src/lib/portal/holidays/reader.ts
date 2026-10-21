import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
} from "../peoplenet/query";
import { HOLIDAY_SQL } from "../registry/sql/holidays";
import { currentHolidayYear, type HolidayCalendar } from "./calendar";
import {
  HolidayAssignmentError,
  HolidayReadContractError,
  resolveHolidayCalendar,
  type HolidayReadRow,
} from "./real-calendar";

/**
 * Lector compartido por el servidor y la verificación CLI, sin dependencias de
 * Next.js. En producto solo lo invoca getHolidayCalendar con su contexto propio.
 */
export async function readHolidayCalendar(
  society: Meta4Society,
  employeeId: string,
  now = new Date(),
): Promise<HolidayCalendar | null> {
  const year = currentHolidayYear(now);
  const todayParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => todayParts.find((entry) => entry.type === type)?.value;
  const day = `${part("year")}-${part("month")}-${part("day")}`;
  const dateParam = (value: string): PortalSqlParam => ({
    type: "date",
    value: new Date(`${value}T00:00:00Z`),
  });
  const params = {
    organization: organizationParam(society),
    employeeId: employeeParam(employeeId),
    today: dateParam(day),
  };
  const roles = await runPortalSelect(HOLIDAY_SQL.roles, params);
  const ids = [...new Set(roles.map((row) => sqlText(row.ROLE_ID)))];
  if (ids.length === 0) return null;
  if (ids.length !== 1)
    throw new HolidayAssignmentError(
      "Hay varios roles principales y no se puede determinar tu calendario con seguridad.",
    );
  const roleId = ids[0] === null ? NaN : Number(ids[0]);
  if (!Number.isSafeInteger(roleId)) throw new HolidayReadContractError();
  const result = await runPortalSelect(HOLIDAY_SQL.calendar, {
    ...params,
    roleId: { type: "int", value: roleId },
    yearStart: dateParam(`${year}-01-01`),
    yearEnd: dateParam(`${year}-12-31`),
    hierarchyDate: dateParam(`${year + 1}-01-31`),
    correctionDate: dateParam("4000-01-01"),
    dimension: { type: "varchar", length: 30, value: "DMD_TA" },
    component: { type: "varchar", length: 30, value: "TA001" },
  });
  const rows = result.map((row): HolidayReadRow => {
    const kind = sqlText(row.ROW_KIND);
    if (kind !== "location" && kind !== "center" && kind !== "assignment" && kind !== "holiday")
      throw new HolidayReadContractError();
    return {
      kind,
      locationKey: sqlText(row.LOCATION_KEY),
      reference: sqlText(row.REFERENCE_ID),
      source: sqlText(row.SOURCE),
      calendar: sqlText(row.CALENDAR_ID),
      from: sqlText(row.DATE_FROM),
      to: sqlText(row.DATE_TO),
      date: sqlText(row.HOLIDAY_DATE),
      description: sqlText(row.DESCRIPTION),
    };
  });
  return resolveHolidayCalendar(year, rows);
}
