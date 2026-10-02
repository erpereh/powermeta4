# sse_g3_p21_old

Identificador: `sse_g3/sse_g3_p21_old.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                                                             | Ámbito | Diccionario                                                                                  |
| ------------------- | ----------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.HistTrain     | Historial de la formación recibida                                | BASE   | [translations/ess_train_es.properties:L8](../../referencias/literales/ess_train_es.md)       |
| Label.HistTrainDesc | En esta ventana puedes ver todos los cursos realizados.           | BASE   | [translations/ess_train_es.properties:L15](../../referencias/literales/ess_train_es.md)      |
| Label.NoData        | No hay datos en el Historial de Cursos Recibidos para el empleado | BASE   | [translations/ess_train_es.properties:L20](../../referencias/literales/ess_train_es.md)      |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | COLL   | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | CYC    | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | IBER   | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p21_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21_old.jsp) | `359da4c56dd6af820d3c905e97fa24753249a789c82bb990071f92b466818101` |    211 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g3/espanol/sse_g3_p21_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 154 | Certificado              |
| 174 | " target="_blank"&gt;    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 130 | img     | alt=JSP_EXPR_TrainEss.getProperty(; title=JSP_EXPR_TrainEss.getProperty(; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                     |
| 175 | a       | class=enlacefuncional; title=Certificado; style=text-decoration: underline;; href=./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name=; htmlsafe=true |
| 175 | img     | src=/iconos/ic_ord_down_15_15.gif                                                                                                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 23  | zIdPerson       | getBagEntries("zIdPerson")       |
| 46  | estado          | getParameter(request,"estado")   |
| 47  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable               | Expresión fuente                                                                                                                                         | Resolución estática parcial                                                                                                                              |
| --- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | empleado               | (String)request.getAttribute("empleado")                                                                                                                 | (String)request.getAttribute("empleado")                                                                                                                 |
| 15  | periodo                | (String)request.getAttribute("periodo")                                                                                                                  | (String)request.getAttribute("periodo")                                                                                                                  |
| 16  | role                   | (String)request.getAttribute("role")                                                                                                                     | (String)request.getAttribute("role")                                                                                                                     |
| 17  | zVis                   | (String)request.getAttribute("zVis")                                                                                                                     | (String)request.getAttribute("zVis")                                                                                                                     |
| 19  | zSMCO_ID_HR            | ""                                                                                                                                                       |                                                                                                                                                          |
| 23  | idEmpleado             | zsesionDA.getBagEntries("zIdPerson")                                                                                                                     | zsesionDA.getBagEntries("zIdPerson")                                                                                                                     |
| 46  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                       |
| 47  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                     |
| 60  | zsubsesion             | "SSE_H_HR_COURSE"                                                                                                                                        | SSE_H_HR_COURSE                                                                                                                                          |
| 61  | zmeta4object           | "SSE_H_HR_COURSE"                                                                                                                                        | SSE_H_HR_COURSE                                                                                                                                          |
| 62  | znodo                  | "SSE_H_HR_COURSE"                                                                                                                                        | SSE_H_HR_COURSE                                                                                                                                          |
| 64  | zmetodocarga           | zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"                                                                                                   | SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                                                               |
| 66  | zventanas              | ""                                                                                                                                                       |                                                                                                                                                          |
| 72  | zvuelta                | 5                                                                                                                                                        | 5                                                                                                                                                        |
| 73  | zdireccion             | "sse_g3/sse_g3_p21.jsp"                                                                                                                                  | sse_g3/sse_g3_p21.jsp                                                                                                                                    |
| 74  | zestado                | "21"                                                                                                                                                     | 21                                                                                                                                                       |
| 76  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                                                                                                     | Integer.valueOf(zinicios).intValue()                                                                                                                     |
| 78  | zventana               | Integer.valueOf(zventanas).intValue()                                                                                                                    | Integer.valueOf(zventanas).intValue()                                                                                                                    |
| 79  | zregistrofinal         | zregistroinicial + zventana - 1                                                                                                                          | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                       |
| 82  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                                                                                                         | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                                                               |
| 83  | zmove                  | znodo + ":" + znodo + "[FIRST]"                                                                                                                          | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                                                                           |
| 84  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                                                                                        | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}                                                                         |
| 88  | zSCO_DT_START          | zcomun + "SCO_DT_START"                                                                                                                                  | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                                         |
| 89  | zSCO_DT_END            | zcomun + "SCO_DT_END"                                                                                                                                    | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                                                           |
| 90  | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                                                                                                         | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                                |
| 91  | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                                                                                           | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                                  |
| 92  | zSCO_NM_STATE          | zcomun + "SCO_NM_STATE"                                                                                                                                  | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}                                                         |
| 93  | zSCO_NM_DEV_SUBACTION  | zcomun + "SCO_NM_DEV_SUBACTION"                                                                                                                          | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                                                 |
| 94  | zSCO_ID_DEV_SUBACTION  | zcomun + "SCO_ID_DEV_SUBACTION"                                                                                                                          | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                                                 |
| 96  | sSortNode              | zmeta4object + "!" + znodo + ".Sort"                                                                                                                     | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                                                             |
| 114 | zcount                 | 0                                                                                                                                                        | 0                                                                                                                                                        |
| 115 | zcounti                | 0                                                                                                                                                        | 0                                                                                                                                                        |
| 121 | zcountv                | String.valueOf(zcounti)                                                                                                                                  | String.valueOf(zcounti)                                                                                                                                  |
| 145 | zposicions             | "0"                                                                                                                                                      | 0                                                                                                                                                        |
| 146 | zcontrol               | 0                                                                                                                                                        | 0                                                                                                                                                        |
| 147 | zposicion              | 0                                                                                                                                                        | 0                                                                                                                                                        |
| 148 | zPaint                 | ""                                                                                                                                                       |                                                                                                                                                          |
| 168 | idSesion               | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", ap.getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION")) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", ap.getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION")) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 100 | m4:startpage | m4task=SSE_H_HR_COURSE                                                                                                          |
| 101 | m4:beginjob  |                                                                                                                                 |
| 102 | m4:datadef   | m4o=SSE_H_HR_COURSE; m4name=SSE_H_HR_COURSE                                                                                     |
| 104 | m4:exec      | m4method=SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                             |
| 104 | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=                                                                                                |
| 106 | m4:sortitems | m4name=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                             |
| 107 | m4:param     | name=SCO_DT_START; value=DESC                                                                                                   |
| 110 | m4:outputdef | m4alias=SSE_H_HR_COURSE                                                                                                         |
| 110 | m4:param     | name=m4name0; value=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                  |
| 111 | m4:endjob    |                                                                                                                                 |
| 112 | m4:move      |                                                                                                                                 |
| 112 | m4:param     | name=SSE_H_HR_COURSE; value=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                      |
| 152 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 156 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 157 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 158 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 159 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 160 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 162 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                            |
| 172 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 178 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 179 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 180 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 181 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 182 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 206 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 118 | getCount         | znodo,zsubsesion,znodo                              |
| 119 | getCountInClient | znodo,zsubsesion,znodo                              |
| 168 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION") |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                         |
| 28  | else{                                                                                                                   |
| 35  | if (zVis.equals("1")){%&gt;                                                                                             |
| 37  | &lt;%}else{%&gt;                                                                                                        |
| 48  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 49  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                 |
| 54  | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 67  | if (zVis.equals("1")){                                                                                                  |
| 69  | }else{                                                                                                                  |
| 124 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 138 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 140 | &lt;%}else{%&gt;                                                                                                        |
| 144 | &lt;%if (zcount &gt; 0) {                                                                                               |
| 166 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                           |
| 189 | &lt;%}else{%&gt;                                                                                                        |
| 190 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 192 | &lt;%}else{%&gt;                                                                                                        |
| 198 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 202 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 64  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";      |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 82  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 83  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 84  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 88  | expresión de cálculo/transformación: String zSCO_DT_START = zcomun + "SCO_DT_START";                                    |
| 89  | expresión de cálculo/transformación: String zSCO_DT_END = zcomun + "SCO_DT_END";                                        |
| 90  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                  |
| 91  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                      |
| 92  | expresión de cálculo/transformación: String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";                                    |
| 93  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";                    |
| 94  | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun + "SCO_ID_DEV_SUBACTION";                    |
| 96  | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                           |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | /sse_g3/sse_train_trans.jsp                        |
| 55  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 56  | ../../sse_generico/espanol/generico_links.jsp      |
| 199 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 203 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 36  | /css/estilo_sse.css                                             |
| 38  | /css/estilo_mss.css                                             |
| 43  | /libreria/funciones_sse.js                                      |
| 130 | /iconos/noname_evalua_cursos_74_100.gif                         |
| 175 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name= |
| 175 | /iconos/ic_ord_down_15_15.gif                                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 10  | /sse_g3/sse_train_trans.jsp                                     |
| 55  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 56  | ../../sse_generico/espanol/generico_links.jsp                   |
| 73  | sse_g3/sse_g3_p21.jsp                                           |
| 199 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 203 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | --------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC    | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| CYC    | 10  | /sse_g3/sse_train_trans.jsp                                     | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                      |
| CYC    | 55  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| CYC    | 56  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| CYC    | 199 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)         |
| CYC    | 203 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |
| CYC    | 43  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| CYC    | 175 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name= | física     | [sse_g3/certificado/sse_g3_p21_certificado.jsp](sse_g3--certificado--sse_g3_p21_certificado.md)               |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC    | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| CYC    | 10  | /sse_g3/sse_train_trans.jsp                                     | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                      |
| CYC    | 55  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| CYC    | 56  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| CYC    | 73  | sse_g3/sse_g3_p21.jsp                                           | ausente    | P06                                                                                                           |
| CYC    | 199 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)         |
| CYC    | 203 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p21_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
