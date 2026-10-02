# sse_g4_gta_planning_get_tooltip_informations

Identificador: `sse_g4/sse_g4_gta_planning_get_tooltip_informations.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Clave                 | Texto                    | Ámbito | Diccionario                                                                                                  |
| --------------------- | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------ |
| tooltip.absence       | Ausencia otros empleados | BASE   | [translations/mss_g4_gta_planning_es.properties:L199](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltip.publicHoliday | Día festivo              | BASE   | [translations/mss_g4_gta_planning_es.properties:L198](../../referencias/literales/mss_g4_gta_planning_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp) | `1ae137abbfa995243be3869a787589ad6a905b27a65f620cd623ff8001dd44c6` |    227 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp)   | `1ae137abbfa995243be3869a787589ad6a905b27a65f620cd623ff8001dd44c6` |    227 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp) | `1ae137abbfa995243be3869a787589ad6a905b27a65f620cd623ff8001dd44c6` |    227 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp)                             | `1ae137abbfa995243be3869a787589ad6a905b27a65f620cd623ff8001dd44c6` |    227 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_informations.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 139 | : [valor dinámico]       |
| 154 | : [valor dinámico]       |
| 158 | "&gt;                    |
| 160 | :                        |
| 175 | : [valor dinámico]       |
| 183 | " &gt;                   |
| 186 | :                        |
| 196 | " &gt;                   |
| 199 | :                        |
| 211 | .png"/&gt;               |
| 214 | :                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                       |
| --- | ------- | ------------------------------- |
| 173 | img     | src=/iconos/Valid.png           |
| 184 | img     | src=/iconos/Valid.png           |
| 197 | img     | src=/iconos/Valid.png           |
| 212 | img     | src=/iconos/&lt;m4:item m4name= |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 8   | lang            | getBagEntries("lang")                 |
| 18  | zIdPerson       | getBagEntries("zIdPerson")            |
| 21  | ARG_DATE        | getParameter(request,"ARG_DATE")      |
| 22  | ARG_ID_HR       | getParameter(request,"ARG_ID_HR")     |
| 23  | ARG_OR_PERIOD   | getParameter(request,"ARG_OR_PERIOD") |
| 24  | ARG_CLASSNAME   | getParameter(request,"ARG_CLASSNAME") |
| 25  | ARG_MSS         | getParameter(request,"ARG_MSS")       |

| L   | Variable                     | Expresión fuente                                                             | Resolución estática parcial                                                                                     |
| --- | ---------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 8   | zlanguser                    | zsesionGTA.getBagEntries("lang")                                             | zsesionGTA.getBagEntries("lang")                                                                                |
| 18  | idSessionPerson              | zsesion.getBagEntries("zIdPerson")                                           | zsesion.getBagEntries("zIdPerson")                                                                              |
| 21  | argDate                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")                                            |
| 22  | argHR                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")                                           |
| 23  | argOrdPerid                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")                                       |
| 24  | argClassName                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_CLASSNAME")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_CLASSNAME")                                       |
| 25  | argMss                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_MSS")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_MSS")                                             |
| 34  | zsubsesion                   | "SSE_GTA_PLAN"                                                               | SSE_GTA_PLAN                                                                                                    |
| 35  | zmeta4object                 | "SSE_GTA_PLAN"                                                               | SSE_GTA_PLAN                                                                                                    |
| 36  | znodo                        | "SSE_INCIDENCE_REAL"                                                         | SSE_INCIDENCE_REAL                                                                                              |
| 37  | znodo1                       | "SSE_GTA_ALERTS"                                                             | SSE_GTA_ALERTS                                                                                                  |
| 38  | znodo2                       | "SSE_INCIDENCE_WAITING"                                                      | SSE_INCIDENCE_WAITING                                                                                           |
| 39  | znodo3                       | "SSE_ATTENDANCE_WAITING"                                                     | SSE_ATTENDANCE_WAITING                                                                                          |
| 41  | zoutputdef                   | zsubsesion + "!" + znodo + "[*]"                                             | SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[*]"}                                                                      |
| 42  | zmove                        | znodo + ":" +znodo + "[FIRST]"                                               | SSE_INCIDENCE_REAL{":"}SSE_INCIDENCE_REAL{"[FIRST]"}                                                            |
| 43  | zlectura                     | znodo + ":" +zsubsesion + "!" + znodo                                        | SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL                                                      |
| 44  | zcomun                       | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."             | SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[&amp;VAR.m4lix]"}{"."}                             |
| 45  | zraiz                        | znodo + ":" + zsubsesion + "!" + znodo + "."                                 | SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"."}                                                 |
| 47  | zoutputdef1                  | zsubsesion + "!" + znodo1 + "[*]"                                            | SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[*]"}                                                                          |
| 48  | zmove1                       | znodo1 + ":" +znodo1 + "[FIRST]"                                             | SSE_GTA_ALERTS{":"}SSE_GTA_ALERTS{"[FIRST]"}                                                                    |
| 49  | zlectura1                    | znodo1 + ":" +zsubsesion + "!" + znodo1                                      | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS                                                              |
| 50  | zcomun1                      | znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."           | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}                                     |
| 51  | zraiz1                       | znodo1 + ":" + zsubsesion + "!" + znodo1 + "."                               | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"."}                                                         |
| 53  | zoutputdef2                  | zsubsesion + "!" + znodo2 + "[*]"                                            | SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[*]"}                                                                   |
| 54  | zmove2                       | znodo2 + ":" +znodo2 + "[FIRST]"                                             | SSE_INCIDENCE_WAITING{":"}SSE_INCIDENCE_WAITING{"[FIRST]"}                                                      |
| 55  | zlectura2                    | znodo2 + ":" +zsubsesion + "!" + znodo2                                      | SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING                                                |
| 56  | zcomun2                      | znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."           | SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[&amp;VAR.m4lix]"}{"."}                       |
| 57  | zraiz2                       | znodo2 + ":" + zsubsesion + "!" + znodo2 + "."                               | SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"."}                                           |
| 59  | zoutputdef3                  | zsubsesion + "!" + znodo3 + "[*]"                                            | SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[*]"}                                                                  |
| 60  | zmove3                       | znodo3 + ":" +znodo3 + "[FIRST]"                                             | SSE_ATTENDANCE_WAITING{":"}SSE_ATTENDANCE_WAITING{"[FIRST]"}                                                    |
| 61  | zlectura3                    | znodo3 + ":" +zsubsesion + "!" + znodo3                                      | SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING                                              |
| 62  | zcomun3                      | znodo3 + ":" +zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."           | SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[&amp;VAR.m4lix]"}{"."}                     |
| 63  | zraiz3                       | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                               | SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"."}                                         |
| 65  | getInfoMethod                | "LOAD_DAY_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_TOOLTIP_INFOS" | LOAD_DAY_TOOLTIP:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_DAY_TOOLTIP_INFOS"}                                      |
| 69  | nmIncidence                  | zcomun + "SCO_NM_INCIDENCE"                                                  | SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}         |
| 70  | incColor                     | zcomun + "SCO_ID_COLOR"                                                      | SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_COLOR"}             |
| 72  | nmIncidencePending           | zcomun2 + "SCO_NM_INCIDENCE"                                                 | SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}   |
| 73  | incColorPending              | zcomun2 + "SCO_ID_COLOR"                                                     | SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_COLOR"}       |
| 75  | nmIncidencePendingAttendance | zcomun3 + "SCO_NM_INCIDENCE"                                                 | SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 76  | incColorPendingAttendance    | zcomun3 + "SCO_ID_COLOR"                                                     | SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_COLOR"}     |
| 78  | nmAlert                      | zcomun1 + "SCO_NM_ALERT_SEVERITY_LEVEL"                                      | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ALERT_SEVERITY_LEVEL"}      |
| 79  | descAlert                    | zcomun1 + "SCO_TEXT"                                                         | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}{"SCO_TEXT"}                         |
| 80  | imgAlert                     | zcomun1 + "SCO_HTML_ICON"                                                    | SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTML_ICON"}                    |
| 100 | zcount                       | 0                                                                            | 0                                                                                                               |
| 101 | zcounti                      | 0                                                                            | 0                                                                                                               |
| 102 | zcountv                      | "0"                                                                          | 0                                                                                                               |
| 103 | zcount1                      | 0                                                                            | 0                                                                                                               |
| 104 | zcounti1                     | 0                                                                            | 0                                                                                                               |
| 105 | zcountv1                     | "0"                                                                          | 0                                                                                                               |
| 106 | zcount2                      | 0                                                                            | 0                                                                                                               |
| 107 | zcounti2                     | 0                                                                            | 0                                                                                                               |
| 108 | zcountv2                     | "0"                                                                          | 0                                                                                                               |
| 109 | zcount3                      | 0                                                                            | 0                                                                                                               |
| 110 | zcounti3                     | 0                                                                            | 0                                                                                                               |
| 111 | zcountv3                     | "0"                                                                          | 0                                                                                                               |
| 112 | incidenceType                | ""                                                                           |                                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 83  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                                    |
| 83  | m4:beginjob  |                                                                                                                        |
| 84  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                                                  |
| 85  | m4:exec      | m4method=LOAD_DAY_TOOLTIP:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_DAY_TOOLTIP_INFOS"}                                    |
| 86  | m4:param     | name=ARG_DATE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")                              |
| 87  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")                            |
| 88  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")                    |
| 90  | m4:outputdef | m4alias=SSE_INCIDENCE_REAL                                                                                             |
| 90  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[*]"}                                                         |
| 91  | m4:outputdef | m4alias=SSE_GTA_ALERTS                                                                                                 |
| 91  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[*]"}                                                             |
| 92  | m4:outputdef | m4alias=SSE_INCIDENCE_WAITING                                                                                          |
| 92  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[*]"}                                                      |
| 93  | m4:outputdef | m4alias=SSE_ATTENDANCE_WAITING                                                                                         |
| 93  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[*]"}                                                     |
| 94  | m4:endjob    |                                                                                                                        |
| 95  | m4:move      |                                                                                                                        |
| 95  | m4:param     | name=SSE_GTA_PLAN; value=SSE_INCIDENCE_REAL{":"}SSE_INCIDENCE_REAL{"[FIRST]"}                                          |
| 96  | m4:move      |                                                                                                                        |
| 96  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_ALERTS{":"}SSE_GTA_ALERTS{"[FIRST]"}                                                  |
| 97  | m4:move      |                                                                                                                        |
| 97  | m4:param     | name=SSE_GTA_PLAN; value=SSE_INCIDENCE_WAITING{":"}SSE_INCIDENCE_WAITING{"[FIRST]"}                                    |
| 98  | m4:move      |                                                                                                                        |
| 98  | m4:param     | name=SSE_GTA_PLAN; value=SSE_ATTENDANCE_WAITING{":"}SSE_ATTENDANCE_WAITING{"[FIRST]"}                                  |
| 144 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                   |
| 161 | m4:item      | m4name=SSE_INCIDENCE_REAL{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_REAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}         |
| 180 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                  |
| 187 | m4:item      | m4name=SSE_INCIDENCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_INCIDENCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}   |
| 193 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                  |
| 200 | m4:item      | m4name=SSE_ATTENDANCE_WAITING{":"}SSE_GTA_PLAN{"!"}SSE_ATTENDANCE_WAITING{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 209 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv1).intValue()-1).toString()                                                  |
| 215 | m4:item      | m4name=SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ALERT_SEVERITY_LEVEL"}      |
| 220 | m4:item      | m4name=SSE_GTA_ALERTS{":"}SSE_GTA_PLAN{"!"}SSE_GTA_ALERTS{"[&amp;VAR.m4lix]"}{"."}{"SCO_TEXT"}                         |
| 226 | m4:endpage   |                                                                                                                        |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 116 | getCount         | znodo,zsubsesion,znodo                             |
| 117 | getCountInClient | znodo,zsubsesion,znodo                             |
| 119 | getCount         | znodo1,zsubsesion,znodo1                           |
| 120 | getCountInClient | znodo1,zsubsesion,znodo1                           |
| 122 | getCount         | znodo2,zsubsesion,znodo2                           |
| 123 | getCountInClient | znodo2,zsubsesion,znodo2                           |
| 125 | getCount         | znodo3,zsubsesion,znodo3                           |
| 126 | getCountInClient | znodo3,zsubsesion,znodo3                           |
| 149 | getItem          | znodo,zsubsesion,znodo,m4lix,"SCO_ID_INCIDENCE_TP" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if ((zlanguser==null)&#124;&#124;(zlanguser.equals(""))){zlanguser = "fr";}                                                                                                                              |
| 28  | if ((argDate==null)&#124;&#124;(argDate.equals(""))){argDate = "";}                                                                                                                                      |
| 29  | if ((argHR==null)&#124;&#124;(argHR.equals(""))){argHR = "";}                                                                                                                                            |
| 30  | if ((argOrdPerid==null)&#124;&#124;(argOrdPerid.equals(""))){argOrdPerid = "0";}                                                                                                                         |
| 31  | if ((argClassName==null)&#124;&#124;(argClassName.equals(""))){argClassName = "";}                                                                                                                       |
| 32  | if ((argMss==null)&#124;&#124;(argMss.equals(""))){argMss = "0";}                                                                                                                                        |
| 133 | if (argClassName.indexOf("day-HOLIDAY") != -1){                                                                                                                                                          |
| 151 | if (incidenceType.equals("1") &amp;&amp; argMss.equals("0") &amp;&amp; !idSessionPerson.equals(argHR) ){// Absence Type + ESS Side%&gt;                                                                  |
| 157 | &lt;%}else{%&gt;                                                                                                                                                                                         |
| 168 | if (argMss.equals("0") &amp;&amp; zcounti2 &gt; 0 &amp;&amp; !idSessionPerson.equals(argHR)){// ESS Side                                                                                                 |
| 179 | &lt;%}else{%&gt;                                                                                                                                                                                         |
| 205 | &lt;%if ( (!zcountv3.equals("0") &#124;&#124; !zcountv2.equals("0") &#124;&#124; !zcountv.equals("0") &#124;&#124; (argClassName.indexOf("day-HOLIDAY") != -1) )&amp;&amp; !zcountv1.equals("0")) {%&gt; |
| 41  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                               |
| 42  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                                                                                                      |
| 43  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                                                                                            |
| 44  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                   |
| 45  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                                        |
| 47  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                                                             |
| 48  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" +znodo1 + "[FIRST]";                                                                                                                   |
| 49  | expresión de cálculo/transformación: String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;                                                                                                         |
| 50  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                                                                                |
| 51  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".";                                                                                                     |
| 53  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                             |
| 54  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                                                                                   |
| 55  | expresión de cálculo/transformación: String zlectura2 = znodo2 + ":" +zsubsesion + "!" + znodo2;                                                                                                         |
| 56  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                |
| 57  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";                                                                                                     |
| 59  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                             |
| 60  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                                                                                   |
| 61  | expresión de cálculo/transformación: String zlectura3 = znodo3 + ":" +zsubsesion + "!" + znodo3;                                                                                                         |
| 62  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" +zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                |
| 63  | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                                                                                     |
| 65  | expresión de cálculo/transformación: String getInfoMethod = "LOAD_DAY_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_TOOLTIP_INFOS";                                                                |
| 69  | expresión de cálculo/transformación: String nmIncidence = zcomun + "SCO_NM_INCIDENCE";                                                                                                                   |
| 70  | expresión de cálculo/transformación: String incColor = zcomun + "SCO_ID_COLOR";                                                                                                                          |
| 72  | expresión de cálculo/transformación: String nmIncidencePending = zcomun2 + "SCO_NM_INCIDENCE";                                                                                                           |
| 73  | expresión de cálculo/transformación: String incColorPending = zcomun2 + "SCO_ID_COLOR";                                                                                                                  |
| 75  | expresión de cálculo/transformación: String nmIncidencePendingAttendance = zcomun3 + "SCO_NM_INCIDENCE";                                                                                                 |
| 76  | expresión de cálculo/transformación: String incColorPendingAttendance = zcomun3 + "SCO_ID_COLOR";                                                                                                        |
| 78  | expresión de cálculo/transformación: String nmAlert = zcomun1 + "SCO_NM_ALERT_SEVERITY_LEVEL";                                                                                                           |
| 79  | expresión de cálculo/transformación: String descAlert = zcomun1 + "SCO_TEXT";                                                                                                                            |
| 80  | expresión de cálculo/transformación: String imgAlert = zcomun1 + "SCO_HTML_ICON";                                                                                                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso           |
| --- | --------------------------- |
| 173 | /iconos/Valid.png           |
| 184 | /iconos/Valid.png           |
| 197 | /iconos/Valid.png           |
| 212 | /iconos/&lt;m4:item m4name= |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_get_tooltip_informations.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
