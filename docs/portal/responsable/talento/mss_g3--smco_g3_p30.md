# smco_g3_p30

Identificador: `mss_g3/smco_g3_p30.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                                                                                                                                                                     | Ámbito | Diccionario                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.DescrMyInter   | Desde aquí puedes ver tus entrevistas pendientes de realizar. Para introducir el resultado correspondientes a una entrevista determinada, sitúate sobre el nombre de la misma y haz clic. | BASE   | [translations/smco_iv_es.properties:L83](../../referencias/literales/smco_iv_es.md) |
| iv_mss.GestInterview  | Gestiona entrevistas                                                                                                                                                                      | BASE   | [translations/smco_iv_es.properties:L4](../../referencias/literales/smco_iv_es.md)  |
| iv_mss.LblCancel      | Cancelar                                                                                                                                                                                  | BASE   | [translations/smco_iv_es.properties:L27](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblCancel      | Cancelar entrevista                                                                                                                                                                       | BASE   | [translations/smco_iv_es.properties:L67](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblGoto        | Ir a                                                                                                                                                                                      | BASE   | [translations/smco_iv_es.properties:L20](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblNoPendingIv | No tienes ninguna entrevista pendiente de realizar                                                                                                                                        | BASE   | [translations/smco_iv_es.properties:L30](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblPendingIv   | Mis entrevistas pendientes                                                                                                                                                                | BASE   | [translations/smco_iv_es.properties:L31](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LinkAskIv      | Solicita una entrevista                                                                                                                                                                   | BASE   | [translations/smco_iv_es.properties:L78](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p30.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30.jsp) | `908a3201e53bda8449eff33c546907412b71a18cebda10583de5e1cea1f5ef14` |    251 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p30.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 151 | [valor dinámico] [valor dinámico]                                                                                  |
| 219 | " href="javascript:interview_det('[valor dinámico]','[valor dinámico]','[valor dinámico]','[valor dinámico]')"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 149 | img     | alt=&lt;%=zTitle%&gt;; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                                                                                                     |
| 157 | a       | title=JSP_EXPR_tranivMSS.getProperty(; href=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp?estado=31                                                                                    |
| 163 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31; method=post; name=detinterview; id=detinterview                                                                        |
| 164 | input   | type=hidden; id=zPRP_ID_HR_ENCR; name=zPRP_ID_HR_ENCR; value=                                                                                                                                  |
| 165 | input   | type=hidden; id=zPRP_OR_HR_PERIOD_ENCR; name=zPRP_OR_HR_PERIOD_ENCR; value=                                                                                                                    |
| 166 | input   | type=hidden; id=zPRP_DT_REQUEST_ENCR; name=zPRP_DT_REQUEST_ENCR; value=                                                                                                                        |
| 167 | input   | type=hidden; id=zPRP_ID_INTERVIEW_TYPE_ENCR; name=zPRP_ID_INTERVIEW_TYPE_ENCR; value=                                                                                                          |
| 173 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                        |
| 174 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                |
| 203 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31; method=post; name=delinterview; id=delinterview                                                                            |
| 204 | input   | type=hidden; id=zPRP_ID_HR; name=zPRP_ID_HR; value=                                                                                                                                            |
| 205 | input   | type=hidden; id=zPRP_OR_HR_PERIOD; name=zPRP_OR_HR_PERIOD; value=                                                                                                                              |
| 206 | input   | type=hidden; id=zPRP_DT_REQUEST; name=zPRP_DT_REQUEST; value=                                                                                                                                  |
| 207 | input   | type=hidden; id=zPRP_ID_INTERVIEW_TYPE; name=zPRP_ID_INTERVIEW_TYPE; value=                                                                                                                    |
| 208 | input   | type=hidden; id=zDelete; name=zDelete; value=                                                                                                                                                  |
| 228 | a       | class=enlacefuncional; title=JSP_EXPR_tranivMSS.getProperty(; m4name=&lt;%=zSCOINTERVIEWNAME%&gt;; htmlsafe=true                                                                               |
| 237 | a       | class=enlacefuncional; title=JSP_EXPR_tranivMSS.getProperty(; href=javascript:interview_del('&lt;%=sIdHR%&gt;','&lt;%=sOrHrPeriod%&gt;','&lt;%=sDtRequest%&gt;','&lt;%=sIdInterviewType%&gt;') |
| 237 | img     | src=/iconos/icono_borrar_16_16.gif; align=right; height=13; width=13                                                                                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave        | Acceso literal                                 |
| --- | ---------------------- | ---------------------------------------------- |
| 36  | estado                 | getParameter(request,"estado")                 |
| 37  | zinicios               | getParameter(request,"zinicios")               |
| 41  | zDelete                | getParameter(request,"zDelete")                |
| 56  | zPRP_ID_HR             | getParameter(request,"zPRP_ID_HR")             |
| 58  | zPRP_OR_HR_PERIOD      | getParameter(request,"zPRP_OR_HR_PERIOD")      |
| 60  | zPRP_ID_INTERVIEW_TYPE | getParameter(request,"zPRP_ID_INTERVIEW_TYPE") |
| 62  | zPRP_DT_REQUEST        | getParameter(request,"zPRP_DT_REQUEST")        |

| L   | Variable                  | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 32  | zTitle                    | tranivMSS.getProperty("iv_mss.GestInterview")                                  | tranivMSS.getProperty("iv_mss.GestInterview")                                                                                              |
| 36  | estado                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 37  | zinicios                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 41  | zdel                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDelete")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDelete")                                                                        |
| 44  | zSCOIDHRCancel            | ""                                                                             |                                                                                                                                            |
| 45  | zSCOORHPERIODCancel       | ""                                                                             |                                                                                                                                            |
| 46  | zSCOIDINTERVIEWTYPECancel | ""                                                                             |                                                                                                                                            |
| 47  | zSCODTREQUESTCancel       | ""                                                                             |                                                                                                                                            |
| 48  | zday                      | ""                                                                             |                                                                                                                                            |
| 49  | zmonth                    | ""                                                                             |                                                                                                                                            |
| 50  | zyear                     | ""                                                                             |                                                                                                                                            |
| 51  | ztipocarga                | "M4T"                                                                          | M4T                                                                                                                                        |
| 74  | zventanas                 | "10"                                                                           | 10                                                                                                                                         |
| 75  | zvuelta                   | 5                                                                              | 5                                                                                                                                          |
| 76  | zregistroinicial          | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 78  | zventana                  | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 79  | zregistrofinal            | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 80  | zpos                      | ""                                                                             |                                                                                                                                            |
| 82  | zsubsesion                | "SSM_GN_INTERVIEW"                                                             | SSM_GN_INTERVIEW                                                                                                                           |
| 83  | zmeta4object              | "SSM_GN_INTERVIEW"                                                             | SSM_GN_INTERVIEW                                                                                                                           |
| 84  | znodo                     | "M4T_GN_INTERVIEW"                                                             | M4T_GN_INTERVIEW                                                                                                                           |
| 88  | zoutputdef                | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 89  | zmove                     | znodo + ":" + znodo + "[FIRST]"                                                | M4T_GN_INTERVIEW{":"}M4T_GN_INTERVIEW{"[FIRST]"}                                                                                           |
| 90  | zcomun                    | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 93  | zmetodocarga              | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_GN_INTERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                           |
| 97  | zSCOINTERVIEWNAME         | zcomun + "SCO_INTERVIEW_NAME"                                                  | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}                                  |
| 98  | zSCODTREQUEST             | zcomun + "SCO_DT_REQUEST"                                                      | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}                                      |
| 99  | zSCOGBNAME                | zcomun + "SCO_GB_NAME"                                                         | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                         |
| 101 | zSCOIDHR                  | zcomun + "SCO_ID_HR"                                                           | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}                                           |
| 102 | zSCOORHRPERIOD            | zcomun + "SCO_OR_HR_PERIOD"                                                    | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}                                    |
| 103 | zSCOIDINTERVIEWTYPE       | zcomun + "SCO_ID_INTERVIEW_TYPE"                                               | M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INTERVIEW_TYPE"}                               |
| 105 | bDateOk                   | "0"                                                                            | 0                                                                                                                                          |
| 130 | zcount                    | 0                                                                              | 0                                                                                                                                          |
| 131 | zcounti                   | 0                                                                              | 0                                                                                                                                          |
| 137 | zcountv                   | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 138 | zto                       | new Integer(new Integer(zcountv).intValue()-1).toString()                      | new Integer(new Integer(zcountv).intValue()-1).toString()                                                                                  |
| 196 | zregistroinicials         | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 197 | zregistrofinals           | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 198 | zposicions                | "0"                                                                            | 0                                                                                                                                          |
| 199 | zcontrol                  | 0                                                                              | 0                                                                                                                                          |
| 200 | zposicion                 | 0                                                                              | 0                                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 108 | m4:startpage | m4task=SSM_GN_INTERVIEW                                                                                                                                        |
| 109 | m4:beginjob  |                                                                                                                                                                |
| 110 | m4:datadef   | m4o=SSM_GN_INTERVIEW; m4name=SSM_GN_INTERVIEW                                                                                                                  |
| 125 | m4:exec      | m4method=CARGA:{}SSM_GN_INTERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                                      |
| 125 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                     |
| 126 | m4:outputdef | m4alias=M4T_GN_INTERVIEW                                                                                                                                       |
| 126 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 127 | m4:endjob    |                                                                                                                                                                |
| 128 | m4:move      |                                                                                                                                                                |
| 128 | m4:param     | name=SSM_GN_INTERVIEW; value=M4T_GN_INTERVIEW{":"}M4T_GN_INTERVIEW{"[FIRST]"}                                                                                  |
| 185 | m4:label     | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                |
| 188 | m4:label     | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                    |
| 191 | m4:label     | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                       |
| 211 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 220 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}; htmlsafe=true; m4varname=sIdHR                        |
| 222 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}; htmlsafe=true; m4varname=sOrHrPeriod           |
| 224 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true; m4varname=sDtRequest              |
| 226 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INTERVIEW_TYPE"}; htmlsafe=true; m4varname=sIdInterviewType |
| 228 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                |
| 231 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                    |
| 234 | m4:item      | m4name=M4T_GN_INTERVIEW{":"}SSM_GN_INTERVIEW{"!"}M4T_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                       |

| L   | Operación        | Argumentos literales                                                               |
| --- | ---------------- | ---------------------------------------------------------------------------------- |
| 113 | setItem          | zsubsesion,"SSM_PRINCIPAL","","NIVEL","0"                                          |
| 116 | setItem          | zsubsesion,"SSM_GN_INTERVIEW","","PRP_ID_HR",zSCOIDHRCancel                        |
| 117 | setItem          | zsubsesion,"SSM_GN_INTERVIEW","","PRP_OR_HR_PERIOD",zSCOORHPERIODCancel            |
| 118 | setItem          | zsubsesion,"SSM_GN_INTERVIEW","","PRP_ID_INTERVIEW_TYPE",zSCOIDINTERVIEWTYPECancel |
| 119 | setItem          | zsubsesion,"SSM_GN_INTERVIEW","","PRP_DT_REQUEST_AUX",zSCODTREQUESTCancel          |
| 120 | setItem          | zsubsesion,"SSM_GN_INTERVIEW","","PLCO_PRP_DATE_OK",bDateOk                        |
| 134 | getCount         | znodo,zsubsesion,znodo                                                             |
| 135 | getCountInClient | znodo,zsubsesion,znodo                                                             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos                    |
| --- | ------------- | ----------------------------- |
| 14  | interview_det | IdHR,IdHRPer,DtRequest,IdTpIV |
| 22  | interview_del | IdHR,IdHRPer,DtRequest,IdTpIV |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 38  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 39  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 42  | if ((zdel==null)&#124;&#124;(zdel.equals(""))){zdel="";}                                                                                 |
| 52  | if (zdel.equals("Y"))                                                                                                                    |
| 114 | if (ztipocarga.equals("DEL"))                                                                                                            |
| 170 | if (zcounti &gt; 0) {                                                                                                                    |
| 216 | if (zcontrol==0){zpos="2";}                                                                                                              |
| 243 | &lt;%}else{%&gt;                                                                                                                         |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 88  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 89  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                     |
| 90  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 93  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 97  | expresión de cálculo/transformación: String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";                                           |
| 98  | expresión de cálculo/transformación: String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";                                                   |
| 99  | expresión de cálculo/transformación: String zSCOGBNAME = zcomun + "SCO_GB_NAME";                                                         |
| 101 | expresión de cálculo/transformación: String zSCOIDHR = zcomun + "SCO_ID_HR";                                                             |
| 102 | expresión de cálculo/transformación: String zSCOORHRPERIOD = zcomun + "SCO_OR_HR_PERIOD";                                                |
| 103 | expresión de cálculo/transformación: String zSCOIDINTERVIEWTYPE = zcomun + "SCO_ID_INTERVIEW_TYPE";                                      |
| 197 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 11  | /mss_g3/smco_iv_trans.jsp                             |
| 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 70  | ../../sse_generico/espanol/generico_links.jsp         |
| 242 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_mss.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 149 | /iconos/noname_objetivos_ess_103_100.gif                        |
| 157 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp?estado=31 |
| 163 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31 |
| 173 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31     |
| 203 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31     |
| 228 | javascript:interview_det(                                       |
| 237 | javascript:interview_del(                                       |
| 237 | /iconos/icono_borrar_16_16.gif                                  |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 11  | /mss_g3/smco_iv_trans.jsp                                       |
| 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 70  | ../../sse_generico/espanol/generico_links.jsp                   |
| 242 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 11  | /mss_g3/smco_iv_trans.jsp                                       | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 70  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 242 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 157 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 163 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 173 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31     | ausente    | P06                                                                                                             |
| BASE   | 203 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31     | ausente    | P06                                                                                                             |
| BASE   | 228 | javascript:interview_det(                                       | dinámica   | P06                                                                                                             |
| BASE   | 237 | javascript:interview_del(                                       | dinámica   | P06                                                                                                             |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 11  | /mss_g3/smco_iv_trans.jsp                                       | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 70  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 242 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p30.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
