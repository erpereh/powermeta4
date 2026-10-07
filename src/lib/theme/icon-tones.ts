import type { PortalIconName } from "@/lib/portal/types";
import type { ToolModuleId } from "@/lib/tools/registry";

/**
 * Tonos de los chips de icono. Excepción controlada al sistema neutro: cada
 * tono es un par de tokens (`--tone-*` y `--tone-*-foreground`) definidos en
 * `globals.css` para light y dark. Las clases son literales estáticos para que
 * Tailwind las detecte; nunca se construyen ni se guardan en el store.
 */
export type IconTone = "orange" | "blue" | "green" | "violet" | "amber" | "teal" | "rose" | "slate";

export const ICON_TONE_CLASSES: Record<IconTone, string> = {
  orange: "bg-tone-orange text-tone-orange-foreground",
  blue: "bg-tone-blue text-tone-blue-foreground",
  green: "bg-tone-green text-tone-green-foreground",
  violet: "bg-tone-violet text-tone-violet-foreground",
  amber: "bg-tone-amber text-tone-amber-foreground",
  teal: "bg-tone-teal text-tone-teal-foreground",
  rose: "bg-tone-rose text-tone-rose-foreground",
  slate: "bg-tone-slate text-tone-slate-foreground",
};

export const MODULE_TONES: Record<ToolModuleId, IconTone> = {
  users: "blue",
  companies: "teal",
  payroll: "green",
  reports: "violet",
  processes: "orange",
};

export const STANDALONE_TOOL_TONES: Record<string, IconTone> = {
  "registro-retributivo": "rose",
};

export const getStandaloneToolTone = (toolId: string): IconTone =>
  STANDALONE_TOOL_TONES[toolId] ?? "slate";

export const PORTAL_ICON_TONES: Record<PortalIconName, IconTone> = {
  home: "slate",
  tasks: "orange",
  org: "teal",
  person: "blue",
  "id-card": "blue",
  contact: "blue",
  address: "blue",
  mail: "blue",
  phone: "blue",
  family: "blue",
  emergency: "rose",
  document: "slate",
  tax: "amber",
  bank: "amber",
  payslip: "green",
  certificate: "slate",
  chart: "violet",
  loan: "green",
  benefit: "rose",
  package: "green",
  job: "teal",
  training: "violet",
  evaluation: "violet",
  career: "violet",
  mobility: "teal",
  goal: "violet",
  calendar: "orange",
  vacation: "orange",
  absence: "orange",
  clock: "orange",
  planning: "orange",
  knowledge: "teal",
  team: "teal",
  scope: "teal",
  delegation: "amber",
  approval: "green",
  salary: "green",
  budget: "green",
  review: "green",
  vacancy: "blue",
  interview: "violet",
  movement: "teal",
  link: "slate",
  search: "slate",
  report: "green",
};
