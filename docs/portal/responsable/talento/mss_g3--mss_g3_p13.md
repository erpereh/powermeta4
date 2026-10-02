# Solicitudes de formación

Identificador: `mss_g3/mss_g3_p13.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave     | Texto | Ámbito | Diccionario                                                                                  |
| --------- | ----- | ------ | -------------------------------------------------------------------------------------------- |
| Label.All | Todos | COLL   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | CYC    | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | IBER   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | BASE   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p13.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p13.jsp) | `198d68d04022a497754d4d076fa66814d7203d65de0d8602423fe7f7ad5b31ad` |    194 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p13.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p13.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta               |
| --- | -------------------------------------- |
| 8   | Solicitudes de formación               |
| 116 | Solicitudes de formación               |
| 119 | Consulta las solicitudes de formación. |
| 124 | Filtro                                 |
| 126 | Tipo formación [valor dinámico] "&gt;  |
| 149 | Nombre formación                       |
| 150 | Número de plazas                       |
| 165 | ',' ')"&gt;                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                    |
| --- | ------- | ------------------------------------------------------------------------------------------------------------ |
| 118 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=Eventos actuales convocados                 |
| 122 | form    | name=formfiltro; id=formfiltro; action=                                                                      |
| 127 | select  | id=filtroformacion; name=filtroformacion; class=fuenteapartados; onchange=filtrar()                          |
| 129 | option  | value=ALL                                                                                                    |
| 137 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                     |
| 165 | a       | href=javascript:filtrodetalle('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                |
| 175 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31; method=post; name=oculto; id=oculto       |
| 176 | input   | type=hidden; id=zidform; name=zidform; value=&lt;%=zidform%&gt;                                              |
| 177 | input   | type=hidden; id=znombref; name=znombref; value=&lt;%=znombref%&gt;                                           |
| 178 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                              |
| 180 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13_det.jsp?estado=31; method=post; name=detalle; id=detalle |
| 181 | input   | type=hidden; id=zidtrtb; name=zidtrtb; value=                                                                |
| 182 | input   | type=hidden; id=zrequest; name=zrequest; value=                                                              |
| 183 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 17  | estado          | getParameter(request,"estado")   |
| 18  | zinicios        | getParameter(request,"zinicios") |
| 19  | zidform         | getParameter(request,"zidform")  |
| 20  | znombref        | getParameter(request,"znombref") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                 |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                          |
| 18  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                        |
| 19  | zidform           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidform")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidform")                                                                         |
| 20  | znombref          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombref")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombref")                                                                        |
| 50  | zsubsesion        | "SSM_SOLICITUDES_PENDIENTES"                                                   | SSM_SOLICITUDES_PENDIENTES                                                                                                                  |
| 51  | zmeta4object      | "SSM_SOLICITUDES_PENDIENTES"                                                   | SSM_SOLICITUDES_PENDIENTES                                                                                                                  |
| 52  | znodo             | "SSM_REQ"                                                                      | SSM_REQ                                                                                                                                     |
| 53  | znodo1            | "SSM_LISTA_FORMACION"                                                          | SSM_LISTA_FORMACION                                                                                                                         |
| 55  | ztipocarga        | zidform                                                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidform")                                                                         |
| 56  | zventanas         | "20"                                                                           | 20                                                                                                                                          |
| 57  | zvuelta           | 5                                                                              | 5                                                                                                                                           |
| 58  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                        |
| 60  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                       |
| 61  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                          |
| 63  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 64  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSM_REQ{":"}SSM_REQ{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                           |
| 65  | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ                                                                                                      |
| 66  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}                                                                 |
| 67  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ                                                                                          |
| 69  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[*]"}                                                                                   |
| 70  | zlectura1         | zsubsesion + "!" + znodo1                                                      | SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION                                                                                          |
| 71  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | SSM_LISTA_FORMACION{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[&amp;VAR.m4lix]"}{"."}                                         |
| 72  | zmove1            | znodo1 + ":" + znodo1 + "[FIRST]"                                              | SSM_LISTA_FORMACION{":"}SSM_LISTA_FORMACION{"[FIRST]"}                                                                                      |
| 73  | ziterator1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                       | SSM_LISTA_FORMACION{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION                                                                  |
| 75  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.SSM_CARGA"                             | CARGA:{}SSM_SOLICITUDES_PENDIENTES{"!SSM_PRINCIPAL.SSM_CARGA"}                                                                              |
| 79  | zNOMBREFORM       | zraiz1 + "NOMBRE_FORM"                                                         | SSM_LISTA_FORMACION{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_FORM"}                          |
| 80  | zIDTRTB           | zraiz1 + "IDTRTB"                                                              | SSM_LISTA_FORMACION{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[&amp;VAR.m4lix]"}{"."}{"IDTRTB"}                               |
| 82  | zSCOIDREQUEST     | zraiz + "SCO_ID_REQUEST"                                                       | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_REQUEST"}                                               |
| 83  | zSCOIDTRTBREQ     | zraiz + "SCO_ID_TRTBREQ"                                                       | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                               |
| 84  | zSCONUMPLACES     | zraiz + "SCO_NUM_PLACES"                                                       | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_PLACES"}                                               |
| 85  | zNOMFORM          | zraiz + "NOM_FORM"                                                             | SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"NOM_FORM"}                                                     |
| 87  | zpos              | ""                                                                             |                                                                                                                                             |
| 96  | zcounti           | 0                                                                              | 0                                                                                                                                           |
| 97  | zcount            | 0                                                                              | 0                                                                                                                                           |
| 98  | zcount1           | 0                                                                              | 0                                                                                                                                           |
| 99  | zcount1i          | 0                                                                              | 0                                                                                                                                           |
| 107 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                     |
| 108 | zcount1v          | String.valueOf(zcount1)                                                        | String.valueOf(zcount1)                                                                                                                     |
| 111 | sFiltroNameL      | Tran.getProperty("Label.All")                                                  | Tran.getProperty("Label.All")                                                                                                               |
| 131 | zposicions        | "0"                                                                            | 0                                                                                                                                           |
| 132 | zposicion         | 0                                                                              | 0                                                                                                                                           |
| 153 | zposicions2       | "0"                                                                            | 0                                                                                                                                           |
| 154 | zcontrol2         | 0                                                                              | 0                                                                                                                                           |
| 155 | zposicion2        | 0                                                                              | 0                                                                                                                                           |
| 156 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                            |
| 157 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                              |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89  | m4:startpage | m4task=SSM_SOLICITUDES_PENDIENTES                                                                                                                               |
| 89  | m4:beginjob  |                                                                                                                                                                 |
| 90  | m4:datadef   | m4o=SSM_SOLICITUDES_PENDIENTES; m4name=SSM_SOLICITUDES_PENDIENTES                                                                                               |
| 91  | m4:exec      | m4method=CARGA:{}SSM_SOLICITUDES_PENDIENTES{"!SSM_PRINCIPAL.SSM_CARGA"}                                                                                         |
| 91  | m4:param     | name=TIPO_CARGA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidform")                                                                      |
| 92  | m4:outputdef | m4alias=SSM_REQ                                                                                                                                                 |
| 92  | m4:param     | name=m4name0; value=SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 93  | m4:outputdef | m4alias=SSM_LISTA_FORMACION                                                                                                                                     |
| 93  | m4:param     | name=m4name0; value=SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[*]"}                                                                                   |
| 94  | m4:endjob    |                                                                                                                                                                 |
| 114 | m4:move      |                                                                                                                                                                 |
| 114 | m4:param     | name=SSM_SOLICITUDES_PENDIENTES; value=SSM_REQ{":"}SSM_REQ{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 134 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1i).intValue()-1).toString()                                                                                           |
| 137 | m4:item      | m4name=SSM_LISTA_FORMACION{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_FORMACION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_FORM"}; htmlsafe=true                        |
| 159 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                       |
| 165 | m4:item      | m4name=SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_REQUEST"}; jsafe=true; htmlsafe=true                                 |
| 165 | m4:item      | m4name=SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"NOM_FORM"}; htmlsafe=true                                                   |
| 166 | m4:item      | m4name=SSM_REQ{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_REQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_PLACES"}; htmlsafe=true                                             |
| 191 | m4:endpage   |                                                                                                                                                                 |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 102 | getCountInClient | znodo,zsubsesion,znodo   |
| 103 | getCount         | znodo,zsubsesion,znodo   |
| 104 | getCount         | znodo1,zsubsesion,znodo1 |
| 105 | getCountInClient | znodo1,zsubsesion,znodo1 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos     |
| --- | ------------- | -------------- |
| 31  | filtrar       |                |
| 38  | filtrodetalle | idtrtb,request |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if ((zidform==null)&#124;&#124; (""==zidform)){zidform = "ALL";}                                                                         |
| 25  | if ((znombref==null)&#124;&#124; (""==znombref)){znombref = "Todos";}                                                                    |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 27  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 142 | if ('&lt;%=zidform%&gt;'!= "ALL"){                                                                                                       |
| 147 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 162 | zcontrol2 = zposicion2%2;zpos="";if (zcontrol2==0){zpos="2";}                                                                            |
| 169 | &lt;%} else {%&gt;                                                                                                                       |
| 59  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 61  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 63  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 64  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 65  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 66  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 67  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 69  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 70  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 71  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 72  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                  |
| 73  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 75  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.SSM_CARGA";                           |
| 79  | expresión de cálculo/transformación: String zNOMBREFORM = zraiz1 + "NOMBRE_FORM";                                                        |
| 80  | expresión de cálculo/transformación: String zIDTRTB = zraiz1 + "IDTRTB";                                                                 |
| 82  | expresión de cálculo/transformación: String zSCOIDREQUEST = zraiz + "SCO_ID_REQUEST";                                                    |
| 83  | expresión de cálculo/transformación: String zSCOIDTRTBREQ = zraiz + "SCO_ID_TRTBREQ";                                                    |
| 84  | expresión de cálculo/transformación: String zSCONUMPLACES = zraiz + "SCO_NUM_PLACES";                                                    |
| 85  | expresión de cálculo/transformación: String zNOMFORM = zraiz + "NOM_FORM";                                                               |
| 157 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 47  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 48  | ../../sse_generico/espanol/generico_links.jsp         |
| 187 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 188 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                            |
| 10  | /libreria/funciones_sse.js                                     |
| 118 | /iconos/noname_puesto_181_125.gif                              |
| 165 | javascript:filtrodetalle(                                      |
| 175 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31     |
| 180 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13_det.jsp?estado=31 |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                        |
| 47  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 48  | ../../sse_generico/espanol/generico_links.jsp                  |
| 187 | ../../sse_generico/espanol/generico_ventanas_post.jsp          |
| 188 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | -------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 47  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 187 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 188 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 165 | javascript:filtrodetalle(                                      | dinámica   | P06                                                                                                             |
| BASE   | 175 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31     | ausente    | P06                                                                                                             |
| BASE   | 180 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13_det.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 47  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 187 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 188 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p13.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
