# DESIGN.md — Sistema visual de powermeta4

## Dirección

powermeta4 debe sentirse como una herramienta profesional para operaciones y
conversación: sobria, clara, precisa y tranquila. El chat mantiene prioridad,
pero Inicio y los workspaces permiten acceder a operaciones manuales sin
inventar un ERP completo.

La fuente visual es el preset `b1temovYm`, junto con las primitivas existentes
de shadcn/ui y assistant-ui. La identidad propia usa un símbolo geométrico
simple que funciona como marca compacta y como wordmark `powermeta4`. No usa
estrellas, sparkles ni iniciales como marca.

## Tipografía y tokens

Inter es la única familia visible. `--font-inter` alimenta los tokens
`font-sans`, `font-heading` y `font-mono`, de modo que títulos, formularios,
menús, mensajes y código compartan ritmo tipográfico.

Usar superficies y colores semánticos (`background`, `card`, `muted`,
`sidebar`, `foreground`, `border`, `ring`, `primary` y `destructive`). Los
colores de empresas y favoritos son excepciones deliberadas y se resuelven
desde mapas estáticos tipados; no se guardan clases dinámicas en el estado.

## Temas

Claro, oscuro y sistema representan el mismo producto con diferentes valores
de tokens. El tema se controla con `next-themes`, `attribute="class"`, sistema
habilitado y transiciones desactivadas durante el cambio. Ninguna pantalla
debe depender de una clase `dark` fija ni de colores de fondo hardcodeados.

## Shell y sidebar

La sidebar combina el patrón de `sidebar-07` con la base oficial existente:

- expandida: empresa activa, navegación, Herramientas, Favoritos, Chats y
  usuario;
- colapsada: solo iconos funcionales, tooltips y avatar;
- móvil: Sheet/offcanvas nativo de shadcn, nunca un rail permanente.

El selector de empresa comunica nombre, subtítulo `Empresa`, icono y estado
activo. El cambio de empresa lleva a Inicio y todos los datos visibles quedan
aislados por `activeCompanyId`. El contenido principal tiene un único trigger
accesible, con nombre dinámico y el atajo `Ctrl/Cmd+B` como complemento.

## Inicio y herramientas

Inicio es un launchpad con el título `Herramientas`, la descripción de
producto, empresa activa, buscador, acceso rápido, módulos y actividad reciente
real. Las tarjetas muestran el número real de acciones registradas. La
actividad solo aparece después de visitar una acción; si no hay visitas se usa
un empty state breve.

El registro central define la relación entre operación manual y ayuda del
asistente. Una herramienta puede abrir un formulario funcional o un catálogo
preparado; nunca debe mostrar un resultado que no exista.

## Workspaces, formularios y tablas

Cada workspace muestra breadcrumb, empresa activa, título, descripción,
acciones registradas y un empty state claro. Usuarios es el primer módulo
funcional:

- formularios con labels visibles, validación junto al campo, estados
  pendiente/error/éxito y cancelación;
- tablas con búsqueda por nombre, apellidos, correo y usuario, filtros de rol y
  estado, limpieza de filtros y comportamiento usable en móvil;
- detalle limitado al workspace activo y redirección si el usuario no existe
  allí.

Los controles deben conservar foco visible, asociación `label`/campo,
`aria-invalid`, `aria-describedby`, contraste suficiente y targets táctiles.

## Chat

El Thread conserva una sola instancia de `ComposerPrimitive.Root`, un único
`Viewport` y un `ViewportFooter` integrado. El estado vacío centra el welcome
y el composer; al iniciar una conversación el footer se vuelve sticky dentro
del viewport, nunca `fixed` respecto de la ventana.

Las recomendaciones contextuales tienen dos niveles: categorías y acciones.
No hay categoría seleccionada inicialmente. Las acciones usan
`ThreadPrimitive.Suggestion` con `send={false}` para preparar texto editable,
sin ejecutar operaciones ni duplicar el estado del composer. Se ocultan cuando
el thread deja de estar vacío.

## Responsive y accesibilidad

Revisar 1440 px, 1024 px, 768 px y 390 px. Evitar overflow horizontal,
dependencia exclusiva de hover, layouts que salten al aparecer el menú y
controles interactivos anidados. Todos los icon buttons tienen nombre
accesible; los tooltips complementan, no sustituyen, las etiquetas.
