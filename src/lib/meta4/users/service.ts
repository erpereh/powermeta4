import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { listEmployeesByOrganization } from "@/lib/peoplenet/employees";

import { Meta4UsersError } from "./errors";
import { mapEmployeeListRows } from "./mapper";
import type { Meta4UsersListResult } from "./types";

export type ListMeta4UsersDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  listEmployees?: typeof listEmployeesByOrganization;
  log?: (message: string, details: Record<string, string>) => void;
};

/** Lists employees in the active society using the shared PeopleNet pool. */
export const listMeta4Users = async (
  authSession: ResolvedAuthSession,
  deps: ListMeta4UsersDeps = {},
): Promise<Meta4UsersListResult> => {
  const context = await (deps.getOperationalContext ?? getMeta4OperationalContext)(authSession);
  const society = context.society;

  try {
    const rows = await (deps.listEmployees ?? listEmployeesByOrganization)(society);
    const users = mapEmployeeListRows(rows);
    deps.log?.("meta4-users-list", { society, code: "OK", count: String(users.length) });
    return { society, users };
  } catch {
    deps.log?.("meta4-users-list", { society, code: "META4_USERS_FETCH_FAILED" });
    throw new Meta4UsersError(
      "META4_USERS_FETCH_FAILED",
      "No se han podido cargar los usuarios desde Meta4.",
    );
  }
};
