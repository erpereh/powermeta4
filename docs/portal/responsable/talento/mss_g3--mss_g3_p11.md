# Valoración de cursos

Identificador: `mss_g3/mss_g3_p11.jsp`. Perfil: **responsable**. Dominio: **talento**.

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

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave     | Texto | Ámbito | Diccionario                                                                                  |
| --------- | ----- | ------ | -------------------------------------------------------------------------------------------- |
| Label.All | Todos | COLL   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | CYC    | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | IBER   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | BASE   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p11.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p11.jsp) | `5646a8385739137b27ffc3ca4ded5dce642495d04f8fc16711a45832cacb2955` |    209 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p11.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p11.jsp)   | `5646a8385739137b27ffc3ca4ded5dce642495d04f8fc16711a45832cacb2955` |    209 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p11.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p11.jsp) | `5646a8385739137b27ffc3ca4ded5dce642495d04f8fc16711a45832cacb2955` |    209 |
| BASE / español    | [mss_g3/espanol/mss_g3_p11.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p11.jsp)                             | `5646a8385739137b27ffc3ca4ded5dce642495d04f8fc16711a45832cacb2955` |    209 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p11.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p11.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                             |
| --- | ---------------------------------------------------- |
| 7   | Valoración de cursos                                 |
| 100 | Valoración de cursos                                 |
| 103 | Consulta la valoración de cursos. Puestos de trabajo |
| 113 | Filtro                                               |
| 115 | Curso: [valor dinámico] "&gt;                        |
| 139 | Curso                                                |
| 140 | Pregunta                                             |
| 141 | Porcentaje Respuesta                                 |
| 185 | [valor dinámico] %                                   |
| 187 | Otros / [valor dinámico]                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 102 | img     | alt=Valoración de cursos; title=Valoración de cursos; src=/iconos/noname_competencias_puesto_82_100.gif; width=82; height=100          |
| 106 | a       | class=enlacefuncional; tabindex=1; title=Ir a puestos de trabajo; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 |
| 111 | form    | name=prueba; id=prueba; action=                                                                                                        |
| 116 | select  | id=filtro; class=fuenteapartados; onchange=filtrar(); title=Escoge un curso                                                            |
| 117 | option  | value=ALL                                                                                                                              |
| 119 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 131 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31; method=post; name=oculto; id=oculto                                 |
| 132 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                        |
| 133 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                        |
| 134 | input   | type=hidden; id=znombre; name=znombre; value=&lt;%=znombre%&gt;                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |
| 15  | zfiltro         | getParameter(request,"zfiltro")  |
| 16  | znombre         | getParameter(request,"znombre")  |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                          |
| --- | ----------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                   |
| 14  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                 |
| 15  | zfiltro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")                                                                                  |
| 16  | znombre           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombre")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombre")                                                                                  |
| 37  | zsubsesion        | "SSM_EVENT_EVAL_ANSWER"                                                        | SSM_EVENT_EVAL_ANSWER                                                                                                                                |
| 38  | zmeta4object      | "SSM_EVENT_EVAL_ANSWER"                                                        | SSM_EVENT_EVAL_ANSWER                                                                                                                                |
| 39  | znodo             | "SSM_EVENT_EVAL_ANSWER"                                                        | SSM_EVENT_EVAL_ANSWER                                                                                                                                |
| 40  | znodo2            | "SSM_TRAINING_ACTIONS_SESION"                                                  | SSM_TRAINING_ACTIONS_SESION                                                                                                                          |
| 42  | ztipocarga        | " "                                                                            |                                                                                                                                                      |
| 43  | zventanas         | "30"                                                                           | 30                                                                                                                                                   |
| 44  | zvuelta           | 5                                                                              | 5                                                                                                                                                    |
| 45  | zdireccion        | "/mss_g3/mss_g3_p11.jsp"                                                       | /mss_g3/mss_g3_p11.jsp                                                                                                                               |
| 46  | zestado           | "31"                                                                           | 31                                                                                                                                                   |
| 47  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                                 |
| 49  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                                |
| 50  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                   |
| 52  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_EVENT_EVAL_ANSWER{"!"}SSM_EVENT_EVAL_ANSWER{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 53  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSM_EVENT_EVAL_ANSWER{":"}SSM_EVENT_EVAL_ANSWER{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 55  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[*]"}                                                                                         |
| 56  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | SSM_TRAINING_ACTIONS_SESION{":"}SSM_TRAINING_ACTIONS_SESION{"[FIRST]"}                                                                               |
| 57  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | SSM_TRAINING_ACTIONS_SESION{":"}SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[&amp;VAR.m4lix]"}{"."}                                       |
| 58  | zSCOIDDEVACTION2  | zcomun2+ "SCO_ID_DEV_SUBACTION"                                                | SSM_TRAINING_ACTIONS_SESION{":"}SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}               |
| 59  | zSCONMDEVACTION2  | zcomun2+ "SCO_NM_DEV_SUBACTION"                                                | SSM_TRAINING_ACTIONS_SESION{":"}SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}               |
| 61  | znodoprincipal    | "SSM_PRINCIPAL"                                                                | SSM_PRINCIPAL                                                                                                                                        |
| 62  | zmetodocarga      | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSM_EVENT_EVAL_ANSWER{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                            |
| 63  | zpos              | ""                                                                             |                                                                                                                                                      |
| 81  | zcounti           | 0                                                                              | 0                                                                                                                                                    |
| 82  | zcount            | 0                                                                              | 0                                                                                                                                                    |
| 83  | zcounti2          | 0                                                                              | 0                                                                                                                                                    |
| 84  | zcount2           | 0                                                                              | 0                                                                                                                                                    |
| 92  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                              |
| 93  | zcountv2          | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                             |
| 96  | sFiltroNameL      | Tran.getProperty("Label.All")                                                  | Tran.getProperty("Label.All")                                                                                                                        |
| 146 | i                 | 0                                                                              | 0                                                                                                                                                    |
| 147 | zSCONMDEVACTION   | ""                                                                             |                                                                                                                                                      |
| 148 | zSCONMANSWERVALUE | ""                                                                             |                                                                                                                                                      |
| 149 | zSCONMSQUESTION   | ""                                                                             |                                                                                                                                                      |
| 150 | zSSEPORCENTAJE    | ""                                                                             |                                                                                                                                                      |
| 151 | znombreant        | ""                                                                             |                                                                                                                                                      |
| 152 | znombrenuevo      | ""                                                                             |                                                                                                                                                      |
| 153 | zprenueva         | ""                                                                             |                                                                                                                                                      |
| 154 | zpreant           | ""                                                                             |                                                                                                                                                      |
| 155 | zIdType           | ""                                                                             |                                                                                                                                                      |
| 156 | a                 | 0                                                                              | 0                                                                                                                                                    |
| 158 | id                | String.valueOf(i)                                                              | String.valueOf(i)                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 65  | m4:startpage | m4task=SSM_EVENT_EVAL_ANSWER                                                                                                                                             |
| 66  | m4:beginjob  |                                                                                                                                                                          |
| 67  | m4:datadef   | m4o=SSM_EVENT_EVAL_ANSWER; m4name=SSM_EVENT_EVAL_ANSWER                                                                                                                  |
| 73  | m4:exec      | m4method=CARGA:{}SSM_EVENT_EVAL_ANSWER{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                                       |
| 73  | m4:param     | name=TIPO_CARGA; value=                                                                                                                                                  |
| 74  | m4:outputdef | m4alias=SSM_EVENT_EVAL_ANSWER                                                                                                                                            |
| 74  | m4:param     | name=m4name0; value=SSM_EVENT_EVAL_ANSWER{"!"}SSM_EVENT_EVAL_ANSWER{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 75  | m4:outputdef | m4alias=SSM_TRAINING_ACTIONS_SESION                                                                                                                                      |
| 75  | m4:param     | name=m4name0; value=SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[*]"}                                                                                         |
| 76  | m4:endjob    |                                                                                                                                                                          |
| 77  | m4:move      |                                                                                                                                                                          |
| 77  | m4:param     | name=SSM_EVENT_EVAL_ANSWER; value=SSM_EVENT_EVAL_ANSWER{":"}SSM_EVENT_EVAL_ANSWER{"["}Integer.valueOf(zinicios).intValue(){"]"}                                          |
| 78  | m4:move      |                                                                                                                                                                          |
| 78  | m4:param     | name=SSM_EVENT_EVAL_ANSWER; value=SSM_TRAINING_ACTIONS_SESION{":"}SSM_TRAINING_ACTIONS_SESION{"[FIRST]"}                                                                 |
| 118 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                                    |
| 119 | m4:item      | m4name=SSM_TRAINING_ACTIONS_SESION{":"}SSM_EVENT_EVAL_ANSWER{"!"}SSM_TRAINING_ACTIONS_SESION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true             |
| 205 | m4:endpage   |                                                                                                                                                                          |

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 70  | setItem          | zsubsesion,znodoprincipal,"","SSE_ID_DEV_ACTION",zfiltro |
| 87  | getCount         | znodo,zsubsesion,znodo                                   |
| 88  | getCountInClient | znodo,zsubsesion,znodo                                   |
| 89  | getCount         | znodo2,zsubsesion,znodo2                                 |
| 90  | getCountInClient | znodo2,zsubsesion,znodo2                                 |
| 160 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_DEV_SUBACTION"       |
| 161 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_ANSWER_VALUE"        |
| 162 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_S_QUESTION"          |
| 163 | getItem          | znodo,zmeta4object,znodo,"","SSE_PORCENTAJE"             |
| 164 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_VALUE"        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 24  | filtrar |            |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 19  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                         |
| 20  | if ((znombre==null)&#124;&#124; (""==znombre)){znombre = "Todos";}                                                                       |
| 124 | if ('&lt;%=zfiltro%&gt;'!= "ALL"){                                                                                                       |
| 136 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 166 | if ((znombrenuevo==znombreant)&#124;&#124; znombrenuevo.equals(znombreant)){                                                             |
| 168 | if ((zprenueva==zpreant)&#124;&#124; zprenueva.equals(zpreant)){                                                                         |
| 170 | }else{                                                                                                                                   |
| 174 | }else{                                                                                                                                   |
| 177 | if (i ==zregistroinicial){zpreant=zprenueva;}                                                                                            |
| 179 | zpos="";if (a==0){zpos="2";}                                                                                                             |
| 186 | &lt;%if (zIdType.equals("00")){%&gt;                                                                                                     |
| 188 | &lt;%}else{%&gt;                                                                                                                         |
| 199 | &lt;%}else{%&gt;                                                                                                                         |
| 48  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 50  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 52  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 53  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 55  | expresión de cálculo/transformación: String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";                                              |
| 56  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 57  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 62  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 35  | ../../sse_generico/espanol/generico_links.jsp         |
| 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                             |
| 9   | /libreria/funciones_sse_val1.js                                 |
| 10  | /libreria/funciones_sse.js                                      |
| 102 | /iconos/noname_competencias_puesto_82_100.gif                   |
| 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 |
| 111 |                                                                 |
| 131 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31      |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 35  | ../../sse_generico/espanol/generico_links.jsp                   |
| 45  | /mss_g3/mss_g3_p11.jsp                                          |
| 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 9   | /libreria/funciones_sse_val1.js                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 131 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 45  | /mss_g3/mss_g3_p11.jsp                                          | ausente    | P06                                                                                                                                                                                                |
| COLL   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 9   | /libreria/funciones_sse_val1.js                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 131 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 45  | /mss_g3/mss_g3_p11.jsp                                          | ausente    | P06                                                                                                                                                                                                |
| CYC    | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | /libreria/funciones_sse_val1.js                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 131 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 45  | /mss_g3/mss_g3_p11.jsp                                          | ausente    | P06                                                                                                                                                                                                |
| IBER   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 131 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 34  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 45  | /mss_g3/mss_g3_p11.jsp                                          | ausente    | P06                                                                                                                                                                                                |
| BASE   | 198 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 203 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p11.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
