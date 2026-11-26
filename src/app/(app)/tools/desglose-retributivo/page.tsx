import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { BreakdownForm } from "@/features/retributive-breakdown/breakdown-form";
import { getStandaloneToolTone } from "@/lib/theme/icon-tones";

export default function RetributiveBreakdownPage() {
  return (
    <main className="flex min-h-svh min-w-0 flex-col">
      <ToolsPageHeader
        title="Desglose Retributivo"
        icon="desglose-retributivo"
        tone={getStandaloneToolTone("desglose-retributivo")}
        contentClassName="mx-auto w-full max-w-5xl"
      />
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <BreakdownForm />
      </div>
    </main>
  );
}
