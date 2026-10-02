# Evaluación de cursos

Identificador: `sse_g3/sse_g3_p8.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p8.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8.jsp) | `e959d297802a9b4de9c3d19127fe0cf954f334b1dd807856cab3222169726ac4` |    182 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p8.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                     |
| --- | -------------------------------------------------------------------------------------------- |
| 7   | Evaluación de cursos                                                                         |
| 103 | Evaluación de cursos                                                                         |
| 112 | Evalúa los cursos en los que has participado, para ello sitúate sobre el nombre de cada uno. |
| 140 | Cursos pendientes de evaluar                                                                 |
| 146 | ',' ',' ',' ');"&gt; ( )                                                                     |
| 151 | realizado en:                                                                                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| 110 | img     | alt=Evaluación de cursos; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                              |
| 121 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8_desc.jsp; method=post; name=Cursos; id=Cursos                          |
| 122 | input   | type=hidden; id=PK1; name=PK1; value=                                                                                     |
| 123 | input   | type=hidden; id=PK2; name=PK2; value=                                                                                     |
| 124 | input   | type=hidden; id=PK3; name=PK3; value=                                                                                     |
| 125 | input   | type=hidden; id=PK4; name=PK4; value=                                                                                     |
| 126 | input   | type=hidden; id=PK5; name=PK5; value=                                                                                     |
| 127 | input   | type=hidden; id=COU; name=COU; value=                                                                                     |
| 128 | input   | type=hidden; id=EST; name=EST; value=                                                                                     |
| 147 | a       | class=enlacefuncional; title=Curso a evaluar; href=javascript:Enviarcurso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 24  | estado          | getParameter(request,"estado")   |
| 25  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                    |
| --- | -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | estado               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                             |
| 25  | zinicios             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                           |
| 38  | zsubsesion           | "SSE_TRAINING_EVAL"                                                            | SSE_TRAINING_EVAL                                                                                                                              |
| 39  | zmeta4object         | "SSE_TRAINING_EVAL"                                                            | SSE_TRAINING_EVAL                                                                                                                              |
| 40  | zmetodocarga         | zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA"                                      | SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                                                                |
| 41  | znodo                | "SSE_EVEN_EVAL_SHEET"                                                          | SSE_EVEN_EVAL_SHEET                                                                                                                            |
| 44  | zventanas            | "20"                                                                           | 20                                                                                                                                             |
| 45  | zvuelta              | 5                                                                              | 5                                                                                                                                              |
| 46  | zdireccion           | "sse_g1/sse_g1_p8.jsp"                                                         | sse_g1/sse_g1_p8.jsp                                                                                                                           |
| 47  | zestado              | "31"                                                                           | 31                                                                                                                                             |
| 52  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                           |
| 54  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                          |
| 55  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                             |
| 57  | zmove                | znodo + ":" + znodo + "[zregistroinicial]"                                     | SSE_EVEN_EVAL_SHEET{":"}SSE_EVEN_EVAL_SHEET{"[zregistroinicial]"}                                                                              |
| 58  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 59  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 62  | ztipocarga           | "M4T"                                                                          | M4T                                                                                                                                            |
| 66  | zSCOURSE             | zcomun + "SCO_NM_DEV_SUBACTION"                                                | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                             |
| 67  | zSCO_NM_DEV_ACT_TYPE | zcomun + "SCO_NM_DEV_ACT_TYPE"                                                 | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}                              |
| 68  | zSSTART              | zcomun + "DT_START"                                                            | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                         |
| 69  | zSEND                | zcomun + "DT_END"                                                              | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                           |
| 70  | zpk1                 | zcomun + "ID_ORGANIZATION"                                                     | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"ID_ORGANIZATION"}                                  |
| 71  | zpk2                 | zcomun + "SCO_ID_DEV_SUBACTION"                                                | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                             |
| 72  | zpk3                 | zcomun + "SCO_ID_FORM"                                                         | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_FORM"}                                      |
| 73  | zpk4                 | zcomun + "SCO_OR_STUDENT"                                                      | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_STUDENT"}                                   |
| 75  | zSCOMINDATE          | zcomun + "SCO_MIN_DATE"                                                        | SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_DATE"}                                     |
| 87  | zcount               | 0                                                                              | 0                                                                                                                                              |
| 88  | zcounti              | 0                                                                              | 0                                                                                                                                              |
| 97  | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                        |
| 98  | zto                  | new Integer(new Integer(zcountv).intValue()-1).toString()                      | new Integer(new Integer(zcountv).intValue()-1).toString()                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                 |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 78  | m4:startpage | m4task=SSE_TRAINING_EVAL                                                                                                                                           |
| 79  | m4:beginjob  |                                                                                                                                                                    |
| 80  | m4:datadef   | m4o=SSE_TRAINING_EVAL; m4name=SSE_TRAINING_EVAL                                                                                                                    |
| 81  | m4:exec      | m4method=SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                                                                           |
| 81  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                         |
| 82  | m4:outputdef | m4alias=SSE_EVEN_EVAL_SHEET                                                                                                                                        |
| 82  | m4:param     | name=m4name0; value=SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 83  | m4:endjob    |                                                                                                                                                                    |
| 84  | m4:move      |                                                                                                                                                                    |
| 84  | m4:param     | name=SSE_TRAINING_EVAL; value=SSE_EVEN_EVAL_SHEET{":"}SSE_EVEN_EVAL_SHEET{"[zregistroinicial]"}                                                                    |
| 144 | m4:loop      | from=0; to=new Integer(new Integer(zcountv).intValue()-1).toString()                                                                                               |
| 147 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_FORM"}; jsafe=true; htmlsafe=true                        |
| 147 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_STUDENT"}; jsafe=true; htmlsafe=true                     |
| 147 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; jsafe=true; htmlsafe=true               |
| 148 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                           |
| 149 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                            |
| 155 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_DATE"}; htmlsafe=true                                   |
| 158 | m4:item      | m4name=SSE_EVEN_EVAL_SHEET{":"}SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                         |
| 179 | m4:endpage   |                                                                                                                                                                    |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 91  | getCount         | znodo,zsubsesion,znodo |
| 95  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos           |
| --- | ----------- | -------------------- |
| 12  | Enviarcurso | pk2, pk3, pk4, curso |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 29  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 136 | if (zcounti &gt; 0) {                                                                                                                    |
| 168 | else{%&gt;                                                                                                                               |
| 40  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";                                    |
| 53  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 55  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 57  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[zregistroinicial]";                                          |
| 58  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 59  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 66  | expresión de cálculo/transformación: String zSCOURSE = zcomun + "SCO_NM_DEV_SUBACTION";                                                  |
| 67  | expresión de cálculo/transformación: String zSCO_NM_DEV_ACT_TYPE = zcomun + "SCO_NM_DEV_ACT_TYPE";                                       |
| 68  | expresión de cálculo/transformación: String zSSTART = zcomun + "DT_START";                                                               |
| 69  | expresión de cálculo/transformación: String zSEND = zcomun + "DT_END";                                                                   |
| 70  | expresión de cálculo/transformación: String zpk1 = zcomun + "ID_ORGANIZATION";                                                           |
| 71  | expresión de cálculo/transformación: String zpk2 = zcomun + "SCO_ID_DEV_SUBACTION";                                                      |
| 72  | expresión de cálculo/transformación: String zpk3 = zcomun + "SCO_ID_FORM";                                                               |
| 73  | expresión de cálculo/transformación: String zpk4 = zcomun + "SCO_OR_STUDENT";                                                            |
| 75  | expresión de cálculo/transformación: String zSCOMINDATE = zcomun + "SCO_MIN_DATE";                                                       |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 36  | ../../sse_generico/espanol/generico_links.jsp      |
| 164 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 176 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 8   | /css/estilo_sse.css                                  |
| 9   | /libreria/funciones_sse.js                           |
| 110 | /iconos/noname_evalua_cursos_74_100.gif              |
| 121 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8_desc.jsp |
| 147 | javascript:Enviarcurso(                              |
| 10  | ../../sse_generico/espanol/menu_ess.jsp              |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp      |
| 36  | ../../sse_generico/espanol/generico_links.jsp        |
| 46  | sse_g1/sse_g1_p8.jsp                                 |
| 164 | ../../sse_generico/espanol/generico_ventanas.jsp     |
| 176 | ../../sse_generico/espanol/generico_disclaimer.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ---------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp              | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp      | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 164 | ../../sse_generico/espanol/generico_ventanas.jsp     | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 176 | ../../sse_generico/espanol/generico_disclaimer.jsp   | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 121 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8_desc.jsp | ausente    | P06                                                                                                       |
| BASE   | 147 | javascript:Enviarcurso(                              | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp              | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp      | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 46  | sse_g1/sse_g1_p8.jsp                                 | ausente    | P06                                                                                                       |
| BASE   | 164 | ../../sse_generico/espanol/generico_ventanas.jsp     | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 176 | ../../sse_generico/espanol/generico_disclaimer.jsp   | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p8.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
