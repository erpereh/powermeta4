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

1. Crea un expediente y elige mes, informe y ejecución actual. Se ofrecen todos
   los informes del catálogo existente. La anterior es opcional; se propone
   una ejecución del mes anterior con igual informe y frecuencia y se exige
   confirmar el alcance.
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
   revisiones afectadas.
7. «Actualizar desde PeopleNet» relee o cambia las ejecuciones tras confirmación.
   Abrir, añadir fuentes o exportar no actualiza silenciosamente las nóminas.
8. Exporta el libro con Resumen, Expediente, Fuentes, Datos actual/anterior,
   Entradas externas, C01–C16 y Revisión. Los pendientes se conservan; no hay aprobación automática
   del cierre ni reproducción de fórmulas rotas.

La lista permite eliminar expedientes con confirmación. Se conservan hasta
eliminación explícita; los backups anteriores mantienen sus datos. El acceso
sigue el contexto operacional de Resultados de nómina, sin roles nuevos.
La instalación y sus copias deben custodiarse como datos de nómina.

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

Typecheck y build correctos. Suite completa: 196 archivos, 1.121 pruebas
correctas y dos omitidas; comprobación dirigida posterior: siete archivos,
40 pruebas correctas. Se probó backup/restauración con el servicio real de
copias locales y la migración mediante setup en una base aislada.

En navegador local se comprobó creación, revisión, reapertura después de
recargar, carga progresiva de un Excel sintético de 11.646.303 bytes y descarga
real del libro de 23 hojas. Se revisaron los temas claro/oscuro a 1305 × 703,
sin overflow horizontal de página. La matriz visual 1440/1024/768/390 y el
benchmark en la VM quedan pendientes; no se presentan como pruebas realizadas.

El contraste contra los diez originales conserva los recuentos y diferencias
documentados. El lint global falla por formato pendiente en archivos previos;
el registro exacto está en `spec/changelog.md`. La conexión y aceptación
operativa en PeopleNet requieren ejecutar los scripts anteriores en tu entorno.
