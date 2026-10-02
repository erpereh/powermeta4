# Certificados y Licencias

Identificador: `mss_g3/mss_g3_p1_wiz3.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz3.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz3.jsp) | `9264d039a727db0e47ffb7575bd964bb045e47d715fc75299a289cc8bcb827f0` |    275 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz3.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Certificados y Licencias                                                                                                       |
| 162 | Certificados y Licencias                                                                                                       |
| 166 | Añade las certificaciones y las licencias necesarias para la vacante.Asegúrate de añadir los datos al finalizar el formulario. |
| 172 | Certificados y licencias                                                                                                       |
| 175 | * Tipo certificado                                                                                                             |
| 176 | $M4ITEM1$                                                                                                                      |
| 186 | Requerido                                                                                                                      |
| 191 | Entidad emisora                                                                                                                |
| 192 | $M4ITEM1$                                                                                                                      |
| 204 | País                                                                                                                           |
| 205 | $M4ITEM1$                                                                                                                      |
| 229 | Tipo certificado                                                                                                               |
| 230 | Entidad emisora                                                                                                                |
| 231 | País                                                                                                                           |
| 232 | Requerido                                                                                                                      |
| 252 | "&gt;                                                                                                                          |
| 261 | "&gt;                                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 164 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                               |
| 169 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                            |
| 177 | select  | id=STD_ID_CERTIFICATION_TYPE; class=fuenteformulario200; name=STD_ID_CERTIFICATION_TYPE; title=Tipo certificado                                                                                                  |
| 178 | option  |                                                                                                                                                                                                                  |
| 182 | option  | value=$M4ITEM0$                                                                                                                                                                                                  |
| 187 | input   | id=SCO_CHECK; type=checkbox; name=SCO_CHECK                                                                                                                                                                      |
| 193 | select  | id=SCO_ID_ISSUE_ENTIT; class=fuenteformulario200; name=SCO_ID_ISSUE_ENTIT; title=Entidad emisora                                                                                                                 |
| 194 | option  |                                                                                                                                                                                                                  |
| 198 | option  | value=$M4ITEM0$                                                                                                                                                                                                  |
| 206 | select  | id=STD_ID_COUNTRY; class=fuenteformulario200; name=STD_ID_COUNTRY; title=Pais                                                                                                                                    |
| 207 | option  |                                                                                                                                                                                                                  |
| 211 | option  | value=$M4ITEM0$                                                                                                                                                                                                  |
| 218 | a       | href=javascript:navegar(2,'mss_g3/mss_g3_p1_wiz2.jsp');                                                                                                                                                          |
| 218 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                             |
| 219 | a       | href=javascript:comprobar(3,'mss_g3/mss_g3_p1_wiz3.jsp');                                                                                                                                                        |
| 219 | img     | alt=Añadir un idioma a la vacante; title=Añadir certificado o licencia a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)   |
| 220 | a       | href=javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');                                                                                                                                                          |
| 220 | img     | alt=Siguiente; title=Siguiente; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                          |
| 252 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 252 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 261 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 261 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 49  | estado          | getParameter(request,"estado")   |
| 50  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                     | Resolución estática parcial                                                                                                    |
| --- | ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 49  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                             |
| 50  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                           |
| 60  | OpcionActiva            | 3                                                                    | 3                                                                                                                              |
| 70  | zsubsesion              | "SSM_VACANT"                                                         | SSM_VACANT                                                                                                                     |
| 71  | zmeta4object            | "SSM_VACANT"                                                         | SSM_VACANT                                                                                                                     |
| 72  | znodo1                  | "SSM_COUNTRY"                                                        | SSM_COUNTRY                                                                                                                    |
| 73  | znodo2                  | "SSM_LU_ISSU_ENT"                                                    | SSM_LU_ISSU_ENT                                                                                                                |
| 74  | znodo3                  | "SSM_LU_CERTIFICATION_TYPE"                                          | SSM_LU_CERTIFICATION_TYPE                                                                                                      |
| 75  | znodo4                  | "SSM_JOB_POST_CERTIFICATION_LIC"                                     | SSM_JOB_POST_CERTIFICATION_LIC                                                                                                 |
| 76  | ztipocarga              | "wiz3"                                                               | wiz3                                                                                                                           |
| 80  | zventanas               | "10"                                                                 | 10                                                                                                                             |
| 81  | zvuelta                 | 5                                                                    | 5                                                                                                                              |
| 85  | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_COUNTRY{"[*]"}                                                                                              |
| 86  | zlectura1               | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_COUNTRY                                                                                                     |
| 87  | zraiz1                  | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_COUNTRY{"."}                                                                                                |
| 88  | zmove1                  | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_COUNTRY{":"}SSM_COUNTRY{"[FIRST]"}                                                                                         |
| 89  | ziterator1              | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_COUNTRY{":"}SSM_VACANT{"!"}SSM_COUNTRY                                                                                     |
| 91  | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"[*]"}                                                                                          |
| 92  | zlectura2               | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_LU_ISSU_ENT                                                                                                 |
| 93  | zraiz2                  | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"."}                                                                                            |
| 94  | zmove2                  | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_LU_ISSU_ENT{":"}SSM_LU_ISSU_ENT{"[FIRST]"}                                                                                 |
| 95  | ziterator2              | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_LU_ISSU_ENT{":"}SSM_VACANT{"!"}SSM_LU_ISSU_ENT                                                                             |
| 97  | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"[*]"}                                                                                |
| 98  | zlectura3               | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE                                                                                       |
| 99  | zraiz3                  | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"."}                                                                                  |
| 100 | zmove3                  | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_LU_CERTIFICATION_TYPE{":"}SSM_LU_CERTIFICATION_TYPE{"[FIRST]"}                                                             |
| 101 | ziterator3              | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_LU_CERTIFICATION_TYPE{":"}SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE                                                         |
| 103 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[*]"}                                                                           |
| 104 | zlectura4               | zsubsesion + "!" + znodo4                                            | SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC                                                                                  |
| 105 | zraiz4a                 | zsubsesion + "!" + znodo4 + "."                                      | SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"."}                                                                             |
| 106 | zraiz4                  | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."  | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}                      |
| 107 | zmove4                  | znodo4 + ":" + znodo4 + "[FIRST]"                                    | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_JOB_POST_CERTIFICATION_LIC{"[FIRST]"}                                                   |
| 108 | ziterator4              | znodo4 + ":" + zsubsesion + "!" + znodo4                             | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC                                               |
| 112 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA"                          | CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                        |
| 113 | zmetodopersist          | "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR"                        | GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                      |
| 117 | zSTDIDCOUNTRY           | zraiz1 + "STD_ID_COUNTRY"                                            | SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_ID_COUNTRY"}                                                                              |
| 118 | zSTDNCOUNTRY            | zraiz1 + "STD_N_COUNTRY"                                             | SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_N_COUNTRY"}                                                                               |
| 120 | zSCOIDISSUEENTIT        | zraiz2 + "SCO_ID_ISSUE_ENTIT"                                        | SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"."}{"SCO_ID_ISSUE_ENTIT"}                                                                      |
| 121 | zSCONISSUEENTIT         | zraiz2 + "SCO_N_ISSUE_ENTIT"                                         | SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"."}{"SCO_N_ISSUE_ENTIT"}                                                                       |
| 123 | zSTDIDCERTIFICATIONTYPE | zraiz3 + "STD_ID_CERTIFICATION_TYPE"                                 | SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"."}{"STD_ID_CERTIFICATION_TYPE"}                                                     |
| 124 | zSTDNCERTIFICATIONTYPE  | zraiz3 + "STD_N_CERTIFICATION_TYPE"                                  | SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"."}{"STD_N_CERTIFICATION_TYPE"}                                                      |
| 126 | zREQUERIDO              | zraiz4 + "REQUERIDO"                                                 | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}         |
| 127 | zENTIDADEMISORA         | zraiz4 + "ENTIDAD_EMISORA"                                           | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"ENTIDAD_EMISORA"}   |
| 128 | zPAIS                   | zraiz4 + "PAIS"                                                      | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}              |
| 129 | zTIPOCERTIFICADO        | zraiz4 + "TIPO_CERTIFICADO"                                          | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"TIPO_CERTIFICADO"}  |
| 130 | zSCOORCERTIFLIC         | zraiz4 + "SCO_OR_CERTIF_LIC"                                         | SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_CERTIF_LIC"} |
| 148 | zcount4                 | 0                                                                    | 0                                                                                                                              |
| 149 | zcounti4                | 0                                                                    | 0                                                                                                                              |
| 158 | zcountv4                | String.valueOf(zcounti4)                                             | String.valueOf(zcounti4)                                                                                                       |
| 236 | zposicions              | "0"                                                                  | 0                                                                                                                              |
| 237 | zcontrol                | 0                                                                    | 0                                                                                                                              |
| 238 | zposicion               | 0                                                                    | 0                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                  |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 133 | m4:startpage | m4task=SSM_VACANT                                                                                                                                   |
| 133 | m4:beginjob  |                                                                                                                                                     |
| 134 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                                                   |
| 136 | m4:exec      | m4method=GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                                  |
| 136 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                                                |
| 137 | m4:exec      | m4method=CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                                    |
| 137 | m4:param     | name=TIPO_CARGA; value=wiz3                                                                                                                         |
| 138 | m4:outputdef | m4alias=SSM_COUNTRY                                                                                                                                 |
| 138 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_COUNTRY{"[*]"}                                                                                               |
| 139 | m4:outputdef | m4alias=SSM_LU_ISSU_ENT                                                                                                                             |
| 139 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"[*]"}                                                                                           |
| 140 | m4:outputdef | m4alias=SSM_LU_CERTIFICATION_TYPE                                                                                                                   |
| 140 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"[*]"}                                                                                 |
| 141 | m4:outputdef | m4alias=SSM_JOB_POST_CERTIFICATION_LIC                                                                                                              |
| 141 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[*]"}                                                                            |
| 142 | m4:endjob    |                                                                                                                                                     |
| 143 | m4:move      |                                                                                                                                                     |
| 143 | m4:param     | name=SSM_VACANT; value=SSM_COUNTRY{":"}SSM_COUNTRY{"[FIRST]"}                                                                                       |
| 144 | m4:move      |                                                                                                                                                     |
| 144 | m4:param     | name=SSM_VACANT; value=SSM_LU_ISSU_ENT{":"}SSM_LU_ISSU_ENT{"[FIRST]"}                                                                               |
| 145 | m4:move      |                                                                                                                                                     |
| 145 | m4:param     | name=SSM_VACANT; value=SSM_LU_CERTIFICATION_TYPE{":"}SSM_LU_CERTIFICATION_TYPE{"[FIRST]"}                                                           |
| 146 | m4:move      |                                                                                                                                                     |
| 146 | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_JOB_POST_CERTIFICATION_LIC{"[FIRST]"}                                                 |
| 179 | m4:iterator  | m4rows=*; m4node=SSM_LU_CERTIFICATION_TYPE{":"}SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE                                                             |
| 180 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"."}{"STD_ID_CERTIFICATION_TYPE"}                                                      |
| 181 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_CERTIFICATION_TYPE{"."}{"STD_N_CERTIFICATION_TYPE"}                                                       |
| 195 | m4:iterator  | m4rows=*; m4node=SSM_LU_ISSU_ENT{":"}SSM_VACANT{"!"}SSM_LU_ISSU_ENT                                                                                 |
| 196 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"."}{"SCO_ID_ISSUE_ENTIT"}                                                                       |
| 197 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_ISSU_ENT{"."}{"SCO_N_ISSUE_ENTIT"}                                                                        |
| 208 | m4:iterator  | m4rows=*; m4node=SSM_COUNTRY{":"}SSM_VACANT{"!"}SSM_COUNTRY                                                                                         |
| 209 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_ID_COUNTRY"}                                                                               |
| 210 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_COUNTRY{"."}{"STD_N_COUNTRY"}                                                                                |
| 241 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti4).intValue()-1).toString()                                                                               |
| 248 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"TIPO_CERTIFICADO"}; htmlsafe=true |
| 249 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"ENTIDAD_EMISORA"}; htmlsafe=true  |
| 250 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}; htmlsafe=true             |
| 251 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true        |
| 257 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"TIPO_CERTIFICADO"}; htmlsafe=true |
| 258 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"ENTIDAD_EMISORA"}; htmlsafe=true  |
| 259 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"PAIS"}; htmlsafe=true             |
| 260 | m4:item      | m4name=SSM_JOB_POST_CERTIFICATION_LIC{":"}SSM_VACANT{"!"}SSM_JOB_POST_CERTIFICATION_LIC{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true        |
| 273 | m4:endpage   |                                                                                                                                                     |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 152 | getCount         | znodo4,zsubsesion,znodo4 |
| 156 | getCountInClient | znodo4,zsubsesion,znodo4 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos  |
| --- | --------- | ----------- |
| 14  | navegar   | _valor,_url |
| 19  | comprobar | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((null==val_certif) &#124;&#124; (''==val_certif)){                                                                    |
| 30  | if (scocheck.checked){                                                                                                    |
| 33  | if (1==falta_valor){alert(mensaje)}                                                                                       |
| 34  | if (0==falta_valor){                                                                                                      |
| 51  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 54  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 225 | if (zcount4 &gt; 0) {                                                                                                     |
| 246 | if (zcontrol==0){%&gt;                                                                                                    |
| 255 | &lt;%}else{%&gt;                                                                                                          |
| 22  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                    |
| 85  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 86  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 87  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 88  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 89  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 91  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 92  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 93  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 94  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 95  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 97  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 98  | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 99  | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                     |
| 100 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 101 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 103 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                              |
| 104 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                        |
| 105 | expresión de cálculo/transformación: String zraiz4a = zsubsesion + "!" + znodo4 + ".";                                    |
| 106 | expresión de cálculo/transformación: String zraiz4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."; |
| 107 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";                                   |
| 108 | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                        |
| 112 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";                   |
| 113 | expresión de cálculo/transformación: String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";               |
| 117 | expresión de cálculo/transformación: String zSTDIDCOUNTRY = zraiz1 + "STD_ID_COUNTRY";                                    |
| 118 | expresión de cálculo/transformación: String zSTDNCOUNTRY = zraiz1 + "STD_N_COUNTRY";                                      |
| 120 | expresión de cálculo/transformación: String zSCOIDISSUEENTIT = zraiz2 + "SCO_ID_ISSUE_ENTIT";                             |
| 121 | expresión de cálculo/transformación: String zSCONISSUEENTIT = zraiz2 + "SCO_N_ISSUE_ENTIT";                               |
| 123 | expresión de cálculo/transformación: String zSTDIDCERTIFICATIONTYPE = zraiz3 + "STD_ID_CERTIFICATION_TYPE";               |
| 124 | expresión de cálculo/transformación: String zSTDNCERTIFICATIONTYPE = zraiz3 + "STD_N_CERTIFICATION_TYPE";                 |
| 126 | expresión de cálculo/transformación: String zREQUERIDO = zraiz4 + "REQUERIDO";                                            |
| 127 | expresión de cálculo/transformación: String zENTIDADEMISORA = zraiz4 + "ENTIDAD_EMISORA";                                 |
| 128 | expresión de cálculo/transformación: String zPAIS = zraiz4 + "PAIS";                                                      |
| 129 | expresión de cálculo/transformación: String zTIPOCERTIFICADO = zraiz4 + "TIPO_CERTIFICADO";                               |
| 130 | expresión de cálculo/transformación: String zSCOORCERTIFLIC = zraiz4 + "SCO_OR_CERTIF_LIC";                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 65  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 135 | ../../mss_g3/espanol/persist.jsp                      |
| 270 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                   |
| 9   | /libreria/funciones_sse.js                                                            |
| 11  | /libreria/clase_val_entradas.js                                                       |
| 164 | /iconos/noname_solicitar_vacantes_210_100.gif                                         |
| 169 | javascript:comprobar()                                                                |
| 218 | javascript:navegar(2,                                                                 |
| 218 | /iconos/icono_anterior_36_36.gif                                                      |
| 219 | javascript:comprobar(3,                                                               |
| 219 | /iconos/icono_aceptar_mss_36_36.gif                                                   |
| 220 | javascript:navegar(4,                                                                 |
| 220 | /iconos/icono_siguiente_36_36.gif                                                     |
| 252 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name= |
| 252 | /iconos/icono_borrar_16_16.gif                                                        |
| 261 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name= |
| 261 | /iconos/icono_borrar_16_16.gif                                                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                                               |
| 65  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         |
| 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    |
| 135 | ../../mss_g3/espanol/persist.jsp                                                      |
| 218 | mss_g3/mss_g3_p1_wiz2.jsp                                                             |
| 219 | mss_g3/mss_g3_p1_wiz3.jsp                                                             |
| 220 | mss_g3/mss_g3_p1_wiz4.jsp                                                             |
| 270 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 65  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 135 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 270 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 169 | javascript:comprobar()                                                                | dinámica   | P06                                                                                              |
| BASE   | 218 | javascript:navegar(2,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 219 | javascript:comprobar(3,                                                               | dinámica   | P06                                                                                              |
| BASE   | 220 | javascript:navegar(4,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 252 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 261 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz3.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 65  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 67  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 135 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 218 | mss_g3/mss_g3_p1_wiz2.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 219 | mss_g3/mss_g3_p1_wiz3.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 220 | mss_g3/mss_g3_p1_wiz4.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 270 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
