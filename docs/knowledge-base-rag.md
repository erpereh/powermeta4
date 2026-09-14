# Base de conocimiento (RAG sobre manuales PDF)

El chat puede responder basándose en manuales PDF indexados de antemano, en
lugar de solo con lo que el modelo ya sabe. Cada respuesta que use esa
documentación cita el documento y la página de donde viene.

## Arquitectura

```
PDF (offline, npm run kb:ingest)
  → extracción de texto por página (unpdf)
  → limpieza de cabeceras/pies de página repetidos
  → división en fragmentos con solape (por página, nunca cruzan página)
  → embedding por fragmento
  → kb_documents / kb_chunks (+ índice FTS5 kb_chunks_fts)

Pregunta del usuario (por turno, en /api/chat/run)
  → embedding de la pregunta
  → similitud coseno sobre los vectores + candidatos por palabra clave (FTS5)
  → top-K por encima de un umbral de confianza
  → system message con las citas (documento + página) como DATOS
  → proveedor de IA configurado → respuesta
```

Todo lo relacionado con "hablar con un proveedor de IA" vive en
`src/lib/ai/`: una interfaz de chat (`chat-provider.ts`) y una de embeddings
(`embedding-provider.ts`), con una única implementación hoy
(`providers/http-compatible.ts`) que habla el protocolo HTTP estándar ya
configurado en `AI_BASE_URL`/`AI_API_KEY`. Ni el chat ni el módulo de
conocimiento (`src/lib/knowledge/`) llaman a ese protocolo directamente:
piden la implementación activa a `getChatProvider()` / `getEmbeddingProvider()`.

## Base de datos

Dos tablas nuevas (migración `010_knowledge_base.sql`), sin tocar ninguna
tabla existente:

- `kb_documents`: un PDF indexado (ruta, checksum, nº de versión, modelo de
  embeddings usado, fecha de indexación...). Los PDF en sí no se guardan en
  la base de datos, se copian a `data/uploads/manuals/` (por eso quedan
  incluidos automáticamente en los backups existentes) y la tabla solo
  guarda la referencia.
- `kb_chunks`: cada fragmento (texto, página, sección si se detectó,
  posición, y el vector de embedding como BLOB).
- `kb_chunks_fts`: índice FTS5 para la búsqueda por palabra clave.

No hay `company_id`: los manuales son conocimiento global del proyecto, no
datos por empresa.

Como el cliente de sqlite del proyecto tiene deshabilitada la carga de
extensiones nativas (`enableLoadExtension(false)`), no se usa ninguna
extensión de vectores: la búsqueda semántica hace un escaneo en memoria con
similitud coseno sobre los vectores guardados. Es válido hasta varias
decenas de miles de fragmentos; si la colección crece mucho más allá de eso,
la vía de escape es sustituir ese escaneo por un índice de vecinos más
cercanos, sin tocar el resto de la arquitectura.

## Cómo añadir o actualizar manuales

1. Coloca los PDF en la carpeta que apunte `KB_SOURCE_DIR` (en `.env.local`).
2. Ejecuta `npm run kb:ingest`.

Un PDF cuyo contenido no ha cambiado (mismo hash) y cuyo modelo de
embeddings sigue siendo el mismo se omite. Un PDF nuevo se indexa. Un PDF
modificado se reindexa por completo (se sustituyen sus fragmentos, no se
duplican). Nada de esto ocurre al hacer una pregunta en el chat: la ingesta
es siempre un paso aparte, manual.

## Configuración (variables de entorno)

| Variable | Qué hace |
|---|---|
| `AI_PROVIDER` | Implementación de chat activa (`http-compatible` es la única incluida). |
| `EMBEDDING_PROVIDER` | Implementación de embeddings activa (idem). |
| `EMBEDDING_MODEL` | Modelo de embeddings a usar contra el endpoint de `AI_BASE_URL`. |
| `EMBEDDING_DIMENSIONS` | Dimensión del vector pedida al proveedor (menor = más rápido de comparar). |
| `KB_SOURCE_DIR` | Carpeta con los PDF a indexar (usada solo por `kb:ingest`). |
| `KB_CHUNK_SIZE_CHARS` / `KB_CHUNK_OVERLAP_CHARS` | Tamaño y solape de los fragmentos. |
| `KB_TOP_K` | Cuántos fragmentos como máximo se recuperan por pregunta. |
| `KB_MIN_SCORE` | Umbral de confianza; por debajo, se descarta el fragmento en vez de arriesgarse a citarlo. |

Los valores por defecto (1200/150 caracteres, top-6, umbral 0.55) están
calibrados sobre manuales reales de este proyecto (~2.300-3.500 caracteres
por página); ajústalos si el tipo de documentación cambia mucho.

## Cambiar de proveedor de IA o de embeddings

Ninguna otra parte de la aplicación sabe qué proveedor está activo. Añadir
uno nuevo es: crear el archivo en `src/lib/ai/providers/`, añadir un `case`
en `get-chat-provider.ts` o `get-embedding-provider.ts`, y seleccionarlo con
`AI_PROVIDER`/`EMBEDDING_PROVIDER` en `.env.local` - sin tocar el chat ni el
módulo de conocimiento.

Si el nuevo modelo de embeddings tiene una dimensión distinta, basta con
volver a ejecutar `npm run kb:ingest`: `ingest.ts` detecta que el
`embedding_model` guardado no coincide con el configurado y reindexa cada
documento automáticamente.

## Umbral de confianza y citas

Si no se recupera ningún fragmento por encima de `KB_MIN_SCORE`, el chat no
intenta responder con conocimiento general: el system message construido en
`src/lib/knowledge/prompt.ts` instruye explícitamente responder con "No he
encontrado información suficiente en los manuales disponibles para responder
con seguridad a esta pregunta." Cuando sí hay contexto, cada fragmento va
etiquetado con documento y página para que la respuesta pueda citarlos.

## Seguridad frente a contenido de los PDF

El bloque de documentación recuperada se manda siempre como DATO, nunca como
instrucción: el system message le dice explícitamente al modelo que ignore
cualquier texto dentro de los manuales que intente darle órdenes o cambiar
las reglas. La pregunta real del usuario viaja aparte, en los mensajes de la
conversación, nunca mezclada dentro del bloque de contexto.
