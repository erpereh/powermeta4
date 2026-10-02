# Dar de alta otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_add_iban_n.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp) | `e4850c165569b6f98309b05bbb5509f2c18f6852887d4a5bcf298dfa9e1f2017` |    721 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp) | `e4850c165569b6f98309b05bbb5509f2c18f6852887d4a5bcf298dfa9e1f2017` |    721 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_iban_n.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                          |
| --- | ------------------------------------------------- |
| 7   | Dar de alta otras cuentas bancarias               |
| 376 | Dar de alta otras cuentas bancarias no nacionales |
| 394 | Otras cuentas bancarias                           |
| 446 | * Inicio                                          |
| 456 | * Beneficiario                                    |
| 457 | [valor dinámico] ', ' ');"&gt;                    |
| 483 | Número cuenta                                     |
| 497 | * Código bancario                                 |
| 501 | * Código País                                     |
| 502 | "&gt; ( ) " value=" "&gt;                         |
| 516 | Clave IBAN                                        |
| 523 | Tipo de importe                                   |
| 524 | Fijo Porcentaje                                   |
| 530 | * Importe :                                       |
| 572 | Titular                                           |
| 573 | Inicio                                            |
| 574 | Número de cuenta                                  |
| 575 | Tipo de importe                                   |
| 576 | Importe                                           |
| 589 | / / / [valor dinámico]/[valor dinámico]/ /        |
| 613 | Fijo Porcentaje Otro                              |
| 632 | %                                                 |
| 639 | ');"&gt;                                          |
| 648 | / / / [valor dinámico]/[valor dinámico]/ /        |
| 672 | Fijo Porcentaje Otro                              |
| 692 | %                                                 |
| 699 | ');"&gt;                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                             |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 380 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Dar de alta otras cuentas bancarias                                                                                           |
| 387 | a       | class=enlacefuncional; title=Otras cuentas bancarias; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                  |
| 396 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                                                                        |
| 397 | img     | alt=Otras cuentas bancarias; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)               |
| 402 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                       |
| 403 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 404 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                 |
| 405 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                         |
| 406 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 407 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED                                                                                                                               |
| 408 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT                                                                                                                           |
| 409 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA                                                                                                                   |
| 410 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=                                                                                                                 |
| 411 | input   | class=fuenteformulario; type=hidden; name=DESDE_NACIONAL; id=DESDE_NACIONAL; value=0                                                                                                                  |
| 438 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA; value=&lt;%=zReglaPagoOriginal%&gt;; htmlsafe=true                                                               |
| 439 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 440 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 441 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 443 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=4                                                                                                              |
| 458 | select  | id=SCO_ID_PERSON; class=fuenteformulario; name=SCO_ID_PERSON; title=Selecciona el beneficiario de la cuenta                                                                                           |
| 459 | option  | value=                                                                                                                                                                                                |
| 462 | option  | value=&lt;%=IdPerson%&gt;                                                                                                                                                                             |
| 466 | option  | value=&lt;%=IdFamilyP%&gt;; onclick=javascript:modificarFormulaPago('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                    |
| 475 | input   | type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=4                                                                                                                                      |
| 487 | input   | class=fuenteformulario; type=text; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=; tabindex=4                                                                                                 |
| 490 | input   | class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=20; maxlength=20; value=; tabindex=5; title=Escribe el código identificativo de la cuenta bancaria            |
| 504 | select  | onchange=javascript:tratarCampoClaveIBAN(this);; id=SCO_IBAN_CODE; class=fuenteformulario; name=SCO_IBAN_CODE; title=Selecciona el pais al que pertence la cuenta bancaria                            |
| 505 | option  | value=                                                                                                                                                                                                |
| 507 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                                   |
| 512 | input   | type=hidden; id=soportaIBAN_&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                             |
| 518 | input   | class=fuenteformulario; name=SCO_IBAN_KEY; type=text; id=SCO_IBAN_KEY; size=2; maxlength=2; value=; tabindex=7; title=Escribe el digito de control del IBAN                                           |
| 525 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(1);; value=1; checked=presente; confirmar condición si dinámico |
| 526 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(2);; value=2                                                    |
| 534 | input   | id=SCO_VALUE; name=SCO_VALUE; size=10; maxlength=20; class=fuenteformulario; type=text; tabindex=10; title=Escribe el importe del pago                                                                |
| 536 | select  | id=SCO_ID_CURRENCY; class=fuenteformulario; name=SCO_ID_CURRENCY; title=Escoge una moneda                                                                                                             |
| 537 | option  | value=                                                                                                                                                                                                |
| 539 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                              |
| 550 | a       | href=javascript:comprobar_previo();; title=Enviar                                                                                                                                                     |
| 551 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                   |
| 639 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 640 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |
| 700 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 701 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 232 | estado          | getParameter(request,"estado")   |
| 233 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 232 | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 233 | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 247 | zsubsesion              | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 248 | zmeta4object            | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 249 | znodo                   | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 250 | znodo1                  | "M4T_PAYM_FORMULA"                                                             | M4T_PAYM_FORMULA                                                                                                                         |
| 251 | znodo2                  | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                         |
| 252 | znodo3                  | "M4T_OTHER_PDATA"                                                              | M4T_OTHER_PDATA                                                                                                                          |
| 253 | znodo4                  | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                          |
| 254 | znodo5                  | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                         |
| 255 | znodo6                  | "M4T_FAMILY_LIST"                                                              | M4T_FAMILY_LIST                                                                                                                          |
| 256 | znodo7                  | "M4T_COUNTRY_LIST"                                                             | M4T_COUNTRY_LIST                                                                                                                         |
| 258 | ztipocarga              | "SSE"                                                                          | SSE                                                                                                                                      |
| 260 | zventanas               | "10"                                                                           | 10                                                                                                                                       |
| 261 | zvuelta                 | 5                                                                              | 5                                                                                                                                        |
| 262 | zdireccion              | "sse_g2/sse_g2_p2_add_iban.jsp"                                                | sse_g2/sse_g2_p2_add_iban.jsp                                                                                                            |
| 263 | zestado                 | "21"                                                                           | 21                                                                                                                                       |
| 264 | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 266 | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 267 | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 268 | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 269 | zmove                   | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 270 | zlectura                | zsubsesion + "!" + znodo                                                       | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA                                                                                                      |
| 271 | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 273 | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 274 | zmove1                  | znodo1 + ":" + znodo1 + "[FIRST]"                                              | M4T_PAYM_FORMULA{":"}M4T_PAYM_FORMULA{"[FIRST]"}                                                                                         |
| 275 | zlectura1               | zsubsesion + "!" + znodo1                                                      | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA                                                                                                     |
| 276 | zraiz1                  | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                                    | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.                                                                               |
| 278 | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 279 | zmove2                  | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                         |
| 280 | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 282 | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 283 | zmove3                  | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                                                           |
| 284 | zlectura3               | zsubsesion + "!" + znodo3                                                      | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA                                                                                                      |
| 285 | zraiz3                  | zsubsesion + "!" + znodo3 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}                                                                                                 |
| 286 | zcomun3                 | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 288 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 289 | zmove4                  | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                           |
| 290 | zlectura4               | zsubsesion + "!" + znodo4                                                      | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK                                                                                                      |
| 291 | zraiz4                  | zsubsesion + "!" + znodo4 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"."}                                                                                                 |
| 293 | zoutputdef5             | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 294 | zmove5                  | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                         |
| 295 | zcomun5                 | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 297 | zoutputdef6             | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 298 | zmove6                  | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_FAMILY_LIST{":"}M4T_FAMILY_LIST{"[FIRST]"}                                                                                           |
| 299 | zcomun6                 | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 301 | zoutputdef7             | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 302 | zmove7                  | znodo7 + ":" + znodo7 + "[FIRST]"                                              | M4T_COUNTRY_LIST{":"}M4T_COUNTRY_LIST{"[FIRST]"}                                                                                         |
| 303 | zcomun7                 | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 305 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                          |
| 308 | zBANCOPEND              | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                   |
| 309 | zCUENTAPEND             | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                   |
| 310 | zDCPEND                 | zcomun + "SSP_DC"                                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                               |
| 311 | zSTARTPEND              | zcomun + "SCO_DT_START"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                         |
| 312 | zPAYMTYPE               | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                     |
| 313 | zIDCURRPEND             | zcomun + "SCO_ID_CURRENCY"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}                                      |
| 314 | zNCURRPEND              | zcomun + "NM_CURRENCY"                                                         | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 315 | zSCOIDPAYMTYPEPARAMPEND | zcomun + "SCO_ID_PAYM_TYPE_PARAM"                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE_PARAM"}                               |
| 316 | zN_FORMULAPEND          | zcomun + "SCO_NM_PAYMFORMULA"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                   |
| 317 | zSSE_PAY_FORM_TP        | zcomun + "SSP_PAY_FORM_TP"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}                                      |
| 318 | zentitledpend           | zcomun + "SCO_ENTITLED"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}                                         |
| 319 | zcant                   | zcomun + "SCO_VALUE"                                                           | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}                                            |
| 320 | zORDINAL                | zcomun + "ORDINAL"                                                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 321 | zNACCION                | zcomun + "N_ACCION"                                                            | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 322 | zID_FORMULA             | zraiz1 + "SCO_ID_PAY_FORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_ID_PAY_FORMULA"}                                                         |
| 323 | zN_FORMULA              | zraiz1 + "SCO_NM_PAYMFORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_NM_PAYMFORMULA"}                                                         |
| 324 | zPAY_FORM_TP            | zraiz1 + "SSP_PAY_FORM_TP"                                                     | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SSP_PAY_FORM_TP"}                                                            |
| 325 | zID_FORMA_PAGO          | zcomun2 + "SCO_ID_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                   |
| 326 | zN_FORMA_PAGO           | zcomun2 + "SCO_NM_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                   |
| 327 | zID_CURR                | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                        |
| 328 | zN_CURR                 | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                        |
| 329 | zIBANCODEPEND           | zcomun + "SCO_IBAN_CODE"                                                       | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                        |
| 332 | zbID_PAY_FORMULA        | zcomun6 + "SSE_ID_PAY_FORMULA"                                                 | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_PAY_FORMULA"}                                   |
| 333 | zbPAY_FORM_TP           | zcomun6 + "SSE_PAY_FORM_TP"                                                    | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_PAY_FORM_TP"}                                      |
| 335 | zFEC_EFECTO             | zcomun3 + "SSP_FEC_EFECTO"                                                     | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_FEC_EFECTO"}                                       |
| 355 | zcount                  | 0                                                                              | 0                                                                                                                                        |
| 356 | zcounti                 | 0                                                                              | 0                                                                                                                                        |
| 357 | zcount2                 | 0                                                                              | 0                                                                                                                                        |
| 358 | zcounti2                | 0                                                                              | 0                                                                                                                                        |
| 359 | zcount5                 | 0                                                                              | 0                                                                                                                                        |
| 360 | zcounti5                | 0                                                                              | 0                                                                                                                                        |
| 370 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 371 | zcountv2                | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                 |
| 372 | zcountv5                | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                 |
| 415 | sFechaEfecto            | ""                                                                             |                                                                                                                                          |
| 422 | bPuedeCrearCuenta       | true                                                                           | true                                                                                                                                     |
| 430 | zReglaPagoOriginal      | ""                                                                             |                                                                                                                                          |
| 562 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 563 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 564 | zposicions              | "0"                                                                            | 0                                                                                                                                        |
| 565 | zcontrol                | 0                                                                              | 0                                                                                                                                        |
| 566 | zposicion               | 0                                                                              | 0                                                                                                                                        |
| 591 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 592 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 593 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 594 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 595 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 614 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 618 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 619 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |
| 650 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 651 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 652 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 653 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 654 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 673 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 677 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 678 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 338 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                                       |
| 339 | m4:beginjob  |                                                                                                                                                              |
| 340 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                                                  |
| 341 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                     |
| 341 | m4:param     | name=CARGA; value=SSE                                                                                                                                        |
| 342 | m4:outputdef | m4alias=SSE_OTHER_PDATA                                                                                                                                      |
| 342 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 343 | m4:outputdef | m4alias=M4T_PAYM_FORMULA                                                                                                                                     |
| 343 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 344 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                     |
| 344 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 345 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                                      |
| 345 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 346 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                      |
| 346 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 347 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                     |
| 347 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 348 | m4:outputdef | m4alias=M4T_FAMILY_LIST                                                                                                                                      |
| 348 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 349 | m4:outputdef | m4alias=M4T_COUNTRY_LIST                                                                                                                                     |
| 349 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 350 | m4:endjob    |                                                                                                                                                              |
| 351 | m4:move      |                                                                                                                                                              |
| 351 | m4:param     | name=SSE_OTHER_PDATA; value=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 352 | m4:move      |                                                                                                                                                              |
| 352 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                 |
| 353 | m4:move      |                                                                                                                                                              |
| 353 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                 |
| 453 | m4:item      | item=SSP_FEC_EFECTO; htmlsafe=true; outputdef=M4T_OTHER_PDATA                                                                                                |
| 460 | m4:item      | m4varname=IdPerson; item=SSE_P_ID_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                           |
| 463 | m4:dataloop  | outputdef=M4T_FAMILY_LIST                                                                                                                                    |
| 464 | m4:item      | m4varname=IdFamilyP; item=STD_ID_FAMILY_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                     |
| 466 | m4:item      | item=SSE_PAY_FORM_TP; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                               |
| 466 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                                   |
| 506 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 507 | m4:item      | item=STD_N_COUNTRY; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                |
| 507 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                               |
| 511 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 512 | m4:item      | item=SSP_SOPORTA_IBAN; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                             |
| 538 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                                        |
| 539 | m4:item      | m4name=M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                      |
| 579 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                    |
| 586 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 587 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 588 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 606 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 606 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 606 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 606 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 609 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 609 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 632 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 634 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 645 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 646 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 647 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 665 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 665 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 665 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 665 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 668 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 668 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 691 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                                |
| 692 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 694 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 719 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 363 | getCount         | znodo,zsubsesion,znodo                           |
| 364 | getCountInClient | znodo,zsubsesion,znodo                           |
| 365 | getCount         | znodo2,zsubsesion,znodo2                         |
| 366 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 367 | getCount         | znodo5,zsubsesion,znodo5                         |
| 368 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 419 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 434 | getItem          | znodo6,zsubsesion,znodo6,"","SSE_ID_PAY_FORMULA" |
| 598 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 599 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 600 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 618 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |
| 657 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 658 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 659 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 677 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                     | Argumentos                    |
| --- | --------------------------- | ----------------------------- |
| 17  | getCheckedValue             | radioObj                      |
| 36  | setCheckedValue             | radioObj, newValue            |
| 54  | habilitar                   | tipoImporte                   |
| 77  | comprobar_previo            |                               |
| 157 | pendientes                  | ord                           |
| 165 | modificarFormulaPago        | idFormulaPago,tipoFormulaPago |
| 187 | paisSeleccionadoSoportaIBAN |                               |
| 207 | tratarCampoClaveIBAN        | listaCountry                  |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if(!radioObj)                                                                                                                            |
| 21  | if(radioLength == undefined)                                                                                                             |
| 22  | if(radioObj.checked)                                                                                                                     |
| 24  | else                                                                                                                                     |
| 27  | if(radioObj[i].checked) {                                                                                                                |
| 37  | if(!radioObj)                                                                                                                            |
| 40  | if(radioLength == undefined) {                                                                                                           |
| 46  | if(radioObj[i].value == newValue.toString()) {                                                                                           |
| 60  | if (tipoImporte == 1) {                                                                                                                  |
| 64  | } else if (tipoImporte == 2) {                                                                                                           |
| 68  | } else {                                                                                                                                 |
| 82  | v1 = new m4objvalidacion('_num',4,4,'',false);                                                                                           |
| 83  | v2 = new m4objvalidacion('_num',2,2,'',false);                                                                                           |
| 84  | v3 = new m4objvalidacion('_num',10,10,'',false);                                                                                         |
| 95  | if ((null==val_cant) &#124;&#124; (''== val_cant)){                                                                                      |
| 101 | if ((val_benef == null) &#124;&#124; (val_benef == "")){                                                                                 |
| 104 | }else{                                                                                                                                   |
| 109 | if ((val_paymtype == null) &#124;&#124; (val_paymtype == "")){                                                                           |
| 113 | if ('4'==val_paymtype &#124;&#124; '5'==val_paymtype){ // tranferencia bancaria / SEPA                                                   |
| 115 | if ((null==val_pais) &#124;&#124; (''== val_pais)){                                                                                      |
| 118 | }else{                                                                                                                                   |
| 119 | if ('ES'== val_pais.toUpperCase()){                                                                                                      |
| 124 | if (paisSeleccionadoSoportaIBAN()) {                                                                                                     |
| 125 | if ((null==val_ibankey) &#124;&#124; (''== val_ibankey)){                                                                                |
| 130 | if ((null==val_account) &#124;&#124; (''== val_account)){                                                                                |
| 134 | if ((null==val_bankbranch) &#124;&#124; (''== val_bankbranch)){                                                                          |
| 140 | } else {// cheque, banco                                                                                                                 |
| 148 | if (1==falta_valor) {                                                                                                                    |
| 149 | alert(mensaje);                                                                                                                          |
| 150 | } else {                                                                                                                                 |
| 167 | if (idFormulaPago != "" &amp;&amp; idFormulaPago != null &amp;&amp; tipoFormulaPago != null) {                                           |
| 179 | } else {                                                                                                                                 |
| 192 | if (codigoISOPaisSeleccionado == null &#124;&#124; codigoISOPaisSeleccionado == "") {                                                    |
| 197 | if (soportaIBAN == "1") {                                                                                                                |
| 199 | } else {                                                                                                                                 |
| 215 | if (soportaIBAN) {                                                                                                                       |
| 219 | } else {                                                                                                                                 |
| 234 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 237 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 423 | if (sFechaEfecto == null &#124;&#124; sFechaEfecto.equals("")) {                                                                         |
| 437 | if (false) { %&gt;                                                                                                                       |
| 561 | if (zcounti &gt; 0) {                                                                                                                    |
| 584 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 604 | if (zidpaympend.equals("4") == true) {                                                                                                   |
| 605 | if (zidstandardpend.equals("") == true) { %&gt;                                                                                          |
| 607 | &lt;% } else { %&gt;                                                                                                                     |
| 624 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 626 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 628 | &lt;% } else { %&gt;                                                                                                                     |
| 633 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 635 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 643 | &lt;%}else{%&gt;                                                                                                                         |
| 663 | if (zidpaympend.equals("4")== true) {                                                                                                    |
| 664 | if (zidstandardpend.equals("")== true){%&gt;                                                                                             |
| 666 | &lt;%} else {%&gt;                                                                                                                       |
| 683 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 685 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 687 | &lt;% } else { %&gt;                                                                                                                     |
| 693 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 695 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 78  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pasan la validación o no están rellenos:" + "\n";           |
| 196 | expresión de cálculo/transformación: var soportaIBAN = document.getElementById("soportaIBAN_" + codigoISOPaisSeleccionado).value;        |
| 265 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 267 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 268 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 269 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 270 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 271 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 273 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 274 | expresión de cálculo/transformación: String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";                                                   |
| 275 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 276 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                       |
| 278 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 279 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 280 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 282 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 283 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 284 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                       |
| 285 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                    |
| 286 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 288 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 289 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 290 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                       |
| 291 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                    |
| 293 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 294 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 295 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 297 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 298 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 299 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 301 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 302 | expresión de cálculo/transformación: String zmove7 =znodo7 + ":" + znodo7 + "[FIRST]";                                                   |
| 303 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 305 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 308 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 309 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 310 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 311 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 312 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 313 | expresión de cálculo/transformación: String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";                                                    |
| 314 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 316 | expresión de cálculo/transformación: String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA";                                              |
| 317 | expresión de cálculo/transformación: String zSSE_PAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";                                               |
| 318 | expresión de cálculo/transformación: String zentitledpend = zcomun + "SCO_ENTITLED";                                                     |
| 319 | expresión de cálculo/transformación: String zcant = zcomun + "SCO_VALUE";                                                                |
| 320 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 321 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 322 | expresión de cálculo/transformación: String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";                                                 |
| 323 | expresión de cálculo/transformación: String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA";                                                  |
| 324 | expresión de cálculo/transformación: String zPAY_FORM_TP = zraiz1 + "SSP_PAY_FORM_TP";                                                   |
| 325 | expresión de cálculo/transformación: String zID_FORMA_PAGO = zcomun2 + "SCO_ID_PAYM_TYPE";                                               |
| 326 | expresión de cálculo/transformación: String zN_FORMA_PAGO = zcomun2 + "SCO_NM_PAYM_TYPE";                                                |
| 327 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 328 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 329 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 330 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 332 | expresión de cálculo/transformación: String zbID_PAY_FORMULA = zcomun6 + "SSE_ID_PAY_FORMULA"; //fórmula de pago                         |
| 333 | expresión de cálculo/transformación: String zbPAY_FORM_TP = zcomun6 + "SSE_PAY_FORM_TP"; //tipo de fórmula de pago                       |
| 335 | expresión de cálculo/transformación: String zFEC_EFECTO = zcomun3 + "SSP_FEC_EFECTO";                                                    |
| 563 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 621 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |
| 680 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 244 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 245 | ../../sse_generico/espanol/generico_links.jsp      |
| 709 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 714 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 380 | /iconos/noname_beneficiarios_72_100.gif                         |
| 387 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 396 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 397 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 402 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 550 | javascript:comprobar_previo();                                  |
| 551 | /iconos/icono_enviar_ess_36_36.gif                              |
| 639 | javascript:pendientes(                                          |
| 640 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 700 | javascript:pendientes(                                          |
| 701 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 160 | sse_generico/generico_actualizar.jsp                            |
| 244 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 245 | ../../sse_generico/espanol/generico_links.jsp                   |
| 262 | sse_g2/sse_g2_p2_add_iban.jsp                                   |
| 709 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 714 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 244 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 245 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 709 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 714 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 387 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 396 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 402 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 550 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 639 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 700 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 160 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 244 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 245 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 262 | sse_g2/sse_g2_p2_add_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 709 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 714 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 244 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 245 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 709 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 714 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 387 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 396 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 402 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 550 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 639 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 700 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 160 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 244 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 245 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 262 | sse_g2/sse_g2_p2_add_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 709 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 714 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_add_iban_n.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
