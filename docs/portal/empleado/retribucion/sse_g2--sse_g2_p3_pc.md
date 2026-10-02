# Consulta de préstamos

Identificador: `sse_g2/sse_g2_p3_pc.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p3_pc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p3_pc.jsp) | `18a3a52f5633c83d9e3e1adbde82881c5739ccf41e39f6f8604970d24b3b0692` |    104 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p3_pc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p3_pc.jsp) | `18a3a52f5633c83d9e3e1adbde82881c5739ccf41e39f6f8604970d24b3b0692` |    104 |
| BASE / español    | [sse_g2/espanol/sse_g2_p3_pc.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p3_pc.jsp)                             | `18a3a52f5633c83d9e3e1adbde82881c5739ccf41e39f6f8604970d24b3b0692` |    104 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p3_pc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p3_pc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 7   | Consulta de préstamos    |
| 64  | Consulta de préstamos    |
| 67  | Consulta tus préstamos.  |
| 78  | Préstamo                 |
| 79  | Concesión                |
| 80  | Capital                  |
| 81  | Cuotas                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 66  | img     | src=/iconos/noname_organizacion_ess_115_100.gif; width=115; height=100; alt=Historial de puestos; title=Consulta de préstamos |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 19  | estado          | getParameter(request,"estado") |

| L   | Variable            | Expresión fuente                                                   | Resolución estática parcial                                                                     |
| --- | ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 19  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              |
| 27  | zsubsesion          | "SSE_LOANS_EMP"                                                    | SSE_LOANS_EMP                                                                                   |
| 28  | zmeta4object        | "SSE_LOANS_EMP"                                                    | SSE_LOANS_EMP                                                                                   |
| 29  | znodo               | "M4T_SSE_LOANS"                                                    | M4T_SSE_LOANS                                                                                   |
| 33  | zoutputdef          | zsubsesion + "!" + znodo + "[*]"                                   | SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[*]"}                                                          |
| 34  | zmove               | znodo + ":" + znodo + "[FIRST]"                                    | M4T_SSE_LOANS{":"}M4T_SSE_LOANS{"[FIRST]"}                                                      |
| 35  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."  | M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}                      |
| 39  | zmetodocarga        | zsubsesion + "!M4T_SSE_LOANS.CARGA_LOANS"                          | SSE_LOANS_EMP{"!M4T_SSE_LOANS.CARGA_LOANS"}                                                     |
| 43  | zsconombreprestamo  | zcomun + "SCO_NM_LOAN_1"                                           | M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}     |
| 44  | zscofechaaprobacion | zcomun + "SCO_DT_APPROVAL_1"                                       | M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_APPROVAL_1"} |
| 45  | zscocapital         | zcomun + "SCO_AMT_LOAN_1"                                          | M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN_1"}    |
| 46  | zsconumcuotas       | zcomun + "SCO_NUM_QUOTAS_1"                                        | M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS_1"}  |
| 55  | zcounti             | 0                                                                  | 0                                                                                               |
| 60  | zcountv             | String.valueOf(zcounti)                                            | String.valueOf(zcounti)                                                                         |
| 61  | zto                 | new Integer(new Integer(zcountv).intValue()-1).toString()          | new Integer(new Integer(zcountv).intValue()-1).toString()                                       |
| 73  | zposicions          | "0"                                                                | 0                                                                                               |
| 74  | zposicion           | 0                                                                  | 0                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                    |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| 48  | m4:startpage | m4task=SSE_LOANS_EMP                                                                                                  |
| 48  | m4:beginjob  |                                                                                                                       |
| 49  | m4:datadef   | m4o=SSE_LOANS_EMP; m4name=SSE_LOANS_EMP                                                                               |
| 50  | m4:exec      | m4method=SSE_LOANS_EMP{"!M4T_SSE_LOANS.CARGA_LOANS"}                                                                  |
| 51  | m4:outputdef | m4alias=M4T_SSE_LOANS                                                                                                 |
| 51  | m4:param     | name=m4name0; value=SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[*]"}                                                            |
| 52  | m4:endjob    |                                                                                                                       |
| 53  | m4:move      |                                                                                                                       |
| 53  | m4:param     | name=SSE_LOANS_EMP; value=M4T_SSE_LOANS{":"}M4T_SSE_LOANS{"[FIRST]"}                                                  |
| 83  | m4:loop      | from=0; to=new Integer(new Integer(zcountv).intValue()-1).toString()                                                  |
| 85  | m4:item      | m4name=M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}; htmlsafe=true     |
| 86  | m4:item      | m4name=M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_APPROVAL_1"}; htmlsafe=true |
| 87  | m4:item      | m4name=M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN_1"}; htmlsafe=true    |
| 88  | m4:item      | m4name=M4T_SSE_LOANS{":"}SSE_LOANS_EMP{"!"}M4T_SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS_1"}; htmlsafe=true  |
| 99  | m4:endpage   |                                                                                                                       |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 58  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 72  | &lt;% if (zcounti &gt; 0) {                                                                                             |
| 92  | &lt;%} else {%&gt;                                                                                                      |
| 33  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 34  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 35  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 39  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!M4T_SSE_LOANS.CARGA_LOANS";                   |
| 43  | expresión de cálculo/transformación: String zsconombreprestamo = zcomun + "SCO_NM_LOAN_1";                              |
| 44  | expresión de cálculo/transformación: String zscofechaaprobacion = zcomun + "SCO_DT_APPROVAL_1";                         |
| 45  | expresión de cálculo/transformación: String zscocapital = zcomun + "SCO_AMT_LOAN_1";                                    |
| 46  | expresión de cálculo/transformación: String zsconumcuotas = zcomun + "SCO_NUM_QUOTAS_1";                                |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 96  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 8   | /css/estilo_sse.css                                |
| 9   | /libreria/funciones_sse.js                         |
| 11  | /libreria/clase_val_entradas.js                    |
| 66  | /iconos/noname_organizacion_ess_115_100.gif        |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 96  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | -------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 96  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p3_pc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
