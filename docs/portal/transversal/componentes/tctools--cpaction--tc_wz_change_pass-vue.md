# tc_wz_change_pass.vue

Identificador: `tctools/cpaction/tc_wz_change_pass.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                               | Ámbito | Diccionario                                                                                       |
| ------------------------- | --------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| login.ChangePass2         | Cambio de contraseña                                | BASE   | [translations/shco_login_box_es.properties:L34](../../referencias/literales/shco_login_box_es.md) |
| login.DesEx               | La contraseña se generará expirada.                 | BASE   | [translations/shco_login_box_es.properties:L44](../../referencias/literales/shco_login_box_es.md) |
| login.DesRRCP             | Solicitud de cambio de contraseña para el empleado  | BASE   | [translations/shco_login_box_es.properties:L45](../../referencias/literales/shco_login_box_es.md) |
| login.DesRRCP2            | , con usuario                                       | BASE   | [translations/shco_login_box_es.properties:L46](../../referencias/literales/shco_login_box_es.md) |
| login.DesUCP              | Solicitud de cambio de contraseña para el usuario   | BASE   | [translations/shco_login_box_es.properties:L47](../../referencias/literales/shco_login_box_es.md) |
| login.InfoCPass           | Introduce la nueva contraseña y envía la solicitud. | BASE   | [translations/shco_login_box_es.properties:L49](../../referencias/literales/shco_login_box_es.md) |
| login.PassNew             | Contraseña nueva                                    | BASE   | [translations/shco_login_box_es.properties:L57](../../referencias/literales/shco_login_box_es.md) |
| login.PassNewAgain        | Confirmar contraseña nueva                          | BASE   | [translations/shco_login_box_es.properties:L58](../../referencias/literales/shco_login_box_es.md) |
| login.SendSoc             | Enviar                                              | BASE   | [translations/shco_login_box_es.properties:L63](../../referencias/literales/shco_login_box_es.md) |
| login.ToolTipPassNew      | Introduce contraseña nueva                          | BASE   | [translations/shco_login_box_es.properties:L68](../../referencias/literales/shco_login_box_es.md) |
| login.ToolTipPassNewAgain | Introduce confirmación de contraseña nueva          | BASE   | [translations/shco_login_box_es.properties:L69](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cpaction/tc_wz_change_pass.vue.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_wz_change_pass.vue.jsp) | `2769fe38d02c2eb3c301eb9ccf99e573594de248830deb6ee68e83e0d6b34962` |    499 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cpaction/tc_wz_change_pass.vue.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_wz_change_pass.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 278 | form    | id=ChangePs; name=ChangePs; action=/tctools/cpaction/tc_wz_change_pass_action.jsp; method=POST                                                                                              |
| 288 | input   | id=M4_NEW_PASSWORD; tabindex=1; title=; type=password; maxlength=32; name=M4_NEW_PASSWORD; size=14; placeholder=JSP_EXPR_Tran_shco_login_box.getProperty(; data-cy=M4_NEW_PASSWORD          |
| 289 | input   | id=M4_RETYPE_PASSWORD; tabindex=2; title=; size=14; type=password; maxlength=32; name=M4_RETYPE_PASSWORD; placeholder=JSP_EXPR_Tran_shco_login_box.getProperty(; data-cy=M4_RETYPE_PASSWORD |
| 290 | input   | id=send-button; cds-ref=send-button; type=button; class=buttonForm; value=; onclick=javascript:CheckAndSubmit();; data-cy=send-button                                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 48  | TK              | getParameter(request, "TK") |

| L   | Variable               | Expresión fuente                                         | Resolución estática parcial                                               |
| --- | ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- |
| 26  | zlang                  | "-1"                                                     | -1                                                                        |
| 27  | sChangePassUs          | "-1"                                                     | -1                                                                        |
| 28  | sIU                    | "*"                                                      | *                                                                         |
| 29  | sUrlLoginComplete      | "/"                                                      | /                                                                         |
| 30  | sIUN                   | ""                                                       |                                                                           |
| 31  | sDesc                  | ""                                                       |                                                                           |
| 32  | zappprod               | ""                                                       |                                                                           |
| 34  | sTimeEnd               | "0"                                                      | 0                                                                         |
| 39  | bUserPwdAlreadyChanged | false                                                    | false                                                                     |
| 40  | sOrigin                | ""                                                       |                                                                           |
| 42  | sCampoValue            | ""                                                       |                                                                           |
| 46  | sLangCode              | "en"                                                     | en                                                                        |
| 73  | iLangParamPos          | sUrlLoginComplete.indexOf("?lang")                       | sUrlLoginComplete.indexOf("?lang")                                        |
| 88  | iCheckResult           | checkPwdNotAlreadyChanged(sIU,sTokenDate,zlang,sOrigin)  | checkPwdNotAlreadyChanged(sIU,sTokenDate,zlang,sOrigin)                   |
| 118 | authResult             | 0                                                        | 0                                                                         |
| 122 | protocol               | request.getScheme()                                      | request.getScheme()                                                       |
| 123 | serverName             | request.getServerName()                                  | request.getServerName()                                                   |
| 124 | sServerURL             | protocol + "://" + serverName                            | request.getScheme(){"://"}request.getServerName()                         |
| 127 | path                   | request.getRequestURI()                                  | request.getRequestURI()                                                   |
| 128 | query                  | request.getQueryString()                                 | request.getQueryString()                                                  |
| 129 | pageURL                | query != null ? path + "?" + query : path                | {query != null ? path}{"?"}{query : path}                                 |
| 134 | sFinalPage             | resolvedExternalURL.toString() + pageURL                 | {resolvedExternalURL.toString()}{query != null ? path}{"?"}{query : path} |
| 384 | result                 | -1                                                       | -1                                                                        |
| 397 | object                 | "SRTC_FORGET_PWD_BY_EMAIL"                               | SRTC_FORGET_PWD_BY_EMAIL                                                  |
| 398 | node                   | "SRTC_FORGET_PWD_EXTERNAL"                               | SRTC_FORGET_PWD_EXTERNAL                                                  |
| 399 | method                 | "_RESOLVE_EXTERNAL_SYSTEM"                               | _RESOLVE_EXTERNAL_SYSTEM                                                  |
| 417 | endpoint               | operations.getItem(node, object, node, "-1", "ENDPOINT") | operations.getItem(node, object, node, "-1", "ENDPOINT")                  |
| 441 | iRet                   | -1                                                       | -1                                                                        |
| 457 | sM4Obj                 | "SRTC_FORGET_PWD"                                        | SRTC_FORGET_PWD                                                           |
| 458 | sNode                  | "SRTC_FORGET_PWD"                                        | SRTC_FORGET_PWD                                                           |
| 459 | sMethod                | "CHECK_PWD_NOT_ALREADY_CHANGED"                          | CHECK_PWD_NOT_ALREADY_CHANGED                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                 |
| --- | --------- | ------------------------------------ |
| 417 | getItem   | node, object, node, "-1", "ENDPOINT" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 304 | CheckAndSubmit |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49  | if (sCampoValue == null) sCampoValue = "null";                                                                                                                                                                                                                                                                                                                    |
| 57  | if (sIU == null) {sIU = "*";}                                                                                                                                                                                                                                                                                                                                     |
| 60  | if (sChangePassUs == null) {sChangePassUs = "-1";}                                                                                                                                                                                                                                                                                                                |
| 64  | if ((zlang==null)&#124;&#124;(zlang.equals(""))){zlang = "2";}                                                                                                                                                                                                                                                                                                    |
| 70  | if (!sUrlLoginComplete.equals("/"))                                                                                                                                                                                                                                                                                                                               |
| 74  | if (iLangParamPos &gt; 0) sUrlLoginComplete = sUrlLoginComplete.substring(0, iLangParamPos + 5) + "=" + sLangCode;                                                                                                                                                                                                                                                |
| 82  | if (sOrigin==null) { sOrigin = ""; }                                                                                                                                                                                                                                                                                                                              |
| 86  | if (sTokenDate != null )                                                                                                                                                                                                                                                                                                                                          |
| 89  | if (iCheckResult == -1)                                                                                                                                                                                                                                                                                                                                           |
| 97  | if (sTimeEnd != null)                                                                                                                                                                                                                                                                                                                                             |
| 100 | if (lMinutesEnd &lt; lMinutesNow)                                                                                                                                                                                                                                                                                                                                 |
| 132 | if (authResult &gt;= 0 &amp;&amp; resolvedExternalURL.toString() != null &amp;&amp; !resolvedExternalURL.toString().isEmpty()) {                                                                                                                                                                                                                                  |
| 154 | &lt;% if (zlanguser.equals("-1")) zlanguser = sLangCode; %&gt;                                                                                                                                                                                                                                                                                                    |
| 190 | &lt;% if (bTokenExpired)                                                                                                                                                                                                                                                                                                                                          |
| 222 | else if (bUserPwdAlreadyChanged)                                                                                                                                                                                                                                                                                                                                  |
| 252 | else                                                                                                                                                                                                                                                                                                                                                              |
| 254 | if ( ((sChangePassUs.equals("1")) &#124;&#124; (sChangePassUs.equals("2"))) &amp;&amp; (!zlang.equals("-1")) &amp;&amp; (!sIU.equals("*")))                                                                                                                                                                                                                       |
| 256 | if (sChangePassUs.equals("1"))                                                                                                                                                                                                                                                                                                                                    |
| 260 | else                                                                                                                                                                                                                                                                                                                                                              |
| 340 | } else {                                                                                                                                                                                                                                                                                                                                                          |
| 369 | } // else token expired                                                                                                                                                                                                                                                                                                                                           |
| 416 | if (result == 1) {                                                                                                                                                                                                                                                                                                                                                |
| 419 | if (endpoint != null &amp;&amp; !endpoint.isEmpty() &amp;&amp; !"null".equals(endpoint)) {                                                                                                                                                                                                                                                                        |
| 421 | } else {                                                                                                                                                                                                                                                                                                                                                          |
| 486 | if (oSessionManager != null)                                                                                                                                                                                                                                                                                                                                      |
| 72  | expresión de cálculo/transformación: sLangCode = com.meta4.configuration.CheckConfig.checkLocale(Integer.parseInt(zlang));                                                                                                                                                                                                                                        |
| 74  | expresión de cálculo/transformación: if (iLangParamPos &gt; 0) sUrlLoginComplete = sUrlLoginComplete.substring(0, iLangParamPos + 5) + "=" + sLangCode;                                                                                                                                                                                                           |
| 99  | expresión de cálculo/transformación: lMinutesEnd = new java.lang.Long(sTimeEnd).longValue() * (1000*60);                                                                                                                                                                                                                                                          |
| 124 | expresión de cálculo/transformación: String sServerURL = protocol + "://" + serverName;                                                                                                                                                                                                                                                                           |
| 129 | expresión de cálculo/transformación: String pageURL = query != null ? path + "?" + query : path;                                                                                                                                                                                                                                                                  |
| 134 | expresión de cálculo/transformación: String sFinalPage = resolvedExternalURL.toString() + pageURL;                                                                                                                                                                                                                                                                |
| 258 | expresión de cálculo/transformación: sDesc = Tran_shco_login_box.getProperty("login.DesUCP") + " " + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIU) + ".";                                                                                                                                                                                          |
| 262 | expresión de cálculo/transformación: sDesc = Tran_shco_login_box.getProperty("login.DesRRCP") + " '" + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIUN) + "'" + Tran_shco_login_box.getProperty("login.DesRRCP2") + " " + com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sIU) + "." + " " + Tran_shco_login_box.getProperty("login.DesEx"); |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 22  | /tctools/tc_frame_options.jsp     |
| 153 | /shco_g0/shco_gen_lang.jsp        |
| 155 | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 162 | /translations/tc_login_&lt;%=zlanguser%&gt;.js             |
| 170 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 171 | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 174 | /style/cds.css                                             |
| 177 | /images/cegid/favicon.ico                                  |
| 180 | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 181 | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 199 | /library/framework/common.vue.js                           |
| 200 | /tctools/_user_message_page.vue.js                         |
| 230 | /library/framework/common.vue.js                           |
| 231 | /tctools/_user_message_page.vue.js                         |
| 272 | /library/framework/common.vue.js                           |
| 273 | /tctools/cpaction/tc_wz_change_pass.vue.js                 |
| 278 | /tctools/cpaction/tc_wz_change_pass_action.jsp             |
| 347 | /library/framework/common.vue.js                           |
| 348 | /tctools/_user_message_page.vue.js                         |
| 22  | /tctools/tc_frame_options.jsp                              |
| 51  | com.meta4.jsp                                              |
| 153 | /shco_g0/shco_gen_lang.jsp                                 |
| 155 | /shco_g0/shco_login_box_trans.jsp                          |
| 285 | /tctools/cpaction/tc_wz_change_pass.jsp                    |
| 386 | com.meta4.jsp                                              |
| 442 | com.meta4.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 22  | /tctools/tc_frame_options.jsp                  | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 153 | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 155 | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 162 | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                             |
| BASE   | 180 | /library/npm/vue@3/dist/vue.global.prod.js     | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                             |
| BASE   | 181 | /library/npm/vuetify@3/dist/vuetify.min.js     | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                             |
| BASE   | 199 | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 200 | /tctools/_user_message_page.vue.js             | contextual | &#96;tctools/_user_message_page.vue.js&#96;                                                     |
| BASE   | 230 | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 231 | /tctools/_user_message_page.vue.js             | contextual | &#96;tctools/_user_message_page.vue.js&#96;                                                     |
| BASE   | 272 | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 273 | /tctools/cpaction/tc_wz_change_pass.vue.js     | contextual | &#96;tctools/cpaction/tc_wz_change_pass.vue.js&#96;                                             |
| BASE   | 278 | /tctools/cpaction/tc_wz_change_pass_action.jsp | contextual | [tctools/cpaction/tc_wz_change_pass_action.jsp](tctools--cpaction--tc_wz_change_pass_action.md) |
| BASE   | 347 | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 348 | /tctools/_user_message_page.vue.js             | contextual | &#96;tctools/_user_message_page.vue.js&#96;                                                     |
| BASE   | 22  | /tctools/tc_frame_options.jsp                  | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 51  | com.meta4.jsp                                  | ausente    | P06                                                                                             |
| BASE   | 153 | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 155 | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 285 | /tctools/cpaction/tc_wz_change_pass.jsp        | contextual | [tctools/cpaction/tc_wz_change_pass.jsp](tctools--cpaction--tc_wz_change_pass.md)               |
| BASE   | 386 | com.meta4.jsp                                  | ausente    | P06                                                                                             |
| BASE   | 442 | com.meta4.jsp                                  | ausente    | P06                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cpaction/tc_wz_change_pass.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
