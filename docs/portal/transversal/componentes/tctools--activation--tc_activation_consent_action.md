# tc_activation_consent_action

Identificador: `tctools/activation/tc_activation_consent_action.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                               | Texto                                                                                              | Ámbito | Diccionario                                                                           |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| ChangePwd.Back                      | Volver                                                                                             | BASE   | [translations/tc_login_es.properties:L11](../../referencias/literales/tc_login_es.md) |
| activationConsent.activationError   | Se ha producido un error activando tu cuenta. Si el error persiste, consulta con el administrador. | BASE   | [translations/tc_login_es.properties:L42](../../referencias/literales/tc_login_es.md) |
| activationConsent.activationSuccess | Tu cuenta ha sido activada con éxito.                                                              | BASE   | [translations/tc_login_es.properties:L43](../../referencias/literales/tc_login_es.md) |
| activationConsent.title             | Información                                                                                        | BASE   | [translations/tc_login_es.properties:L48](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/activation/tc_activation_consent_action.jsp](../../../../clon_portal/portal/tctools/activation/tc_activation_consent_action.jsp) | `d9ff8e89d0dabb1ab47fbe6a80feb29064f971621432459dafb121ae14f33fb9` |    205 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/activation/tc_activation_consent_action.jsp](../../../../clon_portal/portal/tctools/activation/tc_activation_consent_action.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 66  | CP              | getParameter(request, "CP") |

| L   | Variable             | Expresión fuente                                                | Resolución estática parcial                                     |
| --- | -------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 24  | zlanguser            | Integer.toString(M4WebLanguages.getLanguageFromCookie(request)) | Integer.toString(M4WebLanguages.getLanguageFromCookie(request)) |
| 31  | sActionPage          | "/"                                                             | /                                                               |
| 32  | sTitle               | Tran_tc_login.getProperty("activationConsent.title")            | Tran_tc_login.getProperty("activationConsent.title")            |
| 33  | sErrorMessage        | Tran_tc_login.getProperty("activationConsent.activationError")  | Tran_tc_login.getProperty("activationConsent.activationError")  |
| 34  | sButtonName          | ""                                                              |                                                                 |
| 36  | setActivationConsent | setActivationConsentByAlias(request, zlanguser)                 | setActivationConsentByAlias(request, zlanguser)                 |
| 49  | consentStatus        | false                                                           | false                                                           |
| 66  | consentParam         | M4SafeRequest.getParameter(request, "CP")                       | M4SafeRequest.getParameter(request, "CP")                       |
| 99  | sM4Obj               | "SRTC_ACTIVATION_CONSENT"                                       | SRTC_ACTIVATION_CONSENT                                         |
| 100 | sNode                | "SRTC_ACTIVATION_CONSENT"                                       | SRTC_ACTIVATION_CONSENT                                         |
| 101 | sMethod              | "SET_ACTIVATION_CONSENT"                                        | SET_ACTIVATION_CONSENT                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                           |
| --- | -------------------------------------------------------------------------------------------------------------- |
| 37  | if (setActivationConsent == true)                                                                              |
| 67  | if (consentParam == null) {                                                                                    |
| 77  | if (alias == null &#124;&#124; !alias.equals(samlUserId)) {                                                    |
| 82  | if (domain == null &#124;&#124; !domain.equals(samlDomain)) {                                                  |
| 119 | if (type == M4Operations.M4_TYPE_NUMBER &amp;&amp; ((int) Double.parseDouble(methodResult.toString())) == 0) { |
| 122 | if (logger.isDebugEnabled()) logger.debug("[tc_activation_consent_action.jsp] Activation done for: " + alias); |
| 127 | if (m != null) {                                                                                               |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 25  | /shco_g0/shco_gen_taglib.jsp |
| 26  | /tctools/tc_login_trans.jsp  |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 153 | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 154 | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 157 | /style/cds.css                                             |
| 160 | /images/cegid/favicon.ico                                  |
| 163 | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 164 | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 181 | /library/framework/common.vue.js                           |
| 182 | /tctools/_change_password_operation.vue.js                 |
| 25  | /shco_g0/shco_gen_taglib.jsp                               |
| 26  | /tctools/tc_login_trans.jsp                                |
| 47  | com.meta4.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                 | Resolución | Ficha / candidato                                                          |
| ------ | --- | ------------------------------------------ | ---------- | -------------------------------------------------------------------------- |
| BASE   | 25  | /shco_g0/shco_gen_taglib.jsp               | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 26  | /tctools/tc_login_trans.jsp                | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                   |
| BASE   | 163 | /library/npm/vue@3/dist/vue.global.prod.js | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                        |
| BASE   | 164 | /library/npm/vuetify@3/dist/vuetify.min.js | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                        |
| BASE   | 181 | /library/framework/common.vue.js           | contextual | &#96;library/framework/common.vue.js&#96;                                  |
| BASE   | 182 | /tctools/_change_password_operation.vue.js | contextual | &#96;tctools/_change_password_operation.vue.js&#96;                        |
| BASE   | 25  | /shco_g0/shco_gen_taglib.jsp               | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 26  | /tctools/tc_login_trans.jsp                | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                   |
| BASE   | 47  | com.meta4.jsp                              | ausente    | P06                                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/activation/tc_activation_consent_action.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
