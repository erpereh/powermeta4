# Detalle del préstamo

Identificador: `sse_g2/sse_g2_p5_desc.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p5_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_desc.jsp) | `1ac212b2a58119006a451406758a75dc07d2b2a8fe99d26360d5b17c26a6da5b` |    157 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p5_desc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p5_desc.jsp) | `1ac212b2a58119006a451406758a75dc07d2b2a8fe99d26360d5b17c26a6da5b` |    157 |
| BASE / español    | [sse_g2/espanol/sse_g2_p5_desc.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p5_desc.jsp)                             | `1ac212b2a58119006a451406758a75dc07d2b2a8fe99d26360d5b17c26a6da5b` |    157 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p5_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                  |
| --- | ------------------------------------------------------------------------- |
| 7   | Detalle del préstamo                                                      |
| 97  | Préstamo                                                                  |
| 102 | Consulta todos los detalles acerca de tu préstamo. Historial de préstamos |
| 111 | Detalles del Préstamo                                                     |
| 119 | Fec.Solicitud                                                             |
| 121 | Tipo Préstamo                                                             |
| 126 | Interés                                                                   |
| 127 | %                                                                         |
| 128 | Capital                                                                   |
| 133 | Motivo Préstamo                                                           |
| 135 | Tipo Frecuencia                                                           |
| 139 | Fec.Solicitud 1ºPago                                                      |
| 142 | Importe Cuota                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100 | img     | alt=Detalles del Préstamo; title=Detalles del Préstamo; src=/iconos/Solicitud_prestamos_51x100.gif; width=100; height=100                                                                                            |
| 103 | a       | class=enlacefuncional; title=Historial de préstamos; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21                                                                                                |
| 113 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21                                                                                                                                                     |
| 114 | img     | alt=Historial de préstamos; title=Historial de préstamos; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 18  | estado          | getParameter(request,"estado")   |
| 19  | zinicios        | getParameter(request,"zinicios") |
| 20  | id_loan         | getParameter(request,"id_loan")  |
| 21  | ord_loan        | getParameter(request,"ord_loan") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                                          |
| --- | ------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 18  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                   |
| 19  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                 |
| 20  | zloan        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_loan")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_loan")                  |
| 21  | zordloan     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord_loan") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord_loan")                 |
| 39  | zsubsesion   | "SSE_LOANS"                                                          | SSE_LOANS                                                                            |
| 40  | zmeta4object | "SSE_LOANS"                                                          | SSE_LOANS                                                                            |
| 41  | znodo        | "M4T_LN_HT_HR_LOANS"                                                 | M4T_LN_HT_HR_LOANS                                                                   |
| 42  | znodo2       | "M4T_LN_HT_CONDITIONS"                                               | M4T_LN_HT_CONDITIONS                                                                 |
| 43  | ztipocarga   | "DET"                                                                | DET                                                                                  |
| 48  | zoutputdef   | zsubsesion + "!" + znodo +"[*]"                                      | SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS[*]                                                  |
| 49  | zmove        | znodo + ":" + znodo + "[FIRST]"                                      | M4T_LN_HT_HR_LOANS{":"}M4T_LN_HT_HR_LOANS{"[FIRST]"}                                 |
| 50  | zcomun       | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}     |
| 52  | zoutputdef2  | zsubsesion + "!" + znodo2 +"[*]"                                     | SSE_LOANS{"!"}M4T_LN_HT_CONDITIONS[*]                                                |
| 53  | zmove2       | znodo2 + ":" +znodo2 + "[FIRST]"                                     | M4T_LN_HT_CONDITIONS{":"}M4T_LN_HT_CONDITIONS{"[FIRST]"}                             |
| 54  | zcomun2      | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."  | M4T_LN_HT_CONDITIONS{":"}SSE_LOANS{"!"}M4T_LN_HT_CONDITIONS{"[&amp;VAR.m4lix]"}{"."} |
| 62  | zmetodocarga | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                            |
| 92  | zimpcuota    | ""                                                                   |                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                             |
| --- | ------------ | ------------------------------------------------------------------------------ |
| 66  | m4:startpage | m4task=SSE_LOANS                                                               |
| 66  | m4:beginjob  |                                                                                |
| 67  | m4:datadef   | m4o=SSE_LOANS; m4name=SSE_LOANS                                                |
| 81  | m4:exec      | m4method=CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                             |
| 81  | m4:param     | name=TIPO_CARGA; value=DET                                                     |
| 82  | m4:outputdef | m4alias=M4T_LN_HT_HR_LOANS                                                     |
| 82  | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS[*]                        |
| 83  | m4:outputdef | m4alias=M4T_LN_HT_CONDITIONS                                                   |
| 83  | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_HT_CONDITIONS[*]                      |
| 84  | m4:endjob    |                                                                                |
| 86  | m4:move      |                                                                                |
| 86  | m4:param     | name=SSE_LOANS; value=M4T_LN_HT_HR_LOANS{":"}M4T_LN_HT_HR_LOANS{"[FIRST]"}     |
| 87  | m4:move      |                                                                                |
| 87  | m4:param     | name=SSE_LOANS; value=M4T_LN_HT_CONDITIONS{":"}M4T_LN_HT_CONDITIONS{"[FIRST]"} |
| 97  | m4:item      | item=NM_LOAN; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS                      |
| 120 | m4:item      | item=DT_APPLICATION; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS               |
| 122 | m4:item      | item=NM_LOAN; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS                      |
| 127 | m4:item      | item=RATE; htmlsafe=true; outputdef=M4T_LN_HT_CONDITIONS                       |
| 129 | m4:item      | item=AMT_LOAN; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS                     |
| 129 | m4:item      | item=IDEN_CURRENCY; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS                |
| 134 | m4:item      | item=NM_REASON; htmlsafe=true; outputdef=M4T_LN_HT_CONDITIONS                  |
| 136 | m4:item      | item=NM_PAY_OFF_FREQUENCY; htmlsafe=true; outputdef=M4T_LN_HT_CONDITIONS       |
| 140 | m4:item      | item=DT_REQ_PAYMENT; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS               |
| 141 | m4:item      | var=; item=AMT_QUOTAS; htmlsafe=true; outputdef=M4T_LN_HT_CONDITIONS           |
| 149 | m4:item      | item=IDEN_CURRENCY; htmlsafe=true; outputdef=M4T_LN_HT_HR_LOANS                |
| 156 | m4:endpage   |                                                                                |

| L   | Operación | Argumentos literales                      |
| --- | --------- | ----------------------------------------- |
| 71  | setItem   | zsubsesion,znodo,"","ID_LOAN",zloan       |
| 72  | setItem   | zsubsesion,znodo,"","ORD_LOAN",zordloan   |
| 77  | setItem   | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                            |
| 26  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                    |
| 27  | if ((zloan==null)&#124;&#124;(zloan.equals(""))) {zloan="";}                                                               |
| 29  | if ((zordloan==null)&#124;&#124;(zordloan.equals(""))) {zordloan="";}                                                      |
| 147 | if ((zimpcuota!=null)&amp;&amp; !(zimpcuota.equals(""))){                                                                  |
| 151 | else {%&gt;                                                                                                                |
| 48  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo +"[*]";                                  |
| 49  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                       |
| 50  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 52  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                |
| 53  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                     |
| 54  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 62  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                 |

### Includes, navegación y dependencias

| L   | Include                                         |
| --- | ----------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp         |
| 36  | ../../sse_generico/espanol/generico_menusup.jsp |
| 37  | ../../sse_generico/espanol/generico_links.jsp   |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                         |
| 9   | /libreria/funciones_sse.js                                  |
| 11  | /libreria/clase_val_entradas.js                             |
| 100 | /iconos/Solicitud_prestamos_51x100.gif                      |
| 103 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 |
| 113 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 |
| 114 | /iconos/icono_flecha_azul2_ess_11_9.gif                     |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                     |
| 36  | ../../sse_generico/espanol/generico_menusup.jsp             |
| 37  | ../../sse_generico/espanol/generico_links.jsp               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ----------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 9   | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 103 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 113 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 9   | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 103 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 113 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 9   | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 103 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 113 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p5_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
