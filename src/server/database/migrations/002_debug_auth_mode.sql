ALTER TABLE local_browser_sessions
ADD COLUMN auth_mode TEXT NOT NULL DEFAULT 'meta4'
  CHECK (auth_mode IN ('meta4', 'debug'));

UPDATE local_browser_sessions
SET id = lower(hex(randomblob(16)));

PRAGMA user_version = 2;
