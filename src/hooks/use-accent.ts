import * as React from "react";

import {
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  isAccentId,
  type AccentId,
} from "@/lib/theme/accent";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): AccentId {
  const value = document.documentElement.getAttribute("data-accent");
  return isAccentId(value) ? value : DEFAULT_ACCENT;
}

function getServerSnapshot(): AccentId {
  return DEFAULT_ACCENT;
}

function applyAccent(accent: AccentId) {
  document.documentElement.setAttribute("data-accent", accent);
  try {
    localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  } catch {
    // Sin almacenamiento disponible el acento solo dura esta sesión.
  }
  for (const listener of listeners) listener();
}

/** Acento activo (seguro para hidratación) y su setter persistente. */
export function useAccent(): readonly [AccentId, (accent: AccentId) => void] {
  const accent = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [accent, applyAccent] as const;
}
