import "server-only";

import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import type { ResolvedAuthSession } from "@/lib/auth/service";

export async function requireRetributivoApiSession(): Promise<
  | { ok: true; authSession: ResolvedAuthSession }
  | { ok: false; response: NextResponse }
> {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return {
      ok: false,
      response: NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 }),
    };
  }
  return { ok: true, authSession };
}
