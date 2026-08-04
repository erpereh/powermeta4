# Changelog

## 2026-08-04 — Ajuste del selector de modelos

### Resumen

El selector de modelos de
`src/components/assistant-ui/thread.tsx` muestra únicamente el nombre del
modelo tanto en el trigger como en las opciones. El contenido se configuró
con `position="popper"`, `side="top"`, `sideOffset={4}`, `align="start"` y
`avoidCollisions={false}` para mantener la apertura hacia arriba con
cualquier modelo seleccionado. No se modificaron el runtime, Zustand, los
datos, los tipos, el componente base de select ni el lockfile.

### Verificación

- `npm run lint` — OK.
- `npm run typecheck` — OK.
- `npm test` — OK: 3 archivos y 17 pruebas.
- `npm run build` — OK: compilación y rutas `/`, `/home` y `/inbox`.
- Revisión manual en navegador — OK: primer y último modelo abren hacia
  arriba, sin descripciones visibles; selección, cierre con Escape y foco
  funcionan, y no se observaron errores o avisos de consola.

## 2026-08-04 — Restauración oficial del Thread de assistant-ui

### Resumen

Se rebasó el layout del Thread sobre la estructura oficial actual de
assistant-ui obtenida en una carpeta temporal externa. Se conservaron el
runtime externo, Zustand, la sidebar, el selector `Luma Balanced`, los
adjuntos visuales, el streaming y los helpers locales del proyecto.

### Causa y áreas afectadas

La implementación anterior mantenía el estado vacío y los mensajes con
distribución `flex-1`, y dejaba el footer sticky durante todo el ciclo del
chat. Además, las recomendaciones ERP tenían una categoría seleccionada por
defecto y escribían el texto mediante una llamada local. Ahora
`src/components/assistant-ui/thread.tsx` usa `AssistantState`, la condición
oficial de chat nuevo, un único `ThreadPrimitive.Viewport` y un
`ViewportFooter` que solo se vuelve sticky tras el primer mensaje.

`src/components/chat/erp-recommendations.tsx` conserva las categorías locales
sin selección inicial y usa `ThreadPrimitive.Suggestion` con `send={false}`
para rellenar el composer sin enviar. La documentación de `AGENTS.md`,
`DESIGN.md`, `README.md` y `spec/todo.md` refleja la base oficial y el
alcance local de las recomendaciones.

### Verificaciones

- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 17 pruebas en 3 archivos.
- `npm run build` — correcto: rutas `/`, `/home` y `/inbox`.
- `git diff --check` — correcto.
- `git status --short` — revisado; se conservan los cambios documentales y
  de Thread, sin tocar `PROMPT_INICIAL.md` ni el lockfile.

### Revisión manual

Se verificaron el estado vacío centrado, un único composer, las cinco
categorías sin selección inicial, activación y desactivación de categorías,
relleno editable con foco, ausencia de envío automático, desaparición al
escribir, transición a footer sticky tras enviar, streaming, cancelación,
restauración al crear otro chat, `/home`, `/inbox`, búsqueda, sidebar
expandida/colapsada, trigger accesible único, ausencia de rail y overflow en
1440×900, 1024×900, 768×900 y 390×844. En los cuatro viewports las acciones
ERP mantuvieron una altura mínima de 36 px y no apareció overflow horizontal.
No se observaron errores de consola ni avisos de hidratación; el viewport se
restableció a su tamaño predeterminado al terminar.

## 2026-08-04 — Tercera iteración ERP y simplificación de la sidebar

### Resumen

Se añadieron recomendaciones contextuales para preparar solicitudes de
usuarios, empresas, nóminas, informes y procesos sin ejecutar operaciones. La
sidebar colapsada dejó de mostrar controles visuales duplicados y el trigger
principal ahora comunica el estado real con un nombre accesible dinámico.

### Áreas afectadas

- Contrato de datos y pruebas en `src/data/erp-recommendations.ts` y su suite.
- Recomendaciones, composer y runtime de assistant-ui en `src/components/chat`
  y `src/components/assistant-ui`.
- Composición de la sidebar y cabecera principal en
  `src/components/sidebar/app-sidebar.tsx` y `src/components/chat/chat-screen.tsx`.
- Reglas, diseño, README y seguimiento de tareas.

### Comportamiento

Las categorías se mantienen en estado local y comienzan en `Usuarios`. Elegir
una categoría solo cambia sus acciones. Elegir una acción usa
`aui.composer.setText` y enfoca el input mediante un ref, sin enviar el texto.
Las recomendaciones dependen de que el thread no tenga mensajes, por lo que
desaparecen al iniciar una conversación y vuelven al crear un chat nuevo.

Se eliminó el `SidebarTrigger` interno de la barra colapsada y se dejó de
renderizar `SidebarRail`; se conserva el trigger de la cabecera, el atajo
`Ctrl/Cmd+B` y el Sheet móvil existente.

### Verificaciones

- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 17 pruebas en 3 archivos.
- `npm run build` — correcto: rutas `/`, `/home` y `/inbox`.
- `git diff --check` — correcto.
- `git status --short` — revisado; se conserva la eliminación pendiente de
  `PROMPT_INICIAL.md`.

### Revisión manual

Se verificaron chat nuevo, categoría inicial `Usuarios`, cambio de categoría,
relleno editable del composer, foco y posición del cursor, ausencia de envío
automático, ocultación después del primer mensaje y restauración al crear otro
chat. También se comprobaron el buscador, las rutas `/home` y `/inbox`, el
streaming y la ausencia de errores visibles de hidratación o de contexto.

Se revisaron 1440×900, 1024×900, 768×900 y 390×844 sin overflow horizontal.
En escritorio solo queda un trigger de sidebar en la cabecera, con nombre
accesible dinámico; no se renderiza `SidebarRail` ni un trigger interno. En
móvil se conserva el Sheet existente.

## 2026-08-04 — Segunda iteración visual y funcional

### Resumen

Se consolidó la identidad de powermeta4 con Inter, un logotipo geométrico y
copy de producto más limpio. Los favoritos ahora admiten icono y color
configurables, el estado se conserva localmente y la sidebar puede colapsarse a
un rail de iconos en escritorio sin perder el comportamiento Sheet en móvil.

### Áreas afectadas

- Tipografía, tokens y branding en `src/app`, `src/app/globals.css` y
  `src/components/branding`.
- Tipos, mapas Lucide, datos iniciales y store persistido en `src/types`,
  `src/lib`, `src/data` y `src/stores`.
- Menús de personalización, sidebar, buscador, páginas y copy de producto en
  `src/components`.
- Reglas generales de trabajo en `AGENTS.md`, principios visuales en
  `DESIGN.md`, README y tareas pendientes.

### Causa verificada y corrección del buscador

`cmdk` está instalado una sola vez en la versión `1.1.1`. `CommandInput`
delegaba en `CommandPrimitive.Input`, pero `CommandDialog` inyectaba los hijos
directamente en `DialogContent` sin renderizar un `CommandPrimitive` padre.
Esto dejaba el contexto externo sin `subscribe`. `CommandDialog` ahora monta
siempre `Command` con `shouldFilter={false}` y la aplicación mantiene
`filterChats` como fuente de resultados por título y contenido.

### Verificaciones

- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 13 pruebas en 2 archivos.
- `npm run build` — correcto: rutas `/`, `/home` y `/inbox`.
- `git diff --check` — correcto tras la revisión final.
- `git status --short` — revisado; se conserva la eliminación pendiente de
  `PROMPT_INICIAL.md`.

### Revisión manual

Se verificaron Inter calculada en `html`, `body` y headings; apertura, filtro,
Escape, foco, selección y reapertura del buscador; menús de icono/color con
mouse y teclado; persistencia tras recarga; navegación y filtros de inbox;
envío con streaming; y ausencia de copy de demo, estrellas decorativas y
overflow horizontal. Se revisaron 1440×900, 1024×900, 768×900 y 390×844; en
móvil la sidebar abrió como Sheet.

## 2026-08-04 — Primera fase de powermeta4

### Resumen

Se construyó la primera experiencia completa de powermeta4 como interfaz
local de chat con IA simulada. El trabajo conserva la eliminación pendiente de
`PROMPT_INICIAL.md` y no añade proveedor externo, autenticación, base de datos
ni persistencia de producción.

### Áreas afectadas

- Scaffold Next.js App Router, Tailwind, preset `b1temovYm` y configuración de
  assistant-ui.
- Sidebar `sidebar-10`, shell compartido y navegación `/`, `/home` e
  `/inbox`.
- Tipos, datos simulados y store vanilla de Zustand.
- Thread, mensajes, composer, sugerencias, acciones y runtime local con
  streaming acumulativo y cancelación.
- Pruebas Vitest, README y documentación de tareas.

### Verificaciones

- `npm run lint` — correcto.
- `npm run typecheck` — correcto.
- `npm test` — correcto: 7 pruebas en 2 archivos.
- `npm run build` — correcto: rutas estáticas `/`, `/home` y `/inbox`.
- `git diff --check` — correcto.
- `git status --short` — revisado; se conserva la eliminación pendiente de
  `PROMPT_INICIAL.md`.

### Revisión manual

En el servidor local se comprobaron las tres rutas con respuesta HTTP 200,
navegación de sidebar, envío, streaming, cancelación, menú de conversación,
movimiento entre favoritos y chats, confirmación de borrado y cierre del
diálogo. Las vistas de 390×844, 768×1024 y 1440×900 no mostraron overflow
horizontal; la navegación móvil abrió correctamente la sidebar.
