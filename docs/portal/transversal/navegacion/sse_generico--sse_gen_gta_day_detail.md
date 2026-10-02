# sse_gen_gta_day_detail

Identificador: `sse_generico/sse_gen_gta_day_detail.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Clave     | Texto                          | Ámbito | Diccionario                                                                                  |
| --------- | ------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| GTA_Title | Hoja de presencia del empleado | COLL   | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title | Hoja de presencia del empleado | CYC    | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title | Hoja de presencia del empleado | IBER   | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title | Hoja de presencia del empleado | BASE   | [translations/ess_mss_gen_es.properties:L204](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_gen_gta_day_detail.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_gen_gta_day_detail.jsp) | `2a3a9dbcddd58997a6768a5e311cdb12aa9011d41cfce3c3565a110626dea32d` |    212 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_gen_gta_day_detail.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_gen_gta_day_detail.jsp)   | `2a3a9dbcddd58997a6768a5e311cdb12aa9011d41cfce3c3565a110626dea32d` |    212 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_gen_gta_day_detail.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_gen_gta_day_detail.jsp) | `2a3a9dbcddd58997a6768a5e311cdb12aa9011d41cfce3c3565a110626dea32d` |    212 |
| BASE / español    | [sse_generico/espanol/sse_gen_gta_day_detail.jsp](../../../../clon_portal/portal/sse_generico/espanol/sse_gen_gta_day_detail.jsp)                             | `2a3a9dbcddd58997a6768a5e311cdb12aa9011d41cfce3c3565a110626dea32d` |    212 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_gen_gta_day_detail.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_gen_gta_day_detail.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| 165 | form    | action=&lt;%=sActionPath%&gt;; method=get; name=LoadMonthlyView; id=LoadMonthlyView                                   |
| 166 | input   | type=hidden; id=sDate; name=sDate; value=&lt;%=sDate%&gt;                                                             |
| 167 | input   | type=hidden; id=tp_execution; name=tp_execution; value=&lt;%=tp_execution%&gt;                                        |
| 168 | input   | type=hidden; id=node_to_save; name=node_to_save; value=&lt;%=node_to_save%&gt;                                        |
| 169 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; name=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; value= |
| 170 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; name=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; value=       |
| 171 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; name=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; value=   |
| 172 | input   | type=hidden; id=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; name=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; value= |
| 173 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; name=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; value=   |
| 174 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; name=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; value=       |
| 175 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; name=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; value=           |
| 177 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                                                    |
| 178 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                                                 |
| 179 | input   | type=hidden; id=sType; name=sType; value=&lt;%=sTypeEncripted%&gt;                                                    |
| 180 | input   | type=hidden; id=sCommingFrom; name=node_to_save; value=&lt;%=sCommingFromEncripted%&gt;                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave                             | Acceso literal                                                      |
| --- | ------------------------------------------- | ------------------------------------------------------------------- |
| 39  | sIdHr                                       | getParameter(request,"sIdHr")                                       |
| 45  | sOrPer                                      | getParameter(request,"sOrPer")                                      |
| 51  | sDate                                       | getParameter(request,"sDate")                                       |
| 62  | tp_execution                                | getParameter(request,"tp_execution")                                |
| 67  | node_to_save                                | getParameter(request,"node_to_save")                                |
| 72  | operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 77  | operation_in_SCO_GTA_INTERFACE_4_BADGAGE    | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    |
| 82  | operation_in_SCO_GTA_INTERFACE_4_REAL_DONE  | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  |
| 87  | operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT | getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") |
| 92  | operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY  | getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  |
| 97  | operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY    | getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    |
| 102 | operation_in_SCO_GTA_LOAD_ALERTS_4_DAY      | getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      |

| L   | Variable              | Expresión fuente                                                                                        | Resolución estática parcial                                                                                                            |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | sActionPath           | ""                                                                                                      |                                                                                                                                        |
| 29  | zsubsesion            | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                        | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 30  | zmeta4object          | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                        | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 31  | znodo                 | "SCO_GTA_SSE_VISUAL_INTERFACE"                                                                          | SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                           |
| 33  | zoutputdef            | zsubsesion + "!" + znodo + "[*]"                                                                        | SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                                 |
| 34  | zmove                 | znodo + ":" + znodo + "[FIRST]"                                                                         | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                                                               |
| 35  | zraiz                 | znodo + ":" + zsubsesion + "!" + znodo + "."                                                            | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}                                  |
| 37  | LONG_BODY_4_DAILY_VW  | zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS"                                                                 | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"} |
| 39  | sIdHrEcrpt            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                                                      |
| 40  | sIdHr                 | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)       | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)                                      |
| 45  | sOrPerEcrpt           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                                                     |
| 46  | sOrPer                | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)                                     |
| 51  | sDate                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sDate")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sDate")                                                                      |
| 62  | tp_execution          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                                               |
| 67  | node_to_save          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                                               |
| 72  | changes_1             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF")                                |
| 77  | changes_2             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")                                   |
| 82  | changes_3             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")                                 |
| 87  | changes_4             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT")                                |
| 92  | changes_5             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")                                 |
| 97  | changes_6             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")                                   |
| 102 | changes_7             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")                                     |
| 125 | zmetodocarga          | "SCO_GTA_EXECUTE_FROM_ESS:" + zsubsesion + "!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"   | SCO_GTA_EXECUTE_FROM_ESS:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"}                  |
| 158 | sIdHrEncripted        | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)                                          |
| 159 | sOrPerEncripted       | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)          | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)                                         |
| 160 | sTypeEncripted        | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType)           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType)                                          |
| 161 | sCommingFromEncripted | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom)    | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom)                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                            |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 128 | m4:startpage | m4task=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 129 | m4:beginjob  |                                                                                                                                               |
| 130 | m4:datadef   | m4o=SCO_GTA_EMPLOYEE_PRESENCE_REPR; m4name=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                     |
| 145 | m4:exec      | m4method=SCO_GTA_EXECUTE_FROM_ESS:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"}                |
| 146 | m4:param     | name=SCO_GTA_ARG_TP_EXECUTION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                 |
| 147 | m4:param     | name=SCO_GTA_ARG_TEXT_TO_STUDY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 148 | m4:param     | name=SCO_GTA_ARG_NODE_TO_SAVE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                 |
| 150 | m4:outputdef | m4alias=SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                          |
| 150 | m4:param     | name=m4name0; value=SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                    |
| 151 | m4:endjob    |                                                                                                                                               |
| 152 | m4:move      |                                                                                                                                               |
| 152 | m4:param     | name=SCO_GTA_EMPLOYEE_PRESENCE_REPR; value=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                           |
| 154 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sDate")                                                                      |
| 155 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"} |

| L   | Operación | Argumentos literales                                                                          |
| --- | --------- | --------------------------------------------------------------------------------------------- |
| 134 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_FUNCTNLIT_COMMING_FROM",sType         |
| 135 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_COMMING_FROM",sCommingFrom      |
| 136 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_MONTHLY_V_OR_DETAIL_V",sMonthOrDetail |
| 137 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_DATE_OF_DATA",sDate             |
| 138 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE",sIdHr                 |
| 139 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE_PERIOD",sOrPer         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 199 | OpenIncidences |            |

| L   | Condición / acción / mensaje literal                                                                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22  | if (sCommingFrom.equals("M")){                                                                                                                                    |
| 24  | }else{                                                                                                                                                            |
| 41  | if (sIdHr==null){                                                                                                                                                 |
| 47  | if (sOrPer==null){                                                                                                                                                |
| 52  | if ((sDate==null)&#124;&#124;(sDate.equals(""))){                                                                                                                 |
| 56  | if ((sType==null)&#124;&#124;(sType.equals(""))){                                                                                                                 |
| 63  | if ((tp_execution==null)&#124;&#124;(tp_execution.equals(""))){                                                                                                   |
| 68  | if ((node_to_save==null)){                                                                                                                                        |
| 73  | if ((changes_1==null)){                                                                                                                                           |
| 78  | if ((changes_2==null)){                                                                                                                                           |
| 83  | if ((changes_3==null)){                                                                                                                                           |
| 88  | if ((changes_4 ==null)){                                                                                                                                          |
| 93  | if ((changes_5 ==null)){                                                                                                                                          |
| 98  | if ((changes_6 ==null)){                                                                                                                                          |
| 103 | if ((changes_7 ==null)){                                                                                                                                          |
| 107 | if (changes_1.equals(""))                                                                                                                                         |
| 110 | if (changes_1.equals(""))                                                                                                                                         |
| 113 | if (changes_1.equals(""))                                                                                                                                         |
| 116 | if (changes_1.equals(""))                                                                                                                                         |
| 119 | if (changes_1.equals(""))                                                                                                                                         |
| 122 | if (changes_1.equals(""))                                                                                                                                         |
| 194 | if ("&lt;%=tp_execution%&gt;"=="CLOSE")                                                                                                                           |
| 33  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                        |
| 34  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                              |
| 35  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                 |
| 37  | expresión de cálculo/transformación: String LONG_BODY_4_DAILY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";                                                       |
| 125 | expresión de cálculo/transformación: String zmetodocarga = "SCO_GTA_EXECUTE_FROM_ESS:" + zsubsesion + "!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 6   | ../../sse_generico/sse_generico_trans.jsp    |

| L   | Destino / recurso                                                                                                                                  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                                                                                                |
| 10  | /css/sse_gta_daily_view.css                                                                                                                        |
| 11  | /libreria/funciones_sse_val1.js                                                                                                                    |
| 12  | /libreria/funciones_sse.js                                                                                                                         |
| 15  | /libreria/funciones_gta_monthly_view.js                                                                                                            |
| 165 | &lt;%=sActionPath%&gt;                                                                                                                             |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       |
| 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          |
| 23  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp                                                                           |
| 25  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp                                                                  |
| 200 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=&lt;%=sIdHr%&gt;&amp;argDateDeb=&lt;%=sDate%&gt;&amp;argIncidence=A3&amp;argFunction=load |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                                         | Resolución | Ficha / candidato                                                                                                                                                                                    |
| ------ | --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| COLL   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| COLL   | 11  | /libreria/funciones_sse_val1.js                                                                                                                    | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                 |
| COLL   | 12  | /libreria/funciones_sse.js                                                                                                                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                     |
| COLL   | 15  | /libreria/funciones_gta_monthly_view.js                                                                                                            | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md); [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md) |
| COLL   | 165 | &lt;%=sActionPath%&gt;                                                                                                                             | dinámica   | P06                                                                                                                                                                                                  |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| COLL   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| COLL   | 23  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp                                                                           | ausente    | P06                                                                                                                                                                                                  |
| COLL   | 25  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp                                                                  | ausente    | P06                                                                                                                                                                                                  |
| COLL   | 200 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=&lt;%=sIdHr%&gt;&amp;argDateDeb=&lt;%=sDate%&gt;&amp;argIncidence=A3&amp;argFunction=load | ausente    | P06                                                                                                                                                                                                  |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| CYC    | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| CYC    | 11  | /libreria/funciones_sse_val1.js                                                                                                                    | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                                                    |
| CYC    | 12  | /libreria/funciones_sse.js                                                                                                                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                              |
| CYC    | 15  | /libreria/funciones_gta_monthly_view.js                                                                                                            | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md)                                                                                                    |
| CYC    | 165 | &lt;%=sActionPath%&gt;                                                                                                                             | dinámica   | P06                                                                                                                                                                                                  |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| CYC    | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| CYC    | 23  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp                                                                           | ausente    | P06                                                                                                                                                                                                  |
| CYC    | 25  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp                                                                  | ausente    | P06                                                                                                                                                                                                  |
| CYC    | 200 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=&lt;%=sIdHr%&gt;&amp;argDateDeb=&lt;%=sDate%&gt;&amp;argIncidence=A3&amp;argFunction=load | ausente    | P06                                                                                                                                                                                                  |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| IBER   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| IBER   | 11  | /libreria/funciones_sse_val1.js                                                                                                                    | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                 |
| IBER   | 12  | /libreria/funciones_sse.js                                                                                                                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                     |
| IBER   | 15  | /libreria/funciones_gta_monthly_view.js                                                                                                            | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md); [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md) |
| IBER   | 165 | &lt;%=sActionPath%&gt;                                                                                                                             | dinámica   | P06                                                                                                                                                                                                  |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| IBER   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| IBER   | 23  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp                                                                           | ausente    | P06                                                                                                                                                                                                  |
| IBER   | 25  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp                                                                  | ausente    | P06                                                                                                                                                                                                  |
| IBER   | 200 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=&lt;%=sIdHr%&gt;&amp;argDateDeb=&lt;%=sDate%&gt;&amp;argIncidence=A3&amp;argFunction=load | ausente    | P06                                                                                                                                                                                                  |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| BASE   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| BASE   | 11  | /libreria/funciones_sse_val1.js                                                                                                                    | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                                                    |
| BASE   | 12  | /libreria/funciones_sse.js                                                                                                                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                              |
| BASE   | 15  | /libreria/funciones_gta_monthly_view.js                                                                                                            | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md)                                                                                                    |
| BASE   | 165 | &lt;%=sActionPath%&gt;                                                                                                                             | dinámica   | P06                                                                                                                                                                                                  |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                                         | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                                                                                       | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| BASE   | 6   | ../../sse_generico/sse_generico_trans.jsp                                                                                                          | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| BASE   | 23  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp                                                                           | ausente    | P06                                                                                                                                                                                                  |
| BASE   | 25  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection_planning.jsp                                                                  | ausente    | P06                                                                                                                                                                                                  |
| BASE   | 200 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=&lt;%=sIdHr%&gt;&amp;argDateDeb=&lt;%=sDate%&gt;&amp;argIncidence=A3&amp;argFunction=load | ausente    | P06                                                                                                                                                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_gen_gta_day_detail.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
