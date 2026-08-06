import { DatabaseSync } from "node:sqlite";

import { describe, expect, it } from "vitest";

import { runMigrations } from "@/server/database/migrations";
import { cleanupExpiredIdempotencyReceipts, runIdempotent } from "@/server/database/idempotency";

describe("idempotency receipts", () => {
  it("returns the canonical result and does not repeat the operation", () => {
    const database = new DatabaseSync(":memory:");
    runMigrations(database);
    let calls = 0;

    try {
      const first = runIdempotent(database, {
        clientMutationId: "mutation-1",
        operation: "company.create",
        resourceType: "company",
        resourceId: "company-1",
        execute: () => {
          calls += 1;
          return { id: "company-1", name: "Empresa" };
        },
      });
      const second = runIdempotent(database, {
        clientMutationId: "mutation-1",
        operation: "company.create",
        resourceType: "company",
        resourceId: "company-1",
        execute: () => {
          calls += 1;
          return { id: "company-1", name: "No debe repetirse" };
        },
      });

      expect(first).toEqual(second);
      expect(calls).toBe(1);
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM idempotency_receipts").get(),
      ).toMatchObject({
        count: 1,
      });
    } finally {
      database.close();
    }
  });

  it("rolls back the receipt when the operation fails and rejects promises", () => {
    const database = new DatabaseSync(":memory:");
    runMigrations(database);

    try {
      expect(() =>
        runIdempotent(database, {
          clientMutationId: "mutation-fail",
          operation: "message.create",
          resourceType: "message",
          resourceId: "message-1",
          execute: () => {
            throw new Error("operation failed");
          },
        }),
      ).toThrow("operation failed");
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM idempotency_receipts").get(),
      ).toMatchObject({
        count: 0,
      });

      expect(() =>
        runIdempotent(database, {
          clientMutationId: "mutation-async",
          operation: "message.create",
          resourceType: "message",
          resourceId: "message-2",
          execute: () => Promise.resolve({ ok: true }),
        }),
      ).toThrow(/síncrona|synchronous/i);
    } finally {
      database.close();
    }
  });

  it("enforces the result limit, sanitizes secrets and expires receipts", () => {
    const database = new DatabaseSync(":memory:");
    runMigrations(database);
    const createdAt = new Date("2026-01-01T00:00:00.000Z");

    try {
      expect(() =>
        runIdempotent(database, {
          clientMutationId: "mutation-large",
          operation: "message.create",
          resourceType: "message",
          execute: () => ({ content: "x".repeat(70 * 1024) }),
        }),
      ).toThrow(/límite|limit/i);
      expect(() =>
        runIdempotent(database, {
          clientMutationId: "mutation-secret",
          operation: "session.create",
          resourceType: "session",
          execute: () => ({ refreshSessionId: "secret" }),
        }),
      ).toThrow(/sensibles|sensitive/i);

      runIdempotent(database, {
        clientMutationId: "mutation-expiring",
        operation: "company.create",
        resourceType: "company",
        execute: () => ({ id: "company-1" }),
        now: createdAt,
      });
      let retryCalls = 0;
      runIdempotent(database, {
        clientMutationId: "mutation-expiring-retry",
        operation: "company.create",
        resourceType: "company",
        execute: () => {
          retryCalls += 1;
          return { id: "old" };
        },
        now: createdAt,
      });
      const retried = runIdempotent(database, {
        clientMutationId: "mutation-expiring-retry",
        operation: "company.create",
        resourceType: "company",
        execute: () => {
          retryCalls += 1;
          return { id: "new" };
        },
        now: new Date("2026-02-01T00:00:01.000Z"),
      });
      expect(retried).toEqual({ id: "new" });
      expect(retryCalls).toBe(2);
      expect(
        cleanupExpiredIdempotencyReceipts(database, new Date("2026-02-01T00:00:01.000Z")),
      ).toBe(0);
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM idempotency_receipts").get(),
      ).toMatchObject({
        count: 1,
      });
    } finally {
      database.close();
    }
  });
});
