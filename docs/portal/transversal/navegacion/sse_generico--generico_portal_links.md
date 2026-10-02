# generico_portal_links

Identificador: `sse_generico/generico_portal_links.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_portal_links.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_portal_links.jsp) | `9815e065b6bf8cb71cbfec1981f5a3261747ef42244a7205982ed5e024ff3852` |     95 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_portal_links.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_portal_links.jsp)   | `9815e065b6bf8cb71cbfec1981f5a3261747ef42244a7205982ed5e024ff3852` |     95 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_portal_links.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_portal_links.jsp) | `9815e065b6bf8cb71cbfec1981f5a3261747ef42244a7205982ed5e024ff3852` |     95 |
| BASE / español    | [sse_generico/espanol/generico_portal_links.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_portal_links.jsp)                             | `9815e065b6bf8cb71cbfec1981f5a3261747ef42244a7205982ed5e024ff3852` |     95 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_portal_links.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_portal_links.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 23  | Favoritos:               |
| 65  | Texto:                   |
| 82  | Actualizar               |
| 86  | E-Mail:                  |
| 89  | WebMaster                |
| 92  | RRHH                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | a       | href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0; title=Mis contactos                                                                                                                         |
| 14  | img     | width=20; height=20; src=/iconos/icono_contactos_20_20.gif; alt=Mis contactos; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                   |
| 15  | a       | href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0; title=Quién es quién                                                                                                          |
| 15  | img     | width=20; height=20; src=/iconos/icono_inventario_20_20.gif; alt=Quién es quién; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                 |
| 22  | form    | action=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0; method=post; name=Favoritos; id=Favoritos                                                                                   |
| 22  | input   | type=hidden; id=TIT; name=TIT; value=                                                                                                                                                                      |
| 22  | input   | type=hidden; id=URL; name=URL; value=                                                                                                                                                                      |
| 24  | a       | href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp; title=Edita tus favoritos                                                                                                                  |
| 24  | img     | width=20; height=20; src=/iconos/icono_editar_20_20.gif; alt=Edita tus favoritos; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                |
| 25  | a       | href=Javascript:Enviar();; title=Agrega a favoritos                                                                                                                                                        |
| 25  | img     | width=20; height=20; src=/iconos/icono_insertar_20_20.gif; alt=Agrega a favoritos; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                               |
| 48  | a       | class=fuentelinkcampo; title=enlace directo; href=&lt;%=zURL%&gt;                                                                                                                                          |
| 59  | form    | action=[host externo]/search; method=get; name=f; id=f                                                                                                                                                     |
| 68  | input   | title=Introduce el texto de la búsqueda; type=text; value=; name=q; id=q; size=15; maxlength=256                                                                                                           |
| 71  | input   | title=Busca en internet; value=Buscar; name=btnI; id=btnI; type=image; src=/iconos/icono_buscar_ess_36_36.gif; onmouseover=m4luztotal(this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 82  | a       | title=Desde aquí puedes actualizar tu contraseña; href=/servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01                                                                                     |
| 89  | a       | title=Envía un E-Mail al WebMaster; href=mailto:&lt;%=zMAILWEBMASTER%&gt;                                                                                                                                  |
| 92  | a       | title=Envía un E-Mail a RRHH; href=mailto:&lt;%=zMAILRRHH%&gt;                                                                                                                                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                     | Resolución estática parcial |
| --- | ------------ | ------------------------------------ | --------------------------- |
| 32  | strcuentareg | ""                                   |                             |
| 33  | zitem        | ""                                   |                             |
| 34  | zURL         | ""                                   |                             |
| 35  | nombremio    | ""                                   |                             |
| 37  | cuentareg    | 0                                    | 0                           |
| 38  | i            | 0                                    | 0                           |
| 42  | stri         | String.valueOf(i)                    | String.valueOf(i)           |
| 45  | s            | zitem + "{&#124;&amp;&#124;}" + zURL | {"{&#124;&amp;&#124;}"}     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                     |
| --- | ---------------- | ---------------------------------------- |
| 40  | getCountInClient | znodo,zMeta4Object,znodo                 |
| 43  | getItem          | znodo,zMeta4Object,znodo,stri,"N_ENLACE" |
| 44  | getItem          | znodo,zMeta4Object,znodo,stri,"ENLACE"   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 2   | Enviar  |            |

| L   | Condición / acción / mensaje literal                                                  |
| --- | ------------------------------------------------------------------------------------- |
| 45  | expresión de cálculo/transformación: String s = zitem + "{&#124;&amp;&#124;}" + zURL; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 14  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0               |
| 14  | /iconos/icono_contactos_20_20.gif                                      |
| 15  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 |
| 15  | /iconos/icono_inventario_20_20.gif                                     |
| 22  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0 |
| 24  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp              |
| 24  | /iconos/icono_editar_20_20.gif                                         |
| 25  | Javascript:Enviar();                                                   |
| 25  | /iconos/icono_insertar_20_20.gif                                       |
| 48  | &lt;%=zURL%&gt;                                                        |
| 59  | [host externo]/search                                                  |
| 71  | /iconos/icono_buscar_ess_36_36.gif                                     |
| 82  | /servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01        |
| 89  | mailto:&lt;%=zMAILWEBMASTER%&gt;                                       |
| 92  | mailto:&lt;%=zMAILRRHH%&gt;                                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| COLL   | 14  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0               | ausente    | P06                                                                                  |
| COLL   | 15  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 | ausente    | P06                                                                                  |
| COLL   | 22  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0 | ausente    | P06                                                                                  |
| COLL   | 24  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp              | ausente    | P06                                                                                  |
| COLL   | 48  | &lt;%=zURL%&gt;                                                        | dinámica   | P06                                                                                  |
| COLL   | 59  | [host externo]/search                                                  | externa    | destino externo                                                                      |
| COLL   | 82  | /servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01        | contextual | [sse_g0/change_password.jsp](../../empleado/organizacion/sse_g0--change_password.md) |
| COLL   | 89  | mailto:&lt;%=zMAILWEBMASTER%&gt;                                       | dinámica   | P06                                                                                  |
| COLL   | 92  | mailto:&lt;%=zMAILRRHH%&gt;                                            | dinámica   | P06                                                                                  |
| CYC    | 14  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0               | ausente    | P06                                                                                  |
| CYC    | 15  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 | ausente    | P06                                                                                  |
| CYC    | 22  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0 | ausente    | P06                                                                                  |
| CYC    | 24  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp              | ausente    | P06                                                                                  |
| CYC    | 48  | &lt;%=zURL%&gt;                                                        | dinámica   | P06                                                                                  |
| CYC    | 59  | [host externo]/search                                                  | externa    | destino externo                                                                      |
| CYC    | 82  | /servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01        | contextual | [sse_g0/change_password.jsp](../../empleado/organizacion/sse_g0--change_password.md) |
| CYC    | 89  | mailto:&lt;%=zMAILWEBMASTER%&gt;                                       | dinámica   | P06                                                                                  |
| CYC    | 92  | mailto:&lt;%=zMAILRRHH%&gt;                                            | dinámica   | P06                                                                                  |
| IBER   | 14  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0               | ausente    | P06                                                                                  |
| IBER   | 15  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 | ausente    | P06                                                                                  |
| IBER   | 22  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0 | ausente    | P06                                                                                  |
| IBER   | 24  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp              | ausente    | P06                                                                                  |
| IBER   | 48  | &lt;%=zURL%&gt;                                                        | dinámica   | P06                                                                                  |
| IBER   | 59  | [host externo]/search                                                  | externa    | destino externo                                                                      |
| IBER   | 82  | /servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01        | contextual | [sse_g0/change_password.jsp](../../empleado/organizacion/sse_g0--change_password.md) |
| IBER   | 89  | mailto:&lt;%=zMAILWEBMASTER%&gt;                                       | dinámica   | P06                                                                                  |
| IBER   | 92  | mailto:&lt;%=zMAILRRHH%&gt;                                            | dinámica   | P06                                                                                  |
| BASE   | 14  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=0               | ausente    | P06                                                                                  |
| BASE   | 15  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 | ausente    | P06                                                                                  |
| BASE   | 22  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_links.jsp?estado=0 | ausente    | P06                                                                                  |
| BASE   | 24  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp              | ausente    | P06                                                                                  |
| BASE   | 48  | &lt;%=zURL%&gt;                                                        | dinámica   | P06                                                                                  |
| BASE   | 59  | [host externo]/search                                                  | externa    | destino externo                                                                      |
| BASE   | 82  | /servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?estado=01        | contextual | [sse_g0/change_password.jsp](../../empleado/organizacion/sse_g0--change_password.md) |
| BASE   | 89  | mailto:&lt;%=zMAILWEBMASTER%&gt;                                       | dinámica   | P06                                                                                  |
| BASE   | 92  | mailto:&lt;%=zMAILRRHH%&gt;                                            | dinámica   | P06                                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_portal_links.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
