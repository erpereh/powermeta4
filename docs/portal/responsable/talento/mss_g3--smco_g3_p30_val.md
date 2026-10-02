# Valida las entrevistas

Identificador: `mss_g3/smco_g3_p30_val.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                        | Texto                                                                                                                            | Ámbito | Diccionario                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.LblCancel             | Cancelar                                                                                                                         | BASE   | [translations/smco_iv_es.properties:L27](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblCancel             | Cancelar entrevista                                                                                                              | BASE   | [translations/smco_iv_es.properties:L67](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblCancelIv           | Cancela la petición                                                                                                              | BASE   | [translations/smco_iv_es.properties:L26](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblChooseReasonCancel | Escribe el motivo de cancelación                                                                                                 | BASE   | [translations/smco_iv_es.properties:L29](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblNoValidate         | Actualmente no tienes ningún dato que validar en este nivel.                                                                     | BASE   | [translations/smco_iv_es.properties:L65](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblOK                 | Aceptar                                                                                                                          | BASE   | [translations/smco_iv_es.properties:L25](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblOKIv               | Acepta la petición                                                                                                               | BASE   | [translations/smco_iv_es.properties:L24](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblReasonCancel       | Motivo de cancelación                                                                                                            | BASE   | [translations/smco_iv_es.properties:L28](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblSolcita            | solicita                                                                                                                         | BASE   | [translations/smco_iv_es.properties:L23](../../referencias/literales/smco_iv_es.md) |
| iv_mss.ValIvTitle            | Valida las entrevistas de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. | BASE   | [translations/smco_iv_es.properties:L7](../../referencias/literales/smco_iv_es.md)  |
| iv_mss.Validaiv              | Valida entrevistas                                                                                                               | BASE   | [translations/smco_iv_es.properties:L5](../../referencias/literales/smco_iv_es.md)  |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p30_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_val.jsp) | `b2c8b77947e4e54df726614e66eee0ad25a66a30fb8a7a72876876f1a105acd0` |    262 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p30_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                       |
| --- | ------------------------------------------------------------------------------ |
| 7   | Valida las entrevistas                                                         |
| 175 | Peticiones                                                                     |
| 211 | *REC= { *NOD=SSE_GN_INTERVIEW{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                          |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 158 | img     | alt=JSP_EXPR_tranivMSS.getProperty(; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                                                                                           |
| 167 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                        |
| 168 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                                    |
| 169 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                                   |
| 170 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                    |
| 212 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                               |
| 213 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                                   |
| 214 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 221 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                               |
| 224 | input   | title=JSP_EXPR_tranivMSS.getProperty(; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;) |
| 227 | input   | title=JSP_EXPR_tranivMSS.getProperty(; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 233 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                               |
| 236 | input   | size=48; title=JSP_EXPR_tranivMSS.getProperty(; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                    |
| 245 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                                          |
| 246 | input   | type=hidden; id=param; name=param; value=                                                                                                                                                          |
| 247 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 24  | znivel          | getParameter(request,"znivel") |

| L   | Variable                   | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | -------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 15  | estado                     | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                           |
| 16  | zfiltro                    | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                          |
| 17  | zinicios                   | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                         |
| 22  | znivel                     | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                           |
| 68  | zsubsesion                 | "SSE_GN_INTERVIEW"                                                             | SSE_GN_INTERVIEW                                                                                                                           |
| 69  | zmeta4object               | "SSE_GN_INTERVIEW"                                                             | SSE_GN_INTERVIEW                                                                                                                           |
| 70  | znodo                      | "SSE_GN_INTERVIEW"                                                             | SSE_GN_INTERVIEW                                                                                                                           |
| 71  | ztipocarga                 | "SSE"                                                                          | SSE                                                                                                                                        |
| 72  | zventanas                  | "4"                                                                            | 4                                                                                                                                          |
| 73  | zvuelta                    | 2                                                                              | 2                                                                                                                                          |
| 74  | zdireccion                 | "/mss_g3/mss_g3_p30_val.jsp"                                                   | /mss_g3/mss_g3_p30_val.jsp                                                                                                                 |
| 75  | zestado                    | "11"                                                                           | 11                                                                                                                                         |
| 76  | zregistroinicial           | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 78  | zventana                   | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 79  | zregistrofinal             | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 81  | zoutputdef                 | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 82  | zmove                      | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 83  | zraiz                      | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"."}                                                                            |
| 84  | zlectura                   | zsubsesion + "!" + znodo                                                       | SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW                                                                                                      |
| 85  | ziterator                  | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW                                                                                 |
| 86  | zcomun                     | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 88  | znodolista                 | znodo + "_VAL"                                                                 | SSE_GN_INTERVIEW{"_VAL"}                                                                                                                   |
| 89  | zoutputdeflista            | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"[*]"}                                                                                       |
| 90  | zmovelista                 | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"_VAL"}{"[FIRST]"}                                                                           |
| 91  | zraizlista                 | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"."}                                                            |
| 92  | ziteratorlista             | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}                                                                 |
| 93  | zcomunlista                | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                        |
| 95  | znodocom                   | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                           |
| 96  | zoutputdefcom              | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_GN_INTERVIEW{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 98  | znodoprincipal             | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                              |
| 99  | zmetodocarga               | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_GN_INTERVIEW{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                       |
| 101 | zNOMBREPERSON              | zraiz + "NOMBRE_PERSON"                                                        | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"."}{"NOMBRE_PERSON"}                                                           |
| 103 | zORDINAL                   | zcomun + "ORDINAL"                                                             | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 104 | zNACCION                   | zcomun + "ACCION_ACEPTADO"                                                     | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                     |
| 105 | zNOMBREEMPLEADO            | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                     |
| 106 | zN_ACCION                  | zcomun + "N_ACCION"                                                            | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 108 | zSCO_DT_REQUEST            | zcomun + "SCO_DT_REQUEST"                                                      | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}                                      |
| 109 | zSCO_INTERVIEW_NAME        | zcomun + "SCO_INTERVIEW_NAME"                                                  | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}                                  |
| 110 | zSCO_NM_INTERVIEW_TYPE     | zcomun + "SCO_NM_INTERVIEW_TYPE"                                               | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}                               |
| 111 | zSCO_NM_INTERVIEW_PRIORITY | zcomun + "SCO_NM_INTERVIEW_PRIORITY"                                           | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}                           |
| 112 | zSCO_INTERVIEW_REASON      | zcomun + "SCO_INTERVIEW_REASON"                                                | SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_REASON"}                                |
| 114 | zNOMBREEMPLEADOlista       | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                     |
| 115 | zSTDIDPERSON               | zcomunlista + "STD_ID_PERSON"                                                  | SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                       |
| 136 | zcounti                    | 0                                                                              | 0                                                                                                                                          |
| 137 | zcount                     | 0                                                                              | 0                                                                                                                                          |
| 143 | zcountv                    | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 145 | zcountlista                | 0                                                                              | 0                                                                                                                                          |
| 150 | zcountvlista               | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                |
| 178 | zregistroinicials          | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 179 | zregistrofinals            | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 180 | zposicions                 | "0"                                                                            | 0                                                                                                                                          |
| 181 | zcontrol                   | 0                                                                              | 0                                                                                                                                          |
| 182 | zposicion                  | 0                                                                              | 0                                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 118 | m4:startpage | m4task=SSE_GN_INTERVIEW                                                                                                                                        |
| 118 | m4:beginjob  |                                                                                                                                                                |
| 119 | m4:datadef   | m4o=SSE_GN_INTERVIEW; m4name=SSE_GN_INTERVIEW                                                                                                                  |
| 128 | m4:exec      | m4method=CARGA:{}SSE_GN_INTERVIEW{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                  |
| 128 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 129 | m4:outputdef | m4alias=SSE_GN_INTERVIEW{"_VAL"}                                                                                                                               |
| 129 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"_VAL"}{"[*]"}                                                                                       |
| 130 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                       |
| 130 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 131 | m4:outputdef | m4alias=SSE_GN_INTERVIEW                                                                                                                                       |
| 131 | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 132 | m4:endjob    |                                                                                                                                                                |
| 133 | m4:move      |                                                                                                                                                                |
| 133 | m4:param     | name=SSE_GN_INTERVIEW; value=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 134 | m4:move      |                                                                                                                                                                |
| 134 | m4:param     | name=SSE_GN_INTERVIEW; value=SSE_GN_INTERVIEW{"_VAL"}{":"}SSE_GN_INTERVIEW{"_VAL"}{"[FIRST]"}                                                                  |
| 184 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 195 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                   |
| 195 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 198 | m4:label     | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                |
| 199 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                |
| 200 | m4:label     | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                             |
| 201 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                             |
| 202 | m4:label     | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true                         |
| 203 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true                         |
| 207 | m4:label     | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_REASON"}; htmlsafe=true                              |
| 208 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"SCO_INTERVIEW_REASON"}; htmlsafe=true                              |
| 213 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 213 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 213 | m4:item      | m4name=SSE_GN_INTERVIEW{":"}SSE_GN_INTERVIEW{"!"}SSE_GN_INTERVIEW{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 258 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 123 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 124 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 140 | getCountInClient | znodo,zsubsesion,znodo                      |
| 141 | getCount         | znodo,zsubsesion,znodo                      |
| 148 | getCountInClient | znodolista,zsubsesion,znodolista            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 30  | filtrar  |            |
| 36  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 19  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 20  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 23  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 25  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 39  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 44  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 49  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 172 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 253 | }else{%&gt;                                                                                                                                                                         |
| 40  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 41  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 43  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 45  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 46  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 47  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 50  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 51  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 52  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 53  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 54  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 81  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 82  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 83  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 84  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 85  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                     |
| 86  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 88  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 89  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 90  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 91  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 92  | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 93  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 96  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 99  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 101 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 103 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 104 | expresión de cálculo/transformación: String zNACCION = zcomun + "ACCION_ACEPTADO";                                                                                                  |
| 105 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 106 | expresión de cálculo/transformación: String zN_ACCION = zcomun + "N_ACCION";                                                                                                        |
| 108 | expresión de cálculo/transformación: String zSCO_DT_REQUEST = zcomun + "SCO_DT_REQUEST";                                                                                            |
| 109 | expresión de cálculo/transformación: String zSCO_INTERVIEW_NAME = zcomun + "SCO_INTERVIEW_NAME";                                                                                    |
| 110 | expresión de cálculo/transformación: String zSCO_NM_INTERVIEW_TYPE = zcomun + "SCO_NM_INTERVIEW_TYPE";                                                                              |
| 111 | expresión de cálculo/transformación: String zSCO_NM_INTERVIEW_PRIORITY = zcomun + "SCO_NM_INTERVIEW_PRIORITY";                                                                      |
| 112 | expresión de cálculo/transformación: String zSCO_INTERVIEW_REASON = zcomun + "SCO_INTERVIEW_REASON";                                                                                |
| 114 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 115 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 179 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 188 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 12  | /mss_g3/smco_iv_trans.jsp                             |
| 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 66  | ../../sse_generico/espanol/generico_links.jsp         |
| 165 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 250 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 259 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 158 | /iconos/noname_objetivos_ess_103_100.gif                                        |
| 167 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31                 |
| 245 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 12  | /mss_g3/smco_iv_trans.jsp                                                       |
| 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 66  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 74  | /mss_g3/mss_g3_p30_val.jsp                                                      |
| 165 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 250 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 259 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/smco_iv_trans.jsp                                                       | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 66  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 165 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 250 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 259 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 167 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31                 | ausente    | P06                                                                                                             |
| BASE   | 245 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/smco_iv_trans.jsp                                                       | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 66  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 74  | /mss_g3/mss_g3_p30_val.jsp                                                      | ausente    | P06                                                                                                             |
| BASE   | 165 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 250 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 259 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p30_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
