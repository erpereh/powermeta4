# sse_g2_p7_act

Identificador: `sse_g2/sse_g2_p7_act.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                   | Ámbito | Diccionario                                                                                  |
| ------------------ | ----------------------- | ------ | -------------------------------------------------------------------------------------------- |
| bft_ess.SolicBenef | Solicitud de beneficios | COLL   | [translations/ess_mss_gen_es.properties:L178](../../referencias/literales/ess_mss_gen_es.md) |
| bft_ess.SolicBenef | Solicitud de beneficios | CYC    | [translations/ess_mss_gen_es.properties:L178](../../referencias/literales/ess_mss_gen_es.md) |
| bft_ess.SolicBenef | Solicitud de beneficios | IBER   | [translations/ess_mss_gen_es.properties:L178](../../referencias/literales/ess_mss_gen_es.md) |
| bft_ess.SolicBenef | Solicitud de beneficios | BASE   | [translations/ess_bft_es.properties:L6](../../referencias/literales/ess_bft_es.md)           |
| bft_ess.SolicBenef | Solicitud de beneficios | BASE   | [translations/ess_mss_gen_es.properties:L177](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p7_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p7_act.jsp) | `29cfdf78432e72717fd07a3f4b34bb427aa680f5f82afd472c1f754f88da44e4` |     72 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p7_act.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p7_act.jsp) | `29cfdf78432e72717fd07a3f4b34bb427aa680f5f82afd472c1f754f88da44e4` |     72 |
| BASE / español    | [sse_g2/espanol/sse_g2_p7_act.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p7_act.jsp)                             | `29cfdf78432e72717fd07a3f4b34bb427aa680f5f82afd472c1f754f88da44e4` |     72 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p7_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p7_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal       |
| --- | --------------- | -------------------- |
| 21  | TAG             | zhash.get("TAG")     |
| 24  | REC             | zhash.get("REC")     |
| 26  | ACC             | zhash.get("ACC")     |
| 28  | NOD             | zhash.get("NOD")     |
| 30  | PK_PLAN         | zhash.get("PK_PLAN") |

| L   | Variable     | Expresión fuente                          | Resolución estática parcial                                   |
| --- | ------------ | ----------------------------------------- | ------------------------------------------------------------- |
| 10  | nombre       | ""                                        |                                                               |
| 11  | valor        | ""                                        |                                                               |
| 20  | zparametro   | ""                                        |                                                               |
| 21  | zsubsesion   | (String)zhash.get("TAG")                  | (String)zhash.get("TAG")                                      |
| 33  | zmeta4object | zsubsesion                                | (String)zhash.get("TAG")                                      |
| 34  | znodo        | "SSE_H_EE_IN_BNFT"                        | SSE_H_EE_IN_BNFT                                              |
| 35  | znodo2       | "SSE_COMUNICACION"                        | SSE_COMUNICACION                                              |
| 36  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"         | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}          |
| 37  | zmetodo      | zsubsesion + "!" + znodo + ".SSE_GESTION" | (String)zhash.get("TAG"){"!"}SSE_H_EE_IN_BNFT{".SSE_GESTION"} |
| 38  | zraiz        | zsubsesion + "!" + znodo2 + "."           | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}            |
| 47  | zerror       | "0"                                       | 0                                                             |
| 48  | zredireccion | ""                                        |                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 40  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 40  | m4:beginjob  |                                                                          |
| 41  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 42  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_H_EE_IN_BNFT{".SSE_GESTION"}   |
| 42  | m4:param     | name=GESTION_ARG; value=                                                 |
| 43  | m4:outputdef | m4alias=SSE_H_EE_IN_BNFT                                                 |
| 43  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 44  | m4:endjob    |                                                                          |
| 71  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 51  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 52  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                             |
| --- | ------------------------------------------------------------------------------------------------ |
| 55  | if ((zredireccion==null)){                                                                       |
| 57  | }else{                                                                                           |
| 36  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";      |
| 37  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION"; |
| 38  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";             |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 8   | /sse_g2/sse_bft_trans.jsp                                 |
| 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 5   | /css/estilo_sse.css                                       |
| 6   | /libreria/funciones_sse.js                                |
| 66  | /css/estilo_sse.css                                       |
| 67  | /libreria/funciones_sse.js                                |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 8   | /sse_g2/sse_bft_trans.jsp                                 |
| 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| COLL   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 67  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| COLL   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| IBER   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 67  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| IBER   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                                                                           |
| BASE   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 67  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                                                                           |
| BASE   | 70  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p7_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
