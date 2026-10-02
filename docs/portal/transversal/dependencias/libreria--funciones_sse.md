# funciones_sse

Identificador: `libreria/funciones_sse.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_sse.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_sse.js) | `1e7dd93e26631768f74176b66815ec59bbb3ca6880660eea7852896d2931861c` |    948 |
| BASE / compartido | [libreria/funciones_sse.js](../../../../clon_portal/portal/libreria/funciones_sse.js)                             | `1e7dd93e26631768f74176b66815ec59bbb3ca6880660eea7852896d2931861c` |    948 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_sse.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_sse.js) | `1e7dd93e26631768f74176b66815ec59bbb3ca6880660eea7852896d2931861c` |    948 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_sse.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_sse.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos               |
| --- | ----------- | ------------------------ |
| 872 | m4splitdate | sdate,adateinfo          |
| 913 | m4builtdate | dianumero,mesnumero,anio |
| 943 | m4date_back | date_usu                 |

| L   | Condición / acción / mensaje literal                                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------- |
| 880 | if (max == ny) {var med= Math.max(nm,nd);var min=Math.min(nm,nd);}                                                            |
| 881 | if (max == nm) {var med= Math.max(ny,nd);var min=Math.min(ny,nd);}                                                            |
| 882 | if (max == nd) {var med= Math.max(ny,nm);var min=Math.min(ny,nm);}                                                            |
| 887 | if (ap[min] == "Y"){                                                                                                          |
| 889 | if (ap[med] == "M"){smonth = atrozos[1].toString(); sday = atrozos[2].toString();}                                            |
| 890 | if (ap[med] == "D"){smonth = atrozos[2].toString();sday = atrozos[1].toString();}                                             |
| 892 | if (ap[min] == "M"){                                                                                                          |
| 894 | if (ap[med] == "D"){sday = atrozos[1].toString(); syear =atrozos[2].toString();}                                              |
| 895 | if (ap[med] == "Y"){sday = atrozos[2].toString(); syear =atrozos[1].toString();}                                              |
| 897 | if (ap[min] == "D"){                                                                                                          |
| 899 | if (ap[med] == "Y"){syear =atrozos[1].toString();smonth = atrozos[2].toString();}                                             |
| 900 | if (ap[med] == "M"){syear =atrozos[2].toString();smonth = atrozos[1].toString();}                                             |
| 917 | if (strdianumero.length != 2){strdianumero = '0' + strdianumero;}                                                             |
| 919 | if (strmesnumero.length != 2){strmesnumero = '0' + strmesnumero;}                                                             |
| 924 | if (scaracterinicial =="D" &#124;&#124; scaracterinicial =="d"){                                                              |
| 925 | if (sformatofechas.search(oreM) == 3 ) {                                                                                      |
| 927 | }else{var sfechasec = strdianumero + g_ssepfechas + anio + g_ssepfechas + strmesnumero;}                                      |
| 929 | if (scaracterinicial =="M"&#124;&#124; scaracterinicial =="m"){                                                               |
| 930 | if (sformatofechas.search(oreD) == 3 ){                                                                                       |
| 932 | }else{var sfechasec = strmesnumero + g_ssepfechas+ anio + g_ssepfechas + strdianumero;}                                       |
| 934 | if (scaracterinicial =="Y" &#124;&#124; scaracterinicial =="y"){                                                              |
| 935 | if (sformatofechas.search(oreD) == 5 ){                                                                                       |
| 937 | }else{var sfechasec = anio + g_ssepfechas + strmesnumero + g_ssepfechas + strdianumero;}                                      |
| 879 | expresión de cálculo/transformación: var max = Math.max(Math.max(ny,nm),nd);                                                  |
| 880 | expresión de cálculo/transformación: if (max == ny) {var med= Math.max(nm,nd);var min=Math.min(nm,nd);}                       |
| 881 | expresión de cálculo/transformación: if (max == nm) {var med= Math.max(ny,nd);var min=Math.min(ny,nd);}                       |
| 882 | expresión de cálculo/transformación: if (max == nd) {var med= Math.max(ny,nm);var min=Math.min(ny,nm);}                       |
| 926 | expresión de cálculo/transformación: var sfechasec = strdianumero + g_ssepfechas + strmesnumero + g_ssepfechas+ anio;         |
| 927 | expresión de cálculo/transformación: }else{var sfechasec = strdianumero + g_ssepfechas + anio + g_ssepfechas + strmesnumero;} |
| 931 | expresión de cálculo/transformación: var sfechasec = strmesnumero + g_ssepfechas + strdianumero + g_ssepfechas+ anio;         |
| 932 | expresión de cálculo/transformación: }else{var sfechasec = strmesnumero + g_ssepfechas+ anio + g_ssepfechas + strdianumero;}  |
| 936 | expresión de cálculo/transformación: var sfechasec = anio + g_ssepfechas + strdianumero + g_ssepfechas + strmesnumero;        |
| 937 | expresión de cálculo/transformación: }else{var sfechasec = anio + g_ssepfechas + strmesnumero + g_ssepfechas + strdianumero;} |
| 946 | expresión de cálculo/transformación: var fec_back = adateinfo[2]+ "-" + adateinfo[1]+ "-" + adateinfo[0];                     |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/funciones_sse.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
