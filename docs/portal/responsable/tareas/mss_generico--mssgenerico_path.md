# mssgenerico_path

Identificador: `mss_generico/mssgenerico_path.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mssgenerico_path.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_path.jsp) | `cb9af19b7083b4732cc7e3028e30a2ad87b784da6952b914fcc2f63c448a67aa` |     41 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mssgenerico_path.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mssgenerico_path.jsp) | `cb9af19b7083b4732cc7e3028e30a2ad87b784da6952b914fcc2f63c448a67aa` |     41 |
| BASE / español    | [mss_generico/espanol/mssgenerico_path.jsp](../../../../clon_portal/portal/mss_generico/espanol/mssgenerico_path.jsp)                             | `cb9af19b7083b4732cc7e3028e30a2ad87b784da6952b914fcc2f63c448a67aa` |     41 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mssgenerico_path.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_path.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 2   | Inicio                   |
| 8   | Compensación salarial    |
| 13  | Información personal     |
| 19  | Datos económicos         |
| 25  | Puestos de trabajo       |
| 31  | Tiempo de trabajo        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------- |
| 2   | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0 |
| 5   | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 8   | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 8   | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5         |
| 13  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 13  | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1              |
| 16  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 19  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 19  | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2              |
| 22  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 25  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 25  | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3              |
| 28  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 31  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |
| 31  | a       | class=enlacefuncional; href=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4              |
| 36  | img     | src=/iconos/icono_path_16_7.gif; height=7; width=16; alt=Flecha                                     |

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

| L   | Condición / acción / mensaje literal                                                                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | if ( estado != "0" ) {%&gt;&lt;a class="enlacefuncional" href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0"&gt;Inicio&lt;/a&gt; |
| 4   | if ( estado.equals("1")){%&gt;                                                                                                                              |
| 7   | }if ( estado.equals("112")){%&gt;                                                                                                                           |
| 12  | if ( estado.equals("11")) {%&gt;                                                                                                                            |
| 15  | if (estado.equals("2")){%&gt;                                                                                                                               |
| 18  | if (estado.equals("21")) {%&gt;                                                                                                                             |
| 21  | if (estado.equals("3")){%&gt;                                                                                                                               |
| 24  | if (estado.equals("31")) {%&gt;                                                                                                                             |
| 27  | if (estado.equals("4")){%&gt;                                                                                                                               |
| 30  | if (estado.equals("41")) {%&gt;                                                                                                                             |
| 33  | if (estado.equals("0") &#124;&#124; estado.equals("1") &#124;&#124; estado.equals("2") &#124;&#124; estado.equals("3") &#124;&#124; estado.equals("4")) {   |
| 35  | }else{%&gt;                                                                                                                                                 |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                       |
| --- | ----------------------------------------------------------------------- |
| 2   | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0 |
| 5   | /iconos/icono_path_16_7.gif                                             |
| 8   | /iconos/icono_path_16_7.gif                                             |
| 8   | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5         |
| 13  | /iconos/icono_path_16_7.gif                                             |
| 13  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1              |
| 16  | /iconos/icono_path_16_7.gif                                             |
| 19  | /iconos/icono_path_16_7.gif                                             |
| 19  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2              |
| 22  | /iconos/icono_path_16_7.gif                                             |
| 25  | /iconos/icono_path_16_7.gif                                             |
| 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3              |
| 28  | /iconos/icono_path_16_7.gif                                             |
| 31  | /iconos/icono_path_16_7.gif                                             |
| 31  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4              |
| 36  | /iconos/icono_path_16_7.gif                                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                              | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 2   | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0 | ausente    | P06               |
| COLL   | 8   | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5         | ausente    | P06               |
| COLL   | 13  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1              | ausente    | P06               |
| COLL   | 19  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2              | ausente    | P06               |
| COLL   | 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3              | ausente    | P06               |
| COLL   | 31  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4              | ausente    | P06               |
| IBER   | 2   | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0 | ausente    | P06               |
| IBER   | 8   | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5         | ausente    | P06               |
| IBER   | 13  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1              | ausente    | P06               |
| IBER   | 19  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2              | ausente    | P06               |
| IBER   | 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3              | ausente    | P06               |
| IBER   | 31  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4              | ausente    | P06               |
| BASE   | 2   | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_portal.jsp?estado=0 | ausente    | P06               |
| BASE   | 8   | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu_comp.jsp?estado=5         | ausente    | P06               |
| BASE   | 13  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_menu.jsp?estado=1              | ausente    | P06               |
| BASE   | 19  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_menu.jsp?estado=2              | ausente    | P06               |
| BASE   | 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3              | ausente    | P06               |
| BASE   | 31  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_menu.jsp?estado=4              | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mssgenerico_path.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
