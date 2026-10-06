import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Avatar as AvatarRoot, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface AvatarProps extends Omit<ComponentPropsWithoutRef<"span">, "children"> {
  /** Nombre del que se derivan las iniciales. */
  name: string;
  size?: "sm" | "md";
  /** Foto opcional. Radix conserva las iniciales mientras carga y si falla. */
  src?: string | null;
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

/** Avatar decorativo; el nombre accesible va en el texto contiguo. */
export function Avatar({ name, src, size = "md", className, ...rest }: AvatarProps) {
  const classes = cn(
    "inline-flex shrink-0 select-none items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground",
    size === "sm" ? "size-6 text-[0.625rem]" : "size-8 text-xs",
    className,
  );
  if (src)
    return (
      <AvatarRoot aria-hidden="true" className={classes} {...rest}>
        <AvatarImage src={src} alt="" />
        <AvatarFallback className="bg-primary text-inherit">{initials(name)}</AvatarFallback>
      </AvatarRoot>
    );
  return (
    <span aria-hidden="true" className={classes} {...rest}>
      {initials(name)}
    </span>
  );
}
