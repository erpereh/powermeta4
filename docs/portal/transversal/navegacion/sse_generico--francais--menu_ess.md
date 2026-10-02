# menu_ess

Identificador: `sse_generico/francais/menu_ess.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_generico/francais/menu_ess.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/francais/menu_ess.jsp) | `9b4986a691f3fcb583225007188884755e39561d49f4c81320003f5520e83f09` |     13 |
| CYC / compartido  | [m4custom/CYC/sse_generico/francais/menu_ess.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/francais/menu_ess.jsp)   | `9b4986a691f3fcb583225007188884755e39561d49f4c81320003f5520e83f09` |     13 |
| IBER / compartido | [m4custom/IBER/sse_generico/francais/menu_ess.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/francais/menu_ess.jsp) | `9b4986a691f3fcb583225007188884755e39561d49f4c81320003f5520e83f09` |     13 |
| BASE / compartido | [sse_generico/francais/menu_ess.jsp](../../../../clon_portal/portal/sse_generico/francais/menu_ess.jsp)                             | `9b4986a691f3fcb583225007188884755e39561d49f4c81320003f5520e83f09` |     13 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/francais/menu_ess.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/francais/menu_ess.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave      | Acceso literal                        |
| --- | -------------------- | ------------------------------------- |
| 3   | IsKnownet            | getBagEntries("IsKnownet")            |
| 4   | Total_Server_Knownet | getBagEntries("Total_Server_Knownet") |

| L   | Variable              | Expresión fuente                                | Resolución estática parcial                     |
| --- | --------------------- | ----------------------------------------------- | ----------------------------------------------- |
| 3   | IsKnownet2            | zsesionKn.getBagEntries("IsKnownet")            | zsesionKn.getBagEntries("IsKnownet")            |
| 4   | Total_Server_Knownet2 | zsesionKn.getBagEntries("Total_Server_Knownet") | zsesionKn.getBagEntries("Total_Server_Knownet") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 6   | ../../sse_generico/sgco_gen_inc.jsp       |
| 7   | ../../sse_generico/sse_generico_trans.jsp |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 12  | /libreria/menu_sse_fra.js                 |
| 6   | ../../sse_generico/sgco_gen_inc.jsp       |
| 7   | ../../sse_generico/sse_generico_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                                                            |
| ------ | --- | ----------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| COLL   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| COLL   | 12  | /libreria/menu_sse_fra.js                 | contextual | [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md); [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md) |
| COLL   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| COLL   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| CYC    | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| CYC    | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| CYC    | 12  | /libreria/menu_sse_fra.js                 | contextual | [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md)                                                                        |
| CYC    | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| CYC    | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| IBER   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| IBER   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| IBER   | 12  | /libreria/menu_sse_fra.js                 | contextual | [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md); [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md) |
| IBER   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| IBER   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| BASE   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| BASE   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |
| BASE   | 12  | /libreria/menu_sse_fra.js                 | contextual | [libreria/menu_sse_fra.js](../dependencias/libreria--menu_sse_fra.md)                                                                        |
| BASE   | 6   | ../../sse_generico/sgco_gen_inc.jsp       | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                               |
| BASE   | 7   | ../../sse_generico/sse_generico_trans.jsp | física     | [sse_generico/sse_generico_trans.jsp](sse_generico--sse_generico_trans.md)                                                                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/francais/menu_ess.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
