import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import {
  createGeminiClient,
  getGeminiModel,
  isGeminiConfigured,
  isGeminiEnabled,
} from "@/features/registro-retributivo/ai/geminiClient";

export const runtime = "nodejs";

export async function POST() {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  if (!isGeminiConfigured()) {
    return NextResponse.json(
      { ok: false, error: "API no configurada.", model: getGeminiModel() },
      { status: 400 },
    );
  }

  if (!isGeminiEnabled()) {
    return NextResponse.json(
      { ok: false, error: "IA desactivada por ENABLE_AI_REVIEW=false.", model: getGeminiModel() },
      { status: 409 },
    );
  }

  const client = createGeminiClient();
  if (!client) {
    return NextResponse.json(
      { ok: false, error: "No se pudo crear el cliente IA.", model: getGeminiModel() },
      { status: 500 },
    );
  }

  try {
    const model = getGeminiModel();
    const response = await client.models.generateContent({
      model,
      contents: "Responde solo con OK para validar conectividad.",
    });

    return NextResponse.json({ ok: Boolean(response.text), model });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "No se pudo probar la conexion IA.",
        model: getGeminiModel(),
      },
      { status: 500 },
    );
  }
}
