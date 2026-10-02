# funciones_gta_monthly_view

Identificador: `libreria/funciones_gta_monthly_view.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_gta_monthly_view.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_gta_monthly_view.js) | `eb261917d4be2b27283f24913a908b3ccc458b1e3ccf3843cc7f842628bc1162` |   1088 |
| BASE / compartido | [libreria/funciones_gta_monthly_view.js](../../../../clon_portal/portal/libreria/funciones_gta_monthly_view.js)                             | `eb261917d4be2b27283f24913a908b3ccc458b1e3ccf3843cc7f842628bc1162` |   1088 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_gta_monthly_view.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_gta_monthly_view.js) | `eb261917d4be2b27283f24913a908b3ccc458b1e3ccf3843cc7f842628bc1162` |   1088 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_gta_monthly_view.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_gta_monthly_view.js). Líneas físicas, contando desde 1.

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

| L    | Función                     | Argumentos          |
| ---- | --------------------------- | ------------------- |
| 8    | OpenIncidences              |                     |
| 58   | addNewRecord                | this_node           |
| 67   | addNewRecordBadgage         |                     |
| 76   | addNewRecordRealDone        |                     |
| 86   | SetNoValueTsProperties      | num_tslot,num_recor |
| 109  | SetNoValueProperties        | id_property         |
| 135  | SetNoValueCounters          | id_counter          |
| 163  | SetInvisibility             | what                |
| 173  | SetVisibility               | what                |
| 185  | SetTableToModify            | IDtable             |
| 206  | CloseTableToModify          | IDtable             |
| 212  | saveChanges                 | this_node           |
| 229  | saveChangesInTSProperties   | num_tslot           |
| 245  | saveChangesInProperties     |                     |
| 260  | saveChangesInCounters       |                     |
| 275  | saveChangesInAlerts         |                     |
| 282  | GoPreviousDay               |                     |
| 296  | GoNextDay                   |                     |
| 303  | CloseAndExit                |                     |
| 309  | transferReferenceTime       |                     |
| 323  | ViewAllProperties           |                     |
| 329  | noViewAllProperties         |                     |
| 335  | ViewAllCounters             |                     |
| 341  | noViewAllCounters           |                     |
| 348  | DeleteRecord                | idRecord,this_node  |
| 362  | DeleteRecordBadgage         | idRecord            |
| 373  | DeleteRecordrealDone        | idRecord            |
| 386  | restoreRegsiter             | idRecord,this_node  |
| 398  | restoreRegsiterBadgage      | idRecord            |
| 410  | restoreRegsiterRealDone     | idRecord            |
| 422  | setAsModify                 | idRecord,this_node  |
| 526  | setAsModifyTSProperty       | num_tslot,num_recor |
| 683  | setAsModifyProperty         | id_property         |
| 855  | setAsModifyCounter          | id_counter          |
| 1025 | setAsModifyAlert            | id_alert            |
| 1053 | setAsModifyConfiguration    | id_config_property  |
| 1066 | saveChangesInConfigurations |                     |
| 1074 | GoToConfiguration           |                     |
| 1080 | CloseConfigurationParam     |                     |
| 1085 | BackToMonthly               |                     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11   | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 14   | alert(texto)                                                                                                                                                                                                                                                           |
| 31   | if (IsemployeeOrManager=="E")                                                                                                                                                                                                                                          |
| 35   | else                                                                                                                                                                                                                                                                   |
| 92   | if ((m4_value_type=="6") &amp;&amp; (this_record_value == genNumber))                                                                                                                                                                                                  |
| 95   | if ((m4_value_type=="2") &amp;&amp; (this_record_value == genString))                                                                                                                                                                                                  |
| 98   | if ((m4_value_type=="4") &amp;&amp; (this_record_value == genDate))                                                                                                                                                                                                    |
| 101  | if ((m4_value_type=="12") &amp;&amp; (this_record_value == genHour))                                                                                                                                                                                                   |
| 104  | if ((m4_value_type=="17") &amp;&amp; (this_record_value == genInerval))                                                                                                                                                                                                |
| 189  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 192  | alert(texto)                                                                                                                                                                                                                                                           |
| 216  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 219  | alert(texto)                                                                                                                                                                                                                                                           |
| 232  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 235  | alert(texto)                                                                                                                                                                                                                                                           |
| 248  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 251  | alert(texto)                                                                                                                                                                                                                                                           |
| 263  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 266  | alert(texto)                                                                                                                                                                                                                                                           |
| 285  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 288  | alert(texto)                                                                                                                                                                                                                                                           |
| 312  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 315  | alert(texto)                                                                                                                                                                                                                                                           |
| 425  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 428  | alert(texto)                                                                                                                                                                                                                                                           |
| 432  | if (this_node=="SCO_GTA_INTERFACE_4_THEOR_MODF")                                                                                                                                                                                                                       |
| 437  | if (this_node=="SCO_GTA_INTERFACE_4_BADGAGE")                                                                                                                                                                                                                          |
| 442  | if (this_node=="SCO_GTA_INTERFACE_4_REAL_DONE")                                                                                                                                                                                                                        |
| 447  | if (hour_start!="")                                                                                                                                                                                                                                                    |
| 450  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 452  | else                                                                                                                                                                                                                                                                   |
| 456  | if (this_hours.length!=2)                                                                                                                                                                                                                                              |
| 458  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 460  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 462  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 464  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                                                                                 |
| 466  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 469  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 471  | alert(texto2)                                                                                                                                                                                                                                                          |
| 474  | if (hour_end!="")                                                                                                                                                                                                                                                      |
| 477  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 479  | else                                                                                                                                                                                                                                                                   |
| 483  | if (this_hours.length!=2)                                                                                                                                                                                                                                              |
| 485  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 487  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 489  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 491  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                                                                                 |
| 493  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 496  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 498  | alert(texto3)                                                                                                                                                                                                                                                          |
| 502  | if (hour_start=="")                                                                                                                                                                                                                                                    |
| 504  | if (hour_end=="")                                                                                                                                                                                                                                                      |
| 506  | if ((hour_end!="")&amp;&amp;(hour_start!=""))                                                                                                                                                                                                                          |
| 509  | if (this_node=="SCO_GTA_INTERFACE_4_THEOR_MODF")                                                                                                                                                                                                                       |
| 514  | if (this_node=="SCO_GTA_INTERFACE_4_BADGAGE")                                                                                                                                                                                                                          |
| 519  | if (this_node=="SCO_GTA_INTERFACE_4_REAL_DONE")                                                                                                                                                                                                                        |
| 529  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 532  | alert(texto)                                                                                                                                                                                                                                                           |
| 540  | if ((m4_value_type=="6") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 545  | if ((m4_value_type=="2") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 551  | if ((m4_value_type=="4") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 557  | if ((m4_value_type=="12") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 563  | if ((m4_value_type=="17") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 569  | if (check_value == "Y")                                                                                                                                                                                                                                                |
| 571  | if ((m4_value_type=="6") &amp;&amp; (this_record_value !=genNumber))                                                                                                                                                                                                   |
| 573  | if( isNaN(this_record_value) ) {                                                                                                                                                                                                                                       |
| 575  | alert(texto2)                                                                                                                                                                                                                                                          |
| 579  | if ((m4_value_type=="4") &amp;&amp; (this_record_value !=genDate))                                                                                                                                                                                                     |
| 591  | if (value_year.length &lt; 4)                                                                                                                                                                                                                                          |
| 593  | if (value_month.length &lt; 2)                                                                                                                                                                                                                                         |
| 595  | if (value_day.length &lt; 2)                                                                                                                                                                                                                                           |
| 597  | if ((value_year &lt; 1900) &#124;&#124; (value_year &gt; 2100))                                                                                                                                                                                                        |
| 599  | if ((value_month &lt; 1) &#124;&#124; (value_month &gt; 12))                                                                                                                                                                                                           |
| 601  | if ((value_day &lt; 1) &#124;&#124; (value_day &gt; 31))                                                                                                                                                                                                               |
| 603  | if (isNaN(built_date))                                                                                                                                                                                                                                                 |
| 605  | if (set_error == "Y") {                                                                                                                                                                                                                                                |
| 607  | alert(texto3)                                                                                                                                                                                                                                                          |
| 610  | if ((m4_value_type=="12") &amp;&amp; (this_record_value !=genHour))                                                                                                                                                                                                    |
| 614  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 616  | else                                                                                                                                                                                                                                                                   |
| 620  | if (this_hours.length!=2)                                                                                                                                                                                                                                              |
| 622  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 624  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 626  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 628  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                                                                                 |
| 630  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 633  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 635  | alert(texto4)                                                                                                                                                                                                                                                          |
| 640  | if ((m4_value_type=="17") &amp;&amp; (this_record_value !=genInerval))                                                                                                                                                                                                 |
| 644  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 646  | else                                                                                                                                                                                                                                                                   |
| 653  | if (this_hours.length&lt;1)                                                                                                                                                                                                                                            |
| 656  | if (this_hours.length&gt;4)                                                                                                                                                                                                                                            |
| 659  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 661  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 663  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 665  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;9999))                                                                                                                                                                                                               |
| 667  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 670  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 672  | alert(texto5)                                                                                                                                                                                                                                                          |
| 686  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 689  | alert(texto)                                                                                                                                                                                                                                                           |
| 695  | if (IsNoModifiable == 0)                                                                                                                                                                                                                                               |
| 704  | if ((m4_value_type=="6") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 709  | if ((m4_value_type=="2") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 715  | if ((m4_value_type=="4") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 721  | if ((m4_value_type=="12") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 727  | if ((m4_value_type=="17") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 733  | if (check_value == "Y")                                                                                                                                                                                                                                                |
| 736  | if ((m4_value_type=="6") &amp;&amp; (this_record_value !=genNumber))                                                                                                                                                                                                   |
| 738  | if( isNaN(this_record_value) ) {                                                                                                                                                                                                                                       |
| 740  | alert(texto2)                                                                                                                                                                                                                                                          |
| 744  | if ((m4_value_type=="4") &amp;&amp; (this_record_value !=genDate))                                                                                                                                                                                                     |
| 757  | if (value_year.length &lt; 4)                                                                                                                                                                                                                                          |
| 759  | if (value_month.length &lt; 2)                                                                                                                                                                                                                                         |
| 761  | if (value_day.length &lt; 2)                                                                                                                                                                                                                                           |
| 763  | if ((value_year &lt; 1900) &#124;&#124; (value_year &gt; 2100))                                                                                                                                                                                                        |
| 765  | if ((value_month &lt; 1) &#124;&#124; (value_month &gt; 12))                                                                                                                                                                                                           |
| 767  | if ((value_day &lt; 1) &#124;&#124; (value_day &gt; 31))                                                                                                                                                                                                               |
| 769  | if (isNaN(built_date))                                                                                                                                                                                                                                                 |
| 771  | if (set_error == "Y") {                                                                                                                                                                                                                                                |
| 773  | alert(texto3)                                                                                                                                                                                                                                                          |
| 777  | if ((m4_value_type=="12") &amp;&amp; (this_record_value !=genHour))                                                                                                                                                                                                    |
| 782  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 784  | else                                                                                                                                                                                                                                                                   |
| 788  | if (this_hours.length!=2)                                                                                                                                                                                                                                              |
| 790  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 792  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 794  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 796  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                                                                                 |
| 798  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 801  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 803  | alert(texto4)                                                                                                                                                                                                                                                          |
| 808  | if ((m4_value_type=="17") &amp;&amp; (this_record_value !=genInerval))                                                                                                                                                                                                 |
| 813  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 815  | else                                                                                                                                                                                                                                                                   |
| 822  | if (this_hours.length&lt;1)                                                                                                                                                                                                                                            |
| 825  | if (this_hours.length&gt;4)                                                                                                                                                                                                                                            |
| 828  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 830  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 832  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 834  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;9999))                                                                                                                                                                                                               |
| 836  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 839  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 841  | alert(texto5)                                                                                                                                                                                                                                                          |
| 858  | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 861  | alert(texto)                                                                                                                                                                                                                                                           |
| 866  | if (IsNoModifiable == "N")                                                                                                                                                                                                                                             |
| 870  | if (this_record_value == "Vous devez aller supprimer les variables internes associées du noeud %0:s de l'objet %1:s ainsi que leurs DMD associés.")                                                                                                                    |
| 876  | if ((m4_value_type=="6") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 881  | if ((m4_value_type=="2") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 887  | if ((m4_value_type=="4") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                              |
| 893  | if ((m4_value_type=="12") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 899  | if ((m4_value_type=="17") &amp;&amp; ((this_record_value == "") &#124;&#124; (this_record_value == null)))                                                                                                                                                             |
| 905  | if (check_value == "Y")                                                                                                                                                                                                                                                |
| 908  | if ((m4_value_type=="6") &amp;&amp; (this_record_value !=genNumber))                                                                                                                                                                                                   |
| 910  | if( isNaN(this_record_value) ) {                                                                                                                                                                                                                                       |
| 912  | alert(texto6)                                                                                                                                                                                                                                                          |
| 916  | if ((m4_value_type=="4") &amp;&amp; (this_record_value !=genDate))                                                                                                                                                                                                     |
| 929  | if (value_year.length &lt; 4)                                                                                                                                                                                                                                          |
| 931  | if (value_month.length &lt; 2)                                                                                                                                                                                                                                         |
| 933  | if (value_day.length &lt; 2)                                                                                                                                                                                                                                           |
| 935  | if ((value_year &lt; 1900) &#124;&#124; (value_year &gt; 2100))                                                                                                                                                                                                        |
| 937  | if ((value_month &lt; 1) &#124;&#124; (value_month &gt; 12))                                                                                                                                                                                                           |
| 939  | if ((value_day &lt; 1) &#124;&#124; (value_day &gt; 31))                                                                                                                                                                                                               |
| 941  | if (isNaN(built_date))                                                                                                                                                                                                                                                 |
| 943  | if (set_error == "Y") {                                                                                                                                                                                                                                                |
| 945  | alert(texto7)                                                                                                                                                                                                                                                          |
| 949  | if ((m4_value_type=="12") &amp;&amp; (this_record_value !=genHour))                                                                                                                                                                                                    |
| 954  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 956  | else                                                                                                                                                                                                                                                                   |
| 960  | if (this_hours.length!=2)                                                                                                                                                                                                                                              |
| 962  | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 964  | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 966  | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 968  | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;23))                                                                                                                                                                                                                 |
| 970  | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 973  | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 975  | alert(texto8)                                                                                                                                                                                                                                                          |
| 980  | if ((m4_value_type=="17") &amp;&amp; (this_record_value !=genInerval))                                                                                                                                                                                                 |
| 985  | if (separator&lt;1)                                                                                                                                                                                                                                                    |
| 987  | else                                                                                                                                                                                                                                                                   |
| 994  | if (this_hours.length&lt;1)                                                                                                                                                                                                                                            |
| 997  | if (this_hours.length&gt;4)                                                                                                                                                                                                                                            |
| 1000 | if (this_minutes.length!=2)                                                                                                                                                                                                                                            |
| 1002 | if(isNaN(this_hours) )                                                                                                                                                                                                                                                 |
| 1004 | if(isNaN(this_minutes) )                                                                                                                                                                                                                                               |
| 1006 | if ((this_hours&lt;0) &#124;&#124; (this_hours&gt;9999))                                                                                                                                                                                                               |
| 1008 | if ((this_minutes&lt;0) &#124;&#124; (this_minutes&gt;59))                                                                                                                                                                                                             |
| 1011 | if(set_error=="Y") {                                                                                                                                                                                                                                                   |
| 1013 | alert(texto9)                                                                                                                                                                                                                                                          |
| 1028 | if (is_save_allowed=="N")                                                                                                                                                                                                                                              |
| 1031 | alert(texto)                                                                                                                                                                                                                                                           |
| 1037 | if (isChecked==true)                                                                                                                                                                                                                                                   |
| 1042 | else                                                                                                                                                                                                                                                                   |
| 1056 | if (isChecked==true)                                                                                                                                                                                                                                                   |
| 1058 | else                                                                                                                                                                                                                                                                   |
| 37   | expresión de cálculo/transformación: var popullationIds = document.getElementById('sIdHrNoEcrpt').value + "#";                                                                                                                                                         |
| 45   | expresión de cálculo/transformación: dateUF = value_day + "-" + value_month + "-" + value_year                                                                                                                                                                         |
| 62   | expresión de cálculo/transformación: new_records_visibles = parseInt(records_visibles) + 1                                                                                                                                                                             |
| 71   | expresión de cálculo/transformación: new_records_visibles = parseInt(records_visibles) + 1                                                                                                                                                                             |
| 80   | expresión de cálculo/transformación: new_records_visibles = parseInt(records_visibles) + 1                                                                                                                                                                             |
| 89   | expresión de cálculo/transformación: var this_record_value = document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value;                                                                                                                             |
| 90   | expresión de cálculo/transformación: var m4_value_type = document.getElementById("VAR_TYPE_" + num_tslot + "_" + num_recor).value;                                                                                                                                     |
| 166  | expresión de cálculo/transformación: b = "table" + a                                                                                                                                                                                                                   |
| 167  | expresión de cálculo/transformación: c = b + "Other"                                                                                                                                                                                                                   |
| 176  | expresión de cálculo/transformación: b = "table" + a                                                                                                                                                                                                                   |
| 177  | expresión de cálculo/transformación: c = b + "other"                                                                                                                                                                                                                   |
| 356  | expresión de cálculo/transformación: new_text = "NODE##" + this_node + "&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_DELETE"                                                                                                                      |
| 369  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_INTERFACE_4_BADGAGE&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_DELETE"                                                                                                            |
| 380  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_INTERFACE_4_REAL_DONE&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_DELETE"                                                                                                          |
| 393  | expresión de cálculo/transformación: new_text = "NODE##" + this_node + "&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##UNSET_AS_DELETE"                                                                                                                    |
| 405  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_INTERFACE_4_BADGAGE&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##UNSET_AS_DELETE"                                                                                                          |
| 417  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_INTERFACE_4_REAL_DONE&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##UNSET_AS_DELETE"                                                                                                        |
| 434  | expresión de cálculo/transformación: hour_start = document.getElementById('START_AT_' + idRecord).value;                                                                                                                                                               |
| 435  | expresión de cálculo/transformación: hour_end = document.getElementById('END_AT_' + idRecord).value;                                                                                                                                                                   |
| 439  | expresión de cálculo/transformación: hour_start = document.getElementById('START_AT_BADGAGE_' + idRecord).value;                                                                                                                                                       |
| 440  | expresión de cálculo/transformación: hour_end = document.getElementById('END_AT_BADGAGE_' + idRecord).value;                                                                                                                                                           |
| 444  | expresión de cálculo/transformación: hour_start = document.getElementById('START_AT_REAL_DONE_' + idRecord).value;                                                                                                                                                     |
| 445  | expresión de cálculo/transformación: hour_end = document.getElementById('END_AT_REAL_DONE_' + idRecord).value;                                                                                                                                                         |
| 455  | expresión de cálculo/transformación: this_minutes = hour_start.substring(separator + 1,hour_start.length)                                                                                                                                                              |
| 482  | expresión de cálculo/transformación: this_minutes = hour_end.substring(separator + 1,hour_end.length)                                                                                                                                                                  |
| 503  | expresión de cálculo/transformación: new_text = "NODE##" + this_node + "&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_GTA_ENDS_AT_NEW##" + hour_end                                                                     |
| 505  | expresión de cálculo/transformación: new_text = "NODE##" + this_node + "&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_GTA_STARTS_AT_NEW##" + hour_start                                                                 |
| 507  | expresión de cálculo/transformación: new_text = "NODE##" + this_node + "&#124;&#124;RECORD##" + idRecord + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_GTA_STARTS_AT_NEW##" + hour_start + "&#124;&#124;SCO_GTA_ENDS_AT_NEW##" + hour_end                |
| 536  | expresión de cálculo/transformación: var this_record_value = document.getElementById('TSProperties_' + num_tslot + "_" + num_recor).value;                                                                                                                             |
| 537  | expresión de cálculo/transformación: var m4_value_type = document.getElementById("VAR_TYPE_" + num_tslot + "_" + num_recor).value;                                                                                                                                     |
| 588  | expresión de cálculo/transformación: this_record_value = value_year + "-" + value_month + "-" + value_day                                                                                                                                                              |
| 619  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 649  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 678  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_TABLE_DATA_REPRESENTAT&#124;&#124;RECORD##" + num_tslot + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;PROPERTY_RECORD##" + num_recor + "&#124;&#124;SCO_GTA_NEW_VALUE##" + this_record_value; |
| 700  | expresión de cálculo/transformación: var m4_value_type = document.getElementById("VAR_TYPE_" + id_property).value;                                                                                                                                                     |
| 753  | expresión de cálculo/transformación: this_record_value = value_year + "-" + value_month + "-" + value_day                                                                                                                                                              |
| 787  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 818  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 847  | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_LOAD_PROPERTIES_4_DAY&#124;&#124;RECORD##" + id_property + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_NEW_VALUE##" + this_record_value;                                                  |
| 873  | expresión de cálculo/transformación: var m4_value_type = document.getElementById("VAR_TYPE_" + id_counter).value;                                                                                                                                                      |
| 925  | expresión de cálculo/transformación: this_record_value = value_year + "-" + value_month + "-" + value_day                                                                                                                                                              |
| 959  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 990  | expresión de cálculo/transformación: this_minutes = this_record_value.substring(separator + 1,this_record_value.length)                                                                                                                                                |
| 1019 | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_LOAD_COUNTERS_4_DAY&#124;&#124;RECORD##" + id_counter + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_GTA_NEW_VALUE##" + this_record_value;                                                 |
| 1048 | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_LOAD_ALERTS_4_DAY&#124;&#124;RECORD##" + id_alert + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;SCO_GTA_NEW_VALUE##" + this_record_value                                                      |
| 1061 | expresión de cálculo/transformación: new_text = "NODE##SCO_GTA_MONTHLY_CONF_4_USER&#124;&#124;RECORD##" + id_config_property + "&#124;&#124;OPERATION##SET_AS_MODIFY" + "&#124;&#124;VALUE_CONFIGURATION_PROPERTY##" + this_record_value                               |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                 |
| --- | --------------------------------------------------------------------------------- |
| 32  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= |
| 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= |
| 50  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=                         |
| 51  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  |
| 53  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                        | Resolución | Ficha / candidato |
| ------ | --- | --------------------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 32  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| COLL   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| COLL   | 50  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=                         | ausente    | P06               |
| COLL   | 51  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |
| COLL   | 53  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |
| BASE   | 32  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| BASE   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| BASE   | 50  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=                         | ausente    | P06               |
| BASE   | 51  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |
| BASE   | 53  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |
| IBER   | 32  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| IBER   | 33  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_incidences_request.jsp?id_incidence= | ausente    | P06               |
| IBER   | 50  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_focus.jsp?argHR=                         | ausente    | P06               |
| IBER   | 51  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |
| IBER   | 53  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_masive_incidences.jsp?id_incidence=  | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/funciones_gta_monthly_view.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
