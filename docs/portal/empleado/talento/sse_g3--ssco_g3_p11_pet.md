# ssco_g3_p11_pet

Identificador: `sse_g3/ssco_g3_p11_pet.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                                                                                                         | Ámbito | Diccionario                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_ess.Add_Solicitud      | Solicitud de una nueva entrevista                                                                                             | BASE   | [translations/ssco_iv_es.properties:L27](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Del_Solicitud      | Eliminar la petición                                                                                                          | BASE   | [translations/ssco_iv_es.properties:L28](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.DescrAddInter      | Desde esta ventana podrás solicitar una nueva entrevista y consultar aquellas entrevistas que están pendientes de aprobación. | BASE   | [translations/ssco_iv_es.properties:L9](../../referencias/literales/ssco_iv_es.md)  |
| iv_ess.Goto               | Ir a                                                                                                                          | BASE   | [translations/ssco_iv_es.properties:L13](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Interview          | Mis entrevistas                                                                                                               | BASE   | [translations/ssco_iv_es.properties:L3](../../referencias/literales/ssco_iv_es.md)  |
| iv_ess.Interviewer        | Elige el entrevistador                                                                                                        | BASE   | [translations/ssco_iv_es.properties:L34](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Name_Interview     | Escribe el nombre de la entrevista                                                                                            | BASE   | [translations/ssco_iv_es.properties:L29](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.NoDataFound1       | No tienes ninguna petición de entrevista pendiente de aprobar                                                                 | BASE   | [translations/ssco_iv_es.properties:L23](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.PendInterview      | Mis entrevistas pendientes de aprobar                                                                                         | BASE   | [translations/ssco_iv_es.properties:L18](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Priority_Interview | Selecciona el tipo de la prioridad entrevista                                                                                 | BASE   | [translations/ssco_iv_es.properties:L31](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Reason             | Razón                                                                                                                         | BASE   | [translations/ssco_iv_es.properties:L32](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Reason_Interview   | Escribe la razón de la entrevista                                                                                             | BASE   | [translations/ssco_iv_es.properties:L33](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Send               | Enviar                                                                                                                        | BASE   | [translations/ssco_iv_es.properties:L35](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Title_Solicitud    | Solicitar una entrevista                                                                                                      | BASE   | [translations/ssco_iv_es.properties:L26](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Type_Interview     | Selecciona el tipo de la entrevista                                                                                           | BASE   | [translations/ssco_iv_es.properties:L30](../../referencias/literales/ssco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_g3_p11_pet.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11_pet.jsp) | `38235bdae1c559319a6d4c93c968382cf6e8facf21cc28435333606546d96a2e` |    348 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_g3_p11_pet.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11_pet.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                       |
| --- | ------------------------------------------------------------------------------ |
| 197 | [valor dinámico] [valor dinámico]                                              |
| 227 | *                                                                              |
| 234 | *                                                                              |
| 236 | "&gt;                                                                          |
| 245 | *                                                                              |
| 247 | "&gt;                                                                          |
| 256 | * [valor dinámico]                                                             |
| 264 | *                                                                              |
| 266 | " maxlength="50" size="50" value=" " /&gt;                                     |
| 322 | " href="javascript:view_interview('[valor dinámico]','[valor dinámico]');"&gt; |
| 331 | ');"&gt;                                                                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                       |
| --- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 196 | img      | alt=&lt;%=zTitle%&gt;; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                                                                                                      |
| 201 | a        | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31                                                                                         |
| 207 | form     | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                               |
| 208 | input    | type=hidden; id=TAG; name=TAG; value=SSE_GN_INTERVIEW                                                                                                                                           |
| 209 | input    | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                   |
| 210 | input    | type=hidden; id=NOD; name=NOD; value=SSE_GN_INTERVIEW                                                                                                                                           |
| 211 | input    | type=hidden; id=SCO_ID_INTERVIEWER; name=SCO_ID_INTERVIEWER; value=&lt;m4:item m4name=; htmlsafe=true                                                                                           |
| 212 | input    | type=hidden; id=SCO_OR_INTERVIEWER; name=SCO_OR_INTERVIEWER; value=&lt;m4:item m4name=; htmlsafe=true                                                                                           |
| 215 | input    | type=hidden; id=SCO_OR_HR_PERIOD; name=SCO_OR_HR_PERIOD; value=&lt;%=sOrHrPeriod%&gt;                                                                                                           |
| 220 | a        | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31                                                                                         |
| 221 | img      | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 230 | input    | class=fuenteformulario; type=text; name=SCO_INTERVIEW_NAME; id=SCO_INTERVIEW_NAME; title=JSP_EXPR_tranivESS.getProperty(; maxlength=255; size=80; tabindex=1                                    |
| 237 | select   | id=SCO_ID_INTERVIEW_TYPE; class=fuenteformulario; name=SCO_ID_INTERVIEW_TYPE; title=JSP_EXPR_tranivESS.getProperty(; tabindex=2                                                                 |
| 239 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                        |
| 248 | select   | id=SCO_ID_INTERVIEW_PRIORITY; class=fuenteformulario; name=SCO_ID_INTERVIEW_PRIORITY; title=JSP_EXPR_tranivESS.getProperty(; tabindex=3                                                         |
| 250 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                        |
| 259 | textarea | class=fuentetextarea; name=SCO_INTERVIEW_REASON; id=SCO_INTERVIEW_REASON; title=JSP_EXPR_tranivESS.getProperty(; cols=85; rows=5; tabindex=4                                                    |
| 267 | input    | class=fuenteformulario; type=text; name=SCO_GB_NAME; id=SCO_GB_NAME; readonly=readonly; title=&lt;m4:label m4name=; htmlsafe=true                                                               |
| 268 | a        | tabindex=5; href=javascript:ssco_filter_responsibles('NombreFormulario','SCO_ID_INTERVIEWER','SCO_OR_INTERVIEWER','SCO_GB_NAME'); title=JSP_EXPR_tranivESS.getProperty(                         |
| 268 | img      | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/icono_lista_16_16.gif; width=16; height=16; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |
| 273 | a        | title=JSP_EXPR_tranivESS.getProperty(; href=javascript:comprobar();; tabindex=6                                                                                                                 |
| 273 | img      | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)  |
| 279 | form     | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31; method=post; name=detinterview; id=detinterview                                                                         |
| 280 | input    | type=hidden; id=zPOSINTERVIEW; name=zPOSINTERVIEW; value=                                                                                                                                       |
| 281 | input    | type=hidden; id=zNODE; name=zNODE; value=                                                                                                                                                       |
| 287 | form     | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                     |
| 288 | input    | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                 |
| 323 | a        | class=enlacefuncional; title=JSP_EXPR_tranivESS.getProperty(; m4name=&lt;%=zSCOINTERVIEWNAME%&gt;; htmlsafe=true                                                                                |
| 332 | a        | title=JSP_EXPR_tranivESS.getProperty(; href=javascript:pending('&lt;m4:item m4name=; htmlsafe=true                                                                                              |
| 332 | img      | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/denegado.gif; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 73  | estado          | getParameter(request,"estado")   |
| 74  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                                     |
| --- | ------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 69  | zTitle              | tranivESS.getProperty("iv_ess.Title_Solicitud")                                | tranivESS.getProperty("iv_ess.Title_Solicitud")                                                                                                 |
| 73  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                              |
| 74  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                            |
| 86  | zventanas           | "10"                                                                           | 10                                                                                                                                              |
| 87  | zvuelta             | 5                                                                              | 5                                                                                                                                               |
| 88  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 90  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 91  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 92  | zpos                | ""                                                                             |                                                                                                                                                 |
| 94  | zsubsesion          | "SSE_GN_INTERVIEW"                                                             | SSE_GN_INTERVIEW                                                                                                                                |
| 95  | zmeta4object        | "SSE_GN_INTERVIEW"                                                             | SSE_GN_INTERVIEW                                                                                                                                |
| 96  | znodo               | "SSE_PENDING_INTERVIEW"                                                        | SSE_PENDING_INTERVIEW                                                                                                                           |
| 97  | znodopr             | "M4T_X_INTERVIEW_PRIORITY"                                                     | M4T_X_INTERVIEW_PRIORITY                                                                                                                        |
| 98  | znodotp             | "M4T_X_INTERVIEW_TYPE"                                                         | M4T_X_INTERVIEW_TYPE                                                                                                                            |
| 99  | znodoiv             | "SSE_INTERVIEWER"                                                              | SSE_INTERVIEWER                                                                                                                                 |
| 102 | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                             |
| 103 | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_GN_INTERVIEW{"!SSE_PRINCIPAL.CARGA"}                                                                                                |
| 107 | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 108 | zmove               | znodo + ":" + znodo + "[FIRST]"                                                | SSE_PENDING_INTERVIEW{":"}SSE_PENDING_INTERVIEW{"[FIRST]"}                                                                                      |
| 109 | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 113 | zSCOINTERVIEWNAME   | zcomun + "SCO_INTERVIEW_NAME"                                                  | SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}                             |
| 114 | zSCODTREQUEST       | zcomun + "SCO_DT_REQUEST"                                                      | SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}                                 |
| 115 | zSCOGBNAME          | zcomun + "SCO_GB_NAME"                                                         | SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                    |
| 116 | zORDINAL            | zcomun + "ORDINAL"                                                             | SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                        |
| 120 | zoutputdefpr        | zsubsesion + "!" + znodopr + "[*]"                                             | SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[*]"}                                                                                            |
| 121 | zmovepr             | znodopr + ":" + znodopr + "[FIRST]"                                            | M4T_X_INTERVIEW_PRIORITY{":"}M4T_X_INTERVIEW_PRIORITY{"[FIRST]"}                                                                                |
| 122 | zcomunpr            | znodopr + ":" + zsubsesion + "!" + znodopr + "[&amp;VAR.m4lix]" + "."          | M4T_X_INTERVIEW_PRIORITY{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[&amp;VAR.m4lix]"}{"."}                                             |
| 126 | zSCOIDINTERVIEWPRIO | zcomunpr + "SCO_ID_INTERVIEW_PRIORITY"                                         | M4T_X_INTERVIEW_PRIORITY{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INTERVIEW_PRIORITY"}                |
| 127 | zSCONMINTERVIEWPRIO | zcomunpr + "SCO_NM_INTERVIEW_PRIORITY"                                         | M4T_X_INTERVIEW_PRIORITY{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}                |
| 131 | zoutputdeftp        | zsubsesion + "!" + znodotp + "[*]"                                             | SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[*]"}                                                                                                |
| 132 | zmovetp             | znodotp + ":" + znodotp + "[FIRST]"                                            | M4T_X_INTERVIEW_TYPE{":"}M4T_X_INTERVIEW_TYPE{"[FIRST]"}                                                                                        |
| 133 | zcomuntp            | znodotp + ":" + zsubsesion + "!" + znodotp + "[&amp;VAR.m4lix]" + "."          | M4T_X_INTERVIEW_TYPE{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 137 | zSCOIDINTERVIEWTYPE | zcomuntp + "SCO_ID_INTERVIEW_TYPE"                                             | M4T_X_INTERVIEW_TYPE{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INTERVIEW_TYPE"}                            |
| 138 | zSCONMINTERVIEWTYPE | zcomuntp + "SCO_NM_INTERVIEW_TYPE"                                             | M4T_X_INTERVIEW_TYPE{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}                            |
| 142 | zoutputdefiv        | zsubsesion + "!" + znodoiv + "[*]"                                             | SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[*]"}                                                                                                     |
| 143 | zmoveiv             | znodoiv + ":" + znodoiv + "[FIRST]"                                            | SSE_INTERVIEWER{":"}SSE_INTERVIEWER{"[FIRST]"}                                                                                                  |
| 144 | zcomuniv            | znodoiv + ":" + zsubsesion + "!" + znodoiv + "[0]" + "."                       | SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}                                                                            |
| 148 | zSCONMINTERVIEW     | zcomuniv + "PRP_IV_GB_NAME"                                                    | SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_IV_GB_NAME"}                                                          |
| 149 | zSCOIDINTERVIEW     | zcomuniv + "PRP_IV_ID_HR"                                                      | SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_IV_ID_HR"}                                                            |
| 150 | zSCOPRINTERVIEW     | zcomuniv + "PRP_IV_OR_HR_PERIOD"                                               | SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_IV_OR_HR_PERIOD"}                                                     |
| 151 | zSCOPRORHR          | zcomuniv + "PRP_OR_HR_PERIOD"                                                  | SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_OR_HR_PERIOD"}                                                        |
| 173 | zcount              | 0                                                                              | 0                                                                                                                                               |
| 174 | zcounti             | 0                                                                              | 0                                                                                                                                               |
| 175 | zcountipr           | 0                                                                              | 0                                                                                                                                               |
| 176 | zcountitp           | 0                                                                              | 0                                                                                                                                               |
| 177 | zcountiiv           | 0                                                                              | 0                                                                                                                                               |
| 186 | zcountvtmpintpr     | String.valueOf(zcountipr)                                                      | String.valueOf(zcountipr)                                                                                                                       |
| 187 | ztotmpintpr         | new Integer(new Integer(zcountvtmpintpr).intValue()-1).toString()              | new Integer(new Integer(zcountvtmpintpr).intValue()-1).toString()                                                                               |
| 188 | zcountvtmpinttp     | String.valueOf(zcountitp)                                                      | String.valueOf(zcountitp)                                                                                                                       |
| 189 | ztotmpinttp         | new Integer(new Integer(zcountvtmpinttp).intValue()-1).toString()              | new Integer(new Integer(zcountvtmpinttp).intValue()-1).toString()                                                                               |
| 190 | zcountvtmpintiv     | String.valueOf(zcountiiv)                                                      | String.valueOf(zcountiiv)                                                                                                                       |
| 191 | ztotmpintiv         | new Integer(new Integer(zcountvtmpintiv).intValue()-1).toString()              | new Integer(new Integer(zcountvtmpintiv).intValue()-1).toString()                                                                               |
| 308 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                |
| 309 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                 |
| 310 | zposicions          | "0"                                                                            | 0                                                                                                                                               |
| 311 | zcontrol            | 0                                                                              | 0                                                                                                                                               |
| 312 | zposicion           | 0                                                                              | 0                                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 154 | m4:startpage | m4task=SSE_GN_INTERVIEW                                                                                                                                             |
| 155 | m4:beginjob  |                                                                                                                                                                     |
| 156 | m4:datadef   | m4o=SSE_GN_INTERVIEW; m4name=SSE_GN_INTERVIEW                                                                                                                       |
| 162 | m4:exec      | m4method=CARGA:{}SSE_GN_INTERVIEW{"!SSE_PRINCIPAL.CARGA"}                                                                                                           |
| 162 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                          |
| 163 | m4:outputdef | m4alias=SSE_PENDING_INTERVIEW                                                                                                                                       |
| 163 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 164 | m4:outputdef | m4alias=M4T_X_INTERVIEW_PRIORITY                                                                                                                                    |
| 164 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[*]"}                                                                                            |
| 165 | m4:outputdef | m4alias=M4T_X_INTERVIEW_TYPE                                                                                                                                        |
| 165 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[*]"}                                                                                                |
| 166 | m4:outputdef | m4alias=SSE_INTERVIEWER                                                                                                                                             |
| 166 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[*]"}                                                                                                     |
| 167 | m4:endjob    |                                                                                                                                                                     |
| 168 | m4:move      |                                                                                                                                                                     |
| 168 | m4:param     | name=SSE_GN_INTERVIEW; value=SSE_PENDING_INTERVIEW{":"}SSE_PENDING_INTERVIEW{"[FIRST]"}                                                                             |
| 169 | m4:move      |                                                                                                                                                                     |
| 169 | m4:param     | name=SSE_GN_INTERVIEW; value=M4T_X_INTERVIEW_PRIORITY{":"}M4T_X_INTERVIEW_PRIORITY{"[FIRST]"}                                                                       |
| 170 | m4:move      |                                                                                                                                                                     |
| 170 | m4:param     | name=SSE_GN_INTERVIEW; value=M4T_X_INTERVIEW_TYPE{":"}M4T_X_INTERVIEW_TYPE{"[FIRST]"}                                                                               |
| 171 | m4:move      |                                                                                                                                                                     |
| 171 | m4:param     | name=SSE_GN_INTERVIEW; value=SSE_INTERVIEWER{":"}SSE_INTERVIEWER{"[FIRST]"}                                                                                         |
| 213 | m4:item      | m4varname=sOrHrPeriod; m4name=SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_OR_HR_PERIOD"}; htmlsafe=true                               |
| 227 | m4:label     | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                           |
| 234 | m4:label     | m4name=M4T_X_INTERVIEW_TYPE{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                          |
| 238 | m4:loop      | from=0; to=new Integer(new Integer(zcountvtmpinttp).intValue()-1).toString()                                                                                        |
| 239 | m4:item      | m4name=M4T_X_INTERVIEW_TYPE{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                          |
| 245 | m4:label     | m4name=M4T_X_INTERVIEW_PRIORITY{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true              |
| 249 | m4:loop      | from=0; to=new Integer(new Integer(zcountvtmpintpr).intValue()-1).toString()                                                                                        |
| 250 | m4:item      | m4name=M4T_X_INTERVIEW_PRIORITY{":"}SSE_GN_INTERVIEW{"!"}M4T_X_INTERVIEW_PRIORITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true              |
| 264 | m4:label     | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                  |
| 267 | m4:item      | m4name=SSE_INTERVIEWER{":"}SSE_GN_INTERVIEW{"!"}SSE_INTERVIEWER{"[0]"}{"."}{"PRP_IV_GB_NAME"}; htmlsafe=true                                                        |
| 298 | m4:label     | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                           |
| 301 | m4:label     | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                               |
| 304 | m4:label     | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                  |
| 314 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                           |
| 323 | m4:item      | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                           |
| 326 | m4:item      | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                               |
| 329 | m4:item      | m4name=SSE_PENDING_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_PENDING_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 159 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 180 | getCount         | znodo,zsubsesion,znodo                    |
| 181 | getCountInClient | znodo,zsubsesion,znodo                    |
| 182 | getCountInClient | znodopr,zsubsesion,znodopr                |
| 183 | getCountInClient | znodotp,zsubsesion,znodotp                |
| 184 | getCountInClient | znodoiv,zsubsesion,znodoiv                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 15  | comprobar      |            |
| 53  | view_interview | a,b        |
| 60  | pending        | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if (sivname == null &#124;&#124; sivname == "")                                                                                          |
| 30  | if (sreason == null &#124;&#124; sreason == "")                                                                                          |
| 36  | if (sidiv == null &#124;&#124; sidiv == "")                                                                                              |
| 42  | if (error == 1)                                                                                                                          |
| 44  | alert(texto);                                                                                                                            |
| 47  | else                                                                                                                                     |
| 75  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";}                                                                         |
| 76  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 285 | if (zcounti &gt; 0) {                                                                                                                    |
| 319 | if (zcontrol==0){zpos="2";}                                                                                                              |
| 339 | &lt;%}else{%&gt;                                                                                                                         |
| 18  | expresión de cálculo/transformación: var texto = m4getmessage("_sl_co_ess_iv_3") + "\n";                                                 |
| 26  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_iv_0");                                            |
| 32  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_iv_1");                                            |
| 38  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_iv_2");                                            |
| 89  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 91  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 103 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 107 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 108 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                     |
| 109 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 113 | expresión de cálculo/transformación: String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";                                           |
| 114 | expresión de cálculo/transformación: String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";                                                   |
| 115 | expresión de cálculo/transformación: String zSCOGBNAME = zcomun + "SCO_GB_NAME";                                                         |
| 116 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 120 | expresión de cálculo/transformación: String zoutputdefpr = zsubsesion + "!" + znodopr + "[*]";                                           |
| 121 | expresión de cálculo/transformación: String zmovepr = znodopr + ":" + znodopr + "[FIRST]";                                               |
| 122 | expresión de cálculo/transformación: String zcomunpr = znodopr + ":" + zsubsesion + "!" + znodopr + "[&amp;VAR.m4lix]" + ".";            |
| 126 | expresión de cálculo/transformación: String zSCOIDINTERVIEWPRIO = zcomunpr + "SCO_ID_INTERVIEW_PRIORITY";                                |
| 127 | expresión de cálculo/transformación: String zSCONMINTERVIEWPRIO = zcomunpr + "SCO_NM_INTERVIEW_PRIORITY";                                |
| 131 | expresión de cálculo/transformación: String zoutputdeftp = zsubsesion + "!" + znodotp + "[*]";                                           |
| 132 | expresión de cálculo/transformación: String zmovetp = znodotp + ":" + znodotp + "[FIRST]";                                               |
| 133 | expresión de cálculo/transformación: String zcomuntp = znodotp + ":" + zsubsesion + "!" + znodotp + "[&amp;VAR.m4lix]" + ".";            |
| 137 | expresión de cálculo/transformación: String zSCOIDINTERVIEWTYPE = zcomuntp + "SCO_ID_INTERVIEW_TYPE";                                    |
| 138 | expresión de cálculo/transformación: String zSCONMINTERVIEWTYPE = zcomuntp + "SCO_NM_INTERVIEW_TYPE";                                    |
| 142 | expresión de cálculo/transformación: String zoutputdefiv = zsubsesion + "!" + znodoiv + "[*]";                                           |
| 143 | expresión de cálculo/transformación: String zmoveiv = znodoiv + ":" + znodoiv + "[FIRST]";                                               |
| 144 | expresión de cálculo/transformación: String zcomuniv = znodoiv + ":" + zsubsesion + "!" + znodoiv + "[0]" + ".";                         |
| 148 | expresión de cálculo/transformación: String zSCONMINTERVIEW = zcomuniv + "PRP_IV_GB_NAME";                                               |
| 149 | expresión de cálculo/transformación: String zSCOIDINTERVIEW = zcomuniv + "PRP_IV_ID_HR";                                                 |
| 150 | expresión de cálculo/transformación: String zSCOPRINTERVIEW = zcomuniv + "PRP_IV_OR_HR_PERIOD";                                          |
| 151 | expresión de cálculo/transformación: String zSCOPRORHR = zcomuniv + "PRP_OR_HR_PERIOD";                                                  |
| 309 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 12  | /sse_g3/ssco_iv_trans.jsp                             |
| 81  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 82  | ../../sse_generico/espanol/generico_links.jsp         |
| 338 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 345 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 10  | /libreria/funciones_filter.js                                   |
| 196 | /iconos/noname_objetivos_ess_103_100.gif                        |
| 201 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     |
| 207 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 220 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     |
| 221 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 268 | javascript:ssco_filter_responsibles(                            |
| 268 | /iconos/icono_lista_16_16.gif                                   |
| 273 | javascript:comprobar();                                         |
| 273 | /iconos/icono_enviar_ess_36_36.gif                              |
| 279 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31 |
| 287 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 |
| 323 | javascript:view_interview(                                      |
| 332 | javascript:pending(                                             |
| 332 | /iconos/denegado.gif                                            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 12  | /sse_g3/ssco_iv_trans.jsp                                       |
| 64  | sse_generico/generico_actualizar.jsp                            |
| 81  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 82  | ../../sse_generico/espanol/generico_links.jsp                   |
| 338 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 345 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                             |
| BASE   | 12  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                            |
| BASE   | 81  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)             |
| BASE   | 82  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 338 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 345 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)       |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 10  | /libreria/funciones_filter.js                                   | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                    |
| BASE   | 201 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     | ausente    | P06                                                                                                             |
| BASE   | 207 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                             |
| BASE   | 220 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     | ausente    | P06                                                                                                             |
| BASE   | 268 | javascript:ssco_filter_responsibles(                            | dinámica   | P06                                                                                                             |
| BASE   | 273 | javascript:comprobar();                                         | dinámica   | P06                                                                                                             |
| BASE   | 279 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 287 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 323 | javascript:view_interview(                                      | dinámica   | P06                                                                                                             |
| BASE   | 332 | javascript:pending(                                             | dinámica   | P06                                                                                                             |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                             |
| BASE   | 12  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                            |
| BASE   | 64  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                             |
| BASE   | 81  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)             |
| BASE   | 82  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 338 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 345 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_g3_p11_pet.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
