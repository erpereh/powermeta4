# powermeta4 - estado de tareas

## Implementacion local aprobada - 2026-08-05

- [x] Documentar el preflight real de Node.js, TypeScript, Next.js, ESM y
      dependencias antes de instalar Prisma 7.
- [x] Instalar Prisma 7 con better-sqlite3, adapter oficial, tipos requeridos,
      prisma.config.ts, migracion inicial y scripts de base de datos.
- [x] Crear el bootstrap idempotente de una unica Empresa local con UUID
      generado, sin datos demo ni dependencia de company-local.
- [x] Sustituir la persistencia funcional de Zustand por snapshots server-
      authoritative en SQLite y mantener ExternalStoreRuntime.
- [x] Persistir mensajes estructurados con IDs estables y estados complete,
      incomplete, cancelled y failed, sin reinicio automatico ni duplicados.
- [x] Implementar login SOAP Meta4 server-only, DPAPI CurrentUser, cookie
      opaca, renovacion single-flight y autorizacion real en servidor.
- [x] Conservar src/proxy.ts por la convencion de Next.js 16.3 y limitarlo a
      comprobaciones optimistas.
- [x] Crear /settings con componentes shadcn oficiales y flujo de copias.
- [x] Implementar ZIP consistente, manifest, checksum, limites, Zip Slip,
      symlinks, importId opaco de un solo uso, expiracion, lock, reemplazo
      atomico y rollback.
- [x] Añadir pruebas de esquema/bootstrap, SOAP, DPAPI, sesiones, workspace,
      aislamiento/cascadas, mensajes y copias seguras.
- [x] Ejecutar la verificacion final indicada en AGENTS.md y documentar sus
      resultados en spec/changelog.md.

## Pendientes reales

- [ ] Comprobacion manual de Meta4 real con credenciales validas, conectividad y
      salida verificable. Las pruebas automaticas nunca llaman al proveedor.
- [ ] Sustituir el adaptador simulado de IA por AI SDK y un proveedor real.
- [ ] Incorporar permisos reales, invitaciones y administracion completa de
      empresas.
- [ ] Implementar operaciones ERP externas y subida real de adjuntos.
- [ ] Añadir pruebas E2E en un entorno desplegado.

Las acciones ERP actuales son un catalogo local honesto; no simulan conexiones,
resultados ni operaciones externas.
