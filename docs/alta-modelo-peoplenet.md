# Modelo del alta de empleado en PeopleNet

Cómo graba Meta4 un alta en la base de PeopleNet, para poder reproducirla con
`INSERT` desde powermeta4 en vez de importar el Excel con `SRTC_LAUNCH_IMPORT`.

Fuentes, todas leídas con `SELECT` en `M4PRENOMINA` (2026-11-24):

- Diccionario Meta4: reglas LN4 (`M4RCH_RULES3`), categoría de traspaso
  `SAVE_HIRE` (`M4RCH_CATEGORY_GRP`, `M4RCH_GROUPS`, `M4RCH_GROUP_MAPP`,
  `M4RCH_ITEMS_MAPPED`) y su traducción a tabla y columna físicas
  (`M4RCH_ITEMS`, `M4RCH_TIS`, `M4RDC_REAL_FIELDS`).
- Perfil agregado de las **69 altas de CYC de 2026 con un solo periodo**:
  cuántas filas y columnas rellenan y, solo en columnas técnicas con tres
  valores distintos como mucho, qué valor llevan. No incluye datos de ninguna
  persona.
- Mapeo del formulario y del Excel: [alta-excel-mapping-status.md](alta-excel-mapping-status.md).

## Resumen

1. El importador lee la hoja `AltaNueva` y vuelca cada columna en los ítems
   del alta (`SRCO_PA_HIRE`, `SRCO_PA_HIRE_WIZ_PERS_DATA`,
   `SRCO_PA_HIRE_WIZ_PAYROLL`…). La fila 5 del Excel dice qué ítem es cada
   columna.
2. `SRCO_SAVE_HIRE` (versión `SRSP_PA_HIRE`, la que deja la fila de
   `M4CSP_H_COMP_JUBILACION`) hace esto:
   - Calcula el ID con `SRCO_BLOCK_BEFORE_PERSIST`, que lee y sube
     `M4CSP_BLOCK_SEQ`. Solo lo hace si «ID PERSONA» viene vacío.
   - Llama a `SRCO_MAKER_HIRE`, que abre una transacción y ejecuta la
     categoría `SAVE_HIRE`.
   - Si el alta falla, resta 1 al contador (FADRAO, 2019).
   - Reabre el usuario del portal (`M4RSC_APPUSER.END_DATE`) y, en los
     empleados que no son becarios, crea `M4CSP_H_COMP_JUBILACION`.
3. `SAVE_HIRE` encadena 108 grupos de traspaso sobre tres mantenimientos:
   - persona (`*_PA_MN_INF_PERSON`);
   - periodo de alta (`*_PA_MN_HR_PERIOD`);
   - rol (`*_PA_MN_HR_ROLE`).

   Cada grupo copia ítems o ejecuta un método. Cada mantenimiento termina con
   un `PERSIST_TREE`, que graba todas sus tablas en la misma transacción.
4. La persistencia añade lo que no viene del Excel:
   - las columnas de sistema `ID_APPROLE`, `ID_SECUSER` y `DT_LAST_UPDATE`;
   - las fechas de fin a `4000-01-01`;
   - los valores por defecto de los ítems;
   - los ordinales;
   - la auditoría `AUC_*`.

   No hay triggers en estas tablas: lo que no escriba powermeta4 no lo
   escribirá nadie.

## Lógica que hay que programar

Traducción de las reglas LN4 que se ejecutan en un alta nueva. Las fórmulas
están comprobadas contra las 69 altas de 2026, contando solo coincidencias.

### Valores por defecto de Meta4

Meta4 rellena cada columna vacía según el tipo extendido de su campo lógico:
`M4RDC_REAL_FIELDS` → `M4RDC_FIELDS.ID_TYPE` →
`M4RDC_EXTENDED_TPS.ID_DEFAULT_FUNC` y `DEFAULT_ARGS`. Las columnas marcadas
«defecto Meta4» en las tablas de abajo salen de aquí.

| Función | Valor | Ejemplos |
|---|---|---|
| 3 | fecha y hora de la transacción | `DT_LAST_UPDATE` |
| 6, 7, 8 | número, texto o fecha fijos (`DEFAULT_ARGS`) | fechas de fin `4000-01-01`, indicadores `0` |
| 10 | siguiente número dentro del resto de la clave (`MAX + 1`, empieza en 1) | `STD_OR_HR_PERIOD`, `SCO_OR_HR_ROLE`, `STD_OR_PHONE`, `STD_OR_MAIL`, `SCO_OR_ACCOUNT`, `CSP_ID_TIPO_JORNADA` |
| 19 | `NEXT VALUE FOR M4RDC_SEQUENCE` | `ID_EXECUTION` de la auditoría |

Otras reglas de la capa de base de datos:

- `ID_SECUSER` e `ID_APPROLE` se graban con el usuario y el rol de la sesión
  Meta4.
- `ID_ORGANIZATION` es `0000` en las tablas globales (`ID_ORG_MONO`:
  persona, dirección, teléfono, correo) y la sociedad del alta en las demás.
- Un campo lógico repartido en varias tablas físicas se graba en todas, por
  ejemplo `CSP_ID_FUSION` en `STD_PERSON` y `STD_PERSON1`.

### Claves

- **ID de la persona:** si «ID PERSONA» viene vacío,
  `SCO_GET_PERSON_SEQUENCE.SCO_GET_ID_PERSON` lo saca del contador
  `M4CSP_BLOCK_SEQ`. En CYC la máscara es de 4 dígitos y los becarios llevan
  «BC».
- **Herencia de claves:** cada nodo hijo recibe la clave de su padre por los
  conectores del Meta4Object (`STD_ID_HR`, `SCO_ID_HR`, `SSP_ID_HR`,
  `ID_HR`, `STD_ID_PERSON`…).
- **Ordinal de rol:** los hijos del rol (puesto, lugar, unidad, tiempo,
  valores) copian `SCO_OR_HR_ROLE` del rol, como en sus `SHCO_INSERT`.
- **Fechas de inicio:** son la fecha de alta en todas las tablas del alta,
  69/69 en rol, puesto, lugar, unidad, TC1, modelo variable e IRPF.
- **Datos de pago:** `M4SCO_PAYMENT_DATA.SCO_ID_PERSON` = `SCO_ID_HR`
  (`SHCO_INSERT` de SRSP).
- **`STD_HR`:** se crea con la persona (`SRCO_INSERT_HR`).

### Campos calculados

- **Nombre completo:** `STD_N_FAM_NAME_1` = primer apellido + « » + segundo
  apellido. `SCO_GB_NAME` = `STD_N_FAM_NAME_1` + «, » + `STD_N_FIRST_NAME`
  (69/69).
- **Dirección:** `SSP_DISTRIT_POSTAL` = `STD_ZIP_CODE`. `SCO_GB_ADDRESS` es la
  variante española de `SCO_GENERATE_GB_ADDRESS` (78/78 exactas; detalle en
  `STD_ADDRESS`).
- **Banco:** `SCO_GB_BANK` = `SCO_GB_IBAN`. `SSP_BIC_CODE` es el SWIFT de la
  sucursal. `PLCO_IBAN_COMPLETE` = 1.
- **Nombre del rol:** «J-» + nombre del puesto, o «P-» + nombre de la
  posición (`SHCO_SET_ROLE_NAME`).
- **Estructura:** `CSP_PLAZA_GARAJE` es «S» con estructura 1 o 2 y «N» en las
  demás.
- **Agrupación de categoría** (`M4CSP_H_HR_JOB_AGRUPA_CAT`): `CALCULA_VACIOS`
  la calcula a partir de la categoría del puesto, de si la persona está en el
  organigrama y de la familia interna del puesto.
- **Experiencia interna** (`STD_HR_PREV_JOBS`): `CSP_ACT_CV` borra y vuelve
  a crear una fila por puesto del historial, con `CSP_EXP_INT = '1'` y el
  comentario «INSERTADO AUTOMÁTICAMENTE DESDE HISTORICO DE PUESTO/ROL».
- **Tras grabar** (`SRCO_SAVE_HIRE`, SRSP):
  - en los empleados (tipo 01) que no son becarios, una fila en
    `M4CSP_H_COMP_JUBILACION` con `CSP_ID_TIPO_JUBILACION = '1'`, inicio en la
    fecha de alta y fin en `4000-01-01`;
  - si ya existe usuario del portal, su `END_DATE` se pone a `4000-01-01`.
- **Datos temporales:** `SRCO_DELETE_TMP_DATA` borra al terminar los datos de
  contrato de `M4SSP_TMP_DATCONT`, que `SRSP_PASAR_TMP_A_PERIOD` ya ha pasado
  al periodo.

### Métodos que no hacen nada en un alta nueva

- **`ZOOM_HIRE`** (persona, periodo y rol) solo carga datos existentes.
  Cuando el ID o el documento ya existen, la grabación modifica a esa persona
  en vez de crearla. Por eso powermeta4 debe seguir comprobando antes que el
  documento y el ID están libres.
- **`SRCO_MAIN_ROLE`** solo cierra un rol principal anterior.
- **`SRCO_DELETE_PY_VALUES`** y **`SRCO_SAVE_PY_VALUES`** solo actúan con
  valores de nómina en el alta.
- **`SRCO_CALC_OR_ACCOUNT`** copia el ordinal de la cuenta al periodo.

### Validaciones que hay que reproducir

Meta4 las ejecuta de dos maneras:

- **Categorías del alta**, antes de grabar: `VALIDATE_PERSON`,
  `CHECK_DUPLICITY`, `CONTROL_GB_ADDRESS`, `SRCO_VALIDATE_IBAN` y
  `VALIDATE_IBAN_KEY`, lanzadas desde `SRCO_PA_HIRE` (`SRCO_VAL_AGE`,
  `SRCO_CHECK_DUPLICITY`, `SRCO_CONTROL_GB_ADDRESS`,
  `SRCO_PA_HIRE_WIZ_PAYROLL.SRCO_VALIDATE_IBAN`).
- **`SHCO_INSERT` de cada nodo**, al grabar. Si una falla, Meta4 deshace
  toda la transacción (`EndVMTransaction(M4_ROLLBACK_RESUME)`) y no se crea
  nada.

Configuración leída en `M4RAV_APP_VAL_LG1` (aplicación `CONFIGURATION`):

| Sección · clave | Valor | Efecto |
|---|---|---|
| `CALC_ID_PERSON` · `CALC_MODE` | `0` | ID calculado sin bloqueos, antes de la transacción |
| `SCO_PAYROLL` · `SCO_NEW_ROLE_DT_START_PAY` | `0` | `SRCO_CHECK_DT_START_PAY` no se aplica |
| `SCO_PAYROLL` · `SCO_MNG_LOCKED_PAYS` | `1` | pagas por tipo de bloqueo (solo afecta a valores de nómina) |
| `SCO_PAYROLL` · `SCO_ALLOW_RETRO_PERSON_MOD` | `0` | sin valores retroactivos en modificaciones |
| `SSP_PAGOS` · `SSP_SOLICITAR_BIC` | `1` | el BIC es obligatorio |
| `CALC_ID_PERSON` · `TIPO_COD_EMP_ALT` | sin valor | máscara del ID: relleno a la izquierda con la máscara de `STD_PERSON` (no localizada en el diccionario; los IDs de CYC tienen 4 cifras) |

Estándar del entorno: `ES`. Las variantes por país (`..ES`, `..FR`, `..UK`)
eligen la española.

| Validación | Regla Meta4 | Qué hay que comprobar en powermeta4 |
|---|---|---|
| Fecha de nacimiento | `SRCO_CONTROL_DATE` | no posterior a hoy |
| Persona duplicada | `SRCO_CHECK_DUPLICITY_SELECT` | cuenta las personas de `STD_PERSON` con el mismo `SCO_GB_NAME` exacto («apellidos, nombre»). En Meta4 es un aviso (Aceptar o cancelar), no un error. Solo se lanza con apellido y nombre |
| Documento repetido | (control de powermeta4) | `STD_SSN` libre en `STD_PERSON` y no repetido en el lote: si existe, `ZOOM_HIRE` modificaría a esa persona |
| ID libre | (control de powermeta4) | `STD_ID_PERSON` libre en `STD_PERSON` |
| Dirección (ES) | `SCO_CONTROL_GB_ADDRESS..ES` | obligatorios tipo de vía, número, código postal de 5 caracteres, población, provincia, comunidad y país. La línea 1 no cambia en España (`SCO_GENERATE_ADDRESS_LINE_1`) |
| IBAN obligatorio | `SRSP_CONTROL_OBLIGATORIEDAD` | con `PLCO_IBAN_COMPLETE = 1` el IBAN es obligatorio. Sin IBAN completo son obligatorios sucursal y número de cuenta, y `SCO_GB_BANK` = sucursal + « » + cuenta |
| Formato del IBAN | `SRSP_FORMATO_IBAN` | mayúsculas y sin espacios; de 5 a 34 caracteres; país en `SCO_TR_COUNTRY_ISO`; 2 letras + 2 dígitos. En España, 20 dígitos tras los 4 primeros |
| Dígito de control | `SRSP_IBAN_KEY` | ISO 13616: mover los 4 primeros al final, letras a números (A=10…), módulo 97 por bloques de 9, `98 − resto` con 2 cifras. Tiene que ser igual a las posiciones 3–4 |
| Guardado del IBAN | `SRSP_FORMATO_IBAN` | `SCO_GB_IBAN` en grupos de 4 separados por espacio (65/65). En España: `SCO_ID_BANK_BRANCH` = posiciones 5–12, `SSP_DC` = 13–14 (numérico), `SCO_ACCOUNT_NUMBER` = 15–24 (62/62). `SCO_IBAN_CODE` = país. `SCO_IBAN_KEY` vacío (65/65). `SCO_GB_BANK` = `SCO_GB_IBAN` |
| BIC | `SRSP_DEDUCIR_BIC`, `SRSP_FORMATO_BIC` | si falta y el IBAN es español, se busca en `M4SSP_BANK_BIC_CODES` por el banco (posiciones 5–8; 60/62). Sin BIC, error. Formato: mayúsculas, 8 u 11 caracteres, 4 letras de banco, país igual al del IBAN y el resto alfanumérico |
| Cuenta repetida | `SHCO_CHECK_DUPL_ACC_NUM` (SRSP) | la misma persona no puede tener dos cuentas con el mismo número desde la misma fecha |
| Estado civil | `SHCO_CHECK_MARITAL_STATUS` | dos registros seguidos no pueden tener el mismo estado (en un alta hay uno) |
| Contacto principal | `SHCO_CHECK_MAIN_CONTACT` | con un solo contacto, `STD_MAIN_CONTACT = '1'`; con varios, solo uno principal |
| Datos de pago | `SHCO_VAL_PAYMENT_DATA` (SRSP) | `SCO_OR_ACCOUNT` obligatorio salvo con forma de pago `4`. Con varios datos de pago, el del empleado (`SCO_EMP_CHECK = '1'`) debe cubrir las fechas y los demás necesitan fórmula de pago |
| Familia | `SHCO_CHECK_OVERLAPPING_FAMILY`, `SHCO_CHECK_FAMILY` | sin solapes; solo si el alta trae familiares |
| Fecha de inicio de pago | `SRCO_CHECK_DT_START_PAY` | no se aplica en CYC (`SCO_NEW_ROLE_DT_START_PAY = 0`) |

#### Qué valida ya powermeta4

El formulario y la carga masiva ya validan, en `src/lib/meta4/hire/validate.ts`,
`bank.ts` y `catalogs.ts`:

- **Fecha de nacimiento:** anterior a la fecha de alta, con edad mínima. Es
  más estricto que Meta4.
- **Dirección:** todos los campos que exige `SCO_CONTROL_GB_ADDRESS..ES`, con
  el código postal de 5 dígitos y que cuadre con la provincia.
- **IBAN:** módulo 97 y descomposición española.
- **Documento e ID:** el servicio comprueba que están libres en
  `STD_PERSON` antes de lanzar.

Falta añadir al grabar con `INSERT`:

1. **BIC:** buscarlo en `M4SSP_BANK_BIC_CODES` por el banco del IBAN español.
   Si no está, parar con un error como Meta4 (`SSP_SOLICITAR_BIC = 1`). Si
   llega uno, validar su formato.
2. **Persona duplicada:** si ya existe alguien con el mismo `SCO_GB_NAME`,
   avisar y pedir confirmación, como el «Aceptar o cancelar» de Meta4.
3. **Campos derivados al grabar:**
   - `SCO_GB_IBAN` en grupos de 4;
   - `SCO_IBAN_CODE`;
   - `SCO_IBAN_KEY` vacío;
   - `STD_MAIN_CONTACT = '1'` con un solo contacto;
   - `SCO_OR_ACCOUNT` en los datos de pago.

## Riesgos de grabar con `INSERT`

- **Validaciones:** se pierden todas las que hace Meta4. Entre ellas, la
  duplicidad de documento (`PERSON_DUPLICITY`), el IBAN y su clave, la
  máscara del ID, el solape de periodos y la fecha de inicio de pago
  (`SRCO_CHECK_DT_START_PAY_INSAVE`). Hay que reproducirlas en el servidor.
- **Métodos LN4:** varios grupos no copian datos, sino que ejecutan lógica,
  por ejemplo `SRCO_CALC_OR_ACCOUNT`, `SRCO_DELETE_PY_VALUES` /
  `SRCO_SAVE_PY_VALUES`, `SRSP_LOAD_FAMILY_HIRE`, `SRSP_PASAR_TMP_A_PERIOD`
  o la afiliación (`M4SSP_AFI_MOVIM`). Su código está en `M4RCH_RULES3` y hay
  que traducirlo uno a uno; las columnas marcadas «calculada» abajo salen de
  ahí.
- **Caché:** Meta4 guarda en caché los datos de los Meta4Object. Un alta
  escrita por fuera puede no verse en la aplicación hasta que se refresque
  la caché. Hay que probarlo en PRE.
- **Una sola transacción:** todas las tablas, la auditoría y el contador
  `M4CSP_BLOCK_SEQ` deben ir en una única transacción de SQL Server, para que
  un fallo no deje una persona a medias.
- **Regla del proyecto:** hoy es «contra PeopleNet solo `SELECT`». Antes de
  escribir hay que aprobar la excepción y cambiar la conexión (el usuario
  actual es de lectura).

## Implementación en powermeta4

El alta directa está en `src/lib/meta4/hire/direct` y es el único camino del
alta: la importación del Excel por SOAP (`SRTC_LAUNCH_IMPORT`) se retiró el
2026-11-24. `META4_HIRE_MODE=plan` simula sin grabar.

- **`model.generated.json`** lo genera `npm run hire:model` (solo `SELECT`).
  Contiene:
  - los 92 grupos de `SAVE_HIRE`, resueltos por herencia: CSP sobre SRSP
    sobre SRCO. Cada paso se identifica por grupo, `ID_MAP` y `ID_T3_MAP_OR`,
    porque SRSP borra el paso de SRCO y añade el suyo con el mismo `ID_MAP`;
  - la tabla y columna física de cada paso, resueltas con el TI que Meta4 usa
    al ejecutar el nodo;
  - la definición de cada columna (clave, obligatoria, tipo extendido y
    valor por defecto, tipo SQL);
  - la auditoría;
  - las cabeceras y los valores propios de la plantilla, sin ninguna columna
    que rellene el formulario.
- **`items.ts`** calcula los valores de los ítems del alta: la fila del Excel
  (`cells.ts`, la misma que se enviaba a Meta4), los argumentos del alta y
  los ítems que el propio alta calcula.
- **`plan.ts`** construye todas las filas sin tocar la base: registros por
  nodo, valores por defecto de Meta4, claves, ordinales, reglas calculadas
  (`rules.ts`) y auditoría.
- **`lookups.ts`** lee antes de planificar el nombre del puesto o de la
  posición, los nombres geográficos y el BIC.
- **`write.ts`** graba cada persona en una transacción con la conexión
  `PEOPLENET_DB_WRITE_*`.
- **`service.ts`** encadena todo:
  1. elige el ID;
  2. hace las consultas previas y valida el BIC;
  3. avisa si ya existe alguien con el mismo nombre;
  4. planifica y graba;
  5. comprueba en `STD_PERSON` que la persona existe con su ID.

Decisiones contrastadas con las 69 altas de 2026:

- **Registros:** un grupo crea un registro en su nodo si recibe algún dato
  que no sea argumento del alta (los valores de la plantilla cuentan). Los
  grupos `++N` y los que dan otro valor a la clave (correo de tipo 9 y de
  tipo 2) crean otro registro.
- **Tablas físicas:** un registro da una fila en cada tabla física de su
  objeto lógico. Solo se escriben tablas con clave de persona: los nodos de
  catálogo, como `M4SSP_CONTRATO_INT`, solo se leen.
- **Tablas que no se escriben:**
  - `M4SSP_TMP_DATCONT`: temporal, Meta4 la borra al terminar;
  - `M4VCH_DMD_COMPNTS`: diccionario;
  - `M4SSP_H_IRPF`: la rellena el cálculo de nómina;
  - el grupo SRCO `PERIOD_PAYMENT_DATA`: lo sustituye
    `SRSP_PERIOD_DATOSPAGO_SAVE`, porque todas las filas reales tienen
    moneda.
- **Filas que necesitan su valor:** las tablas CYC de categoría solo se
  escriben si llega su valor principal; en ninguna alta real hay
  equivalencia de categoría.
- **Filas que se descartan:** una fila opcional a la que le falta un valor
  obligatorio de sus pasos se descarta como hace Meta4 (por ejemplo, el bruto
  anual vacío) y queda en `plan.skipped`.
- **Tablas que toda alta tiene** (`HIRE_CORE_TABLES`): si falta una o le
  falta un dato obligatorio, el plan da error.
- **Filas añadidas por reglas:**
  - `STD_HR` (`SRCO_INSERT_HR`);
  - el historial de puesto desde el puesto del rol;
  - la jubilación;
  - la experiencia interna.
- **Valores calculados:**
  - `EXT_TYPE = '1'` (6.346 filas desde 2026);
  - la moneda de la cuenta, que si llega vacía es la de pago o `EUR`: el
    `ESP` de la plantilla está anticuado y las cuentas reales son `EUR`;
  - `ID_SECUSER` y `ID_APPROLE`: usuario Meta4 de la sesión tal como está en
    `M4RSC_APPUSER.ID_APP_USER` y el rol de su conexión (`ID_APP_ROLE_CON`; si
    falta, `ID_APP_ROLE_DEF`), como en todas las altas reales.
- **Seguridad del rol:** como la LDB, la máscara del rol
  (`M4RSC_APPROLE.ID_RSM`) debe tener `MASK_INS = 1` en `M4RDC_SEC_LOBJ` para
  el objeto lógico de cada tabla escrita; la máscara `M4ADM` no tiene
  restricciones. Con `M4EMPLOYEE` faltan 11 objetos (`CYC_H_ESTRUCTURA`,
  `CSP_H_*`…) y el alta se rechaza antes de grabar.
- **Auditoría:** solo `AUC_STD_HR_PERIOD`, `AUC_H_HR_JOB`, `AUC_H_HR_WLOCATION`
  y `AUC_H_HR_WUNIT`, las únicas con filas desde 2026, aunque 21 objetos
  tengan auditoría activada.

## Orden de ejecución de `SAVE_HIRE`

Métodos LN4 que se ejecutan entre las copias de datos, en orden. Cada `PERSIST_TREE` graba el árbol completo de ese mantenimiento; ahí Meta4 calcula ordinales, valores por defecto y auditoría.

| Orden | Grupo | Método |
|---|---|---|
| 10001080.1000 | `PERSON_LOAD` | `SRCO_PA_WZ_HR_PERIOD.ZOOM_HIRE` |
| 10001080.1000 | `PERSON_LOAD` | `SRCO_PA_WZ_HR_ROLE.ZOOM_HIRE` |
| 10001080.1000 | `PERSON_LOAD` | `SRCO_PA_WZ_PERSON.ZOOM_HIRE` |
| 10011100.900 | `PERSON_SAVE` | `SRCO_PA_WZ_PERSON.PERSIST_TREE` |
| 10011100.1000 | `PERSON_SAVE` | `SRCO_PA_WZ_PERSON.SRCO_CALC_OR_ACCOUNT` |
| 11001090.1000 | `PERIOD_LOAD_SAVE` | `SRCO_PA_WZ_HR_PERIOD.ZOOM_HIRE` |
| 11001090.1000 | `PERIOD_LOAD_SAVE` | `SRCO_PA_WZ_HR_ROLE.ZOOM_HIRE` |
| 11001090.1000 | `PERIOD_LOAD_SAVE` | `SRCO_PA_WZ_PERSON.ZOOM_HIRE` |
| 11001101.1000 | `SRSP_LOAD_FAMILY_FROM_PERSON` | `SRCO_PA_WZ_HR_PERIOD.SRSP_LOAD_FAMILY_HIRE` |
| 11001150.1000 | `SRSP_PERIOD_LOAD_HR` | `SRCO_PA_WZ_FAMILY.LOAD_PRG` |
| 11001150.1000 | `SRSP_PERIOD_LOAD_HR` | `SRSP_PA_WZ_HR.LOAD_PRG` |
| 11001150.1000 | `SRSP_PERIOD_LOAD_HR` | `SRSP_PA_WZ_HT_SIT_IRPF.LOAD_PRG` |
| 11011050.1000 | `PERIOD_PRE_PERSIST_PY_VALUES` | `SRCO_PA_WZ_HR_PERIOD.SRCO_DELETE_PY_VALUES` |
| 11011100.1000 | `PERIOD_SAVE` | `SRCO_PA_WZ_HR_PERIOD.PERSIST_TREE` |
| 11011200.1000 | `PERIOD_SAVE_PY_VALUES` | `SRCO_PA_WZ_HR_PERIOD.SRCO_SAVE_PY_VALUES` |
| 12001090.1000 | `ROLE_LOAD_SAVE` | `SRCO_PA_WZ_HR_PERIOD.ZOOM_HIRE` |
| 12001090.1000 | `ROLE_LOAD_SAVE` | `SRCO_PA_WZ_HR_ROLE.ZOOM_HIRE` |
| 12001090.1000 | `ROLE_LOAD_SAVE` | `SRCO_PA_WZ_PERSON.ZOOM_HIRE` |
| 12011050.1000 | `ROLE_PRE_PERSIST_PY_VALUES` | `SRCO_PA_WZ_HR_ROLE.SRCO_DELETE_PY_VALUES` |
| 12011050.1000 | `ROLE_PRE_PERSIST_PY_VALUES` | `SRCO_PA_WZ_HR_ROLE.SRCO_CHECK_DT_START_PAY_INSAVE` |
| 12011100.1000 | `ROLE_SAVE` | `SRCO_PA_WZ_HR_ROLE.PERSIST_TREE` |
| 12011200.1000 | `ROLE_SAVE_PY_VALUES` | `SRCO_PA_WZ_HR_ROLE.SRCO_SAVE_PY_VALUES` |
| 13011100.5000 | `SRSP_IMPRC_PASAR_TMP_A_PERIOD` | `SSP_PA_IMPRC_MT_ALTA.SRSP_PASAR_TMP_A_PERIOD` |

## Tablas que escribe el alta

Orden de grabación. «Entrada» viene del Excel o de los argumentos del alta; «constante» lleva el mismo valor en todas las altas analizadas; «calculada» la rellena Meta4 y hay que reproducir su regla.

### `M4SSP_TMP_DATCONT`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SSP_ID_CATEGORIA` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SSP_ID_CATEGORIA` ← Categoría (`category`, CX) | 0 |
| `SSP_ID_CONVENIO` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_CONVENIO` ← ID Convenio (`payrollAgreement`, GI) | 0 |
| `SSP_ID_TP_DOC` | PK1 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_ID_TP_DOC` ← ID Tipo documento (`documentType`, W) | 0 |
| `STD_SSN` | PK2 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_SSN` ← Núm. de documento (`documentNumber`, Y) | 0 |
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 0 |
| `SSP_FEC_INI_CONTRA` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SSP_ID_CABEC_TC1` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SSP_ID_CONT_INTERN` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SSP_PRIM_APELLIDO` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `STD_ID_LEG_ENT` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `STD_ID_WORK_LOCAT` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `STD_N_FAM_NAME_1` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `STD_N_FIRST_NAME` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |

### `STD_PERSON`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `STD_ID_PERSON`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK2 obligatoria | defecto Meta4 | texto fijo `0000` | 69/69 |
| `STD_ID_PERSON` | PK1 obligatoria | clave | ID de la persona (lo hereda del nodo padre) | 69/69 |
| `STD_N_FAM_NAME_1` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_N_FAMILY_NAME_1` ← Primer apellido (`lastName1`, O, P) | 69/69 |
| `STD_N_MAIDEN_NAME` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_N_MAIDEN_NAME` ← 2º apellido (`lastName2`, Q) | 69/69 |
| `STD_N_FIRST_NAME` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_N_FIRST_NAME` ← Nombre (`firstName`, R) | 69/69 |
| `STD_ID_GENDER` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_GENDER` ← ID Sexo (`gender`, AR) | 69/69 |
| `STD_DT_BIRTH` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_DT_BIRTH` ← Fecha nacimiento (`birthDate`, AD) | 69/69 |
| `STD_ID_COUNTRY` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_BIRTH_ID_COUNTRY` ← ID País nacimiento (`birthCountry`, AP) | 67/69 |
| `STD_ID_GEO_DIV` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_BIRTH_ID_GEO_DIV` ← ID Comunidad nacimiento (`birthCommunity`, AL) | 65/69 |
| `STD_ID_SUB_GEO_DIV` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_BIRTH_ID_SUB_GEO_DIV` ← ID Provincia nacimiento (`birthProvince`, AH) | 65/69 |
| `SSP_ID_PAIS_EMISOR` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_ID_PAIS_EMISOR` ← ID País emisor documento (`issuingCountry`, AB) | 69/69 |
| `SSP_PRIM_APELLIDO` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_PRIMER_APELLIDO` ← Primer apellido (`lastName1`, O, P) | 69/69 |
| `STD_SSN` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_SSN` ← Núm. de documento (`documentNumber`, Y) | 69/69 |
| `SSP_ID_TP_DOC` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_ID_TP_DOC` ← ID Tipo documento (`documentType`, W) | 69/69 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 69/69 |
| `SCO_GB_NAME` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_GB_NAME` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `SUS_VETERAN` |  | defecto Meta4 | número fijo `0` | 69/69 |
| `PLCO_HIDDEN_BY_DATA_PROTECTION` |  | defecto Meta4 | texto fijo `0` | 69/69 |
| `CSP_ID_ATRADIUS` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_ATRADIUS` ← ID Atradius (`atradiusId`, IS) | 69/69 |
| `CSP_ID_FUSION` |  | calculada | mismo campo lógico que `STD_PERSON1.CSP_ID_FUSION` (Fusion ID del alta): se graba en las dos tablas | 69/69 |
| `SCO_ID_REGION` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_BIRTH_ID_REGION` | 0 |
| `STD_ID_SALUTATION` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_SALUTATION` | 0 |
| `STD_SS_KEY` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_SS_KEY` | 0 |
| `STD_SS_NUMBER` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_SS_NUMBER` | 0 |

### `STD_PERSON1`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `STD_ID_PERSON`.

Tiene columnas binarias o de texto largo: el perfil no las cubre.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `CSP_ID_FUSION` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_FUSION_ID` | 0 |
| `STD_ID_PERSON` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK2 obligatoria | defecto Meta4 | texto fijo `0000` | 0 |

### `M4SCO_H_SAL_DATA`

En 62 de 69 altas · 327 filas (5.3 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 327/327 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 327/327 |
| `SCO_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 327/327 |
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 327/327 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 327/327 |
| `SCO_FIX_SALARY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_FIX_SALARY` | 327/327 |
| `SCO_FIX_SALARY_RL` |  | defecto Meta4 | número fijo `0` | 327/327 |
| `SCO_VAR_SALARY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_VAR_SALARY` | 327/327 |
| `SCO_VAR_SALARY_RL` |  | defecto Meta4 | número fijo `0` | 327/327 |
| `SCO_FIX_SALARY_PER` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 263/327 |
| `SCO_VAR_SALARY_PER` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 215/327 |
| `SCO_COT_EMP` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_COT_EMP` | 327/327 |
| `ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SRCO_SAL_DATA_ID_CURRENCY` | 325/327 |
| `SCO_DT_EXCHANGE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SRCO_SAL_DATA_SCO_DT_EXCHANGE` | 327/327 |
| `EXT_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SRCO_SAL_DATA_EX_TYPE` | 327/327 |
| `SCO_BNFT_LEG_ENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_BNFT_LEG_ENT` | 327/327 |
| `SCO_BNFT_LEG_PER` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 59/327 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 327/327 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 327/327 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 327/327 |

### `M4SCO_PERSON_BANK`

En 60 de 69 altas · 65 filas (1.1 por persona) · clave `SCO_ID_PERSON`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 65/65 |
| `SCO_ID_PERSON` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 65/65 |
| `SCO_OR_ACCOUNT` | PK2 obligatoria | entrada | `SRSP_PA_HIRE_WIZ_DATOS_PAGO.SCO_OR_ACCOUNT` | 65/65 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 65/65 |
| `SCO_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 65/65 |
| `SCO_ID_BANK_BRANCH` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_BANK_BRANCH` ← Sucursal bancaria (`bankBranch`, IA) | 62/65 |
| `SCO_ACCOUNT_NUMBER` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ACCOUNT_NUMBER` ← Nº de cuenta (`accountNumber`, ID) | 62/65 |
| `ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.ID_CURRENCY_2` ← ID Moneda (`accountCurrency`, IK) | 65/65 |
| `SCO_ID_BANKUSE` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 2/65 |
| `SCO_ID_BANKTYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_BANKTYPE` | 2/65 |
| `SCO_GB_BANK` | obligatoria | calculada | igual que `SCO_GB_IBAN` (65/65) | 65/65 |
| `SCO_IBAN_CODE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_IBAN_CODE` | 65/65 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 65/65 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 65/65 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 65/65 |
| `SCO_GB_IBAN` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_GB_IBAN` ← IBAN (`iban`, GQ) | 65/65 |
| `SCO_ID_STANDARD` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_STANDARD` | 58/65 |
| `SSP_DC` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_DC` | 65/65 |
| `SSP_BIC_CODE` |  | calculada | `M4SCO_BANK_BRANCH.SCO_SWIFT_ADDRESS` de la sucursal (50/65; vacío si la sucursal no está en el catálogo). El alta no crea sucursales | 65/65 |
| `PLCO_IBAN_COMPLETE` |  | defecto Meta4 | texto fijo `1` | 65/65 |
| `SCO_ENTITLED` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ENTITLED` | 0 |
| `SCO_IBAN_KEY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_IBAN_KEY` | 0 |
| `SCO_NM_BNK` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_NM_BNK_DIRECT` | 0 |
| `SUK_ACCOUNT_REFERE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SUK_ACCOUNT_REFERENCE` | 0 |
| `SUK_EMPLOYEE_REFNO` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SUK_EMPLOYEE_REFNO` | 0 |

### `STD_ADDRESS`

En 69 de 69 altas · 78 filas (1.1 por persona) · clave `STD_ID_PERSON`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 78/78 |
| `STD_ID_PERSON` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 78/78 |
| `STD_OR_ADDRESS` | PK2 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_OR_ADDRESS` | 78/78 |
| `STD_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 78/78 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 78/78 |
| `STD_ID_LOCAT_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_LOCATION_TYPE` ← ID Tipo localización (`locationType`, BC) | 78/78 |
| `STD_ADDRESS_LINE_1` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ADDRESS_LINE_1` ← Dirección (`address`, BH, BI) | 78/78 |
| `STD_ADDRESS_LINE_2` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ADDRESS_LINE_2` ← Dirección (`address`, BH, BI) | 1/78 |
| `STD_ID_COUNTRY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_COUNTRY` ← ID País (`country`, CF) | 78/78 |
| `STD_ID_GEO_DIV` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_GEO_DIV` ← ID Comunidad (`community`, CC) | 78/78 |
| `STD_ID_SUB_GEO_DIV` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_SUB_GEO_DIV` ← ID Provincia (`province`, BX) | 78/78 |
| `STD_ID_GEO_PLACE` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_GEO_PLACE` ← ID Población (`city`, BR) | 78/78 |
| `STD_ZIP_CODE` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ZIP_CODE` ← Código postal (`postalCode`, CG) | 78/78 |
| `SSP_NUM_VIA` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_NUM_VIA` ← Núm. (`streetNumber`, BL) | 78/78 |
| `STD_MAILING_CHEC` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_MAILING_CHECK` | 69/78 |
| `SSP_ESCALERA` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_ESCALERA` ← Escalera (`staircase`, BN) | 5/78 |
| `SSP_PISO` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_PISO` ← Piso (`floor`, BO) | 52/78 |
| `SSP_BLOQUE` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_BLOQUE` ← Bloque (`buildingBlock`, BM) | 8/78 |
| `SSP_PUERTA` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_PUERTA` ← Puerta (`door`, BP) | 46/78 |
| `SSP_ID_SIGLA_DOMIC` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_ID_SIGLA_DOMIC` ← ID Tipo de vía (`roadType`, BE) | 78/78 |
| `SSP_DISTRIT_POSTAL` |  | calculada | `STD_ZIP_CODE` (`SRSP_RELLENAR_DISTRITO_POSTAL`, 78/78) | 78/78 |
| `SCO_GB_ADDRESS` |  | calculada | `SCO_GENERATE_GB_ADDRESS` (variante de España): «` ` + tipo de vía + calle + número + bloque + escalera + piso + puerta + distrito postal + población + provincia + país», cada parte con un espacio delante y los nombres de `STD_GEO_PLACE`, `STD_SUB_GEO_DIV` y `STD_COUNTRY` (78/78 exactas) | 78/78 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 78/78 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 78/78 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 78/78 |
| `SCO_ID_REGION` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_ID_REGION` | 0 |
| `SGE_NM_ORT` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SGE_NM_ORT` | 0 |
| `SME_ID_TIPO_VIVIEN` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SME_ID_TIPO_VIVIENDA` | 0 |
| `STD_ADDRESS_LINE_3` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ADDRESS_LINE_3` | 0 |
| `STD_ADDRESS_LINE_4` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ADDRESS_LINE_4` | 0 |

### `STD_EMAIL`

En 69 de 69 altas · 151 filas (2.2 por persona) · clave `STD_ID_PERSON`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 151/151 |
| `STD_ID_PERSON` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 151/151 |
| `STD_OR_MAIL` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 151/151 |
| `STD_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 151/151 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 151/151 |
| `STD_EMAIL` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_EMAIL_ATRADIUS` ← Correo electrónico (`email`, AY, IQ) | 151/151 |
| `STD_ID_LOCAT_TYPE` | obligatoria | entrada | valor fijo `9` del mapeo | 151/151 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 151/151 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 151/151 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 151/151 |

### `STD_HR`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK2 obligatoria | defecto Meta4 | texto fijo `0000` | 69/69 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SSP_PROV_NUM_SS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_PROV_NUM_SS` ← Núm. SS (`ssNumber`, DW, DX, DY) | 57/69 |
| `SSP_NUM_SS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_NUM_SS` ← Núm. SS (`ssNumber`, DW, DX, DY) | 57/69 |
| `SSP_DIG_NUM_SS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_DIG_NUM_SS` ← Núm. SS (`ssNumber`, DW, DX, DY) | 57/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `SSP_SSN_LEGAL` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.SSP_SSN_REP_LEGAL` ← NIF Representante legal (`legalRepresentativeNif`, Z) | 0 |

### `STD_HR_NAT`

En 69 de 69 altas · 70 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | texto fijo `0000` | 70/70 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 70/70 |
| `STD_ID_COUNTRY` | PK2 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_COUNTRY_NAC` ← ID Nacionalidad (`nationality`, AF) | 70/70 |
| `STD_PRIMARY_COUNTR` |  | entrada | valor fijo `1` del mapeo | 70/70 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 70/70 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 70/70 |
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 70/70 |
| `ID_APPROLE` |  | constante | `M4_USER` | 70/70 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 70/70 |

### `STD_HT_MAR_STAT`

En 69 de 69 altas · 71 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 71/71 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 71/71 |
| `STD_DT_START` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 71/71 |
| `STD_ID_MAR_STAT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_ID_MARITAL_STAT` ← ID Estado civil (`maritalStatus`, AT) | 71/71 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 71/71 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 71/71 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 71/71 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 71/71 |

### `STD_PHONE_FAX`

En 69 de 69 altas · 139 filas (2.0 por persona) · clave `STD_ID_PERSON`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 139/139 |
| `STD_ID_PERSON` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 139/139 |
| `STD_OR_PHONE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 139/139 |
| `STD_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 139/139 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 139/139 |
| `STD_ID_LOCAT_TYPE` |  | entrada | valor fijo `1` del mapeo | 70/139 |
| `STD_ID_LINE_TYPE` |  | entrada | valor fijo `001` del mapeo | 139/139 |
| `STD_NAT_REG_CODE` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_NAT_REGION_CODE_PHONE` ← Teléfono (`phone`, AU, AV, IO) | 4/139 |
| `STD_PHONE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.STD_PHONE` ← Teléfono (`phone`, AU, AV, IO) | 139/139 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 139/139 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 139/139 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 139/139 |

### `STD_HR_PERIOD`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_OR_HR_PERIOD` | 69/69 |
| `STD_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `STD_ID_HRP_SRT_REA` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.STD_ID_HRP_START_REASON` ← ID Motivo inicio (`startReason`, DC) | 69/69 |
| `SSP_FEC_ANTIGUEDAD` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_FEC_ANTIGUEDAD` ← Fecha de Antigüedad (`seniorityDate`, GO) | 60/69 |
| `STD_ID_HRP_END_REA` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 5/69 |
| `SSP_FEC_EXTRAS` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_FEC_EXTRAS` ← Fecha Extras (`extrasDate`, GP) | 37/69 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `STD_KEY_EMPLOYEE` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.STD_KEY_EMPLOYEE` ← Empleado clave (`keyEmployee`, DG) | 69/69 |
| `STD_ID_HR_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_HR_TYPE` | 69/69 |
| `STD_STRATEGIC_EMP` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.STD_STRATEGIC_EMP` ← Empleado estratégico (`strategicEmployee`, DI) | 69/69 |
| `STD_ID_EXTERN_ORG` |  | entrada | `SRCO_PA_HIRE_WIZ_EXT_ORG.STD_ID_EXTERNAL_ORG` | 7/69 |
| `SSP_PAGO_TA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_PAGO_TA` ← Pago con gestión del tiempo (`timeManagementPay`, HS) | 69/69 |
| `SSP_CHK_IRPF_MOVIL` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_CHK_IRPF_MOVILIDAD` | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `SUK_ACT_LEAV_DT` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `SSP_CHK_IRPF_PROLO` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_CHK_IRPF_PROLONG` | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `SUK_PROB_RESULTS` |  | defecto Meta4 | número fijo `0` | 69/69 |
| `SSP_ID_CAUSA_DESEM` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 5/69 |
| `SSP_CONSIGNAR_INDEM` |  | defecto Meta4 | texto fijo `0` | 69/69 |
| `SSP_EXCLUIR_CLC_NOMINA` |  | defecto Meta4 | texto fijo `0` | 69/69 |
| `CSP_ANTIGUEDAD_ORIGEN` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/69 |
| `SSP_CHK_IRPF_REND_PERSUP_2A5PA` |  | defecto Meta4 | número fijo `0` | 69/69 |
| `CSP_ID_TIPO_JORNADA` | obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `SSP_CHK_VAC_PROR` |  | defecto Meta4 | número fijo `0` | 69/69 |
| `SSP_NUM_PLURIEMPL` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_NUM_PLURIEMPL` | 0 |

### `M4SCO_HR_THEOR_TIM`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_REA_CHANG` |  | entrada | `.` · fijo `4` | 0 |
| `SCO_ID_REF_MOD` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_ID_REF_MOD` ← ID Modelo/Semana de referencia (`referenceModelWeek`, HN, HP) | 0 |
| `SCO_OR_REF_MOD` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_OR_REF_MOD` ← ID Modelo/Semana de referencia (`referenceModelWeek`, HN, HP) | 0 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SCO_H_EMP_TYPE`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_EMP_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_EMPLOYEE_TYPE` | 0 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SCO_H_HRP_CONTR`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SCO_DT_EXPECT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_DT_EXPECTED_END` | 0 |
| `SCO_DT_PROBA_END` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_DT_PROBATION_END` ← Fecha fin periodo prueba (`probationEnd`, DM) | 0 |
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_CONTRACT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_CONTRACT` | 0 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SCO_H_HR_CURR`

En 57 de 69 altas · 57 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 57/57 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 57/57 |
| `SCO_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 57/57 |
| `ID_CURRENCY` | PK3 obligatoria | entrada | `SRSP_PA_HIRE_WIZ_PROF.SRSP_ID_CURRENCY` | 57/57 |
| `SCO_DT_START` | PK4 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 57/57 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 57/57 |
| `SCO_IND_MAIN_CURR` | obligatoria | entrada | valor fijo `1` del mapeo | 57/57 |
| `SCO_BEHAV_CURR` | obligatoria | entrada | valor fijo `01` del mapeo | 57/57 |
| `EX_TYPE` | obligatoria | entrada | valor fijo `1` del mapeo | 57/57 |
| `SCO_ID_REA_CHANG` |  | entrada | valor fijo `4` del mapeo | 57/57 |
| `ID_APPROLE` |  | constante | `M4_USER` | 57/57 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 57/57 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 57/57 |

### `M4SCO_H_HR_LEGENT`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `STD_ID_LEG_ENT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_LEG_ENT` ← ID Empresa (`legalEntity`, CI) | 69/69 |
| `SCO_ID_REA_CHANG` |  | entrada | valor fijo `4` del mapeo | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |

### `M4SCO_H_HR_POS_COM`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_COMPL` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_COMPL` | 0 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SCO_ID_POSITION` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION` ← ID Posición (`position`, CN) | 0 |
| `SCO_NUM_EJC` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_EJC` ← Núm. EJC (`occupationEjc`, CQ) | 0 |
| `SCO_NUM_HEADCOUNT` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_HEADCOUNT` ← Núm. Efectivos (`occupationHeadcount`, CR) | 0 |
| `SCO_NUM_HOURS` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_NUM_HOURS` ← Núm. Horas (`occupationHours`, CP) | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SCO_H_HR_P_FRE`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_PAY_FREQ` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY.SCO_ID_PAY_FREQUENCY` | 0 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SCO_H_TYPE_ADJ`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SCO_ID_TYPE_ADJUST` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_TYPE_ADJUST` ← ID Tipo de ajuste (`adjustmentType`, GG) | 62/62 |
| `SCO_ID_REA_CHANG` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |

### `M4SCO_INCIDEN_PER`

En 42 de 69 altas · 5083 filas (121.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK9 obligatoria | defecto Meta4 | sociedad del alta | 5083/5083 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 5083/5083 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 5083/5083 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 5083/5083 |
| `ID_DMD` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD` | 5083/5083 |
| `ID_DMD_COMPONENT` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD_COMPONENT` | 5083/5083 |
| `PROJ` |  | defecto Meta4 | número fijo `1` | 5083/5083 |
| `DT_START` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_START` | 5083/5083 |
| `DT_COR_START` | PK6 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_START` | 5083/5083 |
| `SCO_DT_ACCRUED` | PK7 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_DT_ACCRUED` | 5083/5083 |
| `SCO_ID_PAY_FREQUEN` | PK8 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_PAY_FREQUENCY` | 5083/5083 |
| `DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_END` | 5083/5083 |
| `ID_M4_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_M4_TYPE` | 5083/5083 |
| `DT_COR_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_END` | 5083/5083 |
| `SCO_VALUE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_VALUE` | 5083/5083 |
| `SCO_ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_CURRENCY` | 4922/5083 |
| `SCO_DT_EXCHANGE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_DT_EXCHANGE` | 4638/5083 |
| `EX_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.EX_TYPE` | 4922/5083 |
| `ID_PRIORITY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_PRIORITY` | 5083/5083 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_COMMENT` | 296/5083 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 5083/5083 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 5083/5083 |
| `SCO_ID_REA_CHANG` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_REASON_CHANGE` | 0 |

### `M4SCO_PAYMENT_DATA`

En 62 de 69 altas · 67 filas (1.1 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 67/67 |
| `SCO_ORIGIN_TYPE` | PK1 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_ORIGIN_TYPE` | 67/67 |
| `SCO_ID_HR` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 67/67 |
| `SCO_OR_HR_PERIOD` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 67/67 |
| `SCO_OR_PAYMENTDATA` | PK4 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 67/67 |
| `SCO_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 67/67 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 67/67 |
| `SCO_EMP_CHECK` | obligatoria | entrada | valor fijo `1` del mapeo | 67/67 |
| `SCO_ID_PERSON` |  | entrada | `SRCO_PA_HIRE.SRCO_PERSON_MAINPAYEE` | 67/67 |
| `SCO_OR_ACCOUNT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_OR_ACCOUNT` | 64/67 |
| `SCO_ID_PAYM_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_PAYM_TYPE` ← ID Tipo pago (`paymentType`, HW) | 67/67 |
| `ID_CURRENCY_DATA` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.ID_CURRENCY` ← ID Moneda (`payrollCurrency`, GW) | 67/67 |
| `SCO_ID_COMP_BANK` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_ID_COMP_BANK` ← ID Banco empresa (`companyBank`, HY) | 67/67 |
| `SCO_LE_CB_CHECK` |  | defecto Meta4 | texto fijo `0` | 67/67 |
| `ID_APPROLE` |  | constante | `M4_USER` | 67/67 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 67/67 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 67/67 |
| `SSP_DT_CONCURRENCY` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 12/67 |

### `M4SCO_PERIO_VALUES`

En 59 de 69 altas · 328 filas (5.6 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK7 obligatoria | defecto Meta4 | sociedad del alta | 328/328 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 328/328 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 328/328 |
| `ID_DMD` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD` | 328/328 |
| `ID_DMD_COMPONENT` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD_COMPONENT` | 328/328 |
| `DT_START` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_START` | 328/328 |
| `DT_COR_START` | PK6 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_START` | 328/328 |
| `DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_END` | 328/328 |
| `DT_COR_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_END` | 328/328 |
| `SCO_VALUE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_VALUE` | 328/328 |
| `SCO_ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_CURRENCY` | 168/328 |
| `SCO_DT_EXCHANGE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_DT_EXCHANGE` | 167/328 |
| `EX_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.EX_TYPE` | 169/328 |
| `ID_PRIORITY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_PRIORITY` | 328/328 |
| `PROJ` |  | defecto Meta4 | número fijo `1` | 328/328 |
| `ID_M4_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_M4_TYPE` | 328/328 |
| `ID_APPROLE` |  | constante | `M4_USER` | 328/328 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 328/328 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 328/328 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_COMMENT` | 0 |
| `SCO_ID_REA_CHANG` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_REASON_CHANGE` | 0 |

### `M4SCO_REAL_TM_PRD`

En 2 de 69 altas · 2 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK6 obligatoria | defecto Meta4 | sociedad del alta | 2/2 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 2/2 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 2/2 |
| `SCO_ID_INCIDENCE` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_INCIDENCE` | 2/2 |
| `SCO_DT_START` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_DT_START` | 2/2 |
| `SCO_OR_PART_TIME` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_OR_PART_TIME` | 2/2 |
| `SCO_DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_DT_END` | 2/2 |
| `SCO_ID_TIME_UNIT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_TIME_UNIT` | 2/2 |
| `SCO_UNITS` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_UNITS` | 2/2 |
| `SCO_LAST_DAY_PROCE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_LAST_DAY_PROCESS` | 2/2 |
| `SCO_CK_IN_PAYROLL` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_CK_IN_PAYROLL` | 2/2 |
| `SCO_ID_INP_PAYPERI` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_INP_PAYPERIOD` | 2/2 |
| `SSP_DT_RECAIDA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_DT_RECAIDA` | 2/2 |
| `SSP_PORC_MAT_PRC` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_PORC_MAT_PRC` | 2/2 |
| `SSP_FEC_IT_12M` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_FEC_IT_12M` | 2/2 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 2/2 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 2/2 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 2/2 |
| `SCO_CK_HALFDAYS_BEGIN` |  | defecto Meta4 | texto fijo `0` | 2/2 |
| `SCO_CK_HALFDAYS_END` |  | defecto Meta4 | texto fijo `0` | 2/2 |
| `SCO_CK_HALFDAY` |  | defecto Meta4 | texto fijo `0` | 2/2 |
| `SSP_CK_NO_PER_CAR` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_CK_NO_PER_CAR` | 2/2 |
| `SSP_MOTIVO_SOLICITUD_MA_PA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_MOTIVO_SOLICITUD_MA_PA` | 1/2 |
| `SSP_ID_CONTINGENCIA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_ID_CONTINGENCIA` | 1/2 |
| `SSP_FORMA_PAGO_MA_PA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_FORMA_PAGO_MA_PA` | 1/2 |
| `SSP_TIPO_PATERNIDAD` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_TIPO_PATERNIDAD` | 1/2 |
| `SSP_IND_VISUAL_NAC` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/2 |
| `SSP_ERE_BASE_REG_RG` |  | defecto Meta4 | número fijo `0` | 2/2 |
| `CUR_DATE` |  | defecto Meta4 | fecha de hoy | 2/2 |
| `SSP_ERE_BASE_REG_ACC` |  | defecto Meta4 | número fijo `0` | 2/2 |
| `SSP_ERE_BASE_REG_ACC_GL` |  | defecto Meta4 | número fijo `0` | 2/2 |
| `SSP_ERE_BASE_REG_RG_GL` |  | defecto Meta4 | número fijo `0` | 2/2 |
| `SSP_CK_CONCILIADO_FIE` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/2 |
| `SSP_FEC_PRO_INI` |  | defecto Meta4 | fecha fija `4000-01-01` | 2/2 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_COMMENT` | 0 |
| `SCO_END_TIME` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_END_TIME` | 0 |
| `SCO_START_TIME` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_START_TIME` | 0 |
| `SSP_FEC_PAT_ORIGEN` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_FEC_PAT_ORIGEN` | 0 |
| `SSP_FEC_PREV_FIN_CONT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_FEC_PREV_FIN_CONT` | 0 |
| `SSP_ID_EMPRESA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_ID_EMPRESA` | 0 |
| `SSP_ID_ERE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_ID_ERE` | 0 |
| `SSP_ID_TP_EXCEDENCIA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_ID_TP_EXCEDENCIA` | 0 |
| `SSP_PORC_BON_ERE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_PORC_BON_ERE` | 0 |
| `SSP_TIP_PRE_RIESGO` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SSP_TIP_PRE_RIESGO` | 0 |

### `M4SCO_ROLE_VALUES`

En 42 de 69 altas · 82 filas (2.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK7 obligatoria | defecto Meta4 | sociedad del alta | 82/82 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 82/82 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 82/82 |
| `ID_DMD` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD` | 82/82 |
| `ID_DMD_COMPONENT` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD_COMPONENT` | 82/82 |
| `DT_START` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_START` | 82/82 |
| `DT_COR_START` | PK6 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_START` | 82/82 |
| `DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_END` | 82/82 |
| `DT_COR_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_END` | 82/82 |
| `SCO_VALUE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_VALUE` | 82/82 |
| `SCO_ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_CURRENCY` | 82/82 |
| `SCO_DT_EXCHANGE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.DT_EXCH_3` | 82/82 |
| `EX_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY.EX_TYPE_3` | 82/82 |
| `ID_PRIORITY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_PRIORITY` | 82/82 |
| `PROJ` |  | defecto Meta4 | número fijo `1` | 82/82 |
| `ID_M4_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_M4_TYPE` | 82/82 |
| `ID_APPROLE` |  | constante | `M4_USER` | 82/82 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 82/82 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 82/82 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_COMMENT` | 0 |
| `SCO_ID_REA_CHANG` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_REASON_CHANGE` | 0 |

### `M4SSP_CONTRATO_INT`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SSP_ID_CONT_LEGAL` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_CONT_LEGAL` ← ID Contrato legal (`legalContract`, EJ) | 0 |
| `ID_ORGANIZATION` | PK2 obligatoria | defecto Meta4 | texto fijo `0000` | 0 |
| `SSP_ID_CONT_INTERN` | PK1 obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SSP_NO_DEFINIDO` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |

### `M4SSP_HT_SIT_IRPF`

En 69 de 69 altas · 72 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | sociedad del alta | 72/72 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 72/72 |
| `DT_START` | PK2 obligatoria | clave | fecha de alta (`SRCO_ARG_DT_HIRE`) | 72/72 |
| `SSP_ID_EST_IRPF` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_EST_IRPF` | 72/72 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 72/72 |
| `SSP_NUM_HIJOS_IRPF` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_NUM_HIJOS_IRPF` | 72/72 |
| `SSP_CON_RED_VIVIEN` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_CON_RED_VIVIENDA` | 23/72 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 72/72 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 72/72 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 72/72 |
| `SSP_ID_MINUSVALIA` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_MINUSVALIA` | 0 |

### `M4SSP_H_CABEC_TC1`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_CABEC_TC1` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_CABEC_TC1` ← ID Cabecera TC1 (`tc1Header`, EA) | 62/62 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |

### `M4SSP_H_CONTRATOS`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `SSP_FEC_INI_CONTRA` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `SSP_FEC_FIN_CONTRA` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_FEC_FIN_CONTRA` ← Fin (`contractEnd`, EN) | 62/62 |
| `SSP_FEC_FIN_PR_PRU` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_FEC_FIN_PR_PRU` | 62/62 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `SSP_FEC_FIN_PV_CON` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 3/62 |
| `SSP_ID_CONT_INTERN` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_CONT_INTERN` ← ID Contrato interno (`internalContract`, EL) | 62/62 |
| `SSP_DIAS_PRUEBA` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_DIAS_PRUEBA` ← Días de prueba (`probationDays`, GD) | 62/62 |
| `SSP_FEC_INI_BONIF` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_FEC_FIN_BONIF` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_REL_LAB_ESP` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_REL_LAB_ESP` ← ID Relación laboral especial (`specialLaborRelation`, FL) | 11/62 |
| `SSP_MUJER_SUBREPR` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_MUJER_SUBREPR` ← Mujer subrepresentada (`underrepresentedWoman`, FU) | 62/62 |
| `SSP_PRIM_TRAB_AUT` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_PRIM_TRAB_AUT` ← Primer trabajador autónomo (`firstSelfEmployedWorker`, GC) | 62/62 |
| `SSP_IND_SUBROG_PAR` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_IND_SUBROG_PAR` | 62/62 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 62/62 |
| `SSP_RENTACTIVA_INS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_RENTACTIVA_INS` ← Renta activa de inserción (`activeInsertionIncome`, FW) | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `SSP_MUJER_24` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_MUJER_24` ← Mujer mater. 24 meses (`womanMaternity24`, FS) | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |
| `SSP_CONTRAT_RELEVO` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_CONTRAT_RELEVO` ← Contrato relevo (`reliefContract`, FY) | 62/62 |
| `SSP_ID_REL_LAB` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_REL_LAB` ← ID Relación laboral (`laborRelation`, EP) | 2/62 |
| `SSP_PROL_PER_ACT_FD` |  | defecto Meta4 | texto fijo `N` | 62/62 |
| `SSP_CK_IGN_CTRL_DUR_MAX` |  | defecto Meta4 | texto fijo `0` | 62/62 |
| `SSP_IND_BON_RDL12023` |  | opcional | valores vistos: `1` | 15/62 |
| `SSP_CLAUSULA_ADIC` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_CLAUSULA_ADIC` ← Cláusula adicional (`additionalClause`, GE) | 0 |
| `SSP_FEC_INI_A_CONT` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_FEC_INI_A_CONT` ← Inicio antig. contrato (`contractSeniorityStart`, FQ) | 0 |
| `SSP_ID_CAUSA_SUST` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_CAUSA_SUST` ← ID Causa sustitución (`substitutionCause`, FE) | 0 |
| `SSP_ID_COND_DESEMP` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_COND_DESEMP` ← ID Condición desempleado (`unemploymentCondition`, FJ) | 0 |
| `SSP_ID_MUJER_REINC` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_MUJER_REINC` | 0 |
| `SSP_INCAPACITADO_R` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_INCAPACITADO_R` ← Incapacitado readmitido (`readmittedDisabled`, GA) | 0 |
| `SSP_PORC_MINUSVAL` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_PORC_MINUSVAL` ← % minusvalía (`disabilityPercent`, FO) | 0 |
| `SSP_TRAB_EXCL_SOC` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_TRAB_EXCL_SOC` ← Exclusión social (`socialExclusion`, FN) | 0 |

### `M4SSP_H_CONVENIOS`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_CONVENIO` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_CONVENIO` ← ID Convenio (`payrollAgreement`, GI) | 62/62 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |

### `M4SSP_H_CONV_SS`

En 56 de 69 altas · 56 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 56/56 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 56/56 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 56/56 |
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 56/56 |
| `FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 56/56 |
| `SSP_ID_CONV_SS` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_CONV_SS` ← ID Convenio S.S. (`ssAgreement`, EG) | 56/56 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 56/56 |
| `ID_APPROLE` |  | constante | `M4_USER` | 56/56 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 56/56 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 56/56 |

### `M4SSP_H_EPI_ACCID`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_EPIG_ACCIDE` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_EPIG_ACCIDE` | 0 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | `.` · fijo `4` | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_GRUPO_TAR`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_GRUP_TARIFA` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_GRUP_TARIFA` ← ID Grupo de tarifa (`tariffGroup`, EC) | 62/62 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |

### `M4SSP_H_HR_TP_IRPF`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_TP_IRPF` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_TP_IRPF` ← ID Tipo del IRPF (`irpfType`, HC) | 62/62 |
| `SSP_ID_CLAVE_PERCE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_CLAVE_PERCEP` ← ID Clave percepción (`perceptionKey`, HE) | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |

### `M4SSP_H_OCUPACION`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | `.` · fijo `4` | 0 |
| `SSP_ID_OCUPACION` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_OCUPACION` ← ID Ocupación (`ssOccupation`, EE) | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_PORC_GLEGA`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SSP_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_MOTIV_REDUC` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_ID_MOTIV_REDUC` ← ID Motivo de reducción (`reductionReason`, FA) | 0 |
| `SSP_PORC_GLEGAL` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_PORC_GLEGAL` ← % Reducción (`legalReductionPercent`, EY) | 0 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_SINDICATOS`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `FEC_INICIO` | PK4 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | `.` · fijo `4` | 0 |
| `SSP_ID_SINDICATO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_SINDICATO` ← ID Sindicato (`union`, GS) | 0 |
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_TP_IRPF_PR`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_PORC` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_PROF.SSP_ID_PORC` | 0 |
| `SSP_ID_TP_IRPF` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_PROF.SSP_ID_TP_IRPF` ← ID Tipo del IRPF (`irpfType`, HC) | 0 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_TP_SALAR`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `SSP_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `SSP_ID_TP_SALARIO` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SSP_ID_TP_SALARIO` ← ID Tipo salario (`salaryType`, GM) | 62/62 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |

### `M4VCH_DMD_COMPNTS`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_SLICE_BHVR_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_SLICE_BHVR_TYPE` | 0 |
| `ID_DMD` | PK1 obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `ID_DMD_COMPONENT` | PK2 obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |

### `STD_FAMILY`

En 2 de 69 altas · 6 filas (3.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 6/6 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_ID_HR` | 6/6 |
| `STD_OR_DEP_NB` | PK2 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_OR_DEP_NB` | 6/6 |
| `STD_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_DT_START` | 6/6 |
| `STD_DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_DT_END` | 6/6 |
| `STD_ID_DEP_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_ID_DEP_TYPE` | 6/6 |
| `SSP_CALC_IRPF` |  | defecto Meta4 | texto fijo `0` | 6/6 |
| `STD_ID_FAMILY_PERS` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.STD_ID_FAMILY_PERSON` | 6/6 |
| `SSP_COMPUTO_ENTERO` |  | defecto Meta4 | número fijo `0` | 6/6 |
| `SSP_CK_NIV_RENT_AS` |  | defecto Meta4 | número fijo `0` | 6/6 |
| `SSP_IRPF_ADOPTADO` |  | defecto Meta4 | número fijo `0` | 6/6 |
| `SCO_STUDENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.SCO_STUDENT` | 6/6 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 6/6 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 6/6 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 6/6 |

### `M4SSP_H_PORC_JORN`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SSP_FEC_FIN_JORN_P` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_FEC_FIN_CONTRA` ← Fin (`contractEnd`, EN) | 0 |
| `SSP_FEC_INI_JORN_P` | PK4 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SSP_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SSP_JP_REG_IRREG` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_JP_REG_IRREG` ← Tipo de jornada parcial (`partialScheduleType`, EW) | 0 |
| `SSP_NUM_DIAS_JP` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_NUM_DIAS_JP` ← Días de trabajo semanales (`weeklyWorkDays`, EX) | 0 |
| `SSP_NUM_HORAS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_NUM_HORAS` ← Número de horas (`numberOfHours`, EU) | 0 |
| `SSP_TIPO_HORAS` |  | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_TIPO_HORAS` ← Tipo de horas (`hourType`, ET) | 0 |
| `SSP_VALOR_COEF_T_P` | obligatoria | entrada | `SRSP_PA_HIRE_WIZ_SS.SSP_VALOR_COEF_T_P` ← % Jornada parcial (`partialSchedulePercent`, EQ) | 0 |
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SSP_FEC_INI_CONTRA` | PK3 obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SSP_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4CSP_H_CATEG_ATRADIUS`

En 68 de 69 altas · 73 filas (1.1 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 73/73 |
| `DT_START` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 73/73 |
| `SCO_ID_HR` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 73/73 |
| `SCO_OR_HR_ROLE` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 73/73 |
| `CSP_ID_CATEG_ATRADIUS` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_CATEG_ATRADIUS` ← ID Categoría Atradius (`atradiusCategory`, T) | 73/73 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 73/73 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 73/73 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 73/73 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 73/73 |

### `M4CSP_H_CAT_PER_CYC`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `CSP_ID_CAT_PER_CYC` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.CSP_ID_CAT_PER_CYC` | 0 |
| `DT_START` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `STD_ID_HR` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4CSP_H_CAT_TEORICA`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `DT_START` | PK4 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `ID_CAT_TEORICA` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.ID_CAT_TEORICA` | 0 |
| `STD_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4CSP_H_MOD_VAR`

En 62 de 69 altas · 62 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 62/62 |
| `DT_START` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 62/62 |
| `STD_ID_HR` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 62/62 |
| `STD_OR_HR_PERIOD` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 62/62 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 62/62 |
| `CSP_TP_MOD_VAR` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAYROLL.CSP_TP_MOD_VAR` ← Tipo modalidad Variable (`variableCompensationMode`, IU) | 62/62 |
| `ID_APPROLE` |  | constante | `M4_USER` | 62/62 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 62/62 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 62/62 |

### `M4SCO_HR_ROLE`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_OR_HR_ROLE` | 69/69 |
| `SCO_OR_HR_PER` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_OR_HR_PERIOD` | 69/69 |
| `SCO_DT_START` | obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SCO_N_ROLEESP` |  | calculada | `SHCO_SET_ROLE_NAME`: «J-» + `STD_JOB.STD_N_JOB_CODEESP` del puesto, o «P-» + nombre de la posición (50/69; el resto tiene el puesto renombrado después) | 69/69 |
| `SCO_MAIN_ROLE` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_MAIN_ROLE` | 69/69 |
| `SCO_ID_INT_RO_TY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_INT_ROLE_TYPE` | 69/69 |
| `SCO_ID_REA_CHANG` |  | entrada | valor fijo `4` del mapeo | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `SUK_NMW_TRAINEE` |  | defecto Meta4 | número fijo `0` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `SCO_DT_LAST_WK` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_DT_LAST_WORK` | 0 |
| `SCO_ID_DURATION` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_DURATION` | 0 |
| `SCO_N_ROLE` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_N_ROLE` | 0 |

### `M4SCO_H_HR_JOB`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | clave | ID de la persona (lo hereda del nodo padre) | 69/69 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `SCO_DT_START` | PK3 obligatoria | clave | fecha de alta (`SRCO_ARG_DT_HIRE`) | 69/69 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SCO_ID_JOB_CODE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE` ← ID Puesto (`job`, CL) | 69/69 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |

### `M4SCO_H_HR_POS`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SCO_ID_POSITION` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_POSITION` ← ID Posición (`position`, CN) | 0 |
| `ID_ORGANIZATION` | PK6 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_DT_START` | obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SCO_ID_HR` | PK1 obligatoria | sin dato | obligatoria y vacía en estas altas: revisar | 0 |
| `SCO_OR_HR_ROLE` | PK5 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4CSP_H_ATRADIUS_JOB`

En 68 de 69 altas · 68 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 68/68 |
| `DT_START` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 68/68 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 68/68 |
| `SCO_ID_HR` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 68/68 |
| `CSP_ID_ATRADIUS_JOB` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_ATRADIUS_JOB` ← ID Atradius Job Code (`atradiusJobCode`, AM) | 68/68 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 68/68 |
| `ID_APPROLE` |  | constante | `M4_USER` | 68/68 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 68/68 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 68/68 |

### `M4CSP_H_EQUIV_CAT_JOB_CYC`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `CSP_ID_EQUIV_CAT_JOB_CYC` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.CSP_ID_EQUIV_CAT_JOB_CYC` | 0 |
| `DT_START` | PK5 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 0 |
| `SCO_ID_HR` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `STD_ID_JOB_CODE` | PK1 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE` ← ID Puesto (`job`, CL) | 0 |
| `ID_ORGANIZATION` | PK6 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_OR_HR_ROLE` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4CYC_H_ESTRUCTURA`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `ID_ESTRUCTURA` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.P_CYC_ID_ESTRUCTURA` ← Id Estructura (`structure`, AZ) | 69/69 |
| `DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SCO_ID_REA_CHANG` |  | entrada | valor fijo `AL` del mapeo | 69/69 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `CSP_PLAZA_GARAJE` |  | calculada | `CSP_PLAZA_GARJE_NEW`: «S» si `ID_ESTRUCTURA` es 1 o 2, si no «N» | 69/69 |

### `M4SCO_H_HR_RO_TIME`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SCO_DT_START` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SCO_FULL_TIME` |  | defecto Meta4 | texto fijo `0` | 69/69 |
| `SCO_OR_HR_ROLE` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `SCO_ID_REAS_CHNG` |  | entrada | valor fijo `4` del mapeo | 69/69 |
| `SCO_PERCENT_PERIOD` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_PERCENT_PERIOD` | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `SCO_ROLE_W_HOURS` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ROLE_WEEKLY_HOURS` | 0 |

### `M4SCO_H_HR_WLOC`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `SCO_DT_START` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SCO_ID_WORK_LOC` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_LOCATION` ← ID Lugar trabajo (`workLocation`, CV) | 69/69 |
| `SCO_ID_REAS_CHNG` |  | entrada | valor fijo `4` del mapeo | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `CSP_ID_WORK_FUNCTIONAL` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.P_CYC_ID_WORK_FUNCTIONAL` ← Centro de Trabajo Funcional (`functionalWorkCenter`, BA) | 69/69 |

### `M4SCO_H_HR_WUNIT`

En 69 de 69 altas · 70 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 70/70 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 70/70 |
| `SCO_OR_HR_ROLE` | PK4 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 70/70 |
| `SCO_DT_START` | PK2 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 70/70 |
| `SCO_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 70/70 |
| `SCO_ID_REAS_CHNG` |  | entrada | valor fijo `4` del mapeo | 69/70 |
| `SCO_ID_WORK_UNIT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SCO_ID_WORK_UNIT` ← ID Unidad organizativa (`workUnit`, CT) | 70/70 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 70/70 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 70/70 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 70/70 |

### `M4SCO_INCIDEN_ROLE`

En 10 de 69 altas · 20 filas (2.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK9 obligatoria | defecto Meta4 | sociedad del alta | 20/20 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 20/20 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 20/20 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 20/20 |
| `ID_DMD` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD` | 20/20 |
| `ID_DMD_COMPONENT` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_DMD_COMPONENT` | 20/20 |
| `DT_START` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_START` | 20/20 |
| `PROJ` |  | defecto Meta4 | número fijo `1` | 20/20 |
| `DT_COR_START` | PK6 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_START` | 20/20 |
| `SCO_DT_ACCRUED` | PK7 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_DT_ACCRUED` | 20/20 |
| `SCO_ID_FREQUENCY` | PK8 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_PAY_FREQUENCY` | 20/20 |
| `DT_COR_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_COR_END` | 20/20 |
| `DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.DT_END` | 20/20 |
| `SCO_ID_CURRENCY` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_CURRENCY` | 6/20 |
| `SCO_VALUE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_VALUE` | 20/20 |
| `SCO_DT_EXCHANGE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_DT_EXCHANGE` | 6/20 |
| `EX_TYPE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.EX_TYPE` | 6/20 |
| `ID_M4_TYPE` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_M4_TYPE` | 20/20 |
| `ID_PRIORITY` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.ID_PRIORITY` | 20/20 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 20/20 |
| `ID_APPROLE` |  | constante | `M4_USER` | 20/20 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_COMMENT` | 0 |
| `SCO_ID_REA_CHANG` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_VALUES.SCO_ID_REASON_CHANGE` | 0 |

### `M4SCO_REAL_TM_ROLE`

No aparece en las altas de 2026 analizadas (el mapeo existe, pero estas personas no lo rellenaron).

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `SCO_CK_IN_PAYROLL` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_CK_IN_PAYROLL` | 0 |
| `SCO_COMMENT` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_COMMENT` | 0 |
| `SCO_DT_END` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_DT_END` | 0 |
| `SCO_DT_START` | PK4 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_DT_START` | 0 |
| `SCO_END_TIME` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_END_TIME` | 0 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 0 |
| `SCO_ID_INCIDENCE` | PK3 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_INCIDENCE` | 0 |
| `SCO_ID_INP_PAYPERI` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_INP_PAYPERIOD` | 0 |
| `SCO_ID_TIME_UNIT` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_ID_TIME_UNIT` | 0 |
| `SCO_LAST_DAY_PROCE` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_LAST_DAY_PROCESS` | 0 |
| `SCO_OR_PART_TIME` | PK5 obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_OR_PART_TIME` | 0 |
| `SCO_START_TIME` |  | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_START_TIME` | 0 |
| `SCO_UNITS` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_PAY_REAL_TIME.SCO_UNITS` | 0 |
| `ID_ORGANIZATION` | PK6 obligatoria | defecto Meta4 | sociedad del alta | 0 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 0 |

### `M4SSP_H_CATEGORIA`

En 69 de 69 altas · 69 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 69/69 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 69/69 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 69/69 |
| `SSP_FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 69/69 |
| `SSP_FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 69/69 |
| `SSP_ID_CATEGORIA` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SSP_ID_CATEGORIA` ← Categoría (`category`, CX) | 69/69 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 69/69 |
| `ID_APPROLE` |  | constante | `M4_USER` | 69/69 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 69/69 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 69/69 |
| `CYC_ID_CAT_CONV_POR` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.CYC_ID_CAT_CONV_POR` | 0 |

### `M4SSP_H_CENT_COS`

En 69 de 69 altas · 70 filas (1.0 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 70/70 |
| `SCO_ID_HR` | PK1 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_ARG_ID_PERSON` ← ID PERSONA (G) o contador | 70/70 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 70/70 |
| `SSP_FEC_INICIO` | PK3 obligatoria | entrada | `SRCO_PA_HIRE.SRCO_DT_HIRE_PARAM` | 70/70 |
| `SSP_FEC_FIN` |  | defecto Meta4 | fecha fija `4000-01-01` | 70/70 |
| `SSP_ID_CENT_COSTO` |  | entrada | `SRCO_PA_HIRE_WIZ_ORG.SSP_ID_CENT_COSTO` ← Proyecto (`project`, CZ) | 70/70 |
| `SSP_ID_MOTIVO_CAMB` |  | entrada | valor fijo `4` del mapeo | 70/70 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 70/70 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 70/70 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 70/70 |
| `SSP_ID_CENT_COS1` | obligatoria | entrada | `SRCO_PA_HIRE_WIZ_ORG.SSP_ID_CENT_COSTO1` | 70/70 |
| `CSP_ID_KPI` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 58/70 |
| `CSP_ID_DEPARTME1` |  | entrada | `SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_CODE_DEP` | 69/70 |

### `M4CSP_H_COMP_JUBILACION`

En 47 de 69 altas · 47 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK4 obligatoria | defecto Meta4 | sociedad del alta | 47/47 |
| `DT_START` | PK1 obligatoria | clave | fecha de alta (`SRCO_ARG_DT_HIRE`) | 47/47 |
| `STD_ID_HR` | PK2 obligatoria | clave | ID de la persona (lo hereda del nodo padre) | 47/47 |
| `CSP_ID_TIPO_JUBILACION` | PK3 obligatoria | constante | `1` | 47/47 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 47/47 |
| `ID_APPROLE` |  | constante | `M4_USER` | 47/47 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 47/47 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 47/47 |

### `M4CSP_H_HR_JOB_AGRUPA_CAT`

En 47 de 69 altas · 55 filas (1.2 por persona) · clave `ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK5 obligatoria | defecto Meta4 | sociedad del alta | 55/55 |
| `ID_HR` | PK1 obligatoria | clave | ID de la persona (lo hereda del nodo padre) | 55/55 |
| `SCO_OR_HR_ROLE` | PK3 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 55/55 |
| `DT_START` | PK2 obligatoria | clave | fecha de alta (`SRCO_ARG_DT_HIRE`) | 55/55 |
| `ID_JOB_CODE` | PK4 obligatoria | calculada | puesto del rol (`M4SCO_H_HR_JOB.SCO_ID_JOB_CODE`) | 55/55 |
| `DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 55/55 |
| `ID_JOB_AGRUPACION_CATEGORIA` |  | calculada | `CALCULA_VACIOS` (`CSP_TK_MT_H_HR_JOB_AGRUPA_CAT`): agrupación según la categoría del puesto, el organigrama y la familia interna del puesto (RD, RDS, RA, RU, RS, RGC) | 55/55 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 55/55 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 55/55 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 55/55 |

### `STD_HR_PREV_JOBS`

En 69 de 69 altas · 70 filas (1.0 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_ORGANIZATION` | PK3 obligatoria | defecto Meta4 | texto fijo `0000` | 70/70 |
| `STD_ID_HR` | PK1 obligatoria | clave | ID de la persona (lo hereda del nodo padre) | 70/70 |
| `STD_OR_PROF_BACKG` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 70/70 |
| `STD_DT_START` | obligatoria | derivada | fecha de alta (`SRCO_ARG_DT_HIRE`) | 70/70 |
| `STD_DT_END` |  | defecto Meta4 | fecha fija `4000-01-01` | 70/70 |
| `STD_EMPLOYER` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/70 |
| `STD_ID_SECTOR` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/70 |
| `STD_INITIAL_JOB` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/70 |
| `SCO_COMMENT` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 69/70 |
| `STD_EXCH_DT` |  | defecto Meta4 | fecha de hoy | 70/70 |
| `SCO_ID_AREA` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/70 |
| `STD_ID_COUNTRY` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 1/70 |
| `ID_APPROLE` |  | sistema | rol Meta4 del usuario que graba | 70/70 |
| `ID_SECUSER` |  | sistema | usuario Meta4 que graba | 70/70 |
| `DT_LAST_UPDATE` |  | sistema | fecha y hora de la transacción | 70/70 |
| `CSP_N_PREV_JOB` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 69/70 |
| `CSP_ID_PREV_JOB` |  | opcional | solo en algunas altas; la rellena Meta4 o un proceso posterior | 69/70 |
| `CSP_EXP_INT` | obligatoria | calculada | `CSP_ACT_CV` (`CSP_H_PUESTOS_CV`): borra y vuelve a crear la experiencia interna desde el historial de puestos, con `CSP_EXP_INT = '1'` | 70/70 |

## Tablas que se escriben después del alta

Están en casi todas las personas, pero no en la misma grabación: las escriben otros procesos. Si powermeta4 graba el alta, esos procesos seguirán haciéndolo por su cuenta.

- `M4SSP_AFI_MOVIM`: afiliación a la Seguridad Social (la fecha de acción es la de alta, pero se graba después).
- `M4SSP_AFI_REV_ACC`: revisión de las acciones de afiliación.
- `M4SCO_HR_PAY_DOC`: documentos de pago de la nómina.
- `M4SCO_HR_PAY_DOC1`: documentos de pago de la nómina.
- `M4CSP_CONSULTA_ESTRUCTURA`: tabla de consulta de estructura, que se recalcula aparte.
- `M4RSC_APPUSER`: usuario de la aplicación (portal), que se crea en otro proceso.
- `CSP_H_NUM_TARJETA`: tarjetas de control horario.
- `M4SSP_H_IRPF`: cálculo del IRPF en la nómina.

## Auditoría (`AUC_*`)

Las escribe la persistencia de Meta4 cuando el objeto lógico tiene `HAS_AUDITORY = 1` (`M4RDC_LOGIC_OBJECT.ID_AUDIT_OBJECT`). Cada alta usa un único `ID_EXECUTION` de la secuencia `M4RDC_SEQUENCE` para todas sus filas, con `ID_TYPE = 'I'`, `ID_ORDER` correlativo, `DT_OPER` y la copia de las columnas grabadas. El diario `M4RAU_JOU_OPE` no se usa.

### `AUC_H_HR_JOB`

En 69 de 69 altas · 111 filas (1.6 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_EXECUTION` | PK1 obligatoria | defecto Meta4 | número fijo `0` | 111/111 |
| `ID_ORGANIZATION` | PK3 obligatoria | copia | valor de la misma columna en la fila auditada | 111/111 |
| `ID_ORDER` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 111/111 |
| `SCO_ID_HR` | PK1 obligatoria | copia | valor de la misma columna en la fila auditada | 111/111 |
| `SCO_DT_START` | obligatoria | copia | valor de la misma columna en la fila auditada | 111/111 |
| `ID_TYPE` | obligatoria | defecto Meta4 | lista | 111/111 |
| `ID_UPDT_TYPE` |  | opcional | valores vistos: `N`, `O` | 32/111 |
| `SCO_DT_END` |  | copia | valor de la misma columna en la fila auditada | 111/111 |
| `DT_OPER` | obligatoria | defecto Meta4 | fecha de hoy | 111/111 |
| `SCO_ID_JOB_CODE` | obligatoria | copia | valor de la misma columna en la fila auditada | 111/111 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | copia | valor de la misma columna en la fila auditada | 111/111 |
| `ID_APPROLE` |  | copia | valor de la misma columna en la fila auditada | 111/111 |
| `ID_SECUSER` |  | copia | valor de la misma columna en la fila auditada | 111/111 |
| `DT_LAST_UPDATE` |  | copia | valor de la misma columna en la fila auditada | 111/111 |

### `AUC_H_HR_WLOCATION`

En 69 de 69 altas · 97 filas (1.4 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_EXECUTION` | PK1 obligatoria | defecto Meta4 | número fijo `0` | 97/97 |
| `ID_ORGANIZATION` | PK4 obligatoria | copia | valor de la misma columna en la fila auditada | 97/97 |
| `ID_ORDER` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 97/97 |
| `SCO_ID_HR` | PK1 obligatoria | copia | valor de la misma columna en la fila auditada | 97/97 |
| `SCO_OR_HR_ROLE` | PK2 obligatoria | copia | valor de la misma columna en la fila auditada | 97/97 |
| `ID_TYPE` | obligatoria | defecto Meta4 | lista | 97/97 |
| `ID_UPDT_TYPE` |  | opcional | valores vistos: `N`, `O` | 18/97 |
| `SCO_DT_START` | PK3 obligatoria | copia | valor de la misma columna en la fila auditada | 97/97 |
| `DT_OPER` | obligatoria | defecto Meta4 | fecha de hoy | 97/97 |
| `CSP_ID_WORK_FUNCTIONAL` |  | copia | valor de la misma columna en la fila auditada | 97/97 |
| `SCO_DT_END` |  | copia | valor de la misma columna en la fila auditada | 97/97 |
| `SCO_ID_WORK_LOC` | obligatoria | copia | valor de la misma columna en la fila auditada | 97/97 |
| `SCO_ID_REAS_CHNG` |  | copia | valor de la misma columna en la fila auditada | 97/97 |
| `ID_APPROLE` |  | copia | valor de la misma columna en la fila auditada | 97/97 |
| `ID_SECUSER` |  | copia | valor de la misma columna en la fila auditada | 97/97 |
| `DT_LAST_UPDATE` |  | copia | valor de la misma columna en la fila auditada | 97/97 |

### `AUC_H_HR_WUNIT`

En 69 de 69 altas · 106 filas (1.5 por persona) · clave `SCO_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_EXECUTION` | PK1 obligatoria | defecto Meta4 | número fijo `0` | 106/106 |
| `ID_ORGANIZATION` | PK4 obligatoria | copia | valor de la misma columna en la fila auditada | 106/106 |
| `ID_ORDER` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 106/106 |
| `SCO_ID_HR` | PK1 obligatoria | copia | valor de la misma columna en la fila auditada | 106/106 |
| `SCO_OR_HR_ROLE` | PK3 obligatoria | copia | valor de la misma columna en la fila auditada | 106/106 |
| `ID_TYPE` | obligatoria | defecto Meta4 | lista | 106/106 |
| `ID_UPDT_TYPE` |  | opcional | valores vistos: `N`, `O` | 26/106 |
| `DT_OPER` | obligatoria | defecto Meta4 | fecha de hoy | 106/106 |
| `SCO_DT_START` | PK2 obligatoria | copia | valor de la misma columna en la fila auditada | 106/106 |
| `SCO_DT_END` |  | copia | valor de la misma columna en la fila auditada | 106/106 |
| `SCO_ID_REAS_CHNG` |  | copia | valor de la misma columna en la fila auditada | 101/106 |
| `SCO_ID_WORK_UNIT` | obligatoria | copia | valor de la misma columna en la fila auditada | 106/106 |
| `ID_APPROLE` |  | copia | valor de la misma columna en la fila auditada | 106/106 |
| `ID_SECUSER` |  | copia | valor de la misma columna en la fila auditada | 106/106 |
| `DT_LAST_UPDATE` |  | copia | valor de la misma columna en la fila auditada | 106/106 |

### `AUC_STD_HR_PERIOD`

En 69 de 69 altas · 101 filas (1.5 por persona) · clave `STD_ID_HR`.

| Columna | Clave | Tipo | Origen | Rellena |
|---|---|---|---|---|
| `ID_EXECUTION` | PK1 obligatoria | defecto Meta4 | número fijo `0` | 101/101 |
| `ID_ORGANIZATION` | PK3 obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `ID_ORDER` | PK2 obligatoria | defecto Meta4 | siguiente número dentro de la clave | 101/101 |
| `STD_ID_HR` | PK1 obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `ID_TYPE` | obligatoria | defecto Meta4 | lista | 101/101 |
| `ID_UPDT_TYPE` |  | opcional | valores vistos: `N`, `O` | 22/101 |
| `STD_OR_HR_PERIOD` | PK2 obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `DT_OPER` | obligatoria | defecto Meta4 | fecha de hoy | 101/101 |
| `STD_DT_START` | obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `STD_ID_HRP_SRT_REA` | obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_FEC_ANTIGUEDAD` |  | copia | valor de la misma columna en la fila auditada | 86/101 |
| `STD_ID_HRP_END_REA` |  | copia | valor de la misma columna en la fila auditada | 9/101 |
| `SSP_FEC_EXTRAS` |  | copia | valor de la misma columna en la fila auditada | 47/101 |
| `STD_DT_END` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `STD_KEY_EMPLOYEE` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `STD_ID_HR_TYPE` | obligatoria | copia | valor de la misma columna en la fila auditada | 101/101 |
| `STD_STRATEGIC_EMP` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `STD_ID_EXTERN_ORG` |  | copia | valor de la misma columna en la fila auditada | 9/101 |
| `SSP_PAGO_TA` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_CHK_IRPF_MOVIL` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_CHK_IRPF_PROLO` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SUK_ACT_LEAV_DT` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SUK_PROB_RESULTS` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_ID_CAUSA_DESEM` |  | copia | valor de la misma columna en la fila auditada | 9/101 |
| `SSP_CONSIGNAR_INDEM` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_EXCLUIR_CLC_NOMINA` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_CHK_IRPF_REND_PERSUP_2A5PA` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `SSP_CHK_VAC_PROR` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `ID_APPROLE` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `ID_SECUSER` |  | copia | valor de la misma columna en la fila auditada | 101/101 |
| `DT_LAST_UPDATE` |  | copia | valor de la misma columna en la fila auditada | 101/101 |

## Tablas que no escribe el alta

Aparecen en las personas analizadas, pero las escriben la nómina, la Seguridad Social, el IRPF u otros procesos posteriores. No se replican en el alta:

`CSP_LOG_IRPF`, `M4CSP_ACUMULADO_SS`, `M4CSP_AC_HR_PERIOD`, `M4CSP_AC_HR_ROLE`, `M4CSP_CARGA_INCIDENCIAS`, `M4CSP_DATOS_PROYECCION`, `M4CSP_EXTRAC_PROYECCION`, `M4CSP_IMPORT_NOM_PRIMAVERA`, `M4CSP_RESUL_REPORTING`, `M4CYC_LOG_BORRADO_ACUMULADOS`, `M4RSC_APPUSER_BACKUP_20261019`, `M4RSC_PERSON_RES`, `M4SCO_AC_HR_PERIOD`, `M4SCO_AC_HR_ROLE`, `M4SCO_CERTIF_LICEN`, `M4SCO_GL_HR_PERIOD`, `M4SCO_GL_HR_ROLE`, `M4SCO_HR_COMP_INFO`, `M4SCO_HR_DOC`, `M4SCO_H_HR_RESP`, `M4SCO_INCONSISTDAT`, `M4SCO_INCONSIST_AC`, `M4SCO_PAYMENT`, `M4SCO_PAYMEN_ORDER`, `M4SCO_PAY_AUX`, `M4SCO_PERIOD_REV`, `M4SSE_CERTIFICATION_LICEN`, `M4SSE_EMP_BCKGRND`, `M4SSE_EMP_LANG`, `M4SSE_EMP_PREV_JBS`, `M4SSE_ENLACES`, `M4SSE_HT_SITIRPF`, `M4SSP_ABSEN_MES`, `M4SSP_ACUMULADO_S1`, `M4SSP_ACUMULADO_SS`, `M4SSP_CRA_CONCEP_ENVIO`, `M4SSP_CRA_HR_PERIOD`, `M4SSP_CRA_HR_ROLE`, `M4SSP_CT_ERR_EMPLEADO`, `M4SSP_CT_HR_ENVIO`, `M4SSP_CT_TRAMOS_ENVIO`, `M4SSP_CT_TRAMOS_ENVIO_PEC`, `M4SSP_CT_VALORES_CONCEPTOS`, `M4SSP_DEPEND_IRPF`, `M4SSP_FDI_PARTE_IT`, `M4SSP_FDI_PARTE_MP_BMP`, `M4SSP_H_RET_JUD`, `M4SSP_H_RET_JUD1`, `M4SSP_LANZ_CERTIF`, `M4SSP_ORD_RET_JUD`, `M4SSP_RES_APOR_PP_ENT`, `STD_HR_ACAD_BACKGR`, `STD_HR_CONTACT`, `STD_HR_LANG`, `STD_HT_HR_LANG`.

## Pendiente para poder grabar con `INSERT`

1. Traducir `CALCULA_VACIOS` (agrupación de categoría) y localizar la
   máscara de `STD_PERSON` que usa `CSP_MASCARA`. Su código está en
   `M4RCH_RULES3` (`ID_ITEM` = nombre del método).
2. Repasar las columnas «opcional»: ver si el alta las rellena en algún caso
   (otro tipo de empleado, becarios, otra sociedad) o si las escribe un
   proceso posterior.
3. Contrastar en PRE una persona dada de alta desde Meta4 con otra grabada
   por powermeta4: mismas tablas, mismas filas y mismos valores en las
   columnas de sistema y en las constantes.
4. Probar en PRE si la aplicación Meta4 ve la persona sin refrescar la caché.
5. Disponer de un usuario de base de datos con permiso de `INSERT` solo en
   las tablas del modelo y de `UPDATE` en `M4CSP_BLOCK_SEQ`
   (`PEOPLENET_DB_WRITE_*`). La excepción a «solo `SELECT`» está aprobada
   desde el 2026-11-24.
6. Agrupación de categoría (`M4CSP_H_HR_JOB_AGRUPA_CAT`, `CALCULA_VACIOS`):
   el alta directa todavía no la escribe.
