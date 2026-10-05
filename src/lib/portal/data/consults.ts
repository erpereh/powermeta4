import "server-only";

import type { PortalContext } from "../context";
import { sqlText, type PortalSqlRow } from "../peoplenet/query";
import { portalUnavailable, type PortalResult } from "../result";
import { readPortal } from "../server";
import type { ConsultData, ConsultSpec, PortalFeature } from "../types";
import { getOwnEmails, getOwnMaritalStatus } from "./organization";
import { getOwnPaymentAccounts } from "./payments";
import { MANAGER_SCOPE_VERIFIED } from "./scope";

export type ConsultResults = Readonly<Record<string, PortalResult<ConsultData>>>;

const dateItems = new Set(["SCO_DT_START", "SCO_DT_END", "STD_DT_START", "STD_DT_END"]);
const displayValue = (item: string | undefined, value: string | null): string => {
  if (!value) return "No informado";
  if (!item || !dateItems.has(item)) return value;
  if (value.startsWith("4000-01-01")) return "Vigente";
  if (!/^\d{4}-\d{2}-\d{2}/.test(value)) return value;
  const [year, month, day] = value.slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
};

export const mapConsultRows = (
  consult: ConsultSpec,
  rows: readonly PortalSqlRow[],
): ConsultData => ({
  rows: rows.map((row) =>
    consult.fields.map((field) => ({
      label: field.label,
      value: displayValue(field.item, field.item ? sqlText(row[field.item]) : null),
    })),
  ),
});

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
