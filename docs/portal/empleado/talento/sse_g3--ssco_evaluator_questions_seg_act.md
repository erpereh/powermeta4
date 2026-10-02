# ssco_evaluator_questions_seg_act

Identificador: `sse_g3/ssco_evaluator_questions_seg_act.jsp`. Perfil: **empleado**. Dominio: **talento**.

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

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluator_questions_seg_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_seg_act.jsp) | `ee06291e6d2ce396b942987903a777d0ddea55661dcab17c159f5698bf451c86` |     50 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluator_questions_seg_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_seg_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave       | Acceso literal                                |
| --- | --------------------- | --------------------------------------------- |
| 10  | SSE_CONOCIMIENTO_TEMP | getParameter(request,"SSE_CONOCIMIENTO_TEMP") |
| 11  | SSE_CONOCIMIENTO_TEMP | getParameter(request,"SSE_CONOCIMIENTO_TEMP") |
| 12  | spos                  | getParameter(request,"spos")                  |
| 13  | mss                   | getParameter(request,"mss")                   |
| 14  | SSE_CONO_QUESTION     | getParameter(request,"SSE_CONO_QUESTION")     |
| 15  | SSE_CAL_QUESTION      | getParameter(request,"SSE_CAL_QUESTION")      |

| L   | Variable              | Expresión fuente                                                                                                                              | Resolución estática parcial                                                                                                                                                                                                                                                                                                                                                                            |
| --- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 10  | SSE_CONOCIMIENTO_TEMP | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP")                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP")                                                                                                                                                                                                                                                                                                                      |
| 11  | id_cap                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP")                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP")                                                                                                                                                                                                                                                                                                                      |
| 12  | spos                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")                                                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")                                                                                                                                                                                                                                                                                                                                       |
| 13  | mss                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                                                                                                                                                                                                                                                                                                        |
| 14  | SSE_CONO_QUESTION     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONO_QUESTION")                                                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONO_QUESTION")                                                                                                                                                                                                                                                                                                                          |
| 15  | sResult               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CAL_QUESTION")                                                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CAL_QUESTION")                                                                                                                                                                                                                                                                                                                           |
| 17  | zsubsesion            | "SSCO_H_EVALUATE_SEG"                                                                                                                         | SSCO_H_EVALUATE_SEG                                                                                                                                                                                                                                                                                                                                                                                    |
| 18  | zmeta4object          | zsubsesion                                                                                                                                    | SSCO_H_EVALUATE_SEG                                                                                                                                                                                                                                                                                                                                                                                    |
| 19  | znodo                 | "SSCO_EVALUATOR_SEG_TEMP"                                                                                                                     | SSCO_EVALUATOR_SEG_TEMP                                                                                                                                                                                                                                                                                                                                                                                |
| 22  | zmetodo               | zsubsesion + "!" + znodo + ".SSCO_ADD_QUESTIONS"                                                                                              | SSCO_H_EVALUATE_SEG{"!"}SSCO_EVALUATOR_SEG_TEMP{".SSCO_ADD_QUESTIONS"}                                                                                                                                                                                                                                                                                                                                 |
| 39  | zredireccion          | "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg.jsp?id_cap="+id_cap+"&amp;spos="+spos+"&amp;sResult="+sResult+"&amp;mss="+mss | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg.jsp?id_cap=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP")&amp;spos=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")&amp;sResult=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CAL_QUESTION")&amp;mss=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                              |
| --- | ------------ | ------------------------------------------------------------------------------- |
| 26  | m4:startpage | m4task=SSCO_H_EVALUATE_SEG                                                      |
| 26  | m4:beginjob  |                                                                                 |
| 27  | m4:datadef   | m4o=SSCO_H_EVALUATE_SEG; m4name=SSCO_H_EVALUATE_SEG                             |
| 36  | m4:exec      | m4method=SSCO_H_EVALUATE_SEG{"!"}SSCO_EVALUATOR_SEG_TEMP{".SSCO_ADD_QUESTIONS"} |
| 37  | m4:endjob    |                                                                                 |
| 49  | m4:endpage   |                                                                                 |

| L   | Operación | Argumentos literales                                       |
| --- | --------- | ---------------------------------------------------------- |
| 30  | setItem   | zsubsesion,znodo,"","SSCO_CONOCIMIENTO_TEMP",id_cap        |
| 31  | setItem   | zsubsesion,znodo,"","SSCO_CONO_QUESTION",SSE_CONO_QUESTION |
| 32  | setItem   | zsubsesion,znodo,"","SSE_CAL_QUESTION",sResult             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 16  | if ((sResult==null)&#124;&#124;(sResult.equals(""))){sResult = "0";}                                    |
| 22  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ADD_QUESTIONS"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 7   | ../../sse_generico/sgco_gen_inc.jsp          |
| 8   | ../../sse_generico/sse_generico_trans.jsp    |

| L   | Destino / recurso                                                          |
| --- | -------------------------------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                 |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp                               |
| 7   | ../../sse_generico/sgco_gen_inc.jsp                                        |
| 8   | ../../sse_generico/sse_generico_trans.jsp                                  |
| 39  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg.jsp?id_cap= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                 | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                 | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                               | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                                        | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp                                  | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                 | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                               | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                                        | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp                                  | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 39  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg.jsp?id_cap= | ausente    | P06                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_questions_seg_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
