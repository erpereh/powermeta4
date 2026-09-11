# Chat global OpenAI-compatible

## Alcance

El chat de powermeta4 es una conversación convencional con una configuración
global para todos los workspaces locales. El servidor lee `AI_BASE_URL`,
`AI_API_KEY` y `AI_MODEL`; las tres variables son obligatorias. No existe
configuración por empresa, persistencia de proveedores ni selección de modelo
desde el navegador.

La autenticación, las empresas, las conversaciones y los mensajes siguen
siendo locales. El login y las herramientas SOAP de producto permanecen fuera
del chat. Registro Retributivo conserva su integración independiente con
`@google/genai`.

## Flujo de ejecución

`ChatRuntimeProvider` conserva `ExternalStoreRuntime` y la composición oficial
de assistant-ui. Al crear, editar o regenerar un turno persiste primero el
mensaje asistente placeholder y llama a:

```text
POST /api/chat/run
{ companyId, conversationId, assistantMessageId }
```

El handler valida la sesión, la empresa activa autorizada, la conversación y
que el mensaje indicado sea un mensaje asistente de esa conversación. Después
camina `parentMessageId` desde el asistente en curso hasta la raíz, invierte la
secuencia y excluye el placeholder actual. De los ancestros solo conserva
mensajes `user`/`assistant` cuyo contenido textual no está vacío. Las partes
no textuales de `content_json` nunca se convierten en texto para el modelo.

El historial visible permanece intacto en SQLite. El runtime conserva
persistencia incremental, reload, edición, regeneración, ramas,
`headMessageId`, cancelación y los estados `complete`, `cancelled` y `failed`.

## Cliente del proveedor

El cliente server-only acepta una raíz de API o una URL que ya termine en
`/chat/completions`. Normaliza el path y elimina query/fragmento antes de
realizar la petición. Envía solamente:

```json
{
  "model": "AI_MODEL",
  "messages": [{ "role": "user", "content": "..." }],
  "stream": true
}
```

La petición usa `Authorization: Bearer <AI_API_KEY>` y propaga `AbortSignal`.
No añade system/developer prompts, tools, functions, `tool_choice`,
`function_call`, temperatura ni metadatos Meta4.

La respuesta se procesa como SSE hasta `[DONE]`. Solo se aceptan
`choices[].delta.content` textuales; campos de tool calling inesperados se
ignoran y una respuesta sin texto utilizable falla de forma genérica. Los
deltas se acumulan en el servidor y el endpoint emite eventos internos
incrementales con contenido `MessageContent` acumulado.

Los códigos saneados son configuración ausente, autenticación, modelo no
disponible, límite 429, red y respuesta vacía/malformada. No se reenvían al
navegador los cuerpos del proveedor ni mensajes arbitrarios.

## Contrato de UI

Las páginas privadas obtienen server-side el único estado público seguro:

```ts
{ configured: boolean; model: string | null }
```

Nunca se exponen Base URL ni API key. El composer muestra `IA · <AI_MODEL>`
cuando está configurado y `IA no configurada` en caso contrario; Enviar queda
deshabilitado en el segundo caso. No hay picker, formularios de proveedor,
aprobaciones, tarjetas de disambiguación ni renderers de tools en el Thread.
Las respuestas usan únicamente el renderer Markdown de texto.

## Persistencia y migración

La migración `009_remove_agent_and_provider_configs.sql` elimina las tablas
`agent_pending_disambiguation`, `agent_turn_projections`,
`agent_privacy_bindings` y `ai_provider_configs`, además de la clave
`selectedProviderConfigId` de `workspace_settings`. No modifica migraciones
históricas ni datos de `conversations`, `messages`, attachments, padres,
ramas o heads. `DATABASE_SCHEMA_VERSION` pasa a 9.

Los backups exigen coincidencia exacta con el esquema 9. Los backups de
esquema 8 no se restauran directamente. El saneamiento elimina sesiones,
imports pendientes, recibos de idempotencia y el perfil Meta4 cifrado, pero
conserva chats, mensajes, actividad funcional, empresas y análisis de Registro
Retributivo.

## Límites deliberados

El endpoint de chat no consulta Meta4, no ejecuta SOAP, no resuelve empleados,
no usa Privacy Gateway y no declara ni ejecuta tools. `src/lib/tools/registry.ts`,
las acciones de producto, el historial de actividad, SOAP, login, sociedades,
Usuarios, detalle de empleados y Registro Retributivo siguen disponibles como
infraestructura normal fuera del chat.
