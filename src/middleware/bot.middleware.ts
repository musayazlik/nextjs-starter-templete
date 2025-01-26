// src/middleware/bot.middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isBot } from "@/lib/bot-detector";

export function botMiddleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");

  if (userAgent && isBot(userAgent)) {
    return NextResponse.rewrite(new URL("/blocked", request.url));
  }

  return NextResponse.next();
}