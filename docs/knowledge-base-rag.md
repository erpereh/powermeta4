# RAG y adjuntos del chat

El chat de powermeta4 responde a consultas generales con el historial de la
rama activa. Solo busca en el índice cuando el turno pide documentación
interna, trata de PeopleNet o continúa una consulta documental. En ese modo,
el asistente respalda la respuesta con los manuales. El botón **Fuentes** abre
las referencias de cada respuesta. Los manuales enlazan a la página utilizada
y los adjuntos se pueden descargar.

## Construir y mantener el índice

```powershell
npm run kb:ingest -- --lexical
npm run kb:status -- --reviews
npm run kb:ingest -- --vectors-only
npm run kb:evaluate -- --calibrate
npm run kb:evaluate
```

La ingesta recorre `KB_SOURCE_DIR`, con `./manuales` por defecto. SQLite
registra rutas, huellas, páginas físicas, fragmentos y estado de extracción.
Reconstruye el texto por posición, conserva tablas y ejemplos de código, y
aplica OCR local con modelos de español, inglés y portugués. También recupera
celdas y líneas con caracteres mal codificados a partir de su imagen. Cuando
una página queda pendiente, la revisión se vincula al PDF exacto mediante su
SHA-256 y su número de página. La extracción y el índice se guardan en una
generación candidata. La generación publicada permanece disponible mientras
se incorporan manuales nuevos.

Los PDF autorizados de `oficiales/` se embeben con
`nvidia/nemotron-3.5-embed-8b:free` a 4096 dimensiones. El README y los
fragmentos rechazados por el proveedor permanecen en la búsqueda local
(`npm run kb:status -- --find="términos"`). Se retiran datos personales y
secretos identificados antes de enviar texto de los manuales. La ingesta
conserva cada lote completado y reanuda por huella. `--max-requests=N` acota
una ejecución. La ingesta empieza por `EMBEDDING_API_KEY` y avanza en orden
hasta `EMBEDDING_API_KEY5` cuando la cuota diaria de una credencial se agota o
se deniega su acceso. Los límites temporales del proveedor se comparten entre
las claves y se respetan antes de reintentar. Con `--wait-for-quota`, al agotar
las claves se vuelve a comprobar la cuota para reanudar desde el último lote.
`kb:status` sigue disponible.

Para incorporar una transcripción contrastada o clasificar una página sin
contenido técnico, prepara un JSON con objetos `sha256`, `page` y `reason`.
Añade `text` si la página contiene información y `figure: true` si se trata
de una transcripción visual. Aplica el archivo con
`npm run kb:ingest -- --vectors-only --review=ruta.json`.

La recuperación combina FTS5, coincidencias exactas y vectores calculados en
un worker local. Limita pasajes repetidos, incluye contexto cercano cuando
aporta evidencia y conserva variantes y versiones. Si OpenRouter no responde,
la recuperación léxica usa coincidencias de alta confianza. El chat vincula
las afirmaciones de los manuales a páginas del PDF exacto mediante el panel
**Fuentes**. Indica cuándo falta evidencia para responder con seguridad.

## Validar, publicar y trasladar

`kb:evaluate -- --calibrate` compara variantes de ranking con las mismas
consultas. `kb:evaluate` genera respuestas reales y guarda preguntas,
respuestas, páginas y latencias en `evaluation.json` dentro de `KB_DATA_DIR`.
La opción `--holdout` selecciona 15 consultas documentales y 5 casos de
insuficiencia de la muestra independiente. La aceptación requiere 14 de 15
documentales correctas y fundamentadas y 5 de 5 abstenciones, con un mínimo
efectivo de 19 de 20. `--holdout-full` ejecuta la muestra original de 40.
Ambos modos requieren una ingesta completa.
La evaluación HTTP usa un servidor local con DEBUG y directorios de datos
aislados. La copia de aceptación contiene un SQLite autónomo y
`snapshot.json` con su generación, huella del inventario y SHA-256 del índice.
La evaluación comprueba esa huella antes y después del chat. `--prime-queries`
calcula por lotes los vectores de prueba, y `--cold=N` deja las primeras
consultas para medir la llamada real a OpenRouter. `--measure-retrieval` mide
la recuperación local de las consultas con vector en caché.

Tras cotejar las respuestas y sus fuentes, publica con
`npm run kb:publish -- ruta/al-acta.json --evaluated-root=ruta/a/la/copia`.
El acta contiene `generation`, `inventoryHash`, `indexSha256`, `correct`,
`grounded` e `insufficient`. Para la muestra reducida incluye
`sampleSize: 20`. La publicación comprueba el inventario, las
páginas sin resolver, los vectores y los PDF. Guarda el acta aparte y copia
los bytes exactos del índice evaluado. `--prepare` instala la generación y
deja su activación pendiente para la ventana de mantenimiento.

```powershell
npm run kb:export -- data/powermeta4-rag.zip
npm run kb:import -- data/powermeta4-rag.zip
```

El ZIP del RAG contiene el índice, sus originales y un manifiesto versionado
con el acta y las huellas. `kb:export -- archivo.zip --generation=sealed-…`
permite exportar una generación preparada. La importación valida el paquete
en una generación aparte y lo activa al terminar. Los bytes del índice, sus
vectores, páginas citables y revisiones sobreviven al traslado.
`KB_DATA_DIR` apunta por defecto a
`data/knowledge` dentro del directorio local de datos. Este almacenamiento
y su ZIP son independientes de las copias del workspace y del chat.

Referencias del proveedor. [Modelo y dimensiones](https://openrouter.ai/nvidia/nemotron-3.5-embed-8b%3Afree) ·
[Límites y consulta de cuota](https://openrouter.ai/docs/api_reference/limits).

## Adjuntar archivos

El clip y el arrastre admiten hasta tres archivos por mensaje de 5 MiB cada
uno. Se leen PDF con texto (hasta 80 páginas), TXT, Markdown, CSV y XLSX.
Los textos y CSV se leen en UTF-8 y los Excel usan los valores guardados en
las celdas. Si la selección de contexto recorta un archivo o quedan páginas
sin texto, la fuente está marcada como lectura parcial.

Los originales quedan en `uploads/chat/`, asociados a la conversación y a
su mensaje de usuario. SQLite conserva las referencias al adjunto en la rama.
El servidor comprueba sesión, empresa y conversación para subir y descargar.
La edición puede conservar o retirar adjuntos de la nueva rama y regenerar
respuestas reutiliza los adjuntos de sus mensajes anteriores. La copia local
incluye la base y los archivos gestionados.

El chat pasa al proveedor el texto de los adjuntos que acompañan la petición
o que se usan para responderla, con un presupuesto de 24.000 caracteres por
turno. El proveedor de embeddings recibe únicamente la consulta de búsqueda
de manuales de los turnos documentales.
El texto extraído se mantiene fuera del índice de manuales. Tanto los PDF de
referencia como los adjuntos se incorporan en un bloque de datos separado de
las instrucciones del sistema y de la pregunta actual.

Para probar el flujo, se puede adjuntar un recibo de prueba y pedir los
conceptos e importes junto con un ejemplo de sintaxis LN4. Las equivalencias
sin respaldo se dejan pendientes. También se puede subir un XLSX con medidas
ficticias y pedir una comparación entre filas u hojas.
