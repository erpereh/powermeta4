import { NextResponse, type NextRequest } from "next/server";

import { isOpaqueSessionId, SESSION_COOKIE_NAME } from "@/lib/auth/token";

const isPublicPath = (pathname: string) => pathname === "/login";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next/") || pathname === "/favicon.ico" || isPublicPath(pathname)) {
    if (isPublicPath(pathname)) {
      const sessionId = request.cookies.get(SESSION_COOKIE_NAME)?.value;
      if (isOpaqueSessionId(sessionId)) return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
  }

  const sessionId = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!isOpaqueSessionId(sessionId)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
