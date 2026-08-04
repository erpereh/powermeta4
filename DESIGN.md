# DESIGN.md — Sistema visual de powermeta4

## Dirección

powermeta4 debe sentirse como una herramienta profesional para operaciones y
conversación: sobria, clara, precisa y tranquila. El chat mantiene prioridad,
mientras Inicio y los workspaces locales organizan acciones preparadas para
una futura conexión ERP.

La fuente visual es el preset `b1temovYm`, junto con las primitivas existentes
de shadcn/ui y assistant-ui. La identidad usa un símbolo geométrico simple que
funciona como marca compacta y wordmark `powermeta4`; no usa estrellas,
sparkles ni iniciales como decoración.

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

- la cabecera única integra logo, `powermeta4` y empresa activa;
- el selector permite cambiar, crear y eliminar workspaces locales;
- expandida muestra navegación, Herramientas, Favoritos, Chats y usuario;
- colapsada muestra únicamente controles funcionales, tooltips y avatar;
- móvil conserva el Sheet/offcanvas nativo, nunca un rail permanente.

El selector usa una sola superficie de activación y submenús de empresa. Crear
empresa abre un diálogo breve; eliminar exige confirmación, explica que solo
afecta datos locales y bloquea la última empresa. El cambio navega a Inicio y
mantiene el aislamiento por `activeCompanyId`.

El enlace de Herramientas y su expansión son controles independientes. El
enlace navega a `/tools`; el chevron solo abre o cierra el grupo, anuncia
`aria-expanded` y no crea historial. El contenido principal conserva un único
trigger accesible para la sidebar.

## Inicio y workspaces

Inicio es un launchpad con empresa activa, búsqueda, acceso rápido, módulos y
actividad reciente real. Las visitas solo se registran para acciones
implementadas; la ausencia de visitas tiene un empty state claro.

Los cinco workspaces usan una plantilla común: breadcrumb, empresa activa,
icono, título, descripción, cuatro tarjetas de acciones y estado inferior.
Las acciones futuras muestran `Disponible próximamente` y no navegan, guardan
datos ni inventan resultados. Usuarios ya no representa personas locales: sus
cuatro tarjetas preparan operaciones para sistemas ERP externos y las rutas
anteriores redirigen al catálogo común.

No se duplican secciones entre Inicio y un workspace, ni se mantienen arrays de
usuarios o catálogos paralelos fuera del registro central.

## Chat y recomendaciones

El Thread conserva una sola instancia de `ComposerPrimitive.Root`, un único
`Viewport` y un `ViewportFooter` integrado. El estado vacío centra el welcome
y el composer; al iniciar una conversación el footer se vuelve sticky dentro
del viewport, nunca `fixed` respecto de la ventana.

Las recomendaciones contextuales tienen dos niveles: categorías y acciones.
No hay selección inicial. Las acciones usan `ThreadPrimitive.Suggestion` con
`send={false}` para preparar texto editable sin ejecutar operaciones ni
duplicar el estado del composer.

## Responsive y accesibilidad

Revisar 1440 px, 1024 px, 768 px y 390 px. Evitar overflow horizontal,
dependencia exclusiva de hover, saltos de layout y controles interactivos
anidados. Todo icon button tiene nombre accesible, foco visible, estado
correcto y navegación por teclado; los tooltips complementan, no sustituyen,
las etiquetas.
