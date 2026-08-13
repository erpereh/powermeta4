import { NextResponse, type NextRequest } from "next/server";

import { isOpaqueSessionId, SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS } from "@/lib/auth/token";

const isPublicPath = (pathname: string) => pathname === "/login";

export const RETRIBUTIVO_ANALYZE_PATH = "/api/registro-retributivo/analyze";

export const PROXY_MATCHER =
  "/((?!_next/static|_next/image|favicon.ico|api/registro-retributivo/analyze(?:/.*)?$|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)";

export const matchesProxyMatcher = (pathname: string): boolean =>
  new RegExp(`^${PROXY_MATCHER}$`).test(pathname);

const refreshOpaqueCookie = (
  response: NextResponse,
  sessionId: string,
  secure: boolean,
): NextResponse => {
  response.cookies.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    sameSite: "strict",
    secure,
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
  return response;
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const secure = request.nextUrl.protocol === "https:" || forwardedProtocol === "https";
  if (pathname.startsWith("/_next/") || pathname === "/favicon.ico" || isPublicPath(pathname)) {
    if (isPublicPath(pathname)) {
      const sessionId = request.cookies.get(SESSION_COOKIE_NAME)?.value;
      if (request.nextUrl.searchParams.get("expired") === "1") {
        const response = NextResponse.next();
        response.cookies.set(SESSION_COOKIE_NAME, "", {
          httpOnly: true,
          sameSite: "strict",
          secure,
          path: "/",
          maxAge: 0,
        });
        return response;
      }
      if (isOpaqueSessionId(sessionId)) {
        return refreshOpaqueCookie(
          NextResponse.redirect(new URL("/home", request.url)),
          sessionId,
          secure,
        );
      }
    }
    return NextResponse.next();
  }

  const sessionId = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!isOpaqueSessionId(sessionId)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next();
  return isOpaqueSessionId(sessionId) ? refreshOpaqueCookie(response, sessionId, secure) : response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/registro-retributivo/analyze(?:/.*)?$|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
