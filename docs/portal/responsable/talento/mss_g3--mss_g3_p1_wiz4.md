# Historial académico

Identificador: `mss_g3/mss_g3_p1_wiz4.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz4.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz4.jsp) | `da6f797ecb29bbfa7c20cf650634e49dd4025120c860285e800ebef514e72a4b` |    326 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz4.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| 7   | Historial académico                                                                                                 |
| 214 | Historial académico                                                                                                 |
| 220 | Añade el historial académico requerido para esta vacante. Asegúrate de añadir los datos al finalizar el formulario. |
| 226 | Historial académico                                                                                                 |
| 229 | Titulación                                                                                                          |
| 230 | [valor dinámico] $M4ITEM1$                                                                                          |
| 242 | Especialidad                                                                                                        |
| 243 | $M4ITEM1$                                                                                                           |
| 255 | * Tipo de estudios                                                                                                  |
| 256 | $M4ITEM1$                                                                                                           |
| 266 | Requerido                                                                                                           |
| 283 | Titulación                                                                                                          |
| 284 | Especialidad                                                                                                        |
| 285 | Tipo de estudios                                                                                                    |
| 286 | Requerido                                                                                                           |
| 306 | ')"&gt;                                                                                                             |
| 314 | ')"&gt;                                                                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 218 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                                                                  |
| 223 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                                                               |
| 231 | select  | id=STD_ID_EDU_TYPE; name=STD_ID_EDU_TYPE; title=Seleccionar titulación; class=fuenteformulario200; onchange=javascript:loadSpecial()                                                                                                                |
| 232 | option  | value=&lt;%=sValueEduType%&gt;                                                                                                                                                                                                                      |
| 236 | option  | value=$M4ITEM0$                                                                                                                                                                                                                                     |
| 244 | select  | id=STD_ID_EDU_SP; name=STD_ID_EDU_SP; title=Seleccionar especialidad; class=fuenteformulario200                                                                                                                                                     |
| 245 | option  | value=                                                                                                                                                                                                                                              |
| 249 | option  | value=$M4ITEM0$                                                                                                                                                                                                                                     |
| 257 | select  | id=STD_ID_DIPLOMA; class=fuenteformulario200; name=STD_ID_DIPLOMA; title=Seleccionar tipo de estudios                                                                                                                                               |
| 258 | option  | value=                                                                                                                                                                                                                                              |
| 262 | option  | value=$M4ITEM0$                                                                                                                                                                                                                                     |
| 267 | input   | id=SCO_CHECK; type=checkbox; name=SCO_CHECK                                                                                                                                                                                                         |
| 272 | a       | href=javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');                                                                                                                                                                                             |
| 272 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                                                |
| 273 | a       | href=javascript:comprobar(4,'mss_g3/mss_g3_p1_wiz4.jsp');                                                                                                                                                                                           |
| 273 | img     | alt=Añadir historial académico a la vacante; title=Añadir historial académico a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                               |
| 274 | a       | href=javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');                                                                                                                                                                                             |
| 274 | img     | alt=Siguiente; title=Siguiente; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                                             |
| 306 | a       | href=javascript:eliminar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                                                            |
| 306 | img     | align=right; title=Eliminar registro; alt=Eliminar historial académico de la vacante; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 314 | a       | href=javascript:eliminar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                                                            |
| 314 | img     | align=right; title=Eliminar registro; alt=Eliminar historial académico de la vacante; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 73  | estado          | getParameter(request,"estado")       |
| 74  | zinicios        | getParameter(request,"zinicios")     |
| 82  | NameEduType     | getParameter(request,"NameEduType")  |
| 85  | ValueEduType    | getParameter(request,"ValueEduType") |

| L   | Variable       | Expresión fuente                                                         | Resolución estática parcial                                                                                               |
| --- | -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 73  | estado         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                        |
| 74  | zinicios       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                      |
| 82  | sNameEduType   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NameEduType")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NameEduType")                                                   |
| 85  | sValueEduType  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ValueEduType") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ValueEduType")                                                  |
| 90  | OpcionActiva   | 4                                                                        | 4                                                                                                                         |
| 100 | zsubsesion     | "SSM_VACANT"                                                             | SSM_VACANT                                                                                                                |
| 101 | zmeta4object   | "SSM_VACANT"                                                             | SSM_VACANT                                                                                                                |
| 102 | znodo1         | "SSM_LU_EDU_DIPLOMA"                                                     | SSM_LU_EDU_DIPLOMA                                                                                                        |
| 103 | znodo2         | "SSM_LU_EDU_DIP_LEVEL"                                                   | SSM_LU_EDU_DIP_LEVEL                                                                                                      |
| 104 | znodo3         | "SSM_LU_EDU_SPECIALITY"                                                  | SSM_LU_EDU_SPECIALITY                                                                                                     |
| 105 | znodo4         | "SSM_LU_EDU_TYPE"                                                        | SSM_LU_EDU_TYPE                                                                                                           |
| 106 | znodo5         | "SSM_JOB_POST_ACAD_BACKGROUND"                                           | SSM_JOB_POST_ACAD_BACKGROUND                                                                                              |
| 107 | ztipocarga     | "wiz4"                                                                   | wiz4                                                                                                                      |
| 111 | zventanas      | "10"                                                                     | 10                                                                                                                        |
| 112 | zvuelta        | 5                                                                        | 5                                                                                                                         |
| 116 | zoutputdef1    | zsubsesion + "!" + znodo1 + "[*]"                                        | SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"[*]"}                                                                                  |
| 117 | zlectura1      | zsubsesion + "!" + znodo1                                                | SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA                                                                                         |
| 118 | zraiz1         | zsubsesion + "!" + znodo1 + "."                                          | SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"."}                                                                                    |
| 119 | zmove1         | znodo1 + ":" + znodo1 + "[FIRST]"                                        | SSM_LU_EDU_DIPLOMA{":"}SSM_LU_EDU_DIPLOMA{"[FIRST]"}                                                                      |
| 120 | ziterator1     | znodo1 + ":" + zsubsesion + "!" + znodo1                                 | SSM_LU_EDU_DIPLOMA{":"}SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA                                                                  |
| 122 | zoutputdef2    | zsubsesion + "!" + znodo2 + "[*]"                                        | SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL{"[*]"}                                                                                |
| 123 | zlectura2      | zsubsesion + "!" + znodo2                                                | SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL                                                                                       |
| 124 | zraiz2         | zsubsesion + "!" + znodo2 + "."                                          | SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL{"."}                                                                                  |
| 125 | zmove2         | znodo2 + ":" + znodo2 + "[FIRST]"                                        | SSM_LU_EDU_DIP_LEVEL{":"}SSM_LU_EDU_DIP_LEVEL{"[FIRST]"}                                                                  |
| 126 | ziterator2     | znodo2 + ":" + zsubsesion + "!" + znodo2                                 | SSM_LU_EDU_DIP_LEVEL{":"}SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL                                                              |
| 128 | zoutputdef3    | zsubsesion + "!" + znodo3 + "[*]"                                        | SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"[*]"}                                                                               |
| 129 | zlectura3      | zsubsesion + "!" + znodo3                                                | SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY                                                                                      |
| 130 | zraiz3         | zsubsesion + "!" + znodo3 + "."                                          | SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"."}                                                                                 |
| 131 | zmove3         | znodo3 + ":" + znodo3 + "[FIRST]"                                        | SSM_LU_EDU_SPECIALITY{":"}SSM_LU_EDU_SPECIALITY{"[FIRST]"}                                                                |
| 132 | ziterator3     | znodo3 + ":" + zsubsesion + "!" + znodo3                                 | SSM_LU_EDU_SPECIALITY{":"}SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY                                                            |
| 134 | zoutputdef4    | zsubsesion + "!" + znodo4 + "[*]"                                        | SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"[*]"}                                                                                     |
| 135 | zlectura4      | zsubsesion + "!" + znodo4                                                | SSM_VACANT{"!"}SSM_LU_EDU_TYPE                                                                                            |
| 136 | zraiz4         | zsubsesion + "!" + znodo4 + "."                                          | SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"."}                                                                                       |
| 137 | zmove4         | znodo4 + ":" + znodo4 + "[FIRST]"                                        | SSM_LU_EDU_TYPE{":"}SSM_LU_EDU_TYPE{"[FIRST]"}                                                                            |
| 138 | ziterator4     | znodo4 + ":" + zsubsesion + "!" + znodo4                                 | SSM_LU_EDU_TYPE{":"}SSM_VACANT{"!"}SSM_LU_EDU_TYPE                                                                        |
| 140 | zoutputdef5    | zsubsesion + "!" + znodo5 + "[*]"                                        | SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[*]"}                                                                        |
| 141 | zlectura5      | zsubsesion + "!" + znodo5                                                | SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND                                                                               |
| 142 | zraiz5a        | zsubsesion + "!" + znodo5 + "."                                          | SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"."}                                                                          |
| 143 | zraiz5         | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."      | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                     |
| 144 | zmove5         | znodo5 + ":" + znodo5 + "[FIRST]"                                        | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_JOB_POST_ACAD_BACKGROUND{"[FIRST]"}                                                  |
| 145 | ziterator5     | znodo5 + ":" + zsubsesion + "!" + znodo5                                 | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND                                              |
| 149 | zmetodocarga   | "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA"                              | CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                   |
| 150 | zmetodopersist | "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR"                            | GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                 |
| 154 | zSTDIDDIPLOMA  | zraiz1 + "STD_ID_DIPLOMA"                                                | SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"."}{"STD_ID_DIPLOMA"}                                                                  |
| 155 | zSTDNDIPLOMA   | zraiz1 + "STD_N_DIPLOMA"                                                 | SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"."}{"STD_N_DIPLOMA"}                                                                   |
| 157 | zSTDIDDIPLEVEL | zraiz2 + "STD_ID_DIP_LEVEL"                                              | SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL{"."}{"STD_ID_DIP_LEVEL"}                                                              |
| 158 | zSTDNDIPLEVEL  | zraiz2 + "STD_N_DIP_LEVEL"                                               | SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL{"."}{"STD_N_DIP_LEVEL"}                                                               |
| 160 | zSTDIDEDUSP    | zraiz3 + "STD_ID_EDU_SP"                                                 | SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"."}{"STD_ID_EDU_SP"}                                                                |
| 161 | zSTDNEDUSP     | zraiz3 + "STD_N_EDU_SP"                                                  | SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"."}{"STD_N_EDU_SP"}                                                                 |
| 163 | zSTDIDEDUTYPE  | zraiz4 + "STD_ID_EDU_TYPE"                                               | SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"."}{"STD_ID_EDU_TYPE"}                                                                    |
| 164 | zSTDNEDUTYPE   | zraiz4 + "STD_N_EDU_TYPE"                                                | SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"."}{"STD_N_EDU_TYPE"}                                                                     |
| 166 | zREQUERIDO     | zraiz5 + "REQUERIDO"                                                     | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}        |
| 167 | zTITULACION    | zraiz5 + "TITULACION"                                                    | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TITULACION"}       |
| 168 | zESPECIALIDAD  | zraiz5 + "ESPECIALIDAD"                                                  | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ESPECIALIDAD"}     |
| 169 | zTIPOFORMACION | zraiz5 + "TIPO_FORMACION"                                                | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TIPO_FORMACION"}   |
| 170 | zSTDORACADBACK | zraiz5 + "STD_OR_ACAD_BACK"                                              | SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_ACAD_BACK"} |
| 177 | sFilterSpecial | "If 0 = 0 Then Return(1)"                                                | If 0 = 0 Then Return(1)                                                                                                   |
| 200 | zcount5        | 0                                                                        | 0                                                                                                                         |
| 201 | zcounti5       | 0                                                                        | 0                                                                                                                         |
| 210 | zcountv5       | String.valueOf(zcounti5)                                                 | String.valueOf(zcounti5)                                                                                                  |
| 290 | zposicions     | "0"                                                                      | 0                                                                                                                         |
| 291 | zcontrol       | 0                                                                        | 0                                                                                                                         |
| 292 | zposicion      | 0                                                                        | 0                                                                                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                            |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 173 | m4:startpage | m4task=SSM_VACANT                                                                                                                             |
| 173 | m4:beginjob  |                                                                                                                                               |
| 174 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                                             |
| 179 | m4:filter    | m4name=SSM_VACANT!SSM_LU_EDU_SPECIALITY.FilterSpecial; m4filter=If 0 = 0 Then Return(1)                                                       |
| 180 | m4:exec      | m4method=GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                            |
| 180 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                                          |
| 181 | m4:exec      | m4method=CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                              |
| 181 | m4:param     | name=TIPO_CARGA; value=wiz4                                                                                                                   |
| 182 | m4:outputdef | m4alias=SSM_LU_EDU_DIPLOMA                                                                                                                    |
| 182 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"[*]"}                                                                                  |
| 183 | m4:outputdef | m4alias=SSM_LU_EDU_DIP_LEVEL                                                                                                                  |
| 183 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_EDU_DIP_LEVEL{"[*]"}                                                                                |
| 188 | m4:filter    | m4name=SSM_VACANT!SSM_LU_EDU_SPECIALITY.FilterSpecial; m4filter=If 0 = 0 Then Return(1)                                                       |
| 189 | m4:outputdef | m4alias=SSM_LU_EDU_SPECIALITY                                                                                                                 |
| 189 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"[*]"}                                                                               |
| 191 | m4:outputdef | m4alias=SSM_LU_EDU_TYPE                                                                                                                       |
| 191 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"[*]"}                                                                                     |
| 192 | m4:outputdef | m4alias=SSM_JOB_POST_ACAD_BACKGROUND                                                                                                          |
| 192 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[*]"}                                                                        |
| 193 | m4:endjob    |                                                                                                                                               |
| 194 | m4:move      |                                                                                                                                               |
| 194 | m4:param     | name=SSM_VACANT; value=SSM_LU_EDU_DIPLOMA{":"}SSM_LU_EDU_DIPLOMA{"[FIRST]"}                                                                   |
| 195 | m4:move      |                                                                                                                                               |
| 195 | m4:param     | name=SSM_VACANT; value=SSM_LU_EDU_DIP_LEVEL{":"}SSM_LU_EDU_DIP_LEVEL{"[FIRST]"}                                                               |
| 196 | m4:move      |                                                                                                                                               |
| 196 | m4:param     | name=SSM_VACANT; value=SSM_LU_EDU_SPECIALITY{":"}SSM_LU_EDU_SPECIALITY{"[FIRST]"}                                                             |
| 197 | m4:move      |                                                                                                                                               |
| 197 | m4:param     | name=SSM_VACANT; value=SSM_LU_EDU_TYPE{":"}SSM_LU_EDU_TYPE{"[FIRST]"}                                                                         |
| 198 | m4:move      |                                                                                                                                               |
| 198 | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_JOB_POST_ACAD_BACKGROUND{"[FIRST]"}                                               |
| 233 | m4:iterator  | m4rows=*; m4node=SSM_LU_EDU_TYPE{":"}SSM_VACANT{"!"}SSM_LU_EDU_TYPE                                                                           |
| 234 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"."}{"STD_ID_EDU_TYPE"}                                                                    |
| 235 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_EDU_TYPE{"."}{"STD_N_EDU_TYPE"}                                                                     |
| 246 | m4:iterator  | m4rows=*; m4node=SSM_LU_EDU_SPECIALITY{":"}SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY                                                               |
| 247 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"."}{"STD_ID_EDU_SP"}                                                                |
| 248 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_EDU_SPECIALITY{"."}{"STD_N_EDU_SP"}                                                                 |
| 259 | m4:iterator  | m4rows=*; m4node=SSM_LU_EDU_DIPLOMA{":"}SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA                                                                     |
| 260 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"."}{"STD_ID_DIPLOMA"}                                                                  |
| 261 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_EDU_DIPLOMA{"."}{"STD_N_DIPLOMA"}                                                                   |
| 295 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti5).intValue()-1).toString()                                                                         |
| 302 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TIPO_FORMACION"}; htmlsafe=true |
| 303 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ESPECIALIDAD"}; htmlsafe=true   |
| 304 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TITULACION"}; htmlsafe=true     |
| 305 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true      |
| 310 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TIPO_FORMACION"}; htmlsafe=true |
| 311 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ESPECIALIDAD"}; htmlsafe=true   |
| 312 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"TITULACION"}; htmlsafe=true     |
| 313 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACKGROUND{":"}SSM_VACANT{"!"}SSM_JOB_POST_ACAD_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true      |
| 326 | m4:endpage   |                                                                                                                                               |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 204 | getCount         | znodo5,zsubsesion,znodo5 |
| 208 | getCountInClient | znodo5,zsubsesion,znodo5 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos  |
| --- | ----------- | ----------- |
| 14  | eliminar    | v           |
| 19  | navegar     | _valor,_url |
| 25  | loadSpecial |             |
| 36  | comprobar   | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 29  | if ((null==sValue) &#124;&#124; (''==sValue)) return;                                                                     |
| 43  | if ((null==val_edutype) &#124;&#124; (''==val_edutype)){                                                                  |
| 47  | if (scocheck.checked){                                                                                                    |
| 50  | if (falta_valor==1){                                                                                                      |
| 51  | alert(mensaje);                                                                                                           |
| 55  | if (0==falta_valor){                                                                                                      |
| 75  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 78  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 83  | if ((sNameEduType==null)&#124;&#124;(sNameEduType.equals(""))) sNameEduType=" ";                                          |
| 86  | if ((sValueEduType==null)&#124;&#124;(sValueEduType.equals(""))) sValueEduType=" ";                                       |
| 279 | if (zcount5 &gt; 0) {                                                                                                     |
| 300 | if (zcontrol==0){%&gt;                                                                                                    |
| 308 | &lt;%}else{%&gt;                                                                                                          |
| 39  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                    |
| 116 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 117 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 118 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 119 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 120 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 122 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 123 | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 124 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 125 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 126 | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 128 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 129 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 130 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                     |
| 131 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 132 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 134 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                              |
| 135 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                        |
| 136 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                     |
| 137 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";                                   |
| 138 | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                        |
| 140 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                              |
| 141 | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                        |
| 142 | expresión de cálculo/transformación: String zraiz5a = zsubsesion + "!" + znodo5 + ".";                                    |
| 143 | expresión de cálculo/transformación: String zraiz5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."; |
| 144 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";                                   |
| 145 | expresión de cálculo/transformación: String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                        |
| 149 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";                   |
| 150 | expresión de cálculo/transformación: String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";               |
| 154 | expresión de cálculo/transformación: String zSTDIDDIPLOMA = zraiz1 + "STD_ID_DIPLOMA";                                    |
| 155 | expresión de cálculo/transformación: String zSTDNDIPLOMA = zraiz1 + "STD_N_DIPLOMA";                                      |
| 157 | expresión de cálculo/transformación: String zSTDIDDIPLEVEL = zraiz2 + "STD_ID_DIP_LEVEL";                                 |
| 158 | expresión de cálculo/transformación: String zSTDNDIPLEVEL = zraiz2 + "STD_N_DIP_LEVEL";                                   |
| 160 | expresión de cálculo/transformación: String zSTDIDEDUSP = zraiz3 + "STD_ID_EDU_SP";                                       |
| 161 | expresión de cálculo/transformación: String zSTDNEDUSP = zraiz3 + "STD_N_EDU_SP";                                         |
| 163 | expresión de cálculo/transformación: String zSTDIDEDUTYPE = zraiz4 + "STD_ID_EDU_TYPE";                                   |
| 164 | expresión de cálculo/transformación: String zSTDNEDUTYPE = zraiz4 + "STD_N_EDU_TYPE";                                     |
| 166 | expresión de cálculo/transformación: String zREQUERIDO = zraiz5 + "REQUERIDO";                                            |
| 167 | expresión de cálculo/transformación: String zTITULACION = zraiz5 + "TITULACION";                                          |
| 168 | expresión de cálculo/transformación: String zESPECIALIDAD = zraiz5 + "ESPECIALIDAD";                                      |
| 169 | expresión de cálculo/transformación: String zTIPOFORMACION = zraiz5 + "TIPO_FORMACION";                                   |
| 170 | expresión de cálculo/transformación: String zSTDORACADBACK = zraiz5 + "STD_OR_ACAD_BACK";                                 |
| 186 | expresión de cálculo/transformación: sFilterSpecial = "If STD_ID_EDU_TYPE=\"" + sValueEduType + "\" Then Return(1)";      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 95  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 97  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 175 | ../../mss_g3/espanol/persist.jsp                      |
| 323 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 8   | /css/estilo_mss.css                                   |
| 9   | /libreria/funciones_sse.js                            |
| 11  | /libreria/clase_val_entradas.js                       |
| 218 | /iconos/noname_solicitar_vacantes_210_100.gif         |
| 223 | javascript:comprobar()                                |
| 272 | javascript:navegar(3,                                 |
| 272 | /iconos/icono_anterior_36_36.gif                      |
| 273 | javascript:comprobar(4,                               |
| 273 | /iconos/icono_aceptar_mss_36_36.gif                   |
| 274 | javascript:navegar(5,                                 |
| 274 | /iconos/icono_siguiente_36_36.gif                     |
| 306 | javascript:eliminar(                                  |
| 306 | /iconos/icono_borrar_16_16.gif                        |
| 314 | javascript:eliminar(                                  |
| 314 | /iconos/icono_borrar_16_16.gif                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 17  | mss_g3/mss_g3_eliminar_wiz4.jsp                       |
| 30  | mss_g3/mss_g3_p1_wiz4.jsp                             |
| 95  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 97  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 175 | ../../mss_g3/espanol/persist.jsp                      |
| 272 | mss_g3/mss_g3_p1_wiz3.jsp                             |
| 273 | mss_g3/mss_g3_p1_wiz4.jsp                             |
| 274 | mss_g3/mss_g3_p1_wiz5.jsp                             |
| 323 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 95  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 97  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 175 | ../../mss_g3/espanol/persist.jsp                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 323 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 223 | javascript:comprobar()                                | dinámica   | P06                                                                                              |
| BASE   | 272 | javascript:navegar(3,                                 | dinámica   | P06                                                                                              |
| BASE   | 273 | javascript:comprobar(4,                               | dinámica   | P06                                                                                              |
| BASE   | 274 | javascript:navegar(5,                                 | dinámica   | P06                                                                                              |
| BASE   | 306 | javascript:eliminar(                                  | dinámica   | P06                                                                                              |
| BASE   | 314 | javascript:eliminar(                                  | dinámica   | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 17  | mss_g3/mss_g3_eliminar_wiz4.jsp                       | ausente    | P06                                                                                              |
| BASE   | 30  | mss_g3/mss_g3_p1_wiz4.jsp                             | ausente    | P06                                                                                              |
| BASE   | 95  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 97  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 175 | ../../mss_g3/espanol/persist.jsp                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 272 | mss_g3/mss_g3_p1_wiz3.jsp                             | ausente    | P06                                                                                              |
| BASE   | 273 | mss_g3/mss_g3_p1_wiz4.jsp                             | ausente    | P06                                                                                              |
| BASE   | 274 | mss_g3/mss_g3_p1_wiz5.jsp                             | ausente    | P06                                                                                              |
| BASE   | 323 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
