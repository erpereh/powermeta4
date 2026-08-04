"use client";

import { useAui } from "@assistant-ui/react";
import { useState, type RefObject } from "react";

import { Button } from "@/components/ui/button";
import { ERP_RECOMMENDATIONS, type ErpRecommendationCategoryId } from "@/data/erp-recommendations";
import { cn } from "@/lib/utils";

type ErpRecommendationsProps = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

export function ErpRecommendations({ inputRef }: ErpRecommendationsProps) {
  const aui = useAui();
  const [activeCategoryId, setActiveCategoryId] = useState<ErpRecommendationCategoryId>("users");
  const activeCategory =
    ERP_RECOMMENDATIONS.find((category) => category.id === activeCategoryId) ??
    ERP_RECOMMENDATIONS[0];

  const handleAction = (prompt: string) => {
    aui.composer.setText(prompt);

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
              onClick={() => setActiveCategoryId(category.id)}
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

      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label={`Acciones de ${activeCategory.label}`}
      >
        {activeCategory.actions.map((action) => (
          <Button
            key={action.id}
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleAction(action.prompt)}
            className="min-h-9 rounded-full bg-transparent px-3 text-xs font-normal text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
