# sse_g4_gta_planning_modify_day

Identificador: `sse_g4/sse_g4_gta_planning_modify_day.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp) | `3bacdcdd163ef47432274e34217c4e63ec86fc0d26174b078da6e34a4d71a3aa` |     70 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp)   | `3bacdcdd163ef47432274e34217c4e63ec86fc0d26174b078da6e34a4d71a3aa` |     70 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp) | `3bacdcdd163ef47432274e34217c4e63ec86fc0d26174b078da6e34a4d71a3aa` |     70 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp)                             | `3bacdcdd163ef47432274e34217c4e63ec86fc0d26174b078da6e34a4d71a3aa` |     70 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_modify_day.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                           |
| --- | ---------------- | ---------------------------------------- |
| 10  | ARG_ID_HR        | getParameter(request,"ARG_ID_HR")        |
| 12  | ARG_OR_PERIOD    | getParameter(request,"ARG_OR_PERIOD")    |
| 13  | ARG_DATE         | getParameter(request,"ARG_DATE")         |
| 16  | ARG_DAY_TYPE     | getParameter(request,"ARG_DAY_TYPE")     |
| 17  | ARG_NB_HOURS     | getParameter(request,"ARG_NB_HOURS")     |
| 18  | ARG_ID_TIMETABLE | getParameter(request,"ARG_ID_TIMETABLE") |

| L   | Variable           | Expresión fuente                                                             | Resolución estática parcial                                                  |
| --- | ------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 10  | idHr               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")        |
| 12  | orPeriod           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")    |
| 13  | dateParam          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")         |
| 16  | idDayTypeParam     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DAY_TYPE")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DAY_TYPE")     |
| 17  | nbHoursParam       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_NB_HOURS")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_NB_HOURS")     |
| 18  | idTimetable        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_TIMETABLE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_TIMETABLE") |
| 28  | zsubsesion         | "SSE_GTA_PLAN"                                                               | SSE_GTA_PLAN                                                                 |
| 29  | zmeta4object       | "SSE_GTA_PLAN"                                                               | SSE_GTA_PLAN                                                                 |
| 30  | znodo              | "SSE_GTA_PLAN"                                                               | SSE_GTA_PLAN                                                                 |
| 32  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                             | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                         |
| 33  | zmove              | znodo + ":" +znodo + "[FIRST]"                                               | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                     |
| 34  | zlectura           | znodo + ":" +zsubsesion + "!" + znodo                                        | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN                               |
| 35  | zcomun             | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."             | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[&amp;VAR.m4lix]"}{"."}      |
| 36  | modifyDay          | "modifyDay:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MODIFY_DAY"                   | modifyDay:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_MODIFY_DAY"}                     |
| 54  | executeJavascripts | ""                                                                           |                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                        |
| --- | ------------ | --------------------------------------------------------------------------------------------------------- |
| 39  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                       |
| 39  | m4:beginjob  |                                                                                                           |
| 40  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                                     |
| 41  | m4:exec      | m4method=modifyDay:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_MODIFY_DAY"}                                         |
| 42  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")               |
| 43  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")       |
| 44  | m4:param     | name=ARG_DATE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")                 |
| 45  | m4:param     | name=ARG_DAY_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DAY_TYPE")         |
| 46  | m4:param     | name=ARG_NB_HOURS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_NB_HOURS")         |
| 47  | m4:param     | name=ARG_ID_TIMETABLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_TIMETABLE") |
| 49  | m4:outputdef | m4alias=SSE_GTA_PLAN                                                                                      |
| 49  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                                  |
| 50  | m4:endjob    |                                                                                                           |
| 51  | m4:move      |                                                                                                           |
| 51  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                         |
| 68  | m4:endpage   |                                                                                                           |

| L   | Operación | Argumentos literales                          |
| --- | --------- | --------------------------------------------- |
| 57  | getItem   | znodo,zmeta4object,znodo,"","SSE_JAVASCRIPTS" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((idHr==null)&#124;&#124;(idHr.equals(""))){idHr="";}                                                               |
| 22  | if ((orPeriod==null)&#124;&#124;(orPeriod.equals(""))){orPeriod = "";}                                                 |
| 23  | if ((dateParam==null)&#124;&#124;(dateParam.equals(""))){dateParam = "";}                                              |
| 24  | if ((idDayTypeParam==null)&#124;&#124;(idDayTypeParam.equals(""))){idDayTypeParam="";}                                 |
| 25  | if ((nbHoursParam==null)&#124;&#124;(nbHoursParam.equals(""))){nbHoursParam="";}                                       |
| 26  | if ((idTimetable==null)&#124;&#124;(idTimetable.equals(""))){idTimetable="";}                                          |
| 32  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                             |
| 33  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                    |
| 34  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                          |
| 35  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 36  | expresión de cálculo/transformación: String modifyDay = "modifyDay:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MODIFY_DAY";    |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_modify_day.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
