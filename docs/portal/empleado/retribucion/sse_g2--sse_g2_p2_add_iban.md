# Dar de alta otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_add_iban.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g2/espanol/sse_g2_p2_add_iban.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p2_add_iban.jsp) | `70004c0278373c3628aa478dc30bbf8a32d367ba0435a081ea8f1e4c6ba83a3b` |    763 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g2/espanol/sse_g2_p2_add_iban.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p2_add_iban.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                          |
| --- | ------------------------------------------------- |
| 7   | Dar de alta otras cuentas bancarias               |
| 401 | Dar de alta otras cuentas bancarias no nacionales |
| 419 | Otras cuentas bancarias                           |
| 471 | * Inicio                                          |
| 481 | * Beneficiario                                    |
| 482 | [valor dinámico] ', ' ');"&gt;                    |
| 508 | Sucursal y número cuenta                          |
| 522 | * Código bancario                                 |
| 526 | * Código País                                     |
| 527 | "&gt; ( ) " value=" "&gt;                         |
| 553 | Clave IBAN                                        |
| 560 | Tipo de importe                                   |
| 561 | Fijo Porcentaje                                   |
| 567 | * Importe :                                       |
| 614 | Titular                                           |
| 615 | Inicio                                            |
| 616 | Número de cuenta                                  |
| 617 | Tipo de importe                                   |
| 618 | Importe                                           |
| 631 | / / / [valor dinámico]/[valor dinámico]/ /        |
| 655 | Fijo Porcentaje Otro                              |
| 674 | %                                                 |
| 681 | ');"&gt;                                          |
| 690 | / / / [valor dinámico]/[valor dinámico]/ /        |
| 714 | Fijo Porcentaje Otro                              |
| 734 | %                                                 |
| 741 | ');"&gt;                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                             |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 405 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Dar de alta otras cuentas bancarias                                                                                           |
| 412 | a       | class=enlacefuncional; title=Otras cuentas bancarias; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                  |
| 421 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                                                                        |
| 422 | img     | alt=Otras cuentas bancarias; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)               |
| 427 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                       |
| 428 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 429 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                 |
| 430 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                         |
| 431 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 432 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED                                                                                                                               |
| 433 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT                                                                                                                           |
| 434 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA                                                                                                                   |
| 435 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=                                                                                                                 |
| 436 | input   | class=fuenteformulario; type=hidden; name=DESDE_NACIONAL; id=DESDE_NACIONAL; value=0                                                                                                                  |
| 463 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA; value=&lt;%=zReglaPagoOriginal%&gt;; htmlsafe=true                                                               |
| 464 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 465 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 466 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 468 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=4                                                                                                              |
| 483 | select  | id=SCO_ID_PERSON; class=fuenteformulario; name=SCO_ID_PERSON; title=Selecciona el beneficiario de la cuenta                                                                                           |
| 487 | option  | value=&lt;%=IdPerson%&gt;                                                                                                                                                                             |
| 491 | option  | value=&lt;%=IdFamilyP%&gt;; onclick=javascript:modificarFormulaPago('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                    |
| 500 | input   | type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=4                                                                                                                                      |
| 512 | input   | class=fuenteformulario; type=text; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=; tabindex=4                                                                                                 |
| 515 | input   | class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=20; maxlength=20; value=; tabindex=5; title=Escribe el código identificativo de la cuenta bancaria            |
| 529 | select  | onchange=javascript:tratarCampoClaveIBAN(this);; id=SCO_IBAN_CODE; class=fuenteformulario; name=SCO_IBAN_CODE; title=Selecciona el pais al que pertence la cuenta bancaria                            |
| 530 | option  | value=                                                                                                                                                                                                |
| 541 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                                   |
| 549 | input   | type=hidden; id=soportaIBAN_&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                             |
| 555 | input   | class=fuenteformulario; name=SCO_IBAN_KEY; type=text; id=SCO_IBAN_KEY; size=2; maxlength=2; value=; tabindex=7; title=Escribe el digito de control del IBAN                                           |
| 562 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(1);; value=1; checked=presente; confirmar condición si dinámico |
| 563 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(2);; value=2                                                    |
| 571 | input   | id=SCO_VALUE; name=SCO_VALUE; size=10; maxlength=20; class=fuenteformulario; type=text; tabindex=10; title=Escribe el importe del pago                                                                |
| 576 | select  | id=SCO_ID_CURRENCY; class=fuenteformulario; name=SCO_ID_CURRENCY; title=Escoge una moneda; disabled=                                                                                                  |
| 577 | option  | value=EUR                                                                                                                                                                                             |
| 592 | a       | href=javascript:comprobar_previo();; title=Enviar                                                                                                                                                     |
| 593 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                   |
| 681 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 682 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |
| 742 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 743 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 257 | estado          | getParameter(request,"estado")   |
| 258 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 257 | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 258 | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 272 | zsubsesion              | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 273 | zmeta4object            | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 274 | znodo                   | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 275 | znodo1                  | "M4T_PAYM_FORMULA"                                                             | M4T_PAYM_FORMULA                                                                                                                         |
| 276 | znodo2                  | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                         |
| 277 | znodo3                  | "M4T_OTHER_PDATA"                                                              | M4T_OTHER_PDATA                                                                                                                          |
| 278 | znodo4                  | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                          |
| 279 | znodo5                  | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                         |
| 280 | znodo6                  | "M4T_FAMILY_LIST"                                                              | M4T_FAMILY_LIST                                                                                                                          |
| 281 | znodo7                  | "M4T_COUNTRY_LIST"                                                             | M4T_COUNTRY_LIST                                                                                                                         |
| 283 | ztipocarga              | "SSE"                                                                          | SSE                                                                                                                                      |
| 285 | zventanas               | "10"                                                                           | 10                                                                                                                                       |
| 286 | zvuelta                 | 5                                                                              | 5                                                                                                                                        |
| 287 | zdireccion              | "sse_g2/sse_g2_p2_add_iban.jsp"                                                | sse_g2/sse_g2_p2_add_iban.jsp                                                                                                            |
| 288 | zestado                 | "21"                                                                           | 21                                                                                                                                       |
| 289 | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 291 | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 292 | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 293 | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 294 | zmove                   | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 295 | zlectura                | zsubsesion + "!" + znodo                                                       | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA                                                                                                      |
| 296 | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 298 | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 299 | zmove1                  | znodo1 + ":" + znodo1 + "[FIRST]"                                              | M4T_PAYM_FORMULA{":"}M4T_PAYM_FORMULA{"[FIRST]"}                                                                                         |
| 300 | zlectura1               | zsubsesion + "!" + znodo1                                                      | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA                                                                                                     |
| 301 | zraiz1                  | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                                    | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.                                                                               |
| 303 | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 304 | zmove2                  | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                         |
| 305 | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 307 | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 308 | zmove3                  | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                                                           |
| 309 | zlectura3               | zsubsesion + "!" + znodo3                                                      | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA                                                                                                      |
| 310 | zraiz3                  | zsubsesion + "!" + znodo3 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}                                                                                                 |
| 311 | zcomun3                 | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 313 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 314 | zmove4                  | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                           |
| 315 | zlectura4               | zsubsesion + "!" + znodo4                                                      | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK                                                                                                      |
| 316 | zraiz4                  | zsubsesion + "!" + znodo4 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"."}                                                                                                 |
| 318 | zoutputdef5             | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 319 | zmove5                  | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                         |
| 320 | zcomun5                 | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 322 | zoutputdef6             | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 323 | zmove6                  | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_FAMILY_LIST{":"}M4T_FAMILY_LIST{"[FIRST]"}                                                                                           |
| 324 | zcomun6                 | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 326 | zoutputdef7             | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 327 | zmove7                  | znodo7 + ":" + znodo7 + "[FIRST]"                                              | M4T_COUNTRY_LIST{":"}M4T_COUNTRY_LIST{"[FIRST]"}                                                                                         |
| 328 | zcomun7                 | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 330 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                          |
| 333 | zBANCOPEND              | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                   |
| 334 | zCUENTAPEND             | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                   |
| 335 | zDCPEND                 | zcomun + "SSP_DC"                                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                               |
| 336 | zSTARTPEND              | zcomun + "SCO_DT_START"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                         |
| 337 | zPAYMTYPE               | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                     |
| 338 | zIDCURRPEND             | zcomun + "SCO_ID_CURRENCY"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}                                      |
| 339 | zNCURRPEND              | zcomun + "NM_CURRENCY"                                                         | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 340 | zSCOIDPAYMTYPEPARAMPEND | zcomun + "SCO_ID_PAYM_TYPE_PARAM"                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE_PARAM"}                               |
| 341 | zN_FORMULAPEND          | zcomun + "SCO_NM_PAYMFORMULA"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                   |
| 342 | zSSE_PAY_FORM_TP        | zcomun + "SSP_PAY_FORM_TP"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}                                      |
| 343 | zentitledpend           | zcomun + "SCO_ENTITLED"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}                                         |
| 344 | zcant                   | zcomun + "SCO_VALUE"                                                           | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}                                            |
| 345 | zORDINAL                | zcomun + "ORDINAL"                                                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 346 | zNACCION                | zcomun + "N_ACCION"                                                            | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 347 | zID_FORMULA             | zraiz1 + "SCO_ID_PAY_FORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_ID_PAY_FORMULA"}                                                         |
| 348 | zN_FORMULA              | zraiz1 + "SCO_NM_PAYMFORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_NM_PAYMFORMULA"}                                                         |
| 349 | zPAY_FORM_TP            | zraiz1 + "SSP_PAY_FORM_TP"                                                     | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SSP_PAY_FORM_TP"}                                                            |
| 350 | zID_FORMA_PAGO          | zcomun2 + "SCO_ID_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                   |
| 351 | zN_FORMA_PAGO           | zcomun2 + "SCO_NM_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                   |
| 352 | zID_CURR                | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                        |
| 353 | zN_CURR                 | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                        |
| 354 | zIBANCODEPEND           | zcomun + "SCO_IBAN_CODE"                                                       | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                        |
| 357 | zbID_PAY_FORMULA        | zcomun6 + "SSE_ID_PAY_FORMULA"                                                 | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_PAY_FORMULA"}                                   |
| 358 | zbPAY_FORM_TP           | zcomun6 + "SSE_PAY_FORM_TP"                                                    | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_PAY_FORM_TP"}                                      |
| 360 | zFEC_EFECTO             | zcomun3 + "SSP_FEC_EFECTO"                                                     | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_FEC_EFECTO"}                                       |
| 380 | zcount                  | 0                                                                              | 0                                                                                                                                        |
| 381 | zcounti                 | 0                                                                              | 0                                                                                                                                        |
| 382 | zcount2                 | 0                                                                              | 0                                                                                                                                        |
| 383 | zcounti2                | 0                                                                              | 0                                                                                                                                        |
| 384 | zcount5                 | 0                                                                              | 0                                                                                                                                        |
| 385 | zcounti5                | 0                                                                              | 0                                                                                                                                        |
| 395 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 396 | zcountv2                | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                 |
| 397 | zcountv5                | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                 |
| 440 | sFechaEfecto            | ""                                                                             |                                                                                                                                          |
| 447 | bPuedeCrearCuenta       | true                                                                           | true                                                                                                                                     |
| 455 | zReglaPagoOriginal      | ""                                                                             |                                                                                                                                          |
| 533 | auxpais                 | ""                                                                             |                                                                                                                                          |
| 604 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 605 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 606 | zposicions              | "0"                                                                            | 0                                                                                                                                        |
| 607 | zcontrol                | 0                                                                              | 0                                                                                                                                        |
| 608 | zposicion               | 0                                                                              | 0                                                                                                                                        |
| 633 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 634 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 635 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 636 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 637 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 656 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 660 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 661 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |
| 692 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 693 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 694 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 695 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 696 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 715 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 719 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 720 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 363 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                                       |
| 364 | m4:beginjob  |                                                                                                                                                              |
| 365 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                                                  |
| 366 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                     |
| 366 | m4:param     | name=CARGA; value=SSE                                                                                                                                        |
| 367 | m4:outputdef | m4alias=SSE_OTHER_PDATA                                                                                                                                      |
| 367 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 368 | m4:outputdef | m4alias=M4T_PAYM_FORMULA                                                                                                                                     |
| 368 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 369 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                     |
| 369 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 370 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                                      |
| 370 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 371 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                      |
| 371 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 372 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                     |
| 372 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 373 | m4:outputdef | m4alias=M4T_FAMILY_LIST                                                                                                                                      |
| 373 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 374 | m4:outputdef | m4alias=M4T_COUNTRY_LIST                                                                                                                                     |
| 374 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 375 | m4:endjob    |                                                                                                                                                              |
| 376 | m4:move      |                                                                                                                                                              |
| 376 | m4:param     | name=SSE_OTHER_PDATA; value=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 377 | m4:move      |                                                                                                                                                              |
| 377 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                 |
| 378 | m4:move      |                                                                                                                                                              |
| 378 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                 |
| 478 | m4:item      | item=SSP_FEC_EFECTO; htmlsafe=true; outputdef=M4T_OTHER_PDATA                                                                                                |
| 485 | m4:item      | m4varname=IdPerson; item=SSE_P_ID_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                           |
| 488 | m4:dataloop  | outputdef=M4T_FAMILY_LIST                                                                                                                                    |
| 489 | m4:item      | m4varname=IdFamilyP; item=STD_ID_FAMILY_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                     |
| 491 | m4:item      | item=SSE_PAY_FORM_TP; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                               |
| 491 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                                   |
| 531 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 535 | m4:item      | var=; item=STD_N_COUNTRY; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                          |
| 541 | m4:item      | item=STD_N_COUNTRY; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                |
| 541 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                               |
| 548 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 549 | m4:item      | item=SSP_SOPORTA_IBAN; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                             |
| 621 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                    |
| 628 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 629 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 630 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 648 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 648 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 648 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 648 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 651 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 651 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 674 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 676 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 687 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 688 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 689 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 707 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 707 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 707 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 707 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 710 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 710 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 733 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                                |
| 734 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 736 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 761 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 388 | getCount         | znodo,zsubsesion,znodo                           |
| 389 | getCountInClient | znodo,zsubsesion,znodo                           |
| 390 | getCount         | znodo2,zsubsesion,znodo2                         |
| 391 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 392 | getCount         | znodo5,zsubsesion,znodo5                         |
| 393 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 444 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 459 | getItem          | znodo6,zsubsesion,znodo6,"","SSE_ID_PAY_FORMULA" |
| 640 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 641 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 642 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 660 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |
| 699 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 700 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 701 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 719 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                     | Argumentos                    |
| --- | --------------------------- | ----------------------------- |
| 17  | getCheckedValue             | radioObj                      |
| 36  | setCheckedValue             | radioObj, newValue            |
| 75  | habilitar                   | tipoImporte                   |
| 102 | comprobar_previo            |                               |
| 182 | pendientes                  | ord                           |
| 190 | modificarFormulaPago        | idFormulaPago,tipoFormulaPago |
| 212 | paisSeleccionadoSoportaIBAN |                               |
| 232 | tratarCampoClaveIBAN        | listaCountry                  |

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
| 81  | if (tipoImporte == 1) {                                                                                                                  |
| 89  | } else if (tipoImporte == 2) {                                                                                                           |
| 93  | } else {                                                                                                                                 |
| 107 | v1 = new m4objvalidacion('_num',4,4,'',false);                                                                                           |
| 108 | v2 = new m4objvalidacion('_num',2,2,'',false);                                                                                           |
| 109 | v3 = new m4objvalidacion('_num',10,10,'',false);                                                                                         |
| 120 | if ((null==val_cant) &#124;&#124; (''== val_cant)){                                                                                      |
| 126 | if ((val_benef == null) &#124;&#124; (val_benef == "")){                                                                                 |
| 129 | }else{                                                                                                                                   |
| 134 | if ((val_paymtype == null) &#124;&#124; (val_paymtype == "")){                                                                           |
| 138 | if ('4'==val_paymtype &#124;&#124; '5'==val_paymtype){ // tranferencia bancaria / SEPA                                                   |
| 140 | if ((null==val_pais) &#124;&#124; (''== val_pais)){                                                                                      |
| 143 | }else{                                                                                                                                   |
| 144 | if ('ES'== val_pais.toUpperCase()){                                                                                                      |
| 149 | if (paisSeleccionadoSoportaIBAN()) {                                                                                                     |
| 150 | if ((null==val_ibankey) &#124;&#124; (''== val_ibankey)){                                                                                |
| 155 | if ((null==val_account) &#124;&#124; (''== val_account)){                                                                                |
| 159 | if ((null==val_bankbranch) &#124;&#124; (''== val_bankbranch)){                                                                          |
| 165 | } else {// cheque, banco                                                                                                                 |
| 173 | if (1==falta_valor) {                                                                                                                    |
| 174 | alert(mensaje);                                                                                                                          |
| 175 | } else {                                                                                                                                 |
| 192 | if (idFormulaPago != "" &amp;&amp; idFormulaPago != null &amp;&amp; tipoFormulaPago != null) {                                           |
| 204 | } else {                                                                                                                                 |
| 217 | if (codigoISOPaisSeleccionado == null &#124;&#124; codigoISOPaisSeleccionado == "") {                                                    |
| 222 | if (soportaIBAN == "1") {                                                                                                                |
| 224 | } else {                                                                                                                                 |
| 240 | if (soportaIBAN) {                                                                                                                       |
| 244 | } else {                                                                                                                                 |
| 259 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 262 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 448 | if (sFechaEfecto == null &#124;&#124; sFechaEfecto.equals("")) {                                                                         |
| 462 | if (false) { %&gt;                                                                                                                       |
| 539 | if ( Arrays.asList(paisespermitidos).contains(auxpais) ) {                                                                               |
| 603 | if (zcounti &gt; 0) {                                                                                                                    |
| 626 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 646 | if (zidpaympend.equals("4") == true) {                                                                                                   |
| 647 | if (zidstandardpend.equals("") == true) { %&gt;                                                                                          |
| 649 | &lt;% } else { %&gt;                                                                                                                     |
| 666 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 668 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 670 | &lt;% } else { %&gt;                                                                                                                     |
| 675 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 677 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 685 | &lt;%}else{%&gt;                                                                                                                         |
| 705 | if (zidpaympend.equals("4")== true) {                                                                                                    |
| 706 | if (zidstandardpend.equals("")== true){%&gt;                                                                                             |
| 708 | &lt;%} else {%&gt;                                                                                                                       |
| 725 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 727 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 729 | &lt;% } else { %&gt;                                                                                                                     |
| 735 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 737 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 103 | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pasan la validación o no están rellenos:" + "\n";           |
| 221 | expresión de cálculo/transformación: var soportaIBAN = document.getElementById("soportaIBAN_" + codigoISOPaisSeleccionado).value;        |
| 290 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 292 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 293 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 294 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 295 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 296 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 298 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 299 | expresión de cálculo/transformación: String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";                                                   |
| 300 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 301 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                       |
| 303 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 304 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 305 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 307 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 308 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 309 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                       |
| 310 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                    |
| 311 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 313 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 314 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 315 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                       |
| 316 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                    |
| 318 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 319 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 320 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 322 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 323 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 324 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 326 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 327 | expresión de cálculo/transformación: String zmove7 =znodo7 + ":" + znodo7 + "[FIRST]";                                                   |
| 328 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 330 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 333 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 334 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 335 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 336 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 337 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 338 | expresión de cálculo/transformación: String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";                                                    |
| 339 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 341 | expresión de cálculo/transformación: String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA";                                              |
| 342 | expresión de cálculo/transformación: String zSSE_PAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";                                               |
| 343 | expresión de cálculo/transformación: String zentitledpend = zcomun + "SCO_ENTITLED";                                                     |
| 344 | expresión de cálculo/transformación: String zcant = zcomun + "SCO_VALUE";                                                                |
| 345 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 346 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 347 | expresión de cálculo/transformación: String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";                                                 |
| 348 | expresión de cálculo/transformación: String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA";                                                  |
| 349 | expresión de cálculo/transformación: String zPAY_FORM_TP = zraiz1 + "SSP_PAY_FORM_TP";                                                   |
| 350 | expresión de cálculo/transformación: String zID_FORMA_PAGO = zcomun2 + "SCO_ID_PAYM_TYPE";                                               |
| 351 | expresión de cálculo/transformación: String zN_FORMA_PAGO = zcomun2 + "SCO_NM_PAYM_TYPE";                                                |
| 352 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 353 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 354 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 355 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 357 | expresión de cálculo/transformación: String zbID_PAY_FORMULA = zcomun6 + "SSE_ID_PAY_FORMULA"; //fórmula de pago                         |
| 358 | expresión de cálculo/transformación: String zbPAY_FORM_TP = zcomun6 + "SSE_PAY_FORM_TP"; //tipo de fórmula de pago                       |
| 360 | expresión de cálculo/transformación: String zFEC_EFECTO = zcomun3 + "SSP_FEC_EFECTO";                                                    |
| 605 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 663 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |
| 722 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 269 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 270 | ../../sse_generico/espanol/generico_links.jsp      |
| 751 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 756 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 405 | /iconos/noname_beneficiarios_72_100.gif                         |
| 412 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 421 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 422 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 427 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 592 | javascript:comprobar_previo();                                  |
| 593 | /iconos/icono_enviar_ess_36_36.gif                              |
| 681 | javascript:pendientes(                                          |
| 682 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 742 | javascript:pendientes(                                          |
| 743 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 185 | sse_generico/generico_actualizar.jsp                            |
| 269 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 270 | ../../sse_generico/espanol/generico_links.jsp                   |
| 287 | sse_g2/sse_g2_p2_add_iban.jsp                                   |
| 751 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 756 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 269 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 270 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 751 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 756 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                    |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 412 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                       |
| BASE   | 421 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                       |
| BASE   | 427 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 592 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                       |
| BASE   | 681 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 742 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 185 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                       |
| BASE   | 269 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 270 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 287 | sse_g2/sse_g2_p2_add_iban.jsp                                   | ausente    | P06                                                                                                       |
| BASE   | 751 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 756 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_add_iban.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
