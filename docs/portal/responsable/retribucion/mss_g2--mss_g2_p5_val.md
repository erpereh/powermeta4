# Valida Préstamos

Identificador: `mss_g2/mss_g2_p5_val.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p5_val.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p5_val.jsp) | `4aff3bcb9742a57176585bd9baa6292bea5e829a286e5b7489697c6862a1849b` |    260 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p5_val.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p5_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Valida Préstamos                                                                                                                              |
| 154 | Valida Préstamos                                                                                                                              |
| 157 | Valida las solicitudes de préstamos de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 171 | Peticiones                                                                                                                                    |
| 187 | Tipo de Préstamo                                                                                                                              |
| 189 | Interés                                                                                                                                       |
| 190 | %                                                                                                                                             |
| 195 | Capital                                                                                                                                       |
| 197 | Importe Cuota                                                                                                                                 |
| 201 | Fec.Solicitud 1º Pago                                                                                                                         |
| 203 | Nº Cuotas                                                                                                                                     |
| 207 | *REC= { *NOD=SSE_LOANS{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                       |
| 226 | Cancelar                                                                                                                                      |
| 236 | Motivo de cancelación                                                                                                                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 156 | img     | alt=Valida Préstamos; title=Valida Préstamos; src=/iconos/noname_banco_79_100.gif; width=103; height=100                                                                              |
| 162 | form    | action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21; method=post; name=oculto; id=oculto                                                                             |
| 163 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 164 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 165 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 208 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 209 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 210 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 217 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 221 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 227 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 237 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 239 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 249 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 250 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 251 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 25  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                  |
| --- | -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                             |
| 17  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                            |
| 18  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                           |
| 23  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                             |
| 70  | zsubsesion           | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 71  | zmeta4object         | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 72  | znodo                | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 73  | znodo1               | "M4T_CURRENCY"                                                                 | M4T_CURRENCY                                                                                                                 |
| 74  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                          |
| 76  | zventanas            | "4"                                                                            | 4                                                                                                                            |
| 77  | zvuelta              | 2                                                                              | 2                                                                                                                            |
| 78  | zdireccion           | "/mss_g2/mss_g2_p5_val.jsp"                                                    | /mss_g2/mss_g2_p5_val.jsp                                                                                                    |
| 79  | zestado              | "21"                                                                           | 21                                                                                                                           |
| 80  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                         |
| 82  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                        |
| 83  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                           |
| 85  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 86  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 87  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"."}                                                                                   |
| 88  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 91  | znodolista           | znodo + "_VAL"                                                                 | SSE_LOANS{"_VAL"}                                                                                                            |
| 92  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"[*]"}                                                                                       |
| 93  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"_VAL"}{"[FIRST]"}                                                                           |
| 94  | zraizlista           | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"."}                                                                   |
| 95  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                               |
| 97  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                             |
| 98  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_LOANS{"!"}SSE_COMUNICACION{"[*]"}                                                                                        |
| 100 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                |
| 101 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_LOANS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                |
| 103 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"."}{"NOMBRE_PERSON"}                                                                  |
| 105 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                    |
| 106 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                   |
| 107 | zNOMBREEMPLEADO      | zcomun+ "NOMBRE_EMPLEADO"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                            |
| 108 | zSCONMLOAN           | zcomun + "SCO_NM_LOAN_1"                                                       | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}                                              |
| 109 | zSCORATE             | zcomun + "SCO_RATE"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}                                                   |
| 110 | zSCOAMTLOAN          | zcomun + "SCO_AMT_LOAN"                                                        | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}                                               |
| 111 | zSCODTREQPAYMENT     | zcomun + "SCO_DT_REQ_PAYMENT"                                                  | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}                                         |
| 112 | zSCOAMTQUOTAS        | zcomun + "SCO_AMT_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}                                             |
| 113 | zNMCURRENCY          | zcomun + "IDEN_CURRENCY"                                                       | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"IDEN_CURRENCY"}                                              |
| 114 | zSC0NUMQUOTAS        | zcomun + "SCO_NUM_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}                                             |
| 118 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                            |
| 119 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                              |
| 139 | zcounti              | 0                                                                              | 0                                                                                                                            |
| 140 | zcountilista         | 0                                                                              | 0                                                                                                                            |
| 141 | zcount               | 0                                                                              | 0                                                                                                                            |
| 148 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                      |
| 149 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                 |
| 168 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                             |
| 169 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 173 | zposicion            | 0                                                                              | 0                                                                                                                            |
| 174 | zposicions           | "0"                                                                            | 0                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 122 | m4:startpage | m4task=SSE_LOANS                                                                                                                                 |
| 123 | m4:beginjob  |                                                                                                                                                  |
| 124 | m4:datadef   | m4o=SSE_LOANS; m4name=SSE_LOANS                                                                                                                  |
| 131 | m4:exec      | m4method=CARGA:{}SSE_LOANS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                           |
| 131 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                       |
| 132 | m4:outputdef | m4alias=SSE_LOANS{"_VAL"}                                                                                                                        |
| 132 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}SSE_LOANS{"_VAL"}{"[*]"}                                                                                       |
| 133 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                         |
| 133 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}SSE_COMUNICACION{"[*]"}                                                                                        |
| 134 | m4:outputdef | m4alias=SSE_LOANS                                                                                                                                |
| 134 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 135 | m4:endjob    |                                                                                                                                                  |
| 136 | m4:move      |                                                                                                                                                  |
| 136 | m4:param     | name=SSE_LOANS; value=SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                      |
| 137 | m4:move      |                                                                                                                                                  |
| 137 | m4:param     | name=SSE_LOANS; value=SSE_LOANS{"_VAL"}{":"}SSE_LOANS{"_VAL"}{"[FIRST]"}                                                                         |
| 176 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                        |
| 184 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                          |
| 184 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                 |
| 188 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}; htmlsafe=true                                            |
| 190 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}; htmlsafe=true                                                 |
| 196 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}; htmlsafe=true                                             |
| 196 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"IDEN_CURRENCY"}; htmlsafe=true                                            |
| 198 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}; htmlsafe=true                                           |
| 202 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}; htmlsafe=true                                       |
| 204 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}; htmlsafe=true                                           |
| 209 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                  |
| 209 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                  |
| 209 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                  |
| 254 | m4:endpage   |                                                                                                                                                  |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 127 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 128 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 144 | getCountInClient | znodo,zsubsesion,znodo                      |
| 145 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 146 | getCount         | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 31  | filtrar  |            |
| 38  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 20  | if ((zfiltro==null)&#124;&#124; (zfiltro.equals(""))){zfiltro = "Todos";}                                                                                                           |
| 21  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 26  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 41  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 46  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 51  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 167 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 253 | &lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;Actualmente no tienes ningún dato que validar en este nivel.&lt;/div&gt;&lt;%}%&gt;                                                |
| 42  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 43  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 45  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 47  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 48  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 49  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 52  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 53  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 54  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 55  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 56  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 81  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 83  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 85  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 86  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 87  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 88  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 91  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 92  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 93  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 94  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 95  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 98  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 101 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 103 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 105 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 106 | expresión de cálculo/transformación: String zNACCION =zcomun + "N_ACCION";                                                                                                          |
| 108 | expresión de cálculo/transformación: String zSCONMLOAN = zcomun + "SCO_NM_LOAN_1";                                                                                                  |
| 109 | expresión de cálculo/transformación: String zSCORATE = zcomun + "SCO_RATE";                                                                                                         |
| 110 | expresión de cálculo/transformación: String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";                                                                                                  |
| 111 | expresión de cálculo/transformación: String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";                                                                                       |
| 112 | expresión de cálculo/transformación: String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";                                                                                              |
| 113 | expresión de cálculo/transformación: String zNMCURRENCY = zcomun + "IDEN_CURRENCY";                                                                                                 |
| 114 | expresión de cálculo/transformación: String zSC0NUMQUOTAS = zcomun + "SCO_NUM_QUOTAS";                                                                                              |
| 118 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 119 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 169 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %&gt;                                                                 |
| 179 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 68  | ../../sse_generico/espanol/generico_links.jsp         |
| 160 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 248 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                             |
| 10  | /libreria/funciones_sse_val1.js                                                 |
| 11  | /libreria/funciones_sse.js                                                      |
| 156 | /iconos/noname_banco_79_100.gif                                                 |
| 162 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21                   |
| 208 |                                                                                 |
| 217 |                                                                                 |
| 237 |                                                                                 |
| 249 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 68  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 78  | /mss_g2/mss_g2_p5_val.jsp                                                       |
| 160 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 248 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 160 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 248 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 162 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21                   | ausente    | P06                                                                                                             |
| BASE   | 249 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 78  | /mss_g2/mss_g2_p5_val.jsp                                                       | ausente    | P06                                                                                                             |
| BASE   | 160 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 248 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p5_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
