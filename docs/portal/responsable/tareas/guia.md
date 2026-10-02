# Tareas, delegaciones y población

## Entradas y fuentes

Las piezas `mss_generico` están en el [índice](README.md): tareas, `mss_delegation.jsp`, información de usuario, `mss_list_employees.jsp`, `mss_list_all_employees*`, `mss_set_wunit_resp*`, selección de empleado, mapa y ventanas auxiliares. Destinos propuestos `/portal/tareas` y `/portal/responsable/alcance`.

Las tareas se explican una sola vez en la [guía transversal](../../transversal/flujos.md#tareas-y-solicitudes); aquí se añade el contexto del responsable. La lista de validaciones se rige por el flujo, no por todas las personas de la sociedad.

## Delegación

El [manual, PDF 66–67](../../referencias/manuales.md#tareas-y-alcance-del-responsable), describe elegir proceso, periodo y delegado con contrato en la empresa. La delegación puede transferir validaciones pendientes y emitir notificaciones. Terminarla afecta a nuevas solicitudes según el periodo; no equivale a borrar una persona ni a compartir una sesión.

Las fichas registran campos y métodos locales; confirmar por P02/P04 los procesos delegables, fechas, conflictos, reasignación efectiva y retorno. Conservar lista, detalle, nueva delegación/cambio de fin y resultado. Mostrar quién delegó, en quién y para qué periodo cuando el original lo ofrezca.

No implementar correo o notificaciones externos solo porque el manual los mencione; son efectos del contrato Meta4 a verificar. Tampoco mantener la delegación como permiso guardado únicamente en el cliente.

## Visibilidad y selección de empleados

El [manual, PDF 68](../../referencias/manuales.md#tareas-y-alcance-del-responsable), establece un árbol activo por tipo de responsabilidad. Marcar UO cambia población de consultas, exige al menos un empleado y no acumula varios árboles. La revisión salarial usa responsabilidades 111/112 en ese estándar y no participa en esta selección general.

Los listados original/all/noenlaces tienen contratos distintos. Filtros y paginación no amplían el permiso real. Las selecciones de empleado deben preservarse en el flujo de detalle, con retorno a población y filtro. El servidor tiene que comprobar pertenencia y alcance en cada solicitud, incluso si la UI oculta un botón.

## Aceptación

Probar tareas vacías, tipos de aprobación/realización, filtro, detalle, cambio de población, árbol sin empleados, cambio de responsabilidad y delegación fuera de periodo. Confirmar tratamiento de pendientes previos y posteriores al fin. No dar por implementadas delegaciones hasta validar contrato y autorización P03/P04.
