"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { COMPANIES } from "@/lib/workspaces/companies";
import { USER_ROLE_LABELS, USER_STATUS_LABELS } from "@/lib/users/validation";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export function UserDetail({ userId }: { userId: string }) {
  const router = useRouter();
  const { isMobile, open, openMobile } = useSidebar();
  const hydrated = useWorkspaceHydrated();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const user = useWorkspaceStore((state) =>
    state.workspaces[state.activeCompanyId]?.users.find((item) => item.id === userId),
  );
  const activeCompany = COMPANIES.find((company) => company.id === activeCompanyId) ?? COMPANIES[0];
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  useEffect(() => {
    if (!hydrated) return;
    if (!user) router.replace("/tools/users/search");
  }, [hydrated, router, user]);

  if (!hydrated || !user) return null;

  const createdAt = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
    new Date(user.createdAt),
  );

  return (
    <main className="flex min-h-svh flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger
              aria-label={triggerLabel}
              aria-expanded={sidebarOpen}
              title={triggerLabel}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">{triggerLabel}</TooltipContent>
        </Tooltip>
        <div className="text-sm font-medium">Detalle de usuario</div>
      </header>
      <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-8 sm:px-8 sm:py-12">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/tools/users/search">
            <ArrowLeft /> Volver a usuarios
          </Link>
        </Button>
        <section className="space-y-2">
          <p className="text-sm text-muted-foreground">{activeCompany.name}</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-muted-foreground">{user.email}</p>
        </section>
        <dl className="grid gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2">
          <DetailItem label="Nombre de usuario" value={user.username} />
          <DetailItem label="Rol" value={USER_ROLE_LABELS[user.role]} />
          <DetailItem label="Estado" value={USER_STATUS_LABELS[user.status]} />
          <DetailItem label="Empresa" value={activeCompany.name} />
          <DetailItem label="Creado" value={createdAt} />
        </dl>
      </div>
    </main>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
