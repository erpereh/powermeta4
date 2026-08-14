# Changelog

## 2026-08-14 - Ajustes: datos de la persona e inteligencia artificial

### Cambios

- Ajustes se reduce a tres opciones: `Datos de la persona`, `Inteligencia
  artificial` y `Datos y copias`. El perfil Meta4 conserva todas sus secciones
  en una única vista y el aviso de modo debug permanece disponible.
- Se añade la tabla SQLite `ai_provider_configs`, aislada por `activeCompanyId`,
  con repositorio y Server Actions de listado, alta y borrado. El nombre y la
  Base URL se devuelven al cliente; las API keys se cifran con DPAPI CurrentUser
  y se exponen únicamente como `hasApiKey`.
- La nueva vista usa componentes shadcn existentes (`Card`, `Label`, `Input`,
  `Button`, `AlertDialog`, `Empty`, `Separator` y `Skeleton`), limpia el
  formulario tras el alta y muestra el borrado enmascarado con confirmación.
- Los backups conservan los metadatos de cada configuración, pero sustituyen
  `api_key_encrypted` por `null` durante el saneado.

### Verificación automática

- `npm run typecheck` — correcto.
- `npm test` — 61 archivos, 290 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 compiló las rutas privadas
  existentes, incluida `/settings`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` terminó sin errores del cambio y dejó 7 avisos
  preexistentes; `oxfmt --check` no tiene configuración en este repositorio y
  detectó formato en 156 archivos, incluidos archivos no tocados.

## 2026-08-13 - Personas: viewport, modal y periodos

### Cambios

- La tabla de Personas ocupa el alto restante del `main` (flex) en lugar
  de `max-h-[70dvh]`, para que la última fila visible no quede cortada
  por el borde de la ventana. El scroll de las filas es interno.
- El modal de detalle usa ancho explícito `min(64rem, 100vw - 2rem)` y
  un body con overflow vertical; los chips de periodo ya no se encogen
  (`shrink-0`) y envuelven de línea.
- `sortPeriodLabels` ordena periodos por año y de enero a diciembre.
  Se aplica al comparar PDFs y al pintar chips (análisis ya guardados).

### Verificación automática

- `npm run typecheck`
- `npx oxlint` — warning preexistente `ConceptosTable`
- `npx vitest run` page.test + `spanish-dates.test`
- `npm test` — 59 archivos y 281 pruebas correctas (2 skipped)
- `git diff --check`

### Comprobación en página

- `http://localhost:3000/tools/registro-retributivo` está en marcha; sin
  cookie de sesión la petición anónima redirige a `/login`. El flujo
  Personas → detalle → chips ordenados se cubre en `page.test.tsx`.

## 2026-08-13 - Layout Registro Retributivo

### Cambios

- El modal de detalle de persona cabe en pantalla: ancho
  `max-w-[min(64rem,calc(100vw-2rem))]`, viewport del ScrollArea con
  `overflow-x: hidden`, chips de periodo con wrap y tablas internas con
  scroll horizontal. Se eliminó «Copiar resumen» en Personas y Cuadre.
- Cada pestaña deja de repetir el `h1` del encabezado interno. Inicio
  conserva el título de la comparativa.
- La tarjeta «Análisis activo» pasa al pie de la sidebar local (y del
  Sheet móvil). Sin análisis muestra «Sin análisis activo».

### Verificación automática

- `npm run typecheck`
- `npx oxlint` — warnings preexistentes (`ConceptosTable` y helpers de export)
- `npx vitest run src/app/(app)/tools/registro-retributivo/page.test.tsx`
  — 1 archivo / 2 pruebas
- `npm test` — 58 archivos y 278 pruebas correctas (2 skipped)
- `npm run build`
- `git diff --check`

## 2026-08-13 - Registro Retributivo nativo en powermeta4

### Cambios

- `/tools/registro-retributivo` pasa de placeholder a herramienta nativa
  con Inicio, Personas, Cuadre Reg., Agrupaciones, Historial y Ajustes.
  Se eliminó por completo el asistente conversacional retributivo (nav,
  provider, PersonDetail, tab IA, API `/assistant/models` y tabla
  `retributivo_assistant_records` vía migración `005`).
- Causa FormData: el análisis local de `./fuentes` envía 13 051 814 bytes
  (21 PDFs 12 920 361 + Excel 131 453 = 12,45 MiB). El Proxy de Next clona
  el body con `DEFAULT_BODY_CLONE_SIZE_LIMIT` = 10 MB y trunca el
  multipart (`Failed to parse body as FormData.`). Arreglo A: el matcher
  de `proxy.ts` excluye solo `/api/registro-retributivo/analyze` con
  string estática compilable. No se subió `proxyClientMaxBodySize`. El
  Route Handler sigue validando la sesión. El handler aislado (Vitest,
  sin Proxy) ya parseaba FormData.
- Persistencia en `data/powermeta4.db` con repositorios explícitos de
  análisis, settings y state; PATCH atómico; backup/restore con un
  análisis. `/fuentes/` ignorado (PII). Suite con sintéticos; e2e local
  `describe.skipIf(!existsSync("fuentes"))`.
- `STANDALONE_TOOLS.registro-retributivo.implemented = true`. Se
  conservan explain/`AiExplanationPanel` en Personas y Cuadre. Se
  eliminaron `mammoth`, `rehype-sanitize` y `undici` al no tener imports.

### Verificación automática

- `npm run setup` (migrate + `integrity_check` / `foreign_key_check` + bootstrap)
- `npm run typecheck`
- `npx oxlint` (warnings preexistentes de helpers no usados en export/tablas;
  `oxfmt --check` con hallazgos preexistentes — entorno sin config de oxfmt)
- `npm test` — 58 archivos y 278 pruebas correctas (2 skipped)
- `npm run build` — incluye `/tools/registro-retributivo` y
  `/api/registro-retributivo/analyze`; no incluye `/assistant/models`
- `git diff --check`
- rama: `feat/integrate-registro-retributivo` (sin commit)
- origen `../reg_retrib_cyc` HEAD `57fdf4366c6e30bdfdb98c97ebf3563199d18d9b`

### Comprobación manual

- Analyze real con `./fuentes` (21 PDFs + Excel IBER) vía
  `runRetributivoAnalyze`: `people.length > 0`, métricas agregadas y
  persistencia SQLite en test, sin aserciones PII.
- `source-parity.domain.test.ts` ya no afirma nombres, matrículas ni
  importes identificables de recibos reales; usa agregados y exclusiones
  derivadas en runtime.
- Navegación de las 6 vistas cubierta por Testing Library. No se recorrió
  el upload de 12,45 MiB en navegador en este entorno.

## 2026-08-13 - Logo oficial, Acciones en Inicio y Herramientas standalone

### Cambios

- El isotipo untracked `powermeta4-mark.svg` se movió a
  `public/brand/powermeta4-mark.svg` (`Move-Item`, sin `git mv` ni cambios
  al SVG). `PowermetaLogo` es la única API de branding: compact muestra el
  isotipo; el modo normal añade el wordmark textual `powermeta4`. Se eliminó
  el mark geométrico inline y el recuadro cyan.
- Acciones (ERP/Meta4: Usuarios, Empresas, Nóminas, Informes, Procesos) se
  muestran solo en Inicio. Herramientas (standalone) se muestran solo en la
  sidebar. `searchTools` ya no incluye standalone. `SIDEBAR_TOOL_ITEMS`
  consume únicamente `STANDALONE_TOOLS` (`Reg. Retrib.`).
- Breadcrumb de workspaces ERP: Acciones → `/home`. `/tools` permanece como
  redirect de compatibilidad.

### Verificación automática

- `npm run typecheck`
- `npx oxlint` (limpio; `oxfmt --check` con hallazgos preexistentes en
  archivos no introducidos por este cambio — entorno sin config de oxfmt,
  no atribuible a este cambio)
- `npm test` — 47 archivos y 183 pruebas correctas
- `npm run build` — incluye `/home` y `/tools/registro-retributivo`
- `git diff --check`
- rama: `feat/sidebar-branding-reg-retrib` (sin commit)

### Comprobación manual

- El SVG se movió desde la raíz untracked a `public/brand/powermeta4-mark.svg`;
  no queda copia en `./powermeta4-mark.svg`. Las referencias runtime del
  asset están en `PowermetaLogo`.
- No se recorrió la UI en navegador (temas, sociedades y viewport) en este
  entorno. Home/Acciones, sidebar/Herramientas, branding y collapsible
  quedan cubiertos por pruebas de Testing Library.

## 2026-08-13 - Branding de sidebar, Herramientas colapsable y Registro Retributivo

### Cambios

- `PowermetaLogo` permanece como único punto de branding. La ruta oficial
  `/brand/powermeta4-logo.svg` queda documentada; el mark geométrico actual se
  conserva como fallback de desarrollo porque `public/brand/` aún no existe.
  SocietyHeader y login no renderizan el asset por su cuenta.
- Herramientas deja de ser un enlace a `/tools`. Todo el row es el
  `CollapsibleTrigger` (sin `SidebarMenuAction`). No toma estado de página
  activa. En desktop con sidebar colapsada, pulsar el icono Wrench llama a
  `setOpen(true)`, deja `toolsOpen=true` y muestra el submenu; no hay Popover
  ni DropdownMenu. En móvil el grupo abre/cierra sin cerrar el Sheet; los
  hijos sí cierran la sidebar al navegar.
- El registry admite herramientas standalone. `Reg. Retrib.` (`Registro
  Retributivo`) es la primera entrada del submenu, con icono `TableProperties`
  y ruta `/tools/registro-retributivo`. `implemented` sigue en `false`; la
  ruta placeholder es navegable desde sidebar, Home y Command Palette sin
  registrar visita. Las 20 acciones ERP no cambian de semántica.
- Nueva pantalla vacía en `/tools/registro-retributivo` con badge
  `Próximamente` y el copy de estado. `/tools` sigue redirigiendo a `/home`.

### Verificación automática

- `npm run typecheck`
- `npx oxlint` (limpio; `oxfmt --check` con hallazgos preexistentes en 30
  archivos no tocados en este cambio — entorno sin config de oxfmt, no
  atribuible a este cambio)
- `npm test` — 45 archivos y 177 pruebas correctas
- `npm run build` — incluye `/tools/registro-retributivo`
- `git diff --check`
- rama: `feat/sidebar-branding-reg-retrib` (sin commit)

### Comprobación manual

- No se colocó el SVG oficial; el fallback de desarrollo es el mark visible.
- No se recorrió la UI en navegador (sociedades Meta4, temas y móvil) en este
  entorno. El comportamiento de Herramientas colapsada/expandida y la ruta
  placeholder quedan cubiertos por pruebas de Testing Library.

## 2026-08-12 - Columna «Usuario Meta4» (clave_Self) en el listado de usuarios

### Cambios

- `CSP_POWER4_USER_ALL` ya traía `clave_Self` en cada `Csp_Carga_UsersRecordSet`
  pero el parser lo descartaba. `Meta4UserListItem` gana un campo `claveSelf`
  (vacío si el registro no lo trae, sin invalidar la fila) y
  `/tools/users/list` muestra una tercera columna «Usuario Meta4» (ID →
  Usuario Meta4 → Nombre y apellidos), ordenable y con búsqueda por `clave_Self`
  además de por ID y nombre, reutilizando el placeholder/aria-label ya
  actualizados del campo de búsqueda.
- Misma etiqueta «Usuario Meta4» que ya usan Ajustes y el diálogo de detalle
  de empleado para `clave_Self`, por consistencia.

### Verificación automática

- `npm run typecheck`, `npx oxlint` (limpio; `oxfmt --check` con el mismo
  problema de entorno preexistente ya documentado, no atribuible a este
  cambio), `npm test` — 41 archivos y 166 pruebas correctas, `npm run build`.

### Comprobación manual

- Con la sesión Meta4 real de `JORGE.SALVADOR`, `/tools/users/list` muestra
  la columna «Usuario Meta4» con datos reales, incluido el registro de
  ejemplo aportado (id `1746`, `clave_Self` `vcruzt`, «Víctor Cruz Trueba»).

## 2026-08-12 - Corrección: entidades XML numéricas sin decodificar en el listado de usuarios

### Cambios

- Los parsers SOAP usan `processEntities: false` en `fast-xml-parser` como
  defensa contra inyección de `DOCTYPE`/`ENTITY`, pero eso también dejaba sin
  decodificar las referencias numéricas de carácter que Meta4 mezcla con
  UTF-8 literal en la misma respuesta (p. ej. `&#xF3;` para «ó»), por lo que
  nombres como «Antonio Ram&#xF3;n S&#xE1;nchez Cort&#xE9;s Rodr&#xED;guez»
  aparecían sin decodificar en `/tools/users/list`.
- `decodeXmlEntities` (en `src/lib/meta4/format-profile-field.ts`) ahora
  decodifica también referencias numéricas hexadecimales (`&#xHH;`) y
  decimales (`&#NN;`) además de las cinco entidades XML predefinidas: se
  aplica en el punto único de extracción de texto (`toText`) de
  `src/lib/meta4/users/parser.ts` (listado) y
  `src/lib/meta4/users/employee-detail-parser.ts` (detalle de empleado,
  mismo defecto latente antes de mostrar ningún dato real). El diálogo de
  Ajustes/perfil se beneficia igual sin tocarlo, ya que reutiliza la misma
  función compartida.

### Verificación automática

- `npm run typecheck`
- `npm test` — 41 archivos y 164 pruebas correctas (sin cambios de fixtures:
  las pruebas existentes no usaban referencias numéricas, así que no había
  ningún caso que se rompiera al empezar a decodificarlas).

### Comprobación manual

- Con la sesión Meta4 real de `JORGE.SALVADOR` ya activa, `/tools/users/list`
  mostró correctamente «Antonio Ramón Sánchez Cortés Rodríguez» y otros
  nombres con acentos/ñ antes garbled; cero apariciones de `&#x` atribuibles
  a datos de Meta4 en el HTML servido (la única aparición restante es
  `&#x27;` del propio escapado HTML de React dentro de un atributo `class`,
  no relacionada).

## 2026-08-12 - Detalle de empleado Meta4 (CSP_POWER4_CONSULTA_ORO)

### Cambios

- Nueva operación SOAP autenticada `CSP_POWER4_CONSULTA_ORO` (`ARG_EMP`
  únicamente): módulo `employee-detail-{soap,parser,service,types,errors}.ts`
  en `src/lib/meta4/users/`, sin pasar por `getMeta4OperationalContext`
  (no hace falta sociedad). Parser separa el RecordSet anidado de correos
  (`Csp_Power4_Std_Email` → `Csp_Power4_Std_EmailRecordSet`, 1|N|0 vía
  `normalizeRecordSets` ya existente) de los ~50 campos planos del empleado,
  y distingue nodos estructurales ausentes de un RecordSet vacío
  (`META4_CONSULTA_ORO_NOT_FOUND`, a diferencia del listado que trata vacío
  como resultado válido).
- Pulsar una fila de `/tools/users/list` abre un `Dialog` grande
  (`UserDetailDialog`) con el detalle: secciones `dl` de dos columnas (mismo
  patrón que Ajustes) y un bloque de correos aparte, sin inventar una
  etiqueta para el código no documentado `std_Id_Location_Type`. La fecha
  centinela de Meta4 (`4000-01-01`) se muestra como «Vigente». La fila
  conserva su rol nativo `row` (no se sustituye por `role="button"`, lo que
  habría roto la semántica de tabla y las consultas de accesibilidad
  existentes) y añade `tabIndex`, `aria-label` y manejo de Enter/Espacio.
- Server Action `getMeta4EmployeeDetailViewAction` valida en servidor que el
  `employeeId` pertenece al listado de la sociedad activa
  (`listMeta4Users`) antes de consultar el detalle, como defensa en
  profundidad: la operación SOAP no lleva sociedad como argumento y la
  acción es invocable con cualquier id desde el cliente.
- `formatFieldValue`/`humanizeKey` se extrajeron de `meta4-profile.ts`
  (archivo `"use server"`) a `src/lib/meta4/format-profile-field.ts`, ya
  que ningún export de un módulo de Server Actions puede ser una función
  síncrona; se reutilizan sin cambio de comportamiento.
- `.env.example`: nueva `META4_USERS_DETAIL_URL`; se corrigieron los
  comentarios desactualizados de `META4_USER_PROFILE_URL` y
  `META4_USERS_LIST_URL` que aún decían «omit SOAPAction» pese a que ambos
  la requieren (`SOAPAction: ""`, ya gestionada por
  `executeAuthenticatedSoap` desde una corrección anterior de esta misma
  sesión). Docs en `AGENTS.md`/`DESIGN.md` actualizadas.

### Verificación automática

Se ejecutaron correctamente:

- `npm run typecheck`
- `npm test` — 41 archivos y 164 pruebas correctas.
- `npm run build`
- `git diff --check`
- `git status --short`

`npm run lint`: `oxlint` (el linter real) pasó limpio. `oxfmt --check`
reportó hallazgos en 219 archivos del repositorio, incluidos archivos no
tocados en este cambio (confirmado con `src/lib/meta4/societies.ts` sin
modificar) — el entorno no tiene configuración de `oxfmt` («No config
found, using defaults»), por lo que no es atribuible a este cambio; no se
reformateó el repositorio completo para no introducir un diff no
relacionado.

### Comprobación manual

- Con sesión Meta4 real (`JORGE.SALVADOR`), una llamada SOAP real contra
  `CSP_POWER4_CONSULTA_ORO` con `ARG_EMP=1013` (script `tsx` desechable,
  eliminado tras la comprobación) devolvió 71 campos y los 3 correos reales
  en el orden esperado, con la fecha centinela `4000-01-01` intacta sin
  transformar y sin fuga de las claves contenedoras de correo hacia los
  campos planos.
- `/tools/users/list` con la sesión real renderizó 25 filas reales de la
  sociedad CYC con `aria-label` de detalle correcto por fila y sin errores
  en el log del servidor de desarrollo.
- No se realizó un clic real en una fila desde un navegador: no hay
  Playwright ni un navegador headless instalado en este entorno. La
  apertura del diálogo por clic y por teclado (Enter/Espacio) sí está
  cubierta por pruebas automatizadas con Testing Library sobre el
  componente real (acción de servidor simulada), pero falta una
  comprobación visual en navegador real.

## 2026-08-12 - Listado Meta4 de usuarios

### Cambios

- Primera herramienta funcional de usuarios Meta4: operación
  `CSP_POWER4_USER_ALL` con `META4_USERS_LIST_URL`, sociedad solo desde
  `getMeta4OperationalContext()` y cookie vía `executeAuthenticatedSoap`.
- Parser con normalización 1|N|0 de `Csp_Carga_UsersRecordSet`, validación de
  estructura vs lista vacía, dedupe por `id_Empleado`, `id` como string con
  ceros y ordenación numérica-digit sin `Number()`.
- Ruta `/tools/users/list` con Data Table shadcn + TanStack Table v8: búsqueda
  sin acentos, ordenación, paginación 25 y estados debug/error/vacío.
- Registro `users.consult` pasa a implementado (`Listado de usuarios`).

### Verificación automática

Se ejecutaron correctamente:

- `npm run lint`
- `npm run typecheck`
- `npm test` — 36 archivos y 137 pruebas correctas.
- `npm run build`
- `git diff --check`
- `git status --short`

Corrección post-review: `compareEmployeeIds` movido a
`employee-id.ts` (sin deps SOAP); `parser.ts` marcado `server-only`; cabecera
«Nombre y apellidos». Revalidación focalizada: lint, typecheck y
`npm test -- src/lib/meta4/users src/components/tools/users` (5 archivos /
25 pruebas).

No se realizó una llamada Meta4 real ni inspección WSDL en la VM.

## 2026-08-12 - Meta4 society profile + Settings dialog

### Cambios

- Tras login Meta4 real se consulta `CSP_CONSULTA_ORO_INTRAN_NEW` (endpoint
  provisional `META4_USER_PROFILE_URL`) en secuencia CYC→IBER→COLL, se cifra el
  perfil con DPAPI y se persiste de forma atómica junto con SoapSession,
  company de sociedad y LocalBrowserSession.
- La sociedad operativa se resuelve solo en servidor con
  `getMeta4OperationalContext()`; el cliente no puede sustituirla.
- Migración `003_meta4_user_profile.sql` y esquema 3; los backups eliminan el
  perfil cifrado además de sesiones e imports.
- La sidebar muestra la sociedad o `Modo desarrollo` sin selector de empresas.
  Ajustes pasa a un Dialog grande con secciones de perfil Meta4; `/settings`
  reutiliza el mismo contenido.

### Verificación automática

Se ejecutaron correctamente:

- `npm run setup`
- `npm run lint`
- `npm run typecheck`
- `npm test` — 32 archivos y 110 pruebas correctas.
- `npm run build`
- `git diff --check`
- `git status --short`
- Migraciones 001/002/003 en SQLite temporal: `user_version=3`,
  `integrity_check=ok`, `foreign_key_check` vacío, tabla
  `meta4_user_profile` y columna `companies.society_code` presentes.

No se realizó una llamada Meta4 real ni inspección WSDL en la VM; el
endpoint CSP permanece provisional.

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
