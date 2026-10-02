# Interfaces alternativas: móvil y generación moderna

## Móvil identificable en la copia

Las entradas HTML siguientes existen en `clon_portal/portal/mobile/`. Están acompañadas por scripts `meta4.mobile.*`, traducciones y JSP de entrada/includes. La tabla registra funciones por archivo y nombre de módulo; su exposición por sociedad y correspondencia exacta con los servicios clásicos siguen P07.

| Entrada                                                                           | Función identificable                    | Relación documental y pendiente                                                                                                     |
| --------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `index.jsp`, `m4select_platform.html`, `welcome_action.jsp`, `mobile_version.jsp` | Entrada, selección de interfaz y versión | Sesión/navegación transversal; comprobar elección de plataforma y perfil                                                            |
| `m4home.html`                                                                     | Inicio móvil                             | Relacionar módulos de inicio; no inferir todos los menús publicados                                                                 |
| `m4who_is_who.html`                                                               | Directorio                               | [Organización](../empleado/organizacion/guia.md); contrastar filtros/campos/población                                               |
| `m4my_profile.html`                                                               | Perfil personal                          | [Datos](../empleado/datos/guia.md); contrastar bloques y edición permitida                                                          |
| `m4payslip.html`                                                                  | Nómina                                   | [Retribución](../empleado/retribucion/guia.md); contrato de recibo, periodo y descarga                                              |
| `m4task.html`                                                                     | Tareas                                   | [Transversal](../transversal/flujos.md); tipos de tarea/validación y estados                                                        |
| `m4news.html`                                                                     | Noticias                                 | Capacidad identificada adicional: publicación, detalle y contenido dependen del módulo móvil y servidor; no hay catálogo verificado |
| `include_mobile_chgpass.jsp`, `include_mobile_forgetpass.jsp`                     | Cambio/recuperación de contraseña        | Contrato externo pendiente P04; no crear recuperación de cuenta ficticia                                                            |
| `mobile_func/m4my_work_time.html`                                                 | Calendario/solicitudes de tiempo móvil   | [Tiempo](../empleado/tiempo/guia.md); contrato distinto del formulario clásico                                                      |

No se declara cobertura completa de todos los controles de esta generación como si fueran JSP clásicos. La limitación de cada fila es confirmar uso y revisar su script/módulo específico antes de decidir si amplía el flujo funcional o solo cambia presentación.

## Tiempo móvil: contrato visible

Fuente consultada: [meta4.mobile.my_work_time.js](../../../clon_portal/portal/mobile_func/js/meta4.mobile.my_work_time.js). Define modos `RESUME`, `REQUEST`, `REQUEST_FLOATING` y selección horaria/mañana/tarde/día completo/medios días (L31–48). Declara uso de `SRCO_WEB_CALENDAR`, nodo `SRTC_LAYER_DATA`; llamadas `M4Request` visibles:

| Líneas    | Método                                       | Función indicada por nombre/código                                            |
| --------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| L666/L670 | `DELETE_INC_PENDING` / `DELETE_INC_APPROVED` | Borrado de incidencia pendiente o aprobada según rama; permiso/efecto P03/P04 |
| L850      | `LOAD_INFO_DAY`                              | Información de día seleccionado                                               |
| L1789     | `LOAD_LAYER_LOCKED`                          | Información de capa/bloqueo                                                   |
| L1878     | `INSERT_INC_PENDING`                         | Inserción de petición; no escritura aprobada en powermeta4                    |

Los comentarios `M4JSAuthorize` del archivo no son el permiso efectivo del usuario. Faltan metadatos de capas, argumentos y resultados efectivos, límites de jornada, franjas y reglas de servidor (P02/P04). Este contrato no se convierte en SOAP por el nombre de método.

## `pop2` y REST

`pop2/index.html`, `home.html`, `two-tab-home.html` y páginas de contacto/avisos legales conviven con assets, service worker y PWA. La entrada HTML y los bundles no bastan para acreditar un mapa funcional activo por sociedad. No se ha ejecutado esta aplicación ni descompilado cada dependencia minificada para atribuirle funciones a CYC/IBER/COLL. P07 exige identificar menú/módulos y posibles capacidades exclusivas.

`restapi/index.html` es un visor Swagger y carga `swagger-initializer.js`; `WEB-INF/web.xml` declara `/REST/*`. Esta presencia no proporciona contratos aprobados de las funciones anteriores ni asegura disponibilidad remota. Antes de cualquier adaptación REST obtener la especificación efectiva y autorización del servicio (P04).
