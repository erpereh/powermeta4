import { notFound } from "next/navigation";

import { ModuleWorkspace } from "@/components/tools/module-workspace";
import { getToolModule, type ToolModuleId } from "@/lib/tools/registry";

const moduleIds = ["users", "companies", "payroll", "reports", "processes"] as const;

const isToolModuleId = (value: string): value is ToolModuleId =>
  moduleIds.some((moduleId) => moduleId === value);

export default async function ToolModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  if (!isToolModuleId(moduleId) || moduleId === "users") notFound();

  const module = getToolModule(moduleId);
  if (!module) notFound();

  return <ModuleWorkspace module={module} />;
}
