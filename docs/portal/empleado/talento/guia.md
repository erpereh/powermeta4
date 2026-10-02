# Puesto, formación, evaluación, carrera y movilidad

## Mapa del dominio

Destino `/portal/empleado/talento`, con formación, evaluación, carrera y movilidad. El [índice](README.md) registra pantallas y fragmentos `sse_g3` y sus personalizaciones; los nombres de proceso, criterio, nivel y curso proceden del servidor. No se fija su catálogo a partir de textos del manual.

| Flujo                                                          | Familia de fuentes                                                                                                |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Historial y detalle de puestos                                 | `sse_g3_p0.jsp`, `p0_desc.jsp`                                                                                    |
| Movilidad interna y peticiones                                 | `sse_g3_p2.jsp`, `p2_mod.jsp`, `p2_vis.jsp`                                                                       |
| Catálogo, cursos/productos, destinatarios e inscripción        | `sse_g3_p3*`, `p7.jsp` y páginas de información/destinatarios                                                     |
| Evaluación de cursos y cuestionario                            | `sse_g3_p8.jsp`, `p8_desc.jsp`, `p8_act.jsp`                                                                      |
| Formación realizada, certificados y documentación publicada    | `sse_g3_p21*`, `ssco_g3_pform.jsp` y certificado                                                                  |
| Evaluadores 360 y solicitudes                                  | `sse_g3_p4_1*`                                                                                                    |
| Criterios, valoración, objetivos/conocimientos y apertura      | `sse_g3_p5*`, `p6.jsp`                                                                                            |
| Plan de carrera y descripción de puesto                        | `sse_g3_p9.jsp`, `p9_desc.jsp`                                                                                    |
| Objetivos, planes de desarrollo, preferencias y otros procesos | `p17*`, `p18*`, `p22*`, `ssco_g3_p11*`, `ssco_g3_p23*`, `ssco_g3_pdev*`, `ssco_evaluator_questions_gest_plan.jsp` |

Las familias con metadatos dinámicos conservan sus contratos y textos en fichas y diccionarios. Confirmar cuál función del menú las usa (P01); no deducir el significado de un número de página.

## Historial de puestos y carrera

El listado de puestos permite consultar periodos y detalle/DPT; la descripción muestra misión, responsabilidades, formación y conocimientos según variante. El plan de carrera muestra puestos, puesto actual/siguiente, mentor y periodos previstos. Las fuentes incluyen estado sin puesto en el plan. Los nombres y niveles son datos ERP; conservar disponibilidad y vínculos al detalle.

La comparación de competencias del responsable es una función relacionada, descrita en [talento SSM](../../responsable/talento/guia.md). No asumir que todo empleado puede editar su plan o ver el de otra persona.

## Formación

Recorrido: filtrar catálogo → consultar producto/curso y eventos → destinatarios/detalles → solicitar inscripción → consultar peticiones/formación → valorar curso/cuestionario → consultar certificado/documentación. Separar curso genérico, producto multimedia, evento y sesión: tienen identificadores y campos propios.

Las fichas contienen filtros, plazas, fechas, horas, lugar, catálogo, opciones, textos de ayuda y llamadas para inscripción. Un curso sin eventos/plazas y una solicitud pendiente son estados diferentes. La cancelación de inscripción o petición requiere confirmar método y estado que la permiten. Los documentos publicados y certificados necesitan P08.

Los cuestionarios pueden contener tipos de respuesta y opciones resueltos por nodos; no sustituirlos por una única escala inventada. Conservar respuestas, obligatoriedad y envío final según fuente y P02. Las valoraciones de eficacia por responsable tienen recorrido SSM propio.

## Evaluación: persona evaluada y persona evaluadora

El usuario puede actuar como evaluado y como evaluador sin ser un responsable jerárquico. El [manual, PDF 49](../../referencias/manuales.md#evaluación-y-tiempo-del-empleado), limita selección de evaluadores 360 a fase de fijación de criterios y condiciones de autoevaluación. Permite solicitar evaluador, consultar/borrar peticiones y ver criterios. Es regla del estándar a contrastar con configuración local.

Separar plan, proceso, participante, rol, criterio, objetivo, conocimiento y nivel. En criterios aparecen peso/importancia, nivel esperado/obtenido, magnitud, resultado y comentarios según tipo. Las definiciones y ayudas de nivel deben mantenerse. No mezclar objetivos cuantitativos y cualitativos ni hacer media simple cuando el método calcula ponderaciones.

El [manual, PDF 54](../../referencias/manuales.md#evaluación-y-tiempo-del-empleado), distingue evaluación de seguimiento de evaluación final y explica cierre de autoevaluación. Las pantallas de apertura/valoración y los scripts enlazados tienen fichas separadas: revisar qué fase habilita cada botón, qué guarda el borrador y qué cierra/envía el proceso (P02/P04). Tratar proceso inexistente, fase cerrada, criterio no editable y error de cálculo/envío.

## Objetivos, desarrollo, entrevistas y preferencias

Las fuentes adicionales incorporan definición/consulta de objetivos, planes de desarrollo y páginas de preferencias/procesos con cuerpos separados. El nombre del archivo no demuestra permiso de edición. Las dependencias y contratos de `p17`, `p18`, `p22`, `p23`, `pdev` y `p11` se conservan en el índice para verificar su entrada efectiva y correspondencia funcional.

Planes y acciones necesitan distinguir recomendación, asignación, seguimiento y cierre. Las entrevistas y preferencias enlazadas desde estos procesos no se sustituyen por conversaciones de chat. Compartir definiciones con el responsable solo donde nodos y permisos lo respalden.

## Movilidad interna

`p2` lista oportunidades/procesos; el detalle permite consultar descripción del puesto y los requisitos. La petición y su consulta tienen piezas propias. Estado de oportunidad, apertura del proceso, perfil requerido y posibilidad de retirar solicitud dependen del servidor. No reutilizar el alta de persona como candidatura/movilidad ni crear entidades autenticadas para candidatos.

## Aceptación

Probar cada recorrido completo: búsqueda vacía, filtro/retorno, detalle ausente, catálogo dependiente, evento sin plazas, petición pendiente, fase de evaluación cerrada, criterio inválido y documento faltante. Confirmar cálculo, envío, retirada, cierre y publicación por sociedad. El paso de empleado a evaluador se autoriza en servidor; las escrituras y transición de proceso permanecen P04 hasta contrato aprobado.
