# powermeta4 — estado de tareas

## Iteración multiempresa, autenticación y herramientas — 2026-08-04

- [x] Añadir autenticación local server-side con cookie HttpOnly firmada,
      expiración, login, logout, proxy, `requireSession` y `.env.example`.
- [x] Añadir tema claro, oscuro y sistema con `next-themes` sin clase `dark`
      fija.
- [x] Crear `workspaceStore` persistido con `activeCompanyId`, aislamiento de
      chats/favoritos/usuarios/preferencias/actividad y `skipHydration`.
- [x] Migrar una sola vez `powermeta4-chat-store` a `company-main`, deduplicar
      chats y conservar fallback ante almacenamiento ausente o corrupto.
- [x] Crear las tres empresas locales y selector de empresa con navegación a
      Inicio y cierre del Sheet móvil.
- [x] Reemplazar la composición anterior por una sidebar híbrida inspirada en
      `sidebar-07`, sin `SidebarRail` ni trigger interno duplicado.
- [x] Eliminar `/inbox`, sus datos, tipos, componentes y referencias activas.
- [x] Crear el launchpad de Herramientas con búsqueda, acceso rápido, módulos,
      actividad real y empty state.
- [x] Centralizar cinco módulos y veinte acciones con prompts exactos, iconos,
      rutas, implementación y permisos tipados.
- [x] Conectar el registro con sidebar, Inicio, workspaces y recomendaciones
      contextuales del chat.
- [x] Crear catálogos para Empresas, Nóminas, Informes y Procesos.
- [x] Implementar Usuarios: creación validada, consulta con filtros y detalle
      limitado a la empresa activa.
- [x] Mantener el runtime externo, streaming, cancelación, edición, adjuntos,
      selector de modelo y preferencias por workspace.
- [x] Añadir `/chat/new` y `/chat/[chatId]`, validando chats del workspace
      activo.
- [x] Añadir pruebas para aislamiento, migración, persistencia, registro,
      búsqueda de herramientas, validación de usuarios y tokens.

## Pendientes reales

- [ ] Sustituir el adaptador simulado por AI SDK y un proveedor real.
- [ ] Añadir backend, persistencia remota y autenticación de producción.
- [ ] Incorporar permisos reales, invitaciones y administración completa de
      empresas y usuarios.
- [ ] Implementar operaciones reales de nóminas, informes y procesos.
- [ ] Añadir subida real de adjuntos y pruebas E2E en un entorno desplegado.
