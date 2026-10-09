"use client";

import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { SidebarMenu, SidebarMenuItem, Tooltip, useSidebar } from "@/components/system";
import { META4_SOCIETY_LEGAL_NAMES, type Meta4Society } from "@/lib/meta4/societies";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

const isMeta4Society = (value: string | null | undefined): value is Meta4Society =>
  value === "CYC" || value === "IBER" || value === "COLL";

/** Identidad fija de la sidebar: muestra la sociedad activa sin permitir seleccionarla. */
export function SocietyHeader() {
  const { isMobile, state } = useSidebar();
  const auth = useWorkspaceStore((store) => store.auth);
  const collapsed = !isMobile && state === "collapsed";

  const isDebugMode = auth?.mode === "debug";
  const societyCode = auth?.societyCode ?? null;

  const title = isDebugMode
    ? "powermeta4"
    : isMeta4Society(societyCode)
      ? societyCode
      : "Meta4";
  const subtitle = isDebugMode ? "Modo desarrollo" : null;
  const tooltip = isDebugMode
    ? "powermeta4 · Modo desarrollo"
    : isMeta4Society(societyCode)
      ? `powermeta4 · ${societyCode} · ${META4_SOCIETY_LEGAL_NAMES[societyCode]}`
      : "powermeta4";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Tooltip content={tooltip} side="right" wrapperClassName="flex w-full min-w-0">
          <div
            className="relative flex min-h-10 w-full min-w-0 cursor-default items-center gap-2 overflow-hidden rounded-xl px-1.5 text-left select-none"
            aria-label={subtitle ? `powermeta4. ${title}. ${subtitle}` : `powermeta4. ${title}`}
          >
            <PowermetaLogo compact markClassName="size-7" />
            <span
              className={cn(
                "grid min-w-0 flex-1 text-left leading-tight",
                collapsed && "sr-only",
              )}
            >
              <span className="truncate text-sm font-semibold text-foreground">{title}</span>
              {subtitle ? (
                <span className="truncate text-xs text-muted-foreground">{subtitle}</span>
              ) : null}
            </span>
          </div>
        </Tooltip>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
