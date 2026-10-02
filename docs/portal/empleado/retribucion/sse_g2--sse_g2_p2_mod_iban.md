# Modificar otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_mod_iban.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p2_mod_iban.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_mod_iban.jsp) | `2d30413d06eb94a78da2c078f8ea783879e037a52e76f399ccc074ea1550093d` |    706 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p2_mod_iban.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p2_mod_iban.jsp) | `2d30413d06eb94a78da2c078f8ea783879e037a52e76f399ccc074ea1550093d` |    706 |
| BASE / español    | [sse_g2/espanol/sse_g2_p2_mod_iban.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p2_mod_iban.jsp)                             | `2d30413d06eb94a78da2c078f8ea783879e037a52e76f399ccc074ea1550093d` |    706 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p2_mod_iban.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_mod_iban.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Modificar otras cuentas bancarias                                                                                                                                                                                                |
| 372 | Modificar otras cuentas bancarias (SEPA)                                                                                                                                                                                         |
| 376 | Modifica tus otras cuentas bancarias. Ten en cuenta que la fecha en que el cambio será efectivo se calculará en función de los procesos de nómina calculados. Otras cuentas bancarias                                            |
| 406 | Otras cuentas bancarias                                                                                                                                                                                                          |
| 410 | * Inicio                                                                                                                                                                                                                         |
| 417 | * Titular                                                                                                                                                                                                                        |
| 429 | Número cuenta                                                                                                                                                                                                                    |
| 443 | * Código bancario                                                                                                                                                                                                                |
| 448 | * Código País                                                                                                                                                                                                                    |
| 449 | "&gt; ( ) " value=" "&gt;                                                                                                                                                                                                        |
| 484 | Clave IBAN                                                                                                                                                                                                                       |
| 492 | Tipo de importe                                                                                                                                                                                                                  |
| 493 | Fijo Porcentaje                                                                                                                                                                                                                  |
| 505 | * Importe                                                                                                                                                                                                                        |
| 506 | "&gt; %                                                                                                                                                                                                                          |
| 531 | Póngase en contacto con el departamento de Recursos Humanos para asignarle un importe a este beneficiario. No es posible modificar los datos de la cuenta bancaria. Por favor, consulte con el departamento de Recursos Humanos. |
| 561 | Titular                                                                                                                                                                                                                          |
| 562 | Inicio                                                                                                                                                                                                                           |
| 563 | Número de cuenta                                                                                                                                                                                                                 |
| 564 | Tipo de importe                                                                                                                                                                                                                  |
| 565 | Importe                                                                                                                                                                                                                          |
| 578 | / / / [valor dinámico]/[valor dinámico]/ /                                                                                                                                                                                       |
| 603 | Fijo Porcentaje Otro                                                                                                                                                                                                             |
| 623 | %                                                                                                                                                                                                                                |
| 630 | ');"&gt;                                                                                                                                                                                                                         |
| 639 | / / / [valor dinámico]/[valor dinámico]/ /                                                                                                                                                                                       |
| 664 | Fijo Porcentaje Otro                                                                                                                                                                                                             |
| 684 | %                                                                                                                                                                                                                                |
| 691 | ');"&gt;                                                                                                                                                                                                                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 375 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Modificar otras cuentas bancarias                                                                                                                              |
| 378 | a       | class=enlacefuncional; title=Otras cuentas bancarias; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2                                                                                                                    |
| 383 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                        |
| 384 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                                                                                   |
| 385 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                  |
| 386 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                          |
| 387 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                                                                                   |
| 388 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT; value=&lt;%=zoraccount%&gt;                                                                                                                               |
| 389 | input   | class=fuenteformulario; type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA; value=&lt;%=zpaymdata%&gt;                                                                                                                        |
| 390 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE; value=&lt;%=zidpaym%&gt;                                                                                                                              |
| 391 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                          |
| 393 | input   | class=fuenteformulario; type=hidden; id=SCO_VALUE_OLD_PAR; name=SCO_VALUE_OLD_PAR; value=&lt;%=zvalue%&gt;                                                                                                                             |
| 394 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_BANK_BRANCH_OLD_PAR; name=SCO_ID_BANK_BRANCH_OLD_PAR; value=&lt;%=zidbanco%&gt;                                                                                                         |
| 395 | input   | class=fuenteformulario; type=hidden; id=SSP_DC_OLD_PAR; name=SSP_DC_OLD_PAR; value=&lt;%=ziddc%&gt;                                                                                                                                    |
| 396 | input   | class=fuenteformulario; type=hidden; id=SCO_ACCOUNT_NUMBER_OLD_PAR; name=SCO_ACCOUNT_NUMBER_OLD_PAR; value=&lt;%=zidaccount%&gt;                                                                                                       |
| 398 | input   | class=fuenteformulario; type=hidden; id=SSP_PAY_FORM_TP; name=SSP_PAY_FORM_TP; value=&lt;%=zTipoFormPago%&gt;                                                                                                                          |
| 400 | input   | class=fuenteformulario; type=hidden; id=SCO_ID_PAYM; name=SCO_ID_PAYM; value=5                                                                                                                                                         |
| 402 | input   | class=fuenteformulario; type=hidden; name=SCO_ID_STANDARD; id=SCO_ID_STANDARD; value=                                                                                                                                                  |
| 407 | a       | title=Otras cuentas bancarias; href=sse_g2_p2.jsp                                                                                                                                                                                      |
| 407 | img     | src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                                             |
| 419 | input   | class=fuenteformulario; type=text; name=SCO_ENTITLED; id=SCO_ENTITLED; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zentitled)%&gt;; size=30; title=El titular de la cuenta; readonly=readonly                  |
| 433 | input   | readonly=readonly; class=fuenteformulario; type=text; name=SCO_ID_BANK_BRANCH; id=SCO_ID_BANK_BRANCH; value=&lt;%=zidbanco%&gt;; tabindex=4                                                                                            |
| 436 | input   | readonly=readonly; class=fuenteformulario; name=SCO_ACCOUNT_NUMBER; type=text; id=SCO_ACCOUNT_NUMBER; size=20; maxlength=20; value=&lt;%=zidaccount%&gt;; tabindex=5; title=Escribe el código identificativo de la cuenta bancaria     |
| 451 | select  | onchange=javascript:tratarCampoClaveIBAN(this);; id=SCO_IBAN_CODE_aux; class=fuenteformulario; name=SCO_IBAN_CODE_aux; title=Selecciona el pais al que pertence la cuenta bancaria; disabled=presente; confirmar condición si dinámico |
| 452 | option  | value=                                                                                                                                                                                                                                 |
| 454 | option  | codigoiso=m.getItem(znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO");; m=new                                                                                                                                                              |
| 476 | input   | class=fuenteformulario; type=hidden; id=SCO_IBAN_CODE; name=SCO_IBAN_CODE; value=&lt;%=codigoISO%&gt;                                                                                                                                  |
| 481 | input   | type=hidden; id=soportaIBAN_&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                                              |
| 486 | input   | readonly=readonly; class=fuenteformulario; name=SCO_IBAN_KEY; type=text; id=SCO_IBAN_KEY; size=2; maxlength=2; value=&lt;%=zibankey%&gt;; tabindex=7; title=Escribe el digito de control del IBAN                                      |
| 494 | input   | id=SSP_PAY_FORM_TP_fijo; name=SSP_PAY_FORM_TP_fijo; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; ztipoformpago==; disabled=presente; confirmar condición si dinámico                                                 |
| 497 | input   | id=SSP_PAY_FORM_TP_porc; name=SSP_PAY_FORM_TP_porc; class=fuentevalor1; type=radio; title=Tipo de fórmula de pago; ztipoformpago==; disabled=presente; confirmar condición si dinámico                                                 |
| 506 | input   | id=SCO_VALUE; name=SCO_VALUE; size=10; maxlength=20; class=fuenteformulario; type=text; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zvalue)%&gt;; tabindex=5; title=Escoge una cantidad                        |
| 509 | select  | id=SCO_ID_CURRENCY; class=fuenteformulario; name=SCO_ID_CURRENCY; title=Escoge una moneda                                                                                                                                              |
| 510 | option  | value=                                                                                                                                                                                                                                 |
| 512 | option  | idcurrency=m.getItem(znodo5,zsubsesion,znodo5,"","ID_CURRENCY");; m=new                                                                                                                                                                |
| 535 | a       | href=javascript:comprobar_previo();; title=Enviar                                                                                                                                                                                      |
| 536 | img     | src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                              |
| 630 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                             |
| 631 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                    |
| 692 | a       | title=Eliminar la petición; style=CURSOR: hand; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                             |
| 693 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 127 | estado          | getParameter(request,"estado")   |
| 128 | zinicios        | getParameter(request,"zinicios") |
| 129 | id_orden        | getParameter(request,"id_orden") |

| L   | Variable              | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | --------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 127 | estado                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 128 | zinicios              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 129 | zorden                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_orden")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_orden")                                                                     |
| 144 | zsubsesion            | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 145 | zmeta4object          | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 146 | znodo                 | "SSE_OTHER_PDATA"                                                              | SSE_OTHER_PDATA                                                                                                                          |
| 147 | znodo1                | "M4T_PAYM_FORMULA"                                                             | M4T_PAYM_FORMULA                                                                                                                         |
| 148 | znodo2                | "M4T_PAYMENT_TYPE"                                                             | M4T_PAYMENT_TYPE                                                                                                                         |
| 149 | znodo3                | "M4T_OTHER_PDATA"                                                              | M4T_OTHER_PDATA                                                                                                                          |
| 150 | znodo4                | "M4T_PERSON_BANK"                                                              | M4T_PERSON_BANK                                                                                                                          |
| 151 | znodo5                | "M4T_RCH_CURRENCY"                                                             | M4T_RCH_CURRENCY                                                                                                                         |
| 152 | znodo7                | "M4T_COUNTRY_LIST"                                                             | M4T_COUNTRY_LIST                                                                                                                         |
| 153 | ztipocarga            | "SSE"                                                                          | SSE                                                                                                                                      |
| 154 | zmoveinicial          | znodo4 + "[" + zorden + "]"                                                    | M4T_PERSON_BANK{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_orden"){"]"}                                            |
| 158 | zventanas             | "10"                                                                           | 10                                                                                                                                       |
| 159 | zvuelta               | 5                                                                              | 5                                                                                                                                        |
| 160 | zdireccion            | "sse_g2/sse_g2_p2_mod_iban.jsp"                                                | sse_g2/sse_g2_p2_mod_iban.jsp                                                                                                            |
| 161 | zestado               | "21"                                                                           | 21                                                                                                                                       |
| 165 | zregistroinicial      | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 167 | zventana              | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 168 | zregistrofinal        | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 170 | zoutputdef            | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 171 | zmove                 | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 172 | zlectura              | zsubsesion + "!" + znodo                                                       | SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA                                                                                                      |
| 173 | zcomun                | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 175 | zoutputdef1           | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 176 | zmove1                | znodo1 + ":" + znodo1 + "[FIRST]"                                              | M4T_PAYM_FORMULA{":"}M4T_PAYM_FORMULA{"[FIRST]"}                                                                                         |
| 177 | zlectura1             | zsubsesion + "!" + znodo1                                                      | SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA                                                                                                     |
| 178 | zraiz1                | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                                    | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.                                                                               |
| 180 | zoutputdef2           | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 181 | zraiz2                | zsubsesion + "!" + znodo2 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"."}                                                                                                |
| 183 | zoutputdef3           | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 184 | zraiz3                | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                 | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}                                                                             |
| 186 | zoutputdef4           | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 187 | zraiz4                | zsubsesion + "!" + znodo4 + "."                                                | SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"."}                                                                                                 |
| 189 | zoutputdef5           | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 190 | zmove5                | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                         |
| 191 | zcomun5               | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 193 | zoutputdef7           | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 194 | zmove7                | znodo7 + ":" + znodo7 + "[FIRST]"                                              | M4T_COUNTRY_LIST{":"}M4T_COUNTRY_LIST{"[FIRST]"}                                                                                         |
| 195 | zcomun7               | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY_LIST{":"}SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 200 | zmetodocarga          | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                          |
| 204 | zBANCOPEND            | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                   |
| 205 | zCUENTAPEND           | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                   |
| 206 | zIBANCODEPEND         | zcomun + "SCO_IBAN_CODE"                                                       | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                        |
| 208 | zDCPEND               | zcomun + "SSP_DC"                                                              | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                               |
| 209 | zIDSTANDARDPEND       | zcomun + "SCO_ID_STANDARD"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STANDARD"}                                      |
| 210 | zSTARTPEND            | zcomun + "SCO_DT_START"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                         |
| 211 | zPAYMTYPE             | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                     |
| 212 | zIDCURRPEND           | zcomun + "SCO_ID_CURRENCY"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}                                      |
| 213 | zNCURRPEND            | zcomun + "NM_CURRENCY"                                                         | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 214 | zORDINAL              | zcomun + "ORDINAL"                                                             | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 215 | zN_FORMULAPEND        | zcomun + "SCO_NM_PAYMFORMULA"                                                  | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}                                   |
| 216 | zentitledpend         | zcomun + "SCO_ENTITLED"                                                        | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}                                         |
| 217 | zcant                 | zcomun + "SCO_VALUE"                                                           | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}                                            |
| 218 | zNACCION              | zcomun + "N_ACCION"                                                            | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 219 | zID_FORMULA           | zraiz1 + "SCO_ID_PAY_FORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_ID_PAY_FORMULA"}                                                         |
| 220 | zN_FORMULA            | zraiz1 + "SCO_NM_PAYMFORMULA"                                                  | M4T_PAYM_FORMULA{":"}SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA.{"SCO_NM_PAYMFORMULA"}                                                         |
| 221 | zPAY_FORM_TP          | zcomun + "SSP_PAY_FORM_TP"                                                     | SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}                                      |
| 222 | zID_CURR              | zcomun5 + "ID_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                        |
| 223 | zN_CURR               | zcomun5 + "NM_CURRENCY"                                                        | M4T_RCH_CURRENCY{":"}SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                        |
| 224 | zSSE_DT_START         | zraiz3 + "SSE_DT_START"                                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"."}{"SSE_DT_START"}                                                             |
| 243 | sFechaEfecto          | ""                                                                             |                                                                                                                                          |
| 244 | sFechaInicio          | ""                                                                             |                                                                                                                                          |
| 256 | fechaCorta1           | ""                                                                             |                                                                                                                                          |
| 257 | fechaCorta2           | ""                                                                             |                                                                                                                                          |
| 268 | bPuedeModificarCuenta | true                                                                           | true                                                                                                                                     |
| 277 | zidbanco              | ""                                                                             |                                                                                                                                          |
| 278 | zidbanco1             | ""                                                                             |                                                                                                                                          |
| 279 | zidbanco2             | ""                                                                             |                                                                                                                                          |
| 280 | zibancode             | ""                                                                             |                                                                                                                                          |
| 282 | zformula              | ""                                                                             |                                                                                                                                          |
| 283 | ziddc                 | ""                                                                             |                                                                                                                                          |
| 284 | ziddcComplete         | ""                                                                             |                                                                                                                                          |
| 285 | zidaccount            | ""                                                                             |                                                                                                                                          |
| 286 | znmcurrency           | ""                                                                             |                                                                                                                                          |
| 287 | znmpaymtype           | ""                                                                             |                                                                                                                                          |
| 288 | zidcurr               | ""                                                                             |                                                                                                                                          |
| 289 | zidpaym               | ""                                                                             |                                                                                                                                          |
| 290 | zoraccount            | ""                                                                             |                                                                                                                                          |
| 291 | zvalue                | ""                                                                             |                                                                                                                                          |
| 292 | zpaymdata             | ""                                                                             |                                                                                                                                          |
| 293 | zentitled             | ""                                                                             |                                                                                                                                          |
| 294 | zname                 | ""                                                                             |                                                                                                                                          |
| 295 | zapellidos            | ""                                                                             |                                                                                                                                          |
| 296 | zTipoFormPago         | -1                                                                             | -1                                                                                                                                       |
| 304 | zTipoFormPagoTemp     | m.getItem(znodo3,zsubsesion,znodo3,zorden,"SSP_PAY_FORM_TP")                   | m.getItem(znodo3,zsubsesion,znodo3,zorden,"SSP_PAY_FORM_TP")                                                                             |
| 305 | i                     | zTipoFormPagoTemp.indexOf(".")                                                 | zTipoFormPagoTemp.indexOf(".")                                                                                                           |
| 311 | j                     | ziddc.indexOf(".")                                                             | ziddc.indexOf(".")                                                                                                                       |
| 356 | zcount                | 0                                                                              | 0                                                                                                                                        |
| 357 | zcounti               | 0                                                                              | 0                                                                                                                                        |
| 358 | zcount5               | 0                                                                              | 0                                                                                                                                        |
| 359 | zcounti5              | 0                                                                              | 0                                                                                                                                        |
| 367 | zcountv               | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 368 | zcountv5              | String.valueOf(zcounti5)                                                       | String.valueOf(zcounti5)                                                                                                                 |
| 455 | codigoISO             | ""                                                                             |                                                                                                                                          |
| 470 | codigoISO             | ""                                                                             |                                                                                                                                          |
| 513 | idCurrency            | ""                                                                             |                                                                                                                                          |
| 553 | zregistroinicials     | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 554 | zregistrofinals       | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 555 | zposicions            | "0"                                                                            | 0                                                                                                                                        |
| 556 | zcontrol              | 0                                                                              | 0                                                                                                                                        |
| 557 | zposicion             | 0                                                                              | 0                                                                                                                                        |
| 580 | zidpaympend           | ""                                                                             |                                                                                                                                          |
| 581 | zidstandardpend       | ""                                                                             |                                                                                                                                          |
| 582 | zidbankbranchTEMP     | ""                                                                             |                                                                                                                                          |
| 583 | zidbank1TEMP          | ""                                                                             |                                                                                                                                          |
| 584 | zidbank2TEMP          | ""                                                                             |                                                                                                                                          |
| 604 | ztipoimporte          | -1                                                                             | -1                                                                                                                                       |
| 608 | ztipoimporteTEMP      | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 609 | i                     | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |
| 641 | zidpaympend           | ""                                                                             |                                                                                                                                          |
| 642 | zidstandardpend       | ""                                                                             |                                                                                                                                          |
| 643 | zidbankbranchTEMP     | ""                                                                             |                                                                                                                                          |
| 644 | zidbank1TEMP          | ""                                                                             |                                                                                                                                          |
| 645 | zidbank2TEMP          | ""                                                                             |                                                                                                                                          |
| 665 | ztipoimporte          | -1                                                                             | -1                                                                                                                                       |
| 669 | ztipoimporteTEMP      | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                         | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                                                   |
| 670 | i                     | ztipoimporteTEMP.indexOf(".")                                                  | ztipoimporteTEMP.indexOf(".")                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 228 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                                       |
| 228 | m4:beginjob  |                                                                                                                                                              |
| 229 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                                                  |
| 230 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                                     |
| 230 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                   |
| 231 | m4:outputdef | m4alias=SSE_OTHER_PDATA                                                                                                                                      |
| 231 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 232 | m4:outputdef | m4alias=M4T_PAYM_FORMULA                                                                                                                                     |
| 232 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYM_FORMULA{"[*]"}                                                                                              |
| 233 | m4:outputdef | m4alias=M4T_PAYMENT_TYPE                                                                                                                                     |
| 233 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PAYMENT_TYPE{"[*]"}                                                                                              |
| 234 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                                      |
| 234 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                                               |
| 235 | m4:outputdef | m4alias=M4T_PERSON_BANK                                                                                                                                      |
| 235 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_PERSON_BANK{"[*]"}                                                                                               |
| 236 | m4:outputdef | m4alias=M4T_RCH_CURRENCY                                                                                                                                     |
| 236 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_RCH_CURRENCY{"[*]"}                                                                                              |
| 237 | m4:outputdef | m4alias=M4T_COUNTRY_LIST                                                                                                                                     |
| 237 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_COUNTRY_LIST{"[*]"}                                                                                              |
| 238 | m4:endjob    |                                                                                                                                                              |
| 239 | m4:move      |                                                                                                                                                              |
| 239 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_PERSON_BANK{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_orden"){"]"}                                    |
| 353 | m4:move      |                                                                                                                                                              |
| 353 | m4:param     | name=SSE_OTHER_PDATA; value=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 354 | m4:move      |                                                                                                                                                              |
| 354 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_RCH_CURRENCY{":"}M4T_RCH_CURRENCY{"[FIRST]"}                                                                                 |
| 414 | m4:item      | item=SCO_DT_START; htmlsafe=true; outputdef=M4T_OTHER_PDATA                                                                                                  |
| 453 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 463 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                               |
| 463 | m4:item      | item=STD_N_COUNTRY; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                                |
| 463 | m4:item      | item=SSP_CODIGO_ISO; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                               |
| 469 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 480 | m4:dataloop  | outputdef=M4T_COUNTRY_LIST                                                                                                                                   |
| 481 | m4:item      | item=SSP_SOPORTA_IBAN; htmlsafe=true; outputdef=M4T_COUNTRY_LIST                                                                                             |
| 511 | m4:dataloop  | outputdef=M4T_RCH_CURRENCY                                                                                                                                   |
| 521 | m4:item      | item=ID_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 521 | m4:item      | item=NM_CURRENCY; htmlsafe=true; outputdef=M4T_RCH_CURRENCY                                                                                                  |
| 568 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                    |
| 575 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 576 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 577 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 596 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                                |
| 596 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 596 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 596 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 599 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 599 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 623 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 625 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 636 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                           |
| 637 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}; htmlsafe=true                                       |
| 638 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                       |
| 657 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                                |
| 657 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 657 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                                     |
| 657 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}                                                      |
| 660 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                                            |
| 660 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                                |
| 684 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                                          |
| 686 | m4:item      | m4name=SSE_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}SSE_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CURRENCY"}; htmlsafe=true                                    |
| 703 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                                  |
| --- | ---------------- | ----------------------------------------------------- |
| 248 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SSP_FEC_EFECTO"      |
| 249 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_DT_START"        |
| 300 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_ID_BANK_BRANCH"  |
| 301 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_IBAN_CODE"       |
| 302 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_IBAN_KEY"        |
| 303 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_ID_PAY_FORMULA"  |
| 304 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SSP_PAY_FORM_TP"     |
| 309 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SSP_DC"              |
| 317 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_ACCOUNT_NUMBER"  |
| 318 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_OR_ACCOUNT"      |
| 319 | getItem          | znodo3,zsubsesion,znodo3,zorden,"NM_CURRENCY"         |
| 320 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_NM_PAYM_TYPE"    |
| 321 | getItem          | znodo3,zsubsesion,znodo3,zorden,"ID_CURRENCY_DATA"    |
| 322 | getItem          | znodo3,zsubsesion,znodo3,zorden,"ID_CURRENCY"         |
| 323 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_ID_PAYM_TYPE"    |
| 324 | getItem          | znodo3,zsubsesion,znodo3,zorden,"STD_N_FIRST_NAME"    |
| 325 | getItem          | znodo3,zsubsesion,znodo3,zorden,"STD_N_FAMILY_NAME_1" |
| 326 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_VALUE"           |
| 327 | getItem          | znodo3,zsubsesion,znodo3,zorden,"SCO_OR_PAYMENTDATA"  |
| 362 | getCount         | znodo,zsubsesion,znodo                                |
| 363 | getCountInClient | znodo,zsubsesion,znodo                                |
| 364 | getCount         | znodo5,zsubsesion,znodo5                              |
| 365 | getCountInClient | znodo5,zsubsesion,znodo5                              |
| 458 | getItem          | znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO"          |
| 473 | getItem          | znodo7,zsubsesion,znodo7,"","SSP_CODIGO_ISO"          |
| 516 | getItem          | znodo5,zsubsesion,znodo5,"","ID_CURRENCY"             |
| 587 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"          |
| 588 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"           |
| 589 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"        |
| 608 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"           |
| 648 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"          |
| 649 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"           |
| 650 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH"        |
| 669 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                     | Argumentos   |
| --- | --------------------------- | ------------ |
| 14  | comprobar_previo            |              |
| 82  | pendientes                  | ord          |
| 90  | paisSeleccionadoSoportaIBAN |              |
| 105 | tratarCampoClaveIBAN        | listaCountry |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | v1 = new m4objvalidacion('_num',4,4,'','Campo oligatorio númerico de 4 caracteres',false);                                               |
| 20  | v2 = new m4objvalidacion('_num',2,2,'','Campo oligatorio númerico de 2 caracteres',false);                                               |
| 21  | v3 = new m4objvalidacion('_num',10,10,'','Campo oligatorio númerico de 2 caracteres',false);                                             |
| 36  | if ((null==val_cant) &#124;&#124; (''== val_cant)){                                                                                      |
| 40  | if ((null==val_pais) &#124;&#124; (''== val_pais)){                                                                                      |
| 43  | }else{                                                                                                                                   |
| 44  | if ('ES'== val_pais.toUpperCase()){                                                                                                      |
| 49  | if (4==val_paymtype &#124;&#124; 5 == val_paymtype){                                                                                     |
| 50  | if (paisSeleccionadoSoportaIBAN()) {                                                                                                     |
| 51  | if ((null==val_ibankey) &#124;&#124; (''== val_ibankey)){                                                                                |
| 56  | if ((null==val_account) &#124;&#124; (''== val_account)){                                                                                |
| 60  | if ((null==val_bankbranch) &#124;&#124; (''== val_bankbranch)){                                                                          |
| 66  | }else {                                                                                                                                  |
| 74  | if (1==falta_valor)alert(mensaje);                                                                                                       |
| 75  | else{                                                                                                                                    |
| 76  | if (1== error_dc)alert(mensaje1);                                                                                                        |
| 78  | if (1!=falta_valor &amp;&amp; 1!=error_dc) m4submit("NombreFormulario");                                                                 |
| 94  | if (codigoISOPaisSeleccionado == null &#124;&#124; codigoISOPaisSeleccionado == "") {                                                    |
| 98  | if (soportaIBAN == "1") {                                                                                                                |
| 100 | } else {                                                                                                                                 |
| 113 | if (soportaIBAN) {                                                                                                                       |
| 116 | } else {                                                                                                                                 |
| 132 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 135 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 270 | if (sFechaEfecto == null &#124;&#124; sFechaEfecto.equals("") &#124;&#124; dFechaEfecto.after(dFechaInicio)) {                           |
| 313 | if (ziddcComplete.length() == 1) {                                                                                                       |
| 331 | if ((null==zidbanco)&#124;&#124;(""==zidbanco))                                                                                          |
| 335 | else                                                                                                                                     |
| 340 | if ((null==zidaccount)&#124;&#124;(""==zidaccount)){                                                                                     |
| 343 | if((null==ziddc)&#124;&#124;(""==ziddc)){                                                                                                |
| 346 | else{ziddc = ziddc.substring(0,ziddc.indexOf("."));                                                                                      |
| 349 | if ((zname!=null)&#124;&#124;(zapellidos!=null)){                                                                                        |
| 460 | if (zibancode.equals(codigoISO)) {%&gt;                                                                                                  |
| 475 | if (zibancode.equals(codigoISO)) {%&gt;                                                                                                  |
| 495 | &lt;% if (zTipoFormPago == 1 &amp;&amp; zformula != null &amp;&amp; zformula != "") { %&gt;checked&lt;% } %&gt;                          |
| 498 | &lt;% if (zTipoFormPago == 2 &amp;&amp; zformula != null &amp;&amp; zformula != "") { %&gt;checked&lt;% } %&gt;                          |
| 503 | &lt;% if (zTipoFormPago == 1 &#124;&#124; zTipoFormPago == 2) { %&gt;                                                                    |
| 508 | &lt;% if (zTipoFormPago == 1) { %&gt;                                                                                                    |
| 518 | if (idCurrency.equals(zidcurr)) {%&gt;                                                                                                   |
| 524 | &lt;% } else if (zTipoFormPago == 2) { %&gt;                                                                                             |
| 532 | &lt;% if (bPuedeModificarCuenta) { %&gt;                                                                                                 |
| 533 | &lt;% if (zformula != null &amp;&amp; zformula != "") { %&gt;                                                                            |
| 538 | &lt;% } else { %&gt;                                                                                                                     |
| 543 | &lt;% } else { %&gt;                                                                                                                     |
| 552 | &lt;% if (zcounti &gt; 0) {                                                                                                              |
| 573 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 593 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 594 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 597 | &lt;%} else {%&gt;                                                                                                                       |
| 614 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 616 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 618 | &lt;% } else { %&gt;                                                                                                                     |
| 624 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 626 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 634 | &lt;%}else{%&gt;                                                                                                                         |
| 654 | if (zidpaympend.equals("4")== true){%&gt;                                                                                                |
| 655 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                        |
| 658 | &lt;%} else {%&gt;                                                                                                                       |
| 675 | if (ztipoimporte == 1) { %&gt;                                                                                                           |
| 677 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 679 | &lt;% } else { %&gt;                                                                                                                     |
| 685 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                                     |
| 687 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                                              |
| 15  | expresión de cálculo/transformación: var mensaje = "Los siguientes campos no pueden quedar vacios:" + "\n";                              |
| 97  | expresión de cálculo/transformación: var soportaIBAN = document.getElementById("soportaIBAN_" + codigoISOPaisSeleccionado).value;        |
| 154 | expresión de cálculo/transformación: String zmoveinicial = znodo4 + "[" + zorden + "]";                                                  |
| 166 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 168 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 170 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 171 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 172 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 173 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 175 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 176 | expresión de cálculo/transformación: String zmove1 =znodo1 + ":" + znodo1 + "[FIRST]";                                                   |
| 177 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 178 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                       |
| 180 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                    |
| 183 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 184 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                     |
| 186 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 187 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                    |
| 189 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 190 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 191 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 193 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 194 | expresión de cálculo/transformación: String zmove7 =znodo7 + ":" + znodo7 + "[FIRST]";                                                   |
| 195 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 200 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 204 | expresión de cálculo/transformación: String zBANCOPEND = zcomun + "SCO_ID_BANK_BRANCH";                                                  |
| 205 | expresión de cálculo/transformación: String zCUENTAPEND = zcomun + "SCO_ACCOUNT_NUMBER";                                                 |
| 206 | expresión de cálculo/transformación: String zIBANCODEPEND = zcomun + "SCO_IBAN_CODE";                                                    |
| 207 | expresión de cálculo/transformación: String zIBANKEYPEND = zcomun + "SCO_IBAN_KEY";                                                      |
| 208 | expresión de cálculo/transformación: String zDCPEND = zcomun + "SSP_DC";                                                                 |
| 209 | expresión de cálculo/transformación: String zIDSTANDARDPEND = zcomun + "SCO_ID_STANDARD";                                                |
| 210 | expresión de cálculo/transformación: String zSTARTPEND = zcomun + "SCO_DT_START";                                                        |
| 211 | expresión de cálculo/transformación: String zPAYMTYPE = zcomun + "SCO_NM_PAYM_TYPE";                                                     |
| 212 | expresión de cálculo/transformación: String zIDCURRPEND = zcomun + "SCO_ID_CURRENCY";                                                    |
| 213 | expresión de cálculo/transformación: String zNCURRPEND = zcomun + "NM_CURRENCY";                                                         |
| 214 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 215 | expresión de cálculo/transformación: String zN_FORMULAPEND = zcomun + "SCO_NM_PAYMFORMULA";                                              |
| 216 | expresión de cálculo/transformación: String zentitledpend = zcomun + "SCO_ENTITLED";                                                     |
| 217 | expresión de cálculo/transformación: String zcant = zcomun + "SCO_VALUE";                                                                |
| 218 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 219 | expresión de cálculo/transformación: String zID_FORMULA = zraiz1 + "SCO_ID_PAY_FORMULA";                                                 |
| 220 | expresión de cálculo/transformación: String zN_FORMULA = zraiz1 + "SCO_NM_PAYMFORMULA";                                                  |
| 221 | expresión de cálculo/transformación: String zPAY_FORM_TP = zcomun + "SSP_PAY_FORM_TP";                                                   |
| 222 | expresión de cálculo/transformación: String zID_CURR = zcomun5 + "ID_CURRENCY";                                                          |
| 223 | expresión de cálculo/transformación: String zN_CURR = zcomun5 + "NM_CURRENCY";                                                           |
| 224 | expresión de cálculo/transformación: String zSSE_DT_START = zraiz3 + "SSE_DT_START";                                                     |
| 307 | expresión de cálculo/transformación: zTipoFormPago = Integer.parseInt(zTipoFormPagoTemp);                                                |
| 314 | expresión de cálculo/transformación: ziddcComplete = "0" + ziddcComplete;                                                                |
| 333 | expresión de cálculo/transformación: zidbanco = zidbanco1 + zidbanco2;                                                                   |
| 554 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 611 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |
| 672 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                                  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 141 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 142 | ../../sse_generico/espanol/generico_links.jsp      |
| 699 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 701 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/digitocontrol.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 375 | /iconos/noname_beneficiarios_72_100.gif                         |
| 378 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2        |
| 383 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 407 | sse_g2_p2.jsp                                                   |
| 407 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 535 | javascript:comprobar_previo();                                  |
| 536 | /iconos/icono_enviar_ess_36_36.gif                              |
| 630 | javascript:pendientes(                                          |
| 631 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 692 | javascript:pendientes(                                          |
| 693 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 85  | sse_generico/generico_actualizar.jsp                            |
| 141 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 142 | ../../sse_generico/espanol/generico_links.jsp                   |
| 160 | sse_g2/sse_g2_p2_mod_iban.jsp                                   |
| 699 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 378 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2        | ausente    | P06                                                                                                                                                                                                |
| COLL   | 383 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 407 | sse_g2_p2.jsp                                                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 535 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 630 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 692 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 85  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 160 | sse_g2/sse_g2_p2_mod_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md); [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 378 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2        | ausente    | P06                                                                                                                                                                                                |
| IBER   | 383 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 407 | sse_g2_p2.jsp                                                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 535 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 630 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 692 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 85  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 160 | sse_g2/sse_g2_p2_mod_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/digitocontrol.js                                      | contextual | [libreria/digitocontrol.js](../../transversal/dependencias/libreria--digitocontrol.md)                                                                                                             |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 378 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=2        | ausente    | P06                                                                                                                                                                                                |
| BASE   | 383 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 407 | sse_g2_p2.jsp                                                   | física     | [sse_g2/sse_g2_p2.jsp](sse_g2--sse_g2_p2.md)                                                                                                                                                       |
| BASE   | 535 | javascript:comprobar_previo();                                  | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 630 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 692 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 85  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 141 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 142 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 160 | sse_g2/sse_g2_p2_mod_iban.jsp                                   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 699 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 701 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_mod_iban.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
