import { createEmployeeGetFieldTool } from "@/lib/agent/tools/employee-get-field";
import type { AnyAgentTool } from "@/lib/agent/tools/types";
import type { Meta4EmployeeDetailResult } from "@/lib/meta4/users/employee-detail-types";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";

export type AgentToolServices = {
  listUsers: () => Promise<readonly Meta4UserListItem[]>;
  getDetail: (employeeId: string) => Promise<Meta4EmployeeDetailResult>;
};

export const buildAgentTools = (services: AgentToolServices): AnyAgentTool[] => [
  createEmployeeGetFieldTool(services) as AnyAgentTool,
];
