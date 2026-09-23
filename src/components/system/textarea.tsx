"use client";

import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  /** Mensaje de error; marca el campo como inválido. */
  error?: string;
  /** Clase del contenedor (label + campo + error). */
  wrapperClassName?: string;
}

/** Área de texto con el mismo lenguaje que el Input beUI (beUI no ofrece textarea). */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, id: idProp, className, wrapperClassName, ...rest },
  ref,
) {
  const reactId = useId();
  const id = idProp ?? reactId;

  return (
    <div className={cn("flex min-w-0 flex-col gap-1.5", wrapperClassName)}>
      {label ? (
        <label htmlFor={id} className="px-1 text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "min-h-24 w-full resize-y rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors",
          "placeholder:text-muted-foreground focus-visible:border-foreground/40 focus-visible:ring-2 focus-visible:ring-ring/40",
          "disabled:cursor-not-allowed disabled:opacity-60",
          error && "border-destructive ring-2 ring-destructive/25",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="px-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
});
