ALTER TABLE ai_provider_configs ADD COLUMN model TEXT;

CREATE TABLE IF NOT EXISTS agent_privacy_bindings (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  token TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('employee')),
  payload_encrypted TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE (conversation_id, company_id, token)
);

CREATE INDEX IF NOT EXISTS idx_agent_privacy_bindings_conversation
  ON agent_privacy_bindings (conversation_id, company_id);

CREATE TABLE IF NOT EXISTS agent_turn_projections (
  message_id TEXT PRIMARY KEY REFERENCES messages(id) ON DELETE CASCADE,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('sanitized_text', 'tool_result', 'omit')),
  projection_json TEXT NOT NULL CHECK (json_valid(projection_json)),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_agent_turn_projections_conversation
  ON agent_turn_projections (conversation_id);

CREATE TABLE IF NOT EXISTS agent_pending_disambiguation (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  assistant_message_id TEXT NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  user_message_id TEXT NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  original_text TEXT NOT NULL,
  candidates_json TEXT NOT NULL CHECK (json_valid(candidates_json)),
  created_at TEXT NOT NULL
);

PRAGMA user_version = 7;
