# Proyeccones

Identificador: `sse_g2/old/proyecciones_q/index.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/old/proyecciones_q/index.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones_q/index.jsp) | `d328c8b09deec5e2dbc90f284d01ed62ccc35181c6ebc603917b25d073400ba5` |    283 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/old/proyecciones_q/index.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones_q/index.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                  |
| --- | ------------------------------------------------------------------------- |
| 25  | Proyeccones                                                               |
| 63  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 85  | Remuneración Directa                                                      |
| 98  | Retribución Indirecta                                                     |
| 112 | RETRIBUCIÓN DIRECTA                                                       |
| 115 | SALARIO CONVENIO                                                          |
| 121 | COMPLEMENTOS COMPAÑíA                                                     |
| 125 | COMPLEMENTO FUNCIONAL                                                     |
| 130 | TOTAL                                                                     |
| 143 | SEGURIDAD SOCIAL                                                          |
| 153 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 158 | RETRIBUCIÓN EN ESPECIE                                                    |
| 160 | Total                                                                     |
| 167 | VALORACIÓN R. ESPECIE                                                     |
| 169 | Total                                                                     |
| 176 | AYUDAS                                                                    |
| 178 | Total                                                                     |
| 185 | MANUTENCIÓN POR JORNADA PARTIDA                                           |
| 190 | DIETAS Y KILOMETRAJES                                                     |
| 195 | RETRIBUCIÓN FLEXIBLE                                                      |
| 205 | OTRAS RETRIBUCIONES                                                       |
| 211 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 213 | Total                                                                     |
| 220 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 222 | Total                                                                     |
| 229 | SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO                             |
| 231 | Total                                                                     |
| 238 | INVERSIÓN EN FORMACIÓN                                                    |
| 240 | Total                                                                     |
| 257 | Últimos años                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                     |
| --- | ------- | ------------------------------------------------------------- |
| 60  | img     | class=pb-4; border=0; src=/iconos/logo_cyc_renhash_CYC_v1.jpg |

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

| L   | Destino / recurso                        |
| --- | ---------------------------------------- |
| 27  | ./css/bootstrap.css                      |
| 28  | ./css/jquery.dataTables.min.css          |
| 29  | ./css/buttons/buttons.dataTables.min.css |
| 30  | ./css/micss.css                          |
| 32  | ./js/jquery-3.5.1.js                     |
| 33  | ./js/jquery.dataTables.min.js            |
| 34  | ./js/dataTables-tra-ES.js                |
| 36  | ./js/buttons/dataTables.buttons.min.js   |
| 37  | ./js/buttons/jszip.min.js                |
| 38  | ./js/buttons/pdfmake.min.js              |
| 39  | ./js/buttons/vfs_fonts.js                |
| 40  | ./js/buttons/buttons.html5.min.js        |
| 41  | ./js/buttons/buttons.print.min.js        |
| 43  | ./js/printTableData.js                   |
| 45  | ./js/chart.js                            |
| 46  | ./js/printGrafDoughnut.js                |
| 47  | ./js/printGrafBar.js                     |
| 60  | /iconos/logo_cyc_renhash_CYC_v1.jpg      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                             | Resolución | Ficha / candidato                                                                                          |
| ------ | --- | -------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| CYC    | 32  | ./js/jquery-3.5.1.js                   | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/jquery-3.5.1.js&#96;                                |
| CYC    | 33  | ./js/jquery.dataTables.min.js          | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/jquery.dataTables.min.js&#96;                       |
| CYC    | 34  | ./js/dataTables-tra-ES.js              | física     | [sse_g2/old/proyecciones_q/js/dataTables-tra-ES.js](sse_g2--old--proyecciones_q--js--datatables-tra-es.md) |
| CYC    | 36  | ./js/buttons/dataTables.buttons.min.js | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/dataTables.buttons.min.js&#96;              |
| CYC    | 37  | ./js/buttons/jszip.min.js              | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/jszip.min.js&#96;                           |
| CYC    | 38  | ./js/buttons/pdfmake.min.js            | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/pdfmake.min.js&#96;                         |
| CYC    | 39  | ./js/buttons/vfs_fonts.js              | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/vfs_fonts.js&#96;                           |
| CYC    | 40  | ./js/buttons/buttons.html5.min.js      | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/buttons.html5.min.js&#96;                   |
| CYC    | 41  | ./js/buttons/buttons.print.min.js      | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/buttons/buttons.print.min.js&#96;                   |
| CYC    | 43  | ./js/printTableData.js                 | física     | [sse_g2/old/proyecciones_q/js/printTableData.js](sse_g2--old--proyecciones_q--js--printtabledata.md)       |
| CYC    | 45  | ./js/chart.js                          | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/chart.js&#96;                                       |
| CYC    | 46  | ./js/printGrafDoughnut.js              | física     | [sse_g2/old/proyecciones_q/js/printGrafDoughnut.js](sse_g2--old--proyecciones_q--js--printgrafdoughnut.md) |
| CYC    | 47  | ./js/printGrafBar.js                   | física     | [sse_g2/old/proyecciones_q/js/printGrafBar.js](sse_g2--old--proyecciones_q--js--printgrafbar.md)           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/old/proyecciones_q/index.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
