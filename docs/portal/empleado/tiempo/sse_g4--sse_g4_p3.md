# Calendario de festivos

Identificador: `sse_g4/sse_g4_p3.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p3.jsp) | `5b36a9b27163ae825e603b8e990802efd8e18bacdb99eb8fb8c228d4cfde934c` |    150 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_p3.jsp)   | `5b36a9b27163ae825e603b8e990802efd8e18bacdb99eb8fb8c228d4cfde934c` |    150 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_p3.jsp) | `5b36a9b27163ae825e603b8e990802efd8e18bacdb99eb8fb8c228d4cfde934c` |    150 |
| BASE / español    | [sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_p3.jsp)                             | `95617b72565d27e7aec027894189451049c058026c874d59b822572213cc9800` |    150 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                            |
| --- | --------------------------------------------------- |
| 7   | Calendario de festivos                              |
| 127 | Calendario de festivos                              |
| 131 | Consulta los días festivos de tu centro de trabajo. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 130 | img     | src=/iconos/noname_calendario_123_100.gif; width=100; height=100; alt=Calendario de festivos |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                   | Resolución estática parcial                |
| --- | ------------ | ---------------------------------- | ------------------------------------------ |
| 37  | zsubsesion   | "SSE_CARGA_FESTIVOS"               | SSE_CARGA_FESTIVOS                         |
| 38  | zmeta4object | "SSE_CARGA_FESTIVOS"               | SSE_CARGA_FESTIVOS                         |
| 39  | znodo        | "SSE_FESTIVOS"                     | SSE_FESTIVOS                               |
| 40  | zlectura     | zsubsesion + "!" + znodo           | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS        |
| 41  | zraiz        | zsubsesion + "!" + znodo + "."     | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"."}   |
| 42  | zmetodocarga | zsubsesion + "!SSE_FESTIVOS.CARGA" | SSE_CARGA_FESTIVOS{"!SSE_FESTIVOS.CARGA"}  |
| 43  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"   | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"[*]"} |
| 44  | zf0          | ""                                 |                                            |
| 45  | zf1          | ""                                 |                                            |
| 46  | zf2          | ""                                 |                                            |
| 47  | zf3          | ""                                 |                                            |
| 48  | zf4          | ""                                 |                                            |
| 49  | zf5          | ""                                 |                                            |
| 50  | zf6          | ""                                 |                                            |
| 51  | zf7          | ""                                 |                                            |
| 52  | zf8          | ""                                 |                                            |
| 53  | zf9          | ""                                 |                                            |
| 54  | zf10         | ""                                 |                                            |
| 55  | zf11         | ""                                 |                                            |
| 56  | zf12         | ""                                 |                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                             |
| --- | ------------ | -------------------------------------------------------------- |
| 58  | m4:startpage | m4task=SSE_CARGA_FESTIVOS                                      |
| 58  | m4:beginjob  |                                                                |
| 59  | m4:datadef   | m4o=SSE_CARGA_FESTIVOS; m4name=SSE_CARGA_FESTIVOS              |
| 60  | m4:exec      | m4method=SSE_CARGA_FESTIVOS{"!SSE_FESTIVOS.CARGA"}             |
| 61  | m4:outputdef |                                                                |
| 61  | m4:param     | name=m4name0; value=SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"[*]"} |
| 62  | m4:endjob    |                                                                |
| 149 | m4:endpage   |                                                                |

| L   | Operación | Argumentos literales                  |
| --- | --------- | ------------------------------------- |
| 66  | getItem   | "",zmeta4object,znodo,"","ENERO"      |
| 67  | getItem   | "",zmeta4object,znodo,"","FEBRERO"    |
| 68  | getItem   | "",zmeta4object,znodo,"","MARZO"      |
| 69  | getItem   | "",zmeta4object,znodo,"","ABRIL"      |
| 70  | getItem   | "",zmeta4object,znodo,"","MAYO"       |
| 71  | getItem   | "",zmeta4object,znodo,"","JUNIO"      |
| 72  | getItem   | "",zmeta4object,znodo,"","JULIO"      |
| 73  | getItem   | "",zmeta4object,znodo,"","AGOSTO"     |
| 74  | getItem   | "",zmeta4object,znodo,"","SEPTIEMBRE" |
| 75  | getItem   | "",zmeta4object,znodo,"","OCTUBRE"    |
| 76  | getItem   | "",zmeta4object,znodo,"","NOVIEMBRE"  |
| 77  | getItem   | "",zmeta4object,znodo,"","DICIEMBRE"  |
| 78  | getItem   | "",zmeta4object,znodo,"","NAVIDAD"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos                |
| --- | ------------------ | ------------------------- |
| 109 | buscar             | cadena                    |
| 114 | mostrarcalendarios | paso,mes,pos,coleccionobj |

| L   | Condición / acción / mensaje literal                                                          |
| --- | --------------------------------------------------------------------------------------------- |
| 115 | if ((paso == 0) &#124;&#124; (mes == 13)){                                                    |
| 117 | }else{                                                                                        |
| 40  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;              |
| 41  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";           |
| 42  | expresión de cálculo/transformación: String zmetodocarga =zsubsesion + "!SSE_FESTIVOS.CARGA"; |
| 43  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";    |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp         |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 35  | ../../sse_generico/espanol/generico_links.jsp      |
| 145 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 8   | /css/estilo_sse.css                                |
| 9   | /libreria/funciones_sse.js                         |
| 12  | /libreria/clasecalendario.js                       |
| 13  | /libreria/dom1.js                                  |
| 130 | /iconos/noname_calendario_123_100.gif              |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp         |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 35  | ../../sse_generico/espanol/generico_links.jsp      |
| 145 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g4/espanol/sse_g4_p3.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                            |
| --- | --------------------------------------------------- |
| 7   | Calendario de festivos                              |
| 127 | Calendario de festivos                              |
| 131 | Consulta los días festivos de tu centro de trabajo. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 130 | img     | src=/iconos/noname_calendario_123_100.gif; width=100; height=100; alt=Calendario de festivos |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                   | Resolución estática parcial                |
| --- | ------------ | ---------------------------------- | ------------------------------------------ |
| 38  | zsubsesion   | "SSE_CARGA_FESTIVOS"               | SSE_CARGA_FESTIVOS                         |
| 39  | zmeta4object | "SSE_CARGA_FESTIVOS"               | SSE_CARGA_FESTIVOS                         |
| 40  | znodo        | "SSE_FESTIVOS"                     | SSE_FESTIVOS                               |
| 41  | zlectura     | zsubsesion + "!" + znodo           | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS        |
| 42  | zraiz        | zsubsesion + "!" + znodo + "."     | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"."}   |
| 43  | zmetodocarga | zsubsesion + "!SSE_FESTIVOS.CARGA" | SSE_CARGA_FESTIVOS{"!SSE_FESTIVOS.CARGA"}  |
| 44  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"   | SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"[*]"} |
| 45  | zf0          | ""                                 |                                            |
| 46  | zf1          | ""                                 |                                            |
| 47  | zf2          | ""                                 |                                            |
| 48  | zf3          | ""                                 |                                            |
| 49  | zf4          | ""                                 |                                            |
| 50  | zf5          | ""                                 |                                            |
| 51  | zf6          | ""                                 |                                            |
| 52  | zf7          | ""                                 |                                            |
| 53  | zf8          | ""                                 |                                            |
| 54  | zf9          | ""                                 |                                            |
| 55  | zf10         | ""                                 |                                            |
| 56  | zf11         | ""                                 |                                            |
| 57  | zf12         | ""                                 |                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                             |
| --- | ------------ | -------------------------------------------------------------- |
| 59  | m4:startpage | m4task=SSE_CARGA_FESTIVOS                                      |
| 59  | m4:beginjob  |                                                                |
| 60  | m4:datadef   | m4o=SSE_CARGA_FESTIVOS; m4name=SSE_CARGA_FESTIVOS              |
| 61  | m4:exec      | m4method=SSE_CARGA_FESTIVOS{"!SSE_FESTIVOS.CARGA"}             |
| 62  | m4:outputdef |                                                                |
| 62  | m4:param     | name=m4name0; value=SSE_CARGA_FESTIVOS{"!"}SSE_FESTIVOS{"[*]"} |
| 63  | m4:endjob    |                                                                |
| 149 | m4:endpage   |                                                                |

| L   | Operación | Argumentos literales                  |
| --- | --------- | ------------------------------------- |
| 67  | getItem   | "",zmeta4object,znodo,"","ENERO"      |
| 68  | getItem   | "",zmeta4object,znodo,"","FEBRERO"    |
| 69  | getItem   | "",zmeta4object,znodo,"","MARZO"      |
| 70  | getItem   | "",zmeta4object,znodo,"","ABRIL"      |
| 71  | getItem   | "",zmeta4object,znodo,"","MAYO"       |
| 72  | getItem   | "",zmeta4object,znodo,"","JUNIO"      |
| 73  | getItem   | "",zmeta4object,znodo,"","JULIO"      |
| 74  | getItem   | "",zmeta4object,znodo,"","AGOSTO"     |
| 75  | getItem   | "",zmeta4object,znodo,"","SEPTIEMBRE" |
| 76  | getItem   | "",zmeta4object,znodo,"","OCTUBRE"    |
| 77  | getItem   | "",zmeta4object,znodo,"","NOVIEMBRE"  |
| 78  | getItem   | "",zmeta4object,znodo,"","DICIEMBRE"  |
| 79  | getItem   | "",zmeta4object,znodo,"","NAVIDAD"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos                |
| --- | ------------------ | ------------------------- |
| 110 | buscar             | cadena                    |
| 115 | mostrarcalendarios | paso,mes,pos,coleccionobj |

| L   | Condición / acción / mensaje literal                                                          |
| --- | --------------------------------------------------------------------------------------------- |
| 116 | if ((paso == 0) &#124;&#124; (mes == 13)){                                                    |
| 118 | }else{                                                                                        |
| 41  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;              |
| 42  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";           |
| 43  | expresión de cálculo/transformación: String zmetodocarga =zsubsesion + "!SSE_FESTIVOS.CARGA"; |
| 44  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";    |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp         |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 36  | ../../sse_generico/espanol/generico_links.jsp      |
| 145 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 8   | /css/estilo_sse.css                                |
| 9   | /libreria/funciones_sse.js                         |
| 12  | /libreria/clasecalendario.js                       |
| 13  | /libreria/dom1.js                                  |
| 130 | /iconos/noname_calendario_123_100.gif              |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp         |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 36  | ../../sse_generico/espanol/generico_links.jsp      |
| 145 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                                      |
| ------ | --- | -------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| COLL   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| COLL   | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| COLL   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| COLL   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)         |
| COLL   | 12  | /libreria/clasecalendario.js                       | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md) |
| COLL   | 13  | /libreria/dom1.js                                  | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md); [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                             |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| COLL   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| COLL   | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| COLL   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| CYC    | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| CYC    | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| CYC    | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                 |
| CYC    | 12  | /libreria/clasecalendario.js                       | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md)                                                                                             |
| CYC    | 13  | /libreria/dom1.js                                  | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                                                                                                   |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| CYC    | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| CYC    | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| IBER   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| IBER   | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| IBER   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| IBER   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)         |
| IBER   | 12  | /libreria/clasecalendario.js                       | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md) |
| IBER   | 13  | /libreria/dom1.js                                  | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md); [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                             |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| IBER   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| IBER   | 34  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| IBER   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| BASE   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| BASE   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |
| BASE   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                 |
| BASE   | 12  | /libreria/clasecalendario.js                       | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md)                                                                                             |
| BASE   | 13  | /libreria/dom1.js                                  | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                                                                                                   |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                    |
| BASE   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp         | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                    |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                        |
| BASE   | 145 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_p3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
