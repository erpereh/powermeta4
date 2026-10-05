import { execSync } from "node:child_process";

/** Aplica oxfmt a los ficheros generados para que pasen `npm run lint`. */
export const formatGenerated = (files: readonly string[]): void => {
  execSync(`npx oxfmt ${files.map((file) => JSON.stringify(file)).join(" ")}`, { stdio: "ignore" });
};
