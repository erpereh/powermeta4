# Datos del equipo y validaciones

## Consulta del equipo

El [manual, PDF 72](../../referencias/manuales.md#datos-y-retribución-del-responsable), describe un listado de empleados dentro de las UO visibles y dossier con datos personales, foto, situación actual, históricos y otros enlaces. Las fuentes principales `mss_g1_p1.jsp`, páginas profesionales, CV, informe ORO y dossier se localizan en el [índice](README.md).

Destino `/portal/responsable/equipo`. Los datos y bloques dependen de la configuración del dossier y las variantes. La selección de persona y filtros pertenecen al contexto del responsable; no reutilizar sin autorización el detalle administrativo para mostrar campos personales completos.

## Validaciones personales y profesionales

El [manual, PDF 75](../../referencias/manuales.md#datos-y-retribución-del-responsable), distingue direcciones, teléfono, correo, otras direcciones y estado civil; otros apartados incluyen currículo, emergencia y dependientes. Las piezas `mss_g1_p1_val*`, `mss_g1_p3_val*` y demás validadores mantienen nodos y argumentos propios; el [índice](README.md) permite localizar todos.

Recorrido: tareas/lista de validación → filtro → petición y detalle → aceptar/cancelar según opción → motivo cuando exigido → envío → resultado/estado. Las acciones masivas y por fila no necesariamente incluyen registros de otras páginas. `NIVEL_ACEPTADO`, `REC`, nodo y campos ocultos están en las fichas; su significado efectivo depende del flujo.

| Elemento                            | Regla de implementación                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| Dato anterior/actual y propuesto    | Mostrar los bloques disponibles sin sustituir el dato definitivo antes de resolver             |
| Identificación de empleado/petición | Debe validarse en servidor contra el alcance de la tarea                                       |
| Selección aceptar/cancelar          | Mantener exclusión y obligatoriedad de la elección según original                              |
| Motivo/comentario                   | Mantener límite, obligatoriedad condicional y contexto                                         |
| Filtro y paginación                 | Conservar selección solo como permita el contrato; no aprobar registros invisibles por defecto |
| Resultado                           | Diferenciar aplicado, nivel siguiente, rechazado, conflicto y fallo según retorno real         |

Una solicitud de cambio de dirección y un registro de currículo pueden tener políticas distintas de borrado/validación; no implementar un CRUD genérico para todo `mss_g1`.

## Aceptación

Consultar únicamente población autorizada, comparar los campos propuestos, procesar una petición válida y mostrar su estado real. Probar fila sin elección, elección contradictoria, motivo ausente, envío parcial, petición ya resuelta, sesión expirada y dato ausente. Los fallos/concurrencia son criterios pendientes P04 hasta contrato real, no comportamientos comprobados por ejecución.
