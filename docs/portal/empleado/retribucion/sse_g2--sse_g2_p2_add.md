# Dar de alta otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_add.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g2/espanol/sse_g2_p2_add.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p2_add.jsp) | `eb3aab8fd0ef8797f78dad7fe253094317a0fdb231029b053b7f6d05c3d437f3` |    698 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g2/espanol/sse_g2_p2_add.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p2_add.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Dar de alta otras cuentas bancarias                                                                                                  |
| 335 | Dar de alta otras cuentas bancarias                                                                                                  |
| 341 | Agrega una nueva cuenta bancaria o beneficiario. El cambio será efectivo a partir del día 1 del próximo mes. Otras cuentas bancarias |
| 354 | Otras cuentas bancarias                                                                                                              |
| 405 | * Inicio                                                                                                                             |
| 415 | * Beneficiario                                                                                                                       |
| 416 | [valor dinámico] ', ' ');"&gt;                                                                                                       |
| 447 | Oficina                                                                                                                              |
| 448 | DC                                                                                                                                   |
| 449 | Número cuenta                                                                                                                        |
| 470 | * Código bancario                                                                                                                    |
| 474 | Tipo de importe                                                                                                                      |
| 475 | Fijo Porcentaje                                                                                                                      |
| 481 | * Importe :                                                                                                                          |
| 537 | Titular                                                                                                                              |
| 538 | Inicio                                                                                                                               |
| 539 | Número de cuenta                                                                                                                     |
| 540 | Tipo de importe                                                                                                                      |
| 541 | Importe                                                                                                                              |
| 554 | / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                                              |
| 584 | Fijo Porcentaje Otro                                                                                                                 |
| 603 | %                                                                                                                                    |
| 610 | ');"&gt;                                                                                                                             |
| 619 | / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                                                |
| 649 | Fijo Porcentaje Otro                                                                                                                 |
| 669 | %                                                                                                                                    |
| 676 | ');"&gt;                                                                                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                             |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 339 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Dar de alta otras cuentas bancarias                                                                                           |
| 343 | a       | class=fuentedescripcion                                                                                                                                                                               |
| 346 | a       | class=enlacefuncional; title=Otras cuentas bancarias; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                  |
| 356 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                                                                        |
| 357 | img     | alt=Otras cuentas bancarias; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)               |
| 361 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                       |
| 363 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 364 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                 |
| 365 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                         |
| 366 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 367 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED                                                                                                                               |
| 368 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT                                                                                                                           |
| 369 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA                                                                                                                   |
| 370 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 371 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                   |
| 372 | input   | class=fuenteformulario; type=hidden; name=DESDE_NACIONAL; id=DESDE_NACIONAL; value=1                                                                                                                  |
| 398 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA; value=&lt;%=zReglaPagoOriginal%&gt;; htmlsafe=true                                                               |
| 399 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 400 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 401 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 402 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                   |
| 417 | select  | id=SCO_ID_PERSON; class=fuenteformulario; name=SCO_ID_PERSON; title=Selecciona el beneficiario de la cuenta                                                                                           |
| 421 | option  | value=&lt;%=IdPerson%&gt;                                                                                                                                                                             |
| 425 | option  | value=&lt;%=IdFamilyP%&gt;; onclick=javascript:modificarFormulaPago('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                    |
| 439 | input   | type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zTipoPago%&gt;                                                                                                                   |
| 453 | input   | class=fuenteformulario; id=SCO_ID_BANK1; type=text; size=4; name=SCO_ID_BANK1; maxlength=4; tabindex=6; title=Escribe el código de la entidad                                                         |
| 456 | input   | class=fuenteformulario; id=SCO_ID_BANK2; type=text; size=4; name=SCO_ID_BANK2; maxlength=4; tabindex=7; title=Escribe el código identificativo de la sucursal                                         |
| 457 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 460 | input   | class=fuenteformulario; id=SSP_DC; size=2; name=SSP_DC; type=text; maxlength=2; title=Escribe el dígito de control; tabindex=8                                                                        |
| 463 | input   | class=fuenteformulario; size=11; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; maxlength=10; tabindex=9; title=Escribe el código identificativo de la cuenta bancaria                    |
| 476 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(1);; value=1; checked=presente; confirmar condición si dinámico |
| 477 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(2);; value=2                                                    |
| 485 | input   | id=SCO_VALUE; name=SCO_VALUE; size=10; maxlength=20; class=fuenteformulario; type=text; tabindex=10; title=Escribe el importe del pago                                                                |
| 488 | select  | class=fuenteformulario; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY; title=Escoge una moneda; disabled=presente; confirmar condición si dinámico                                                         |
| 489 | option  | value=                                                                                                                                                                                                |
| 496 | option  |                                                                                                                                                                                                       |
| 504 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_CURRENCY; id=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 514 | a       | href=javascript:comprobar_previo();; title=Enviar                                                                                                                                                     |
| 515 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                   |
| 610 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 611 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |
| 677 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 678 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 197 | estado          | getParameter(request,"estado")   |
| 198 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 197 | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 198 | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 212 | zsubsesion              | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 213 | zmeta4object            | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 214 | znodo                   | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 215 | znodo1                  | "M4T_PAYM_FORMULA"                                                             | M4T_PAYM_FORMULA                                                                                                                         |
| 216 | znodo2                  | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                         |
| 217 | znodo3                  | "M4T_OTHER_PDATA"                                                              | M4T_OTHER_PDATA                                                                                                                          |
| 218 | znodo4                  | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                          |
| 219 | znodo5                  | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                         |
| 220 | znodo6                  | "M4T_FAMILY_LIST"                                                              | M4T_FAMILY_LIST                                                                                                                          |
| 221 | ztipocarga              | "SSE"                                                                          | SSE                                                                                                                                      |
| 223 | zventanas               | "10"                                                                           | 10                                                                                                                                       |
| 224 | zvuelta                 | 5                                                                              | 5                                                                                                                                        |
| 225 | zdireccion              | "sse_g2/sse_g2_p2_add.jsp"                                                     | sse_g2/sse_g2_p2_add.jsp                                                                                                                 |
| 226 | zestado                 | "21"                                                                           | 21                                                                                                                                       |
| 227 | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 229 | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 230 | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 231 | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 232 | zmove                   | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 233 | zlectura                | zsubsesion + "!" + znodo                                                       | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA                                                                                                      |
| 234 | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 236 | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 237 | zmove1                  | znodo1 + ":" + znodo1 + "[FIRST]"                                              | M4T_PAYM_FORMULA{":"}M4T_PAYM_FORMULA{"[FIRST]"}                                                                                         |
| 238 | zlectura1               | zsubsesion + "!" + znodo1                                                      | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA                                                                                                     |
| 239 | zraiz1                  | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                                    | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.                                                                               |
| 241 | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 242 | zmove2                  | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                         |
| 243 | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 245 | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 246 | zmove3                  | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                                                           |
| 247 | zlectura3               | zsubsesion + "!" + znodo3                                                      | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA                                                                                                      |
| 248 | zraiz3                  | zsubsesion + "!" + znodo3 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}                                                                                                 |
| 249 | zcomun3                 | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 251 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 252 | zmove4                  | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                           |
| 253 | zlectura4               | zsubsesion + "!" + znodo4                                                      | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK                                                                                                      |
| 254 | zraiz4                  | zsubsesion + "!" + znodo4 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"."}                                                                                                 |
| 256 | zoutputdef5             | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 257 | zmove5                  | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                         |
| 258 | zcomun5                 | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 260 | zoutputdef6             | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 261 | zmove6                  | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_FAMILY_LIST{":"}M4T_FAMILY_LIST{"[FIRST]"}                                                                                           |
| 262 | zcomun6                 | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 264 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                       |
| 267 | zBANCOPEND              | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                   |
| 268 | zCUENTAPEND             | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                   |
| 269 | zDCPEND                 | zcomun + "SSP_DC"                                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                               |
| 270 | zSTARTPEND              | zcomun + "SCO_DT_START"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                         |
| 271 | zIDPAYMTYPE             | zcomun + "SCO_ID_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                     |
| 272 | zPAYMTYPE               | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                     |
| 273 | zNCURRPEND              | zcomun + "NM_CURRENCY"                                                         | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 274 | zIDCURRPEND             | zcomun + "SCO_ID_CURRENCY"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}                                      |
| 275 | zSCOIDPAYMTYPEPARAMPEND | zcomun + "SCO_ID_PAYM_TYPE_PARAM"                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE_PARAM"}                               |
| 276 | zN_FORMULAPEND          | zcomun + "SCO_NM_PAYMFORMULA"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                   |
| 277 | zSSE_PAY_FORM_TP        | zcomun + "SSP_PAY_FORM_TP"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}                                      |
| 278 | zentitledpend           | zcomun + "SCO_ENTITLED"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}                                         |
| 279 | zcant                   | zcomun + "SCO_VALUE"                                                           | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}                                            |
| 280 | zORDINAL                | zcomun + "ORDINAL"                                                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 281 | zNACCION                | zcomun + "N_ACCION"                                                            | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 282 | zID_FORMULA             | zraiz1 + "SCO_ID_PAY_FORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_ID_PAY_FORMULA"}                                                         |
| 283 | zN_FORMULA              | zraiz1 + "SCO_NM_PAYMFORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_NM_PAYMFORMULA"}                                                         |
| 284 | zPAY_FORM_TP            | zraiz1 + "SSP_PAY_FORM_TP"                                                     | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SSP_PAY_FORM_TP"}                                                            |
| 285 | zID_FORMA_PAGO          | zcomun2 + "SCO_ID_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                   |
| 286 | zN_FORMA_PAGO           | zcomun2 + "SCO_NM_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                   |
| 287 | zID_CURR                | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                        |
| 288 | zN_CURR                 | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                        |
| 289 | zIBANCODEPEND           | zcomun + "SCO_IBAN_CODE"                                                       | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                        |
| 292 | zbID_PAY_FORMULA        | zcomun6 + "SSE_ID_PAY_FORMULA"                                                 | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_PAY_FORMULA"}                                   |
| 293 | zbPAY_FORM_TP           | zcomun6 + "SSE_PAY_FORM_TP"                                                    | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_PAY_FORM_TP"}                                      |
| 295 | zFEC_EFECTO             | zcomun3 + "SSP_FEC_EFECTO"                                                     | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_FEC_EFECTO"}                                       |
| 314 | zcount                  | 0                                                                              | 0                                                                                                                                        |
| 315 | zcounti                 | 0                                                                              | 0                                                                                                                                        |
| 316 | zcount2                 | 0                                                                              | 0                                                                                                                                        |
| 317 | zcounti2                | 0                                                                              | 0                                                                                                                                        |
| 318 | zcount5                 | 0                                                                              | 0                                                                                                                                        |
| 319 | zcounti5                | 0                                                                              | 0                                                                                                                                        |
| 329 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 330 | zcountv2                | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                 |
| 331 | zcountv5                | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                 |
| 376 | sFechaEfecto            | ""                                                                             |                                                                                                                                          |
| 383 | bPuedeCrearCuenta       | true                                                                           | true                                                                                                                                     |
| 390 | zReglaPagoOriginal      | ""                                                                             |                                                                                                                                          |
| 433 | zTipoPago               | "4"                                                                            | 4                                                                                                                                        |
| 491 | zMonedaActual           | ""                                                                             |                                                                                                                                          |
| 527 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 528 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 529 | zposicions              | "0"                                                                            | 0                                                                                                                                        |
| 530 | zcontrol                | 0                                                                              | 0                                                                                                                                        |
| 531 | zposicion               | 0                                                                              | 0                                                                                                                                        |
| 556 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 557 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 558 | zDC_0                   | ""                                                                             |                                                                                                                                          |
| 559 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 560 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 561 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 585 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 589 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 590 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |
| 621 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 622 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 623 | zDC_0                   | ""                                                                             |                                                                                                                                          |
| 624 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 625 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 626 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 650 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 654 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 655 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 298 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                                       |
| 299 | m4:beginjob  |                                                                                                                                                              |
| 300 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                                                  |
| 301 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                  |
| 301 | m4:param     | name=CARGA; value=SSE                                                                                                                                        |
| 302 | m4:outputdef | m4alias=SSE_OTHER_PDATA                                                                                                                                      |
| 302 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 303 | m4:outputdef | m4alias=M4T_PAYM_FORMULA                                                                                                                                     |
| 303 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 304 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                     |
| 304 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 305 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                                      |
| 305 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 306 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                      |
| 306 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 307 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                     |
| 307 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 308 | m4:outputdef | m4alias=M4T_FAMILY_LIST                                                                                                                                      |
| 308 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 309 | m4:endjob    |                                                                                                                                                              |
| 310 | m4:move      |                                                                                                                                                              |
| 310 | m4:param     | name=SSE_OTHER_PDATA; value=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 311 | m4:move      |                                                                                                                                                              |
| 311 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                 |
| 312 | m4:move      |                                                                                                                                                              |
| 312 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                 |
| 412 | m4:item      | item=SSP_FEC_EFECTO; htmlsafe=true; outputdef=M4T_OTHER_PDATA                                                                                                |
| 419 | m4:item      | m4varname=IdPerson; item=SSE_P_ID_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                           |
| 422 | m4:dataloop  | outputdef=M4T_FAMILY_LIST                                                                                                                                    |
| 423 | m4:item      | m4varname=IdFamilyP; item=STD_ID_FAMILY_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                     |
| 425 | m4:item      | item=SSE_PAY_FORM_TP; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                               |
| 425 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                                   |
| 490 | m4:dataloop  | outputdef=M4T_RCH_CURRENCY                                                                                                                                   |
| 500 | m4:item      | item=ID_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 500 | m4:item      | item=NM_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 544 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                    |
| 551 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 552 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 553 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 577 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 577 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; htmlsafe=true                                             |
| 577 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 580 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 603 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 605 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 616 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 617 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 618 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 642 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 642 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 645 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 668 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                                |
| 669 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 671 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 696 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 322 | getCount         | znodo,zsubsesion,znodo                           |
| 323 | getCountInClient | znodo,zsubsesion,znodo                           |
| 324 | getCount         | znodo2,zsubsesion,znodo2                         |
| 325 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 326 | getCount         | znodo5,zsubsesion,znodo5                         |
| 327 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 380 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 394 | getItem          | znodo6,zsubsesion,znodo6,"","SSE_ID_PAY_FORMULA" |
| 437 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 494 | getItem          | znodo5,zsubsesion,znodo5,"","ID_CURRENCY"        |
| 564 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 565 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 566 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 569 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 589 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |
| 629 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 630 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 631 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 634 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 654 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos                    |
| --- | -------------------- | ----------------------------- |
| 17  | getCheckedValue      | radioObj                      |
| 36  | setCheckedValue      | radioObj, newValue            |
| 54  | habilitar            | tipoImporte                   |
| 81  | comprobar_previo     |                               |
| 165 | pendientes           | ord                           |
| 173 | modificarFormulaPago | idFormulaPago,tipoFormulaPago |

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
| 68  | } else if (tipoImporte == 2) {                                                                                                           |
| 72  | } else {                                                                                                                                 |
| 87  | v1 = new m4objvalidacion('_num',4,4,'',false);                                                                                           |
| 88  | v2 = new m4objvalidacion('_num',2,2,'',false);                                                                                           |
| 89  | v3 = new m4objvalidacion('_num',10,10,'',false);                                                                                         |
| 102 | if ((null==val_cant) &#124;&#124; (''== val_cant)){                                                                                      |
| 108 | if ((val_benef == null) &#124;&#124; (val_benef == "")){                                                                                 |
| 111 | }else{                                                                                                                                   |
| 122 | if (v1.resultado == false){                                                                                                              |
| 127 | if (v1.resultado == false){                                                                                                              |
| 132 | if (v2.resultado == false){                                                                                                              |
| 137 | if (v3.resultado == false){                                                                                                              |
| 141 | if ((val_branch != "") &amp;&amp; (val_account !="") &amp;&amp; (val_dc!="")){                                                           |
| 143 | if (valordc!=val_dc){                                                                                                                    |
| 156 | if (1==falta_valor){                                                                                                                     |
| 157 | alert(mensaje);                                                                                                                          |
| 158 | } else {                                                                                                                                 |
| 175 | if (idFormulaPago != "" &amp;&amp; idFormulaPago != null &amp;&amp; tipoFormulaPago != null) {                                           |
| 187 | } else {                                                                                                                                 |
| 199 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 202 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 384 | if (sFechaEfecto == null &#124;&#124; sFechaEfecto.equals("")) {                                                                         |
| 397 | if (false) { %&gt;                                                                                                                       |
| 497 | &lt;% if (zMonedaActual.equals("EUR")) { %&gt;                                                                                           |
| 526 | if (zcounti &gt; 0) {                                                                                                                    |
| 549 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 571 | if (zDC_0.length() == 1) {                                                                                                               |
| 575 | if (zidpaympend.equals("4") == true) {                                                                                                   |
| 576 | if (zidstandardpend.equals("") == true) { %&gt;                                                                                          |
| 578 | &lt;% } else { %&gt;                                                                                                                     |
| 595 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 597 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 599 | &lt;% } else { %&gt;                                                                                                                     |
| 604 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 606 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 614 | &lt;%}else{%&gt;                                                                                                                         |
| 636 | if (zDC_0.length() == 1) {                                                                                                               |
| 640 | if (zidpaympend.equals("4")== true) {                                                                                                    |
| 641 | if (zidstandardpend.equals("")== true){%&gt;                                                                                             |
| 643 | &lt;%} else {%&gt;                                                                                                                       |
| 660 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 662 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 664 | &lt;% } else { %&gt;                                                                                                                     |
| 670 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 672 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 83  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pasan la validación o no están rellenos:" + "\n";           |
| 96  | expresión de cálculo/transformación: var val_branch = val_bank1 + val_bank2;                                                             |
| 228 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 230 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 231 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 232 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 233 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 234 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 236 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 237 | expresión de cálculo/transformación: String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";                                                   |
| 238 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 239 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                       |
| 241 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 242 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 243 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 245 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 246 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 247 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                       |
| 248 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                    |
| 249 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 251 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 252 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 253 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                       |
| 254 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                    |
| 256 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 257 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 258 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 260 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 261 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 262 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 264 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 267 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 268 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 269 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 270 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 271 | expresión de cálculo/transformación: String zIDPAYMTYPE = zcomun + "SCO_ID_PAYM_TYPE";                                                   |
| 272 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 273 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 274 | expresión de cálculo/transformación: String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";                                                    |
| 276 | expresión de cálculo/transformación: String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA";                                              |
| 277 | expresión de cálculo/transformación: String zSSE_PAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";                                               |
| 278 | expresión de cálculo/transformación: String zentitledpend = zcomun + "SCO_ENTITLED";                                                     |
| 279 | expresión de cálculo/transformación: String zcant = zcomun + "SCO_VALUE";                                                                |
| 280 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 281 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 282 | expresión de cálculo/transformación: String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";                                                 |
| 283 | expresión de cálculo/transformación: String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA";                                                  |
| 284 | expresión de cálculo/transformación: String zPAY_FORM_TP = zraiz1 + "SSP_PAY_FORM_TP";                                                   |
| 285 | expresión de cálculo/transformación: String zID_FORMA_PAGO = zcomun2 + "SCO_ID_PAYM_TYPE";                                               |
| 286 | expresión de cálculo/transformación: String zN_FORMA_PAGO = zcomun2 + "SCO_NM_PAYM_TYPE";                                                |
| 287 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 288 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 289 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 290 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 292 | expresión de cálculo/transformación: String zbID_PAY_FORMULA = zcomun6 + "SSE_ID_PAY_FORMULA"; //fórmula de pago                         |
| 293 | expresión de cálculo/transformación: String zbPAY_FORM_TP = zcomun6 + "SSE_PAY_FORM_TP"; //tipo de fórmula de pago                       |
| 295 | expresión de cálculo/transformación: String zFEC_EFECTO = zcomun3 + "SSP_FEC_EFECTO";                                                    |
| 528 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 572 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 592 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |
| 637 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 657 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 209 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 210 | ../../sse_generico/espanol/generico_links.jsp      |
| 686 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 691 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 339 | /iconos/noname_beneficiarios_72_100.gif                         |
| 346 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 356 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 357 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 361 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 514 | javascript:comprobar_previo();                                  |
| 515 | /iconos/icono_enviar_ess_36_36.gif                              |
| 610 | javascript:pendientes(                                          |
| 611 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 677 | javascript:pendientes(                                          |
| 678 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 168 | sse_generico/generico_actualizar.jsp                            |
| 209 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 210 | ../../sse_generico/espanol/generico_links.jsp                   |
| 225 | sse_g2/sse_g2_p2_add.jsp                                        |
| 686 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 691 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 209 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 210 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 686 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 691 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                    |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 346 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                       |
| BASE   | 356 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                       |
| BASE   | 361 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 514 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                       |
| BASE   | 610 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 677 | javascript:pendientes(                                          | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 168 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                       |
| BASE   | 209 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 210 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 225 | sse_g2/sse_g2_p2_add.jsp                                        | ausente    | P06                                                                                                       |
| BASE   | 686 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 691 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_add.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
