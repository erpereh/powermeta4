# _change_password_include.vue

Identificador: `tctools/_change_password_include.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                                   | Texto                                                                           | Ámbito | Diccionario                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| ChangePwd.Back                          | Volver                                                                          | BASE   | [translations/tc_login_es.properties:L11](../../referencias/literales/tc_login_es.md) |
| ChangePwd.CurrentPassword               | Contraseña actual                                                               | BASE   | [translations/tc_login_es.properties:L15](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordAboutToExpired  | Tu contraseña expira en #N# día.                                                | BASE   | [translations/tc_login_es.properties:L22](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordAboutToExpired2 | Tu contraseña expira en #N# días.                                               | BASE   | [translations/tc_login_es.properties:L23](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordExpired         | Su contraseña ha expirado. Debe actualizarla antes de cualquier otra operación. | BASE   | [translations/tc_login_es.properties:L25](../../referencias/literales/tc_login_es.md) |
| ChangePwd.NewPasswd                     | Nueva contraseña                                                                | BASE   | [translations/tc_login_es.properties:L26](../../referencias/literales/tc_login_es.md) |
| ChangePwd.PageDesc                      | Introduce tu contraseña actual, la nueva contraseña y confírmala de nuevo       | BASE   | [translations/tc_login_es.properties:L28](../../referencias/literales/tc_login_es.md) |
| ChangePwd.PageTitle2                    | Cambia tu contraseña                                                            | BASE   | [translations/tc_login_es.properties:L30](../../referencias/literales/tc_login_es.md) |
| ChangePwd.ReNewPasswd                   | Confirmación de nueva contraseña                                                | BASE   | [translations/tc_login_es.properties:L34](../../referencias/literales/tc_login_es.md) |
| ChangePwd.SendButton                    | Enviar                                                                          | BASE   | [translations/tc_login_es.properties:L36](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Title                         | Cambio de contraseña                                                            | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/_change_password_include.vue.jsp](../../../../clon_portal/portal/tctools/_change_password_include.vue.jsp) | `286cc05c1ccd0d2828650d7bc82c289b0690876ea392b208e76d18c991156fc5` |    262 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/_change_password_include.vue.jsp](../../../../clon_portal/portal/tctools/_change_password_include.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 | form    | method=post; id=ChangePasswordFormAutocomplete; name=ChangePasswordForm; action=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt;; autocomplete=off |
| 202 | input   | type=password; id=M4_CURRENT_PASSWORD; name=M4_CURRENT_PASSWORD; size=32; maxlength=32                                                                                                   |
| 203 | input   | type=password; id=M4_NEW_PASSWORD; name=M4_NEW_PASSWORD; size=32; maxlength=32                                                                                                           |
| 204 | input   | type=password; id=M4_RETYPE_PASSWORD; name=M4_RETYPE_PASSWORD; size=32; maxlength=32                                                                                                     |
| 206 | input   | cds-ref=back-button; type=button; onclick=javascript:Exit();                                                                                                                             |
| 208 | input   | cds-ref=send-button; type=button; onclick=javascript:CheckAndSubmit();                                                                                                                   |
| 210 | input   | type=hidden; id=M4_URL_PAGE; name=M4_URL_PAGE; value=&lt;%=zUrlPage%&gt;; autocomplete=off                                                                                               |
| 211 | input   | type=hidden; id=M4_OPCODE; name=M4_OPCODE; value=&lt;%=ai_sOpCode%&gt;; autocomplete=off                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                            |
| --- | ---------------- | ----------------------------------------- |
| 22  | M4_ERROR_MESSAGE | getParameter(request, "M4_ERROR_MESSAGE") |
| 25  | M4_OPCODE        | getParameter(request, "M4_OPCODE")        |
| 76  | M4_EXPIRES_IN    | getParameter("M4_EXPIRES_IN")             |
| 77  | M4_EXPIRES_IN    | getParameter(request, "M4_EXPIRES_IN")    |

| L   | Variable              | Expresión fuente                                                              | Resolución estática parcial                                                         |
| --- | --------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 16  | zUrlPage              | "/tctools/change_password.jsp"                                                | /tctools/change_password.jsp                                                        |
| 22  | sErrorMessage         | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE")       |
| 25  | ai_sOpCode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")              |
| 39  | zCPLangUser           | ""                                                                            |                                                                                     |
| 40  | zCPLangFolder         | ""                                                                            |                                                                                     |
| 45  | iLanguage             | m4session.getLanguageID()                                                     | m4session.getLanguageID()                                                           |
| 55  | sNewRequestParameters | "?M4_OPCODE=" + ai_sOpCode                                                    | ?M4_OPCODE={}com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE") |
| 76  | ztc_ExpireDays        | request.getParameter("M4_EXPIRES_IN")                                         | request.getParameter("M4_EXPIRES_IN")                                               |
| 77  | ztc_ExpireDays        | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_EXPIRES_IN")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_EXPIRES_IN")          |
| 94  | sErrorMessage2        | sErrorMessage.replaceFirst("#N#",ztc_ExpireDays)                              | sErrorMessage.replaceFirst("#N#",ztc_ExpireDays)                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 144 | Exit           |            |
| 154 | CheckAndSubmit |            |

| L   | Condición / acción / mensaje literal                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 32  | if ((ai_sOpCode == null) &#124;&#124; ai_sOpCode.equals("")){                                                                                                |
| 68  | if ((sErrorMessage == null &#124;&#124; sErrorMessage.equals(""))                                                                                            |
| 73  | } else if((sErrorMessage == null &#124;&#124; sErrorMessage.equals("")) &amp;&amp;                                                                           |
| 79  | if (ztc_ExpireDays == null) {                                                                                                                                |
| 83  | if (ztc_ExpireDays.equals("-1")) {                                                                                                                           |
| 85  | } else {                                                                                                                                                     |
| 87  | if (ztc_ExpireDays.equals("1")) {                                                                                                                            |
| 90  | else {                                                                                                                                                       |
| 146 | &lt;%if (ai_sOpCode != null &amp;&amp; ai_sOpCode.equals("PASSWORD_EXPIRED")) {%&gt;                                                                         |
| 148 | &lt;% } else { %&gt;                                                                                                                                         |
| 158 | if (document.ChangePasswordForm.M4_CURRENT_PASSWORD.value == "") {                                                                                           |
| 163 | if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == "") {                                                                                               |
| 168 | if (document.ChangePasswordForm.M4_RETYPE_PASSWORD.value == "") {                                                                                            |
| 173 | if (document.ChangePasswordForm.M4_NEW_PASSWORD.value != document.ChangePasswordForm.M4_RETYPE_PASSWORD.value) {                                             |
| 178 | if (document.ChangePasswordForm.M4_NEW_PASSWORD.value == document.ChangePasswordForm.M4_CURRENT_PASSWORD.value) {                                            |
| 183 | if (bIsError == true) {                                                                                                                                      |
| 184 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){                                                                             |
| 187 | }else{                                                                                                                                                       |
| 188 | alert(sErrorMessage);                                                                                                                                        |
| 191 | } else {                                                                                                                                                     |
| 205 | &lt;%if (ai_sOpCode != null &amp;&amp; ai_sOpCode.equals("PASSWORD_EXPIRED")) {%&gt;                                                                         |
| 248 | if (document.querySelector('[cds-ref="back-button"]')) {                                                                                                     |
| 55  | expresión de cálculo/transformación: String sNewRequestParameters = "?M4_OPCODE=" + ai_sOpCode;                                                              |
| 56  | expresión de cálculo/transformación: String sChangePasswordUrl = "/servlet/CheckSecurity/JSP/tctools/change_password_operation.jsp" + sNewRequestParameters; |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 11  | /shco_g0/shco_gen_taglib.jsp |
| 13  | /tctools/tc_login_bag.jsp    |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 109 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css                             |
| 110 | /library/npm/vuetify@3/dist/vuetify.min.css                                            |
| 113 | /style/cds.css                                                                         |
| 116 | /library/npm/vue@3/dist/vue.global.prod.js                                             |
| 117 | /library/npm/vuetify@3/dist/vuetify.min.js                                             |
| 120 | /images/cegid/favicon.ico                                                              |
| 136 | /library/framework/common.vue.js                                                       |
| 137 | /tctools/_change_password_include.vue.js                                               |
| 138 | /translations/tc_login_&lt;%=zCPLangUser%&gt;.js                                       |
| 200 | &lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt; |
| 11  | /shco_g0/shco_gen_taglib.jsp                                                           |
| 13  | /tctools/tc_login_bag.jsp                                                              |
| 16  | /tctools/change_password.jsp                                                           |
| 56  | /servlet/CheckSecurity/JSP/tctools/change_password_operation.jsp                       |
| 147 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp                                 |
| 256 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                             | Resolución | Ficha / candidato                                                          |
| ------ | --- | -------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| BASE   | 11  | /shco_g0/shco_gen_taglib.jsp                                                           | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 13  | /tctools/tc_login_bag.jsp                                                              | contextual | [tctools/tc_login_bag.jsp](tctools--tc_login_bag.md)                       |
| BASE   | 116 | /library/npm/vue@3/dist/vue.global.prod.js                                             | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                        |
| BASE   | 117 | /library/npm/vuetify@3/dist/vuetify.min.js                                             | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                        |
| BASE   | 136 | /library/framework/common.vue.js                                                       | contextual | &#96;library/framework/common.vue.js&#96;                                  |
| BASE   | 137 | /tctools/_change_password_include.vue.js                                               | contextual | &#96;tctools/_change_password_include.vue.js&#96;                          |
| BASE   | 138 | /translations/tc_login_&lt;%=zCPLangUser%&gt;.js                                       | dinámica   | P06                                                                        |
| BASE   | 200 | &lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt; | dinámica   | P06                                                                        |
| BASE   | 11  | /shco_g0/shco_gen_taglib.jsp                                                           | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 13  | /tctools/tc_login_bag.jsp                                                              | contextual | [tctools/tc_login_bag.jsp](tctools--tc_login_bag.md)                       |
| BASE   | 16  | /tctools/change_password.jsp                                                           | ausente    | P06                                                                        |
| BASE   | 56  | /servlet/CheckSecurity/JSP/tctools/change_password_operation.jsp                       | ausente    | P06                                                                        |
| BASE   | 147 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp                                 | contextual | [shco_g0/shco_gen_logout.jsp](../dependencias/shco_g0--shco_gen_logout.md) |
| BASE   | 256 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_logout.jsp                                 | contextual | [shco_g0/shco_gen_logout.jsp](../dependencias/shco_g0--shco_gen_logout.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/_change_password_include.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
