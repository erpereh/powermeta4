# shco_gen_bag_wz_cp

Identificador: `tctools/cprequest/shco_gen_bag_wz_cp.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto                                                                       | Ámbito | Diccionario                                                                                       |
| -------------------------- | --------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| ChangePwd.BackHome         | Volver al inicio                                                            | BASE   | [translations/tc_login_es.properties:L12](../../referencias/literales/tc_login_es.md)             |
| ChangePwd.Title            | Cambio de contraseña                                                        | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md)             |
| login.Back                 | Volver                                                                      | BASE   | [translations/shco_login_box_es.properties:L31](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePass           | Solicitud de cambio de contraseña                                           | BASE   | [translations/shco_login_box_es.properties:L33](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassEmailLabel | e-mail                                                                      | BASE   | [translations/shco_login_box_es.properties:L36](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine1      | ¿Tienes problemas para acceder a tu cuenta?                                 | BASE   | [translations/shco_login_box_es.properties:L38](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine2      | Te ayudaremos a iniciar tu sesión. ¡Ayúdanos a recordar quién eres!         | BASE   | [translations/shco_login_box_es.properties:L39](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine3      | Rellena los datos siguientes y envía una solicitud de cambio de contraseña. | BASE   | [translations/shco_login_box_es.properties:L40](../../referencias/literales/shco_login_box_es.md) |
| login.SendSoc              | Enviar                                                                      | BASE   | [translations/shco_login_box_es.properties:L63](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/shco_gen_bag_wz_cp.jsp](../../../../clon_portal/portal/tctools/cprequest/shco_gen_bag_wz_cp.jsp) | `41c34948e15c20ed24f4b961a91ab0ef2b47d29a27d8e0ac4c48d86797757611` |    289 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/shco_gen_bag_wz_cp.jsp](../../../../clon_portal/portal/tctools/cprequest/shco_gen_bag_wz_cp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                         |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 192 | img     | id=imgLogo; alt=cegid; src=/images/cegid/cegid.png                                                                                                                |
| 194 | form    | id=tc_login_wz_cp_send_data; name=tc_login_wz_cp_send_data; action=/tctools/cpaction/tc_login_wz_cp_send_data.jsp; method=post                                    |
| 195 | input   | type=hidden; id=offsite; name=offsite; value=                                                                                                                     |
| 196 | input   | type=hidden; id=tks; name=tks; value=&lt;%=tks%&gt;                                                                                                               |
| 226 | input   | id=&lt;%=sidcampo%&gt;; name=&lt;%=sidcampo%&gt;; maxlength=&lt;%=sprecision%&gt;; type=text; value=; placeholder=&lt;%=snombrecampo%&gt;                         |
| 242 | input   | id=&lt;%=sidcampo%&gt;; name=&lt;%=sidcampo%&gt;; type=date; value=; placeholder=&lt;%=jsIsoDateFormat%&gt;                                                       |
| 256 | a       | id=back-button; href=javascript:go_back(); class=buttonForm-link text-body-2; data-cy=back-button                                                                 |
| 260 | input   | id=send-button; type=button; class=buttonForm-primary; value=JSP_EXPR_Tran_shco_login_box.getProperty(; onclick=javascript:CheckAndSubmit();; data-cy=send-button |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 49  | tks             | getParameter(request, "tks") |

| L   | Variable            | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | ------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 28  | iTotRegCount        | 0                                                                | 0                                                                |
| 29  | sFormHtml           | ""                                                               |                                                                  |
| 44  | ismultiEnvironment  | M4BootstrapSession.isMultiEnvironment()                          | M4BootstrapSession.isMultiEnvironment()                          |
| 49  | tks                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks") |
| 52  | sIDChannel          | "SRTC_FORGET_PWD"                                                | SRTC_FORGET_PWD                                                  |
| 53  | sIDNode             | "SRTC_FIND_FIELDS"                                               | SRTC_FIND_FIELDS                                                 |
| 54  | sIDMethod           | "LOAD_FIELDS"                                                    | LOAD_FIELDS                                                      |
| 77  | sidcampo            | ""                                                               |                                                                  |
| 78  | snombrecampo        | ""                                                               |                                                                  |
| 79  | sprecision          | ""                                                               |                                                                  |
| 80  | sescala             | ""                                                               |                                                                  |
| 81  | stipoHtml           | ""                                                               |                                                                  |
| 82  | itipo               | 0                                                                | 0                                                                |
| 83  | iPosCal             | 0                                                                | 0                                                                |
| 208 | emailboxdescription | Tran_shco_login_box.getProperty("login.ChangePassEmailLabel")    | Tran_shco_login_box.getProperty("login.ChangePassEmailLabel")    |
| 211 | i                   | 0                                                                | 0                                                                |
| 231 | jsIsoDateFormat     | "yyyy-MM-dd"                                                     | yyyy-MM-dd                                                       |
| 250 | paint_back          | Tran_shco_login_box.getProperty("login.Back")                    | Tran_shco_login_box.getProperty("login.Back")                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 75  | getCountInClient | sIDNode, sIDChannel, sIDNode                                |
| 213 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD"               |
| 214 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_TRANSLATED_FLD"      |
| 217 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "PREC"                   |
| 218 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "SCALE"                  |
| 219 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_M4_TYPE")).intValue( |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 17  | cursor_wait    |            |
| 21  | go_back        |            |
| 86  | CheckAndSubmit |            |
| 118 | BuildURL       |            |

| L   | Condición / acción / mensaje literal                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if (oSessionManager == null) {                                                                                                                                              |
| 35  | alert(login_ErrorConnection);                                                                                                                                               |
| 41  | if (oSessionManager != null) {                                                                                                                                              |
| 45  | if (!ismultiEnvironment &#124;&#124; (ismultiEnvironment &amp;&amp; sIdSoc != null &amp;&amp; !sIdSoc.equals("")))                                                          |
| 62  | if (sIdSoc != null) {                                                                                                                                                       |
| 64  | } else {                                                                                                                                                                    |
| 94  | if (sAux == "" &amp;&amp; document.tc_login_wz_cp_send_data.elements[i].name != "offsite" &amp;&amp; document.tc_login_wz_cp_send_data.elements[i].nodeName != "BUTTON" ) { |
| 99  | if (bFillData == false) {                                                                                                                                                   |
| 104 | if (bIsError == true) {                                                                                                                                                     |
| 105 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined") {                                                                                           |
| 107 | }else{                                                                                                                                                                      |
| 108 | alert(sErrorMessage);                                                                                                                                                       |
| 111 | } else {                                                                                                                                                                    |
| 129 | if(prod != null &amp;&amp; prod.equals("mobile")){                                                                                                                          |
| 132 | &lt;%} else {%&gt;                                                                                                                                                          |
| 223 | if ((itipo !=4) &amp;&amp; (itipo !=5)) {                                                                                                                                   |
| 229 | } else {                                                                                                                                                                    |
| 232 | if(prod == null &#124;&#124; !prod.equals("mobile")){ %&gt;                                                                                                                 |
| 251 | if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {                                                                                                               |
| 272 | } else {                                                                                                                                                                    |
| 276 | alert(login_NoDataM);                                                                                                                                                       |
| 281 | }else{                                                                                                                                                                      |
| 284 | alert(login_ErrorConnectionSession);                                                                                                                                        |
| 215 | expresión de cálculo/transformación: snombrecampo = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(snombrecampo) + ": ";                                           |
| 220 | expresión de cálculo/transformación: iPosCal = i + 2; // Este numero representa la posición en la cual se recibiría el calendario. 2 es el numero de input que hay antes.   |

### Includes, navegación y dependencias

| L   | Include                               |
| --- | ------------------------------------- |
| 127 | /mobile/include_mobile_forgetpass.jsp |
| 178 | /tctools/tc_login_gen_css.jsp         |

| L   | Destino / recurso                              |
| --- | ---------------------------------------------- |
| 14  | /translations/tc_login_&lt;%=zlanguser%&gt;.js |
| 36  | &lt;%=sUrlLoginComplete%&gt;                   |
| 131 | /style/tc_portal_fastlane_mobile.css           |
| 133 | /style/m4reset.css                             |
| 134 | /style/cds_ie11.css                            |
| 180 | /library/m4gen.js                              |
| 181 | /library/m4gen_excep.js                        |
| 182 | /library/&lt;%=zLangFolder%&gt;/functions_1.js |
| 192 | /images/cegid/cegid.png                        |
| 194 | /tctools/cpaction/tc_login_wz_cp_send_data.jsp |
| 256 | javascript:go_back()                           |
| 277 | &lt;%=sUrlLoginComplete%&gt;                   |
| 285 | &lt;%=sUrlLoginComplete%&gt;                   |
| 127 | /mobile/include_mobile_forgetpass.jsp          |
| 178 | /tctools/tc_login_gen_css.jsp                  |
| 273 | /tctools/cprequest/tc_login_wz_client_code.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 127 | /mobile/include_mobile_forgetpass.jsp          | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 178 | /tctools/tc_login_gen_css.jsp                  | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                    |
| BASE   | 14  | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                             |
| BASE   | 36  | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 180 | /library/m4gen.js                              | contextual | [library/m4gen.js](../dependencias/library--m4gen.md)                                           |
| BASE   | 181 | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../dependencias/library--m4gen_excep.md)                               |
| BASE   | 182 | /library/&lt;%=zLangFolder%&gt;/functions_1.js | dinámica   | P06                                                                                             |
| BASE   | 194 | /tctools/cpaction/tc_login_wz_cp_send_data.jsp | contextual | [tctools/cpaction/tc_login_wz_cp_send_data.jsp](tctools--cpaction--tc_login_wz_cp_send_data.md) |
| BASE   | 256 | javascript:go_back()                           | dinámica   | P06                                                                                             |
| BASE   | 277 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 285 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                             |
| BASE   | 127 | /mobile/include_mobile_forgetpass.jsp          | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md)    |
| BASE   | 178 | /tctools/tc_login_gen_css.jsp                  | contextual | [tctools/tc_login_gen_css.jsp](tctools--tc_login_gen_css.md)                                    |
| BASE   | 273 | /tctools/cprequest/tc_login_wz_client_code.jsp | contextual | [tctools/cprequest/tc_login_wz_client_code.jsp](tctools--cprequest--tc_login_wz_client_code.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/shco_gen_bag_wz_cp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
