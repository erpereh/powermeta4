export class AgentError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "AgentError";
    this.code = code;
  }
}

export class AgentPrivacyError extends AgentError {
  constructor(message: string) {
    super("PRIVACY_FAIL_CLOSED", message);
    this.name = "AgentPrivacyError";
  }
}

export class AgentProviderConfigError extends AgentError {
  constructor(message: string) {
    super("PROVIDER_CONFIG_UNAVAILABLE", message);
    this.name = "AgentProviderConfigError";
  }
}

export class AgentProviderRuntimeError extends AgentError {
  constructor(message: string) {
    super("PROVIDER_RUNTIME_FAILED", message);
    this.name = "AgentProviderRuntimeError";
  }
}

export class ProviderValidationError extends Error {
  readonly errorCode: string;

  constructor(errorCode: string, message: string) {
    super(message);
    this.name = "ProviderValidationError";
    this.errorCode = errorCode;
  }
}

export class AgentToolError extends AgentError {
  constructor(code: string, message: string) {
    super(code, message);
    this.name = "AgentToolError";
  }
}
