"use client";

import { type ComponentPropsWithRef, forwardRef } from "react";

import { Button, Tooltip } from "@/components/system";
import { cn } from "@/lib/utils";

export type TooltipIconButtonProps = ComponentPropsWithRef<typeof Button> & {
  tooltip: string;
  side?: "top" | "bottom" | "left" | "right";
};

export const TooltipIconButton = forwardRef<HTMLButtonElement, TooltipIconButtonProps>(
  ({ children, tooltip, side = "bottom", className, variant = "ghost", size = "icon", ...rest }, ref) => {
    return (
      <Tooltip content={tooltip} side={side}>
        <Button
          variant={variant}
          size={size}
          {...rest}
          aria-label={rest["aria-label"] ?? tooltip}
          className={cn("size-7 shrink-0", className)}
          ref={ref}
        >
          {children}
        </Button>
      </Tooltip>
    );
  },
);

TooltipIconButton.displayName = "TooltipIconButton";
