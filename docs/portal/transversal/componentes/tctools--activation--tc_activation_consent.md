# tc_activation_consent

Identificador: `tctools/activation/tc_activation_consent.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                             | Texto                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ámbito | Diccionario                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| activationConsent.activationText  | Al hacer clic en el botón "Activa tu cuenta", aceptas implícitamente activar tu cuenta y mantener diligentemente tu contraseña. Serás responsable de proteger la confidencialidad de tu usuario y contraseña. Está terminantemente prohibido transmitir tu nombre de usuario y contraseña a terceros. En caso de incumplimiento de esta prohibición, serás el único responsable de las acciones no autorizadas realizadas por quienes utilicen tu usuario. | BASE   | [translations/tc_login_es.properties:L44](../../referencias/literales/tc_login_es.md) |
| activationConsent.activationTitle | Advertencia                                                                                                                                                                                                                                                                                                                                                                                                                                                | BASE   | [translations/tc_login_es.properties:L45](../../referencias/literales/tc_login_es.md) |
| activationConsent.button          | Continuar                                                                                                                                                                                                                                                                                                                                                                                                                                                  | BASE   | [translations/tc_login_es.properties:L46](../../referencias/literales/tc_login_es.md) |
| activationConsent.inactiveAccount | Tu cuenta de usuario no está activada. Si tienes contraseña en la aplicación, recupérala y podrás activarla. Si tu contraseña es de un sistema externo, contacta con tu adminisrador.                                                                                                                                                                                                                                                                      | BASE   | [translations/tc_login_es.properties:L47](../../referencias/literales/tc_login_es.md) |
| activationConsent.title           | Información                                                                                                                                                                                                                                                                                                                                                                                                                                                | BASE   | [translations/tc_login_es.properties:L48](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/activation/tc_activation_consent.jsp](../../../../clon_portal/portal/tctools/activation/tc_activation_consent.jsp) | `e45f89a5c9c8b62dfc427aa6d033cb2c74a06aee70eba97e1c504b5f43627d5c` |    147 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/activation/tc_activation_consent.jsp](../../../../clon_portal/portal/tctools/activation/tc_activation_consent.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                               | Resolución estática parcial                                    |
| --- | ---------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| 26  | zlanguser              | "2"                                                            | 2                                                              |
| 27  | languageWhenForwarding | (String) request.getAttribute("languageWhenForwarding")        | (String) request.getAttribute("languageWhenForwarding")        |
| 37  | sActionPage            | "/"                                                            | /                                                              |
| 39  | sTitle                 | Tran_tc_login.getProperty("activationConsent.title")           | Tran_tc_login.getProperty("activationConsent.title")           |
| 40  | sErrorMessage          | Tran_tc_login.getProperty("activationConsent.inactiveAccount") | Tran_tc_login.getProperty("activationConsent.inactiveAccount") |
| 41  | sButtonName            | ""                                                             |                                                                |
| 43  | consentRequired        | setConsentParam(request, zlanguser)                            | setConsentParam(request, zlanguser)                            |
| 57  | hasToConsent           | false                                                          | false                                                          |
| 58  | consentParam           | null                                                           | null                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 29  | if (languageWhenForwarding != null) zlanguser = languageWhenForwarding;                                                                    |
| 45  | if (consentRequired != null &amp;&amp; languageWhenForwarding != null) {                                                                   |
| 46  | expresión de cálculo/transformación: sActionPage = "/tctools/activation/tc_activation_consent_action.jsp" + "?" + "CP=" + consentRequired; |

### Includes, navegación y dependencias

| L   | Include                     |
| --- | --------------------------- |
| 33  | /tctools/tc_login_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 96  | /library/npm/@mdi/font@4.x/css/materialdesignicons.min.css |
| 97  | /library/npm/vuetify@3/dist/vuetify.min.css                |
| 100 | /style/cds.css                                             |
| 103 | /images/cegid/favicon.ico                                  |
| 106 | /library/npm/vue@3/dist/vue.global.prod.js                 |
| 107 | /library/npm/vuetify@3/dist/vuetify.min.js                 |
| 115 | /translations/tc_login_&lt;%=zlanguser%&gt;.js             |
| 123 | /library/framework/common.vue.js                           |
| 124 | /tctools/_change_password_operation.vue.js                 |
| 21  | com.meta4.jsp                                              |
| 33  | /tctools/tc_login_trans.jsp                                |
| 46  | /tctools/activation/tc_activation_consent_action.jsp       |
| 60  | com.meta4.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                           |
| ------ | --- | ---------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| BASE   | 33  | /tctools/tc_login_trans.jsp                          | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                                                    |
| BASE   | 106 | /library/npm/vue@3/dist/vue.global.prod.js           | contextual | &#96;library/npm/vue@3/dist/vue.global.prod.js&#96;                                                         |
| BASE   | 107 | /library/npm/vuetify@3/dist/vuetify.min.js           | contextual | &#96;library/npm/vuetify@3/dist/vuetify.min.js&#96;                                                         |
| BASE   | 115 | /translations/tc_login_&lt;%=zlanguser%&gt;.js       | dinámica   | P06                                                                                                         |
| BASE   | 123 | /library/framework/common.vue.js                     | contextual | &#96;library/framework/common.vue.js&#96;                                                                   |
| BASE   | 124 | /tctools/_change_password_operation.vue.js           | contextual | &#96;tctools/_change_password_operation.vue.js&#96;                                                         |
| BASE   | 21  | com.meta4.jsp                                        | ausente    | P06                                                                                                         |
| BASE   | 33  | /tctools/tc_login_trans.jsp                          | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md)                                                    |
| BASE   | 46  | /tctools/activation/tc_activation_consent_action.jsp | contextual | [tctools/activation/tc_activation_consent_action.jsp](tctools--activation--tc_activation_consent_action.md) |
| BASE   | 60  | com.meta4.jsp                                        | ausente    | P06                                                                                                         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/activation/tc_activation_consent.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
