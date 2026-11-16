import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";
import { isMeta4UsersError } from "@/lib/meta4/users/errors";
import type { Meta4Society } from "@/lib/meta4/societies";
import { buildEmployeeEmails, buildEmployeeSections } from "@/lib/meta4/users/employee-detail-view";
import {
  exportUsersToXlsx,
  usersFileName,
  type UserDetailExport,
} from "@/lib/meta4/users/export-xlsx";
import { USERS_SEARCH_MAX_LENGTH, filterUsers } from "@/lib/meta4/users/list-filter";
import { listMeta4Users } from "@/lib/meta4/users/service";
import {
  getPeopleNetEmployeeDetail,
  PeopleNetEmployeeDetailError,
} from "@/lib/peoplenet/employee-detail";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

/** Lecturas de detalle simultáneas contra PeopleNet (dos SELECT por persona). */
const DETAIL_CONCURRENCY = 8;

const readDetail = async (employeeId: string, society: Meta4Society): Promise<UserDetailExport> => {
  try {
    const result = await getPeopleNetEmployeeDetail(employeeId, society);
    return {
      employeeId,
      sections: buildEmployeeSections(result.fields),
      emails: buildEmployeeEmails(result),
    };
  } catch (error) {
    return {
      employeeId,
      error:
        error instanceof PeopleNetEmployeeDetailError
          ? error.message
          : "No se ha podido cargar el detalle del empleado.",
    };
  }
};

const readDetails = async (
  employeeIds: readonly string[],
  society: Meta4Society,
): Promise<UserDetailExport[]> => {
  const results: UserDetailExport[] = [];
  for (let start = 0; start < employeeIds.length; start += DETAIL_CONCURRENCY) {
    const chunk = employeeIds.slice(start, start + DETAIL_CONCURRENCY);
    results.push(...(await Promise.all(chunk.map((id) => readDetail(id, society)))));
  }
  return results;
};

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

const parseQuery = (body: unknown): string | null => {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return null;
  const query: unknown = "query" in body ? body.query : undefined;
  if (query === undefined) return "";
  if (typeof query !== "string" || query.length > USERS_SEARCH_MAX_LENGTH) return null;
  return query;
};

/**
 * Descarga en Excel del listado de usuarios. El navegador solo envía el texto
 * de búsqueda: los usuarios se vuelven a leer con la sociedad de la sesión y no
 * se guarda ningún fichero. La hoja «Detalle» lee en servidor la ficha de
 * cada persona filtrada, con la sociedad de la sesión.
 */
export async function POST(request: Request) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("La petición de descarga no es válida.");
  }
  const query = parseQuery(body);
  if (query === null) return badRequest("La búsqueda no es válida.");

  try {
    const { society, users } = await listMeta4Users(authSession);
    const rows = filterUsers(users, query).sort((a, b) => compareEmployeeIds(a.id, b.id));
    if (rows.length === 0) {
      return NextResponse.json(
        { ok: false, message: "No hay usuarios que exportar con esa búsqueda." },
        { status: 404 },
      );
    }

    const details = await readDetails(
      rows.map((row) => row.id),
      society,
    );
    const file = await exportUsersToXlsx(rows, details);
    const fileName = usersFileName(society, new Date().toISOString().slice(0, 10));
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": XLSX_CONTENT_TYPE,
        "content-disposition": `attachment; filename="${fileName}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 403 });
    }
    if (isMeta4UsersError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 502 });
    }
    console.error("[users] export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se ha podido generar el Excel de usuarios." },
      { status: 500 },
    );
  }
}
