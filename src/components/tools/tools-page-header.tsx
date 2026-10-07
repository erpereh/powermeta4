"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  PageHeader,
} from "@/components/system";
import {
  getToolModule,
  TOOL_ICONS,
  type ToolIconName,
  type ToolModuleId,
} from "@/lib/tools/registry";
import { MODULE_TONES, type IconTone } from "@/lib/theme/icon-tones";

export type ToolsPageHeaderProps = {
  title: string;
  /** Icono del registro; se pasa por nombre para poder usarlo desde páginas de servidor. */
  icon?: ToolIconName;
  /** Módulo ERP: añade «Acciones / Módulo» como ruta y su tono. */
  moduleId?: ToolModuleId;
  tone?: IconTone;
  description?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  toolbar?: ReactNode;
  /** Renderiza el título como h1 (por defecto). */
  heading?: boolean;
  contentClassName?: string;
};

export function ToolsPageHeader({
  title,
  icon,
  moduleId,
  tone,
  description,
  badge,
  actions,
  toolbar,
  heading = true,
  contentClassName,
}: ToolsPageHeaderProps) {
  const module = moduleId ? getToolModule(moduleId) : undefined;
  const resolvedTone = tone ?? (moduleId ? MODULE_TONES[moduleId] : undefined);

  return (
    <PageHeader
      title={heading ? <h1 className="truncate">{title}</h1> : title}
      icon={icon ? TOOL_ICONS[icon] : undefined}
      tone={resolvedTone}
      breadcrumb={
        module ? (
          <Breadcrumb aria-label="Ruta">
            <BreadcrumbList className="flex-nowrap text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/home">Acciones</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={module.route}>{module.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ) : undefined
      }
      description={description}
      badge={badge}
      actions={actions}
      toolbar={toolbar}
      contentClassName={contentClassName}
    />
  );
}
