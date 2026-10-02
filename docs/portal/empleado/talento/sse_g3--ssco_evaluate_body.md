# ssco_evaluate_body

Identificador: `sse_g3/ssco_evaluate_body.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                         | Ámbito | Diccionario                                                                                  |
| ----------------------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.VerDet            | Ver detalle                                                   | COLL   | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet            | Ver detalle                                                   | CYC    | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet            | Ver detalle                                                   | IBER   | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet            | Ver detalle                                                   | BASE   | [translations/ess_mss_gen_es.properties:L128](../../referencias/literales/ess_mss_gen_es.md) |
| ev_ess.DescNoDataFound1 | Actualmente no tienes ningún proceso que validar.             | BASE   | [translations/ess_ev_es.properties:L42](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.DescNoDataFound1 | Actualmente no tienes ningún proceso que validar.             | BASE   | [translations/sse_g_es.properties:L26](../../referencias/literales/sse_g_es.md)              |
| ev_ess.DescrValEv       | Valora los procesos de evaluación en los que has participado. | BASE   | [translations/ess_ev_es.properties:L56](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.DescrValEv       | Valora los procesos de evaluación en los que has participado. | BASE   | [translations/sse_g_es.properties:L39](../../referencias/literales/sse_g_es.md)              |
| ev_ess.LblJob           | Ir a mi puesto de trabajo                                     | BASE   | [translations/ess_ev_es.properties:L93](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.LblJob           | Ir a mi puesto de trabajo                                     | BASE   | [translations/sse_g_es.properties:L74](../../referencias/literales/sse_g_es.md)              |
| ev_ess.LinkJob          | Mi puesto de trabajo                                          | BASE   | [translations/ess_ev_es.properties:L71](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.LinkJob          | Mi puesto de trabajo                                          | BASE   | [translations/sse_g_es.properties:L53](../../referencias/literales/sse_g_es.md)              |
| ev_ess.Val              | Valoración de la evaluación                                   | BASE   | [translations/ess_ev_es.properties:L17](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.Val              | Valoración de la evaluación                                   | BASE   | [translations/sse_g_es.properties:L17](../../referencias/literales/sse_g_es.md)              |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_evaluate_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluate_body.jsp) | `5c2f04d4bf6fd04a912ae9f64b55dece3e80cb0f48d77f4529245f72dad539e6` |     76 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_evaluate_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluate_body.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 38  | [valor dinámico] [valor dinámico] |
| 63  | ','[valor dinámico]');"&gt;       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37  | a       |                                                                                                                                                         |
| 37  | img     | alt=JSP_EXPR_TranEss.getProperty(; title=JSP_EXPR_TranEss.getProperty(; src=/iconos/noname_resultados_evaluacion_ess_100_100.gif; width=100; height=100 |
| 41  | a       | class=enlacefuncional; tabindex=1; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                 |
| 46  | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate_mod.jsp; method=post; name=oculto; id=oculto                                                     |
| 47  | input   | type=hidden; id=ordinal; name=ordinal; value=                                                                                                           |
| 48  | input   | type=hidden; id=pos; name=pos; value=                                                                                                                   |
| 63  | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:navegar('&lt;m4:item item=; htmlsafe=true; jsafe=true; outputdef=&lt;%=znodo%&gt;                     |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | ------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 2   | zsubsesion   | "SSCO_H_EVALUTE"                                                 | SSCO_H_EVALUTE                                                   |
| 3   | zmeta4object | "SSCO_H_EVALUTE"                                                 | SSCO_H_EVALUTE                                                   |
| 4   | znodo        | "SSCO_EVALUATOR_TEMP"                                            | SSCO_EVALUATOR_TEMP                                              |
| 5   | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                 | SSCO_H_EVALUTE{"!"}SSCO_EVALUATOR_TEMP{"[*]"}                    |
| 6   | zmetodocarga | "CARGA:" + zsubsesion + "!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE" | CARGA:{}SSCO_H_EVALUTE{"!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE"} |
| 7   | zmove        | znodo + ":" + znodo + "[FIRST]"                                  | SSCO_EVALUATOR_TEMP{":"}SSCO_EVALUATOR_TEMP{"[FIRST]"}           |
| 17  | zcount       | 0                                                                | 0                                                                |
| 22  | zcountv      | String.valueOf(zcount)                                           | String.valueOf(zcount)                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                |
| --- | ------------ | --------------------------------------------------------------------------------- |
| 9   | m4:startpage | m4task=SSCO_H_EVALUTE                                                             |
| 10  | m4:beginjob  |                                                                                   |
| 11  | m4:datadef   | m4o=SSCO_H_EVALUTE; m4name=SSCO_H_EVALUTE                                         |
| 12  | m4:exec      | m4method=CARGA:{}SSCO_H_EVALUTE{"!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE"}         |
| 12  | m4:param     | name=ARG_ORDINAL; value=                                                          |
| 13  | m4:outputdef | m4alias=SSCO_EVALUATOR_TEMP                                                       |
| 13  | m4:param     | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_EVALUATOR_TEMP{"[*]"}                 |
| 14  | m4:endjob    |                                                                                   |
| 15  | m4:move      |                                                                                   |
| 15  | m4:param     | name=SSCO_H_EVALUTE; value=SSCO_EVALUATOR_TEMP{":"}SSCO_EVALUATOR_TEMP{"[FIRST]"} |
| 55  | m4:label     | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP               |
| 56  | m4:label     | item=NOMBRE_EMPLEADO; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP                |
| 57  | m4:label     | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP                 |
| 58  | m4:label     | item=SCO_EVALUAT_DATE; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP               |
| 60  | m4:dataloop  | outputdef=SSCO_EVALUATOR_TEMP                                                     |
| 61  | m4:current   | var=ziCurPos; outputdef=SSCO_EVALUATOR_TEMP                                       |
| 63  | m4:item      | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP               |
| 64  | m4:item      | item=NOMBRE_EMPLEADO; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP                |
| 65  | m4:item      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP                 |
| 67  | m4:item      | item=SCO_EVALUAT_DATE; htmlsafe=true; outputdef=SSCO_EVALUATOR_TEMP               |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 20  | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 26  | navegar | ord,pos    |

| L   | Condición / acción / mensaje literal                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 51  | &lt;%if (zcount&gt; 0) {Integer ziCurPos;                                                                                    |
| 71  | &lt;%}else{%&gt;                                                                                                             |
| 5   | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                   |
| 6   | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE"; |
| 7   | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                         |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 37  | /iconos/noname_resultados_evaluacion_ess_100_100.gif       |
| 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 |
| 46  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate_mod.jsp    |
| 63  | javascript:navegar(                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                |
| ------ | --- | ---------------------------------------------------------- | ---------- | ------------------------------------------------ |
| BASE   | 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 | contextual | [sse_g3/sse_g3_menu.jsp](sse_g3--sse_g3_menu.md) |
| BASE   | 46  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate_mod.jsp    | ausente    | P06                                              |
| BASE   | 63  | javascript:navegar(                                        | dinámica   | P06                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluate_body.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
