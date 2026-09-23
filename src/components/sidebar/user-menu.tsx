"use client";

import { FileText, LogOut, Settings } from "lucide-react";

import { logoutAction } from "@/app/actions/auth";
import { useSettingsDialog } from "@/components/app-shell/app-shell";
import {
  Avatar,
  Badge,
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
  SidebarMenu,
  SidebarMenuItem,
  ThemeModeControl,
  Tooltip,
  useSidebar,
} from "@/components/system";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export function UserMenu() {
  const { isMobile, state } = useSidebar();
  const { openSettings } = useSettingsDialog();
  const auth = useWorkspaceStore((store) => store.auth);
  const username = auth?.username ?? "Usuario";
  const isDebugMode = auth?.mode === "debug";
  const collapsed = !isMobile && state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu>
          <Tooltip
            content={`Abrir menú de ${username}`}
            side="right"
            wrapperClassName="flex w-full min-w-0"
          >
            <MenuTrigger asChild>
              <button
                type="button"
                aria-label={`Abrir menú de ${username}`}
                aria-haspopup="menu"
                className="relative flex min-h-11 w-full min-w-0 items-center gap-2.5 overflow-hidden rounded-xl px-3 text-left outline-none transition-colors hover:bg-muted/60 focus-visible:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-muted"
              >
                <Avatar name={username} />
                <span className={cn("min-w-0 flex-1 text-left", collapsed && "sr-only")}>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {username}
                  </span>
                  {isDebugMode ? (
                    <span className="block truncate text-xs text-muted-foreground">
                      Modo de desarrollo
                    </span>
                  ) : null}
                </span>
                {isDebugMode && !collapsed ? (
                  <Badge status="neutral" size="sm" showIcon={false} className="ml-auto shrink-0">
                    Debug
                  </Badge>
                ) : null}
              </button>
            </MenuTrigger>
          </Tooltip>
          <MenuContent className="w-56" side={isMobile ? "bottom" : "top"} align="end">
            <MenuLabel className="font-normal">
              <span className="block truncate text-sm font-medium">{username}</span>
              {isDebugMode ? (
                <span className="block truncate text-xs text-muted-foreground">
                  Modo de desarrollo
                </span>
              ) : null}
            </MenuLabel>
            <MenuSeparator />
            <MenuItem
              onSelect={(event) => {
                event.preventDefault();
                openSettings();
              }}
            >
              <Settings />
              <span>Ajustes</span>
            </MenuItem>
            <MenuItem disabled>
              <FileText />
              <span>Docs</span>
              <span className="ml-auto text-xs text-muted-foreground">Próximamente</span>
            </MenuItem>
            <MenuSeparator />
            <div className="px-2 py-2">
              <p className="mb-2 px-1 text-xs text-muted-foreground">Apariencia</p>
              <ThemeModeControl />
            </div>
            <MenuSeparator />
            <form action={logoutAction}>
              <MenuItem asChild>
                <button type="submit" className="w-full text-left">
                  <LogOut />
                  <span>Cerrar sesión</span>
                </button>
              </MenuItem>
            </form>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
