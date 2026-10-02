# shco_gen_include_disclaimer

Identificador: `shco_g0/shco_gen_include_disclaimer.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave     | Texto  | Ámbito | Diccionario                                                                          |
| --------- | ------ | ------ | ------------------------------------------------------------------------------------ |
| Menu.Help | Ayuda  | BASE   | [translations/shco_g0_es.properties:L90](../../referencias/literales/shco_g0_es.md)  |
| Menu.Top  | Arriba | BASE   | [translations/shco_g0_es.properties:L107](../../referencias/literales/shco_g0_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_include_disclaimer.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_include_disclaimer.jsp) | `f709f3a4480d749c2df32f43ce3b6201cc1d30509397dcd4c05c09b68b218433` |     60 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_include_disclaimer.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_include_disclaimer.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta              |
| --- | ------------------------------------- |
| 37  | [[valor dinámico]] [[valor dinámico]] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                           |
| --- | ------- | --------------------------------------------------- |
| 57  | a       | title=JSP_EXPR_Tran_shco_g0.getProperty(; href=#Top |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 13  | zTranslationsPath | "/translations/"                                                              | /translations/                                                                |
| 22  | iLang             | zsessionmanager.getLanguageID()                                               | zsessionmanager.getLanguageID()                                               |
| 23  | zLangFolder       | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL) |
| 24  | zhelp             | (String)request.getAttribute("zsLocalizeHelp")                                | (String)request.getAttribute("zsLocalizeHelp")                                |
| 25  | zsLocalizeHelp    | zhelp                                                                         | (String)request.getAttribute("zsLocalizeHelp")                                |
| 26  | z_gHelpFolder     | (String)request.getAttribute("zsHelpFolder")                                  | (String)request.getAttribute("zsHelpFolder")                                  |
| 27  | zappprod          | (String) zsessionmanager.getProductID().toLowerCase()                         | (String) zsessionmanager.getProductID().toLowerCase()                         |
| 33  | zSHCOLBHELP_val   | Tran_shco_g0.getProperty("Menu.Help")                                         | Tran_shco_g0.getProperty("Menu.Help")                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                     |
| --- | -------------------------------------------------------------------------------------------------------- |
| 40  | if (M4FileURIChecker.exists("/shco_g0_" + zappprod + "/shco_gen_menusup.jsp",pageContext)== false){%&gt; |
| 46  | if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){       |
| 53  | &lt;%}else{%&gt;                                                                                         |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../shco_g0/shco_gen_taglib.jsp          |
| 52  | &lt;%=(String)pageContext.getAttribute( |
| 54  | ../shco_g0/shco_gen_help_link.jsp       |

| L   | Destino / recurso                 |
| --- | --------------------------------- |
| 57  | #Top                              |
| 9   | ../shco_g0/shco_gen_taglib.jsp    |
| 40  | /shco_gen_menusup.jsp             |
| 45  | /shco_gen_help.jsp                |
| 54  | ../shco_g0/shco_gen_help_link.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp          | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 52  | &lt;%=(String)pageContext.getAttribute( | dinámica   | P06                                                              |
| BASE   | 54  | ../shco_g0/shco_gen_help_link.jsp       | física     | [shco_g0/shco_gen_help_link.jsp](shco_g0--shco_gen_help_link.md) |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp          | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 40  | /shco_gen_menusup.jsp                   | ausente    | P06                                                              |
| BASE   | 45  | /shco_gen_help.jsp                      | ausente    | P06                                                              |
| BASE   | 54  | ../shco_g0/shco_gen_help_link.jsp       | física     | [shco_g0/shco_gen_help_link.jsp](shco_g0--shco_gen_help_link.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_include_disclaimer.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
