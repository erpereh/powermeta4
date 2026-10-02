# logout

Identificador: `tctools/tc_logout.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/tc_logout.jsp](../../../../clon_portal/portal/tctools/tc_logout.jsp) | `6cc3d138aa185453349b7c0b1a8ef9e82b57566aaa1790cf71765c448d2ae7fd` |    151 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/tc_logout.jsp](../../../../clon_portal/portal/tctools/tc_logout.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 35  | logout                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                  |
| --- | ------- | ---------------------------------------------------------- |
| 50  | iframe  | title=logout; src=&lt;%=sAsyncPage%&gt;; width=0; height=0 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 82  | ExternalSystem  | getBagEntries("ExternalSystem") |

| L   | Variable               | Expresión fuente                                                             | Resolución estática parcial                                                  |
| --- | ---------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 27  | finalURL               | signoff (request, response, asyncPagesToRun)                                 | signoff (request, response, asyncPagesToRun)                                 |
| 48  | sAsyncPage             | listIterator.next()                                                          | listIterator.next()                                                          |
| 64  | finalPage              | null                                                                         | null                                                                         |
| 65  | originHost             | null                                                                         | null                                                                         |
| 66  | logoutEndpoint         | null                                                                         | null                                                                         |
| 67  | childrenExternalSystem | null                                                                         | null                                                                         |
| 72  | iLang                  | M4WebLanguages.getLanguageFromCookie(request)                                | M4WebLanguages.getLanguageFromCookie(request)                                |
| 73  | loginURL               | CheckConfig.setBadLoginLink(iLang)                                           | CheckConfig.setBadLoginLink(iLang)                                           |
| 74  | errorURL               | CheckConfig.checkErrorPage(iLang)                                            | CheckConfig.checkErrorPage(iLang)                                            |
| 86  | ssoLogoutEndpoint      | (String) session.getAttribute("sso_logout_endpoint")                         | (String) session.getAttribute("sso_logout_endpoint")                         |
| 143 | productAttribute       | (String)session.getAttribute("_PROD")                                        | (String)session.getAttribute("_PROD")                                        |
| 146 | productCookie          | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 37  | logout  |            |

| L   | Condición / acción / mensaje literal                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 79  | if (m4session != null)                                                                                      |
| 84  | else                                                                                                        |
| 87  | if (ssoLogoutEndpoint != null &amp;&amp; !ssoLogoutEndpoint.equals("")) logoutEndpoint = ssoLogoutEndpoint; |
| 101 | if (childrenExternalSystem != null) asyncPagesToRun.add(childrenExternalSystem + "?_LOGOUT");               |
| 104 | if (originHost != null &amp;&amp; !originHost.equals(""))                                                   |
| 106 | if (m4session != null)                                                                                      |
| 116 | if (m4session != null) M4Context.eraseAndLogout(request, response);                                         |
| 119 | if (logoutEndpoint != null &amp;&amp; !logoutEndpoint.equals(""))                                           |
| 125 | if (isPop2Exp(session, request))                                                                            |
| 144 | if (productAttribute != null &amp;&amp; (productAttribute.equalsIgnoreCase("exp"))) return true;            |
| 147 | if (productCookie != null &amp;&amp; productCookie.equalsIgnoreCase("exp")) return true;                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso     |
| --- | --------------------- |
| 38  | &lt;%=finalURL%&gt;   |
| 50  | &lt;%=sAsyncPage%&gt; |
| 62  | com.meta4.jsp         |
| 127 | /exp/index.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia            | Resolución | Ficha / candidato |
| ------ | --- | --------------------- | ---------- | ----------------- |
| BASE   | 38  | &lt;%=finalURL%&gt;   | dinámica   | P06               |
| BASE   | 50  | &lt;%=sAsyncPage%&gt; | dinámica   | P06               |
| BASE   | 62  | com.meta4.jsp         | ausente    | P06               |
| BASE   | 127 | /exp/index.jsp        | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/tc_logout.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
