# mss_delegation_informacion_usuario

Identificador: `mss_generico/mss_delegation_informacion_usuario.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave          | Texto       | Ámbito | Diccionario                                                                                      |
| -------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------ |
| Label.delClose | Cerrar      | BASE   | [translations/mss_delegation_es.properties:L7](../../referencias/literales/mss_delegation_es.md) |
| Label.delInfo  | Información | BASE   | [translations/mss_delegation_es.properties:L6](../../referencias/literales/mss_delegation_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_delegation_informacion_usuario.jsp) | `54a02d899069e0df4f743c64485b1ce1cac71af8726c0970a729d2cd4de98603` |      4 |
| COLL / compartido | [m4custom/COLL/mss_generico/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/mss_delegation_informacion_usuario.jsp)                 | `b783505108f18b5d629435682dba4c78e199629808b0e06fc7b0885300750c6e` |     39 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_delegation_informacion_usuario.jsp) | `54a02d899069e0df4f743c64485b1ce1cac71af8726c0970a729d2cd4de98603` |      4 |
| IBER / compartido | [m4custom/IBER/mss_generico/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/mss_delegation_informacion_usuario.jsp)                 | `b783505108f18b5d629435682dba4c78e199629808b0e06fc7b0885300750c6e` |     39 |
| BASE / español    | [mss_generico/espanol/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_delegation_informacion_usuario.jsp)                             | `54a02d899069e0df4f743c64485b1ce1cac71af8726c0970a729d2cd4de98603` |      4 |
| BASE / compartido | [mss_generico/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/mss_generico/mss_delegation_informacion_usuario.jsp)                                             | `b783505108f18b5d629435682dba4c78e199629808b0e06fc7b0885300750c6e` |     39 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_delegation_informacion_usuario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 2   | ../mss_delegation_informacion_usuario.jsp |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 2   | ../mss_delegation_informacion_usuario.jsp |

## Versión 2: COLL compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/mss_delegation_informacion_usuario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/mss_delegation_informacion_usuario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30  | a       | href=; onclick=window.close();                                                                                                                                                                          |
| 30  | img     | title=JSP_EXPR_mssDelegation.getProperty(; alt=JSP_EXPR_mssDelegation.getProperty(; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover= m4sombra(this); onmouseout=m4oscuridad(this) |
| 33  | a       | href=                                                                                                                                                                                                   |
| 33  | img     | alt=JSP_EXPR_mssDelegation.getProperty(; src=/iconos/noname_configuracion_98_125.gif; width=98; height=125; onmouseover=m4luznoname(this); onmouseout=m4oscuridad(this)                                 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable      | Expresión fuente                               | Resolución estática parcial                                                                        |
| --- | ------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 15  | zsubsesion    | "MSS_DELEGATION"                               | MSS_DELEGATION                                                                                     |
| 16  | zmeta4object  | zsubsesion                                     | MSS_DELEGATION                                                                                     |
| 17  | znodo2        | "MSS_ERROR_COMUNICATION"                       | MSS_ERROR_COMUNICATION                                                                             |
| 18  | zoutputdef    | zsubsesion + "!" + znodo2 + "[*]"              | MSS_DELEGATION{"!"}MSS_ERROR_COMUNICATION{"[*]"}                                                   |
| 19  | zraiz         | zsubsesion + "!" + znodo2 + "."                | MSS_DELEGATION{"!"}MSS_ERROR_COMUNICATION{"."}                                                     |
| 20  | zTEXTOERRORES | znodo2 + ":" + zraiz + "TEXTO_ERRORES_USUARIO" | MSS_ERROR_COMUNICATION{":"}MSS_DELEGATION{"!"}MSS_ERROR_COMUNICATION{"."}{"TEXTO_ERRORES_USUARIO"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 22  | m4:startpage | m4task=MSS_DELEGATION                                                                                                    |
| 22  | m4:beginjob  |                                                                                                                          |
| 23  | m4:datadef   | m4o=MSS_DELEGATION; m4name=MSS_DELEGATION                                                                                |
| 24  | m4:outputdef | m4alias=MSS_ERROR_COMUNICATION                                                                                           |
| 24  | m4:param     | name=m4name0; value=MSS_DELEGATION{"!"}MSS_ERROR_COMUNICATION{"[*]"}                                                     |
| 25  | m4:endjob    |                                                                                                                          |
| 34  | m4:item      | m4name=MSS_ERROR_COMUNICATION{":"}MSS_DELEGATION{"!"}MSS_ERROR_COMUNICATION{"."}{"TEXTO_ERRORES_USUARIO"}; htmlsafe=true |
| 38  | m4:endpage   |                                                                                                                          |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 18  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";                 |
| 19  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                        |
| 20  | expresión de cálculo/transformación: String zTEXTOERRORES = znodo2 + ":" + zraiz + "TEXTO_ERRORES_USUARIO"; |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../mss_generico/mss_delegation_trans.jsp  |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 4   | /css/estilo_mss.css                       |
| 5   | /libreria/funciones_sse.js                |
| 30  | /iconos/noname_volver_52_44.gif           |
| 33  | /iconos/noname_configuracion_98_125.gif   |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../mss_generico/mss_delegation_trans.jsp  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| COLL   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |
| COLL   | 5   | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| COLL   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |
| IBER   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| IBER   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |
| IBER   | 5   | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| IBER   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |
| BASE   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| BASE   | 2   | ../mss_delegation_informacion_usuario.jsp | física     | [mss_generico/mss_delegation_informacion_usuario.jsp](mss_generico--mss_delegation_informacion_usuario.md)                                                                     |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |
| BASE   | 5   | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 8   | ../mss_generico/mss_delegation_trans.jsp  | física     | [mss_generico/mss_delegation_trans.jsp](mss_generico--mss_delegation_trans.md)                                                                                                 |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_delegation_informacion_usuario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
