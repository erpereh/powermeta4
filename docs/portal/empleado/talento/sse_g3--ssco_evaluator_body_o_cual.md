# ssco_evaluator_body_o_cual

Identificador: `sse_g3/ssco_evaluator_body_o_cual.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_evaluator_body_o_cual.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_o_cual.jsp) | `46bf596c7d03238f693a5842743f47eb69a34c059a7b67e94565b0d3df8c0904` |     64 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_evaluator_body_o_cual.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_o_cual.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | " IdObjective=" " IdLevel=" " title="[valor dinámico]" onclick='javascript:m4Eval.evalDetail.show(this);' src="[valor dinámico]" width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /&gt; |
| 45  | [valor dinámico] "value =" " &gt;                                                                                                                                                                                                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | a       | title=&lt;%=Selec%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp                                                                                                                |
| 9   | img     | alt=&lt;%=Selec%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                        |
| 22  | form    | name=z&lt;%=current4%&gt;; id=z&lt;%=current4%&gt;; onsubmit=return false                                                                                                                               |
| 23  | input   | id=ocultos1&lt;%=current4%&gt;; name=ocultos1&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                      |
| 24  | input   | id=ocu1&lt;%=current4%&gt;; name=ocu1&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                              |
| 25  | input   | id=SCO_ID_CRITERIA_TYPE&lt;%=current4%&gt;; name=SCO_ID_CRITERIA_TYPE&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                              |
| 26  | input   | id=SCO_WEIGHT&lt;%=current4%&gt;; name=SCO_WEIGHT&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                  |
| 27  | input   | id=SCO_ID_OBJ_REQ_LVL&lt;%=current4%&gt;; name=SCO_ID_OBJ_REQ_LVL&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                  |
| 28  | input   | id=comment&lt;%=current4%&gt;; name=comment&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                        |
| 29  | input   | id=SCO_COMMENT&lt;%=current4%&gt;; name=SCO_COMMENT&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                |
| 33  | a       | class=i_r; title=&lt;%=ViewComment%&gt;; href=javascript:ViewComent(m4objeto('SCO_COMMENT&lt;%=current4%&gt;','z&lt;%=current4%&gt;'),'&lt;%=zpathVerComentario%&gt;');                                 |
| 33  | img     | align=left; alt=&lt;%=ViewComment%&gt;; src=&lt;%=pathImgViewComment%&gt;; width=11; height=9; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |
| 34  | img     | style=cursor:pointer; dtstart=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                                                                             |
| 37  | img     | title=&lt;%=zlabelOrg%&gt;; alt=&lt;%=zlabelOrg%&gt;; src=&lt;%=zOrg%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                |
| 39  | img     | title=&lt;%=zlabelPersonal%&gt;; alt=&lt;%=zlabelPersonal%&gt;; src=&lt;%=zPersonal%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 46  | select  | class=fvselect; id=select&lt;%=current4%&gt;; name=select&lt;%=current4%&gt;                                                                                                                            |
| 47  | option  | value=                                                                                                                                                                                                  |
| 49  | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodoaux4%&gt;                                                                                                                                     |
| 58  | a       | title=&lt;%=AddComment%&gt;; href=javascript:AddComent(m4objeto('comment&lt;%=current4%&gt;','z&lt;%=current4%&gt;'));                                                                                  |
| 58  | img     | align=right; alt=&lt;%=AddComment%&gt;; src=&lt;%=pathImgAddComment%&gt;; height=20; width=20; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                           |
| --- | ----------- | -------------------------------------------------------------------------------------------- |
| 4   | m4:label    | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 5   | m4:label    | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo4                                            |
| 6   | m4:label    | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodo4                                           |
| 7   | m4:label    | item=SCO_NM_LEVEL_1; htmlsafe=true; outputdef=znodo4                                         |
| 8   | m4:label    | item=SCO_ID_OBJ_RAT_LVL; htmlsafe=true; outputdef=znodo4                                     |
| 11  | m4:dataloop | outputdef=znodo4                                                                             |
| 12  | m4:item     | m4varname=zSCO_ID_LVL_TMP4; item=SCO_ID_LVL_TMP; htmlsafe=true; outputdef=znodo4             |
| 13  | m4:current  | m4varname=current4; outputdef=znodo4                                                         |
| 14  | m4:item     | m4varname=zSCOIDTYPE4; item=SCO_ID_TYPE; htmlsafe=true; outputdef=znodo4                     |
| 15  | m4:item     | m4varname=zSCO_ID_CRITERIA_TYPE4; item=SCO_ID_CRITERIA_TYPE; htmlsafe=true; outputdef=znodo4 |
| 21  | m4:move     |                                                                                              |
| 21  | m4:param    | name=zsubsesion; value=zmoveaux4                                                             |
| 34  | m4:item     | item=SCO_ID_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 34  | m4:item     | item=SCO_ID_OBJ_REQ_LVL; htmlsafe=true; outputdef=znodo4                                     |
| 35  | m4:item     | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 42  | m4:item     | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo4                                            |
| 43  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodo4                                           |
| 44  | m4:item     | item=SCO_NM_LEVEL_1; htmlsafe=true; outputdef=znodo4                                         |
| 48  | m4:dataloop | outputdef=znodoaux4                                                                          |
| 49  | m4:item     | item=SCO_ID_LEVEL; htmlsafe=true; outputdef=znodoaux4                                        |
| 49  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodoaux4                                        |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | &lt;%if (zcount4 &gt; 0) {zSCOIDTYPEtemp="";%&gt;                                                                                                                       |
| 7   | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td&gt; &lt;m4:label  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="&lt;%=znodo4%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt;              |
| 36  | &lt;%if(zSCO_ID_CRITERIA_TYPE4.equals("01")){%&gt;                                                                                                                      |
| 38  | &lt;%}else if(zSCO_ID_CRITERIA_TYPE4.equals("02")){%&gt;                                                                                                                |
| 44  | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td class="label"&gt; &lt;m4:item  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="&lt;%=znodo4%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt; |
| 19  | expresión de cálculo/transformación: zmoveaux4 =znodoaux4+ ":" + "SSCO_O_LEVEL" + "[FIRST]";                                                                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 9   | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp |
| 9   | /iconos/icono_flecha_azul2_ess_11_9.gif                     |
| 33  | javascript:ViewComent(m4objeto(                             |
| 33  | &lt;%=pathImgViewComment%&gt;                               |
| 34  | &lt;%=zAyuda%&gt;                                           |
| 37  | &lt;%=zOrg%&gt;                                             |
| 39  | &lt;%=zPersonal%&gt;                                        |
| 58  | javascript:AddComent(m4objeto(                              |
| 58  | &lt;%=pathImgAddComment%&gt;                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 9   | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp | ausente    | P06               |
| BASE   | 33  | javascript:ViewComent(m4objeto(                             | dinámica   | P06               |
| BASE   | 33  | &lt;%=pathImgViewComment%&gt;                               | dinámica   | P06               |
| BASE   | 34  | &lt;%=zAyuda%&gt;                                           | dinámica   | P06               |
| BASE   | 37  | &lt;%=zOrg%&gt;                                             | dinámica   | P06               |
| BASE   | 39  | &lt;%=zPersonal%&gt;                                        | dinámica   | P06               |
| BASE   | 58  | javascript:AddComent(m4objeto(                              | dinámica   | P06               |
| BASE   | 58  | &lt;%=pathImgAddComment%&gt;                                | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_body_o_cual.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
