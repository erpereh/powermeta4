# powermeta4

Interfaz local de conversación con IA para explorar ideas, redactar y avanzar
con más claridad. Esta fase mantiene un runtime determinista sin proveedor
externo y consolida la identidad visual, la navegación y la personalización de
las conversaciones.

## Inicio rápido

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
npm install
npm run dev
```

Después, abre [http://localhost:3000](http://localhost:3000).

Comandos disponibles:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Alcance actual

- `/`: chat principal con respuestas deterministas en streaming local.
- `/home`: bienvenida, resumen de actividad y acciones de inicio.
- `/inbox`: avisos locales filtrables por estado.
- Sidebar basada en `sidebar-10`, con búsqueda por título y contenido, creación
  de chats, favoritos, eliminación confirmada y navegación responsive.
- Sidebar expandida o colapsada a un rail de iconos en escritorio y Sheet en
  móvil.
- Favoritos con icono y color configurables mediante mapas tipados de Lucide.
- Estado de chats y mensajes en Zustand como única fuente de verdad.
- `chats` y `activeChatId` se conservan localmente con Zustand `persist` en la
  clave `powermeta4-chat-store`; la rehidratación usa `skipHydration` y conserva
  los datos iniciales como fallback.

El runtime utiliza `ExternalStoreRuntime` de assistant-ui para mantener el
store de Zustand como única fuente de verdad de chats y mensajes. El adaptador
local puede sustituirse posteriormente por un proveedor real sin rehacer la
composición de la interfaz.

## Arquitectura

```text
src/
├─ app/              rutas App Router y estilos globales
├─ components/       shell, branding, sidebar, chat y primitivas visuales
├─ data/              chats, inbox y opciones de modelo
├─ lib/               adaptador de streaming local
├─ stores/            store persistido de Zustand y hook de cliente
└─ types/             tipos estrictos del dominio
spec/                 tareas y changelog de la fase
```

El sistema visual usa el preset `b1temovYm` con Tailwind, shadcn/ui, Lucide y
las primitivas de assistant-ui necesarias para thread, mensajes, composer,
sugerencias y acciones.

## Fuera de alcance

No se integran proveedores de IA, autenticación, base de datos, sincronización
entre dispositivos, subida real de adjuntos ni API routes ficticias. La
persistencia disponible es únicamente local para esta interfaz y no representa
persistencia de producción.
