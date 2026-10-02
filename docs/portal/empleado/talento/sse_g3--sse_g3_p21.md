# sse_g3_p21

Identificador: `sse_g3/sse_g3_p21.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                         | Solo en BASE                            |
| ------ | --------- | ------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores                                                                  | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | m4:item:SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STATE"} | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores                                                                  | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                                                             | Ámbito | Diccionario                                                                                  |
| ------------------- | ----------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.HistTrain     | Historial de la formación recibida                                | BASE   | [translations/ess_train_es.properties:L8](../../referencias/literales/ess_train_es.md)       |
| Label.HistTrainDesc | En esta ventana puedes ver todos los cursos realizados.           | BASE   | [translations/ess_train_es.properties:L15](../../referencias/literales/ess_train_es.md)      |
| Label.NoData        | No hay datos en el Historial de Cursos Recibidos para el empleado | BASE   | [translations/ess_train_es.properties:L20](../../referencias/literales/ess_train_es.md)      |
| Label.NoDataFound9  | No hay históricos de tus evaluaciones.                            | COLL   | [translations/ess_mss_gen_es.properties:L122](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound9  | No hay históricos de tus evaluaciones.                            | CYC    | [translations/ess_mss_gen_es.properties:L122](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound9  | No hay históricos de tus evaluaciones.                            | IBER   | [translations/ess_mss_gen_es.properties:L122](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound9  | No hay históricos de tus evaluaciones.                            | BASE   | [translations/ess_mss_gen_es.properties:L122](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | COLL   | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | CYC    | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound99 | No hay Historial de tu Formación Recibida.                        | IBER   | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p21.jsp) | `672ba316ef6874e50820f6a87aff20f467f4df8eccccf69c68bfb379e3fc69fb` |    199 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21.jsp)   | `3f860321399ba64faa13a46b7cb29beb3a615d35ba2efc6992f7e97723b3b9e3` |    242 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p21.jsp) | `672ba316ef6874e50820f6a87aff20f467f4df8eccccf69c68bfb379e3fc69fb` |    199 |
| BASE / español    | [sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p21.jsp)                             | `7899ffe2ed69432ee7cc5b71491af0ff829592f7d2827a165bf27fbfa42478b2` |    194 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p21.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 149 | Certificado              |
| 168 | " target="_blank"&gt;    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 126 | img     | alt=JSP_EXPR_TrainEss.getProperty(; title=JSP_EXPR_TrainEss.getProperty(; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                     |
| 168 | a       | class=enlacefuncional; title=Certificado; style=text-decoration: underline;; href=./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name=; htmlsafe=true |
| 168 | img     | src=/iconos/ic_ord_down_15_15.gif                                                                                                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 42  | estado          | getParameter(request,"estado")   |
| 43  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable               | Expresión fuente                                                     | Resolución estática parcial                                                                               |
| --- | ---------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 14  | empleado               | (String)request.getAttribute("empleado")                             | (String)request.getAttribute("empleado")                                                                  |
| 15  | periodo                | (String)request.getAttribute("periodo")                              | (String)request.getAttribute("periodo")                                                                   |
| 16  | role                   | (String)request.getAttribute("role")                                 | (String)request.getAttribute("role")                                                                      |
| 17  | zVis                   | (String)request.getAttribute("zVis")                                 | (String)request.getAttribute("zVis")                                                                      |
| 19  | zSMCO_ID_HR            | ""                                                                   |                                                                                                           |
| 42  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 43  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      |
| 56  | zsubsesion             | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 57  | zmeta4object           | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 58  | znodo                  | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 60  | zmetodocarga           | zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"               | SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                |
| 62  | zventanas              | ""                                                                   |                                                                                                           |
| 68  | zvuelta                | 5                                                                    | 5                                                                                                         |
| 69  | zdireccion             | "sse_g3/sse_g3_p21.jsp"                                              | sse_g3/sse_g3_p21.jsp                                                                                     |
| 70  | zestado                | "21"                                                                 | 21                                                                                                        |
| 72  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                      |
| 74  | zventana               | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                     |
| 75  | zregistrofinal         | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                        |
| 78  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                     | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                |
| 79  | zmove                  | znodo + ":" + znodo + "[FIRST]"                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                            |
| 80  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}                          |
| 84  | zSCO_DT_START          | zcomun + "SCO_DT_START"                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}          |
| 85  | zSCO_DT_END            | zcomun + "SCO_DT_END"                                                | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}            |
| 86  | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                     | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} |
| 87  | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                       | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}   |
| 88  | zSCO_NM_STATE          | zcomun + "SCO_NM_STATE"                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}          |
| 89  | zSCO_NM_DEV_SUBACTION  | zcomun + "SCO_NM_DEV_SUBACTION"                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}  |
| 90  | zSCO_ID_DEV_SUBACTION  | zcomun + "SCO_ID_DEV_SUBACTION"                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}  |
| 92  | sSortNode              | zmeta4object + "!" + znodo + ".Sort"                                 | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                              |
| 110 | zcount                 | 0                                                                    | 0                                                                                                         |
| 111 | zcounti                | 0                                                                    | 0                                                                                                         |
| 117 | zcountv                | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                   |
| 141 | zposicions             | "0"                                                                  | 0                                                                                                         |
| 142 | zcontrol               | 0                                                                    | 0                                                                                                         |
| 143 | zposicion              | 0                                                                    | 0                                                                                                         |
| 144 | zPaint                 | ""                                                                   |                                                                                                           |
| 162 | idSesion               | ap.getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION")       | ap.getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION")                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 96  | m4:startpage | m4task=SSE_H_HR_COURSE                                                                                                          |
| 97  | m4:beginjob  |                                                                                                                                 |
| 98  | m4:datadef   | m4o=SSE_H_HR_COURSE; m4name=SSE_H_HR_COURSE                                                                                     |
| 100 | m4:exec      | m4method=SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                             |
| 100 | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=                                                                                                |
| 102 | m4:sortitems | m4name=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                             |
| 103 | m4:param     | name=SCO_DT_START; value=DESC                                                                                                   |
| 106 | m4:outputdef | m4alias=SSE_H_HR_COURSE                                                                                                         |
| 106 | m4:param     | name=m4name0; value=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                  |
| 107 | m4:endjob    |                                                                                                                                 |
| 108 | m4:move      |                                                                                                                                 |
| 108 | m4:param     | name=SSE_H_HR_COURSE; value=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                      |
| 148 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 150 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 151 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 152 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 153 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 154 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 156 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                            |
| 167 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 169 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 170 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 171 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 172 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 173 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 194 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 114 | getCount         | znodo,zsubsesion,znodo                             |
| 115 | getCountInClient | znodo,zsubsesion,znodo                             |
| 162 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                         |
| 24  | else{                                                                                                                   |
| 31  | if (zVis.equals("1")){%&gt;                                                                                             |
| 33  | &lt;%}else{%&gt;                                                                                                        |
| 44  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 45  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                 |
| 50  | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 63  | if (zVis.equals("1")){                                                                                                  |
| 65  | }else{                                                                                                                  |
| 120 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 134 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 136 | &lt;%}else{%&gt;                                                                                                        |
| 140 | &lt;%if (zcount &gt; 0) {                                                                                               |
| 160 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                           |
| 177 | &lt;%}else{%&gt;                                                                                                        |
| 178 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 180 | &lt;%}else{%&gt;                                                                                                        |
| 186 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 190 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 60  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";      |
| 73  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 75  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 78  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 79  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 80  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 84  | expresión de cálculo/transformación: String zSCO_DT_START = zcomun + "SCO_DT_START";                                    |
| 85  | expresión de cálculo/transformación: String zSCO_DT_END = zcomun + "SCO_DT_END";                                        |
| 86  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                  |
| 87  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                      |
| 88  | expresión de cálculo/transformación: String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";                                    |
| 89  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";                    |
| 90  | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun + "SCO_ID_DEV_SUBACTION";                    |
| 92  | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                           |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | /sse_g3/sse_train_trans.jsp                        |
| 51  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 52  | ../../sse_generico/espanol/generico_links.jsp      |
| 187 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 191 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 32  | /css/estilo_sse.css                                             |
| 34  | /css/estilo_mss.css                                             |
| 39  | /libreria/funciones_sse.js                                      |
| 126 | /iconos/noname_evalua_cursos_74_100.gif                         |
| 168 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name= |
| 168 | /iconos/ic_ord_down_15_15.gif                                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 10  | /sse_g3/sse_train_trans.jsp                                     |
| 51  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 52  | ../../sse_generico/espanol/generico_links.jsp                   |
| 69  | sse_g3/sse_g3_p21.jsp                                           |
| 187 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 191 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 156 | Certificado              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 133 | img     | alt=JSP_EXPR_TrainEss.getProperty(; title=JSP_EXPR_TrainEss.getProperty(; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100 |
| 187 | a       | class=enlacefuncional; title=Certificado; href=./certificado/sse_g3_p21_certificado.jsp?tr=&lt;%=idSesion%&gt;; target=_blank                |
| 187 | img     | src=/iconos/ic_ord_down_15_15.gif                                                                                                            |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 24  | estado          | getParameter(request,"estado")   |
| 25  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable               | Expresión fuente                                                                                                             | Resolución estática parcial                                                                                                  |
| --- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 16  | empleado               | (String)request.getAttribute("empleado")                                                                                     | (String)request.getAttribute("empleado")                                                                                     |
| 17  | periodo                | (String)request.getAttribute("periodo")                                                                                      | (String)request.getAttribute("periodo")                                                                                      |
| 18  | role                   | (String)request.getAttribute("role")                                                                                         | (String)request.getAttribute("role")                                                                                         |
| 19  | zVis                   | (String)request.getAttribute("zVis")                                                                                         | (String)request.getAttribute("zVis")                                                                                         |
| 21  | zSMCO_ID_HR            | (zVis.equals("1")) ? "" : com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", empleado) | (zVis.equals("1")) ? "" : com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", empleado) |
| 22  | estilo                 | (zVis.equals("1")) ? "/css/estilo_sse.css" : "/css/estilo_mss.css"                                                           | (zVis.equals("1")) ? "/css/estilo_sse.css" : "/css/estilo_mss.css"                                                           |
| 24  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                           |
| 25  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                         |
| 31  | zsubsesion             | "SSE_H_HR_COURSE"                                                                                                            | SSE_H_HR_COURSE                                                                                                              |
| 32  | zmeta4object           | "SSE_H_HR_COURSE"                                                                                                            | SSE_H_HR_COURSE                                                                                                              |
| 33  | znodo                  | "SSE_H_HR_COURSE"                                                                                                            | SSE_H_HR_COURSE                                                                                                              |
| 35  | zmetodocarga           | zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"                                                                       | SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                                   |
| 37  | zventanas              | (zVis.equals("1")) ? "20" : "2000"                                                                                           | (zVis.equals("1")) ? "20" : "2000"                                                                                           |
| 39  | zvuelta                | 5                                                                                                                            | 5                                                                                                                            |
| 40  | zdireccion             | "sse_g3/sse_g3_p21.jsp"                                                                                                      | sse_g3/sse_g3_p21.jsp                                                                                                        |
| 41  | zestado                | "21"                                                                                                                         | 21                                                                                                                           |
| 43  | zregistroinicial       | Integer.valueOf(zinicios).intValue() - 1                                                                                     | Integer.valueOf(zinicios).intValue() - 1                                                                                     |
| 44  | zventana               | Integer.valueOf(zventanas).intValue()                                                                                        | Integer.valueOf(zventanas).intValue()                                                                                        |
| 45  | zregistrofinal         | zregistroinicial + zventana - 1                                                                                              | Integer.valueOf(zinicios).intValue() - 1{zventana - 1}                                                                       |
| 47  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                                                                             | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                                   |
| 48  | zmove                  | znodo + ":" + znodo + "[FIRST]"                                                                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                                               |
| 49  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                                                            | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}                                             |
| 51  | zSCO_DT_START          | zcomun + "SCO_DT_START"                                                                                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                             |
| 52  | zSCO_DT_END            | zcomun + "SCO_DT_END"                                                                                                        | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                               |
| 53  | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                                                                             | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                    |
| 54  | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                                                               | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                      |
| 55  | zSCO_NM_STATE          | zcomun + "SCO_NM_STATE"                                                                                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}                             |
| 56  | zSCO_ID_STATE          | zcomun + "SCO_ID_STATE"                                                                                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STATE"}                             |
| 57  | zSCO_NM_DEV_SUBACTION  | zcomun + "SCO_NM_DEV_SUBACTION"                                                                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                     |
| 58  | zSCO_ID_DEV_SUBACTION  | zcomun + "SCO_ID_DEV_SUBACTION"                                                                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                     |
| 60  | sSortNode              | zmeta4object + "!" + znodo + ".Sort"                                                                                         | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                                 |
| 62  | estitabla              | (zVis.equals("1")) ? "tablaestados" : "barraregistros"                                                                       | (zVis.equals("1")) ? "tablaestados" : "barraregistros"                                                                       |
| 63  | textonodata            | (zVis.equals("1")) ? Tran.getProperty("Label.NoDataFound99") : TrainEss.getProperty("Label.NoData")                          | (zVis.equals("1")) ? Tran.getProperty("Label.NoDataFound99") : TrainEss.getProperty("Label.NoData")                          |
| 124 | zcounti                | new Integer( new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo) -1 ).toString()                              | new Integer( new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo) -1 ).toString()                              |
| 181 | idSesion               | (zDato.equals("01")) ? new M4Operations(request).getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION") : ""            | (zDato.equals("01")) ? new M4Operations(request).getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION") : ""            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 98  | m4:startpage | m4task=SSE_H_HR_COURSE                                                                                                                                       |
| 101 | m4:beginjob  |                                                                                                                                                              |
| 103 | m4:datadef   | m4o=SSE_H_HR_COURSE; m4name=SSE_H_HR_COURSE                                                                                                                  |
| 105 | m4:exec      | m4method=SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                                                          |
| 106 | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=(zVis.equals("1")) ? "" : com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", empleado) |
| 109 | m4:sortitems | m4name=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                                                          |
| 110 | m4:param     | name=SCO_DT_START; value=DESC                                                                                                                                |
| 113 | m4:outputdef | m4alias=SSE_H_HR_COURSE                                                                                                                                      |
| 114 | m4:param     | name=m4name0; value=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                                               |
| 117 | m4:endjob    |                                                                                                                                                              |
| 119 | m4:move      |                                                                                                                                                              |
| 120 | m4:param     | name=SSE_H_HR_COURSE; value=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                                                   |
| 145 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                              |
| 147 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                |
| 148 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true                                       |
| 149 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 150 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                         |
| 151 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                               |
| 155 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                              |
| 157 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                |
| 158 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true                                       |
| 159 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 160 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                         |
| 161 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                               |
| 179 | m4:loop      | from=0; to=new Integer( new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo) -1 ).toString()                                                   |
| 180 | m4:item      | m4varname=zDato; m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STATE"}                                     |
| 184 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                              |
| 190 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                |
| 191 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true                                       |
| 192 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 193 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                         |
| 194 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                               |
| 204 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 124 | getCountInClient | znodo,zsubsesion,znodo) -1 ).toString(             |
| 181 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_DEV_SUBACTION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 27  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                 |
| 29  | if (zVis.equals("1")){ %&gt;&lt;%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %&gt;&lt;% }          |
| 127 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 186 | &lt;%if(!idSesion.equals("")){ %&gt;                                                                                    |
| 35  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";      |
| 43  | expresión de cálculo/transformación: int zregistroinicial = Integer.valueOf(zinicios).intValue() - 1;                   |
| 45  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 48  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 49  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 51  | expresión de cálculo/transformación: String zSCO_DT_START = zcomun + "SCO_DT_START";                                    |
| 52  | expresión de cálculo/transformación: String zSCO_DT_END = zcomun + "SCO_DT_END";                                        |
| 53  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                  |
| 54  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                      |
| 55  | expresión de cálculo/transformación: String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";                                    |
| 56  | expresión de cálculo/transformación: String zSCO_ID_STATE = zcomun + "SCO_ID_STATE";                                    |
| 57  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";                    |
| 58  | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun + "SCO_ID_DEV_SUBACTION";                    |
| 60  | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                           |

### Includes, navegación y dependencias

| L   | Include                                         |
| --- | ----------------------------------------------- |
| 9   | ../../sse_generico/sse_generico_taglib.jsp      |
| 10  | ../../sse_generico/sse_generico_taglib_2.jsp    |
| 11  | ../../sse_generico/espanol/menu_ess.jsp         |
| 12  | /sse_g3/sse_train_trans.jsp                     |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp |

| L   | Destino / recurso                                                 |
| --- | ----------------------------------------------------------------- |
| 67  | &lt;%=estilo%&gt;                                                 |
| 69  | /LibQ/DataTables_CSS_CYC/datatables_css_portal_CYC.css            |
| 71  | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js                            |
| 72  | /LibQ/DataTables_min/datatables.min.js                            |
| 73  | /LibQ/DataTable_trad/mi_datatable_es.js                           |
| 74  | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js                  |
| 75  | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js |
| 76  | /LibQ/DataTables_Q_js/datatable_general.js                        |
| 79  | /libreria/funciones_sse.js                                        |
| 133 | /iconos/noname_evalua_cursos_74_100.gif                           |
| 187 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;%=idSesion%&gt;   |
| 187 | /iconos/ic_ord_down_15_15.gif                                     |
| 9   | ../../sse_generico/sse_generico_taglib.jsp                        |
| 10  | ../../sse_generico/sse_generico_taglib_2.jsp                      |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                           |
| 12  | /sse_g3/sse_train_trans.jsp                                       |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp                   |
| 40  | sse_g3/sse_g3_p21.jsp                                             |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p21.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p21.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 125 | img     | alt=JSP_EXPR_TrainEss.getProperty(; title=JSP_EXPR_TrainEss.getProperty(; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 41  | estado          | getParameter(request,"estado")   |
| 42  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable               | Expresión fuente                                                     | Resolución estática parcial                                                                               |
| --- | ---------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 14  | empleado               | (String)request.getAttribute("empleado")                             | (String)request.getAttribute("empleado")                                                                  |
| 15  | periodo                | (String)request.getAttribute("periodo")                              | (String)request.getAttribute("periodo")                                                                   |
| 16  | role                   | (String)request.getAttribute("role")                                 | (String)request.getAttribute("role")                                                                      |
| 17  | zVis                   | (String)request.getAttribute("zVis")                                 | (String)request.getAttribute("zVis")                                                                      |
| 19  | zSMCO_ID_HR            | ""                                                                   |                                                                                                           |
| 41  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 42  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      |
| 56  | zsubsesion             | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 57  | zmeta4object           | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 58  | znodo                  | "SSE_H_HR_COURSE"                                                    | SSE_H_HR_COURSE                                                                                           |
| 60  | zmetodocarga           | zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"               | SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                |
| 62  | zventanas              | ""                                                                   |                                                                                                           |
| 68  | zvuelta                | 5                                                                    | 5                                                                                                         |
| 69  | zdireccion             | "sse_g3/sse_g3_p21.jsp"                                              | sse_g3/sse_g3_p21.jsp                                                                                     |
| 70  | zestado                | "21"                                                                 | 21                                                                                                        |
| 72  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                      |
| 74  | zventana               | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                     |
| 75  | zregistrofinal         | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                        |
| 78  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                     | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                |
| 79  | zmove                  | znodo + ":" + znodo + "[FIRST]"                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                            |
| 80  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}                          |
| 84  | zSCO_DT_START          | zcomun + "SCO_DT_START"                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}          |
| 85  | zSCO_DT_END            | zcomun + "SCO_DT_END"                                                | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}            |
| 86  | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                     | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} |
| 87  | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                       | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}   |
| 88  | zSCO_NM_STATE          | zcomun + "SCO_NM_STATE"                                              | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}          |
| 89  | zSCO_NM_DEV_SUBACTION  | zcomun + "SCO_NM_DEV_SUBACTION"                                      | SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}  |
| 91  | sSortNode              | zmeta4object + "!" + znodo + ".Sort"                                 | SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                              |
| 109 | zcount                 | 0                                                                    | 0                                                                                                         |
| 110 | zcounti                | 0                                                                    | 0                                                                                                         |
| 116 | zcountv                | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                   |
| 140 | zposicions             | "0"                                                                  | 0                                                                                                         |
| 141 | zcontrol               | 0                                                                    | 0                                                                                                         |
| 142 | zposicion              | 0                                                                    | 0                                                                                                         |
| 143 | zPaint                 | ""                                                                   |                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 95  | m4:startpage | m4task=SSE_H_HR_COURSE                                                                                                          |
| 96  | m4:beginjob  |                                                                                                                                 |
| 97  | m4:datadef   | m4o=SSE_H_HR_COURSE; m4name=SSE_H_HR_COURSE                                                                                     |
| 99  | m4:exec      | m4method=SSE_H_HR_COURSE{"!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS"}                                                             |
| 99  | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=                                                                                                |
| 101 | m4:sortitems | m4name=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{".Sort"}                                                                             |
| 102 | m4:param     | name=SCO_DT_START; value=DESC                                                                                                   |
| 105 | m4:outputdef | m4alias=SSE_H_HR_COURSE                                                                                                         |
| 105 | m4:param     | name=m4name0; value=SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[*]"}                                                                  |
| 106 | m4:endjob    |                                                                                                                                 |
| 107 | m4:move      |                                                                                                                                 |
| 107 | m4:param     | name=SSE_H_HR_COURSE; value=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"[FIRST]"}                                                      |
| 147 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 148 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 149 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 150 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 151 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 152 | m4:label     | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 154 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                            |
| 163 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 164 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true   |
| 165 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_STATE"}; htmlsafe=true          |
| 166 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true          |
| 167 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true            |
| 168 | m4:item      | m4name=SSE_H_HR_COURSE{":"}SSE_H_HR_COURSE{"!"}SSE_H_HR_COURSE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 189 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 113 | getCount         | znodo,zsubsesion,znodo |
| 114 | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                         |
| 23  | else{                                                                                                                   |
| 30  | if (zVis.equals("1")){%&gt;                                                                                             |
| 32  | &lt;%}else{%&gt;                                                                                                        |
| 43  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 44  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                 |
| 50  | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 63  | if (zVis.equals("1")){                                                                                                  |
| 65  | }else{                                                                                                                  |
| 119 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 133 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 135 | &lt;%}else{%&gt;                                                                                                        |
| 139 | &lt;%if (zcount &gt; 0) {                                                                                               |
| 158 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                           |
| 172 | &lt;%}else{%&gt;                                                                                                        |
| 173 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 175 | &lt;%}else{%&gt;                                                                                                        |
| 181 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 185 | &lt;%if (zVis.equals("1")){%&gt;                                                                                        |
| 60  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";      |
| 73  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 75  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 78  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 79  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 80  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 84  | expresión de cálculo/transformación: String zSCO_DT_START = zcomun + "SCO_DT_START";                                    |
| 85  | expresión de cálculo/transformación: String zSCO_DT_END = zcomun + "SCO_DT_END";                                        |
| 86  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                  |
| 87  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                      |
| 88  | expresión de cálculo/transformación: String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";                                    |
| 89  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";                    |
| 91  | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                           |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | /sse_g3/sse_train_trans.jsp                        |
| 51  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 52  | ../../sse_generico/espanol/generico_links.jsp      |
| 182 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 186 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 31  | /css/estilo_sse.css                                |
| 33  | /css/estilo_mss.css                                |
| 38  | /libreria/funciones_sse.js                         |
| 125 | /iconos/noname_evalua_cursos_74_100.gif            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | /sse_g3/sse_train_trans.jsp                        |
| 51  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 52  | ../../sse_generico/espanol/generico_links.jsp      |
| 69  | sse_g3/sse_g3_p21.jsp                              |
| 182 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 186 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                        | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| COLL   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 187 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 191 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 39  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 168 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name=   | física     | [sse_g3/certificado/sse_g3_p21_certificado.jsp](sse_g3--certificado--sse_g3_p21_certificado.md)                                                                                |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| COLL   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 69  | sse_g3/sse_g3_p21.jsp                                             | ausente    | P06                                                                                                                                                                            |
| COLL   | 187 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 191 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 9   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 10  | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 12  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| CYC    | 29  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 67  | &lt;%=estilo%&gt;                                                 | dinámica   | P06                                                                                                                                                                            |
| CYC    | 71  | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js                            | contextual | &#96;LibQ/jQuery-3.3.1/jquery-3.3.1.min.js&#96;                                                                                                                                |
| CYC    | 72  | /LibQ/DataTables_min/datatables.min.js                            | contextual | &#96;LibQ/DataTables_min/datatables.min.js&#96;                                                                                                                                |
| CYC    | 73  | /LibQ/DataTable_trad/mi_datatable_es.js                           | contextual | [LibQ/DataTable_trad/mi_datatable_es.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es.md)                                                              |
| CYC    | 74  | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js                  | contextual | [LibQ/DataTable_trad/mi_datatable_pt_ordenado.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_pt_ordenado.md)                                            |
| CYC    | 75  | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js | contextual | [LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es_ordenado_fechas_dd-mm-yyy.md)          |
| CYC    | 76  | /LibQ/DataTables_Q_js/datatable_general.js                        | contextual | [LibQ/DataTables_Q_js/datatable_general.js](../../transversal/dependencias/libq--datatables_q_js--datatable_general.md)                                                        |
| CYC    | 79  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 187 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;%=idSesion%&gt;   | física     | [sse_g3/certificado/sse_g3_p21_certificado.jsp](sse_g3--certificado--sse_g3_p21_certificado.md)                                                                                |
| CYC    | 9   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 10  | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 12  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| CYC    | 29  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 40  | sse_g3/sse_g3_p21.jsp                                             | ausente    | P06                                                                                                                                                                            |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| IBER   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 187 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 191 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 39  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 168 | ./certificado/sse_g3_p21_certificado.jsp?tr=&lt;m4:item m4name=   | física     | [sse_g3/certificado/sse_g3_p21_certificado.jsp](sse_g3--certificado--sse_g3_p21_certificado.md)                                                                                |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| IBER   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 69  | sse_g3/sse_g3_p21.jsp                                             | ausente    | P06                                                                                                                                                                            |
| IBER   | 187 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 191 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| BASE   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 182 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 186 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 38  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                      | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 10  | /sse_g3/sse_train_trans.jsp                                       | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                       |
| BASE   | 51  | ../../sse_generico/espanol/generico_menusup.jsp                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 52  | ../../sse_generico/espanol/generico_links.jsp                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 69  | sse_g3/sse_g3_p21.jsp                                             | ausente    | P06                                                                                                                                                                            |
| BASE   | 182 | ../../sse_generico/espanol/generico_ventanas.jsp                  | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 186 | ../../sse_generico/espanol/generico_disclaimer.jsp                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p21.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
