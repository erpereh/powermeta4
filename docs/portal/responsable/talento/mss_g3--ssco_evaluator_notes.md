# ssco_evaluator_notes

Identificador: `mss_g3/ssco_evaluator_notes.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto                                            | Ámbito | Diccionario                                                                                  |
| ----------------- | ------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Title.ssco_act    | Actualización                                    | COLL   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act    | Actualización                                    | CYC    | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act    | Actualización                                    | IBER   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act    | Actualización                                    | BASE   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.LblCalcObj | Calculando % objetivos cuantitativos conseguidos | BASE   | [translations/mss_ev_es.properties:L195](../../referencias/literales/mss_ev_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/ssco_evaluator_notes.jsp](../../../../clon_portal/portal/mss_g3/espanol/ssco_evaluator_notes.jsp) | `11b074364b53ec4f9649ac0b36941cf4b36501c0384bc59619c75ffd1c2096c7` |     85 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/ssco_evaluator_notes.jsp](../../../../clon_portal/portal/mss_g3/espanol/ssco_evaluator_notes.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 36  | zid             | getParameter(request,"zid")     |
| 37  | zor             | getParameter(request,"zor")     |
| 38  | zdt             | getParameter(request,"zdt")     |
| 39  | zValues         | getParameter(request,"zValues") |

| L   | Variable     | Expresión fuente                                                    | Resolución estática parcial                                                              |
| --- | ------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 36  | zIdHr        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")                          |
| 37  | zOrRole      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor")                          |
| 38  | zDtStart     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdt")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdt")                          |
| 39  | zValues      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zValues") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zValues")                      |
| 40  | nombre       | ""                                                                  |                                                                                          |
| 41  | valor        | ""                                                                  |                                                                                          |
| 43  | zparametro   | ""                                                                  |                                                                                          |
| 44  | zsubsesion   | "SRCO_HR_IN_OBJECTIVES_SUMMARY"                                     | SRCO_HR_IN_OBJECTIVES_SUMMARY                                                            |
| 45  | zmeta4object | zsubsesion                                                          | SRCO_HR_IN_OBJECTIVES_SUMMARY                                                            |
| 46  | znodo        | "SRCO_HR_IN_APPRAISEE"                                              | SRCO_HR_IN_APPRAISEE                                                                     |
| 48  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                    | SRCO_HR_IN_OBJECTIVES_SUMMARY{"!"}SRCO_HR_IN_APPRAISEE{"[*]"}                            |
| 50  | zmetodo      | zsubsesion + "!" + znodo + ".SRCO_CALC_ATT_RATE_APPRAI_ESS"         | SRCO_HR_IN_OBJECTIVES_SUMMARY{"!"}SRCO_HR_IN_APPRAISEE{".SRCO_CALC_ATT_RATE_APPRAI_ESS"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------- |
| 54  | m4:startpage | m4task=SRCO_HR_IN_OBJECTIVES_SUMMARY                                                              |
| 54  | m4:beginjob  |                                                                                                   |
| 55  | m4:datadef   | m4o=SRCO_HR_IN_OBJECTIVES_SUMMARY; m4name=SRCO_HR_IN_OBJECTIVES_SUMMARY                           |
| 56  | m4:exec      | m4method=SRCO_HR_IN_OBJECTIVES_SUMMARY{"!"}SRCO_HR_IN_APPRAISEE{".SRCO_CALC_ATT_RATE_APPRAI_ESS"} |
| 57  | m4:param     | name=ARG_SCO_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")         |
| 58  | m4:param     | name=ARG_SCO_OR_HR_ROLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor")    |
| 59  | m4:param     | name=ARG_DT_START_EVAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdt")     |
| 60  | m4:param     | name=ARG_VALUES; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zValues")        |
| 62  | m4:outputdef | m4alias=SRCO_HR_IN_APPRAISEE                                                                      |
| 62  | m4:param     | name=m4name0; value=SRCO_HR_IN_OBJECTIVES_SUMMARY{"!"}SRCO_HR_IN_APPRAISEE{"[*]"}                 |
| 63  | m4:endjob    |                                                                                                   |
| 83  | m4:endpage   |                                                                                                   |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 17  | returnvalues | ar         |

| L   | Condición / acción / mensaje literal                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 18  | if (typeof(opener.oventana) == "object"){                                                                          |
| 21  | if (typeof(ar[i]) != "undefined"){                                                                                 |
| 25  | if (typeof(opener.oventana) == "object"){                                                                          |
| 26  | if (opener.oventana.m4prop_afterclosewindowmet != ""){                                                             |
| 48  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                         |
| 50  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SRCO_CALC_ATT_RATE_APPRAI_ESS"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/sgco_gen_inc.jsp          |
| 9   | /mss_generico/mss_generico_trans.jsp         |
| 10  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 7   | /css/estilo_mss.css                          |
| 11  | /libreria/funciones_filter.js                |
| 12  | /libreria/funciones_sse_val.js               |
| 13  | /libreria/func_eval.js                       |
| 15  | /libreria/funciones_sse.js                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/sgco_gen_inc.jsp          |
| 9   | /mss_generico/mss_generico_trans.jsp         |
| 10  | /mss_g3/mss_ev_trans.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 9   | /mss_generico/mss_generico_trans.jsp         | contextual | [mss_generico/mss_generico_trans.jsp](../tareas/mss_generico--mss_generico_trans.md)                          |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |
| BASE   | 11  | /libreria/funciones_filter.js                | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 12  | /libreria/funciones_sse_val.js               | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 13  | /libreria/func_eval.js                       | contextual | [libreria/func_eval.js](../../transversal/dependencias/libreria--func_eval.md)                                |
| BASE   | 15  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 9   | /mss_generico/mss_generico_trans.jsp         | contextual | [mss_generico/mss_generico_trans.jsp](../tareas/mss_generico--mss_generico_trans.md)                          |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/ssco_evaluator_notes.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
