# Changelog

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
