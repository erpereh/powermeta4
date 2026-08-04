import type { Chat, Message } from "@/types/chat";

const message = (
  id: string,
  role: Message["role"],
  content: string,
  createdAt: string,
): Message => ({
  id,
  role,
  content,
  createdAt,
  status: "complete",
});

export const mockChats: Chat[] = [
  {
    id: "chat-welcome",
    title: "Nuevo chat",
    favorite: false,
    updatedAt: "2026-08-04T10:00:00.000Z",
    messages: [],
  },
  {
    id: "chat-product-brief",
    title: "Brief de producto y prioridades",
    favorite: true,
    icon: "briefcase",
    iconColor: "blue",
    updatedAt: "2026-08-04T09:48:00.000Z",
    messages: [
      message(
        "product-brief-user",
        "user",
        "Ayúdame a ordenar el brief de producto para la próxima iteración.",
        "2026-08-04T09:35:00.000Z",
      ),
      message(
        "product-brief-assistant",
        "assistant",
        "Podemos organizarlo en tres capas: problema principal, resultado esperado y señales para medirlo. Empezaría por reducir el alcance a una experiencia que el equipo pueda validar esta semana.",
        "2026-08-04T09:48:00.000Z",
      ),
    ],
  },
  {
    id: "chat-editorial-system",
    title: "Sistema editorial para la marca",
    favorite: true,
    icon: "palette",
    iconColor: "purple",
    updatedAt: "2026-08-03T16:20:00.000Z",
    messages: [
      message(
        "editorial-user",
        "user",
        "Diseña una estructura editorial simple para publicar con más consistencia.",
        "2026-08-03T16:05:00.000Z",
      ),
      message(
        "editorial-assistant",
        "assistant",
        "Propongo un sistema de cuatro formatos: explicación, caso, opinión y herramienta. Cada pieza debería tener una idea central, una prueba concreta y un cierre accionable.",
        "2026-08-03T16:20:00.000Z",
      ),
    ],
  },
  {
    id: "chat-user-research",
    title: "Investigación de usuarios",
    favorite: true,
    icon: "brain",
    iconColor: "cyan",
    updatedAt: "2026-08-02T11:42:00.000Z",
    messages: [
      message(
        "research-user",
        "user",
        "¿Qué preguntas usarías en una entrevista de descubrimiento?",
        "2026-08-02T11:30:00.000Z",
      ),
      message(
        "research-assistant",
        "assistant",
        "Priorizaría preguntas sobre el último momento en que apareció el problema, cómo lo resolvieron y qué coste tuvo la solución actual. Evitaría preguntar directamente si les gusta una idea.",
        "2026-08-02T11:42:00.000Z",
      ),
    ],
  },
  {
    id: "chat-weekly-metrics",
    title: "Resumen semanal de métricas",
    favorite: true,
    icon: "chart",
    iconColor: "green",
    updatedAt: "2026-08-01T15:10:00.000Z",
    messages: [
      message(
        "metrics-user",
        "user",
        "Convierte estos datos en un resumen ejecutivo breve.",
        "2026-08-01T14:55:00.000Z",
      ),
      message(
        "metrics-assistant",
        "assistant",
        "La lectura principal es una mejora sostenida de activación, mientras que la retención todavía necesita una hipótesis específica. El siguiente paso debería conectar ambas métricas con el comportamiento de los usuarios nuevos.",
        "2026-08-01T15:10:00.000Z",
      ),
    ],
  },
  {
    id: "chat-onboarding",
    title: "Ideas para mejorar onboarding",
    favorite: false,
    updatedAt: "2026-08-04T08:22:00.000Z",
    messages: [
      message(
        "onboarding-user",
        "user",
        "Dame tres ideas para mejorar el primer minuto de una app.",
        "2026-08-04T08:12:00.000Z",
      ),
      message(
        "onboarding-assistant",
        "assistant",
        "Haz visible el primer resultado cuanto antes, explica solo la decisión que toca ahora y deja una ruta clara para volver atrás sin perder contexto.",
        "2026-08-04T08:22:00.000Z",
      ),
    ],
  },
  {
    id: "chat-landing-page",
    title: "Revisión de landing page",
    favorite: false,
    updatedAt: "2026-08-03T13:16:00.000Z",
    messages: [
      message(
        "landing-user",
        "user",
        "Revisa la jerarquía de una landing para una herramienta B2B.",
        "2026-08-03T13:02:00.000Z",
      ),
    ],
  },
  {
    id: "chat-architecture",
    title: "Arquitectura frontend inicial",
    favorite: false,
    updatedAt: "2026-08-03T09:40:00.000Z",
    messages: [
      message(
        "architecture-user",
        "user",
        "Compara una arquitectura por features con una arquitectura por capas.",
        "2026-08-03T09:25:00.000Z",
      ),
      message(
        "architecture-assistant",
        "assistant",
        "Para una aplicación pequeña empezaría por features con límites claros. Las capas comunes deben aparecer cuando exista una necesidad compartida, no como una abstracción preventiva.",
        "2026-08-03T09:40:00.000Z",
      ),
    ],
  },
  {
    id: "chat-campaign",
    title: "Campaña de lanzamiento",
    favorite: false,
    updatedAt: "2026-08-02T17:05:00.000Z",
    messages: [],
  },
  {
    id: "chat-workflow",
    title: "Automatizar un flujo repetitivo",
    favorite: false,
    updatedAt: "2026-08-02T12:24:00.000Z",
    messages: [],
  },
  {
    id: "chat-roadmap",
    title: "Roadmap del siguiente trimestre",
    favorite: false,
    updatedAt: "2026-08-01T10:18:00.000Z",
    messages: [],
  },
  {
    id: "chat-copy",
    title: "Variantes de copy para anuncio",
    favorite: false,
    updatedAt: "2026-07-31T18:12:00.000Z",
    messages: [],
  },
  {
    id: "chat-workshop",
    title: "Preparar un workshop de equipo",
    favorite: false,
    updatedAt: "2026-07-31T15:30:00.000Z",
    messages: [],
  },
];
