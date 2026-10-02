# tc_login_service_cp_request

Identificador: `tctools/cprequest/tc_login_service_cp_request.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_service_cp_request.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_service_cp_request.jsp) | `d60e1cb2cdf80fd735a166344fc2f5ee89a09e76391326d1aae94bc9a8ff8be6` |    174 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_service_cp_request.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_service_cp_request.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave           | Acceso literal                                    |
| --- | ------------------------- | ------------------------------------------------- |
| 31  | EMAIL                     | getParameter(request, "EMAIL")                    |
| 32  | LANG_TO_CHANGE_PASS       | getParameter(request,"LANG_TO_CHANGE_PASS")       |
| 33  | LANG_TO_CHANGE_PASS_STYLE | getParameter(request,"LANG_TO_CHANGE_PASS_STYLE") |
| 34  | SOURCE_URL                | getParameter(request,"SOURCE_URL")                |
| 35  | TARGET_URL                | getParameter(request,"TARGET_URL")                |
| 36  | VERIFIED_DOMAIN           | getParameter(request,"VERIFIED_DOMAIN")           |

| L   | Variable          | Expresión fuente                                                | Resolución estática parcial                                                              |
| --- | ----------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 31  | sEmail            | M4SafeRequest.getParameter(request, "EMAIL")                    | M4SafeRequest.getParameter(request, "EMAIL")                                             |
| 32  | zlang             | M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS")       | M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS")                                |
| 33  | zappprod          | M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS_STYLE") | M4SafeRequest.getParameter(request,"LANG_TO_CHANGE_PASS_STYLE")                          |
| 34  | sServerURL        | M4SafeRequest.getParameter(request,"SOURCE_URL")                | M4SafeRequest.getParameter(request,"SOURCE_URL")                                         |
| 35  | sUrlLoginComplete | M4SafeRequest.getParameter(request,"TARGET_URL")                | M4SafeRequest.getParameter(request,"TARGET_URL")                                         |
| 36  | sVerifiedDomain   | M4SafeRequest.getParameter(request,"VERIFIED_DOMAIN")           | M4SafeRequest.getParameter(request,"VERIFIED_DOMAIN")                                    |
| 40  | iRetSend          | -1                                                              | -1                                                                                       |
| 41  | operationCode     | "ERROR"                                                         | ERROR                                                                                    |
| 60  | sHostName         | request.getServerName()                                         | request.getServerName()                                                                  |
| 61  | sPortName         | new Integer( request.getServerPort() ).toString()               | new Integer( request.getServerPort() ).toString()                                        |
| 62  | isHttpSecure      | request.isSecure()                                              | request.isSecure()                                                                       |
| 64  | sProtocol         | "http"                                                          | http                                                                                     |
| 66  | sHostServerURL    | sProtocol + "://" + sHostName + ":" + sPortName                 | http{"://"}request.getServerName(){":"}new Integer( request.getServerPort() ).toString() |
| 131 | iRet              | -1                                                              | -1                                                                                       |
| 137 | sM4Obj            | "SRTC_FORGET_PWD_BY_EMAIL"                                      | SRTC_FORGET_PWD_BY_EMAIL                                                                 |
| 138 | sNode             | "SRTC_FORGET_PWD_BY_EMAIL"                                      | SRTC_FORGET_PWD_BY_EMAIL                                                                 |
| 139 | sMethod           | "SEND_FORGET_PWD_EMAIL"                                         | SEND_FORGET_PWD_EMAIL                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                           |
| --- | -------------------------------------------------------------------------------------------------------------- |
| 49  | if (sEmail == null) {                                                                                          |
| 55  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                                  |
| 57  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "ess";                                       |
| 65  | if ( isHttpSecure ) sProtocol = "https" ;                                                                      |
| 68  | if ((sServerURL==null)&#124;&#124;(sServerURL.equals(""))){ sServerURL = sHostServerURL; }                     |
| 71  | if (!oURL.getHost().equalsIgnoreCase(sHostName))                                                               |
| 82  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/";              |
| 85  | if (oSessionManager != null)                                                                                   |
| 101 | if (iRetSend != -1) operationCode = "DONE";                                                                    |
| 105 | else                                                                                                           |
| 117 | if (oSessionManager != null)                                                                                   |
| 133 | if (ai_stEmail == null) return iRet;                                                                           |
| 66  | expresión de cálculo/transformación: String sHostServerURL = sProtocol + "://" + sHostName + ":" + sPortName ; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 27  | com.meta4.jsp     |
| 38  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia    | Resolución | Ficha / candidato |
| ------ | --- | ------------- | ---------- | ----------------- |
| BASE   | 27  | com.meta4.jsp | ausente    | P06               |
| BASE   | 38  | com.meta4.jsp | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_service_cp_request.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
