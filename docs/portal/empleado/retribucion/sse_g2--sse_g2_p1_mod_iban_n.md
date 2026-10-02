# Modificar cuenta bancaria principal

Identificador: `sse_g2/sse_g2_p1_mod_iban_n.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp) | `9ca506336c47248a627609944e6762beefe54ce186938504aeb58cac77a49c85` |    539 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp) | `9ca506336c47248a627609944e6762beefe54ce186938504aeb58cac77a49c85` |    539 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_iban_n.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Modificar cuenta bancaria principal                                                                                                                                             |
| 137 | Modificar cuenta bancaria principal                                                                                                                                             |
| 144 | Modifica tus datos bancarios. Ten en cuenta que la fecha en que el cambio sera efectivo se calculará en función de los procesos de nómina calculados. Cuenta bancaria principal |
| 311 | Datos bancarios                                                                                                                                                                 |
| 334 | * Inicio                                                                                                                                                                        |
| 336 | "/&gt;                                                                                                                                                                          |
| 369 | Número cuenta                                                                                                                                                                   |
| 385 | * Código bancario                                                                                                                                                               |
| 387 | * Código País                                                                                                                                                                   |
| 388 | "&gt; ( ) " value=" "&gt;                                                                                                                                                       |
| 412 | Clave IBAN                                                                                                                                                                      |
| 452 | Inicio                                                                                                                                                                          |
| 453 | Número de cuenta                                                                                                                                                                |
| 454 | Moneda                                                                                                                                                                          |
| 455 | Forma de pago                                                                                                                                                                   |
| 467 | / / / / /                                                                                                                                                                       |
| 489 | ');"&gt;                                                                                                                                                                        |
| 500 | / / / / /                                                                                                                                                                       |
| 520 | ');"&gt;                                                                                                                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 142 | img     | src=/iconos/noname_banco_79_100.gif; width=79; height=100; alt=Modificar cuenta bancaria principal                                                                                                              |
| 145 | a       | class=fuentedescripcion                                                                                                                                                                                         |
| 147 | a       | class=enlacefuncional; title=Cuenta bancaria principal; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21                                                                       |
| 314 | a       | href=sse_g2_p1.jsp                                                                                                                                                                                              |
| 315 | img     | alt=Cuenta bancaria principal; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                       |
| 319 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                 |
| 320 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 321 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                           |
| 322 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                   |
| 323 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 324 | input   | class=fuenteformulario; type=hidden; id=SSE_OR_ACCOUNT; name=SSE_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 325 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 326 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA; value=&lt;%=zpaymdata%&gt;                                                                                                 |
| 327 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zidpaym%&gt;                                                                                                       |
| 328 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_PAYM; id=SCO_ID_PAYM; value=&lt;%=zidpaym%&gt;                                                                                                                 |
| 330 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 340 | input   | class=fuenteformulario; type=hidden; name=SCO_DT_START; id=SCO_DT_START; value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 359 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_CURRENCY; id=SCO_ID_CURRENCY; value=&lt;%=zidcurr%&gt;                                                                                                         |
| 373 | input   | class=fuenteformulario; type=text; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=&lt;%=zidbanco%&gt;; tabindex=4                                                                                        |
| 376 | input   | class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=20; maxlength=20; value=&lt;%=zidaccount%&gt;; tabindex=6; title=Escribe el código identificativo de la cuenta bancaria |
| 377 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 390 | select  | onchange=javascript:tratarCampoClaveIBAN(this);; id=SCO_IBAN_CODE; class=fuenteformulario; name=SCO_IBAN_CODE; title=Selecciona el pais al que pertence la cuenta bancaria                                      |
| 391 | option  | value=                                                                                                                                                                                                          |
| 393 | option  | codigoiso=m.getItem(znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO");; m=new                                                                                                                                       |
| 408 | input   | type=hidden; id=soportaIBAN_&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                       |
| 414 | input   | class=fuenteformulario; name=SCO_IBAN_KEY; type=text; id=SCO_IBAN_KEY; size=2; maxlength=2; value=&lt;%=zibankey%&gt;; tabindex=6; title=Escribe el digito de control del IBAN                                  |
| 421 | a       | style=cursor:hand; href=javascript:comprobar_previo();; title=Enviar                                                                                                                                            |
| 422 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                             |
| 490 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 491 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |
| 521 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 522 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 122 | estado          | getParameter(request,"estado")   |
| 123 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 122 | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 123 | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 153 | zsubsesion        | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 154 | zmeta4object      | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 155 | znodo             | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 156 | znodo2            | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                           |
| 157 | znodo3            | "M4T_PAYMENT_DATA"                                                             | M4T_PAYMENT_DATA                                                                                                                           |
| 158 | znodo4            | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                            |
| 159 | znodo5            | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                           |
| 160 | znodo7            | "M4T_COUNTRY_LIST"                                                             | M4T_COUNTRY_LIST                                                                                                                           |
| 161 | ztipocargaPre     | "M4T"                                                                          | M4T                                                                                                                                        |
| 162 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                        |
| 163 | zventanas         | "10"                                                                           | 10                                                                                                                                         |
| 164 | zvuelta           | 5                                                                              | 5                                                                                                                                          |
| 165 | zdireccion        | "sse_g2/sse_g2_p1_mod_iban.jsp"                                                | sse_g2/sse_g2_p1_mod_iban.jsp                                                                                                              |
| 166 | zestado           | "21"                                                                           | 21                                                                                                                                         |
| 167 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 169 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 170 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 171 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 172 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 174 | zlectura          | zsubsesion + "!" + znodo                                                       | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA                                                                                                      |
| 175 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 177 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 178 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                           |
| 180 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 181 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                           |
| 182 | zraiz3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                 | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}                                                                            |
| 184 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 185 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                             |
| 187 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 188 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                           |
| 189 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 190 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                           |
| 192 | zoutputdef7       | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                               |
| 193 | zmove7            | znodo7 + ":" + znodo7 + "[FIRST]"                                              | M4T_COUNTRY_LIST{":"}M4T_COUNTRY_LIST{"[FIRST]"}                                                                                           |
| 194 | zcomun7           | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY_LIST{":"}SSE_PAYMENT_DATA{"!"}M4T_COUNTRY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 196 | zBANCOPEND        | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                  |
| 197 | zCUENTAPEND       | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                  |
| 198 | zDCPEND           | zcomun + "SSP_DC"                                                              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                              |
| 199 | zSTARTPEND        | zcomun + "SCO_DT_START"                                                        | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                        |
| 200 | zPAYMTYPE         | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                    |
| 201 | zNCURRPEND        | zcomun + "NM_CURRENCY"                                                         | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 202 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 203 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 204 | zID_CURR          | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                         |
| 205 | zN_CURR           | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 206 | zIBANCODEPEND     | zcomun + "SCO_IBAN_CODE"                                                       | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                       |
| 208 | zSSE_DT_START     | zraiz3 + "SSE_DT_START"                                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSE_DT_START"}                                                            |
| 210 | zFEC_EFECTO       | zraiz3 + "SSP_FEC_EFECTO"                                                      | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}                                                          |
| 234 | zcount            | 0                                                                              | 0                                                                                                                                          |
| 235 | zcounti           | 0                                                                              | 0                                                                                                                                          |
| 236 | zcount3           | 0                                                                              | 0                                                                                                                                          |
| 237 | zcounti3          | 0                                                                              | 0                                                                                                                                          |
| 238 | zcount5           | 0                                                                              | 0                                                                                                                                          |
| 239 | zcounti5          | 0                                                                              | 0                                                                                                                                          |
| 250 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 251 | zcountv3          | String.valueOf(zcounti3)                                                       | String.valueOf(zcounti3)                                                                                                                   |
| 252 | zcountv5          | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                   |
| 255 | zidbanco          | ""                                                                             |                                                                                                                                            |
| 256 | zidaccount        | ""                                                                             |                                                                                                                                            |
| 257 | zoraccount        | ""                                                                             |                                                                                                                                            |
| 258 | zibancode         | ""                                                                             |                                                                                                                                            |
| 260 | zidcurrency       | ""                                                                             |                                                                                                                                            |
| 261 | zdatestart        | ""                                                                             |                                                                                                                                            |
| 262 | znmcurrency       | ""                                                                             |                                                                                                                                            |
| 263 | zidbanco1         | ""                                                                             |                                                                                                                                            |
| 264 | zidbanco2         | ""                                                                             |                                                                                                                                            |
| 265 | znmpaymtype       | ""                                                                             |                                                                                                                                            |
| 266 | zidcurr           | ""                                                                             |                                                                                                                                            |
| 267 | zidpaym           | ""                                                                             |                                                                                                                                            |
| 268 | zpaymdata         | ""                                                                             |                                                                                                                                            |
| 269 | zfecefecto        | ""                                                                             |                                                                                                                                            |
| 394 | codigoISO         | ""                                                                             |                                                                                                                                            |
| 437 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 438 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 439 | zposicions        | "0"                                                                            | 0                                                                                                                                          |
| 440 | zcontrol          | 0                                                                              | 0                                                                                                                                          |
| 441 | zposicion         | 0                                                                              | 0                                                                                                                                          |
| 469 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 470 | zidstandardpend   | ""                                                                             |                                                                                                                                            |
| 502 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 503 | zidstandardpend   | ""                                                                             |                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 213 | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                                                        |
| 215 | m4:beginjob  |                                                                                                                                                                |
| 216 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 217 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 217 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                     |
| 218 | m4:endjob    |                                                                                                                                                                |
| 220 | m4:beginjob  |                                                                                                                                                                |
| 221 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 222 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 222 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 223 | m4:outputdef | m4alias=SSE_PAYMENT_DATA                                                                                                                                       |
| 223 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 224 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                       |
| 224 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 225 | m4:outputdef | m4alias=M4T_PAYMENT_DATA                                                                                                                                       |
| 225 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 226 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                        |
| 226 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 227 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                       |
| 227 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 228 | m4:outputdef | m4alias=M4T_COUNTRY_LIST                                                                                                                                       |
| 228 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                               |
| 229 | m4:endjob    |                                                                                                                                                                |
| 230 | m4:move      |                                                                                                                                                                |
| 230 | m4:param     | name=SSE_PAYMENT_DATA; value=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 231 | m4:move      |                                                                                                                                                                |
| 231 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                  |
| 232 | m4:move      |                                                                                                                                                                |
| 232 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                  |
| 339 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}; htmlsafe=true                                                        |
| 392 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                     |
| 402 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                 |
| 402 | m4:item      | item=STD_N_COUNTRY; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                  |
| 402 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                 |
| 407 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                     |
| 408 | m4:item      | item=SSP_SOPORTA_IBAN; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                               |
| 457 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 464 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 465 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 478 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 478 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 478 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 478 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 480 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                |
| 480 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; htmlsafe=true                                            |
| 480 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 485 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 487 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 497 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 498 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 511 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 511 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 511 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 511 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 513 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                |
| 513 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; htmlsafe=true                                            |
| 513 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 516 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 518 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 536 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 242 | getCount         | znodo,zsubsesion,znodo                           |
| 243 | getCountInClient | znodo,zsubsesion,znodo                           |
| 244 | getCount         | znodo3,zsubsesion,znodo3                         |
| 245 | getCountInClient | znodo3,zsubsesion,znodo3                         |
| 246 | getCount         | znodo5,zsubsesion,znodo5                         |
| 247 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 275 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK_BRANCH" |
| 276 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ACCOUNT_NUMBER" |
| 277 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_ACCOUNT"     |
| 278 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_IBAN_CODE"      |
| 279 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_IBAN_KEY"       |
| 280 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_DT_START"       |
| 281 | getItem          | znodo3,zsubsesion,znodo3,"","NM_CURRENCY"        |
| 282 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_NM_PAYM_TYPE"   |
| 283 | getItem          | znodo3,zsubsesion,znodo3,"","ID_CURRENCY_DATA"   |
| 284 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_PAYM_TYPE"   |
| 285 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_PAYMENTDATA" |
| 286 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 397 | getItem          | znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO"     |
| 473 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 474 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 506 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 507 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                     | Argumentos   |
| --- | --------------------------- | ------------ |
| 14  | comprobar_previo            |              |
| 73  | pendientes                  | ord          |
| 80  | paisSeleccionadoSoportaIBAN |              |
| 99  | tratarCampoClaveIBAN        | listaCountry |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | v1 = new m4objvalidacion('_num',4,4,'','Campo oligatorio númerico de 4 caracteres',false);                                               |
| 20  | v2 = new m4objvalidacion('_num',2,2,'','Campo oligatorio númerico de 2 caracteres',false);                                               |
| 21  | v3 = new m4objvalidacion('_num',10,10,'','Campo oligatorio númerico de 2 caracteres',false);                                             |
| 33  | if ((4==val_paymtype) &#124;&#124; (5==val_paymtype)){ // tranferencia bancaria                                                          |
| 35  | if ((null==val_pais) &#124;&#124; (''== val_pais)){                                                                                      |
| 39  | if (paisSeleccionadoSoportaIBAN()) {                                                                                                     |
| 40  | if ((null==val_ibankey) &#124;&#124; (''== val_ibankey)){                                                                                |
| 45  | if ((null==val_account) &#124;&#124; (''== val_account)){                                                                                |
| 49  | if ((null==val_bankbranch) &#124;&#124; (''== val_bankbranch)){                                                                          |
| 60  | else {// cheque, banco                                                                                                                   |
| 67  | if (1==falta_valor)alert(mensaje);                                                                                                       |
| 68  | else{                                                                                                                                    |
| 69  | if (1== error_dc)alert(mensaje1);                                                                                                        |
| 71  | if (1!=falta_valor &amp;&amp; 1!=error_dc) m4submit("NombreFormulario");                                                                 |
| 85  | if (codigoISOPaisSeleccionado == null &#124;&#124; codigoISOPaisSeleccionado == "") {                                                    |
| 90  | if (soportaIBAN == "1") {                                                                                                                |
| 92  | } else {                                                                                                                                 |
| 107 | if (soportaIBAN) {                                                                                                                       |
| 111 | } else {                                                                                                                                 |
| 124 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 127 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 291 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 294 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 298 | if ((zidbanco == null)&#124;&#124;(""==zidbanco))                                                                                        |
| 302 | else {                                                                                                                                   |
| 308 | &lt;% if (zcounti3 &gt; 0) {%&gt;                                                                                                        |
| 399 | if (zibancode.equals(codigoISO)) {%&gt;                                                                                                  |
| 429 | &lt;%} else { %&gt;                                                                                                                      |
| 436 | if (zcounti &gt; 0){                                                                                                                     |
| 462 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 476 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 477 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 479 | &lt;%} else {%&gt;                                                                                                                       |
| 495 | &lt;% } else{%&gt;                                                                                                                       |
| 509 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 510 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 512 | &lt;%} else {%&gt;                                                                                                                       |
| 15  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pueden quedar vacios:" + "\n";                              |
| 89  | expresión de cálculo/transformación: var soportaIBAN = document.getElementById("soportaIBAN_" + codigoISOPaisSeleccionado).value;        |
| 168 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 170 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 171 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 172 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 174 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 175 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 177 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 178 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 180 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 182 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                     |
| 184 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 185 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 187 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 188 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 189 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 190 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 192 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 193 | expresión de cálculo/transformación: String zmove7 =znodo7 + ":" + znodo7 + "[FIRST]";                                                   |
| 194 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 196 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 197 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 198 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 199 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 200 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 201 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 202 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 203 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 204 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 205 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 206 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 207 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 208 | expresión de cálculo/transformación: String zSSE_DT_START = zraiz3 + "SSE_DT_START";                                                     |
| 210 | expresión de cálculo/transformación: String zFEC_EFECTO = zraiz3 + "SSP_FEC_EFECTO";                                                     |
| 438 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 133 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 134 | ../../sse_generico/espanol/generico_links.jsp      |
| 530 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 533 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 10  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 142 | /iconos/noname_banco_79_100.gif                                 |
| 147 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21       |
| 314 | sse_g2_p1.jsp                                                   |
| 315 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 319 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 421 | javascript:comprobar_previo();                                  |
| 422 | /iconos/icono_enviar_ess_36_36.gif                              |
| 490 | javascript:pendientes(                                          |
| 491 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 521 | javascript:pendientes(                                          |
| 522 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 76  | sse_generico/generico_actualizar.jsp                            |
| 133 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 134 | ../../sse_generico/espanol/generico_links.jsp                   |
| 165 | sse_g2/sse_g2_p1_mod_iban.jsp                                   |
| 530 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 533 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 133 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 134 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 530 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 533 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 10  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 147 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 314 | sse_g2_p1.jsp                                                   | física     | [sse_g2/sse_g2_p1.jsp](sse_g2--sse_g2_p1.md)                                                                                                                                                       |
| COLL   | 319 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 421 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 490 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 521 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 76  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 133 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 134 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 165 | sse_g2/sse_g2_p1_mod_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 530 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 533 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 133 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 134 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 530 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 533 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 10  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 147 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 314 | sse_g2_p1.jsp                                                   | física     | [sse_g2/sse_g2_p1.jsp](sse_g2--sse_g2_p1.md)                                                                                                                                                       |
| IBER   | 319 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 421 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 490 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 521 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 76  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 133 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 134 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 165 | sse_g2/sse_g2_p1_mod_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 530 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 533 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p1_mod_iban_n.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
