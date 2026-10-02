# Valida cuenta bancaria principal

Identificador: `mss_g2/mss_g2_p1_val.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p1_val.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p1_val.jsp) | `9222e11e89a671661c47d767df94c9635f0bfd8304f9416ef0d88fa484eaeadb` |    297 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p1_val.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p1_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Valida cuenta bancaria principal                                                                                                                             |
| 159 | Valida cuenta bancaria principal                                                                                                                             |
| 164 | Valida los cambios de la cuenta bancaria principal de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 181 | Peticiones                                                                                                                                                   |
| 194 | Inicio:                                                                                                                                                      |
| 198 | Código bancario:                                                                                                                                             |
| 199 | / / / [valor dinámico]/[valor dinámico]/[valor dinámico]/                                                                                                    |
| 231 | Moneda:                                                                                                                                                      |
| 235 | Forma de pago:                                                                                                                                               |
| 239 | *REC= { *NOD=SSE_PAYMENT_DATA{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                               |
| 258 | Cancelar                                                                                                                                                     |
| 268 | Motivo de cancelación                                                                                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 163 | img     | alt=Valida cuenta bancaria principal; src=/iconos/noname_valida_bancarios_100_100.gif; width=100; height=100                                                                          |
| 169 | form    | action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21; method=post; name=oculto; id=oculto                                                                             |
| 170 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 171 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 172 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 240 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 241 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 242 | input   | size=1; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                |
| 249 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 253 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 259 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 270 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                  |
| 271 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 277 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 278 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 279 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 15  | estado          | zhash.get("estado")            |
| 16  | zfiltro         | zhash.get("zfiltro")           |
| 17  | zinicios        | zhash.get("zinicios")          |
| 24  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 15  | estado               | (String) zhash.get("estado")                                                   | (String) zhash.get("estado")                                                                                                               |
| 16  | zfiltro              | (String) zhash.get("zfiltro")                                                  | (String) zhash.get("zfiltro")                                                                                                              |
| 17  | zinicios             | (String) zhash.get("zinicios")                                                 | (String) zhash.get("zinicios")                                                                                                             |
| 22  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                           |
| 71  | zsubsesion           | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 72  | zmeta4object         | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 73  | znodo                | "SSE_PAYMENT_DATA"                                                             | SSE_PAYMENT_DATA                                                                                                                           |
| 74  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                        |
| 75  | zventanas            | "4"                                                                            | 4                                                                                                                                          |
| 76  | zvuelta              | 2                                                                              | 2                                                                                                                                          |
| 77  | zdireccion           | "/mss_g2/mss_g2_p1_val.jsp"                                                    | /mss_g2/mss_g2_p1_val.jsp                                                                                                                  |
| 78  | zestado              | "21"                                                                           | 21                                                                                                                                         |
| 79  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 81  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 82  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 86  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 87  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"."}                                                                            |
| 88  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 89  | zlectura             | zsubsesion + "!" + znodo                                                       | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA                                                                                                      |
| 90  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 92  | znodolista           | znodo + "_VAL"                                                                 | SSE_PAYMENT_DATA{"_VAL"}                                                                                                                   |
| 93  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"[*]"}                                                                                       |
| 94  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"_VAL"}{"[FIRST]"}                                                                           |
| 95  | zraizlista           | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"."}                                                            |
| 96  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                        |
| 98  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                           |
| 99  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_PAYMENT_DATA{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 103 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                              |
| 104 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_PAYMENT_DATA{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                       |
| 108 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 109 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 110 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                     |
| 111 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"."}{"NOMBRE_PERSON"}                                                           |
| 113 | zfecinicio           | zcomun +"SCO_DT_START"                                                         | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}SCO_DT_START                                            |
| 114 | zidbanco             | zcomun + "SCO_ID_BANK_BRANCH"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}                                  |
| 115 | ziddc                | zcomun + "SSP_DC"                                                              | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SSP_DC"}                                              |
| 116 | zidcuenta            | zcomun + "SCO_ACCOUNT_NUMBER"                                                  | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}                                  |
| 117 | zNcurr               | zcomun + "NM_CURRENCY"                                                         | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                         |
| 118 | zNformapago          | zcomun + "SCO_NM_PAYM_TYPE"                                                    | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}                                    |
| 119 | zidstandard          | zcomun + "SCO_ID_STANDARD"                                                     | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_STANDARD"}                                     |
| 121 | zibancode            | zcomun + "SCO_IBAN_CODE"                                                       | SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}                                       |
| 123 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                     |
| 124 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                       |
| 145 | zcounti              | 0                                                                              | 0                                                                                                                                          |
| 146 | zcount               | 0                                                                              | 0                                                                                                                                          |
| 147 | zcountilista         | 0                                                                              | 0                                                                                                                                          |
| 154 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 155 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                               |
| 175 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 176 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 177 | zposicions           | "0"                                                                            | 0                                                                                                                                          |
| 178 | zposicion            | 0                                                                              | 0                                                                                                                                          |
| 201 | zidpaympend          | ""                                                                             |                                                                                                                                            |
| 202 | zidstandardpend      | ""                                                                             |                                                                                                                                            |
| 203 | zDC_0                | ""                                                                             |                                                                                                                                            |
| 204 | zidbankbranchTEMP    | ""                                                                             |                                                                                                                                            |
| 205 | zidbank1TEMP         | ""                                                                             |                                                                                                                                            |
| 206 | zidbank2TEMP         | ""                                                                             |                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 127 | m4:startpage | m4task=SSE_PAYMENT_DATA                                                                                                                                        |
| 127 | m4:beginjob  |                                                                                                                                                                |
| 128 | m4:datadef   | m4o=SSE_PAYMENT_DATA; m4name=SSE_PAYMENT_DATA                                                                                                                  |
| 137 | m4:exec      | m4method=CARGA:{}SSE_PAYMENT_DATA{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                  |
| 137 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 138 | m4:outputdef | m4alias=SSE_PAYMENT_DATA{"_VAL"}                                                                                                                               |
| 138 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"_VAL"}{"[*]"}                                                                                       |
| 139 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                       |
| 139 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 140 | m4:outputdef | m4alias=SSE_PAYMENT_DATA                                                                                                                                       |
| 140 | m4:param     | name=m4name0; value=SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 141 | m4:endjob    |                                                                                                                                                                |
| 142 | m4:move      |                                                                                                                                                                |
| 142 | m4:param     | name=SSE_PAYMENT_DATA; value=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 143 | m4:move      |                                                                                                                                                                |
| 143 | m4:param     | name=SSE_PAYMENT_DATA; value=SSE_PAYMENT_DATA{"_VAL"}{":"}SSE_PAYMENT_DATA{"_VAL"}{"[FIRST]"}                                                                  |
| 185 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 192 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                   |
| 192 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 195 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}SCO_DT_START; htmlsafe=true                                          |
| 222 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_BANK_BRANCH"}; htmlsafe=true                                |
| 222 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 222 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_CODE"}; htmlsafe=true                                     |
| 222 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_IBAN_KEY"}; htmlsafe=true                                      |
| 225 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACCOUNT_NUMBER"}; htmlsafe=true                                |
| 232 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                       |
| 236 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAYM_TYPE"}; htmlsafe=true                                  |
| 241 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 241 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 241 | m4:item      | m4name=SSE_PAYMENT_DATA{":"}SSE_PAYMENT_DATA{"!"}SSE_PAYMENT_DATA{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 291 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 132 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel    |
| 133 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro        |
| 150 | getCountInClient | znodo,zsubsesion,znodo                         |
| 151 | getCount         | znodo,zsubsesion,znodo                         |
| 152 | getCountInClient | znodolista,zsubsesion,znodolista               |
| 209 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE"   |
| 210 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_STANDARD"    |
| 211 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_BANK_BRANCH" |
| 214 | getItem          | znodo,zsubsesion,znodo,"","SSP_DC"             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 30  | filtrar  |            |
| 39  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 19  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 20  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 23  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 25  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 40  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 47  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 52  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 174 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 216 | if (zDC_0.length() == 1) {                                                                                                                                                          |
| 220 | if ((zidpaympend.equals("4")== true)){%&gt;                                                                                                                                         |
| 221 | &lt;%if (zidstandardpend.equals("")== true){%&gt;                                                                                                                                   |
| 223 | &lt;%} else {%&gt;                                                                                                                                                                  |
| 286 | &lt;%}else                                                                                                                                                                          |
| 43  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 44  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 46  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 48  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 49  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 50  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 53  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 54  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 55  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 56  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 57  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 80  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 82  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 86  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 87  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 88  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 89  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 90  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 92  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 93  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 94  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 95  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 96  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 99  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 104 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 108 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 109 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 110 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 111 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 114 | expresión de cálculo/transformación: String zidbanco = zcomun + "SCO_ID_BANK_BRANCH";                                                                                               |
| 115 | expresión de cálculo/transformación: String ziddc = zcomun + "SSP_DC";                                                                                                              |
| 116 | expresión de cálculo/transformación: String zidcuenta = zcomun + "SCO_ACCOUNT_NUMBER";                                                                                              |
| 117 | expresión de cálculo/transformación: String zNcurr = zcomun + "NM_CURRENCY";                                                                                                        |
| 118 | expresión de cálculo/transformación: String zNformapago = zcomun + "SCO_NM_PAYM_TYPE";                                                                                              |
| 119 | expresión de cálculo/transformación: String zidstandard = zcomun + "SCO_ID_STANDARD";                                                                                               |
| 120 | expresión de cálculo/transformación: String zibankey = zcomun + "SCO_IBAN_KEY";                                                                                                     |
| 121 | expresión de cálculo/transformación: String zibancode = zcomun + "SCO_IBAN_CODE";                                                                                                   |
| 123 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 124 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 176 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 188 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;%&gt;                                                                                                 |
| 217 | expresión de cálculo/transformación: zDC_0 = "0" + zDC_0;                                                                                                                           |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 69  | ../../sse_generico/espanol/generico_links.jsp         |
| 167 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 285 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 163 | /iconos/noname_valida_bancarios_100_100.gif                                     |
| 169 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21                   |
| 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 69  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 77  | /mss_g2/mss_g2_p1_val.jsp                                                       |
| 167 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 285 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 167 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 285 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 169 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21                   | ausente    | P06                                                                                                             |
| BASE   | 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 77  | /mss_g2/mss_g2_p1_val.jsp                                                       | ausente    | P06                                                                                                             |
| BASE   | 167 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 285 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p1_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
