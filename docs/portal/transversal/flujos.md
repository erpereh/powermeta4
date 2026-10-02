# Acceso, navegación y servicios comunes

## Acceso, sesión y sociedad

**Comprobado:** `index.html` redirige a `/sse_generico/espanol/generico_login_cyc.jsp?estado=0`. El wrapper español prepara el idioma y conduce al login compartido. Hay páginas de login, aviso legal, enlaces, cambio de contraseña, errores y comprobación de contexto, con variantes por sociedad en el [índice de navegación](navegacion/README.md). Las fichas conservan parámetros y formularios; no incorporan credenciales.

En powermeta4 se entra por su `/login` existente y se reutiliza la sesión. Las páginas originales no constituyen un segundo sistema de autenticación que deba copiarse. Distinguir sesión inexistente/expirada, perfil operativo no disponible y acceso denegado. El cambio de contraseña del portal es una escritura externa pendiente P04; su mera presencia no autoriza implementarlo llamando al login.

**Manual:** la arquitectura distingue presentación web, sesión, servidor de aplicaciones y base de datos; las peticiones pueden esperar validaciones parametrizadas. Véase [Configuración SSE, PDF 8, 9 y 13–15](../referencias/manuales.md#configuración-y-seguridad). La configuración de tareas, registros, campos y roles no puede reconstruirse íntegramente desde HTML.

## Inicio, menús y cambio de perfil

La [ficha `sgco_portal.jsp`](navegacion/sse_generico--sgco_portal.md) registra el montaje del portal. Carga `MENUS!MENU_RECURSIVE.SRTC_LOAD_MENU` y `SRTC_FILTER_MENU`; emplea los árboles `SGCO_MENU`, `SSCO_MENU` y `SMCO_MENU`, con exclusiones de ramas auxiliares. `M4Menu.hasMss` participa en la disponibilidad del cambio al contexto de responsable. No equivale a una autorización server-side de cualquier operación SSM.

El inicio presenta los módulos y sus entradas. Los antiguos `libreria/menu_sse_esp.js` y `menu_mss_esp.js` aportan nombres y rutas, pero el árbol filtrado del servidor decide publicación real (P01). Favoritos, última navegación, marcos y restauración de estado se identifican en las fichas genéricas. En powermeta4 sustituir frames por navegación App Router y mantener URL, selección y retorno de los flujos donde proceda. Conservar por separado navegación, expansión y estado del menú.

Aceptar una entrada solo si se conoce la sociedad/perfil aplicable; mostrar un estado honesto cuando la conexión o capacidad no esté disponible. El selector de empleado/responsable no crea un permiso ni se almacena como autoridad en el navegador.

## Búsqueda, directorio y selección de personas

Hay búsquedas de personas/UO, filtros de listas y ventanas auxiliares para elegir empleados, puestos, cursos u otras referencias. El [directorio](../empleado/organizacion/README.md), [organigrama compartido](organizacion/README.md) y [filtros](filtros/README.md) tienen fichas distintas. No confundir buscar una persona en el directorio con poder consultar su nómina, modificar su currículo o validar sus peticiones.

El manual, PDF 13–14, describe búsqueda incremental y árbol con dossier de responsables y empleados, ordenación, foco de una UO como raíz, contactos y correo. La fuente local incorpora quién es quién, variantes de organigramas y cuerpos de motor. Su población, campos y acceso deben comprobarse para cada sociedad.

En responsable, la población seleccionada se aplica a consultas; las validaciones tienen su propio alcance. El manual, PDF 68, distingue responsabilidades y excluye revisión salarial de la selección general de UO. Véase [guía del responsable](../responsable/flujos.md#alcance-del-responsable-y-delegaciones).

## Favoritos y contactos

El portal carga favoritos mediante `SGCO_FAVOURITE!SGCO_FAVOURITE.SCO_LOAD`; las piezas genéricas contienen los flujos asociados. Son favoritos de funcionalidades del portal, distintos de `Chat.favorite`. Los contactos del directorio también constituyen una capacidad distinta. El servidor y formato real de sus escrituras están pendientes P02/P04. No crear un array paralelo de favoritos de chats para alojarlos.

Preservar entrada al destino, estado vacío y eliminación/alta cuando sus contratos se confirmen. La persistencia elegida para favoritos del portal deberá decidirse explícitamente; no migrarlos automáticamente a SQLite ni deducir que el navegador es fuente de verdad.

## Tareas y solicitudes

El [motor de tareas](navegacion/sse_generico--sgco_engine_tasks.md) y las [piezas del responsable](../responsable/tareas/README.md) permiten localizar tareas, validaciones y delegaciones. El manual, PDF 12–13, distingue peticiones pendientes por funcionalidad/nivel, tareas de flujo pendientes, fecha límite y enlaces a páginas específicas o genéricas. Algunas tareas son de aprobación y otras de realización; estas últimas usan «Hecho», no aceptar/rechazar.

El listado genérico permite filtrar y deshacer filtro, ver detalle/comentarios y enviar elecciones. Los valores numéricos y las fases no se unifican por intuición. Una aceptación puede ser solo un nivel intermedio, y cancelar una petición no equivale a rechazarla como responsable. Las notificaciones y reasignaciones son efectos del servidor pendientes, aunque el manual las describa.

## Componentes compartidos, informes y archivos

Las fuentes usan tags Meta4, calendarios, listados, paginadores, selectores, popups, subida, blobs y páginas de resultado. Sus contratos están en [contratos comunes](contratos.md) y en cada ficha. Los scripts alcanzados por referencias estáticas tienen ficha de [dependencia](dependencias/README.md); los diccionarios españoles están en [literales](../referencias/literales/README.md).

Hay recibos, certificados, anexos, DPT, CV, documentos profesionales/formativos y exportaciones. El manager también dispone de consultas publicadas con formato, categoría, fecha, filtros e informe; se necesitan permisos de ejecución (manual PDF 67). No identificar una URL de blob con un fichero público. Implementar descarga en servidor con autorización del documento, MIME, nombre seguro y resultado vacío/error (P08). Los documentos internos del empleado se vinculan a cada funcionalidad y pueden tener validación propia.

## Diferencias de sociedad y aceptación

Las fichas muestran las variantes CYC, IBER y COLL y las copias idénticas. Un ejemplo comprobado: las cuatro fuentes españolas de `sse_g4_p2.jsp` son idénticas; `sgco_portal.jsp` y el dossier personal difieren entre base y personalizaciones, mientras determinadas copias IBER/COLL coinciden. No extrapolar esa coincidencia a un dominio entero.

Aceptar un flujo transversal cuando navegación y retorno funcionen por teclado y móvil, perfil y sociedad se resuelvan en servidor, filtros no amplíen permisos, tareas mantengan sus estados reales y documentos respeten el alcance. Las comprobaciones de backend pendientes se registran por ruta, método y sociedad, sin sustituirse por demostraciones.
