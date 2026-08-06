import { afterEach, describe, expect, it } from "vitest";

import {
  isMaintenanceLocked,
  resetMaintenanceLockForTests,
  withBackupSnapshotLock,
  withRepositoryWrite,
} from "@/lib/backups/maintenance-lock";

const tick = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

afterEach(() => resetMaintenanceLockForTests());

describe("application write locks", () => {
  it("waits repository writes only while the snapshot callback runs", async () => {
    let releaseWriter!: () => void;
    const writerReleased = new Promise<void>((resolve) => {
      releaseWriter = resolve;
    });
    let firstWriterStarted = false;
    let secondWriterStarted = false;

    const firstWriter = withRepositoryWrite(async () => {
      firstWriterStarted = true;
      await writerReleased;
    });
    await tick();
    expect(firstWriterStarted).toBe(true);

    let snapshotCallbackRan = false;
    const snapshot = withBackupSnapshotLock(async () => {
      snapshotCallbackRan = true;
      expect(isMaintenanceLocked()).toBe(true);
    });
    const secondWriter = withRepositoryWrite(async () => {
      secondWriterStarted = true;
    });
    await tick();
    expect(snapshotCallbackRan).toBe(false);
    expect(secondWriterStarted).toBe(false);

    releaseWriter();
    await Promise.all([firstWriter, snapshot, secondWriter]);
    expect(snapshotCallbackRan).toBe(true);
    expect(secondWriterStarted).toBe(true);
    expect(isMaintenanceLocked()).toBe(false);
  });

  it("always releases the snapshot lock after backup failure", async () => {
    await expect(
      withBackupSnapshotLock(async () => {
        throw new Error("snapshot failed");
      }),
    ).rejects.toThrow("snapshot failed");
    expect(isMaintenanceLocked()).toBe(false);
    await expect(withRepositoryWrite(async () => "available")).resolves.toBe("available");
  });
});
