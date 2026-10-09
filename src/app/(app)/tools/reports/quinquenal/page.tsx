import { QuinquenalConsult } from "@/components/tools/reports/quinquenal-consult";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";

export default function QuinquenalPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Consultar quinquenal"
        icon="report-quinquennial"
        moduleId="reports"
        contentClassName="mx-auto w-full max-w-6xl"
      />
      <QuinquenalConsult />
    </main>
  );
}
