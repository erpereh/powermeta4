# Informe Salarios Totales

Identificador: `mss_g1/mss_g1_rp_saltot.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_rp_saltot.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_saltot.jsp) | `d86e72c9e9c7d889b2b6bf2cd70d65a347227c544bf584d9692781f16a0b2f21` |     52 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_rp_saltot.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_saltot.jsp)   | `30d33ddd9577e94de404c5fd75649d4fd400122003c2ada1fe9ffc64d0670833` |    129 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_rp_saltot.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_rp_saltot.jsp) | `d86e72c9e9c7d889b2b6bf2cd70d65a347227c544bf584d9692781f16a0b2f21` |     52 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_rp_saltot.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_saltot.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                       |
| --- | ---------------------------------------------- |
| 17  | Informe Salarios Totales                       |
| 46  | Su informe se esta generando,por favor espere. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                  | Resolución estática parcial                       |
| --- | ------------ | ------------------------------------------------- | ------------------------------------------------- |
| 23  | informe      | "SALTOTAL"                                        | SALTOTAL                                          |
| 24  | zsubsesion   | "CSP_RP_ORO_MSS"                                  | CSP_RP_ORO_MSS                                    |
| 25  | zmeta4object | "CSP_RP_ORO_MSS"                                  | CSP_RP_ORO_MSS                                    |
| 26  | zmetodocarga | zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME" | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                         |
| --- | ------------ | ---------------------------------------------------------- |
| 31  | m4:startpage | m4task=CSP_RP_ORO_MSS                                      |
| 33  | m4:beginjob  |                                                            |
| 34  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                  |
| 43  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME |
| 44  | m4:endjob    |                                                            |

| L   | Operación | Argumentos literales                              |
| --- | --------- | ------------------------------------------------- |
| 40  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso   |
| --- | ------------------- |
| 18  | /css/estilo_sse.css |
| 19  | /library/jquery.js  |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_rp_saltot.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_saltot.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                         |
| --- | ------------------------------------------------ |
| 25  | Informe Salarios Totales                         |
| 56  | Su informe se esta generando, por favor espere.  |
| 74  | Estructura / Búsqueda                            |
| 78  | Sociedad                                         |
| 79  | Seleccione Sociedad Crédito y Caución Iberinform |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------- |
| 63  | a       | href=javascript:window.location.href=window.location.href;; style= color: rgba(216, 0, 31, 1); |
| 80  | select  | name=sociedades; id=sociedades; style=width: 450px                                             |
| 81  | option  | value=00                                                                                       |
| 82  | option  | value=CYC                                                                                      |
| 83  | option  | value=IBER                                                                                     |
| 93  | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;  |

```
											background-repeat: no-repeat;
											border: 1px solid #DC0028;
											border-radius: 4px;
											color: #FFFFFF;
											margin: 10px;
											max-width: 150px;
											min-height: 30px;
											min-width: 110px;; value=Búsqueda; onclick=cargarS() |
```

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 36  | sociedad        | getParameter(request,"sociedad") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 32  | informe      | "SALTOTAL"                                                           | SALTOTAL                                                             |
| 33  | zsubsesion   | "CSP_RP_ORO_MSS"                                                     | CSP_RP_ORO_MSS                                                       |
| 34  | zmeta4object | "CSP_RP_ORO_MSS"                                                     | CSP_RP_ORO_MSS                                                       |
| 35  | zmetodocarga | zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME"                    | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME                    |
| 36  | sociedad     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                      |
| --- | ------------ | --------------------------------------------------------------------------------------- |
| 5   | m4:startpage | m4task=SCH_SESSION                                                                      |
| 6   | m4:beginjob  |                                                                                         |
| 7   | m4:datadef   | m4o=SCH_SESSION; m4name=SCH_SESSION                                                     |
| 8   | m4:outputdef | m4alias=ROOT_SESSION; m4object=SCH_SESSION; node=ROOT_SESSION; records=*                |
| 9   | m4:endjob    |                                                                                         |
| 10  | m4:item      | m4name=ROOT_SESSION:SCH_SESSION!ROOT_SESSION[0].ID_ORGANIZATION; m4varname=organizacion |
| 11  | m4:endpage   |                                                                                         |
| 43  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                   |
| 45  | m4:beginjob  |                                                                                         |
| 46  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                               |
| 53  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME                              |
| 54  | m4:endjob    |                                                                                         |

| L   | Operación | Argumentos literales                              |
| --- | --------- | ------------------------------------------------- |
| 50  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe |
| 51  | setItem   | zsubsesion,zsubsesion,"","P_SOCIEDAD",sociedad    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 117 | cargarS |            |

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 42  | &lt;% if(sociedad != null){ %&gt;    |
| 68  | &lt;%}else{%&gt;                     |
| 119 | if(selecteds!="00"){                 |
| 121 | }else{                               |
| 122 | alert("Seleccione una sociedad");    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 27  | /css/estilo_sse.css                                   |
| 28  | /library/jquery.js                                    |
| 63  | javascript:window.location.href=window.location.href; |
| 120 | ./mss_g1_rp_saltot.jsp?sociedad=                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                      |
| ------ | --- | ----------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| COLL   | 19  | /library/jquery.js                                    | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| CYC    | 28  | /library/jquery.js                                    | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;  |
| CYC    | 63  | javascript:window.location.href=window.location.href; | dinámica   | P06                                                                    |
| CYC    | 120 | ./mss_g1_rp_saltot.jsp?sociedad=                      | física     | [mss_g1/mss_g1_rp_saltot.jsp](mss_g1--mss_g1_rp_saltot.md)             |
| IBER   | 19  | /library/jquery.js                                    | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96; |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_rp_saltot.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
