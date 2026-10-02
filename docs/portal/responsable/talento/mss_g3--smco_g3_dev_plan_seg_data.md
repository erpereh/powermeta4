# smco_g3_dev_plan_seg_data

Identificador: `mss_g3/smco_g3_dev_plan_seg_data.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                              | Texto                                                         | Ámbito | Diccionario                                                                                     |
| ---------------------------------- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| Label.NoDataFound                  | Actualmente no tienes ningún dato.                            | COLL   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.NoDataFound                  | Actualmente no tienes ningún dato.                            | CYC    | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.NoDataFound                  | Actualmente no tienes ningún dato.                            | IBER   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.NoDataFound                  | Actualmente no tienes ningún dato.                            | BASE   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.NoDataFound                  | No hay tareas pendientes.                                     | BASE   | [translations/ssco_etask_es.properties:L13](../../referencias/literales/ssco_etask_es.md)       |
| Label.ssco_0                       | No                                                            | COLL   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_0                       | No                                                            | CYC    | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_0                       | No                                                            | IBER   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_0                       | No                                                            | BASE   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_1                       | Sí                                                            | COLL   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_1                       | Sí                                                            | CYC    | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_1                       | Sí                                                            | IBER   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.ssco_1                       | Sí                                                            | BASE   | [translations/ess_mss_gen_es.properties:L195](../../referencias/literales/ess_mss_gen_es.md)    |
| dev_plan.emp_link_rec_close        | Cerrar                                                        | BASE   | [translations/smco_dev_plan_es.properties:L17](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_title_follow          | Seguimiento del plan del empleado                             | BASE   | [translations/smco_dev_plan_es.properties:L31](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.filter_follow_eval_nodata | No hay acciones de desarrollo para este proceso de evaluación | BASE   | [translations/smco_dev_plan_es.properties:L37](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.filter_follow_job_nodata  | No hay acciones de desarrollo para este puesto                | BASE   | [translations/smco_dev_plan_es.properties:L36](../../referencias/literales/smco_dev_plan_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_dev_plan_seg_data.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_seg_data.jsp) | `ffe1e2fd02815da0d4e96af10c5b49aedd9adc8f6b3384c0b1cd333e1ef15a24` |     13 |
| BASE / compartido | [mss_g3/smco_g3_dev_plan_seg_data.jsp](../../../../clon_portal/portal/mss_g3/smco_g3_dev_plan_seg_data.jsp)                 | `c3865deb956c7ad232a498888a7227b1b4e725d81b877e3c80f3f4ac0b91e398` |    320 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_dev_plan_seg_data.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_seg_data.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp      |
| 12  | ../smco_dev_plan_trans.jsp                   |
| 13  | ../smco_g3_dev_plan_seg_data.jsp             |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 8   | /css/estilo_mss.css                          |
| 9   | /libreria/funciones_sse.js                   |
| 10  | /libreria/clase_val_entradas.js              |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp      |
| 12  | ../smco_dev_plan_trans.jsp                   |
| 13  | ../smco_g3_dev_plan_seg_data.jsp             |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [mss_g3/smco_g3_dev_plan_seg_data.jsp](../../../../clon_portal/portal/mss_g3/smco_g3_dev_plan_seg_data.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 136 | [valor dinámico][valor dinámico]                                                                                                                       |
| 137 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 141 | :                                                                                                                                                      |
| 142 | :                                                                                                                                                      |
| 143 | :                                                                                                                                                      |
| 154 | [valor dinámico][valor dinámico]                                                                                                                       |
| 155 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 170 | [valor dinámico][valor dinámico]                                                                                                                       |
| 171 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 176 | :                                                                                                                                                      |
| 177 | :                                                                                                                                                      |
| 188 | [valor dinámico][valor dinámico]                                                                                                                       |
| 189 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 201 | :                                                                                                                                                      |
| 216 | [valor dinámico][valor dinámico]                                                                                                                       |
| 217 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 232 | :                                                                                                                                                      |
| 235 | :                                                                                                                                                      |
| 254 | [valor dinámico][valor dinámico]                                                                                                                       |
| 255 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |
| 260 | : 0                                                                                                                                                    |
| 273 | :                                                                                                                                                      |
| 274 | :                                                                                                                                                      |
| 275 | :                                                                                                                                                      |
| 298 | [valor dinámico][valor dinámico]                                                                                                                       |
| 300 | " src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt; " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                 |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 137 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                        |
| 137 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                        |
| 155 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                        |
| 155 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                        |
| 171 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                                        |
| 171 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                                        |
| 189 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                                        |
| 189 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                                        |
| 217 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                        |
| 217 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo7%&gt;                                                                                                                        |
| 255 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                                                                        |
| 255 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                                                                        |
| 300 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoaux%&gt;                                                                                                                      |
| 300 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoaux%&gt;                                                                                                                      |
| 312 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; tabindex=9; href=javascript:window.close();                                                                                                    |
| 312 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/entrar_blanco.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave          | Acceso literal                                   |
| --- | ------------------------ | ------------------------------------------------ |
| 5   | zid_hr                   | getParameter(request,"zid_hr")                   |
| 6   | zper                     | getParameter(request,"zper")                     |
| 7   | zidhr_name               | getParameter(request,"zidhr_name")               |
| 11  | ARG_TYPE                 | getParameter(request,"ARG_TYPE")                 |
| 13  | SMCO_ID_JOB_PARAM        | getParameter(request,"SMCO_ID_JOB_PARAM")        |
| 15  | SCO_ID_CR_PATH_ACT_PARAM | getParameter(request,"SCO_ID_CR_PATH_ACT_PARAM") |
| 17  | SCO_DT_START_FILTER      | getParameter(request,"SCO_DT_START_FILTER")      |
| 18  | SCO_DT_END_FILTER        | getParameter(request,"SCO_DT_END_FILTER")        |
| 21  | SMCO_ID_PLAN_FILTER      | getParameter(request,"SMCO_ID_PLAN_FILTER")      |
| 22  | SMCO_DT_PLAN_FILTER      | getParameter(request,"SMCO_DT_PLAN_FILTER")      |

| L   | Variable      | Expresión fuente                                                                     | Resolución estática parcial                                                          |
| --- | ------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 5   | zidhr_param   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")                   |
| 6   | zorperiod     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")                     |
| 7   | zidhr_name    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name")               |
| 11  | zARG_TYPE     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TYPE")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TYPE")                 |
| 13  | zfilter_job   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_JOB_PARAM")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_JOB_PARAM")        |
| 15  | zfilter_cp    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CR_PATH_ACT_PARAM") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CR_PATH_ACT_PARAM") |
| 17  | zdt_start     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_FILTER")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_FILTER")      |
| 18  | zdt_end       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_FILTER")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_FILTER")        |
| 21  | zid_eval_plan | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER")      |
| 22  | zdt_eval_plan | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER")      |
| 25  | z1            | Tran.getProperty("Label.ssco_1")                                                     | Tran.getProperty("Label.ssco_1")                                                     |
| 26  | z0            | Tran.getProperty("Label.ssco_0")                                                     | Tran.getProperty("Label.ssco_0")                                                     |
| 30  | zsubsesion    | "SMCO_DEV_PLAN_ACCION_SEG"                                                           | SMCO_DEV_PLAN_ACCION_SEG                                                             |
| 31  | zmeta4object  | "SMCO_DEV_PLAN_ACCION_SEG"                                                           | SMCO_DEV_PLAN_ACCION_SEG                                                             |
| 32  | znodo         | "SMCO_DEV_PLAN_ACCION_SEG"                                                           | SMCO_DEV_PLAN_ACCION_SEG                                                             |
| 33  | znodo1        | "SMCO_DEV_ACCION_SEG_JOB"                                                            | SMCO_DEV_ACCION_SEG_JOB                                                              |
| 34  | znodo2        | "SMCO_DEV_ACCION_SEG_JOB"                                                            | SMCO_DEV_ACCION_SEG_JOB                                                              |
| 35  | znodo3        | "SMCO_DEV_ACCION_SEG_EVAL_V"                                                         | SMCO_DEV_ACCION_SEG_EVAL_V                                                           |
| 36  | znodo4        | "SMCO_EMPLOYEE_EVAL"                                                                 | SMCO_EMPLOYEE_EVAL                                                                   |
| 38  | znodo5        | "SMCO_DEV_PLAN_JOB"                                                                  | SMCO_DEV_PLAN_JOB                                                                    |
| 39  | znodo6        | "SMCO_DEV_PLAN_EVAL"                                                                 | SMCO_DEV_PLAN_EVAL                                                                   |
| 40  | znodo7        | "SMCO_DEV_PLAN_OTHERS"                                                               | SMCO_DEV_PLAN_OTHERS                                                                 |
| 42  | zoutputdef    | zsubsesion + "!" + znodo + "[*]"                                                     | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_ACCION_SEG{"[*]"}                         |
| 43  | zoutputdef1   | zsubsesion + "!" + znodo1 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_ACCION_SEG_JOB{"[*]"}                          |
| 46  | zmove         | znodo + ":" + znodo + "[FIRST]"                                                      | SMCO_DEV_PLAN_ACCION_SEG{":"}SMCO_DEV_PLAN_ACCION_SEG{"[FIRST]"}                     |
| 48  | zmove1        | znodo1 + ":" + znodo1 + "[FIRST]"                                                    | SMCO_DEV_ACCION_SEG_JOB{":"}SMCO_DEV_ACCION_SEG_JOB{"[FIRST]"}                       |
| 49  | znamenodo1    | znodo1 + ":" + zsubsesion + "!" + znodo1                                             | SMCO_DEV_ACCION_SEG_JOB{":"}SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_ACCION_SEG_JOB     |
| 51  | zmetodocarga  | "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_ACTIONS"                | CARGA:{}SMCO_DEV_PLAN_ACCION_SEG{"!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_ACTIONS"}      |
| 53  | zoutputdef3   | zsubsesion + "!" + znodo3 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_ACCION_SEG_EVAL_V{"[*]"}                       |
| 54  | zoutputdef4   | zsubsesion + "!" + znodo4 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_EMPLOYEE_EVAL{"[*]"}                               |
| 55  | zoutputdef5   | zsubsesion + "!" + znodo5 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_JOB{"[*]"}                                |
| 56  | zoutputdef6   | zsubsesion + "!" + znodo6 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_EVAL{"[*]"}                               |
| 57  | zoutputdef7   | zsubsesion + "!" + znodo7 + "[*]"                                                    | SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_OTHERS{"[*]"}                             |
| 58  | znamenodo7    | znodo7 + ":" + zsubsesion + "!" + znodo7                                             | SMCO_DEV_PLAN_OTHERS{":"}SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_OTHERS           |
| 59  | scount1       | ""                                                                                   |                                                                                      |
| 90  | itipoJob      | 0                                                                                    | 0                                                                                    |
| 91  | zmoveso       | znodo2 + ":" + znodo2                                                                | SMCO_DEV_ACCION_SEG_JOB{":"}SMCO_DEV_ACCION_SEG_JOB                                  |
| 92  | zalias2       | ""                                                                                   |                                                                                      |
| 93  | hb            | 0                                                                                    | 0                                                                                    |
| 108 | zcounti1      | 0                                                                                    | 0                                                                                    |
| 109 | zcounti3      | 0                                                                                    | 0                                                                                    |
| 116 | zIdJobAnt     | ""                                                                                   |                                                                                      |
| 117 | zcounti5      | 0                                                                                    | 0                                                                                    |
| 117 | zcounti6      | 0                                                                                    | 0                                                                                    |
| 117 | zcounti7      | 0                                                                                    | 0                                                                                    |
| 117 | zcountOtotal  | 0                                                                                    | 0                                                                                    |
| 268 | znodoaux      | ""                                                                                   |                                                                                      |
| 268 | zmoveaux      | ""                                                                                   |                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                      |
| --- | ------------- | ------------------------------------------------------------------------------------------------------- |
| 61  | m4:startpage  | m4task=SMCO_DEV_PLAN_ACCION_SEG                                                                         |
| 62  | m4:beginjob   |                                                                                                         |
| 63  | m4:datadef    | m4o=SMCO_DEV_PLAN_ACCION_SEG; m4name=SMCO_DEV_PLAN_ACCION_SEG                                           |
| 76  | m4:exec       | m4method=CARGA:{}SMCO_DEV_PLAN_ACCION_SEG{"!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_ACTIONS"}                |
| 76  | m4:param      | name=ARG_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TYPE")               |
| 77  | m4:exec       | node=SMCO_DEV_ACCION_SEG_JOB; alias=countjob; method=COUNT; m4object=SMCO_DEV_PLAN_ACCION_SEG           |
| 78  | m4:endjob     |                                                                                                         |
| 79  | m4:beginjob   |                                                                                                         |
| 80  | m4:outputexec | var=; alias=countjob                                                                                    |
| 81  | m4:outputdef  | m4alias=SMCO_DEV_PLAN_ACCION_SEG                                                                        |
| 81  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_ACCION_SEG{"[*]"}                        |
| 82  | m4:outputdef  | m4alias=SMCO_DEV_ACCION_SEG_JOB                                                                         |
| 82  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_ACCION_SEG_JOB{"[*]"}                         |
| 83  | m4:outputdef  | m4alias=SMCO_DEV_ACCION_SEG_EVAL_V                                                                      |
| 83  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_ACCION_SEG_EVAL_V{"[*]"}                      |
| 84  | m4:outputdef  | m4alias=SMCO_EMPLOYEE_EVAL                                                                              |
| 84  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_EMPLOYEE_EVAL{"[*]"}                              |
| 85  | m4:outputdef  | m4alias=SMCO_DEV_PLAN_JOB                                                                               |
| 85  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_JOB{"[*]"}                               |
| 86  | m4:outputdef  | m4alias=SMCO_DEV_PLAN_EVAL                                                                              |
| 86  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_EVAL{"[*]"}                              |
| 87  | m4:outputdef  | m4alias=SMCO_DEV_PLAN_OTHERS                                                                            |
| 87  | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_OTHERS{"[*]"}                            |
| 88  | m4:move       |                                                                                                         |
| 88  | m4:param      | name=SMCO_DEV_PLAN_ACCION_SEG; value=SMCO_DEV_ACCION_SEG_JOB{":"}SMCO_DEV_ACCION_SEG_JOB{"[FIRST]"}     |
| 100 | m4:move       |                                                                                                         |
| 100 | m4:param      | name=SMCO_DEV_PLAN_ACCION_SEG; value=SMCO_DEV_ACCION_SEG_JOB{":"}SMCO_DEV_ACCION_SEG_JOB                |
| 101 | m4:outputdef  | m4alias=                                                                                                |
| 101 | m4:param      | name=m4name0; value=SMCO_DEV_PLAN_ACCION_SEG!SMCO_DEV_ACCION_SEG_JOB_V[*]                               |
| 106 | m4:endjob     |                                                                                                         |
| 128 | m4:dataloop   | outputdef=SMCO_DEV_PLAN_JOB                                                                             |
| 129 | m4:item       | m4varname=zSCO_ID_JOB_CODE; item=SCO_ID_JOB_CODE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB            |
| 130 | m4:item       | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB            |
| 131 | m4:item       | m4varname=zSCO_IS_MANDATORY; item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB          |
| 134 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                          |
| 135 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                     |
| 141 | m4:label      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                         |
| 141 | m4:item       | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                         |
| 142 | m4:label      | item=SMCO_GAP; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                               |
| 142 | m4:item       | item=SMCO_GAP; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                               |
| 143 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                              |
| 143 | m4:item       | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                              |
| 146 | m4:label      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                          |
| 147 | m4:label      | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                     |
| 148 | m4:label      | item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                       |
| 149 | m4:label      | item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                        |
| 152 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                          |
| 153 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_JOB                                     |
| 162 | m4:dataloop   | outputdef=SMCO_DEV_PLAN_EVAL                                                                            |
| 163 | m4:item       | m4varname=zSMCO_PERC; item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                       |
| 164 | m4:item       | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL           |
| 165 | m4:item       | m4varname=zSCO_IS_MANDATORY; item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL         |
| 168 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                         |
| 169 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                    |
| 176 | m4:label      | item=SMCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_ACCION_SEG                               |
| 176 | m4:item       | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                      |
| 177 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                             |
| 177 | m4:item       | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                             |
| 180 | m4:label      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                         |
| 181 | m4:label      | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                    |
| 182 | m4:label      | item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                      |
| 183 | m4:label      | item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                       |
| 186 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                         |
| 187 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_EVAL                                    |
| 200 | m4:label      | m4name=SMCO_DEV_PLAN_OTHERS{":"}SMCO_DEV_PLAN_ACCION_SEG{"!"}SMCO_DEV_PLAN_OTHERS; htmlsafe=true        |
| 201 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                           |
| 201 | m4:item       | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                           |
| 204 | m4:label      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                       |
| 205 | m4:label      | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                  |
| 206 | m4:label      | item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                    |
| 207 | m4:label      | item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                     |
| 209 | m4:dataloop   | outputdef=SMCO_DEV_PLAN_OTHERS                                                                          |
| 211 | m4:item       | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS         |
| 212 | m4:item       | m4varname=zSCO_IS_MANDATORY; item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS       |
| 214 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                       |
| 215 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_PLAN_OTHERS                                  |
| 233 | m4:label      | item=SMCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_ACCION_SEG                               |
| 233 | m4:item       | item=SMCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SMCO_DEV_PLAN_ACCION_SEG                               |
| 235 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                     |
| 235 | m4:item       | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                     |
| 242 | m4:label      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                 |
| 243 | m4:label      | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                            |
| 244 | m4:label      | item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                              |
| 245 | m4:label      | item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                               |
| 248 | m4:dataloop   | outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                                                    |
| 249 | m4:item       | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V   |
| 250 | m4:item       | m4varname=zSCO_IS_MANDATORY; item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V |
| 252 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                 |
| 253 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                            |
| 260 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_EVAL_V                                     |
| 270 | m4:dataloop   | outputdef=SMCO_DEV_ACCION_SEG_JOB                                                                       |
| 273 | m4:label      | item=SMCO_MN_JOB; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                      |
| 273 | m4:item       | item=SMCO_MN_JOB; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                      |
| 274 | m4:label      | item=SMCO_GAP; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                         |
| 274 | m4:item       | item=SMCO_GAP; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                         |
| 275 | m4:label      | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                        |
| 275 | m4:item       | item=SMCO_PERC; htmlsafe=true; outputdef=SMCO_DEV_ACCION_SEG_JOB                                        |
| 277 | m4:current    | m4varname=current; outputdef=SMCO_DEV_ACCION_SEG_JOB                                                    |
| 279 | m4:move       |                                                                                                         |
| 279 | m4:param      | name=SMCO_DEV_PLAN_ACCION_SEG; value=                                                                   |
| 280 | m4:count      | m4varname=zcountAux; m4place=remote; outputdef=                                                         |
| 285 | m4:label      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=                                                           |
| 286 | m4:label      | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=                                                      |
| 287 | m4:label      | item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=                                                        |
| 288 | m4:label      | item=SCO_IS_FINISHED; htmlsafe=true; outputdef=                                                         |
| 290 | m4:dataloop   | outputdef=                                                                                              |
| 291 | m4:current    | m4varname=currentaux; outputdef=                                                                        |
| 292 | m4:item       | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=                             |
| 293 | m4:item       | m4varname=zSCO_IS_MANDATORY; item=SCO_IS_MANDATORY; htmlsafe=true; outputdef=                           |
| 295 | m4:item       | item=SCO_NM_ACTION; htmlsafe=true; outputdef=                                                           |
| 296 | m4:item       | item=SCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=                                                      |
| 316 | m4:endpage    |                                                                                                         |

| L   | Operación | Argumentos literales                                                              |
| --- | --------- | --------------------------------------------------------------------------------- |
| 66  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_ID_JOB_PARAM",zfilter_job          |
| 67  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SCO_ID_CR_PATH_ACT_PARAM",zfilter_cp    |
| 68  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_START",zdt_start                |
| 69  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_END",zdt_end                    |
| 71  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_START_PROC_PARAM",zdt_eval_plan |
| 72  | setItem   | zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_ID_EVAL_PLAN",zid_eval_plan        |
| 112 | getCount  | znodo1,zsubsesion,znodo1                                                          |
| 113 | getCount  | znodo3,zsubsesion,znodo3                                                          |
| 120 | getCount  | znodo5,zsubsesion,znodo5                                                          |
| 121 | getCount  | znodo6,zsubsesion,znodo6                                                          |
| 122 | getCount  | znodo7,zsubsesion,znodo7                                                          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((zidhr_param==null)&#124;&#124;(zidhr_param.equals(""))){zidhr_param = "";}                                                                                                                                                                                                                                                                                                                                                                                                     |
| 9   | if ((zorperiod==null)&#124;&#124;(zorperiod.equals(""))){zorperiod = "";}                                                                                                                                                                                                                                                                                                                                                                                                           |
| 12  | if ((zARG_TYPE==null)&#124;&#124;(zARG_TYPE.equals(""))){zARG_TYPE = "0";}                                                                                                                                                                                                                                                                                                                                                                                                          |
| 14  | if ((zfilter_job==null)&#124;&#124;(zfilter_job.equals(""))){zfilter_job = "";}                                                                                                                                                                                                                                                                                                                                                                                                     |
| 16  | if ((zfilter_cp==null)&#124;&#124;(zfilter_cp.equals(""))){zfilter_cp = "";}                                                                                                                                                                                                                                                                                                                                                                                                        |
| 19  | if ((zdt_start==null)&#124;&#124;(zdt_start.equals(""))){zdt_start = "";}                                                                                                                                                                                                                                                                                                                                                                                                           |
| 20  | if ((zdt_end==null)&#124;&#124;(zdt_end.equals(""))){zdt_end = "";}                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 23  | if ((zid_eval_plan==null)&#124;&#124;(zid_eval_plan.equals(""))){zid_eval_plan = "";}                                                                                                                                                                                                                                                                                                                                                                                               |
| 24  | if ((zdt_eval_plan==null)&#124;&#124;(zdt_eval_plan.equals(""))){zdt_eval_plan = "";}                                                                                                                                                                                                                                                                                                                                                                                               |
| 116 | &lt;%if (zARG_TYPE.equals("0")){String zIdJobAnt="";%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 126 | &lt;%if (zcountOtotal&gt;0){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 132 | &lt;%if (zIdJobAnt.equals(zSCO_ID_JOB_CODE)){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 136 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 137 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 139 | &lt;%}else{zIdJobAnt=zSCO_ID_JOB_CODE;%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 154 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 155 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 166 | &lt;%if (zSMCO_PERC.equals("")){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 170 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 171 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo6%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo6%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 173 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 188 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 189 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo6%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo6%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 196 | &lt;%if (zcounti7&gt;0){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 216 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 217 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo7%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo7%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 223 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 229 | &lt;%if (zARG_TYPE.equals("2")){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 234 | &lt;%if (zcounti3&gt;0){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 254 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 255 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo3%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodo3%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt;     |
| 259 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 267 | &lt;%if (zARG_TYPE.equals("1")&#124;&#124;zARG_TYPE.equals("3")){                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 281 | &lt;%if (zcountAux.equals("0")){%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 283 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 298 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_MANDATORY.equals("0")){%&gt;&lt;%=z0%&gt;&lt;%}else{%&gt;&lt;%=z1%&gt;&lt;%}%&gt;&lt;/td&gt;                                                                                                                                                                                                                                                                                                                                         |
| 300 | &lt;td class="fuentevalor"&gt;&lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodoaux%&gt;"/&gt;"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /&gt;&lt;%}else{%&gt;&lt;img alt="&lt;m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="&lt;%=znodoaux%&gt;"/&gt;"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;&lt;%}%&gt;&lt;/td&gt; |
| 42  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                                                                                                                                                                                                                                                                                          |
| 43  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 46  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                                                                                                                                                                                                                                                                                                                                |
| 48  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                                                                                                                                                                                                                                                                                                                                                             |
| 49  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                                                                                                                                                                                                                                                                                                                                                  |
| 51  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_ACTIONS";                                                                                                                                                                                                                                                                                                                                                   |
| 53  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 54  | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 55  | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 56  | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 57  | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                                                                                                                                                                                                                                                                                                                                                                        |
| 58  | expresión de cálculo/transformación: String znamenodo7 = znodo7 + ":" + zsubsesion + "!" + znodo7;                                                                                                                                                                                                                                                                                                                                                                                  |
| 91  | expresión de cálculo/transformación: String zmoveso=znodo2 + ":" + znodo2 ;                                                                                                                                                                                                                                                                                                                                                                                                         |
| 95  | expresión de cálculo/transformación: itipoJob = Integer.parseInt(scount1);                                                                                                                                                                                                                                                                                                                                                                                                          |
| 97  | expresión de cálculo/transformación: zmoveso=znodo2 + ":" + znodo2 +"["+String.valueOf(hb)+"]";                                                                                                                                                                                                                                                                                                                                                                                     |
| 278 | expresión de cálculo/transformación: &lt;%znodoaux="SMCO_DEV_ACCION_SEG_JOB_V"+current; zmoveaux =znodoaux+ ":" + "SMCO_DEV_ACCION_SEG_JOB_V" + "[FIRST]";%&gt;                                                                                                                                                                                                                                                                                                                     |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                        |
| --- | ---------------------------------------- |
| 137 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 137 | /iconos/icono_seleccionar_11_12.gif      |
| 155 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 155 | /iconos/icono_seleccionar_11_12.gif      |
| 171 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 171 | /iconos/icono_seleccionar_11_12.gif      |
| 189 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 189 | /iconos/icono_seleccionar_11_12.gif      |
| 217 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 217 | /iconos/icono_seleccionar_11_12.gif      |
| 255 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 255 | /iconos/icono_seleccionar_11_12.gif      |
| 300 | /iconos/icono_peq_eliminar_ess_11_12.gif |
| 300 | /iconos/icono_seleccionar_11_12.gif      |
| 312 | javascript:window.close();               |
| 312 | /iconos/entrar_blanco.gif                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 12  | ../smco_dev_plan_trans.jsp                   | física     | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |
| BASE   | 13  | ../smco_g3_dev_plan_seg_data.jsp             | física     | [mss_g3/smco_g3_dev_plan_seg_data.jsp](mss_g3--smco_g3_dev_plan_seg_data.md)                                  |
| BASE   | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 10  | /libreria/clase_val_entradas.js              | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 12  | ../smco_dev_plan_trans.jsp                   | física     | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |
| BASE   | 13  | ../smco_g3_dev_plan_seg_data.jsp             | física     | [mss_g3/smco_g3_dev_plan_seg_data.jsp](mss_g3--smco_g3_dev_plan_seg_data.md)                                  |
| BASE   | 312 | javascript:window.close();                   | dinámica   | P06                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_dev_plan_seg_data.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
