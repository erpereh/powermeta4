# Descubrimiento del calendario de festivos

Solo metadatos del diccionario y columnas físicas. Sin valores de empleados ni escrituras. La sociedad identifica el contraste solicitado; el diccionario Meta4 es compartido.

Sociedad para contraste: CYC.

Nodos: 2 · TI: 3 · filas de metadatos: 400.

## Advertencias

- Sin truncamientos detectados.

## Nodos y sentencias originales

### SSE_CARGA_FESTIVOS!SSE_BUSCA_CALENDARIO

TI: SSE_BUSCA_CALENDARIO · objeto lógico: SCO_HR_ROLE · tabla: M4SCO_HR_ROLE.


```sql
SELECT @SCO_ID_HR = A.SCO_ID_HR, @SCO_OR_HR_ROLE = A.SCO_OR_HR_ROLE, @SCO_OR_HR_PERIOD = A.SCO_OR_HR_PERIOD, @SCO_DT_START = A.SCO_DT_START, @SCO_DT_END = A.SCO_DT_END, @SCO_N_ROLE = A.SCO_N_ROLE, @SCO_MAIN_ROLE = A.SCO_MAIN_ROLE FROM &SCO_HR_ROLE A WHERE (A.SCO_DT_END >= #TODAY ())
```

### SSE_CARGA_FESTIVOS!SSE_FESTIVOS

TI: SSE_FESTIVOS · objeto lógico: SCO_CALENDAR_REP · tabla: M4SCO_CALENDAR_REP.


```sql
SELECT @SCO_ID_CALENDAR = A.SCO_ID_CALENDAR, @DT_START = A.DT_START, @SCO_DT_DAY = A.SCO_DT_DAY, @SCO_ID_DAYCALEN_TYPE = A.SCO_ID_DAYCALEN_TYPE, @SCO_CK_PROCESS = A.SCO_CK_PROCESS, @SCO_COMMENT = A.SCO_COMMENT FROM &SCO_CALENDAR_REP A
```

## Código LN4 y correspondencias

El JSON adjunto conserva las filas de M4RCH_RULES3.SOURCE_CODE, ítems, filtros, conectores, TI base y campos lógicos/físicos disponibles. Ningún método se ejecuta.

Contrastar CARGA, SSE_BUSCA_CALENDARIO, el calendario elegido, su vigencia y los códigos de día usados para ENERO–DICIEMBRE antes de activar la lectura real. Los vacíos o truncamientos no acreditan ausencia de festivos.

