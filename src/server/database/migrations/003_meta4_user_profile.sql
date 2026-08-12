CREATE TABLE IF NOT EXISTS meta4_user_profile (
  id TEXT PRIMARY KEY CHECK (id = 'global'),
  username TEXT NOT NULL,
  society TEXT NOT NULL CHECK (society IN ('CYC', 'IBER', 'COLL')),
  display_name TEXT,
  profile_json_encrypted TEXT NOT NULL,
  looked_up_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

ALTER TABLE companies ADD COLUMN society_code TEXT
  CHECK (society_code IS NULL OR society_code IN ('CYC', 'IBER', 'COLL'));

CREATE UNIQUE INDEX IF NOT EXISTS idx_companies_society_code_unique
  ON companies(society_code)
  WHERE society_code IS NOT NULL;

PRAGMA user_version = 3;
