# powermeta4

Aplicación local híbrida para conversar con un asistente y organizar
herramientas operativas por workspace de empresa. El chat usa un adaptador
determinista con streaming y las acciones ERP son un catálogo local: no
conectan ni ejecutan operaciones en un ERP externo.

## Instalación

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Configura en `.env.local` las credenciales de desarrollo de `.env.example`.
La sesión se guarda en una cookie HttpOnly firmada y expira automáticamente.
Las credenciales, tokens y secretos no se almacenan en Zustand ni en el
navegador.

Comprobaciones disponibles:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Rutas

- `/login`: acceso local de desarrollo.
- `/`: entrada del chat.
- `/home`: launchpad de herramientas y actividad reciente.
- `/chat/new` y `/chat/[chatId]`: navegación profunda de conversaciones.
- `/tools`: catálogo principal.
- `/tools/users`: catálogo de acciones ERP de Usuarios.
- `/tools/companies`, `/tools/payroll`, `/tools/reports` y
  `/tools/processes`: catálogos preparados.

`/tools/users/new`, `/tools/users/search` y `/tools/users/[userId]` se conservan
solo como rutas de compatibilidad y redirigen a `/tools/users`. No existe CRUD
local de usuarios ERP. `/inbox` se eliminó sin redirección.

## Arquitectura

```text
src/
├─ app/              rutas públicas, grupo privado y Server Actions
├─ components/       shell, sidebar, chat, herramientas y UI
├─ data/             chats y modelos iniciales
├─ lib/              auth, empresas y registro único de herramientas
├─ stores/           workspaceStore persistido y hook de cliente
└─ types/            tipos estrictos de chat y workspace
spec/                 tareas y changelog
```

`src/lib/tools/registry.ts` es la única definición de módulos, acciones,
prompts, iconos, rutas y permisos. Inicio, sidebar, búsqueda, workspaces y
recomendaciones ERP consumen ese registro.

`workspaceStore` mantiene las empresas locales en `companies` y separa chats,
favoritos, modelo y actividad mediante `activeCompanyId`. Se persiste bajo
`powermeta4-workspace-store`, con migración versionada a v3 y `skipHydration`.
Crear o eliminar una empresa modifica únicamente workspaces locales; no
representa una alta o baja en un ERP externo. El store no contiene usuarios
ERP ni datos derivados de un CRUD local.

El Thread usa assistant-ui y `ExternalStoreRuntime`. El adaptador simulado
produce respuestas en español por fragmentos acumulados, respeta cancelación,
edición y streaming, y no requiere API keys. Las recomendaciones solo
rellenan texto editable en el composer con `send={false}`.

## Límites

No hay proveedor real de IA, backend, base de datos, autenticación de
producción, permisos reales, invitaciones, sincronización remota, subida real
de adjuntos ni operaciones reales de empresas, usuarios, nóminas, informes o
procesos. Las acciones muestran `Disponible próximamente` hasta una futura
integración externa.
