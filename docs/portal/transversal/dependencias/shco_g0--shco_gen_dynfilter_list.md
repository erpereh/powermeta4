# shco_gen_dynfilter_list

Identificador: `shco_g0/shco_gen_dynfilter_list.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_dynfilter_list.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_list.jsp) | `4b03c3269ee09789eb6e0c91a60e0472434b8504889ad24cb829f6bdbf6883a3` |     72 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_dynfilter_list.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_list.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                              |
| --- | ----------------------------------------------------- |
| 52  | ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');}return false;" |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 56  | a       | title=; href=; onclick=javascript: if (sLastNodeSelected != 'td&lt;%=zposicions%&gt;') { changenodeselection('&lt;%=zposicions%&gt;','&lt;%=zNodei%&gt;','&lt;m4:item m4name=; jsafe=true; htmlsafe=true |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable             | Expresión fuente                         | Resolución estática parcial              |
| --- | -------------------- | ---------------------------------------- | ---------------------------------------- |
| 16  | zcountdynfilterlist  | 0                                        | 0                                        |
| 21  | zcountdynfilterlistv | String.valueOf(zcountdynfilterlist)      | String.valueOf(zcountdynfilterlist)      |
| 22  | zregistroinicials    | String.valueOf(0)                        | String.valueOf(0)                        |
| 23  | zregistrofinals      | String.valueOf( zcountdynfilterlist - 1) | String.valueOf( zcountdynfilterlist - 1) |
| 24  | zposicions           | "0"                                      | 0                                        |
| 25  | zcontrol             | 0                                        | 0                                        |
| 26  | zposicion            | 0                                        | 0                                        |
| 27  | bActiveNode          | false                                    | false                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag      | Contrato declarado                                                  |
| --- | -------- | ------------------------------------------------------------------- |
| 13  | m4:label | m4name=zSHCOLBALLFILTERS; htmlsafe=true                             |
| 29  | m4:loop  | from=String.valueOf(0); to=String.valueOf( zcountdynfilterlist - 1) |
| 32  | m4:item  | m4name=zlIdNodeItem; jsafe=true; htmlsafe=true; m4varname=zNodei    |
| 33  | m4:item  | m4name=zlIdSentenceItem; jsafe=true; m4varname=zSentencei           |
| 43  | m4:item  | m4name=zlNNodeItem; jsafe=true                                      |
| 44  | m4:item  | m4name=zlIdReadObjetItem; jsafe=true                                |
| 45  | m4:item  | m4name=zlIdScenarioItem; jsafe=true                                 |
| 46  | m4:item  | m4name=zlFilterLangItem; jsafe=true                                 |
| 47  | m4:item  | m4name=zlIdSentenceItem; jsafe=true                                 |
| 48  | m4:item  | m4name=zlApiSqlItem; jsafe=true                                     |
| 49  | m4:item  | m4name=zlListOfScenario; jsafe=true                                 |
| 50  | m4:item  | m4name=zlNodeSubsessionItem; jsafe=true                             |
| 58  | m4:item  | m4name=zlIdReadObjetItem; jsafe=true; htmlsafe=true                 |
| 59  | m4:item  | m4name=zlIdScenarioItem; jsafe=true; htmlsafe=true                  |
| 60  | m4:item  | m4name=zlFilterLangItem; jsafe=true; htmlsafe=true                  |
| 61  | m4:item  | m4name=zlIdSentenceItem; jsafe=true; htmlsafe=true                  |
| 62  | m4:item  | m4name=zlApiSqlItem; jsafe=true; htmlsafe=true                      |
| 63  | m4:item  | m4name=zlListOfScenario; jsafe=true; htmlsafe=true                  |
| 64  | m4:item  | m4name=zlNodeSubsessionItem; jsafe=true                             |
| 65  | m4:item  | m4name=zlNNodeItem; htmlsafe=true                                   |

| L   | Operación | Argumentos literales                            |
| --- | --------- | ----------------------------------------------- |
| 19  | getCount  | znododynfilterlist,zm4oalias,znododynfilterlist |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------- |
| 34  | &lt;%if ((zSentencei != null) &amp;&amp; !zSentencei.equals("") ){                                               |
| 38  | if (zidnode.equals("")){                                                                                         |
| 39  | if (zposicion == 0) {bActiveNode = true;}                                                                        |
| 40  | }else if (zidnode.equals(zNodei)){bActiveNode = true;}                                                           |
| 41  | if (bActiveNode == true){%&gt;                                                                                   |
| 53  | &lt;%}else{%&gt;                                                                                                 |
| 56  | &lt;a title="" href="" onclick="javascript: if (sLastNodeSelected != 'td&lt;%=zposicions%&gt;') {                |
| 23  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf( zcountdynfilterlist - 1);          |
| 35  | expresión de cálculo/transformación: g_zListOfSentenceInUse = g_zListOfSentenceInUse + "$$" + zSentencei + "$$"; |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 30  | ../shco_g0/shco_gen_loop.jsp |

| L   | Destino / recurso            |
| --- | ---------------------------- |
| 30  | ../shco_g0/shco_gen_loop.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                   | Resolución | Ficha / candidato                                      |
| ------ | --- | ---------------------------- | ---------- | ------------------------------------------------------ |
| BASE   | 30  | ../shco_g0/shco_gen_loop.jsp | física     | [shco_g0/shco_gen_loop.jsp](shco_g0--shco_gen_loop.md) |
| BASE   | 30  | ../shco_g0/shco_gen_loop.jsp | física     | [shco_g0/shco_gen_loop.jsp](shco_g0--shco_gen_loop.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_dynfilter_list.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
