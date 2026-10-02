# mss_wunit_detail

Identificador: `mss_generico/mss_wunit_detail.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_wunit_detail.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_wunit_detail.jsp) | `03345bdfb8011df04847f41127703445e9eac1f714738e6b661bbd89fa314792` |    199 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_wunit_detail.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_wunit_detail.jsp) | `03345bdfb8011df04847f41127703445e9eac1f714738e6b661bbd89fa314792` |    199 |
| BASE / español    | [mss_generico/espanol/mss_wunit_detail.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_wunit_detail.jsp)                             | `03345bdfb8011df04847f41127703445e9eac1f714738e6b661bbd89fa314792` |    199 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_wunit_detail.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_wunit_detail.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                            |
| --- | ------------------------------------------------------------------- |
| 52  | -                                                                   |
| 80  | --                                                                  |
| 129 | -                                                                   |
| 174 | [valor dinámico] [valor dinámico] [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                          |
| --- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48  | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/informacion_blanco.gif                                                                                                               |
| 94  | textarea | cols=30; rows=3                                                                                                                                                                    |
| 99  | textarea | cols=30; rows=3                                                                                                                                                                    |
| 193 | a        | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 193 | img      | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 16  | WU              | getParameter(request,"WU") |

| L   | Variable   | Expresión fuente                                               | Resolución estática parcial                                    |
| --- | ---------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| 15  | zsubsesion | "SSM_SET_WORK_UNIT_TO_SEE"                                     | SSM_SET_WORK_UNIT_TO_SEE                                       |
| 16  | id_wu      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU") |
| 59  | icount     | 0                                                              | 0                                                              |
| 65  | icount_3   | 0                                                              | 0                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                   |
| --- | ------------- | ---------------------------------------------------------------------------------------------------- |
| 20  | m4:startpage  | m4task=SSM_SET_WORK_UNIT_TO_SEE                                                                      |
| 20  | m4:beginjob   |                                                                                                      |
| 21  | m4:datadef    | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                        |
| 22  | m4:exec       | node=SSM_SET_WORK_UNIT_TO_SEE; method=SSM_RESP_FOR_WORK_UNIT; m4object=SSM_SET_WORK_UNIT_TO_SEE      |
| 23  | m4:param      | name=ARG_WORK_UNIT; value=(id_wu)                                                                    |
| 26  | m4:exec       | node=SSM_SET_WORK_UNIT_TO_SEE; method=BUILD_SUB_WORK_UNIT_TREE_UP; m4object=SSM_SET_WORK_UNIT_TO_SEE |
| 27  | m4:param      | name=ARG_WORK_UNIT; value=(id_wu)                                                                    |
| 30  | m4:outputdef  | node=SSM_WORK_UNIT_DATA; m4alias=WORK_U; m4object=SSM_SET_WORK_UNIT_TO_SEE                           |
| 31  | m4:exec       | node=SSM_WORK_UNIT_DATA; alias=wu_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE             |
| 32  | m4:outputdef  | node=SSM_WORK_UNIT_RESP; m4alias=RESP; m4object=SSM_SET_WORK_UNIT_TO_SEE                             |
| 33  | m4:exec       | node=SSM_WORK_UNIT_RESP; alias=resp_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE           |
| 35  | m4:outputdef  | node=SSM_SET_WORK_UNIT_TO_SEE; m4alias=ROOT; m4object=SSM_SET_WORK_UNIT_TO_SEE                       |
| 36  | m4:exec       | node=SSM_SET_WORK_UNIT_TO_SEE; alias=root_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE     |
| 38  | m4:endjob     |                                                                                                      |
| 52  | m4:item       | item=STD_ID_WORK_UNIT; outputdef=WORK_U                                                              |
| 52  | m4:item       | item=STD_N_WORK_UNIT; outputdef=WORK_U                                                               |
| 60  | m4:outputexec | var=count; alias=wu_count                                                                            |
| 66  | m4:outputexec | var=count_3; alias=resp_count                                                                        |
| 80  | m4:item       | item=STD_ID_WORK_UNIT; outputdef=WORK_U                                                              |
| 80  | m4:item       | item=STD_N_WORK_UNIT; outputdef=WORK_U                                                               |
| 89  | m4:item       | item=STD_N_WU_TYPE; outputdef=WORK_U                                                                 |
| 94  | m4:item       | item=STD_DESCRIPTION; outputdef=WORK_U                                                               |
| 99  | m4:item       | item=STD_OBJECTIVES; outputdef=WORK_U                                                                |
| 122 | m4:dataloop   | outputdef=RESP                                                                                       |
| 125 | m4:current    | var=current; outputdef=RESP                                                                          |
| 129 | m4:item       | item=SCO_ID_HR; outputdef=RESP                                                                       |
| 129 | m4:item       | item=SCO_GB_NAME; outputdef=RESP                                                                     |
| 130 | m4:item       | item=SCO_N_TYPE_RES; outputdef=RESP                                                                  |
| 171 | m4:item       | item=HTML_CODE_SUB_TREE; outputdef=ROOT                                                              |
| 199 | m4:endpage    |                                                                                                      |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69  | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                    |
| 104 | &lt;%if (icount_3 &gt; 0) {%&gt;                                                                                                                                                                                                                                                  |
| 141 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                  |
| 145 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                  |
| 52  | expresión de cálculo/transformación: &lt;td align="center"&gt;&lt;u&gt;&lt;b&gt;&lt;br&gt;&lt;m4:item item="STD_ID_WORK_UNIT" outputdef="WORK_U"/&gt; - &lt;m4:item item="STD_N_WORK_UNIT" outputdef="WORK_U"/&gt;&lt;/u&gt;&lt;/b&gt;&lt;br&gt;&lt;br&gt;&lt;/div&gt;&lt;/td&gt; |
| 61  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                      |
| 67  | expresión de cálculo/transformación: &lt;% try { icount_3 = Integer.parseInt(count_3); } catch(Exception e) { icount_3 = 0; }%&gt;                                                                                                                                                |
| 129 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="2"&gt; &lt;m4:item item="SCO_ID_HR" outputdef="RESP"/&gt; - &lt;m4:item item="SCO_GB_NAME" outputdef="RESP"/&gt;&lt;/td&gt;                                                                              |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 7   | /libreria/funciones_sse.js          |
| 10  | /css/estilo_mss.css                 |
| 48  | /iconos/informacion_blanco.gif      |
| 193 | javascript:window.close()           |
| 193 | /iconos/entrar_blanco.gif           |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 193 | javascript:window.close()           | dinámica   | P06                                                                                                                                                                            |
| COLL   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 193 | javascript:window.close()           | dinámica   | P06                                                                                                                                                                            |
| IBER   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 193 | javascript:window.close()           | dinámica   | P06                                                                                                                                                                            |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_wunit_detail.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
