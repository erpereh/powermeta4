import { NextResponse } from "next/server";

import { restoreBackup } from "@/lib/backups/service";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { isOpaqueSessionId } from "@/lib/auth/token";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  try {
    const body: unknown = await request.json();
    const importId =
      typeof body === "object" &&
      body !== null &&
      "importId" in body &&
      typeof body.importId === "string"
        ? body.importId
        : "";
    if (!isOpaqueSessionId(importId)) {
      return NextResponse.json({ ok: false, errorCode: "IMPORT_ID_INVALID" }, { status: 400 });
    }
    const result = await restoreBackup(importId, authSession.cookieHash);
    await deleteSessionCookie();
    return NextResponse.json(
      { ok: true, data: result },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        errorCode: "BACKUP_RESTORE_FAILED",
        message: "No se pudo restaurar la copia local.",
      },
      { status: 400 },
    );
  }
}
