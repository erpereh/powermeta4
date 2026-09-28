"use client";

import { useLayoutEffect } from "react";

import { ACCENT_INIT_SCRIPT, ACCENT_STORAGE_KEY, isAccentId } from "@/lib/theme/accent";

export function AccentInitScript() {
  useLayoutEffect(() => {
    try {
      const accent = localStorage.getItem(ACCENT_STORAGE_KEY);
      if (isAccentId(accent)) document.documentElement.setAttribute("data-accent", accent);
    } catch {
      // Keep the current accent when browser storage is unavailable.
    }
  }, []);

  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: ACCENT_INIT_SCRIPT }}
    />
  );
}
