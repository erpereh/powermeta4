import { z } from "zod";

import { AgentToolError } from "@/lib/agent/errors";
import type { AgentToolDefinition } from "@/lib/agent/tools/types";
import { employeeIdsEqual } from "@/lib/meta4/users/employee-id";
import type { Meta4EmployeeDetailResult } from "@/lib/meta4/users/employee-detail-types";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";

export const EMPLOYEE_FIELD_KEYS = [
  "JOB_TITLE",
  "JOB_CLASS",
  "UNIT",
  "AREA",
  "ORG_DIRECTION",
  "WORK_CENTER",
  "WORK_CENTER_ADDRESS",
  "EMAIL",
] as const;

export type EmployeeFieldKey = (typeof EMPLOYEE_FIELD_KEYS)[number];

const FIELD_TO_SOAP: Record<Exclude<EmployeeFieldKey, "EMAIL">, string> = {
  JOB_TITLE: "n_Puesto",
  JOB_CLASS: "n_Clase_Puesto",
  UNIT: "n_Unidad",
  AREA: "n_Area",
  ORG_DIRECTION: "n_Direccion",
  WORK_CENTER: "n_Centro_Trabajo",
  WORK_CENTER_ADDRESS: "dir_Centro_Trabajo",
};

const FIELD_PHRASE: Record<EmployeeFieldKey, string> = {
  JOB_TITLE: "el puesto",
  JOB_CLASS: "la clase de puesto",
  UNIT: "la unidad",
  AREA: "el área",
  ORG_DIRECTION: "la dirección organizativa",
  WORK_CENTER: "el centro de trabajo",
  WORK_CENTER_ADDRESS: "la dirección del centro",
  EMAIL: "el correo",
};

const inputSchema = z.object({
  employeeRef: z
    .string()
    .regex(/^EMP_[0-9A-F]{8}$/i, "employeeRef debe ser una referencia opaca EMP_."),
  field: z.enum(EMPLOYEE_FIELD_KEYS),
});

export type EmployeeGetFieldInput = z.infer<typeof inputSchema>;

export type EmployeeGetFieldResult = {
  displayName: string;
  field: EmployeeFieldKey;
  value: string;
};

export type EmployeeGetFieldDeps = {
  listUsers: () => Promise<readonly Meta4UserListItem[]>;
  getDetail: (employeeId: string) => Promise<Meta4EmployeeDetailResult>;
};

const pickField = (fields: Record<string, string>, name: string): string => {
  const found = Object.entries(fields).find(([key]) => key.toLowerCase() === name.toLowerCase());
  return found?.[1]?.trim() ?? "";
};

const readEmail = (detail: Meta4EmployeeDetailResult): string => {
  const primary = pickField(detail.fields, "correo");
  if (primary) return primary;
  const nested = detail.emails.find((item) => item.email.trim());
  return nested?.email.trim() ?? "";
};

export const createEmployeeGetFieldTool = (
  deps: EmployeeGetFieldDeps,
): AgentToolDefinition<EmployeeGetFieldInput, EmployeeGetFieldResult> => ({
  id: "employee.get_field",
  description:
    "Obtiene un campo semántico de un empleado identificado por employeeRef (EMP_…). Campos: JOB_TITLE, JOB_CLASS, UNIT, AREA, ORG_DIRECTION, WORK_CENTER, WORK_CENTER_ADDRESS, EMAIL.",
  inputSchema,
  jsonSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      employeeRef: { type: "string", description: "Referencia opaca EMP_ de un empleado." },
      field: { type: "string", enum: [...EMPLOYEE_FIELD_KEYS] },
    },
    required: ["employeeRef", "field"],
  },
  permissions: [],
  mutation: "read",
  privacy: {
    input: "entity-refs-only",
    output: "local-template",
  },
  execute: async (input, context) => {
    const parsed = inputSchema.parse(input);
    const employeeId = await context.resolveEmployeeRef(parsed.employeeRef);
    const users = await deps.listUsers();
    const listed = users.find((user) => employeeIdsEqual(user.id, employeeId));
    if (!listed) {
      throw new AgentToolError(
        "FORBIDDEN",
        "El empleado no pertenece a la sociedad activa.",
      );
    }
    const detail = await deps.getDetail(employeeId);
    const value =
      parsed.field === "EMAIL"
        ? readEmail(detail)
        : pickField(detail.fields, FIELD_TO_SOAP[parsed.field]);
    if (!value) {
      throw new AgentToolError("NOT_FOUND", "No hay un valor disponible para ese campo.");
    }
    return {
      displayName: listed.fullName,
      field: parsed.field,
      value,
    };
  },
  render: (result) => {
    if (result.field === "EMAIL") {
      return `El correo de ${result.displayName} es ${result.value}.`;
    }
    return `${result.displayName} tiene ${FIELD_PHRASE[result.field]} de ${result.value}.`;
  },
});
