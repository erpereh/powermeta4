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

## Tercera iteración ERP y sidebar — 2026-08-04

- [x] Centralizar cinco categorías y veinte acciones ERP con tipos estrictos,
      prompts editables e iconos Lucide.
- [x] Mostrar categorías y acciones debajo del composer con estado local,
      wrapping responsive y estados accesibles.
- [x] Integrar `setText` de assistant-ui con ref tipado, foco al final del
      prompt y sin envío automático.
- [x] Ocultar recomendaciones cuando el thread tiene mensajes y restaurarlas
      al crear un chat nuevo.
- [x] Retirar las sugerencias genéricas visibles del runtime.
- [x] Eliminar el `SidebarTrigger` interno y el render de `SidebarRail` sin
      modificar la base oficial de shadcn.
- [x] Mantener el trigger principal con `aria-label` dinámico, el atajo de
      teclado oficial y el comportamiento Sheet móvil.
- [x] Añadir pruebas de contrato para categorías, acciones, prompts e iconos.
- [x] Revisar manualmente foco, no-envío, responsive, navegación y ausencia de
      controles duplicados.

## Restauración oficial del Thread — 2026-08-04

- [x] Obtener el componente `thread` oficial en una carpeta temporal externa y
      comparar su estructura con la implementación actual.
- [x] Restaurar la condición oficial de chat nuevo con estados de carga del
      thread y de la lista de threads.
- [x] Centrar el estado vacío desde el wrapper del Thread, sin expandir el
      welcome ni crear otro composer.
- [x] Mantener un único composer dentro de `ThreadPrimitive.ViewportFooter` y
      hacerlo sticky solo después del primer mensaje.
- [x] Reintegrar las recomendaciones ERP en el slot inicial del footer, sin
      selección de categoría por defecto y con acciones no ejecutables.
- [x] Usar `ThreadPrimitive.Suggestion` con `send={false}`, foco y cursor al
      final sin duplicar el estado del texto.
- [x] Conservar selector de modelo, adjunto visual, mensajes, edición,
      acciones, streaming y cancelación existentes.
- [x] Completar la revisión manual de scroll, foco, hidratación, transición
      entre chat nuevo y conversación iniciada, y matriz responsive del Thread
      en 1440, 1024, 768 y 390 px.

## Ajuste del selector de modelos — 2026-08-04

- [x] Ocultar las descripciones visibles del modelo en el trigger y en cada
      elemento del menú sin modificar `ModelOption` ni los datos internos.
- [x] Fijar el contenido de Radix en modo `popper`, alineado arriba y sin
      autoajuste de colisión para conservar la apertura hacia arriba.
- [x] Conservar la selección por teclado, el foco, Escape y el funcionamiento
      existente de envío, streaming y cancelación.
- [x] Revisar manualmente el primer y el último modelo, la ausencia de
      descripciones y los errores de consola en el navegador local.

## Pendientes reales para fases posteriores

- [ ] Sustituir el adaptador simulado por AI SDK y un proveedor real.
- [ ] Diseñar autenticación y persistencia de chats cuando exista backend.
- [ ] Añadir sincronización remota de chats y preferencias entre sesiones y
      dispositivos.
- [ ] Incorporar subida real de adjuntos y estados de error de red.
- [ ] Ampliar la cobertura E2E y ejecutar pruebas contra un entorno de
      producción.
