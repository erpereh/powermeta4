# powermeta4 - estado de tareas

## Listado Meta4 de usuarios - 2026-08-12

- [x] Módulo SOAP `CSP_POWER4_USER_ALL` con sociedad solo desde
      `getMeta4OperationalContext()`, envelope, parser 1|N|0 RecordSets,
      dedupe por `id_Empleado` y servicio sin envolver errores de sesión.
- [x] Ruta `/tools/users/list` con Data Table (ID + nombre), búsqueda,
      ordenación, paginación 25 y estados debug/error/vacío.
- [x] Registro `users.consult` implementado; `META4_USERS_LIST_URL` en
      `.env.example`; docs AGENTS/DESIGN/README.
- [x] Ejecutar lint, typecheck, 36 archivos/137 pruebas, build,
      `git diff --check` y `git status --short`.
- [x] Post-review: separar `compareEmployeeIds` de SOAP/`fast-xml-parser`,
      cabecera «Nombre y apellidos», `server-only` en parser; revalidar lint,
      typecheck y tests focalizados de users (5/25).

## Meta4 society profile + Settings dialog - 2026-08-12

- [x] Migración `003_meta4_user_profile.sql` con perfil singleton, `society_code`
      y `DATABASE_SCHEMA_VERSION = 3` (`BACKUP_VERSION` permanece en 1).
- [x] Lookup CSP secuencial CYC→IBER→COLL con poster cookie-scoped, match
      estricto y errores tipados; endpoint provisional sin SOAPAction inventado.
- [x] Persistencia atómica de SoapSession + perfil cifrado + company de
      sociedad + LocalBrowserSession; repair single-flight post-migración.
- [x] Sociedad operacional solo vía `getMeta4OperationalContext()`; sidebar sin
      switcher; Settings como Dialog grande + `SettingsContent`.
- [x] Backups excluyen `meta4_user_profile`; DEBUG sin CSP; docs y suite de
      verificación actualizadas.
- [x] Ejecutar setup, lint, typecheck, 32 archivos/110 pruebas, build,
      `git diff --check`, `git status --short` y comprobación temporal de
      migraciones 001–003 con `integrity_check` / `foreign_key_check`.

## Autenticación DEBUG de desarrollo - 2026-08-11

- [x] Añadir `AuthMode`, `AuthContext`, `AuthView` y el resolutor server-only
      de sesión actual; el snapshot cliente contiene únicamente `auth` seguro.
- [x] Incorporar la migración aditiva SQLite `002_debug_auth_mode.sql` con
      `CHECK (auth_mode IN ('meta4', 'debug'))`, versión de esquema `2` e
      integridad/foreign keys verificados.
- [x] Implementar sesiones debug locales con nonce opaco hasheado, ID SQLite
      independiente y sin SOAP, DPAPI, tokens ni fallback a una SoapSession.
- [x] Mantener logout debug local y logout Meta4 global, incluyendo limpieza
      de cache, SoapSession y sesiones locales Meta4.
- [x] Bloquear SOAP antes de sesión operacional, DPAPI, renovación o red para
      cualquier contexto que no sea `meta4`.
- [x] Añadir el login debug condicionado por servidor, estado en sidebar y
      Ajustes, rutas locales y backups saneados.
- [x] Añadir pruebas unitarias, SQLite, rutas y UI con Testing Library,
      user-event y jsdom.
- [x] Corregir el falso rechazo de DEBUG con una única evaluación
      `isDebugAuthEnabled()`, error de infraestructura diferenciado y prueba
      integrada página/acción/SQLite.
- [x] Ejecutar setup temporal, lint, typecheck, 27 archivos/97 pruebas,
      build, `git diff --check` y comprobaciones controladas de login en
      desarrollo/producción.

## Implementación definitiva de persistencia local - 2026-08-06

- [x] Cortar la persistencia a `node:sqlite`/`DatabaseSync` con Node
      `>=24.15 <25`, sin dependencias SQLite nativas externas.
- [x] Centralizar `BACKUP_VERSION`, `DATABASE_SCHEMA_VERSION` y
      `BACKUP_DATABASE_PATH` en un único módulo server-only.
- [x] Crear migraciones SQL propias, `schema_migrations` con huellas de
      contenido, foreign keys, restricciones JSON/estado, ramas y bootstrap
      vacío de `Empresa local`.
- [x] Implementar transición única segura de la base heredada, repositorios
      explícitos, aislamiento por empresa, idempotencia y recuperación de
      mensajes `running`.
- [x] Mantener `ExternalStoreRuntime`, `Thread`, ramas persistentes,
      secuencias/generaciones obsoletas y streaming parcial acotado.
- [x] Implementar ZIP estricto, manifest exacto, snapshot coherente con lock
      de escrituras solo alrededor de `backup()`, saneamiento temporal,
      validación, sustitución atómica y rollback de base/uploads.
- [x] Mantener SOAP, DPAPI y cookies HttpOnly sin cambios funcionales.
- [x] Eliminar configuración, migraciones y artefactos generados del cliente
      ORM anterior.
- [x] Ejecutar la verificación final de `AGENTS.md`: `npm install`,
      `npm run setup`, lint, typecheck, tests, build, `git diff --check` y
      `git status --short`.

## Pendientes reales

- [ ] Comprobación manual de Meta4 real con credenciales válidas, conectividad
      y salida verificable. Las pruebas automáticas nunca llaman al proveedor.
- [ ] Sustituir el adaptador simulado de IA por AI SDK y un proveedor real.
- [ ] Incorporar permisos reales, invitaciones y administración completa de
      empresas.
- [ ] Implementar operaciones ERP externas y subida real de adjuntos.
- [ ] Añadir pruebas E2E en un entorno desplegado.

Las acciones ERP actuales son un catálogo local honesto; no simulan
conexiones, resultados ni operaciones externas.

## Nova + Home Command Center - 2026-08-12

- [x] Migrar shadcn de `radix-luma` a `radix-nova` vía CLI oficial; conservar
      tokens cian `b1temovYm`, Inter (`--font-inter`) y registro `@assistant-ui`.
- [x] Añadir componentes `empty` y `scroll-area` de shadcn.
- [x] Extender `searchTools` con nombre de módulo; eliminar acceso rápido del
      registro (`QUICK_TOOL_IDS` / `getQuickTools`).
- [x] Rediseñar `/home` como command center: paleta, dock de módulos, tarjetas
      compactas, actividad reciente y `Ctrl+K` acotado a herramientas en Inicio.
- [x] Ejecutar lint, typecheck, tests, build, `git diff --check` y
      `git status --short`.
