# smco_g3_p31_feedback

Identificador: `mss_g3/smco_g3_p31_feedback.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                | Texto                                     | Ámbito | Diccionario                                                                         |
| -------------------- | ----------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.FeedBackTitle | Valoración de Conocimientos del Candidato | BASE   | [translations/smco_iv_es.properties:L99](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p31_feedback.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p31_feedback.jsp) | `5d3d803c92cb1bc2a3aed2942b2491eecb45e51c5278c68a8ff7735477ca8f8b` |     48 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p31_feedback.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p31_feedback.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 22  | estado          | getParameter(request,"estado")   |
| 23  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable      | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 21  | FeedBackTitle | tranivMSS.getProperty("iv_mss.FeedBackTitle")                        | tranivMSS.getProperty("iv_mss.FeedBackTitle")                        |
| 22  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 23  | zinicios      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 47  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 24  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 25  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 8   | ../../mss_generico/espanol/menu_mss.jsp               |
| 19  | /mss_g3/smco_iv_trans.jsp                             |
| 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 37  | ../../sse_generico/espanol/generico_links.jsp         |
| 40  | ../smco_g3_p31_feedback_body.jsp                      |
| 42  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 9   | /css/estilo_mss.css                                   |
| 10  | /libreria/funciones_sse.js                            |
| 11  | /libreria/funciones_filter.js                         |
| 12  | /libreria/fun_gen_act.js                              |
| 13  | /libreria/mootools.js                                 |
| 14  | /libreria/functions_eval.js                           |
| 15  | /libreria/meta4ajax.js                                |
| 17  | /css/style_eval.css                                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 8   | ../../mss_generico/espanol/menu_mss.jsp               |
| 19  | /mss_g3/smco_iv_trans.jsp                             |
| 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 37  | ../../sse_generico/espanol/generico_links.jsp         |
| 40  | ../smco_g3_p31_feedback_body.jsp                      |
| 42  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 19  | /mss_g3/smco_iv_trans.jsp                             | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                          |
| BASE   | 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 40  | ../smco_g3_p31_feedback_body.jsp                      | física     | [mss_g3/smco_g3_p31_feedback_body.jsp](mss_g3--smco_g3_p31_feedback_body.md)                                  |
| BASE   | 42  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                  |
| BASE   | 10  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 11  | /libreria/funciones_filter.js                         | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 12  | /libreria/fun_gen_act.js                              | contextual | [libreria/fun_gen_act.js](../../transversal/dependencias/libreria--fun_gen_act.md)                            |
| BASE   | 13  | /libreria/mootools.js                                 | contextual | &#96;libreria/mootools.js&#96;                                                                                |
| BASE   | 14  | /libreria/functions_eval.js                           | contextual | [libreria/functions_eval.js](../../transversal/dependencias/libreria--functions_eval.md)                      |
| BASE   | 15  | /libreria/meta4ajax.js                                | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 19  | /mss_g3/smco_iv_trans.jsp                             | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                          |
| BASE   | 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 40  | ../smco_g3_p31_feedback_body.jsp                      | física     | [mss_g3/smco_g3_p31_feedback_body.jsp](mss_g3--smco_g3_p31_feedback_body.md)                                  |
| BASE   | 42  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p31_feedback.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
