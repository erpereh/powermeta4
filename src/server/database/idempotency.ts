import "server-only";

import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import { withTransaction } from "./transaction";

const RESULT_MAX_BYTES = 64 * 1024;
const RECEIPT_TTL_MS = 30 * 24 * 60 * 60 * 1000;

type IdempotentOptions<T> = {
  clientMutationId: string;
  operation: string;
  resourceType: string;
  resourceId?: string | null;
  execute: () => T;
  now?: Date;
  receipt?: {
    encode: (result: T) => unknown;
    decode: (value: unknown) => T;
  };
};

const isPromiseLike = (value: unknown): value is PromiseLike<unknown> =>
  typeof value === "object" &&
  value !== null &&
  "then" in value &&
  typeof value.then === "function";

const serializeResult = (result: unknown): string => {
  const serialized = JSON.stringify(result);
  if (!serialized) return "null";
  if (Buffer.byteLength(serialized, "utf8") > RESULT_MAX_BYTES) {
    throw new Error("El resultado idempotente supera el límite permitido.");
  }
  if (
    /(jsession|refreshsession|cookie|password|token|credential|authorization)/i.test(serialized)
  ) {
    throw new Error("El resultado idempotente contiene datos sensibles.");
  }
  return serialized;
};

export const runIdempotent = <T>(database: DatabaseSync, options: IdempotentOptions<T>): T =>
  withTransaction(database, () => {
    const currentTime = options.now ?? new Date();
    const currentTimeIso = currentTime.toISOString();
    database
      .prepare("DELETE FROM idempotency_receipts WHERE expires_at IS NOT NULL AND expires_at <= ?")
      .run(currentTimeIso);
    const existing = database
      .prepare(
        "SELECT result_json, resource_type, resource_id FROM idempotency_receipts WHERE client_mutation_id = ? AND operation = ?",
      )
      .get(options.clientMutationId, options.operation);
    if (existing) {
      if (
        existing.resource_type !== options.resourceType ||
        (existing.resource_id ?? null) !== (options.resourceId ?? null)
      ) {
        throw new Error("El clientMutationId ya está asociado a otro recurso.");
      }
    }
    if (existing && typeof existing.result_json === "string") {
      const storedResult = JSON.parse(existing.result_json) as unknown;
      return options.receipt ? options.receipt.decode(storedResult) : (storedResult as T);
    }

    const result = options.execute();
    if (isPromiseLike(result)) throw new Error("La operación idempotente debe ser síncrona.");
    const createdAt = currentTimeIso;
    const expiresAt = new Date(currentTime.getTime() + RECEIPT_TTL_MS).toISOString();
    database
      .prepare(
        "INSERT INTO idempotency_receipts (id, client_mutation_id, operation, resource_type, resource_id, result_json, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      )
      .run(
        randomUUID(),
        options.clientMutationId,
        options.operation,
        options.resourceType,
        options.resourceId ?? null,
        serializeResult(options.receipt ? options.receipt.encode(result) : result),
        createdAt,
        expiresAt,
      );
    return result;
  });

export const cleanupExpiredIdempotencyReceipts = (
  database: DatabaseSync,
  now = new Date(),
): number =>
  database
    .prepare("DELETE FROM idempotency_receipts WHERE expires_at IS NOT NULL AND expires_at <= ?")
    .run(now.toISOString()).changes as number;
