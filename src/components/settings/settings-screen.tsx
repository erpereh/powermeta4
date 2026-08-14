"use client";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { SettingsContent } from "@/components/settings/settings-content";
import { Skeleton } from "@/components/ui/skeleton";

export function SettingsScreen() {
  const hydrated = useWorkspaceHydrated();

  if (!hydrated) {
    return (
      <main className="min-h-svh p-6 sm:p-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-svh p-4 sm:p-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Configuración local</p>
          <h1 className="text-3xl font-semibold tracking-tight">Ajustes</h1>
          <p className="max-w-2xl text-muted-foreground">
            Consulta tu perfil Meta4, guarda configuraciones de IA y protege la información local
            de este equipo.
          </p>
        </header>
        <SettingsContent variant="page" />
      </div>
    </main>
  );
}
