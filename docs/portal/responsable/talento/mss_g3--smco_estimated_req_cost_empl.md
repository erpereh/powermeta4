# smco_estimated_req_cost_empl

Identificador: `mss_g3/smco_estimated_req_cost_empl.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto                       | Ámbito | Diccionario                                                                                 |
| ------------------------ | --------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Close             | Cerrar                      | COLL   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                      | CYC    | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                      | IBER   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                      | BASE   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                      | BASE   | [translations/shco_g0_es.properties:L22](../../referencias/literales/shco_g0_es.md)         |
| Button.Close             | Cerrar                      | BASE   | [translations/ssco_etask_es.properties:L37](../../referencias/literales/ssco_etask_es.md)   |
| Label.mss_g3_p3_val_Cost | Coste estimado por empleado | BASE   | [translations/mss_g3_es.properties:L90](../../referencias/literales/mss_g3_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_estimated_req_cost_empl.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_cost_empl.jsp) | `9b24f5ac2876dbda12a81aebbe470e5bc765a471d80412187ca03b9c0257d20b` |    141 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_estimated_req_cost_empl.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_cost_empl.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 134 | a       | href=javascript:window.close();                                                                                                                                                                                  |
| 134 | img     | alt=JSP_EXPR_Tran.getProperty(; title=JSP_EXPR_Tran.getProperty(; src=/iconos/entrar_blanco.gif; height=36; width=36; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 14  | estado          | getParameter(request,"estado")      |
| 15  | zID_DEV_SUB     | getParameter(request,"zID_DEV_SUB") |
| 16  | zID_PERSON      | getParameter(request,"zID_PERSON")  |
| 17  | zOR_PERSON      | getParameter(request,"zOR_PERSON")  |
| 18  | zHOURS          | getParameter(request,"zHOURS")      |
| 19  | zHOURS_OTW      | getParameter(request,"zHOURS_OTW")  |

| L   | Variable                    | Expresión fuente                                                        | Resolución estática parcial                                                                         |
| --- | --------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 14  | estado                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  |
| 15  | id_dev                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB")                             |
| 16  | id_person                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_PERSON")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_PERSON")                              |
| 17  | or_person                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOR_PERSON")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOR_PERSON")                              |
| 18  | hours                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS")                                  |
| 19  | hours_otw                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS_OTW")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS_OTW")                              |
| 24  | zsubsesion                  | "SCO_TRAINING_REQ_COSTS"                                                | SCO_TRAINING_REQ_COSTS                                                                              |
| 25  | zmeta4object                | "SCO_TRAINING_REQ_COSTS"                                                | SCO_TRAINING_REQ_COSTS                                                                              |
| 28  | znodo                       | "SCO_MT_REQUEST"                                                        | SCO_MT_REQUEST                                                                                      |
| 29  | zoutputdef                  | zsubsesion + "!" + znodo + "[*]"                                        | SCO_TRAINING_REQ_COSTS{"!"}SCO_MT_REQUEST{"[*]"}                                                    |
| 30  | zmove                       | znodo + ":" + znodo + "[FIRST]"                                         | SCO_MT_REQUEST{":"}SCO_MT_REQUEST{"[FIRST]"}                                                        |
| 31  | znamenodo                   | znodo + ":" + zsubsesion + "!" + znodo                                  | SCO_MT_REQUEST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_MT_REQUEST                                        |
| 32  | zcomun                      | znodo + ":" + zsubsesion + "!" + znodo + "."                            | SCO_MT_REQUEST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_MT_REQUEST{"."}                                   |
| 35  | znodoC                      | "SCO_REQ_SUB_COST"                                                      | SCO_REQ_SUB_COST                                                                                    |
| 36  | zoutputdefC                 | zsubsesion + "!" + znodoC + "[*]"                                       | SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"[*]"}                                                  |
| 37  | zmoveC                      | znodoC + ":" + znodoC + "[FIRST]"                                       | SCO_REQ_SUB_COST{":"}SCO_REQ_SUB_COST{"[FIRST]"}                                                    |
| 38  | znamenodoC                  | znodoC + ":" + zsubsesion + "!" + znodoC                                | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST                                    |
| 39  | zcomunC                     | znodoC + ":" + zsubsesion + "!" + znodoC + "."                          | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}                               |
| 42  | zSCO_BUGET_AMT_S            | zcomunC + "SCO_BUGET_AMT_S"                                             | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_BUGET_AMT_S"}            |
| 43  | zSCO_DEDUCTIBLE_AMT_S       | zcomunC + "SCO_DEDUCTIBLE_AMT_S"                                        | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_DEDUCTIBLE_AMT_S"}       |
| 44  | zSCO_IND_BUGET_AMT_S        | zcomunC + "SCO_IND_BUGET_AMT_S"                                         | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_BUGET_AMT_S"}        |
| 45  | zSCO_IND_DEDUCTIBLE_AMT_S   | zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S"                                    | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_DEDUCTIBLE_AMT_S"}   |
| 48  | zSCO_BUGET_AMT_S_N          | zcomunC + "SCO_BUGET_AMT_S_N"                                           | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_BUGET_AMT_S_N"}          |
| 49  | zSCO_DEDUCTIBLE_AMT_S_N     | zcomunC + "SCO_DEDUCTIBLE_AMT_S_N"                                      | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_DEDUCTIBLE_AMT_S_N"}     |
| 50  | zSCO_IND_BUGET_AMT_S_N      | zcomunC + "SCO_IND_BUGET_AMT_S_N"                                       | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_BUGET_AMT_S_N"}      |
| 51  | zSCO_IND_DEDUCTIBLE_AMT_S_N | zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S_N"                                  | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_DEDUCTIBLE_AMT_S_N"} |
| 54  | zSCO_EMPEE_HOUR_RATEl       | zcomunC + "SSCO_EMPEE_HOUR_RATE"                                        | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SSCO_EMPEE_HOUR_RATE"}       |
| 55  | zSCO_EMPEE_HOUR_RATE        | zcomunC + "SCO_EMPEE_HOUR_RATE"                                         | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_EMPEE_HOUR_RATE"}        |
| 57  | zSCO_DEDUCT_HOUR_RATE       | zcomunC + "SCO_DEDUCT_HOUR_RATE"                                        | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_DEDUCT_HOUR_RATE"}       |
| 59  | zSCO_NET_HOURLY_RATEl       | zcomunC + "SSCO_NET_HOURLY_RATE"                                        | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SSCO_NET_HOURLY_RATE"}       |
| 60  | zSCO_NET_HOURLY_RATE        | zcomunC + "SCO_NET_HOURLY_RATE"                                         | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_NET_HOURLY_RATE"}        |
| 61  | zSCO_DEDUCT_NET_HOUR_RATE   | zcomunC + "SCO_DEDUCT_NET_HOUR_RATE"                                    | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_DEDUCT_NET_HOUR_RATE"}   |
| 63  | zSESSION_CUR                | zcomunC + "ID_CUR_BUGET_AMT_S"                                          | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"ID_CUR_BUGET_AMT_S"}         |
| 65  | zlabelDEduc                 | zcomunC + "SSCO_DEDUC"                                                  | SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SSCO_DEDUC"}                 |
| 67  | zmetodoCOST                 | "COST:" + zsubsesion + "!SCO_MT_REQUEST.SCO_CALC_COSTS_MSS"             | COST:{}SCO_TRAINING_REQ_COSTS{"!SCO_MT_REQUEST.SCO_CALC_COSTS_MSS"}                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| 70  | m4:startpage | m4task=SCO_TRAINING_REQ_COSTS                                                                                        |
| 71  | m4:beginjob  |                                                                                                                      |
| 72  | m4:datadef   | m4o=SCO_TRAINING_REQ_COSTS; m4name=SCO_TRAINING_REQ_COSTS                                                            |
| 73  | m4:exec      | m4method=COST:{}SCO_TRAINING_REQ_COSTS{"!SCO_MT_REQUEST.SCO_CALC_COSTS_MSS"}                                         |
| 74  | m4:param     | name=ARG_ID_DEV_SUB; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB")                   |
| 75  | m4:param     | name=ARG_ID_PERSON; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_PERSON")                     |
| 76  | m4:param     | name=ARG_OR_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOR_PERSON")                         |
| 77  | m4:param     | name=ARG_HOURS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS")                             |
| 78  | m4:param     | name=ARG_HOURS_OTW; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS_OTW")                     |
| 80  | m4:outputdef | m4alias=SCO_MT_REQUEST                                                                                               |
| 80  | m4:param     | name=m4name0; value=SCO_TRAINING_REQ_COSTS{"!"}SCO_MT_REQUEST{"[*]"}                                                 |
| 81  | m4:outputdef | m4alias=SCO_REQ_SUB_COST                                                                                             |
| 81  | m4:param     | name=m4name0; value=SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"[*]"}                                               |
| 82  | m4:endjob    |                                                                                                                      |
| 85  | m4:move      |                                                                                                                      |
| 85  | m4:param     | name=SCO_TRAINING_REQ_COSTS; value=SCO_MT_REQUEST{":"}SCO_MT_REQUEST{"[FIRST]"}                                      |
| 86  | m4:move      |                                                                                                                      |
| 86  | m4:param     | name=SCO_TRAINING_REQ_COSTS; value=SCO_REQ_SUB_COST{":"}SCO_REQ_SUB_COST{"[FIRST]"}                                  |
| 95  | m4:label     | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_BUGET_AMT_S_N"}; htmlsafe=true     |
| 96  | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_BUGET_AMT_S"}; htmlsafe=true       |
| 96  | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"ID_CUR_BUGET_AMT_S"}; htmlsafe=true    |
| 105 | m4:label     | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_BUGET_AMT_S_N"}; htmlsafe=true |
| 106 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_IND_BUGET_AMT_S"}; htmlsafe=true   |
| 106 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"ID_CUR_BUGET_AMT_S"}; htmlsafe=true    |
| 115 | m4:label     | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SSCO_EMPEE_HOUR_RATE"}; htmlsafe=true  |
| 116 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_EMPEE_HOUR_RATE"}; htmlsafe=true   |
| 116 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"ID_CUR_BUGET_AMT_S"}; htmlsafe=true    |
| 125 | m4:label     | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SSCO_NET_HOURLY_RATE"}; htmlsafe=true  |
| 126 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"SCO_NET_HOURLY_RATE"}; htmlsafe=true   |
| 126 | m4:item      | m4name=SCO_REQ_SUB_COST{":"}SCO_TRAINING_REQ_COSTS{"!"}SCO_REQ_SUB_COST{"."}{"ID_CUR_BUGET_AMT_S"}; htmlsafe=true    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                        |
| 29  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                             |
| 30  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                   |
| 31  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                        |
| 32  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + ".";                     |
| 36  | expresión de cálculo/transformación: String zoutputdefC = zsubsesion + "!" + znodoC + "[*]";                           |
| 37  | expresión de cálculo/transformación: String zmoveC = znodoC + ":" + znodoC + "[FIRST]";                                |
| 38  | expresión de cálculo/transformación: String znamenodoC = znodoC + ":" + zsubsesion + "!" + znodoC;                     |
| 39  | expresión de cálculo/transformación: String zcomunC = znodoC + ":" + zsubsesion + "!" + znodoC + ".";                  |
| 42  | expresión de cálculo/transformación: String zSCO_BUGET_AMT_S = zcomunC + "SCO_BUGET_AMT_S";                            |
| 43  | expresión de cálculo/transformación: String zSCO_DEDUCTIBLE_AMT_S = zcomunC + "SCO_DEDUCTIBLE_AMT_S";                  |
| 44  | expresión de cálculo/transformación: String zSCO_IND_BUGET_AMT_S = zcomunC + "SCO_IND_BUGET_AMT_S";                    |
| 45  | expresión de cálculo/transformación: String zSCO_IND_DEDUCTIBLE_AMT_S = zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S";          |
| 48  | expresión de cálculo/transformación: String zSCO_BUGET_AMT_S_N = zcomunC + "SCO_BUGET_AMT_S_N";                        |
| 49  | expresión de cálculo/transformación: String zSCO_DEDUCTIBLE_AMT_S_N = zcomunC + "SCO_DEDUCTIBLE_AMT_S_N";              |
| 50  | expresión de cálculo/transformación: String zSCO_IND_BUGET_AMT_S_N = zcomunC + "SCO_IND_BUGET_AMT_S_N";                |
| 51  | expresión de cálculo/transformación: String zSCO_IND_DEDUCTIBLE_AMT_S_N = zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S_N";      |
| 54  | expresión de cálculo/transformación: String zSCO_EMPEE_HOUR_RATEl = zcomunC + "SSCO_EMPEE_HOUR_RATE";                  |
| 55  | expresión de cálculo/transformación: String zSCO_EMPEE_HOUR_RATE = zcomunC + "SCO_EMPEE_HOUR_RATE";                    |
| 57  | expresión de cálculo/transformación: String zSCO_DEDUCT_HOUR_RATE = zcomunC + "SCO_DEDUCT_HOUR_RATE";                  |
| 59  | expresión de cálculo/transformación: String zSCO_NET_HOURLY_RATEl = zcomunC + "SSCO_NET_HOURLY_RATE";                  |
| 60  | expresión de cálculo/transformación: String zSCO_NET_HOURLY_RATE = zcomunC + "SCO_NET_HOURLY_RATE";                    |
| 61  | expresión de cálculo/transformación: String zSCO_DEDUCT_NET_HOUR_RATE = zcomunC + "SCO_DEDUCT_NET_HOUR_RATE";          |
| 63  | expresión de cálculo/transformación: String zSESSION_CUR = zcomunC + "ID_CUR_BUGET_AMT_S";                             |
| 65  | expresión de cálculo/transformación: String zlabelDEduc = zcomunC + "SSCO_DEDUC";                                      |
| 67  | expresión de cálculo/transformación: String zmetodoCOST = "COST:" + zsubsesion + "!SCO_MT_REQUEST.SCO_CALC_COSTS_MSS"; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 8   | ../../mss_generico/espanol/menu_mss.jsp |
| 9   | /mss_g3/mss_g3_trans.jsp                |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 7   | /css/estilo_mss.css                     |
| 10  | /libreria/funciones_sse.js              |
| 134 | javascript:window.close();              |
| 134 | /iconos/entrar_blanco.gif               |
| 8   | ../../mss_generico/espanol/menu_mss.jsp |
| 9   | /mss_g3/mss_g3_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                      |
| ------ | --- | --------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 9   | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |
| BASE   | 10  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 134 | javascript:window.close();              | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 9   | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_estimated_req_cost_empl.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
