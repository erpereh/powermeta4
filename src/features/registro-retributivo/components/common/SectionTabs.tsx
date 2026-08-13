"use client";

import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface SectionTabItem<T extends string> {
  readonly value: T;
  readonly label: string;
  readonly title?: string;
  readonly tabId?: string;
  readonly panelId?: string;
}

interface SectionTabsProps<T extends string> {
  readonly label: string;
  readonly value: T;
  readonly items: readonly SectionTabItem<T>[];
  readonly onValueChange: (value: T) => void;
  readonly className?: string;
}

export function SectionTabs<T extends string>({ label, value, items, onValueChange, className }: SectionTabsProps<T>) {
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectAt(index: number) {
    const item = items[index];
    if (!item) return;
    onValueChange(item.value);
    triggerRefs.current[index]?.focus();
  }

  return (
    <Tabs value={value} onValueChange={(next) => onValueChange(next as T)} className={cn("w-full", className)}>
      <TabsList aria-label={label} data-layout="fit-content" className="no-scrollbar h-auto max-w-full overflow-x-auto">
        {items.map((item, index) => {
          const selected = item.value === value;
          return (
            <TabsTrigger
              key={item.value}
              ref={(element) => { triggerRefs.current[index] = element; }}
              value={item.value}
              id={item.tabId}
              title={item.title ?? item.label}
              aria-controls={item.panelId}
              tabIndex={selected ? 0 : -1}
              onKeyDown={(event) => {
                if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                if (event.key === "Home") return selectAt(0);
                if (event.key === "End") return selectAt(items.length - 1);
                const direction = event.key === "ArrowRight" ? 1 : -1;
                selectAt((index + direction + items.length) % items.length);
              }}
            >
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
