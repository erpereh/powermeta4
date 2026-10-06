import type { FeatureSection, PortalProfile } from "../types";
import {
  consult,
  date,
  form,
  genericWrite,
  methodWrite,
  note,
  pendingSelect,
  sqlConsult,
  staticSelect,
  text,
} from "./helpers";
import { RETRIBUCION_SQL } from "./sql/retribucion";

/** Apartados respaldados por los cuerpos JSP; los catálogos dinámicos no se inventan. */
export function originalPageSections(
  slug: string,
  profile: PortalProfile,
): readonly FeatureSection[] | undefined {
  if (profile === "empleado" && slug === "historial-beneficios")
    return [
      sqlConsult(
        "historial",
        "Historial de beneficios asignados",
        "SSE_BFT_H_EE_IN_BNFT!SSE_H_EE_IN_BNFT",
        "list",
        [
          ["SUS_N_PLAN", "Plan"],
          ["SUS_N_OPTION", "Opción"],
          ["SUS_DT_START", "Desde"],
          ["SUS_DT_END", "Hasta"],
          ["SUS_PRICE", "Precio"],
          ["SUS_ER_CONTR", "Aportación de la empresa"],
        ],
        {
          ...RETRIBUCION_SQL.beneficios,
          statement: RETRIBUCION_SQL.beneficios.statement.replace(
            " AND A.SUS_DT_END >= @today",
            "",
          ),
        },
      ),
    ];
  if (slug === "contrasena")
    return [
      form({
        id: "contrasena",
        title: "Cambio de contraseña",
        fields: [
          {
            name: "M4_CURRENT_PASSWORD",
            label: "Contraseña actual",
            type: "password",
            required: true,
            maxLength: 32,
          },
          {
            name: "M4_NEW_PASSWORD",
            label: "Contraseña nueva",
            type: "password",
            required: true,
            maxLength: 32,
          },
          {
            name: "M4_RETYPE_PASSWORD",
            label: "Confirmar contraseña nueva",
            type: "password",
            required: true,
            maxLength: 32,
          },
        ],
        rules: [
          {
            kind: "fieldsMatch",
            field: "M4_NEW_PASSWORD",
            confirm: "M4_RETYPE_PASSWORD",
            message: "La confirmación debe coincidir con la contraseña nueva.",
          },
          {
            kind: "fieldsDiffer",
            field: "M4_NEW_PASSWORD",
            other: "M4_CURRENT_PASSWORD",
            message: "La contraseña nueva debe ser distinta de la actual.",
          },
        ],
        write: methodWrite(
          "contrasena",
          "Cambiar contraseña",
          "M4Operations.changePassword",
          "tctools/change_password_operation.jsp",
          ["P04"],
        ),
      }),
    ];
  if (profile === "empleado" && slug === "alta-cuenta-otro-formato")
    return [
      form({
        id: "otra-cuenta-internacional",
        title: "Cuenta bancaria en otro formato",
        description:
          "Los formatos de sucursal y cuenta dependen del país. La validación bancaria del original necesita su catálogo; no se aplica el formato numérico español a cuentas extranjeras.",
        fields: [
          date("STD_DT_START", "Inicio", { required: true }),
          pendingSelect("SCO_ID_PERSON", "Beneficiario", "SSE_OTHER_PDATA!M4T_FAMILY_LIST", {
            required: true,
          }),
          pendingSelect("SCO_IBAN_CODE", "Código país", "SSE_OTHER_PDATA!M4T_COUNTRY_LIST", {
            required: true,
          }),
          text("SCO_ID_BANK_BRANCH", "Sucursal / código bancario", { required: true }),
          text("SCO_ACCOUNT_NUMBER", "Número de cuenta", { required: true, maxLength: 20 }),
          text("SCO_IBAN_KEY", "Clave IBAN", {
            maxLength: 2,
            pattern: { regex: "^[0-9]{2}$", message: "La clave IBAN debe tener dos dígitos." },
          }),
          staticSelect(
            "SSP_PAY_FORM_TP",
            "Tipo de importe",
            [
              { value: "1", label: "Fijo" },
              { value: "2", label: "Porcentaje" },
            ],
            { required: true },
          ),
          { name: "SCO_VALUE", label: "Importe", type: "number", required: true, min: 0 },
          {
            name: "SCO_ID_CURRENCY",
            label: "Moneda",
            type: "select",
            options: { kind: "catalog", catalog: "currency" },
            showWhen: { field: "SSP_PAY_FORM_TP", equals: ["1"] },
          },
        ],
        write: genericWrite(
          "otra-cuenta-internacional",
          "Solicitar alta",
          "SSE_OTHER_PDATA",
          "INSERTAR",
          "SSE_OTHER_PDATA",
        ),
      }),
    ];
  if (slug === "iban")
    return [
      note(
        "Formato y validación IBAN",
        "El original selecciona el código país, la clave IBAN, la sucursal y la cuenta. La consulta de formatos y comprobación de dígitos necesita CSP_CONSULTA_IBAN. La modificación está en su propia pestaña.",
      ),
    ];
  if (slug === "simulacion-beneficios" || slug === "solicitud-beneficios") {
    const simulation = slug === "simulacion-beneficios";
    return [
      consult(
        "planes",
        "Planes y opciones de beneficios",
        "SSE_BFT_EE_BNFT_ELEC!M4T_EE_BNFT_ELEC",
        "list",
        [
          ["SUS_N_PLAN", "Plan"],
          ["SUS_N_OPTION", "Opción"],
          ["SUS_N_COV_CAT", "Cobertura"],
          ["SUS_PRICE", "Precio"],
          ["SUS_ER_CONTR", "Aportación de la empresa"],
        ],
      ),
      form({
        id: slug,
        title: simulation ? "Simular beneficios" : "Solicitar beneficios",
        description:
          "El original permite seleccionar opciones del periodo del plan, cobertura y familiares; los precios y la elegibilidad los resuelve Meta4.",
        mode: simulation ? "query" : "request",
        fields: [
          pendingSelect("SSE_P_ID_PLAN", "Plan", "SSE_BFT_EE_BNFT_ELEC!M4T_EE_BNFT_ELEC", {
            required: true,
          }),
          pendingSelect("SSE_P_ID_OPTION", "Opción", "SSE_BFT_EE_BNFT_ELEC!M4T_EE_BNFT_ELEC", {
            required: true,
          }),
          pendingSelect("SSE_P_ID_COV_CAT", "Cobertura", "SSE_BFT_EE_BNFT_ELEC!M4T_EE_BNFT_ELEC", {
            required: true,
          }),
        ],
        write: methodWrite(
          slug,
          simulation ? "Simular" : "Solicitar",
          "SSE_BFT_EE_BNFT_ELEC",
          `sse_g2_p7.jsp · vista=${simulation ? "0" : "1"}`,
          simulation ? ["P02", "P05"] : ["P02", "P04"],
        ),
      }),
      note(
        "Familiares y planes",
        "Las selecciones de familiares y los anexos dependen de la opción del plan y de SSE_DEP_BENE_COV. Se habilitarán con ese catálogo; no hay opciones ni cálculos simulados.",
      ),
    ];
  }
  if (profile === "empleado" && slug === "conocimientos")
    return [
      consult("niveles", "Niveles de conocimientos", "SSE_H_HR_KNC_LVL!SSE_H_HR_KNC_LVL", "list", [
        ["SCO_NM_EXTD_KN", "Conocimiento"],
        ["SCO_NM_LEVEL", "Nivel"],
      ]),
      consult(
        "experiencias",
        "Conocimientos por experiencia",
        "SSE_H_HR_KNC_LVL!SSE_H_HR_KNC_EXP",
        "list",
        [
          ["SSE_TP_ORIGEN", "Origen"],
          ["SCO_NM_EXTD_KN", "Conocimiento"],
          ["SCO_NM_LEVEL", "Nivel"],
          ["SCO_RWEIGHT", "Peso"],
        ],
      ),
    ];
  if (profile === "empleado" && slug === "preferencias")
    return [
      consult(
        "preferencias",
        "Preferencias profesionales",
        "SSE_CR_PREFERENC!SSE_CR_PREFERENC",
        "list",
        [
          ["DT_START", "Inicio"],
          ["SCO_PREFERENCES", "Preferencia"],
          ["SCO_PREF_PRIORITY", "Prioridad"],
        ],
      ),
      form({
        id: "preferencia",
        title: "Añadir preferencia profesional",
        fields: [
          date("DT_START", "Inicio", { required: true }),
          { name: "SCO_PREF_PRIORITY", label: "Prioridad", type: "number" },
          staticSelect("SCO_CK_NAT_INT", "Ámbito", [
            { value: "1", label: "Nacional" },
            { value: "2", label: "Internacional" },
            { value: "0", label: "No definido" },
          ]),
          pendingSelect("STD_ID_COUNTRY", "País", "SSE_CR_PREFERENC!M4T_COUNTRY"),
          pendingSelect("STD_ID_GEO_DIV", "Provincia", "SSE_CR_PREFERENC!M4T_GEO_DIV"),
          pendingSelect(
            "STD_ID_SUB_GEO_DIV",
            "División geográfica",
            "SSE_CR_PREFERENC!M4T_SUB_GEO_DIV",
          ),
          pendingSelect(
            "STD_ID_WORK_UNIT",
            "Unidad organizativa",
            "SSE_CR_PREFERENC!M4T_WORK_UNIT",
          ),
          pendingSelect("STD_ID_JOB_CODE", "Puesto", "SSE_CR_PREFERENC!M4T_JOB"),
          text("SCO_PREFERENCES", "Otras preferencias", { maxLength: 254 }),
          text("SCO_COMMENT", "Comentarios", { maxLength: 254 }),
        ],
        write: genericWrite(
          "preferencia",
          "Solicitar",
          "SSE_CR_PREFERENC",
          "INSERTAR",
          "SSE_CR_PREFERENC",
        ),
      }),
    ];
  if (slug === "objetivos")
    return [
      consult(
        "objetivos",
        "Objetivos del proceso",
        profile === "empleado" ? "SSE_OBJECTIVES!SSE_ROL_LV_OBJ" : "SSM_EV_ROL_LV_OBJ",
        "list",
        [
          ["SCO_NM_OBJECTIVE", "Objetivo"],
          ["SCO_NM_MAGNITUDE", "Magnitud"],
          ["SCO_WEIGHT", "Peso"],
          ["SCO_SCHED_VALUE", "Valor previsto"],
          ["SCO_DT_START", "Desde"],
          ["SCO_DT_END", "Hasta"],
          ["SCO_COMMENT", "Comentarios"],
        ],
      ),
    ];
  if (slug === "valoracion-objetivos")
    return [
      consult(
        "valoraciones",
        "Valoración de objetivos",
        "SSM_EV_ROL_LV_OBJ!SSE_EV_ROL_LV_OBJ",
        "list",
        [
          ["SCO_NM_OBJECTIVE", "Objetivo"],
          ["SCO_WEIGHT", "Peso"],
          ["SCO_ACCOMP_VALUE", "Valor conseguido"],
          ["SCO_NM_LEVEL", "Nivel"],
        ],
      ),
    ];
  if (
    [
      "valoracion-evaluacion",
      "valoracion-seguimiento",
      "procesos-evaluador",
      "seguimiento-evaluador",
      "procesos-evaluacion",
      "seguimiento-evaluacion",
    ].includes(slug)
  )
    return [
      note(
        "Proceso y cuestionario",
        "La selección del proceso determina la persona evaluada, el rol, la fase, las preguntas, escalas, pesos y campos editables. Estos controles se generan desde Meta4; sin ese contrato no se inventa un cuestionario ni se reutiliza el historial de evaluaciones recibidas.",
      ),
    ];
  if (slug === "hoja-presencia")
    return [
      consult(
        "periodo",
        "Hoja mensual de presencia",
        "SCO_GTA_EMPLOYEE_PRESENCE_REPR!SCO_GTA_SSE_VISUAL_INTERFACE",
        "record",
        [
          [null, "Periodo"],
          [null, "Presencias"],
          [null, "Alertas bloqueantes"],
          [null, "Detalle diario"],
        ],
      ),
      note(
        "Periodo y alertas",
        "El cuerpo mensual, los periodos disponibles y los formularios de detalle los devuelve SCO_GTA_EMPLOYEE_PRESENCE_REPR. Falta conectar esa representación y sus alertas.",
      ),
    ];
  return undefined;
}
