import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import { resolveRetributivoCompanyId } from "@/features/registro-retributivo/server/company-scope";
import {
  createRetributivoStateRepository,
  type RetributivoStatePatch,
} from "@/server/database/repositories/retributivo-analysis-repository";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  try {
    const companyId = resolveRetributivoCompanyId(session.authSession.authContext);
    const data = createRetributivoStateRepository().snapshot(companyId);
    return NextResponse.json({ ok: true, data }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false, errorCode: "RETRIBUTIVO_STATE_READ_FAILED" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  try {
    const companyId = resolveRetributivoCompanyId(session.authSession.authContext);
    const patch = (await request.json()) as RetributivoStatePatch;
    const data = await createRetributivoStateRepository().applyPatch(companyId, patch);
    return NextResponse.json({ ok: true, data }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json(
      { ok: false, errorCode: "RETRIBUTIVO_STATE_WRITE_FAILED" },
      { status: 500 },
    );
  }
}
