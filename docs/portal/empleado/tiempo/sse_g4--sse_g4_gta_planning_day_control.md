# sse_g4_gta_planning_day_control

Identificador: `sse_g4/sse_g4_gta_planning_day_control.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp) | `c4699b1730e6aea334eabe7929ef4d91ef51463a86d0bb957b070efd6297881b` |    112 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp)   | `c4699b1730e6aea334eabe7929ef4d91ef51463a86d0bb957b070efd6297881b` |    112 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp) | `c4699b1730e6aea334eabe7929ef4d91ef51463a86d0bb957b070efd6297881b` |    112 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_day_control.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp)                             | `c4699b1730e6aea334eabe7929ef4d91ef51463a86d0bb957b070efd6297881b` |    112 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_day_control.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave   | Acceso literal                            |
| --- | ----------------- | ----------------------------------------- |
| 7   | lang              | getBagEntries("lang")                     |
| 16  | mss               | getParameter(request,"mss")               |
| 18  | DT_START          | getParameter(request,"DT_START")          |
| 19  | DT_END            | getParameter(request,"DT_END")            |
| 20  | NB_DAYS           | getParameter(request,"NB_DAYS")           |
| 22  | ID_WU             | getParameter(request,"ID_WU")             |
| 23  | ID_LEGENT         | getParameter(request,"ID_LEGENT")         |
| 24  | ID_WORKLOC        | getParameter(request,"ID_WORKLOC")        |
| 25  | ID_WORKCYCLE      | getParameter(request,"ID_WORKCYCLE")      |
| 27  | ARG_DATE          | getParameter(request,"ARG_DATE")          |
| 28  | ARG_ID_HR         | getParameter(request,"ARG_ID_HR")         |
| 30  | ARG_OR_PERIOD     | getParameter(request,"ARG_OR_PERIOD")     |
| 31  | ARG_TAB_INDEX     | getParameter(request,"ARG_TAB_INDEX")     |
| 32  | ARG_DISPLAY_MODIF | getParameter(request,"ARG_DISPLAY_MODIF") |
| 33  | ARG_HOURS_FORMAT  | getParameter(request,"ARG_HOURS_FORMAT")  |

| L   | Variable         | Expresión fuente                                                                              | Resolución estática parcial                                                                   |
| --- | ---------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 7   | zlanguser        | zsesionGTA.getBagEntries("lang")                                                              | zsesionGTA.getBagEntries("lang")                                                              |
| 16  | mss              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                               |
| 18  | dtStart          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                          |
| 19  | dtEnd            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")                            |
| 20  | nbDays           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS")                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NB_DAYS")                           |
| 22  | idWuParam        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WU")                             |
| 23  | idLegEntParam    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT")                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_LEGENT")                         |
| 24  | idWorkLocParam   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC")                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKLOC")                        |
| 25  | idWorkCycleParam | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKCYCLE")                      |
| 27  | argDate          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")                          |
| 28  | argHR            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")                         |
| 29  | argHREncrypt     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argHR) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", argHR) |
| 30  | argOrdPeriod     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")                     |
| 31  | argTabIndex      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TAB_INDEX")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TAB_INDEX")                     |
| 32  | argDispModif     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DISPLAY_MODIF")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DISPLAY_MODIF")                 |
| 33  | argHoursFormat   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_HOURS_FORMAT")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_HOURS_FORMAT")                  |
| 56  | zsubsesion       | "SSE_GTA_PLAN"                                                                                | SSE_GTA_PLAN                                                                                  |
| 57  | zmeta4object     | "SSE_GTA_PLAN"                                                                                | SSE_GTA_PLAN                                                                                  |
| 58  | znodo            | "SSE_GTA_PLAN"                                                                                | SSE_GTA_PLAN                                                                                  |
| 60  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                                              | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                                          |
| 61  | zmove            | znodo + ":" +znodo + "[FIRST]"                                                                | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                                      |
| 62  | zlectura         | znodo + ":" +zsubsesion + "!" + znodo                                                         | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN                                                |
| 63  | zcomun           | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                              | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[&amp;VAR.m4lix]"}{"."}                       |
| 64  | zraiz            | znodo + ":" + zsubsesion + "!" + znodo + "."                                                  | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}                                           |
| 66  | loadMethod       | "LOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_THEOR_CONTROL"                              | LOAD:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_DAY_THEOR_CONTROL"}                                |
| 70  | idPerson         | zraiz + "STD_ID_HR"                                                                           | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_ID_HR"}                              |
| 71  | firstName        | zraiz + "STD_N_FIRST_NAME"                                                                    | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FIRST_NAME"}                       |
| 72  | lastName         | zraiz + "STD_N_FAMILY_NAME_1"                                                                 | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FAMILY_NAME_1"}                    |
| 73  | dayType          | zraiz + "SCO_ID_DAY_TYPE"                                                                     | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_ID_DAY_TYPE"}                        |
| 74  | nmdayType        | zraiz + "SCO_NM_DAY_TYPE"                                                                     | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_NM_DAY_TYPE"}                        |
| 75  | idWeek           | zraiz + "SCO_OR_WEEK"                                                                         | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_OR_WEEK"}                            |
| 76  | nmWeek           | zraiz + "SCO_NM_WEEK"                                                                         | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_NM_WEEK"}                            |
| 77  | idCycle          | zraiz + "SCO_ID_REF_MOD"                                                                      | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_ID_REF_MOD"}                         |
| 78  | date             | zraiz + "DT_START"                                                                            | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"DT_START"}                               |
| 79  | hours            | zraiz + "SCO_WORK_THEO_HRS"                                                                   | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_WORK_THEO_HRS"}                      |
| 80  | ordinalPeriod    | zraiz + "STD_OR_HR_PERIOD"                                                                    | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_OR_HR_PERIOD"}                       |
| 95  | zcount           | 0                                                                                             | 0                                                                                             |
| 96  | zcounti          | 0                                                                                             | 0                                                                                             |
| 97  | zcountv          | "0"                                                                                           | 0                                                                                             |
| 98  | buffer           | ""                                                                                            |                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                  |
| --- | ------------ | --------------------------------------------------------------------------------------------------- |
| 83  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                 |
| 83  | m4:beginjob  |                                                                                                     |
| 84  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                               |
| 85  | m4:exec      | m4method=LOAD:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_DAY_THEOR_CONTROL"}                             |
| 86  | m4:param     | name=ARG_DATE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")           |
| 87  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")         |
| 88  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") |
| 90  | m4:outputdef | m4alias=SSE_GTA_PLAN                                                                                |
| 90  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                            |
| 91  | m4:endjob    |                                                                                                     |
| 92  | m4:move      |                                                                                                     |
| 92  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                   |
| 111 | m4:endpage   |                                                                                                     |

| L   | Operación | Argumentos literales                        |
| --- | --------- | ------------------------------------------- |
| 101 | getCount  | znodo,zsubsesion,znodo                      |
| 102 | getItem   | znodo,zsubsesion,znodo,"","SSE_JAVASCRIPTS" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((zlanguser==null)&#124;&#124;(zlanguser.equals(""))){zlanguser = "fr";}                                                |
| 36  | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                   |
| 38  | if ((dtStart==null)&#124;&#124;(dtStart.equals(""))){dtStart = "";}                                                        |
| 39  | if ((dtEnd==null)&#124;&#124;(dtEnd.equals(""))){dtEnd = "";}                                                              |
| 40  | if ((nbDays==null)&#124;&#124;(nbDays.equals(""))){nbDays = "0";}                                                          |
| 42  | if ((idWuParam==null)&#124;&#124;(idWuParam.equals(""))){idWuParam="All";}                                                 |
| 43  | if ((idLegEntParam==null)&#124;&#124;(idLegEntParam.equals(""))){idLegEntParam="All";}                                     |
| 44  | if ((idWorkLocParam==null)&#124;&#124;(idWorkLocParam.equals(""))){idWorkLocParam="All";}                                  |
| 45  | if ((idWorkCycleParam==null)&#124;&#124;(idWorkCycleParam.equals(""))){idWorkCycleParam="All";}                            |
| 47  | if ((argDate==null)&#124;&#124;(argDate.equals(""))){argDate = "";}                                                        |
| 48  | if ((argHR==null)&#124;&#124;(argHR.equals(""))){argHR = "";}                                                              |
| 49  | if ((argOrdPeriod==null)&#124;&#124;(argOrdPeriod.equals(""))){argOrdPeriod = "0";}                                        |
| 50  | if ((argTabIndex==null)&#124;&#124;(argTabIndex.equals(""))){argTabIndex = "0";}                                           |
| 51  | if ((argDispModif==null)&#124;&#124;(argDispModif.equals(""))){argDispModif = "";}                                         |
| 52  | if ((argHoursFormat==null)&#124;&#124;(argHoursFormat.equals(""))){argHoursFormat = "0";}                                  |
| 60  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 61  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                        |
| 62  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                              |
| 63  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";     |
| 64  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                          |
| 66  | expresión de cálculo/transformación: String loadMethod = "LOAD:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_THEOR_CONTROL"; |
| 70  | expresión de cálculo/transformación: String idPerson = zraiz + "STD_ID_HR";                                                |
| 71  | expresión de cálculo/transformación: String firstName = zraiz + "STD_N_FIRST_NAME";                                        |
| 72  | expresión de cálculo/transformación: String lastName = zraiz + "STD_N_FAMILY_NAME_1";                                      |
| 73  | expresión de cálculo/transformación: String dayType = zraiz + "SCO_ID_DAY_TYPE";                                           |
| 74  | expresión de cálculo/transformación: String nmdayType = zraiz + "SCO_NM_DAY_TYPE";                                         |
| 75  | expresión de cálculo/transformación: String idWeek = zraiz + "SCO_OR_WEEK";                                                |
| 76  | expresión de cálculo/transformación: String nmWeek = zraiz + "SCO_NM_WEEK";                                                |
| 77  | expresión de cálculo/transformación: String idCycle = zraiz + "SCO_ID_REF_MOD";                                            |
| 78  | expresión de cálculo/transformación: String date = zraiz + "DT_START";                                                     |
| 79  | expresión de cálculo/transformación: String hours = zraiz + "SCO_WORK_THEO_HRS";                                           |
| 80  | expresión de cálculo/transformación: String ordinalPeriod = zraiz + "STD_OR_HR_PERIOD";                                    |

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

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_day_control.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
