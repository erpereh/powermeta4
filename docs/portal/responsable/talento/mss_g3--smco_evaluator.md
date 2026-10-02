# smco_evaluator

Identificador: `mss_g3/smco_evaluator.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave       | Texto      | Ámbito | Diccionario                                                                      |
| ----------- | ---------- | ------ | -------------------------------------------------------------------------------- |
| ev_mss.Eval | Evaluación | BASE   | [translations/mss_ev_es.properties:L7](../../referencias/literales/mss_ev_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_evaluator.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_evaluator.jsp) | `e1ad44765d8c056344ad1c9af10997bb3979d54f001b79784b4172addac6c3d9` |     38 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_evaluator.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_evaluator.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 19  | estado          | getParameter(request,"estado") |

| L   | Variable           | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 19  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |
| 24  | ztitle             | TranMss.getProperty("ev_mss.Eval")                                 | TranMss.getProperty("ev_mss.Eval")                                 |
| 25  | zpathVerComentario | "/mss_g3/espanol/smco_viewcomment.jsp?comment="                    | /mss_g3/espanol/smco_viewcomment.jsp?comment=                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 37  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                  |
| --- | --------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";}%&gt; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 22  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | /mss_g3/mss_ev_trans.jsp                              |
| 30  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp         |
| 32  | ../smco_evaluator_body.jsp                            |
| 33  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 8   | /libreria/funciones_filter.js                         |
| 9   | /libreria/funciones_sse_val.js                        |
| 10  | /libreria/funciones_sse.js                            |
| 11  | /libreria/func_eval.js                                |
| 12  | /libreria/mootools.js                                 |
| 13  | /libreria/functions_eval.js                           |
| 14  | /libreria/meta4ajax.js                                |
| 16  | /css/estilo_mss.css                                   |
| 17  | /css/style_eval.css                                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 22  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | /mss_g3/mss_ev_trans.jsp                              |
| 25  | /mss_g3/espanol/smco_viewcomment.jsp?comment=         |
| 30  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp         |
| 32  | ../smco_evaluator_body.jsp                            |
| 33  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 22  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 23  | /mss_g3/mss_ev_trans.jsp                              | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |
| BASE   | 30  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 32  | ../smco_evaluator_body.jsp                            | física     | [mss_g3/smco_evaluator_body.jsp](mss_g3--smco_evaluator_body.md)                                              |
| BASE   | 33  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                  |
| BASE   | 8   | /libreria/funciones_filter.js                         | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 9   | /libreria/funciones_sse_val.js                        | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 11  | /libreria/func_eval.js                                | contextual | [libreria/func_eval.js](../../transversal/dependencias/libreria--func_eval.md)                                |
| BASE   | 12  | /libreria/mootools.js                                 | contextual | &#96;libreria/mootools.js&#96;                                                                                |
| BASE   | 13  | /libreria/functions_eval.js                           | contextual | [libreria/functions_eval.js](../../transversal/dependencias/libreria--functions_eval.md)                      |
| BASE   | 14  | /libreria/meta4ajax.js                                | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 22  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 23  | /mss_g3/mss_ev_trans.jsp                              | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |
| BASE   | 25  | /mss_g3/espanol/smco_viewcomment.jsp?comment=         | contextual | [mss_g3/smco_viewcomment.jsp](mss_g3--smco_viewcomment.md)                                                    |
| BASE   | 30  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 32  | ../smco_evaluator_body.jsp                            | física     | [mss_g3/smco_evaluator_body.jsp](mss_g3--smco_evaluator_body.md)                                              |
| BASE   | 33  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_evaluator.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
