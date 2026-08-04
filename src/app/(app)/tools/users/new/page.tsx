import Link from "next/link";

import { UserForm } from "@/components/tools/user-form";
import { ToolVisitTracker } from "@/components/tools/tool-visit-tracker";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { Button } from "@/components/ui/button";

export default function NewUserPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolVisitTracker toolId="users.create" />
      <ToolsPageHeader title="Crear usuario" />
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Usuarios</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Crear nuevo usuario</h1>
            <p className="mt-2 text-muted-foreground">
              Completa los datos para guardar una persona en este workspace.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/tools/users">Volver</Link>
          </Button>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-7">
          <UserForm />
        </div>
      </div>
    </main>
  );
}
