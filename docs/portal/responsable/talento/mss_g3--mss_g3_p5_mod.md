# Resultados de evaluaciones

Identificador: `mss_g3/mss_g3_p5_mod.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p5_mod.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p5_mod.jsp) | `6cfc10f3a0ab307c7437e490751826893a1293deba1bc0fddb7e95da37615d56` |    254 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p5_mod.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p5_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                               |
| --- | -------------------------------------------------------------------------------------- |
| 8   | Resultados de evaluaciones                                                             |
| 135 | Resultados de evaluaciones                                                             |
| 144 | En esta pantalla puedes ver los resultados de tus evaluados. Historiales de evaluación |
| 165 | Conocimientos                                                                          |
| 178 | $M4ITEM0$                                                                              |
| 181 | Resultado                                                                              |
| 184 | $M4ITEM1$                                                                              |
| 201 | Objetivos                                                                              |
| 216 | $M4ITEM0$                                                                              |
| 221 | Magnitud                                                                               |
| 224 | $M4ITEM1$                                                                              |
| 227 | Puntuación                                                                             |
| 230 | $M4ITEM2$                                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------- |
| 142 | img     | alt=Resultado; src=/iconos/; width=94; height=100                                                          |
| 151 | a       | class=enlacefuncional; title= Historiales de evaluación ; style=CURSOR: hand; href=mss_g3_p5.jsp?estado=35 |
| 169 | a       | href=mss_g3_p5.jsp                                                                                         |
| 170 | img     | alt=Historiales de evaluación; src=/iconos/icono_flecha2_16_7.gif; width=16; height=7                      |
| 205 | a       | href=mss_g3_p5.jsp                                                                                         |
| 206 | img     | alt=Historiales de evaluación; src=/iconos/icono_flecha2_16_7.gif; width=16; height=7                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 20  | estado          | getParameter(request,"estado")   |
| 21  | zinicios        | getParameter(request,"zinicios") |
| 28  | fecha           | getParameter(request,"fecha")    |
| 29  | ord             | getParameter(request,"ord")      |
| 30  | idhr            | getParameter(request,"idhr")     |
| 31  | oreval          | getParameter(request,"oreval")   |

| L   | Variable         | Expresión fuente                                                     | Resolución estática parcial                                              |
| --- | ---------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 20  | estado           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       |
| 21  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     |
| 28  | zidfechainicio   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"fecha")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"fecha")        |
| 29  | zidord           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord")          |
| 30  | zid              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idhr")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idhr")         |
| 31  | zidordeva        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"oreval")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"oreval")       |
| 41  | zsubsesion       | "SSE_H_EVALUATOR_HIST"                                               | SSE_H_EVALUATOR_HIST                                                     |
| 42  | zmeta4object     | "SSE_H_EVALUATOR_HIST"                                               | SSE_H_EVALUATOR_HIST                                                     |
| 43  | znodo            | "M4T_EVALUATOR_HIST"                                                 | M4T_EVALUATOR_HIST                                                       |
| 44  | znodo2           | "M4T_EVAL_CAPAB"                                                     | M4T_EVAL_CAPAB                                                           |
| 45  | znodo3           | "M4T_EVAL_OBJECT"                                                    | M4T_EVAL_OBJECT                                                          |
| 47  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                     | SSE_H_EVALUATOR_HIST{"!"}M4T_EVALUATOR_HIST{"[*]"}                       |
| 48  | zmove            | znodo + ":" + znodo + "[FIRST]"                                      | M4T_EVALUATOR_HIST{":"}M4T_EVALUATOR_HIST{"[FIRST]"}                     |
| 49  | ziterator        | znodo + ":" + zsubsesion + "!" + znodo                               | M4T_EVALUATOR_HIST{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_EVALUATOR_HIST       |
| 51  | zoutputdef2      | zsubsesion + "!" + znodo2 + "[*]"                                    | SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_CAPAB{"[*]"}                           |
| 52  | zmove2           | znodo2 + ":" + znodo2 + "[FIRST]"                                    | M4T_EVAL_CAPAB{":"}M4T_EVAL_CAPAB{"[FIRST]"}                             |
| 53  | ziterator2       | znodo2 + ":" + zsubsesion + "!" + znodo2                             | M4T_EVAL_CAPAB{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_CAPAB               |
| 55  | zoutputdef3      | zsubsesion + "!" + znodo3 + "[*]"                                    | SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_OBJECT{"[*]"}                          |
| 56  | zmove3           | znodo3 + ":" + znodo3 + "[FIRST]"                                    | M4T_EVAL_OBJECT{":"}M4T_EVAL_OBJECT{"[FIRST]"}                           |
| 57  | ziterator3       | znodo3 + ":" + zsubsesion + "!" + znodo3                             | M4T_EVAL_OBJECT{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_OBJECT             |
| 60  | zmetodo          | "CARGA:" + zsubsesion + "!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST"   | CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST"} |
| 63  | zSCONMOBJECTIVE  | "SCO_NM_OBJECTIVE"                                                   | SCO_NM_OBJECTIVE                                                         |
| 64  | zSCOACCOMPDEGREE | "SCO_ACCOMP_DEGREE"                                                  | SCO_ACCOMP_DEGREE                                                        |
| 65  | zSCONMMAGNITUDE  | "SCO_NM_MAGNITUDE"                                                   | SCO_NM_MAGNITUDE                                                         |
| 67  | zSCONMEXTDKN     | "SCO_NM_EXTD_KN"                                                     | SCO_NM_EXTD_KN                                                           |
| 68  | zSCOMEANING      | "SCO_MEANING"                                                        | SCO_MEANING                                                              |
| 102 | zcount2          | 0                                                                    | 0                                                                        |
| 103 | zcounti2         | 0                                                                    | 0                                                                        |
| 112 | zcountv2         | String.valueOf(zcounti2)                                             | String.valueOf(zcounti2)                                                 |
| 119 | zcount3          | 0                                                                    | 0                                                                        |
| 120 | zcounti3         | 0                                                                    | 0                                                                        |
| 129 | zcountv3         | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------- |
| 73  | m4:startpage | m4task=SSE_H_EVALUATOR_HIST                                                                          |
| 75  | m4:beginjob  |                                                                                                      |
| 76  | m4:datadef   | m4o=SSE_H_EVALUATOR_HIST; m4name=SSE_H_EVALUATOR_HIST                                                |
| 86  | m4:exec      | m4method=CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST"}                    |
| 87  | m4:outputdef | m4alias=M4T_EVALUATOR_HIST                                                                           |
| 88  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}M4T_EVALUATOR_HIST{"[*]"}                               |
| 90  | m4:outputdef | m4alias=M4T_EVAL_OBJECT                                                                              |
| 91  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_OBJECT{"[*]"}                                  |
| 93  | m4:outputdef | m4alias=M4T_EVAL_CAPAB                                                                               |
| 94  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_CAPAB{"[*]"}                                   |
| 96  | m4:endjob    |                                                                                                      |
| 98  | m4:move      |                                                                                                      |
| 99  | m4:param     | name=SSE_H_EVALUATOR_HIST; value=M4T_EVAL_CAPAB{":"}M4T_EVAL_CAPAB{"[FIRST]"}                        |
| 115 | m4:move      |                                                                                                      |
| 116 | m4:param     | name=SSE_H_EVALUATOR_HIST; value=M4T_EVAL_OBJECT{":"}M4T_EVAL_OBJECT{"[FIRST]"}                      |
| 174 | m4:iterator  | m4rows=String.valueOf(zcounti2); m4node=M4T_EVAL_CAPAB{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_CAPAB   |
| 175 | m4:param     | name=m4item0; value=SCO_NM_EXTD_KN                                                                   |
| 176 | m4:param     | name=m4item1; value=SCO_MEANING                                                                      |
| 211 | m4:iterator  | m4rows=String.valueOf(zcounti3); m4node=M4T_EVAL_OBJECT{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_EVAL_OBJECT |
| 212 | m4:param     | name=m4item0; value=SCO_NM_OBJECTIVE                                                                 |
| 213 | m4:param     | name=m4item1; value=SCO_NM_MAGNITUDE                                                                 |
| 214 | m4:param     | name=m4item2; value=SCO_ACCOMP_DEGREE                                                                |
| 252 | m4:endpage   |                                                                                                      |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 79  | setItem          | zsubsesion,znodo,"","SSE_OR_HR_ROLE",zidord            |
| 80  | setItem          | zsubsesion,znodo,"","SSE_DT_START_EVAL",zidfechainicio |
| 81  | setItem          | zsubsesion,znodo,"","SSE_ID_ROLE",zid                  |
| 82  | setItem          | zsubsesion,znodo,"","SSE_OR_HE_EVALUTOR",zidordeva     |
| 106 | getCount         | znodo2,zsubsesion,znodo2                               |
| 110 | getCountInClient | znodo2,zsubsesion,znodo2                               |
| 123 | getCount         | znodo3,zsubsesion,znodo3                               |
| 127 | getCountInClient | znodo3,zsubsesion,znodo3                               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 22  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 25  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 162 | if (zcounti2 &gt; 0) {                                                                                                    |
| 197 | if (zcounti3 &gt; 0) {                                                                                                    |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                |
| 48  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                      |
| 49  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                           |
| 51  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 52  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 53  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 55  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 56  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 57  | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 60  | expresión de cálculo/transformación: String zmetodo = "CARGA:" + zsubsesion + "!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST"; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 13  | ../../mss_generico/espanol/menu_mss.jsp            |
| 35  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 38  | ../../sse_generico/espanol/generico_links.jsp      |
| 249 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 10  | /css/estilo_mss.css                                |
| 12  | /libreria/funciones_sse.js                         |
| 142 | /iconos/                                           |
| 151 | mss_g3_p5.jsp?estado=35                            |
| 169 | mss_g3_p5.jsp                                      |
| 170 | /iconos/icono_flecha2_16_7.gif                     |
| 205 | mss_g3_p5.jsp                                      |
| 206 | /iconos/icono_flecha2_16_7.gif                     |
| 13  | ../../mss_generico/espanol/menu_mss.jsp            |
| 35  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 38  | ../../sse_generico/espanol/generico_links.jsp      |
| 249 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 13  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 35  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 249 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 12  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 151 | mss_g3_p5.jsp?estado=35                            | física     | [mss_g3/mss_g3_p5.jsp](mss_g3--mss_g3_p5.md)                                                              |
| BASE   | 169 | mss_g3_p5.jsp                                      | física     | [mss_g3/mss_g3_p5.jsp](mss_g3--mss_g3_p5.md)                                                              |
| BASE   | 205 | mss_g3_p5.jsp                                      | física     | [mss_g3/mss_g3_p5.jsp](mss_g3--mss_g3_p5.md)                                                              |
| BASE   | 13  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 35  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 249 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p5_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
