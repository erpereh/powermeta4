# welcome_action

Identificador: `mobile/welcome_action.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/welcome_action.jsp](../../../../clon_portal/portal/mobile/welcome_action.jsp) | `202231994d934fb15a2123fc9b496b582b5d24cfccde6795aaf18d3174503245` |    298 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/welcome_action.jsp](../../../../clon_portal/portal/mobile/welcome_action.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 102 | deviceFrom      | getParameter(request, "deviceFrom") |
| 124 | langid          | getParameter(request, "langid")     |
| 140 | clientkey       | getParameter(request, "clientkey")  |

| L   | Variable        | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 97  | sPreviousPage   | "/mobile/m4select_platform.html"                                    | /mobile/m4select_platform.html                                      |
| 98  | sMobileIndexURL | "/mobile/index.jsp"                                                 | /mobile/index.jsp                                                   |
| 155 | iret            | getPlatformURL (clientkey, deviceFrom, oPlatInfo, slang)            | getPlatformURL (clientkey, deviceFrom, oPlatInfo, slang)            |
| 210 | iReturn         | -1                                                                  | -1                                                                  |
| 212 | sDestURI        | null                                                                | null                                                                |
| 221 | sM4Obj          | "SRTC_PLAT_RESOLVE"                                                 | SRTC_PLAT_RESOLVE                                                   |
| 222 | sNode           | "SRTC_PLAT_RESOLVE"                                                 | SRTC_PLAT_RESOLVE                                                   |
| 223 | sMethod         | "GET_URL"                                                           | GET_URL                                                             |
| 238 | iPlatCount      | m.getCountInClient(sNode, sM4Obj, sNode)                            | m.getCountInClient(sNode, sM4Obj, sNode)                            |
| 240 | sRealDestURI    | null                                                                | null                                                                |
| 241 | i               | 0                                                                   | 0                                                                   |
| 243 | sIdPlatform     | m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "PLATFORM_TYPE") | m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "PLATFORM_TYPE") |
| 244 | sURLValue       | m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "URL")           | m.getItem(sNode, sM4Obj, sNode, String.valueOf(i), "URL")           |
| 249 | querystring     | url.getQuery()                                                      | url.getQuery()                                                      |
| 250 | path            | url.getPath()                                                       | url.getPath()                                                       |
| 252 | todesturi       | null                                                                | null                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 170 | getValue         |                                                          |
| 238 | getCountInClient | sNode, sM4Obj, sNode                                     |
| 243 | getItem          | sNode, sM4Obj, sNode, String.valueOf(i), "PLATFORM_TYPE" |
| 244 | getItem          | sNode, sM4Obj, sNode, String.valueOf(i), "URL"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función             | Argumentos        |
| --- | ------------------- | ----------------- |
| 37  | loadCordova         | deviceFrom        |
| 61  | printMsgAndRedirect | errorCode, pageTo |
| 83  | onDeviceReady       |                   |

| L   | Condición / acción / mensaje literal                                                                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39  | if(deviceFrom == 'android' &#124;&#124; deviceFrom == 'ios')                                                                                                    |
| 43  | if(deviceFrom == 'android')                                                                                                                                     |
| 48  | else if(deviceFrom == 'ios')                                                                                                                                    |
| 104 | if (deviceFrom != null &amp;&amp; !deviceFrom.equals("") &amp;&amp; !deviceFrom.equals("null"))                                                                 |
| 106 | if (deviceFrom.equals("android") &#124;&#124; deviceFrom.equals("ios"))                                                                                         |
| 114 | else                                                                                                                                                            |
| 125 | if (langid != null &amp;&amp; !langid.equals(""))                                                                                                               |
| 128 | if (deviceFrom != null &amp;&amp; !deviceFrom.equals("") &amp;&amp; !deviceFrom.equals("null"))                                                                 |
| 132 | else                                                                                                                                                            |
| 142 | if (clientkey == null &#124;&#124; clientkey.equals(""))                                                                                                        |
| 147 | else                                                                                                                                                            |
| 156 | if (iret != 0)                                                                                                                                                  |
| 165 | else                                                                                                                                                            |
| 167 | if (oPlatInfo.size() == 1)                                                                                                                                      |
| 176 | else                                                                                                                                                            |
| 178 | if (oPlatInfo.size() == 0)                                                                                                                                      |
| 187 | else                                                                                                                                                            |
| 253 | if (querystring != null)                                                                                                                                        |
| 257 | else                                                                                                                                                            |
| 264 | if (querystring != null)                                                                                                                                        |
| 268 | else                                                                                                                                                            |
| 284 | if (m4session != null)                                                                                                                                          |
| 119 | expresión de cálculo/transformación: sMobileIndexURL = sMobileIndexURL + "?deviceFrom=" + deviceFrom;                                                           |
| 120 | expresión de cálculo/transformación: sPreviousPage = sPreviousPage + "?deviceFrom=" + deviceFrom;                                                               |
| 130 | expresión de cálculo/transformación: sMobileIndexURL = sMobileIndexURL + "&amp;langid=" + slang;                                                                |
| 134 | expresión de cálculo/transformación: sMobileIndexURL = sMobileIndexURL + "?langid=" + slang;                                                                    |
| 255 | expresión de cálculo/transformación: todesturi = path + "&amp;deviceFrom=" + deviceFrom; // with query string in the URL                                        |
| 259 | expresión de cálculo/transformación: todesturi = path + "?deviceFrom=" + deviceFrom; // without query string in the URL                                         |
| 266 | expresión de cálculo/transformación: sRealDestURI = sURLValue + "&amp;" + "deviceFrom=" + deviceFrom + "&amp;desturi=" + java.net.URLEncoder.encode(todesturi); |
| 270 | expresión de cálculo/transformación: sRealDestURI = sURLValue + "?" + "deviceFrom=" + deviceFrom + "&amp;desturi=" + java.net.URLEncoder.encode(todesturi);     |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 25  | /mobile/icons/iconHome.png                |
| 26  | /mobile/css/mobile.generic.css            |
| 28  | /library/jquery.js                        |
| 33  | /mobile/js/meta4.mobile.js                |
| 34  | /library/jquery.mobile.js                 |
| 19  | com.meta4.jsp                             |
| 45  | /mobile/cordova/android/cordova.js        |
| 50  | /mobile/cordova/ios/cordova.js            |
| 79  | /mobile/translation/select_platform_en.js |
| 80  | /mobile/translation/m4mobile_en.js        |
| 97  | /mobile/m4select_platform.html            |
| 98  | /mobile/index.jsp                         |
| 209 | com.meta4.jsp                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 28  | /library/jquery.js                        | contextual | &#96;library/jquery.js&#96;                                                            |
| BASE   | 33  | /mobile/js/meta4.mobile.js                | contextual | [mobile/js/meta4.mobile.js](mobile--js--meta4-mobile.md)                               |
| BASE   | 34  | /library/jquery.mobile.js                 | ausente    | P06                                                                                    |
| BASE   | 19  | com.meta4.jsp                             | ausente    | P06                                                                                    |
| BASE   | 45  | /mobile/cordova/android/cordova.js        | contextual | [mobile/cordova/android/cordova.js](mobile--cordova--android--cordova.md)              |
| BASE   | 50  | /mobile/cordova/ios/cordova.js            | contextual | [mobile/cordova/ios/cordova.js](mobile--cordova--ios--cordova.md)                      |
| BASE   | 79  | /mobile/translation/select_platform_en.js | contextual | [mobile/translation/select_platform_en.js](mobile--translation--select_platform_en.md) |
| BASE   | 80  | /mobile/translation/m4mobile_en.js        | contextual | [mobile/translation/m4mobile_en.js](mobile--translation--m4mobile_en.md)               |
| BASE   | 97  | /mobile/m4select_platform.html            | contextual | [mobile/m4select_platform.html](mobile--m4select_platform.md)                          |
| BASE   | 98  | /mobile/index.jsp                         | contextual | [mobile/index.jsp](mobile--index.md)                                                   |
| BASE   | 209 | com.meta4.jsp                             | ausente    | P06                                                                                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/welcome_action.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
