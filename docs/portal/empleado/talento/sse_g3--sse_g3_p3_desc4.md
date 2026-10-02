# sse_g3_p3_desc4

Identificador: `sse_g3/sse_g3_p3_desc4.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_desc4.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc4.jsp) | `5071ba5894437ffbd0509010a4785c0a5241c095641e1f0baeb04295eb265dfb` |    173 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_desc4.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta               |
| --- | -------------------------------------- |
| 126 | [valor dinámico] [valor dinámico]      |
| 147 | ',' ');" title="Detalle del curso"&gt; |
| 154 | ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------- |
| 125 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=Cursos por competencias                   |
| 126 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=sse_g3_p3.jsp?estado=31                 |
| 147 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                            |
| 154 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                            |
| 162 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31; method=post; name=oculto; id=oculto |
| 163 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                      |
| 164 | input   | type=hidden; id=zid; name=zid                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 35  | estado          | getParameter(request,"estado")   |
| 36  | zinicios        | getParameter(request,"zinicios") |
| 37  | zextd           | getParameter(request,"zextd")    |
| 38  | zlevel          | getParameter(request,"zlevel")   |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                             |
| --- | ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | label_01          | "Formació                                                                      | {"Formació}                                                                                                                             |
| 10  | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                           |
| 11  | label_03          | "Tipo"                                                                         | Tipo                                                                                                                                    |
| 12  | label_04          | "Nombre"                                                                       | Nombre                                                                                                                                  |
| 13  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                   |
| 14  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                               |
| 15  | label_07          | "Cursos multimedias"                                                           | Cursos multimedias                                                                                                                      |
| 16  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                       |
| 17  | label_09          | "Esta competencia no dispone de ningú                                          | {"Esta competencia no dispone de ningú}                                                                                                 |
| 18  | label_10          | "Autor"                                                                        | Autor                                                                                                                                   |
| 19  | label_13          | "Catá                                                                          | {"Catá}                                                                                                                                 |
| 35  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                      |
| 36  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                    |
| 37  | zextd             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd")                                                                       |
| 38  | zlevel            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel")                                                                      |
| 51  | zsubsesion        | "SSM_EXT_KN_TRAINING"                                                          | SSM_EXT_KN_TRAINING                                                                                                                     |
| 52  | zMeta4Object      | "SSM_EXT_KN_TRAINING"                                                          | SSM_EXT_KN_TRAINING                                                                                                                     |
| 53  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                              |
| 56  | ztipocarga        | "CME"                                                                          | CME                                                                                                                                     |
| 60  | zventanas         | "50"                                                                           | 50                                                                                                                                      |
| 64  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                    |
| 66  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                   |
| 67  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                      |
| 69  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 70  | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                |
| 71  | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS                                                                                                      |
| 72  | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"."}                                                                                                 |
| 73  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 77  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_EXT_KN_TRAINING{"!SSM_PRINCIPAL.CARGA"}                                                                                     |
| 81  | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 82  | znmtipo           | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 83  | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 84  | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 85  | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 86  | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 103 | zcount            | 0                                                                              | 0                                                                                                                                       |
| 104 | zcounti           | 0                                                                              | 0                                                                                                                                       |
| 113 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                 |
| 140 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                        |
| 141 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                          |
| 142 | zposicions        | "0"                                                                            | 0                                                                                                                                       |
| 142 | zcontrol          | 0                                                                              | 0                                                                                                                                       |
| 142 | zposicion         | 0                                                                              | 0                                                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                          |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89  | m4:startpage | m4task=SSM_EXT_KN_TRAINING                                                                                                                                  |
| 89  | m4:beginjob  |                                                                                                                                                             |
| 90  | m4:datadef   | m4o=SSM_EXT_KN_TRAINING; m4name=SSM_EXT_KN_TRAINING                                                                                                         |
| 98  | m4:exec      | m4method=CARGA:{}SSM_EXT_KN_TRAINING{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 98  | m4:param     | name=TIPO_CARGA; value=CME                                                                                                                                  |
| 99  | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                          |
| 99  | m4:param     | name=m4name0; value=SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 100 | m4:endjob    |                                                                                                                                                             |
| 101 | m4:move      |                                                                                                                                                             |
| 101 | m4:param     | name=SSM_EXT_KN_TRAINING; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 143 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                        |
| 147 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 147 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 148 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 149 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 150 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 154 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 154 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 155 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 156 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 157 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 170 | m4:endpage   |                                                                                                                                                             |

| L   | Operación        | Argumentos literales                  |
| --- | ---------------- | ------------------------------------- |
| 93  | setItem          | zsubsesion,znodo,"","EXTD_KN",zextd   |
| 94  | setItem          | zsubsesion,znodo,"","ID_LEVEL",zlevel |
| 108 | getCount         | znodo,zsubsesion,znodo                |
| 109 | getCountInClient | znodo,zsubsesion,znodo                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos |
| --- | --------------- | ---------- |
| 26  | solicitar_curso | idtrtb,id  |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 40  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 42  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 129 | &lt;% if (zcounti == 0 ) { %&gt;                                                                                                         |
| 131 | &lt;%}if (zcounti != 0) { %&gt;                                                                                                          |
| 145 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 152 | &lt;%}else{%&gt;                                                                                                                         |
| 65  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 67  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 69  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 70  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                |
| 71  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 72  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 73  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 77  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 81  | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                |
| 82  | expresión de cálculo/transformación: String znmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                    |
| 83  | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                 |
| 84  | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                        |
| 85  | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                 |
| 86  | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 24  | ../../sse_generico/espanol/menu_ess.jsp            |
| 47  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 48  | ../../sse_generico/espanol/generico_links.jsp      |
| 167 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 22  | /css/estilo_sse.css                                            |
| 23  | /libreria/funciones_sse.js                                     |
| 125 | /iconos/noname_puesto_181_125.gif                              |
| 126 | sse_g3_p3.jsp?estado=31                                        |
| 147 | javascript:solicitar_curso(                                    |
| 154 | javascript:solicitar_curso(                                    |
| 162 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31 |
| 24  | ../../sse_generico/espanol/menu_ess.jsp                        |
| 47  | ../../sse_generico/espanol/generico_menusup.jsp                |
| 48  | ../../sse_generico/espanol/generico_links.jsp                  |
| 167 | ../../sse_generico/espanol/generico_disclaimer.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 24  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 47  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 167 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 23  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 126 | sse_g3_p3.jsp?estado=31                                        | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                              |
| BASE   | 147 | javascript:solicitar_curso(                                    | dinámica   | P06                                                                                                       |
| BASE   | 154 | javascript:solicitar_curso(                                    | dinámica   | P06                                                                                                       |
| BASE   | 162 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 24  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 47  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 167 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_desc4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
