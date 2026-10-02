# tc_login_wz_forget_pwd_email_based_action

Identificador: `tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp) | `027b6fe531b2f5f7366ed6de012a7721ff70da08c395d315cd0acad7232dbf1f` |    214 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 57  | offsite         | getParameter(request, "offsite") |
| 72  | email           | getParameter(request, "email")   |

| L   | Variable          | Expresión fuente                                                                       | Resolución estática parcial                                                            |
| --- | ----------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 26  | isIE              | false                                                                                  | false                                                                                  |
| 27  | userAgent         | request.getHeader("User-Agent")                                                        | request.getHeader("User-Agent")                                                        |
| 38  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                                    | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                                    |
| 39  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                              | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                              |
| 40  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")                                           | (String)session.getAttribute("URL_COMPLETE")                                           |
| 46  | sServerURL        | null                                                                                   | null                                                                                   |
| 47  | sHostName         | request.getServerName()                                                                | request.getServerName()                                                                |
| 48  | sPortName         | new Integer( request.getServerPort() ).toString()                                      | new Integer( request.getServerPort() ).toString()                                      |
| 49  | isHttpSecure      | request.isSecure()                                                                     | request.isSecure()                                                                     |
| 51  | sProtocol         | "http"                                                                                 | http                                                                                   |
| 57  | offsite           | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite")                   |
| 72  | email             | M4SafeRequest.getParameter(request, "email")                                           | M4SafeRequest.getParameter(request, "email")                                           |
| 101 | referer           | request.getHeader("Referer")                                                           | request.getHeader("Referer")                                                           |
| 127 | iRetSend          | sendForgetPwdEmail(oSessionManager, email,sServerURL,zlang,zappprod,sUrlLoginComplete) | sendForgetPwdEmail(oSessionManager, email,sServerURL,zlang,zappprod,sUrlLoginComplete) |
| 147 | iRet              | -1                                                                                     | -1                                                                                     |
| 153 | sM4Obj            | "SRTC_FORGET_PWD_BY_EMAIL"                                                             | SRTC_FORGET_PWD_BY_EMAIL                                                               |
| 154 | sNode             | "SRTC_FORGET_PWD_BY_EMAIL"                                                             | SRTC_FORGET_PWD_BY_EMAIL                                                               |
| 155 | sMethod           | "SEND_FORGET_PWD_EMAIL"                                                                | SEND_FORGET_PWD_EMAIL                                                                  |
| 201 | captchaReceived   | SecurityAutomationControl.getReceivedCaptcha(request)                                  | SecurityAutomationControl.getReceivedCaptcha(request)                                  |
| 202 | captchaExpected   | SecurityAutomationControl.getExpectedCaptcha(request)                                  | SecurityAutomationControl.getExpectedCaptcha(request)                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28  | if (userAgent != null &amp;&amp; userAgent.matches("._Trident/7._") &#124;&#124; userAgent.matches("._MSIE._"))                                    |
| 35  | &lt;% if (isIE) {                                                                                                                                  |
| 42  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                                                                      |
| 43  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";                                                           |
| 44  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/";                                                  |
| 52  | if ( isHttpSecure ) sProtocol = "https" ;                                                                                                          |
| 58  | if (offsite != null &amp;&amp; !offsite.equals("")) {                                                                                              |
| 63  | if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString();                                      |
| 95  | if (!captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype"))                        |
| 98  | if (email != null) session.setAttribute("tc_login_wz_hotc_email_action_data", email);                                                              |
| 102 | if (referer != null)                                                                                                                               |
| 106 | else                                                                                                                                               |
| 113 | else                                                                                                                                               |
| 117 | if (oSessionManager == null)                                                                                                                       |
| 121 | alert(login_ErrorConnection);                                                                                                                      |
| 130 | alert(login_UserEmailBased);                                                                                                                       |
| 139 | &lt;% } else { %&gt;                                                                                                                               |
| 149 | if (ai_stEmail == null) return iRet;                                                                                                               |
| 204 | if (captchaReceived == null &#124;&#124; captchaReceived.equals("")) {                                                                             |
| 208 | else if (!captchaReceived.equals(captchaExpected)) {                                                                                               |
| 212 | else return true;                                                                                                                                  |
| 54  | expresión de cálculo/transformación: sServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;                                                |
| 62  | expresión de cálculo/transformación: sServerURL = offsiteURL.getProtocol() + "://" + sHostName;                                                    |
| 63  | expresión de cálculo/transformación: if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString(); |

### Includes, navegación y dependencias

| L   | Include                                           |
| --- | ------------------------------------------------- |
| 23  | /tctools/tc_frame_options.jsp                     |
| 76  | /shco_g0/shco_gen_taglib.jsp                      |
| 77  | /shco_g0/shco_gen_lang.jsp                        |
| 78  | /shco_g0/shco_login_box_trans.jsp                 |
| 86  | /mobile/include_mobile_forgetpass.jsp             |
| 87  | /tctools/tc_login_gen_css.jsp                     |
| 140 | tc_login_wz_forget_pwd_email_based_action.vue.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 81  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       |
| 82  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js |
| 122 | &lt;%=sUrlLoginComplete%&gt;                         |
| 131 | &lt;%=sUrlLoginComplete%&gt;                         |
| 20  | com.meta4.jsp                                        |
| 23  | /tctools/tc_frame_options.jsp                        |
| 76  | /shco_g0/shco_gen_taglib.jsp                         |
| 77  | /shco_g0/shco_gen_lang.jsp                           |
| 78  | /shco_g0/shco_login_box_trans.jsp                    |
| 86  | /mobile/include_mobile_forgetpass.jsp                |
| 87  | /tctools/tc_login_gen_css.jsp                        |
| 140 | tc_login_wz_forget_pwd_email_based_action.vue.jsp    |
| 144 | com.meta4.jsp                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                                                           |
| ------ | --- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BASE   | 23  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                                                                |
| BASE   | 76  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                                                                  |
| BASE   | 77  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                                                                      |
| BASE   | 78  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)                                                        |
| BASE   | 86  | /mobile/include_mobile_forgetpass.jsp                | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)                                                |
| BASE   | 87  | /tctools/tc_login_gen_css.jsp                        | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                                                                |
| BASE   | 140 | tc_login_wz_forget_pwd_email_based_action.vue.jsp    | física     | [tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.vue.jsp](tctools--cprequest--tc_login_wz_forget_pwd_email_based_action-vue.md) |
| BASE   | 81  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       | dinámica   | P06                                                                                                                                         |
| BASE   | 82  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                                                                         |
| BASE   | 122 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                                                                         |
| BASE   | 131 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                                                                         |
| BASE   | 20  | com.meta4.jsp                                        | ausente    | P06                                                                                                                                         |
| BASE   | 23  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                                                                |
| BASE   | 76  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                                                                  |
| BASE   | 77  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                                                                      |
| BASE   | 78  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)                                                        |
| BASE   | 86  | /mobile/include_mobile_forgetpass.jsp                | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)                                                |
| BASE   | 87  | /tctools/tc_login_gen_css.jsp                        | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                                                                |
| BASE   | 140 | tc_login_wz_forget_pwd_email_based_action.vue.jsp    | física     | [tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.vue.jsp](tctools--cprequest--tc_login_wz_forget_pwd_email_based_action-vue.md) |
| BASE   | 144 | com.meta4.jsp                                        | ausente    | P06                                                                                                                                         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
