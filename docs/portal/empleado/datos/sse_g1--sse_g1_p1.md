# Quién es Quién - Datos Empleado

Identificador: `sse_g1/sse_g1_p1.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                            | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------ | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"} | m4:datadef:SSE_ADDRESS; m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_BLOQUE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_BLOQUE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_NUM_VIA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_ADDRESS_LINE_1"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOME_PAGE"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"} | m4:datadef:SSE_ADDRESS; m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_BLOQUE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_BLOQUE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_NUM_VIA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_ADDRESS_LINE_1"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOME_PAGE"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"} | m4:datadef:SSE_ADDRESS; m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_BLOQUE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_BLOQUE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_DISTRIT_POSTAL"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_ESCALERA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_NUM_VIA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_N_SIGLA_DOMIC"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PISO"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PUERTA"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_ADDRESS_LINE_1"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_COUNTRY"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_DIV"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; m4:item:M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:item:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOME_PAGE"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; m4:label:M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; m4:label:M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                    | Ámbito | Diccionario                                                                                  |
| ----------------------- | ------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Link.WebSite            | Ir al sitio Web          | COLL   | [translations/ess_mss_gen_es.properties:L172](../../referencias/literales/ess_mss_gen_es.md) |
| Link.WebSite            | Ir al sitio Web          | CYC    | [translations/ess_mss_gen_es.properties:L172](../../referencias/literales/ess_mss_gen_es.md) |
| Link.WebSite            | Ir al sitio Web          | IBER   | [translations/ess_mss_gen_es.properties:L172](../../referencias/literales/ess_mss_gen_es.md) |
| Link.WebSite            | Ir al sitio Web          | BASE   | [translations/ess_mss_gen_es.properties:L171](../../referencias/literales/ess_mss_gen_es.md) |
| Title.sse_g1_p1_mod5Des | Estado civil             | COLL   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5Des | Estado civil             | IBER   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5Des | Estado civil             | BASE   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod6Des | Página web               | COLL   | [translations/sse_g1_es.properties:L83](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod6Des | Página web               | IBER   | [translations/sse_g1_es.properties:L83](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod6Des | Página web               | BASE   | [translations/sse_g1_es.properties:L83](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod7Des | Otras formas de contacto | COLL   | [translations/sse_g1_es.properties:L93](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod7Des | Otras formas de contacto | IBER   | [translations/sse_g1_es.properties:L93](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod7Des | Otras formas de contacto | BASE   | [translations/sse_g1_es.properties:L93](../../referencias/literales/sse_g1_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1.jsp) | `073a1d32f074e472618273edcc670f85865f088b941fa631f5fbc24322f8a4ad` |    502 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1.jsp)   | `06024f37ff9b9e24ada37a739f86b7472615ae19d8f221e5140cefdc65c099be` |    511 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1.jsp) | `073a1d32f074e472618273edcc670f85865f088b941fa631f5fbc24322f8a4ad` |    502 |
| BASE / español    | [sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1.jsp)                             | `d388a0778c48b039ffda8a48f65f988eed78c58d7c3659f8bd719d005a90b9b2` |    566 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 9   | Quién es Quién - Datos Empleado                                                                     |
| 317 | [valor dinámico] [valor dinámico] [valor dinámico]                                                  |
| 328 | Fecha de Antigüedad:                                                                                |
| 334 | Centro de Trabajo:                                                                                  |
| 335 | Dirección del Centro de Trabajo:                                                                    |
| 336 | eMail:                                                                                              |
| 337 | Teléfono / Móvil de Empresa:                                                                        |
| 342 | Localización                                                                                        |
| 367 | Área / Sucursal                                                                                     |
| 368 | Nombre de la Unidad                                                                                 |
| 369 | Responsable directo                                                                                 |
| 370 | eMail Responsable                                                                                   |
| 371 | Tfno. / Móvil de Empresa responsable                                                                |
| 376 | Datos Personales                                                                                    |
| 422 | Grupo / Nivel                                                                                       |
| 423 | DNI                                                                                                 |
| 424 | Num. Afiliación a SS:                                                                               |
| 425 | Domicilio:                                                                                          |
| 426 | Teléfono Personal                                                                                   |
| 427 | eMail Personal                                                                                      |
| 428 | Cuenta Bancaria Principal                                                                           |
| 429 | Cuenta Bancaria Beneficiaria                                                                        |
| 430 | Estado Civil                                                                                        |
| 431 | Fecha de Nacimiento                                                                                 |
| 442 | Familiares                                                                                          |
| 449 | Tipo Relación                                                                                       |
| 450 | Fecha de Nacimiento                                                                                 |
| 488 | Tus datos todavía no están cargados en el sistema, por favor ponte en contacto con Recursos Humanos |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 282 | img     | src=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO; height=141; width=94; alt=foto_bbdd                                             |
| 319 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 321 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 336 | a       | href=mailto:&lt;%=eMail%&gt;                                                                                                                                                                             |
| 370 | a       | href=mailto:&lt;%=emailResponsable%&gt;                                                                                                                                                                  |
| 427 | a       | href=mailto:&lt;%=emailPersonal%&gt;                                                                                                                                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 20  | zIdPerson       | getBagEntries("zIdPerson") |

| L   | Variable               | Expresión fuente                                                       | Resolución estática parcial                                              |
| --- | ---------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 20  | empleado               | zsesionDA.getBagEntries("zIdPerson")                                   | zsesionDA.getBagEntries("zIdPerson")                                     |
| 70  | zsubsesion             | "CSP_QUIEN_ES_QUIEN"                                                   | CSP_QUIEN_ES_QUIEN                                                       |
| 71  | zmeta4object           | "CSP_QUIEN_ES_QUIEN"                                                   | CSP_QUIEN_ES_QUIEN                                                       |
| 72  | znodoORO               | "CSP_FICHA_DETALLADA"                                                  | CSP_FICHA_DETALLADA                                                      |
| 73  | znodoCde               | "CSP_DATOS_PAGO_EMPLEADO"                                              | CSP_DATOS_PAGO_EMPLEADO                                                  |
| 74  | znodoCbe               | "CSP_CUENTA_BANCARIA_EMPLEADO"                                         | CSP_CUENTA_BANCARIA_EMPLEADO                                             |
| 75  | znodoCbb               | "CSP_CUENTA_BENEFICIARIO"                                              | CSP_CUENTA_BENEFICIARIO                                                  |
| 76  | znodoDir               | "CSP_DIRECCION_EMPLEADO"                                               | CSP_DIRECCION_EMPLEADO                                                   |
| 77  | znodoMail              | "CSP_MAIL_PERSONAL"                                                    | CSP_MAIL_PERSONAL                                                        |
| 78  | znodoMailResp          | "CSP_MAIL_RESPONSABLE"                                                 | CSP_MAIL_RESPONSABLE                                                     |
| 79  | znodoTelef             | "CSP_TELEFONO_PERSONAL"                                                | CSP_TELEFONO_PERSONAL                                                    |
| 80  | znodoFamIRPF           | "CSP_FAM_IRPF"                                                         | CSP_FAM_IRPF                                                             |
| 81  | znodoTelefEmp          | "CSP_TELEFONO_EMPRESA"                                                 | CSP_TELEFONO_EMPRESA                                                     |
| 82  | znodoTelefResp         | "CSP_TELEFONO_RESPONSABLE"                                             | CSP_TELEFONO_RESPONSABLE                                                 |
| 83  | znodoGrupNivel         | "CSP_GRUPO_NIVEL"                                                      | CSP_GRUPO_NIVEL                                                          |
| 84  | znodoResponsable       | "CSP_RESPONSABLE"                                                      | CSP_RESPONSABLE                                                          |
| 85  | znodoPuestos           | "CSP_PUESTOS"                                                          | CSP_PUESTOS                                                              |
| 88  | zoutputdefQEQ          | zsubsesion + "!" + zsubsesion + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                         |
| 89  | zmoveQEQ               | zsubsesion + ":" + zsubsesion + "[FIRST]"                              | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 92  | zoutputdefORO          | zsubsesion + "!" + znodoORO + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                        |
| 93  | zmoveORO               | znodoORO + ":" + znodoORO + "[FIRST]"                                  | CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 96  | zoutputdefCde          | zsubsesion + "!" + znodoCde + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                    |
| 97  | zmoveCde               | znodoCde + ":" + znodoCde + "[FIRST]"                                  | CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 100 | zoutputdefCbe          | zsubsesion + "!" + znodoCbe + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}               |
| 101 | zmoveCbe               | znodoCbe + ":" + znodoCbe + "[FIRST]"                                  | CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 104 | zoutputdefDir          | zsubsesion + "!" + znodoDir + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                     |
| 105 | zmoveDir               | znodoDir + ":" + znodoDir + "[FIRST]"                                  | CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 108 | zoutputdefCbb          | zsubsesion + "!" + znodoCbb + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                    |
| 109 | zmoveCbb               | znodoCbb + ":" + znodoCbb + "[LAST]"                                   | CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[LAST]"}            |
| 112 | zoutputdefMail         | zsubsesion + "!" + znodoMail + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                          |
| 113 | zmoveMail              | znodoMail + ":" + znodoMail + "[LAST]"                                 | CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[LAST]"}                        |
| 116 | zoutputdefMailResp     | zsubsesion + "!" + znodoMailResp + "[*]"                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                       |
| 117 | zmoveMailResp          | znodoMailResp + ":" + znodoMailResp + "[FIRST]"                        | CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 120 | zoutputdefTelef        | zsubsesion + "!" + znodoTelef + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                      |
| 121 | zmoveTelef             | znodoTelef + ":" + znodoTelef + "[FIRST]"                              | CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 124 | zoutputdefFamIRPF      | zsubsesion + "!" + znodoFamIRPF + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                               |
| 125 | zmoveFamIRPF           | znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]"                          | CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 128 | zoutputdefTelefEmp     | zsubsesion + "!" + znodoTelefEmp + "[*]"                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                       |
| 129 | zmoveTelefEmp          | znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]"                        | CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 132 | zoutputdefTelefResp    | zsubsesion + "!" + znodoTelefResp + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                   |
| 133 | zmoveTelefResp         | znodoTelefResp + ":" + znodoTelefResp + "[FIRST]"                      | CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 136 | zoutputdefGrupNivel    | zsubsesion + "!" + znodoGrupNivel + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                            |
| 137 | zmoveGrupNivel         | znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]"                      | CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 140 | zoutputdefResponsable  | zsubsesion + "!" + znodoResponsable + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                            |
| 141 | zmoveResponsable       | znodoResponsable + ":" + znodoResponsable + "[FIRST]"                  | CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 144 | zoutputdefPuestos      | zsubsesion + "!" + znodoPuestos + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                |
| 145 | zmovePuestos           | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                          | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |
| 147 | zmetodocarga           | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"          | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}     |
| 152 | puesto                 | ""                                                                     |                                                                          |
| 153 | idPuesto               | ""                                                                     |                                                                          |
| 154 | antiguedad             | ""                                                                     |                                                                          |
| 155 | centroTrabajo          | ""                                                                     |                                                                          |
| 156 | direccionCentrotrabajo | ""                                                                     |                                                                          |
| 157 | eMail                  | ""                                                                     |                                                                          |
| 158 | telefonoEmpresa        | ""                                                                     |                                                                          |
| 159 | unidadDireccion        | ""                                                                     |                                                                          |
| 160 | unidadArea             | ""                                                                     |                                                                          |
| 161 | nombreUnidad           | ""                                                                     |                                                                          |
| 162 | responsable            | ""                                                                     |                                                                          |
| 163 | emailResponsable       | ""                                                                     |                                                                          |
| 164 | telefonoResponsable    | ""                                                                     |                                                                          |
| 165 | matricula              | ""                                                                     |                                                                          |
| 166 | grupoNivel             | ""                                                                     |                                                                          |
| 167 | dni                    | ""                                                                     |                                                                          |
| 168 | numeroSS               | ""                                                                     |                                                                          |
| 169 | domicilio              | ""                                                                     |                                                                          |
| 170 | telefonoPersonal       | ""                                                                     |                                                                          |
| 171 | emailPersonal          | ""                                                                     |                                                                          |
| 172 | cuentaPrincipal        | ""                                                                     |                                                                          |
| 173 | cuentaBeneficiario     | ""                                                                     |                                                                          |
| 174 | fechaNacimiento        | ""                                                                     |                                                                          |
| 175 | nombreIRPF             | ""                                                                     |                                                                          |
| 176 | fechaNacimientoIRPF    | ""                                                                     |                                                                          |
| 177 | tipoRelacionIRPF       | ""                                                                     |                                                                          |
| 178 | mostrarNDPT            | "0"                                                                    | 0                                                                        |
| 238 | numfichas              | 0                                                                      | 0                                                                        |
| 239 | numcuentas             | 0                                                                      | 0                                                                        |
| 240 | numBenef               | 0                                                                      | 0                                                                        |
| 241 | numDirecciones         | 0                                                                      | 0                                                                        |
| 242 | numMail                | 0                                                                      | 0                                                                        |
| 243 | numMailResp            | 0                                                                      | 0                                                                        |
| 244 | numTelefonoPer         | 0                                                                      | 0                                                                        |
| 245 | numTelefEmp            | 0                                                                      | 0                                                                        |
| 246 | numTelefResp           | 0                                                                      | 0                                                                        |
| 247 | numGrupNiv             | 0                                                                      | 0                                                                        |
| 248 | numFam                 | 0                                                                      | 0                                                                        |
| 249 | numResponsable         | 0                                                                      | 0                                                                        |
| 302 | mostrarDocumento       | q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC") | q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC")   |
| 306 | auxNDPT                | 0                                                                      | 0                                                                        |
| 394 | e                      | 0                                                                      | 0                                                                        |
| 415 | estadoCivil            | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")      | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")        |
| 416 | estadoCivil            | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL")           |
| 454 | id                     | ""                                                                     |                                                                          |
| 455 | i                      | 0                                                                      | 0                                                                        |
| 492 | sociedad               | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------- |
| 183 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                               |
| 185 | m4:beginjob  |                                                                                                         |
| 186 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                       |
| 195 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}                           |
| 197 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                              |
| 197 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                    |
| 198 | m4:outputdef | m4alias=CSP_FICHA_DETALLADA                                                                             |
| 198 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                                   |
| 199 | m4:outputdef | m4alias=CSP_DATOS_PAGO_EMPLEADO                                                                         |
| 199 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                               |
| 200 | m4:outputdef | m4alias=CSP_CUENTA_BANCARIA_EMPLEADO                                                                    |
| 200 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}                          |
| 201 | m4:outputdef | m4alias=CSP_CUENTA_BENEFICIARIO                                                                         |
| 201 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                               |
| 202 | m4:outputdef | m4alias=CSP_DIRECCION_EMPLEADO                                                                          |
| 202 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                                |
| 203 | m4:outputdef | m4alias=CSP_MAIL_PERSONAL                                                                               |
| 203 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                                     |
| 204 | m4:outputdef | m4alias=CSP_MAIL_RESPONSABLE                                                                            |
| 204 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                                  |
| 205 | m4:outputdef | m4alias=CSP_TELEFONO_RESPONSABLE                                                                        |
| 205 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                              |
| 206 | m4:outputdef | m4alias=CSP_TELEFONO_EMPRESA                                                                            |
| 206 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                                  |
| 207 | m4:outputdef | m4alias=CSP_GRUPO_NIVEL                                                                                 |
| 207 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                                       |
| 208 | m4:outputdef | m4alias=CSP_FAM_IRPF                                                                                    |
| 208 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                                          |
| 209 | m4:outputdef | m4alias=CSP_TELEFONO_PERSONAL                                                                           |
| 209 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                                 |
| 210 | m4:outputdef | m4alias=CSP_RESPONSABLE                                                                                 |
| 210 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                                       |
| 211 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                     |
| 211 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                           |
| 212 | m4:endjob    |                                                                                                         |
| 214 | m4:move      |                                                                                                         |
| 214 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 215 | m4:move      |                                                                                                         |
| 215 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 216 | m4:move      |                                                                                                         |
| 216 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 217 | m4:move      |                                                                                                         |
| 217 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 218 | m4:move      |                                                                                                         |
| 218 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[LAST]"}            |
| 219 | m4:move      |                                                                                                         |
| 219 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 220 | m4:move      |                                                                                                         |
| 220 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[LAST]"}                        |
| 221 | m4:move      |                                                                                                         |
| 221 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 222 | m4:move      |                                                                                                         |
| 222 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 223 | m4:move      |                                                                                                         |
| 223 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 224 | m4:move      |                                                                                                         |
| 224 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 225 | m4:move      |                                                                                                         |
| 225 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 226 | m4:move      |                                                                                                         |
| 226 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 227 | m4:move      |                                                                                                         |
| 227 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 228 | m4:move      |                                                                                                         |
| 228 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 192 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado                     |
| 251 | getCountInClient | znodoORO,zsubsesion,znodoORO                                       |
| 252 | getCountInClient | znodoCbe,zsubsesion,znodoCbe                                       |
| 253 | getCountInClient | znodoCbb,zsubsesion,znodoCbb                                       |
| 254 | getCountInClient | znodoDir,zsubsesion,znodoDir                                       |
| 255 | getCountInClient | znodoMail,zsubsesion,znodoMail                                     |
| 256 | getCountInClient | znodoMailResp,zsubsesion,znodoMailResp                             |
| 257 | getCountInClient | znodoTelef,zsubsesion,znodoTelef                                   |
| 258 | getCountInClient | znodoTelefEmp,zsubsesion,znodoTelefEmp                             |
| 259 | getCountInClient | znodoTelefResp,zsubsesion,znodoTelefResp                           |
| 260 | getCountInClient | znodoGrupNivel,zsubsesion,znodoGrupNivel                           |
| 261 | getCountInClient | znodoFamIRPF,zsubsesion,znodoFamIRPF                               |
| 262 | getCountInClient | znodoResponsable,zsubsesion,znodoResponsable                       |
| 274 | getItem          | znodoORO,zmeta4object,znodoORO,"","NOMBRECOMPLETO"                 |
| 287 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                       |
| 288 | getItem          | znodoORO,zmeta4object,znodoORO,"","FEC_ANTIGUEDAD"                 |
| 289 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_CENTRO_TRABAJO"               |
| 290 | getItem          | znodoORO,zmeta4object,znodoORO,"","DIR_CENTRO_TRABAJO"             |
| 291 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 294 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")                     |
| 297 | getItem          | znodoTelefEmp,zmeta4object,znodoTelefEmp,"","STD_PHONE"            |
| 298 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_EMPLEADO"              |
| 302 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC"        |
| 308 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"          |
| 350 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_DIRECCION"                    |
| 351 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_AREA"                         |
| 352 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_UNIDAD_RAIZ"                  |
| 354 | getItem          | znodoResponsable,zmeta4object,znodoResponsable,"","NOMBRECOMPLETO" |
| 357 | getItem          | znodoMailResp,zmeta4object,znodoMailResp,"","STD_EMAIL"            |
| 360 | getItem          | znodoTelefResp,zmeta4object,znodoTelefResp,"","STD_PHONE"          |
| 361 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"           |
| 384 | getItem          | znodoGrupNivel,zmeta4object,znodoGrupNivel,"","SSP_NM_CATEGORIA"   |
| 386 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_SSN"                        |
| 387 | getItem          | znodoORO,zmeta4object,znodoORO,"","NUM_AFILIACION_SS"              |
| 389 | getItem          | znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS"                 |
| 392 | getItem          | znodoTelef,zmeta4object,znodoTelef,"","STD_PHONE"                  |
| 395 | getItem          | znodoTelef,zmeta4object,znodoTelef,Integer.toString(e),"STD_PHONE" |
| 403 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 404 | getItem          | znodoMail,zmeta4object,znodoMail,"","STD_EMAIL"                    |
| 407 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_BANK"                    |
| 408 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_IBAN"                    |
| 411 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_BANK"                    |
| 412 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_IBAN"                    |
| 414 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_DT_BIRTH"                   |
| 415 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT"             |
| 416 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL"                |
| 463 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","NOMBRECOMPLETO"         |
| 464 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_DT_BIRTH"           |
| 465 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_N_ACT_DEP_TYPE"     |
| 492 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION"                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 25  | formatoFecha | fecha      |
| 43  | guion        | cadena     |
| 47  | OpenReport   | URL        |
| 495 | dpt          |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((dia=='01') &amp;&amp; (mes=='01')&amp;&amp;(anio=='1800')){                                                                                                                                                                          |
| 37  | }else{                                                                                                                                                                                                                                    |
| 191 | if(empleado != null){                                                                                                                                                                                                                     |
| 267 | if (numfichas&gt;0) {                                                                                                                                                                                                                     |
| 296 | if (numTelefEmp&gt;0){                                                                                                                                                                                                                    |
| 318 | &lt;%if (auxNDPT&gt;0){ %&gt;                                                                                                                                                                                                             |
| 320 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                                                        |
| 322 | &lt;%} else{%&gt;                                                                                                                                                                                                                         |
| 353 | if (numResponsable&gt;0){                                                                                                                                                                                                                 |
| 356 | if (numMailResp&gt;0){                                                                                                                                                                                                                    |
| 359 | if(numTelefResp&gt;0){                                                                                                                                                                                                                    |
| 383 | if(numGrupNiv&gt;0) {                                                                                                                                                                                                                     |
| 388 | if(numDirecciones&gt;0){                                                                                                                                                                                                                  |
| 391 | if(numTelefonoPer&gt;0){                                                                                                                                                                                                                  |
| 396 | if(e&lt;numTelefonoPer-1){                                                                                                                                                                                                                |
| 406 | if(numcuentas&gt;0) {                                                                                                                                                                                                                     |
| 410 | if(numBenef&gt;0){                                                                                                                                                                                                                        |
| 440 | &lt;% if (numFam &gt; 0) {%&gt;                                                                                                                                                                                                           |
| 485 | }else{                                                                                                                                                                                                                                    |
| 31  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 33  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 52  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                                                                                                                               |
| 53  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();                                                                                                                            |
| 54  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                                                                                                                                           |
| 88  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                                                        |
| 89  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                                         |
| 92  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                                          |
| 93  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                                             |
| 96  | expresión de cálculo/transformación: String zoutputdefCde = zsubsesion + "!" + znodoCde + "[*]";                                                                                                                                          |
| 97  | expresión de cálculo/transformación: String zmoveCde = znodoCde + ":" + znodoCde + "[FIRST]";                                                                                                                                             |
| 100 | expresión de cálculo/transformación: String zoutputdefCbe = zsubsesion + "!" + znodoCbe + "[*]";                                                                                                                                          |
| 101 | expresión de cálculo/transformación: String zmoveCbe = znodoCbe + ":" + znodoCbe + "[FIRST]";                                                                                                                                             |
| 104 | expresión de cálculo/transformación: String zoutputdefDir = zsubsesion + "!" + znodoDir + "[*]";                                                                                                                                          |
| 105 | expresión de cálculo/transformación: String zmoveDir = znodoDir + ":" + znodoDir + "[FIRST]";                                                                                                                                             |
| 108 | expresión de cálculo/transformación: String zoutputdefCbb = zsubsesion + "!" + znodoCbb + "[*]";                                                                                                                                          |
| 109 | expresión de cálculo/transformación: String zmoveCbb = znodoCbb + ":" + znodoCbb + "[LAST]";                                                                                                                                              |
| 112 | expresión de cálculo/transformación: String zoutputdefMail = zsubsesion + "!" + znodoMail + "[*]";                                                                                                                                        |
| 113 | expresión de cálculo/transformación: String zmoveMail = znodoMail + ":" + znodoMail + "[LAST]";                                                                                                                                           |
| 116 | expresión de cálculo/transformación: String zoutputdefMailResp = zsubsesion + "!" + znodoMailResp + "[*]";                                                                                                                                |
| 117 | expresión de cálculo/transformación: String zmoveMailResp = znodoMailResp + ":" + znodoMailResp + "[FIRST]";                                                                                                                              |
| 120 | expresión de cálculo/transformación: String zoutputdefTelef = zsubsesion + "!" + znodoTelef + "[*]";                                                                                                                                      |
| 121 | expresión de cálculo/transformación: String zmoveTelef = znodoTelef + ":" + znodoTelef + "[FIRST]";                                                                                                                                       |
| 124 | expresión de cálculo/transformación: String zoutputdefFamIRPF = zsubsesion + "!" + znodoFamIRPF + "[*]";                                                                                                                                  |
| 125 | expresión de cálculo/transformación: String zmoveFamIRPF = znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]";                                                                                                                                 |
| 128 | expresión de cálculo/transformación: String zoutputdefTelefEmp = zsubsesion + "!" + znodoTelefEmp + "[*]";                                                                                                                                |
| 129 | expresión de cálculo/transformación: String zmoveTelefEmp = znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]";                                                                                                                              |
| 132 | expresión de cálculo/transformación: String zoutputdefTelefResp = zsubsesion + "!" + znodoTelefResp + "[*]";                                                                                                                              |
| 133 | expresión de cálculo/transformación: String zmoveTelefResp = znodoTelefResp + ":" + znodoTelefResp + "[FIRST]";                                                                                                                           |
| 136 | expresión de cálculo/transformación: String zoutputdefGrupNivel = zsubsesion + "!" + znodoGrupNivel + "[*]";                                                                                                                              |
| 137 | expresión de cálculo/transformación: String zmoveGrupNivel = znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]";                                                                                                                           |
| 140 | expresión de cálculo/transformación: String zoutputdefResponsable = zsubsesion + "!" + znodoResponsable + "[*]";                                                                                                                          |
| 141 | expresión de cálculo/transformación: String zmoveResponsable = znodoResponsable + ":" + znodoResponsable + "[FIRST]";                                                                                                                     |
| 144 | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                                                  |
| 145 | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                                                 |
| 147 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE";                                                                                                                 |
| 371 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonoResponsable%&gt; &lt;/td&gt;&lt;/tr&gt;                          |
| 422 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Grupo / Nivel &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;script&gt; document.write(guion('&lt;%=grupoNivel%&gt;')); &lt;/script&gt; &lt;/td&gt;&lt;/tr&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| 11  | /css/estilo_sse.css                                                                                                 |
| 12  | /css/style_persdata.css                                                                                             |
| 14  | /library/jquery.js                                                                                                  |
| 15  | /libreria/funciones_sse.js                                                                                          |
| 282 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO |
| 319 | javascript:dpt();                                                                                                   |
| 321 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA     |
| 336 | mailto:&lt;%=eMail%&gt;                                                                                             |
| 370 | mailto:&lt;%=emailResponsable%&gt;                                                                                  |
| 427 | mailto:&lt;%=emailPersonal%&gt;                                                                                     |
| 496 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt;   |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 9   | Quién es Quién - Datos Empleado                                                                     |
| 319 | [valor dinámico] [valor dinámico] [valor dinámico]                                                  |
| 330 | Fecha de Antigüedad:                                                                                |
| 336 | Centro de Trabajo:                                                                                  |
| 337 | Dirección del Centro de Trabajo:                                                                    |
| 338 | eMail:                                                                                              |
| 339 | Teléfono / Móvil de Empresa:                                                                        |
| 344 | Localización                                                                                        |
| 369 | Área / Sucursal                                                                                     |
| 370 | Nombre de la Unidad                                                                                 |
| 371 | Responsable directo                                                                                 |
| 372 | eMail Responsable                                                                                   |
| 373 | Tfno. / Móvil de Empresa responsable                                                                |
| 378 | Datos Personales                                                                                    |
| 428 | Grupo / Nivel                                                                                       |
| 429 | DNI                                                                                                 |
| 430 | Num. Afiliación a SS:                                                                               |
| 431 | Domicilio:                                                                                          |
| 433 | Domicilio teletrabajo:                                                                              |
| 435 | Teléfono Personal                                                                                   |
| 436 | eMail Personal                                                                                      |
| 437 | Cuenta Bancaria Principal                                                                           |
| 438 | Cuenta Bancaria Beneficiaria                                                                        |
| 439 | Estado Civil                                                                                        |
| 440 | Fecha de Nacimiento                                                                                 |
| 451 | Familiares                                                                                          |
| 458 | Tipo Relación                                                                                       |
| 459 | Fecha de Nacimiento                                                                                 |
| 497 | Tus datos todavía no están cargados en el sistema, por favor ponte en contacto con Recursos Humanos |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 284 | img     | src=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO; height=141; width=94; alt=foto_bbdd                                             |
| 321 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 323 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 338 | a       | href=mailto:&lt;%=eMail%&gt;                                                                                                                                                                             |
| 372 | a       | href=mailto:&lt;%=emailResponsable%&gt;                                                                                                                                                                  |
| 436 | a       | href=mailto:&lt;%=emailPersonal%&gt;                                                                                                                                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 20  | zIdPerson       | getBagEntries("zIdPerson") |

| L   | Variable               | Expresión fuente                                                       | Resolución estática parcial                                              |
| --- | ---------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 20  | empleado               | zsesionDA.getBagEntries("zIdPerson")                                   | zsesionDA.getBagEntries("zIdPerson")                                     |
| 70  | zsubsesion             | "CSP_QUIEN_ES_QUIEN"                                                   | CSP_QUIEN_ES_QUIEN                                                       |
| 71  | zmeta4object           | "CSP_QUIEN_ES_QUIEN"                                                   | CSP_QUIEN_ES_QUIEN                                                       |
| 72  | znodoORO               | "CSP_FICHA_DETALLADA"                                                  | CSP_FICHA_DETALLADA                                                      |
| 73  | znodoCde               | "CSP_DATOS_PAGO_EMPLEADO"                                              | CSP_DATOS_PAGO_EMPLEADO                                                  |
| 74  | znodoCbe               | "CSP_CUENTA_BANCARIA_EMPLEADO"                                         | CSP_CUENTA_BANCARIA_EMPLEADO                                             |
| 75  | znodoCbb               | "CSP_CUENTA_BENEFICIARIO"                                              | CSP_CUENTA_BENEFICIARIO                                                  |
| 76  | znodoDir               | "CSP_DIRECCION_EMPLEADO"                                               | CSP_DIRECCION_EMPLEADO                                                   |
| 77  | znodoMail              | "CSP_MAIL_PERSONAL"                                                    | CSP_MAIL_PERSONAL                                                        |
| 78  | znodoMailResp          | "CSP_MAIL_RESPONSABLE"                                                 | CSP_MAIL_RESPONSABLE                                                     |
| 79  | znodoTelef             | "CSP_TELEFONO_PERSONAL"                                                | CSP_TELEFONO_PERSONAL                                                    |
| 80  | znodoFamIRPF           | "CSP_FAM_IRPF"                                                         | CSP_FAM_IRPF                                                             |
| 81  | znodoTelefEmp          | "CSP_TELEFONO_EMPRESA"                                                 | CSP_TELEFONO_EMPRESA                                                     |
| 82  | znodoTelefResp         | "CSP_TELEFONO_RESPONSABLE"                                             | CSP_TELEFONO_RESPONSABLE                                                 |
| 83  | znodoGrupNivel         | "CSP_GRUPO_NIVEL"                                                      | CSP_GRUPO_NIVEL                                                          |
| 84  | znodoResponsable       | "CSP_RESPONSABLE"                                                      | CSP_RESPONSABLE                                                          |
| 85  | znodoPuestos           | "CSP_PUESTOS"                                                          | CSP_PUESTOS                                                              |
| 88  | zoutputdefQEQ          | zsubsesion + "!" + zsubsesion + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                         |
| 89  | zmoveQEQ               | zsubsesion + ":" + zsubsesion + "[FIRST]"                              | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 92  | zoutputdefORO          | zsubsesion + "!" + znodoORO + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                        |
| 93  | zmoveORO               | znodoORO + ":" + znodoORO + "[FIRST]"                                  | CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 96  | zoutputdefCde          | zsubsesion + "!" + znodoCde + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                    |
| 97  | zmoveCde               | znodoCde + ":" + znodoCde + "[FIRST]"                                  | CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 100 | zoutputdefCbe          | zsubsesion + "!" + znodoCbe + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}               |
| 101 | zmoveCbe               | znodoCbe + ":" + znodoCbe + "[FIRST]"                                  | CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 104 | zoutputdefDir          | zsubsesion + "!" + znodoDir + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                     |
| 105 | zmoveDir               | znodoDir + ":" + znodoDir + "[FIRST]"                                  | CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 106 | zmoveDirT              | znodoDir + ":" + znodoDir + "[LAST]"                                   | CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[LAST]"}              |
| 109 | zoutputdefCbb          | zsubsesion + "!" + znodoCbb + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                    |
| 110 | zmoveCbb               | znodoCbb + ":" + znodoCbb + "[LAST]"                                   | CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[LAST]"}            |
| 113 | zoutputdefMail         | zsubsesion + "!" + znodoMail + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                          |
| 114 | zmoveMail              | znodoMail + ":" + znodoMail + "[LAST]"                                 | CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[LAST]"}                        |
| 117 | zoutputdefMailResp     | zsubsesion + "!" + znodoMailResp + "[*]"                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                       |
| 118 | zmoveMailResp          | znodoMailResp + ":" + znodoMailResp + "[FIRST]"                        | CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 121 | zoutputdefTelef        | zsubsesion + "!" + znodoTelef + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                      |
| 122 | zmoveTelef             | znodoTelef + ":" + znodoTelef + "[FIRST]"                              | CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 125 | zoutputdefFamIRPF      | zsubsesion + "!" + znodoFamIRPF + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                               |
| 126 | zmoveFamIRPF           | znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]"                          | CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 129 | zoutputdefTelefEmp     | zsubsesion + "!" + znodoTelefEmp + "[*]"                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                       |
| 130 | zmoveTelefEmp          | znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]"                        | CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 133 | zoutputdefTelefResp    | zsubsesion + "!" + znodoTelefResp + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                   |
| 134 | zmoveTelefResp         | znodoTelefResp + ":" + znodoTelefResp + "[FIRST]"                      | CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 137 | zoutputdefGrupNivel    | zsubsesion + "!" + znodoGrupNivel + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                            |
| 138 | zmoveGrupNivel         | znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]"                      | CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 141 | zoutputdefResponsable  | zsubsesion + "!" + znodoResponsable + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                            |
| 142 | zmoveResponsable       | znodoResponsable + ":" + znodoResponsable + "[FIRST]"                  | CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 145 | zoutputdefPuestos      | zsubsesion + "!" + znodoPuestos + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                |
| 146 | zmovePuestos           | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                          | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |
| 148 | zmetodocarga           | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"          | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}     |
| 153 | puesto                 | ""                                                                     |                                                                          |
| 154 | idPuesto               | ""                                                                     |                                                                          |
| 155 | antiguedad             | ""                                                                     |                                                                          |
| 156 | centroTrabajo          | ""                                                                     |                                                                          |
| 157 | direccionCentrotrabajo | ""                                                                     |                                                                          |
| 158 | eMail                  | ""                                                                     |                                                                          |
| 159 | telefonoEmpresa        | ""                                                                     |                                                                          |
| 160 | unidadDireccion        | ""                                                                     |                                                                          |
| 161 | unidadArea             | ""                                                                     |                                                                          |
| 162 | nombreUnidad           | ""                                                                     |                                                                          |
| 163 | responsable            | ""                                                                     |                                                                          |
| 164 | emailResponsable       | ""                                                                     |                                                                          |
| 165 | telefonoResponsable    | ""                                                                     |                                                                          |
| 166 | matricula              | ""                                                                     |                                                                          |
| 167 | grupoNivel             | ""                                                                     |                                                                          |
| 168 | dni                    | ""                                                                     |                                                                          |
| 169 | numeroSS               | ""                                                                     |                                                                          |
| 170 | domicilio              | ""                                                                     |                                                                          |
| 171 | domicilioTeletrabajo   | ""                                                                     |                                                                          |
| 172 | telefonoPersonal       | ""                                                                     |                                                                          |
| 173 | emailPersonal          | ""                                                                     |                                                                          |
| 174 | cuentaPrincipal        | ""                                                                     |                                                                          |
| 175 | cuentaBeneficiario     | ""                                                                     |                                                                          |
| 176 | fechaNacimiento        | ""                                                                     |                                                                          |
| 177 | nombreIRPF             | ""                                                                     |                                                                          |
| 178 | fechaNacimientoIRPF    | ""                                                                     |                                                                          |
| 179 | tipoRelacionIRPF       | ""                                                                     |                                                                          |
| 180 | mostrarNDPT            | "0"                                                                    | 0                                                                        |
| 240 | numfichas              | 0                                                                      | 0                                                                        |
| 241 | numcuentas             | 0                                                                      | 0                                                                        |
| 242 | numBenef               | 0                                                                      | 0                                                                        |
| 243 | numDirecciones         | 0                                                                      | 0                                                                        |
| 244 | numMail                | 0                                                                      | 0                                                                        |
| 245 | numMailResp            | 0                                                                      | 0                                                                        |
| 246 | numTelefonoPer         | 0                                                                      | 0                                                                        |
| 247 | numTelefEmp            | 0                                                                      | 0                                                                        |
| 248 | numTelefResp           | 0                                                                      | 0                                                                        |
| 249 | numGrupNiv             | 0                                                                      | 0                                                                        |
| 250 | numFam                 | 0                                                                      | 0                                                                        |
| 251 | numResponsable         | 0                                                                      | 0                                                                        |
| 304 | mostrarDocumento       | q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC") | q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC")   |
| 308 | auxNDPT                | 0                                                                      | 0                                                                        |
| 400 | e                      | 0                                                                      | 0                                                                        |
| 421 | estadoCivil            | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")      | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")        |
| 422 | estadoCivil            | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL")           |
| 463 | id                     | ""                                                                     |                                                                          |
| 464 | i                      | 0                                                                      | 0                                                                        |
| 501 | sociedad               | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------- |
| 185 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                               |
| 187 | m4:beginjob  |                                                                                                         |
| 188 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                       |
| 197 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}                           |
| 199 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                              |
| 199 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                    |
| 200 | m4:outputdef | m4alias=CSP_FICHA_DETALLADA                                                                             |
| 200 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                                   |
| 201 | m4:outputdef | m4alias=CSP_DATOS_PAGO_EMPLEADO                                                                         |
| 201 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                               |
| 202 | m4:outputdef | m4alias=CSP_CUENTA_BANCARIA_EMPLEADO                                                                    |
| 202 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}                          |
| 203 | m4:outputdef | m4alias=CSP_CUENTA_BENEFICIARIO                                                                         |
| 203 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                               |
| 204 | m4:outputdef | m4alias=CSP_DIRECCION_EMPLEADO                                                                          |
| 204 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                                |
| 205 | m4:outputdef | m4alias=CSP_MAIL_PERSONAL                                                                               |
| 205 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                                     |
| 206 | m4:outputdef | m4alias=CSP_MAIL_RESPONSABLE                                                                            |
| 206 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                                  |
| 207 | m4:outputdef | m4alias=CSP_TELEFONO_RESPONSABLE                                                                        |
| 207 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                              |
| 208 | m4:outputdef | m4alias=CSP_TELEFONO_EMPRESA                                                                            |
| 208 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                                  |
| 209 | m4:outputdef | m4alias=CSP_GRUPO_NIVEL                                                                                 |
| 209 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                                       |
| 210 | m4:outputdef | m4alias=CSP_FAM_IRPF                                                                                    |
| 210 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                                          |
| 211 | m4:outputdef | m4alias=CSP_TELEFONO_PERSONAL                                                                           |
| 211 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                                 |
| 212 | m4:outputdef | m4alias=CSP_RESPONSABLE                                                                                 |
| 212 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                                       |
| 213 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                     |
| 213 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                           |
| 214 | m4:endjob    |                                                                                                         |
| 216 | m4:move      |                                                                                                         |
| 216 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 217 | m4:move      |                                                                                                         |
| 217 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 218 | m4:move      |                                                                                                         |
| 218 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 219 | m4:move      |                                                                                                         |
| 219 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 220 | m4:move      |                                                                                                         |
| 220 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[LAST]"}            |
| 221 | m4:move      |                                                                                                         |
| 221 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 222 | m4:move      |                                                                                                         |
| 222 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[LAST]"}                        |
| 223 | m4:move      |                                                                                                         |
| 223 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 224 | m4:move      |                                                                                                         |
| 224 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 225 | m4:move      |                                                                                                         |
| 225 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 226 | m4:move      |                                                                                                         |
| 226 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 227 | m4:move      |                                                                                                         |
| 227 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 228 | m4:move      |                                                                                                         |
| 228 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 229 | m4:move      |                                                                                                         |
| 229 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 230 | m4:move      |                                                                                                         |
| 230 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |
| 393 | m4:move      |                                                                                                         |
| 393 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[LAST]"}              |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 194 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado                     |
| 253 | getCountInClient | znodoORO,zsubsesion,znodoORO                                       |
| 254 | getCountInClient | znodoCbe,zsubsesion,znodoCbe                                       |
| 255 | getCountInClient | znodoCbb,zsubsesion,znodoCbb                                       |
| 256 | getCountInClient | znodoDir,zsubsesion,znodoDir                                       |
| 257 | getCountInClient | znodoMail,zsubsesion,znodoMail                                     |
| 258 | getCountInClient | znodoMailResp,zsubsesion,znodoMailResp                             |
| 259 | getCountInClient | znodoTelef,zsubsesion,znodoTelef                                   |
| 260 | getCountInClient | znodoTelefEmp,zsubsesion,znodoTelefEmp                             |
| 261 | getCountInClient | znodoTelefResp,zsubsesion,znodoTelefResp                           |
| 262 | getCountInClient | znodoGrupNivel,zsubsesion,znodoGrupNivel                           |
| 263 | getCountInClient | znodoFamIRPF,zsubsesion,znodoFamIRPF                               |
| 264 | getCountInClient | znodoResponsable,zsubsesion,znodoResponsable                       |
| 276 | getItem          | znodoORO,zmeta4object,znodoORO,"","NOMBRECOMPLETO"                 |
| 289 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                       |
| 290 | getItem          | znodoORO,zmeta4object,znodoORO,"","FEC_ANTIGUEDAD"                 |
| 291 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_CENTRO_TRABAJO"               |
| 292 | getItem          | znodoORO,zmeta4object,znodoORO,"","DIR_CENTRO_TRABAJO"             |
| 293 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 296 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")                     |
| 299 | getItem          | znodoTelefEmp,zmeta4object,znodoTelefEmp,"","STD_PHONE"            |
| 300 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_EMPLEADO"              |
| 304 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC"        |
| 310 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"          |
| 352 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_DIRECCION"                    |
| 353 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_AREA"                         |
| 354 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_UNIDAD_RAIZ"                  |
| 356 | getItem          | znodoResponsable,zmeta4object,znodoResponsable,"","NOMBRECOMPLETO" |
| 359 | getItem          | znodoMailResp,zmeta4object,znodoMailResp,"","STD_EMAIL"            |
| 362 | getItem          | znodoTelefResp,zmeta4object,znodoTelefResp,"","STD_PHONE"          |
| 363 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"           |
| 386 | getItem          | znodoGrupNivel,zmeta4object,znodoGrupNivel,"","SSP_NM_CATEGORIA"   |
| 388 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_SSN"                        |
| 389 | getItem          | znodoORO,zmeta4object,znodoORO,"","NUM_AFILIACION_SS"              |
| 391 | getItem          | znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS"                 |
| 394 | getItem          | znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS"                 |
| 398 | getItem          | znodoTelef,zmeta4object,znodoTelef,"","STD_PHONE"                  |
| 401 | getItem          | znodoTelef,zmeta4object,znodoTelef,Integer.toString(e),"STD_PHONE" |
| 409 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 410 | getItem          | znodoMail,zmeta4object,znodoMail,"","STD_EMAIL"                    |
| 413 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_BANK"                    |
| 414 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_IBAN"                    |
| 417 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_BANK"                    |
| 418 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_IBAN"                    |
| 420 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_DT_BIRTH"                   |
| 421 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT"             |
| 422 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL"                |
| 472 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","NOMBRECOMPLETO"         |
| 473 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_DT_BIRTH"           |
| 474 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_N_ACT_DEP_TYPE"     |
| 501 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION"                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 25  | formatoFecha | fecha      |
| 43  | guion        | cadena     |
| 47  | OpenReport   | URL        |
| 504 | dpt          |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((dia=='01') &amp;&amp; (mes=='01')&amp;&amp;(anio=='1800')){                                                                                                                                                                          |
| 37  | }else{                                                                                                                                                                                                                                    |
| 193 | if(empleado != null){                                                                                                                                                                                                                     |
| 269 | if (numfichas&gt;0) {                                                                                                                                                                                                                     |
| 298 | if (numTelefEmp&gt;0){                                                                                                                                                                                                                    |
| 320 | &lt;%if (auxNDPT&gt;0){ %&gt;                                                                                                                                                                                                             |
| 322 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                                                        |
| 324 | &lt;%} else{%&gt;                                                                                                                                                                                                                         |
| 355 | if (numResponsable&gt;0){                                                                                                                                                                                                                 |
| 358 | if (numMailResp&gt;0){                                                                                                                                                                                                                    |
| 361 | if(numTelefResp&gt;0){                                                                                                                                                                                                                    |
| 385 | if(numGrupNiv&gt;0) {                                                                                                                                                                                                                     |
| 390 | if(numDirecciones&gt;0){                                                                                                                                                                                                                  |
| 392 | if(numDirecciones&gt;1){                                                                                                                                                                                                                  |
| 397 | if(numTelefonoPer&gt;0){                                                                                                                                                                                                                  |
| 402 | if(e&lt;numTelefonoPer-1){                                                                                                                                                                                                                |
| 412 | if(numcuentas&gt;0) {                                                                                                                                                                                                                     |
| 416 | if(numBenef&gt;0){                                                                                                                                                                                                                        |
| 432 | &lt;% if(!domicilioTeletrabajo.equals("")){ %&gt;                                                                                                                                                                                         |
| 449 | &lt;% if (numFam &gt; 0) {%&gt;                                                                                                                                                                                                           |
| 494 | }else{                                                                                                                                                                                                                                    |
| 31  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 33  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 52  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                                                                                                                               |
| 53  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();                                                                                                                            |
| 54  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                                                                                                                                           |
| 88  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                                                        |
| 89  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                                         |
| 92  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                                          |
| 93  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                                             |
| 96  | expresión de cálculo/transformación: String zoutputdefCde = zsubsesion + "!" + znodoCde + "[*]";                                                                                                                                          |
| 97  | expresión de cálculo/transformación: String zmoveCde = znodoCde + ":" + znodoCde + "[FIRST]";                                                                                                                                             |
| 100 | expresión de cálculo/transformación: String zoutputdefCbe = zsubsesion + "!" + znodoCbe + "[*]";                                                                                                                                          |
| 101 | expresión de cálculo/transformación: String zmoveCbe = znodoCbe + ":" + znodoCbe + "[FIRST]";                                                                                                                                             |
| 104 | expresión de cálculo/transformación: String zoutputdefDir = zsubsesion + "!" + znodoDir + "[*]";                                                                                                                                          |
| 105 | expresión de cálculo/transformación: String zmoveDir = znodoDir + ":" + znodoDir + "[FIRST]";                                                                                                                                             |
| 106 | expresión de cálculo/transformación: String zmoveDirT = znodoDir + ":" + znodoDir + "[LAST]";                                                                                                                                             |
| 109 | expresión de cálculo/transformación: String zoutputdefCbb = zsubsesion + "!" + znodoCbb + "[*]";                                                                                                                                          |
| 110 | expresión de cálculo/transformación: String zmoveCbb = znodoCbb + ":" + znodoCbb + "[LAST]";                                                                                                                                              |
| 113 | expresión de cálculo/transformación: String zoutputdefMail = zsubsesion + "!" + znodoMail + "[*]";                                                                                                                                        |
| 114 | expresión de cálculo/transformación: String zmoveMail = znodoMail + ":" + znodoMail + "[LAST]";                                                                                                                                           |
| 117 | expresión de cálculo/transformación: String zoutputdefMailResp = zsubsesion + "!" + znodoMailResp + "[*]";                                                                                                                                |
| 118 | expresión de cálculo/transformación: String zmoveMailResp = znodoMailResp + ":" + znodoMailResp + "[FIRST]";                                                                                                                              |
| 121 | expresión de cálculo/transformación: String zoutputdefTelef = zsubsesion + "!" + znodoTelef + "[*]";                                                                                                                                      |
| 122 | expresión de cálculo/transformación: String zmoveTelef = znodoTelef + ":" + znodoTelef + "[FIRST]";                                                                                                                                       |
| 125 | expresión de cálculo/transformación: String zoutputdefFamIRPF = zsubsesion + "!" + znodoFamIRPF + "[*]";                                                                                                                                  |
| 126 | expresión de cálculo/transformación: String zmoveFamIRPF = znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]";                                                                                                                                 |
| 129 | expresión de cálculo/transformación: String zoutputdefTelefEmp = zsubsesion + "!" + znodoTelefEmp + "[*]";                                                                                                                                |
| 130 | expresión de cálculo/transformación: String zmoveTelefEmp = znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]";                                                                                                                              |
| 133 | expresión de cálculo/transformación: String zoutputdefTelefResp = zsubsesion + "!" + znodoTelefResp + "[*]";                                                                                                                              |
| 134 | expresión de cálculo/transformación: String zmoveTelefResp = znodoTelefResp + ":" + znodoTelefResp + "[FIRST]";                                                                                                                           |
| 137 | expresión de cálculo/transformación: String zoutputdefGrupNivel = zsubsesion + "!" + znodoGrupNivel + "[*]";                                                                                                                              |
| 138 | expresión de cálculo/transformación: String zmoveGrupNivel = znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]";                                                                                                                           |
| 141 | expresión de cálculo/transformación: String zoutputdefResponsable = zsubsesion + "!" + znodoResponsable + "[*]";                                                                                                                          |
| 142 | expresión de cálculo/transformación: String zmoveResponsable = znodoResponsable + ":" + znodoResponsable + "[FIRST]";                                                                                                                     |
| 145 | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                                                  |
| 146 | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                                                 |
| 148 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE";                                                                                                                 |
| 373 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonoResponsable%&gt; &lt;/td&gt;&lt;/tr&gt;                          |
| 428 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Grupo / Nivel &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;script&gt; document.write(guion('&lt;%=grupoNivel%&gt;')); &lt;/script&gt; &lt;/td&gt;&lt;/tr&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| 11  | /css/estilo_sse.css                                                                                                 |
| 12  | /css/style_persdata.css                                                                                             |
| 14  | /library/jquery.js                                                                                                  |
| 15  | /libreria/funciones_sse.js                                                                                          |
| 284 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO |
| 321 | javascript:dpt();                                                                                                   |
| 323 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA     |
| 338 | mailto:&lt;%=eMail%&gt;                                                                                             |
| 372 | mailto:&lt;%=emailResponsable%&gt;                                                                                  |
| 436 | mailto:&lt;%=emailPersonal%&gt;                                                                                     |
| 505 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt;   |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p1.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8   | Mis datos personales                                                                                                                             |
| 192 | Mis datos personales                                                                                                                             |
| 195 | Consulta o modifica tus datos personales. Dirección fiscal Teléfonos E-mail Otras direcciones [valor dinámico] [valor dinámico] [valor dinámico] |
| 224 | Dirección fiscal                                                                                                                                 |
| 229 | Via pública                                                                                                                                      |
| 235 | Número                                                                                                                                           |
| 236 | Bloque                                                                                                                                           |
| 237 | Piso                                                                                                                                             |
| 238 | Escalera                                                                                                                                         |
| 239 | Puerta                                                                                                                                           |
| 245 | País                                                                                                                                             |
| 252 | Cód. postal                                                                                                                                      |
| 266 | Teléfono                                                                                                                                         |
| 266 | Tipo de línea                                                                                                                                    |
| 266 | Lugar                                                                                                                                            |
| 297 | " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt;                                                                                                  |
| 326 | E-Mail                                                                                                                                           |
| 327 | Lugar                                                                                                                                            |
| 348 | " /&gt; " /&gt;                                                                                                                                  |
| 370 | Otras direcciones                                                                                                                                |
| 388 | Via pública                                                                                                                                      |
| 393 | Número                                                                                                                                           |
| 394 | Bloque                                                                                                                                           |
| 395 | Piso                                                                                                                                             |
| 396 | Escalera                                                                                                                                         |
| 397 | Puerta                                                                                                                                           |
| 402 | Pais                                                                                                                                             |
| 403 | Comunidad                                                                                                                                        |
| 404 | Provincia                                                                                                                                        |
| 409 | Cód. postal                                                                                                                                      |
| 410 | Población                                                                                                                                        |
| 414 | " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt;                                          |
| 465 | " /&gt; " /&gt; " /&gt;                                                                                                                          |
| 491 | " &gt;                                                                                                                                           |
| 492 | " /&gt;                                                                                                                                          |
| 538 | " /&gt; " /&gt;                                                                                                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                        |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                                                                                                                           |
| 33  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                                                                                                                   |
| 194 | img     | alt=Datos personales; title=Datos personales; src=/iconos/noname_mujer_53_100.gif; width=100; height=100                                                                                                                         |
| 198 | a       | class=enlacefuncional; title=Dirección fiscal; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11                                                                                                    |
| 199 | a       | class=enlacefuncional; title=Teléfonos; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11                                                                                                          |
| 200 | a       | class=enlacefuncional; title=E-mail; tabindex=3; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11                                                                                                             |
| 201 | a       | class=enlacefuncional; title=Otras direcciones; tabindex=4; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11                                                                                                  |
| 202 | a       | class=enlacefuncional; tabindex=5; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11                                                                                   |
| 203 | a       | class=enlacefuncional; tabindex=6; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11                                                                                   |
| 204 | a       | class=enlacefuncional; tabindex=7; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11                                                                                   |
| 210 | img     | id=imgPhoto; style=width:0px; height:0px;; src=                                                                                                                                                                                  |
| 213 | img     | id=modPhoto; style=width:0px; height:0px;; src=                                                                                                                                                                                  |
| 216 | img     | id=delPhoto; style=width:0px; height:0px;; src=                                                                                                                                                                                  |
| 225 | a       | tabindex=5; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11; title=Dirección fiscal                                                                                                                           |
| 225 | img     | alt=Dirección fiscal; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                 |
| 267 | a       | tabindex=8; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11; title=Teléfono                                                                                                                                  |
| 267 | img     | alt=Teléfono; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                         |
| 284 | a       | title=Cancelar el registro; href=javascript:m4submit('formtel&lt;%=zposicions2%&gt;');                                                                                                                                           |
| 285 | img     | class=tablamenuright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                        |
| 298 | a       | title=Cancelar el registro; href=javascript:m4submit('formtel&lt;%=zposicions2%&gt;');                                                                                                                                           |
| 299 | img     | class=tablamenuright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                        |
| 303 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=formtel&lt;%=zposicions2%&gt;; id=formtel&lt;%=zposicions2%&gt;                                                                        |
| 304 | input   | type=hidden; id=TELTAG&lt;%=zposicions2%&gt;; name=TAG; value=SSE_PHONE_FAX                                                                                                                                                      |
| 305 | input   | type=hidden; id=TELACC&lt;%=zposicions2%&gt;; name=ACC; value=ANULAR                                                                                                                                                             |
| 306 | input   | type=hidden; id=TELNOD&lt;%=zposicions2%&gt;; name=NOD; value=SSE_PHONE_FAX                                                                                                                                                      |
| 307 | input   | type=hidden; id=TELSTD_INT_COUNTRY_CODE&lt;%=zposicions2%&gt;; name=STD_INT_COUNTRY_CODE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 308 | input   | type=hidden; id=TELSTD_INT_REGION_CODE&lt;%=zposicions2%&gt;; name=STD_INT_REGION_CODE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                 |
| 309 | input   | type=hidden; id=TELSTD_NAT_REGION_CODE&lt;%=zposicions2%&gt;; name=STD_NAT_REGION_CODE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                 |
| 310 | input   | type=hidden; id=TELSTD_PHONE&lt;%=zposicions2%&gt;; name=STD_PHONE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 311 | input   | type=hidden; id=TELSTD_ID_LOCATION_TYPE&lt;%=zposicions2%&gt;; name=STD_ID_LOCATION_TYPE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                               |
| 312 | input   | type=hidden; id=TELSTD_ID_LINE_TYPE&lt;%=zposicions2%&gt;; name=STD_ID_LINE_TYPE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                       |
| 328 | a       | tabindex=9; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11; title=E-mail                                                                                                                                    |
| 328 | img     | alt=E-mail; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                           |
| 340 | a       | title=Cancelar el registro; href=javascript:m4submit('formail&lt;%=zposicions3%&gt;');                                                                                                                                           |
| 341 | img     | class=fuentebotonright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                      |
| 349 | a       | title=Cancelar el registro; href=javascript:m4submit('formail&lt;%=zposicions3%&gt;');                                                                                                                                           |
| 350 | img     | class=tablamenuright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                        |
| 354 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=formail&lt;%=zposicions3%&gt;; id=formail&lt;%=zposicions3%&gt;                                                                        |
| 355 | input   | type=hidden; id=MAILTAG&lt;%=zposicions3%&gt;; name=TAG; value=SSE_E_MAIL                                                                                                                                                        |
| 356 | input   | type=hidden; id=MAILACC&lt;%=zposicions3%&gt;; name=ACC; value=ANULAR                                                                                                                                                            |
| 357 | input   | type=hidden; id=MAILNOD&lt;%=zposicions3%&gt;; name=NOD; value=SSE_E_MAIL                                                                                                                                                        |
| 358 | input   | type=hidden; id=MAILSTD_EMAIL&lt;%=zposicions3%&gt;; name=STD_EMAIL; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                    |
| 359 | input   | type=hidden; id=MAILSTD_ID_LOCATION_TYPE&lt;%=zposicions3%&gt;; name=STD_ID_LOCATION_TYPE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                              |
| 371 | a       | tabindex=10; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11; title=Otras direcciones                                                                                                                        |
| 371 | img     | alt=Otras direcciones; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                |
| 381 | a       | title=Cancelar el registro; href=javascript:m4submit('a&lt;%=zposicions%&gt;');                                                                                                                                                  |
| 382 | img     | class=fuentebotonright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                      |
| 415 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=a&lt;%=zposicions%&gt;; id=a&lt;%=zposicions%&gt;                                                                                      |
| 416 | input   | type=hidden; id=TAG&lt;%=zposicions%&gt;; name=TAG; value=SSE_ADDRESS_OTROS                                                                                                                                                      |
| 417 | input   | type=hidden; id=ACC&lt;%=zposicions%&gt;; name=ACC; value=ANULAR                                                                                                                                                                 |
| 418 | input   | type=hidden; id=NOD&lt;%=zposicions%&gt;; name=NOD; value=SSE_ADDRESS_OTROS                                                                                                                                                      |
| 420 | input   | type=hidden; id=STD_ID_LOCATION_TYPE&lt;%=zposicions%&gt;; name=STD_ID_LOCATION_TYPE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                   |
| 421 | input   | type=hidden; id=SSP_ID_SIGLA_DOMIC&lt;%=zposicions%&gt;; name=SSP_ID_SIGLA_DOMIC; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                       |
| 422 | input   | type=hidden; id=STD_ADDRESS_LINE_1&lt;%=zposicions%&gt;; name=STD_ADDRESS_LINE_1; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                       |
| 423 | input   | type=hidden; id=SSP_NUM_VIA&lt;%=zposicions%&gt;; name=SSP_NUM_VIA; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 424 | input   | type=hidden; id=SSP_BLOQUE&lt;%=zposicions%&gt;; name=SSP_BLOQUE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                       |
| 425 | input   | type=hidden; id=SSP_PISO&lt;%=zposicions%&gt;; name=SSP_PISO; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                           |
| 426 | input   | type=hidden; id=SSP_ESCALERA&lt;%=zposicions%&gt;; name=SSP_ESCALERA; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                   |
| 427 | input   | type=hidden; id=SSP_PUERTA&lt;%=zposicions%&gt;; name=SSP_PUERTA; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                       |
| 428 | input   | type=hidden; id=SSP_DISTRIT_POSTAL&lt;%=zposicions%&gt;; name=SSP_DISTRIT_POSTAL; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                       |
| 429 | input   | type=hidden; id=STD_ID_COUNTRY&lt;%=zposicions%&gt;; name=STD_ID_COUNTRY; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                               |
| 430 | input   | type=hidden; id=STD_ID_GEO_DIV&lt;%=zposicions%&gt;; name=STD_ID_GEO_DIV; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                               |
| 431 | input   | type=hidden; id=STD_ID_GEO_PLACE&lt;%=zposicions%&gt;; name=STD_ID_GEO_PLACE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                           |
| 432 | input   | type=hidden; id=STD_ID_SUB_GEO_DIV&lt;%=zposicions%&gt;; name=STD_ID_SUB_GEO_DIV; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                       |
| 451 | a       | tabindex=11; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11; title=JSP_EXPR_sse_g1Ess.getProperty(                                                                                                         |
| 451 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                  |
| 466 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=formestciv; id=formestciv                                                                                                              |
| 467 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HT_MAR_STAT                                                                                                                                                                             |
| 468 | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                                                                                                      |
| 469 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HT_MAR_STAT                                                                                                                                                                             |
| 471 | input   | type=hidden; id=STD_ID_MARITAL_STAT; name=STD_ID_MARITAL_STAT; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                               |
| 472 | input   | type=hidden; id=STD_DT_START; name=STD_DT_START; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                             |
| 473 | input   | type=hidden; id=STD_DT_END; name=STD_DT_END; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                 |
| 475 | a       | title=Cancelar el registro; href=javascript:m4submit('formestciv');                                                                                                                                                              |
| 476 | img     | class=fuentebotonright&lt;%=zposicion5%&gt;; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 488 | a       | tabindex=12; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11; title=JSP_EXPR_sse_g1Ess.getProperty(                                                                                                         |
| 488 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                  |
| 491 | a       | title=JSP_EXPR_Tran.getProperty(; target=_blank; href=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo6%&gt;                                                                                                              |
| 493 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=formweb; id=formweb                                                                                                                    |
| 494 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HOME_PAGE                                                                                                                                                                               |
| 495 | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                                                                                                      |
| 496 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HOME_PAGE                                                                                                                                                                               |
| 498 | input   | type=hidden; id=SCO_HOME_PAGE; name=SCO_HOME_PAGE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                      |
| 500 | a       | title=Cancelar el registro; href=javascript:m4submit('formweb');                                                                                                                                                                 |
| 501 | img     | class=fuentebotonright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                      |
| 517 | a       | tabindex=11; href=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11; title=JSP_EXPR_sse_g1Ess.getProperty(                                                                                                         |
| 517 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                  |
| 530 | a       | title=Cancelar el registro; href=javascript:m4submit('forformcont&lt;%=zposicions7%&gt;');                                                                                                                                       |
| 531 | img     | class=fuentebotonright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                      |
| 539 | a       | title=Cancelar el registro; href=javascript:m4submit('forformcont&lt;%=zposicions7%&gt;');                                                                                                                                       |
| 540 | img     | class=tablamenuright; alt=Cancelar el registro; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                        |
| 544 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=forformcont&lt;%=zposicions7%&gt;; id=forformcont&lt;%=zposicions7%&gt;                                                                |
| 545 | input   | type=hidden; id=TAG&lt;%=zposicions7%&gt;; name=TAG; value=SSE_OTH_CONTACT_FORMS                                                                                                                                                 |
| 546 | input   | type=hidden; id=ACC&lt;%=zposicions7%&gt;; name=ACC; value=ANULAR                                                                                                                                                                |
| 547 | input   | type=hidden; id=NOD&lt;%=zposicions7%&gt;; name=NOD; value=SSE_OTH_CONTACT_FORMS                                                                                                                                                 |
| 549 | input   | type=hidden; id=SCO_CONTACTO&lt;%=zposicions7%&gt;; name=SCO_CONTACTO; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 550 | input   | type=hidden; id=SCO_ID_CONTACT_TYPE&lt;%=zposicions7%&gt;; name=SCO_ID_CONTACT_TYPE; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 25  | estado          | getParameter(request,"estado")   |
| 26  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                     | Resolución estática parcial                                                                                 |
| --- | ------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 22  | sPathTempMap        | m4Session.getPathTempMapping()                                       | m4Session.getPathTempMapping()                                                                              |
| 23  | sPathTempURI        | m4Session.getUserTempURI() + '/'                                     | {m4Session.getUserTempURI()}{'/'}                                                                           |
| 25  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                          |
| 26  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 37  | zsubsesion          | "SSE_ADDRESS"                                                        | SSE_ADDRESS                                                                                                 |
| 38  | zmeta4object        | "SSE_ADDRESS"                                                        | SSE_ADDRESS                                                                                                 |
| 39  | znodo               | "M4T_ADDRESS"                                                        | M4T_ADDRESS                                                                                                 |
| 40  | znodo2              | "M4T_PHONE_FAX"                                                      | M4T_PHONE_FAX                                                                                               |
| 41  | znodo3              | "M4T_E_MAIL"                                                         | M4T_E_MAIL                                                                                                  |
| 42  | znodo4              | "M4T_ADDRESS_OTROS"                                                  | M4T_ADDRESS_OTROS                                                                                           |
| 43  | znodo5              | "M4T_HT_MAR_STAT"                                                    | M4T_HT_MAR_STAT                                                                                             |
| 44  | znodo6              | "M4T_HOME_PAGE"                                                      | M4T_HOME_PAGE                                                                                               |
| 45  | znodo7              | "M4T_OTH_CONTACT_FORMS"                                              | M4T_OTH_CONTACT_FORMS                                                                                       |
| 47  | ztipocarga          | "M4T"                                                                | M4T                                                                                                         |
| 51  | zoutputdef          | zsubsesion + "!" + znodo + "[*]"                                     | SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                          |
| 52  | zraiz               | znodo + ":" + zsubsesion + "!" + znodo + "."                         | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}                                                            |
| 54  | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[*]"}                                                                        |
| 55  | zmove2              | znodo2 + ":" + znodo2 + "[FIRST]"                                    | M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"[FIRST]"}                                                                  |
| 56  | ziterator2          | znodo2 + ":" + zsubsesion + "!" + znodo2                             | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX                                                             |
| 58  | zlectura            | zsubsesion + "!" + znodo2                                            | SSE_ADDRESS{"!"}M4T_PHONE_FAX                                                                               |
| 59  | zraiz2              | zsubsesion + "!" + znodo2 + "."                                      | SSE_ADDRESS{"!"}M4T_PHONE_FAX{"."}                                                                          |
| 61  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_E_MAIL{"[*]"}                                                                           |
| 62  | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                    | M4T_E_MAIL{":"}M4T_E_MAIL{"[FIRST]"}                                                                        |
| 63  | ziterator3          | znodo3 + ":" + zsubsesion + "!" + znodo3                             | M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL                                                                   |
| 65  | zoutputdef4         | zsubsesion + "!" + znodo4 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[*]"}                                                                    |
| 66  | zmove4              | znodo4 + ":" +znodo4 + "[FIRST]"                                     | M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"[FIRST]"}                                                          |
| 67  | ziterator4          | znodo4 + ":" + zsubsesion + "!" + znodo4                             | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS                                                     |
| 69  | zoutputdef5         | zsubsesion + "!" + znodo5 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[*]"}                                                                      |
| 70  | zmove5              | znodo5 + ":" +znodo5 + "[FIRST]"                                     | M4T_HT_MAR_STAT{":"}M4T_HT_MAR_STAT{"[FIRST]"}                                                              |
| 71  | ziterator5          | znodo5 + ":" + zsubsesion + "!" + znodo5                             | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT                                                         |
| 73  | zoutputdef6         | zsubsesion + "!" + znodo6 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[*]"}                                                                        |
| 74  | zmove6              | znodo6 + ":" +znodo6 + "[FIRST]"                                     | M4T_HOME_PAGE{":"}M4T_HOME_PAGE{"[FIRST]"}                                                                  |
| 75  | ziterator6          | znodo6 + ":" + zsubsesion + "!" + znodo6                             | M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE                                                             |
| 77  | zoutputdef7         | zsubsesion + "!" + znodo7 + "[*]"                                    | SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[*]"}                                                                |
| 78  | zmove7              | znodo7 + ":" +znodo7 + "[FIRST]"                                     | M4T_OTH_CONTACT_FORMS{":"}M4T_OTH_CONTACT_FORMS{"[FIRST]"}                                                  |
| 79  | ziterator7          | znodo7 + ":" + zsubsesion + "!" + znodo7                             | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS                                             |
| 82  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}                                                                 |
| 85  | zSSPNSIGLADOMIC     | zraiz + "SSP_N_SIGLA_DOMIC"                                          | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_N_SIGLA_DOMIC"}                                       |
| 86  | zSTDADDRESSLINE1    | zraiz + "STD_ADDRESS_LINE_1"                                         | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_ADDRESS_LINE_1"}                                      |
| 87  | zSSPNUMVIA          | zraiz + "SSP_NUM_VIA"                                                | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_NUM_VIA"}                                             |
| 88  | zSSPBLOQUE          | zraiz + "SSP_BLOQUE"                                                 | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_BLOQUE"}                                              |
| 89  | zSSPPISO            | zraiz + "SSP_PISO"                                                   | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PISO"}                                                |
| 90  | zSSPESCALERA        | zraiz + "SSP_ESCALERA"                                               | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_ESCALERA"}                                            |
| 91  | zSSPPUERTA          | zraiz + "SSP_PUERTA"                                                 | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PUERTA"}                                              |
| 92  | zSSPDISTRITPOSTAL   | zraiz + "SSP_DISTRIT_POSTAL"                                         | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_DISTRIT_POSTAL"}                                      |
| 93  | zSTDNGEOPLACE       | zraiz + "STD_N_GEO_PLACE"                                            | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_PLACE"}                                         |
| 94  | zSTDNSUBGEODIV      | zraiz + "STD_N_SUB_GEO_DIV"                                          | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_SUB_GEO_DIV"}                                       |
| 95  | zSTDNGEODIV         | zraiz + "STD_N_GEO_DIV"                                              | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_DIV"}                                           |
| 96  | zSTDNCOUNTRY        | zraiz + "STD_N_COUNTRY"                                              | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_COUNTRY"}                                           |
| 98  | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."  | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}                                    |
| 99  | zSTDPHONE           | zcomun2 + "STD_PHONE"                                                | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}                       |
| 100 | zSTDNLINETYPE       | zcomun2 + "STD_N_LINE_TYPE"                                          | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                 |
| 101 | zSTDNLOCATIONTYPE   | zcomun2 + "STD_N_LOCATION_TYPE"                                      | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}             |
| 102 | zSTDIDLOCATIONTYPE  | zcomun2 + "STD_ID_LOCATION_TYPE"                                     | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}            |
| 103 | zSTDIDLINETYPE      | zcomun2 + "STD_ID_LINE_TYPE"                                         | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LINE_TYPE"}                |
| 104 | zSTDINTCOUNTRYCODE  | zcomun2 + "STD_INT_COUNTRY_CODE"                                     | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}            |
| 105 | zSTDINTREGIONCODE   | zcomun2 + "STD_INT_REGION_CODE"                                      | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}             |
| 106 | zSTDNATREGIONCODE   | zcomun2 + "STD_NAT_REGION_CODE"                                      | M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}             |
| 109 | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."  | M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}                                          |
| 110 | zSTDEMAIL           | zcomun3 +"STD_EMAIL"                                                 | M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL                                 |
| 111 | zSTDNLOCATIONTYPE3  | zcomun3 +"STD_N_LOCATION_TYPE"                                       | M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE                       |
| 112 | zSTDIDLOCATIONTYPE3 | zcomun3 +"STD_ID_LOCATION_TYPE"                                      | M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_ID_LOCATION_TYPE                      |
| 114 | zcomun4             | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."  | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                            |
| 115 | zSSPNSIGLADOMIC4    | zcomun4 + "SSP_N_SIGLA_DOMIC"                                        | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}       |
| 116 | zSSPIDSIGLADOMIC4   | zcomun4 + "SSP_ID_SIGLA_DOMIC"                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}      |
| 117 | zSSPNUMVIA4         | zcomun4 +"SSP_NUM_VIA"                                               | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                 |
| 118 | zSTDADDRESSLINE14   | zcomun4 +"STD_ADDRESS_LINE_1"                                        | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1          |
| 119 | zSSPBLOQUE4         | zcomun4 +"SSP_BLOQUE"                                                | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_BLOQUE                  |
| 120 | zSSPPISO4           | zcomun4 + "SSP_PISO"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                |
| 121 | zSSPESCALERA4       | zcomun4 + "SSP_ESCALERA"                                             | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}            |
| 122 | zSSPPUERTA4         | zcomun4 + "SSP_PUERTA"                                               | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}              |
| 123 | zSSPDISTRITPOSTAL4  | zcomun4 + "SSP_DISTRIT_POSTAL"                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}      |
| 124 | zSTDNGEOPLACE4      | zcomun4 + "STD_N_GEO_PLACE"                                          | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}         |
| 125 | zSTDNSUBGEODIV4     | zcomun4 +"STD_N_SUB_GEO_DIV"                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV           |
| 126 | zSTDNGEODIV4        | zcomun4 + "STD_N_GEO_DIV"                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}           |
| 127 | zSTDNCOUNTRY4       | zcomun4 + "STD_N_COUNTRY"                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}           |
| 128 | zSTDIDCOUNTRY4      | zcomun4 + "STD_ID_COUNTRY"                                           | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}          |
| 129 | zSTDIDGEODIV4       | zcomun4 + "STD_ID_GEO_DIV"                                           | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}          |
| 130 | zSTDIDGEOPLACE4     | zcomun4 + "STD_ID_GEO_PLACE"                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_PLACE"}        |
| 131 | zSTDIDSUBGEODIV4    | zcomun4 + "STD_ID_SUB_GEO_DIV"                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}      |
| 132 | zSTDNLOCATIONTYPE4  | zcomun4 +"STD_N_LOCATION_TYPE"                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE         |
| 133 | zSTDIDLOCATIONTYPE4 | zcomun4 +"STD_ID_LOCATION_TYPE"                                      | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ID_LOCATION_TYPE        |
| 135 | znamenodo5          | znodo5 + ":" + zsubsesion + "!" + znodo5                             | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT                                                         |
| 136 | zcomun5             | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."  | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}                                |
| 137 | zSTDIDMARITALSTAT   | zcomun5 + "STD_ID_MARITAL_STAT"                                      | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}         |
| 138 | zSTDNMARITALSTAT    | zcomun5 + "STD_N_MARITAL_STAT"                                       | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}          |
| 139 | zSTDDTSTART         | zcomun5 + "STD_DT_START"                                             | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}                |
| 140 | zSTDDTEND           | zcomun5 + "STD_DT_END"                                               | M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}                  |
| 142 | zcomun6             | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."  | M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}                                    |
| 143 | zSCOHOMEPAGE        | zcomun6 + "SCO_HOME_PAGE"                                            | M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOME_PAGE"}                   |
| 145 | znamenodo7          | znodo7 + ":" + zsubsesion + "!" + znodo7                             | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS                                             |
| 146 | zcomun7             | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."  | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}                    |
| 147 | zSCOCONTACTO        | zcomun7 +"SCO_CONTACTO"                                              | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO        |
| 148 | zSCONCONTACTTYPE    | zcomun7 +"SCO_N_CONTACT_TYPE"                                        | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE  |
| 149 | zSCOIDCONTACTTYPE   | zcomun7 +"SCO_ID_CONTACT_TYPE"                                       | M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_ID_CONTACT_TYPE |
| 169 | zcounti2            | 0                                                                    | 0                                                                                                           |
| 170 | zcounti3            | 0                                                                    | 0                                                                                                           |
| 171 | zcounti4            | 0                                                                    | 0                                                                                                           |
| 172 | zcounti5            | 0                                                                    | 0                                                                                                           |
| 173 | zcounti6            | 0                                                                    | 0                                                                                                           |
| 174 | zcounti7            | 0                                                                    | 0                                                                                                           |
| 184 | zcountv2            | String.valueOf(zcounti2)                                             | String.valueOf(zcounti2)                                                                                    |
| 185 | zcountv3            | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                                                    |
| 186 | zcountv4            | String.valueOf(zcounti4)                                             | String.valueOf(zcounti4)                                                                                    |
| 187 | zcountv5            | String.valueOf(zcounti5)                                             | String.valueOf(zcounti5)                                                                                    |
| 188 | zcountv6            | String.valueOf(zcounti6)                                             | String.valueOf(zcounti6)                                                                                    |
| 189 | zcountv7            | String.valueOf(zcounti7)                                             | String.valueOf(zcounti7)                                                                                    |
| 260 | zposicions2         | "0"                                                                  | 0                                                                                                           |
| 261 | zcontrol2           | 0                                                                    | 0                                                                                                           |
| 262 | zposicion2          | 0                                                                    | 0                                                                                                           |
| 320 | zposicions3         | "0"                                                                  | 0                                                                                                           |
| 321 | zcontrol3           | 0                                                                    | 0                                                                                                           |
| 322 | zposicion3          | 0                                                                    | 0                                                                                                           |
| 367 | zposicions          | "0"                                                                  | 0                                                                                                           |
| 442 | zcontrol5           | 0                                                                    | 0                                                                                                           |
| 443 | zposicion5          | 0                                                                    | 0                                                                                                           |
| 444 | zposicions5         | ""                                                                   |                                                                                                             |
| 509 | zposicions7         | "0"                                                                  | 0                                                                                                           |
| 510 | zcontrol7           | 0                                                                    | 0                                                                                                           |
| 511 | zposicion7          | 0                                                                    | 0                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                               |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 151 | m4:startpage | m4task=SSE_ADDRESS                                                                                                               |
| 151 | m4:beginjob  |                                                                                                                                  |
| 152 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                              |
| 153 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}                                                                             |
| 153 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                       |
| 154 | m4:outputdef | m4alias=M4T_ADDRESS                                                                                                              |
| 154 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                           |
| 155 | m4:outputdef | m4alias=M4T_PHONE_FAX                                                                                                            |
| 155 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[*]"}                                                                         |
| 156 | m4:outputdef | m4alias=M4T_E_MAIL                                                                                                               |
| 156 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_E_MAIL{"[*]"}                                                                            |
| 157 | m4:outputdef | m4alias=M4T_ADDRESS_OTROS                                                                                                        |
| 157 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[*]"}                                                                     |
| 158 | m4:outputdef | m4alias=M4T_HT_MAR_STAT                                                                                                          |
| 158 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[*]"}                                                                       |
| 159 | m4:outputdef | m4alias=M4T_HOME_PAGE                                                                                                            |
| 159 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[*]"}                                                                         |
| 160 | m4:outputdef | m4alias=M4T_OTH_CONTACT_FORMS                                                                                                    |
| 160 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[*]"}                                                                 |
| 161 | m4:endjob    |                                                                                                                                  |
| 162 | m4:move      |                                                                                                                                  |
| 162 | m4:param     | name=SSE_ADDRESS; value=M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"[FIRST]"}                                                               |
| 163 | m4:move      |                                                                                                                                  |
| 163 | m4:param     | name=SSE_ADDRESS; value=M4T_E_MAIL{":"}M4T_E_MAIL{"[FIRST]"}                                                                     |
| 164 | m4:move      |                                                                                                                                  |
| 164 | m4:param     | name=SSE_ADDRESS; value=M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"[FIRST]"}                                                       |
| 165 | m4:move      |                                                                                                                                  |
| 165 | m4:param     | name=SSE_ADDRESS; value=M4T_HT_MAR_STAT{":"}M4T_HT_MAR_STAT{"[FIRST]"}                                                           |
| 166 | m4:move      |                                                                                                                                  |
| 166 | m4:param     | name=SSE_ADDRESS; value=M4T_HOME_PAGE{":"}M4T_HOME_PAGE{"[FIRST]"}                                                               |
| 167 | m4:move      |                                                                                                                                  |
| 167 | m4:param     | name=SSE_ADDRESS; value=M4T_OTH_CONTACT_FORMS{":"}M4T_OTH_CONTACT_FORMS{"[FIRST]"}                                               |
| 230 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                      |
| 230 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                                     |
| 235 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_NUM_VIA"}; htmlsafe=true                                            |
| 236 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_BLOQUE"}; htmlsafe=true                                             |
| 237 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PISO"}; htmlsafe=true                                               |
| 238 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_ESCALERA"}; htmlsafe=true                                           |
| 239 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_PUERTA"}; htmlsafe=true                                             |
| 245 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                          |
| 246 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=M4T_ADDRESS                                                                        |
| 246 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                          |
| 247 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=M4T_ADDRESS                                                                    |
| 247 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                      |
| 252 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                                     |
| 253 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=M4T_ADDRESS                                                                      |
| 253 | m4:item      | m4name=M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                        |
| 266 | m4:label     | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true           |
| 266 | m4:label     | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true            |
| 266 | m4:label     | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true            |
| 269 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                            |
| 277 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true           |
| 278 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true            |
| 279 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true            |
| 280 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                      |
| 281 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                |
| 282 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true            |
| 290 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true           |
| 291 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true            |
| 292 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true            |
| 293 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                      |
| 294 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                |
| 295 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_ADDRESS{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true            |
| 330 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                            |
| 337 | m4:item      | m4name=M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; htmlsafe=true                                |
| 338 | m4:item      | m4name=M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; htmlsafe=true                      |
| 346 | m4:item      | m4name=M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_EMAIL; htmlsafe=true                                |
| 347 | m4:item      | m4name=M4T_E_MAIL{":"}SSE_ADDRESS{"!"}M4T_E_MAIL{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; htmlsafe=true                      |
| 373 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv4).intValue()-1).toString()                                                            |
| 378 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; htmlsafe=true        |
| 389 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true      |
| 389 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; htmlsafe=true         |
| 393 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                |
| 394 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_BLOQUE; htmlsafe=true                 |
| 395 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true               |
| 396 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true           |
| 397 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true             |
| 402 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true          |
| 403 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true          |
| 404 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; htmlsafe=true          |
| 409 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true     |
| 410 | m4:item      | m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true        |
| 448 | m4:label     | m4name=M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}; htmlsafe=true         |
| 449 | m4:label     | m4name=M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true               |
| 450 | m4:label     | m4name=M4T_HT_MAR_STAT{":"}SSE_ADDRESS{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; htmlsafe=true                 |
| 453 | m4:dataloop  | outputdef=M4T_HT_MAR_STAT                                                                                                        |
| 454 | m4:current   | m4varname=current; outputdef=M4T_HT_MAR_STAT                                                                                     |
| 459 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                |
| 460 | m4:item      | item=STD_DT_START; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                      |
| 461 | m4:item      | item=STD_DT_END; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                        |
| 487 | m4:label     | m4name=M4T_HOME_PAGE{":"}SSE_ADDRESS{"!"}M4T_HOME_PAGE{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOME_PAGE"}; htmlsafe=true                  |
| 491 | m4:item      | item=SCO_HOME_PAGE; htmlsafe=true; outputdef=M4T_HOME_PAGE                                                                       |
| 515 | m4:label     | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; htmlsafe=true       |
| 516 | m4:label     | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; htmlsafe=true |
| 519 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv7).intValue()-1).toString()                                                            |
| 526 | m4:item      | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; htmlsafe=true       |
| 527 | m4:item      | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; htmlsafe=true |
| 536 | m4:item      | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_CONTACTO; htmlsafe=true       |
| 537 | m4:item      | m4name=M4T_OTH_CONTACT_FORMS{":"}SSE_ADDRESS{"!"}M4T_OTH_CONTACT_FORMS{"[&amp;VAR.m4lix]"}{"."}SCO_N_CONTACT_TYPE; htmlsafe=true |
| 562 | m4:endpage   |                                                                                                                                  |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 177 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 178 | getCountInClient | znodo3,zsubsesion,znodo3 |
| 179 | getCountInClient | znodo4,zsubsesion,znodo4 |
| 180 | getCountInClient | znodo5,zsubsesion,znodo5 |
| 181 | getCountInClient | znodo6,zsubsesion,znodo6 |
| 182 | getCountInClient | znodo7,zsubsesion,znodo7 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                            |
| 28  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                    |
| 259 | if (zcounti2 &gt; 0) {                                                                                                     |
| 275 | &lt;%if (zcontrol2==0){%&gt;                                                                                               |
| 288 | &lt;%}else{%&gt;                                                                                                           |
| 319 | &lt;%}if (zcounti3 &gt; 0) {                                                                                               |
| 335 | if (zcontrol3==0){%&gt;                                                                                                    |
| 344 | &lt;%}else{%&gt;                                                                                                           |
| 366 | &lt;%}if (zcounti4 &gt; 0) {                                                                                               |
| 441 | &lt;%}if (zcounti5 &gt; 0) {                                                                                               |
| 457 | if (zcontrol5==0){zposicions5="";}else{zposicions5="2";}%&gt;                                                              |
| 462 | &lt;%if (zposicion5!=0){%&gt;                                                                                              |
| 464 | &lt;%}else{%&gt;                                                                                                           |
| 484 | &lt;%}if (zcounti6 &gt; 0) {%&gt;                                                                                          |
| 508 | &lt;%}if (zcounti7 &gt; 0) {                                                                                               |
| 524 | if (zcontrol7==0){%&gt;                                                                                                    |
| 534 | &lt;%}else{%&gt;                                                                                                           |
| 23  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                               |
| 51  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 52  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                          |
| 54  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 55  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                    |
| 56  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                         |
| 58  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo2;                                          |
| 59  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                      |
| 61  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                               |
| 62  | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                     |
| 63  | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                         |
| 65  | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                               |
| 66  | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" +znodo4 + "[FIRST]";                                     |
| 67  | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                         |
| 69  | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                               |
| 70  | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" +znodo5 + "[FIRST]";                                     |
| 71  | expresión de cálculo/transformación: String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                         |
| 73  | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                               |
| 74  | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" +znodo6 + "[FIRST]";                                     |
| 75  | expresión de cálculo/transformación: String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;                         |
| 77  | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                               |
| 78  | expresión de cálculo/transformación: String zmove7 = znodo7 + ":" +znodo7 + "[FIRST]";                                     |
| 79  | expresión de cálculo/transformación: String ziterator7 = znodo7 + ":" + zsubsesion + "!" + znodo7;                         |
| 82  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                 |
| 85  | expresión de cálculo/transformación: String zSSPNSIGLADOMIC = zraiz + "SSP_N_SIGLA_DOMIC";                                 |
| 86  | expresión de cálculo/transformación: String zSTDADDRESSLINE1 = zraiz + "STD_ADDRESS_LINE_1";                               |
| 87  | expresión de cálculo/transformación: String zSSPNUMVIA = zraiz + "SSP_NUM_VIA";                                            |
| 88  | expresión de cálculo/transformación: String zSSPBLOQUE = zraiz + "SSP_BLOQUE";                                             |
| 89  | expresión de cálculo/transformación: String zSSPPISO = zraiz + "SSP_PISO";                                                 |
| 90  | expresión de cálculo/transformación: String zSSPESCALERA = zraiz + "SSP_ESCALERA";                                         |
| 91  | expresión de cálculo/transformación: String zSSPPUERTA = zraiz + "SSP_PUERTA";                                             |
| 92  | expresión de cálculo/transformación: String zSSPDISTRITPOSTAL = zraiz + "SSP_DISTRIT_POSTAL";                              |
| 93  | expresión de cálculo/transformación: String zSTDNGEOPLACE = zraiz + "STD_N_GEO_PLACE";                                     |
| 94  | expresión de cálculo/transformación: String zSTDNSUBGEODIV = zraiz + "STD_N_SUB_GEO_DIV";                                  |
| 95  | expresión de cálculo/transformación: String zSTDNGEODIV = zraiz + "STD_N_GEO_DIV";                                         |
| 96  | expresión de cálculo/transformación: String zSTDNCOUNTRY = zraiz + "STD_N_COUNTRY";                                        |
| 98  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 99  | expresión de cálculo/transformación: String zSTDPHONE =zcomun2 + "STD_PHONE";                                              |
| 100 | expresión de cálculo/transformación: String zSTDNLINETYPE =zcomun2 + "STD_N_LINE_TYPE";                                    |
| 101 | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun2 + "STD_N_LOCATION_TYPE";                           |
| 102 | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE = zcomun2 + "STD_ID_LOCATION_TYPE";                         |
| 103 | expresión de cálculo/transformación: String zSTDIDLINETYPE = zcomun2 + "STD_ID_LINE_TYPE";                                 |
| 104 | expresión de cálculo/transformación: String zSTDINTCOUNTRYCODE = zcomun2 + "STD_INT_COUNTRY_CODE";                         |
| 105 | expresión de cálculo/transformación: String zSTDINTREGIONCODE = zcomun2 + "STD_INT_REGION_CODE";                           |
| 106 | expresión de cálculo/transformación: String zSTDNATREGIONCODE = zcomun2 + "STD_NAT_REGION_CODE";                           |
| 109 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 114 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."; |
| 115 | expresión de cálculo/transformación: String zSSPNSIGLADOMIC4 = zcomun4 + "SSP_N_SIGLA_DOMIC";                              |
| 116 | expresión de cálculo/transformación: String zSSPIDSIGLADOMIC4 = zcomun4 + "SSP_ID_SIGLA_DOMIC";                            |
| 120 | expresión de cálculo/transformación: String zSSPPISO4 = zcomun4 + "SSP_PISO";                                              |
| 121 | expresión de cálculo/transformación: String zSSPESCALERA4 = zcomun4 + "SSP_ESCALERA";                                      |
| 122 | expresión de cálculo/transformación: String zSSPPUERTA4 = zcomun4 + "SSP_PUERTA";                                          |
| 123 | expresión de cálculo/transformación: String zSSPDISTRITPOSTAL4 = zcomun4 + "SSP_DISTRIT_POSTAL";                           |
| 124 | expresión de cálculo/transformación: String zSTDNGEOPLACE4 = zcomun4 + "STD_N_GEO_PLACE";                                  |
| 126 | expresión de cálculo/transformación: String zSTDNGEODIV4 = zcomun4 + "STD_N_GEO_DIV";                                      |
| 127 | expresión de cálculo/transformación: String zSTDNCOUNTRY4 = zcomun4 + "STD_N_COUNTRY";                                     |
| 128 | expresión de cálculo/transformación: String zSTDIDCOUNTRY4 = zcomun4 + "STD_ID_COUNTRY";                                   |
| 129 | expresión de cálculo/transformación: String zSTDIDGEODIV4 = zcomun4 + "STD_ID_GEO_DIV";                                    |
| 130 | expresión de cálculo/transformación: String zSTDIDGEOPLACE4 = zcomun4 + "STD_ID_GEO_PLACE";                                |
| 131 | expresión de cálculo/transformación: String zSTDIDSUBGEODIV4 = zcomun4 + "STD_ID_SUB_GEO_DIV";                             |
| 135 | expresión de cálculo/transformación: String znamenodo5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                         |
| 136 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."; |
| 137 | expresión de cálculo/transformación: String zSTDIDMARITALSTAT = zcomun5 + "STD_ID_MARITAL_STAT";                           |
| 138 | expresión de cálculo/transformación: String zSTDNMARITALSTAT = zcomun5 + "STD_N_MARITAL_STAT";                             |
| 139 | expresión de cálculo/transformación: String zSTDDTSTART = zcomun5 + "STD_DT_START";                                        |
| 140 | expresión de cálculo/transformación: String zSTDDTEND = zcomun5 + "STD_DT_END";                                            |
| 142 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."; |
| 143 | expresión de cálculo/transformación: String zSCOHOMEPAGE = zcomun6 + "SCO_HOME_PAGE";                                      |
| 145 | expresión de cálculo/transformación: String znamenodo7 = znodo7 + ":" + zsubsesion + "!" + znodo7;                         |
| 146 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 16  | ../../sse_generico/espanol/menu_ess.jsp            |
| 17  | ../../sse_g1/sse_g1_trans.jsp                      |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 35  | ../../sse_generico/espanol/generico_links.jsp      |
| 560 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 11  | /libreria/mootools.js                                           |
| 12  | /libreria/functions_persdata.js                                 |
| 13  | /libreria/meta4ajax.js                                          |
| 14  | /libreria/functions_validate.js                                 |
| 15  | /css/style_persdata.css                                         |
| 18  | /library/openwin.js                                             |
| 194 | /iconos/noname_mujer_53_100.gif                                 |
| 198 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   |
| 199 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11  |
| 200 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11  |
| 201 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  |
| 202 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11 |
| 203 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11 |
| 204 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11 |
| 225 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   |
| 225 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 267 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11  |
| 267 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 284 | javascript:m4submit(                                            |
| 285 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 298 | javascript:m4submit(                                            |
| 299 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 303 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 328 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11  |
| 328 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 340 | javascript:m4submit(                                            |
| 341 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 349 | javascript:m4submit(                                            |
| 350 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 354 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 371 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  |
| 371 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 381 | javascript:m4submit(                                            |
| 382 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 415 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 451 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11 |
| 451 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 466 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 475 | javascript:m4submit(                                            |
| 476 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 488 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11 |
| 488 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 491 | &lt;m4:item item=                                               |
| 493 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 500 | javascript:m4submit(                                            |
| 501 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 517 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11 |
| 517 | /iconos/icono_flecha_azul1_ess_11_9.gif                         |
| 530 | javascript:m4submit(                                            |
| 531 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 539 | javascript:m4submit(                                            |
| 540 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 544 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 16  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 17  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 35  | ../../sse_generico/espanol/generico_links.jsp                   |
| 560 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                        | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 319 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| COLL   | 336 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| COLL   | 370 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| COLL   | 427 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 496 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| CYC    | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 321 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| CYC    | 338 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| CYC    | 372 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| CYC    | 436 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 505 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| IBER   | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 319 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| IBER   | 336 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| IBER   | 370 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| IBER   | 427 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 496 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| BASE   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 17  | ../../sse_g1/sse_g1_trans.jsp                                                                                     | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                             |
| BASE   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                                                                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 35  | ../../sse_generico/espanol/generico_links.jsp                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 560 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 10  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 11  | /libreria/mootools.js                                                                                             | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                                 |
| BASE   | 12  | /libreria/functions_persdata.js                                                                                   | contextual | [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md)                                                                               |
| BASE   | 13  | /libreria/meta4ajax.js                                                                                            | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                                                                                 |
| BASE   | 14  | /libreria/functions_validate.js                                                                                   | contextual | [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md)                                                                               |
| BASE   | 18  | /library/openwin.js                                                                                               | contextual | [library/openwin.js](../../transversal/dependencias/library--openwin.md)                                                                                                       |
| BASE   | 198 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11                                                     | ausente    | P06                                                                                                                                                                            |
| BASE   | 199 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 200 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 201 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 202 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                       |
| BASE   | 203 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod6.jsp](sse_g1--ssco_g1_p1_mod6.md)                                                                                                                       |
| BASE   | 204 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod7.jsp](sse_g1--ssco_g1_p1_mod7.md)                                                                                                                       |
| BASE   | 225 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11                                                     | ausente    | P06                                                                                                                                                                            |
| BASE   | 267 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 284 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 298 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 303 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 328 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 340 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 349 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 354 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 371 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 381 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 415 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 451 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                       |
| BASE   | 466 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 475 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 488 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod6.jsp](sse_g1--ssco_g1_p1_mod6.md)                                                                                                                       |
| BASE   | 493 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 500 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 517 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11                                                   | contextual | [sse_g1/ssco_g1_p1_mod7.jsp](sse_g1--ssco_g1_p1_mod7.md)                                                                                                                       |
| BASE   | 530 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 539 | javascript:m4submit(                                                                                              | dinámica   | P06                                                                                                                                                                            |
| BASE   | 544 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                                                           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 17  | ../../sse_g1/sse_g1_trans.jsp                                                                                     | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                             |
| BASE   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                                                                   | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 35  | ../../sse_generico/espanol/generico_links.jsp                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 560 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
