import { describe, expect, it } from "vitest";

import { streamMockResponse } from "@/lib/mock-runtime";

describe("mock response stream", () => {
  it("yields cumulative response snapshots", async () => {
    const snapshots: string[] = [];

    for await (const snapshot of streamMockResponse("Analiza este caso", { delayMs: 0 })) {
      snapshots.push(snapshot);
    }

    expect(snapshots.length).toBeGreaterThan(1);
    expect(snapshots.at(-1)).toContain("Analiza este caso");
    expect(
      snapshots.every(
        (snapshot, index) => index === 0 || snapshot.startsWith(snapshots[index - 1]),
      ),
    ).toBe(true);
  });

  it("stops cleanly when its abort signal is cancelled", async () => {
    const controller = new AbortController();
    const iterator = streamMockResponse("Genera un informe largo", {
      delayMs: 20,
      signal: controller.signal,
    });

    const first = await iterator.next();
    controller.abort();
    const second = await iterator.next();

    expect(first.done).toBe(false);
    expect(second.done).toBe(true);
  });
});
