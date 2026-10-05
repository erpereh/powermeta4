import type { PortalFeature } from "../types";
import { consult, methodWrite, note, pendingRead, validationForm } from "./helpers";

const RET = "responsable/retribucion";
const base = "/portal/responsable/retribucion";

export const RESPONSABLE_RETRIBUCION: readonly PortalFeature[] = [
  {
    id: "responsable.retribucion.salarios",
    profile: "responsable",
    domain: "retribucion-equipo",
    title: "Datos salariales",
    summary: "Retribución fija y variable, jornada, beneficios y total de tus empleados.",
    icon: "salary",
    route: `${base}/salarios`,
    sources: ["mss_g2/mss_g2_p1.jsp", "mss_g2/mss_g2_p10.jsp"],
    ficha: `${RET}/mss_g2--mss_g2_p1.md`,
    keywords: ["salarios", "retribución", "equipo"],
    sensitive: true,
    read: pendingRead(["SSM_SALARY!SSM_PRINCIPAL.CARGA", "SSM_H_SAL_DATA!SSM_PRINCIPAL.CARGA"]),
    view: "generic",
    sections: [
      consult("salario", "Datos salariales", "SSM_SALARY", "list", [
        [null, "Empleado"],
        [null, "Salario bruto"],
        [null, "Fijo"],
        [null, "Variable"],
        [null, "Beneficios"],
      ]),
      note(
        "Presupuesto",
        "El manual describe un análisis de presupuesto por unidad (fecha inicial hoy, incluir hijos) que compara presupuesto, fijo, variable, beneficios y coste; no se ha identificado la página que lo ejecuta en la copia local (P01). No se calcula ningún porcentaje en powermeta4.",
      ),
    ],
  },
  {
    id: "responsable.retribucion.validaciones",
    profile: "responsable",
    domain: "retribucion-equipo",
    title: "Aprobaciones económicas",
    summary:
      "Cuentas bancarias, préstamos, beneficios, coberturas y cambios de beneficios de tu equipo.",
    icon: "approval",
    route: `${base}/validaciones`,
    sources: [
      "mss_g2/mss_g2_p1_val.jsp",
      "mss_g2/mss_g2_p2_val.jsp",
      "mss_g2/mss_g2_p5_val.jsp",
      "mss_g2/mss_g2_p7_val.jsp",
      "mss_g2/mss_g2_p7_det.jsp",
      "mss_g2/mss_g2_p7_help.jsp",
      "mss_g2/mss_g2_p8_val.jsp",
      "mss_g2/mss_g2_p9_val.jsp",
    ],
    ficha: `${RET}/mss_g2--mss_g2_p1_val.md`,
    keywords: ["validar", "préstamos", "cuentas", "beneficios"],
    sensitive: true,
    read: pendingRead([
      "SSE_PAYMENT_DATA (peticiones)",
      "SSE_OTHER_PDATA (peticiones)",
      "SSE_LOANS (peticiones)",
      "SSE_BFT_EE_BNFT_ELEC (peticiones)",
      "SSE_BFT_DEP_BENE_COV (peticiones)",
      "SSE_BFT_H_EE_IN_BNFT_MOD (peticiones)",
    ]),
    view: "generic",
    sections: [
      consult("cuentas", "Cuenta bancaria principal", "SSE_PAYMENT_DATA", "list", [
        [null, "Inicio"],
        [null, "Código bancario"],
        [null, "Moneda"],
        [null, "Forma de pago"],
      ]),
      validationForm(
        "validar-cuenta",
        "Validar cuenta bancaria principal",
        "SSE_PAYMENT_DATA",
        "SSE_PAYMENT_DATA",
      ),
      validationForm(
        "validar-otras-cuentas",
        "Validar otras cuentas",
        "SSE_OTHER_PDATA",
        "SSE_OTHER_PDATA",
      ),
      consult("prestamos", "Préstamos", "SSE_LOANS", "list", [
        [null, "Tipo de préstamo"],
        [null, "Interés"],
        [null, "Capital"],
        [null, "Importe cuota"],
      ]),
      validationForm("validar-prestamos", "Validar préstamos", "SSE_LOANS", "SSE_LOANS"),
      validationForm(
        "validar-beneficios",
        "Validar beneficios",
        "SSE_BFT_EE_BNFT_ELEC",
        "SSE_BFT_EE_BNFT_ELEC",
        {
          description:
            "El manual exige motivo al desestimar un beneficio. Aprobar no evita bloqueos de nómina ni límites del plan.",
        },
      ),
      validationForm(
        "validar-coberturas",
        "Validar coberturas de dependientes",
        "SSE_BFT_DEP_BENE_COV",
        "SSE_DEP_BENE_COV",
      ),
      validationForm(
        "validar-cambios-beneficios",
        "Validar cambios de beneficios",
        "SSE_BFT_H_EE_IN_BNFT_MOD",
        "SSE_H_EE_IN_BNFT_MOD",
      ),
    ],
  },
  {
    id: "responsable.retribucion.revision",
    profile: "responsable",
    domain: "retribucion-equipo",
    title: "Revisión salarial",
    summary:
      "Unidades y empleados a revisar, planes, propuesta, comentarios, aprobación, exportación e importación.",
    icon: "review",
    route: `${base}/revision`,
    sources: [
      "mss_g2/mss_g2_p0.jsp",
      "mss_g2/mss_g2_p0_wu.jsp",
      "mss_g2/mss_g2_p2.jsp",
      "mss_g2/mss_g2_p2_me.jsp",
      "mss_g2/mss_g2_p3.jsp",
      "mss_g2/mss_g2_p3_sal.jsp",
      "mss_g2/mss_g2_p3_grade.jsp",
      "mss_g2/mss_g2_p3_comment.jsp",
      "mss_g2/mss_g2_p3_me.jsp",
      "mss_g2/mss_g2_p3_mi.jsp",
      "mss_g2/mss_g2_p4.jsp",
      "mss_g2/mss_g2_p4_mi.jsp",
      "mss_g2/mss_g2_p5.jsp",
      "mss_g2/mss_g2_p6.jsp",
      "mss_g2/mss_g2_p6_comment.jsp",
    ],
    ficha: `${RET}/mss_g2--mss_g2_p0.md`,
    keywords: ["revisión salarial", "incremento", "planes salariales", "aprobación"],
    sensitive: true,
    read: pendingRead([
      "SSM_SALARY_REVIEW_PROCESS.CR_WORK_UNITS_FOR_MANAGER",
      "SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS",
      "SSM_SALARY_REVIEW_PROCESS.CR_LOAD_SALARY_REVIEW_PETITION",
    ]),
    view: "generic",
    sections: [
      consult("pasos", "Recorrido de la revisión", "SSM_SALARY_REVIEW_PROCESS", "list", [
        [null, "Unidades y responsable (CR_WORK_UNITS_FOR_MANAGER)"],
        [null, "Empleados a revisar (CR_SET_EMPLOYEES_FOR_REVIEW)"],
        [null, "Planes y datos (CR_SET_SAL_PLAN_FOR_REVIEW, CR_SET_EMPLOYEE_PERFORMANCE)"],
        [null, "Propuesta, comentarios y avisos"],
        [null, "Aprobación (CR_SET_EMPLOYEES_FOR_APPROVAL)"],
        [null, "Exportación e importación (CR_MSR_EXPORT, CR_MSR_IMPORT)"],
      ]),
      note(
        "Cálculo",
        "El incremento, el presupuesto, los máximos y el reparto dependen de la metodología configurada en Meta4: no hay un simulador genérico en powermeta4.",
      ),
    ],
    writes: [
      methodWrite(
        "seleccion",
        "Seleccionar empleados para revisión",
        "SSM_SALARY_REVIEW_PROCESS.CR_SET_EMPLOYEES_FOR_REVIEW",
      ),
      methodWrite(
        "plan",
        "Asignar plan salarial",
        "SSM_SALARY_REVIEW_PROCESS.CR_SET_SAL_PLAN_FOR_REVIEW",
      ),
      methodWrite("propuesta", "Guardar propuesta", "SSM_SALARY_REVIEW_PROCESS (mss_g2_p4_p.jsp)"),
      methodWrite(
        "aprobacion",
        "Enviar a aprobación",
        "SSM_SALARY_REVIEW_PROCESS.CR_SET_EMPLOYEES_FOR_APPROVAL",
      ),
      methodWrite(
        "exportar",
        "Exportar revisión masiva",
        "SSM_SALARY_REVIEW_PROCESS.CR_MSR_EXPORT",
        undefined,
        ["P04", "P08"],
      ),
      methodWrite(
        "importar",
        "Importar revisión masiva",
        "SSM_SALARY_REVIEW_PROCESS.CR_MSR_IMPORT",
      ),
      methodWrite(
        "delegar",
        "Delegar la revisión de una unidad",
        "SSM_SALARY_REVIEW_PROCESS.CR_SET_RESP_SALARY_DELEGATE",
      ),
    ],
  },
];
