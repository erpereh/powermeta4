# Experiencia profesional

Identificador: `mss_g3/mss_g3_p1_wiz2.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz2.jsp) | `4e219206844a996a58d186f002de123719d54aa3673b9b45dc819efc317e8c88` |    373 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------- |
| 7   | Experiencia profesional                                                                                               |
| 225 | Experiencia profesional                                                                                               |
| 230 | Añade la experiencia profesional requerida para la vacante. Asegúrate de añadir los datos al finalizar el formulario. |
| 236 | Experiencia profesional                                                                                               |
| 239 | Familia                                                                                                               |
| 240 | [valor dinámico] Todos los puestos $M4ITEM1$                                                                          |
| 251 | Requerido                                                                                                             |
| 254 | Sector                                                                                                                |
| 255 | $M4ITEM1$                                                                                                             |
| 267 | Puesto                                                                                                                |
| 268 | $M4ITEM1$                                                                                                             |
| 280 | País                                                                                                                  |
| 281 | $M4ITEM1$                                                                                                             |
| 294 | Periodo mínimo                                                                                                        |
| 295 | meses $M4ITEM1$                                                                                                       |
| 320 | Familia                                                                                                               |
| 321 | Sector                                                                                                                |
| 322 | Puesto                                                                                                                |
| 323 | Período mín.                                                                                                          |
| 324 | País                                                                                                                  |
| 325 | Requerido                                                                                                             |
| 347 | "&gt;                                                                                                                 |
| 358 | "&gt;                                                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 228 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                                            |
| 233 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                                         |
| 241 | select  | id=STD_ID_JOB_INT_FAM; class=fuenteformulario200; name=STD_ID_JOB_INT_FAM; title=Seleccionar familia; onchange=javascript:controlFiltro()                                                                                     |
| 242 | option  | value=&lt;%=zfiltroval%&gt;                                                                                                                                                                                                   |
| 243 | option  | value=ALL                                                                                                                                                                                                                     |
| 247 | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 251 | input   | id=SCO_CHECK; type=checkbox; name=SCO_CHECK                                                                                                                                                                                   |
| 256 | select  | id=STD_ID_SECTOR; class=fuenteformulario200; name=STD_ID_SECTOR; title=Seleccionar sector                                                                                                                                     |
| 257 | option  |                                                                                                                                                                                                                               |
| 261 | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 269 | select  | id=STD_ID_JOB_CODE; class=fuenteformulario200; name=STD_ID_JOB_CODE; title=Seleccionar puesto                                                                                                                                 |
| 270 | option  |                                                                                                                                                                                                                               |
| 274 | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 282 | select  | id=STD_ID_COUNTRY; class=fuenteformulario200; name=STD_ID_COUNTRY; title=Seleccionar pais                                                                                                                                     |
| 283 | option  |                                                                                                                                                                                                                               |
| 287 | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 296 | input   | class=fuenteformulario; type=text; id=SCO_MIN_PERIOD; name=SCO_MIN_PERIOD; size=3; maxlength=2; title=Escribir el periodo mínimo                                                                                              |
| 297 | select  | id=SCO_ID_TIME_UNIT; class=fuenteformulario100; name=SCO_ID_TIME_UNIT; title=Unidad de tiempo                                                                                                                                 |
| 298 | option  | value=02                                                                                                                                                                                                                      |
| 302 | option  | value=$M4ITEM0$                                                                                                                                                                                                               |
| 309 | a       | href=javascript:navegar(1,'mss_g3/mss_g3_p1_wiz1.jsp');                                                                                                                                                                       |
| 309 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                          |
| 310 | a       | href=javascript:comprobar(2,'mss_g3/mss_g3_p1_wiz2.jsp');                                                                                                                                                                     |
| 310 | img     | alt=Añadir experiencia profesional a la vacante; title=Añadir experiencia profesional a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this) |
| 311 | a       | href=javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');                                                                                                                                                                       |
| 311 | img     | alt=Siguiente; title=Siguiente; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                       |
| 347 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 347 | img     | alt=Eliminar registro; title=Eliminar registro; align=right; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)              |
| 358 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 358 | img     | alt=Eliminar registro; title=Eliminar registro; align=right; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 67  | estado          | getParameter(request,"estado")   |
| 68  | zinicios        | getParameter(request,"zinicios") |
| 69  | Fval            | getParameter(request,"Fval")     |
| 70  | Ftext           | getParameter(request,"Ftext")    |

| L   | Variable        | Expresión fuente                                                     | Resolución estática parcial                                                                                    |
| --- | --------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 67  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                             |
| 68  | zinicios        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                           |
| 69  | zfiltroval      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fval")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fval")                                               |
| 70  | zfiltrotext     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Ftext")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Ftext")                                              |
| 85  | OpcionActiva    | 2                                                                    | 2                                                                                                              |
| 98  | zsubsesion      | "SSM_VACANT"                                                         | SSM_VACANT                                                                                                     |
| 99  | zmeta4object    | "SSM_VACANT"                                                         | SSM_VACANT                                                                                                     |
| 100 | znodo1          | "SSM_JOB"                                                            | SSM_JOB                                                                                                        |
| 101 | znodo2          | "SSM_X_TIME_UNIT"                                                    | SSM_X_TIME_UNIT                                                                                                |
| 102 | znodo3          | "SSM_LU_JOB_INTERNAL_FAMILY"                                         | SSM_LU_JOB_INTERNAL_FAMILY                                                                                     |
| 103 | znodo4          | "SSM_LU_JOB_SECTOR"                                                  | SSM_LU_JOB_SECTOR                                                                                              |
| 104 | znodo5          | "SSM_COUNTRY"                                                        | SSM_COUNTRY                                                                                                    |
| 105 | znodo6          | "SSM_JOB_POST_PREV_JOBS"                                             | SSM_JOB_POST_PREV_JOBS                                                                                         |
| 107 | ztipocarga      | "wiz2"                                                               | wiz2                                                                                                           |
| 112 | zventanas       | "10"                                                                 | 10                                                                                                             |
| 113 | zvuelta         | 5                                                                    | 5                                                                                                              |
| 117 | zoutputdef1     | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB{"[*]"}                                                                                  |
| 118 | zlectura1       | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_JOB                                                                                         |
| 119 | zraiz1          | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_JOB{"."}                                                                                    |
| 120 | zmove1          | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_JOB{":"}SSM_JOB{"[FIRST]"}                                                                                 |
| 121 | ziterator1      | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_JOB{":"}SSM_VACANT{"!"}SSM_JOB                                                                             |
| 123 | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_X_TIME_UNIT{"[*]"}                                                                          |
| 124 | zlectura2       | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_X_TIME_UNIT                                                                                 |
| 125 | zraiz2          | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_X_TIME_UNIT{"."}                                                                            |
| 126 | zmove2          | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_X_TIME_UNIT{":"}SSM_X_TIME_UNIT{"[FIRST]"}                                                                 |
| 127 | ziterator2      | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_X_TIME_UNIT{":"}SSM_VACANT{"!"}SSM_X_TIME_UNIT                                                             |
| 129 | zoutputdef3     | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"[*]"}                                                               |
| 130 | zlectura3       | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY                                                                      |
| 131 | zraiz3          | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"."}                                                                 |
| 132 | zmove3          | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_LU_JOB_INTERNAL_FAMILY{":"}SSM_LU_JOB_INTERNAL_FAMILY{"[FIRST]"}                                           |
| 133 | ziterator3      | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_LU_JOB_INTERNAL_FAMILY{":"}SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY                                       |
| 135 | zoutputdef4     | zsubsesion + "!" + znodo4 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"[*]"}                                                                        |
| 136 | zlectura4       | zsubsesion + "!" + znodo4                                            | SSM_VACANT{"!"}SSM_LU_JOB_SECTOR                                                                               |
| 137 | zraiz4          | zsubsesion + "!" + znodo4 + "."                                      | SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"."}                                                                          |
| 138 | zmove4          | znodo4 + ":" + znodo4 + "[FIRST]"                                    | SSM_LU_JOB_SECTOR{":"}SSM_LU_JOB_SECTOR{"[FIRST]"}                                                             |
| 139 | ziterator4      | znodo4 + ":" + zsubsesion + "!" + znodo4                             | SSM_LU_JOB_SECTOR{":"}SSM_VACANT{"!"}SSM_LU_JOB_SECTOR                                                         |
| 141 | zoutputdef5     | zsubsesion + "!" + znodo5 + "[*]"                                    | SSM_VACANT{"!"}SSM_COUNTRY{"[*]"}                                                                              |
| 142 | zlectura5       | zsubsesion + "!" + znodo5                                            | SSM_VACANT{"!"}SSM_COUNTRY                                                                                     |
| 143 | zraiz5          | zsubsesion + "!" + znodo5 + "."                                      | SSM_VACANT{"!"}SSM_COUNTRY{"."}                                                                                |
| 144 | zmove5          | znodo5 + ":" + znodo5 + "[FIRST]"                                    | SSM_COUNTRY{":"}SSM_COUNTRY{"[FIRST]"}                                                                         |
| 145 | ziterator5      | znodo5 + ":" + zsubsesion + "!" + znodo5                             | SSM_COUNTRY{":"}SSM_VACANT{"!"}SSM_COUNTRY                                                                     |
| 147 | zoutputdef6     | zsubsesion + "!" + znodo6 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[*]"}                                                                   |
| 148 | zlectura6       | zsubsesion + "!" + znodo6                                            | SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS                                                                          |
| 149 | zraiz6a         | zsubsesion + "!" + znodo6 + "."                                      | SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"."}                                                                     |
| 150 | zraiz6          | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."  | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                      |
| 151 | zmove6          | znodo6 + ":" + znodo6 + "[FIRST]"                                    | SSM_JOB_POST_PREV_JOBS{":"}SSM_JOB_POST_PREV_JOBS{"[FIRST]"}                                                   |
| 152 | ziterator6      | znodo6 + ":" + zsubsesion + "!" + znodo6                             | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS                                               |
| 156 | zmetodocarga    | "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA"                          | CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                        |
| 157 | zmetodopersist  | "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR"                        | GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                      |
| 161 | zSTDIDJOBCODE   | zraiz1 + "STD_ID_JOB_CODE"                                           | SSM_VACANT{"!"}SSM_JOB{"."}{"STD_ID_JOB_CODE"}                                                                 |
| 162 | zSTDNJOBCODE    | zraiz1 + "STD_N_JOB_CODE"                                            | SSM_VACANT{"!"}SSM_JOB{"."}{"STD_N_JOB_CODE"}                                                                  |
| 164 | zSCOIDTIMEUNIT  | zraiz2 + "SCO_ID_TIME_UNIT"                                          | SSM_VACANT{"!"}SSM_X_TIME_UNIT{"."}{"SCO_ID_TIME_UNIT"}                                                        |
| 165 | zSCONMTIMEUNIT  | zraiz2 + "SCO_NM_TIME_UNIT"                                          | SSM_VACANT{"!"}SSM_X_TIME_UNIT{"."}{"SCO_NM_TIME_UNIT"}                                                        |
| 167 | zSTDIDJOBINTFAM | zraiz3 + "STD_ID_JOB_INT_FAM"                                        | SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"."}{"STD_ID_JOB_INT_FAM"}                                           |
| 168 | zSTDNJOBINTFAM  | zraiz3 + "STD_N_JOB_INT_FAM"                                         | SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"."}{"STD_N_JOB_INT_FAM"}                                            |
| 170 | zSTDIDSECTOR    | zraiz4 + "STD_ID_SECTOR"                                             | SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"."}{"STD_ID_SECTOR"}                                                         |
| 171 | zSTDNSECTOR     | zraiz4 + "STD_N_SECTOR"                                              | SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"."}{"STD_N_SECTOR"}                                                          |
| 173 | zSTDIDCOUNTRY   | zraiz5 + "STD_ID_COUNTRY"                                            | SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_ID_COUNTRY"}                                                              |
| 174 | zSTDNCOUNTRY    | zraiz5 + "STD_N_COUNTRY"                                             | SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_N_COUNTRY"}                                                               |
| 176 | zFAMILIA        | zraiz6 + "FAMILIA"                                                   | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"FAMILIA"}           |
| 177 | zSECTOR         | zraiz6 + "SECTOR"                                                    | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SECTOR"}            |
| 178 | zUNIDADTIEMPO   | zraiz6 + "UNIDAD_TIEMPO"                                             | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"UNIDAD_TIEMPO"}     |
| 179 | zPUESTO         | zraiz6 + "PUESTO"                                                    | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PUESTO"}            |
| 180 | zREQUERIDO      | zraiz6 + "REQUERIDO"                                                 | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}         |
| 181 | zPAIS           | zraiz6 + "PAIS"                                                      | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}              |
| 182 | zSCOMINPERIOD   | zraiz6 + "SCO_MIN_PERIOD"                                            | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}    |
| 183 | zSTDORPROFBACKG | zraiz6 + "STD_OR_PROF_BACKG"                                         | SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_PROF_BACKG"} |
| 210 | zcount6         | 0                                                                    | 0                                                                                                              |
| 211 | zcounti6        | 0                                                                    | 0                                                                                                              |
| 220 | zcountv6        | String.valueOf(zcounti6)                                             | String.valueOf(zcounti6)                                                                                       |
| 329 | zposicions      | "0"                                                                  | 0                                                                                                              |
| 330 | zcontrol        | 0                                                                    | 0                                                                                                              |
| 331 | zposicion       | 0                                                                    | 0                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 185 | m4:startpage | m4task=SSM_VACANT                                                                                                                 |
| 185 | m4:beginjob  |                                                                                                                                   |
| 186 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                                 |
| 188 | m4:exec      | m4method=GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                |
| 188 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                              |
| 195 | m4:exec      | m4method=CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                  |
| 195 | m4:param     | name=TIPO_CARGA; value=wiz2                                                                                                       |
| 196 | m4:outputdef | m4alias=SSM_JOB                                                                                                                   |
| 196 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB{"[*]"}                                                                                 |
| 197 | m4:outputdef | m4alias=SSM_X_TIME_UNIT                                                                                                           |
| 197 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_X_TIME_UNIT{"[*]"}                                                                         |
| 198 | m4:outputdef | m4alias=SSM_LU_JOB_INTERNAL_FAMILY                                                                                                |
| 198 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"[*]"}                                                              |
| 199 | m4:outputdef | m4alias=SSM_LU_JOB_SECTOR                                                                                                         |
| 199 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"[*]"}                                                                       |
| 200 | m4:outputdef | m4alias=SSM_COUNTRY                                                                                                               |
| 200 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_COUNTRY{"[*]"}                                                                             |
| 201 | m4:outputdef | m4alias=SSM_JOB_POST_PREV_JOBS                                                                                                    |
| 201 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[*]"}                                                                  |
| 202 | m4:endjob    |                                                                                                                                   |
| 203 | m4:move      |                                                                                                                                   |
| 203 | m4:param     | name=SSM_VACANT; value=SSM_JOB{":"}SSM_JOB{"[FIRST]"}                                                                             |
| 204 | m4:move      |                                                                                                                                   |
| 204 | m4:param     | name=SSM_VACANT; value=SSM_X_TIME_UNIT{":"}SSM_X_TIME_UNIT{"[FIRST]"}                                                             |
| 205 | m4:move      |                                                                                                                                   |
| 205 | m4:param     | name=SSM_VACANT; value=SSM_LU_JOB_INTERNAL_FAMILY{":"}SSM_LU_JOB_INTERNAL_FAMILY{"[FIRST]"}                                       |
| 206 | m4:move      |                                                                                                                                   |
| 206 | m4:param     | name=SSM_VACANT; value=SSM_LU_JOB_SECTOR{":"}SSM_LU_JOB_SECTOR{"[FIRST]"}                                                         |
| 207 | m4:move      |                                                                                                                                   |
| 207 | m4:param     | name=SSM_VACANT; value=SSM_COUNTRY{":"}SSM_COUNTRY{"[FIRST]"}                                                                     |
| 208 | m4:move      |                                                                                                                                   |
| 208 | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST_PREV_JOBS{":"}SSM_JOB_POST_PREV_JOBS{"[FIRST]"}                                               |
| 244 | m4:iterator  | m4rows=*; m4node=SSM_LU_JOB_INTERNAL_FAMILY{":"}SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY                                         |
| 245 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"."}{"STD_ID_JOB_INT_FAM"}                                          |
| 246 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_JOB_INTERNAL_FAMILY{"."}{"STD_N_JOB_INT_FAM"}                                           |
| 258 | m4:iterator  | m4rows=*; m4node=SSM_LU_JOB_SECTOR{":"}SSM_VACANT{"!"}SSM_LU_JOB_SECTOR                                                           |
| 259 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"."}{"STD_ID_SECTOR"}                                                        |
| 260 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_JOB_SECTOR{"."}{"STD_N_SECTOR"}                                                         |
| 271 | m4:iterator  | m4rows=*; m4node=SSM_JOB{":"}SSM_VACANT{"!"}SSM_JOB                                                                               |
| 272 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_JOB{"."}{"STD_ID_JOB_CODE"}                                                                |
| 273 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_JOB{"."}{"STD_N_JOB_CODE"}                                                                 |
| 284 | m4:iterator  | m4rows=*; m4node=SSM_COUNTRY{":"}SSM_VACANT{"!"}SSM_COUNTRY                                                                       |
| 285 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_ID_COUNTRY"}                                                             |
| 286 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_N_COUNTRY"}                                                              |
| 299 | m4:iterator  | m4rows=*; m4node=SSM_X_TIME_UNIT{":"}SSM_VACANT{"!"}SSM_X_TIME_UNIT                                                               |
| 300 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_X_TIME_UNIT{"."}{"SCO_ID_TIME_UNIT"}                                                       |
| 301 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_X_TIME_UNIT{"."}{"SCO_NM_TIME_UNIT"}                                                       |
| 334 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti6).intValue()-1).toString()                                                             |
| 341 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"FAMILIA"}; htmlsafe=true        |
| 342 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SECTOR"}; htmlsafe=true         |
| 343 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PUESTO"}; htmlsafe=true         |
| 344 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}; htmlsafe=true |
| 344 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"UNIDAD_TIEMPO"}; htmlsafe=true  |
| 345 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}; htmlsafe=true           |
| 346 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true      |
| 352 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"FAMILIA"}; htmlsafe=true        |
| 353 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SECTOR"}; htmlsafe=true         |
| 354 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PUESTO"}; htmlsafe=true         |
| 355 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}; htmlsafe=true |
| 355 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"UNIDAD_TIEMPO"}; htmlsafe=true  |
| 356 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}; htmlsafe=true           |
| 357 | m4:item      | m4name=SSM_JOB_POST_PREV_JOBS{":"}SSM_VACANT{"!"}SSM_JOB_POST_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true      |
| 370 | m4:endpage   |                                                                                                                                   |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 192 | setItem          | zsubsesion,znodo1,"","FILTRO_FAM",zfiltroval |
| 214 | getCount         | znodo6,zsubsesion,znodo6                     |
| 218 | getCountInClient | znodo6,zsubsesion,znodo6                     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos  |
| --- | ------------- | ----------- |
| 14  | controlFiltro |             |
| 23  | navegar       | _valor,_url |
| 28  | comprobar     | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 35  | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                         |
| 38  | if (v1.resultado==false &amp;&amp; temp.value != ''){                                                                     |
| 42  | if (scocheck.checked){                                                                                                    |
| 45  | if (falta_valor ==1) {alert(mensaje);}                                                                                    |
| 46  | if (0==falta_valor){                                                                                                      |
| 71  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 74  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 77  | if ((zfiltroval==null)&#124;&#124;(zfiltroval.equals(""))){                                                               |
| 80  | if ((zfiltrotext==null)&#124;&#124;(zfiltrotext.equals(""))){                                                             |
| 316 | if (zcount6 &gt; 0) {                                                                                                     |
| 339 | if (zcontrol==0){%&gt;                                                                                                    |
| 350 | &lt;%}else{%&gt;                                                                                                          |
| 32  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                    |
| 117 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 118 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 119 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 120 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 121 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 123 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 124 | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 125 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 126 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 127 | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 129 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 130 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 131 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                     |
| 132 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 133 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 135 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                              |
| 136 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                        |
| 137 | expresión de cálculo/transformación: String zraiz4= zsubsesion + "!" + znodo4 + ".";                                      |
| 138 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";                                   |
| 139 | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                        |
| 141 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                              |
| 142 | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                        |
| 143 | expresión de cálculo/transformación: String zraiz5= zsubsesion + "!" + znodo5 + ".";                                      |
| 144 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";                                   |
| 145 | expresión de cálculo/transformación: String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                        |
| 147 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                              |
| 148 | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                        |
| 149 | expresión de cálculo/transformación: String zraiz6a= zsubsesion + "!" + znodo6 + ".";                                     |
| 150 | expresión de cálculo/transformación: String zraiz6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."; |
| 151 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[FIRST]";                                   |
| 152 | expresión de cálculo/transformación: String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;                        |
| 156 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";                   |
| 157 | expresión de cálculo/transformación: String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";               |
| 161 | expresión de cálculo/transformación: String zSTDIDJOBCODE = zraiz1 + "STD_ID_JOB_CODE";                                   |
| 162 | expresión de cálculo/transformación: String zSTDNJOBCODE = zraiz1 + "STD_N_JOB_CODE";                                     |
| 164 | expresión de cálculo/transformación: String zSCOIDTIMEUNIT = zraiz2 + "SCO_ID_TIME_UNIT";                                 |
| 165 | expresión de cálculo/transformación: String zSCONMTIMEUNIT = zraiz2 + "SCO_NM_TIME_UNIT";                                 |
| 167 | expresión de cálculo/transformación: String zSTDIDJOBINTFAM = zraiz3 + "STD_ID_JOB_INT_FAM";                              |
| 168 | expresión de cálculo/transformación: String zSTDNJOBINTFAM = zraiz3 + "STD_N_JOB_INT_FAM";                                |
| 170 | expresión de cálculo/transformación: String zSTDIDSECTOR = zraiz4 + "STD_ID_SECTOR";                                      |
| 171 | expresión de cálculo/transformación: String zSTDNSECTOR = zraiz4 + "STD_N_SECTOR";                                        |
| 173 | expresión de cálculo/transformación: String zSTDIDCOUNTRY = zraiz5 + "STD_ID_COUNTRY";                                    |
| 174 | expresión de cálculo/transformación: String zSTDNCOUNTRY = zraiz5 + "STD_N_COUNTRY";                                      |
| 176 | expresión de cálculo/transformación: String zFAMILIA = zraiz6 + "FAMILIA";                                                |
| 177 | expresión de cálculo/transformación: String zSECTOR = zraiz6 + "SECTOR";                                                  |
| 178 | expresión de cálculo/transformación: String zUNIDADTIEMPO = zraiz6 + "UNIDAD_TIEMPO";                                     |
| 179 | expresión de cálculo/transformación: String zPUESTO = zraiz6 + "PUESTO";                                                  |
| 180 | expresión de cálculo/transformación: String zREQUERIDO = zraiz6 + "REQUERIDO";                                            |
| 181 | expresión de cálculo/transformación: String zPAIS = zraiz6 + "PAIS";                                                      |
| 182 | expresión de cálculo/transformación: String zSCOMINPERIOD = zraiz6 + "SCO_MIN_PERIOD";                                    |
| 183 | expresión de cálculo/transformación: String zSTDORPROFBACKG = zraiz6 + "STD_OR_PROF_BACKG";                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 92  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 187 | ../../mss_g3/espanol/persist.jsp                      |
| 367 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                   |
| 9   | /libreria/funciones_sse.js                                                            |
| 11  | /libreria/clase_val_entradas.js                                                       |
| 228 | /iconos/noname_solicitar_vacantes_210_100.gif                                         |
| 233 | javascript:comprobar()                                                                |
| 309 | javascript:navegar(1,                                                                 |
| 309 | /iconos/icono_anterior_36_36.gif                                                      |
| 310 | javascript:comprobar(2,                                                               |
| 310 | /iconos/icono_aceptar_mss_36_36.gif                                                   |
| 311 | javascript:navegar(3,                                                                 |
| 311 | /iconos/icono_siguiente_36_36.gif                                                     |
| 347 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name= |
| 347 | /iconos/icono_borrar_16_16.gif                                                        |
| 358 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name= |
| 358 | /iconos/icono_borrar_16_16.gif                                                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                                               |
| 20  | mss_g3/mss_g3_p1_wiz2.jsp                                                             |
| 92  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    |
| 187 | ../../mss_g3/espanol/persist.jsp                                                      |
| 309 | mss_g3/mss_g3_p1_wiz1.jsp                                                             |
| 310 | mss_g3/mss_g3_p1_wiz2.jsp                                                             |
| 311 | mss_g3/mss_g3_p1_wiz3.jsp                                                             |
| 367 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 92  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 187 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 367 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 233 | javascript:comprobar()                                                                | dinámica   | P06                                                                                              |
| BASE   | 309 | javascript:navegar(1,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 310 | javascript:comprobar(2,                                                               | dinámica   | P06                                                                                              |
| BASE   | 311 | javascript:navegar(3,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 347 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 358 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 20  | mss_g3/mss_g3_p1_wiz2.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 92  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 187 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 309 | mss_g3/mss_g3_p1_wiz1.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 310 | mss_g3/mss_g3_p1_wiz2.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 311 | mss_g3/mss_g3_p1_wiz3.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 367 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
