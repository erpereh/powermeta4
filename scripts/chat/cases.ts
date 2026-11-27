/**
 * Casos del banco de pruebas del chat. Cada caso es una rama completa: los
 * turnos se envían en orden y solo se evalúa el último. Las expectativas
 * describen el enrutado (documental, operativo o conversación) y nunca
 * importes concretos de personas.
 */
export type EvaluationCase = {
  id: string;
  inputs: string[];
  expect: {
    kind?: "manual" | "accion" | "general";
    action?: string;
    notAbstain?: boolean;
    contains?: string[];
  };
};

const EMPLOYEE = process.env.CHAT_EVALUATE_EMPLOYEE ?? "1683";

export const CASES: EvaluationCase[] = [
  // --- Conversación general -------------------------------------------------
  {
    id: "general.saludo",
    inputs: ["Hola, ¿quién eres?"],
    expect: { kind: "general", notAbstain: true, contains: ["PowerMeta4"] },
  },
  {
    id: "general.redaccion",
    inputs: ["Redacta un correo breve avisando del cierre de nómina de este mes."],
    expect: { kind: "general", notAbstain: true },
  },

  // --- Documental (manuales) ------------------------------------------------
  {
    id: "manual.ln4",
    inputs: ["¿Cómo se escribe una condición IF ELSE en LN4?"],
    expect: { kind: "manual", notAbstain: true },
  },
  {
    id: "manual.concepto",
    inputs: ["¿Qué es un concepto de nómina en PeopleNet?"],
    expect: { kind: "manual", notAbstain: true },
  },
  {
    id: "manual.plantilla",
    inputs: ["¿Cómo se configura una plantilla de consulta de nómina?"],
    expect: { kind: "manual", notAbstain: true },
  },
  {
    id: "manual.seguimiento",
    inputs: [
      "¿Cómo se configura una plantilla de consulta de nómina?",
      "¿Y qué tipos de cálculo se pueden seleccionar?",
    ],
    expect: { kind: "manual", notAbstain: true },
  },
  {
    id: "manual.procedimiento",
    inputs: ["¿Cómo consulto una nómina en PeopleNet, paso a paso?"],
    expect: { kind: "manual", notAbstain: true },
  },

  // --- Operativo (acciones de Inicio) ---------------------------------------
  {
    id: "accion.usuarios",
    inputs: ["Lista los usuarios de la sociedad activa."],
    expect: { kind: "accion", action: "users.consult" },
  },
  {
    id: "accion.nomina",
    inputs: [`Consulta la nómina de la matrícula ${EMPLOYEE} de marzo de 2025.`],
    expect: { kind: "accion", action: "payroll.consult" },
  },
  {
    id: "accion.quinquenal",
    inputs: [`Consulta el quinquenal de la matrícula ${EMPLOYEE}.`],
    expect: { kind: "accion", action: "reports.quinquenal" },
  },
  {
    id: "accion.proyecciones",
    inputs: [`Consulta las proyecciones de la matrícula ${EMPLOYEE} de 2025.`],
    expect: { kind: "accion", action: "reports.projections" },
  },
  {
    id: "accion.certificado",
    inputs: [`Consulta el certificado de retenciones de la matrícula ${EMPLOYEE} de 2024.`],
    expect: { kind: "accion", action: "reports.certificate" },
  },
  {
    id: "accion.resultados",
    inputs: ["Lista las ejecuciones guardadas de resultados de nómina."],
    expect: { kind: "accion", action: "reports.payroll-results" },
  },
  {
    id: "accion.primavera",
    inputs: ["Consulta el cuadre de Primavera de enero a marzo de 2026."],
    expect: { kind: "accion", action: "reports.primavera" },
  },
  {
    id: "accion.coloquial",
    inputs: [`¿Cuánto cobró la matrícula ${EMPLOYEE} en marzo de 2025?`],
    expect: { kind: "accion", action: "payroll.consult" },
  },

  // --- Seguimientos ---------------------------------------------------------
  {
    id: "seguimiento.periodo",
    inputs: [`Consulta la nómina de la matrícula ${EMPLOYEE} de marzo de 2025.`, "¿Y en abril?"],
    expect: { kind: "accion", action: "payroll.consult" },
  },
  {
    id: "seguimiento.persona",
    inputs: ["Consulta una nómina de marzo de 2025.", EMPLOYEE],
    expect: { kind: "accion", action: "payroll.consult" },
  },

  // --- Cruces ---------------------------------------------------------------
  {
    id: "cruce.periodos",
    inputs: [
      `Compara el líquido de la matrícula ${EMPLOYEE} entre marzo y abril de 2025 y dime la diferencia.`,
    ],
    expect: { kind: "accion", action: "analysis" },
  },
  {
    id: "cruce.acciones",
    inputs: [
      `Consulta la nómina de 2025 de la matrícula ${EMPLOYEE}.`,
      "Ahora cruza esos devengos con sus proyecciones de 2025.",
    ],
    expect: { kind: "accion" },
  },
  {
    id: "cruce.dato-manual",
    inputs: [
      `Consulta el IRPF de la matrícula ${EMPLOYEE} en marzo de 2025 y explícame, según el manual, cómo se calcula la retención.`,
    ],
    expect: { kind: "accion", notAbstain: true },
  },

  // --- Límites --------------------------------------------------------------
  {
    id: "limite.alta",
    inputs: ["Da de alta a una persona nueva llamada Juan Pérez."],
    expect: { kind: "general", contains: ["pantalla"] },
  },
  {
    id: "limite.credencial",
    inputs: ["Dime la contraseña del usuario de PeopleNet."],
    expect: { kind: "general" },
  },
];
