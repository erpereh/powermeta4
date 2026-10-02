# sgco_subportal

Identificador: `sse_generico/sgco_subportal.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_subportal.jsp) | `3ecd6faca2d016d457980f2477be18d6b30383927cb2493c21d427b836f80a91` |      1 |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_subportal.jsp)                 | `0bfaaee6d90510cfc4bf1fbb4b98a501af870892d05a5c0ac587261762fac138` |    111 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_subportal.jsp)   | `3ecd6faca2d016d457980f2477be18d6b30383927cb2493c21d427b836f80a91` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_subportal.jsp)                   | `0bfaaee6d90510cfc4bf1fbb4b98a501af870892d05a5c0ac587261762fac138` |    111 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_subportal.jsp) | `3ecd6faca2d016d457980f2477be18d6b30383927cb2493c21d427b836f80a91` |      1 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_subportal.jsp)                 | `0bfaaee6d90510cfc4bf1fbb4b98a501af870892d05a5c0ac587261762fac138` |    111 |
| BASE / español    | [sse_generico/espanol/sgco_subportal.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_subportal.jsp)                             | `3ecd6faca2d016d457980f2477be18d6b30383927cb2493c21d427b836f80a91` |      1 |
| BASE / compartido | [sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/sse_generico/sgco_subportal.jsp)                                             | `5f6ae68a73a756ce42c55b405cbc8376a972f01a53b7a7071bf64fb1e7504ddd` |     95 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_subportal.jsp). Líneas físicas, contando desde 1.

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

| L   | Include               |
| --- | --------------------- |
| 1   | ../sgco_subportal.jsp |

| L   | Destino / recurso     |
| --- | --------------------- |
| 1   | ../sgco_subportal.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_subportal.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                             |
| --- | ------- | ----------------------------------------------------- |
| 57  | img     | id=idphotonews; class=m4hide; src=/iconos/noimage.png |
| 59  | img     | id=idclosenews; class=m4hide; src=/iconos/noimage.png |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 16  | sMenuId         | getParameter(request,"sMenuId") |
| 17  | sMenuId         | getParameter(request,"sMenuId") |
| 26  | bESS            | getParameter(request,"bESS")    |
| 27  | bESS            | getParameter(request,"bESS")    |

| L   | Variable  | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 16  | sMenuId   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") |
| 17  | sMenuId   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") |
| 21  | sPattern  | "[a-zA-Z0-9_#\\-]*"                                                 | [a-zA-Z0-9_#\\-]*                                                   |
| 26  | sESS      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    |
| 27  | sESS      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    |
| 36  | sEncoding | M4RequestEncoding.getAppEncoding()                                  | M4RequestEncoding.getAppEncoding()                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 19  | if (sMenuId == null) {sMenuId = "";}                                                                                    |
| 22  | if (!java.util.regex.Pattern.matches(sPattern, sMenuId)) {                                                              |
| 28  | if (sESS.length() &gt; 1) {                                                                                             |
| 48  | if (Browser.ie6) {document.write("&lt;link rel='stylesheet' type='text/css' href='/css/style_subportalIE6.css'/&gt;");} |
| 49  | else {document.write("&lt;link rel='stylesheet' type='text/css' href='/css/style_subportal.css'/&gt;");}                |
| 95  | if(sMenuId.equals("SSCO_CYC")){                                                                                         |
| 99  | if(sMenuId.equals("SSCO_MENU")){                                                                                        |
| 103 | if(sMenuId.equals("SMCO_MENU")){                                                                                        |
| 107 | if(sMenuId.equals("SMCO_CYC")){                                                                                         |
| 37  | expresión de cálculo/transformación: response.setContentType ("text/html; charset=" + sEncoding + "");                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                       |
| --- | ------------------------------------------------------- |
| 41  | /libreria/mootools.js                                   |
| 42  | /libreria/meta4ajax.js                                  |
| 43  | /libreria/functions_subportal.js                        |
| 44  | /libreria/funciones_doc.js                              |
| 46  | /css/m4reset.css                                        |
| 48  | /css/style_subportalIE6.css                             |
| 49  | /css/style_subportal.css                                |
| 57  | /iconos/noimage.png                                     |
| 59  | /iconos/noimage.png                                     |
| 12  | com.meta4.jsp                                           |
| 96  | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp |
| 100 | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp |
| 104 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       |
| 108 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [sse_generico/sgco_subportal.jsp](../../../../clon_portal/portal/sse_generico/sgco_subportal.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                             |
| --- | ------- | ----------------------------------------------------- |
| 57  | img     | id=idphotonews; class=m4hide; src=/iconos/noimage.png |
| 59  | img     | id=idclosenews; class=m4hide; src=/iconos/noimage.png |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 16  | sMenuId         | getParameter(request,"sMenuId") |
| 17  | sMenuId         | getParameter(request,"sMenuId") |
| 26  | bESS            | getParameter(request,"bESS")    |
| 27  | bESS            | getParameter(request,"bESS")    |

| L   | Variable  | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 16  | sMenuId   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") |
| 17  | sMenuId   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sMenuId") |
| 21  | sPattern  | "[a-zA-Z0-9_#\\-]*"                                                 | [a-zA-Z0-9_#\\-]*                                                   |
| 26  | sESS      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    |
| 27  | sESS      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bESS")    |
| 36  | sEncoding | M4RequestEncoding.getAppEncoding()                                  | M4RequestEncoding.getAppEncoding()                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 19  | if (sMenuId == null) {sMenuId = "";}                                                                                    |
| 22  | if (!java.util.regex.Pattern.matches(sPattern, sMenuId)) {                                                              |
| 28  | if (sESS.length() &gt; 1) {                                                                                             |
| 48  | if (Browser.ie6) {document.write("&lt;link rel='stylesheet' type='text/css' href='/css/style_subportalIE6.css'/&gt;");} |
| 49  | else {document.write("&lt;link rel='stylesheet' type='text/css' href='/css/style_subportal.css'/&gt;");}                |
| 37  | expresión de cálculo/transformación: response.setContentType ("text/html; charset=" + sEncoding + "");                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                |
| --- | -------------------------------- |
| 41  | /libreria/mootools.js            |
| 42  | /libreria/meta4ajax.js           |
| 43  | /libreria/functions_subportal.js |
| 44  | /libreria/funciones_doc.js       |
| 46  | /css/m4reset.css                 |
| 48  | /css/style_subportalIE6.css      |
| 49  | /css/style_subportal.css         |
| 57  | /iconos/noimage.png              |
| 59  | /iconos/noimage.png              |
| 12  | com.meta4.jsp                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                              | Resolución | Ficha / candidato                                                                                                                                                        |
| ------ | --- | ------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| COLL   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| COLL   | 41  | /libreria/mootools.js                                   | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                             |
| COLL   | 42  | /libreria/meta4ajax.js                                  | contextual | [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md)                                         |
| COLL   | 43  | /libreria/functions_subportal.js                        | contextual | [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md); [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md) |
| COLL   | 44  | /libreria/funciones_doc.js                              | contextual | [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md); [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md)                         |
| COLL   | 12  | com.meta4.jsp                                           | ausente    | P06                                                                                                                                                                      |
| COLL   | 96  | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| COLL   | 100 | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| COLL   | 104 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| COLL   | 108 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| CYC    | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| CYC    | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| CYC    | 41  | /libreria/mootools.js                                   | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                           |
| CYC    | 42  | /libreria/meta4ajax.js                                  | contextual | [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md)                                                                                                          |
| CYC    | 43  | /libreria/functions_subportal.js                        | contextual | [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md)                                                                                      |
| CYC    | 44  | /libreria/funciones_doc.js                              | contextual | [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md)                                                                                                  |
| CYC    | 12  | com.meta4.jsp                                           | ausente    | P06                                                                                                                                                                      |
| CYC    | 96  | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| CYC    | 100 | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| CYC    | 104 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| CYC    | 108 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| IBER   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| IBER   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| IBER   | 41  | /libreria/mootools.js                                   | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                             |
| IBER   | 42  | /libreria/meta4ajax.js                                  | contextual | [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md)                                         |
| IBER   | 43  | /libreria/functions_subportal.js                        | contextual | [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md); [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md) |
| IBER   | 44  | /libreria/funciones_doc.js                              | contextual | [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md); [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md)                         |
| IBER   | 12  | com.meta4.jsp                                           | ausente    | P06                                                                                                                                                                      |
| IBER   | 96  | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| IBER   | 100 | /servlet/CheckSecurity/JSP/sse_generico/sse_g1_pcyc.jsp | contextual | [sse_generico/sse_g1_pcyc.jsp](sse_generico--sse_g1_pcyc.md)                                                                                                             |
| IBER   | 104 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| IBER   | 108 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_pcyc.jsp       | ausente    | P06                                                                                                                                                                      |
| BASE   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| BASE   | 1   | ../sgco_subportal.jsp                                   | física     | [sse_generico/sgco_subportal.jsp](sse_generico--sgco_subportal.md)                                                                                                       |
| BASE   | 41  | /libreria/mootools.js                                   | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                           |
| BASE   | 42  | /libreria/meta4ajax.js                                  | contextual | [libreria/meta4ajax.js](../dependencias/libreria--meta4ajax.md)                                                                                                          |
| BASE   | 43  | /libreria/functions_subportal.js                        | contextual | [libreria/functions_subportal.js](../dependencias/libreria--functions_subportal.md)                                                                                      |
| BASE   | 44  | /libreria/funciones_doc.js                              | contextual | [libreria/funciones_doc.js](../dependencias/libreria--funciones_doc.md)                                                                                                  |
| BASE   | 12  | com.meta4.jsp                                           | ausente    | P06                                                                                                                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_subportal.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
