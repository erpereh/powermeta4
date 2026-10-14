import "server-only";

import { getQuinquenalReport } from "@/lib/peoplenet/quinquenal";
import type { PortalContext } from "../context";
import { organizationParam, employeeParam, runPortalSelect } from "../peoplenet/query";
import { PROJECTION_SQL } from "../registry/sql/projections";
import { RETRIBUCION_SQL } from "../registry/sql/retribucion";
import { readPortal } from "../server";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "../result";
import { buildProjectionReport, projectionHeaderYear, projectionNumber } from "../projections/core";
import type {
  ProjectionDocument,
  ProjectionHistory,
  ProjectionPageData,
  ProjectionYearSelection,
} from "../projections/types";
import { documentHref, parseDocumentKey } from "./documents-core";

const executedAt = (value: unknown): number => {
  const stamp =
    value instanceof Date ? value.getTime() : typeof value === "string" ? Date.parse(value) : NaN;
  return Number.isFinite(stamp) ? stamp : -Infinity;
};

/** Únicamente recibe el contexto autenticado y un ejercicio, nunca identidad del cliente. */
export async function getOwnProjections(
  context: PortalContext,
  selection: ProjectionYearSelection,
): Promise<PortalResult<ProjectionPageData>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  if (selection.status === "invalid")
    return portalError("El ejercicio indicado no es válido.", "CONTRACT_INCOMPATIBLE");
  const person = context.identity.person;
  const params = {
    organization: organizationParam(context.society),
    employeeId: employeeParam(person.employeeId),
  };
  const [current, historical, documents] = await Promise.all([
    readPortal(
      context,
      () => runPortalSelect(PROJECTION_SQL.currentHeaders.statement, params),
      "la proyección actual",
    ),
    readPortal(
      context,
      () => runPortalSelect(PROJECTION_SQL.historicalHeaders.statement, params),
      "las proyecciones históricas",
    ),
    readPortal(
      context,
      () => runPortalSelect(RETRIBUCION_SQL.proyeccionInformes.statement, params),
      "los documentos de proyección",
    ),
  ]);
  if (current.status !== "ok" && historical.status !== "ok" && documents.status !== "ok")
    return current;
  const notices: string[] = [current, historical, documents].flatMap((result) =>
    result.status === "ok" ? [] : [result.message],
  );
  const headers = [
    ...(current.status === "ok" ? current.data.map((row) => ({ row, historical: false })) : []),
    ...(historical.status === "ok"
      ? historical.data.map((row) => ({ row, historical: true }))
      : []),
  ];
  const ownDocuments: ProjectionDocument[] =
    documents.status === "ok"
      ? documents.data.flatMap((row) => {
          const year = projectionNumber(row.ANIO);
          const rawKey = typeof row.DOC_KEY === "string" ? row.DOC_KEY : "";
          return year !== null &&
            Number.isInteger(year) &&
            year >= 1900 &&
            year <= 2099 &&
            parseDocumentKey("projection", rawKey)
            ? [
                {
                  year,
                  label: typeof row.SCO_NM_DOC === "string" ? row.SCO_NM_DOC : `Informe de ${year}`,
                  href: documentHref("projection", rawKey),
                },
              ]
            : [];
        })
      : [];
  const years = [
    ...new Set([
      ...headers.flatMap(({ row }) => {
        const year = projectionHeaderYear(row);
        return year === null ? [] : [year];
      }),
      ...ownDocuments.map((doc) => doc.year),
    ]),
  ].sort((a, b) => b - a);
  if (selection.status === "selected" && !years.includes(selection.year))
    return portalError(
      "No tienes un informe de ese ejercicio en la sociedad activa.",
      "CONTRACT_INCOMPATIBLE",
    );
  const selectedYear = selection.status === "selected" ? selection.year : (years[0] ?? null);
  const empty = (): PortalResult<ProjectionPageData> =>
    portalOk(context.society, {
      report: null,
      years,
      selectedYear,
      documents: ownDocuments,
      notices,
    });
  if (selectedYear === null) return empty();
  const candidates = headers
    .filter(({ row }) => projectionHeaderYear(row) === selectedYear)
    .sort(
      (a, b) =>
        executedAt(b.row.CSP_FEC_EJECUCION) - executedAt(a.row.CSP_FEC_EJECUCION) ||
        Number(a.historical) - Number(b.historical),
    );
  const selected = candidates[0];
  if (!selected) return empty();
  // Dos periodos igualmente recientes no se resuelven eligiendo uno arbitrario.
  if (
    candidates.some(
      (entry) =>
        executedAt(entry.row.CSP_FEC_EJECUCION) === executedAt(selected.row.CSP_FEC_EJECUCION) &&
        projectionNumber(entry.row.STD_OR_HR_PERIOD) !==
          projectionNumber(selected.row.STD_OR_HR_PERIOD),
    )
  )
    return portalError("Hay más de una proyección para ese ejercicio y fecha.", "AMBIGUOUS");
  const period = projectionNumber(selected.row.STD_OR_HR_PERIOD);
  if (period === null || !Number.isSafeInteger(period) || period < 0)
    return portalError("La proyección no identifica su periodo de alta.", "CONTRACT_INCOMPATIBLE");
  const query = selected.historical
    ? PROJECTION_SQL.historicalConcepts
    : PROJECTION_SQL.currentConcepts;
  const [concepts, economic] = await Promise.all([
    readPortal(
      context,
      () =>
        runPortalSelect(query.statement, {
          ...params,
          period: { type: "int", value: period },
          ...(selected.historical ? { year: { type: "int" as const, value: selectedYear } } : {}),
        }),
      "el desglose de proyecciones",
    ),
    readPortal(
      context,
      () =>
        getQuinquenalReport({
          organization: context.society,
          employeeId: person.employeeId,
          today: new Date().toISOString().slice(0, 10),
        }),
      "las cifras económicas quinquenales",
    ),
  ]);
  if (concepts.status !== "ok") {
    notices.push(concepts.message);
    return empty();
  }
  if (economic.status !== "ok") notices.push(economic.message);
  const figures =
    economic.status === "ok"
      ? economic.data.rows.filter((row) => row.employeeId === person.employeeId)
      : [];
  if (figures.length > 1)
    return portalError("La lectura económica devuelve más de una ficha propia.", "AMBIGUOUS");
  const history: ProjectionHistory[] = figures
    .flatMap((row) =>
      row.years.map((entry) => ({
        year: entry.year,
        fixed: entry.coefficient === null ? null : entry.salary,
        variable: entry.coefficient === null ? null : entry.variable,
      })),
    )
    .filter(
      (entry) => entry.year <= selectedYear && (entry.fixed !== null || entry.variable !== null),
    );
  const report = concepts.data.length
    ? buildProjectionReport({
        header: selected.row,
        concepts: concepts.data,
        person,
        history,
        economic: history.find((entry) => entry.year === selectedYear),
      })
    : null;
  return portalOk(context.society, {
    report,
    years,
    selectedYear,
    documents: ownDocuments,
    notices,
  });
}
