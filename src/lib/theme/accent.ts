/**
 * Color de acento configurable. Los valores viven en `globals.css`
 * (`[data-accent="..."]`); aquí solo el mapa tipado de ids y etiquetas.
 * Es una preferencia visual por navegador (como el tema de next-themes):
 * se guarda en localStorage y se aplica en `<html data-accent>`.
 */
export const ACCENT_PRESETS = [
  { id: "blue", label: "Azul" },
  { id: "cyan", label: "Cian" },
  { id: "violet", label: "Violeta" },
  { id: "green", label: "Verde" },
  { id: "amber", label: "Ámbar" },
  { id: "neutral", label: "Grafito" },
] as const;

export type AccentId = (typeof ACCENT_PRESETS)[number]["id"];

export const DEFAULT_ACCENT: AccentId = "blue";

export const ACCENT_STORAGE_KEY = "powermeta4-accent";

const ACCENT_IDS: readonly string[] = ACCENT_PRESETS.map((preset) => preset.id);

export function isAccentId(value: unknown): value is AccentId {
  return typeof value === "string" && ACCENT_IDS.includes(value);
}

/**
 * Script previo a la hidratación: aplica el acento guardado antes del primer
 * pintado para evitar un parpadeo del color por defecto.
 */
export const ACCENT_INIT_SCRIPT = `(function(){try{var v=localStorage.getItem(${JSON.stringify(
  ACCENT_STORAGE_KEY,
)});if(${JSON.stringify(ACCENT_IDS)}.indexOf(v)>=0){document.documentElement.setAttribute("data-accent",v);}}catch(e){}})();`;
