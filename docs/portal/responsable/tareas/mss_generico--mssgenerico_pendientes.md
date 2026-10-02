# Mis tareas

Identificador: `mss_generico/mssgenerico_pendientes.jsp`. Perfil: **responsable**. Dominio: **tareas**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mssgenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_pendientes.jsp) | `f2af03e058d771c5e66a28530298241711be348078901fa3af6c5728b4104d38` |    289 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mssgenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mssgenerico_pendientes.jsp) | `f2af03e058d771c5e66a28530298241711be348078901fa3af6c5728b4104d38` |    289 |
| BASE / español    | [mss_generico/espanol/mssgenerico_pendientes.jsp](../../../../clon_portal/portal/mss_generico/espanol/mssgenerico_pendientes.jsp)                             | `f2af03e058d771c5e66a28530298241711be348078901fa3af6c5728b4104d38` |    289 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mssgenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_pendientes.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 10  | Mis tareas                                                                                                   |
| 97  | Mis tareas                                                                                                   |
| 100 | Consulta los procesos que tienes pendientes. Puedes obtener más información a través del nombre de la tarea. |
| 108 | Peticiones pendientes de validación                                                                          |
| 112 | Página de validación                                                                                         |
| 113 | Peticiones                                                                                                   |
| 114 | Nivel                                                                                                        |
| 132 | "&gt;                                                                                                        |
| 139 | "&gt;                                                                                                        |
| 271 | "&gt;                                                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 99  | img     | src=/iconos/noname_catalogo_99_100.gif; width=99; height=100; alt=                           |
| 103 | form    | name=formfiltro; id=formfiltro; action=                                                      |
| 132 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item m4name=; htmlsafe=true                            |
| 139 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item m4name=; htmlsafe=true                            |
| 224 | a       | href=/servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;                                       |
| 230 | a       | href=/servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;                                       |
| 271 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt; |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 15  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                               |
| 16  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                             |
| 26  | zsubsesion        | "SSM_NEWS"                                                                     | SSM_NEWS                                                                                                                       |
| 27  | zmeta4object      | "SSM_NEWS"                                                                     | SSM_NEWS                                                                                                                       |
| 28  | znodo             | "SSM_ALL_NEWS"                                                                 | SSM_ALL_NEWS                                                                                                                   |
| 29  | znodo1            | "SWF_WORKLIST"                                                                 | SWF_WORKLIST                                                                                                                   |
| 30  | znodo2            | "SSM_EMPLOYEE_NEWS"                                                            | SSM_EMPLOYEE_NEWS                                                                                                              |
| 31  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS{"[*]"}                                                                                          |
| 32  | znamenodo2        | znodo2 + ":" + zsubsesion + "!" + znodo2                                       | SSM_EMPLOYEE_NEWS{":"}SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS                                                                           |
| 33  | zventanas         | "20"                                                                           | 20                                                                                                                             |
| 34  | zvuelta           | 5                                                                              | 5                                                                                                                              |
| 35  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 37  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 38  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 40  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_NEWS{"!"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 41  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSM_ALL_NEWS{":"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 42  | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_NEWS{"!"}SSM_ALL_NEWS                                                                                                      |
| 43  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 44  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS                                                                                     |
| 47  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_NEWS{"!"}SWF_WORKLIST{"[*]"}                                                                                               |
| 48  | zmove1            | znodo1 + ":" + znodo1 + "[0]"                                                  | SWF_WORKLIST{":"}SWF_WORKLIST{"[0]"}                                                                                           |
| 49  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 50  | znamenodo1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                       | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST                                                                                     |
| 52  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"                   | CARGA:{}SSM_NEWS{"!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"}                                                                         |
| 56  | zJSPVALIDACION    | zraiz + "JSP_VALIDACION"                                                       | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"JSP_VALIDACION"}                                          |
| 57  | zNIVELACEPTADO    | zraiz + "NIVEL_ACEPTADO"                                                       | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}                                          |
| 58  | zORDINAL          | zraiz + "ORDINAL"                                                              | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                 |
| 59  | zDESCLINK         | zraiz + "DESC_LINK"                                                            | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}                                               |
| 61  | zNREG             | zraiz1 + "N_REG"                                                               | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}                                                   |
| 62  | zJSP              | zraiz1 + "JSP"                                                                 | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"JSP"}                                                     |
| 63  | zNMLINK           | zraiz1 + "NM_LINK"                                                             | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}                                                 |
| 64  | zDTDEADLINE       | zraiz1 + "DT_DEADLINE"                                                         | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}                                             |
| 77  | zcounti           | 0                                                                              | 0                                                                                                                              |
| 78  | zcount            | 0                                                                              | 0                                                                                                                              |
| 79  | zcounti1          | 0                                                                              | 0                                                                                                                              |
| 80  | zcount1           | 0                                                                              | 0                                                                                                                              |
| 81  | zcount2           | 0                                                                              | 0                                                                                                                              |
| 90  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |
| 91  | zcountv1          | String.valueOf(zcounti1)                                                       | String.valueOf(zcounti1)                                                                                                       |
| 92  | zcountv2          | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                        |
| 117 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 118 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 119 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 120 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 121 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 165 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 166 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 167 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 168 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 169 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti1 - 1)                                | {String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                                               |
| 184 | sValue            | ""                                                                             |                                                                                                                                |
| 184 | sValueAux         | ""                                                                             |                                                                                                                                |
| 184 | sValueEncr        | ""                                                                             |                                                                                                                                |
| 184 | sRedirection      | ""                                                                             |                                                                                                                                |
| 185 | contador          | 0                                                                              | 0                                                                                                                              |
| 185 | nPos              | 0                                                                              | 0                                                                                                                              |
| 254 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 255 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 256 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 257 | zPaint2           | ""                                                                             |                                                                                                                                |
| 258 | zregistrofinals2  | String.valueOf(zregistroinicial + zcount2 - 1)                                 | {String.valueOf(zregistroinicial}{zcount2 - 1)}                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 67  | m4:startpage | m4task=SSM_NEWS                                                                                                                                    |
| 67  | m4:beginjob  |                                                                                                                                                    |
| 68  | m4:datadef   | m4o=SSM_NEWS; m4name=SSM_NEWS                                                                                                                      |
| 69  | m4:exec      | m4method=CARGA:{}SSM_NEWS{"!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"}                                                                                    |
| 70  | m4:outputdef | m4alias=SSM_ALL_NEWS                                                                                                                               |
| 70  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 71  | m4:outputdef | m4alias=SWF_WORKLIST                                                                                                                               |
| 71  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SWF_WORKLIST{"[*]"}                                                                                               |
| 72  | m4:outputdef | m4alias=SSM_EMPLOYEE_NEWS                                                                                                                          |
| 72  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS{"[*]"}                                                                                          |
| 73  | m4:endjob    |                                                                                                                                                    |
| 94  | m4:move      |                                                                                                                                                    |
| 94  | m4:param     | name=SSM_NEWS; value=SSM_ALL_NEWS{":"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                   |
| 95  | m4:move      |                                                                                                                                                    |
| 95  | m4:param     | name=SSM_NEWS; value=SWF_WORKLIST{":"}SWF_WORKLIST{"[0]"}                                                                                          |
| 125 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                         |
| 132 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}; htmlsafe=true                                             |
| 133 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                               |
| 134 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}; htmlsafe=true                                        |
| 139 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}; htmlsafe=true                                             |
| 140 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                               |
| 141 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}; htmlsafe=true                                        |
| 156 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST; htmlsafe=true                                                                                   |
| 160 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}; htmlsafe=true                                               |
| 161 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 162 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 173 | m4:loop      | from=0; to={String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                                                        |
| 177 | m4:item      | m4varname=sNLin; m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}; htmlsafe=true                              |
| 178 | m4:item      | m4varname=sJSP; m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"JSP"}; htmlsafe=true                                   |
| 225 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 226 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 231 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 232 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 245 | m4:label     | m4name=SSM_EMPLOYEE_NEWS{":"}SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS; htmlsafe=true                                                                         |
| 250 | m4:label     | item=NM_LINK; htmlsafe=true; outputdef=SSM_EMPLOYEE_NEWS                                                                                           |
| 262 | m4:dataloop  | outputdef=SSM_EMPLOYEE_NEWS                                                                                                                        |
| 263 | m4:current   | m4varname=zp2; outputdef=SSM_EMPLOYEE_NEWS                                                                                                         |
| 271 | m4:item      | item=NM_LINK; htmlsafe=true; outputdef=SSM_EMPLOYEE_NEWS                                                                                           |
| 286 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 84  | getCountInClient | znodo,zsubsesion,znodo   |
| 85  | getCount         | znodo,zsubsesion,znodo   |
| 86  | getCountInClient | znodo1,zsubsesion,znodo1 |
| 87  | getCount         | znodo1,zsubsesion,znodo1 |
| 88  | getCount         | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 105 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 130 | if (zcontrol2==0){%&gt;                                                                                                                  |
| 137 | &lt;%}else{%&gt;                                                                                                                         |
| 146 | &lt;%} else {%&gt;                                                                                                                       |
| 154 | &lt;% if (zcounti1 &gt; 0) { %&gt;                                                                                                       |
| 187 | if ((sJSP.indexOf("?") != -1)&amp;&amp;(sJSP.indexOf("=") != -1)){                                                                       |
| 197 | if (nPos &gt;= 0){                                                                                                                       |
| 206 | }else{                                                                                                                                   |
| 209 | if (contador == 0){                                                                                                                      |
| 211 | }else{                                                                                                                                   |
| 219 | }else{                                                                                                                                   |
| 222 | if (zcontrol2==0){%&gt;                                                                                                                  |
| 228 | &lt;%}else{%&gt;                                                                                                                         |
| 237 | &lt;%} else {%&gt;                                                                                                                       |
| 243 | &lt;% if (zcount2 &gt; 0) { %&gt;                                                                                                        |
| 267 | %&gt;&lt;%if (zcontrol2==0){zPaint2="";}else{zPaint2="2";}%&gt;                                                                          |
| 277 | &lt;%} else {%&gt;                                                                                                                       |
| 31  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 32  | expresión de cálculo/transformación: String znamenodo2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                       |
| 36  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 38  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 40  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 41  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 42  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 43  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 44  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 47  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 48  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[0]";                                                      |
| 49  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 50  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 52  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA";                 |
| 56  | expresión de cálculo/transformación: String zJSPVALIDACION = zraiz + "JSP_VALIDACION";                                                   |
| 57  | expresión de cálculo/transformación: String zNIVELACEPTADO = zraiz + "NIVEL_ACEPTADO";                                                   |
| 58  | expresión de cálculo/transformación: String zORDINAL = zraiz + "ORDINAL";                                                                |
| 59  | expresión de cálculo/transformación: String zDESCLINK = zraiz + "DESC_LINK";                                                             |
| 61  | expresión de cálculo/transformación: String zNREG = zraiz1 + "N_REG";                                                                    |
| 62  | expresión de cálculo/transformación: String zJSP = zraiz1 + "JSP";                                                                       |
| 63  | expresión de cálculo/transformación: String zNMLINK = zraiz1 + "NM_LINK";                                                                |
| 64  | expresión de cálculo/transformación: String zDTDEADLINE = zraiz1 + "DT_DEADLINE";                                                        |
| 121 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 169 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti1 - 1);                           |
| 258 | expresión de cálculo/transformación: String zregistrofinals2 = String.valueOf(zregistroinicial + zcount2 - 1);                           |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 11  | /css/estilo_mss.css                                   |
| 12  | /libreria/funciones_sse.js                            |
| 99  | /iconos/noname_catalogo_99_100.gif                    |
| 132 | /servlet/CheckSecurity/JSP&lt;m4:item m4name=         |
| 139 | /servlet/CheckSecurity/JSP&lt;m4:item m4name=         |
| 224 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     |
| 230 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     |
| 271 | /servlet/CheckSecurity/JSP&lt;m4:item item=           |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| COLL   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| COLL   | 12  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 224 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| COLL   | 230 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| COLL   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| IBER   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| IBER   | 12  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 224 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| IBER   | 230 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| IBER   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| BASE   | 12  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 224 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| BASE   | 230 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                                                            |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 150 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 282 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mssgenerico_pendientes.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
