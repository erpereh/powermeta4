# htmlfilterpage

Identificador: `tchtmlfilter/htmlfilterpage.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto    | Ámbito | Diccionario                                                                                 |
| ------------- | -------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Cancel | Cancelar | COLL   | [translations/ess_mss_gen_es.properties:L61](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Cancel | Cancelar | CYC    | [translations/ess_mss_gen_es.properties:L61](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Cancel | Cancelar | IBER   | [translations/ess_mss_gen_es.properties:L61](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Cancel | Cancelar | BASE   | [translations/ess_mss_gen_es.properties:L61](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Cancel | Cancelar | BASE   | [translations/shco_g0_es.properties:L20](../../referencias/literales/shco_g0_es.md)         |
| Button.Cancel | Cancelar | BASE   | [translations/shco_rp_es.properties:L11](../../referencias/literales/shco_rp_es.md)         |
| Button.Delete | Eliminar | COLL   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete | Eliminar | CYC    | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete | Eliminar | IBER   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete | Eliminar | BASE   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok     | Aceptar  | COLL   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok     | Aceptar  | CYC    | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok     | Aceptar  | IBER   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok     | Aceptar  | BASE   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok     | Aceptar  | BASE   | [translations/shco_g0_es.properties:L28](../../referencias/literales/shco_g0_es.md)         |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tchtmlfilter/htmlfilterpage.jsp](../../../../clon_portal/portal/tchtmlfilter/htmlfilterpage.jsp) | `fc97f05af44d8a0e0d7d0f009200be13d3364f6cb3079a456911a630377d1ba7` |    983 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tchtmlfilter/htmlfilterpage.jsp](../../../../clon_portal/portal/tchtmlfilter/htmlfilterpage.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                            |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 458 | form     | method=post; name=frmOpFilterParams; id=frmOpFilterParams; action=&lt;%=sHTML_FILTER_PAGE%&gt;                                                                                                                       |
| 459 | input    | type=hidden; name=zidoperation; id=zidoperation; value=                                                                                                                                                              |
| 460 | input    | type=hidden; name=zidsentence; id=zidsentence; value=&lt;%=sIdSentence%&gt;                                                                                                                                          |
| 461 | input    | type=hidden; name=zidescenario; id=zidescenario; value=&lt;%=sIdEscenario%&gt;                                                                                                                                       |
| 462 | input    | type=hidden; name=zidtable; id=zidtable; value=&lt;%=sIdTable%&gt;                                                                                                                                                   |
| 463 | input    | type=hidden; name=zreturnpage; id=zreturnpage; value=&lt;%=sDireccion%&gt;                                                                                                                                           |
| 464 | input    | type=hidden; id=zdynfilteralias; name=zdynfilteralias; value=&lt;%=zdynfilteralias%&gt;                                                                                                                              |
| 465 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                             |
| 466 | input    | type=hidden; id=zcancel; name=zcancel; value=                                                                                                                                                                        |
| 474 | form     | method=post; name=frmOpDetailFilterParams; action=&lt;%=sHTML_FILTER_PAGE%&gt;                                                                                                                                       |
| 475 | input    | type=hidden; name=zidoperation; id=zidoperation; value=                                                                                                                                                              |
| 476 | input    | type=hidden; name=zidsentence; id=zidsentence; value=                                                                                                                                                                |
| 477 | input    | type=hidden; name=txtIdDetail; id=txtIdDetail; value=                                                                                                                                                                |
| 478 | input    | type=hidden; name=txtDetailGenInfo; id=txtDetailGenInfo; value=                                                                                                                                                      |
| 479 | input    | type=hidden; name=txtDetailRightInfo; id=txtDetailRightInfo; value=                                                                                                                                                  |
| 480 | input    | type=hidden; name=txtDetailLeftInfo; id=txtDetailLeftInfo; value=                                                                                                                                                    |
| 481 | input    | type=hidden; name=zreturnpage; id=zreturnpage; value=                                                                                                                                                                |
| 482 | input    | type=hidden; id=zdynfilteralias; name=zdynfilteralias; value=&lt;%=zdynfilteralias%&gt;                                                                                                                              |
| 483 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                             |
| 490 | form     | method=post; name=frmOpGetTableFields; action=&lt;%=sHTML_FILTER_PAGE%&gt;                                                                                                                                           |
| 492 | input    | type=hidden; name=zidoperation; id=zidoperation; value=                                                                                                                                                              |
| 493 | input    | type=hidden; name=zidsentence; id=zidsentence; value=                                                                                                                                                                |
| 494 | input    | type=hidden; name=zidtable; id=zidtable; value=                                                                                                                                                                      |
| 495 | input    | type=hidden; name=zreturnpage; id=zreturnpage; value=                                                                                                                                                                |
| 496 | input    | type=hidden; name=RigthLeftTable; id=RigthLeftTable; value=                                                                                                                                                          |
| 497 | input    | type=hidden; name=lastIdDetailSelected; id=lastIdDetailSelected; value=                                                                                                                                              |
| 498 | input    | type=hidden; name=lastUsingExist; id=lastUsingExist; value=                                                                                                                                                          |
| 499 | input    | type=hidden; name=lastAgrupOpOpenSelected; id=lastAgrupOpOpenSelected; value=                                                                                                                                        |
| 500 | input    | type=hidden; name=lastRelOpSelected; id=lastRelOpSelected; value=                                                                                                                                                    |
| 501 | input    | type=hidden; name=lastLogicOpSelected; id=lastLogicOpSelected; value=                                                                                                                                                |
| 502 | input    | type=hidden; name=lastAgrupOpCloseSelected; id=lastAgrupOpCloseSelected; value=                                                                                                                                      |
| 504 | input    | type=hidden; name=lastLeftTableSelected; id=lastLeftTableSelected; value=                                                                                                                                            |
| 505 | input    | type=hidden; name=lastLeftTableFieldSelected; id=lastLeftTableFieldSelected; value=                                                                                                                                  |
| 506 | input    | type=hidden; name=lastLeftValueSelected; id=lastLeftValueSelected; value=                                                                                                                                            |
| 508 | input    | type=hidden; name=lastRigthTableSelected; id=lastRigthTableSelected; value=                                                                                                                                          |
| 509 | input    | type=hidden; name=lastRigthTableFieldSelected; id=lastRigthTableFieldSelected; value=                                                                                                                                |
| 510 | input    | type=hidden; name=lastRigthValueSelected; id=lastRigthValueSelected; value=                                                                                                                                          |
| 511 | input    | type=hidden; name=lastRadRightFieldValueIndex; id=lastRadRightFieldValueIndex; value=                                                                                                                                |
| 513 | input    | type=hidden; id=zdynfilteralias; name=zdynfilteralias; value=&lt;%=zdynfilteralias%&gt;                                                                                                                              |
| 514 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                             |
| 522 | form     | method=post; name=frmBackValues; action=&lt;%=sDireccion%&gt;                                                                                                                                                        |
| 524 | input    | type=hidden; name=txtIdSentence; id=txtIdSentence; value=                                                                                                                                                            |
| 525 | input    | type=hidden; name=txtLanguage; id=txtLanguage; value=                                                                                                                                                                |
| 526 | input    | type=hidden; name=txtApiSql; id=txtApiSql; value=                                                                                                                                                                    |
| 527 | input    | type=hidden; name=txtIdOperation; id=txtIdOperation; value=                                                                                                                                                          |
| 529 | input    | type=hidden; id=zdynfilteralias; name=zdynfilteralias; value=&lt;%=zdynfilteralias%&gt;                                                                                                                              |
| 530 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                             |
| 552 | form     | name=frmHtmlDynFilter; id=frmHtmlDynFilter                                                                                                                                                                           |
| 565 | input    | name=txtIdDetail; id=txtIdDetail; size=2; value=&lt;%=sIdDetail1%&gt;                                                                                                                                                |
| 567 | input    | name=txtIdDetail; id=txtIdDetail; size=2; value=&lt;%=sLastIdDetailSelected%&gt;                                                                                                                                     |
| 595 | input    | type=radio; name=radExistAllRecords; id=radExistAllRecords; value=                                                                                                                                                   |
| 600 | input    | type=radio; name=radExistAllRecords; id=radExistAllRecords; value=&lt;%=sOperatorExist%&gt;                                                                                                                          |
| 629 | select   | name=selAgrupOpOpen; id=selAgrupOpOpen; class=fuentevalor                                                                                                                                                            |
| 630 | option   |                                                                                                                                                                                                                      |
| 634 | option   | value=&lt;%=sOperator4%&gt;                                                                                                                                                                                          |
| 660 | select   | name=selLeftTable2; id=selLeftTable2; class=fuentevalor; onchange=getTableFields('selLeftTable2');                                                                                                                   |
| 661 | option   |                                                                                                                                                                                                                      |
| 669 | option   | value=&lt;%=sTableInfo1%&gt;                                                                                                                                                                                         |
| 681 | select   | name=selLeftTableField; id=selLeftTableField; class=fuentevalor; onchange=showhideOpRel("frmHtmlDynFilter","selAllRelOp","selRelOp","selLeftTableField");                                                            |
| 682 | option   |                                                                                                                                                                                                                      |
| 693 | option   | id=&lt;%=sIdField1_+_"&#124;&#124;"_+_sIdTransField1%&gt;; value=&lt;%=sField1Type%&gt;                                                                                                                              |
| 721 | select   | name=selAllRelOp; id=selAllRelOp; style=display:none                                                                                                                                                                 |
| 726 | option   | id=&lt;%=sIdOperator1%&gt;; value=&lt;%=sOperator1Type%&gt;                                                                                                                                                          |
| 731 | select   | name=selRelOp; id=selRelOp; class=fuentevalor                                                                                                                                                                        |
| 732 | option   |                                                                                                                                                                                                                      |
| 756 | input    | type=radio; name=radRightFieldValue; id=radRightFieldValue; value=0; onclick=changeFieldValue("radRightFieldValue"); checked=presente; confirmar condición si dinámico                                               |
| 758 | input    | class=fuentecabeceratabla; type=radio; name=radRightFieldValue; id=radRightFieldValue; value=1; onclick=changeFieldValue("radRightFieldValue")                                                                       |
| 765 | select   | name=selRightTable2; id=selRightTable2; class=fuentevalor; onchange=getTableFields('selRightTable2');                                                                                                                |
| 766 | option   |                                                                                                                                                                                                                      |
| 774 | option   | value=&lt;%=sTableInfo2%&gt;                                                                                                                                                                                         |
| 787 | input    | name=txtRightFieldValue; size=37; id=txtRightFieldValue; class=fuentevalor; style=display:none; value=&lt;%=sRightValue%&gt;                                                                                         |
| 791 | select   | name=selRigthTableField; id=selRigthTableField; class=fuentevalor                                                                                                                                                    |
| 792 | option   |                                                                                                                                                                                                                      |
| 801 | option   | id=&lt;%=sIdField2_+_"&#124;&#124;"_+_sIdTransField2%&gt;; value=&lt;%=sField2Type%&gt;                                                                                                                              |
| 838 | select   | name=selAgrupOpClose; id=selAgrupOpClose; class=fuentevalor                                                                                                                                                          |
| 839 | option   |                                                                                                                                                                                                                      |
| 843 | option   | value=&lt;%=sOperator2%&gt;                                                                                                                                                                                          |
| 873 | select   | name=selOpLog; id=selOpLog; class=fuentevalor                                                                                                                                                                        |
| 874 | option   |                                                                                                                                                                                                                      |
| 879 | option   | id=&lt;%=sIdOperator3%&gt;; value=&lt;%=sOperator3%&gt;                                                                                                                                                              |
| 901 | input    | name=btnSetDetail; id=btnSetDetail; type=button; value=&lt;%=Tran.getProperty("Button.SetDetail")%&gt;; onclick=ExecuteDetailOperation('&lt;%=sAPI_SET_DETAIL%&gt;',frmHtmlDynFilter.txtIdDetail.value)              |
| 930 | a        | href=javascript:ExecuteDetailOperation('&lt;%=sAPI_GET_DETAIL%&gt;','&lt;%=sIdDetail2%&gt;')                                                                                                                         |
| 932 | a        | href=javascript:ExecuteDetailOperation('&lt;%=sAPI_DELETE_DETAIL%&gt;','&lt;%=sIdDetail2%&gt;')                                                                                                                      |
| 933 | img      | src=/images/tcreports/delete_28x28_out.gif; border=0; title=JSP_EXPR_Tran.getProperty(; onmouseover=this.src='/images/tcreports/delete_28x28_over.gif'; onmouseout=this.src='/images/tcreports/delete_28x28_out.gif' |
| 953 | textarea | name=txtNaturalLang; id=txtNaturalLang; cols=110; rows=5; class=fuentevalor; wrap=virtual                                                                                                                            |
| 963 | input    | name=btnAceptar; id=btnAceptar; type=button; value=&lt;%=Tran.getProperty("Button.Ok")%&gt;; onclick=javascript:ExecuteFilterOperation('&lt;%=sAPI_SET_FILTER%&gt;','0');                                            |
| 964 | input    | name=btnCancelar; id=btnCancelar; type=button; value=&lt;%=Tran.getProperty("Button.Cancel")%&gt;; onclick=javascript:ExecuteFilterOperation('&lt;%=sAPI_SET_FILTER%&gt;','1');                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente     | Resolución estática parcial |
| --- | ---------------------- | -------------------- | --------------------------- |
| 25  | sHTML_FILTER_PAGE      | "htmlfilter.jsp"     | htmlfilter.jsp              |
| 26  | sTXT_RIGHT_FIELD_VALUE | "txtRightFieldValue" | txtRightFieldValue          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                                        |
| --- | ----------- | --------------------------------------------------------------------------------------------------------- |
| 540 | m4:item     | outputdef=sOutputFilterNatLanguage; item=sItemPROP_APISQL; m4varname=sApiSql                              |
| 541 | m4:item     | outputdef=sOutputFilterNatLanguage; item=sItemPROP_ID_SENTENCE; m4varname=sSentence                       |
| 542 | m4:item     | outputdef=sOutputFilterNatLanguage; item=sItemPROP_IS_SYNTAX_OK; m4varname=sSyntaxOK                      |
| 543 | m4:item     | outputdef=sOutputFilterNatLanguage; item=sItemPROP_NATURAL_LANG; m4varname=sNatLang                       |
| 561 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_ID_DETAIL_IN_EDITION; m4varname=sIdDetail1              |
| 591 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_OP_ADV; m4varname=sUsingExist                           |
| 592 | m4:item     | outputdef=sOutputAdvancedOperators; item=sItemOPERATOR; m4varname=sOperatorExist                          |
| 628 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_OP_AGR_OPEN; m4varname=sSelectedAgrupOpOpen             |
| 631 | m4:dataloop | outputdef=sOutputGroupOpenOperators                                                                       |
| 632 | m4:item     | outputdef=sOutputGroupOpenOperators; item=sItemOPERATOR; m4varname=sOperator4                             |
| 633 | m4:item     | outputdef=sOutputGroupOpenOperators; item=sItemOPERATORDESC; m4varname=sOperator4Desc                     |
| 659 | m4:item     | outputdef=sOutputFilterDetailLeftInfo; item=sItemPROP_ID_TABLE_TRANSLATED; m4varname=sSelectedLeftTable   |
| 666 | m4:dataloop | outputdef=sOutputFilterTables                                                                             |
| 667 | m4:item     | outputdef=sOutputFilterTables; item=sItemID_TRANSLATED_OBJ; m4varname=sIdTransObject1                     |
| 668 | m4:item     | outputdef=sOutputFilterTables; item=sItemTABLE_INFO; m4varname=sTableInfo1                                |
| 680 | m4:item     | outputdef=sOutputFilterDetailLeftInfo; item=sItemPROP_FIELD_TRANSLATED; m4varname=sSelectedLeftField      |
| 687 | m4:dataloop | outputdef=sOutputFilterLeftTableFields                                                                    |
| 688 | m4:item     | outputdef=sOutputFilterLeftTableFields; item=sItemID_TRANSLATED_FLD; m4varname=sIdTransField1             |
| 689 | m4:item     | outputdef=sOutputFilterLeftTableFields; item=ID_FIELD; m4varname=sIdField1                                |
| 690 | m4:item     | outputdef=sOutputFilterLeftTableFields; item=sItemPROP_GEN_TYPE; m4varname=sField1Type                    |
| 718 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_OP_REL; m4varname=sSelectedRelOp                        |
| 722 | m4:dataloop | outputdef=sOutputRelationalOperators                                                                      |
| 723 | m4:item     | outputdef=sOutputRelationalOperators; item=sItemOPERATORDESC; m4varname=sOperator1Desc                    |
| 724 | m4:item     | outputdef=sOutputRelationalOperators; item=sItemID_OPERATOR; m4varname=sIdOperator1                       |
| 725 | m4:item     | outputdef=sOutputRelationalOperators; item=sItemOP_REL_GEN_TYPE; m4varname=sOperator1Type                 |
| 764 | m4:item     | outputdef=sOutputFilterDetailRightInfo; item=sItemPROP_ID_TABLE_TRANSLATED; m4varname=sSelectedRigthTable |
| 771 | m4:dataloop | outputdef=sOutputFilterTables                                                                             |
| 772 | m4:item     | outputdef=sOutputFilterTables; item=sItemID_TRANSLATED_OBJ; m4varname=sIdTransObject2                     |
| 773 | m4:item     | outputdef=sOutputFilterTables; item=sItemTABLE_INFO; m4varname=sTableInfo2                                |
| 786 | m4:item     | outputdef=sOutputFilterDetailRightInfo; item=sItemPROP_VALUE; m4varname=sRightValue                       |
| 790 | m4:item     | outputdef=sOutputFilterDetailRightInfo; item=sItemPROP_FIELD_TRANSLATED; m4varname=sSelectedRightField    |
| 797 | m4:dataloop | outputdef=sOutputFilterRigthTableFields                                                                   |
| 798 | m4:item     | outputdef=sOutputFilterRigthTableFields; item=sItemID_TRANSLATED_FLD; m4varname=sIdTransField2            |
| 799 | m4:item     | outputdef=sOutputFilterRigthTableFields; item=sItemID_FIELD; m4varname=sIdField2                          |
| 800 | m4:item     | outputdef=sOutputFilterRigthTableFields; item=sItemPROP_GEN_TYPE; m4varname=sField2Type                   |
| 837 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_OP_AGR_CLOSE; m4varname=sSelectedAgrupOpClose           |
| 840 | m4:dataloop | outputdef=sOutputGroupCloseOperators                                                                      |
| 841 | m4:item     | outputdef=sOutputGroupCloseOperators; item=sItemOPERATOR; m4varname=sOperator2                            |
| 842 | m4:item     | outputdef=sOutputGroupCloseOperators; item=sItemOPERATORDESC; m4varname=sOperator2Desc                    |
| 872 | m4:item     | outputdef=sOutputFilterDetailInfo; item=sItemPROP_OP_LOG; m4varname=sSelectedLogicOp                      |
| 875 | m4:dataloop | outputdef=sOutputLogicOperators                                                                           |
| 876 | m4:item     | outputdef=sOutputLogicOperators; item=sItemOPERATOR; m4varname=sOperator3                                 |
| 877 | m4:item     | outputdef=sOutputLogicOperators; item=sItemOPERATORDESC; m4varname=sOperator3Desc                         |
| 878 | m4:item     | outputdef=sOutputLogicOperators; item=sItemID_OPERATOR; m4varname=sIdOperator3                            |
| 926 | m4:dataloop | outputdef=sOutputFilterAllDetails                                                                         |
| 927 | m4:item     | outputdef=sOutputFilterAllDetails; item=sItemPROP_ID_DETAIL; m4varname=sIdDetail2                         |
| 928 | m4:item     | outputdef=sOutputFilterAllDetails; item=sItemPROP_NAT_LANG; m4varname=sFilter                             |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                 | Argumentos                                    |
| --- | ----------------------- | --------------------------------------------- |
| 47  | setRadioButton          | iIndex                                        |
| 67  | m4checkradio            | sidform,sidobjeto,vvalor                      |
| 77  | getradiovalue           | sidform,sidobjeto                             |
| 90  | changeFieldValue        | sRadioButtonName                              |
| 118 | selectComboValue        | sComboName,sSelectValue                       |
| 143 | selectComboValueByValue | sComboName,sSelectValue                       |
| 173 | selectComboValueByIndex | sComboName,iSelectedIndex                     |
| 179 | selectComboValueById    | sComboName,sidoption                          |
| 193 | ExecuteFilterOperation  | sIdOperation,sCancel                          |
| 204 | CloseForm               | sSentence,sNatLang, sApiSql,sSyntaxOk,sCancel |
| 219 | IsDetailCorrect         | sIdDetail                                     |
| 270 | ExecuteDetailOperation  | sIdOperation,sIdDetail                        |
| 328 | getTableFields          | sTableSelect                                  |
| 379 | m4select                | vidform,vselect,smodo                         |
| 395 | showhideOpRel           | sidform,sselectFrom,sselectTo,sselectField    |
| 443 | SetCheckBox             | sidcheck,svalue                               |

| L   | Condición / acción / mensaje literal                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50  | if (typeof(iIndex) != "undefined"){                                                                                                                                                       |
| 52  | }else{                                                                                                                                                                                    |
| 55  | if (elements["selRigthTableField"].value != "") {                                                                                                                                         |
| 58  | }else{                                                                                                                                                                                    |
| 69  | if (oobjeto.length &gt;0){                                                                                                                                                                |
| 71  | if (oobjeto[i].value == vvalor) oobjeto = oobjeto[i];                                                                                                                                     |
| 80  | if (oobjeto.length &gt;0){                                                                                                                                                                |
| 82  | if (oobjeto[i].checked ==true){                                                                                                                                                           |
| 94  | if (radRightFieldValue[0].checked){                                                                                                                                                       |
| 102 | }else{                                                                                                                                                                                    |
| 125 | if (sSelectValue != "") {                                                                                                                                                                 |
| 128 | if (options[i].text == sSelectValue){                                                                                                                                                     |
| 131 | }else{ i= i+1;}                                                                                                                                                                           |
| 134 | if (iSelectedIndex &gt;=0){ selectedIndex = iSelectedIndex;}                                                                                                                              |
| 150 | if (sSelectValue != "") {                                                                                                                                                                 |
| 155 | if (options[i].value == sSelectValue){                                                                                                                                                    |
| 159 | else{                                                                                                                                                                                     |
| 164 | if (iSelectedIndex &gt;=0){                                                                                                                                                               |
| 183 | if (oselect.options[ni].id == sidoption){                                                                                                                                                 |
| 208 | if (sSyntaxOk == "1" &#124;&#124; sCancel == "1"){                                                                                                                                        |
| 214 | }else{                                                                                                                                                                                    |
| 215 | alert('&lt;%=Tran.getProperty("Msg.WrongSyntax")%&gt;');                                                                                                                                  |
| 226 | if (sIdDetail == sEMPTY){                                                                                                                                                                 |
| 229 | }else{                                                                                                                                                                                    |
| 230 | if (selLeftTable2.value == sEMPTY){                                                                                                                                                       |
| 233 | }else{                                                                                                                                                                                    |
| 234 | if( selLeftTableField.value == sEMPTY) {                                                                                                                                                  |
| 237 | }else{                                                                                                                                                                                    |
| 238 | if(selRelOp.value == sEMPTY){                                                                                                                                                             |
| 241 | }else{                                                                                                                                                                                    |
| 242 | if (radRightFieldValue[0].checked){                                                                                                                                                       |
| 243 | if (selRightTable2.value == sEMPTY) {                                                                                                                                                     |
| 246 | }else{                                                                                                                                                                                    |
| 247 | if( selRigthTableField.value == sEMPTY){                                                                                                                                                  |
| 252 | }else{                                                                                                                                                                                    |
| 253 | if(elements["txtRightFieldValue"].value == sEMPTY){                                                                                                                                       |
| 265 | if(bDetailCorrect == false){ alert(sMessage);}                                                                                                                                            |
| 281 | if (sIdOperation == '&lt;%=sAPI_SET_DETAIL%&gt;'){                                                                                                                                        |
| 283 | if (bDetailCorrect == true){                                                                                                                                                              |
| 302 | if (radRightFieldValue[0].checked) //Tabla$$Campo$$                                                                                                                                       |
| 307 | else{ sDetailRightInfo = sDetailRightInfo +elements["txtRightFieldValue"].value; }                                                                                                        |
| 312 | if (bDetailCorrect == true){                                                                                                                                                              |
| 345 | if (sTableSelect=="selLeftTable2"){                                                                                                                                                       |
| 348 | else{                                                                                                                                                                                     |
| 368 | if (document.forms.frmHtmlDynFilter.radRightFieldValue[0].checked){                                                                                                                       |
| 370 | }else{                                                                                                                                                                                    |
| 381 | if (oselect.selectedIndex == -1) return null;                                                                                                                                             |
| 382 | switch(smodo)                                                                                                                                                                             |
| 384 | case "text" :                                                                                                                                                                             |
| 386 | case "value" :                                                                                                                                                                            |
| 388 | case "id" :                                                                                                                                                                               |
| 407 | if (typeof(oselectField) != "undefined"){ //Si ya lo he creado                                                                                                                            |
| 408 | if (oselectField.selectedIndex != -1 ){ //Si hay alguno seleccionado                                                                                                                      |
| 409 | if (m4select(sidform,sselectField,'value') != ""){ //Si el seleccionado no es el vacio                                                                                                    |
| 417 | if (sOpRelTypeToShow == sOP_STR_TYPE){                                                                                                                                                    |
| 418 | if (typeof(oradRightFieldValue) != "undefined"){ //Si ya lo he creado                                                                                                                     |
| 419 | if(oradRightFieldValue[0].checked){ //tabla_campo                                                                                                                                         |
| 423 | }else {sOpRelTypeToShow2 ="";}                                                                                                                                                            |
| 431 | if (oselectFrom.options[i].value == sOpRelTypeToShow &#124;&#124; oselectFrom.options[i].value == sOpRelTypeToShow2){                                                                     |
| 445 | if (document.forms.frmHtmlDynFilter.elements[sidcheck].value ==svalue){                                                                                                                   |
| 447 | }else{                                                                                                                                                                                    |
| 545 | &lt;% if (!sIdOperation.equals(sAPI_SET_FILTER) &#124;&#124; !sSyntaxOK.equals("1") ){ %&gt;                                                                                              |
| 564 | &lt;% if (sLastIdDetailSelected == null) {%&gt;                                                                                                                                           |
| 566 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 606 | &lt;% if (sLastUsingExist == null) {%&gt;                                                                                                                                                 |
| 608 | &lt;%}else{%&gt; &lt;script type="text/javascript"&gt;m4checkradio("frmHtmlDynFilter","radExistAllRecords","&lt;%=sLastUsingExist%&gt;");&lt;/script&gt;                                  |
| 638 | &lt;% if (sLastSelAgrupOpOpenSelected == null) {%&gt;                                                                                                                                     |
| 640 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 672 | &lt;% if (sLastLeftTableSelected == null) {%&gt;                                                                                                                                          |
| 674 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 698 | &lt;% if (sLastLeftTableFieldSelected == null) {%&gt;                                                                                                                                     |
| 700 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 737 | &lt;% if (sLastRelOpSelected == null) {%&gt;                                                                                                                                              |
| 739 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 777 | &lt;% if (sLastRigthTableSelected == null) {%&gt;                                                                                                                                         |
| 779 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 804 | &lt;% if (sLastRigthTableFieldSelected == null) {%&gt;                                                                                                                                    |
| 806 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 816 | &lt;% if (slastRadRightFieldValueIndex != null) {%&gt;                                                                                                                                    |
| 818 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 846 | &lt;% if (sLastAgrupOpCloseSelected == null) {%&gt;                                                                                                                                       |
| 848 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 882 | &lt;% if (sLastLogicOpSelected == null) {%&gt;                                                                                                                                            |
| 884 | &lt;%}else{%&gt;                                                                                                                                                                          |
| 974 | &lt;% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %&gt;                                                                                                                                   |
| 287 | expresión de cálculo/transformación: sDetailGenInfo = sDetailGenInfo + getradiovalue("frmHtmlDynFilter","radExistAllRecords")+ sPUNTO_COMA;                                               |
| 288 | expresión de cálculo/transformación: sDetailGenInfo = sDetailGenInfo +selAgrupOpOpen.value + sPUNTO_COMA;                                                                                 |
| 289 | expresión de cálculo/transformación: sDetailGenInfo = sDetailGenInfo +m4select('frmHtmlDynFilter','selRelOp','id') + sPUNTO_COMA;                                                         |
| 290 | expresión de cálculo/transformación: sDetailGenInfo = sDetailGenInfo +selAgrupOpClose.value + sPUNTO_COMA;                                                                                |
| 291 | expresión de cálculo/transformación: sDetailGenInfo = sDetailGenInfo +m4select('frmHtmlDynFilter','selOpLog','id') + sPUNTO_COMA;                                                         |
| 296 | expresión de cálculo/transformación: sDetailLeftInfo = selLeftTable2.value + sTABLE_SEP;                                                                                                  |
| 693 | expresión de cálculo/transformación: &lt;OPTION id ='&lt;%=sIdField1 + "&#124;&#124;" + sIdTransField1 %&gt;' value='&lt;%=sField1Type%&gt;'&gt;&lt;%=sIdTransField1%&gt;&lt;/OPTION&gt;  |
| 801 | expresión de cálculo/transformación: &lt;OPTION id='&lt;%=sIdField2 + "&#124;&#124;" + sIdTransField2%&gt;' value = '&lt;%=sField2Type%&gt;'&gt; &lt;%=sIdTransField2%&gt;&lt;/OPTION&gt; |

### Includes, navegación y dependencias

| L   | Include           |
| --- | ----------------- |
| 10  | htmlfilterjob.jsp |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 20  | /style/tcreports_0.css                  |
| 458 | &lt;%=sHTML_FILTER_PAGE%&gt;            |
| 474 | &lt;%=sHTML_FILTER_PAGE%&gt;            |
| 490 | &lt;%=sHTML_FILTER_PAGE%&gt;            |
| 522 | &lt;%=sDireccion%&gt;                   |
| 930 | javascript:ExecuteDetailOperation(      |
| 932 | javascript:ExecuteDetailOperation(      |
| 933 | /images/tcreports/delete_28x28_out.gif  |
| 935 | /images/tcreports/delete_28x28_over.gif |
| 936 | /images/tcreports/delete_28x28_out.gif  |
| 10  | htmlfilterjob.jsp                       |
| 25  | htmlfilter.jsp                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                         | Resolución | Ficha / candidato                                                |
| ------ | --- | ---------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 10  | htmlfilterjob.jsp                  | física     | [tchtmlfilter/htmlfilterjob.jsp](tchtmlfilter--htmlfilterjob.md) |
| BASE   | 458 | &lt;%=sHTML_FILTER_PAGE%&gt;       | dinámica   | P06                                                              |
| BASE   | 474 | &lt;%=sHTML_FILTER_PAGE%&gt;       | dinámica   | P06                                                              |
| BASE   | 490 | &lt;%=sHTML_FILTER_PAGE%&gt;       | dinámica   | P06                                                              |
| BASE   | 522 | &lt;%=sDireccion%&gt;              | dinámica   | P06                                                              |
| BASE   | 930 | javascript:ExecuteDetailOperation( | dinámica   | P06                                                              |
| BASE   | 932 | javascript:ExecuteDetailOperation( | dinámica   | P06                                                              |
| BASE   | 10  | htmlfilterjob.jsp                  | física     | [tchtmlfilter/htmlfilterjob.jsp](tchtmlfilter--htmlfilterjob.md) |
| BASE   | 25  | htmlfilter.jsp                     | ausente    | P06                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tchtmlfilter/htmlfilterpage.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
