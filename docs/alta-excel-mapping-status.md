# Estado del mapping Excel del alta de personas

Fuente auditada: `fuentes/HIRE/Hire_1_PERSONA.xls`, hoja `AltaNueva`, fila **5** (identificador técnico). La fila 4 se usa solo para reconocer la columna visible; sus rótulos `real_*` pueden estar desactualizados. La UI contiene **113 fields**: **99 integrados**, **8 con mapping sin confirmar** y **6 controles solo UI**. Ningún mapping confirmado queda pendiente de integración. Las columnas indicadas son las que escribe el generador; «Sí» significa que se crea una instrucción Excel, incluso cuando el valor vacío provoca `ClearContents`.

## Inventario de todos los fields del formulario

| Field · rótulo | Estado | Identificador técnico PeopleNet | Columna(s) Excel | ¿Se escribe? | Rama |
|---|---|---|---|---|---|
| `firstName` · Nombre | integrado | `STD_N_FIRST_NAME` | R (técnica) | Sí | — |
| `lastName1` · Primer apellido | integrado | `SSP_PRIMER_APELLIDO, STD_N_FAMILY_NAME_1` | O (técnica), P (técnica) | Sí | — |
| `lastName2` · 2º apellido | integrado | `STD_N_MAIDEN_NAME` | Q (técnica) | Sí | — |
| `documentType` · ID Tipo documento | integrado | `SSP_ID_TP_DOC` | V (visible), W (técnica) | Sí | — |
| `documentNumber` · Núm. de documento | integrado | `STD_SSN` | X (visible), Y (técnica) | Sí | — |
| `legalRepresentativeNif` · NIF Representante legal | integrado | `SSP_SSN_REP_LEGAL` | Z (técnica) | Sí | — |
| `issuingCountry` · ID País emisor documento | integrado | `SSP_ID_PAIS_EMISOR` | AA (visible), AB (técnica) | Sí | — |
| `birthDate` · Fecha nacimiento | integrado | `STD_DT_BIRTH` | AC (visible), AD (técnica) | Sí | — |
| `nationality` · ID Nacionalidad | integrado | `STD_ID_COUNTRY_NAC` | AE (visible), AF (técnica) | Sí | — |
| `birthProvince` · ID Provincia nacimiento | integrado | `SCO_BIRTH_ID_SUB_GEO_DIV` | AG (visible), AH (técnica) | Sí | — |
| `birthCommunity` · ID Comunidad nacimiento | mapping sin confirmar | `—` | AL visible; AM vincula Atradius Job | No | — |
| `birthCountry` · ID País nacimiento | integrado | `SCO_BIRTH_ID_COUNTRY` | AO (visible), AP (técnica) | Sí | — |
| `gender` · ID Sexo | integrado | `STD_ID_GENDER` | AQ (visible), AR (técnica) | Sí | — |
| `maritalStatus` · ID Estado civil | integrado | `STD_ID_MARITAL_STAT` | AS (visible), AT (técnica) | Sí | — |
| `hireDate` · Fecha de alta | integrado | `SRCO_DT_HIRE` | D (visible), E (técnica) | Sí | — |
| `atradiusId` · ID Atradius | integrado | `CSP_ID_ATRADIUS` | IS (técnica) | Sí | — |
| `atradiusJobCode` · ID Atradius Job Code | integrado | `CSP_ID_ATRADIUS_JOB` | AM (técnica) | Sí | — |
| `atradiusCategory` · ID Categoría Atradius | integrado | `CSP_ID_CATEG_ATRADIUS` | T (técnica) | Sí | — |
| `department` · ID Department | mapping sin confirmar | `—` | ER = CSP_ID_CODE_DEP; el catálogo usa CSP_ID_DEPARTMENT | No | — |
| `phone` · Teléfono | integrado | `STD_NAT_REGION_CODE_PHONE, STD_PHONE` | AU (técnica), AV (técnica), IO (técnica) | Sí | — |
| `mobile` · Móvil | integrado | `STD_NAT_REGION_CODE_CELL, STD_MOVIL` | AW (técnica), AX (técnica) | Sí | — |
| `email` · Correo electrónico | integrado | `STD_EMAIL, STD_EMAIL_ATRADIUS` | AY (técnica), IQ (técnica) | Sí | — |
| `fax` · Fax | mapping sin confirmar | `—` | AZ/BA pertenecen a Estructura/Centro funcional | No | — |
| `locationType` · ID Tipo localización | integrado | `STD_ID_LOCATION_TYPE` | BB (visible), BC (técnica) | Sí | — |
| `roadType` · ID Tipo de vía | integrado | `SSP_ID_SIGLA_DOMIC` | BD (visible), BE (técnica) | Sí | — |
| `address` · Dirección | integrado | `STD_ADDRESS_LINE_1, STD_ADDRESS_LINE_2` | BH (técnica), BI (técnica) | Sí | — |
| `streetNumber` · Núm. | integrado | `SSP_NUM_VIA` | BL (técnica) | Sí | — |
| `buildingBlock` · Bloque | integrado | `SSP_BLOQUE` | BM (técnica) | Sí | — |
| `staircase` · Escalera | integrado | `SSP_ESCALERA` | BN (técnica) | Sí | — |
| `floor` · Piso | integrado | `SSP_PISO` | BO (técnica) | Sí | — |
| `door` · Puerta | integrado | `SSP_PUERTA` | BP (técnica) | Sí | — |
| `postalCode` · Código postal | integrado | `STD_ZIP_CODE` | CG (técnica) | Sí | — |
| `city` · ID Población | integrado | `STD_ID_GEO_PLACE` | BQ (visible), BR (técnica) | Sí | — |
| `province` · ID Provincia | integrado | `STD_ID_SUB_GEO_DIV` | BW (visible), BX (técnica) | Sí | — |
| `community` · ID Comunidad | integrado | `STD_ID_GEO_DIV` | CB (visible), CC (técnica) | Sí | — |
| `country` · ID País | integrado | `STD_ID_COUNTRY` | CE (visible), CF (técnica) | Sí | — |
| `legalEntity` · ID Empresa | integrado | `SCO_ID_LEG_ENT` | CH (visible), CI (técnica) | Sí | — |
| `positionChoice` · Puesto / Posición | solo UI | `—` | — | No | Selector Puesto/Posición |
| `job` · ID Puesto | integrado | `STD_ID_JOB_CODE` | CK (visible), CL (técnica) | Sí | Puesto |
| `position` · ID Posición | integrado | `SCO_ID_POSITION` | CM (visible), CN (técnica) | Sí | Posición |
| `workUnit` · ID Unidad organizativa | integrado | `SCO_ID_WORK_UNIT` | CS (visible), CT (técnica) | Sí | — |
| `workLocation` · ID Lugar trabajo | integrado | `SCO_ID_WORK_LOCATION` | CU (visible), CV (técnica) | Sí | — |
| `occupationType` · Tipo de ocupación | solo UI | `—` | — | No | Solo Posición |
| `occupationHours` · Núm. Horas | integrado | `SCO_NUM_HOURS` | CP (técnica) | Sí | Posición · Horas |
| `occupationEjc` · Núm. EJC | integrado | `SCO_NUM_EJC` | CQ (técnica) | Sí | Posición · EJC |
| `occupationHeadcount` · Núm. Efectivos | integrado | `SCO_NUM_HEADCOUNT` | CR (técnica) | Sí | Posición · Efectivos |
| `category` · Categoría | integrado | `SSP_ID_CATEGORIA` | CW (visible), CX (técnica) | Sí | — |
| `project` · Proyecto | integrado | `SSP_ID_CENT_COSTO` | CZ (técnica) | Sí | — |
| `startReason` · ID Motivo inicio | integrado | `STD_ID_HRP_START_REASON` | DB (visible), DC (técnica) | Sí | — |
| `keyEmployee` · Empleado clave | integrado | `STD_KEY_EMPLOYEE` | DF (visible), DG (técnica) | Sí | — |
| `strategicEmployee` · Empleado estratégico | integrado | `STD_STRATEGIC_EMP` | DH (visible), DI (técnica) | Sí | — |
| `structure` · Id Estructura | integrado | `P_CYC_ID_ESTRUCTURA` | AZ (técnica) | Sí | — |
| `functionalWorkCenter` · Centro de Trabajo Funcional | integrado | `P_CYC_ID_WORK_FUNCTIONAL` | BA (técnica) | Sí | — |
| `ssNumberChoice` · Con / Sin Núm. S.S. asignado | integrado | `SSP_ALTA_CON_NUM_SS` | DU (visible), DV (técnica) | Sí | Con/Sin número |
| `ssNumber` · Núm. SS | integrado | `SSP_PROV_NUM_SS, SSP_NUM_SS, SSP_DIG_NUM_SS` | DW (técnica), DX (técnica), DY (técnica) | Sí | Solo Con número |
| `tc1Header` · ID Cabecera TC1 | integrado | `SSP_ID_CABEC_TC1` | DZ (visible), EA (técnica) | Sí | — |
| `tariffGroup` · ID Grupo de tarifa | integrado | `SSP_ID_GRUP_TARIFA` | EB (visible), EC (técnica) | Sí | — |
| `ssOccupation` · ID Ocupación | integrado | `SSP_ID_OCUPACION` | ED (visible), EE (técnica) | Sí | — |
| `ssAgreement` · ID Convenio S.S. | integrado | `SSP_ID_CONV_SS` | EF (visible), EG (técnica) | Sí | — |
| `legalContract` · ID Contrato legal | integrado | `SSP_ID_CONT_LEGAL` | EI (visible), EJ (técnica) | Sí | — |
| `internalContract` · ID Contrato interno | integrado | `SSP_ID_CONT_INTERN` | EK (visible), EL (técnica) | Sí | — |
| `contractEnd` · Fin | integrado | `SSP_FEC_FIN_CONTRA` | EM (visible), EN (técnica) | Sí | — |
| `laborRelation` · ID Relación laboral | integrado | `SSP_ID_REL_LAB` | EO (visible), EP (técnica) | Sí | — |
| `scheduleChoice` · Jornada completa / Jornada parcial | solo UI | `—` | — | No | Selector jornada |
| `partialSchedulePercent` · % Jornada parcial | integrado | `SSP_VALOR_COEF_T_P` | EQ (técnica) | Sí | Jornada parcial |
| `hourType` · Tipo de horas | integrado | `SSP_TIPO_HORAS` | ES (visible), ET (técnica) | Sí | Jornada parcial |
| `numberOfHours` · Número de horas | integrado | `SSP_NUM_HORAS` | EU (técnica) | Sí | Jornada parcial |
| `partialScheduleType` · Tipo de jornada parcial | integrado | `SSP_JP_REG_IRREG` | EV (visible), EW (técnica) | Sí | Jornada parcial |
| `weeklyWorkDays` · Días de trabajo semanales | integrado | `SSP_NUM_DIAS_JP` | EX (técnica) | Sí | Jornada parcial |
| `legalReductionPercent` · % Reducción | integrado | `SSP_PORC_GLEGAL` | EY (técnica) | Sí | — |
| `reductionReason` · ID Motivo de reducción | integrado | `SSP_ID_MOTIV_REDUC` | EZ (visible), FA (técnica) | Sí | — |
| `substitutionCause` · ID Causa sustitución | integrado | `SSP_ID_CAUSA_SUST` | FD (visible), FE (técnica) | Sí | — |
| `replacedPersonSsNumber` · Nº S.S. del sustituido | integrado | `SRSP_PROV_NUSS, SRSP_NUSS, SRSP_DIG_NUSS` | FF (técnica), FG (técnica), FH (técnica) | Sí | — |
| `unemploymentCondition` · ID Condición desempleado | integrado | `SSP_ID_COND_DESEMP` | FI (visible), FJ (técnica) | Sí | — |
| `specialLaborRelation` · ID Relación laboral especial | integrado | `SSP_ID_REL_LAB_ESP` | FK (visible), FL (técnica) | Sí | — |
| `socialExclusion` · Exclusión social | integrado | `SSP_TRAB_EXCL_SOC` | FM (visible), FN (técnica) | Sí | — |
| `disabilityChoice` · Sin minusvalía / Con minusvalía | solo UI | `—` | — | No | Selector minusvalía |
| `disabilityPercent` · % minusvalía | integrado | `SSP_PORC_MINUSVAL` | FO (técnica) | Sí | Con minusvalía |
| `specificFic` · FIC Específico | mapping sin confirmar | `—` | Sin columna inequívoca | No | — |
| `contractSeniorityStart` · Inicio antig. contrato | integrado | `SSP_FEC_INI_A_CONT` | FP (visible), FQ (técnica) | Sí | — |
| `womanMaternity24` · Mujer mater. 24 meses | integrado | `SSP_MUJER_24` | FR (visible), FS (técnica) | Sí | — |
| `underrepresentedWoman` · Mujer subrepresentada | integrado | `SSP_MUJER_SUBREPR` | FT (visible), FU (técnica) | Sí | — |
| `activeInsertionIncome` · Renta activa de inserción | integrado | `SSP_RENTACTIVA_INS` | FV (visible), FW (técnica) | Sí | — |
| `reliefContract` · Contrato relevo | integrado | `SSP_CONTRAT_RELEVO` | FX (visible), FY (técnica) | Sí | — |
| `readmittedDisabled` · Incapacitado readmitido | integrado | `SSP_INCAPACITADO_R` | FZ (visible), GA (técnica) | Sí | — |
| `firstSelfEmployedWorker` · Primer trabajador autónomo | integrado | `SSP_PRIM_TRAB_AUT` | GB (visible), GC (técnica) | Sí | — |
| `probationDays` · Días de prueba | integrado | `SSP_DIAS_PRUEBA` | GD (técnica) | Sí | — |
| `probationEnd` · Fecha fin periodo prueba | integrado | `SCO_DT_PROBATION_END` | DL (visible), DM (técnica) | Sí | — |
| `additionalClause` · Cláusula adicional | integrado | `SSP_CLAUSULA_ADIC` | GE (técnica) | Sí | — |
| `payrollAgreement` · ID Convenio | integrado | `SSP_ID_CONVENIO` | GH (visible), GI (técnica) | Sí | — |
| `adjustmentType` · ID Tipo de ajuste | integrado | `SCO_ID_TYPE_ADJUST` | GF (visible), GG (técnica) | Sí | — |
| `annualGross` · Bruto anual | integrado | `SSP_BRUTO_ANUAL` | GJ (técnica) | Sí | — |
| `salaryType` · ID Tipo salario | integrado | `SSP_ID_TP_SALARIO` | GL (visible), GM (técnica) | Sí | — |
| `seniorityDate` · Fecha de Antigüedad | integrado | `SSP_FEC_ANTIGUEDAD` | GN (visible), GO (técnica) | Sí | — |
| `extrasDate` · Fecha Extras | mapping sin confirmar | `—` | GP visible; GQ vincula IBAN | No | — |
| `payrollCurrency` · ID Moneda | integrado | `ID_CURRENCY` | GV (visible), GW (técnica) | Sí | — |
| `union` · ID Sindicato | integrado | `SSP_ID_SINDICATO` | GR (visible), GS (técnica) | Sí | — |
| `variableCompensationMode` · Tipo modalidad Variable | integrado | `CSP_TP_MOD_VAR` | IU (técnica) | Sí | — |
| `irpfType` · ID Tipo del IRPF | integrado | `SSP_ID_TP_IRPF` | HB (visible), HC (técnica) | Sí | — |
| `perceptionKey` · ID Clave percepción | integrado | `SSP_ID_CLAVE_PERCEP` | HD (visible), HE (técnica) | Sí | — |
| `referenceModelWeek` · ID Modelo/Semana de referencia | mapping sin confirmar | `—` | HN visible; HO = SSP_ID_CENT_COSTO1; HP solo SCO_OR_REF_MOD | No | — |
| `timeManagementPay` · Pago con gestión del tiempo | integrado | `SSP_PAGO_TA` | HR (visible), HS (técnica) | Sí | — |
| `paymentCurrency` · ID Moneda | integrado | `ID_CURRENCY` | HT (visible), HU (técnica) | Sí | — |
| `paymentType` · ID Tipo pago | integrado | `SCO_ID_PAYM_TYPE` | HV (visible), HW (técnica) | Sí | — |
| `companyBank` · ID Banco empresa | integrado | `SCO_ID_COMP_BANK` | HX (visible), HY (técnica) | Sí | — |
| `personBankOrdinal` · Ordinal banco persona | mapping sin confirmar | `—` | Solo aparece en SRCO_PARAM_EXCEL | No | — |
| `bankFormatChoice` · Formato: IBAN / Otro formato | solo UI | `—` | — | No | Selector IBAN/Otro |
| `bankAccount` · Cuenta bancaria | solo UI | `—` | — | No | Selector IBAN/Otro |
| `iban` · IBAN | integrado | `SCO_GB_IBAN` | GQ (técnica) | Sí | IBAN |
| `bankBranch` · Sucursal bancaria | integrado | `SCO_ID_BANK_BRANCH` | HZ (visible), IA (técnica) | Sí | Otro formato |
| `accountNumber` · Nº de cuenta | integrado | `SCO_ACCOUNT_NUMBER` | ID (técnica) | Sí | Otro formato |
| `bic` · BIC | mapping sin confirmar | `—` | Sin identificador inequívoco en AltaNueva | No | Ambas ramas; no se envía |
| `accountCurrency` · ID Moneda | integrado | `ID_CURRENCY_2` | IJ (visible), IK (técnica) | Sí | — |

## Subcampos de controles compuestos

Los controles compuestos se desglosan en sus inputs reales. Un mismo identificador puede tener dos celdas técnicas: `STD_PHONE` se escribe en **AV e IO**. Los segmentos del número de S.S. conservan ceros iniciales.

| Control.subcampo | Estado | Identificador técnico | Columna(s) | ¿Se escribe? | Rama |
|---|---|---|---|---|---|
| `phone.phonePrefix` | integrado | `STD_NAT_REGION_CODE_PHONE` | AU (técnica) | Sí | — |
| `phone.phoneNumber` | integrado | `STD_PHONE`, `STD_PHONE` | AV (técnica), IO (técnica) | Sí | — |
| `mobile.mobilePrefix` | integrado | `STD_NAT_REGION_CODE_CELL` | AW (técnica) | Sí | — |
| `mobile.mobileNumber` | integrado | `STD_MOVIL` | AX (técnica) | Sí | — |
| `fax.faxPrefix` | mapping sin confirmar | — | — | No | — |
| `fax.faxNumber` | mapping sin confirmar | — | — | No | — |
| `address.addressLine1` | integrado | `STD_ADDRESS_LINE_1` | BH (técnica) | Sí | — |
| `address.addressLine2` | integrado | `STD_ADDRESS_LINE_2` | BI (técnica) | Sí | — |
| `ssNumber.ssNumberPrefix` | integrado | `SSP_PROV_NUM_SS` | DW (técnica) | Sí | Solo Con número |
| `ssNumber.ssNumberBody` | integrado | `SSP_NUM_SS` | DX (técnica) | Sí | Solo Con número |
| `ssNumber.ssNumberSuffix` | integrado | `SSP_DIG_NUM_SS` | DY (técnica) | Sí | Solo Con número |
| `replacedPersonSsNumber.replacedSsPrefix` | integrado | `SRSP_PROV_NUSS` | FF (técnica) | Sí | — |
| `replacedPersonSsNumber.replacedSsBody` | integrado | `SRSP_NUSS` | FG (técnica) | Sí | — |
| `replacedPersonSsNumber.replacedSsSuffix` | integrado | `SRSP_DIG_NUSS` | FH (técnica) | Sí | — |

## Identificadores de la fila 5 sin input que los escriba

Cada fila de esta tabla es una columna técnica real de `AltaNueva` que queda fuera de `WRITTEN_COLUMNS`. «Fórmula/default» significa que la fila 6 contiene una fórmula conservada, no que el formulario deba calcularla. Algunos identificadores sí tienen un campo UI cuyo mapping no puede confirmarse; se indican en las dudas.

| Columna | Identificador técnico | Rótulo fila 4 | Clase |
|---|---|---|---|
| F | `SRCO_ID_HR_TYPE` | real_SCO_ID_HR_TYPE | auxiliar de importación |
| G | `SRCO_ARG_ID_PERSON` | ID PERSONA | auxiliar de importación |
| H | `SRCO_ARG_OR_HR_PERIOD` |  NÚM. PERIODO NUEVO | auxiliar de importación |
| I | `SCO_GB_NAME` | NOMBRE GLOBAL | dato de negocio |
| K | `SRCO_ID_HR` | real_RH | auxiliar de importación |
| L | `SRCO_OR_HR_PERIOD` | real_SRCO_OR_HR_PERIOD | auxiliar de importación |
| N | `SRCO_ID_PERSON` | real_STD_ID_PERSON | auxiliar de importación |
| U | `SSP_ID_EJECUCION` | Nº ref. excel | auxiliar de importación |
| BG | `STD_MAILING_CHECK` | real_STD_MAILING_CHECK | dato de negocio |
| CJ | `SCO_ID_INT_ROLE_TYPE` | real_SCO_ID_INT_ROLE_TYPE | dato de negocio |
| CO | `SCO_ID_COMPL` | real_SCO_ID_COMPL | fórmula/default de plantilla |
| DE | `SCO_ID_EMPLOYEE_TYPE` | real_SCO_ID_EMP_TYPE | fórmula/default de plantilla |
| DK | `SCO_ID_CONTRACT` | real_SCO_ID_CONTRACT | fórmula/default de plantilla |
| DO | `SCO_DT_EXPECTED_END` | real_SCO_DT_EXPECTED_END | fórmula/default de plantilla |
| DQ | `SCO_DT_LAST_WORK` | real_SCO_DT_LAST_WORK | fórmula/default de plantilla |
| DS | `SCO_ID_DURATION` | real_SCO_ID_DURATION | fórmula/default de plantilla |
| DT | `SCO_PERCENT_PERIOD` | real_SCO_PERCENT_PERIOD | dato de negocio |
| EH | `SSP_NUM_PLURIEMPL` | NÚM. PLURIEMPLEO | dato de negocio |
| ER | `CSP_ID_CODE_DEP` | real_%JornadaParcial | dato de negocio |
| FC | `SSP_ID_MUJER_REINC` | real_SSP_ID_MUJER_REINC | fórmula/default de plantilla |
| GK | `ID_CURRENCY_BRUTO` | real_ID_CURRENCY_BRUTO | dato de negocio |
| GU | `SCO_ID_ORIGIN_TYPE` | real_SCO_ID_ORIGIN_TYPE | fórmula/default de plantilla |
| GY | `SCO_ID_PAYM_TYPE` | real_SCO_ID_PAYM_TYPE | dato de negocio |
| HA | `SCO_ID_COMP_BANK` | real_SCO_ID_COMP_BANK | dato de negocio |
| HG | `SSP_ID_EST_IRPF` | real_SSP_ID_EST_IRPF | dato de negocio |
| HO | `SSP_ID_CENT_COSTO1` | real_SCO_ID_REF_MOD | dato de negocio |
| HP | `SCO_OR_REF_MOD` | real_SCO_OR_REF_MOD | fórmula/default de plantilla |
| IB | `SCO_ID_BANK` | real_SCO_ID_BANK | dato de negocio |
| IC | `SCO_ID_BRANCH` | real_SCO_ID_BRANCH | dato de negocio |
| IE | `SSP_DC` | D.C. | dato de negocio |
| IF | `SCO_IBAN_CODE` | real_SCO_IBAN_CODE | dato de negocio |
| IG | `SCO_ID_STANDARD` | real_SCO_ID_STANDARD | dato de negocio |
| IH | `SCO_ID_ORIGIN_TYPE` | real_SCO_ID_ORIGIN_TYPE | dato de negocio |
| II | `SCO_IBAN_KEY` | CLAVE IBAN | dato de negocio |
| IM | `CSP_FUSION_ID` | real_STD_ID_EXTERN_ORG | fórmula/default de plantilla |

Además, la fila 4 ofrece celdas visibles sin identificador técnico propio y sin input integrado, entre ellas **BJ/BK** (líneas de dirección 3/4), **DA** (horas semanales), **DD** (tipo empleado), **DJ** (tipo de contrato organizativo), **DN/DP** (finalización prevista y último día), **DR** (duración), **FB** (mujer reincorporada), **GT** (tipo de origen), **HF** (estado IRPF) y **GP** (fecha de extras). Requieren contrato funcional antes de crear nuevos controles o reutilizar datos de otro grupo.

## Campos por crear o resolver

- Siguen sin mapping fiable ocho fields ya visibles: comunidad de nacimiento, Department, fax, FIC específico, fecha de extras, modelo/semana de referencia, ordinal de banco persona y BIC. Sus valores permanecen únicamente en el borrador local. La UI no presenta hoy controles para varios datos de negocio de la tabla anterior (p. ej., mailing check, tipo empleado, complementos, fechas previstas, pluriempleo, moneda del bruto, estado IRPF y componentes bancarios adicionales). Se deben definir semántica, catálogo y obligatoriedad antes de integrarlos.
- **Comunidad de nacimiento:** AL es visible, pero AM (aunque la fila 4 diga `real_SCO_BIRTH_ID_GEO_DIV`) pertenece en la fila 5 a `CSP_ID_ATRADIUS_JOB`. Escribir ahí la comunidad corrompería Atradius Job.
- **Department:** ER pertenece a `CSP_ID_CODE_DEP`; el catálogo de Department entrega `CSP_ID_DEPARTMENT`. No hay equivalencia demostrada por el XLS. **Fax:** AZ/BA están vinculadas a Estructura y Centro de Trabajo Funcional en esta plantilla, aunque otras hojas muestren rótulos de fax.
- **Extras:** GP es visible, pero GQ (rotulada `real_SSP_FEC_EXTRAS` en fila 4) es técnicamente `SCO_GB_IBAN`; se reserva para IBAN. **Modelo/Semana:** HN es visible, HO es `SSP_ID_CENT_COSTO1` y HP solo `SCO_OR_REF_MOD`; falta la correspondencia segura del identificador de modelo. **Ordinal banco:** solo hay indicios en `SRCO_PARAM_EXCEL`, sin destino confirmado en `AltaNueva`. **BIC** y **FIC específico** no tienen celda confirmable.
- **Proyecto:** CZ es `SSP_ID_CENT_COSTO` y recibe el ID literal de PeopleNet; CY se conserva. **IBAN:** GQ es `SCO_GB_IBAN`. **Otro formato:** HZ visible e IA técnica son `SCO_ID_BANK_BRANCH`, e ID es `SCO_ACCOUNT_NUMBER`. La rama IBAN limpia HZ/IA/ID; la otra limpia GQ. BIC nunca cruza el payload. Las celdas bancarias **IB/IC/IE/IF/IG/IH/II** conservan ejemplos, defaults o fórmulas de la plantilla. Debe confirmarse con el importador cómo las interpreta cuando solo se aportan las columnas verificadas.
- Las copias de pago de Nómina **GY/HA** conservan exactamente su contenido y fórmulas de la plantilla; los catálogos elegidos se escriben en **HV/HW** y **HX/HY** de Datos de pago. `CH/CI` sí reciben la entidad legal seleccionada para la sociedad operativa. No se ejecuta un alta SOAP real durante las pruebas.

## Comportamiento de escritura y validación

El servidor exige Puesto o Posición, verifica los IDs de catálogo contra PeopleNet de la sociedad operativa y requiere los campos marcados como obligatorios que poseen mapping confirmado. Valida fechas reales, números finitos, checks booleanos, listas fijas de jornada e IBAN. Solo procesa la métrica de ocupación elegida, los segmentos de S.S. con «Con número», la jornada parcial en su rama, el porcentaje de minusvalía con «Con minusvalía» y el formato bancario elegido. Los valores retenidos al cambiar de rama no se envían ni se escriben. Fechas, importes, porcentajes y conteos se guardan como números Excel; IDs y segmentos se guardan como texto literal para preservar ceros iniciales. Se copia `Hire_1_PERSONA.xls` y Excel COM edita exclusivamente las columnas de `WRITTEN_COLUMNS`; las demás hojas, nombres definidos, fórmulas y defaults permanecen en la copia.
