# DESIGN.md — Sistema visual de powermeta4

## Dirección

powermeta4 debe sentirse como una herramienta profesional para operaciones y
conversación: sobria, clara, precisa y tranquila. El chat mantiene prioridad,
mientras Inicio y los workspaces locales organizan acciones preparadas para
una futura conexión ERP.

La capa visual de producto es **beUI** a través de la fachada única
`src/components/system`. Los módulos de producto importan solo desde
`@/components/system` (o `@/components/system/...`); no importan
`@/components/motion/*` ni `@/components/agents/*` salvo esa fachada.
shadcn/ui (estilo `radix-nova`) y Radix quedan como infraestructura solo donde
beUI no tiene equivalente: `textarea`, `breadcrumb`, `avatar`, `alert`,
`progress`, `separator`, `card` (superficie sobria; beUI solo ofrece tilt) y
el menú de acciones (ver Menú).
assistant-ui se conserva para el Thread.

La identidad visual se centraliza en `PowermetaLogo`, única API de branding. El
isotipo oficial vive en `public/brand/powermeta4-mark.svg` y se sirve como
`/brand/powermeta4-mark.svg`. `PowermetaLogo compact` muestra solo el isotipo;
el modo normal añade el wordmark textual `powermeta4`. SocietyHeader, login,
cabeceras y settings consumen ese componente; no importan el SVG.

## Tipografía, tokens y temas

Inter es la única familia visible. `--font-inter` alimenta `font-sans`,
`font-heading` y `font-mono`, de modo que títulos, formularios, menús,
mensajes y código compartan ritmo tipográfico.

Usar superficies y colores semánticos shadcn existentes (`background`, `card`,
`muted`, `sidebar`, `foreground`, `border`, `ring`, `primary`, `destructive`)
más los tokens de producto `elevated`, `overlay`, `selected`, `disabled`,
`code` y `shadow` (registrados en `@theme inline`). Light y dark siguen la
paleta de beUI (beui.dev) expresada en oklch (sin hex): neutros acromáticos,
light casi blanco con cards un paso más oscuras y dark #151515 / cards
#1c1c1c. El acento es configurable en Ajustes > Apariencia (`AccentControl`
de la fachada): azul beUI por defecto, cian, violeta, verde, ámbar y grafito.
Cada preset vive en `globals.css` como `[data-accent]` con valores propios
para light y dark; `primary`, `ring`, `selected`, `sidebar-primary` y
`chart-1..5` se derivan de él. El id se guarda en localStorage
(`powermeta4-accent`, preferencia visual como el tema) y un script inline en
el layout raíz lo aplica en `<html data-accent>` antes del primer pintado. Los
ids válidos salen del mapa tipado `ACCENT_PRESETS` (`src/lib/theme/accent.ts`).
Los colores de empresas y favoritos son
excepciones deliberadas y se resuelven desde mapas estáticos tipados; nunca se
guardan clases dinámicas en el store.

Los **chips de icono** (`IconChip`) son la otra excepción controlada: ocho
tonos (`orange`, `blue`, `green`, `violet`, `amber`, `teal`, `rose`, `slate`)
definidos como pares `--tone-*` / `--tone-*-foreground` en `globals.css` para
light y dark (oklch) y resueltos solo desde `src/lib/theme/icon-tones.ts`:
`MODULE_TONES` (módulos ERP), `STANDALONE_TOOL_TONES` (herramientas) y
`PORTAL_ICON_TONES` (iconos del portal). El chip es decorativo
(`aria-hidden`); el nombre accesible está en el texto contiguo.

Claro, oscuro y sistema representan el mismo producto con distintos valores
de tokens. El tema usa `next-themes`, `attribute="class"`, sistema habilitado
y `disableTransitionOnChange`. Ninguna pantalla depende de una clase `dark`
fija ni de fondos hardcodeados. `ThemeToggle` (variante circle) alterna
light/dark; `ThemeModeControl` fija `light | dark | system`.

`prefers-reduced-motion: reduce` anula animaciones y transiciones no esenciales
de forma global además del respeto que ya traen los componentes beUI.

## Contratos de componentes (fachada)

- **Un Button** (`Button` / `StatefulButton`). Prohibidos MagneticButton,
  MetallicButton y efectos magnetic / metallic / tilt / bloom / shader /
  marquee / goo.
- **Un Modal** (`Modal`): tamaños `sm | md | lg | viewport`; `lg` usa
  `max-w-[min(64rem,calc(100vw-2rem))]`; overlay semántico sin blur fuerte.
  `viewport` ocupa la pantalla con un margen de 1rem, altura en `dvh` y
  contenido flex contenido; conserva cierre, Escape, foco y retorno al disparador.
  API controlada: `open`, `onOpenChange`, `title`, `description`, `children`,
  `footer`, `size`. Sin hold-to-confirm.
- **Un Toast**: un solo `AnimatedToastStack` vía `ToastProvider` +
  `useToast().toast({ title, description, status })`. Status:
  `neutral | info | loading | success | error`. `warning` se mapea a `error`.
- **Tabs** variante pill por defecto.
- **Table** beUI (fachada `Table`).
- **Loader** variante spinner por defecto.
- **Badge** = `AnimatedBadge`.
- **Empty** = `EmptyState` (composición propia mínima).
- **Skeleton** = un solo `Skeleton` de producto.
- **Menú único**: DropdownMenu de Radix en `src/components/ui/dropdown-menu`
  (reexportado por `@/components/system/menu`), restilado con tokens;
  popover-morph es `role="dialog"` y no cubre menú de acciones accesible
  (teclado, typeahead, `aria-haspopup=menu`). No usar popover gooey.
- **Sidebar** beUI animada vía fachada; un solo `SidebarTrigger` principal;
  prohibido `SidebarRail` / `AnimatedSidebarRail`.
- **Números**: `NumberTicker` (dígitos que ruedan) para conteos enteros;
  `AnimatedNumber` con `format` para importes.
- **Copiar**: `ActionSwapButton` (Copiar → Copiado) para confirmar acciones
  instantáneas sin toast.
- **Cabecera de pantalla**: `PageHeader` vive dentro del contenido, sin barra
  ni borde: chip de icono (o `leading`, p. ej. avatar), ruta pequeña opcional,
  título con `badge`, descripción, acciones a la derecha y `toolbar` (filtros
  o navegación) en una segunda fila. En escritorio el trigger de la sidebar
  está en la propia sidebar; `PageHeader` solo lo muestra en móvil
  (`SidebarToggle`), de modo que siempre hay un único trigger visible.
  `ToolsPageHeader` recibe el icono por nombre del registro para poder usarse
  desde páginas de servidor y añade la ruta «Acciones / Módulo».
- **Detalle**: `DetailHeader` (ruta, chip grande, título con estado,
  descripción) en columna centrada, `Section` (título fuera de la caja) y
  `PropertyList` (tabla clave‑valor de dos columnas con pie opcional).
- **Cifras**: `StatTile` (etiqueta, valor y nota) para filas de importes.
- **Variantes de Tabs por contexto**: `underline` para navegación de una
  herramienta y filtros secundarios dentro de un panel; `segment` para cambiar
  de modo o de gráfica; `pill` para filtros de estado con contador.

### Excepciones documentadas

- `PromptInput` de beUI no sustituye `ComposerPrimitive` de assistant-ui.
- `message-scroller` no sustituye el `Viewport` del Thread.
- Las gráficas de Registro Retributivo siguen en Recharts.
- `code-block` de beUI está instalado (usa `shiki`; no depende del paquete
  `ai` en runtime) para superficies de código futuras; no sustituye el
  markdown del chat.
- `textarea` permanece en shadcn.

## Shell y sidebar

El organigrama usa tarjetas HTML y conectores SVG dentro de un lienzo contenido.
Arrastre del fondo, rueda anclada al puntero y dos dedos permiten mover y ampliar
entre 20% y 200%; flechas y controles visibles ofrecen alternativas de teclado.
Desplegar equipo y consultar la ficha son acciones independientes. La ficha
vive en un panel lateral, ocupa el lienzo en móvil y se conserva al abrir el
Modal `viewport`, junto con las ramas y la cámara. La distribución reserva la
anchura de cada subárbol y mantiene visible la persona que se despliega.

La sidebar de producto (migración posterior) usará la fachada beUI
`animated-sidebar` con las mismas reglas de producto actuales:

- la cabecera única integra el isotipo, la sociedad activa y el alcance, y en
  la misma fila los iconos Buscar (abre la búsqueda de chats) y plegar
  (`SidebarToggle`); plegada, apila isotipo y trigger y Buscar pasa a la
  lista de navegación;
- la sidebar usa el token `sidebar` como fondo y etiquetas de grupo en
  minúscula (`Herramientas`, `Portal`, `Favoritos`, `Chats`); Favoritos solo
  aparece si hay favoritos y Chats muestra «Sin chats» si está vacío;
- en sesión Meta4 con varias sociedades muestra un selector de solo lectura
  (`CYC` | `IBER` | `COLL` detectadas) sin crear ni eliminar workspaces;
  con una sola sociedad el header no es interactivo; en modo debug muestra
  `Modo desarrollo` sin sociedades inventadas;
- el aislamiento interno por `activeCompanyId` / `society_code` se gestiona
  en servidor: el navegador no elige la sociedad de una operación SOAP;
- expandida muestra Inicio y Nuevo chat, la sección Herramientas, el grupo
  Portal, Favoritos, Chats y usuario;
- colapsada muestra únicamente controles funcionales, tooltips y avatar;
- en desktop colapsada, pulsar el icono de Portal expande la sidebar
  (`useSidebar().setOpen(true)`), abre el grupo y muestra el submenu; no usa
  Popover ni DropdownMenu para ese caso;
- móvil conserva el Sheet/offcanvas nativo, nunca un rail permanente.

El menú de usuario abre Ajustes como un diálogo grande con los datos de la
persona y las copias locales; `/settings` reutiliza el mismo contenido como
deep-link. La configuración del chat no vive en Ajustes.

Herramientas es una sección con etiqueta siempre visible, no una ruta de
navegación ni un grupo plegable: lista directamente `STANDALONE_TOOLS` (hoy
`Reg. Retrib.`) con su chip de color; los módulos ERP no aparecen ahí y no hay
enlace a `/tools`. Portal sí es un grupo plegable: la fila abre o cierra el
submenu, anuncia `aria-expanded` y no navega; los hijos llevan chip con el
tono de su icono. El elemento activo muestra estado seleccionado.

## Inicio y workspaces

Inicio (`/home`) es un command center centrado de **Acciones** (operaciones
ERP/Meta4): chip de alcance activo (sociedad Meta4 o modo desarrollo), isotipo
con el título «Acciones» y una frase, caja de búsqueda grande con atajo
`Ctrl+K`, dock de módulos con chips de color, lista de acciones y actividad
reciente real. Sin barra de cabecera (solo el trigger móvil). No incluye hero, acceso rápido ni tarjetas gigantes
de módulo. Las **Herramientas** (utilidades independientes de powermeta4) no
aparecen en Inicio; se listan solo en el submenu de la sidebar.

La búsqueda de Acciones usa `CommandDialog` con filtrado propio
(`searchTools` del registro, `shouldFilter={false}`) y agrupa resultados por
módulo ERP. No incluye herramientas standalone. En `/home`, `Ctrl+K` abre esta
paleta; en el resto de rutas abre la búsqueda de conversaciones en la sidebar.

El dock de módulos filtra la rejilla mediante `Tabs` en línea con
`ScrollArea` horizontal; el acento cian (`primary`) aparece solo en el tab
activo. `ToolCard` es una fila compacta (~75–100 px) con composición propia
(`Link`/`button`, chip de icono, título, descripción breve y flecha); las no
implementadas muestran badge `Próximamente` y no registran visita.

El registro central (`src/lib/tools/registry.ts`) es la única fuente de módulos,
acciones, iconos, rutas y búsqueda, con dos slices independientes:
`TOOL_MODULES` / `TOOL_REGISTRY` alimentan Inicio (Acciones ERP);
`STANDALONE_TOOLS` alimenta el submenu Herramientas de la sidebar.
Las herramientas standalone pueden tener una ruta placeholder navegable aunque
`implemented` sea `false`. Registro Retributivo está implementado (`true`) y
vive en `/tools/registro-retributivo`. `searchTools` busca solo Acciones ERP por nombre,
descripción, keywords y nombre de módulo.

Las visitas solo se registran para acciones implementadas; la ausencia de visitas
tiene un empty state compacto.

Los cinco workspaces ERP usan una plantilla de detalle común en columna
centrada: `DetailHeader` con ruta `Acciones / Módulo`, chip grande, título y
badge honesto «Sin conexión ERP», descripción; `Section` «Acciones
disponibles» y `Section` «Estado» con `PropertyList` (alcance, acciones
disponibles X de N, conexión ERP pendiente).
Las acciones futuras muestran `Disponible próximamente` y no navegan, guardan
datos ni inventan resultados. Usuarios ya no representa personas locales: el
listado consulta PeopleNet y el alta de personas llama a Meta4; las rutas
antiguas de búsqueda y detalle redirigen al catálogo común.

No se duplican secciones entre Inicio y un workspace, ni se mantienen arrays de
usuarios o catálogos paralelos fuera del registro central.

Las operaciones Meta4 y las consultas PeopleNet obtienen `Meta4Society`
(`CYC` | `IBER` | `COLL`) y el `companyId` interno exclusivamente desde
`getMeta4OperationalContext()` en servidor, usando el workspace activo
validado. El navegador no elige ni sustituye la sociedad de la operación.
Una autenticación Meta4 puede exponer
1–3 sociedades; cada una es un workspace read-only.

En el listado de usuarios, pulsar una fila abre un diálogo grande con el
detalle del empleado (PeopleNet SQL Server), con la misma convención
visual que el diálogo de Ajustes: secciones con `dl` de dos columnas y un
bloque de correos aparte. Toda la fila es interactiva (foco por teclado,
`aria-label` propio, Enter/Espacio abren el diálogo) sin sustituir su rol
nativo de fila ni anidar controles dentro de las celdas.

El alta de personas vive en `/tools/users/new`: formulario de 1..N personas
con tarjetas colapsables en cliente, confirmación
(«Se van a procesar X personas en Meta4») y Server Action. El servidor copia
`Hire_1_PERSONA.xls` y Excel sustituye solo los campos de la UI. El fichero
generado lleva el usuario Meta4 y la fecha, dentro del directorio configurado.
Los datos personales no se persisten en SQLite.

«Consultar una nómina» vive en `/tools/payroll/receipt` y adapta la ventana
Meta4 «Ejecución del recibo de nómina»: matrícula, periodo de liquidación,
`Tipo de pagas` (Paga actual, Pagas retroactivas, Paga normal + retroactivas)
y `Moneda de proceso` (Moneda de cálculo u Otra con ID de moneda) en dos
`fieldset` con `RadioGroup`. El recibo (`PayrollReceiptView`) sigue la
estructura del PDF de Meta4 con superficies propias: datos de empresa y
trabajador en `dl`, tabla de conceptos (Unidades, Precio, % Jorn., Concepto,
Devengos, Retención) con los conceptos informativos atenuados y su desglose
sangrado, bases y acumulados, totales con el líquido destacado y datos del
banco. Mientras la lectura en PeopleNet no esté conectada, consultar solo
avisa de que la conexión está pendiente y no muestra datos.

Los workspaces futuros muestran estados honestos de disponibilidad; no se
simulan conexiones, resultados ni operaciones de ERP.

## Registro Retributivo

Dos barras como máximo: `PageHeader` (título, «Exportar Excel» como botón de
icono con tooltip y «Nuevo análisis») y la navegación de vistas con `Tabs underline`
(en móvil solo la pestaña activa muestra su etiqueta; el resto la conserva en
sr-only). El análisis activo y el estado de IA son un indicador compacto a la
derecha de la nav.

- **Inicio sin análisis**: título «Nuevo análisis» con una frase de qué hace la
  herramienta y tres pasos numerados (Recibos de nómina, Registro Retributivo,
  Analizar), cada uno con una línea que explica qué fichero va ahí.
- **Inicio con análisis** (orden: cabecera, veredicto, «Importes» como fila de
  tres `StatTile`, y debajo «Estado de las personas» junto a «Pendiente de
  revisar»): se lee de arriba abajo y todo queda visible (sin
  acordeones ni pestañas que escondan datos): cabecera con fecha y fuentes;
  veredicto en una frase («X de Y personas tienen diferencias») con acceso
  directo; «Estado de las personas» con una fila explicada por estado que abre
  Personas ya filtrado; «Pendiente de revisar» con la acción de cada tarea;
  «Importes» con la explicación de cada cifra; y dos gráficas con título en
  forma de pregunta. Los colores de estado (rojo, ámbar, naranja, verde) son
  una excepción semántica en el mapa estático `personStatus.ts`.
- **Personas**: cabecera con una frase de qué compara la lista; búsqueda y
  `Combobox` de centro y puesto en una fila; filtro de estado con chips
  (`aria-pressed`) con los mismos nombres y colores que Inicio y solo los
  estados con personas; una frase resume las filas visibles sin mezclar
  importes no comparables. La tabla tiene cinco columnas (matrícula, persona con
  centro y puesto, estado, diferencia y causa probable) ordenada por diferencia;
  «Recibo sin Registro» y «Registro sin recibo» muestran su importe atenuado y
  van al final. El detalle (`Drawer`) empieza por la conclusión en una frase,
  causa probable y qué revisar; los periodos se resumen en una línea
  desplegable; importes por bloque y conceptos (filtrados por defecto a los que
  tienen diferencia) debajo. El rojo marca solo lo que supera la tolerancia
  (`toleranceDiffClass`), sea del signo que sea.
- **Cuadre Reg.**: título «Cuadre del Registro» y una frase que aclara que
  comprueba la coherencia interna del Excel y no usa los recibos. Los dos modos
  son tarjetas con nombre claro («Total frente a desglose», «Total frente a
  normalizado + variables»), la pregunta que responden y su resultado. Debajo,
  veredicto en una frase, chips de estado como en Personas, búsqueda y una
  `Table` beUI de seis columnas con solo las diferencias por bloque (rojo solo
  por encima de la tolerancia). El detalle es un `Drawer` que empieza por la
  conclusión y muestra los importes completos.
- **Agrupaciones**: se presenta como «Brecha entre mujeres y hombres por
  grupo». `groupings/genderGap.ts` interpreta las columnas de cada hoja
  (tipo de retribución · bloque · media/mediana · mujeres/varones/diferencia)
  y la vista muestra: chips «Agrupar por», `Select` de retribución y chips
  media/mediana; veredicto con los grupos que alcanzan el 25 % de brecha
  (art. 28.3 ET) y los que no se pueden comparar por tener un solo sexo; y una
  `Table` beUI con personas por sexo, brecha por bloque y estado. El detalle es
  un `Drawer` con la conclusión y media y mediana por bloque. La hoja original
  (cabeceras multinivel) sigue disponible en «Ver la hoja original del Excel»
  y se muestra directamente si la hoja no tiene el formato esperado.
- **Historial**: `HoverList` de filas (fecha como calendario, archivo,
  métricas en línea) con acciones en `Menu`; borrado con `Modal` +
  `StatefulButton`.
- **Ajustes**: navegación lateral `HoverList`; cada sección empieza con título
  y una frase de para qué sirve (`SettingsSectionHeader`). «Diferencias»
  muestra una escala de tres estados (Sin diferencia / A revisar / Con
  diferencia) con los importes que resultan de la tolerancia y del umbral; el
  umbral «revisar» no se expone porque no cambia la clasificación.
  «Exclusiones» compara la lista con `excludedEmployeeIdsApplied` del análisis
  abierto y avisa si falta reanalizar. «Conceptos»: aviso de conceptos sin
  regla, chips En uso / Desactivados / Sin regla, tabla compacta con `Switch`
  y edición (y borrado) en `Drawer`; JSON en un `Drawer` aparte. Los cambios se
  guardan al momento, sin botón «Guardar».
- **Scroll**: sin barras visibles en toda la herramienta (regla en
  `globals.css` bajo `[data-registro-retributivo-root]`).
- **Explicación IA**: panel ligero; carga con `ThinkingShimmer`, resultado en
  `Accordion` y copia con `ActionSwapButton`.

## Chat y recomendaciones

El Thread conserva `ExternalStoreRuntime` y una sola instancia de
`ComposerPrimitive.Root`, un único `Viewport` y un `ViewportFooter` integrado.
El estado vacío centra el welcome y el composer; al iniciar una conversación
el footer se vuelve sticky dentro del viewport, nunca `fixed` respecto de la
ventana.

Las recomendaciones contextuales tienen dos niveles: categorías y acciones.
No hay selección inicial. Las acciones usan `ThreadPrimitive.Suggestion` con
`send={false}` para preparar texto editable sin ejecutar operaciones ni
duplicar el estado del composer.

El chat es global para todos los workspaces locales y se configura
server-side con `AI_BASE_URL`, `AI_API_KEY` y `AI_MODEL`. El composer no
muestra el modelo ni el proveedor. Si falta cualquier variable muestra
`IA no configurada` y desactiva Enviar. No hay picker, CRUD de
proveedores ni preferencias de proveedor en la interfaz.

Los favoritos se derivan de `Chat.favorite`; no se crean arrays paralelos.

El historial pintado en el Thread es el transcript SQLite real. Cada ejecución
reconstruye la rama exacta desde el `parentMessageId` del mensaje asistente en
curso y envía al endpoint únicamente texto no vacío de mensajes `user` y
`assistant`; excluye el placeholder actual y partes no textuales. El endpoint
no recibe system prompts, tools, function calling ni datos de Meta4. Se
conservan streaming, cancelación, estados persistidos, edición, regeneración,
ramas y `headMessageId`.

## Recibo de nómina

«Consultar una nómina» maqueta el recibo como el documento de Meta4: un único
«papel» (`bg-card`, borde y radio pequeño) con casillas de etiqueta en
versalitas sobre el valor. Los filetes se dibujan con rejillas `gap-px` sobre
`bg-border`, sin colores fijos. Orden: cabecera (empresa, trabajador, centro),
cuerpo Unidades · Precio · % Jorn. · Conceptos · Devengos · Retención con
columnas separadas por filetes verticales, y pie de bases, acumulados,
totales, líquido destacado con `selected` y datos bancarios. Los conceptos
informativos se muestran como en Meta4 (`*** … ***`, desglose sangrado y en
`muted-foreground`). En móvil las casillas pasan a dos columnas y solo el
cuerpo tiene scroll horizontal propio.

El calendario de pagas se filtra con Tabs `pill` con contador («Qué pagas
ver»: Todas · Mensuales · Revisiones e incrementos · Retribución variable ·
Otras, ocultando los grupos vacíos). En «Todas», las pagas que no son mensuales
llevan una etiqueta `muted` con su grupo; el filtro también limita qué pagas
consulta el rango.

Un rango de pagas nunca apila recibos: se ve uno cada vez, el más reciente al
entrar, con Tabs `underline` (una por paga, con desbordamiento) y botones
anterior/siguiente con nombre accesible, más un resumen del rango. Encima de
la nómina visible, el menú «Descargar» ofrece esa nómina o todas las del rango
en PDF o Excel. El PDF reproduce el mismo papel de casillas en A4 con grises
neutros (un documento no usa los tokens del tema) y el Excel una hoja por
nómina con importes numéricos, más «Resumen» si son varias.

## Portal

- Raíz `/portal` con `PageHeader`: ruta pequeña sobre el título (la persona con
  avatar, puesto · unidad y sociedad como badge, o el nombre del portal), y
  búsqueda (Ctrl+K abre el
  palette en modo «portal»: pantallas y personas desde dos caracteres),
  persona y sociedad, conmutador Empleado/Responsable con enlaces reales y
  `SectionNav` subrayadas para los apartados de la sección activa. Las subpáginas
  usan su variante `pill` dentro de `FeatureHeader`, después del título y resumen
  y antes de los metadatos, solo si hay varias páginas disponibles. Ambos niveles
  conservan enlaces con `aria-current`, flechas, Inicio y Fin y desplazamiento
  horizontal interno en móvil.
- La sidebar añade el grupo colapsable «Portal» con las mismas reglas que
  Herramientas: la fila no navega, los hijos sí.
- Cada pantalla muestra chip con el tono de su icono, título, resumen, estado
  del dato como pastilla («Datos: …») y origen (JSP de la ficha) atenuado. Las
  consultas y formularios usan `Section` (título fuera) y cada registro leído
  se muestra con `PropertyList`. Estados honestos: `DependencyState` (objeto Meta4 y pendientes),
  `SensitiveLocked`, `PortalError` y `WriteBlockedNotice` (método Meta4 y
  pendiente; el botón de envío queda `disabled` y descrito por el aviso).
- `PortalForm` reproduce las validaciones visibles del original (obligatorios,
  longitudes, CP, fechas reales, orden de fechas, fecha de alta, campos
  condicionales); el foco va al primer campo con error y el resumen se anuncia
  en una región `aria-live`. Los catálogos pendientes se muestran como
  controles deshabilitados con su motivo, nunca con opciones inventadas.
- Las leyendas de estado combinan texto e icono, no solo color.

## Responsive y accesibilidad

Revisar 1440 px, 1024 px, 768 px y 390 px. Evitar overflow horizontal,
dependencia exclusiva de hover, saltos de layout y controles interactivos
anidados. Todo icon button tiene nombre accesible, foco visible, estado
correcto y navegación por teclado; los tooltips complementan, no sustituyen,
las etiquetas.
