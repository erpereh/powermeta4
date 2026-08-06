# Plan obsoleto: persistencia local anterior

Este documento queda conservado únicamente como referencia histórica y no es
una guía de implementación vigente. El plan anterior basado en Prisma y
módulos SQLite externos fue sustituido por la implementación definitiva con
`node:sqlite`, `DatabaseSync` y Node `>=24.15 <25`.

La especificación vigente está en `spec/todo.md`, `README.md` y en las
migraciones SQL de `src/server/database/migrations/`. Las actualizaciones de
esquema se ejecutan con `npm run setup` o `npm run db:migrate`; la restauración
de backups exige compatibilidad exacta y no ejecuta migraciones.
