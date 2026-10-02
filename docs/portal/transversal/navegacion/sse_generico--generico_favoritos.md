# Titulo

Identificador: `sse_generico/generico_favoritos.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_favoritos.jsp) | `1429a45cf3b3da5833fa2f7104ac4dc1d7abb1b940e4b02e4e06470084e7c157` |    251 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_favoritos.jsp)   | `1429a45cf3b3da5833fa2f7104ac4dc1d7abb1b940e4b02e4e06470084e7c157` |    251 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_favoritos.jsp) | `1429a45cf3b3da5833fa2f7104ac4dc1d7abb1b940e4b02e4e06470084e7c157` |    251 |
| BASE / español    | [sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_favoritos.jsp)                             | `698d800a306c5bd2b0e872f15f2df5aa394193d0ce43ba94a14730667587f8c1` |    251 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_favoritos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 7   | Titulo                                      |
| 110 | Titulo                                      |
| 126 | Descripcion funcional de la pagina. Opcion1 |
| 146 | Titulo tabla                                |
| 156 | Nombre link                                 |
| 160 | Link                                        |
| 164 | Orden                                       |
| 181 | $M4ITEM0$                                   |
| 185 | $M4ITEM1$                                   |
| 189 | $M4ITEM2$                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 115 | a       | href=; onclick=history.back();                                                                                                                                                                                                                                                                                                           |
| 116 | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover=m4luz(this); onmouseout=m4oscuridad(this)                                                                                                                                                                                                              |
| 124 | img     | alt=Nombre; src=/iconos/*.gif; width=20; height=60                                                                                                                                                                                                                                                                                       |
| 133 | a       | style=CURSOR: hand; href=                                                                                                                                                                                                                                                                                                                |
| 194 | a       | title=Eliminar la petición del curso; style=cursor:hand; href=javascript:var parametros = new Array ('_M4TAGLET','_REGISTRO','_NODOACCION','_NODO');var valores = new Array (SSE_NEC_FORMACION,$M4ITEM3$,BORRAR,SSE_NEC_FORMACION);var URL = '/servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp';m4navegar(URL,parametros,valores); |
| 195 | img     | align=right; alt=Eliminar la petición; border=0; src=/iconos/borrar.gif; height=16; width=16                                                                                                                                                                                                                                             |
| 236 | a       | href=/servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96;                                                                                                                                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 19  | estado          | getParameter(request,"estado")   |
| 20  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable         | Expresión fuente                                                               | Resolución estática parcial                                                                                                      |
| --- | ---------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 19  | estado           | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")            | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                              |
| 20  | zinicios         | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")          | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                            |
| 42  | zsubsesion       | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 43  | zMeta4Object     | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 44  | znodo            | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 48  | zventanas        | "20"                                                                           | 20                                                                                                                               |
| 52  | zregistroinicial | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                             |
| 54  | zventana         | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                            |
| 55  | zregistrofinal   | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 56  | zoutputdef       | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ENLACES{"!"}SSE_ENLACES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 57  | zmove            | znodo + "[" + zregistroinicial + "]"                                           | SSE_ENLACES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                        |
| 58  | zlectura         | zsubsesion + "!" + znodo                                                       | SSE_ENLACES{"!"}SSE_ENLACES                                                                                                      |
| 59  | zraiz            | zsubsesion + "!" + znodo + "."                                                 | SSE_ENLACES{"!"}SSE_ENLACES{"."}                                                                                                 |
| 63  | zMETODOCARGA     | "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA"                       | CARGA:{}SSE_ENLACES{"!SSE_ENLACES.SSE_ENLACES_CARGA"}                                                                            |
| 67  | zENLACE          | zraiz + "ENLACE"                                                               | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ENLACE"}                                                                                       |
| 68  | zID_ENLACE       | zraiz + "ID_ENLACE"                                                            | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_ENLACE"}                                                                                    |
| 69  | zN_ENLACE        | zraiz + "N_ENLACE"                                                             | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"N_ENLACE"}                                                                                     |
| 70  | zID_HR           | zraiz + "ID_HR"                                                                | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_HR"}                                                                                        |
| 71  | zID_COMPANY      | zraiz + "ID_COMPANY"                                                           | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_COMPANY"}                                                                                   |
| 91  | zcount           | 0                                                                              | 0                                                                                                                                |
| 92  | zcounti          | 0                                                                              | 0                                                                                                                                |
| 101 | zcountv          | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                          |
| 218 | zintervalo       | zcount/zventana                                                                | zcount/zventana                                                                                                                  |
| 219 | zresto           | zcount%zventana                                                                | zcount%zventana                                                                                                                  |
| 220 | zcontador        | 0                                                                              | 0                                                                                                                                |
| 228 | ziniciointervalo | String.valueOf(1 + zcontador*zventana)                                         | {String.valueOf(1}{zcontador*zventana)}                                                                                          |
| 229 | zfinintervalo2   | zcontador*zventana + zventana                                                  | {zcontador*zventana}Integer.valueOf(zventanas).intValue()                                                                        |
| 230 | zfinintervalo    | String.valueOf(zcontador*zventana + zventana)                                  | {String.valueOf(zcontador*zventana}{zventana)}                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales |
| --- | ---------------- | -------------------- |
| 95  | getCount         | "",zsubsesion,znodo  |
| 99  | getCountInClient | "",zsubsesion,znodo  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 24  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 221 | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                                                        |
| 231 | if (zfinintervalo2 &gt; zcount) {                                                                                                        |
| 53  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 55  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 56  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 57  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                |
| 58  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 59  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 63  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA";                     |
| 67  | expresión de cálculo/transformación: String zENLACE = zraiz + "ENLACE";                                                                  |
| 68  | expresión de cálculo/transformación: String zID_ENLACE = zraiz + "ID_ENLACE";                                                            |
| 69  | expresión de cálculo/transformación: String zN_ENLACE = zraiz + "N_ENLACE";                                                              |
| 70  | expresión de cálculo/transformación: String zID_HR = zraiz + "ID_HR";                                                                    |
| 71  | expresión de cálculo/transformación: String zID_COMPANY = zraiz + "ID_COMPANY";                                                          |
| 228 | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);                                   |
| 229 | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                                                 |
| 230 | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana);                               |
| 232 | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                               |
| 11  | /libreria/funciones_sse.js                                                        |
| 12  | /libreria/menu.js                                                                 |
| 116 | /iconos/noname_volver_52_44.gif                                                   |
| 124 | /iconos/*.gif                                                                     |
| 194 | javascript:var parametros = new Array (                                           |
| 195 | /iconos/borrar.gif                                                                |
| 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; |
| 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_favoritos.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_favoritos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 7   | Titulo                                      |
| 110 | Titulo                                      |
| 126 | Descripcion funcional de la pagina. Opcion1 |
| 146 | Titulo tabla                                |
| 156 | Nombre link                                 |
| 160 | Link                                        |
| 164 | Orden                                       |
| 181 | $M4ITEM0$                                   |
| 185 | $M4ITEM1$                                   |
| 189 | $M4ITEM2$                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 115 | a       | href=; onclick=history.back();                                                                                                                                                                                                                                                                                                           |
| 116 | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover=m4luz(this); onmouseout=m4oscuridad(this)                                                                                                                                                                                                              |
| 124 | img     | alt=Nombre; src=/iconos/*.gif; width=20; height=60                                                                                                                                                                                                                                                                                       |
| 133 | a       | style=CURSOR: hand; href=                                                                                                                                                                                                                                                                                                                |
| 194 | a       | title=Eliminar la petición del curso; style=cursor:hand; href=javascript:var parametros = new Array ('_M4TAGLET','_REGISTRO','_NODOACCION','_NODO');var valores = new Array (SSE_NEC_FORMACION,$M4ITEM3$,BORRAR,SSE_NEC_FORMACION);var URL = '/servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp';m4navegar(URL,parametros,valores); |
| 195 | img     | align=right; alt=Eliminar la petición; border=0; src=/iconos/borrar.gif; height=16; width=16                                                                                                                                                                                                                                             |
| 236 | a       | href=/servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96;                                                                                                                                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 19  | estado          | getParameter(request,"estado")   |
| 20  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable         | Expresión fuente                                                               | Resolución estática parcial                                                                                                      |
| --- | ---------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 19  | estado           | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")            | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                              |
| 20  | zinicios         | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")          | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                            |
| 42  | zsubsesion       | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 43  | zMeta4Object     | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 44  | znodo            | "SSE_ENLACES"                                                                  | SSE_ENLACES                                                                                                                      |
| 48  | zventanas        | "20"                                                                           | 20                                                                                                                               |
| 52  | zregistroinicial | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                             |
| 54  | zventana         | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                            |
| 55  | zregistrofinal   | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 56  | zoutputdef       | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ENLACES{"!"}SSE_ENLACES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 57  | zmove            | znodo + "[" + zregistroinicial + "]"                                           | SSE_ENLACES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                        |
| 58  | zlectura         | zsubsesion + "!" + znodo                                                       | SSE_ENLACES{"!"}SSE_ENLACES                                                                                                      |
| 59  | zraiz            | zsubsesion + "!" + znodo + "."                                                 | SSE_ENLACES{"!"}SSE_ENLACES{"."}                                                                                                 |
| 63  | zMETODOCARGA     | "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA"                       | CARGA:{}SSE_ENLACES{"!SSE_ENLACES.SSE_ENLACES_CARGA"}                                                                            |
| 67  | zENLACE          | zraiz + "ENLACE"                                                               | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ENLACE"}                                                                                       |
| 68  | zID_ENLACE       | zraiz + "ID_ENLACE"                                                            | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_ENLACE"}                                                                                    |
| 69  | zN_ENLACE        | zraiz + "N_ENLACE"                                                             | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"N_ENLACE"}                                                                                     |
| 70  | zID_HR           | zraiz + "ID_HR"                                                                | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_HR"}                                                                                        |
| 71  | zID_COMPANY      | zraiz + "ID_COMPANY"                                                           | SSE_ENLACES{"!"}SSE_ENLACES{"."}{"ID_COMPANY"}                                                                                   |
| 91  | zcount           | 0                                                                              | 0                                                                                                                                |
| 92  | zcounti          | 0                                                                              | 0                                                                                                                                |
| 101 | zcountv          | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                          |
| 218 | zintervalo       | zcount/zventana                                                                | zcount/zventana                                                                                                                  |
| 219 | zresto           | zcount%zventana                                                                | zcount%zventana                                                                                                                  |
| 220 | zcontador        | 0                                                                              | 0                                                                                                                                |
| 228 | ziniciointervalo | String.valueOf(1 + zcontador*zventana)                                         | {String.valueOf(1}{zcontador*zventana)}                                                                                          |
| 229 | zfinintervalo2   | zcontador*zventana + zventana                                                  | {zcontador*zventana}Integer.valueOf(zventanas).intValue()                                                                        |
| 230 | zfinintervalo    | String.valueOf(zcontador*zventana + zventana)                                  | {String.valueOf(zcontador*zventana}{zventana)}                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales |
| --- | ---------------- | -------------------- |
| 95  | getCount         | "",zsubsesion,znodo  |
| 99  | getCountInClient | "",zsubsesion,znodo  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 24  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 221 | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                                                        |
| 231 | if (zfinintervalo2 &gt; zcount) {                                                                                                        |
| 53  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 55  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 56  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 57  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                |
| 58  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 59  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 63  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA";                     |
| 67  | expresión de cálculo/transformación: String zENLACE = zraiz + "ENLACE";                                                                  |
| 68  | expresión de cálculo/transformación: String zID_ENLACE = zraiz + "ID_ENLACE";                                                            |
| 69  | expresión de cálculo/transformación: String zN_ENLACE = zraiz + "N_ENLACE";                                                              |
| 70  | expresión de cálculo/transformación: String zID_HR = zraiz + "ID_HR";                                                                    |
| 71  | expresión de cálculo/transformación: String zID_COMPANY = zraiz + "ID_COMPANY";                                                          |
| 228 | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);                                   |
| 229 | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                                                 |
| 230 | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana);                               |
| 232 | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                               |
| 11  | /libreria/funciones_sse.js                                                        |
| 12  | /libreria/menu.js                                                                 |
| 116 | /iconos/noname_volver_52_44.gif                                                   |
| 124 | /iconos/*.gif                                                                     |
| 194 | javascript:var parametros = new Array (                                           |
| 195 | /iconos/borrar.gif                                                                |
| 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; |
| 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                        | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | --------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 11  | /libreria/funciones_sse.js                                                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 12  | /libreria/menu.js                                                                 | ausente    | P06                                                                                                                                              |
| COLL   | 194 | javascript:var parametros = new Array (                                           | dinámica   | P06                                                                                                                                              |
| COLL   | 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; | ausente    | P06                                                                                                                                              |
| COLL   | 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            | ausente    | P06                                                                                                                                              |
| CYC    | 11  | /libreria/funciones_sse.js                                                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 12  | /libreria/menu.js                                                                 | ausente    | P06                                                                                                                                              |
| CYC    | 194 | javascript:var parametros = new Array (                                           | dinámica   | P06                                                                                                                                              |
| CYC    | 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; | ausente    | P06                                                                                                                                              |
| CYC    | 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            | ausente    | P06                                                                                                                                              |
| IBER   | 11  | /libreria/funciones_sse.js                                                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 12  | /libreria/menu.js                                                                 | ausente    | P06                                                                                                                                              |
| IBER   | 194 | javascript:var parametros = new Array (                                           | dinámica   | P06                                                                                                                                              |
| IBER   | 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; | ausente    | P06                                                                                                                                              |
| IBER   | 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            | ausente    | P06                                                                                                                                              |
| BASE   | 11  | /libreria/funciones_sse.js                                                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 12  | /libreria/menu.js                                                                 | ausente    | P06                                                                                                                                              |
| BASE   | 194 | javascript:var parametros = new Array (                                           | dinámica   | P06                                                                                                                                              |
| BASE   | 236 | /servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=&#96;ziniciointervalo&#96; | ausente    | P06                                                                                                                                              |
| BASE   | 194 | /servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp                            | ausente    | P06                                                                                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_favoritos.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
