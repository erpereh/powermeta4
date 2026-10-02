# double_factor_verification

Identificador: `tctools/dfactor/double_factor_verification.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                                                                                  | Ámbito | Diccionario                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| back               | Atrás                                                                                                                  | BASE   | [translations/double_factor_setup_es.properties:L12](../../referencias/literales/double_factor_setup_es.md) |
| finish             | Terminar                                                                                                               | BASE   | [translations/double_factor_setup_es.properties:L15](../../referencias/literales/double_factor_setup_es.md) |
| hint               | Recuerde que en el campo contraseña, debe introducir siempre su contraseña y el código de verificación a continuación. | BASE   | [translations/double_factor_setup_es.properties:L16](../../referencias/literales/double_factor_setup_es.md) |
| notverified        | No se ha podido realizar la verificación del código.                                                                   | BASE   | [translations/double_factor_setup_es.properties:L18](../../referencias/literales/double_factor_setup_es.md) |
| setup.title        | Configuración del doble factor de autenticación                                                                        | BASE   | [translations/double_factor_setup_es.properties:L19](../../referencias/literales/double_factor_setup_es.md) |
| verification.title | Verificación del doble factor de autenticación                                                                         | BASE   | [translations/double_factor_setup_es.properties:L24](../../referencias/literales/double_factor_setup_es.md) |
| verified           | El código ha sido verificado correctamente.                                                                            | BASE   | [translations/double_factor_setup_es.properties:L25](../../referencias/literales/double_factor_setup_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/dfactor/double_factor_verification.jsp](../../../../clon_portal/portal/tctools/dfactor/double_factor_verification.jsp) | `d616a3b9030299c6683ac312332d542ba1a3ddf4aa201091d17011e1f50252e1` |    118 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/dfactor/double_factor_verification.jsp](../../../../clon_portal/portal/tctools/dfactor/double_factor_verification.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| 71  | form    | id=double_factor_verification; name=double_factor_verification                                                     |
| 97  | input   | type=button; class=buttonForm; value=JSP_EXPR_Tran_double_password.getProperty(; onclick=javascript:history.back() |
| 107 | input   | type=button; class=buttonForm; value=JSP_EXPR_Tran_double_password.getProperty(; onclick=javascript:finish();      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 28  | iVerificationStatus | oauthfactor.validateVerificationCode ( request, lang, code, details ) | oauthfactor.validateVerificationCode ( request, lang, code, details ) |
| 30  | zlang               | lang.toString()                                                       | lang.toString()                                                       |
| 31  | sCode               | code.toString()                                                       | code.toString()                                                       |
| 32  | sDetails            | details.toString()                                                    | details.toString()                                                    |
| 34  | iLang               | Integer.parseInt(zlang)                                               | Integer.parseInt(zlang)                                               |
| 35  | sCompleteURL        | CheckConfig.setBadLoginLink(iLang)                                    | CheckConfig.setBadLoginLink(iLang)                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 53  | finish  |            |

| L   | Condición / acción / mensaje literal                                             |
| --- | -------------------------------------------------------------------------------- |
| 61  | &lt;% if(prod != null &amp;&amp; prod.equals("mobile")){ %&gt;                   |
| 63  | &lt;%} else {%&gt;                                                               |
| 75  | &lt;% if (iVerificationStatus &lt; 1){ %&gt;                                     |
| 80  | &lt;% if (sDetails != null &amp;&amp; !sDetails.equals("")){%&gt;                |
| 82  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){ |
| 84  | } else {                                                                         |
| 85  | alert(details);                                                                  |
| 87  | &lt;%} else if (sCode != null &amp;&amp; !sCode.equals("")) {%&gt;               |
| 89  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){ |
| 91  | } else {                                                                         |
| 92  | alert(&lt;%=sCode%&gt;);                                                         |
| 99  | &lt;% } else { %&gt;                                                             |
| 34  | expresión de cálculo/transformación: int iLang = Integer.parseInt(zlang);        |

### Includes, navegación y dependencias

| L   | Include                               |
| --- | ------------------------------------- |
| 38  | /shco_g0/shco_gen_taglib.jsp          |
| 39  | /shco_g0/shco_gen_lang.jsp            |
| 60  | /mobile/include_mobile_forgetpass.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 51  | /translations/double_factor_setup_&lt;%=zlanguser%&gt;.js |
| 55  | &lt;%=sCompleteURL%&gt;                                   |
| 62  | /style/tc_portal_fastlane_mobile.css                      |
| 64  | /style/tc_portal_fastlane.css                             |
| 38  | /shco_g0/shco_gen_taglib.jsp                              |
| 39  | /shco_g0/shco_gen_lang.jsp                                |
| 60  | /mobile/include_mobile_forgetpass.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                            |
| ------ | --- | --------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| BASE   | 38  | /shco_g0/shco_gen_taglib.jsp                              | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                   |
| BASE   | 39  | /shco_g0/shco_gen_lang.jsp                                | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                       |
| BASE   | 60  | /mobile/include_mobile_forgetpass.jsp                     | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md) |
| BASE   | 51  | /translations/double_factor_setup_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                          |
| BASE   | 55  | &lt;%=sCompleteURL%&gt;                                   | dinámica   | P06                                                                                          |
| BASE   | 38  | /shco_g0/shco_gen_taglib.jsp                              | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                   |
| BASE   | 39  | /shco_g0/shco_gen_lang.jsp                                | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                       |
| BASE   | 60  | /mobile/include_mobile_forgetpass.jsp                     | contextual | [mobile/include_mobile_forgetpass.jsp](../dependencias/mobile--include_mobile_forgetpass.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/dfactor/double_factor_verification.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
