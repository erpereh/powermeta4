/**
 * Genera el catálogo de servicios SOAP Meta4 publicados a partir de las fuentes
 * Java generadas por Meta4 que conserva la copia del portal
 * (`clon_portal/portal/WEB-INF/classes/com/meta4/soapservices/services/rpc`).
 *
 * No usa red ni base de datos: solo lee ficheros del repositorio.
 * Salidas:
 *  - docs/portal/contratos/soap-servicios.json (todos los servicios)
 *  - docs/portal/contratos/soap-servicios.md   (resumen legible)
 *  - src/lib/portal/soap/catalog.generated.ts   (servicios usados por /portal)
 */
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

import { formatGenerated } from "./format";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const SOURCES = path.join(
  ROOT,
  "clon_portal/portal/WEB-INF/classes/com/meta4/soapservices/services/rpc",
);
const WSDD = path.join(ROOT, "clon_portal/portal/WEB-INF/server-config.wsdd");

/** Servicios que consume /portal. Ampliar solo con un uso real documentado. */
const USED_SERVICES = [
  "CSP_CONSULTA_ORO_NEW",
  "CSP_CONSULTA_ORO_INTRAN_WU",
  "CSP_CONSULTA_LIST_EMPL",
  "CSP_CONSULTA_WORK_UNIT",
  "CSP_SERVICIO_CV",
  "PGCO_ES_WS_VALIDATIONS",
  "SNTC_AD_POPULATION",
  "SNTC_AD_MANAGERS",
  "M4_PNET_INITIAL_DATA",
] as const;

type ArgKind = "string" | "date" | "number" | "block";
type ServiceArg = { name: string; kind: ArgKind; node?: string };
type OutputBlock = {
  field: string;
  node: string;
  recordSet: string;
  items: string[];
  children: OutputBlock[];
};
type ServiceOperation = {
  operation: string;
  methodNode: string;
  methodName: string;
  args: ServiceArg[];
  blocks: OutputBlock[];
};
type ServiceContract = {
  service: string;
  m4Object: string;
  deployedInWsdd: boolean;
  operations: ServiceOperation[];
};

const read = (file: string): string => readFileSync(file, "latin1");

type BlockInfo = Omit<OutputBlock, "field">;

const blockInfo = (dir: string, blockClass: string, depth = 0): BlockInfo | null => {
  if (depth > 6) return null;
  const blockFile = path.join(dir, `${blockClass}.java`);
  let block: string;
  try {
    block = read(blockFile);
  } catch {
    return null;
  }
  const node = /NODE_NAME = "([^"]+)"/.exec(block)?.[1] ?? "";
  const recordMatch = /(\w+Record)\[\]\s+(\w+RecordSet)\s*=/.exec(block);
  if (!recordMatch) return { node, recordSet: "", items: [], children: [] };
  const [, recordClass, recordSet] = recordMatch;
  let record: string;
  try {
    record = read(path.join(dir, `${recordClass}.java`));
  } catch {
    return { node, recordSet, items: [], children: [] };
  }
  const items = [...record.matchAll(/\/\* item (\w+) \*\//g)].map((match) => match[1]);
  const children = [...record.matchAll(/(?:public|private) (\w+Block) (\w+) = null;/g)].flatMap(
    (match) => {
      const info = blockInfo(dir, match[1], depth + 1);
      return info ? [{ field: match[2], ...info }] : [];
    },
  );
  return { node, recordSet, items, children };
};

const parseArgs = (raw: string, dir: string): ServiceArg[] =>
  raw
    .split(",")
    .map((part) => part.trim().replace(/\s+/g, " "))
    .filter(Boolean)
    .map((part) => {
      const [type, name] = part.split(" ");
      if (type === "String") return { name, kind: "string" };
      if (type === "Calendar") return { name, kind: "date" };
      if (type === "double" || type === "Double" || type === "int" || type === "BigDecimal") {
        return { name, kind: "number" };
      }
      const info = blockInfo(dir, type);
      return { name, kind: "block", node: info?.node ?? name };
    });

const parseOutputBlocks = (dir: string, outputClass: string): OutputBlock[] => {
  let output: string;
  try {
    output = read(path.join(dir, `${outputClass}.java`));
  } catch {
    return [];
  }
  return [...output.matchAll(/(?:public|private) (\w+Block) (\w+) = null;/g)].flatMap((match) => {
    const info = blockInfo(dir, match[1]);
    return info ? [{ field: match[2], ...info }] : [];
  });
};

const describeBlocks = (blocks: readonly OutputBlock[]): string =>
  blocks
    .map((block) =>
      block.children.length > 0
        ? `${block.node} (${block.items.length}) › [${describeBlocks(block.children)}]`
        : `${block.node} (${block.items.length})`,
    )
    .join(", ");

const parseService = (dir: string, deployed: Set<string>): ServiceContract | null => {
  const serviceFile = readdirSync(dir).find((file) => file.endsWith("Service.java"));
  if (!serviceFile) return null;
  const source = read(path.join(dir, serviceFile));
  const m4Object = /M4OBJECT_NAME = "([^"]+)"/.exec(source)?.[1] ?? "";
  const service = path.basename(dir).toUpperCase();
  const operations: ServiceOperation[] = [];
  const pattern =
    /public\s+(\w+)\s+(\w+)\s*\(([\s\S]*?)\)\s*throws M4SoapException[\s\S]*?METHOD_NODE = "([^"]+)";\s*final String METHOD_NAME = "([^"]+)"/g;
  for (const match of source.matchAll(pattern)) {
    const [, outputClass, operation, rawArgs, methodNode, methodName] = match;
    operations.push({
      operation,
      methodNode,
      methodName,
      args: parseArgs(rawArgs, dir),
      blocks: parseOutputBlocks(dir, outputClass),
    });
  }
  return { service, m4Object, deployedInWsdd: deployed.has(service), operations };
};

const main = () => {
  const wsdd = read(WSDD);
  const deployed = new Set([...wsdd.matchAll(/<service name="([^"]+)"/g)].map((m) => m[1]));
  const services = readdirSync(SOURCES)
    .map((name) => path.join(SOURCES, name))
    .filter((dir) => statSync(dir).isDirectory())
    .flatMap((dir) => {
      const contract = parseService(dir, deployed);
      return contract ? [contract] : [];
    })
    .sort((a, b) => a.service.localeCompare(b.service));

  const docsDir = path.join(ROOT, "docs/portal/contratos");
  mkdirSync(docsDir, { recursive: true });
  writeFileSync(
    path.join(docsDir, "soap-servicios.json"),
    `${JSON.stringify({ source: path.relative(ROOT, SOURCES).replaceAll("\\", "/"), services }, null, 2)}\n`,
  );

  const lines = [
    "# Servicios SOAP Meta4 publicados (copia del portal)",
    "",
    "Generado por `npm run portal:soap-catalog` desde las fuentes Java que Meta4 genera al",
    "publicar un método de negocio como servicio (`WEB-INF/classes/.../rpc`). Cada servicio",
    "ejecuta el método con la sesión Meta4 de quien llama. La copia puede no coincidir con",
    "el servidor vivo: powermeta4 comprueba la disponibilidad en cada llamada.",
    "",
    "| Servicio | Objeto | wsdd | Operación → método (argumentos) | Nodos de salida (ítems) |",
    "| --- | --- | --- | --- | --- |",
    ...services.flatMap((service) =>
      service.operations
        .filter(
          (operation) =>
            operation.methodName !== "ROOTLOAD" && operation.methodName !== "SYS_LOAD_SERVER",
        )
        .map(
          (operation) =>
            `| ${service.service} | ${service.m4Object} | ${service.deployedInWsdd ? "sí" : "no"} | ${operation.operation} → ${operation.methodNode}.${operation.methodName} (${operation.args.map((arg) => (arg.kind === "block" ? `${arg.name}: bloque` : arg.name)).join(", ") || "—"}) | ${describeBlocks(operation.blocks) || "—"} |`,
        ),
    ),
    "",
  ];
  writeFileSync(path.join(docsDir, "soap-servicios.md"), lines.join("\n"));

  const used = services.filter((service) =>
    (USED_SERVICES as readonly string[]).includes(service.service),
  );
  const missing = USED_SERVICES.filter((name) => !used.some((service) => service.service === name));
  if (missing.length > 0) throw new Error(`Faltan fuentes para: ${missing.join(", ")}`);

  const generated = [
    "// Generado por scripts/portal/soap-catalog.ts. No editar a mano.",
    'import type { SoapServiceContract } from "./types";',
    "",
    `export const SOAP_CATALOG = ${JSON.stringify(
      Object.fromEntries(used.map((service) => [service.service, service])),
      null,
      2,
    )} as const satisfies Record<string, SoapServiceContract>;`,
    "",
    "export type SoapServiceName = keyof typeof SOAP_CATALOG;",
    "",
  ];
  const generatedFile = path.join(ROOT, "src/lib/portal/soap/catalog.generated.ts");
  mkdirSync(path.dirname(generatedFile), { recursive: true });
  writeFileSync(generatedFile, generated.join("\n"));
  formatGenerated([
    path.join(docsDir, "soap-servicios.json"),
    path.join(docsDir, "soap-servicios.md"),
    generatedFile,
  ]);

  console.log(`Servicios: ${services.length}; usados por /portal: ${used.length}.`);
};

main();
