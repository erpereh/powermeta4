# ssco_evaluator_filter_body

Identificador: `sse_g3/ssco_evaluator_filter_body.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave        | Texto            | Ámbito | Diccionario                                                                                  |
| ------------ | ---------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.Filter | Filtro           | COLL   | [translations/ess_mss_gen_es.properties:L110](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Filter | Filtro           | CYC    | [translations/ess_mss_gen_es.properties:L110](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Filter | Filtro           | IBER   | [translations/ess_mss_gen_es.properties:L110](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Filter | Filtro           | BASE   | [translations/ess_mss_gen_es.properties:L110](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Filter | Filtro           | BASE   | [translations/ssco_etask_es.properties:L20](../../referencias/literales/ssco_etask_es.md)    |
| Label.Job    | Escoge un puesto | COLL   | [translations/ess_mss_gen_es.properties:L137](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Job    | Escoge un puesto | CYC    | [translations/ess_mss_gen_es.properties:L137](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Job    | Escoge un puesto | IBER   | [translations/ess_mss_gen_es.properties:L137](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Job    | Escoge un puesto | BASE   | [translations/ess_mss_gen_es.properties:L136](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_evaluator_filter_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_filter_body.jsp) | `b271f8c357af3b96b8aeb80ae81bc7858cfb2be06689e3f4cd2349d64e956082` |    161 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_evaluator_filter_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_filter_body.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                         |
| --- | ------------------------------------------------ |
| 79  | [valor dinámico] [valor dinámico]                |
| 89  | [valor dinámico] "value=" "&gt;                  |
| 136 | :                                                |
| 137 | : -                                              |
| 138 | :                                                |
| 149 | [valor dinámico][valor dinámico][valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 78  | img     | alt=&lt;%=ztitle%&gt;; title=&lt;%=ztitle%&gt;; src=/iconos/noname_procesos_evaluacion_ess_114_100.gif; width=114; height=100                                      |
| 80  | a       | class=enlacefuncional; tabindex=1; title=&lt;%=LinkJob%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp                                                |
| 84  | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp; method=post; name=oculto; id=oculto                                                            |
| 85  | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                    |
| 90  | select  | title=JSP_EXPR_Tran.getProperty(; id=zfiltrojob; name=zfiltrojob; class=fuenteformulario200; onchange=javascript:filtrar();                                        |
| 91  | option  | value=                                                                                                                                                             |
| 93  | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodojob%&gt;                                                                                                 |
| 105 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp; method=post; name=oculto3; id=oculto3                                                                 |
| 106 | input   | type=hidden; id=id; name=id; value=                                                                                                                                |
| 107 | input   | type=hidden; id=ord; name=ord; value=                                                                                                                              |
| 108 | input   | type=hidden; id=inicioeval; name=inicioeval; value=                                                                                                                |
| 148 | a       | title=&lt;%=VerDet%&gt;; href=javascript:nav_evaluate('&lt;%=zIDEvalute%&gt;','&lt;%=sOrHrRol_Encr%&gt;','&lt;%=sDtStartEval_Encr%&gt;','&lt;%=zNavegation%&gt;'); |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                               | Resolución estática parcial                                                                                                                          |
| --- | ---------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | zsubsesion             | "SSCO_H_EVALUTE_FILTER"                                                        | SSCO_H_EVALUTE_FILTER                                                                                                                                |
| 21  | zmeta4object           | "SSCO_H_EVALUTE_FILTER"                                                        | SSCO_H_EVALUTE_FILTER                                                                                                                                |
| 22  | znodo                  | "SSCO_H_EVALUTE_FILTER"                                                        | SSCO_H_EVALUTE_FILTER                                                                                                                                |
| 25  | zdireccion             | "sse_g3/ssco_evaluator_filter.jsp"                                             | sse_g3/ssco_evaluator_filter.jsp                                                                                                                     |
| 26  | zventanas              | "40"                                                                           | 40                                                                                                                                                   |
| 27  | zvuelta                | 5                                                                              | 5                                                                                                                                                    |
| 28  | zestado                | "31"                                                                           | 31                                                                                                                                                   |
| 30  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                                 |
| 32  | zventana               | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                                |
| 33  | zregistrofinal         | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                   |
| 34  | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSCO_H_EVALUTE_FILTER{"!"}SSCO_H_EVALUTE_FILTER{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 35  | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSCO_H_EVALUTE_FILTER{":"}SSCO_H_EVALUTE_FILTER{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 38  | znodojob               | "SSCO_JOB"                                                                     | SSCO_JOB                                                                                                                                             |
| 39  | zoutputdefjob          | zsubsesion + "!" + znodojob + "[*]"                                            | SSCO_H_EVALUTE_FILTER{"!"}SSCO_JOB{"[*]"}                                                                                                            |
| 40  | zmovejob               | znodojob + ":" + znodojob + "[FIRST]"                                          | SSCO_JOB{":"}SSCO_JOB{"[FIRST]"}                                                                                                                     |
| 45  | zmetodocarga           | "CARGA:" + zsubsesion + "!SSCO_H_EVALUTE_FILTER.SSCO_LOAD"                     | CARGA:{}SSCO_H_EVALUTE_FILTER{"!SSCO_H_EVALUTE_FILTER.SSCO_LOAD"}                                                                                    |
| 63  | zcount                 | 0                                                                              | 0                                                                                                                                                    |
| 64  | zcounti                | 0                                                                              | 0                                                                                                                                                    |
| 72  | zcountv                | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                              |
| 113 | zSCO_ID_EVAL_PLAN_ANT  | ""                                                                             |                                                                                                                                                      |
| 114 | zSCO_DT_START_PROC_ANT | ""                                                                             |                                                                                                                                                      |
| 115 | zNavegation            | "0"                                                                            | 0                                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 47  | m4:startpage | m4task=SSCO_H_EVALUTE_FILTER                                                                                                                                             |
| 48  | m4:beginjob  |                                                                                                                                                                          |
| 49  | m4:datadef   | m4o=SSCO_H_EVALUTE_FILTER; m4name=SSCO_H_EVALUTE_FILTER                                                                                                                  |
| 56  | m4:exec      | m4method=CARGA:{}SSCO_H_EVALUTE_FILTER{"!SSCO_H_EVALUTE_FILTER.SSCO_LOAD"}                                                                                               |
| 57  | m4:outputdef | m4alias=SSCO_H_EVALUTE_FILTER                                                                                                                                            |
| 57  | m4:param     | name=m4name0; value=SSCO_H_EVALUTE_FILTER{"!"}SSCO_H_EVALUTE_FILTER{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 58  | m4:outputdef | m4alias=SSCO_JOB                                                                                                                                                         |
| 58  | m4:param     | name=m4name0; value=SSCO_H_EVALUTE_FILTER{"!"}SSCO_JOB{"[*]"}                                                                                                            |
| 59  | m4:endjob    |                                                                                                                                                                          |
| 60  | m4:move      |                                                                                                                                                                          |
| 60  | m4:param     | name=SSCO_H_EVALUTE_FILTER; value=SSCO_H_EVALUTE_FILTER{":"}SSCO_H_EVALUTE_FILTER{"["}Integer.valueOf(zinicios).intValue(){"]"}                                          |
| 61  | m4:move      |                                                                                                                                                                          |
| 61  | m4:param     | name=SSCO_H_EVALUTE_FILTER; value=SSCO_JOB{":"}SSCO_JOB{"[FIRST]"}                                                                                                       |
| 89  | m4:label     | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_JOB                                                                                                                   |
| 92  | m4:dataloop  | outputdef=SSCO_JOB                                                                                                                                                       |
| 93  | m4:item      | item=STD_ID_JOB_CODE; htmlsafe=true; outputdef=SSCO_JOB                                                                                                                  |
| 93  | m4:item      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_JOB                                                                                                                   |
| 118 | m4:dataloop  | outputdef=SSCO_H_EVALUTE_FILTER                                                                                                                                          |
| 119 | m4:item      | m4varname=zIDPlan; item=SCO_ID_EVAL_PLAN; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                 |
| 120 | m4:item      | m4varname=zDtStarProc; item=SCO_DT_START_PROC; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                            |
| 121 | m4:item      | m4varname=zIDEvalute; item=SCO_ID_HR; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                     |
| 123 | m4:item      | m4varname=sOrHrRol_Encr; item=SCO_OR_HR_ROLE; jsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                |
| 125 | m4:item      | m4varname=sDtStartEval_Encr; item=SCO_DT_START_EVAL; jsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                         |
| 127 | m4:item      | m4varname=zIDEvaluator; item=SCO_ID_EVALUATOR; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                            |
| 129 | m4:item      | m4varname=zPpal; item=SCO_EVALUATION_DEF; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                 |
| 130 | m4:item      | m4varname=zNotes; item=SCO_CK_NOTES; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                      |
| 136 | m4:label     | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                    |
| 136 | m4:item      | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                    |
| 137 | m4:label     | item=SCO_DT_ST_EV_PER; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                    |
| 137 | m4:item      | item=SCO_DT_ST_EV_PER; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                    |
| 137 | m4:item      | item=SCO_DT_END_EV_PER; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                   |
| 138 | m4:label     | item=SCO_DT_END_EV; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                       |
| 138 | m4:item      | item=SCO_DT_END_EV; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                       |
| 141 | m4:label     | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                         |
| 142 | m4:label     | item=SCO_EVALUATION_DEF; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                  |
| 143 | m4:label     | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                      |
| 148 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                         |
| 150 | m4:item      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SSCO_H_EVALUTE_FILTER                                                                                                      |

| L   | Operación        | Argumentos literales                                          |
| --- | ---------------- | ------------------------------------------------------------- |
| 52  | setItem          | zsubsesion,"SSCO_H_EVALUTE_FILTER","","JOB_FILTER",zfiltrojob |
| 67  | getCount         | znodo,zsubsesion,znodo                                        |
| 68  | getCountInClient | znodo,zsubsesion,znodo                                        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos                  |
| --- | ------------ | --------------------------- |
| 2   | nav_evaluate | id_hr,ord,inicioeval,swhere |
| 13  | filtrar      |                             |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | if (swhere=="1"){                                                                                                                                                                                                                                                                                                                                                  |
| 112 | if (zcount &gt; 0) {                                                                                                                                                                                                                                                                                                                                               |
| 122 | &lt;%if (!zIDEvalute.equals("")) {zIDEvalute = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", zIDEvalute);}%&gt;                                                                                                                                                                                                         |
| 124 | &lt;%if (!sOrHrRol_Encr.equals("")) {sOrHrRol_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sOrHrRol_Encr);}%&gt;                                                                                                                                                                                                |
| 126 | &lt;%if (!sDtStartEval_Encr.equals("")) {sDtStartEval_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sDtStartEval_Encr);}%&gt;                                                                                                                                                                                    |
| 128 | &lt;%if (!zIDEvaluator.equals("")) {zIDEvaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", zIDEvaluator);}%&gt;                                                                                                                                                                                                   |
| 132 | if (((zIDPlan.equals(zSCO_ID_EVAL_PLAN_ANT)==false) &#124;&#124; (zDtStarProc.equals(zSCO_DT_START_PROC_ANT)==false) ) ){                                                                                                                                                                                                                                          |
| 147 | &lt;%if (zNotes.equals("1") ){if(zPpal.equals("1")){zNavegation="1";}}%&gt;                                                                                                                                                                                                                                                                                        |
| 149 | &lt;td class="fuentevalor"&gt;&lt;% if (zIDEvalute.equals(zIDEvaluator)){%&gt;&lt;%=zEvaluatoAuto%&gt;&lt;%}else{%&gt;&lt;% if (zPpal.equals("1")){%&gt;&lt;%=zEvaluatoPpal%&gt;&lt;%}else{%&gt;&lt;%=zEvaluatoNoPpal%&gt;&lt;%}%&gt; &lt;%}%&gt;&lt;/td&gt;                                                                                                       |
| 155 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                   |
| 31  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                                                                                                                                                      |
| 33  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                                                                                                                                         |
| 34  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                                                                                                                                                           |
| 35  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                                                                                                                                                                                                            |
| 39  | expresión de cálculo/transformación: String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";                                                                                                                                                                                                                                                                   |
| 40  | expresión de cálculo/transformación: String zmovejob = znodojob + ":" + znodojob + "[FIRST]";                                                                                                                                                                                                                                                                      |
| 45  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_H_EVALUTE_FILTER.SSCO_LOAD";                                                                                                                                                                                                                                             |
| 137 | expresión de cálculo/transformación: &lt;td class="tablaestadosceldatitulo" &gt;&lt;m4:label item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="&lt;%=znodo%&gt;"/&gt; : &lt;m4:item item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="&lt;%=znodo%&gt;"/&gt; - &lt;m4:item item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="&lt;%=znodo%&gt;"/&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                    |
| --- | -------------------------- |
| 154 | /sse_generico/ssco_pag.jsp |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 8   | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp        |
| 78  | /iconos/noname_procesos_evaluacion_ess_114_100.gif          |
| 80  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp           |
| 84  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp |
| 105 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp        |
| 148 | javascript:nav_evaluate(                                    |
| 25  | sse_g3/ssco_evaluator_filter.jsp                            |
| 154 | /sse_generico/ssco_pag.jsp                                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                   |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| BASE   | 154 | /sse_generico/ssco_pag.jsp                                  | contextual | [sse_generico/ssco_pag.jsp](../../transversal/navegacion/sse_generico--ssco_pag.md) |
| BASE   | 8   | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp        | ausente    | P06                                                                                 |
| BASE   | 80  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp           | contextual | [sse_g3/sse_g3_menu.jsp](sse_g3--sse_g3_menu.md)                                    |
| BASE   | 84  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp | ausente    | P06                                                                                 |
| BASE   | 105 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp        | ausente    | P06                                                                                 |
| BASE   | 148 | javascript:nav_evaluate(                                    | dinámica   | P06                                                                                 |
| BASE   | 25  | sse_g3/ssco_evaluator_filter.jsp                            | ausente    | P06                                                                                 |
| BASE   | 154 | /sse_generico/ssco_pag.jsp                                  | contextual | [sse_generico/ssco_pag.jsp](../../transversal/navegacion/sse_generico--ssco_pag.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_filter_body.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
