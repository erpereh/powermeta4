import { closeDatabase, createDatabase } from "../src/server/database/client";
import { runMigrations } from "../src/server/database/migrations";
import { transitionLegacyDatabase } from "./transition-local-database";

const main = async () => {
  await transitionLegacyDatabase();
  const database = createDatabase();
  try {
    runMigrations(database);
  } finally {
    closeDatabase();
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
