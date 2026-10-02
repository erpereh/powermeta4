# Certificados de Retenciones

Identificador: `sse_g2/sse_g2_cert_hab_cyc_SUBIR_2018.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp) | `3e13be5b98d949d67e17e59f5b0ad5fadfc64826ba4d734fa0c7f5a50c2c6255` |    193 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp) | `3e13be5b98d949d67e17e59f5b0ad5fadfc64826ba4d734fa0c7f5a50c2c6255` |    193 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab_cyc_SUBIR_2018.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta    |
| --- | --------------------------- |
| 9   | Certificados de Retenciones |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                      |
| --- | ------- | ---------------------------------------------- |
| 83  | select  | id=certificados_pnet                           |
| 84  | option  | value=                                         |
| 151 | option  | value=javascript:OpenReport2(&lt;%=m4lix%&gt;) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                  | Resolución estática parcial                                                                                        |
| --- | ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 16  | zsubsesion         | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                                                       |
| 17  | zmeta4object       | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                                                       |
| 18  | zmetodocarga       | zsubsesion + "!CSP_CERT_DOC.CARGA"                                | CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                                                |
| 19  | znodo              | "CSP_CERT_DOC"                                                    | CSP_CERT_DOC                                                                                                       |
| 21  | zraiz              | znodo + ":" + zsubsesion + "!" + znodo + "."                      | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"."}                                                                |
| 22  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                  | CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                                               |
| 24  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}                                            |
| 26  | zANIO              | zcomun + "ANIO"                                                   | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}                                    |
| 27  | zSCO_CERT_DOC      | zcomun + "SCO_CERT_DOC"                                           | CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_CERT_DOC"}                            |
| 30  | zsubsesion2        | "CSP_CERTIFICADO_HAB_ANIOS"                                       | CSP_CERTIFICADO_HAB_ANIOS                                                                                          |
| 31  | zmeta4object2      | "CSP_CERTIFICADO_HAB_ANIOS"                                       | CSP_CERTIFICADO_HAB_ANIOS                                                                                          |
| 32  | zmetodocarga2      | zsubsesion2 + "!CSP_CERTIFICADO_HAB_ANIOS.CARGA"                  | CSP_CERTIFICADO_HAB_ANIOS{"!CSP_CERTIFICADO_HAB_ANIOS.CARGA"}                                                      |
| 33  | znodo2             | "CSP_CERTIFICADO_HAB_ANIOS"                                       | CSP_CERTIFICADO_HAB_ANIOS                                                                                          |
| 35  | zraiz2             | znodo2 + ":" + zsubsesion2 + "!" + znodo2 + "."                   | CSP_CERTIFICADO_HAB_ANIOS{":"}CSP_CERTIFICADO_HAB_ANIOS{"!"}CSP_CERTIFICADO_HAB_ANIOS{"."}                         |
| 36  | zoutputdef2        | zsubsesion2 + "!" + znodo2 + "[*]"                                | CSP_CERTIFICADO_HAB_ANIOS{"!"}CSP_CERTIFICADO_HAB_ANIOS{"[*]"}                                                     |
| 38  | zcomun2            | znodo2 + ":" + zsubsesion2 + "!" + znodo2 + "[0]" + "."           | CSP_CERTIFICADO_HAB_ANIOS{":"}CSP_CERTIFICADO_HAB_ANIOS{"!"}CSP_CERTIFICADO_HAB_ANIOS{"[0]"}{"."}                  |
| 40  | zANIO2             | zcomun2 + "P_LISTA_ANIOS"                                         | CSP_CERTIFICADO_HAB_ANIOS{":"}CSP_CERTIFICADO_HAB_ANIOS{"!"}CSP_CERTIFICADO_HAB_ANIOS{"[0]"}{"."}{"P_LISTA_ANIOS"} |
| 72  | zcount2            | 0                                                                 | 0                                                                                                                  |
| 73  | zcounti2           | 0                                                                 | 0                                                                                                                  |
| 79  | zcountv2           | String.valueOf(zcounti2)                                          | String.valueOf(zcounti2)                                                                                           |
| 108 | stSysSentence_2015 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                                                 |
| 109 | stSysSentence_2016 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                                                 |
| 110 | stSysSentence_2017 | "CSP_RP_CERT_HAB                                                  | {"CSP_RP_CERT_HAB}                                                                                                 |
| 134 | zcount             | 0                                                                 | 0                                                                                                                  |
| 135 | zcounti            | 0                                                                 | 0                                                                                                                  |
| 144 | zcountv            | String.valueOf(zcounti)                                           | String.valueOf(zcounti)                                                                                            |
| 147 | zregistrofinals    | String.valueOf(zcounti - 1)                                       | String.valueOf(zcounti - 1)                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag              | Contrato declarado                                                                                                           |
| --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 42  | m4:startpage     | m4task=CSP_CERTIFICADO_HAB_ANIOS                                                                                             |
| 43  | m4:beginjob      |                                                                                                                              |
| 44  | m4:datadef       | m4o=CSP_CERTIFICADO_HAB_ANIOS; m4name=CSP_CERTIFICADO_HAB_ANIOS                                                              |
| 45  | m4:exec          | m4method=CSP_CERTIFICADO_HAB_ANIOS{"!CSP_CERTIFICADO_HAB_ANIOS.CARGA"}                                                       |
| 46  | m4:outputdef     | m4alias=CSP_CERTIFICADO_HAB_ANIOS                                                                                            |
| 46  | m4:param         | name=m4name0; value=CSP_CERTIFICADO_HAB_ANIOS{"!"}CSP_CERTIFICADO_HAB_ANIOS{"[*]"}                                           |
| 47  | m4:endjob        |                                                                                                                              |
| 93  | m4:item          | item=P_LISTA_ANIOS; htmlsafe=true; outputdef=CSP_CERTIFICADO_HAB_ANIOS                                                       |
| 113 | m4:executereport | idreport=CYC_RP_CERT_HAB_2015; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |
| 114 | m4:executereport | idreport=CYC_RP_CERT_HAB_2016; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |
| 115 | m4:executereport | idreport=CYC_RP_CERT_HAB_2017; syssentence={"CSP_RP_CERT_HAB}; outputtype=PDF; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |
| 120 | m4:endpage       |                                                                                                                              |
| 122 | m4:startpage     | m4task=CSP_CERT_DOC                                                                                                          |
| 123 | m4:beginjob      |                                                                                                                              |
| 124 | m4:datadef       | m4o=CSP_CERT_DOC; m4name=CSP_CERT_DOC                                                                                        |
| 125 | m4:exec          | m4method=CSP_CERT_DOC{"!CSP_CERT_DOC.CARGA"}                                                                                 |
| 126 | m4:outputdef     | m4alias=CSP_CERT_DOC                                                                                                         |
| 126 | m4:param         | name=m4name0; value=CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[*]"}                                                                     |
| 127 | m4:endjob        |                                                                                                                              |
| 150 | m4:loop          | from=0; to=String.valueOf(zcounti - 1)                                                                                       |
| 151 | m4:item          | m4name=CSP_CERT_DOC{":"}CSP_CERT_DOC{"!"}CSP_CERT_DOC{"[&amp;VAR.m4lix]"}{"."}{"ANIO"}; htmlsafe=true                        |
| 191 | m4:endpage       |                                                                                                                              |

| L   | Operación        | Argumentos literales      |
| --- | ---------------- | ------------------------- |
| 76  | getCount         | znodo2,zsubsesion2,znodo2 |
| 77  | getCountInClient | znodo2,zsubsesion2,znodo2 |
| 139 | getCount         | znodo,zsubsesion,znodo    |
| 140 | getCountInClient | znodo,zsubsesion,znodo    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos   |
| --- | ----------- | ------------ |
| 99  | insertar    | text, indice |
| 167 | OpenReport  | URL          |
| 181 | OpenReport2 | año          |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 89  | if (zcounti2 &gt;0) {                                                                                                   |
| 146 | if (zcounti &gt; 0) {                                                                                                   |
| 163 | if (this.selectedIndex!==0) {                                                                                           |
| 18  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_CERT_DOC.CARGA";                          |
| 21  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                       |
| 22  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 24  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 26  | expresión de cálculo/transformación: String zANIO = zcomun + "ANIO";                                                    |
| 27  | expresión de cálculo/transformación: String zSCO_CERT_DOC = zcomun + "SCO_CERT_DOC";                                    |
| 32  | expresión de cálculo/transformación: String zmetodocarga2 = zsubsesion2 + "!CSP_CERTIFICADO_HAB_ANIOS.CARGA";           |
| 35  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion2 + "!" + znodo2 + ".";                   |
| 36  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion2 + "!" + znodo2 + "[*]";                           |
| 38  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion2 + "!" + znodo2 + "[0]" + ".";          |
| 40  | expresión de cálculo/transformación: String zANIO2 = zcomun2 + "P_LISTA_ANIOS";                                         |
| 102 | expresión de cálculo/transformación: option.text = "Año " + text;                                                       |
| 147 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                              |
| 172 | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();             |
| 173 | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();          |
| 174 | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 189 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 10  | /css/estilo_sse.css                                |
| 11  | /css/bootstrap/css/bootstrap.min.css               |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 189 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 189 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| COLL   | 189 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 189 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| IBER   | 189 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_cert_hab_cyc_SUBIR_2018.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
