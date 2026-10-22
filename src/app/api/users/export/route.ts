import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";
import { isMeta4UsersError } from "@/lib/meta4/users/errors";
import { exportUsersToXlsx, usersFileName } from "@/lib/meta4/users/export-xlsx";
import { USERS_SEARCH_MAX_LENGTH, filterUsers } from "@/lib/meta4/users/list-filter";
import { listMeta4Users } from "@/lib/meta4/users/service";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

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
 * se guarda ningún fichero.
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

    const file = await exportUsersToXlsx(rows);
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
