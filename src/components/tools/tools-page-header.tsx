"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ToolsPageHeader({ title }: { title: string }) {
  const { isMobile, open, openMobile } = useSidebar();
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger
            aria-label={triggerLabel}
            aria-expanded={sidebarOpen}
            title={triggerLabel}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom">{triggerLabel}</TooltipContent>
      </Tooltip>
      <div className="text-sm font-medium">{title}</div>
    </header>
  );
}
