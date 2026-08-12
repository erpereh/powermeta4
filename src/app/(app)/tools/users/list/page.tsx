import { Suspense } from "react";
import { AlertCircle } from "lucide-react";

import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { UsersListError } from "@/components/tools/users/users-list-error";
import { UsersListSkeleton } from "@/components/tools/users/users-list-skeleton";
import { UsersListTable } from "@/components/tools/users/users-list-table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4HttpError } from "@/lib/meta4/client";
import { SessionExpiredError } from "@/lib/meta4/authenticated-soap-client";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { isMeta4UsersError } from "@/lib/meta4/users/errors";
import { listMeta4Users } from "@/lib/meta4/users/service";

export default function UsersListPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader title="Usuarios" />
      <Suspense fallback={<UsersListSkeleton />}>
        <UsersListContent />
      </Suspense>
    </main>
  );
}

async function UsersListContent() {
  const authSession = await requireAuthContext();

  try {
    const { society, users } = await listMeta4Users(authSession);
    return <UsersListTable society={society} users={users} />;
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError) {
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

    const message = resolveUsersListErrorMessage(error);
    return <UsersListError message={message} />;
  }
}

function resolveUsersListErrorMessage(error: unknown): string {
  if (isMeta4UsersError(error)) return error.message;
  if (isMeta4ProfileError(error)) return error.message;
  if (error instanceof SessionExpiredError) return error.message;
  if (error instanceof Meta4SoapFaultError) {
    return "Meta4 rechazó la consulta de usuarios.";
  }
  if (error instanceof Meta4HttpError) {
    return "Meta4 no pudo completar la consulta de usuarios.";
  }
  if (error instanceof Error && error.message.trim()) return error.message;
  return "No se han podido cargar los usuarios desde Meta4.";
}
