import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getWorkspaceSnapshot } from "@/lib/workspace/service";

export const runtime = "nodejs";

export async function GET() {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  try {
    return NextResponse.json(
      { ok: true, data: await getWorkspaceSnapshot(authSession.authContext) },
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch {
    return NextResponse.json({ ok: false, errorCode: "WORKSPACE_READ_FAILED" }, { status: 500 });
  }
}
