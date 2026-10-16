"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** An exiting animated tree must not clear the ref of its replacement. */
function usePanelElement() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const current = useRef<HTMLElement | null>(null);
  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    current.current = node;
    setElement(node);
    return () => {
      if (current.current !== node) return;
      current.current = null;
      setElement(null);
    };
  }, []);
  return [element, ref] as const;
}

/** Measure intrinsic layout without mounting a second React tree or moving live controls. */
function contentWidth(panel: HTMLElement) {
  const copy = panel.cloneNode(true);
  if (!(copy instanceof HTMLElement)) return 0;
  copy.inert = true;
  copy.setAttribute("aria-hidden", "true");
  copy.removeAttribute("id");
  copy.querySelectorAll("[id], [autofocus]").forEach((element) => {
    element.removeAttribute("id");
    element.removeAttribute("autofocus");
  });
  copy.querySelectorAll("[data-panel-resize-handle]").forEach((element) => element.remove());
  Object.assign(copy.style, {
    position: "fixed",
    left: "-100000px",
    right: "auto",
    top: "0",
    bottom: "auto",
    width: "max-content",
    minWidth: "0",
    maxWidth: "none",
    height: "auto",
    visibility: "hidden",
    pointerEvents: "none",
    transform: "none",
    transition: "none",
  });
  // Size containment would hide the intrinsic width of property lists.
  copy.style.containerType = "normal";
  copy.querySelectorAll<HTMLElement>("[data-property-list]").forEach((element) => {
    element.style.containerType = "normal";
    element.querySelectorAll<HTMLElement>("dl > div").forEach((row) => {
      row.style.gridTemplateColumns = "max-content max-content";
      row.style.columnGap = "1rem";
    });
  });
  document.body.append(copy);
  try {
    // Reserve room for the vertical scrollbar and subpixel rounding.
    return Math.ceil(copy.getBoundingClientRect().width) + 20;
  } finally {
    copy.remove();
  }
}

export function usePanelWidth({
  open,
  size = "md",
  resetKey,
  fullWidth = false,
}: {
  open: boolean;
  size?: "md" | "lg";
  resetKey?: string;
  fullWidth?: boolean;
}) {
  const [panel, panelRef] = usePanelElement();
  const [container, containerRef] = usePanelElement();
  const [dimensions, setDimensions] = useState({ width: 0, min: 0, max: 0, full: false });
  const manual = useRef<number | null>(null);
  const intrinsic = useRef(0);

  useLayoutEffect(() => {
    manual.current = null;
    intrinsic.current = 0;
  }, [open, resetKey]);

  useLayoutEffect(() => {
    if (!open || !panel) return;
    let frame = 0;
    let disposed = false;
    const update = () => {
      if (disposed) return;
      const available = container?.clientWidth ?? window.innerWidth;
      const rem = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const full = fullWidth || available < 768;
      const max = Math.max(0, Math.floor(full ? available : available * 0.9));
      const min = Math.min(26 * rem, max);
      if (manual.current === null) intrinsic.current = contentWidth(panel);
      const preferred =
        manual.current ?? Math.max((size === "lg" ? 36 : 26) * rem, intrinsic.current);
      const width = full ? max : clamp(preferred, min, max);
      setDimensions((current) =>
        current.width === width &&
        current.min === min &&
        current.max === max &&
        current.full === full
          ? current
          : { width, min, max, full },
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    resize?.observe(container ?? panel);
    const mutation = new MutationObserver(schedule);
    mutation.observe(panel, { childList: true, subtree: true, characterData: true });
    window.addEventListener("resize", schedule);
    document.fonts?.ready.then(() => {
      if (!disposed) schedule();
    });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize?.disconnect();
      mutation.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [open, panel, size, resetKey, container, fullWidth]);

  const setWidth = useCallback(
    (value: number) => {
      const width = clamp(value, dimensions.min, dimensions.max);
      manual.current = width;
      setDimensions((current) => ({ ...current, width }));
    },
    [dimensions.min, dimensions.max],
  );

  return {
    panelRef,
    containerRef,
    width: dimensions.width || undefined,
    min: dimensions.min,
    max: dimensions.max,
    full: dimensions.full,
    resizable: !dimensions.full && dimensions.max > dimensions.min,
    setWidth,
  };
}
