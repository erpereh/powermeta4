# Valida e-mail

Identificador: `mss_g1/mss_g1_p1_val2.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val2.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val2.jsp) | `49d0bf0432033883211195718a07ad281ae65b7db94de84ed516f26e52b7d460` |    200 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_p1_val2.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_p1_val2.jsp)   | `49d0bf0432033883211195718a07ad281ae65b7db94de84ed516f26e52b7d460` |    200 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p1_val2.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p1_val2.jsp) | `49d0bf0432033883211195718a07ad281ae65b7db94de84ed516f26e52b7d460` |    200 |
| BASE / español    | [mss_g1/espanol/mss_g1_p1_val2.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p1_val2.jsp)                             | `49d0bf0432033883211195718a07ad281ae65b7db94de84ed516f26e52b7d460` |    200 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val2.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Valida e-mail                                                                                                                          |
| 146 | Valida e-mail                                                                                                                          |
| 150 | Valida los cambios de e-mail de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 164 | Peticiones                                                                                                                             |
| 178 | E-mail                                                                                                                                 |
| 178 | Lugar                                                                                                                                  |
| 179 | *REC= { *NOD=SSE_E_MAIL{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                               |
| 182 | Cancelar                                                                                                                               |
| 184 | Motivo de cancelación                                                                                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 149 | img     | alt=Valida e-mail; title=Valida e-mail; src=/iconos/noname_valida_email_79_100.gif; width=100; height=100                                                                             |
| 155 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11; method=post; name=oculto; id=oculto                                                                            |
| 156 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 157 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 158 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 179 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 179 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 179 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 182 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 182 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 182 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 184 | form    | name=c&lt;%=zposicion%&gt;; title=Escribe el motivo de cancelación; id=c&lt;%=zposicion%&gt;; action=                                                                                 |
| 184 | input   | size=48; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                                              |
| 188 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 188 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 188 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 23  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 14  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                               |
| 15  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                              |
| 16  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                             |
| 21  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                               |
| 70  | zsubsesion           | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 71  | zmeta4object         | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 72  | znodo                | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 73  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                            |
| 74  | zventanas            | "4"                                                                            | 4                                                                                                                              |
| 75  | zvuelta              | 2                                                                              | 2                                                                                                                              |
| 76  | zdireccion           | "/mss_g1/mss_g1_p1_val2.jsp"                                                   | /mss_g1/mss_g1_p1_val2.jsp                                                                                                     |
| 77  | zestado              | "11"                                                                           | 11                                                                                                                             |
| 78  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 80  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 81  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 83  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 84  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 85  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"."}                                                                                  |
| 86  | zlectura             | zsubsesion + "!" + znodo                                                       | SSE_E_MAIL{"!"}SSE_E_MAIL                                                                                                      |
| 87  | ziterator            | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL                                                                                       |
| 88  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 90  | znodolista           | znodo + "_VAL"                                                                 | SSE_E_MAIL{"_VAL"}                                                                                                             |
| 91  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"[*]"}                                                                                       |
| 92  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"_VAL"}{"[FIRST]"}                                                                           |
| 93  | zraizlista           | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"."}                                                                  |
| 94  | ziteratorlista       | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}                                                                       |
| 95  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                              |
| 97  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                               |
| 98  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_E_MAIL{"!"}SSE_COMUNICACION{"[*]"}                                                                                         |
| 100 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                  |
| 101 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_E_MAIL{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                 |
| 103 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"."}{"NOMBRE_PERSON"}                                                                 |
| 105 | zORDINAL             | zcomun+"ORDINAL"                                                               | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}ORDINAL                                                       |
| 106 | zNACCION             | zcomun+ "N_ACCION"                                                             | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                  |
| 107 | zNOMBREEMPLEADO      | zcomun+"NOMBRE_EMPLEADO"                                                       | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}NOMBRE_EMPLEADO                                               |
| 108 | zSTDEMAIL            | zcomun+"STD_EMAIL"                                                             | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL                                                     |
| 109 | zSTDNLOCATIONTYPE    | zcomun+ "STD_N_LOCATION_TYPE"                                                  | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                       |
| 111 | zNOMBREEMPLEADOlista | zcomunlista+ "NOMBRE_EMPLEADO"                                                 | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                           |
| 112 | zSTDIDPERSON         | zcomunlista+"STD_ID_PERSON"                                                    | SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                                 |
| 132 | zcounti              | 0                                                                              | 0                                                                                                                              |
| 133 | zcountilista         | 0                                                                              | 0                                                                                                                              |
| 134 | zcount               | 0                                                                              | 0                                                                                                                              |
| 141 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |
| 142 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                   |
| 161 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 162 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 166 | zposicion            | 0                                                                              | 0                                                                                                                              |
| 167 | zposicions           | "0"                                                                            | 0                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 114 | m4:startpage | m4task=SSE_E_MAIL                                                                                                                                  |
| 114 | m4:beginjob  |                                                                                                                                                    |
| 115 | m4:datadef   | m4o=SSE_E_MAIL; m4name=SSE_E_MAIL                                                                                                                  |
| 124 | m4:exec      | m4method=CARGA:{}SSE_E_MAIL{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                            |
| 124 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                         |
| 125 | m4:outputdef | m4alias=SSE_E_MAIL{"_VAL"}                                                                                                                         |
| 125 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SSE_E_MAIL{"_VAL"}{"[*]"}                                                                                       |
| 126 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                           |
| 126 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SSE_COMUNICACION{"[*]"}                                                                                         |
| 127 | m4:outputdef | m4alias=SSE_E_MAIL                                                                                                                                 |
| 127 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 128 | m4:endjob    |                                                                                                                                                    |
| 129 | m4:move      |                                                                                                                                                    |
| 129 | m4:param     | name=SSE_E_MAIL; value=SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                     |
| 130 | m4:move      |                                                                                                                                                    |
| 130 | m4:param     | name=SSE_E_MAIL; value=SSE_E_MAIL{"_VAL"}{":"}SSE_E_MAIL{"_VAL"}{"[FIRST]"}                                                                        |
| 169 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                          |
| 176 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}NOMBRE_EMPLEADO; htmlsafe=true                                             |
| 176 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                |
| 178 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; htmlsafe=true                                                   |
| 178 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                     |
| 179 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}ORDINAL; htmlsafe=true                                                     |
| 179 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}ORDINAL; htmlsafe=true                                                     |
| 179 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}ORDINAL; htmlsafe=true                                                     |
| 195 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 119 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 120 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 137 | getCountInClient | znodo,zsubsesion,znodo                      |
| 138 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 139 | getCount         | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 31  | filtrar  |            |
| 38  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 18  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 41  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 46  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 51  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 160 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 192 | &lt;%}else{%&gt;                                                                                                                                                                    |
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
| 79  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 81  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 83  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 84  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 85  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 86  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 87  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                     |
| 88  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 90  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 91  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 92  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 93  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 94  | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 95  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 98  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 101 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 103 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 162 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %&gt;                                                                 |
| 172 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 68  | ../../sse_generico/espanol/generico_links.jsp         |
| 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 149 | /iconos/noname_valida_email_79_100.gif                                          |
| 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11                  |
| 179 |                                                                                 |
| 182 |                                                                                 |
| 184 |                                                                                 |
| 188 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 68  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 76  | /mss_g1/mss_g1_p1_val2.jsp                                                      |
| 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 188 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 76  | /mss_g1/mss_g1_p1_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 188 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 76  | /mss_g1/mss_g1_p1_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 188 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 76  | /mss_g1/mss_g1_p1_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| BASE   | 188 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 76  | /mss_g1/mss_g1_p1_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 191 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 197 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p1_val2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
