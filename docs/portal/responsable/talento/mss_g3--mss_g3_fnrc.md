# Formación no realizada

Identificador: `mss_g3/mss_g3_fnrc.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_fnrc.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_fnrc.jsp) | `485e9126bfebb6d2775eaef6a112eeeb2dbb842c0ff5d2f85e7fd7e4ccead7b0` |    307 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_fnrc.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_fnrc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 108 | Formación no realizada                                                                                                                                                                                                                  |
| 110 | Formación no completada                                                                                                                                                                                                                 |
| 190 | Formación no realizada                                                                                                                                                                                                                  |
| 195 | Consulta la Formación no realizada de tus empleados Consulta la Formación no completada de tus empleados ( Si el empleado no cumple con el 75% ) Formación no completada ( Si el empleado no cumple con el 75% ) Formación no realizada |
| 223 | Empleado                                                                                                                                                                                                                                |
| 224 | Formación                                                                                                                                                                                                                               |
| 225 | Sesión                                                                                                                                                                                                                                  |
| 226 | Inicio                                                                                                                                                                                                                                  |
| 228 | Motivo de cancelación                                                                                                                                                                                                                   |
| 232 | Empleado                                                                                                                                                                                                                                |
| 233 | Formación                                                                                                                                                                                                                               |
| 234 | Sesión                                                                                                                                                                                                                                  |
| 235 | Inicio                                                                                                                                                                                                                                  |
| 236 | % Asistencia                                                                                                                                                                                                                            |
| 237 | Motivo de cancelación                                                                                                                                                                                                                   |
| 248 | ');" title="Detalle de la formación"&gt;                                                                                                                                                                                                |
| 249 | ');" title="Detalle de la sesión"&gt;                                                                                                                                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------- |
| 193 | img     | src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100; alt=Eventos actuales convocados |
| 206 | a       | class=enlacefuncional; title=Formación no completada; href=mss_g3_fnrc.jsp?&amp;zTLoad=FNC          |
| 208 | a       | class=enlacefuncional; title=Formación no realizada; href=mss_g3_fnrc.jsp?&amp;zTLoad=FNR           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 17  | estado          | getParameter(request,"estado")     |
| 18  | zinicios        | getParameter(request,"zinicios")   |
| 20  | zfiltro         | getParameter(request, "zfiltro")   |
| 27  | zNomfiltro      | getParameter(request,"zNomfiltro") |
| 30  | zTLoad          | getParameter(request,"zTLoad")     |

| L   | Variable               | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                          |
| --- | ---------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                   |
| 18  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                 |
| 19  | zfiltro                | ""                                                                                              |                                                                                                                                                      |
| 20  | zfiltroEncr            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                 |
| 22  | sIdHREncr              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                      |
| 27  | zNomfiltro             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                               |
| 30  | zTLoad                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                   |
| 42  | zsubsesion             | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 43  | zmeta4object           | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 44  | znodo                  | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 49  | zventanas              | "20"                                                                                            | 20                                                                                                                                                   |
| 50  | zvuelta                | 5                                                                                               | 5                                                                                                                                                    |
| 51  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                 |
| 53  | zventana               | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                |
| 54  | zregistrofinal         | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                   |
| 56  | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 57  | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 58  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                                                | CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[*]"}                                                                                               |
| 59  | zmove                  | znodo + ":" + znodo                                                                             | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA                                                                                                      |
| 61  | zlectura               | zsubsesion + "!" + znodo                                                                        | CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA                                                                                                      |
| 62  | zraiz                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 63  | ziterator              | znodo + ":" + zsubsesion + "!" + znodo                                                          | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA                                                                            |
| 65  | zmetodocarga           | "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA"                                      | CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}                                                                                    |
| 66  | zmetodocarga           | "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_COMPLETADA"                        | CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_COMPLETADA"}                                                                      |
| 67  | zmetodocarga           | "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_REALIZADA"                         | CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_REALIZADA"}                                                                       |
| 76  | zmetodocarga           | "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_CO_RE"                             | CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_CO_RE"}                                                                           |
| 81  | zSCO_GB_NAMEEMP        | zraiz + "SCO_GB_NAME"                                                                           | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                    |
| 82  | zidSubProduct          | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                          |
| 83  | zNOMBREFORM            | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                          |
| 84  | zidSubAction           | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                           |
| 85  | zNOMBRESESION          | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                           |
| 86  | zDTSTART               | zraiz + "DT_START"                                                                              | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                       |
| 87  | zFECHAFIN              | zraiz + "DT_END"                                                                                | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                         |
| 88  | zSCO_NM_NON_ATT_REASON | zraiz + "SCO_NM_NON_ATT_REASON"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}                          |
| 89  | zSSP_PORC_TOTAL        | zraiz + "SSP_PORC_TOTAL"                                                                        | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"}                                 |
| 179 | zcounti                | new Integer(new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo)-1)               | new Integer(new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo)-1)                                                                    |
| 180 | zposicions2            | "0"                                                                                             | 0                                                                                                                                                    |
| 181 | zcontrol2              | 0                                                                                               | 0                                                                                                                                                    |
| 182 | zposicion2             | 0                                                                                               | 0                                                                                                                                                    |
| 183 | zregistroinicials      | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                     |
| 184 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti)                                                      | {String.valueOf(zregistroinicial}{zcounti)}                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 150 | m4:startpage | m4task=CSP_FORM_NO_REALIZADA                                                                                                                      |
| 153 | m4:beginjob  |                                                                                                                                                   |
| 155 | m4:datadef   | m4o=CSP_FORM_NO_REALIZADA; m4name=CSP_FORM_NO_REALIZADA                                                                                           |
| 163 | m4:exec      | m4method=CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_CO_RE"}                                                               |
| 164 | m4:param     | name=P_ID_PERSON; value=                                                                                                                          |
| 167 | m4:outputdef | m4alias=CSP_FORM_NO_REALIZADA                                                                                                                     |
| 168 | m4:param     | name=m4name0; value=CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[*]"}                                                                        |
| 171 | m4:endjob    |                                                                                                                                                   |
| 173 | m4:move      |                                                                                                                                                   |
| 174 | m4:param     | name=CSP_FORM_NO_REALIZADA; value=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA                                                                 |
| 244 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti)}                                                             |
| 247 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true           |
| 248 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 249 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 250 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true              |
| 251 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"}; htmlsafe=true        |
| 252 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; htmlsafe=true |
| 262 | m4:endpage   |                                                                                                                                                   |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 159 | setItem          | zsubsesion,zmeta4object,"","P_ZTLOAD",zTLoad |
| 179 | getCountInClient | znodo,zsubsesion,znodo)-1                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 268 | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {                                                                  |
| 26  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}         |
| 31  | if ((zTLoad==null)&#124;&#124; (""==zTLoad)){zTLoad = "FNR";}                                                                   |
| 33  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                |
| 34  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                     |
| 35  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                 |
| 36  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                         |
| 107 | &lt;% if(zTLoad.equals("FNR")){ %&gt;                                                                                           |
| 109 | &lt;% }else{ %&gt;                                                                                                              |
| 197 | &lt;% if(zTLoad.equals("FNR")){ %&gt;                                                                                           |
| 199 | &lt;% }else{ %&gt;                                                                                                              |
| 205 | &lt;% if(zTLoad.equals("FNR")){ %&gt;                                                                                           |
| 207 | &lt;% }else{ %&gt;                                                                                                              |
| 52  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                   |
| 54  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                      |
| 58  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                      |
| 59  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo;                                                        |
| 61  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                |
| 62  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";          |
| 63  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                 |
| 76  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA_NO_CO_RE"; |
| 81  | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                            |
| 82  | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                                    |
| 83  | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                      |
| 84  | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                      |
| 85  | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                     |
| 86  | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                      |
| 87  | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                       |
| 88  | expresión de cálculo/transformación: String zSCO_NM_NON_ATT_REASON = zraiz + "SCO_NM_NON_ATT_REASON";                           |
| 89  | expresión de cálculo/transformación: String zSSP_PORC_TOTAL = zraiz + "SSP_PORC_TOTAL";                                         |
| 184 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti);                       |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 9   | ../../sse_generico/sse_generico_taglib.jsp   |
| 10  | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../sse_generico/espanol/menu_ess.jsp      |
| 12  | /sse_g3/sse_train_trans.jsp                  |

| L   | Destino / recurso                                                 |
| --- | ----------------------------------------------------------------- |
| 93  | /css/estilo_sse.css                                               |
| 95  | /LibQ/DataTables_CSS_CYC/datatables_css_portal_CYC.css            |
| 97  | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js                            |
| 98  | /LibQ/DataTables_min/datatables.min.js                            |
| 99  | /LibQ/DataTable_trad/mi_datatable_es.js                           |
| 100 | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js                  |
| 101 | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js |
| 102 | /LibQ/DataTables_Q_js/datatable_general.js                        |
| 105 | /libreria/funciones_sse.js                                        |
| 193 | /iconos/noname_evalua_cursos_74_100.gif                           |
| 206 | mss_g3_fnrc.jsp?&amp;zTLoad=FNC                                   |
| 208 | mss_g3_fnrc.jsp?&amp;zTLoad=FNR                                   |
| 270 | ;                                                                 |

```
	dir += id + |
```

| 9 | ../../sse_generico/sse_generico_taglib.jsp |
| 10 | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11 | ../../sse_generico/espanol/menu_ess.jsp |
| 12 | /sse_g3/sse_train_trans.jsp |
| 270 | /sgco_desc_dev_subproduct.jsp?estado=11&amp;zidSubProduct= |
| 270 | /sgco_desc_dev_subaction.jsp?estado=11&amp;zidSubAction= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                        | Resolución | Ficha / candidato                                                                                                                                                     |
| ------ | --- | ----------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CYC    | 9   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                             |
| CYC    | 10  | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                         |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                   |
| CYC    | 12  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md)                                                                                       |
| CYC    | 97  | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js                            | contextual | &#96;LibQ/jQuery-3.3.1/jquery-3.3.1.min.js&#96;                                                                                                                       |
| CYC    | 98  | /LibQ/DataTables_min/datatables.min.js                            | contextual | &#96;LibQ/DataTables_min/datatables.min.js&#96;                                                                                                                       |
| CYC    | 99  | /LibQ/DataTable_trad/mi_datatable_es.js                           | contextual | [LibQ/DataTable_trad/mi_datatable_es.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es.md)                                                     |
| CYC    | 100 | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js                  | contextual | [LibQ/DataTable_trad/mi_datatable_pt_ordenado.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_pt_ordenado.md)                                   |
| CYC    | 101 | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js | contextual | [LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es_ordenado_fechas_dd-mm-yyy.md) |
| CYC    | 102 | /LibQ/DataTables_Q_js/datatable_general.js                        | contextual | [LibQ/DataTables_Q_js/datatable_general.js](../../transversal/dependencias/libq--datatables_q_js--datatable_general.md)                                               |
| CYC    | 105 | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                |
| CYC    | 206 | mss_g3_fnrc.jsp?&amp;zTLoad=FNC                                   | física     | [mss_g3/mss_g3_fnrc.jsp](mss_g3--mss_g3_fnrc.md)                                                                                                                      |
| CYC    | 208 | mss_g3_fnrc.jsp?&amp;zTLoad=FNR                                   | física     | [mss_g3/mss_g3_fnrc.jsp](mss_g3--mss_g3_fnrc.md)                                                                                                                      |
| CYC    | 270 | ;                                                                 |

```
	dir += id + | dinámica | P06 |
```

| CYC | 9 | ../../sse_generico/sse_generico_taglib.jsp | física | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| CYC | 10 | ../../sse_generico/sse_generico_taglib_2.jsp | física | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC | 11 | ../../sse_generico/espanol/menu_ess.jsp | física | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md) |
| CYC | 12 | /sse_g3/sse_train_trans.jsp | contextual | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md) |
| CYC | 270 | /sgco_desc_dev_subproduct.jsp?estado=11&amp;zidSubProduct= | ausente | P06 |
| CYC | 270 | /sgco_desc_dev_subaction.jsp?estado=11&amp;zidSubAction= | ausente | P06 |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_fnrc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
