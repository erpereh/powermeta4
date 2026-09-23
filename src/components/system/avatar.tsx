import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export interface AvatarProps extends Omit<ComponentPropsWithoutRef<"span">, "children"> {
  /** Nombre del que se derivan las iniciales. */
  name: string;
  size?: "sm" | "md";
}

function initials(name: string): string {
  const parts = name
    .split(/[\s._-]+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

/** Avatar de iniciales (sin imagen); decorativo, el nombre va en el texto contiguo. */
export function Avatar({ name, size = "md", className, ...rest }: AvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground",
        size === "sm" ? "size-6 text-[0.625rem]" : "size-8 text-xs",
        className,
      )}
      {...rest}
    >
      {initials(name)}
    </span>
  );
}
