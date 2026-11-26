import { BREAKDOWN_ZIP_NAME, MAX_UPLOAD_BYTES } from "@/features/retributive-breakdown/contract";
import { generateBreakdown } from "@/features/retributive-breakdown/server/generate";
import { BreakdownInputError } from "@/features/retributive-breakdown/server/workbook";
import { getCurrentAuthContext } from "@/lib/auth/session";

export const runtime = "nodejs";

function failure(error: string, status: number): Response {
  return Response.json({ error }, { status, headers: { "cache-control": "no-store" } });
}

export async function POST(request: Request): Promise<Response> {
  if (!(await getCurrentAuthContext())) {
    return failure("Tu sesión ha caducado. Vuelve a iniciar sesión.", 401);
  }
  // El margen permite las cabeceras multipart mientras el límite de archivos se comprueba aparte.
  if (Number(request.headers.get("content-length")) > MAX_UPLOAD_BYTES + 128 * 1024) {
    return failure("Los cinco archivos deben sumar como máximo 9 MiB.", 413);
  }
  let files: FormDataEntryValue[];
  try {
    files = (await request.formData()).getAll("files");
  } catch {
    return failure("No se han podido leer los archivos de la subida.", 400);
  }
  const workbooks = files.filter((item): item is File => item instanceof File);
  if (workbooks.length !== files.length) return failure("Adjunta los cinco archivos Excel.", 400);

  try {
    const zip = await generateBreakdown(workbooks);
    return new Response(zip, {
      headers: {
        "content-type": "application/zip",
        "content-disposition": 'attachment; filename="' + BREAKDOWN_ZIP_NAME + '"',
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof BreakdownInputError) return failure(error.message, 422);
    console.error("[desglose-retributivo] Generación del ZIP fallida", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return failure("No se ha podido generar el ZIP. Vuelve a intentarlo.", 500);
  }
}
