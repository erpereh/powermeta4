# logout

Identificador: `shco_g0/shco_gen_logout.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_logout.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_logout.jsp) | `15b0a1ceae63d6b4fd0642b858c378b6550d87992b06befa7731f4f0822aead4` |    232 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_logout.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_logout.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 40  | logout                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                  |
| --- | ------- | ---------------------------------------------------------- |
| 54  | iframe  | title=logout; src=&lt;%=sAsyncPage%&gt;; width=0; height=0 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 98  | ExternalSystem  | getBagEntries("ExternalSystem")   |
| 197 | loginURL        | getParameter(request, "loginURL") |

| L   | Variable               | Expresión fuente                                                             | Resolución estática parcial                                                  |
| --- | ---------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 32  | finalURL               | signoff (request, response, asyncPagesToRun)                                 | signoff (request, response, asyncPagesToRun)                                 |
| 52  | sAsyncPage             | listIterator.next()                                                          | listIterator.next()                                                          |
| 81  | finalPage              | null                                                                         | null                                                                         |
| 82  | samlUser               | null                                                                         | null                                                                         |
| 83  | originHost             | null                                                                         | null                                                                         |
| 84  | breadcrumbURL          | null                                                                         | null                                                                         |
| 85  | childrenExternalSystem | null                                                                         | null                                                                         |
| 89  | iLang                  | M4WebLanguages.getLanguageFromCookie(request)                                | M4WebLanguages.getLanguageFromCookie(request)                                |
| 90  | loginURL               | getLoginURL(request, session)                                                | getLoginURL(request, session)                                                |
| 91  | errorURL               | CheckConfig.checkErrorPage(iLang)                                            | CheckConfig.checkErrorPage(iLang)                                            |
| 92  | logoutEndpoint         | (String) session.getAttribute("sso_logout_endpoint")                         | (String) session.getAttribute("sso_logout_endpoint")                         |
| 103 | ssoLogoutEndpoint      | (String) session.getAttribute("sso_logout_endpoint")                         | (String) session.getAttribute("sso_logout_endpoint")                         |
| 197 | sLoginURL              | M4SafeRequest.getParameter(request, "loginURL")                              | M4SafeRequest.getParameter(request, "loginURL")                              |
| 207 | iLang                  | M4WebLanguages.getLanguageFromCookie(request)                                | M4WebLanguages.getLanguageFromCookie(request)                                |
| 222 | productAttribute       | (String)session.getAttribute("_PROD")                                        | (String)session.getAttribute("_PROD")                                        |
| 225 | productCookie          | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 60  | logout  |            |

| L   | Condición / acción / mensaje literal                                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------- |
| 48  | if (asyncPagesToRun.size() &gt; 0)                                                                                            |
| 67  | else                                                                                                                          |
| 97  | if (m4session != null)                                                                                                        |
| 101 | else                                                                                                                          |
| 104 | if (ssoLogoutEndpoint != null &amp;&amp; !ssoLogoutEndpoint.equals("")) logoutEndpoint = ssoLogoutEndpoint;                   |
| 130 | if (childrenExternalSystem != null) asyncPagesToRun.add(childrenExternalSystem + "?_LOGOUT");                                 |
| 133 | if (originHost != null &amp;&amp; !originHost.equals(""))                                                                     |
| 135 | if (m4session != null)                                                                                                        |
| 145 | if (m4session != null)                                                                                                        |
| 152 | if (samlUser != null &amp;&amp; !samlUser.equals("") &amp;&amp; logoutEndpoint != null &amp;&amp; !logoutEndpoint.equals("")) |
| 159 | if (breadcrumbURL != null &amp;&amp; !breadcrumbURL.equals(""))                                                               |
| 161 | if (logoutEndpoint != null &amp;&amp; !logoutEndpoint.equals(""))                                                             |
| 167 | else                                                                                                                          |
| 175 | if (isPop2Exp(session, request))                                                                                              |
| 200 | if(sLoginURL == null &#124;&#124; sLoginURL.equals("")){                                                                      |
| 206 | if(sLoginURL == null &#124;&#124; sLoginURL.equals("")){                                                                      |
| 213 | if (sLoginURL == null &#124;&#124; sLoginURL.charAt(0) != '/' &#124;&#124; sLoginURL.charAt(1) == '/'){                       |
| 223 | if (productAttribute != null &amp;&amp; (productAttribute.equalsIgnoreCase("exp"))) return true;                              |
| 226 | if (productCookie != null &amp;&amp; productCookie.equalsIgnoreCase("exp")) return true;                                      |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 41  | ../m4jsapi/m4jsapi.nocache.js |
| 54  | &lt;%=sAsyncPage%&gt;         |
| 61  | &lt;%=finalURL%&gt;           |
| 30  | com.meta4.jsp                 |
| 79  | com.meta4.jsp                 |
| 177 | /exp/index.jsp                |
| 194 | com.meta4.jsp                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                    | Resolución | Ficha / candidato                                         |
| ------ | --- | ----------------------------- | ---------- | --------------------------------------------------------- |
| BASE   | 41  | ../m4jsapi/m4jsapi.nocache.js | física     | [m4jsapi/m4jsapi.nocache.js](m4jsapi--m4jsapi-nocache.md) |
| BASE   | 54  | &lt;%=sAsyncPage%&gt;         | dinámica   | P06                                                       |
| BASE   | 61  | &lt;%=finalURL%&gt;           | dinámica   | P06                                                       |
| BASE   | 30  | com.meta4.jsp                 | ausente    | P06                                                       |
| BASE   | 79  | com.meta4.jsp                 | ausente    | P06                                                       |
| BASE   | 177 | /exp/index.jsp                | ausente    | P06                                                       |
| BASE   | 194 | com.meta4.jsp                 | ausente    | P06                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_logout.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
