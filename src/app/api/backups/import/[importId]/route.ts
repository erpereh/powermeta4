import { NextResponse } from "next/server";

import { cancelBackupImport } from "@/lib/backups/service";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { isOpaqueSessionId } from "@/lib/auth/token";

export const runtime = "nodejs";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ importId: string }> },
): Promise<Response> {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }
  const { importId } = await context.params;
  if (!isOpaqueSessionId(importId)) {
    return NextResponse.json({ ok: false, errorCode: "IMPORT_ID_INVALID" }, { status: 400 });
  }
  await cancelBackupImport(importId, authSession.cookieHash);
  return NextResponse.json({ ok: true, data: null });
}
