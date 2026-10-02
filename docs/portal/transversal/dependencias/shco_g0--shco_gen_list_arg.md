# shco_gen_list_arg

Identificador: `shco_g0/shco_gen_list_arg.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_list_arg.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_list_arg.jsp) | `a813c0897c21731e4d1f43c334cb42ea927b2c250a8b69809b142529afd2d479` |     74 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_list_arg.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_list_arg.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                   | Resolución estática parcial                        |
| --- | --------------- | -------------------------------------------------- | -------------------------------------------------- |
| 14  | zvent           | getRequestValueBlack(request, "zvent", "0")        | getRequestValueBlack(request, "zvent", "0")        |
| 15  | zOrdenCampo     | getRequestValueBlack(request, "zOrdenCampo", "")   | getRequestValueBlack(request, "zOrdenCampo", "")   |
| 16  | zOrden          | getRequestValueBlack(request, "zOrden", "")        | getRequestValueBlack(request, "zOrden", "")        |
| 19  | zf1id           | getRequestValueBlack(request, "zf1id", "")         | getRequestValueBlack(request, "zf1id", "")         |
| 20  | zf1val          | getRequestValueBlack(request, "zf1val", "")        | getRequestValueBlack(request, "zf1val", "")        |
| 21  | zf1txt          | getRequestValueBlack(request, "zf1txt", "")        | getRequestValueBlack(request, "zf1txt", "")        |
| 22  | zf2id           | getRequestValueBlack(request, "zf2id", "")         | getRequestValueBlack(request, "zf2id", "")         |
| 23  | zf2val          | getRequestValueBlack(request, "zf2val", "")        | getRequestValueBlack(request, "zf2val", "")        |
| 24  | zf2txt          | getRequestValueBlack(request, "zf2txt", "")        | getRequestValueBlack(request, "zf2txt", "")        |
| 25  | zf3id           | getRequestValueBlack(request, "zf3id", "")         | getRequestValueBlack(request, "zf3id", "")         |
| 26  | zf4id           | getRequestValueBlack(request, "zf4id", "")         | getRequestValueBlack(request, "zf4id", "")         |
| 28  | zv1             | getRequestValueBlack(request, "zv1", "")           | getRequestValueBlack(request, "zv1", "")           |
| 29  | zv2             | getRequestValueBlack(request, "zv2", "")           | getRequestValueBlack(request, "zv2", "")           |
| 32  | zIdSentenceItem | "ARG_ID_SENTENCE"                                  | ARG_ID_SENTENCE                                    |
| 33  | zApiSqlItem     | "ARG_API_SQL"                                      | ARG_API_SQL                                        |
| 34  | zFilterLangItem | "ARG_LANGUAGE"                                     | ARG_LANGUAGE                                       |
| 35  | zIdScenarioItem | "ARG_ID_SCENARIO"                                  | ARG_ID_SCENARIO                                    |
| 37  | zidsentence     | getRequestValueBlack(request, zIdSentenceItem, "") | getRequestValueBlack(request, zIdSentenceItem, "") |
| 38  | zapisql         | getRequestValueBlack(request,zApiSqlItem, "")      | getRequestValueBlack(request,zApiSqlItem, "")      |
| 39  | znatlanguage    | getRequestValueBlack(request, zFilterLangItem, "") | getRequestValueBlack(request, zFilterLangItem, "") |
| 40  | zidscenario     | getRequestValueBlack(request,zIdScenarioItem, "")  | getRequestValueBlack(request,zIdScenarioItem, "")  |
| 47  | zisdynfilter    | getRequestValueBlack(request, "zisdynfilter", "")  | getRequestValueBlack(request, "zisdynfilter", "")  |
| 61  | zpagaux         | getRequestValueBlack(request, "zpag", "")          | getRequestValueBlack(request, "zpag", "")          |
| 70  | zfilter_1       | getRequestValueBlack(request, "zfilter_1", "")     | getRequestValueBlack(request, "zfilter_1", "")     |
| 71  | zfilter_2       | getRequestValueBlack(request, "zfilter_2", "")     | getRequestValueBlack(request, "zfilter_2", "")     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                      |
| --- | ----------------------------------------------------------------------------------------- |
| 48  | if ((zisdynfilter==null)&#124;&#124;(zisdynfilter.equals(""))){zisdynfilter = "";}        |
| 50  | if ("1".equals(zisdynfilter)){                                                            |
| 53  | }else{                                                                                    |
| 63  | if (!((zpagaux==null)&#124;&#124;("".equals(zpagaux))&#124;&#124;("0".equals(zpagaux)))){ |
| 64  | if ("NORMAL".equals(ztipocarga)){                                                         |

### Includes, navegación y dependencias

| L   | Include          |
| --- | ---------------- |
| 12  | shco_gen_arg.jsp |

| L   | Destino / recurso |
| --- | ----------------- |
| 12  | shco_gen_arg.jsp  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia       | Resolución | Ficha / candidato                                    |
| ------ | --- | ---------------- | ---------- | ---------------------------------------------------- |
| BASE   | 12  | shco_gen_arg.jsp | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md) |
| BASE   | 12  | shco_gen_arg.jsp | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_list_arg.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
