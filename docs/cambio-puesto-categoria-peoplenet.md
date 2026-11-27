# Cambio de puesto o categoría en PeopleNet

Cómo lo hace Meta4 y cómo lo reproduce powermeta4 en
«Cambiar puesto o categoría» (`/tools/users/cambio-puesto`).

Fuentes: diccionario Meta4 leído en la VM (solo `SELECT` de `M4RCH_*`,
`M4RDC_*`, `M4SCO_PM_TYPE*`), reglas LN4 de `M4RCH_RULES3` y el JSP del
asistente del portal del responsable (`clon_portal/portal/mss_g3/smco_pm_wz_job_pos.jsp`).

## No es un campo, es un movimiento de personal

En PeopleNet el puesto y la categoría de una persona viven en los **históricos
del rol**, y se cambian con el tipo de **«Modificación del empleado»** `02`
«Cambio de puesto/posición» (`M4SCO_PM_TYPE`):

| Columna | Valor |
| --- | --- |
| `ID_ORGANIZATION` | `CO01` (configuración estándar, compartida) |
| `SCO_ID_PM_TYPE` | `02` |
| `SCO_N_PM_TYPEESP` | Cambio de puesto/posición |
| `SCO_ID_FILTER` | `3` (el movimiento se aplica a un **rol**) |
| `SCO_IND_NEEDS_DATE` | `1` (pide fecha) |
| `SCO_IND_ALLOWS_UPDATE` | `1` |
| `SCO_ID_PRS` | `SRCO_PA_PM_WZ_JOB_POS` |
| `SCO_URL` | `/mss_g3/smco_pm_wz_job_pos.jsp` (petición del responsable) |

El otro tipo configurado es `01C` «Baja y creación de nuevo periodo».

## La cadena que ejecuta Meta4

El motor `SRSP_PA_MODIFICATION` **reutiliza el asistente del alta**
`SRCO_PA_MN_HIRE`. Orden de `M4SCO_PM_TYPE_CAT` para el tipo `02`:

| Orden | Categoría | T3 | Qué hace |
| --- | --- | --- | --- |
| 10 | `SRCO_PM_PAYROLL_LOCK` | `SRCO_PA_MODIFICATION` | comprueba el bloqueo de nómina |
| 20 | `PM_BEFORE_LOAD` | `SRCO_PA_MN_HIRE` | marca que viene de una modificación |
| 30 | `PM_CHANGE_JOB-POS_BEFORE_LOAD` | `SRCO_PA_MN_HIRE` | fija las propiedades del cambio |
| 40 | `LOAD_HIRE` | `SRSP_PA_MN_HIRE` | carga el periodo y el rol principal elegidos |
| 50 | `PM_CHANGE_JOB-POS_BEFORE_SAVE` | `SRCO_PA_MN_HIRE` | decide rol nuevo o actualización |
| 60 | **`SAVE_HIRE`** | `SRSP_PA_MN_HIRE` | graba |

`SAVE_HIRE` es la misma categoría que ya replica el alta directa, así que
powermeta4 reutiliza su modelo (`npm run hire:model`,
`src/lib/meta4/hire/direct/model.generated.json`): de él salen las tablas del
ámbito del rol, sus columnas y su auditoría.

## Las reglas LN4 traducidas

`SRCO_PA_HIRE.SRCO_PM_SET_PROPS_CHANGE_J_P` (antes de cargar):

```
SRCO_PA_HIRE_WIZ_PAY_VALUES.SRCO_PM_CH_JOB_POS_CONTROL_PAY = 1
SRCO_PM_CONTROL_MAIN_ROLE = 1
```

El rol conserva su condición de rol principal.

`SRCO_PA_HIRE.SRCO_PM_VAL_NEW_ROLE_JOB_POS` (antes de grabar):

```
If SRCO_PA_HIRE_WIZ_ORG.SCO_DT_START <> SRCO_ARG_DT_HIRE Then
    SRCO_HI_LOAD_ROLE = M4_FALSE   // rol nuevo
Else
    SRCO_HI_LOAD_ROLE = M4_TRUE    // actualiza el rol
Endif
SRCO_HI_LOAD_PERIOD = M4_TRUE      // el periodo siempre se actualiza
```

Es decir: **si la fecha de corte no coincide con el inicio del rol se crea un
rol nuevo; si coincide se actualiza el que hay. El periodo nunca se crea.**
`SRCO_PA_HIRE.SRCO_PM_SET_IS_FROM_PERS_MOD` añade
`SRCO_HI_IS_HISTORICAL_IMPORT = 1`: la grabación es un cambio de históricos.

`SRCO_PA_MODIFICATION.SRCO_VAL_PAYROLL_LOCK` compara la fecha del movimiento
con `SCO_AUTO_REVISION!SCO_RUN_PAYS.SCO_GET_LOCKED_DATE(matrícula, periodo, rol)`
y rechaza el cambio si la fecha de bloqueo es igual o posterior. Esa fecha es el
máximo de las pagas cerradas, bloqueadas y de baja según los parámetros
`SCO_PARAM_LOCKED_PAYS` y `SCO_PARAM_CLOSED_PAYS`. **powermeta4 todavía no lo
reproduce**: la pantalla lo avisa en cada plan.

## Tablas del ámbito del rol

Lo que «va de la mano»: puesto, categoría, unidad organizativa, ubicación y
centro de coste son tramos del **mismo rol** y se graban en la misma operación.
En CYC el puesto arrastra además su agrupación de categoría.

| Dato | Tabla | Vigencia | Valor | Motivo |
| --- | --- | --- | --- | --- |
| Puesto | `M4SCO_H_HR_JOB` | `SCO_DT_START` / `SCO_DT_END` | `SCO_ID_JOB_CODE` | — |
| Posición | `M4SCO_H_HR_POS_COM` | `SCO_DT_START` / `SCO_DT_END` | `SCO_ID_POSITION` | `SCO_ID_REASON_CHAN` |
| Categoría | `M4SSP_H_CATEGORIA` | `SSP_FEC_INICIO` / `SSP_FEC_FIN` | `SSP_ID_CATEGORIA` | `SSP_ID_MOTIVO_CAMB` |
| Unidad organizativa | `M4SCO_H_HR_WUNIT` | `SCO_DT_START` / `SCO_DT_END` | `SCO_ID_WORK_UNIT` | `SCO_ID_REAS_CHNG` |
| Ubicación y centro funcional | `M4SCO_H_HR_WLOC` | `SCO_DT_START` / `SCO_DT_END` | `SCO_ID_WORK_LOC`, `CSP_ID_WORK_FUNCTIONAL` | `SCO_ID_REAS_CHNG` |
| Centro de coste | `M4SSP_H_CENT_COS` | `SSP_FEC_INICIO` / `SSP_FEC_FIN` | `SSP_ID_CENT_COSTO` | `SSP_ID_MOTIVO_CAMB` |
| Estructura | `M4CYC_H_ESTRUCTURA` | `DT_START` / `DT_END` | `ID_ESTRUCTURA` | `SCO_ID_REA_CHANG` |
| Puesto Atradius | `M4CSP_H_ATRADIUS_JOB` | `DT_START` / `DT_END` | `CSP_ID_ATRADIUS_JOB` | — |
| Categoría Atradius | `M4CSP_H_CATEG_ATRADIUS` | `DT_START` / `DT_END` | `CSP_ID_CATEG_ATRADIUS` | — |
| Agrupación de categoría | `M4CSP_H_HR_JOB_AGRUPA_CAT` | `DT_START` / `DT_END` | `ID_JOB_AGRUPACION_CATEGORIA` (clave: `ID_JOB_CODE`) | — |
| Equivalencia categoría/puesto | `M4CSP_H_EQUIV_CAT_JOB_CYC` | `DT_START` / `DT_END` | `CSP_ID_EQUIV_CAT_JOB_CYC` (clave: `STD_ID_JOB_CODE`) | — |

El rol es `M4SCO_HR_ROLE` (`SCO_DT_START`, `SCO_DT_END`, `SCO_MAIN_ROLE`,
`SCO_ID_INT_RO_TY`, `SCO_ID_REA_CHANG`, `SCO_N_ROLEESP`). Tienen auditoría
`M4SCO_HR_ROLE` (`AUC_HR_ROLE`), `M4SCO_H_HR_JOB` (`AUC_H_HR_JOB`),
`M4SCO_H_HR_WUNIT` (`AUC_H_HR_WUNIT`), `M4SCO_H_HR_WLOC`
(`AUC_H_HR_WLOCATION`) y `M4SSP_H_CENT_COS` (`AUC_H_CENT_COS`).

Los motivos de cambio (`SCO_ID_REASON_CHANGE`) salen de `M4SCO_X_JOB_CHG_RE`,
organización `0000`: `001` Promoción, `002` Desaparición del puesto anterior,
`003` Creación de nuevo puesto, `004` Valoración de Puestos de Trabajo. El mismo
catálogo vale para el rol, la unidad organizativa y la categoría.

## Lo que hace powermeta4

`src/lib/meta4/job-change`:

- `fields.ts`: la tabla de arriba, declarativa.
- `current.ts`: `SELECT` parametrizadas del periodo, el rol principal vigente y
  los tramos de cada histórico, con `@organization` del contexto operativo.
- `lookups.ts`: nombre del puesto o de la posición (para `SHCO_SET_ROLE_NAME`:
  el rol se llama `J-<puesto>` o `P-<posición>`) y la agrupación de categoría
  (`CALCULA_VACIOS`), que reutiliza la del alta.
- `plan.ts`: lógica pura que traduce las reglas LN4 y devuelve las filas que
  Meta4 escribiría: rol nuevo más cierre del anterior, o actualización del rol;
  tramo nuevo con su cierre, o actualización del tramo cuando empieza justo en la
  fecha de corte. Si cambia una columna de la clave (el puesto en la agrupación o
  en la equivalencia) el tramo no se actualiza: se cierra y se abre otro.
- `request.ts`: valida lo que llega del navegador. La sociedad nunca viaja.
- `service.ts`: orquesta. **No tiene rama de escritura.**

La pantalla muestra la situación actual, el cambio y el plan, con «Grabar en
PeopleNet» deshabilitado.

## Pendiente para poder grabar

1. Aprobar la excepción de escritura: hoy la única aprobada es el alta de
   personas.
2. El escritor del alta (`src/lib/meta4/hire/direct/write.ts`) solo hace
   `INSERT`. El cambio necesita además `UPDATE` para cerrar el tramo anterior y
   el rol, y permisos de `UPDATE` en `M4SCO_HR_ROLE` y en los históricos para el
   usuario de `PEOPLENET_DB_WRITE_*`.
3. Traducir `SRCO_PM_PAYROLL_LOCK` (`SCO_GET_LOCKED_DATE` y sus parámetros).
4. Comprobar la caché de los Meta4Object: un cambio escrito por fuera puede no
   verse en la aplicación hasta que se refresque.
5. Contrastar en PRE con una persona a la que Meta4 le haya cambiado el puesto:
   los tramos del plan deben coincidir con los tramos reales.
