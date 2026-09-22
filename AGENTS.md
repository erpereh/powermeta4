# AGENTS.md — powermeta4

## Propósito

`powermeta4` es una aplicación local híbrida para conversar con un asistente y
organizar herramientas operativas por workspace de empresa. La autenticación y
los datos de producto viven en SQLite local. El chat usa una única configuración
OpenAI-compatible global y server-side mediante `AI_BASE_URL`, `AI_API_KEY` y
`AI_MODEL`; no hay configuración por empresa ni picker interactivo. El modelo
solo recibe texto de la rama de conversación seleccionada: no recibe datos,
contexto ni resultados de Meta4.

## Fuentes de verdad y orden de lectura

Antes de modificar cualquier archivo, leer completamente y en este orden:

1. `AGENTS.md`
2. `DESIGN.md`
3. `spec/todo.md`
4. `spec/changelog.md`
5. `README.md`
6. `package.json`
7. `components.json`
8. Los archivos relacionados con la tarea

Para assistant-ui, comprobar primero la documentación oficial y las APIs
instaladas. Mantener `ExternalStoreRuntime` y la composición oficial del
Thread salvo petición expresa.

## Reglas de trabajo

- Conservar la rama actual, los cambios existentes y la eliminación pendiente
  de `PROMPT_INICIAL.md`.
- No crear ni cambiar ramas, no recrear el proyecto y no ejecutar `shadcn init`,
  `assistant-ui init` ni comandos con `--overwrite`.
- Usar `apply_patch` para editar archivos. Usar npm como único gestor y
  conservar `package-lock.json` como único lockfile.
- Mantener TypeScript estricto, evitar `any`, casts innecesarios y errores
  silenciados.
- Preferir componentes de servidor; usar `use client` solo para estado,
  interacción o APIs del navegador.
- Revisar el diff antes de aceptar cambios amplios y no sobrescribir cambios
  del usuario.
- Ejecutar al terminar `npm run lint`, `npm run typecheck`, `npm test`,
  `npm run build`, `git diff --check` y `git status --short`.
- Actualizar `spec/todo.md` y `spec/changelog.md` con el estado real y solo
  comprobaciones realmente ejecutadas.

## Estado, sesión y workspaces

- `workspaceStore` es la única fuente global del snapshot temporal de chats,
  mensajes, favoritos, empresas y actividad. La
  fuente de verdad es SQLite mediante el servidor; tras una hidratación
  correcta solo se retiran las claves funcionales legacy
  `powermeta4-workspace-store` y `powermeta4-chat-store`. `next-themes`
  conserva su almacenamiento de tema.
- Todo dato de producto debe resolverse mediante `activeCompanyId`. El runtime
  recibe un `companyId` capturado y sus escrituras deben conservarlo durante
  streaming, edición y cancelación. La configuración del chat nunca procede
  del cliente ni del workspace: se lee exclusivamente del entorno del servidor.
- Los favoritos se derivan de `Chat.favorite`; no crear arrays paralelos.
- Una empresa autenticada es un workspace local de powermeta4, no una entidad
  ERP sincronizada. Crear o eliminarla no debe presentarse como una operación
  externa.
- Los usuarios ERP no son cuentas autenticadas y no tienen persistencia local,
  tipos de dominio, formularios, tablas ni CRUD en esta fase.
- Los estados de mensaje persistidos son `complete`, `incomplete`, `cancelled` o
  `failed`; una cancelación o un fallo no se presenta como completado ni se
  reinicia al recargar.
- La autenticación se valida en servidor con SOAP Meta4 y una cookie opaca
  HttpOnly. JSESSIONID y refreshSessionId se cifran con DPAPI CurrentUser.
  Secretos, tokens y API keys nunca se guardan en Zustand, localStorage o
  sessionStorage.

## Chat global y herramientas SOAP

El transcript visible en SQLite es la fuente real del chat: mensajes del
usuario, respuestas locales, ramas, edición, regeneración y reload. No se borra
ni se reescribe para enviarlo al modelo. Las tablas exclusivas del runtime
anterior se eliminan mediante la migración `009_remove_agent_and_provider_configs`;
las migraciones 006/007 se conservan únicamente como historia de esquema.

`POST /api/chat/run` valida sesión, empresa, conversación y mensaje asistente,
reconstruye la rama exacta con `parentMessageId` y envía únicamente ancestros
`user`/`assistant` con texto no vacío. Excluye el placeholder asistente actual,
partes no textuales, system prompts, tools y function calling.

El cliente server-only normaliza `AI_BASE_URL` a `/chat/completions`, envía
`model`, `messages` y `stream: true`, y procesa solo deltas textuales SSE.
`AI_API_KEY` nunca sale del servidor. La UI solo recibe `{ configured, model }`;
si falta una variable muestra `IA no configurada` y bloquea el envío.

El chat no importa ni invoca SOAP, resolvers, privacidad ni herramientas. Las
herramientas SOAP y el Registro Retributivo siguen siendo funciones normales de
producto fuera del chat. La sociedad no la elige el navegador.

## Herramientas y recomendaciones

- `src/lib/tools/registry.ts` es el registro único y tipado de módulos,
  acciones, prompts, iconos, rutas y permisos. Acciones ERP
  (`TOOL_MODULES` / `TOOL_REGISTRY`) se muestran en Inicio. Herramientas
  standalone (`STANDALONE_TOOLS`) se muestran en la sidebar. Búsqueda de
  Inicio, workspaces, actividad y recomendaciones consumen las Acciones ERP.
- Acciones: operaciones ERP/Meta4 mostradas desde Inicio. Herramientas:
  utilidades independientes de powermeta4 mostradas desde la sidebar.
- `PowermetaLogo` es la única API de branding. El isotipo oficial está en
  `public/brand/powermeta4-mark.svg`.
- Las recomendaciones son acciones no ejecutables: solo preparan texto
  editable en el composer y dejan el envío bajo control explícito del usuario.
- Los workspaces futuros muestran estados honestos de disponibilidad; no
  simular conexiones, resultados ni operaciones de ERP.

## Componentes, diseño y accesibilidad

- Usar shadcn/ui y assistant-ui existentes antes de crear alternativas. La
  sidebar conserva `collapsible="icon"`, Sheet móvil y un único
  `SidebarTrigger` principal; no renderizar `SidebarRail` ni controles
  visuales duplicados.
- Mantener una familia tipográfica coherente: Inter mediante `--font-inter`,
  conectada a `font-sans`, `font-heading` y `font-mono`.
- Respetar tokens semánticos del preset `b1temovYm`; no introducir colores
  hexadecimales arbitrarios. Las excepciones controladas deben vivir en mapas
  tipados y estáticos.
- La iconografía debe comunicar una acción o entidad. Evitar adornos,
  estrellas y sparkles.
- Separar siempre un control de navegación de uno de expansión o estado. No
  anidar botones, enlaces u otros elementos interactivos.
- Todo control interactivo debe tener foco visible, nombre accesible, estado
  correcto y navegación por teclado. La interfaz debe funcionar en escritorio,
  tablet y móvil sin overflow horizontal.

## Rutas y límites actuales

Las rutas privadas están bajo el grupo `(app)` y conservan sus URLs públicas:
`/`, `/home`, `/chat/new`, `/chat/[chatId]`, `/settings`, `/tools`,
`/tools/registro-retributivo`, `/tools/users`, `/tools/users/list`,
`/tools/users/new`, `/tools/companies`, `/tools/payroll`, `/tools/reports` y
`/tools/processes`.
Los Route Handlers locales de workspace
y backups usan runtime Node.js y validan la sesión, la empresa y la
conversación en servidor. `POST /api/chat/run` es el runtime de chat
(SSE, Node.js): valida sesión, empresa y conversación, reconstruye la rama
  por `parentMessageId` y llama al endpoint OpenAI-compatible global.
`/tools/users/new` es el alta de personas Meta4 (`SRTC_LAUNCH_IMPORT`). Las
rutas antiguas `/tools/users/search` y `/tools/users/[userId]` solo redirigen
a `/tools/users`. `/login` es pública y `/inbox` se eliminó sin redirección.

No añadir APIs ficticias, permisos reales, invitaciones ni persistencia remota.
El alta de personas es la excepción de escritura ERP aprobada: genera Hire.xls
en servidor desde `Hire_1_PERSONA.xls` (Excel COM edita solo los campos de la UI
y conserva el resto del libro), sustituye columnas duplicadas como `AY`/`IQ`,
lo escribe en `META4_HIRE_FILE_PATH` y llama a `META4_HIRE_URL`; no persiste
datos personales en SQLite. La entidad legal permanece la de la plantilla.
El endpoint OpenAI-compatible global
se configura mediante `AI_BASE_URL`, `AI_API_KEY` y `AI_MODEL` en el entorno
server-side; nunca se documentan credenciales ni se exponen claves al cliente.
Los Route Handlers y Server Actions locales de SQLite, autenticación y backups
forman parte de la implementación aprobada. No ejecutar Prisma, DPAPI ni SOAP
desde proxy/middleware.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
