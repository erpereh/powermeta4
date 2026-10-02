# shco_gen_bag_wz_cp.vue

Identificador: `tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto                                                                       | Ámbito | Diccionario                                                                                       |
| -------------------------- | --------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| login.Back                 | Volver                                                                      | BASE   | [translations/shco_login_box_es.properties:L31](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePass           | Solicitud de cambio de contraseña                                           | BASE   | [translations/shco_login_box_es.properties:L33](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassEmailLabel | e-mail                                                                      | BASE   | [translations/shco_login_box_es.properties:L36](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine1      | ¿Tienes problemas para acceder a tu cuenta?                                 | BASE   | [translations/shco_login_box_es.properties:L38](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine2      | Te ayudaremos a iniciar tu sesión. ¡Ayúdanos a recordar quién eres!         | BASE   | [translations/shco_login_box_es.properties:L39](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine3      | Rellena los datos siguientes y envía una solicitud de cambio de contraseña. | BASE   | [translations/shco_login_box_es.properties:L40](../../referencias/literales/shco_login_box_es.md) |
| login.SendSoc              | Enviar                                                                      | BASE   | [translations/shco_login_box_es.properties:L63](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp) | `0d2ad25e98a54f2605addd95e33fee82c2e014c646fe8593e44fca9b94ad807a` |    298 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                   |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 224 | form    | id=tc_login_wz_cp_send_data; name=tc_login_wz_cp_send_data; action=/tctools/cpaction/tc_login_wz_cp_send_data.jsp; method=post                              |
| 226 | input   | type=hidden; id=offsite; name=offsite; value=                                                                                                               |
| 227 | input   | type=hidden; id=tks; name=tks; value=&lt;%=tks%&gt;                                                                                                         |
| 251 | input   | id=&lt;%=sidcampo%&gt;; ref=&lt;%=i%&gt;; name=&lt;%=sidcampo%&gt;; maxlength=&lt;%=sprecision%&gt;; type=text; value=; placeholder=&lt;%=snombrecampo%&gt; |
| 266 | input   | id=&lt;%=sidcampo%&gt;; name=&lt;%=sidcampo%&gt;; type=date; value=; placeholder=&lt;%=jsIsoDateFormat%&gt;                                                 |
| 271 | input   | id=buttonback; type=button; class=buttonForm; cds-ref=back-button; value=JSP_EXPR_Tran_shco_login_box.getProperty(                                          |
| 272 | input   | id=buttonenter; type=button; class=buttonForm; cds-ref=send-button; value=JSP_EXPR_Tran_shco_login_box.getProperty(; onclick=javascript:CheckAndSubmit();   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 62  | tks             | getParameter(request, "tks") |

| L   | Variable            | Expresión fuente                                                             | Resolución estática parcial                                                  |
| --- | ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 25  | bisExpPortalLogin   | false                                                                        | false                                                                        |
| 26  | product             | (String)session.getAttribute("_PROD")                                        | (String)session.getAttribute("_PROD")                                        |
| 33  | productCookie       | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) | com.meta4.request.M4ProductByThreadUpdater.getProductIDFromRequest (request) |
| 41  | iTotRegCount        | 0                                                                            | 0                                                                            |
| 42  | sFormHtml           | ""                                                                           |                                                                              |
| 57  | ismultiEnvironment  | M4BootstrapSession.isMultiEnvironment()                                      | M4BootstrapSession.isMultiEnvironment()                                      |
| 62  | tks                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks")             |
| 65  | sIDChannel          | "SRTC_FORGET_PWD"                                                            | SRTC_FORGET_PWD                                                              |
| 66  | sIDNode             | "SRTC_FIND_FIELDS"                                                           | SRTC_FIND_FIELDS                                                             |
| 67  | sIDMethod           | "LOAD_FIELDS"                                                                | LOAD_FIELDS                                                                  |
| 90  | sidcampo            | ""                                                                           |                                                                              |
| 91  | snombrecampo        | ""                                                                           |                                                                              |
| 92  | sprecision          | ""                                                                           |                                                                              |
| 93  | sescala             | ""                                                                           |                                                                              |
| 94  | stipoHtml           | ""                                                                           |                                                                              |
| 95  | itipo               | 0                                                                            | 0                                                                            |
| 96  | iPosCal             | 0                                                                            | 0                                                                            |
| 233 | emailboxdescription | Tran_shco_login_box.getProperty("login.ChangePassEmailLabel")                | Tran_shco_login_box.getProperty("login.ChangePassEmailLabel")                |
| 237 | i                   | 0                                                                            | 0                                                                            |
| 255 | jsIsoDateFormat     | "yyyy-MM-dd"                                                                 | yyyy-MM-dd                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 88  | getCountInClient | sIDNode, sIDChannel, sIDNode                                |
| 239 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD"               |
| 240 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_TRANSLATED_FLD"      |
| 243 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "PREC"                   |
| 244 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "SCALE"                  |
| 245 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_M4_TYPE")).intValue( |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 18  | cursor_wait    |            |
| 99  | CheckAndSubmit |            |
| 131 | BuildURL       |            |

| L   | Condición / acción / mensaje literal                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if(product != null)                                                                                                                                                         |
| 29  | if (product.equalsIgnoreCase("exp")) {                                                                                                                                      |
| 34  | if(productCookie != null)                                                                                                                                                   |
| 36  | if (productCookie.equalsIgnoreCase("exp")) {                                                                                                                                |
| 45  | if (oSessionManager == null) {                                                                                                                                              |
| 48  | alert(login_ErrorConnection);                                                                                                                                               |
| 54  | if (oSessionManager != null) {                                                                                                                                              |
| 58  | if (!ismultiEnvironment &#124;&#124; (ismultiEnvironment &amp;&amp; sIdSoc != null &amp;&amp; !sIdSoc.equals("")))                                                          |
| 75  | if (sIdSoc != null) {                                                                                                                                                       |
| 77  | } else {                                                                                                                                                                    |
| 107 | if (sAux == "" &amp;&amp; document.tc_login_wz_cp_send_data.elements[i].name != "offsite" &amp;&amp; document.tc_login_wz_cp_send_data.elements[i].nodeName != "BUTTON" ) { |
| 112 | if (bFillData == false) {                                                                                                                                                   |
| 117 | if (bIsError == true) {                                                                                                                                                     |
| 118 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined") {                                                                                           |
| 120 | }else{                                                                                                                                                                      |
| 121 | alert(sErrorMessage);                                                                                                                                                       |
| 124 | } else {                                                                                                                                                                    |
| 191 | if (isEXP === "true") {                                                                                                                                                     |
| 249 | if ((itipo !=4) &amp;&amp; (itipo !=5)) {                                                                                                                                   |
| 253 | } else {                                                                                                                                                                    |
| 256 | if(prod == null &#124;&#124; !prod.equals("mobile")){ %&gt;                                                                                                                 |
| 281 | } else {                                                                                                                                                                    |
| 285 | alert(login_NoDataM);                                                                                                                                                       |
| 290 | } else {                                                                                                                                                                    |
| 293 | alert(login_ErrorConnectionSession);                                                                                                                                        |
| 241 | expresión de cálculo/transformación: snombrecampo = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(snombrecampo) + ": ";                                           |
| 246 | expresión de cálculo/transformación: iPosCal = i + 2; // Este numero representa la posición en la cual se recibiría el calendario. 2 es el numero de input que hay antes.   |

### Includes, navegación y dependencias

| L   | Include                               |
| --- | ------------------------------------- |
| 165 | /mobile/include_mobile_forgetpass.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 15  | /translations/tc_login_&lt;%=zlanguser%&gt;.js             |
| 49  | &lt;%=sUrlLoginComplete%&gt;                               |
| 144 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 145 | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 148 | /style/cds.css                                             |
| 151 | /images/cegid/favicon.ico                                  |
| 154 | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 155 | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 167 | /library/m4gen.js                                          |
| 168 | /library/m4gen_excep.js                                    |
| 169 | /library/&lt;%=zLangFolder%&gt;/functions_1.js             |
| 219 | /library/framework/common.vue.js                           |
| 220 | /tctools/cprequest/shco_gen_bag_wz_cp.vue.js               |
| 224 | /tctools/cpaction/tc_login_wz_cp_send_data.jsp             |
| 286 | &lt;%=sUrlLoginComplete%&gt;                               |
| 294 | &lt;%=sUrlLoginComplete%&gt;                               |
| 165 | /mobile/include_mobile_forgetpass.jsp                      |
| 282 | /tctools/cprequest/tc_login_wz_client_code.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 165 | /mobile/include_mobile_forgetpass.jsp          | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 15  | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                             |
| BASE   | 49  | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 154 | /library/npm/vue@3/dist/vue.global.prod.js     | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                             |
| BASE   | 155 | /library/npm/vuetify@3/dist/vuetify.min.js     | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                             |
| BASE   | 167 | /library/m4gen.js                              | contextual | [library/m4gen.js](../dependencias/library--m4gen.md)                                           |
| BASE   | 168 | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../dependencias/library--m4gen_excep.md)                               |
| BASE   | 169 | /library/&lt;%=zLangFolder%&gt;/functions_1.js | dinámica   | P06                                                                                             |
| BASE   | 219 | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 220 | /tctools/cprequest/shco_gen_bag_wz_cp.vue.js   | contextual | &#96;tctools/cprequest/shco_gen_bag_wz_cp.vue.js&#96;                                           |
| BASE   | 224 | /tctools/cpaction/tc_login_wz_cp_send_data.jsp | contextual | [tctools/cpaction/tc_login_wz_cp_send_data.jsp](tctools--cpaction--tc_login_wz_cp_send_data.md) |
| BASE   | 286 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 294 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 165 | /mobile/include_mobile_forgetpass.jsp          | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 282 | /tctools/cprequest/tc_login_wz_client_code.jsp | contextual | [tctools/cprequest/tc_login_wz_client_code.jsp](tctools--cprequest--tc_login_wz_client_code.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/shco_gen_bag_wz_cp.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
