# Plan de implementación: base local, autenticación SOAP y copias

## Contexto y restricciones globales

- Proyecto verificado con Node.js 24.18.0, TypeScript 7.0.2, Next.js 16.3.0, React 19.2.8, assistant-ui 0.15.4 y Zustand 5.0.14.
- `tsconfig.json` usa `module: esnext` y `moduleResolution: bundler`; `package.json` no contiene `"type": "module"`. No cambiar esta configuración a ciegas.
- Mantener la rama actual y `ExternalStoreRuntime`. No crear worktrees, ramas, reset destructivo, `shadcn init`, `assistant-ui init` ni comandos `--overwrite`.
- Usar npm y conservar `package-lock.json`. Editar archivos con `apply_patch`. TypeScript estricto.
- La variable exacta de datos es `POWERMETA4_DATA_DIR`, con valor de ejemplo `./data`. No usar una variante con espacios.
- Prisma 7 debe usar `prisma.config.ts`, cliente generado explícitamente y el adapter SQLite oficial vigente. Scripts: `db:generate`, `db:migrate`, `db:deploy`, `db:validate`, `db:studio`, `setup`.
- `backupVersion` debe ser exactamente `1`; `databaseSchemaVersion` debe coincidir exactamente con la versión soportada. `appVersion` es informativa y no causa rechazo por sí sola.
- Bootstrap idempotente: si no hay empresas, crear exactamente una `Empresa local` con UUID generado; si ya existe alguna, no crear otra. No seed de chats, mensajes, favoritos, actividad o demo.
- `LocalBrowserSession` guarda únicamente hash de cookie; la cookie es opaca, aleatoria, HttpOnly, SameSite Strict, Path `/`, Secure solo sobre HTTPS y sliding 30 días con actualización máxima aproximada cada 24 horas.
- Solo una `SoapSession` global. Login nuevo revoca sesiones locales anteriores y emite cookie solo al navegador que inició sesión.
- Proxy/middleware solo hace comprobaciones optimistas; layouts, Server Actions y Route Handlers Node.js autorizan realmente. Prisma, DPAPI y SOAP nunca se ejecutan en proxy/middleware.
- ZIP de backups: límites configurables con defaults comprimido 268435456, descomprimido 1073741824, entradas 10000 y archivo individual 268435456. Importación con `importId` opaco de un solo uso, hash persistido, asociación a sesión, checksum, ruta relativa controlada, expiración de 15 minutos, consumo atómico y limpieza siempre.
- No aceptar rutas o nombres temporales del cliente. Validar manifest, esquema e `integrity_check` justo antes de reemplazar, con lock, backup interno, reemplazo atómico y rollback.
- Mensajes: estados `complete`, `incomplete`, `cancelled`, `failed`; nunca presentar cancelado/fallido como completo, no reiniciar tras recargar, no duplicar respuesta para el mismo mensaje de usuario y persistir el final una sola vez con ID idempotente.
- Settings debe usar shadcn oficial: DropdownMenu, Tabs, Card, Button, Badge, Alert, AlertDialog, Progress o estado indeterminado, Separator, Skeleton e Input; añadir faltantes con el procedimiento oficial sin preset nuevo ni sobrescritura manual.

## Tareas

### Task 1 — Prisma 7, SQLite, dominio y bootstrap

Documentar el preflight real de Node/TypeScript/Next/ESM. Instalar Prisma 7, adapter better-sqlite3 y tipos requeridos sin modificar `type: module` salvo error demostrado. Crear configuración, schema, migración inicial, cliente server-only, directorios de datos, repositorios base, constantes de backup/esquema, DTOs `WorkspaceSnapshot`/`ActionResult` y bootstrap idempotente de la primera empresa. Añadir pruebas del schema/bootstrap/repositorios.

### Task 2 — SOAP Meta4, DPAPI y sesiones

Implementar login Meta4 server-only con XML escapado, usuario exacto, idioma 3, `META4_LOGIN_URL`, timeout, headers requeridas y sin SOAPAction. Parsear namespaces, Faults y Set-Cookie; cifrar JSESSIONID y refreshSessionId mediante DPAPI CurrentUser encapsulada y testeable. Implementar `SoapSession` global, cookie local opaca, login/logout, bootstrap single-flight, `executeAuthenticatedSoap` con renovación única y `src/proxy.ts` dependiente de Next 16.3. Añadir pruebas simuladas de XML, cookies, Faults, DPAPI, login parcial, retrieve, expiración y single-flight.

### Task 3 — Workspace server-authoritative y assistant-ui

Eliminar persistencia funcional de Zustand/localStorage y la migración legacy después de una hidratación SQLite exitosa, conservando next-themes. Implementar repositorios/servicios, `GET /api/workspace`, conversación por ID y Server Actions para empresas, conversaciones, favoritos, settings y mensajes. Rehacer el runtime sobre snapshot temporal controlado, manteniendo `ExternalStoreRuntime`, streaming, edición, cancelación, títulos, favoritos y recomendaciones no ejecutables. Persistir usuario antes de generar y respuesta una sola vez con estados no ambiguos. Añadir pruebas de aislamiento, cascadas, configuración, idempotencia y assistant-ui.

### Task 4 — Settings, exportación e importación segura

Crear `/settings` desde el perfil con componentes shadcn oficiales. Implementar exportación SQLite consistente, manifest, checksum, integridad, configuración y uploads saneados, excluyendo sesiones/tokens/secretos/logs/temporales. Implementar export route y validate/confirm/cancel routes con límites, Zip Slip/symlink checks, `PendingBackupImport` de un solo uso, lock, backup interno, reemplazo atómico y rollback. Mostrar appVersion informativa y usar AlertDialog, Input, Progress/estado indeterminado, Skeleton, Alert y Badge. Añadir pruebas de ZIP, checksum, expiración, asociación, consumo, límites, integridad y rollback.

### Task 5 — Integración, documentación y verificación

Actualizar README, `.env.example`, AGENTS/spec/todo/changelog con el estado real, instrucciones `npm run setup`, seguridad y pruebas. Revisar que no queden credenciales demo, localStorage funcional, rutas físicas expuestas, sesiones/tokens en backups ni asumido `company-local`. Ejecutar `npm run setup`, `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`, `git diff --check` y `git status --short`, y documentar separadamente pruebas automáticas, comprobaciones manuales y pendientes Meta4 real.

## Interfaces obligatorias

```ts
getWorkspaceSnapshot(): Promise<WorkspaceSnapshot>
loginAction(previousState, formData): Promise<LoginState>
logoutAction(): Promise<never>
executeAuthenticatedSoap<T>(operation): Promise<T>
validateBackup(stream): Promise<BackupValidationResult>
restoreBackup(importId): Promise<RestoreResult>
type ActionResult<T> = { ok: true; data: T } | { ok: false; errorCode: string; message: string }
```

`SessionView` solo expone username, estado y última validación. `BackupValidationResult` solo expone manifest saneado, tamaños, checksum e importId; nunca rutas físicas ni tokens.

## Verificación y límites

Las pruebas SOAP nunca llaman a Meta4 real. No afirmar éxito real sin credenciales válidas y salida verificable. No ejecutar Prisma CLI desde rutas, Server Components, proxy o navegador. Las autorizaciones de servidor deben comprobar empresa, conversación y sesión local antes de cada mutación sensible.
