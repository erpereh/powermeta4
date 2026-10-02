# Organigramas

Identificador: `sse_g0/sse_g0_organigramas_old_old.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/sse_g0_organigramas_old_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/sse_g0_organigramas_old_old.jsp) | `d49b626f34cda2c27aa2122f0c7d4795056eeff724daa8c7bacad4a0a60b5771` |    382 |
| IBER / compartido | [m4custom/IBER/sse_g0/sse_g0_organigramas_old_old.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/sse_g0_organigramas_old_old.jsp) | `d49b626f34cda2c27aa2122f0c7d4795056eeff724daa8c7bacad4a0a60b5771` |    382 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/sse_g0_organigramas_old_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/sse_g0_organigramas_old_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 27  | Organigramas                                                                                                               |
| 196 | Estructura / Búsqueda                                                                                                      |
| 200 | Unidad Organizativa                                                                                                        |
| 201 | Seleccione Unidad Organizativa - "&gt;                                                                                     |
| 230 | Puesto                                                                                                                     |
| 231 | Seleccione Puesto - "&gt;                                                                                                  |
| 260 | Responsable                                                                                                                |
| 261 | Seleccione Responsable "&gt;                                                                                               |
| 289 | Tipo                                                                                                                       |
| 290 | Estructura Personas y Puestos                                                                                              |
| 334 | Unidad de Organigrama                                                                                                      |
| 335 | Apellido y Nombre                                                                                                          |
| 336 | Puesto                                                                                                                     |
| 352 | " href="javascript:getVersion('datosCargadosFiltro[valor dinámico]');m4submit('datosCargadosFiltro[valor dinámico]')" &gt; |
| 357 | ,                                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 186 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=sse_g0_organigramas.jsp; accept-charset=ISO-8859-1 |
| 187 | input   | type=hidden; id=unidad; name=unidad; value=                                                                    |
| 188 | input   | type=hidden; id=puesto; name=puesto; value=                                                                    |
| 189 | input   | type=hidden; id=responsable; name=responsable; value=                                                          |
| 190 | input   | type=hidden; id=tipo; name=tipo; value=                                                                        |
| 191 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                               |
| 202 | select  | name=unidades; id=unidades; style=width: 450px                                                                 |
| 203 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 216 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 232 | select  | name=puestos; id=puestos; style=width: 450px                                                                   |
| 233 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 246 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 262 | select  | name=responsables; id=responsables; style=width: 450px                                                         |
| 263 | option  | value=00; selected=presente; confirmar condición si dinámico                                                   |
| 276 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                       |
| 291 | select  | name=tipos; id=tipos; style=width: 450px                                                                       |
| 292 | option  | value=1                                                                                                        |
| 293 | option  | value=2; selected=presente; confirmar condición si dinámico                                                    |
| 308 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;                  |

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

| 344 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp; target=blank |
| 345 | input | type=hidden; id=unidad; name=unidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 346 | input | type=hidden; id=nombreunidad; name=nombreunidad; value=&lt;m4:item m4name=; htmlsafe=true |
| 347 | input | type=hidden; id=tipo; name=tipo; value=&lt;%=tipo%&gt; |
| 349 | input | type=hidden; id=version; name=version; value=&lt;%=zposicions2%&gt; |
| 353 | a | id=organigrama; alt=Ver organigrama &lt;m4:item m4name=; htmlsafe=true |

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
| 53  | zsubsesion             | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 54  | zmeta4object           | "CSP_ORGANIGRAMA"                                                               | CSP_ORGANIGRAMA                                                                                                          |
| 55  | responsables           | "CSP_PERSONAS_RESPONSABLES"                                                     | CSP_PERSONAS_RESPONSABLES                                                                                                |
| 56  | puestos                | "CSP_PUESTOS_RESPONSABLES"                                                      | CSP_PUESTOS_RESPONSABLES                                                                                                 |
| 57  | unidades               | "CSP_UNIDADES_RESPONSABLES"                                                     | CSP_UNIDADES_RESPONSABLES                                                                                                |
| 59  | ztipocarga             | "1"                                                                             | 1                                                                                                                        |
| 60  | zmetodocarga           | zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"                              | CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                   |
| 62  | zoutputdefORO          | zsubsesion + "!" + zsubsesion + "[*]"                                           | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                               |
| 63  | zmoveORO               | zsubsesion + ":" + zsubsesion + "[FIRST]"                                       | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                           |
| 64  | ziteratorORO           | zsubsesion + ":" + zsubsesion + "!" + zsubsesion                                | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                  |
| 65  | zlecturaORO            | zsubsesion + "!" + zsubsesion                                                   | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA                                                                                      |
| 66  | zraizORO               | zsubsesion + "!" + zsubsesion + "."                                             | CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"."}                                                                                 |
| 68  | zcomunORO              | zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + "."     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}                                         |
| 70  | idUnidadORO            | zcomunORO + "ID_UNIDAD_RAIZ"                                                    | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                       |
| 71  | unidadORO              | zcomunORO + "N_UNIDAD_RAIZ"                                                     | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                        |
| 72  | nombreORO              | zcomunORO + "NOMBRE"                                                            | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}                               |
| 73  | apellido2ORO           | zcomunORO + "APELLIDO_2"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}                           |
| 74  | apellido1ORO           | zcomunORO + "APELLIDO_1"                                                        | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}                           |
| 75  | puestoORO              | zcomunORO + "N_PUESTO"                                                          | CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                             |
| 77  | zoutputdefUnidades     | zsubsesion + "!" + unidades + "[*]"                                             | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                     |
| 78  | zmoveUnidades          | unidades + ":" + unidades + "[FIRST]"                                           | CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                       |
| 79  | ziteratorUnidades      | unidades + ":" + zsubsesion + "!" + unidades                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                              |
| 80  | zlecturaUnidades       | zsubsesion + "!" + unidades                                                     | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES                                                                            |
| 81  | zraizUnidades          | zsubsesion + "!" + unidades + "."                                               | CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"."}                                                                       |
| 83  | zcomunUnidades         | unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + "."         | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 85  | personaUnidad          | zcomunUnidades + "SCO_ID_HR"                                                    | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}        |
| 86  | idUnidad               | zcomunUnidades + "STD_ID_WORK_UNIT"                                             | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"} |
| 87  | nombreUnidad           | zcomunUnidades + "STD_N_WORK_UNIT"                                              | CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}  |
| 89  | zoutputdefPuestos      | zsubsesion + "!" + puestos + "[*]"                                              | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                      |
| 90  | zmovePuestos           | puestos + ":" + unidades + "[FIRST]"                                            | CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                        |
| 91  | ziteratorPuestos       | puestos + ":" + zsubsesion + "!" + puestos                                      | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                |
| 92  | zlecturaPuestos        | zsubsesion + "!" + puestos                                                      | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES                                                                             |
| 93  | zraizPuestos           | zsubsesion + "!" + puestos + "."                                                | CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"."}                                                                        |
| 95  | zcomunPuestos          | puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + "."           | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                       |
| 97  | personaPuesto          | zcomunPuestos + "SCO_ID_HR"                                                     | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}          |
| 98  | idPuesto               | zcomunPuestos + "SCO_ID_JOB_CODE"                                               | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}    |
| 99  | nombrePuesto           | zcomunPuestos + "STD_N_JOB_CODE"                                                | CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}     |
| 102 | zoutputdefResponsables | zsubsesion + "!" + responsables + "[*]"                                         | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                     |
| 103 | zmoveResponsables      | responsables + ":" + responsables + "[FIRST]"                                   | CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                       |
| 104 | ziteratorResponsables  | responsables + ":" + zsubsesion + "!" + responsables                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                              |
| 105 | zlecturaResponsables   | zsubsesion + "!" + responsables                                                 | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES                                                                            |
| 106 | zraizResponsables      | zsubsesion + "!" + responsables + "."                                           | CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"."}                                                                       |
| 108 | zcomunResponsables     | responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "." | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}                     |
| 110 | personaResponsable     | zcomunResponsables + "STD_ID_PERSON"                                            | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}    |
| 111 | nombreResponsable      | zcomunResponsables + "SCO_GB_NAME"                                              | CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}      |
| 114 | esRrhh                 | ""                                                                              |                                                                                                                          |
| 162 | zcountiUnidades        | 0                                                                               | 0                                                                                                                        |
| 163 | zcountiPuestos         | 0                                                                               | 0                                                                                                                        |
| 164 | zcountiResponsables    | 0                                                                               | 0                                                                                                                        |
| 165 | zcountiORO             | 0                                                                               | 0                                                                                                                        |
| 176 | zcountvUnidades        | String.valueOf(zcountiUnidades)                                                 | String.valueOf(zcountiUnidades)                                                                                          |
| 177 | zcountvPuestos         | String.valueOf(zcountiPuestos)                                                  | String.valueOf(zcountiPuestos)                                                                                           |
| 178 | zcountvResponsables    | String.valueOf(zcountiResponsables)                                             | String.valueOf(zcountiResponsables)                                                                                      |
| 179 | zcountvORO             | String.valueOf(zcountiORO)                                                      | String.valueOf(zcountiORO)                                                                                               |
| 206 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 207 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 236 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 237 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 266 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 267 | zposicion2             | 0                                                                               | 0                                                                                                                        |
| 328 | zposicions2            | "0"                                                                             | 0                                                                                                                        |
| 329 | zposicion2             | 0                                                                               | 0                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                             |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:startpage | m4task=CSP_ORGANIGRAMA                                                                                                                         |
| 119 | m4:beginjob  |                                                                                                                                                |
| 120 | m4:datadef   | m4o=CSP_ORGANIGRAMA; m4name=CSP_ORGANIGRAMA                                                                                                    |
| 136 | m4:exec      | m4method=CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA"}                                                                                |
| 138 | m4:outputdef | m4alias=CSP_ORGANIGRAMA                                                                                                                        |
| 138 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[*]"}                                                                                 |
| 139 | m4:outputdef | m4alias=CSP_UNIDADES_RESPONSABLES                                                                                                              |
| 139 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[*]"}                                                                       |
| 140 | m4:outputdef | m4alias=CSP_PUESTOS_RESPONSABLES                                                                                                               |
| 140 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[*]"}                                                                        |
| 141 | m4:outputdef | m4alias=CSP_PERSONAS_RESPONSABLES                                                                                                              |
| 141 | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[*]"}                                                                       |
| 143 | m4:endjob    |                                                                                                                                                |
| 145 | m4:move      |                                                                                                                                                |
| 145 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"[FIRST]"}                                                                     |
| 146 | m4:move      |                                                                                                                                                |
| 146 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_UNIDADES_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                 |
| 147 | m4:move      |                                                                                                                                                |
| 147 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PUESTOS_RESPONSABLES{":"}CSP_UNIDADES_RESPONSABLES{"[FIRST]"}                                                  |
| 148 | m4:move      |                                                                                                                                                |
| 148 | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_PERSONAS_RESPONSABLES{":"}CSP_PERSONAS_RESPONSABLES{"[FIRST]"}                                                 |
| 209 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvUnidades).intValue()-1).toString()                                                                   |
| 216 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}; htmlsafe=true |
| 216 | m4:item      | m4name=CSP_UNIDADES_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_UNIDADES_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 239 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvPuestos).intValue()-1).toString()                                                                    |
| 246 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}; htmlsafe=true    |
| 246 | m4:item      | m4name=CSP_PUESTOS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PUESTOS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true     |
| 269 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvResponsables).intValue()-1).toString()                                                               |
| 276 | m4:item      | m4name=CSP_PERSONAS_RESPONSABLES{":"}CSP_ORGANIGRAMA{"!"}CSP_PERSONAS_RESPONSABLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true      |
| 339 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                                        |
| 354 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}; htmlsafe=true                        |
| 358 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_1"}; htmlsafe=true                           |
| 359 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"APELLIDO_2"}; htmlsafe=true                           |
| 360 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE"}; htmlsafe=true                               |
| 362 | m4:item      | m4name=CSP_ORGANIGRAMA{":"}CSP_ORGANIGRAMA{"!"}CSP_ORGANIGRAMA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                             |
| 371 | m4:endpage   |                                                                                                                                                |

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 127 | setItem          | zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad           |
| 128 | setItem          | zsubsesion,zsubsesion,"","CSP_P_PUESTO",puesto           |
| 129 | setItem          | zsubsesion,zsubsesion,"","CSP_P_RESPONSABLE",responsable |
| 130 | setItem          | zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo               |
| 169 | getCountInClient | unidades,zsubsesion,unidades                             |
| 170 | getCountInClient | puestos,zsubsesion,puestos                               |
| 171 | getCountInClient | responsables,zsubsesion,responsables                     |
| 172 | getCountInClient | zsubsesion,zsubsesion,zsubsesion                         |
| 173 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_RRHH"            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos        |
| --- | ----------------- | ----------------- |
| 37  | seleccionarOpcion | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43  | if (options[i].value == valor) {                                                                                                                  |
| 205 | if (zcountiUnidades &gt; 0) {                                                                                                                     |
| 222 | &lt;% if (unidad != null) {%&gt;                                                                                                                  |
| 235 | if (zcountiPuestos &gt; 0) {                                                                                                                      |
| 252 | &lt;% if (puesto != null) {%&gt;                                                                                                                  |
| 265 | if (zcountiResponsables &gt; 0) {                                                                                                                 |
| 280 | &lt;% if (responsable != null) {%&gt;                                                                                                             |
| 294 | &lt;% if (esRrhh.equals("S") ) {%&gt;                                                                                                             |
| 298 | &lt;% if (tipo != null) {%&gt;                                                                                                                    |
| 327 | &lt;% if (zcountiORO &gt; 0) {                                                                                                                    |
| 366 | &lt;%}else{                                                                                                                                       |
| 367 | if (busqueda != null) {%&gt;                                                                                                                      |
| 60  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA";                                    |
| 62  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + zsubsesion + "[*]";                                                |
| 63  | expresión de cálculo/transformación: String zmoveORO = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                 |
| 64  | expresión de cálculo/transformación: String ziteratorORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion;                                      |
| 65  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + zsubsesion;                                                          |
| 66  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + zsubsesion + ".";                                                       |
| 68  | expresión de cálculo/transformación: String zcomunORO = zsubsesion + ":" + zsubsesion + "!" + zsubsesion + "[&amp;VAR.m4lix]" + ".";              |
| 70  | expresión de cálculo/transformación: String idUnidadORO = zcomunORO + "ID_UNIDAD_RAIZ";                                                           |
| 71  | expresión de cálculo/transformación: String unidadORO = zcomunORO + "N_UNIDAD_RAIZ";                                                              |
| 72  | expresión de cálculo/transformación: String nombreORO = zcomunORO + "NOMBRE";                                                                     |
| 73  | expresión de cálculo/transformación: String apellido2ORO = zcomunORO + "APELLIDO_2";                                                              |
| 74  | expresión de cálculo/transformación: String apellido1ORO = zcomunORO + "APELLIDO_1";                                                              |
| 75  | expresión de cálculo/transformación: String puestoORO = zcomunORO + "N_PUESTO";                                                                   |
| 77  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + unidades + "[*]";                                             |
| 78  | expresión de cálculo/transformación: String zmoveUnidades = unidades + ":" + unidades + "[FIRST]";                                                |
| 79  | expresión de cálculo/transformación: String ziteratorUnidades = unidades + ":" + zsubsesion + "!" + unidades;                                     |
| 80  | expresión de cálculo/transformación: String zlecturaUnidades = zsubsesion + "!" + unidades;                                                       |
| 81  | expresión de cálculo/transformación: String zraizUnidades = zsubsesion + "!" + unidades + ".";                                                    |
| 83  | expresión de cálculo/transformación: String zcomunUnidades = unidades + ":" + zsubsesion + "!" + unidades + "[&amp;VAR.m4lix]" + ".";             |
| 85  | expresión de cálculo/transformación: String personaUnidad = zcomunUnidades + "SCO_ID_HR";                                                         |
| 86  | expresión de cálculo/transformación: String idUnidad = zcomunUnidades + "STD_ID_WORK_UNIT";                                                       |
| 87  | expresión de cálculo/transformación: String nombreUnidad = zcomunUnidades + "STD_N_WORK_UNIT";                                                    |
| 89  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + puestos + "[*]";                                               |
| 90  | expresión de cálculo/transformación: String zmovePuestos = puestos + ":" + unidades + "[FIRST]";                                                  |
| 91  | expresión de cálculo/transformación: String ziteratorPuestos = puestos + ":" + zsubsesion + "!" + puestos;                                        |
| 92  | expresión de cálculo/transformación: String zlecturaPuestos = zsubsesion + "!" + puestos;                                                         |
| 93  | expresión de cálculo/transformación: String zraizPuestos = zsubsesion + "!" + puestos + ".";                                                      |
| 95  | expresión de cálculo/transformación: String zcomunPuestos = puestos + ":" + zsubsesion + "!" + puestos + "[&amp;VAR.m4lix]" + ".";                |
| 97  | expresión de cálculo/transformación: String personaPuesto = zcomunPuestos + "SCO_ID_HR";                                                          |
| 98  | expresión de cálculo/transformación: String idPuesto = zcomunPuestos + "SCO_ID_JOB_CODE";                                                         |
| 99  | expresión de cálculo/transformación: String nombrePuesto = zcomunPuestos + "STD_N_JOB_CODE";                                                      |
| 102 | expresión de cálculo/transformación: String zoutputdefResponsables = zsubsesion + "!" + responsables + "[*]";                                     |
| 103 | expresión de cálculo/transformación: String zmoveResponsables = responsables + ":" + responsables + "[FIRST]";                                    |
| 104 | expresión de cálculo/transformación: String ziteratorResponsables = responsables + ":" + zsubsesion + "!" + responsables;                         |
| 105 | expresión de cálculo/transformación: String zlecturaResponsables = zsubsesion + "!" + responsables;                                               |
| 106 | expresión de cálculo/transformación: String zraizResponsables = zsubsesion + "!" + responsables + ".";                                            |
| 108 | expresión de cálculo/transformación: String zcomunResponsables = responsables + ":" + zsubsesion + "!" + responsables + "[&amp;VAR.m4lix]" + "."; |
| 110 | expresión de cálculo/transformación: String personaResponsable = zcomunResponsables + "STD_ID_PERSON";                                            |
| 111 | expresión de cálculo/transformación: String nombreResponsable = zcomunResponsables + "SCO_GB_NAME";                                               |
| 153 | expresión de cálculo/transformación: var valores_cabecera = "-- valores recibidos por get pagina --" + "\n";                                      |
| 154 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"unidad :" + '&lt;%=unidad%&gt;' + "\n";                                |
| 155 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"puesto :" + '&lt;%=puesto%&gt;' + "\n";                                |
| 156 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"responsable :" + '&lt;%=responsable%&gt;' + "\n";                      |
| 157 | expresión de cálculo/transformación: valores_cabecera = valores_cabecera +"tipo :" + '&lt;%=tipo%&gt;' + "\n";                                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 29  | /css/estilo_sse.css                                      |
| 31  | /library/jquery.js                                       |
| 32  | /libreria/functions_organigrama.js                       |
| 33  | /libreria/funciones_sse.js                               |
| 186 | sse_g0_organigramas.jsp                                  |
| 344 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp |
| 353 | javascript:getVersion(                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 31  | /library/jquery.js                                       | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 32  | /libreria/functions_organigrama.js                       | contextual | [libreria/functions_organigrama.js](../../transversal/dependencias/libreria--functions_organigrama.md)                                                                         |
| COLL   | 33  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 186 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| COLL   | 344 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp | contextual | [sse_g0/sse_g0_organigrama.jsp](sse_g0--sse_g0_organigrama.md)                                                                                                                 |
| COLL   | 353 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 31  | /library/jquery.js                                       | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 32  | /libreria/functions_organigrama.js                       | contextual | [libreria/functions_organigrama.js](../../transversal/dependencias/libreria--functions_organigrama.md)                                                                         |
| IBER   | 33  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 186 | sse_g0_organigramas.jsp                                  | física     | [sse_g0/sse_g0_organigramas.jsp](sse_g0--sse_g0_organigramas.md)                                                                                                               |
| IBER   | 344 | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp | contextual | [sse_g0/sse_g0_organigrama.jsp](sse_g0--sse_g0_organigrama.md)                                                                                                                 |
| IBER   | 353 | javascript:getVersion(                                   | dinámica   | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_organigramas_old_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
