# AGENTS.md — powermeta4

## Propósito

`powermeta4` es una aplicación local híbrida para conversar con un asistente y
gestionar herramientas operativas por empresa. La autenticación, los datos y
el runtime de IA son de desarrollo: no se integran proveedores reales,
autenticación de producción, base de datos ni servicios externos.

## Fuentes de verdad

Antes de modificar código, leer completamente, en este orden:

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
Thread salvo que la tarea pida expresamente otra cosa.

## Reglas de trabajo

- Conservar la rama actual, los cambios existentes y la eliminación pendiente
  de `PROMPT_INICIAL.md`.
- No crear ni cambiar ramas, no recrear el proyecto y no ejecutar `shadcn init`
  o `assistant-ui init`.
- No usar comandos destructivos ni sobrescribir primitivas existentes sin una
  petición explícita. Revisar el diff antes de aceptar cambios amplios.
- Usar `apply_patch` para editar archivos. Usar npm como único gestor y
  conservar `package-lock.json` como único lockfile.
- Mantener TypeScript estricto, evitar `any`, casts innecesarios y errores
  silenciados.
- Preferir componentes de servidor; usar `use client` únicamente para estado,
  interacción o APIs del navegador.
- Ejecutar al terminar `npm run lint`, `npm run typecheck`, `npm test`,
  `npm run build`, `git diff --check` y `git status --short`.
- Actualizar `spec/todo.md` y `spec/changelog.md` con el estado real y las
  comprobaciones realmente ejecutadas.

## Estado y aislamiento multiempresa

- `workspaceStore` es la única fuente global de chats, mensajes, favoritos,
  usuarios, preferencias y actividad. Está persistido localmente bajo
  `powermeta4-workspace-store` y se rehidrata con `skipHydration` desde el shell
  cliente.
- Todo dato de producto debe resolverse mediante `activeCompanyId`. El
  runtime recibe un `companyId` capturado y sus escrituras deben conservarlo
  durante streaming, edición y cancelación.
- Los favoritos se derivan de `Chat.favorite`; no crear arrays paralelos.
- La migración de `powermeta4-chat-store` es versionada, deduplica IDs y solo
  se ejecuta una vez. No guardar contraseñas, tokens ni secretos en Zustand,
  localStorage o sessionStorage.
- La autenticación de prueba se valida en servidor con cookie HttpOnly firmada.
  Los secretos solo proceden de variables de entorno de desarrollo; nunca se
  exponen al cliente ni se imprimen en logs.

## Herramientas y recomendaciones

- `src/lib/tools/registry.ts` es el registro único y tipado de módulos,
  acciones, prompts, iconos, rutas y permisos. Inicio, sidebar, búsqueda,
  workspaces, actividad y recomendaciones deben consumirlo.
- Las recomendaciones del chat son acciones no ejecutables: solo preparan
  texto editable en el composer y dejan el envío bajo control explícito del
  usuario. No inventar resultados ni efectos reales.
- Los workspaces no implementados muestran catálogo y empty states honestos;
  solo Usuarios tiene creación y consulta funcionales en esta fase.

## Componentes, diseño y accesibilidad

- Usar shadcn/ui y assistant-ui existentes antes de crear alternativas. La
  sidebar conserva `collapsible="icon"`, Sheet móvil y un único
  `SidebarTrigger` principal; no renderizar `SidebarRail` ni controles
  visuales duplicados.
- Mantener una familia tipográfica coherente: Inter mediante `--font-inter`,
  conectada a `font-sans`, `font-heading` y `font-mono`.
- Respetar tokens semánticos del preset `b1temovYm`; no introducir colores
  hexadecimales arbitrarios. Las excepciones controladas de iconos de empresa
  o favoritos deben vivir en mapas tipados y estáticos.
- La iconografía debe comunicar una acción o entidad. Evitar adornos
  decorativos, estrellas y sparkles.
- Todo control interactivo debe tener foco visible, nombre accesible, estado
  correcto y navegación por teclado. No anidar botones, enlaces o elementos
  interactivos.
- La interfaz debe funcionar en escritorio, tablet y móvil sin overflow
  horizontal y con targets táctiles cómodos.

## Rutas y límites actuales

Las rutas privadas están bajo el grupo `(app)` y conservan sus URLs públicas:
`/`, `/home`, `/chat/new`, `/chat/[chatId]`, `/tools`, `/tools/users`,
`/tools/users/new`, `/tools/users/search`, `/tools/users/[userId]`,
`/tools/companies`, `/tools/payroll`, `/tools/reports` y `/tools/processes`.
`/login` es pública y `/inbox` se eliminó sin redirección.

No añadir backend, API routes ficticias, proveedores reales de IA, permisos
reales, invitaciones, edición o borrado de usuarios, operaciones reales de
empresas/nóminas/informes/procesos ni persistencia remota en esta fase.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
