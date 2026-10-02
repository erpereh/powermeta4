# funciones_gta_monthly_view_presence

Identificador: `libreria/funciones_gta_monthly_view_presence.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_gta_monthly_view_presence.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_gta_monthly_view_presence.js) | `3ebd2c1330cbb1f08f270ba92a971ca72316af231a7c5faada8a5d9f1e65d691` |    696 |
| BASE / compartido | [libreria/funciones_gta_monthly_view_presence.js](../../../../clon_portal/portal/libreria/funciones_gta_monthly_view_presence.js)                             | `3ebd2c1330cbb1f08f270ba92a971ca72316af231a7c5faada8a5d9f1e65d691` |    696 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_gta_monthly_view_presence.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_gta_monthly_view_presence.js) | `3ebd2c1330cbb1f08f270ba92a971ca72316af231a7c5faada8a5d9f1e65d691` |    696 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_gta_monthly_view_presence.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_gta_monthly_view_presence.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos            |
| --- | ------------------ | --------------------- |
| 1   | showDayDetailles   | date                  |
| 12  | GoPrevious         |                       |
| 18  | GoNext             |                       |
| 26  | setStartDate       |                       |
| 64  | setEndtDate        |                       |
| 103 | LoadDataInPeriod   |                       |
| 144 | save_declarative   |                       |
| 222 | executeForThisDate | date                  |
| 230 | validate_changes   |                       |
| 258 | Unblock_Employee   |                       |
| 278 | InvisibilitySet    | what                  |
| 289 | VisibilitySet      | what                  |
| 299 | RemonterAll        |                       |
| 306 | checkIfHoursValid  | field_to_check,idx    |
| 623 | checkIfHourIsValid | field_to_check,record |

| L   | Condición / acción / mensaje literal                                                                                                                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39  | if (value_year.length &lt; 4)                                                                                                                                                                              |
| 41  | if (value_month.length &lt; 2)                                                                                                                                                                             |
| 43  | if (value_day.length &lt; 2)                                                                                                                                                                               |
| 45  | if ((value_year &lt; 1900) &#124;&#124; (value_year &gt; 2100))                                                                                                                                            |
| 47  | if ((value_month &lt; 1) &#124;&#124; (value_month &gt; 12))                                                                                                                                               |
| 49  | if ((value_day &lt; 1) &#124;&#124; (value_day &gt; 31))                                                                                                                                                   |
| 51  | if (isNaN(built_date))                                                                                                                                                                                     |
| 53  | if (set_error == "Y") {                                                                                                                                                                                    |
| 56  | alert(texto)                                                                                                                                                                                               |
| 81  | if (value_year.length &lt; 4)                                                                                                                                                                              |
| 83  | if (value_month.length &lt; 2)                                                                                                                                                                             |
| 85  | if (value_day.length &lt; 2)                                                                                                                                                                               |
| 87  | if ((value_year &lt; 1900) &#124;&#124; (value_year &gt; 2100))                                                                                                                                            |
| 89  | if ((value_month &lt; 1) &#124;&#124; (value_month &gt; 12))                                                                                                                                               |
| 91  | if ((value_day &lt; 1) &#124;&#124; (value_day &gt; 31))                                                                                                                                                   |
| 93  | if (isNaN(built_date))                                                                                                                                                                                     |
| 95  | if (set_error == "Y") {                                                                                                                                                                                    |
| 97  | alert(texto)                                                                                                                                                                                               |
| 106 | if (this_record_value=="")                                                                                                                                                                                 |
| 109 | alert(texto)                                                                                                                                                                                               |
| 120 | if (this_record_value=="")                                                                                                                                                                                 |
| 123 | alert(texto)                                                                                                                                                                                               |
| 150 | if ((this_tp_timesheet=="MANAGE_IN_DECLARATIVE_DAYS") &#124;&#124; (this_tp_timesheet=="MANAGE_IN_CLOCKING_DAYS"))                                                                                         |
| 158 | if (take_into_account=="Y")                                                                                                                                                                                |
| 168 | if (this_tp_timesheet=="MANAGE_HOURS_DECL_NO_CLOCK")                                                                                                                                                       |
| 176 | if (in_the_all_day!="NO_VALUE")                                                                                                                                                                            |
| 187 | if(this_tp_timesheet=="MANAGE_HOURS_DECLART_CLOCK")                                                                                                                                                        |
| 197 | if (hour_in!="")                                                                                                                                                                                           |
| 200 | if (hour_out!="")                                                                                                                                                                                          |
| 203 | if (control_flag==1)                                                                                                                                                                                       |
| 206 | alert(texto)                                                                                                                                                                                               |
| 232 | if (document.getElementById('Blocking').value == "Y")                                                                                                                                                      |
| 235 | alert(texto)                                                                                                                                                                                               |
| 240 | if (document.getElementById('is_period_used').value == "Y")                                                                                                                                                |
| 243 | alert(texto)                                                                                                                                                                                               |
| 247 | else                                                                                                                                                                                                       |
| 261 | if (document.getElementById('is_period_used').value == "Y")                                                                                                                                                |
| 264 | alert(texto)                                                                                                                                                                                               |
| 268 | else                                                                                                                                                                                                       |
| 310 | if (hour_start!="")                                                                                                                                                                                        |
| 313 | if (separator&lt;1)                                                                                                                                                                                        |
| 315 | else                                                                                                                                                                                                       |
| 320 | if ((this_hours.length&gt;2) &#124;&#124; (this_hours.length&lt;1))                                                                                                                                        |
| 322 | if (this_minutes.length!=2)                                                                                                                                                                                |
| 324 | if(isNaN(this_hours) )                                                                                                                                                                                     |
| 326 | if(isNaN(this_minutes) )                                                                                                                                                                                   |
| 328 | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                     |
| 330 | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                 |
| 334 | if(set_error=="Y") {                                                                                                                                                                                       |
| 337 | alert(texto)}                                                                                                                                                                                              |
| 380 | if (first_in_morning_value_hours=="0")                                                                                                                                                                     |
| 387 | if (first_in_morning_value_minutes=="0")                                                                                                                                                                   |
| 395 | if (first_in_afternoon_value_hours=="0")                                                                                                                                                                   |
| 402 | if (first_in_afternoon_value_minutes=="0")                                                                                                                                                                 |
| 409 | if (first_in_all_value_hours=="0")                                                                                                                                                                         |
| 416 | if (first_in_all_value_minutes=="0")                                                                                                                                                                       |
| 423 | if (morning_value!="")                                                                                                                                                                                     |
| 426 | if (afternoon_value!="")                                                                                                                                                                                   |
| 429 | if (all_value!="")                                                                                                                                                                                         |
| 432 | if ((indicador == 0) &#124;&#124; (indicador == 1) &#124;&#124; (indicador == 3) &#124;&#124; (indicador == 5))                                                                                            |
| 437 | if (indicador==4)                                                                                                                                                                                          |
| 449 | if (all_minutes &gt;59)                                                                                                                                                                                    |
| 454 | if (String(all_minutes).length==1)                                                                                                                                                                         |
| 459 | if (String(all_hours).length==1)                                                                                                                                                                           |
| 469 | if (indicador==6)                                                                                                                                                                                          |
| 479 | if ((all_minutes==0) &amp;&amp; (morning_minutes==0))                                                                                                                                                      |
| 484 | if (String(afternoon_hours).length==1)                                                                                                                                                                     |
| 490 | else                                                                                                                                                                                                       |
| 494 | if (afternoon_minutes &lt;= 0)                                                                                                                                                                             |
| 500 | else                                                                                                                                                                                                       |
| 506 | if (String(afternoon_minutes).length==1)                                                                                                                                                                   |
| 509 | if (String(afternoon_hours).length==1)                                                                                                                                                                     |
| 519 | if (indicador==8)                                                                                                                                                                                          |
| 531 | if ((all_minutes==0) &amp;&amp;(afternoon_minutes==0))                                                                                                                                                     |
| 535 | if (String(morning_hours).length==1)                                                                                                                                                                       |
| 541 | else                                                                                                                                                                                                       |
| 544 | if (morning_minutes &lt;= 0)                                                                                                                                                                               |
| 550 | else                                                                                                                                                                                                       |
| 556 | if (String(morning_minutes).length==1)                                                                                                                                                                     |
| 559 | if (String(morning_hours).length==1)                                                                                                                                                                       |
| 570 | if (indicador==9)                                                                                                                                                                                          |
| 582 | if (all_minutes &gt;59)                                                                                                                                                                                    |
| 587 | if (String(all_minutes).length==1)                                                                                                                                                                         |
| 598 | if (first_in_all_compose_value_hours=="0")                                                                                                                                                                 |
| 604 | if (first_in_all_compose_value_minutes=="0")                                                                                                                                                               |
| 607 | if (all_value_compose != all_value)                                                                                                                                                                        |
| 629 | if (this_start_hour == this_end_hour)                                                                                                                                                                      |
| 632 | alert(texto)                                                                                                                                                                                               |
| 639 | if (hour_start!="")                                                                                                                                                                                        |
| 642 | if (separator&lt;1)                                                                                                                                                                                        |
| 644 | else                                                                                                                                                                                                       |
| 649 | if ((this_hours.length&gt;2) &#124;&#124; (this_hours.length&lt;1))                                                                                                                                        |
| 651 | if (this_minutes.length!=2)                                                                                                                                                                                |
| 653 | if(isNaN(this_hours) )                                                                                                                                                                                     |
| 655 | if(isNaN(this_minutes) )                                                                                                                                                                                   |
| 657 | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                     |
| 659 | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                 |
| 663 | if(set_error=="Y") {                                                                                                                                                                                       |
| 666 | alert(texto)}                                                                                                                                                                                              |
| 116 | expresión de cálculo/transformación: this_record_value_start = value_year_start + "-" + value_month_start + "-" + value_day_start                                                                          |
| 129 | expresión de cálculo/transformación: this_record_value_end = value_year_end + "-" + value_month_end + "-" + value_day_end                                                                                  |
| 155 | expresión de cálculo/transformación: take_into_account = document.getElementById('take_into_account_' + i).value                                                                                           |
| 156 | expresión de cálculo/transformación: in_the_morning = document.getElementById('morning_' + i).checked                                                                                                      |
| 157 | expresión de cálculo/transformación: in_the_afternoon = document.getElementById('afternoon_' + i).checked                                                                                                  |
| 159 | expresión de cálculo/transformación: text_to_send = text_to_send + (i-1) + "&#124;&#124;" + in_the_morning + "&#124;&#124;" + in_the_afternoon + "@@"                                                      |
| 162 | expresión de cálculo/transformación: text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE&#124;&#124;" + text_to_send                                                                                            |
| 173 | expresión de cálculo/transformación: in_the_morning = document.getElementById('morning_' + i).value;                                                                                                       |
| 174 | expresión de cálculo/transformación: in_the_afternoon = document.getElementById('afternoon_' + i).value;                                                                                                   |
| 175 | expresión de cálculo/transformación: in_the_all_day = document.getElementById('all_' + i).value;                                                                                                           |
| 177 | expresión de cálculo/transformación: text_to_send = text_to_send + (i-1) + "&#124;&#124;MORNING" + in_the_morning + "&#124;&#124;AFTERNOON" + in_the_afternoon + "&#124;&#124;ALL" + in_the_all_day + "@@" |
| 181 | expresión de cálculo/transformación: text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE_IN_HOURS&#124;&#124;" + text_to_send                                                                                   |
| 196 | expresión de cálculo/transformación: hour_in = document.getElementById('TSlot_in_' + i).value;                                                                                                             |
| 198 | expresión de cálculo/transformación: control_flag = control_flag + 1                                                                                                                                       |
| 199 | expresión de cálculo/transformación: hour_out = document.getElementById('TSlot_out_' + i).value;                                                                                                           |
| 201 | expresión de cálculo/transformación: control_flag = control_flag + 1                                                                                                                                       |
| 210 | expresión de cálculo/transformación: in_out_date = document.getElementById('Date_TSlot_' + i).value;                                                                                                       |
| 211 | expresión de cálculo/transformación: text_to_send = text_to_send + in_out_date + "&#124;&#124;IN" + hour_in + "&#124;&#124;OUT" + hour_out + "@@"                                                          |
| 214 | expresión de cálculo/transformación: text_to_send = "SAVE_MODIFICATIONS_DECLARATIVE_IN_TSLOTS&#124;&#124;" + text_to_send                                                                                  |
| 281 | expresión de cálculo/transformación: b = "table" + a                                                                                                                                                       |
| 282 | expresión de cálculo/transformación: c = b + "Other"                                                                                                                                                       |
| 292 | expresión de cálculo/transformación: b = "table" + a                                                                                                                                                       |
| 293 | expresión de cálculo/transformación: c = b + "Other"                                                                                                                                                       |
| 318 | expresión de cálculo/transformación: this_minutes = hour_start.substring(separator + 1,hour_start.length)                                                                                                  |
| 356 | expresión de cálculo/transformación: var morning_value = document.getElementById('morning_' + idx).value                                                                                                   |
| 357 | expresión de cálculo/transformación: var afternoon_value = document.getElementById('afternoon_' + idx).value                                                                                               |
| 358 | expresión de cálculo/transformación: var all_value = document.getElementById('all_' + idx).value                                                                                                           |
| 378 | expresión de cálculo/transformación: first_in_morning_value_minutes = morning_value.substring(separator_morning + 1,separator_morning + 2)                                                                 |
| 383 | expresión de cálculo/transformación: separator_morning = separator_morning - 1                                                                                                                             |
| 388 | expresión de cálculo/transformación: morning_value = morning_value.substring(0,separator_morning + 1) + morning_value.substring(separator_morning+2,morning_value.length)                                  |
| 393 | expresión de cálculo/transformación: first_in_afternoon_value_minutes = afternoon_value.substring(separator_afternoon + 1,separator_afternoon + 2)                                                         |
| 398 | expresión de cálculo/transformación: separator_afternoon = separator_afternoon - 1                                                                                                                         |
| 403 | expresión de cálculo/transformación: afternoon_value = afternoon_value.substring(0,separator_afternoon + 1) + afternoon_value.substring(separator_afternoon + 2,afternoon_value.length)                    |
| 407 | expresión de cálculo/transformación: first_in_all_value_minutes = all_value.substring(separator_all + 1,separator_all + 2)                                                                                 |
| 412 | expresión de cálculo/transformación: separator_all = separator_all - 1                                                                                                                                     |
| 417 | expresión de cálculo/transformación: all_value = all_value.substring(0,separator_all + 1) + all_value.substring(separator_all + 2,all_value.length)                                                        |
| 424 | expresión de cálculo/transformación: indicador = indicador + 1                                                                                                                                             |
| 427 | expresión de cálculo/transformación: indicador = indicador + 3                                                                                                                                             |
| 430 | expresión de cálculo/transformación: indicador = indicador + 5                                                                                                                                             |
| 440 | expresión de cálculo/transformación: morning_hours = parseInt(morning_value.substring(0,separator_morning))                                                                                                |
| 441 | expresión de cálculo/transformación: morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))                                                                       |
| 444 | expresión de cálculo/transformación: afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))                                                                                          |
| 445 | expresión de cálculo/transformación: afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))                                                               |
| 448 | expresión de cálculo/transformación: all_minutes = morning_minutes + afternoon_minutes                                                                                                                     |
| 451 | expresión de cálculo/transformación: all_minutes = all_minutes - 60                                                                                                                                        |
| 455 | expresión de cálculo/transformación: all_minutes = "0" + String(all_minutes)                                                                                                                               |
| 457 | expresión de cálculo/transformación: all_hours = morning_hours + afternoon_hours + aditional_hour                                                                                                          |
| 460 | expresión de cálculo/transformación: all_hours = "0" + String(all_hours)                                                                                                                                   |
| 462 | expresión de cálculo/transformación: all_value = all_hours + ":" + all_minutes                                                                                                                             |
| 472 | expresión de cálculo/transformación: morning_hours = parseInt(morning_value.substring(0,separator_morning))                                                                                                |
| 473 | expresión de cálculo/transformación: morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))                                                                       |
| 476 | expresión de cálculo/transformación: all_hours = parseInt(all_value.substring(0,separator_all))                                                                                                            |
| 477 | expresión de cálculo/transformación: all_minutes = parseInt(all_value.substring(separator_all + 1,all_value.length))                                                                                       |
| 482 | expresión de cálculo/transformación: afternoon_hours = all_hours - morning_hours                                                                                                                           |
| 485 | expresión de cálculo/transformación: afternoon_hours = "0" + String(afternoon_hours)                                                                                                                       |
| 487 | expresión de cálculo/transformación: afternoon_value = afternoon_hours + ":00"                                                                                                                             |
| 493 | expresión de cálculo/transformación: afternoon_minutes = all_minutes - morning_minutes                                                                                                                     |
| 496 | expresión de cálculo/transformación: afternoon_minutes = (60 - morning_minutes) + all_minutes                                                                                                              |
| 497 | expresión de cálculo/transformación: aditional_hour = - 1                                                                                                                                                  |
| 498 | expresión de cálculo/transformación: afternoon_hours = all_hours - morning_hours + aditional_hour                                                                                                          |
| 502 | expresión de cálculo/transformación: afternoon_minutes = all_minutes - morning_minutes                                                                                                                     |
| 503 | expresión de cálculo/transformación: afternoon_hours = all_hours - morning_hours                                                                                                                           |
| 507 | expresión de cálculo/transformación: afternoon_minutes = "0" + String(afternoon_minutes)                                                                                                                   |
| 510 | expresión de cálculo/transformación: afternoon_hours = "0" + String(afternoon_hours)                                                                                                                       |
| 512 | expresión de cálculo/transformación: afternoon_value = afternoon_hours + ":" + afternoon_minutes                                                                                                           |
| 522 | expresión de cálculo/transformación: afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))                                                                                          |
| 523 | expresión de cálculo/transformación: afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))                                                               |
| 526 | expresión de cálculo/transformación: all_hours = parseInt(all_value.substring(0,separator_all))                                                                                                            |
| 527 | expresión de cálculo/transformación: all_minutes = parseInt(all_value.substring(separator_all + 1,all_value.length))                                                                                       |
| 533 | expresión de cálculo/transformación: morning_hours = all_hours - afternoon_hours                                                                                                                           |
| 536 | expresión de cálculo/transformación: morning_hours = "0" + String(morning_hours)                                                                                                                           |
| 538 | expresión de cálculo/transformación: morning_value = morning_hours + ":00"                                                                                                                                 |
| 543 | expresión de cálculo/transformación: morning_minutes = all_minutes - afternoon_minutes                                                                                                                     |
| 546 | expresión de cálculo/transformación: morning_minutes = (60 - afternoon_minutes) + all_minutes                                                                                                              |
| 547 | expresión de cálculo/transformación: aditional_hour = - 1                                                                                                                                                  |
| 548 | expresión de cálculo/transformación: morning_hours = all_hours - afternoon_hours - 1                                                                                                                       |
| 552 | expresión de cálculo/transformación: morning_minutes = all_minutes - afternoon_minutes                                                                                                                     |
| 553 | expresión de cálculo/transformación: morning_hours = all_hours - afternoon_hours                                                                                                                           |
| 557 | expresión de cálculo/transformación: morning_minutes = "0" + String(morning_minutes)                                                                                                                       |
| 560 | expresión de cálculo/transformación: morning_hours = "0" + String(morning_hours)                                                                                                                           |
| 562 | expresión de cálculo/transformación: morning_value = morning_hours + ":" + morning_minutes                                                                                                                 |
| 573 | expresión de cálculo/transformación: morning_hours = parseInt(morning_value.substring(0,separator_morning))                                                                                                |
| 574 | expresión de cálculo/transformación: morning_minutes = parseInt(morning_value.substring(separator_morning + 1,morning_value.length))                                                                       |
| 577 | expresión de cálculo/transformación: afternoon_hours = parseInt(afternoon_value.substring(0,separator_afternoon))                                                                                          |
| 578 | expresión de cálculo/transformación: afternoon_minutes = parseInt(afternoon_value.substring(separator_afternoon + 1,afternoon_value.length))                                                               |
| 581 | expresión de cálculo/transformación: all_minutes = morning_minutes + afternoon_minutes                                                                                                                     |
| 584 | expresión de cálculo/transformación: all_minutes = all_minutes - 60                                                                                                                                        |
| 588 | expresión de cálculo/transformación: all_minutes = "0" + String(all_minutes)                                                                                                                               |
| 590 | expresión de cálculo/transformación: all_hours = morning_hours + afternoon_hours + aditional_hour                                                                                                          |
| 592 | expresión de cálculo/transformación: all_value_compose = all_hours + ":" + all_minutes                                                                                                                     |
| 596 | expresión de cálculo/transformación: first_in_all_compose_value_minutes = all_value_compose.substring(separator_all_compose + 1,separator_all_compose + 2)                                                 |
| 601 | expresión de cálculo/transformación: separator_all_compose = separator_all_compose - 1                                                                                                                     |
| 605 | expresión de cálculo/transformación: all_value_compose = all_value_compose.substring(0,separator_all_compose + 1) + all_value_compose.substring(separator_all_compose + 2,all_value_compose.length)        |
| 626 | expresión de cálculo/transformación: var this_start_hour = document.getElementById("TSlot_in_" + record).value;                                                                                            |
| 627 | expresión de cálculo/transformación: var this_end_hour = document.getElementById("TSlot_out_" + record).value;                                                                                             |
| 647 | expresión de cálculo/transformación: this_minutes = hour_start.substring(separator + 1,hour_start.length)                                                                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                 |
| --- | ----------------------------------------------------------------------------------------------------------------- |
| 7   | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection.jsp?estado=14&amp;SCO_GTA_ARG_DATE_TO_STUDY= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                        | Resolución | Ficha / candidato |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 7   | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection.jsp?estado=14&amp;SCO_GTA_ARG_DATE_TO_STUDY= | ausente    | P06               |
| BASE   | 7   | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection.jsp?estado=14&amp;SCO_GTA_ARG_DATE_TO_STUDY= | ausente    | P06               |
| IBER   | 7   | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_day_details_redirection.jsp?estado=14&amp;SCO_GTA_ARG_DATE_TO_STUDY= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/funciones_gta_monthly_view_presence.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
