import { vi } from "vitest";

/** jsdom has no layout; measure the real beUI virtual table with a synthetic viewport. */
export function mockPortalLayout(width = 1200) {
  const rect = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: width,
    bottom: 800,
    width,
    height: 800,
    toJSON: () => ({}),
  };
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(() => rect);
  for (const name of ["clientWidth", "offsetWidth"] as const)
    vi.spyOn(HTMLElement.prototype, name, "get").mockReturnValue(width);
  for (const name of ["clientHeight", "offsetHeight"] as const)
    vi.spyOn(HTMLElement.prototype, name, "get").mockReturnValue(800);
  vi.stubGlobal(
    "ResizeObserver",
    class implements ResizeObserver {
      constructor(private callback: ResizeObserverCallback) {}
      observe(target: Element) {
        this.callback(
          [
            {
              target,
              contentRect: rect,
              borderBoxSize: [],
              contentBoxSize: [],
              devicePixelContentBoxSize: [],
            },
          ],
          this,
        );
      }
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  );
}
