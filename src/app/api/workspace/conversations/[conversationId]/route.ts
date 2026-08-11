import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getWorkspaceRepository } from "@/lib/workspace/service";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ conversationId: string }> },
) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  const companyId = new URL(request.url).searchParams.get("companyId");
  const { conversationId } = await context.params;
  if (!companyId || !conversationId) {
    return NextResponse.json({ ok: false, errorCode: "INVALID_SCOPE" }, { status: 400 });
  }

  try {
    const chat = await getWorkspaceRepository().getConversation(companyId, conversationId);
    return NextResponse.json(
      { ok: true, data: chat },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ ok: false, errorCode: "CONVERSATION_READ_FAILED" }, { status: 404 });
  }
}
