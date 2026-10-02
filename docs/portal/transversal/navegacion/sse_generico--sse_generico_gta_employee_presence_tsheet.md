# sse_generico_gta_employee_presence_TSheet

Identificador: `sse_generico/sse_generico_gta_employee_presence_TSheet.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Clave       | Texto                          | Ámbito | Diccionario                                                                                  |
| ----------- | ------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| GTA_No_Data | No tienes hoja de presencia.   | COLL   | [translations/ess_mss_gen_es.properties:L206](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_No_Data | No tienes hoja de presencia.   | CYC    | [translations/ess_mss_gen_es.properties:L206](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_No_Data | No tienes hoja de presencia.   | IBER   | [translations/ess_mss_gen_es.properties:L206](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_No_Data | No tienes hoja de presencia.   | BASE   | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title   | Hoja de presencia del empleado | COLL   | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title   | Hoja de presencia del empleado | CYC    | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title   | Hoja de presencia del empleado | IBER   | [translations/ess_mss_gen_es.properties:L205](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_Title   | Hoja de presencia del empleado | BASE   | [translations/ess_mss_gen_es.properties:L204](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp) | `4756ea73cd07552951a89140f50f11a9d418dd64721b322849a099944d775552` |    197 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp)   | `4756ea73cd07552951a89140f50f11a9d418dd64721b322849a099944d775552` |    197 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp) | `4756ea73cd07552951a89140f50f11a9d418dd64721b322849a099944d775552` |    197 |
| BASE / español    | [sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp](../../../../clon_portal/portal/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp)                             | `4756ea73cd07552951a89140f50f11a9d418dd64721b322849a099944d775552` |    197 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------- |
| 162 | form    | action=&lt;%=sFormAction%&gt;; method=post; name=LoadMonthlyView; id=LoadMonthlyView           |
| 163 | input   | type=hidden; id=Blocking; name=Blocking; value=&lt;m4:item m4name=                             |
| 164 | input   | type=hidden; id=tp_execution; name=tp_execution; value=                                        |
| 165 | input   | type=hidden; id=start_period; name=start_period; value=                                        |
| 166 | input   | type=hidden; id=end_period; name=end_period; value=                                            |
| 167 | input   | type=hidden; id=SCO_GTA_ARG_DATE_TO_STUDY; name=SCO_GTA_ARG_DATE_TO_STUDY; value=              |
| 168 | input   | type=hidden; id=tp_timesheet; name=tp_timesheet; value=&lt;m4:item m4name=                     |
| 172 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                             |
| 173 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                          |
| 177 | form    | action=&lt;%=sFormActionRedirect%&gt;; method=post; name=LoadDetailesView; id=LoadDetailesView |
| 178 | input   | type=hidden; id=date_to_load_detail; name=date_to_load_detail; value=                          |
| 183 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                             |
| 184 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave           | Acceso literal                                    |
| --- | ------------------------- | ------------------------------------------------- |
| 18  | estado                    | getParameter(request,"estado")                    |
| 19  | zinicios                  | getParameter(request,"zinicios")                  |
| 48  | tp_execution              | getParameter(request,"tp_execution")              |
| 53  | start_period              | getParameter(request,"start_period")              |
| 58  | end_period                | getParameter(request,"end_period")                |
| 63  | SCO_GTA_ARG_DATE_TO_STUDY | getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY") |

| L   | Variable                  | Expresión fuente                                                                                            | Resolución estática parcial                                                                                                             |
| --- | ------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | estado                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                      |
| 19  | zinicios                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                    |
| 33  | zsubsesion                | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                            | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                          |
| 34  | zmeta4object              | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                            | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                          |
| 35  | znodo                     | "SCO_GTA_SSE_VISUAL_INTERFACE"                                                                              | SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                            |
| 37  | zoutputdef                | zsubsesion + "!" + znodo + "[*]"                                                                            | SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                                  |
| 38  | zmove                     | znodo + ":" + znodo + "[FIRST]"                                                                             | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                                                                |
| 39  | zraiz                     | znodo + ":" + zsubsesion + "!" + znodo + "."                                                                | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}                                   |
| 41  | LONG_BODY_4_MONTHLY_VW    | zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS"                                                                     | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"}  |
| 42  | ESS_TOOLTIP_FRAMEWORK     | zraiz + "SCO_GTA_ESS_TOOLTIP_FRAMEWORK"                                                                     | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ESS_TOOLTIP_FRAMEWORK"}  |
| 43  | ESS_TOOLTIP_FUNCTIONS     | zraiz + "SCO_GTA_ESS_TOOLTIP_FUNCTIONS"                                                                     | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ESS_TOOLTIP_FUNCTIONS"}  |
| 44  | ALERTS_SHOW_FUNCTIONS     | zraiz + "SCO_GTA_ALERTS_SHOW_FUNCTIONS"                                                                     | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ALERTS_SHOW_FUNCTIONS"}  |
| 45  | TP_MONTHLY_VIEW_2_DRAW    | zraiz + "SCO_GTA_TP_MONTHLY_VIEW_2_DRAW"                                                                    | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TP_MONTHLY_VIEW_2_DRAW"} |
| 46  | THERE_ARE_BLOCKG_ALERT    | zraiz + "SCO_GTA_THERE_ARE_BLOCKG_ALERT"                                                                    | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_THERE_ARE_BLOCKG_ALERT"} |
| 48  | tp_execution              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                                                |
| 53  | start_period              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"start_period")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"start_period")                                                                |
| 58  | end_period                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"end_period")                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"end_period")                                                                  |
| 63  | SCO_GTA_ARG_DATE_TO_STUDY | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                                                   |
| 88  | zmetodocarga              | "SCO_GTA_FROM_1_EMPLOYE_2_OTHER:" + zsubsesion + "!SCO_GTA_ORIGINAL_PARAMS_VALUES.SCO_GTA_EXECUTE_FROM_ESS" | SCO_GTA_FROM_1_EMPLOYE_2_OTHER:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_ORIGINAL_PARAMS_VALUES.SCO_GTA_EXECUTE_FROM_ESS"}             |
| 126 | zcount                    | 0                                                                                                           | 0                                                                                                                                       |
| 127 | zcounti                   | 0                                                                                                           | 0                                                                                                                                       |
| 133 | zcountv                   | String.valueOf(zcounti)                                                                                     | String.valueOf(zcounti)                                                                                                                 |
| 156 | sIdHrEncripted            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)               | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)                                           |
| 157 | sOrPerEncripted           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                            |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 91  | m4:startpage | m4task=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 92  | m4:beginjob  |                                                                                                                                               |
| 93  | m4:datadef   | m4o=SCO_GTA_EMPLOYEE_PRESENCE_REPR; m4name=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                     |
| 120 | m4:exec      | m4method=SCO_GTA_FROM_1_EMPLOYE_2_OTHER:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_ORIGINAL_PARAMS_VALUES.SCO_GTA_EXECUTE_FROM_ESS"}          |
| 121 | m4:param     | name=SCO_GTA_ARG_TP_EXECUTION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                 |
| 122 | m4:outputdef | m4alias=SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                          |
| 122 | m4:param     | name=m4name0; value=SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                    |
| 123 | m4:endjob    |                                                                                                                                               |
| 124 | m4:move      |                                                                                                                                               |
| 124 | m4:param     | name=SCO_GTA_EMPLOYEE_PRESENCE_REPR; value=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                           |
| 139 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ESS_TOOLTIP_FRAMEWORK"} |
| 140 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ESS_TOOLTIP_FUNCTIONS"} |
| 143 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_ALERTS_SHOW_FUNCTIONS"} |
| 160 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"} |

| L   | Operación        | Argumentos literales                                                                                  |
| --- | ---------------- | ----------------------------------------------------------------------------------------------------- |
| 97  | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_FUNCTNLIT_COMMING_FROM",sType                 |
| 98  | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_COMMING_FROM",sCommingFrom              |
| 99  | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_MONTHLY_V_OR_DETAIL_V",sMonthOrDetail         |
| 101 | setItem          | zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_LOAD_INFO_START_PERD_S",start_period          |
| 102 | setItem          | zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_LOAD_INFO_END_PERIOD_S",end_period            |
| 104 | setItem          | zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_ARG_DATE_TO_STUDY",SCO_GTA_ARG_DATE_TO_STUDY  |
| 107 | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE",sIdHr                         |
| 111 | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE_PERIOD",sOrPer                 |
| 115 | setItem          | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_DATE_OF_DATA",SCO_GTA_ARG_DATE_TO_STUDY |
| 130 | getCount         | znodo,zsubsesion,znodo                                                                                |
| 131 | getCountInClient | znodo,zsubsesion,znodo                                                                                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                     |
| 24  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                                                 |
| 49  | if ((tp_execution==null)&#124;&#124;(tp_execution.equals(""))){                                                                                                         |
| 54  | if ((start_period==null)&#124;&#124;(start_period.equals(""))){                                                                                                         |
| 59  | if ((end_period==null)&#124;&#124;(end_period.equals(""))){                                                                                                             |
| 64  | if ((SCO_GTA_ARG_DATE_TO_STUDY==null)&#124;&#124;(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){                                                                               |
| 68  | if ((sMonthOrDetail==null)&#124;&#124;(sMonthOrDetail.equals(""))){                                                                                                     |
| 72  | if ((sCommingFrom==null)&#124;&#124;(sCommingFrom.equals(""))){                                                                                                         |
| 76  | if ((sType==null)&#124;&#124;(sType.equals(""))){                                                                                                                       |
| 80  | if ((sIdHr==null)&#124;&#124;(sIdHr.equals(""))){                                                                                                                       |
| 84  | if ((sOrPer==null)&#124;&#124;(sOrPer.equals(""))){                                                                                                                     |
| 106 | if (!(sIdHr.equals(""))){                                                                                                                                               |
| 110 | if (!(sOrPer.equals(""))){                                                                                                                                              |
| 114 | if (!(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){                                                                                                                           |
| 154 | &lt;%if (zcounti &gt; 0) {                                                                                                                                              |
| 189 | &lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;&lt;%=Tran.getProperty("GTA_No_Data")%&gt;&lt;/div&gt;&lt;%}%&gt;                                                      |
| 37  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                              |
| 38  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                    |
| 39  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                       |
| 41  | expresión de cálculo/transformación: String LONG_BODY_4_MONTHLY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";                                                           |
| 42  | expresión de cálculo/transformación: String ESS_TOOLTIP_FRAMEWORK = zraiz + "SCO_GTA_ESS_TOOLTIP_FRAMEWORK";                                                            |
| 43  | expresión de cálculo/transformación: String ESS_TOOLTIP_FUNCTIONS = zraiz + "SCO_GTA_ESS_TOOLTIP_FUNCTIONS";                                                            |
| 44  | expresión de cálculo/transformación: String ALERTS_SHOW_FUNCTIONS = zraiz + "SCO_GTA_ALERTS_SHOW_FUNCTIONS";                                                            |
| 45  | expresión de cálculo/transformación: String TP_MONTHLY_VIEW_2_DRAW = zraiz + "SCO_GTA_TP_MONTHLY_VIEW_2_DRAW";                                                          |
| 46  | expresión de cálculo/transformación: String THERE_ARE_BLOCKG_ALERT = zraiz + "SCO_GTA_THERE_ARE_BLOCKG_ALERT";                                                          |
| 88  | expresión de cálculo/transformación: String zmetodocarga = "SCO_GTA_FROM_1_EMPLOYE_2_OTHER:" + zsubsesion + "!SCO_GTA_ORIGINAL_PARAMS_VALUES.SCO_GTA_EXECUTE_FROM_ESS"; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 6   | ../../sse_generico/espanol/menu_ess.jsp            |
| 30  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp      |
| 190 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | /css/sse_gta_monthly_view.css                      |
| 11  | /libreria/funciones_sse.js                         |
| 147 | /libreria/funciones_gta_monthly_view_presence.js   |
| 162 | &lt;%=sFormAction%&gt;                             |
| 177 | &lt;%=sFormActionRedirect%&gt;                     |
| 6   | ../../sse_generico/espanol/menu_ess.jsp            |
| 30  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp      |
| 190 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                                                                                        |
| ------ | --- | -------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| COLL   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| COLL   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| COLL   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| COLL   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                         |
| COLL   | 147 | /libreria/funciones_gta_monthly_view_presence.js   | contextual | [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md); [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md) |
| COLL   | 162 | &lt;%=sFormAction%&gt;                             | dinámica   | P06                                                                                                                                                                                                                                      |
| COLL   | 177 | &lt;%=sFormActionRedirect%&gt;                     | dinámica   | P06                                                                                                                                                                                                                                      |
| COLL   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| COLL   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| COLL   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| COLL   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| CYC    | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| CYC    | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| CYC    | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| CYC    | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| CYC    | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                                                                  |
| CYC    | 147 | /libreria/funciones_gta_monthly_view_presence.js   | contextual | [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md)                                                                                                                      |
| CYC    | 162 | &lt;%=sFormAction%&gt;                             | dinámica   | P06                                                                                                                                                                                                                                      |
| CYC    | 177 | &lt;%=sFormActionRedirect%&gt;                     | dinámica   | P06                                                                                                                                                                                                                                      |
| CYC    | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| CYC    | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| CYC    | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| CYC    | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| IBER   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| IBER   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| IBER   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| IBER   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| IBER   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                         |
| IBER   | 147 | /libreria/funciones_gta_monthly_view_presence.js   | contextual | [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md); [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md) |
| IBER   | 162 | &lt;%=sFormAction%&gt;                             | dinámica   | P06                                                                                                                                                                                                                                      |
| IBER   | 177 | &lt;%=sFormActionRedirect%&gt;                     | dinámica   | P06                                                                                                                                                                                                                                      |
| IBER   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| IBER   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| IBER   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| IBER   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| BASE   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| BASE   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| BASE   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |
| BASE   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                                                                  |
| BASE   | 147 | /libreria/funciones_gta_monthly_view_presence.js   | contextual | [libreria/funciones_gta_monthly_view_presence.js](../dependencias/libreria--funciones_gta_monthly_view_presence.md)                                                                                                                      |
| BASE   | 162 | &lt;%=sFormAction%&gt;                             | dinámica   | P06                                                                                                                                                                                                                                      |
| BASE   | 177 | &lt;%=sFormActionRedirect%&gt;                     | dinámica   | P06                                                                                                                                                                                                                                      |
| BASE   | 6   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                                                                                                   |
| BASE   | 30  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                                                                                                   |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                                                                                       |
| BASE   | 190 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_generico_gta_employee_presence_TSheet.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
