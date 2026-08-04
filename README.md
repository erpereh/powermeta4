# powermeta4

Aplicación local híbrida para conversar con un asistente y gestionar
operaciones por empresa. El chat usa un adaptador determinista con streaming;
las herramientas y la autenticación son de desarrollo y no conectan con un ERP
real.

## Instalación

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Configura en `.env.local` las credenciales de desarrollo de
`.env.example`. La sesión se guarda en una cookie HttpOnly firmada y expira
automáticamente. Las credenciales no se almacenan en Zustand ni en el
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
- `/tools`: entrada del catálogo, que lleva a Inicio.
- `/tools/users`, `/tools/users/new`, `/tools/users/search` y
  `/tools/users/[userId]`: workspace funcional de Usuarios.
- `/tools/companies`, `/tools/payroll`, `/tools/reports` y
  `/tools/processes`: catálogos preparados.

`/inbox` se eliminó en esta fase.

## Arquitectura

```text
src/
├─ app/              rutas públicas, grupo privado y Server Actions
├─ components/       shell, sidebar, chat, herramientas y UI
├─ data/             chats y modelos iniciales
├─ lib/              auth, empresas, registro de herramientas y validación
├─ stores/           workspaceStore persistido y hook de cliente
└─ types/            tipos estrictos de chat y workspace
spec/                 tareas y changelog
```

`src/lib/tools/registry.ts` es la única definición de módulos, acciones,
prompts, iconos, rutas y permisos. Inicio, sidebar, workspaces y
recomendaciones ERP consumen ese registro.

`workspaceStore` indexa chats, favoritos, usuarios, preferencias de modelo y
actividad mediante `activeCompanyId`. Se persiste localmente con Zustand bajo
`powermeta4-workspace-store`, usando `skipHydration`. La primera rehidratación
migra una sola vez el antiguo `powermeta4-chat-store` a `company-main` y deja
vacías las demás empresas. Esta persistencia es solo de interfaz local, no de
producción.

El Thread usa assistant-ui y `ExternalStoreRuntime`; el adaptador simulado
produce respuestas en español por fragmentos acumulados, respeta cancelación,
edición y streaming, y no requiere API keys.

## Límites

No hay proveedor real de IA, backend, base de datos, autenticación de
producción, permisos reales, invitaciones, sincronización remota, subida real
de adjuntos ni operaciones reales de empresas, nóminas, informes o procesos.
