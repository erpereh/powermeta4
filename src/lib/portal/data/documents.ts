import "server-only";

import sql from "mssql";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";

import { assertReadOnlySql } from "../peoplenet/query";
import type { PortalDocumentKind } from "../types";
import { parseDocumentKey, type DocumentKey } from "./documents-core";

export type PortalDocument = { readonly fileName: string; readonly bytes: Buffer };

type DocumentRow = { NAME: string | null; DOC: Buffer | null };

/**
 * Documentos guardados en PeopleNet: el recibo (`SSE_LAST_HR_PAY_DOCS`, campo
 * largo en la tabla física secundaria `M4SCO_HR_PAY_DOC1`), el certificado de
 * retenciones (`CSP_CERT_DOC`) y el informe de proyección (`CSP_PROYEC_DOC`).
 * La matrícula y la sociedad salen del servidor; la clave solo elige entre
 * los documentos de esa persona.
 */
const STATEMENTS: Record<PortalDocumentKind, string> = {
  payslip: `SELECT D.SCO_NM_DOC AS NAME, B.SCO_PAY_DOC AS DOC
FROM M4SCO_HR_PAY_DOC D
JOIN M4SCO_HR_PAY_DOC1 B ON B.ID_ORGANIZATION = D.ID_ORGANIZATION AND B.STD_ID_HR = D.STD_ID_HR
  AND B.STD_OR_HR_PERIOD = D.STD_OR_HR_PERIOD AND B.SCO_DT_PAYMENT = D.SCO_DT_PAYMENT
  AND B.SCO_PAY_FREQ_PAYM = D.SCO_PAY_FREQ_PAYM AND B.SCO_OR_DOC = D.SCO_OR_DOC
WHERE D.ID_ORGANIZATION = @organization AND D.STD_ID_HR = @employeeId
  AND D.STD_OR_HR_PERIOD = @period AND D.SCO_DT_PAYMENT = @date
  AND D.SCO_PAY_FREQ_PAYM = @frequency AND D.SCO_OR_DOC = @order`,
  certificate: `SELECT C.SCO_NM_DOC AS NAME, C.SCO_CERT_DOC AS DOC
FROM M4CSP_CERT_DOC C
WHERE C.ID_ORGANIZATION = @organization AND C.STD_ID_HR = @employeeId
  AND C.STD_OR_HR_PERIOD = @period AND C.SCO_OR_DOC = @order`,
  projection: `SELECT P.SCO_NM_DOC AS NAME, P.CSP_PROYEC_DOC AS DOC
FROM M4CSP_PROYEC_DOC P
WHERE P.ID_ORGANIZATION = @organization AND P.STD_ID_HR = @employeeId
  AND P.STD_OR_HR_PERIOD = @period AND P.ANIO = @order`,
};

/** Meta4 antepone `~BLOB<tipo>\0<extensión>\0` al fichero guardado. */
export const stripMeta4Blob = (data: Buffer): { extension: string | null; bytes: Buffer } => {
  if (data.subarray(0, 5).toString("latin1") !== "~BLOB") return { extension: null, bytes: data };
  const start = data.indexOf(0, 5);
  const end = start < 0 ? -1 : data.indexOf(0, start + 1);
  if (end < 0) return { extension: null, bytes: data };
  return {
    extension: data.subarray(start + 1, end).toString("latin1") || null,
    bytes: data.subarray(end + 1),
  };
};

const bind = (request: sql.Request, key: DocumentKey) => {
  request.input("period", sql.Int, key.period);
  request.input("order", sql.Int, key.order);
  if (key.kind === "payslip") {
    request.input("date", sql.Date, new Date(`${key.date}T00:00:00Z`));
    request.input("frequency", sql.VarChar(8), key.frequency);
  }
};

const safeName = (name: string): string =>
  name
    .replaceAll(/[^\p{L}\p{N} ._-]/gu, "")
    .trim()
    .slice(0, 80) || "documento";

export const getOwnDocument = async (
  kind: PortalDocumentKind,
  rawKey: string,
  society: Meta4Society,
  employeeId: string,
): Promise<PortalDocument | null> => {
  const key = parseDocumentKey(kind, rawKey);
  if (!key) return null;
  const statement = STATEMENTS[kind];
  assertReadOnlySql(statement);
  const pool = await getPeopleNetPool();
  const request = pool.request();
  request.input("organization", sql.VarChar(4), society);
  request.input("employeeId", sql.VarChar(64), employeeId);
  bind(request, key);
  const [row] = (await request.query<DocumentRow>(statement)).recordset;
  if (!row?.DOC) return null;
  const { extension, bytes } = stripMeta4Blob(row.DOC);
  const suffix = key.kind === "payslip" ? key.date : String(key.order);
  return {
    fileName: `${safeName(row.NAME ?? "documento")} ${suffix}.${extension ?? "pdf"}`,
    bytes,
  };
};
