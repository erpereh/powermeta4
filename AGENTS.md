# AGENTS.md — powermeta4

## 1. Propósito del proyecto

`powermeta4` es una aplicación web centrada en una interfaz de chat con IA. La experiencia principal debe recordar a productos como Arena: navegación lateral persistente, conversaciones accesibles y una zona de chat limpia, amplia y prioritaria.

La fase actual es exclusivamente de interfaz y experiencia de usuario. Todo debe funcionar con datos de prueba y un runtime simulado. No se debe integrar todavía una API real de IA, autenticación, base de datos ni servicios externos.

## 2. Fuentes de verdad y orden de lectura

Antes de modificar cualquier archivo, leer completamente y en este orden:

1. `AGENTS.md`
2. `DESIGN.md`
3. `spec/todo.md`
4. `spec/changelog.md`
5. `README.md`
6. `package.json`
7. `components.json`
8. Los archivos directamente relacionados con la tarea

Para trabajos relacionados con assistant-ui, consultar primero la documentación oficial actual:

- `https://assistant-ui.com/llms-full.txt`
- Añadir `.md` a las páginas concretas de documentación cuando se necesite el Markdown canónico.

No basarse en APIs recordadas si la documentación instalada o actual dice otra cosa.

## 3. Reglas obligatorias de trabajo

### Antes de programar

- Inspeccionar la estructura completa del repositorio.
- Confirmar si ya existe una implementación equivalente antes de crear un componente nuevo.
- Revisar el estado de Git con `git status --short`.
- No crear, cambiar ni borrar ramas salvo petición expresa.
- No sobrescribir cambios del usuario.
- Identificar claramente qué elementos pertenecen a shadcn/ui y cuáles a assistant-ui.

### Durante la implementación

- Trabajar en cambios pequeños, coherentes y fáciles de revisar.
- Mantener TypeScript en modo estricto.
- No usar `any` salvo caso excepcional documentado.
- Priorizar componentes de servidor; usar `"use client"` solo donde haya estado, eventos, hooks o APIs del navegador.
- Evitar duplicar estado o mantener dos fuentes de verdad para la conversación activa, favoritos o chats.
- Mantener la tipografía visible en una única familia definida por el sistema visual; los pesos y tamaños crean jerarquía, no nuevas familias.
- Mantener el copy de producto natural y separado de los detalles internos del runtime, persistencia o datos de desarrollo.
- Guardar preferencias configurables como identificadores serializables y resolver iconos, colores y estilos mediante mapas controlados.
- Mantener una única fuente de verdad tipada para recomendaciones contextuales, evitando duplicar categorías, acciones o prompts en componentes.
- Las recomendaciones para operaciones potencialmente reales solo pueden preparar texto editable; nunca deben enviar ni ejecutar una operación automáticamente.
- No duplicar controles visuales para una misma acción y no dejar rails o zonas invisibles clicables como mecanismos alternativos.
- No introducir dependencias sin una necesidad concreta.
- No hacer refactors ajenos a la tarea.
- No ocultar errores con `eslint-disable`, casts innecesarios o bloques `try/catch` vacíos.

### Al terminar cada tarea

1. Actualizar `spec/todo.md`:
   - Marcar lo completado.
   - Añadir trabajo pendiente descubierto.
   - Mantener tareas concretas y verificables.
2. Actualizar `spec/changelog.md`:
   - Fecha.
   - Resumen breve de cambios.
   - Archivos o áreas afectadas.
   - Verificaciones ejecutadas.
3. Ejecutar las comprobaciones disponibles:
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`, si existe
   - `npm run build`
4. Revisar `git diff --check` y `git status --short`.
5. Informar de errores exactos sin entrar en bucles de intentos repetidos.

Una tarea no está terminada si no se han actualizado `todo.md` y `changelog.md`.

## 4. Stack obligatorio para esta fase

- Next.js con App Router.
- React y TypeScript estricto.
- Tailwind CSS.
- shadcn/ui con el preset obligatorio `b1temovYm`.
- Bloque base de sidebar: `sidebar-10`.
- assistant-ui para la zona de conversación.
- Lucide React para iconos.
- Zustand únicamente para el estado global de interfaz que realmente lo necesite.
- `npm` como gestor de paquetes.
- `package-lock.json` como único lockfile del repositorio.
- No usar `pnpm`, Yarn ni Bun, ni generar `pnpm-lock.yaml`, `yarn.lock` o `bun.lock`.

No sustituir estas decisiones por otra librería visual o framework sin autorización.

## 5. Reglas de shadcn/ui

El preset `b1temovYm` es la fuente de verdad del sistema visual.

- No reemplazar sus variables CSS por colores hardcodeados.
- Usar componentes existentes de shadcn/ui antes de construir alternativas manuales.
- Instalar componentes mediante CLI, por ejemplo:

```bash
npx shadcn@latest add <componente> --yes
```

- La sidebar debe partir de:

```bash
npx shadcn@latest add sidebar-10 --yes
```

- Se puede adaptar la composición del bloque, pero no rehacer desde cero una sidebar que ya proporciona shadcn.
- Conservar accesibilidad, navegación por teclado, estados de foco y comportamiento responsive del componente original.
- No editar componentes base de `components/ui` para resolver un caso de una sola pantalla si puede resolverse mediante composición y clases desde un componente de aplicación.

## 6. Reglas de assistant-ui

assistant-ui se utilizará para la experiencia de chat, no para una segunda sidebar.

- No renderizar `threadlist-sidebar` ni una lista de chats paralela dentro del panel principal.
- La lista de conversaciones vive exclusivamente en la sidebar basada en `sidebar-10`.
- Reutilizar `Thread`, primitivas y componentes de assistant-ui para mensajes, composer, acciones y streaming.
- Configurar en `components.json` el registro sensible al estilo cuando sea necesario:

```json
{
  "registries": {
    "@assistant-ui": "https://r.assistant-ui.com/styles/{style}/{name}.json"
  }
}
```

- En esta fase usar un runtime local o adaptador simulado que produzca respuestas de prueba con streaming visible.
- No exigir claves en `.env.local` para ejecutar la interfaz inicial.
- Dejar la arquitectura preparada para cambiar posteriormente a AI SDK y un proveedor real sin rehacer la UI.

## 7. Alcance funcional de la primera fase

### Ruta principal: chat

La ruta `/` es la experiencia principal y debe abrir directamente el chat.

Debe incluir:

- Sidebar persistente.
- Cabecera discreta del chat activo.
- Estado vacío cuidado con el texto `¿En qué puedo ayudarte?`.
- Composer amplio con placeholder `Escribe un mensaje...`.
- Botón para adjuntar como elemento visual de prueba.
- Selector de modelo con opciones simuladas.
- Botón de envío.
- Sugerencias rápidas de prueba.
- Mensajes de usuario y asistente con estados de carga y streaming simulado.

### Sidebar

La sidebar debe conservar el patrón estructural de `sidebar-10` y adaptarse así:

1. Cabecera de producto: `powermeta4`.
2. Acciones principales:
   - Buscar.
   - Nuevo chat, sustituyendo a `Ask AI`.
   - Inicio.
   - Bandeja de entrada.
3. Grupo `Favoritos`:
   - Solo conversaciones marcadas como favoritas.
4. Grupo `Chats`:
   - Conversaciones que no están en favoritos.
   - Sustituye al bloque `Workspaces` del ejemplo original.
5. Pie de usuario con datos simulados.

Cada conversación tendrá un menú de tres puntos con solo estas acciones:

- `Añadir a favoritos` o `Quitar de favoritos`, según el estado actual.
- `Eliminar`.

No incluir:

- `Copy Link`.
- `Open in New Tab`.
- Acciones de compartir enlaces.

Al cambiar el estado favorito, el chat debe moverse inmediatamente entre `Favoritos` y `Chats`. Al eliminar, mostrar confirmación mediante `AlertDialog` y seleccionar otra conversación o crear una nueva si era la activa.

### Rutas secundarias

- `/home`: página independiente con contenido de prueba y una presentación visual coherente.
- `/inbox`: página independiente con mensajes o notificaciones simuladas.

No convertir estas rutas en simples textos sin diseño. Deben demostrar el sistema visual, aunque su funcionalidad sea ficticia.

## 8. Datos y estado de prueba

- Centralizar datos simulados en archivos claramente identificados, por ejemplo `src/data/mock-chats.ts`.
- Definir tipos para `Chat`, `Message`, `InboxItem` y `ModelOption`.
- El estado global puede contener:
  - conversación activa;
  - conversaciones;
  - favoritos;
  - creación y eliminación;
  - búsqueda;
  - sidebar abierta o colapsada cuando sea necesario.
- Zustand con `persist` puede usarse para conservar preferencias o estado de interfaz en `localStorage`, con hidratación compatible con SSR y sin presentarlo como persistencia de producción.
- La persistencia local debe reutilizar el store existente, guardar únicamente datos serializables y mantener una ruta de fallback válida si el almacenamiento no está disponible.
- No crear API routes falsas si el comportamiento puede resolverse localmente.

## 9. Arquitectura recomendada

```text
src/
├─ app/
│  ├─ page.tsx
│  ├─ home/page.tsx
│  ├─ inbox/page.tsx
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ app-shell/
│  ├─ chat/
│  ├─ sidebar/
│  ├─ assistant-ui/
│  └─ ui/
├─ data/
├─ hooks/
├─ lib/
├─ stores/
└─ types/
spec/
├─ changelog.md
└─ todo.md
AGENTS.md
DESIGN.md
```

La estructura puede ajustarse si el scaffold oficial usa otra convención, pero debe mantenerse una separación clara entre componentes base, componentes de producto, datos simulados y estado.

## 10. Diseño y experiencia

Todas las decisiones visuales deben respetar `DESIGN.md`.

Principios obligatorios:

- Interfaz oscura, profesional y sobria.
- El chat es el foco principal.
- Jerarquía visual clara y poco ruido.
- Bordes sutiles, superficies neutras y contraste accesible.
- Nada de gradientes decorativos innecesarios.
- Nada de efectos glass intensos.
- Animaciones cortas y funcionales.
- Ningún componente debe parecer de una librería distinta al resto.
- La aplicación debe ser usable en escritorio, tablet y móvil.

## 11. Criterios de calidad y aceptación

La primera fase se considera completada cuando:

- El proyecto arranca con `npm run dev` sin depender de una API key.
- `/` abre directamente el chat.
- La sidebar procede de `sidebar-10` y mantiene su comportamiento responsive.
- `Nuevo chat`, `Inicio` y `Bandeja de entrada` navegan o actúan correctamente.
- Favoritos y chats normales se muestran en grupos separados.
- El menú de conversación no contiene `Copy Link` ni `Open in New Tab`.
- Favoritar, desfavoritar y eliminar funcionan con estado local.
- El panel principal no contiene una segunda lista de chats.
- El chat simulado permite enviar y recibe una respuesta en streaming.
- `/home` y `/inbox` existen y mantienen el mismo diseño.
- No hay errores TypeScript, lint ni build.
- `spec/todo.md` y `spec/changelog.md` reflejan el trabajo realizado.

## 12. Prohibiciones explícitas

- No integrar todavía OpenAI, Anthropic, Google, xAI ni otro proveedor real.
- No añadir autenticación.
- No añadir base de datos.
- No añadir Prisma, Drizzle, Supabase o Firebase en esta fase.
- No instalar otra biblioteca de componentes visuales.
- No usar Material UI, Ant Design, Chakra UI, Mantine ni similares.
- No duplicar la lista de conversaciones de la sidebar dentro de assistant-ui.
- No usar colores hexadecimales arbitrarios en componentes.
- No borrar ni ignorar `AGENTS.md`, `DESIGN.md`, `spec/todo.md` o `spec/changelog.md`.
- No declarar la tarea terminada sin ejecutar verificaciones.
