import type { NextRequest } from "next/server";
import { authMiddleware } from "@/middleware/auth.middleware";
import { i18nMiddleware } from "@/middleware/i18n.middleware";
import { botMiddleware } from "@/middleware/bot.middleware";
import { rateLimitMiddleware } from "@/middleware/rate-limit.middleware";

export function middleware(request: NextRequest) {
	// Auth check
	const authResponse = authMiddleware(request);
	if (authResponse) return authResponse;

	// Language routing
	const i18nResponse = i18nMiddleware(request);
	if (i18nResponse) return i18nResponse;

	// Bot blocking
	const botResponse = botMiddleware(request);
	if (botResponse) return botResponse;

	// Rate limiting
	return rateLimitMiddleware(request);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
