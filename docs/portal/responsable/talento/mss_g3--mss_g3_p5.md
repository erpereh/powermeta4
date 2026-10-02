# Historiales de evaluación

Identificador: `mss_g3/mss_g3_p5.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p5.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p5.jsp) | `236592ed343b13c66e1c1c32d1346500f6d01de3270b98b92724f6ca011fb6ae` |    182 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p5.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                |
| --- | ------------------------------------------------------------------------------------------------------- |
| 9   | Historiales de evaluación                                                                               |
| 110 | Historiales de evaluación                                                                               |
| 125 | Puedes consultar los resultados de evaluaciones cerradas, en las que tu has participado como evaluador. |
| 140 | Resultados de evaluación                                                                                |
| 153 | $M4ITEM0$                                                                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 114 | a       | href=; onclick=history.back();                                                                                                               |
| 115 | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover= m4sombra(this); onmouseout=m4oscuridad(this)              |
| 121 | a       | href=                                                                                                                                        |
| 122 | img     | alt=Historial de evaluación; src=/iconos/; width=63; height=100                                                                              |
| 154 | a       | title=Ver detalle de resultados de evaluación; style=CURSOR: hand; href=Javascript:navegar('$M4ITEM2$','$M4ITEM1$','$M4ITEM3$','$M4ITEM4$'); |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 24  | estado          | getParameter(request,"estado")   |
| 25  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable        | Expresión fuente                                                     | Resolución estática parcial                                            |
| --- | --------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 24  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")     |
| 25  | zinicios        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")   |
| 55  | zsubsesion      | "SSE_H_EVALUATOR_HIST"                                               | SSE_H_EVALUATOR_HIST                                                   |
| 56  | zmeta4object    | "SSE_H_EVALUATOR_HIST"                                               | SSE_H_EVALUATOR_HIST                                                   |
| 57  | znodo           | "M4T_H_EVALUATE"                                                     | M4T_H_EVALUATE                                                         |
| 58  | znodocarga      | "M4T_H_EVALUATE_NORMAL"                                              | M4T_H_EVALUATE_NORMAL                                                  |
| 61  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                     | SSE_H_EVALUATOR_HIST{"!"}M4T_H_EVALUATE{"[*]"}                         |
| 62  | zmove           | znodo + ":" +znodo + "[FIRST]"                                       | M4T_H_EVALUATE{":"}M4T_H_EVALUATE{"[FIRST]"}                           |
| 63  | ziterator       | znodo + ":" + zsubsesion + "!" + znodo                               | M4T_H_EVALUATE{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_H_EVALUATE             |
| 65  | zmetodocarga    | "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO"     | CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO"} |
| 67  | zSCONMEVALPROC  | "SCO_NM_EVAL_PROC"                                                   | SCO_NM_EVAL_PROC                                                       |
| 68  | zSCODTSTARTEVAL | "SCO_DT_START_EVAL"                                                  | SCO_DT_START_EVAL                                                      |
| 69  | zSCOORHRROLE    | "SCO_OR_HR_ROLE"                                                     | SCO_OR_HR_ROLE                                                         |
| 70  | zSCOIDHR        | "SCO_ID_HR"                                                          | SCO_ID_HR                                                              |
| 71  | zSCOOREVALUATOR | "SCO_OR_EVALUATOR"                                                   | SCO_OR_EVALUATOR                                                       |
| 93  | zcount          | 0                                                                    | 0                                                                      |
| 94  | zcounti         | 0                                                                    | 0                                                                      |
| 103 | zcountv         | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------- |
| 75  | m4:startpage | m4task=SSE_H_EVALUATOR_HIST                                                                       |
| 76  | m4:beginjob  |                                                                                                   |
| 77  | m4:datadef   | m4o=SSE_H_EVALUATOR_HIST; m4name=SSE_H_EVALUATOR_HIST                                             |
| 83  | m4:exec      | m4method=CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO"}                   |
| 84  | m4:outputdef | m4alias=M4T_H_EVALUATE                                                                            |
| 85  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}M4T_H_EVALUATE{"[*]"}                                |
| 87  | m4:endjob    |                                                                                                   |
| 88  | m4:move      |                                                                                                   |
| 89  | m4:param     | name=SSE_H_EVALUATOR_HIST; value=M4T_H_EVALUATE{":"}M4T_H_EVALUATE{"[FIRST]"}                     |
| 145 | m4:iterator  | m4rows=String.valueOf(zcounti); m4node=M4T_H_EVALUATE{":"}SSE_H_EVALUATOR_HIST{"!"}M4T_H_EVALUATE |
| 146 | m4:param     | name=m4item0; value=SCO_NM_EVAL_PROC                                                              |
| 147 | m4:param     | name=m4item1; value=SCO_DT_START_EVAL                                                             |
| 148 | m4:param     | name=m4item2; value=SCO_OR_HR_ROLE                                                                |
| 149 | m4:param     | name=m4item3; value=SCO_ID_HR                                                                     |
| 150 | m4:param     | name=m4item4; value=SCO_OR_EVALUATOR                                                              |
| 181 | m4:endpage   |                                                                                                   |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 80  | setItem          | zsubsesion,znodocarga,"","NIVEL","1" |
| 97  | getCount         | znodo,zsubsesion,znodo               |
| 101 | getCountInClient | znodo,zsubsesion,znodo               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos            |
| --- | ------- | --------------------- |
| 34  | navegar | ord,fecha,idhr,oreval |

| L   | Condición / acción / mensaje literal                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                          |
| 29  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                      |
| 135 | if (zcounti &gt; 0) {                                                                                                        |
| 161 | }else{                                                                                                                       |
| 61  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                   |
| 62  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                          |
| 63  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                              |
| 65  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO"; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 14  | ../../mss_generico/espanol/menu_mss.jsp            |
| 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 48  | ../../sse_generico/espanol/generico_links.jsp      |
| 178 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 11  | /css/estilo_mss.css                                |
| 13  | /libreria/funciones_sse.js                         |
| 115 | /iconos/noname_volver_52_44.gif                    |
| 122 | /iconos/                                           |
| 154 | Javascript:navegar(                                |
| 14  | ../../mss_generico/espanol/menu_mss.jsp            |
| 37  | mss_g3/mss_g3_p5_mod.jsp                           |
| 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 48  | ../../sse_generico/espanol/generico_links.jsp      |
| 178 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 178 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 13  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 37  | mss_g3/mss_g3_p5_mod.jsp                           | ausente    | P06                                                                                                       |
| BASE   | 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 178 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
