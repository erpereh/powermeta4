"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/features/registro-retributivo/utils/classNames";

export function TruncatedText({ children, className }: Readonly<{ children: string; className?: string }>) {
  const ref = useRef<HTMLSpanElement>(null);
  const [truncated, setTruncated] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setTruncated(node.scrollWidth > node.clientWidth);
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [children]);

  return <span ref={ref} tabIndex={truncated ? 0 : undefined} title={truncated ? children : undefined} className={cn("block truncate", className)}>{children}</span>;
}
