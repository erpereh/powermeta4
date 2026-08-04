import { ModuleWorkspace } from "@/components/tools/module-workspace";
import { getToolModule } from "@/lib/tools/registry";
import { notFound } from "next/navigation";

export default function UsersPage() {
  const module = getToolModule("users");
  if (!module) notFound();
  return <ModuleWorkspace module={module} />;
}
