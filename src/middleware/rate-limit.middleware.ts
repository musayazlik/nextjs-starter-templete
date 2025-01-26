// src/middleware/rate-limit.middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rateLimiter } from "@/lib/rate-limiter";

export async function rateLimitMiddleware(request: NextRequest) {
	const ip =
		request.headers.get("x-forwarded-for") ??
		request.headers.get("x-real-ip") ??
		"127.0.0.1";
	const { success } = await rateLimiter.limit(ip);

	if (!success) {
		return new NextResponse("Too many requests", { status: 429 });
	}

	return NextResponse.next();
}
