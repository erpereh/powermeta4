# Prompt inicial para construir powermeta4

Quiero que construyas la primera fase del proyecto `powermeta4`: una interfaz web de chat con IA, moderna, oscura y profesional, inspirada en la estructura de Arena, pero con identidad propia.

## Contexto actual

El repositorio ya existe y contiene al menos:

- `AGENTS.md`
- `DESIGN.md`
- `README.md`
- `spec/todo.md`
- `spec/changelog.md`

Puede no existir todavía `package.json`. No crees una carpeta anidada `powermeta4/powermeta4` y no sobrescribas los documentos existentes. Si el scaffold oficial necesita una carpeta vacía, créalo temporalmente y fusiona sus archivos en la raíz actual, conservando los documentos del repositorio.

## Paso 1 — Lectura e inspección obligatoria

Antes de cambiar nada:

1. Ejecuta `git status --short` y revisa la estructura completa.
2. Lee íntegramente:
   - `AGENTS.md`
   - `DESIGN.md`
   - `spec/todo.md`
   - `spec/changelog.md`
   - `README.md`
3. Lee la documentación actual completa de assistant-ui:
   - `https://assistant-ui.com/llms-full.txt`
4. Para páginas concretas de assistant-ui, usa la versión Markdown añadiendo `.md` a la URL.
5. Inspecciona el preset de shadcn con:

```bash
npx shadcn@latest preset decode b1temovYm
```

6. No preguntes por proveedor de IA en esta fase: el proyecto es nuevo, la interfaz funcionará con un runtime local y datos simulados. No se utilizará una API key.

## Paso 2 — Scaffold y dependencias

Usa `npm`.

Reglas del gestor de paquetes:

- Usa `package-lock.json` como único lockfile.
- No uses `pnpm`, Yarn ni Bun.
- No generes `pnpm-lock.yaml`, `yarn.lock` ni `bun.lock`.
- Para instalar dependencias usa `npm install` y para ejecutar binarios puntuales usa `npx`.

La base técnica debe ser:

- Next.js App Router.
- React.
- TypeScript estricto.
- Tailwind CSS.
- shadcn/ui con preset obligatorio `b1temovYm`.
- assistant-ui.
- Lucide React.
- Zustand solo para estado global de interfaz.

Parte de un scaffold oficial de assistant-ui para un proyecto nuevo. Usa el template mínimo para evitar una UI que luego haya que desmontar:

```bash
npx assistant-ui@latest create <directorio-temporal> -t minimal --use-npm
```

Después integra el scaffold en la raíz actual sin sobrescribir `AGENTS.md`, `DESIGN.md` ni `spec/` y elimina el directorio temporal.

Aplica el preset obligatorio al proyecto:

```bash
npx shadcn@latest apply --preset b1temovYm --yes
```

Instala la sidebar solicitada:

```bash
npx shadcn@latest add sidebar-10 --yes
```

Asegúrate de que `components.json` conserva el estilo generado por el preset e incluye el registro de assistant-ui sensible al estilo:

```json
{
  "registries": {
    "@assistant-ui": "https://r.assistant-ui.com/styles/{style}/{name}.json"
  }
}
```

Añade únicamente los componentes de assistant-ui que necesites para el thread, mensajes, composer y acciones. No instales ni renderices `threadlist-sidebar`, porque los chats vivirán en la sidebar de shadcn.

No uses `--force` ni `--overwrite` sin inspeccionar antes el diff y justificarlo.

## Paso 3 — Objetivo visual

La aplicación debe seguir estrictamente `DESIGN.md` y el preset `b1temovYm`.

Dirección visual:

- dark-first;
- profesional y sobria;
- fondos neutros y bordes sutiles;
- jerarquía clara;
- sin gradientes decorativos;
- sin glassmorphism intenso;
- animaciones cortas y funcionales;
- responsive en escritorio, tablet y móvil.

No clones literalmente Arena. Usa su idea de navegación lateral y zona central despejada.

## Paso 4 — App shell y rutas

Crea un layout compartido con la sidebar de shadcn y un panel principal.

Rutas:

- `/`: chat, ruta principal y pantalla mostrada al entrar.
- `/home`: sección separada con contenido de prueba cuidado.
- `/inbox`: sección separada con contenido de prueba cuidado.

La sidebar debe permanecer disponible en las tres rutas.

## Paso 5 — Sidebar

Usa `sidebar-10` como base real, no como simple referencia visual.

Adáptala con esta estructura:

1. Cabecera con el nombre `powermeta4`.
2. Navegación:
   - `Buscar`.
   - `Nuevo chat`, sustituyendo a `Ask AI`.
   - `Inicio`.
   - `Bandeja de entrada`.
3. Sección `Favoritos`:
   - muestra exclusivamente chats favoritos.
4. Sección `Chats`:
   - sustituye a `Workspaces`;
   - muestra los chats que no son favoritos.
5. Footer con un usuario simulado.

Los títulos deben truncarse con elipsis y la conversación activa debe verse seleccionada.

### Menú de tres puntos

Cada conversación debe tener un menú con solo:

- `Añadir a favoritos` o `Quitar de favoritos`.
- `Eliminar`.

Elimina por completo:

- `Copy Link`.
- `Open in New Tab`.

Al favoritar o desfavoritar, mueve inmediatamente el chat entre `Favoritos` y `Chats` sin recargar. Al eliminar, usa `AlertDialog`. Si se elimina el chat activo, selecciona el siguiente disponible o crea uno nuevo.

### Buscar

Implementa una búsqueda local de chats mediante `Command`, `Dialog` o el patrón más coherente del preset. Debe filtrar datos simulados y permitir activar una conversación.

### Nuevo chat

Debe crear una conversación local nueva, seleccionarla y abrir el estado vacío del chat.

## Paso 6 — Chat principal con assistant-ui

La zona principal no debe incluir otra lista de conversaciones.

Usa assistant-ui para:

- thread;
- mensajes;
- composer;
- acciones;
- estados de ejecución;
- streaming visible.

Para esta fase usa `useLocalRuntime` o la alternativa local actual recomendada por la documentación con un `ChatModelAdapter` simulado. La respuesta debe aparecer progresivamente para demostrar streaming, pero no debe llamar a ningún proveedor externo.

### Estado vacío

Muestra:

- título: `¿En qué puedo ayudarte?`;
- composer amplio;
- placeholder: `Escribe un mensaje...`;
- selector de modelo con opciones de prueba;
- acción visual para adjuntar;
- botón de envío;
- sugerencias rápidas en español, por ejemplo:
  - `Programar`;
  - `Redactar`;
  - `Analizar`;
  - `Idear`.

### Conversación

- El usuario puede enviar un mensaje.
- Se añade al hilo activo.
- El asistente devuelve una respuesta simulada con streaming.
- Incluye estados disabled y loading.
- Enter envía y Shift+Enter añade una línea.
- Mantén la columna de contenido centrada y legible.

## Paso 7 — Datos simulados y estado

Crea tipos estrictos y datos de prueba centralizados.

Incluye al menos:

- 4 chats favoritos.
- 8 chats no favoritos.
- varios chats con mensajes previos.
- uno o dos elementos de inbox sin leer.
- varias opciones de modelo simuladas.

Puedes usar Zustand con `persist` para:

- chats;
- chat activo;
- favoritos;
- eliminación;
- búsqueda;
- metadatos de cada conversación.

No presentes `localStorage` como persistencia de producción. No crees base de datos, auth ni API real.

Evita mantener la misma información en Zustand y en otro store independiente. Define claramente qué estado pertenece a assistant-ui y qué metadatos pertenecen al store de la aplicación.

## Paso 8 — Home e Inbox

### `/home`

Diseña una vista útil con datos simulados:

- bienvenida;
- accesos rápidos;
- conversaciones recientes;
- actividad o métricas sencillas.

No conviertas la página en un dashboard lleno de gráficas sin propósito.

### `/inbox`

Diseña una lista de notificaciones o tareas simuladas con:

- leído/no leído;
- fecha o tiempo relativo;
- filtro sencillo;
- empty state.

Ambas páginas deben compartir exactamente los mismos tokens, tipografía, radios, densidad y estados que el chat.

## Paso 9 — Arquitectura

Mantén una separación parecida a esta:

```text
src/
├─ app/
├─ components/app-shell/
├─ components/chat/
├─ components/sidebar/
├─ components/assistant-ui/
├─ components/ui/
├─ data/
├─ lib/
├─ stores/
└─ types/
```

No dupliques componentes base de shadcn. Prefiere composición.

## Paso 10 — Documentación obligatoria

Durante y después del trabajo:

- Actualiza `spec/todo.md` con tareas completadas y pendientes reales.
- Actualiza `spec/changelog.md` con fecha, cambios y verificaciones.
- Actualiza `README.md` con:
  - requisitos;
  - instalación;
  - comandos;
  - arquitectura breve;
  - aclaración de que el runtime es simulado.

No borres el contenido útil existente de estos documentos.

## Paso 11 — Verificación

Ejecuta y corrige:

```bash
npm run lint
npm run typecheck
npm test
npm run build
git diff --check
git status --short
```

Si `test` todavía no existe, añade como mínimo pruebas de los comportamientos críticos o documenta claramente por qué no se creó el script en esta fase. Prioriza pruebas de:

- mover un chat a favoritos;
- quitarlo de favoritos;
- eliminarlo;
- crear un nuevo chat;
- filtrarlo mediante búsqueda.

Arranca el servidor y verifica manualmente:

- `/`;
- `/home`;
- `/inbox`;
- desktop y móvil;
- envío de mensaje;
- streaming simulado;
- sidebar colapsable;
- menús y dialogs mediante teclado.

## Criterios de aceptación

No des la tarea por terminada hasta que se cumpla todo:

- La raíz no contiene una carpeta anidada accidental del proyecto.
- Se usa el preset `b1temovYm`.
- La sidebar parte de `sidebar-10`.
- La pantalla inicial es el chat.
- No hay una segunda lista de chats en el panel principal.
- `Ask AI` se ha sustituido por `Nuevo chat`.
- Existen `Inicio` y `Bandeja de entrada` como rutas independientes.
- Favoritos aparecen arriba y el resto bajo `Chats`.
- El menú solo contiene favorito/desfavorito y eliminar.
- No aparecen `Copy Link` ni `Open in New Tab`.
- Todo funciona con datos de prueba y sin `.env.local`.
- El chat responde mediante streaming simulado.
- La interfaz es responsive y accesible.
- TypeScript, lint y build pasan.
- `todo.md`, `changelog.md` y `README.md` están actualizados.

Al finalizar, resume:

1. qué has implementado;
2. estructura creada;
3. decisiones técnicas principales;
4. verificaciones ejecutadas y resultado;
5. trabajo pendiente real.
