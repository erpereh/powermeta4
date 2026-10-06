# Navegación del portal original

La jerarquía tipada de `src/lib/portal/registry/menu.ts` es la fuente de sidebar,
pestañas, Inicio, breadcrumbs, rutas y búsqueda. El empleado sigue las trece
capturas aportadas; el responsable sigue `libreria/menu_mss_esp.js` y
`mss_generico/espanol/generico_mapa.jsp`. Se conserva el diseño de powermeta4.

Cada entrada declara pantalla, ruta y destino original. Los parámetros como
`vista=0/1/2`, `mss=0/1`, `proc=1` y `zTLoad=FR` distinguen modos; no llegan al
servidor como sociedad, matrícula ni alcance. Las rutas públicas existentes se
conservan. Las raíces de sección abren su primera página disponible; las páginas
fuera del menú siguen accesibles por URL y búsqueda.

Los accesos repetidos conocidos se consolidan dentro de su sección. Los accesos
de menú dinámico cuyo destino no consta en la copia permanecen separados de la
página JSP conocida. `>` era un indicador de navegación, no forma parte del
nombre. No hay sección de favoritos del portal.

Los dossiers antiguo/nuevo, documentos a tramitar, casos de RRHH, buzón, diálogos,
evaluación nueva/continua y varios accesos GTA dependen de la configuración
`SCO_MENU` y sistemas externos (P01/P06). Las capturas permiten reproducir sus
entradas, pero no deducir sus campos ni ejecutar sus destinos. Sus páginas
explican esta dependencia; no contienen datos ni formularios inventados.

Las páginas con JSP conocido separan consultas, solicitudes y validaciones.
Conservan las SELECT y descargas del registro anterior. Los cuestionarios,
escalas, catálogos y cuerpos mensuales generados por Meta4 muestran su contrato
pendiente. Una consulta de evaluaciones recibidas no sustituye asignaciones del
evaluador, competencias, objetivos ni entrevistas a candidatos. Las peticiones
agregadas del responsable se filtran por un tipo fijo del registro antes de
mostrarlas, siempre dentro del equipo resuelto en servidor.

Los formularios mantienen validación y envío deshabilitado. No se añade ninguna
escritura ERP ni almacenamiento de datos personales. `portal:docs` genera el
mapa completo en `navegacion.md` y las dependencias de cada pantalla.
