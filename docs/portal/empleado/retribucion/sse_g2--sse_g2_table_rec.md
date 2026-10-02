# sse_g2_table_rec

Identificador: `sse_g2/sse_g2_table_rec.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_table_rec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_table_rec.jsp) | `77107d456b36a54111517ee8c44cc045b250df17594e1e001b8122d5cd5775ed` |     18 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_table_rec.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_table_rec.jsp) | `77107d456b36a54111517ee8c44cc045b250df17594e1e001b8122d5cd5775ed` |     18 |
| BASE / español    | [sse_g2/espanol/sse_g2_table_rec.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_table_rec.jsp)                             | `77107d456b36a54111517ee8c44cc045b250df17594e1e001b8122d5cd5775ed` |     18 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_table_rec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_table_rec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 9   | EMPRESA                  |
| 9   | PERÍODO LIQUIDACIÓN      |
| 9   | /                        |
| 9   | TRABAJADOR               |
| 9   | MONEDA                   |
| 9   | PUESTO DE TRABAJO        |
| 9   | UNIDADES                 |
| 9   | PRECIO                   |
| 9   | CONCEPTOS                |
| 9   | DEVENGOS                 |
| 9   | RETENCIÓN                |
| 12  | DATOS DEL BANCO          |
| 12  | TOTAL DEVENGADO          |
| 12  | TOTAL DEDUCIR            |
| 12  | LÍQUIDO TOTAL A PERCIBIR |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------- |
| 9   | img     | title=Logotipo; src=/iconos/logo_meta4_pantalla_login_117_35.gif; width=117; height=35 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                               | Resolución estática parcial                     |
| --- | ----------------- | ---------------------------------------------- | ----------------------------------------------- |
| 4   | zregistroinicials | String.valueOf(zregistroinicial)               | String.valueOf(zregistroinicial)                |
| 5   | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1) | {String.valueOf(zregistroinicial}{zcounti - 1)} |
| 6   | zposicions        | "0"                                            | 0                                               |
| 7   | zcontrol          | 0                                              | 0                                               |
| 8   | zposicion         | 0                                              | 0                                               |
| 9   | zparidad          | "2"                                            | 2                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag     | Contrato declarado                                                                        |
| --- | ------- | ----------------------------------------------------------------------------------------- |
| 9   | m4:item | m4name=zSCO_ID_LEG_ENT; htmlsafe=true                                                     |
| 9   | m4:item | m4name=zSTD_N_LEG_ENT; htmlsafe=true                                                      |
| 9   | m4:item | m4name=zSCO_DT_PAY_START; htmlsafe=true                                                   |
| 9   | m4:item | m4name=zSCO_DT_PAY_END; htmlsafe=true                                                     |
| 9   | m4:item | m4name=zSTD_ID_PERSON; htmlsafe=true                                                      |
| 9   | m4:item | m4name=zSTD_N_FAMILY_NAME_1; htmlsafe=true                                                |
| 9   | m4:item | m4name=zSTD_N_FIRST_NAME; htmlsafe=true                                                   |
| 9   | m4:item | m4name=zID_CURRENCY; htmlsafe=true                                                        |
| 9   | m4:item | m4name=zSCO_ID_JOB_CODE; htmlsafe=true                                                    |
| 9   | m4:item | m4name=zSCO_N_JOB_CODE; htmlsafe=true                                                     |
| 9   | m4:loop | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)} |
| 12  | m4:item | m4name=zSCO_COL_1; htmlsafe=true                                                          |
| 12  | m4:item | m4name=zSCO_COL_2; htmlsafe=true                                                          |
| 12  | m4:item | m4name=zSCO_COL_3; htmlsafe=true                                                          |
| 12  | m4:item | m4name=zSCO_COL_4; htmlsafe=true                                                          |
| 12  | m4:item | m4name=zSCO_COL_5; htmlsafe=true                                                          |
| 12  | m4:item | m4name=zSCO_NM_BNK; htmlsafe=true                                                         |
| 12  | m4:item | m4name=zSCO_ACCOUNT_NUMBER; htmlsafe=true                                                 |
| 12  | m4:item | m4name=zSCO_TOT_EARNINGS; htmlsafe=true                                                   |
| 12  | m4:item | m4name=zSCO_TOT_DEDUCTIONS; htmlsafe=true                                                 |
| 12  | m4:item | m4name=zSCO_NET; htmlsafe=true                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | if (zcounti &gt; 0) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12  | zcontrol = zposicion%2; %&gt;&lt;tr&gt;&lt;td class="valor"&gt; &lt;m4:item m4name="&lt;%=zSCO_COL_1%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td class="valor"&gt; &lt;m4:item m4name="&lt;%=zSCO_COL_2%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td class="valori" colspan="4"&gt; &lt;m4:item m4name="&lt;%=zSCO_COL_3%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td class="valor"&gt; &lt;m4:item m4name="&lt;%=zSCO_COL_4%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td class="valor"&gt; &lt;m4:item m4name="&lt;%=zSCO_COL_5%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/m4:loop&gt;&lt;tr class="campo" rowspan="2" align="center"&gt;&lt;td colspan="6" class="campo" align="left"&gt;DATOS DEL BANCO&lt;/td&gt;&lt;td&gt;TOTAL&lt;br /&gt;DEVENGADO&lt;/td&gt;&lt;td&gt;TOTAL&lt;br /&gt;DEDUCIR&lt;/td&gt;&lt;/tr&gt;&lt;tr class="valor" rowspan="2" &gt;&lt;td colspan="6" align="left"&gt;&lt;m4:item m4name="&lt;%=zSCO_NM_BNK%&gt;" htmlsafe="true"/&gt; &lt;m4:item m4name="&lt;%=zSCO_ACCOUNT_NUMBER%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td align="right"&gt; &lt;m4:item m4name="&lt;%=zSCO_TOT_EARNINGS%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;td align="right"&gt; &lt;m4:item m4name="&lt;%=zSCO_TOT_DEDUCTIONS%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td colspan="6" class="campo" align="left"&gt;LÍQUIDO TOTAL A PERCIBIR&lt;/td&gt;&lt;td class="campo" colspan="2"&gt; &lt;m4:item m4name="&lt;%=zSCO_NET%&gt;" htmlsafe="true"/&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;Actualmente no tienes ninguna paga calculada.&lt;/div&gt;&lt;%}%&gt; |
| 5   | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 9   | /iconos/logo_meta4_pantalla_login_117_35.gif |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_table_rec.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
