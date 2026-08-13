import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import {
  ANALYZE_USER_ERROR,
  ANALYZE_USER_HINT,
  AnalyzeValidationError,
  isFormDataParseError,
  runRetributivoAnalyze,
} from "@/features/registro-retributivo/server/run-analyze";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  try {
    const formData = await request.formData();
    const result = await runRetributivoAnalyze(formData);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof AnalyzeValidationError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    if (isFormDataParseError(error)) {
      return NextResponse.json(
        { error: ANALYZE_USER_ERROR, hint: ANALYZE_USER_HINT },
        { status: 400 },
      );
    }
    return NextResponse.json({ error: ANALYZE_USER_ERROR, hint: ANALYZE_USER_HINT }, { status: 500 });
  }
}
