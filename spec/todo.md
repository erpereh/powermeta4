# powermeta4 — estado de tareas

## Primera fase completada

- [x] Scaffold mínimo de Next.js App Router y configuración del preset
      `b1temovYm`.
- [x] Sidebar real basada en `sidebar-10`, compartida por `/`, `/home` y
      `/inbox`.
- [x] Datos tipados y store vanilla de Zustand para chats, mensajes,
      favoritos, búsqueda, streaming y eliminación.
- [x] Chat compuesto con primitivas de assistant-ui y runtime externo basado
      en el store local.
- [x] Composer con envío por teclado, selector de modelo simulado,
      adjunto visual, cancelación y sugerencias rápidas.
- [x] Respuestas deterministas en español con streaming acumulativo y
      cancelación mediante `AbortSignal`.
- [x] Vistas de inicio y bandeja de entrada con diseño coherente y filtros.
- [x] Pruebas Vitest para favoritos, eliminación, creación, búsqueda y
      streaming.
- [x] Documentación y comprobaciones iniciales actualizadas en esta carpeta.

## Segunda iteración visual y funcional — 2026-08-04

- [x] Sustituir Geist por Inter como única familia tipográfica y conectar las
      variables `font-sans`, `font-heading` y `font-mono` a `--font-inter`.
- [x] Crear `PowermetaLogo` con símbolo geométrico compacto/completo y tokens
      de la interfaz.
- [x] Eliminar copy visible de demo, conexión y detalles técnicos del producto.
- [x] Añadir `ChatIconName`, `ChatColorName`, mapas tipados y valores por
      defecto `folder`/`neutral` para favoritos.
- [x] Añadir selectores de icono y color con submenús accesibles, selección
      visible y soporte de teclado.
- [x] Persistir `chats` y `activeChatId` con Zustand `persist`, `skipHydration`
      y fallback de datos iniciales.
- [x] Corregir `CommandDialog` para envolver sus hijos en `Command`, mantener
      `shouldFilter={false}` y buscar por título y contenido.
- [x] Convertir la sidebar a `collapsible="icon"`, con rail de 48 px en
      escritorio, tooltips y Sheet responsive en móvil.
- [x] Mantener `/`, `/home`, `/inbox`, búsqueda, Nuevo chat, favoritos,
      eliminación, inbox filtrable y streaming local integrados.
- [x] Actualizar reglas generales, diseño, README y changelog.
- [x] Ampliar las pruebas unitarias de personalización, persistencia,
      rehidratación, búsqueda, streaming y cancelación.

## Pendientes reales para fases posteriores

- [ ] Sustituir el adaptador simulado por AI SDK y un proveedor real.
- [ ] Diseñar autenticación y persistencia de chats cuando exista backend.
- [ ] Añadir sincronización remota de chats y preferencias entre sesiones y
      dispositivos.
- [ ] Incorporar subida real de adjuntos y estados de error de red.
- [ ] Ampliar la cobertura E2E y ejecutar pruebas contra un entorno de
      producción.
