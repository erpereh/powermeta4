import "server-only";

import type { PortalContext } from "../context";
import { organizationParam, employeeParam, runPortalSelect, sqlText } from "../peoplenet/query";
import type { PortalPerson } from "../identity-core";
import {
  PROJECTION_SOCIETY_SQL,
  PROJECTION_SQL,
  PROJECTION_TEAM_SQL,
} from "../registry/sql/projections";
import { RETRIBUCION_SQL } from "../registry/sql/retribucion";
import { readPortal } from "../server";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "../result";
import {
  PROJECTION_HISTORY_FIRST_YEAR,
  buildProjectionReport,
  projectionHeaderYear,
  projectionNumber,
  projectionQuinquennial,
} from "../projections/core";
import { PROJECTION_LOOKUP } from "../projections/types";
import type {
  ProjectionDocument,
  ProjectionEmployeeSelection,
  ProjectionHistory,
  ProjectionPageData,
  ProjectionTeamMember,
  ProjectionYearSelection,
} from "../projections/types";
import { documentHref, parseDocumentKey } from "./documents-core";
import { withTeamScope } from "./team-scope";

type Meta4Context = Extract<PortalContext, { mode: "meta4" }>;

/** Personas que computan en la jerarquía ORO del usuario (0 si no es responsable). */
export async function getProjectionTeamSize(context: PortalContext): Promise<PortalResult<number>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  const own = context.identity.person.employeeId;
  return readPortal(
    context,
    async () => {
      const [row] = await runPortalSelect(withTeamScope(PROJECTION_TEAM_SQL.size.statement), {
        organization: organizationParam(context.society),
        employeeId: employeeParam(own),
      });
      return Number(row?.TOTAL ?? 0) || 0;
    },
    "tu equipo",
  );
}

/**
 * Persona pedida por matrícula. Con `society` vale cualquiera de la sociedad
 * activa (el nombre sale de ORO si lo tiene); con `team` solo la jerarquía del
 * usuario, y `null` significa que no pertenece a ella.
 */
const resolveMember = (context: Meta4Context, selfId: string, employeeId: string) =>
  PROJECTION_LOOKUP.scope === "team"
    ? resolveTeamMember(context, selfId, employeeId)
    : resolveSocietyMember(context, employeeId);

export const resolveSocietyMember = async (
  context: Meta4Context,
  employeeId: string,
): Promise<PortalResult<ProjectionTeamMember | null>> =>
  readPortal(
    context,
    async () => {
      const rows = await runPortalSelect(PROJECTION_SOCIETY_SQL.member.statement, {
        organization: organizationParam(context.society),
        targetId: employeeParam(employeeId),
      });
      // Varios registros en ORO: se prefiere el que computa para el nombre.
      const row = rows.find((entry) => sqlText(entry.COMPUTA) === "1") ?? rows[0];
      return { id: employeeId, name: (row && sqlText(row.EMPLEADO)) || employeeId };
    },
    "la persona indicada",
  );

/** La matrícula pedida solo se acepta si pertenece al equipo del responsable autenticado. */
const resolveTeamMember = async (
  context: Meta4Context,
  managerId: string,
  employeeId: string,
): Promise<PortalResult<ProjectionTeamMember | null>> =>
  readPortal(
    context,
    async () => {
      const rows = await runPortalSelect(withTeamScope(PROJECTION_TEAM_SQL.member.statement), {
        organization: organizationParam(context.society),
        employeeId: employeeParam(managerId),
        targetId: employeeParam(employeeId),
      });
      const row = rows[0];
      if (!row || rows.length > 1) return null;
      return { id: employeeId, name: sqlText(row.EMPLEADO) || employeeId };
    },
    "la persona de tu equipo",
  );

const executedAt = (value: unknown): number => {
  const stamp =
    value instanceof Date ? value.getTime() : typeof value === "string" ? Date.parse(value) : NaN;
  return Number.isFinite(stamp) ? stamp : -Infinity;
};

/**
 * Proyección propia o, con una matrícula, la de otra persona (`CARGA_2`) según
 * `PROJECTION_LOOKUP`. La identidad, la sociedad y el equipo salen del
 * servidor; el navegador solo elige ejercicio y, como mucho, una matrícula.
 */
export async function getProjections(
  context: PortalContext,
  selection: ProjectionYearSelection,
  employee: ProjectionEmployeeSelection = { status: "own" },
): Promise<PortalResult<ProjectionPageData>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  if (selection.status === "invalid")
    return portalError("El ejercicio indicado no es válido.", "CONTRACT_INCOMPATIBLE");
  if (employee.status === "invalid")
    return portalError("La matrícula indicada no es válida.", "CONTRACT_INCOMPATIBLE");
  const self = context.identity.person;
  let person: PortalPerson = self;
  let member: ProjectionTeamMember | undefined;
  if (employee.status === "team" && employee.employeeId !== self.employeeId) {
    const resolved = await resolveMember(context, self.employeeId, employee.employeeId);
    if (resolved.status !== "ok") return resolved;
    if (!resolved.data)
      return portalError("Esa matrícula no pertenece a tu equipo en la sociedad activa.");
    member = resolved.data;
    person = {
      employeeId: member.id,
      fullName: member.name,
      job: null,
      unit: null,
      workCenter: null,
      hireDate: null,
      managerId: null,
    };
  }
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
    // La descarga de PDF solo sirve documentos propios: otra persona no los lista.
    member
      ? portalOk(context.society, [])
      : readPortal(
          context,
          () => runPortalSelect(RETRIBUCION_SQL.proyeccionInformes.statement, params),
          "los documentos de proyección",
        ),
  ]);
  if (
    current.status !== "ok" &&
    historical.status !== "ok" &&
    (member || documents.status !== "ok")
  )
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
      member
        ? "Esa persona no tiene un informe de ese ejercicio en la sociedad activa."
        : "No tienes un informe de ese ejercicio en la sociedad activa.",
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
      ...(member ? { member } : {}),
    });
  if (selectedYear === null) return empty();
  type Header = (typeof headers)[number];
  /** Cabecera de un ejercicio: su ejecución más reciente; dos periodos empatados no se adivinan. */
  const headerFor = (year: number): Header | "ambiguous" | null => {
    const candidates = headers
      .filter(({ row }) => projectionHeaderYear(row) === year)
      .sort(
        (a, b) =>
          executedAt(b.row.CSP_FEC_EJECUCION) - executedAt(a.row.CSP_FEC_EJECUCION) ||
          Number(a.historical) - Number(b.historical),
      );
    const latest = candidates[0];
    if (!latest) return null;
    return candidates.some(
      (entry) =>
        executedAt(entry.row.CSP_FEC_EJECUCION) === executedAt(latest.row.CSP_FEC_EJECUCION) &&
        projectionNumber(entry.row.STD_OR_HR_PERIOD) !==
          projectionNumber(latest.row.STD_OR_HR_PERIOD),
    )
      ? "ambiguous"
      : latest;
  };
  const periodOf = (entry: Header): number | null => {
    const period = projectionNumber(entry.row.STD_OR_HR_PERIOD);
    return period !== null && Number.isSafeInteger(period) && period >= 0 ? period : null;
  };
  const loadConcepts = (entry: Header, period: number, year: number) =>
    readPortal(
      context,
      () =>
        runPortalSelect(
          (entry.historical ? PROJECTION_SQL.historicalConcepts : PROJECTION_SQL.currentConcepts)
            .statement,
          {
            ...params,
            period: { type: "int", value: period },
            ...(entry.historical ? { year: { type: "int" as const, value: year } } : {}),
          },
        ),
      "el desglose de proyecciones",
    );
  const selected = headerFor(selectedYear);
  if (selected === "ambiguous")
    return portalError("Hay más de una proyección para ese ejercicio y fecha.", "AMBIGUOUS");
  if (!selected) return empty();
  const period = periodOf(selected);
  if (period === null)
    return portalError("La proyección no identifica su periodo de alta.", "CONTRACT_INCOMPATIBLE");
  // printGrafBar: el ejercicio y los anteriores desde 2018, hasta cinco en total.
  // Antes de 2018 el original no muestra la comparativa.
  const previous =
    selectedYear >= PROJECTION_HISTORY_FIRST_YEAR
      ? years
          .filter((year) => year < selectedYear && year >= PROJECTION_HISTORY_FIRST_YEAR)
          .flatMap((year) => {
            const entry = headerFor(year);
            const entryPeriod = entry && entry !== "ambiguous" ? periodOf(entry) : null;
            return entry && entry !== "ambiguous" && entryPeriod !== null
              ? [{ year, entry, period: entryPeriod }]
              : [];
          })
          .slice(0, 4)
      : [];
  const [concepts, ...earlier] = await Promise.all([
    loadConcepts(selected, period, selectedYear),
    ...previous.map(({ entry, period: entryPeriod, year }) =>
      loadConcepts(entry, entryPeriod, year),
    ),
  ]);
  if (concepts.status !== "ok") {
    notices.push(concepts.message);
    return empty();
  }
  const today = new Date();
  const history: ProjectionHistory[] =
    selectedYear >= PROJECTION_HISTORY_FIRST_YEAR
      ? [
          {
            year: selectedYear,
            ...projectionQuinquennial(selected.row, concepts.data, today),
          },
          // Un ejercicio que no se puede leer se omite, como el fetch fallido del original.
          ...previous.flatMap(({ year, entry }, index) => {
            const result = earlier[index];
            return result?.status === "ok"
              ? [{ year, ...projectionQuinquennial(entry.row, result.data, today) }]
              : [];
          }),
        ]
      : [];
  const report = concepts.data.length
    ? buildProjectionReport({
        header: selected.row,
        concepts: concepts.data,
        person,
        history,
        today,
      })
    : null;
  return portalOk(context.society, {
    report,
    years,
    selectedYear,
    documents: ownDocuments,
    notices,
    ...(member ? { member } : {}),
  });
}
