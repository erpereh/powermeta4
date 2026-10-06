import type { DirectoryEntry } from "./data/organization-core";
import type { PersonHierarchy } from "./data/person-hierarchy-core";

export const CARD_WIDTH = 240;
export const CARD_HEIGHT = 260;
const GAP_X = 32;
const GAP_Y = 64;
export type ChartNode = {
  person: DirectoryEntry;
  x: number;
  y: number;
  depth: number;
  parentId: string | null;
};
type Tree = { person: DirectoryEntry; children: Tree[]; width: number };
export type ChartLayout = {
  nodes: ChartNode[];
  width: number;
  height: number;
  cycleIds: ReadonlySet<string>;
};

/** Subárboles con anchura reservada: no hay cruces, solapamientos ni recursión circular. */
export function layoutOrgChart(
  root: DirectoryEntry,
  teams: ReadonlyMap<string, PersonHierarchy>,
  expanded: ReadonlySet<string>,
): ChartLayout {
  const seen = new Set<string>();
  const cycleIds = new Set<string>();
  const build = (person: DirectoryEntry): Tree => {
    seen.add(person.employeeId);
    const children: Tree[] = [];
    if (expanded.has(person.employeeId)) {
      for (const child of teams.get(person.employeeId)?.reports ?? []) {
        if (seen.has(child.employeeId)) {
          cycleIds.add(child.employeeId);
          continue;
        }
        children.push(build(child));
      }
    }
    return {
      person,
      children,
      width: Math.max(
        CARD_WIDTH,
        children.reduce((sum, child) => sum + child.width, 0) +
          Math.max(0, children.length - 1) * GAP_X,
      ),
    };
  };
  const tree = build(root);
  const nodes: ChartNode[] = [];
  const place = (tree: Tree, left: number, depth: number, parentId: string | null) => {
    nodes.push({
      person: tree.person,
      x: left + (tree.width - CARD_WIDTH) / 2,
      y: depth * (CARD_HEIGHT + GAP_Y),
      depth,
      parentId,
    });
    let childLeft = left;
    for (const child of tree.children) {
      place(child, childLeft, depth + 1, tree.person.employeeId);
      childLeft += child.width + GAP_X;
    }
  };
  place(tree, 0, 0, null);
  return {
    nodes,
    width: tree.width,
    height: Math.max(...nodes.map((node) => node.y)) + CARD_HEIGHT,
    cycleIds,
  };
}

export type Point = { x: number; y: number };
export type Camera = Point & { scale: number };
export const clampScale = (scale: number) => Math.max(0.2, Math.min(2, scale));
export const zoomCamera = (camera: Camera, scale: number, at: Point): Camera => {
  const next = clampScale(scale);
  return {
    scale: next,
    x: at.x - ((at.x - camera.x) * next) / camera.scale,
    y: at.y - ((at.y - camera.y) * next) / camera.scale,
  };
};
export const fitCamera = (
  width: number,
  height: number,
  viewport: { width: number; height: number },
): Camera => {
  const scale = clampScale(
    Math.min(1, (viewport.width - 48) / width, (viewport.height - 48) / height),
  );
  return {
    scale,
    x: (viewport.width - width * scale) / 2,
    y: (viewport.height - height * scale) / 2,
  };
};
