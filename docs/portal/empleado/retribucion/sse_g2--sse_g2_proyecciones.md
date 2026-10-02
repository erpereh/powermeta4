# Informes de proyecciones

Identificador: `sse_g2/sse_g2_proyecciones.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_proyecciones.jsp) | `5e8dfc02152c9fa58914320b95af6922b72b8ce53efa0e91bbb5eda86b399f37` |    171 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_proyecciones.jsp)   | `832c1c9a599a0c13d97c9f8d3a64128c009a64d267a517d77f2ee5fc4dd5037d` |    173 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_proyecciones.jsp) | `c77fc87be63eb5acf91a60d8cf1ca4359d52a7bfb46880609fa379509d7f79c8` |    173 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_proyecciones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Informes de proyecciones                                                                                                                                                                     |
| 81  | Mis Informes de Proyecciones                                                                                                                                                                 |
| 84  | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año Informe Proyecciones "&gt;Informe Proyecciones "&gt;Informe de Compensación Total |
| 140 | Mis Informes de Proyecciones                                                                                                                                                                 |
| 143 | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89  | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 90  | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 92  | option  | value=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_RP_PROYECCIONES!CSP_PROYECCIONES_EMIND%5B&lt;%=m4lix%&gt;%5D.CSP_PROYEC_DOC |
| 106 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 112 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 123 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |
| 148 | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 149 | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 156 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                    | Resolución estática parcial                                                                                          |
| --- | --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 13  | zsubsesion      | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 14  | zmeta4object    | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 15  | zmetodocarga    | zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"                 | CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                          |
| 16  | znodo           | "CSP_PROYECCIONES_EMIND"                                            | CSP_PROYECCIONES_EMIND                                                                                               |
| 17  | znodo2          | "CSP_ANIOS_PROYECCIONES"                                            | CSP_ANIOS_PROYECCIONES                                                                                               |
| 19  | zraiz           | znodo + ":" + zsubsesion + "!" + znodo + "."                        | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"."}                                       |
| 20  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                    | CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                                |
| 21  | zcomun          | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."   | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}                   |
| 23  | zraiz2          | znodo2 + ":" + zsubsesion + "!" + znodo2 + "."                      | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"."}                                       |
| 24  | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                   | CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                                |
| 25  | zcomun2         | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}                   |
| 27  | zANIO           | zcomun + "ANIO"                                                     | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 28  | zCSP_PROYEC_DOC | zcomun + "CSP_PROYEC_DOC"                                           | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"CSP_PROYEC_DOC"} |
| 30  | zANIO2          | zcomun2 + "ANIO"                                                    | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 42  | zcount          | 0                                                                   | 0                                                                                                                    |
| 43  | zcounti         | 0                                                                   | 0                                                                                                                    |
| 44  | zcounti2        | 0                                                                   | 0                                                                                                                    |
| 51  | zcountv         | String.valueOf(zcounti)                                             | String.valueOf(zcounti)                                                                                              |
| 56  | zregistrofinals | String.valueOf(zcounti - 1)                                         | String.valueOf(zcounti - 1)                                                                                          |
| 96  | varanno         | ""                                                                  |                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                     |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                                                                             |
| 34  | m4:beginjob  |                                                                                                                                        |
| 35  | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                                                                    |
| 36  | m4:exec      | m4method=CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                                   |
| 37  | m4:outputdef | m4alias=CSP_PROYECCIONES_EMIND                                                                                                         |
| 37  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                              |
| 38  | m4:outputdef | m4alias=CSP_ANIOS_PROYECCIONES                                                                                                         |
| 38  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                              |
| 39  | m4:endjob    |                                                                                                                                        |
| 91  | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 92  | m4:item      | m4name=CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 99  | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 100 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; var=; htmlsafe=true |
| 106 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 112 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 169 | m4:endpage   |                                                                                                                                        |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 47  | getCount         | znodo,zsubsesion,znodo   |
| 48  | getCountInClient | znodo,zsubsesion,znodo   |
| 49  | getCountInClient | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 60  | OpenReport | URL        |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 55  | if ((zcounti &gt; 0) &#124;&#124; (zcounti2 &gt; 0)) {                                                                     |
| 95  | if (zcounti2 &gt; 0) {                                                                                                     |
| 102 | &lt;% if (Integer.parseInt(varanno) &lt;= 2021) { %&gt;                                                                    |
| 108 | &lt;% } else { %&gt;                                                                                                       |
| 136 | &lt;% }else{%&gt;                                                                                                          |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS";            |
| 19  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                          |
| 20  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 21  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 23  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";                       |
| 24  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 25  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 27  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                       |
| 28  | expresión de cálculo/transformación: String zCSP_PROYEC_DOC = zcomun + "CSP_PROYEC_DOC";                                   |
| 30  | expresión de cálculo/transformación: String zANIO2 = zcomun2 + "ANIO";                                                     |
| 56  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                                 |
| 63  | expresión de cálculo/transformación: var nametab = "Proyecciones_"+Math.floor(Math.random() * 99999);                      |
| 66  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                |
| 67  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();             |
| 68  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                            |
| 97  | expresión de cálculo/transformación: zregistrofinals = String.valueOf(zcounti2 - 1); // Informe de Compensación Total      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 168 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                               |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                           |
| 106 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 112 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 123 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 156 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 168 | ../../sse_generico/espanol/generico_disclaimer.jsp                                |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_proyecciones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Informes de proyecciones                                                                                                                                                                     |
| 83  | Mis Informes de Proyecciones                                                                                                                                                                 |
| 86  | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año Informe Proyecciones "&gt;Informe Proyecciones "&gt;Informe de Compensación Total |
| 142 | Mis Informes de Proyecciones                                                                                                                                                                 |
| 145 | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 91  | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 92  | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 94  | option  | value=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_RP_PROYECCIONES!CSP_PROYECCIONES_EMIND%5B&lt;%=m4lix%&gt;%5D.CSP_PROYEC_DOC |
| 108 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 114 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 125 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |
| 150 | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 151 | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 158 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                    | Resolución estática parcial                                                                                          |
| --- | --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 13  | zsubsesion      | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 14  | zmeta4object    | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 15  | zmetodocarga    | zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"                 | CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                          |
| 16  | znodo           | "CSP_PROYECCIONES_EMIND"                                            | CSP_PROYECCIONES_EMIND                                                                                               |
| 17  | znodo2          | "CSP_ANIOS_PROYECCIONES"                                            | CSP_ANIOS_PROYECCIONES                                                                                               |
| 19  | zraiz           | znodo + ":" + zsubsesion + "!" + znodo + "."                        | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"."}                                       |
| 20  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                    | CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                                |
| 21  | zcomun          | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."   | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}                   |
| 23  | zraiz2          | znodo2 + ":" + zsubsesion + "!" + znodo2 + "."                      | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"."}                                       |
| 24  | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                   | CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                                |
| 25  | zcomun2         | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}                   |
| 27  | zANIO           | zcomun + "ANIO"                                                     | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 28  | zCSP_PROYEC_DOC | zcomun + "CSP_PROYEC_DOC"                                           | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"CSP_PROYEC_DOC"} |
| 30  | zANIO2          | zcomun2 + "ANIO"                                                    | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 42  | zcount          | 0                                                                   | 0                                                                                                                    |
| 43  | zcounti         | 0                                                                   | 0                                                                                                                    |
| 44  | zcounti2        | 0                                                                   | 0                                                                                                                    |
| 51  | zcountv         | String.valueOf(zcounti)                                             | String.valueOf(zcounti)                                                                                              |
| 74  | zregistrofinals | String.valueOf(zcounti - 1)                                         | String.valueOf(zcounti - 1)                                                                                          |
| 98  | varanno         | ""                                                                  |                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                     |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                                                                             |
| 34  | m4:beginjob  |                                                                                                                                        |
| 35  | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                                                                    |
| 36  | m4:exec      | m4method=CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                                   |
| 37  | m4:outputdef | m4alias=CSP_PROYECCIONES_EMIND                                                                                                         |
| 37  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                              |
| 38  | m4:outputdef | m4alias=CSP_ANIOS_PROYECCIONES                                                                                                         |
| 38  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                              |
| 39  | m4:endjob    |                                                                                                                                        |
| 93  | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 94  | m4:item      | m4name=CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 101 | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 102 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; var=; htmlsafe=true |
| 108 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 114 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 171 | m4:endpage   |                                                                                                                                        |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 47  | getCount         | znodo,zsubsesion,znodo   |
| 48  | getCountInClient | znodo,zsubsesion,znodo   |
| 49  | getCountInClient | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 55  | OpenReport | URL        |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 73  | if ((zcounti &gt; 0) &#124;&#124; (zcounti2 &gt; 0)) {                                                                     |
| 97  | if (zcounti2 &gt; 0) {                                                                                                     |
| 104 | &lt;% if (Integer.parseInt(varanno) &lt;= 2021) { %&gt;                                                                    |
| 110 | &lt;% } else { %&gt;                                                                                                       |
| 138 | &lt;% }else{%&gt;                                                                                                          |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS";            |
| 19  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                          |
| 20  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 21  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 23  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";                       |
| 24  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 25  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 27  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                       |
| 28  | expresión de cálculo/transformación: String zCSP_PROYEC_DOC = zcomun + "CSP_PROYEC_DOC";                                   |
| 30  | expresión de cálculo/transformación: String zANIO2 = zcomun2 + "ANIO";                                                     |
| 58  | expresión de cálculo/transformación: var nametab = "Proyecciones_"+Math.floor(Math.random() * 99999);                      |
| 61  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                |
| 62  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();             |
| 63  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                            |
| 74  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                                 |
| 99  | expresión de cálculo/transformación: zregistrofinals = String.valueOf(zcounti2 - 1); // Informe de Compensación Total      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 170 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                               |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                           |
| 108 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 114 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 125 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 158 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                |

## Versión 3: IBER ES

Fuente de los localizadores `L`: [m4custom/IBER/sse_g2/espanol/sse_g2_proyecciones.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_proyecciones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Informes de proyecciones                                                                                                                                                                     |
| 83  | Mis Informes de Proyecciones                                                                                                                                                                 |
| 86  | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año Informe Proyecciones "&gt;Informe Proyecciones "&gt;Informe de Compensación Total |
| 142 | Mis Informes de Proyecciones                                                                                                                                                                 |
| 145 | Para visualizar Informe de Proyecciones por favor seleccione el año en el siguiente listado Seleccione Año                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 91  | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 92  | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 94  | option  | value=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_RP_PROYECCIONES!CSP_PROYECCIONES_EMIND%5B&lt;%=m4lix%&gt;%5D.CSP_PROYEC_DOC |
| 108 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 114 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name=; htmlsafe=true                                           |
| 125 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |
| 150 | select  | id=certificados; onchange=OpenReport(this.value);return false; name=Informe de Proyecciones                                                      |
| 151 | option  | value=; selected=presente; confirmar condición si dinámico                                                                                       |
| 158 | option  | value=/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'                                                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                    | Resolución estática parcial                                                                                          |
| --- | --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 13  | zsubsesion      | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 14  | zmeta4object    | "CSP_RP_PROYECCIONES"                                               | CSP_RP_PROYECCIONES                                                                                                  |
| 15  | zmetodocarga    | zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"                 | CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                          |
| 16  | znodo           | "CSP_PROYECCIONES_EMIND"                                            | CSP_PROYECCIONES_EMIND                                                                                               |
| 17  | znodo2          | "CSP_ANIOS_PROYECCIONES"                                            | CSP_ANIOS_PROYECCIONES                                                                                               |
| 19  | zraiz           | znodo + ":" + zsubsesion + "!" + znodo + "."                        | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"."}                                       |
| 20  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                    | CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                                |
| 21  | zcomun          | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."   | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}                   |
| 23  | zraiz2          | znodo2 + ":" + zsubsesion + "!" + znodo2 + "."                      | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"."}                                       |
| 24  | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                   | CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                                |
| 25  | zcomun2         | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}                   |
| 27  | zANIO           | zcomun + "ANIO"                                                     | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 28  | zCSP_PROYEC_DOC | zcomun + "CSP_PROYEC_DOC"                                           | CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"CSP_PROYEC_DOC"} |
| 30  | zANIO2          | zcomun2 + "ANIO"                                                    | CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}           |
| 42  | zcount          | 0                                                                   | 0                                                                                                                    |
| 43  | zcounti         | 0                                                                   | 0                                                                                                                    |
| 44  | zcounti2        | 0                                                                   | 0                                                                                                                    |
| 51  | zcountv         | String.valueOf(zcounti)                                             | String.valueOf(zcounti)                                                                                              |
| 76  | zregistrofinals | String.valueOf(zcounti - 1)                                         | String.valueOf(zcounti - 1)                                                                                          |
| 98  | varanno         | ""                                                                  |                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                     |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                                                                             |
| 34  | m4:beginjob  |                                                                                                                                        |
| 35  | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                                                                    |
| 36  | m4:exec      | m4method=CSP_RP_PROYECCIONES{"!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS"}                                                                   |
| 37  | m4:outputdef | m4alias=CSP_PROYECCIONES_EMIND                                                                                                         |
| 37  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[*]"}                                                              |
| 38  | m4:outputdef | m4alias=CSP_ANIOS_PROYECCIONES                                                                                                         |
| 38  | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[*]"}                                                              |
| 39  | m4:endjob    |                                                                                                                                        |
| 93  | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 94  | m4:item      | m4name=CSP_PROYECCIONES_EMIND{":"}CSP_RP_PROYECCIONES{"!"}CSP_PROYECCIONES_EMIND{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 101 | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                                                                                 |
| 102 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; var=; htmlsafe=true |
| 108 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 114 | m4:item      | m4name=CSP_ANIOS_PROYECCIONES{":"}CSP_RP_PROYECCIONES{"!"}CSP_ANIOS_PROYECCIONES{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true       |
| 171 | m4:endpage   |                                                                                                                                        |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 47  | getCount         | znodo,zsubsesion,znodo   |
| 48  | getCountInClient | znodo,zsubsesion,znodo   |
| 49  | getCountInClient | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 57  | OpenReport | URL        |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 75  | if ((zcounti &gt; 0) &#124;&#124; (zcounti2 &gt; 0)) {                                                                     |
| 97  | if (zcounti2 &gt; 0) {                                                                                                     |
| 104 | &lt;% if (Integer.parseInt(varanno) &lt;= 2021) { %&gt;                                                                    |
| 110 | &lt;% } else { %&gt;                                                                                                       |
| 138 | &lt;% }else{%&gt;                                                                                                          |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS";            |
| 19  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                          |
| 20  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 21  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 23  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";                       |
| 24  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 25  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 27  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                       |
| 28  | expresión de cálculo/transformación: String zCSP_PROYEC_DOC = zcomun + "CSP_PROYEC_DOC";                                   |
| 30  | expresión de cálculo/transformación: String zANIO2 = zcomun2 + "ANIO";                                                     |
| 60  | expresión de cálculo/transformación: var nametab = "Proyecciones_"+Math.floor(Math.random() * 99999);                      |
| 63  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                |
| 64  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();             |
| 65  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                            |
| 76  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                                 |
| 99  | expresión de cálculo/transformación: zregistrofinals = String.valueOf(zcounti2 - 1); // Informe de Compensación Total      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 170 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                               |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                           |
| 108 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 114 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= |
| 125 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 158 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    |
| 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                        | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 168 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 106 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| COLL   | 112 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| COLL   | 123 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| COLL   | 156 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| COLL   | 168 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| CYC    | 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| CYC    | 108 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| CYC    | 114 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| CYC    | 125 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| CYC    | 158 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| CYC    | 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 108 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| IBER   | 114 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=&lt;m4:item m4name= | ausente    | P06                                                                                                       |
| IBER   | 125 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| IBER   | 158 | /servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=                    | ausente    | P06                                                                                                       |
| IBER   | 170 | ../../sse_generico/espanol/generico_disclaimer.jsp                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_proyecciones.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
