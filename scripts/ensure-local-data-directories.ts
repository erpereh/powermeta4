import { ensureLocalDataDirectories } from "../src/lib/local-database/paths";

ensureLocalDataDirectories().catch((error: unknown) => {
  console.error("No se pudo preparar el directorio de datos local.", error);
  process.exitCode = 1;
});
