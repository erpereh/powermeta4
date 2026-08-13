import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";

export const runtime = "nodejs";

export async function POST() {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  return NextResponse.json({ error: "Endpoint retirado" }, { status: 410 });
}
