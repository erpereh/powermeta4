"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { SessionExpiredError } from "@/lib/meta4/authenticated-soap-client";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { buildFullName } from "@/lib/meta4/users/mapper";
import { isMeta4UsersError } from "@/lib/meta4/users/errors";
import { listMeta4Users } from "@/lib/meta4/users/service";
import {
  buildEmployeeEmails,
  buildEmployeeSections,
  pickField,
} from "@/lib/meta4/users/employee-detail-view";
import {
  getPeopleNetEmployeeDetail,
  PeopleNetEmployeeDetailError,
} from "@/lib/peoplenet/employee-detail";
import type { Meta4EmployeeDetailView } from "@/types/meta4-employee-detail";

const unavailableView = (employeeId: string, message: string): Meta4EmployeeDetailView => ({
  available: false,
  employeeId,
  displayName: null,
  message,
  sections: [],
  emails: [],
});

const genericFetchFailedMessage = "No se ha podido cargar el detalle del empleado desde Meta4.";

const resolveErrorMessage = (error: unknown): string => {
  if (error instanceof PeopleNetEmployeeDetailError) return error.message;
  if (isMeta4UsersError(error)) return error.message;
  if (isMeta4ProfileError(error)) return error.message;
  if (error instanceof SessionExpiredError) return error.message;
  if (error instanceof Meta4SoapFaultError) return "Meta4 rechazó la consulta del empleado.";
  if (error instanceof Meta4HttpError) return "Meta4 no pudo completar la consulta del empleado.";
  if (error instanceof Error && error.message.trim()) return error.message;
  return genericFetchFailedMessage;
};

export async function getMeta4EmployeeDetailViewAction(
  employeeId: string,
): Promise<Meta4EmployeeDetailView> {
  const authSession = await requireAuthContext();

  try {
    const { society, users } = await listMeta4Users(authSession);
    const belongsToActiveSociety = users.some((user) => user.id === employeeId);
    if (!belongsToActiveSociety) {
      throw new PeopleNetEmployeeDetailError(
        "FORBIDDEN",
        "Este empleado no pertenece a la sociedad activa.",
      );
    }

    const result = await getPeopleNetEmployeeDetail(employeeId, society);
    const displayName = buildFullName(
      pickField(result.fields, "nombre"),
      pickField(result.fields, "apellido_1"),
      pickField(result.fields, "apellido_2"),
    );

    return {
      available: true,
      employeeId,
      displayName,
      message: null,
      sections: buildEmployeeSections(result.fields),
      emails: buildEmployeeEmails(result),
    };
  } catch (error) {
    return unavailableView(employeeId, resolveErrorMessage(error));
  }
}
