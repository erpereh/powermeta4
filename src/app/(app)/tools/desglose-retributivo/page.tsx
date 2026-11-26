import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BreakdownForm } from "@/features/retributive-breakdown/breakdown-form";
import { requireAuthContext } from "@/lib/auth/session";
import { getStandaloneToolTone } from "@/lib/theme/icon-tones";

export default async function RetributiveBreakdownPage() {
  const { authContext } = await requireAuthContext();
  return (
    <main className="flex min-h-svh min-w-0 flex-col">
      <ToolsPageHeader
        title="Desglose Retributivo"
        icon="desglose-retributivo"
        tone={getStandaloneToolTone("desglose-retributivo")}
        contentClassName="mx-auto w-full max-w-5xl"
      />
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        {authContext.societyCode === "IBER" ? (
          <BreakdownForm />
        ) : (
          <Alert role="status">
            <AlertTitle>Disponible para IBER</AlertTitle>
            <AlertDescription>
              Selecciona IBER en el selector de sociedad para cargar los Excel.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </main>
  );
}
