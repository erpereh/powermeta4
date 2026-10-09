import { notFound } from "next/navigation";

import { ModuleWorkspace } from "@/components/tools/module-workspace";
import { getToolModule } from "@/lib/tools/registry";

export default function ReportsPage() {
  const module = getToolModule("reports");
  if (!module) notFound();
  return <ModuleWorkspace module={module} />;
}
