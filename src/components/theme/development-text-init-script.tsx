"use client";

import { useLayoutEffect } from "react";

import {
  DEVELOPMENT_TEXT_ATTRIBUTE,
  DEVELOPMENT_TEXT_INIT_SCRIPT,
  DEVELOPMENT_TEXT_STORAGE_KEY,
} from "@/lib/theme/development-text";

export function DevelopmentTextInitScript() {
  useLayoutEffect(() => {
    try {
      document.documentElement.setAttribute(
        DEVELOPMENT_TEXT_ATTRIBUTE,
        String(localStorage.getItem(DEVELOPMENT_TEXT_STORAGE_KEY) !== "false"),
      );
    } catch {
      // Keep the default or the user's in-memory choice when storage is unavailable.
    }
  }, []);

  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: DEVELOPMENT_TEXT_INIT_SCRIPT }}
    />
  );
}
