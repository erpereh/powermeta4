# powermeta4

Aplicacion local hibrida para conversar con un asistente y organizar
herramientas operativas por workspace de empresa. Los datos funcionales se
guardan en SQLite local mediante Prisma 7. El modelo de IA y las acciones ERP
siguen siendo adaptadores locales de desarrollo: no hay proveedor de IA real
ni conexion ERP automatica.

## Requisitos y puesta en marcha

El preflight validado el 2026-08-05 fue:

- Node.js 24.18.0.
- TypeScript 7.0.2.
- Next.js 16.3.0, React 19.2.8 y assistant-ui 0.15.4.
- tsconfig.json con module: esnext y moduleResolution: bundler.
- package.json sin la propiedad type: module.

Node.js y TypeScript cumplen los minimos de Prisma 7. Prisma usa
prisma.config.ts, un cliente generado explicitamente y el adapter oficial de
better-sqlite3; no se modifico la configuracion ESM de Next.js.

    npm install
    Copy-Item .env.example .env.local
    npm run setup
    npm run dev

npm run setup genera el cliente Prisma, aplica migraciones y crea una unica
empresa Empresa local con UUID si la base todavia no contiene empresas. Es
idempotente: si ya existe cualquier empresa, no crea otra ni vuelve a crear la
empresa inicial despues de renombrarla.

La base se guarda bajo POWERMETA4_DATA_DIR (por defecto ./data):

- powermeta4.db: SQLite local.
- uploads/: archivos funcionales.
- backups/: ZIP exportados.
- temp/: imports pendientes y temporales controlados.

## Persistencia y autenticacion

El servidor es la fuente de verdad para empresas, conversaciones, mensajes,
favoritos, modelos, configuracion y actividad. El store Zustand del cliente
solo mantiene el snapshot temporal para renderizar la interfaz; no usa
persist, localStorage funcional ni sessionStorage. next-themes conserva su
almacenamiento de tema.

El Thread mantiene ExternalStoreRuntime, streaming, edicion, cancelacion y
recomendaciones no ejecutables. Los mensajes se guardan como contenido JSON y
usan estados explicitos complete, incomplete, cancelled o failed. Una
generacion cancelada o fallida no se muestra como completada y no se reinicia
automaticamente al recargar.

El login usa SOAP Meta4 server-only con META4_LOGIN_URL, XML escapado, idioma
3, timeout y sin SOAPAction. El usuario se conserva exactamente como se
escribio. JSESSIONID y refreshSessionId se cifran con Windows DPAPI
CurrentUser; el navegador solo recibe una cookie opaca HttpOnly, SameSite
Strict, Path / y duracion deslizante de 30 dias. Las sesiones SOAP se simulan
en las pruebas y nunca se llaman automaticamente desde npm test.

## Copias locales

/settings permite crear un ZIP o validar y confirmar una restauracion. La
exportacion incluye manifest, snapshot SQLite consistente, workspace funcional,
actividad no sensible y uploads; excluye sesiones, cookies, tokens, secretos,
.env, logs y temporales.

La importacion usa:

- POST /api/backups/import/validate para validar y crear un importId opaco.
- POST /api/backups/import/confirm para consumirlo una sola vez.
- DELETE /api/backups/import/[importId] para cancelar y limpiar.

El ZIP validado permanece solo en data/temp, asociado al hash de la sesion
local, con checksum y expiracion de 15 minutos. El cliente nunca envia ni
recibe rutas fisicas. La confirmacion vuelve a comprobar sesion, checksum,
manifest, version, integridad SQLite, consumo unico y reemplazo atomico con
rollback.

Los limites por defecto son 256 MB comprimido, 1 GB descomprimido, 10.000
entradas y 256 MB por archivo. Se pueden cambiar mediante las variables
POWERMETA4_BACKUP_* de .env.example. backupVersion debe ser exactamente 1 y
databaseSchemaVersion debe coincidir con la version soportada. appVersion solo
es informativa.

## Rutas principales

- /login: autenticacion Meta4 local.
- /, /home, /chat/new y /chat/[chatId]: chat y launchpad.
- /settings: sesion y copias locales.
- /tools, /tools/users, /tools/companies, /tools/payroll, /tools/reports y
  /tools/processes: catalogo local de herramientas.

Las rutas antiguas de Usuarios redirigen a /tools/users; /inbox no existe.
Las acciones ERP no ejecutan operaciones externas ni representan sincronizacion
con un sistema real.

## Verificacion

    npm run setup
    npm test
    npm run lint
    npm run typecheck
    npm run build
    git diff --check
    git status --short

Las pruebas de SOAP son simuladas. El funcionamiento de Meta4 real queda
pendiente de credenciales validas, conectividad y una comprobacion manual con
salida verificable.
