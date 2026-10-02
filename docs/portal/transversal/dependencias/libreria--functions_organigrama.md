# functions_organigrama

Identificador: `libreria/functions_organigrama.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/functions_organigrama.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_organigrama.js) | `359f5d4fa9581d57367712f1cc99d22e17628f6636e5b34fa93c173159968d27` |     73 |
| CYC / compartido  | [m4custom/CYC/libreria/functions_organigrama.js](../../../../clon_portal/portal/m4custom/CYC/libreria/functions_organigrama.js)   | `359f5d4fa9581d57367712f1cc99d22e17628f6636e5b34fa93c173159968d27` |     73 |
| IBER / compartido | [m4custom/IBER/libreria/functions_organigrama.js](../../../../clon_portal/portal/m4custom/IBER/libreria/functions_organigrama.js) | `359f5d4fa9581d57367712f1cc99d22e17628f6636e5b34fa93c173159968d27` |     73 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/functions_organigrama.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_organigrama.js). Líneas físicas, contando desde 1.

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

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 69  | getVersion | indice     |

| L   | Condición / acción / mensaje literal                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if (servc== "00"){                                                                                                                     |
| 19  | if(unidc=="00"){                                                                                                                       |
| 21  | if (areac== "00"){                                                                                                                     |
| 23  | if(direc=="00"){                                                                                                                       |
| 25  | }else{                                                                                                                                 |
| 28  | }else{                                                                                                                                 |
| 31  | }else{                                                                                                                                 |
| 34  | }else{                                                                                                                                 |
| 47  | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + " -- PARAMETROS PARA ENVIAR AL META4OBJECT -- " + "\n"; |
| 48  | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "unidad : " + unidad + "\n";                            |
| 49  | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "puesto : " + puesto + "\n";                            |
| 50  | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "responsable : " + responsable + "\n";                  |
| 51  | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "tipo : " + tipo + "\n";                                |

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

- Confirmar exposición y permisos de `libreria/functions_organigrama.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
