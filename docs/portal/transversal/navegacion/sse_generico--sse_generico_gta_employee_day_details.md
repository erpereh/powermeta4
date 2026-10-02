# sse_generico_gta_employee_day_details

Identificador: `sse_generico/sse_generico_gta_employee_day_details.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp) | `6c733d10aff003b4f44e6046806d11cabe31c301725e075408d20640b7c1e2de` |    271 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp)   | `6c733d10aff003b4f44e6046806d11cabe31c301725e075408d20640b7c1e2de` |    271 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp) | `6c733d10aff003b4f44e6046806d11cabe31c301725e075408d20640b7c1e2de` |    271 |
| BASE / español    | [sse_generico/espanol/sse_generico_gta_employee_day_details.jsp](../../../../clon_portal/portal/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp)                             | `6c733d10aff003b4f44e6046806d11cabe31c301725e075408d20640b7c1e2de` |    271 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_employee_day_details.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| 210 | form    | action=&lt;%=sFormAction%&gt;; method=post; name=LoadMonthlyView; id=LoadMonthlyView                                  |
| 211 | input   | type=hidden; id=tp_execution; name=tp_execution; value=                                                               |
| 212 | input   | type=hidden; id=node_to_save; name=node_to_save; value=                                                               |
| 213 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; name=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; value= |
| 214 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; name=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; value=       |
| 215 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; name=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; value=   |
| 216 | input   | type=hidden; id=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; name=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; value= |
| 217 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; name=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; value=   |
| 218 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; name=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; value=       |
| 219 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; name=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; value=           |
| 220 | input   | type=hidden; id=date_to_study; name=date_to_study; value=&lt;%=SCO_GTA_ARG_DATE_TO_STUDY%&gt;                         |
| 221 | input   | type=hidden; id=operation_in_SCO_GTA_MONTHLY_CONF_4_USER; name=operation_in_SCO_GTA_MONTHLY_CONF_4_USER; value=       |
| 222 | input   | type=hidden; id=date_to_load_detail; name=date_to_load_detail; value=&lt;%=SCO_GTA_ARG_DATE_TO_STUDY%&gt;             |
| 227 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                                                    |
| 228 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                                                 |
| 229 | input   | type=hidden; id=this_employee_working; name=this_employee_working; value=&lt;%=employee_idEncripted%&gt;              |
| 231 | input   | type=hidden; id=sDateEcrpt; name=sDateEcrpt; value=&lt;%=sDateEcrpt%&gt;                                              |
| 232 | input   | type=hidden; id=sDateNOEcrpt; name=sDateNOEcrpt; value=&lt;%=sDateNOEcrpt%&gt;                                        |
| 233 | input   | type=hidden; id=id_NOincidence; name=id_NOincidence; value=&lt;%=id_NOincidence%&gt;                                  |
| 234 | input   | type=hidden; id=sIdHrNoEcrpt; name=sIdHrNoEcrpt; value=&lt;%=sIdHr%&gt;                                               |
| 235 | input   | type=hidden; id=id_incidence; name=id_incidence; value=&lt;%=id_incidence%&gt;                                        |
| 240 | form    | action=&lt;%=sFormActionBack%&gt;; method=post; name=MainMonthlyView; id=MainMonthlyView                              |
| 241 | input   | type=hidden; id=tp_execution; name=tp_execution; value=CLOSE                                                          |
| 243 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                                                    |
| 244 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                                                 |
| 247 | input   | type=hidden; id=EmployeeEncripted; name=EmployeeEncripted; value=&lt;%=employee_idEncripted%&gt;                      |
| 248 | input   | type=hidden; id=employeeOrManager; name=employeeOrManager; value=&lt;%=CommingFrom%&gt;                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave                             | Acceso literal                                                      |
| --- | ------------------------------------------- | ------------------------------------------------------------------- |
| 32  | sMonthOrDetail                              | getParameter(request,"sMonthOrDetail")                              |
| 38  | sCommingFrom                                | getParameter(request,"sCommingFrom")                                |
| 44  | sType                                       | getParameter(request,"sType")                                       |
| 50  | sIdHr                                       | getParameter(request,"sIdHr")                                       |
| 56  | sOrPer                                      | getParameter(request,"sOrPer")                                      |
| 63  | sFormAction                                 | getParameter(request,"sFormAction")                                 |
| 68  | sFormActionBack                             | getParameter(request,"sFormActionBack")                             |
| 73  | SCO_GTA_ARG_DATE_TO_STUDY                   | getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                   |
| 78  | SCO_GTA_ARG_DATE_TO_STUDY                   | getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                   |
| 83  | tp_execution                                | getParameter(request,"tp_execution")                                |
| 88  | node_to_save                                | getParameter(request,"node_to_save")                                |
| 93  | operation_in_SCO_GTA_MONTHLY_CONF_4_USER    | getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")    |
| 98  | operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 103 | operation_in_SCO_GTA_INTERFACE_4_BADGAGE    | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    |
| 108 | operation_in_SCO_GTA_INTERFACE_4_REAL_DONE  | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  |
| 113 | operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT | getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") |
| 118 | operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY  | getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  |
| 123 | operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY    | getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    |
| 128 | operation_in_SCO_GTA_LOAD_ALERTS_4_DAY      | getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      |

| L   | Variable                  | Expresión fuente                                                                                                 | Resolución estática parcial                                                                                                            |
| --- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | zsubsesion                | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                                 | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 20  | zmeta4object              | "SCO_GTA_EMPLOYEE_PRESENCE_REPR"                                                                                 | SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 21  | znodo                     | "SCO_GTA_SSE_VISUAL_INTERFACE"                                                                                   | SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                           |
| 23  | zoutputdef                | zsubsesion + "!" + znodo + "[*]"                                                                                 | SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                                 |
| 24  | zmove                     | znodo + ":" + znodo + "[FIRST]"                                                                                  | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                                                               |
| 25  | zraiz                     | znodo + ":" + zsubsesion + "!" + znodo + "."                                                                     | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}                                  |
| 27  | LONG_BODY_4_DAILY_VW      | zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS"                                                                          | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"} |
| 28  | EMPLOYEE_WORKING_WITH     | zraiz + "SCO_GTA_PARAM_EMPLOYEE"                                                                                 | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_PARAM_EMPLOYEE"}        |
| 29  | COMMING_FROM              | zraiz + "SCO_GTA_PARAM_COMMING_FROM"                                                                             | SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_PARAM_COMMING_FROM"}    |
| 32  | sMonthOrDetailEcrpt       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMonthOrDetail")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMonthOrDetail")                                                             |
| 33  | sMonthOrDetail            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sMonthOrDetailEcrpt)       | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sMonthOrDetailEcrpt)                             |
| 38  | sCommingFromEcrpt         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sCommingFrom")                                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sCommingFrom")                                                               |
| 39  | sCommingFrom              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sCommingFromEcrpt)         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sCommingFromEcrpt)                               |
| 44  | sTypeEcrpt                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType")                                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType")                                                                      |
| 45  | sType                     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt)                | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt)                                      |
| 50  | sIdHrEcrpt                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                                                      |
| 51  | sIdHr                     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)                | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)                                      |
| 56  | sOrPerEcrpt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                                                     |
| 57  | sOrPer                    | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)               | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)                                     |
| 63  | sFormAction               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormAction")                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormAction")                                                                |
| 68  | sFormActionBack           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormActionBack")                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sFormActionBack")                                                            |
| 73  | SCO_GTA_ARG_DATE_TO_STUDY | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                                                  |
| 77  | sDateEcrpt                | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan",SCO_GTA_ARG_DATE_TO_STUDY) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan",SCO_GTA_ARG_DATE_TO_STUDY)                       |
| 78  | sDateNOEcrpt              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                                                  |
| 79  | id_incidence              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan","DELAY_NJ")                | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan","DELAY_NJ")                                      |
| 80  | id_NOincidence            | "DELAY_NJ"                                                                                                       | DELAY_NJ                                                                                                                               |
| 83  | tp_execution              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                                               |
| 88  | node_to_save              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                                               |
| 93  | changes_1bis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")                                   |
| 98  | changes_1                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF")                                |
| 103 | changes_2                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")                                   |
| 108 | changes_3                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")                                 |
| 113 | changes_4                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT")                                |
| 118 | changes_5                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")                                 |
| 123 | changes_6                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")                                   |
| 128 | changes_7                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")                                     |
| 155 | zmetodocarga              | "SCO_GTA_EXECUTE_FROM_ESS:" + zsubsesion + "!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"            | SCO_GTA_EXECUTE_FROM_ESS:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"}                  |
| 200 | employee_idEncripted      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", employee_id)              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", employee_id)                                    |
| 201 | CommingFromEncripted      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", CommingFrom)              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", CommingFrom)                                    |
| 203 | sIdHrEncripted            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)                    | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)                                          |
| 204 | sOrPerEncripted           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)                   | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                            |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 158 | m4:startpage | m4task=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                                                         |
| 159 | m4:beginjob  |                                                                                                                                               |
| 160 | m4:datadef   | m4o=SCO_GTA_EMPLOYEE_PRESENCE_REPR; m4name=SCO_GTA_EMPLOYEE_PRESENCE_REPR                                                                     |
| 186 | m4:exec      | m4method=SCO_GTA_EXECUTE_FROM_ESS:{}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"}                |
| 187 | m4:param     | name=SCO_GTA_ARG_TP_EXECUTION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                 |
| 188 | m4:param     | name=SCO_GTA_ARG_TEXT_TO_STUDY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 189 | m4:param     | name=SCO_GTA_ARG_NODE_TO_SAVE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                 |
| 190 | m4:outputdef | m4alias=SCO_GTA_SSE_VISUAL_INTERFACE                                                                                                          |
| 190 | m4:param     | name=m4name0; value=SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"[*]"}                                                    |
| 191 | m4:endjob    |                                                                                                                                               |
| 192 | m4:move      |                                                                                                                                               |
| 192 | m4:param     | name=SCO_GTA_EMPLOYEE_PRESENCE_REPR; value=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_SSE_VISUAL_INTERFACE{"[FIRST]"}                           |
| 194 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_GTA_ARG_DATE_TO_STUDY")                                                  |
| 195 | m4:item      | m4name=SCO_GTA_SSE_VISUAL_INTERFACE{":"}SCO_GTA_EMPLOYEE_PRESENCE_REPR{"!"}SCO_GTA_SSE_VISUAL_INTERFACE{"."}{"SCO_GTA_TEXT_2_DISPLAY_ON_ESS"} |
| 196 | m4:item      | m4varname=employee_id; item=SCO_GTA_PARAM_EMPLOYEE; htmlsafe=true; outputdef=SCO_GTA_SSE_VISUAL_INTERFACE                                     |
| 197 | m4:item      | m4varname=CommingFrom; item=SCO_GTA_PARAM_COMMING_FROM; htmlsafe=true; outputdef=SCO_GTA_SSE_VISUAL_INTERFACE                                 |

| L   | Operación | Argumentos literales                                                                                  |
| --- | --------- | ----------------------------------------------------------------------------------------------------- |
| 164 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_FUNCTNLIT_COMMING_FROM",sType                 |
| 165 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_COMMING_FROM",sCommingFrom              |
| 166 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_MONTHLY_V_OR_DETAIL_V",sMonthOrDetail         |
| 168 | setItem   | zsubsesion,"SCO_GTA_MONTHLY_PRESENCE_RPRST","","SCO_GTA_ARG_DATE_TO_STUDY",SCO_GTA_ARG_DATE_TO_STUDY  |
| 171 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE",sIdHr                         |
| 175 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_EMPLOYEE_PERIOD",sOrPer                 |
| 179 | setItem   | zsubsesion,"SCO_GTA_ORIGINAL_PARAMS_VALUES","","SCO_GTA_PARAM_DATE_OF_DATA",SCO_GTA_ARG_DATE_TO_STUDY |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if ((sMonthOrDetail==null)&#124;&#124;(sMonthOrDetail.equals(""))){                                                                                               |
| 40  | if ((sCommingFrom==null)&#124;&#124;(sCommingFrom.equals(""))){                                                                                                   |
| 46  | if ((sType==null)&#124;&#124;(sType.equals(""))){                                                                                                                 |
| 52  | if ((sIdHr==null)&#124;&#124;(sIdHr.equals(""))){                                                                                                                 |
| 58  | if ((sOrPer==null)&#124;&#124;(sOrPer.equals(""))){                                                                                                               |
| 64  | if ((sFormAction==null)&#124;&#124;(sFormAction.equals(""))){                                                                                                     |
| 69  | if ((sFormActionBack==null)&#124;&#124;(sFormActionBack.equals(""))){                                                                                             |
| 74  | if ((SCO_GTA_ARG_DATE_TO_STUDY==null)&#124;&#124;(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){                                                                         |
| 84  | if ((tp_execution==null)&#124;&#124;(tp_execution.equals(""))){                                                                                                   |
| 89  | if ((node_to_save==null)){                                                                                                                                        |
| 94  | if ((changes_1bis==null)){                                                                                                                                        |
| 99  | if ((changes_1==null)){                                                                                                                                           |
| 104 | if ((changes_2==null)){                                                                                                                                           |
| 109 | if ((changes_3==null)){                                                                                                                                           |
| 114 | if ((changes_4 ==null)){                                                                                                                                          |
| 119 | if ((changes_5 ==null)){                                                                                                                                          |
| 124 | if ((changes_6 ==null)){                                                                                                                                          |
| 129 | if ((changes_7 ==null)){                                                                                                                                          |
| 133 | if (changes_1.equals(""))                                                                                                                                         |
| 136 | if (changes_1.equals(""))                                                                                                                                         |
| 139 | if (changes_1.equals(""))                                                                                                                                         |
| 142 | if (changes_1.equals(""))                                                                                                                                         |
| 145 | if (changes_1.equals(""))                                                                                                                                         |
| 148 | if (changes_1.equals(""))                                                                                                                                         |
| 151 | if (changes_1.equals(""))                                                                                                                                         |
| 170 | if (!(sIdHr.equals(""))){                                                                                                                                         |
| 174 | if (!(sOrPer.equals(""))){                                                                                                                                        |
| 178 | if (!(SCO_GTA_ARG_DATE_TO_STUDY.equals(""))){                                                                                                                     |
| 256 | &lt;% if (tp_execution.equals("SAVE_CHANGES")){ //Update Planning if change in details%&gt;                                                                       |
| 258 | if ( (window.opener) &amp;&amp; (window.opener.location) )                                                                                                        |
| 260 | if (window.parent.opener.document.getElementById('htmlGTA'))                                                                                                      |
| 23  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                        |
| 24  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                              |
| 25  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                 |
| 27  | expresión de cálculo/transformación: String LONG_BODY_4_DAILY_VW = zraiz + "SCO_GTA_TEXT_2_DISPLAY_ON_ESS";                                                       |
| 28  | expresión de cálculo/transformación: String EMPLOYEE_WORKING_WITH = zraiz + "SCO_GTA_PARAM_EMPLOYEE";                                                             |
| 29  | expresión de cálculo/transformación: String COMMING_FROM = zraiz + "SCO_GTA_PARAM_COMMING_FROM";                                                                  |
| 155 | expresión de cálculo/transformación: String zmetodocarga = "SCO_GTA_EXECUTE_FROM_ESS:" + zsubsesion + "!SCO_GTA_MONTHLY_PRESENCE_RPRST.SCO_GTA_EXECUTE_FROM_ESS"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 12  | ../../sse_generico/sse_generico_trans.jsp    |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 9   | /css/sse_gta_daily_view.css                  |
| 10  | /libreria/funciones_sse_val1.js              |
| 11  | /libreria/funciones_sse.js                   |
| 13  | /libreria/sco_incidences_link.js             |
| 14  | /libreria/funciones_gta_monthly_view.js      |
| 210 | &lt;%=sFormAction%&gt;                       |
| 240 | &lt;%=sFormActionBack%&gt;                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 12  | ../../sse_generico/sse_generico_trans.jsp    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                                                                                                                    |
| ------ | --- | -------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| COLL   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| COLL   | 10  | /libreria/funciones_sse_val1.js              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                 |
| COLL   | 11  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                     |
| COLL   | 13  | /libreria/sco_incidences_link.js             | contextual | [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md); [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md)                             |
| COLL   | 14  | /libreria/funciones_gta_monthly_view.js      | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md); [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md) |
| COLL   | 210 | &lt;%=sFormAction%&gt;                       | dinámica   | P06                                                                                                                                                                                                  |
| COLL   | 240 | &lt;%=sFormActionBack%&gt;                   | dinámica   | P06                                                                                                                                                                                                  |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| COLL   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| CYC    | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| CYC    | 10  | /libreria/funciones_sse_val1.js              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                                                    |
| CYC    | 11  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                              |
| CYC    | 13  | /libreria/sco_incidences_link.js             | contextual | [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md)                                                                                                                  |
| CYC    | 14  | /libreria/funciones_gta_monthly_view.js      | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md)                                                                                                    |
| CYC    | 210 | &lt;%=sFormAction%&gt;                       | dinámica   | P06                                                                                                                                                                                                  |
| CYC    | 240 | &lt;%=sFormActionBack%&gt;                   | dinámica   | P06                                                                                                                                                                                                  |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| CYC    | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| IBER   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| IBER   | 10  | /libreria/funciones_sse_val1.js              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                 |
| IBER   | 11  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                     |
| IBER   | 13  | /libreria/sco_incidences_link.js             | contextual | [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md); [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md)                             |
| IBER   | 14  | /libreria/funciones_gta_monthly_view.js      | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md); [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md) |
| IBER   | 210 | &lt;%=sFormAction%&gt;                       | dinámica   | P06                                                                                                                                                                                                  |
| IBER   | 240 | &lt;%=sFormActionBack%&gt;                   | dinámica   | P06                                                                                                                                                                                                  |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| IBER   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| BASE   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |
| BASE   | 10  | /libreria/funciones_sse_val1.js              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                                                    |
| BASE   | 11  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                                                              |
| BASE   | 13  | /libreria/sco_incidences_link.js             | contextual | [libreria/sco_incidences_link.js](../dependencias/libreria--sco_incidences_link.md)                                                                                                                  |
| BASE   | 14  | /libreria/funciones_gta_monthly_view.js      | contextual | [libreria/funciones_gta_monthly_view.js](../dependencias/libreria--funciones_gta_monthly_view.md)                                                                                                    |
| BASE   | 210 | &lt;%=sFormAction%&gt;                       | dinámica   | P06                                                                                                                                                                                                  |
| BASE   | 240 | &lt;%=sFormActionBack%&gt;                   | dinámica   | P06                                                                                                                                                                                                  |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                                                                         |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                                                                     |
| BASE   | 12  | ../../sse_generico/sse_generico_trans.jsp    | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_generico_gta_employee_day_details.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
