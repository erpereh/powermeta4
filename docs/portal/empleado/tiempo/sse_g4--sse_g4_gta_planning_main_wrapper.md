# sse_g4_gta_planning_main_wrapper

Identificador: `sse_g4/sse_g4_gta_planning_main_wrapper.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                                    | Ámbito | Diccionario                                                                                                 |
| --------------- | ---------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| main.counter    | Contadores                               | BASE   | [translations/mss_g4_gta_planning_es.properties:L77](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.firstName  | Nombre                                   | BASE   | [translations/mss_g4_gta_planning_es.properties:L80](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.id         | ID                                       | BASE   | [translations/mss_g4_gta_planning_es.properties:L78](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.lastName   | Apellidos                                | BASE   | [translations/mss_g4_gta_planning_es.properties:L79](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.selectDay  | Selección del día                        | BASE   | [translations/mss_g4_gta_planning_es.properties:L82](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.selectRow  | Selección de todos los días del empleado | BASE   | [translations/mss_g4_gta_planning_es.properties:L84](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.selectWeek | Selección de Semana                      | BASE   | [translations/mss_g4_gta_planning_es.properties:L81](../../referencias/literales/mss_g4_gta_planning_es.md) |
| main.total      | Total                                    | BASE   | [translations/mss_g4_gta_planning_es.properties:L83](../../referencias/literales/mss_g4_gta_planning_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp) | `11ce96bd2769a23c7568d122a5149e9a05777b1f3389ee5f0d33c6ac113b571d` |    497 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp)   | `11ce96bd2769a23c7568d122a5149e9a05777b1f3389ee5f0d33c6ac113b571d` |    497 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp) | `11ce96bd2769a23c7568d122a5149e9a05777b1f3389ee5f0d33c6ac113b571d` |    497 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp)                             | `11ce96bd2769a23c7568d122a5149e9a05777b1f3389ee5f0d33c6ac113b571d` |    497 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 37  | [valor dinámico] /[valor dinámico],[valor dinámico]                                                                                          |
| 113 | " name=" " class="daycolumn" align="center"title="[valor dinámico]" onContextMenu="unSelectColumn(this);" onclick="selectColumn(this);" &gt; |
| 136 | [valor dinámico]:00                                                                                                                          |
| 183 | -Total" class="totcol"&gt;0                                                                                                                  |
| 185 | 0                                                                                                                                            |
| 314 | /[valor dinámico],[valor dinámico]                                                                                                           |
| 466 | 0                                                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 109 | input   | title=Tout Valider; id=controlAllAlertSeverity; name=controlAllAlertSeverity; class=checkboxValidation; type=checkbox; onclick=controlAllAlertSeverity();; value=                                                                                                                  |
| 316 | input   | title=à Valider; id=check_td&lt;%=idOrd%&gt;; name=check_td&lt;%=idOrd%&gt;; class=checkboxValidation; type=checkbox; onclick=controlValidationChecking(peopleArray['&lt;%=idOrd%&gt;']);                                                                                          |
| 320 | img     | id=&lt;%=idOrd%&gt;; class=clickAble; src=/iconos/user_add.png; alt=; title=JSP_EXPR_Tran_mss_g4_gta_planning.getProperty(; onmouseover=m4luztotal(this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this); onclick=selectRow(this); oncontextmenu=unSelectRow(this); |
| 324 | img     | id=infos&#124;&lt;%=idOrd%&gt;; src=/iconos/infos.gif; class=helpAble; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                                |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                | Resolución estática parcial                      |
| --- | ---------------------- | ----------------------------------------------- | ------------------------------------------------ |
| 5   | zregistroinicials      | String.valueOf(zregistroinicial)                | String.valueOf(zregistroinicial)                 |
| 6   | zregistrofinals        | String.valueOf(zregistroinicial + zcounti1 - 1) | {String.valueOf(zregistroinicial}{zcounti1 - 1)} |
| 8   | currentWeek            | ""                                              |                                                  |
| 9   | newWeek                | ""                                              |                                                  |
| 10  | currentStartWeekDate   | ""                                              |                                                  |
| 11  | currentEndWeekDate     | ""                                              |                                                  |
| 12  | startWeekDate          | ""                                              |                                                  |
| 13  | endWeekDate            | ""                                              |                                                  |
| 14  | weekColSpan            | 0                                               | 0                                                |
| 23  | zposicions             | "0"                                             | 0                                                |
| 24  | zcontrol               | 0                                               | 0                                                |
| 25  | zposicion              | 0                                               | 0                                                |
| 147 | number                 | 0                                               | 0                                                |
| 192 | currentId              | ""                                              |                                                  |
| 193 | idPers                 | ""                                              |                                                  |
| 194 | idPersEncrypt          | ""                                              |                                                  |
| 195 | startDate              | ""                                              |                                                  |
| 196 | cellId                 | ""                                              |                                                  |
| 197 | idOrd                  | ""                                              |                                                  |
| 198 | dayManagement          | ""                                              |                                                  |
| 199 | dayIdDayType           | ""                                              |                                                  |
| 200 | dayIdStatus            | ""                                              |                                                  |
| 201 | startWeek              | ""                                              |                                                  |
| 202 | endWeek                | ""                                              |                                                  |
| 203 | cssWeek                | ""                                              |                                                  |
| 204 | startCycle             | ""                                              |                                                  |
| 205 | endCycle               | ""                                              |                                                  |
| 206 | cssCycle               | ""                                              |                                                  |
| 207 | we                     | ""                                              |                                                  |
| 208 | ordinal                | ""                                              |                                                  |
| 209 | ordPeriod              | ""                                              |                                                  |
| 210 | currentOrdPeriod       | ""                                              |                                                  |
| 211 | cssDay                 | ""                                              |                                                  |
| 212 | forEndDisplayOrdPeriod | ""                                              |                                                  |
| 213 | forEndDisplayId        | ""                                              |                                                  |
| 214 | currentSort            | ""                                              |                                                  |
| 215 | tabIndex               | "0"                                             | 0                                                |
| 216 | affectTooltip          | "0"                                             | 0                                                |
| 217 | ordinalRow             | 0                                               | 0                                                |
| 218 | ordinalRowIndex        | ""                                              |                                                  |
| 219 | stringHours            | ""                                              |                                                  |
| 220 | doubleMinutes          | 0                                               | 0                                                |
| 221 | dayValidation          | ""                                              |                                                  |
| 222 | mainSort               | ""                                              |                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag     | Contrato declarado                                                                         |
| --- | ------- | ------------------------------------------------------------------------------------------ |
| 39  | m4:loop | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                      |
| 112 | m4:loop | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                      |
| 113 | m4:item | m4name=dateHeader                                                                          |
| 115 | m4:item | m4name=dateHeader                                                                          |
| 117 | m4:item | m4name=dayHeader                                                                           |
| 121 | m4:item | m4name=dateHeader                                                                          |
| 182 | m4:loop | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                      |
| 224 | m4:loop | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti1 - 1)} |
| 325 | m4:item | m4name=idPerson                                                                            |
| 359 | m4:item | m4name=day                                                                                 |
| 369 | m4:item | m4name=hours                                                                               |
| 385 | m4:item | m4name=timeSlotText                                                                        |
| 427 | m4:item | m4name=day                                                                                 |
| 437 | m4:item | m4name=hours                                                                               |
| 453 | m4:item | m4name=timeSlotText                                                                        |

| L   | Operación | Argumentos literales                                          |
| --- | --------- | ------------------------------------------------------------- |
| 43  | getItem   | znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK"))                 |
| 44  | getItem   | znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK_START_DATE"        |
| 46  | getItem   | znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK_END_DATE"          |
| 233 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"STD_ID_HR"                  |
| 235 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"STD_OR_HR_PERIOD"))         |
| 236 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_MAIN_SORT"              |
| 237 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SCO_MANAGEMENT_BY_DAYS"     |
| 238 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_GET_VALIDATION"         |
| 239 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SCO_ID_STATUS"))            |
| 240 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SCO_ID_DAY_TYPE"            |
| 241 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"DT_START"                   |
| 246 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_TOOLTIP"                |
| 248 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_GET_CSS"                |
| 250 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_WEEK_CSS"               |
| 252 | getItem   | znodo1,zmeta4object,znodo1,m4lix,"SSE_CYCLE_CSS"              |
| 290 | getItem   | znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C1" |
| 291 | getItem   | znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C2" |
| 292 | getItem   | znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C3" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | &lt;% if (zcounti1 &gt; 0) {                                                                                                                          |
| 31  | &lt;%if(counterC1.equals("")&amp;&amp;counterC2.equals("")&amp;&amp;counterC3.equals("")){%&gt;                                                       |
| 33  | &lt;%}else{%&gt;                                                                                                                                      |
| 49  | if(newWeek.equals(currentWeek)&#124;&#124;m4lix.equals("0")){                                                                                         |
| 54  | }else{                                                                                                                                                |
| 79  | &lt;%if(counterC1.equals("")&amp;&amp;counterC2.equals("")&amp;&amp;counterC3.equals("")){%&gt;                                                       |
| 81  | &lt;%}else{%&gt;                                                                                                                                      |
| 85  | &lt;%if(!counterC1.equals("")){%&gt;                                                                                                                  |
| 91  | &lt;%if(!counterC2.equals("")){%&gt;                                                                                                                  |
| 97  | &lt;%if(!counterC3.equals("")){%&gt;                                                                                                                  |
| 114 | &lt;%if (viewType.equals("Day")&#124;&#124;viewType.equals("Week")){%&gt;                                                                             |
| 116 | &lt;%}else{%&gt;                                                                                                                                      |
| 125 | &lt;%if(checkTotal.equals("Y")){%&gt;                                                                                                                 |
| 127 | &lt;%}else{%&gt;                                                                                                                                      |
| 132 | &lt;%if(viewType.equals("Day")){//Test:DisplayTimeslotsfor"DayView"%&gt;                                                                              |
| 154 | &lt;%if(debutHeure==23){                                                                                                                              |
| 156 | }else{                                                                                                                                                |
| 178 | &lt;%if(checkTotal.equals("Y")){%&gt;                                                                                                                 |
| 256 | if(!currentId.equals(idPers)&#124;&#124;!currentOrdPeriod.equals(ordPeriod)){                                                                         |
| 264 | if(!zposicions.equals(zregistroinicials)){%&gt;                                                                                                       |
| 266 | &lt;%if(checkTotal.equals("Y")){%&gt;                                                                                                                 |
| 268 | &lt;%}else{%&gt;                                                                                                                                      |
| 277 | if(!mainSort.equals(currentSort)){                                                                                                                    |
| 285 | &lt;%if(counterC1.equals("")&amp;&amp;counterC2.equals("")&amp;&amp;counterC3.equals("")){%&gt;                                                       |
| 287 | &lt;%}else{                                                                                                                                           |
| 299 | &lt;%if(!counterC1.equals("")){%&gt;                                                                                                                  |
| 302 | &lt;%if(!counterC2.equals("")){%&gt;                                                                                                                  |
| 305 | &lt;%if(!counterC3.equals("")){%&gt;                                                                                                                  |
| 318 | &lt;%if(mss.equals("1")&amp;&amp;!viewType.equals("Day")){%&gt;                                                                                       |
| 337 | if(displayCycle.equals("yes")){//Test:DisplayCycleBar%&gt;                                                                                            |
| 344 | if(displayWeek.equals("yes")){//Test:DisplayWeekBar%&gt;                                                                                              |
| 357 | if(!viewType.equals("Month")){                                                                                                                        |
| 362 | &lt;%if(viewType.equals("Week")){//manageDayType%&gt;                                                                                                 |
| 374 | &lt;%if(affectTooltip.equals("1")){//ifweneedtooltip%&gt;                                                                                             |
| 382 | &lt;%if(viewType.equals("Week")){%&gt;                                                                                                                |
| 391 | if(viewType.equals("Day")){%&gt;                                                                                                                      |
| 399 | &lt;%}else{%&gt;                                                                                                                                      |
| 404 | if(displayCycle.equals("yes")){//Test:DisplayCycleBar%&gt;                                                                                            |
| 411 | if(displayWeek.equals("yes")){//Test:DisplayWeekBar%&gt;                                                                                              |
| 425 | if(!viewType.equals("Month")){                                                                                                                        |
| 430 | &lt;%if(viewType.equals("Week")){//manageDayType%&gt;                                                                                                 |
| 442 | &lt;%if(affectTooltip.equals("1")){//ifweneedtooltip%&gt;                                                                                             |
| 450 | &lt;%if(viewType.equals("Week")){%&gt;                                                                                                                |
| 463 | &lt;%if(zposicions.equals(zregistrofinals)){%&gt;                                                                                                     |
| 465 | &lt;%if(checkTotal.equals("Y")){%&gt;                                                                                                                 |
| 467 | &lt;%}else{%&gt;                                                                                                                                      |
| 487 | &lt;%}else{%&gt;                                                                                                                                      |
| 6   | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti1 - 1);                                        |
| 43  | expresión de cálculo/transformación: newWeek=String.valueOf((int)Float.parseFloat(t.getItem(znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK")));           |
| 74  | expresión de cálculo/transformación: var taille=parseInt((document.body.clientWidth-300)/nombre);//350                                                |
| 235 | expresión de cálculo/transformación: ordPeriod=String.valueOf((int)Float.parseFloat(t.getItem(znodo1,zmeta4object,znodo1,m4lix,"STD_OR_HR_PERIOD"))); |
| 239 | expresión de cálculo/transformación: dayIdStatus=String.valueOf((int)Float.parseFloat(t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SCO_ID_STATUS")));  |

### Includes, navegación y dependencias

| L   | Include                                                       |
| --- | ------------------------------------------------------------- |
| 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       |
| 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       |
| 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        |
| 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 320 | /iconos/user_add.png                                          |
| 324 | /iconos/infos.gif                                             |
| 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       |
| 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       |
| 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        |
| 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                                                  |
| ------ | --- | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| COLL   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| COLL   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| COLL   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| COLL   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| COLL   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| COLL   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| COLL   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| COLL   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| CYC    | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| CYC    | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| CYC    | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| CYC    | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| CYC    | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| CYC    | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| CYC    | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| CYC    | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| IBER   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| IBER   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| IBER   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| IBER   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| IBER   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| IBER   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| IBER   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| IBER   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| BASE   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| BASE   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| BASE   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| BASE   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |
| BASE   | 17  | ../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp       | física     | [sse_g4/sse_g4_gta_planning_pagination.jsp](sse_g4--sse_g4_gta_planning_pagination.md)             |
| BASE   | 19  | ../../sse_g4/espanol/sse_g4_gta_planning_population.jsp       | física     | [sse_g4/sse_g4_gta_planning_population.jsp](sse_g4--sse_g4_gta_planning_population.md)             |
| BASE   | 392 | ../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp        | física     | [sse_g4/sse_g4_gta_planning_timeslots.jsp](sse_g4--sse_g4_gta_planning_timeslots.md)               |
| BASE   | 489 | ../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp | física     | [sse_g4/sse_g4_gta_planning_pagination_empty.jsp](sse_g4--sse_g4_gta_planning_pagination_empty.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_main_wrapper.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
