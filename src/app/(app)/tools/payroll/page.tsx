import { notFound } from "next/navigation";

import { ModuleWorkspace } from "@/components/tools/module-workspace";
import { getToolModule } from "@/lib/tools/registry";

export default function PayrollPage() {
  const module = getToolModule("payroll");
  if (!module) notFound();
  return <ModuleWorkspace module={module} />;
}
