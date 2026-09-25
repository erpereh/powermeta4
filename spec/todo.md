# powermeta4 - estado de tareas

## Listado de usuarios desde PeopleNet - 2026-09-25

- [x] `CSP_POWER4_USER_ALL` sustituido por `SELECT` de `M4ORO_EMPLEADOS`
      con `ID_ORGANIZATION = @organization`, sociedad activa resuelta en
      servidor y parámetro `mssql` sobre el pool PeopleNet existente.
- [x] `listMeta4Users` conserva `{ society, users }` y cada `id`, `fullName`
      y `claveSelf`. El mapeo mantiene matrículas como texto, nombres
      normalizados, descarte de filas incompletas y primera fila válida por ID.
- [x] Retirados solo el envelope, endpoint, parser, códigos de error y tests
      SOAP exclusivos del listado. La UI, el detalle, Login, perfil y HIRE
      siguen con sus contratos y servicios actuales. `STD_PERSON` no se tocó.
- [x] `npm run typecheck`, `npm test` (98 archivos, 509 pruebas correctas y 2
      omitidas) y `npm run build` correctos. El pool SQL se simuló en tests.
- [x] `npm run lint` ejecutado: `oxlint` sin errores nuevos y con 7 avisos
      anteriores; `oxfmt --check` falla por formato preexistente en 358
      archivos del repositorio. Los nueve archivos TypeScript de repositorio,
      mapeo, servicio y configuración pasan el chequeo dirigido de formato.
- [x] `git diff --check` y revisión del diff correctos; los cambios
      accidentales de un intento de formato global se restauraron antes del
      commit.
- [ ] Consulta real del listado en PeopleNet pendiente; no se ejecutó en esta
      sesión.

## Detalle de empleados desde PeopleNet - 2026-09-25

- [x] `CSP_POWER4_CONSULTA_ORO` sustituido por dos consultas PeopleNet de
      solo lectura: `M4ORO_EMPLEADOS` por matrícula y sociedad activa, y
      `STD_EMAIL` por persona. Ambas usan el pool server-only existente y
      parámetros `mssql`; el listado `CSP_POWER4_USER_ALL` sigue en SOAP.
- [x] Repositorio tipado de empleados y correos, con error ante varias fichas
      para la misma matrícula y sociedad. El servicio conserva el contrato del
      detalle: campos escalares con las claves anteriores, fechas ISO, correos
      no vacíos y la fecha centinela `4000-01-01`.
- [x] La Server Action conserva la comprobación de pertenencia al listado de
      la sociedad activa y el resultado de la UI. Se retiraron solo el
      envelope, endpoint, parser, servicio, errores y tests exclusivos de
      Consulta Oro; Login, perfil, listado y alta SOAP siguen intactos.
- [x] `npm run typecheck`, `npm test` (99 archivos, 521 pruebas correctas y 2
      omitidas) y `npm run build` correctos. Las pruebas nuevas cubren SQL
      parametrizado, aislamiento de sociedad, ausencia/duplicidad de ficha,
      correos múltiples, fechas y errores saneados.
- [x] `npm run lint` ejecutado: `oxlint` sin errores nuevos y con 7 avisos
      anteriores; `oxfmt --check` falla en 364 archivos del repositorio por
      formato preexistente. Los archivos TypeScript nuevos pasan el chequeo
      dirigido de formato.
- [ ] Consulta real PeopleNet no comprobada en esta consola: faltan
      `PEOPLENET_DB_HOST`, `PEOPLENET_DB_NAME`, `PEOPLENET_DB_USER` y
      `PEOPLENET_DB_PASSWORD` en el entorno cargado.

## Alta de personas Meta4: catálogos de pago desde PeopleNet - 2026-09-24

- [x] Conexión SQL Server de solo lectura (`mssql`) con `PEOPLENET_DB_*` en
      servidor; pool único y reutilizado en desarrollo.
- [x] `ID Moneda`, `ID Tipo pago` e `ID Banco empresa` de Datos de pago cargan
      `M4RCH_CURRENCY` (vigentes), `M4SCO_PAYMENT_TYPE` (organización `0000`,
      sin filtro) y `M4SCO_COMPANY_BANK` filtrado por `ID_ORGANIZATION` = la
      sociedad del contexto operativo. Probado contra `M4PRENOMINA` con CYC,
      IBER y COLL.
- [x] Combobox con columnas ID y nombre (banco con IBAN como detalle),
      búsqueda por ID/nombre sin acentos; el campo muestra el nombre y el
      borrador guarda el ID.
- [x] Los tres campos pasan a integrados y obligatorios para enviar. El
      servidor recarga los catálogos de la sociedad y rechaza IDs ajenos antes
      de tocar Excel. Excel escribe el ID como texto literal en HT/HU, HV/HW y
      HX/HY (`SRSP_PA_HIRE_WIZ_DATOS_PAGO`): sin el prefijo `'`, Excel
      convertía «0002» en 2.
- [x] `npm run typecheck`, `npm run build`, `oxlint` (7 warnings anteriores) y
      `oxfmt --check` de los archivos tocados correctos. `npm test` completo:
      97 archivos correctos, 485 pruebas correctas y 36 omitidas
      (`source-parity`). Una segunda pasada dio 2 timeouts por carga; tras dar
      15 s a los dos tests del formulario, esos archivos pasan por separado.
      Test real de Excel COM correcto.
- [x] `ID Moneda` de Datos bancarios de la persona (`ID_CURRENCY_2`) usa el
      mismo catálogo de monedas; opcional, con botón «Quitar»; se escribe en
      IJ/IK y, si queda vacía, se borra el valor de ejemplo de la plantilla.
      Corregido: el combobox vacío pasaba a no controlado y conservaba la
      última selección. Tests de alta (incluido Excel COM real) correctos.
- [x] Nómina: `ID Convenio` (`M4SSP_CONVENIOS` por `ID_ORGANIZATION`),
      `ID Tipo de ajuste`, `ID Tipo salario`, `ID Moneda` (mismo catálogo de
      monedas), `ID Sindicato`, `ID Tipo del IRPF` e `ID Clave percepción`
      cargan PeopleNet y se escriben en GF/GG (número), GH/GI, GL/GM, GV/GW,
      GR/GS, HB/HC y HD/HE. Obligatorios los cinco marcados en PeopleNet;
      moneda y sindicato opcionales. GG y GS eran fórmulas sobre la celda
      visible (GS con BUSCARV sobre una hoja de validación vacía): se
      sustituyen por el ID.
- [x] Registro único `HIRE_CATALOG_FIELDS` (campo → catálogo, etiqueta,
      obligatoriedad) usado por validación, servidor, Excel y UI.
- [x] Probado contra `M4PRENOMINA`: 10 catálogos para CYC, IBER y COLL.
- [ ] `ID Modelo/Semana de referencia`: el combobox carga
      `M4SCO_REF_W_MOD` pero el valor queda en el borrador. En la plantilla
      HO está enlazada a `SSP_ID_CENT_COSTO1` y solo HP lleva
      `SCO_OR_REF_MOD`; falta confirmar dónde va `SCO_ID_REF_MOD`.
- [x] `Tipo modalidad Variable` (`M4CSP_MOD_VAR` por sociedad), obligatorio,
      escrito como número en IU (`CSP_TP_MOD_VAR`); IT («MONEDA») no se toca.
- [x] Seguridad Social: Cabecera TC1 (por sociedad), Grupo de tarifa,
      Ocupación, Convenio S.S., Contrato legal + interno, Relación laboral,
      Motivo de reducción, Causa sustitución, Condición desempleado, Relación
      laboral especial y Exclusión social desde PeopleNet, en DZ–FN.
      Obligatorios TC1, grupo de tarifa y contrato; el resto opcionales.
- [x] Contrato legal e interno se eligen como un par de
      `M4SSP_CONTRATO_LEG`/`M4SSP_CONTRATO_INT` (90 pares): un combobox en el
      legal y el interno como fila de solo lectura; el servidor valida el par.
- [x] Probado contra `M4PRENOMINA`: 22 catálogos para CYC, IBER y COLL.
- [x] Jornada parcial: los cinco campos solo se muestran con «Jornada
      parcial». Tipo de horas (Semanales 1 / Mensuales 2 / Anuales 3) y Tipo
      de jornada parcial (Regular R / Irregular I) son listas fijas tomadas de
      `SRSP_VALIDATION`. Siguen en el borrador local (sin enviar a Excel).
- [x] Datos personales desde PeopleNet: tipo de documento (ahora combobox),
      país emisor, nacionalidad, provincia y país de nacimiento, sexo, estado
      civil, Atradius Job Code y Categoría (por sociedad), tipo de
      localización, tipo de vía, población, provincia, comunidad y país. Se
      escriben en V/W, AA–AT, AM, T y BB–CF.
- [x] Geografía: IDs internos con ruta completa (`país/comunidad/provincia/
      población`) porque se repiten entre países; Excel recibe el último
      segmento. Elegir población rellena provincia, comunidad y país; cambiar
      un nivel superior limpia los inferiores que no le pertenecen; el
      servidor rechaza combinaciones incoherentes.
- [x] Población (36.667 filas) se busca en servidor: `GET /api/hire/places`
      con sesión, mínimo 2 caracteres, 50 resultados, sin distinguir
      mayúsculas ni acentos (la base es `CS_AS`).
- [x] IDs con espacios o apóstrofos («Sin asignar», «0028 BC», «L'V»): el
      patrón de validación solo rechaza caracteres de control; antes
      bloqueaba, entre otros, cabeceras TC1 válidas de IBER.
- [x] `ID Estado civil` pasa a obligatorio (negrita en PeopleNet): 38
      requisitos PeopleNet.
- [x] Organización desde PeopleNet (por sociedad salvo Motivo inicio): ID
      Empresa (CH/CI), ID Puesto (CK/CL, solo se envía en la rama Puesto),
      Unidad organizativa (CS/CT), Lugar de trabajo (CU/CV), Categoría
      (CW/CX), Motivo inicio (DB/DC), Estructura (AZ) y Centro funcional
      (BA). Puesto, unidad y lugar: filas vigentes (fin 4000-01-01, inicio
      hasta hoy) y sin `ROOT`, como las consultas de PeopleNet.
- [x] La empresa deja de ser la de la plantilla (`ACYC_ES` solo existe en
      CYC); AGENTS.md actualizado.
- [ ] Proyecto (`M4SSP_CENTR_COSTO`): se elige pero no se envía; CZ
      (`SSP_ID_CENT_COSTO`) lleva en la plantilla el formato
      «000000|000000», sin confirmar.
- [x] ID Posición (`M4SCO_POSITION` + históricos vigentes, por sociedad):
      combobox en la rama Posición, enviado solo en esa rama a CM/CN. Hoy la
      consulta no devuelve filas en CYC, IBER ni COLL. `PendingCatalog`
      desaparece: ya no queda ningún catálogo sin consulta.
- [ ] `ID Department` y `ID Comunidad nacimiento`: se eligen desde PeopleNet
      pero no se envían; la plantilla no tiene columna para ellos. Decisión
      del usuario (2026-09-24): se resolverá sobre la marcha.
- [ ] Revisión visual en navegador con sesión Meta4 (no ejecutada: sin
      navegador en la sesión).
- [x] Copias PAYROLL GX/GY (`TIPO PAGO_`) y GZ/HA (`BANCO EMPRESA_`): el
      usuario pide solo cargar las consultas; se mantienen con el valor de la
      plantilla.
- [x] Jornada parcial: no se integra en Excel por decisión del usuario. Para
      cuando se retome, la plantilla tiene EQ (`SSP_VALOR_COEF_T_P`), ES/ET
      (`SSP_TIPO_HORAS`), EU (`SSP_NUM_HORAS`), EV/EW (`SSP_JP_REG_IRREG`) y
      EX (`SSP_NUM_DIAS_JP`).
- [ ] Siguientes catálogos del alta con sus consultas.

## Alta de personas Meta4: mappings en labels - 2026-09-23

- [x] Los 113 campos de `HIRE_FIELD_META` tienen clasificación explícita:
      96 mappings confirmados, 11 sin confirmar y 6 controles de UI sin
      mapping directo. Los siete campos integrados conservan color normal.
- [x] `Tooltip` beUI centralizado en el label, visible con hover o foco;
      ámbar para mappings confirmados pendientes, rojo para los no confirmados
      y color normal para campos integrados y controles de UI. Los catálogos
      deshabilitados conservan el nombre accesible asociado al rótulo.
- [x] Auditoría de identificadores contra el inventario, `Hire_1_PERSONA.xls`
      (`AltaNueva`, fila técnica) y `MANUAL_COLUMNS`; duplicados de correo
      AY/IQ y monedas `ID_CURRENCY`/`ID_CURRENCY_2` verificados. Los 11 casos
      ambiguos permanecen sin mapping atribuido.
- [x] `npm run typecheck`, `npm test` (97 archivos, 513 pruebas correctas y 2
      omitidas) y `npm run build` correctos. Formato correcto en los siete
      archivos TypeScript/TSX tocados; `git diff --check` correcto. Revisión
      local en claro y oscuro:
      colores, foco y tooltip visibles; la vista temporal se retiró.
- [x] `npm run lint` ejecutado: `oxlint` muestra 7 warnings anteriores;
      `oxfmt --check` falla por formato preexistente de 343 archivos del repo.
- [ ] Confirmar con una fuente fiable los 11 mappings ambiguos antes de
      integrarlos o cambiar su estado visual.

## Alta de personas Meta4: UI completa - 2026-09-23

- [x] Cinco secciones beUI (`Tabs` y `Accordion`) con los 112 rótulos/grupos
      del inventario PeopleNet y la fecha de alta actual. Catálogos nuevos
      deshabilitados, sin opciones; excepciones compuestas según las capturas.
- [x] Un draft por persona conserva campos, checks y selectores de las cinco
      ramas. Metadata central de obligatoriedad PeopleNet, requisito actual y
      estado pendiente; los campos pendientes usan un token ámbar claro/oscuro.
- [x] Envío mediante proyección explícita de los siete campos actuales. Ni los
      nuevos valores ni sus ramas se envían a la Server Action, Excel o SOAP.
- [x] Auditoría de 112 rótulos y 37 marcas visuales; pruebas de conservación
      de ramas, varias personas y payload exacto. Navegador local: foco y
      teclado, temas claro/oscuro y móvil a 390 px sin overflow horizontal.
- [x] `npm run typecheck` y `npm run build` correctos; `npm test`: 95 archivos,
      495 pruebas correctas y 2 omitidas. `npx oxfmt --check` correcto para
      los archivos TypeScript modificados. `npm run lint` sigue fallando por
      formato preexistente en archivos fuera de esta tarea; `oxlint` solo
      muestra 7 warnings anteriores.
- [ ] Integrar catálogos SQLite y confirmar mappings pendientes antes de
      sustituir más valores de la plantilla.

## Rediseño beUI por fases - 2026-09-23

- [x] Fase 1: base de fachada, shell e Inicio.
- [ ] Revisión visual de la fase 1 por el usuario.
- [x] Fase 2: Registro Retributivo (shell a dos barras, Inicio por pasos,
      Personas con Drawer, Cuadre, Agrupaciones, Historial, Ajustes e IA).
- [ ] Instalar `expandable-tabs`, `overflow-actions` y `range-slider-inline`
      de `@beui` cuando beui.dev sea accesible (hoy bloqueado por red; se
      usan Tabs underline, Menu e Input como equivalentes).
- [x] Fase 2, paso 1: Inicio rehecho para que se entienda (veredicto en una
      frase, estados explicados que abren Personas filtrado, importes con
      explicación, pendientes con acción y gráficas visibles). Revisado en
      navegador a 1440 px (claro y oscuro) y 390 px.
- [x] Fase 2, paso 2: Personas rehecho (frase de contexto, filtros en una fila,
      chips de estado como en Inicio, tabla de cinco columnas y detalle que
      empieza por la conclusión). Revisado en navegador a 1440 px (claro y
      oscuro) y 390 px.
- [x] Fase 2, paso 3: Cuadre Reg. rehecho (explicación, modos como tarjetas
      con resultado, veredicto, chips de estado, tabla de diferencias y detalle
      en `Drawer`). Revisado en navegador a 1440 px (oscuro) y 390 px (claro).
- [x] Fase 2, paso 4: Agrupaciones como brecha entre mujeres y hombres por
      grupo (parser `genderGap.ts` con tests, veredicto del 25 %, tabla por
      bloque, detalle en `Drawer` y hoja original desplegable). Revisado en
      navegador a 1440 px (claro y oscuro) y 390 px.
- [x] Fase 2, paso 5: Ajustes rehecho (escala de diferencias, exclusiones con
      aviso de reanálisis real, conceptos con chips, tabla compacta y edición
      en `Drawer`; sin `window.prompt`/`window.confirm`). Revisado en navegador
      a 1440 px (claro y oscuro) y 390 px.
- [ ] Fase 2, siguiente paso: Historial, con revisión del usuario.
- [ ] `TabsList` de beUI no reenvía `aria-label`: los tablists de Ajustes y la
      navegación no tienen nombre accesible propio.
- [ ] Fase 3: Usuarios.
- [ ] Fase 4: Chat (runtime intacto).
- [ ] Fase 5: Login, Ajustes y limpieza de shadcn.

## Paleta beUI y acento configurable - 2026-09-23

- [x] Tokens light/dark con la paleta beUI (oklch).
- [x] Presets de acento en `globals.css` y mapa tipado `ACCENT_PRESETS`.
- [x] Ajustes > Apariencia con tema y color de acento persistente.
- [x] Verificación: typecheck, test (457 correctas), build, `oxlint` y
      `git diff --check` correctos. `oxfmt --check` falla (preexistente).
- [ ] Revisión visual de cada preset en light y dark en navegador.

## Registro Retributivo: navegación superior e hidratación - 2026-09-23

- [x] Navegación interna en barra horizontal superior; `<aside>` eliminado.
- [x] Análisis activo compacto en línea en la barra (desde `lg`).
- [x] Hook `useReducedMotion` seguro para hidratación en `src/hooks` y
      adoptado en los 42 componentes motion/agents/Registro.
- [x] Verificación: typecheck, test (456 correctas), build, `oxlint` y
      `git diff --check` correctos. `oxfmt --check` falla (preexistente).
- [ ] Comprobar en navegador que el overlay de Next no muestra issues.

## beUI para Claude Code (proyecto) - 2026-09-23

- [x] Skill `beui` a nivel de proyecto en `.claude/skills/beui/SKILL.md`,
      copiada del upstream `starc007/ui-components/skills/beui`. Sin alcance
      global.
- [x] MCP `beui` a nivel de proyecto en `.mcp.json` (`type: http`,
      `https://mcp.beui.dev/mcp`). Sin credenciales; requiere aprobación en
      Claude Code al primer uso.
- [x] Verificación: `npm run typecheck` correcto; `npm test` 95 archivos,
      490 pruebas correctas y 2 omitidas; `npm run build` correcto;
      `git diff --check` correcto en tracked. `npm run lint`: `oxlint`
      0 errores y 7 warnings preexistentes; `oxfmt --check` falla por falta
      de configuración en 306 archivos (preexistente, incluye el nuevo
      `SKILL.md`).
- [ ] Conectar el MCP desde Claude Code (`claude mcp get beui` / `/mcp`) y
      aprobar `.mcp.json`. No ejecutado en esta sesión.

## Rediseño visual beUI - 2026-09-22

- [x] Fachada `@/components/system` sobre beUI, tokens light/dark y
      `next-themes`. Sin previews y sin sustituir `src/lib/utils.ts`.
- [x] Login, shell, Inicio, chat, ajustes, usuarios y Registro Retributivo
      en el mismo lenguaje. Arquitectura assistant-ui intacta. El composer
      no muestra el modelo.
- [x] Chrome shadcn y de Registro sin consumidores eliminado. Dependencias
      `cmdk` y `@tanstack/react-table` quitadas. Añadidas
      `@tanstack/react-virtual` y `shiki`.
- [x] Verificación: `npm run typecheck` correcto; `npm test` 95 archivos,
      490 pruebas correctas y 2 omitidas; `npm run build` correcto;
      `git diff --check` correcto.
- [x] `npm run lint`: `oxlint` sin errores nuevos (warnings previos de
      Registro y del nombre Hire). `oxfmt --check` falla por falta de
      configuración en 306 archivos. Preexistente.
- [ ] Revisión visual en navegador (1440, 1024, 768, 390, light y dark).
      No ejecutada: la sesión no tiene la máquina local.

## Alta de personas Meta4 - 2026-09-22 (nombre sin "Hire")

- [x] `buildHireFileName` genera `AltaPersonas_<usuario>_<fecha>.xls` en vez
      de `Hire_<usuario>_<fecha>.xls`. La plantilla `Hire_1_PERSONA.xls` no
      cambia de nombre.
- [x] Verificación: `npm run typecheck` correcto; tests de `filename`,
      `service`, `soap` y `meta4-hire` (acción) correctos.

## Alta de personas Meta4 - 2026-09-22 (enlace tardío Excel COM)

- [x] `editHireWorkbook` usa `InvokeMember` (IDispatch) en vez de notación de
      punto para evitar un Primary Interop Assembly de Excel obsoleto
      registrado en el GAC de la máquina, que rompía `QueryInterface` sobre
      `_Application` en 32 y 64 bits por igual.
- [x] Corregido el desenrollado de colecciones vacías (`Write-Output
      -NoEnumerate`) y la resolución de indexadores tipo `Item`
      (`InvokeMethod | GetProperty`).
- [x] Verificación: `npm run typecheck` correcto; `npm run lint` correcto;
      `npm test` 94 archivos, 451 pruebas correctas y 36 omitidas; `npm run
      build` correcto. Ejecución real del script contra
      `Hire_1_PERSONA.xls` completa, sin Excel huérfano ni alta real.

## Alta de personas Meta4 - 2026-09-22 (URL única y Excel)

- [x] `META4_BASE_URL` deriva Login, perfil, listado, detalle y alta.
- [x] La edición Excel no depende de ver un PID nuevo en 8 s, y el fallo de
      la carpeta compartida no se presenta como fallo de plantilla.
- [x] Verificación: `npm run typecheck` correcto; `npm test` 95 archivos,
      485 pruebas correctas y 2 omitidas; `npm run build` correcto;
      `git diff --check` correcto. Edición real: XLS de 33369088 bytes,
      sin Excel huérfano ni alta SOAP.

## Alta de personas Meta4 - 2026-09-22 (nombre de fichero)

- [x] El fichero Hire usa el usuario del contexto Meta4 y un timestamp, dentro
      del directorio `META4_HIRE_FILE_PATH`. Escritura, verificación y SOAP
      comparten esa ruta.
- [x] El error de Excel se registra en servidor (exit code, etapa, stderr) y
      el BOM de los temporales es UTF-8 real.
- [x] Verificación: `npm run typecheck` correcto; `npm test` 94 archivos,
      477 pruebas correctas y 2 omitidas; `npm run build` correcto;
      `git diff --check` correcto. La edición real con Excel sobre una copia
      temporal pasó dentro de la suite. Sin alta real ni Excel huérfano.

## Alta de personas Meta4 - 2026-09-22

- [x] `META4_HIRE_FILE_PATH` apunta a
      `\\WMETA4PRE2\powermeta4\import_users_excel\Hire.xls` y esa misma ruta
      se escribe, se verifica y se envía en `ARG_PATH_FILE`.
- [x] El alta copia `Hire_1_PERSONA.xls` y Excel COM edita solo los campos
      manuales, sin `XLSX.write`.
- [x] Verificación: `npm run typecheck` correcto; `npm test` 92 archivos,
      473 pruebas correctas y 2 omitidas; `npm run build` correcto;
      `git diff --check` correcto. Sin alta real ni Excel huérfano.

## Alta de personas Meta4 - 2026-09-22 (tarjetas)

- [x] Formulario `/tools/users/new`: personas completadas colapsables en
      estado cliente, una expandida, validación al añadir/editar.
- [x] Generador sobre `Hire_1_PERSONA.xls`: copia la fila plantilla 6 y
      sustituye solo campos UI (incluidas columnas duplicadas `AY`/`IQ`).
      Sin `META4_HIRE_LEGAL_ENTITY_*`; CH/CI se conservan de la plantilla.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin errores
      del cambio; `npm test` 91 archivos, 472 pruebas correctas y 2 omitidas;
      `npm run build` correcto (`/tools/users/new` en el manifiesto);
      `git diff --check` correcto. Sin alta real a Meta4 ni commit.

## Alta de personas Meta4 - 2026-09-21

- [x] Primera versión funcional de alta de personas en `/tools/users/new`
      (`users.create` implementado). Formulario de 1..N personas, confirmación
      y Server Action que genera Hire.xls y llama a `SRTC_LAUNCH_IMPORT`.
- [x] Mapping desde Hire_VACIO / 1_PERSONA / 3_PERSONAS: solo campos MANUAL
      demostrados (nombre, apellidos, tipo y número de documento, correo,
      fecha de alta) más empresa server-side. Sin copiar PII de los ejemplos.
- [x] `xlsx.write` a BIFF/OLE2; se documenta que aplana fórmulas y nombres
      definidos. Escritura a UNC con temp + rename (no atómica en SMB).
- [x] SOAP reutiliza `executeAuthenticatedSoap`. Éxito solo si el retorno es
      numéricamente 0. Tests con SOAP mockeado; sin alta real.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin errores
      del cambio (warnings preexistentes de Registro Retributivo);
      `npm test` 91 archivos, 471 pruebas correctas y 2 omitidas;
      `npm run build` correcto (`/tools/users/new` en el manifiesto);
      `git diff --check` correcto. `npm run lint` falla en `oxfmt --check`
      (sin configuración; 233 archivos, preexistente). Sin alta real a
      Meta4 ni commit.

## Curación de manuales oficiales - 2026-09-14

- [x] Revisar los 204 archivos de `manuales/` por contenido, metadatos,
      duplicidad, edición y procedencia.
- [x] Conservar 74 PDF oficiales Meta4/Cegid y clasificarlos en configuración
      (14), usuario (23) y tecnología (37).
- [x] Eliminar 130 archivos duplicados, sustituidos, obsoletos, auxiliares o no
      oficiales y documentar la decisión en `manuales/README.md`.
- [x] Añadir OCR al manual oficial SOAP/REST de 2024, que carecía de texto, sin
      cambiar sus 134 páginas ni su representación visual.
- [x] Hacer recursiva la ingesta de `KB_SOURCE_DIR` y cubrir la estructura por
      categorías con una prueba automatizada.
- [x] Verificación: `tsc --noEmit`, 79 archivos de pruebas y 399 pruebas
      activas, `next build`, auditoría final de los 74 PDF y
      `git diff --check`, correctos. `oxlint` no devuelve errores (mantiene 7
      warnings preexistentes). `oxfmt --check` sigue fallando por el problema
      global ya registrado: sin configuración, marca 117 archivos
      preexistentes. La comprobación dirigida pasa para el código, el
      inventario y el changelog tocados; `spec/todo.md` sigue marcado por el
      propio comando inmediatamente después de reescribirlo.
- [x] Preparar el cambio verificado para publicarlo en `main`.

## Chat global OpenAI-compatible - 2026-09-11

- [x] Sustituir el Agent Runtime por `POST /api/chat/run` y un cliente
      server-only configurado con `AI_BASE_URL`, `AI_API_KEY` y `AI_MODEL`.
      La configuración es global para todos los workspaces y la UI solo
      recibe `{ configured, model }`.
- [x] Reconstruir la rama exacta desde `parentMessageId`, excluyendo el
      placeholder asistente y partes no textuales; conservar historial,
      ramas, edición, regeneración, streaming, cancelación y estados
      persistidos.
- [x] Eliminar picker, CRUD y preferencias de proveedores, disambiguación,
      renderers de tools, aprobación/ejecución, Privacy Gateway, proyecciones,
      bindings, resolvers y ruta antigua del agente. Se conserva el registro
      normal de herramientas de producto y `@google/genai` para Registro
      Retributivo.
- [x] Añadir la migración `009_remove_agent_and_provider_configs.sql` sin
      modificar 006/007: elimina las cuatro tablas exclusivas y la preferencia
      `selectedProviderConfigId`; `DATABASE_SCHEMA_VERSION = 9`. Conversaciones,
      mensajes, attachments y el grafo de padres permanecen intactos.
- [x] Actualizar backups, fixtures, Ajustes, `.env.example`, documentación y
      la especificación arquitectónica en `docs/superpowers/specs/`.
- [x] Verificación ejecutada: `npm run setup`, `npm run typecheck`, `npm test`
      (70 archivos, 363 pruebas correctas y 2 omitidas), `npm run build`,
      `git diff --check`, `PRAGMA integrity_check` y `PRAGMA foreign_key_check`.
- [ ] `npm run lint` completo: `oxlint` termina sin errores del cambio
      (solo warnings preexistentes de Registro Retributivo), pero
      `oxfmt --check` falla porque no hay configuración y detecta formato en
      archivos preexistentes.
- [ ] Verificación manual contra un endpoint configurado por el usuario:
      primer/segundo turno, reload, nuevo chat, regeneración, edición y
      cancelación; confirmar cero llamadas SOAP y cero tools desde el chat.

Las secciones fechadas que aparecen después de este bloque conservan el backlog
histórico del proyecto. En particular, sus referencias a las migraciones 006/007,
proveedores o Agent Runtime describen decisiones anteriores y no la arquitectura
vigente del chat global.

## Buscar de sidebar: Command de cmdk - 2026-08-19

- [x] El diálogo de Buscar de la sidebar montaba `CommandInput` /
      `CommandList` fuera del raíz `Command`. cmdk no tenía contexto y
      al abrir la paleta fallaba con `Cannot read properties of
      undefined (reading 'subscribe')`.
- [x] `AppSidebar` envuelve la paleta con `Command shouldFilter={false}`
      (filtrado propio vía `filterChats`), igual que
      `ToolsCommandPalette`. `CommandDialog` no se cambia para no
      anidar raíces.
- [x] Test: pulsar Buscar abre el input y el empty state sin TypeError.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 79 archivos, 408 pruebas correctas y 2
      omitidas; `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración;
      preexistente). Sin commit.

## Workspaces Meta4 multi-sociedad - 2026-08-19

- [x] Lookup `CYC` → `IBER` → `COLL` siempre las tres comprobaciones;
      `match` acumula, `no-match` continúa, infra/HTTP/Fault/XML aborta
      el login sin persistir coincidencias parciales. Cero matches →
      `META4_PROFILE_NOT_FOUND`. Un `JSESSIONID` global; `ARG_SOCIEDAD`
      según el workspace activo.
- [x] Migración `008_meta4_multi_society`: `meta4_user_profile` con PK
      `society`; copia de la fila singleton; `DATABASE_SCHEMA_VERSION = 8`.
      Las huellas de migración ignoran CRLF para coincidir con SQLite en
      Windows.
- [x] Login persiste N perfiles, `ensureSocietyCompany` por match y
      `availableSocieties` en `AuthView`. `activeCompanyId` se restaura
      si sigue autorizada; si no, primera en orden CYC → IBER → COLL.
- [x] `getMeta4OperationalContext` resuelve sociedad + `companyId` desde
      el workspace activo validado. `switchMeta4WorkspaceAction` es la
      única mutación; create/delete/`setActiveCompany` se rechazan en
      Meta4. SocietyHeader: N≥2 dropdown sin Add; N=1 no interactivo;
      DEBUG sin sociedades inventadas.
- [x] Verificación: `npm run setup` correcto (`user_version` 8);
      `PRAGMA integrity_check` ok y `foreign_key_check` vacío;
      `npm run typecheck` correcto; `npx oxlint` sin errores del cambio
      (warnings preexistentes de Registro Retributivo); `npm test` 79
      archivos, 407 pruebas correctas y 2 omitidas; `npm run build`
      correcto; `git diff --check` correcto. `npm run lint` falla en
      `oxfmt --check` (sin configuración; preexistente). Sin commit.

## Probe Gemini = curl oficial - 2026-08-17

- [x] Diagnóstico: el curl de Gemini (PC) era 200 con body mínimo; el
      probe metía `systemInstruction`, `role` y `generationConfig`, y
      un 403 del POST de tools se etiquetaba como API key inválida.
- [x] Primer POST Gemini: `{ contents: [{ parts: [{ text: "OK" }] }] }`
      y cabecera `X-goog-api-key`. Segundo POST: el mismo body +
      `test_tool`. Si el chat fue 200 y tools falla → tools unsupported,
      no key inválida. Runtime del chat no cambia (sigue con system
      prompt y roles).
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 78 archivos, 397 pruebas correctas y 2
      omitidas; `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración;
      preexistente).

## Auth nativo Gemini AQ. / 3.1 Flash Lite - 2026-08-17

- [x] Diagnóstico: guardar Gemini fallaba con 403 «API key no válida»
      porque el probe usaba `Authorization: Bearer` contra
      `/v1beta/openai/chat/completions`. Las keys `AQ.` y modelos 3.1
      responden en la API nativa, no en esa capa.
- [x] Si el host es `generativelanguage.googleapis.com`, probe y runtime
      llaman a `:generateContent` con solo `x-goog-api-key`. El resto de
      proveedores siguen en Bearer + `/chat/completions`.
- [x] El JSON nativo pasa por `assertOutboundPayload`. No se relaja el
      guardado: sin 200 no hay persistencia.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 78 archivos, 395 pruebas correctas y 2
      omitidas; `npm run build` correcto; `git diff --check` correcto.
      `npm run lint` falla en `oxfmt --check` (sin configuración;
      preexistente).

## Errores de chat y grafo padre/hijo - 2026-08-17

- [x] Diagnóstico: el Thread pintaba `[object Object]` porque el status
      `failed` llevaba `error: { code }`. Tras el fallo, assistant-ui
      lanzaba `Parent message not found` al reconstruir el repositorio
      ordenado por `createdAt` + UUID (hijo antes que padre).
- [x] El error de assistant-ui es un string en castellano. El `catch` de
      `runConversation` persiste `error.message` como contenido del
      asistente y status `failed`; no deja el bubble vacío con solo el
      código.
- [x] `toExportedMessageRepository` exporta en orden topológico, reescribe
      padres huérfanos a `null` y no usa un `headId` fuera del set.
- [x] Privacy Gateway 1013 sin cambios: transcript visible real, LLM con
      `EMP_*` + `employee.get_field`, SOAP solo en servidor.
- [x] Verificación: `npm run typecheck` correcto; `npx oxlint` sin
      errores del cambio (warnings preexistentes de Registro
      Retributivo); `npm test` 76 archivos, 384 pruebas correctas y 2
      omitidas (incluye `privacy-contract`); `npm run build` correcto;
      `git diff --check` correcto. `npm run lint` falla en
      `oxfmt --check` (sin configuración; preexistente).

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
- [ ] Ejecutar la verificación manual del chat global con las tres variables
      configuradas por el usuario.
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
