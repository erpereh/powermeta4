"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { switchMeta4WorkspaceAction } from "@/app/actions/meta4-workspace";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { META4_SOCIETY_LEGAL_NAMES, type Meta4Society } from "@/lib/meta4/societies";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

const isMeta4Society = (value: string | null | undefined): value is Meta4Society =>
  value === "CYC" || value === "IBER" || value === "COLL";

export function SocietyHeader() {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const auth = useWorkspaceStore((state) => state.auth);
  const applySnapshot = useWorkspaceStore((state) => state.applySnapshot);
  const [pending, setPending] = useState(false);

  const isDebugMode = auth?.mode === "debug";
  const societyCode = auth?.societyCode ?? null;
  const availableSocieties = (auth?.availableSocieties ?? []).filter(isMeta4Society);
  const canSwitch = !isDebugMode && availableSocieties.length > 1 && isMeta4Society(societyCode);

  const title = isDebugMode
    ? "powermeta4"
    : isMeta4Society(societyCode)
      ? societyCode
      : "Meta4";
  const subtitle = isDebugMode
    ? "Modo desarrollo"
    : isMeta4Society(societyCode)
      ? "Sociedad Meta4"
      : "Meta4";
  const tooltip = isDebugMode
    ? "powermeta4 · Modo desarrollo"
    : isMeta4Society(societyCode)
      ? `powermeta4 · ${societyCode} · ${META4_SOCIETY_LEGAL_NAMES[societyCode]}`
      : "powermeta4";

  const switchSociety = async (society: Meta4Society) => {
    if (!canSwitch || society === societyCode || pending) return;
    setPending(true);
    try {
      const result = await switchMeta4WorkspaceAction(society);
      if (result.ok) {
        applySnapshot(result.data);
        router.refresh();
      }
    } finally {
      setPending(false);
    }
  };

  const label = (
    <span className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
      <span className="truncate text-sm font-semibold">{title}</span>
      <span className="truncate text-xs text-sidebar-foreground/60">{subtitle}</span>
    </span>
  );

  if (!canSwitch) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            tooltip={tooltip}
            aria-label={`powermeta4. ${title}. ${subtitle}`}
            className="cursor-default hover:bg-transparent hover:text-sidebar-foreground active:bg-transparent data-[active=true]:bg-transparent"
            onClick={(event) => event.preventDefault()}
          >
            <PowermetaLogo compact markClassName="size-8" />
            {label}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              tooltip={tooltip}
              aria-label={`Sociedad activa ${societyCode}. Cambiar sociedad Meta4`}
              aria-haspopup="menu"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              disabled={pending}
            >
              <PowermetaLogo compact markClassName="size-8" />
              {label}
              <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel>Sociedades</DropdownMenuLabel>
            {availableSocieties.map((society) => (
              <DropdownMenuItem
                key={society}
                className="gap-2 p-2"
                disabled={pending}
                onSelect={() => {
                  void switchSociety(society);
                }}
              >
                <span className="grid min-w-0 flex-1 text-left leading-tight">
                  <span className="truncate font-medium">{society}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {META4_SOCIETY_LEGAL_NAMES[society]}
                  </span>
                </span>
                {society === societyCode ? <Check className="ml-auto size-4" /> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
