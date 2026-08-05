import "server-only";

let activeMaintenance: Promise<unknown> | null = null;

export const withMaintenanceLock = async <T>(operation: () => Promise<T>): Promise<T> => {
  if (activeMaintenance)
    throw new Error("La aplicación está ocupada con otra operación de backup.");
  let release: () => void = () => undefined;
  activeMaintenance = new Promise<void>((resolve) => {
    release = resolve;
  });
  try {
    return await operation();
  } finally {
    release();
    activeMaintenance = null;
  }
};

export const isMaintenanceLocked = (): boolean => activeMaintenance !== null;

export const assertMaintenanceAvailable = (): void => {
  if (activeMaintenance)
    throw new Error("La aplicación está ocupada con otra operación de backup.");
};
