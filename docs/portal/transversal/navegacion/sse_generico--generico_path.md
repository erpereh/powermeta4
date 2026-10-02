# generico_path

Identificador: `sse_generico/generico_path.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_path.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_path.jsp) | `01be52decce68cd187e08ac1d0bc34acf45649092c6105e6ad4019bc244fff52` |     29 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_path.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_path.jsp)   | `01be52decce68cd187e08ac1d0bc34acf45649092c6105e6ad4019bc244fff52` |     29 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_path.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_path.jsp) | `01be52decce68cd187e08ac1d0bc34acf45649092c6105e6ad4019bc244fff52` |     29 |
| BASE / español    | [sse_generico/espanol/generico_path.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_path.jsp)                             | `01be52decce68cd187e08ac1d0bc34acf45649092c6105e6ad4019bc244fff52` |     29 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_path.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_path.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 1   | Inicio                   |
| 6   | Mi información personal  |
| 11  | Mis datos económicos     |
| 16  | Mi puesto de trabajo     |
| 21  | Mi tiempo de trabajo     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | a       | class=enlacefuncional; title=Inicio; href=/servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0        |
| 3   | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 5   | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 6   | a       | title=Mi información personal; class=enlacefuncional; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1 |
| 8   | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 10  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 11  | a       | title=Mis datos económicos; class=enlacefuncional; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2    |
| 13  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 15  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 16  | a       | title=Mi puesto de trabajo; class=enlacefuncional; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3    |
| 18  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 20  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |
| 21  | a       | title=Mi tiempo de trabajo; class=enlacefuncional; href=/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4    |
| 24  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                                       |

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

| L   | Condición / acción / mensaje literal                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | if ( estado.equals("1")){%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;Mi información personal |
| 5   | if ( estado.equals("11")) {%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;                      |
| 8   | if (estado.equals("2")){%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;Mis datos económicos     |
| 10  | if (estado.equals("21")) {%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;                       |
| 13  | if (estado.equals("3")){%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;Mi puesto de trabajo     |
| 15  | if (estado.equals("31")) {%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;                       |
| 18  | if (estado.equals("4")){%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;Mi tiempo de trabajo     |
| 20  | if (estado.equals("41")) {%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;                       |
| 23  | if (estado.equals("1") &#124;&#124; estado.equals("2") &#124;&#124; estado.equals("3") &#124;&#124; estado.equals("4")) {               |
| 24  | }else{%&gt;&lt;img src="/iconos/icono_path_16_7.gif" height="7" width="16" alt="Flecha" /&gt;                                           |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                    |
| --- | -------------------------------------------------------------------- |
| 1   | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0 |
| 3   | /iconos/icono_path_16_7.gif                                          |
| 5   | /iconos/icono_path_16_7.gif                                          |
| 6   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1           |
| 8   | /iconos/icono_path_16_7.gif                                          |
| 10  | /iconos/icono_path_16_7.gif                                          |
| 11  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2           |
| 13  | /iconos/icono_path_16_7.gif                                          |
| 15  | /iconos/icono_path_16_7.gif                                          |
| 16  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3           |
| 18  | /iconos/icono_path_16_7.gif                                          |
| 20  | /iconos/icono_path_16_7.gif                                          |
| 21  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4           |
| 24  | /iconos/icono_path_16_7.gif                                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                           | Resolución | Ficha / candidato                                                       |
| ------ | --- | -------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| COLL   | 1   | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0 | ausente    | P06                                                                     |
| COLL   | 6   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1           | ausente    | P06                                                                     |
| COLL   | 11  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2           | ausente    | P06                                                                     |
| COLL   | 16  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3           | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md) |
| COLL   | 21  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4           | ausente    | P06                                                                     |
| CYC    | 1   | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0 | ausente    | P06                                                                     |
| CYC    | 6   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1           | ausente    | P06                                                                     |
| CYC    | 11  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2           | ausente    | P06                                                                     |
| CYC    | 16  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3           | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md) |
| CYC    | 21  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4           | ausente    | P06                                                                     |
| IBER   | 1   | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0 | ausente    | P06                                                                     |
| IBER   | 6   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1           | ausente    | P06                                                                     |
| IBER   | 11  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2           | ausente    | P06                                                                     |
| IBER   | 16  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3           | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md) |
| IBER   | 21  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4           | ausente    | P06                                                                     |
| BASE   | 1   | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?estado=0 | ausente    | P06                                                                     |
| BASE   | 6   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_menu.jsp?estado=1           | ausente    | P06                                                                     |
| BASE   | 11  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_menu.jsp?estado=2           | ausente    | P06                                                                     |
| BASE   | 16  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3           | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md) |
| BASE   | 21  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4           | ausente    | P06                                                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_path.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
