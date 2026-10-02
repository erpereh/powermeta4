# smco_evaluator_body_o_cual

Identificador: `mss_g3/smco_evaluator_body_o_cual.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mss_g3/smco_evaluator_body_o_cual.jsp](../../../../clon_portal/portal/mss_g3/smco_evaluator_body_o_cual.jsp) | `27a72d0d130536bc902ded7d9c8c6441adccd8e58634e42a4a8f3b27d4da4d9a` |     86 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mss_g3/smco_evaluator_body_o_cual.jsp](../../../../clon_portal/portal/mss_g3/smco_evaluator_body_o_cual.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | [valor dinámico] "value=" "&gt;                                                                                                                                                                                                                             |
| 17  | " /&gt;                                                                                                                                                                                                                                                     |
| 54  | " IdObjective=" " IdLevel=" " title="[valor dinámico]" onclick='javascript:m4Eval.evalDetail.show(this);' src="[valor dinámico]" width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /&gt; |
| 67  | [valor dinámico] "value =" " &gt;                                                                                                                                                                                                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | form    | action= ; method=post; name=notes3; id=notes3; onsubmit=return false                                                                                                                                    |
| 6   | input   | id=N_SCALE3; name=N_SCALE3; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                            |
| 10  | select  | id=notes3; name=notes3; class=fvselect; onchange=javascript:ver_notea('notes3');                                                                                                                        |
| 11  | option  | value=                                                                                                                                                                                                  |
| 13  | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                                                        |
| 18  | input   | class=finputa; readonly=readonly; size=10; maxlength=7; type=text; id=val_notes3; name=val_notes3; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                   |
| 18  | a       | title=&lt;%=zCalcOc%&gt;; alt=&lt;%=zCalcOc%&gt;; href=javascript:calc_obj('&lt;%=zcount4%&gt;');                                                                                                       |
| 18  | img     | alt=&lt;%=zCalcOc%&gt;; src=\iconos\calcular_16_16.gif; height=16; align=center; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                   |
| 33  | a       | title=&lt;%=Selec%&gt;; href=/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp                                                                                                                |
| 33  | img     | alt=&lt;%=Selec%&gt;; src=/iconos/icono_flecha2_ocre_mss_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                        |
| 45  | form    | name=z&lt;%=current4%&gt;; id=z&lt;%=current4%&gt;; action= ; onsubmit=return false                                                                                                                     |
| 46  | input   | id=ocultos1&lt;%=current4%&gt;; name=ocultos1&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                      |
| 47  | input   | id=ocu1&lt;%=current4%&gt;; name=ocu1&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                              |
| 48  | input   | id=SCO_ID_CRITERIA_TYPE&lt;%=current4%&gt;; name=SCO_ID_CRITERIA_TYPE&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                              |
| 49  | input   | id=SCO_WEIGHT&lt;%=current4%&gt;; name=SCO_WEIGHT&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                  |
| 50  | input   | id=SCO_ID_OBJ_REQ_LVL&lt;%=current4%&gt;; name=SCO_ID_OBJ_REQ_LVL&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                  |
| 51  | input   | id=comment&lt;%=current4%&gt;; name=comment&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                        |
| 52  | input   | id=SCO_COMMENT&lt;%=current4%&gt;; name=SCO_COMMENT&lt;%=current4%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                |
| 55  | a       | class=i_r; title=&lt;%=ViewComment%&gt;; href=javascript:ViewComent(m4objeto('SCO_COMMENT&lt;%=current4%&gt;','z&lt;%=current4%&gt;'),'&lt;%=zpathVerComentario%&gt;');                                 |
| 55  | img     | align=left; alt=&lt;%=ViewComment%&gt;; src=&lt;%=pathImgViewComment%&gt;; width=11; height=9; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |
| 56  | img     | style=cursor:pointer; dtstart=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                                                                             |
| 59  | img     | title=&lt;%=zlabelOrg%&gt;; alt=&lt;%=zlabelOrg%&gt;; src=&lt;%=zOrg%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                |
| 61  | img     | title=&lt;%=zlabelPersonal%&gt;; alt=&lt;%=zlabelPersonal%&gt;; src=&lt;%=zPersonal%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 68  | select  | class=fvselect; id=select&lt;%=current4%&gt;; name=select&lt;%=current4%&gt;                                                                                                                            |
| 69  | option  | value=                                                                                                                                                                                                  |
| 71  | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodoaux4%&gt;                                                                                                                                     |
| 80  | a       | title=&lt;%=AddComment%&gt;; href=javascript:AddComent(m4objeto('comment&lt;%=current4%&gt;','z&lt;%=current4%&gt;'));                                                                                  |
| 80  | img     | align=right; alt=&lt;%=AddComment%&gt;; src=&lt;%=pathImgAddComment%&gt;; height=20; width=20; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                           |
| --- | ----------- | -------------------------------------------------------------------------------------------- |
| 8   | m4:label    | item=SCO_ID_LEVEL_OBJ_TEMP; htmlsafe=true; outputdef=znodo                                   |
| 12  | m4:dataloop | outputdef=znodo6                                                                             |
| 13  | m4:item     | item=SCO_ID_LEVEL; htmlsafe=true; outputdef=znodo6                                           |
| 13  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodo6                                           |
| 28  | m4:label    | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 29  | m4:label    | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo4                                            |
| 30  | m4:label    | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodo4                                           |
| 31  | m4:label    | item=SCO_NM_LEVEL_1; htmlsafe=true; outputdef=znodo4                                         |
| 32  | m4:label    | item=SCO_ID_OBJ_RAT_LVL; htmlsafe=true; outputdef=znodo4                                     |
| 35  | m4:dataloop | outputdef=znodo4                                                                             |
| 36  | m4:item     | m4varname=zSCO_ID_LVL_TMP4; item=SCO_ID_LVL_TMP; htmlsafe=true; outputdef=znodo4             |
| 37  | m4:current  | m4varname=current4; outputdef=znodo4                                                         |
| 38  | m4:item     | m4varname=zSCOIDTYPE4; item=SCO_ID_TYPE; htmlsafe=true; outputdef=znodo4                     |
| 39  | m4:item     | m4varname=zSCO_ID_CRITERIA_TYPE4; item=SCO_ID_CRITERIA_TYPE; htmlsafe=true; outputdef=znodo4 |
| 44  | m4:move     |                                                                                              |
| 44  | m4:param    | name=zsubsesion; value=zmoveaux4                                                             |
| 56  | m4:item     | item=SCO_ID_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 56  | m4:item     | item=SCO_ID_OBJ_REQ_LVL; htmlsafe=true; outputdef=znodo4                                     |
| 57  | m4:item     | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo4                                       |
| 64  | m4:item     | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo4                                            |
| 65  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodo4                                           |
| 66  | m4:item     | item=SCO_NM_LEVEL_1; htmlsafe=true; outputdef=znodo4                                         |
| 70  | m4:dataloop | outputdef=znodoaux4                                                                          |
| 71  | m4:item     | item=SCO_ID_LEVEL; htmlsafe=true; outputdef=znodoaux4                                        |
| 71  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodoaux4                                        |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | &lt;%if (zcount4 &gt; 0) {zSCOIDTYPEtemp="";%&gt;                                                                                                                       |
| 4   | &lt;%if(zCkNotes.equals("1")){%&gt;                                                                                                                                     |
| 31  | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td&gt; &lt;m4:label  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="&lt;%=znodo4%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt;              |
| 58  | &lt;%if(zSCO_ID_CRITERIA_TYPE4.equals("01")){%&gt;                                                                                                                      |
| 60  | &lt;%}else if(zSCO_ID_CRITERIA_TYPE4.equals("02")){%&gt;                                                                                                                |
| 66  | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td class="label"&gt; &lt;m4:item  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="&lt;%=znodo4%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt; |
| 42  | expresión de cálculo/transformación: zmoveaux4 =znodoaux4+ ":" + "SSCO_O_LEVEL" + "[FIRST]";                                                                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 5   |                                                             |
| 18  | javascript:calc_obj(                                        |
| 18  | \iconos\calcular_16_16.gif                                  |
| 33  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp |
| 33  | /iconos/icono_flecha2_ocre_mss_11_9.gif                     |
| 45  |                                                             |
| 55  | javascript:ViewComent(m4objeto(                             |
| 55  | &lt;%=pathImgViewComment%&gt;                               |
| 56  | &lt;%=zAyuda%&gt;                                           |
| 59  | &lt;%=zOrg%&gt;                                             |
| 61  | &lt;%=zPersonal%&gt;                                        |
| 80  | javascript:AddComent(m4objeto(                              |
| 80  | &lt;%=pathImgAddComment%&gt;                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 18  | javascript:calc_obj(                                        | dinámica   | P06               |
| BASE   | 33  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp | ausente    | P06               |
| BASE   | 55  | javascript:ViewComent(m4objeto(                             | dinámica   | P06               |
| BASE   | 55  | &lt;%=pathImgViewComment%&gt;                               | dinámica   | P06               |
| BASE   | 56  | &lt;%=zAyuda%&gt;                                           | dinámica   | P06               |
| BASE   | 59  | &lt;%=zOrg%&gt;                                             | dinámica   | P06               |
| BASE   | 61  | &lt;%=zPersonal%&gt;                                        | dinámica   | P06               |
| BASE   | 80  | javascript:AddComent(m4objeto(                              | dinámica   | P06               |
| BASE   | 80  | &lt;%=pathImgAddComment%&gt;                                | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_evaluator_body_o_cual.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
