# Evaluación, desarrollo, carrera, vacantes y movimientos

## Mapa funcional

El [índice](README.md) conserva las piezas `mss_g3`, sus cuerpos, formularios y controladores. Destino `/portal/responsable/talento`, con subapartados específicos; no crear 135 páginas públicas por tener 135 rutas técnicas de este dominio.

| Flujo                                                | Fuentes principales                                                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Procesos de selección abiertos, vacante y candidatos | `mss_g3_p1.jsp`, `p1_det.jsp`, `p1_des.jsp` y asistente `p1_wiz1`–`wiz7`                                         |
| Validar movilidad interna                            | `mss_g3_p2_val.jsp`                                                                                              |
| Evaluación, seguimiento, criterios y objetivos       | `p15*`, `p16*`, `p20*`, `p21*`, `p22*`, `p23*`, `p4_1_val.jsp`, `p15_val1.jsp`                                   |
| Historial y resultados de evaluación                 | `p5.jsp`, `p5_mod.jsp` y otras consultas de proceso                                                              |
| Solicitar necesidades/formación, detalle y costes    | `p6*`, `p12.jsp`, `p13*`, `p3_val.jsp`                                                                           |
| Cursos, eventos, sesiones, valoraciones y eficacia   | `p10*`, `p11.jsp`, `p14*`, `p24.jsp`, `mss_g3_val_efi.jsp`                                                       |
| Carrera y GAP                                        | `p8*`, `p9.jsp`                                                                                                  |
| Plan de desarrollo                                   | `smco_g3_dev_plan*` y cuerpos relacionados                                                                       |
| Entrevistas, resultados y validación                 | `smco_g3_p30*`, `p31*`                                                                                           |
| Preferencias y validación                            | `smco_g3_p32*`                                                                                                   |
| Cambios profesionales                                | `p17*`, `p18_mod.jsp`, `smco_g3_p17_mod_prof.jsp`, `smco_pm_modification.jsp`, asistentes y acciones `smco_pm_*` |

La semántica exacta de piezas con etiquetas dinámicas se obtiene de nodos, métodos y literales; confirmar su publicación y entrada (P01).

## Evaluación y objetivos

El responsable gestiona procesos dentro de sus roles como evaluador, validador o jerárquico. Separar criterios, nivel requerido/alcanzado, peso, objetivos cuantitativos/cualitativos, comentarios, cálculo de notas, seguimiento y cierre. Los scripts de evaluación y cuerpos asociados están documentados como dependencias.

El [manual, PDF 103](../../referencias/manuales.md#talento-del-responsable), describe ayudas de significado, comentarios particulares, políticas de objetivos e historial con resultados globales, detalles y exportación. El [manual, PDF 123 y 127](../../referencias/manuales.md#talento-del-responsable), describe validación parametrizada y valoración previa del objetivo por el empleado. No todos los responsables validan todas las evaluaciones; el plan define fases y flujo.

Recorrido: proceso/empleado → criterios y ayudas → edición permitida → guardar/calcular → enviar/cerrar → validación/valoración → historial. La selección de evaluadores 360 tiene recorrido [empleado](../../empleado/talento/guia.md#evaluación-persona-evaluada-y-persona-evaluadora) y validación propia. No sustituir cálculos Meta4 por promedios ni marcar cerrado al guardar un borrador.

## Desarrollo y formación

Solicitudes de necesidades/formación permiten catálogo o formación fuera de catálogo, plazas, empleados y detalles. Hay campos de producto, tipo, horas, lugar, nivel, bonificación y costes. Las fichas conservan obligatoriedad visible, longitudes y selección de personas. El [manual, PDF 111](../../referencias/manuales.md#talento-del-responsable), distingue costes de formación y participantes; si la persona no se conoce algunos costes salariales son cero en el estándar, no un cálculo estimado nuevo.

Separar petición, aprobación, inscripción, evento convocado, sesión/calendario, asistencia/formación realizada, valoración y eficacia. La ventana de detalle no constituye una nueva inscripción. Los presupuestos/costes dependen de servidor. Los planes de desarrollo añaden selección/asignación de acciones y seguimiento; el [manual, PDF 107](../../referencias/manuales.md#talento-del-responsable), describe filtros por fechas, puesto y evaluación.

## Carrera y GAP

El [manual, PDF 116](../../referencias/manuales.md#talento-del-responsable), distingue nivel actual de persona, nivel requerido por puesto y nivel del puesto siguiente. «No valorado» no es cero ni ausencia de competencia. La consulta puede conducir a formación para cubrir GAP; confirmarlo en el flujo publicado. Mantener mentor, periodos y enlaces de puesto del plan.

## Vacantes y selección: asistente

`p1_wiz1` define puesto, número de vacantes, movilidad y lugar; `wiz2` experiencia; `wiz3` certificados/licencias; `wiz4` historial académico; `wiz5` obligaciones/tiempo/frecuencia; `wiz6` idiomas y niveles; `wiz7` competencias/nivel/peso. Cada paso tiene catálogos y registros agregados que deben confirmarse antes de continuar.

El [manual, PDF 116](../../referencias/manuales.md#talento-del-responsable), introduce apertura de vacante y el asistente. Las piezas `persist_wiz*` gestionan datos de ese proceso; su título heredado «Eliminar favoritos» no demuestra esa función. Seguir campos, métodos y enlaces de fuente. El listado de procesos y detalle relacionan vacantes/candidatos, CV y estado; no equivale al alta de persona aprobada.

## Entrevistas y modificaciones profesionales

Las entrevistas separan solicitud, fecha/resultado, persona entrevistada, documento, comentarios y validación. El [manual, PDF 114](../../referencias/manuales.md#talento-del-responsable), distingue campos obligatorios de solicitud, resultados y adjuntos opcionales; PDF 121 describe valoración de conocimientos del candidato y sus condiciones. No confundir entrevista ERP con conversación del chat.

Cambios de puesto/posición/traslado tienen solicitud y seguimiento propios. El [manual, PDF 123](../../referencias/manuales.md#talento-del-responsable), describe cancelación antes de respuesta de RRHH y archivo después de resolución, con opción de mostrar archivadas. Las fuentes locales contienen asistentes, modificación y acción con argumentos; verificar efectos en puesto/UO/contrato y permisos. Preferencias de carrera tienen registro y validación distintos.

## Aceptación

Probar fases cerradas, criterio no editable, cálculo inválido, petición sin persona/plazas, evento sin sesión, filtro vacío, objetivo no valorado, plan sin siguiente puesto, asistente incompleto y documento ausente. Comprobar guardar frente a enviar/cerrar, retirada frente a archivo y aprobación multinivel. Todo cálculo/efecto no visible en fuente queda P02/P04; exposición, población y documentos requieren P01/P03/P08 por flujo.
