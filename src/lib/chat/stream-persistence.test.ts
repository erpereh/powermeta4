import { describe, expect, it } from "vitest";

import { createStreamingPersistenceScheduler } from "@/lib/chat/stream-persistence";

describe("stream persistence scheduler", () => {
  it("does not persist every token and flushes the latest content", async () => {
    const persisted: string[] = [];
    const scheduler = createStreamingPersistenceScheduler({ intervalMs: 10, minDelta: 100 });

    scheduler.push("a", async (content) => {
      persisted.push(content);
    });
    scheduler.push("ab", async (content) => {
      persisted.push(content);
    });
    scheduler.push("abc", async (content) => {
      persisted.push(content);
    });
    expect(persisted).toEqual([]);

    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(persisted).toEqual(["abc"]);

    scheduler.push("abc", async (content) => {
      persisted.push(content);
    });
    await scheduler.flush(async (content) => {
      persisted.push(content);
    });
    expect(persisted).toEqual(["abc"]);
    scheduler.dispose();
  });

  it("cleans its timer and performs a final flush", async () => {
    const persisted: string[] = [];
    const scheduler = createStreamingPersistenceScheduler({ intervalMs: 1000, minDelta: 100 });
    scheduler.push("final", async (content) => {
      persisted.push(content);
    });
    await scheduler.flush(async (content) => {
      persisted.push(content);
    });
    scheduler.dispose();
    expect(persisted).toEqual(["final"]);
  });
});
