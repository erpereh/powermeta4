# smco_pm_gen_act_desencrypt

Identificador: `mss_g3/smco_pm_gen_act_desencrypt.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto         | Ámbito | Diccionario                                                                                  |
| --------------- | ------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.LblUpdate | Actualización | COLL   | [translations/ess_mss_gen_es.properties:L157](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblUpdate | Actualización | CYC    | [translations/ess_mss_gen_es.properties:L157](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblUpdate | Actualización | IBER   | [translations/ess_mss_gen_es.properties:L157](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblUpdate | Actualización | BASE   | [translations/ess_mss_gen_es.properties:L156](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_pm_gen_act_desencrypt.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_pm_gen_act_desencrypt.jsp) | `c56f1f5db4f4af9e07ce690f5e50293a3d994656678a6acd9586233609140642` |     85 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_pm_gen_act_desencrypt.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_pm_gen_act_desencrypt.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal   |
| --- | --------------- | ---------------- |
| 26  | TAG             | zhash.get("TAG") |
| 29  | REC             | zhash.get("REC") |
| 31  | ACC             | zhash.get("ACC") |
| 33  | NOD             | zhash.get("NOD") |

| L   | Variable        | Expresión fuente                                                                     | Resolución estática parcial                                                       |
| --- | --------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 8   | nombre          | ""                                                                                   |                                                                                   |
| 9   | valor           | ""                                                                                   |                                                                                   |
| 10  | valorDesencrypt | ""                                                                                   |                                                                                   |
| 25  | zparametro      | ""                                                                                   |                                                                                   |
| 26  | zsubsesion      | (String)zhash.get("TAG")                                                             | (String)zhash.get("TAG")                                                          |
| 44  | _SERVER         | "+"htt[ruta interna omitida]"+ request.getServerName()+":"+ request.getServerPort()" | +{htt[ruta interna omitida]"}{request.getServerName()}:{request.getServerPort()"} |
| 45  | zmeta4object    | zsubsesion                                                                           | (String)zhash.get("TAG")                                                          |
| 46  | znodo           | "SSE_PRINCIPAL"                                                                      | SSE_PRINCIPAL                                                                     |
| 47  | znodo2          | "SSE_COMUNICACION"                                                                   | SSE_COMUNICACION                                                                  |
| 48  | zoutputdef      | zsubsesion + "!" + znodo2 + "[*]"                                                    | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}                              |
| 49  | zmetodo         | zsubsesion + "!" + znodo + ".GESTION"                                                | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}                            |
| 50  | zraiz           | zsubsesion + "!" + znodo2 + "."                                                      | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}                                |
| 59  | zerror          | "0"                                                                                  | 0                                                                                 |
| 60  | zredireccion    | ""                                                                                   |                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 52  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 52  | m4:beginjob  |                                                                          |
| 53  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 54  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 54  | m4:param     | name=GESTION_ARG; value=                                                 |
| 55  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 55  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 56  | m4:endjob    |                                                                          |
| 82  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 63  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 64  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------- |
| 17  | if (nombre.equals("SRCO_ID_HR")){                                                                                    |
| 67  | if ((zredireccion==null)){                                                                                           |
| 69  | }else{                                                                                                               |
| 20  | expresión de cálculo/transformación: valor = valorDesencrypt + valor.substring(valor.indexOf("{SRCO_OR_HR_PERIOD")); |
| 48  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";                          |
| 49  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION";                         |
| 50  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                                 |

### Includes, navegación y dependencias

| L   | Include                                              |
| --- | ---------------------------------------------------- |
| 6   | /sse_generico/sse_generico_trans.jsp                 |
| 83  | /sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 78  | /css/estilo_sse.css                                  |
| 79  | /libreria/funciones_sse.js                           |
| 6   | /sse_generico/sse_generico_trans.jsp                 |
| 83  | /sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | ---------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 6   | /sse_generico/sse_generico_trans.jsp                 | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)                 |
| BASE   | 83  | /sse_generico/espanol/generico_actualizar_cuerpo.jsp | contextual | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 79  | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 6   | /sse_generico/sse_generico_trans.jsp                 | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)                 |
| BASE   | 83  | /sse_generico/espanol/generico_actualizar_cuerpo.jsp | contextual | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_pm_gen_act_desencrypt.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
