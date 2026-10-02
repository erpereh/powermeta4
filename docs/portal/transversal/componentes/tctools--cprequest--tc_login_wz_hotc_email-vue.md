# tc_login_wz_hotc_email.vue

Identificador: `tctools/cprequest/tc_login_wz_hotc_email.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                       | Texto                                                               | Ámbito | Diccionario                                                                                       |
| --------------------------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| ChangePwd.BackHome          | Volver al inicio                                                    | BASE   | [translations/tc_login_es.properties:L12](../../referencias/literales/tc_login_es.md)             |
| ChangePwd.Title             | Cambio de contraseña                                                | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md)             |
| login.Back                  | Volver                                                              | BASE   | [translations/shco_login_box_es.properties:L31](../../referencias/literales/shco_login_box_es.md) |
| login.CaptchaPlaceHolder    | Caracteres de seguridad                                             | BASE   | [translations/shco_login_box_es.properties:L32](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassEmailLabel  | e-mail                                                              | BASE   | [translations/shco_login_box_es.properties:L36](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassEmailLine   | Por favor, introduce tu e-mail para recuperar tu cuenta de usuario. | BASE   | [translations/shco_login_box_es.properties:L37](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassNoEmailLine | Si quieres recuperarla sin introducir tu e-mail, haz clic aquí      | BASE   | [translations/shco_login_box_es.properties:L41](../../referencias/literales/shco_login_box_es.md) |
| login.NotReUsuPass          | ¿Has olvidado tu usuario/contraseña?                                | BASE   | [translations/shco_login_box_es.properties:L55](../../referencias/literales/shco_login_box_es.md) |
| login.NotReUsuPassExp       | ¿No puede iniciar sesión?                                           | BASE   | [translations/shco_login_box_es.properties:L56](../../referencias/literales/shco_login_box_es.md) |
| login.RequireCaptcha        | Por seguridad, por favor, introduce los siguientes caracteres:      | BASE   | [translations/shco_login_box_es.properties:L59](../../referencias/literales/shco_login_box_es.md) |
| login.RetypeCaptcha         | Por favor, vuelve a introducir los siguientes caracteres:           | BASE   | [translations/shco_login_box_es.properties:L60](../../referencias/literales/shco_login_box_es.md) |
| login.SendSoc               | Enviar                                                              | BASE   | [translations/shco_login_box_es.properties:L63](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_hotc_email.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_hotc_email.vue.jsp) | `08e8a59412469bbbd8024d538ab384d28f15bb651ec97176475361008a4451de` |    296 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_hotc_email.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_hotc_email.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 208 | form    | id=tc_login_wz_hotc_email_action; name=tc_login_wz_hotc_email_action; action=/tctools/cprequest/tc_login_wz_hotc_email_action.jsp; method=post; class=cds-hidden |
| 209 | input   | type=hidden; id=offsite; name=offsite; value=                                                                                                                    |
| 210 | input   | id=email; name=email; maxlength=255; type=text; value=&lt;%=sEmailRetyped%&gt;; data-cy=email                                                                    |
| 211 | input   | id=kaptcha; name=kaptcha; maxlength=255; type=text; value=                                                                                                       |
| 212 | input   | cds-ref=send-button; type=button; class=buttonForm; value=; onclick=javascript:submitEmail();; data-cy=send-button                                               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ---------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 21  | ismultiEnvironment     | M4BootstrapSession.isMultiEnvironment()                                       | M4BootstrapSession.isMultiEnvironment()                                       |
| 22  | sIdSoc_DNS             | null                                                                          | null                                                                          |
| 30  | zlang                  | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                           | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                           |
| 31  | zappprod               | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                     | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                     |
| 32  | sUrlLoginComplete      | (String)session.getAttribute("URL_COMPLETE")                                  | (String)session.getAttribute("URL_COMPLETE")                                  |
| 37  | forgetPwdBasedOnEmail  | false                                                                         | false                                                                         |
| 38  | sforgetPwdBasedOnEmail | GlobalSavParams.getParameterValue("ADMINISTRATION", "FORGET_PWD_EMAIL_BASED") | GlobalSavParams.getParameterValue("ADMINISTRATION", "FORGET_PWD_EMAIL_BASED") |
| 49  | sRequireCaptcha        | (String) session.getAttribute("tc_login_wz_hotc_email_action_require")        | (String) session.getAttribute("tc_login_wz_hotc_email_action_require")        |
| 50  | sRetypeCaptcha         | (String) session.getAttribute("tc_login_wz_hotc_email_action_retype")         | (String) session.getAttribute("tc_login_wz_hotc_email_action_retype")         |
| 51  | sEmailRetyped          | (String) session.getAttribute("tc_login_wz_hotc_email_action_data")           | (String) session.getAttribute("tc_login_wz_hotc_email_action_data")           |
| 60  | result                 | true                                                                          | true                                                                          |
| 229 | paint_back             | Tran_shco_login_box.getProperty("login.Back")                                 | Tran_shco_login_box.getProperty("login.Back")                                 |
| 282 | isExpProduct           | false                                                                         | false                                                                         |
| 285 | productFromSession     | (String) request.getSession().getAttribute("_PROD")                           | (String) request.getSession().getAttribute("_PROD")                           |
| 286 | productFromCookie      | M4ProductByThreadUpdater.getProductIDFromRequest(request)                     | M4ProductByThreadUpdater.getProductIDFromRequest(request)                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 86  | cursor_wait   |            |
| 90  | cursor_clear  |            |
| 125 | BuildURL      |            |
| 128 | validateEmail | email      |
| 144 | submitEmail   |            |

| L   | Condición / acción / mensaje literal                                                              |
| --- | ------------------------------------------------------------------------------------------------- |
| 34  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                     |
| 35  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";          |
| 36  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/"; |
| 40  | if (sforgetPwdBasedOnEmail != null &amp;&amp; sforgetPwdBasedOnEmail.equals("1"))                 |
| 52  | if (!isValidEmailAddress(sEmailRetyped)) sEmailRetyped = "";                                      |
| 62  | if (email == null) return false;                                                                  |
| 134 | if (result == true)                                                                               |
| 138 | else                                                                                              |
| 153 | if (email == "")                                                                                  |
| 157 | if (kaptcha == "") bFillData = false;                                                             |
| 160 | if (email == null) bEmail = false;                                                                |
| 162 | if (bFillData == false)                                                                           |
| 167 | else if (bEmail == false)                                                                         |
| 173 | if (bIsError == true)                                                                             |
| 176 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined")                   |
| 179 | } else {                                                                                          |
| 180 | alert(sErrorMessage);                                                                             |
| 184 | else                                                                                              |
| 188 | &lt;%if (forgetPwdBasedOnEmail){%&gt;                                                             |
| 216 | &lt;%if(!isExpProduct(request)){%&gt;                                                             |
| 218 | &lt;%} else { %&gt;                                                                               |
| 230 | if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {                                     |
| 236 | &lt;%if(!isExpProduct(request)){%&gt;                                                             |
| 238 | &lt;%} else { %&gt;                                                                               |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 27  | /tctools/tc_frame_options.jsp     |
| 72  | /shco_g0/shco_gen_taglib.jsp      |
| 73  | /shco_g0/shco_gen_lang.jsp        |
| 74  | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                                                |
| --- | ---------------------------------------------------------------- |
| 81  | /translations/tc_login_&lt;%=zlanguser%&gt;.js                   |
| 82  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js             |
| 107 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css       |
| 108 | /library/npm/vuetify@3/dist/vuetify.min.css                      |
| 111 | /style/cds.css                                                   |
| 114 | /images/cegid/favicon.ico                                        |
| 117 | /library/npm/vue@3/dist/vue.global.prod.js                       |
| 118 | /library/npm/vuetify@3/dist/vuetify.min.js                       |
| 189 | /tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp |
| 202 | /library/framework/common.vue.js                                 |
| 203 | /tctools/cprequest/tc_login_wz_hotc_email.vue.js                 |
| 208 | /tctools/cprequest/tc_login_wz_hotc_email_action.jsp             |
| 20  | com.meta4.jsp                                                    |
| 27  | /tctools/tc_frame_options.jsp                                    |
| 72  | /shco_g0/shco_gen_taglib.jsp                                     |
| 73  | /shco_g0/shco_gen_lang.jsp                                       |
| 74  | /shco_g0/shco_login_box_trans.jsp                                |
| 281 | com.meta4.jsp                                                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                       | Resolución | Ficha / candidato                                                                                                                   |
| ------ | --- | ---------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| BASE   | 27  | /tctools/tc_frame_options.jsp                                    | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                                                        |
| BASE   | 72  | /shco_g0/shco_gen_taglib.jsp                                     | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                                                          |
| BASE   | 73  | /shco_g0/shco_gen_lang.jsp                                       | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                                                              |
| BASE   | 74  | /shco_g0/shco_login_box_trans.jsp                                | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)                                                |
| BASE   | 81  | /translations/tc_login_&lt;%=zlanguser%&gt;.js                   | dinámica   | P06                                                                                                                                 |
| BASE   | 82  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js             | dinámica   | P06                                                                                                                                 |
| BASE   | 117 | /library/npm/vue@3/dist/vue.global.prod.js                       | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                                                                 |
| BASE   | 118 | /library/npm/vuetify@3/dist/vuetify.min.js                       | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                                                                 |
| BASE   | 189 | /tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp | contextual | [tctools/cprequest/tc_login_wz_forget_pwd_email_based_action.jsp](tctools--cprequest--tc_login_wz_forget_pwd_email_based_action.md) |
| BASE   | 202 | /library/framework/common.vue.js                                 | contextual | &#96;library/framework/common.vue.js&#96;                                                                                           |
| BASE   | 203 | /tctools/cprequest/tc_login_wz_hotc_email.vue.js                 | contextual | &#96;tctools/cprequest/tc_login_wz_hotc_email.vue.js&#96;                                                                           |
| BASE   | 208 | /tctools/cprequest/tc_login_wz_hotc_email_action.jsp             | contextual | [tctools/cprequest/tc_login_wz_hotc_email_action.jsp](tctools--cprequest--tc_login_wz_hotc_email_action.md)                         |
| BASE   | 20  | com.meta4.jsp                                                    | ausente    | P06                                                                                                                                 |
| BASE   | 27  | /tctools/tc_frame_options.jsp                                    | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                                                        |
| BASE   | 72  | /shco_g0/shco_gen_taglib.jsp                                     | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                                                          |
| BASE   | 73  | /shco_g0/shco_gen_lang.jsp                                       | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                                                              |
| BASE   | 74  | /shco_g0/shco_login_box_trans.jsp                                | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)                                                |
| BASE   | 281 | com.meta4.jsp                                                    | ausente    | P06                                                                                                                                 |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_hotc_email.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
