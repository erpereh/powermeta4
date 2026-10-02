# sse_g3_p5_open_vis_obj2_body

Identificador: `sse_g3/sse_g3_p5_open_vis_obj2_body.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto                                    | Ámbito | Diccionario                                                                        |
| ------------------------ | ---------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| ev_ess.DescrValorObj     | Valores del objetivo                     | BASE   | [translations/ess_ev_es.properties:L48](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.DescrValorObj     | Valores del objetivo                     | BASE   | [translations/sse_g_es.properties:L32](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LblHistEvOpen     | Ir a mis procesos de evaluación actuales | BASE   | [translations/ess_ev_es.properties:L114](../../referencias/literales/ess_ev_es.md) |
| ev_ess.LblHistEvOpen     | Ir a mis procesos de evaluación actuales | BASE   | [translations/sse_g_es.properties:L94](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LinkHistEvOpen    | Mis procesos de evaluación actuales      | BASE   | [translations/ess_ev_es.properties:L87](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LinkHistEvOpen    | Mis procesos de evaluación actuales      | BASE   | [translations/sse_g_es.properties:L69](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LinkHistEvOpenVis | Criterios de evaluación                  | BASE   | [translations/ess_ev_es.properties:L89](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LinkHistEvOpenVis | Criterios de evaluación                  | BASE   | [translations/sse_g_es.properties:L71](../../referencias/literales/sse_g_es.md)    |
| ev_ess.Obj               | Objetivos                                | BASE   | [translations/ess_ev_es.properties:L11](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.Obj               | Objetivos                                | BASE   | [translations/sse_g_es.properties:L11](../../referencias/literales/sse_g_es.md)    |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/sse_g3_p5_open_vis_obj2_body.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_p5_open_vis_obj2_body.jsp) | `93ca7821843a4647dc87e689566f54f82432352061741fe45b83204dbe1a23ac` |     77 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/sse_g3_p5_open_vis_obj2_body.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_p5_open_vis_obj2_body.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 37  | [valor dinámico] :                |
| 40  | [valor dinámico] [valor dinámico] |
| 51  | :                                 |
| 64  | :                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39  | img     | alt=JSP_EXPR_TranEss.getProperty(; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100                                                                             |
| 43  | a       | class=enlacefuncional; tabindex=1; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3                                                    |
| 52  | a       | title=JSP_EXPR_TranEss.getProperty(; href=javascript:history.back();                                                                                                                          |
| 53  | img     | alt=JSP_EXPR_TranEss.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 65  | a       | title=JSP_EXPR_TranEss.getProperty(; href=javascript:history.back();                                                                                                                          |
| 66  | img     | alt=JSP_EXPR_TranEss.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 3   | ord             | getParameter(request,"ord") |

| L   | Variable        | Expresión fuente                                                | Resolución estática parcial                                                                                                                                                                     |
| --- | --------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | zpos            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord")                                                                                                                                 |
| 4   | zsubsesion      | "SSE_H_EVALUATOR_OPEN"                                          | SSE_H_EVALUATOR_OPEN                                                                                                                                                                            |
| 5   | zmeta4object    | "SSE_H_EVALUATOR_OPEN"                                          | SSE_H_EVALUATOR_OPEN                                                                                                                                                                            |
| 6   | znodo           | "SSE_EVAL_OBJECT_OPEN_CUAN"                                     | SSE_EVAL_OBJECT_OPEN_CUAN                                                                                                                                                                       |
| 9   | zoutputdef      | zsubsesion + "!" + znodo + "[" + zpos + "-" + zpos + "]"        | SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"-"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"]"} |
| 10  | zmove           | znodo + ":" +znodo + "[" + zpos + "]"                           | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_EVAL_OBJECT_OPEN_CUAN{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"]"}                                                                |
| 11  | zraiz           | znodo + ":" + zsubsesion + "!"+ znodo+"."                       | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.                                                                                                               |
| 13  | zSCOCOMMENT1    | zraiz + "SCO_COMMENT_1"                                         | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_COMMENT_1"}                                                                                              |
| 14  | zSCONMMAGNITUDE | zraiz + "SCO_NM_MAGNITUDE"                                      | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_MAGNITUDE"}                                                                                           |
| 15  | zSCONMOBJECTIVE | zraiz + "SCO_NM_OBJECTIVE"                                      | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_OBJECTIVE"}                                                                                           |
| 16  | zSCOCOMMENT     | zraiz + "SCO_COMMENT"                                           | SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_COMMENT"}                                                                                                |
| 27  | zcount          | 0                                                               | 0                                                                                                                                                                                               |
| 28  | zcounti         | 0                                                               | 0                                                                                                                                                                                               |
| 34  | zcountv         | String.valueOf(zcounti)                                         | String.valueOf(zcounti)                                                                                                                                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | m4:startpage | m4task=SSE_H_EVALUATOR_OPEN                                                                                                                                                                                         |
| 20  | m4:beginjob  |                                                                                                                                                                                                                     |
| 21  | m4:datadef   | m4o=SSE_H_EVALUATOR_OPEN; m4name=SSE_H_EVALUATOR_OPEN                                                                                                                                                               |
| 23  | m4:outputdef | m4alias=SSE_EVAL_OBJECT_OPEN_CUAN                                                                                                                                                                                   |
| 23  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"-"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"]"} |
| 24  | m4:endjob    |                                                                                                                                                                                                                     |
| 25  | m4:move      |                                                                                                                                                                                                                     |
| 25  | m4:param     | name=SSE_H_EVALUATOR_OPEN; value=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_EVAL_OBJECT_OPEN_CUAN{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord"){"]"}                                                   |
| 37  | m4:item      | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_OBJECTIVE"}; htmlsafe=true                                                                                         |
| 51  | m4:label     | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_OBJECTIVE"}; htmlsafe=true                                                                                         |
| 51  | m4:item      | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_OBJECTIVE"}; htmlsafe=true                                                                                         |
| 58  | m4:item      | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_COMMENT_1"}; htmlsafe=true                                                                                            |
| 64  | m4:label     | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_MAGNITUDE"}; htmlsafe=true                                                                                         |
| 64  | m4:item      | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_NM_MAGNITUDE"}; htmlsafe=true                                                                                         |
| 71  | m4:item      | m4name=SSE_EVAL_OBJECT_OPEN_CUAN{":"}SSE_H_EVALUATOR_OPEN{"!"}SSE_EVAL_OBJECT_OPEN_CUAN.{"SCO_COMMENT"}; htmlsafe=true                                                                                              |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 31  | getCount         | znodo,zsubsesion,znodo |
| 32  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 9   | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zpos + "-" + zpos + "]"; |
| 10  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zpos + "]";                         |
| 11  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                    |
| 13  | expresión de cálculo/transformación: String zSCOCOMMENT1 = zraiz + "SCO_COMMENT_1";                                |
| 14  | expresión de cálculo/transformación: String zSCONMMAGNITUDE = zraiz + "SCO_NM_MAGNITUDE";                          |
| 15  | expresión de cálculo/transformación: String zSCONMOBJECTIVE = zraiz + "SCO_NM_OBJECTIVE";                          |
| 16  | expresión de cálculo/transformación: String zSCOCOMMENT = zraiz + "SCO_COMMENT";                                   |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 39  | /iconos/noname_historial_evaluaciones_ess_93_100.gif          |
| 43  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3 |
| 52  | javascript:history.back();                                    |
| 53  | /iconos/icono_flecha_azul2_ess_11_9.gif                       |
| 65  | javascript:history.back();                                    |
| 66  | /iconos/icono_flecha_azul2_ess_11_9.gif                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 43  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3 | ausente    | P06               |
| BASE   | 52  | javascript:history.back();                                    | dinámica   | P06               |
| BASE   | 65  | javascript:history.back();                                    | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p5_open_vis_obj2_body.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
