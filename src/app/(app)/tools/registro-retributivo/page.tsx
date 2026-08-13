import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Separator } from "@/components/ui/separator";
import { TOOL_ICONS, getStandaloneTool } from "@/lib/tools/registry";

export default function RegistroRetributivoPage() {
  const tool = getStandaloneTool("registro-retributivo");
  const title = tool?.name ?? "Registro Retributivo";
  const description =
    tool?.description ?? "Consulta y genera información para el registro retributivo.";
  const Icon = TOOL_ICONS[tool?.icon ?? "registro-retributivo"];

  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader title={title} />
      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 sm:px-8">
        <section className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
            <Badge variant="secondary">Próximamente</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </section>
        <Separator />
        <Empty className="border py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icon aria-hidden="true" />
            </EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            <EmptyDescription>Esta herramienta estará disponible próximamente.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </main>
  );
}
