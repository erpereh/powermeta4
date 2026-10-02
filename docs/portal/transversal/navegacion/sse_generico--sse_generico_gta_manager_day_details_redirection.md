# sse_generico_gta_manager_day_details_redirection

Identificador: `sse_generico/sse_generico_gta_manager_day_details_redirection.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp) | `f233cee2b46928ef8537aaafbfe01cdbfad898967646681c22b9db5123b0ac34` |    143 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp)   | `f233cee2b46928ef8537aaafbfe01cdbfad898967646681c22b9db5123b0ac34` |    143 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp) | `f233cee2b46928ef8537aaafbfe01cdbfad898967646681c22b9db5123b0ac34` |    143 |
| BASE / español    | [sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp](../../../../clon_portal/portal/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp)                             | `f233cee2b46928ef8537aaafbfe01cdbfad898967646681c22b9db5123b0ac34` |    143 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_generico_gta_manager_day_details_redirection.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 95  | Cargando datos. Por favor, espere unos segundos... |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                    |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 95  | img     | src=/iconos/cargando.gif; alt=En chargement des detailles pour la journée &lt;%=SCO_GTA_ARG_DATE_TO_STUDY%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 97  | form    | action=/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp; method=post; name=redireccion; id=redireccion                                                                      |
| 98  | input   | type=hidden; id=SCO_GTA_ARG_DATE_TO_STUDY; name=SCO_GTA_ARG_DATE_TO_STUDY; value=&lt;%=SCO_GTA_ARG_DATE_TO_STUDY%&gt;                                                                                        |
| 99  | input   | type=hidden; id=tp_execution; name=tp_execution; value=&lt;%=tp_execution%&gt;                                                                                                                               |
| 100 | input   | type=hidden; id=node_to_save; name=node_to_save; value=&lt;%=node_to_save%&gt;                                                                                                                               |
| 101 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; name=operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF; value=&lt;%=changes_1%&gt;                                                                    |
| 102 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; name=operation_in_SCO_GTA_INTERFACE_4_BADGAGE; value=&lt;%=changes_2%&gt;                                                                          |
| 103 | input   | type=hidden; id=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; name=operation_in_SCO_GTA_INTERFACE_4_REAL_DONE; value=&lt;%=changes_3%&gt;                                                                      |
| 104 | input   | type=hidden; id=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; name=operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT; value=&lt;%=changes_4%&gt;                                                                    |
| 105 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; name=operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY; value=&lt;%=changes_5%&gt;                                                                      |
| 106 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; name=operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY; value=&lt;%=changes_6%&gt;                                                                          |
| 107 | input   | type=hidden; id=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; name=operation_in_SCO_GTA_LOAD_ALERTS_4_DAY; value=&lt;%=changes_7%&gt;                                                                              |
| 108 | input   | type=hidden; id=operation_in_SCO_GTA_MONTHLY_CONF_4_USER; name=operation_in_SCO_GTA_MONTHLY_CONF_4_USER; value=&lt;%=changes_1bis%&gt;                                                                       |
| 109 | input   | type=hidden; id=sFormAction; name=sFormAction; value=&lt;%=sFormAction%&gt;                                                                                                                                  |
| 110 | input   | type=hidden; id=sFormActionBack; name=sFormActionBack; value=&lt;%=sFormActionBack%&gt;                                                                                                                      |
| 128 | input   | type=hidden; id=sMonthOrDetail; name=sMonthOrDetail; value=&lt;%=sMonthOrDetailEncripted%&gt;                                                                                                                |
| 129 | input   | type=hidden; id=sCommingFrom; name=sCommingFrom; value=&lt;%=sCommingFromEncripted%&gt;                                                                                                                      |
| 130 | input   | type=hidden; id=sType; name=sType; value=&lt;%=sTypeEncripted%&gt;                                                                                                                                           |
| 131 | input   | type=hidden; id=sIdHr; name=sIdHr; value=&lt;%=sIdHrEncripted%&gt;                                                                                                                                           |
| 132 | input   | type=hidden; id=sOrPer; name=sOrPer; value=&lt;%=sOrPerEncripted%&gt;                                                                                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave                             | Acceso literal                                                      |
| --- | ------------------------------------------- | ------------------------------------------------------------------- |
| 17  | sType                                       | getParameter(request,"sType")                                       |
| 23  | sIdHr                                       | getParameter(request,"sIdHr")                                       |
| 29  | sOrPer                                      | getParameter(request,"sOrPer")                                      |
| 35  | date_to_load_detail                         | getParameter(request,"date_to_load_detail")                         |
| 40  | tp_execution                                | getParameter(request,"tp_execution")                                |
| 45  | node_to_save                                | getParameter(request,"node_to_save")                                |
| 50  | operation_in_SCO_GTA_MONTHLY_CONF_4_USER    | getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")    |
| 55  | operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 60  | operation_in_SCO_GTA_INTERFACE_4_BADGAGE    | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    |
| 65  | operation_in_SCO_GTA_INTERFACE_4_REAL_DONE  | getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  |
| 70  | operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT | getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") |
| 75  | operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY  | getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  |
| 80  | operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY    | getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    |
| 85  | operation_in_SCO_GTA_LOAD_ALERTS_4_DAY      | getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      |

| L   | Variable                  | Expresión fuente                                                                                        | Resolución estática parcial                                                                             |
| --- | ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 12  | sMonthOrDetail            | "D"                                                                                                     | D                                                                                                       |
| 13  | sCommingFrom              | "M"                                                                                                     | M                                                                                                       |
| 14  | sFormAction               | "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp"          | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp            |
| 15  | sFormActionBack           | "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp"                                   | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                                     |
| 17  | sTypeEcrpt                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sType")                                       |
| 18  | sType                     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt)       | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sTypeEcrpt)       |
| 23  | sIdHrEcrpt                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                       |
| 24  | sIdHr                     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)       | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)       |
| 29  | sOrPerEcrpt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                      |
| 30  | sOrPer                    | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt)      |
| 35  | SCO_GTA_ARG_DATE_TO_STUDY | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"date_to_load_detail")                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"date_to_load_detail")                         |
| 40  | tp_execution              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_execution")                                |
| 45  | node_to_save              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"node_to_save")                                |
| 50  | changes_1bis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_MONTHLY_CONF_4_USER")    |
| 55  | changes_1                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_THEOR_MODF") |
| 60  | changes_2                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_BADGAGE")    |
| 65  | changes_3                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_INTERFACE_4_REAL_DONE")  |
| 70  | changes_4                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_TABLE_DATA_REPRESENTAT") |
| 75  | changes_5                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_PROPERTIES_4_DAY")  |
| 80  | changes_6                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_COUNTERS_4_DAY")    |
| 85  | changes_7                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"operation_in_SCO_GTA_LOAD_ALERTS_4_DAY")      |
| 120 | sIdHrEncripted            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sIdHr)           |
| 121 | sOrPerEncripted           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)          | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sOrPer)          |
| 122 | sTypeEncripted            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType)           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sType)           |
| 123 | sCommingFromEncripted     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom)    | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sCommingFrom)    |
| 124 | sMonthOrDetailEncripted   | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sMonthOrDetail)  | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sMonthOrDetail)  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 138 | sendRedirect |            |

| L   | Condición / acción / mensaje literal                            |
| --- | --------------------------------------------------------------- |
| 19  | if (sType==null){                                               |
| 25  | if (sIdHr==null){                                               |
| 31  | if ((sOrPer==null)&#124;&#124;(sOrPer.equals(""))){             |
| 36  | if ((SCO_GTA_ARG_DATE_TO_STUDY==null)){                         |
| 41  | if ((tp_execution==null)&#124;&#124;(tp_execution.equals(""))){ |
| 46  | if ((node_to_save==null)){                                      |
| 51  | if ((changes_1bis==null)){                                      |
| 56  | if ((changes_1==null)){                                         |
| 61  | if ((changes_2==null)){                                         |
| 66  | if ((changes_3==null)){                                         |
| 71  | if ((changes_4 ==null)){                                        |
| 76  | if ((changes_5 ==null)){                                        |
| 81  | if ((changes_6 ==null)){                                        |
| 86  | if ((changes_7 ==null)){                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                            |
| --- | -------------------------------------------------------------------------------------------- |
| 6   | /libreria/funciones_sse_val1.js                                                              |
| 7   | /libreria/funciones_sse.js                                                                   |
| 8   | /css/estilo_mss.css                                                                          |
| 14  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp |
| 95  | /iconos/cargando.gif                                                                         |
| 97  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp            |
| 15  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                   | Resolución | Ficha / candidato                                                                                                                                                    |
| ------ | --- | -------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 6   | /libreria/funciones_sse_val1.js                                                              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 7   | /libreria/funciones_sse.js                                                                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                     |
| COLL   | 14  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp | ausente    | P06                                                                                                                                                                  |
| COLL   | 97  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp            | ausente    | P06                                                                                                                                                                  |
| COLL   | 15  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          | ausente    | P06                                                                                                                                                                  |
| CYC    | 6   | /libreria/funciones_sse_val1.js                                                              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                    |
| CYC    | 7   | /libreria/funciones_sse.js                                                                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                              |
| CYC    | 14  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp | ausente    | P06                                                                                                                                                                  |
| CYC    | 97  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp            | ausente    | P06                                                                                                                                                                  |
| CYC    | 15  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          | ausente    | P06                                                                                                                                                                  |
| IBER   | 6   | /libreria/funciones_sse_val1.js                                                              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 7   | /libreria/funciones_sse.js                                                                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                     |
| IBER   | 14  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp | ausente    | P06                                                                                                                                                                  |
| IBER   | 97  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp            | ausente    | P06                                                                                                                                                                  |
| IBER   | 15  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          | ausente    | P06                                                                                                                                                                  |
| BASE   | 6   | /libreria/funciones_sse_val1.js                                                              | contextual | [libreria/funciones_sse_val1.js](../dependencias/libreria--funciones_sse_val1.md)                                                                                    |
| BASE   | 7   | /libreria/funciones_sse.js                                                                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                              |
| BASE   | 14  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp | ausente    | P06                                                                                                                                                                  |
| BASE   | 97  | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_employee_day_details.jsp            | ausente    | P06                                                                                                                                                                  |
| BASE   | 15  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          | ausente    | P06                                                                                                                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_generico_gta_manager_day_details_redirection.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
