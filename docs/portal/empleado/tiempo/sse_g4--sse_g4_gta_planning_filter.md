# sse_g4_gta_planning_filter

Identificador: `sse_g4/sse_g4_gta_planning_filter.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Clave            | Texto                                           | Ámbito | Diccionario                                                                                                 |
| ---------------- | ----------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| page.help        | Ayuda                                           | BASE   | [translations/mss_g4_gta_planning_es.properties:L47](../../referencias/literales/mss_g4_gta_planning_es.md) |
| page.titleHeader | Planificación de la Gestión del tiempo avanzada | BASE   | [translations/mss_g4_gta_planning_es.properties:L46](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tab.day          | Día                                             | BASE   | [translations/mss_g4_gta_planning_es.properties:L53](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tab.hour         | Horario                                         | BASE   | [translations/mss_g4_gta_planning_es.properties:L52](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tab.real         | Realizado                                       | BASE   | [translations/mss_g4_gta_planning_es.properties:L51](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tab.theoretical  | Teórico                                         | BASE   | [translations/mss_g4_gta_planning_es.properties:L50](../../referencias/literales/mss_g4_gta_planning_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_filter.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_filter.jsp) | `1527de57f549a744099e894812705ddfb1ace19d40d28e4a8cac6273224083fc` |    404 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_filter.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_filter.jsp)   | `1527de57f549a744099e894812705ddfb1ace19d40d28e4a8cac6273224083fc` |    404 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_filter.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_filter.jsp) | `1527de57f549a744099e894812705ddfb1ace19d40d28e4a8cac6273224083fc` |    404 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_filter.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_filter.jsp)                             | `1527de57f549a744099e894812705ddfb1ace19d40d28e4a8cac6273224083fc` |    404 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_filter.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_filter.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                |
| --- | ------------------------------------------------------- |
| 359 | : &#124; : &#124; : &#124; : &#124; : &#124; : &#124; : |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                   |
| --- | ------- | --------------------------------------------------------------------------- |
| 336 | input   | type=hidden; id=manageUnit; name=manageUnit; value=&lt;%=manageUnit%&gt;    |
| 337 | input   | type=hidden; id=hoursFormat; name=hoursFormat; value=&lt;%=hoursFormat%&gt; |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 13  | mss             | getParameter(request,"mss")           |
| 15  | DT_START        | getParameter(request,"DT_START")      |
| 16  | DT_END          | getParameter(request,"DT_END")        |
| 17  | NB_DAYS         | getParameter(request,"NB_DAYS")       |
| 18  | typeTab         | getParameter(request,"typeTab")       |
| 19  | manageUnit      | getParameter(request,"manageUnit")    |
| 20  | NB_PEOPLE       | getParameter(request,"NB_PEOPLE")     |
| 22  | ID_WU           | getParameter(request,"ID_WU")         |
| 23  | ID_LEGENT       | getParameter(request,"ID_LEGENT")     |
| 24  | ID_WORKLOC      | getParameter(request,"ID_WORKLOC")    |
| 25  | ID_WORKCYCLE    | getParameter(request,"ID_WORKCYCLE")  |
| 26  | ID_JOB          | getParameter(request,"ID_JOB")        |
| 27  | ID_POSITION     | getParameter(request,"ID_POSITION")   |
| 28  | LIST_PEOPLE     | getParameter(request,"LIST_PEOPLE")   |
| 30  | ID_SORT         | getParameter(request,"ID_SORT")       |
| 32  | counterC1       | getParameter(request,"counterC1")     |
| 33  | counterC2       | getParameter(request,"counterC2")     |
| 34  | counterC3       | getParameter(request,"counterC3")     |
| 35  | counterC1Name   | getParameter(request,"counterC1Name") |
| 36  | counterC2Name   | getParameter(request,"counterC2Name") |
| 37  | counterC3Name   | getParameter(request,"counterC3Name") |
| 39  | infoType        | getParameter(request,"infoType")      |
| 40  | checkTotal      | getParameter(request,"checkTotal")    |
| 42  | checkAlert      | getParameter(request,"checkAlert")    |
| 100 | lang            | getBagEntries("lang")                 |

| L   | Variable          | Expresión fuente                                                                | Resolución estática parcial                                                                                                                    |
| --- | ----------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | color             | ""                                                                              |                                                                                                                                                |
| 10  | estado            | zobjtabla.m4paramvalor("estado")                                                | zobjtabla.m4paramvalor("estado")                                                                                                               |
| 11  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                              | zobjtabla.m4paramvalor("zinicios")                                                                                                             |
| 13  | mss               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                                                |
| 15  | dtStart           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                                                                           |
| 16  | dtEnd             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")                                                                             |
| 17  | nbDays            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS")                                                                            |
| 18  | typeTab           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"typeTab")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"typeTab")                                                                            |
| 19  | manageUnit        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"manageUnit")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"manageUnit")                                                                         |
| 20  | nbIndivS          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_PEOPLE")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_PEOPLE")                                                                          |
| 22  | idWuParam         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU")                                                                              |
| 23  | idLegEntParam     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT")                                                                          |
| 24  | idWorkLocParam    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC")                                                                         |
| 25  | idWorkCycleParam  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE")                                                                       |
| 26  | idJobParam        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_JOB")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_JOB")                                                                             |
| 27  | idPositionParam   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_POSITION")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_POSITION")                                                                        |
| 28  | peopleFilter      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LIST_PEOPLE")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LIST_PEOPLE")                                                                        |
| 30  | idSort            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SORT")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SORT")                                                                            |
| 32  | counterC1         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1")                                                                          |
| 33  | counterC2         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2")                                                                          |
| 34  | counterC3         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3")                                                                          |
| 35  | counterC1Name     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1Name")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC1Name")                                                                      |
| 36  | counterC2Name     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2Name")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC2Name")                                                                      |
| 37  | counterC3Name     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3Name")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"counterC3Name")                                                                      |
| 39  | infoType          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"infoType")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"infoType")                                                                           |
| 40  | checkTotal        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkTotal")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkTotal")                                                                         |
| 41  | checkTotalCheck   | ""                                                                              |                                                                                                                                                |
| 42  | checkAlert        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkAlert")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"checkAlert")                                                                         |
| 43  | checkAlertCheck   | ""                                                                              |                                                                                                                                                |
| 86  | zventanas         | nbDays                                                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS")                                                                            |
| 87  | zvuelta           | 5                                                                               | 5                                                                                                                                              |
| 88  | zdireccion        | "/sse_generico/sse_gta.jsp"                                                     | /sse_generico/sse_gta.jsp                                                                                                                      |
| 89  | zventana          | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                                          |
| 90  | nbIndiv           | Integer.valueOf(nbIndivS).intValue()                                            | Integer.valueOf(nbIndivS).intValue()                                                                                                           |
| 93  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                           |
| 95  | zregistrofinal    | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                             |
| 100 | zlanguser         | zsesionGTA.getBagEntries("lang")                                                | zsesionGTA.getBagEntries("lang")                                                                                                               |
| 108 | zsubsesion        | "SSE_GTA_PLAN"                                                                  | SSE_GTA_PLAN                                                                                                                                   |
| 109 | zmeta4object      | "SSE_GTA_PLAN"                                                                  | SSE_GTA_PLAN                                                                                                                                   |
| 110 | znodo             | "SSE_GTA_PLAN"                                                                  | SSE_GTA_PLAN                                                                                                                                   |
| 111 | znodo1            | "SSE_GTA_PLAN_CONSTRUCTOR"                                                      | SSE_GTA_PLAN_CONSTRUCTOR                                                                                                                       |
| 112 | znodo2            | "SSE_GTA_PERIOD"                                                                | SSE_GTA_PERIOD                                                                                                                                 |
| 113 | znodo15           | "SSE_GTA_PLAN_CONSTRUCTOR_ROW"                                                  | SSE_GTA_PLAN_CONSTRUCTOR_ROW                                                                                                                   |
| 114 | znodo16           | "SSE_GTA_PLAN_CONSTRUCTOR_POP"                                                  | SSE_GTA_PLAN_CONSTRUCTOR_POP                                                                                                                   |
| 116 | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                                                                                           |
| 117 | zmove             | znodo + ":" +znodo + "[FIRST]"                                                  | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                                                                                       |
| 118 | zlectura          | znodo + ":" +zsubsesion + "!" + znodo                                           | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN                                                                                                 |
| 119 | zcomun            | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[&amp;VAR.m4lix]"}{"."}                                                                        |
| 121 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 122 | zmove1            | znodo1 + ":" + znodo1 + "["+zregistroinicial+"]"                                | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN_CONSTRUCTOR{"["}Integer.valueOf(zinicios).intValue()]                                                |
| 123 | zlectura1         | znodo1 + ":" +zsubsesion + "!" + znodo1                                         | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR                                                                         |
| 124 | zcomun1           | znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."              | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}                                                |
| 125 | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "."                                  | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}                                                                    |
| 127 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                               | SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[*]"}                                                                                                         |
| 128 | zmove2            | znodo2 + ":" +znodo2 + "[FIRST]"                                                | SSE_GTA_PERIOD{":"}SSE_GTA_PERIOD{"[FIRST]"}                                                                                                   |
| 129 | zlectura2         | znodo2 + ":" +zsubsesion + "!" + znodo2                                         | SSE_GTA_PERIOD{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD                                                                                             |
| 130 | zcomun2           | znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."              | SSE_GTA_PERIOD{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[&amp;VAR.m4lix]"}{"."}                                                                    |
| 132 | zoutputdef15      | zsubsesion + "!" + znodo15 + "[*]"                                              | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_ROW{"[*]"}                                                                                           |
| 133 | zmove15           | znodo15 + ":" + znodo15 + "[FIRST]"                                             | SSE_GTA_PLAN_CONSTRUCTOR_ROW{":"}SSE_GTA_PLAN_CONSTRUCTOR_ROW{"[FIRST]"}                                                                       |
| 134 | zlectura15        | znodo15 + ":" +zsubsesion + "!" + znodo15                                       | SSE_GTA_PLAN_CONSTRUCTOR_ROW{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_ROW                                                                 |
| 135 | zcomun15          | znodo15 + ":" +zsubsesion + "!" + znodo15 + "[&amp;VAR.m4lix]" + "."            | SSE_GTA_PLAN_CONSTRUCTOR_ROW{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_ROW{"[&amp;VAR.m4lix]"}{"."}                                        |
| 137 | zoutputdef16      | zsubsesion + "!" + znodo16 + "[*]"                                              | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_POP{"[*]"}                                                                                           |
| 138 | zmove16           | znodo16 + ":" +znodo16 + "[FIRST]"                                              | SSE_GTA_PLAN_CONSTRUCTOR_POP{":"}SSE_GTA_PLAN_CONSTRUCTOR_POP{"[FIRST]"}                                                                       |
| 139 | zlectura16        | znodo16 + ":" +zsubsesion + "!" + znodo16                                       | SSE_GTA_PLAN_CONSTRUCTOR_POP{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_POP                                                                 |
| 140 | zcomun16          | znodo16 + ":" +zsubsesion + "!" + znodo16 + "[&amp;VAR.m4lix]" + "."            | SSE_GTA_PLAN_CONSTRUCTOR_POP{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_POP{"[&amp;VAR.m4lix]"}{"."}                                        |
| 142 | zmetodocarga      | "LOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_LOAD"                            | LOAD:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_MAIN_LOAD"}                                                                                             |
| 145 | idPerson          | zcomun1 + "STD_ID_HR"                                                           | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_HR"}                                   |
| 146 | firstName         | zcomun1 + "STD_N_FIRST_NAME"                                                    | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                            |
| 147 | lastName          | zcomun1 + "STD_N_FAMILY_NAME_1"                                                 | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                         |
| 148 | day               | zcomun1 + "SCO_ID_DAY_TYPE"                                                     | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DAY_TYPE"}                             |
| 149 | idWeek            | zcomun1 + "SCO_OR_WEEK"                                                         | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_WEEK"}                                 |
| 150 | idCycle           | zcomun1 + "SCO_ID_REF_MOD"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_REF_MOD"}                              |
| 151 | date              | zcomun1 + "DT_START"                                                            | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                    |
| 152 | hours             | zcomun1 + "SSE_GET_DAY_DATA"                                                    | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_GET_DAY_DATA"}                            |
| 153 | ordinalPeriod     | zcomun1 + "STD_OR_HR_PERIOD"                                                    | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_HR_PERIOD"}                            |
| 154 | ordinalCycle      | zcomun1 + "SSE_REF_MOD_ORDINAL"                                                 | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_REF_MOD_ORDINAL"}                         |
| 155 | ordinalWeek       | zcomun1 + "SSE_WE_ORDINAL"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_WE_ORDINAL"}                              |
| 156 | idDay             | zcomun1 + "SSE_DAY_NAME_ID"                                                     | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_DAY_NAME_ID"}                             |
| 157 | mainWU            | zcomun1 + "SSE_MAIN_WORK_UNIT"                                                  | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_MAIN_WORK_UNIT"}                          |
| 158 | mainLegEnt        | zcomun1 + "SSE_MAIN_LEG_ENT"                                                    | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_MAIN_LEG_ENT"}                            |
| 159 | mainWorkLoc       | zcomun1 + "SSE_MAIN_WORK_LOCATION"                                              | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_MAIN_WORK_LOCATION"}                      |
| 160 | cycleDate         | zcomun1 + "SSE_REF_MOD_DATE"                                                    | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_REF_MOD_DATE"}                            |
| 161 | weekDate          | zcomun1 + "SSE_WEEK_DATE"                                                       | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_WEEK_DATE"}                               |
| 162 | mainRole          | zcomun1 + "SCO_N_ROLE"                                                          | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ROLE"}                                  |
| 163 | mainRoleDate      | zcomun1 + "SCO_DT_START"                                                        | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                |
| 164 | timeSlotText      | zcomun1 + "SSE_GET_TRANSLATED_TIMESLOT"                                         | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_GET_TRANSLATED_TIMESLOT"}                 |
| 165 | maxAlertSeverity  | zcomun1 + "SCO_MAX_ALERT_SEVERITY_LEVEL"                                        | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SCO_MAX_ALERT_SEVERITY_LEVEL"}                |
| 166 | counterC1Value    | zcomun1 + "SSE_COUNTER_C1"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_COUNTER_C1"}                              |
| 167 | counterC2Value    | zcomun1 + "SSE_COUNTER_C2"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_COUNTER_C2"}                              |
| 168 | counterC3Value    | zcomun1 + "SSE_COUNTER_C3"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"[&amp;VAR.m4lix]"}{"."}{"SSE_COUNTER_C3"}                              |
| 170 | filterWu          | zraiz1 + "SSE_FILTER_WU"                                                        | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WU"}                                                   |
| 171 | filterLegEnt      | zraiz1 + "SSE_FILTER_LEGAL_ENTITY"                                              | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_LEGAL_ENTITY"}                                         |
| 172 | filterWorkLoc     | zraiz1 + "SSE_FILTER_WORK_LOCATION"                                             | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_LOCATION"}                                        |
| 173 | filterJob         | zraiz1 + "SSE_FILTER_JOB"                                                       | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_JOB"}                                                  |
| 174 | filterPosition    | zraiz1 + "SSE_FILTER_POSITION"                                                  | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_POSITION"}                                             |
| 175 | filterWorkCyc     | zraiz1 + "SSE_FILTER_WORK_CYCLE"                                                | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_CYCLE"}                                           |
| 176 | filterPeopleList  | zraiz1 + "SSE_FILTER_PERSON_LIST"                                               | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_PERSON_LIST"}                                          |
| 177 | filterSort        | zraiz1 + "SSE_FILTER_SORT"                                                      | SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_SORT"}                                                 |
| 179 | dateHeader        | zcomun2 + "SSE_DATE"                                                            | SSE_GTA_PERIOD{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[&amp;VAR.m4lix]"}{"."}{"SSE_DATE"}                                                        |
| 180 | dayHeader         | zcomun2 + "SSE_DAY"                                                             | SSE_GTA_PERIOD{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[&amp;VAR.m4lix]"}{"."}{"SSE_DAY"}                                                         |
| 181 | weekHeader        | zcomun2 + "SSE_WEEK"                                                            | SSE_GTA_PERIOD{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[&amp;VAR.m4lix]"}{"."}{"SSE_WEEK"}                                                        |
| 226 | zcounti           | 0                                                                               | 0                                                                                                                                              |
| 227 | zcount            | 0                                                                               | 0                                                                                                                                              |
| 228 | zcounti1          | 0                                                                               | 0                                                                                                                                              |
| 229 | zcount1           | 0                                                                               | 0                                                                                                                                              |
| 230 | zcounti2          | 0                                                                               | 0                                                                                                                                              |
| 231 | zcount2           | 0                                                                               | 0                                                                                                                                              |
| 232 | zcounti15         | 0                                                                               | 0                                                                                                                                              |
| 233 | zcount15          | 0                                                                               | 0                                                                                                                                              |
| 234 | zcounti16         | 0                                                                               | 0                                                                                                                                              |
| 235 | zcount16          | 0                                                                               | 0                                                                                                                                              |
| 236 | viewType          | ""                                                                              |                                                                                                                                                |
| 237 | hoursFormat       | ""                                                                              |                                                                                                                                                |
| 238 | startDatePrevious | ""                                                                              |                                                                                                                                                |
| 239 | startDateNext     | ""                                                                              |                                                                                                                                                |
| 240 | startCurrentMonth | ""                                                                              |                                                                                                                                                |
| 241 | endDatePrevious   | ""                                                                              |                                                                                                                                                |
| 242 | endDateNext       | ""                                                                              |                                                                                                                                                |
| 243 | endCurrentMonth   | ""                                                                              |                                                                                                                                                |
| 244 | monthTxt          | ""                                                                              |                                                                                                                                                |
| 245 | yearTxt           | ""                                                                              |                                                                                                                                                |
| 246 | displayWeek       | ""                                                                              |                                                                                                                                                |
| 247 | displayCycle      | ""                                                                              |                                                                                                                                                |
| 248 | startHourDay      | ""                                                                              |                                                                                                                                                |
| 249 | endHourDay        | ""                                                                              |                                                                                                                                                |
| 250 | diffHourDay       | ""                                                                              |                                                                                                                                                |
| 281 | zcountv           | String.valueOf(zcounti)                                                         | String.valueOf(zcounti)                                                                                                                        |
| 282 | zcountv1          | String.valueOf(zcounti1)                                                        | String.valueOf(zcounti1)                                                                                                                       |
| 283 | zcountv2          | String.valueOf(zcounti2)                                                        | String.valueOf(zcounti2)                                                                                                                       |
| 284 | zcountv16         | String.valueOf(zcounti16)                                                       | String.valueOf(zcounti16)                                                                                                                      |
| 285 | nbCell            | String.valueOf(zcounti2+3)                                                      | {String.valueOf(zcounti2}{3)}                                                                                                                  |
| 295 | debutHeure        | Integer.valueOf(startHourDay).intValue()                                        | Integer.valueOf(startHourDay).intValue()                                                                                                       |
| 296 | finHeure          | Integer.valueOf(endHourDay).intValue()                                          | Integer.valueOf(endHourDay).intValue()                                                                                                         |
| 297 | nbHeure           | Integer.valueOf(diffHourDay).intValue()                                         | Integer.valueOf(diffHourDay).intValue()                                                                                                        |
| 305 | tabM1             | ""                                                                              |                                                                                                                                                |
| 306 | tabM2             | ""                                                                              |                                                                                                                                                |
| 307 | tabDays           | ""                                                                              |                                                                                                                                                |
| 308 | tabHours          | ""                                                                              |                                                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                 |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 185 | m4:startpage | m4task=SSE_GTA_PLAN                                                                                                                                                |
| 185 | m4:beginjob  |                                                                                                                                                                    |
| 186 | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                                                                                              |
| 200 | m4:exec      | m4method=LOAD:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_MAIN_LOAD"}                                                                                                        |
| 201 | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                                                                      |
| 202 | m4:param     | name=ARG_DT_END; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")                                                                          |
| 203 | m4:param     | name=ARG_ID_WU; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU")                                                                            |
| 204 | m4:param     | name=ARG_ID_LEG_ENT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT")                                                                   |
| 205 | m4:param     | name=ARG_ID_WORK_LOC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC")                                                                 |
| 206 | m4:param     | name=ARG_ID_WORK_CYCLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE")                                                             |
| 207 | m4:param     | name=ARG_ID_JOB; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_JOB")                                                                          |
| 208 | m4:param     | name=ARG_ID_POSITION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_POSITION")                                                                |
| 209 | m4:param     | name=ARG_ID_SORT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_SORT")                                                                        |
| 210 | m4:param     | name=ARG_MSS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                                                |
| 211 | m4:param     | name=ARG_PERSON_LIST_FILTER; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LIST_PEOPLE")                                                         |
| 212 | m4:param     | name=ARG_MANAGEMENT_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"manageUnit")                                                             |
| 213 | m4:param     | name=ARG_LOAD_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"typeTab")                                                                      |
| 214 | m4:param     | name=ARG_PAGINATION; value=zobjtabla.m4paramvalor("zinicios")                                                                                                      |
| 216 | m4:outputdef | m4alias=SSE_GTA_PLAN_CONSTRUCTOR                                                                                                                                   |
| 216 | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 217 | m4:outputdef | m4alias=SSE_GTA_PERIOD                                                                                                                                             |
| 217 | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PERIOD{"[*]"}                                                                                                         |
| 218 | m4:outputdef | m4alias=SSE_GTA_PLAN_CONSTRUCTOR_ROW                                                                                                                               |
| 218 | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_ROW{"[*]"}                                                                                           |
| 219 | m4:outputdef | m4alias=SSE_GTA_PLAN_CONSTRUCTOR_POP                                                                                                                               |
| 219 | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR_POP{"[*]"}                                                                                           |
| 220 | m4:endjob    |                                                                                                                                                                    |
| 221 | m4:move      |                                                                                                                                                                    |
| 221 | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN_CONSTRUCTOR{"["}Integer.valueOf(zinicios).intValue()]                                           |
| 222 | m4:move      |                                                                                                                                                                    |
| 222 | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PERIOD{":"}SSE_GTA_PERIOD{"[FIRST]"}                                                                                              |
| 223 | m4:move      |                                                                                                                                                                    |
| 223 | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN_CONSTRUCTOR_ROW{":"}SSE_GTA_PLAN_CONSTRUCTOR_ROW{"[FIRST]"}                                                                  |
| 224 | m4:move      |                                                                                                                                                                    |
| 224 | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN_CONSTRUCTOR_POP{":"}SSE_GTA_PLAN_CONSTRUCTOR_POP{"[FIRST]"}                                                                  |
| 360 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WU"}                                                                |
| 360 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WU"}                                                                |
| 361 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_LEGAL_ENTITY"}                                                      |
| 361 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_LEGAL_ENTITY"}                                                      |
| 362 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_LOCATION"}                                                     |
| 362 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_LOCATION"}                                                     |
| 363 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_JOB"}                                                               |
| 363 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_JOB"}                                                               |
| 364 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_POSITION"}                                                          |
| 364 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_POSITION"}                                                          |
| 365 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_CYCLE"}                                                        |
| 365 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_WORK_CYCLE"}                                                        |
| 366 | m4:label     | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_PERSON_LIST"}                                                       |
| 366 | m4:item      | m4name=SSE_GTA_PLAN_CONSTRUCTOR{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN_CONSTRUCTOR{"."}{"SSE_FILTER_PERSON_LIST"}                                                       |
| 404 | m4:endpage   |                                                                                                                                                                    |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 193 | setItem          | zsubsesion,znodo,"","SSE_ID_COUNTER_C1",counterC1            |
| 194 | setItem          | zsubsesion,znodo,"","SSE_ID_COUNTER_C2",counterC2            |
| 195 | setItem          | zsubsesion,znodo,"","SSE_ID_COUNTER_C3",counterC3            |
| 197 | setItem          | zsubsesion,znodo,"","SSE_ONLY_ALERTS",checkAlert             |
| 253 | getCountInClient | znodo1,zsubsesion,znodo1                                     |
| 254 | getCount         | znodo1,zsubsesion,znodo1                                     |
| 255 | getCountInClient | znodo2,zsubsesion,znodo2                                     |
| 256 | getCount         | znodo2,zsubsesion,znodo2                                     |
| 257 | getCountInClient | znodo16,zsubsesion,znodo16                                   |
| 258 | getCount         | znodo16,zsubsesion,znodo16                                   |
| 259 | getItem          | znodo1,zsubsesion,znodo1,"","TYPE_OF_VIEW"                   |
| 260 | getItem          | znodo1,zsubsesion,znodo1,"","HOURS_FORMAT"                   |
| 261 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_PREVIOUS_START_DATE"        |
| 263 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_NEXT_START_DATE"            |
| 265 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_MONTH_START_DATE"           |
| 267 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_PREVIOUS_END_DATE"          |
| 269 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_NEXT_END_DATE"              |
| 271 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_MONTH_END_DATE"             |
| 273 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_MONTH_TXT"                  |
| 274 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_YEAR_TXT"                   |
| 275 | getItem          | znodo1,zsubsesion,znodo1,"","DISPLAY_WEEK"                   |
| 276 | getItem          | znodo1,zsubsesion,znodo1,"","DISPLAY_CYCLE"                  |
| 277 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MIN"))  |
| 278 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MAX"))  |
| 279 | getItem          | znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_DIFF")) |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                             |
| 47  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                     |
| 48  | if ((dtStart==null)&#124;&#124;(dtStart.equals(""))){dtStart = "";}                                                                                                                                                                         |
| 49  | if ((dtEnd==null)&#124;&#124;(dtEnd.equals(""))){dtEnd = "";}                                                                                                                                                                               |
| 50  | if ((nbDays==null)&#124;&#124;(nbDays.equals(""))){nbDays = "0";}                                                                                                                                                                           |
| 51  | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                                                                                    |
| 52  | if ((typeTab==null)&#124;&#124;(typeTab.equals(""))){typeTab = "T";}                                                                                                                                                                        |
| 53  | if ((manageUnit==null)&#124;&#124;(manageUnit.equals(""))){manageUnit = "B";}                                                                                                                                                               |
| 54  | if ((nbIndivS==null)&#124;&#124;(nbIndivS.equals(""))){nbIndivS = "10";}                                                                                                                                                                    |
| 56  | if ((idWuParam==null)&#124;&#124;(idWuParam.equals(""))){idWuParam="All";}                                                                                                                                                                  |
| 57  | if ((idLegEntParam==null)&#124;&#124;(idLegEntParam.equals(""))){idLegEntParam="All";}                                                                                                                                                      |
| 58  | if ((idWorkLocParam==null)&#124;&#124;(idWorkLocParam.equals(""))){idWorkLocParam="All";}                                                                                                                                                   |
| 59  | if ((idWorkCycleParam==null)&#124;&#124;(idWorkCycleParam.equals(""))){idWorkCycleParam="All";}                                                                                                                                             |
| 60  | if ((idJobParam==null)&#124;&#124;(idJobParam.equals(""))){idJobParam="All";}                                                                                                                                                               |
| 61  | if ((idPositionParam==null)&#124;&#124;(idPositionParam.equals(""))){idPositionParam="All";}                                                                                                                                                |
| 62  | if ((peopleFilter==null)&#124;&#124;(peopleFilter.equals(""))){peopleFilter="";}                                                                                                                                                            |
| 64  | if ((idSort==null)&#124;&#124;(idSort.equals(""))){idSort="1";}                                                                                                                                                                             |
| 66  | if ((counterC1==null)&#124;&#124;(counterC1.equals(""))){counterC1 = "";}                                                                                                                                                                   |
| 67  | if ((counterC2==null)&#124;&#124;(counterC2.equals(""))){counterC2 = "";}                                                                                                                                                                   |
| 68  | if ((counterC3==null)&#124;&#124;(counterC3.equals(""))){counterC3 = "";}                                                                                                                                                                   |
| 69  | if ((counterC1Name==null)&#124;&#124;(counterC1Name.equals(""))){counterC1Name = "C1";}                                                                                                                                                     |
| 70  | if ((counterC2Name==null)&#124;&#124;(counterC2Name.equals(""))){counterC2Name = "C2";}                                                                                                                                                     |
| 71  | if ((counterC3Name==null)&#124;&#124;(counterC3Name.equals(""))){counterC3Name = "C3";}                                                                                                                                                     |
| 73  | if ((infoType==null)&#124;&#124;(infoType.equals(""))){infoType = "";}                                                                                                                                                                      |
| 74  | if ((checkTotal==null)&#124;&#124;(checkTotal.equals(""))){checkTotal = "N";}                                                                                                                                                               |
| 75  | if (checkTotal.equals("Y")){checkTotalCheck = "checked";}else{checkTotalCheck = "";}                                                                                                                                                        |
| 76  | if ((checkAlert==null)&#124;&#124;(checkAlert.equals(""))){checkAlert = "N";}                                                                                                                                                               |
| 77  | if (checkAlert.equals("Y")){checkAlertCheck = "checked";}else{checkAlertCheck = "";}                                                                                                                                                        |
| 101 | if ((zlanguser==null)&#124;&#124;(zlanguser.equals(""))){zlanguser = "fr";}                                                                                                                                                                 |
| 287 | if ( (viewType.equals("Month")&amp;&amp;displayCycle.indexOf("M") != -1) &#124;&#124; (viewType.equals("Week")&amp;&amp;displayCycle.indexOf("W") != -1) &#124;&#124; (viewType.equals("Day")&amp;&amp;displayCycle.indexOf("D") != -1) ) { |
| 291 | if ( (viewType.equals("Month")&amp;&amp;displayWeek.indexOf("M") != -1) &#124;&#124; (viewType.equals("Week")&amp;&amp;displayWeek.indexOf("W") != -1) &#124;&#124; (viewType.equals("Day")&amp;&amp;displayWeek.indexOf("D") != -1) ) {    |
| 311 | if (typeTab.equals("T") &#124;&#124; typeTab.equals("TB")){                                                                                                                                                                                 |
| 315 | if (typeTab.equals("R") &#124;&#124; typeTab.equals("PB") ){                                                                                                                                                                                |
| 319 | if (manageUnit.equals("B")){                                                                                                                                                                                                                |
| 323 | if (manageUnit.equals("D")){                                                                                                                                                                                                                |
| 327 | if (manageUnit.equals("H")){                                                                                                                                                                                                                |
| 391 | if ($("t7").className == "highlight")                                                                                                                                                                                                       |
| 400 | &lt;%if (checkTotal.equals("Y") ) {%&gt;                                                                                                                                                                                                    |
| 94  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                               |
| 95  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                  |
| 116 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                                                  |
| 117 | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                                                                                                                                         |
| 118 | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                                                                                                                               |
| 119 | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                                                      |
| 121 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                                  |
| 122 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "["+zregistroinicial+"]";                                                                                                                                      |
| 123 | expresión de cálculo/transformación: String zlectura1 = znodo1 + ":" +zsubsesion + "!" + znodo1;                                                                                                                                            |
| 124 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" +zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                                                                                                                   |
| 125 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".";                                                                                                                                        |
| 127 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                |
| 128 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                                                                                                                      |
| 129 | expresión de cálculo/transformación: String zlectura2 = znodo2 + ":" +zsubsesion + "!" + znodo2;                                                                                                                                            |
| 130 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" +zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                                                   |
| 132 | expresión de cálculo/transformación: String zoutputdef15 = zsubsesion + "!" + znodo15 + "[*]";                                                                                                                                              |
| 133 | expresión de cálculo/transformación: String zmove15 = znodo15 + ":" + znodo15 + "[FIRST]";                                                                                                                                                  |
| 134 | expresión de cálculo/transformación: String zlectura15 = znodo15 + ":" +zsubsesion + "!" + znodo15;                                                                                                                                         |
| 135 | expresión de cálculo/transformación: String zcomun15 = znodo15 + ":" +zsubsesion + "!" + znodo15 + "[&amp;VAR.m4lix]" + ".";                                                                                                                |
| 137 | expresión de cálculo/transformación: String zoutputdef16 = zsubsesion + "!" + znodo16 + "[*]";                                                                                                                                              |
| 138 | expresión de cálculo/transformación: String zmove16 = znodo16 + ":" +znodo16 + "[FIRST]";                                                                                                                                                   |
| 139 | expresión de cálculo/transformación: String zlectura16 = znodo16 + ":" +zsubsesion + "!" + znodo16;                                                                                                                                         |
| 140 | expresión de cálculo/transformación: String zcomun16 = znodo16 + ":" +zsubsesion + "!" + znodo16 + "[&amp;VAR.m4lix]" + ".";                                                                                                                |
| 142 | expresión de cálculo/transformación: String zmetodocarga = "LOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_MAIN_LOAD";                                                                                                                            |
| 145 | expresión de cálculo/transformación: String idPerson = zcomun1 + "STD_ID_HR";                                                                                                                                                               |
| 146 | expresión de cálculo/transformación: String firstName = zcomun1 + "STD_N_FIRST_NAME";                                                                                                                                                       |
| 147 | expresión de cálculo/transformación: String lastName = zcomun1 + "STD_N_FAMILY_NAME_1";                                                                                                                                                     |
| 148 | expresión de cálculo/transformación: String day = zcomun1 + "SCO_ID_DAY_TYPE";                                                                                                                                                              |
| 149 | expresión de cálculo/transformación: String idWeek = zcomun1 + "SCO_OR_WEEK";                                                                                                                                                               |
| 150 | expresión de cálculo/transformación: String idCycle = zcomun1 + "SCO_ID_REF_MOD";                                                                                                                                                           |
| 151 | expresión de cálculo/transformación: String date = zcomun1 + "DT_START";                                                                                                                                                                    |
| 152 | expresión de cálculo/transformación: String hours = zcomun1 + "SSE_GET_DAY_DATA";                                                                                                                                                           |
| 153 | expresión de cálculo/transformación: String ordinalPeriod = zcomun1 + "STD_OR_HR_PERIOD";                                                                                                                                                   |
| 154 | expresión de cálculo/transformación: String ordinalCycle = zcomun1 + "SSE_REF_MOD_ORDINAL";                                                                                                                                                 |
| 155 | expresión de cálculo/transformación: String ordinalWeek = zcomun1 + "SSE_WE_ORDINAL";                                                                                                                                                       |
| 156 | expresión de cálculo/transformación: String idDay = zcomun1 + "SSE_DAY_NAME_ID";                                                                                                                                                            |
| 157 | expresión de cálculo/transformación: String mainWU = zcomun1 + "SSE_MAIN_WORK_UNIT";                                                                                                                                                        |
| 158 | expresión de cálculo/transformación: String mainLegEnt = zcomun1 + "SSE_MAIN_LEG_ENT";                                                                                                                                                      |
| 159 | expresión de cálculo/transformación: String mainWorkLoc = zcomun1 + "SSE_MAIN_WORK_LOCATION";                                                                                                                                               |
| 160 | expresión de cálculo/transformación: String cycleDate = zcomun1 + "SSE_REF_MOD_DATE";                                                                                                                                                       |
| 161 | expresión de cálculo/transformación: String weekDate = zcomun1 + "SSE_WEEK_DATE";                                                                                                                                                           |
| 162 | expresión de cálculo/transformación: String mainRole = zcomun1 + "SCO_N_ROLE";                                                                                                                                                              |
| 163 | expresión de cálculo/transformación: String mainRoleDate = zcomun1 + "SCO_DT_START";                                                                                                                                                        |
| 164 | expresión de cálculo/transformación: String timeSlotText = zcomun1 + "SSE_GET_TRANSLATED_TIMESLOT";                                                                                                                                         |
| 165 | expresión de cálculo/transformación: String maxAlertSeverity = zcomun1 + "SCO_MAX_ALERT_SEVERITY_LEVEL";                                                                                                                                    |
| 166 | expresión de cálculo/transformación: String counterC1Value = zcomun1 + "SSE_COUNTER_C1";                                                                                                                                                    |
| 167 | expresión de cálculo/transformación: String counterC2Value = zcomun1 + "SSE_COUNTER_C2";                                                                                                                                                    |
| 168 | expresión de cálculo/transformación: String counterC3Value = zcomun1 + "SSE_COUNTER_C3";                                                                                                                                                    |
| 170 | expresión de cálculo/transformación: String filterWu = zraiz1 + "SSE_FILTER_WU";                                                                                                                                                            |
| 171 | expresión de cálculo/transformación: String filterLegEnt = zraiz1 + "SSE_FILTER_LEGAL_ENTITY";                                                                                                                                              |
| 172 | expresión de cálculo/transformación: String filterWorkLoc = zraiz1 + "SSE_FILTER_WORK_LOCATION";                                                                                                                                            |
| 173 | expresión de cálculo/transformación: String filterJob = zraiz1 + "SSE_FILTER_JOB";                                                                                                                                                          |
| 174 | expresión de cálculo/transformación: String filterPosition = zraiz1 + "SSE_FILTER_POSITION";                                                                                                                                                |
| 175 | expresión de cálculo/transformación: String filterWorkCyc = zraiz1 + "SSE_FILTER_WORK_CYCLE";                                                                                                                                               |
| 176 | expresión de cálculo/transformación: String filterPeopleList = zraiz1 + "SSE_FILTER_PERSON_LIST";                                                                                                                                           |
| 177 | expresión de cálculo/transformación: String filterSort = zraiz1 + "SSE_FILTER_SORT";                                                                                                                                                        |
| 179 | expresión de cálculo/transformación: String dateHeader = zcomun2 + "SSE_DATE";                                                                                                                                                              |
| 180 | expresión de cálculo/transformación: String dayHeader = zcomun2 + "SSE_DAY";                                                                                                                                                                |
| 181 | expresión de cálculo/transformación: String weekHeader = zcomun2 + "SSE_WEEK";                                                                                                                                                              |
| 277 | expresión de cálculo/transformación: startHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MIN")));                                                                            |
| 278 | expresión de cálculo/transformación: endHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_MAX")));                                                                              |
| 279 | expresión de cálculo/transformación: diffHourDay = String.valueOf((int)Float.parseFloat(m.getItem(znodo1,zsubsesion,znodo1,"","SSE_DAY_HEADER_TIMESLOT_DIFF")));                                                                            |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp |
| 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 88  | /sse_generico/sse_gta.jsp                                 |
| 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp |
| 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                          |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| COLL   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| COLL   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| COLL   | 88  | /sse_generico/sse_gta.jsp                                 | ausente    | P06                                                                                        |
| COLL   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| COLL   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| CYC    | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| CYC    | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| CYC    | 88  | /sse_generico/sse_gta.jsp                                 | ausente    | P06                                                                                        |
| CYC    | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| CYC    | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| IBER   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| IBER   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| IBER   | 88  | /sse_generico/sse_gta.jsp                                 | ausente    | P06                                                                                        |
| IBER   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| IBER   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| BASE   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| BASE   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |
| BASE   | 88  | /sse_generico/sse_gta.jsp                                 | ausente    | P06                                                                                        |
| BASE   | 374 | ../../sse_g4/espanol/sse_g4_gta_planning_main_wrapper.jsp | física     | [sse_g4/sse_g4_gta_planning_main_wrapper.jsp](sse_g4--sse_g4_gta_planning_main_wrapper.md) |
| BASE   | 401 | ../../sse_g4/espanol/sse_g4_gta_planning_total_calcul.jsp | física     | [sse_g4/sse_g4_gta_planning_total_calcul.jsp](sse_g4--sse_g4_gta_planning_total_calcul.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_filter.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
