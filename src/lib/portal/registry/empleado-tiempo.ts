import type { PortalFeature } from "../types";
import {
  check,
  consult,
  date,
  form,
  genericWrite,
  methodWrite,
  note,
  pendingRead,
  pendingSelect,
  text,
} from "./helpers";

const TIE = "empleado/tiempo";
const base = "/portal/empleado/tiempo";

const HIRE_RULE = {
  kind: "notBeforeHireDate",
  field: "SCO_DT_START",
  message:
    "No puede solicitar incidencias con una fecha de inicio de la misma anterior a su fecha de alta.",
} as const;

export const EMPLEADO_TIEMPO: readonly PortalFeature[] = [
  {
    id: "empleado.tiempo.vacaciones",
    profile: "empleado",
    domain: "tiempo",
    title: "Vacaciones",
    summary: "Solicita tus vacaciones, consulta tu bolsa y el estado de tus peticiones.",
    icon: "vacation",
    route: `${base}/vacaciones`,
    sources: ["sse_g4/sse_g4_p2.jsp", "sse_g4/sse_g4_p2_2.jsp", "sse_g4/act_va.jsp"],
    ficha: `${TIE}/sse_g4--sse_g4_p2.md`,
    keywords: ["vacaciones", "días", "bolsa", "solicitud", "saldo"],
    sensitive: true,
    read: pendingRead([
      "SSE_HOLYDAYS!SSE_PRINCIPAL.CARGA (TIPO_CARGA=ALL, NIVEL=0)",
      "SSE_HOLYDAYS!SSE_REAL_TIME_PRD",
      "SSE_HOLYDAYS!M4T_REAL_TIME_PRD",
      "SSE_HOLYDAYS!SSE_INCIDENCE",
    ]),
    view: "generic",
    sections: [
      consult("bolsa", "Bolsa de vacaciones", "SSE_HOLYDAYS!SSE_INCIDENCE", "record", [
        ["SCO_NUM_ENTITLEMENT", "Días del año"],
        ["SCO_NUM_ENTITLEMENT_N1", "Arrastre del año anterior"],
        ["SCO_NUM_REMAINING", "Disponibles"],
        ["SCO_NUM_PENDING", "Pendientes"],
        ["SCO_NUM_REMAINING_THEORETICAL", "Disponibles teóricos"],
        ["SCO_NM_UNIT", "Unidad"],
      ]),
      consult("peticiones", "Peticiones", "SSE_HOLYDAYS!SSE_REAL_TIME_PRD", "list", [
        ["SCO_NM_INCIDENCE", "Tipo"],
        ["SSE_DT_START", "Inicio"],
        ["SSE_DT_END", "Fin"],
        ["SCO_UNITS", "Días"],
        ["N_ACCION", "Estado"],
      ]),
      consult("aceptadas", "Registros aceptados", "SSE_HOLYDAYS!M4T_REAL_TIME_PRD", "list", [
        ["SCO_NM_INCIDENCE", "Tipo"],
        ["SCO_DT_START", "Inicio"],
        ["SCO_DT_END", "Fin"],
        ["SCO_UNITS", "Días"],
      ]),
      form({
        id: "solicitud-vacaciones",
        title: "Solicitud de nuevo periodo",
        description: "Fechas inclusive. El arrastre solo se muestra cuando el tipo lo permite.",
        fields: [
          pendingSelect("SCO_ID_INCIDENCE", "Tipo de vacaciones", "SSE_HOLYDAYS!SSE_INCIDENCE", {
            required: true,
          }),
          date("SCO_DT_START", "Fecha de inicio (inclusive)", { required: true }),
          date("SCO_DT_END", "Fecha de fin (inclusive)", { required: true }),
        ],
        rules: [
          {
            kind: "dateOrder",
            start: "SCO_DT_START",
            end: "SCO_DT_END",
            message: "La fecha de fin no puede ser anterior a la de inicio.",
          },
          HIRE_RULE,
        ],
        write: genericWrite(
          "vacaciones",
          "Enviar solicitud",
          "SSE_HOLYDAYS",
          "INSERTAR",
          "SSE_REAL_TIME_PRD",
        ),
        notice:
          "El original solo comprueba formato, orden de fechas, fecha de alta y tipo. Saldo, solapes y permisos los resuelve Meta4 al enviar.",
      }),
      note(
        "Visualización gráfica",
        "La vista anual del original (sse_g4_p2_2.jsp) distingue días aceptados, pendientes de aceptar, pendientes de cancelar y festivos. Se mostrará cuando las peticiones y el calendario tengan lectura verificada.",
      ),
    ],
    writes: [
      genericWrite(
        "vacaciones-borrar",
        "Eliminar la petición",
        "SSE_HOLYDAYS",
        "BORRAR",
        "SSE_REAL_TIME_PRD",
      ),
    ],
  },
  {
    id: "empleado.tiempo.incidencias",
    profile: "empleado",
    domain: "tiempo",
    title: "Solicitud de incidencias",
    summary: "Solicita incidencias de presencia o ausencia por días o por horas (GTA).",
    icon: "absence",
    route: `${base}/incidencias`,
    sources: [
      "sse_g4/sse_g4_gta_incidences_request.jsp",
      "sse_g4/sse_g4_gta_incidences_request_body.jsp",
    ],
    ficha: `${TIE}/sse_g4--sse_g4_gta_incidences_request_body.md`,
    keywords: ["incidencia", "permiso", "ausencia", "horas"],
    sensitive: true,
    read: pendingRead(["SSE_HOLYDAYS!SSE_REAL_TIME_PRD", "SSE_HOLYDAYS!SSE_INCIDENCE"]),
    view: "generic",
    sections: [
      form({
        id: "incidencia",
        title: "Nueva incidencia",
        description:
          "El tipo determina la duración: diaria (intervalo de días), horaria (mismo día con horas o total) o mixta.",
        fields: [
          pendingSelect("SCO_ID_INCIDENCE", "Tipo de incidencia", "SSE_HOLYDAYS!SSE_INCIDENCE", {
            required: true,
          }),
          date("SCO_DT_START", "Fecha de inicio", { required: true }),
          check("MANAGE_IN_PERIOD", "Gestionar por días"),
          check("MANAGE_IN_HOURS", "Gestionar por horas"),
          text("START_TIME", "Hora de inicio (hh:mm)", {
            showWhen: { field: "MANAGE_IN_HOURS", equals: ["true"] },
            pattern: {
              regex: "^([01][0-9]|2[0-3]):[0-5][0-9]$",
              message: "La hora debe tener el formato hh:mm.",
            },
          }),
          text("END_TIME", "Hora de fin (hh:mm)", {
            showWhen: { field: "MANAGE_IN_HOURS", equals: ["true"] },
            pattern: {
              regex: "^([01][0-9]|2[0-3]):[0-5][0-9]$",
              message: "La hora debe tener el formato hh:mm.",
            },
          }),
          {
            name: "NUM_HOURS",
            label: "Horas",
            type: "number",
            min: 0,
            max: 99,
            showWhen: { field: "MANAGE_IN_HOURS", equals: ["true"] },
          },
          {
            name: "NUM_MINUTES",
            label: "Minutos",
            type: "number",
            min: 0,
            max: 59,
            showWhen: { field: "MANAGE_IN_HOURS", equals: ["true"] },
          },
          date("SCO_DT_END", "Fecha de fin", {
            required: true,
            showWhen: { field: "MANAGE_IN_PERIOD", equals: ["true"] },
          }),
        ],
        rules: [
          {
            kind: "dateOrder",
            start: "SCO_DT_START",
            end: "SCO_DT_END",
            message: "La fecha de fin no puede ser anterior a la de inicio.",
          },
          HIRE_RULE,
        ],
        write: methodWrite(
          "incidencia",
          "Enviar solicitud",
          "SSE_HOLYDAYS!SSE_PRINCIPAL.GESTION (generico_actualizar_incidences_encripted.jsp)",
          "TAG=SSE_HOLYDAYS · ACC=INSERTAR · NOD=SSE_REAL_TIME_PRD",
        ),
      }),
    ],
    writes: [
      methodWrite(
        "incidencia-anular",
        "Anular petición",
        "SSE_HOLYDAYS!SSE_PRINCIPAL.GESTION (generico_actualizar_incidences_encripted.jsp)",
        "TAG=SSE_HOLYDAYS · ACC=ANULAR · NOD=SSE_REAL_TIME_PRD",
      ),
    ],
  },
  {
    id: "empleado.tiempo.ausencias",
    profile: "empleado",
    domain: "tiempo",
    title: "Ausencias",
    summary: "Tus ausencias laborales a lo largo del año.",
    icon: "absence",
    route: `${base}/ausencias`,
    sources: ["sse_g4/sse_g4_p1.jsp"],
    ficha: `${TIE}/sse_g4--sse_g4_p1.md`,
    keywords: ["absentismo", "bajas", "ausencias"],
    sensitive: true,
    read: pendingRead(["SSE_REAL_TIME!SSE_REAL_TIME.CARGA"]),
    view: "generic",
    sections: [
      consult("ausencias", "Ausencias laborales", "SSE_REAL_TIME", "list", [
        [null, "Tipo absentismo"],
        [null, "Inicio"],
        [null, "Duración"],
      ]),
    ],
  },
  {
    id: "empleado.tiempo.festivos",
    profile: "empleado",
    domain: "tiempo",
    title: "Calendario de festivos",
    summary: "Los días festivos de tu centro de trabajo.",
    icon: "calendar",
    route: `${base}/festivos`,
    sources: ["sse_g4/sse_g4_p3.jsp", "sse_g3/sse_g4_p3.jsp"],
    ficha: `${TIE}/sse_g4--sse_g4_p3.md`,
    keywords: ["festivos", "calendario laboral"],
    sensitive: false,
    read: pendingRead(
      ["SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA"],
      "El calendario laboral (festivos legales y de la organización por centro) es un dato del ERP; no se deriva de calendarios públicos. Falta la lectura verificada de SSE_CARGA_FESTIVOS.",
    ),
    view: "generic",
  },
  {
    id: "empleado.tiempo.planificacion",
    profile: "empleado",
    domain: "tiempo",
    title: "Planificación",
    summary: "Tu planificación GTA por días y franjas, con contadores y alertas.",
    icon: "planning",
    route: `${base}/planificacion`,
    sources: [
      "sse_g4/sse_g4_gta_planning.jsp",
      "sse_g4/sse_g4_gta_planning_body.jsp",
      "sse_g4/sse_g4_gta_planning_main_wrapper.jsp",
      "sse_g4/sse_g4_gta_planning_filter.jsp",
      "sse_g4/sse_g4_gta_planning_timeslots.jsp",
      "sse_g4/sse_g4_gta_planning_refresh_counters.jsp",
      "sse_g4/sse_g4_gta_planning_refresh_alerts.jsp",
      "sse_g4/sse_g4_gta_planning_modify_day.jsp",
      "sse_g4/sse_g4_gta_planning_modify_all_empl_days.jsp",
    ],
    ficha: `${TIE}/sse_g4--sse_g4_gta_planning_body.md`,
    keywords: ["gta", "turnos", "jornada", "franjas"],
    sensitive: true,
    read: pendingRead([
      "SSE_GTA_PLAN!SSE_GTA_PLAN.SSE_MAIN_PRE_LOAD",
      "SSE_GTA_PLAN!SSE_GTA_PLAN.SSE_MAIN_LOAD",
    ]),
    view: "generic",
    sections: [
      form({
        id: "filtro-planificacion",
        title: "Periodo",
        fields: [
          date("START_DATE", "Fecha de inicio", { required: true }),
          date("END_DATE", "Fecha de fin", { required: true }),
        ],
        rules: [
          {
            kind: "dateOrder",
            start: "START_DATE",
            end: "END_DATE",
            message: "La fecha de fin no puede ser anterior a la de inicio.",
          },
        ],
        write: methodWrite(
          "planificacion-cargar",
          "Consultar",
          "SSE_GTA_PLAN!SSE_GTA_PLAN.SSE_MAIN_LOAD",
          undefined,
          ["P02", "P05"],
        ),
        mode: "query",
      }),
    ],
    writes: [
      methodWrite(
        "modificar-dia",
        "Modificar día",
        "SSE_GTA_PLAN (sse_g4_gta_planning_modify_day.jsp)",
      ),
      methodWrite(
        "modificar-dias",
        "Modificar todos los días",
        "SSE_GTA_PLAN (sse_g4_gta_planning_modify_all_empl_days.jsp)",
      ),
    ],
  },
  {
    id: "empleado.tiempo.actividad",
    profile: "empleado",
    domain: "tiempo",
    title: "Actividad",
    summary: "Imputación de actividad por duración, porcentaje, cantidad y códigos analíticos.",
    icon: "clock",
    route: `${base}/actividad`,
    sources: ["sse_g4/sse_g4_gta_activity.jsp"],
    ficha: `${TIE}/sse_g4--sse_g4_gta_activity.md`,
    sensitive: true,
    read: pendingRead([
      "SSE_H_HR_VENT_ACTIV_INDIV!SSE_H_HR_VENT_ACTIV_INDIV_ROOT.SSM_H_HR_VENT_ACTIV_MAIN_LOAD",
    ]),
    view: "generic",
    sections: [
      form({
        id: "actividad",
        title: "Nueva actividad",
        fields: [
          text("SCO_N_ACTIVITY", "Actividad", { maxLength: 50, required: true }),
          text("SCO_DURATION", "Duración", { maxLength: 5 }),
          text("SCO_PERCENTAGE", "Porcentaje", { maxLength: 5 }),
          text("SCO_QUANTITY", "Cantidad", { maxLength: 9 }),
          pendingSelect(
            "SCO_ID_ANALYTICAL_CODE1",
            "Código analítico",
            "SSE_H_HR_VENT_ACTIV_INDIV!SCO_ANALYTICAL_CODE",
          ),
          text("SCO_COMMENT", "Comentario", { maxLength: 254, span: 2 }),
        ],
        write: methodWrite(
          "actividad",
          "Guardar",
          "SSE_H_HR_VENT_ACTIV_INDIV (sse_g4_gta_activity.jsp)",
        ),
      }),
    ],
  },
  {
    id: "empleado.tiempo.reloj",
    profile: "empleado",
    domain: "tiempo",
    title: "Reloj virtual",
    summary: "Registro de entradas y salidas.",
    icon: "clock",
    route: `${base}/reloj`,
    sources: [
      "sse_g4/sse_g4_gta_virtual_clock.jsp",
      "sse_g4/sse_g4_gta_virtual_clock_redirect.jsp",
    ],
    ficha: `${TIE}/sse_g4--sse_g4_gta_virtual_clock.md`,
    keywords: ["fichaje", "entrada", "salida", "reloj"],
    sensitive: true,
    read: pendingRead(["SSE_GTA_VIRTUAL_CLOCK_IN_OUT"]),
    view: "generic",
    sections: [
      note(
        "Fichaje",
        "El servidor publica SCO_CLOCK_INOUT_API (tarjeta, hora, sentido, actividad), pero fichar es una escritura ERP no autorizada en powermeta4: no se registra ningún fichaje local ni simulado.",
      ),
    ],
    writes: [
      methodWrite(
        "fichar",
        "Registrar entrada o salida",
        "SSE_GTA_VIRTUAL_CLOCK_IN_OUT · servicio SCO_CLOCK_INOUT_API",
        "ARG_CARD_NUMBER, ARG_TIME, ARG_DIRECTION, ARG_ACTIVITY",
      ),
    ],
  },
];
