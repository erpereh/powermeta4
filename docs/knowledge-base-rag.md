# RAG y adjuntos del chat

El chat de powermeta4 combina el historial de la rama activa, fragmentos de
manuales de PeopleNet y texto extraído de los archivos que el usuario adjunta.
El botón **Fuentes** abre las referencias de cada respuesta. Los manuales
enlazan a la página utilizada y los adjuntos se pueden descargar.

## Indexar los manuales

```powershell
npm run kb:ingest -- --lexical
npm run kb:ingest -- --max-vectors=120
npm run kb:evaluate -- --lexical
npm run kb:evaluate
```

La ingesta carga `.env.local` y recorre `KB_SOURCE_DIR`. Extrae el texto por
página, limpia cabeceras y pies repetidos y publica los fragmentos de cada PDF
juntos en SQLite. El archivo original queda bajo `uploads/manuals/`.
La ruta de origen identifica el documento y su huella permite omitir archivos
sin cambios. Las referencias guardan la versión del PDF que se consultó.

El índice FTS5 queda disponible al acabar la extracción. La ingesta normal
continúa con los embeddings en lotes y prioriza LN4 y nómina. Los lotes
completados se guardan y una ejecución posterior continúa por los fragmentos
pendientes. `--lexical` usa solo recursos locales. `--max-vectors=N` limita
los vectores generados en esa ejecución. Los límites temporales se reintentan
respetando el plazo indicado por el proveedor. Los demás límites conservan el
avance y detienen la ingesta vectorial.

La conexión de embeddings puede ser independiente. Si `EMBEDDING_BASE_URL`
y `EMBEDDING_API_KEY` están vacías, se usan las variables del chat. El
entorno de desarrollo se comprobó con `EMBEDDING_MODEL=gemini-embedding-001`,
`EMBEDDING_DIMENSIONS=768` y `KB_MIN_SCORE=0.55`.
El índice semántico compara únicamente vectores del modelo activo y de la
dimensión de consulta. El umbral se ajusta contra preguntas conocidas cada
vez que se cambia de modelo. `KB_TOP_K` controla la selección y el chat envía
hasta seis fragmentos. El tamaño y solape predeterminados de fragmento son
1.200 y 150 caracteres.

La consulta fusiona similitud semántica con FTS5, da prioridad a identificadores
exactos y limita fragmentos repetidos. Los seguimientos breves pueden incorporar
la pregunta anterior de la misma rama. Si los embeddings fallan o faltan,
se usan coincidencias léxicas con suficiente cobertura.
`kb:evaluate` compara el ranking anterior y el actual sobre el mismo índice,
incluye seguimientos y preguntas ajenas al dominio e informa de aciertos,
falsos positivos y latencia. En la prueba vectorial, ambas evaluaciones
comparten el vector de la misma pregunta cuando es posible.

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

Al enviar una pregunta, el chat pasa al proveedor solo texto de los
adjuntos utilizados, con un presupuesto de 24.000 caracteres por turno.
El proveedor de embeddings recibe únicamente la consulta de búsqueda.
El texto extraído se mantiene fuera del índice de manuales. Tanto los PDF de
referencia como los adjuntos se incorporan en un bloque de datos separado de
las instrucciones del sistema y de la pregunta actual.

Para probar el flujo, se puede adjuntar un recibo de prueba y pedir los
conceptos e importes junto con un ejemplo de sintaxis LN4. Las equivalencias
sin respaldo se dejan pendientes. También se puede subir un XLSX con medidas
ficticias y pedir una comparación entre filas u hojas.
