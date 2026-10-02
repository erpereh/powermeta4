# tc_login_wz_hotc_email_action.vue

Identificador: `tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp) | `e7730e3ef65b76d7452870715a5263b8c4cef0eec5bbac89db49a7306e65280d` |    269 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 146 | form    | id=tc_login_wz_person_data; name=tc_login_wz_person_data; action=/tctools/cprequest/tc_login_wz_person_data.jsp; method=post |
| 147 | input   | type=hidden; id=tks; name=tks; value=                                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 36  | email           | getParameter(request, "email") |

| L   | Variable          | Expresión fuente                                                                                                      | Resolución estática parcial                                                                                           |
| --- | ----------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 26  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                                                                   | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                                                                   |
| 27  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                                                             | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")                                                             |
| 28  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")                                                                          | (String)session.getAttribute("URL_COMPLETE")                                                                          |
| 36  | email             | M4SafeRequest.getParameter(request, "email")                                                                          | M4SafeRequest.getParameter(request, "email")                                                                          |
| 58  | validation        | captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype") | captchaValidation(request, response, "tc_login_wz_hotc_email_action_require", "tc_login_wz_hotc_email_action_retype") |
| 99  | sorganization     | ""                                                                                                                    |                                                                                                                       |
| 100 | sidperson         | ""                                                                                                                    |                                                                                                                       |
| 102 | iCode             | getOrganizationByEmail(oSessionManager, email, organization, idperson)                                                | getOrganizationByEmail(oSessionManager, email, organization, idperson)                                                |
| 108 | emailOK           | false                                                                                                                 | false                                                                                                                 |
| 133 | strtks            | ""                                                                                                                    |                                                                                                                       |
| 199 | iRet              | -1                                                                                                                    | -1                                                                                                                    |
| 208 | sM4Obj            | "SRTC_FORGET_PWD_BY_EMAIL"                                                                                            | SRTC_FORGET_PWD_BY_EMAIL                                                                                              |
| 209 | sNode             | "SRTC_FORGET_PWD_BY_EMAIL"                                                                                            | SRTC_FORGET_PWD_BY_EMAIL                                                                                              |
| 210 | sMethod           | "GET_ORGANIZATION_BY_EMAIL"                                                                                           | GET_ORGANIZATION_BY_EMAIL                                                                                             |
| 256 | captchaReceived   | SecurityAutomationControl.getReceivedCaptcha(request)                                                                 | SecurityAutomationControl.getReceivedCaptcha(request)                                                                 |
| 257 | captchaExpected   | SecurityAutomationControl.getExpectedCaptcha(request)                                                                 | SecurityAutomationControl.getExpectedCaptcha(request)                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 230 | getItem   | sNode, sM4Obj, sNode, "-1", "ID_ORGANIZATION") |
| 233 | getItem   | sNode, sM4Obj, sNode, "-1", "STD_ID_PERSON")   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 150 | CheckAndSubmit |            |

| L   | Condición / acción / mensaje literal                                                              |
| --- | ------------------------------------------------------------------------------------------------- |
| 30  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                     |
| 31  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";          |
| 32  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/"; |
| 59  | if (!validation)                                                                                  |
| 62  | if (email != null) session.setAttribute("tc_login_wz_hotc_email_action_data", email);             |
| 68  | alert(login_NoDataM);                                                                             |
| 69  | if (window.history.length &gt; 1) {                                                               |
| 71  | } else {                                                                                          |
| 80  | else                                                                                              |
| 86  | if (oSessionManager == null)                                                                      |
| 90  | alert(login_ErrorConnection);                                                                     |
| 109 | switch (iCode) {                                                                                  |
| 110 | case 1:                                                                                           |
| 116 | case 2:                                                                                           |
| 129 | if (emailOK)                                                                                      |
| 136 | if (sidperson != null)                                                                            |
| 154 | if (bIsError == true)                                                                             |
| 156 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){                  |
| 158 | }else{                                                                                            |
| 159 | alert(sErrorMessage);                                                                             |
| 164 | else                                                                                              |
| 178 | else                                                                                              |
| 201 | if (ai_stEmail == null)                                                                           |
| 229 | if ( iRet == 1 &#124;&#124; iRet == 2 )                                                           |
| 232 | if ( iRet == 1 )                                                                                  |
| 259 | if (captchaReceived == null &#124;&#124; captchaReceived.equals("")) {                            |
| 263 | else if (!captchaReceived.equals(captchaExpected)) {                                              |
| 267 | else return true;                                                                                 |

### Includes, navegación y dependencias

| L   | Include                               |
| --- | ------------------------------------- |
| 23  | /tctools/tc_frame_options.jsp         |
| 40  | /shco_g0/shco_gen_taglib.jsp          |
| 41  | /shco_g0/shco_gen_lang.jsp            |
| 42  | /shco_g0/shco_login_box_trans.jsp     |
| 50  | /mobile/include_mobile_forgetpass.jsp |
| 51  | /tctools/tc_login_gen_css.jsp         |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 45  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       |
| 46  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js |
| 72  | &lt;%=sUrlLoginComplete%&gt;                         |
| 91  | &lt;%=sUrlLoginComplete%&gt;                         |
| 146 | /tctools/cprequest/tc_login_wz_person_data.jsp       |
| 183 | /tctools/cprequest/tc_login_wz_client_code.jsp       |
| 20  | com.meta4.jsp                                        |
| 23  | /tctools/tc_frame_options.jsp                        |
| 40  | /shco_g0/shco_gen_taglib.jsp                         |
| 41  | /shco_g0/shco_gen_lang.jsp                           |
| 42  | /shco_g0/shco_login_box_trans.jsp                    |
| 50  | /mobile/include_mobile_forgetpass.jsp                |
| 51  | /tctools/tc_login_gen_css.jsp                        |
| 194 | com.meta4.jsp                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 23  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 40  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 41  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 42  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 50  | /mobile/include_mobile_forgetpass.jsp                | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 51  | /tctools/tc_login_gen_css.jsp                        | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                    |
| BASE   | 45  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       | dinámica   | P06                                                                                             |
| BASE   | 46  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                             |
| BASE   | 72  | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                             |
| BASE   | 91  | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                             |
| BASE   | 146 | /tctools/cprequest/tc_login_wz_person_data.jsp       | contextual | [tctools/cprequest/tc_login_wz_person_data.jsp](tctools--cprequest--tc_login_wz_person_data.md) |
| BASE   | 183 | /tctools/cprequest/tc_login_wz_client_code.jsp       | contextual | [tctools/cprequest/tc_login_wz_client_code.jsp](tctools--cprequest--tc_login_wz_client_code.md) |
| BASE   | 20  | com.meta4.jsp                                        | ausente    | P06                                                                                             |
| BASE   | 23  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 40  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 41  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 42  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 50  | /mobile/include_mobile_forgetpass.jsp                | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 51  | /tctools/tc_login_gen_css.jsp                        | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                    |
| BASE   | 194 | com.meta4.jsp                                        | ausente    | P06                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_hotc_email_action.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
