# Recibo

Identificador: `sse_g2/sse_g2_rec_imp.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_rec_imp.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_rec_imp.jsp) | `844026cddf719e4396a90e9431796c82b72ecb9c6b2d8f5a5400536fc24e23d1` |     75 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_rec_imp.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_rec_imp.jsp) | `844026cddf719e4396a90e9431796c82b72ecb9c6b2d8f5a5400536fc24e23d1` |     75 |
| BASE / español    | [sse_g2/espanol/sse_g2_rec_imp.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_rec_imp.jsp)                             | `844026cddf719e4396a90e9431796c82b72ecb9c6b2d8f5a5400536fc24e23d1` |     75 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_rec_imp.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_rec_imp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 3   | Recibo                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 5   | recibo          | getParameter(request,"recibo")   |
| 6   | estado          | getParameter(request,"estado")   |
| 7   | zinicios        | getParameter(request,"zinicios") |
| 10  | z_paga          | getParameter(request,"z_paga")   |

| L   | Variable             | Expresión fuente                                                     | Resolución estática parcial                                                    |
| --- | -------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 5   | zrecibo              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"recibo")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"recibo")             |
| 6   | estado               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             |
| 7   | zinicios             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           |
| 10  | zpaga                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")             |
| 12  | zsubsesion           | "SCO_SS_REC"                                                         | SCO_SS_REC                                                                     |
| 13  | zmeta4object         | zsubsesion                                                           | SCO_SS_REC                                                                     |
| 14  | znodo                | zsubsesion                                                           | SCO_SS_REC                                                                     |
| 15  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                         | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}                                  |
| 17  | zventanas            | "20"                                                                 | 20                                                                             |
| 18  | zvuelta              | 5                                                                    | 5                                                                              |
| 19  | zdireccion           | "sse_g2/sse_g2_rec_imp.jsp"                                          | sse_g2/sse_g2_rec_imp.jsp                                                      |
| 20  | zestado              | "21"                                                                 | 21                                                                             |
| 24  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                           |
| 26  | zventana             | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                          |
| 27  | zregistrofinal       | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                             |
| 29  | ziterator            | znodo + ":" + zsubsesion + "!" + znodo                               | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC                                       |
| 30  | zmove                | znodo + ":" + znodo + "[zregistroinicial]"                           | SCO_SS_REC{":"}SCO_SS_REC{"[zregistroinicial]"}                                |
| 31  | zoutputdef           | zsubsesion + "!" + znodo + "[*]"                                     | SCO_SS_REC{"!"}SCO_SS_REC{"[*]"}                                               |
| 32  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}              |
| 36  | zSTD_N_LEG_ENT       | zraiz + "STD_N_LEG_ENT"                                              | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"STD_N_LEG_ENT"}                 |
| 37  | zSCO_ID_LEG_ENT      | zraiz + "SCO_ID_LEG_ENT"                                             | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_ID_LEG_ENT"}                |
| 39  | zSCO_DT_PAY_START    | zraiz + "SCO_DT_PAY_START"                                           | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_DT_PAY_START"}              |
| 40  | zSCO_DT_PAY_END      | zraiz + "SCO_DT_PAY_END"                                             | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_DT_PAY_END"}                |
| 42  | zSTD_ID_PERSON       | zraiz + "STD_ID_PERSON"                                              | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"STD_ID_PERSON"}                 |
| 43  | zSTD_N_FIRST_NAME    | zraiz + "STD_N_FIRST_NAME"                                           | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"STD_N_FIRST_NAME"}              |
| 44  | zSTD_N_FAMILY_NAME_1 | zraiz + "STD_N_FAMILY_NAME_1"                                        | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"STD_N_FAMILY_NAME_1"}           |
| 46  | zID_CURRENCY         | zraiz + "ID_CURRENCY"                                                | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"ID_CURRENCY"}                   |
| 48  | zSCO_ID_JOB_CODE     | zraiz + "SCO_ID_JOB_CODE"                                            | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_ID_JOB_CODE"}               |
| 49  | zSCO_N_JOB_CODE      | zraiz + "SCO_N_JOB_CODE"                                             | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_N_JOB_CODE"}                |
| 51  | zSCO_TOT_EARNINGS    | zraiz + "SCO_TOT_EARNINGS"                                           | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_TOT_EARNINGS"}              |
| 52  | zSCO_TOT_DEDUCTIONS  | zraiz + "SCO_TOT_DEDUCTIONS"                                         | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_TOT_DEDUCTIONS"}            |
| 53  | zSCO_NET             | zraiz + "SCO_NET"                                                    | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_NET"}                       |
| 55  | zSCO_ACCOUNT_NUMBER  | zraiz + "SCO_ACCOUNT_NUMBER"                                         | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_ACCOUNT_NUMBER"}            |
| 56  | zSCO_NM_BNK          | zraiz + "SCO_NM_BNK"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"."}{"SCO_NM_BNK"}                    |
| 58  | zSCO_COL_1           | zcomun + "SCO_COL_1"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COL_1"} |
| 59  | zSCO_COL_2           | zcomun + "SCO_COL_2"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COL_2"} |
| 60  | zSCO_COL_3           | zcomun + "SCO_COL_3"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COL_3"} |
| 61  | zSCO_COL_4           | zcomun + "SCO_COL_4"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COL_4"} |
| 62  | zSCO_COL_5           | zcomun + "SCO_COL_5"                                                 | SCO_SS_REC{":"}SCO_SS_REC{"!"}SCO_SS_REC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COL_5"} |
| 63  | zcount               | 0                                                                    | 0                                                                              |
| 64  | zcounti              | 0                                                                    | 0                                                                              |
| 70  | zcountv              | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                     |
| --- | ------------ | ---------------------------------------------------------------------- |
| 62  | m4:startpage | m4task=SCO_SS_REC                                                      |
| 62  | m4:beginjob  |                                                                        |
| 62  | m4:datadef   | m4o=SCO_SS_REC; m4name=SCO_SS_REC                                      |
| 62  | m4:outputdef | m4alias=SCO_SS_REC                                                     |
| 62  | m4:param     | name=m4name0; value=SCO_SS_REC{"!"}SCO_SS_REC{"[*]"}                   |
| 62  | m4:endjob    |                                                                        |
| 62  | m4:move      |                                                                        |
| 62  | m4:param     | name=SCO_SS_REC; value=SCO_SS_REC{":"}SCO_SS_REC{"[zregistroinicial]"} |
| 72  | m4:endpage   |                                                                        |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 67  | getCount         | znodo,zsubsesion,znodo |
| 68  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 9   | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 15  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                                                                                                                                                                                                                                                                                                                                          |
| 25  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 27  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 29  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                                                                                                                                                                                                                                                                                                                                            |
| 30  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[zregistroinicial]";                                                                                                                                                                                                                                                                                                                                                                                                            |
| 31  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 32  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                                                                                                                                                                                                                                    |
| 36  | expresión de cálculo/transformación: String zSTD_N_LEG_ENT = zraiz + "STD_N_LEG_ENT";                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 37  | expresión de cálculo/transformación: String zSCO_ID_LEG_ENT = zraiz + "SCO_ID_LEG_ENT";                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 39  | expresión de cálculo/transformación: String zSCO_DT_PAY_START = zraiz + "SCO_DT_PAY_START";                                                                                                                                                                                                                                                                                                                                                                                                                |
| 40  | expresión de cálculo/transformación: String zSCO_DT_PAY_END = zraiz + "SCO_DT_PAY_END";                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 42  | expresión de cálculo/transformación: String zSTD_ID_PERSON = zraiz + "STD_ID_PERSON";                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 43  | expresión de cálculo/transformación: String zSTD_N_FIRST_NAME = zraiz + "STD_N_FIRST_NAME";                                                                                                                                                                                                                                                                                                                                                                                                                |
| 44  | expresión de cálculo/transformación: String zSTD_N_FAMILY_NAME_1 = zraiz + "STD_N_FAMILY_NAME_1";                                                                                                                                                                                                                                                                                                                                                                                                          |
| 46  | expresión de cálculo/transformación: String zID_CURRENCY = zraiz + "ID_CURRENCY";                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 48  | expresión de cálculo/transformación: String zSCO_ID_JOB_CODE = zraiz + "SCO_ID_JOB_CODE";                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 49  | expresión de cálculo/transformación: String zSCO_N_JOB_CODE = zraiz + "SCO_N_JOB_CODE";                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 51  | expresión de cálculo/transformación: String zSCO_TOT_EARNINGS = zraiz + "SCO_TOT_EARNINGS";                                                                                                                                                                                                                                                                                                                                                                                                                |
| 52  | expresión de cálculo/transformación: String zSCO_TOT_DEDUCTIONS = zraiz + "SCO_TOT_DEDUCTIONS";                                                                                                                                                                                                                                                                                                                                                                                                            |
| 53  | expresión de cálculo/transformación: String zSCO_NET = zraiz + "SCO_NET";                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 55  | expresión de cálculo/transformación: String zSCO_ACCOUNT_NUMBER = zraiz + "SCO_ACCOUNT_NUMBER";                                                                                                                                                                                                                                                                                                                                                                                                            |
| 56  | expresión de cálculo/transformación: String zSCO_NM_BNK = zraiz + "SCO_NM_BNK";                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 58  | expresión de cálculo/transformación: String zSCO_COL_1 = zcomun + "SCO_COL_1";                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 59  | expresión de cálculo/transformación: String zSCO_COL_2 = zcomun + "SCO_COL_2";                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 60  | expresión de cálculo/transformación: String zSCO_COL_3 = zcomun + "SCO_COL_3";                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 61  | expresión de cálculo/transformación: String zSCO_COL_4 = zcomun + "SCO_COL_4";                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 62  | expresión de cálculo/transformación: String zSCO_COL_5 = zcomun + "SCO_COL_5";%&gt;&lt;m4:startpage m4task="&lt;%=zsubsesion%&gt;"/&gt;&lt;m4:beginjob/&gt;&lt;m4:datadef m4o="&lt;%=zmeta4object%&gt;" m4name="&lt;%=zsubsesion%&gt;"/&gt;&lt;m4:outputdef m4alias="&lt;%=znodo%&gt;"&gt;&lt;m4:param name="m4name0" value="&lt;%=zoutputdef%&gt;"/&gt;&lt;/m4:outputdef&gt;&lt;m4:endjob/&gt;&lt;m4:move&gt;&lt;m4:param name="&lt;%=zsubsesion%&gt;" value="&lt;%=zmove%&gt;"/&gt;&lt;/m4:move&gt;&lt;% |

### Includes, navegación y dependencias

| L   | Include              |
| --- | -------------------- |
| 71  | sse_g2_table_rec.jsp |

| L   | Destino / recurso         |
| --- | ------------------------- |
| 3   | /css/estilo_sse.css       |
| 19  | sse_g2/sse_g2_rec_imp.jsp |
| 71  | sse_g2_table_rec.jsp      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                | Resolución | Ficha / candidato                                          |
| ------ | --- | ------------------------- | ---------- | ---------------------------------------------------------- |
| COLL   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |
| COLL   | 19  | sse_g2/sse_g2_rec_imp.jsp | ausente    | P06                                                        |
| COLL   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |
| IBER   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |
| IBER   | 19  | sse_g2/sse_g2_rec_imp.jsp | ausente    | P06                                                        |
| IBER   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |
| BASE   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |
| BASE   | 19  | sse_g2/sse_g2_rec_imp.jsp | ausente    | P06                                                        |
| BASE   | 71  | sse_g2_table_rec.jsp      | física     | [sse_g2/sse_g2_table_rec.jsp](sse_g2--sse_g2_table_rec.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_rec_imp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
