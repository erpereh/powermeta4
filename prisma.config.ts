import { loadEnvConfig } from "@next/env";
import { defineConfig } from "prisma/config";

import { resolveLocalDataPaths, toSqliteConnectionUrl } from "./src/lib/local-database/paths";

loadEnvConfig(process.cwd());

const localDataPaths = resolveLocalDataPaths();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: toSqliteConnectionUrl(localDataPaths.databaseFilePath),
  },
});
