# double_factor_setup

Identificador: `tctools/dfactor/double_factor_setup.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto                                                                                                                                                                                                                 | Ámbito | Diccionario                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| accountlabel  | Cuenta                                                                                                                                                                                                                | BASE   | [translations/double_factor_setup_es.properties:L11](../../referencias/literales/double_factor_setup_es.md) |
| finish        | Terminar                                                                                                                                                                                                              | BASE   | [translations/double_factor_setup_es.properties:L15](../../referencias/literales/double_factor_setup_es.md) |
| keylabel      | Clave                                                                                                                                                                                                                 | BASE   | [translations/double_factor_setup_es.properties:L17](../../referencias/literales/double_factor_setup_es.md) |
| notverified   | No se ha podido realizar la verificación del código.                                                                                                                                                                  | BASE   | [translations/double_factor_setup_es.properties:L18](../../referencias/literales/double_factor_setup_es.md) |
| setup.title   | Configuración del doble factor de autenticación                                                                                                                                                                       | BASE   | [translations/double_factor_setup_es.properties:L19](../../referencias/literales/double_factor_setup_es.md) |
| textgoodsetup | Recuerda que, por seguridad, el enlace para acceder a esta información expira. Si no introduces la clave en tu dispositivo ahora, puedes tener que pedirle a tu administrador que te envíe un nuevo enlace más tarde. | BASE   | [translations/double_factor_setup_es.properties:L20](../../referencias/literales/double_factor_setup_es.md) |
| textmain      | Puedes configurar tu cuenta utilizando una aplicación de autenticación, que debes tener instalada en tu teléfono móvil. Desde tu aplicación de autenticación, puedes introducir tu cuenta y clave.                    | BASE   | [translations/double_factor_setup_es.properties:L22](../../referencias/literales/double_factor_setup_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/dfactor/double_factor_setup.jsp](../../../../clon_portal/portal/tctools/dfactor/double_factor_setup.jsp) | `207029a31f75e2d3fdb960660c8e50376e9fb32dca49373556031415e7823717` |    156 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/dfactor/double_factor_setup.jsp](../../../../clon_portal/portal/tctools/dfactor/double_factor_setup.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 118 | img     | class=mb-4; alt=cegid; src=/style/images/logo-pn-desktop.svg                                                                 |
| 145 | input   | type=button; class=text-button primary--text; value=JSP_EXPR_Tran_double_password.getProperty(; onclick=javascript:finish(); |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                                                     | Resolución estática parcial                                                          |
| --- | ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 32  | sQRCodeImg   | ""                                                                                   |                                                                                      |
| 33  | sIssuer      | "Peoplenet"                                                                          | Peoplenet                                                                            |
| 34  | sURLComplete | "/"                                                                                  | /                                                                                    |
| 37  | iResult      | oauthfactor.generateKeyFromToken ( request, key, ticket, user, lang, code, details ) | oauthfactor.generateKeyFromToken ( request, key, ticket, user, lang, code, details ) |
| 39  | zlang        | lang.toString()                                                                      | lang.toString()                                                                      |
| 40  | sTicket      | ticket.toString()                                                                    | ticket.toString()                                                                    |
| 41  | sIdAppUser   | user.toString()                                                                      | user.toString()                                                                      |
| 43  | sCode        | code.toString()                                                                      | code.toString()                                                                      |
| 44  | sDetails     | details.toString()                                                                   | details.toString()                                                                   |
| 48  | iLang        | Integer.parseInt(zlang)                                                              | Integer.parseInt(zlang)                                                              |
| 49  | sCompleteURL | CheckConfig.setBadLoginLink(iLang)                                                   | CheckConfig.setBadLoginLink(iLang)                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 65  | finish     |            |
| 71  | verifycode |            |

| L   | Condición / acción / mensaje literal                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | if (sSecretKey != null &amp;&amp; !sSecretKey.equals("")) sQRCodeImg = oauthfactor.getQRCodeFromKey(sSecretKey, sIdAppUser, sIssuer); |
| 77  | if (inputCode == "")                                                                                                                  |
| 83  | if (/^\d{6}$/.test(inputCode)) {                                                                                                      |
| 84  | } else {                                                                                                                              |
| 89  | if (bIsError == true)                                                                                                                 |
| 91  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined"){                                                      |
| 93  | }else{                                                                                                                                |
| 94  | alert(sErrorMessage);                                                                                                                 |
| 98  | else                                                                                                                                  |
| 124 | &lt;% if (iResult == -1) {%&gt;                                                                                                       |
| 126 | &lt;% } else if (iResult == 1) {%&gt;                                                                                                 |
| 136 | &lt;% } else { %&gt;                                                                                                                  |
| 137 | &lt;% if (sDetails != null &amp;&amp; !sDetails.equals("")){%&gt;                                                                     |
| 139 | &lt;%} else if (sCode != null &amp;&amp; !sCode.equals("")) {%&gt;                                                                    |
| 48  | expresión de cálculo/transformación: int iLang = Integer.parseInt(zlang);                                                             |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 52  | /shco_g0/shco_gen_taglib.jsp |
| 53  | /shco_g0/shco_gen_lang.jsp   |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 63  | /translations/double_factor_setup_&lt;%=zlanguser%&gt;.js |
| 67  | &lt;%=sCompleteURL%&gt;                                   |
| 105 | /library/npm/vuetify@3/dist/vuetify.min.css               |
| 106 | /style/cds.css                                            |
| 107 | /images/cegid/favicon.ico                                 |
| 118 | /style/images/logo-pn-desktop.svg                         |
| 52  | /shco_g0/shco_gen_taglib.jsp                              |
| 53  | /shco_g0/shco_gen_lang.jsp                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                          |
| ------ | --- | --------------------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| BASE   | 52  | /shco_g0/shco_gen_taglib.jsp                              | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 53  | /shco_g0/shco_gen_lang.jsp                                | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)     |
| BASE   | 63  | /translations/double_factor_setup_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                        |
| BASE   | 67  | &lt;%=sCompleteURL%&gt;                                   | dinámica   | P06                                                                        |
| BASE   | 52  | /shco_g0/shco_gen_taglib.jsp                              | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md) |
| BASE   | 53  | /shco_g0/shco_gen_lang.jsp                                | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/dfactor/double_factor_setup.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
