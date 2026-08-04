# Changelog

## 2026-08-04 — Iteración multiempresa, autenticación y herramientas

### Cambios

- Se añadió autenticación local con Server Actions, cookie HttpOnly HMAC,
  expiración, `src/proxy.ts`, `requireSession`, login, logout y variables de
  desarrollo en `.env.example`.
- Se integró `next-themes` para Claro, Oscuro y Sistema.
- Se creó `workspaceStore` persistido bajo
  `powermeta4-workspace-store`, indexado por `activeCompanyId`, con migración
  única y segura desde `powermeta4-chat-store`.
- Se añadieron Empresa Principal, CyC Quality y Nexo Operativo, con aislamiento
  de chats, favoritos, usuarios, modelo y actividad.
- Se compuso la sidebar con selector de empresa, herramientas, favoritos,
  chats, menú de usuario y Sheet móvil, sin rail ni controles duplicados.
- Se eliminó completamente Inbox y se creó el launchpad de Herramientas,
  catálogos ERP y el workspace funcional de Usuarios.
- Se centralizaron cinco módulos y veinte acciones en
  `src/lib/tools/registry.ts`; las recomendaciones ERP consumen ese registro y
  solo rellenan el composer sin ejecutar acciones.
- Se añadieron `/chat/new`, `/chat/[chatId]`, creación/consulta/detalle de
  usuarios y páginas de catálogo para los demás módulos.

### Verificación real

- `npm install` — correcto; añadió únicamente `next-themes@0.4.6` y actualizó
  `package-lock.json`.
- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 5 archivos y 16 pruebas.
- `npm run build` — correcto; generó `/`, `/chat/[chatId]`, `/chat/new`,
  `/home`, `/login`, `/tools`, `/tools/[moduleId]` y las rutas de Usuarios; no
  generó `/inbox`.
- `git diff --check` — correcto.

### Revisión manual realizada

Se comprobó login incorrecto y correcto, logout, protección de rutas, selector
de empresa, aislamiento de CyC, creación y consulta de un usuario, validación
de campos, menú de temas, sidebar expandida/colapsada, Sheet móvil, creación
de chat vacío, recomendaciones sin selección inicial, rellenado editable sin
envío, streaming, `/inbox` como 404, consola sin errores, ausencia de rail y
ausencia de overflow horizontal a 1440, 1024, 768 y 390 px.

## Entradas anteriores

Las entradas históricas de las iteraciones anteriores se conservan en el
historial Git. La eliminación de Inbox y los límites actuales descritos arriba
son la referencia vigente.
