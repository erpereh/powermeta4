# mss_g4_p1_val

Identificador: `mss_g4/mss_g4_p1_val.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                        | Ámbito | Diccionario                                                                                  |
| ------------------ | ------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| GTA_78             | Valida incidencias y vacaciones                              | COLL   | [translations/ess_mss_gen_es.properties:L284](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_78             | Valida incidencias y vacaciones                              | CYC    | [translations/ess_mss_gen_es.properties:L284](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_78             | Valida incidencias y vacaciones                              | IBER   | [translations/ess_mss_gen_es.properties:L284](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_78             | Valida incidencias y vacaciones                              | BASE   | [translations/ess_mss_gen_es.properties:L283](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound7 | Actualmente no tienes ningún dato que validar en este nivel. | COLL   | [translations/ess_mss_gen_es.properties:L120](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound7 | Actualmente no tienes ningún dato que validar en este nivel. | CYC    | [translations/ess_mss_gen_es.properties:L120](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound7 | Actualmente no tienes ningún dato que validar en este nivel. | IBER   | [translations/ess_mss_gen_es.properties:L120](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound7 | Actualmente no tienes ningún dato que validar en este nivel. | BASE   | [translations/ess_mss_gen_es.properties:L120](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p1_val.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p1_val.jsp) | `9115064f6a6e3da5dbd4744d9e18c3078c60b9e3e59e2e933e8a554dcb021d5f` |     36 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p1_val.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p1_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| 24  | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post |
| 25  | input   | type=hidden; id=param; name=param; value=                                                                                 |
| 26  | input   | type=hidden; id=TAG; name=TAG; value=                                                                                     |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 29  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 28  | &lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;&lt;%=Tran.getProperty("Label.NoDataFound7")%&gt;&lt;/div&gt;&lt;%}%&gt; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 12  | /mss_generico/espanol/menu_mss.jsp                    |
| 14  | /mss_generico/mss_cr_trans.jsp                        |
| 18  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 19  | ../../sse_generico/espanol/generico_links.jsp         |
| 21  | ../mss_g4_p1_val_body.jsp                             |
| 23  | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 31  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 7   | /css/estilo_mss.css                                                             |
| 8   | /libreria/funciones_sse.js                                                      |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /translations/m4err_ess_es.js                                                   |
| 13  | /libreria/clase_val_entradas.js                                                 |
| 24  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                      |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                    |
| 12  | /mss_generico/espanol/menu_mss.jsp                                              |
| 14  | /mss_generico/mss_cr_trans.jsp                                                  |
| 18  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 19  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 21  | ../mss_g4_p1_val_body.jsp                                                       |
| 23  | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 31  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 12  | /mss_generico/espanol/menu_mss.jsp                                              | contextual | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 14  | /mss_generico/mss_cr_trans.jsp                                                  | contextual | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                                        |
| BASE   | 18  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 21  | ../mss_g4_p1_val_body.jsp                                                       | física     | [mss_g4/mss_g4_p1_val_body.jsp](mss_g4--mss_g4_p1_val_body.md)                                                  |
| BASE   | 23  | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 31  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 10  | /translations/m4err_ess_es.js                                                   | contextual | [translations/m4err_ess_es.js](../../transversal/dependencias/translations--m4err_ess_es.md)                    |
| BASE   | 13  | /libreria/clase_val_entradas.js                                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                |
| BASE   | 24  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp                                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 12  | /mss_generico/espanol/menu_mss.jsp                                              | contextual | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 14  | /mss_generico/mss_cr_trans.jsp                                                  | contextual | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                                        |
| BASE   | 18  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 21  | ../mss_g4_p1_val_body.jsp                                                       | física     | [mss_g4/mss_g4_p1_val_body.jsp](mss_g4--mss_g4_p1_val_body.md)                                                  |
| BASE   | 23  | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 31  | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p1_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
