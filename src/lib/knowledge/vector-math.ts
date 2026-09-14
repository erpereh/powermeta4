/**
 * Small numeric helpers for storing embedding vectors as SQLite BLOBs and
 * comparing them without any native/vector-search extension (the app's
 * sqlite client has extension loading disabled, see
 * src/server/database/client.ts).
 */

export const vectorToBuffer = (vector: readonly number[]): Buffer => {
  const floats = new Float32Array(vector);
  return Buffer.from(floats.buffer, floats.byteOffset, floats.byteLength);
};

export const bufferToVector = (buffer: Uint8Array): Float32Array => {
  const copy = Uint8Array.prototype.slice.call(buffer);
  return new Float32Array(copy.buffer, copy.byteOffset, copy.byteLength / Float32Array.BYTES_PER_ELEMENT);
};

export const cosineSimilarity = (
  a: ArrayLike<number>,
  b: ArrayLike<number>,
): number => {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i += 1) {
    const av = a[i] ?? 0;
    const bv = b[i] ?? 0;
    dot += av * bv;
    normA += av * av;
    normB += bv * bv;
  }
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
};
