import { NextResponse } from "next/server";
import { boundedBody, guarded } from "@/lib/payroll-reconciliation/server";
import { identitySchema, parse } from "@/lib/payroll-reconciliation/validation";
import { reconciliationRepository } from "@/server/database/repositories/payroll-reconciliation-repository";
import { reconcile, retainAnnotations } from "@/lib/payroll-reconciliation/engine";
import { ReconciliationError } from "@/lib/payroll-reconciliation/import";
import { exportDossier } from "@/lib/payroll-reconciliation/export";
export const runtime = "nodejs";
export const POST = (request: Request) =>
  guarded(request, async (context) => {
    let json: unknown;
    try {
      json = JSON.parse(new TextDecoder().decode(await boundedBody(request, 2048)));
    } catch (error) {
      if (error instanceof ReconciliationError) throw error;
      throw new ReconciliationError("Solicitud de exportación inválida.");
    }
    const input = parse(identitySchema.strict(), json);
    const dossier = reconciliationRepository().get(context, input.id);
    if (dossier.revision !== input.revision)
      throw new ReconciliationError("El expediente ha cambiado. Vuelve a abrirlo.", 409);
    const recalculated = reconcile(dossier);
    if (recalculated.fingerprint !== dossier.result.fingerprint)
      throw new ReconciliationError(
        "La versión del cálculo ha cambiado. Recalcula el expediente antes de exportar.",
        409,
      );
    const file = await exportDossier({
      ...dossier,
      result: recalculated,
      annotations: retainAnnotations(dossier.annotations, recalculated),
    });
    return new NextResponse(Uint8Array.from(file), {
      headers: {
        "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "content-disposition": `attachment; filename="Cuadre_nomina_${dossier.period}_r${dossier.revision}.xlsx"`,
        "cache-control": "no-store",
      },
    });
  });
