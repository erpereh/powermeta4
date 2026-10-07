"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, ListChecks, PlugZap } from "lucide-react";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  DetailHeader,
  HoverList,
  PropertyList,
  Section,
  SidebarToggle,
  Surface,
} from "@/components/system";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { ToolCard } from "@/components/tools/tool-card";
import { MODULE_TONES } from "@/lib/theme/icon-tones";
import { TOOL_ICONS, type ToolModuleDefinition } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";

export function ModuleWorkspace({ module }: { module: ToolModuleDefinition }) {
  const auth = useWorkspaceStore((state) => state.auth);
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const scopeLabel = getWorkspaceScopeLabel(auth);
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [feedback, setFeedback] = useState("");
  const ModuleIcon = TOOL_ICONS[module.icon];
  const headingId = `${module.id}-actions-heading`;
  const available = module.tools.filter((tool) => tool.implemented).length;

  const handleToolVisit = (toolId: string) => {
    if (!activeCompanyId) return;
    recordToolVisit(toolId, activeCompanyId);
    void recordToolVisitAction(activeCompanyId, toolId, createClientMutationId()).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const showUnavailable = () => setFeedback("Esta herramienta estará disponible próximamente.");

  return (
    <main className="flex min-h-svh flex-col bg-background">
      <div className="px-4 pt-4 md:hidden">
        <SidebarToggle wrapperClassName="-ml-1" />
      </div>

      <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-6 sm:px-6 sm:py-10">
        <DetailHeader
          breadcrumb={
            <Breadcrumb aria-label="Ruta">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/home">Acciones</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{module.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          icon={ModuleIcon}
          tone={MODULE_TONES[module.id]}
          title={module.name}
          badge={
            <Badge status="neutral" size="sm" showIcon={false}>
              Sin conexión ERP
            </Badge>
          }
          description={module.description}
        />

        <Section title="Acciones disponibles" headingId={headingId}>
          <Surface flush className="p-1.5">
            <HoverList aria-labelledby={headingId}>
              {module.tools.map((tool) => (
                <li key={tool.id}>
                  <ToolCard
                    tool={tool}
                    onVisit={() => handleToolVisit(tool.id)}
                    onUnavailable={showUnavailable}
                  />
                </li>
              ))}
            </HoverList>
          </Surface>
        </Section>

        <Section title="Estado" headingId={`${module.id}-status-heading`}>
          <PropertyList
            aria-label={`Estado de ${module.name}`}
            items={[
              { id: "scope", label: "Alcance", value: scopeLabel, icon: Building2 },
              {
                id: "available",
                label: "Acciones disponibles",
                value: `${available} de ${module.tools.length}`,
                icon: ListChecks,
              },
              { id: "erp", label: "Conexión ERP", value: "Pendiente", icon: PlugZap },
            ]}
            footer={
              <p className="text-muted-foreground">
                Las acciones se conectarán a sistemas ERP externos en una futura fase.
              </p>
            }
          />
        </Section>

        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>
    </main>
  );
}
