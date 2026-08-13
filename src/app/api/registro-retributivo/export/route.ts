import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import {
  exportAnalysisToBuffer,
  type ExportWorkbookMetadata,
} from "@/features/registro-retributivo/export/exportExcel";
import type { AnalysisResult } from "@/features/registro-retributivo/types";

export const runtime = "nodejs";

interface ExportRequestPayload {
  readonly analysis: AnalysisResult;
  readonly metadata?: ExportWorkbookMetadata;
}

function isWrappedPayload(value: unknown): value is ExportRequestPayload {
  return Boolean(value && typeof value === "object" && "analysis" in value);
}

export async function POST(request: Request) {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  try {
    const payload = (await request.json()) as AnalysisResult | ExportRequestPayload;
    const analysis = isWrappedPayload(payload) ? payload.analysis : payload;
    const metadata = isWrappedPayload(payload) ? payload.metadata : undefined;
    const buffer = await exportAnalysisToBuffer(analysis, metadata);
    const body = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ) as ArrayBuffer;

    return new NextResponse(body, {
      headers: {
        "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "content-disposition": `attachment; filename="comparativa_reg_retributivo_${new Date().toISOString().slice(0, 10)}.xlsx"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "No se pudo exportar el Excel." },
      { status: 500 },
    );
  }
}
