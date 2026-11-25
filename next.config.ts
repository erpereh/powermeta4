import { withAui } from "@assistant-ui/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["koffi", "mssql"],
  outputFileTracingIncludes: {
    "/api/chat/run": ["./scripts/kb-vector-worker.cjs"],
  },
};

export default withAui(nextConfig);
