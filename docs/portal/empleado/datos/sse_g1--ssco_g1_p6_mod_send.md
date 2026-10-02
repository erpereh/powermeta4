# Actualizacion

Identificador: `sse_g1/ssco_g1_p6_mod_send.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p6_mod_send.jsp) | `0ae11baaafa5561f2d85d1fa1e4b696aafa75e87b88385630845f5ed26613d7d` |    116 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p6_mod_send.jsp)   | `18eaa23b9fb2dde64b82b5b13e0d52c35a5ff15639ab7bcc702c04b229a00753` |    114 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/ssco_g1_p6_mod_send.jsp) | `0ae11baaafa5561f2d85d1fa1e4b696aafa75e87b88385630845f5ed26613d7d` |    116 |
| BASE / español    | [sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/sse_g1/espanol/ssco_g1_p6_mod_send.jsp)                             | `0ae11baaafa5561f2d85d1fa1e4b696aafa75e87b88385630845f5ed26613d7d` |    116 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p6_mod_send.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 95  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal            |
| --- | --------------- | ------------------------- |
| 22  | TAG             | zhash.get("TAG")          |
| 25  | REC             | zhash.get("REC")          |
| 27  | ACC             | zhash.get("ACC")          |
| 28  | ACC             | zhash.get("ACC")          |
| 30  | NOD             | zhash.get("NOD")          |
| 34  | zvis            | zhash.get("zvis")         |
| 35  | zT              | zhash.get("zT")           |
| 36  | zfiltrogroup    | zhash.get("zfiltrogroup") |

| L   | Variable           | Expresión fuente                      | Resolución estática parcial                            |
| --- | ------------------ | ------------------------------------- | ------------------------------------------------------ |
| 11  | nombre             | ""                                    |                                                        |
| 12  | valor              | ""                                    |                                                        |
| 21  | zparametro         | ""                                    |                                                        |
| 22  | zsubsesion         | (String)zhash.get("TAG")              | (String)zhash.get("TAG")                               |
| 28  | zTypeAcc           | ((String)zhash.get("ACC"))            | ((String)zhash.get("ACC"))                             |
| 34  | zvis               | (String)zhash.get("zvis")             | (String)zhash.get("zvis")                              |
| 35  | zT                 | (String)zhash.get("zT")               | (String)zhash.get("zT")                                |
| 36  | zfiltrogroup       | (String)zhash.get("zfiltrogroup")     | (String)zhash.get("zfiltrogroup")                      |
| 57  | zmeta4object       | zsubsesion                            | (String)zhash.get("TAG")                               |
| 58  | znodo              | "SSE_PRINCIPAL"                       | SSE_PRINCIPAL                                          |
| 59  | znodo2             | "SSE_COMUNICACION"                    | SSE_COMUNICACION                                       |
| 60  | zoutputdef         | zsubsesion + "!" + znodo2 + "[*]"     | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 61  | zmetodo            | zsubsesion + "!" + znodo + ".GESTION" | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 62  | zraiz              | zsubsesion + "!" + znodo2 + "."       | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}     |
| 63  | sgtc_zNMInputIDDOC | "SCO_ID_DOC"                          | SCO_ID_DOC                                             |
| 68  | zsavedoc           | ztcSaveDOCID                          | ztcSaveDOCID                                           |
| 80  | zerror             | "0"                                   | 0                                                      |
| 81  | zredireccion       | ""                                    |                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 65  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 73  | m4:beginjob  |                                                                          |
| 74  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 75  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 75  | m4:param     | name=GESTION_ARG; value=                                                 |
| 76  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 76  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 77  | m4:endjob    |                                                                          |
| 115 | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 84  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 85  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 37  | if ((zvis==null)&#124;&#124;(zvis.equals(""))){zvis="0";}                                    |
| 38  | if ((zT==null)&#124;&#124;(zT.equals(""))){zT = "";}                                         |
| 39  | if ((zfiltrogroup==null)&#124;&#124;(zfiltrogroup.equals(""))){zfiltrogroup = "";}           |
| 43  | if ((zT==null)&#124;&#124;(zT.equals(""))){zT = "";}                                         |
| 44  | if ((zvis==null)&#124;&#124;(zvis.equals(""))){zvis="0";}                                    |
| 45  | if ((zfiltrogroup==null)&#124;&#124;(zfiltrogroup.equals(""))){zfiltrogroup = "";}           |
| 66  | &lt;%if (!(zTypeAcc.equals("BORRAR"))){%&gt;                                                 |
| 88  | if ((zredireccion==null)){                                                                   |
| 90  | }else{                                                                                       |
| 102 | &lt;%if (zvis.equals("0")){%&gt;                                                             |
| 105 | &lt;%}else{%&gt;                                                                             |
| 60  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 61  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 62  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp              |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 67  | ../../tc_docs/tc_doc_save_include.jsp                     |
| 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                       |
| 8   | /libreria/funciones_sse.js                                |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp              |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 67  | ../../tc_docs/tc_doc_save_include.jsp                     |
| 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/ssco_g1_p6_mod_send.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p6_mod_send.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 93  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal            |
| --- | --------------- | ------------------------- |
| 20  | TAG             | zhash.get("TAG")          |
| 23  | REC             | zhash.get("REC")          |
| 25  | ACC             | zhash.get("ACC")          |
| 26  | ACC             | zhash.get("ACC")          |
| 28  | NOD             | zhash.get("NOD")          |
| 32  | zvis            | zhash.get("zvis")         |
| 33  | zT              | zhash.get("zT")           |
| 34  | zfiltrogroup    | zhash.get("zfiltrogroup") |

| L   | Variable           | Expresión fuente                      | Resolución estática parcial                            |
| --- | ------------------ | ------------------------------------- | ------------------------------------------------------ |
| 9   | nombre             | ""                                    |                                                        |
| 10  | valor              | ""                                    |                                                        |
| 19  | zparametro         | ""                                    |                                                        |
| 20  | zsubsesion         | (String)zhash.get("TAG")              | (String)zhash.get("TAG")                               |
| 26  | zTypeAcc           | ((String)zhash.get("ACC"))            | ((String)zhash.get("ACC"))                             |
| 32  | zvis               | (String)zhash.get("zvis")             | (String)zhash.get("zvis")                              |
| 33  | zT                 | (String)zhash.get("zT")               | (String)zhash.get("zT")                                |
| 34  | zfiltrogroup       | (String)zhash.get("zfiltrogroup")     | (String)zhash.get("zfiltrogroup")                      |
| 55  | zmeta4object       | zsubsesion                            | (String)zhash.get("TAG")                               |
| 56  | znodo              | "SSE_PRINCIPAL"                       | SSE_PRINCIPAL                                          |
| 57  | znodo2             | "SSE_COMUNICACION"                    | SSE_COMUNICACION                                       |
| 58  | zoutputdef         | zsubsesion + "!" + znodo2 + "[*]"     | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 59  | zmetodo            | zsubsesion + "!" + znodo + ".GESTION" | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 60  | zraiz              | zsubsesion + "!" + znodo2 + "."       | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}     |
| 61  | sgtc_zNMInputIDDOC | "SCO_ID_DOC"                          | SCO_ID_DOC                                             |
| 66  | zsavedoc           | ztcSaveDOCID                          | ztcSaveDOCID                                           |
| 78  | zerror             | "0"                                   | 0                                                      |
| 79  | zredireccion       | ""                                    |                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 63  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 71  | m4:beginjob  |                                                                          |
| 72  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 73  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 73  | m4:param     | name=GESTION_ARG; value=                                                 |
| 74  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 74  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 75  | m4:endjob    |                                                                          |
| 113 | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 82  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 83  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 35  | if ((zvis==null)&#124;&#124;(zvis.equals(""))){zvis="0";}                                    |
| 36  | if ((zT==null)&#124;&#124;(zT.equals(""))){zT = "";}                                         |
| 37  | if ((zfiltrogroup==null)&#124;&#124;(zfiltrogroup.equals(""))){zfiltrogroup = "";}           |
| 41  | if ((zT==null)&#124;&#124;(zT.equals(""))){zT = "";}                                         |
| 42  | if ((zvis==null)&#124;&#124;(zvis.equals(""))){zvis="0";}                                    |
| 43  | if ((zfiltrogroup==null)&#124;&#124;(zfiltrogroup.equals(""))){zfiltrogroup = "";}           |
| 64  | &lt;%if (!(zTypeAcc.equals("BORRAR"))){%&gt;                                                 |
| 86  | if ((zredireccion==null)){                                                                   |
| 88  | }else{                                                                                       |
| 100 | &lt;%if (zvis.equals("0")){%&gt;                                                             |
| 103 | &lt;%}else{%&gt;                                                                             |
| 58  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 59  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 60  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 2   | ../../sse_generico/sse_generico_taglib.jsp                |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp              |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 65  | ../../tc_docs/tc_doc_save_include.jsp                     |
| 99  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 5   | /css/estilo_sse.css                                       |
| 6   | /libreria/funciones_sse.js                                |
| 2   | ../../sse_generico/sse_generico_taglib.jsp                |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp              |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 65  | ../../tc_docs/tc_doc_save_include.jsp                     |
| 99  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| COLL   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 8   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| COLL   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 2   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 65  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| CYC    | 99  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 2   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 65  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| CYC    | 99  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| IBER   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 8   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | ausente    | P06                                                                                                                                                                            |
| IBER   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | física     | [tc_docs/tc_doc_save_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_save_include.md)                                                                              |
| BASE   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 8   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp              | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 67  | ../../tc_docs/tc_doc_save_include.jsp                     | física     | [tc_docs/tc_doc_save_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_save_include.md)                                                                              |
| BASE   | 101 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/ssco_g1_p6_mod_send.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
