# smco_estimated_req_cost

Identificador: `mss_g3/smco_estimated_req_cost.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                           | Ámbito | Diccionario                                                                                 |
| ------------------------- | ----------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Close              | Cerrar                                          | COLL   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close              | Cerrar                                          | CYC    | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close              | Cerrar                                          | IBER   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close              | Cerrar                                          | BASE   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close              | Cerrar                                          | BASE   | [translations/shco_g0_es.properties:L22](../../referencias/literales/shco_g0_es.md)         |
| Button.Close              | Cerrar                                          | BASE   | [translations/ssco_etask_es.properties:L37](../../referencias/literales/ssco_etask_es.md)   |
| Label.mss_g3_p6_mod1_Cost | Coste estimado por empleado, sin coste salarial | BASE   | [translations/mss_g3_es.properties:L88](../../referencias/literales/mss_g3_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_estimated_req_cost.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_cost.jsp) | `3695b6a0e878aaf67fabbca01426bd6bc4c4442475587f671ec094bde9053be5` |    117 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_estimated_req_cost.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_cost.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 106 | a       | href=javascript:window.close();                                                                                                                                                                                                                  |
| 107 | img     | alt=JSP_EXPR_Tran.getProperty(; title=JSP_EXPR_Tran.getProperty(; img=JSP_EXPR_Tran.getProperty(; src=/iconos/entrar_blanco.gif; height=36; width=36; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 16  | estado          | getParameter(request,"estado")       |
| 17  | zDT_START       | getParameter(request,"zDT_START")    |
| 18  | zDT_END         | getParameter(request,"zDT_END")      |
| 19  | zNUM_PLACES     | getParameter(request,"zNUM_PLACES")  |
| 20  | zTYPE           | getParameter(request,"zTYPE")        |
| 21  | zID_DEV_SUB     | getParameter(request,"zID_DEV_SUB")  |
| 22  | zID_DEV_SUBA    | getParameter(request,"zID_DEV_SUBA") |

| L   | Variable                    | Expresión fuente                                                         | Resolución estática parcial                                                                               |
| --- | --------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 16  | estado                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 17  | start                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_START")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_START")                                     |
| 18  | end                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_END")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_END")                                       |
| 19  | num                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNUM_PLACES")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNUM_PLACES")                                   |
| 20  | type_f                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTYPE")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTYPE")                                         |
| 21  | id_dev                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB")                                   |
| 22  | id_devSA                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUBA") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUBA")                                  |
| 27  | zsubsesion                  | "SCO_SUBPRODUCT_SUBACTION_COSTS"                                         | SCO_SUBPRODUCT_SUBACTION_COSTS                                                                            |
| 28  | zmeta4object                | "SCO_SUBPRODUCT_SUBACTION_COSTS"                                         | SCO_SUBPRODUCT_SUBACTION_COSTS                                                                            |
| 29  | znodo                       | "SCO_REQUEST_DET"                                                        | SCO_REQUEST_DET                                                                                           |
| 30  | zoutputdef                  | zsubsesion + "!" + znodo + "[*]"                                         | SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"[*]"}                                                 |
| 31  | zmove                       | znodo + ":" + znodo + "[FIRST]"                                          | SCO_REQUEST_DET{":"}SCO_REQUEST_DET{"[FIRST]"}                                                            |
| 32  | znamenodo                   | znodo + ":" + zsubsesion + "!" + znodo                                   | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET                                    |
| 33  | zcomun                      | znodo + ":" + zsubsesion + "!" + znodo + "."                             | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}                               |
| 35  | zSCO_BUGET_AMT_S            | zcomun + "SCO_BUGET_AMT_S"                                               | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_BUGET_AMT_S"}            |
| 36  | zSCO_DEDUCTIBLE_AMT_S       | zcomun + "SCO_DEDUCTIBLE_AMT_S"                                          | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_DEDUCTIBLE_AMT_S"}       |
| 37  | zSCO_IND_BUGET_AMT_S        | zcomun + "SCO_IND_BUGET_AMT_S"                                           | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_BUGET_AMT_S"}        |
| 38  | zSCO_IND_DEDUCTIBLE_AMT_S   | zcomun + "SCO_IND_DEDUCTIBLE_AMT_S"                                      | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_DEDUCTIBLE_AMT_S"}   |
| 41  | zSCO_BUGET_AMT_S_N          | zcomun + "SCO_BUGET_AMT_S_N"                                             | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_BUGET_AMT_S_N"}          |
| 42  | zSCO_DEDUCTIBLE_AMT_S_N     | zcomun + "SCO_DEDUCTIBLE_AMT_S_N"                                        | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_DEDUCTIBLE_AMT_S_N"}     |
| 43  | zSCO_IND_BUGET_AMT_S_N      | zcomun + "SCO_IND_BUGET_AMT_S_N"                                         | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_BUGET_AMT_S_N"}      |
| 44  | zSCO_IND_DEDUCTIBLE_AMT_S_N | zcomun + "SCO_IND_DEDUCTIBLE_AMT_S_N"                                    | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_DEDUCTIBLE_AMT_S_N"} |
| 46  | zSESSION_CUR                | zcomun + "SESSION_CUR"                                                   | SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SESSION_CUR"}                |
| 47  | zmetodoCOST                 | "COST:" + zsubsesion + "!SCO_REQUEST_DET.SCO_CALC_MSS"                   | COST:{}SCO_SUBPRODUCT_SUBACTION_COSTS{"!SCO_REQUEST_DET.SCO_CALC_MSS"}                                    |
| 64  | zcount                      | 0                                                                        | 0                                                                                                         |
| 70  | zcountv                     | String.valueOf(zcount)                                                   | String.valueOf(zcount)                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                         |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 49  | m4:startpage | m4task=SCO_SUBPRODUCT_SUBACTION_COSTS                                                                                      |
| 50  | m4:beginjob  |                                                                                                                            |
| 51  | m4:datadef   | m4o=SCO_SUBPRODUCT_SUBACTION_COSTS; m4name=SCO_SUBPRODUCT_SUBACTION_COSTS                                                  |
| 52  | m4:exec      | m4method=COST:{}SCO_SUBPRODUCT_SUBACTION_COSTS{"!SCO_REQUEST_DET.SCO_CALC_MSS"}                                            |
| 53  | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_START")                             |
| 54  | m4:param     | name=ARG_DT_END; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_END")                                 |
| 55  | m4:param     | name=ARG_ID_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTYPE")                                  |
| 56  | m4:param     | name=ARG_NUM_PLACES; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNUM_PLACES")                         |
| 57  | m4:param     | name=ARG_ID_DEV_SUB; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB")                         |
| 58  | m4:param     | name=ARG_ID_DEV_SUBA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUBA")                       |
| 60  | m4:outputdef | m4alias=SCO_REQUEST_DET                                                                                                    |
| 60  | m4:param     | name=m4name0; value=SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"[*]"}                                              |
| 61  | m4:endjob    |                                                                                                                            |
| 62  | m4:move      |                                                                                                                            |
| 62  | m4:param     | name=SCO_SUBPRODUCT_SUBACTION_COSTS; value=SCO_REQUEST_DET{":"}SCO_REQUEST_DET{"[FIRST]"}                                  |
| 85  | m4:label     | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_BUGET_AMT_S_N"}; htmlsafe=true     |
| 86  | m4:item      | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_BUGET_AMT_S"}; htmlsafe=true       |
| 86  | m4:item      | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SESSION_CUR"}; htmlsafe=true           |
| 95  | m4:label     | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_BUGET_AMT_S_N"}; htmlsafe=true |
| 96  | m4:item      | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SCO_IND_BUGET_AMT_S"}; htmlsafe=true   |
| 96  | m4:item      | m4name=SCO_REQUEST_DET{":"}SCO_SUBPRODUCT_SUBACTION_COSTS{"!"}SCO_REQUEST_DET{"."}{"SESSION_CUR"}; htmlsafe=true           |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 67  | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------- |
| 23  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                   |
| 30  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                        |
| 31  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                              |
| 32  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                   |
| 33  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + ".";                |
| 35  | expresión de cálculo/transformación: String zSCO_BUGET_AMT_S = zcomun + "SCO_BUGET_AMT_S";                        |
| 36  | expresión de cálculo/transformación: String zSCO_DEDUCTIBLE_AMT_S = zcomun + "SCO_DEDUCTIBLE_AMT_S";              |
| 37  | expresión de cálculo/transformación: String zSCO_IND_BUGET_AMT_S = zcomun + "SCO_IND_BUGET_AMT_S";                |
| 38  | expresión de cálculo/transformación: String zSCO_IND_DEDUCTIBLE_AMT_S = zcomun + "SCO_IND_DEDUCTIBLE_AMT_S";      |
| 41  | expresión de cálculo/transformación: String zSCO_BUGET_AMT_S_N = zcomun + "SCO_BUGET_AMT_S_N";                    |
| 42  | expresión de cálculo/transformación: String zSCO_DEDUCTIBLE_AMT_S_N = zcomun + "SCO_DEDUCTIBLE_AMT_S_N";          |
| 43  | expresión de cálculo/transformación: String zSCO_IND_BUGET_AMT_S_N = zcomun + "SCO_IND_BUGET_AMT_S_N";            |
| 44  | expresión de cálculo/transformación: String zSCO_IND_DEDUCTIBLE_AMT_S_N = zcomun + "SCO_IND_DEDUCTIBLE_AMT_S_N";  |
| 46  | expresión de cálculo/transformación: String zSESSION_CUR = zcomun + "SESSION_CUR";                                |
| 47  | expresión de cálculo/transformación: String zmetodoCOST = "COST:" + zsubsesion + "!SCO_REQUEST_DET.SCO_CALC_MSS"; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp |
| 11  | /mss_g3/mss_g3_trans.jsp                |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 9   | /css/estilo_mss.css                     |
| 12  | /libreria/funciones_sse.js              |
| 106 | javascript:window.close();              |
| 107 | /iconos/entrar_blanco.gif               |
| 10  | ../../mss_generico/espanol/menu_mss.jsp |
| 11  | /mss_g3/mss_g3_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                      |
| ------ | --- | --------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |
| BASE   | 12  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 106 | javascript:window.close();              | dinámica   | P06                                                                                    |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_estimated_req_cost.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
