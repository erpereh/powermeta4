# Modificar cuenta bancaria principal

Identificador: `sse_g2/sse_g2_p1_mod_n.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_n.jsp) | `54b88c688ea833f0fffd08164f93c62514c82d8e7c078b38d1b88908d8786fa7` |    518 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p1_mod_n.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p1_mod_n.jsp) | `54b88c688ea833f0fffd08164f93c62514c82d8e7c078b38d1b88908d8786fa7` |    518 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1_mod_n.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Modificar cuenta bancaria principal                                                                                                                                             |
| 98  | Modificar cuenta bancaria principal                                                                                                                                             |
| 105 | Modifica tus datos bancarios. Ten en cuenta que la fecha en que el cambio sera efectivo se calculará en función de los procesos de nómina calculados. Cuenta bancaria principal |
| 289 | Datos bancarios                                                                                                                                                                 |
| 312 | *Inicio                                                                                                                                                                         |
| 314 | "/&gt;                                                                                                                                                                          |
| 348 | Oficina                                                                                                                                                                         |
| 349 | DC                                                                                                                                                                              |
| 350 | Número cuenta                                                                                                                                                                   |
| 378 | *Código bancario                                                                                                                                                                |
| 416 | Inicio                                                                                                                                                                          |
| 417 | Número de cuenta                                                                                                                                                                |
| 418 | Moneda                                                                                                                                                                          |
| 419 | Forma de pago                                                                                                                                                                   |
| 431 | / / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                                                                                       |
| 461 | ');"&gt;                                                                                                                                                                        |
| 472 | / / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                                                                                       |
| 499 | ');"&gt;                                                                                                                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 103 | img     | src=/iconos/noname_banco_79_100.gif; width=79; height=100; alt=Modificar cuenta bancaria principal                                                                                                              |
| 106 | a       | class=fuentedescripcion                                                                                                                                                                                         |
| 108 | a       | class=enlacefuncional; title=Cuenta bancaria principal; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21                                                                       |
| 253 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21; method=post; name=NombreFormularioIBAN; id=NombreFormularioIBAN                                                                 |
| 292 | a       | href=sse_g2_p1.jsp                                                                                                                                                                                              |
| 293 | img     | alt=Cuenta bancaria principal; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                       |
| 297 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                 |
| 298 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 299 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                           |
| 300 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                   |
| 301 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PAYMENT_DATA                                                                                                                                                           |
| 302 | input   | class=fuenteformulario; type=hidden; id=SSE_OR_ACCOUNT; name=SSE_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 303 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                        |
| 304 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA; value=&lt;%=zpaymdata%&gt;                                                                                                 |
| 305 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zidpaym%&gt;                                                                                                       |
| 306 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_PAYM; id=SCO_ID_PAYM; value=&lt;%=zidpaym%&gt;                                                                                                                 |
| 308 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 309 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                                         |
| 310 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                             |
| 318 | input   | class=fuenteformulario; type=hidden; name=SCO_DT_START; id=SCO_DT_START; value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 337 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_CURRENCY; id=SCO_ID_CURRENCY; value=&lt;%=zidcurr%&gt;                                                                                                         |
| 354 | input   | class=fuenteformulario; id=SCO_ID_BANK1; type=text; name=SCO_ID_BANK1; size=4; maxlength=4; value=&lt;%=zidbanco1%&gt;; tabindex=2; title=Escribe el código de la entidad                                       |
| 357 | input   | class=fuenteformulario; id=SCO_ID_BANK2; type=text; name=SCO_ID_BANK2; size=4; maxlength=4; value=&lt;%=zidbanco2%&gt;; tabindex=3; title=Escribe el código identificativo de la sucursal                       |
| 358 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=&lt;%=(zidbanco1+zidbanco2)%&gt;; tabindex=4                                                                         |
| 366 | input   | class=fuenteformulario; id=SSP_DC; name=SSP_DC; type=text; size=2; maxlength=2; value=&lt;%=ziddc%&gt;; tabindex=5; title=Escribe los dígitos de control                                                        |
| 369 | input   | class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=11; maxlength=10; value=&lt;%=zidaccount%&gt;; tabindex=6; title=Escribe el código identificativo de la cuenta bancaria |
| 370 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=zminombre%&gt;                                                                                                             |
| 385 | a       | style=cursor:hand; href=javascript:comprobar_previo();; title=Enviar                                                                                                                                            |
| 386 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                             |
| 462 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 463 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |
| 500 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                      |
| 501 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 83  | estado          | getParameter(request,"estado")   |
| 84  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 83  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 84  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 114 | zsubsesion        | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 115 | zmeta4object      | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 116 | znodo             | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 117 | znodo2            | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                           |
| 118 | znodo3            | "M4T_PAYMENT_DATA"                                                             | M4T_PAYMENT_DATA                                                                                                                           |
| 119 | znodo4            | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                            |
| 120 | znodo5            | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                           |
| 121 | ztipocargaPre     | "M4T"                                                                          | M4T                                                                                                                                        |
| 122 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                        |
| 123 | zventanas         | "10"                                                                           | 10                                                                                                                                         |
| 124 | zvuelta           | 5                                                                              | 5                                                                                                                                          |
| 125 | zdireccion        | "sse_g2/sse_g2_p1_mod.jsp"                                                     | sse_g2/sse_g2_p1_mod.jsp                                                                                                                   |
| 126 | zestado           | "21"                                                                           | 21                                                                                                                                         |
| 127 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 129 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 130 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 131 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 132 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 134 | zlectura          | zsubsesion + "!" + znodo                                                       | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA                                                                                                      |
| 135 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 137 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 138 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                           |
| 140 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 141 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                           |
| 142 | zraiz3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                 | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}                                                                            |
| 144 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 145 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                             |
| 147 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 148 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                           |
| 149 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 150 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                           |
| 152 | zBANCOPEND        | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                  |
| 153 | zCUENTAPEND       | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                  |
| 154 | zDCPEND           | zcomun + "SSP_DC"                                                              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                              |
| 155 | zSTARTPEND        | zcomun + "SCO_DT_START"                                                        | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                        |
| 156 | zPAYMTYPE         | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                    |
| 157 | zNCURRPEND        | zcomun + "NM_CURRENCY"                                                         | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 158 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 159 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 160 | zID_CURR          | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                         |
| 161 | zN_CURR           | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 162 | zIBANCODEPEND     | zcomun + "SCO_IBAN_CODE"                                                       | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                       |
| 164 | zSSE_DT_START     | zraiz3 + "SSE_DT_START"                                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSE_DT_START"}                                                            |
| 166 | zFEC_EFECTO       | zraiz3 + "SSP_FEC_EFECTO"                                                      | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}                                                          |
| 189 | zcount            | 0                                                                              | 0                                                                                                                                          |
| 190 | zcounti           | 0                                                                              | 0                                                                                                                                          |
| 191 | zcount3           | 0                                                                              | 0                                                                                                                                          |
| 192 | zcounti3          | 0                                                                              | 0                                                                                                                                          |
| 193 | zcount5           | 0                                                                              | 0                                                                                                                                          |
| 194 | zcounti5          | 0                                                                              | 0                                                                                                                                          |
| 205 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 206 | zcountv3          | String.valueOf(zcounti3)                                                       | String.valueOf(zcounti3)                                                                                                                   |
| 207 | zcountv5          | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                   |
| 210 | zidbanco          | ""                                                                             |                                                                                                                                            |
| 211 | zidaccount        | ""                                                                             |                                                                                                                                            |
| 212 | zoraccount        | ""                                                                             |                                                                                                                                            |
| 213 | zidcurrency       | ""                                                                             |                                                                                                                                            |
| 214 | zdatestart        | ""                                                                             |                                                                                                                                            |
| 215 | znmcurrency       | ""                                                                             |                                                                                                                                            |
| 216 | zidbanco1         | ""                                                                             |                                                                                                                                            |
| 217 | zidbanco2         | ""                                                                             |                                                                                                                                            |
| 218 | ziddc             | ""                                                                             |                                                                                                                                            |
| 219 | znmpaymtype       | ""                                                                             |                                                                                                                                            |
| 220 | zidcurr           | ""                                                                             |                                                                                                                                            |
| 221 | zidpaym           | ""                                                                             |                                                                                                                                            |
| 222 | zpaymdata         | ""                                                                             |                                                                                                                                            |
| 223 | zfecefecto        | ""                                                                             |                                                                                                                                            |
| 225 | zidstandard       | ""                                                                             |                                                                                                                                            |
| 401 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 402 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 403 | zposicions        | "0"                                                                            | 0                                                                                                                                          |
| 404 | zcontrol          | 0                                                                              | 0                                                                                                                                          |
| 405 | zposicion         | 0                                                                              | 0                                                                                                                                          |
| 433 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 434 | zidstandardpend   | ""                                                                             |                                                                                                                                            |
| 435 | zDC_0             | ""                                                                             |                                                                                                                                            |
| 474 | zidpaympend       | ""                                                                             |                                                                                                                                            |
| 475 | zidstandardpend   | ""                                                                             |                                                                                                                                            |
| 476 | zDC_0             | ""                                                                             |                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 169 | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                                                        |
| 171 | m4:beginjob  |                                                                                                                                                                |
| 172 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 173 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 173 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                     |
| 174 | m4:endjob    |                                                                                                                                                                |
| 176 | m4:beginjob  |                                                                                                                                                                |
| 177 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 178 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                      |
| 178 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 179 | m4:outputdef | m4alias=SSE_PAYMENT_DATA                                                                                                                                       |
| 179 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 180 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                       |
| 180 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                               |
| 181 | m4:outputdef | m4alias=M4T_PAYMENT_DATA                                                                                                                                       |
| 181 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                                               |
| 182 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                        |
| 182 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                                |
| 183 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                       |
| 183 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                               |
| 184 | m4:endjob    |                                                                                                                                                                |
| 185 | m4:move      |                                                                                                                                                                |
| 185 | m4:param     | name=SSE_PAYMENT_DATA; value=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 186 | m4:move      |                                                                                                                                                                |
| 186 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                                                  |
| 187 | m4:move      |                                                                                                                                                                |
| 187 | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                  |
| 317 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"."}{"SSP_FEC_EFECTO"}; htmlsafe=true                                                        |
| 421 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 428 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 429 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 449 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 449 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 449 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 449 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 452 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 457 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 459 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 469 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 470 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                      |
| 489 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                               |
| 489 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                               |
| 489 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                    |
| 489 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                     |
| 492 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 495 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 497 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 515 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 197 | getCount         | znodo,zsubsesion,znodo                           |
| 198 | getCountInClient | znodo,zsubsesion,znodo                           |
| 199 | getCount         | znodo3,zsubsesion,znodo3                         |
| 200 | getCountInClient | znodo3,zsubsesion,znodo3                         |
| 201 | getCount         | znodo5,zsubsesion,znodo5                         |
| 202 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 231 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK_BRANCH" |
| 232 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK1"       |
| 233 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_BANK2"       |
| 234 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ACCOUNT_NUMBER" |
| 235 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_ACCOUNT"     |
| 236 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_DC"             |
| 237 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_DT_START"       |
| 238 | getItem          | znodo3,zsubsesion,znodo3,"","NM_CURRENCY"        |
| 239 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_NM_PAYM_TYPE"   |
| 240 | getItem          | znodo3,zsubsesion,znodo3,"","ID_CURRENCY_DATA"   |
| 241 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_PAYM_TYPE"   |
| 242 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_OR_PAYMENTDATA" |
| 243 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 245 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_STANDARD"    |
| 438 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 439 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 441 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 479 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 480 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 481 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 14  | comprobar_previo |            |
| 75  | pendientes       | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | v1 = new m4objvalidacion('_num',4,4,'','Campo oligatorio númerico de 4 caracteres',false);                                               |
| 20  | v2 = new m4objvalidacion('_num',2,2,'','Campo oligatorio númerico de 2 caracteres',false);                                               |
| 21  | v3 = new m4objvalidacion('_num',10,10,'','Campo oligatorio númerico de 2 caracteres',false);                                             |
| 34  | if ((4==val_paymtype) &#124;&#124; (5==val_paymtype)){ // tranferencia bancaria                                                          |
| 36  | if (v1.resultado == false){                                                                                                              |
| 41  | if (v1.resultado == false){                                                                                                              |
| 46  | if (v2.resultado == false){                                                                                                              |
| 51  | if (v3.resultado == false){                                                                                                              |
| 56  | if (valordc!=val_dc){                                                                                                                    |
| 62  | else {// cheque, banco                                                                                                                   |
| 69  | if (1==falta_valor)alert(mensaje);                                                                                                       |
| 70  | else{                                                                                                                                    |
| 71  | if (1== error_dc)alert(mensaje1);                                                                                                        |
| 73  | if (1!=falta_valor &amp;&amp; 1!=error_dc) m4submit("NombreFormulario");                                                                 |
| 85  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 88  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 251 | if (!zidstandard.equals("ES")) {                                                                                                         |
| 261 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 264 | if ((null==zidaccount)&#124;&#124;(""==zidaccount))                                                                                      |
| 268 | if ((zidbanco == null)&#124;&#124;(""==zidbanco))                                                                                        |
| 272 | else {                                                                                                                                   |
| 276 | if ((ziddc==null)&#124;&#124;(""==ziddc))                                                                                                |
| 280 | else {                                                                                                                                   |
| 285 | &lt;% if (zcounti3 &gt; 0) {%&gt;                                                                                                        |
| 362 | if (ziddc.length() == 1) {                                                                                                               |
| 393 | &lt;%} else { %&gt;                                                                                                                      |
| 400 | if (zcounti &gt; 0){                                                                                                                     |
| 426 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 443 | if (zDC_0.length() == 1) {                                                                                                               |
| 447 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 448 | &lt;% if (zidstandardpend.equals("")== true){%&gt;                                                                                       |
| 450 | &lt;% } else { %&gt;                                                                                                                     |
| 467 | &lt;% } else{%&gt;                                                                                                                       |
| 483 | if (zDC_0.length() == 1) {                                                                                                               |
| 487 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 488 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 490 | &lt;%} else { %&gt;                                                                                                                      |
| 15  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pueden quedar vacios:" + "\n";                              |
| 27  | expresión de cálculo/transformación: val_branch = val_bank1 + val_bank2;                                                                 |
| 128 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 130 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 131 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 132 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 134 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 135 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 137 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 138 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 140 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 141 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 142 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                     |
| 144 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 145 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 147 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 148 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 149 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 150 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 152 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 153 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 154 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 155 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 156 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 157 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 158 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 159 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 160 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 161 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 162 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 163 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 164 | expresión de cálculo/transformación: String zSSE_DT_START = zraiz3 + "SSE_DT_START";                                                     |
| 166 | expresión de cálculo/transformación: String zFEC_EFECTO = zraiz3 + "SSP_FEC_EFECTO";                                                     |
| 363 | expresión de cálculo/transformación: ziddc = "0" + ziddc;                                                                                |
| 402 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 444 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 484 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 94  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 95  | ../../sse_generico/espanol/generico_links.jsp      |
| 509 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 512 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                       |
| --- | ----------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                     |
| 9   | /libreria/funciones_sse.js                                              |
| 10  | /libreria/digitocontrol.js                                              |
| 12  | /libreria/clase_val_entradas.js                                         |
| 103 | /iconos/noname_banco_79_100.gif                                         |
| 108 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21               |
| 253 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 |
| 292 | sse_g2_p1.jsp                                                           |
| 293 | /iconos/icono_flecha_azul2_ess_11_9.gif                                 |
| 297 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp         |
| 385 | javascript:comprobar_previo();                                          |
| 386 | /iconos/icono_enviar_ess_36_36.gif                                      |
| 462 | javascript:pendientes(                                                  |
| 463 | /iconos/icono_eliminar_ess_11_12.gif                                    |
| 500 | javascript:pendientes(                                                  |
| 501 | /iconos/icono_eliminar_ess_11_12.gif                                    |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                                 |
| 78  | sse_generico/generico_actualizar.jsp                                    |
| 94  | ../../sse_generico/espanol/generico_menusup.jsp                         |
| 95  | ../../sse_generico/espanol/generico_links.jsp                           |
| 125 | sse_g2/sse_g2_p1_mod.jsp                                                |
| 509 | ../../sse_generico/espanol/generico_ventanas.jsp                        |
| 512 | ../../sse_generico/espanol/generico_disclaimer.jsp                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                              | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ----------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 94  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 95  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 509 | ../../sse_generico/espanol/generico_ventanas.jsp                        | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 512 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 10  | /libreria/digitocontrol.js                                              | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 108 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21               | ausente    | P06                                                                                                                                                                                                |
| COLL   | 253 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 292 | sse_g2_p1.jsp                                                           | física     | [sse_g2/sse_g2_p1.jsp](sse_g2--sse_g2_p1.md)                                                                                                                                                       |
| COLL   | 297 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp         | ausente    | P06                                                                                                                                                                                                |
| COLL   | 385 | javascript:comprobar_previo();                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 462 | javascript:pendientes(                                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 500 | javascript:pendientes(                                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 78  | sse_generico/generico_actualizar.jsp                                    | ausente    | P06                                                                                                                                                                                                |
| COLL   | 94  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 95  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 125 | sse_g2/sse_g2_p1_mod.jsp                                                | ausente    | P06                                                                                                                                                                                                |
| COLL   | 509 | ../../sse_generico/espanol/generico_ventanas.jsp                        | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 512 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 94  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 95  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 509 | ../../sse_generico/espanol/generico_ventanas.jsp                        | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 512 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 10  | /libreria/digitocontrol.js                                              | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 108 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21               | ausente    | P06                                                                                                                                                                                                |
| IBER   | 253 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 292 | sse_g2_p1.jsp                                                           | física     | [sse_g2/sse_g2_p1.jsp](sse_g2--sse_g2_p1.md)                                                                                                                                                       |
| IBER   | 297 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp         | ausente    | P06                                                                                                                                                                                                |
| IBER   | 385 | javascript:comprobar_previo();                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 462 | javascript:pendientes(                                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 500 | javascript:pendientes(                                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 78  | sse_generico/generico_actualizar.jsp                                    | ausente    | P06                                                                                                                                                                                                |
| IBER   | 94  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 95  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 125 | sse_g2/sse_g2_p1_mod.jsp                                                | ausente    | P06                                                                                                                                                                                                |
| IBER   | 509 | ../../sse_generico/espanol/generico_ventanas.jsp                        | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 512 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p1_mod_n.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
