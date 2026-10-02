# Valida idiomas

Identificador: `mss_g1/mss_g1_p3_val2 _OLD.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp](<../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp>) | `8b6851316fb3f348761b23848e25e8e0e39621381f32914bef6879ba77268927` |    269 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp](<../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp>) | `8b6851316fb3f348761b23848e25e8e0e39621381f32914bef6879ba77268927` |    269 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp](<../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val2 _OLD.jsp>). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Valida idiomas                                                                                                                         |
| 163 | Valida idiomas                                                                                                                         |
| 167 | Valida los cambios de idioma de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 184 | Peticiones                                                                                                                             |
| 205 | Idioma:                                                                                                                                |
| 209 | Nivel:                                                                                                                                 |
| 211 | TOEIC:                                                                                                                                 |
| 213 | Fecha TOEIC:                                                                                                                           |
| 217 | *REC= { *NOD=SSE_EMP_LANGUAGES{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                        |
| 233 | Cancelar                                                                                                                               |
| 240 | Motivo de cancelación                                                                                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 166 | img     | alt=Valida idiomas; src=/iconos/noname_valida_idiomas_104_100.gif; width=104; height=100                                                                                              |
| 176 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11; method=post; name=oculto; id=oculto                                                                            |
| 177 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 178 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 179 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 218 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 219 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 220 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 227 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 230 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 233 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 242 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                  |
| 243 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 251 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 252 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 253 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 23  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | -------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | estado               | (String) zobjtabla.m4paramvalor("estado")                                      | (String) zobjtabla.m4paramvalor("estado")                                                                                                    |
| 15  | zfiltro              | (String) zobjtabla.m4paramvalor("zfiltro")                                     | (String) zobjtabla.m4paramvalor("zfiltro")                                                                                                   |
| 16  | zinicios             | (String) zobjtabla.m4paramvalor("zinicios")                                    | (String) zobjtabla.m4paramvalor("zinicios")                                                                                                  |
| 21  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                             |
| 73  | zsubsesion           | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 74  | zmeta4object         | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 75  | znodo                | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 76  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                          |
| 78  | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                |
| 79  | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_EMP_LANGUAGES{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                        |
| 81  | zventanas            | "4"                                                                            | 4                                                                                                                                            |
| 82  | zvuelta              | 2                                                                              | 2                                                                                                                                            |
| 83  | zdireccion           | "/mss_g1/mss_g1_p3_val2.jsp"                                                   | /mss_g1/mss_g1_p3_val2.jsp                                                                                                                   |
| 84  | zestado              | "11"                                                                           | 11                                                                                                                                           |
| 85  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 87  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 88  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 90  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 91  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 92  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"."}                                                                           |
| 93  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 95  | znodolista           | znodo + "_VAL"                                                                 | SSE_EMP_LANGUAGES{"_VAL"}                                                                                                                    |
| 96  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"[*]"}                                                                                       |
| 97  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"_VAL"}{"[FIRST]"}                                                                           |
| 98  | zraizlista           | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"."}                                                           |
| 99  | ziteratorlista       | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}                                                                |
| 100 | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                       |
| 102 | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                             |
| 103 | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_EMP_LANGUAGES{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 107 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 108 | zACCIONACEPTADO      | zcomun + "ACCION_ACEPTADO"                                                     | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                    |
| 109 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                    |
| 110 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 111 | zSTDNLANGUAGE        | zcomun +"STD_N_LANGUAGE"                                                       | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}STD_N_LANGUAGE                                         |
| 112 | zSTDNLISTENLEVEL     | zcomun + "STD_N_LISTEN_LEVEL"                                                  | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}                                 |
| 113 | zSTDNSPEAKLEVEL      | zcomun + "STD_N_SPEAK_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}                                  |
| 114 | zSTDNWRITELEVEL      | zcomun + "STD_N_WRITE_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}                                  |
| 118 | zCSPTOEIC            | zcomun + "CSP_TOEIC"                                                           | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}                                          |
| 119 | zCSPFECHATOEIC       | zcomun + "CSP_FECHA_TOEIC"                                                     | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}                                    |
| 121 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"."}{"NOMBRE_PERSON"}                                                          |
| 123 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                    |
| 124 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                      |
| 145 | zcounti              | 0                                                                              | 0                                                                                                                                            |
| 146 | zcount               | 0                                                                              | 0                                                                                                                                            |
| 152 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 154 | zcountlista          | 0                                                                              | 0                                                                                                                                            |
| 159 | zcountvlista         | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                  |
| 187 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 188 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 189 | zposicions           | "0"                                                                            | 0                                                                                                                                            |
| 190 | zcontrol             | 0                                                                              | 0                                                                                                                                            |
| 191 | zposicion            | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 127 | m4:startpage | m4task=SSE_EMP_LANGUAGES                                                                                                                                         |
| 127 | m4:beginjob  |                                                                                                                                                                  |
| 128 | m4:datadef   | m4o=SSE_EMP_LANGUAGES; m4name=SSE_EMP_LANGUAGES                                                                                                                  |
| 137 | m4:exec      | m4method=CARGA:{}SSE_EMP_LANGUAGES{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                   |
| 137 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 138 | m4:outputdef | m4alias=SSE_EMP_LANGUAGES{"_VAL"}                                                                                                                                |
| 138 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"_VAL"}{"[*]"}                                                                                       |
| 139 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                         |
| 139 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 140 | m4:outputdef | m4alias=SSE_EMP_LANGUAGES                                                                                                                                        |
| 140 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 141 | m4:endjob    |                                                                                                                                                                  |
| 142 | m4:move      |                                                                                                                                                                  |
| 142 | m4:param     | name=SSE_EMP_LANGUAGES; value=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 143 | m4:move      |                                                                                                                                                                  |
| 143 | m4:param     | name=SSE_EMP_LANGUAGES; value=SSE_EMP_LANGUAGES{"_VAL"}{":"}SSE_EMP_LANGUAGES{"_VAL"}{"[FIRST]"}                                                                 |
| 193 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 203 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                  |
| 203 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 206 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}STD_N_LANGUAGE; htmlsafe=true                                       |
| 210 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 212 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}; htmlsafe=true                                        |
| 214 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; htmlsafe=true                                  |
| 219 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 219 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 219 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 264 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 132 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 133 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 149 | getCountInClient | znodo,zsubsesion,znodo                      |
| 150 | getCount         | znodo,zsubsesion,znodo                      |
| 157 | getCountInClient | znodolista,zsubsesion,znodolista            |

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
| 40  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 48  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 53  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 181 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 259 | }else{%&gt;                                                                                                                                                                         |
| 43  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 44  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 47  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 49  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 50  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 51  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 54  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 55  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 56  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 57  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 58  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 79  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 86  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 88  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 90  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 91  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                             |
| 92  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 93  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 95  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 96  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 97  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 98  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 99  | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 100 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 103 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 107 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 108 | expresión de cálculo/transformación: String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";                                                                                           |
| 109 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 110 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 112 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";                                                                                       |
| 113 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";                                                                                         |
| 114 | expresión de cálculo/transformación: String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";                                                                                         |
| 118 | expresión de cálculo/transformación: String zCSPTOEIC = zcomun + "CSP_TOEIC";                                                                                                       |
| 119 | expresión de cálculo/transformación: String zCSPFECHATOEIC = zcomun + "CSP_FECHA_TOEIC";                                                                                            |
| 121 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 123 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 124 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 188 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 197 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 71  | ../../sse_generico/espanol/generico_links.jsp         |
| 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 166 | /iconos/noname_valida_idiomas_104_100.gif                                       |
| 176 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11                  |
| 251 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 71  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 83  | /mss_g1/mss_g1_p3_val2.jsp                                                      |
| 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 71  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 176 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 251 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 71  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 83  | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 71  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 176 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 251 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 70  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 71  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 83  | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 170 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 256 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p3_val2 _OLD.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
