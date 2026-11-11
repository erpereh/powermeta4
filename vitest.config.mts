import path from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "server-only": path.resolve(process.cwd(), "src/test/server-only-stub.ts"),
    },
  },
  test: {
    environment: "node",
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          include: ["src/**/*.test.ts"],
          exclude: ["src/lib/meta4/hire/excel.test.ts"],
          maxWorkers: 2,
          sequence: { groupOrder: 0 },
        },
      },
      {
        extends: true,
        test: {
          name: "ui",
          include: ["src/**/*.test.tsx"],
          maxWorkers: 1,
          fileParallelism: false,
          sequence: { groupOrder: 1 },
        },
      },
      {
        extends: true,
        test: {
          name: "excel-native",
          include: ["src/lib/meta4/hire/excel.test.ts"],
          maxWorkers: 1,
          fileParallelism: false,
          sequence: { groupOrder: 2 },
          testTimeout: 190_000,
        },
      },
    ],
  },
});
