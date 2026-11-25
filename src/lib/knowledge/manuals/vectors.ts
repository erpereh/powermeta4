import { readFileSync } from "node:fs";
import path from "node:path";
import { Worker } from "node:worker_threads";

import { DIMENSIONS, indexPath } from "./config";

export type VectorRank = { hash: string; score: number };

function createWorker(file: string) {
  const source = readFileSync(path.join(process.cwd(), "scripts", "kb-vector-worker.cjs"), "utf8");
  const worker = new Worker(source, {
    eval: true,
    workerData: { file, dimensions: DIMENSIONS },
    execArgv: [],
  });
  let sequence = 0;
  let failure: Error | null = null;
  const pending = new Map<
    number,
    { resolve: (value: VectorRank[]) => void; reject: (error: Error) => void }
  >();
  const failed = (error: Error) => {
    failure = error;
    for (const request of pending.values()) request.reject(error);
    pending.clear();
  };
  worker.on("error", failed);
  worker.on("exit", () => failed(new Error("El worker de búsqueda vectorial se cerró.")));
  worker.on("message", ({ id, ranked }: { id: number; ranked: VectorRank[] }) => {
    pending.get(id)?.resolve(ranked);
    pending.delete(id);
    if (!pending.size) worker.unref();
  });
  worker.unref();
  return {
    run(query: Float32Array, top: number, signal?: AbortSignal) {
      if (failure) return Promise.reject(failure);
      signal?.throwIfAborted();
      return new Promise<VectorRank[]>((resolve, reject) => {
        sequence += 1;
        const id = sequence;
        const abort = () => {
          pending.delete(id);
          if (!pending.size) worker.unref();
          reject(signal?.reason);
        };
        signal?.addEventListener("abort", abort, { once: true });
        pending.set(id, {
          resolve(value) {
            signal?.removeEventListener("abort", abort);
            resolve(value);
          },
          reject(error) {
            signal?.removeEventListener("abort", abort);
            reject(error);
          },
        });
        worker.ref();
        worker.postMessage({ id, query, top });
      });
    },
    close: () => worker.terminate(),
  };
}

let loaded: { file: string; worker: ReturnType<typeof createWorker> } | null = null;

export async function rankVectors(
  root: string,
  generation: string,
  query: Float32Array,
  top: number,
  signal?: AbortSignal,
) {
  const file = indexPath(root, generation);
  if (loaded?.file !== file) {
    if (loaded) void loaded.worker.close();
    loaded = { file, worker: createWorker(file) };
  }
  return loaded.worker.run(query, top, signal);
}
