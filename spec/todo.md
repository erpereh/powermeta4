# powermeta4 - estado de tareas

## Picker, validación de proveedor y wrap de `hola` - 2026-08-17

- [x] Diagnóstico: el picker podía mostrar Gemini con un fallback de UI
      no persistido; el runner convertía cualquier fallo de
      `resolveProvider` (incluido DPAPI) en «Configura un modelo en
      Ajustes». `hola` → `ho`/`la` era CSS (columna grid `auto` + wrap),
      no un `\n` en `content_json`.
- [x] Una sola fuente: `ai_provider_configs` + `selectedProviderConfigId`.
      Repair persistido; el send usa un ref del id actual; el runner solo
      muestra el copy de Ajustes ante `AgentProviderConfigError`.
- [x] Al guardar se prueba el proveedor (chat sintético «Reply only with
      OK» + tool `test_tool`) y no se persiste si falla. Base URL
      canónica con `URL`.
- [x] Bubble de usuario: flex a ancho completo, `break-words` y
      `word-break: normal`.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 75 archivos, 376 pruebas correctas y 2
      omitidas; `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración; 195
      archivos, incluidos no tocados).

## Login Meta4 en VM / DPAPI crypt32 - 2026-08-17

- [x] Diagnóstico: SOAP Login y `CSP_CONSULTA_ORO` en CYC hacían
      `match`; el POST `/login` devolvía 200 con el error genérico de
      credenciales porque `loginAction` tragaba fallos posteriores
      (DPAPI vía PowerShell o persistencia SQLite) sin log.
- [x] DPAPI CurrentUser pasa a `CryptProtectData` /
      `CryptUnprotectData` in-process (`koffi` + `crypt32.dll`), sin
      `powershell.exe`. El adapter sigue inyectable en tests.
- [x] Tras un perfil válido, cifrado, SQLite o cookie fallidos lanzan
      `LocalSessionStoreError` y la UI dice que Meta4 autenticó pero no
      se pudo guardar la sesión local. SOAP/red conservan el mensaje de
      usuario/contraseña/conexión. `no such table` añade hint
      `npm run setup` en el log, sin secretos.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 68 archivos, 346 pruebas correctas y 2
      omitidas (incluye roundtrip DPAPI CurrentUser en Windows);
      `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración; 191
      archivos, incluidos no tocados). Sin commit.

## Fix 1013 / employee.get_field - 2026-08-14

- [x] Diagnóstico A vs B: el string persistido e hidratado de `"1013"` no
      contiene `\\n` (codepoints 49,48,49,51). El wrap visual era CSS
      (`wrap-break-word` + `pre-line` de assistant-ui). Bubble de usuario
      pasa a `break-words [word-break:normal]`.
- [x] Leftover/outbound dejaron de usar `.includes()`: coincidencia de token
      completo. `collectUserPlaintext` no mete partículas/stopwords. El
      vault reminta `EMP_*` si el hex embebe una matrícula. Lookup
      case-insensitive. `employee.get_field` sigue rechazando `1013` crudo.
- [x] Resolver: `1013`/`0001`/`0013`/`1001512` son un token; `"0013"` se
      conserva; replace con límite de palabra. Primer turno crea el binding.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin errores
      del cambio (warnings preexistentes de Registro Retributivo);
      `npm test` 67 archivos, 338 pruebas correctas y 2 omitidas;
      `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración; 186
      archivos, incluidos no tocados). Sin commit.

## Agent runtime + Privacy Gateway - 2026-08-14

- [x] Migración `007_agent_runtime`: `ai_provider_configs.model` nullable,
      vault `agent_privacy_bindings` (solo `EMP_*`), `agent_turn_projections`
      y `agent_pending_disambiguation`. `DATABASE_SCHEMA_VERSION = 7`.
- [x] Picker del composer alimentado por configs usables de la empresa
      activa (`selectedProviderConfigId`). Sin lista Luma. El servidor no
      confía el `providerConfigId` del cliente.
- [x] Privacy gateway fail-closed: el transcript SQLite visible permanece
      real; el LLM solo recibe proyecciones. Sin proyección + PII en un
      turno del asistente → no hay `fetch` al proveedor y el historial no
      se borra. Sin vault `VAL_*`. Una sola herramienta real:
      `employee.get_field`. WRITE no se ejecuta.
- [x] Contrato de privacidad: body JSON completo sin PII; respuesta visible
      local con nombre y puesto; follow-up reutiliza `EMP_*`; debug sin SOAP;
      proyección ausente bloquea el proveedor y conserva el mensaje real.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin errores
      del cambio (warnings preexistentes de Registro Retributivo);
      `npm test` 62 archivos, 300 pruebas correctas y 2 omitidas;
      `npm run build` correcto (incluye `POST /api/agent/run`);
      `git diff --check` correcto. `npm run lint` falla en `oxfmt --check`
      (sin configuración; 178 archivos, incluidos no tocados). Sin commit.

## Ajustes: datos de la persona e inteligencia artificial - 2026-08-14

- [x] Ajustes queda reducido a `Datos de la persona`, `Inteligencia artificial`
      y `Datos y copias`, en ese orden. Todas las secciones disponibles del
      perfil Meta4 se muestran agrupadas en una sola vista y se conserva el
      aviso de modo debug.
- [x] Añadida la persistencia `ai_provider_configs`, aislada por empresa
      activa, con repositorio y Server Actions para listar, crear y eliminar.
      Las API keys se cifran con DPAPI y el cliente recibe únicamente
      `hasApiKey`; las copias conservan metadatos y eliminan el cifrado.
- [x] Añadido formulario shadcn con nombre, Base URL y API key, listado
      enmascarado y borrado confirmado mediante `AlertDialog`, incluyendo
      validación de URLs absolutas `http`/`https`.
- [x] Verificación final: `npm run typecheck`, `npm test` (61 archivos, 290
      pruebas correctas y 2 omitidas), `npm run build` y `git diff --check`.
      `npm run lint` ejecuta `oxlint` sin errores del cambio, pero el comando
      completo no pasa porque `oxfmt --check` carece de configuración y detecta
      formato en 156 archivos del repositorio, incluidos archivos no tocados.

## Personas viewport, modal y periodos - 2026-08-13

- [x] Tabla Personas encajada en el `main` (`flex-1`, sin `max-h-[70dvh]`).
      El scroll de filas queda dentro de la tabla.
- [x] Modal de detalle: ancho acotado a `100vw-2rem`, body con
      `overflow-x-hidden`, chips sin `shrink` (no recortan «Del '»).
- [x] Periodos ordenados ene→dic por año (`sortPeriodLabels`) en análisis
      nuevos y en chips de detalle persistidos.
- [x] typecheck, page.test (detalle + chips), `spanish-dates.test`,
      `npm test` 59/281 (2 skipped), oxlint (warning preexistente
      `ConceptosTable`), `git diff --check`.

## Layout Registro Retributivo - 2026-08-13

- [x] Modal de detalle contenido en viewport (`max-w` + overflow-x hidden);
      chips de periodo con wrap; tablas internas con scroll horizontal.
      «Copiar resumen» eliminado en Personas y Cuadre.
- [x] Títulos h2 duplicados quitados de Personas, Cuadre, Agrupaciones,
      Historial y Ajustes. Inicio conserva «Comparativa Recibos vs Registro
      Retributivo».
- [x] «Análisis activo» en el pie de la sidebar local (y Sheet móvil).
      Dashboard ya no muestra esa tarjeta.
- [x] typecheck, page.test (2), `npm test` 58/278 (2 skipped), oxlint
      (warnings preexistentes), build, `git diff --check`.

## Registro Retributivo nativo - 2026-08-13

- [x] Feature en `/tools/registro-retributivo`: Inicio, Personas, Cuadre
      Reg., Agrupaciones, Historial y Ajustes. Sin asistente conversacional
      retributivo (grep limpio en `src/features/registro-retributivo`).
- [x] FormData: el payload local `./fuentes` pesa 13 051 814 bytes
      (21 PDFs = 12 920 361 + Excel = 131 453; 12,45 MiB) y supera el límite
      de clonado del Proxy Next (10 MB). El matcher de `proxy.ts` excluye
      solo `/api/registro-retributivo/analyze`. Auth sigue en el Route
      Handler. Tests: 401, multipart 1/N PDFs, body >10 MB y TypeError
      mapeado. Analyze con `./fuentes` produce personas, cuadre interno y
      hojas agrupadas, y persiste en SQLite de prueba.
- [x] Persistencia SQLite: repos `createRetributivoAnalysisRepository`,
      `createRetributivoSettingsRepository` y `createRetributivoStateRepository`
      (PATCH atómico). Backup/restore conserva un análisis. Migración `005`
      elimina `retributivo_assistant_records`. `DATABASE_SCHEMA_VERSION = 5`.
      `/fuentes/` en `.gitignore`; no versionado.
- [x] `AiExplanationPanel` / explain se conservan en Personas y Cuadre.
      Tab Ajustes/IA y el endpoint de modelos del asistente retributivo
      eliminados. `implemented: true` en `STANDALONE_TOOLS`.
- [x] setup, typecheck, oxlint, 58 archivos/278 pruebas (2 skipped), build,
      `git diff --check`. Origen `reg_retrib_cyc` intacto en
      `57fdf4366c6e30bdfdb98c97ebf3563199d18d9b`. Sin commit.

## Logo oficial + Acciones / Herramientas - 2026-08-13

- [x] `powermeta4-mark.svg` untracked movido con `Move-Item` a
      `public/brand/powermeta4-mark.svg` (sin `git mv`, sin duplicar, sin
      modificar el SVG).
- [x] `PowermetaLogo` es la única API de branding: compact = isotipo;
      normal = isotipo + wordmark `powermeta4`. Eliminado el mark inline cyan.
- [x] Inicio muestra Acciones (`TOOL_MODULES` / `TOOL_REGISTRY`). Registro
      Retributivo no aparece en launcher, buscador ni command palette.
- [x] Sidebar Herramientas consume solo `STANDALONE_TOOLS` (`Reg. Retrib.`).
      Breadcrumb de workspaces ERP: Acciones → `/home`.
- [x] lint, typecheck, tests, build, `git diff --check`.

## Branding sidebar + Registro Retributivo - 2026-08-13

- [x] Branch `feat/sidebar-branding-reg-retrib` desde `main` limpio.
- [x] `PowermetaLogo` sigue siendo la API única; el isotipo oficial quedó en
      `public/brand/powermeta4-mark.svg` (ver tarea siguiente).
- [x] Herramientas es un `Collapsible` de una sola superficie (no navega a
      `/tools`). En desktop colapsada, el icono Wrench expande la sidebar y
      abre el submenu.
- [x] `STANDALONE_TOOLS` + `SIDEBAR_TOOL_ITEMS`: `Reg. Retrib.`, ruta
      `/tools/registro-retributivo`, `implemented: false` y navegable.
- [x] Pantalla placeholder con título, badge `Próximamente` y copy de estado.
- [x] typecheck, oxlint, 45 archivos/177 pruebas, build y `git diff --check`.
- [x] Colocar el SVG oficial en `public/brand/powermeta4-mark.svg` y cambiar
      la fuente visual solo en `PowermetaLogo`.

## Columna «Usuario Meta4» (clave_Self) en el listado - 2026-08-12

- [x] `Meta4UserListItem.claveSelf` extraído de `clave_Self`; tercera columna
      ordenable/buscable en `/tools/users/list`.
- [x] typecheck, oxlint, 41 archivos/166 pruebas, build, y comprobación
      manual con sesión real (id `1746`, `vcruzt`, «Víctor Cruz Trueba»).

## Corrección: entidades XML numéricas sin decodificar - 2026-08-12

- [x] `decodeXmlEntities` decodifica ahora `&#xHH;`/`&#NN;` además de las
      cinco entidades XML predefinidas; aplicado en `toText` de
      `users/parser.ts` y `users/employee-detail-parser.ts`.
- [x] typecheck, 41 archivos/164 pruebas, y comprobación manual con sesión
      Meta4 real: `/tools/users/list` muestra «Antonio Ramón Sánchez Cortés
      Rodríguez» y otros nombres acentuados correctamente.

## Detalle de empleado Meta4 (CSP_POWER4_CONSULTA_ORO) - 2026-08-12

- [x] Módulo SOAP `CSP_POWER4_CONSULTA_ORO` (`ARG_EMP` únicamente, sin
      sociedad): `employee-detail-{soap,parser,service,types,errors}.ts` en
      `src/lib/meta4/users/`, reutilizando `normalizeRecordSets`,
      `buildFullName` y `escapeXml` ya existentes. Parser distingue nodos
      estructurales ausentes (`INVALID_RESPONSE`) de RecordSet vacío
      (`NOT_FOUND`, a diferencia del listado que trata vacío como válido) y
      separa el RecordSet anidado de correos (`Csp_Power4_Std_Email` →
      `Csp_Power4_Std_EmailRecordSet`) de los campos planos.
- [x] Server Action `getMeta4EmployeeDetailViewAction` en
      `src/app/actions/meta4-employee-detail.ts`: valida que el `employeeId`
      pertenece al listado de la sociedad activa (`listMeta4Users`) antes de
      consultar el detalle (defensa en profundidad, ya que la operación SOAP
      no lleva sociedad como argumento), construye secciones con mapa de
      etiquetas propio y formatea la fecha centinela `4000-01-01` como
      «Vigente».
- [x] `formatFieldValue`/`humanizeKey` extraídos a
      `src/lib/meta4/format-profile-field.ts` (no pueden vivir en un módulo
      `"use server"`) y reutilizados desde `meta4-profile.ts` sin cambio de
      comportamiento.
- [x] `UserDetailDialog` (Dialog grande, misma convención que Ajustes:
      secciones `dl` + bloque de correos) se abre al pulsar cualquier fila de
      `UsersListTable`; la fila mantiene su rol nativo de `row` (foco por
      teclado, `aria-label`, Enter/Espacio), sin overridear el rol con
      `role="button"` para no romper la semántica de tabla.
- [x] `META4_USERS_DETAIL_URL` en `.env.example`; corregidos los comentarios
      desactualizados de `META4_USER_PROFILE_URL`/`META4_USERS_LIST_URL` que
      aún decían «omit SOAPAction» pese a que ambos lo requieren
      (`SOAPAction: ""`, ya gestionado por `executeAuthenticatedSoap`); docs
      en `AGENTS.md`/`DESIGN.md`.
- [x] Ejecutar lint (`oxlint` limpio; `oxfmt --check` con hallazgos
      preexistentes en 219 archivos del repo, incluidos no tocados en este
      cambio — entorno sin config de oxfmt, no atribuible a este cambio),
      typecheck, 41 archivos/164 pruebas, build y `git diff --check`.
- [x] Comprobación manual con sesión Meta4 real (`JORGE.SALVADOR`): SOAP real
      contra `CSP_POWER4_CONSULTA_ORO` con `ARG_EMP=1013` (script `tsx`
      desechable) devolvió 71 campos y 3 correos en el orden real, con la
      fecha centinela `4000-01-01` intacta sin transformar; `/tools/users/list`
      renderizó 25 filas reales de CYC con `aria-label` correcto y sin
      errores en el log del servidor.
- [ ] No se pudo hacer clic real en una fila desde un navegador (sin
      Playwright ni navegador headless disponible en este entorno). La
      interacción de clic/teclado que abre el diálogo sí está cubierta por
      pruebas automatizadas con Testing Library (acción simulada), pero falta
      una comprobación visual en navegador real del diálogo con datos reales.

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
