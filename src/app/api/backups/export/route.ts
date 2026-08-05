import { NextResponse } from "next/server";

import { exportBackup } from "@/lib/backups/service";
import { requireSession } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  await requireSession();
  try {
    const backup = await exportBackup();
    return new NextResponse(Buffer.from(backup.bytes), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${backup.filename}"`,
        "X-Backup-Checksum": backup.checksum,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, errorCode: "BACKUP_EXPORT_FAILED", message: "No se pudo crear la copia local." },
      { status: 500 },
    );
  }
}
