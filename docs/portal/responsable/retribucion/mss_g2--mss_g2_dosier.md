# Ficha de la persona

Identificador: `mss_g2/mss_g2_dosier.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_dosier.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_dosier.jsp) | `f3dc990e118b1b73924d31a0b1b84a2c64d7f88d5de48abcfcb67d6aac60ebe4` |    114 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_dosier.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_dosier.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 109 | Ficha de la persona      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 8   | estado          | getParameter(request,"estado")  |
| 12  | z_paga          | getParameter(request,"z_paga")  |
| 13  | zmoneda         | getParameter(request,"zmoneda") |

| L   | Variable        | Expresión fuente                                                     | Resolución estática parcial                                         |
| --- | --------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 8   | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")  |
| 12  | zpaga           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")  |
| 13  | zmoneda         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda") |
| 17  | pathReports     | ""                                                                   |                                                                     |
| 18  | thinclient_root | ""                                                                   |                                                                     |
| 19  | WebPath         | ""                                                                   |                                                                     |
| 20  | zparametro      | ""                                                                   |                                                                     |
| 21  | separator       | ""                                                                   |                                                                     |
| 25  | zsubsesion      | "SCO_EMPLOYEE_DOSSIER"                                               | SCO_EMPLOYEE_DOSSIER                                                |
| 26  | zmeta4object    | "SCO_EMPLOYEE_DOSSIER"                                               | SCO_EMPLOYEE_DOSSIER                                                |
| 27  | znodo           | "SSE_RECIBO"                                                         | SSE_RECIBO                                                          |
| 28  | znodo2          | "SCO_ID_PERSONA"                                                     | SCO_ID_PERSONA                                                      |
| 30  | zreport         | "SCO_EMPLOYEE_DOSSIER"                                               | SCO_EMPLOYEE_DOSSIER                                                |
| 31  | DataParam       | zmeta4object + "!" + znodo + "$"                                     | SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"$"}                            |
| 32  | ReportParam     | "#/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/NTOC# #/NSEARCH# #/PRESERVE_DIR#" | #/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/NTOC# #/NSEARCH# #/PRESERVE_DIR#  |
| 33  | zredireccion    | "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=21"          | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=21           |
| 47  | index           | pathReports.indexOf(thinclient_root)                                 | pathReports.indexOf(thinclient_root)                                |
| 63  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                     | SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"[*]"}                          |
| 64  | zraiz           | zsubsesion + "!" + znodo + "."                                       | SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"."}                            |
| 65  | zmove           | znodo + ":" + znodo + "[FIRST]"                                      | SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"}                                |
| 69  | zmetodocarga    | zsubsesion + "!" + znodo2 + ".SSE_M4THROW"                           | SCO_EMPLOYEE_DOSSIER{"!"}SCO_ID_PERSONA{".SSE_M4THROW"}             |
| 73  | zOUTPUT         | zraiz + "OUTPUT"                                                     | SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"."}{"OUTPUT"}                  |
| 74  | zRESULT         | zraiz + "RESULT"                                                     | SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"."}{"RESULT"}                  |
| 88  | stResult        | ""                                                                   |                                                                     |
| 89  | iResult         | -1                                                                   | -1                                                                  |
| 90  | stResult2       | "hola"                                                               | hola                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                    |
| --- | ------------ | --------------------------------------------------------------------- |
| 76  | m4:startpage | m4task=SCO_EMPLOYEE_DOSSIER                                           |
| 76  | m4:beginjob  |                                                                       |
| 77  | m4:datadef   | m4o=SCO_EMPLOYEE_DOSSIER; m4name=SCO_EMPLOYEE_DOSSIER                 |
| 83  | m4:exec      | m4method=SCO_EMPLOYEE_DOSSIER{"!"}SCO_ID_PERSONA{".SSE_M4THROW"}      |
| 84  | m4:outputdef |                                                                       |
| 84  | m4:param     | name=m4name0; value=SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"[*]"}        |
| 85  | m4:endjob    |                                                                       |
| 86  | m4:move      |                                                                       |
| 86  | m4:param     | name=SCO_EMPLOYEE_DOSSIER; value=SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"} |
| 102 | m4:item      | m4name=SCO_EMPLOYEE_DOSSIER{"!"}SSE_RECIBO{"."}{"OUTPUT"}; jsafe=true |
| 112 | m4:endpage   |                                                                       |

| L   | Operación | Argumentos literales                        |
| --- | --------- | ------------------------------------------- |
| 80  | setItem   | zsubsesion,znodo2,"","SSP_PATH",pathReports |
| 93  | getItem   | "",zsubsesion,znodo,"","RESULT"             |
| 94  | getItem   | "",zsubsesion,znodo,"","OUTPUT"             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                         |
| 49  | if( index != -1){                                                                                                                                                                                                                           |
| 53  | }else{                                                                                                                                                                                                                                      |
| 99  | &lt;% if (iResult == -1){%&gt;                                                                                                                                                                                                              |
| 100 | &lt;%}else{%&gt;                                                                                                                                                                                                                            |
| 31  | expresión de cálculo/transformación: String DataParam = zmeta4object + "!" + znodo + "$";                                                                                                                                                   |
| 58  | expresión de cálculo/transformación: pathReports = pathReports + "\\reports" + "\\" + zreport;                                                                                                                                              |
| 59  | expresión de cálculo/transformación: zparametro = DataParam + "CalledFromESS #"+ zreport + "# #1# #HTML# #/PATH:" + pathReports + "\\" + zreport + "\\" + zreport + "# #/PRESERVE_DIR# #/WEB:" + WebPath + "# " + ReportParam + ";1;0;3;0"; |
| 63  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                                                  |
| 64  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                                                                                                                         |
| 65  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                                                                                        |
| 69  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!" + znodo2 + ".SSE_M4THROW";                                                                                                                                      |
| 73  | expresión de cálculo/transformación: String zOUTPUT = zraiz + "OUTPUT";                                                                                                                                                                     |
| 74  | expresión de cálculo/transformación: String zRESULT = zraiz + "RESULT";                                                                                                                                                                     |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 33  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=21 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 33  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=21 | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_dosier.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
