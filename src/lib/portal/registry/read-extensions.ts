import type { ConsultSpec, FeatureSection, PortalFeature, PortalSqlQuery } from "../types";
import { sqlConsult } from "./helpers";
import { READONLY_SQL, ownQueryForTeam } from "./sql/readonly";
import { TALENTO_SQL } from "./sql/talento";
import { TIEMPO_SQL, TIME_PERIOD_COLUMNS } from "./sql/tiempo";
import { RESPONSABLE_SQL } from "./sql/responsable";

const pendingSql = (
  id: string,
  title: string,
  meta4: string,
  fields: readonly (readonly [string, string])[],
  query: PortalSqlQuery,
): FeatureSection => {
  const section = sqlConsult(id, title, meta4, "list", fields, query);
  if (section.kind !== "consult") throw new Error("Apartado de consulta esperado.");
  return {
    ...section,
    consult: {
      ...section.consult,
      read: { kind: "sql", tables: query.tables, meta4: [meta4], verified: false },
    },
  };
};
const DATES = [
  ["SCO_DT_START", "Inicio"],
  ["SCO_DT_END", "Fin"],
] as const;
const PRESENCE_FIELDS = [
  ["DT_START", "Día"],
  ["STD_OR_HR_PERIOD", "Periodo de contrato"],
  ["SCO_WORK_THEO_HRS", "Horas teóricas"],
  ["SCO_REAL_WORK_HRS", "Horas reales"],
  ["SCO_ABS_HRS", "Horas de ausencia"],
  ["SCO_SUP_HRS", "Horas adicionales"],
  ["SCO_ID_STATUS_TIMESHEET", "Estado de la hoja (código)"],
  ["SCO_MAX_ALERT_SEVERITY_LEVEL", "Severidad máxima de alertas (código)"],
] as const;

const replacementQuery = (consult: ConsultSpec, manager: boolean): PortalSqlQuery | null => {
  if (consult.meta4 === "SSE_H_HR_KNC_LVL!SSE_H_HR_KNC_LVL") return READONLY_SQL.knowledge;
  if (consult.meta4 === "SSE_CR_PREFERENC!SSE_CR_PREFERENC") return READONLY_SQL.preferences;
  if (consult.meta4 === "SSE_BFT_EE_BNFT_ELEC!M4T_EE_BNFT_ELEC") return READONLY_SQL.benefits;
  if (
    [
      "SSE_OBJECTIVES!SSE_ROL_LV_OBJ",
      "SSM_EV_ROL_LV_OBJ",
      "SSM_EV_ROL_LV_OBJ!SSE_EV_ROL_LV_OBJ",
    ].includes(consult.meta4)
  )
    return manager ? null : READONLY_SQL.objectives;
  return null;
};

/** Se integra en el registro único después de resolver las entradas del menú. */
export function extendPortalReads(feature: PortalFeature): PortalFeature {
  const manager = feature.profile === "responsable";
  let sections: readonly FeatureSection[] = (feature.sections ?? []).map((section) => {
    if (section.kind !== "consult") return section;
    if (section.consult.query) {
      const entry = Object.entries(TIEMPO_SQL).find(
        ([, query]) => query.statement === section.consult.query?.statement,
      );
      const column = entry ? TIME_PERIOD_COLUMNS[entry[0]] : undefined;
      return column
        ? {
            ...section,
            consult: {
              ...section.consult,
              query: { ...section.consult.query, periodColumn: column },
            },
          }
        : section;
    }
    if (section.consult.reader !== "dependency") return section;
    const query = replacementQuery(section.consult, manager);
    if (!query) return section;
    return {
      kind: "consult",
      consult: {
        ...section.consult,
        fields: [
          ...section.consult.fields.map((field) =>
            field.item === "SCO_NM_LEVEL" && query.tables.includes("M4SSE_ROL_LV_OBJ")
              ? { item: "SCO_ID_LEVEL", label: "Nivel (código)" }
              : field,
          ),
          ...(query.tables.includes("M4SSE_ROL_LV_OBJ")
            ? [
                { item: "SCO_OR_HR_ROLE", label: "Rol (ordinal)" },
                { item: "ID_ESTADO_REG", label: "Estado de solicitud" },
              ]
            : []),
        ],
        reader: "sql",
        query,
        read: {
          kind: "sql",
          tables: query.tables,
          verified: false,
          meta4: [section.consult.meta4],
        },
      },
    };
  });
  if (feature.route === "/portal/empleado/tiempo/hoja-presencia") {
    sections = [
      pendingSql(
        "dias",
        "Detalle diario calculado",
        "SCO_GTA_EMPLOYEE_PRESENCE_REPR!SCO_GTA_MONTHLY_PRESENCE_RPRST",
        PRESENCE_FIELDS,
        READONLY_SQL.presence,
      ),
      {
        kind: "note",
        title: "Representación mensual",
        developmentOnly: false,
        body: "Se consultan los días calculados y su severidad almacenada. La representación original, el texto de cada alerta y los contadores virtuales necesitan sus reglas Meta4; no se recalculan ni se validan fichajes.",
      },
    ];
  }
  if (feature.profile === "empleado" && feature.route.endsWith("/preferencias"))
    sections = [
      pendingSql(
        "registradas",
        "Preferencias registradas del contrato vigente",
        "SSE_CR_PREFERENC!M4T_CR_PREFERENC",
        [
          ["SCO_PREFERENCES", "Preferencia"],
          ["SCO_PREF_PRIORITY", "Prioridad"],
          ["DT_START", "Inicio"],
          ["DT_END", "Fin"],
          ["SCO_COMMENT", "Comentarios"],
        ],
        READONLY_SQL.registeredPreferences,
      ),
      ...sections,
    ];
  if (feature.profile === "empleado" && feature.route.endsWith("/objetivos"))
    sections = [
      pendingSql(
        "vigentes",
        "Objetivos vigentes registrados",
        "SSE_OBJECTIVES!SSE_OBJECTIVE_JOB_PERSON",
        [
          ["SCO_NM_OBJECTIVE", "Objetivo"],
          ["SCO_NM_MAGNITUDE", "Magnitud"],
          ["SCO_WEIGHT", "Peso"],
          ["SCO_SCHED_VALUE", "Valor previsto"],
          ["SCO_ACCOMP_VALUE", "Valor conseguido"],
          ["SCO_ID_LEVEL", "Nivel (código)"],
          ["SCO_OR_HR_ROLE", "Rol (ordinal)"],
          ...DATES,
        ],
        READONLY_SQL.registeredObjectives,
      ),
      ...sections,
    ];
  if (feature.id === "responsable.equipo.ficha") {
    const add = (
      id: string,
      title: string,
      meta4: string,
      fields: readonly (readonly [string, string])[],
      query: PortalSqlQuery,
    ) =>
      pendingSql(
        id,
        title,
        meta4,
        [["PORTAL_EMPLOYEE_ID", "Matrícula"], ...fields],
        ownQueryForTeam(query),
      );
    sections = [
      ...sections,
      add(
        "contratos",
        "Historial de contratos",
        "SMCO_EMPLOYEE_PROFESIONAL_DATA!SMCO_PROFS_INFO_CONTRACT",
        [
          ["SCO_ID_CONTRACT", "Contrato (código)"],
          ["SCO_OR_HR_PERIOD", "Periodo de contrato"],
          ...DATES,
          ["SCO_DT_PROBATION_END", "Fin de prueba"],
          ["SCO_DT_EXPECTED_END", "Fin previsto"],
        ],
        READONLY_SQL.contracts,
      ),
      add(
        "puestos",
        "Historial de puestos",
        "SSE_JOB!SSE_H_HR_JOB",
        [["STD_N_JOB_CODE", "Puesto"], ...DATES],
        TALENTO_SQL.puestos,
      ),
      add(
        "cursos",
        "Formación realizada",
        "SSE_H_HR_COURSE!SSE_H_HR_COURSE",
        [["SCO_NM_DEV_SUBPRODUCT", "Curso"], ...DATES, ["SCO_NM_STATE", "Estado"]],
        TALENTO_SQL.formacionRealizada,
      ),
      add(
        "evaluaciones",
        "Evaluaciones recibidas",
        "SSCO_H_EVALUTE!SSCO_H_EVALUATE",
        [
          ["SCO_NM_EVAL_PROC", "Proceso"],
          ["SCO_DT_ST_EV_PER", "Inicio del periodo evaluado"],
          ["SCO_DT_END_EV_PER", "Fin del periodo evaluado"],
          ["SCO_NM_LEVEL_OBJ", "Nivel de objetivos"],
          ["SCO_NM_LEVEL_CAP", "Nivel de competencias"],
        ],
        TALENTO_SQL.evaluaciones,
      ),
      pendingSql(
        "salarios",
        "Retribución del equipo",
        "SSM_H_SAL_DATA!SSM_PRINCIPAL",
        [
          ["EMPLEADO", "Empleado"],
          ["SCO_FIX_SALARY", "Fijo"],
          ["SCO_VAR_SALARY", "Variable"],
          ["SCO_BNFT_LEG_ENT", "Beneficios"],
          ["SCO_SAL_TOTAL", "Total"],
          ["ID_CURRENCY", "Moneda"],
        ],
        RESPONSABLE_SQL.salarios,
      ),
      add(
        "presencia",
        "Presencia calculada",
        "SCO_GTA_EMPLOYEE_PRESENCE_REPR!SCO_GTA_MONTHLY_PRESENCE_RPRST",
        PRESENCE_FIELDS,
        READONLY_SQL.presence,
      ),
      add(
        "tiempo",
        "Historial de ausencias",
        "SSE_REAL_TIME!SSE_REAL_TIME",
        [
          ["SCO_NM_INCIDENCE", "Tipo"],
          ...DATES,
          ["SCO_UNITS", "Duración"],
          ["SCO_NM_TIME_UNIT", "Unidad"],
        ],
        {
          ...TIEMPO_SQL.ausencias,
          statement: TIEMPO_SQL.ausencias.statement.replace(
            "  AND YEAR(A.SCO_DT_START) = YEAR(@today)\n",
            "",
          ),
        },
      ),
    ];
  }
  if (feature.view === "team" || feature.view === "population")
    sections = [
      pendingSql(
        "equipo",
        "Personas del equipo autorizado",
        "SMCO_EMPLOYEE_PROFESIONAL_DATA",
        [
          ["ID_EMPLEADO", "Matrícula"],
          ["EMPLEADO", "Empleado"],
          ["N_PUESTO", "Puesto"],
          ["N_UNIDAD", "Unidad"],
          ["N_CENTRO_TRABAJO", "Centro de trabajo"],
        ],
        {
          ...RESPONSABLE_SQL.ficha,
          statement: RESPONSABLE_SQL.ficha.statement.replace(
            "SELECT ",
            "SELECT O.ID_EMPLEADO AS ID_EMPLEADO, ",
          ),
        },
      ),
    ];
  if (feature.view === "team" || feature.view === "population")
    sections = sections.map((section) =>
      section.kind === "consult"
        ? {
            ...section,
            consult: {
              ...section.consult,
              personLink: { item: "ID_EMPLEADO", route: "/portal/responsable/equipo/ficha" },
            },
          }
        : section,
    );
  // La población ORO no acredita las responsabilidades propias de una revisión salarial.
  if (
    feature.route.startsWith("/portal/responsable/revision") ||
    feature.route === "/portal/responsable/retribucion/revision"
  )
    sections = sections.map((section) =>
      section.kind !== "consult"
        ? section
        : {
            kind: "consult",
            consult: {
              ...section.consult,
              reader: "dependency",
              query: undefined,
              read: {
                kind: "pending",
                meta4: [section.consult.meta4],
                pending: ["P02", "P03"],
                detail:
                  "Falta acreditar el filtro específico de responsabilidades, planes y fases de revisión salarial. La jerarquía ORO por sí sola no autoriza esta consulta.",
              },
            },
          },
    );
  if (feature.route === "/portal/responsable/talento/formacion-realizada")
    sections = [
      pendingSql(
        "cursos",
        "Cursos realizados del equipo",
        "SSE_H_HR_COURSE!SSE_H_HR_COURSE",
        [
          ["PORTAL_EMPLOYEE_ID", "Matrícula"],
          ["SCO_NM_DEV_SUBPRODUCT", "Curso"],
          ...DATES,
          ["SCO_NM_STATE", "Estado"],
        ],
        ownQueryForTeam(TALENTO_SQL.formacionRealizada),
      ),
    ];
  if (feature.route === "/portal/responsable/talento/eventos")
    sections = [
      pendingSql(
        "eventos",
        "Sesiones y estado de inscripción del equipo",
        "SSE_TRAINING_REQUEST!M4T_SOLICITUDES_ACEPTADAS",
        [
          ["PORTAL_EMPLOYEE_ID", "Matrícula"],
          ["SCO_NM_DEV_SUBPRODUCT", "Curso"],
          ["SCO_NM_DEV_SUBACTION", "Sesión"],
          ["SCO_NM_REQ_STATUS", "Estado"],
          ["DT_START", "Inicio"],
          ["DT_END", "Fin"],
        ],
        ownQueryForTeam(TALENTO_SQL.solicitudesAceptadas),
      ),
      {
        kind: "note",
        title: "Convocatorias",
        developmentOnly: false,
        body: "Este apartado consulta sesiones existentes e inscripciones. La publicación de eventos convocados de SSM_TRAINING_REQUEST!M4T_EVENTOS necesita verificar su filtro y no se equipara a una inscripción aceptada.",
      },
    ];

  // Los filtros de consulta se ejecutan por la capa de lectura; no son escrituras.
  const hasConsults = sections.some((section) => section.kind === "consult");
  const pendingQueries: FeatureSection[] = sections.flatMap((section) => {
    if (
      section.kind !== "form" ||
      section.form.mode !== "query" ||
      (hasConsults && !/simul/i.test(`${section.form.id} ${section.form.title}`))
    )
      return [];
    const { write, ...form } = section.form;
    return [
      {
        kind: "query",
        query: {
          id: form.id,
          title: form.title,
          meta4: [write.meta4Method],
          form: {
            ...form,
            mode: "query",
            dependency: { method: write.meta4Method, label: write.label, pending: write.pending },
          },
        },
      },
    ];
  });
  if (hasConsults)
    sections = [
      ...sections.filter((section) => section.kind !== "form" || section.form.mode !== "query"),
      {
        kind: "query",
        query: {
          id: feature.id,
          title: "Filtrar la consulta",
          meta4: sections.flatMap((section) =>
            section.kind === "form" && section.form.mode === "query"
              ? [
                  section.form.write.meta4Method,
                  ...section.form.fields.flatMap((field) =>
                    field.options?.kind === "pending" ? [field.options.meta4] : [],
                  ),
                ]
              : [],
          ),
        },
      },
    ];
  sections = [
    ...sections.filter((section) => section.kind !== "form" || section.form.mode !== "query"),
    ...pendingQueries,
  ];
  const connected = sections.flatMap((section) =>
    section.kind === "consult" && section.consult.reader !== "dependency" ? [section.consult] : [],
  );
  const missing = sections.some(
    (section) => section.kind === "consult" && section.consult.reader === "dependency",
  );
  const read =
    connected.length &&
    !missing &&
    (feature.read.kind === "pending" || feature.view === "team" || feature.view === "population")
      ? {
          kind: "sql" as const,
          tables: [
            ...new Set(
              connected.flatMap((consult) =>
                consult.read.kind === "sql" ? consult.read.tables : [],
              ),
            ),
          ],
          meta4: connected.map((consult) => consult.meta4),
          verified: false,
        }
      : feature.read;
  return { ...feature, read, sections };
}
