const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9]{1,20}$/;

export type QuinquenalParameters = {
  /** Matrícula concreta; sin ella se consultan todos los empleados computables. */
  employeeId?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/** Valida los parámetros que llegan del navegador: solo una matrícula opcional. */
export const parseQuinquenalParameters = (
  input: unknown,
): { ok: true; value: QuinquenalParameters } | { ok: false; message: string } => {
  if (input === undefined || input === null) return { ok: true, value: {} };
  if (!isRecord(input))
    return { ok: false, message: "Los parámetros de la consulta no son válidos." };
  const { employeeId } = input;
  if (employeeId === undefined || employeeId === null || employeeId === "") {
    return { ok: true, value: {} };
  }
  if (typeof employeeId !== "string" || !EMPLOYEE_ID_PATTERN.test(employeeId.trim())) {
    return { ok: false, message: "La matrícula no es válida." };
  }
  return { ok: true, value: { employeeId: employeeId.trim() } };
};
