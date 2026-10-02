# Call KnownetLight

Identificador: `sse_generico/generico_from_mail.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_from_mail.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_from_mail.jsp) | `ac1223c5d1654bbb476698258a669f4c4679316c65ebf9d90e9faba64f9c09f9` |     46 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_from_mail.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_from_mail.jsp)   | `ac1223c5d1654bbb476698258a669f4c4679316c65ebf9d90e9faba64f9c09f9` |     46 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_from_mail.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_from_mail.jsp) | `ac1223c5d1654bbb476698258a669f4c4679316c65ebf9d90e9faba64f9c09f9` |     46 |
| BASE / español    | [sse_generico/espanol/generico_from_mail.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_from_mail.jsp)                             | `ac1223c5d1654bbb476698258a669f4c4679316c65ebf9d90e9faba64f9c09f9` |     46 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_from_mail.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_from_mail.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 16  | Call KnownetLight        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                            |
| --- | ------- | ------------------------------------ |
| 38  | form    | name=call_local_servlet; method=POST |
| 39  | input   | type=hidden; name=_URL; value=       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 25  | Knownet_task    | getParameter(request,"Knownet_task") |

| L   | Variable     | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 25  | Knownet_task | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                    |
| --- | ------------ | ----------------------------------------------------------------------------------------------------- |
| 30  | m4:startpage | m4task=SESSION                                                                                        |
| 34  | m4:crosslink | uri=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task"); idprovider=aux_provider |
| 42  | m4:endpage   |                                                                                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 33  | goto_local_servlet |            |

| L   | Condición / acción / mensaje literal                                                             |
| --- | ------------------------------------------------------------------------------------------------ |
| 27  | expresión de cálculo/transformación: Knownet_task= "/servlet/CheckSecurity/JSP/" + Knownet_task; |

### Includes, navegación y dependencias

| L   | Include                                           |
| --- | ------------------------------------------------- |
| 13  | ../../sse_generico/espanol/generico_invisible.jsp |
| 19  | ../../sse_generico/espanol/menu_ess.jsp           |

| L   | Destino / recurso                                 |
| --- | ------------------------------------------------- |
| 17  | /css/estilo_sse.css                               |
| 18  | /libreria/funciones_sse.js                        |
| 34  | &lt;m4:crosslink uri=                             |
| 13  | ../../sse_generico/espanol/generico_invisible.jsp |
| 19  | ../../sse_generico/espanol/menu_ess.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                        | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| COLL   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| COLL   | 18  | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| COLL   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| CYC    | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| CYC    | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| CYC    | 18  | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| CYC    | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| IBER   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| IBER   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| IBER   | 18  | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| IBER   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| BASE   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| BASE   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |
| BASE   | 18  | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 13  | ../../sse_generico/espanol/generico_invisible.jsp | física     | [sse_generico/generico_invisible.jsp](sse_generico--generico_invisible.md)                                                                       |
| BASE   | 19  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_from_mail.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
