import { NextResponse } from "next/server";

import { getBackupLimits } from "@/lib/backups/constants";
import { validateBackup } from "@/lib/backups/service";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, errorCode: "FILE_REQUIRED" }, { status: 400 });
    }
    const limits = getBackupLimits();
    if (file.size <= 0 || file.size > limits.compressedBytes) {
      return NextResponse.json({ ok: false, errorCode: "BACKUP_LIMIT_EXCEEDED" }, { status: 413 });
    }
    const result = await validateBackup(file.stream(), authSession.cookieHash);
    return NextResponse.json(
      { ok: true, data: result },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        errorCode: "BACKUP_VALIDATION_FAILED",
        message: "La copia no es válida o está dañada.",
      },
      { status: 400 },
    );
  }
}
