import "server-only";

let snapshotLock = false;
let exclusiveMaintenance = false;
let activeWriters = 0;
const waiters = new Set<() => void>();

const wakeWaiters = () => {
  for (const resolve of waiters) resolve();
  waiters.clear();
};

const waitForStateChange = () =>
  new Promise<void>((resolve) => {
    waiters.add(resolve);
  });

const waitForNoWriters = async () => {
  while (activeWriters > 0) await waitForStateChange();
};

export const withRepositoryWrite = async <T>(operation: () => T | Promise<T>): Promise<T> => {
  while (snapshotLock || exclusiveMaintenance) await waitForStateChange();
  activeWriters += 1;
  try {
    return await operation();
  } finally {
    activeWriters -= 1;
    wakeWaiters();
  }
};

export const withBackupSnapshotLock = async <T>(operation: () => Promise<T>): Promise<T> => {
  if (snapshotLock || exclusiveMaintenance) {
    throw new Error("La aplicación está ocupada con otra operación de backup.");
  }
  snapshotLock = true;
  try {
    await waitForNoWriters();
    return await operation();
  } finally {
    snapshotLock = false;
    wakeWaiters();
  }
};

export const withMaintenanceLock = async <T>(operation: () => Promise<T>): Promise<T> => {
  if (snapshotLock || exclusiveMaintenance) {
    throw new Error("La aplicación está ocupada con otra operación de backup.");
  }
  exclusiveMaintenance = true;
  try {
    await waitForNoWriters();
    return await operation();
  } finally {
    exclusiveMaintenance = false;
    wakeWaiters();
  }
};

export const isMaintenanceLocked = (): boolean => snapshotLock || exclusiveMaintenance;

export const assertMaintenanceAvailable = (): void => {
  if (snapshotLock || exclusiveMaintenance) {
    throw new Error("La aplicación está ocupada con otra operación de backup.");
  }
};

export const resetMaintenanceLockForTests = (): void => {
  snapshotLock = false;
  exclusiveMaintenance = false;
  activeWriters = 0;
  wakeWaiters();
};
