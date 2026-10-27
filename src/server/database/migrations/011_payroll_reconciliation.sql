CREATE TABLE payroll_reconciliation_dossiers (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  society_code TEXT NOT NULL,
  period TEXT NOT NULL,
  title TEXT NOT NULL,
  revision INTEGER NOT NULL CHECK (revision >= 1),
  payload_json TEXT NOT NULL CHECK (json_valid(payload_json)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX payroll_reconciliation_company ON payroll_reconciliation_dossiers(company_id, society_code, updated_at DESC);
PRAGMA user_version = 11;
