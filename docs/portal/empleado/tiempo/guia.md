# Vacaciones, incidencias, ausencias y planificación

## Fuentes y recorridos

Destino `/portal/empleado/tiempo`. El [índice](README.md) reúne vacaciones clásicas `sse_g4_p2.jsp`/`p2_2.jsp`, ausencias `p1.jsp`, festivos `p3.jsp`, peticiones GTA y su cuerpo, planificación y piezas auxiliares, actividad y reloj virtual. No son interfaces equivalentes; confirmar cuál usa cada sociedad.

## Vacaciones clásicas

[sse_g4_p2.jsp](sse_g4--sse_g4_p2.md) es byte a byte igual en las cuatro fuentes españolas BASE/CYC/IBER/COLL analizadas. La carga usa `SSE_HOLYDAYS`, `SSE_PRINCIPAL.CARGA` con `TIPO_CARGA=ALL` y contexto `NIVEL0`. Consulta `SSE_REAL_TIME_PRD` para peticiones, `M4T_REAL_TIME_PRD` para datos aceptados y `SSE_INCIDENCE` para tipos.

| Apartado   | Datos y controles                                                                     | Comportamiento comprobado                                                                  |
| ---------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Solicitud  | Fecha inicio, fecha fin y tipo de incidencia                                          | Calendario, selección y validación antes del envío                                         |
| Bolsa      | Días actuales, arrastre, teóricos, disponibles y pendientes según campos del original | Visibilidad del arrastre y unidad dependen de tipo/configuración                           |
| Peticiones | Registros y estados de solicitud                                                      | Cancelación pasa `TAG=SSE_HOLYDAYS`, `ACC=BORRAR`, `NOD=SSE_REAL_TIME_PRD` y ordinal `REC` |
| Aceptadas  | Datos definitivos/aceptados separados                                                 | No presentar pendiente como día aceptado                                                   |

El JavaScript comprueba formato de fecha, inicio ≤ fin, inicio no anterior al alta y tipo obligatorio. Eso no prueba que haya saldo suficiente, ausencia de solape o permiso de anulación: esas reglas internas requieren P02/P04. Hay paginación y referencias copiadas a otro dominio; se conservan como evidencia de ruta y pendiente de comprobación, sin corregir el original.

## Incidencias GTA

`sse_g4_gta_incidences_request.jsp` y su cuerpo soportan la solicitud de incidencias con lógica distinta del formulario clásico. El [manual, PDF 61–62](../../referencias/manuales.md#evaluación-y-tiempo-del-empleado), distingue incidencias de presencia/ausencia publicadas por RRHH, bolsa, duración diaria/horaria y gestión por franjas.

En el estándar, elegir el tipo habilita duración: una horaria mantiene fecha fin igual a inicio, permite inicio/fin horario o total; una diaria permite intervalo de días; una mixta habilita ambos modos. El volumen horario puede guardarse decimal. Empleados gestionados en días y por franjas tienen restricciones particulares del servidor. No extrapolar estas reglas al JSP clásico sin contrastar sus campos.

Tras enviar, el estándar muestra resultado, incorpora petición y permite anulación si procede; valida el responsable configurado. El saldo y calendario determinan resultados, no una resta hecha sobre una cifra mostrada en la UI. Conservar detalle de error y petición pendiente.

## Festivos y ausencias

`sse_g4_p3.jsp`: calendario laboral con festivos legales y de la organización. `sse_g4_p1.jsp`: ausencias y periodo/año según variante. El [manual, PDF 63](../../referencias/manuales.md#evaluación-y-tiempo-del-empleado), describe consulta anual. No derivar calendario laboral de festivos públicos de internet: calendario, centro, jornada y sociedad son datos operativos del ERP.

## Planificación, actividad y reloj virtual

Las piezas `sse_g4_gta_planning*` separan wrapper, población, filtro, cuerpo, paginación, menús, detalle diario/franjas, tooltips, información de jornada, contadores/alertas, cálculo y validación. Las acciones `modify_day` y `modify_all_empl_days` son mutaciones originales, aunque estén bajo un directorio SSE. Confirmar su exposición y permiso; no habilitarlas para cualquier empleado por esa ubicación.

`sse_g4_gta_activity.jsp`, `sse_g4_gta_virtual_clock.jsp` y redirect tienen contratos propios. Documentación móvil complementaria usa `SRCO_WEB_CALENDAR` y modos de solicitud/resumen; véase [otros recursos](../../inventario/otros-recursos.md). Registro horario, fichaje, límites de día y franjas necesitan P02/P03/P04; no simular persistencia de un reloj local.

## Adaptación y aceptación

Reemplazar calendario/frame por controles accesibles manteniendo días, franjas, unidad y leyenda. No usar color como único indicador de pendiente/aceptado/festivo. Probar rango inverso, fecha inválida/anterior al alta, tipo vacío, bolsa ausente/insuficiente, solape, petición rechazada, anulación, recarga y periodo sin datos. Algunos casos son criterios futuros dependientes del servidor, no validaciones confirmadas en la copia.

Aceptar un flujo cuando consulta, solicitud, resultado y retorno distingan estado real y autorizado. Compartir semántica con [validación del responsable](../../responsable/tiempo/guia.md), sin inventar reglas de aprobación ni una escritura SQL.
