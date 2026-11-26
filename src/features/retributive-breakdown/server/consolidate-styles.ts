import {
  attribute,
  attributes,
  BreakdownInputError,
  children,
  element,
  requireElement,
  type Workbook,
  type XmlNode,
} from "./workbook";

const records = {
  fonts: "font",
  fills: "fill",
  borders: "border",
  cellStyleXfs: "xf",
  cellXfs: "xf",
  dxfs: "dxf",
  numFmts: "numFmt",
} as const;
type Collection = keyof typeof records;

function collection(book: Workbook, key: Collection, create = false) {
  const nodes = children(book.styles.root, "styleSheet");
  const existing = nodes.find((node) => key in node);
  if (existing) return existing;
  if (!create) return requireElement(nodes, key);
  const newCollection = element(key, { count: "0" });
  if (key === "numFmts") nodes.unshift(newCollection);
  else {
    const successor = nodes.findIndex(
      (node) => "tableStyles" in node || "colors" in node || "extLst" in node,
    );
    nodes.splice(successor < 0 ? nodes.length : successor, 0, newCollection);
  }
  return newCollection;
}

function entries(node: XmlNode, key: Collection) {
  return children(node, key).filter((entry) => records[key] in entry);
}

function append(target: Workbook, key: Collection, node: XmlNode) {
  const list = collection(target, key, true);
  const existing = entries(list, key);
  children(list, key).push(node);
  attributes(list)["@_count"] = String(existing.length + 1);
  return String(existing.length);
}

export function importStyles(target: Workbook, source: Workbook) {
  const imported = new Map<string, string>();
  const formats = new Map<string, string>();

  function numberFormat(id: string): string {
    const cached = formats.get(id);
    if (cached !== undefined) return cached;
    const donorFormats = children(source.styles.root, "styleSheet").find(
      (node) => "numFmts" in node,
    );
    const donor = children(donorFormats ?? {}, "numFmts").find(
      (node) => attribute(node, "numFmtId") === id,
    );
    if (!donor && Number(id) < 164) return id;
    if (!donor) throw new BreakdownInputError("Hay un formato numérico de Excel no válido.");
    const list = entries(collection(target, "numFmts", true), "numFmts");
    const code = attribute(donor, "formatCode");
    const existing = list.find((node) => attribute(node, "formatCode") === code);
    const nextId =
      attribute(existing, "numFmtId") ??
      String(Math.max(163, ...list.map((node) => Number(attribute(node, "numFmtId")))) + 1);
    if (!existing) {
      const clone = structuredClone(donor);
      attributes(clone)["@_numFmtId"] = nextId;
      append(target, "numFmts", clone);
    }
    formats.set(id, nextId);
    return nextId;
  }

  function component(key: Collection, id: string): string {
    const reference = key + ":" + id;
    const stored = imported.get(reference);
    if (stored !== undefined) return stored;
    const sourceNode = entries(collection(source, key), key)[Number(id)];
    if (!sourceNode) throw new BreakdownInputError("Hay un estilo de Excel no válido.");
    const node = structuredClone(sourceNode);
    if (key === "cellXfs" || key === "cellStyleXfs") {
      const dependencies = [
        ["fontId", "fonts"],
        ["fillId", "fills"],
        ["borderId", "borders"],
        ["xfId", "cellStyleXfs"],
      ] as const;
      for (const [name, dependency] of dependencies) {
        const index = attribute(node, name);
        if (index !== undefined && !(key === "cellStyleXfs" && name === "xfId")) {
          attributes(node)["@_" + name] = component(dependency, index);
        }
      }
      const format = attribute(node, "numFmtId");
      if (format !== undefined) attributes(node)["@_numFmtId"] = numberFormat(format);
    }
    const index = append(target, key, node);
    imported.set(reference, index);
    return index;
  }

  return {
    cell: (id: string) => component("cellXfs", id),
    differential: (id: string) => component("dxfs", id),
  };
}

export function accountingStyles(book: Workbook) {
  const list = children(book.styles.root, "styleSheet").find((node) => "numFmts" in node);
  const formats = children(list ?? {}, "numFmts").filter((node) => "numFmt" in node);
  const override = formats.find((node) => attribute(node, "numFmtId") === "44");
  if (override) {
    // PeopleNet puede ocupar el ID integrado con un código de moneda explícito.
    // Se mantiene ese código para las celdas previas y se libera el ID contable.
    const id = String(
      Math.max(163, ...formats.map((node) => Number(attribute(node, "numFmtId")))) + 1,
    );
    attributes(override)["@_numFmtId"] = id;
    for (const key of ["cellXfs", "cellStyleXfs"] as const) {
      for (const style of entries(collection(book, key), key)) {
        if (attribute(style, "numFmtId") === "44") attributes(style)["@_numFmtId"] = id;
      }
    }
  }
  const derived = new Map<string, string>();
  return (id: string) => {
    const cached = derived.get(id);
    if (cached !== undefined) return cached;
    const style = entries(collection(book, "cellXfs"), "cellXfs")[Number(id)];
    if (!style) throw new BreakdownInputError("Hay un estilo de celda no válido.");
    // El consolidado de referencia usa el formato contable integrado de Excel.
    if (attribute(style, "numFmtId") === "44" && attribute(style, "applyNumberFormat") === "1") {
      derived.set(id, id);
      return id;
    }
    const node = structuredClone(style);
    Object.assign(attributes(node), { "@_numFmtId": "44", "@_applyNumberFormat": "1" });
    const index = append(book, "cellXfs", node);
    derived.set(id, index);
    return index;
  };
}
