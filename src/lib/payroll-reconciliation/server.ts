import "server-only";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getCurrentAuthContext } from "@/lib/auth/session";
import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { resolveRetributivoCompanyId } from "@/features/registro-retributivo/server/company-scope";
import { getPayrollReportRun, listPayrollReportRuns } from "@/lib/peoplenet/payroll-reports";
import {
  reconciliationRepository,
  type ReconciliationScope,
} from "@/server/database/repositories/payroll-reconciliation-repository";
import { DEFAULT_PARAMETERS, type Dossier } from "./types";
import { demoReport } from "./demo";
import { reconcile, retainAnnotations } from "./engine";
import { LIMITS, importSource, ReconciliationError } from "./import";
import { snapshot } from "./snapshot";
import {
  creationSchema,
  identitySchema,
  mutationSchema,
  parse,
  previewSchema,
  sourceSchema,
  validRunKey,
} from "./validation";

type Context = ReconciliationScope & { demo: boolean; actor: string };
export async function reconciliationContext(): Promise<Context> {
  const session = await getCurrentAuthContext();
  if (!session) throw new ReconciliationError("La sesión ha caducado.", 401);
  if (session.authContext.mode === "debug") {
    if (!isDebugAuthEnabled()) throw new ReconciliationError("Modo de prueba no disponible.", 403);
    return {
      companyId: resolveRetributivoCompanyId(session.authContext),
      society: "DEBUG",
      demo: true,
      actor: "DEBUG",
    };
  }
  const context = await getMeta4OperationalContext(session);
  return {
    companyId: context.companyId,
    society: context.society,
    demo: false,
    actor: context.username,
  };
}
export function assertOrigin(request: Request): void {
  const origin = request.headers.get("origin");
  const url = new URL(request.url);
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol === "https" ? "https:" : url.protocol;
  const host = request.headers.get("host");
  const hostOrigin = host ? `${protocol}//${host}` : url.origin;
  if (origin && origin !== url.origin && origin !== hostOrigin)
    throw new ReconciliationError("Origen de la petición no permitido.", 403);
}
export async function boundedBody(request: Request, limit: number): Promise<Uint8Array> {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > limit) throw new ReconciliationError("La petición supera el límite de tamaño.", 413);
  const chunks: Uint8Array[] = [];
  const reader = request.body?.getReader();
  let total = 0;
  if (reader) {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > limit) {
          await reader.cancel();
          throw new ReconciliationError("La petición supera el límite de tamaño.", 413);
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return bytes;
}
async function jsonBody(request: Request): Promise<unknown> {
  try {
    return JSON.parse(new TextDecoder().decode(await boundedBody(request, 1024 * 1024)));
  } catch (error) {
    if (error instanceof ReconciliationError) throw error;
    throw new ReconciliationError("JSON inválido.");
  }
}
export const jsonResponse = (data: unknown) =>
  NextResponse.json({ ok: true, data }, { headers: { "Cache-Control": "no-store" } });
export async function guarded(
  request: Request,
  operation: (context: Context) => Promise<Response>,
): Promise<Response> {
  try {
    const context = await reconciliationContext();
    assertOrigin(request);
    const expectedCompany = request.headers.get("x-powermeta4-company");
    if (expectedCompany && expectedCompany !== context.companyId)
      throw new ReconciliationError("La empresa activa ha cambiado. Recarga el expediente.", 409);
    return await operation(context);
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error))
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 403, headers: { "Cache-Control": "no-store" } },
      );
    if (error instanceof ReconciliationError)
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: error.status, headers: { "Cache-Control": "no-store" } },
      );
    console.error("[cuadre] operation failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      {
        ok: false,
        message:
          "No se ha podido completar la operación. Comprueba la conexión y la actualización de la base local (npm run setup).",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
const repository = () => reconciliationRepository();
function requireRevision(dossier: Dossier, revision: number): void {
  if (dossier.revision !== revision)
    throw new ReconciliationError("El expediente ha cambiado. Vuelve a abrirlo.", 409);
}
async function loadSnapshot(
  context: Context,
  key: unknown,
  period: string,
  previous: boolean,
  confirmed: boolean,
) {
  if (context.demo) return snapshot(demoReport(period, previous), confirmed);
  const data = await getPayrollReportRun(context.society, validRunKey(key));
  if (!data?.rows.length)
    throw new ReconciliationError("La ejecución elegida no existe o está vacía.", 422);
  if (!previous && data.run.accruedOn.slice(0, 7) !== period)
    throw new ReconciliationError(
      "La fecha de paga actual no corresponde al mes seleccionado.",
      422,
    );
  return snapshot(data, confirmed);
}
function validatePrevious(current: Dossier["current"], previous: Dossier["previous"]): void {
  if (previous && previous.run.accruedOn.slice(0, 7) >= current.run.accruedOn.slice(0, 7))
    throw new ReconciliationError(
      "La ejecución anterior debe pertenecer a un mes anterior al actual.",
      422,
    );
}
export async function getDossiers(request: Request, context: Context): Promise<Response> {
  const url = new URL(request.url);
  if (url.searchParams.has("catalog"))
    return jsonResponse(context.demo ? [] : await listPayrollReportRuns(context.society));
  const id = url.searchParams.get("id");
  return jsonResponse(id ? repository().get(context, id) : repository().list(context));
}
export async function createDossier(request: Request, context: Context): Promise<Response> {
  const input = parse(creationSchema, await jsonBody(request));
  if (input.demo !== context.demo)
    throw new ReconciliationError("El modo de datos no corresponde a la sesión.", 403);
  const current = await loadSnapshot(context, input.currentKey, input.period, false, true);
  const previous =
    input.previousKey || context.demo
      ? await loadSnapshot(context, input.previousKey, input.period, true, true)
      : null;
  validatePrevious(current, previous);
  const base = {
    period: input.period,
    current,
    previous,
    sources: [],
    parameters: { ...DEFAULT_PARAMETERS },
  };
  const now = new Date().toISOString();
  const dossier: Dossier = {
    ...base,
    id: randomUUID(),
    title: input.title,
    revision: 1,
    createdAt: now,
    updatedAt: now,
    demo: context.demo,
    result: reconcile(base),
    annotations: [],
  };
  return jsonResponse(await repository().save(context, dossier, null));
}
export async function updateDossier(request: Request, context: Context): Promise<Response> {
  const input = parse(mutationSchema, await jsonBody(request));
  const dossier = repository().get(context, input.id);
  requireRevision(dossier, input.revision);
  if (input.action === "parameters") {
    if (!input.parameters) throw new ReconciliationError("Faltan los parámetros.");
    dossier.parameters = input.parameters;
  } else if (input.action === "rename") {
    if (!input.title) throw new ReconciliationError("Falta el título.");
    dossier.title = input.title;
  } else if (input.action === "review") {
    const finding = dossier.result.findings.find(
      (item) => item.id === input.findingId && item.fingerprint === input.fingerprint,
    );
    if (!finding || !input.state)
      throw new ReconciliationError("El hallazgo cambió. Vuelve a revisar el resultado.", 409);
    if (input.state !== "Pendiente" && !input.comment?.trim())
      throw new ReconciliationError("La decisión requiere un comentario.");
    dossier.annotations = dossier.annotations.filter((item) => item.findingId !== finding.id);
    dossier.annotations.push({
      findingId: finding.id,
      fingerprint: finding.fingerprint,
      state: input.state,
      comment: input.comment ?? "",
      actor: context.actor,
      at: new Date().toISOString(),
    });
  } else if (input.action === "removeSource") {
    if (!dossier.sources.some((source) => source.id === input.sourceId))
      throw new ReconciliationError("No existe esa fuente.", 404);
    dossier.sources = dossier.sources.filter((source) => source.id !== input.sourceId);
  } else if (input.action === "refresh") {
    if (!input.populationConfirmed)
      throw new ReconciliationError("Confirma el alcance de las ejecuciones.");
    dossier.current = await loadSnapshot(
      context,
      input.currentKey ?? dossier.current.run,
      dossier.period,
      false,
      true,
    );
    dossier.previous =
      input.previousKey === null
        ? null
        : input.previousKey || dossier.previous
          ? await loadSnapshot(
              context,
              input.previousKey ?? dossier.previous?.run,
              dossier.period,
              true,
              true,
            )
          : null;
  }
  validatePrevious(dossier.current, dossier.previous);
  dossier.result = reconcile(dossier);
  dossier.annotations = retainAnnotations(dossier.annotations, dossier.result);
  return jsonResponse(await repository().save(context, dossier, input.revision));
}
export async function deleteDossier(request: Request, context: Context): Promise<Response> {
  const input = parse(identitySchema.strict(), await jsonBody(request));
  await repository().remove(context, input.id, input.revision);
  return jsonResponse(null);
}
async function multipart(request: Request) {
  const bytes = await boundedBody(request, LIMITS.requestBytes);
  let form: FormData;
  try {
    form = await new Response(Uint8Array.from(bytes), {
      headers: { "content-type": request.headers.get("content-type") ?? "" },
    }).formData();
  } catch {
    throw new ReconciliationError("Carga multipart inválida.");
  }
  const file = form.get("file");
  if (!(file instanceof File) || form.getAll("file").length !== 1)
    throw new ReconciliationError("Selecciona un archivo por carga; puedes añadir más después.");
  let metadata: unknown;
  try {
    metadata = JSON.parse(String(form.get("metadata")));
  } catch {
    throw new ReconciliationError("Metadatos inválidos.");
  }
  return { file, metadata };
}
export async function previewSource(request: Request): Promise<Response> {
  const { file, metadata } = await multipart(request);
  const input = parse(previewSchema, metadata);
  const source = await importSource(
    new Uint8Array(await file.arrayBuffer()),
    file.name,
    input.category,
    input.period,
    input.complete,
  );
  source.accrualPeriod = input.accrualPeriod;
  source.windowStart = input.windowStart;
  source.windowEnd = input.windowEnd;
  return jsonResponse({
    hash: source.hash,
    profile: source.profile,
    count: source.facts.length,
    diagnostics: source.diagnostics,
    references: source.facts.slice(0, 5).map((fact) => fact.reference),
  });
}
export async function analyzeSource(request: Request, context: Context): Promise<Response> {
  const { file, metadata } = await multipart(request);
  const input = parse(sourceSchema, metadata);
  const dossier = repository().get(context, input.id);
  requireRevision(dossier, input.revision);
  if (input.period !== dossier.period)
    throw new ReconciliationError(
      "La fuente debe indicar el mes de nómina del expediente; el devengo puede ser del mes anterior.",
    );
  const source = await importSource(
    new Uint8Array(await file.arrayBuffer()),
    file.name,
    input.category,
    input.period,
    input.complete,
  );
  source.accrualPeriod = input.accrualPeriod;
  source.windowStart = input.windowStart;
  source.windowEnd = input.windowEnd;
  if (source.windowStart && source.windowEnd && source.windowStart > source.windowEnd)
    throw new ReconciliationError("La ventana de devengo tiene las fechas invertidas.");
  if (
    dossier.sources.some(
      (existing) =>
        existing.hash === source.hash &&
        existing.category === source.category &&
        existing.id !== input.replaceId,
    )
  )
    throw new ReconciliationError("Este archivo ya está incorporado a esa categoría.", 409);
  const existing = dossier.sources.filter((item) => item.category === source.category);
  if (existing.length && source.category !== "apartamentos" && !input.replaceId)
    throw new ReconciliationError(
      "Esta categoría ya tiene fuente. Confirma cuál quieres sustituir.",
      409,
    );
  if (input.replaceId && !existing.some((item) => item.id === input.replaceId))
    throw new ReconciliationError("La fuente a sustituir no pertenece a esta categoría.");
  dossier.sources = [...dossier.sources.filter((item) => item.id !== input.replaceId), source];
  if (
    dossier.sources.length > LIMITS.files ||
    dossier.sources.reduce((sum, item) => sum + item.cellCount, 0) > LIMITS.cells
  )
    throw new ReconciliationError(
      "El expediente supera veinte archivos o dos millones de celdas.",
      413,
    );
  dossier.result = reconcile(dossier);
  dossier.annotations = retainAnnotations(dossier.annotations, dossier.result);
  return jsonResponse(await repository().save(context, dossier, input.revision));
}
