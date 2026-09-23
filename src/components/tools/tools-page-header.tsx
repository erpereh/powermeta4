"use client";

import { SidebarTrigger, Tooltip, useSidebar } from "@/components/system";

export function ToolsPageHeader({ title }: { title: string }) {
  const { isMobile, open, openMobile } = useSidebar();
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background px-3 sm:px-5">
      <Tooltip content={triggerLabel} side="bottom">
        <SidebarTrigger
          aria-label={triggerLabel}
          aria-expanded={sidebarOpen}
          title={triggerLabel}
        />
      </Tooltip>
      <div className="min-w-0 truncate text-sm font-medium text-foreground">{title}</div>
    </header>
  );
}
