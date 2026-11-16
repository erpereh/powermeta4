export const LIMITS = {
  files: 20,
  fileBytes: 16 * 1024 * 1024,
  requestBytes: 32 * 1024 * 1024,
  expandedBytes: 128 * 1024 * 1024,
  rows: 100_000,
  cells: 2_000_000,
} as const;
