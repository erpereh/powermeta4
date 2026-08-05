"use client";

import { FileText, LogOut, Settings } from "lucide-react";
import Link from "next/link";

import { logoutAction } from "@/app/actions/auth";
import { ThemeMenu } from "@/components/theme/theme-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export function UserMenu() {
  const { isMobile } = useSidebar();
  const username = useWorkspaceStore((state) => state.session.username) ?? "Usuario";
  const initials =
    username
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? "")
      .join("") || "U";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              tooltip={`Abrir menú de ${username}`}
              aria-label={`Abrir menú de ${username}`}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="min-w-0 truncate text-left text-sm font-medium group-data-[collapsible=icon]:hidden">
                {username}
              </span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side={isMobile ? "bottom" : "top"} align="end">
            <DropdownMenuLabel className="font-normal">
              <span className="block truncate text-sm font-medium">{username}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <Settings />
                <span>Ajustes</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <FileText />
              <span>Docs</span>
              <span className="ml-auto text-xs text-muted-foreground">Próximamente</span>
            </DropdownMenuItem>
            <ThemeMenu />
            <DropdownMenuSeparator />
            <form action={logoutAction}>
              <DropdownMenuItem asChild>
                <button type="submit" className="w-full text-left">
                  <LogOut />
                  <span>Cerrar sesión</span>
                </button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
