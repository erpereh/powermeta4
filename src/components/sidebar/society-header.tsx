"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { switchMeta4WorkspaceAction } from "@/app/actions/meta4-workspace";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuTrigger,
  SidebarMenu,
  SidebarMenuItem,
  Tooltip,
  useSidebar,
} from "@/components/system";
import { META4_SOCIETY_LEGAL_NAMES, type Meta4Society } from "@/lib/meta4/societies";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

const isMeta4Society = (value: string | null | undefined): value is Meta4Society =>
  value === "CYC" || value === "IBER" || value === "COLL";

const headerButtonClass =
  "relative flex min-h-11 w-full min-w-0 items-center gap-2.5 overflow-hidden rounded-xl px-3 text-left outline-none transition-colors hover:bg-muted/60 focus-visible:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";

export function SocietyHeader() {
  const router = useRouter();
  const { isMobile, state } = useSidebar();
  const auth = useWorkspaceStore((store) => store.auth);
  const applySnapshot = useWorkspaceStore((store) => store.applySnapshot);
  const [pending, setPending] = useState(false);
  const collapsed = !isMobile && state === "collapsed";

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
    <span
      className={cn(
        "grid min-w-0 flex-1 text-left leading-tight",
        collapsed && "sr-only",
      )}
    >
      <span className="truncate text-sm font-semibold text-foreground">{title}</span>
      <span className="truncate text-xs text-muted-foreground">{subtitle}</span>
    </span>
  );

  if (!canSwitch) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <Tooltip content={tooltip} side="right" wrapperClassName="flex w-full min-w-0">
            <div
              className={cn(headerButtonClass, "cursor-default hover:bg-transparent")}
              aria-label={`powermeta4. ${title}. ${subtitle}`}
            >
              <PowermetaLogo compact markClassName="size-8" />
              {label}
            </div>
          </Tooltip>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu>
          <Tooltip content={tooltip} side="right" wrapperClassName="flex w-full min-w-0">
            <MenuTrigger asChild>
              <button
                type="button"
                disabled={pending}
                aria-label={`Sociedad activa ${societyCode}. Cambiar sociedad Meta4`}
                aria-haspopup="menu"
                className={headerButtonClass}
              >
                <PowermetaLogo compact markClassName="size-8" />
                {label}
                <ChevronsUpDown
                  className={cn("ml-auto size-4 shrink-0 text-muted-foreground", collapsed && "hidden")}
                />
              </button>
            </MenuTrigger>
          </Tooltip>
          <MenuContent
            className="min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <MenuLabel>Sociedades</MenuLabel>
            {availableSocieties.map((society) => (
              <MenuItem
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
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
