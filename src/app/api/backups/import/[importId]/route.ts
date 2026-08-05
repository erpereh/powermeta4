import { NextResponse } from "next/server";

import { cancelBackupImport } from "@/lib/backups/service";
import { getAuthService } from "@/lib/auth/server";
import { deleteSessionCookie, getSession } from "@/lib/auth/session";
import { hashOpaqueSessionId, isOpaqueSessionId } from "@/lib/auth/token";

export const runtime = "nodejs";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ importId: string }> },
): Promise<Response> {
  const session = await getSession();
  if (!session)
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  if (!(await getAuthService().restoreSession())) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "SESSION_EXPIRED" }, { status: 401 });
  }
  const { importId } = await context.params;
  if (!isOpaqueSessionId(importId)) {
    return NextResponse.json({ ok: false, errorCode: "IMPORT_ID_INVALID" }, { status: 400 });
  }
  await cancelBackupImport(importId, hashOpaqueSessionId(session.sessionId));
  return NextResponse.json({ ok: true, data: null });
}
