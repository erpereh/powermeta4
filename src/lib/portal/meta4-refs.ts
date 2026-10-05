import type { PortalFeature } from "./types";

/** Objeto Meta4 (T3) y nodos que una pantalla del portal lee o escribe. */
export type Meta4Reference = {
  readonly object: string;
  readonly nodes: readonly string[];
  /** Pantallas del registro que lo usan. */
  readonly features: readonly string[];
  readonly usage: readonly ("read" | "write" | "catalog")[];
};

// `OBJETO`, `OBJETO!NODO` u `OBJETO!NODO.METODO`; nunca el método ni texto en minúsculas.
const REFERENCE = /(?<![.\w])([A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+)(?:!([A-Z][A-Z0-9_]*))?/g;

export const parseMeta4References = (text: string): { object: string; node: string | null }[] =>
  [...text.matchAll(REFERENCE)].map((match) => ({ object: match[1], node: match[2] ?? null }));

/** Referencias Meta4 declaradas en el registro, agrupadas por objeto. */
export const collectMeta4References = (features: readonly PortalFeature[]): Meta4Reference[] => {
  const byObject = new Map<
    string,
    { nodes: Set<string>; features: Set<string>; usage: Set<Meta4Reference["usage"][number]> }
  >();
  const add = (text: string, feature: string, usage: Meta4Reference["usage"][number]) => {
    for (const { object, node } of parseMeta4References(text)) {
      const entry = byObject.get(object) ?? {
        nodes: new Set(),
        features: new Set(),
        usage: new Set(),
      };
      if (node) entry.nodes.add(node);
      entry.features.add(feature);
      entry.usage.add(usage);
      byObject.set(object, entry);
    }
  };
  for (const feature of features) {
    if (feature.read.kind === "pending")
      for (const ref of feature.read.meta4) add(ref, feature.id, "read");
    for (const write of feature.writes ?? []) add(write.meta4Method, feature.id, "write");
    for (const section of feature.sections ?? []) {
      if (section.kind === "consult") add(section.consult.meta4, feature.id, "read");
      if (section.kind !== "form") continue;
      add(section.form.write.meta4Method, feature.id, "write");
      for (const field of section.form.fields) {
        if (field.options?.kind === "pending") add(field.options.meta4, feature.id, "catalog");
      }
    }
  }
  return [...byObject.entries()]
    .map(([object, entry]) => ({
      object,
      nodes: [...entry.nodes].sort(),
      features: [...entry.features].sort(),
      usage: [...entry.usage].sort(),
    }))
    .sort((a, b) => a.object.localeCompare(b.object));
};
