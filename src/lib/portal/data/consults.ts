import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";

import type { PortalContext } from "../context";
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlRow,
} from "../peoplenet/query";
import { portalUnavailable, type PortalResult } from "../result";
import { readPortal } from "../server";
import type { ConsultData, ConsultSpec, PortalFeature, PortalSqlQuery } from "../types";
import { documentHref } from "./documents-core";
import { getOwnEmails, getOwnMaritalStatus } from "./organization";
import { getOwnPaymentAccounts } from "./payments";
import { MANAGER_SCOPE_VERIFIED } from "./scope";
import { withTeamScope } from "./team-scope";

export type ConsultResults = Readonly<Record<string, PortalResult<ConsultData>>>;

const dateItems = new Set(["SCO_DT_START", "SCO_DT_END", "STD_DT_START", "STD_DT_END"]);
/** `sqlText` deja las fechas de SQL como `AAAA-MM-DD`; nada más tiene esa forma exacta. */
const SQL_DATE = /^\d{4}-\d{2}-\d{2}$/;
const displayValue = (item: string | undefined, value: string | null): string => {
  if (!value) return "No informado";
  if (!(item && dateItems.has(item)) && !SQL_DATE.test(value)) return value;
  if (value.startsWith("4000-01-01")) return "Vigente";
  if (!/^\d{4}-\d{2}-\d{2}/.test(value)) return value;
  const [year, month, day] = value.slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
};

const startOfToday = (): Date => {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
};

/**
 * Ejecuta la SELECT de un apartado `sql`. La sociedad, la matrícula propia y el
 * equipo del responsable salen del servidor; el navegador no aporta parámetros.
 */
const runSqlConsult = async (
  query: PortalSqlQuery,
  society: Meta4Society,
  employeeId: string,
): Promise<PortalSqlRow[]> => {
  const base: Record<string, PortalSqlParam> = {
    organization: organizationParam(society),
    today: { type: "date", value: startOfToday() },
  };
  if (query.scope === "society") return runPortalSelect(query.statement, base);
  const own = { ...base, employeeId: employeeParam(employeeId) };
  if (query.scope === "own") return runPortalSelect(query.statement, own);
  // El equipo se resuelve en la base desde la matrícula del servidor (team-scope.ts).
  return runPortalSelect(withTeamScope(query.statement), own);
};

export const mapConsultRows = (
  consult: ConsultSpec,
  rows: readonly PortalSqlRow[],
): ConsultData => {
  const download = consult.download;
  return {
    rows: rows.map((row) =>
      consult.fields.map((field) => ({
        label: field.label,
        value: displayValue(field.item, field.item ? sqlText(row[field.item]) : null),
      })),
    ),
    ...(download
      ? {
          links: rows.map((row) => {
            const key = sqlText(row.DOC_KEY);
            return key ? documentHref(download.kind, key) : null;
          }),
        }
      : {}),
  };
};

/** Cada apartado falla de forma independiente; ninguna matrícula llega del navegador. */
export const loadFeatureConsults = async (
  feature: PortalFeature,
  context: PortalContext,
): Promise<ConsultResults> => {
  const entries = await Promise.all(
    (feature.sections ?? []).flatMap((section) =>
      section.kind !== "consult"
        ? []
        : [
            (async (): Promise<readonly [string, PortalResult<ConsultData>]> => {
              const consult = section.consult;
              if (consult.reader === "dependency")
                return [
                  consult.id,
                  portalUnavailable(
                    consult.read.kind === "pending" ? consult.read.pending : ["P02", "P05"],
                    consult.read.kind === "pending"
                      ? `${consult.read.detail} (${consult.meta4})`
                      : `Falta el contrato de ${consult.meta4}.`,
                  ),
                ];
              if (feature.profile === "responsable" && !MANAGER_SCOPE_VERIFIED)
                return [
                  consult.id,
                  portalUnavailable(
                    ["P03"],
                    "Los datos sensibles del responsable esperan la comprobación de su población en el portal real.",
                  ),
                ];
              const result = await readPortal(
                context,
                async (meta4) => {
                  if (meta4.identity.status !== "resolved") return null;
                  const employeeId = meta4.identity.person.employeeId;
                  switch (consult.reader) {
                    case "own-emails": {
                      const emails = await getOwnEmails(employeeId);
                      return mapConsultRows(
                        consult,
                        emails.map((email) => ({
                          STD_EMAIL: email.email,
                          STD_OR_MAIL: email.order,
                          STD_DT_START: email.startDate,
                          STD_DT_END: email.endDate,
                          STD_ID_LOCAT_TYPE: email.locationTypeCode,
                        })),
                      );
                    }
                    case "own-payment-accounts":
                      return mapConsultRows(
                        consult,
                        await getOwnPaymentAccounts(meta4.society, employeeId),
                      );
                    case "own-oro-status": {
                      return mapConsultRows(
                        consult,
                        await getOwnMaritalStatus(meta4.society, employeeId),
                      );
                    }
                    case "sql": {
                      if (!consult.query) throw new Error("Apartado sql sin consulta.");
                      return mapConsultRows(
                        consult,
                        await runSqlConsult(consult.query, meta4.society, employeeId),
                      );
                    }
                    default:
                      throw new Error("Lector de apartado no reconocido.");
                  }
                },
                consult.title,
              );
              if (result.status === "ok" && result.data === null)
                return [
                  consult.id,
                  portalUnavailable(
                    ["P03"],
                    context.mode === "meta4" && context.identity.status === "unresolved"
                      ? context.identity.message
                      : "Falta una identidad propia coherente.",
                  ),
                ];
              return [
                consult.id,
                result.status === "ok" ? { ...result, data: result.data ?? { rows: [] } } : result,
              ];
            })(),
          ],
    ),
  );
  return Object.fromEntries(entries);
};
