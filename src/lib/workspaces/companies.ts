import { BriefcaseBusiness, Building2, Layers3, type LucideIcon } from "lucide-react";

import type { Company, CompanyColorName, CompanyIconName, CompanyId } from "@/types/workspace";

export const COMPANIES: readonly Company[] = [
  {
    id: "company-main",
    name: "Empresa Principal",
    shortName: "Principal",
    icon: "building",
    color: "blue",
  },
  {
    id: "company-cyc",
    name: "CyC Quality",
    shortName: "CyC",
    icon: "briefcase",
    color: "purple",
  },
  {
    id: "company-nexo",
    name: "Nexo Operativo",
    shortName: "Nexo",
    icon: "layers",
    color: "green",
  },
] as const;

export const DEFAULT_COMPANY_ID: CompanyId = "company-main";

export const COMPANY_ICONS: Record<CompanyIconName, LucideIcon> = {
  building: Building2,
  briefcase: BriefcaseBusiness,
  layers: Layers3,
};

export const COMPANY_COLORS: Record<
  CompanyColorName,
  { label: string; className: string; surfaceClassName: string }
> = {
  blue: {
    label: "Azul",
    className: "text-sky-600 dark:text-sky-400",
    surfaceClassName: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
  purple: {
    label: "Morado",
    className: "text-violet-600 dark:text-violet-400",
    surfaceClassName: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
  green: {
    label: "Verde",
    className: "text-emerald-600 dark:text-emerald-400",
    surfaceClassName: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
};

export const getCompany = (companyId: CompanyId) =>
  COMPANIES.find((company) => company.id === companyId) ?? COMPANIES[0];

export const isCompanyId = (value: string): value is CompanyId =>
  COMPANIES.some((company) => company.id === value);
