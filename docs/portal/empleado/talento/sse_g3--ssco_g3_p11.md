# ssco_g3_p11

Identificador: `sse_g3/ssco_g3_p11.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                                                                                              | Ámbito | Diccionario                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------- |
| iv_ess.DescrMyInter       | Consulta tus entrevistas actuales. Para más información sobre una entrevista determinada, sitúate sobre el nombre. | BASE   | [translations/ssco_iv_es.properties:L8](../../referencias/literales/ssco_iv_es.md)  |
| iv_ess.Goto               | Ir a                                                                                                               | BASE   | [translations/ssco_iv_es.properties:L13](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Interview          | Mis entrevistas                                                                                                    | BASE   | [translations/ssco_iv_es.properties:L3](../../referencias/literales/ssco_iv_es.md)  |
| iv_ess.NoDataFound2       | No tienes ninguna entrevista no realizada                                                                          | BASE   | [translations/ssco_iv_es.properties:L24](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.NoDataFound3       | No tienes ninguna entrevista realizada                                                                             | BASE   | [translations/ssco_iv_es.properties:L25](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.NoreleaseInterview | Mis entrevistas no realizadas                                                                                      | BASE   | [translations/ssco_iv_es.properties:L19](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.ReleaseInterview   | Mis entrevistas realizadas                                                                                         | BASE   | [translations/ssco_iv_es.properties:L20](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Title_Solicitud    | Solicitar una entrevista                                                                                           | BASE   | [translations/ssco_iv_es.properties:L26](../../referencias/literales/ssco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_g3_p11.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11.jsp) | `adc675813cc23c52dc0afbd99a046d964a06a1b2d11344510300e7af674245f6` |    277 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_g3_p11.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                       |
| --- | ------------------------------------------------------------------------------ |
| 136 | [valor dinámico] [valor dinámico]                                              |
| 195 | " href="javascript:view_interview('[valor dinámico]','[valor dinámico]');"&gt; |
| 253 | " href="javascript:view_interview('[valor dinámico]','[valor dinámico]');"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                               |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| 134 | img     | alt=&lt;%=zTitle%&gt;; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                              |
| 142 | a       | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31             |
| 148 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31; method=post; name=detinterview; id=detinterview |
| 149 | input   | type=hidden; id=zPOSINTERVIEW; name=zPOSINTERVIEW; value=                                                               |
| 150 | input   | type=hidden; id=zNODE; name=zNODE; value=                                                                               |
| 153 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31; method=post; name=oculto; id=oculto                 |
| 154 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                         |
| 155 | input   | type=hidden; id=zinicios2; name=zinicios2; value=                                                                       |
| 196 | a       | class=enlacefuncional; title=JSP_EXPR_tranivESS.getProperty(; m4name=&lt;%=zSCOINTERVIEWNAMEUNFIN%&gt;; htmlsafe=true   |
| 254 | a       | class=enlacefuncional; title=JSP_EXPR_tranivESS.getProperty(; m4name=&lt;%=zSCOINTERVIEWNAMEFIN%&gt;; htmlsafe=true     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 27  | estado          | getParameter(request,"estado")    |
| 28  | zinicios        | getParameter(request,"zinicios")  |
| 29  | zinicios2       | getParameter(request,"zinicios2") |

| L   | Variable               | Expresión fuente                                                                    | Resolución estática parcial                                                                                                                        |
| --- | ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23  | zTitle                 | tranivESS.getProperty("iv_ess.Interview")                                           | tranivESS.getProperty("iv_ess.Interview")                                                                                                          |
| 27  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                 |
| 28  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                               |
| 29  | zinicios2              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios2")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios2")                                                                              |
| 42  | zventanas              | "10"                                                                                | 10                                                                                                                                                 |
| 43  | zvuelta                | 5                                                                                   | 5                                                                                                                                                  |
| 44  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                                | Integer.valueOf(zinicios).intValue()                                                                                                               |
| 47  | zregistroinicial2      | Integer.valueOf(zinicios2).intValue()                                               | Integer.valueOf(zinicios2).intValue()                                                                                                              |
| 50  | zventana               | Integer.valueOf(zventanas).intValue()                                               | Integer.valueOf(zventanas).intValue()                                                                                                              |
| 52  | zregistrofinal         | zregistroinicial + zventana - 1                                                     | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                 |
| 53  | zregistrofinal2        | zregistroinicial2 + zventana - 1                                                    | Integer.valueOf(zinicios2).intValue(){zventana - 1}                                                                                                |
| 55  | ziniciointervalo       | ""                                                                                  |                                                                                                                                                    |
| 56  | ziniciointervalo2      | ""                                                                                  |                                                                                                                                                    |
| 58  | zpos                   | ""                                                                                  |                                                                                                                                                    |
| 60  | zsubsesion             | "SSE_GN_INTERVIEW"                                                                  | SSE_GN_INTERVIEW                                                                                                                                   |
| 61  | zmeta4object           | "SSE_GN_INTERVIEW"                                                                  | SSE_GN_INTERVIEW                                                                                                                                   |
| 62  | znodo                  | "SSE_GN_INTERVIEW"                                                                  | SSE_GN_INTERVIEW                                                                                                                                   |
| 63  | znodounfin             | "M4T_UNFINISHED_INTERVIEW"                                                          | M4T_UNFINISHED_INTERVIEW                                                                                                                           |
| 64  | znodofin               | "M4T_FINISHED_INTERVIEW"                                                            | M4T_FINISHED_INTERVIEW                                                                                                                             |
| 68  | zoutputdefunfin        | zsubsesion + "!" + znodounfin + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 69  | zmoveunfin             | znodounfin + ":" + znodounfin + "[FIRST]"                                           | M4T_UNFINISHED_INTERVIEW{":"}M4T_UNFINISHED_INTERVIEW{"[FIRST]"}                                                                                   |
| 70  | zcomununfin            | znodounfin + ":" + zsubsesion + "!" + znodounfin + "[&amp;VAR.m4lix]" + "."         | M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}                                                |
| 72  | zoutputdeffin          | zsubsesion + "!" + znodofin + "[" + zregistroinicial2 + "-" + zregistrofinal2 + "]" | SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"["}Integer.valueOf(zinicios2).intValue(){"-"}Integer.valueOf(zinicios2).intValue(){zventana - 1}{"]"} |
| 73  | zmovefin               | znodofin + ":" + znodofin + "[FIRST]"                                               | M4T_FINISHED_INTERVIEW{":"}M4T_FINISHED_INTERVIEW{"[FIRST]"}                                                                                       |
| 74  | zcomunfin              | znodofin + ":" + zsubsesion + "!" + znodofin + "[&amp;VAR.m4lix]" + "."             | M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}                                                    |
| 78  | ztipocarga             | "M4T"                                                                               | M4T                                                                                                                                                |
| 79  | zmetodocarga           | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                      | CARGA:{}SSE_GN_INTERVIEW{"!SSE_PRINCIPAL.CARGA"}                                                                                                   |
| 83  | zSCOINTERVIEWNAMEUNFIN | zcomununfin + "SCO_INTERVIEW_NAME"                                                  | M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}                          |
| 84  | zSCODTREQUESTUNFIN     | zcomununfin + "SCO_DT_REQUEST"                                                      | M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}                              |
| 85  | zSCOGBNAMEUNFIN        | zcomununfin + "SCO_GB_NAME"                                                         | M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                 |
| 87  | zSCOINTERVIEWNAMEFIN   | zcomunfin + "SCO_INTERVIEW_NAME"                                                    | M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}                              |
| 88  | zSCODTREQUESTFIN       | zcomunfin + "SCO_DT_REQUEST"                                                        | M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}                                  |
| 89  | zSCODTFINISHFIN        | zcomunfin + "SCO_DT_FINISH"                                                         | M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_FINISH"}                                   |
| 90  | zSCOGBNAMEFIN          | zcomunfin + "SCO_GB_NAME"                                                           | M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                     |
| 109 | zcount                 | 0                                                                                   | 0                                                                                                                                                  |
| 110 | zcount2                | 0                                                                                   | 0                                                                                                                                                  |
| 111 | zcounti                | 0                                                                                   | 0                                                                                                                                                  |
| 112 | zcounti2               | 0                                                                                   | 0                                                                                                                                                  |
| 120 | zcountvunfin           | String.valueOf(zcounti)                                                             | String.valueOf(zcounti)                                                                                                                            |
| 121 | ztounfin               | new Integer(new Integer(zcountvunfin).intValue()-1).toString()                      | new Integer(new Integer(zcountvunfin).intValue()-1).toString()                                                                                     |
| 122 | zcountvfin             | String.valueOf(zcounti2)                                                            | String.valueOf(zcounti2)                                                                                                                           |
| 123 | ztofin                 | new Integer(new Integer(zcountvfin).intValue()-1).toString()                        | new Integer(new Integer(zcountvfin).intValue()-1).toString()                                                                                       |
| 181 | zregistroinicials      | String.valueOf(zregistroinicial)                                                    | String.valueOf(zregistroinicial)                                                                                                                   |
| 182 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                      | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                    |
| 183 | zposicions             | "0"                                                                                 | 0                                                                                                                                                  |
| 184 | zcontrol               | 0                                                                                   | 0                                                                                                                                                  |
| 185 | zposicion              | 0                                                                                   | 0                                                                                                                                                  |
| 239 | zregistroinicials2     | String.valueOf(zregistroinicial2)                                                   | String.valueOf(zregistroinicial2)                                                                                                                  |
| 240 | zregistrofinals2       | String.valueOf(zregistroinicial2 + zcounti2 - 1)                                    | {String.valueOf(zregistroinicial2}{zcounti2 - 1)}                                                                                                  |
| 241 | zposicions2            | "0"                                                                                 | 0                                                                                                                                                  |
| 242 | zcontrol2              | 0                                                                                   | 0                                                                                                                                                  |
| 243 | zposicion2             | 0                                                                                   | 0                                                                                                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94  | m4:startpage | m4task=SSE_GN_INTERVIEW                                                                                                                                                |
| 95  | m4:beginjob  |                                                                                                                                                                        |
| 96  | m4:datadef   | m4o=SSE_GN_INTERVIEW; m4name=SSE_GN_INTERVIEW                                                                                                                          |
| 102 | m4:exec      | m4method=CARGA:{}SSE_GN_INTERVIEW{"!SSE_PRINCIPAL.CARGA"}                                                                                                              |
| 102 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                             |
| 103 | m4:outputdef | m4alias=M4T_UNFINISHED_INTERVIEW                                                                                                                                       |
| 103 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 104 | m4:outputdef | m4alias=M4T_FINISHED_INTERVIEW                                                                                                                                         |
| 104 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"["}Integer.valueOf(zinicios2).intValue(){"-"}Integer.valueOf(zinicios2).intValue(){zventana - 1}{"]"} |
| 105 | m4:endjob    |                                                                                                                                                                        |
| 106 | m4:move      |                                                                                                                                                                        |
| 106 | m4:param     | name=SSE_GN_INTERVIEW; value=M4T_UNFINISHED_INTERVIEW{":"}M4T_UNFINISHED_INTERVIEW{"[FIRST]"}                                                                          |
| 107 | m4:move      |                                                                                                                                                                        |
| 107 | m4:param     | name=SSE_GN_INTERVIEW; value=M4T_FINISHED_INTERVIEW{":"}M4T_FINISHED_INTERVIEW{"[FIRST]"}                                                                              |
| 170 | m4:label     | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                        |
| 173 | m4:label     | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                            |
| 176 | m4:label     | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                               |
| 187 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 196 | m4:item      | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                        |
| 199 | m4:item      | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                            |
| 202 | m4:item      | m4name=M4T_UNFINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_UNFINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                               |
| 226 | m4:label     | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                            |
| 229 | m4:label     | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                |
| 232 | m4:label     | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_FINISH"}; htmlsafe=true                                 |
| 235 | m4:label     | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                   |
| 245 | m4:loop      | from=String.valueOf(zregistroinicial2); to={String.valueOf(zregistroinicial2}{zcounti2 - 1)}                                                                           |
| 254 | m4:item      | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                            |
| 257 | m4:item      | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                |
| 260 | m4:item      | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_FINISH"}; htmlsafe=true                                 |
| 263 | m4:item      | m4name=M4T_FINISHED_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}M4T_FINISHED_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                   |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 99  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 115 | getCount         | znodounfin,zsubsesion,znodounfin          |
| 116 | getCount         | znodofin,zsubsesion,znodofin              |
| 117 | getCountInClient | znodounfin,zsubsesion,znodounfin          |
| 118 | getCountInClient | znodofin,zsubsesion,znodofin              |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 15  | view_interview | a,b        |

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                    |
| 31  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                            |
| 32  | if ((zinicios2==null)&#124;&#124;(zinicios2.equals(""))){zinicios2 = "1";}                                                                         |
| 159 | if (zcounti &gt; 0) {                                                                                                                              |
| 192 | if (zcontrol==0){zpos="2";}                                                                                                                        |
| 208 | &lt;%}else{%&gt;                                                                                                                                   |
| 214 | if (zcounti2 &gt; 0) {                                                                                                                             |
| 250 | if (zcontrol2==0){zpos="2";}                                                                                                                       |
| 269 | &lt;%}else{%&gt;                                                                                                                                   |
| 45  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                      |
| 48  | expresión de cálculo/transformación: zregistroinicial2 = zregistroinicial2 - 1;                                                                    |
| 52  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                         |
| 53  | expresión de cálculo/transformación: int zregistrofinal2 = zregistroinicial2 + zventana - 1;                                                       |
| 68  | expresión de cálculo/transformación: String zoutputdefunfin = zsubsesion + "!" + znodounfin + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 69  | expresión de cálculo/transformación: String zmoveunfin = znodounfin + ":" + znodounfin + "[FIRST]";                                                |
| 70  | expresión de cálculo/transformación: String zcomununfin = znodounfin + ":" + zsubsesion + "!" + znodounfin + "[&amp;VAR.m4lix]" + ".";             |
| 72  | expresión de cálculo/transformación: String zoutputdeffin = zsubsesion + "!" + znodofin + "[" + zregistroinicial2 + "-" + zregistrofinal2 + "]";   |
| 73  | expresión de cálculo/transformación: String zmovefin = znodofin + ":" + znodofin + "[FIRST]";                                                      |
| 74  | expresión de cálculo/transformación: String zcomunfin = znodofin + ":" + zsubsesion + "!" + znodofin + "[&amp;VAR.m4lix]" + ".";                   |
| 79  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                         |
| 83  | expresión de cálculo/transformación: String zSCOINTERVIEWNAMEUNFIN = zcomununfin + "SCO_INTERVIEW_NAME";                                           |
| 84  | expresión de cálculo/transformación: String zSCODTREQUESTUNFIN = zcomununfin + "SCO_DT_REQUEST";                                                   |
| 85  | expresión de cálculo/transformación: String zSCOGBNAMEUNFIN = zcomununfin + "SCO_GB_NAME";                                                         |
| 87  | expresión de cálculo/transformación: String zSCOINTERVIEWNAMEFIN = zcomunfin + "SCO_INTERVIEW_NAME";                                               |
| 88  | expresión de cálculo/transformación: String zSCODTREQUESTFIN = zcomunfin + "SCO_DT_REQUEST";                                                       |
| 89  | expresión de cálculo/transformación: String zSCODTFINISHFIN = zcomunfin + "SCO_DT_FINISH";                                                         |
| 90  | expresión de cálculo/transformación: String zSCOGBNAMEFIN = zcomunfin + "SCO_GB_NAME";                                                             |
| 182 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                      |
| 240 | expresión de cálculo/transformación: String zregistrofinals2 = String.valueOf(zregistroinicial2 + zcounti2 - 1);                                   |

### Includes, navegación y dependencias

| L   | Include                                                |
| --- | ------------------------------------------------------ |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                |
| 11  | /sse_g3/ssco_iv_trans.jsp                              |
| 37  | ../../sse_generico/espanol/generico_menusup.jsp        |
| 38  | ../../sse_generico/espanol/generico_links.jsp          |
| 207 | ../../sse_generico/espanol/generico_ventanas_post1.jsp |
| 268 | ../../sse_generico/espanol/generico_ventanas_post2.jsp |
| 274 | ../../sse_generico/espanol/generico_disclaimer.jsp     |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 134 | /iconos/noname_objetivos_ess_103_100.gif                        |
| 142 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 |
| 148 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31 |
| 153 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     |
| 196 | javascript:view_interview(                                      |
| 254 | javascript:view_interview(                                      |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 11  | /sse_g3/ssco_iv_trans.jsp                                       |
| 37  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 38  | ../../sse_generico/espanol/generico_links.jsp                   |
| 207 | ../../sse_generico/espanol/generico_ventanas_post1.jsp          |
| 268 | ../../sse_generico/espanol/generico_ventanas_post2.jsp          |
| 274 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                 |
| ------ | --- | --------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                               |
| BASE   | 11  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                              |
| BASE   | 37  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)               |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                   |
| BASE   | 207 | ../../sse_generico/espanol/generico_ventanas_post1.jsp          | física     | [sse_generico/generico_ventanas_post1.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post1.md) |
| BASE   | 268 | ../../sse_generico/espanol/generico_ventanas_post2.jsp          | física     | [sse_generico/generico_ventanas_post2.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post2.md) |
| BASE   | 274 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)         |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                            |
| BASE   | 142 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 | ausente    | P06                                                                                                               |
| BASE   | 148 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31 | ausente    | P06                                                                                                               |
| BASE   | 153 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     | ausente    | P06                                                                                                               |
| BASE   | 196 | javascript:view_interview(                                      | dinámica   | P06                                                                                                               |
| BASE   | 254 | javascript:view_interview(                                      | dinámica   | P06                                                                                                               |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                               |
| BASE   | 11  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                              |
| BASE   | 37  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)               |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                   |
| BASE   | 207 | ../../sse_generico/espanol/generico_ventanas_post1.jsp          | física     | [sse_generico/generico_ventanas_post1.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post1.md) |
| BASE   | 268 | ../../sse_generico/espanol/generico_ventanas_post2.jsp          | física     | [sse_generico/generico_ventanas_post2.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post2.md) |
| BASE   | 274 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_g3_p11.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
