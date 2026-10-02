# Solicita necesidades de formación

Identificador: `mss_g3/mss_g3_p6_mod1.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"}; m4:item:SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"}; m4:item:SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"}; m4:item:SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; m4:item:SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}; m4:item:SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                              | Ámbito | Diccionario                                                                                  |
| ------------------------- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Volver             | Cargando datos. Por favor, espere unos segundos... | COLL   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver             | Cargando datos. Por favor, espere unos segundos... | CYC    | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver             | Cargando datos. Por favor, espere unos segundos... | IBER   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver             | Cargando datos. Por favor, espere unos segundos... | BASE   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Label.DateFormat          | DD-MM-AAAA                                         | COLL   | [translations/ess_mss_gen_es.properties:L134](../../referencias/literales/ess_mss_gen_es.md) |
| Label.DateFormat          | DD-MM-AAAA                                         | CYC    | [translations/ess_mss_gen_es.properties:L134](../../referencias/literales/ess_mss_gen_es.md) |
| Label.DateFormat          | DD-MM-AAAA                                         | IBER   | [translations/ess_mss_gen_es.properties:L134](../../referencias/literales/ess_mss_gen_es.md) |
| Label.DateFormat          | DD-MM-AAAA                                         | BASE   | [translations/ess_mss_gen_es.properties:L133](../../referencias/literales/ess_mss_gen_es.md) |
| Label.mss_g3_p6_mod1_Cost | Coste estimado por empleado, sin coste salarial    | BASE   | [translations/mss_g3_es.properties:L88](../../referencias/literales/mss_g3_es.md)            |
| Label.mss_g3_p6_mod1_Desc | Descripción                                        | BASE   | [translations/mss_g3_es.properties:L89](../../referencias/literales/mss_g3_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6_mod1.jsp) | `82066b179bae6fd24144d32b0fbb731b4432b1d79bea968c069673afa68c8301` |    574 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6_mod1.jsp)   | `e3ad8159a2ab3f1ffb02752e77ca5db9fdb8e9a4e94898a223c684b23925b6af` |    574 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p6_mod1.jsp) | `82066b179bae6fd24144d32b0fbb731b4432b1d79bea968c069673afa68c8301` |    574 |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_mod1.jsp)                             | `137040090688a3286c9c279a64dc4228f54f7299b42fe18b867903e0f206c0dc` |    563 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6_mod1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                 |
| --- | ---------------------------------------- |
| 21  | Solicita necesidades de formación        |
| 330 | Solicita necesidades de formación        |
| 354 | Producto tipo                            |
| 356 | Producto                                 |
| 362 | Lugar                                    |
| 364 | Bonificable Fundación Tripartita         |
| 366 | No                                       |
| 368 | Si                                       |
| 374 | Días                                     |
| 380 | Nº horas                                 |
| 386 | Nº de asistentes (min/max)               |
| 387 | /                                        |
| 390 | Nivel                                    |
| 397 | Autor                                    |
| 399 | Fecha actualización                      |
| 403 | Nº unidades                              |
| 408 | Objetivo formativo                       |
| 427 | Información adicional                    |
| 430 | Inicio preferido                         |
| 433 | Fin preferido                            |
| 437 | Idioma                                   |
| 438 | Español "&gt;                            |
| 446 | Bonificación                             |
| 447 | "&gt;                                    |
| 467 | Cursos programados                       |
| 469 | Nombre                                   |
| 470 | Inicio                                   |
| 471 | Fin                                      |
| 472 | Días                                     |
| 473 | Núm. de horas                            |
| 474 | Núm. de horas extras                     |
| 485 | " /&gt; " /&gt;                          |
| 500 | No quiero ningún curso programado        |
| 512 | Solicitud de plazas                      |
| 514 | Número de plazas:                        |
| 516 | "&gt;                                    |
| 545 | ')" title="Enviar la nueva peticion"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                   |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 331 | img      | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                           |
| 335 | form     | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp; method=post; name=Formulario; id=Formulario                                                                                  |
| 336 | input    | id=zempleados; name=zempleados; type=hidden; value=                                                                                                                                         |
| 337 | input    | id=zTipo; name=zTipo; type=hidden; value=1                                                                                                                                                  |
| 339 | input    | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                          |
| 340 | input    | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                             |
| 341 | input    | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                      |
| 349 | a        | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                              |
| 349 | img      | alt=Solicita necesidades de formación; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 431 | input    | class=fuenteformulario; type=text; name=zfechaini; id=zfechaini; title=Escribe la fecha de inicio; maxlength=10; size=10                                                                    |
| 431 | a        | href=javascript:m4calendario(m4objeto('zfechaini','Formulario'))                                                                                                                            |
| 431 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de inicio                                                                                              |
| 434 | input    | class=fuenteformulario; type=text; name=zfechafin; id=zfechafin; title=Escribe la fecha de fin; maxlength=10; size=10                                                                       |
| 434 | a        | href=javascript:m4calendario(m4objeto('zfechafin','Formulario'))                                                                                                                            |
| 434 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de fin                                                                                                 |
| 439 | select   | id=zidioma; class=Fuenteformulario; name=zidioma; alt=Idioma                                                                                                                                |
| 440 | option   | value=01                                                                                                                                                                                    |
| 442 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 448 | select   | id=zDev; class=Fuenteformulario; name=zDev; alt=Bonificación                                                                                                                                |
| 449 | option   | value=                                                                                                                                                                                      |
| 451 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 460 | textarea | class=fuenteformulario; title=&lt;%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%&gt;; id=zDescription; name=zDescription; cols=40; rows=4; maxlength=1000                               |
| 487 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                              |
| 489 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true; checked=presente; confirmar condición si dinámico                                                           |
| 501 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%&gt;; checked=presente; confirmar condición si dinámico                  |
| 508 | input    | id=zidtrtb; name=zidtrtb; type=hidden; value=&lt;%=zidtrtb%&gt;                                                                                                                             |
| 514 | input    | maxlength=10; class=fuenteformulario; type=text; name=znplazas; id=znplazas; title=Número de plazas; size=10                                                                                |
| 517 | select   | class=fuenteformulario; multiple=multiple; name=list1; id=list1; size=10; align=center; ondblclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)               |
| 521 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 523 | option   |                                                                                                                                                                                             |
| 528 | img      | alt=Enviar; title=; src=/iconos/icono_move_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false); name=b2; id=b2; align=center                 |
| 528 | img      | alt=Enviar; title=; src=/iconos/icono_move_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false); name=b1; id=b1; align=center                |
| 530 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true); name=b4; id=b4; align=center               |
| 530 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true); name=b3; id=b3; align=center              |
| 534 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)               |
| 535 | option   | value=&lt;%=empleado%&gt;                                                                                                                                                                   |
| 538 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)               |
| 539 | option   |                                                                                                                                                                                             |
| 546 | a        | href="javascript:solicitar('&lt;%=zidtrtb%&gt;','&lt;m4:item; m4name=&lt;%=zSCO_ID_DEV_PRODUCT%&gt;; htmlsafe=true                                                                          |
| 546 | img      | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_mss_36_36.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                              |
| 548 | a        | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                       |
| 548 | img      | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)          |
| 555 | form     | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                        |
| 556 | input    | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                              |
| 558 | input    | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                       |
| 563 | img      | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 9   | empleado        | getParameter(request,"empleado")        |
| 10  | periodo         | getParameter(request,"periodo")         |
| 11  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 12  | zVis            | getParameter(request,"zVis")            |
| 152 | estado          | getParameter(request,"estado")          |
| 153 | zid             | getParameter(request,"zid")             |
| 154 | zinicios        | getParameter(request,"zinicios")        |
| 155 | zidtrtb         | getParameter(request,"zidtrtb")         |
| 156 | zinfosubp       | getParameter(request,"zinfosubp")       |

| L   | Variable                       | Expresión fuente                                                            | Resolución estática parcial                                                                                        |
| --- | ------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 9   | empleado                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                               |
| 10  | periodo                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                |
| 11  | nombre_empleado                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                        |
| 12  | zVis                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                   |
| 18  | label_11                       | "Volver a Datos Profesionales del Empleado"                                 | Volver a Datos Profesionales del Empleado                                                                          |
| 31  | zDateFormat                    | ""                                                                          |                                                                                                                    |
| 152 | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                 |
| 153 | zid                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")                                                    |
| 154 | zinicios                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                               |
| 155 | zidtrtb                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")                                                |
| 156 | zinfosubprod                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")                                              |
| 174 | zsubsesion                     | "CSP_SSM_TRAINING_REQUEST"                                                  | CSP_SSM_TRAINING_REQUEST                                                                                           |
| 175 | zMeta4Object                   | "CSP_SSM_TRAINING_REQUEST"                                                  | CSP_SSM_TRAINING_REQUEST                                                                                           |
| 177 | znodo1                         | "M4T_DESC_CURSO"                                                            | M4T_DESC_CURSO                                                                                                     |
| 178 | znodo11                        | "M4T_CATG"                                                                  | M4T_CATG                                                                                                           |
| 179 | znodo12                        | "M4T_NATURE"                                                                | M4T_NATURE                                                                                                         |
| 180 | znodo13                        | "M4T_TRAINING_DEV"                                                          | M4T_TRAINING_DEV                                                                                                   |
| 183 | znodo2                         | "SSM_EMPLEADOS"                                                             | SSM_EMPLEADOS                                                                                                      |
| 184 | znodo3                         | "M4T_LENGUAJES"                                                             | M4T_LENGUAJES                                                                                                      |
| 185 | znodo6                         | "M4T_EVENTOS"                                                               | M4T_EVENTOS                                                                                                        |
| 188 | ztipocarga                     | "DC"                                                                        | DC                                                                                                                 |
| 189 | zventanas                      | "20"                                                                        | 20                                                                                                                 |
| 191 | zregistroinicial               | 0                                                                           | 0                                                                                                                  |
| 193 | zventana                       | 0                                                                           | 0                                                                                                                  |
| 194 | zregistrofinal                 | zregistroinicial + zventana - 1                                             | 0{zventana - 1}                                                                                                    |
| 197 | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                                 |
| 198 | zmove1                         | znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]"                        | M4T_DESC_CURSO{":"}M4T_DESC_CURSO{"["}0{"]"}                                                                       |
| 199 | zlectura1                      | zsubsesion + "!" + znodo1                                                   | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                                        |
| 200 | zraiz1                         | zsubsesion + "!" + znodo1 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}                                                                   |
| 201 | ziterator1                     | znodo1 + ":" + zsubsesion + "!" + znodo1                                    | M4T_DESC_CURSO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                     |
| 204 | zoutputdef11                   | zsubsesion + "!" + znodo11 + "[*]"                                          | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                       |
| 205 | zraiz11                        | zsubsesion + "!" + znodo11 + "."                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}                                                                         |
| 206 | zmove11                        | znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]"                      | M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                                                   |
| 208 | zoutputdef12                   | zsubsesion + "!" + znodo12+ "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                                     |
| 209 | zraiz12                        | zsubsesion + "!" + znodo12 + "."                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}                                                                       |
| 211 | zoutputdef13                   | zsubsesion + "!" + znodo13+ "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                               |
| 212 | zcomun13                       | znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + "."       | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}                        |
| 213 | zmove13                        | znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]"                      | M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                                                   |
| 215 | zoutputdef2                    | zsubsesion + "!" + znodo2 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                                  |
| 216 | zmove2                         | znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]"                        | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                                         |
| 217 | zraiz2                         | zsubsesion + "!" + znodo2 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}                                                                    |
| 218 | zcomun2                        | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."         | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                              |
| 220 | zoutputdef3                    | zsubsesion + "!" + znodo3 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                                  |
| 221 | zmove3                         | znodo3 + ":" + znodo3 + "[FIRST]"                                           | M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                                         |
| 222 | zcomun3                        | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."         | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}                              |
| 224 | zoutputdef6                    | zsubsesion + "!" + znodo6 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                                    |
| 225 | zmove6                         | znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]"                        | M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                                             |
| 226 | zraiz6                         | zsubsesion + "!" + znodo6 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"."}                                                                      |
| 227 | zcomun6                        | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."         | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}                                  |
| 231 | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                              | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                           |
| 233 | zSCO_DAYS                      | zraiz1 + "SCO_DAYS"                                                         | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                                       |
| 234 | zSCO_HOURS                     | zraiz1 + "SCO_HOURS"                                                        | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}                                                      |
| 235 | zSCO_HOURS_OTW                 | zraiz1 + "SCO_HOURS_OTW"                                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}                                                  |
| 236 | zSCO_NB_MAX                    | zraiz1 + "SCO_NB_MAX"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}                                                     |
| 237 | zSCO_NB_MIN                    | zraiz1 + "SCO_NB_MIN"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}                                                     |
| 238 | zSCO_NM_DEV_SUBPRODUCT         | zraiz1 + "SCO_NM_DEV_SUBPRODUCT"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                          |
| 239 | zSCO_NM_DEV_PRO_TYPE           | zraiz1 + "SCO_NM_DEV_PRO_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}                                            |
| 240 | zSCO_NM_DEV_PRODUCT            | zraiz1 + "SCO_NM_DEV_PRODUCT"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}                                             |
| 241 | zSCO_NM_PRODUCT_TYPE           | zraiz1 + "SCO_NM_PRODUCT_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}                                            |
| 242 | zSCO_EDUCAT_OBJ                | zraiz1 + "SCO_EDUCAT_OBJ"                                                   | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}                                                 |
| 243 | zSCO_HTTP_PATH                 | zraiz1 + "SCO_HTTP_PATH"                                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}                                                  |
| 244 | zIDtipo                        | zraiz1 + "SCO_ID_DEV_PRO_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                                            |
| 246 | zSCO_AUTHOR                    | zraiz1 + "SCO_AUTHOR"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}                                                     |
| 247 | zSCO_CD_DATE                   | zraiz1 + "SCO_CD_DATE"                                                      | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}                                                    |
| 248 | zSCO_ESTIMATED_DAYS            | zraiz1 + "SCO_ESTIMATED_DAYS"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_DAYS"}                                             |
| 249 | zSCO_ESTIMATED_HOURS           | zraiz1 + "SCO_ESTIMATED_HOURS"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_HOURS"}                                            |
| 250 | zSCO_NUMBER_OF_UNITS           | zraiz1 + "SCO_NUMBER_OF_UNITS"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}                                            |
| 251 | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}                                  |
| 252 | zSFR_CK_DEDUCTIBLE             | zraiz1 + "SFR_CK_DEDUCTIBLE"                                                | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                              |
| 253 | zSCO_ID_DEV_PRODUCT            | zraiz1 + "SCO_ID_DEV_PRODUCT"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRODUCT"}                                             |
| 257 | zSCO_ID_TRAINING_CATG          | zraiz11 + "SCO_ID_TRAINING_CATG"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_ID_TRAINING_CATG"}                                                 |
| 258 | zSCO_NM_TRAINING_CATG          | zraiz11 + "SCO_NM_TRAINING_CATG"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}                                                 |
| 260 | zSCO_NM_TRAINING_NAT           | zraiz12 + "SCO_NM_TRAINING_NAT"                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"}                                                |
| 261 | zSCO_ID_TRAINING_NAT           | zraiz12 + "SCO_ID_TRAINING_NAT"                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_ID_TRAINING_NAT"}                                                |
| 263 | zSSCO_ID_TRAINING_DEV          | zcomun13 + "SCO_ID_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRAINING_DEV"} |
| 264 | zSCO_NM_TRAINING_DEV           | zcomun13 + "SCO_NM_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"} |
| 267 | zNFAMILYNAME                   | zraiz2 + "STD_N_FAMILY_NAME_1"                                              | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FAMILY_NAME_1"}                                             |
| 268 | zFIRSTNAME                     | zraiz2 + "STD_N_FIRST_NAME"                                                 | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FIRST_NAME"}                                                |
| 269 | zIDPERSON                      | zcomun2 + "STD_ID_PERSON"                                                   | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}             |
| 270 | zSCO_GB_NAME                   | zcomun2 + "SCO_GB_NAME"                                                     | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}               |
| 272 | zSTDNMLENGUAGE                 | zcomun3 + "STD_N_LANGUAGE"                                                  | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}            |
| 273 | zSTDIDLENGUAGE                 | zcomun3 + "STD_ID_LANGUAGE"                                                 | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}           |
| 275 | zNMEVENTO                      | zcomun6 + "SCO_NM_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}          |
| 276 | zIDTRTBEVENTO                  | zcomun6 + "SCO_ID_TRTBREQ"                                                  | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                |
| 277 | zDATE                          | zcomun6 + "SCO_DATE"                                                        | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}                      |
| 278 | zDATE1                         | zcomun6 + "SCO_DATE_1"                                                      | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}                    |
| 279 | zSCO_DAYS6                     | zcomun6 + "SCO_DAYS"                                                        | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                      |
| 280 | zSCO_HOURS6                    | zcomun6 + "SCO_HOURS"                                                       | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}                     |
| 281 | zSCO_HOURS_OTW6                | zcomun6 + "SCO_HOURS_OTW"                                                   | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}                 |
| 283 | zSCO_ID_TYPE                   | zcomun6 + "SCO_ID_TYPE"                                                     | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                   |
| 284 | zSCO_ID_DEV_SUBACTION          | zcomun6 + "SCO_ID_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}          |
| 285 | zSCO_ID_DEV_SUBPRODUCT         | zraiz1 + "SCO_ID_DEV_SUBPRODUCT"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                          |
| 311 | zcount3                        | 0                                                                           | 0                                                                                                                  |
| 312 | zcount3i                       | 0                                                                           | 0                                                                                                                  |
| 313 | zcount2i                       | 0                                                                           | 0                                                                                                                  |
| 314 | zcount13                       | 0                                                                           | 0                                                                                                                  |
| 315 | zcounteventos_aux              | 0                                                                           | 0                                                                                                                  |
| 324 | zcount2v                       | String.valueOf(zcount2i)                                                    | String.valueOf(zcount2i)                                                                                           |
| 325 | zcount3v                       | String.valueOf(zcount3i)                                                    | String.valueOf(zcount3i)                                                                                           |
| 326 | zcount6v                       | String.valueOf(zcounteventos_aux)                                           | String.valueOf(zcounteventos_aux)                                                                                  |
| 327 | zcount13v                      | String.valueOf(zcount13)                                                    | String.valueOf(zcount13)                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 288 | m4:startpage | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                          |
| 288 | m4:beginjob  |                                                                                                                                          |
| 289 | m4:datadef   | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                            |
| 296 | m4:exec      | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                        |
| 296 | m4:param     | name=TIPO_CARGA; value=DC                                                                                                                |
| 297 | m4:outputdef |                                                                                                                                          |
| 297 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                                   |
| 298 | m4:outputdef |                                                                                                                                          |
| 298 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                         |
| 299 | m4:outputdef |                                                                                                                                          |
| 299 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                                       |
| 300 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                    |
| 300 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                                    |
| 301 | m4:outputdef | m4alias=M4T_LENGUAJES                                                                                                                    |
| 301 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                                    |
| 302 | m4:outputdef | m4alias=M4T_EVENTOS                                                                                                                      |
| 302 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                                      |
| 303 | m4:outputdef | m4alias=M4T_TRAINING_DEV                                                                                                                 |
| 303 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                                 |
| 304 | m4:endjob    |                                                                                                                                          |
| 305 | m4:move      |                                                                                                                                          |
| 305 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                                    |
| 306 | m4:move      |                                                                                                                                          |
| 306 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                                    |
| 307 | m4:move      |                                                                                                                                          |
| 307 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                          |
| 308 | m4:move      |                                                                                                                                          |
| 308 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                          |
| 309 | m4:move      |                                                                                                                                          |
| 309 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                              |
| 346 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                          |
| 346 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                            |
| 355 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                                            |
| 357 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                             |
| 359 | m4:item      | m4varname=zIdTypeC; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 360 | m4:item      | m4varname=zCHDedcu; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                         |
| 363 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                                  |
| 371 | m4:item      | m4varname=zDays; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                                     |
| 375 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; htmlsafe=true                                                       |
| 381 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; htmlsafe=true                                                      |
| 387 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; htmlsafe=true                                                     |
| 387 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; htmlsafe=true                                                     |
| 391 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; htmlsafe=true                                                 |
| 398 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; htmlsafe=true                                                     |
| 400 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; htmlsafe=true                                                    |
| 404 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; htmlsafe=true                                            |
| 409 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; htmlsafe=true                                                 |
| 441 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                    |
| 442 | m4:item      | m4name=M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true            |
| 450 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount13v).intValue()-1).toString()                                                                   |
| 451 | m4:item      | m4name=M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"}; htmlsafe=true |
| 477 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount6v).intValue()-1).toString()                                                                    |
| 479 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true          |
| 480 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; htmlsafe=true                    |
| 481 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true                      |
| 482 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                      |
| 483 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; htmlsafe=true                     |
| 484 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; htmlsafe=true                 |
| 519 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                    |
| 521 | m4:item      | m4name=SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true               |
| 572 | m4:endpage   |                                                                                                                                          |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 293 | setItem          | zsubsesion,znodo1,"","SSE_ID",zid |
| 318 | getCount         | znodo3,zsubsesion,znodo3          |
| 319 | getCountInClient | znodo3,zsubsesion,znodo3          |
| 320 | getCountInClient | znodo2,zsubsesion,znodo2          |
| 321 | getCount         | znodo13,zsubsesion,znodo13        |
| 322 | getCountInClient | znodo6,zsubsesion,znodo6          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos                                 |
| --- | ----------- | ------------------------------------------ |
| 36  | calc_costs  | zNUM_PLACES,zTYPE,zID_DEV_SUB,zID_DEV_SUBA |
| 70  | volver_prof |                                            |
| 75  | solicitar   | i2,zid2                                    |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                                                                                                    |
| 42  | if ((zDT_END==null)&#124;&#124;(zDT_END=="")){zDT_END = "01-01-4000";}                                                                                                                                                                             |
| 43  | if ((zTYPE==null)&#124;&#124;(zTYPE=="")){zTYPE= "11";}                                                                                                                                                                                            |
| 45  | if (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),false)=="" )                                                                                                                                                                            |
| 51  | if (zDT_END != "01-01-4000" &amp;&amp; (m4fechacomprobacion(m4objeto('zfechafin','Formulario'),false)=="" ) )                                                                                                                                      |
| 57  | if (error == 1)                                                                                                                                                                                                                                    |
| 59  | alert(sMessage);                                                                                                                                                                                                                                   |
| 62  | else                                                                                                                                                                                                                                               |
| 111 | if (plazas == 0 &amp;&amp; m== 0){alert ("Debe de introducir número de plazas o elegir algún empleado");return;}                                                                                                                                   |
| 112 | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                                                                                                                                                  |
| 114 | if (v1.resultado == false &amp;&amp; m == 0){                                                                                                                                                                                                      |
| 115 | alert ("No se ha realizado la solicitud.Compruebe que el número de plazas es correcto.");                                                                                                                                                          |
| 117 | if (a == false){return;}                                                                                                                                                                                                                           |
| 120 | if (oobjeto[i].checked == true){                                                                                                                                                                                                                   |
| 125 | if (id==trtb){m4valor("Formulario","zTipo","1","set");}else{m4valor("Formulario","zTipo","2","set");}                                                                                                                                              |
| 127 | if (plazas &lt; m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}                                                                                                                                                                          |
| 129 | if (i == n) {empleados += document.forms["Formulario"].elements["list2"].options [i].value;}                                                                                                                                                       |
| 130 | else {empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}                                                                                                                                                        |
| 132 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4valor("Formulario","zfechaini","","get")== ""))                                                                                                                                |
| 136 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))                                                                                                                     |
| 140 | if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&amp;&amp; (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&amp;&amp; (m4compfechas(m4objeto('zfechaini','Formulario'),'&lt;=',m4objeto('zfechafin','Formulario')))) |
| 144 | alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");                                                                                                             |
| 158 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                |
| 161 | if ((zidtrtb==null)&#124;&#124;(zidtrtb.equals(""))){                                                                                                                                                                                              |
| 164 | if ((zinfosubprod==null)&#124;&#124;(zinfosubprod.equals(""))){zinfosubprod = "0";}                                                                                                                                                                |
| 169 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 338 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 348 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 365 | &lt;%if (zCHDedcu.equals("0")){%&gt;                                                                                                                                                                                                               |
| 367 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 372 | &lt;%if (!zDays.equals("1")){%&gt;                                                                                                                                                                                                                 |
| 395 | &lt;%if (zIdTypeC.equals("02")){%&gt;                                                                                                                                                                                                              |
| 464 | &lt;% if (zcounteventos_aux != 0 ) { %&gt;                                                                                                                                                                                                         |
| 486 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 488 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 499 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 507 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 533 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 537 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 547 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 554 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 568 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 47  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_START,"&lt;%=zDateFormat%&gt;");                                                                                                                        |
| 53  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_END,"&lt;%=zDateFormat%&gt;");                                                                                                                          |
| 194 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                         |
| 197 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                                                                                                       |
| 198 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 199 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                                                                                                                                 |
| 200 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                                                                                                                              |
| 201 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                                                                                                                 |
| 204 | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                                                                                                                                     |
| 205 | expresión de cálculo/transformación: String zraiz11 = zsubsesion + "!" + znodo11 + ".";                                                                                                                                                            |
| 206 | expresión de cálculo/transformación: String zmove11 = znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 208 | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12+ "[*]";                                                                                                                                                      |
| 209 | expresión de cálculo/transformación: String zraiz12 = zsubsesion + "!" + znodo12 + ".";                                                                                                                                                            |
| 211 | expresión de cálculo/transformación: String zoutputdef13 = zsubsesion + "!" + znodo13+ "[*]";                                                                                                                                                      |
| 212 | expresión de cálculo/transformación: String zcomun13 = znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + ".";                                                                                                                      |
| 213 | expresión de cálculo/transformación: String zmove13 = znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 215 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                       |
| 216 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 217 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                              |
| 218 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 220 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                       |
| 221 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                                            |
| 222 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 224 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                       |
| 225 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 226 | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                                                                                                                              |
| 227 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 231 | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                                                                                                                         |
| 233 | expresión de cálculo/transformación: String zSCO_DAYS = zraiz1 + "SCO_DAYS";                                                                                                                                                                       |
| 234 | expresión de cálculo/transformación: String zSCO_HOURS = zraiz1 + "SCO_HOURS";                                                                                                                                                                     |
| 235 | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz1 + "SCO_HOURS_OTW";                                                                                                                                                             |
| 236 | expresión de cálculo/transformación: String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";                                                                                                                                                                   |
| 237 | expresión de cálculo/transformación: String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";                                                                                                                                                                   |
| 238 | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";                                                                                                                                             |
| 239 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";                                                                                                                                                 |
| 240 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";                                                                                                                                                   |
| 241 | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";                                                                                                                                                 |
| 242 | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";                                                                                                                                                           |
| 243 | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";                                                                                                                                                             |
| 244 | expresión de cálculo/transformación: String zIDtipo = zraiz1 + "SCO_ID_DEV_PRO_TYPE";                                                                                                                                                              |
| 246 | expresión de cálculo/transformación: String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";                                                                                                                                                                   |
| 247 | expresión de cálculo/transformación: String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";                                                                                                                                                                 |
| 248 | expresión de cálculo/transformación: String zSCO_ESTIMATED_DAYS = zraiz1 + "SCO_ESTIMATED_DAYS";                                                                                                                                                   |
| 249 | expresión de cálculo/transformación: String zSCO_ESTIMATED_HOURS = zraiz1 + "SCO_ESTIMATED_HOURS";                                                                                                                                                 |
| 250 | expresión de cálculo/transformación: String zSCO_NUMBER_OF_UNITS = zraiz1 + "SCO_NUMBER_OF_UNITS";                                                                                                                                                 |
| 251 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";                                                                                                                             |
| 252 | expresión de cálculo/transformación: String zSFR_CK_DEDUCTIBLE = zraiz1 + "SFR_CK_DEDUCTIBLE";                                                                                                                                                     |
| 253 | expresión de cálculo/transformación: String zSCO_ID_DEV_PRODUCT = zraiz1 + "SCO_ID_DEV_PRODUCT";                                                                                                                                                   |
| 257 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_CATG = zraiz11 + "SCO_ID_TRAINING_CATG";                                                                                                                                              |
| 258 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_CATG = zraiz11 + "SCO_NM_TRAINING_CATG";                                                                                                                                              |
| 260 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_NAT = zraiz12 + "SCO_NM_TRAINING_NAT";                                                                                                                                                |
| 261 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_NAT = zraiz12 + "SCO_ID_TRAINING_NAT";                                                                                                                                                |
| 263 | expresión de cálculo/transformación: String zSSCO_ID_TRAINING_DEV = zcomun13 + "SCO_ID_TRAINING_DEV";                                                                                                                                              |
| 264 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_DEV = zcomun13 + "SCO_NM_TRAINING_DEV";                                                                                                                                               |
| 267 | expresión de cálculo/transformación: String zNFAMILYNAME = zraiz2 + "STD_N_FAMILY_NAME_1";                                                                                                                                                         |
| 268 | expresión de cálculo/transformación: String zFIRSTNAME = zraiz2 + "STD_N_FIRST_NAME";                                                                                                                                                              |
| 269 | expresión de cálculo/transformación: String zIDPERSON = zcomun2 + "STD_ID_PERSON";                                                                                                                                                                 |
| 270 | expresión de cálculo/transformación: String zSCO_GB_NAME = zcomun2 + "SCO_GB_NAME";                                                                                                                                                                |
| 272 | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";                                                                                                                                                           |
| 273 | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";                                                                                                                                                          |
| 275 | expresión de cálculo/transformación: String zNMEVENTO = zcomun6 + "SCO_NM_DEV_SUBACTION";                                                                                                                                                          |
| 276 | expresión de cálculo/transformación: String zIDTRTBEVENTO = zcomun6 + "SCO_ID_TRTBREQ";                                                                                                                                                            |
| 277 | expresión de cálculo/transformación: String zDATE = zcomun6 + "SCO_DATE";                                                                                                                                                                          |
| 278 | expresión de cálculo/transformación: String zDATE1 = zcomun6 + "SCO_DATE_1";                                                                                                                                                                       |
| 279 | expresión de cálculo/transformación: String zSCO_DAYS6= zcomun6 + "SCO_DAYS";                                                                                                                                                                      |
| 280 | expresión de cálculo/transformación: String zSCO_HOURS6= zcomun6 + "SCO_HOURS";                                                                                                                                                                    |
| 281 | expresión de cálculo/transformación: String zSCO_HOURS_OTW6= zcomun6 + "SCO_HOURS_OTW";                                                                                                                                                            |
| 283 | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun6 + "SCO_ID_TYPE";                                                                                                                                                                |
| 284 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun6 + "SCO_ID_DEV_SUBACTION";                                                                                                                                              |
| 285 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBPRODUCT = zraiz1 + "SCO_ID_DEV_SUBPRODUCT";                                                                                                                                             |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 24  | ../../mss_generico/espanol/menu_mss.jsp               |
| 30  | /mss_g3/mss_g3_trans.jsp                              |
| 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 171 | ../../sse_generico/espanol/generico_links.jsp         |
| 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 22  | /css/estilo_mss.css                                                                    |
| 23  | /libreria/funciones_sse.js                                                             |
| 25  | /libreria/menuintercambio.js                                                           |
| 26  | /libreria/clase_val_entradas.js                                                        |
| 331 | /iconos/noname_incripciones_formacion_99_100.gif                                       |
| 335 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 |
| 349 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              |
| 349 | /iconos/flecha_azul2_ess_11_9.gif                                                      |
| 431 | javascript:m4calendario(m4objeto(                                                      |
| 431 | /iconos/icono_calendario_14_18.gif                                                     |
| 434 | javascript:m4calendario(m4objeto(                                                      |
| 434 | /iconos/icono_calendario_14_18.gif                                                     |
| 528 | /iconos/icono_move_left_31_19.gif                                                      |
| 528 | /iconos/icono_move_right_31_19.gif                                                     |
| 530 | /iconos/icono_moveall_left_31_19.gif                                                   |
| 530 | /iconos/icono_moveall_right_31_19.gif                                                  |
| 546 | javascript:solicitar(                                                                  |
| 546 | /iconos/icono_enviar_mss_36_36.gif                                                     |
| 548 | javascript:volver_prof();                                                              |
| 548 | /iconos/icono_entrar_ess_36_36.gif                                                     |
| 555 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               |
| 563 | /iconos/cargando.gif                                                                   |
| 24  | ../../mss_generico/espanol/menu_mss.jsp                                                |
| 30  | /mss_g3/mss_g3_trans.jsp                                                               |
| 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= |
| 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     |
| 171 | ../../sse_generico/espanol/generico_links.jsp                                          |
| 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6_mod1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                 |
| --- | ---------------------------------------- |
| 21  | Solicita necesidades de formación        |
| 330 | Solicita necesidades de formación        |
| 354 | Producto tipo                            |
| 356 | Producto                                 |
| 362 | Lugar                                    |
| 364 | Bonificable Fundación Tripartita         |
| 366 | No                                       |
| 368 | Si                                       |
| 374 | Días                                     |
| 380 | Nº horas                                 |
| 386 | Nº de asistentes (min/max)               |
| 387 | /                                        |
| 390 | Nivel                                    |
| 397 | Autor                                    |
| 399 | Fecha actualización                      |
| 403 | Nº unidades                              |
| 408 | Objetivo formativo                       |
| 427 | Información adicional                    |
| 430 | Inicio preferido                         |
| 433 | Fin preferido                            |
| 437 | Idioma                                   |
| 438 | Español "&gt;                            |
| 446 | Bonificación                             |
| 447 | "&gt;                                    |
| 467 | Cursos programados                       |
| 469 | Nombre                                   |
| 470 | Inicio                                   |
| 471 | Fin                                      |
| 472 | Días                                     |
| 473 | Núm. de horas                            |
| 474 | Núm. de horas extras                     |
| 485 | " /&gt; " /&gt;                          |
| 500 | No quiero ningún curso programado        |
| 512 | Solicitud de plazas                      |
| 514 | Número de plazas:                        |
| 516 | "&gt;                                    |
| 545 | ')" title="Enviar la nueva peticion"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                   |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 331 | img      | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                           |
| 335 | form     | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp; method=post; name=Formulario; id=Formulario                                                                                  |
| 336 | input    | id=zempleados; name=zempleados; type=hidden; value=                                                                                                                                         |
| 337 | input    | id=zTipo; name=zTipo; type=hidden; value=1                                                                                                                                                  |
| 339 | input    | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                          |
| 340 | input    | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                             |
| 341 | input    | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                      |
| 349 | a        | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                              |
| 349 | img      | alt=Solicita necesidades de formación; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 431 | input    | class=fuenteformulario; type=text; name=zfechaini; id=zfechaini; title=Escribe la fecha de inicio; maxlength=10; size=10                                                                    |
| 431 | a        | href=javascript:m4calendario(m4objeto('zfechaini','Formulario'))                                                                                                                            |
| 431 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de inicio                                                                                              |
| 434 | input    | class=fuenteformulario; type=text; name=zfechafin; id=zfechafin; title=Escribe la fecha de fin; maxlength=10; size=10                                                                       |
| 434 | a        | href=javascript:m4calendario(m4objeto('zfechafin','Formulario'))                                                                                                                            |
| 434 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de fin                                                                                                 |
| 439 | select   | id=zidioma; class=Fuenteformulario; name=zidioma; alt=Idioma                                                                                                                                |
| 440 | option   | value=01                                                                                                                                                                                    |
| 442 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 448 | select   | id=zDev; class=Fuenteformulario; name=zDev; alt=Bonificación                                                                                                                                |
| 449 | option   | value=                                                                                                                                                                                      |
| 451 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 460 | textarea | class=fuenteformulario; title=&lt;%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%&gt;; id=zDescription; name=zDescription; cols=40; rows=4; maxlength=1000                               |
| 487 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                              |
| 489 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true; checked=presente; confirmar condición si dinámico                                                           |
| 501 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%&gt;; checked=presente; confirmar condición si dinámico                  |
| 508 | input    | id=zidtrtb; name=zidtrtb; type=hidden; value=&lt;%=zidtrtb%&gt;                                                                                                                             |
| 514 | input    | maxlength=10; class=fuenteformulario; type=text; name=znplazas; id=znplazas; title=Número de plazas; size=10                                                                                |
| 517 | select   | class=fuenteformulario; multiple=multiple; name=list1; id=list1; size=10; align=center; ondblclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)               |
| 521 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                    |
| 523 | option   |                                                                                                                                                                                             |
| 528 | img      | alt=Enviar; title=; src=/iconos/icono_move_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false); name=b2; id=b2; align=center                 |
| 528 | img      | alt=Enviar; title=; src=/iconos/icono_move_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false); name=b1; id=b1; align=center                |
| 530 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true); name=b4; id=b4; align=center               |
| 530 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true); name=b3; id=b3; align=center              |
| 534 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)               |
| 535 | option   | value=&lt;%=empleado%&gt;                                                                                                                                                                   |
| 538 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)               |
| 539 | option   |                                                                                                                                                                                             |
| 546 | a        | href="javascript:solicitar('&lt;%=zidtrtb%&gt;','&lt;m4:item; m4name=&lt;%=zSCO_ID_DEV_PRODUCT%&gt;; htmlsafe=true                                                                          |
| 546 | img      | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_mss_36_36.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                              |
| 548 | a        | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                       |
| 548 | img      | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)          |
| 555 | form     | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                        |
| 556 | input    | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                              |
| 558 | input    | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                       |
| 563 | img      | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 9   | empleado        | getParameter(request,"empleado")        |
| 10  | periodo         | getParameter(request,"periodo")         |
| 11  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 12  | zVis            | getParameter(request,"zVis")            |
| 152 | estado          | getParameter(request,"estado")          |
| 153 | zid             | getParameter(request,"zid")             |
| 154 | zinicios        | getParameter(request,"zinicios")        |
| 155 | zidtrtb         | getParameter(request,"zidtrtb")         |
| 156 | zinfosubp       | getParameter(request,"zinfosubp")       |

| L   | Variable                       | Expresión fuente                                                            | Resolución estática parcial                                                                                        |
| --- | ------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 9   | empleado                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                               |
| 10  | periodo                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                |
| 11  | nombre_empleado                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                        |
| 12  | zVis                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                   |
| 18  | label_11                       | "Volver a Datos Profesionales del Empleado"                                 | Volver a Datos Profesionales del Empleado                                                                          |
| 31  | zDateFormat                    | ""                                                                          |                                                                                                                    |
| 152 | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                 |
| 153 | zid                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")                                                    |
| 154 | zinicios                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                               |
| 155 | zidtrtb                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")                                                |
| 156 | zinfosubprod                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")                                              |
| 174 | zsubsesion                     | "CSP_SSM_TRAINING_REQUEST"                                                  | CSP_SSM_TRAINING_REQUEST                                                                                           |
| 175 | zMeta4Object                   | "CSP_SSM_TRAINING_REQUEST"                                                  | CSP_SSM_TRAINING_REQUEST                                                                                           |
| 177 | znodo1                         | "M4T_DESC_CURSO"                                                            | M4T_DESC_CURSO                                                                                                     |
| 178 | znodo11                        | "M4T_CATG"                                                                  | M4T_CATG                                                                                                           |
| 179 | znodo12                        | "M4T_NATURE"                                                                | M4T_NATURE                                                                                                         |
| 180 | znodo13                        | "M4T_TRAINING_DEV"                                                          | M4T_TRAINING_DEV                                                                                                   |
| 183 | znodo2                         | "SSM_EMPLEADOS"                                                             | SSM_EMPLEADOS                                                                                                      |
| 184 | znodo3                         | "M4T_LENGUAJES"                                                             | M4T_LENGUAJES                                                                                                      |
| 185 | znodo6                         | "M4T_EVENTOS"                                                               | M4T_EVENTOS                                                                                                        |
| 188 | ztipocarga                     | "DC"                                                                        | DC                                                                                                                 |
| 189 | zventanas                      | "20"                                                                        | 20                                                                                                                 |
| 191 | zregistroinicial               | 0                                                                           | 0                                                                                                                  |
| 193 | zventana                       | 0                                                                           | 0                                                                                                                  |
| 194 | zregistrofinal                 | zregistroinicial + zventana - 1                                             | 0{zventana - 1}                                                                                                    |
| 197 | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                                 |
| 198 | zmove1                         | znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]"                        | M4T_DESC_CURSO{":"}M4T_DESC_CURSO{"["}0{"]"}                                                                       |
| 199 | zlectura1                      | zsubsesion + "!" + znodo1                                                   | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                                        |
| 200 | zraiz1                         | zsubsesion + "!" + znodo1 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}                                                                   |
| 201 | ziterator1                     | znodo1 + ":" + zsubsesion + "!" + znodo1                                    | M4T_DESC_CURSO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                     |
| 204 | zoutputdef11                   | zsubsesion + "!" + znodo11 + "[*]"                                          | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                       |
| 205 | zraiz11                        | zsubsesion + "!" + znodo11 + "."                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}                                                                         |
| 206 | zmove11                        | znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]"                      | M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                                                   |
| 208 | zoutputdef12                   | zsubsesion + "!" + znodo12+ "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                                     |
| 209 | zraiz12                        | zsubsesion + "!" + znodo12 + "."                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}                                                                       |
| 211 | zoutputdef13                   | zsubsesion + "!" + znodo13+ "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                               |
| 212 | zcomun13                       | znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + "."       | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}                        |
| 213 | zmove13                        | znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]"                      | M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                                                   |
| 215 | zoutputdef2                    | zsubsesion + "!" + znodo2 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                                  |
| 216 | zmove2                         | znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]"                        | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                                         |
| 217 | zraiz2                         | zsubsesion + "!" + znodo2 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}                                                                    |
| 218 | zcomun2                        | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."         | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                              |
| 220 | zoutputdef3                    | zsubsesion + "!" + znodo3 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                                  |
| 221 | zmove3                         | znodo3 + ":" + znodo3 + "[FIRST]"                                           | M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                                         |
| 222 | zcomun3                        | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."         | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}                              |
| 224 | zoutputdef6                    | zsubsesion + "!" + znodo6 + "[*]"                                           | CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                                    |
| 225 | zmove6                         | znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]"                        | M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                                             |
| 226 | zraiz6                         | zsubsesion + "!" + znodo6 + "."                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"."}                                                                      |
| 227 | zcomun6                        | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."         | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}                                  |
| 231 | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                              | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                           |
| 233 | zSCO_DAYS                      | zraiz1 + "SCO_DAYS"                                                         | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                                       |
| 234 | zSCO_HOURS                     | zraiz1 + "SCO_HOURS"                                                        | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}                                                      |
| 235 | zSCO_HOURS_OTW                 | zraiz1 + "SCO_HOURS_OTW"                                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}                                                  |
| 236 | zSCO_NB_MAX                    | zraiz1 + "SCO_NB_MAX"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}                                                     |
| 237 | zSCO_NB_MIN                    | zraiz1 + "SCO_NB_MIN"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}                                                     |
| 238 | zSCO_NM_DEV_SUBPRODUCT         | zraiz1 + "SCO_NM_DEV_SUBPRODUCT"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                          |
| 239 | zSCO_NM_DEV_PRO_TYPE           | zraiz1 + "SCO_NM_DEV_PRO_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}                                            |
| 240 | zSCO_NM_DEV_PRODUCT            | zraiz1 + "SCO_NM_DEV_PRODUCT"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}                                             |
| 241 | zSCO_NM_PRODUCT_TYPE           | zraiz1 + "SCO_NM_PRODUCT_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}                                            |
| 242 | zSCO_EDUCAT_OBJ                | zraiz1 + "SCO_EDUCAT_OBJ"                                                   | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}                                                 |
| 243 | zSCO_HTTP_PATH                 | zraiz1 + "SCO_HTTP_PATH"                                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}                                                  |
| 244 | zIDtipo                        | zraiz1 + "SCO_ID_DEV_PRO_TYPE"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                                            |
| 246 | zSCO_AUTHOR                    | zraiz1 + "SCO_AUTHOR"                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}                                                     |
| 247 | zSCO_CD_DATE                   | zraiz1 + "SCO_CD_DATE"                                                      | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}                                                    |
| 248 | zSCO_ESTIMATED_DAYS            | zraiz1 + "SCO_ESTIMATED_DAYS"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_DAYS"}                                             |
| 249 | zSCO_ESTIMATED_HOURS           | zraiz1 + "SCO_ESTIMATED_HOURS"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_HOURS"}                                            |
| 250 | zSCO_NUMBER_OF_UNITS           | zraiz1 + "SCO_NUMBER_OF_UNITS"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}                                            |
| 251 | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"                                    | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}                                  |
| 252 | zSFR_CK_DEDUCTIBLE             | zraiz1 + "SFR_CK_DEDUCTIBLE"                                                | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                              |
| 253 | zSCO_ID_DEV_PRODUCT            | zraiz1 + "SCO_ID_DEV_PRODUCT"                                               | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRODUCT"}                                             |
| 257 | zSCO_ID_TRAINING_CATG          | zraiz11 + "SCO_ID_TRAINING_CATG"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_ID_TRAINING_CATG"}                                                 |
| 258 | zSCO_NM_TRAINING_CATG          | zraiz11 + "SCO_NM_TRAINING_CATG"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}                                                 |
| 260 | zSCO_NM_TRAINING_NAT           | zraiz12 + "SCO_NM_TRAINING_NAT"                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"}                                                |
| 261 | zSCO_ID_TRAINING_NAT           | zraiz12 + "SCO_ID_TRAINING_NAT"                                             | CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_ID_TRAINING_NAT"}                                                |
| 263 | zSSCO_ID_TRAINING_DEV          | zcomun13 + "SCO_ID_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRAINING_DEV"} |
| 264 | zSCO_NM_TRAINING_DEV           | zcomun13 + "SCO_NM_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"} |
| 267 | zNFAMILYNAME                   | zraiz2 + "STD_N_FAMILY_NAME_1"                                              | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FAMILY_NAME_1"}                                             |
| 268 | zFIRSTNAME                     | zraiz2 + "STD_N_FIRST_NAME"                                                 | CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FIRST_NAME"}                                                |
| 269 | zIDPERSON                      | zcomun2 + "STD_ID_PERSON"                                                   | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}             |
| 270 | zSCO_GB_NAME                   | zcomun2 + "SCO_GB_NAME"                                                     | SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}               |
| 272 | zSTDNMLENGUAGE                 | zcomun3 + "STD_N_LANGUAGE"                                                  | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}            |
| 273 | zSTDIDLENGUAGE                 | zcomun3 + "STD_ID_LANGUAGE"                                                 | M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}           |
| 275 | zNMEVENTO                      | zcomun6 + "SCO_NM_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}          |
| 276 | zIDTRTBEVENTO                  | zcomun6 + "SCO_ID_TRTBREQ"                                                  | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                |
| 277 | zDATE                          | zcomun6 + "SCO_DATE"                                                        | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}                      |
| 278 | zDATE1                         | zcomun6 + "SCO_DATE_1"                                                      | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}                    |
| 279 | zSCO_DAYS6                     | zcomun6 + "SCO_DAYS"                                                        | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                      |
| 280 | zSCO_HOURS6                    | zcomun6 + "SCO_HOURS"                                                       | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}                     |
| 281 | zSCO_HOURS_OTW6                | zcomun6 + "SCO_HOURS_OTW"                                                   | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}                 |
| 283 | zSCO_ID_TYPE                   | zcomun6 + "SCO_ID_TYPE"                                                     | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                   |
| 284 | zSCO_ID_DEV_SUBACTION          | zcomun6 + "SCO_ID_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}          |
| 285 | zSCO_ID_DEV_SUBPRODUCT         | zraiz1 + "SCO_ID_DEV_SUBPRODUCT"                                            | CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                          |
| 311 | zcount3                        | 0                                                                           | 0                                                                                                                  |
| 312 | zcount3i                       | 0                                                                           | 0                                                                                                                  |
| 313 | zcount2i                       | 0                                                                           | 0                                                                                                                  |
| 314 | zcount13                       | 0                                                                           | 0                                                                                                                  |
| 315 | zcounteventos_aux              | 0                                                                           | 0                                                                                                                  |
| 324 | zcount2v                       | String.valueOf(zcount2i)                                                    | String.valueOf(zcount2i)                                                                                           |
| 325 | zcount3v                       | String.valueOf(zcount3i)                                                    | String.valueOf(zcount3i)                                                                                           |
| 326 | zcount6v                       | String.valueOf(zcounteventos_aux)                                           | String.valueOf(zcounteventos_aux)                                                                                  |
| 327 | zcount13v                      | String.valueOf(zcount13)                                                    | String.valueOf(zcount13)                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 288 | m4:startpage | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                          |
| 288 | m4:beginjob  |                                                                                                                                          |
| 289 | m4:datadef   | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                            |
| 296 | m4:exec      | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                        |
| 296 | m4:param     | name=TIPO_CARGA; value=DC                                                                                                                |
| 297 | m4:outputdef |                                                                                                                                          |
| 297 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                                   |
| 298 | m4:outputdef |                                                                                                                                          |
| 298 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                         |
| 299 | m4:outputdef |                                                                                                                                          |
| 299 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                                       |
| 300 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                    |
| 300 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                                    |
| 301 | m4:outputdef | m4alias=M4T_LENGUAJES                                                                                                                    |
| 301 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                                    |
| 302 | m4:outputdef | m4alias=M4T_EVENTOS                                                                                                                      |
| 302 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                                      |
| 303 | m4:outputdef | m4alias=M4T_TRAINING_DEV                                                                                                                 |
| 303 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                                 |
| 304 | m4:endjob    |                                                                                                                                          |
| 305 | m4:move      |                                                                                                                                          |
| 305 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                                    |
| 306 | m4:move      |                                                                                                                                          |
| 306 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                                    |
| 307 | m4:move      |                                                                                                                                          |
| 307 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                          |
| 308 | m4:move      |                                                                                                                                          |
| 308 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                          |
| 309 | m4:move      |                                                                                                                                          |
| 309 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                              |
| 346 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                          |
| 346 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                            |
| 355 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                                            |
| 357 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                             |
| 359 | m4:item      | m4varname=zIdTypeC; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 360 | m4:item      | m4varname=zCHDedcu; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                         |
| 363 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                                  |
| 371 | m4:item      | m4varname=zDays; m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                                     |
| 375 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; htmlsafe=true                                                       |
| 381 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; htmlsafe=true                                                      |
| 387 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; htmlsafe=true                                                     |
| 387 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; htmlsafe=true                                                     |
| 391 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; htmlsafe=true                                                 |
| 398 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; htmlsafe=true                                                     |
| 400 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; htmlsafe=true                                                    |
| 404 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; htmlsafe=true                                            |
| 409 | m4:item      | m4name=CSP_SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; htmlsafe=true                                                 |
| 441 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                    |
| 442 | m4:item      | m4name=M4T_LENGUAJES{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true            |
| 450 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount13v).intValue()-1).toString()                                                                   |
| 451 | m4:item      | m4name=M4T_TRAINING_DEV{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"}; htmlsafe=true |
| 477 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount6v).intValue()-1).toString()                                                                    |
| 479 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true          |
| 480 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; htmlsafe=true                    |
| 481 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true                      |
| 482 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                      |
| 483 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; htmlsafe=true                     |
| 484 | m4:item      | m4name=M4T_EVENTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; htmlsafe=true                 |
| 519 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                    |
| 521 | m4:item      | m4name=SSM_EMPLEADOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true               |
| 572 | m4:endpage   |                                                                                                                                          |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 293 | setItem          | zsubsesion,znodo1,"","SSE_ID",zid |
| 318 | getCount         | znodo3,zsubsesion,znodo3          |
| 319 | getCountInClient | znodo3,zsubsesion,znodo3          |
| 320 | getCountInClient | znodo2,zsubsesion,znodo2          |
| 321 | getCount         | znodo13,zsubsesion,znodo13        |
| 322 | getCountInClient | znodo6,zsubsesion,znodo6          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos                                 |
| --- | ----------- | ------------------------------------------ |
| 36  | calc_costs  | zNUM_PLACES,zTYPE,zID_DEV_SUB,zID_DEV_SUBA |
| 70  | volver_prof |                                            |
| 75  | solicitar   | i2,zid2                                    |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                                                                                                    |
| 42  | if ((zDT_END==null)&#124;&#124;(zDT_END=="")){zDT_END = "01-01-4000";}                                                                                                                                                                             |
| 43  | if ((zTYPE==null)&#124;&#124;(zTYPE=="")){zTYPE= "11";}                                                                                                                                                                                            |
| 45  | if (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),false)=="" )                                                                                                                                                                            |
| 51  | if (zDT_END != "01-01-4000" &amp;&amp; (m4fechacomprobacion(m4objeto('zfechafin','Formulario'),false)=="" ) )                                                                                                                                      |
| 57  | if (error == 1)                                                                                                                                                                                                                                    |
| 59  | alert(sMessage);                                                                                                                                                                                                                                   |
| 62  | else                                                                                                                                                                                                                                               |
| 111 | if (plazas == 0 &amp;&amp; m== 0){alert ("Debe de introducir número de plazas o elegir algún empleado");return;}                                                                                                                                   |
| 112 | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                                                                                                                                                  |
| 114 | if (v1.resultado == false &amp;&amp; m == 0){                                                                                                                                                                                                      |
| 115 | alert ("No se ha realizado la solicitud.Compruebe que el número de plazas es correcto.");                                                                                                                                                          |
| 117 | if (a == false){return;}                                                                                                                                                                                                                           |
| 120 | if (oobjeto[i].checked == true){                                                                                                                                                                                                                   |
| 125 | if (id==trtb){m4valor("Formulario","zTipo","1","set");}else{m4valor("Formulario","zTipo","2","set");}                                                                                                                                              |
| 127 | if (plazas &lt; m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}                                                                                                                                                                          |
| 129 | if (i == n) {empleados += document.forms["Formulario"].elements["list2"].options [i].value;}                                                                                                                                                       |
| 130 | else {empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}                                                                                                                                                        |
| 132 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4valor("Formulario","zfechaini","","get")== ""))                                                                                                                                |
| 136 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))                                                                                                                     |
| 140 | if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&amp;&amp; (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&amp;&amp; (m4compfechas(m4objeto('zfechaini','Formulario'),'&lt;=',m4objeto('zfechafin','Formulario')))) |
| 144 | alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");                                                                                                             |
| 158 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                |
| 161 | if ((zidtrtb==null)&#124;&#124;(zidtrtb.equals(""))){                                                                                                                                                                                              |
| 164 | if ((zinfosubprod==null)&#124;&#124;(zinfosubprod.equals(""))){zinfosubprod = "0";}                                                                                                                                                                |
| 169 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 338 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 348 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 365 | &lt;%if (zCHDedcu.equals("0")){%&gt;                                                                                                                                                                                                               |
| 367 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 372 | &lt;%if (!zDays.equals("1")){%&gt;                                                                                                                                                                                                                 |
| 395 | &lt;%if (zIdTypeC.equals("02")){%&gt;                                                                                                                                                                                                              |
| 464 | &lt;% if (zcounteventos_aux != 0 ) { %&gt;                                                                                                                                                                                                         |
| 486 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 488 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 499 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 507 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 533 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 537 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 547 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 554 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 568 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 47  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_START,"&lt;%=zDateFormat%&gt;");                                                                                                                        |
| 53  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_END,"&lt;%=zDateFormat%&gt;");                                                                                                                          |
| 194 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                         |
| 197 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                                                                                                       |
| 198 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 199 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                                                                                                                                 |
| 200 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                                                                                                                              |
| 201 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                                                                                                                 |
| 204 | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                                                                                                                                     |
| 205 | expresión de cálculo/transformación: String zraiz11 = zsubsesion + "!" + znodo11 + ".";                                                                                                                                                            |
| 206 | expresión de cálculo/transformación: String zmove11 = znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 208 | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12+ "[*]";                                                                                                                                                      |
| 209 | expresión de cálculo/transformación: String zraiz12 = zsubsesion + "!" + znodo12 + ".";                                                                                                                                                            |
| 211 | expresión de cálculo/transformación: String zoutputdef13 = zsubsesion + "!" + znodo13+ "[*]";                                                                                                                                                      |
| 212 | expresión de cálculo/transformación: String zcomun13 = znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + ".";                                                                                                                      |
| 213 | expresión de cálculo/transformación: String zmove13 = znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 215 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                       |
| 216 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 217 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                              |
| 218 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 220 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                       |
| 221 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                                            |
| 222 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 224 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                       |
| 225 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 226 | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                                                                                                                              |
| 227 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 231 | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                                                                                                                         |
| 233 | expresión de cálculo/transformación: String zSCO_DAYS = zraiz1 + "SCO_DAYS";                                                                                                                                                                       |
| 234 | expresión de cálculo/transformación: String zSCO_HOURS = zraiz1 + "SCO_HOURS";                                                                                                                                                                     |
| 235 | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz1 + "SCO_HOURS_OTW";                                                                                                                                                             |
| 236 | expresión de cálculo/transformación: String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";                                                                                                                                                                   |
| 237 | expresión de cálculo/transformación: String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";                                                                                                                                                                   |
| 238 | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";                                                                                                                                             |
| 239 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";                                                                                                                                                 |
| 240 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";                                                                                                                                                   |
| 241 | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";                                                                                                                                                 |
| 242 | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";                                                                                                                                                           |
| 243 | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";                                                                                                                                                             |
| 244 | expresión de cálculo/transformación: String zIDtipo = zraiz1 + "SCO_ID_DEV_PRO_TYPE";                                                                                                                                                              |
| 246 | expresión de cálculo/transformación: String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";                                                                                                                                                                   |
| 247 | expresión de cálculo/transformación: String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";                                                                                                                                                                 |
| 248 | expresión de cálculo/transformación: String zSCO_ESTIMATED_DAYS = zraiz1 + "SCO_ESTIMATED_DAYS";                                                                                                                                                   |
| 249 | expresión de cálculo/transformación: String zSCO_ESTIMATED_HOURS = zraiz1 + "SCO_ESTIMATED_HOURS";                                                                                                                                                 |
| 250 | expresión de cálculo/transformación: String zSCO_NUMBER_OF_UNITS = zraiz1 + "SCO_NUMBER_OF_UNITS";                                                                                                                                                 |
| 251 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";                                                                                                                             |
| 252 | expresión de cálculo/transformación: String zSFR_CK_DEDUCTIBLE = zraiz1 + "SFR_CK_DEDUCTIBLE";                                                                                                                                                     |
| 253 | expresión de cálculo/transformación: String zSCO_ID_DEV_PRODUCT = zraiz1 + "SCO_ID_DEV_PRODUCT";                                                                                                                                                   |
| 257 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_CATG = zraiz11 + "SCO_ID_TRAINING_CATG";                                                                                                                                              |
| 258 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_CATG = zraiz11 + "SCO_NM_TRAINING_CATG";                                                                                                                                              |
| 260 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_NAT = zraiz12 + "SCO_NM_TRAINING_NAT";                                                                                                                                                |
| 261 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_NAT = zraiz12 + "SCO_ID_TRAINING_NAT";                                                                                                                                                |
| 263 | expresión de cálculo/transformación: String zSSCO_ID_TRAINING_DEV = zcomun13 + "SCO_ID_TRAINING_DEV";                                                                                                                                              |
| 264 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_DEV = zcomun13 + "SCO_NM_TRAINING_DEV";                                                                                                                                               |
| 267 | expresión de cálculo/transformación: String zNFAMILYNAME = zraiz2 + "STD_N_FAMILY_NAME_1";                                                                                                                                                         |
| 268 | expresión de cálculo/transformación: String zFIRSTNAME = zraiz2 + "STD_N_FIRST_NAME";                                                                                                                                                              |
| 269 | expresión de cálculo/transformación: String zIDPERSON = zcomun2 + "STD_ID_PERSON";                                                                                                                                                                 |
| 270 | expresión de cálculo/transformación: String zSCO_GB_NAME = zcomun2 + "SCO_GB_NAME";                                                                                                                                                                |
| 272 | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";                                                                                                                                                           |
| 273 | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";                                                                                                                                                          |
| 275 | expresión de cálculo/transformación: String zNMEVENTO = zcomun6 + "SCO_NM_DEV_SUBACTION";                                                                                                                                                          |
| 276 | expresión de cálculo/transformación: String zIDTRTBEVENTO = zcomun6 + "SCO_ID_TRTBREQ";                                                                                                                                                            |
| 277 | expresión de cálculo/transformación: String zDATE = zcomun6 + "SCO_DATE";                                                                                                                                                                          |
| 278 | expresión de cálculo/transformación: String zDATE1 = zcomun6 + "SCO_DATE_1";                                                                                                                                                                       |
| 279 | expresión de cálculo/transformación: String zSCO_DAYS6= zcomun6 + "SCO_DAYS";                                                                                                                                                                      |
| 280 | expresión de cálculo/transformación: String zSCO_HOURS6= zcomun6 + "SCO_HOURS";                                                                                                                                                                    |
| 281 | expresión de cálculo/transformación: String zSCO_HOURS_OTW6= zcomun6 + "SCO_HOURS_OTW";                                                                                                                                                            |
| 283 | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun6 + "SCO_ID_TYPE";                                                                                                                                                                |
| 284 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun6 + "SCO_ID_DEV_SUBACTION";                                                                                                                                              |
| 285 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBPRODUCT = zraiz1 + "SCO_ID_DEV_SUBPRODUCT";                                                                                                                                             |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 24  | ../../mss_generico/espanol/menu_mss.jsp               |
| 30  | /mss_g3/mss_g3_trans.jsp                              |
| 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 171 | ../../sse_generico/espanol/generico_links.jsp         |
| 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 22  | /css/estilo_mss.css                                                                    |
| 23  | /libreria/funciones_sse.js                                                             |
| 25  | /libreria/menuintercambio.js                                                           |
| 26  | /libreria/clase_val_entradas.js                                                        |
| 331 | /iconos/noname_incripciones_formacion_99_100.gif                                       |
| 335 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 |
| 349 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              |
| 349 | /iconos/flecha_azul2_ess_11_9.gif                                                      |
| 431 | javascript:m4calendario(m4objeto(                                                      |
| 431 | /iconos/icono_calendario_14_18.gif                                                     |
| 434 | javascript:m4calendario(m4objeto(                                                      |
| 434 | /iconos/icono_calendario_14_18.gif                                                     |
| 528 | /iconos/icono_move_left_31_19.gif                                                      |
| 528 | /iconos/icono_move_right_31_19.gif                                                     |
| 530 | /iconos/icono_moveall_left_31_19.gif                                                   |
| 530 | /iconos/icono_moveall_right_31_19.gif                                                  |
| 546 | javascript:solicitar(                                                                  |
| 546 | /iconos/icono_enviar_mss_36_36.gif                                                     |
| 548 | javascript:volver_prof();                                                              |
| 548 | /iconos/icono_entrar_ess_36_36.gif                                                     |
| 555 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               |
| 563 | /iconos/cargando.gif                                                                   |
| 24  | ../../mss_generico/espanol/menu_mss.jsp                                                |
| 30  | /mss_g3/mss_g3_trans.jsp                                                               |
| 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= |
| 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     |
| 171 | ../../sse_generico/espanol/generico_links.jsp                                          |
| 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_mod1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_mod1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                      |
| --- | ------------------------------------------------------------- |
| 21  | Solicita necesidades de formación                             |
| 327 | Solicita necesidades de formación                             |
| 351 | Producto tipo                                                 |
| 353 | Producto                                                      |
| 359 | Lugar                                                         |
| 361 | Bonificable Fundación Tripartita                              |
| 363 | No                                                            |
| 365 | Si                                                            |
| 371 | Días                                                          |
| 377 | Nº horas                                                      |
| 379 | Nº horas extras                                               |
| 383 | Nº de asistentes (min/max)                                    |
| 384 | /                                                             |
| 387 | Nivel                                                         |
| 389 | Objetivos                                                     |
| 394 | Autor                                                         |
| 396 | Fecha actualización                                           |
| 400 | Nº unidades                                                   |
| 405 | Objetivo formativo                                            |
| 412 | ',' ',' ',' ')" title="[valor dinámico]"&gt; [valor dinámico] |
| 417 | Proveedor                                                     |
| 418 | "&gt;                                                         |
| 423 | Información adicional                                         |
| 426 | Inicio preferido                                              |
| 429 | Fin preferido                                                 |
| 433 | Idioma                                                        |
| 434 | Español "&gt;                                                 |
| 456 | Cursos programados                                            |
| 458 | Nombre                                                        |
| 459 | Inicio                                                        |
| 460 | Fin                                                           |
| 461 | Días                                                          |
| 462 | Núm. de horas                                                 |
| 463 | Núm. de horas extras                                          |
| 474 | " /&gt; " /&gt;                                               |
| 489 | No quiero ningún curso programado                             |
| 501 | Solicitud de plazas                                           |
| 503 | Número de plazas:                                             |
| 505 | "&gt;                                                         |
| 534 | ')" title="Enviar la nueva peticion"&gt;                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                        |
| --- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 328 | img      | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                                                |
| 332 | form     | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp; method=post; name=Formulario; id=Formulario                                                                                                       |
| 333 | input    | id=zempleados; name=zempleados; type=hidden; value=                                                                                                                                                              |
| 334 | input    | id=zTipo; name=zTipo; type=hidden; value=1                                                                                                                                                                       |
| 336 | input    | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                                               |
| 337 | input    | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                                                  |
| 338 | input    | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                                           |
| 346 | a        | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                                                   |
| 346 | img      | alt=Solicita necesidades de formación; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 412 | a        | href="javascript:calc_costs('&lt;m4:item; m4name=&lt;%=zSCO_NB_MAX%&gt;; htmlsafe=true                                                                                                                           |
| 412 | img      | alt=&lt;%=DescrBotonCostes%&gt;; title=&lt;%=DescrBotonCostes%&gt;; src=/iconos/icono_revision_colectiva_32_16.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 418 | a        | href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                          |
| 427 | input    | class=fuenteformulario; type=text; name=zfechaini; id=zfechaini; title=Escribe la fecha de inicio; maxlength=10; size=10                                                                                         |
| 427 | a        | href=javascript:m4calendario(m4objeto('zfechaini','Formulario'))                                                                                                                                                 |
| 427 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de inicio                                                                                                                   |
| 430 | input    | class=fuenteformulario; type=text; name=zfechafin; id=zfechafin; title=Escribe la fecha de fin; maxlength=10; size=10                                                                                            |
| 430 | a        | href=javascript:m4calendario(m4objeto('zfechafin','Formulario'))                                                                                                                                                 |
| 430 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de fin                                                                                                                      |
| 435 | select   | id=zidioma; class=Fuenteformulario; name=zidioma; alt=Idioma                                                                                                                                                     |
| 436 | option   | value=01                                                                                                                                                                                                         |
| 438 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                         |
| 443 | input    | type=hidden; id=zDev; class=Fuenteformulario; name=zDev                                                                                                                                                          |
| 450 | textarea | class=fuenteformulario; title=&lt;%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%&gt;; id=zDescription; name=zDescription; cols=40; rows=4; maxlength=1000                                                    |
| 476 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                   |
| 478 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;m4:item m4name=; htmlsafe=true; checked=presente; confirmar condición si dinámico                                                                                |
| 490 | input    | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%&gt;; checked=presente; confirmar condición si dinámico                                       |
| 497 | input    | id=zidtrtb; name=zidtrtb; type=hidden; value=&lt;%=zidtrtb%&gt;                                                                                                                                                  |
| 503 | input    | maxlength=10; class=fuenteformulario; type=text; name=znplazas; id=znplazas; title=Número de plazas; size=10                                                                                                     |
| 506 | select   | class=fuenteformulario; multiple=multiple; name=list1; id=list1; size=10; align=center; ondblclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)                                    |
| 510 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                         |
| 512 | option   |                                                                                                                                                                                                                  |
| 517 | img      | alt=Enviar; title=; src=/iconos/icono_move_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false); name=b2; id=b2; align=center                                      |
| 517 | img      | alt=Enviar; title=; src=/iconos/icono_move_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false); name=b1; id=b1; align=center                                     |
| 519 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true); name=b4; id=b4; align=center                                    |
| 519 | img      | alt=Enviar; title=; src=/iconos/icono_moveall_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true); name=b3; id=b3; align=center                                   |
| 523 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)                                    |
| 524 | option   | value=&lt;%=empleado%&gt;                                                                                                                                                                                        |
| 527 | select   | class=fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; align=center; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)                                    |
| 528 | option   |                                                                                                                                                                                                                  |
| 535 | a        | href="javascript:solicitar('&lt;%=zidtrtb%&gt;','&lt;m4:item; m4name=&lt;%=zSCO_ID_DEV_PRODUCT%&gt;; htmlsafe=true                                                                                               |
| 535 | img      | alt=Enviar; title=Enviar; src=/iconos/icono_enviar_mss_36_36.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                   |
| 537 | a        | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                                            |
| 537 | img      | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                               |
| 544 | form     | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                                             |
| 545 | input    | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                                                   |
| 547 | input    | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                                            |
| 552 | img      | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                         |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 9   | empleado        | getParameter(request,"empleado")        |
| 10  | periodo         | getParameter(request,"periodo")         |
| 11  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 12  | zVis            | getParameter(request,"zVis")            |
| 149 | estado          | getParameter(request,"estado")          |
| 150 | zid             | getParameter(request,"zid")             |
| 151 | zinicios        | getParameter(request,"zinicios")        |
| 152 | zidtrtb         | getParameter(request,"zidtrtb")         |
| 153 | zinfosubp       | getParameter(request,"zinfosubp")       |

| L   | Variable                       | Expresión fuente                                                            | Resolución estática parcial                                                                                    |
| --- | ------------------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 9   | empleado                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                           |
| 10  | periodo                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                            |
| 11  | nombre_empleado                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                    |
| 12  | zVis                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                               |
| 18  | label_11                       | "Volver a Datos Profesionales del Empleado"                                 | Volver a Datos Profesionales del Empleado                                                                      |
| 31  | zDateFormat                    | ""                                                                          |                                                                                                                |
| 149 | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                             |
| 150 | zid                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")                                                |
| 151 | zinicios                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                           |
| 152 | zidtrtb                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")                                            |
| 153 | zinfosubprod                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp")                                          |
| 171 | zsubsesion                     | "SSM_TRAINING_REQUEST"                                                      | SSM_TRAINING_REQUEST                                                                                           |
| 172 | zMeta4Object                   | "SSM_TRAINING_REQUEST"                                                      | SSM_TRAINING_REQUEST                                                                                           |
| 174 | znodo1                         | "M4T_DESC_CURSO"                                                            | M4T_DESC_CURSO                                                                                                 |
| 175 | znodo11                        | "M4T_CATG"                                                                  | M4T_CATG                                                                                                       |
| 176 | znodo12                        | "M4T_NATURE"                                                                | M4T_NATURE                                                                                                     |
| 177 | znodo13                        | "M4T_TRAINING_DEV"                                                          | M4T_TRAINING_DEV                                                                                               |
| 180 | znodo2                         | "SSM_EMPLEADOS"                                                             | SSM_EMPLEADOS                                                                                                  |
| 181 | znodo3                         | "M4T_LENGUAJES"                                                             | M4T_LENGUAJES                                                                                                  |
| 182 | znodo6                         | "M4T_EVENTOS"                                                               | M4T_EVENTOS                                                                                                    |
| 185 | ztipocarga                     | "DC"                                                                        | DC                                                                                                             |
| 186 | zventanas                      | "20"                                                                        | 20                                                                                                             |
| 188 | zregistroinicial               | 0                                                                           | 0                                                                                                              |
| 190 | zventana                       | 0                                                                           | 0                                                                                                              |
| 191 | zregistrofinal                 | zregistroinicial + zventana - 1                                             | 0{zventana - 1}                                                                                                |
| 194 | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                           | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                                 |
| 195 | zmove1                         | znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]"                        | M4T_DESC_CURSO{":"}M4T_DESC_CURSO{"["}0{"]"}                                                                   |
| 196 | zlectura1                      | zsubsesion + "!" + znodo1                                                   | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                                        |
| 197 | zraiz1                         | zsubsesion + "!" + znodo1 + "."                                             | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}                                                                   |
| 198 | ziterator1                     | znodo1 + ":" + zsubsesion + "!" + znodo1                                    | M4T_DESC_CURSO{":"}SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO                                                     |
| 201 | zoutputdef11                   | zsubsesion + "!" + znodo11 + "[*]"                                          | SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                       |
| 202 | zraiz11                        | zsubsesion + "!" + znodo11 + "."                                            | SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}                                                                         |
| 203 | zmove11                        | znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]"                      | M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                                               |
| 205 | zoutputdef12                   | zsubsesion + "!" + znodo12+ "[*]"                                           | SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                                     |
| 206 | zraiz12                        | zsubsesion + "!" + znodo12 + "."                                            | SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}                                                                       |
| 208 | zoutputdef13                   | zsubsesion + "!" + znodo13+ "[*]"                                           | SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                               |
| 209 | zcomun13                       | znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + "."       | M4T_TRAINING_DEV{":"}SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}                        |
| 210 | zmove13                        | znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]"                      | M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                                               |
| 212 | zoutputdef2                    | zsubsesion + "!" + znodo2 + "[*]"                                           | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                                  |
| 213 | zmove2                         | znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]"                        | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                                     |
| 214 | zraiz2                         | zsubsesion + "!" + znodo2 + "."                                             | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}                                                                    |
| 215 | zcomun2                        | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."         | SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                              |
| 217 | zoutputdef3                    | zsubsesion + "!" + znodo3 + "[*]"                                           | SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                                  |
| 218 | zmove3                         | znodo3 + ":" + znodo3 + "[FIRST]"                                           | M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                                     |
| 219 | zcomun3                        | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."         | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}                              |
| 221 | zoutputdef6                    | zsubsesion + "!" + znodo6 + "[*]"                                           | SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                                    |
| 222 | zmove6                         | znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]"                        | M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                                         |
| 223 | zraiz6                         | zsubsesion + "!" + znodo6 + "."                                             | SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"."}                                                                      |
| 224 | zcomun6                        | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."         | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}                                  |
| 228 | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                              | CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                           |
| 230 | zSCO_DAYS                      | zraiz1 + "SCO_DAYS"                                                         | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                                       |
| 231 | zSCO_HOURS                     | zraiz1 + "SCO_HOURS"                                                        | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}                                                      |
| 232 | zSCO_HOURS_OTW                 | zraiz1 + "SCO_HOURS_OTW"                                                    | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}                                                  |
| 233 | zSCO_NB_MAX                    | zraiz1 + "SCO_NB_MAX"                                                       | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}                                                     |
| 234 | zSCO_NB_MIN                    | zraiz1 + "SCO_NB_MIN"                                                       | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}                                                     |
| 235 | zSCO_NM_DEV_SUBPRODUCT         | zraiz1 + "SCO_NM_DEV_SUBPRODUCT"                                            | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                          |
| 236 | zSCO_NM_DEV_PRO_TYPE           | zraiz1 + "SCO_NM_DEV_PRO_TYPE"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}                                            |
| 237 | zSCO_NM_DEV_PRODUCT            | zraiz1 + "SCO_NM_DEV_PRODUCT"                                               | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}                                             |
| 238 | zSCO_NM_PRODUCT_TYPE           | zraiz1 + "SCO_NM_PRODUCT_TYPE"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}                                            |
| 239 | zSCO_EDUCAT_OBJ                | zraiz1 + "SCO_EDUCAT_OBJ"                                                   | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}                                                 |
| 240 | zSCO_HTTP_PATH                 | zraiz1 + "SCO_HTTP_PATH"                                                    | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}                                                  |
| 241 | zIDtipo                        | zraiz1 + "SCO_ID_DEV_PRO_TYPE"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                                            |
| 243 | zSCO_AUTHOR                    | zraiz1 + "SCO_AUTHOR"                                                       | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}                                                     |
| 244 | zSCO_CD_DATE                   | zraiz1 + "SCO_CD_DATE"                                                      | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}                                                    |
| 245 | zSCO_ESTIMATED_DAYS            | zraiz1 + "SCO_ESTIMATED_DAYS"                                               | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_DAYS"}                                             |
| 246 | zSCO_ESTIMATED_HOURS           | zraiz1 + "SCO_ESTIMATED_HOURS"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ESTIMATED_HOURS"}                                            |
| 247 | zSCO_NUMBER_OF_UNITS           | zraiz1 + "SCO_NUMBER_OF_UNITS"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}                                            |
| 248 | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"                                    | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}                                  |
| 249 | zSFR_CK_DEDUCTIBLE             | zraiz1 + "SFR_CK_DEDUCTIBLE"                                                | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                              |
| 250 | zSCO_ID_DEV_PRODUCT            | zraiz1 + "SCO_ID_DEV_PRODUCT"                                               | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRODUCT"}                                             |
| 254 | zSCO_ID_TRAINING_CATG          | zraiz11 + "SCO_ID_TRAINING_CATG"                                            | SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_ID_TRAINING_CATG"}                                                 |
| 255 | zSCO_NM_TRAINING_CATG          | zraiz11 + "SCO_NM_TRAINING_CATG"                                            | SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}                                                 |
| 257 | zSCO_NM_TRAINING_NAT           | zraiz12 + "SCO_NM_TRAINING_NAT"                                             | SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"}                                                |
| 258 | zSCO_ID_TRAINING_NAT           | zraiz12 + "SCO_ID_TRAINING_NAT"                                             | SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_ID_TRAINING_NAT"}                                                |
| 260 | zSSCO_ID_TRAINING_DEV          | zcomun13 + "SCO_ID_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRAINING_DEV"} |
| 261 | zSCO_NM_TRAINING_DEV           | zcomun13 + "SCO_NM_TRAINING_DEV"                                            | M4T_TRAINING_DEV{":"}SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_DEV"} |
| 264 | zNFAMILYNAME                   | zraiz2 + "STD_N_FAMILY_NAME_1"                                              | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FAMILY_NAME_1"}                                             |
| 265 | zFIRSTNAME                     | zraiz2 + "STD_N_FIRST_NAME"                                                 | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FIRST_NAME"}                                                |
| 266 | zIDPERSON                      | zcomun2 + "STD_ID_PERSON"                                                   | SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}             |
| 267 | zSCO_GB_NAME                   | zcomun2 + "SCO_GB_NAME"                                                     | SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}               |
| 269 | zSTDNMLENGUAGE                 | zcomun3 + "STD_N_LANGUAGE"                                                  | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}            |
| 270 | zSTDIDLENGUAGE                 | zcomun3 + "STD_ID_LANGUAGE"                                                 | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}           |
| 272 | zNMEVENTO                      | zcomun6 + "SCO_NM_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}          |
| 273 | zIDTRTBEVENTO                  | zcomun6 + "SCO_ID_TRTBREQ"                                                  | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                |
| 274 | zDATE                          | zcomun6 + "SCO_DATE"                                                        | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}                      |
| 275 | zDATE1                         | zcomun6 + "SCO_DATE_1"                                                      | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}                    |
| 276 | zSCO_DAYS6                     | zcomun6 + "SCO_DAYS"                                                        | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                      |
| 277 | zSCO_HOURS6                    | zcomun6 + "SCO_HOURS"                                                       | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}                     |
| 278 | zSCO_HOURS_OTW6                | zcomun6 + "SCO_HOURS_OTW"                                                   | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}                 |
| 280 | zSCO_ID_TYPE                   | zcomun6 + "SCO_ID_TYPE"                                                     | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                   |
| 281 | zSCO_ID_DEV_SUBACTION          | zcomun6 + "SCO_ID_DEV_SUBACTION"                                            | M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}          |
| 282 | zSCO_ID_DEV_SUBPRODUCT         | zraiz1 + "SCO_ID_DEV_SUBPRODUCT"                                            | SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                          |
| 308 | zcount3                        | 0                                                                           | 0                                                                                                              |
| 309 | zcount3i                       | 0                                                                           | 0                                                                                                              |
| 310 | zcount2i                       | 0                                                                           | 0                                                                                                              |
| 311 | zcount13                       | 0                                                                           | 0                                                                                                              |
| 312 | zcounteventos_aux              | 0                                                                           | 0                                                                                                              |
| 321 | zcount2v                       | String.valueOf(zcount2i)                                                    | String.valueOf(zcount2i)                                                                                       |
| 322 | zcount3v                       | String.valueOf(zcount3i)                                                    | String.valueOf(zcount3i)                                                                                       |
| 323 | zcount6v                       | String.valueOf(zcounteventos_aux)                                           | String.valueOf(zcounteventos_aux)                                                                              |
| 324 | zcount13v                      | String.valueOf(zcount13)                                                    | String.valueOf(zcount13)                                                                                       |
| 409 | DescrBotonCostes               | ""                                                                          |                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                          |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 285 | m4:startpage | m4task=SSM_TRAINING_REQUEST                                                                                                 |
| 285 | m4:beginjob  |                                                                                                                             |
| 286 | m4:datadef   | m4o=SSM_TRAINING_REQUEST; m4name=SSM_TRAINING_REQUEST                                                                       |
| 293 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                               |
| 293 | m4:param     | name=TIPO_CARGA; value=DC                                                                                                   |
| 294 | m4:outputdef |                                                                                                                             |
| 294 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"[*]"}                                                          |
| 295 | m4:outputdef |                                                                                                                             |
| 295 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_CATG{"[*]"}                                                                |
| 296 | m4:outputdef |                                                                                                                             |
| 296 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"[*]"}                                                              |
| 297 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                       |
| 297 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                           |
| 298 | m4:outputdef | m4alias=M4T_LENGUAJES                                                                                                       |
| 298 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                           |
| 299 | m4:outputdef | m4alias=M4T_EVENTOS                                                                                                         |
| 299 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[*]"}                                                             |
| 300 | m4:outputdef | m4alias=M4T_TRAINING_DEV                                                                                                    |
| 300 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_TRAINING_DEV{"[*]"}                                                        |
| 301 | m4:endjob    |                                                                                                                             |
| 302 | m4:move      |                                                                                                                             |
| 302 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_CATG{":"}M4T_CATG{"["}0{"]"}                                                           |
| 303 | m4:move      |                                                                                                                             |
| 303 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_TRAINING_DEV{":"}M4T_TRAINING_DEV{"["}0{"]"}                                           |
| 304 | m4:move      |                                                                                                                             |
| 304 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                 |
| 305 | m4:move      |                                                                                                                             |
| 305 | m4:param     | name=SSM_TRAINING_REQUEST; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                 |
| 306 | m4:move      |                                                                                                                             |
| 306 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_EVENTOS{":"}M4T_EVENTOS{"["}0{"]"}                                                     |
| 343 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                 |
| 343 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                   |
| 352 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                                   |
| 354 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                    |
| 356 | m4:item      | m4varname=zIdTypeC; m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_PRO_TYPE"}                              |
| 357 | m4:item      | m4varname=zCHDedcu; m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SFR_CK_DEDUCTIBLE"}                                |
| 360 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                         |
| 368 | m4:item      | m4varname=zDays; m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}                                            |
| 372 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_DAYS"}; htmlsafe=true                                              |
| 378 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS"}; htmlsafe=true                                             |
| 380 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HOURS_OTW"}; htmlsafe=true                                         |
| 384 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MIN"}; htmlsafe=true                                            |
| 384 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NB_MAX"}; htmlsafe=true                                            |
| 388 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_CATG{"."}{"SCO_NM_TRAINING_CATG"}; htmlsafe=true                                        |
| 390 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_NATURE{"."}{"SCO_NM_TRAINING_NAT"}; htmlsafe=true                                       |
| 395 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_AUTHOR"}; htmlsafe=true                                            |
| 397 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_CD_DATE"}; htmlsafe=true                                           |
| 401 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_NUMBER_OF_UNITS"}; htmlsafe=true                                   |
| 406 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_EDUCAT_OBJ"}; htmlsafe=true                                        |
| 412 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true          |
| 412 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_ID_DEV_SUBPRODUCT"}; htmlsafe=true                                 |
| 412 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}; htmlsafe=true |
| 418 | m4:item      | m4name=SSM_TRAINING_REQUEST{"!"}M4T_DESC_CURSO{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                         |
| 437 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                       |
| 438 | m4:item      | m4name=M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true   |
| 466 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount6v).intValue()-1).toString()                                                       |
| 468 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true |
| 469 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; htmlsafe=true           |
| 470 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true             |
| 471 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true             |
| 472 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; htmlsafe=true            |
| 473 | m4:item      | m4name=M4T_EVENTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_EVENTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; htmlsafe=true        |
| 508 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                       |
| 510 | m4:item      | m4name=SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true      |
| 561 | m4:endpage   |                                                                                                                             |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 290 | setItem          | zsubsesion,znodo1,"","SSE_ID",zid |
| 315 | getCount         | znodo3,zsubsesion,znodo3          |
| 316 | getCountInClient | znodo3,zsubsesion,znodo3          |
| 317 | getCountInClient | znodo2,zsubsesion,znodo2          |
| 318 | getCount         | znodo13,zsubsesion,znodo13        |
| 319 | getCountInClient | znodo6,zsubsesion,znodo6          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos                                 |
| --- | ----------- | ------------------------------------------ |
| 36  | calc_costs  | zNUM_PLACES,zTYPE,zID_DEV_SUB,zID_DEV_SUBA |
| 70  | volver_prof |                                            |
| 75  | solicitar   | i2,zid2                                    |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                                                                                                    |
| 42  | if ((zDT_END==null)&#124;&#124;(zDT_END=="")){zDT_END = "01-01-4000";}                                                                                                                                                                             |
| 43  | if ((zTYPE==null)&#124;&#124;(zTYPE=="")){zTYPE= "11";}                                                                                                                                                                                            |
| 45  | if (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),false)=="" )                                                                                                                                                                            |
| 51  | if (zDT_END != "01-01-4000" &amp;&amp; (m4fechacomprobacion(m4objeto('zfechafin','Formulario'),false)=="" ) )                                                                                                                                      |
| 57  | if (error == 1)                                                                                                                                                                                                                                    |
| 59  | alert(sMessage);                                                                                                                                                                                                                                   |
| 62  | else                                                                                                                                                                                                                                               |
| 88  | if ((zDescription == null &#124;&#124; zDescription == "" ) &amp;&amp; zid2 == "99") {                                                                                                                                                             |
| 91  | alert(sMessage);                                                                                                                                                                                                                                   |
| 94  | else                                                                                                                                                                                                                                               |
| 96  | if ( zDescription.length &gt; 1000)                                                                                                                                                                                                                |
| 100 | alert(sMessage);                                                                                                                                                                                                                                   |
| 111 | if (plazas == 0 &amp;&amp; m== 0){alert ("Debe de introducir número de plazas o elegir algún empleado");return;}                                                                                                                                   |
| 112 | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                                                                                                                                                  |
| 114 | if (v1.resultado == false &amp;&amp; m == 0){                                                                                                                                                                                                      |
| 115 | alert ("No se ha realizado la solicitud.Compruebe que el número de plazas es correcto.");                                                                                                                                                          |
| 117 | if (a == false){return;}                                                                                                                                                                                                                           |
| 120 | if (oobjeto[i].checked == true){                                                                                                                                                                                                                   |
| 125 | if (id==trtb){m4valor("Formulario","zTipo","1","set");}else{m4valor("Formulario","zTipo","2","set");}                                                                                                                                              |
| 127 | if (plazas &lt; m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}                                                                                                                                                                          |
| 129 | if (i == n) {empleados += document.forms["Formulario"].elements["list2"].options [i].value;}                                                                                                                                                       |
| 130 | else {empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}                                                                                                                                                        |
| 132 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4valor("Formulario","zfechaini","","get")== ""))                                                                                                                                |
| 136 | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))                                                                                                                     |
| 140 | if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&amp;&amp; (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&amp;&amp; (m4compfechas(m4objeto('zfechaini','Formulario'),'&lt;=',m4objeto('zfechafin','Formulario')))) |
| 144 | alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");                                                                                                             |
| 155 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                |
| 158 | if ((zidtrtb==null)&#124;&#124;(zidtrtb.equals(""))){                                                                                                                                                                                              |
| 161 | if ((zinfosubprod==null)&#124;&#124;(zinfosubprod.equals(""))){zinfosubprod = "0";}                                                                                                                                                                |
| 166 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 335 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 345 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 362 | &lt;%if (zCHDedcu.equals("0")){%&gt;                                                                                                                                                                                                               |
| 364 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 369 | &lt;%if (!zDays.equals("1")){%&gt;                                                                                                                                                                                                                 |
| 392 | &lt;%if (zIdTypeC.equals("02")){%&gt;                                                                                                                                                                                                              |
| 453 | &lt;% if (zcounteventos_aux != 0 ) { %&gt;                                                                                                                                                                                                         |
| 475 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 477 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 488 | &lt;%if(zinfosubprod.equals("0")){%&gt;                                                                                                                                                                                                            |
| 496 | &lt;% }else{%&gt;                                                                                                                                                                                                                                  |
| 522 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 526 | &lt;%}else{%&gt;                                                                                                                                                                                                                                   |
| 536 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 543 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                  |
| 557 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                                                                                                                                  |
| 47  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_START,"&lt;%=zDateFormat%&gt;");                                                                                                                        |
| 53  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_date",zDT_END,"&lt;%=zDateFormat%&gt;");                                                                                                                          |
| 90  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_tr_0");                                                                                                                                                 |
| 99  | expresión de cálculo/transformación: sMessage = sMessage + "\n" + m4getmessage("_comentario",zDescriptionName);                                                                                                                                    |
| 191 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                         |
| 194 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                                                                                                       |
| 195 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 196 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                                                                                                                                 |
| 197 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                                                                                                                              |
| 198 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                                                                                                                 |
| 201 | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                                                                                                                                     |
| 202 | expresión de cálculo/transformación: String zraiz11 = zsubsesion + "!" + znodo11 + ".";                                                                                                                                                            |
| 203 | expresión de cálculo/transformación: String zmove11 = znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 205 | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12+ "[*]";                                                                                                                                                      |
| 206 | expresión de cálculo/transformación: String zraiz12 = zsubsesion + "!" + znodo12 + ".";                                                                                                                                                            |
| 208 | expresión de cálculo/transformación: String zoutputdef13 = zsubsesion + "!" + znodo13+ "[*]";                                                                                                                                                      |
| 209 | expresión de cálculo/transformación: String zcomun13 = znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&amp;VAR.m4lix]" + ".";                                                                                                                      |
| 210 | expresión de cálculo/transformación: String zmove13 = znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]";                                                                                                                                      |
| 212 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                       |
| 213 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 214 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                              |
| 215 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 217 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                       |
| 218 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                                            |
| 219 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 221 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                       |
| 222 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 223 | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                                                                                                                              |
| 224 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 228 | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                                                                                                                         |
| 230 | expresión de cálculo/transformación: String zSCO_DAYS = zraiz1 + "SCO_DAYS";                                                                                                                                                                       |
| 231 | expresión de cálculo/transformación: String zSCO_HOURS = zraiz1 + "SCO_HOURS";                                                                                                                                                                     |
| 232 | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz1 + "SCO_HOURS_OTW";                                                                                                                                                             |
| 233 | expresión de cálculo/transformación: String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";                                                                                                                                                                   |
| 234 | expresión de cálculo/transformación: String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";                                                                                                                                                                   |
| 235 | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";                                                                                                                                             |
| 236 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";                                                                                                                                                 |
| 237 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";                                                                                                                                                   |
| 238 | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";                                                                                                                                                 |
| 239 | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";                                                                                                                                                           |
| 240 | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";                                                                                                                                                             |
| 241 | expresión de cálculo/transformación: String zIDtipo = zraiz1 + "SCO_ID_DEV_PRO_TYPE";                                                                                                                                                              |
| 243 | expresión de cálculo/transformación: String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";                                                                                                                                                                   |
| 244 | expresión de cálculo/transformación: String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";                                                                                                                                                                 |
| 245 | expresión de cálculo/transformación: String zSCO_ESTIMATED_DAYS = zraiz1 + "SCO_ESTIMATED_DAYS";                                                                                                                                                   |
| 246 | expresión de cálculo/transformación: String zSCO_ESTIMATED_HOURS = zraiz1 + "SCO_ESTIMATED_HOURS";                                                                                                                                                 |
| 247 | expresión de cálculo/transformación: String zSCO_NUMBER_OF_UNITS = zraiz1 + "SCO_NUMBER_OF_UNITS";                                                                                                                                                 |
| 248 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";                                                                                                                             |
| 249 | expresión de cálculo/transformación: String zSFR_CK_DEDUCTIBLE = zraiz1 + "SFR_CK_DEDUCTIBLE";                                                                                                                                                     |
| 250 | expresión de cálculo/transformación: String zSCO_ID_DEV_PRODUCT = zraiz1 + "SCO_ID_DEV_PRODUCT";                                                                                                                                                   |
| 254 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_CATG = zraiz11 + "SCO_ID_TRAINING_CATG";                                                                                                                                              |
| 255 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_CATG = zraiz11 + "SCO_NM_TRAINING_CATG";                                                                                                                                              |
| 257 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_NAT = zraiz12 + "SCO_NM_TRAINING_NAT";                                                                                                                                                |
| 258 | expresión de cálculo/transformación: String zSCO_ID_TRAINING_NAT = zraiz12 + "SCO_ID_TRAINING_NAT";                                                                                                                                                |
| 260 | expresión de cálculo/transformación: String zSSCO_ID_TRAINING_DEV = zcomun13 + "SCO_ID_TRAINING_DEV";                                                                                                                                              |
| 261 | expresión de cálculo/transformación: String zSCO_NM_TRAINING_DEV = zcomun13 + "SCO_NM_TRAINING_DEV";                                                                                                                                               |
| 264 | expresión de cálculo/transformación: String zNFAMILYNAME = zraiz2 + "STD_N_FAMILY_NAME_1";                                                                                                                                                         |
| 265 | expresión de cálculo/transformación: String zFIRSTNAME = zraiz2 + "STD_N_FIRST_NAME";                                                                                                                                                              |
| 266 | expresión de cálculo/transformación: String zIDPERSON = zcomun2 + "STD_ID_PERSON";                                                                                                                                                                 |
| 267 | expresión de cálculo/transformación: String zSCO_GB_NAME = zcomun2 + "SCO_GB_NAME";                                                                                                                                                                |
| 269 | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";                                                                                                                                                           |
| 270 | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";                                                                                                                                                          |
| 272 | expresión de cálculo/transformación: String zNMEVENTO = zcomun6 + "SCO_NM_DEV_SUBACTION";                                                                                                                                                          |
| 273 | expresión de cálculo/transformación: String zIDTRTBEVENTO = zcomun6 + "SCO_ID_TRTBREQ";                                                                                                                                                            |
| 274 | expresión de cálculo/transformación: String zDATE = zcomun6 + "SCO_DATE";                                                                                                                                                                          |
| 275 | expresión de cálculo/transformación: String zDATE1 = zcomun6 + "SCO_DATE_1";                                                                                                                                                                       |
| 276 | expresión de cálculo/transformación: String zSCO_DAYS6= zcomun6 + "SCO_DAYS";                                                                                                                                                                      |
| 277 | expresión de cálculo/transformación: String zSCO_HOURS6= zcomun6 + "SCO_HOURS";                                                                                                                                                                    |
| 278 | expresión de cálculo/transformación: String zSCO_HOURS_OTW6= zcomun6 + "SCO_HOURS_OTW";                                                                                                                                                            |
| 280 | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun6 + "SCO_ID_TYPE";                                                                                                                                                                |
| 281 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBACTION = zcomun6 + "SCO_ID_DEV_SUBACTION";                                                                                                                                              |
| 282 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBPRODUCT = zraiz1 + "SCO_ID_DEV_SUBPRODUCT";                                                                                                                                             |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 24  | ../../mss_generico/espanol/menu_mss.jsp               |
| 30  | /mss_g3/mss_g3_trans.jsp                              |
| 167 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 168 | ../../sse_generico/espanol/generico_links.jsp         |
| 558 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 22  | /css/estilo_mss.css                                                                    |
| 23  | /libreria/funciones_sse.js                                                             |
| 25  | /libreria/menuintercambio.js                                                           |
| 26  | /libreria/clase_val_entradas.js                                                        |
| 328 | /iconos/noname_incripciones_formacion_99_100.gif                                       |
| 332 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 |
| 346 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              |
| 346 | /iconos/flecha_azul2_ess_11_9.gif                                                      |
| 412 | javascript:calc_costs(                                                                 |
| 412 | /iconos/icono_revision_colectiva_32_16.gif                                             |
| 418 | &lt;m4:item m4name=                                                                    |
| 427 | javascript:m4calendario(m4objeto(                                                      |
| 427 | /iconos/icono_calendario_14_18.gif                                                     |
| 430 | javascript:m4calendario(m4objeto(                                                      |
| 430 | /iconos/icono_calendario_14_18.gif                                                     |
| 517 | /iconos/icono_move_left_31_19.gif                                                      |
| 517 | /iconos/icono_move_right_31_19.gif                                                     |
| 519 | /iconos/icono_moveall_left_31_19.gif                                                   |
| 519 | /iconos/icono_moveall_right_31_19.gif                                                  |
| 535 | javascript:solicitar(                                                                  |
| 535 | /iconos/icono_enviar_mss_36_36.gif                                                     |
| 537 | javascript:volver_prof();                                                              |
| 537 | /iconos/icono_entrar_ess_36_36.gif                                                     |
| 544 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               |
| 552 | /iconos/cargando.gif                                                                   |
| 24  | ../../mss_generico/espanol/menu_mss.jsp                                                |
| 30  | /mss_g3/mss_g3_trans.jsp                                                               |
| 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= |
| 167 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     |
| 168 | ../../sse_generico/espanol/generico_links.jsp                                          |
| 558 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                             | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | -------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| COLL   | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 23  | /libreria/funciones_sse.js                                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 25  | /libreria/menuintercambio.js                                                           | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md); [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md)             |
| COLL   | 26  | /libreria/clase_val_entradas.js                                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 335 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 349 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              | ausente    | P06                                                                                                                                                                                                |
| COLL   | 431 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 434 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 546 | javascript:solicitar(                                                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 548 | javascript:volver_prof();                                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 555 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               | ausente    | P06                                                                                                                                                                                                |
| COLL   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| COLL   | 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= | ausente    | P06                                                                                                                                                                                                |
| COLL   | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| CYC    | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 23  | /libreria/funciones_sse.js                                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 25  | /libreria/menuintercambio.js                                                           | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md)                                                                                                         |
| CYC    | 26  | /libreria/clase_val_entradas.js                                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 335 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 349 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              | ausente    | P06                                                                                                                                                                                                |
| CYC    | 431 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 434 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 546 | javascript:solicitar(                                                                  | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 548 | javascript:volver_prof();                                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 555 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               | ausente    | P06                                                                                                                                                                                                |
| CYC    | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| CYC    | 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= | ausente    | P06                                                                                                                                                                                                |
| CYC    | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| IBER   | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 23  | /libreria/funciones_sse.js                                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 25  | /libreria/menuintercambio.js                                                           | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md); [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md)             |
| IBER   | 26  | /libreria/clase_val_entradas.js                                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 335 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 349 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              | ausente    | P06                                                                                                                                                                                                |
| IBER   | 431 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 434 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 546 | javascript:solicitar(                                                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 548 | javascript:volver_prof();                                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 555 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               | ausente    | P06                                                                                                                                                                                                |
| IBER   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| IBER   | 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= | ausente    | P06                                                                                                                                                                                                |
| IBER   | 170 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 171 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 569 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| BASE   | 167 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 168 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 558 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 23  | /libreria/funciones_sse.js                                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 25  | /libreria/menuintercambio.js                                                           | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md)                                                                                                         |
| BASE   | 26  | /libreria/clase_val_entradas.js                                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 332 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 346 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                              | ausente    | P06                                                                                                                                                                                                |
| BASE   | 412 | javascript:calc_costs(                                                                 | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 427 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 430 | javascript:m4calendario(m4objeto(                                                      | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 535 | javascript:solicitar(                                                                  | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 537 | javascript:volver_prof();                                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 544 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                               | ausente    | P06                                                                                                                                                                                                |
| BASE   | 24  | ../../mss_generico/espanol/menu_mss.jsp                                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 30  | /mss_g3/mss_g3_trans.jsp                                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| BASE   | 64  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&amp;zDT_START= | ausente    | P06                                                                                                                                                                                                |
| BASE   | 167 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 168 | ../../sse_generico/espanol/generico_links.jsp                                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 558 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_mod1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
