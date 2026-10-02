# tc_last_connection

Identificador: `tctools/tc_last_connection.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [tctools/espanol/tc_last_connection.jsp](../../../../clon_portal/portal/tctools/espanol/tc_last_connection.jsp) | `f5f05199e6a2e7340d3eecaad5c63b178a55599721194a7af60cc12834adb267` |      9 |
| BASE / compartido | [tctools/tc_last_connection.jsp](../../../../clon_portal/portal/tctools/tc_last_connection.jsp)                 | `53ced7c67cd3eed4b2476c7dbab756785c16741328da49c85a3f616968525b3f` |    111 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [tctools/espanol/tc_last_connection.jsp](../../../../clon_portal/portal/tctools/espanol/tc_last_connection.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                   |
| --- | ------------------------- |
| 9   | ../tc_last_connection.jsp |

| L   | Destino / recurso         |
| --- | ------------------------- |
| 9   | ../tc_last_connection.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [tctools/tc_last_connection.jsp](../../../../clon_portal/portal/tctools/tc_last_connection.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable              | Expresión fuente                                         | Resolución estática parcial                              |
| --- | --------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| 23  | showLastConnection    | logonInfo.get("SHOW_LAST_CONNECTION")                    | logonInfo.get("SHOW_LAST_CONNECTION")                    |
| 24  | dateLastConnectionGMT | logonInfo.get("DATE_LAST_CON_GMT")                       | logonInfo.get("DATE_LAST_CON_GMT")                       |
| 25  | dateConnectionGMT     | logonInfo.get("DATE_CON_GMT")                            | logonInfo.get("DATE_CON_GMT")                            |
| 81  | sM4Obj                | "SAU_LOGON_INFO"                                         | SAU_LOGON_INFO                                           |
| 82  | sNode                 | "SAU_LOGON_INFO"                                         | SAU_LOGON_INFO                                           |
| 83  | sMethod               | "GET_LOGON_INFO"                                         | GET_LOGON_INFO                                           |
| 97  | dateCon               | m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_CON")        | m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_CON")        |
| 98  | dateLastCon           | m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_LAST_CON")   | m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_LAST_CON")   |
| 99  | showLastConnection    | m.getItem(sNode, sM4Obj, sNode, "-1", "SHOW_LOGON_INFO") | m.getItem(sNode, sM4Obj, sNode, "-1", "SHOW_LOGON_INFO") |
| 100 | iShowLastConnection   | (int) Double.parseDouble(showLastConnection)             | (int) Double.parseDouble(showLastConnection)             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                          |
| --- | --------- | --------------------------------------------- |
| 97  | getItem   | sNode, sM4Obj, sNode, "-1", "DATE_CON"        |
| 98  | getItem   | sNode, sM4Obj, sNode, "-1", "DATE_LAST_CON"   |
| 99  | getItem   | sNode, sM4Obj, sNode, "-1", "SHOW_LOGON_INFO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 42  | if (showLastConnection === '1') {    |
| 43  | if (dateLastConnectionGMT !== '') {  |
| 49  | if (dateConnectionGMT !== '') {      |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                              |
| --- | ---------------------------------------------- |
| 20  | /translations/tc_login_&lt;%=zlanguser%&gt;.js |
| 77  | com.meta4.jsp                                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                |
| ------ | --- | ---------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 9   | ../tc_last_connection.jsp                      | física     | [tctools/tc_last_connection.jsp](tctools--tc_last_connection.md) |
| BASE   | 9   | ../tc_last_connection.jsp                      | física     | [tctools/tc_last_connection.jsp](tctools--tc_last_connection.md) |
| BASE   | 20  | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                              |
| BASE   | 77  | com.meta4.jsp                                  | ausente    | P06                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/tc_last_connection.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
