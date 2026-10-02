# tc_login_bag

Identificador: `tctools/tc_login_bag.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/tc_login_bag.jsp](../../../../clon_portal/portal/tctools/tc_login_bag.jsp) | `dfc63f1f0094788a102e6b2bf29954d4afb5c42eeea5a8d912404c804bbc4399` |     52 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/tc_login_bag.jsp](../../../../clon_portal/portal/tctools/tc_login_bag.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal          |
| --- | --------------- | ----------------------- |
| 33  | browser         | getParameter("browser") |
| 34  | lang            | getParameter("lang")    |

| L   | Variable          | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 13  | zappprod          | zsessionmanager.getProductID().toLowerCase()                                  | zsessionmanager.getProductID().toLowerCase()                                  |
| 17  | zmemeterno        | "0"                                                                           | 0                                                                             |
| 18  | zmemnormal        | "2"                                                                           | 2                                                                             |
| 20  | zcssuser          | "100"                                                                         | 100                                                                           |
| 21  | zNavrc            | "0"                                                                           | 0                                                                             |
| 28  | zTranslationsPath | "/translations/"                                                              | /translations/                                                                |
| 30  | zusertempuri      | zsessionmanager.getUserTempURI()                                              | zsessionmanager.getUserTempURI()                                              |
| 31  | iLang             | zsessionmanager.getLanguageID()                                               | zsessionmanager.getLanguageID()                                               |
| 32  | zlang             | ""                                                                            |                                                                               |
| 33  | strbrowser        | request.getParameter("browser")                                               | request.getParameter("browser")                                               |
| 43  | zlanguser         | zlang                                                                         |                                                                               |
| 44  | zLangFolder       | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) |
| 45  | zsLocalizeHelp    | ""                                                                            |                                                                               |
| 46  | z_gHelpFolder     | "help"                                                                        | help                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                  |
| --- | ----------------------------------------------------------------------------------------------------- |
| 22  | if (oSavParams != null){                                                                              |
| 25  | if ((zNavrc==null)&#124;&#124;(zNavrc.equals("")) &#124;&#124;(zappprod.equals("tec"))){zNavrc ="0";} |
| 36  | if ((zlang==null)&#124;&#124;(zlang.equals(""))){                                                     |
| 39  | if (zsessionmanager != null) {                                                                        |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/tc_login_bag.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
