# mss_g3_p15_mod1

Identificador: `mss_g3/mss_g3_p15_mod1.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                | Texto                                                            | Ámbito | Diccionario                                                                                  |
| -------------------- | ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.Ver            | Ver significado                                                  | COLL   | [translations/ess_mss_gen_es.properties:L128](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Ver            | Ver significado                                                  | CYC    | [translations/ess_mss_gen_es.properties:L128](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Ver            | Ver significado                                                  | IBER   | [translations/ess_mss_gen_es.properties:L128](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Ver            | Ver significado                                                  | BASE   | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.DescrValObj   | Actualmente no tienes ningún objetivo que validar                | BASE   | [translations/mss_ev_es.properties:L126](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.DescrValObj   | Consulta los objetivos de evaluación pendientes de ser aceptados | BASE   | [translations/mss_ev_es.properties:L131](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.LblAgree      | Está de acuerdo                                                  | BASE   | [translations/mss_ev_es.properties:L41](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblComentario | Comentario                                                       | BASE   | [translations/mss_ev_es.properties:L48](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblEval       | Evaluaciones                                                     | BASE   | [translations/mss_ev_es.properties:L67](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblNotAgree   | No está de acuerdo                                               | BASE   | [translations/mss_ev_es.properties:L42](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblObj        | Objetivo                                                         | BASE   | [translations/mss_ev_es.properties:L43](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblObj        | Significado del objetivo                                         | BASE   | [translations/mss_ev_es.properties:L179](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.LblOp         | Opinión                                                          | BASE   | [translations/mss_ev_es.properties:L47](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.ValObj        | Validación de objetivos del empleado                             | BASE   | [translations/mss_ev_es.properties:L5](../../referencias/literales/mss_ev_es.md)             |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p15_mod1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p15_mod1.jsp) | `0e828fdec5044f9f250b791e31e6d16021dff5189fbd44082e3dc621f291ba60` |    254 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p15_mod1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p15_mod1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 171 | [valor dinámico] [valor dinámico]   |
| 210 | [valor dinámico] - [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 170 | img     | alt=&lt;%=ztitle%&gt;; title=&lt;%=ztitle%&gt;; src=/iconos/noname_planes_evaluacion_114_100.gif; width=114; height=100      |
| 174 | a       | title=JSP_EXPR_TranMss.getProperty(; class=enlacefuncional; href=javascript:history.back();                                  |
| 179 | form    | action= ; method=post; name=oculto; id=oculto                                                                                |
| 180 | input   | type=hidden; id=mss; name=mss; value=1                                                                                       |
| 181 | input   | type=hidden; id=id_cono; name=id_cono; value=                                                                                |
| 182 | input   | type=hidden; id=num_obj; name=num_obj; value=                                                                                |
| 183 | input   | type=hidden; id=id_obj; name=id_obj; value=                                                                                  |
| 184 | input   | type=hidden; id=id_mag; name=id_mag; value=                                                                                  |
| 185 | input   | type=hidden; id=id_re; name=id_re; value=                                                                                    |
| 191 | a       | title=JSP_EXPR_TranMss.getProperty(; href=javascript:history.back();                                                         |
| 191 | img     | alt=JSP_EXPR_TranMss.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9                           |
| 198 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:visualizar('&lt;%=zSCO_ID_OBJECTIVE%&gt;',2,'&lt;%=zSCO_ID_MAGNITUD%&gt;') |
| 215 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:visualizar('&lt;%=zSCO_ID_OBJECTIVE%&gt;',3)                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 23  | estado          | getParameter(request,"estado")    |
| 24  | zinicios        | getParameter(request,"zinicios")  |
| 25  | zposicion       | getParameter(request,"zposicion") |
| 26  | ordinal         | getParameter(request,"ordinal")   |

| L   | Variable           | Expresión fuente                                                      | Resolución estática parcial                                                                                            |
| --- | ------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 16  | ztitle             | TranMss.getProperty("ev_mss.ValObj")                                  | TranMss.getProperty("ev_mss.ValObj")                                                                                   |
| 23  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                     |
| 24  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                   |
| 25  | zposicion          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion")                                                  |
| 26  | zordinal           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")                                                    |
| 61  | zsubsesion         | "SSM_EV_ROL_LV_OBJ"                                                   | SSM_EV_ROL_LV_OBJ                                                                                                      |
| 62  | zmeta4object       | "SSM_EV_ROL_LV_OBJ"                                                   | SSM_EV_ROL_LV_OBJ                                                                                                      |
| 63  | znodo              | "SSE_EV_ROL_LV_OBJ"                                                   | SSE_EV_ROL_LV_OBJ                                                                                                      |
| 64  | zraiz              | zsubsesion + "!" + znodo + "."                                        | SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"."}                                                                           |
| 66  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                      | SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                                                                         |
| 67  | zmove              | znodo + ":" + znodo + "[" + zposicion + "]"                           | SSE_EV_ROL_LV_OBJ{":"}SSE_EV_ROL_LV_OBJ{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion"){"]"} |
| 68  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."     | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}                                 |
| 70  | ztipocarga         | "EVA"                                                                 | EVA                                                                                                                    |
| 71  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                        | CARGA:{}SSM_EV_ROL_LV_OBJ{"!SSE_PRINCIPAL.CARGA"}                                                                      |
| 72  | zmetodo            | "CARGA:" + zraiz + "SSE_MOSTRAR"                                      | CARGA:{}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"."}{"SSE_MOSTRAR"}                                                    |
| 74  | zSCO_ID_OBJECTIVE  | ""                                                                    |                                                                                                                        |
| 75  | zSCO_NM_OBJECTIVE  | ""                                                                    |                                                                                                                        |
| 76  | zSCO_N_OBJECTIVE   | ""                                                                    |                                                                                                                        |
| 77  | zSCO_ID_LEVEL      | ""                                                                    |                                                                                                                        |
| 78  | zSCO_NM_LEVEL      | ""                                                                    |                                                                                                                        |
| 79  | zSCO_N_LEVEL       | ""                                                                    |                                                                                                                        |
| 80  | zSCO_ID_MAGNITUD   | ""                                                                    |                                                                                                                        |
| 81  | zSCO_NM_MAGNITUDE  | ""                                                                    |                                                                                                                        |
| 82  | zSCO_N_MAGNITUDE   | ""                                                                    |                                                                                                                        |
| 83  | zSCO_SCHED_VALUE   | ""                                                                    |                                                                                                                        |
| 84  | zSCO_WEIGHT        | ""                                                                    |                                                                                                                        |
| 85  | zSCO_N_WEIGHT      | ""                                                                    |                                                                                                                        |
| 86  | zSCO_DT_START      | ""                                                                    |                                                                                                                        |
| 87  | zSCO_DT_END        | ""                                                                    |                                                                                                                        |
| 103 | zSCOIDASSESSMTEC   | ""                                                                    |                                                                                                                        |
| 104 | zSCOEMPLOYEEAGREE  | ""                                                                    |                                                                                                                        |
| 105 | zSCOEMPLOYEE       | ""                                                                    |                                                                                                                        |
| 106 | zSCOEMPLOYEECOMM   | ""                                                                    |                                                                                                                        |
| 107 | zSCO_N_SCHED_VALUE | ""                                                                    |                                                                                                                        |
| 108 | zSCO_NAME          | ""                                                                    |                                                                                                                        |
| 109 | zSCO_N_NAME        | ""                                                                    |                                                                                                                        |
| 110 | zSCO_DESCRIPTION   | ""                                                                    |                                                                                                                        |
| 111 | zSCO_N_DESCRIPTION | ""                                                                    |                                                                                                                        |
| 112 | zSCO_N_DT_START    | ""                                                                    |                                                                                                                        |
| 113 | zSCO_N_DT_END      | ""                                                                    |                                                                                                                        |
| 114 | dd                 | ""                                                                    |                                                                                                                        |
| 115 | mm                 | ""                                                                    |                                                                                                                        |
| 116 | yyyy               | ""                                                                    |                                                                                                                        |
| 117 | zSSEPOS            | ""                                                                    |                                                                                                                        |
| 118 | dValor             | 0                                                                     | 0                                                                                                                      |
| 119 | dPeso              | 0                                                                     | 0                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91  | m4:startpage | m4task=SSM_EV_ROL_LV_OBJ                                                                                                                             |
| 92  | m4:beginjob  |                                                                                                                                                      |
| 93  | m4:datadef   | m4o=SSM_EV_ROL_LV_OBJ; m4name=SSM_EV_ROL_LV_OBJ                                                                                                      |
| 94  | m4:exec      | m4method=CARGA:{}SSM_EV_ROL_LV_OBJ{"!SSE_PRINCIPAL.CARGA"}                                                                                           |
| 94  | m4:param     | name=TIPO_CARGA; value=EVA                                                                                                                           |
| 95  | m4:exec      | m4method=CARGA:{}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"."}{"SSE_MOSTRAR"}                                                                         |
| 95  | m4:param     | name=CONT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")                                                                 |
| 96  | m4:outputdef | m4alias=SSE_EV_ROL_LV_OBJ                                                                                                                            |
| 96  | m4:param     | name=m4name0; value=SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                                                                                   |
| 97  | m4:endjob    |                                                                                                                                                      |
| 98  | m4:move      |                                                                                                                                                      |
| 98  | m4:param     | name=SSM_EV_ROL_LV_OBJ; value=SSE_EV_ROL_LV_OBJ{":"}SSE_EV_ROL_LV_OBJ{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion"){"]"} |
| 250 | m4:endpage   |                                                                                                                                                      |

| L   | Operación | Argumentos literales                             |
| --- | --------- | ------------------------------------------------ |
| 120 | getItem   | znodo,zmeta4object,znodo,"","ORDEN"              |
| 122 | getItem   | znodo,zmeta4object,znodo,"","SCO_ID_ASSESSM_TEC" |
| 123 | getItem   | znodo,zmeta4object,znodo,"","SCO_ID_OBJECTIVE"   |
| 125 | getItem   | znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_AGREE" |
| 126 | getItem   | znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_COMM"  |
| 127 | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE"   |
| 128 | getItem   | znodo,zmeta4object,znodo,"","SCO_ID_LEVEL"       |
| 129 | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"       |
| 131 | getItem   | znodo,zmeta4object,znodo,"","SCO_ID_MAGNITUD"    |
| 132 | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE"   |
| 134 | getItem   | znodo,zmeta4object,znodo,"","SCO_SCHED_VALUE"    |
| 136 | getItem   | znodo,zmeta4object,znodo,"","SCO_WEIGHT"         |
| 138 | getItem   | znodo,zmeta4object,znodo,"","SCO_NAME"           |
| 140 | getItem   | znodo,zmeta4object,znodo,"","SCO_DESCRIPTION"    |
| 141 | getItem   | znodo,zmeta4object,znodo,"","SCO_DT_START"       |
| 147 | getItem   | znodo,zmeta4object,znodo,"","SCO_DT_END"         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 32  | visualizar | t,c,f      |

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 27  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                            |
| 28  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                    |
| 33  | if (c==1)                                                                                                                                  |
| 39  | if (c==2)                                                                                                                                  |
| 46  | if (c==3)                                                                                                                                  |
| 154 | if (zSCOEMPLOYEEAGREE.equals("1"))                                                                                                         |
| 158 | else                                                                                                                                       |
| 163 | if (zSCO_ID_MAGNITUD.equals("")==false){                                                                                                   |
| 196 | if (zSCO_ID_MAGNITUD.equals("")==false){%&gt;                                                                                              |
| 213 | &lt;%}else{%&gt;                                                                                                                           |
| 223 | if (zSCO_NAME.equals("")==false){%&gt;                                                                                                     |
| 64  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                        |
| 66  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                 |
| 67  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zposicion + "]";                                           |
| 68  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                    |
| 71  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                 |
| 72  | expresión de cálculo/transformación: String zmetodo = "CARGA:" + zraiz + "SSE_MOSTRAR" ;                                                   |
| 145 | expresión de cálculo/transformación: zSCO_DT_START = dd + "-" + mm + "-" + yyyy;                                                           |
| 151 | expresión de cálculo/transformación: zSCO_DT_END = dd + "-" + mm + "-" + yyyy;                                                             |
| 210 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="2"&gt;&lt;%=dValor%&gt; - &lt;%=zSCO_NM_MAGNITUDE%&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 13  | /mss_g3/mss_ev_trans.jsp                              |
| 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 59  | ../../sse_generico/espanol/generico_links.jsp         |
| 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 8   | /libreria/funciones_sse_val1.js                                |
| 9   | /libreria/funciones_sse.js                                     |
| 20  | /css/estilo_mss.css                                            |
| 36  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31 |
| 43  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31 |
| 49  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31 |
| 170 | /iconos/noname_planes_evaluacion_114_100.gif                   |
| 174 | javascript:history.back();                                     |
| 179 |                                                                |
| 191 | javascript:history.back();                                     |
| 191 | /iconos/icono_flecha_azul2_ess_11_9.gif                        |
| 198 | javascript:visualizar(                                         |
| 215 | javascript:visualizar(                                         |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                        |
| 13  | /mss_g3/mss_ev_trans.jsp                                       |
| 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 59  | ../../sse_generico/espanol/generico_links.jsp                  |
| 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                |
| ------ | --- | -------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 13  | /mss_g3/mss_ev_trans.jsp                                       | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                               |
| BASE   | 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 8   | /libreria/funciones_sse_val1.js                                | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 36  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31 | ausente    | P06                                                                                              |
| BASE   | 43  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31 | ausente    | P06                                                                                              |
| BASE   | 49  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31 | ausente    | P06                                                                                              |
| BASE   | 174 | javascript:history.back();                                     | dinámica   | P06                                                                                              |
| BASE   | 191 | javascript:history.back();                                     | dinámica   | P06                                                                                              |
| BASE   | 198 | javascript:visualizar(                                         | dinámica   | P06                                                                                              |
| BASE   | 215 | javascript:visualizar(                                         | dinámica   | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 13  | /mss_g3/mss_ev_trans.jsp                                       | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                               |
| BASE   | 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p15_mod1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
