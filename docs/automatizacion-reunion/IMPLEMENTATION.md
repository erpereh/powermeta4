# Cuadre de nómina: uso, instalación y validación

Entrega de implementación: 2026-10-27. Se conserva el análisis documental
previo como evidencia, sin reinterpretar sus hechos.

La herramienta `/tools/cuadre-nomina` permite crear expedientes parciales,
guardarlos y completarlos con fuentes posteriores. La sociedad procede de la
sesión; no hay escrituras ERP ni envío de datos al chat o a servicios externos.

## Instalar y abrir

En la instalación donde se ejecuta powermeta4, con el servidor detenido:

```powershell
git pull
npm ci
npm run setup
npm run build
npm run start
```

`setup` aplica la migración 011 sobre SQLite. No modifica PeopleNet ni los
datos anteriores. La versión de esquema pasa a 11: la política existente
exige que los backups restaurados tengan esa misma versión. Exporta una copia
antes de actualizar y conserva la instalación compatible si necesitas restaurar
una copia de esquema anterior; no edites su manifest para forzar compatibilidad.

Abre **Herramientas → Cuadre de nómina**. Para trabajar en local sin conectividad,
activa el modo debug documentado en README y ejecuta `npm run dev`. La muestra
solo está disponible con sesión debug válida, en desarrollo y con el flag
habilitado; producción nunca la habilita.

## Trabajar por entregas

1. Crea un expediente, elige el informe y después su ejecución actual. El
   selector permite buscar entre sus ejecuciones de todos los periodos; las
   vacías aparecen deshabilitadas. El mes se deriva de la fecha de acumulación
   de la ejecución elegida y no se introduce manualmente. La anterior es
   opcional: se propone la más reciente del mes natural anterior con igual
   informe, frecuencia y tipo de paga conocido, y se exige confirmar el alcance.
2. Consulta los resultados mensuales sin esperar a los Excel. Los controles
   externos aparecen pendientes hasta incorporar sus fuentes.
3. En Fuentes, elige categoría y mes de devengo, comprueba el archivo y confirma
   periodo de nómina, cobertura y sustitución cuando corresponda. Para comisiones
   puedes declarar su ventana. Las categorías usan perfiles acreditados;
   no se adivinan equivalencias para estructuras desconocidas.
4. Añade fuentes más adelante o abre el expediente después de reiniciar.
   Los originales no se conservan: se guardan las entradas normalizadas,
   referencias y huellas necesarias para reproducir el resultado.
5. Confirma parámetros/vigencias del periodo y excepciones documentadas.
   Los valores de octubre no se precargan como reglas universales.
6. Abre un hallazgo para revisar operandos, referencias y comentarios. La
   revisión manual nunca cambia el delta. Nuevas evidencias invalidan las
   revisiones afectadas. Desde **Revisión → Editar revisión** puedes cambiar
   la decisión y el comentario guardados. Las decisiones «Diferencia justificada»
   y «Requiere corrección manual» necesitan comentario. Cancelar descarta el
   borrador. Una revisión invalidada abre el resultado actual como Pendiente,
   con el comentario anterior editable y un aviso para revisarla de nuevo.
   Un hallazgo que ya no existe se identifica como «Hallazgo anterior» y no se
   puede editar. Ante un conflicto, el formulario conserva el borrador y permite
   volver a cargar el expediente antes de guardar.
7. «Actualizar desde PeopleNet» relee o cambia las ejecuciones tras confirmación.
   Abrir, añadir fuentes o exportar no actualiza silenciosamente las nóminas.
8. Exporta el libro con Resumen, Expediente, Fuentes, Datos actual/anterior,
   Entradas externas, C01–C16 y Revisión. Los pendientes se conservan; no hay aprobación automática
   del cierre ni reproducción de fórmulas rotas.

Las hojas C01–C16 contienen siete columnas: Matrícula, Persona, Concepto,
Actual, Anterior / esperado, Diferencia y Motivo / pendiente. Las diferencias
superiores a la tolerancia se marcan en naranja suave; las filas sin fuente o
no comparables, en gris; las coincidencias no llevan relleno especial. No se
exportan las columnas Unidad, Resultado ni Evidencias en estas hojas. En IRPF,
las cabeceras indican porcentajes (%) y diferencia en puntos porcentuales (pp).
Las filas se ordenan por resultado: Con diferencia, Falta fuente, No comparable
y Coincide, conservando su orden dentro de cada grupo. Justificar una diferencia
no cambia su posición ni su color calculado.

Todo el libro usa anchuras adaptadas al contenido, con un máximo de 80 caracteres
y columnas amplias de personas, conceptos y motivos. Los nombres, conceptos e
importes se mantienen en una línea; los comentarios largos permiten varias líneas
sin recortar su contenido. Los motivos automáticos se abrevian solo en la descarga
(por ejemplo, «Fuera del listado»), conservando las causas relevantes y los textos
de excepciones y referencias documentales escritos por el usuario.

Las 23 hojas omiten hashes, huellas, perfiles y versiones internas. Los campos,
categorías y parámetros tienen etiquetas legibles; cada parámetro aparece una vez.
Las fechas son legibles en horario de Madrid. Revisión identifica matrícula,
persona, control y concepto; los hallazgos antiguos no exponen su ID interno.
Se conservan las referencias de hoja/fila, documento, solicitud o cuota, los ceros
iniciales y la precisión decimal completa. Los cálculos y las evidencias del
expediente permanecen intactos en la aplicación.

### Qué archivo importar

Los diez originales locales de `fuentes_cuadres_cierre_de_nómina` se utilizan
sin modificarlos. Confirma el mes de nómina y el devengo de cada documento:
un archivo de septiembre puede corresponder a la nómina de octubre.

| Archivo                                           | Categoría en Fuentes            | Qué comprobar                                                                                   |
| ------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `25 40 Aniversario 2026.xlsx`                     | Aniversarios 25/40              | Entidad, antigüedad, elegibilidad y base del periodo.                                           |
| `Altas Gimnasio 2026.xlsx`                        | Gimnasio                        | Columna de pago mensual y cobertura del listado.                                                |
| `CYC_COMISION_SERVICIOS_20261015_162723.xlsx`     | Comisiones / kilómetros         | Se lee Carga de Valores; confirmar devengo y ventana. No sumar Detalle/Desglose.                |
| `Cobro nomnas 13 junio-18 julio.xlsx`             | Apartamentos                    | Se leen cuotas del mes de Bonos disfrute; confirmar año y cobertura de los bloques.             |
| `Colectivo afectado tecnología teletrabajo.xlsx`  | Colectivo teletrabajo           | Confirma tarifa, días y excepciones del periodo; el colectivo no acredita esos parámetros.      |
| `Descuento comida septiembre nómina octubre.xlsx` | Ausencias / compensación comida | Confirmar días de derecho, tarifa y excepciones; no duplicar las dos hojas.                     |
| `Eurest nómina septiembre.xlsx`                   | Eurest                          | Tiene una matrícula inválida que debe corregirse en el original; no se vincula por nombre.      |
| `FPS_Crédito_y_Caución_2026-10.xlsx`              | Flex / Mercer                   | Se leen las nueve métricas mensuales; confirmar cobertura y devengo.                            |
| `Normal_Inf 0001_C_202610161141 cuadres.xls`      | PPSE (hoja embebida)            | Se lee Fichero PPSE para el mes elegido; criterio y calendario siguen pendientes de validación. |
| `Recarga comida ACYC septiembre.xlsx`             | Recarga tarjeta comida          | Combinar con Eurest y confirmar tarifa/base y cobertura; los solapes quedan pendientes.         |

El libro Normal no sustituye las ejecuciones actual/anterior seleccionadas en
PeopleNet. Sus hojas Datos, Datos2 y Datos3 son de octubre de 2026 y no acreditan
un mes anterior; sus copias de fuentes tampoco deben cargarse como documentos
independientes. Siguen faltando el registro independiente de excesos y las
cartas/calendario de anticipos; pueden prepararse con las plantillas de esas
categorías. La ejecución anterior debe seleccionarse del catálogo de PeopleNet.

La lista permite eliminar expedientes con confirmación. Se conservan hasta
eliminación explícita; los backups anteriores mantienen sus datos. El acceso
sigue el contexto operacional de Resultados de nómina, sin roles nuevos.
La instalación y sus copias deben custodiarse como datos de nómina.

### Si no aparecen ejecuciones

El diálogo distingue carga en curso, error de conexión, catálogo vacío e
informe sin resultados utilizables. «Actualizar catálogo»/«Reintentar catálogo»
vuelve a consultar; «Abrir Resultados de nómina» permite contrastar el listado
existente en la misma sociedad. No hace falta cerrar el diálogo para ver el error.

Si solo hay ejecuciones antiguas, pueden seleccionarse con su mes real; no se
convierten en nóminas del año actual. Para un periodo que no existe, hay que
generar el informe en PeopleNet o comprobar que se está utilizando el entorno
correcto y actualizar el catálogo. No hay generación automática en esta herramienta.

Al actualizar un expediente, su periodo se conserva. Elegir una ejecución de
otro mes muestra una explicación y bloquea la actualización: para ese otro mes
se crea un expediente nuevo. Una carga fallida o una selección sin confirmar no
modifica las instantáneas guardadas.

## Contratos implementados

Las rutas usan Node.js, sesión y contexto validados en servidor, comprobación
de origen y respuestas `no-store`:

| Interfaz                             | Operación                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `GET /api/payroll/reconciliation`    | Lista resumida; `?id=` abre expediente; `?catalog=1` consulta ejecuciones.                  |
| `POST /api/payroll/reconciliation`   | Crea expediente desde claves ERP confirmadas, o muestra debug autorizada.                   |
| `PATCH /api/payroll/reconciliation`  | Parámetros, revisión, actualización explícita de instantáneas, retirada de fuente o nombre. |
| `DELETE /api/payroll/reconciliation` | Elimina por ID y revisión esperada dentro del contexto actual.                              |
| `POST .../preview`                   | Multipart `file` y `metadata`: valida perfil y devuelve recuentos/referencias. No guarda.   |
| `POST .../analyze`                   | Incorpora o sustituye una fuente confirmada y recalcula el expediente.                      |
| `POST .../export`                    | ID y revisión; recalcula desde fuentes guardadas y descarga Excel.                          |

Las mutaciones usan revisión optimista. Un `409` exige volver a abrir el
expediente: no se sobreescribe trabajo concurrente ni se exporta una revisión
obsoleta. El servidor no acepta resultados, sociedad, SQL ni rutas del cliente.
El identificador interno de empresa en cabecera solo permite detectar cambios
de contexto, nunca autoriza otra sociedad.

Límites: 16 MiB/archivo, 32 MiB/petición, veinte fuentes, 100.000 filas por
libro, dos millones de celdas del conjunto y 128 MiB de expansión XLSX por
petición. Una carga incorpora un archivo; pueden añadirse más sucesivamente.
Solo preview/analyze/export se excluyen del clonado del proxy; mantienen
autenticación y lectura de cuerpo limitada en su handler.

El motor suma importes antes de comparar y consolida porcentajes idénticos,
sin sumarlos. Usa enteros escalados a 24 decimales; divisiones truncadas a esa
precisión. Las fuentes con precisión no representable no se convierten en cero.
Los DTO y las celdas de valores exactos usan strings decimales. La tolerancia
de 0,01 EUR/pp es editable y sigue siendo un valor de piloto.

## Qué queda condicionado

- C01/C02/C08/C15 necesitan anterior compatible; la ausencia de una persona
  no se interpreta como baja laboral ni como cero.
- C03/C06/C07/C10/C14/C16 tienen perfiles contrastados con los originales.
  Se conservan sus diferencias conocidas, la identidad inválida de Eurest y
  los registros finales de PPSE. Q13 mantiene pendiente la aceptación económica
  del calendario; una coincidencia numérica no lo valida por sí sola.
- C04 exige matrículas con devengo completo declarado para una paga concreta,
  o excepción acreditada; la proporcionalidad no se inventa.
- C05/C09 necesitan tarifa, días y vigencia confirmados; los casos particulares
  usan la plantilla de excepciones, no comentarios que cambien importes.
- C11/C12 admiten las plantillas normalizadas descargables. Faltan los
  registros independientes del cliente para validar su uso operativo.
- C13 filtra antigüedad, mes/año y entidad presente en la nómina. Requiere
  confirmar elegibilidad/base por entidad o excepción independiente.
- Solapes de recarga/Eurest o duplicados no acreditados quedan no comparables.
  El perfil de apartamentos delimita los bloques recibidos; si crecen fuera
  del contrato se debe validar una nueva versión.

Las causas históricas automáticas y cualquier formato de carga/escritura en
PeopleNet permanecen fuera de esta implementación. Los originales solo se
utilizan en pruebas locales; nunca se añaden a Git ni al runtime público.

## Scripts para ejecutar en tu entorno

Usan `PEOPLENET_DB_*` de `.env.local` o del entorno. Solo ejecutan las SELECT
de los lectores existentes y cierran el pool. No necesitan usuario/contraseña
en argumentos ni generan archivos automáticamente.

Primero obtén los metadatos de octubre y septiembre:

```powershell
npm run cuadre:discover -- CYC --period 2026-10
npm run cuadre:discover -- CYC --period 2026-09
```

Puedes pasarme ambos JSON de salida: incluyen claves de ejecución, cabeceras,
ocurrencias y recuentos; excluyen filas personales, importes y comentarios.
Permiten validar Q02 y la compatibilidad del informe elegido. Cambia CYC por
IBER/COLL únicamente en el entorno autorizado para esa sociedad.

Crea un selector local, por ejemplo `data/cuadre-selection.json`, copiando las
claves reales de las ejecuciones deseadas. Este ejemplo es sintético:

```json
{
  "currentKey": {
    "reportId": "01_C",
    "runAt": "2026-10-16T10:00:00.000Z",
    "accruedOn": "2026-10-25",
    "payFrequency": "001"
  },
  "previousKey": null
}
```

Sustituye `previousKey: null` por la clave de septiembre si está disponible:

```powershell
npm run cuadre:verify -- CYC --selection "data/cuadre-selection.json"
```

Devuélveme ese JSON de recuentos por control. No demuestra las reglas pendientes
de RRHH ni pide compartir datos personales. Si falla la conexión, no envíes
credenciales, logs SQL ni `.env.local`; basta el código de error saneado y la
etapa que estabas comprobando.

La verificación sin base de datos utiliza únicamente los originales locales:

```powershell
npm run cuadre:verify-local -- "docs/automatizacion-reunion/fuentes_cuadres_cierre_de_nómina"
```

No modifica archivos, no usa Excel COM y no imprime identidades/importes.
Usa Datos como referencia de octubre; no considera Datos2/Datos3 un septiembre
auténtico. Las pruebas sintéticas sí cubren meses distintos y el cambio de año.

## Validación ejecutada y pendiente

Actualización 2026-11-03: typecheck y build correctos. Suite completa de 199
archivos, 1.153 pruebas correctas y dos omitidas. Tras simplificar los últimos
avisos, pase dirigido final de tres archivos con 27 pruebas correctas. La prueba
local de los diez originales conserva los recuentos, diferencias y hashes.
Setup ejecutado en una base aislada para las comprobaciones de depuración.

En navegador local con sesión debug se comprobó creación, revisión, edición
desde Revisión, cancelación, guardado y reapertura después de recargar,
invalidación por cambio de evidencia y bloqueo de hallazgos antiguos. El modal
se comprobó a 1440/1024/768/390 px, con nombres largos, sin overflow horizontal
de página ni errores JavaScript. Se descargó el Excel real de 23 hojas con
fuentes ficticias y precisión decimal completa.

Excel nativo abrió la descarga en solo lectura: nombres y conceptos sin ajuste,
fila de 20 puntos y motivo «Fuera del listado»; un comentario de 915 caracteres
se ajustó a una fila de 180 puntos. El archivo mantuvo sus bytes después de
cerrarlo. Los originales corporativos no se modificaron.

Lint global ejecutado: siete avisos previos y formato pendiente en 618 archivos.
Lint/formato dirigido correcto en el código modificado y esta guía; el registro
está en `spec/changelog.md`. El benchmark, la conexión y la aceptación operativa
en PeopleNet requieren ejecutar los scripts anteriores en tu entorno.
