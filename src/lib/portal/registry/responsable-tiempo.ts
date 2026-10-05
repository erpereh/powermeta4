import type { PortalFeature } from "../types";
import {
  date,
  form,
  methodWrite,
  note,
  pendingSelect,
  sqlConsult,
  sqlRead,
  staticSelect,
  validationForm,
} from "./helpers";
import { RESPONSABLE_SQL } from "./sql/responsable";

const TIE = "responsable/tiempo";
const base = "/portal/responsable/tiempo";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
].map((label, index) => ({ value: String(index + 1), label }));

export const RESPONSABLE_TIEMPO: readonly PortalFeature[] = [
  {
    id: "responsable.tiempo.vacaciones",
    profile: "responsable",
    domain: "tiempo-equipo",
    title: "Vacaciones del equipo",
    summary: "Vacaciones aceptadas y peticiones por validar, por mes y tipo.",
    icon: "vacation",
    route: `${base}/vacaciones`,
    sources: [
      "mss_g4/mss_g4_p3.jsp",
      "mss_g4/mss_g4_p1_val.jsp",
      "mss_g4/mss_g4_p1_val_body.jsp",
      "mss_g4/mss_g4_p1_val2.jsp",
      "mss_g4/act_val_vac.jsp",
    ],
    ficha: `${TIE}/mss_g4--mss_g4_p1_val_body.md`,
    keywords: ["vacaciones", "validar", "equipo", "calendario"],
    sensitive: true,
    read: sqlRead(RESPONSABLE_SQL.vacaciones.tables),
    view: "generic",
    sections: [
      sqlConsult(
        "vacaciones",
        "Vacaciones del equipo",
        "SSM_HOLYDAYS!M4T_REAL_TIME_PRD",
        "list",
        [
          ["EMPLEADO", "Empleado"],
          ["SCO_NM_INCIDENCE", "Tipo"],
          ["SCO_DT_START", "Inicio"],
          ["SCO_DT_END", "Fin"],
          ["SCO_UNITS", "Duración"],
        ],
        RESPONSABLE_SQL.vacaciones,
        "Vacaciones registradas en el año en curso.",
      ),
      form({
        id: "filtro-vacaciones",
        title: "Periodo",
        description: "Por defecto, el mes y el año actuales.",
        fields: [
          pendingSelect("SCO_ID_INCIDENCE", "Tipo de vacaciones", "SSM_HOLYDAYS!SSE_INCIDENCE"),
          staticSelect("month", "Mes", MONTHS),
          { name: "year", label: "Año", type: "number", min: 2000, max: 2100 },
        ],
        write: methodWrite(
          "consultar",
          "Consultar",
          "SSM_HOLYDAYS!SSM_PRINCIPAL.CARGA",
          undefined,
          ["P02", "P05"],
        ),
        mode: "query",
      }),
      note(
        "Leyenda",
        "Días aceptados, pendientes de aceptar, pendientes de cancelar y festivos se distinguen con texto e icono, no solo por color. El calendario real no se calcula a partir de las peticiones visibles.",
      ),
      validationForm(
        "validar-vacaciones",
        "Valida vacaciones",
        "SSE_HOLYDAYS",
        "SSE_REAL_TIME_PRD",
        {
          description:
            "Peticiones del nodo SSE_REAL_TIME_PRD con su nivel aceptado. El tipo puede ser de presencia o de ausencia. Envía las decisiones de cada página.",
        },
      ),
    ],
  },
  {
    id: "responsable.tiempo.ausencias",
    profile: "responsable",
    domain: "tiempo-equipo",
    title: "Ausencias del equipo",
    summary: "Ausencias anuales por empleado con su detalle.",
    icon: "absence",
    route: `${base}/ausencias`,
    sources: [
      "mss_g4/mss_g4_p2_val.jsp",
      "mss_g4/mss_g4_p2_val_stat.jsp",
      "mss_g4/mss_g4_p2_detail.jsp",
    ],
    ficha: `${TIE}/mss_g4--mss_g4_p2_val_stat.md`,
    sensitive: true,
    read: sqlRead(RESPONSABLE_SQL.ausencias.tables),
    view: "generic",
    sections: [
      sqlConsult(
        "ausencias",
        "Ausencias",
        "SSM_ABSENCES!SSM_ABSENCE_DETAIL",
        "list",
        [
          ["EMPLEADO", "Empleado"],
          ["ANIO", "Año"],
          ["TOTAL", "Total"],
        ],
        RESPONSABLE_SQL.ausencias,
        "Unidades de ausencia por persona en el año en curso y el anterior.",
      ),
    ],
  },
  {
    id: "responsable.tiempo.bolsas",
    profile: "responsable",
    domain: "tiempo-equipo",
    title: "Bolsas de horas y días",
    summary: "Saldos por tipo, unidad y puesto, y ajustes manuales.",
    icon: "budget",
    route: `${base}/bolsas`,
    sources: ["mss_g4/smco_ab_manual_adjustment.jsp", "mss_g4/smco_ab_vacation_filter.jsp"],
    ficha: `${TIE}/mss_g4--smco_ab_manual_adjustment.md`,
    keywords: ["bolsa", "saldo", "ajuste"],
    sensitive: true,
    read: sqlRead(RESPONSABLE_SQL.bolsas.tables),
    view: "generic",
    sections: [
      sqlConsult(
        "bolsas",
        "Bolsas del equipo",
        "SMCO_AB_ENT_SUMMARY!SMCO_H_HRP_ENT_SUMMARY",
        "list",
        [
          ["EMPLEADO", "Empleado"],
          ["SCO_N_ENT_TYPE", "Derecho"],
          ["SCO_NUM_ENTITLEMENT", "Generado"],
          ["SCO_NUM_USED", "Disfrutado"],
          ["SCO_TOT_REMAINING", "Pendiente"],
        ],
        RESPONSABLE_SQL.bolsas,
      ),
      note(
        "Saldos",
        "Una bolsa sin definir es distinta de saldo cero; los ajustes manuales pueden ser positivos o negativos.",
      ),
      form({
        id: "ajuste",
        title: "Ajuste manual",
        fields: [
          pendingSelect("SCO_ID_HR", "Empleado", "SMCO_AB_MANUAL_ADJUST!SCO_HR", {
            required: true,
          }),
          pendingSelect("SCO_ID_ENTITLEMENT", "Bolsa", "SMCO_AB_MANUAL_ADJUST!SCO_ENTITLEMENT", {
            required: true,
          }),
          {
            name: "SCO_VALUE",
            label: "Ajuste (positivo o negativo)",
            type: "number",
            required: true,
          },
          date("SCO_DT_ADJUST", "Fecha", { required: true }),
        ],
        write: methodWrite(
          "ajuste",
          "Registrar ajuste",
          "SMCO_AB_MANUAL_ADJUST (smco_ab_manual_adjustment.jsp)",
          undefined,
          ["P03", "P04"],
        ),
      }),
    ],
  },
  {
    id: "responsable.tiempo.planificacion",
    profile: "responsable",
    domain: "tiempo-equipo",
    title: "Planificación y alertas",
    summary: "Planificación GTA del equipo, hoja de tiempos, alertas e incidencias masivas.",
    icon: "planning",
    route: `${base}/planificacion`,
    sources: [
      "mss_g4/mss_g4_gta_planning.jsp",
      "mss_g4/mss_g4_gta_timesheet.jsp",
      "mss_g4/mss_g4_gta_timesheet_employee.jsp",
      "mss_g4/mss_g4_gta_view_alerts.jsp",
      "mss_g4/mss_g4_gta_masive_incidences.jsp",
      "mss_g4/mss_g4_gta_delete_masive_incidences.jsp",
    ],
    ficha: `${TIE}/mss_g4--mss_g4_gta_timesheet.md`,
    keywords: ["gta", "planificación", "alertas", "hoja de tiempos"],
    sensitive: true,
    read: sqlRead(RESPONSABLE_SQL.planificacion.tables),
    view: "generic",
    sections: [
      sqlConsult(
        "hoy",
        "Planificación de hoy",
        "SSE_GTA_PLAN!SSE_GTA_PLAN",
        "list",
        [
          ["EMPLEADO", "Empleado"],
          ["SCO_NM_DAY_TYPE", "Tipo de día"],
          ["SCO_WORK_THEO_HRS", "Horas teóricas"],
        ],
        RESPONSABLE_SQL.planificacion,
      ),
    ],
    writes: [
      methodWrite(
        "incidencias-masivas",
        "Asignar incidencias masivas",
        "SSE_GTA_PLAN (mss_g4_gta_masive_incidences_body.jsp)",
      ),
      methodWrite(
        "borrar-masivas",
        "Borrar incidencias masivas",
        "SSE_GTA_PLAN (mss_g4_gta_delete_masive_incidences_body.jsp)",
      ),
      methodWrite(
        "alertas",
        "Gestionar alertas",
        "SCO_GTA_VIEW_ALERTS (mss_g4_gta_view_alerts_actions_json.jsp)",
      ),
      methodWrite(
        "hoja",
        "Modificar hoja de tiempos",
        "SCO_GTA_EMPLOYEE_PRESENCE_REPR (mss_g4_gta_timesheet_json_actions.jsp)",
      ),
    ],
  },
];
