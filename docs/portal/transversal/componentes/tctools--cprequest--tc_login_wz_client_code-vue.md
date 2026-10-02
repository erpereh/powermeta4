# tc_login_wz_client_code.vue

Identificador: `tctools/cprequest/tc_login_wz_client_code.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                       | Ámbito | Diccionario                                                                                       |
| --------------------- | ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| ChangePwd.BackHome    | Volver al inicio                            | BASE   | [translations/tc_login_es.properties:L12](../../referencias/literales/tc_login_es.md)             |
| ChangePwd.Title       | Cambio de contraseña                        | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md)             |
| login.Back            | Volver                                      | BASE   | [translations/shco_login_box_es.properties:L31](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePass      | Solicitud de cambio de contraseña           | BASE   | [translations/shco_login_box_es.properties:L33](../../referencias/literales/shco_login_box_es.md) |
| login.ChangePassLine1 | ¿Tienes problemas para acceder a tu cuenta? | BASE   | [translations/shco_login_box_es.properties:L38](../../referencias/literales/shco_login_box_es.md) |
| login.SendSoc         | Enviar                                      | BASE   | [translations/shco_login_box_es.properties:L63](../../referencias/literales/shco_login_box_es.md) |
| login.Soc             | Código de cliente                           | BASE   | [translations/shco_login_box_es.properties:L64](../../referencias/literales/shco_login_box_es.md) |
| login.WithOutCodeC    | Introduce código de cliente.                | BASE   | [translations/shco_login_box_es.properties:L70](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_client_code.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_client_code.vue.jsp) | `9ab0244be9850c926db08bc2df62619c203de8635c67cad8d00d3aa555badeed` |    180 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_client_code.vue.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_client_code.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 158 | form    | id=tc_login_wz_person_data; name=tc_login_wz_person_data; action=/tctools/cprequest/tc_login_wz_person_data.jsp; method=post; class=cds-hidden |
| 159 | input   | id=idsociedad; value=&lt;%=sIdSocSuggestion%&gt;; placeholder=JSP_EXPR_Tran_shco_login_box.getProperty(                                        |
| 160 | input   | cds-ref=send-button; type=button; value=javascript:userrequestsoc();                                                                           |
| 161 | input   | cds-ref=back-button; type=button; value=javascript:go.history(-1);                                                                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                          | Resolución estática parcial                               |
| --- | ----------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| 25  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")       | (String)session.getAttribute("LANG_TO_CHANGE_PASS")       |
| 26  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE") | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE") |
| 27  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")              | (String)session.getAttribute("URL_COMPLETE")              |
| 35  | sIdSoc            | (String)session.getAttribute("SOC_C_PASS")                | (String)session.getAttribute("SOC_C_PASS")                |
| 36  | sOrganization     | sIdSoc                                                    | (String)session.getAttribute("SOC_C_PASS")                |
| 40  | sIdSocSuggestion  | ""                                                        |                                                           |
| 166 | paint_back        | Tran_shco_login_box.getProperty("login.Back")             | Tran_shco_login_box.getProperty("login.Back")             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales |
| --- | --------- | -------------------- |
| 47  | getValue  | ).toUpperCase(       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 120 | userrequest    |            |
| 129 | userrequestsoc |            |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 29  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                                           |
| 30  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";                                |
| 31  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/";                       |
| 41  | if (sIdSoc == null)                                                                                                     |
| 44  | if (cookies != null)                                                                                                    |
| 46  | if ("M4_ORGANIZATION".equals(ck.getName())) {                                                                           |
| 122 | if (sOrg == "") {                                                                                                       |
| 124 | } else {                                                                                                                |
| 134 | if (value != "") {                                                                                                      |
| 136 | }else{                                                                                                                  |
| 137 | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){                                        |
| 139 | }else{                                                                                                                  |
| 140 | alert(login_WithOutCodeC);                                                                                              |
| 167 | if (Tran_tc_login.getProperty("ChangePwd.BackHome")!= null) {                                                           |
| 125 | expresión de cálculo/transformación: document.location.href="/tctools/cprequest/tc_login_wz_person_data?SOC_C=" + sOrg; |
| 132 | expresión de cálculo/transformación: var sUrl = "/tctools/cprequest/tc_login_wz_person_data.jsp?SOC_C=" + value;        |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 22  | /tctools/tc_frame_options.jsp     |
| 53  | /shco_g0/shco_gen_taglib.jsp      |
| 54  | /shco_g0/shco_gen_lang.jsp        |
| 55  | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 67  | /translations/tc_login_&lt;%=zlanguser%&gt;.js             |
| 68  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js       |
| 76  | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 77  | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 80  | /style/cds.css                                             |
| 83  | /images/cegid/favicon.ico                                  |
| 86  | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 87  | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 123 | /tctools/cprequest/tc_login_wz_person_data.jsp             |
| 125 | /tctools/cprequest/tc_login_wz_person_data?SOC_C=          |
| 152 | /library/framework/common.vue.js                           |
| 153 | /tctools/cprequest/tc_login_wz_client_code.vue.js          |
| 158 | /tctools/cprequest/tc_login_wz_person_data.jsp             |
| 19  | com.meta4.jsp                                              |
| 22  | /tctools/tc_frame_options.jsp                              |
| 53  | /shco_g0/shco_gen_taglib.jsp                               |
| 54  | /shco_g0/shco_gen_lang.jsp                                 |
| 55  | /shco_g0/shco_login_box_trans.jsp                          |
| 132 | /tctools/cprequest/tc_login_wz_person_data.jsp?SOC_C=      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ----------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 22  | /tctools/tc_frame_options.jsp                         | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 53  | /shco_g0/shco_gen_taglib.jsp                          | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 54  | /shco_g0/shco_gen_lang.jsp                            | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 55  | /shco_g0/shco_login_box_trans.jsp                     | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 67  | /translations/tc_login_&lt;%=zlanguser%&gt;.js        | dinámica   | P06                                                                                             |
| BASE   | 68  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js  | dinámica   | P06                                                                                             |
| BASE   | 86  | /library/npm/vue@3/dist/vue.global.prod.js            | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                             |
| BASE   | 87  | /library/npm/vuetify@3/dist/vuetify.min.js            | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                             |
| BASE   | 123 | /tctools/cprequest/tc_login_wz_person_data.jsp        | contextual | [tctools/cprequest/tc_login_wz_person_data.jsp](tctools--cprequest--tc_login_wz_person_data.md) |
| BASE   | 152 | /library/framework/common.vue.js                      | contextual | &#96;library/framework/common.vue.js&#96;                                                       |
| BASE   | 153 | /tctools/cprequest/tc_login_wz_client_code.vue.js     | contextual | &#96;tctools/cprequest/tc_login_wz_client_code.vue.js&#96;                                      |
| BASE   | 158 | /tctools/cprequest/tc_login_wz_person_data.jsp        | contextual | [tctools/cprequest/tc_login_wz_person_data.jsp](tctools--cprequest--tc_login_wz_person_data.md) |
| BASE   | 19  | com.meta4.jsp                                         | ausente    | P06                                                                                             |
| BASE   | 22  | /tctools/tc_frame_options.jsp                         | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 53  | /shco_g0/shco_gen_taglib.jsp                          | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 54  | /shco_g0/shco_gen_lang.jsp                            | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 55  | /shco_g0/shco_login_box_trans.jsp                     | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 132 | /tctools/cprequest/tc_login_wz_person_data.jsp?SOC_C= | contextual | [tctools/cprequest/tc_login_wz_person_data.jsp](tctools--cprequest--tc_login_wz_person_data.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_client_code.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
