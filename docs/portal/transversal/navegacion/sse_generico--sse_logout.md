# sse_logout

Identificador: `sse_generico/sse_logout.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto       | Ámbito | Diccionario                                                                                  |
| --------------- | ----------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.Lbllogoff | Desconectar | COLL   | [translations/ess_mss_gen_es.properties:L156](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Lbllogoff | Desconectar | CYC    | [translations/ess_mss_gen_es.properties:L156](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Lbllogoff | Desconectar | IBER   | [translations/ess_mss_gen_es.properties:L156](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Lbllogoff | Desconectar | BASE   | [translations/ess_mss_gen_es.properties:L155](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_logout.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_logout.jsp) | `395628ca8e704ae805f76beacf7804c286acfb10c7e33ac9902e2d5cc67cf02b` |      1 |
| COLL / compartido | [m4custom/COLL/sse_generico/sse_logout.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sse_logout.jsp)                 | `b02eba7bbeeeb591974cb3b7ae30ca113387ba3f8e183945d9c79791cd4e52cf` |     27 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_logout.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_logout.jsp)   | `395628ca8e704ae805f76beacf7804c286acfb10c7e33ac9902e2d5cc67cf02b` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sse_logout.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sse_logout.jsp)                   | `b02eba7bbeeeb591974cb3b7ae30ca113387ba3f8e183945d9c79791cd4e52cf` |     27 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_logout.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_logout.jsp) | `395628ca8e704ae805f76beacf7804c286acfb10c7e33ac9902e2d5cc67cf02b` |      1 |
| IBER / compartido | [m4custom/IBER/sse_generico/sse_logout.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sse_logout.jsp)                 | `b02eba7bbeeeb591974cb3b7ae30ca113387ba3f8e183945d9c79791cd4e52cf` |     27 |
| BASE / español    | [sse_generico/espanol/sse_logout.jsp](../../../../clon_portal/portal/sse_generico/espanol/sse_logout.jsp)                             | `395628ca8e704ae805f76beacf7804c286acfb10c7e33ac9902e2d5cc67cf02b` |      1 |
| BASE / compartido | [sse_generico/sse_logout.jsp](../../../../clon_portal/portal/sse_generico/sse_logout.jsp)                                             | `b02eba7bbeeeb591974cb3b7ae30ca113387ba3f8e183945d9c79791cd4e52cf` |     27 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_logout.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_logout.jsp). Líneas físicas, contando desde 1.

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

| L   | Include           |
| --- | ----------------- |
| 1   | ../sse_logout.jsp |

| L   | Destino / recurso |
| --- | ----------------- |
| 1   | ../sse_logout.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sse_logout.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sse_logout.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                 |
| --- | ------- | ------------------------------------------------------------------------- |
| 26  | iframe  | src=&lt;%=sExternalSystem%&gt;/?_LOGOUT; frameborder=0; width=0; height=0 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 11  | ExternalSystem  | getBagEntries("ExternalSystem") |

| L   | Variable        | Expresión fuente                                                                 | Resolución estática parcial                                                      |
| --- | --------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 8   | zp_RequestURI   | request.getRequestURI()                                                          | request.getRequestURI()                                                          |
| 11  | sExternalSystem | m4SessionCl.getBagEntries("ExternalSystem")                                      | m4SessionCl.getBagEntries("ExternalSystem")                                      |
| 12  | zp_iLang        | zp_sessionmanager.getLanguageID()                                                | zp_sessionmanager.getLanguageID()                                                |
| 13  | zp_LangFolder   | CheckConfig.checkFolderLanguage(new Long(zp_iLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(zp_iLang).intValue(), CheckConfig.THCL) |
| 15  | g_zsLoginURL    | CheckConfig.setBadLoginLink(zp_iLang, CheckConfig.THCL)                          | CheckConfig.setBadLoginLink(zp_iLang, CheckConfig.THCL)                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado |
| --- | ----------- | ------------------ |
| 25  | m4:clearbag |                    |
| 25  | m4:logout   |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 19  | logout  |            |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                   |
| --- | ------------------------- |
| 1   | sse_generico_taglib.jsp   |
| 6   | sse_generico_taglib_2.jsp |
| 6   | sgco_gen_inc.jsp          |
| 6   | sse_generico_trans.jsp    |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 20  | &lt;%=g_zsLoginURL%&gt;             |
| 26  | &lt;%=sExternalSystem%&gt;/?_LOGOUT |
| 1   | sse_generico_taglib.jsp             |
| 6   | sse_generico_taglib_2.jsp           |
| 6   | sgco_gen_inc.jsp                    |
| 6   | sse_generico_trans.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| COLL   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| COLL   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| COLL   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| COLL   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| COLL   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| COLL   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| COLL   | 20  | &lt;%=g_zsLoginURL%&gt;             | dinámica   | P06                                                                              |
| COLL   | 26  | &lt;%=sExternalSystem%&gt;/?_LOGOUT | dinámica   | P06                                                                              |
| COLL   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| COLL   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| COLL   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| COLL   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| CYC    | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| CYC    | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| CYC    | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| CYC    | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| CYC    | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| CYC    | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| CYC    | 20  | &lt;%=g_zsLoginURL%&gt;             | dinámica   | P06                                                                              |
| CYC    | 26  | &lt;%=sExternalSystem%&gt;/?_LOGOUT | dinámica   | P06                                                                              |
| CYC    | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| CYC    | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| CYC    | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| CYC    | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| IBER   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| IBER   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| IBER   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| IBER   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| IBER   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| IBER   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| IBER   | 20  | &lt;%=g_zsLoginURL%&gt;             | dinámica   | P06                                                                              |
| IBER   | 26  | &lt;%=sExternalSystem%&gt;/?_LOGOUT | dinámica   | P06                                                                              |
| IBER   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| IBER   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| IBER   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| IBER   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| BASE   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| BASE   | 1   | ../sse_logout.jsp                   | física     | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                       |
| BASE   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| BASE   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| BASE   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |
| BASE   | 20  | &lt;%=g_zsLoginURL%&gt;             | dinámica   | P06                                                                              |
| BASE   | 26  | &lt;%=sExternalSystem%&gt;/?_LOGOUT | dinámica   | P06                                                                              |
| BASE   | 1   | sse_generico_taglib.jsp             | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | sse_generico_taglib_2.jsp           | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md) |
| BASE   | 6   | sgco_gen_inc.jsp                    | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                   |
| BASE   | 6   | sse_generico_trans.jsp              | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_logout.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
