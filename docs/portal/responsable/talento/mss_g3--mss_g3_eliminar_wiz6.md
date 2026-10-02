# Eliminar favoritos

Identificador: `mss_g3/mss_g3_eliminar_wiz6.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_eliminar_wiz6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_eliminar_wiz6.jsp) | `978c4fc0fc869b7d7b63be9147234c86e0cd447c7c45e70099a23f051586ab24` |     62 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_eliminar_wiz6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_eliminar_wiz6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 15  | Eliminar favoritos       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 21  | id_enl          | getParameter(request,"id_enl") |
| 22  | actual          | getParameter(request,"actual") |

| L   | Variable        | Expresión fuente                                                                                    | Resolución estática parcial                                                                       |
| --- | --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 9   | zurl            | "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz6.jsp?estado=31&amp;OpcAct=6&amp;ztipopersist=wizx" | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz6.jsp?estado=31&amp;OpcAct=6&amp;ztipopersist=wizx |
| 21  | zidenl          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl")                                |
| 22  | zregistroactual | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual")                                |
| 26  | zerror          | "N"                                                                                                 | N                                                                                                 |
| 30  | zsubsesion      | "SSM_VACANT"                                                                                        | SSM_VACANT                                                                                        |
| 31  | zmeta4object    | "SSM_VACANT"                                                                                        | SSM_VACANT                                                                                        |
| 32  | znodo           | "SSM_JOB_POST_LANG"                                                                                 | SSM_JOB_POST_LANG                                                                                 |
| 36  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                                                    | SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[*]"}                                                           |
| 37  | zlectura        | zsubsesion + "!" + znodo                                                                            | SSM_VACANT{"!"}SSM_JOB_POST_LANG                                                                  |
| 38  | zraiz           | zsubsesion + "!" + znodo + "."                                                                      | SSM_VACANT{"!"}SSM_JOB_POST_LANG{"."}                                                             |
| 39  | zmove           | znodo + ":" + znodo + "[FIRST]"                                                                     | SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                                                |
| 40  | ziterator       | znodo + ":" + zsubsesion + "!" + znodo                                                              | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG                                            |
| 44  | zmetodo         | zsubsesion + "!SSM_JOB_POST_LANG.ELIMINAR_VALOR"                                                    | SSM_VACANT{"!SSM_JOB_POST_LANG.ELIMINAR_VALOR"}                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 49  | m4:startpage | m4task=SSM_VACANT                                                                        |
| 49  | m4:beginjob  |                                                                                          |
| 50  | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                        |
| 51  | m4:exec      | m4method=SSM_VACANT{"!SSM_JOB_POST_LANG.ELIMINAR_VALOR"}                                 |
| 51  | m4:param     | name=PARAMETRO; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl") |
| 52  | m4:outputdef | m4alias=SSM_JOB_POST_LANG                                                                |
| 52  | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[*]"}                              |
| 53  | m4:endjob    |                                                                                          |
| 54  | m4:move      |                                                                                          |
| 54  | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                |
| 61  | m4:endpage   |                                                                                          |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 36  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";              |
| 37  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                        |
| 38  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                     |
| 39  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                    |
| 40  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;         |
| 44  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!SSM_JOB_POST_LANG.ELIMINAR_VALOR"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 18  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 60  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                                                                 |
| --- | ------------------------------------------------------------------------------------------------- |
| 16  | /css/estilo_sse.css                                                                               |
| 17  | /libreria/funciones_sse.js                                                                        |
| 9   | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz6.jsp?estado=31&amp;OpcAct=6&amp;ztipopersist=wizx |
| 18  | ../../sse_generico/espanol/menu_ess.jsp                                                           |
| 60  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp                                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                        | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | ------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 18  | ../../sse_generico/espanol/menu_ess.jsp                                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 60  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp                                         | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 17  | /libreria/funciones_sse.js                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 9   | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz6.jsp?estado=31&amp;OpcAct=6&amp;ztipopersist=wizx | ausente    | P06                                                                                                                     |
| BASE   | 18  | ../../sse_generico/espanol/menu_ess.jsp                                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 60  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp                                         | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_eliminar_wiz6.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
