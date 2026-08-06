CREATE TABLE IF NOT EXISTS schema_migrations (
  version INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  checksum TEXT NOT NULL,
  applied_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS companies (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  short_name TEXT NOT NULL,
  icon TEXT NOT NULL CHECK (icon IN ('building', 'briefcase', 'layers')),
  color TEXT NOT NULL CHECK (color IN ('blue', 'purple', 'green')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Nuevo chat',
  favorite INTEGER NOT NULL DEFAULT 0 CHECK (favorite IN (0, 1)),
  icon TEXT,
  icon_color TEXT,
  head_message_id TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  parent_message_id TEXT REFERENCES messages(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content_json TEXT NOT NULL CHECK (json_valid(content_json)),
  status TEXT NOT NULL CHECK (status IN ('running', 'complete', 'incomplete', 'cancelled', 'failed')),
  generation_id TEXT,
  sequence INTEGER NOT NULL DEFAULT 0 CHECK (sequence >= 0),
  error_code TEXT CHECK (
    error_code IS NULL OR (
      length(error_code) BETWEEN 1 AND 64
      AND error_code GLOB '[A-Z]*'
      AND error_code NOT GLOB '*[^A-Z0-9_]*'
    )
  ),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE (id, conversation_id)
);

CREATE TABLE IF NOT EXISTS attachments (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  message_id TEXT REFERENCES messages(id) ON DELETE SET NULL,
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL CHECK (size_bytes >= 0),
  checksum TEXT NOT NULL,
  relative_path TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL CHECK (json_valid(value_json)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS workspace_settings (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  key TEXT NOT NULL,
  value_json TEXT NOT NULL CHECK (json_valid(value_json)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE (company_id, key)
);

CREATE TABLE IF NOT EXISTS tool_activity (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  tool_id TEXT NOT NULL,
  action_id TEXT NOT NULL,
  metadata_json TEXT NOT NULL DEFAULT '{}' CHECK (json_valid(metadata_json)),
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS soap_sessions (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  jsession_id_encrypted TEXT NOT NULL,
  refresh_session_id_encrypted TEXT,
  session_id_encrypted TEXT,
  expires_at TEXT,
  last_validated_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS local_browser_sessions (
  id TEXT PRIMARY KEY,
  cookie_hash TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  created_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  revoked_at TEXT
);

CREATE TABLE IF NOT EXISTS pending_backup_imports (
  id TEXT PRIMARY KEY,
  import_id_hash TEXT NOT NULL UNIQUE,
  local_browser_session_hash TEXT NOT NULL,
  checksum TEXT NOT NULL,
  relative_path TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  consumed_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS idempotency_receipts (
  id TEXT PRIMARY KEY,
  client_mutation_id TEXT NOT NULL,
  operation TEXT NOT NULL,
  resource_type TEXT NOT NULL,
  resource_id TEXT,
  result_json TEXT NOT NULL CHECK (json_valid(result_json)),
  created_at TEXT NOT NULL,
  expires_at TEXT,
  UNIQUE (client_mutation_id, operation)
);

CREATE INDEX IF NOT EXISTS idx_conversations_company_updated ON conversations(company_id, updated_at);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_created ON messages(conversation_id, created_at);
CREATE INDEX IF NOT EXISTS idx_messages_parent ON messages(parent_message_id);
CREATE INDEX IF NOT EXISTS idx_attachments_conversation_created ON attachments(conversation_id, created_at);
CREATE INDEX IF NOT EXISTS idx_tool_activity_company_created ON tool_activity(company_id, created_at);
CREATE INDEX IF NOT EXISTS idx_browser_sessions_expiry ON local_browser_sessions(expires_at, revoked_at);
CREATE INDEX IF NOT EXISTS idx_pending_imports_expiry ON pending_backup_imports(expires_at, consumed_at);
CREATE INDEX IF NOT EXISTS idx_idempotency_created ON idempotency_receipts(created_at);
CREATE INDEX IF NOT EXISTS idx_idempotency_expiry ON idempotency_receipts(expires_at);

CREATE TRIGGER IF NOT EXISTS validate_message_parent_insert
BEFORE INSERT ON messages
WHEN NEW.parent_message_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM messages
    WHERE id = NEW.parent_message_id AND conversation_id = NEW.conversation_id
  )
BEGIN
  SELECT RAISE(ABORT, 'message parent must belong to the same conversation');
END;

CREATE TRIGGER IF NOT EXISTS validate_message_parent_update
BEFORE UPDATE OF parent_message_id, conversation_id ON messages
WHEN NEW.parent_message_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM messages
    WHERE id = NEW.parent_message_id AND conversation_id = NEW.conversation_id
  )
BEGIN
  SELECT RAISE(ABORT, 'message parent must belong to the same conversation');
END;

CREATE TRIGGER IF NOT EXISTS validate_message_parent_cycle_insert
BEFORE INSERT ON messages
WHEN NEW.parent_message_id IS NOT NULL
BEGIN
  SELECT RAISE(ABORT, 'message parent cycle is not allowed')
  WHERE EXISTS (
    WITH RECURSIVE ancestors(id) AS (
      SELECT NEW.parent_message_id
      UNION ALL
      SELECT messages.parent_message_id
      FROM messages
      JOIN ancestors ON ancestors.id = messages.id
      WHERE messages.parent_message_id IS NOT NULL
    )
    SELECT 1 FROM ancestors WHERE id = NEW.id
  );
END;

CREATE TRIGGER IF NOT EXISTS validate_message_parent_cycle_update
BEFORE UPDATE OF parent_message_id, conversation_id ON messages
WHEN NEW.parent_message_id IS NOT NULL
BEGIN
  SELECT RAISE(ABORT, 'message parent cycle is not allowed')
  WHERE EXISTS (
    WITH RECURSIVE ancestors(id) AS (
      SELECT NEW.parent_message_id
      UNION ALL
      SELECT messages.parent_message_id
      FROM messages
      JOIN ancestors ON ancestors.id = messages.id
      WHERE messages.parent_message_id IS NOT NULL
    )
    SELECT 1 FROM ancestors WHERE id = NEW.id
  );
END;

CREATE TRIGGER IF NOT EXISTS validate_attachment_message_insert
BEFORE INSERT ON attachments
WHEN NEW.message_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM messages
    WHERE id = NEW.message_id AND conversation_id = NEW.conversation_id
  )
BEGIN
  SELECT RAISE(ABORT, 'attachment message must belong to the same conversation');
END;

CREATE TRIGGER IF NOT EXISTS validate_attachment_message_update
BEFORE UPDATE OF message_id, conversation_id ON attachments
WHEN NEW.message_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM messages
    WHERE id = NEW.message_id AND conversation_id = NEW.conversation_id
  )
BEGIN
  SELECT RAISE(ABORT, 'attachment message must belong to the same conversation');
END;

CREATE TRIGGER IF NOT EXISTS validate_conversation_head_insert
BEFORE INSERT ON conversations
WHEN NEW.head_message_id IS NOT NULL
BEGIN
  SELECT RAISE(ABORT, 'conversation head must belong to the same conversation');
END;

CREATE TRIGGER IF NOT EXISTS validate_conversation_head_update
BEFORE UPDATE OF head_message_id ON conversations
WHEN NEW.head_message_id IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM messages
    WHERE id = NEW.head_message_id AND conversation_id = NEW.id
  )
BEGIN
  SELECT RAISE(ABORT, 'conversation head must belong to the same conversation');
END;

PRAGMA user_version = 1;
