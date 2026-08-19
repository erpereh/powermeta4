# DESIGN.md — Sistema visual de powermeta4

## Dirección

powermeta4 debe sentirse como una herramienta profesional para operaciones y
conversación: sobria, clara, precisa y tranquila. El chat mantiene prioridad,
mientras Inicio y los workspaces locales organizan acciones preparadas para
una futura conexión ERP.

La fuente visual es el preset `b1temovYm`, junto con las primitivas existentes
de shadcn/ui (estilo `radix-nova`) y assistant-ui. La identidad visual se
centraliza en `PowermetaLogo`, única API de branding. El isotipo oficial vive
en `public/brand/powermeta4-mark.svg` y se sirve como `/brand/powermeta4-mark.svg`.
`PowermetaLogo compact` muestra solo el isotipo; el modo normal añade el
wordmark textual `powermeta4`. SocietyHeader, login, cabeceras y settings
consumen ese componente; no importan el SVG.

Los componentes de interfaz parten de shadcn/ui Nova: no se sustituyen por
implementaciones paralelas salvo composiciones de producto (command palette,
module dock, `ToolCard`) que combinan primitivas oficiales (`Command`, `Tabs`,
`ScrollArea`, `Empty`, `Badge`) o, en el caso de `ToolCard`, una composición
propia compacta con `Link`/`button` y tokens semánticos (`border`, `card`,
`accent`) sin envolver el primitivo `Card`.

## Tipografía, tokens y temas

Inter es la única familia visible. `--font-inter` alimenta `font-sans`,
`font-heading` y `font-mono`, de modo que títulos, formularios, menús,
mensajes y código compartan ritmo tipográfico.

Usar superficies y colores semánticos (`background`, `card`, `muted`,
`sidebar`, `foreground`, `border`, `ring`, `primary` y `destructive`). Los
colores de empresas y favoritos son excepciones deliberadas y se resuelven
desde mapas estáticos tipados; nunca se guardan clases dinámicas en el store.

Claro, oscuro y sistema representan el mismo producto con distintos valores
de tokens. El tema usa `next-themes`, `attribute="class"`, sistema habilitado
y transiciones desactivadas durante el cambio. Ninguna pantalla depende de una
clase `dark` fija ni de fondos hardcodeados.

## Shell y sidebar

La sidebar usa la base oficial existente con composición inspirada en
`sidebar-07`:

- la cabecera única integra el isotipo, la sociedad activa y el alcance;
- en sesión Meta4 con varias sociedades muestra un selector de solo lectura
  (`CYC` | `IBER` | `COLL` detectadas) sin crear ni eliminar workspaces;
  con una sola sociedad el header no es interactivo; en modo debug muestra
  `Modo desarrollo` sin sociedades inventadas;
- el aislamiento interno por `activeCompanyId` / `society_code` se gestiona
  en servidor: el navegador no elige la sociedad de una operación SOAP;
- expandida muestra navegación, el grupo Herramientas, Favoritos, Chats y usuario;
- colapsada muestra únicamente controles funcionales, tooltips y avatar;
- en desktop colapsada, pulsar el icono de Herramientas expande la sidebar
  (`useSidebar().setOpen(true)`), abre el grupo y muestra el submenu; no usa
  Popover ni DropdownMenu;
- móvil conserva el Sheet/offcanvas nativo, nunca un rail permanente.

El menú de usuario abre Ajustes como un diálogo grande con los datos de la
persona, las configuraciones locales de IA y las copias locales; `/settings`
reutiliza el mismo contenido como deep-link.

Herramientas es un grupo colapsable, no una ruta de navegación. Todo el row
es el `CollapsibleTrigger`: abre o cierra el submenu, anuncia `aria-expanded`
y no navega a `/tools`. El submenu consume solo `STANDALONE_TOOLS` (hoy
`Reg. Retrib.`); los módulos ERP no aparecen ahí. El hijo activo muestra
estado seleccionado; el grupo no. El contenido principal conserva un único
trigger accesible para la sidebar.

## Inicio y workspaces

Inicio (`/home`) es un command center compacto de **Acciones** (operaciones
ERP/Meta4): cabecera mínima, alcance activo (sociedad Meta4 o modo desarrollo),
trigger de búsqueda con atajo `Ctrl+K`, dock de módulos, rejilla de tarjetas y
actividad reciente real. No incluye hero, acceso rápido ni tarjetas gigantes
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
tiene un empty state compacto con `Empty`.

Los cinco workspaces ERP usan una plantilla común: breadcrumb (`Acciones` →
`/home`), alcance activo,
icono, título, descripción, cuatro tarjetas de acciones y estado inferior.
Las acciones futuras muestran `Disponible próximamente` y no navegan, guardan
datos ni inventan resultados. Usuarios ya no representa personas locales: sus
cuatro tarjetas preparan operaciones para sistemas ERP externos y las rutas
anteriores redirigen al catálogo común.

No se duplican secciones entre Inicio y un workspace, ni se mantienen arrays de
usuarios o catálogos paralelos fuera del registro central.

Las herramientas SOAP Meta4 obtienen `Meta4Society` (`CYC` | `IBER` | `COLL`)
y el `companyId` interno exclusivamente desde `getMeta4OperationalContext()`
en servidor, usando el workspace activo validado. El navegador no elige ni
sustituye la sociedad de la operación. Una autenticación Meta4 puede exponer
1–3 sociedades; cada una es un workspace read-only.

En el listado de usuarios, pulsar una fila abre un `Dialog` grande con el
detalle del empleado (`CSP_POWER4_CONSULTA_ORO`), con la misma convención
visual que el diálogo de Ajustes: secciones con `dl` de dos columnas y un
bloque de correos aparte. Toda la fila es interactiva (foco por teclado,
`aria-label` propio, Enter/Espacio abren el diálogo) sin sustituir su rol
nativo de fila ni anidar controles dentro de las celdas.

## Chat y recomendaciones

El Thread conserva una sola instancia de `ComposerPrimitive.Root`, un único
`Viewport` y un `ViewportFooter` integrado. El estado vacío centra el welcome
y el composer; al iniciar una conversación el footer se vuelve sticky dentro
del viewport, nunca `fixed` respecto de la ventana.

Las recomendaciones contextuales tienen dos niveles: categorías y acciones.
No hay selección inicial. Las acciones usan `ThreadPrimitive.Suggestion` con
`send={false}` para preparar texto editable sin ejecutar operaciones ni
duplicar el estado del composer.

El composer lista las configuraciones de IA usables (`ai_provider_configs` con
modelo y API key) de la empresa activa. Sin configs usables muestra
«Configura un modelo en Ajustes». La desambiguación de empleados es una
tarjeta local con botones; el modelo no elige entre homónimos. El historial
pintado en el Thread es el transcript SQLite real; la proyección hacia el
LLM no se muestra al usuario.

## Responsive y accesibilidad

Revisar 1440 px, 1024 px, 768 px y 390 px. Evitar overflow horizontal,
dependencia exclusiva de hover, saltos de layout y controles interactivos
anidados. Todo icon button tiene nombre accesible, foco visible, estado
correcto y navegación por teclado; los tooltips complementan, no sustituyen,
las etiquetas.
