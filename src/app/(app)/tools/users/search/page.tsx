import Link from "next/link";

import { UsersTable } from "@/components/tools/users-table";
import { ToolVisitTracker } from "@/components/tools/tool-visit-tracker";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { Button } from "@/components/ui/button";

export default function SearchUsersPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolVisitTracker toolId="users.consult" />
      <ToolsPageHeader title="Consultar usuarios" />
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Usuarios</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Consultar usuarios</h1>
            <p className="mt-2 text-muted-foreground">
              Busca personas dentro de la empresa activa.
            </p>
          </div>
          <Button asChild>
            <Link href="/tools/users/new">Crear usuario</Link>
          </Button>
        </div>
        <UsersTable />
      </div>
    </main>
  );
}
