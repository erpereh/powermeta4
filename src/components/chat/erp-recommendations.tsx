"use client";

import { ThreadPrimitive } from "@assistant-ui/react";
import { useState, type RefObject } from "react";

import { ChevronRight } from "lucide-react";

import { Button, IconChip } from "@/components/system";
import { MODULE_TONES } from "@/lib/theme/icon-tones";
import { TOOL_ICONS, TOOL_MODULES, type ToolModuleId } from "@/lib/tools/registry";
import { cn } from "@/lib/utils";

type ErpRecommendationsProps = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

export function ErpRecommendations({ inputRef }: ErpRecommendationsProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<ToolModuleId | null>(null);
  const activeCategory = TOOL_MODULES.find((module) => module.id === activeCategoryId);

  const focusComposer = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const input = inputRef.current;
        if (!input) return;

        input.focus({ preventScroll: true });
        const cursorPosition = input.value.length;
        input.setSelectionRange(cursorPosition, cursorPosition);
      });
    });
  };

  return (
    <section className="flex w-full flex-col gap-3" aria-label="Recomendaciones para operaciones">
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Categorías de herramientas"
      >
        {TOOL_MODULES.map((module) => {
          const Icon = TOOL_ICONS[module.icon];
          const isActive = module.id === activeCategoryId;

          return (
            <Button
              key={module.id}
              type="button"
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              aria-label={module.name}
              aria-pressed={isActive}
              onClick={() =>
                setActiveCategoryId((current) => (current === module.id ? null : module.id))
              }
              className={cn(
                "min-h-8 gap-1.5 rounded-full px-2.5 text-xs",
                !isActive && "text-muted-foreground",
              )}
            >
              <IconChip icon={Icon} tone={MODULE_TONES[module.id]} size="xs" />
              {module.name}
            </Button>
          );
        })}
      </div>

      {activeCategory && (
        <div
          className="flex flex-col gap-0.5"
          role="group"
          aria-label={`Acciones de ${activeCategory.name}`}
        >
          {activeCategory.tools.map((action) => {
            const ActionIcon = TOOL_ICONS[action.icon];
            return (
              <ThreadPrimitive.Suggestion
                key={action.id}
                prompt={action.aiPrompt}
                send={false}
                type="button"
                onClick={focusComposer}
                className="group flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-foreground outline-none transition-colors hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <ActionIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">{action.name}</span>
                <ChevronRight
                  className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </ThreadPrimitive.Suggestion>
            );
          })}
        </div>
      )}
    </section>
  );
}
