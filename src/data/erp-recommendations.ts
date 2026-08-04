import {
  Building2,
  ChartNoAxesCombined,
  ReceiptText,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ErpRecommendationCategoryId =
  | "users"
  | "companies"
  | "payroll"
  | "reports"
  | "processes";

export type ErpRecommendationAction = {
  id: string;
  label: string;
  prompt: string;
};

export type ErpRecommendationCategory = {
  id: ErpRecommendationCategoryId;
  label: string;
  icon: LucideIcon;
  actions: readonly ErpRecommendationAction[];
};

export const ERP_RECOMMENDATIONS = [
  {
    id: "users",
    label: "Usuarios",
    icon: Users,
    actions: [
      {
        id: "create-user",
        label: "Crear nuevo usuario",
        prompt: "Quiero crear un nuevo usuario",
      },
      {
        id: "consult-user",
        label: "Consultar un usuario",
        prompt: "Quiero consultar los datos de un usuario",
      },
      {
        id: "modify-user",
        label: "Modificar un usuario",
        prompt: "Quiero modificar los datos de un usuario",
      },
      {
        id: "deactivate-user",
        label: "Dar de baja un usuario",
        prompt: "Quiero dar de baja un usuario",
      },
    ],
  },
  {
    id: "companies",
    label: "Empresas",
    icon: Building2,
    actions: [
      {
        id: "consult-company",
        label: "Consultar una empresa",
        prompt: "Quiero consultar los datos de una empresa",
      },
      {
        id: "create-company",
        label: "Crear una empresa",
        prompt: "Quiero crear una empresa",
      },
      {
        id: "modify-company-data",
        label: "Modificar datos de empresa",
        prompt: "Quiero modificar los datos de una empresa",
      },
      {
        id: "consult-work-centers",
        label: "Consultar centros de trabajo",
        prompt: "Quiero consultar los centros de trabajo de una empresa",
      },
    ],
  },
  {
    id: "payroll",
    label: "Nóminas",
    icon: ReceiptText,
    actions: [
      {
        id: "generate-payroll",
        label: "Generar nóminas",
        prompt: "Quiero generar las nóminas de un periodo",
      },
      {
        id: "consult-payroll",
        label: "Consultar una nómina",
        prompt: "Quiero consultar una nómina",
      },
      {
        id: "review-payroll-incidents",
        label: "Revisar incidencias",
        prompt: "Quiero revisar las incidencias de nómina",
      },
      {
        id: "regenerate-period",
        label: "Regenerar un periodo",
        prompt: "Quiero regenerar las nóminas de un periodo",
      },
    ],
  },
  {
    id: "reports",
    label: "Informes",
    icon: ChartNoAxesCombined,
    actions: [
      {
        id: "create-report",
        label: "Crear un informe",
        prompt: "Quiero crear un informe",
      },
      {
        id: "consult-reports",
        label: "Consultar informes",
        prompt: "Quiero consultar los informes",
      },
      {
        id: "export-results",
        label: "Exportar resultados",
        prompt: "Quiero exportar los resultados de un informe",
      },
      {
        id: "schedule-report",
        label: "Programar un informe",
        prompt: "Quiero programar un informe",
      },
    ],
  },
  {
    id: "processes",
    label: "Procesos",
    icon: Workflow,
    actions: [
      {
        id: "execute-process",
        label: "Ejecutar un proceso",
        prompt: "Quiero ejecutar un proceso",
      },
      {
        id: "consult-process-status",
        label: "Consultar estado",
        prompt: "Quiero consultar el estado de un proceso",
      },
      {
        id: "review-process-errors",
        label: "Revisar errores",
        prompt: "Quiero revisar los errores de un proceso",
      },
      {
        id: "recent-processes",
        label: "Ver procesos recientes",
        prompt: "Quiero ver los procesos recientes",
      },
    ],
  },
] as const satisfies readonly ErpRecommendationCategory[];
