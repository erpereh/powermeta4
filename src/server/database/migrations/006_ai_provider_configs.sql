CREATE TABLE IF NOT EXISTS ai_provider_configs (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL CHECK (length(trim(name)) BETWEEN 1 AND 120),
  base_url TEXT NOT NULL CHECK (length(trim(base_url)) BETWEEN 1 AND 2048),
  api_key_encrypted TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ai_provider_configs_company_created
  ON ai_provider_configs (company_id, created_at DESC, id DESC);

PRAGMA user_version = 6;
