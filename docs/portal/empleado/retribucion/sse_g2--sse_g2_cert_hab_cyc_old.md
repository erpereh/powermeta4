# Certificados de Retenciones

Identificador: `sse_g2/sse_g2_cert_hab_cyc_old.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp) | `da2fa2da440d46f7a4fc6844e823a808d31e64f50dd7555d5530eeaba43d6c1f` |    143 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp)   | `911b9bfda8411fe2a03b3f71619e91477a71dbbd859c612601346efa7da00466` |    143 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp) | `da2fa2da440d46f7a4fc6844e823a808d31e64f50dd7555d5530eeaba43d6c1f` |    143 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Certificados de Retenciones                                                                                                              |
| 49  | Mis Certificados de Retenciones                                                                                                          |
| 56  | Para visualizar un certificado previo a 2014 por favor seleccione el año en el siguiente listado Seleccione Año Año                      |
| 78  | Para visualizar los certificados posteriores a 2014 seleccione el año que desee, del siguiente listado: Seleccione Año Año 2015 Año 2016 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60  | select  | id=certificados_emind; onchange=window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false; name=certificados_emind |
| 61  | option  | value=; selected=presente; confirmar condición si dinámico                                                                                                                                   |
| 63  | option  | value=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_CERT_DOC!CSP_CERT_DOC[&lt;%=m4lix%&gt;].SCO_CERT_DOC                                                                    |
| 114 | select  | id=certificados_pnet                                                                                                                                                                         |
| 115 | option  | value=                                                                                                                                                                                       |
| 116 | option  | value=javascript:OpenReport(certificadopdf_2015)                                                                                                                                             |
| 117 | option  | value=javascript:OpenReport(certificadopdf_2016)                                                                                                                                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                  | Resolución estática parcial                                                             |
| --- | ------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 13  | zsubsesion         | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 14  | zmeta4object       | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 15  | zmetodocarga       | zsubsesion + "!CSP_CERT_DOC.CARGA"                                | CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                     |
| 16  | znodo              | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 18  | zraiz              | znodo + ":" + zsubsesion + "!" + znodo + "."                      | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"."}                                     |
| 19  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                  | CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                    |
| 21  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}                 |
| 23  | zANIO              | zcomun + "ANIO"                                                   | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}         |
| 24  | zSCO_CERT_DOC      | zcomun + "SCO_CERT_DOC"                                           | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_CERT_DOC"} |
| 35  | zcount             | 0                                                                 | 0                                                                                       |
| 36  | zcounti            | 0                                                                 | 0                                                                                       |
| 42  | zcountv            | String.valueOf(zcounti)                                           | String.valueOf(zcounti)                                                                 |
| 53  | zregistrofinals    | String.valueOf(zcounti - 1)                                       | String.valueOf(zcounti - 1)                                                             |
| 105 | stSysSentence_2015 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                      |
| 106 | stSysSentence_2016 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag              | Contrato declarado                                                                                                            |
| --- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 27  | m4:startpage     | m4task=CSP_CERT_DOC                                                                                                           |
| 28  | m4:beginjob      |                                                                                                                               |
| 29  | m4:datadef       | m4o=CSP_CERT_DOC; m4name=CSP_CERT_DOC                                                                                         |
| 30  | m4:exec          | m4method=CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                                                  |
| 31  | m4:outputdef     | m4alias=CSP_CERT_DOC                                                                                                          |
| 31  | m4:param         | name=m4name0; value=CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                                      |
| 32  | m4:endjob        |                                                                                                                               |
| 62  | m4:loop          | from=0; to=String.valueOf(zcounti - 1)                                                                                        |
| 63  | m4:item          | m4name=CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true                         |
| 109 | m4:executereport | idreport=IBER_RP_CERT_HAB; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#      |
| 110 | m4:executereport | idreport=IBER_RP_CERT_HAB_2016; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |
| 141 | m4:endpage       |                                                                                                                               |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 39  | getCount         | znodo,zsubsesion,znodo |
| 40  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 72  | GetAnioPasado |            |
| 89  | OpenReport    | URL        |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 52  | if (zcounti &gt; 0) {                                                                                                   |
| 122 | if (this.selectedIndex!==0) {                                                                                           |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_CERT_DOC.CARGA";                          |
| 18  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                       |
| 19  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 21  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 23  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                    |
| 24  | expresión de cálculo/transformación: String zSCO_CERT_DOC = zcomun + "SCO_CERT_DOC";                                    |
| 53  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                              |
| 94  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();             |
| 95  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();          |
| 96  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 140 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 140 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_cert_hab_cyc_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Certificados de Retenciones                                                                                                              |
| 49  | Mis Certificados de Retenciones                                                                                                          |
| 56  | Para visualizar un certificado previo a 2014 por favor seleccione el año en el siguiente listado Seleccione Año Año                      |
| 78  | Para visualizar los certificados posteriores a 2014 seleccione el año que desee, del siguiente listado: Seleccione Año Año 2015 Año 2016 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60  | select  | id=certificados_emind; onchange=window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false; name=certificados_emind |
| 61  | option  | value=; selected=presente; confirmar condición si dinámico                                                                                                                                   |
| 63  | option  | value=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_CERT_DOC!CSP_CERT_DOC[&lt;%=m4lix%&gt;].SCO_CERT_DOC                                                                    |
| 114 | select  | id=certificados_pnet                                                                                                                                                                         |
| 115 | option  | value=                                                                                                                                                                                       |
| 116 | option  | value=javascript:OpenReport(certificadopdf_2015)                                                                                                                                             |
| 117 | option  | value=javascript:OpenReport(certificadopdf_2016)                                                                                                                                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                  | Resolución estática parcial                                                             |
| --- | ------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 13  | zsubsesion         | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 14  | zmeta4object       | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 15  | zmetodocarga       | zsubsesion + "!CSP_CERT_DOC.CARGA"                                | CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                     |
| 16  | znodo              | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                            |
| 18  | zraiz              | znodo + ":" + zsubsesion + "!" + znodo + "."                      | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"."}                                     |
| 19  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                  | CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                    |
| 21  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}                 |
| 23  | zANIO              | zcomun + "ANIO"                                                   | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}         |
| 24  | zSCO_CERT_DOC      | zcomun + "SCO_CERT_DOC"                                           | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_CERT_DOC"} |
| 35  | zcount             | 0                                                                 | 0                                                                                       |
| 36  | zcounti            | 0                                                                 | 0                                                                                       |
| 42  | zcountv            | String.valueOf(zcounti)                                           | String.valueOf(zcounti)                                                                 |
| 53  | zregistrofinals    | String.valueOf(zcounti - 1)                                       | String.valueOf(zcounti - 1)                                                             |
| 105 | stSysSentence_2015 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                      |
| 106 | stSysSentence_2016 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag              | Contrato declarado                                                                                                           |
| --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 27  | m4:startpage     | m4task=CSP_CERT_DOC                                                                                                          |
| 28  | m4:beginjob      |                                                                                                                              |
| 29  | m4:datadef       | m4o=CSP_CERT_DOC; m4name=CSP_CERT_DOC                                                                                        |
| 30  | m4:exec          | m4method=CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                                                 |
| 31  | m4:outputdef     | m4alias=CSP_CERT_DOC                                                                                                         |
| 31  | m4:param         | name=m4name0; value=CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                                     |
| 32  | m4:endjob        |                                                                                                                              |
| 62  | m4:loop          | from=0; to=String.valueOf(zcounti - 1)                                                                                       |
| 63  | m4:item          | m4name=CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true                        |
| 109 | m4:executereport | idreport=CYC_RP_CERT_HAB; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#      |
| 110 | m4:executereport | idreport=CYC_RP_CERT_HAB_2016; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |
| 141 | m4:endpage       |                                                                                                                              |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 39  | getCount         | znodo,zsubsesion,znodo |
| 40  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 72  | GetAnioPasado |            |
| 89  | OpenReport    | URL        |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 52  | if (zcounti &gt; 0) {                                                                                                   |
| 122 | if (this.selectedIndex!==0) {                                                                                           |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_CERT_DOC.CARGA";                          |
| 18  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                       |
| 19  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 21  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 23  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                    |
| 24  | expresión de cálculo/transformación: String zSCO_CERT_DOC = zcomun + "SCO_CERT_DOC";                                    |
| 53  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                              |
| 94  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();             |
| 95  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();          |
| 96  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 140 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 140 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| CYC    | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| CYC    | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 140 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_cert_hab_cyc_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
