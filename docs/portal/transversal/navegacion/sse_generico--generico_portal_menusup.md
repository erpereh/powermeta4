# generico_portal_menusup

Identificador: `sse_generico/generico_portal_menusup.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_portal_menusup.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_portal_menusup.jsp) | `4666e450f23e027b493beb42401e8648d74c39e30dd174d4d6dc35902d007815` |     63 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_portal_menusup.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_portal_menusup.jsp)   | `4666e450f23e027b493beb42401e8648d74c39e30dd174d4d6dc35902d007815` |     63 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_portal_menusup.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_portal_menusup.jsp) | `4666e450f23e027b493beb42401e8648d74c39e30dd174d4d6dc35902d007815` |     63 |
| BASE / español    | [sse_generico/espanol/generico_portal_menusup.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_portal_menusup.jsp)                             | `4666e450f23e027b493beb42401e8648d74c39e30dd174d4d6dc35902d007815` |     63 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_portal_menusup.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_portal_menusup.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 28  | Inicio &#124; Mis tareas &#124; Mi información personal &#124; Mis datos económicos &#124; Mi puesto de trabajo &#124; Mi tiempo de trabajo &#124; Mi conocimiento |
| 58  | [valor dinámico] -                                                                                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                            |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12  | img     | src=/iconos/espanol/icono_cabecera_sse_56_404.gif; alt=titulo; width=404; height=56                                                                                                  |
| 13  | a       | href=/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0; title=SSM                                                                                              |
| 13  | img     | width=36; height=36; src=/iconos/icono_mss_36_36.gif; alt=SSM; onmouseover=m4luztotal(this,200,200,200,13,6,15,175,175,255); onmouseout=m4oscuridad(this)                            |
| 14  | a       | href=/servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0; title=El plano del SSE                                                                                      |
| 14  | img     | width=36; height=36; src=/iconos/icono_mapa_36_36.gif; alt=El plano del SSE; onmouseover=m4luztotal(this,200,200,200,13,6,15,175,175,255); onmouseout=m4oscuridad(this)              |
| 16  | a       | href=/servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0; title=Desconectar                                                                                              |
| 16  | img     | width=36; height=36; src=/iconos/ic_log_off_36_36.gif; alt=Desconectar; onmouseover=m4luztotal(this,200,200,200,13,6,15,175,175,255); onmouseout=m4oscuridad(this)                   |
| 28  | a       | href=/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0; class=fuentemenuprincipal                                                                                 |
| 29  | a       | href=/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0; class=fuentemenuprincipal                                                                          |
| 30  | a       | id=g1; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1; class=fuentemenuprincipal; onmouseover=sse_g1.mostrardiv('sse_g1');; onmouseout=sse_g1.ocultardiv('sse_g1'); |
| 31  | a       | id=g2; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2; class=fuentemenuprincipal; onmouseover=sse_g2.mostrardiv('sse_g2');; onmouseout=sse_g2.ocultardiv('sse_g2'); |
| 32  | a       | id=g3; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3; class=fuentemenuprincipal; onmouseover=sse_g3.mostrardiv('sse_g3');; onmouseout=sse_g3.ocultardiv('sse_g3'); |
| 33  | a       | id=g4; href=/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4; class=fuentemenuprincipal; onmouseover=sse_g4.mostrardiv('sse_g4');; onmouseout=sse_g4.ocultardiv('sse_g4'); |
| 36  | a       | id=g5; href=/servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5; onmouseover=sse_g5.mostrardiv('sse_g5');; onmouseout=sse_g5.ocultardiv('sse_g5');; class=fuentemenuprincipal |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 7   | IsKnownet       | getBagEntries("IsKnownet") |

| L   | Variable  | Expresión fuente                   | Resolución estática parcial        |
| --- | --------- | ---------------------------------- | ---------------------------------- |
| 7   | IsKnownet | zsesion.getBagEntries("IsKnownet") | zsesion.getBagEntries("IsKnownet") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 34  | &lt;%if(IsKnownet.equals("0")){%&gt; |
| 50  | &lt;%if(IsKnownet.equals("0")){%&gt; |

### Includes, navegación y dependencias

| L   | Include            |
| --- | ------------------ |
| 57  | generico_path.jsp  |
| 58  | generico_fecha.jsp |

| L   | Destino / recurso                                                           |
| --- | --------------------------------------------------------------------------- |
| 9   | /libreria/dom1.js                                                           |
| 12  | /iconos/espanol/icono_cabecera_sse_56_404.gif                               |
| 13  | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0     |
| 13  | /iconos/icono_mss_36_36.gif                                                 |
| 14  | /servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0          |
| 14  | /iconos/icono_mapa_36_36.gif                                                |
| 16  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0             |
| 16  | /iconos/ic_log_off_36_36.gif                                                |
| 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        |
| 29  | /servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0 |
| 30  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1                  |
| 31  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2                  |
| 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                  |
| 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4                  |
| 36  | /servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5                  |
| 57  | generico_path.jsp                                                           |
| 58  | generico_fecha.jsp                                                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                  | Resolución | Ficha / candidato                                                                                                      |
| ------ | --- | --------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| COLL   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| COLL   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| COLL   | 9   | /libreria/dom1.js                                                           | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)           |
| COLL   | 13  | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0     | ausente    | P06                                                                                                                    |
| COLL   | 14  | /servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0          | ausente    | P06                                                                                                                    |
| COLL   | 16  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0             | contextual | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md); [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md) |
| COLL   | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        | ausente    | P06                                                                                                                    |
| COLL   | 29  | /servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                                                    |
| COLL   | 30  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1                  | ausente    | P06                                                                                                                    |
| COLL   | 31  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2                  | ausente    | P06                                                                                                                    |
| COLL   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                  | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md)                                                |
| COLL   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4                  | ausente    | P06                                                                                                                    |
| COLL   | 36  | /servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5                  | ausente    | P06                                                                                                                    |
| COLL   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| COLL   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| CYC    | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| CYC    | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| CYC    | 9   | /libreria/dom1.js                                                           | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                  |
| CYC    | 13  | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0     | ausente    | P06                                                                                                                    |
| CYC    | 14  | /servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0          | ausente    | P06                                                                                                                    |
| CYC    | 16  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0             | contextual | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md); [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md) |
| CYC    | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        | ausente    | P06                                                                                                                    |
| CYC    | 29  | /servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                                                    |
| CYC    | 30  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1                  | ausente    | P06                                                                                                                    |
| CYC    | 31  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2                  | ausente    | P06                                                                                                                    |
| CYC    | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                  | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md)                                                |
| CYC    | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4                  | ausente    | P06                                                                                                                    |
| CYC    | 36  | /servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5                  | ausente    | P06                                                                                                                    |
| CYC    | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| CYC    | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| IBER   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| IBER   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| IBER   | 9   | /libreria/dom1.js                                                           | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)           |
| IBER   | 13  | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0     | ausente    | P06                                                                                                                    |
| IBER   | 14  | /servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0          | ausente    | P06                                                                                                                    |
| IBER   | 16  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0             | contextual | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md); [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md) |
| IBER   | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        | ausente    | P06                                                                                                                    |
| IBER   | 29  | /servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                                                    |
| IBER   | 30  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1                  | ausente    | P06                                                                                                                    |
| IBER   | 31  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2                  | ausente    | P06                                                                                                                    |
| IBER   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                  | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md)                                                |
| IBER   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4                  | ausente    | P06                                                                                                                    |
| IBER   | 36  | /servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5                  | ausente    | P06                                                                                                                    |
| IBER   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| IBER   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| BASE   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| BASE   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |
| BASE   | 9   | /libreria/dom1.js                                                           | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                  |
| BASE   | 13  | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0     | ausente    | P06                                                                                                                    |
| BASE   | 14  | /servlet/CheckSecurity/JSP/sse_generico/generico_mapa.jsp?estado=0          | ausente    | P06                                                                                                                    |
| BASE   | 16  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp?estado=0             | contextual | [sse_generico/sse_logout.jsp](sse_generico--sse_logout.md)                                                             |
| BASE   | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        | ausente    | P06                                                                                                                    |
| BASE   | 29  | /servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                                                    |
| BASE   | 30  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1                  | ausente    | P06                                                                                                                    |
| BASE   | 31  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2                  | ausente    | P06                                                                                                                    |
| BASE   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                  | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md)                                                |
| BASE   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4                  | ausente    | P06                                                                                                                    |
| BASE   | 36  | /servlet/CheckSecurity/JSP/sse_g5/sse_g5_menu.jsp?estado=5                  | ausente    | P06                                                                                                                    |
| BASE   | 57  | generico_path.jsp                                                           | física     | [sse_generico/generico_path.jsp](sse_generico--generico_path.md)                                                       |
| BASE   | 58  | generico_fecha.jsp                                                          | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_portal_menusup.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
