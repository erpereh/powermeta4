# smco_estimated_req_detail_cost

Identificador: `mss_g3/smco_estimated_req_detail_cost.jsp`. Perfil: **responsable**. Dominio: **talento**.

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

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_estimated_req_detail_cost.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_detail_cost.jsp) | `777f4c194af3d0343e502dbc6b0d5f76924bf4542fb298cbddff73e74130f3a4` |    148 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_estimated_req_detail_cost.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_estimated_req_detail_cost.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 80  | [valor dinámico] [valor dinámico] |
| 85  | [valor dinámico] [valor dinámico] |
| 90  | [valor dinámico] [valor dinámico] |
| 95  | [valor dinámico] [valor dinámico] |
| 104 | [valor dinámico] [valor dinámico] |
| 109 | [valor dinámico] [valor dinámico] |
| 113 | [valor dinámico] [valor dinámico] |
| 118 | [valor dinámico] [valor dinámico] |
| 124 | [valor dinámico] [valor dinámico] |
| 129 | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | a       | href=javascript:window.close();;                                                                                                                                                                                 |
| 137 | img     | alt=JSP_EXPR_Tran.getProperty(; title=JSP_EXPR_Tran.getProperty(; src=/iconos/entrar_blanco.gif; height=36; width=36; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave   | Acceso literal                            |
| --- | ----------------- | ----------------------------------------- |
| 16  | estado            | getParameter(request,"estado")            |
| 17  | zindbugetamts     | getParameter(request,"zindbugetamts")     |
| 18  | zinddeductamts    | getParameter(request,"zinddeductamts")    |
| 19  | zbugetamts        | getParameter(request,"zbugetamts")        |
| 20  | zdeductibleamts   | getParameter(request,"zdeductibleamts")   |
| 21  | zbugetamtrequest  | getParameter(request,"zbugetamtrequest")  |
| 22  | zdeductamtrequest | getParameter(request,"zdeductamtrequest") |
| 23  | zempeehour        | getParameter(request,"zempeehour")        |
| 24  | zdeducthour       | getParameter(request,"zdeducthour")       |
| 25  | znethour          | getParameter(request,"znethour")          |
| 26  | zdeductnethour    | getParameter(request,"zdeductnethour")    |
| 27  | zcurrency         | getParameter(request,"zcurrency")         |

| L   | Variable           | Expresión fuente                                                              | Resolución estática parcial                                                                                                |
| --- | ------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                         |
| 17  | zindbugetamts      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zindbugetamts")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zindbugetamts")                                                  |
| 18  | zinddeductamts     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinddeductamts")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinddeductamts")                                                 |
| 19  | zbugetamts         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamts")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamts")                                                     |
| 20  | zdeductibleamts    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductibleamts")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductibleamts")                                                |
| 21  | zbugetamtrequest   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamtrequest")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamtrequest")                                               |
| 22  | zdeductamtrequest  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductamtrequest") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductamtrequest")                                              |
| 23  | zempeehour         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempeehour")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempeehour")                                                     |
| 24  | zdeducthour        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeducthour")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeducthour")                                                    |
| 25  | znethour           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znethour")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znethour")                                                       |
| 26  | zdeductnethour     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductnethour")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductnethour")                                                 |
| 27  | zcurrency          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcurrency")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcurrency")                                                      |
| 34  | zsubsesion         | "SSM_SOLICITUDES_PENDIENTES"                                                  | SSM_SOLICITUDES_PENDIENTES                                                                                                 |
| 35  | zmeta4object       | "SSM_SOLICITUDES_PENDIENTES"                                                  | SSM_SOLICITUDES_PENDIENTES                                                                                                 |
| 36  | znodo              | "SSM_LISTA_DETALLE_CURSO"                                                     | SSM_LISTA_DETALLE_CURSO                                                                                                    |
| 38  | zraiz              | znodo + ":" + zsubsesion + "!" + znodo + "[0]" + "."                          | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}                             |
| 42  | zbugetamtrequestn  | zraiz + "SCO_BUGET_AMT_REQUEST"                                               | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_BUGET_AMT_REQUEST"}    |
| 43  | zbugetamtsn        | zraiz + "SCO_BUGET_AMT_S"                                                     | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_BUGET_AMT_S"}          |
| 44  | zdeductamtrequestn | zraiz + "SCO_DEDUCT_AMT_REQUEST"                                              | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_AMT_REQUEST"}   |
| 45  | zdeducthourn       | zraiz + "SCO_DEDUCT_HOUR_RATE"                                                | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_HOUR_RATE"}     |
| 46  | zdeductnethourn    | zraiz + "SCO_DEDUCT_NET_HOUR_RATE"                                            | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_NET_HOUR_RATE"} |
| 47  | zdeductibleamtsn   | zraiz + "SCO_DEDUCTIBLE_AMT_S"                                                | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCTIBLE_AMT_S"}     |
| 48  | zempeehourn        | zraiz + "SCO_EMPEE_HOUR_RATE"                                                 | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_EMPEE_HOUR_RATE"}      |
| 49  | zindbugetamtsn     | zraiz + "SCO_IND_BUGET_AMT_S"                                                 | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_IND_BUGET_AMT_S"}      |
| 50  | zinddeductamtsn    | zraiz + "SCO_IND_DEDUCTIBLE_AMT_S"                                            | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_IND_DEDUCTIBLE_AMT_S"} |
| 51  | znethourn          | zraiz + "SCO_NET_HOURLY_RATE"                                                 | SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_NET_HOURLY_RATE"}      |
| 53  | zoutputdef         | zsubsesion + "!" + znodo + "[" + 0 + "-" + 0 + "]"                            | SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"["}{0}{"-"}{0}{"]"}                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 56  | m4:startpage | m4task=SSM_SOLICITUDES_PENDIENTES                                                                                                                |
| 57  | m4:beginjob  |                                                                                                                                                  |
| 58  | m4:datadef   | m4o=SSM_SOLICITUDES_PENDIENTES; m4name=SSM_SOLICITUDES_PENDIENTES                                                                                |
| 60  | m4:outputdef | m4alias=SSM_LISTA_DETALLE_CURSO                                                                                                                  |
| 60  | m4:param     | name=m4name0; value=SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"["}{0}{"-"}{0}{"]"}                                                  |
| 62  | m4:endjob    |                                                                                                                                                  |
| 79  | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_IND_BUGET_AMT_S"}; htmlsafe=true      |
| 84  | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_IND_DEDUCTIBLE_AMT_S"}; htmlsafe=true |
| 89  | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_BUGET_AMT_S"}; htmlsafe=true          |
| 94  | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCTIBLE_AMT_S"}; htmlsafe=true     |
| 103 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_BUGET_AMT_REQUEST"}; htmlsafe=true    |
| 108 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_AMT_REQUEST"}; htmlsafe=true   |
| 112 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_EMPEE_HOUR_RATE"}; htmlsafe=true      |
| 117 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_HOUR_RATE"}; htmlsafe=true     |
| 123 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_NET_HOURLY_RATE"}; htmlsafe=true      |
| 128 | m4:label     | m4name=SSM_LISTA_DETALLE_CURSO{":"}SSM_SOLICITUDES_PENDIENTES{"!"}SSM_LISTA_DETALLE_CURSO{"[0]"}{"."}{"SCO_DEDUCT_NET_HOUR_RATE"}; htmlsafe=true |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 30  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                              |
| 38  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[0]" + ".";    |
| 42  | expresión de cálculo/transformación: String zbugetamtrequestn = zraiz + "SCO_BUGET_AMT_REQUEST";             |
| 43  | expresión de cálculo/transformación: String zbugetamtsn = zraiz + "SCO_BUGET_AMT_S";                         |
| 44  | expresión de cálculo/transformación: String zdeductamtrequestn = zraiz + "SCO_DEDUCT_AMT_REQUEST";           |
| 45  | expresión de cálculo/transformación: String zdeducthourn = zraiz + "SCO_DEDUCT_HOUR_RATE";                   |
| 46  | expresión de cálculo/transformación: String zdeductnethourn = zraiz + "SCO_DEDUCT_NET_HOUR_RATE";            |
| 47  | expresión de cálculo/transformación: String zdeductibleamtsn = zraiz + "SCO_DEDUCTIBLE_AMT_S";               |
| 48  | expresión de cálculo/transformación: String zempeehourn = zraiz + "SCO_EMPEE_HOUR_RATE";                     |
| 49  | expresión de cálculo/transformación: String zindbugetamtsn = zraiz + "SCO_IND_BUGET_AMT_S";                  |
| 50  | expresión de cálculo/transformación: String zinddeductamtsn = zraiz + "SCO_IND_DEDUCTIBLE_AMT_S";            |
| 51  | expresión de cálculo/transformación: String znethourn = zraiz + "SCO_NET_HOURLY_RATE";                       |
| 53  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + 0 + "-" + 0 + "]"; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp |
| 11  | /mss_g3/mss_g3_trans.jsp                |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 9   | /css/estilo_mss.css                     |
| 12  | /libreria/funciones_sse.js              |
| 136 | javascript:window.close();;             |
| 137 | /iconos/entrar_blanco.gif               |
| 10  | ../../mss_generico/espanol/menu_mss.jsp |
| 11  | /mss_g3/mss_g3_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                      |
| ------ | --- | --------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |
| BASE   | 12  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 136 | javascript:window.close();;             | dinámica   | P06                                                                                    |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_estimated_req_detail_cost.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
