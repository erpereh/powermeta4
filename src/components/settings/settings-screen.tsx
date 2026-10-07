"use client";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { SettingsContent } from "@/components/settings/settings-content";
import { Settings } from "lucide-react";

import { PageHeader, Skeleton } from "@/components/system";

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
    <main className="flex min-h-svh flex-col">
      <PageHeader
        icon={Settings}
        tone="slate"
        title={<h1>Ajustes</h1>}
        description="Consulta tu perfil Meta4 y protege la información local de este equipo."
        contentClassName="mx-auto max-w-5xl"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-6 sm:px-6">
        <SettingsContent variant="page" />
      </div>
    </main>
  );
}
