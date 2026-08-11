import { LoginForm } from "@/components/auth/login-form";
import { isDebugAuthEnabled } from "@/lib/auth/debug-config";

export default function LoginPage() {
  return <LoginForm debugAuthEnabled={isDebugAuthEnabled()} />;
}
