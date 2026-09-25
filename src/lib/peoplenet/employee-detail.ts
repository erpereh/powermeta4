import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";

import {
  EMPLOYEE_FIELD_COLUMNS,
  getEmployeeById,
  getEmployeeEmailsByPersonId,
  PeopleNetEmployeeAmbiguousError,
  type PeopleNetEmployeeEmailRow,
  type PeopleNetEmployeeRow,
  type PeopleNetSqlValue,
} from "./employees";

export type EmployeeEmailRecord = {
  email: string;
  order: string;
  startDate: string;
  endDate: string;
  locationTypeCode: string;
};

export type EmployeeDetailResult = {
  employeeId: string;
  fields: Record<string, string>;
  emails: EmployeeEmailRecord[];
};

export type PeopleNetEmployeeDetailErrorCode =
  | "NOT_FOUND"
  | "AMBIGUOUS"
  | "FETCH_FAILED"
  | "FORBIDDEN";

export class PeopleNetEmployeeDetailError extends Error {
  constructor(
    readonly code: PeopleNetEmployeeDetailErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "PeopleNetEmployeeDetailError";
  }
}

/** Mirrors the SOAP parser's scalar strings, including ISO dates and blanks. */
const toText = (value: PeopleNetSqlValue | undefined): string | null => {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) return value.toISOString();
  return String(value).trim();
};

const scalar = (value: PeopleNetSqlValue | undefined): string => toText(value) ?? "";

export const mapEmployeeFields = (row: PeopleNetEmployeeRow): Record<string, string> => {
  const fields: Record<string, string> = {};
  for (const [column, fieldKey] of EMPLOYEE_FIELD_COLUMNS) {
    const value = toText(row[column]);
    if (value !== null) fields[fieldKey] = value;
  }
  return fields;
};

export const mapEmployeeEmails = (
  rows: readonly PeopleNetEmployeeEmailRow[],
): EmployeeEmailRecord[] =>
  rows
    .map((row) => ({
      email: scalar(row.STD_EMAIL),
      order: scalar(row.STD_OR_MAIL),
      startDate: scalar(row.STD_DT_START),
      endDate: scalar(row.STD_DT_END),
      locationTypeCode: scalar(row.STD_ID_LOCAT_TYPE),
    }))
    .filter((email) => email.email !== "");

/** Combines the two read-only PeopleNet queries for the existing detail view. */
export const getPeopleNetEmployeeDetail = async (
  employeeId: string,
  organization: Meta4Society,
): Promise<EmployeeDetailResult> => {
  try {
    const employee = await getEmployeeById(employeeId, organization);
    if (!employee) {
      throw new PeopleNetEmployeeDetailError(
        "NOT_FOUND",
        "No se ha encontrado el detalle del empleado en Meta4.",
      );
    }
    const emailRows = await getEmployeeEmailsByPersonId(employeeId);
    return {
      employeeId,
      fields: mapEmployeeFields(employee),
      emails: mapEmployeeEmails(emailRows),
    };
  } catch (error) {
    if (error instanceof PeopleNetEmployeeDetailError) throw error;
    if (error instanceof PeopleNetEmployeeAmbiguousError) {
      throw new PeopleNetEmployeeDetailError("AMBIGUOUS", error.message);
    }
    console.error("[peoplenet] employee detail query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new PeopleNetEmployeeDetailError(
      "FETCH_FAILED",
      "No se ha podido cargar el detalle del empleado desde Meta4.",
    );
  }
};
