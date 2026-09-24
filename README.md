# powermeta4

Aplicación local híbrida para conversar con un asistente y organizar
herramientas operativas por workspace de empresa. SQLite local es la única
fuente persistente; Zustand conserva únicamente el snapshot temporal para
renderizar la interfaz. No se guardan datos funcionales en `localStorage`,
`sessionStorage` ni en servicios remotos.

## Requisitos y puesta en marcha

La persistencia usa directamente `node:sqlite`, `DatabaseSync` y `backup()`.
El runtime admitido es Node.js `>=24.15 <25`; no se necesitan módulos SQLite
nativos externos, `node-gyp` ni Visual Studio Build Tools para esta persistencia.

```text
npm install
Copy-Item .env.example .env.local
npm run setup
npm run dev
```

`npm run setup` ejecuta la transición única segura, las migraciones SQL propias,
la validación y el bootstrap idempotente. En una instalación vacía crea solo
`Empresa local` y `activeCompanyId`: no crea conversaciones, mensajes,
favoritos, actividad, configuración de demostración ni sesiones.

La base se guarda bajo `POWERMETA4_DATA_DIR` (por defecto `./data`):

- `powermeta4.db`: base SQLite local.
- `uploads/`: archivos funcionales.
- `backups/`: ZIP exportados.
- `temp/`: imports pendientes y temporales controlados.

Las actualizaciones de esquema se aplican exclusivamente con
`npm run setup` o `npm run db:migrate`. La restauración nunca ejecuta
migraciones.

## Persistencia y autenticación

Los repositorios server-only validan `companyId` en cada mutación y usan
consultas preparadas, foreign keys, WAL, `busy_timeout=5000`,
`synchronous=NORMAL`, defensive mode cuando está disponible y extensiones
desactivadas. Las migraciones quedan registradas en `schema_migrations` con
huella de contenido para impedir modificaciones, omisiones o duplicados.

Las conversaciones conservan ramas mediante `parentMessageId`,
`generationId`, `sequence`, estados terminales y `headMessageId`. Se mantiene
`ExternalStoreRuntime`, `Thread` y `BranchPickerPrimitive` oficiales de
assistant-ui. Los mensajes `running` abandonados se recuperan como
`incomplete` y no se reanudan automáticamente.

El chat usa `POST /api/chat/run` (SSE, Node.js) y un endpoint
OpenAI-compatible global configurado exclusivamente en el servidor mediante
`AI_BASE_URL`, `AI_API_KEY` y `AI_MODEL`. Las tres variables son obligatorias;
no se guardan en SQLite ni se exponen al navegador. La UI solo recibe el
estado seguro `{ configured, model }` y muestra `IA · <AI_MODEL>` o
`IA no configurada`.

El transcript visible en SQLite conserva el texto real, ramas, edición,
regeneración y reload. Para cada ejecución el servidor sigue
`parentMessageId` desde el mensaje asistente en curso y envía únicamente
ancestros `user`/`assistant` con texto no vacío. Excluye el placeholder actual,
partes no textuales, system prompts, tools, function calling y cualquier dato
de Meta4. El cliente compatible normaliza la raíz de `AI_BASE_URL` a
`/chat/completions`, envía `{ model, messages, stream: true }`, procesa SSE y
persiste contenido incremental y estados `complete`, `cancelled` o `failed`.
El esquema actual es `DATABASE_SCHEMA_VERSION = 9`; la migración 009 elimina
la infraestructura exclusiva del agente y las configuraciones de proveedor,
sin tocar conversaciones, mensajes, attachments ni el grafo de padres.

SOAP Meta4, DPAPI CurrentUser y las cookies HttpOnly opacas permanecen
server-only. Tras un login Meta4 real se consulta el perfil de usuario
(`CSP_CONSULTA_ORO_INTRAN_NEW`, derivado de `META4_BASE_URL`) para
detectar todas las sociedades disponibles (`CYC` → `IBER` → `COLL`) y
persistir un perfil cifrado por sociedad. Un error de infraestructura
durante esa detección aborta el login para no mostrar una lista incompleta.
El listado de usuarios (`CSP_POWER4_USER_ALL`) usa la
sociedad activa del contexto operativo del servidor (`ARG_SOCIEDAD` sobre
un único `JSESSIONID`) y no persiste resultados en
SQLite. El alta de personas (`SRTC_LAUNCH_IMPORT`) copia
`Hire_1_PERSONA.xls`, Excel sustituye solo los campos de la UI y guarda un
fichero con nombre de usuario y fecha en el directorio `META4_HIRE_FILE_PATH`.
No guarda datos personales en SQLite. Los catálogos de Seguridad Social, Nómina y
Datos de pago (documento, países, geografía, estado civil, Atradius, organización,
moneda,
cabecera TC1, modalidad variable,
convenio y banco empresa de la sociedad activa, tipos de pago, ajuste, salario,
IRPF, sindicato y clave de percepción) se leen en servidor de la
base PeopleNet (SQL Server, `PEOPLENET_DB_*`, solo `SELECT`); la moneda de la
cuenta bancaria reutiliza el catálogo de monedas. Las poblaciones se buscan con
`GET /api/hire/places` (requiere sesión). El formulario
muestra ID y nombre y envía el ID. Las pruebas SOAP son simuladas y no llaman a Meta4 real. Los
endpoints CSP y la necesidad de SOAPAction quedan pendientes de confirmación
WSDL en la VM corporativa.

Para desarrollar sin una VM, credenciales o conectividad Meta4 puede activarse
el acceso local de depuración únicamente en `npm run dev`:

```text
POWERMETA4_DEBUG_AUTH=true
POWERMETA4_DEBUG_USERNAME=DEBUG
```

El modo requiere que `NODE_ENV` sea exactamente `development`; con `npm run build`
y `npm run start` queda deshabilitado incluso si la variable permanece en `true`.
Una sesión debug solo crea una sesión local SQLite y permite trabajar con
empresas, chats, ajustes y copias locales. No crea, restaura ni reutiliza una
sesión Meta4, ni expone tokens. Si se desactiva el flag, la cookie debug se
revoca y se exige un login Meta4 explícito.

## Copias locales

El ZIP contiene exclusivamente:

```text
manifest.json
database/powermeta4.db
uploads/
```

El manifest tiene exactamente estas cinco propiedades:

```json
{
  "backupVersion": 1,
  "databaseSchemaVersion": 9,
  "appVersion": "...",
  "createdAt": "...",
  "databasePath": "database/powermeta4.db"
}
```

La instantánea activa el lock de escrituras solo durante `backup()`. El
saneamiento de la copia, la lectura de uploads y la compresión se realizan sin
ese lock. Sesiones, imports pendientes, recibos de idempotencia y el perfil Meta4
cifrado se eliminan de la copia temporal; la base activa no se modifica al
exportar. Los backups de esquema 8 no se restauran directamente: la política
vigente exige coincidencia exacta con el esquema 9.

La restauración exige coincidencia exacta de `backupVersion` y
`databaseSchemaVersion` antes de adquirir mantenimiento. Valida seguridad del
ZIP, integridad SQLite, foreign keys, historial de migraciones y tablas
requeridas; sustituye base y uploads con rollback conjunto e invalida la
sesión para exigir un nuevo login.

## Verificación

```text
npm install
npm run setup
npm run lint
npm run typecheck
npm test
npm run build
git diff --check
git status --short
```

La aceptación de dependencias se limita a la persistencia nueva: no depende de
Prisma, `better-sqlite3`, `@prisma/adapter-better-sqlite3`, `node-gyp` ni
compiladores externos. No se afirma que otras dependencias no relacionadas
del proyecto jamás puedan compilar código nativo.

## Rutas principales

- `/login`: autenticación Meta4 local y, solo en desarrollo habilitado, modo debug local.
- `/`, `/home`, `/chat/new` y `/chat/[chatId]`: chat y launchpad.
- `/settings`: datos de la persona y datos/copias;
  el menú de usuario también abre el mismo contenido en un diálogo.
- `/tools`, `/tools/registro-retributivo`, `/tools/users`, `/tools/users/list`,
  `/tools/companies`, `/tools/payroll`, `/tools/reports` y `/tools/processes`:
  catálogo local de herramientas; `/tools/registro-retributivo` analiza el
  Registro Retributivo y los recibos en local; `/tools/users/list` consulta
  usuarios Meta4 por sociedad.

Las acciones ERP actuales son un catálogo local honesto; no ejecutan
operaciones externas ni representan sincronización con un sistema real.
