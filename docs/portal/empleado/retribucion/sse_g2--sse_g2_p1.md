# Cuenta bancaria principal

Identificador: `sse_g2/sse_g2_p1.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                            | Solo en BASE                                             |
| ------ | --------- | ------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1.jsp) | `3a5de572ce724ddddefa4c8966bd7cb7f8c0a206affa3fad02421b85d7f7d664` |    223 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_p1.jsp)   | `3a5de572ce724ddddefa4c8966bd7cb7f8c0a206affa3fad02421b85d7f7d664` |    223 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p1.jsp) | `3a5de572ce724ddddefa4c8966bd7cb7f8c0a206affa3fad02421b85d7f7d664` |    223 |
| BASE / español    | [sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p1.jsp)                             | `a45151e145eeb490c9b4d37677d8810deacd51106ffc99a6699a44a169dd70e5` |    209 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 7   | Cuenta bancaria principal                                                                                                  |
| 98  | Cuenta bancaria principal                                                                                                  |
| 105 | Consulta tu cuenta bancaria principal. Modificar cuenta bancaria principal Modificar cuenta bancaria principal no nacional |
| 133 | Inicio                                                                                                                     |
| 134 | Número de cuenta                                                                                                           |
| 135 | Moneda                                                                                                                     |
| 136 | IBAN                                                                                                                       |
| 170 | / / /[valor dinámico]/ N/A                                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 103 | img     | src=/iconos/noname_banco_79_100.gif; width=79; height=100; alt=Cuenta bancaria principal                                                                                                            |
| 114 | a       | id=linkModificar; class=enlacefuncional; title=Modificar cuenta bancaria principal; style=cursor:hand; href=javascript:ModificarCuenta01();                                                         |
| 117 | a       | id=linkModificar; class=enlacefuncional; title=Modificar cuenta bancaria principal; style=cursor:hand; href=javascript:ModificarCuenta02();                                                         |
| 139 | a       | style=cursor:hand; href=javascript:ModificarCuenta();                                                                                                                                               |
| 140 | img     | alt=Modificar cuenta bancaria principal; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 196 | form    | name=frmControlPais; id=frmControlPais                                                                                                                                                              |
| 197 | input   | type=hidden; id=ESTANDAR; name=ESTANDAR; value=&lt;%=zidstandard%&gt;                                                                                                                               |
| 207 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21; method=post; name=NombreFormulario; id=NombreFormulario                                                                  |
| 209 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21; method=post; name=NombreFormularioIBAN; id=NombreFormularioIBAN                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 32  | estado          | getParameter(request,"estado")   |
| 33  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                     | Resolución estática parcial                                                                               |
| --- | ----------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 32  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 33  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      |
| 46  | zsubsesion        | "SSE_PAYMENT_DATA"                                                   | SSE_PAYMENT_DATA                                                                                          |
| 47  | zmeta4object      | "SSE_PAYMENT_DATA"                                                   | SSE_PAYMENT_DATA                                                                                          |
| 48  | znodo             | "M4T_PAYMENT_DATA"                                                   | M4T_PAYMENT_DATA                                                                                          |
| 49  | ztipocarga        | "M4T"                                                                | M4T                                                                                                       |
| 51  | zventanas         | "20"                                                                 | 20                                                                                                        |
| 53  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                     | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                              |
| 54  | zmove             | znodo + ":" + znodo + "[FIRST]"                                      | M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                          |
| 55  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                       |
| 57  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                      |
| 59  | zventana          | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                     |
| 60  | zregistrofinal    | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                        |
| 61  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                    | CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA_CV"}                                                       |
| 63  | zbanco            | zcomun + "SCO_ID_BANK_BRANCH"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"} |
| 64  | zcuenta           | zcomun + "SCO_ACCOUNT_NUMBER"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"} |
| 65  | zdatestart        | zcomun + "SCO_DT_START"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}       |
| 66  | zorden            | zcomun + "SCO_ORDINAL"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ORDINAL"}        |
| 67  | zidpaym           | zcomun + "SCO_ID_PAYM_TYPE"                                          | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}   |
| 68  | znpaym            | zcomun + "SCO_NM_PAYM_TYPE"                                          | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}   |
| 69  | zncurr            | zcomun + "NM_CURRENCY"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}        |
| 70  | zdc               | zcomun + "SSP_DC"                                                    | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}             |
| 71  | zidstandard       | zcomun + "SCO_ID_STANDARD"                                           | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STANDARD"}    |
| 72  | zidibancode       | zcomun + "SCO_IBAN_CODE"                                             | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}      |
| 73  | zgbiban           | zcomun + "SCO_GB_IBAN"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}        |
| 74  | zbanco1           | zcomun + "SCO_ID_BANK1"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}       |
| 75  | zbanco2           | zcomun + "SCO_ID_BANK2"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}       |
| 76  | zoraccount        | zcomun + "SCO_OR_ACCOUNT"                                            | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_ACCOUNT"}     |
| 77  | zorpaymentdata    | zcomun + "SCO_OR_PAYMENTDATA"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PAYMENTDATA"} |
| 87  | zcount            | 0                                                                    | 0                                                                                                         |
| 88  | zcounti           | 0                                                                    | 0                                                                                                         |
| 94  | zcountv           | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                   |
| 127 | zregistroinicials | String.valueOf(zregistroinicial)                                     | String.valueOf(zregistroinicial)                                                                          |
| 128 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                       | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                           |
| 129 | zposicions        | "0"                                                                  | 0                                                                                                         |
| 130 | zposicion         | 0                                                                    | 0                                                                                                         |
| 150 | zidpaympend       | ""                                                                   |                                                                                                           |
| 151 | zidstandardvar    | ""                                                                   |                                                                                                           |
| 152 | zDC_0             | ""                                                                   |                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 79  | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                         |
| 80  | m4:beginjob  |                                                                                                                                 |
| 81  | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                   |
| 82  | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA_CV"}                                                                    |
| 82  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                      |
| 83  | m4:outputdef | m4alias=M4T_PAYMENT_DATA                                                                                                        |
| 83  | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                |
| 84  | m4:endjob    |                                                                                                                                 |
| 85  | m4:move      |                                                                                                                                 |
| 85  | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                   |
| 145 | m4:loop      | from=String.valueOf(zregistroinicial); to=String.valueOf(zregistroinicial)                                                      |
| 168 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true       |
| 174 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                |
| 174 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                |
| 177 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}; htmlsafe=true       |
| 177 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}; htmlsafe=true       |
| 177 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true |
| 192 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true        |
| 194 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}                       |
| 220 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 91  | getCount         | znodo,zsubsesion,znodo                       |
| 92  | getCountInClient | znodo,zsubsesion,znodo                       |
| 155 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE" |
| 156 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"  |
| 158 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos |
| --- | ----------------- | ---------- |
| 13  | ModificarCuenta   |            |
| 22  | ModificarCuenta01 |            |
| 26  | ModificarCuenta02 |            |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 15  | if (estandar=="00"){                                                                                                    |
| 17  | } else {                                                                                                                |
| 34  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                     |
| 37  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                 |
| 126 | if (zcounti &gt; 0) {                                                                                                   |
| 160 | if (zDC_0.length() == 1) {                                                                                              |
| 171 | &lt;% if (zidpaympend.equals("4")== true){%&gt;                                                                         |
| 173 | &lt;%if (zidstandard.equals("00")== true){%&gt;                                                                         |
| 175 | &lt;%} else {%&gt;                                                                                                      |
| 180 | &lt;%} else { %&gt;                                                                                                     |
| 202 | &lt;%} else {%&gt;                                                                                                      |
| 53  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 54  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 55  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 58  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 60  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 61  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";           |
| 63  | expresión de cálculo/transformación: String zbanco = zcomun + "SCO_ID_BANK_BRANCH";                                     |
| 64  | expresión de cálculo/transformación: String zcuenta = zcomun + "SCO_ACCOUNT_NUMBER";                                    |
| 65  | expresión de cálculo/transformación: String zdatestart = zcomun + "SCO_DT_START";                                       |
| 66  | expresión de cálculo/transformación: String zorden = zcomun + "SCO_ORDINAL";                                            |
| 67  | expresión de cálculo/transformación: String zidpaym = zcomun + "SCO_ID_PAYM_TYPE";                                      |
| 68  | expresión de cálculo/transformación: String znpaym = zcomun + "SCO_NM_PAYM_TYPE";                                       |
| 69  | expresión de cálculo/transformación: String zncurr = zcomun + "NM_CURRENCY";                                            |
| 70  | expresión de cálculo/transformación: String zdc = zcomun + "SSP_DC";                                                    |
| 71  | expresión de cálculo/transformación: String zidstandard = zcomun + "SCO_ID_STANDARD";                                   |
| 72  | expresión de cálculo/transformación: String zidibancode = zcomun + "SCO_IBAN_CODE";                                     |
| 73  | expresión de cálculo/transformación: String zgbiban = zcomun + "SCO_GB_IBAN";                                           |
| 74  | expresión de cálculo/transformación: String zbanco1 = zcomun + "SCO_ID_BANK1";                                          |
| 75  | expresión de cálculo/transformación: String zbanco2 = zcomun + "SCO_ID_BANK2";                                          |
| 76  | expresión de cálculo/transformación: String zoraccount = zcomun + "SCO_OR_ACCOUNT";                                     |
| 77  | expresión de cálculo/transformación: String zorpaymentdata = zcomun + "SCO_OR_PAYMENTDATA";                             |
| 128 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);           |
| 161 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                               |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 43  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 44  | ../../sse_generico/espanol/generico_links.jsp      |
| 215 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                       |
| --- | ----------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                     |
| 9   | /libreria/funciones_sse.js                                              |
| 11  | /libreria/clase_val_entradas.js                                         |
| 103 | /iconos/noname_banco_79_100.gif                                         |
| 114 | javascript:ModificarCuenta01();                                         |
| 117 | javascript:ModificarCuenta02();                                         |
| 139 | javascript:ModificarCuenta();                                           |
| 140 | /iconos/icono_flecha_azul1_ess_11_9.gif                                 |
| 207 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      |
| 209 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                 |
| 43  | ../../sse_generico/espanol/generico_menusup.jsp                         |
| 44  | ../../sse_generico/espanol/generico_links.jsp                           |
| 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g2/espanol/sse_g2_p1.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                   |
| --- | -------------------------------------------------------------------------- |
| 7   | Cuenta bancaria principal                                                  |
| 90  | Cuenta bancaria principal                                                  |
| 97  | Consulta tu cuenta bancaria principal. Modificar cuenta bancaria principal |
| 119 | Inicio                                                                     |
| 120 | Número de cuenta                                                           |
| 121 | Moneda                                                                     |
| 122 | IBAN                                                                       |
| 156 | / / /[valor dinámico]/ N/A                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95  | img     | src=/iconos/noname_banco_79_100.gif; width=79; height=100; alt=Cuenta bancaria principal                                                                                                            |
| 103 | a       | id=linkModificar; class=enlacefuncional; title=Modificar cuenta bancaria principal; style=cursor:hand; href=javascript:ModificarCuenta();                                                           |
| 125 | a       | style=cursor:hand; href=javascript:ModificarCuenta();                                                                                                                                               |
| 126 | img     | alt=Modificar cuenta bancaria principal; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 158 | a       | style=cursor:hand; title=Modificar cuenta bancaria principal; alt=Modificar cuenta bancaria principal; href=javascript:ModificarCuenta();                                                           |
| 182 | form    | name=frmControlPais; id=frmControlPais                                                                                                                                                              |
| 183 | input   | type=hidden; id=ESTANDAR; name=ESTANDAR; value=&lt;%=zidstandard%&gt;                                                                                                                               |
| 193 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21; method=post; name=NombreFormulario; id=NombreFormulario                                                                  |
| 195 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21; method=post; name=NombreFormularioIBAN; id=NombreFormularioIBAN                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 24  | estado          | getParameter(request,"estado")   |
| 25  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                     | Resolución estática parcial                                                                               |
| --- | ----------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 24  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 25  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      |
| 38  | zsubsesion        | "SSE_PAYMENT_DATA"                                                   | SSE_PAYMENT_DATA                                                                                          |
| 39  | zmeta4object      | "SSE_PAYMENT_DATA"                                                   | SSE_PAYMENT_DATA                                                                                          |
| 40  | znodo             | "M4T_PAYMENT_DATA"                                                   | M4T_PAYMENT_DATA                                                                                          |
| 41  | ztipocarga        | "M4T"                                                                | M4T                                                                                                       |
| 43  | zventanas         | "20"                                                                 | 20                                                                                                        |
| 45  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                     | SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                              |
| 46  | zmove             | znodo + ":" + znodo + "[FIRST]"                                      | M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                          |
| 47  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                       |
| 49  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                      |
| 51  | zventana          | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                     |
| 52  | zregistrofinal    | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                        |
| 53  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                          |
| 55  | zbanco            | zcomun + "SCO_ID_BANK_BRANCH"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"} |
| 56  | zcuenta           | zcomun + "SCO_ACCOUNT_NUMBER"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"} |
| 57  | zdatestart        | zcomun + "SCO_DT_START"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}       |
| 58  | zorden            | zcomun + "SCO_ORDINAL"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ORDINAL"}        |
| 59  | zidpaym           | zcomun + "SCO_ID_PAYM_TYPE"                                          | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAYM_TYPE"}   |
| 60  | znpaym            | zcomun + "SCO_NM_PAYM_TYPE"                                          | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}   |
| 61  | zncurr            | zcomun + "NM_CURRENCY"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}        |
| 62  | zdc               | zcomun + "SSP_DC"                                                    | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}             |
| 63  | zidstandard       | zcomun + "SCO_ID_STANDARD"                                           | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STANDARD"}    |
| 64  | zidibancode       | zcomun + "SCO_IBAN_CODE"                                             | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}      |
| 65  | zgbiban           | zcomun + "SCO_GB_IBAN"                                               | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}        |
| 66  | zbanco1           | zcomun + "SCO_ID_BANK1"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}       |
| 67  | zbanco2           | zcomun + "SCO_ID_BANK2"                                              | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}       |
| 68  | zoraccount        | zcomun + "SCO_OR_ACCOUNT"                                            | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_ACCOUNT"}     |
| 69  | zorpaymentdata    | zcomun + "SCO_OR_PAYMENTDATA"                                        | M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PAYMENTDATA"} |
| 79  | zcount            | 0                                                                    | 0                                                                                                         |
| 80  | zcounti           | 0                                                                    | 0                                                                                                         |
| 86  | zcountv           | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                   |
| 113 | zregistroinicials | String.valueOf(zregistroinicial)                                     | String.valueOf(zregistroinicial)                                                                          |
| 114 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                       | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                           |
| 115 | zposicions        | "0"                                                                  | 0                                                                                                         |
| 116 | zposicion         | 0                                                                    | 0                                                                                                         |
| 136 | zidpaympend       | ""                                                                   |                                                                                                           |
| 137 | zidstandardvar    | ""                                                                   |                                                                                                           |
| 138 | zDC_0             | ""                                                                   |                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 71  | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                         |
| 72  | m4:beginjob  |                                                                                                                                 |
| 73  | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                   |
| 74  | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!SSE_PRINCIPAL.CARGA"}                                                                       |
| 74  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                      |
| 75  | m4:outputdef | m4alias=M4T_PAYMENT_DATA                                                                                                        |
| 75  | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[*]"}                                                                |
| 76  | m4:endjob    |                                                                                                                                 |
| 77  | m4:move      |                                                                                                                                 |
| 77  | m4:param     | name=SSE_PAYMENT_DATA; value=M4T_PAYMENT_DATA{":"}M4T_PAYMENT_DATA{"[FIRST]"}                                                   |
| 131 | m4:loop      | from=String.valueOf(zregistroinicial); to=String.valueOf(zregistroinicial)                                                      |
| 154 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true       |
| 160 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                |
| 160 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                |
| 163 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK1"}; htmlsafe=true       |
| 163 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK2"}; htmlsafe=true       |
| 163 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true |
| 178 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true        |
| 180 | m4:item      | m4name=M4T_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}M4T_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_IBAN"}                       |
| 206 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 83  | getCount         | znodo,zsubsesion,znodo                       |
| 84  | getCountInClient | znodo,zsubsesion,znodo                       |
| 141 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE" |
| 142 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"  |
| 144 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos |
| --- | --------------- | ---------- |
| 13  | ModificarCuenta |            |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 15  | if (estandar=="00"){                                                                                                    |
| 17  | } else {                                                                                                                |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                     |
| 29  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                 |
| 112 | if (zcounti &gt; 0) {                                                                                                   |
| 146 | if (zDC_0.length() == 1) {                                                                                              |
| 157 | &lt;% if (zidpaympend.equals("4")== true){%&gt;                                                                         |
| 159 | &lt;%if (zidstandard.equals("00")== true){%&gt;                                                                         |
| 161 | &lt;%} else {%&gt;                                                                                                      |
| 166 | &lt;%} else { %&gt;                                                                                                     |
| 188 | &lt;%} else {%&gt;                                                                                                      |
| 45  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 46  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 47  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 50  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                           |
| 52  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                              |
| 53  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";              |
| 55  | expresión de cálculo/transformación: String zbanco = zcomun + "SCO_ID_BANK_BRANCH";                                     |
| 56  | expresión de cálculo/transformación: String zcuenta = zcomun + "SCO_ACCOUNT_NUMBER";                                    |
| 57  | expresión de cálculo/transformación: String zdatestart = zcomun + "SCO_DT_START";                                       |
| 58  | expresión de cálculo/transformación: String zorden = zcomun + "SCO_ORDINAL";                                            |
| 59  | expresión de cálculo/transformación: String zidpaym = zcomun + "SCO_ID_PAYM_TYPE";                                      |
| 60  | expresión de cálculo/transformación: String znpaym = zcomun + "SCO_NM_PAYM_TYPE";                                       |
| 61  | expresión de cálculo/transformación: String zncurr = zcomun + "NM_CURRENCY";                                            |
| 62  | expresión de cálculo/transformación: String zdc = zcomun + "SSP_DC";                                                    |
| 63  | expresión de cálculo/transformación: String zidstandard = zcomun + "SCO_ID_STANDARD";                                   |
| 64  | expresión de cálculo/transformación: String zidibancode = zcomun + "SCO_IBAN_CODE";                                     |
| 65  | expresión de cálculo/transformación: String zgbiban = zcomun + "SCO_GB_IBAN";                                           |
| 66  | expresión de cálculo/transformación: String zbanco1 = zcomun + "SCO_ID_BANK1";                                          |
| 67  | expresión de cálculo/transformación: String zbanco2 = zcomun + "SCO_ID_BANK2";                                          |
| 68  | expresión de cálculo/transformación: String zoraccount = zcomun + "SCO_OR_ACCOUNT";                                     |
| 69  | expresión de cálculo/transformación: String zorpaymentdata = zcomun + "SCO_OR_PAYMENTDATA";                             |
| 114 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);           |
| 147 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                               |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 36  | ../../sse_generico/espanol/generico_links.jsp      |
| 201 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                       |
| --- | ----------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                     |
| 9   | /libreria/funciones_sse.js                                              |
| 11  | /libreria/clase_val_entradas.js                                         |
| 95  | /iconos/noname_banco_79_100.gif                                         |
| 103 | javascript:ModificarCuenta();                                           |
| 125 | javascript:ModificarCuenta();                                           |
| 126 | /iconos/icono_flecha_azul1_ess_11_9.gif                                 |
| 158 | javascript:ModificarCuenta();                                           |
| 193 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      |
| 195 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                 |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp                         |
| 36  | ../../sse_generico/espanol/generico_links.jsp                           |
| 201 | ../../sse_generico/espanol/generico_disclaimer.jsp                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                              | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ----------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 114 | javascript:ModificarCuenta01();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 117 | javascript:ModificarCuenta02();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 139 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 207 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 209 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 114 | javascript:ModificarCuenta01();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 117 | javascript:ModificarCuenta02();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 139 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 207 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 209 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 114 | javascript:ModificarCuenta01();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 117 | javascript:ModificarCuenta02();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 139 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 207 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 209 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 43  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 44  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 201 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 103 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 125 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 158 | javascript:ModificarCuenta();                                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 193 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod.jsp?&amp;estado=21      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 195 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1_mod_iban.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 201 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
