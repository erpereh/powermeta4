CREATE TABLE IF NOT EXISTS retributivo_analyses (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  registro_file_name TEXT NOT NULL,
  pdf_count INTEGER NOT NULL CHECK (pdf_count >= 0),
  schema_version INTEGER NOT NULL,
  result_json TEXT NOT NULL CHECK (json_valid(result_json)),
  config_json TEXT NOT NULL CHECK (json_valid(config_json)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_retributivo_analyses_company_created
  ON retributivo_analyses (company_id, created_at DESC, id DESC);

CREATE TABLE IF NOT EXISTS retributivo_settings (
  company_id TEXT PRIMARY KEY REFERENCES companies(id) ON DELETE CASCADE,
  settings_json TEXT NOT NULL CHECK (json_valid(settings_json)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS retributivo_state (
  company_id TEXT PRIMARY KEY REFERENCES companies(id) ON DELETE CASCADE,
  active_analysis_id TEXT REFERENCES retributivo_analyses(id) ON DELETE SET NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS retributivo_assistant_records (
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  store TEXT NOT NULL CHECK (
    store IN (
      'actions',
      'analysisVersions',
      'assistantSettings',
      'cache',
      'chunks',
      'cleanupJobs',
      'conversations',
      'documents',
      'events',
      'executionAudits',
      'indexJobs',
      'messages',
      'migrations',
      'modelCatalog',
      'modelPreferences',
      'modelProfiles',
      'providerConfigs',
      'searchTerms',
      'snapshots',
      'sources'
    )
  ),
  id TEXT NOT NULL,
  payload_json TEXT NOT NULL CHECK (json_valid(payload_json)),
  conversation_id TEXT,
  analysis_id TEXT,
  document_id TEXT,
  status TEXT,
  created_at TEXT,
  updated_at TEXT,
  PRIMARY KEY (company_id, store, id)
);

CREATE INDEX IF NOT EXISTS idx_retributivo_assistant_company_store
  ON retributivo_assistant_records (company_id, store);

CREATE INDEX IF NOT EXISTS idx_retributivo_assistant_conversation
  ON retributivo_assistant_records (company_id, store, conversation_id);

CREATE INDEX IF NOT EXISTS idx_retributivo_assistant_analysis
  ON retributivo_assistant_records (company_id, store, analysis_id);

CREATE INDEX IF NOT EXISTS idx_retributivo_assistant_document
  ON retributivo_assistant_records (company_id, store, document_id);

CREATE INDEX IF NOT EXISTS idx_retributivo_assistant_status
  ON retributivo_assistant_records (company_id, store, status);

PRAGMA user_version = 4;
