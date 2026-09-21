import { describe, expect, it } from "vitest";

import { createSerializedQueue } from "./mutex";

describe("createSerializedQueue", () => {
  it("runs overlapping tasks in order", async () => {
    const serialize = createSerializedQueue();
    const order: number[] = [];

    const first = serialize(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
      order.push(1);
      return "one";
    });
    const second = serialize(async () => {
      order.push(2);
      return "two";
    });

    await expect(Promise.all([first, second])).resolves.toEqual(["one", "two"]);
    expect(order).toEqual([1, 2]);
  });
});
