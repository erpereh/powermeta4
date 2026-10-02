# shco_gen_bag

Identificador: `shco_g0/shco_gen_bag.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_bag.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_bag.jsp) | `2327ed8e1945a65e7ff64c19ea812ee0a19e4a2feaec79b11ebbdd385c41407a` |    115 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_bag.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_bag.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave   | Acceso literal                     |
| --- | ----------------- | ---------------------------------- |
| 28  | SHCO_CSS          | getBagEntries("SHCO_CSS")          |
| 34  | SHCO_ROLE         | getBagEntries("SHCO_ROLE")         |
| 35  | browser           | getBagEntries("browser")           |
| 36  | SHCO_FILTER       | getBagEntries("SHCO_FILTER")       |
| 37  | SHCO_ID_CURRENCY  | getBagEntries("SHCO_ID_CURRENCY")  |
| 38  | SHCO_NM_CURRENCY  | getBagEntries("SHCO_NM_CURRENCY")  |
| 39  | SHCO_EX_TYPE      | getBagEntries("SHCO_EX_TYPE")      |
| 40  | SHCO_DEC_NB       | getBagEntries("SHCO_DEC_NB")       |
| 41  | SHCO_ZUR_CURR     | getBagEntries("SHCO_ZUR_CURR")     |
| 42  | SHCO_ORGANIZATION | getBagEntries("SHCO_ORGANIZATION") |
| 43  | LOGIN_URL         | getBagEntries("LOGIN_URL")         |
| 46  | SHCO_STANDAR      | getBagEntries("SHCO_STANDAR")      |
| 47  | SHCO_JOB_POST     | getBagEntries("SHCO_JOB_POST")     |
| 48  | SHCO_POP          | getBagEntries("SHCO_POP")          |
| 49  | SHCO_PERSON       | getBagEntries("SHCO_PERSON")       |
| 50  | SHCO_ACTIVE_PAY   | getBagEntries("SHCO_ACTIVE_PAY")   |
| 61  | browser           | getParameter("browser")            |
| 62  | lang              | getParameter("lang")               |
| 83  | lang              | getBagEntries("lang")              |
| 99  | PORTAL_URL        | getBagEntries("PORTAL_URL")        |

| L   | Variable          | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 15  | zappprod          | zsessionmanager.getProductID().toLowerCase()                                  | zsessionmanager.getProductID().toLowerCase()                                  |
| 18  | zbarbot           | "1111"                                                                        | 1111                                                                          |
| 19  | znivelmenu        | "1"                                                                           | 1                                                                             |
| 20  | zvuelta           | 5                                                                             | 5                                                                             |
| 21  | zventanas         | "*"                                                                           | *                                                                             |
| 24  | zmemeterno        | "0"                                                                           | 0                                                                             |
| 25  | zmemnormal        | "2"                                                                           | 2                                                                             |
| 28  | zcssuser          | zsesion.getBagEntries("SHCO_CSS")                                             | zsesion.getBagEntries("SHCO_CSS")                                             |
| 29  | zcssuser          | (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS")                  | (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS")                  |
| 30  | zNavrc            | (String) oSavParams.getParameterValue("PORTAL_PARAM", "NAV_RC")               | (String) oSavParams.getParameterValue("PORTAL_PARAM", "NAV_RC")               |
| 34  | zrole             | zsesion.getBagEntries("SHCO_ROLE")                                            | zsesion.getBagEntries("SHCO_ROLE")                                            |
| 35  | zbrowser          | zsesion.getBagEntries("browser")                                              | zsesion.getBagEntries("browser")                                              |
| 36  | zfilter           | zsesion.getBagEntries("SHCO_FILTER")                                          | zsesion.getBagEntries("SHCO_FILTER")                                          |
| 37  | zidcur            | zsesion.getBagEntries("SHCO_ID_CURRENCY")                                     | zsesion.getBagEntries("SHCO_ID_CURRENCY")                                     |
| 38  | znmcur            | zsesion.getBagEntries("SHCO_NM_CURRENCY")                                     | zsesion.getBagEntries("SHCO_NM_CURRENCY")                                     |
| 39  | zextype           | zsesion.getBagEntries("SHCO_EX_TYPE")                                         | zsesion.getBagEntries("SHCO_EX_TYPE")                                         |
| 40  | zdecnb            | zsesion.getBagEntries("SHCO_DEC_NB")                                          | zsesion.getBagEntries("SHCO_DEC_NB")                                          |
| 41  | zzurcurr          | zsesion.getBagEntries("SHCO_ZUR_CURR")                                        | zsesion.getBagEntries("SHCO_ZUR_CURR")                                        |
| 42  | zsco              | zsesion.getBagEntries("SHCO_ORGANIZATION")                                    | zsesion.getBagEntries("SHCO_ORGANIZATION")                                    |
| 43  | g_zsLoginURL      | zsesion.getBagEntries("LOGIN_URL")                                            | zsesion.getBagEntries("LOGIN_URL")                                            |
| 46  | zstandar          | zsesion.getBagEntries("SHCO_STANDAR")                                         | zsesion.getBagEntries("SHCO_STANDAR")                                         |
| 47  | zjobpost          | zsesion.getBagEntries("SHCO_JOB_POST")                                        | zsesion.getBagEntries("SHCO_JOB_POST")                                        |
| 48  | zpop              | zsesion.getBagEntries("SHCO_POP")                                             | zsesion.getBagEntries("SHCO_POP")                                             |
| 49  | zperson           | zsesion.getBagEntries("SHCO_PERSON")                                          | zsesion.getBagEntries("SHCO_PERSON")                                          |
| 50  | zactivepay        | zsesion.getBagEntries("SHCO_ACTIVE_PAY")                                      | zsesion.getBagEntries("SHCO_ACTIVE_PAY")                                      |
| 53  | zerrornivel2      | "0"                                                                           | 0                                                                             |
| 54  | zTranslationsPath | "/translations/"                                                              | /translations/                                                                |
| 56  | zusertempuri      | zsessionmanager.getUserTempURI()                                              | zsessionmanager.getUserTempURI()                                              |
| 57  | iLang             | zsessionmanager.getLanguageID()                                               | zsessionmanager.getLanguageID()                                               |
| 59  | strbrowser        | ""                                                                            |                                                                               |
| 60  | zlang             | ""                                                                            |                                                                               |
| 74  | zlanguser         | zlang                                                                         |                                                                               |
| 75  | tiponav           | zbrowser                                                                      | zsesion.getBagEntries("browser")                                              |
| 83  | zlangvalue        | zsesion.getBagEntries("lang")                                                 | zsesion.getBagEntries("lang")                                                 |
| 87  | zLangFolder       | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) |
| 88  | zsLocalizeHelp    | ""                                                                            |                                                                               |
| 89  | z_gHelpFolder     | "help"                                                                        | help                                                                          |
| 98  | zappmn            | (String) oSavParams.getParameterValue("PORTAL_PARAM", "_APP_MN")              | (String) oSavParams.getParameterValue("PORTAL_PARAM", "_APP_MN")              |
| 99  | z_gPortal         | zsesion.getBagEntries("PORTAL_URL")                                           | zsesion.getBagEntries("PORTAL_URL")                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 31  | if ((zNavrc==null)&#124;&#124;(zNavrc.equals("")) &#124;&#124;(zappprod.equals("tec"))){zNavrc ="0";}                                    |
| 64  | if ((zlang==null)&#124;&#124;(zlang.equals(""))){                                                                                        |
| 67  | if (zsessionmanager != null) {                                                                                                           |
| 76  | if (tiponav == null){                                                                                                                    |
| 77  | if (strbrowser == null){                                                                                                                 |
| 79  | }else{                                                                                                                                   |
| 84  | if (zlangvalue == null){                                                                                                                 |
| 103 | if (zappprod != null &amp;&amp; !zappprod.equals("") &amp;&amp; zappprod.equalsIgnoreCase("exp")) zappprod = "ess";                      |
| 104 | if (!zappprod.equals("")){%&gt;                                                                                                          |
| 105 | expresión de cálculo/transformación: &lt;jsp:include page='&lt;%="/shco_g0_" + zappprod + "/shco_gen_bag.jsp" %&gt;' flush="false" /&gt; |

### Includes, navegación y dependencias

| L   | Include                         |
| --- | ------------------------------- |
| 94  | ../shco_g0/shco_gen_formats.jsp |
| 105 | &lt;%=                          |

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 94  | ../shco_g0/shco_gen_formats.jsp |
| 105 | /shco_gen_bag.jsp               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                      | Resolución | Ficha / candidato                                            |
| ------ | --- | ------------------------------- | ---------- | ------------------------------------------------------------ |
| BASE   | 94  | ../shco_g0/shco_gen_formats.jsp | física     | [shco_g0/shco_gen_formats.jsp](shco_g0--shco_gen_formats.md) |
| BASE   | 105 | &lt;%=                          | dinámica   | P06                                                          |
| BASE   | 94  | ../shco_g0/shco_gen_formats.jsp | física     | [shco_g0/shco_gen_formats.jsp](shco_g0--shco_gen_formats.md) |
| BASE   | 105 | /shco_gen_bag.jsp               | ausente    | P06                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_bag.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
