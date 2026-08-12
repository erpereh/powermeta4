# Changelog

## 2026-08-12 - Nova + Home Command Center

### Cambios

- Migración de shadcn/ui de `radix-luma` a `radix-nova` mediante
  `npx shadcn@latest apply nova -y`; tokens cian del preset `b1temovYm`,
  Inter y `registries.@assistant-ui` restaurados tras el apply.
- Nuevos componentes shadcn: `empty`, `scroll-area`.
- Inicio (`/home`) rediseñado como command center: trigger de búsqueda,
  paleta con `CommandDialog` y filtrado vía `searchTools`, dock de módulos con
  `Tabs` + `ScrollArea`, tarjetas compactas (`ToolCard`) y actividad reciente
  desde `workspace.recentTools`.
- `Ctrl+K` en `/home` abre la paleta de herramientas; en otras rutas mantiene
  la búsqueda de conversaciones en sidebar.
- Registro: `searchTools` incluye nombre de módulo; eliminados `QUICK_TOOL_IDS`
  y `getQuickTools`; añadido `getModuleTools`.

### Verificación automática

Se ejecutaron correctamente:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `git diff --check`
- `git status --short`

## 2026-08-11 - Autenticación DEBUG aislada para desarrollo

### Cambios

- Se añadió un modo `debug` server-only habilitable exclusivamente con
  `NODE_ENV=development` y `POWERMETA4_DEBUG_AUTH=true`, con usuario de
  desarrollo configurable y errores saneados para estado deshabilitado o no
  permitido.
- La migración `002_debug_auth_mode.sql` incorpora `auth_mode` restringido a
  `meta4`/`debug`; las sesiones anteriores migran a `meta4` y el esquema local
  pasa a la versión 2 sin cambiar el formato de backup (versión 1).
- La cookie conserva solo un nonce opaco; SQLite guarda un hash y un ID interno
  independiente. Las sesiones debug no crean ni restauran SoapSession, no usan
  DPAPI y no pueden caer a una sesión Meta4 antigua.
- El logout debug revoca solo la sesión local presentada. El logout Meta4
  mantiene el cierre global: elimina SoapSession, sesiones locales asociadas y
  cache de restauración.
- Se separaron el contexto resuelto server-only y `AuthView`; snapshots,
  Zustand, sidebar y Ajustes no serializan IDs, hashes, nonce, cookies,
  expiraciones ni tokens. Las rutas de workspace y backups resuelven el
  contexto central y los imports conservan el hash solo en servidor.
- El cliente SOAP exige `mode === 'meta4'` antes de cualquier acceso
  operacional, DPAPI, renovación o red, y devuelve `META4_SESSION_REQUIRED`
  en debug.
- `/login` muestra un segundo formulario sin campos y el botón de debug solo
  cuando el servidor lo autoriza. Sidebar y Ajustes muestran el estado de
  desarrollo, y los ZIP siguen eliminando todas las sesiones.
- Se corrigió el falso rechazo del login debug cuando la base activa todavía
  estaba en esquema 1: página, Server Action y servicio usan ahora la misma
  evaluación `isDebugAuthEnabled()`. Los errores reales de configuración
  conservan sus códigos exclusivos; SQLite e infraestructura devuelven un
  mensaje cliente distinto y registran solo nombre/código saneados en servidor.

### Verificación automática

Se ejecutaron correctamente:

- `POWERMETA4_DATA_DIR=<directorio temporal> npm run setup`
- `npm run setup` sobre la base activa, seguido de comprobación explícita de
  migraciones 001/002, columna `auth_mode`, integridad `ok` y cero errores de
  foreign keys.
- `npm run lint`
- `npm run typecheck`
- `npm test` — 27 archivos y 97 pruebas correctas.
- `POWERMETA4_DEBUG_AUTH=true npm run build`
- `git diff --check`

### Comprobación controlada

- Con desarrollo y flag `false`, `/login` devolvió 200 sin botón debug.
- Con desarrollo y flag `true`, `/login` devolvió 200 con el botón debug.
- Tras aplicar la migración 002 a la base activa, el formulario debug real
  creó la sesión local y navegó a `/home`; workspace respondió 200.
- En una SQLite temporal se creó una sesión debug y, al desactivar el flag, se
  revocó y resolvió a `null` aun con una SoapSession antigua presente, sin
  utilizarla.
- Con `POWERMETA4_DEBUG_AUTH=true`, `npm run start` devolvió `/login` 200 sin
  botón debug; producción no habilita el bypass.
- No se realizó una llamada Meta4 real ni una prueba E2E visual con credenciales
  reales; esas comprobaciones siguen fuera de alcance sin VM/credenciales.

## 2026-08-06 - Corte definitivo a node:sqlite

### Cambios

- Se reemplazó la persistencia SQLite por `node:sqlite`/`DatabaseSync` y se
  fijó Node `>=24.15 <25`; se eliminaron la configuración, migraciones y
  artefactos generados del ORM anterior.
- Se centralizaron `BACKUP_VERSION`, `DATABASE_SCHEMA_VERSION` y
  `BACKUP_DATABASE_PATH`; el manifest y la validación usan exclusivamente las
  cinco claves aprobadas.
- Se añadieron migraciones SQL propias con huellas SHA-256, bootstrap vacío,
  transición única segura, repositorios explícitos, ramas persistentes,
  idempotencia y recuperación de mensajes interrumpidos.
- La exportación mantiene el lock de escrituras únicamente durante
  `backup()`; la restauración exige compatibilidad exacta, no ejecuta
  migraciones y conserva rollback conjunto de base y uploads.
- SOAP, DPAPI, cookies HttpOnly y límites de las rutas locales se conservaron
  funcionalmente.

### Verificación automática

Se ejecutaron correctamente:

- `npm install`
- `npm run setup`
- `npm run lint`
- `npm run typecheck`
- `npm test` — 19 archivos y 65 pruebas correctas.
- `npm run build`
- `git diff --check`
- `git status --short`

## 2026-08-05 - Persistencia local, autenticacion SOAP y copias seguras

### Cambios

- Se verifico Node.js 24.18.0, TypeScript 7.0.2, Next.js 16.3.0, React
  19.2.8, assistant-ui 0.15.4, module esnext, moduleResolution bundler y la
  ausencia de type: module antes de preparar la persistencia local.
- Se añadió el esquema local inicial con migraciones SQL propias y setup
  idempotente bajo `POWERMETA4_DATA_DIR`; la persistencia anterior quedó
  sustituida por la implementación definitiva con `node:sqlite`.
- El bootstrap crea Empresa local solo si no hay empresas y usa un UUID
  generado. El codigo no depende de company-local ni recrea la empresa tras
  renombrarla.
- El workspace y el chat son server-authoritative. Zustand ya no persiste datos
  funcionales en localStorage; el cliente mantiene solo el snapshot temporal.
  Los mensajes usan contenido JSON, IDs idempotentes y estados no ambiguos.
- Se implementaron SOAP Meta4, XML escapado, Faults, cookies, DPAPI
  CurrentUser, cookie local opaca, single-flight de restauracion y renovacion
  de sesion para operaciones autenticadas.
- Se mantuvo src/proxy.ts por la convencion real de Next.js 16.3; no ejecuta
  la persistencia, DPAPI ni SOAP.
- Se creo /settings con Tabs, Card, Button, Badge, Alert, AlertDialog,
  Progress, Separator, Skeleton e Input oficiales de shadcn.
- Se implementaron exportacion SQLite consistente e importacion validate/
  confirm/cancel con manifest, checksum, limites, proteccion Zip Slip y
  symlinks, importId opaco asociado a sesion, expiracion, consumo atomico,
  maintenance lock, reemplazo atomico y rollback.

### Verificacion automatica

Se ejecutaron al finalizar:

- npm run setup
- npm test
- npm run lint
- npm run typecheck
- npm run build
- git diff --check
- git status --short

Resultado de la ejecucion: 14 archivos de prueba y 43 pruebas correctas.

### Comprobacion manual

- Se verifico el bootstrap local idempotente y la base SQLite creada bajo un
  directorio de datos controlado.
- Se verifico exportar, validar, rechazar una sesion distinta, detectar un
  checksum alterado, expirar un import, restaurar una vez y limpiar temporales.
- No se realizo una llamada Meta4 real: faltan credenciales y una salida
  verificable del proveedor.

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
