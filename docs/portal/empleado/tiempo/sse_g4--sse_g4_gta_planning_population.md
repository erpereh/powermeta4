# sse_g4_gta_planning_population

Identificador: `sse_g4/sse_g4_gta_planning_population.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_population.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_population.jsp) | `3c6a1fe979274d7e4d561f78ecfeebff366479acb58faa244e88c16caebd155a` |     39 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_population.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_population.jsp)   | `3c6a1fe979274d7e4d561f78ecfeebff366479acb58faa244e88c16caebd155a` |     39 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_population.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_population.jsp) | `3c6a1fe979274d7e4d561f78ecfeebff366479acb58faa244e88c16caebd155a` |     39 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_population.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_population.jsp)                             | `3c6a1fe979274d7e4d561f78ecfeebff366479acb58faa244e88c16caebd155a` |     39 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_population.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_population.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente | Resolución estática parcial |
| --- | ------------ | ---------------- | --------------------------- |
| 3   | rowCss       | ""               |                             |
| 4   | popRowCss    | ""               |                             |
| 5   | popIdPers    | ""               |                             |
| 6   | popOrdPeriod | ""               |                             |
| 7   | idPop        | ""               |                             |
| 8   | popLastName  | ""               |                             |
| 9   | popFirstName | ""               |                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag     | Contrato declarado                                                     |
| --- | ------- | ---------------------------------------------------------------------- |
| 12  | m4:loop | from=0; to=new_Integer(new_Integer(zcountv16).intValue()-1).toString() |

| L   | Operación | Argumentos literales                                     |
| --- | --------- | -------------------------------------------------------- |
| 16  | getItem   | znodo16,zmeta4object,znodo16,m4lix,"STD_ID_HR"           |
| 17  | getItem   | znodo16,zmeta4object,znodo16,m4lix,"STD_OR_HR_PERIOD"))  |
| 19  | getItem   | znodo16,zmeta4object,znodo16,m4lix,"STD_N_FAMILY_NAME_1" |
| 20  | getItem   | znodo16,zmeta4object,znodo16,m4lix,"STD_N_FIRST_NAME"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22  | if(idSession.equals(popIdPers)){                                                                                                                             |
| 24  | }else{                                                                                                                                                       |
| 17  | expresión de cálculo/transformación: popOrdPeriod = String.valueOf((int)Float.parseFloat(t.getItem(znodo16,zmeta4object,znodo16,m4lix,"STD_OR_HR_PERIOD"))); |

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

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_population.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
