import {
  breakdownFilename,
  type BreakdownOutput,
  MAX_UPLOAD_BYTES,
  XLSX_CONTENT_TYPE,
} from "@/features/retributive-breakdown/contract";
import { BreakdownInputError } from "@/features/retributive-breakdown/server/workbook";
import { getCurrentAuthContext } from "@/lib/auth/session";

export const BREAKDOWN_NO_CACHE = { "cache-control": "no-store" };

export function failure(error: string, status: number): Response {
  return Response.json({ error }, { status, headers: BREAKDOWN_NO_CACHE });
}

export function breakdownDownload(bytes: Uint8Array<ArrayBuffer>, output: BreakdownOutput) {
  return new Response(bytes, {
    headers: {
      ...BREAKDOWN_NO_CACHE,
      "content-type": output === "zip" ? "application/zip" : XLSX_CONTENT_TYPE,
      "content-disposition": 'attachment; filename="' + breakdownFilename(output) + '"',
    },
  });
}

export async function readBreakdownFiles(
  request: Request,
  run: (files: File[], form: FormData) => Promise<Response>,
): Promise<Response> {
  if (Number(request.headers.get("content-length")) > MAX_UPLOAD_BYTES + 128 * 1024) {
    return failure("Los cinco archivos deben sumar como máximo 9 MiB.", 413);
  }
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return failure("No se han podido leer los archivos de la subida.", 400);
  }
  const files = form.getAll("files");
  const workbooks = files.filter((item): item is File => item instanceof File);
  if (workbooks.length !== files.length) return failure("Adjunta los cinco archivos Excel.", 400);
  return run(workbooks, form);
}

export async function withBreakdownSession(
  errorMessage: string,
  run: (
    session: NonNullable<Awaited<ReturnType<typeof getCurrentAuthContext>>>,
  ) => Promise<Response>,
): Promise<Response> {
  const session = await getCurrentAuthContext();
  if (!session) return failure("Tu sesión ha caducado. Vuelve a iniciar sesión.", 401);
  try {
    return await run(session);
  } catch (error) {
    if (error instanceof BreakdownInputError) return failure(error.message, 422);
    console.error("[desglose-retributivo] No se pudo procesar la solicitud", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return failure(errorMessage, 500);
  }
}

export function withBreakdownFiles(
  request: Request,
  errorMessage: string,
  run: (files: File[], form: FormData) => Promise<Response>,
): Promise<Response> {
  return withBreakdownSession(errorMessage, () => readBreakdownFiles(request, run));
}
