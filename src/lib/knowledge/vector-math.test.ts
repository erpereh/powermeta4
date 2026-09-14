import { describe, expect, it } from "vitest";

import { bufferToVector, cosineSimilarity, vectorToBuffer } from "./vector-math";

describe("vector-math", () => {
  it("round-trips a vector through a buffer", () => {
    const original = [0.1, -0.25, 3.5, 0, -1.9999];
    const buffer = vectorToBuffer(original);
    const restored = bufferToVector(new Uint8Array(buffer));
    expect(restored.length).toBe(original.length);
    for (const [index, value] of original.entries()) {
      expect(restored[index]).toBeCloseTo(value, 4);
    }
  });

  it("round-trips through a copied Uint8Array, as sqlite BLOB reads return", () => {
    const original = [1, 2, 3, 4];
    const buffer = vectorToBuffer(original);
    // Simulate node:sqlite handing back a freshly-allocated Uint8Array whose
    // underlying ArrayBuffer is not necessarily byte-aligned/offset-free.
    const copy = new Uint8Array(buffer.length + 8);
    copy.set(buffer, 4);
    const sliced = copy.subarray(4, 4 + buffer.length);
    const restored = bufferToVector(sliced);
    expect(Array.from(restored)).toEqual(original);
  });

  it("computes cosine similarity of 1 for identical vectors", () => {
    expect(cosineSimilarity([1, 2, 3], [1, 2, 3])).toBeCloseTo(1, 6);
  });

  it("computes cosine similarity of 0 for orthogonal vectors", () => {
    expect(cosineSimilarity([1, 0], [0, 1])).toBeCloseTo(0, 6);
  });

  it("computes cosine similarity of -1 for opposite vectors", () => {
    expect(cosineSimilarity([1, 2], [-1, -2])).toBeCloseTo(-1, 6);
  });

  it("returns 0 for mismatched lengths or empty vectors", () => {
    expect(cosineSimilarity([1, 2], [1])).toBe(0);
    expect(cosineSimilarity([], [])).toBe(0);
  });

  it("returns 0 when either vector is all zeros", () => {
    expect(cosineSimilarity([0, 0], [1, 1])).toBe(0);
  });
});
