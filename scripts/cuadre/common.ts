import { getPeopleNetPool } from "../../src/lib/peoplenet/client";
export function loadEnvironment(): void {
  for (const filename of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(filename);
    } catch {
      /* Optional when configured by the host. */
    }
  }
}
export async function execute(operation: () => Promise<void>): Promise<void> {
  loadEnvironment();
  try {
    await operation();
  } catch (error) {
    console.error(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.name : "UnknownError",
        instruction:
          "Comprueba los argumentos, conexión y guía docs/automatizacion-reunion/IMPLEMENTATION.md. No compartas credenciales ni logs SQL.",
      }),
    );
    process.exitCode = 1;
  } finally {
    try {
      const pool = await getPeopleNetPool();
      await pool.close();
    } catch {
      /* Configuration/connectivity failures have already been reported. */
    }
  }
}
export function societyArgument(): string {
  const society = process.argv[2];
  if (!["CYC", "IBER", "COLL"].includes(society)) throw new Error("Sociedad inválida.");
  return society;
}
