CREATE TABLE meta4_user_profile_v8 (
  society TEXT PRIMARY KEY CHECK (society IN ('CYC', 'IBER', 'COLL')),
  username TEXT NOT NULL,
  display_name TEXT,
  profile_json_encrypted TEXT NOT NULL,
  looked_up_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

INSERT INTO meta4_user_profile_v8 (
  society,
  username,
  display_name,
  profile_json_encrypted,
  looked_up_at,
  created_at,
  updated_at
)
SELECT
  society,
  username,
  display_name,
  profile_json_encrypted,
  looked_up_at,
  created_at,
  updated_at
FROM meta4_user_profile
WHERE society IN ('CYC', 'IBER', 'COLL');

DROP TABLE meta4_user_profile;

ALTER TABLE meta4_user_profile_v8 RENAME TO meta4_user_profile;

PRAGMA user_version = 8;
