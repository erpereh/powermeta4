# ssco_evaluator_act

Identificador: `mss_g3/ssco_evaluator_act.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                             | Ámbito | Diccionario                                                                                  |
| --------------- | --------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.ssco_pro  | Procesando datos                  | COLL   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | CYC    | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | IBER   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | BASE   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | COLL   | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | CYC    | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | IBER   | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | BASE   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | COLL   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | CYC    | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | IBER   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | BASE   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/ssco_evaluator_act.jsp](../../../../clon_portal/portal/mss_g3/espanol/ssco_evaluator_act.jsp) | `048548ead165d54376cba011c0965957500d16e3e602a72832a98eed11922e28` |     92 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/ssco_evaluator_act.jsp](../../../../clon_portal/portal/mss_g3/espanol/ssco_evaluator_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal            |
| --- | --------------- | ------------------------- |
| 27  | ACC             | zhash.get("ACC")          |
| 29  | SSE_TEMPORAL    | zhash.get("SSE_TEMPORAL") |
| 31  | REC             | zhash.get("REC")          |

| L   | Variable     | Expresión fuente                       | Resolución estática parcial                     |
| --- | ------------ | -------------------------------------- | ----------------------------------------------- |
| 12  | nombre       | ""                                     |                                                 |
| 13  | valor        | ""                                     |                                                 |
| 22  | zparametro   | ""                                     |                                                 |
| 23  | zsubsesion   | "SSCO_H_EVALUTE"                       | SSCO_H_EVALUTE                                  |
| 44  | zmeta4object | zsubsesion                             | SSCO_H_EVALUTE                                  |
| 45  | znodo        | "SSCO_H_EVALUATE"                      | SSCO_H_EVALUATE                                 |
| 47  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"       | SSCO_H_EVALUTE{"!"}SSCO_H_EVALUATE{"[*]"}       |
| 49  | zmetodo      | zsubsesion + "!" + znodo + ".SSCO_ACT" | SSCO_H_EVALUTE{"!"}SSCO_H_EVALUATE{".SSCO_ACT"} |
| 64  | zerror       | ""                                     |                                                 |
| 65  | zredireccion | ""                                     |                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                      |
| --- | ------------ | ----------------------------------------------------------------------- |
| 55  | m4:startpage | m4task=SSCO_H_EVALUTE                                                   |
| 55  | m4:beginjob  |                                                                         |
| 56  | m4:datadef   | m4o=SSCO_H_EVALUTE; m4name=SSCO_H_EVALUTE                               |
| 57  | m4:exec      | m4method=SSCO_H_EVALUTE{"!"}SSCO_H_EVALUATE{".SSCO_ACT"}                |
| 57  | m4:param     | name=ARG_SSCO_ACT; value=                                               |
| 58  | m4:outputdef | m4alias=SSCO_H_EVALUATE                                                 |
| 58  | m4:param     | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_H_EVALUATE{"[*]"}           |
| 60  | m4:endjob    |                                                                         |
| 62  | m4:item      | m4varname=zRED; item=SSCO_RED; htmlsafe=true; outputdef=SSCO_H_EVALUATE |
| 87  | m4:endpage   |                                                                         |
| 90  | m4:endpage   |                                                                         |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                          |
| --- | --------------------------------------------------------------------------------------------- |
| 67  | if (zRED.equals("0")){                                                                        |
| 69  | }else{                                                                                        |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";    |
| 49  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ACT"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 7   | ../../sse_generico/sgco_gen_inc.jsp          |
| 8   | ../../sse_generico/sse_generico_trans.jsp    |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                         |
| 10  | /libreria/funciones_sse.js                                  |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                  |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp                |
| 7   | ../../sse_generico/sgco_gen_inc.jsp                         |
| 8   | ../../sse_generico/sse_generico_trans.jsp                   |
| 68  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp        |
| 70  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                         | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp                   | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 10  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                         | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp                   | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 68  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp        | ausente    | P06                                                                                                           |
| BASE   | 70  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp | ausente    | P06                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/ssco_evaluator_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
