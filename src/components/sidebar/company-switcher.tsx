"use client";

import { useRouter } from "next/navigation";
import { ChevronsUpDown } from "lucide-react";

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
import { COMPANY_COLORS, COMPANY_ICONS, COMPANIES } from "@/lib/workspaces/companies";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { CompanyId } from "@/types/workspace";

export function CompanySwitcher() {
  const router = useRouter();
  const { isMobile, setOpenMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const switchCompany = useWorkspaceStore((state) => state.switchCompany);
  const activeCompany = COMPANIES.find((company) => company.id === activeCompanyId) ?? COMPANIES[0];
  const ActiveIcon = COMPANY_ICONS[activeCompany.icon];

  const chooseCompany = (companyId: CompanyId) => {
    switchCompany(companyId);
    router.push("/home");
    if (isMobile) setOpenMobile(false);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              tooltip={`${activeCompany.name} · Empresa`}
              aria-label={`Empresa activa: ${activeCompany.name}`}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${COMPANY_COLORS[activeCompany.color].surfaceClassName}`}
              >
                <ActiveIcon className={`size-4 ${COMPANY_COLORS[activeCompany.color].className}`} />
              </span>
              <span className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate text-sm font-medium">{activeCompany.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/60">Empresa</span>
              </span>
              <ChevronsUpDown className="ml-auto size-4 shrink-0 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" side={isMobile ? "bottom" : "right"} align="start">
            <DropdownMenuLabel>Empresas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {COMPANIES.map((company) => {
              const Icon = COMPANY_ICONS[company.icon];
              const isActive = company.id === activeCompany.id;
              return (
                <DropdownMenuItem
                  key={company.id}
                  onSelect={() => chooseCompany(company.id)}
                  className="gap-3 py-2.5"
                  aria-label={`Seleccionar ${company.name}`}
                >
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg ${COMPANY_COLORS[company.color].surfaceClassName}`}
                  >
                    <Icon className={`size-4 ${COMPANY_COLORS[company.color].className}`} />
                  </span>
                  <span className="grid min-w-0">
                    <span className="truncate font-medium">{company.name}</span>
                    <span className="text-xs text-muted-foreground">Empresa</span>
                  </span>
                  {isActive && <span className="sr-only">Seleccionada</span>}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
