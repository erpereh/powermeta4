# powermeta4 - estado de tareas

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
