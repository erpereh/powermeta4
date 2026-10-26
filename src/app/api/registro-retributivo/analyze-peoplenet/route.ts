import { NextResponse } from "next/server";

import { parsePeopleNetAnalyzeRequest } from "@/features/registro-retributivo/peoplenet/request";
import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import {
  PEOPLENET_RESULT_MAX_BYTES,
  runRetributivoPeopleNetAnalyze,
} from "@/features/registro-retributivo/server/run-peoplenet-analyze";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import { PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";

export const runtime = "nodejs";

const ANALYZE_ERROR = "No se ha podido analizar desde PeopleNet.";
const ANALYZE_HINT = "Comprueba el periodo y la conexión con PeopleNet e inténtalo de nuevo.";

/**
 * Análisis del Registro Retributivo sin ficheros. El navegador solo envía el
 * periodo, las matrículas opcionales y los ajustes; la sociedad sale de la
 * sesión y contra PeopleNet solo se ejecutan SELECT. No se guardan ficheros.
 */
export async function POST(request: Request) {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "La petición de análisis no es válida." }, { status: 400 });
  }
  const parsed = parsePeopleNetAnalyzeRequest(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.message }, { status: 400 });
  }

  try {
    const context = await getMeta4OperationalContext(session.authSession);
    const result = await runRetributivoPeopleNetAnalyze(context.society, parsed.value);
    const body = JSON.stringify(result);
    if (Buffer.byteLength(body) > PEOPLENET_RESULT_MAX_BYTES) {
      return NextResponse.json(
        {
          error: `El análisis tiene ${result.summary.uniquePeople} personas y es demasiado grande para guardarlo. Indica matrículas o acorta el periodo.`,
        },
        { status: 413 },
      );
    }
    return new NextResponse(body, { headers: { "content-type": "application/json" } });
  } catch (error) {
    if (error instanceof PayrollReceiptError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    if (error instanceof PeopleNetConfigError) {
      return NextResponse.json(
        { error: "PeopleNet no está configurado en el servidor.", hint: ANALYZE_HINT },
        { status: 503 },
      );
    }
    if (error instanceof PortalSqlContractError) {
      return NextResponse.json(
        {
          error: "Faltan tablas o columnas del Registro Retributivo en PeopleNet.",
          hint: ANALYZE_HINT,
        },
        { status: 502 },
      );
    }
    console.error("[registro-retributivo] peoplenet analysis failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json({ error: ANALYZE_ERROR, hint: ANALYZE_HINT }, { status: 500 });
  }
}
