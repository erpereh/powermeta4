# tc_wz_change_pass_action.vue

Identificador: `tctools/cpaction/tc_wz_change_pass_action.vue.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto     | Ámbito | Diccionario                                                                                       |
| ------------------ | --------- | ------ | ------------------------------------------------------------------------------------------------- |
| login.SendContinue | Continuar | BASE   | [translations/shco_login_box_es.properties:L62](../../referencias/literales/shco_login_box_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cpaction/tc_wz_change_pass_action.vue.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_wz_change_pass_action.vue.jsp) | `0105268bde00acec0ed8328dad255f2fd1a1245a3e29a2fe00277849ef52e519` |    159 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cpaction/tc_wz_change_pass_action.vue.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_wz_change_pass_action.vue.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                           |
| --- | --------------- | ---------------------------------------- |
| 18  | M4_NEW_PASSWORD | getParameter(request, "M4_NEW_PASSWORD") |

| L   | Variable            | Expresión fuente                                | Resolución estática parcial                     |
| --- | ------------------- | ----------------------------------------------- | ----------------------------------------------- |
| 19  | zlang               | (String)session.getAttribute("FP_M4L_C")        | (String)session.getAttribute("FP_M4L_C")        |
| 82  | iCode               | -1                                              | -1                                              |
| 83  | sUrlLoginComplete   | (String)session.getAttribute("FP_URL_COMPLETE") | (String)session.getAttribute("FP_URL_COMPLETE") |
| 84  | sUrlLoginInComplete | "/tctools/cpaction/tc_wz_change_pass.jsp"       | /tctools/cpaction/tc_wz_change_pass.jsp         |
| 85  | sCoda               | (String)session.getAttribute("FP_M4T_C")        | (String)session.getAttribute("FP_M4T_C")        |
| 96  | sCode               | code.toString()                                 | code.toString()                                 |
| 97  | sDetails            | details.toString()                              | details.toString()                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                             |
| --- | ------------------------------------------------------------------------------------------------ |
| 20  | if ((zlang == null) &#124;&#124; (zlang.equals(""))) { zlang = "2"; }                            |
| 86  | if (sCoda != null &amp;&amp; !sCoda.equals(""))                                                  |
| 107 | if (oM4Log.isTraceEnabled())                                                                     |
| 114 | if (iCode == 0)                                                                                  |
| 123 | else                                                                                             |
| 125 | if (sDetails != null &amp;&amp; !sDetails.equals(""))                                            |
| 134 | } else if (sCode != null &amp;&amp; !sCode.equals("")) {                                         |
| 141 | } else {                                                                                         |
| 88  | expresión de cálculo/transformación: sUrlLoginInComplete = sUrlLoginInComplete + "?TK=" + sCoda; |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 25  | /shco_g0/shco_gen_taglib.jsp      |
| 26  | /shco_g0/shco_gen_lang.jsp        |
| 27  | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 30  | /translations/tc_login_&lt;%=zlanguser%&gt;.js             |
| 41  | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 42  | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 45  | /style/cds.css                                             |
| 48  | /images/cegid/favicon.ico                                  |
| 51  | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 52  | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 65  | /library/framework/common.vue.js                           |
| 66  | /tctools/_user_message_page.vue.js                         |
| 22  | com.meta4.jsp                                              |
| 25  | /shco_g0/shco_gen_taglib.jsp                               |
| 26  | /shco_g0/shco_gen_lang.jsp                                 |
| 27  | /shco_g0/shco_login_box_trans.jsp                          |
| 84  | /tctools/cpaction/tc_wz_change_pass.jsp                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ---------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 25  | /shco_g0/shco_gen_taglib.jsp                   | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 26  | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 27  | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |
| BASE   | 30  | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                  |
| BASE   | 51  | /library/npm/vue@3/dist/vue.global.prod.js     | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                  |
| BASE   | 52  | /library/npm/vuetify@3/dist/vuetify.min.js     | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                  |
| BASE   | 65  | /library/framework/common.vue.js               | contextual | &#96;library/framework/common.vue.js&#96;                                            |
| BASE   | 66  | /tctools/_user_message_page.vue.js             | contextual | &#96;tctools/_user_message_page.vue.js&#96;                                          |
| BASE   | 22  | com.meta4.jsp                                  | ausente    | P06                                                                                  |
| BASE   | 25  | /shco_g0/shco_gen_taglib.jsp                   | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 26  | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 27  | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |
| BASE   | 84  | /tctools/cpaction/tc_wz_change_pass.jsp        | contextual | [tctools/cpaction/tc_wz_change_pass.jsp](tctools--cpaction--tc_wz_change_pass.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cpaction/tc_wz_change_pass_action.vue.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
