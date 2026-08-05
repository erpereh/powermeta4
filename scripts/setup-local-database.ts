import { setupLocalDatabase } from "../src/lib/local-database/bootstrap";

const result = await setupLocalDatabase();

if (result.created) {
  console.info(`Bootstrap local completado para ${result.company.name} (${result.company.id}).`);
} else {
  console.info(`Bootstrap local ya existente: ${result.company.name} (${result.company.id}).`);
}
