import * as React from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function getMediaQueryList(): MediaQueryList | null {
  return typeof window.matchMedia === "function"
    ? window.matchMedia(REDUCED_MOTION_QUERY)
    : null;
}

function subscribe(onChange: () => void) {
  const mql = getMediaQueryList();
  mql?.addEventListener("change", onChange);
  return () => mql?.removeEventListener("change", onChange);
}

function getSnapshot() {
  return getMediaQueryList()?.matches ?? false;
}

function getServerSnapshot() {
  return false;
}

/**
 * Preferencia de movimiento reducido segura para hidratación: durante SSR y la
 * hidratación devuelve `false` (igual que el HTML del servidor) y tras montar
 * refleja la preferencia real del sistema. Sustituye a `useReducedMotion` de
 * `motion/react`, que lee `matchMedia` en el primer render del cliente y
 * provoca hydration mismatches.
 */
export function useReducedMotion(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
