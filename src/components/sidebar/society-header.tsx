"use client";

import { META4_SOCIETY_LEGAL_NAMES, type Meta4Society } from "@/lib/meta4/societies";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

const isMeta4Society = (value: string | null | undefined): value is Meta4Society =>
  value === "CYC" || value === "IBER" || value === "COLL";

export function SocietyHeader() {
  const auth = useWorkspaceStore((state) => state.auth);
  const isDebugMode = auth?.mode === "debug";
  const societyCode = auth?.societyCode ?? null;
  const label = isDebugMode
    ? "Modo desarrollo"
    : isMeta4Society(societyCode)
      ? societyCode
      : "Meta4";
  const tooltip = isDebugMode
    ? "powermeta4 · Modo desarrollo"
    : isMeta4Society(societyCode)
      ? `powermeta4 · ${societyCode} · ${META4_SOCIETY_LEGAL_NAMES[societyCode]}`
      : "powermeta4";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          tooltip={tooltip}
          aria-label={`powermeta4. ${label}`}
          className="cursor-default hover:bg-transparent hover:text-sidebar-foreground active:bg-transparent data-[active=true]:bg-transparent"
          onClick={(event) => event.preventDefault()}
        >
          <PowermetaLogo compact markClassName="size-8" />
          <span className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-semibold">powermeta4</span>
            <span className="truncate text-xs text-sidebar-foreground/60">{label}</span>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
