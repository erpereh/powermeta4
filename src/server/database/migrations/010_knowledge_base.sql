CREATE TABLE IF NOT EXISTS kb_documents (
  id TEXT PRIMARY KEY,
  file_name TEXT NOT NULL,
  original_file_name TEXT NOT NULL,
  relative_path TEXT NOT NULL UNIQUE,
  checksum TEXT NOT NULL,
  byte_size INTEGER NOT NULL CHECK (byte_size >= 0),
  page_count INTEGER NOT NULL CHECK (page_count >= 0),
  version INTEGER NOT NULL DEFAULT 1 CHECK (version >= 1),
  metadata_json TEXT NOT NULL CHECK (json_valid(metadata_json)),
  embedding_model TEXT NOT NULL,
  embedding_dims INTEGER NOT NULL CHECK (embedding_dims > 0),
  indexed_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_kb_documents_checksum ON kb_documents (checksum);

CREATE TABLE IF NOT EXISTS kb_chunks (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL REFERENCES kb_documents(id) ON DELETE CASCADE,
  chunk_index INTEGER NOT NULL CHECK (chunk_index >= 0),
  page_number INTEGER NOT NULL CHECK (page_number >= 1),
  section_title TEXT,
  char_start INTEGER NOT NULL CHECK (char_start >= 0),
  char_end INTEGER NOT NULL CHECK (char_end >= char_start),
  text TEXT NOT NULL,
  embedding BLOB NOT NULL,
  embedding_model TEXT NOT NULL,
  embedding_dims INTEGER NOT NULL CHECK (embedding_dims > 0),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_kb_chunks_document ON kb_chunks (document_id, chunk_index);

-- Standalone FTS5 index (not "external content") so chunk ids can stay
-- TEXT/UUID instead of being mapped to integer rowids. Kept in sync with
-- kb_chunks via triggers below.
CREATE VIRTUAL TABLE IF NOT EXISTS kb_chunks_fts USING fts5(chunk_id UNINDEXED, text);

CREATE TRIGGER IF NOT EXISTS kb_chunks_fts_ai AFTER INSERT ON kb_chunks BEGIN
  INSERT INTO kb_chunks_fts (chunk_id, text) VALUES (new.id, new.text);
END;

CREATE TRIGGER IF NOT EXISTS kb_chunks_fts_ad AFTER DELETE ON kb_chunks BEGIN
  DELETE FROM kb_chunks_fts WHERE chunk_id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS kb_chunks_fts_au AFTER UPDATE ON kb_chunks BEGIN
  DELETE FROM kb_chunks_fts WHERE chunk_id = old.id;
  INSERT INTO kb_chunks_fts (chunk_id, text) VALUES (new.id, new.text);
END;

PRAGMA user_version = 10;
