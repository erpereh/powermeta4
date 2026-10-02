# Mis tareas

Identificador: `sse_generico/ssegenerico_pendientes.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/ssegenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/ssegenerico_pendientes.jsp) | `4be55f12208007fa902db006ef91dab9744053722d7b85597d96c1359c9dcd52` |    279 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/ssegenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/ssegenerico_pendientes.jsp)   | `4be55f12208007fa902db006ef91dab9744053722d7b85597d96c1359c9dcd52` |    279 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/ssegenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/ssegenerico_pendientes.jsp) | `4be55f12208007fa902db006ef91dab9744053722d7b85597d96c1359c9dcd52` |    279 |
| BASE / español    | [sse_generico/espanol/ssegenerico_pendientes.jsp](../../../../clon_portal/portal/sse_generico/espanol/ssegenerico_pendientes.jsp)                             | `4be55f12208007fa902db006ef91dab9744053722d7b85597d96c1359c9dcd52` |    279 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/ssegenerico_pendientes.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/ssegenerico_pendientes.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 8   | Mis tareas                                                                                                   |
| 94  | Mis tareas                                                                                                   |
| 97  | Consulta los procesos que tienes pendientes. Puedes obtener más información a través del nombre de la tarea. |
| 105 | Peticiones pendientes de validación                                                                          |
| 109 | Página de validación                                                                                         |
| 110 | Peticiones                                                                                                   |
| 111 | Nivel                                                                                                        |
| 129 | "&gt;                                                                                                        |
| 136 | "&gt;                                                                                                        |
| 257 | "&gt;                                                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 96  | img     | src=/iconos/noname_catalogo_99_100.gif; width=99; height=100; alt=                           |
| 100 | form    | name=formfiltro; id=formfiltro; action=                                                      |
| 129 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item m4name=; htmlsafe=true                            |
| 136 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item m4name=; htmlsafe=true                            |
| 216 | a       | href=/servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;                                       |
| 222 | a       | href=/servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;                                       |
| 257 | a       | href=/servlet/CheckSecurity/JSP&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt; |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 15  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                               |
| 16  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                             |
| 25  | zsubsesion        | "SSM_NEWS"                                                                     | SSM_NEWS                                                                                                                       |
| 26  | zmeta4object      | "SSM_NEWS"                                                                     | SSM_NEWS                                                                                                                       |
| 27  | znodo             | "SSM_ALL_NEWS"                                                                 | SSM_ALL_NEWS                                                                                                                   |
| 28  | znodo1            | "SWF_WORKLIST"                                                                 | SWF_WORKLIST                                                                                                                   |
| 29  | znodo2            | "SSM_EMPLOYEE_NEWS"                                                            | SSM_EMPLOYEE_NEWS                                                                                                              |
| 30  | zventanas         | "20"                                                                           | 20                                                                                                                             |
| 31  | zvuelta           | 5                                                                              | 5                                                                                                                              |
| 32  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 34  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 35  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 37  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_NEWS{"!"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 38  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSM_ALL_NEWS{":"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 39  | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_NEWS{"!"}SSM_ALL_NEWS                                                                                                      |
| 40  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 41  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS                                                                                     |
| 44  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_NEWS{"!"}SWF_WORKLIST{"[*]"}                                                                                               |
| 45  | zmove1            | znodo1 + ":" + znodo1 + "[0]"                                                  | SWF_WORKLIST{":"}SWF_WORKLIST{"[0]"}                                                                                           |
| 46  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 47  | znamenodo1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                       | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST                                                                                     |
| 48  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS{"[*]"}                                                                                          |
| 49  | znamenodo2        | znodo2 + ":" + zsubsesion + "!" + znodo2                                       | SSM_EMPLOYEE_NEWS{":"}SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS                                                                           |
| 50  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"                   | CARGA:{}SSM_NEWS{"!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"}                                                                         |
| 54  | zJSPVALIDACION    | zraiz + "JSP_VALIDACION"                                                       | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"JSP_VALIDACION"}                                          |
| 55  | zNIVELACEPTADO    | zraiz + "NIVEL_ACEPTADO"                                                       | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}                                          |
| 56  | zORDINAL          | zraiz + "ORDINAL"                                                              | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                 |
| 57  | zDESCLINK         | zraiz + "DESC_LINK"                                                            | SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}                                               |
| 59  | zNREG             | zraiz1 + "N_REG"                                                               | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}                                                   |
| 60  | zJSP              | zraiz1 + "JSP"                                                                 | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"JSP"}                                                     |
| 61  | zNMLINK           | zraiz1 + "NM_LINK"                                                             | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}                                                 |
| 62  | zDTDEADLINE       | zraiz1 + "DT_DEADLINE"                                                         | SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}                                             |
| 74  | zcounti           | 0                                                                              | 0                                                                                                                              |
| 75  | zcount            | 0                                                                              | 0                                                                                                                              |
| 76  | zcounti1          | 0                                                                              | 0                                                                                                                              |
| 77  | zcount1           | 0                                                                              | 0                                                                                                                              |
| 78  | zcount2           | 0                                                                              | 0                                                                                                                              |
| 87  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |
| 88  | zcountv1          | String.valueOf(zcounti1)                                                       | String.valueOf(zcounti1)                                                                                                       |
| 89  | zcountv2          | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                        |
| 114 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 115 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 116 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 117 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 118 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 157 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 158 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 159 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 160 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 161 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti1 - 1)                                | {String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                                               |
| 176 | sValue            | ""                                                                             |                                                                                                                                |
| 176 | sValueAux         | ""                                                                             |                                                                                                                                |
| 176 | sValueEncr        | ""                                                                             |                                                                                                                                |
| 176 | sRedirection      | ""                                                                             |                                                                                                                                |
| 177 | contador          | 0                                                                              | 0                                                                                                                              |
| 177 | nPos              | 0                                                                              | 0                                                                                                                              |
| 241 | zposicions2       | "0"                                                                            | 0                                                                                                                              |
| 242 | zcontrol2         | 0                                                                              | 0                                                                                                                              |
| 243 | zposicion2        | 0                                                                              | 0                                                                                                                              |
| 244 | zPaint2           | ""                                                                             |                                                                                                                                |
| 245 | zregistrofinals2  | String.valueOf(zregistroinicial + zcount2 - 1)                                 | {String.valueOf(zregistroinicial}{zcount2 - 1)}                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65  | m4:startpage | m4task=SSM_NEWS                                                                                                                                    |
| 65  | m4:beginjob  |                                                                                                                                                    |
| 66  | m4:datadef   | m4o=SSM_NEWS; m4name=SSM_NEWS                                                                                                                      |
| 67  | m4:exec      | m4method=CARGA:{}SSM_NEWS{"!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA"}                                                                                    |
| 68  | m4:outputdef | m4alias=SSM_ALL_NEWS                                                                                                                               |
| 68  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 69  | m4:outputdef | m4alias=SWF_WORKLIST                                                                                                                               |
| 69  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SWF_WORKLIST{"[*]"}                                                                                               |
| 70  | m4:outputdef | m4alias=SSM_EMPLOYEE_NEWS                                                                                                                          |
| 70  | m4:param     | name=m4name0; value=SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS{"[*]"}                                                                                          |
| 71  | m4:endjob    |                                                                                                                                                    |
| 91  | m4:move      |                                                                                                                                                    |
| 91  | m4:param     | name=SSM_NEWS; value=SSM_ALL_NEWS{":"}SSM_ALL_NEWS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                   |
| 92  | m4:move      |                                                                                                                                                    |
| 92  | m4:param     | name=SSM_NEWS; value=SWF_WORKLIST{":"}SWF_WORKLIST{"[0]"}                                                                                          |
| 122 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                         |
| 129 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}; htmlsafe=true                                             |
| 130 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                               |
| 131 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}; htmlsafe=true                                        |
| 136 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"DESC_LINK"}; htmlsafe=true                                             |
| 137 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                               |
| 138 | m4:item      | m4name=SSM_ALL_NEWS{":"}SSM_NEWS{"!"}SSM_ALL_NEWS{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ACEPTADO"}; htmlsafe=true                                        |
| 148 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST; htmlsafe=true                                                                                   |
| 152 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}; htmlsafe=true                                               |
| 153 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 154 | m4:label     | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 165 | m4:loop      | from=0; to={String.valueOf(zregistroinicial}{zcounti1 - 1)}                                                                                        |
| 169 | m4:item      | m4varname=sNLin; m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"NM_LINK"}; htmlsafe=true                              |
| 170 | m4:item      | m4varname=sJSP; m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"JSP"}; htmlsafe=true                                   |
| 217 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 218 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 223 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"N_REG"}; htmlsafe=true                                                 |
| 224 | m4:item      | m4name=SWF_WORKLIST{":"}SSM_NEWS{"!"}SWF_WORKLIST{"[&amp;VAR.m4lix]"}{"."}{"DT_DEADLINE"}; htmlsafe=true                                           |
| 232 | m4:label     | m4name=SSM_EMPLOYEE_NEWS{":"}SSM_NEWS{"!"}SSM_EMPLOYEE_NEWS; htmlsafe=true                                                                         |
| 237 | m4:label     | item=NM_LINK; htmlsafe=true; outputdef=SSM_EMPLOYEE_NEWS                                                                                           |
| 248 | m4:dataloop  | outputdef=SSM_EMPLOYEE_NEWS                                                                                                                        |
| 249 | m4:current   | m4varname=zp2; outputdef=SSM_EMPLOYEE_NEWS                                                                                                         |
| 257 | m4:item      | item=NM_LINK; htmlsafe=true; outputdef=SSM_EMPLOYEE_NEWS                                                                                           |
| 276 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 81  | getCountInClient | znodo,zsubsesion,znodo   |
| 82  | getCount         | znodo,zsubsesion,znodo   |
| 83  | getCountInClient | znodo1,zsubsesion,znodo1 |
| 84  | getCount         | znodo1,zsubsesion,znodo1 |
| 85  | getCount         | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 102 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 127 | if (zcontrol2==0){%&gt;                                                                                                                  |
| 134 | &lt;%}else{%&gt;                                                                                                                         |
| 146 | &lt;% if (zcounti1 &gt; 0) { %&gt;                                                                                                       |
| 179 | if ((sJSP.indexOf("?") != -1)&amp;&amp;(sJSP.indexOf("=") != -1)){                                                                       |
| 189 | if (nPos &gt;= 0){                                                                                                                       |
| 198 | }else{                                                                                                                                   |
| 201 | if (contador == 0){                                                                                                                      |
| 203 | }else{                                                                                                                                   |
| 211 | }else{                                                                                                                                   |
| 214 | if (zcontrol2==0){%&gt;                                                                                                                  |
| 220 | &lt;%}else{%&gt;                                                                                                                         |
| 230 | &lt;% if (zcount2 &gt; 0) { %&gt;                                                                                                        |
| 253 | %&gt;&lt;%if (zcontrol2==0){zPaint2="";}else{zPaint2="2";}%&gt;                                                                          |
| 264 | &lt;% if (zcounti1==0) { %&gt;                                                                                                           |
| 268 | &lt;% if (zcount2 == 0) { %&gt;                                                                                                          |
| 33  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 35  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 37  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 38  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 39  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 40  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 41  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 44  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 45  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[0]";                                                      |
| 46  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 47  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 48  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 49  | expresión de cálculo/transformación: String znamenodo2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                       |
| 50  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA";                 |
| 54  | expresión de cálculo/transformación: String zJSPVALIDACION = zraiz + "JSP_VALIDACION";                                                   |
| 55  | expresión de cálculo/transformación: String zNIVELACEPTADO = zraiz + "NIVEL_ACEPTADO";                                                   |
| 56  | expresión de cálculo/transformación: String zORDINAL = zraiz + "ORDINAL";                                                                |
| 57  | expresión de cálculo/transformación: String zDESCLINK = zraiz + "DESC_LINK";                                                             |
| 59  | expresión de cálculo/transformación: String zNREG = zraiz1 + "N_REG";                                                                    |
| 60  | expresión de cálculo/transformación: String zJSP = zraiz1 + "JSP";                                                                       |
| 61  | expresión de cálculo/transformación: String zNMLINK = zraiz1 + "NM_LINK";                                                                |
| 62  | expresión de cálculo/transformación: String zDTDEADLINE = zraiz1 + "DT_DEADLINE";                                                        |
| 118 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 161 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti1 - 1);                           |
| 245 | expresión de cálculo/transformación: String zregistrofinals2 = String.valueOf(zregistroinicial + zcount2 - 1);                           |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 23  | ../../sse_generico/espanol/generico_links.jsp         |
| 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 9   | /css/estilo_sse.css                                   |
| 10  | /libreria/funciones_sse.js                            |
| 96  | /iconos/noname_catalogo_99_100.gif                    |
| 129 | /servlet/CheckSecurity/JSP&lt;m4:item m4name=         |
| 136 | /servlet/CheckSecurity/JSP&lt;m4:item m4name=         |
| 216 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     |
| 222 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     |
| 257 | /servlet/CheckSecurity/JSP&lt;m4:item item=           |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 23  | ../../sse_generico/espanol/generico_links.jsp         |
| 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| COLL   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| COLL   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| COLL   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| COLL   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| COLL   | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 216 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| COLL   | 222 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| COLL   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| COLL   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| COLL   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| COLL   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| CYC    | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| CYC    | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| CYC    | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| CYC    | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| CYC    | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 216 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| CYC    | 222 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| CYC    | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| CYC    | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| CYC    | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| CYC    | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| IBER   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| IBER   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| IBER   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| IBER   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| IBER   | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 216 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| IBER   | 222 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| IBER   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| IBER   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| IBER   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| IBER   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| BASE   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| BASE   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |
| BASE   | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 216 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| BASE   | 222 | /servlet/CheckSecurity/JSP&lt;%=sRedirection%&gt;     | dinámica   | P06                                                                                                                                              |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp               | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp       | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                           |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                               |
| BASE   | 143 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](sse_generico--generico_ventanas_post.md)                                                               |
| BASE   | 272 | ../../sse_generico/espanol/generico_disclaimer.jsp    | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/ssegenerico_pendientes.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
