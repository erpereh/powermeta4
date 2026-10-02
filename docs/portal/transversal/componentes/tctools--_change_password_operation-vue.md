# _change_password_operation.vue

Identificador: `tctools/_change_password_operation.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                                            | Texto                                                                                                                                        | Ámbito | Diccionario                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| ChangePwd.CloseButton                            | Cerrar                                                                                                                                       | BASE   | [translations/tc_login_es.properties:L13](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePassword                   | Error ejecutando cambio de contraseña. Comprueba que la contraseña actual sea correcta. Si el error persiste, contacta con tu administrador. | BASE   | [translations/tc_login_es.properties:L16](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordContainsNameTokens | La nueva contraseña incluye parte del nombre del usuario. Debe introducir una contraseña que no contenga partes del nombre del usuario.      | BASE   | [translations/tc_login_es.properties:L17](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordNoPermission       | No tienes permisos para cambiar la contraseña. Contacta con tu administrador.                                                                | BASE   | [translations/tc_login_es.properties:L18](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordNotStrongEnough    | La nueva contraseña no es suficientemente segura según los criterios definidos. Debes introducir una nueva que cumpla con dichos criterios.  | BASE   | [translations/tc_login_es.properties:L19](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordRecentlyUsed       | La nueva contraseña ya ha sido utilizada recientemente. Debes introducir una nueva que no coincida con ninguna recientemente utilizada.      | BASE   | [translations/tc_login_es.properties:L20](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ExceptionGettingUserSession      | Error recuperando la sessión de usuario. Debes conectarte antes de actualizar tu contraseña.                                                 | BASE   | [translations/tc_login_es.properties:L21](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordEqualUserId              | La nueva contraseña coincide con tu usuario o lo contiene. Debes introducir una nueva que no coincida con el usuario ni lo contenga.         | BASE   | [translations/tc_login_es.properties:L24](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordExpired                  | Su contraseña ha expirado. Debe actualizarla antes de cualquier otra operación.                                                              | BASE   | [translations/tc_login_es.properties:L25](../../referencias/literales/tc_login_es.md) |
| ChangePwd.PasswordChanged                        | El cambio de contraseña se ha realizado con éxito.                                                                                           | BASE   | [translations/tc_login_es.properties:L32](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Title                                  | Cambio de contraseña                                                                                                                         | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/_change_password_operation.vue.jsp](../../../../clon_portal/portal/tctools/_change_password_operation.vue.jsp) | `9e5f8898613af43f0e190621ed2afdfb6dcf72f179ed9a1666b456b328290fe5` |    308 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/_change_password_operation.vue.jsp](../../../../clon_portal/portal/tctools/_change_password_operation.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave     | Acceso literal                       |
| --- | ------------------- | ------------------------------------ |
| 37  | M4_OPCODE           | getParameter("M4_OPCODE")            |
| 38  | M4_OPCODE           | getParameter(request, "M4_OPCODE")   |
| 46  | M4_URL_PAGE         | getParameter(request, "M4_URL_PAGE") |
| 58  | M4_CURRENT_PASSWORD | getParameter("M4_CURRENT_PASSWORD")  |
| 59  | M4_NEW_PASSWORD     | getParameter("M4_NEW_PASSWORD")      |

| L   | Variable              | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 16  | zUrlPage              | "/tctools/change_password.jsp"                                           | /tctools/change_password.jsp                                             |
| 22  | sErrorMessage         | ""                                                                       |                                                                          |
| 23  | sExtendedErrorMessage | ""                                                                       |                                                                          |
| 31  | unframe               | false                                                                    | false                                                                    |
| 34  | sNewRequestParameters | ""                                                                       |                                                                          |
| 37  | ai_sOpCode            | request.getParameter("M4_OPCODE")                                        | request.getParameter("M4_OPCODE")                                        |
| 38  | ai_sOpCode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")   |
| 46  | ai_sM4UrlPage         | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_URL_PAGE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_URL_PAGE") |
| 48  | ai_sM4UrlPage         | getRequestValueBlack(request, "M4_URL_PAGE", "")                         | getRequestValueBlack(request, "M4_URL_PAGE", "")                         |
| 62  | iLanguageId           | iLang                                                                    | iLang                                                                    |
| 63  | zCPLangUser           | CheckConfig.checkLocale(iLanguageId)                                     | CheckConfig.checkLocale(iLanguageId)                                     |
| 70  | iReturn               | oM4op.changePassword(ai_sOldPassword, ai_sNewPassword)                   | oM4op.changePassword(ai_sOldPassword, ai_sNewPassword)                   |
| 98  | sLoginPage            | CheckConfig.setBadLoginLink(iLanguageId, CheckConfig.THCL)               | CheckConfig.setBadLoginLink(iLanguageId, CheckConfig.THCL)               |
| 100 | sPortalPage           | CheckConfig.checkDefPage("")                                             | CheckConfig.checkDefPage("")                                             |
| 105 | sNewUrl               | null                                                                     | null                                                                     |
| 236 | value                 | M4SafeRequest.getParameter(request, paramName)                           | M4SafeRequest.getParameter(request, paramName)                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag       | Contrato declarado |
| --- | --------- | ------------------ |
| 229 | m4:logout |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40  | if ((ai_sOpCode == null) &#124;&#124; ai_sOpCode.equals("")){                                                                                                          |
| 41  | throw new JspException("Cannot find \"M4_OPCODE\" attribute in request.");                                                                                             |
| 50  | if ((ai_sM4UrlPage == null) &#124;&#124; ai_sM4UrlPage.equals("")) {                                                                                                   |
| 53  | else {                                                                                                                                                                 |
| 71  | if (iReturn == 1) {                                                                                                                                                    |
| 73  | } else if (iReturn == 2) {                                                                                                                                             |
| 75  | } else if (iReturn == 3) {                                                                                                                                             |
| 77  | } else if (iReturn == 4) {                                                                                                                                             |
| 79  | } else if (iReturn == 5) {                                                                                                                                             |
| 81  | } else if (iReturn != 0)                                                                                                                                               |
| 85  | }else{                                                                                                                                                                 |
| 107 | if (!sErrorMessage.equals("CHANGE_PASSWORD_OK"))                                                                                                                       |
| 111 | if (ai_sM4UrlPage.equals("")) {                                                                                                                                        |
| 113 | } else {                                                                                                                                                               |
| 121 | if (ai_sOpCode.equals("PASSWORD_EXPIRED")){                                                                                                                            |
| 123 | } else if (ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")){                                                                                                             |
| 128 | else if (ai_sOpCode.equals("USER_REQUEST")) {                                                                                                                          |
| 132 | else if (ai_sOpCode.equals("PASSWORD_EXPIRED")) {                                                                                                                      |
| 138 | else if (ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")){                                                                                                               |
| 144 | else{                                                                                                                                                                  |
| 145 | throw new JspException("Invalid value for \"OPCODE\" attribute.");                                                                                                     |
| 158 | if ((ai_sOpCode == null) &#124;&#124; ai_sOpCode.equals(""))                                                                                                           |
| 165 | if ((sErrorMessage == null &#124;&#124; sErrorMessage.equals("")) &amp;&amp; (ai_sOpCode.equals("PASSWORD_EXPIRED")))                                                  |
| 171 | if (sErrorMessage != null)                                                                                                                                             |
| 173 | if (sErrorMessage.equals("ERROR_EXCEPTION_GETTING_USER_SESSION"))                                                                                                      |
| 177 | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD"))                                                                                                                |
| 182 | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_NOT_STRONG_ENOUGH"))                                                                                              |
| 189 | if (sExtendedErrorMessage != null &amp;&amp; !sExtendedErrorMessage.equals(""))                                                                                        |
| 193 | else                                                                                                                                                                   |
| 199 | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_RECENTLY_USED"))                                                                                                  |
| 203 | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_NO_PERMISSION"))                                                                                                  |
| 207 | }else if (sErrorMessage.equals("CHANGE_PASSWORD_OK"))                                                                                                                  |
| 212 | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_EQUAL_TO_USER"))                                                                                                  |
| 216 | }else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_CONTAINS_NAME_TOKENS"))                                                                                          |
| 228 | &lt;%if ((ai_sOpCode.equals("PASSWORD_EXPIRED")&#124;&#124;ai_sOpCode.equals("PASSWORD_ABOUT_TO_EXPIRE")) &amp;&amp; sErrorMessage.equals("CHANGE_PASSWORD_OK")){%&gt; |
| 237 | if (defaultValue == null) defaultValue = "";                                                                                                                           |
| 238 | if (value == null &#124;&#124; value.equals("") &#124;&#124; value.equals("null")                                                                                      |
| 242 | else                                                                                                                                                                   |
| 54  | expresión de cálculo/transformación: ai_sM4UrlPage = "/servlet/CheckSecurity/JSP/" + ai_sM4UrlPage;                                                                    |
| 122 | expresión de cálculo/transformación: sNewUrl = sChangePasswordForm + "?" + "M4_OPCODE=PASSWORD_EXPIRED";                                                               |
| 124 | expresión de cálculo/transformación: sNewUrl = sNewUrl + "?" + "M4_OPCODE=PASSWORD_ABOUT_TO_EXPIRE&amp;M4_EXPIRES_IN=-1";                                              |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 9   | /shco_g0/shco_gen_taglib.jsp |
| 11  | /tctools/tc_login_bag.jsp    |
| 12  | /tctools/tc_login_trans.jsp  |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 257 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 258 | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 261 | /style/cds.css                                             |
| 264 | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 265 | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 283 | /library/framework/common.vue.js                           |
| 284 | /tctools/_change_password_operation.vue.js                 |
| 9   | /shco_g0/shco_gen_taglib.jsp                               |
| 11  | /tctools/tc_login_bag.jsp                                  |
| 12  | /tctools/tc_login_trans.jsp                                |
| 16  | /tctools/change_password.jsp                               |
| 28  | com.meta4.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                 | Resolución | Ficha / candidato                                                          |
| ------ | --- | ------------------------------------------ | ---------- | -------------------------------------------------------------------------- |
| BASE   | 9   | /shco_g0/shco_gen_taglib.jsp               | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 11  | /tctools/tc_login_bag.jsp                  | contextual | [tctools/tc_login_bag.jsp](tctools--tc_login_bag.md)                       |
| BASE   | 12  | /tctools/tc_login_trans.jsp                | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                   |
| BASE   | 264 | /library/npm/vue@3/dist/vue.global.prod.js | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                        |
| BASE   | 265 | /library/npm/vuetify@3/dist/vuetify.min.js | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                        |
| BASE   | 283 | /library/framework/common.vue.js           | contextual | &#96;library/framework/common.vue.js&#96;                                  |
| BASE   | 284 | /tctools/_change_password_operation.vue.js | contextual | &#96;tctools/_change_password_operation.vue.js&#96;                        |
| BASE   | 9   | /shco_g0/shco_gen_taglib.jsp               | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 11  | /tctools/tc_login_bag.jsp                  | contextual | [tctools/tc_login_bag.jsp](tctools--tc_login_bag.md)                       |
| BASE   | 12  | /tctools/tc_login_trans.jsp                | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                   |
| BASE   | 16  | /tctools/change_password.jsp               | ausente    | P06                                                                        |
| BASE   | 28  | com.meta4.jsp                              | ausente    | P06                                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/_change_password_operation.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
