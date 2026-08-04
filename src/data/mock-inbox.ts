import type { InboxItem } from "@/types/inbox";

export const mockInboxItems: InboxItem[] = [
  {
    id: "inbox-brief",
    title: "Tu resumen semanal está listo",
    description: "Revisa las conversaciones que más actividad tuvieron esta semana.",
    timestamp: "Hace 12 min",
    read: false,
    kind: "activity",
  },
  {
    id: "inbox-model",
    title: "Nuevo modelo disponible",
    description: "Luma Deep ya aparece como opción para respuestas más reflexivas.",
    timestamp: "Ayer",
    read: false,
    kind: "system",
  },
  {
    id: "inbox-tip",
    title: "Sugerencia: usa Shift + Enter",
    description: "Puedes escribir mensajes de varias líneas sin enviarlos todavía.",
    timestamp: "Ayer",
    read: true,
    kind: "tip",
  },
  {
    id: "inbox-favorite",
    title: "Una conversación cambió de grupo",
    description: "‘Investigación de usuarios’ está ahora en Favoritos.",
    timestamp: "Hace 3 días",
    read: true,
    kind: "activity",
  },
  {
    id: "inbox-welcome",
    title: "Bienvenido a powermeta4",
    description: "Retoma una conversación o empieza un chat nuevo.",
    timestamp: "Hace 4 días",
    read: true,
    kind: "system",
  },
];
