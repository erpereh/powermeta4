# Estado del mapping Excel del alta de personas

Fuente auditada: `fuentes/HIRE/Hire_1_PERSONA.xls`, hoja `AltaNueva`, fila **5** (identificador técnico), con las cuatro confirmaciones explícitas del usuario del **2026-09-28** descritas abajo y la reparación de tres enlaces de importación del **2026-09-30**. La fila 4 se usa solo para reconocer la columna visible; sus rótulos `real_*` pueden estar desactualizados. La UI contiene **109 fields**: **103 integrados**, **0 con mapping sin confirmar** y **6 controles solo UI**. Department conserva un identificador antiguo pendiente de confirmar. Las columnas indicadas son las que escribe el generador; «Sí» significa que se crea una instrucción Excel, incluso cuando el valor vacío provoca `ClearContents`. Las monedas opcionales de nómina y cuenta solo generan instrucciones cuando tienen valor.

## Confirmaciones explícitas del usuario

Estos destinos manuales se conservan. El writer repara en la copia las cabeceras vacías de AL5, GP5 y HN5 para que el importador reconozca los valores:

- Comunidad de nacimiento: catálogo `STD_ID_GEO_DIV`, elemento importado `SCO_BIRTH_ID_GEO_DIV` → **AL**. La UI conserva `país/comunidad` para distinguir opciones y completar país/provincia; el payload y Excel reciben solo el ID de comunidad. AL5 se vincula a `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_BIRTH_ID_GEO_DIV`. **AM** conserva Atradius Job.
- Department: `CSP_ID_DEPARTMENT` → **ER**, como texto literal. Su cabecera antigua `CSP_ID_CODE_DEP` no altera este contrato. Department es obligatorio y se valida contra su catálogo.
- Fecha Extras: `SSP_FEC_EXTRAS` → **GP**, como número de fecha Excel, con la misma validación y conversión que las demás fechas. GP5 se vincula a `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_FEC_EXTRAS`. No lleva SELECT ni catálogo. **GQ** conserva el IBAN.
- Modelo/Semana: la opción identifica el par modelo/ordinal; `SCO_ID_REF_MOD` → **HN** y `SCO_OR_REF_MOD` → **HP**, ambos como texto literal. HN5 se vincula a `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_REF_MOD`; HP5 ya contiene el enlace del ordinal. `SCO_ID_WEEK_MDL` solo aporta información descriptiva. **HO** conserva el centro de coste de la plantilla.

Comunidad, Fecha Extras y Modelo/Semana son opcionales: un valor vacío limpia exclusivamente AL, GP y HN/HP respectivamente. Antes de editar, COM admite estas tres cabeceras vacías o ya corregidas y verifica también AM5, GQ5, HO5 y HP5; rechaza una plantilla incompatible. Los tres SELECT facilitados se ejecutan literalmente, sin aliases, filtros ni columnas añadidos; las expresiones sin alias se adaptan desde la clave vacía del resultado SQL Server. Los tests comprueban los identificadores reales del XLS generado; solo Department mantiene una excepción explícita por su cabecera antigua. Véase el [diagnóstico e inventario de obligatoriedad](alta-obligatorios-y-diagnostico.md).

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
| `birthCommunity` · ID Comunidad nacimiento | integrado | `SCO_BIRTH_ID_GEO_DIV` (catálogo `STD_ID_GEO_DIV`) | AL (enlace reparado en AL5) | Sí | — |
| `birthCountry` · ID País nacimiento | integrado | `SCO_BIRTH_ID_COUNTRY` | AO (visible), AP (técnica) | Sí | — |
| `gender` · ID Sexo | integrado | `STD_ID_GENDER` | AQ (visible), AR (técnica) | Sí | — |
| `maritalStatus` · ID Estado civil | integrado | `STD_ID_MARITAL_STAT` | AS (visible), AT (técnica) | Sí | — |
| `hireDate` · Fecha de alta | integrado | `SRCO_DT_HIRE` | D (visible), E (técnica) | Sí | — |
| `atradiusId` · ID Atradius | integrado | `CSP_ID_ATRADIUS` | IS (técnica) | Sí | — |
| `atradiusJobCode` · ID Atradius Job Code | integrado | `CSP_ID_ATRADIUS_JOB` | AM (técnica) | Sí | — |
| `atradiusCategory` · ID Categoría Atradius | integrado | `CSP_ID_CATEG_ATRADIUS` | T (técnica) | Sí | — |
| `department` · ID Department | integrado | `CSP_ID_DEPARTMENT` | ER (confirmación del usuario) | Sí | — |
| `phone` · Teléfono | integrado | `STD_NAT_REGION_CODE_PHONE, STD_PHONE` | AU (técnica), AV (técnica), IO (técnica) | Sí | — |
| `mobile` · Móvil | integrado | `STD_NAT_REGION_CODE_CELL, STD_MOVIL` | AW (técnica), AX (técnica) | Sí | — |
| `email` · Correo electrónico | integrado | `STD_EMAIL, STD_EMAIL_ATRADIUS` | AY (técnica), IQ (técnica) | Sí | — |
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
| `project` · Proyecto | integrado (fijo) | `SSP_ID_CENT_COSTO` | CZ (técnica) = `000000\|000000` | No (solo lectura) | — |
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
| `extrasDate` · Fecha Extras | integrado | `SSP_FEC_EXTRAS` | GP (enlace reparado en GP5) | Sí | — |
| `payrollCurrency` · ID Moneda | integrado | `ID_CURRENCY` | GV (visible), GW (técnica) | Solo con valor; vacío conserva valor/fórmula | — |
| `union` · ID Sindicato | integrado | `SSP_ID_SINDICATO` | GR (visible), GS (técnica) | Sí | — |
| `variableCompensationMode` · Tipo modalidad Variable | integrado | `CSP_TP_MOD_VAR` | IU (técnica) | Sí | — |
| `irpfType` · ID Tipo del IRPF | integrado | `SSP_ID_TP_IRPF` | HB (visible), HC (técnica) | Sí | — |
| `perceptionKey` · ID Clave percepción | integrado | `SSP_ID_CLAVE_PERCEP` | HD (visible), HE (técnica) | Sí | — |
| `referenceModelWeek` · ID Modelo/Semana de referencia | integrado | `SCO_ID_REF_MOD, SCO_OR_REF_MOD` | HN (modelo, enlace reparado en HN5), HP (ordinal) | Sí | — |
| `timeManagementPay` · Pago con gestión del tiempo | integrado | `SSP_PAGO_TA` | HR (visible), HS (técnica) | Sí | — |
| `paymentCurrency` · ID Moneda | integrado | `ID_CURRENCY` | HT (visible), HU (técnica) | Sí | — |
| `paymentType` · ID Tipo pago | integrado | `SCO_ID_PAYM_TYPE` | HV (visible), HW (técnica) | Sí | — |
| `companyBank` · ID Banco empresa | integrado | `SCO_ID_COMP_BANK` | HX (visible), HY (técnica) | Sí | — |
| `bankFormatChoice` · Formato: IBAN / Otro formato | solo UI | `—` | — | No | Selector IBAN/Otro |
| `bankAccount` · Cuenta bancaria | solo UI | `—` | — | No | Selector IBAN/Otro |
| `iban` · IBAN | integrado | `SCO_GB_IBAN` | GQ (técnica) | Sí | IBAN |
| `bankBranch` · Sucursal bancaria | integrado | `SCO_ID_BANK_BRANCH` | HZ (visible), IA (técnica) | Sí | Otro formato |
| `accountNumber` · Nº de cuenta | integrado | `SCO_ACCOUNT_NUMBER` | ID (técnica) | Sí | Otro formato |
| `accountCurrency` · ID Moneda | integrado | `ID_CURRENCY_2` | IJ (visible), IK (técnica) | Solo con valor; vacío conserva valor/fórmula | — |

## Subcampos de controles compuestos

Los controles compuestos se desglosan en sus inputs reales. Un mismo identificador puede tener dos celdas técnicas: `STD_PHONE` se escribe en **AV e IO**. Los segmentos del número de S.S. conservan ceros iniciales.

| Control.subcampo | Estado | Identificador técnico | Columna(s) | ¿Se escribe? | Rama |
|---|---|---|---|---|---|
| `phone.phonePrefix` | integrado | `STD_NAT_REGION_CODE_PHONE` | AU (técnica) | Sí | — |
| `phone.phoneNumber` | integrado | `STD_PHONE`, `STD_PHONE` | AV (técnica), IO (técnica) | Sí | — |
| `mobile.mobilePrefix` | integrado | `STD_NAT_REGION_CODE_CELL` | AW (técnica) | Sí | — |
| `mobile.mobileNumber` | integrado | `STD_MOVIL` | AX (técnica) | Sí | — |
| `address.addressLine1` | integrado | `STD_ADDRESS_LINE_1` | BH (técnica) | Sí | — |
| `address.addressLine2` | integrado | `STD_ADDRESS_LINE_2` | BI (técnica) | Sí | — |
| `ssNumber.ssNumberPrefix` | integrado | `SSP_PROV_NUM_SS` | DW (técnica) | Sí | Solo Con número |
| `ssNumber.ssNumberBody` | integrado | `SSP_NUM_SS` | DX (técnica) | Sí | Solo Con número |
| `ssNumber.ssNumberSuffix` | integrado | `SSP_DIG_NUM_SS` | DY (técnica) | Sí | Solo Con número |
| `replacedPersonSsNumber.replacedSsPrefix` | integrado | `SRSP_PROV_NUSS` | FF (técnica) | Sí | — |
| `replacedPersonSsNumber.replacedSsBody` | integrado | `SRSP_NUSS` | FG (técnica) | Sí | — |
| `replacedPersonSsNumber.replacedSsSuffix` | integrado | `SRSP_DIG_NUSS` | FH (técnica) | Sí | — |

## Identificadores de la fila 5 sin input que los escriba

Cada fila de esta tabla es una columna técnica real de `AltaNueva` que queda fuera de `WRITTEN_COLUMNS`. «Fórmula/default» significa que la fila 6 contiene una fórmula conservada, no que el formulario deba calcularla.

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
| FC | `SSP_ID_MUJER_REINC` | real_SSP_ID_MUJER_REINC | fórmula/default de plantilla |
| GK | `ID_CURRENCY_BRUTO` | real_ID_CURRENCY_BRUTO | dato de negocio |
| GU | `SCO_ID_ORIGIN_TYPE` | real_SCO_ID_ORIGIN_TYPE | fórmula/default de plantilla |
| GY | `SCO_ID_PAYM_TYPE` | real_SCO_ID_PAYM_TYPE | dato de negocio |
| HA | `SCO_ID_COMP_BANK` | real_SCO_ID_COMP_BANK | dato de negocio |
| HG | `SSP_ID_EST_IRPF` | real_SSP_ID_EST_IRPF | dato de negocio |
| HO | `SSP_ID_CENT_COSTO1` | real_SCO_ID_REF_MOD | dato de negocio |
| IB | `SCO_ID_BANK` | real_SCO_ID_BANK | dato de negocio |
| IC | `SCO_ID_BRANCH` | real_SCO_ID_BRANCH | dato de negocio |
| IE | `SSP_DC` | D.C. | dato de negocio |
| IF | `SCO_IBAN_CODE` | real_SCO_IBAN_CODE | dato de negocio |
| IG | `SCO_ID_STANDARD` | real_SCO_ID_STANDARD | dato de negocio |
| IH | `SCO_ID_ORIGIN_TYPE` | real_SCO_ID_ORIGIN_TYPE | dato de negocio |
| II | `SCO_IBAN_KEY` | CLAVE IBAN | dato de negocio |
| IM | `CSP_FUSION_ID` | real_STD_ID_EXTERN_ORG | fórmula/default de plantilla |

Además, la fila 4 ofrece celdas visibles sin identificador técnico propio y sin input integrado, entre ellas **BJ/BK** (líneas de dirección 3/4), **DA** (horas semanales), **DD** (tipo empleado), **DJ** (tipo de contrato organizativo), **DN/DP** (finalización prevista y último día), **DR** (duración), **FB** (mujer reincorporada), **GT** (tipo de origen) y **HF** (estado IRPF). Requieren contrato funcional antes de crear nuevos controles o reutilizar datos de otro grupo.

## Campos por crear o resolver

- La UI no presenta hoy controles para varios datos de negocio de la tabla anterior (p. ej., mailing check, tipo empleado, complementos, fechas previstas, pluriempleo, moneda del bruto, estado IRPF y componentes bancarios adicionales). Se deben definir semántica, catálogo y obligatoriedad antes de integrarlos.
- **Proyecto:** CZ es `SSP_ID_CENT_COSTO` y el importador espera el valor de la lista Meta4 `<centro>|<proyecto>`; la parte tras `|` es la columna obligatoria «Proyecto» del histórico de centro de coste. Solo `000000|000000` («Sin Centro de Costo», plantillas buenas) está demostrado, así que se escribe siempre ese valor y el campo es de solo lectura; otros centros quedan pendientes de un Excel generado por Meta4. CY se conserva. **IBAN:** GQ es `SCO_GB_IBAN`; con IBAN `ES` se derivan HZ/IA (banco+sucursal), IB (`SCO_ID_BANK`), IC (`SCO_ID_BRANCH`), IE (`SSP_DC`), ID (`SCO_ACCOUNT_NUMBER`), IF (`SCO_IBAN_CODE`) e II (`SCO_IBAN_KEY`); con IBAN extranjero solo IF/II y se limpian las partes CCC. **Otro formato:** HZ/IA = sucursal de 8 dígitos, IB/IC sus mitades, ID la cuenta de 10 dígitos e IE el DC calculado; GQ, IF e II se limpian. IG/IH conservan los defaults de la plantilla (`ES`/`01`). **IM** (`CSP_FUSION_ID`) se limpia en todas las filas: la plantilla traía el ID de la persona de ejemplo.
- Las copias de pago de Nómina **GY/HA** conservan exactamente su contenido y fórmulas de la plantilla; los catálogos elegidos se escriben en **HV/HW** y **HX/HY** de Datos de pago. `CH/CI` sí reciben la entidad legal seleccionada para la sociedad operativa. No se ejecuta un alta SOAP real durante las pruebas.

## Comportamiento de escritura y validación

El servidor exige Puesto o Posición, verifica los IDs de catálogo contra PeopleNet de la sociedad operativa y requiere los campos marcados como obligatorios que poseen mapping confirmado. Valida fechas reales, números finitos, checks booleanos, listas fijas de jornada e IBAN. Solo procesa la métrica de ocupación elegida, los segmentos de S.S. con «Con número», la jornada parcial en su rama, el porcentaje de minusvalía con «Con minusvalía» y el formato bancario elegido. Los valores retenidos al cambiar de rama no se envían ni se escriben. Fechas, importes, porcentajes y conteos se guardan como números Excel; IDs y segmentos se guardan como texto literal para preservar ceros iniciales. Se copia `Hire_1_PERSONA.xls` y Excel COM repara exclusivamente AL5, GP5 y HN5 y edita las columnas de `WRITTEN_COLUMNS`. Primero copia las filas adicionales desde la fila 6 intacta y después aplica los datos. GV/GW e IJ/IK vacías no se editan; conservan exactamente el valor o fórmula del XLS, con el desplazamiento de referencias relativas propio de Excel para las filas copiadas. Las demás hojas y nombres definidos se conservan.
