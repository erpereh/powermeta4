# generico_login_menusup

Identificador: `sse_generico/generico_login_menusup.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_login_menusup.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_menusup.jsp) | `db0848bc2729540a7c9ee426ed6c85efe10396332f4298d91f7ea27c67a9e72d` |     19 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_login_menusup.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_login_menusup.jsp)   | `db0848bc2729540a7c9ee426ed6c85efe10396332f4298d91f7ea27c67a9e72d` |     19 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_login_menusup.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_login_menusup.jsp) | `db0848bc2729540a7c9ee426ed6c85efe10396332f4298d91f7ea27c67a9e72d` |     19 |
| BASE / español    | [sse_generico/espanol/generico_login_menusup.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_login_menusup.jsp)                             | `db0848bc2729540a7c9ee426ed6c85efe10396332f4298d91f7ea27c67a9e72d` |     19 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_login_menusup.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_menusup.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                        |
| --- | ------- | -------------------------------------------------------------------------------- |
| 3   | img     | src=/iconos/espanol/icono_cabecera_sse_56_404.gif; alt=SSE; width=404; height=56 |
| 5   | a       | href=/sse_generico/espanol/generico_login.jsp?estado=0; title=Español            |
| 5   | img     | alt=Español; src=/iconos/icono_espana_58_50.gif; width=58; height=50             |
| 6   | a       | href=/sse_generico/english/generico_login.jsp?estado=1; title=English            |
| 6   | img     | alt=English; src=/iconos/icono_uk_58_50.gif; width=58; height=50                 |
| 7   | a       | href=/sse_generico/francais/generico_login.jsp?estado=2; title=Français          |
| 7   | img     | alt=Français; src=/iconos/icono_francia_58_50.gif; width=58; height=50           |
| 8   | a       | href=/sse_generico/portugues/generico_login.jsp?estado=3; title=Portugês         |
| 8   | img     | alt=Portugês; src=/iconos/icono_portugal_58_50.gif; width=58; height=50          |

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

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                            |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | &lt;%if (estado.equals("0") == false){%&gt;&lt;a href="/sse_generico/espanol/generico_login.jsp?estado=0" title="Español"&gt;&lt;img alt="Español" src="/iconos/icono_espana_58_50.gif" width="58" height="50" /&gt;&lt;/a&gt;&lt;%}%&gt;       |
| 6   | &lt;%if (estado.equals("1") == false){%&gt;&lt;a href="/sse_generico/english/generico_login.jsp?estado=1" title="English"&gt;&lt;img alt="English" src="/iconos/icono_uk_58_50.gif" width="58" height="50" /&gt;&lt;/a&gt;&lt;%}%&gt;           |
| 7   | &lt;%if (estado.equals("2") == false){%&gt;&lt;a href="/sse_generico/francais/generico_login.jsp?estado=2" title="Français"&gt;&lt;img alt="Français" src="/iconos/icono_francia_58_50.gif" width="58" height="50" /&gt;&lt;/a&gt;&lt;%}%&gt;   |
| 8   | &lt;%if (estado.equals("3") == false){%&gt;&lt;a href="/sse_generico/portugues/generico_login.jsp?estado=3" title="Portugês"&gt;&lt;img alt="Portugês" src="/iconos/icono_portugal_58_50.gif" width="58" height="50" /&gt;&lt;/a&gt;&lt;%}%&gt; |

### Includes, navegación y dependencias

| L   | Include            |
| --- | ------------------ |
| 14  | generico_fecha.jsp |

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 3   | /iconos/espanol/icono_cabecera_sse_56_404.gif       |
| 5   | /sse_generico/espanol/generico_login.jsp?estado=0   |
| 5   | /iconos/icono_espana_58_50.gif                      |
| 6   | /sse_generico/english/generico_login.jsp?estado=1   |
| 6   | /iconos/icono_uk_58_50.gif                          |
| 7   | /sse_generico/francais/generico_login.jsp?estado=2  |
| 7   | /iconos/icono_francia_58_50.gif                     |
| 8   | /sse_generico/portugues/generico_login.jsp?estado=3 |
| 8   | /iconos/icono_portugal_58_50.gif                    |
| 14  | generico_fecha.jsp                                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                          | Resolución | Ficha / candidato                                                                                                                                                                |
| ------ | --- | --------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| COLL   | 5   | /sse_generico/espanol/generico_login.jsp?estado=0   | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md)                                           |
| COLL   | 6   | /sse_generico/english/generico_login.jsp?estado=1   | contextual | [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md); [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md)         |
| COLL   | 7   | /sse_generico/francais/generico_login.jsp?estado=2  | contextual | [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md); [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md)     |
| COLL   | 8   | /sse_generico/portugues/generico_login.jsp?estado=3 | contextual | [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md); [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md) |
| COLL   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| CYC    | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| CYC    | 5   | /sse_generico/espanol/generico_login.jsp?estado=0   | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md)                                           |
| CYC    | 6   | /sse_generico/english/generico_login.jsp?estado=1   | contextual | [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md); [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md)         |
| CYC    | 7   | /sse_generico/francais/generico_login.jsp?estado=2  | contextual | [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md); [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md)     |
| CYC    | 8   | /sse_generico/portugues/generico_login.jsp?estado=3 | contextual | [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md); [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md) |
| CYC    | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| IBER   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| IBER   | 5   | /sse_generico/espanol/generico_login.jsp?estado=0   | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md)                                           |
| IBER   | 6   | /sse_generico/english/generico_login.jsp?estado=1   | contextual | [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md); [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md)         |
| IBER   | 7   | /sse_generico/francais/generico_login.jsp?estado=2  | contextual | [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md); [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md)     |
| IBER   | 8   | /sse_generico/portugues/generico_login.jsp?estado=3 | contextual | [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md); [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md) |
| IBER   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| BASE   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |
| BASE   | 5   | /sse_generico/espanol/generico_login.jsp?estado=0   | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md)                                                                                                               |
| BASE   | 6   | /sse_generico/english/generico_login.jsp?estado=1   | contextual | [sse_generico/english/generico_login.jsp](sse_generico--english--generico_login.md)                                                                                              |
| BASE   | 7   | /sse_generico/francais/generico_login.jsp?estado=2  | contextual | [sse_generico/francais/generico_login.jsp](sse_generico--francais--generico_login.md)                                                                                            |
| BASE   | 8   | /sse_generico/portugues/generico_login.jsp?estado=3 | contextual | [sse_generico/portugues/generico_login.jsp](sse_generico--portugues--generico_login.md)                                                                                          |
| BASE   | 14  | generico_fecha.jsp                                  | física     | [sse_generico/generico_fecha.jsp](sse_generico--generico_fecha.md)                                                                                                               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_login_menusup.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
