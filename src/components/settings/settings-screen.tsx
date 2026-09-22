"use client";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { SettingsContent } from "@/components/settings/settings-content";
import { Skeleton } from "@/components/system";

export function SettingsScreen() {
  const hydrated = useWorkspaceHydrated();

  if (!hydrated) {
    return (
      <main className="min-h-svh p-6 sm:p-10">
        <div className="mx-auto max-w-5xl space-y-4">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-56 w-full" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-svh p-4 sm:p-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <header className="space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">Configuración local</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Ajustes</h1>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Consulta tu perfil Meta4 y protege la información local de este equipo.
          </p>
        </header>
        <SettingsContent variant="page" />
      </div>
    </main>
  );
}
