/**
 * In-process FIFO queue. Enough for a single Node instance.
 * Replace the implementation if several processes write Hire.xls.
 */
export type SerializedTask = <T>(task: () => Promise<T>) => Promise<T>;

export const createSerializedQueue = (): SerializedTask => {
  let tail: Promise<void> = Promise.resolve();

  return <T>(task: () => Promise<T>): Promise<T> => {
    const run = tail.then(task, task);
    tail = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  };
};

export const hireExecutionQueue: SerializedTask = createSerializedQueue();
