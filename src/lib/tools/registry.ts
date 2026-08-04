import {
  BarChart3,
  Building2,
  CalendarCog,
  ChartNoAxesCombined,
  CircleAlert,
  FileOutput,
  FileSearch,
  History,
  Landmark,
  Play,
  ReceiptText,
  Search,
  UserRoundCog,
  UserRoundPlus,
  UserRoundX,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { ToolVisit } from "@/types/workspace";

export type ToolModuleId = "users" | "companies" | "payroll" | "reports" | "processes";

export type ToolIconName =
  | "users"
  | "user-plus"
  | "user-search"
  | "user-settings"
  | "user-deactivate"
  | "companies"
  | "company-search"
  | "company-create"
  | "company-edit"
  | "work-centers"
  | "payroll"
  | "payroll-search"
  | "payroll-incidents"
  | "payroll-regenerate"
  | "reports"
  | "report-create"
  | "report-search"
  | "report-export"
  | "report-schedule"
  | "processes"
  | "process-run"
  | "process-status"
  | "process-errors"
  | "process-history";

export type ToolDefinition = {
  id: string;
  moduleId: ToolModuleId;
  name: string;
  description: string;
  route: string;
  icon: ToolIconName;
  keywords: readonly string[];
  aiPrompt: string;
  implemented: boolean;
  permissions: readonly string[];
};

export type ToolModuleDefinition = {
  id: ToolModuleId;
  name: string;
  description: string;
  route: string;
  icon: ToolIconName;
  tools: readonly ToolDefinition[];
};

export const TOOL_ICONS: Record<ToolIconName, LucideIcon> = {
  users: Users,
  "user-plus": UserRoundPlus,
  "user-search": Search,
  "user-settings": UserRoundCog,
  "user-deactivate": UserRoundX,
  companies: Building2,
  "company-search": Building2,
  "company-create": Building2,
  "company-edit": Building2,
  "work-centers": Landmark,
  payroll: ReceiptText,
  "payroll-search": FileSearch,
  "payroll-incidents": CircleAlert,
  "payroll-regenerate": CalendarCog,
  reports: ChartNoAxesCombined,
  "report-create": BarChart3,
  "report-search": FileSearch,
  "report-export": FileOutput,
  "report-schedule": CalendarCog,
  processes: Workflow,
  "process-run": Play,
  "process-status": ChartNoAxesCombined,
  "process-errors": CircleAlert,
  "process-history": History,
};

const tool = (
  definition: Omit<ToolDefinition, "permissions"> & { permissions?: readonly string[] },
): ToolDefinition => ({
  ...definition,
  permissions: definition.permissions ?? [],
});

export const TOOL_MODULES = [
  {
    id: "users",
    name: "Usuarios",
    description: "Prepara operaciones de gestión de usuarios para sistemas ERP externos.",
    route: "/tools/users",
    icon: "users",
    tools: [
      tool({
        id: "users.create",
        moduleId: "users",
        name: "Crear nuevo usuario",
        description: "Prepara el alta de un usuario en el sistema externo.",
        route: "/tools/users",
        icon: "user-plus",
        keywords: ["usuario", "crear", "alta", "persona"],
        aiPrompt: "Quiero crear un nuevo usuario",
        implemented: false,
      }),
      tool({
        id: "users.consult",
        moduleId: "users",
        name: "Consultar un usuario",
        description: "Busca usuarios mediante los datos disponibles en el ERP.",
        route: "/tools/users",
        icon: "user-search",
        keywords: ["usuario", "consultar", "buscar", "consulta"],
        aiPrompt: "Quiero consultar los datos de un usuario",
        implemented: false,
      }),
      tool({
        id: "users.modify",
        moduleId: "users",
        name: "Modificar un usuario",
        description: "Prepara la actualización de los datos de un usuario.",
        route: "/tools/users",
        icon: "user-settings",
        keywords: ["usuario", "modificar", "editar", "actualizar"],
        aiPrompt: "Quiero modificar los datos de un usuario",
        implemented: false,
      }),
      tool({
        id: "users.deactivate",
        moduleId: "users",
        name: "Dar de baja un usuario",
        description: "Prepara la baja de un usuario en el sistema externo.",
        route: "/tools/users",
        icon: "user-deactivate",
        keywords: ["usuario", "baja", "desactivar", "inactivo"],
        aiPrompt: "Quiero dar de baja un usuario",
        implemented: false,
      }),
    ],
  },
  {
    id: "companies",
    name: "Empresas",
    description: "Consulta y organiza la estructura de la empresa.",
    route: "/tools/companies",
    icon: "companies",
    tools: [
      tool({
        id: "companies.consult",
        moduleId: "companies",
        name: "Consultar una empresa",
        description: "Catálogo preparado para consultar empresas.",
        route: "/tools/companies",
        icon: "company-search",
        keywords: ["empresa", "consultar", "buscar"],
        aiPrompt: "Quiero consultar los datos de una empresa",
        implemented: false,
      }),
      tool({
        id: "companies.create",
        moduleId: "companies",
        name: "Crear una empresa",
        description: "Catálogo preparado para crear empresas.",
        route: "/tools/companies",
        icon: "company-create",
        keywords: ["empresa", "crear", "alta"],
        aiPrompt: "Quiero crear una empresa",
        implemented: false,
      }),
      tool({
        id: "companies.modify-data",
        moduleId: "companies",
        name: "Modificar datos de empresa",
        description: "Catálogo preparado para actualizar empresas.",
        route: "/tools/companies",
        icon: "company-edit",
        keywords: ["empresa", "modificar", "editar", "datos"],
        aiPrompt: "Quiero modificar los datos de una empresa",
        implemented: false,
      }),
      tool({
        id: "companies.work-centers",
        moduleId: "companies",
        name: "Consultar centros de trabajo",
        description: "Catálogo preparado para consultar centros de trabajo.",
        route: "/tools/companies",
        icon: "work-centers",
        keywords: ["empresa", "centro", "centros", "trabajo"],
        aiPrompt: "Quiero consultar los centros de trabajo de una empresa",
        implemented: false,
      }),
    ],
  },
  {
    id: "payroll",
    name: "Nóminas",
    description: "Prepara el espacio para operaciones de nómina.",
    route: "/tools/payroll",
    icon: "payroll",
    tools: [
      tool({
        id: "payroll.generate",
        moduleId: "payroll",
        name: "Generar nóminas",
        description: "Acceso preparado para generar nóminas.",
        route: "/tools/payroll",
        icon: "payroll",
        keywords: ["nómina", "nóminas", "generar", "periodo"],
        aiPrompt: "Quiero generar las nóminas de un periodo",
        implemented: false,
      }),
      tool({
        id: "payroll.consult",
        moduleId: "payroll",
        name: "Consultar una nómina",
        description: "Acceso preparado para consultar nóminas.",
        route: "/tools/payroll",
        icon: "payroll-search",
        keywords: ["nómina", "consultar", "buscar"],
        aiPrompt: "Quiero consultar una nómina",
        implemented: false,
      }),
      tool({
        id: "payroll.review-incidents",
        moduleId: "payroll",
        name: "Revisar incidencias",
        description: "Acceso preparado para revisar incidencias de nómina.",
        route: "/tools/payroll",
        icon: "payroll-incidents",
        keywords: ["nómina", "incidencias", "revisar", "errores"],
        aiPrompt: "Quiero revisar las incidencias de nómina",
        implemented: false,
      }),
      tool({
        id: "payroll.regenerate-period",
        moduleId: "payroll",
        name: "Regenerar un periodo",
        description: "Acceso preparado para regenerar periodos.",
        route: "/tools/payroll",
        icon: "payroll-regenerate",
        keywords: ["nómina", "regenerar", "periodo"],
        aiPrompt: "Quiero regenerar las nóminas de un periodo",
        implemented: false,
      }),
    ],
  },
  {
    id: "reports",
    name: "Informes",
    description: "Prepara el espacio para consulta y exportación de informes.",
    route: "/tools/reports",
    icon: "reports",
    tools: [
      tool({
        id: "reports.create",
        moduleId: "reports",
        name: "Crear un informe",
        description: "Acceso preparado para crear informes.",
        route: "/tools/reports",
        icon: "report-create",
        keywords: ["informe", "informes", "crear"],
        aiPrompt: "Quiero crear un informe",
        implemented: false,
      }),
      tool({
        id: "reports.consult",
        moduleId: "reports",
        name: "Consultar informes",
        description: "Acceso preparado para consultar informes.",
        route: "/tools/reports",
        icon: "report-search",
        keywords: ["informe", "informes", "consultar", "buscar"],
        aiPrompt: "Quiero consultar los informes",
        implemented: false,
      }),
      tool({
        id: "reports.export-results",
        moduleId: "reports",
        name: "Exportar resultados",
        description: "Acceso preparado para exportar resultados.",
        route: "/tools/reports",
        icon: "report-export",
        keywords: ["informe", "exportar", "resultados"],
        aiPrompt: "Quiero exportar los resultados de un informe",
        implemented: false,
      }),
      tool({
        id: "reports.schedule",
        moduleId: "reports",
        name: "Programar un informe",
        description: "Acceso preparado para programar informes.",
        route: "/tools/reports",
        icon: "report-schedule",
        keywords: ["informe", "programar", "calendario"],
        aiPrompt: "Quiero programar un informe",
        implemented: false,
      }),
    ],
  },
  {
    id: "processes",
    name: "Procesos",
    description: "Prepara el espacio para ejecutar y revisar procesos.",
    route: "/tools/processes",
    icon: "processes",
    tools: [
      tool({
        id: "processes.execute",
        moduleId: "processes",
        name: "Ejecutar un proceso",
        description: "Acceso preparado para ejecutar procesos.",
        route: "/tools/processes",
        icon: "process-run",
        keywords: ["proceso", "procesos", "ejecutar", "lanzar"],
        aiPrompt: "Quiero ejecutar un proceso",
        implemented: false,
      }),
      tool({
        id: "processes.consult-status",
        moduleId: "processes",
        name: "Consultar estado",
        description: "Acceso preparado para consultar estados de procesos.",
        route: "/tools/processes",
        icon: "process-status",
        keywords: ["proceso", "estado", "consultar"],
        aiPrompt: "Quiero consultar el estado de un proceso",
        implemented: false,
      }),
      tool({
        id: "processes.review-errors",
        moduleId: "processes",
        name: "Revisar errores",
        description: "Acceso preparado para revisar errores de procesos.",
        route: "/tools/processes",
        icon: "process-errors",
        keywords: ["proceso", "errores", "revisar"],
        aiPrompt: "Quiero revisar los errores de un proceso",
        implemented: false,
      }),
      tool({
        id: "processes.recent",
        moduleId: "processes",
        name: "Ver procesos recientes",
        description: "Acceso preparado para consultar procesos recientes.",
        route: "/tools/processes",
        icon: "process-history",
        keywords: ["proceso", "recientes", "historial"],
        aiPrompt: "Quiero ver los procesos recientes",
        implemented: false,
      }),
    ],
  },
] as const satisfies readonly ToolModuleDefinition[];

export const TOOL_REGISTRY = TOOL_MODULES.flatMap((module) => module.tools);

export const QUICK_TOOL_IDS = [
  "users.create",
  "users.consult",
  "payroll.generate",
  "payroll.review-incidents",
  "processes.execute",
] as const;

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

export const getTool = (toolId: string) => TOOL_REGISTRY.find((tool) => tool.id === toolId);

export const getToolModule = (moduleId: ToolModuleId) =>
  TOOL_MODULES.find((module) => module.id === moduleId);

export const getQuickTools = () =>
  QUICK_TOOL_IDS.map((toolId) => getTool(toolId)).filter(
    (tool): tool is ToolDefinition => tool !== undefined,
  );

export const searchTools = (query: string) => {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) {
    return { modules: TOOL_MODULES, tools: TOOL_REGISTRY };
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const matches = (values: readonly string[]) => {
    const searchableText = normalize(values.join(" "));
    return terms.every((term) => searchableText.includes(term));
  };

  const tools = TOOL_REGISTRY.filter((tool) =>
    matches([tool.name, tool.description, ...tool.keywords]),
  );
  const modules = TOOL_MODULES.filter(
    (module) =>
      matches([module.name, module.description]) ||
      tools.some((tool) => tool.moduleId === module.id),
  );

  return { modules, tools };
};

export const isToolVisit = (value: ToolVisit): boolean => Boolean(getTool(value.toolId));
