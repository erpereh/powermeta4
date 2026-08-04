import { BriefcaseBusiness, Building2, Layers3, type LucideIcon } from "lucide-react";

import type { Company, CompanyColorName, CompanyIconName, CompanyId } from "@/types/workspace";

export const toCompanyId = (value: string): CompanyId => value as CompanyId;

export const DEFAULT_COMPANY_ID = toCompanyId("company-main");

export const INITIAL_COMPANIES: readonly Company[] = [
  {
    id: toCompanyId("company-main"),
    name: "Empresa Principal",
    shortName: "Principal",
    icon: "building",
    color: "blue",
  },
  {
    id: toCompanyId("company-cyc"),
    name: "CyC Quality",
    shortName: "CyC",
    icon: "briefcase",
    color: "purple",
  },
  {
    id: toCompanyId("company-nexo"),
    name: "Nexo Operativo",
    shortName: "Nexo",
    icon: "layers",
    color: "green",
  },
] as const;

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

export const isCompanyIconName = (value: unknown): value is CompanyIconName =>
  value === "building" || value === "briefcase" || value === "layers";

export const isCompanyColorName = (value: unknown): value is CompanyColorName =>
  value === "blue" || value === "purple" || value === "green";
