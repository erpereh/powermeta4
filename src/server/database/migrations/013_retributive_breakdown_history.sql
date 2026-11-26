CREATE TABLE retributive_breakdown_analyses (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  period_from TEXT NOT NULL,
  period_to TEXT NOT NULL,
  employee_rows INTEGER NOT NULL,
  group_count INTEGER NOT NULL,
  result_json TEXT NOT NULL CHECK (json_valid(result_json)),
  active INTEGER NOT NULL CHECK (active IN (0, 1))
);

CREATE INDEX idx_retributive_breakdown_company_created
  ON retributive_breakdown_analyses (company_id, created_at DESC, id DESC);

CREATE UNIQUE INDEX idx_retributive_breakdown_active
  ON retributive_breakdown_analyses (company_id) WHERE active = 1;

CREATE TABLE retributive_breakdown_books (
  analysis_id TEXT NOT NULL REFERENCES retributive_breakdown_analyses(id) ON DELETE CASCADE,
  grouping_id TEXT NOT NULL,
  bytes BLOB NOT NULL,
  PRIMARY KEY (analysis_id, grouping_id)
);

PRAGMA user_version = 13;
