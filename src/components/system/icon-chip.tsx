import type { LucideIcon } from "lucide-react";

import { ICON_TONE_CLASSES, type IconTone } from "@/lib/theme/icon-tones";
import { cn } from "@/lib/utils";

export type IconChipSize = "xs" | "sm" | "md" | "lg";

export interface IconChipProps {
  icon: LucideIcon;
  tone?: IconTone;
  size?: IconChipSize;
  className?: string;
}

const SIZE_CLASS: Record<IconChipSize, { box: string; icon: string }> = {
  xs: { box: "size-5 rounded-md", icon: "size-3" },
  sm: { box: "size-7 rounded-lg", icon: "size-3.5" },
  md: { box: "size-9 rounded-xl", icon: "size-4" },
  lg: { box: "size-11 rounded-xl", icon: "size-5" },
};

/** Chip de icono con tono (mapa estático). Decorativo: el nombre va en el texto contiguo. */
export function IconChip({ icon: Icon, tone = "slate", size = "sm", className }: IconChipProps) {
  const sizing = SIZE_CLASS[size];
  return (
    <span
      aria-hidden="true"
      data-slot="icon-chip"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizing.box,
        ICON_TONE_CLASSES[tone],
        className,
      )}
    >
      <Icon className={sizing.icon} />
    </span>
  );
}
