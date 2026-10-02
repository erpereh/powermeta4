# Modificar cuenta bancaria principal

Identificador: `sse_g2/sse_g2_p1_mod.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g2/espanol/sse_g2_p1_mod.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p1_mod.jsp) | `4d5cfd0e6131593b79b1c4c64805619b576a77bd84a39596cf8062269ada0328` |    519 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g2/espanol/sse_g2_p1_mod.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p1_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| 5   | Modificar cuenta bancaria principal                                                                                 |
| 96  | Modificar cuenta bancaria principal                                                                                 |
| 103 | Modifica tus datos bancarios. El cambio será efectivo a partir del día 1 del próximo mes. Cuenta bancaria principal |
| 290 | Datos bancarios                                                                                                     |
| 313 | *Inicio                                                                                                             |
| 315 | "/&gt;                                                                                                              |
| 349 | Oficina                                                                                                             |
| 350 | DC                                                                                                                  |
| 351 | Número cuenta                                                                                                       |
| 379 | *Código bancario                                                                                                    |
| 417 | Inicio                                                                                                              |
| 418 | Número de cuenta                                                                                                    |
| 419 | Moneda                                                                                                              |
| 420 | Forma de pago                                                                                                       |
| 432 | / / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                           |
| 462 | ');"&gt;                                                                                                            |
| 473 | / / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                           |
| 500 | ');"&gt;                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 101 | img     | src=/iconos/noname_banco_79_100.gif; width=79; height=100; alt=Modificar cuenta bancaria principal                                                                                                              |
| 104 | a       | class=fuentedescripcion                                                                                                                                                                                         |
| 106 | a       | class=enlacefuncional; title=Cuenta bancaria principal; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21                                                                       |
| 293 | a       | href=sse_g2_p1.jsp                                                                                                                                                                                              |
| 294 | img     | alt=Cuenta bancaria principal; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                       |
| 298 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                 |
| 299 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 300 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                           |
| 301 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                   |
| 302 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 303 | input   | class=fuenteformulario; type=hidden; id=SSE_OR_ACCOUNT; name=SSE_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 304 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 305 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA; value=&lt;%=zpaymdata%&gt;                                                                                                 |
| 306 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zidpaym%&gt;                                                                                                       |
| 307 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_PAYM; id=SCO_ID_PAYM; value=&lt;%=zidpaym%&gt;                                                                                                                 |
| 309 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 310 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                                         |
| 311 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                             |
| 319 | input   | class=fuenteformulario; type=hidden; name=SCO_DT_START; id=SCO_DT_START; value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 338 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_CURRENCY; id=SCO_ID_CURRENCY; value=&lt;%=zidcurr%&gt;                                                                                                         |
| 355 | input   | class=fuenteformulario; id=SCO_ID_BANK1; type=text; name=SCO_ID_BANK1; size=4; maxlength=4; value=&lt;%=zidbanco1%&gt;; tabindex=2; title=Escribe el código de la entidad                                       |
| 358 | input   | class=fuenteformulario; id=SCO_ID_BANK2; type=text; name=SCO_ID_BANK2; size=4; maxlength=4; value=&lt;%=zidbanco2%&gt;; tabindex=3; title=Escribe el código identificativo de la sucursal                       |
| 359 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=&lt;%=(zidbanco1+zidbanco2)%&gt;; tabindex=4                                                                         |
| 367 | input   | class=fuenteformulario; id=SSP_DC; name=SSP_DC; type=text; size=2; maxlength=2; value=&lt;%=ziddc%&gt;; tabindex=5; title=Escribe los dígitos de control                                                        |
| 370 | input   | class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=11; maxlength=10; value=&lt;%=zidaccount%&gt;; tabindex=6; title=Escribe el código identificativo de la cuenta bancaria |
| 371 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 386 | a       | style=cursor:hand; href=javascript:comprobar_previo();; title=Enviar                                                                                                                                            |
| 387 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                             |
| 463 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 464 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |
| 501 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 502 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 81  | estado          | getParameter(request,"estado")   |
| 82  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 81  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 82  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 112 | zsubsesion        | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 113 | zmeta4object      | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 114 | znodo             | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 115 | znodo2            | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                           |
| 116 | znodo3            | "M4T_PAYMENT_DATA"                                                             | M4T_PAYMENT_DATA                                                                                                                           |
| 117 | znodo4            | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                            |
| 118 | znodo5            | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                           |
| 119 | ztipocargaPre     | "M4T"                                                                          | M4T                                                                                                                                        |
| 120 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                        |
| 121 | zventanas         | "10"                                                                           | 10                                                                                                                                         |
| 122 | zvuelta           | 5                                                                              | 5                                                                                                                                          |
| 123 | zdireccion        | "sse_g2/sse_g2_p1_mod.jsp"                                                     | sse_g2/sse_g2_p1_mod.jsp                                                                                                                   |
| 124 | zestado           | "21"                                                                           | 21                                                                                                                                         |
| 125 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 127 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 128 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 129 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 130 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 132 | zlectura          | zsubsesion + "!" + znodo                                                       | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA                                                                                                      |
| 133 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 135 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 136 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                           |
| 138 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 139 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                           |
| 140 | zraiz3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                 | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}                                                                            |
| 142 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 143 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                             |
| 145 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 146 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                           |
| 147 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 148 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                           |
| 150 | zBANCOPEND        | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                  |
| 151 | zCUENTAPEND       | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                  |
| 152 | zDCPEND           | zcomun + "SSP_DC"                                                              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                              |
| 153 | zSTARTPEND        | zcomun + "SCO_DT_START"                                                        | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                        |
| 154 | zPAYMTYPE         | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                    |
| 155 | zNCURRPEND        | zcomun + "NM_CURRENCY"                                                         | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 156 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 157 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 158 | zID_CURR          | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                         |
| 159 | zN_CURR           | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 160 | zIBANCODEPEND     | zcomun + "SCO_IBAN_CODE"                                                       | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                       |
| 162 | zSSE_DT_START     | zraiz3 + "SSE_DT_START"                                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSE_DT_START"}                                                            |
| 164 | zFEC_EFECTO       | zraiz3 + "SSP_FEC_EFECTO"                                                      | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}                                                          |
| 187 | zcount            | 0                                                                              | 0                                                                                                                                          |
| 188 | zcounti           | 0                                                                              | 0                                                                                                                                          |
| 189 | zcount3           | 0                                                                              | 0                                                                                                                                          |
| 190 | zcounti3          | 0                                                                              | 0                                                                                                                                          |
| 191 | zcount5           | 0                                                                              | 0                                                                                                                                          |
| 192 | zcounti5          | 0                                                                              | 0                                                                                                                                          |
| 203 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 204 | zcountv3          | String.valueOf(zcounti3)                                                       | String.valueOf(zcounti3)                                                                                                                   |
| 205 | zcountv5          | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                   |
| 208 | zidbanco          | ""                                                                             |                                                                                                                                            |
| 209 | zidaccount        | ""                                                                             |                                                                                                                                            |
| 210 | zoraccount        | ""                                                                             |                                                                                                                                            |
| 211 | zidcurrency       | ""                                                                             |                                                                                                                                            |
| 212 | zdatestart        | ""                                                                             |                                                                                                                                            |
| 213 | znmcurrency       | ""                                                                             |                                                                                                                                            |
| 214 | zidbanco1         | ""                                                                             |                                                                                                                                            |
| 215 | zidbanco2         | ""                                                                             |                                                                                                                                            |
| 216 | ziddc             | ""                                                                             |                                                                                                                                            |
| 217 | znmpaymtype       | ""                                                                             |                                                                                                                                            |
| 218 | zidcurr           | ""                                                                             |                                                                                                                                            |
| 219 | zidpaym           | ""                                                                             |                                                                                                                                            |
| 220 | zpaymdata         | ""                                                                             |                                                                                                                                            |
| 221 | zfecefecto        | ""                                                                             |                                                                                                                                            |
| 223 | zidstandard       | ""                                                                             |                                                                                                                                            |
| 402 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 403 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 404 | zposicions        | "0"                                                                            | 0                                                                                                                                          |
| 405 | zcontrol          | 0                                                                              | 0                                                                                                                                          |
| 406 | zposicion         | 0                                                                              | 0                                                                                                                                          |
| 434 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 435 | zidstandardpend   | ""                                                                             |                                                                                                                                            |
| 436 | zDC_0             | ""                                                                             |                                                                                                                                            |
| 475 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 476 | zidstandardpend   | ""                                                                             |                                                                                                                                            |
| 477 | zDC_0             | ""                                                                             |                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 167 | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                                                        |
| 169 | m4:beginjob  |                                                                                                                                                                |
| 170 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 171 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 171 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                     |
| 172 | m4:endjob    |                                                                                                                                                                |
| 174 | m4:beginjob  |                                                                                                                                                                |
| 175 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 176 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 176 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 177 | m4:outputdef | m4alias=SSE_PAYMENT_DATA                                                                                                                                       |
| 177 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 178 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                       |
| 178 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 179 | m4:outputdef | m4alias=M4T_PAYMENT_DATA                                                                                                                                       |
| 179 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 180 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                        |
| 180 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 181 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                       |
| 181 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 182 | m4:endjob    |                                                                                                                                                                |
| 183 | m4:move      |                                                                                                                                                                |
| 183 | m4:param     | name=SSE_PAYMENT_DATA; value=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 184 | m4:move      |                                                                                                                                                                |
| 184 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                  |
| 185 | m4:move      |                                                                                                                                                                |
| 185 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                  |
| 318 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}; htmlsafe=true                                                        |
| 422 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 429 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 430 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 450 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 450 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 450 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 450 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 453 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 458 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 460 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 470 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 471 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 490 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 490 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 490 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 490 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 493 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 496 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 498 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 516 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 195 | getCount         | znodo,zsubsesion,znodo                           |
| 196 | getCountInClient | znodo,zsubsesion,znodo                           |
| 197 | getCount         | znodo3,zsubsesion,znodo3                         |
| 198 | getCountInClient | znodo3,zsubsesion,znodo3                         |
| 199 | getCount         | znodo5,zsubsesion,znodo5                         |
| 200 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 230 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_STANDARD"    |
| 232 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK_BRANCH" |
| 233 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK1"       |
| 234 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK2"       |
| 235 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ACCOUNT_NUMBER" |
| 236 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_ACCOUNT"     |
| 237 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_DC"             |
| 238 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_DT_START"       |
| 239 | getItem          | znodo3,zsubsesion,znodo3,"","NM_CURRENCY"        |
| 240 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_NM_PAYM_TYPE"   |
| 241 | getItem          | znodo3,zsubsesion,znodo3,"","ID_CURRENCY_DATA"   |
| 242 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_PAYM_TYPE"   |
| 243 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_PAYMENTDATA" |
| 244 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 439 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 440 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 442 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 480 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 481 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 482 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 12  | comprobar_previo |            |
| 73  | pendientes       | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | v1 = new m4objvalidacion('_num',4,4,'','Campo oligatorio númerico de 4 caracteres',false);                                               |
| 18  | v2 = new m4objvalidacion('_num',2,2,'','Campo oligatorio númerico de 2 caracteres',false);                                               |
| 19  | v3 = new m4objvalidacion('_num',10,10,'','Campo oligatorio númerico de 2 caracteres',false);                                             |
| 32  | if ((4==val_paymtype) &#124;&#124; (5==val_paymtype)){ // tranferencia bancaria                                                          |
| 34  | if (v1.resultado == false){                                                                                                              |
| 39  | if (v1.resultado == false){                                                                                                              |
| 44  | if (v2.resultado == false){                                                                                                              |
| 49  | if (v3.resultado == false){                                                                                                              |
| 54  | if (valordc!=val_dc){                                                                                                                    |
| 60  | else {// cheque, banco                                                                                                                   |
| 67  | if (1==falta_valor)alert(mensaje);                                                                                                       |
| 68  | else{                                                                                                                                    |
| 69  | if (1== error_dc)alert(mensaje1);                                                                                                        |
| 71  | if (1!=falta_valor &amp;&amp; 1!=error_dc) m4submit("NombreFormulario");                                                                 |
| 83  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 86  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 252 | if (!zidstandard.equals("ES")) {                                                                                                         |
| 262 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 265 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 269 | if ((zidbanco == null)&#124;&#124;(""==zidbanco))                                                                                        |
| 273 | else {                                                                                                                                   |
| 277 | if ((ziddc==null)&#124;&#124;(""==ziddc))                                                                                                |
| 281 | else {                                                                                                                                   |
| 286 | &lt;% if (zcounti3 &gt; 0) {%&gt;                                                                                                        |
| 363 | if (ziddc.length() == 1) {                                                                                                               |
| 394 | &lt;%} else { %&gt;                                                                                                                      |
| 401 | if (zcounti &gt; 0){                                                                                                                     |
| 427 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 444 | if (zDC_0.length() == 1) {                                                                                                               |
| 448 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 449 | &lt;% if (zidstandardpend.equals("")== true){%&gt;                                                                                       |
| 451 | &lt;% } else { %&gt;                                                                                                                     |
| 468 | &lt;% } else{%&gt;                                                                                                                       |
| 484 | if (zDC_0.length() == 1) {                                                                                                               |
| 488 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 489 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 491 | &lt;%} else { %&gt;                                                                                                                      |
| 13  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pueden quedar vacios:" + "\n";                              |
| 25  | expresión de cálculo/transformación: val_branch = val_bank1 + val_bank2;                                                                 |
| 126 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 128 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 129 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 130 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 132 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 133 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 135 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 136 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 138 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 139 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 140 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                     |
| 142 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 143 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 145 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 146 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 147 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 148 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 150 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 151 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 152 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 153 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 154 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 155 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 156 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 157 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 158 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 159 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 160 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 161 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 162 | expresión de cálculo/transformación: String zSSE_DT_START = zraiz3 + "SSE_DT_START";                                                     |
| 164 | expresión de cálculo/transformación: String zFEC_EFECTO = zraiz3 + "SSP_FEC_EFECTO";                                                     |
| 364 | expresión de cálculo/transformación: ziddc = "0" + ziddc;                                                                                |
| 403 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 445 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 485 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 92  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 93  | ../../sse_generico/espanol/generico_links.jsp      |
| 510 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 513 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 6   | /css/estilo_sse.css                                             |
| 7   | /libreria/funciones_sse.js                                      |
| 8   | /libreria/digitocontrol.js                                      |
| 10  | /libreria/clase_val_entradas.js                                 |
| 101 | /iconos/noname_banco_79_100.gif                                 |
| 106 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21       |
| 293 | sse_g2_p1.jsp                                                   |
| 294 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 298 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 386 | javascript:comprobar_previo();                                  |
| 387 | /iconos/icono_enviar_ess_36_36.gif                              |
| 463 | javascript:pendientes(                                          |
| 464 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 501 | javascript:pendientes(                                          |
| 502 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 76  | sse_generico/generico_actualizar.jsp                            |
| 92  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 93  | ../../sse_generico/espanol/generico_links.jsp                   |
| 123 | sse_g2/sse_g2_p1_mod.jsp                                        |
| 510 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 513 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 92  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 93  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 510 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 513 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 7   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 8   | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                    |
| BASE   | 10  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 106 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21       | ausente    | P06                                                                                                       |
| BASE   | 293 | sse_g2_p1.jsp                                                   | física     | [sse_g2/sse_g2_p1.jsp](sse_g2--sse_g2_p1.md)                                                              |
| BASE   | 298 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 386 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                       |
| BASE   | 463 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 501 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 76  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                       |
| BASE   | 92  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 93  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 123 | sse_g2/sse_g2_p1_mod.jsp                                        | ausente    | P06                                                                                                       |
| BASE   | 510 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 513 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p1_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
