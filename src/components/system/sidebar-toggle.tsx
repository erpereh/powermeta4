"use client";

import { PanelLeft } from "lucide-react";

import { SidebarTrigger, useSidebar } from "./sidebar";
import { Tooltip } from "./tooltip";
import { cn } from "@/lib/utils";

export interface SidebarToggleProps {
  className?: string;
  /** Clases del envoltorio del tooltip (p. ej. visibilidad por breakpoint). */
  wrapperClassName?: string;
  tooltipSide?: "top" | "right" | "bottom" | "left";
}

/** Botón de icono que pliega o abre la barra lateral (envuelve el único SidebarTrigger). */
export function SidebarToggle({
  className,
  wrapperClassName,
  tooltipSide = "bottom",
}: SidebarToggleProps) {
  const { isMobile, open, openMobile } = useSidebar();
  const sidebarOpen = isMobile ? openMobile : open;
  const label = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  return (
    <Tooltip content={label} side={tooltipSide} wrapperClassName={wrapperClassName}>
      <SidebarTrigger
        aria-label={label}
        aria-expanded={sidebarOpen}
        title={label}
        className={cn(
          "size-8 rounded-lg text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground",
          className,
        )}
      >
        <PanelLeft className="size-4" aria-hidden="true" />
      </SidebarTrigger>
    </Tooltip>
  );
}
