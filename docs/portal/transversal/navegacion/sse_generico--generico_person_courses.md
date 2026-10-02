# ESS Portal

Identificador: `sse_generico/generico_person_courses.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_person_courses.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_person_courses.jsp) | `40812ff62302ad0baa6f7523d6163d9e0b985bea86dc34edf9191b656ece7bc1` |     65 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_person_courses.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_person_courses.jsp)   | `40812ff62302ad0baa6f7523d6163d9e0b985bea86dc34edf9191b656ece7bc1` |     65 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_person_courses.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_person_courses.jsp) | `40812ff62302ad0baa6f7523d6163d9e0b985bea86dc34edf9191b656ece7bc1` |     65 |
| BASE / español    | [sse_generico/espanol/generico_person_courses.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_person_courses.jsp)                             | `40812ff62302ad0baa6f7523d6163d9e0b985bea86dc34edf9191b656ece7bc1` |     65 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_person_courses.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_person_courses.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 7   | ESS Portal               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                              |
| --- | ------- | -------------------------------------- |
| 58  | form    | name=call_knownetlight; method=POST    |
| 59  | input   | type=hidden; name=Knownet_task; value= |
| 60  | input   | type=hidden; name=_URL; value=         |
| 61  | input   | type=hidden; name=From_mail; value=    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 12  | estado          | getParameter(request,"estado")       |
| 17  | aux_provider    | getBagEntries("aux_provider")        |
| 18  | Knownet_task    | getParameter(request,"Knownet_task") |

| L   | Variable       | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 12  | estado         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       |
| 17  | aux_provider   | zsesion.getBagEntries("aux_provider")                                    | zsesion.getBagEntries("aux_provider")                                    |
| 18  | Knownet_task   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task") |
| 32  | Courses_string | ""                                                                       |                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                             |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 22  | m4:startpage | m4task=COURSES                                                                                                                 |
| 23  | m4:beginjob  |                                                                                                                                |
| 24  | m4:datadef   | m4o=SSE_PERSON_COURSES; m4name=COURSES                                                                                         |
| 25  | m4:exec      | m4method=COURSES!SSE_PERSON_COURSES.INIT_LOAD                                                                                  |
| 26  | m4:outputdef | m4alias=DATA1                                                                                                                  |
| 26  | m4:param     | name=M4NAME0; value=COURSES!SSE_PERSON_COURSES[*]                                                                              |
| 27  | m4:endjob    |                                                                                                                                |
| 54  | m4:crosslink | uri=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task"); idprovider=zsesion.getBagEntries("aux_provider") |
| 64  | m4:endpage   |                                                                                                                                |

| L   | Operación | Argumentos literales                                       |
| --- | --------- | ---------------------------------------------------------- |
| 35  | getItem   | "DATA1","COURSES","SSE_PERSON_COURSES","","COURSES_STRING" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                         | Argumentos |
| --- | ------------------------------- | ---------- |
| 51  | goto_generico_call_knownetlight |            |

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 19  | expresión de cálculo/transformación: Knownet_task= "/servlet/CheckSecurity/JSP/" + Knownet_task;           |
| 43  | expresión de cálculo/transformación: Courses_string = URLEncoder.encode("" + Courses_string);              |
| 44  | expresión de cálculo/transformación: Courses_string = URLEncoder.encode("" + Courses_string);              |
| 45  | expresión de cálculo/transformación: Courses_string = URLEncoder.encode("" + Courses_string);              |
| 46  | expresión de cálculo/transformación: Knownet_task = Knownet_task + "&amp;Courses_string="+ Courses_string; |
| 47  | expresión de cálculo/transformación: Knownet_task = URLEncoder.encode("" + Knownet_task);                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso     |
| --- | --------------------- |
| 8   | /css/estilo_sse.css   |
| 54  | &lt;m4:crosslink uri= |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_person_courses.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
