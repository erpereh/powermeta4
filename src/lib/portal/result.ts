import type { Meta4Society } from "@/lib/meta4/societies";

import type { PendingId } from "./types";

/** Resultado de toda lectura del portal: real, dependencia declarada o error. */
export type PortalResult<T> =
  | { readonly status: "ok"; readonly society: Meta4Society; readonly data: T }
  | {
      readonly status: "unavailable";
      readonly pending: readonly PendingId[];
      readonly message: string;
    }
  | { readonly status: "error"; readonly message: string };

export const portalOk = <T>(society: Meta4Society, data: T): PortalResult<T> => ({
  status: "ok",
  society,
  data,
});

export const portalUnavailable = <T>(
  pending: readonly PendingId[],
  message: string,
): PortalResult<T> => ({ status: "unavailable", pending, message });

export const portalError = <T>(message: string): PortalResult<T> => ({ status: "error", message });
