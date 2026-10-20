import "server-only";

import type { PortalContext } from "../context";
import {
  buildWithholdingCertificates,
  irregularKey,
  model190ExecutionFromRow,
  model190RecordFromRow,
  model190Years,
  type CertificateLegalEntity,
} from "../certificates/compute";
import { certificateYears } from "../certificates/core";
import type {
  CertificateMember,
  CertificatePageData,
  CertificateStoredDocument,
  WithholdingCertificate,
} from "../certificates/types";
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlRow,
} from "../peoplenet/query";
import type { ProjectionEmployeeSelection, ProjectionYearSelection } from "../projections/types";
import { CERTIFICATE_SQL } from "../registry/sql/certificates";
import { RETRIBUCION_SQL } from "../registry/sql/retribucion";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "../result";
import { readPortal } from "../server";
import { documentHref, parseDocumentKey } from "./documents-core";
import { resolveSocietyMember } from "./projections";

export type CertificateRead = {
  readonly page: CertificatePageData;
  /** Certificados generados del ejercicio elegido (dos páginas cada uno). */
  readonly certificates: readonly WithholdingCertificate[];
};

const legalEntitiesOf = (
  entities: readonly PortalSqlRow[],
  places: readonly PortalSqlRow[],
): Map<string, CertificateLegalEntity> => {
  // `SSP_RP_EMPRESA` ordena las direcciones por fecha de fin descendente y usa la primera.
  const placeOf = new Map<string, string>();
  for (const row of places) {
    const id = sqlText(row.STD_ID_LEG_ENT);
    const place = sqlText(row.STD_N_GEO_PLACE);
    if (id && place && !placeOf.has(id)) placeOf.set(id, place);
  }
  const result = new Map<string, CertificateLegalEntity>();
  for (const row of entities) {
    const id = sqlText(row.STD_ID_LEG_ENT);
    if (!id || result.has(id)) continue;
    result.set(id, {
      name: sqlText(row.STD_N_LEG_ENT),
      nif: sqlText(row.SSP_ID_LEGAL),
      signer: sqlText(row.SSP_FIRMT_CERT_HAB),
      signerRole: sqlText(row.SSP_CARGO_CERT_HAB),
      signerNif: sqlText(row.SSP_ID_LEG_CER_HAB),
      place: placeOf.get(id) ?? null,
    });
  }
  return result;
};

/**
 * Certificado de retenciones propio o, con una matrícula, el de otra persona
 * de la sociedad activa (`CERTIFICATE_LOOKUP`). La sociedad, la identidad y la
 * persona salen del servidor; el navegador solo elige ejercicio y matrícula.
 */
export async function getCertificates(
  context: PortalContext,
  selection: ProjectionYearSelection,
  employee: ProjectionEmployeeSelection = { status: "own" },
  today: Date = new Date(),
): Promise<PortalResult<CertificateRead>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  if (selection.status === "invalid")
    return portalError("El ejercicio indicado no es válido.", "CONTRACT_INCOMPATIBLE");
  if (employee.status === "invalid")
    return portalError("La matrícula indicada no es válida.", "CONTRACT_INCOMPATIBLE");
  const self = context.identity.person.employeeId;
  let member: CertificateMember | undefined;
  if (employee.status === "team" && employee.employeeId !== self) {
    const resolved = await resolveSocietyMember(context, employee.employeeId);
    if (resolved.status !== "ok") return resolved;
    if (!resolved.data) return portalError("Esa matrícula no existe en la sociedad activa.");
    member = resolved.data;
  }
  const employeeId = member?.id ?? self;
  const own = {
    organization: organizationParam(context.society),
    employeeId: employeeParam(employeeId),
  };
  const society = { organization: organizationParam(context.society) };
  const read = (
    statement: string,
    params: Readonly<Record<string, PortalSqlParam>>,
    label: string,
  ) => readPortal(context, () => runPortalSelect(statement, params), label);
  const [periods, stored, perceptor, records, executions, entities, places, irregular] =
    await Promise.all([
      read(CERTIFICATE_SQL.periods.statement, own, "los ejercicios del certificado"),
      // Como en proyecciones, los PDF guardados de otra persona no se listan ni se sirven.
      member
        ? portalOk<PortalSqlRow[]>(context.society, [])
        : read(RETRIBUCION_SQL.certificados.statement, own, "los certificados guardados"),
      read(CERTIFICATE_SQL.perceptor.statement, own, "los datos del perceptor"),
      read(CERTIFICATE_SQL.records.statement, own, "los registros del modelo 190"),
      read(CERTIFICATE_SQL.executions.statement, society, "las ejecuciones del modelo 190"),
      read(CERTIFICATE_SQL.legalEntities.statement, society, "los datos del pagador"),
      read(CERTIFICATE_SQL.places.statement, society, "la población del pagador"),
      read(CERTIFICATE_SQL.irregularKeys.statement, society, "las claves de percepción"),
    ]);
  if (periods.status !== "ok" && records.status !== "ok" && (member || stored.status !== "ok"))
    return records;
  const notices = [periods, stored, places, irregular].flatMap((result) =>
    result.status === "ok" ? [] : [result.message],
  );
  const documents: (CertificateStoredDocument & { year: number })[] =
    stored.status === "ok"
      ? stored.data.flatMap((row) => {
          const year = Number(row.ANIO);
          const rawKey = sqlText(row.DOC_KEY) ?? "";
          return Number.isInteger(year) && parseDocumentKey("certificate", rawKey)
            ? [
                {
                  year,
                  label: sqlText(row.SCO_NM_DOC) ?? `Certificado ${year}`,
                  href: documentHref("certificate", rawKey),
                },
              ]
            : [];
        })
      : [];
  const declared = records.status === "ok" ? records.data.map(model190RecordFromRow) : [];
  const years = certificateYears(
    periods.status === "ok"
      ? periods.data.map((row) => ({ start: row.STD_DT_START, end: row.STD_DT_END }))
      : [],
    documents,
    today,
    model190Years(declared),
  );
  if (selection.status === "selected" && !years.some((entry) => entry.year === selection.year))
    return portalError(
      member
        ? "Esa persona no tiene certificado de ese ejercicio en la sociedad activa."
        : "No tienes certificado de ese ejercicio en la sociedad activa.",
      "CONTRACT_INCOMPATIBLE",
    );
  const selectedYear = selection.status === "selected" ? selection.year : (years[0]?.year ?? null);
  const base = { years, selectedYear, notices, ...(member ? { member } : {}) };
  if (selectedYear === null)
    return portalOk(context.society, {
      page: { ...base, selection: { kind: "none" } },
      certificates: [],
    });
  const document = years.find((entry) => entry.year === selectedYear)?.document;
  if (document)
    return portalOk(context.society, {
      page: { ...base, selection: { kind: "stored", document } },
      certificates: [],
    });
  // Sin los registros del 190 o sus ejecuciones no se puede generar: no se inventan importes.
  const missing = [records, executions, entities].find((result) => result.status !== "ok");
  if (missing)
    return portalOk(context.society, {
      page: { ...base, selection: { kind: "unavailable", message: missing.message } },
      certificates: [],
    });
  const certificates = buildWithholdingCertificates({
    year: selectedYear,
    perceptorName:
      perceptor.status === "ok" ? sqlText(perceptor.data[0]?.SCO_GB_NAME) : (member?.name ?? null),
    records: declared,
    executions: executions.status === "ok" ? executions.data.map(model190ExecutionFromRow) : [],
    legalEntities: legalEntitiesOf(
      entities.status === "ok" ? entities.data : [],
      places.status === "ok" ? places.data : [],
    ),
    irregularKeys: new Set(
      irregular.status === "ok"
        ? irregular.data.flatMap((row) =>
            Number(row.SSP_CHK_REDUC_POR_IRREG) === 1
              ? [
                  irregularKey(
                    sqlText(row.SSP_ID_TP_IRPF) ?? "",
                    sqlText(row.SSP_ID_CLAV_PERCEP) ?? "",
                    sqlText(row.SSP_ID_SUBCLAVE) ?? "",
                  ),
                ]
              : [],
          )
        : [],
    ),
    today,
  });
  return portalOk(context.society, {
    page: {
      ...base,
      selection: certificates.length ? { kind: "generated" } : { kind: "none" },
    },
    certificates,
  });
}
