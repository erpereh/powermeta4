# sse_g2_p8_act

Identificador: `sse_g2/sse_g2_p8_act.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                          | Ámbito | Diccionario                                                                         |
| ------------------- | ------------------------------ | ------ | ----------------------------------------------------------------------------------- |
| bft_ess.BenefitsDep | Beneficios para los familiares | BASE   | [translations/ess_bft_es.properties:L13](../../referencias/literales/ess_bft_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p8_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p8_act.jsp) | `5cbef5a9843fdcbd76c84e20bfc2cf5b8e6fedaef3c172382aecd8c34efe8a45` |    132 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p8_act.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p8_act.jsp) | `5cbef5a9843fdcbd76c84e20bfc2cf5b8e6fedaef3c172382aecd8c34efe8a45` |    132 |
| BASE / español    | [sse_g2/espanol/sse_g2_p8_act.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p8_act.jsp)                             | `5cbef5a9843fdcbd76c84e20bfc2cf5b8e6fedaef3c172382aecd8c34efe8a45` |    132 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p8_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p8_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                 |
| --- | ------- | ----------------------------------------------------------------------------------------- |
| 106 | form    | action=&lt;%=zredireccion%&gt;; method=post; name=BENEFIT; id=BENEFIT                     |
| 107 | input   | type=hidden; id=SUS_ID_PLAN; name=SUS_ID_PLAN; value=&lt;%=vPlan%&gt;                     |
| 108 | input   | type=hidden; id=SUS_OR_H_EE_BNFT; name=SUS_OR_H_EE_BNFT; value=&lt;%=vOrPlan%&gt;         |
| 109 | input   | type=hidden; id=SUS_ID_HR; name=SUS_ID_HR; value=&lt;%=vIdHr%&gt;                         |
| 110 | input   | type=hidden; id=SUS_OR_HR_PERIOD; name=SUS_OR_HR_PERIOD; value=&lt;%=vOrPeriod%&gt;       |
| 111 | input   | type=hidden; id=SUS_DT_START; name=SUS_DT_START; value=&lt;%=vDtStart%&gt;                |
| 112 | input   | type=hidden; id=SUS_DT_END; name=SUS_DT_END; value=&lt;%=vDtEnd%&gt;                      |
| 113 | input   | type=hidden; id=SUS_ID_OPTION; name=SUS_ID_OPTION; value=&lt;%=vOption%&gt;               |
| 114 | input   | type=hidden; id=SUS_ID_COV_CAT; name=SUS_ID_COV_CAT; value=&lt;%=vCovCat%&gt;             |
| 115 | input   | type=hidden; id=SUS_MAX_COV; name=SUS_MAX_COV; value=&lt;%=vMaxCov%&gt;                   |
| 116 | input   | type=hidden; id=vNameBenefit; name=vNameBenefit; value=&lt;%=vNameBenefit%&gt;            |
| 117 | input   | type=hidden; id=vPosition; name=vPosition; value=&lt;%=vPosition%&gt;                     |
| 118 | input   | type=hidden; id=SUS_ID_PLAN_PERIOD; name=SUS_ID_PLAN_PERIOD; value=&lt;%=vPlanPeriod%&gt; |

### Contexto, entradas y valores construidos

| L   | Entrada / clave    | Acceso literal                  |
| --- | ------------------ | ------------------------------- |
| 20  | SUS_ID_PLAN        | zhash.get("SUS_ID_PLAN")        |
| 22  | SUS_OR_H_EE_BNFT   | zhash.get("SUS_OR_H_EE_BNFT")   |
| 24  | SUS_ID_HR          | zhash.get("SUS_ID_HR")          |
| 26  | SUS_OR_HR_PERIOD   | zhash.get("SUS_OR_HR_PERIOD")   |
| 28  | SUS_DT_START       | zhash.get("SUS_DT_START")       |
| 30  | SUS_DT_END         | zhash.get("SUS_DT_END")         |
| 32  | SUS_ID_OPTION      | zhash.get("SUS_ID_OPTION")      |
| 34  | SUS_ID_COV_CAT     | zhash.get("SUS_ID_COV_CAT")     |
| 36  | SUS_MAX_COV        | zhash.get("SUS_MAX_COV")        |
| 38  | vNameBenefit       | zhash.get("vNameBenefit")       |
| 40  | vPosition          | zhash.get("vPosition")          |
| 42  | SUS_ID_PLAN_PERIOD | zhash.get("SUS_ID_PLAN_PERIOD") |
| 45  | TAG                | zhash.get("TAG")                |
| 48  | REC                | zhash.get("REC")                |
| 50  | ACC                | zhash.get("ACC")                |
| 51  | ACC                | zhash.get("ACC")                |
| 53  | NOD                | zhash.get("NOD")                |
| 55  | PK                 | zhash.get("PK")                 |

| L   | Variable     | Expresión fuente                          | Resolución estática parcial                                   |
| --- | ------------ | ----------------------------------------- | ------------------------------------------------------------- |
| 10  | nombre       | ""                                        |                                                               |
| 11  | valor        | ""                                        |                                                               |
| 19  | zparametro   | ""                                        |                                                               |
| 20  | vPlan        | (String)zhash.get("SUS_ID_PLAN")          | (String)zhash.get("SUS_ID_PLAN")                              |
| 22  | vOrPlan      | (String)zhash.get("SUS_OR_H_EE_BNFT")     | (String)zhash.get("SUS_OR_H_EE_BNFT")                         |
| 24  | vIdHr        | (String)zhash.get("SUS_ID_HR")            | (String)zhash.get("SUS_ID_HR")                                |
| 26  | vOrPeriod    | (String)zhash.get("SUS_OR_HR_PERIOD")     | (String)zhash.get("SUS_OR_HR_PERIOD")                         |
| 28  | vDtStart     | (String)zhash.get("SUS_DT_START")         | (String)zhash.get("SUS_DT_START")                             |
| 30  | vDtEnd       | (String)zhash.get("SUS_DT_END")           | (String)zhash.get("SUS_DT_END")                               |
| 32  | vOption      | (String)zhash.get("SUS_ID_OPTION")        | (String)zhash.get("SUS_ID_OPTION")                            |
| 34  | vCovCat      | (String)zhash.get("SUS_ID_COV_CAT")       | (String)zhash.get("SUS_ID_COV_CAT")                           |
| 36  | vMaxCov      | (String)zhash.get("SUS_MAX_COV")          | (String)zhash.get("SUS_MAX_COV")                              |
| 38  | vNameBenefit | (String)zhash.get("vNameBenefit")         | (String)zhash.get("vNameBenefit")                             |
| 40  | vPosition    | (String)zhash.get("vPosition")            | (String)zhash.get("vPosition")                                |
| 42  | vPlanPeriod  | (String)zhash.get("SUS_ID_PLAN_PERIOD")   | (String)zhash.get("SUS_ID_PLAN_PERIOD")                       |
| 45  | zsubsesion   | (String)zhash.get("TAG")                  | (String)zhash.get("TAG")                                      |
| 51  | zAccion      | ((String)zhash.get("ACC"))                | ((String)zhash.get("ACC"))                                    |
| 67  | zmeta4object | zsubsesion                                | (String)zhash.get("TAG")                                      |
| 68  | znodo        | "SSE_DEP_BENE_COV"                        | SSE_DEP_BENE_COV                                              |
| 69  | znodo2       | "SSE_COMUNICACION"                        | SSE_COMUNICACION                                              |
| 70  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"         | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}          |
| 71  | zmetodo      | zsubsesion + "!" + znodo + ".SSE_GESTION" | (String)zhash.get("TAG"){"!"}SSE_DEP_BENE_COV{".SSE_GESTION"} |
| 72  | zraiz        | zsubsesion + "!" + znodo2 + "."           | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}            |
| 90  | zerror       | "0"                                       | 0                                                             |
| 91  | zredireccion | ""                                        |                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 84  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 84  | m4:beginjob  |                                                                          |
| 85  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 86  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_DEP_BENE_COV{".SSE_GESTION"}   |
| 86  | m4:param     | name=GESTION_ARG; value=                                                 |
| 87  | m4:outputdef | m4alias=SSE_DEP_BENE_COV                                                 |
| 87  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 88  | m4:endjob    |                                                                          |
| 131 | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 94  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 95  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 79  | navegar |            |

| L   | Condición / acción / mensaje literal                                                             |
| --- | ------------------------------------------------------------------------------------------------ |
| 73  | if (zAccion.equals("BORRAR")) {                                                                  |
| 98  | if ((zredireccion==null)){                                                                       |
| 100 | }else{                                                                                           |
| 70  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";      |
| 71  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION"; |
| 72  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";             |
| 75  | expresión de cálculo/transformación: zmetodo = zsubsesion + "!" + znodo + ".GESTION";            |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 8   | /sse_g2/sse_bft_trans.jsp                                 |
| 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 5   | /css/estilo_sse.css                                       |
| 6   | /libreria/funciones_sse.js                                |
| 106 | &lt;%=zredireccion%&gt;                                   |
| 122 | /css/estilo_sse.css                                       |
| 123 | /libreria/funciones_sse.js                                |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                   |
| 8   | /sse_g2/sse_bft_trans.jsp                                 |
| 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| COLL   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 106 | &lt;%=zredireccion%&gt;                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 123 | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| COLL   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| IBER   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 106 | &lt;%=zredireccion%&gt;                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 123 | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md); [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                     |
| IBER   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                                                                           |
| BASE   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 6   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 106 | &lt;%=zredireccion%&gt;                                   | dinámica   | P06                                                                                                                                                                            |
| BASE   | 123 | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 8   | /sse_g2/sse_bft_trans.jsp                                 | contextual | [sse_g2/sse_bft_trans.jsp](sse_g2--sse_bft_trans.md)                                                                                                                           |
| BASE   | 127 | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p8_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
