// src/middleware/auth.middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const isAuthenticated = request.cookies.has("auth-token");

	// Korunan rotalar
	const protectedRoutes = ["/dashboard", "/profile"];

	if (!isAuthenticated && protectedRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}
