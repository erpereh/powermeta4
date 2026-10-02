# Certificado de Retenciones

Identificador: `sse_g2/sse_g2_cert_hab.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab.jsp) | `689df8e60ec4eb8df92e418e370ee7f1228e1e974c4f276b161fe47edeb0d28c` |    108 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_cert_hab.jsp) | `689df8e60ec4eb8df92e418e370ee7f1228e1e974c4f276b161fe47edeb0d28c` |    108 |
| BASE / español    | [sse_g2/espanol/sse_g2_cert_hab.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_cert_hab.jsp)                             | `689df8e60ec4eb8df92e418e370ee7f1228e1e974c4f276b161fe47edeb0d28c` |    108 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_cert_hab.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                   |
| --- | -------------------------------------------------------------------------- |
| 29  | Certificado de Retenciones                                                 |
| 77  | Mi Certificado de Retenciones                                              |
| 82  | Se ha creado tu Certificado de Retenciones del año . Ampliar para imprimir |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                   |
| --- | ------- | ----------------------------------------------------------------------------------------------------------- |
| 80  | img     | src=/iconos/noname_certificado_57_115.gif; width=49; height=100; alt=Certificado de Retenciones             |
| 85  | a       | class=enlacefuncional; title=Certificado de Retenciones; href=javascript:OpenReport(certificadopdf);        |
| 93  | img     | src=/iconos/aeat_85_76.gif; width=85; height=76; alt=A.E.A.T.                                               |
| 99  | iframe  | id=Local; src=+ certificadopdf + ; scrolling=yes; frameborder=0; vspace=0; hspace=0; width=100%; height=300 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 35  | estado          | getParameter(request,"estado") |

| L   | Variable      | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 17  | stSysSentence | "SSP_RP_CERT_HAB                                                   | {"SSP_RP_CERT_HAB}                                                 |
| 35  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag              | Contrato declarado                                                                                                       |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 21  | m4:startpage     | m4task=REPORTS                                                                                                           |
| 71  | m4:executereport | idreport=SSP_RP_CERT_HAB; syssentence={"SSP_RP_CERT_HAB}; outputtype=HTML; otherparams=#/AUTOLOAD:DESIGN:OFF# #/NSEARCH# |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 40  | OpenReport    | URL        |
| 63  | GetAnioPasado |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                      |
| 45  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                                                                                          |
| 46  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();                                                                                       |
| 47  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                                                                                                      |
| 99  | expresión de cálculo/transformación: document.write("&lt;iframe id='Local' src= "+ certificadopdf + " scrolling=yes frameborder=0 vspace=0 hspace=0 width='100%' height='300' &gt;&lt;/iframe&gt;"); |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 32  | ../../sse_generico/espanol/menu_ess.jsp            |
| 74  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 75  | ../../sse_generico/espanol/generico_links.jsp      |
| 105 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 30  | /css/estilo_sse.css                                |
| 31  | /libreria/funciones_sse.js                         |
| 80  | /iconos/noname_certificado_57_115.gif              |
| 85  | javascript:OpenReport(certificadopdf);             |
| 93  | /iconos/aeat_85_76.gif                             |
| 99  | + certificadopdf +                                 |
| 32  | ../../sse_generico/espanol/menu_ess.jsp            |
| 74  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 75  | ../../sse_generico/espanol/generico_links.jsp      |
| 105 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 31  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 85  | javascript:OpenReport(certificadopdf);             | dinámica   | P06                                                                                                                                                                            |
| COLL   | 99  | + certificadopdf +                                 | dinámica   | P06                                                                                                                                                                            |
| COLL   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 31  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 85  | javascript:OpenReport(certificadopdf);             | dinámica   | P06                                                                                                                                                                            |
| IBER   | 99  | + certificadopdf +                                 | dinámica   | P06                                                                                                                                                                            |
| IBER   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 31  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 85  | javascript:OpenReport(certificadopdf);             | dinámica   | P06                                                                                                                                                                            |
| BASE   | 99  | + certificadopdf +                                 | dinámica   | P06                                                                                                                                                                            |
| BASE   | 32  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 74  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 75  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 105 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_cert_hab.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
