/** @vitest-environment jsdom */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Avatar } from "./avatar";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("avatar con fotografía opcional", () => {
  it("conserva iniciales sin imagen y cuando la foto falla", async () => {
    class FailedImage extends EventTarget {
      set src(_value: string) {
        queueMicrotask(() => this.dispatchEvent(new Event("error")));
      }
    }
    vi.stubGlobal("Image", FailedImage);
    const { rerender } = render(<Avatar name="Ana López" />);
    expect(screen.getByText("AL").getAttribute("aria-hidden")).toBe("true");
    rerender(<Avatar name="Ana López" src="/api/portal/photos/1" />);
    await waitFor(() =>
      expect(screen.getByText("AL").getAttribute("data-slot")).toBe("avatar-fallback"),
    );
  });
  it("muestra una imagen cargada con alt vacío junto al nombre visible", async () => {
    class LoadedImage extends EventTarget {
      complete = true;
      naturalWidth = 1;
      set src(_value: string) {
        queueMicrotask(() => this.dispatchEvent(new Event("load")));
      }
    }
    vi.stubGlobal("Image", LoadedImage);
    const { container } = render(<Avatar name="Ana" src="/api/portal/photos/1" />);
    await waitFor(() =>
      expect(container.querySelector("img")?.getAttribute("src")).toBe("/api/portal/photos/1"),
    );
    expect(container.querySelector("img")?.getAttribute("alt")).toBe("");
    expect(screen.queryByText("A")).toBeNull();
  });
});
