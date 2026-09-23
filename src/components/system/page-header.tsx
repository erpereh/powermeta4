"use client";

import type { ReactNode } from "react";

import { SidebarTrigger, useSidebar } from "./sidebar";
import { Tooltip } from "./tooltip";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: ReactNode;
  /** Acciones de la pantalla, alineadas a la derecha. */
  actions?: ReactNode;
  /** Contenido extra entre título y acciones (p. ej. selector de modelo). */
  children?: ReactNode;
  className?: string;
}

/** Cabecera única y fina de pantalla: trigger de sidebar, título y acciones. */
export function PageHeader({ title, actions, children, className }: PageHeaderProps) {
  const { isMobile, open, openMobile } = useSidebar();
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  return (
    <header
      className={cn(
        "flex h-12 min-w-0 shrink-0 items-center gap-2 border-b border-border bg-background px-3 sm:px-4",
        className,
      )}
    >
      <Tooltip content={triggerLabel} side="bottom">
        <SidebarTrigger aria-label={triggerLabel} aria-expanded={sidebarOpen} title={triggerLabel} />
      </Tooltip>
      <div className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{title}</div>
      {children}
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </header>
  );
}
