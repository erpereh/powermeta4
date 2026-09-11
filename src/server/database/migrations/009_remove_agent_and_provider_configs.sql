DELETE FROM workspace_settings
WHERE key = 'selectedProviderConfigId';

DROP TABLE IF EXISTS agent_pending_disambiguation;
DROP TABLE IF EXISTS agent_turn_projections;
DROP TABLE IF EXISTS agent_privacy_bindings;
DROP TABLE IF EXISTS ai_provider_configs;

PRAGMA user_version = 9;
