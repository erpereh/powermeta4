# ssco_evaluator_body_c

Identificador: `sse_g3/ssco_evaluator_body_c.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_evaluator_body_c.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_c.jsp) | `2013d1524c49a3d69cecfa0c08b87f43a471a09dbb815341418400d2faed3424` |     97 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_evaluator_body_c.jsp](../../../../clon_portal/portal/sse_g3/ssco_evaluator_body_c.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Cuestionarios            |
| 13  | Acceda al Test           |
| 51  | [valor dinámico] :       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                               |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | a       | title=&lt;%=Selec%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp                                                                                                                |
| 16  | img     | alt=&lt;%=Selec%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                        |
| 29  | form    | name=a&lt;%=current%&gt;; id=a&lt;%=current%&gt;; onsubmit=return false                                                                                                                                 |
| 30  | input   | id=ocultos&lt;%=current%&gt;; name=ocultos&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                          |
| 31  | input   | id=ocu&lt;%=current%&gt;; name=ocu&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                  |
| 32  | input   | id=comment&lt;%=current%&gt;; name=comment&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                          |
| 33  | input   | id=rvalor&lt;%=current%&gt;; name=rvalor&lt;%=current%&gt;; type=hidden; value=                                                                                                                         |
| 34  | input   | id=SCO_ID_CRITERIA_TYPE&lt;%=current%&gt;; name=SCO_ID_CRITERIA_TYPE&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                |
| 35  | input   | id=SCO_WEIGHT&lt;%=current%&gt;; name=SCO_WEIGHT&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                    |
| 36  | input   | id=SCO_ID_CAP_REQ_LVL&lt;%=current%&gt;; name=SCO_ID_CAP_REQ_LVL&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                    |
| 39  | img     | style=cursor:pointer; dtstart=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                                                             |
| 42  | img     | title=&lt;%=zlabelOrg%&gt;; alt=&lt;%=zlabelOrg%&gt;; src=&lt;%=zOrg%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                |
| 44  | img     | title=&lt;%=zlabelPersonal%&gt;; alt=&lt;%=zlabelPersonal%&gt;; src=&lt;%=zPersonal%&gt;; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 85  | a       | title=&lt;%=lblQuesti%&gt;; href=javascript:open_question('&lt;%=current%&gt;','0');                                                                                                                    |
| 85  | img     | alt=&lt;%=lblQuesti%&gt;; src=/iconos/ic_details_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                          |
| --- | ----------- | ------------------------------------------------------------------------------------------- |
| 4   | m4:item     | m4varname=zCkQuestion; item=SCO_CK_QUESTION; htmlsafe=true; outputdef=znodo1                |
| 7   | m4:label    | item=SCO_NM_EXTD_KN_TYP; htmlsafe=true; outputdef=znodo1                                    |
| 18  | m4:dataloop | outputdef=znodo1                                                                            |
| 19  | m4:item     | m4varname=zSCO_ID_CRITERIA_TYPE; item=SCO_ID_CRITERIA_TYPE; htmlsafe=true; outputdef=znodo1 |
| 20  | m4:item     | m4varname=zSCOIDLVLTMPCAP; item=SCO_ID_LVL_TMP; htmlsafe=true; outputdef=znodo1             |
| 21  | m4:item     | m4varname=zNmAct; item=SCO_NM_LEVEL_ACT; htmlsafe=true; outputdef=znodo1                    |
| 23  | m4:current  | m4varname=current; outputdef=znodo1                                                         |
| 28  | m4:move     |                                                                                             |
| 28  | m4:param    | name=zsubsesion; value=zmoveaux                                                             |
| 39  | m4:item     | item=SCO_ID_CAPABILITY; htmlsafe=true; outputdef=znodo1                                     |
| 39  | m4:item     | item=SCO_ID_CAP_REQ_LVL; htmlsafe=true; outputdef=znodo1                                    |
| 40  | m4:item     | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=znodo1                                        |
| 52  | m4:item     | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=znodo1                                        |
| 57  | m4:label    | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodoaux                                        |
| 57  | m4:label    | item=SCO_MEANING; htmlsafe=true; outputdef=znodoaux                                         |
| 58  | m4:dataloop | outputdef=znodoaux                                                                          |
| 59  | m4:item     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=znodoaux                                        |
| 59  | m4:item     | item=SCO_MEANING; htmlsafe=true; outputdef=znodoaux                                         |
| 65  | m4:item     | item=SCO_NM_EXTD_KN_TYP; htmlsafe=true; outputdef=znodo1                                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | &lt;%if (zcount1 &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                                                                                   |
| 15  | &lt;%if (zCkQuestion.equals("1")){%&gt;&lt;td&gt; &lt;/td&gt;&lt;%}%&gt;                                                                                                                                                                                                                                                                                                                          |
| 22  | &lt;%if (zNmAct.equals("")){zNmAct=lblNoVal; }%&gt;                                                                                                                                                                                                                                                                                                                                               |
| 41  | &lt;%if(zSCO_ID_CRITERIA_TYPE.equals("01")){%&gt;                                                                                                                                                                                                                                                                                                                                                 |
| 43  | &lt;%}else if(zSCO_ID_CRITERIA_TYPE.equals("02")){%&gt;                                                                                                                                                                                                                                                                                                                                           |
| 85  | &lt;%if (zCkQuestion.equals("1")){%&gt;&lt;td class="i_r"&gt;&lt;a title="&lt;%=lblQuesti%&gt;" href="javascript:open_question('&lt;%=current%&gt;','0');"&gt;&lt;img  alt="&lt;%=lblQuesti%&gt;"  src="/iconos/ic_details_16_16.gif" height="16" width="16"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /&gt;&lt;/a&gt;&lt;/td&gt;&lt;%}%&gt; |
| 26  | expresión de cálculo/transformación: zmoveaux =znodoaux+ ":" + "SSCO_K_LEVEL" + "[FIRST]";                                                                                                                                                                                                                                                                                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 16  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp |
| 16  | /iconos/icono_flecha_azul2_ess_11_9.gif                     |
| 39  | &lt;%=zAyuda%&gt;                                           |
| 42  | &lt;%=zOrg%&gt;                                             |
| 44  | &lt;%=zPersonal%&gt;                                        |
| 85  | javascript:open_question(                                   |
| 85  | /iconos/ic_details_16_16.gif                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 16  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp | ausente    | P06               |
| BASE   | 39  | &lt;%=zAyuda%&gt;                                           | dinámica   | P06               |
| BASE   | 42  | &lt;%=zOrg%&gt;                                             | dinámica   | P06               |
| BASE   | 44  | &lt;%=zPersonal%&gt;                                        | dinámica   | P06               |
| BASE   | 85  | javascript:open_question(                                   | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_body_c.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
