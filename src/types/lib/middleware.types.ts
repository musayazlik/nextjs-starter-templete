import { NextRequest, NextResponse } from "next/server";

export type Middleware = (
  request: NextRequest
) => NextResponse | undefined | Promise<NextResponse | undefined>;