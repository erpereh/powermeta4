"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { IconChip } from "./icon-chip";
import { SidebarToggle } from "./sidebar-toggle";
import type { IconTone } from "@/lib/theme/icon-tones";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: ReactNode;
  /** Icono de la pantalla, dentro de un chip con tono. */
  icon?: LucideIcon;
  tone?: IconTone;
  /** Sustituye al chip de icono (p. ej. un avatar). */
  leading?: ReactNode;
  /** Línea pequeña encima del título (breadcrumb o alcance). */
  breadcrumb?: ReactNode;
  /** Frase bajo el título. */
  description?: ReactNode;
  /** Badge junto al título (estado o recuento). */
  badge?: ReactNode;
  /** Acciones de la pantalla, alineadas a la derecha. */
  actions?: ReactNode;
  /** Segunda fila: filtros, pestañas o navegación de la pantalla. */
  toolbar?: ReactNode;
  /** Contenido extra entre título y acciones. */
  children?: ReactNode;
  /** Clases del contenedor interno (p. ej. ancho máximo centrado). */
  contentClassName?: string;
  className?: string;
}

/**
 * Cabecera de pantalla dentro del contenido, sin barra con borde: icono,
 * título, acciones y una fila opcional de filtros. En escritorio el trigger de
 * la barra lateral vive en la sidebar; aquí solo aparece en móvil, de modo que
 * siempre hay un único trigger visible.
 */
export function PageHeader({
  title,
  icon,
  tone,
  leading,
  breadcrumb,
  description,
  badge,
  actions,
  toolbar,
  children,
  contentClassName,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("shrink-0 bg-background px-4 pt-4 sm:px-6 sm:pt-5", className)}>
      <div className={cn("flex min-w-0 flex-col gap-3", contentClassName)}>
        <div className="flex min-w-0 items-center gap-3">
          <SidebarToggle wrapperClassName="-ml-1 md:hidden" />
          {leading ??
            (icon ? (
              <IconChip icon={icon} tone={tone} size="md" className="hidden sm:inline-flex" />
            ) : null)}
          <div className="min-w-0 flex-1">
            {breadcrumb ? (
              <div className="min-w-0 truncate text-xs text-muted-foreground">{breadcrumb}</div>
            ) : null}
            <div className="flex min-w-0 items-center gap-2">
              <div className="min-w-0 truncate text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {title}
              </div>
              {badge ? <div className="shrink-0">{badge}</div> : null}
            </div>
            {description ? (
              <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
            ) : null}
          </div>
          {children}
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </div>
        {toolbar ? <div className="min-w-0">{toolbar}</div> : null}
      </div>
    </header>
  );
}
