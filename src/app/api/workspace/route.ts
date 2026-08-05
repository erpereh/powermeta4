import { NextResponse } from "next/server";

import { getAuthService } from "@/lib/auth/server";
import { deleteSessionCookie, getSession } from "@/lib/auth/session";
import { getWorkspaceSnapshot } from "@/lib/workspace/service";

export const runtime = "nodejs";

export async function GET() {
  const session = await getSession();
  if (!session)
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  if (!(await getAuthService().restoreSession())) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "SESSION_EXPIRED" }, { status: 401 });
  }

  try {
    return NextResponse.json(
      { ok: true, data: await getWorkspaceSnapshot(session.username) },
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return NextResponse.json({ ok: false, errorCode: "WORKSPACE_READ_FAILED" }, { status: 500 });
  }
}
