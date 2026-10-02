# Informe de compensación total [valor dinámico]

Identificador: `sse_g2/proyecciones/index.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proyecciones/index.jsp) | `c63fb76d52c71aaed5591fb1c26f3f27027d427eafcb0b2f9ecf8c176048af75` |    110 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/proyecciones/index.jsp)   | `c63fb76d52c71aaed5591fb1c26f3f27027d427eafcb0b2f9ecf8c176048af75` |    110 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/proyecciones/index.jsp) | `c63fb76d52c71aaed5591fb1c26f3f27027d427eafcb0b2f9ecf8c176048af75` |    110 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proyecciones/index.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                       |
| --- | ---------------------------------------------- |
| 25  | Informe de compensación total [valor dinámico] |
| 99  | Comparativa Retribución últimos 5 años         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                               |
| --- | ------- | ----------------------------------------------------------------------- |
| 43  | button  | class=print-btn; onclick=print()                                        |
| 44  | img     | src=./assets/print-sharp.svg                                            |
| 46  | button  | class=print-btn; onclick=window.scrollTo({top: 0, behavior: 'smooth'}); |
| 54  | img     | class=logo; src=./assets/logo.png                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 14  | anio            | getParameter(request,"anio") |

| L   | Variable | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | -------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 14  | anio     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                        |
| --- | ----------------------------------------------------------- |
| 15  | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";} |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                     |
| --- | ------------------------------------- |
| 27  | ./css/bootstrap.min.css               |
| 28  | ./css/styles.css                      |
| 29  | ./css/print.css                       |
| 31  | ./js/jquery-3.5.1.js                  |
| 32  | ./js/dirty-json.js                    |
| 33  | ./js/chart.js                         |
| 34  | ./js/chartjs-plugin-datalabels.min.js |
| 35  | ./js/printGrafDoughnut.js             |
| 36  | ./js/printGrafBar.js                  |
| 44  | ./assets/print-sharp.svg              |
| 54  | ./assets/logo.png                     |
| 108 | ./js/script.js                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                            | Resolución | Ficha / candidato                                                                             |
| ------ | --- | ------------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| COLL   | 31  | ./js/jquery-3.5.1.js                  | física     | &#96;m4custom/COLL/sse_g2/espanol/proyecciones/js/jquery-3.5.1.js&#96;                        |
| COLL   | 32  | ./js/dirty-json.js                    | física     | [sse_g2/proyecciones/js/dirty-json.js](sse_g2--proyecciones--js--dirty-json.md)               |
| COLL   | 33  | ./js/chart.js                         | física     | &#96;m4custom/COLL/sse_g2/espanol/proyecciones/js/chart.js&#96;                               |
| COLL   | 34  | ./js/chartjs-plugin-datalabels.min.js | física     | &#96;m4custom/COLL/sse_g2/espanol/proyecciones/js/chartjs-plugin-datalabels.min.js&#96;       |
| COLL   | 35  | ./js/printGrafDoughnut.js             | física     | [sse_g2/proyecciones/js/printGrafDoughnut.js](sse_g2--proyecciones--js--printgrafdoughnut.md) |
| COLL   | 36  | ./js/printGrafBar.js                  | física     | [sse_g2/proyecciones/js/printGrafBar.js](sse_g2--proyecciones--js--printgrafbar.md)           |
| COLL   | 108 | ./js/script.js                        | física     | [sse_g2/proyecciones/js/script.js](sse_g2--proyecciones--js--script.md)                       |
| CYC    | 31  | ./js/jquery-3.5.1.js                  | física     | &#96;m4custom/CYC/sse_g2/espanol/proyecciones/js/jquery-3.5.1.js&#96;                         |
| CYC    | 32  | ./js/dirty-json.js                    | física     | [sse_g2/proyecciones/js/dirty-json.js](sse_g2--proyecciones--js--dirty-json.md)               |
| CYC    | 33  | ./js/chart.js                         | física     | &#96;m4custom/CYC/sse_g2/espanol/proyecciones/js/chart.js&#96;                                |
| CYC    | 34  | ./js/chartjs-plugin-datalabels.min.js | física     | &#96;m4custom/CYC/sse_g2/espanol/proyecciones/js/chartjs-plugin-datalabels.min.js&#96;        |
| CYC    | 35  | ./js/printGrafDoughnut.js             | física     | [sse_g2/proyecciones/js/printGrafDoughnut.js](sse_g2--proyecciones--js--printgrafdoughnut.md) |
| CYC    | 36  | ./js/printGrafBar.js                  | física     | [sse_g2/proyecciones/js/printGrafBar.js](sse_g2--proyecciones--js--printgrafbar.md)           |
| CYC    | 108 | ./js/script.js                        | física     | [sse_g2/proyecciones/js/script.js](sse_g2--proyecciones--js--script.md)                       |
| IBER   | 31  | ./js/jquery-3.5.1.js                  | física     | &#96;m4custom/IBER/sse_g2/espanol/proyecciones/js/jquery-3.5.1.js&#96;                        |
| IBER   | 32  | ./js/dirty-json.js                    | física     | [sse_g2/proyecciones/js/dirty-json.js](sse_g2--proyecciones--js--dirty-json.md)               |
| IBER   | 33  | ./js/chart.js                         | física     | &#96;m4custom/IBER/sse_g2/espanol/proyecciones/js/chart.js&#96;                               |
| IBER   | 34  | ./js/chartjs-plugin-datalabels.min.js | física     | &#96;m4custom/IBER/sse_g2/espanol/proyecciones/js/chartjs-plugin-datalabels.min.js&#96;       |
| IBER   | 35  | ./js/printGrafDoughnut.js             | física     | [sse_g2/proyecciones/js/printGrafDoughnut.js](sse_g2--proyecciones--js--printgrafdoughnut.md) |
| IBER   | 36  | ./js/printGrafBar.js                  | física     | [sse_g2/proyecciones/js/printGrafBar.js](sse_g2--proyecciones--js--printgrafbar.md)           |
| IBER   | 108 | ./js/script.js                        | física     | [sse_g2/proyecciones/js/script.js](sse_g2--proyecciones--js--script.md)                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/proyecciones/index.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
