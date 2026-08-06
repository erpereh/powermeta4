export type StreamingPersistenceScheduler = {
  push: (content: string, persist: (content: string) => Promise<void>) => void;
  flush: (persist: (content: string) => Promise<void>) => Promise<void>;
  dispose: () => void;
};

type SchedulerOptions = {
  intervalMs?: number;
  minDelta?: number;
};

export const createStreamingPersistenceScheduler = ({
  intervalMs = 1500,
  minDelta = 1024,
}: SchedulerOptions = {}): StreamingPersistenceScheduler => {
  let latestContent = "";
  let persistedContent = "";
  let timer: ReturnType<typeof setTimeout> | null = null;
  let disposed = false;
  let flushFlight: Promise<void> | null = null;
  let pendingPersist: ((content: string) => Promise<void>) | null = null;

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
    timer = null;
  };

  const flush = async (persist: (content: string) => Promise<void>): Promise<void> => {
    if (disposed) return;
    pendingPersist = persist;
    clearTimer();
    if (flushFlight) {
      await flushFlight;
      if (latestContent !== persistedContent && pendingPersist) await flush(pendingPersist);
      return;
    }
    if (latestContent === persistedContent) return;
    const content = latestContent;
    flushFlight = persist(content).then(() => {
      persistedContent = content;
    });
    try {
      await flushFlight;
    } finally {
      flushFlight = null;
    }
    if (latestContent !== persistedContent && pendingPersist) await flush(pendingPersist);
  };

  const schedule = () => {
    if (timer || disposed) return;
    timer = setTimeout(() => {
      timer = null;
      if (pendingPersist) void flush(pendingPersist).catch(() => undefined);
    }, intervalMs);
  };

  return {
    push: (content, persist) => {
      if (disposed || content === latestContent) return;
      latestContent = content;
      pendingPersist = persist;
      if (latestContent.length - persistedContent.length >= minDelta) void flush(persist);
      else schedule();
    },
    flush,
    dispose: () => {
      disposed = true;
      clearTimer();
      pendingPersist = null;
    },
  };
};
