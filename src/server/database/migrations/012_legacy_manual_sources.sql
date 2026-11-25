CREATE TABLE legacy_manual_sources (
  id TEXT PRIMARY KEY,
  version INTEGER NOT NULL CHECK (version >= 1),
  checksum TEXT NOT NULL CHECK (length(checksum) = 64 AND checksum NOT GLOB '*[^0-9a-f]*'),
  original_file_name TEXT NOT NULL,
  relative_path TEXT NOT NULL
);

INSERT INTO legacy_manual_sources (id, version, checksum, original_file_name, relative_path)
SELECT id, version, lower(checksum), original_file_name, relative_path FROM kb_documents;

DROP TRIGGER kb_chunks_fts_ai;
DROP TRIGGER kb_chunks_fts_ad;
DROP TRIGGER kb_chunks_fts_au;
DROP TABLE kb_chunks_fts;
DROP TABLE kb_chunks;
DROP TABLE kb_documents;

PRAGMA user_version = 12;
