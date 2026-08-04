"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown, Plus, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { COMPANY_COLORS, COMPANY_ICONS } from "@/lib/workspaces/companies";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { Company, CompanyId } from "@/types/workspace";

export function CompanySwitcher() {
  const router = useRouter();
  const { isMobile, setOpenMobile } = useSidebar();
  const companies = useWorkspaceStore((state) => state.companies);
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const switchCompany = useWorkspaceStore((state) => state.switchCompany);
  const createCompany = useWorkspaceStore((state) => state.createCompany);
  const deleteCompany = useWorkspaceStore((state) => state.deleteCompany);
  const [createOpen, setCreateOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [createError, setCreateError] = useState("");
  const [companyToDelete, setCompanyToDelete] = useState<Company | null>(null);
  const [feedback, setFeedback] = useState("");
  const activeCompany = companies.find((company) => company.id === activeCompanyId) ?? companies[0];

  useEffect(() => {
    if (!feedback) return;
    const timeoutId = window.setTimeout(() => setFeedback(""), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [feedback]);

  if (!activeCompany) return null;

  const closeMobileSidebar = () => {
    if (isMobile) setOpenMobile(false);
  };

  const chooseCompany = (companyId: CompanyId) => {
    switchCompany(companyId);
    router.push("/home");
    closeMobileSidebar();
  };

  const handleCreateOpenChange = (open: boolean) => {
    setCreateOpen(open);
    if (!open) {
      setCompanyName("");
      setCreateError("");
    }
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCompanyId = createCompany(companyName);
    if (!newCompanyId) {
      setCreateError(
        companyName.trim() ? "Ya existe una empresa con ese nombre." : "Escribe un nombre.",
      );
      return;
    }

    setCreateOpen(false);
    setCompanyName("");
    setCreateError("");
    router.push("/home");
    closeMobileSidebar();
    setFeedback("Empresa creada correctamente.");
  };

  const handleDelete = () => {
    if (!companyToDelete) return;
    const deletedCompanyId = companyToDelete.id;
    const nextCompanyId = deleteCompany(deletedCompanyId);
    if (!nextCompanyId) return;

    setCompanyToDelete(null);
    router.push("/home");
    closeMobileSidebar();
    setFeedback("Empresa eliminada correctamente.");
  };

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                tooltip={`powermeta4 · ${activeCompany.name}`}
                aria-label={`Abrir empresas. Empresa activa: ${activeCompany.name}`}
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <PowermetaLogo compact markClassName="size-8" />
                <span className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate text-sm font-semibold">powermeta4</span>
                  <span className="truncate text-xs text-sidebar-foreground/60">
                    {activeCompany.name}
                  </span>
                </span>
                <ChevronsUpDown className="ml-auto size-4 shrink-0 group-data-[collapsible=icon]:hidden" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-72"
              side={isMobile ? "bottom" : "right"}
              align="start"
            >
              <DropdownMenuLabel>Empresas</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {companies.map((company) => {
                const Icon = COMPANY_ICONS[company.icon];
                const isActive = company.id === activeCompany.id;
                return (
                  <DropdownMenuSub key={company.id}>
                    <DropdownMenuSubTrigger className="gap-3 py-2.5">
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${COMPANY_COLORS[company.color].surfaceClassName}`}
                      >
                        <Icon
                          aria-hidden="true"
                          className={`size-4 ${COMPANY_COLORS[company.color].className}`}
                        />
                      </span>
                      <span className="grid min-w-0">
                        <span className="truncate font-medium">{company.name}</span>
                        <span className="text-xs text-muted-foreground">Empresa</span>
                      </span>
                      {isActive && <Check aria-hidden="true" className="ml-auto size-4" />}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onSelect={() => chooseCompany(company.id)}>
                        <Check aria-hidden="true" />
                        <span>Seleccionar empresa</span>
                        {isActive && <span className="sr-only">Seleccionada</span>}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        disabled={companies.length === 1}
                        onSelect={() => setCompanyToDelete(company)}
                      >
                        <Trash2 aria-hidden="true" />
                        <span>Eliminar empresa</span>
                        {companies.length === 1 && <span className="sr-only">No disponible</span>}
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setCreateOpen(true)}>
                <Plus aria-hidden="true" />
                <span>Crear empresa</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Dialog open={createOpen} onOpenChange={handleCreateOpenChange}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Crear empresa</DialogTitle>
          </DialogHeader>
          <form className="space-y-5" onSubmit={handleCreate}>
            <div className="space-y-2">
              <Label htmlFor="company-name">Nombre de la empresa</Label>
              <Input
                id="company-name"
                value={companyName}
                onChange={(event) => {
                  setCompanyName(event.target.value);
                  setCreateError("");
                }}
                aria-invalid={Boolean(createError)}
                aria-describedby={createError ? "company-name-error" : undefined}
                autoFocus
              />
              {createError && (
                <p id="company-name-error" role="alert" className="text-sm text-destructive">
                  {createError}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">Crear</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={Boolean(companyToDelete)}
        onOpenChange={(open) => {
          if (!open) setCompanyToDelete(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar empresa</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará <strong>{companyToDelete?.name}</strong> junto con sus chats, favoritos y
              actividad local. Esta acción no modifica ningún ERP externo y no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={handleDelete}>
              Eliminar empresa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {feedback && (
        <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {feedback}
        </div>
      )}
    </>
  );
}
