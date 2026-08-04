# Changelog

## 2026-08-04 — Corrección de workspaces locales y herramientas ERP

### Cambios

- `CompanyId` ahora admite empresas locales dinámicas. El store v3 persiste
  `companies`, crea workspaces vacíos, selecciona nuevas empresas y protege la
  última al eliminar.
- La cabecera de la sidebar integra logo, producto y empresa activa en un único
  selector, con creación, submenús de selección/eliminación y confirmaciones.
- Herramientas separa el enlace de navegación del control de expansión y abre
  automáticamente el grupo al entrar en un módulo.
- `ModuleWorkspace` es la plantilla común de los cinco módulos. Usuarios dejó
  de tener CRUD local; sus rutas antiguas redirigen al catálogo y sus cuatro
  acciones están preparadas para sistemas ERP externos.
- Las tarjetas no implementadas no navegan ni registran actividad y anuncian
  `Esta herramienta estará disponible próximamente.`. Las recomendaciones ERP
  siguen usando el registro central y `send={false}`.
- Se eliminaron los tipos, componentes, validación y pruebas del CRUD local de
  usuarios. La migración v2→v3 conserva chats y elimina únicamente `users`.

### Verificación real

- `npm install` — correcto; dependencias al día y sin cambios de dependencias.
- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 4 archivos y 18 pruebas.
- `npm run build` — correcto; se generaron las rutas privadas previstas y no existe
  `/inbox`.
- `git diff --check` — correcto.
- Revisión funcional — correcta: creación/eliminación de workspace local,
  selector integrado, expansión de Herramientas sin cambiar la URL, catálogo de
  Usuarios sin CRUD, redirección de rutas antiguas, 404 de `/inbox`,
  recomendaciones sin envío automático y consola sin errores ni avisos.

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
