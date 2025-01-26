// src/middleware/i18n.middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "tr", "de"];
const DEFAULT_LOCALE = "en";

export function i18nMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = request.cookies.get("NEXT_LOCALE")?.value || DEFAULT_LOCALE;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}