"use client";

import { ThreadPrimitive } from "@assistant-ui/react";
import { useState, type RefObject } from "react";

import { Button } from "@/components/system";
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
    <section className="flex w-full flex-col gap-2" aria-label="Recomendaciones para operaciones">
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
                "min-h-8 gap-1.5 px-3 text-xs",
                !isActive && "text-muted-foreground",
              )}
            >
              <Icon className={cn("size-3.5", isActive ? "text-foreground" : "text-muted-foreground")} />
              {module.name}
            </Button>
          );
        })}
      </div>

      {activeCategory && (
        <div
          className="flex flex-wrap justify-center gap-2"
          role="group"
          aria-label={`Acciones de ${activeCategory.name}`}
        >
          {activeCategory.tools.map((action) => (
            <ThreadPrimitive.Suggestion
              key={action.id}
              prompt={action.aiPrompt}
              send={false}
              type="button"
              onClick={focusComposer}
              className="inline-flex min-h-8 shrink-0 items-center justify-center rounded-full border border-border bg-transparent px-3 text-xs font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"
            >
              {action.name}
            </ThreadPrimitive.Suggestion>
          ))}
        </div>
      )}
    </section>
  );
}
