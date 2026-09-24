import { Suspense } from "react";
import { AlertCircle } from "lucide-react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { UsersHireForm } from "@/components/tools/users/users-hire-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { loadHireCatalogState } from "@/lib/meta4/hire/catalog-queries";

export default function NewUserPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader title="Alta de personas" />
      <Suspense>
        <HirePageContent />
      </Suspense>
    </main>
  );
}

async function HirePageContent() {
  const authSession = await requireAuthContext();
  if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
    const error = new Meta4SessionRequiredError();
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8">
        <Alert>
          <AlertCircle />
          <AlertTitle>Sesión Meta4 requerida</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );
  }

  const catalogs = await loadHireCatalogState(authSession);
  return <UsersHireForm catalogs={catalogs} />;
}
