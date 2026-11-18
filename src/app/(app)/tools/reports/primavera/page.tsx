import { PrimaveraConsult } from "@/components/tools/reports/primavera-consult";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";

export default function PrimaveraPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Primavera"
        icon="report-primavera"
        moduleId="reports"
        contentClassName="mx-auto w-full max-w-6xl"
      />
      <PrimaveraConsult />
    </main>
  );
}
