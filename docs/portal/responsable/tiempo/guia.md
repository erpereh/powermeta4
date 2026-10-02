# Tiempo del equipo y validación de incidencias

## Consulta

Destino `/portal/responsable/tiempo`. El [índice](README.md) incluye `mss_g4_p3.jsp` (vacaciones aceptadas), `p2_val.jsp`/`p2_detail.jsp`/`p2_val_stat.jsp` (ausencias y detalles), `p1_val.jsp`/cuerpo y `p1_val2.jsp` (validaciones/calendario), planificación GTA y selección de personas.

El [manual, PDF 128–129](../../referencias/manuales.md#tiempo-del-responsable), describe filtros por tipo de vacaciones, mes/año actuales por defecto, ausencias anuales y bolsas por tipo/UO/puesto. Bolsa sin definir es un estado distinto de saldo cero; ajustes manuales pueden tener signo positivo o negativo. La configuración de bolsas la hace RRHH en el estándar, no la consulta del manager.

La vista mensual distingue días aceptados, pendientes y festivos según leyenda local. Conservar selección de periodo, filtros, empleado y retorno al detalle; no calcular calendario real solo desde solicitudes visibles.

## Validación

`mss_g4_p1_val_body.jsp` muestra peticiones del nodo `SSE_REAL_TIME_PRD` y argumentos con `NIVEL_ACEPTADO`. `p1_val2.jsp` aporta vista calendario/estado. El tipo de incidencia puede ser de presencia o ausencia; no limitar todas las solicitudes a vacaciones.

Recorrido: tarea/lista → filtrar periodo/población → examinar petición y saldo/detalle disponible → aceptar/cancelar y motivo cuando exigido → enviar → resultado/nivel. El permiso proviene del flujo del responsable/delegado, no de la posibilidad de ver el calendario del equipo. Paginación, selección por fila y acciones de envío se preservan según cada fuente.

## Gestión y planificación

El manual también describe asignación individual/masiva de incidencias por el manager. En la copia hay planificación GTA con wrappers compartidos y acciones de modificación del calendario; consultar las fichas enlazadas y [tiempo SSE](../../empleado/tiempo/guia.md#planificación-actividad-y-reloj-virtual). Confirmar entrada efectiva y permisos de asignar/modificar/borrar. No habilitar escrituras de planificación solo por aparecer en una vista del responsable.

## Aceptación

Probar periodo sin movimientos, bolsa indefinida, ajuste negativo, incidencia horaria/diaria, varias peticiones, motivo ausente, envío por página, solicitud ya resuelta y recarga. Mantener leyenda accesible, estado pendiente/aceptado y detalle por empleado. Los límites, solapes, saldos y efectos de aprobación requieren P02/P04; no se han comprobado en servidor.
