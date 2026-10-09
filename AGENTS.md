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
  `public/brand/powermeta4-mark.webp`.
- Las recomendaciones son acciones no ejecutables: solo preparan texto
  editable en el composer y dejan el envío bajo control explícito del usuario.
- Los workspaces futuros muestran estados honestos de disponibilidad; no
  simular conexiones, resultados ni operaciones de ERP.

## Portal del empleado y del responsable

- `src/lib/portal/registry` es la fuente única de pantallas, rutas, fichas de
  `docs/portal`, contratos de lectura, escrituras del original, variantes y
  búsqueda. `npm run portal:docs` genera
  `docs/portal/implementacion/{estado,dependencias-servidor}.md`.
- La sociedad, la variante (carpeta `m4custom` homónima; BASE en otro caso) y
  la identidad se resuelven en servidor (`getPortalContext`). La identidad
  exige un registro del perfil con `clave_Self` igual al usuario y, si
  PeopleNet está configurado, una única ficha coherente en
  `M4ORO_EMPLEADOS`; sin coherencia no se muestran datos personales. Ninguna
  acción recibe sociedad ni matrícula propia del navegador.
- Lecturas reales: servicios SOAP publicados en `/services/*` con su contrato
  generado desde las fuentes Java de `clon_portal` (`npm run
  portal:soap-catalog`) y `SELECT` parametrizadas en PeopleNet guardadas por
  `assertReadOnlySql`. Los apartados `sql` (`sqlConsult` en
  `src/lib/portal/registry/sql/*`) reproducen la sentencia original de cada
  nodo Meta4, resuelta del diccionario con `scripts/portal/resolver-tablas.ts`
  (`docs/portal/implementacion/lecturas-sql.md`); sus parámetros los pone solo
  el servidor (`@organization`, `@today`, `@employeeId` o el equipo).
  `npm run portal:verify -- consultas <sociedad> <matrícula>` las ejecuta y
  solo imprime recuentos. Lo demás muestra su dependencia (P01–P09) y nunca
  datos inventados.
- `GET /api/portal/documents/[kind]` (Node.js, requiere sesión) descarga en
  solo lectura los PDF que PeopleNet guarda (recibos, certificados,
  proyecciones): la matrícula y la sociedad salen del servidor y la clave de
  la URL solo elige entre los documentos de esa persona.
- Todas las escrituras del portal (`generico_actualizar`, `CR_*`, GTA,
  delegaciones…) se presentan como formulario completo y validado con el
  envío deshabilitado, el método Meta4 y su pendiente. No se ejecutan ni se
  simulan: la única escritura ERP aprobada sigue siendo el alta de personas.
- Los datos de otra persona solo se leen para el equipo del responsable: su
  jerarquía en ORO (`ID_RESPONSABLE`, hasta 10 niveles, `COMPUTA = '1'`),
  calculada en la base desde su matrícula (`src/lib/portal/data/team-scope.ts`).
  Decisión del usuario del 2026-10-05, porque `SNTC_AD_POPULATION` llega
  vacío por SOAP; `MANAGER_SCOPE_VERIFIED` es `true`. El chat no recibe datos
  del portal.
- `npm run portal:discover` y `npm run portal:verify` se ejecutan en la VM:
  solo diccionario Meta4, recuentos, presencia de columnas y WSDL; nunca
  valores de empleados.

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
`/tools/users/new`, `/tools/companies`, `/tools/payroll`,
`/tools/payroll/receipt`, `/tools/reports`,
`/tools/processes` y el portal del empleado y del responsable bajo `/portal`
(`/portal`, `/portal/tareas`, `/portal/organizacion/...`,
`/portal/empleado/...` y `/portal/responsable/...`, resueltas desde el
registro tipado `src/lib/portal/registry`).
Los Route Handlers locales de workspace
y backups usan runtime Node.js y validan la sesión, la empresa y la
conversación en servidor. `POST /api/chat/run` es el runtime de chat
(SSE, Node.js): valida sesión, empresa y conversación, reconstruye la rama
  por `parentMessageId` y llama al endpoint OpenAI-compatible global.
`/tools/users/new` es el alta de personas Meta4 (`SRTC_LAUNCH_IMPORT`). Las
rutas antiguas `/tools/users/search` y `/tools/users/[userId]` solo redirigen
a `/tools/users`. `/login` es pública y `/inbox` se eliminó sin redirección.

No añadir APIs ficticias, permisos reales, invitaciones ni persistencia remota.
El alta de personas es la excepción de escritura ERP aprobada: Excel COM edita
una copia de `Hire_1_PERSONA.xls` y solo sustituye los campos de la UI
(incluidas columnas duplicadas como `AY`/`IQ`). El fichero se escribe en un
nombre `AltaPersonas_<usuario>_<fecha>.xls` dentro del directorio
`META4_HIRE_FILE_PATH` y esa misma ruta se envía a
`SRTC_LAUNCH_IMPORT`, derivado de `META4_BASE_URL`. No
persiste datos personales en SQLite. La entidad legal (CH/CI) se elige del
catálogo `STD_LEG_ENT` de la sociedad activa: la de la plantilla (`ACYC_ES`)
solo existe en CYC. Contra PeopleNet solo se ejecutan `SELECT`; nunca
`UPDATE`, `DELETE` ni `INSERT`.
Los catálogos del alta se leen de la base PeopleNet (SQL Server) solo en
servidor, con `PEOPLENET_DB_*` y únicamente consultas `SELECT` parametrizadas;
los que dependen de sociedad filtran `ID_ORGANIZATION` por la sociedad del
contexto operativo, nunca por un valor del navegador. `GET /api/hire/places`
(Node.js, requiere sesión) busca poblaciones en PeopleNet porque
`STD_GEO_PLACE` es demasiado grande para enviarse entera al formulario.
«Consultar una nómina» lee los recibos de PeopleNet con la plantilla `RECIBO`
de Meta4 y la sociedad del contexto operativo. `POST /api/payroll/receipts/export`
(Node.js, requiere sesión) descarga en PDF (`pdf-lib`) o Excel (`exceljs`) las
nóminas pedidas: recibe solo los parámetros de la consulta y los ids, vuelve a
leer los recibos en servidor y no guarda ficheros ni datos personales.
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
