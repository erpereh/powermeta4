# Valida las solicitudes de movilidad interna

Identificador: `mss_g3/mss_g3_p2_val.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p2_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p2_val.jsp) | `2f767130be0810552e3cc75ea0337e751d507be88ebe64c2c898bfc68f250d0e` |    201 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p2_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p2_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Valida las solicitudes de movilidad interna                                                                                                           |
| 141 | Valida las solicitudes de movilidad interna                                                                                                           |
| 144 | Valida las solicitudes de movilidad interna de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 159 | Peticiones                                                                                                                                            |
| 175 | Proceso de selección                                                                                                                                  |
| 176 | Puesto                                                                                                                                                |
| 177 | *REC= { *NOD=SSE_INT_MOVILITY{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                        |
| 180 | Cancelar                                                                                                                                              |
| 182 | Motivo de cancelación                                                                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 143 | img     | alt=Valida las solicitudes de movilidad interna; title=Valida las solicitudes de movilidad interna; src=/iconos/noname_valida_movilidad_interna_98_100.gif; width=98; height=100      |
| 148 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31; method=post; name=oculto; id=oculto                                                                             |
| 149 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 150 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 151 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 177 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 177 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 177 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 180 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 180 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 180 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 182 | form    | name=c&lt;%=zposicion%&gt;; title=Escribe el motivo de cancelación; id=c&lt;%=zposicion%&gt;; action=                                                                                 |
| 182 | input   | size=48; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                                              |
| 186 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 186 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 186 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 25  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 16  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                           |
| 17  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                          |
| 18  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                         |
| 23  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                           |
| 70  | zsubsesion           | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 71  | zmeta4object         | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 72  | znodo                | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 73  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                        |
| 74  | zventanas            | "4"                                                                            | 4                                                                                                                                          |
| 75  | zvuelta              | 2                                                                              | 2                                                                                                                                          |
| 76  | zdireccion           | "/mss_g3/mss_g3_p2_val.jsp"                                                    | /mss_g3/mss_g3_p2_val.jsp                                                                                                                  |
| 77  | zestado              | "31"                                                                           | 31                                                                                                                                         |
| 78  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 80  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 81  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 83  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 84  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 85  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"."}                                                                            |
| 86  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 88  | znodolista           | znodo + "_VAL"                                                                 | SSE_INT_MOVILITY{"_VAL"}                                                                                                                   |
| 89  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"_VAL"}{"[*]"}                                                                                       |
| 90  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_INT_MOVILITY{"_VAL"}{":"}SSE_INT_MOVILITY{"_VAL"}{"[FIRST]"}                                                                           |
| 91  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_INT_MOVILITY{"_VAL"}{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                        |
| 93  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                           |
| 94  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_INT_MOVILITY{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 96  | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                              |
| 97  | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_INT_MOVILITY{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                       |
| 99  | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 100 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 101 | zNOMBREEMPLEADO      | zcomun+ "NOMBRE_EMPLEADO"                                                      | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                     |
| 102 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"."}{"NOMBRE_PERSON"}                                                           |
| 104 | zSCONMRECRUITMENT    | zcomun+ "SCO_NM_RECRUITMENT"                                                   | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_RECRUITMENT"}                                  |
| 105 | zSTDNJOBCODE         | zcomun + "STD_N_JOB_CODE"                                                      | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 107 | zNOMBREEMPLEADOlista | zcomunlista+ "NOMBRE_EMPLEADO"                                                 | SSE_INT_MOVILITY{"_VAL"}{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                     |
| 108 | zSTDIDPERSON         | zcomunlista+"STD_ID_PERSON"                                                    | SSE_INT_MOVILITY{"_VAL"}{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                           |
| 128 | zcounti              | 0                                                                              | 0                                                                                                                                          |
| 129 | zcountilista         | 0                                                                              | 0                                                                                                                                          |
| 130 | zcount               | 0                                                                              | 0                                                                                                                                          |
| 137 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 138 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                               |
| 154 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 155 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 162 | zposicion            | 0                                                                              | 0                                                                                                                                          |
| 163 | zposicions           | "0"                                                                            | 0                                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 111 | m4:startpage | m4task=SSE_INT_MOVILITY                                                                                                                                        |
| 112 | m4:beginjob  |                                                                                                                                                                |
| 113 | m4:datadef   | m4o=SSE_INT_MOVILITY; m4name=SSE_INT_MOVILITY                                                                                                                  |
| 120 | m4:exec      | m4method=CARGA:{}SSE_INT_MOVILITY{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                  |
| 120 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 121 | m4:outputdef | m4alias=SSE_INT_MOVILITY{"_VAL"}                                                                                                                               |
| 121 | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"_VAL"}{"[*]"}                                                                                       |
| 122 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                       |
| 122 | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 123 | m4:outputdef | m4alias=SSE_INT_MOVILITY                                                                                                                                       |
| 123 | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 124 | m4:endjob    |                                                                                                                                                                |
| 125 | m4:move      |                                                                                                                                                                |
| 125 | m4:param     | name=SSE_INT_MOVILITY; value=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 126 | m4:move      |                                                                                                                                                                |
| 126 | m4:param     | name=SSE_INT_MOVILITY; value=SSE_INT_MOVILITY{"_VAL"}{":"}SSE_INT_MOVILITY{"_VAL"}{"[FIRST]"}                                                                  |
| 165 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 173 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                   |
| 173 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 175 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_RECRUITMENT"}; htmlsafe=true                                |
| 176 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 177 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 177 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 177 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 196 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 116 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 117 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 133 | getCountInClient | znodo,zsubsesion,znodo                      |
| 134 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 135 | getCount         | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 31  | filtrar  |            |
| 38  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 20  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 21  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 26  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 41  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 46  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 51  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 153 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 190 | &lt;%}else{%&gt;                                                                                                                                                                    |
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
| 86  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 88  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 89  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 90  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 91  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 94  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 97  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 99  | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 100 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 102 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 105 | expresión de cálculo/transformación: String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE";                                                                                               |
| 155 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 168 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 68  | ../../sse_generico/espanol/generico_links.jsp         |
| 147 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 189 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 194 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                             |
| 10  | /libreria/funciones_sse_val1.js                                                 |
| 11  | /libreria/funciones_sse.js                                                      |
| 143 | /iconos/noname_valida_movilidad_interna_98_100.gif                              |
| 148 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31                   |
| 177 |                                                                                 |
| 180 |                                                                                 |
| 182 |                                                                                 |
| 186 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 68  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 76  | /mss_g3/mss_g3_p2_val.jsp                                                       |
| 147 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 189 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 194 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 147 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 189 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 194 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 148 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31                   | ausente    | P06                                                                                                             |
| BASE   | 186 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 68  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 76  | /mss_g3/mss_g3_p2_val.jsp                                                       | ausente    | P06                                                                                                             |
| BASE   | 147 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 189 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 194 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p2_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
