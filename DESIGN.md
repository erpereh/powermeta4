# DESIGN.md — Sistema visual de powermeta4

## 1. Dirección visual

`powermeta4` debe sentirse como una herramienta de IA profesional, moderna y centrada en productividad. La referencia conceptual es una mezcla de:

- La estructura de navegación de `sidebar-10` de shadcn/ui.
- La claridad y protagonismo del chat de Arena.
- La composición funcional de assistant-ui.

No se debe clonar literalmente ninguna marca. Se toman patrones de jerarquía, densidad y usabilidad, manteniendo identidad propia.

Palabras clave:

- oscura;
- sobria;
- precisa;
- técnica;
- limpia;
- rápida;
- consistente.

La identidad de powermeta4 utiliza un símbolo geométrico propio, compacto y
legible en tamaños pequeños. El símbolo puede acompañar al wordmark en
contextos amplios y funcionar solo en navegación compacta. Las formas de
marca deben basarse en geometría simple y tokens del tema, sin depender de
estrellas, sparkles o adornos decorativos.

## 2. Fuente de verdad visual

El preset obligatorio de shadcn/ui es:

```text
b1temovYm
```

El preset gobierna:

- paleta;
- tipografía;
- radio;
- iconos;
- primitivas base;
- variables CSS de tema.

No sustituir sus tokens con valores arbitrarios. Usar clases semánticas:

- `bg-background`
- `bg-card`
- `bg-muted`
- `bg-sidebar`
- `text-foreground`
- `text-muted-foreground`
- `border-border`
- `ring-ring`
- `bg-primary`
- `text-primary-foreground`
- `destructive`

Los colores directos como `#111111`, `rgb(...)` o clases de color específicas solo se permiten si el preset no ofrece un token semántico equivalente y se documenta el motivo.

## 3. Tema

### Tema inicial

- Dark mode como apariencia inicial.
- Preparar los componentes para light mode sin diseñar una interfaz diferente.
- Evitar negro puro en todas las capas; la profundidad debe venir de los tokens de superficie del preset.

### Capas de superficie

1. Fondo global.
2. Sidebar.
3. Panel principal.
4. Tarjetas, menús y composer.
5. Estados hover, activos y seleccionados.

La separación entre capas debe lograrse principalmente con contraste sutil y bordes, no con sombras intensas.

## 4. Layout general

### Escritorio

- Altura completa: `min-h-svh` o `h-dvh` donde corresponda.
- Sidebar fija a la izquierda mediante `SidebarProvider`.
- Sidebar expandida en torno a 272–288 px, respetando las variables del componente.
- Sidebar colapsada en modo iconos cuando lo soporte el bloque.
- Panel principal ocupa el espacio restante.
- No envolver toda la aplicación en una tarjeta exterior decorativa.
- El chat debe respirar y sentirse más amplio que la navegación.

### Móvil y tablet

- La sidebar pasa a drawer/sheet usando el comportamiento nativo de shadcn.
- El trigger debe ser visible y accesible.
- El composer conserva una anchura cómoda y respeta safe areas.
- Ningún control crítico depende exclusivamente de hover.
- Evitar scroll horizontal.

## 5. Sidebar

La sidebar es el centro de navegación y gestión de conversaciones.

### Estructura

```text
Producto
Buscar
Nuevo chat
Inicio
Bandeja de entrada

Favoritos
- chats favoritos

Chats
- chats no favoritos

Usuario
```

### Medidas y densidad

- Altura objetivo de filas: 36–40 px.
- Iconos principales: 16 px.
- Avatares: 28–32 px.
- Separación vertical entre grupos: 12–16 px.
- Etiquetas de grupo: 12 px, color `text-muted-foreground`.
- Títulos de conversación: una sola línea con elipsis.
- Menú de tres puntos visible al hover, foco o cuando la fila está activa; siempre accesible por teclado.

### Estados

- Activo: superficie seleccionada clara pero discreta.
- Hover: cambio corto de superficie, sin desplazamientos.
- Favorito: se organiza por grupo; no necesita una estrella permanente si añade ruido.
- Eliminación: siempre mediante confirmación.

En escritorio la sidebar usa el estado expandido o la variante compacta de
iconos del componente oficial. En móvil conserva el comportamiento de panel
deslizante. La navegación compacta muestra solo acciones, marca y acceso de
usuario; los nombres y listas de conversaciones permanecen ocultos.

### Menú de conversación

Orden obligatorio:

1. `Añadir a favoritos` o `Quitar de favoritos`.
2. Separador si mejora la lectura.
3. `Eliminar` con variante destructiva.

No mostrar `Copy Link` ni `Open in New Tab`.

## 6. Zona principal de chat

### Cabecera

- Altura aproximada: 52–56 px.
- Borde inferior sutil.
- A la izquierda: trigger de sidebar cuando sea necesario y título de conversación.
- Puede incluir selector de modo o modelo simulado, pero sin competir con el contenido.
- Evitar barras superiores excesivamente altas.

### Estado vacío

- Centrado ópticamente, no necesariamente en el centro matemático.
- Anchura máxima del bloque: 760–880 px.
- Título principal: `¿En qué puedo ayudarte?`.
- Tamaño orientativo: 30–40 px en escritorio y 26–32 px en móvil.
- Peso semibold o el indicado por el preset.
- Texto secundario opcional, breve y silencioso.
- Sugerencias rápidas debajo del composer, no más de cinco visibles inicialmente.

### Conversación activa

- Columna de mensajes con anchura máxima de 800–900 px.
- Centrada dentro del panel.
- Separación vertical generosa entre turnos: 24–32 px.
- Mensaje de usuario visualmente distinguible sin usar una burbuja exagerada.
- Mensaje del asistente puede usar disposición editorial abierta.
- Código, tablas, citas, herramientas y adjuntos deben respetar el mismo ancho y tokens.

### Composer

- Anchura máxima: 840–920 px.
- Altura mínima: 96–112 px en estado vacío; compacta al entrar en conversación si la implementación lo requiere.
- Superficie de tarjeta con borde sutil.
- Radio procedente del preset.
- Textarea sin borde interior redundante.
- Fila inferior con:
  - adjuntar;
  - selector de modelo;
  - acciones opcionales;
  - enviar.
- El botón de envío debe tener estados disabled, hover, focus y loading.
- Enter envía; Shift+Enter crea salto de línea.

## 7. Tipografía

La familia tipográfica visible es Inter en toda la aplicación. El preset
continúa definiendo los tokens, pesos disponibles y escala, pero no se
introduce una familia diferente para títulos, navegación, diálogos o tarjetas.

Escala recomendada:

- Título de estado vacío: 30–40 px.
- Título de página: 24–30 px.
- Título de sección: 16–18 px.
- Texto principal: 14–16 px.
- Navegación: 14 px.
- Etiqueta y metadatos: 12–13 px.
- Código: mantiene Inter en esta fase para que la interfaz no mezcle familias.

Reglas:

- No usar más de tres pesos en una misma pantalla.
- No abusar de mayúsculas.
- Mantener altura de línea cómoda en respuestas largas.
- Los textos truncados deben conservar `title`, tooltip o una alternativa accesible cuando sea importante leerlos completos.

## 8. Espaciado

Usar una cuadrícula base de 4 px.

Valores preferidos:

- 4 px: microseparaciones.
- 8 px: controles relacionados.
- 12 px: contenido interno compacto.
- 16 px: padding estándar.
- 24 px: separación entre bloques.
- 32 px: secciones principales.
- 48–64 px: respiración de estados vacíos.

Evitar valores aislados como 13 px, 19 px o 27 px salvo una necesidad del componente original.

## 9. Bordes, radios y sombras

- Radio: usar el valor del preset y sus utilidades derivadas.
- Bordes: 1 px con `border-border`.
- Sombras: muy sutiles y reservadas para menús flotantes, dialogs y composer si mejora su separación.
- No usar glow, neon ni sombras de gran extensión.
- No apilar borde, sombra y fondo contrastado cuando uno o dos recursos sean suficientes.

## 10. Iconografía

- Usar la librería definida por el preset; cuando corresponda, Lucide React.
- Tamaño estándar: 16 px.
- Tamaño pequeño: 14 px.
- Tamaño destacado: 18–20 px.
- Stroke coherente.
- Los iconos no sustituyen etiquetas cuando la acción no es evidente.
- Todo icon button debe incluir nombre accesible y tooltip cuando sea necesario.
- Los iconos decorativos no deben competir con el contenido ni representar una
  página, tarjeta o marca sin una función clara.
- Las personalizaciones de entidades usan mapas controlados de iconos y
  colores; el color nunca es la única señal de estado.

## 11. Movimiento

- Duración habitual: 120–200 ms.
- Easing suave y estándar.
- Animar opacidad, color y pequeñas transformaciones.
- No animar grandes desplazamientos innecesarios.
- Respetar `prefers-reduced-motion`.

Movimientos permitidos:

- apertura/cierre de sidebar;
- aparición de menús;
- cambio de estado favorito;
- streaming y cursor de respuesta;
- skeletons;
- feedback de envío.

## 12. Home

La página `/home` debe demostrar el sistema sin inventar un dashboard complejo.

Composición recomendada:

- título y descripción;
- bloque de bienvenida;
- accesos rápidos;
- conversaciones recientes;
- actividad o estadísticas simuladas sencillas.

Usar tarjetas sobrias. No llenar la página de gráficos sin propósito.

## 13. Inbox

La página `/inbox` debe presentar elementos de actividad simulada:

- título y contador;
- filtros sencillos;
- lista de notificaciones o tareas;
- estados leído/no leído;
- empty state cuidado.

Las filas deben compartir lenguaje visual con los chats de la sidebar.

## 14. Componentes y consistencia

Antes de crear un componente:

1. Revisar si existe en shadcn/ui.
2. Revisar si existe en assistant-ui.
3. Componer los existentes.
4. Crear uno propio solo si representa una pieza de producto específica.

Ejemplos de componentes de producto válidos:

- `AppSidebar`.
- `ChatSidebarItem`.
- `ChatHeader`.
- `ChatEmptyState`.
- `QuickPromptSuggestions`.
- `HomeOverview`.
- `InboxList`.

No crear clones locales de `Button`, `DropdownMenu`, `AlertDialog`, `Tooltip`, `ScrollArea`, `Sidebar` o `Textarea`.

## 15. Accesibilidad

- Contraste WCAG AA como mínimo.
- Navegación completa por teclado.
- Foco visible.
- `aria-label` en icon buttons.
- Roles y estados correctos en menús y dialogs.
- El trigger del menú de conversaciones debe poder alcanzarse sin hover.
- Los cambios importantes, como eliminación o error de envío, deben comunicarse de forma perceptible.
- No depender solo del color para expresar estado.

## 16. Antipatrones visuales

Evitar:

- exceso de tarjetas dentro de tarjetas;
- gradientes decorativos;
- glassmorphism fuerte;
- bordes brillantes;
- radios distintos sin sistema;
- iconos de varias familias;
- tipografías distintas por sección;
- sombras fuertes permanentes;
- textos grises con contraste insuficiente;
- sidebar y chat con dos estilos visuales diferentes;
- contenido principal pegado a los bordes;
- animaciones continuas sin función.

## 17. Checklist visual

Antes de cerrar una tarea de UI, comprobar:

- ¿Usa tokens del preset?
- ¿Se entiende cuál es la acción principal?
- ¿La sidebar mantiene densidad y jerarquía?
- ¿El chat sigue siendo el foco?
- ¿Los estados hover, active, focus, disabled y loading existen?
- ¿Funciona a 1440 px, 1024 px, 768 px y 390 px?
- ¿No hay overflow horizontal?
- ¿Los menús no contienen acciones prohibidas?
- ¿La interfaz parece un único producto?
