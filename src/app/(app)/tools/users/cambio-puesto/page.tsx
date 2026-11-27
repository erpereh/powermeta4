import { Suspense } from "react";
import { AlertCircle } from "lucide-react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { UsersJobChange } from "@/components/tools/users/users-job-change";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { loadHireCatalogState } from "@/lib/meta4/hire/catalog-queries";

export default function JobChangePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Cambiar puesto o categoría"
        icon="user-job-change"
        moduleId="users"
        contentClassName="mx-auto w-full max-w-6xl"
      />
      <Suspense>
        <JobChangePageContent />
      </Suspense>
    </main>
  );
}

async function JobChangePageContent() {
  const authSession = await requireAuthContext();
  if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
    const error = new Meta4SessionRequiredError();
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
        <Alert>
          <AlertCircle />
          <AlertTitle>Sesión Meta4 requerida</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );
  }

  const catalogs = await loadHireCatalogState(authSession);
  return <UsersJobChange catalogs={catalogs} />;
}
