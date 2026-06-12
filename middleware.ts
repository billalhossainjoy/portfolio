import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/billal-admin/login") return NextResponse.next();

  const token  = request.cookies.get("admin-session")?.value;
  const secret = process.env.ADMIN_SECRET;

  if (!token || !secret || token !== secret) {
    return NextResponse.redirect(new URL("/billal-admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/billal-admin/:path*",
};
