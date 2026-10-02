# gta_planning_dynamic_css

Identificador: `css/gta_planning_dynamic_css.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/m4custom/COLL/css/gta_planning_dynamic_css.jsp) | `2b63b95d3f3d88dd0119f21b8f25c2d12513db26e21c95499d4216a6a24dc732` |    584 |
| BASE / compartido | [css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/css/gta_planning_dynamic_css.jsp)                             | `5f9c0c02d46e2d31709ee148983ca375a3c9aa22b84e461da04d7c6b0872dd82` |    587 |
| CYC / compartido  | [m4custom/CYC/css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/m4custom/CYC/css/gta_planning_dynamic_css.jsp)   | `2b63b95d3f3d88dd0119f21b8f25c2d12513db26e21c95499d4216a6a24dc732` |    584 |
| IBER / compartido | [m4custom/IBER/css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/m4custom/IBER/css/gta_planning_dynamic_css.jsp) | `2b63b95d3f3d88dd0119f21b8f25c2d12513db26e21c95499d4216a6a24dc732` |    584 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/m4custom/COLL/css/gta_planning_dynamic_css.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 7   | mss             | getParameter(request,"mss") |

| L   | Variable                | Expresión fuente                                                     | Resolución estática parcial                                                           |
| --- | ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 7   | mss                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                       |
| 10  | zsubsesion              | "SSE_GTA_PLAN"                                                       | SSE_GTA_PLAN                                                                          |
| 11  | zmeta4object            | "SSE_GTA_PLAN"                                                       | SSE_GTA_PLAN                                                                          |
| 12  | znodo10                 | "GTA_COLOR_CSS"                                                      | GTA_COLOR_CSS                                                                         |
| 13  | znodo11                 | "GTA_ALERT_GROUP"                                                    | GTA_ALERT_GROUP                                                                       |
| 14  | znodo12                 | "GTA_COLOR_TIMESLOTS"                                                | GTA_COLOR_TIMESLOTS                                                                   |
| 16  | zoutputdef10            | zsubsesion + "!" + znodo10 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[*]"}                                                 |
| 17  | zmove10                 | znodo10 + ":" +znodo10 + "[FIRST]"                                   | GTA_COLOR_CSS{":"}GTA_COLOR_CSS{"[FIRST]"}                                            |
| 18  | zlectura10              | znodo10 + ":" +zsubsesion + "!" + znodo10                            | GTA_COLOR_CSS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_CSS                                      |
| 19  | zcomun10                | znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + "." | GTA_COLOR_CSS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[&amp;VAR.m4lix]"}{"."}             |
| 21  | zoutputdef11            | zsubsesion + "!" + znodo11 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[*]"}                                               |
| 22  | zmove11                 | znodo11 + ":" +znodo11 + "[FIRST]"                                   | GTA_ALERT_GROUP{":"}GTA_ALERT_GROUP{"[FIRST]"}                                        |
| 23  | zlectura11              | znodo11 + ":" +zsubsesion + "!" + znodo11                            | GTA_ALERT_GROUP{":"}SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP                                  |
| 24  | zcomun11                | znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&amp;VAR.m4lix]" + "." | GTA_ALERT_GROUP{":"}SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[&amp;VAR.m4lix]"}{"."}         |
| 26  | zoutputdef12            | zsubsesion + "!" + znodo12 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[*]"}                                           |
| 27  | zmove12                 | znodo12 + ":" +znodo12 + "[FIRST]"                                   | GTA_COLOR_TIMESLOTS{":"}GTA_COLOR_TIMESLOTS{"[FIRST]"}                                |
| 28  | zlectura12              | znodo12 + ":" +zsubsesion + "!" + znodo12                            | GTA_COLOR_TIMESLOTS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS                          |
| 29  | zcomun12                | znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + "." | GTA_COLOR_TIMESLOTS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[&amp;VAR.m4lix]"}{"."} |
| 31  | zmetodocarga10          | "LOAD10:" + zsubsesion + "!GTA_COLOR_CSS.GTA_LOAD"                   | LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_CSS.GTA_LOAD"}                                      |
| 32  | zmetodocarga10          | "LOAD10:" + zsubsesion + "!GTA_COLOR_GROUP.GTA_LOAD"                 | LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_GROUP.GTA_LOAD"}                                    |
| 33  | zmetodocarga11          | "LOAD11:" + zsubsesion + "!GTA_ALERT_GROUP.GTA_LOAD"                 | LOAD11:{}SSE_GTA_PLAN{"!GTA_ALERT_GROUP.GTA_LOAD"}                                    |
| 34  | zmetodocarga12          | "LOAD12:" + zsubsesion + "!GTA_COLOR_TIMESLOTS.GTA_LOAD"             | LOAD12:{}SSE_GTA_PLAN{"!GTA_COLOR_TIMESLOTS.GTA_LOAD"}                                |
| 56  | zcounti10               | 0                                                                    | 0                                                                                     |
| 57  | zcount10                | 0                                                                    | 0                                                                                     |
| 58  | zcounti11               | 0                                                                    | 0                                                                                     |
| 59  | zcount11                | 0                                                                    | 0                                                                                     |
| 60  | zcounti12               | 0                                                                    | 0                                                                                     |
| 61  | zcount12                | 0                                                                    | 0                                                                                     |
| 74  | zcountv10               | String.valueOf(zcounti10)                                            | String.valueOf(zcounti10)                                                             |
| 75  | zcountv10Abs            | String.valueOf(zcounti10+1)                                          | {String.valueOf(zcounti10}{1)}                                                        |
| 76  | zcountv10bis            | String.valueOf(zcounti10+2)                                          | {String.valueOf(zcounti10}{2)}                                                        |
| 77  | zcountv11               | String.valueOf(zcounti11)                                            | String.valueOf(zcounti11)                                                             |
| 78  | zcountv12               | String.valueOf(zcounti12)                                            | String.valueOf(zcounti12)                                                             |
| 80  | classColor              | ""                                                                   |                                                                                       |
| 81  | className               | ""                                                                   |                                                                                       |
| 82  | classColorAlert         | ""                                                                   |                                                                                       |
| 83  | classColorAlertSeverity | ""                                                                   |                                                                                       |
| 84  | colorText               | "black"                                                              | black                                                                                 |
| 312 | blockAlert              | 0                                                                    | 0                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                              |
| --- | ------------ | ------------------------------------------------------------------------------- |
| 36  | m4:startpage | m4task=SSE_GTA_PLAN                                                             |
| 36  | m4:beginjob  |                                                                                 |
| 37  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                           |
| 45  | m4:exec      | m4method=LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_GROUP.GTA_LOAD"}                     |
| 46  | m4:exec      | m4method=LOAD11:{}SSE_GTA_PLAN{"!GTA_ALERT_GROUP.GTA_LOAD"}                     |
| 47  | m4:exec      | m4method=LOAD12:{}SSE_GTA_PLAN{"!GTA_COLOR_TIMESLOTS.GTA_LOAD"}                 |
| 48  | m4:outputdef | m4alias=GTA_COLOR_CSS                                                           |
| 48  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[*]"}                       |
| 49  | m4:outputdef | m4alias=GTA_ALERT_GROUP                                                         |
| 49  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[*]"}                     |
| 50  | m4:outputdef | m4alias=GTA_COLOR_TIMESLOTS                                                     |
| 50  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[*]"}                 |
| 51  | m4:endjob    |                                                                                 |
| 52  | m4:move      |                                                                                 |
| 52  | m4:param     | name=SSE_GTA_PLAN; value=GTA_COLOR_CSS{":"}GTA_COLOR_CSS{"[FIRST]"}             |
| 53  | m4:move      |                                                                                 |
| 53  | m4:param     | name=SSE_GTA_PLAN; value=GTA_ALERT_GROUP{":"}GTA_ALERT_GROUP{"[FIRST]"}         |
| 54  | m4:move      |                                                                                 |
| 54  | m4:param     | name=SSE_GTA_PLAN; value=GTA_COLOR_TIMESLOTS{":"}GTA_COLOR_TIMESLOTS{"[FIRST]"} |
| 180 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv10bis).intValue()-1).toString()       |
| 314 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv11).intValue()-1).toString()          |
| 550 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv12).intValue()-1).toString()          |
| 584 | m4:endpage   |                                                                                 |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 42  | setItem          | zsubsesion,znodo11,"","PROP_MSS_SIDE",mss                          |
| 66  | getCountInClient | znodo10,zsubsesion,znodo10                                         |
| 67  | getCount         | znodo10,zsubsesion,znodo10                                         |
| 68  | getCountInClient | znodo11,zsubsesion,znodo11                                         |
| 69  | getCount         | znodo11,zsubsesion,znodo11                                         |
| 70  | getCountInClient | znodo12,zsubsesion,znodo12                                         |
| 71  | getCount         | znodo12,zsubsesion,znodo12                                         |
| 197 | getItem          | znodo10,zmeta4object,znodo10,m4lix,"SCO_ID_COLOR"                  |
| 198 | getItem          | znodo10,zmeta4object,znodo10,m4lix,"CSS_CLASS"                     |
| 318 | getItem          | znodo11,zmeta4object,znodo11,m4lix,"SCO_HTML_ICON"                 |
| 319 | getItem          | znodo11,zmeta4object,znodo11,m4lix,"SCO_ID_ALERT_SEVERITY_LEVEL")) |
| 554 | getItem          | znodo12,zmeta4object,znodo12,m4lix,"SCO_TIMESLOT_TYPE_COLOR"       |
| 555 | getItem          | znodo12,zmeta4object,znodo12,m4lix,"SCO_ID_TIMESLOT_TYPE"          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                           |
| 183 | if (m4lix.equals(zcountv10) &#124;&#124; m4lix.equals(zcountv10Abs)) {                                                                                                             |
| 184 | if (m4lix.equals(zcountv10)) {                                                                                                                                                     |
| 189 | if (m4lix.equals(zcountv10Abs)) {                                                                                                                                                  |
| 194 | }else{                                                                                                                                                                             |
| 16  | expresión de cálculo/transformación: String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";                                                                                     |
| 17  | expresión de cálculo/transformación: String zmove10 = znodo10 + ":" +znodo10 + "[FIRST]";                                                                                          |
| 18  | expresión de cálculo/transformación: String zlectura10 = znodo10 + ":" +zsubsesion + "!" + znodo10;                                                                                |
| 19  | expresión de cálculo/transformación: String zcomun10 = znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 21  | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                                                                     |
| 22  | expresión de cálculo/transformación: String zmove11 = znodo11 + ":" +znodo11 + "[FIRST]";                                                                                          |
| 23  | expresión de cálculo/transformación: String zlectura11 = znodo11 + ":" +zsubsesion + "!" + znodo11;                                                                                |
| 24  | expresión de cálculo/transformación: String zcomun11 = znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 26  | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";                                                                                     |
| 27  | expresión de cálculo/transformación: String zmove12 = znodo12 + ":" +znodo12 + "[FIRST]";                                                                                          |
| 28  | expresión de cálculo/transformación: String zlectura12 = znodo12 + ":" +zsubsesion + "!" + znodo12;                                                                                |
| 29  | expresión de cálculo/transformación: String zcomun12 = znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 31  | expresión de cálculo/transformación: String zmetodocarga10 = "LOAD10:" + zsubsesion + "!GTA_COLOR_CSS.GTA_LOAD";                                                                   |
| 33  | expresión de cálculo/transformación: String zmetodocarga11 = "LOAD11:" + zsubsesion + "!GTA_ALERT_GROUP.GTA_LOAD";                                                                 |
| 34  | expresión de cálculo/transformación: String zmetodocarga12 = "LOAD12:" + zsubsesion + "!GTA_COLOR_TIMESLOTS.GTA_LOAD";                                                             |
| 319 | expresión de cálculo/transformación: classColorAlertSeverity = String.valueOf((int)Float.parseFloat(t.getItem(znodo11,zmeta4object,znodo11,m4lix,"SCO_ID_ALERT_SEVERITY_LEVEL"))); |
| 450 | expresión de cálculo/transformación: blockAlert = blockAlert + 1;                                                                                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [css/gta_planning_dynamic_css.jsp](../../../../clon_portal/portal/css/gta_planning_dynamic_css.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 7   | mss             | getParameter(request,"mss") |

| L   | Variable                | Expresión fuente                                                     | Resolución estática parcial                                                           |
| --- | ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 7   | mss                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                       |
| 10  | zsubsesion              | "SSE_GTA_PLAN"                                                       | SSE_GTA_PLAN                                                                          |
| 11  | zmeta4object            | "SSE_GTA_PLAN"                                                       | SSE_GTA_PLAN                                                                          |
| 12  | znodo10                 | "GTA_COLOR_CSS"                                                      | GTA_COLOR_CSS                                                                         |
| 13  | znodo11                 | "GTA_ALERT_GROUP"                                                    | GTA_ALERT_GROUP                                                                       |
| 14  | znodo12                 | "GTA_COLOR_TIMESLOTS"                                                | GTA_COLOR_TIMESLOTS                                                                   |
| 16  | zoutputdef10            | zsubsesion + "!" + znodo10 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[*]"}                                                 |
| 17  | zmove10                 | znodo10 + ":" +znodo10 + "[FIRST]"                                   | GTA_COLOR_CSS{":"}GTA_COLOR_CSS{"[FIRST]"}                                            |
| 18  | zlectura10              | znodo10 + ":" +zsubsesion + "!" + znodo10                            | GTA_COLOR_CSS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_CSS                                      |
| 19  | zcomun10                | znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + "." | GTA_COLOR_CSS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[&amp;VAR.m4lix]"}{"."}             |
| 21  | zoutputdef11            | zsubsesion + "!" + znodo11 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[*]"}                                               |
| 22  | zmove11                 | znodo11 + ":" +znodo11 + "[FIRST]"                                   | GTA_ALERT_GROUP{":"}GTA_ALERT_GROUP{"[FIRST]"}                                        |
| 23  | zlectura11              | znodo11 + ":" +zsubsesion + "!" + znodo11                            | GTA_ALERT_GROUP{":"}SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP                                  |
| 24  | zcomun11                | znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&amp;VAR.m4lix]" + "." | GTA_ALERT_GROUP{":"}SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[&amp;VAR.m4lix]"}{"."}         |
| 26  | zoutputdef12            | zsubsesion + "!" + znodo12 + "[*]"                                   | SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[*]"}                                           |
| 27  | zmove12                 | znodo12 + ":" +znodo12 + "[FIRST]"                                   | GTA_COLOR_TIMESLOTS{":"}GTA_COLOR_TIMESLOTS{"[FIRST]"}                                |
| 28  | zlectura12              | znodo12 + ":" +zsubsesion + "!" + znodo12                            | GTA_COLOR_TIMESLOTS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS                          |
| 29  | zcomun12                | znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + "." | GTA_COLOR_TIMESLOTS{":"}SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[&amp;VAR.m4lix]"}{"."} |
| 31  | zmetodocarga10          | "LOAD10:" + zsubsesion + "!GTA_COLOR_CSS.GTA_LOAD"                   | LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_CSS.GTA_LOAD"}                                      |
| 32  | zmetodocarga10          | "LOAD10:" + zsubsesion + "!GTA_COLOR_GROUP.GTA_LOAD"                 | LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_GROUP.GTA_LOAD"}                                    |
| 33  | zmetodocarga11          | "LOAD11:" + zsubsesion + "!GTA_ALERT_GROUP.GTA_LOAD"                 | LOAD11:{}SSE_GTA_PLAN{"!GTA_ALERT_GROUP.GTA_LOAD"}                                    |
| 34  | zmetodocarga12          | "LOAD12:" + zsubsesion + "!GTA_COLOR_TIMESLOTS.GTA_LOAD"             | LOAD12:{}SSE_GTA_PLAN{"!GTA_COLOR_TIMESLOTS.GTA_LOAD"}                                |
| 56  | zcounti10               | 0                                                                    | 0                                                                                     |
| 57  | zcount10                | 0                                                                    | 0                                                                                     |
| 58  | zcounti11               | 0                                                                    | 0                                                                                     |
| 59  | zcount11                | 0                                                                    | 0                                                                                     |
| 60  | zcounti12               | 0                                                                    | 0                                                                                     |
| 61  | zcount12                | 0                                                                    | 0                                                                                     |
| 74  | zcountv10               | String.valueOf(zcounti10)                                            | String.valueOf(zcounti10)                                                             |
| 75  | zcountv10Abs            | String.valueOf(zcounti10+1)                                          | {String.valueOf(zcounti10}{1)}                                                        |
| 76  | zcountv10bis            | String.valueOf(zcounti10+2)                                          | {String.valueOf(zcounti10}{2)}                                                        |
| 77  | zcountv11               | String.valueOf(zcounti11)                                            | String.valueOf(zcounti11)                                                             |
| 78  | zcountv12               | String.valueOf(zcounti12)                                            | String.valueOf(zcounti12)                                                             |
| 80  | classColor              | ""                                                                   |                                                                                       |
| 81  | className               | ""                                                                   |                                                                                       |
| 82  | classColorAlert         | ""                                                                   |                                                                                       |
| 83  | classColorAlertSeverity | ""                                                                   |                                                                                       |
| 84  | colorText               | "black"                                                              | black                                                                                 |
| 315 | blockAlert              | 0                                                                    | 0                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                              |
| --- | ------------ | ------------------------------------------------------------------------------- |
| 36  | m4:startpage | m4task=SSE_GTA_PLAN                                                             |
| 36  | m4:beginjob  |                                                                                 |
| 37  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                           |
| 45  | m4:exec      | m4method=LOAD10:{}SSE_GTA_PLAN{"!GTA_COLOR_GROUP.GTA_LOAD"}                     |
| 46  | m4:exec      | m4method=LOAD11:{}SSE_GTA_PLAN{"!GTA_ALERT_GROUP.GTA_LOAD"}                     |
| 47  | m4:exec      | m4method=LOAD12:{}SSE_GTA_PLAN{"!GTA_COLOR_TIMESLOTS.GTA_LOAD"}                 |
| 48  | m4:outputdef | m4alias=GTA_COLOR_CSS                                                           |
| 48  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_COLOR_CSS{"[*]"}                       |
| 49  | m4:outputdef | m4alias=GTA_ALERT_GROUP                                                         |
| 49  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_ALERT_GROUP{"[*]"}                     |
| 50  | m4:outputdef | m4alias=GTA_COLOR_TIMESLOTS                                                     |
| 50  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}GTA_COLOR_TIMESLOTS{"[*]"}                 |
| 51  | m4:endjob    |                                                                                 |
| 52  | m4:move      |                                                                                 |
| 52  | m4:param     | name=SSE_GTA_PLAN; value=GTA_COLOR_CSS{":"}GTA_COLOR_CSS{"[FIRST]"}             |
| 53  | m4:move      |                                                                                 |
| 53  | m4:param     | name=SSE_GTA_PLAN; value=GTA_ALERT_GROUP{":"}GTA_ALERT_GROUP{"[FIRST]"}         |
| 54  | m4:move      |                                                                                 |
| 54  | m4:param     | name=SSE_GTA_PLAN; value=GTA_COLOR_TIMESLOTS{":"}GTA_COLOR_TIMESLOTS{"[FIRST]"} |
| 183 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv10bis).intValue()-1).toString()       |
| 317 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv11).intValue()-1).toString()          |
| 553 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv12).intValue()-1).toString()          |
| 587 | m4:endpage   |                                                                                 |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 42  | setItem          | zsubsesion,znodo11,"","PROP_MSS_SIDE",mss                          |
| 66  | getCountInClient | znodo10,zsubsesion,znodo10                                         |
| 67  | getCount         | znodo10,zsubsesion,znodo10                                         |
| 68  | getCountInClient | znodo11,zsubsesion,znodo11                                         |
| 69  | getCount         | znodo11,zsubsesion,znodo11                                         |
| 70  | getCountInClient | znodo12,zsubsesion,znodo12                                         |
| 71  | getCount         | znodo12,zsubsesion,znodo12                                         |
| 200 | getItem          | znodo10,zmeta4object,znodo10,m4lix,"SCO_ID_COLOR"                  |
| 201 | getItem          | znodo10,zmeta4object,znodo10,m4lix,"CSS_CLASS"                     |
| 321 | getItem          | znodo11,zmeta4object,znodo11,m4lix,"SCO_HTML_ICON"                 |
| 322 | getItem          | znodo11,zmeta4object,znodo11,m4lix,"SCO_ID_ALERT_SEVERITY_LEVEL")) |
| 557 | getItem          | znodo12,zmeta4object,znodo12,m4lix,"SCO_TIMESLOT_TYPE_COLOR"       |
| 558 | getItem          | znodo12,zmeta4object,znodo12,m4lix,"SCO_ID_TIMESLOT_TYPE"          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                           |
| 186 | if (m4lix.equals(zcountv10) &#124;&#124; m4lix.equals(zcountv10Abs)) {                                                                                                             |
| 187 | if (m4lix.equals(zcountv10)) {                                                                                                                                                     |
| 192 | if (m4lix.equals(zcountv10Abs)) {                                                                                                                                                  |
| 197 | }else{                                                                                                                                                                             |
| 16  | expresión de cálculo/transformación: String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";                                                                                     |
| 17  | expresión de cálculo/transformación: String zmove10 = znodo10 + ":" +znodo10 + "[FIRST]";                                                                                          |
| 18  | expresión de cálculo/transformación: String zlectura10 = znodo10 + ":" +zsubsesion + "!" + znodo10;                                                                                |
| 19  | expresión de cálculo/transformación: String zcomun10 = znodo10 + ":" +zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 21  | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                                                                     |
| 22  | expresión de cálculo/transformación: String zmove11 = znodo11 + ":" +znodo11 + "[FIRST]";                                                                                          |
| 23  | expresión de cálculo/transformación: String zlectura11 = znodo11 + ":" +zsubsesion + "!" + znodo11;                                                                                |
| 24  | expresión de cálculo/transformación: String zcomun11 = znodo11 + ":" +zsubsesion + "!" + znodo11 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 26  | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";                                                                                     |
| 27  | expresión de cálculo/transformación: String zmove12 = znodo12 + ":" +znodo12 + "[FIRST]";                                                                                          |
| 28  | expresión de cálculo/transformación: String zlectura12 = znodo12 + ":" +zsubsesion + "!" + znodo12;                                                                                |
| 29  | expresión de cálculo/transformación: String zcomun12 = znodo12 + ":" +zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + ".";                                                       |
| 31  | expresión de cálculo/transformación: String zmetodocarga10 = "LOAD10:" + zsubsesion + "!GTA_COLOR_CSS.GTA_LOAD";                                                                   |
| 33  | expresión de cálculo/transformación: String zmetodocarga11 = "LOAD11:" + zsubsesion + "!GTA_ALERT_GROUP.GTA_LOAD";                                                                 |
| 34  | expresión de cálculo/transformación: String zmetodocarga12 = "LOAD12:" + zsubsesion + "!GTA_COLOR_TIMESLOTS.GTA_LOAD";                                                             |
| 322 | expresión de cálculo/transformación: classColorAlertSeverity = String.valueOf((int)Float.parseFloat(t.getItem(znodo11,zmeta4object,znodo11,m4lix,"SCO_ID_ALERT_SEVERITY_LEVEL"))); |
| 453 | expresión de cálculo/transformación: blockAlert = blockAlert + 1;                                                                                                                  |

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

- Confirmar exposición y permisos de `css/gta_planning_dynamic_css.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
