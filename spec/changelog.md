# Changelog

## 2026-09-25 - Recibo con aspecto de nómina y rango de pagas

- `PayrollReceiptView` rediseñado como el documento de Meta4: casillas con
  filetes (cabecera Empresa/Trabajador/Centro), cuerpo con columnas separadas
  y pie de bases, acumulados, totales, líquido y banco; informativos con
  `*** … ***`. Solo tokens del tema.
- El formulario pide «Desde la paga» y «Hasta la paga» (máximo 24 pagas; los
  extremos se reordenan solos) y muestra cuántas pagas entran en el rango.
- `getCurrentPayrollReceiptRange` trae el recibo de cada paga del rango (3 en
  paralelo) y devuelve aparte las pagas sin recibo con su motivo.
  `PayrollReceiptError` lleva código (`NOT_FOUND`, `UNSUPPORTED`,
  `RANGE_TOO_LARGE`).
- `PayrollReceiptRange`: una nómina a la vista (la más reciente), pestañas
  por paga, anterior/siguiente y resumen de devengado y líquido del rango.
- Probado con el servicio real: 1013 de enero a abril 2026 → 5 recibos que
  cuadran y 3 pagas sin recibo, en 1,2 s.
- Verificación: `typecheck`, `npm test` (495 correctas, 36 omitidas, sin
  fallos), `build`, `oxlint` sin avisos nuevos, archivos de nómina con
  `oxfmt --check` y `git diff --check` correctos. La pantalla no se ha
  revisado en navegador con sesión Meta4 real.

## 2026-09-25 - Recibo de nómina desde la plantilla de Meta4

- Las líneas del recibo ya no están escritas a mano: se generan desde la
  plantilla RECIBO de la sociedad (`M4SCO_ROWS`, `M4SCO_ROW_COL_DEF`,
  `M4RCH_PICOMPONENTS`), traduciendo cada item a su columna física con
  `M4RCH_ITEMS`/`M4RDC_FIELDS` e `INFORMATION_SCHEMA`. Orden, textos, `%`,
  informativos (`***`) y desglose sangrado vienen de Meta4.
- Las `SELECT` de paga y rol piden solo las columnas de la plantilla que
  existen en `INFORMATION_SCHEMA`; ningún identificador llega del navegador.
- Siete items `CYC_*_INFO` que el report calcula al imprimir tienen
  equivalencia fija, comprobada contra el PDF de abril 2026.
- Cobertura con el servicio real (abril 2026): CYC 580/587, IBER 74/112 y
  COLL 12/21 recibos cuadran al céntimo; el resto muestra la diferencia.
- Tests nuevos de resolución y evaluación de la plantilla.
- Verificación: `typecheck` y `build` correctos; `npm test` con 3 fallos de
  backups/alta que pasan aislados; `oxlint` sin avisos nuevos; `git diff
  --check` correcto.

## 2026-09-25 - Consultar una nómina: paga actual desde PeopleNet

- «Consultar una nómina» carga el recibo de la paga actual desde PeopleNet
  (solo `SELECT` parametrizadas; la sociedad sale del contexto operativo,
  nunca del navegador) mediante `getPayrollReceiptAction`.
- El periodo de liquidación es un selector con búsqueda de las pagas de
  `M4SCO_HT_PAYS` (p. ej. marzo 2026 tiene cuatro), por defecto la última.
- Nuevas fuentes: centro de trabajo (`STD_WORK_LOCATION`), GT
  (`M4SSP_H_GRUPO_TAR`) y acumulados (`CSP_REC_*`); la orden de pago se filtra
  por imputación igual a la fecha de pago para excluir retroactivos.
- Si los totales de Meta4 no cuadran con las líneas mapeadas, el recibo muestra
  «Recibo incompleto» con la diferencia en vez de ocultarla.
- Retroactivas y normal + retroactivas responden que aún no están disponibles.
- Tests: mapper del recibo, formulario (action simulada) y vista; fixtures con
  datos personales ficticios.
- Verificación: `typecheck` y `build` correctos; `npm test` con 2 fallos en
  `backup.test.ts` que pasan aislados; `oxlint` sin avisos nuevos;
  `oxfmt --check` falla en 469 archivos previos; `git diff --check` correcto.

## 2026-09-25 - Consultar una nómina (vista)

- Nueva pantalla `/tools/payroll/receipt` («Consultar una nómina») con los
  parámetros de la ventana Meta4 del recibo: matrícula, periodo de
  liquidación, tipo de pagas y moneda de proceso. Validación en cliente.
- `PayrollReceiptView` pinta el recibo con la estructura del PDF de Meta4 y los
  estilos del producto, a partir del tipo `PayrollReceipt`
  (`src/types/payroll-receipt.ts`).
- Sin acceso a datos: consultar muestra «Consulta del recibo pendiente de
  conexión» y no inventa importes. `/tools/payroll` tiene página propia.
- Verificación: `npm run typecheck`, `npm run build` y `npm test` (segunda
  pasada: 479 pruebas correctas y 36 omitidas; la primera tuvo 1 fallo aislado
  fuera de nómina) correctos; `oxlint` sin avisos nuevos.

## 2026-09-25 - Listado de usuarios desde PeopleNet

- `CSP_POWER4_USER_ALL` deja de llamar a SOAP. El repositorio server-only
  consulta `M4ORO_EMPLEADOS` con `ID_ORGANIZATION = @organization` y el pool
  `mssql` existente; la sociedad procede del contexto operativo del servidor.
- `listMeta4Users` mantiene `{ society, users }` y los campos `id`, `fullName`
  y `claveSelf`, con la misma normalización de nombres, descarte de filas
  incompletas y deduplicación por ID. La UI y la acción de detalle conservan
  sus contratos.
- Se retiran los archivos SOAP exclusivos del listado y su entrada de
  configuración. Login, perfil, HIRE, otros SOAP y `STD_PERSON` no cambian.
- Verificación: `npm run typecheck`, `npm test` (98 archivos, 509 pruebas
  correctas y 2 omitidas) y `npm run build` correctos. La conexión PeopleNet
  se simuló en tests; no se ejecutó una consulta real.
- `npm run lint`: `oxlint` sin errores nuevos (7 avisos anteriores), pero
  `oxfmt --check` falla por formato preexistente en 358 archivos. Los nueve
  TypeScript del repositorio, mapeo, servicio y configuración pasan el chequeo
  dirigido. `git diff --check` correcto. Se restauraron los cambios ajenos
  producidos por un intento accidental de formato global.

## 2026-09-25 - Detalle de empleados desde PeopleNet

- El detalle deja de llamar a `CSP_POWER4_CONSULTA_ORO`. Un repositorio
  server-only consulta `M4ORO_EMPLEADOS` por `@employeeId` y
  `@organization` (sociedad activa del servidor), y `STD_EMAIL` por
  `@employeeId`, reutilizando el pool `mssql` existente.
- El servicio combina las filas y conserva el contrato de la Server Action:
  claves escalares del detalle anterior, fechas ISO, correos no vacíos y
  todas las direcciones ordenadas en la acción por `STD_OR_MAIL`. Cero
  fichas produce «no encontrado»; varias fichas de la misma sociedad
  producen un error de datos ambiguos. Los fallos SQL no exponen detalles
  técnicos al navegador.
- Se eliminan únicamente el endpoint, envelope, parser, servicio, errores y
  pruebas SOAP propios de Consulta Oro. El listado `CSP_POWER4_USER_ALL`,
  Login, perfil y alta SOAP permanecen como estaban. La UI y su tipo de
  respuesta no cambian.
- Verificación: `npm run typecheck` correcto; `npm test` con 99 archivos,
  521 pruebas correctas y 2 omitidas; `npm run build` correcto. `npm run
  lint` muestra 7 avisos anteriores de `oxlint` y falla en `oxfmt --check`
  por formato preexistente en 364 archivos. Los TypeScript nuevos pasan el
  chequeo dirigido de formato.
- No se ejecutó una consulta real a PeopleNet: las cuatro variables de
  conexión obligatorias no estaban presentes en el entorno de esta consola.

## 2026-09-24 - Catálogos de pago del alta desde PeopleNet

- Nueva dependencia `mssql` (driver JavaScript `tedious`, sin compilación
  nativa) y `@types/mssql`; `mssql` en `serverExternalPackages`. Conexión
  server-only en `src/lib/peoplenet/client.ts` con `PEOPLENET_DB_*`
  (documentadas vacías en `.env.example`).
- `/tools/users/new` carga en servidor los catálogos de moneda, tipo de pago y
  banco empresa; el banco se filtra por la sociedad del contexto operativo
  (`ID_ORGANIZATION` parametrizado). Si PeopleNet falla, los tres combobox
  quedan deshabilitados con un aviso.
- Combobox `PaymentCatalog`: lista ID + nombre (e IBAN del banco), el campo
  cerrado muestra el nombre y el draft guarda el ID.
- `HirePersonInput` añade `paymentCurrency`, `paymentType` y `companyBank`,
  obligatorios y validados como ID. `launchMeta4Hire` comprueba los IDs contra
  los catálogos de la sociedad antes de editar Excel. Excel los escribe como
  texto literal en HT/HU, HV/HW y HX/HY.
- `ID Moneda` de Datos bancarios de la persona (`accountCurrency`,
  `ID_CURRENCY_2`) reutiliza el catálogo de monedas. Es opcional («Quitar»
  limpia la selección) y se escribe en IJ/IK; vacía borra el valor de la
  plantilla. El servidor la valida si viene informada.
- Nómina: convenio (por sociedad), tipo de ajuste, tipo de salario, moneda,
  sindicato, tipo de IRPF y clave de percepción desde PeopleNet, integrados
  en Excel (GF–GW, HB–HE). Modelo/semana de referencia se puede elegir desde
  `M4SCO_REF_W_MOD` pero no se envía: su enlace en la plantilla no está
  confirmado.
- Seguridad Social y modalidad variable desde PeopleNet (TC1 y modalidad por
  sociedad), escritos en DZ–FN e IU. Contrato legal + interno como un único
  par validado en servidor; el interno se muestra en solo lectura.
- Datos personales desde PeopleNet (incluido tipo de documento, antes texto
  libre). Geografía con IDs de ruta completa, relleno en cascada y validación
  de coherencia en servidor. Población se busca con `GET /api/hire/places`.
- Jornada parcial: campos visibles solo con «Jornada parcial»; tipo de horas
  y regular/irregular como listas fijas.
- Validación de IDs: admite espacios y apóstrofos presentes en PeopleNet.
- `tsconfig.tsbuildinfo` obsoleto ocultaba errores de tipos en tests; se
  regeneró (archivo ignorado por git).
- Organización desde PeopleNet: empresa, puesto (solo rama Puesto), unidad
  organizativa, lugar de trabajo, categoría, motivo de inicio, estructura y
  centro funcional, escritos en CH–DC, AZ y BA. La empresa ya no se hereda de
  la plantilla. Proyecto (centro de coste) se elige pero no se envía.
- ID Posición desde `M4SCO_POSITION` (vacío hoy), enviado a CM/CN solo en la
  rama Posición; se elimina el componente `PendingCatalog` sin usos.
- La caché incremental de `tsc` (`tsconfig.tsbuildinfo`) no detectaba
  cambios de tipos; las verificaciones se ejecutan tras borrarla.
- `HIRE_CATALOG_FIELDS` centraliza campo → catálogo, etiqueta y
  obligatoriedad; `catalogs.ts`/`catalog-queries.ts` sustituyen a los módulos
  `payment-catalogs*`. El combobox común es `CatalogField`.
- Verificación: typecheck, build, tests de alta (incluido Excel COM real) y
  suite completa (485 correctas, 36 omitidas); `oxlint` sin avisos nuevos;
  formato correcto en los archivos tocados. Consulta real comprobada para CYC,
  IBER y COLL. Sin revisión visual en navegador.

## 2026-09-23 - Mappings visibles en el alta Meta4

- `HIRE_FIELD_META` clasifica los 113 campos según mapping confirmado (96),
  sin confirmar (11) o control de UI sin mapping directo (6). El texto del
  tooltip y el color del rótulo se derivan de un único helper.
- Los labels y grupos muestran `Tooltip` beUI con hover y foco de teclado;
  los campos integrados y los controles de UI son normales, los pendientes
  con mapping confirmado son ámbar y los no confirmados rojos. Se conserva la
  asociación accesible de inputs, checkboxes y catálogos.
- Identificadores cotejados con el `.md`, la fila técnica de `AltaNueva` y
  `MANUAL_COLUMNS`. Correo conserva `STD_EMAIL / STD_EMAIL_ATRADIUS` (AY/IQ);
  moneda de nómina usa `ID_CURRENCY` y moneda de la cuenta `ID_CURRENCY_2`.
  Las cabeceras auxiliares contradictorias no se toman como mapping confirmado.
- Sin cambios en draft, validación, payload de siete campos, Server Action,
  Excel ni SOAP.
- Verificación: `npm run typecheck`, `npm test` (97 archivos, 513 pruebas
  correctas, 2 omitidas) y `npm run build` correctos. Revisión visual local en
  claro y oscuro con tooltip y foco visibles; vista temporal retirada.
  `npx oxfmt --check` correcto en los siete archivos TypeScript/TSX tocados.
  `git diff --check` correcto.
  `npm run lint` sigue fallando en el chequeo global de formato (343 archivos
  anteriores); `oxlint` muestra 7 warnings anteriores.

## 2026-09-23 - Acceso rápido de desarrollo con usuario Meta4 de pruebas

- Botón «Entrar como …» en `/login`, solo con `NODE_ENV=development` y si
  `POWERMETA4_QUICK_LOGIN_USERNAME` y `POWERMETA4_QUICK_LOGIN_PASSWORD` están en
  `.env.local` (ignorado por git). `quickLoginAction` usa el mismo login SOAP
  que el formulario; la contraseña solo se lee en servidor y la página recibe
  únicamente el usuario. Variables documentadas vacías en `.env.example`.
- Verificación: tests de `debug-config` y del formulario; en navegador el
  botón inicia sesión y redirige a `/home`, y la contraseña no aparece en el
  HTML ni en ninguna respuesta de red.

## 2026-09-23 - Registro Retributivo: revisión con el análisis cargado

### Revisión

- Navegador (Chrome headless, 1440 px y 390 px): las seis pestañas, filtros de
  estado, detalles de Personas, Cuadre y Agrupaciones, y secciones de Ajustes,
  sin errores de consola, de página ni HTTP, sin textos `NaN`/`undefined` y
  sin desbordamiento horizontal.
- Datos (79 personas, 953 recibos en 21 PDF): diferencias por bloque y total
  coherentes con `pdf − registro` en todas las personas, sumas del resumen
  correctas y estados coherentes con tolerancia y umbral. Los 91 meses con dos
  recibos son nómina ordinaria + variables (ficheros distintos), no duplicados.

### Correcciones

- Inicio e Historial distinguen ficheros PDF de recibos y usan los mismos
  recuentos por estado (Historial decía 66 «con diferencias» y Inicio 65).
- Cuadre «normalizado + variables»: ya no pide corregir el Excel; explica que
  el normalizado es a año completo y jornada completa y usa tono de aviso.
- Conceptos: los ignorados por defecto (cotizaciones, especie, descuentos) ya
  no cuentan como «sin regla» (20 → 1, igual que Inicio); «Ignorar» ya no deja
  el concepto duplicado como «sin regla»; texto del aviso corregido.
- Exclusiones: avisa de matrículas que no están en el análisis abierto.
- Sin barras de scroll visibles en el Registro Retributivo (regla en
  `globals.css` bajo `[data-registro-retributivo-root]`); el desplazamiento
  sigue funcionando. Se define la utilidad `no-scrollbar`, que se usaba sin
  existir.

### Verificación

- Tests de página ampliados (conceptos ignorados, matrícula desconocida).

## 2026-09-23 - Registro Retributivo: rediseño comprensible por pestañas

### Cambios

- Inicio: frase de conclusión del análisis, desglose por estado con filas que
  abren Personas ya filtrado, panel de importes, pendientes de revisión y dos
  gráficas con títulos en forma de pregunta. Subida en tres pasos explicados;
  «Analizar otros archivos» abre un `Drawer`.
- Personas: estados con nombres claros («Con diferencia», «Recibo sin
  Registro»…), chips de filtro con contador, tabla de cinco columnas y detalle
  que empieza por una conclusión, periodos y conceptos con diferencia.
- Cuadre Reg.: tarjetas «Qué comprobar» con resultado, conclusión, tabla
  unificada por persona y detalle con los bloques que no cuadran.
- Agrupaciones: lectura de las hojas como brecha mujeres/hombres
  (`groupings/genderGap.ts`), umbral del 25 %, selector de retribución y
  media/mediana, tabla por grupo y detalle; la hoja original sigue disponible.
- Diferencias en rojo solo por encima de la tolerancia (`toleranceDiffClass`).
- Ajustes: cabecera explicativa por sección; «Diferencias» con escala de tres
  estados y dos campos (tolerancia y «Con diferencia» a partir de) con
  borrador local para poder vaciarlos; exclusiones con aviso según
  `excludedEmployeeIdsApplied`; conceptos con aviso de conceptos sin regla,
  chips de uso, tabla compacta, edición y borrado en `Drawer`, e importación
  JSON en `Drawer` (sin `window.prompt` ni `window.confirm`). Privacidad como
  lista de garantías.

### Verificación

- `npm run typecheck`, `oxlint` (sin avisos nuevos), `npm run build` y
  `git diff --check` correctos.
- `npm test`: 466 correctas y 2 fallos en `backup` al correr en paralelo con el
  build; `npx vitest run backup` por separado: 10/10 correctas.
- Tras Ajustes: `npm test` 469 correctas (36 omitidas), `npm run typecheck`,
  `npm run build` y `git diff --check` correctos; `npm run lint` falla solo
  por `oxfmt --check` (preexistente en 487 de 505 archivos).
- Revisión visual con Chrome headless a 1440 px (claro/oscuro) y 390 px.
## 2026-09-23 - UI completa del alta de personas Meta4

### Cambios

- `/tools/users/new` muestra los 112 rótulos/grupos de PeopleNet en cinco
  secciones beUI y subsecciones. Los catálogos nuevos usan `Combobox`
  deshabilitados y `Catálogo pendiente`, sin opciones inventadas.
- Draft único por persona con selectores explícitos de Puesto/Posición,
  número de S.S., jornada, minusvalía e IBAN/Otro formato. Los valores se
  conservan al cambiar de rama, pestaña o persona; una vista separada expone
  solo los valores de la rama activa para una integración futura.
- Metadata visual centralizada: 37 rótulos obligatorios PeopleNet, etiquetas
  ámbar de campos pendientes y distinción «Requerido para enviar» para correo
  y fecha de alta. El asterisco no atribuye a PeopleNet estos dos requisitos;
  los rótulos no marcados tampoco se presentan como «opcionales».
- Se reproducen los controles pendientes de las capturas: Sucursal bancaria
  como Input; Modelo/Semana como dos segmentos, descripción y búsqueda
  deshabilitada; Exclusión social como lookup vacío; ID Atradius como Input.
- La Server Action recibe una proyección explícita de solo los siete campos
  actuales. `HirePersonInput`, Excel, SQLite, SOAP y sus mappings no cambian.

### Verificación

- `npm run typecheck` y `npm run build` correctos.
- `npm test`: 95 archivos correctos, 495 pruebas correctas y 2 omitidas;
  incluye inventario completo, estados de ramas, varias personas y payload
  exacto de siete campos.
- Previsualización local en navegador: foco visible, Tab y Enter, pantallas
  claras y oscuras, 390 px sin desbordamiento horizontal. Página de prueba
  temporal retirada.
- `npm run lint`: `oxlint` sin errores y con 7 warnings preexistentes;
  `oxfmt --check` falla por formato preexistente del repositorio.
- `npx oxfmt --check` correcto en TypeScript modificado.

## 2026-09-23 - Rediseño beUI: fase 2 (Registro Retributivo)

### Cambios

- Shell a dos barras: `PageHeader` con exportar (icono + tooltip) y «Nuevo
  análisis»; navegación de vistas con `Tabs underline` y estado compacto del
  análisis activo e IA.
- Inicio: sin análisis, bloque único de tres pasos con `FileUpload` centrado y
  `StatefulButton`; con análisis, franja de fuentes con `Drawer`, banda única
  de KPIs con `NumberTicker`, `Accordion` de cobertura/revisión y una sola
  superficie de gráficas con `Tabs segment`.
- Personas: `Combobox` de centro y puesto, estado en `Tabs pill` con
  contadores (sustituye select y botones «Ver solo…»), detalle en `Drawer`
  con conceptos en `Accordion`.
- Cuadre Reg.: `Tabs segment`, tira de métricas, filtro en `Tabs pill`,
  detalle en `Modal` con tabla de importes; eliminado el `<select>` oculto.
- Agrupaciones: selector de hoja con `Select`; truncado con `Callout`.
- Historial: `HoverList` con filas tipo calendario y acciones en `Menu`.
- Ajustes: navegación lateral `HoverList`, filas de parámetros, exclusiones
  con chips y `Modal` (sin `window.confirm`), reglas con `Switch`, acciones del
  mapa en `Menu` y formulario de regla en `Drawer`.
- Explicación IA: `ThinkingShimmer`, `Accordion` y `ActionSwapButton`.
- Fachada: `NumberTicker` y `ActionSwapButton`. Nuevo
  `common/DetailParts.tsx`; eliminado `CompactMetric`.
- `@beui/expandable-tabs`, `overflow-actions` y `range-slider-inline` no se
  instalaron: beui.dev y el MCP `beui` no eran accesibles desde la red.

### Verificación

- `npm run typecheck`, `npm run build` y `git diff --check` correctos.
- `npm test`: 456 correctas y 1 fallo corregido después (texto sr-only);
  tras la corrección, las pruebas de Registro Retributivo pasan (47).
- `oxlint` sin avisos nuevos; `oxfmt --check` falla (preexistente).
- Revisión visual en navegador: pendiente.

## 2026-09-23 - Rediseño beUI: fase 1 (base, shell e Inicio)

### Cambios

- Originales beUI copiados del upstream: `motion/radio.tsx` y `motion/drawer.tsx`
  (solo con el hook de reduced motion seguro para hidratación).
- Fachada: `Surface` (sustituye Card), `Callout` (sustituye Alert), `Avatar`,
  `Textarea`, `PageHeader`, `Drawer` (con foco gestionado), `RadioGroup` y
  `HoverList` (shared-layout-bg).
- Token `destructive-foreground` en light y dark.
- Inicio: cabecera única, buscador en píldora, tabs y lista de acciones en una
  sola superficie con pill de hover; actividad reciente como lista ligera.
- Módulos: sin Breadcrumb (enlace «Acciones»), filas compartidas con `ToolCard`
  y aviso con `Callout`. `ToolsPageHeader` delega en `PageHeader`.
- Menú de usuario con el `Avatar` de la fachada.
- Descartado el context-menu en los chats: el botón de la sidebar no admite
  handlers y un envoltorio tendría ARIA inválido; el menú «…» cubre las acciones.

### Verificación

- `npm run typecheck`, `npm test` (457 correctas), `npm run build`,
  `git diff --check` y `oxlint` (solo warnings preexistentes) correctos.
- Dev server sin errores. Revisión visual: pendiente del usuario.

## 2026-09-23 - Paleta beUI y color de acento configurable

### Cambios

- `globals.css` adopta la paleta de beUI (fuente de beui.dev) en oklch:
  neutros acromáticos en light y dark (#151515 / cards #1c1c1c).
- Acento configurable con presets `blue` (beUI, por defecto), `cyan`,
  `violet`, `green`, `amber` y `neutral`, cada uno con valores light y dark.
  `primary`, `ring`, `selected`, `sidebar-primary` y `chart-1..5` se derivan
  del preset activo (`<html data-accent>`).
- Ajustes > Apariencia: `ThemeModeControl` (claro/oscuro/sistema) y nuevo
  `AccentControl` (radios nativos) en la fachada `@/components/system`.
- Persistencia en localStorage `powermeta4-accent` vía `useAccent`
  (`useSyncExternalStore`) y script inline en el layout raíz para aplicar el
  acento antes del primer pintado. Mapa tipado en `src/lib/theme/accent.ts`.
- `DESIGN.md` actualizado.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 94 archivos correctos y 1 omitido; 457 pruebas correctas y
  36 omitidas (nueva prueba de cambio y persistencia del acento).
- `npm run build` — correcto.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` sin errores (warnings preexistentes en
  `exportExcel.ts`); `oxfmt --check` falla sin configuración (preexistente).
- Dev server: `get_errors` sin errores de sesión. Revisión visual de los
  presets en navegador: pendiente.

## 2026-09-23 - Registro Retributivo: navegación superior e hidratación

### Cambios

- La navegación interna de Registro Retributivo pasa del `<aside>` lateral a
  una barra horizontal bajo la cabecera, en todos los breakpoints (scroll-x
  sin overflow de página). El contenido ocupa todo el ancho.
- `ActiveAnalysisCard` se compacta en línea a la derecha de esa barra
  (visible desde `lg`). `RetributivoInnerNav` pierde la variante vertical.
- Corregido el hydration mismatch de la sidebar global (`tabindex="0"` y
  estilos de motion distintos entre SSR y cliente) con movimiento reducido
  activo en el sistema. Nuevo hook `src/hooks/use-reduced-motion.ts`
  (`useSyncExternalStore`, snapshot de servidor `false`) que sustituye a
  `useReducedMotion` de `motion/react` en los 42 componentes que lo usaban.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 94 archivos correctos y 1 omitido; 456 pruebas correctas y
  36 omitidas.
- `npm run build` — correcto.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` sin errores (2 warnings preexistentes en
  `exportExcel.ts`). `oxfmt --check` falla sin configuración también sobre
  el árbol sin cambios. Preexistente.
- Recarga en navegador para confirmar que el issue desaparece: pendiente.

## 2026-09-23 - beUI para Claude Code (proyecto)

### Cambios

- Skill `beui` disponible solo en este proyecto:
  `.claude/skills/beui/SKILL.md`, con el contenido upstream de beUI
  (registro `@beui` y MCP público).
- MCP `beui` declarado solo en este proyecto en `.mcp.json` como servidor
  remoto `https://mcp.beui.dev/mcp`, sin claves. Claude Code lo propone
  para aprobación al abrir el proyecto.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 95 archivos correctos; 490 pruebas correctas y 2 omitidas.
- `npm run build` — correcto.
- `git diff --check` — correcto en ficheros tracked (los dos ficheros
  nuevos quedan untracked).
- `npm run lint` — `oxlint` sin errores (7 warnings preexistentes de
  Registro y del nombre Hire). `oxfmt --check` falla sin configuración en
  306 archivos, incluidos no tocados y el nuevo `SKILL.md`. Preexistente.
- Conexión MCP en Claude Code no comprobada en esta sesión.

## 2026-09-22 - Rediseño visual con beUI

### Cambios

- La capa visual de producto pasa a beUI mediante la fachada
  `src/components/system`. Light y dark se diseñan con tokens oklch en
  `globals.css`. `next-themes` se conserva.
- Shell, login, Inicio, chat, ajustes, usuarios y Registro Retributivo usan
  esa fachada. El chat mantiene `ExternalStoreRuntime`, un Viewport, un
  footer y un composer; no muestra el modelo.
- Se eliminan primitivas shadcn que ya no importa ninguna pantalla y el
  chrome paralelo de Registro (modal, toast, tabs, card, badge, toggle).
  Quedan como infraestructura `dropdown-menu`, `textarea`, `alert`,
  `progress`, `breadcrumb`, `avatar`, `card` y `separator`.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 95 archivos correctos; 490 pruebas correctas y 2 omitidas.
- `npm run build` — correcto.
- `git diff --check` — correcto (avisos CRLF de Git en Windows, sin errores
  de espacio).
- `npm run lint` — `oxlint` termina con los warnings previos de Registro y
  del nombre de fichero Hire. `oxfmt --check` falla porque no hay
  configuración y marca 306 archivos, incluidos no tocados. Preexistente.
- Navegador no comprobado: esta sesión no tiene la máquina local donde corre
  la app.

## 2026-09-22 - Nombre del fichero de alta sin "Hire"

### Cambios

- El fichero generado por el alta de personas pasa de
  `Hire_<usuario>_<fecha>.xls` a `AltaPersonas_<usuario>_<fecha>.xls`,
  describiendo la operación en vez de referirse a la plantilla interna.
  `Hire_1_PERSONA.xls` (la plantilla en `fuentes/HIRE/`) no cambia de
  nombre: solo cambia el nombre del fichero que se genera por cada alta.

### Verificación

- `npm run typecheck` — correcto.
- `npm test src/lib/meta4/hire/filename.test.ts src/lib/meta4/hire/service.test.ts src/lib/meta4/hire/soap.test.ts src/app/actions/meta4-hire.test.ts` — correcto.

## 2026-09-22 - Enlace tardío en la edición Excel COM

### Cambios

- El script de PowerShell embebido en `editHireWorkbook` deja de acceder a
  `$excel.Propiedad`/`$obj.Metodo()` por notación de punto y usa
  `InvokeMember` (enlace tardío IDispatch) para toda la automatización de
  Excel. Un Primary Interop Assembly de Excel obsoleto (Office 2013, v15.0)
  registrado en el GAC de la máquina hacía que .NET intentara convertir el
  objeto COM al tipo `_Application` con un GUID de interfaz que ya no
  coincide con el Excel 365 instalado, fallando con `QueryInterface
  TYPE_E_ELEMENTNOTFOUND (0x8002802B)` de forma idéntica en PowerShell de
  32 y 64 bits.
- Se corrigen dos efectos del cambio a enlace tardío: las colecciones de
  Excel (`Workbooks`, `Worksheets`...) se desenrollan como `IEnumerable` al
  salir de una función de PowerShell y una colección vacía se convertía en
  `$null` (arreglado con `Write-Output -NoEnumerate`); y los indexadores de
  Excel (`Item`) son propiedades parametrizadas, no métodos puros, por lo
  que `InvokeMethod` solo daba `DISP_E_MEMBERNOTFOUND` (arreglado
  combinando los flags `InvokeMethod | GetProperty`).

### Verificación

- `npm run typecheck` — correcto.
- `npm run lint` — correcto (solo avisos preexistentes ajenos al cambio).
- `npm test` — 94 archivos correctos, 1 omitido; 451 pruebas correctas y 36
  omitidas.
- `npm run build` — correcto.
- Prueba real fuera de la suite: script extraído de `excel.ts` ejecutado
  contra `Hire_1_PERSONA.xls` de principio a fin (`workbook-opened` →
  `sheet-ready` → `edited` → `saved` → `closed`), XLS resultante con
  cabecera OLE2 válida. Sin `EXCEL.EXE` huérfano. Sin alta real a Meta4.

## 2026-09-22 - URL Meta4 única y edición Hire

### Cambios

- Los endpoints SOAP salen de `META4_BASE_URL`: Login, perfil, listado,
  detalle y `SRTC_LAUNCH_IMPORT`.
- La edición de `Hire_1_PERSONA.xls` ya no aborta si el PID de Excel tarda en
  aparecer, quita la marca de descarga de la copia y deja el error técnico
  de PowerShell en el log de desarrollo. Escribir en la carpeta compartida
  tiene un error distinto del de edición.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 95 archivos correctos; 485 pruebas correctas y 2 omitidas.
  Incluye `ConvertFrom-Json` real y la edición con Excel COM.
- `npm run build` — correcto.
- `git diff --check` — correcto.
- Prueba local sin SOAP: XLS OLE2 de 33369088 bytes. Plantilla intacta.
  Sin `EXCEL.EXE` huérfano. Sin alta real a Meta4.

## 2026-09-22 - Nombre dinámico del fichero Hire

### Cambios

- `META4_HIRE_FILE_PATH` es el directorio de importación. Cada alta genera
  `Hire_<usuario>_<YYYY-MM-DD_HH-mm-ss>.xls` y usa esa misma ruta para
  escribir, verificar y `ARG_PATH_FILE`.
- El fallo de Excel/PowerShell queda en el log del servidor con código de
  salida, etapa y stderr, sin datos personales. El BOM de los temporales se
  escribe como bytes UTF-8.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 94 archivos correctos; 477 pruebas correctas y 2 omitidas.
  Incluye el BOM de los temporales y la edición real con Excel.
- `npm run build` — correcto.
- `git diff --check` — correcto.
- Sin alta real a Meta4. Sin `EXCEL.EXE` huérfano.

## 2026-09-22 - Plantilla Hire intacta y ruta de importación

### Cambios

- `META4_HIRE_FILE_PATH` es la única ruta: escritura, verificación y
  `ARG_PATH_FILE` usan `\\WMETA4PRE2\powermeta4\import_users_excel\Hire.xls`.
- El generador deja de re-serializar el libro con SheetJS. Copia
  `Hire_1_PERSONA.xls` y Excel COM sustituye solo los campos manuales,
  incluidas las columnas duplicadas, y copia la fila plantilla para N personas.

### Verificación

- `npm run typecheck` — correcto.
- `npm test` — 92 archivos correctos; 473 pruebas correctas y 2 omitidas.
  Incluye la comparación real de `Hire_1_PERSONA.xls` contra el fichero
  editado por Excel (1 y 3 personas).
- `npm run build` — correcto.
- `git diff --check` — correcto.
- Sin alta real a Meta4.

## 2026-09-22 - Alta Meta4: tarjetas colapsables y plantilla Hire_1_PERSONA

### Cambios

- El formulario de `/tools/users/new` colapsa personas validadas en tarjetas
  compactas (cliente) y deja una sola expandida.
- El generador clona `Hire_1_PERSONA.xls`, copia la fila 6 para N personas y
  sustituye solo los campos de la UI, incluidas columnas duplicadas (`AY` e
  `IQ` para el correo). Conserva CH/CI y el resto de la plantilla.
- Se elimina el requisito `META4_HIRE_LEGAL_ENTITY_*`.

### Verificación

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio.
- `npm test` — 91 archivos correctos; 472 pruebas correctas y 2 omitidas.
- `npm run build` — correcto. `/tools/users/new` aparece en el manifiesto.
- `git diff --check` — correcto.
- Sin alta real a Meta4. SOAP mockeado en tests. Sin commit.

## 2026-09-21 - Alta de personas Meta4

### Cambios

- `/tools/users/new` deja de redirigir y ofrece el alta de 1..N personas.
  `users.create` pasa a «Alta de personas», `implemented: true`.
- El servidor clona `Hire_VACIO.xls`, escribe solo campos manuales y la
  entidad legal de la sociedad activa, guarda `Hire.xls` en
  `META4_HIRE_FILE_PATH` y lanza `SRTC_LAUNCH_IMPORT` con
  `executeAuthenticatedSoap`.
- No se copian fechas, teléfonos, dirección, IBAN, salario ni demás datos
  de las plantillas de ejemplo. `xlsx.write` genera BIFF/OLE2 pero aplana
  fórmulas y nombres definidos de la plantilla Meta4.
- Datos personales no se persisten en SQLite ni se escriben en logs.

### Verificación

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; conserva 7 warnings preexistentes
  de Registro Retributivo.
- `npm test` — 91 archivos correctos; 471 pruebas correctas y 2 omitidas.
- `npm run build` — correcto. `/tools/users/new` aparece en el manifiesto.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  falla porque no hay configuración y marca 233 archivos, incluidos no
  tocados (preexistente).
- Sin alta real a Meta4. SOAP mockeado en tests. Sin commit.

## 2026-09-14 - Biblioteca oficial de manuales

### Cambios

- Auditoría individual de los 204 archivos incorporados en `manuales/`:
  contenido extraído, metadatos, hashes binarios y de texto, edición y
  procedencia editorial.
- La biblioteca queda en 74 PDF oficiales organizados por configuración,
  usuario y tecnología. Se eliminan 68 PDF duplicados, sustituidos u obsoletos
  y 62 archivos auxiliares o apuntes no oficiales.
- `manuales/README.md` deja el inventario conservado, los criterios y todas las
  decisiones de descarte agrupadas para futuras revisiones.
- El manual oficial SOAP/REST de 2024 recibe una capa OCR en español: mantiene
  134 páginas y la misma representación visual, pero pasa de cero a 27.612
  palabras extraíbles.
- La ingesta de conocimiento recorre `KB_SOURCE_DIR` de forma recursiva y la
  configuración de ejemplo apunta a `./manuales/oficiales`.

### Verificación

- Auditoría documental — 74/74 PDF con texto extraíble y marca Meta4/Cegid;
  cero duplicados binarios o textuales.
- `tsc --noEmit` — correcto.
- `vitest run` — 79 archivos correctos y 1 omitido; 399 pruebas correctas y
  37 omitidas.
- `next build` — correcto.
- `oxlint` — sin errores; conserva 7 warnings preexistentes.
- `oxfmt --check` — fallo global preexistente: no tiene configuración y marca
  117 archivos. La comprobación dirigida pasa para el código, el inventario y
  el changelog tocados; `spec/todo.md` vuelve a quedar marcado justo después de
  que el propio formateador lo reescriba.
- `git diff --check` — correcto.

Las entradas fechadas antes del 2026-09-11 describen decisiones históricas;
las referencias a las migraciones 006/007, Agent Runtime y proveedores no
representan la arquitectura vigente.

## 2026-09-11 - Chat global OpenAI-compatible

### Cambios

- El chat usa `POST /api/chat/run` y una configuración única server-side:
  `AI_BASE_URL`, `AI_API_KEY` y `AI_MODEL`. Se normaliza la URL a
  `/chat/completions`, se envía únicamente `{ model, messages, stream: true }`
  y se procesan deltas textuales SSE.
- La rama se reconstruye desde `parentMessageId`; el placeholder asistente,
  partes no textuales, system prompts, tools, function calling y datos Meta4
  quedan fuera de la petición. Se mantienen SQLite, ExternalStoreRuntime,
  streaming, persistencia incremental, cancelación, edición, regeneración,
  ramas y estados terminales.
- La UI elimina picker, CRUD y preferencias de proveedores, disambiguación,
  renderers de tools y aprobaciones. El composer muestra solo `IA · <modelo>`
  o `IA no configurada`.
- La migración `009_remove_agent_and_provider_configs.sql` sube el esquema a
  9 y elimina `agent_pending_disambiguation`, `agent_turn_projections`,
  `agent_privacy_bindings`, `ai_provider_configs` y la preferencia legacy,
  preservando el historial de chats. Las migraciones 006/007 permanecen como
  historia, no como arquitectura vigente.
- Backups y documentación quedan alineados con el esquema 9. Se conserva
  `@google/genai` únicamente por Registro Retributivo; se elimina la
  dependencia `tw-shimmer` al desaparecer el renderer de tools.

### Verificación

- `npm run setup` — correcto; la base local queda en `user_version = 9`,
  `integrity_check` es `ok`, `foreign_key_check` está vacío y no existen las
  tablas ni la preferencia legacy.
- `npm run typecheck` — correcto.
- `npm test` — 70 archivos, 363 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; incluye `POST /api/chat/run` y no incluye la
  ruta antigua del agente.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio, con warnings
  preexistentes de Registro Retributivo; `oxfmt --check` falla porque no hay
  configuración y detecta formato en archivos preexistentes.
- La verificación manual con un endpoint real sigue pendiente de que el
  usuario configure las tres variables en `.env.local`.

## 2026-08-19 - Buscar de sidebar: contexto cmdk

### Cambios

- El botón Buscar de la sidebar abre `CommandDialog` con un raíz
  `Command shouldFilter={false}` alrededor de input y lista, el mismo
  patrón que la paleta de Inicio. Sin ese contexto, cmdk lanzaba
  `Cannot read properties of undefined (reading 'subscribe')`.
- El filtrado sigue en `filterChats`; no se restaura un `Command`
  interno en `CommandDialog` para no anidar raíces.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en
  Registro Retributivo.
- `npm test` — 79 archivos, 408 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en archivos no tocados.

## 2026-08-19 - Workspaces Meta4 multi-sociedad

### Cambios

- El login SOAP sigue siendo una sola sesión (`JSESSIONID` +
  `refreshSessionId`). El probe recorre siempre `CYC` → `IBER` → `COLL`
  y persiste todas las coincidencias; un fallo de infraestructura a
  mitad de secuencia aborta el login para no presentar una lista
  incompleta.
- Cada sociedad detectada es un workspace read-only (`companyId` +
  `ARG_SOCIEDAD`). El selector de SocietyHeader no crea ni elimina
  sociedades; con una sola el header no es interactivo; DEBUG no inventa
  CYC/IBER/COLL.
- Migración `008_meta4_multi_society`: PK de `meta4_user_profile` por
  `society`. Las huellas de `schema_migrations` normalizan CRLF a LF
  para que `npm run setup` coincida con bases aplicadas desde Git.

### Verificación automática

- `npm run setup` — correcto; `PRAGMA user_version` = 8,
  `integrity_check` ok, `foreign_key_check` vacío.
- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en
  Registro Retributivo.
- `npm test` — 79 archivos, 407 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en archivos no tocados.

## 2026-08-17 - Probe Gemini alineado con el curl oficial

### Cambios

- El probe de Gemini envía el mismo JSON que la documentación
  (`contents[].parts[].text`, sin `role` ni `systemInstruction`) y la
  cabecera `X-goog-api-key`.
- Si el chat nativo responde 200 y el POST de tools falla, el error es
  «el modelo no admite las herramientas», no «API key no válida».

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 78 archivos, 397 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en archivos no tocados.

## 2026-08-17 - Auth nativo de Gemini (keys AQ. y 3.1 Flash Lite)

### Cambios

- El probe y el runtime detectan `generativelanguage.googleapis.com` y
  llaman a `models/{model}:generateContent` con `x-goog-api-key`, sin
  `Authorization: Bearer` ni `?key=` en la URL.
- Así se pueden guardar y usar keys nuevas de AI Studio (`AQ.`) y
  `gemini-3.1-flash-lite`. El resto de proveedores no cambia.
- El body nativo sigue pasando por `assertOutboundPayload` antes del
  `fetch`. Un 403 nativo sigue siendo «API key no válida».

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 78 archivos, 395 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en archivos no tocados.

## 2026-08-17 - Errores de chat legibles y grafo padre/hijo

### Cambios

- Un fallo del asistente ya no pinta `[object Object]`: el status de
  assistant-ui lleva un string, y el turno `failed` guarda el mensaje
  real en el bubble.
- El `ExportedMessageRepository` sale en orden topológico (padres antes
  que hijos) y sin aristas a padres inexistentes, para no tumbar el
  Thread con `Parent message not found` al hidratar tras un error.
- El contrato 1013 no cambia: el modelo sigue viendo `EMP_*` y
  `employee.get_field`; el transcript visible conserva matrícula y puesto.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 76 archivos, 384 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en archivos no tocados.

## 2026-08-17 - Picker de modelo, validación de proveedor y wrap de `hola`

### Cambios

- El selector del composer y el Agent Runner comparten
  `selectedProviderConfigId`. Un fallback visual ya no deja Gemini
  seleccionado en UI y ausente en el runtime; si la lectura de la API
  key falla, el error deja de disfrazarse como «no hay modelo».
- Guardar una configuración prueba de verdad el contrato
  OpenAI-compatible (mensaje sintético y una tool `test_tool`) y solo
  entonces cifra la API key. Las Base URL se normalizan con `URL`.
- El bubble de usuario deja la columna grid `auto` que partía `hola` en
  `ho` / `la`; el texto persistido sigue siendo exactamente `"hola"`.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 75 archivos, 376 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en 195 archivos, incluidos
  archivos no tocados.

## 2026-08-17 - Login Meta4 en VM / DPAPI crypt32

### Cambios

- El login SOAP y el lookup de perfil CYC ya autenticaban en la VM, pero
  el fallo posterior (DPAPI vía PowerShell o persistencia local) se
  mostraba como error de usuario, contraseña o conexión.
- DPAPI CurrentUser deja de spawnar `powershell.exe` y llama a
  `CryptProtectData` / `CryptUnprotectData` in-process con `koffi`.
  `koffi` queda como `serverExternalPackages` y su script de prebuild
  está permitido.
- Si Meta4 ya autenticó y falla el cifrado, SQLite o la cookie, la UI
  informa de sesión local y el servidor registra
  `[meta4-auth] session creation failed` con nombre/`code` sanitizados.
  Un esquema ausente añade el hint `npm run setup` en ese log.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 68 archivos, 346 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en 191 archivos, incluidos
  archivos no tocados. Sin commit.

## 2026-08-14 - Fix 1013 / employee.get_field

### Cambios

- El mensaje visible `"1013"` se conserva exacto en SQLite y al hidratar.
  El wrap `10` / `13` era CSS: el bubble de usuario usa ahora `break-words`
  y `word-break: normal`, no `wrap-break-word`.
- Tras resolver una matrícula, el leftover ya no usa `.includes()` sobre
  todo el directorio (IDs cortos y partículas como `El` no marcan el
  mensaje como no identificado). El LLM recibe `EMP_*`; la tool no acepta
  `1013` crudo; SOAP se llama con el `employeeId` exacto.
- El vault reminta el token si el hex contiene una matrícula del
  directorio y resuelve `emp_*` en minúsculas. Nombre y matrícula del
  mismo empleado reutilizan el mismo `EMP_*` en la conversación.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 67 archivos, 338 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en 186 archivos, incluidos
  archivos no tocados. Sin commit.

## 2026-08-14 - Agent runtime y Privacy Gateway

### Cambios

- El chat deja el mock y usa `POST /api/agent/run` (SSE, Node.js) con un
  proveedor OpenAI-compatible configurado en Ajustes. El composer lista
  configs usables (`model` + API key); el servidor valida empresa, sesión y
  config antes de descifrar la clave.
- El transcript visible en SQLite sigue siendo el historial real. La historia
  hacia el LLM es una proyección (`EMP_*` y semántica de tools). Si falta la
  proyección de un turno con datos protegidos, no se llama al proveedor y no
  se reescribe ni se borra el chat.
- Primera herramienta SOAP: `employee.get_field` (plantilla local). Las
  menciones ambiguas se resuelven en servidor con botones; modo debug no
  llama a Meta4 ni al modelo para preguntas de empleado.

### Verificación automática

- `npm run typecheck` — correcto.
- `npx oxlint` — sin errores del cambio; warnings preexistentes en Registro
  Retributivo.
- `npm test` — 62 archivos, 300 pruebas correctas y 2 omitidas.
- `npm run build` — correcto; Next.js 16.3.0 incluye `POST /api/agent/run`.
- `git diff --check` — correcto.
- `npm run lint` — `oxlint` termina sin errores del cambio; `oxfmt --check`
  no tiene configuración y detecta formato en 178 archivos, incluidos
  archivos no tocados. Sin commit.

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
