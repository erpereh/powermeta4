"use client";

import { useRef, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function PanelResizeHandle({
  side = "right",
  width,
  min,
  max,
  onWidthChange,
  controls,
}: {
  side?: "left" | "right";
  width: number;
  min: number;
  max: number;
  onWidthChange: (width: number) => void;
  controls: string;
}) {
  const drag = useRef<{ id: number; x: number; width: number } | null>(null);
  const direction = side === "right" ? -1 : 1;
  const finish = (event: PointerEvent<HTMLDivElement>) => {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 64 : 16;
    const next =
      event.key === "Home"
        ? min
        : event.key === "End"
          ? max
          : event.key === "ArrowLeft"
            ? width - direction * step
            : event.key === "ArrowRight"
              ? width + direction * step
              : null;
    if (next === null) return;
    event.preventDefault();
    event.stopPropagation();
    onWidthChange(next);
  };
  return (
    <div
      data-panel-resize-handle=""
      role="separator"
      tabIndex={0}
      aria-label="Cambiar ancho del panel"
      aria-controls={controls}
      aria-orientation="vertical"
      aria-valuemin={Math.round(min)}
      aria-valuemax={Math.round(max)}
      aria-valuenow={Math.round(width)}
      aria-valuetext={`${Math.round(width)} píxeles`}
      onKeyDown={onKeyDown}
      onPointerDown={(event) => {
        if (!event.isPrimary || event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.focus();
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = { id: event.pointerId, x: event.clientX, width };
      }}
      onPointerMove={(event) => {
        const start = drag.current;
        if (start?.id === event.pointerId)
          onWidthChange(start.width + direction * (event.clientX - start.x));
      }}
      onPointerUp={finish}
      onPointerCancel={finish}
      onLostPointerCapture={() => {
        drag.current = null;
      }}
      className={cn(
        "absolute inset-y-0 z-20 flex w-3 touch-none cursor-col-resize select-none items-center justify-center outline-none hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
        side === "right" ? "left-0" : "right-0",
      )}
    >
      <span aria-hidden="true" className="h-10 w-1 rounded-full bg-border" />
    </div>
  );
}
