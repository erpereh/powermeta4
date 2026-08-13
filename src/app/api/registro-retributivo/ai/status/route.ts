import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import {
  getGeminiModel,
  isGeminiConfigured,
  isGeminiEnabled,
} from "@/features/registro-retributivo/ai/geminiClient";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  return NextResponse.json({
    configured: isGeminiConfigured(),
    enabled: isGeminiEnabled(),
    model: getGeminiModel(),
  });
}
