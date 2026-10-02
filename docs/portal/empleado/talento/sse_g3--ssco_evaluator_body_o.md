# ssco_evaluator_body_o

Identificador: `sse_g3/ssco_evaluator_body_o.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_evaluator_body_o.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_o.jsp) | `d7376399ecff11260103e369c13c5aabc859e500095f83f368a0aea0d7f2fe86` |     45 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_evaluator_body_o.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_o.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | " IdMagnitud=" " title="[valor dinámico]" onclick='javascript:m4Eval.evalDetail.show(this);' src="[valor dinámico]" width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /&gt; |
| 37  | " size="15" maxlength="12" title="" /&gt;                                                                                                                                                                                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | a       | title=&lt;%=Selec%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp                                                                                                                |
| 9   | img     | alt=&lt;%=Selec%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                        |
| 14  | form    | name=b&lt;%=zposicions3%&gt;; id=b&lt;%=zposicions3%&gt;; onsubmit=return false                                                                                                                         |
| 16  | input   | id=bocultos&lt;%=zposicions3%&gt;; name=ocultos&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                 |
| 17  | input   | id=bocu&lt;%=zposicions3%&gt;; name=ocu&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                         |
| 18  | input   | id=bmag&lt;%=zposicions3%&gt;; name=bmag&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                        |
| 19  | input   | id=bnmag&lt;%=zposicions3%&gt;; name=bnmag&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                      |
| 20  | input   | id=comment&lt;%=zposicions3%&gt;; name=comment&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                  |
| 21  | input   | id=SCO_ID_CRITERIA_TYPE&lt;%=zposicions3%&gt;; name=SCO_ID_CRITERIA_TYPE&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                        |
| 22  | input   | id=SCO_COMMENT_2&lt;%=zposicions3%&gt;; name=SCO_COMMENT_2&lt;%=zposicions3%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                      |
| 25  | a       | class=i_r; title=&lt;%=ViewComment%&gt;; href=javascript:ViewComent(m4objeto('SCO_COMMENT_2&lt;%=zposicions3%&gt;','b&lt;%=zposicions3%&gt;'),'&lt;%=zpathVerComentario%&gt;');                         |
| 25  | img     | align=left; alt=&lt;%=ViewComment%&gt;; src=&lt;%=pathImgViewComment%&gt;; width=11; height=9; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |
| 26  | img     | style=cursor:pointer; idobjective=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                                                         |
| 29  | img     | title=&lt;%=zlabelOrg%&gt;; alt=&lt;%=zlabelOrg%&gt;; src=&lt;%=zOrg%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                |
| 31  | img     | title=&lt;%=zlabelPersonal%&gt;; alt=&lt;%=zlabelPersonal%&gt;; src=&lt;%=zPersonal%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 37  | input   | class=finputa; type=text; id=SCO_ACCOMP_DEGREE&lt;%=zposicions3%&gt;; name=SCO_ACCOMP_DEGREE&lt;%=zposicions3%&gt;; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                 |
| 38  | a       | title=&lt;%=AddComment%&gt;; href=javascript:AddComent(m4objeto('comment&lt;%=zposicions3%&gt;','b&lt;%=zposicions3%&gt;'));                                                                            |
| 38  | img     | align=right; alt=&lt;%=AddComment%&gt;; src=&lt;%=pathImgAddComment%&gt;; height=20; width=20; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                           |
| --- | ----------- | -------------------------------------------------------------------------------------------- |
| 4   | m4:label    | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo3                                       |
| 5   | m4:label    | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo3                                            |
| 6   | m4:label    | item=SCO_SCHED_VALUE; htmlsafe=true; outputdef=znodo3                                        |
| 7   | m4:label    | item=SCO_VALUE; htmlsafe=true; outputdef=znodo3                                              |
| 8   | m4:label    | item=SCO_ACCOMP_DEGREE; htmlsafe=true; outputdef=znodo3                                      |
| 11  | m4:dataloop | outputdef=znodo3                                                                             |
| 12  | m4:current  | m4varname=zposicions3; outputdef=znodo3                                                      |
| 13  | m4:item     | m4varname=zSCO_ID_CRITERIA_TYPE3; item=SCO_ID_CRITERIA_TYPE; htmlsafe=true; outputdef=znodo3 |
| 26  | m4:item     | item=SCO_ID_MAGNITUD; htmlsafe=true; outputdef=znodo3                                        |
| 27  | m4:item     | item=SCO_NM_OBJECTIVE; htmlsafe=true; outputdef=znodo3                                       |
| 34  | m4:item     | item=SCO_NM_TYPE; htmlsafe=true; outputdef=znodo3                                            |
| 35  | m4:item     | item=SCO_SCHED_VALUE; htmlsafe=true; outputdef=znodo3                                        |
| 36  | m4:item     | item=SCO_VALUE; htmlsafe=true; outputdef=znodo3                                              |
| 37  | m4:item     | item=SCO_NM_MAGNITUDE; htmlsafe=true; outputdef=znodo3                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | &lt;%if (zcount3 &gt; 0) {%&gt;                                                                                                                                    |
| 7   | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td&gt; &lt;m4:label  item="SCO_VALUE" htmlsafe="true" outputdef="&lt;%=znodo3%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt;              |
| 28  | &lt;%if(zSCO_ID_CRITERIA_TYPE3.equals("01")){%&gt;                                                                                                                 |
| 30  | &lt;%}else if(zSCO_ID_CRITERIA_TYPE3.equals("02")){%&gt;                                                                                                           |
| 36  | &lt;%if (zCkSeg.equals("1")){%&gt;&lt;td class="label"&gt; &lt;m4:item  item="SCO_VALUE" htmlsafe="true" outputdef="&lt;%=znodo3%&gt;" /&gt;&lt;/td&gt;&lt;%}%&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 9   | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp |
| 9   | /iconos/icono_flecha_azul2_ess_11_9.gif                     |
| 25  | javascript:ViewComent(m4objeto(                             |
| 25  | &lt;%=pathImgViewComment%&gt;                               |
| 26  | &lt;%=zAyuda%&gt;                                           |
| 29  | &lt;%=zOrg%&gt;                                             |
| 31  | &lt;%=zPersonal%&gt;                                        |
| 38  | javascript:AddComent(m4objeto(                              |
| 38  | &lt;%=pathImgAddComment%&gt;                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 9   | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp | ausente    | P06               |
| BASE   | 25  | javascript:ViewComent(m4objeto(                             | dinámica   | P06               |
| BASE   | 25  | &lt;%=pathImgViewComment%&gt;                               | dinámica   | P06               |
| BASE   | 26  | &lt;%=zAyuda%&gt;                                           | dinámica   | P06               |
| BASE   | 29  | &lt;%=zOrg%&gt;                                             | dinámica   | P06               |
| BASE   | 31  | &lt;%=zPersonal%&gt;                                        | dinámica   | P06               |
| BASE   | 38  | javascript:AddComent(m4objeto(                              | dinámica   | P06               |
| BASE   | 38  | &lt;%=pathImgAddComment%&gt;                                | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_body_o.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
