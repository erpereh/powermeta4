import { LoginForm } from "@/components/auth/login-form";
import { getQuickLoginCredentials, isDebugAuthEnabled } from "@/lib/auth/debug-config";

export default function LoginPage() {
  // Solo el usuario llega al cliente; la contraseña se queda en el servidor.
  return <LoginForm debugAuthEnabled={isDebugAuthEnabled()} quickLoginUsername={getQuickLoginCredentials()?.username} />;
}
