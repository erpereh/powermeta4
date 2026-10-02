# Dar de alta otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_add_n.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_n.jsp) | `94b73768ee23917b21df67c57942aa55397f2795f483ccbe8b52d80c47632bbd` |    694 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p2_add_n.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p2_add_n.jsp) | `94b73768ee23917b21df67c57942aa55397f2795f483ccbe8b52d80c47632bbd` |    694 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_add_n.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                 |
| --- | ------------------------------------------------------------------------ |
| 7   | Dar de alta otras cuentas bancarias                                      |
| 331 | Dar de alta otras cuentas bancarias                                      |
| 337 | Agrega una nueva cuenta bancaria o beneficiario. Otras cuentas bancarias |
| 350 | Otras cuentas bancarias                                                  |
| 401 | * Inicio                                                                 |
| 411 | * Beneficiario                                                           |
| 412 | [valor dinámico] ', ' ');"&gt;                                           |
| 443 | Oficina                                                                  |
| 444 | DC                                                                       |
| 445 | Número cuenta                                                            |
| 466 | * Código bancario                                                        |
| 470 | Tipo de importe                                                          |
| 471 | Fijo Porcentaje                                                          |
| 477 | * Importe :                                                              |
| 533 | Titular                                                                  |
| 534 | Inicio                                                                   |
| 535 | Número de cuenta                                                         |
| 536 | Tipo de importe                                                          |
| 537 | Importe                                                                  |
| 550 | / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                  |
| 580 | Fijo Porcentaje Otro                                                     |
| 599 | %                                                                        |
| 606 | ');"&gt;                                                                 |
| 615 | / [valor dinámico]/[valor dinámico]/[valor dinámico]/                    |
| 645 | Fijo Porcentaje Otro                                                     |
| 665 | %                                                                        |
| 672 | ');"&gt;                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                             |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 335 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Dar de alta otras cuentas bancarias                                                                                           |
| 339 | a       | class=fuentedescripcion                                                                                                                                                                               |
| 342 | a       | class=enlacefuncional; title=Otras cuentas bancarias; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                  |
| 352 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21                                                                                                                                        |
| 353 | img     | alt=Otras cuentas bancarias; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)               |
| 357 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                       |
| 359 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 360 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                 |
| 361 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                         |
| 362 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                                                  |
| 363 | input   | class=fuenteformulario; type=hidden; name=SCO_ENTITLED; id=SCO_ENTITLED                                                                                                                               |
| 364 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT                                                                                                                           |
| 365 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA                                                                                                                   |
| 366 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 367 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                   |
| 368 | input   | class=fuenteformulario; type=hidden; name=DESDE_NACIONAL; id=DESDE_NACIONAL; value=1                                                                                                                  |
| 394 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA; value=&lt;%=zReglaPagoOriginal%&gt;; htmlsafe=true                                                               |
| 395 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 396 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 397 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=ES                                                                                                               |
| 398 | input   | class=fuenteformulario; type=hidden; name=SCO_IBAN_CODE; id=SCO_IBAN_CODE; value=ES                                                                                                                   |
| 413 | select  | id=SCO_ID_PERSON; class=fuenteformulario; name=SCO_ID_PERSON; title=Selecciona el beneficiario de la cuenta                                                                                           |
| 414 | option  | value=                                                                                                                                                                                                |
| 417 | option  | value=&lt;%=IdPerson%&gt;                                                                                                                                                                             |
| 421 | option  | value=&lt;%=IdFamilyP%&gt;; onclick=javascript:modificarFormulaPago('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                    |
| 435 | input   | type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zTipoPago%&gt;                                                                                                                   |
| 449 | input   | class=fuenteformulario; id=SCO_ID_BANK1; type=text; size=4; name=SCO_ID_BANK1; maxlength=4; tabindex=6; title=Escribe el código de la entidad                                                         |
| 452 | input   | class=fuenteformulario; id=SCO_ID_BANK2; type=text; size=4; name=SCO_ID_BANK2; maxlength=4; tabindex=7; title=Escribe el código identificativo de la sucursal                                         |
| 453 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH                                                                                                                   |
| 456 | input   | class=fuenteformulario; id=SSP_DC; size=2; name=SSP_DC; type=text; maxlength=2; title=Escribe el dígito de control; tabindex=8                                                                        |
| 459 | input   | class=fuenteformulario; size=11; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; maxlength=10; tabindex=9; title=Escribe el código identificativo de la cuenta bancaria                    |
| 472 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(1);; value=1; checked=presente; confirmar condición si dinámico |
| 473 | input   | id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; onclick=javascript:habilitar(2);; value=2                                                    |
| 481 | input   | id=SCO_VALUE; name=SCO_VALUE; size=10; maxlength=20; class=fuenteformulario; type=text; tabindex=10; title=Escribe el importe del pago                                                                |
| 484 | select  | disabled=disabled; class=fuenteformulario; title=Escoge una moneda                                                                                                                                    |
| 485 | option  | value=                                                                                                                                                                                                |
| 492 | option  |                                                                                                                                                                                                       |
| 500 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_CURRENCY; id=SCO_ID_CURRENCY; value=EUR                                                                                                              |
| 510 | a       | href=javascript:comprobar_previo();; title=Enviar                                                                                                                                                     |
| 511 | img     | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                   |
| 606 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 607 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |
| 673 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                |
| 674 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 193 | estado          | getParameter(request,"estado")   |
| 194 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 193 | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 194 | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 208 | zsubsesion              | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 209 | zmeta4object            | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 210 | znodo                   | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 211 | znodo1                  | "M4T_PAYM_FORMULA"                                                             | M4T_PAYM_FORMULA                                                                                                                         |
| 212 | znodo2                  | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                         |
| 213 | znodo3                  | "M4T_OTHER_PDATA"                                                              | M4T_OTHER_PDATA                                                                                                                          |
| 214 | znodo4                  | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                          |
| 215 | znodo5                  | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                         |
| 216 | znodo6                  | "M4T_FAMILY_LIST"                                                              | M4T_FAMILY_LIST                                                                                                                          |
| 217 | ztipocarga              | "SSE"                                                                          | SSE                                                                                                                                      |
| 219 | zventanas               | "10"                                                                           | 10                                                                                                                                       |
| 220 | zvuelta                 | 5                                                                              | 5                                                                                                                                        |
| 221 | zdireccion              | "sse_g2/sse_g2_p2_add.jsp"                                                     | sse_g2/sse_g2_p2_add.jsp                                                                                                                 |
| 222 | zestado                 | "21"                                                                           | 21                                                                                                                                       |
| 223 | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 225 | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 226 | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 227 | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 228 | zmove                   | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 229 | zlectura                | zsubsesion + "!" + znodo                                                       | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA                                                                                                      |
| 230 | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 232 | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 233 | zmove1                  | znodo1 + ":" + znodo1 + "[FIRST]"                                              | M4T_PAYM_FORMULA{":"}M4T_PAYM_FORMULA{"[FIRST]"}                                                                                         |
| 234 | zlectura1               | zsubsesion + "!" + znodo1                                                      | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA                                                                                                     |
| 235 | zraiz1                  | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                                    | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.                                                                               |
| 237 | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 238 | zmove2                  | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                         |
| 239 | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 241 | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 242 | zmove3                  | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                                                           |
| 243 | zlectura3               | zsubsesion + "!" + znodo3                                                      | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA                                                                                                      |
| 244 | zraiz3                  | zsubsesion + "!" + znodo3 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}                                                                                                 |
| 245 | zcomun3                 | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 247 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 248 | zmove4                  | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_PERSON_BANK{":"}M4T_PERSON_BANK{"[FIRST]"}                                                                                           |
| 249 | zlectura4               | zsubsesion + "!" + znodo4                                                      | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK                                                                                                      |
| 250 | zraiz4                  | zsubsesion + "!" + znodo4 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"."}                                                                                                 |
| 252 | zoutputdef5             | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 253 | zmove5                  | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                         |
| 254 | zcomun5                 | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 256 | zoutputdef6             | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 257 | zmove6                  | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_FAMILY_LIST{":"}M4T_FAMILY_LIST{"[FIRST]"}                                                                                           |
| 258 | zcomun6                 | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 260 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                          |
| 263 | zBANCOPEND              | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                   |
| 264 | zCUENTAPEND             | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                   |
| 265 | zDCPEND                 | zcomun + "SSP_DC"                                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                               |
| 266 | zSTARTPEND              | zcomun + "SCO_DT_START"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                         |
| 267 | zIDPAYMTYPE             | zcomun + "SCO_ID_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                     |
| 268 | zPAYMTYPE               | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                     |
| 269 | zNCURRPEND              | zcomun + "NM_CURRENCY"                                                         | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 270 | zIDCURRPEND             | zcomun + "SCO_ID_CURRENCY"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}                                      |
| 271 | zSCOIDPAYMTYPEPARAMPEND | zcomun + "SCO_ID_PAYM_TYPE_PARAM"                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE_PARAM"}                               |
| 272 | zN_FORMULAPEND          | zcomun + "SCO_NM_PAYMFORMULA"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                   |
| 273 | zSSE_PAY_FORM_TP        | zcomun + "SSP_PAY_FORM_TP"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}                                      |
| 274 | zentitledpend           | zcomun + "SCO_ENTITLED"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}                                         |
| 275 | zcant                   | zcomun + "SCO_VALUE"                                                           | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}                                            |
| 276 | zORDINAL                | zcomun + "ORDINAL"                                                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 277 | zNACCION                | zcomun + "N_ACCION"                                                            | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 278 | zID_FORMULA             | zraiz1 + "SCO_ID_PAY_FORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_ID_PAY_FORMULA"}                                                         |
| 279 | zN_FORMULA              | zraiz1 + "SCO_NM_PAYMFORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_NM_PAYMFORMULA"}                                                         |
| 280 | zPAY_FORM_TP            | zraiz1 + "SSP_PAY_FORM_TP"                                                     | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SSP_PAY_FORM_TP"}                                                            |
| 281 | zID_FORMA_PAGO          | zcomun2 + "SCO_ID_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}                                   |
| 282 | zN_FORMA_PAGO           | zcomun2 + "SCO_NM_PAYM_TYPE"                                                   | M4T_PAYMENT_TYPE{":"}SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                   |
| 283 | zID_CURR                | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                        |
| 284 | zN_CURR                 | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                        |
| 285 | zIBANCODEPEND           | zcomun + "SCO_IBAN_CODE"                                                       | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                        |
| 288 | zbID_PAY_FORMULA        | zcomun6 + "SSE_ID_PAY_FORMULA"                                                 | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_PAY_FORMULA"}                                   |
| 289 | zbPAY_FORM_TP           | zcomun6 + "SSE_PAY_FORM_TP"                                                    | M4T_FAMILY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[&amp;VAR.m4lix]"}{"."}{"SSE_PAY_FORM_TP"}                                      |
| 291 | zFEC_EFECTO             | zcomun3 + "SSP_FEC_EFECTO"                                                     | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_FEC_EFECTO"}                                       |
| 310 | zcount                  | 0                                                                              | 0                                                                                                                                        |
| 311 | zcounti                 | 0                                                                              | 0                                                                                                                                        |
| 312 | zcount2                 | 0                                                                              | 0                                                                                                                                        |
| 313 | zcounti2                | 0                                                                              | 0                                                                                                                                        |
| 314 | zcount5                 | 0                                                                              | 0                                                                                                                                        |
| 315 | zcounti5                | 0                                                                              | 0                                                                                                                                        |
| 325 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 326 | zcountv2                | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                 |
| 327 | zcountv5                | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                 |
| 372 | sFechaEfecto            | ""                                                                             |                                                                                                                                          |
| 379 | bPuedeCrearCuenta       | true                                                                           | true                                                                                                                                     |
| 386 | zReglaPagoOriginal      | ""                                                                             |                                                                                                                                          |
| 429 | zTipoPago               | "4"                                                                            | 4                                                                                                                                        |
| 487 | zMonedaActual           | ""                                                                             |                                                                                                                                          |
| 523 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 524 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 525 | zposicions              | "0"                                                                            | 0                                                                                                                                        |
| 526 | zcontrol                | 0                                                                              | 0                                                                                                                                        |
| 527 | zposicion               | 0                                                                              | 0                                                                                                                                        |
| 552 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 553 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 554 | zDC_0                   | ""                                                                             |                                                                                                                                          |
| 555 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 556 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 557 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 581 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 585 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 586 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |
| 617 | zidpaympend             | ""                                                                             |                                                                                                                                          |
| 618 | zidstandardpend         | ""                                                                             |                                                                                                                                          |
| 619 | zDC_0                   | ""                                                                             |                                                                                                                                          |
| 620 | zidbankbranchTEMP       | ""                                                                             |                                                                                                                                          |
| 621 | zidbank1TEMP            | ""                                                                             |                                                                                                                                          |
| 622 | zidbank2TEMP            | ""                                                                             |                                                                                                                                          |
| 646 | ztipoimporte            | -1                                                                             | -1                                                                                                                                       |
| 650 | ztipoimporteTEMP        | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 651 | i                       | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 294 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                                       |
| 295 | m4:beginjob  |                                                                                                                                                              |
| 296 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                                                  |
| 297 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                     |
| 297 | m4:param     | name=CARGA; value=SSE                                                                                                                                        |
| 298 | m4:outputdef | m4alias=SSE_OTHER_PDATA                                                                                                                                      |
| 298 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 299 | m4:outputdef | m4alias=M4T_PAYM_FORMULA                                                                                                                                     |
| 299 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 300 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                     |
| 300 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 301 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                                      |
| 301 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 302 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                      |
| 302 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 303 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                     |
| 303 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 304 | m4:outputdef | m4alias=M4T_FAMILY_LIST                                                                                                                                      |
| 304 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_FAMILY_LIST{"[*]"}                                                                                               |
| 305 | m4:endjob    |                                                                                                                                                              |
| 306 | m4:move      |                                                                                                                                                              |
| 306 | m4:param     | name=SSE_OTHER_PDATA; value=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 307 | m4:move      |                                                                                                                                                              |
| 307 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_PAYMENT_TYPE{":"}M4T_PAYMENT_TYPE{"[FIRST]"}                                                                                 |
| 308 | m4:move      |                                                                                                                                                              |
| 308 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                 |
| 408 | m4:item      | item=SSP_FEC_EFECTO; htmlsafe=true; outputdef=M4T_OTHER_PDATA                                                                                                |
| 415 | m4:item      | m4varname=IdPerson; item=SSE_P_ID_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                           |
| 418 | m4:dataloop  | outputdef=M4T_FAMILY_LIST                                                                                                                                    |
| 419 | m4:item      | m4varname=IdFamilyP; item=STD_ID_FAMILY_PERSON; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                     |
| 421 | m4:item      | item=SSE_PAY_FORM_TP; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                               |
| 421 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=M4T_FAMILY_LIST                                                                                                   |
| 486 | m4:dataloop  | outputdef=M4T_RCH_CURRENCY                                                                                                                                   |
| 496 | m4:item      | item=ID_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 496 | m4:item      | item=NM_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 540 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                    |
| 547 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 548 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 549 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 573 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 573 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; htmlsafe=true                                             |
| 573 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 576 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 599 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 601 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 612 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 613 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 614 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 638 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                 |
| 638 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                 |
| 641 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 664 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                                |
| 665 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 667 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 692 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 318 | getCount         | znodo,zsubsesion,znodo                           |
| 319 | getCountInClient | znodo,zsubsesion,znodo                           |
| 320 | getCount         | znodo2,zsubsesion,znodo2                         |
| 321 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 322 | getCount         | znodo5,zsubsesion,znodo5                         |
| 323 | getCountInClient | znodo5,zsubsesion,znodo5                         |
| 376 | getItem          | znodo3,zsubsesion,znodo3,"","SSP_FEC_EFECTO"     |
| 390 | getItem          | znodo6,zsubsesion,znodo6,"","SSE_ID_PAY_FORMULA" |
| 433 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 490 | getItem          | znodo5,zsubsesion,znodo5,"","ID_CURRENCY"        |
| 560 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 561 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 562 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 565 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 585 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |
| 625 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"     |
| 626 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"      |
| 627 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"   |
| 630 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"               |
| 650 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos                    |
| --- | -------------------- | ----------------------------- |
| 17  | getCheckedValue      | radioObj                      |
| 36  | setCheckedValue      | radioObj, newValue            |
| 54  | habilitar            | tipoImporte                   |
| 77  | comprobar_previo     |                               |
| 161 | pendientes           | ord                           |
| 169 | modificarFormulaPago | idFormulaPago,tipoFormulaPago |

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
| 83  | v1 = new m4objvalidacion('_num',4,4,'',false);                                                                                           |
| 84  | v2 = new m4objvalidacion('_num',2,2,'',false);                                                                                           |
| 85  | v3 = new m4objvalidacion('_num',10,10,'',false);                                                                                         |
| 98  | if ((null==val_cant) &#124;&#124; (''== val_cant)){                                                                                      |
| 104 | if ((val_benef == null) &#124;&#124; (val_benef == "")){                                                                                 |
| 107 | }else{                                                                                                                                   |
| 118 | if (v1.resultado == false){                                                                                                              |
| 123 | if (v1.resultado == false){                                                                                                              |
| 128 | if (v2.resultado == false){                                                                                                              |
| 133 | if (v3.resultado == false){                                                                                                              |
| 137 | if ((val_branch != "") &amp;&amp; (val_account !="") &amp;&amp; (val_dc!="")){                                                           |
| 139 | if (valordc!=val_dc){                                                                                                                    |
| 152 | if (1==falta_valor){                                                                                                                     |
| 153 | alert(mensaje);                                                                                                                          |
| 154 | } else {                                                                                                                                 |
| 171 | if (idFormulaPago != "" &amp;&amp; idFormulaPago != null &amp;&amp; tipoFormulaPago != null) {                                           |
| 183 | } else {                                                                                                                                 |
| 195 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 198 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 380 | if (sFechaEfecto == null &#124;&#124; sFechaEfecto.equals("")) {                                                                         |
| 393 | if (false) { %&gt;                                                                                                                       |
| 493 | &lt;% if (zMonedaActual.equals("EUR")) { %&gt;                                                                                           |
| 522 | if (zcounti &gt; 0) {                                                                                                                    |
| 545 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 567 | if (zDC_0.length() == 1) {                                                                                                               |
| 571 | if (zidpaympend.equals("4") == true) {                                                                                                   |
| 572 | if (zidstandardpend.equals("") == true) { %&gt;                                                                                          |
| 574 | &lt;% } else { %&gt;                                                                                                                     |
| 591 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 593 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 595 | &lt;% } else { %&gt;                                                                                                                     |
| 600 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 602 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 610 | &lt;%}else{%&gt;                                                                                                                         |
| 632 | if (zDC_0.length() == 1) {                                                                                                               |
| 636 | if (zidpaympend.equals("4")== true) {                                                                                                    |
| 637 | if (zidstandardpend.equals("")== true){%&gt;                                                                                             |
| 639 | &lt;%} else {%&gt;                                                                                                                       |
| 656 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 658 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 660 | &lt;% } else { %&gt;                                                                                                                     |
| 666 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 668 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 79  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pasan la validación o no están rellenos:" + "\n";           |
| 92  | expresión de cálculo/transformación: var val_branch = val_bank1 + val_bank2;                                                             |
| 224 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 226 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 227 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 228 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 229 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 230 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 232 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 233 | expresión de cálculo/transformación: String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";                                                   |
| 234 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 235 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                       |
| 237 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 238 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 239 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 241 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 242 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 243 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                       |
| 244 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                    |
| 245 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 247 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 248 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 249 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                       |
| 250 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                    |
| 252 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 253 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 254 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 256 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 257 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 258 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 260 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 263 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 264 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 265 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 266 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 267 | expresión de cálculo/transformación: String zIDPAYMTYPE = zcomun + "SCO_ID_PAYM_TYPE";                                                   |
| 268 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 269 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 270 | expresión de cálculo/transformación: String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";                                                    |
| 272 | expresión de cálculo/transformación: String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA";                                              |
| 273 | expresión de cálculo/transformación: String zSSE_PAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";                                               |
| 274 | expresión de cálculo/transformación: String zentitledpend = zcomun + "SCO_ENTITLED";                                                     |
| 275 | expresión de cálculo/transformación: String zcant = zcomun + "SCO_VALUE";                                                                |
| 276 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 277 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 278 | expresión de cálculo/transformación: String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";                                                 |
| 279 | expresión de cálculo/transformación: String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA";                                                  |
| 280 | expresión de cálculo/transformación: String zPAY_FORM_TP = zraiz1 + "SSP_PAY_FORM_TP";                                                   |
| 281 | expresión de cálculo/transformación: String zID_FORMA_PAGO = zcomun2 + "SCO_ID_PAYM_TYPE";                                               |
| 282 | expresión de cálculo/transformación: String zN_FORMA_PAGO = zcomun2 + "SCO_NM_PAYM_TYPE";                                                |
| 283 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 284 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 285 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 286 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 288 | expresión de cálculo/transformación: String zbID_PAY_FORMULA = zcomun6 + "SSE_ID_PAY_FORMULA"; //fórmula de pago                         |
| 289 | expresión de cálculo/transformación: String zbPAY_FORM_TP = zcomun6 + "SSE_PAY_FORM_TP"; //tipo de fórmula de pago                       |
| 291 | expresión de cálculo/transformación: String zFEC_EFECTO = zcomun3 + "SSP_FEC_EFECTO";                                                    |
| 524 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 568 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 588 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |
| 633 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                |
| 653 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 205 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 206 | ../../sse_generico/espanol/generico_links.jsp      |
| 682 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 687 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 335 | /iconos/noname_beneficiarios_72_100.gif                         |
| 342 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 352 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       |
| 353 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 357 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 510 | javascript:comprobar_previo();                                  |
| 511 | /iconos/icono_enviar_ess_36_36.gif                              |
| 606 | javascript:pendientes(                                          |
| 607 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 673 | javascript:pendientes(                                          |
| 674 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 164 | sse_generico/generico_actualizar.jsp                            |
| 205 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 206 | ../../sse_generico/espanol/generico_links.jsp                   |
| 221 | sse_g2/sse_g2_p2_add.jsp                                        |
| 682 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 687 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 205 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 206 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 682 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 687 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 342 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 352 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 357 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 510 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 606 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 673 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 164 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 205 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 206 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 221 | sse_g2/sse_g2_p2_add.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| COLL   | 682 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 687 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 205 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 206 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 682 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 687 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 342 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 352 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 357 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 510 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 606 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 673 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 164 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 205 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 206 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 221 | sse_g2/sse_g2_p2_add.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| IBER   | 682 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 687 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_add_n.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
