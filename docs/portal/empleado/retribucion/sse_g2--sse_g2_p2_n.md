# Otras cuentas bancarias

Identificador: `sse_g2/sse_g2_p2_n.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p2_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_n.jsp) | `a99265f8d96d35e79b0ccf1ea9fd1408f37f007f5a2c5422aebe5bcb3b7a1e56` |    409 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p2_n.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p2_n.jsp) | `a99265f8d96d35e79b0ccf1ea9fd1408f37f007f5a2c5422aebe5bcb3b7a1e56` |    409 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p2_n.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p2_n.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Otras cuentas bancarias                                                                                                                                                 |
| 151 | Otras cuentas bancarias                                                                                                                                                 |
| 158 | Consulta o modifica los datos de tus otras cuentas bancarias y tus beneficiarios. Dar de alta otras cuentas bancarias Dar de alta otras cuentas bancarias no nacionales |
| 178 | Titular                                                                                                                                                                 |
| 179 | Inicio                                                                                                                                                                  |
| 180 | Número de cuenta                                                                                                                                                        |
| 181 | IBAN                                                                                                                                                                    |
| 182 | Tipo de importe                                                                                                                                                         |
| 183 | Importe                                                                                                                                                                 |
| 193 | ,'[valor dinámico]');"&gt;                                                                                                                                              |
| 210 | ,'[valor dinámico]');"&gt; / / /[valor dinámico]/                                                                                                                       |
| 254 | Fijo Porcentaje Otro                                                                                                                                                    |
| 273 | %                                                                                                                                                                       |
| 282 | ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ');"&gt;                                                                                                            |
| 293 | ,'[valor dinámico]');"&gt;                                                                                                                                              |
| 310 | ,'[valor dinámico]');"&gt; / / /[valor dinámico]/                                                                                                                       |
| 353 | Fijo Porcentaje Otro                                                                                                                                                    |
| 372 | %                                                                                                                                                                       |
| 381 | ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ');"&gt;                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                  |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 129 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=oculto; id=oculto                                                                |
| 130 | input   | type=hidden; id=TAG; name=TAG; value=SSE_OTHER_PDATA                                                                                                                       |
| 131 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                      |
| 132 | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                                                |
| 133 | input   | type=hidden; id=NOD; name=NOD; value=SSE_OTHER_PDATA                                                                                                                       |
| 134 | input   | type=hidden; id=SCO_ID_PERSON; name=SCO_ID_PERSON                                                                                                                          |
| 135 | input   | type=hidden; id=SCO_ID_HR; name=SCO_ID_HR                                                                                                                                  |
| 136 | input   | type=hidden; id=SCO_OR_ACCOUNT; name=SCO_OR_ACCOUNT                                                                                                                        |
| 137 | input   | type=hidden; id=SCO_OR_PAYMENTDATA; name=SCO_OR_PAYMENTDATA                                                                                                                |
| 138 | input   | type=hidden; id=SCO_ID_PAYM_TYPE; name=SCO_ID_PAYM_TYPE                                                                                                                    |
| 139 | input   | type=hidden; id=SCO_ID_BANK_BRANCH; name=SCO_ID_BANK_BRANCH                                                                                                                |
| 140 | input   | type=hidden; id=SCO_DT_START; name=SCO_DT_START                                                                                                                            |
| 141 | input   | type=hidden; id=SSP_DC; name=SSP_DC                                                                                                                                        |
| 142 | input   | type=hidden; id=SCO_ENTITLED; name=SCO_ENTITLED                                                                                                                            |
| 143 | input   | type=hidden; id=SCO_ID_CURRENCY; name=SCO_ID_CURRENCY                                                                                                                      |
| 144 | input   | type=hidden; id=SCO_ID_PAY_FORMULA; name=SCO_ID_PAY_FORMULA                                                                                                                |
| 145 | input   | type=hidden; id=SCO_VALUE; name=SCO_VALUE                                                                                                                                  |
| 146 | input   | type=hidden; id=SCO_ACCOUNT_NUMBER; name=SCO_ACCOUNT_NUMBER                                                                                                                |
| 156 | img     | src=/iconos/noname_beneficiarios_72_100.gif; width=100; height=100; alt=Otras cuentas bancarias                                                                            |
| 160 | a       | class=fuentedescripcion                                                                                                                                                    |
| 163 | a       | class=enlacefuncional; title=Dar de alta otras cuentas bancarias; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add.jsp?estado=21                    |
| 164 | a       | class=enlacefuncional; title=Dar de alta otras cuentas bancarias no nacionales; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add_iban.jsp?estado=21 |
| 203 | a       | class=enlacefuncional; title=Modificar otras cuentas bancarias; style=CURSOR: hand; href=javascript:ModificarCuenta(&lt;m4:item m4name=                                    |
| 227 | a       | class=enlacefuncional; title=Modificar otras cuentas bancarias; style=CURSOR: hand; href=javascript:ModificarCuenta(&lt;m4:item m4name=                                    |
| 284 | a       | title=Eliminar el beneficiario; style=CURSOR: hand; href=javascript:borrado('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                |
| 286 | img     | alt=Eliminar el beneficiario; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12                                                                                |
| 303 | a       | class=enlacefuncional; title=Modificar otras cuentas bancarias; style=CURSOR: hand; href=javascript:ModificarCuenta(&lt;m4:item m4name=                                    |
| 326 | a       | class=enlacefuncional; title=Modificar otras cuentas bancarias; style=CURSOR: hand; href=javascript:ModificarCuenta(&lt;m4:item m4name=                                    |
| 383 | a       | title=Eliminar el beneficiario; style=CURSOR: hand; href=javascript:borrado('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                |
| 384 | img     | alt=Eliminar el beneficiario; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12                                                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                     | Resolución estática parcial                                                                             |
| --- | ----------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 13  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                      |
| 14  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                    |
| 60  | zsubsesion        | "SSE_OTHER_PDATA"                                                    | SSE_OTHER_PDATA                                                                                         |
| 61  | zmeta4object      | "SSE_OTHER_PDATA"                                                    | SSE_OTHER_PDATA                                                                                         |
| 62  | znodo             | "M4T_OTHER_PDATA"                                                    | M4T_OTHER_PDATA                                                                                         |
| 63  | ztipocarga        | "M4T"                                                                | M4T                                                                                                     |
| 65  | zventanas         | "20"                                                                 | 20                                                                                                      |
| 67  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                     | SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                              |
| 68  | zmove             | znodo + ":" + znodo + "[FIRST]"                                      | M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                          |
| 69  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}                        |
| 71  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                    |
| 73  | zventana          | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                   |
| 74  | zregistrofinal    | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                      |
| 77  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                         |
| 80  | zbanco            | zcomun + "SCO_ID_BANK_BRANCH"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}  |
| 81  | zcuenta           | zcomun + "SCO_ACCOUNT_NUMBER"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}  |
| 82  | zdatestart        | zcomun + "SCO_DT_START"                                              | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}        |
| 83  | zorden            | zcomun + "SCO_ORDINAL"                                               | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ORDINAL"}         |
| 84  | zidpaym           | zcomun + "SCO_ID_PAYM_TYPE"                                          | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}    |
| 85  | znpaym            | zcomun + "SCO_NM_PAYM_TYPE"                                          | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}    |
| 86  | zncurr            | zcomun + "NM_CURRENCY"                                               | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}         |
| 87  | zdc               | zcomun + "SSP_DC"                                                    | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}              |
| 88  | ztitular          | zcomun + "SCO_ENTITLED"                                              | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ENTITLED"}        |
| 89  | zvalue            | zcomun + "SCO_VALUE"                                                 | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}           |
| 90  | zname             | zcomun + "STD_N_FIRST_NAME"                                          | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}    |
| 91  | zapellidos        | zcomun + "STD_N_FAMILY_NAME_1"                                       | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"} |
| 92  | znmformula        | zcomun + "SCO_NM_PAYMFORMULA"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYMFORMULA"}  |
| 93  | zpayformtp        | zcomun + "SSP_PAY_FORM_TP"                                           | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PAY_FORM_TP"}     |
| 94  | zidperson         | zcomun + "SCO_ID_PERSON"                                             | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PERSON"}       |
| 95  | zidhr             | zcomun + "SCO_ID_HR"                                                 | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}           |
| 96  | zpdata            | zcomun + "SCO_OR_PAYMENTDATA"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PAYMENTDATA"}  |
| 97  | zoraccount        | zcomun + "SCO_OR_ACCOUNT"                                            | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_ACCOUNT"}      |
| 98  | zid_curr          | zcomun + "ID_CURRENCY_DATA"                                          | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY_DATA"}    |
| 99  | zidpaymformula    | zcomun + "SCO_ID_PAY_FORMULA"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAY_FORMULA"}  |
| 101 | zidstandard       | zcomun + "SCO_ID_STANDARD"                                           | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STANDARD"}     |
| 102 | zidibancode       | zcomun + "SCO_IBAN_CODE"                                             | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}       |
| 103 | zgbiban           | zcomun + "SCO_GB_IBAN"                                               | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}         |
| 104 | zbanco1           | zcomun + "SCO_ID_BANK1"                                              | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}        |
| 105 | zbanco2           | zcomun + "SCO_ID_BANK2"                                              | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}        |
| 106 | zidorgexterna     | zcomun + "SCO_ID_EXTERNALORG"                                        | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_EXTERNALORG"}  |
| 107 | znorgexterna11    | zcomun + "STD_N_EXT_ORG_1"                                           | M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG_1"}     |
| 119 | zcount            | 0                                                                    | 0                                                                                                       |
| 120 | zcounti           | 0                                                                    | 0                                                                                                       |
| 126 | zcountv           | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                 |
| 170 | zregistroinicials | String.valueOf(zregistroinicial)                                     | String.valueOf(zregistroinicial)                                                                        |
| 171 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                       | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                         |
| 172 | zposicions        | "0"                                                                  | 0                                                                                                       |
| 173 | zcontrol          | 0                                                                    | 0                                                                                                       |
| 174 | zposicion         | 0                                                                    | 0                                                                                                       |
| 194 | zorgexternatemp   | ""                                                                   |                                                                                                         |
| 211 | zidpaympend       | ""                                                                   |                                                                                                         |
| 212 | zbancotemp        | ""                                                                   |                                                                                                         |
| 213 | zidstandardvar    | ""                                                                   |                                                                                                         |
| 214 | zDC_0             | ""                                                                   |                                                                                                         |
| 239 | sTextoIBANnd      | "N/A"                                                                | N/A                                                                                                     |
| 240 | sGBIBAN           | ""                                                                   |                                                                                                         |
| 255 | ztipoimporte      | -1                                                                   | -1                                                                                                      |
| 259 | ztipoimporteTEMP  | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")               | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                  |
| 260 | i                 | ztipoimporteTEMP.indexOf(".")                                        | ztipoimporteTEMP.indexOf(".")                                                                           |
| 294 | zorgexternatemp   | ""                                                                   |                                                                                                         |
| 311 | zidpaympend       | ""                                                                   |                                                                                                         |
| 312 | zbancotemp        | ""                                                                   |                                                                                                         |
| 313 | zDC_0             | ""                                                                   |                                                                                                         |
| 339 | sTextoIBANnd      | "N/A"                                                                | N/A                                                                                                     |
| 340 | sGBIBAN           | ""                                                                   |                                                                                                         |
| 354 | ztipoimporte      | -1                                                                   | -1                                                                                                      |
| 358 | ztipoimporteTEMP  | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")               | t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP")                                                  |
| 359 | i                 | ztipoimporteTEMP.indexOf(".")                                        | ztipoimporteTEMP.indexOf(".")                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                        |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 110 | m4:startpage | m4task=SSE_OTHER_PDATA                                                                                                                    |
| 111 | m4:beginjob  |                                                                                                                                           |
| 112 | m4:datadef   | m4o=SSE_OTHER_PDATA; m4name=SSE_OTHER_PDATA                                                                                               |
| 113 | m4:exec      | m4method=CARGA:{}SSE_OTHER_PDATA{"!SSE_PRINCIPAL.CARGA"}                                                                                  |
| 113 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                |
| 114 | m4:outputdef | m4alias=M4T_OTHER_PDATA                                                                                                                   |
| 114 | m4:param     | name=m4name0; value=SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[*]"}                                                                            |
| 115 | m4:endjob    |                                                                                                                                           |
| 116 | m4:move      |                                                                                                                                           |
| 116 | m4:param     | name=SSE_OTHER_PDATA; value=M4T_OTHER_PDATA{":"}M4T_OTHER_PDATA{"[FIRST]"}                                                                |
| 186 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                 |
| 201 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG_1"}; htmlsafe=true                 |
| 204 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                |
| 204 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; htmlsafe=true             |
| 208 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                    |
| 229 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true              |
| 229 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true              |
| 232 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}; htmlsafe=true                    |
| 232 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}; htmlsafe=true                    |
| 232 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true              |
| 246 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}                                    |
| 274 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                       |
| 276 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY_DATA"}; htmlsafe=true                |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PERSON"}; jsafe=true; htmlsafe=true       |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PAYMENTDATA"}; jsafe=true; htmlsafe=true  |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}; jsafe=true; htmlsafe=true    |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_ACCOUNT"}; jsafe=true; htmlsafe=true      |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; jsafe=true; htmlsafe=true  |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; jsafe=true; htmlsafe=true              |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; jsafe=true; htmlsafe=true  |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; jsafe=true; htmlsafe=true        |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAY_FORMULA"}; jsafe=true; htmlsafe=true  |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; jsafe=true; htmlsafe=true           |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY_DATA"}; jsafe=true; htmlsafe=true    |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; jsafe=true; htmlsafe=true    |
| 285 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; jsafe=true; htmlsafe=true |
| 301 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG_1"}; htmlsafe=true                 |
| 304 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                |
| 304 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; htmlsafe=true             |
| 308 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                    |
| 328 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true              |
| 328 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true              |
| 331 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}; htmlsafe=true                    |
| 331 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}; htmlsafe=true                    |
| 331 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true              |
| 346 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}                                    |
| 373 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; htmlsafe=true                       |
| 375 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY_DATA"}; htmlsafe=true                |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PERSON"}; jsafe=true; htmlsafe=true       |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PAYMENTDATA"}; jsafe=true; htmlsafe=true  |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}; jsafe=true; htmlsafe=true    |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_ACCOUNT"}; jsafe=true; htmlsafe=true      |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; jsafe=true; htmlsafe=true  |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}; jsafe=true; htmlsafe=true              |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; jsafe=true; htmlsafe=true  |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; jsafe=true; htmlsafe=true        |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAY_FORMULA"}; jsafe=true; htmlsafe=true  |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VALUE"}; jsafe=true; htmlsafe=true           |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY_DATA"}; jsafe=true; htmlsafe=true    |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; jsafe=true; htmlsafe=true    |
| 383 | m4:item      | m4name=M4T_OTHER_PDATA{":"}SSE_OTHER_PDATA{"!"}M4T_OTHER_PDATA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; jsafe=true; htmlsafe=true |
| 404 | m4:endpage   |                                                                                                                                           |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 123 | getCount         | znodo,zsubsesion,znodo                                 |
| 124 | getCountInClient | znodo,zsubsesion,znodo                                 |
| 197 | getItem          | znodo,zsubsesion,znodo,zposicions,"STD_N_EXT_ORG_1"    |
| 198 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"            |
| 217 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"           |
| 218 | getItem          | znodo,zsubsesion,znodo,zposicions,"SCO_ID_BANK_BRANCH" |
| 219 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"            |
| 220 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"                     |
| 243 | getItem          | znodo,zsubsesion,znodo,"","SCO_GB_IBAN"                |
| 259 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"            |
| 297 | getItem          | znodo,zsubsesion,znodo,zposicions,"STD_N_EXT_ORG_1"    |
| 298 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"            |
| 316 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"           |
| 317 | getItem          | znodo,zsubsesion,znodo,zposicions,"SCO_ID_BANK_BRANCH" |
| 318 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"            |
| 319 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"                     |
| 343 | getItem          | znodo,zsubsesion,znodo,"","SCO_GB_IBAN"                |
| 358 | getItem          | znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP"            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos                                                                                                        |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------- |
| 23  | borrado         | id_hr,id_person,paym_data,paym_type,or_account,bank_branch,dc,account,start,formula,value,currency,name,apellidos |
| 41  | ModificarCuenta | parOrden,idStandard                                                                                               |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                     |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                 |
| 43  | if (estandar=="00"){                                                                                                    |
| 46  | if (estandar=="ES"){                                                                                                    |
| 169 | &lt;% if (zcounti &gt; 0){                                                                                              |
| 191 | &lt;%if (zcontrol==0){%&gt;                                                                                             |
| 200 | if (zorgexternatemp.equals("") != true){ %&gt;                                                                          |
| 202 | &lt;% } else { %&gt;                                                                                                    |
| 222 | if (zDC_0.length() == 1) {                                                                                              |
| 226 | if ((zidpaympend.equals("4")== true) &amp;&amp; zbancotemp.equals("") == false){%&gt;                                   |
| 228 | &lt;%if (zidstandard.equals("00")== true){%&gt;                                                                         |
| 230 | &lt;%} else {%&gt;                                                                                                      |
| 245 | if (!sGBIBAN.equals("") &amp;&amp; sGBIBAN != null) {%&gt;                                                              |
| 247 | &lt;% } else { %&gt;                                                                                                    |
| 265 | if (ztipoimporte == 1) { %&gt;                                                                                          |
| 267 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                             |
| 269 | &lt;% } else { %&gt;                                                                                                    |
| 275 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                    |
| 277 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                             |
| 283 | &lt;% if (zorgexternatemp.equals("") == true){ %&gt;                                                                    |
| 291 | &lt;%}else{%&gt;                                                                                                        |
| 300 | if (zorgexternatemp.equals("") != true){ %&gt;                                                                          |
| 302 | &lt;% } else { %&gt;                                                                                                    |
| 321 | if (zDC_0.length() == 1) {                                                                                              |
| 325 | if ((zidpaympend.equals("4")== true) &amp;&amp; zbancotemp.equals("") == false){%&gt;                                   |
| 327 | &lt;%if (zidstandard.equals("00")== true){%&gt;                                                                         |
| 329 | &lt;%} else {%&gt;                                                                                                      |
| 345 | if (!sGBIBAN.equals("") &amp;&amp; sGBIBAN != null) {%&gt;                                                              |
| 347 | &lt;% } else { %&gt;                                                                                                    |
| 364 | if (ztipoimporte == 1) { %&gt;                                                                                          |
| 366 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                             |
| 368 | &lt;% } else { %&gt;                                                                                                    |
| 374 | &lt;% if (ztipoimporte == 1) { %&gt;                                                                                    |
| 376 | &lt;% } else if (ztipoimporte == 2) { %&gt;                                                                             |
| 382 | &lt;% if (zorgexternatemp.equals("") == true){ %&gt;                                                                    |
| 396 | &lt;%} else{%&gt;                                                                                                       |
| 67  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 68  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 69  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 72  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 74  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 77  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";              |
| 80  | expresión de cálculo/transformación: String zbanco = zcomun + "SCO_ID_BANK_BRANCH";                                     |
| 81  | expresión de cálculo/transformación: String zcuenta = zcomun + "SCO_ACCOUNT_NUMBER";                                    |
| 82  | expresión de cálculo/transformación: String zdatestart = zcomun + "SCO_DT_START";                                       |
| 83  | expresión de cálculo/transformación: String zorden = zcomun + "SCO_ORDINAL";                                            |
| 84  | expresión de cálculo/transformación: String zidpaym =zcomun + "SCO_ID_PAYM_TYPE";                                       |
| 85  | expresión de cálculo/transformación: String znpaym = zcomun + "SCO_NM_PAYM_TYPE";                                       |
| 86  | expresión de cálculo/transformación: String zncurr = zcomun + "NM_CURRENCY";                                            |
| 87  | expresión de cálculo/transformación: String zdc = zcomun + "SSP_DC";                                                    |
| 88  | expresión de cálculo/transformación: String ztitular = zcomun + "SCO_ENTITLED";                                         |
| 89  | expresión de cálculo/transformación: String zvalue = zcomun + "SCO_VALUE";                                              |
| 90  | expresión de cálculo/transformación: String zname = zcomun + "STD_N_FIRST_NAME";                                        |
| 91  | expresión de cálculo/transformación: String zapellidos = zcomun + "STD_N_FAMILY_NAME_1";                                |
| 92  | expresión de cálculo/transformación: String znmformula = zcomun + "SCO_NM_PAYMFORMULA";                                 |
| 93  | expresión de cálculo/transformación: String zpayformtp = zcomun + "SSP_PAY_FORM_TP";                                    |
| 94  | expresión de cálculo/transformación: String zidperson = zcomun + "SCO_ID_PERSON";                                       |
| 95  | expresión de cálculo/transformación: String zidhr = zcomun + "SCO_ID_HR";                                               |
| 96  | expresión de cálculo/transformación: String zpdata = zcomun + "SCO_OR_PAYMENTDATA";                                     |
| 97  | expresión de cálculo/transformación: String zoraccount = zcomun + "SCO_OR_ACCOUNT";                                     |
| 98  | expresión de cálculo/transformación: String zid_curr = zcomun + "ID_CURRENCY_DATA";                                     |
| 99  | expresión de cálculo/transformación: String zidpaymformula = zcomun + "SCO_ID_PAY_FORMULA";                             |
| 101 | expresión de cálculo/transformación: String zidstandard = zcomun + "SCO_ID_STANDARD";                                   |
| 102 | expresión de cálculo/transformación: String zidibancode = zcomun + "SCO_IBAN_CODE";                                     |
| 103 | expresión de cálculo/transformación: String zgbiban = zcomun + "SCO_GB_IBAN";                                           |
| 104 | expresión de cálculo/transformación: String zbanco1 = zcomun + "SCO_ID_BANK1";                                          |
| 105 | expresión de cálculo/transformación: String zbanco2 = zcomun + "SCO_ID_BANK2";                                          |
| 106 | expresión de cálculo/transformación: String zidorgexterna = zcomun + "SCO_ID_EXTERNALORG";                              |
| 107 | expresión de cálculo/transformación: String znorgexterna11 = zcomun + "STD_N_EXT_ORG_1";                                |
| 171 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);           |
| 223 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                               |
| 262 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                 |
| 322 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                               |
| 361 | expresión de cálculo/transformación: ztipoimporte = Integer.parseInt(ztipoimporteTEMP);                                 |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 58  | ../../sse_generico/espanol/generico_links.jsp      |
| 402 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 8   | /css/estilo_sse.css                                                |
| 9   | /libreria/funciones_sse.js                                         |
| 11  | /libreria/clase_val_entradas.js                                    |
| 129 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp    |
| 156 | /iconos/noname_beneficiarios_72_100.gif                            |
| 163 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add.jsp?estado=21      |
| 164 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add_iban.jsp?estado=21 |
| 203 | javascript:ModificarCuenta(&lt;m4:item m4name=                     |
| 227 | javascript:ModificarCuenta(&lt;m4:item m4name=                     |
| 285 | javascript:borrado(                                                |
| 286 | /iconos/icono_eliminar_ess_11_12.gif                               |
| 303 | javascript:ModificarCuenta(&lt;m4:item m4name=                     |
| 326 | javascript:ModificarCuenta(&lt;m4:item m4name=                     |
| 383 | javascript:borrado(                                                |
| 384 | /iconos/icono_eliminar_ess_11_12.gif                               |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                            |
| 44  | sse_g2/sse_g2_p2_mod_iban.jsp                                      |
| 47  | sse_g2/sse_g2_p2_mod.jsp                                           |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp                    |
| 58  | ../../sse_generico/espanol/generico_links.jsp                      |
| 402 | ../../sse_generico/espanol/generico_disclaimer.jsp                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 58  | ../../sse_generico/espanol/generico_links.jsp                      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 402 | ../../sse_generico/espanol/generico_disclaimer.jsp                 | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 129 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp    | ausente    | P06                                                                                                                                                                                                |
| COLL   | 163 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add.jsp?estado=21      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 164 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add_iban.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 203 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 227 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 285 | javascript:borrado(                                                | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 303 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 326 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 383 | javascript:borrado(                                                | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 44  | sse_g2/sse_g2_p2_mod_iban.jsp                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 47  | sse_g2/sse_g2_p2_mod.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| COLL   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 58  | ../../sse_generico/espanol/generico_links.jsp                      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 402 | ../../sse_generico/espanol/generico_disclaimer.jsp                 | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 58  | ../../sse_generico/espanol/generico_links.jsp                      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 402 | ../../sse_generico/espanol/generico_disclaimer.jsp                 | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 129 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp    | ausente    | P06                                                                                                                                                                                                |
| IBER   | 163 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add.jsp?estado=21      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 164 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add_iban.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 203 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 227 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 285 | javascript:borrado(                                                | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 303 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 326 | javascript:ModificarCuenta(&lt;m4:item m4name=                     | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 383 | javascript:borrado(                                                | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 44  | sse_g2/sse_g2_p2_mod_iban.jsp                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 47  | sse_g2/sse_g2_p2_mod.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| IBER   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 58  | ../../sse_generico/espanol/generico_links.jsp                      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 402 | ../../sse_generico/espanol/generico_disclaimer.jsp                 | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p2_n.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
