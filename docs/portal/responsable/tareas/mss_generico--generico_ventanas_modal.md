# generico_ventanas_modal

Identificador: `mss_generico/generico_ventanas_modal.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/generico_ventanas_modal.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/generico_ventanas_modal.jsp) | `65c17e13e69573acebc69837dc29a0ae48e7c84ca4e9653a6a98609d1cceccbb` |     50 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/generico_ventanas_modal.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/generico_ventanas_modal.jsp) | `65c17e13e69573acebc69837dc29a0ae48e7c84ca4e9653a6a98609d1cceccbb` |     50 |
| BASE / español    | [mss_generico/espanol/generico_ventanas_modal.jsp](../../../../clon_portal/portal/mss_generico/espanol/generico_ventanas_modal.jsp)                             | `65c17e13e69573acebc69837dc29a0ae48e7c84ca4e9653a6a98609d1cceccbb` |     50 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/generico_ventanas_modal.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/generico_ventanas_modal.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 38  | [valor dinámico] - [valor dinámico] |
| 43  | [valor dinámico] - [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------- |
| 43  | a       | href=javascript:m4navegarModal('&lt;%=ziniciointervalo%&gt;','&lt;%=zestado%&gt;');; title=Ver otros datos |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                              | Resolución estática parcial                    |
| --- | ---------------- | --------------------------------------------- | ---------------------------------------------- |
| 12  | zintervalo       | zcount/zventana                               | zcount/zventana                                |
| 13  | zresto           | zcount%zventana                               | zcount%zventana                                |
| 14  | zcontador        | 0                                             | 0                                              |
| 15  | zsalto           | 0                                             | 0                                              |
| 22  | ziniciointervalo | String.valueOf(1 + zcontador*zventana)        | {String.valueOf(1}{zcontador*zventana)}        |
| 23  | zfinintervalo2   | zcontador*zventana + zventana                 | {zcontador*zventana}{zventana}                 |
| 24  | zfinintervalo    | String.valueOf(zcontador*zventana + zventana) | {String.valueOf(zcontador*zventana}{zventana)} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos    |
| --- | -------------- | ------------- |
| 2   | m4navegarModal | inicio,estado |

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 16  | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                          |
| 25  | if (zfinintervalo2 &gt; zcount) {                                                                          |
| 30  | if(zsalto == zvuelta){                                                                                     |
| 36  | if (zinicios.equals(ziniciointervalo) == true){                                                            |
| 41  | else{                                                                                                      |
| 22  | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);     |
| 23  | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                   |
| 24  | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana); |
| 26  | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);          |
| 46  | expresión de cálculo/transformación: zsalto = zsalto + 1;                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso          |
| --- | -------------------------- |
| 43  | javascript:m4navegarModal( |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato |
| ------ | --- | -------------------------- | ---------- | ----------------- |
| COLL   | 43  | javascript:m4navegarModal( | dinámica   | P06               |
| IBER   | 43  | javascript:m4navegarModal( | dinámica   | P06               |
| BASE   | 43  | javascript:m4navegarModal( | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/generico_ventanas_modal.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
