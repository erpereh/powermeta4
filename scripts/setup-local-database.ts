import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

import { setupLocalDatabase } from "../src/lib/local-database/bootstrap";
import { ensureLocalDataDirectories, toSqliteConnectionUrl } from "../src/lib/local-database/paths";
import { createCompanyRepository } from "../src/lib/local-database/repositories/company-repository";

const main = async (): Promise<void> => {
  const paths = await ensureLocalDataDirectories();
  const adapter = new PrismaBetterSqlite3({ url: toSqliteConnectionUrl(paths.databaseFilePath) });
  const prisma = new PrismaClient({ adapter });
  try {
    const result = await setupLocalDatabase(createCompanyRepository(prisma));

    if (result.created) {
      console.info(
        `Bootstrap local completado para ${result.company.name} (${result.company.id}).`,
      );
    } else {
      console.info(`Bootstrap local ya existente: ${result.company.name} (${result.company.id}).`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

main().catch((error: unknown) => {
  console.error("No se pudo completar el bootstrap local.", error);
  process.exitCode = 1;
});
