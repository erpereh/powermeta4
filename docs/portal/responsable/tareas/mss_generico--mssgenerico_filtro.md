# mssgenerico_filtro

Identificador: `mss_generico/mssgenerico_filtro.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_filtro.jsp) | `146ff1228bfcdb8a4d955e7d305fbc51c9b069b358ed6920d3d40796f4e34867` |     53 |
| CYC / español     | [m4custom/CYC/mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_generico/espanol/mssgenerico_filtro.jsp)   | `6eb33569397baa73324fc130df9cfabc77dd2bf39d59c335e9e3269e9cdfa7d0` |     53 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mssgenerico_filtro.jsp) | `146ff1228bfcdb8a4d955e7d305fbc51c9b069b358ed6920d3d40796f4e34867` |     53 |
| BASE / español    | [mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/mss_generico/espanol/mssgenerico_filtro.jsp)                             | `146ff1228bfcdb8a4d955e7d305fbc51c9b069b358ed6920d3d40796f4e34867` |     53 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_filtro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                              |
| --- | ----------------------------------------------------- |
| 2   | Filtro                                                |
| 5   | Empleado Todos $M4ITEM1$                              |
| 16  | Nivel de validación [valor dinámico] [valor dinámico] |
| 38  | Motivo de cancelación                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | form    | name=prueba; id=prueba; action=                                                                                                                                                                                               |
| 6   | select  | id=filtro; class=fuenteformulario150; onchange=filtrar()                                                                                                                                                                      |
| 7   | option  | value=&lt;%=zfiltro%&gt;                                                                                                                                                                                                      |
| 8   | option  | value=Todos                                                                                                                                                                                                                   |
| 12  | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 17  | select  | id=nivel; class=fuenteapartados; onchange=filtrar()                                                                                                                                                                           |
| 18  | option  | value=&lt;%=znivel%&gt;                                                                                                                                                                                                       |
| 28  | option  | value=&lt;%=i%&gt;                                                                                                                                                                                                            |
| 39  | form    | id=motivo; name=motivo; action=                                                                                                                                                                                               |
| 41  | input   | title=Escribe el motivo de cancelación genérico; size=30; id=motivog; name=motivog; type=text; maxlength=40; onkeyup=m4sincro()                                                                                               |
| 44  | a       | href=m4marcaraceptar();; title=Pulse para aceptar todos los registros de esta página                                                                                                                                          |
| 44  | img     | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=Pulse para aceptar todos los registros de esta página; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |
| 45  | a       | href=javascript:m4marcarcancelar();; title=Pulse para cancelar todos los registros de esta página                                                                                                                             |
| 45  | img     | src=/iconos/icono_cancelar_todas_mss_36_36.gif; width=36; height=36; alt=Pulse para cancelar todos los registros de esta página; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 46  | a       | href=javascript:m4desmarcar();; title=Pulse para deshacer los cambios                                                                                                                                                         |
| 46  | img     | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=Pulse para deshacer los cambios; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                              |
| 50  | a       | href=javascript:m4enviar();; title=Enviar                                                                                                                                                                                     |
| 50  | img     | src=/iconos/icono_enviar_mss_36_36.gif; width=36; height=36; alt=Enviar; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                         |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                      | Resolución estática parcial           |
| --- | ------------ | ------------------------------------- | ------------------------------------- |
| 20  | zmaxnivel    | ""                                    |                                       |
| 21  | i            | 0                                     | 0                                     |
| 25  | zmaxnivelnum | Integer.valueOf(zmaxnivel).intValue() | Integer.valueOf(zmaxnivel).intValue() |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                       |
| --- | ----------- | ---------------------------------------- |
| 7   | m4:item     | m4name=zNOMBREPERSON; htmlsafe=true      |
| 9   | m4:iterator | m4rows=*; m4node=ziteratorlista          |
| 10  | m4:param    | name=m4item0; value=zSTDIDPERSON         |
| 11  | m4:param    | name=m4item1; value=zNOMBREEMPLEADOlista |

| L   | Operación | Argumentos literales                            |
| --- | --------- | ----------------------------------------------- |
| 24  | getItem   | znodocom,zmeta4object,znodocom,"","MAX_NIVELES" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                          |
| --- | ------------------------------------------ |
| 39  |                                            |
| 44  | m4marcaraceptar();                         |
| 44  | /iconos/icono_aceptar_todas_36_36.gif      |
| 45  | javascript:m4marcarcancelar();             |
| 45  | /iconos/icono_cancelar_todas_mss_36_36.gif |
| 46  | javascript:m4desmarcar();                  |
| 46  | /iconos/icono_deshacer_mss_36_36.gif       |
| 50  | javascript:m4enviar();                     |
| 50  | /iconos/icono_enviar_mss_36_36.gif         |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_generico/espanol/mssgenerico_filtro.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_generico/espanol/mssgenerico_filtro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                              |
| --- | ----------------------------------------------------- |
| 2   | Filtro                                                |
| 5   | Empleado Todos $M4ITEM1$                              |
| 16  | Nivel de validación [valor dinámico] [valor dinámico] |
| 38  | Motivo de cancelación                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | form    | name=prueba; id=prueba; action=                                                                                                                                                                                               |
| 6   | select  | id=filtro; class=fuenteformulario150; onchange=filtrar()                                                                                                                                                                      |
| 7   | option  | value=&lt;%=zfiltro%&gt;                                                                                                                                                                                                      |
| 8   | option  | value=Todos                                                                                                                                                                                                                   |
| 12  | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 17  | select  | id=nivel; class=fuenteapartados; onchange=filtrar()                                                                                                                                                                           |
| 18  | option  | value=&lt;%=znivel%&gt;                                                                                                                                                                                                       |
| 28  | option  | value=&lt;%=i%&gt;                                                                                                                                                                                                            |
| 39  | form    | id=motivo; name=motivo; action=                                                                                                                                                                                               |
| 41  | input   | title=Escribe el motivo de cancelación genérico; size=30; id=motivog; name=motivog; type=text; maxlength=40; onkeyup=m4sincro()                                                                                               |
| 44  | a       | href=m4marcaraceptar();; title=Pulse para aceptar todos los registros de esta página                                                                                                                                          |
| 44  | img     | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=Pulse para aceptar todos los registros de esta página; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |
| 45  | a       | href=javascript:m4marcarcancelar();; title=Pulse para cancelar todos los registros de esta página                                                                                                                             |
| 45  | img     | src=/iconos/icono_cancelar_todas_mss_36_36.gif; width=36; height=36; alt=Pulse para cancelar todos los registros de esta página; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 46  | a       | href=javascript:m4desmarcar();; title=Pulse para deshacer los cambios                                                                                                                                                         |
| 46  | img     | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=Pulse para deshacer los cambios; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                              |
| 50  | a       | href=javascript:m4enviar();; title=Enviar; id=btn-envio                                                                                                                                                                       |
| 50  | img     | src=/iconos/icono_enviar_mss_36_36.gif; width=36; height=36; alt=Enviar; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                         |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                      | Resolución estática parcial           |
| --- | ------------ | ------------------------------------- | ------------------------------------- |
| 20  | zmaxnivel    | ""                                    |                                       |
| 21  | i            | 0                                     | 0                                     |
| 25  | zmaxnivelnum | Integer.valueOf(zmaxnivel).intValue() | Integer.valueOf(zmaxnivel).intValue() |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                       |
| --- | ----------- | ---------------------------------------- |
| 7   | m4:item     | m4name=zNOMBREPERSON; htmlsafe=true      |
| 9   | m4:iterator | m4rows=*; m4node=ziteratorlista          |
| 10  | m4:param    | name=m4item0; value=zSTDIDPERSON         |
| 11  | m4:param    | name=m4item1; value=zNOMBREEMPLEADOlista |

| L   | Operación | Argumentos literales                            |
| --- | --------- | ----------------------------------------------- |
| 24  | getItem   | znodocom,zmeta4object,znodocom,"","MAX_NIVELES" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                          |
| --- | ------------------------------------------ |
| 39  |                                            |
| 44  | m4marcaraceptar();                         |
| 44  | /iconos/icono_aceptar_todas_36_36.gif      |
| 45  | javascript:m4marcarcancelar();             |
| 45  | /iconos/icono_cancelar_todas_mss_36_36.gif |
| 46  | javascript:m4desmarcar();                  |
| 46  | /iconos/icono_deshacer_mss_36_36.gif       |
| 50  | javascript:m4enviar();                     |
| 50  | /iconos/icono_enviar_mss_36_36.gif         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------ | ---------- | ----------------- |
| COLL   | 45  | javascript:m4marcarcancelar(); | dinámica   | P06               |
| COLL   | 46  | javascript:m4desmarcar();      | dinámica   | P06               |
| COLL   | 50  | javascript:m4enviar();         | dinámica   | P06               |
| CYC    | 45  | javascript:m4marcarcancelar(); | dinámica   | P06               |
| CYC    | 46  | javascript:m4desmarcar();      | dinámica   | P06               |
| CYC    | 50  | javascript:m4enviar();         | dinámica   | P06               |
| IBER   | 45  | javascript:m4marcarcancelar(); | dinámica   | P06               |
| IBER   | 46  | javascript:m4desmarcar();      | dinámica   | P06               |
| IBER   | 50  | javascript:m4enviar();         | dinámica   | P06               |
| BASE   | 45  | javascript:m4marcarcancelar(); | dinámica   | P06               |
| BASE   | 46  | javascript:m4desmarcar();      | dinámica   | P06               |
| BASE   | 50  | javascript:m4enviar();         | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mssgenerico_filtro.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
