import "server-only";

import sql from "mssql";

import { getPeopleNetPool } from "@/lib/peoplenet/client";

import type { PortalContext } from "../context";
import {
  certificateArrearsFromRows,
  certificateFieldsFromRow,
  certificateRefundsFromRows,
  certificateYears,
  localIsoDate,
} from "../certificates/core";
import type {
  CertificateMember,
  CertificatePageData,
  CertificateSignature,
  CertificateStoredDocument,
  WithholdingCertificate,
} from "../certificates/types";
import {
  assertReadOnlySql,
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
} from "../peoplenet/query";
import type { ProjectionEmployeeSelection, ProjectionYearSelection } from "../projections/types";
import { CERTIFICATE_DATA_SQL, CERTIFICATE_SQL } from "../registry/sql/certificates";
import { RETRIBUCION_SQL } from "../registry/sql/retribucion";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "../result";
import { readPortal } from "../server";
import { documentHref, parseDocumentKey } from "./documents-core";
import { stripMeta4Blob } from "./documents";
import { resolveSocietyMember } from "./projections";

type Meta4Context = Extract<PortalContext, { mode: "meta4" }>;

export type CertificateRead = {
  readonly page: CertificatePageData;
  /** Certificado generado del ejercicio elegido, si sus casillas se han podido leer. */
  readonly certificate: WithholdingCertificate | null;
};

const PENDING_MESSAGE =
  "Las casillas del certificado (SSP_RP_C_HABERES) aún no están conectadas a PeopleNet.";

const signatureFormat = (bytes: Uint8Array): CertificateSignature["format"] | null =>
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47
    ? "png"
    : bytes[0] === 0xff && bytes[1] === 0xd8
      ? "jpg"
      : null;

/** Firmante y firma escaneada: la imagen es un blob y no pasa por `runPortalSelect`. */
const readSigner = async (
  statement: string,
  params: Readonly<Record<string, PortalSqlParam>>,
): Promise<WithholdingCertificate["signer"]> => {
  assertReadOnlySql(statement);
  const pool = await getPeopleNetPool();
  const request = pool.request();
  for (const [name, param] of Object.entries(params)) {
    if (param.type === "varchar") request.input(name, sql.VarChar(param.length), param.value);
    else if (param.type === "int") request.input(name, sql.Int, param.value);
  }
  const [row] = (await request.query<{ FIRMANTE: string | null; FIRMA: Buffer | null }>(statement))
    .recordset;
  const bytes = row?.FIRMA ? new Uint8Array(stripMeta4Blob(row.FIRMA).bytes) : null;
  const format = bytes ? signatureFormat(bytes) : null;
  return {
    name: row?.FIRMANTE?.trim() || null,
    signature: bytes && format ? { bytes, format } : null,
  };
};

/** Casillas del ejercicio. `null` si PeopleNet no tiene certificado de ese año. */
const readCertificate = async (
  context: Meta4Context,
  employeeId: string,
  year: number,
  today: Date,
): Promise<PortalResult<WithholdingCertificate | null>> => {
  const contract = CERTIFICATE_DATA_SQL;
  if (!contract) return portalUnavailable(["P02"], PENDING_MESSAGE);
  const params = {
    organization: organizationParam(context.society),
    employeeId: employeeParam(employeeId),
    year: { type: "int", value: year },
  } as const satisfies Record<string, PortalSqlParam>;
  return readPortal(
    context,
    async () => {
      const [boxes, arrears, refunds, signer] = await Promise.all([
        runPortalSelect(contract.boxes.statement, params),
        runPortalSelect(contract.arrears.statement, params),
        runPortalSelect(contract.refunds.statement, params),
        readSigner(contract.signer.statement, params),
      ]);
      if (!boxes[0]) return null;
      return {
        year,
        fields: certificateFieldsFromRow(boxes[0]),
        arrears: certificateArrearsFromRows(arrears),
        refunds: certificateRefundsFromRows(refunds),
        issuedAt: localIsoDate(today),
        signer,
      };
    },
    "el certificado de retenciones",
  );
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
  const params = {
    organization: organizationParam(context.society),
    employeeId: employeeParam(employeeId),
  };
  const [periods, stored] = await Promise.all([
    readPortal(
      context,
      () => runPortalSelect(CERTIFICATE_SQL.periods.statement, params),
      "los ejercicios del certificado",
    ),
    // Como en proyecciones, los PDF guardados de otra persona no se listan ni se sirven.
    member
      ? portalOk(context.society, [])
      : readPortal(
          context,
          () => runPortalSelect(RETRIBUCION_SQL.certificados.statement, params),
          "los certificados guardados",
        ),
  ]);
  if (periods.status !== "ok" && (member || stored.status !== "ok")) return periods;
  const notices = [periods, stored].flatMap((result) =>
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
  const years = certificateYears(
    periods.status === "ok"
      ? periods.data.map((row) => ({ start: row.STD_DT_START, end: row.STD_DT_END }))
      : [],
    documents,
    today,
  );
  if (selection.status === "selected" && !years.some((entry) => entry.year === selection.year))
    return portalError(
      member
        ? "Esa persona no tiene certificado de ese ejercicio en la sociedad activa."
        : "No tienes certificado de ese ejercicio en la sociedad activa.",
      "CONTRACT_INCOMPATIBLE",
    );
  const selectedYear = selection.status === "selected" ? selection.year : (years[0]?.year ?? null);
  const base = { years, selectedYear, ...(member ? { member } : {}) };
  if (selectedYear === null)
    return portalOk(context.society, {
      page: { ...base, selection: { kind: "none" }, notices },
      certificate: null,
    });
  const document = years.find((entry) => entry.year === selectedYear)?.document;
  if (document)
    return portalOk(context.society, {
      page: { ...base, selection: { kind: "stored", document }, notices },
      certificate: null,
    });
  const certificate = await readCertificate(context, employeeId, selectedYear, today);
  if (certificate.status === "error") return certificate;
  return portalOk(context.society, {
    page: {
      ...base,
      selection:
        certificate.status === "unavailable"
          ? { kind: "unavailable", message: certificate.message }
          : certificate.data
            ? { kind: "generated" }
            : { kind: "none" },
      notices,
    },
    certificate: certificate.status === "ok" ? certificate.data : null,
  });
}
