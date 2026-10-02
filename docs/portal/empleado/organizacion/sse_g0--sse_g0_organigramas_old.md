# Organigramas

Identificador: `sse_g0/sse_g0_organigramas_old.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/sse_g0_organigramas_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/sse_g0_organigramas_old.jsp) | `25f0856c9c8572bb0f4cb7b165f926e95c320fc7ec2d53c92c57a8b312dcb089` |    422 |
| CYC / compartido  | [m4custom/CYC/sse_g0/sse_g0_organigramas_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/sse_g0_organigramas_old.jsp)   | `962c3b6ddb402310b8005b7e2d50293ba84196fc63e9e49b6a2ac1fa4d118412` |    388 |
| IBER / compartido | [m4custom/IBER/sse_g0/sse_g0_organigramas_old.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/sse_g0_organigramas_old.jsp) | `25f0856c9c8572bb0f4cb7b165f926e95c320fc7ec2d53c92c57a8b312dcb089` |    422 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/sse_g0_organigramas_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/sse_g0_organigramas_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 30  | Organigramas                                                                                                                 |
| 198 | Estructura / Búsqueda                                                                                                        |
| 202 | Sociedad                                                                                                                     |
| 203 | CYC IBER IBER                                                                                                                |
| 233 | Unidad Organizativa                                                                                                          |
| 234 | Seleccione Unidad Organizativa - "&gt;                                                                                       |
| 263 | Puesto                                                                                                                       |
| 264 | Seleccione Puesto - "&gt;                                                                                                    |
| 293 | Responsable                                                                                                                  |
| 294 | Seleccione Responsable "&gt;                                                                                                 |
| 322 | Tipo                                                                                                                         |
| 323 | Personas y Puestos                                                                                                           |
| 367 | Unidad de Organigrama                                                                                                        |
| 368 | Apellido y Nombre                                                                                                            |
| 369 | Puesto                                                                                                                       |
| 386 | " href="javascript:getVersion('datosCargadosFiltro[valor dinámico]');m4submit('datosCargadosFiltro[valor dinámico]')" &gt;   |
| 391 | " href="javascript:getVersion('datosCargadosFiltro[valor dinámico]');m4submit('datosCargadosFiltro[valor dinámico]')" &gt; , |
| 398 | " href="javascript:getVersion('datosCargadosFiltro[valor dinámico]');m4submit('datosCargadosFiltro[valor dinámico]')" &gt;   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 181 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=sse_g0_organigramas.jsp; accept-charset=ISO-8859-1 |
| 182 | input   | type=hidden; id=unidad; name=unidad; value=                                                                    |
| 183 | input   | type=hidden; id=puesto; name=puesto; value=                                                                    |
| 184 | input   | type=hidden; id=responsable; name=responsable; value=                                                          |
| 185 | input   | type=hidden; id=tipo; name=tipo; value=                                                                        |
| 186 | input   | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt;                                             |
| 187 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                               |
| 201 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=sse_g0_organigramas.jsp; accept-charset=ISO-8859-1 |
| 204 | select  | name=sociedad; id=sociedad; style=width: 450px                                                                 |
| 205 | option  | value=CYC                                                                                                      |
| 207 | option  | value=IBER; selected=                                                                                          |
| 209 | option  | value=IBER                                                                                                     |
| 215 | input   | name=button; type=submit; class=enterlogin; id=btnSociedad; style= background-color: #DC0028;                  |

```
						background-repeat: no-repeat;
						border: 1px solid #DC0028;
						border-radius: 4px;
						color: #FFFFFF;
						margin: 10px;
						max-width: 150px;
						min-height: 20px;
						min-width: 110px;; value=Cargar Sociedad |
```

| 235 | select | name=unidades; id=unidades; style=width: 450px |
| 236 | option | value=00; selected=presente; confirmar condición si dinámico |
| 249 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 265 | select | name=puestos; id=puestos; style=width: 450px |
| 266 | option | value=00; selected=presente; confirmar condición si dinámico |
| 279 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 295 | select | name=responsables; id=responsables; style=width: 450px |
| 296 | option | value=00; selected=presente; confirmar condición si dinámico |
| 309 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 324 | select | name=tipos; id=tipos; style=width: 450px |
| 326 | option | value=2; selected=presente; confirmar condición si dinámico |
| 341 | input | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;
background-repeat: no-repeat;
border: 1px solid #DC0028;
border-radius: 4px;
color: #FFFFFF;
margin: 10px;
max-width: 150px;
min-height: 30px;
min-width: 110px;; value=Búsqueda |
| 377 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp; target=blank |
| 378 | input | type=hidden; id=unidad; name=unidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 379 | input | type=hidden; id=nombreunidad; name=nombreunidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 380 | input | type=hidden; id=tipo; name=tipo; value=&lt;%=tipo%&gt; |
| 382 | input | type=hidden; id=version; name=version; value=&lt;%=zposicions2%&gt; |
| 383 | input | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt; |
| 387 | a | id=organigrama; alt="Ver; m4name=&lt;%=unidadORO%&gt;; htmlsafe=true |
| 392 | a | id=organigrama; alt="Ver; m4name=&lt;%=unidadORO%&gt;; htmlsafe=true |
| 399 | a | id=organigrama; alt="Ver; m4name=&lt;%=unidadORO%&gt;; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 16  | unidad          | getParameter(request,"unidad")      |
| 17  | puesto          | getParameter(request,"puesto")      |
| 18  | responsable     | getParameter(request,"responsable") |
| 19  | tipo            | getParameter(request,"tipo")        |
| 20  | busqueda        | getParameter(request,"busqueda")    |
| 21  | sociedad        | getParameter(request,"sociedad")    |

| L   | Variable               | Expresión fuente                                                                | Resolución estática parcial                                                                                              |
| --- | ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 16  | unidad                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")                                                       |
| 17  | puesto                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                       |
| 18  | responsable            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"responsable")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"responsable")                                                  |
| 19  | tipo                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                                         |
| 20  | busqueda               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                                     |
| 21  | sociedad               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                                     |
| 57  | zsubsesion             | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 58  | zmeta4object           | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 59  | responsables           | "CSP_PERSONAS_RESPONSABLES"                                                     | CSP_PERSONAS_RESPONSABLES                                                                                                |
| 60  | puestos                | "CSP_PUESTOS_RESPONSABLES"                                                      | CSP_PUESTOS_RESPONSABLES                                                                                                 |
| 61  | unidades               | "CSP_UNIDADES_RESPONSABLES"                                                     | CSP_UNIDADES_RESPONSABLES                                                                                                |
| 63  | ztipocarga             | "1"                                                                             | 1                                                                                                                        |
| 64  | zmetodocarga           | zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"                              | CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                   |
| 66  | zoutputdefORO          | zsubsesion + "!" + zsubsesion + "[*]"                                           | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                               |
| 67  | zmoveORO               | zsubsesion + ":" + zsubsesion + "[FIRST]"                                       | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                           |
| 68  | ziteratorORO           | zsubsesion + ":" + zsubsesion + "!" + zsubsesion                                | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                  |
| 69  | zlecturaORO            | zsubsesion + "!" + zsubsesion                                                   | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                                      |
| 70  | zraizORO               | zsubsesion + "!" + zsubsesion + "."                                             | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"."}                                                                                 |
| 72  | zcomunORO              | zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + "."     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}                                         |
| 74  | idUnidadORO            | zcomunORO + "ID_UNIDAD_RAIZ"                                                    | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                       |
| 75  | unidadORO              | zcomunORO + "N_UNIDAD_RAIZ"                                                     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                        |
| 76  | nombreORO              | zcomunORO + "NOMBRE"                                                            | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}                               |
| 77  | apellido2ORO           | zcomunORO + "APELLIDO_2"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}                           |
| 78  | apellido1ORO           | zcomunORO + "APELLIDO_1"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}                           |
| 79  | puestoORO              | zcomunORO + "N_PUESTO"                                                          | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                             |
| 81  | zoutputdefUnidades     | zsubsesion + "!" + unidades + "[*]"                                             | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                     |
| 82  | zmoveUnidades          | unidades + ":" + unidades + "[FIRST]"                                           | CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                       |
| 83  | ziteratorUnidades      | unidades + ":" + zsubsesion + "!" + unidades                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                              |
| 84  | zlecturaUnidades       | zsubsesion + "!" + unidades                                                     | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                                                            |
| 85  | zraizUnidades          | zsubsesion + "!" + unidades + "."                                               | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"."}                                                                       |
| 87  | zcomunUnidades         | unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + "."         | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 89  | personaUnidad          | zcomunUnidades + "SCO_ID_HR"                                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}        |
| 90  | idUnidad               | zcomunUnidades + "STD_ID_WORK_UNIT"                                             | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"} |
| 91  | nombreUnidad           | zcomunUnidades + "STD_N_WORK_UNIT"                                              | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}  |
| 93  | zoutputdefPuestos      | zsubsesion + "!" + puestos + "[*]"                                              | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                      |
| 94  | zmovePuestos           | puestos + ":" + unidades + "[FIRST]"                                            | CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                        |
| 95  | ziteratorPuestos       | puestos + ":" + zsubsesion + "!" + puestos                                      | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                |
| 96  | zlecturaPuestos        | zsubsesion + "!" + puestos                                                      | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                                             |
| 97  | zraizPuestos           | zsubsesion + "!" + puestos + "."                                                | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"."}                                                                        |
| 99  | zcomunPuestos          | puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + "."           | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                       |
| 101 | personaPuesto          | zcomunPuestos + "SCO_ID_HR"                                                     | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}          |
| 102 | idPuesto               | zcomunPuestos + "SCO_ID_JOB_CODE"                                               | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}    |
| 103 | nombrePuesto           | zcomunPuestos + "STD_N_JOB_CODE"                                                | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}     |
| 106 | zoutputdefResponsables | zsubsesion + "!" + responsables + "[*]"                                         | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                     |
| 107 | zmoveResponsables      | responsables + ":" + responsables + "[FIRST]"                                   | CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                       |
| 108 | ziteratorResponsables  | responsables + ":" + zsubsesion + "!" + responsables                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                              |
| 109 | zlecturaResponsables   | zsubsesion + "!" + responsables                                                 | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                                                            |
| 110 | zraizResponsables      | zsubsesion + "!" + responsables + "."                                           | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"."}                                                                       |
| 112 | zcomunResponsables     | responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "." | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 114 | personaResponsable     | zcomunResponsables + "STD_ID_PERSON"                                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}    |
| 115 | nombreResponsable      | zcomunResponsables + "SCO_GB_NAME"                                              | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}      |
| 118 | esRrhh                 | ""                                                                              |                                                                                                                          |
| 157 | zcountiUnidades        | 0                                                                               | 0                                                                                                                        |
| 158 | zcountiPuestos         | 0                                                                               | 0                                                                                                                        |
| 159 | zcountiResponsables    | 0                                                                               | 0                                                                                                                        |
| 160 | zcountiORO             | 0                                                                               | 0                                                                                                                        |
| 171 | zcountvUnidades        | String.valueOf(zcountiUnidades)                                                 | String.valueOf(zcountiUnidades)                                                                                          |
| 172 | zcountvPuestos         | String.valueOf(zcountiPuestos)                                                  | String.valueOf(zcountiPuestos)                                                                                           |
| 173 | zcountvResponsables    | String.valueOf(zcountiResponsables)                                             | String.valueOf(zcountiResponsables)                                                                                      |
| 174 | zcountvORO             | String.valueOf(zcountiORO)                                                      | String.valueOf(zcountiORO)                                                                                               |
| 239 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 240 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 269 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 270 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 299 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 300 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 361 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 362 | zposicion2             | 0                                                                               | 0                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                             |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 121 | m4:startpage | m4task=CSP_ORGANIGRAMA                                                                                                                         |
| 123 | m4:beginjob  |                                                                                                                                                |
| 124 | m4:datadef   | m4o=CSP_ORGANIGRAMA; m4name=CSP_ORGANIGRAMA                                                                                                    |
| 140 | m4:exec      | m4method=CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                                |
| 140 | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                                  |
| 142 | m4:outputdef | m4alias=CSP_ORGANIGRAMA                                                                                                                        |
| 142 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                                 |
| 143 | m4:outputdef | m4alias=CSP_UNIDADES_RESPONSABLES                                                                                                              |
| 143 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                       |
| 144 | m4:outputdef | m4alias=CSP_PUESTOS_RESPONSABLES                                                                                                               |
| 144 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                        |
| 145 | m4:outputdef | m4alias=CSP_PERSONAS_RESPONSABLES                                                                                                              |
| 145 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                       |
| 147 | m4:endjob    |                                                                                                                                                |
| 149 | m4:move      |                                                                                                                                                |
| 149 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                     |
| 150 | m4:move      |                                                                                                                                                |
| 150 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                 |
| 151 | m4:move      |                                                                                                                                                |
| 151 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                  |
| 152 | m4:move      |                                                                                                                                                |
| 152 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                 |
| 242 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvUnidades).intValue()-1).toString()                                                                   |
| 249 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}; htmlsafe=true |
| 249 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 272 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvPuestos).intValue()-1).toString()                                                                    |
| 279 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}; htmlsafe=true    |
| 279 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true     |
| 302 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvResponsables).intValue()-1).toString()                                                               |
| 309 | m4:item      | m4name=CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true      |
| 372 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                                        |
| 388 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}; htmlsafe=true                        |
| 393 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}; htmlsafe=true                           |
| 394 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}; htmlsafe=true                           |
| 395 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}; htmlsafe=true                               |
| 400 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                             |
| 411 | m4:endpage   |                                                                                                                                                |

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 131 | setItem          | zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad           |
| 132 | setItem          | zsubsesion,zsubsesion,"","CSP_P_PUESTO",puesto           |
| 133 | setItem          | zsubsesion,zsubsesion,"","CSP_P_RESPONSABLE",responsable |
| 134 | setItem          | zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo               |
| 135 | setItem          | zsubsesion,zsubsesion,"","CSP_P_SOCIEDAD",sociedad       |
| 164 | getCountInClient | unidades,zsubsesion,unidades                             |
| 165 | getCountInClient | puestos,zsubsesion,puestos                               |
| 166 | getCountInClient | responsables,zsubsesion,responsables                     |
| 167 | getCountInClient | zsubsesion,zsubsesion,zsubsesion                         |
| 168 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_RRHH"            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos        |
| --- | ----------------- | ----------------- |
| 41  | seleccionarOpcion | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22  | if(sociedad == null &#124;&#124; sociedad == ""){                                                                                                 |
| 47  | if (options[i].value == valor) {                                                                                                                  |
| 206 | &lt;% if (sociedad.equals("IBER")) {%&gt;                                                                                                         |
| 208 | &lt;%}else{%&gt;                                                                                                                                  |
| 238 | if (zcountiUnidades &gt; 0) {                                                                                                                     |
| 255 | &lt;% if (unidad != null) {%&gt;                                                                                                                  |
| 268 | if (zcountiPuestos &gt; 0) {                                                                                                                      |
| 285 | &lt;% if (puesto != null) {%&gt;                                                                                                                  |
| 298 | if (zcountiResponsables &gt; 0) {                                                                                                                 |
| 313 | &lt;% if (responsable != null) {%&gt;                                                                                                             |
| 327 | &lt;% if (esRrhh.equals("S") ) {%&gt;                                                                                                             |
| 331 | &lt;% if (tipo != null) {%&gt;                                                                                                                    |
| 360 | &lt;% if (zcountiORO &gt; 0) {                                                                                                                    |
| 406 | &lt;%}else{                                                                                                                                       |
| 407 | if (busqueda != null) {%&gt;                                                                                                                      |
| 64  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA";                                    |
| 66  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + zsubsesion + "[*]";                                                |
| 67  | expresión de cálculo/transformación: String zmoveORO = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                 |
| 68  | expresión de cálculo/transformación: String ziteratorORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion;                                      |
| 69  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + zsubsesion;                                                          |
| 70  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + zsubsesion + ".";                                                       |
| 72  | expresión de cálculo/transformación: String zcomunORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + ".";              |
| 74  | expresión de cálculo/transformación: String idUnidadORO = zcomunORO + "ID_UNIDAD_RAIZ";                                                           |
| 75  | expresión de cálculo/transformación: String unidadORO = zcomunORO + "N_UNIDAD_RAIZ";                                                              |
| 76  | expresión de cálculo/transformación: String nombreORO = zcomunORO + "NOMBRE";                                                                     |
| 77  | expresión de cálculo/transformación: String apellido2ORO = zcomunORO + "APELLIDO_2";                                                              |
| 78  | expresión de cálculo/transformación: String apellido1ORO = zcomunORO + "APELLIDO_1";                                                              |
| 79  | expresión de cálculo/transformación: String puestoORO = zcomunORO + "N_PUESTO";                                                                   |
| 81  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + unidades + "[*]";                                             |
| 82  | expresión de cálculo/transformación: String zmoveUnidades = unidades + ":" + unidades + "[FIRST]";                                                |
| 83  | expresión de cálculo/transformación: String ziteratorUnidades = unidades + ":" + zsubsesion + "!" + unidades;                                     |
| 84  | expresión de cálculo/transformación: String zlecturaUnidades = zsubsesion + "!" + unidades;                                                       |
| 85  | expresión de cálculo/transformación: String zraizUnidades = zsubsesion + "!" + unidades + ".";                                                    |
| 87  | expresión de cálculo/transformación: String zcomunUnidades = unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + ".";             |
| 89  | expresión de cálculo/transformación: String personaUnidad = zcomunUnidades + "SCO_ID_HR";                                                         |
| 90  | expresión de cálculo/transformación: String idUnidad = zcomunUnidades + "STD_ID_WORK_UNIT";                                                       |
| 91  | expresión de cálculo/transformación: String nombreUnidad = zcomunUnidades + "STD_N_WORK_UNIT";                                                    |
| 93  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + puestos + "[*]";                                               |
| 94  | expresión de cálculo/transformación: String zmovePuestos = puestos + ":" + unidades + "[FIRST]";                                                  |
| 95  | expresión de cálculo/transformación: String ziteratorPuestos = puestos + ":" + zsubsesion + "!" + puestos;                                        |
| 96  | expresión de cálculo/transformación: String zlecturaPuestos = zsubsesion + "!" + puestos;                                                         |
| 97  | expresión de cálculo/transformación: String zraizPuestos = zsubsesion + "!" + puestos + ".";                                                      |
| 99  | expresión de cálculo/transformación: String zcomunPuestos = puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + ".";                |
| 101 | expresión de cálculo/transformación: String personaPuesto = zcomunPuestos + "SCO_ID_HR";                                                          |
| 102 | expresión de cálculo/transformación: String idPuesto = zcomunPuestos + "SCO_ID_JOB_CODE";                                                         |
| 103 | expresión de cálculo/transformación: String nombrePuesto = zcomunPuestos + "STD_N_JOB_CODE";                                                      |
| 106 | expresión de cálculo/transformación: String zoutputdefResponsables = zsubsesion + "!" + responsables + "[*]";                                     |
| 107 | expresión de cálculo/transformación: String zmoveResponsables = responsables + ":" + responsables + "[FIRST]";                                    |
| 108 | expresión de cálculo/transformación: String ziteratorResponsables = responsables + ":" + zsubsesion + "!" + responsables;                         |
| 109 | expresión de cálculo/transformación: String zlecturaResponsables = zsubsesion + "!" + responsables;                                               |
| 110 | expresión de cálculo/transformación: String zraizResponsables = zsubsesion + "!" + responsables + ".";                                            |
| 112 | expresión de cálculo/transformación: String zcomunResponsables = responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "."; |
| 114 | expresión de cálculo/transformación: String personaResponsable = zcomunResponsables + "STD_ID_PERSON";                                            |
| 115 | expresión de cálculo/transformación: String nombreResponsable = zcomunResponsables + "SCO_GB_NAME";                                               |
| 198 | expresión de cálculo/transformación: &lt;td colspan="3" &gt;&lt;strong&gt; Estructura / Búsqueda &lt;/strong&gt;&lt;/td&gt;                       |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 32  | /css/estilo_sse.css                                      |
| 33  | /css/bootstrap/css/bootstrap.min.css                     |
| 34  | /library/jquery-3.1.1.min.js                             |
| 35  | /libreria/functions_organigrama.js                       |
| 36  | /libreria/funciones_sse.js                               |
| 37  | /js/bootstrap.min.js                                     |
| 38  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js     |
| 181 | sse_g0_organigramas.jsp                                  |
| 201 | sse_g0_organigramas.jsp                                  |
| 377 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp |
| 387 | javascript:getVersion(                                   |
| 392 | javascript:getVersion(                                   |
| 399 | javascript:getVersion(                                   |

## Versión 2: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/sse_g0/sse_g0_organigramas_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/sse_g0_organigramas_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 27  | Organigramas                                                                                                               |
| 202 | Estructura / Búsqueda                                                                                                      |
| 206 | Unidad Organizativa                                                                                                        |
| 207 | Seleccione Unidad Organizativa - "&gt;                                                                                     |
| 236 | Puesto                                                                                                                     |
| 237 | Seleccione Puesto - "&gt;                                                                                                  |
| 266 | Responsable                                                                                                                |
| 267 | Seleccione Responsable "&gt;                                                                                               |
| 295 | Tipo                                                                                                                       |
| 296 | Personas y Puestos                                                                                                         |
| 340 | Unidad de Organigrama                                                                                                      |
| 341 | Apellido y Nombre                                                                                                          |
| 342 | Puesto                                                                                                                     |
| 358 | " href="javascript:getVersion('datosCargadosFiltro[valor dinámico]');m4submit('datosCargadosFiltro[valor dinámico]')" &gt; |
| 363 | ,                                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 192 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=sse_g0_organigramas.jsp; accept-charset=ISO-8859-1 |
| 193 | input   | type=hidden; id=unidad; name=unidad; value=                                                                    |
| 194 | input   | type=hidden; id=puesto; name=puesto; value=                                                                    |
| 195 | input   | type=hidden; id=responsable; name=responsable; value=                                                          |
| 196 | input   | type=hidden; id=tipo; name=tipo; value=                                                                        |
| 197 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                               |
| 208 | select  | name=unidades; id=unidades; style=width: 450px                                                                 |
| 209 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 222 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 238 | select  | name=puestos; id=puestos; style=width: 450px                                                                   |
| 239 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 252 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 268 | select  | name=responsables; id=responsables; style=width: 450px                                                         |
| 269 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 282 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 297 | select  | name=tipos; id=tipos; style=width: 450px                                                                       |
| 299 | option  | value=2; selected=presente; confirmar condición si dinámico                                                    |
| 314 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;                  |

```
						background-repeat: no-repeat;
						border: 1px solid #DC0028;
						border-radius: 4px;
						color: #FFFFFF;
						margin: 10px;
						max-width: 150px;
						min-height: 30px;
						min-width: 110px;; value=Búsqueda |
```

| 350 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp; target=blank |
| 351 | input | type=hidden; id=unidad; name=unidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 352 | input | type=hidden; id=nombreunidad; name=nombreunidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 353 | input | type=hidden; id=tipo; name=tipo; value=&lt;%=tipo%&gt; |
| 355 | input | type=hidden; id=version; name=version; value=&lt;%=zposicions2%&gt; |
| 359 | a | id=organigrama; alt=Ver organigrama &lt;m4:item m4name=; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 16  | unidad          | getParameter(request,"unidad")      |
| 17  | puesto          | getParameter(request,"puesto")      |
| 18  | responsable     | getParameter(request,"responsable") |
| 19  | tipo            | getParameter(request,"tipo")        |
| 20  | busqueda        | getParameter(request,"busqueda")    |

| L   | Variable               | Expresión fuente                                                                | Resolución estática parcial                                                                                              |
| --- | ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 16  | unidad                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")                                                       |
| 17  | puesto                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                       |
| 18  | responsable            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"responsable")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"responsable")                                                  |
| 19  | tipo                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                                         |
| 20  | busqueda               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                                     |
| 59  | zsubsesion             | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 60  | zmeta4object           | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 61  | responsables           | "CSP_PERSONAS_RESPONSABLES"                                                     | CSP_PERSONAS_RESPONSABLES                                                                                                |
| 62  | puestos                | "CSP_PUESTOS_RESPONSABLES"                                                      | CSP_PUESTOS_RESPONSABLES                                                                                                 |
| 63  | unidades               | "CSP_UNIDADES_RESPONSABLES"                                                     | CSP_UNIDADES_RESPONSABLES                                                                                                |
| 65  | ztipocarga             | "1"                                                                             | 1                                                                                                                        |
| 66  | zmetodocarga           | zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"                              | CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                   |
| 68  | zoutputdefORO          | zsubsesion + "!" + zsubsesion + "[*]"                                           | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                               |
| 69  | zmoveORO               | zsubsesion + ":" + zsubsesion + "[FIRST]"                                       | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                           |
| 70  | ziteratorORO           | zsubsesion + ":" + zsubsesion + "!" + zsubsesion                                | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                  |
| 71  | zlecturaORO            | zsubsesion + "!" + zsubsesion                                                   | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                                      |
| 72  | zraizORO               | zsubsesion + "!" + zsubsesion + "."                                             | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"."}                                                                                 |
| 74  | zcomunORO              | zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + "."     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}                                         |
| 76  | idUnidadORO            | zcomunORO + "ID_UNIDAD_RAIZ"                                                    | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                       |
| 77  | unidadORO              | zcomunORO + "N_UNIDAD_RAIZ"                                                     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                        |
| 78  | nombreORO              | zcomunORO + "NOMBRE"                                                            | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}                               |
| 79  | apellido2ORO           | zcomunORO + "APELLIDO_2"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}                           |
| 80  | apellido1ORO           | zcomunORO + "APELLIDO_1"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}                           |
| 81  | puestoORO              | zcomunORO + "N_PUESTO"                                                          | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                             |
| 83  | zoutputdefUnidades     | zsubsesion + "!" + unidades + "[*]"                                             | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                     |
| 84  | zmoveUnidades          | unidades + ":" + unidades + "[FIRST]"                                           | CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                       |
| 85  | ziteratorUnidades      | unidades + ":" + zsubsesion + "!" + unidades                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                              |
| 86  | zlecturaUnidades       | zsubsesion + "!" + unidades                                                     | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                                                            |
| 87  | zraizUnidades          | zsubsesion + "!" + unidades + "."                                               | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"."}                                                                       |
| 89  | zcomunUnidades         | unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + "."         | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 91  | personaUnidad          | zcomunUnidades + "SCO_ID_HR"                                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}        |
| 92  | idUnidad               | zcomunUnidades + "STD_ID_WORK_UNIT"                                             | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"} |
| 93  | nombreUnidad           | zcomunUnidades + "STD_N_WORK_UNIT"                                              | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}  |
| 95  | zoutputdefPuestos      | zsubsesion + "!" + puestos + "[*]"                                              | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                      |
| 96  | zmovePuestos           | puestos + ":" + unidades + "[FIRST]"                                            | CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                        |
| 97  | ziteratorPuestos       | puestos + ":" + zsubsesion + "!" + puestos                                      | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                |
| 98  | zlecturaPuestos        | zsubsesion + "!" + puestos                                                      | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                                             |
| 99  | zraizPuestos           | zsubsesion + "!" + puestos + "."                                                | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"."}                                                                        |
| 101 | zcomunPuestos          | puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + "."           | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                       |
| 103 | personaPuesto          | zcomunPuestos + "SCO_ID_HR"                                                     | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}          |
| 104 | idPuesto               | zcomunPuestos + "SCO_ID_JOB_CODE"                                               | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}    |
| 105 | nombrePuesto           | zcomunPuestos + "STD_N_JOB_CODE"                                                | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}     |
| 108 | zoutputdefResponsables | zsubsesion + "!" + responsables + "[*]"                                         | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                     |
| 109 | zmoveResponsables      | responsables + ":" + responsables + "[FIRST]"                                   | CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                       |
| 110 | ziteratorResponsables  | responsables + ":" + zsubsesion + "!" + responsables                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                              |
| 111 | zlecturaResponsables   | zsubsesion + "!" + responsables                                                 | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                                                            |
| 112 | zraizResponsables      | zsubsesion + "!" + responsables + "."                                           | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"."}                                                                       |
| 114 | zcomunResponsables     | responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "." | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 116 | personaResponsable     | zcomunResponsables + "STD_ID_PERSON"                                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}    |
| 117 | nombreResponsable      | zcomunResponsables + "SCO_GB_NAME"                                              | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}      |
| 120 | esRrhh                 | ""                                                                              |                                                                                                                          |
| 168 | zcountiUnidades        | 0                                                                               | 0                                                                                                                        |
| 169 | zcountiPuestos         | 0                                                                               | 0                                                                                                                        |
| 170 | zcountiResponsables    | 0                                                                               | 0                                                                                                                        |
| 171 | zcountiORO             | 0                                                                               | 0                                                                                                                        |
| 182 | zcountvUnidades        | String.valueOf(zcountiUnidades)                                                 | String.valueOf(zcountiUnidades)                                                                                          |
| 183 | zcountvPuestos         | String.valueOf(zcountiPuestos)                                                  | String.valueOf(zcountiPuestos)                                                                                           |
| 184 | zcountvResponsables    | String.valueOf(zcountiResponsables)                                             | String.valueOf(zcountiResponsables)                                                                                      |
| 185 | zcountvORO             | String.valueOf(zcountiORO)                                                      | String.valueOf(zcountiORO)                                                                                               |
| 212 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 213 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 242 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 243 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 272 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 273 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 334 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 335 | zposicion2             | 0                                                                               | 0                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                             |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 123 | m4:startpage | m4task=CSP_ORGANIGRAMA                                                                                                                         |
| 125 | m4:beginjob  |                                                                                                                                                |
| 126 | m4:datadef   | m4o=CSP_ORGANIGRAMA; m4name=CSP_ORGANIGRAMA                                                                                                    |
| 142 | m4:exec      | m4method=CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                                |
| 144 | m4:outputdef | m4alias=CSP_ORGANIGRAMA                                                                                                                        |
| 144 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                                 |
| 145 | m4:outputdef | m4alias=CSP_UNIDADES_RESPONSABLES                                                                                                              |
| 145 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                       |
| 146 | m4:outputdef | m4alias=CSP_PUESTOS_RESPONSABLES                                                                                                               |
| 146 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                        |
| 147 | m4:outputdef | m4alias=CSP_PERSONAS_RESPONSABLES                                                                                                              |
| 147 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                       |
| 149 | m4:endjob    |                                                                                                                                                |
| 151 | m4:move      |                                                                                                                                                |
| 151 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                     |
| 152 | m4:move      |                                                                                                                                                |
| 152 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                 |
| 153 | m4:move      |                                                                                                                                                |
| 153 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                  |
| 154 | m4:move      |                                                                                                                                                |
| 154 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                 |
| 215 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvUnidades).intValue()-1).toString()                                                                   |
| 222 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}; htmlsafe=true |
| 222 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 245 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvPuestos).intValue()-1).toString()                                                                    |
| 252 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}; htmlsafe=true    |
| 252 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true     |
| 275 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvResponsables).intValue()-1).toString()                                                               |
| 282 | m4:item      | m4name=CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true      |
| 345 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                                        |
| 360 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}; htmlsafe=true                        |
| 364 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}; htmlsafe=true                           |
| 365 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}; htmlsafe=true                           |
| 366 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}; htmlsafe=true                               |
| 368 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                             |
| 377 | m4:endpage   |                                                                                                                                                |

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 133 | setItem          | zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad           |
| 134 | setItem          | zsubsesion,zsubsesion,"","CSP_P_PUESTO",puesto           |
| 135 | setItem          | zsubsesion,zsubsesion,"","CSP_P_RESPONSABLE",responsable |
| 136 | setItem          | zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo               |
| 175 | getCountInClient | unidades,zsubsesion,unidades                             |
| 176 | getCountInClient | puestos,zsubsesion,puestos                               |
| 177 | getCountInClient | responsables,zsubsesion,responsables                     |
| 178 | getCountInClient | zsubsesion,zsubsesion,zsubsesion                         |
| 179 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_RRHH"            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos        |
| --- | ----------------- | ----------------- |
| 37  | seleccionarOpcion | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43  | if (options[i].value == valor) {                                                                                                                  |
| 211 | if (zcountiUnidades &gt; 0) {                                                                                                                     |
| 228 | &lt;% if (unidad != null) {%&gt;                                                                                                                  |
| 241 | if (zcountiPuestos &gt; 0) {                                                                                                                      |
| 258 | &lt;% if (puesto != null) {%&gt;                                                                                                                  |
| 271 | if (zcountiResponsables &gt; 0) {                                                                                                                 |
| 286 | &lt;% if (responsable != null) {%&gt;                                                                                                             |
| 300 | &lt;% if (esRrhh.equals("S") ) {%&gt;                                                                                                             |
| 304 | &lt;% if (tipo != null) {%&gt;                                                                                                                    |
| 333 | &lt;% if (zcountiORO &gt; 0) {                                                                                                                    |
| 372 | &lt;%}else{                                                                                                                                       |
| 373 | if (busqueda != null) {%&gt;                                                                                                                      |
| 66  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA";                                    |
| 68  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + zsubsesion + "[*]";                                                |
| 69  | expresión de cálculo/transformación: String zmoveORO = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                 |
| 70  | expresión de cálculo/transformación: String ziteratorORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion;                                      |
| 71  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + zsubsesion;                                                          |
| 72  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + zsubsesion + ".";                                                       |
| 74  | expresión de cálculo/transformación: String zcomunORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + ".";              |
| 76  | expresión de cálculo/transformación: String idUnidadORO = zcomunORO + "ID_UNIDAD_RAIZ";                                                           |
| 77  | expresión de cálculo/transformación: String unidadORO = zcomunORO + "N_UNIDAD_RAIZ";                                                              |
| 78  | expresión de cálculo/transformación: String nombreORO = zcomunORO + "NOMBRE";                                                                     |
| 79  | expresión de cálculo/transformación: String apellido2ORO = zcomunORO + "APELLIDO_2";                                                              |
| 80  | expresión de cálculo/transformación: String apellido1ORO = zcomunORO + "APELLIDO_1";                                                              |
| 81  | expresión de cálculo/transformación: String puestoORO = zcomunORO + "N_PUESTO";                                                                   |
| 83  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + unidades + "[*]";                                             |
| 84  | expresión de cálculo/transformación: String zmoveUnidades = unidades + ":" + unidades + "[FIRST]";                                                |
| 85  | expresión de cálculo/transformación: String ziteratorUnidades = unidades + ":" + zsubsesion + "!" + unidades;                                     |
| 86  | expresión de cálculo/transformación: String zlecturaUnidades = zsubsesion + "!" + unidades;                                                       |
| 87  | expresión de cálculo/transformación: String zraizUnidades = zsubsesion + "!" + unidades + ".";                                                    |
| 89  | expresión de cálculo/transformación: String zcomunUnidades = unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + ".";             |
| 91  | expresión de cálculo/transformación: String personaUnidad = zcomunUnidades + "SCO_ID_HR";                                                         |
| 92  | expresión de cálculo/transformación: String idUnidad = zcomunUnidades + "STD_ID_WORK_UNIT";                                                       |
| 93  | expresión de cálculo/transformación: String nombreUnidad = zcomunUnidades + "STD_N_WORK_UNIT";                                                    |
| 95  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + puestos + "[*]";                                               |
| 96  | expresión de cálculo/transformación: String zmovePuestos = puestos + ":" + unidades + "[FIRST]";                                                  |
| 97  | expresión de cálculo/transformación: String ziteratorPuestos = puestos + ":" + zsubsesion + "!" + puestos;                                        |
| 98  | expresión de cálculo/transformación: String zlecturaPuestos = zsubsesion + "!" + puestos;                                                         |
| 99  | expresión de cálculo/transformación: String zraizPuestos = zsubsesion + "!" + puestos + ".";                                                      |
| 101 | expresión de cálculo/transformación: String zcomunPuestos = puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + ".";                |
| 103 | expresión de cálculo/transformación: String personaPuesto = zcomunPuestos + "SCO_ID_HR";                                                          |
| 104 | expresión de cálculo/transformación: String idPuesto = zcomunPuestos + "SCO_ID_JOB_CODE";                                                         |
| 105 | expresión de cálculo/transformación: String nombrePuesto = zcomunPuestos + "STD_N_JOB_CODE";                                                      |
| 108 | expresión de cálculo/transformación: String zoutputdefResponsables = zsubsesion + "!" + responsables + "[*]";                                     |
| 109 | expresión de cálculo/transformación: String zmoveResponsables = responsables + ":" + responsables + "[FIRST]";                                    |
| 110 | expresión de cálculo/transformación: String ziteratorResponsables = responsables + ":" + zsubsesion + "!" + responsables;                         |
| 111 | expresión de cálculo/transformación: String zlecturaResponsables = zsubsesion + "!" + responsables;                                               |
| 112 | expresión de cálculo/transformación: String zraizResponsables = zsubsesion + "!" + responsables + ".";                                            |
| 114 | expresión de cálculo/transformación: String zcomunResponsables = responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "."; |
| 116 | expresión de cálculo/transformación: String personaResponsable = zcomunResponsables + "STD_ID_PERSON";                                            |
| 117 | expresión de cálculo/transformación: String nombreResponsable = zcomunResponsables + "SCO_GB_NAME";                                               |
| 159 | expresión de cálculo/transformación: var valores_cabecera = "-- valores recibidos por get pagina --" + "\n";                                      |
| 160 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"unidad :" + '&lt;%=unidad%&gt;' + "\n";                                |
| 161 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"puesto :" + '&lt;%=puesto%&gt;' + "\n";                                |
| 162 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"responsable :" + '&lt;%=responsable%&gt;' + "\n";                      |
| 163 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"tipo :" + '&lt;%=tipo%&gt;' + "\n";                                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 29  | /css/estilo_sse.css                                      |
| 31  | /library/jquery.js                                       |
| 32  | /libreria/functions_organigrama.js                       |
| 33  | /libreria/funciones_sse.js                               |
| 192 | sse_g0_organigramas.jsp                                  |
| 350 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp |
| 359 | javascript:getVersion(                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 34  | /library/jquery-3.1.1.min.js                             | contextual | &#96;library/jquery-3.1.1.min.js&#96;                                                                                                                                          |
| COLL   | 35  | /libreria/functions_organigrama.js                       | contextual | [libreria/functions_organigrama.js](../../transversal/dependencias/libreria--functions_organigrama.md)                                                                         |
| COLL   | 36  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 37  | /js/bootstrap.min.js                                     | contextual | &#96;js/bootstrap.min.js&#96;                                                                                                                                                  |
| COLL   | 38  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js     | externa    | destino externo                                                                                                                                                                |
| COLL   | 181 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| COLL   | 201 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| COLL   | 377 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp | contextual | [sse_g0/sse_g0_organigrama.jsp](sse_g0--sse_g0_organigrama.md)                                                                                                                 |
| COLL   | 387 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 392 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 399 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 31  | /library/jquery.js                                       | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 32  | /libreria/functions_organigrama.js                       | contextual | [libreria/functions_organigrama.js](../../transversal/dependencias/libreria--functions_organigrama.md)                                                                         |
| CYC    | 33  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 192 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| CYC    | 350 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp | contextual | [sse_g0/sse_g0_organigrama.jsp](sse_g0--sse_g0_organigrama.md)                                                                                                                 |
| CYC    | 359 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 34  | /library/jquery-3.1.1.min.js                             | contextual | &#96;library/jquery-3.1.1.min.js&#96;                                                                                                                                          |
| IBER   | 35  | /libreria/functions_organigrama.js                       | contextual | [libreria/functions_organigrama.js](../../transversal/dependencias/libreria--functions_organigrama.md)                                                                         |
| IBER   | 36  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 37  | /js/bootstrap.min.js                                     | contextual | &#96;js/bootstrap.min.js&#96;                                                                                                                                                  |
| IBER   | 38  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js     | externa    | destino externo                                                                                                                                                                |
| IBER   | 181 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| IBER   | 201 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| IBER   | 377 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp | contextual | [sse_g0/sse_g0_organigrama.jsp](sse_g0--sse_g0_organigrama.md)                                                                                                                 |
| IBER   | 387 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 392 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 399 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_organigramas_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
