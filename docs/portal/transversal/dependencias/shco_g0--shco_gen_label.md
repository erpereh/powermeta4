# shco_gen_label

Identificador: `shco_g0/shco_gen_label.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_label.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_label.jsp) | `585078be65a042bae19ab584bfcb6495e7394d800ffac21ddf3b178fec6aa592` |     33 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_label.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_label.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                  | Resolución estática parcial        |
| --- | ---------------- | --------------------------------- | ---------------------------------- |
| 10  | zSHCOLBCLEAN     | zraizlabel + "SHCO_LB_CLEAN"      | {zraizlabel}{"SHCO_LB_CLEAN"}      |
| 11  | zSHCOLBDEL       | zraizlabel + "SHCO_LB_DEL"        | {zraizlabel}{"SHCO_LB_DEL"}        |
| 12  | zSHCOLBEDIT      | zraizlabel + "SHCO_LB_EDIT"       | {zraizlabel}{"SHCO_LB_EDIT"}       |
| 13  | zSHCOLBINSERT    | zraizlabel + "SHCO_LB_INSERT"     | {zraizlabel}{"SHCO_LB_INSERT"}     |
| 14  | zSHCOLBLIST      | zraizlabel + "SHCO_LB_LIST"       | {zraizlabel}{"SHCO_LB_LIST"}       |
| 15  | zSHCOLBNEXT      | zraizlabel + "SHCO_LB_NEXT"       | {zraizlabel}{"SHCO_LB_NEXT"}       |
| 16  | zSHCOLBORD       | zraizlabel + "SHCO_LB_ORD"        | {zraizlabel}{"SHCO_LB_ORD"}        |
| 17  | zSHCOLBPREV      | zraizlabel + "SHCO_LB_PREV"       | {zraizlabel}{"SHCO_LB_PREV"}       |
| 18  | zSHCOLBREFRESH   | zraizlabel + "SHCO_LB_REFRESH"    | {zraizlabel}{"SHCO_LB_REFRESH"}    |
| 19  | zSHCOLBSEND      | zraizlabel + "SHCO_LB_SEND"       | {zraizlabel}{"SHCO_LB_SEND"}       |
| 20  | zSHCOLBWRITE     | zraizlabel + "SHCO_LB_WRITE"      | {zraizlabel}{"SHCO_LB_WRITE"}      |
| 21  | zSHCOLBNOHELP    | zraizlabel + "SHCO_LB_NOHELP"     | {zraizlabel}{"SHCO_LB_NOHELP"}     |
| 22  | zSHCOLBHELP      | zraizlabel + "SHCO_LB_HELP"       | {zraizlabel}{"SHCO_LB_HELP"}       |
| 23  | zSHCOLBCAB       | zraizlabel + "SHCO_LB_CAB"        | {zraizlabel}{"SHCO_LB_CAB"}        |
| 24  | zSHCOLBTITLEROOT | zraizlabel + "SHCO_LB_TITLE_ROOT" | {zraizlabel}{"SHCO_LB_TITLE_ROOT"} |
| 25  | zSHCOLBTITLE     | zraizlabel + "SHCO_LB_TITLE"      | {zraizlabel}{"SHCO_LB_TITLE"}      |
| 26  | zSHCOLBTITERROR  | zraizlabel + "SHCO_LB_TIT_ERROR"  | {zraizlabel}{"SHCO_LB_TIT_ERROR"}  |
| 27  | zSHCOLBBACK      | zraizlabel + "SHCO_LB_BACK"       | {zraizlabel}{"SHCO_LB_BACK"}       |
| 28  | zSHCOLBERR       | zraizlabel + "SHCO_LB_ERR"        | {zraizlabel}{"SHCO_LB_ERR"}        |
| 29  | zSHCOLBWARNING   | zraizlabel + "SHCO_LB_WARNING"    | {zraizlabel}{"SHCO_LB_WARNING"}    |
| 30  | zSHCOLBINFO      | zraizlabel + "SHCO_LB_INFO"       | {zraizlabel}{"SHCO_LB_INFO"}       |
| 31  | zSHCOLBCABECINFO | zraizlabel + "SHCO_LB_CABEC_INFO" | {zraizlabel}{"SHCO_LB_CABEC_INFO"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                              |
| --- | ------------------------------------------------------------------------------------------------- |
| 10  | expresión de cálculo/transformación: String zSHCOLBCLEAN = zraizlabel + "SHCO_LB_CLEAN";          |
| 11  | expresión de cálculo/transformación: String zSHCOLBDEL = zraizlabel + "SHCO_LB_DEL";              |
| 12  | expresión de cálculo/transformación: String zSHCOLBEDIT = zraizlabel + "SHCO_LB_EDIT";            |
| 13  | expresión de cálculo/transformación: String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";        |
| 14  | expresión de cálculo/transformación: String zSHCOLBLIST = zraizlabel + "SHCO_LB_LIST";            |
| 15  | expresión de cálculo/transformación: String zSHCOLBNEXT = zraizlabel + "SHCO_LB_NEXT";            |
| 16  | expresión de cálculo/transformación: String zSHCOLBORD = zraizlabel + "SHCO_LB_ORD";              |
| 17  | expresión de cálculo/transformación: String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";            |
| 18  | expresión de cálculo/transformación: String zSHCOLBREFRESH = zraizlabel + "SHCO_LB_REFRESH";      |
| 19  | expresión de cálculo/transformación: String zSHCOLBSEND = zraizlabel + "SHCO_LB_SEND";            |
| 20  | expresión de cálculo/transformación: String zSHCOLBWRITE = zraizlabel + "SHCO_LB_WRITE";          |
| 21  | expresión de cálculo/transformación: String zSHCOLBNOHELP = zraizlabel + "SHCO_LB_NOHELP";        |
| 22  | expresión de cálculo/transformación: String zSHCOLBHELP = zraizlabel + "SHCO_LB_HELP";            |
| 23  | expresión de cálculo/transformación: String zSHCOLBCAB = zraizlabel + "SHCO_LB_CAB";              |
| 24  | expresión de cálculo/transformación: String zSHCOLBTITLEROOT = zraizlabel + "SHCO_LB_TITLE_ROOT"; |
| 25  | expresión de cálculo/transformación: String zSHCOLBTITLE = zraizlabel + "SHCO_LB_TITLE";          |
| 26  | expresión de cálculo/transformación: String zSHCOLBTITERROR = zraizlabel + "SHCO_LB_TIT_ERROR";   |
| 27  | expresión de cálculo/transformación: String zSHCOLBBACK = zraizlabel + "SHCO_LB_BACK";            |
| 28  | expresión de cálculo/transformación: String zSHCOLBERR = zraizlabel + "SHCO_LB_ERR";              |
| 29  | expresión de cálculo/transformación: String zSHCOLBWARNING = zraizlabel + "SHCO_LB_WARNING";      |
| 30  | expresión de cálculo/transformación: String zSHCOLBINFO= zraizlabel + "SHCO_LB_INFO";             |
| 31  | expresión de cálculo/transformación: String zSHCOLBCABECINFO= zraizlabel + "SHCO_LB_CABEC_INFO";  |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 33  | ../shco_g0/shco_gen_label_val.jsp |

| L   | Destino / recurso                 |
| --- | --------------------------------- |
| 33  | ../shco_g0/shco_gen_label_val.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                        | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 33  | ../shco_g0/shco_gen_label_val.jsp | física     | [shco_g0/shco_gen_label_val.jsp](shco_g0--shco_gen_label_val.md) |
| BASE   | 33  | ../shco_g0/shco_gen_label_val.jsp | física     | [shco_g0/shco_gen_label_val.jsp](shco_g0--shco_gen_label_val.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_label.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
