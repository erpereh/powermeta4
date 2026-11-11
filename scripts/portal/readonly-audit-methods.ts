import type { AuditRow, AuditTask } from "./readonly-audit-model";

export type AuditMethod = { object: string; node: string; method: string };
export function auditMethodReferences(text: string): AuditMethod[] {
  return [...text.matchAll(/\b([A-Z][A-Z0-9_]+)!([A-Z][A-Z0-9_]+)\.([A-Z][A-Z0-9_]+)/g)].map(
    (match) => ({ object: match[1], node: match[2], method: match[3] }),
  );
}

/** Una TI común no convierte todos sus métodos en dependencias del portal. */
export class AuditMethodScope {
  private readonly owners = new Map<string, Set<string>>();
  private readonly reached = new Map<string, Set<string>>();
  private readonly notices = new Set<string>();
  constructor(
    private readonly methods: readonly AuditMethod[],
    private readonly tasks: AuditTask[],
  ) {}
  observe(rows: readonly AuditRow[]): void {
    for (const row of rows) {
      if (
        typeof row.ID_TI !== "string" ||
        typeof row.ID_T3 !== "string" ||
        typeof row.ID_NODE !== "string"
      )
        continue;
      const owners = this.owners.get(row.ID_TI) ?? new Set<string>();
      owners.add(row.ID_T3);
      this.owners.set(row.ID_TI, owners);
      const reached = this.reached.get(row.ID_TI) ?? new Set<string>();
      for (const method of this.methods)
        if (method.object === row.ID_T3 && method.node === row.ID_NODE) reached.add(method.method);
      this.reached.set(row.ID_TI, reached);
    }
  }
  select(rows: readonly AuditRow[]): AuditRow[] {
    this.observe(rows);
    return rows.map((row) => {
      if (
        typeof row.SOURCE_CODE !== "string" ||
        typeof row.ID_TI !== "string" ||
        typeof row.ID_ITEM !== "string"
      )
        return row;
      const owners = this.owners.get(row.ID_TI);
      const shared = (owners?.size ?? 0) > 1 || /^(?:SSE|SSM)_PRINCIPAL$/.test(row.ID_TI);
      if (!shared) return row;
      const explicit = this.reached.get(row.ID_TI)?.has(row.ID_ITEM);
      const specific = [...(owners ?? [])].some((owner) =>
        String(row.ID_ITEM).startsWith(`${owner}_`),
      );
      if (specific) return row;
      const id = `method-scope/${row.ID_TI}/${row.ID_ITEM}`;
      if (!this.notices.has(id)) {
        this.notices.add(id);
        this.tasks.push({
          id,
          status: explicit ? "incomplete" : "ok",
          code: explicit ? "AMBIGUOUS_SHARED_METHOD" : "SHARED_METHOD_INVENTORY_ONLY",
        });
      }
      // Se mantiene ID_ITEM; una regla genérica ambigua no expande ramas ajenas.
      return { ...row, SOURCE_CODE: null };
    });
  }
}
