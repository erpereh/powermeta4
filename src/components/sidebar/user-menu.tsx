"use client";

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
import { ThemeMenu } from "@/components/theme/theme-menu";
import { logoutAction } from "@/app/actions/auth";
import { FileText, LogOut } from "lucide-react";

export function UserMenu() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              tooltip="David García"
              aria-label="Abrir menú de David García"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  DG
                </AvatarFallback>
              </Avatar>
              <span className="min-w-0 truncate text-left text-sm font-medium group-data-[collapsible=icon]:hidden">
                David García
              </span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side={isMobile ? "bottom" : "top"} align="end">
            <DropdownMenuLabel className="font-normal">
              <span className="block text-sm font-medium">David García</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
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
