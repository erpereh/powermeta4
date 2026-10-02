# Contratos comunes del portal clásico

## Qué ejecuta el original

Las páginas JSP declaran instancias con `m4:datadef`, trabajos de carga con `m4:exec`, parámetros con `m4:param` y nodos/ítems/salidas con tags y API Java. Las fichas mantienen sus nombres completos y atributos originales. Los métodos incluyen `CARGA`, `GESTION`, operaciones específicas, selección, cálculo y generación de documentos. Son llamadas al runtime Meta4; esta documentación **no define endpoints SOAP equivalentes**.

Un alias, una subsesión y una instancia recuperada con `m4find` pueden preservar estado entre páginas. Los ordinales `REC`, filtros, selección y nivel de validación dependen de esa instancia. En una implementación nueva se necesita una identidad estable del registro y control de concurrencia, no reutilizar un ordinal enviado por el cliente como autorización.

El manual de framework, [PDF 54](../referencias/manuales.md#framework-html), explica llamadas de nivel 2, alias, instancias y el significado de `m4find=true`; también diferencia parámetros de formularios normales y multipart. Aplicar esta referencia al interpretar la fuente, sin mantener el runtime Java dentro de Next.js.

## Actualización genérica

La [ficha `generico_actualizar.jsp`](navegacion/sse_generico--generico_actualizar.md) registra el controlador empleado por numerosos formularios. Recoge `TAG`, `REC`, `ACC`, `NOD` y otros argumentos. Construye `GESTION_ARG` con separadores `{`, prepara `SSE_PRINCIPAL` y ejecuta `<TAG>!SSE_PRINCIPAL.GESTION`. El retorno incluye `SSE_COMUNICACION`, `TIPO_DEBUG` y `JSP_REDIRECCION`, usados para resultado y navegación. Hay variantes para peticiones múltiples, argumentos cifrados, informes y otras acciones.

| Elemento                         | Interpretación comprobable                                                         | Límite                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `TAG`                            | Objeto funcional elegido por la página                                             | No aceptar un objeto arbitrario del navegador en el futuro servicio    |
| `NOD`                            | Nodo sobre el que opera el controlador                                             | No equivale directamente a una tabla SQL                               |
| `REC`                            | Registro/posición en el contexto original                                          | No prueba identidad, pertenencia ni permiso                            |
| `ACC`                            | Acción solicitada; aparecen, entre otras, inserción, cambio o `BORRAR` según flujo | No normalizar todas las acciones sin revisar sus variantes             |
| `GESTION_ARG`                    | Argumentos concatenados para el método de gestión                                  | Es formato interno, no un JSON de API aprobado                         |
| `TIPO_DEBUG` / `JSP_REDIRECCION` | Salida y navegación de la gestión                                                  | Confirmar códigos y mensajes reales; no reducir toda respuesta a éxito |

Las claves de cifrado incrustadas no se reproducen. El cifrado de parámetros no autoriza operaciones. En powermeta4 los secretos permanecen en servidor y el payload se valida por funcionalidad.

## Estados y validación

El [manual de configuración, PDF 13](../referencias/manuales.md#configuración-y-seguridad), explica tablas temporales y flujos sin validación o con varios niveles y notificaciones configurables. El [manual de usuario](../referencias/manuales.md) describe solicitudes pendientes, aceptadas y canceladas/rechazadas según funcionalidad. Esto no ofrece un enum numérico universal ni todos los efectos del método `GESTION`.

Las pantallas leen flags, estados y niveles; las fichas preservan los ítems, condiciones, selecciones y mensajes. Para implementar un flujo hay que documentar su propia transición: quién solicita, quién valida en cada nivel, cuándo se aplica el cambio definitivo, quién puede retirar la petición, si se permite archivar y cómo se muestra un error. Los estados persistidos del **chat** no se usan para peticiones del portal.

En aprobaciones masivas, varias páginas recuerdan enviar cada página de resultados. No inferir que marcar una casilla ya persiste ni que enviar la página implica aprobar registros no visibles. Comprobar semántica de selección, filtros y envíos parciales con P04.

## Informes, blobs y consultas

Las fichas conservan métodos generadores, parámetros, selección de ejercicio/periodo y apertura/impresión. El [framework, PDF 236](../referencias/manuales.md#framework-html), documenta una modalidad con nodo de parámetros `SHCO_GN_PARAM_VALUES`, `SHCO_PARAM`, `SHCO_VALUE`, `zsubsesion`, `zm4o`, `zalias` y `zopenmode`. Esa modalidad no es automáticamente el contrato de todos los recibos o certificados.

Confirmar por cada informe su origen y formato: blob, página JSP de presentación, consulta publicada, exportación Excel o resultado calculado. Resolver documentos faltantes, errores de generación, identidad del documento y autorización (P08). No publicar rutas de disco o servicios originales en el cliente.

## Adaptación técnica

La nueva capa server-only debe exponer operaciones específicas y tipadas únicamente cuando exista un servicio verificable. La sociedad y el usuario se derivan de la sesión. Las lecturas PeopleNet usan `SELECT` parametrizada; las escrituras originales permanecen pendientes del contrato y alcance aprobados. UI, tipos y reglas visibles pueden prepararse sin inventar persistencia o resultados de éxito.

Antes de ejecutar una operación, cerrar P02/P03/P04 de esa ruta y revisar los criterios de [aceptación](../implementacion/aceptacion.md). La entrega documental no amplía las autorizaciones ERP del proyecto.
