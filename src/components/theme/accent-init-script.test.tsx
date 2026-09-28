/** @vitest-environment jsdom */

import { act, StrictMode, useLayoutEffect } from "react";
import { createRoot, hydrateRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ACCENT_INIT_SCRIPT, ACCENT_STORAGE_KEY, DEFAULT_ACCENT } from "@/lib/theme/accent";

// Exercise the React runtime Next uses, including its warning for executable client scripts.
const { requireNext } = await vi.hoisted(async () => {
  const { createRequire } = await import("node:module");
  return { requireNext: createRequire(import.meta.url) };
});

vi.mock("react", () => {
  const react: typeof import("react") = requireNext("next/dist/compiled/react");
  return react;
});
vi.mock("react/jsx-runtime", () => {
  const runtime: typeof import("react/jsx-runtime") = requireNext(
    "next/dist/compiled/react/jsx-runtime",
  );
  return runtime;
});
vi.mock("react-dom/client", () => {
  const client: typeof import("react-dom/client") = requireNext(
    "next/dist/compiled/react-dom/client",
  );
  return client;
});
vi.mock("react-dom/server", () => {
  const server: typeof import("react-dom/server") = requireNext(
    "next/dist/compiled/react-dom/server",
  );
  return server;
});

import { AccentInitScript } from "./accent-init-script";

let root: Root | undefined;
const errors: unknown[][] = [];
const recoverableErrors: unknown[] = [];
const beforePaintAccents: (string | null)[] = [];

function PaintProbe() {
  useLayoutEffect(() => {
    beforePaintAccents.push(document.documentElement.getAttribute("data-accent"));
  }, []);
  return <main>Contenido</main>;
}

function TestDocument() {
  return (
    <StrictMode>
      <html lang="es" data-accent={DEFAULT_ACCENT} suppressHydrationWarning>
        <head>
          <AccentInitScript />
        </head>
        <body>
          <PaintProbe />
        </body>
      </html>
    </StrictMode>
  );
}

beforeEach(() => {
  localStorage.clear();
  errors.length = 0;
  recoverableErrors.length = 0;
  beforePaintAccents.length = 0;
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  vi.spyOn(console, "error").mockImplementation((...args) => errors.push(args));
  vi.spyOn(console, "warn").mockImplementation((...args) => errors.push(args));
});

afterEach(async () => {
  await act(() => root?.unmount());
  root = undefined;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("accent initialization before paint", () => {
  it.each([
    { name: "valid", saved: "violet", inaccessible: false, expected: "violet" },
    { name: "absent", saved: null, inaccessible: false, expected: DEFAULT_ACCENT },
    { name: "invalid", saved: "not-an-accent", inaccessible: false, expected: DEFAULT_ACCENT },
    { name: "inaccessible", saved: null, inaccessible: true, expected: DEFAULT_ACCENT },
  ])(
    "handles $name storage during parsing, hydration and Strict Mode remount",
    async ({ saved, inaccessible, expected }) => {
      if (saved !== null) localStorage.setItem(ACCENT_STORAGE_KEY, saved);
      if (inaccessible) {
        vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
          throw new DOMException("Storage unavailable", "SecurityError");
        });
      }

      const browserWindow = window;
      vi.stubGlobal("window", undefined);
      let html: string;
      try {
        html = `<!DOCTYPE html>${renderToString(<TestDocument />)}`;
      } finally {
        vi.stubGlobal("window", browserWindow);
      }

      // Parsing executes the SSR script before React or any client effects run.
      document.open();
      document.write(html);
      document.close();
      expect(document.head.querySelector("script")?.getAttribute("type")).toBe("text/javascript");
      expect(document.head.querySelector("script")?.textContent).toBe(ACCENT_INIT_SCRIPT);
      expect(document.documentElement.getAttribute("data-accent")).toBe(expected);

      const onRecoverableError = (error: unknown) => recoverableErrors.push(error);
      await act(async () => {
        root = hydrateRoot(document, <TestDocument />, { onRecoverableError });
      });
      expect(document.documentElement.getAttribute("data-accent")).toBe(expected);
      expect(beforePaintAccents.length).toBeGreaterThan(0);
      expect(beforePaintAccents.every((accent) => accent === expected)).toBe(true);

      await act(() => root?.unmount());
      root = undefined;
      beforePaintAccents.length = 0;
      document.documentElement.setAttribute("data-accent", DEFAULT_ACCENT);
      await act(() => {
        root = createRoot(document, { onRecoverableError });
        root.render(<TestDocument />);
      });
      expect(document.head.querySelector("script")?.getAttribute("type")).toBe("text/plain");
      expect(document.documentElement.getAttribute("data-accent")).toBe(expected);
      expect(beforePaintAccents.length).toBeGreaterThan(0);
      expect(beforePaintAccents.every((accent) => accent === expected)).toBe(true);
      expect(recoverableErrors).toEqual([]);
      expect(errors).toEqual([]);
    },
  );
});
