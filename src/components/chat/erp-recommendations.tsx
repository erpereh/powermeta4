"use client";

import { ThreadPrimitive } from "@assistant-ui/react";
import { useState, type RefObject } from "react";

import { Button } from "@/components/ui/button";
import { ERP_RECOMMENDATIONS, type ErpRecommendationCategoryId } from "@/data/erp-recommendations";
import { cn } from "@/lib/utils";

type ErpRecommendationsProps = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

export function ErpRecommendations({ inputRef }: ErpRecommendationsProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<ErpRecommendationCategoryId | null>(
    null,
  );
  const activeCategory = activeCategoryId
    ? ERP_RECOMMENDATIONS.find((category) => category.id === activeCategoryId)
    : undefined;

  const focusComposer = () => {
    requestAnimationFrame(() => {
      const input = inputRef.current;
      if (!input) return;

      input.focus({ preventScroll: true });
      const cursorPosition = input.value.length;
      input.setSelectionRange(cursorPosition, cursorPosition);
    });
  };

  return (
    <section className="flex w-full flex-col gap-2" aria-label="Recomendaciones para ERP">
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Categorías de recomendaciones"
      >
        {ERP_RECOMMENDATIONS.map((category) => {
          const Icon = category.icon;
          const isActive = category.id === activeCategoryId;

          return (
            <Button
              key={category.id}
              type="button"
              variant="ghost"
              size="sm"
              aria-label={category.label}
              aria-pressed={isActive}
              onClick={() =>
                setActiveCategoryId((current) => (current === category.id ? null : category.id))
              }
              className={cn(
                "min-h-9 gap-2 rounded-full border px-3 text-xs transition-colors",
                isActive
                  ? "border-border bg-muted font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border/70 hover:bg-card hover:text-foreground",
              )}
            >
              <Icon
                className={cn("size-4", isActive ? "text-foreground" : "text-muted-foreground")}
              />
              {category.label}
            </Button>
          );
        })}
      </div>

      {activeCategory && (
        <div
          className="flex flex-wrap justify-center gap-2"
          role="group"
          aria-label={`Acciones de ${activeCategory.label}`}
        >
          {activeCategory.actions.map((action) => (
            <ThreadPrimitive.Suggestion
              key={action.id}
              prompt={action.prompt}
              send={false}
              asChild
              onClick={focusComposer}
            >
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-label={action.label}
                className="min-h-9 rounded-full bg-transparent px-3 text-xs font-normal text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {action.label}
              </Button>
            </ThreadPrimitive.Suggestion>
          ))}
        </div>
      )}
    </section>
  );
}
